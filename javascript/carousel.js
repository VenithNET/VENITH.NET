// Duplicate buttons in Carousel
document.addEventListener("DOMContentLoaded", function () {
  const ORIGINAL_BUTTONS = document.querySelectorAll(
    ".carousel-buttons > div > a"
  );
  const BUTTONS_CONTAINER = document.querySelector(".carousel-buttons > div");

  // Loop through original buttons and clone anchor elements
  ORIGINAL_BUTTONS.forEach(function (button) {
    const CLONED_BUTTON = button.cloneNode(true);
    BUTTONS_CONTAINER.appendChild(CLONED_BUTTON);
  });
});
