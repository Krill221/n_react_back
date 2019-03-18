import React from 'react';
import { Mutation } from "react-apollo";
import { GET_TASKS } from '../queries';
import { ADD_TASK } from '../queries';


export default class TaskAdd extends React.Component {
  state = {
    name: '',
    body: ''
  };


  render() {
    return <Mutation mutation={ADD_TASK}
          refetchQueries={[{query: GET_TASKS}]} >
          {(addTask, { data }) => {
       return <div className="mt-3">
              <div className="form-label-group">
               <input type="text" className="form-control" id="inputName" placeholder="Name"
                  onChange={event => this.setState({name: event.target.value})}
                  value={this.state.name}
                 />
                 <label htmlFor="inputName">Name</label>
              </div>
              <div className="form-label-group">
                <input type="text" className="form-control" id="inputBody" placeholder="Body"
                    onChange={event => this.setState({body: event.target.value})}
                    value={this.state.body}
                />
                <label htmlFor="inputName">Body</label>
              </div>
              <button className="btn btn-block btn-primary my-2 my-sm-0" onClick={() => {
                    addTask({ variables:{
                      name: this.state.name,
                      body: this.state.body
                    } });
              }} >Add Task</button>
       </div>
     }}
  </Mutation>
  }
}
