import React from 'react';
import {render, screen, act, waitFor, cleanup, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import CartProvider from '../context/CartContext';
import App from '../pages/index';
import { categories } from "../static-data/static-data-categories";
import { products } from "../static-data/static-data-products";
import ProductProvider from '../context/ProductContext';

describe('Index Page', () => {
    afterEach(cleanup);
    it('should render', async () => {
        
        act(()=> 
        render(
            <CartProvider>
                <ProductProvider>
                    <App initialProducts={products} categories={categories} />
                </ProductProvider>
            </CartProvider>
            )
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
    
    it('should add a product to cart', () => {
        const {debug} = render(
        <CartProvider>
            <ProductProvider>
                <App initialProducts={products} categories={categories} />
            </ProductProvider>
        </CartProvider>
        )
        const productButton = screen.getAllByRole('button', {
            name: /Adicionar ao carrinho/i
        })
        productButton.forEach(button => {
            userEvent.click(button)
        })
        const totalProducts = screen.getByLabelText("Total de produtos no carrinho").innerHTML;

        expect(parseInt(totalProducts)).toEqual(productButton.length);
    })
})
