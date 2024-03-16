import Or from '../../components/Or';
import LoginForm from './LoginForm';
import LoginWithGoogle from './LoginWithGoogle';
import RecoverPassword from './RecoverPassword';

function Login() {
  return (
    <>
      <LoginForm />
      <Or />
      <LoginWithGoogle />
      <RecoverPassword />
    </>
  );
}

export default Login;
