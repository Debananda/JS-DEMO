//Object Destructuring
const obj = { name: "test", age: 30, salary: 10000 };

const { name } = obj;
console.log(name);

//Object Copy

const obj1 = { ...obj }; //Spread Operator
const obj2 = Object.assign({}, obj);

obj2.name = "abc";
console.log(obj.name, obj2.name);

//Array Destructuring

const arr = [
  { name: "test", age: 30, salary: 10000 },
  { name: "test1", age: 30, salary: 10000 },
  { name: "test2", age: 30, salary: 10000 },
  { name: "test3", age: 30, salary: 10000 },
];

const [per, ...args] = arr; //Rest Operaor
console.log(per, args);
