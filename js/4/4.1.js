// const user = {};
// user.name = 'Sam';
// user.surname = 'Smith';
// user.name = 'Peter';
// delete user.name;
//
//
// const scheluse = {};
//
// const isEmpty = (obj) => {
//     for( let key in obj){
//         return false
//     }
//     return true
// };
//
// alert(isEmpty(scheluse));

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
//
// const summ = (obj) => {
//     let summ = 0;
//     for( let key in obj){
//         summ += obj[key]
//     }
//     return summ
// };
//
// alert(summ(salaries));

const menu = {
    wight: 200,
    height: 300,
    title: 'My menu'
};

const multiplyNumeric = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
};

multiplyNumeric(menu);
alert(menu.height);