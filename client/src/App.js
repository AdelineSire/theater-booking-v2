import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFound from './components/pages/NotFound';
import Layout from './components/pages/Layout';
import Home from './components/pages/Home';
import Plays from './components/pages/admin/Plays';
import Shows from './components/pages/admin/Shows';
import Theaters from './components/pages/admin/theaters';
import Users from './components/pages/admin/Users';
import Login from './components/pages/auth/Login';
import Signup from './components/pages/auth/Signup';
import Profile from './components/pages/Profile';

import { getCurrentUser, logout } from './services/auth-service';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [currentUser, setCurrentUser] = useState();

	const onLogout = () => {
		logout();
		setIsLoading(true);
	};

	const onLogin = () => {
		setIsLoading(true);
	};

	useEffect(() => {
		getCurrentUser().then((user) => {
			setCurrentUser(user);
			setIsLoading(false);
		});
	}, [isLoading]);

	return (
		<Routes>
			<Route
				path='/'
				element={<Layout onLogout={onLogout} currentUser={currentUser} />}
			>
				<Route index element={<Home />} />
				<Route path='connexion' element={<Login onLogin={onLogin} />} />
				<Route path='compte' element={<Signup />} />
				{currentUser && (
					<Route
						path='profil'
						element={<Profile currentUser={currentUser} />}
					/>
				)}

				{currentUser?.role.name === 'Admin' && (
					<Route path='/admin'>
						<Route index element={<Shows />} />
						<Route path='pieces' element={<Plays />} />
						<Route path='salles' element={<Theaters />} />
						<Route path='utilisateurs' element={<Users />} />
					</Route>
				)}
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default App;
