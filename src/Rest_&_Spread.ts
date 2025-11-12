/*
==> ⚙️ The rest operator collects multiple elements (like parameters or properties) and puts them into a single array or object.

==> ⚙️ The spread operator takes elements from an array or object and “spreads” them out into individual elements or properties.
*/


/**
 * ✅ Rest Operator (destructuring array)
 */

const number = [1,2,3,4,5,6,7,8]
const [first,second,...rest] = number

// console.log(first)
// console.log(second)
// console.log(rest)

// ✅ object rest 
const user1 = {
    name:'samad',
    age : 20,
    country : 'bangledesh',
    skill : 'Full Stack developer'
}

const {name,...details}=user1

// console.log(name,details)

// ✅ Mixed Parameters + Rest

function greet(message: string, ...names: string[]) {
  names.forEach((name) => console.log(`${message}, ${name}!`));
}

greet("Hello", "Ataus", "Samad", "John");

// ✅ Function Parameters

function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10


// 🔐 SPREAD operator [combined type]

const fruits = ["apple","banana"]
const moreFruits = ["tomato","papaya"]

const spreadFruits = [...fruits,...moreFruits]
console.log(spreadFruits)

// ✅ copying array 

const original = [1,2,3,4,5,'numbers']
const copyOriginal = [...original]

copyOriginal.push(12)
copyOriginal.push('a_String')

console.log(copyOriginal)

// ✅ combined object 

const user2 = {
    group : "A2",
    nationality : 'australia',
    position : 'senior developer',
    years_of_experience : 5
}

const moreInfo = {
    name : "john cina",
    age : 45
}

const combinedObj = {...user2,...moreInfo}

console.log(combinedObj)



// ✅ Real-Life Use Case Example

type User = {
  name: string;
  age: number;
  skills: string[];
};

// Using Spread
const baseUser: User = { name: "Ataus", age: 22, skills: ["HTML", "CSS"] };
const updatedUser = { ...baseUser, skills: [...baseUser.skills, "TypeScript"] };

console.log(updatedUser);
// { name: "Ataus", age: 22, skills: ['HTML', 'CSS', 'TypeScript'] }

// Using Rest
const { age, ...profile } = updatedUser;
console.log(profile);
// { name: 'Ataus', skills: [ 'HTML', 'CSS', 'TypeScript' ] }