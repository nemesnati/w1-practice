let array = ["GTA", "FIFA", "Assassin's Creed", "Counter-Strike", "Last of Us"];
let array2 = [
  "1984",
  "Dorian Gray",
  "Pixel",
  "Hundred Years of Solitude",
  "The Little Prince",
];
for (let index = 0; index < array.length; index++) {
  if (array[index].includes("C")) {
    console.log(array[index], "tartalmaz C betűt");
  } else {
    console.log(array[index], "nem tartalmaz C betűt");
  }
}
for (let index = 0; index < array2.length; index++) {
  if (array2[index].length % 2 === 1) {
    console.log(array2[index], "páratlan számú karakterből áll");
  } else {
    console.log(array2[index], "páros számú karakterből áll");
  }
}
for (let index = 0; index < array.length; index++) {
  if (array[index].includes("l")) {
    console.log(array[index], " tartalmaz L betűt");
  } else {
    console.log(array[index], " nem tartalmaz L betűt");
  }
}
for (let index = 0; index < array.length; index++) {
  if (array[index].includes("L")) {
    console.log(array[index], " Legjobb story játék ");
  } else {
    console.log(array[index], " Játsz a Last of Us-al! ");
  }
}
