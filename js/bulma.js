document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const navbarBurgers = Array.from(document.querySelectorAll('.navbar-burger'));
  const navbarItems = document.querySelectorAll('.navbar-item');

  if (navbarBurgers.length > 0) {
    // Add click and touchstart event listeners for mobile and desktop
    navbarBurgers.forEach(el => {
      const toggleMenu = () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      };

      el.addEventListener('click', toggleMenu);
      el.addEventListener('touchstart', toggleMenu);
    });
  }

  // Close the navbar when a link is clicked
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

  // Modal functionality
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    document.querySelectorAll('.modal').forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Trigger modals
  document.querySelectorAll('.js-modal-trigger').forEach($trigger => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => openModal($target));
  });

  // Close modals
  document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button').forEach($close => {
    const $target = $close.closest('.modal');
    $close.addEventListener('click', () => closeModal($target));
  });

  // Close modals with keyboard
  document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
      closeAllModals();
    }
  });

  // Back-to-top functionality
  const backToTopButton = document.querySelector('.back-to-top');
  if (backToTopButton) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });

    backToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Form validation
  const requiredFields = document.querySelectorAll('input[required], textarea[required]');
  requiredFields.forEach(field => {
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

    field.addEventListener('blur', checkField);
    field.addEventListener('input', checkField);
  });
});
