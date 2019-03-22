import React from 'react';
import VkAuth from './lib/react-vk-auth';
import {Mutation} from 'react-apollo';
import {ApolloConsumer} from "react-apollo";
import {SING_IN_VK, CURRENT_USER_TOKEN} from "../../queries/auth";


class SingInVK extends React.Component {

  state = {
    isLoggedIn: false,
    userId: '',
    name: '',
    expire: '',
    secret: '',
    sid: '',
    sig: ''
  }

  responseVK = (response) => {
    this.setState({
      isLoggedIn: true,
      userId: response.res.session.mid,
      domain: response.res.session.user.domain,
      name: response.res.session.user.first_name + ' ' + response.res.session.user.last_name,
      expire: response.res.session.expire,
      secret: response.res.session.secret,
      sid: response.res.session.sid,
      sig: response.res.session.sig
    });

  }

  render() {


    let content = (<VkAuth className={this.props.className} apiId="6681159" callback={this.responseVK} >
      LOGIN WITH VK
    </VkAuth>);

    if(this.state.isLoggedIn){
        let strvk = "expire="+this.state.expire+"mid="+this.state.userId+"secret="+this.state.secret+"sid="+this.state.sid
        //console.log(strvk);
        //console.log(this.state.sig);
        content = (<ApolloConsumer>
          { (client) => {
            client.mutate({ mutation: SING_IN_VK,
              variables: { name: this.state.name, domain: this.state.domain,  strvk: strvk, sig: this.state.sig },
              refetchQueries: [{query: CURRENT_USER_TOKEN}]
            });
            //return <div>{this.state.name}</div>;
            this.props.onSuccess();
            return <div>vk</div>;
          }}
        </ApolloConsumer>)
    }

    return content;
  }
}

export default SingInVK
