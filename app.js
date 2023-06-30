

colors.addEventListener("change", changeBackgroundColor);

function changeBackgroundColor() {
  document.body.style.backgroundColor= this.value;
}



var typed = new Typed(".element", {
  strings: [" web", "game", "developer"],
  typeSpeed: 50,
backSpeed:150,
loop:true
});