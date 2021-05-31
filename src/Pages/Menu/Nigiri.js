import React from 'react';
import GerechtenCards from "./GerechtenCards";

function Nigiri() {
    return (
            <div className="Nigiri">
                <GerechtenCards name="pikachu"/>
                <GerechtenCards name="bulbasaur"/>
                <GerechtenCards name="ivysaur"/>
                <GerechtenCards name="charizard"/>
                <GerechtenCards name="pidgeotto"/>
                <GerechtenCards name="hitmonlee"/>
            </div>
        );
}

export default Nigiri;
