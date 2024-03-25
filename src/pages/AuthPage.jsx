import LoginSignupBox from '../features/authentication/LoginSignupBox';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLoggedInUser } from '../features/authentication/authQueries&Mutations';

function AuthPage() {
  const { user, isLoading } = useLoggedInUser();

  const navigate = useNavigate();

  useEffect(() => {
    console.log('Auth page effect');

    if (user) navigate('/');
  }, [user, isLoading, navigate]);

  if (isLoading)
    return <div className="text-8xl text-blue-500">Loading......</div>;

  if (user) return;

  return (
    <div>
      <div className="flex h-screen flex-col [&>div]:flex [&>div]:w-full [&>div]:flex-1 [&>div]:items-center">
        <div>
          <div className="mx-auto flex max-w-[75rem] flex-1 basis-1/2 items-center justify-center gap-[3rem] *:flex-1">
            <div className="hidden 54.68:block">
              <img
                src="/insta-app-screenshot.png"
                alt="instagram app screenshot"
              />
            </div>
            <LoginSignupBox />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default AuthPage;
