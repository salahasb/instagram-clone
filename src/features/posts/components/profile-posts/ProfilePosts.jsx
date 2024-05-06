import Spinner from '../../../../components/Spinner';
import PostItem from './ProfilePostItem';
import { useUserPosts } from '../../postQueries&Mutations';
import ProfileEmptyMessage from '../../../user/ProfileEmptyMessage';
import { HiOutlineCamera } from 'react-icons/hi2';

function ProfilePosts() {
  const { isLoadingUserPosts, posts, userPostsError } = useUserPosts();

  if (isLoadingUserPosts) return <Spinner className="  fill-black " />;

  if (!posts.length)
    return (
      <ProfileEmptyMessage
        title="Share Photos"
        description="When you share photos, they will appear on your profile."
        Icon={HiOutlineCamera}
        resource="posts"
      />
    );

  if (userPostsError) return <p>Something Went Wrong</p>;

  return (
    <div>
      <div className="mb-28 grid grid-cols-3 gap-[0.4rem] *:aspect-square *:overflow-hidden [&>*_img]:h-full [&>*_img]:w-full [&>*_img]:object-cover">
        {posts.map((post) => (
          <PostItem key={post.$id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default ProfilePosts;
