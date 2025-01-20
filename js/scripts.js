 

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Toggle active class on hamburger and nav menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close the menu when a nav-link is clicked
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    // Remove active class from hamburger and nav menu
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Optional: Close the menu if the user clicks outside of it (helps for better UX)
document.addEventListener("click", (event) => {
  if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
    // Close menu if click is outside hamburger or menu
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});























