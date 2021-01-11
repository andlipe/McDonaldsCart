import React from 'react';
import Header from '../components/Header/Header'
import ItemCard from '../components/ItemCard/ItemCard'
import {IndexContainer} from '../styles/indexStyle';
import Filter from '../components/Filter/Filter';
import { ProductContext } from '../context/ProductContext';


function App({ initialProducts, categories }) {
  const {products, setProducts} = React.useContext(ProductContext);
  const firstRender = React.useRef(true);
  React.useEffect(() => {
    setProducts(initialProducts);
  },[firstRender]);
  
  if(!products) return <div>...Loading</div>
  return (
    <>
    <Header actualPage="Index"/>
    <IndexContainer>
      <div className="filter-container">
      <Filter categoriesInitial={categories}/>
      </div>
      <div className="card-container">

        {products.map(product => 
          
          <ItemCard key={product.id} productData={product} />
          
          )}
      </div> 
    </IndexContainer>
    </>
  );
}

export async function getStaticProps(context) {
  const url = process.env.URL;
  const getProducts = await fetch(`${url}/api/products`);
  const initialProducts = await getProducts.json()

  const getCategories = await fetch(`${url}/api/categories`)
  const categories = await getCategories.json();
  return {
    props: { initialProducts, categories }
  }
}

export default App;
