let currentPage = 1;
    const totalPages = 10;

    // Function to show the current page
    function showPage(pageNumber) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        // Show the current page
        document.getElementById(`page${pageNumber}`).classList.add('active');

        // Update pagination buttons
        updatePagination(pageNumber);
    }

    // Function to update pagination buttons
    function updatePagination(pageNumber) {
        const pagination = document.querySelector('.pagination');
        pagination.innerHTML = ''; // Clear existing buttons

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.addEventListener('click', () => goToPage(i));
            if (i === pageNumber) {
                button.classList.add('active');
            }
            pagination.appendChild(button);
        }

        // Enable/disable previous/next buttons
        document.querySelector('.nav-btn.prev').disabled = (pageNumber === 1);
        document.querySelector('.nav-btn.next').disabled = (pageNumber === totalPages);
    }

    // Go to the next page
    function nextPage() {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    }

    // Go to the previous page
    function prevPage() {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    }

    // Go to a specific page
    function goToPage(pageNumber) {
        currentPage = pageNumber;
        showPage(currentPage);
    }

    // Initialize the book
    showPage(currentPage);


  // Swipe functionality for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    document.querySelector('.book').addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    document.querySelector('.book').addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50; // Minimum swipe distance
        if (touchEndX < touchStartX - swipeThreshold) {
            nextPage(); // Swipe left to go to the next page
        } else if (touchEndX > touchStartX + swipeThreshold) {
            prevPage(); // Swipe right to go to the previous page
        }
    }

    // Initialize the first page and pagination
    showPage(currentPage);