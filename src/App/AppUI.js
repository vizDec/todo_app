import React from 'react';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import { TodoContext } from '../TodoContext';

import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoForm } from '../components/Modal/TodoForm';

import { Modal } from '../components/Modal';


const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
`
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

function AppUI() {
    const { 
        error,
        loading,

        searchedTodos,
        completeTodo,
        deleteTodo, 

        openModal,
        setOpenModal
    } = React.useContext(TodoContext)

    return(
        <Container>
            <GlobalStyle />

            <TodoCounter />
            
            <TodoSearch />
    
            <TodoList>
            {error && <p>Hubo un error</p>}
            {loading && <p>Estamos cargando</p>}
            {(!loading && !searchedTodos.length) && <p>Crea tu primer Todo</p>}

            {searchedTodos.map(todo => (
                <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                />
            ))}
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
    
            <CreateTodoButton 
                setOpenModal={ setOpenModal }
                openModal={ openModal }
            />
        </Container>
    )
}

export { AppUI }