import React, { Component } from 'react'

export class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      task: {}
    }

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
        number: this.state.task.number + 1, 
        title: e.target.value,
        id: this.state.task.id,
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