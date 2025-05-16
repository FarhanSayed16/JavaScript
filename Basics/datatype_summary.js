// Data-types:-
// 1) Premitive --- changable

// const userId = '123'
// console.log(typeof (userId), userId);
// let result;
// // use of symbol 

const id = Symbol('123')
console.log(typeof (id), id);
const newid = Symbol('123')
console.log(typeof (id), id);
console.log(id === newid);

// //'123'

// // 2) non - premitive ----- non changable

const heros = ["Ironman", "Captain-America", "Thor"]
console.log(typeof (heros), heros);
let myObj ={
    name : "Farhan",
    sname : "Sayed",
    age : 30
}
console.log(typeof (myObj), myObj);

const myFunction = function(){console.log("HEllo Simran")}
console.log(myFunction);

//==================================++++++++++++++++++++++++

// stack and heap

// stack ----> premitive   heap -----> Non- premitive

// stack mai values copy hote hai
// heap pe values change ho jate hai

//stack------------>.
let userOne = "Farhan"


let usertwo = userOne; // farhan

usertwo = "Simran"
console.log(userOne);
console.log(usertwo);

// heap----->

let userThree = {
    name: "Farhan",
    age: 30
}
let userFour = userThree; // name, age 
userFour.name = "Simran"
console.log(userThree);
console.log(userFour);