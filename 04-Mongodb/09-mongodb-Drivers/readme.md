

## Mongodb Drivers

![alt text](image.png)


![alt text](image2.PNG)

#### Mongodb Connect With Node js
* Create Folder on your local machine (my-project_mongo)
* goto my-project_mongo and this command ---> npm init -y
* goto mongodb and download https://www.npmjs.com/package/mongodb
* Run this command on node js project terminal (npm i mongodb)

#### Create index.js file on Root directory
```bash
const { MongoClient } = require("mongodb"); 

const url = "mongodb+srv://hk0527075_db_user:O4smhJt6u@cluster0.cpzlcj9.mongodb.net";
const client = new MongoClient(url);

async function run() {
  try {
    // Connect the client
    await client.connect();
    console.log("Connected successfully to MongoDB");

    // Select the database
    const db = client.db("shop");

    // Select a collection
    const collection = db.collection("products");

    // Example: find all documents
    const docs = await collection.find().toArray();
    console.log(docs);

  } catch (err) {
    console.error(err);
  } finally {
    // Close the connection
    await client.close();
  }
}

run();

```

#### Run the project terminal 
```bash
node index.js
```

![alt text](image1.PNG)