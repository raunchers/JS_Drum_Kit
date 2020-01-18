// Detects which button was clicked
for (index = 0; index < document.querySelectorAll(".drum").length; index++) {

  document.querySelectorAll(".drum")[index].addEventListener("click", function() {
    var butKey = this.innerHTML;
    drumKey(butKey);
    buttonAnimation(butKey);
  }); // Event Listener function

}

// Detects keyboard pressed keys
document.addEventListener("keydown", function(event) {
  var pressedKey = event.key;
  drumKey(pressedKey);
  buttonAnimation(pressedKey);
});

// Detects which key was pressed and plays the appropriate sound.
function drumKey(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      key.innerHTML;
  }
} // End function

function buttonAnimation(currentKey) {
  var currentKey = document.querySelector("." + currentKey);
  currentKey.classList.add("pressed");

  setTimeout(function() {
    currentKey.classList.remove("pressed");
  }, 100);

}
