import Or from '../../components/Or';
import LoginWithGoogle from './LoginWithGoogle';
import SignupForm from './SignupForm';

function SignUp() {
  return (
    <div>
      <p className="-mt-10 mb-8 text-center text-[1.6rem] font-medium text-gray-500">
        Sign up to see photos and videos from your friends.
      </p>

      <LoginWithGoogle className="w-full rounded-xl border border-gray-300 bg-gray-50 py-3 text-center transition-colors hover:bg-gray-100  dark:border-gray-700 dark:hover:bg-gray-800 " />
      <Or />

      <SignupForm />
    </div>
  );
}

export default SignUp;
