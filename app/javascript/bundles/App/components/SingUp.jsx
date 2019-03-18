import React from 'react';
import {Route} from 'react-router-dom'
import SingUpServer from "./auth/SingUpServer";
import SingInFacebook from "./auth/SingInFacebook";
import SingInVK from "./auth/SingInVK";


export default class SingUp extends React.Component {

  render() {
    return (<Route render={({ history}) => (
              <main role="main" className="flex-shrink-0">
                <div className="container" style={{maxWidth: 420}}>
                  <h1 className="h3 mb-3 mt-3 font-weight-normal text-center">Please sign up</h1>
                  <div className="mb-3">
                    <SingUpServer classNameButton="btn btn-block btn-primary my-2 my-sm-0" classNameInput="form-control"
                      onSuccess={()=>{ history.push('/singIn') }}
                     />
                  </div>
                  <div className="mb-3">
                    <SingInFacebook className="btn btn-block btn-primary my-2 my-sm-0"
                      onSuccess={()=>{ history.push('/') }}
                     />
                  </div>
                  <div className="mb-3">
                    <SingInVK className="btn btn-block btn-primary my-2 my-sm-0"
                      onSuccess={()=>{ history.push('/') }}
                     />
                  </div>
                  <p className="mt-5 mb-3 text-muted">© 2019-2020</p>
                </div>
              </main>
              )} />
          );
  }
}
