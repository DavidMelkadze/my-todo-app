import { useState, useEffect, use } from 'react'
import Header from './components/Header'
import Tabs from './components/Tabs'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

export default function App() {

  const [todos, setTodos] = useState([
    { input: 'Practise Coding', completed: true },
    { input: 'Go to the gym', completed: false },
    { input: 'Cook dinner', completed: false },
    { input: 'Read a book', completed: true },
  ])

  const  [selectedTab, setSelectedTab] = useState('Active')

  const handleAddTodo = (newTodo) => {
    const updatedTodos = [...todos, {input: newTodo, completed: false }]

    setTodos(updatedTodos) 
    handleSaveData(updatedTodos)
  }

  const handleCompleteTodo = (index) => {
      let updatedTodos = [...todos]
      updatedTodos[index] = {...updatedTodos[index], completed: true}
      setTodos(updatedTodos) 
      handleSaveData(updatedTodos)
  }

  const handleDeleteTodo = (index) => {
      let updatedTodos = todos.filter((todo, todoIndex) => {
        return todoIndex !== index
      })

      setTodos(updatedTodos)
      handleSaveData(updatedTodos)
  }

  function handleSaveData (currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) { return }
     let db = JSON.parse(localStorage.getItem('todo-app'))
      setTodos(db.todos)
  }, [])


  return (
    <>
      <Header todos={todos} />
      <Tabs 
        selectedTab={selectedTab} 
        setSelectedTab={setSelectedTab}
        todos={todos} />
      <TodoList 
        todos={todos}
        selectedTab={selectedTab} 
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo} />
      <TodoInput handleAddTodo={handleAddTodo} />
      
    </>
  )
}


