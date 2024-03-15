import styled from "styled-components";
import Login from "./Login";
import SignUp from "./SignUp";

const StyledLoginSignup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 5rem 4rem 2rem 4rem;

	& > img {
		height: 5rem;
		margin-bottom: 4rem;
	}

	@media (min-width: 28.12em) {
		/* 450px */
		border: 1px var(--color-grey-300) solid;
		/* padding: 5rem 4rem 2rem 4rem; */
	}
`;

function Logo() {
	return (
		<>
			<img
				className="block dark:hidden"
				src="/instagram-logo.png"
				alt="instagram-image"
			/>
			<img
				className="hidden dark:block brightness-90"
				src="/instagram-logo-dark.png"
				alt="instagram-image"
			/>
		</>
	);
}

function LoginSignup({ action }) {
	return (
		<StyledLoginSignup>
			<Logo />
			{action === "login" ? <Login /> : <SignUp />}
		</StyledLoginSignup>
	);
}

export default LoginSignup;
