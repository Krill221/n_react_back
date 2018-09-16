import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo"
import { BrowserRouter, Route } from 'react-router-dom'

import TaskPage from './TaskPage';




const client = new ApolloClient({
  //uri: "http://localhost:3000/graphql"
  uri: "http://192.168.0.103:3000/graphql"

});


export default class App extends React.Component {

  render() {
    return (<ApolloProvider client={client}>
            <BrowserRouter>
                <Route path="/" component={TaskPage}/>
            </BrowserRouter>
      </ApolloProvider>
    );
  }
}
