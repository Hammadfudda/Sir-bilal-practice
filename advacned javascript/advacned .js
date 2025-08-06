//#region 1 ================= var let const ========================

// var

// re-initiliaizion (yes)
// re-declaration (yes)
// block scopoe (no)
// hoisting (yes)

//let

// re-initiliaizion (no)
// re-declaration  (yes)
// block scopoe  (yes)
// hoisting (no)

//const

// re-initiliaizion (no)
// re-declaration (no)
// block scopoe (yes)
// hoisting (no)
//#endregion

//#region 2 =================Template literals =====================

// Template literals java scriot my ksi bh variable ko string my use krny ky liye backtick ka use hota hy
// or variable ko dollar sign ky sath curli bracket ky andar assign krna hota hy

// let a = "bilal akbar";
// let b = "my name is " + a;
// console.log(b);

// let a = 2
// let b = `A square root of ${a} is ${a * a}`
// console.log(b);
//#endregion

//#region 3 =================Ternary oprerater =====================

// ternary Opreater advance level py if oe else ki statment ky liye use hota hy
// if ki condition ky liye (?) or else ki condition ky liye (:) use kiya jata hy

// let condition = false

// if( condition){
// console.log("True condition work");
// }else{
//     console.log("False condition work")
// }

// let condition = true

// condition
// ? console.log("True condition Work")
// : console.log("False condition Work")
//#endregion

// #region 4 ================Circuits ==============================

// ksi bh condition ko true and false check krny ky liye circuits ka use hota hy jo kyu
// && is sign sy pehchana jata hy or true and false ky liye binary languauge use hoti hy (011010)

// let condition = 10;

// let a = condition && "ABC";
// console.log(a);

//#endregion

//#region 5 =================Pass By Value and Pass By Reference====

// agr ksi variavle ko second variable my consider krayein to oski value nh oska refrence consider hota hy
// phr second variable my cahnging krny sy first variablr bh changr ho jata hy iski wja yr hy ky value pass
// nh hoti variable ka refrence pass hota hy

// let a = {
//   id: 1,
//   name: "ABC",
// };

// let b = a;
// b.inst = "SMIT";

// console.log(a);

// let a = [1, 2, 3];
// let b = a;
// b.push("ABC");
// console.log(a);

//#endregion

//#region 6 =================Spread Operator========================

// let a = [1, 2, 3];
// let b = [...a];
// b.push("ABC");
// console.log(a, b);

// let a = [1, 2, 3];
// let b = ["A", "B", "C"];
// let c = [...a, ...b];
// console.log(c);

// let a = {
//   id: 1,
//   name: "ABC",
// };
// let b = {
//   inst: "ABC",
// };

// let c = {
//   ...a,
//   ...b,
// };

// console.log(c);

//#endregion

//#region 7 =================Rest Operator =========================

// function abc(a, b, c, ...abc){
//  console.log(a, b, c, abc)
// }
// abc(1,2,3,4,5,6,)
//#endregion

//#region 8 =================Destructure Array and Objects =========

// let a = [1, 2, 3, 4];
// let [firstIndex, secoondIndex, , Index4] = a;
// console.log(firstIndex);

// let b = {
//   id: 12,
//   name: "bilal",
//   age: 24,
// };

// let {id,name} = b
// console.log(id, name);

//#endregion

//#region 9==================object Methods=========================

// let obj = {
//     id: 1,
//     name :" bilal",
//     age: 18 ,
//     inst: " smit"
// }

// let val = Object.values(obj)
// let keys = Object.keys(obj)
// let entreis = Object.entries(obj)
// Object.freeze(obj)
// obj.name = " usman"

// console.log(obj)

//#endregion

//#region 10 ================Function ==============================

// a)********* Heiger Order and call back function *********

// function abc (a){
//  return a;
// }

// function xyz (b){
// console.log(b)
// }

// xyz(abc("Hello:)"))

// function abc (){
//     console.log("ABC")
//     return function(){
//         console.log("Return hony wala function")
//     }
// }
// abc()()

// b)********** Lexical scoping ****************

// let a = "XYZ";
// function abc() {
//   let a = "abc";
//   console.log(a);
// }
// abc();

// c)*************** Default perameter **************

// function abc(b = 1) {
//   let a = 420;
//   console.log(b * a);
// }
// abc();

// d)***********Arrow Function******

// let abc = () => {
//     console.log("ABC");
// };
// abc()

// let abc = (a) => {
//   console.log(a);
// };
// abc("ABC");

// let abc = (a, b) => "Return hony wala function"   // 1 line my return krny ka tariqa

// let a = abc()
// console.log(a);

// let a = _ => _

// let abc = a("This is Arrow function")
// console.log(abc);

//#endregion
    
//#region 11 ================Array Function ========================
// a) ******* map *******

// let a = [
//   {
//     id: 1,
//     name: "ABC",
//     category: "A",
//     fee: 500,
//     taxPercentage: 4,
//     isPass: true,
//   },
//   {
//     id: 2,
//     name: "JKL",
//     category: "B",
//     fee: 300,
//     taxPercentage: 5,
//     isPass: true,
//   },
//   {
//     id: 3,
//     name: "MNO",
//     category: "A",
//     fee: 500,
//     taxPercentage: 10,
//     isPass: true,
//   },
//   {
//     id: 4,
//     name: "RUY",
//     category: "B",
//     fee: 300,
//     taxPercentage: 3,
//     isPass: true,
//   },
//   {
//     id: 5,
//     name: "XYZ",
//     category: "A",
//     fee: 500,
//     taxPercentage: 5,
//     isPass: true,
//   },
// ];
// console.log(a)

// let b = a.map((x, i, z) => {
//   return x.id;
// });
// console.log(b);

// b) ********* filter  ********

// let b = a.filter((x, i, a) => {
//   if (x.category == "B") {
//     return x;
//   }
// });
// console.log(b);

// c) ******** forEach  ********

// let count = 0;
// a.forEach((x, i, list) => {
//   x.inst = "SMIT";
//   let onePercent = x.fee / 100;
//   // x.taxPercentage
//   count += x.fee + onePercent * x.taxPercentage; // after adding tax
// });
// console.log(a, count);

// d) ****** reduce **********

// let b = a.reduce((x, y) => {
//   console.log(x, y.fee);
//   return y.fee + x;
// }, 0);

// console.log(b);

// let b = a.reduce((x, y) => {
//   if (x[y.category]) {
//     x[y.category].push(y);
//   } else {
//     x[y.category] = [];
//   }
//   return x;
// }, {});

// console.log(b);

// e)******* some ********

// let b = a.some((x) => {
//   if (!x.isPass) {
//     return x;
//   }
// });
// console.log(b);

// f) ****** every ******

// let b = a.every((x) => x.isPass);
// console.log(b);

// g) ********* find ******

// let b = a.find((x, i, list) => x.id == 3);
// console.log(b);

// h) ********* findIndex *******

// let b = a.findIndex((x) => x.id === 10);
// console.log(b);

// i) ********* flat ********

// let arr = ["a", "b", "c", [1, 2, 3, ["xa", "xb", "xc"]]];
// let b = arr.flat(Infinity);
// console.log(b);
//#endregion

//#region 12 ================Promise ===============================

// let zingerkapromise = () => {
//   return new Promise((resolve, reject) => {
//     let koikamnikalwanahy = false;
//     setTimeout(() => {
//       if (koikamnikalwanahy) {
//         let obj = {
//           massage : "han khila dunga",
//           succes : true
//         }
//         resolve(obj);
//       } else {
//         let object = {
//           massage : "topi",
//           succes : false
//         }
//         reject(object);
//       }
//     }, 5000);
//   });
// };

// console.log("start promise");

// zingerkapromise()
//   .then((res) => {
//     console.log(res, "then response");
//   })
//   .catch((err) => {
//     console.log(err, "catch response");
//   });

// let asyncfunc = async () => {
//   console.log("Async Start");
//   let res = await zingerkapromise();
//   console.log(res, "res");
// };
// asyncfunc()

//#endregion



// let arr = [
//   {
//     id:2,
//     name: "bilal",
//   },
//   {
//     id:2,
//     name: "akber",
//   },
//   {
//     id:2,
//    name:" male",
//   },
// ];
// var c = arr.map((x)=>{
//     let b = `<ul><li>${x.name}</li>
//     <li>${x.id}</li>
    
//     </ul>`;
//     console.log(b);    
// })
// console.log(c)