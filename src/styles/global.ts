import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: Roboto, sans-serif;
    font-display: swap;
    font-weight: 300;
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    button {
        cursor: pointer;
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
`