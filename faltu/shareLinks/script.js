let hiddenDiv = document.querySelector(".hidden-content");
let timeout;
let tapCount = 0;

function unlockTheContent(){
  clearTimeout(timeout);
  tapCount++;
  if(tapCount == 7){
    setTimeout(finallyUnlock, 2000);
  }
  else{
    timeout = setTimeout(()=>{
      tapCount = 0;
      console.log("Cancelled");
    },500);
  }
}

function finallyUnlock(){
  if(tapCount > 7) { return; }
  let x = prompt('Enter Pass');
  if(x != "skp257"){ return; }
  hiddenDiv.classList.add('unlock');
}