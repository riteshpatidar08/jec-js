//NOTE value and variable
(value) => data;
// // data store in the variables
// data =>
//NOTE = Data types
//NOTE PRIMTIVE DATA TYPES
//NOTE 7 primitive data types

//TODO NUMBER => 0-9
//TODO STRING => 'A-z' '0-9'  // STRING => '' , ""  ,    ``
//TODO BOOLEAN => TRUE OR FALSE  isJSFun => true
//TODO UNDEFINED =>
//TODO NULL =>
//TODO BIGINT < SYMBOL

//NON-PRIMITIVE => array , object , fn ;

//PRIMITIVE

//NOTE KEYWORDS
//let , const , var

let firstname = 'ritesh';
console.log(firstname);
//NOTE REASSIGN , REDECLARATION
firstname = 'AMAN';
console.log(firstname);

//NOTE REDECLARATION
// let firstname = 'piyush'

//NOTE VARIABLE DECALRED WITH LET KEYWORD CAN BE ✅REASSIGN BUT CANNOT BE ❌REDECLARED

const age = '🧑‍🦲';
//REASSIGN
// age = 26 ;
// console.log(age)
//REDECLARATION
// const age = 37

//NOTE VAR => (LEGACY KEYWORD USED IN OLDER VERSION)

var isJSFun = true;

//reassign
isJSFun = false;
console.log(isJSFun);

//redeclaration ;
var isJSFun = true;
console.log(isJSFun);

//VARIABLE NAMING IN JS

//MEANING FULL NAME
//js camelCase =>

const companyName = 'META';
const phoneNumber = 8989898989;
const haveYouPassInExam = true;
let collegeName;
console.log(collegeName);
console.log(typeof collegeName);
collegeName = 'JEC';
console.log(collegeName);

let channel = null;
console.log(channel);
// 💡 POINTS TO REMEMBER THE TYPE OF NULL IS OBJECT
console.log(typeof channel);
// => 'string'

//NOTE typeof operator
const type = typeof companyName;
console.log(type);
console.log(typeof phoneNumber);
console.log(typeof haveYouPassInExam);

// 💡💡IMP CONCEPTS TILL LINE 84
//NOTE UNDEFINED VS NULL
//NOTE LET < CONST < VAR MAIN DIFFERENCE
//NOTE REASSIGN AND REDECLARATION
//NOTE VARIABLE INITIALIZATION
//NOTE TYPEOF OPRETOR TO CHECK THE TYPE OF DATA STORED IN A VARIABLE

//GITHUB LINK => https://github.com/riteshpatidar08/jec-js

//NOTE OPERATORS

//NOTE AIRTHMATIC OPERATORs
2 ** 2; //EXPONENTIAL
// % modules
// / divide

//NOTE ASSIGNMENT OPERATORs
let x = 5;
x = x + 5;
x += 5;

//NOTE COMPARISION OPERATOR
// >= , <= , >  ,<
//💫TODO  UNIQUE IN THE JS-

x == x; //LOOSE EQUALITY
x === x; //STRICT EQUALITY
// 5 != '5'  5 !== '5'
//NOTE LOGICAL OPERATORs
// &&  , || , !

//NOTE INTERVIEW >
//NOTE WHAT IS THE DIFFERENCE BETWEEN LOOSE EQUALITY AND STRICT EQUALITY ?

//string interpolation or template string ;
//my name is ritesh
const firstName = 'ritesh';
const intro = 'my' + 'name' + 'is' + firstName;
console.log(intro);
const newIntro = `my name is ${firstName}`;
console.log(newIntro);

//falsy values and truthy values

// 0,'',null,undefined , -0
// !0 and !'' => truthy

if (' ') {
  console.log('truthy value');
} else {
  console.log('falsy value');
}

//interaction function
// alert('hello');
// const agee = prompt('enter your age');
console.log(typeof agee);

console.log('number...', Number(age));
console.log(Boolean('true'));
console.log(String(true));

// const isJsFun = confirm('are you learing js');
// console.log(isJsFun);

//NOTE TYPE CONVERSION AND COERSION
const num = '5';
const strNum = +num;
console.log(typeof strNum);
console.log(laptop);

//case aeiou => vowels //consonent

// switch(){
//     case :
// }

//NOTE DAY 3