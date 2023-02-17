import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider(props) {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = React.useState('')
  const [openModal, setOpenModal] = React.useState(false)

  let searchedTodos = []
  
  if(searchValue.length === 0) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

//TodoCounter
  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length
  
//TodoItem
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]

    if(newTodos[todoIndex].completed === false) {
      newTodos[todoIndex].completed = true
    } else {
      newTodos[todoIndex].completed = false
    }
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  const addTodo = (text) => {
    const newTodos = [...todos]

    newTodos.push({
      completed: false,
      text,
    })
    
    saveTodos(newTodos)
  }

    return (
        <TodoContext.Provider value={{
            error,
            loading,

            totalTodos,
            completedTodos,

            searchValue,
            setSearchValue,

            searchedTodos,
            completeTodo,
            deleteTodo,
            addTodo,

            openModal,
            setOpenModal,
        }}>
            { props.children }
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }