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

