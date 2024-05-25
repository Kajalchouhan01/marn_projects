function CommonElements(arr1, arr2) {
    const commonElements = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                commonElements.push(arr1[i]);
             
            }
        }
    }
    return commonElements;
}


const array1 = [2, 7, 11, 15];
// const array1 = prompt ("enter array 1");
const array2 = [3, 7, 11, 18];
// const array2 = prompt ("enter array 2");
const result = CommonElements(array1, array2);
console.log(result);  