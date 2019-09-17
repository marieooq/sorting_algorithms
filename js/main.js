let randomArray = [3, 4, 1, 5, 2];

// randomArray = fillArray(5);
// console.log(`randomArray is ${randomArray}`);
insertionArray(randomArray);

function fillArray(itemCount) {
  let resultArray = [];
  for (let i = 0; i < itemCount; i++) {
    resultArray.push(Math.floor(Math.random() * itemCount) + 1);
  }
  return resultArray;
}

// function insertionArray(randomArray) {
//   let tempArray = [];
//   for (let i = 0; i < randomArray.length; i++) {
//     if (i == 0) {
//       tempArray.unshift(randomArray[i]);
//     } else {
//       for (let j = 0; j < tempArray.length; j++) {
//         switch (randomArray[i] < tempArray[j]) {
//           case true:
//             console.log(
//               `randomArray: ${randomArray[i]} tempArray: ${tempArray[j]}`
//             );
//             tempArray.splice(j, 0, randomArray[i]);
//             break;

//           case false:
//             console.log(
//               `randomArray: ${randomArray[i]} tempArray: ${tempArray[j]}`
//             );
//             tempArray.push(randomArray[i]);
//             break;
//         }
//       }
//     }
//   }
// }
