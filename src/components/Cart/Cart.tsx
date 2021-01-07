import React from 'react';
import Link from 'next/link';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { cartLength } = React.useContext(CartContext)
    const cartTotal = cartLength();
    return (
        <>
            <Link href="/cart">
                <FontAwesomeIcon icon={faShoppingCart} size="2x"/>   
            </Link>
                <p>{cartTotal}</p>
        </>
    );
}

export default Cart;
