import React from 'react';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { client } from '@graphql-doc/client';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
