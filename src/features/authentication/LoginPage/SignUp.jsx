import LoginWithGoogle from "./LoginWithGoogle";
import Or from "../../../components/Or.styled";
import SignupForm from "./SignupForm";

function SignUp() {
	return (
		<div>
			<p className="text-gray-500 text-[1.6rem] font-medium -mt-10 mb-8 text-center">
				Sign up to see photos and videos from your friends.
			</p>

			<LoginWithGoogle className="border-gray-300 dark:border-gray-700 border py-3 w-full text-center rounded-xl bg-gray-50 hover:bg-gray-100  dark:hover:bg-gray-800 transition-colors " />

			<Or>OR</Or>

			<SignupForm />
		</div>
	);
}

export default SignUp;
