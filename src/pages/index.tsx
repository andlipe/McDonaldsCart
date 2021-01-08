import React from 'react';
import Header from '../components/Header/Header'
import ItemCard from '../components/ItemCard/ItemCard'
import {IndexContainer} from '../styles/indexStyle';
import Filter from '../components/Filter/Filter';
import { useFetch } from '../hooks/useFetch';
 

function App() {
  const [products, setProducts] = React.useState([]);
  const firstRender = React.useRef(true);
  const { data } = useFetch("/api/products")
  

  React.useEffect(() => {
    if(!data){
      firstRender.current = !firstRender.current;
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
      <Filter setProducts={setProducts}/>
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


export default App;
