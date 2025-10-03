
const numbers ={
    a: 10,
    b: 20,
    c: 30,
    d: 40
}
let sum = 0;
for(const key in numbers){
    sum = sum +numbers[key]
}
console.log(sum)

let n = 0;
for( const num of Object.values(numbers)){
    n = n + num
}
console.log(n)