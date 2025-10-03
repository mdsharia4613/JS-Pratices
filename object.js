
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

const player ={
    name : 'Mesi',
    team: 'Argentina',
    goals: 9
}

console.log(Object.values(player))
console.log(Object.keys(player))

const phones ={
    brand:'Samsung',
    model:'Galaxy S21',
    price: 333323,

}

for(const phone of Object.keys(phones)){
    console.log(phone)
}

// object freeze
const adminUser ={
    username:"mdsharia",
    email: "mdsharia2312",
    password: 1222,
    role: "teacher"
}

Object.freeze(adminUser);
adminUser.role = 'enginner'
adminUser.email = 'mdabir34@gmaail.com'
console.log(adminUser)

const food ={
    name: 'Pizza',
    price: '500',
    size: 'xl'
}
Object.seal(food)
food.price = "1000";
food.size = 'sm';
console.log(food)