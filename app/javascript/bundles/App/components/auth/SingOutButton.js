import React from 'react';
import {Mutation} from 'react-apollo';
import {SING_OUT, CURRENT_USER_TOKEN} from "../../queries/auth";


const SingOutButton = (props) => {
  return (
    <Mutation mutation={SING_OUT} refetchQueries={[{query: CURRENT_USER_TOKEN}]}>
      { (SingOut) => (
        <button className={props.className} onClick={ () => SingOut({ variables: {id: '' } }) } >
          SingOut
        </button>
      )}
    </Mutation>
  );
};

export default SingOutButton;
