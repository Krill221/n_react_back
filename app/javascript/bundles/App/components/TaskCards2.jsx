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

        return <div className="mt-5">
                {data.tasks && data.tasks.eachSlice(3).map( (task_group, index) => (
                 <div className="row" key={index}>
                 {task_group &&  task_group.map( (task, index2) => (<div className="col-md-4" key={index2}>
                   {task != undefined && <div className="card mb-4 box-shadow">
                     <div id={"myCarousel"+task.id} className="carousel slide" data-ride="false" style={{height: 225, width: '100%'}}>
                        <ol className="carousel-indicators">
                          {task.images && task.images.map( (image, index) =>
                            <li data-target={"#myCarousel"+task.id} data-slide-to={index} key={index} className={index == 0 ? "active" : ""}></li>
                          )}
                          <li data-target={"#myCarousel"+task.id} data-slide-to={task.images.length} className=""></li>
                        </ol>
                        <div className="carousel-inner bg-dark">
                          {task.images && task.images.map( (image, index) => (
                            <div className="carousel-item" key={index} className={"carousel-item " + (index == 0 ? "active" : "")}>
                              <img className="card-img-top" alt="Thumbnail [100%x225]"
                               style={{height: 225, width: '100%', display: 'block'}}
                               src={image.url} data-holder-rendered="true" />
                            </div>
                          ))}
                          <div className="carousel-item">
                            <div className="card-img-top" style={{textAlign: 'center', height: 225, width: '100%', display: 'block'}}>
                              <QRCode value={task.uuid} size={150}/>
                             </div>
                          </div>
                        </div>
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
