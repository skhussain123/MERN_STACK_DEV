


## Basic Command
| Action                    | Command             |
| ------------------------- | ------------------- |
| Show all databases        | `show dbs`          |
| Create or switch database | `use myDatabase`    |
| Show current database     | `db`                |
| Delete (drop) database    | `db.dropDatabase()` |


| Action                         | Command                                  |
| ------------------------------ | ---------------------------------------- |
| Show all collections           | `show collections`                       |
| Create collection (explicitly) | `db.createCollection("students")`        |
| Drop (delete) collection       | `db.students.drop()`                     |
| Insert one document            | `db.students.insertOne({ name: "Ali" })` |
| Insert multiple documents      | `db.students.insertMany([{...}, {...}])` |
| Find all documents             | `db.students.find()`                     |
| Count documents in collection  | `db.students.countDocuments()`           |


```bash
// Create or switch to a database
use school

// Create a collection
db.createCollection("students")

// Insert a document
db.students.insertOne({ name: "Ali", age: 22 })

// Show inserted data
db.students.find()

// Delete the whole collection
db.students.drop()

// Delete the database
db.dropDatabase()

```