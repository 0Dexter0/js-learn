// const browser = prompt('enter name your browser')
// if( browser === 'Edge')
//     alert('You\'ve got the Edge!')
// else if (browser === 'Chrome' || browser === 'Firefox' ||
//     browser === 'Safari' || browser === 'Opera')
//     alert('Okay we support these browsers too')
// else
//     alert('We hope that this page looks ok!')

const num = prompt('enter num 0...3')
switch (num) {
    case '0':
        alert(0)
        break
    case '1':
        alert(1)
        break
    case '2':
    case '3':
        alert('2 or 3')
        break
}