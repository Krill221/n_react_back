import React from 'react';
import {Mutation} from 'react-apollo';
import {SING_UP} from '../../queries/auth';

const SingUpServer = (props) => {
  let input_name;
  let input_email;
  let input_password;

  return (
    <Mutation mutation={SING_UP} onCompleted={(data) => { if(data.singUp !== null) props.onSuccess(); }} >
      { (SingUp) => (
        <div>
          <div className="form-label-group">
            <input type="text" className={props.classNameInput} id="inputName" placeholder="Name"
             ref={node => { input_name = node; }} />
            <label htmlFor="inputName">Name</label>
          </div>
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
          <button className={props.classNameButton} onClick={ () => SingUp({ variables: { name: input_name.value, email: input_email.value, password: input_password.value } }) } >
              SingUp
          </button>
        </div>
      )}
    </Mutation>
  );
};

export default SingUpServer
