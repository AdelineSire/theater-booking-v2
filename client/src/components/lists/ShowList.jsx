import LaunchIcon from '@material-ui/icons/Launch';

import { H2, SectionRight } from '../core/Styled';

const ShowsList = ({ shows }) => {
	return (
		<SectionRight>
			<H2>Prochaines représentations</H2>
			{shows.length === 0 ? (
				<p>Aucune représentation</p>
			) : (
				<table>
					<thead>
						<tr>
							<th>Date</th>
							<th>Heure</th>
							<th>Pièce</th>
							<th>Salle</th>
							<th>Tarif N</th>
							<th>Tarif R</th>
						</tr>
					</thead>
					<tbody>
						{shows.map((show) => (
							<tr key={show._id}>
								<td>{show.date.date}</td>
								<td>{show.date.time}</td>
								<td>{show.play}</td>
								<td>{show.theater.name}</td>
								<td>{show.price1}</td>
								<td>{show.price2}</td>
								<td>
									<LaunchIcon />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</SectionRight>
	);
};

export default ShowsList;
