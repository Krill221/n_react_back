import React from 'react';
import {Query} from "react-apollo";
import {CURRENT_USER_TOKEN,CURRENT_EXPO_PUSH_TOKEN_STATE } from "../queries/auth";
import SingOutButton from "./auth/SingOutButton";


export default class Navigation extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Mimonami</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
          </ul>

          <Query query={CURRENT_USER_TOKEN} >
              { ({ loading, error, data }) => {
                  if (loading) return null;
                  if (error) return null;
                  if (data.currentUserToken == '') return <div className="btn-group" role="group" aria-label="">
                    <a role="button" className="btn btn-outline-success" href="/singIn">SingIn</a>
                    <a role="button" className="btn btn-outline-success" href="/singUp">singUp</a>
                  </div>
                  return <SingOutButton className="btn btn-outline-success my-2 my-sm-0" />
              }
            }</Query>
        </div>
      </nav>
      );
  }
}
