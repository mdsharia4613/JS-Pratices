// problem-1
const user = {
    name: 'Sharia',
    active: true,
    subscription: 'premium',
    features: false,
}

// if (user.active) {
//     if (user.subscription === "premium") {
//         console.log("wolcome to my page");
//         if (user.features === true) {
//             console.log("img, video")
//         }
//         else {
//             console.log("free dekho er na hoi premium neo")
//         }
//     }
//     else {
//         console.log("free version used koro")
//     }

// }
// else {
//     console.log("your account is not active")
// }

// provlem-2
// const guest ={
//     tea: false,
//     biscuit: false,
// }

// if(guest.tea === true){
//     if(guest.biscuit === true){
//         console.log("tea and biscuit khabo")
//     }
//     else{
//         console.log('sodo tea khabo')
//     }
// }
// else{
//     console.log('tv dekho')
// }

// provlem-3

const ref ={
    refFood: false,
    foodOder: false,
}
if(ref.refFood === true){
    console.log("food grom korbo")
    if(ref.foodOder === true){
        console.log('oder-foood')
    }
    
}
else{
    console.log('aj roja thekbo')
}

// function uesed kore nested if-else

    
// const users = {
//     name: 'Sharia',
//     active: true,
//     subscription: 'premium',
//     features: false,
// }
//  function cheeckUserAccess(users){
//     if(users.active){
//         if(users.subscription === 'premium'){
//             console.log('wolcome to my page')
//             showPremiumFeatures()
//         }
//         else{
//             console.log('ueed to free version')
//             showFreeFeaturs()
//         }
//     }
//     else{
//         console.log('please open in your account')
//     }
//  }

//  function showPremiumFeatures(){
//     console.log('premium version')
//  }

//  function showFreeFeaturs(){
//     console.log("free version dekho")
//  }
//  cheeckUserAccess(users);
