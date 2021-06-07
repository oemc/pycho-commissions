function TOSMessage(){
  TOSAccepted = !TOSAccepted;
  if(TOSAccepted){
    if(commissionOpen){
      openMessage.style.display = "initial";
      closedMessage.style.display = "none";
      openMessage.scrollIntoView();
    }
    else{
      openMessage.style.display = "none";
      closedMessage.style.display = "initial";
      closedMessage.scrollIntoView();
    }
  }
  else{
    openMessage.style.display = "none";
    closedMessage.style.display = "none";
  }
} 

function setvideo(_id) {
  var v = document.getElementById("video");
  var s = document.getElementById("source");
  v.pause();
  s.setAttribute("src", "./videos/" + _id + ".mp4");
  v.load();
}

let TOSAccepted = false;
//Set this so it match real commission status
let commissionOpen = false;
let openMessage = document.getElementById("commission-open-message");
let closedMessage = document.getElementById("commission-closed-message");
let videoReel = document.getElementById("video-reel");

//Start Here:
document.getElementById("TOScheckbox").checked = TOSAccepted;
openMessage.style.display = "none";
closedMessage.style.display = "none";
for (let index = 1; index < 14; index++) {
  let newImg = document.createElement("img");
  newImg.setAttribute("id", index);
  newImg.setAttribute("class", "thumbnail");
  newImg.setAttribute("src", "./images/" + index + ".png");
  newImg.addEventListener("click", function(){ setvideo(index) }, false);
  videoReel.appendChild(newImg);
  //console.log(newImg);
}