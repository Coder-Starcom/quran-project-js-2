import QuranView from "./view.js"; // Correct the path if needed

document.addEventListener("DOMContentLoaded", () => {
  QuranView.init();

  document
    .getElementById("prev")
    .addEventListener("click", () => QuranView.changePage(-1));
  document
    .getElementById("next")
    .addEventListener("click", () => QuranView.changePage(1));
  document
    .getElementById("jump-btn")
    .addEventListener("click", () => QuranView.jumpToPage());
});
