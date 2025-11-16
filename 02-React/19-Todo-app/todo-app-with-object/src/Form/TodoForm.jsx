import { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
    const [InputValue, SetinputValue] = useState({});

    function handleChange(value) {
        SetinputValue({id:value, content:value, checked:false});
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(InputValue);
        SetinputValue("");
    }


    return (
        <>
            <section>
                <form onSubmit={handleFormSubmit}>
                    <input type="text" placeholder="Enter todo item" value={InputValue.content} onChange={(event) => handleChange(event.target.value)} />
                    <button type="submit">Add Todo</button>
                </form>

            </section>
        </>
    )
}

export default TodoForm;