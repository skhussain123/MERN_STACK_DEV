

## 1. Show and Hide Password
```bash
import React from 'react'
import { useState } from 'react'

function App() {
  const [data, setData] = useState(false)
  return (
    <>
      <input type={data ? "text" : "password"} />
      <button onClick={() => setData(!data)}>{data ? 'Hide' : 'Show'}</button>
    </>
  )
}
export default App
```
---

## 2. Responsive Menu
#### main.css
```bash

.menu{
    text-align: left;
    width: 80%;
    position: fixed;
    height: 100vh;
    left: -100%;
    background-color: chartreuse;
}

.menu ul li{
    list-style: none;
    padding: 0;
}

.mainicon{
    position: absolute;
    right: 10px;
}

.ActiveClass{
    left: 0;
    transition: all 0.5s ease-in-out;
}
```

#### app.jsx
```bash
import React from 'react'
import { useState } from 'react'
import './main.css'


function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>

    <button className='mainicon' onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <span>&times;</span> : <span>&#9776;</span>}
    </button>
    <div className={`menu ${isOpen ? 'ActiveClass' : ''}`}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
        <li>Services</li>
      </ul>
    </div>
    
    </>
  )
}
export default App
```
---

## 3. Create Modal
#### App.jsx
```bash
import React from 'react'
import { useState } from 'react'
import './main.css'


function App() {
  const [modalStatus, setModalStatus] = useState(false)

  return (
    <>

    <button className='en' onClick={() => setModalStatus(!modalStatus)}>Equire now</button>

    <div className={`modalOverLay ${modalStatus ? 'modalShow' : ''}`}></div>
    <div className={`ModalDiv ${modalStatus ? 'ShowModalDiv' : ''}`}>
      <h4>Modal Content</h4>
      <button className='close' onClick={() => setModalStatus(false)}>X</button>
    </div>
    
    </>
  )
}
export default App
```

#### main.css
```bash

.modalOverLay{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgb(0, 0, 0, 0.5);
    display: none;
}

.modalShow{
    display: block;
}


.ModalDiv{
    width: 320px;
    height: 320px;
    position: fixed;
    left: 50%;
    top: -500%;
    background-color: white;
    transform: translate(-50%, -50%);
    transition: top 0.3s;
    padding: 10px;
}

.ShowModalDiv{
    top: 50%!important;
}

.en{
    position: fixed;
    right: -30px;
    top: 100px;
    transform: rotate(90deg);
}
```

---



