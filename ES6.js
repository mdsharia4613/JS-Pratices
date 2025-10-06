
function even(num1, num2 = 0){
    const sum = num1 + num2;
    return sum;
}
const value = even(10);
console.log(value);


// function deposit(taka = 50){
//     if(taka > 50){
//         return 'deposit done'
//     }
//     return 'nan'
// }
// const a = deposit(100)
// console.log(a);

function monthlyIncome(name = 'anonymous', income = 0 ){
   return `${name} er maonthly income ${income}`
}
const s = monthlyIncome('ashik')
console.log(s);

function deposit(taka = 50){
    return `total taka ${taka}`
}

const a = deposit(100)
console.log(a);