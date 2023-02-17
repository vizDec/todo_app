import React from "react";
import styled from "styled-components";
import { TodoContext } from "../../TodoContext";

const FormAddTodo = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    height: 20rem;

    font-size: 3rem;
    color: black;

    background-color: #ccc;
    border-radius: .8rem;
`

const ButtonAction = styled.button`
    margin: 0 1rem;
    padding: 1rem;
    width: 8rem;
    border-radius: .8rem;
    border: none;
`

const TextArea = styled.textarea`
    padding: .5rem;
    height: 6rem;
    
    border: none;
    border-radius: .5rem;
    resize: none;
`

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
        <FormAddTodo onSubmit={ onSubmit }>
            <label>Add ToDo</label>
            <TextArea 
                value={ newTodoValue }
                onChange={ onChange }
                placeholder="Write your ToDo"
            />

            <div>
                <ButtonAction
                    type="button"
                    onClick={ onCancel }
                >
                    Cancel
                </ButtonAction>
                <ButtonAction
                    type="submit"
                >
                    Add
                </ButtonAction>
            </div>
        </FormAddTodo>
    )
}

export { TodoForm }