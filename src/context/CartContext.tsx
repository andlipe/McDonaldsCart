import React from 'react';

interface IProduct {
    id: number,
    idCategory: number,
    name: string,
    price: number,
    image: string
}

export const CartContext = React.createContext(null);

const CartProvider = ({ children }) => {
    const [cart, setCart] = React.useState<IProduct[]>([]);

    const addToCart = (product: IProduct) => {
        setCart([...cart, product]);
        console.log(cart);
    }

    const cartLength = () => {
        return cart.length;

    }


    const summarizeCart = (cart: Array<IProduct>) => {
        const groupedItems = cart.reduce((summary, item: IProduct) => {
            summary[item.id] = summary[item.id] || {
            ...item,
            count: 0,
        };
        summary[item.id].count++;
        return summary;
        }, {});
        return Object.values(groupedItems);
    }


    return(
        <CartContext.Provider value={{cart, setCart, addToCart, cartLength, summarizeCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
