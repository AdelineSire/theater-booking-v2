function Profile({ currentUser }) {
	return <div>{currentUser && currentUser.firstname}</div>;
}

export default Profile;
