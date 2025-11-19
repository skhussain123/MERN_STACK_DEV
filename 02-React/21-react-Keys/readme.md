

## Why Keys Are Important in React JS

In React, keys are special string attributes used to identify list items uniquely.

When React renders a list (like items in a <ul> or rows in a table), it needs a way to keep track of which items changed, added, or removed between renders.

Keys help React efficiently update the UI by reusing DOM elements instead of re-rendering the entire list.

```javascript
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li>{todo.text}</li> // ❌ No key used
      ))}
    </ul>
  );
}
```
Here, React has no way to tell which <li> corresponds to which todo.
If you add, remove, or reorder items, React might mix up DOM nodes, causing bugs.

### ✅ Example With Keys
```javascript
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
```
Here, each list item has a unique key (todo.id), so React can:

* Track each item individually,
* Update only the changed items,
* Keep smooth UI transitions (like animations, focus, etc.).


| Problem                         | Cause                                 | Example                | Solution                                 |
| ------------------------------- | ------------------------------------- | ---------------------- | ---------------------------------------- |
| **Unexpected Re-rendering**     | Using non-unique or index-based keys  | `key={index}`          | Use a stable ID instead                  |
| **Wrong Item Updated**          | React reuses DOM nodes incorrectly    | Two items swap places  | Use a unique key (like `id` or UUID)     |
| **Animations Glitch / Flicker** | DOM elements not tracked properly     | CSS transitions break  | Assign persistent unique keys            |
| **State Loss**                  | Component’s internal state gets reset | Input value disappears | Keys help React preserve component state |
