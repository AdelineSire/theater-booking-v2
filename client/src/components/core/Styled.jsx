import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

const Row = styled.div`
	background-color: var(--row);
	display: flex;
	align-items: flex-end;
	padding: 0.4em;
	margin-bottom: 4px;
`;

const Section = styled.div`
	background-color: var(--section);
	min-height: 88vh;
	padding: 4px 8px;
`;

const StyledLink = styled(NavLink)`
	color: var(--btntxt);
	text-decoration: none;
	background-color: var(--accent);
	padding: 28px;
`;

export { IconButton, H2, Row, Section, StyledLink };
