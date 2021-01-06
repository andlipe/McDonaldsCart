import React from 'react';
import Link from 'next/link';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Cart = ({cartLenght}) => {
    return (
        <>
            <Link href="/cart">
                <FontAwesomeIcon icon={faShoppingCart} size="2x"/>
                        
            </Link>
                <p>{cartLenght}</p>
        </>
    );
}

export default Cart;
