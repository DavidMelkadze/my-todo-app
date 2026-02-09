export default function TodoCard(props) {

  const { todo, handleCompleteTodo, handleDeleteTodo, todoIndex } = props

  

  return (
    <div className={"todo-item" + (todo.completed ? ' completed' : '')}>
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button onClick={ () => {
          handleCompleteTodo(todoIndex)
        }} disabled={todo.completed}>
          <h6>Done</h6>
        </button>
        <button onClick={() => {
          handleDeleteTodo(todoIndex)
        }}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  )
}