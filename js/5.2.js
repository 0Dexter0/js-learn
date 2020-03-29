// a = prompt('a')
// b = prompt('b')
//
// alert( +a + +b)

// function readNumber() {
//     let num;
//
//     while ( num != +num ) {
//         if(num === '' || +num === null) {
//             break;
//         }
//
//         num = prompt('enter num')
//     }
//
//     return num
// }
//
// alert(readNumber());

function random(min, max) {
    return min + Math.random() * (max - min);
}

alert( random(1, 5) );