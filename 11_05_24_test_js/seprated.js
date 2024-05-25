function separateArrays(arr) {
    let numbersArray = [];
    let stringsArray = [];
    let decimalsArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            let num = arr[i];
            if (num % 1 === 0) {
                numbersArray.push(num);
            } else {
                decimalsArray.push(num);
            }
        } else if (typeof arr[i] === 'string') {
            stringsArray.push(arr[i]);
        }
    }
  console.log(numbersArray);
  console.log(stringsArray);
  console.log(decimalsArray);
    // return numbersArray;
    // return stringsArray;
    // return decimalsArray;
    
}
let mixedArray = [1, "kajal", 3.14, "computer", 5, "foo", 2.718];
separateArrays(mixedArray);



