//NOTE ARRAY METHODS
//NOTE METHODS WHICH MODIFIES THE ORIGINAL ARRAY(mutate)

//NOTE push method
//NOTE add new element to the last of the existing array
const arr = [1, 2, 3, 4, 5];

const pushMethodOutput = arr.push(7);

console.log(pushMethodOutput);
console.log(arr);

const popMethodOutput = arr.pop();
console.log(popMethodOutput, arr);

//NOTE  shift and unshift ;

const shiftOutput = arr.shift();
const unshiftOutput = arr.unshift(0);
console.log('shift method', shiftOutput);
console.log(arr);
console.log('unshift method :', unshiftOutput);
console.log(arr);

//includes (true or false) ;

const roles = ['admin', 'user'];

console.log(roles.includes('admin'));

//NOTE SLICE

const cars = ['creta', 'alto', 'scorpion', 'xuv', 'fortuner', 'innova'];

// slice(startIndex, endIndex) ;
// no of elements => endindex - startIndex
const slicedArray = cars.slice(2, 4);
// slicedArray.push('baleno')
console.log(slicedArray);
console.log(cars);

//variations cars.slice()  => create a shallow copy
//2. cars.slice(-n) => returns element equal to n
//3 cars.slice(n) => remove the n items
//4 cars.slice(2,6) => give the items between the start and end index (include the start index item , not inlcude the end index item)

//Splice , toSpliced(updated)
//NOTE - used to remove an element , replace or add new element

// splice(index,deleteCount , item1, item2)

// const tosplicedArray = cars.toSpliced(2,1)
// console.log(tosplicedArray);
// console.log(cars)

const splicedArray = cars.splice(2, 1, 'verna');

console.log(splicedArray);
console.log(cars);


// Qs. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

// create a library object then ,
// create a method called addBook when you call this method add a new book to the books variable.

//indexOf Method

console.log(cars.indexOf('forter'));

//at Method 
console.log(cars.at(3)) 

//forEach()
//map() and forEach() diffrence
//HIGHER ORDER METHODS
// forEach(callback)
//()=>{}
// function(data){

// }
const forEachOutput = [1,2,3,4,5].forEach((el)=>{
console.log(el * 2)
})
console.log(forEachOutput)

const mappedOutput = [1,2,3,4,5].map((el,index)=> {
    console.log(index , el)
return el * 2})
console.log(mappedOutput)


const category = ['electronics','stationary','fashion', 'electronics'] ;

const filteredOutput = category.filter((el)=> el === 'electronics')

console.log(filteredOutput)

const books = [{
    name : '',
    author : '' ,
    price : '',
    edition : ''
}]