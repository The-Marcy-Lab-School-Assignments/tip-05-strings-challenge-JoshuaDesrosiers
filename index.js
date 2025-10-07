/*
Write a function named  capitalizeWords that takes a string (sentence) as input and returns 
a new string where the first letter of each word is capitalized.
*/
const capitalizeWords = (sentence) =>{
let bin =''
for(let x=0;x<sentence.length;x++){
    bin+=x==0?sentence[x].toUpperCase():sentence[x-1]==' '?sentence[x].toUpperCase():sentence[x]
}
console.log(bin)
}

capitalizeWords("hello world from javascript");
// → "Hello World From Javascript"

capitalizeWords("javaScript");
// → "JavaScript"
