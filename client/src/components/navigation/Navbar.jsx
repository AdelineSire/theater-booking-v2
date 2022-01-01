import styled from 'styled-components';

import { StyledLink } from '../core/Styled';

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
			<StyledLink to='/shows'>Représentations</StyledLink>
			<StyledLink to='/plays'>Spectacles</StyledLink>
			<StyledLink to='/theaters'>Salles</StyledLink>
			<StyledLink to='/users'>Utilisateurs</StyledLink>
			<StyledLink to='/login'>Se connecter</StyledLink>
			<StyledLink to='/signup'>Créer un compte</StyledLink>
		</Nav>
	);
}

export default Navbar;
