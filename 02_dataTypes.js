// Use of strick
"use strict"; // treat all js code as newer version
// alert("jhello") 
// // This function dosent work in node

//data type
let farhan = null; //Null is treated as object in js || 
let simran;
console.log(typeof simran);
console.log(typeof farhan);

let kaustubh = 523;
let mymarks=(typeof "number");
console.log(mymarks);

let Amiwinninfcurrently = false;
console.log( typeof Amiwinninfcurrently, Amiwinninfcurrently);

console.table([farhan,simran,kaustubh,Amiwinninfcurrently])



function test(){

    return {
        a:1
    };
}
console.log(typeof test());
