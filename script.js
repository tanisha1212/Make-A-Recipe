function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", function() {
  const ingredientList = document.getElementById("ingredient-list");
  ingredientList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
  });
});
