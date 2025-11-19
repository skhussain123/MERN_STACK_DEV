* user variable with jsx
* condition inside jsx
* use function with jsx
* operaitons indide jsx
* object and array with jsx
* html tag property with jsx

```javascript
function Profile() {

    // Variables
    const name = "hussain";
    const age = 25;

    const a = 10
    const b = 20;

    // Function to add two numbers
    function add(x, y) {
        return x + y;
    }

    // object and array with jsx
    const userobj = {
        name: "hussain",
        age: 22,
    };

    // array with jsx
    const userarr = ['hussain', 'ali', 'ahmed'];

    // image path
    const path = "https://images.unsplash.com/photo-1752560937304-0f699e2055f9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


    // Function to perform operations
    function operation(a, b, op) {

        // Check the Condition with jsx
        if (op === 'add') {
            return a + b;
        }

        if (op === 'sub') {
            return a - b;
        }
    }

    return (
        <div>
            <h1>Profile Page</h1>
            <p>This is the profile page of {name}.</p>
            <p>Age: {age}</p>
            <p>Sum of a and b is: {operation(a, b, "sub")}</p>
            <p>User Name from Object: {userobj.name}</p>
            <p>User Age from Object: {userobj.age}</p>

            <p>User Names from Array: {userarr[0]}</p>

            <img src={path} alt="" />

        </div>
    )
}

export default Profile;
```