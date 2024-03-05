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

let id:number = 1
let firstName:string = "Mourad"

// console.log(`My first name is ${firstName}`)

let isValide:boolean = true
let x:any = "name"
x = 1

//array
let nums:number[] = [1, 2, 3]
let nums2:any[] = [1, "A", true]

//tuple
let person  : [number, string, string, number] = [2, "mourad", "mouzai", 41]
let person2  : [number?, string?, string?, number?] = [undefined,"mourad", "mouzai", 41]

let persons : [number, string][] = [
    [1, "Yasmine"],
    [2, "Manel"]
]

//union
let age: number | string = 12
let age2: number | string = '12'
let person3  : [number | null, string, string, number] = [null,"mourad", "mouzai", 41]

//enum
enum vehicule {
    cars = 1,
    truck = 'volvo',
    bycicle= 'vtt'    
}

console.log(vehicule.truck)

//objet
type Admin = {
    id: number
    name: string
}

const admin: Admin = {
    id: 1,
    name: 'Manel'
}

//rry of objects
const admins: Admin[] = [
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
]

//or
const admin2 : {
    id: number
    name: string
} = {
    id: 1,
    name: 'Manel'
}
let a:number = 1

//
let value: any = 100
let val2: number = value as number
let val3: string = <string>value

//function
function adding(a:number, b:number) :number{
    return a+b
}
console.log(adding(2,4))

//void function
function show(name: string): void{
    console.log(`My first name is ${name}`)
}
show("mourad")

//arrow function
const send=(name: null | string)=>{
    //name != null ? console.log(`My name is ${name}`) : console.log(`My name is nemo`)

    name?
    console.log(`My name is ${name}`):
    console.log(`My name is nemo`)
} 
send('')

//interfaces
// type Admin = {
//     id: number
//     name: string
// }

// const admin: Admin = {
//     id: 1,
//     name: 'Manel'
// }

interface adminInterface {
    readonly id: number;
    name: string;
    age?: number;
}
const adminI : adminInterface = {
    id: 1,
    name: "Yasmine"
}


//interface de function
interface setUserInterface{
    (id: number, name: string): adminInterface
}

const setUser : setUserInterface = (id: number, name: string ): adminInterface => {
    const user : adminInterface = {
        id: id,
        name: name
    };
    return user;    
}

console.log(setUser (3, "manel"))


//class
class Student {
    private id: number
    name: string
    age?: number

    constructor(_id:number, _name: string) {
        this.id = _id;
        this.name = _name;
        console.log(this.id)
    }

    admis() {
        return `${this.name} est admise`
    }
}
const manel = new Student(1, 'Manel')

console.log(manel)
console.log(manel.admis())

