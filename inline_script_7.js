document.addEventListener('DOMContentLoaded', function() {
            const jobDescriptionTextarea = document.getElementById('jobDescription');
            const jobTitleOutput = document.getElementById('jobTitleOutput');
            const booleanOutputTextarea = document.getElementById('booleanOutput');
            const generateBtn = document.getElementById('generateBtn');
            const copyTitleBtn = document.getElementById('copyTitleBtn');
            const copyBooleanBtn = document.getElementById('copyBooleanBtn');
            const loadingIndicator = document.getElementById('loadingIndicator');
            
            // Function to format terms with quotes when needed
            function formatBooleanTerm(term) {
                term = term.trim();
                
                // Skip if empty or just parentheses
                if (!term || term === '(' || term === ')') return term;
                
                // Check if term contains special characters or digits
                const hasSpecialChars = /[^a-zA-Z\s]/.test(term);
                
                // Check if term contains spaces (multi-word)
                const isMultiWord = term.includes(' ');
                
                // Add quotes if multi-word or has special characters
                if (isMultiWord || hasSpecialChars) {
                    // Remove any existing quotes first
                    term = term.replace(/"/g, '');
                    return `"${term}"`;
                }
                
                return term;
            }
            
            // Function to process and format the entire boolean string
            function formatBooleanString(booleanStr) {
                // First, handle the parentheses content
                booleanStr = booleanStr.replace(/\(([^)]+)\)/g, function(match, group) {
                    const formattedGroup = group.split('OR').map(term => {
                        return formatBooleanTerm(term);
                    }).join(' OR ');
                    return `(${formattedGroup})`;
                });
                
                // Then handle terms outside parentheses
                const parts = booleanStr.split(/(AND|OR)/);
                
                const formattedParts = parts.map(part => {
                    if (part === 'AND' || part === 'OR') {
                        return part;
                    }
                    
                    // Skip if already processed (inside parentheses)
                    if (part.includes('(') || part.includes(')')) {
                        return part;
                    }
                    
                    return formatBooleanTerm(part);
                });
                
                return formattedParts.join(' ');
            }
            
            // Function to fetch Gemini AI response
            async function fetchGeminiResponse(question) {
                const apiKey = 'AIzaSyBBNlnMeK1nX7m-WCum4PALM9bEpZXmKKQ';
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
                return data;
            }
            
            generateBtn.addEventListener('click', async function() {
                const jd = jobDescriptionTextarea.value.trim();
                
                if (!jd) {
                    alert('Please paste a job description first.');
                    return;
                }
                
                // Show loading indicator
                loadingIndicator.style.display = 'block';
                jobTitleOutput.value = '';
                booleanOutputTextarea.value = '';
                generateBtn.disabled = true;
                
                try {
        // Enhanced title extraction prompt
        const titlePrompt = `Analyze this job description and extract ALL possible job titles that would match this position:
        1. First look for explicitly mentioned titles
        2. If no titles found, derive from primary skills/technologies
        3. Include common variations, abbreviations, and seniority levels
        4. Consider industry-standard titles for the mentioned technologies
        
        Return ONLY an OR-separated list in parentheses with no additional text.
        
        Example 1 (explicit title):
        ("Senior Software Engineer" OR "Software Developer" OR "Application Engineer")
        
        Example 2 (derived from skills):
        ("Python Developer" OR "Backend Engineer" OR "Django Developer")
        
        Job Description:
        ${jd}`;

        // Enhanced skills extraction prompt
        const skillsPrompt = `Create a perfect Boolean search string by:
        1. Identifying ALL technical components (languages, frameworks, tools, methodologies)
        2. Grouping similar terms with OR (synonyms, versions, alternatives)
        3. Combining different categories with AND
        4. Formatting rules:
           - Multi-word terms: "Data Modeling"
           - Special characters/digits: "C#", "COBOL-85"
           - Never quote parentheses or operators
        
        Return ONLY the formatted Boolean string with no additional text.
        
        Example Output:
        (Java OR "Spring Boot") AND (Microservices OR "Micro services" OR "Micro-services" OR "API Development") AND (Agile OR Scrum)
        
                    Job Description:
                    ${jd}
                    
                    Return ONLY the Boolean search string, nothing else.`;
                    
                    // Fetch both responses
                    const [titleResponse, skillsResponse] = await Promise.all([
                        fetchGeminiResponse(titlePrompt),
                        fetchGeminiResponse(skillsPrompt)
                    ]);
                    
                    // Process title response
                    if (titleResponse.candidates && titleResponse.candidates[0].content.parts[0].text) {
                        let titleString = titleResponse.candidates[0].content.parts[0].text;
                        // Format the titles with quotes
                        titleString = formatBooleanString(titleString);
                        jobTitleOutput.value = titleString;
                    } else {
                        jobTitleOutput.value = "Could not extract job titles";
                    }
                    
                    // Process skills response
                    if (skillsResponse.candidates && skillsResponse.candidates[0].content.parts[0].text) {
                        let booleanString = skillsResponse.candidates[0].content.parts[0].text;
                        
                        // Format the boolean string with proper quotes
                        booleanString = formatBooleanString(booleanString);
                        
                        // Combine job titles with technical skills if both exist
                        if (jobTitleOutput.value && !jobTitleOutput.value.includes("Could not extract")) {
                            booleanString = `${jobTitleOutput.value} AND ${booleanString}`;
                        }
                        
                        booleanOutputTextarea.value = booleanString;
                    } else {
                        booleanOutputTextarea.value = "Error: Could not generate Boolean search. Please try again.";
                    }
                } catch (error) {
                    console.error('Error:', error);
                    booleanOutputTextarea.value = "Error: Failed to process the job description. Please check your API key and try again.";
                } finally {
                    loadingIndicator.style.display = 'none';
                    generateBtn.disabled = false;
                }
            });
            
            // Copy functions
            function copyToClipboard(text, button) {
                navigator.clipboard.writeText(text).then(() => {
                    const icon = button.querySelector('i');
                    const originalClass = icon.className;
                    icon.className = 'fas fa-check';
                    setTimeout(() => {
                        icon.className = originalClass;
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                });
            }
            
            // Copy job titles
            copyTitleBtn.addEventListener('click', function() {
                const textToCopy = jobTitleOutput.value;
                if (textToCopy && textToCopy !== "Could not extract job titles") {
                    copyToClipboard(textToCopy, copyTitleBtn);
                }
            });
            
            // Copy boolean search string
            copyBooleanBtn.addEventListener('click', function() {
                const textToCopy = booleanOutputTextarea.value;
                if (textToCopy && !textToCopy.startsWith("Error:")) {
                    copyToClipboard(textToCopy, copyBooleanBtn);
                }
            });
        });