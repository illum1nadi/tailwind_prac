function transform(i) {
  return i * 2;
}

let arr = [1, 2, 3, 4];

const ans = arr.filter((num) => {
  if(num & 1) return true;
  return false;
})

console.log(ans);