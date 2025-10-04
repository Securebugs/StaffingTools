const emailsTextarea = document.getElementById('emails');
const downloadBtn = document.getElementById('download-btn');
const messageDiv = document.getElementById('message');

downloadBtn.addEventListener('click', () => {
  const emailList = emailsTextarea.value.trim().split('\n');

  if (!emailList.length) {
    messageDiv.textContent = 'Please paste some emails first.';
    return;
  }

  // Remove duplicate emails and non-email formats
  const uniqueEmails = new Set(emailList.filter(email => {
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format validation
    return trimmedEmail && emailRegex.test(trimmedEmail);
  }));

  const originalEmailCount = uniqueEmails.size; // Count unique emails

  let currentFile = 1;
  let fileContent = '';
  let emailsInFile = 0; // Track emails in the current file

  for (const email of uniqueEmails) {
    if (emailsInFile >= 1999) { // Check if current file has reached the limit
      createAndDownloadFile(fileContent, currentFile);
      currentFile++;
      fileContent = '';
      emailsInFile = 0;
    }

    fileContent += (fileContent ? ',' : 'Email ID') + '\n' + email; // Add header only for the first email in each file
    emailsInFile++; // Increment emails in the current file
  }

  if (fileContent.length) {
    createAndDownloadFile(fileContent, currentFile);
  }

  messageDiv.textContent = `Downloaded ${originalEmailCount} original emails successfully!`;
});

function createAndDownloadFile(content, fileNumber) {
  // Generate random filename with prefix and suffix
  const randomString = Math.random().toString(36).substring(2, 7); // Generate random 5-character alphanumeric string
  const filename = `Vendor List_${randomString}`;

  const blob = new Blob([content], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
}

// Update message on textarea input change
emailsTextarea.addEventListener('input', () => {
  const emailList = emailsTextarea.value.trim().split('\n');
  const uniqueEmails = new Set(emailList.filter(email => email.trim())); // Basic check for non-empty entries
  const originalEmailCount = uniqueEmails.size;
  messageDiv.textContent = `Original emails: ${originalEmailCount}`;
});