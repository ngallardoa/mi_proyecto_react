import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext)

export function CartContextProvider({ children }) {

    return(
        <CartContext.Provider value={{

        }}>
            {children}
        </CartContext.Provider>
    )
}