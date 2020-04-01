// const sum = a => b => a + b;
// console.log(sum(5)(5));

// function inBetween(a, b) {
//     return function(x) {
//         return x >= a && x <= b;
//     };
// }
//
// function inArray(arr) {
//     return function(x) {
//         return arr.includes(x);
//     };
// }
//
// let arr = [1, 2, 3, 4, 5, 6, 7];
//
// console.log(arr.filter(inBetween(3, 6)));
// console.log(arr.filter(inArray([1, 2, 5, 19])));

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];
//
// function byField(field) {
//     return (a, b) => a[field] > b[field] ? 1 : -1;
// }
//
// users.sort(byField('name'));
// users.forEach(user => console.log(user.name));
// users.sort(byField('age'));
// users.forEach(user => console.log(user.name));

// function makeArmy() {
//     let shooters = [];
//
//     for( let i = 0; i <= 10; i++) {
//         let shooter = function() {
//             console.log( i );
//         };
//         shooters.push(shooter);
//     }
//
//     return shooters;
// }
//
// let army = makeArmy();
//
// army[0]();
// army[5]();
