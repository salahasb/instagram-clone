import styled from "styled-components";
import LoginSignupBox from "../features/authentication/LoginPage/LoginSignupBox";
import Footer from "../components/Footer";

const Container = styled.div`
	max-width: 780px;
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

const Wrapper = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3rem;

	& > div:first-child {
		display: none;
	}

	& > * {
		flex: 1 1 50%;
	}

	@media (min-width: 54.68em) {
		& > div:first-child {
			display: block;
		}
	}
`;

function LoginPage() {
	return (
		<Container className="">
			<ContentBox>
				<div>
					<Wrapper>
						<div>
							<img src="/insta-app-screenshot.png" alt="" />
						</div>
						<LoginSignupBox />
					</Wrapper>
				</div>

				<Footer />
			</ContentBox>
		</Container>
	);
}

export default LoginPage;
