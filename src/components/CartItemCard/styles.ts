import styled from 'styled-components';

export const ItemCard = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    border: 1px solid #FDCC00;
    p{
        width:20%;
        font-weight: 500;
    }
    button {
        border: 1px solid #FDCC00;
        border-radius: 0.5rem;
        background-color: inherit;
        width: 38px;
        padding: 0.3rem;
        font-size: 1.5rem;
        
    }
    @media(min-width: 1025px) {

            p{
                width: 20%
            }
        
    }     
        
`