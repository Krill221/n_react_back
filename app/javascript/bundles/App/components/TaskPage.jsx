import React from 'react';
import Navigation from './Navigation';
import TaskTable from './TaskTable';
import TaskAdd from './TaskAdd';

export default class TaskPage extends React.Component {

  render() {
    return (<div>
              <Navigation />
              <TaskAdd />
              <TaskTable />
            </div>
          );
  }
}
