chrome.runtime.onInstalled.addListener(() => {
  console.log('Medium Reads Logger extension installed!');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'logRead') {
    console.log('Logging read:', message);
    chrome.storage.local.get('mediumReads', (data) => {
      const reads = data.mediumReads || [];
      const isAlreadyLogged = reads.some(read => read.url === message.url);
      if (!isAlreadyLogged) {
        reads.push({ title: message.title, url: message.url, timestamp: new Date().toISOString() });
        chrome.storage.local.set({ mediumReads: reads }, () => {
          console.log('Read logged successfully!');
          sendResponse({ success: true });
        });
      } else {
        console.log('URL already logged, skipping.');
        sendResponse({ success: false, message: 'Duplicate URL' });
      }
    });
    return true; // Keep the message channel open for async response
  }
});
