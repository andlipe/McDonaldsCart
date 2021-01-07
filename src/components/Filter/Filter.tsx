import React from 'react';

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
        <select>
            {categories.map(category => 
                <option key={category.id}>{category.name}</option>
            )}
        </select>
    );
}

export default Filter;
