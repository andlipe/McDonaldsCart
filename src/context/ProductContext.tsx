import React, { SetStateAction } from 'react';

interface IProduct {
    id: number,
    idCategory: number,
    name: string,
    price: number,
    image: string
}

interface IContextProps {
    products: IProduct[],
    setProducts: (product:IProduct[]) => void;
}

export const ProductContext = React.createContext<IContextProps>(null);

const ProductProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [products, setProducts] = React.useState<IProduct[] | []>([]);


    return(
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;
