import styled from 'styled-components';

const StyledFormGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 8px;
`;

const Label = styled.label`
	color: var(--accent);
`;

const Input = styled.input`
	height: 22px;
	margin-right: 4px;
`;

const Select = styled.select`
	height: 28px;
	margin-right: 4px;
`;

function FormGroup({ label, name, type, data }) {
	const FormatedInput = () => {
		if (type === 'select') {
			return (
				<Select name={name}>
					<option value=''>Choisir</option>
					{data.map((item) => (
						<option key={item._id} value={item._id}>
							{item.name}
						</option>
					))}
				</Select>
			);
		}
		if (name.includes('price')) {
			return (
				<Input type={type} name={name} min='0.00' max='100.00' step='0.5' />
			);
		} else return <Input type={type} name={name} />;
	};

	return (
		<StyledFormGroup>
			<Label htmlFor={name}>{label}</Label>
			<FormatedInput />
		</StyledFormGroup>
	);
}

export default FormGroup;
