import styled from 'styled-components';

export const FilterContainer = styled.select`
    width: 80%;
    padding: 1rem;
    margin-top: 1rem;
    border: 1px solid ${props => props.theme.colors.secondary};
    border-radius: 0.5rem;
    background-color: inherit;
    outline: none;

    @media(min-width: 1025px){
        width:15%;
        position: absolute;
        right: 5rem;
    }
`