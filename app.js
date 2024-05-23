const showBtn = document.getElementById("show-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close__btn");
const overlay = document.getElementById("overlay");

// add classList func

function addHidden() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

showBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  addHidden();
});

overlay.addEventListener("click", () => {
  addHidden();
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addHidden();
  }
});
