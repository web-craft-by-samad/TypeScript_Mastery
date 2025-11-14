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