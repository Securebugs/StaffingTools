let progress = 0;
  let interval = setInterval(() => {
    progress++;
    document.getElementById("progress").style.width = progress + "%";
    document.getElementById("progressText").textContent =
      "We are updating our system... " + progress + "%";
    
    if (progress >= 100) {
      clearInterval(interval);
      document.getElementById("loader").style.display = "none";
      document.getElementById("cardShuffle").style.display = "flex";
    }
  }, 50); // ~5 seconds