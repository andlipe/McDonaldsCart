import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    width: fit-content;
    padding: 2rem;
    border-radius: 1.5rem;
    margin: 1.5rem;
    h3 {
        margin-top: 1rem;
    }
    p {
        margin-top: 1rem;
    }
    button {
        border: none;
        outline: none;
        cursor: pointer;
        background-color: white;
        border: 1px solid #FDCC00;
        padding: 0.5rem;
        border-radius: 0.5rem;
        transition: background-color 0.5s;
        margin-top: 1rem;
        &:hover{
            background-color: #FDCC00
        }
    }
`