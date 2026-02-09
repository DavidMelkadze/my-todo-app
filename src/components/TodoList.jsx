import TodoCard from "./TodoCard";

export default function TodoList(props) {

    const { todos } = props

    const tab = 'All'
    const filteredTodos = tab === 'All' ?
        todos :
        tab === 'Completed' ?
        todos.filter(todo => todo.completed) :
        todos.filter(todo => !todo.completed)

    return ( 
        <>

            {filteredTodos.map((todo, todoIndex) => {
                return (
                    <TodoCard 
                    key={todoIndex}  
                    todo={todo} />
                )
            })}
        </>
     );
}