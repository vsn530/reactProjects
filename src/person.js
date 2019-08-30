console.log('person.js is running');

export const fullName  = (firstName,lastName) => firstName+' '+lastName;

export const fullNameReversed = (firstName,lastName)=> lastName +' '+ firstName;

export const isAdult = (age)=>age>20?'adult':'Not an adult';

export const canDrink = (age)=> age>21?'can drink':'Less than accepted age to drink';

//export {fullName,fullNameReversed,isAdult,canDrink};

//const isSeniorPerson = (age)=> age>60?'Senior citizen':'Not a senior citizen';

export default (age)=> age>60?'Senior citizen':'Not a senior citizen';
