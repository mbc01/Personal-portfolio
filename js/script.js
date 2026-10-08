const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#main-navigation");
const navigationLinks = document.querySelectorAll("#main-navigation a");


// =========================================================
// MOBILE NAVIGATION
// =========================================================

if (menuToggle && navLinks) {

    const closeNavigation = () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
        document.body.classList.remove("menu-open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    };


    const openNavigation = () => {
        navLinks.classList.add("active");
        menuToggle.classList.add("active");
        document.body.classList.add("menu-open");

        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Close navigation menu");
    };


    // Open / close mobile navigation
    menuToggle.addEventListener("click", () => {

        const isOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        if (isOpen) {
            closeNavigation();
        } else {
            openNavigation();
        }

    });


    // Close navigation when a link is clicked
    navigationLinks.forEach(link => {

        link.addEventListener("click", () => {
            closeNavigation();
        });

    });


    // Close navigation with Escape
    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeNavigation();
        }

    });


    // Close navigation when clicking outside
    document.addEventListener("click", event => {

        const clickedInsideNavigation =
            navLinks.contains(event.target) ||
            menuToggle.contains(event.target);

        if (!clickedInsideNavigation) {
            closeNavigation();
        }

    });

}