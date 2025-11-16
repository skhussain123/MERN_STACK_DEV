

# Registration Form With Multiple State
```bash
import './App.css';
import { useState } from 'react';

function App() {
  const [userName, setName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "firstName":
        setName(value);
        break;
      case "userEmail":
        setEmail(value);
        break;
      case "userPassword":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const FormData = {
      firstName: userName,
      userEmail,
      userPassword
    };
    console.log(FormData);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={userName}
          onChange={handleChange}
          placeholder="Name"
        />

        <input
          type="email"
          name="userEmail"
          value={userEmail}
          onChange={handleChange}
          placeholder="Email"
        />

        <input
          type="password"
          name="userPassword"
          value={userPassword}
          onChange={handleChange}
          placeholder="Password"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
```

---

# Multiple Input Fields with One State Variable
```bash
import './App.css';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userPassword: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name === "firstName" ? "userName" : name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={user.userName}
          onChange={handleChange}
          placeholder="Name"
        />

        <input
          type="email"
          name="userEmail"
          value={user.userEmail}
          onChange={handleChange}
          placeholder="Email"
        />

        <input
          type="password"
          name="userPassword"
          value={user.userPassword}
          onChange={handleChange}
          placeholder="Password"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
```
---
# Login Form
```bash
import './App.css';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    userEmail: "",
    userPassword: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="userEmail"
          value={user.userEmail}
          onChange={handleChange}
          placeholder="Email"
        />

        <input
          type="password"
          name="userPassword"
          value={user.userPassword}
          onChange={handleChange}
          placeholder="Password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
```