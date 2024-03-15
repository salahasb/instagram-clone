import LoginForm from "./LoginForm";
import Or from "../../../components/Or.styled";
import LoginWithGoogle from "./LoginWithGoogle";
import RecoverPassword from "./RecoverPassword";

function Login() {
	return (
		<>
			<LoginForm />
			<Or>OR</Or>
			<LoginWithGoogle />
			<RecoverPassword />
		</>
	);
}

export default Login;
