import React, { Component } from 'react'

export class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: '',
      title: '',
      task: '',
      id: ''
    }
  
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

  }
   
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.title);
    this.setState({ 
        title: ''
    })
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });  

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
            value="Submit"
            className='btn'
            style={{flex: '1'}}
          />
        </form>
      </div>
    )
  }
};

export default AddTask