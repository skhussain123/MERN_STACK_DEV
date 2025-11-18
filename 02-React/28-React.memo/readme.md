

## React.memo():
React.memo is a higher-order component in React that helps optimize performance by preventing unnecessary re-renders of a functional component. It’s like PureComponent for functional components.

### Here’s the key idea:
* React components re-render when their props or state change.
* Sometimes, a component doesn’t need to re-render if its props haven’t changed.
* React.memo wraps a functional component and tells React: “Only re-render me if my props actually change.”

![alt text](image1.PNG)


### Agr React Memo use nahi kry to ye issue ayega.

#### App.jsx
```bash
import { MemoCount } from "./Memo/MemoCount";
import { ReactMemo } from "./Memo/ReactMemo";

function App() {
  return (
    <>
      <ReactMemo />
    </>


  );
}

export default App;
```

#### ReactMemo
```bash
import { useState } from "react";
import { MemoCount } from "./MemoCount";

export function ReactMemo() {
    const [value, setCount] = useState(0);

    return (
        <>
            <p>Count: {value}</p>
            <button onClick={() => setCount(prev => prev + 1)}>
                Increment
            </button>

            <MemoCount />
        </>
    );
}
```

### MemoCount.jsx
```bash
import { useRef } from "react";

export function MemoCount() {
  const renderCount = useRef(0);

  renderCount.current++; // Increment on every render
  console.log("MemoCount Render:", renderCount.current);

  return (
    <>
      <p>MemoCount Rendered: {renderCount.current} times</p>
    </>
  );
}
```

#### issue
issue ye ha jab me increment button pr click kroga to MemoCount Component me iski value chnage hony lagy ge

```bash
<p>MemoCount Rendered: {renderCount.current} times</p>
```

### Agr hum chahty ha ReactMemo Component ke sath MemoCount Component Rerender na ho yo
```bash
import { memo, useRef } from "react";

function MemoCount() {  
    const renderCount = useRef(0);

    renderCount.current++;
    console.log("MemoCount Render:", renderCount.current);

    return <p>MemoCount Rendered: {renderCount.current} times</p>;
}

export default memo(MemoCount);
```
* memo ki wajy sy ab humara Clild Component unnecessary render nh hoga.


---

## useMemo Hook in React 19

![alt text](image2.PNG)

<br>

useMemo React ka ek hook hai jo expensive (mehngi) calculations ko memoize karta hai — yani ke result ko yaad rakh leta hai taake har render par dobara calculation na karni pade.

* useMemo ka matlab hota hai “memoized value use karna”.

React har render par function component ko dobara chalata hai. Agar component me koi heavy calculation, large array filtering, complex loops, ya expensive compute ho, to har render par woh calculation dobara chalti hai — jisse app slow ho sakti hai.

* useMemo is calculation ka result save kar leta hai.
*  Dobara tabhi calculate hota hai jab dependency change ho.

### UseMemo.jsx
```bash
import { useState } from "react";

const ExpensiveComponent = () => {
    // Expensive calculation function (synchronous, blocking)
    const sum = () => {
        console.log("Calculating sum...");
        const LIMIT = 100_000_000;
        let total = 0;
        for (let i = 0; i < LIMIT; i++) {
            total += i;
        }
        return total;
    };

    // calling directly (without useMemo)
    const total = sum();

    return <p> sum: {total} </p>;
};

const UseMemo = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white">
            <ExpensiveComponent />
            <button
                onClick={() => setCount((c) => c + 1)}
                className="py-3 px-6 bg-cyan-400 rounded-sm mt-4"
            >
                Re-render Parent
            </button>
            <p className="mt-2">Parent re-renders: {count}</p>
        </div>
    );
};

export default UseMemo;

```

* Agr hun Without UseMemo use krny ha ye code jab bhi hum increment button pr click krengy to. State Update hony ki wajy se
UseMemo ka Component rerender hoga. Sath he ExpensiveComponent ke rednder ho jayega. (halaky ExpensiveComponent render nhi hoga chahye tha)

### App.jsx
```bash
import UseMemo from "./Memo/UseMemo";

function App() {
  return (
    <>
      <UseMemo />
    </>
  );
}

export default App;
```

### Example With UseMemo
#### Method one 
* Ye ha ke ap memo use krle sirf ExpensiveComponent me. baki sub wasy he rehny de
```bash
const ExpensiveComponent = memo(() => {
    // Expensive calculation function (synchronous, blocking)
    const sum = () => {
        console.log("Calculating sum...");
        const LIMIT = 100_000_000;
        let total = 0;
        for (let i = 0; i < LIMIT; i++) {
            total += i;
        }
        return total;
    };

    // calling directly (without useMemo)
    const total = sum();

    return <p> sum: {total} </p>;
});
```

#### Method two
```bash
import { memo, useMemo, useState } from "react";

const ExpensiveComponent = () => {
    // Expensive calculation function (synchronous, blocking)
    const sum = () => {
        console.log("Calculating sum...");
        const LIMIT = 100_000_000;
        let total = 0;
        for (let i = 0; i < LIMIT; i++) {
            total += i;
        }
        return total;
    };

    const total = useMemo(() => sum(), []);

    return <p> sum: {total} </p>;
};

const UseMemo = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white">
            <ExpensiveComponent />
            <button
                onClick={() => setCount((c) => c + 1)}
                className="py-3 px-6 bg-cyan-400 rounded-sm mt-4"
            >
                Re-render Parent
            </button>
            <p className="mt-2">Parent re-renders: {count}</p>
        </div>
    );
};

export default UseMemo;
```



