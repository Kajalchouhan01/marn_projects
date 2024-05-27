let arr1 = [1, 2, 3];
let arr2 = [3, 2, 1];

// Function to reverse an array
function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

// Reverse both arrays
let reversedArr1 = reverseArray(arr1);
let reversedArr2 = reverseArray(arr2);

// Add the corresponding elements of the reversed arrays
let sumArr = [];
for (let i = 0; i < reversedArr1.length; i++) {
    sumArr.push(reversedArr1[i] + reversedArr2[i]);
}

// Reverse the resulting sum array
let finalReversedSumArr = reverseArray(sumArr);

// Print the final reversed sum array
console.log("Final reversed sum array:", finalReversedSumArr);