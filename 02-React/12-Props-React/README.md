

* What is props
* make Component 
* pass data between parent to Chlid component 
* Receive and display data
* Pass data in component with Click

### What Are Props in React?
Props (short for "properties") are read-only inputs passed from one component (usually a parent) to another (usually a child). They are used to customize and reuse components with different data.

* Props = Arguments passed to components
* jab bhi humy react me eik component sy dusry component me data transfer krna hoto hum props ka use krty hain

---

## 1. Send Data One Component to another Component
#### App Component
```javascript
import User from "./User"

function App() {

  let name = "hussain";
  let email = "hussain123@gmail.com"
  let age = 21;

  return (
    <>
      <p className="read-the-docs">
            <User name={name} age={age} email={email}  />
      </p>
    </>
  )
}

export default App
```

#### User Component
```javascript
function User(props) {
  return (
    <div>
    <h5>User Component</h5>  
    <br />

    {props.name}<br />
    {props.age}<br />
    {props.email}<br />
    </div>
  );
}

export default User;
```

---

## 2. Send Object , Array
```javascript
import { useState } from "react";
import College from "./Component/College";
import User from "./User"

function App() {

  let Userobejct1 = {
    name: 'Hussain',
    email: 'hussain123@gmail.com',
    age: 22
  };

  let Userobejct2 = {
    name: 'ali',
    email: 'ali123@gmail.com',
    age: 20
  };

  let userarray = ['hussain', 'ali', 'zain', 'umair']

  return (
    <>
      <div className="read-the-docs">

        <User user={Userobejct1} />
        <User user={Userobejct2} />
        <College userArray={userarray} />
      </div>
    </>
  )
}

export default App
```

#### User Component 
```javascript
function User({ user}) {

  return (
    <div>
      <h5>User Component</h5>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>


      <hr />
    </div>
  );
}

export default User;
```

#### College Component
```javascript

function College(user) {
    return (

        <div>
             <p>Second user: {user.userArray[1]}</p> 
        </div>
    )
}

export default College
```

---

## 3. When Button Click then Pass data to Component
### App Component
```javascript
import { useState } from "react";
import Student from "./Component/Student";

function App() {


  const [student, setStudent] = useState('Hussain')


  return (
    <>
      <div className="read-the-docs">

        <button type="button" onClick={() => setStudent('Hussain khan')}>update name</button>
        <Student name={student} />
      </div>
    </>
  )
}

export default App
```

#### Student Component
```javascript
function Student(props) {

    return (
        <div>
            <h5>Student Component</h5>
            {props.name}
        </div>
    )
}

export default Student
```

---

## 4. Data Destructuring With Props
```javascript
import React from 'react'
import Student from "./Student"

function App() {

  let studentData = {
    name: "John Doe",
    age: 20,
    course: "Computer Science"
  }

  let Role = "hussain"

  return (
    <>
      <div className="read-the-docs">
        <Student student={studentData} cname={Role} />
      </div>
    </>
  )
}

export default App
```

#### Student.jsx
```javascript
import React from 'react'

function Student(props) {
  const { student, cname } = props  // destructuring for clarity

  return (
    <>
      <div>
        <h2>Name: {student.name}</h2>
        <p>Age: {student.age}</p>
        <p>Course: {student.course}</p>
        <p>Role: {cname}</p>
      </div>
    </>
  )
}

export default Student
```

---

## 5. Children Props
```javascript
import React from 'react'
import Student from "./Student"

function App() {

  let studentData = {
    name: "John Doe",
    age: 20,
    course: "Computer Science"
  }

  let Role = "hussain"

  return (
    <>
      <div className="read-the-docs">
        <Student role={Role}>
          <h2>Hello Muhammad Hussain</h2>
          <p>This is inside the Card component.</p>
          <p>Role: {Role}</p>
          <p>Student Name: {studentData.name}</p>
          <p>Student Age: {studentData.age}</p>
          <p>Student Course: {studentData.course}</p>
        </Student>
      </div>
    </>
  )
}

export default App
```

#### Student.jsx
```javascript
import React from 'react'

function Student(props) {
    return (
        <>
            <div className="card p-3 shadow">
                {props.children}
                <p>From Student Component : {props.role}</p>

            </div>
        </>
    )
}

export default Student
```
---

## More About Props

* Defaulf props
* pass jsx with props
* chnage style with props 


## 6. Default Value 
### App Component
```javascript
import User from "./User"

function App() {

  return (
    <>
      <div className="read-the-docs">
        <User name="hussain"/>
        <User/>

      </div>
    </>
  )
}

export default App
```

### User Component
```javascript
function User({ name}) {

  return (
    <div>
      <p>{ name}</p>
      <hr />
    </div>
  );
}

export default User;
```
---

## 7. pass jsx with props
### App Component

```javascript
import Wrapper from "./Component/Wrapper"
function App() {

  return (
    <>
      <div className="read-the-docs">
        <Wrapper>
          <p>Helo Everyone</p>
        </Wrapper>


        {/* chnage style with props  */}

        <Wrapper color="red">
          <p>Helo Everyone</p>
        </Wrapper>

      </div>
    </>
  )
}

export default App
```

### Wrapper Component
```javascript
function Wrapper({children,color='orange'}) {
    return (
        <div style={{ color: color, border: "5px solid black" }}>
            {children}
        </div>
    );
}

export default Wrapper;
```


---

## Data Show with Props in Map
```javascript
import React from 'react'
import { blog } from "./Data/blog";

function App() {

  return (
    <>
      <div className="container">
        <div className="row">

          {blog.map((v, i) => {
            return (
              
              // key id add purpose taky loop me chalny wala har component unique ho (react ki requirement hai
              <CustomCard pitem={v} key={i}/> 
            )

          })}

        </div>
      </div>
    </>
  )
}


function CustomCard({ pitem }) {
  return (
    <>
      <div className="col-md-3 col-lg-3 col-sm-12 my-3">
        <div className="card p-3 shadow">
          <h4>{pitem.userId}</h4>
          <h5>{pitem.title}</h5>
          <p>{pitem.body}</p>
        </div>
      </div>
    </>
  )
}

export default App
```

#### 
src/Data/blog.jsx
```javascript
export const blog = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
]
```




