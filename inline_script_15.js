// [1] Block ALL popups (including ads opening in new tabs)
    window.open = function() { return null; };

    // [2] Block fake click ads (if same-origin) while allowing video controls
    document.getElementById('ad-free-iframe').addEventListener('load', function() {
        try {
            const iframeDoc = this.contentDocument || this.contentWindow.document;
            iframeDoc.addEventListener('click', function(e) {
                if (!e.target.closest('video, .video-player')) { // Allow clicks on video elements
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }
            }, true);
        } catch (e) {
            console.log("Cross-origin iframe: Can't block internal clicks.");
        }
    });