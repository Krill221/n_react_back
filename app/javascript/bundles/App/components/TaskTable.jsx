import React from 'react';
import { Table} from 'react-bootstrap';
import {Query} from "react-apollo";
import QRCode from "qrcode.react";

import { GET_TASKS } from '../queries';

export default class TaskTable extends React.Component {

  render() {
    return <Query query={GET_TASKS} >
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;

        return <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Body</th>
                    <th>Likes</th>
                    <th>QR code</th>
                  </tr>
                </thead>
                <tbody>{data.tasks && data.tasks.map( task => (
                  <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.name}</td>
                                <td>{task.body}</td>
                                <td>{task.likes}</td>
                                <td><QRCode value={task.uuid} /></td>
                  </tr>
                ) )}</tbody></Table>
      }}
    </Query>


  }
}
