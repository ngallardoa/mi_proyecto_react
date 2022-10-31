import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext)

export function CartContextProvider({ children }) { 
    const [cartList, setCartList] = useState([])
    const isInCart = (id) => cartList.find(products => products.id === id)
    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            const newCart = cartList.map(products => {
                if (products.id === item.id) {
                    const newQuantity = products.quantity + quantity
                    return {...products, quantity: newQuantity}
                }
                else {
                    return products
                }
            })
            setCartList(newCart)
        }
        else {
            const newProduct = {...item, quantity: quantity}
            setCartList([...cartList, newProduct])
        }
    }
    const removeProduct = (id) => setCartList(cartList.filter(products => products.id != id))
    const clearCart = () => {
        setCartList([])
        console.log(cartList)
    }
    const totalPrice = () => {
        return cartList.reduce((acc, products) => acc += (products.precio * products.quantity), 0)
    }
    const totalQuantity = () => {
        return cartList.reduce((acc, products) => acc += products.quantity, 0)
    }

    return(
        <CartContext.Provider value={{
            isInCart,
            removeProduct,
            addToCart,
            clearCart,
            totalPrice,
            totalQuantity,
            cartList,
        }}>
            {children}
        </CartContext.Provider>
    )
}