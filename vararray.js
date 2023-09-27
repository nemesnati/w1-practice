//           012345678
let variable1 = "kismacska"; //string
let variable2 = 101; //number
let variable3 = true; //boolean
let variable4 = null; //null

//   index:     0        1         2         3        4       5         6
let array = ["alma", "barack", "szilva", "vegyes", "szőlő", "birs", "törköly"];

//   index:   0  1  2  3  4
let array2 = [1, 2, 3, 4, 5];

//   index:      0     1    2        3       4       5
let array3 = ["autó", 54, true, undefined, false, "62"];

//   index:        0          1          2         3
let array4 = [variable1, variable2, variable3, variable4];

/* console.log(variableArray[0])
    console.log(variableArray[1])
    console.log(variableArray[2])
    console.log(variableArray[3]) */

/* let counter = 5
    
    while (counter >= 0) {
      console.log(counter)
      counter--
    } */

/* for (let counter = 1; counter <= 5; counter++) {
      console.log(counter)
    } */

/* for (let index = 0; index < array.length; index++) {
      if (array[index].length % 2 === 1) {
        console.log(array[index], 'páratlan számú karakterből áll')
      } else {
        console.log(array[index], 'páros számú karakterből áll')
      }
      //console.log('end of iteration')
    } */

for (let index = 0; index < array.length; index++) {
  if (array[index].includes("l")) {
    console.log(array[index], " tartalmaz L betűt");
  } else {
    console.log(array[index], " nem tartalmaz L betűt");
  }
  //console.log('end of iteration')
}

/* for (let index = 0; index < variable1.length; index++) {
      console.log(variable1[index])
      //console.log('end of iteration')
    } */
console.log("end of code");
