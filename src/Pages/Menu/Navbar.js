import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import './NavBar.css';
import Nigiri from "./Nigiri";
import Hosomaki from "./Hosomaki";


function Navbar(props) {
    return (
        <div>
            <Router>
                <div>
                    <nav className="left-menu">
                        <ul className="sushi-category">
                            <li><Link to="/menu/nigiri">Nigiri</Link></li>
                            <li><Link to="/menu/hosomaki">Hosomaki</Link></li>
                            <li><Link to="/menu/futomaki">Futomaki</Link></li>
                            <li><Link to="/menu/urumaki">Urumaki</Link></li>
                            <li><Link to="/menu/crispyrolls">Crispy Rolls</Link></li>
                            <li><Link to="/menu/bijgerechten">Bijgerechten</Link></li>
                        </ul>
                    </nav>
                </div>

                <Switch>
                    <Route path="/menu/nigiri" component={Nigiri}>
                        <Nigiri />
                    </Route>
                    <Route path="/menu/hosomaki">
                        <Hosomaki/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Navbar;
