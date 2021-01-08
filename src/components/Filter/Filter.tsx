import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { FilterContainer } from './styles';


const Filter = ({setProducts, categoriesInitial }) => {
    const [categories, setCategories] = React.useState([]);
    const [categoryId, setCategoryId] = React.useState<number>();
    const {data: products} = useFetch(categoryId ? `api/products/${categoryId}` : `api/products/`);

    const handleFilter = (event) =>{
        if (event.target.value != undefined){
        setCategoryId(event.target.value);
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
            <option label="Listar todos" > </option>
            {categories.map(category => 
                <option value={category.id} label={category.name} key={category.id}></option>
            )}
        </FilterContainer>
        </>
    );
}

export default Filter;
