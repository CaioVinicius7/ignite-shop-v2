import type { AppProps } from "next/app";

import { Header } from "../components/Header";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
