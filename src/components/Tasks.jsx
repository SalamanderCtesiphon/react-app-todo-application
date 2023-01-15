import React, { Component } from 'react'
import TaskItem from './TaskItem';

export class Tasks extends Component {
  render() {
    return this.props.tasks.map((task) => (
        <TaskItem key={task.id} number={this.props.number} task={task}
        delTask={this.props.delTask} />
    ));
  }
}

export default Tasks