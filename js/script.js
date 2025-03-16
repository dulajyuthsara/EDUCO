// Hamburger menu styles and functions
const hamburger = document.querySelector(".hamburger-menu");
const navigations = document.querySelector("#navigations");
const mobileLogin = document.querySelector(".mobile-login");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navigations.classList.toggle("active");
    mobileLogin.classList.toggle("active");
});

// Closing function of the navigation
document.querySelectorAll("#navigations li a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelectorAll("#navigations li a").forEach(innerLink => {
            innerLink.classList.remove("active");
        });

        // Add active class to the link that was clicked
        link.classList.add("active");

        // Remove active class from hamburger and navigation menu
        hamburger.classList.remove("active");
        navigations.classList.remove("active");
    });
});