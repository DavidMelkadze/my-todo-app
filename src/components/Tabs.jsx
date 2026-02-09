export default function Tabs(props) {

    const { todos, selectedTab, setSelectedTab } = props

    const tabs = ['All', 'Active', 'Completed']

  return (
    <nav className="tab-container">
        
      {tabs.map((tab, tabIndex) => {

        const numberOfTodos = tab === 'All' ? 
          todos.length :
          tab === 'Active' ?
          todos.filter(todo => !todo.completed).length :
          todos.filter(todo => todo.completed).length

        return (
          <button 
            onClick={() => setSelectedTab(tab)}
            key={tabIndex} 
            className={"tab-button" + (selectedTab === tab ? ' tab-selected' : '')}>
            <h4>{tab} <span>({numberOfTodos})</span></h4>
          </button>
        )
      })}

       <hr />
    </nav>
  )
}