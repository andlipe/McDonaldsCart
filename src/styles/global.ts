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
    }
`