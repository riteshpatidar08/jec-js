
//FUNCTIONS 
const result = greet() ;
console.log(result)
//FUNCTION DECLARATION 
function greet(){
    return 'hello'
}

//FUNCTION EXPRESSION 
// console.log(sum(2,3))

const sum = function(a,b){
return  a+b ;
}

//NOTE arrow function 
//single line
//multiline 

const arrowFn = a => a
console.log(arrowFn(4))

const anotherSum = () => {
    const a = 5 ;
    const b= 5 ;
 return a+b
}
console.log(anotherSum()) ;

console.log('hello')

//1.git init to initialize git in the current folder its started to track changes in you current working directory

//git status => used to check the untracked files

//Staging area => 

//git add script.js

//git commit -m "commit-message"

//a code version is created in the localrepo
