let randomArray = [];

console.log(`randomArray is ${randomArray}`);

//fill an empty array
function fillArray(itemCount) {
  let resultArray = [];
  for (let i = 0; i < itemCount; i++) {
    resultArray.push(Math.floor(Math.random() * itemCount) + 1);
  }
  return resultArray;
}

//sort the array
function bubbleSort(arrayItem) {
  let tempArray = arrayItem;

  for (let i = 0; i < tempArray.length; i++) {
    for (let j = 0; j < tempArray.length; j++) {
      if (tempArray[j + 1] < tempArray[j]) {
        let a = tempArray[j + 1];
        let b = tempArray[j];

        tempArray[j] = a;
        tempArray[j + 1] = b;
      }
    }
  }

  return tempArray;
}

//show numbers on the left area
function showNums() {
  const showNum = document.getElementById("showNum");
  randomArray = fillArray(100);
  showNum.innerHTML = `<p>${randomArray}</p>`;
}

//show sorted numbers on the right area
function showBubble() {
  const showBubbleSort = document.getElementById("showBubbleSort");
  const result = bubbleSort(randomArray);
  showBubbleSort.innerHTML = `<p>${result}</p>`;
}
