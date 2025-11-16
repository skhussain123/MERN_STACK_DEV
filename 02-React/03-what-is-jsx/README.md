

### What is JSX in React?
JSX (JavaScript XML) is a syntax extension for JavaScript commonly used in React to describe the structure of user interfaces. It allows you to write HTML-like code within JavaScript, making it easier to create and visualize React components.
* JSX = JavaScript + XML-like tags
It makes writing UI components easier and more readable.


![alt text](image1.PNG)


**You can work with different files in React**
1. jSX File (javascript + XML)
2. jS File
3. TS File
4. TSX


#### JSX:
```bash
const element = <h1>Hello World</h1>;
```

#### JSX Code Example in React Component:
```bash
function Welcome() {
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <p>This is JSX code!</p>
    </div>
  );
}

```

## React Working Without Jsx
React can work without JSX, because JSX is just syntactic sugar over React.createElement() function.

```bash
import React from 'react';
import ReactDOM from 'react-dom/client';

const element = React.createElement(
  'div',
  null,
  React.createElement('h1', null, 'Hello from React without JSX'),
  React.createElement('p', null, 'This is a paragraph.')
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
```
#### Downsides of Not Using JSX:

| Issue                      | Description                    |
| -------------------------- | ------------------------------ |
| ❌ Less readable            | Nested code becomes ugly       |
| ❌ Hard to manage large UIs | JSX is cleaner with components |
| ❌ Limited community use    | Almost everyone uses JSX       |


