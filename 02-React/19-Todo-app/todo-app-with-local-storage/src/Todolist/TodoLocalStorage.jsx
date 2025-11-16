// Todolist/TodoLocalStorage.jsx
const todokeys = "reactTodo";

export const getLocalStorageTodoData = () => {
  try {
    const raw = localStorage.getItem(todokeys);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error("Failed to read todos from localStorage:", e);
    return [];
  }
}

export const setLocalStorageTodoData = (tasks) => {
  try {
    localStorage.setItem(todokeys, JSON.stringify(tasks));
  } catch (e) {
    console.error("Failed to save todos to localStorage:", e);
  }
}
