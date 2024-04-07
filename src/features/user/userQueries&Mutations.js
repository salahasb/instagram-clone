import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { LOGGED_USER, USER, USERS } from '../../utils/constants';
import { useParams } from 'react-router-dom';
import {
  getUserByUsername,
  getUsers,
  updateUserFollowInfo,
} from '../../services/userApi';
import { useEffect } from 'react';
import { client, config } from '../../services/appwrite.config';
import { useLoggedInUser } from '../authentication/authQueries&Mutations';

export function useUser() {
  const { username } = useParams();

  const {
    isFetching: isFetchingUser,
    isLoading,
    error,
    data: user,
    refetch,
  } = useQuery({
    queryKey: [USER, username],
    queryFn: () => getUserByUsername(username),
    staleTime: Infinity,
  });

  // for realtime follow process
  useEffect(() => {
    // subscribe to users channel
    const unsubscribe = client.subscribe(
      `databases.${config.databasesId}.collections.${config.usersCollectionId}.documents`,
      (response) => {
        // refetch whenever a change occurred to users
        refetch();
      },
    );

    return () => {
      unsubscribe();
    };
  }, [refetch]);

  return { isFetchingUser, isLoading, error, user, refetch };
}

export function useMutuals(otherUser, isLoggedUser) {
  const { user: loggedUser } = useLoggedInUser();

  const enabled = !isLoggedUser && otherUser;

  let mutuals;

  if (enabled) {
    const loggedUserFollowings = loggedUser.followings;
    const otherUserFollowers = otherUser.followers;

    mutuals = otherUserFollowers.filter((userId) =>
      loggedUserFollowings.includes(userId),
    );

    console.log(mutuals);
  }

  const {
    data: mutualUsers,
    isLoading: isLoadingMutuals,
    error: mutualsError,
  } = useQuery({
    queryFn: () => getUsers(mutuals),
    queryKey: [USERS],
    enabled: Boolean(enabled),
  });

  return { mutualUsers, isLoadingMutuals, mutualsError };
}

export function useUpdateUserFollows() {
  const queryClient = useQueryClient();

  const {
    isLoading,
    error,
    mutate: updateUserFollows,
  } = useMutation({
    mutationFn: updateUserFollowInfo,
    onSuccess: () => {
      // for the logged user
      queryClient.invalidateQueries([LOGGED_USER]);
      // for the other user (it could be the logged user too)
      queryClient.refetchQueries([USER]);
    },
  });

  //

  return { isLoading, error, updateUserFollows };
}
