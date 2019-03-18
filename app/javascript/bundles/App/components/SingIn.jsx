import React from 'react';
import SingInServer from "./auth/SingInServer";
import SingInFacebook from "./auth/SingInFacebook";
import SingInVK from "./auth/SingInVK";
import {Route} from 'react-router-dom'


export default class SingIn extends React.Component {

  render() {
    return (<Route render={({ history}) => (<div className="container" style={{maxWidth: 420}}>
                  <h1 className="h3 mb-3 mt-3 font-weight-normal text-center">Please sign in</h1>
                  <div className="mb-3">
                    <SingInServer classNameButton="btn btn-block btn-primary my-2 my-sm-0" classNameInput="form-control"
                      onSuccess={()=>{ history.push('/') }}
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
            )} />
          )
  }
}
