import Or from '../../components/Or';
import LoginForm from './LoginForm';
import LoginWithGoogle from './LoginWithGoogle';
import RecoverPassword from './RecoverPassword';
import { useLogin } from './authQueries&Mutations';

function Login() {
  // react query hooks
  const mutation = useLogin();
  // console.log(mutation);
  return;
  <>
    <LoginForm mutation={mutation} />

    <Or />

    <LoginWithGoogle />

    {mutation.isError && (
      <p className="mt-5 text-2xl text-red-500 ">{mutation.error.message}</p>
    )}

    <RecoverPassword />
  </>;
}

export default Login;
