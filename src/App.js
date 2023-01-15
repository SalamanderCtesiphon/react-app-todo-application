import React, { Component } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import uniqid from "uniqid";
import './App.css';

class App extends Component {
  state = {
    tasks: [
      {
        number: 1,
        id: uniqid(),
        title: 'Get Organized'
      }
    ]
  }

  delTask = (id) => {
    this.setState({ 
      tasks: [...this.state.tasks.filter(task => task.id !==id)]})
  }
  
  addTask = (title, number) => {
    const newTask = {
      id: uniqid(),
      title,
      number
    }
    this.setState({ tasks: [...this.state.tasks, newTask]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTask addTask={this.addTask}/>
          <Tasks number={this.state.number} tasks={this.state.tasks} 
          delTask={this.delTask} />
        </div>
      </div>
    );
  }
}

export default App;