// Script.js

// Search functionality
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search Practicals...";
  searchInput.style.margin = "20px auto";
  searchInput.style.display = "block";
  searchInput.style.padding = "10px";
  searchInput.style.width = "60%";
  searchInput.style.border = "1px solid #ccc";
  searchInput.style.borderRadius = "5px";

  // Add search bar before cards section
  const main = document.querySelector("main");
  main.insertBefore(searchInput, main.firstChild);

  const cards = document.querySelectorAll(".card");

  searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase();
    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      if (text.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Highlight card on click
document.addEventListener("click", (e) => {
  if (e.target.closest(".card")) {
    const card = e.target.closest(".card");
    card.style.border = "2px solid #3498db";
    setTimeout(() => {
      card.style.border = "none";
    }, 1500);
  }
});
