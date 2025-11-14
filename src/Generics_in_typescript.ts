/*
==> ⚙️ Generics are like variables for types.
        They allow you to create reusable components (functions, classes, interfaces) that can work with any data type, while still maintaining strong type safety.

==> ⚙️  Generics let you write a single piece of code that can work with different types without losing type checking.  


*/



function identity<T>(value : T):T{
    return value
}
const number = identity<number>(10);
const string = identity<string>('alexander')

// Multiple Generic Parameters

function combination<X,Y>(obj1:X,obj2:Y):X&Y{
    return {...obj1,...obj2}
}

const firstObj = combination({name:'samad'},{age:23})
const secondObj = combination({
    name:'samad',
    dept:'wpe',
    roll:22050301004
},{
    age:23,
    email:'ataussamad1111@gmail.com',
    mobile:12345677,
})

console.log(firstObj)
console.log(secondObj)

// Generics with Constraints (extends)

interface lenghwise {
    length : number ; 
}

function logLength<T extends lenghwise>(item:T):void{
    console.log(item)
}

logLength([1,3])