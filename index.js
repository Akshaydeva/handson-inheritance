

    const parent = {
        value: 2,
        method() {
            return this.value + 1;
        }
    };
    
    console.log(parent.method()); // 3
   
    const child = {
        __proto__: parent,
    };
    console.log(child.method()); // 3
   
    
    child.value = 4; // assign the value 4 to the property 'value' on child.
    // This shadows the 'value' property on parent.
    // The child object now looks like:
    // { value: 4, __proto__: { value: 2, method: [Function] } }
    console.log(child.method()); // 5
    // Since child now has the 'value' property, 'this.value' means
    // child.value instead
    
    
    // Ques: Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum
    //for multiple arrays
    
    Array.prototype.add = function () {
        let sum = 0; // initialize sum 
        for (let i = 0; i < this.length; i++)
            sum += this[i];
        return sum;
    };
    const arr = [1,2,3];
    const arr2 = [2,3,5,6,89]
    let abc = arr.add();
    let xyz = arr2.add();
    console.log("Sum of Array is :" +abc);
    console.log("Sum of Array is :" +xyz);
    
    
    
    const user = {
        name: 'Umang',
        age: 21
    }
    const props = Object.getOwnPropertyNames(user)
    console.log(props) // [ 'name', 'age' ]