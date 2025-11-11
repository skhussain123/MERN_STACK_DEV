
## What is a Module? (Ye tutorial module ko understand krny ke liye samajy rahy ha react sy iska abhi lena dena nh ha koe)
A module in React (or JavaScript in general) is simply a file that exports code (functions, components, variables, etc.) so that it can be imported and used in another file.

1. inBuild
2. jab npm intsall krty hato kuch modules onstall hoty ha
3. hum apny khud ke function as a moddule bana kr use kr sakty ha.


## Type of Export 
* Default Export
* Named Export

**Default Export**
eik javascript ki file me eik ko export kr sakty hain
named export multiple function ko eik sath export krny ka kam krega

---

## Default Export
### Create Module
* Create Blank Folder and goto the folder in terminal and run this command  npm init -y
* package.json me jakr ye add krlo
```javascript
{
  "name": "module",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
### Create calculator.js and create module
```javascript
let sum = (a, b) => {
    return a + b;
}

export default sum;
```

### index.js (module file name)
```javascript
import sum from "./calculator.js";
console.log(sum(5, 10));
```

**Run Project**
```bash
node index.js
```
* Node ki Help sy hun javascript ko without browser bhi chala sakty ha (in terminal) 

---

## Named Export
### Create calculator.js and create module
```javascript

let sum = (a, b) => {
    return a + b;
}

let subtract = (a, b) => {
    return a - b;
}

export { sum, subtract };


// Name Export with Other Think
 export let sum = (a, b) => {
    return a + b;
}

export let subtract = (a, b) => {
    return a - b;
}

```

### index.js (module file name)
```javascript
import { sum,subtract } from "./calculator.js";

console.log(sum(5, 10));
console.log(subtract(10, 5));
```

**Run Project**
```bash
node index.js
```

### You Can use With Alias
```javascript
import { sum as sumData,subtract } from "./calculator.js";

console.log(sumData(5, 10));
console.log(subtract(10, 5));
```

