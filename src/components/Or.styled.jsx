import styled from "styled-components";

const Or = styled.div`
	position: relative;
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
export default Or;
