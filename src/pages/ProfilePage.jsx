import Footer from '../components/Footer';
import LoadingPage from '../components/LoadingPage';
import NotFound from '../components/NotFound';
import { useLogout } from '../features/authentication/authQueries&Mutations';
import ProfileSummary from '../features/user/ProfileSummary';
import ProfileContents from '../features/user/ProfileContents';
import ProfileHeader from '../features/user/ProfileHeader';
import ProfileInfoBox from '../features/user/ProfileInfoBox';
import { useUser } from '../features/user/userQueries&Mutations';

function ProfilePage() {
  const { isLoading, error, user } = useUser();
  // const { isLoading: isLoadingPosts } = usePostsCount(user?.$id);

  // const error = userError || postsError;

  const { logoutUser } = useLogout();

  if (isLoading) return <p className="text-5xl">Loading....</p>;
  if (error) return <NotFound />;

  return (
    <div className="mx-auto flex h-full max-w-[92rem] flex-col">
      <ProfileHeader />

      <ProfileInfoBox />

      <div className="my-10">stories </div>

      <ProfileSummary className="736:hidden" />

      <button onClick={logoutUser} className="max-736:text-red-400">
        Logout
      </button>

      <ProfileContents />

      <Footer className="hidden 736:flex" />
    </div>
  );
}

export default ProfilePage;
