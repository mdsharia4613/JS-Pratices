function inchToFeet(inch){
    const feet = inch / 12;
    const feetNumber = parseInt(feet)
    const feetFraction = inch % 12;
    return { feetNumber, feetFraction};
}
const value = inchToFeet(75);
console.log(value);

// ------------------ 0 ----------------------

function isleapYear(year){
    if( year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isLeap = isleapYear(2032);
console.log(isLeap);

function incomeAmount(income){
    if(income <= 50000){
        return 10;
    }
    else if(income <= 100000){
        return 20;
    }
    else if(income < 200000){
        return 30;
    }
    else{
        return {tax: 40};
    }
}

const amount = incomeAmount(490000)
console.log('amount', amount);

