import Image from 'next/image';
import React from 'react';
import {Card} from './styles';
import { CartContext } from '../../context/CartContext';

const ItemCard = ({ productData }) => {
    const { addToCart } = React.useContext(CartContext);
    return (
        <Card>
            <Image 
                    src={productData.image}
                    alt="McDonalds Logo"
                    width={100}
                    height={100}
                />
            <h3>{productData.name}</h3>
            <p>{productData.price}</p>
            <button onClick={() => addToCart(productData)}>Adicionar ao carrinho</button>
        </Card>
    );
};

export default React.memo(ItemCard);
