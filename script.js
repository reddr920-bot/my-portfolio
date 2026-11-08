// Get the toggle button element
const toggleButton = document.getElementById("darkModeToggle");

//check if user previously selected dark mode
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  toggleButton.textContent = "☀️ Light Mode";
}

// Add click event listener
toggleButton.addEventListener("click", function () {
  // Toggle the 'dark-mode' class on the body element
  document.body.classList.toggle("dark-mode");

  // Update button text based on current mode
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️ Light Mode";
    localStorage.setItem("darkmode", "enable");
  } else {
    toggleButton.textContent = "🌙 Dark Mode";
    localStorage.setItem("darkmode", "disable");
  }
});
