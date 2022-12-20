let arr = [20,10,30,40,50,60,70,80,90,100]
let position = 3
for(let a=position;a<arr.length-1;a++){
    // console.log(arr[a])
    arr[a]=arr[a+1]
}
arr.length = arr.length-1
console.log(...arr)