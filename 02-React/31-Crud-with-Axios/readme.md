
## React App with Axios & Real APIs CRUD Operations

```bash
npm install axios
```

---

### Get Data
#### Api/PostApi.jsx
```bash
import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

// get method
export const getPost = () => {
    return api.get('/posts')
}
```

#### component/Post.jsx
```bash
import { useEffect, useState } from "react";
import { getPost } from "../Api/PostApi";
import '../App.css';

export const Post = () => {
    const [data, setData] = useState([]);

    const getPostData = async () => {
        const res = await getPost();
        setData(res.data);
        console.log(res.data);
    };

    useEffect(() => {
        getPostData();
    }, []);

    return (
        <>
            <section>
                <ul>
                    {data.map((curElem) => {
                        const { id, body, title } = curElem;

                        return (
                            <li key={id}>
                                <p>{title}</p>
                                <small>{body}</small>
                                <button>Edit</button>
                                <button className="btn-delete">Delete</button>
                            </li>
                        );
                    })}
                </ul >
            </section >
        </>

    );
};
```

### App.jsx
```bash
import { Post } from "./component/Post"
const App = () => {

  return (
    <>
      <section className="main-section">
        {<Post />}
      </section>
    </>
  )
}

export default App
```
