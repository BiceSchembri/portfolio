// Back to top button (appears when the user scrolls down)
let backToTopButton = document.getElementById('backToTopButton');

onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, and Opera
}

// Add event listener to the back to top button
backToTopButton.addEventListener('click', topFunction);

// Add event listener to adjust header opacity on scroll down
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');

  // Check if the header overlaps other elements
  if (window.scrollY > 0) {
    header.classList.add('opacity-80');
  } else {
    header.classList.remove('opacity-80');
  }
});
