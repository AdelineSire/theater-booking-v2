import { useState, useEffect } from 'react';
import UserForm from '../../forms/UserForm';

import { H2, Section } from '../../core/Styled';

import { getData } from '../../../services/api';

function Users() {
	const [roles, setRoles] = useState();
	const [isLoading, setIsLoading] = useState('true');

	useEffect(() => {
		getData('role').then((response) => {
			setRoles(response);
			setIsLoading('false');
		});
	}, []);
	return (
		<Section>
			<H2>Utilisateurs</H2>
			{isLoading ? <p>Chargement</p> : <UserForm roles={roles} />}
		</Section>
	);
}

export default Users;
