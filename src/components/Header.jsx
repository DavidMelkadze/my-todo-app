export default function Header(props) {

    const { todos } = props
    
    const activeTodos = todos.filter(todo => !todo.completed).length

    const areTasksPlural = activeTodos !== 1

    const taskOrTasks = areTasksPlural ? 'tasks' : 'task'

  return (
    <header >
      <h1>My Todo App</h1>
      <h2>You have {activeTodos} open {taskOrTasks}</h2>
    </header>
  )
}