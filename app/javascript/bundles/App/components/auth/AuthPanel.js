import React from 'react';
import {Query} from "react-apollo";
import {CURRENT_USER_TOKEN,CURRENT_EXPO_PUSH_TOKEN_STATE } from "../../queries/auth";
import SingInServer from "./SingInServer";
import SingUpServer from "./SingUpServer";
import SingOutServer from "./SingOutServer";
import SingInFacebook from "./SingInFacebook";
import SingInVK from "./SingInVK";

const AuthPanel = () => (
  <Query query={CURRENT_USER_TOKEN} >
  { ({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>
      if (error) return <div>Error...</div>
      if (data.currentUserToken == '') return <div>
        <SingInServer />
        <hr />
        <SingUpServer />
        <hr />
        <SingInFacebook />
        <hr />
        <SingInVK />
      </div>
      return <div>
        <div>token: {data.currentUserToken}</div>
          <Query query={CURRENT_EXPO_PUSH_TOKEN_STATE} >
            { ({ loading, error, data }) => {
              return <div>expo token</div>
            }}
          </Query>
        <SingOutServer />
      </div>;
    }
  }
  </Query>
)

export default AuthPanel;
