
* understant array sturcture for nested looping
* Make Outer loop
* Make inner Loop
* Make component for outer loop
* Make component for inner loop

### App.jsx
```javascript
import College from "./Component/College"

function App() {

  const Collegedata = [
    {
      name: "aptech",
      city: "karachi",
      student: [
        {
          name: "hussain",
          age: 21,
          class: "202"
        },
        {
          name: "ali",
          age: 21,
          class: "202"
        },
        {
          name: "junaid",
          age: 21,
          class: "202"
        },
      ]
    },
    {
      name: "Degree College",
      city: "hedrabad",
      student: [
        {
          name: "zubair",
          age: 21,
          class: "202"
        },
        {
          name: "ali",
          age: 21,
          class: "202"
        },
        {
          name: "junaid",
          age: 21,
          class: "202"
        },
      ]
    },
    {
      name: "aptech",
      city: "islamabad",
      student: [
        {
          name: "zain",
          age: 21,
          class: "202"
        },
        {
          name: "ali",
          age: 21,
          class: "202"
        },
        {
          name: "junaid",
          age: 21,
          class: "202"
        },
      ]
    },
  ]
  return (
    <div>
      <p>App compoennt</p>
      {
        Collegedata.map((college, index) => {
          return (
            <div key={index}>

              <College college={college} />
              {/* <h1>{college.name}</h1>
              <ul>
                <li>{college.city}</li>
              </ul> */}

            </div>
          )
        })
      }
    </div>
  )
}


export default App
```

### College.jsx
```javascript
function College({ college }) {

    return (
        <div>
            <h1>{college.name}</h1>
            <ul>
                <li>{college.city}</li>

                <ul>
                    <li>
                    {
                        college.student.map((data, index) => {
                            return (
                                <div key={index}>
                                    <p>{data.name}</p>
                                </div>
                            )
                        })
                    }
                </li>
                </ul>
            </ul>
        </div>
    )
}

export default College
```
