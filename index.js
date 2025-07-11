const buttonClicked = document.querySelectorAll(".drum");
for (var i = 0; i < buttonClicked.length; i++) {
    buttonClicked[i].addEventListener("click", function () {
        const key = this.innerHTML;
        makeSound(key);
        buttonAnimation(key);
    });
}

document.addEventListener("keydown", function (event) {
    const keyPressed = event.key.toLowerCase();
    makeSound(keyPressed);
    buttonAnimation(keyPressed);
});


function makeSound(key) {
    switch (key) {
        case "a":
            new Audio("./assets/Sounds/tom-1.mp3").play();
            break;
        case "s":
            new Audio("./assets/Sounds/tom-2.mp3").play();
            break;
        case "d":
            new Audio("./assets/Sounds/tom-3.mp3").play();
            break;
        case "f":
            new Audio("./assets/Sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("./assets/Sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("./assets/Sounds/kick-bass.mp3").play();
            break;
        case "l":
            new Audio("./assets/Sounds/crash.mp3").play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
