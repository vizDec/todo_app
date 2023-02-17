import React from "react";
import { TodoContext } from "../../TodoContext";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const { 
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
    }
    const onCancel = () => {
        setOpenModal(false)
    }

    return (
        <form onSubmit={ onSubmit }>
            <label></label>
            <textarea 
                value={ newTodoValue }
                onChange={ onChange }
                placeholder="Llorar con la llorona"
            />

            <div>
                <button
                    type="button"
                    onClick={ onCancel }
                >
                    Cancel
                </button>
                <button
                    type="submit"
                >
                    Add
                </button>
            </div>
        </form>
    )
}

export { TodoForm }