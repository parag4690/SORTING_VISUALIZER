
/*********              swap  function          *********** */

function swap2(ele1 , ele2){
   
    return new Promise((resolve)=>{
       window.requestAnimationFrame(()=>{
        visualizerContainer.insertBefore(ele2 , ele1);
        resolve();
       },250) 
        
    })

}

/**********          selection sort          ************ */

async function selectionSort(ms = 250){

  disable();

/**********        start the algorithm             ********** */

    let block = document.querySelectorAll(".barHeight");
    console.log(block);
    let length = block.length;

    for(let i=0; i<length; i++){
        
        let  mini = parseInt(block[i].style.height); 
        let miniInd=i;
        block[i].style.background = "red";
        for(let j=i; j<length; j++){            
            let val = parseInt(block[j].style.height);
            if(val<mini){
                mini = val;
                miniInd = j;
            }
        }
        // yellow color the selected element
        block[miniInd].style.background = "yellow";

        await new Promise ((resolve)=>{
            setTimeout(()=>{
              resolve();
            } , ms);
        })
        await swap2(block[i] , block[miniInd]);
        block = document.querySelectorAll(".barHeight");
        block[miniInd].style.background = "blue";
        block[i].style.background = " #85FFBD";

    }
    console.log("checking");
        // 
    setTimeout(()=>{
        for(let i=0; i<block.length; i++){
    
            block[i].style.backgroundColor = "blue";
           }
        enable();
     } , 1000);
}

//  add a event listener 

select.addEventListener("click" , ()=>{
    console.log(speedSliderValue + " it speed ");
    selectionSort(speedSliderValue);
})
