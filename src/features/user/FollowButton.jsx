import { useLoggedInUser } from '../authentication/authQueries&Mutations';
import { useUpdateUserFollows, useUser } from './userQueries&Mutations';
import Button from '../../components/Button';
import Spinner from '../../components/Spinner';

function FollowButton() {
  //////////////////////////////////////////////// hooks
  // get the logged user
  const {
    user: { $id: loggedUserId, followings: loggedUserFollowings },
  } = useLoggedInUser();

  // get the other user
  const {
    isFetchingUser,
    user: {
      $id: otherUserId,
      followers: otherUserFollowers,
      followings: otherUserFollowings,
    },
  } = useUser();

  // to update the user's follows fields
  const { isLoading: isUpdatingUser, updateUserFollows } =
    useUpdateUserFollows();

  ///////////////////////////////////////// derive state & calc
  const isLoading = isFetchingUser || isUpdatingUser;
  // check if the logged user is a follower of the other user
  const isFollower = otherUserFollowers.includes(loggedUserId);
  // check if the logged user is followed by the other user
  const isFollowed = otherUserFollowings.includes(loggedUserId);

  ///////////////////////////////////////// event Listeners
  function handleFollows(action) {
    // decide whether the action will be deleting the follow or adding a new one based on "action" param
    const followings =
      action === 'follow'
        ? [...loggedUserFollowings, otherUserId]
        : loggedUserFollowings.filter((userId) => userId !== otherUserId);

    const followers =
      action === 'follow'
        ? [...otherUserFollowers, loggedUserId]
        : otherUserFollowers.filter((userId) => userId !== loggedUserId);

    // the ultimate data
    const data = {
      loggedUser: {
        id: loggedUserId,
        body: { followings },
      },
      otherUser: {
        id: otherUserId,
        body: { followers },
      },
    };

    // update the "followings" field of the logged user & the "followers" field of the other user
    updateUserFollows(data);
  }

  ///////////////////////////////////////// Rendering
  if (!isFollowed && !isFollower)
    return (
      <Button onClick={() => handleFollows('follow')} disabled={isLoading}>
        {isLoading ? <Spinner /> : 'Follow'}
      </Button>
    );

  if (isFollowed && !isFollower)
    return (
      <Button onClick={() => handleFollows('follow')} disabled={isLoading}>
        {isLoading ? <Spinner /> : 'Follow Back'}
      </Button>
    );

  return (
    <Button
      type="secondary"
      disabled={isLoading}
      //   onClick={() => handleFollows('unfollow')}
      className="text-red-500"
    >
      {/* {isLoading ? <Spinner /> : 'Unfollow'} */}
      Unfollow
    </Button>
  );
}

export default FollowButton;
