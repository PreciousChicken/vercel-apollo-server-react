import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createHttpLink, ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({ uri: "/api/graphql" }),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);