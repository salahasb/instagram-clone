import styled from "styled-components";
import LoginSignup from "../features/authentication/LoginSignup";
import Footer from "../components/Footer";

const Container = styled.div`
	max-width: 780px;
	padding: 0 3rem;
	margin: 0 auto;
`;

const ContentBox = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;

	& > div {
		flex: 1;
		display: flex;
		align-items: center;
		width: 100%;
	}
`;

const LoginLayout = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	gap: 3rem;

	& div:first-child {
		display: none;
	}

	& > * {
		flex: 1 1 50%;
	}

	@media (min-width: 54.68em) {
		& div:first-child {
			display: block;
		}
	}
`;

function Login() {
	return (
		<Container>
			<ContentBox>
				<div>
					<LoginLayout>
						<div>
							<img src="/insta-app-screenshot.png" alt="" />
						</div>
						<LoginSignup />
					</LoginLayout>
				</div>

				<Footer />
			</ContentBox>
		</Container>
	);
}

export default Login;
