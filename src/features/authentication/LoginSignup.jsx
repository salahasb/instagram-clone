import styled from "styled-components";
import LoginForm from "./LoginForm";
import LoginWithGoogle from "./LoginWithGoogle";
import RecoverPassword from "./RecoverPassword";

const StyledLoginSignup = styled.div`
	max-width: 33rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	& > img {
		height: 5rem;
		margin: 4rem 0;
	}

	@media (min-width: 23.37em) {
		border: 1px var(--color-grey-300) solid;
		padding: 0 4rem;
	}
`;

const OR = styled.div`
	position: relative;
	background-color: var(--color-grey-0);
	width: 100%;
	text-align: center;
	margin: 2rem 0;
	color: var(--color-grey-500);
	font-weight: 500;
	font-size: 1.3rem;

	&::after {
		content: "";
		display: block;
		height: 1px;
		width: 40%;
		position: absolute;
		top: 50%;
		right: 0;
		transform: translateY(-50%);
		background-color: var(--color-grey-300);
		/* z-index: -1; */
	}

	&::before {
		content: "";
		display: block;
		height: 1px;
		width: 40%;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		background-color: var(--color-grey-300);
	}
`;

function LoginSignup() {
	return (
		<StyledLoginSignup>
			<img src="/instagram-logo.png" alt="" />
			<LoginForm />
			<OR>OR</OR>
			<LoginWithGoogle />
			<RecoverPassword />
		</StyledLoginSignup>
	);
}

export default LoginSignup;
