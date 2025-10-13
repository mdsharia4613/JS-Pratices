// const doMath = (a,b,c) => {
//     const sum = a + b + c;
//     const sub = a-b-c;
//     const result = sum + sub;
//     return result;
// };
// const sum = doMath(10,20,30);
// console.log(sum)



// const index = (arr) => arr[0];
// const value = index([10,23,34,55,6])
// console.log(value) 

// const multipullNumber = (x,y,z) => x*y*z;
// const arrowNumner = multipullNumber(22, 34, 56)
// console.log(arrowNumner);


// const arr = () => 'unknown'
// console.log(arr())

const user ={
    name : 'ashik',
    taka: 34,
}
const people = (obj) => obj.taka % 5;
console.log(people(user))