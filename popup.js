console.log('Popup loaded.');

chrome.storage.local.get('mediumReads', (data) => {
  console.log('Fetched reads from storage:', data);
  const reads = data.mediumReads || [];
  const list = document.getElementById('reads');
  const message = document.getElementById('message'); // Assuming there's a message element in your popup HTML.

  // Chill mood message
  message.textContent = "Chill, your Medium reads are being logged...";

  if (reads.length === 0) {
    list.innerHTML = '<li>No reads logged yet.</li>';
  } else {
    // Function to truncate text
    const truncateText = (text, maxLength) => {
      return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    // Render each read
    reads.forEach(({ title, url, timestamp }, index) => {
      const truncatedTitle = truncateText(title, 40); // Set max length (e.g., 40 characters)
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="item-container">
          <div class="read-details">
            <a href="${url.replace('medium.com', 'readmedium.com')}" target="_blank" title="${title}" class="read-title">${truncatedTitle}</a>
            <small class="read-date">${new Date(timestamp).toLocaleString()}</small>
          </div>
          <i class="fas fa-trash delete-btn" title="Delete" data-index="${index}"></i>
        </div>
      `;
      list.appendChild(li);
    });

    // Add event listener for delete buttons
    document.querySelectorAll('.delete-btn').forEach((button) => {
      button.addEventListener('click', (e) => {
        const index = parseInt(e.target.getAttribute('data-index'), 10);
        reads.splice(index, 1); // Remove the clicked item from the array
        chrome.storage.local.set({ mediumReads: reads }, () => {
          console.log('Updated reads saved to storage:', reads);
          location.reload(); // Refresh the popup to reflect the changes
        });
      });
    });
  }
});
