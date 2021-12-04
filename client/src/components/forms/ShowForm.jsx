import FormGroup from './core/FormGroup';
import Button from './core/Button';
import { Section } from '../Style';

function ShowForm() {
	const plays = [{ name: 'Spectacle 1' }, { name: 'Spectacle 2' }];
	const theaters = [{ name: 'Theâtre 1' }, { name: 'Theâtre 2' }];
	return (
		<form>
			<Section>
				<FormGroup label='Pièce' name='play' type='select' data={plays} />
				<FormGroup label='Salle' name='theater' type='select' data={theaters} />
				<FormGroup label='Date' name='date' type='date' />
				<FormGroup label='Heure' name='time' type='time' />
				<FormGroup label='Tarif normal' name='price1' type='number' />
				<FormGroup label='Tarif réduit' name='price2' type='number' />
				<Button>Enregistrer</Button>
			</Section>
		</form>
	);
}

export default ShowForm;
