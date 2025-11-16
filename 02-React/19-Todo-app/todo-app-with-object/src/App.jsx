import './App.css'
import { useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import TodoForm from './Form/TodoForm';
import TodoList from './Todolist/TodoList';
import TodoDate from './Tododate/TodoDate';

function App() {

  const [tasks, setTasks] = useState([]);

  function handleFormSubmit(InputValue) {

    const { id, content, checked } = InputValue;

    if (!content) return;

    const ifContentExists = tasks.find((task) => task.content === content);
    if (ifContentExists) return;


    setTasks((pre) => [...pre, { id: id, content: content, checked: checked }]);

  }

  const handleDeleteTodo = (value) => {
    const newTasks = tasks.filter((task) => task.content !== value);
    setTasks(newTasks);
  }

  function handleClearAll() {
    setTasks([]);
  }

  const handleChecktodo = (content) => {
    const UpdatedTasks = tasks.map((curtask) => {
      if (curtask.content === content) {
        return { ...curtask, checked: !curtask.checked };
      }
      else {

        return curtask;
      }
    });
    setTasks(UpdatedTasks);
  }

  return (
    <>
      <section>
        <h1 className="text-3xl font-bold underline">
          Todo app!
        </h1>
      </section>

      <TodoDate />
      <TodoForm onAddTodo={handleFormSubmit} />

      <section>
        <ul>
          {tasks.map((curtask, index) => (
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
        <button type="button" onClick={handleClearAll}>Clear All</button>
      </section>

    </>
  )
}

export default App
