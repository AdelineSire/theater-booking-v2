import styled from 'styled-components';
import FormatedInput from './FormatedInput';

const Label = styled.label`
	color: var(--accent);
`;

const StyledFormGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 8px;
`;

function FormGroup({ label, name, type, data, register }) {
	return (
		<StyledFormGroup>
			<Label htmlFor={name}>{label}</Label>
			<FormatedInput name={name} type={type} data={data} register={register} />
		</StyledFormGroup>
	);
}

export default FormGroup;
