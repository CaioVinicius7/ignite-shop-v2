import type { AppProps } from "next/app";

import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
