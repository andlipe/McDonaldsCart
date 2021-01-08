import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;

    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    width: 80%;
    padding: 1.5rem;
    border-radius: 1.5rem;
    margin: 1.5rem;
    word-break: break-all;
    h3 {
        margin-top: 1rem;
    }
    p {
        margin-top: 1rem;
    }
    button {
        border: none;
        outline: none;
        background-color: white;
        border: 1px solid #FDCC00;
        padding: 0.5rem;
        border-radius: 0.5rem;
        transition: all 0.3s;
        margin-top: 1rem;
        :hover, :active {
            background-color: #FDCC00;
            color: white;
        }
    }

    @media(min-width: 1025px){
        width: 20%;
    }
`