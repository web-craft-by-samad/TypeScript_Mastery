/*
==> Defination : 

1.⚙️ Object : 
  In TypeScript, an object type represents a structure that describes the shape of an object — what properties it has, what types those properties are, and whether they’re optional or not.

  It’s written using curly braces {}.

2.⚙️ Literal :
  A literal type is a type that represents exact values instead of broad types like string or number.


3.⚙️ Optional : 
 Sometimes, an object property may or may not exist.
 In TypeScript, you mark such properties with a ? after the property name. 

*/

type object1 = {
    employee_name: string;
    employee_age: number;
    employee_rank: number;
    employee_junior: boolean;
}

let object1 = {
    employee_name: 'samad',
    employee_age: 30,
    employee_rank: 8,
    employee_junior: false
}

//✅ Pass it as a parameter directly (inline type)

function newEmployee(newAdd: {
    employee_name: string;
    employee_age: number;
    employee_rank?: number;
    employee_junior: boolean;
}) {
    console.log(`Name: ${newAdd.employee_name}`);
    console.log(`Age: ${newAdd.employee_age}`);
    console.log(`Rank: ${newAdd.employee_rank}`);
    console.log(`Is Junior: ${newAdd.employee_junior}`);
}

// Call it
let newJoining = newEmployee({
    employee_name: "Ataus Samad",
    employee_age: 25,
    employee_rank: 2,
    employee_junior: false
});

console.log(newJoining)

// ✅ Use a Type Alias (reusable and cleaner)

function newEmployee2(newAdd: object1) {
    console.log(`Name: ${newAdd.employee_name}`);
    console.log(`Age: ${newAdd.employee_age}`);
    console.log(`Rank: ${newAdd.employee_rank}`);
    console.log(`Is Junior: ${newAdd.employee_junior}`);
}

let newJoining2 = newEmployee2({
    employee_name: "kodu ajad",
    employee_age: 34,
    employee_rank: 20,
    employee_junior: true
});

console.log(newJoining2)