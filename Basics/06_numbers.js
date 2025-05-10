const score = 100;
console.log(typeof(score),score);

const balance = new Number (1000);

console.log(balance);
console.log(balance.toString().length);
console.log(typeof(balance.toString()))
console.log(balance.toFixed(2));
console.log(balance.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // For indian values of money 

//++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(10,12,32,12,9));
console.log(Math.max(10,12,32,12,9));
console.log(Math.random());
console.log(Math.random()*10+100);
console.log(Math.floor(Math.random()*10+1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1)+min));

