import React, { Component } from 'react'
import TaskItem from './TaskItem';

export class Tasks extends Component {

  render() {
    return this.props.tasks.map((task) => (
      <div className='listItem'>
        {this.props.tasks.indexOf(task) + 1}.<TaskItem key={task.id} task={task}
        delTask={this.props.delTask} />
      </div>
    ));
  }
}

export default Tasks