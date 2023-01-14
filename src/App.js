import React, { Component } from "react";
import Header from "./components/Header";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        number: 0,
        text: '',
        id: uniqid()
      },
      tasks: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitTask = this.onSubmitTask.bind(this);
    this.delTask = this.delTask.bind(this);
  }

  delTask = (id) => {
    this.setState({ tasks: [...this.state.tasks.filter(task => task.id !==id)]})
  }
  


  handleChange = (e) => {
    this.setState({
      task : {
        number: this.state.task.number + 1,
        text: e.target.value,
        id: this.state.task.id,
      }
    });
  };
  
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        number: this.state.task.number,
        text: '',
        id: uniqid()
      },
    });
  };
  

  render() {
    const { task, tasks, id } = this.state;

    return (
      <div>
        <Header />
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input 
          onChange={this.handleChange}
          value={task.text}
          type="text" 
          id="taskInput"
          /> {''}
          <button type="submit">
            Add Task
          </button>
        </form>
        <Overview tasks={tasks} delTask={this.delTask} />
      </div>
    );
  }
}

export default App;