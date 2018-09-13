import React from 'react';
import { Table, Button} from 'react-bootstrap';
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
           <input onChange={event => this.setState({name: event.target.value})} value={this.state.name}/>
           <input onChange={event => this.setState({body: event.target.value})} value={this.state.body}/>
          </div>
          <div >
            <Button onClick={() => {
              addTask({ variables:{
                name: this.state.name,
                body: this.state.body
              } });
            }} >Add Task</Button>
          </div>
       </div>
     }}
  </Mutation>
  }
}
