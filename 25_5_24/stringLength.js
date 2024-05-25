const length = (str) =>{
    let str1 = str.trim()
    let letter = str1.split(' ')
    let word = letter[letter.length-1]
    console.log(word,"=", word.length);
}
const str = " superman sharmalllll"
const result = length(str)