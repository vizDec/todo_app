import styled from "styled-components"

const List = styled.ul`
    width: 90vw;
    list-style: none;
    margin: 0;
    padding: 0;
`

function TodoList(props) {
    return(
        <section>
            <List>
                {props.children}
            </List>
        </section>
    )
}

export { TodoList }