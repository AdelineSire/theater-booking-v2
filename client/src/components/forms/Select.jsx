import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const SyledSelect = styled.select`
	height: 28px;
	margin-right: 4px;
`;
function Select({ name, itemsList, register }) {
	return (
		<SyledSelect {...register(name)}>
			<option value=''>Choisir</option>
			{itemsList.map((item) => (
				<option key={uuidv4()} value={item._id}>
					{name === 'play' ? item.title : item.name}
				</option>
			))}
		</SyledSelect>
	);
}
export default Select;
