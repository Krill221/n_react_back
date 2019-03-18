import React from 'react';
import TaskTable from './TaskTable';
import TaskAdd from './TaskAdd';

export default class TaskPage extends React.Component {

  render() {
    return (<div>
              <main>
                <TaskAdd />
                <TaskTable />
              </main>
            </div>
          );
  }
}
