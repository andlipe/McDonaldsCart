import Link from 'next/link';
import React from 'react';
import { EmptyCartContainer } from './style';

const EmptyCart = () => {
    return (
    <EmptyCartContainer>
        <p className="EmptyCardParagraph">
            <span>Você está sem itens em seu carrinho.</span><br/>
            <span>Volte a página inicial para continuar comprando</span>
        </p>
        <Link href="/" passHref><a><button>Continuar comprando</button></a></Link>
    </EmptyCartContainer>
    );
}

export default EmptyCart;
