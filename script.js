document.addEventListener("DOMContentLoaded", function() {
  // Create the "Back to Top" button
  const backToTopButton = document.createElement("button");
  backToTopButton.id = "backToTop";
  backToTopButton.textContent = "Back to Top";

  // Style the button
  backToTopButton.style.position = "fixed";
  backToTopButton.style.bottom = "20px";
  backToTopButton.style.right = "20px";
  backToTopButton.style.padding = "10px 15px";
  backToTopButton.style.fontSize = "16px";
  backToTopButton.style.display = "none";
  backToTopButton.style.cursor = "pointer";
  backToTopButton.style.zIndex = "1000";
  // Optional: additional styling can be added here

  // Append the button to the body
  document.body.appendChild(backToTopButton);

  // Toggle button visibility on scroll
  window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // Scroll smoothly back to top when button is clicked
  backToTopButton.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
