import React from 'react';
import {Query} from "react-apollo";
import QRCode from "qrcode.react";
import 'array-each-slice';
import { GET_TASKS } from '../queries';

export default class TaskCards2 extends React.Component {

  render() {
    return <Query query={GET_TASKS} >
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;

        console.log(data.tasks.eachSlice(2));

        return <div className="mt-5">
                {data.tasks && data.tasks.eachSlice(3).map( (task_group, index) => (
                 <div className="row" key={index}>
                 {task_group &&  task_group.map( (task, index2) => (<div className="col-md-4" key={index2}>
                   {task != undefined && <div className="card mb-4 box-shadow">
                    <div className="card-img-top bg-dark" style={{textAlign: 'center', height: 225, width: '100%', display: 'block'}}>
                      <QRCode value={task.uuid} size={225}/>
                     </div>
                     <div className="card-body">
                       <p className="card-text">{task.name}</p>
                       <div className="d-flex justify-content-between align-items-center">
                         <div className="btn-group">
                           <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                           <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                         </div>
                         <small className="text-muted">Likes {task.likes}</small>
                       </div>
                     </div>
                   </div>
                   }
                   </div>
                 )
               )}
                </div>
              )
            )}
        </div>
      }}
    </Query>


  }
}
