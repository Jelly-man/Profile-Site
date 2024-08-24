
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

/**
 * Toggles the open class on the menu-links and hamburger-icon elements, 
 * which controls the visibility of the mobile dropdown menu.
 * this is using the toggle method and vannilla js instead of a library like bootstrap or tailwind.
 */
