import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import useLocalStorage from "hooks/useLocalStorage";

const httpLink: ApolloLink = createHttpLink({
  //uri: "http://localhost:4000/amazeshop",
  uri: "https://amaze-shop-server.herokuapp.com/amazeshop",
});

const authLink: ApolloLink = setContext((_, { headers }) => {
  // const token = cookie.parse(document.cookie)?.auth_token;
  const token = useLocalStorage.getItem("auth_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    },
  };
});

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    addTypename: false,
  }),
});
