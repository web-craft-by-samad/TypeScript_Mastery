/*
==> ⚙️ A Type Alias in TypeScript is a way to create a new name for a type.
It’s like creating a custom data type that makes your code more readable, reusable, and maintainable.
*/



// ✅ Example 1 — Primitive Type Alias

type Id = number;
type isDeveloper = true;

let name: string = 'samad'
let isDeveloper: boolean = true

// ✅ Example 2 — Object Type Alias

type user1 = {
    name: string,
    age: number,
    isAdmin: boolean
}

let newUser: user1 = {
    name: "samad",
    age: 25,
    isAdmin: true
}

// ✅ Example 3 — Type Alias with Optional Properties

let student1: {
    name: string,
    age: number,
    class: number,
    dept?: string,
    isPresent: boolean
} = {
    name: "Kodu",
    age: 27,
    class: 12,
    isPresent: false

}

//  ✅ Example 4 — Union Type Alias with function

type isActive = "active" | "in-active" | "banned"

function student2(activeStatus: isActive) {
    if (activeStatus === "active") {
        return "student performence is good enough"
    }
    else if (activeStatus === "in-active") {
        return "student performens is not good"
    }
    else {
        return "studend is suspend"
    }
}

let studentCondition = student2("active")
console.log(studentCondition)  //student performence is good enough


// Example 5 — Array Type Alias

type StringArray = string[];
type NumberArray = Array<number>;

const names: StringArray = ["Ataus", "Samad"];
const scores: NumberArray = [10, 20, 30];


// ✅ Example 6 — Intersection Type Alias


type person = { name: string }
type contact = { email: string }
type Employee = person & contact & { id: number }

let newEmployee: Employee = {
    name: "cornot mcgragor",
    email: 'mcgragor23@gmail.com',
    id: 123
}

console.log(newEmployee)


// ✅ Example 7 — Type Alias with Generics

type ApiResponse<T> = {
    status: number;
    data: T
}

const userResponse: ApiResponse<{ name: string, id: number, isActive: boolean }> = {
    status: 200,
    data: { 
        name: 'alex', 
        id: 2002, 
        isActive: true 
    },
}

// ✅ Example 8 — Nested Type Aliases

type Address = {
  city: string;
  country: string;
};

type Customer = {
  id: number;
  name: string;
  address: Address;
};

const c1: Customer = {
  id: 100,
  name: "Samad",
  address: { city: "Dhaka", country: "Bangladesh" },
};
