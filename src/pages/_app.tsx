import React from "react";

import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.scss";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Template NextJS com Eslint</title>
        <meta property="og:title" content="Sistema Alcans" key="title" />
      </Head>

      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
