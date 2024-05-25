function LowerCaseLetters(str) {
    let lowerCase = "";
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        let ascii = char.charCodeAt(0)
        if (ascii >= 97 && ascii <= 122) {
            lowerCase += char;
        }
    }
    return lowerCase;
}


let iString = "$#310S&UmaMn";
let lowerCaseOnly = LowerCaseLetters(iString);
console.log("Original string:", iString);
console.log("Lowercase letters extracted:", lowerCaseOnly);