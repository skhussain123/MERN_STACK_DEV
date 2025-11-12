

## What is State Management?
* State management means how you store, update, and share data (state) in your application so your UI stays in sync with that data.
* "State management" is all about keeping track of what’s happening inside your app — and making sure your UI updates automatically when that data changes.
* agr ap button click pr ya kisi or event tigger pr data change krty ha or ussy component me(fronend pr) dekhana chahty hato state Management ka use krty ha.

---

* State eik inmutable process ha jisy State ko change nhi kr sakty. 
* State ko Change krny ka kam State ka function kryga --> jasy setCount
* State is a hooks ho component ko re render krke dynamically data component me dekhata ha
```bash
const [count, setCount] = useState(0);
```


#### Reactivity:
When you update state using setState or setX from useState, React re-renders the component, keeping the UI in sync with the current data.

#### Local Component Data:
State is used for data that only a specific component needs, like whether a dropdown is open or which tab is selected.

#### Avoid Direct DOM Manipulation:
React prefers declarative UI logic. Rather than using DOM methods to manually update elements, you update the state, and React handles rendering.


### 1. What is State in React
State in React is a built-in object that stores dynamic data in a component. It determines how that component behaves and how it renders. When the state changes, React automatically re-renders the component to reflect the new data.

* State is a Container to store data like variable. 
* this is mutable and dynamic.
* when have to import it when we want to use it.
* it re,render component automatically so that data can visible on ui

State ko hum hooks ki help se use kr sakty hain. hooks wo hoty hain jo use sy start hoty hain jasy.
```bash
import { useState, useEffect,useContext } from "react";
```

### Simple State Concept
```bash
import { useState } from "react"

function Profile() {
    const [fruit,setfruit] = useState('mango')

    const handler=()=>{
        setfruit('banana')
    }
    return (
        <div>
            <p>{fruit}</p>
            <button onClick={handler}>set data</button>
        </div>
    )
}

export default Profile
```

### Second Example
```bash
import { useState } from "react";

function Profile() {

    const [count, setcount] = useState(0)
    const handdler = () => {
        setcount(count + 1)
    }

    const decrement = () => {
        setcount(count - 1)
    }
    return (

        <div>
            <p>{count}</p>
            <button onClick={handdler}>increment</button>
            <button onClick={decrement}>Drecement</button>
        </div>
    )
}

export default Profile
```

---

## How React State Works











