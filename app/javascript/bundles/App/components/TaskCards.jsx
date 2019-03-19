import React from 'react';
import {Query} from "react-apollo";
import QRCode from "qrcode.react";
import 'array-each-slice';
import { GET_TASKS } from '../queries';

export default class TaskCards extends React.Component {

  render() {
    return <Query query={GET_TASKS} >
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;

        console.log(data.tasks.eachSlice(2));

        return <div className="mt-5">{data.tasks && data.tasks.eachSlice(2).map( (task, index) => (
                 <div className="row mb-2" key={index}>
                 {task[0] != undefined &&
                    <div className="col-md-6">
                      <div className="card flex-md-row mb-4 box-shadow h-md-250">
                        <div className="card-body d-flex flex-column align-items-start">
                          <strong className="d-inline-block mb-2 text-primary">World</strong>
                          <h3 className="mb-0">
                            <a className="text-dark" href="#">{task[0].name}</a>
                          </h3>
                          <div className="mb-1 text-muted">Likes {task[0].likes}</div>
                          <p className="card-text mb-auto">{task[0].body}</p>
                          <a href="#">Continue reading</a>
                        </div>
                        <QRCode value={task[0].uuid} size={200} bgColor={'#dee2e6'} />
                      </div>
                    </div>
                  }
                  {task[1] != undefined && <div className="col-md-6">
                      <div className="card flex-md-row mb-4 box-shadow h-md-250">
                        <div className="card-body d-flex flex-column align-items-start">
                          <strong className="d-inline-block mb-2 text-success">Design</strong>
                          <h3 className="mb-0">
                            <a className="text-dark" href="#">{task[1].name}</a>
                          </h3>
                          <div className="mb-1 text-muted">Likes {task[1].likes}</div>
                          <p className="card-text mb-auto">{task[1].body}</p>
                          <a href="#">Continue reading</a>
                        </div>
                        <QRCode value={task[1].uuid} size={200} bgColor={'#dee2e6'} />
                      </div>
                    </div>
                  }
                </div>
              )
            )}
        </div>
      }}
    </Query>


  }
}
