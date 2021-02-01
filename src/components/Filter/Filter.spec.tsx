import {render, screen, fireEvent} from '@testing-library/react';
import Filter from './Filter';
import { categories } from "../../static-data/static-data-categories";
import ProductProvider from '../../context/ProductContext';
import {ThemeProvider} from 'styled-components';
import light from '../../styles/themes/light';
describe('Filter Component', () => {
    it('should filter',   () => {
        const {getAllByTestId} = render(
            <ThemeProvider theme={light}>
                <ProductProvider>
                    <Filter categoriesInitial={categories}/>
                </ProductProvider>
            </ThemeProvider>
            );
        
        const options = getAllByTestId('filter-option');
        
        const filter = screen.getByRole('combobox', {name: ""});
        fireEvent.change(filter, { target: { value : 2}});
        
        expect(options[2].selected).toBeTruthy();
        
})    
})
