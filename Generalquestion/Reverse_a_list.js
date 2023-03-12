let arr = [1,2,3,4,5]

for(let a=0;a<arr.length/2;a++){
    let temp = arr[a]
    arr[a] = arr[arr.length-1]
    arr[arr.length-1] = temp
}
console.log(arr)