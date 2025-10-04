function updateTime() {
      const timeZones = {
        IST: 'Asia/Kolkata',      // Added Indian Standard Time
        EST: 'America/New_York',
        CST: 'America/Chicago',
        MST: 'America/Denver',
        PST: 'America/Los_Angeles',
        AKST: 'America/Anchorage',
        HST: 'Pacific/Honolulu'
      };

      Object.keys(timeZones).forEach((zone) => {
        const now = new Date().toLocaleTimeString('en-US', {
          timeZone: timeZones[zone],
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
        document.getElementById(`time-${zone}`).textContent = now;
      });
    }
    setInterval(updateTime, 1000);
    updateTime(); // Initial call to avoid initial delay