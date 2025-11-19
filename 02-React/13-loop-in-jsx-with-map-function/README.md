
* What is the Array
* Make Array
* Make tabel in jsx
* use map function for looping

```javascript
import { useState } from "react";

function App() {

  const userdetails = [
    {
      "name": "hussain",
      "age": 21,
      "email": "hussain123@gmail.com"
    },
    {
      "name": "yasir",
      "age": 23,
      "email": "yasir123@gmail.com"
    },
    {
      "name": "zain",
      "age": 19,
      "email": "zain123@gmail.com"
    },
    {
      "name": "huzesshanssain",
      "age": 25,
      "email": "zesshan123@gmail.com"
    },

  ]

  return (
    <div>
      <h2>jsx loops</h2>

      <table className="tabel" border={"1"}>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {
            userdetails.map((user) => {
              return (
                <tr key={user.email}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })

          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
```

## Resuse Component With Jsx Looping
```javascript
import { useState } from "react";
import User from "./User";

function App() {

  const userdetails = [
    {
      "name": "hussain",
      "age": 21,
      "email": "hussain123@gmail.com"
    },
    {
      "name": "yasir",
      "age": 23,
      "email": "yasir123@gmail.com"
    },
    {
      "name": "zain",
      "age": 19,
      "email": "zain123@gmail.com"
    },
    {
      "name": "huzesshanssain",
      "age": 25,
      "email": "zesshan123@gmail.com"
    },

  ]

  return (
    <div>

      <table border={"1"}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>

          {
            userdetails.map((user) => {
              return (
                <tr key={user.email}>
                  <User data={user} />

                </tr>

              );
            })

          }

        </tbody>
      </table>

    </div>
  );
}

export default App;
```
#### User Component
```javascript
function User({ data }) {

  return (

    <>
      <td>{data.name}</td>
      <td>{data.age}</td>
      <td>{data.email}</td>

    </>

  );
}

export default User;

```

## Clock Project
```javascript
import { useState } from "react";
import Clock from "./Component/Clock";

function App() {
  const [Scolor, setColor] = useState("red");

  return (
    <div>
      <Clock color={Scolor} />

      <select onChange={(e) => setColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
      </select>

    </div>
  );
}

export default App;
```

#### Clock,jsx
```javascript
import { useState, useEffect } from "react";

function Clock({ color }) {
    const [time, setTime] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());

        }, 1000);
    })

    return (

        <div>
            <p style={{ color }}>{time}</p>
        </div>
    )
}

export default Clock
```



