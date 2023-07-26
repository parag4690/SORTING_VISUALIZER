function swap4(ele1 , ele2){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            window.requestAnimationFrame(()=>{
                let c = ele1.style.height;
                ele1.style.height = ele2.style.height;
                ele2.style.height = c;
                let c1 = ele1.innerText;
                ele1.innerText = ele2.innerText;
                ele2.innerText = c1;
                resolve();
            })
        } , speedSliderValue)
    })
}

// -----------------                       -----------               ----------------     
// -----------------                       -----------               ----------------     

async function findPartion(block , start , end){
    console.log("entered");
    let pivot =  block[start];
    let i = start;
    let j = end;
    pivot.style.backgroundColor = "red";

    while(i<j){
        // i-> find the just greater than pivot
        while(i<=end-1 && parseInt(pivot.style.height)>=parseInt(block[i].style.height)){
            i++;
        }
        // j-> find the just smaller than pivot
        while(j>=start+1 && parseInt(pivot.style.height)<parseInt(block[j].style.height)){
            j--;
        }
       
      
        if(i<j){
            // swap both of them 
            await swap4(block[i] , block[j]); // j ko phle leke jana hai
        }
    }

    block[j].style.backgroundColor = "yellow";
    await swap4(pivot , block[j]);
   
    pivot.style.backgroundColor = "#85FFBD";
    block[j].style.backgroundColor = "#1723EB";
    return j;
}


async function quickSorting(block , start , end){
    if(start<end){
        // now find the pivot
        partition = await findPartion(block , start , end);
        await quickSorting(block , start , partition-1);
        await quickSorting(block , partition+1 , end);
    }
}

async function quick(){
    disable();
    let block = document.querySelectorAll(".barHeight");
    let end = block.length;
   await quickSorting(block , 0 , end-1);
   for (let i = 0; i < block.length; i++) {
    block[i].style.backgroundColor = "#85FFBD";
  }
  
  setTimeout(()=>{
      for(let i=0; i<block.length; i++){
          block[i].style.backgroundColor="blue";
      }
      enable();
  },1000)
}

quickSort.addEventListener("click" , ()=>{
    intro.style.display="none";
    infoSelection.style.display="none";
    infoBubble.style.display="none"
    infoInsert.style.display="none";
    infoMerge.style.display = "none";
    infoQuick.style.display = "flex";
    quick();
})