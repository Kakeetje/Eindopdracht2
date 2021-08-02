import { useState, createContext } from "react";

export const CartContext = createContext({});

export const CartProvider = (props) => {
    const [addtoCart, setAddtoCart] = useState(false);

    return (
        <CartContext.Provider
            value={{
                addtoCart: addtoCart,
                setAddtoCart: setAddtoCart,
            }}
        >
            {/* Hier komt de rest van de app (alle children) */}
            {props.children}
        </CartContext.Provider>
    );
};
