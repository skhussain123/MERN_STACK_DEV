
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

#### component/Form.jsx
```bash
import { useState } from "react";
import { PostData } from "../Api/PostApi";

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
    const [addData, setAddData] = useState({
        title: "",
        body: ""
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await addPostData();
    };

    const addPostData = async () => {
        try {
            const response = await PostData(addData);

            if (response.status === 201 || response.status === 200) {
                setData(prev => [response.data, ...prev]);
                setAddData({ title: "", body: "" });
            }
            else {
                console.warn("Unexpected response status:", response.status);
                alert("Could not add post. Try again.");
            }

        } catch (error) {
            console.error("Add post failed:", error);
            alert("Add post failed. Check console.");
        }
    };

    return (
        <form onSubmit={handleFormSubmit} className="post-form">
            <input
                className="input"
                autoComplete="off"
                type="text"
                value={addData.title}
                onChange={handleInputChange}
                id="title"
                name="title"
                placeholder="Add post title"
                required
            />

            <input
                className="input"
                autoComplete="off"
                type="text"
                value={addData.body}
                onChange={handleInputChange}
                id="body"
                name="body"
                placeholder="Add post body"
                required
            />

            <button className="btn-success" type="submit">Add</button>
        </form>
    );
};
```

---

## Edit Code here
#### App.jsx
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

#### component/Form.jsx
```bash
import { useEffect, useState } from "react";
import { PostData, updateData } from "../Api/PostApi";

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
    const [addData, setAddData] = useState({ title: "", body: "" });

    const isEmpty = !updateDataApi || Object.keys(updateDataApi).length === 0;

    // pre-fill when editing
    useEffect(() => {
        if (updateDataApi && Object.keys(updateDataApi).length > 0) {
            setAddData({
                title: updateDataApi.title || "",
                body: updateDataApi.body || ""
            });
        } else {
            setAddData({ title: "", body: "" });
        }
    }, [updateDataApi]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddData((prev) => ({ ...prev, [name]: value }));
    };

    const updatePostData = async () => {
        try {
            if (!updateDataApi || !updateDataApi.id) {
                alert("No post selected to update.");
                return;
            }

            const res = await updateData(updateDataApi.id, addData);

            if (res.status === 200) {
                // replace the updated item
                setData((prev) =>
                    prev.map((curElem) => (curElem.id === res.data.id ? res.data : curElem))
                );

                // clear form and edit target (do this AFTER setData)
                setAddData({ title: "", body: "" });
                setUpdateDataApi(null);
            } else {
                console.warn("Unexpected update status:", res.status);
                alert("Update failed. Try again.");
            }
        } catch (error) {
            console.error("Update failed:", error);
            alert("Update failed. Check console.");
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // find which button submitted the form
        const action = e.nativeEvent.submitter?.value;

        if (action === "Add") {
            await addPostData();
        } else if (action === "Update") {
            await updatePostData();
        } else {
            // fallback based on isEmpty
            if (isEmpty) await addPostData();
            else await updatePostData();
        }
    };

    const addPostData = async () => {
        try {
            const response = await PostData(addData);
            if (response.status === 201 || response.status === 200) {
                setData((prev) => [response.data, ...prev]);
                setAddData({ title: "", body: "" });
                // ensure edit target is cleared
                setUpdateDataApi(null);
            } else {
                console.warn("Unexpected response status:", response.status);
                alert("Could not add post. Try again.");
            }
        } catch (error) {
            console.error("Add post failed:", error);
            alert("Add post failed. Check console.");
        }
    };

    return (
        <form onSubmit={handleFormSubmit} className="post-form">
            <input
                className="input"
                autoComplete="off"
                type="text"
                value={addData.title}
                onChange={handleInputChange}
                id="title"
                name="title"
                placeholder="Add post title"
                required
            />

            <input
                className="input"
                autoComplete="off"
                type="text"
                value={addData.body}
                onChange={handleInputChange}
                id="body"
                name="body"
                placeholder="Add post body"
                required
            />

            <button
                className="btn-success"
                type="submit"
                value={isEmpty ? "Add" : "Update"}
            >
                {isEmpty ? "Add" : "Update"}
            </button>
        </form>
    );
};
```

#### component/Post.jsx
```bash
import { useEffect, useState } from "react";
import { deletePost, getPost } from "../Api/PostApi";
import '../App.css';
import { Form } from "../component/Form"

export const Post = () => {
    const [data, setData] = useState([]);
    const [updateDataApi, setUpdateDataApi] = useState(null);

    const getPostData = async () => {
        const res = await getPost();
        setData(res.data);
        console.log(res.data);
    };

    useEffect(() => {
        getPostData();
    }, []);


    const handdleDeletePost = async (id) => {

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

    const handdleUpdatePost = (curElem) => setUpdateDataApi(curElem);





    return (
        <>
            <section className="">
                <Form data={data} setData={setData} updateDataApi={updateDataApi} setUpdateDataApi={setUpdateDataApi} />
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
                                <button className="" onClick={() => handdleUpdatePost(curElem)}>Edit</button>
                                <button className="btn-delete" onClick={() => handdleDeletePost(id)}>Delete</button>
                            </li>
                        );
                    })}
                </ul >
            </section >
        </>

    );
};
```

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

// Delete method
export const deletePost = (id) => {
    return api.delete(`/posts/${id}`);
}

// post method
export const PostData = (post) => {
    return api.post(`/posts`, post);
}

// update method
export const updateData = (id, post) => {
    return api.put(`/posts/${id}`, post);
}
```






