import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo"
import { BrowserRouter, Route } from 'react-router-dom'

import TaskPage from './TaskPage';


const client = new ApolloClient({
    //uri: 'http://localhost:3000/graphql',
    uri: "https://mimonami.herokuapp.com/graphql",
    credentials: 'include'
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
