import styled from "styled-components";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 0.7rem;

	& > button {
		margin-top: 0.8rem;
	}
`;
const Input = styled.input`
	background-color: var(--color-grey-50);
	border: 1px solid var(--color-grey-300);
	outline: 0;
	padding: 0.5rem 0.7rem;
	border-radius: var(--border-radius-sm);

	&:focus {
		border: 1px solid var(--color-grey-400);
	}
`;

Form.Input = Input;

export default Form;
