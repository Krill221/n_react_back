import React from 'react';
import AuthPanel from './auth/AuthPanel';


export default class Navigation extends React.Component {

  render() {
    return (<nav className="site-header sticky-top py-1">
              <div className="container d-flex flex-column flex-md-row justify-content-between">
                <div>
                  <div>
                    <a href="#home">INDEX</a>
                  </div>
                </div>
              </div>
            <AuthPanel/>
            </nav>
          );
  }
}
