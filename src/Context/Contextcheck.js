import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCartContext() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (items) => {
        setCartItems((prevCartItems) => [...prevCartItems, ...items]);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const removeFromCart = (index) => {
        setCartItems((prevCartItems) => {
            const newCartItems = [...prevCartItems];
            newCartItems.splice(index, 1);
            return newCartItems;
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, clearCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}
