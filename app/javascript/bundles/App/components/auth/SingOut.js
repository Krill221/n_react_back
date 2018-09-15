import React from 'react';
import {Mutation} from 'react-apollo';
import {SING_OUT, CURRENT_USER_TOKEN} from "../../queries/auth";


const SingOut = () => {
  return (
    <Mutation mutation={SING_OUT} refetchQueries={[{query: CURRENT_USER_TOKEN}]}>
      { (SingOut) => (
        <div>
            <button onClick={ () => SingOut({ variables: {id: '' } }) } >
              SingOut
            </button>
        </div>
      )}
    </Mutation>
  );
};

export default SingOut
