import Image from 'next/image';
import React from 'react';
import { CartContext } from '../../context/CartContext';

const CartPreview = () => {
    const { cart, summarizeCart } = React.useContext(CartContext)
    const fetchCart = summarizeCart(cart);
    if(cart.length < 0) return <div>Carregando...</div>
    return (
        <div>
        {fetchCart.map(item => 
            <div key={item.id} className="card">
            <Image 
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                />
            <p>{item.name}</p>
            <p>R$ {item.price}</p>
            <span>{item.count}</span>
        </div>    
        )}
            
        </div>
    );
}

export default CartPreview;
