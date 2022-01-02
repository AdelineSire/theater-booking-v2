import styled from 'styled-components';

import { StyledLink } from '../core/Styled';

const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 16px;
	background-color: var(--accent);
`;
const SubNav = styled.div``;

function Navbar({ onLogout, currentUser }) {
	console.log('currentUser in navbar', currentUser);
	return (
		<Nav>
			<StyledLink to='/'>Accueil</StyledLink>
			{currentUser?.role.name === 'Admin' && (
				<SubNav>
					<StyledLink to='/admin'>Représentations</StyledLink>
					<StyledLink to='/admin/plays'>Spectacles</StyledLink>
					<StyledLink to='/admin/theaters'>Salles</StyledLink>
					<StyledLink to='/admin/users'>Utilisateurs</StyledLink>
				</SubNav>
			)}

			{currentUser ? (
				<SubNav>
					<StyledLink to='/login' onClick={onLogout}>
						Déconnexion
					</StyledLink>
					<StyledLink to='/profile'>{currentUser.firstname}</StyledLink>
				</SubNav>
			) : (
				<SubNav>
					<StyledLink to='/login'>Connexion</StyledLink>
					<StyledLink to='/signup'>Créer un compte</StyledLink>
				</SubNav>
			)}
		</Nav>
	);
}

export default Navbar;
