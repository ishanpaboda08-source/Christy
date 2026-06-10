let images = ["p0.png", "p1.png", "p2.png","p3.png"];
let index = 0;

  setInterval(() => {
    index = (index + 1) % images.length;
    document.getElementById("slider").src = images[index];
  }, 4000); // 5000ms = 5 seconds