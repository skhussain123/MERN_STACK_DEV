

### What Are Hooks in React?
Hooks are special functions in React that let you "hook into" React features without writing a class.
They were introduced in React 16.8 and allow you to use state, lifecycle methods, side effects, and more in functional components.


### Why Hooks?

#### Before hooks:
* You had to use class components to manage state and lifecycle (like componentDidMount, etc.)
* Functional components were just for UI, no logic.

#### After hooks:
* Functional components can do everything class components can do — and more — with cleaner syntax.


### Commonly Used Hooks
| Hook          | Purpose                                                             |
| ------------- | ------------------------------------------------------------------- |
| `useState`    | Adds **state** to functional components                             |
| `useEffect`   | Runs **side effects** (like API calls, subscriptions, timers, etc.) |
| `useContext`  | Uses **context API** to share state globally                        |
| `useRef`      | Access **DOM elements** or keep mutable values                      |
| `useReducer`  | More advanced alternative to `useState` for complex logic           |
| `useMemo`     | **Memoizes** expensive calculations                                 |
| `useCallback` | Memoizes functions (helps prevent unnecessary renders)              |


## 1. useEffect

* Remove side effect inside component
* Remove side effect from inside component
* use to fetch data API calls
* can we use to life cycle methods
* DOM manipulation
* Logging
* Event listeners
* Much More

* jab bhi hum eik component create krty hain to Sate ki wasy se kuch side effect aty hain.humary component ke under
unko hum useEffect se handdle krty hain.

```bash

# is Code me issue ye hain jab me me counter button pr click kroga to callonces function bhi button click pr bar bar
# call hota jaeyga. jab bhi humari state update hogi to humara component bhi rerender hoga.jiss wajy se function 
# bar bar call ho raha ha

import { useState } from "react"
function App() {

  const [data, setData] = useState(0)

  function callonces() {
    console.log("Call function calling")
  }
  callonces()
  return (
    <div>
      <h4>UseEffect</h4>
      <button onClick={() => { setData(1) }}  >Counter {data}</button>
      <p>app component</p>
    </div>
  )
}

export default App
```

### (Every Time Calls)
```bash
import { useEffect, useState } from "react"
function App() {

  const [everyone, setEveryone] = useState(0)
 
  // 1. har Click pr function run hoga
  function EveryOnecallonces() {
    console.log("Call function calling")
  }
  useEffect(() => {
    EveryOnecallonces()
  },)

  return (
    <div>
      <h4>UseEffect</h4>

      {/* 1.  is Button Click pr EveryOnecallonces Funciton har call pr call hoga.har call pr component rerender hoga*/}
      <button onClick={() => { setEveryone(everyone + 1) }}  >Every One {everyone}</button>

      <br />
    </div>
  )
}
export default App
```

### (Only One Time Calls)
```bash
import { useEffect, useState } from "react"
function App() {

  const [everyone, setEveryone] = useState(0)
 
  // 2. har Click pr function sirf eik bar run hoga
  function OnlyOnecallonces() {
    console.log("Call function calling")
  }
  useEffect(() => {
    OnlyOnecallonces()
  },[])

  return (
    <div>
      <h4>UseEffect</h4>

      {/* 2.  is Button Click pr OnlyOnecallonces Funciton one time run hoga*/}
      <button onClick={() => { setEveryone(everyone + 1) }}  >Every One {everyone}</button>

      <br />
    </div>
  )
}

export default App
```

### (call one changing single state)
```bash
import { useEffect, useState } from "react"
function App() {

  const [everyone, setEveryone] = useState(0)

  // 3. har Click pr function multiple times run hoga everyone State ke liye
  function OnlyOnecallonces() {
    console.log("Call function calling")
  }
  useEffect(() => {
    OnlyOnecallonces()
  }, [everyone])

  return (
    <div>
      <h4>UseEffect</h4>

      {/* 3.  is Button Click pr OnlyOnecallonces Funciton multiple times run hoga everyone State ke liye */}
      <button onClick={() => { setEveryone(everyone + 1) }}  >Every One {everyone}</button>

      <br />
    </div>
  )
}
export default App
```

### (call on changing both state)
```bash
import { useEffect, useState } from "react"
function App() {

  const [data1, setdata1] = useState(0)

  const [data2, setdata2] = useState(0)

  // 4. har Click pr function multiple time run hoga
  function OnlyOnecallonces() {
    console.log("Call function calling")
  }
  useEffect(() => {
    OnlyOnecallonces()
  }, [data1,data2])

  return (
    <div>
      <h4>UseEffect</h4>

      {/* 4.  is Button Click pr OnlyOnecallonces Funciton multiple time run hoga*/}
      <button onClick={() => { setdata1(data1 + 1) }}  >Data One {data1}</button>

      {/* 4.  is Button Click pr OnlyOnecallonces Funciton multiple time run hoga*/}
      <button onClick={() => { setdata2(data2 + 1) }}  >Every One {data2}</button>

      <br />
    </div>
  )
}
export default App
```

### call on change props
#### App.jsx
```bash
import { useEffect, useState } from "react"
import Counter from "./Component/Counter"
function App() {

  const [count, Setcount] = useState(0)

  return (
    <div>
      <Counter data={count} />
      <button onClick={() => { Setcount(count + 1) }}>Click{count}</button>

    </div>
  )
}
export default App
```


#### Counter.jsx
```bash
import { useEffect, useState } from "react"

function Counter({ data }) {

    function calling() {
        console.log('function is calling')
    }

    useEffect(() => {
        calling()
    }, [data])

    return (
        <div>
            Counter Component
        </div>
    )
}

export default Counter
```

### Handle useEffect with different Conditions
```bash
useEffect(() => {

    // call every time

  })


  useEffect(() => {

    // call only onece

  }, [])


  useEffect(() => {

    // call one changing single state

  }, [state])


  useEffect(() => {

    // call on changing both state

  }, [state1, state2])


  useEffect(() => {

    // call on change props

  }, [props1, props2])
  ```