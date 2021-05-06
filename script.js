function setvideo(_id) {
  var v = document.getElementById("video");
  var s = document.getElementById("source");
  v.pause();
  s.setAttribute("src", "./videos/" + _id + ".mp4");
  v.load();
}

var videoReel = document.getElementById("video-reel");
for (let index = 1; index < 14; index++) {
  var newImg = document.createElement("img");
  newImg.setAttribute("id", index);
  newImg.setAttribute("class", "thumbnail");
  newImg.setAttribute("src", "./images/" + index + ".png");
  newImg.addEventListener("click", function(){ setvideo(index) }, false);
  videoReel.appendChild(newImg);
  //console.log(newImg);
}