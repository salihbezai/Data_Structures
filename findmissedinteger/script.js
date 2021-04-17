
let arr = [1,2,3,4,5,6,7,8,10];
const findMissingNum = (arr) => {
for(var i = 0; i < arr.length ; i++) {
    if(i + 1 !== arr[i]){
        return i+1
    }
}
  return false;
}

console.log(findMissingNum(arr))