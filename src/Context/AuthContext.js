import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import axios from 'axios';


export const AuthContext = createContext({});

function AuthContextProvider ({ children }) {
    const [ authState, setAuthState ] = useState({
        user: null,
        status: 'pending',
    });

    const history = useHistory();

    function isTokenValid(jwtToken) {
        const decodedToken = jwt_decode(jwtToken);
        const expirationUnix = decodedToken.exp; // let op: dit is een UNIX timestamp

        const now = new Date().getTime(); // dit is een javascript timestamp
        const currentUnix = Math.round(now / 1000); // nu is het ook een UNIX timestamp

        // Als er nog seconden over zijn wanneer we "nu" aftrekken van de expiratiedatum is hij nog geldig
        const isTokenStillValid = expirationUnix - currentUnix > 0;

        return isTokenStillValid;
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(!authState.user && token && isTokenValid(token)) {
            const decodedToken = jwt_decode(token);

            fetchUserData(token, decodedToken.sub);
        } else {
            setAuthState({
                user: null,
                status: 'done',
            });
        }
    }, []);

    function login(jwtToken) {
        console.log(jwtToken)
        localStorage.setItem('token', jwtToken);
        const decodedToken = jwt_decode(jwtToken);
        console.log(decodedToken);
        const userId = decodedToken.sub;

        fetchUserData(jwtToken, userId);
    }

    async function fetchUserData(jwtToken) {
        console.log(jwtToken);
        const decoded = jwt_decode(jwtToken);
        const userId = decoded.sub;
        console.log("Decode jwt", decoded);
        localStorage.setItem('token', jwtToken);


        try {
            const result = await axios.get(`http://localhost:3000//600/users/${userId}`,{
                headers:
            {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwtToken}`,
            }
            });
            setAuthState({
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                    country: result.data.country,
                    // als je ook rollen hebt, plaats je die er ook bij!
                },
                status: 'done',
            });

            history.push('/profile');
        } catch (e) {
            console.error(e);

        }
    }

    function logout() {
        console.log("Logout!");
    }

    const data = {
        ...authState,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={data}>
            {authState.status === 'pending'
                ? <p>Loading...</p>
                : children
            }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;

