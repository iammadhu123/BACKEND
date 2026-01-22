// let n = 5;

// for(let i = 0; i<n; i++){
//     console.log("Hello!", i);
// }

// console.log(process.argv);

// let args = process.argv;

// for(let i = 2; i<args.length; i++){
//     console.log("Hello to ", args[i]);
// }

// const someVal = require("./math");

// console.log(someVal);
// console.log(someVal.sum(6,7));
// console.log(someVal.PI);

// const info = require("./Fruits");

// console.log(info);
// console.log(info[0]);
// console.log(info[0].name);

//++++++++++++++++++++++++++++++++++++++++
// const figlet = require('figlet');

// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

//++++++++++++++++++++++++++++++++++++++++
// import {sum, PI} from "./math.js";
// console.log(sum(4,9));

import { generate} from "random-words";
console.log(generate());
//output: 'army'