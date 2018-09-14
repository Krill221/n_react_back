import React from 'react';
import { Table, Button, Panel, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
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
         <Panel>
           <Panel.Body>
             <FormGroup controlId="formName">
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" placeholder="Input name"
                  onChange={event => this.setState({name: event.target.value})}
                  value={this.state.name}
                  /></FormGroup>
                <FormGroup controlId="formBody">
                  <ControlLabel>Body</ControlLabel>
                  <FormControl type="text" placeholder="Input body"
                    onChange={event => this.setState({body: event.target.value})}
                    value={this.state.body}
                   />
                </FormGroup>
                <Button bsStyle="success" onClick={() => {
                    addTask({ variables:{
                      name: this.state.name,
                      body: this.state.body
                    } });
                }} >Add Task</Button>
            </Panel.Body>
          </Panel>
       </div>
     }}
  </Mutation>
  }
}
