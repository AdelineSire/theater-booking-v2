import { useState, useEffect } from 'react';

import ShowForm from '../../forms/ShowForm';
import ShowList from '../../lists/ShowList';
import { Page } from '../../core/Styled';

import { getData } from '../../../services/api';

function Shows() {
	const [shows, setShows] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getData('show').then((response) => {
			setShows(response);
			setIsLoading(false);
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<Page>
			<ShowForm />
			{isLoading ? <p>Chargement...</p> : <ShowList shows={shows} />}
		</Page>
	);
}

export default Shows;
