import { useState, useEffect } from 'react'
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

  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('todo-theme')
      return saved || 'light'
    } catch (e) {
      return 'light'
    }
  })

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('todo-theme', theme)
    } catch (e) {}
  }, [theme])

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
    if (db && db.todos && Array.isArray(db.todos) && db.todos.length > 0) {
      setTodos(db.todos)
    }
  }, [])


  return (
    <>

      <div className="app-container">
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>

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
      </div>
    </>
  )
}


