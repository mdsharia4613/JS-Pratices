
const user = {
    name: 'Sharia',
    active: true,
    subscription: 'premium',
    features: false,
}

if (user.active) {
    if (user.subscription === "premium") {
        console.log("wolcome to my page");
        if (user.features === true) {
            console.log("img, video")
        }
        else {
            console.log("free dekho er na hoi premium neo")
        }
    }
    else {
        console.log("free version used koro")
    }

}
else {
    console.log("your account is not active")
}

// function uesed kore nested if-else

    
const users = {
    name: 'Sharia',
    active: true,
    subscription: 'premium',
    features: false,
}
 function cheeckUserAccess(users){
    if(users.active){
        if(users.subscription === 'premium'){
            console.log('wolcome to my page')
            showPremiumFeatures()
        }
        else{
            console.log('ueed to free version')
            showFreeFeaturs()
        }
    }
    else{
        console.log('please open in your account')
    }
 }

 function showPremiumFeatures(){
    console.log('premium version')
 }

 function showFreeFeaturs(){
    console.log("free version dekho")
 }
 cheeckUserAccess(users);