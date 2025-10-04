
// father and sone total age
function total(fatherAge, sonAge){
      return  fatherAge + sonAge;         
}
const totalAge =total(10 , 20);
console.log(totalAge)

// total three subjet mark sum
function subject(math, english, bangla){
    const totalsub = math + english + bangla;
    return totalsub;
}
const totalMark = subject(20,30,40)
console.log(totalMark)

// four number avg

function avgAgeFour(a, b, c, d){
    const number = a+b+c+d;
    const avgRabg = number / 4;
    return avgRabg;
}
const avg = avgAgeFour(12, 13, 14,15);
console.log(avg)

// -------------------- o ------------------------

function profit(x){
    const totalProfit = 250 - x;
    return totalProfit;
}
const cost = profit(200);
console.log('cost', cost)

// profitr and damage
function calculationProfiteOrLoss(buyingPrice, sellingPrice){
    const profit = sellingPrice - buyingPrice;
    if( profit > 0){
        return 'profit'+ ' '+  profit;
    }
    else if(profit < 0){
        return 'loss'+ '' + Math.abs(profit);
    }
    else{
        return 'no profit';
    }
}

console.log(calculationProfiteOrLoss(100, 1300))

// multipul number

function multipul(a,b){
    return [a*b, a+b, a-b]
}

const [multipull, sum, odd] = multipul(2,3);
console.log('mutipull', multipull);
console.log('sum', sum);
console.log('odd', odd);

// ----------
function multipulNumber(x, y){
    return {
        multipul: x*y,
        sum: x+y,
        odd: x-y,
    }
}
const result = multipulNumber(5 , 4)
console.log("multipul", result.multipul);
console.log("sum", result.sum)
console.log("odd", result.odd);


// ----------------- o ------------------

function  age(bornDate, presentDate){
    return presentDate - bornDate;
}
const value = age( 2004, 2025);
console.log('Age Calculate', value)

// ------------- 0 ---------------------

function kodoKena(taka){
    const perKodoPrice = 35;
    const kinarJonno = Math.floor(taka / perKodoPrice);
    const oboshistoTaka = taka % perKodoPrice;
    return {kinarJonno, oboshistoTaka};
}

const values = kodoKena(200);
console.log('kodo',values.kinarJonno,  'oboshisto Taka', values.oboshistoTaka);

// --------------- 0 --------------------

function age(bornDate){
    const date = 100;
    const futureDate = bornDate + 100;
    return futureDate;
}

const years = age(2000);
console.log('years', years)

// --------------- 00 -----------------

function user(hour){
    const month = 30;
    const totalUsed = hour * month;
    return totalUsed;
}

console.log('hour', user(10))