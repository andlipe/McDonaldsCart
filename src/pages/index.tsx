import React from 'react';
import absoluteUrl from "next-absolute-url";
import Header from '../components/Header/Header'
import ItemCard from '../components/ItemCard/ItemCard'
import {IndexContainer} from '../styles/indexStyle';
import Filter from '../components/Filter/Filter';
import { useFetch } from '../hooks/useFetch';
 

function App({ initialProducts, categories }) {
  const [products, setProducts] = React.useState([]);
  const firstRender = React.useRef(true);
  const { data } = useFetch("/api/products")
  

  React.useEffect(() => {
    if(!data){
      firstRender.current = !firstRender.current;
      setProducts(initialProducts);
    } else {
      setProducts(data);
      firstRender.current = !firstRender.current;

    }
  },[data]);
  
  if(!data) return <div>...Loading</div>
  return (
    <>
    <Header actualPage="Index"/>
    <IndexContainer>
      <div className="filter-container">
      <Filter setProducts={setProducts} categoriesInitial={categories}/>
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

export async function getServerSideProps({req}) {
  const { origin } = absoluteUrl(req)  
  const getProducts = await fetch(`${origin}/api/products`);
  const initialProducts = await getProducts.json()

  const getCategories = await fetch(`${origin}/api/categories`)
  const categories = await getCategories.json();
  return {
    props: { initialProducts, categories }
  }
}

export default App;
