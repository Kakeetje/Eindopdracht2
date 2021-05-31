import React, { useState } from 'react';
import './Menu.css';
import MainMenu from "./MainMenu";
import Navbar from "./Navbar";

export default function Menu() {

    const [filter, setFilter] = useState(true);

    if (filter === true) {
        return <Navbar />
    } else {
        return (
            <>
                <div>
                    <MainMenu/>
                </div>
            </>
        );
    }
}

