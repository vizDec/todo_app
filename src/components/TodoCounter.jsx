import React from 'react'
import styled from 'styled-components'
import { TodoContext } from '../TodoContext'
const InfoTitle = styled.h2`
    text-align: center;
    font-size: 2rem;
`

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext)

    return(
        <InfoTitle>Completed {completedTodos} of {totalTodos} TODOs</InfoTitle>
    )
}

export { TodoCounter }