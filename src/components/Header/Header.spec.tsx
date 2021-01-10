import React from 'react';
import {render, screen} from '@testing-library/react'
import Header from './Header';
import CartProvider from '../../context/CartContext';
describe('should have McDonalds Logo', () => {
    it('should some', () => {
        render(
        <CartProvider>
            <Header />
        </CartProvider>
        )
        const McDonaldsLogo = screen.getByAltText('McDonalds Logo');

        expect(McDonaldsLogo).toBeInTheDocument();
    });
    
});
