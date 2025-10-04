let activeCard = null;
  let timeoutId = null;

  function toggleTooltip(card) {
    // Close the previously active card's tooltip
    if (activeCard && activeCard !== card) {
      activeCard.classList.remove('active');
    }

    // Toggle the clicked card's tooltip
    card.classList.toggle('active');

    // Update the active card
    activeCard = card.classList.contains('active') ? card : null;

    // Reset the auto-hide timeout
    if (activeCard) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (activeCard) {
          activeCard.classList.remove('active');
          activeCard = null;
        }
      }, 30000); // 30 seconds
    }
  }

  // Close tooltips when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.visa-card')) {
      if (activeCard) {
        activeCard.classList.remove('active');
        activeCard = null;
      }
    }
  });