## Prop Drilling
Prop Drilling React ka wo concept hai jisme data ko parent component se bohot neeche tak bhejna padta hai, even un components ko bhi jinko us data ki zaroorat nahi hoti, sirf isliye kyunki neeche wale component ko data chahiye hota hai.

* A → B → C → D → E
A component me data hai, lekin E ko use karna hai.
Isliye aapko props ko B → C → D ke through pass karna padta hai — even though unko us data ki zaroorat nahi.

### Why Prop Drilling is a Problem?
* Code messy ho jata
* Maintain karna mushkil
* Har intermediate component ko unwanted props milte
* Re-renders ziyada hotay
* Large apps me manage karna difficult

### Example of Prop Drilling Problem

![alt text](image1.PNG)

```bash
function App() {
  const user = "Muhammad Hussain";

  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <p>Hello, {user}</p>;
}

```

---
## How to Avoid Prop Drilling
React ne is problem ko solve karne ke liye kuch tools diye hai

### 1. React Context API
![alt text](image2.PNG)

<br>

![alt text](image3.PNG)

```bash

```


