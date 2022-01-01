import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { AuthCard, AuthForm, ErrorMessage, H2, Page } from '../../core/Styled';
import FormGroup from '../../forms/FormGroup';
import Button from '../../core/Button';
// import { signup } from '../../services/auth-service';

const signupSchema = yup.object().shape({
	firstname: yup.string().required(),
	lastname: yup.string().required(),
	email: yup.string().email().required(),
	tel: yup.string(),
	password: yup.string().min(8).max(16).required(),
});

const SignUpForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(signupSchema),
	});
	let navigate = useNavigate();

	const onSubmit = (data) => {
		console.log('data: ', data);
		// signup(data);
		navigate('/login', { replace: true });
	};

	return (
		<Page>
			<AuthCard>
				<H2>Créer un compte</H2>
				<AuthForm onSubmit={handleSubmit(onSubmit)}>
					<FormGroup
						label='Prénom'
						name='firstname'
						type='text'
						register={register}
					/>

					<FormGroup
						label='Nom'
						name='lastname'
						type='text'
						register={register}
					/>

					<FormGroup
						label='Email'
						name='email'
						type='email'
						register={register}
					/>

					<FormGroup
						label='Téléphone'
						name='tel'
						type='text'
						register={register}
					/>

					<FormGroup
						label='Mot de passe'
						name='password'
						type='password'
						register={register}
					/>

					{errors.firstname && (
						<ErrorMessage>Veuillez entrer votre prénom</ErrorMessage>
					)}
					{errors.lastname && (
						<ErrorMessage>Veuillez entrer votre nom</ErrorMessage>
					)}
					{errors.email && (
						<ErrorMessage>
							Veuillez entrer une adresse email valide
						</ErrorMessage>
					)}
					{errors.passwword && (
						<ErrorMessage>
							Le mot de passe doit contenir entre 8 et 16 caractères
						</ErrorMessage>
					)}

					<Button type='submit'>Valider</Button>
				</AuthForm>
			</AuthCard>
		</Page>
	);
};

export default SignUpForm;
