function extractEmails() {
            const inputText = document.getElementById('inputText').value;
            const officialEmails = document.getElementById('officialEmails');
            const unofficialEmails = document.getElementById('unofficialEmails');
            const noEmailMessage = document.getElementById('noEmailMessage');
            const totalEmails = document.getElementById('totalEmails');
            const totalOfficialEmails = document.getElementById('totalOfficialEmails');
            const totalUnofficialEmails = document.getElementById('totalUnofficialEmails');
            
            // Regular expression to match email addresses
            const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;

            // Extract emails from the input text using the regular expression
            const extractedEmails = inputText.match(emailRegex) || [];

            // Count official and unofficial emails
            let officialCount = 0;
            let unofficialCount = 0;
            let officialList = [];
            let unofficialList = [];
            extractedEmails.forEach(email => {
                if (/@(gmail\.com|outlook\.com|outlook\.in)$/i.test(email)) {
                    unofficialCount++;
                    unofficialList.push(email);
                } else {
                    officialCount++;
                    officialList.push(email);
                }
            });

            // Display the extracted emails or a message if no emails are found
            if (extractedEmails.length > 0) {
                officialEmails.value = officialList.join('\n');
                unofficialEmails.value = unofficialList.join('\n');
                noEmailMessage.textContent = '';
                
                // Display the total number of emails found
                totalEmails.textContent = `Total email(s) found: ${extractedEmails.length}`;
                
                // Display the total number of official emails
                totalOfficialEmails.textContent = `Total official email(s): ${officialCount}`;
                
                // Display the total number of unofficial emails
                totalUnofficialEmails.textContent = `Total unofficial email(s): ${unofficialCount}`;
            } else {
                officialEmails.value = '';
                unofficialEmails.value = '';
                noEmailMessage.textContent = 'No email extracted/found.';
                totalEmails.textContent = '';
                totalOfficialEmails.textContent = '';
                totalUnofficialEmails.textContent = '';

                // Hide the message after 6 seconds
                setTimeout(function() {
                    noEmailMessage.textContent = '';
                }, 6000);
            }
        }

        function copyToClipboard(elementId) {
            const textarea = document.getElementById(elementId);
            textarea.select();
            document.execCommand('copy');
        }