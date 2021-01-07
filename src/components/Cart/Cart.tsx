import React from 'react';
import Link from 'next/link';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from '../../context/CartContext';
import { CartCounter } from './styles';

const Cart = () => {
    const { cartLength } = React.useContext(CartContext)
    const cartTotal = React.useCallback(cartLength(),[cartLength]);
    return (
        <CartCounter>
            <Link href="/cart" passHref>
                <a><FontAwesomeIcon icon={faShoppingCart} size="2x" color="white"/></a>  
            </Link>
            <label>{cartTotal}</label>
        </CartCounter>
    );
}

export default Cart;
