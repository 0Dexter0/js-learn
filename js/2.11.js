// alert(null || 2 || undefined) //2
// alert( alert(1) || 2 || alert(3)) //1,2
//alert(1 && null && 2) //null
//alert(alert(1) && alert(2)) //1 undefined
//alert(null || 2 && 3 || 4) //3
// if(age >= 14 && age <= 90){}
// if(age <= 14 && age >= 90){}
// if(!(age >= 14 && age <= 90)){}

const adm = 'Admin'
const pas = '111'
const log = prompt('who\'s there?')
if (log === adm){
    const reqPas = prompt('password')
    if(reqPas === pas){
        alert('hello')
    }
    else if (reqPas === ''){
        alert('err')
    }
    else
        alert('cancel')
}
else if (log === null) {
    alert('cancel')
}
else if (log != adm){
    alert('i don\'t know you')
}

