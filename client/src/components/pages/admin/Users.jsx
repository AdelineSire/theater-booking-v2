import UserForm from '../../forms/UserForm';

import { H2, Section } from '../../core/Styled';

function Users() {
	return (
		<Section>
			<H2>Utilisateurs</H2>
			<UserForm />
		</Section>
	);
}

export default Users;
