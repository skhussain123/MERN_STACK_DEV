
* What is life cycle in React Component
* Phase of Life Cycle
* how to use useEffect to handdle life cycle



### Main Lifecycle Phases:
| Phase          | Description                                               |
| -------------- | --------------------------------------------------------- |
| **Mounting**   | Component is **created** and **inserted** into the DOM    |
| **Updating**   | Component is **re-rendered** (due to props/state changes) |
| **Unmounting** | Component is **removed** from the DOM                     |


### Life Cycle in React
```bash
useEffect(() => {
    //  this code will run for mount
  }, [])

  useEffect(() => {
    //  this code will run on State and props Update
  }, [state, props])


  useEffect(() => {
    return(()=>{
      //  this code will run for unmount
    })
  }, [])


   useEffect(() => {
    //  this code will run on every life cycle Event
  })
  ```


### Project Example 
#### App
```bash
import { useEffect, useState } from "react"
import Counter from "./Component/Counter"
function App() {

  const [count, Setcount] = useState(0)
  const [display, Setdisplay] = useState(false)


  return (
    <div>
      {display ? <Counter data={count} /> : null}

      <br />
      <br />
      <button onClick={() => { Setcount(count + 1) }}>Counter{count}</button>
      <br />
      <br />

      <button onClick={() => { Setdisplay(!display) }}>Hide / Show</button>

    </div>
  )
}
export default App
```

#### Counter.jsx
```bash
import { useEffect, useState } from "react"

function Counter({ data }) {

    useEffect(() => {
        //  this code will run for mount
        console.log('Mount phase in runing')
    }, [])


    useEffect(() => {
        //  this code will run on State and props Update
        console.log('Update Phase only')
    }, [data])


    useEffect(() => {
        return () => {
            // this code will run for unmount
            console.log("use unmounting is runing")
        }
    }, [])


    return (
        <div>
            Counter Component
        </div>
    )
}
export default Counter
```