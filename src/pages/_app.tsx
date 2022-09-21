import type { AppProps } from "next/app";

import { CartSideBar } from "../components/CartSidebar";
import { CartSideBarContextProvider } from "../contexts/CartSideBarContext";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <CartSideBarContextProvider>
      <Container>
        <Component {...pageProps} />

        <CartSideBar />
      </Container>
    </CartSideBarContextProvider>
  );
}

export default MyApp;
