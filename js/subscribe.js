// Get the subscription popup
const popup = document.getElementById("popup");

// Get the initial scroll position
let scrollPosition = window.pageYOffset;

// Add a scroll event listener
window.addEventListener("scroll", () => {
  // Get the new scroll position
  const newScrollPosition = window.pageYOffset;

  // Check if the user has scrolled down at least once
  if (newScrollPosition > scrollPosition) {
    // Show the subscription popup
    popup.style.display = "block";

    // Remove the scroll event listener
    window.removeEventListener("scroll", arguments.callee);
  }

  // Update the scroll position
  scrollPosition = newScrollPosition;
});

// Add a submit event listener to the subscription form
popup.querySelector("form").addEventListener("submit", (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Hide the subscription popup
  popup.style.display = "none";
});
