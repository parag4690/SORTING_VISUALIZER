/*******************                  swap the two divs using promises       **************** */

function swap(box1, box2) {
  return new Promise((resolve, reject) => {
    // let temp = box1.style.height;
    // box1.style.height = box2.style.height;
    // box2.style.height = temp;

    window.requestAnimationFrame(() => {
      setTimeout(() => {
        // insertbefore(new , reference); new ko reference se phle leyaga

        visualizerContainer.insertBefore(box2, box1);
        // visualizerContainer.insertBefore(box1 , box2);  // dekh agr me ye krta hu to muje uper height
        // swap krni prege
        // it will insert box2 before box1
        resolve();
      }, speedSliderValue);
    });
  });
}

//  asynchoruse bubble sort

async function bubbleSort(delay = 100) {
  disable();

  /**********        start the algorithm             ********** */

  let block = document.querySelectorAll(".barHeight");
  console.log(block);
  // algorithm

  for (let i = 0; i < block.length; i++) {
    for (let j = 0; j < block.length - i - 1; j++) {
      //  change the background-color
      // block to be compared

      block[j].style.backgroundColor = "red";
      block[j + 1].style.backgroundColor = "yellow";

      console.log("running");
      let value1 = parseInt(block[j].style.height);
      let value2 = parseInt(block[j + 1].style.height);
      if (value1 > value2) {
        await swap(block[j], block[j + 1]); // jb tk swap nhi hota tb tk age nhi jayga
        // console.log("waiting after ");

        block = document.querySelectorAll(".barHeight"); // it is imported to update as we have swaped the ele
      }

      //  change color back to previous one

      block[j].style.backgroundColor = "blue";
      block[j + 1].style.backgroundColor = "blue";
    }

    //    now change the color of gretest element
    block[block.length - 1 - i].style.backgroundColor = " #85FFBD";
  }
  setTimeout(() => {
    for (let i = 0; i < block.length; i++) {
      block[i].style.backgroundColor = "blue";
    }
    enable();
  }, 1000);
}

bubbleSorting.addEventListener("click", () => {
  intro.style.display="none";
  infoSelection.style.display="none";
  infoBubble.style.display="flex"
  infoInsert.style.display="none";
  infoMerge.style.display = "none";
  infoQuick.style.display = "none";
  console.log("starting");
  bubbleSort();
});
