import React, { Component } from 'react'

export class TaskItem extends Component {
  render() {
    const { id, title, number } = this.props.task;
    return (
      <div>
        <p>
            { number }. { title } {''}
            <button onClick={this.props.delTask.bind(this, id)} style={btnStyle}>X</button>
        </p>
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