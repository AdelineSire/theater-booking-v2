import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const H2 = styled.h2`
	color: var(--accent);
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

export { H2, Row, Section, StyledLink };
