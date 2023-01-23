import React, { Component } from 'react'

export class TaskItem extends Component {

  render() {
    const { id, title } = this.props.task;
    return (
      <div>
        { title } {''}
        <button onClick={this.props.delTask.bind(this, id)} style={btnStyle}>X</button>
      </div>
    )
  }
}

const btnStyle = {
    background:'#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
}

export default TaskItem