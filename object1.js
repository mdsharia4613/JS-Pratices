
const products = {
    rice: 70,
    oil: 150,
    sugar: 90,
    salt: 40
};
// key difiend
for(let key in products){
    console.log(key);
}

// value difiend
for(let key in products){
    console.log(products[key]);
}

// key
for(let key in products){
    console.log(`${key}  ${products[key]}`)
}