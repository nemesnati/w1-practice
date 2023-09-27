let variable1 = "kismacska"; //string
let variable2 = 101; //number
let variable3 = true; //boolean
let variable4 = null; //null

let array = ["alma", "barack", "szilva", "vegyes"];
let array2 = [1, 2, 3, 4, 5];
let array3 = ["auto", 54, true, undefined, false, "62"];
let array4 = [variable1, variable2, variable3, variable4];

console.log(array[0]);
for (let counter = 0; counter <= 5; counter++) {
  console.log(counter);
}

for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}

for (let index = 0; index < variable1.length; index++) {
  console.log(index);
  if (index % 2 === 1) {
    console.log(index, "páratlan");
  } else {
    console.log(index, "páros");
  }
}
console.log("end of code");
