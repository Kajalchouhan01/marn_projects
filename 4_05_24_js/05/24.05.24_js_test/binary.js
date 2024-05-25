const binarySearch =(arr,target) =>{


    let s = 0;
    let e = arr.length - 1;
    let mid ;
    
    while(s <= e){
        mid = Math.floor((s + e)/2);
       if(arr[mid] == target){
        return mid;
       }
       else if(arr[mid] > target){
        e = mid -1;
        }
        else if(arr[mid] < target){
            s = mid +1;
        }
        
    }
    return -1;
    };
    
    const arr =[99,100,101,201,203,204,205,206,207,209,210,217,218]
    let target = 219;
    const result = binarySearch(arr,target);
    
   if(result==-1){
    console.log("elemnet not found")
   }
   else{
    console.log("element found at the index =",result);
   }