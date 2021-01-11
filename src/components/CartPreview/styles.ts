import styled from 'styled-components';

export const CartPreviewContainer = styled.div`
    display: none;
    

    @media(min-width:1024px) {
        box-sizing: border-box;
        display: flex;
        background-color: white;
        padding: 2rem;
        width: 40%;
        border-radius: 5px;
        .redirect-button{
            padding: 1rem;
            margin-top: 1rem;
        }
        ::before {
            content: "";
            position: absolute;
            top: -5px;
            right: 0;
            margin-right: 10px;
            width: 0; 
            height: 0; 
            display: inline-block;
            
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 5px solid white;
        }
        
    }
`