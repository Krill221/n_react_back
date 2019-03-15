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
       return <div>
         <div>
           <div>
             <div>
                <div>Name</div>
                <input type="text" placeholder="Input name"
                  onChange={event => this.setState({name: event.target.value})}
                  value={this.state.name}
                  />
              </div>
                <div>
                  <div>Body</div>
                  <input type="text" placeholder="Input body"
                    onChange={event => this.setState({body: event.target.value})}
                    value={this.state.body}
                   />
                </div>
                <button className="btn btn-primary" onClick={() => {
                    addTask({ variables:{
                      name: this.state.name,
                      body: this.state.body
                    } });
                }} >Add Task</button>
            </div>
          </div>
       </div>
     }}
  </Mutation>
  }
}
