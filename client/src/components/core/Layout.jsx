import { Outlet } from 'react-router';
import styled from 'styled-components';

import Navbar from '../navigation/Navbar';

const Container = styled.div`
	background-color: var(--bg);
	min-height: 100vh;
	padding: 16px;
`;

function Layout() {
	return (
		<Container>
			<Navbar />
			<Outlet />
		</Container>
	);
}

export default Layout;
