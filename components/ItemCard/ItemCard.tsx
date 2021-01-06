import Image from 'next/image';
import React from 'react';
import {Card} from './styles';
const ItemCard = ({onclick}) => {
    
    return (
        <Card>
            <Image 
                    src="/assets/MCDonalds.png" 
                    alt="McDonalds Logo"
                    width={100}
                    height={100}
                />
            <h3>Burger Burger </h3>
            <p>R$13</p>
            <button onClick={() => onclick('Hamburguer')}>Adicionar ao carrinho</button>
        </Card>
    );
}

export default ItemCard;
