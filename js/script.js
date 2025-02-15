import QuranView from "./view.js"; // Correct the path if needed
import QuranModel from "./model.js";
import QuranController from "./controller.js"; // Ensure it's imported

document.addEventListener("DOMContentLoaded", () => {
  QuranView.init(QuranController);
  QuranController.init(QuranView);

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
