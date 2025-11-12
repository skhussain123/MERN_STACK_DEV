


![alt text](image2.PNG)

### 1. Default Export / Import
* Used when a file exports only one thing (the “main” export).

**MyComponent.js**
```bash
export default function MyComponent() {
  return <h1>Hello from MyComponent!</h1>;
}
```
**App.js**
```bash
import MyComponent from './MyComponent';

function App() {
  return <MyComponent />;
}
```

### 2. Named Export / Import
Used when a file exports multiple things.

**utils.js**
```bash
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```
**App.js**
```bash
import { add, subtract } from './utils';

console.log(add(2, 3));      // 5
console.log(subtract(5, 2)); // 3
```

### 3. Mixing Default and Named Exports
You can export both from the same file.

```bash
export default function multiply(a, b) {
  return a * b;
}

export const PI = 3.14159;
```

**App.js**
```bash
import multiply, { PI } from './math';

console.log(multiply(2, 3)); // 6
console.log(PI);             // 3.14159
```

