function reverseString(str) {
    let change =str.toUpperCase();
    
    let reversedStr = '';
    for (let i = change.length - 1; i >= 0; i--) {
        reversedStr += change[i];
    }
   
    if (change==reversedStr){
        console.log("it is palindrom")
    }
    else{
        console.log("it is not palindrom")
    }
   
}


console.log(reverseString("hello"));