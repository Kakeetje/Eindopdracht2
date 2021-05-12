import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import PostSubmit from './PostSubmit';
import Menu from '../Menu';

function Home() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }


    return(
        <>
        <h1 className="Welkom">
            Welkom bij Yang Yang Sushi Eindhoven
        </h1>
            <h3>
                Voer hier uw adres in
            </h3>

            <div>
            {!isSubmitted ?  <PostSubmit submitForm={submitForm} /> : <Switch>
                <Route path="/menu">
                    <Menu />
                </Route>
            </Switch>}
            </div>
        </>
    );
}

export default Home;
