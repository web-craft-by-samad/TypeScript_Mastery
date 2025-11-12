/*
==> ⚙️ A Union Type 
       1. allows a variable to hold more than one possible type.

       2. A | B → can be A or B

       3. Either this or that

==> ⚙️ An Intersection Type 
        
        1.combines multiple types into one. It means the value must satisfy all included types at the same time

        2.A & B → must be A and B

        3.This and that together
*/ 



// ✅  Example 1 — Union in Function Parameters

type ID = {id : number | string} ;

const user1 : ID = {
    id : "A503"
}
const user2 : ID = {
    id : 2002
}

function useID(idNo : number | string , name:string) {
    console.log(`Hellow, ${name}.! Your personal id no is ${idNo}`)
}

const Id = useID("A503","lulang")
const Id2 = useID(100023,"dudang")


// ✅  Example 2 — Type Narrowing with typeof

function getLength (vlaue : number | string ) {
    if (typeof vlaue === "string"){
        console.log(`Leangth is ${vlaue.length}`)
    }
    else {
        console.log(`leangth is ${vlaue.toString().length}`)
    }
}

let new2 = getLength("abcd")
let new3 = getLength(12345)

// ✅  Example 3 — Union with Custom Type Aliases

type Success = { status: "success"; data: string };
type ErrorResponse = { status: "error"; message: string };

type ApiResponse = Success | ErrorResponse;

const response1: ApiResponse = { status: "success", data: "Loaded" };
const response2: ApiResponse = { status: "error", message: "Failed" };


// ---------- INTERSECTION --------------//

// ✅  Example 1 — Basic Intersection


type Person = { name: string };
type Employee = { employeeId: number };

type Staff = Person & Employee;

const staff1: Staff = {
  name: "Ataus Samad",
  employeeId: 123,
};



// ✅  Example 2 — Intersection of Object and Extra Fields


type Contact = { email: string };
type Developer = { skills: string[] };

type DevProfile = Person & Contact & Developer;

const dev: DevProfile = {
  name: "Samad",
  email: "samad@example.com",
  skills: ["HTML", "CSS", "TypeScript"],
};



// ✅  Example 3 — Intersection with Union (Advanced)


type Admin = { role: "admin"; access: string[] };
type User = { role: "user"; username: string };

type Account = (Admin | User) & { id: number };

const account1: Account = { id: 1, role: "admin", access: ["dashboard"] };
const account2: Account = { id: 2, role: "user", username: "samad" };



/* 🤖------Real-Life Example — Combining Both-------🤖

   Here we are going to calculate the area of some giometry shape 
   it's fun , lets gooo...⚙️

*/

type circle = {
    shape : "circle",
    radius : number 
}

type rectangule = {
    shape : "rectangle",
    length : number ,
    width : number,
    height : number
}

type Shape = circle | rectangule

function CalculateArea(Area:Shape) {
    if(Area.shape === "circle"){
        return `The totol area of the circle is ${Math.floor(Math.PI * Area.radius ** 2)}`
    }
    else {
        return `The totol area of the ractangle is ${Area.length * Area.height * Area.width}`
    }
}

console.log(CalculateArea({shape:"circle",radius:4.6}))
console.log(CalculateArea({shape:"rectangle",length:12,height:10,width:8}))