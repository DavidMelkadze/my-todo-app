export default function Header(props) {

    const { todos } = props
    
    const todosLength = todos.length

    const areTasksPlural = todos.length !== 1

    const taskOrTasks = areTasksPlural ? 'tasks' : 'task'

  return (
    <header>
      <h1>My Todo App</h1>
      <h2>You have {todosLength} open {taskOrTasks}</h2>
    </header>
  )
}