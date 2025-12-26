
const darkBtn = document.querySelector(".fa-moon");
darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    darkBtn.classList.toggle("fa-moon");
    darkBtn.classList.toggle("fa-sun");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

window.addEventListener("load", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        darkBtn.classList.remove("fa-moon");
        darkBtn.classList.add("fa-sun");
    }
});
