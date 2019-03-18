import React from 'react';
import TaskTable from './TaskTable';
import TaskAdd from './TaskAdd';

export default class TaskPage extends React.Component {

  render() {
    return (<main>
              <div className="container">
                <TaskAdd />
                <TaskTable />
              </div>
            </main>
    );
  }
}
