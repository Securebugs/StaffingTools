function getRandomColor() {
        const colors = ['black', 'red'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    async function fetchTrends() {
        try {
            // Use CORS proxy
            const originalUrl = 'https://gnews.io/api/v4/search?q=india&lang=en&max=5&apikey=14c47e12f50dc0e35b8f018d3f4916f2';
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/' + originalUrl;
            
            console.log('Fetching from proxy:', proxyUrl);
            const response = await fetch(proxyUrl);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('API Data received:', data);

            let trendsContent = '';

            if (data.articles && data.articles.length > 0) {
                data.articles.forEach((item, index) => {
                    const title = item.title || 'No Title';
                    const link = item.url || '#';
                    const color = getRandomColor();
                    trendsContent += `<a href="${link}" target="_blank" class="trend-item" style="color: ${color};">${title}</a>`;
                    if (index < data.articles.length - 1) {
                        trendsContent += `<span class="separator">|</span>`;
                    }
                });
            } else {
                trendsContent = 'No news articles found.';
            }

            document.getElementById('trends-marquee').innerHTML = trendsContent;
        } catch (error) {
            console.error('Error fetching news:', error);
            document.getElementById('trends-marquee').innerHTML = 'Error loading news. Please try again later.';
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        fetchTrends();
        const refreshInterval = 4 * 60 * 60 * 1000;
        setInterval(fetchTrends, refreshInterval);

        const marquee = document.querySelector('.marquee');
        const playPauseBtn = document.getElementById('playPauseBtn');
        let isPaused = false;

        playPauseBtn.addEventListener('click', () => {
            if (isPaused) {
                marquee.style.animationPlayState = 'running';
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                marquee.style.animationPlayState = 'paused';
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
            isPaused = !isPaused;
        });
    });