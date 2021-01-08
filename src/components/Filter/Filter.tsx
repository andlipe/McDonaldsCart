import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { FilterContainer } from './styles';


const Filter = ({setProducts, categoriesInitial }) => {
    const [categories, setCategories] = React.useState([]);
    const [categoryId, setCategoryId] = React.useState<number>();
    //const {data: categories} = useFetch('/api/categories');
    const {data: products} = useFetch(categoryId ? `api/products/${categoryId}` : `api/products/`);
    const handleFilter = (event) =>{
        if (event.target.value != undefined){
        setCategoryId(event.target.value);
        }
    }
    React.useEffect(() => {
        if(products != undefined){
        setProducts(products)
        }else{
            setCategories(categoriesInitial)
        }

    }, [products]);

    if(!categories) return <div>...Loading</div>

    return (
        <>
        <FilterContainer onChange={(event) => handleFilter(event)}>
            <option label="Selecione um filtro" > </option>
            {categories.map(category => 
                <option value={category.id} label={category.name} key={category.id}></option>
            )}
        </FilterContainer>
        </>
    );
}

export default Filter;
