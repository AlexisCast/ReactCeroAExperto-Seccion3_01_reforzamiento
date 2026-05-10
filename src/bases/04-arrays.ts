const myArray: number[] = [1, 2, 3, 4, 5];

myArray.push(6);
myArray.push(7);

console.log("🚀 ~ :", { myArray })

for (const myNumber of myArray) {
  console.log(myNumber + 10);
}

// const myArray2 = [...myArray];
const myArray2 = structuredClone(myArray);//deep clone

myArray2.push(8);
console.log("🚀 ~:", { myArray2 })
