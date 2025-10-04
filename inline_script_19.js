document.addEventListener("DOMContentLoaded", function () {
        const menuToggle = document.getElementById("menuToggle");
        const sidebar = document.getElementById("sidebar");

        // Toggle sidebar in mobile mode
        menuToggle.addEventListener("click", function () {
            sidebar.classList.toggle("show");
        });

        // Switch tabs and hide sidebar in mobile mode
        const tabLinks = document.querySelectorAll(".sidebar a");
        tabLinks.forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const parentLi = this.parentElement; // Get the parent <li> element

                // Remove active class from all <li> elements
                document.querySelectorAll(".sidebar ul li").forEach(li => {
                    li.classList.remove("active");
                });

                // Add active class to the parent <li> of the clicked link
                parentLi.classList.add("active");

                const tabId = this.getAttribute("data-tab");
                document.querySelectorAll(".tab-content").forEach(tab => {
                    tab.classList.remove("active");
                });
                document.getElementById(tabId).classList.add("active");

                // Update URL hash without scrolling - works for file protocol
                try {
                    // Method that works for both file and http protocols without scroll
                    const newUrl = window.location.href.split('#')[0] + '#' + tabId;
                    window.history.replaceState(null, null, newUrl);
                } catch (e) {
                    // Fallback for browsers that don't support replaceState with file protocol
                    console.log("Hash update failed:", e);
                }

                // Hide sidebar in mobile mode after clicking a tab
                if (window.innerWidth <= 767.98) {
                    sidebar.classList.remove("show");
                }
            });
        });

        // Handle URL hash on page load - ONLY if hash exists
        if (window.location.hash) {
            const hash = window.location.hash.substring(1);
            const tabExists = document.getElementById(hash);
            if (tabExists && tabExists.classList.contains('tab-content')) {
                // Switch to the tab but don't update hash again
                const activeLink = document.querySelector(`.sidebar a[data-tab="${hash}"]`);
                if (activeLink) {
                    const parentLi = activeLink.parentElement;
                    document.querySelectorAll(".sidebar ul li").forEach(li => {
                        li.classList.remove("active");
                    });
                    parentLi.classList.add("active");
                    
                    document.querySelectorAll(".tab-content").forEach(tab => {
                        tab.classList.remove("active");
                    });
                    document.getElementById(hash).classList.add("active");
                }
            }
        }
        // If no hash, stay on homepage - no automatic tab activation
    });