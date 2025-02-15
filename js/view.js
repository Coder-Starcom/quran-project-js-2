const QuranView = {
  init() {
    this.pageContent = document.getElementById("page-content");
    this.surahDetails = document.getElementById("surah-details");

    this.pageNumberElement = document.getElementById("page-number");
    this.prevButton = document.getElementById("prev");
    this.nextButton = document.getElementById("next");
    this.pageInput = document.getElementById("page-input");

    this.currentPage = 1;
    this.updatePage();
  },

  async updatePage() {
    this.pageContent.innerHTML = "Loading...";
    this.surahDetails.innerHTML = ""; // Clear previous details

    const content = await QuranController.getQuranPageData(this.currentPage);

    this.pageContent.innerHTML = content;
    this.pageNumberElement.textContent = `Page ${this.currentPage}`;

    this.prevButton.disabled = this.currentPage === 1;
    this.nextButton.disabled = this.currentPage === QuranModel.maxPages;
  },

  displaySurahDetails(surah, juz, hizb) {
    if (!surah) return;
    this.surahDetails.innerHTML = `
    <table>
    <tr><td><span>${surah.englishName}</span></td><td><span>${
      surah.englishNameTranslation
    }</span></td><td><span>Type:</span> ${
      surah.revelationType
    }</td><td><span>Total Ayahs: </span>${surah.numberOfAyahs}</td></tr>
    <tr>
    <td colspan=2><span>Juz:</span> ${juz || "Unknown"}</td>
        <td colspan = 2><span>Hizb:</span> ${Math.floor(hizb / 4)} ${
      hizb % 4
    }/4 </td>
    </tr>
    </table>
    `;
  },

  changePage(direction) {
    this.currentPage += direction;
    this.updatePage();
  },

  jumpToPage() {
    const page = parseInt(this.pageInput.value, 10);
    if (page >= 1 && page <= QuranModel.maxPages) {
      this.currentPage = page;
      this.updatePage();
    } else {
      alert("Please enter a valid page number between 1 and 604.");
    }
  },
};
