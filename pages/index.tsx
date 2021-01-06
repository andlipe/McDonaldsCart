import { DocumentContext } from 'next/document';
import React from 'react';
import Header from '../components/Header/Header'
import ItemCard from '../components/ItemCard/ItemCard'
import {IndexContainer} from '../styles/indexStyle';
import Filter from '../components/Filter/Filter';

function App() {
  const [cart, setCart] = React.useState([]);
  //const [price, setPrice] = React.useState(0)

const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    //setPrice(price + item.price)
    console.log(cart);
}

  return (
    <>
      <Header cartLenght={cart.length}/>
    <IndexContainer>
      <Filter />
      <div className="card-container">
        <ItemCard onclick={addToCart}/>
        <ItemCard onclick={addToCart}/>
        <ItemCard onclick={addToCart}/>
        <ItemCard onclick={addToCart}/>
      </div> 
    </IndexContainer>
    </>
  );
}



export default App;
