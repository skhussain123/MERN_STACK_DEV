
## Accordion in React 19

#### App.jsx
```javascript
import Accordion from "./component/Accordion"

const App = () => {
  return <Accordion/>
}

export default App
```

#### component/Accordion.jsx
```javascript
import { useEffect, useState } from 'react';
import '../App.css';
import faq from '../api/faq.json'
import FAQ from './FAQ';



const Accordion = () => {

    const [data, setData] = useState([]);
    const [activeId, setActiveId] = useState(false); // Track active FAQ by ID

    useEffect(() => {
        setData(faq);
    }, []);

    console.log(data);


    const handleToggle = (id) => {
        setActiveId((prevId) => (prevId === id ? false : id));
    };

    return (
        <>
            <h1>The Accordion</h1>
            <ul className="section-accordion">
                {data &&
                    data.map((curElem) => {
                        const { id } = curElem;
                        return (
                            <FAQ
                                key={id}
                                curData={curElem}
                                isActive={activeId === id}
                                onToggle={() => handleToggle(id)}
                            />
                        );
                    })}
            </ul>
        </>
    )
}

export default Accordion
```

#### FAQ.jsx
```bash
const FAQ = ({ curData, isActive, onToggle }) => {
    const { question, answer } = curData;


    return (
        <>
            <li>
                <div className=" accordion-grid  ">
                    <p className="accordion-question">{question}</p>
                    <button onClick={onToggle} className={isActive ? "active-btn" : ""}>
                        {isActive ? "close" : "show"}{" "}
                    </button>
                </div>
                {isActive && <p> {answer} </p>}
            </li>
        </>
    )
}

export default FAQ
```

#### api/faq.json
```javascript
[
  {
    "id": 1,
    "question": "What is React.js and why should I use it?",
    "answer": "React.js is a powerful JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes, making it an excellent choice for building fast, dynamic, and scalable applications."
  },
  {
    "id": 2,
    "question": "How does the Virtual DOM in React work?",
    "answer": "The Virtual DOM is a lightweight copy of the real DOM in React. When a component's state changes, React compares the new virtual DOM with the previous one, calculates the difference, and updates only the necessary parts of the real DOM, improving performance."
  },
  {
    "id": 3,
    "question": "What are components in React?",
    "answer": "Components are the building blocks of a React application. They allow you to split the UI into independent, reusable pieces, and think about each piece in isolation. Components can be functional or class-based, making code modular and easier to manage."
  },
  {
    "id": 4,
    "question": "How do you manage state in React?",
    "answer": "State in React is managed using the useState hook in functional components or the setState method in class components. State allows you to store and manage dynamic data in a component, re-rendering the UI whenever the state changes."
  },
  {
    "id": 5,
    "question": "What is JSX in React?",
    "answer": "JSX is a syntax extension that looks similar to HTML, but it’s actually used in React to describe the UI. JSX allows you to write HTML-like code within JavaScript, making the structure of components more readable and intuitive."
  }
]
```

#### App.css
```bash
body {
  background-color: #17202a;
}

html {
  font-size: 62.5%;
  font-family: "urbanist";
}

p,
a,
li,
input {
  font-size: 1.6rem;
  letter-spacing: 0.12rem;
  line-height: 1.5;
  color: #fff;
  list-style: none;
}

h1 {
  color: #fff;
  text-align: center;
  font-size: 3.4rem;
  text-decoration: underline;
  font-family: "syne";
  letter-spacing: 0.1rem;
}

button {
  padding: 0rem 1.2rem;
  border-radius: 0.3rem;
  height: 4rem;
  cursor: pointer;
  border: 0;
  background-color: hsl(160, 80%, 48%);
  box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 15px;
  transition: all 0.5s ease;
  margin-left: 1.2rem;
  -webkit-border-radius: 0.3rem;
  -moz-border-radius: 0.3rem;
  -ms-border-radius: 0.3rem;
  -o-border-radius: 0.3rem;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
}

button:hover {
  background-color: hsl(160, 80%, 48%);
  color: hsl(0, 0%, 100%);
  box-shadow: rgb(9, 172, 115) 0px 7px 19px 0px;
}

/* ================================================ */

.section-accordion {
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  justify-content: center;
  margin-top: 6.4rem;

  & li {
    background-color: #212f3c;
    padding: 1.6rem;
    border-radius: 0.3rem;
    -webkit-border-radius: 0.3rem;
    -moz-border-radius: 0.3rem;
    -ms-border-radius: 0.3rem;
    -o-border-radius: 0.3rem;
    list-style-position: inside;
    border-left: 0.2rem solid #fff;
    list-style: none;
  }

  & .active-btn {
    background-color: #e74c3c;
    color: #fff;

    &:hover {
      color: hsl(0, 0%, 100%);
      box-shadow: rgb(167, 54, 13) 0px 7px 19px 0px;
    }
  }
}

/* //extra adding accordion-grid */

.accordion-grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordion-question {
  font-weight: bold;
  font-family: "Syne";
  letter-spacing: 0.1rem;
  font-size: 1.7rem;
}

@media screen and (max-width: 980px) {
  .section-form form {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .section-post ol {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 720px) {
  .section-post ol {
    grid-template-columns: repeat(1, 1fr);
  }
}
```

