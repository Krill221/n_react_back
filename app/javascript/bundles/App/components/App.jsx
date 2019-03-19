import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo"
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './Navigation';
import TaskPage from './TaskPage';
import SingIn from './SingIn';
import SingUp from './SingUp';


const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    //uri: "https://mimonami.herokuapp.com/graphql",
    credentials: 'include'
});


export default class App extends React.Component {
  render() {
    return (<ApolloProvider client={client}>
            <Router>
              <div style={{paddingTop: '3.5rem'}}>
                <Navigation />
                <main role="main" className="">
                  <Route exact path="/" component={TaskPage} />
                  <Route path="/singIn" component={SingIn} />
                  <Route path="/singUp" component={SingUp} />
                </main>
              </div>
            </Router>
      </ApolloProvider>
    );
  }
}
