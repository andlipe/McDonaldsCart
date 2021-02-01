import React from 'react';
import {render, screen} from '@testing-library/react';
import Header from './Header';
import CartProvider from '../../context/CartContext';
import {ThemeProvider} from 'styled-components';
import light from '../../styles/themes/light';
describe('HeaderComponent', () => {
    it('should have McDonalds Logo', () => {
        render(
        <ThemeProvider theme={light}>
            <CartProvider>
                <Header />
            </CartProvider>
        </ThemeProvider>
        )
        const McDonaldsLogo = screen.getByAltText('McDonalds Logo');

        expect(McDonaldsLogo).toBeInTheDocument();
    });
    
    it('should have back Icon in cart Page',  () => {
        render(
            <ThemeProvider theme={light}>
                <CartProvider>
                    <Header actualPage="cart"/>
                </CartProvider>
            </ThemeProvider>
        )
            const BackIcon =  screen.getByRole("link", 
            {name: /Ícone para retornar á página inicial/i})

            expect(BackIcon).toBeInTheDocument();
    });
    

    it('should have cart Icon in index',  () => {
        render(
            <ThemeProvider theme={light}>
                <CartProvider>
                    <Header />
                </CartProvider>
            </ThemeProvider>
            )

        const cartIcon = screen.getByRole('link', 
        {name: /Ícone de carrinho com contagem dos itens adicionados/i})
        expect(cartIcon).toBeInTheDocument();
    });
    
});
