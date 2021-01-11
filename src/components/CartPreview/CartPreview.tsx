import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { CartContext } from '../../context/CartContext';
import CartItemCard from '../CartItemCard/CartItemCard';
import { CartPreviewContainer } from './styles';

const CartPreview = () => {
    const { cart, summarizeCart } = React.useContext(CartContext);
    const router = useRouter();
    const fetchCart = summarizeCart(cart);
    const handleClick = () => {
        router.push('/cart')
    }
    return (
        <CartPreviewContainer className="cart-preview">
        {fetchCart.map(item => 
            <CartItemCard item={item} key={item.id}/>
        )}
        <button onClick={() => handleClick()}>Ir para o carrinho</button>
        </CartPreviewContainer>
    );
}

export default CartPreview;
