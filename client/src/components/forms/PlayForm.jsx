import { useForm } from 'react-hook-form';

import FormGroup from './FormGroup';
import Button from '../core/Button';
import { Row } from '../core/Styled';

import { createPlay } from '../../services/api';

function PlayForm({ hide, reload }) {
	const { register, handleSubmit, reset } = useForm({
		defaultValues: { title: '' },
	});

	const onSubmitForm = async (formData) => {
		await createPlay(formData);
		reset();
		reload();
		hide();
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
