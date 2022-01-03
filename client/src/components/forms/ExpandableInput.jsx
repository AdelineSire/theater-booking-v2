import { useState, useEffect } from 'react';
import styled from 'styled-components';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import useToggle from '../../hooks/useToggle';

import PlayForm from './PlayForm';
import TheaterForm from './TheaterForm';
import FormGroup from './FormGroup';
import { IconButton } from '../core/Styled';
import { getData } from '../../services/api';

const ExpInput = styled.div`
	display: flex;
	align-items: flex-end;
	gap: 16px;
`;

function ExpandableInput({ register, dataType, inputType }) {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);
	const [isFormHidden, toggleIsFormHidden] = useToggle(true);

	const HiddenForm = () => {
		if (dataType === 'play') {
			return (
				<PlayForm
					hide={() => toggleIsFormHidden()}
					reload={() => setIsLoading(true)}
				/>
			);
		}
		if (dataType === 'theater') {
			return (
				<TheaterForm
					hide={() => toggleIsFormHidden()}
					reload={() => setIsLoading(true)}
				/>
			);
		}
	};

	useEffect(() => {
		getData(dataType).then((response) => {
			setData(response);
			setIsLoading(false);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading]);

	return (
		<div>
			{isLoading ? (
				<p>Chargement</p>
			) : (
				<div>
					<ExpInput>
						<FormGroup
							label={dataType === 'play' ? 'Pièce' : 'Salle'}
							name={dataType}
							type={inputType}
							data={data}
							register={register}
						/>
						<IconButton
							onClick={() => {
								toggleIsFormHidden();
							}}
						>
							{isFormHidden ? <AddIcon /> : <RemoveIcon />}
						</IconButton>
					</ExpInput>
					{!isFormHidden && <HiddenForm />}
				</div>
			)}
		</div>
	);
}

export default ExpandableInput;
