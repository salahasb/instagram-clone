import Login from './Login';
import SignUp from './SignUp';

function Logo() {
  return (
    <>
      <img
        className="mb-16 block h-20 cursor-pointer dark:hidden"
        src="/instagram-logo.png"
        alt="instagram-image"
      />
      <img
        className="mb-16 hidden h-20 cursor-pointer brightness-90 dark:block"
        src="/instagram-logo-dark.png"
        alt="instagram-image"
      />
    </>
  );
}

function LoginSignup({ action }) {
  return (
    <div className="flex flex-col items-center border-gray-300 px-16 pb-8 pt-20 xs:border">
      <Logo />
      {action === 'login' ? <Login /> : <SignUp />}
    </div>
  );
}

export default LoginSignup;
