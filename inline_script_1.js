// Enable input and button initially
document.getElementById('AIUserInput').disabled = false;
document.getElementById('AISendButton').disabled = false;

// Add event listeners
document.getElementById('AISendButton').addEventListener('click', sendMessage);
document.getElementById('AIUserInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Function to parse rich text and convert it to HTML
function parseRichText(response) {
    // Replace **bold** with <strong>bold</strong>
    response = response.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Replace *italic* with <em>italic</em>
    response = response.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Replace _underline_ with <u>underline</u>
    response = response.replace(/_(.*?)_/g, '<u>$1</u>');

    // Replace bullet points with <ul> and <li>
    response = response.replace(/(\n\s*-\s+.*)+/g, (match) => {
        const items = match.split('\n').filter(line => line.trim() !== '');
        const listItems = items.map(item => `<li>${item.replace('- ', '').trim()}</li>`).join('');
        return `<ul>${listItems}</ul>`;
    });

    // Replace numbered lists with <ol> and <li>
    response = response.replace(/(\n\s*\d+\.\s+.*)+/g, (match) => {
        const items = match.split('\n').filter(line => line.trim() !== '');
        const listItems = items.map(item => `<li>${item.replace(/^\d+\.\s*/, '').trim()}</li>`).join('');
        return `<ol>${listItems}</ol>`;
    });

    // Replace paragraphs with <p>
    response = response.replace(/(\n\n)/g, '</p><p>');
    response = `<p>${response}</p>`;

    // Replace titles with <h3>
    response = response.replace(/(\n#\s+.*)/g, (match) => {
        return `<h3>${match.replace('#', '').trim()}</h3>`;
    });

    // Check if the message contains a table
    if (response.includes('|')) {
        const tableRegex = /(\|.*\|(\n\|.*\|)+)/g; // Match the entire table block
        const tableMatches = response.match(tableRegex);
        if (tableMatches) {
            // Process only the first occurrence of the table
            const tableBlock = tableMatches[0];
            const rows = tableBlock.split('\n').filter(row => row.trim() !== '');
            const tableHTML = `<table class="table table-bordered table-striped">${rows
                .map((row) => {
                    const cells = row.split('|').filter((cell) => cell.trim() !== '');
                    return `<tr>${cells.map((cell) => `<td>${cell.trim()}</td>`).join('')}</tr>`;
                })
                .join('')}</table>`;

            // Replace the entire table block with the generated HTML
            response = response.replace(tableRegex, tableHTML);
        }
    }

    return response;
}

// Function to send a message
function sendMessage() {
    const userInput = document.getElementById('AIUserInput');
    const chatBox = document.getElementById('AIChatBox');
    const sendButton = document.getElementById('AISendButton');
    const loadingIcon = document.getElementById('AILoading');

    if (userInput.value.trim() === '') return;

    // Disable input and button
    userInput.disabled = true;
    sendButton.disabled = true;

    // Show loading icon
    loadingIcon.style.display = 'block';

    // Display user's message
    const userMessage = document.createElement('div');
    userMessage.classList.add('AIMessage', 'AIUserMessage');
    userMessage.textContent = userInput.value;
    chatBox.appendChild(userMessage);

    // Clear input
    const question = userInput.value;
    userInput.value = '';

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Send question to Gemini AI
    fetchGeminiResponse(question)
        .then(response => {
            // Parse rich text and convert to HTML
            const formattedResponse = parseRichText(response);

            // Display AI's response
            const botMessage = document.createElement('div');
            botMessage.classList.add('AIMessage', 'AIBotMessage');
            botMessage.innerHTML = formattedResponse;

            // Add copy icon
            const copyIcon = document.createElement('i');
            copyIcon.className = 'fas fa-copy AICopyIcon';
            copyIcon.onclick = () => {
                // Copy the entire bot message to clipboard
                const range = document.createRange();
                range.selectNodeContents(botMessage);
                const selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
                document.execCommand('copy');
                selection.removeAllRanges();
                alert('Copied to clipboard!');
            };

            botMessage.appendChild(copyIcon);
            chatBox.appendChild(botMessage);

            // Scroll to bottom
            chatBox.scrollTop = chatBox.scrollHeight;
        })
        .catch(error => {
            console.error('Error:', error);
        })
        .finally(() => {
            // Hide loading icon and re-enable input and button
            loadingIcon.style.display = 'none';
            userInput.disabled = false;
            sendButton.disabled = false;
        });
}

// Function to fetch Gemini AI response
async function fetchGeminiResponse(question) {
    const apiKey = 'AIzaSyBBNlnMeK1nX7m-WCum4PALM9bEpZXmKKQ'; // Replace with your actual API key
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents: [{
                parts: [{ text: question }]
            }]
        })
    });

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
}