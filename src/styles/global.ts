import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`