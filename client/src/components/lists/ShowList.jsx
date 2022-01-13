import styled from 'styled-components';
import LaunchIcon from '@material-ui/icons/Launch';

import { H2, SectionRight } from '../core/Styled';

const StyledTable = styled.table`
	width: 100%;
`;
const StyledTh = styled.th`
	text-align: left;
	padding: 0.4em;
`;

const StyledTr = styled.tr`
	background-color: var(--row);
`;
const StyledTd = styled.td`
	padding: 0.4em;
`;

const ShowsList = ({ shows, setCurrentShow }) => {
	return (
		<SectionRight>
			<H2>Représentations</H2>
			{shows.length === 0 ? (
				<p>Aucune représentation</p>
			) : (
				<StyledTable>
					<thead>
						<StyledTr>
							<StyledTh>Date</StyledTh>
							<StyledTh>Heure</StyledTh>
							<StyledTh>Pièce</StyledTh>
							<StyledTh>Salle</StyledTh>
							<StyledTh>T N</StyledTh>
							<StyledTh>T R</StyledTh>
							<StyledTh></StyledTh>
						</StyledTr>
					</thead>
					<tbody>
						{shows.map((show) => (
							<StyledTr key={show._id}>
								<StyledTd>{show.formatedDate.date}</StyledTd>
								<StyledTd>{show.formatedDate.time}</StyledTd>
								<StyledTd>{show.play.title}</StyledTd>
								<StyledTd>{show.theater.name}</StyledTd>
								<StyledTd>{show.price1}</StyledTd>
								<StyledTd>{show.price2}</StyledTd>
								<StyledTd>
									<LaunchIcon
										onClick={() => {
											console.log('currentShow in ShowsList', show);
											setCurrentShow(show);
										}}
									/>
								</StyledTd>
							</StyledTr>
						))}
					</tbody>
				</StyledTable>
			)}
		</SectionRight>
	);
};

export default ShowsList;
