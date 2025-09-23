'use strict'
var arr = [10, 20, 30];

// Impure Function
// function append(dataArr, item) {
//     dataArr[dataArr.length] = item;
//     return dataArr;
// }

// function append(dataArr, item) {
//     dataArr.push(item);
//     return dataArr;
// }

// Pure Function
// function append(dataArr, item) {
//     let tArr = dataArr.concat(item)
//     return tArr;
// }

function append(dataArr, item) {
    return [...dataArr, item];
}

var newArr1 = append(arr, 40);
console.log("New Array1 is:", newArr1);     // [10, 20, 30, 40]

var newArr2 = append(arr, 50);
console.log("New Array2 is:", newArr2);     // [10, 20, 30, 50]