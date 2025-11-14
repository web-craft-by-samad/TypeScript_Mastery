/*
==> ⚙️ Access modifiers control who can access a class property or method.
They help you achieve:
       1. Encapsulation
       2. Security
       3. Controlled access
       4. Clean and maintainable code

==> ⚙️ TypeScript supports 3 access modifiers:

        ✔✅ public => Accessible from anywhere — inside class, subclasses, and outside the class

        ✔✅ private => Accessible only inside the same class.

        ✔✅ protected => Accessible inside the class AND inside subclasses,
        but NOT from objects outside.
==> ⚙️ And two special ones (not modifiers but related):
        ✔✅ readonly => Property can be read, but cannot be modified after initialization

        ✔✅ static => Belongs to the class itself, not the objects.
*/ 

//☑️ 1. public (Default)

class NameOfVhicles {
    public name :string ;

    constructor(name:string){
        this.name = name ;
    }

    greet(){
        console.log(`Great ! you bought ${this.name}`)
    }
}

const myNewCar = new NameOfVhicles('BMW');
myNewCar.greet()

//☑️ 2. private

class BankBlance {
    private banance : number = 0;

    deposite (amount:number){
        return this.banance = amount + this.banance
    }
}

const addnewBalance = new BankBlance()
addnewBalance.deposite(13)
addnewBalance.deposite(13)
addnewBalance.deposite(14)
console.log(addnewBalance)


//☑️ 3. protected

class Employee {
    public name : string;
    private age:number;
    protected balance : number;
    readonly location : string ;

    constructor(name:string,age:number,balance:number,location:string){
        this.name=name,
        this.age=age,
        this.balance=balance,
        this.location=location
    }
}

class Employee1 extends Employee {
    constructor(name:string,balance:number,age:number,location:string){
        super(name,balance,age,location)
    }
}

const employeeDetails =new Employee1('samad',20,22002,'shantidhara')
console.log(employeeDetails)



//☑️ Full Example with All Modifiers

class User {
  public name: string;
  protected email: string;
  private password: string;
  readonly id: number;

  constructor(id: number, name: string, email: string, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  public login(password: string): boolean {
    return this.password === password; // private access allowed here
  }
}

class AdminUser extends User {
  getEmail(): string {
    return this.email;  // ✔ protected accessible
  }
}



//☑️ Another Example

class bankAccout {
    readonly userId : number;
    usrName:string ;
    private userBalance : number;
    constructor (userId:number, usrName:string, userBalance:number){
        this.userId = userId;
        this.usrName = usrName;
        this.userBalance=userBalance
    }

    addBalance (balance:number ){
        this.userBalance = this.userBalance + balance
    }
}

const userBankAcc = new bankAccout(22020,'koduAjad',30)
console.log(userBankAcc)
userBankAcc.addBalance(100)
console.log(userBankAcc)