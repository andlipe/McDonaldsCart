import React, { SetStateAction } from 'react';

interface IProduct {
    id: number,
    idCategory: number,
    name: string,
    price: number,
    image: string
}

interface ICartProduct extends IProduct {
    count: number;
}
interface IContextProps {
    cart: IProduct[];
    setCart: (cart:IProduct[]) => void;
    addToCart: (product: IProduct) => void;
    removeFromCart: (product: IProduct) => void;
    cartLength: () => number;
    summarizeCart: (cart: Array<IProduct>) => Array<ICartProduct>;
}

export const CartContext = React.createContext<IContextProps>(null);

const CartProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [cart, setCart] = React.useState<IProduct[] | []>([]);

    const addToCart = (product: IProduct) => {
        setCart([...cart, product]);
    }

    const removeFromCart = (product: IProduct) => {
        const findOne = cart.findIndex(item => item.id === product.id);
        const removeOne = cart.filter((item,index) => index != findOne)
        
        setCart(removeOne);
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
        }, []);
        
        return Object.values(groupedItems);
    }

    return(
        <CartContext.Provider value={{cart, setCart, addToCart, cartLength, summarizeCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
