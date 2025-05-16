// let sim = 100;
// console.log(sim);
// let simm, farhan, kaustubh, shushi;
// simm = "One hundreds"
// farhan= " Twoo hundreds"
// kaustubh = "Three hundreds"
// shushi = "Four hundreds"
// console.table([simm, farhan, kaustubh, shushi]);


// Practice

const mySym = Symbol("key1");

const jsUser = {
    name : "Farhan",
    "Fullname" : "SAyed",
    age : 17,
    emailid : "Farhansayed54@gmail.com",
    "Email2" : "Farhansayed54@gmail.com",
    [mySym] : "mykey1"
}

const jsUser2 = {
    name : "Farhan",
    "Fullname" : "SAyed",
    age : 17,
}

Object.freeze(jsUser.emailid)



// console.log(jsUser);
// console.log(jsUser.name);
// console.log(jsUser["Fullname"]);
// console.log(jsUser["Email2"]);
// console.log(jsUser.age);
// console.log(jsUser.emailid);
// console.log(jsUser[mySym]);
// console.log(mySym);
// console.log(jsUser2);
// console.log(jsUser2.name);
// console.log(jsUser2["Fullname"]);



