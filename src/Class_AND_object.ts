class Animal {
    name: string ;
    species: string ;
    sound: string


    constructor(name: string, species: string, sound: string) {
        this.name = name,
        this.species = species,
        this.sound = sound
    }

    makeSound () {
        console.log(`the ${this.name} is making sound like ${this.sound} and it's from ${this.species} species`)
    }

}

const Dog = new Animal('gangstar','dog','wolff')
const Cat = new Animal('pookie','cutipie','miaoouu')

console.log(Dog.name)
Dog.makeSound()
Cat.makeSound()

// ---------
class Employee {
    constructor(public name : string , public Id : number , public location : string , public icActive : boolean ){}

    AboutEmployee () {
        console.log(`Sir/Mam ${this.name} . Your ID number is ${this.Id} and you are working at ${this.location} branch`)
    }
}

const Employee1 = new Employee('Raju',4004,"motijhil",true)
Employee1.AboutEmployee()