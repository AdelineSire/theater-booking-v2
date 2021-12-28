import styled from 'styled-components';

import Select from './Select';

const Input = styled.input`
	height: 22px;
	margin-right: 4px;
`;

function FormatedInput({ name, type, data, register }) {
	if (type === 'select') {
		return <Select name={name} itemsList={data} register={register}></Select>;
	}
	if (name.includes('price')) {
		return (
			<Input
				type={type}
				name={name}
				min='0.00'
				max='100.00'
				step='0.5'
				{...register(name)}
			/>
		);
	} else return <Input type={type} name={name} {...register(name)} />;
}

export default FormatedInput;
