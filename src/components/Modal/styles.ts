import styled from 'styled-components';

export const ModalContainer = styled.div`
    display: flex; 
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 

`

export const ModalContent = styled.div`
    width: 90%;
    height: 40%;
    box-sizing: border-box;
    padding: 2rem;
    background-color: white;
    border-radius: 0.5rem;
    h3 {
        margin-top: 1rem;
    }
    button {
        width: 100%;
        border: 1px solid ${props => props.theme.colors.secondary};
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 0.5rem;
        background-color: inherit;
        outline: none;
        
        :hover, :active {
            background-color: ${props => props.theme.colors.secondary};
            color: white;
        }
    }

    @media(min-width: 768px) {
        width: 40%;
        height: 50%;
        h3{
            margin-top: 2rem;
        }
        button {
            width: 60%;
            margin-top: 2rem;
        }
    }
    @media(min-height: 1024px) {
        height: 40%;
    }
`