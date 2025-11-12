

## React Fragment
A React Fragment is a special type of component in React that lets you group multiple elements without adding an extra DOM node.

![alt text](image4.PNG)


#### Normally, React components must return a single parent element.
* For example, this will cause an error:

```bash
function App() {
  return (
    <h1>Hello</h1>
    <p>World</p>
  );
}
```
* React requires one root element, so you might be tempted to wrap them in a <div>:

```bash
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>World</p>
    </div>
  );
}
```
* But this adds an unnecessary <div> to the DOM, which can mess up layouts or CSS.

### Solution: React Fragment
```bash
function App() {
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <p>World</p>
    </React.Fragment>
  );
}
```

* React also provides a shorthand version using empty angle brackets:
```bash
function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>World</p>
    </>
  );
}
```

```bash
const items = ['Apple', 'Banana', 'Cherry'];

function List() {
  return (
    <>
      {items.map(item => (
        <React.Fragment key={item}>
          <dt>{item}</dt>
          <dd>{item} is tasty!</dd>
        </React.Fragment>
      ))}
    </>
  );
}
```

