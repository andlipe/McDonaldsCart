import React from 'react';
import { FilterContainer } from './styles';


const Filter = () => {
    const [categories, setCategories] = React.useState([]);

    const loadCategories = async () => {
        await fetch('/api/categories')
            .then(response => response.json())
            .then(result => setCategories(result))
    }

    React.useEffect(() => {
        loadCategories();
    }, []);

    return (
        <FilterContainer>
            {categories.map(category => 
                <option key={category.id}>{category.name}</option>
            )}
        </FilterContainer>
    );
}

export default Filter;
