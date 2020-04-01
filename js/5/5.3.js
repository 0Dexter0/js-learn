// function toUpp(str) {
//     str = str[0].toUpperCase() + str.slice(1)
//     return str
// }
// str = 'aa'
// alert(toUpp(str))

// function checkSpam(str) {
//     let lowerStr = str.toLowerCase()
//
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx')
// }
//
// alert(checkSpam('bgbawbviagradhdb'));
// alert(checkSpam('egsxxxsgs'));
// alert(checkSpam('dhjtdtnhd'));

// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//         str.slice(0, maxlength - 1) + '…' : str;
// }
//
// alert(truncate('swhehwsbshr', 8));

function extractCurrencyValue(str) {
    return +str.slice(1);
}

alert( extractCurrencyValue('$120') === 120 )