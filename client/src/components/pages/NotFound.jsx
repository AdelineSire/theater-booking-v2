import styled from 'styled-components';
import { StyledLink, H2 } from '../core/Styled';

const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: var(--section);
	min-height: 80vh;
	padding: 4px 8px;
`;

function NotFound() {
	return (
		<Container>
			<H2>Vous êtes perdu :'(</H2>
			<StyledLink to='/'>Retour à l'accueil</StyledLink>
		</Container>
	);
}

export default NotFound;
