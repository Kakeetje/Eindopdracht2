import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
/*
import Sushi from '../Assets/Sushi.gif';
*/

function RegisterForms() {
    //state voor invoervelden (omdat het formulier metControlled Components werk!)
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //state voor gebruikers-feedback
    const [createUserSuccess, setCreateSuccess] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    async function onSubmit(event){
        toggleLoading(true);
        setError('');
        //Als je react-hook-form gebruikt hoeft dit niet, dat gebeurt dan automatisch
        event.preventDefault();
        //Hij verwacht bij try 2 dinen, endpoint (URL) en data object is dus, hardcoded
        //gebruik de data uit het formulier om een gebruiker aan te maken (check documentatie!)

        try {
            const response = await axios.post('https://polar-lake-14365.herokuapp.com/api/auth/signup', {
                //Dit is nog hardcoded, maar je moet dit meer flexibler maken
                username: username,
                email: email,
                password: password,
                role: ["user"],
            });
            //Kijk goed wat je terug krijgt
            console.log(response.data);

            if (response.status === 200) {
                setCreateSuccess(true);
            }
        } catch (e) {
            console.error(e);
            if (e.message.includes('400')){
                setError('Er bestaal al een account met deze gebruikersnaam');
            } else {
                setError('Er is iets misgegaan bij het verzenden. Probeer het opnieuw');
            }
        }

        toggleLoading(false);
    }

    return (
        <>
            <h2>Registreren</h2>
            { createUserSuccess === true && (
                <h2 className="message-success"> Je hebt een account aangemaakt! Klik <Link to="/login">hier</Link> om in te loggen</h2>
            )}
            <form onSubmit={onSubmit}>
                <label htmlFor="email-field">
                    Email:
                </label>
                <input
                    type="email"
                    id="email-field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {error.userName && <span>This field is required</span>}

                <label htmlFor="password-field">
                    Wachtwoord:
                </label>
                <input
                    name={"password-field"}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}/>

                {error.password && <span>This field is required</span>}

                <input type="submit" />
                <button
                    type="submit"
                    className="form-submit"
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Maak een account aan'}
                </button>
                {error && <p>{error}</p>}
            </form>
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default RegisterForms;
