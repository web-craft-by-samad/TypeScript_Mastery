class Parent {
    name: string;
    age: number;
    address: string
     constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address
    }
}

// ------
class Student extends Parent {

    AboutStudent(duration: number, father: string) {
        console.log(`${this.name} is now ${this.age} years old and the address of the student is ${this.address} . And he work in part time for ${duration}h . His father is ${father}`)
    }
}

// --------
class Student2 extends Parent {
    mother : string ; 
    postOffice : string;

    constructor(name: string, age: number, address: string , mother:string,postOffice:string){
        super(name,age,address)
        this.mother=mother;
        this.postOffice=postOffice
    }

    AboutStudent(duration: number, father: string) {
        console.log(`${this.name} is now ${this.age} years old and the address of the student is ${this.address} . And he work in part time for ${duration}h . His father is ${father} and his mother is ${this.mother} also the post office is ${this.postOffice}`)
    }
}





let student1 = new Student('rockyy', 20, 'gulshan') //
let student2 = new Student2('borkot', 27, 'bonani','Halima','motobi') //
student1.AboutStudent(8, 'FarukMia') //
student2.AboutStudent(10, 'Mosaddek') //