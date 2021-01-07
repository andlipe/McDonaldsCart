import React from 'react'
import Header from '../components/Header/Header';
import Modal from '../components/Modal/Modal';
import { CartContext } from '../context/CartContext';
import { CartContainer, TotalPriceContainer } from '../styles/cartStyle';


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
        <Header />
        <CartContainer>
            <h1> Finalizar Pedido </h1>
            <div className="cardContainer">
                {cartList.map(item => 
                <div key={item.id} className="card">
                    <p>{item.name}</p>
                    <p>R$ {item.price}</p>
                
                    <button onClick={() => removeFromCart(item)}> - </button>
                    <p>{item.count}</p>
                    <button onClick={() => addToCart(item)}> + </button>
                </div>    
                    )}
            </div>
            <TotalPriceContainer>
                <h3>Total</h3>
                <p>R$ {totalPrice}</p>
            </TotalPriceContainer>
            <button onClick={() => openModal()} >Finalizar Compra</button>
        </CartContainer>
        <Modal showModal={showModal}  setShowModal={setShowModal}/>
        </>
    )
}
export default cart;