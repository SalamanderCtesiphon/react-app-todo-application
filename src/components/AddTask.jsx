import React, { Component } from 'react'

export class AddTask extends Component {
  state = {
      title: '',
      task: '',
      number: ''
    }
  
  
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.title);
    this.setState({ 
        title: ''
    })
  }

  onChange = (e) => {
    this.setState({ 
        title: e.target.value,
        id: this.state.task.id,
        number: this.state.task.number + 1 
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="taskInput">Enter task</label>
          <input 
            type="text"
            name="title"
            style={{flex: '10', padding: '5px'}}
            placeholder="Add task ..."
            value={this.state.title}
            onChange={this.onChange}
          /> {''}
          <input
            type="submit"
            value="Sumit"
            className='btn'
            style={{flex: '1'}}
          />
        </form>
      </div>
    )
  }
};

export default AddTask