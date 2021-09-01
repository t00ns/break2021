const icon = document.querySelectorAll(".icon");
const polaroid = document.querySelector(".polaroid");

// icons click and drag


// polaroid click and drag



// previous code that is based on
box.addEventListener("mousedown", (e) => {
  e.target.classList.add("moving");
});

box.addEventListener("mouseup", (e) => {
  e.target.classList.remove("moving");
});

addEventListener("mouseup", (e) => {
  if (box.classList.contains("moving")) {
    box.style.left = e.clientX + "px";
    box.style.top = e.clientY + "px";
  }
  box.classList.remove("moving");
});

addEventListener("mousemove", (e) => {
  if (box.classList.contains("moving")) {
    box.style.left = e.clientX + "px";
    box.style.top = e.clientY + "px";
  }
});
