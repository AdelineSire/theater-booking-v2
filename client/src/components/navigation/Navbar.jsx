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
	return (
		<Nav>
			<StyledLink to='/'>Accueil</StyledLink>
			{currentUser?.role.name === 'Admin' && (
				<SubNav>
					<StyledLink to='/admin'>Représentations</StyledLink>
					<StyledLink to='/admin/pièces'>Spectacles</StyledLink>
					<StyledLink to='/admin/salles'>Salles</StyledLink>
					<StyledLink to='/admin/utilisateurs'>Utilisateurs</StyledLink>
				</SubNav>
			)}

			{currentUser ? (
				<SubNav>
					<StyledLink to='/connexion' onClick={onLogout}>
						Déconnexion
					</StyledLink>
					<StyledLink to='/profil'>{currentUser.firstname}</StyledLink>
				</SubNav>
			) : (
				<SubNav>
					<StyledLink to='/connexion'>Connexion</StyledLink>
					<StyledLink to='/compte'>Créer un compte</StyledLink>
				</SubNav>
			)}
		</Nav>
	);
}

export default Navbar;
