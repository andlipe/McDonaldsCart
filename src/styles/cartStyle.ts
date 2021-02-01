import styled from 'styled-components';

export const CartContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin: 2rem 0;
    }
    .cardContainer{
        flex-direction: column;
        width: 80%;
    }

    @media(min-width: 1025px) {
        .cardContainer {
            width: 60%;
        }
    }  
`
export const TotalPriceContainer = styled.div`
    padding: 1rem;
    width: 80%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;

    border: 1px solid ${props => props.theme.colors.secondary};
    margin-top: 1rem;
    p{
        font-weight: 500;
    }
    @media(min-width: 1025px) {
        
            width: 60%;
        
    }  
`

export const CheckoutButton = styled.button`
        border: 1px solid ${props => props.theme.colors.secondary};
        border-radius: 0.5rem;
        margin-top: 2rem;
        padding: 1rem;

        background-color: inherit;
        transition: all 0.3s;
        outline: none;
        :hover, :active {
            background-color: ${props => props.theme.colors.secondary};
            color: white;
        }
    
`