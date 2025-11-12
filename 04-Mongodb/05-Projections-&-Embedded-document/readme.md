

## Projections
In MongoDB, a projection is used to control which fields are returned in query results.
It helps you fetch only the data you need, reducing bandwidth and improving performance.

![alt text](image1.PNG)

<br>

* 👉 1 = include field
* 👉 0 = exclude field

### Basic Syntax
```bash
db.collection.find(<filter>, <projection>)
```
* <filter> → defines which documents to match
* <projection> → defines which fields to include or exclude


### Include Specific Fields (1)
```bash
db.students.find({}, { name: 1, age: 1 })
```

### Exclude Specific Fields (0)
```bash
db.students.find({}, { address: 0, phone: 0 })
```
* All fields except address and phone will appear.
* You cannot mix inclusion and exclusion in one projection (except _id).

### Exclude _id Field
```bash
db.students.find({}, { _id: 0, name: 1, age: 1 })
```
* Returns only name and age, without _id.

### Projection with Dot Notation (Nested Fields)
```bash
db.students.find({}, { "contact.email": 1, "contact.phone": 1 })
```
* Includes only specific fields from a nested document (like contact).

### Array Projection (Using $elemMatch)
```bash
db.students.find(
  { name: "Ali" },
  { scores: { $elemMatch: { type: "exam" } } }
)
```
* Returns only the first element in scores array that matches { type: "exam" }.

---

## Embedded Document
An embedded document (ya nested document) woh hota hai jisme ek field ke andar aur ek document (object) store hota hai.
Matlab — ek document ke andar dusra document.

![alt text](image2.PNG)

```bash
{
  _id: 1,
  name: "Ali",
  age: 22,
  address: {
    city: "Lahore",
    street: "Main Blvd",
    zip: "54000"
  }
}
```

### Accessing Embedded Fields
```bash
db.students.find({ "address.city": "Lahore" })
```
### Update Embedded Document
```bash
db.students.updateOne(
  { name: "Ali" },
  { $set: { "address.city": "Karachi" } }
)
```

### Why Use Embedded Documents?
| Reason                                       | Explanation                                        |
| -------------------------------------------- | -------------------------------------------------- |
| **1. Related data ek hi document me rakhna** | Taki joins ki zarurat na pade (MongoDB NoSQL hai). |
| **2. Faster reads**                          | Ek hi document fetch karna padta hai.              |
| **3. Data structure maintain hota hai**      | Hierarchical / JSON-like format me data rakhte ho. |

### Example Summary
| Concept        | Example                                   | Description                |
| -------------- | ----------------------------------------- | -------------------------- |
| Embedded field | `"address": { "city": "Lahore" }`         | Document inside a document |
| Query          | `{ "address.city": "Lahore" }`            | Access nested value        |
| Projection     | `{ "address.city": 1 }`                   | Show only city             |
| Update         | `{ $set: { "address.city": "Karachi" } }` | Modify embedded field      |

---

## $all VS &elemMatch
ye MongoDB array query operators me se do important aur similar lagne wale operators hain,

![alt text](image3.PNG)

| Feature           | `$all`                                             | `$elemMatch`                                                       |
| ----------------- | -------------------------------------------------- | ------------------------------------------------------------------ |
| **Use case**      | Jab array me **multiple values** hone chahiye      | Jab array ke **ek hi element** par multiple conditions lagani ho   |
| **Checks**        | Array me **sab given values** maujood hain ya nahi | Array me **koi ek element** sab conditions match karta hai ya nahi |
| **Works on**      | Simple arrays (values)                             | Arrays of documents (objects)                                      |
| **Operator type** | Matching multiple values                           | Matching multiple conditions on one element                        |
| **Example type**  | `[ "red", "blue", "green" ]`                       | `[ {type: "exam", score: 80}, {type: "quiz", score: 50} ]`         |

### 1. $all — Check Multiple Values in Array

#### Example Collection
```bash
{
  _id: 1,
  colors: ["red", "blue", "green"]
}
```


```bash
db.items.find({ colors: { $all: ["red", "green"] } })
```
* Find those documents jinke colors array me red aur green dono maujood hain (order matter nahi karta).


### 2. $elemMatch — Match One Element That Meets Multiple Conditions

#### Example Collection
```bash
{
  _id: 1,
  scores: [
    { type: "exam", score: 90 },
    { type: "quiz", score: 50 }
  ]
}
```

```bash
db.students.find({
  scores: { $elemMatch: { type: "exam", score: { $gt: 80 } } }
})
```
* Find documents jinke scores array me ek hi element ho jisme type "exam" aur score 80 se zyada ho.
