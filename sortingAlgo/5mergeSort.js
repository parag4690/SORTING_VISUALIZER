

async function merging(arr , low , mid , high){
     let temp = [];
     let id = [];
     let left = low;
     let right = mid+1;

     while(left<=mid && right<=high){
        let valLeft = parseInt(arr[left].style.height);
        let valRight = parseInt(arr[right].style.height);
        if(valLeft<valRight){
            temp.push(valLeft);
            id.push(arr[left].id);
            left++;
        }
        else{
            temp.push(valRight);
            id.push(arr[left].id);
            right++;
        }
     }
    //  remaing
    while(left<=mid){
        let valLeft = parseInt(arr[left].style.height);
        id.push(arr[left].id);
        temp.push(valLeft);
        left++;
    }
    while(right<=high){
        let valRight = parseInt(arr[right].style.height);
        id.push(arr[right].id);
        temp.push(valRight);
        right++;
    }
    // console.log(temp);
 
    for(let i=low; i<=high; i++){
     arr[i].style.background="red";
     document.getElementById(`${id[i-low]}`).style.background="yellow";
     await new Promise((resolve)=>{
        window.requestAnimationFrame(()=>{
                arr[i].style.height = temp[i-low]+"%";
                if(arr.length<=20) {
                 arr[i].innerHTML =` ${temp[i-low]} `; 
                }
                resolve();
        })
        
     });

     document.getElementById(`${id[i-low]}`).style.background="#F99BF9";

     arr[i].style.background="#F99BF9";
    }


}

async function dividing(arr , low , high){
    if(low===high){
      
          return;
    }
    let mid = parseInt ((low+high)/2);
   await dividing(arr , low , mid);
   await dividing(arr , mid+1 ,high);
   await merging(arr , low , mid ,high);

}

async function mergeSorting(){
   let block = document.querySelectorAll(".barHeight");

   let n=block.length;
   disable();
   await dividing(block , 0 , n-1);
   console.log("come back");
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



mergeSort.addEventListener("click" , ()=>{
    intro.style.display="none";
    infoSelection.style.display="none";
    infoBubble.style.display="none"
    infoInsert.style.display="none";
    infoMerge.style.display = "flex";
    infoQuick.style.display = "none";
    mergeSorting();
    // disable();
})