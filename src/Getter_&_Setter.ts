/*
==> ⚙️ In TypeScript (and JavaScript), getters and setters are special methods inside a class that allow you to:
    1.Control how a property is read → getter
    2.Control how a property is changed → setter
    3.Add validation, transform data, make fields private, and protect the internal state.
    4.They make your class safer, cleaner, and more flexible.
*/ 


//Example 1: Super Basic case of GETTER and SETTER 

class User {
   private _name : string = "";   // cannot be accessed directly.

    set name(value:string){
        this._name = value        // setter validates and stores the value
    }
    
    get name(){
        return this._name         // getter returns the value
    }

}

const newUser = new User()
newUser.name = 'samad'
console.log(newUser)

// Example 2: Read-only Property using Only Getter

class Product {
    private _createdAt = new Date()

    get createdAt(){
        return this._createdAt
    }
}

const time = new Product()
console.log(time)

// Example 3: Setter with Automatic Formatting

class Student {
    private _email : string = '';

    set email(value:string){
        this._email = value.toLowerCase().trim()
    }

    get email(){
        return this._email
    }
}

const student1 = new Student()
student1.email = "SHFjfg@GMAIL.coM"
console.log(student1)

//Example 4: Using Getters as Computed Properties

class Ractangle {

    constructor(private width : number , private height:number){}

    get area(){
console.log(defineArea)
        return `Area is : ${this.height * this.width}`
    }
}

const defineArea = new Ractangle(12,22)
console.log(defineArea)
console.log(defineArea.area)