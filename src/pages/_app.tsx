import type { AppProps } from "next/app";
import { CartProvider } from "use-shopping-cart";

import { CartSideBar } from "../components/CartSidebar";
import { Spinner } from "../components/Spinner";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <CartProvider
      cartMode="checkout-session"
      stripe=""
      currency="BRL"
      language="pt-BR"
      loading={<Spinner />}
    >
      <Container>
        <Component {...pageProps} />

        <CartSideBar />
      </Container>
    </CartProvider>
  );
}

export default MyApp;
