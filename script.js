/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );
});


/* Close mobile menu when a navigation link is clicked */

const navigationLinks =
    document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    });

});


/* =====================================================
   DARK MODE
===================================================== */

const themeButton =
    document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    const darkModeEnabled =
        document.body.classList.contains("dark-mode");

    if (darkModeEnabled) {

        themeButton.textContent = "☀️";

        themeButton.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        themeButton.textContent = "🌙";

        themeButton.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

        localStorage.setItem(
            "theme",
            "light"
        );
    }
});


/* Load saved theme */

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeButton.textContent = "☀️";

    themeButton.setAttribute(
        "aria-label",
        "Switch to light mode"
    );
}


/* =====================================================
   PROJECT FILTER
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        /* Remove active state from all buttons */

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        /* Add active state to clicked button */

        button.classList.add("active");

        const selectedFilter =
            button.getAttribute("data-filter");


        /* Filter projects */

        projectCards.forEach(function (card) {

            const category =
                card.getAttribute("data-category");

            if (
                selectedFilter === "all" ||
                selectedFilter === category
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");
            }
        });

    });

});


/* =====================================================
   CONTACT FORM VALIDATION
===================================================== */

const contactForm =
    document.getElementById("contactForm");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const messageInput =
    document.getElementById("message");

const nameError =
    document.getElementById("nameError");

const emailError =
    document.getElementById("emailError");

const messageError =
    document.getElementById("messageError");

const formSuccess =
    document.getElementById("formSuccess");


contactForm.addEventListener("submit", function (event) {

    /* Prevent actual form submission */

    event.preventDefault();


    /* Clear previous messages */

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";


    let isValid = true;


    /* ================= NAME VALIDATION ================= */

    const nameValue =
        nameInput.value.trim();

    if (nameValue === "") {

        nameError.textContent =
            "Please enter your name.";

        isValid = false;

    } else if (nameValue.length < 2) {

        nameError.textContent =
            "Name must contain at least 2 characters.";

        isValid = false;
    }


    /* ================= EMAIL VALIDATION ================= */

    const emailValue =
        emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {

        emailError.textContent =
            "Please enter your email.";

        isValid = false;

    } else if (!emailPattern.test(emailValue)) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;
    }


    /* ================= MESSAGE VALIDATION ================= */

    const messageValue =
        messageInput.value.trim();

    if (messageValue === "") {

        messageError.textContent =
            "Please enter a message.";

        isValid = false;

    } else if (messageValue.length < 10) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        isValid = false;
    }


    /* ================= SUCCESS ================= */

    if (isValid) {

        formSuccess.textContent =
            "Thank you! Your message has been submitted successfully.";

        contactForm.reset();
    }

});


/* =====================================================
   CURRENT YEAR
===================================================== */

const currentYear =
    document.getElementById("currentYear");

currentYear.textContent =
    new Date().getFullYear();
