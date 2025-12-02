// let answer = Math.floor(Math.random * 100); 終極密碼
// let n1 = 0;
// let n2 = 99;

// while (true) {
//   let guess = Number(prompt("請輸入你的猜測 (" + n1 + " ~ " + n2 + ")"));

//   if (guess < n1 || guess > n2) {
//     alert("無效猜測，請重新輸入一個數");
//     continue;
//   }
//   if (guess == answer) {
//     alert("猜對了");
//     break;
//   } else if (guess < answer) {
//     n1 = guess;
//   } else if (guess > answer) {
//     n2 = guess;
//   }
// }
// const friends = ["Harry", "Ron", "Snap", "Mike", "Grace"]; //反轉陣列
// let reserse_friend = [];
// // for (let i = friends.length - 1; i >= 0; i--) {
// //   reserse_friend.push(friends[i]);
// // }
// // console.log(reserse_friend);
// reserse_friend = friends.reverse();
// console.log(reserse_friend);
function isUpperCase(str) {
  if (str.length == 0) {
    return false;
  }
  if (str[0] == str[0].toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
console.log(isUpperCase("ABCD")); // returns true
console.log(isUpperCase("")); // returns false
console.log(isUpperCase("aBCD")); // returns false
