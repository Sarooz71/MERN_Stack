// Template Literals

const name = "Saroj Lama";
let age = 20;
let address = "Kathmandu";

console.log(`My name is ${name}. i am ${age} years old. i like in ${address}`);


// Object Destructuring 

const course = {
    title : "MERN Stack",
    Duration : "3 Months",
    Price : 2500
};
console.log(course);


// Array Destruction

const data = ["Kathmandu", 98433, "Grade A"];
const[myAdress, myNumber, myValue] = data ;

console.log(myAdress);
console.log(myNumber);
console.log(myValue);

// Spread Operator (...)

const profile = {
    name : "Saroj Lama",
    age : 21,
    address : "Kathmandu"
}

const user = {
    email : "lamasaroj01@gmail.com",
    password : 12345 
}

const userData = {
    ...profile,
    ...user
};

console.log(userData);



