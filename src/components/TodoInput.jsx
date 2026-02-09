import { useState } from "react"

export default function TodoInput(props) {

    const { handleAddTodo } = props
    const [inputValue, setInputValue] = useState('')

    const submit = () => {
        const val = inputValue.trim()
        if (!val) return
        handleAddTodo(val)
        setInputValue('')
    }

    return (
        <div className="input-container"> 
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') submit() }}
                placeholder="Add Task" />
            <button onClick={submit}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}