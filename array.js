// // odd er avg number
// function oddAverage(numbers) {
//     const odds = [];
//     for (const num of numbers) {
//         if (num % 2 === 1) {
//             odds.push(num)
//         }
//     }
//     let sum = 0;
//     for(const num of odds){
//         sum += num;
//     }

//     const count = odds.length;
//     const avg = sum / count;
//     return avg;

// }

// const nums = [10, 12, 11, 15, 33, 14, 55]
// const oddNumber = oddAverage(nums)
// console.log(oddNumber)

// function evenAverage(numbers){
//     const evens = [];
//   for(const num of numbers){
//     if(num % 2 === 0){
//         evens.push(num);
//     }
//   }
//   let sum = 0;
//   for(const num of evens){
//     sum += num;
//   }

//   const count = evens.length;
//   const avg = sum / count;
//   return avg;
// }

// const numbers = [10,11,13,22];
// console.log(evenAverage(numbers))


// function oddNumbers(numbers){
//     const multipul = [];
//     for(const num of numbers){
//         if(num % 2 === 1){
//             multipul.push(num * 2);
//         }
//     }
//     return multipul;
// }
// const numbers = [10,12,13,25,27]
// console.log(oddNumbers(numbers));

// function oddNumbers(numbers){
//     for(const num of numbers){
//         if(num % 2 === 1){
//             return 'Odd numbers found';
//         }
//     }
//     return ' odd number not found'
// }
// const numbers = [10,12,13,25,27]
//  console.log(oddNumbers(numbers));

function oddNumbers(numbers){
    const odds = [];
    for(const num of numbers){
        if(num % 2 === 1){
            odds.push(num - 1);
        }
    }
    return odds;
}
const numbers = [10,12,13,25,27]
console.log(oddNumbers(numbers));
