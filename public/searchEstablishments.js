document.addEventListener("DOMContentLoaded", function() {
  const searchForm = document.querySelector(".search-form");
  const searchInput = document.querySelector(".search-input");

  searchForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    const query = searchInput.value.trim();
    const establishmentsContainer = document.querySelector(".main-list"); // Move inside to check on submit

    if (query) {
      if (establishmentsContainer) {
        // If .main-list exists, fetch and update asynchronously
        fetch(`/restaurants?query=${encodeURIComponent(query)}`, {
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          }
        })
        .then(response => response.text())
        .then(html => {
          establishmentsContainer.innerHTML = html;
        })
        .catch(error => console.error("Error:", error));
      } else {
        // If .main-list doesn't exist, redirect to the /restaurants page with the search query
        window.location.href = `/restaurants?query=${encodeURIComponent(query)}`;
      }
    }
  });
});