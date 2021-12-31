import { useForm } from 'react-hook-form';

import { createShow } from '../../services/api';

import ExpandableInput from './ExpandableInput';
import FormGroup from './FormGroup';
import Button from '../core/Button';
import { H2, SectionLeft } from '../core/Styled';

function ShowForm() {
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			play: '',
			theater: '',
			date: '',
			hosts: [],
			price1: '',
			price2: '',
		},
	});

	const onSubmitShow = (data) => {
		createShow(data);
		reset();
	};

	return (
		<SectionLeft>
			<H2>Ajouter une représentation</H2>
			<ExpandableInput
				register={register}
				dataType='play'
				inputType={'select'}
			/>
			<ExpandableInput
				register={register}
				dataType='theater'
				inputType={'select'}
			/>
			<form onSubmit={handleSubmit(onSubmitShow)}>
				<FormGroup
					label='Date'
					name='date'
					type='datetime-local'
					register={register}
				/>
				<FormGroup
					label='Tarif normal'
					name='price1'
					type='number'
					register={register}
				/>
				<FormGroup
					label='Tarif réduit'
					name='price2'
					type='number'
					register={register}
				/>
				<Button>Enregistrer</Button>
			</form>
		</SectionLeft>
	);
}

export default ShowForm;
