const personList = [
  { name: "Ram Sahoo", age: 30, salary: 10000 },
  { name: "Satish Das", age: 35, salary: 30000 },
  { name: "Prakash Mohanty", age: 55, salary: 20000 },
];
// array.forEach((element) => {});

// for (let index = 0; index < array.length; index++) {
//   const element = personList[index];
//   console.log(element)
// }

// personList.forEach((ele, ind) => {
//   ele.name = `${ele.name}-demo`;
//   console.log(ele.name, ind);
// });

// const newArray = personList.map((element) => {
//   return { ...element };
// });

// const newArray2 = personList.map((element) => ({ ...element }));

// const newArray1 = personList.map(function (element) {
//   return { ...element };
// });

// console.log(personList.filter((p) => p.age > 50));
// console.log(personList.find((p) => p.age > 30));

// const totalSal = personList.map((p) => p.salary).reduce((a, b) => a + b, 0);
// console.log(totalSal);

// const firstObj = personList.shift();
// console.log(firstObj, personList);

// const lastObj = personList.pop();
// console.log(lastObj, personList);

//Array Mutation
// const slicedArray = personList.slice(1);
// console.log(slicedArray, personList);

// const splicedArray = personList.splice(1);
// console.log(splicedArray, personList);
