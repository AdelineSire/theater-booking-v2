import { useForm } from 'react-hook-form';

import FormGroup from '../core/FormGroup';
import Button from '../core/Button';
import { Row } from '../core/Style';

import { createPlay } from '../../services/api';

function PlayForm() {
	const { register, handleSubmit, reset } = useForm({
		defaultValues: { title: '' },
	});

	const onSubmitForm = async (data) => {
		console.log('data in onsubmitForm', data);
		await createPlay(data);
		reset();
	};
	return (
		<form onSubmit={handleSubmit(onSubmitForm)}>
			<Row>
				<FormGroup label='Titre' name='title' type='text' register={register} />
				<Button>Enregistrer</Button>
			</Row>
		</form>
	);
}

export default PlayForm;
