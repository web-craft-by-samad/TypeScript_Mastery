class Person {
    name : string;

    constructor(name:string){
        this.name = name
    }
}

class Student extends Person {
    constructor ( name : string){
        super(name)
    }

    doStudy(hour:number){
        console.log(`${this.name} do study for ${hour}h`)
    }
    
}

class Teacher extends Person {
    constructor (name:string){
        super(name)
    }

    takeClass(hour:number){
        console.log(`${this.name} is taking class for ${hour}h`)
    }
}


const getUserInfo = (user:Person) => {
    if(user instanceof Student ){
        user.doStudy(8)
    }
    else if(user instanceof Teacher){
        user.takeClass(5)
    }
};

const student1 = new Student("kamrul")
// student1.doStudy(8)
const teacher1 = new Teacher("Molla")
// teacher1.takeClass(4)

getUserInfo(student1)
getUserInfo(teacher1)
