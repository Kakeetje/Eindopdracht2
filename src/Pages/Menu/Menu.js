import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Chopsticks from "../../Assets/Chopsticks-for-Loading.gif";
/*import MenuIcon from '../../Assets/bars-solid.svg';
import CrossIcon from '../../Assets/times-solid.svg';*/
import GerechtenCards from "./GerechtenCards";
import './Menu.css';

export default function Menu() {
    const [gerechten, setGerechten] = useState(null);
    const [pagina, setPagina] = useState(0);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        async function getGerechten() {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pagina}`);
                setGerechten(response.data.results);
                setStatus("done loading");
            } catch (error) {
                setStatus("error");
            }
        }
        getGerechten();
    }, [pagina]);

    if (status === "loading") {
        return <img src={Chopsticks} height="250px"/>;
    }  else if (status === "error") {
        return <h1>O jee de pokemons zijn ontsnapt, druk up refresh</h1>;
    } else {
        return (
            <>
                <div className="Menu">
                    <h1>Bekijk onze Menu</h1>
                    {/*<img className="MenuIcon" src={MenuIcon} alt="" width="20" />*/}
                </div>
                <div className="next-previous">
                    <button
                        disabled={pagina === 0}
                        onClick={() => setPagina(pagina - 20)}>
                        Vorige
                    </button>
                    <button
                        disabled={pagina === 1100}
                        onClick={() => setPagina(pagina + 20)}>
                        Volgende
                    </button>
                </div>

                <div className="sushi-category">
                    <nav>
                        <ul>
                            <li><Link to="/menu/nigiri">Nigiri</Link></li>
                            <li><Link to="/menu/hosomaki">Hosomaki</Link></li>
                            <li><Link to="/menu/urumaki">Urumaki</Link></li>
                            <li><Link to="/menu/crispyrolls">Crispy Rolls</Link></li>
                            <li><Link to="/menu/bijgerechten">Bijgerechten</Link></li>
                            {/*<li className="Close">
                                <img src={CrossIcon}  alt="" width="20"/>
                            </li>*/}
                        </ul>
                    </nav>
                </div>


                <div className="gerechten">
                    {gerechten?.map((gerecht) => {
                        return <GerechtenCards key={gerecht.name} name={gerecht.name} />
                    })}

                </div>

            </>
        );
    }
}

