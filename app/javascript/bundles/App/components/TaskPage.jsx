import React from 'react';
import TaskTable from './TaskTable';
import TaskCards2 from './TaskCards2';
import TaskAdd from './TaskAdd';

export default class TaskPage extends React.Component {

  render() {
    return (<div>
      <div className="jumbotron p-3 p-md-5">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">Title of Mimonami</h1>
          <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
          <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>
        </div>
      </div>
      <div className="container">
          <TaskAdd />
          <TaskCards2 />
      </div>
      </div>
    );
  }
}
