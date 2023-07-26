/*****************              swap function           **********************/

function swap3(ele1, ele2) {
  return new Promise((resolve) => {
    window.requestAnimationFrame(() => {
      visualizerContainer.insertBefore(ele2, ele1);
      resolve();
    });
  });
}

/****************            insertion sort              ******************* */

async function insertionSorting() {
  disable();

  /**********        start the algorithm             ********** */

  let block = document.querySelectorAll(".barHeight");
  let n = block.length;
  for (let i = 0; i < n; i++) {
    let j = i;
    while (
      j > 0 &&
      parseInt(block[j].style.height) < parseInt(block[j - 1].style.height)
    ) {
      block[j].style.backgroundColor = "red";
      block[j - 1].style.backgroundColor = "yellow";

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        },speedSliderValue);
      });
      await swap3(block[j - 1], block[j]); // j vale ko phle leke anna hai
      // now update the block -> as movement happened

      block = document.querySelectorAll(".barHeight");
      block[j - 1].style.backgroundColor = "#85FFBD"; // it indicates the till this point array is sorted
      block[j].style.backgroundColor = "#85FFBD";
      j--;
    }
    console.log(j);
    // block[j].style.backgroundColor="#85FFBD";
  }

  setTimeout(() => {
    for (let i = 0; i < block.length; i++) {
      block[i].style.backgroundColor = "blue";
    }
    enable();
  }, 1000);
}

// add event listner

insertionSort.addEventListener("click", () => {
  intro.style.display="none";
  infoSelection.style.display="none";
  infoBubble.style.display="none"
  infoInsert.style.display="flex";
  infoMerge.style.display = "none";
  infoQuick.style.display = "none";
  insertionSorting();
});
