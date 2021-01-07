import React from 'react';
import Header from '../components/Header/Header'
import ItemCard from '../components/ItemCard/ItemCard'
import {IndexContainer} from '../styles/indexStyle';
import Filter from '../components/Filter/Filter';

function App() {
  const [products, setProducts] = React.useState([]);
  const fetchProducts = async () => {
    await fetch('/api/products')
      .then(response => response.json())
      .then(result => setProducts(result))
  }

  React.useEffect(() => {
    fetchProducts();
  }, []);
  
  return (
    <>
    <Header />
    <IndexContainer>
      <Filter />
      <div className="card-container">
        {products.map(product => 
          <ItemCard key={product.id} productData={product} />
          )}
      </div> 
    </IndexContainer>
    </>
  );
}



export default App;
