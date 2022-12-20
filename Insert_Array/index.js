let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 97, 87, 45, 12, 30, 40];
let newarr = 70;
let position = 5;
for (let a = arr.length - 1; a >= 0; a--) {
  // document.write(arr[a])
  if (a >= position) {
    arr[a + 1] = arr[a];
    if (a === position) {
      arr[a] = newarr;
    }
  }
}
document.write(...(arr + " "));
