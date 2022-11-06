const a = 34;
const b = "test";
const c = true;
const d = undefined;
const e = { v: 1 };
const f = function () {
  console.log("test");
};

console.log(typeof e.v);

//Primitive Data Types
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

//Refernce Data Types
console.log(typeof e);
console.log(typeof f);

// Static Type vs Dynamic Type
let variable = 30;
variable = "30";

let k;
console.log(typeof k);
