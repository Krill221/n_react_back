import React from 'react';
import {Mutation} from 'react-apollo';
import {SING_IN, CURRENT_USER_TOKEN} from "../../queries/auth";

const SingInServer = (props) => {
  let input_email;
  let input_password;

  return (
    <Mutation mutation={SING_IN} onCompleted={(data) => { if(data.singIn !== null) props.onSuccess() }}
     refetchQueries={[{query: CURRENT_USER_TOKEN}]}>
      { (SingIn) => (
        <div>
          <div className="form-label-group">
            <input type="text" className={props.classNameInput} id="inputEmail" placeholder="Email"
             ref={node => { input_email = node; }} />
              <label htmlFor="inputEmail">Email</label>
            </div>
            <div className="form-label-group">
              <input type="text" className={props.classNameInput} id="inputPassword" placeholder="Password"
               ref={node => { input_password = node; }} />
              <label htmlFor="inputPassword">Password</label>
            </div>
            <button className={props.classNameButton}
                    onClick={ () => SingIn({ variables: { email: input_email.value, password: input_password.value } }) }
              >
                  SingIn
            </button>
        </div>
      )}
    </Mutation>
  );
};

export default SingInServer
