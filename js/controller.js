const QuranController = {
  view: null, // Store reference to QuranView

  init(viewInstance) {
    this.view = viewInstance; // Initialize the view
  },
  async getQuranPageData(page) {
    if (!this.view) {
      console.error("QuranView is not initialized in Controller!");
      return "Error loading page data.";
    }

    const ayahs = await QuranModel.fetchPageData(page);
    if (!ayahs) return "Error loading page data.";

    let content = "";
    let lastSurah = null;
    let juz = ayahs[0]?.juz || "Unknown"; // Get Juz from the first Ayah
    let hizb = ayahs[0]?.hizbQuarter || "Unknown"; // Get Hizb from the first Ayah

    for (const ayah of ayahs) {
      if (ayah.surah.number !== lastSurah) {
        const surahDetails = await QuranModel.fetchSurahDetails(
          ayah.surah.number
        );
        QuranView.displaySurahDetails(surahDetails, juz, hizb);

        content += `<div class='surah-title'>${ayah.surah.name}</div>`;
        if (ayah.surah.number !== 9 && ayah.surah.number !== 1) {
          content += `<div class='bismillah'>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>`;
        }
        lastSurah = ayah.surah.number;
      }

      let text = ayah.text;
      if (
        ayah.numberInSurah === 1 &&
        ayah.surah.number !== 9 &&
        ayah.surah.number !== 1
      ) {
        text = text
          .replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "")
          .trim();
      }
      text = text.replace(/۞/g, `<span class="ruku-marker">۞</span>`);

      content += `<span class='ayah'>${text} <span class='ayah-number'>(${ayah.numberInSurah})</span></span>`;
    }

    return content;
  },
};
