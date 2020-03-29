// function camelize(str) {
//     return str.split('-')
//         .map( (word, index) =>
//             index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//         )
//         .join('')
// }
//
// alert(camelize('rfrbd-sbsdbsb'))

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

let arr = [10, 5, 2, 4];

alert(filterRange(arr, 1, 3))