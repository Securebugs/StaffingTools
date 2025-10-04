const form = document.getElementById('emailForm');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const url = 'https://script.google.com/macros/s/AKfycbzd19Lr4aju-TLwqwLiCel6o0aLpUnOsbm2CqQTktBtavYktq6lF0l27iD7Hnqd912JOw/exec'; // Updated URL with CORS Anywhere

      try {
        const response = await fetch(url, {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          alert('Email submitted successfully!');
          form.reset();
        } else {
          console.error('Server Error:', response.statusText);
          alert('Failed to submit email.');
        }
      } catch (error) {
        console.error('Client Error:', error);
        alert('An error occurred while submitting the form.');
      }
    });