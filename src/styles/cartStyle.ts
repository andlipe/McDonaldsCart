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
        .card {
            width: 100%;
            padding: 1rem;
            display: flex;
            flex-direction: row;

            justify-content: space-between;
            border: 1px solid #FDCC00;
            button {
                border: none;
                background-color: inherit;
                padding: 0checkoutButton.5rem;
                font-size: 1.5rem;
            }
        }
    }

    .checkoutButton {
        border: 1px solid #FDCC00;
        border-radius: 0.5rem;
        margin-top: 2rem;
        padding: 1rem;

        background-color: inherit;
        transition: all 0.3s;
        outline: none;
        :hover, :active {
            background-color: #FDCC00;
            color: white;
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

    border: 1px solid #FDCC00;
    margin-top: 1rem;
`