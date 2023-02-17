import React from 'react'
import styled from 'styled-components'
import { TodoContext } from '../TodoContext'

const Input = styled.input`
    width: 70vw;
    padding: 2rem 1.5rem;

    font-size: 2rem;

    border-radius: 2rem;
`

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext)

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }

    return(
        <Input 
            placeholder="Write a task"
            value={ searchValue }
            onChange={ onSearchValueChange }    
        />
    )
}

export { TodoSearch }