const add = (value1:number|string , value2:number|string) => {
    if (typeof value1 === "number" && typeof value2 === "number") {
        return value1+value2
    }
    else{
        return value1.toString() + value2.toString()
    }
}

console.log(add(3,5))
console.log(add('2','1'))

//---