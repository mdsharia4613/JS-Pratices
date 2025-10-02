
for(i = 31; i <=58; i++){
    // console.log(i)
}
// evev number
for(i = 0; i <= 20; i++){
    if(i % 2 === 0){
        // console.log(i)
    }
}

// odd number

for(i = 2; i <20; i++){
    if(i%2 == 1){
        // console.log(i)
    }
}

for(i = 0; i < 50; i = i + 4){
    // console.log(i)
}

for(i = 1; i<10; i++){
    if(i%2 == 0){
       continue;
        
       }
       
    //  console.log(i)
}
let sum = 0;
for(i = 1; i < 50; i++)
    if(i % 3 == 0 && i % 4 == 0){
         console.log(i)
        sum = sum  + i;
    }
    console.log('sum', sum)

let n = 0;
for(i = 1; i < 10; i++)
    if(i % 3 == 0 && i % 4 == 0){
         console.log(i)
        n = n  + i;
    }
    console.log('sum', n)