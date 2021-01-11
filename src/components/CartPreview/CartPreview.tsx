import Image from 'next/image';
import React from 'react';
import { CartContext } from '../../context/CartContext';
import CartItemCard from '../CartItemCard/CartItemCard';
import { CartPreviewContainer } from './styles';

const CartPreview = () => {
    const { cart, addToCart, removeFromCart, summarizeCart, setCart } = React.useContext(CartContext);
    
    const fetchCart = summarizeCart(cart);

    return (
        <CartPreviewContainer className="cart-preview">
        {fetchCart.map(item => 
            <CartItemCard item={item} key={item.id}/>
        )}
        </CartPreviewContainer>
    );
}

export default CartPreview;
