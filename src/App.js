import React, { Component } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import uniqid from "uniqid";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          number: 1,
          id: uniqid(),
          title: 'Get Organized'
        }
      ]
    }
    this.delTask = this.delTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }
  

  delTask = (id) => {
    this.setState({ 
      tasks: [...this.state.tasks.filter(task => task.id !==id)]})
  }
  
  addTask = (number, id, title) => {
    const newTask = {
      number,
      title,
      id: uniqid()
    }
    this.setState({ tasks: [...this.state.tasks, newTask]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTask addTask={this.addTask}/>
          <Tasks tasks={this.state.tasks} 
          delTask={this.delTask} />
        </div>
      </div>
    );
  }
}

export default App;