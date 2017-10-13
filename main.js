import Producer from './producer.js';
import Subscriber from './subscriber.js';

const input = document.getElementById("input");
const output = document.getElementById("output");

let subscribers = [];

// Creating the subscribers.
for (let i = 0; i < 10; i++) {
    subscribers.push(new Subscriber(i))
}

// Setting the function that will be called everytime the producer has new data.
let producer = new Producer((data) => {
    subscribers.forEach(sub => {
        sub.onChange(data);
    });
});

// Simulating data change.
input.onkeyup = (e) => {
    producer.newData(e.target.value)

    output.innerHTML = "";

    subscribers.forEach(sub => {
        output.innerHTML += sub.toString() + '\n';
    });
}