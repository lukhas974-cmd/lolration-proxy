document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#proxyForm');
  const input = document.querySelector('#proxyUrl');
  const message = document.querySelector('#formMessage');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const value = input.value.trim();

    if (!value) {
      message.textContent = 'Please enter a valid website URL.';
      message.style.color = '#ffb3b3';
      input.focus();
      return;
    }

    const safeUrl = value.startsWith('http://') || value.startsWith('https://')
      ? value
      : `https://${value}`;

    message.textContent = `Demo prepared for: ${safeUrl}`;
    message.style.color = '#88f0d0';
    input.value = safeUrl;
  });
});
