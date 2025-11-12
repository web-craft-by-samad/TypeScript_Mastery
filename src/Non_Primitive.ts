/*
==> Non-primitive types (also known as reference types) are complex data structures that can hold multiple values or properties.

==> Examples: object, array, tuple, function, class, Date, Map, Set, RegExp, etc.

*/

/*
"Object" type ==>
*/

// ✅ Basic Object
let person: {
    name: string,
    position: number,
    isDeveloper: boolean
} = {
    name: 'Ataus Samad',
    position: 1,
    isDeveloper: true
}

// ✅ Optional & readonly properties
let employee1: {
    developer: string;
    age?: number;
    readonly isMarrid: boolean
} = {
    developer: "alex",  //can be re-assigned 
    isMarrid: true  //can't be change
    //  age is now optional
}

employee1.developer = "tom"
console.log(employee1)  ////developer name changed (tom)


// ✅ Nested Object
let user1: {
    name: string;
    age: number;
    isDeveloper: boolean;

    depertment: {
        deptName: string;
        deptCode: number;
        deptClosed: boolean;
    };

    phoneNo: number
}

user1 = {
    name: 'Boby',
    age: 20,
    isDeveloper: true,

    depertment: {
        deptName: "typeScript",
        deptCode: 1234,
        deptClosed: false
    },

    phoneNo: 123456789
}

console.log(user1)

// ✅ Array type

let numbers: number[] = [1, 2, 3, 4]
let vowel: string[] = ['a', 'b', 'c', 'd']
let name: Array<string> = ['alex', 'jasmin', 'undertaker']
let mixedArray: (string | number | boolean)[] = [1, 'roman', 2, 'hanry', true, false, 2020]
let readonlyArray: readonly string[] = ['ab', 'cd'] //unchangeable

type Product = {
    name: string,
    price: number,
    expired: boolean
}

let newProduct: Product[] = [
    {
        name: 'axe',
        price: 300,
        expired: false
    },
    {
        name: 'boat',
        price: 250,
        expired: true
    },
    {
        name: 'bottleOpener',
        price: 100,
        expired: false
    },
]

console.log(newProduct)



// ✅ Tuple type
const user2: [string, number, boolean, string] = ['Dog', 30, true, 'cat']



// ✅ function type : Basic
function add(num1: number, num2: number): number {
    return num1 + num2
}
let newValue = add(2, 3)
console.log(newValue)


// ⚙️ function type : union return

function getStatus(isActive: boolean): string | null {
    return isActive ? "Active" : null;
}

let userStatus = getStatus(true)
console.log(userStatus)


// ⚙️ function type : default parameters

function greet(name: string, message: string = "Hello") {
    return `${message}, ${name}!`;
}

let newVisitor = greet('samad')
console.log(newVisitor)

/*
✅ Class type 

==>A class is a blueprint for creating objects. It supports encapsulation, inheritance, and methods.

==> Use case: Complex applications — modeling entities, logic encapsulation, OOP.
*/

class Person {
    name : string ;
    position : number ; 

    constructor (name:string,position:number){
        this.name = name;
        this.position = position;
    }

    greet () : string {
        return `Hellow ${this.name} , you earned ${this.position} place. Congratulation !!`
    }
}

const person1 = new Person('khabib',1)
console.log(person1.greet())

// some special method 🔻

// ✅ Date

let today: Date = new Date();
console.log(today.toDateString());


// ✅ Map

let userMap = new Map<number, string>();
userMap.set(1, "Ataus");
userMap.set(2, "Samad");
console.log(userMap.get(1));

// ✅ Set

let uniqueNumbers = new Set<number>([1, 2, 2, 3]);
console.log(uniqueNumbers); // {1, 2, 3}

// ✅ RegExp

let pattern: RegExp = /^[A-Za-z]+$/;
console.log(pattern.test("Hello")); // true