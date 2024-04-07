import Footer from '../components/Footer';
import LoadingPage from '../components/LoadingPage';
import NotFound from '../components/NotFound';
import { useLogout } from '../features/authentication/authQueries&Mutations';
import ProfileSummary from '../features/user/ProfileSummary';
import ProfileContents from '../features/user/ProfileContents';
import ProfileHeader from '../features/user/ProfileHeader';
import ProfileInfoBox from '../features/user/ProfileInfoBox';
import { useMutuals, useUser } from '../features/user/userQueries&Mutations';
import useIsLoggedUser from '../hooks/useIsLoggedUser';

function ProfilePage() {
  const { isLoading: isLoadingUser, error, user: otherUser } = useUser();

  const isLoggedUser = useIsLoggedUser();

  const { isLoadingMutuals } = useMutuals(otherUser, isLoggedUser);

  const { logoutUser } = useLogout();

  // if (isLoggedUser) {
  //   if (isLoadingUser) return <p className="text-5xl">Loading....</p>;
  // } else if (isLoadingUser || isLoadingMutuals)
  //   return <p className="text-5xl">Loading....</p>;

  if (error) return <NotFound />;

  if ((isLoggedUser && isLoadingUser) || (!isLoggedUser && isLoadingMutuals))
    return <p className="text-5xl">Loading....</p>;

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
