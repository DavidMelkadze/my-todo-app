import { useState } from 'react'
import Header from './components/Header'
import Tabs from './components/Tabs'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

export default function App() {
  
      // const todos = [
      //   { input: 'Practise Coding', completed: true },
      //   { input: 'Go to the gym', completed: false },
      //   { input: 'Cook dinner', completed: false },
      //   { input: 'Read a book', completed: true },
      // ]

  const [todos, setTodos] = useState([
    { input: 'Practise Coding', completed: true },
    { input: 'Go to the gym', completed: false },
    { input: 'Cook dinner', completed: false },
    { input: 'Read a book', completed: true },
  ])

  const handleAddTodo = (newTodo) => {
    const updatedTodos = [...todos, {input: newTodo, completed: false }]

    setTodos(updatedTodos) 
  }

  const handleEditTodo = (index, updatedTodo) => {
  }

  const handleDeleteTodo = (index) => {
  }

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo} />
      
    </>
  )
}


