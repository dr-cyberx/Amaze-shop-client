import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import cookie from "cookie";
import { setContext } from "@apollo/client/link/context";

const httpLink: ApolloLink = createHttpLink({
  uri: 'http://localhost:4000/amazeshop',
});

const authLink: ApolloLink = setContext((_, { headers }) => {
  const token = cookie.parse(document.cookie)?.authToken;

  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
    },
  };
});

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
