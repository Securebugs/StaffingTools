function copyEmailAsHTML(contentId) {
      const emailContent = document.getElementById(contentId);
      const range = document.createRange();
      range.selectNode(emailContent);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand('copy');
      selection.removeAllRanges();
      alert("Email content copied to clipboard in rich HTML format!");
    }