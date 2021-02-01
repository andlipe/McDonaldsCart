import React from 'react';
import {render, screen} from '@testing-library/react';
import ItemCard from './ItemCard';
import CartProvider from '../../context/CartContext';
import userEvent from '@testing-library/user-event';
import {ThemeProvider} from 'styled-components';
import light from '../../styles/themes/light';
describe('ItemCard', () => {
    it('should render a product', () => {
        render(
        <ThemeProvider theme={light}>   
            <CartProvider>
                <ItemCard productData={{
                    name: "Hamburguer",
                    image: "/assets/McDonalds.png",
                    price: 12,
                }}/>
            </CartProvider>
        </ThemeProvider> 
        )
        const productName = screen.getByRole('button', {
            name: /Adicionar ao carrinho/i
        })

        expect(productName).toBeInTheDocument();
    });
    
    
});
