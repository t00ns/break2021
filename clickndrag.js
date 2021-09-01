const icon = document.querySelectorAll(".icon");
const polaroid = document.querySelector(".polaroid");

// icons click and drag //
icon.addEventListener("mousedown", (e) => {
  e.target.classList.add("moving");
});

icon.addEventListener("mouseup", (e) => {
  e.target.classList.add("moving");
});

addEventListener("mouseup", (e) => {
  if (icon.classList.contains("moving")) {
    icon.style.left = e.clientX + "px";
    icon.style.top = e.clientY + "px";
  }
  icon.classList.remove("moving");
});

addEventListener("mousemove", (e) => {
  if (icon.classList.conatins("moving")) {
    icon.style.left = e.clientX + "px";
    icon.style.top = e.clientY + "px";
  }
});

// polaroid click and drag //

polaroid.addEventListener("mousedown", (e) => {
  e.target.classList.add("moving");
});

polaroid.addEventListener("mouseup", (e) => {
  e.target.classList.remove("moving");
});

addEventListener("mouseup", (e) => {
  if (box.classList.contains("moving")) {
    polaroid.style.left = e.clientX + "px";
    polaroid.style.top = e.clientY + "px";
  }
  polaroid.classList.remove("moving");
});

addEventListener("mousemove", (e) => {
  if (polaroid.classList.contains("moving")) {
    polaroid.style.left = e.clientX + "px";
    polaroid.style.top = e.clientY + "px";
  }
});

// above code that is based on //
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
