import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { AuthCard, AuthForm, ErrorMessage, H2, Page } from '../../core/Styled';
import FormGroup from '../../forms/FormGroup';
import Button from '../../core/Button';
// import { login } from '../../services/auth-service';

const loginSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(8).max(16).required(),
});

function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(loginSchema),
	});
	let navigate = useNavigate();

	const onSubmit = (data) => {
		console.log('data: ', data);
		// login(data);
		navigate('/', { replace: true });
	};

	return (
		<Page>
			<AuthCard>
				<H2>Se connecter</H2>
				<AuthForm onSubmit={handleSubmit(onSubmit)}>
					<FormGroup
						label='Email'
						name='email'
						type='email'
						register={register}
					/>

					<FormGroup
						label='Mot de passe'
						name='password'
						type='password'
						register={register}
					/>

					{errors.email && (
						<ErrorMessage>
							Veuillez entrer une adresse email valide
						</ErrorMessage>
					)}
					{errors.password && (
						<ErrorMessage>
							Le mot de passe doit contenir entre 8 et 16 caractères
						</ErrorMessage>
					)}

					<Button type='sumbit'>Valider</Button>
				</AuthForm>
			</AuthCard>
		</Page>
	);
}

export default Login;
