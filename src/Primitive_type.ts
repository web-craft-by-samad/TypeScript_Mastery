/*
==> 1.Primitive types are the basic, immutable building blocks of data in TypeScript (and JavaScript).

==>2.Primitives type in TS are - number,string,boolean,null,undefined,sybol,biginit,any and unknown

*/ 

// type by type explenation (string,number,boolean)
const name : string = "Samad";
const age : number = 23;
const isDeveloper : boolean = true;

let messege = `hellow, I am ${name} working as a developer . i am ${age} years old `

console.log (messege)

/*
Type Inference (Auto-detection)

==>TypeScript automatically infers types if we assign a value
==>If you don’t assign a value and no type is given, it becomes any by default (avoid this by enabling noImplicitAny).
*/


let rank = 1;      // inferred as number
let Winner = "Samad"; // inferred as string
let flag = true;    // inferred as boolean


/* 
Null type

==>Represents intentional absence of a value.By the rule of TypeScript Variable explicitly set to null.

==> Use case : When something is intentionally empty — e.g., reset a variable or indicate no object.
 */

let emptyValue :null = null
console.log(emptyValue)



/* 
Undefined Type 

==> Variable declared but not yet assigned.
==> Use case : To indicate “not assigned yet.”
*/

let notDefined : undefined = undefined;
let someThings :(string|undefined);


console.log(typeof someThings)
console.log(someThings) //now it's undefined , no value assigened yet


someThings = "now we add some string value"
console.log(typeof someThings)
console.log(someThings) //but now it's defined . some string passing into the valriable

/*
any type

==> Disables type checking for that variable.We can assign any value.
==> Use case: Gradual migration from JS → TS; dynamic data; prototyping.
==> Caution: Avoid overusing it—it removes TypeScript’s safety.
*/ 

let anyThings :any = 10;
anyThings = "samad"
anyThings = false

/**
 * Type Conversion and Coercion
 */

let str = "10";
let num = Number(str); // convert to number
let bool = Boolean(num); // convert to boolean