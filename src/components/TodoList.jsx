import TodoCard from "./TodoCard";

export default function TodoList(props) {

    const { todos, selectedTab } = props

    const filteredTodos = selectedTab === 'All' ?
        todos :
        selectedTab === 'Completed' ?
        todos.filter(todo => todo.completed) :
        todos.filter(todo => !todo.completed)

    return ( 
        <>

            {filteredTodos.map((todo) => {
                const actualIndex = todos.indexOf(todo)
                return (
                    <TodoCard 
                    key={actualIndex}  
                    todoIndex={actualIndex}
                    {...props}
                    todo={todo} />
                )
            })}
        </>
     );
}