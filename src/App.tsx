import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client'

import GlobalStyle from './styles/global'

const App: React.FC = () => (
  <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle /> 
    </ApolloProvider>
)

export default App;
