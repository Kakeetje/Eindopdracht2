import React, { useState } from 'react';
import './Menu.css';
import MainMenu from "./MainMenu";
import Navbar from "./Navbar";

export default function Menu() {

    const [showResults, setShowResults] = useState(false);
    const onClick = () => setShowResults(true);

    return(
        <div>
                <div className="side-by-side">
                    <div className="content">
                        <MainMenu/>
                    </div>
                    <div>
                        <Navbar className="SideMenu-Links" onClick={onClick}/>
                        {showResults ? <MainMenu /> : null}
                    </div>
                </div>
        </div>
    )
}

