// // // const let 変数宣言

// // var val = "iの変数";
// // console.log(val);

// // //var変数は上書き可能
// // val = "var変数を上書き";
// // console.log(val);

// // //var変数は再宣言可能
// // var val = "var変数を再宣言";
// // console.log(val);

// // //let
// // let val2 ="let変数";
// // console.log(val2);

// // //let は上書きが可能
// // val2 ="let変数を上書き";
// // console.log(val2);

// // //letは再宣言不可能
// // let val2 ="let変数を再宣言";

// // const val3 = "constの変数";
// // // console.log(val4);
// // console.log(val3);

// //const変数は上書き不可
// // val3 ="const変数を上書き";

// // const val3 ="const変数を再宣言";
// //const で定義したオブジェクトはプロパティの変更が可能

// // const val4 = {
// //   name: "あいうえお",
// //   age: 99
// // };

// // val4.name ="かきくけこ";
// // val4.address ="滝沢";
// // console.log(val4);

// // //const で定義した配列はプロパティの変更が可能
// // const val5 = ["dog", "cat"];
// // val5[0] ="human";
// // val5.push("machine");
// // console.log(val5);

// //テンプレート文字列
// // const name ="名前";
// // const  age =99;
// // //私は名前です。年齢です。
// // const message1 ="私は"　+ name +"です。"+ age +"です。";
// // console.log(message1);

// // //テンプレート文字列を用いた書き方
// // const message2 =`私は${name}です。${age}です。`;
// // console.log(message2);

// //アロー関数

// // //従来の関数
// // function func1(str){
// //   return str;
// // }
// const func1 = function(str){
//   return str;
// }
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;

// }

// console.log(func2("func2です"));

// const func3 =(num1, num2) => {
//   return num1 + num2;
// }

// console.log(func3(10,20));

//分割代入
//

const myProfile = [`なまえ`, 99];

const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `名前２は${name}です。年齢２は${age}です。`;
console.log(message4);
