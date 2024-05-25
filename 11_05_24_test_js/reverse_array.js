function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}


let originalArray = [1, 2, 3, 4, 5];
let Array = reverseArray(originalArray);
console.log("Original array:", originalArray);
console.log("Reversed array:", Array);