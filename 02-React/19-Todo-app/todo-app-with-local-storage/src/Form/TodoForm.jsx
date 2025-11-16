// Form/TodoForm.jsx
import { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const content = inputValue.trim();
        if (!content) return;

        const newTodo = {
            id: Date.now().toString(), // string id; or use crypto.randomUUID()
            content,
            checked: false
        };

        onAddTodo(newTodo);
        setInputValue('');
    }

    return (
        <section>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    placeholder="Enter todo item"
                    value={inputValue}
                    onChange={handleChange}
                />
                <button type="submit">Add Todo</button>
            </form>
        </section>
    );
}

export default TodoForm;
