import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const AuthCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2em;
	gap: 1em;
	background-color: var(--section);
`;

const AuthForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const ErrorMessage = styled.p`
	color: var(--accent);
	font-size: 0.8em;
	margin: 0;
`;

const H2 = styled.h2`
	color: var(--accent);
`;

const IconButton = styled.div`
	background-color: var(--accent);
	color: white;
	border-radius: 50%;
	width: 26px;
	height: 26px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
`;

const Page = styled.div`
	display: flex;
	justify-content: center;
`;

const Row = styled.div`
	background-color: var(--row);
	display: flex;
	align-items: flex-end;
	max-width: 100%;
	padding: 0.4em;
	margin-bottom: 4px;
`;

const Section = styled.div`
	background-color: var(--section);
	min-height: 88vh;
	padding: 4px 8px;
`;
const SectionLeft = styled.div`
	background-color: var(--section);
	min-height: 88vh;
	width: 54%;
	margin-right: 4px;
	padding: 4px 8px;
`;
const SectionRight = styled.div`
	background-color: var(--section);
	min-height: 88vh;
	width: 46%;
	margin-left: 4px;
	padding: 4px 8px;
`;

const StyledLink = styled(NavLink)`
	color: var(--btntxt);
	text-decoration: none;
	background-color: var(--accent);
	padding: 28px;
`;

export {
	AuthCard,
	AuthForm,
	ErrorMessage,
	IconButton,
	H2,
	Page,
	Row,
	Section,
	SectionLeft,
	SectionRight,
	StyledLink,
};
