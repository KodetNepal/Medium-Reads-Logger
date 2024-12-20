# Medium Reads Logger

**Author**: Dev Gautam Kumar

A Chrome extension to log and track Medium articles for later reading and analysis. It automatically logs the articles you read on Medium and stores them for quick access, allowing you to review them later.

---

## Features

- **Log Reads**: Tracks Medium articles you open and logs them in local storage.
- **View Logged Reads**: View your logged articles in a popup with title, URL, and timestamp.
- **Delete Logs**: Easily delete any logged article from the popup.
- **Chill Mood Popup**: A subtle message letting you know your reads are being logged in a chill, laid-back way.

---

## Installation

1. Download or clone the repository to your local machine.
2. Open **Chrome** and go to **chrome://extensions**.
3. Enable **Developer Mode** (top right corner).
4. Click **Load unpacked** and select the directory where you downloaded/cloned the repository.
5. The extension should now be installed and visible in your Chrome toolbar.

---

## Usage

1. **Open Medium**: Navigate to any Medium article.
2. **View Logged Articles**: Click on the extension icon to view a list of articles you've logged.
3. **Delete Articles**: If you want to remove a logged article, simply click the trash icon next to the article.

---

## File Structure

- `manifest.json`: The configuration file for the Chrome extension.
- `popup.html`: The HTML for the extension's popup interface.
- `popup.js`: The script that handles displaying the logged articles and interacting with local storage.
- `background.js`: The service worker managing the background processes of the extension.
- `content.js`: The script that tracks the articles you read on Medium.

---

## Permissions

- **storage**: Allows the extension to store and retrieve logged data.
- **activeTab**: Allows the extension to interact with the current active tab.
- **scripting**: Allows the extension to inject scripts into web pages.

---

## Contributing

If you'd like to contribute, feel free to fork the repository and create a pull request. Make sure to follow best practices and test your changes before submitting.

---

## License

This project is licensed under the MIT License.

---

## Contact

For any questions or feedback, feel free to reach out to the author at **kodeit@proton.me**.
