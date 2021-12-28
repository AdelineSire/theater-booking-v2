import { useForm } from 'react-hook-form';

import FormGroup from './FormGroup';
import Button from '../core/Button';
import { Row } from '../core/Styled';

import { createTheater } from '../../services/api';

function TheaterForm({ hide, reload }) {
	const { register, handleSubmit, reset } = useForm({
		defaultValues: { name: '', address: '', row: '', col: '' },
	});

	const onSubmitForm = async (formData) => {
		console.log('data in onsubmitForm', formData);
		await createTheater(formData);
		reset();
		reload();
		hide();
	};

	return (
		<form onSubmit={handleSubmit(onSubmitForm)}>
			<Row>
				<FormGroup label='Nom' name='name' type='text' register={register} />
				<FormGroup
					label='Adresse'
					name='address'
					type='text'
					register={register}
				/>
				<FormGroup
					label='Rangées'
					name='row'
					type='number'
					register={register}
				/>
				<FormGroup
					label='Sièges par rangées'
					name='col'
					type='number'
					register={register}
				/>
				<Button>Enregistrer</Button>
			</Row>
		</form>
	);
}

export default TheaterForm;
