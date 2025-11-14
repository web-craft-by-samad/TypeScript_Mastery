/*
==> ⚙️ An interface is a blueprint or contract that defines the shape of an object — meaning what properties, methods, and types that object should have.

==> ⚙️ It doesn’t create a real object or code at runtime — it’s only used during compile time to make sure your objects follow a specific structure.

==> ⚙️ Why Use Interfaces?
        Interfaces are used to:
        1.Enforce structure and type safety for objects.
        2.Make code easier to understand and maintain.
        3.Enable reusability (use the same structure across multiple places).
        4.Help with OOP (Object-Oriented Programming) concepts like inheritance.
        5.Improve auto-completion (IntelliSense) in VS Code.
*/


// Basic syntex 
interface interfaceName {
    propertiesName: string;
    anotherPeoperties: number;
    nextToAnother?: boolean;
}


// How its works 

interface studentInfo {
    name: string ;
    age : number;
    isActive : boolean;
    contanct ?: {
        email:string;
        mobileNo:number;
        inSocialMedia:boolean;
    };
    subject:string[]
}

let student1 : studentInfo ={
    name:'sakib al hasan',
    age : 32,
    isActive:true,
    subject : ['bangle','english','physics','chemistry']
}

console.log(student1.name)
