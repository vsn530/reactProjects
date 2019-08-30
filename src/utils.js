console.log('utils.js is running !!!');

export const square = (x)=>x*x;

export const add=(a,b)=>a+b;

const subtract =(a,b)=>a-b;

export default subtract;

//export {subtract as default};

/* Copied from app.js 
import isSeniorPerson, {isAdult,canDrink,fullName,fullNameReversed} from './person.js';
import subtract, {square,add} from './utils.js';

//import './person.js';
console.log('app.js is running!!!');

//Person.js functionalities
console.log(fullName('srinivas','chowdary'));
console.log(fullNameReversed('srinivas','chowdary'));
console.log(isAdult(31));
console.log(canDrink(18));
console.log(isSeniorPerson(66));
console.log('=========<>==========<>============<>=======');








console.log(square(10));

console.log(add(12,21));

console.log(subtract(20,5));
console.log('=========<>==========<>============<>======='); */