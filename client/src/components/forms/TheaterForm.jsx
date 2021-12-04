import FormGroup from './core/FormGroup';
import Button from './core/Button';
import { Row } from '../Style';

function TheaterForm() {
	return (
		<form>
			<Row>
				<FormGroup label='Nom' name='name' type='text' />
				<FormGroup label='Adresse' name='address' type='text' />
				<FormGroup label='Rangées' name='row' type='number' />
				<FormGroup label='Sièges par rangées' name='col' type='number' />
				<Button>Enregistrer</Button>
			</Row>
		</form>
	);
}

export default TheaterForm;
