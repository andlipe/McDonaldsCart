import styled from 'styled-components';

export const IndexContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .card-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
     
    }

    .filter-container{
        width:100%;
    }
    @media(min-width: 1025px){
        width:95%;
        .filter-container{
            width: 95%;
            height: 80px;
            position: relative;
        }
    }
    
`