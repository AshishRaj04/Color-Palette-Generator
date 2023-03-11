let button = document.querySelector(".btn");
let palette = document.querySelectorAll(".colors");
let hexcode = document.querySelectorAll(".code");
let colorArray0 = [];

document.querySelectorAll(".colors")[0].style.background =
  "rgba(147, 51, 234,30%)";
document.querySelectorAll(".colors")[1].style.background =
  "rgba(147, 51, 234,40%)";
document.querySelectorAll(".colors")[2].style.background =
  "rgba(147, 51, 234,60%)";
document.querySelectorAll(".colors")[3].style.background =
  "rgba(147, 51, 234,80%)";
document.querySelectorAll(".colors")[4].style.background =
  "rgba(147, 51, 234,90%)";

function Color0(r, g, b, index) {
  this.r = r;
  this.g = g;
  this.b = b;
  this.index = index;

  this.produce = function () {
    for (var k = 0; k <= 4; k++) {
      document.querySelectorAll(".colors")[this.index].style.background =
        "rgb(" + r + "," + g + "," + b + ")";
      var hex = "rgb(" + r + "," + g + "," + b + ")";
      this.write(hex);
    }
  };

  this.write = function (hex) {
    for (var k = 0; k <= 4; k++) {
      document.querySelectorAll(".code")[this.index].innerHTML = hex;
      document.querySelectorAll(".code")[this.index].style.color = hex;
    }
  };
}

button.addEventListener("click", () => {
  generateRGB();
});

window.addEventListener("keypress", (Event) => {
  if (Event.key == "Spacebar") {
    generateRGB();
  }
  
});

function generateRGB() {
  for (var i = 0; i < 5; i++) {
    var r = Math.floor(Math.random() * 255) + 1;
    var g = Math.floor(Math.random() * 255) + 1;
    var b = Math.floor(Math.random() * 255) + 1;
    colorArray0.push(new Color0(r, g, b, i));
  }
  for (var j = 0; j < colorArray0.length; j++) {
    colorArray0[j].produce();
  }
}
