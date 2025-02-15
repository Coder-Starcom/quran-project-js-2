const QuranController = {
    async getQuranPageData (page) {
        const ayahs = await QuranModel.fetchPageData(page);
        if (!ayahs) return "Error loading page data.";
        let content = "";
        let lastSurah = null;
        let juz = ayahs[0]?.juz || "Unknown"; // Get Juz from the first Ayah
        let hizb = ayahs[0]?.hizbQuarter || "Unknown"; // Get Hizb from the first Ayah
        for (const ayah of ayahs){
            if (ayah.surah.number !== lastSurah) {
                const surahDetails = await QuranModel.fetchSurahDetails(ayah.surah.number);
                QuranView.displaySurahDetails(surahDetails, juz, hizb);
                content += `<div class='surah-title'>${ayah.surah.name}</div>`;
                if (ayah.surah.number !== 9 && ayah.surah.number !== 1) content += `<div class='bismillah'>\u{628}\u{650}\u{633}\u{652}\u{645}\u{650} \u{627}\u{644}\u{644}\u{651}\u{64E}\u{647}\u{650} \u{627}\u{644}\u{631}\u{651}\u{64E}\u{62D}\u{652}\u{645}\u{64E}\u{670}\u{646}\u{650} \u{627}\u{644}\u{631}\u{651}\u{64E}\u{62D}\u{650}\u{64A}\u{645}\u{650}</div>`;
                lastSurah = ayah.surah.number;
            }
            let text = ayah.text;
            if (ayah.numberInSurah === 1 && ayah.surah.number !== 9 && ayah.surah.number !== 1) text = text.replace("\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064E\u0647\u0650 \u0671\u0644\u0631\u0651\u064E\u062D\u0652\u0645\u064E\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064E\u062D\u0650\u064A\u0645\u0650", "").trim();
            text = text.replace(/۞/g, `<span class="ruku-marker">\u{6DE}</span>`);
            content += `<span class='ayah'>${text} <span class='ayah-number'>(${ayah.numberInSurah})</span></span>`;
        }
        return content;
    }
};

//# sourceMappingURL=index.ede04314.js.map
