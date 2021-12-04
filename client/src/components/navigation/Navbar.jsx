import styled from 'styled-components';

import { StyledLink } from '../core/Style';

const Nav = styled.nav`
	display: flex;
	align-items: center;
	width: 100%;
	margin-bottom: 16px;
	background-color: var(--accent);
`;

function Navbar() {
	return (
		<Nav>
			<StyledLink to='/'>Accueil</StyledLink>
			<StyledLink to='/plays'>Spectacles</StyledLink>
		</Nav>
	);
}

export default Navbar;
