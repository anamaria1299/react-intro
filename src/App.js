import React from 'react'
import './App.css'
import {TodoList} from "./TodoList"
import {TodoApp} from "./TodoApp";

class App extends React.Component {

  render() {

    const todos = [{text:"Learn React", priority:5, dueDate: (new Date()).toDateString() },
      {text:"Learn about APIs", priority:4, dueDate: (new Date(2018,8,30)).toDateString() },
      {text:"write TODO App", priority:3, dueDate: (new Date(2018,9,30)).toDateString() }]

    return (
      <TodoApp />
    )
  }
}

export default App;
