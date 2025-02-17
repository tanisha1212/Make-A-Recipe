document.addEventListener("DOMContentLoaded", function () {
    // Dark/Light Mode Toggle
    const toggleButton = document.getElementById("toggleMode");
    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            document.body.style.backgroundColor = "#301934";
            document.body.style.color = "#FFD700";
        } else {
            document.body.style.backgroundColor = "#fdf3ff";
            document.body.style.color = "#663399";
        }
    });

    // Back to Top Button
    const backToTop = document.getElementById("backToTop");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Clickable ingredient list
    const ingredients = document.querySelectorAll(".ingredient");
    ingredients.forEach(item => {
        item.addEventListener("click", function () {
            this.classList.toggle("checked");
        });
    });
});
