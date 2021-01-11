import React from 'react';
import Link from 'next/link';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from '../../context/CartContext';
import { CartCounter } from './styles';
import CartPreview from '../CartPreview/CartPreview';

const CartIcon = () => {
    const { cart, cartLength } = React.useContext(CartContext)
    const [showCartPreview, setShowCartPreview] = React.useState(false);
    const cartTotal = cartLength();

    const handleShowCartOnAddItemToCart = () => {
        window.setTimeout(() => {
            setShowCartPreview(false)
        }, 1000);
        setShowCartPreview(true)
        
    }

    React.useEffect(() => {
        if(cart.length > 0) {
        handleShowCartOnAddItemToCart();
        }
    }, [cart]);

    return (
        <CartCounter onMouseEnter={() => setShowCartPreview(true)} onMouseLeave={() => setShowCartPreview(false)}>
            <Link href="/cart" passHref>
                <a aria-label="Ícone de carrinho com contagem dos itens adicionados">
                    <FontAwesomeIcon icon={faShoppingCart} size="2x" color="white" />
                    </a>  
            </Link>
            <label aria-label="Total de produtos no carrinho">{cartTotal}</label>
            {showCartPreview ? <CartPreview /> : null}
        </CartCounter>
    );
}

export default React.memo(CartIcon);
