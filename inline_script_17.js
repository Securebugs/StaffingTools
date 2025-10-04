const resetBtn = document.querySelector('.btn-secondary');
  const contactForm = document.getElementById('contactForm');
  const emailForm = document.getElementById('emailForm');

  resetBtn.addEventListener('click', function() {
    const textInputs = contactForm.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
    for (const input of textInputs) {
      input.value = ''; // Clearing the input value
    }
  });

const submitContactFormBtn = document.getElementById('submitContactForm');
submitContactFormBtn.addEventListener('click', async function(event) {
  event.preventDefault();

  const emailInput = contactForm.querySelector('input[type="email"]');
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === '' || !emailRegex.test(emailValue)) {
    emailInput.classList.remove('is-valid');
    emailInput.classList.add('is-invalid');
    return;
  } else {
    emailInput.classList.remove('is-invalid');
    emailInput.classList.add('is-valid');
  }

  const formData = new FormData(contactForm);
  const url = 'https://script.google.com/macros/s/AKfycbzd19Lr4aju-TLwqwLiCel6o0aLpUnOsbm2CqQTktBtavYktq6lF0l27iD7Hnqd912JOw/exec';

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (response.status === 400 && errorData.error === 'Duplicate email found') {
        alert('This email address has already been submitted.');
      } else {
        console.error('Server Error:', errorData.error);
        alert('Failed to submit email.');
      }
      return;
    }

    alert('Email submitted successfully!');
    contactForm.reset();
  } catch (error) {
    console.error('Client Error:', error);
    alert('An error occurred while submitting the email.');
  }
});


  const submitEmailFormBtn = document.getElementById('submitEmailForm');
  submitEmailFormBtn.addEventListener('click', async function(event) {
    event.preventDefault();

    const formData = new FormData(emailForm);
    const url = 'https://script.google.com/macros/s/AKfycbzd19Lr4aju-TLwqwLiCel6o0aLpUnOsbm2CqQTktBtavYktq6lF0l27iD7Hnqd912JOw/exec';

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        emailForm.reset();
      } else {
        console.error('Server Error:', response.statusText);
        alert('Failed to submit form.');
      }
    } catch (error) {
      console.error('Client Error:', error);
      alert('An error occurred while submitting the form.');
    }
  });