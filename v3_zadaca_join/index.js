//isprogramirati funkciju join
//spaja elemente polja u jedan string
//na nacin da ih povezuje zadanim tokenom


let array = [1, 2, 2, 2, 43]
let token = " - "


join = (array, token) => {
    let reduced = array.reduce( (accumulator, currentValue) => {
        return String(accumulator) + String(token) + String(currentValue) 
    })
    return reduced
}

console.log("res: ", join(array, token))

module.exports = {join, array, token}