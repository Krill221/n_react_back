import React from 'react';
//import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import {Mutation} from 'react-apollo';
import {ApolloConsumer} from "react-apollo";
import {SING_IN_FACEBOOK, CURRENT_USER_TOKEN} from "../../queries/auth";

class SingInFacebook extends React.Component {

  state = {
    isLoggedIn: false,
    userId: '',
    name: '',
    email: '',
    picture: '',
    accessToken: ''
  }

  componentClicked = () => {
  }

  responseFacebook = response => {
    console.log(response);
    this.setState({
      isLoggedIn: true,
      userId: response.userId,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      accessToken: response.accessToken
    });
  }

  render() {
    let fbContent = (<FacebookLogin
        appId="2318681708359292"
        autoLoad={false}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook}
        render={renderProps => (<button onClick={renderProps.onClick}>LOGIN WITH FB</button>
  )} />);

    if(this.state.isLoggedIn){
        fbContent = (<ApolloConsumer>
          { (client) => {
            client.mutate({ mutation: SING_IN_FACEBOOK,
              variables: { facebooktoken: this.state.accessToken },
              refetchQueries: [{query: CURRENT_USER_TOKEN}]
            })
            //return <div>{this.state.name}</div>;
            return <div>fb</div>;
          }}
        </ApolloConsumer>)
    }

    return <div>{fbContent}</div>;
  }
}

export default SingInFacebook
