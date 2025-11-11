
* Make Input Field
* Default State
* Get input Field Value in State
* Display Value
* Clear Input Field Value

```bash
import { useState } from "react"

function App() {

  const[data , setvalue] = useState("hussain")

  return (
    <>
      <div className="read-the-docs">

        <form action="">
          <input type="text" onChange={(event)=>setvalue(event.target.value)} placeholder="Enter Your Name" />
          <br/>
           <br/>
           <p>{data}</p>
          <button onClick={()=>setvalue("")}  type="button">clear</button>
        </form>

      </div>
    </>
  )
}

export default App
```