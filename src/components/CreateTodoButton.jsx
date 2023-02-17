import styled from "styled-components"

const AddButton = styled.button`
    position: fixed;
    right: 2rem;
    bottom: 3rem;
    padding: 1rem 2rem;
    
    border-radius: 50%;
    border: none;
    font-size: 3rem;
    z-index: 1;

`

function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState)
    }


    return(
        <AddButton
            onClick={ onClickButton }
        >+</AddButton>
    )
}

export { CreateTodoButton }