let arr = [3, 4, 5, 2];
// let d1 = arr[0];
// let d2 = arr[1];
// let d3 = arr[2];

let d1, d2, d3, d4;
[d1, d2, d3, d4 = 10] = arr; //預設值10 沒有資料才會用他
console.log(d1, d2, d3, d4);

let n1 = 3;
let n2 = 4;
//變數資料交換
[n2, n1] = [n1, n2];
console.log(n1, n2);

//物件解構賦值
let obj = { x: 3, y: 4 };
// let x = obj.x;
// let y = obj.j;
let { x, y } = obj;
console.log(x, y);

// let a1 = { a: 5, b: 10, c: 3 };
// let a, b, c;
// ({ a, b, c = 2 } = a1);
// console.log(a, b, c);

//不同變數來解構賦值
let a1 = { a: 6, b: 10, c: 3 };
let newA, newB, newC;
({ a: newA, b: newB, c: newC = 2 } = a1);
console.log(newA, newB, newC);

//簡化函式 物件參數
function add({ n1, n2 }) {
  console.log(n1 + n2);
}
add({ n1: 3, n2: 4 });
