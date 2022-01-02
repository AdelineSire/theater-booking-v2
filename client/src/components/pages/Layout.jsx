import { Outlet } from 'react-router';
import styled from 'styled-components';

import Navbar from '../navigation/Navbar';

const Main = styled.main`
	background-color: var(--bg);
	min-height: 100vh;
	padding: 16px;
`;

function Layout({ onLogout, currentUser }) {
	return (
		<Main>
			<Navbar onLogout={onLogout} currentUser={currentUser} />
			<Outlet />
		</Main>
	);
}

export default Layout;
