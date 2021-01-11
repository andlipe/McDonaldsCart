import CartProvider from '../context/CartContext'
import ProductProvider from '../context/ProductContext'
import GlobalStyle from '../styles/global'

function MyApp({ Component, pageProps }) {
  return (
  <CartProvider>
    <ProductProvider>
    <GlobalStyle />
    <Component {...pageProps} />
    </ProductProvider>
  </CartProvider>
  )
}

export default MyApp
