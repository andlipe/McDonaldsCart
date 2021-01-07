import React from 'react';

interface IProduct {
    id: Number,
    idCategory: Number,
    name: String,
    price: Number,
    image: String
}

export const CartContext = React.createContext(null);

const CartProvider = ({ children }) => {
    const [cart, setCart] = React.useState<IProduct[]>([]);

    const addToCart = (product: IProduct) => {
        setCart([...cart, product]);
    }

    const summarizeCart = () => {
        return cart.length;

    }

    return(
        <CartContext.Provider value={{addToCart, summarizeCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
