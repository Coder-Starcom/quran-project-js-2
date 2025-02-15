# Quran Explorer

## Overview
Quran Explorer is a web-based application that allows users to navigate through the pages of the Quran dynamically. The application follows the **MVC (Model-View-Controller) architecture** to separate concerns efficiently.

Demo: https://quran-js-project-v2.netlify.app/
## Features
- **Browse Quran Pages**: Navigate between pages smoothly.
- **Surah Details**: Displays details like name, translation, revelation type, total ayahs, Juz, and Hizb.
- **Symbol Styling**: Special symbol (۞) is highlighted in white.

## Technologies Used
- **HTML, CSS, JavaScript**
- **Fetch API** (for retrieving Quran data)
- **MVC Architecture**

## Project Structure
```
quran-explorer/
│── index.html        # Main HTML file
│── styles.css        # Styling file
└── js/
    │── script.js     # Initializes the MVC components
    │── model.js      # Handles data fetching
    │── view.js       # Manages UI rendering
    │── controller.js # Controls interaction between Model & View
```

## API Endpoints Used
- **Quran Page Data**: `https://api.alquran.cloud/v1/page/{page}/quran-uthmani`
- **Surah Details**: `https://api.alquran.cloud/v1/surah/{surahNumber}`

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/quran-explorer.git
   ```
2. Open `index.html` in a browser.
3. Ensure an internet connection for API data retrieval.

## How It Works
1. **Model (model.js)**:
   - Fetches Quran page and Surah details from the API.
2. **View (view.js)**:
   - Updates the UI with fetched content.
   - Displays Surah details in a table format.
   - Highlights special symbols (۞) in white.
3. **Controller (controller.js)**:
   - Manages user interaction (page navigation, Surah selection).

## Future Enhancements
- **Offline Support**: Cache Quran data for offline reading.
- **Search Feature**: Find specific Surahs or Ayahs.
- **Audio Playback**: Add recitations.
- **Bookmarking**: Save favorite verses/pages.

## License
This project is open-source under the MIT License.

---
*Contributions are welcome! Feel free to fork and improve the project.*

