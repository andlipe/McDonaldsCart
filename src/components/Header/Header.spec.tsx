import React from 'react';
import {render, screen} from '@testing-library/react';
import Header from './Header';
import CartProvider from '../../context/CartContext';
describe('HeaderComponent', () => {
    it('should have McDonalds Logo', () => {
        render(
        <CartProvider>
            <Header />
        </CartProvider>
        )
        const McDonaldsLogo = screen.getByAltText('McDonalds Logo');

        expect(McDonaldsLogo).toBeInTheDocument();
    });
    
    it('should have back Icon in cart Page',  () => {
        render(
            <CartProvider>
                <Header actualPage="cart"/>
            </CartProvider>
        )
            const BackIcon =  screen.getByRole("link", 
            {name: /Ícone para retornar á página inicial/i})

            expect(BackIcon).toBeInTheDocument();
    });
    

    it('should have cart Icon in index',  () => {
        render(
            <CartProvider>
                <Header />
            </CartProvider>
            )

        const cartIcon = screen.getByRole('link', 
        {name: /Ícone de carrinho com contagem dos itens adicionados/i})
        expect(cartIcon).toBeInTheDocument();
    });
    
});
