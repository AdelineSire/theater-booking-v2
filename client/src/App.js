import { Routes, Route } from 'react-router-dom';

import NotFound from './components/pages/NotFound';
import Layout from './components/core/Layout';
import Home from './components/pages/home/Home';
import Plays from './components/pages/admin/Plays';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='plays' element={<Plays />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default App;
