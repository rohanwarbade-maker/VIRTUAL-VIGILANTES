/* CONTACT FORM */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();


    if (name === "" || email === "" || message === "") {

        alert("Please fill in all fields.");

        return;

    }


    alert(
        "Thank you " +
        name +
        "! Your message has been submitted successfully."
    );


    contactForm.reset();

});


/* SMOOTH NAVIGATION */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});