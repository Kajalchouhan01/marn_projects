


// let arr =[2,7,15,11]
// const target = 26;
// for(let i=0;i<arr.length;i++){
    
//         if(arr[i] + arr[i+1] == target){
//             console.log(i,i+1);
           
//         }
    
// }
function Sum(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + arr[i + 1] == target) {
            console.log (i, i + 1);
        }
    }
   
}
const arr = [2,  0 ,7 , 15, 11];
const target = 9;
const result = Sum(arr, target);

