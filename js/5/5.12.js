// let user = {
//     name: "Василий Иванович",
//     age: 35
// };
//
// let userJson = JSON.parse(JSON.stringify(user));
//
// console.log(userJson);

let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));