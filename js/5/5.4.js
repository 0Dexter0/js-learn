// let styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles[Math.floor((styles.length - 1) / 2)] = "Классика";
// alert( styles.shift() );
// styles.unshift("Рэп", "Регги");

// function sumInput() {
//     let numbers = [];
//
//     while (true) {
//         let value = prompt('enter num');
//
//         if (value === "" || value === null || value != +value) {
//             break
//         }
//
//         numbers.push(+value);
//     }
//
//     let sum = 0;
//     for (let number of numbers) {
//         sum += number;
//     }
//     return sum;
// }
//
// alert( sumInput() );

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let num of arr) {
        partialSum += num;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }
    return maxSum;
}

alert(getMaxSubSum([1,5,1,5,-8,-3,0]))