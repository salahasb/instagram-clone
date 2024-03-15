import { useState } from "react";
import styled from "styled-components";

// const Form = styled.form`
// 	display: flex;
// 	flex-direction: column;
// 	width: 100%;
// 	gap: 0.7rem;

// 	& > button {
// 		margin-top: 0.8rem;
// 	}
// `;
function Form({ children }) {
	return <form className="form">{children}</form>;
}

function Input({ className, placeholder, ...props }) {
	const [showPassword, setShowPassword] = useState(false);

	const labelStyles =
		"absolute top-4 left-0 -translate-y-1/2 cursor-text px-[0.7rem] select-none text-gray-500 dark:text-gray-500 pointer-events-none text-[1rem] peer-placeholder-shown:text-xl transition-[font-size,top] peer-placeholder-shown:top-1/2";

	return (
		<div className="relative">
			<input {...props} placeholder="" className={`${className} input peer`} />

			<label className={labelStyles}>{placeholder}</label>
		</div>
	);
}

// const Input = styled.input`
// 	background-color: var(--color-grey-50);
// 	border: 1px solid var(--color-grey-300);
// 	outline: 0;
// 	padding: 0.5rem 0.7rem;
// 	border-radius: var(--border-radius-sm);

// 	&:focus {
// 		border: 1px solid var(--color-grey-400);
// 	}

// 	&::placeholder {
// 	}
// `;

Form.Input = Input;
export default Form;
