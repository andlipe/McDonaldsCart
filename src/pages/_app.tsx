import CartProvider from '../context/CartContext'
import GlobalStyle from '../styles/global'

function MyApp({ Component, pageProps }) {
  return (
  <CartProvider>
    <GlobalStyle />
    <Component {...pageProps} />
  </CartProvider>
  )
}

export default MyApp
