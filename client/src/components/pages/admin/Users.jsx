import { useState, useEffect } from 'react';
import UserForm from '../../forms/UserForm';

import { H2, Section } from '../../core/Styled';

import { getData } from '../../../services/api';

function Users() {
	const [roles, setRoles] = useState();
	// const [users, setUsers] = useState();
	const [isLoading, setIsLoading] = useState('true');

	useEffect(() => {
		getData('role').then((response) => {
			setRoles(response);
			setIsLoading(false);
		});
		// getData('user').then((response) => {
		// 	console.log('users in Users', response);
		// 	setUsers(response);
		// });

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Section>
			<H2>Utilisateurs</H2>
			{isLoading ? (
				<p>Chargement</p>
			) : (
				<div>
					<UserForm roles={roles} />
				</div>
			)}
		</Section>
	);
}

export default Users;
