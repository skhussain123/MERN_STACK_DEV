

## React.memo():
React.memo is a higher-order component in React that helps optimize performance by preventing unnecessary re-renders of a functional component. It’s like PureComponent for functional components.

### Here’s the key idea:
* React components re-render when their props or state change.
* Sometimes, a component doesn’t need to re-render if its props haven’t changed.
* React.memo wraps a functional component and tells React: “Only re-render me if my props actually change.”

![alt text](image1.PNG)


### Agr React Memo use nahi kry to ye issue ayega.

#### App.jsx
```javascript
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
```javascript
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
```javascript
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
```javascript
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

### UseMemo.jsx (use mamo function me value optimze krny ke liye use hota ha)
```javascript
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
```javascript
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
```javascript
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
```javascript
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

---

## React.memo vs useMemo
React.memo and useMemo dono “performance optimization” ke liye use hote hain, lekin dono ka purpose different hota hai. Neeche simple explanation + examples ke saath samjhaya.


### React.memo

#### Kis waqt use hota hai?
* Jab component ko unnecessary re-render se bachana ho.
* Agar parent re-render ho raha hai, lekin child ko milne wale props change nahi ho rahe, to React.memo child ko re-render hone se rok deta hai.

Agar Parent re-render ho, to normally Child bhi re-render hota hai. React.memo() child ko bolta hai:
“Agar props same hain, render mat kar!”

#### Example: React.memo
```javascript
import React, { useState, memo } from "react";

const Child = memo(({ count }) => {
  console.log("Child Rendered");
  return <h2>Child Count: {count}</h2>;
});

export default function App() {
  const [value, setValue] = useState(0);
  const [other, setOther] = useState(0);

  return (
    <>
      <h1>Main Counter: {value}</h1>
      <button onClick={() => setValue(value + 1)}>Increment Main</button>

      <button onClick={() => setOther(other + 1)}>Increment Other</button>

      <Child count={value} />
    </>
  );
}

```

#### Kya hoga?
* value change hoga → Child re-render hoga
* other change hoga → Child re-render nahi hoga
* Because its props (count) did not change.


### useMemo
#### Kis waqt use hota hai?
* Jab koi expensive calculation ho jo har render par chalna nahi chahiye.
* useMemo calculation ka result cache kar deta hai aur sirf tab run karta hai jab dependency change ho.

#### Example: useMemo
```javascript
import React, { useState, useMemo } from "react";

export default function App() {
  const [value, setValue] = useState(0);
  const [other, setOther] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
      total += i;
    }
    return total;
  }, [value]);

  return (
    <>
      <h1>Main: {value}</h1>
      <button onClick={() => setValue(value + 1)}>Increment Main</button>

      <button onClick={() => setOther(other + 1)}>Increment Other</button>
      <h2>Calculation: {expensiveCalculation}</h2>
    </>
  );
}

```

#### Short Difference Table
| Feature           | React.memo             | useMemo                                 |
| ----------------- | ---------------------- | --------------------------------------- |
| What it optimizes | Component re-render ko | Expensive function execution ko         |
| Works on          | Components             | Functions / Calculations                |
| When used         | Jab props change na ho | Jab heavy calculation repeat ho rahi ho |
| Output            | Pure component         | Computed value                          |


#### Easy Summary
* React.memo → Component ko unnecessary render se bachata hai
* seMemo → Calculation ko unnecessary dobara run hone se bachata hai


---

## useCallback Hook (kisi function ko optimize krny ke liye)
useCallback React ka ek hook hai jo function ko memoize karta hai, taake unnecessary function re-creation na ho.

#### Problem kya hoti hai?
Jab component re-render hota hai, to har render par naye functions create hote hain, chahe unka logic same hi ho.

#### Is se mushkil hoti hai:
* Child components ko har render par new function reference milta hai
* Agar child React.memo se optimized ho, to bhi vo re-render ho jata hai
* Performance slow ho sakti hai
* useCallback() function ka reference cache kar deta hai.


Function ko tab tak same rakhta hai jab tak dependencies change na hon.

### Example Without useCallback
##### App.jsx
```javascript
import { useState } from "react";
import Child from "./Child";

export default function App() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setOther(other + 1)}>Increase Other</button>

      <Child onClick={handleClick} />
    </>
  );
}

```
##### Child.jsx
```javascript
import { memo } from "react";

function Child({ onClick }) {
  console.log("Child Rendered");
  return <button onClick={onClick}>Child Button</button>;
}

export default memo(Child);
```

### Now Use useCallback
```javascript
import { useState, useCallback } from "react";
import Child from "./Child";

export default function App() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setOther(other + 1)}>Increase Other</button>

      <Child onClick={handleClick} />
    </>
  );
}

```
#### Ab kya hoga?

* handleClick function cache ho gaya
* Jab tak dependency array [] change nahi hoti:
  * Function same reference rahega
  * Child React.memo ki wajah se re-render nahin hoga

| Hook            | Purpose                             |
| --------------- | ----------------------------------- |
| `useCallback`   | Function ka reference memoize karna |
| Stops           | Function recreate hone se           |
| Works best with | `React.memo` child components       |
