import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { LOGGED_USER, USER } from '../../utils/constants';
import { useParams } from 'react-router-dom';
import {
  getUserByUsername,
  updateUserFollowInfo,
} from '../../services/userApi';
import { useEffect } from 'react';
import { client, config } from '../../services/appwrite.config';

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

  useEffect(() => {
    // for realtime follow process
    const unsubscribe = client.subscribe(
      `databases.${config.databasesId}.collections.${config.usersCollectionId}.documents`,
      (response) => {
        // console.log(response);
        refetch();
      },
    );

    return () => {
      unsubscribe();
      console.log('unsubscribed by clean-up func');
    };
  }, [refetch]);

  return { isFetchingUser, isLoading, error, user, refetch };
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
