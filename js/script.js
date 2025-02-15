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
