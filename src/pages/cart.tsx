import React from 'react'
import Header from '../components/Header/Header';
import { CartContext } from '../context/CartContext';
import { CartContainer, TotalPriceContainer } from '../styles/cartStyle';


function cart() {
    const [totalPrice, setTotalPrice] = React.useState(0);
    const { cart, addToCart, removeFromCart, summarizeCart } = React.useContext(CartContext);
    const cartList = summarizeCart(cart);

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
        </CartContainer>
        </>
    )
}
export default cart;