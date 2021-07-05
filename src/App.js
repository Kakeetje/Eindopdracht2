import React from 'react';
import { BrowserRouter as Router,
    Link,
    Switch,
    Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import Contact from './Pages/Contact/Contact';
import Logo from './Assets/Yang Yang Sushi Logo.png';
import SignIn from './Pages/Login/SignIn';
import SignUp from "./Pages/Register/SignUp";
import Profile from "./Pages/Profile/Profile";


function App() {

    return (
        <header>
            <>
                <Router>
                    <div>
                        <div className="header-home">
                            <nav>
                                <div className="Nav-Balk">
                                    <Link to="/">
                                        <img className="YangYang" src={Logo} alt="Yang-Yang" height="100" width="250"/>
                                    </Link>
                                </div>
                                <div>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/menu">Menu</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li><Link to="/signin">Login</Link></li>
                                        <li><Link to="/signup">Register</Link></li>
                                        <li><Link to="/profile">Mijn Profiel</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>


                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/menu" >
                            <Menu />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/signin">
                            <SignIn />
                        </Route>
                        <Route path="/signup" >
                            <SignUp />
                        </Route>
                        <Route path="/profile">
                            <Profile />
                        </Route>
                    </Switch>
                </Router>
                </>
        </header>
    )
}

export default App;
