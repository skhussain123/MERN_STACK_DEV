

 # Controlled Component

* What is the Controlled Component
* how to identify this is a controlled component
* Error if we dont use controlled value properly
* make From get input Fields Value
* Display Input Field Values


### 1. What is the Controlled Component
A Controlled Component is a form whose input field value is controlled by react state

#### here how it works:
* Store input field value in State
* use change handler with input field
* value attribute attached with State

#### Benefits
* Single source of truth
* validation and manipulation before submit
*Dynamic Value Updates

```bash
import { useState } from "react"

function App() {

  const [name, setName] = useState("hussain")
  const [email, setEmail] = useState("hussain123@gmail.com")
  const [password, setPassword] = useState("hussain1234")

  return (
    <>
      <div className="read-the-docs">

        <form action="">
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter Your Name" />
          <br />
          <br />
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter Your Email" />

          <br />
          <br />
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter Your password" />


          <p>{name}</p>
          <p>{email}</p>
          <p>{password}</p>

          <button onClick={() => {setName("");setEmail("");setPassword("")}} type="button">clear</button>
        </form>

      </div>
    </>
  )
}

export default App
```


# Handle CheckBox

* Make Checkbox
* Define state for checkbox
* Get checkbox value in State
* Remove Checkbox value in State

```bash
import { useState } from "react"

function App() {

  const [data, setData] = useState([])

  const handler = (event) => {
    console.log(event.target.value, event.target.checked);

    if(event.target.checked){
      setData([...data,event.target.value]);
    }
    else{
      setData([...data.filter((item)=>item!=event.target.value)])
    }
  }

  return (
    <>
      <div className="read-the-docs">

        <form action="">


          <input onChange={handler} type="checkbox" value="php" name="" id="php" />
          <label htmlFor="php">PHP</label>

          <br />

          <input onChange={handler} type="checkbox" value="java" name="" id="java" />
          <label htmlFor="java">Java</label>

          <br />

          <input onChange={handler} type="checkbox" value="css" name="" id="css" />
          <label htmlFor="css">Css</label>


          <p>{data}</p>



        </form>

      </div>
    </>
  )
}

export default App

```

# Handle Radio and Dropdown

* Make Radio button
* Get Radio button value in state
* Default selection of radio button
* Make Dropdown
* get dropdown value in state
* default selection in dropdown
* 
```bash
import { useState } from "react";

function App() {
  const [gender, setGender] = useState("Female");
  const [country, setCountry] = useState("Pakistan");

  return (
    <div>
      <h2>Handle Radio And Dropdown</h2>
      <h4>Select Gender {gender}</h4>

      <input
        type="radio"
        value="Male"
        onChange={(event) => setGender(event.target.value)}
        checked={gender === "Male"}
        name="gender"
        id="Male"
      />
      <label htmlFor="male">Male</label>

      <input
        type="radio"
        value="Female"
        onChange={(event) => setGender(event.target.value)}
        checked={gender === "Female"}
        name="gender"
        id="Female"
      />
      <label htmlFor="Female">Female</label>

      <br />
      <br />

      <h2>Select Country {country}</h2>

      <select name="" id="" onChange={(event) => { setCountry(event.target.value) }}>
        <option value="Pakistan">Pakistan</option>
        <option value="india">india</option>
        <option value="chaina">chaina</option>
      </select>



    </div>
  );
}

export default App;

```