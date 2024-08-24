# Kent Yates - Profile Site

Welcome to the profile site of Kent Yates, a Full Stack Developer. This website showcases my skills, experience, and projects, and provides an easy way to get in touch with me.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [JavaScript Functionality](#javascript-functionality)
- [Sections](#sections)
- [Contact](#contact)
- [License](#license)

## Overview

This profile site is a personal portfolio to highlight my work as a Full Stack Developer. It includes sections for my profile, about me, experience, projects, and contact information.

## Features

- **Responsive Design**: The site is fully responsive, ensuring it looks great on all devices.
- **Navigation**: Includes a desktop navigation bar and a hamburger menu for mobile devices.
- **Profile Section**: Brief introduction with options to download my CV or get in touch.
- **About Section**: Provides more details about my experience and education.
- **Experience Section**: Lists my skills in frontend and backend development.
- **Projects Section**: Showcases my recent projects with links to GitHub repositories and live demos.
- **Contact Section**: Simple and easy-to-use contact information, including email and LinkedIn.

## Technologies Used

- **HTML5**: For the structure of the website.
- **CSS3**: For styling, including the use of flexbox for layout and media queries for responsiveness.
- **JavaScript**: For interactive elements, such as toggling the hamburger menu using vanilla JavaScript.
- **Git**: For version control.

## Getting Started

To view the site locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/Jelly-man/profile-site.git

   Open the index.html file in your preferred web browser.
No additional setup is required.

Project Structure
bash
Copy code
.
├── Assets               # Contains images and icons used on the site
├── styles.css           # Main stylesheet for the site
├── mediaQueries.css     # Media queries for responsive design
├── script.js            # JavaScript file for interactivity
├── index.html           # Main HTML file
└── README.md            # This README file
JavaScript Functionality
The JavaScript in this project controls the behavior of the mobile navigation menu:

javascript
Copy code
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

/**
 * Toggles the open class on the menu-links and hamburger-icon elements, 
 * which controls the visibility of the mobile dropdown menu.
 * This is using the toggle method and vanilla JavaScript instead of a library like Bootstrap or Tailwind.
 */
toggleMenu() Function: This function toggles the open class on both the menu-links and hamburger-icon elements, which manages the visibility of the mobile dropdown menu. The function uses vanilla JavaScript for this purpose, providing a simple and lightweight alternative to libraries like Bootstrap or Tailwind.
