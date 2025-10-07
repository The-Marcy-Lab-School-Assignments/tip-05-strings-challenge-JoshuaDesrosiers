/*
Write a function named  capitalizeWords that takes a string (sentence) as input and returns 
a new string where the first letter of each word is capitalized.
*/
const capitalizeWords = (sentence) =>{
let bin =''
for(let i=0;i<sentence.length;i++){
    bin+=i==0?sentence[i].toUpperCase():sentence[i-1]==' '?sentence[i].toUpperCase():sentence[i]
}
console.log(bin)
}

const capitalizeWords2 = (sentence) =>{
let bin =''
let space=-1
for(let i=0;i<sentence.length;i++){
    space=sentence[i]==' '?i:space
    bin+=space==i-1?sentence[i].toUpperCase():
    sentence[i]
    
}
console.log(bin)
}

capitalizeWords("hello world from javascript");
capitalizeWords2("hello world from javascript");

// → "Hello World From Javascript"

capitalizeWords("javaScript");
capitalizeWords2("javaScript");
// → "JavaScript"
