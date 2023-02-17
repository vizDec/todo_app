import styled from "styled-components"

const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.5rem 0;
    padding: .5rem 2rem;
    
    font-size: 1.5rem;

    background-color: #ccc;
    border-radius: 0.8rem;
`

const IconCheck = styled.span`
    color: ${props => props.completed ? '#4caf50' : 'black'};
`

const Task = styled.p`
    text-decoration: ${props => props.completed ? 'line-through' : 'none'};
`

function TodoItem(props) {
    return (
        <Item>
            <IconCheck 
                completed={ props.completed }
                onClick={ props.onComplete }
            >√</IconCheck>
            <Task completed={props.completed}>{props.text}</Task>
            <span
                onClick={ props.onDelete }
            >X</span>
        </Item>
    )
}

export { TodoItem }