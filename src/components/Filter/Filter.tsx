import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { FilterContainer } from './styles';


const Filter = ({setProducts}) => {
    const [categories, setCategories] = React.useState([]);
    const [categoryId, setCategoryId] = React.useState<number>();
    const {data} = useFetch('/api/categories');
    const {data: products} = useFetch(`api/products/${categoryId}`);
    

    const handleFilter = (event) =>{
        if (event.target.value != undefined){
        setCategoryId(event.target.value);
        }
    }

    React.useEffect(() => {
        if(data){
            setCategories(data)
        }
    }, [data]);
    
    React.useEffect(() => {
        if(products != undefined){
            if(products.length > 0){
                setProducts(products)
            }
        }
    }, [products]);

    if(!data) return <div>...Loading</div>

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
