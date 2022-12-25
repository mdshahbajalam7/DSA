let arr = [20,30,10,50,60,70,80]
let serach = 60;
let index=undefined;
for(let a=0;a<arr.length-1;a++){
    if(arr[a]===serach){
        index=a
        break;
    }
}
console.log(index)
console.log(arr.indexOf(serach));
// for deleting arr
 arr.splice(4,1)
 console.log(arr);