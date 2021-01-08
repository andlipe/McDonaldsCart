import Image from 'next/image';
import React from 'react'
import Header from '../components/Header/Header';
import Modal from '../components/Modal/Modal';
import { CartContext } from '../context/CartContext';
import { CartContainer, TotalPriceContainer, CheckoutButton } from '../styles/cartStyle';


function cart() {
    const [totalPrice, setTotalPrice] = React.useState(0);
    const [showModal, setShowModal] = React.useState(false);
    const { cart, addToCart, removeFromCart, summarizeCart, setCart } = React.useContext(CartContext);
    const cartList = summarizeCart(cart);

    const openModal = () => {
        setShowModal(prev => !prev);
        setCart([])
    }

    React.useEffect(() => {
        setTotalPrice(0)
        const cartList = summarizeCart(cart);
        cartList.forEach(product => {
            setTotalPrice((previousPrice) => (product.price * product.count) + previousPrice)
        });
    }, [cart]);

    return (
        <>
        <Header actualPage="Cart"/>
        <CartContainer>
            <h1> Finalizar Pedido </h1>
            <div className="cardContainer">
                {cartList.map(item => 
                <div key={item.id} className="card">
                    <Image 
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                        />
                    <p>{item.name}</p>
                    <p>R$ {item.price}</p>
                    <button onClick={() => removeFromCart(item)}> - </button>
                    <span>{item.count}</span>
                    <button onClick={() => addToCart(item)}> + </button>
                </div>    
                )}
            </div>
            <TotalPriceContainer>
                <h3>Total</h3>
                <p>R$ {totalPrice.toFixed(2)}</p>
            </TotalPriceContainer>
            <CheckoutButton onClick={() => openModal()} >Finalizar Compra</CheckoutButton>
        </CartContainer>
        <Modal showModal={showModal}  setShowModal={setShowModal}/>
        </>
    )
}
export default cart;