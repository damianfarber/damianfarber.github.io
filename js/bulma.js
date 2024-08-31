document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if (navbarBurgers.length > 0) {

    // Add a click event on each of them
    navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

  // Close the navbar when a link is clicked
  const navbarItems = document.querySelectorAll('.navbar-item');

  navbarItems.forEach(item => {
    item.addEventListener('click', () => {
      const navbarBurger = document.querySelector('.navbar-burger');
      const navbarMenu = document.getElementById(navbarBurger.dataset.target);

      if (navbarBurger.classList.contains('is-active')) {
        navbarBurger.classList.remove('is-active');
        navbarMenu.classList.remove('is-active');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    if(event.key === "Escape") {
      closeAllModals();
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Get the back-to-top button
  const backToTopButton = document.querySelector('.back-to-top');

  // Show or hide the button when scrolling
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  // Smooth scroll to top
  backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// Contact form interaction with required fields
document.addEventListener('DOMContentLoaded', () => {
  const requiredFields = document.querySelectorAll('input[required], textarea[required]');

  requiredFields.forEach(field => {
    // Select the corresponding help message paragraph
    const helpMessage = field.parentElement.nextElementSibling;

    const checkField = () => {
      if (!field.value.trim()) {
        field.classList.add('is-danger');
        helpMessage.classList.remove('is-hidden');
      } else {
        field.classList.remove('is-danger');
        helpMessage.classList.add('is-hidden');
      }
    };

    // Add event listeners for blur and input events
    field.addEventListener('blur', checkField);
    field.addEventListener('input', checkField);
  });
});