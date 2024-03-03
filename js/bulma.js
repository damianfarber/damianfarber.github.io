document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
    // Close the menu when a navigation item is clicked
    const $navbarItems = Array.prototype.slice.call(document.querySelectorAll('.navbar-item'), 0);
    $navbarItems.forEach(el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.closest('.navbar').querySelector('.navbar-burger').dataset.target;
        const $target = document.getElementById(target);
  
        // Remove the "is-active" class from both the "navbar-burger" and the "navbar-menu"
        document.querySelector('.navbar-burger').classList.remove('is-active');
        $target.classList.remove('is-active');
      });
    });
  
  });