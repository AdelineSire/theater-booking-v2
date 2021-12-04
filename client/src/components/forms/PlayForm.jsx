import FormGroup from './core/FormGroup';
import Button from './core/Button';
import { Row } from '../Style';

function PlayForm() {
	return (
		<Row>
			<FormGroup label='Titre' name='' type='text' />
			<Button>Enregistrer</Button>
		</Row>
	);
}

export default PlayForm;
