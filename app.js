document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  function updateButtonLabel() {
    if (body.classList.contains('dark')) {
      themeToggle.textContent = 'Mode Clair';
    } else {
      themeToggle.textContent = 'Mode Dark';
    }
  }

  themeToggle.addEventListener('click', function () {
    body.classList.toggle('dark');
    updateButtonLabel();
  });

  // Set the initial button label
  updateButtonLabel();
});