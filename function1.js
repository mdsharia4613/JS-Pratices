function number(value){
    if( value >  10){
        return true;
    }
    else{
        return false;
    }
}

console.log(number(9));

// ------------------- 0 ---------------------
// odd number
function oddNumber(odd){
    let totalOdd = 0;
    for(const num of odd){
        if( num % 2 === 1){
            totalOdd = totalOdd + num
        }
    }
    return totalOdd;
}

const totalOddNumbers = [5, 15, 8, 7];
const nums = oddNumber(totalOddNumbers);
console.log(nums);

// sum number
function sumNumber(sums){
    let sum = 0;
    for(const num of sums){
        if(num % 2 == 0){
            sum = sum + num;
        }
    }
    return sum;
}

const value = [10, 11, 23, 22];
const values =sumNumber(value);
console.log('sum', values)

// 

function smallNumber(small){

    let smallest = small[0];
    for(const num of small){
        if(num < smallest){
            smallest = num;
        }
    }
    return smallest;
}
const verySamll = [20, 45, 22];
const verySamllNumber = smallNumber(verySamll);
console.log('small number', verySamllNumber);

// ------------- 0 -------------

function largestNUmber(age){
  if(age < 18){
    return 18;
  }
  else if( age  > 45){
    return 45;
  }
  else{
    return age;
  }
}

const ageCount = 50;
const ageCountNumber = largestNUmber(ageCount);
console.log(ageCountNumber);

//  ---------------- 0 ---------------------

function division(div) {
    let sum = 0;
    for (const num of div) {
        
        if (num % 4 === 0) {
            sum = sum + num
        }
    }
    return sum;
}

const result = [2, 4, 5, 8, 32, 45];
const numbers = division(result);
console.log('division', numbers);

