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

const capitalizeWords2 = (sentence) =>{
let bin =''
let space=-1
for(let x=0;x<sentence.length;x++){
    space=sentence[x]==' '?x:space
    bin+=space==x-1?sentence[x].toUpperCase():
    sentence[x]
    
}
console.log(bin)
}

capitalizeWords("hello world from javascript");
capitalizeWords2("hello world from javascript");

// → "Hello World From Javascript"

capitalizeWords("javaScript");
capitalizeWords2("javaScript");
// → "JavaScript"
