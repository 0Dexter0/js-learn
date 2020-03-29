/*
if('0'){
    alert('Hello')
}

const answer = prompt('Какое «официальное» название JavaScript?')
if(answer === 'ECMAScript'){
    alert('Правильно!')
}
else
    alert('Не знаете? ECMAScript!')*/

/*
const num = prompt('enter numer')
if(Number(num) === 0) {
    alert(0)
}
else if (Number(num) > 0) {
    alert(1)
}
else
    alert(-1)*/

let a = 2,b = 1
console.log(a + b < 4 ? 'malo': 'mnogo')

let message, login
login = '4'
const answer = login == 'a'? message = '1' :
    login == 'b' ? message = '2' :
        login == '' ? message = '0' : message = ''
console.log(answer)