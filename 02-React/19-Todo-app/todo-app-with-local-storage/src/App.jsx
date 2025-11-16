import './App.css'
import { useState } from 'react';
import TodoForm from './Form/TodoForm';
import TodoList from './Todolist/TodoList';
import TodoDate from './Tododate/TodoDate';

function App() {

  const todokeys = "reactTodo";

  const getLocalStorageTodoData = () => {
    const rawTodos = localStorage.getItem(todokeys);
    if (!rawTodos) return [];
    return JSON.parse(rawTodos);
  }

  const [tasks, setTasks] = useState(() => getLocalStorageTodoData());

  localStorage.setItem(todokeys, JSON.stringify(tasks));

  function handleFormSubmit(InputValue) {
    const { id, content, checked } = InputValue;
    if (!content) return;
    const ifContentExists = tasks.find((task) => task.content === content);
    if (ifContentExists) return;
    setTasks((pre) => [...pre, { id, content, checked }]);
  }

  const handleDeleteTodo = (value) => {
    const newTasks = tasks.filter((task) => task.content !== value);
    setTasks(newTasks);
  }

  function handleClearAll() {
    setTasks([]);
  }

  const handleChecktodo = (content) => {
    const UpdatedTasks = tasks.map((curtask) =>
      curtask.content === content
        ? { ...curtask, checked: !curtask.checked }
        : curtask
    );
    setTasks(UpdatedTasks);
  }

  return (
    <div className="app-wrapper">
      <div className="app">
        <section>
          <h1 className="text-3xl font-bold underline">Todo App!</h1>
        </section>

        <TodoDate />
        <TodoForm onAddTodo={handleFormSubmit} />

        <section>
          <ul>
            {tasks.map((curtask) => (
              <TodoList
                key={curtask.id}
                data={curtask.content}
                checked={curtask.checked}
                onDeleteTodo={handleDeleteTodo}
                onHandleCheckTodo={handleChecktodo}
              />
            ))}
          </ul>
        </section>

        <section>
          <button type="button" onClick={handleClearAll}>
            Clear All
          </button>
        </section>
      </div>
    </div>
  );
}

export default App;
