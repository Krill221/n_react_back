import React from 'react';
import TaskTable from './TaskTable';
import TaskCards2 from './TaskCards2';
import TaskAdd from './TaskAdd';

export default class TaskPage extends React.Component {

  render() {
    return (<div>
      <div className="jumbotron text-center">
        <div className="container">
          <h1 className="display-4 font-italic">Title of Mimonami</h1>
          <p className="lead my-3">Multiple lines of text that form the lede, interesting in this post's contents.</p>
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
