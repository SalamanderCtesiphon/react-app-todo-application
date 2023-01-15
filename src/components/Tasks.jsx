import React, { Component } from 'react'
import TaskItem from './TaskItem';

export class Tasks extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.tasks.map((task) => (
        <TaskItem key={task.id} task={task}
        delTask={this.props.delTask} />
    ));
  }
}

export default Tasks