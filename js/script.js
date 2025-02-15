document.addEventListener("DOMContentLoaded", () => {
  view.init();

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
