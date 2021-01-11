import Image from 'next/image'
import React from 'react'
import { CartContext } from '../../context/CartContext';
import { ItemCard } from './styles';

const CartItemCard = ({item}) => {
    const { addToCart, removeFromCart } = React.useContext(CartContext);

    return (
        <ItemCard>
            <Image 
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                />
            <p>{item.name}</p>
            <p>R$ {item.price}</p>
            <button onClick={() => removeFromCart(item)}> - </button>
            <span aria-label="Número de produtos do mesmo tipo">{item.count}</span>
            <button onClick={() => addToCart(item)}> + </button>
        </ItemCard>
    )
}
export default CartItemCard;