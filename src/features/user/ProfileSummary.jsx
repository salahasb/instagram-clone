import { useUser } from './userQueries&Mutations';

function ProfileSummary({ className, userId }) {
  const {
    user: { postsCount, followers, followings },
  } = useUser(userId);

  return (
    <div
      className={`736:grow-1 mt-5 flex justify-evenly gap-12 border-t border-gray-200 py-5  text-center text-2xl 736:order-4 736:justify-start 736:border-0 736:py-0 736:text-left ${className}`}
    >
      <div className=" flex flex-col 736:flex-row 736:gap-2">
        <span className="font-medium ">{postsCount}</span>
        <div className="text-gray-500 736:text-inherit">posts</div>
      </div>
      <div className=" flex flex-col 736:flex-row 736:gap-2">
        <span className="font-medium ">{followers.length}</span>
        <div className="text-gray-500 736:text-inherit">followers</div>
      </div>
      <div className=" flex flex-col 736:flex-row 736:gap-2">
        <span className="font-medium ">{followings.length}</span>
        <div className="text-gray-500 736:text-inherit">following</div>
      </div>
    </div>
  );
}

export default ProfileSummary;
