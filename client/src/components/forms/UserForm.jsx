import { useForm } from 'react-hook-form';

import FormGroup from './FormGroup';
import Button from '../core/Button';
import { Row } from '../core/Styled';

import { createUser } from '../../services/api';

function UserForm({ roles }) {
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			firstname: '',
			lastname: '',
			email: '',
			phone: '',
			address: '',
			role: '',
		},
	});

	const onSubmitForm = async (formData) => {
		await createUser(formData);
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmitForm)}>
			<Row>
				<FormGroup
					label='Prénom'
					name='firstname'
					type='text'
					register={register}
				/>
				<FormGroup
					label='Nom'
					name='lastname'
					type='text'
					register={register}
				/>
				<FormGroup
					label='Email'
					name='email'
					type='email'
					register={register}
				/>
				<FormGroup
					label='Téléphone'
					name='phone'
					type='text'
					register={register}
				/>
				<FormGroup
					label='Adresse'
					name='address'
					type='text'
					register={register}
				/>
				<FormGroup
					label='Rôle'
					name='role'
					type='select'
					data={roles}
					register={register}
				/>
				<Button>Enregistrer</Button>
			</Row>
		</form>
	);
}

export default UserForm;
