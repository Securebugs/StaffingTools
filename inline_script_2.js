document.addEventListener('DOMContentLoaded', function() {
        const mainIcon = document.getElementById('mainIcon');
        const verticalIcons = document.getElementById('verticalIcons');
        let hoverTimeout;
        let currentPopup = null;

        // Icon Hover Handling
        function showIcons() {
            clearTimeout(hoverTimeout);
            verticalIcons.style.display = 'flex';
            mainIcon.innerHTML = '<i class="fas fa-times"></i>';
        }

        function hideIcons() {
            hoverTimeout = setTimeout(() => {
                verticalIcons.style.display = 'none';
                mainIcon.innerHTML = '<i class="fas fa-plus"></i>';
            }, 300);
        }

        mainIcon.addEventListener('mouseenter', showIcons);
        mainIcon.addEventListener('mouseleave', hideIcons);
        verticalIcons.addEventListener('mouseenter', showIcons);
        verticalIcons.addEventListener('mouseleave', hideIcons);

        // Function to open popup
        function openPopup(popupId, updateHash = true) {
            if(currentPopup) currentPopup.style.display = 'none';
            currentPopup = document.getElementById(popupId);
            currentPopup.style.display = 'flex';
            
            // Update URL hash without scrolling
            if (updateHash) {
                try {
                    const newUrl = window.location.href.split('#')[0] + '#' + popupId;
                    window.history.replaceState(null, null, newUrl);
                } catch (e) {
                    console.log("Hash update failed:", e);
                }
            }
            
            if(popupId === 'cart-popup' && !document.querySelector('#rzpScript')) {
                const script = document.createElement('script');
                script.id = 'rzpScript';
                script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
                script.dataset.payment_button_id = 'pl_PsXVCue2RE0NI5';
                script.async = true;
                document.getElementById('rzpForm').appendChild(script);
            }
        }

        // Function to close popup
        function closePopup() {
            if(currentPopup) {
                currentPopup.style.display = 'none';
                currentPopup = null;
                
                // Remove hash from URL without scrolling
                try {
                    const newUrl = window.location.href.split('#')[0];
                    window.history.replaceState(null, null, newUrl);
                } catch (e) {
                    console.log("Hash removal failed:", e);
                }
            }
        }

        // Popup Handling with hash support
        document.querySelectorAll('.icon-item').forEach(icon => {
            icon.addEventListener('click', function() {
                const popupId = this.dataset.popup;
                openPopup(popupId, true);
            });
        });

        // Close Handling
        document.querySelectorAll('.close-btn').forEach(btn => {
            btn.addEventListener('click', closePopup);
        });

        // Close on Outside Click
        window.addEventListener('click', (e) => {
            if(e.target.classList.contains('popup')) {
                closePopup();
            }
        });

        // Notes Placeholder Handling
        const editable = document.querySelector('.content-editable');
        if (editable) {
            editable.addEventListener('focus', function() {
                if(this.textContent === 'Start typing here...') this.textContent = '';
            });
            editable.addEventListener('blur', function() {
                if(!this.textContent.trim()) this.textContent = 'Start typing here...';
            });
        }

        // Handle URL hash on page load for popups
        function handlePopupHash() {
            const hash = window.location.hash.substring(1);
            if (hash) {
                const popupExists = document.getElementById(hash);
                if (popupExists && popupExists.classList.contains('popup')) {
                    // Open the popup but don't update hash again
                    openPopup(hash, false);
                }
            }
        }

        // Listen for hash changes
        window.addEventListener('hashchange', handlePopupHash);

        // Initial popup setup based on URL hash
        handlePopupHash();
    });

    function openModal() {
        alert('Terms & Conditions content here');
    }