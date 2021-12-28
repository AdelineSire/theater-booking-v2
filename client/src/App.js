import { Routes, Route } from 'react-router-dom';

import NotFound from './components/pages/NotFound';
import Layout from './components/pages/Layout';
import Home from './components/pages/home/Home';
import Plays from './components/pages/admin/Plays';
import Shows from './components/pages/admin/Shows';
import Theaters from './components/pages/admin/theaters';
import Users from './components/pages/admin/Users';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='plays' element={<Plays />} />
				<Route path='theaters' element={<Theaters />} />
				<Route path='shows' element={<Shows />} />
				<Route path='users' element={<Users />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default App;
