import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(0)
    
    const handleCartItem = (data) => {
        setCartItems(data.length)
    }
    return (
        <CartContext.Provider value={{cartItems,handleCartItem}}>{children}</CartContext.Provider>
    )
}