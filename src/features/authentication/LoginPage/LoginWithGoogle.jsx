import { FcGoogle } from "react-icons/fc";

function LoginWithGoogle({ className }) {
	return (
		<div
			className={`flex items-center justify-center gap-x-3 cursor-pointer ${className}`}
		>
			<FcGoogle size={18} />
			<p className="font-medium dark:text-stone-300 text-stone-700 text-[1.4rem]">
				Log in with Google
			</p>
		</div>
	);
}

export default LoginWithGoogle;
