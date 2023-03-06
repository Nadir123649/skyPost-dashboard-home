const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', () => {
    // Toggle the active class on the clicked dropdown
    dropdown.classList.toggle('active');
    // Close all other dropdown menus
    dropdowns.forEach(otherDropdown => {
      if (otherDropdown !== dropdown) {
        otherDropdown.classList.remove('active');
      }
    });
  });
});


const toggleButton = document.querySelector('.sidebar-toggle-button');
const sidebar = document.querySelector('.sidebar');

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});





