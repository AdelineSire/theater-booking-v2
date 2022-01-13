import { useState, useEffect } from 'react';

import ShowForm from '../../forms/ShowForm';
import ShowList from '../../lists/ShowList';
import { Page } from '../../core/Styled';

import { getData } from '../../../services/api';

function Shows() {
	const [isLoading, setIsLoading] = useState(true);
	const [shows, setShows] = useState([]);
	const [currentShow, setCurrentShow] = useState();
	console.log('currentShow in Shows', currentShow);

	useEffect(() => {
		getData('show').then((response) => {
			setShows(response);
			setIsLoading(false);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading]);

	return (
		<Page>
			<ShowForm currentShow={currentShow} reload={() => setIsLoading(true)} />
			{isLoading ? (
				<p>Chargement...</p>
			) : (
				<ShowList shows={shows} setCurrentShow={setCurrentShow} />
			)}
		</Page>
	);
}

export default Shows;
