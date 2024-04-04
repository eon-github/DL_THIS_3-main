document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("filter-form");
  const filteredEstablishmentsContainer = document.querySelector(".main-list");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    const selectedRatings = Array.from(document.querySelectorAll('input[name="stars"]:checked'))
                                 .map(checkbox => parseInt(checkbox.value, 10));
    const queryString = selectedRatings.map(rating => `stars=${rating}`).join("&");

    fetch(`/restaurants?${queryString}`, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
      .then(response => response.text())
      .then(html => {
        filteredEstablishmentsContainer.innerHTML = html;
      })
      .catch(error => console.error("Error:", error));
  });
});
