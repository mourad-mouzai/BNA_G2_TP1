"use strict";
// tcs --init 
// to generate tsconfig.json
// in tsconfig.json add: "rootDir": "./src", and "outDir": "./dist",
// create those two dirs: dist and src,
// add index.html in src
// create tp1.ts in src
// in index.html add befor </body>:
// <script src="../dist/tp1.js"></script>
// make sure that the script added, is a .js, and its path is in dist
// in the terminal, do: tsc, or tsc --wathc
let id = 1;
let firstName = "Mourad";
// console.log(`My first name is ${firstName}`)
let isValide = true;
let x = "name";
x = 1;
//array
let nums = [1, 2, 3];
let nums2 = [1, "A", true];
//tuple
let person = [2, "mourad", "mouzai", 41];
let person2 = [undefined, "mourad", "mouzai", 41];
let persons = [
    [1, "Yasmine"],
    [2, "Manel"]
];
//union
let age = 12;
let age2 = '12';
let person3 = [null, "mourad", "mouzai", 41];
//enum
var vehicule;
(function (vehicule) {
    vehicule[vehicule["cars"] = 1] = "cars";
    vehicule["truck"] = "volvo";
    vehicule["bycicle"] = "vtt";
})(vehicule || (vehicule = {}));
console.log(vehicule.truck);
const admin = {
    id: 1,
    name: 'Manel'
};
//rry of objects
const admins = [
    {
        id: 1,
        name: 'Manel'
    },
    {
        id: 2,
        name: 'Manel2'
    },
    {
        id: 3,
        name: 'Manel3'
    },
];
//or
const admin2 = {
    id: 1,
    name: 'Manel'
};
let a = 1;
//
let value = 100;
let val2 = value;
let val3 = value;
//function
function adding(a, b) {
    return a + b;
}
console.log(adding(2, 4));
//void function
function show(name) {
    console.log(`My first name is ${name}`);
}
show("mourad");
//arrow function
const send = (name) => {
    //name != null ? console.log(`My name is ${name}`) : console.log(`My name is nemo`)
    name ?
        console.log(`My name is ${name}`) :
        console.log(`My name is nemo`);
};
send('');
const adminI = {
    id: 1,
    name: "Yasmine"
};
const setUser = (id, name) => {
    const user = {
        id: id,
        name: name
    };
    return user;
};
console.log(setUser(3, "manel"));
//class
class Student {
    constructor(_id, _name) {
        this.id = _id;
        this.name = _name;
        console.log(this.id);
    }
    admis() {
        return `${this.name} est admise`;
    }
}
const manel = new Student(1, 'Manel');
console.log(manel);
console.log(manel.admis());
