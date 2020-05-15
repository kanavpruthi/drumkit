for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonText = this.textContent;
    playSound(buttonText);
    butAnimate(buttonText);
  });
}

document.addEventListener("keydown", function(even) {
  playSound(even.key);
  butAnimate(even.key);
});



function playSound(c) {

  switch (c) {
    case "w":
      var aud = new Audio('sounds/tom-1.mp3');
      aud.play();
      break;
    case "a":
      var aud = new Audio('sounds/tom-2.mp3');
      aud.play();
      break;
    case "s":
      var aud = new Audio('sounds/tom-3.mp3');
      aud.play();
      break;
    case "d":
      var aud = new Audio('sounds/tom-4.mp3');
      aud.play();
      break;
    case "j":
      var aud = new Audio('sounds/snare.mp3');
      aud.play();
      break;
    case "k":
      var aud = new Audio('sounds/crash.mp3');
      aud.play();
      break;
    case "l":
      var aud = new Audio('sounds/kick-bass.mp3');
      aud.play();
      break;
    default:

  }
}

function butAnimate(key){
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function(){  document.querySelector("."+key).classList.remove("pressed");},100);

}
