// const age = prompt('age')
//
// function checkAge(age) {
//     return  age >= 18 ? true : confirm('parents allowed?')
// }
// function checkAge2(age){
//     return (age >= 18) || confirm('parents allowed?')
// }
// checkAge(age)
// checkAge2(age)

// function min(a, b) {
//     if(a < b)
//         return a
//     return b
// }
// alert(min(5, 8))

function pow(x, n) {
    let result = 1
    while (n > 0){
        result *=x
        n--
    }
    return result
}
alert(pow(5, 3))