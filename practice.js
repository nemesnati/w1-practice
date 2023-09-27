let array = [
  "Mortal Kombat",
  "GTA",
  "FifA",
  "Assassin's Creed",
  "Counter-Strike",
];
let array2 = ["1984", "Dorian Gray", "Pixel", "Harry Potter", "Hunger Games"];

// for (let index = 0; index < array.length; index++) {
//   if (array[index].includes("C")) {
//     console.log(array[index], "tartalmaz C betűt");
//   } else {
//     console.log(array[index], "nem tartalmaz C betűt");
//   }
// }

// for (let index = 0; index < array2.length; index++) {
//   if (array2[index].length % 2 === 1) {
//     console.log(array2[index], "páratlan számú karakterből áll");
//   } else {
//     console.log(array2[index], "páros számú karakterből áll");
//   }
// }

// for (let index = 0; index < array.length; index++) {
//   if (array[index].includes("l")) {
//     console.log(array[index], " tartalmaz L betűt");
//   } else {
//     console.log(array[index], " nem tartalmaz L betűt");
//   }
// }

for (let index = 0; index < array; index++) {
  if (array[index].includes("F")) {
    console.log(array[index], " Legjobb játék valaha");
  } else {
    console.log(array[index], "vedd meg a fifát");
  }
}
