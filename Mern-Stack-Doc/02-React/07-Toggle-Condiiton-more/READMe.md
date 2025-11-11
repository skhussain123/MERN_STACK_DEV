### 1. Third Example Element Show Hide
```bash
import { useState } from "react";

function Profile() {

    const [display, setdisplay] = useState(true)
    const handdler = () => {
        setdisplay(!display)
    }

    return (
        <div>
            {display && <p>Muhammad Hussain</p>}

            <button onClick={handdler}>Toogle</button>
        </div>
    )
}

export default Profile
```

### 2. fouth Example Component Show Hide
```bash
import { useState } from "react";
import User from "./User";

function Profile() {

    const [display, setdisplay] = useState(true)
    const handdler = () => {
        setdisplay(!display)
    }

    return (
        <div>
            {display && <User />}
            <button onClick={handdler}>Toogle</button>

        </div>
    )
}

export default Profile
```

### 3. Multiple Condition in React
```bash
import { useState } from "react";

function Profile() {

    const [count,setcount] = useState(0)
    const handdler = ()=>{
        setcount(count + 1 )
    }

    return (
        <div>
            <p>{count}</p>

          <p>{count === 0 ? `value is ${count}`:
           count === 1 ? `value is ${count}`: 
           count === 2 ? `value is ${count}`:
           count === 3 ? `value is ${count}`:
           count === 4 ? `value is ${count}`:
           count === 5 ? `value is ${count}`:
           count === 6 ? `value is ${count}`:
           count  
           
           }
           
           </p>
            <button onClick={handdler}>count</button>
        </div>
    )
}

export default Profile
```
