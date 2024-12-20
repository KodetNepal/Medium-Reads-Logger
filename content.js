// Tracks Medium articles and sends data to storage
chrome.runtime.sendMessage({ action: 'logRead', url: window.location.href, title: document.title });