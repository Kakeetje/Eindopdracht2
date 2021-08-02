import React, { useEffect, useState, useContext} from 'react';
import axios from 'axios';
import './GerechtenCards.css';
import {CartContext} from "../Cart/CartContext";

export default function GerechtenCards(props) {
    const [gerecht, setGerecht] = useState();
    const addtoCartData = useContext(CartContext);
    const [addItem, setAddItem] = useState([]);


    useEffect(() => {
        async function getGerechtData() {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`);
            setGerecht(result.data);
            setAddItem(props.name);
        }

        getGerechtData();

    }, [props.name]);

    return (
        <div className="card">
            <h1>{gerecht?.name}</h1>
            <img
                className="sprite"
                alt={gerecht?.name}
                src={gerecht?.sprites.front_default}
            />
            <span className="Product">
            <p>Nigiri</p>
            <p>Zalm 1 stuk</p>
            <p> €2,-</p>
                <button onClick={(addItem) => addtoCartData.setAddtoCart(true)}
                >+</button>
                <button>-</button>
           </span>
        </div>
    );
}
