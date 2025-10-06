
function noDuplicate(numbers){
    const Unique =[];
    for(const num of numbers){
        if(Unique.includes(num) === false){
            Unique.push(num);
        }
        
        }
        return Unique;
}
const uniqueNUmber = [1,2,43,5,1,3,2,4,5,6];
console.log(noDuplicate(uniqueNUmber));