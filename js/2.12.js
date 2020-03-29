// let i = 3
// while (i){
//     alert(i--) // last 1
// }

// let i = 0
// while (++i < 5) alert(i) // 1,2,3,4
// while (i++ < 5) alert(i) //1,2,3,4,5

// for (let i = 2; i <= 10; i++){
//     if(i % 2 === 0)
//         alert(i)
// }

// let i = 0
// while (i < 3){
//     alert(i)
//     i++
// }

// let promptNum = prompt('enter num >100')
//
// while (promptNum < 100 && promptNum != null){
//     promptNum = prompt('enter num >100')
// }

for(let i = 2; i < 10; i++){
    let count = 0
    for(let j = i - 1; j > 1 ; j--){
        if(i % j === 0)
            count++
    }
    if(count === 0)
        alert(i)
}