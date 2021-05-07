import { ApolloClient, InMemoryCache } from '@apollo/client';

const uri: string = 'http://localhost:2020/graphql';
const cache: InMemoryCache = new InMemoryCache();

const client = new ApolloClient({
  uri,
  cache
});

export default client;
