import { useState } from "react";
import LoginSignup from "./LoginSignup";

function LoginSignupToggle({ action, setAction }) {
	const handleToggle = () => {
		setAction((t) => (t === "login" ? "signup" : "login"));
	};

	return (
		<div className="border-gray-300  mb-L:border dark:border-gray-600 py-8 text-center text-[1.4rem] text-black dark:text-white">
			<div>
				<p className="inline">
					{action === "login" ? "Don't have an account?" : "Have an account?"}
				</p>{" "}
				<button
					onClick={handleToggle}
					className="text-blue-500 dark:text-blue-400 font-semibold"
				>
					{action === "login" ? "Sign up" : "Log in"}
				</button>
			</div>
		</div>
	);
}

function GetApp() {
	return (
		<div className="flex flex-col items-center gap-x-2 gap-y-6">
			<p className="basis-full text-[1.4rem] text-black dark:text-white">
				Get the app
			</p>

			<div className="flex justify-center gap-3">
				<img src="/google-store.png" alt="" className=" w-1/3" />

				<img src="/microsoft-store.png" alt="" className="w-1/3 " />
			</div>
		</div>
	);
}

function LoginSignupBox() {
	const [action, setAction] = useState("login");

	return (
		<div className="flex flex-col gap-4 max-w-[35rem] ">
			<LoginSignup action={action} />

			<LoginSignupToggle action={action} setAction={setAction} />

			<GetApp />
		</div>
	);
}
export default LoginSignupBox;
