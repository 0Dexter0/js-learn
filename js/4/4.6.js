// function Calculator() {
//     this.read = function() {
//         a = prompt('enter a')
//         b = prompt('enter b')
//     };
//
//     this.sum = function () {
//         return Number(a) + Number(b)
//     };
//
//     this.mul = function () {
//         return a * b
//     }
// }
//
// const calculator = new Calculator();
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

function Accum(startValue) {
    this.value = startValue;
    this.read = function () {
        const a = prompt('enter num')
        this.value += Number(a)
    }
}

const accum = new Accum(5);
accum.read();
alert(accum.value);