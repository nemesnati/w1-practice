let x = 10; // number
let y = "text"; // string
let z = true; // boolean

let arr = ["one", "two", "three", "four"]; // array

let arrObj = {
  0: "one",
  1: "two",
  2: "three",
  3: "four",
};

let arr2 = [10, 5, 67, 234]; // array
let arr3 = ["text", 67, false, null]; // array

let newArr = [arr, arr2, arr3]; // array

//console.log(newArr[0][0])

let obj = {
  key4: ["egy", `kettő${x}`, 'három "négy"'],
  key: "value",
  key2: 20,
  key3: false,
  key5: {
    nestedKey: "nested value",
  },
};

let jsonExample = [
  {
    name: "Gipsz Jakab",
    age: 40,
    "hair-count": 10,
    "zokni-count": 40,
  },
  {
    name: "Példa Péter",
    age: 28,
    "hair-count": 120000000,
    "zokni-count": 32,
  },
  {
    name: "John Doe",
    age: 6,
    "hair-count": 511,
    "zokni-count": 35,
  },
];

// for (let i = 0; i < jsonExample.length; i++) {
//   let element = jsonExample[i];

//   if (element.age > 18 && element["hair-count"] > 11) {
//     console.log(element.name);
//   } else {
//     console.log(`${element.name} nem használhatja a sampont`);
//   }
//   //   console.log(element, i);
// }

for (let i = 0; i < jsonExample.length; i++) {
  let user; //element = jsonExample[i];

  //   if (element.age > 18 || element["hair-count"] > 11) {
  //     console.log(`${element.name} kapni fog reklámot `);
  //   } else {
  //     console.log(`${element.name} nem használhatja a sampont`);
  //   }
  //   //   console.log(element, i);

  if (user["zokni-count"] % 2 === 1) {
    console.log(`sell ${user.name} a single sock`);
  } else {
    console.log(`${user.name} sadly has exact pair of socks`);
  }
}
