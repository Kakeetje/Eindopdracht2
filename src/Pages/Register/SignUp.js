import React, {useState} from 'react';
import './SignUp.css';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
    const { handleSubmit, register} = useForm();
    const [registerSuccess, toggleRegisterSuccess] = useState(false);
    const history = useHistory();
    const [error, setError] = useState('');

    async function onSubmit(data) {
        console.log(data);
        try {
            const result = await axios.post('http://localhost:3000/register', {
                email: data.email,
                password: data.password,
                country: 'Nederland',
                username: data.username,
            });

            console.log(result);
            toggleRegisterSuccess(true);
            setTimeout(() => {
                history.push('/signin');
            },2000);

        } catch (e) {
            console.error(e);
        }
    }
    return (
        <>
            <h1>Registreren</h1>
            <h2 className="message-success"> Je hebt een account aangemaakt! Klik <Link to="/login">hier</Link> om in te loggen</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email-field">
                    Email:
                    <input
                        type="email"
                        id="email-field"
                        name="email"
                        {...register("email")}
                    />
                </label>

                <label htmlFor="username-field">
                    Gebruikersnaam:
                    <input
                        type="text"
                        id="username-field"
                        name="username"
                        {...register("username")}
                    />
                </label>

                <label htmlFor="password-field">
                    Wachtwoord:
                    <input
                        type="password"
                        id="password-field"
                        name="password"
                        {...register("password")}
                    />
                </label>
                <button
                    type="submit"
                    className="form-button"
                >
                    Maak een account aan
                </button>
                {registerSuccess === true &&  <p>Registeren is gelukt! Je wordt nu doorgestuurd naar de inlog pagina!</p>}
                {error && <p className="error-message">{error}</p>}
            </form>
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;
