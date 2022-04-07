import React from 'react';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { client } from '@graphql-doc/client';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import { CartContextProvider } from 'context/Cart/CartContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartContextProvider>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </CartContextProvider>
    </>
  );
}

export default MyApp;
