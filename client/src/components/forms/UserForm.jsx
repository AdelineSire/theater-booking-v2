import FormGroup from './core/FormGroup';
import Button from './core/Button';
import { Row } from '../Style';

function UserForm() {
	const roles = ['spectator', 'seller', 'host', 'admin'];

	return (
		<form>
			<Row>
				<FormGroup label='Prénom' name='firstname' type='text' />
				<FormGroup label='Nom' name='lastname' type='text' />
				<FormGroup label='Email' name='email' type='email' />
				<FormGroup label='Téléphone' name='address' type='text' />
				<FormGroup label='Adresse' name='address' type='text' />
				<FormGroup label='Rôle' name='role' type='select' data={roles} />
				<Button>Enregistrer</Button>
			</Row>
		</form>
	);
}

export default UserForm;
