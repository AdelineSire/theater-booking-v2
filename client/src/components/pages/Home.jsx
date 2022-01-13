import { useState, useEffect } from 'react';
import { Section } from '../core/Styled';
import ShowList from '../lists/ShowList';

import { getData } from '../../services/api';

function Home() {
	const [shows, setShows] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getData('show').then((response) => {
			setShows(response);
			setIsLoading(false);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	console.log('shows in home', shows);
	return (
		<Section>
			{isLoading ? <p>Chargement...</p> : <ShowList shows={shows} />}
		</Section>
	);
}

export default Home;
