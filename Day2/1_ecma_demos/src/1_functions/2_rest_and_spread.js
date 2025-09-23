'use strict'
// If we use, ... operator, on the lefthand side of assignment operator - REST
// If we use, ... operator, on the righthand side of assignment operator - SPREAD

// In ECMAScript 2015, we can use ... only with Iterable Objects (Arrays)
// In ECMAScript 2018, we can use ... with normal Objects also

// --------------------------------- Array Spread

// let arr1 = [10, 20, 30, 40, [50, 60]];

// // Reference Copy
// // let arr2 = arr1;

// // Shallow Copy
// // let arr2 = new Array();
// // for(let i = 0; i< arr1.length; i++) {
// //     arr2[i] = arr1[i];
// // }

// // let arr2 = [].concat(arr1);
// // var arr2 = [...arr1];

// // Deep Copy
// let arr2 = JSON.parse(JSON.stringify(arr1));

// arr2[0] = 1000;
// arr2[4][0] = 5000;

// console.log("Array 1 is:", arr1);
// console.log("Array 2 is:", arr2);


// -------------------------------------------- Object Spread (ECMAScript 2018)

// let person1 = { id: 1, name: "Manish", address: { city: "Pune" } };

// // Reference Copy
// // let person2 = person1;

// // Shallow Copy
// // let person2 = {};
// // for (let key in person1) {
// //     person2[key] = person1[key]; 
// // }

// // ECMAScript 2015 - Object.assign
// // let person2 = Object.assign({}, person1);

// // ECMAScript 2018 - Object Spread
// // let person2 = { ...person1 };

// // Deep Copy
// let person2 = JSON.parse(JSON.stringify(person1));

// person2.name = "Abhijeet";
// person2.address.city = "Mumbai";

// console.log("Person 1", person1);
// console.log("Person 2", person2);

// ---------------------------------------------------------- Array Destructuring & Rest
// // let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// // Destructuring
// // let x = arr[0];
// // let y = arr[1];
// // let z = [arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8]];

// // ES6 - Array Destructuring
// // let [x, y, z] = arr;
// // let [x, , y, z] = arr;

// // ES6 - Array Destructuring with Rest
// // let [x, y, ...z] = arr;

// // console.log(`x = ${x}, y = ${y}`);
// // console.log(`z = ${z}`);

// let x = 10;
// let y = 20;

// console.log(`x = ${x}, y = ${y}`);

// [x, y] = [y, x];

// console.log(`Swapped, x = ${x}, y = ${y}`);

// -------------------------------------------------------- Object Destructuring With Rest (ECMAScript 2018)
var person = { id: 1, ename: "Manish", city: "Pune", state: "MH", pin: 411028 };

// Destructuring
// let id = person.id;
// let ename = person.ename;
// let address = {
//     city: person.city,
//     state: person.state,
//     pin: person.pin
// }; 

// ECMAScript 2018 - Object Destructuring with Rest
// let { id, ename, address } = person;

// ECMAScript 2018 - Object Destructuring with Rest
let { id, ename, ...address } = person;

console.log("Id:", id);
console.log("Name:", ename);
console.log("Address:", address);