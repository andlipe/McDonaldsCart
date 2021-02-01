import { ThemeProvider } from 'styled-components'
import CartProvider from '../context/CartContext'
import ProductProvider from '../context/ProductContext'
import GlobalStyle from '../styles/global'
import light from '../styles/themes/light';
function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={light}>
  <CartProvider>
    <ProductProvider>
    <GlobalStyle />
    <Component {...pageProps} />
    </ProductProvider>
  </CartProvider>
  </ThemeProvider>
  )
}

export default MyApp
