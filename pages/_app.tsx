import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ShogiTheme } from "../theme";
import { ShogiMenu } from "../components/navbar";

const theme = extendTheme(ShogiTheme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ShogiMenu />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
