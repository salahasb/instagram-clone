import { forwardRef, useState } from "react";

function Form({ children, ...props }) {
	return (
		<form className="form" {...props}>
			{children}
		</form>
	);
}

const Input = forwardRef(({ label, type, ...props }, ref) => {
	//  this state for input of type password only! (for showing pw)
	const [inputType, setInputType] = useState(type);

	//  styles
	const labelStyles =
		"absolute top-4 left-0 -translate-y-1/2 cursor-text px-[0.7rem] select-none text-gray-500 dark:text-gray-500 pointer-events-none text-[1rem] peer-placeholder-shown:text-xl transition-[font-size,top] peer-placeholder-shown:top-1/2";

	return (
		<div className="relative">
			{/* empty placeholder for it's trick (animated placeholder) */}
			<input
				type={inputType || ""}
				{...props}
				ref={ref}
				placeholder=""
				className={`input peer`}
			/>

			<label className={labelStyles}>{label}</label>

			{type === "password" && (
				<span
					className="absolute right-4 top-1/2 -translate-y-1/2 text-[1.3rem] font-medium inline peer-placeholder-shown:hidden cursor-pointer"
					onClick={() =>
						setInputType((i) => (i === "password" ? "text" : "password"))
					}
				>
					{inputType === "text" ? "Hide" : "Show"}
				</span>
			)}
		</div>
	);
});

Form.Input = Input;

Input.displayName = "Input";

export default Form;
