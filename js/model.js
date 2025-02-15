const QuranModel = {
  API_BASE_URL: "https://api.alquran.cloud/v1/page/",
  SURAH_DETAILS_URL: "https://api.alquran.cloud/v1/surah/", // New API for Surah details

  maxPages: 604,

  async fetchPageData(page) {
    try {
      const response = await fetch(`${this.API_BASE_URL}${page}/quran-uthmani`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data.data.ayahs;
    } catch (error) {
      console.error("Error fetching Quran page:", error);
      return null;
    }
  },

  async fetchSurahDetails(surahNumber) {
    try {
      const response = await fetch(`${this.SURAH_DETAILS_URL}${surahNumber}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error fetching Surah details:", error);
      return null;
    }
  },
};
