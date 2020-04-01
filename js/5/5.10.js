// let user = {
//     name: "John",
//     years: 30
// };
//
// let {name, years: age, isAdmin = false} = user;
//
// alert(name + age + isAdmin);

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}

function  toSalary(obj) {

    let max = 0;
    let maxName = null;

    for(const [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }

    return maxName;
}

alert(toSalary(salaries));