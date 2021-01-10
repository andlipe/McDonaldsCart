import React from 'react';
import {render, screen} from '@testing-library/react';
import CartProvider from '../context/CartContext';
import App from '.';
import { categories } from "../static-data/static-data-categories";
import { products } from "../static-data/static-data-products";

describe('index', () => {
    
    it('should render', async () => {
        
        render(
            <CartProvider>
                <App initialProducts={products} categories={categories} />
            </CartProvider>
        )
        const header = screen.getByRole('banner',{name: ""});
        const filter = screen.getByRole('combobox', {name: ""});
        const itemCard = screen.getAllByRole('heading')

        expect(header).toBeInTheDocument();
        expect(filter).toBeInTheDocument();
        itemCard.forEach(item => {
            expect(item).toBeInTheDocument();
        })
    });
    
});
