// Todolist/TodoList.jsx
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function TodoList({ id, data, onDeleteTodo, checked, onHandleCheckTodo }) {
  return (
    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span className={checked ? 'checkList' : ''} style={{ flexGrow: 1 }}>
        {data}
      </span>

      <button type="button" onClick={() => onHandleCheckTodo(id)} aria-label="toggle">
        <FaCheckCircle />
      </button>

      <button type="button" onClick={() => onDeleteTodo(id)} aria-label="delete">
        <MdDeleteForever />
      </button>
    </li>
  );
}

export default TodoList;
