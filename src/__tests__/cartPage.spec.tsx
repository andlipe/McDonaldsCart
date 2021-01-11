import React from 'react';
import {render, screen, act, cleanup, getByRole} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import CartProvider from '../context/CartContext';
import Cart from '../pages/cart';
import ItemCard from '../components/ItemCard/ItemCard';

describe('CartPage', () => {
    it('should render empty cart page', () => {
        render(<CartProvider> <Cart /> </CartProvider>)
        const header = screen.getByRole('banner', {name: ""});
        const emptyCartButton= screen.getByRole('button', {name: /Continuar comprando/i});
        
        expect(header).toBeInTheDocument();
        expect(emptyCartButton).toBeInTheDocument();

    });
    it('should render cart with products', () => {
        render(
        <CartProvider>
            <ItemCard productData={
            {
                id: 1,
                name: "Hambuguer",
                image: "/assets/McDonalds.png",
                price: 12
            }
            }/>
            <Cart />
        </CartProvider>)
        const productButton = screen.getByRole('button', {
            name: /Adicionar ao carrinho/i
        })
        userEvent.click(productButton)



        expect(screen.getByRole('button', {name: /Finalizar Compra/i})).toBeInTheDocument();
    })
    it('should add 1 product', () => {
        render(
        <CartProvider>
                <ItemCard productData={
                {
                    id: 1,
                    name: "Hambuguer",
                    image: "/assets/McDonalds.png",
                    price: 12
                }
                }/>
                <Cart />
        </CartProvider>)
        const productButton = screen.getByRole('button', {
            name: /Adicionar ao carrinho/i
        });
        userEvent.click(productButton);

        const addOneButton = screen.getByRole('button', {name: "+"});
        userEvent.click(addOneButton);

        const totalItens = screen.getByLabelText('Número de produtos do mesmo tipo').innerHTML;

        expect(parseInt(totalItens)).toEqual(2);

    });
    it('should remove 1 product', () => {
        render(
        <CartProvider>
                <ItemCard productData={
                {
                    id: 1,
                    name: "Hambuguer",
                    image: "/assets/McDonalds.png",
                    price: 12
                }
                }/>
                <Cart />
        </CartProvider>)
        const productButton = screen.getByRole('button', {
            name: /Adicionar ao carrinho/i
        });
        userEvent.click(productButton);

        const removeOneButton = screen.getByRole('button', {name: "-"});
        userEvent.click(removeOneButton);
        expect(removeOneButton).not.toBeInTheDocument();
    });
    it('should open modal', () => {
        render(
            <CartProvider>
                    <ItemCard productData={
                    {
                        id: 1,
                        name: "Hambuguer",
                        image: "/assets/McDonalds.png",
                        price: 12
                    }
                    }/>
                    <Cart />
            </CartProvider>)
        const productButton = screen.getByRole('button', {
                name: /Adicionar ao carrinho/i
        });
        userEvent.click(productButton);

        const checkout = screen.getByRole('button', {name: /Finalizar Compra/i});
        userEvent.click(checkout);

        const modalTitle = screen.getByRole('heading', {name: /Pedido Realizado com sucesso/i});
        const emptyCartButton= screen.getByRole('button', {name: /Continuar comprando/i});

        expect(modalTitle).toBeInTheDocument();
        expect(emptyCartButton).toBeInTheDocument();
    })

});