// let user = {
//     name: "Джон",
//     go: function() { alert(this.name) }
// };
//
// (user.go)()

// function makeUser() {
//     return {
//         name: "Джон",
//         ref: this
//     };
// };
//
// let user = makeUser();
//
// alert( user.ref.name )

// const calculator = {
//
//     read() {
//         a = prompt('enter a')
//         b = prompt("enter b")
//     },
//     sum() {
//         return Number(a) + Number(b)
//     },
//     mul() {
//         return a * b
//     }
// };
//
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this
//     },
//     down() {
//         this.step--;
//         return this
//     },
//     showStep: function() { // показывает текущую ступеньку
//         alert( this.step );
//     }
// };
//
// ladder.up().up().down().up().down().showStep()

