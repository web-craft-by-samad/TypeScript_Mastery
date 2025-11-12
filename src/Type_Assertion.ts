/*
==> ⚙️ 1. What is Type Assertion?

It’s a way to override TypeScript’s inference when we are certain about the actual type of a value but TypeScript can’t detect it automatically.

==> ⚙️ 2. Why Type Assertion is Used

TypeScript’s type inference is powerful, but sometimes it can’t figure out exactly what type a variable is.

Example scenarios:
1.When data comes from external sources (like APIs, DOM, JSON files, etc.).
2.When a union type (e.g. string | number) needs to be treated as one specific type.
3.When narrowing a type in DOM manipulation.
4.When migrating JavaScript → TypeScript and you know the type better than the compiler.

==> ⚙️ Two Syntaxes for Type Assertion

let value = someUnknownValue as string;
let value2 = <string>someUnknownValue2;


*/

// Example 1: Asserting an unknown Type

let value : unknown = "Bill gates"

let strLength = (value as string).length
console.log(strLength)



// Example 2: Asserting When Parsing JSON

const json = '{"name" : "samad" , "age" : 26}'
const user = JSON.parse(json) as {name:string,age:number}
console.log(user.name)
console.log(user.age)
console.log(user)



// Example 3: Narrowing Union Types

type ID = string | number ;

function printID (id:ID){
    if (typeof id === "string"){
        console.log(id.toUpperCase())
        console.log(id.length)
    }
    else{
        const num = id as Number
        console.log(num.toString().length)
    }
}

let showValue = printID('abcdef')
let showValue2 = printID(1234)



// Example 4: DOM Element Assertions

const input = document.querySelector("input");

const inputElement = document.querySelector("input") as HTMLInputElement;
console.log(inputElement.value);


