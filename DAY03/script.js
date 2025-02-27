//FUNCTIONS
const result = greet();
console.log(result);
//FUNCTION DECLARATION
function greet() {
  return 'hello';
}

//FUNCTION EXPRESSION
// console.log(sum(2,3))

const sum = function (a, b) {
  return a + b;
};

//NOTE arrow function
//single line
//multiline

const arrowFn = (a) => a;
console.log(arrowFn(4));

const anotherSum = () => {
  const a = 5;
  const b = 5;
  return a + b;
};
console.log(anotherSum());

console.log('hello');

//1.git init to initialize git in the current folder its started to track changes in you current working directory

//git status => used to check the untracked files

//Staging area =>

//git add script.js

//git commit -m "commit-message"

//a code version is created in the localrepo

//default parameter ;

function substract(b, a = 2) {
  console.log(a);
  return b - a;
}
console.log(substract(5));

//NOTE NON_PRIMITIVE datatypes :
//NOTE ARRAY AND OBJECT

//to print the methods availabe in the console object
console.log(console);

const multiply = (a, b) => a * b;

//array =>

const randomArr = [true, 'string', 54, multiply];

// console.log(randomArr[3](3,4))

console.log(randomArr.length);
console.log(randomArr[randomArr.length - 1]);
console.log(typeof randomArr);

// console.log([] == []) ;
// console.log(5 == 5)

if ([]) {
  console.log('hello');
}

//note obj

const myDetails = {
  firstName: 'ritesh',
  'two hundred': 200,
  address: {
    houseNO: 78,
    pincode: 302018,
    city: 'jaipur',
  },
  friends: ['aman', 'shubham'],
  getfullDetails: function () {
    return 'my name is ritesh';
  },
};

//how to accesss the particular key value

//DOT NOTATION AND BRACKET NOTATION

//NOTE DOT NOTATION
console.log(myDetails.firstName);
console.log(myDetails.address.pincode);
console.log(myDetails['two hundred']);

//BRACKET NOTATION :
const fn = 'firstName';
console.log(myDetails['firstName']);
console.log(myDetails['address']['pincode']);

//first you have to ask what you want to know like firstName , address
//  if(input === 'address'){

//  }

//NOTE update a key value

myDetails.firstName = 'Utsav';
console.log(myDetails.firstName);

const consolee = {
  log: function (input) {
    console.log(input);
  },
};

consolee.log('hello');

//Array of objects

const students = [
  { name: 'Ritesh', email: 'ritesh@gmail.com' },
  { name: 'Aman', email: 'aman@gmail.com' },
];


//create a empty car object
//then set the keys carName , model ,yearMake 
//define a method of getCarDetails() ;

const car = {
    name  : 'Honda city' ,
    model : 'v-tech' ,
    yearMake : 2025 ,
    getCarDetails : function(){
        console.log(this)
    }
}

console.log(car.getCarDetails())


