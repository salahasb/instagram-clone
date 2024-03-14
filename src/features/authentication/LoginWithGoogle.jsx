import { FcGoogle } from "react-icons/fc";

function LoginWithGoogle() {
	return (
		<div className="flex items-center gap-x-3 cursor-pointer ">
			<FcGoogle size={18} />
			<p className="font-medium text-2xl">Log in with Google</p>
		</div>
	);
}

export default LoginWithGoogle;
