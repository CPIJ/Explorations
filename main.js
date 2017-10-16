import Person from './person.js';
import { sayHello, sum } from './functions.js'

const person = new Person({
    sayHello,
    sum
}); 

window.person = person;