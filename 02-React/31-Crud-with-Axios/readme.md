
## React App with Axios & Real APIs CRUD Operations

```bash
npm install axios
```

---

## 1. Get Data
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

---

## 2. Delete Data
#### post.jsx
```bash
import { useEffect, useState } from "react";
import { deletePost, getPost } from "../Api/PostApi";
import '../App.css';
import { Form } from "../component/Form"

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


    const hanndleDeletePost = async (id) => {

        try {
            const res = await deletePost(id)
            if (res.status == 200) {
                const newUpdatesPost = data.filter((curElem) => {
                    return curElem.id !== id;
                });

                setData(newUpdatesPost);
            }
        }

        catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <section className="">
        
            </section>

            <section>
                <ul>
                    {data.map((curElem) => {
                        const { id, body, title } = curElem;

                        return (
                            <li key={id}>
                                <p>{id}</p>
                                <p>{title}</p>
                                <small>{body}</small>
                                <button>Edit</button>
                                <button className="btn-delete" onClick={() => hanndleDeletePost(id)}>Delete</button>
                            </li>
                        );
                    })}
                </ul >
            </section >
        </>

    );
};
```

#### Api/PostApi
```bash
import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});


// get method

export const getPost = () => {
    return api.get('/posts')
}

// Delete method
export const deletePost = (id) => {
    return api.delete(`/posts/${id}`);
}

```

## 3. Add Data 
#### post.jsx
```bash
import { useEffect, useState } from "react";
import { deletePost, getPost } from "../Api/PostApi";
import '../App.css';
import { Form } from "../component/Form"

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
            <section className="">
                <Form data={data} setData={setData} />
            </section>

            <section>
                <ul>
                    {data.map((curElem) => {
                        const { id, body, title } = curElem;

                        return (
                            <li key={id}>
                                <p>{id}</p>
                                <p>{title}</p>
                                <small>{body}</small>
                                <button>Edit</button>
                                # <button className="btn-delete" onClick={() => hanndleDeletePost(id)}>Delete</button>
                            </li>
                        );
                    })}
                </ul >
            </section >
        </>

    );
};
```

#### /Api/PostApi
```bash
import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});


// get method

export const getPost = () => {
    return api.get('/posts')
}

// Delete method
export const deletePost = (id) => {
    return api.delete(`/posts/${id}`);
}

// post method
export const PostData = (post) => {
    return api.post(`/posts`, post);
}
```



