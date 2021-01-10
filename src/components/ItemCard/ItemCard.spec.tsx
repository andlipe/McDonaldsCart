import React from 'react';
import {render, screen} from '@testing-library/react';
import ItemCard from './ItemCard';
import CartProvider from '../../context/CartContext';

describe('ItemCard', () => {
    it('should render a product', () => {
        render(
        <CartProvider>
            <ItemCard productData={{
                name: "Hamburguer",
                image: "/assets/McDonalds.png",
                price: 12,
            }}/>
        </CartProvider>
        )
        const productName = screen.getByRole('button', {
            name: /Adicionar ao carrinho/i
        })

        expect(productName).toBeInTheDocument();
    });
    
});
