import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function TodoList({data, onDeleteTodo,checked, onHandleCheckTodo }) {
  return (
    <li style={{ display: 'flex' }}>
      <span className={checked ? 'checkList' : ''} style={{ flexGrow: 1 }}>{data}</span>
      <button type="button" onClick={() => onHandleCheckTodo(data)}><FaCheckCircle /></button>
      <button type="button" onClick={() => onDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
}

export default TodoList;