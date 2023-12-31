const visualizerContainer = document.querySelector(".visualizer-container");
const sizeSlider = document.querySelector(".sizeSlider");
const newArray = document.querySelector(".generate-array");
const bubbleSorting = document.querySelector("#bubbleSort");
const buttons = document.querySelectorAll(".nav-sort");
const sliders = document.querySelectorAll(".sliders");
const insertionSort = document.getElementById("insertionSort");
const select = document.getElementById("selectionSort");
const mergeSort = document.getElementById("mergeSort");
const quickSort = document.getElementById("quickSort");
const intro = document.querySelector(".intro");
const infoBubble = document.querySelector(".bubble");
const infoSelection = document.querySelector(".selection");
const infoInsert = document.querySelector(".insert");
const infoMerge = document.querySelector(".merge");
const infoQuick = document.querySelector(".quick");
const navi = document.querySelector(".nav");
const navAlgo =document.querySelector(".nav-algo");
const navSort = document.querySelector(".sorting");
// yellow color -> (j loops )  elements which we want to swap with  i
// red -> current holding element
// green -> succesful place at write place;

// let speedSliderValue = speed.value;
let arr = [];
let n = sizeSlider.value;
pushEle(n);


// adding bars

function pushEle(size) {
    arr = [];
    for (let i = 0; i < size; i++) {
        let randomHeight = Math.floor(Math.random() * 100)+5;
        arr.push(randomHeight);
    }
    addingBars(size);
}

function addingBars(val) {
    const fragment = document.createDocumentFragment();
    let last = 1;
    for (let i = 0; i < val; i++) {
        let randomHeight = arr[i];
        const newEle = document.createElement("div");
        newEle.classList.add("barHeight");
        newEle.id = "bar" + i;
        newEle.style.height = randomHeight + "%";
        newEle.style.backgroundColor = "#1723EB";
        if(val<=20){
            newEle.innerText = randomHeight;
            newEle.style.textAlign = "center";
            newEle.style.color = "white";
        }
        fragment.appendChild(newEle);
    }
   
  
    visualizerContainer.innerHTML = "";
    visualizerContainer.appendChild(fragment);
}

/* *******************                   generate array            *************************/

newArray.addEventListener("click" , ()=>{
    intro.style.display="flex";
    infoSelection.style.display="none";
    infoBubble.style.display="none"
    infoInsert.style.display="none";
    infoMerge.style.display = "none";
    infoQuick.style.display = "none";
    let newLength = Math.floor(Math.random()*100);
    pushEle(newLength);
})

/*******************                    moving slides               **********************/

sizeSlider.addEventListener("input" ,()=>{
    intro.style.display="flex";
    infoSelection.style.display="none";
    infoBubble.style.display="none"
    infoInsert.style.display="none";
    infoMerge.style.display = "none";
    infoQuick.style.display = "none";
    let newLength = sizeSlider.value;
    pushEle(newLength);
})



//   



function disable(){
    /*******            disabling  the buttons         ***********/
  for(let i=0; i<buttons.length; i++){
   buttons[i].disabled = "true";
   buttons[i].style.cursor = "not-allowed";
   buttons[i].classList.add("notAdded")
  }

  for(let i=0; i<sliders.length; i++){

   sliders[i].disabled="true";
   sliders[i].style.cursor="not-allowed";
  }

}

function enable(){
      for(let i=0; i<buttons.length; i++){
       buttons[i].disabled = false;
       buttons[i].style.cursor = "pointer";
       buttons[i].classList.remove("notAdded")
   
      }
   
      for(let i=0; i<sliders.length; i++){
       
       sliders[i].disabled=false;
       sliders[i].style.cursor="pointer";
      }
}

// 
navi.addEventListener("click" , ()=>{
   navAlgo.id = "navAlgo";
   navSort.id  = "navSort";
})