import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

import './style/normalize.css'
import './style/material-components-web.css'

import Provider from './store'
import Navigation from './components/Navigation'

const wsLink = new WebSocketLink({
  uri: 'wss://us1.prisma.sh/leandro-bernardi-40b895/panchos/dev',
  options: {
    reconnect: true,
  },
})

const httpLink = new HttpLink({
  uri: 'https://us1.prisma.sh/leandro-bernardi-40b895/panchos/dev',
})

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink,
)

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})


ReactDOM.render(
  <Provider>
    <ApolloProvider client={client}>
        <Navigation />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root'),
)
