import Footer from '../components/Footer';
import LoadingPage from '../components/LoadingPage';
import NotFound from '../components/NotFound';
import { useLogout } from '../features/authentication/authQueries&Mutations';
import ProfileSummary from '../features/user/ProfileSummary';
import ProfileContents from '../features/user/ProfileContents';
import ProfileInfoBox from '../features/user/ProfileInfoBox';
import { useMutuals, useUser } from '../features/user/userQueries&Mutations';
import useIsLoggedUser from '../hooks/useIsLoggedUser';
import MainContentContainer from '../components/MainContentContainer';
import { BsGearWide } from 'react-icons/bs';
import PageMobileHeader from '../components/PageMobileHeader';

function ProfilePage() {
  const { isLoading: isLoadingUser, error, user } = useUser();
  // console.log(1);
  const isLoggedUser = useIsLoggedUser();

  const { isLoadingMutuals } = useMutuals(user, isLoggedUser);

  const { logoutUser } = useLogout();

  if (error) return <NotFound />;

  if ((isLoggedUser && isLoadingUser) || (!isLoggedUser && isLoadingMutuals))
    return <p className="text-5xl">Loading....</p>;

  return (
    // <div className="mx-auto flex h-full max-w-[92rem] flex-col">
    <MainContentContainer>
      {/* <ProfileHeader /> */}
      <PageMobileHeader pageTitle={user.username}>
        <button>{isLoggedUser && <BsGearWide size={24} />}</button>
      </PageMobileHeader>

      <ProfileInfoBox />

      <div className="my-10">stories </div>

      <ProfileSummary className="736:hidden" />

      <button onClick={logoutUser} className="max-736:text-red-400">
        Logout
      </button>

      <ProfileContents />

      <Footer className="hidden 736:flex" />
    </MainContentContainer>
    //</div>
  );
}

export default ProfilePage;
