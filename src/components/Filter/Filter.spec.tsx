import {render, screen, fireEvent} from '@testing-library/react';
import Filter from './Filter';
import { categories } from "../../static-data/static-data-categories";
import ProductProvider from '../../context/ProductContext';

describe('Filter Component', () => {
    it('should filter',   () => {
        const {getAllByTestId} = render(
            <ProductProvider>
                <Filter categoriesInitial={categories}/>
            </ProductProvider>
            );
        
        const options = getAllByTestId('filter-option');
        
        const filter = screen.getByRole('combobox', {name: ""});
        fireEvent.change(filter, { target: { value : 2}});
        
        expect(options[2].selected).toBeTruthy();
        
})    
})
