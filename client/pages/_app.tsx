import React from 'react';
import type { AppProps } from 'next/app'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import '../styles/globals.css'

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Component {...pageProps} />
  </> 
}

export default MyApp
