import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { FilterContainer } from './styles';


const Filter = () => {
    const [categories, setCategories] = React.useState([]);
    const {data} = useFetch('/api/categories');

    React.useEffect(() => {
        if(data){
            setCategories(data)
        }
    }, [data]);
    
    if(!data) return <div>...Loading</div>

    return (
        <>
        <FilterContainer>
            {categories.map(category => 
                <option label={category.name} key={category.id}>{category.name}</option>
            )}
        </FilterContainer>
        </>
    );
}

export default Filter;
