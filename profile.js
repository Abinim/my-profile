// script.js
document.addEventListener('DOMContentLoaded', function () {
  // Get all buttons
  const buttons = document.querySelectorAll('.nav-button');

  // Add click event listener to each button
  buttons.forEach(button => {
    button.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default link behavior

      // Get the URL from the data-page attribute
      const page = this.getAttribute('data-page');

      // Redirect to the specified page
      window.location.href = page;
    });
  });
});
