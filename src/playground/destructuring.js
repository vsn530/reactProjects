/* const person = {
    name:'srinivas',
    age:32,
    location:{
        city:'Hyderabad',
        temp:35
    }
};

const {name:firstName ='Anonymous', age} = person;
const { city,temp:Temperature} = person.location;


console.log(`${firstName} is ${age}`);

console.log(`its ${Temperature} in ${city}`); */

/* const book = {
    title:'Ego is the enemy',
    author: 'Ryan holiday',
    publisher:{
        name:'Penguin'
    }
}

const { title, author } = book;

const { name:publisherName = 'self-published'} = book.publisher;

console.log(publisherName); //Penguin or self-published */

//
// Array destructuring
//
/* const address = ['1299 s juniperstreet','philadelpia','pensylvania','19147'];

const [,,state='Newyork']= address;

console.log(`you are in ${state}`); */

const item =['Cofee (hot)','$2.00','$2.50','$2.75'];

const [itemtype,,medcost]= item;

console.log(`A medium ${itemtype} costs ${medcost}`);
