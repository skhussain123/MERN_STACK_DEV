


### What is MongoDB
MongoDB is an open-source, document-oriented NoSQL database designed for high scalability, flexibility, and performance. Unlike traditional relational databases that store data in tables with fixed schemas, MongoDB stores data in flexible, JSON-like documents (using a binary format called BSON), allowing varied structures within the same collection and easier evolution of data models over time

* Created by: Dwight Merriman, Eliot Horowitz, Kevin Ryan (Company: 10gen, later renamed MongoDB Inc.)
* When: Development started in 2007; first official open-source release in 2009

![Alt text](../images/mongodb-collection-vs-document.jpg)


1. Document: A document is the basic unit of data in MongoDB. It is a data structure composed of field and value pairs (like keys and values in JSON). Each document is stored as a BSON object and can contain simple fields (strings, numbers, booleans), arrays, or even nested documents (sub-documents). Documents are schema-less, meaning that every document in a collection does not need to have the same fields or structure

2. Collection: A collection is a group or container of related documents. It is analogous to a table in relational databases but without a fixed schema. Collections hold multiple documents that may have different structures but typically represent similar types of data (like a "users" collection for user documents).

3. Semi-structured data: MongoDB handles semi-structured data, which means the data is not organized into rigid tables with fixed columns as in SQL databases. Instead, data can have varying sets of fields, nested objects, and arrays inside documents. This allows flexibility to represent complex and evolving data models without schema migrations. Semi-structured data sits between unstructured data (like raw text) and fully structured data (like a fixed schema relational table), providing both flexibility and some organization

```bash
[
  {
    "_id": { "$oid": "64b123abc456def789001235" },
    "name": "Sara Khan",
    "age": 24,
    "department": "Software Engineering",
    "courses": ["Web Development", "AI & ML"],
    "graduated": true
  },
  {
    "_id": { "$oid": "64b123abc456def789001236" },
    "name": "Sara Khan",
    "age": 24,
    "department": "Software Engineering",
    "courses": ["Web Development", "AI & ML"],
    "graduated": true
  }
]

```

## 1. MongoDB Compass
* It is a graphical user interface (GUI) tool for MongoDB.
* Provides a visual environment to explore, query, and manage your MongoDB data without needing to write complex commands manually.
* It helps you:
     * Explore data with visual schema representation.
     * Build and run queries easily using a point-and-click interface.
     * Import/export data (CSV, JSON).
     * View and optimize indexes.
     * Create aggregation pipelines visually.
     * Monitor real-time performance and validate document structure.
     * Includes an embedded interactive MongoDB shell in the GUI.
* Runs on Windows, macOS, and Linux.
* Compass is free to use and simplifies database management for both beginners and experts

## 2. MongoDB Atlas
* It is a managed cloud database service (DBaaS) provided by MongoDB Inc.
* Allows you to host, run, and scale MongoDB databases in the cloud without worrying about infrastructure maintenance.
* Supports deployment on major cloud platforms like AWS, Azure, and Google Cloud.
* Provides automated backups, security features, monitoring, and easy scalability.
* Offers additional tools like performance alerts, fine-grained access controls, and data visualization.
* Designed to let developers focus on application development rather than database operations.

```bash
| Tool             | Purpose                             | Platform                         | Key Features                                                                                      |
|------------------|-------------------------------------|----------------------------------|----------------------------------------------------------------------------------------------------|
| MongoDB Compass  | GUI client for MongoDB data management | Desktop (Windows, macOS, Linux) | Visual query building, schema visualization, data exploration, index management, aggregation pipelines, embedded shell |
| MongoDB Atlas    | Cloud-based managed MongoDB service | Cloud (AWS, Azure, Google)       | Hosted database, auto-scaling, backups, security, monitoring                                      |

```

### SQL VS Mongodb
```bash
| Feature                  | SQL (Relational DB)                          | MongoDB (NoSQL Document DB)                      |
|--------------------------|----------------------------------------------|--------------------------------------------------|
| **Data Model**           | Tables with rows and columns                 | Collections with JSON-like documents (BSON)      |
| **Schema**               | Fixed (strict schema required)               | Flexible (schema-less or dynamic schema)         |
| **Query Language**       | SQL (Structured Query Language)              | MongoDB Query Language (MQL – JSON-based)        |
| **Joins**                | Supports complex joins                       | Limited joins (via `$lookup`, not recommended for heavy use) |
| **Transactions**         | Full ACID-compliant transactions             | Supports multi-document transactions (since v4.0)|
| **Scalability**          | Vertical scaling (adding more power to one server) | Horizontal scaling (sharding across many nodes) |
| **Performance**          | Slower for unstructured or semi-structured data | Faster for document-based, nested data          |
| **Use Cases**            | Financial systems, ERPs, legacy apps         | Real-time analytics, IoT, content management     |
| **Examples**             | MySQL, PostgreSQL, Oracle, SQL Server        | MongoDB                                          |
```


![Alt text](../images/Capture.PNG)
![Alt text](../images/Capture1.PNG)
![Alt text](../images/Capture2.PNG)
![Alt text](../images/Capture3.PNG)


### Installation:
1. https://www.mongodb.com/try/download/community --->download msi version
2. https://www.mongodb.com/try/download/shell  --->download msi version
3. https://www.mongodb.com/try/download/database-tools  --->download msi version


* 1. First install community server
* 2. Mongos Install
* 3. Mongos Database Tools


#### Check version
* mongod --version

#### mongosh
```bash
C:\Users\user>mongosh
Current Mongosh Log ID: 688652d7424764c228eec4a8
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.6
MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017

C:\Users\user>
```

