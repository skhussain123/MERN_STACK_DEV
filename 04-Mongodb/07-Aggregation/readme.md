

## MongoDB Aggregation
MongoDB Aggregation is a framework used to process data records and return computed results. It works like SQL’s GROUP BY, JOIN, WHERE, HAVING, SUM, COUNT, etc. but in a pipeline style.

MongoDB aggregation uses a pipeline, where documents pass through multiple stages.
Each stage transforms the documents and passes them to the next stage.

| Stage          | Description                                                                  |
| -------------- | ---------------------------------------------------------------------------- |
| **$match**     | Filters documents (like SQL WHERE)                                           |
| **$group**     | Groups documents by a field and applies accumulators (COUNT, SUM, MAX, etc.) |
| **$project**   | Selects/reshapes fields                                                      |
| **$sort**      | Sorts documents                                                              |
| **$limit**     | Limits the number of documents                                               |
| **$skip**      | Skips documents                                                              |
| **$lookup**    | Performs JOIN with another collection                                        |
| **$unwind**    | Deconstructs array fields                                                    |
| **$addFields** | Adds new computed fields                                                     |

### 1️⃣ Total Products Per Category
```bash
db.products.aggregate([
  {
    $group: {
      _id: "Category B",
      totalProducts: { $sum: 1 }
    }
  }
])
```
* $group groups products by category.
* $sum: 1 counts products in each category.

### 2️⃣ Average Price Per Category
```bash
db.products.aggregate([
  {
    $group: {
      _id: "Category A",
      averagePrice: { $avg: "$price" }
    }
  }
])
```
* Computes the average price for each category.

### 3️⃣ Products with Stock Greater than 50
```bash
db.products.aggregate([
  { $match: { stock: { $gt: 50 } } }
])
```
* $match filters products where stock > 50.

### 4️⃣ Total Stock Value Per Category
```bash
db.products.aggregate([
  {
    $group: {
      _id: "$category",
      totalStockValue: { $sum: { $multiply: ["$price", "$stock"] } }
    }
  }
])
```
* Calculates price * stock for each product, then sums it by category.

### 5️⃣ Sort Products by Price Descending
```bash
db.products.aggregate([
  { $sort: { price: -1 } },
  { $limit: 10 }
])
```
* $sort by price descending.
* $limit: 10 shows the 10 most expensive products.

### 6️⃣ Add a New Field isExpensive
```bash
db.products.aggregate([
  {
    $addFields: {
      isExpensive: { $gte: ["$price", 20] }
    }
  }
])
```
* Adds a new field isExpensive → true if price >= 20, else false.



```bash
db.products.aggregate([
  {
    $group: {
      _id: "Category B",
      productNames: { $push: "$name" },   // Push all product names into an array
      prices: { $push: "$price" }         // Push all prices into an array
    }
  },
  {
    $project: {
      productNames: 1,
      prices: { $slice: ["$prices", 0, -1] }  // Mimic $pop to remove the last element
    }
  }
])
```

