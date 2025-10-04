document.querySelectorAll('.entertainment-card').forEach(card => {
      const content = card.querySelector('.entertainment-content');
      const iframe = card.querySelector('.entertainment-iframe');
      const closeBtn = card.querySelector('.entertainment-close-btn');
      const fullscreenBtn = card.querySelector('.entertainment-fullscreen-btn');

      // Open iframe
      content.addEventListener('click', () => {
        card.classList.add('active');
      });

      // Close iframe without refresh
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.remove('active');
        card.classList.remove('fullscreen');

        // Show other cards
        document.querySelectorAll('.entertainment-card').forEach(otherCard => {
          otherCard.style.display = 'block';
        });
      });

      // Fullscreen functionality
      fullscreenBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.add('fullscreen');

        // Hide other cards
        document.querySelectorAll('.entertainment-card').forEach(otherCard => {
          if (otherCard !== card) {
            otherCard.style.display = 'none';
          }
        });
      });

      // Exit fullscreen
      document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
          card.classList.remove('fullscreen');

          // Show other cards
          document.querySelectorAll('.entertainment-card').forEach(otherCard => {
            otherCard.style.display = 'block';
          });
        }
      });
    });