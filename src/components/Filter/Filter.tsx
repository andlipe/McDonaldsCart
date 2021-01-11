import React from 'react';
import { ProductContext } from '../../context/ProductContext';
import { useFetch } from '../../hooks/useFetch';
import { FilterContainer } from './styles';


const Filter = ({ categoriesInitial }) => {
    const [categories, setCategories] = React.useState([]);
    const [categoryId, setCategoryId] = React.useState<number>();
    const { setProducts } = React.useContext(ProductContext)
    const {data: products} = useFetch(categoryId ? `api/products/${categoryId}` : `api/products/`);
    
    const handleFilter = (event) =>{
        
        if (event.currentTarget.value != undefined){
            setCategoryId(event.currentTarget.value);
        }
    }
    React.useEffect(() => {
        if(products != undefined){
        setProducts(products)
        } 
    }, [products]);

    React.useEffect(() => {
        setCategories(categoriesInitial)
    }, []);

    if(!categories) return <div>...Loading</div>

    return (
        <>
        <FilterContainer onChange={(event) => handleFilter(event)}>
            <option label="Listar todos"></option>
            {categories.map(category => 
                <option data-testid="filter-option" value={category.id} label={category.name} key={category.id}>{category.name}</option>
            )}
        </FilterContainer>
        </>
    );
}

export default Filter;
