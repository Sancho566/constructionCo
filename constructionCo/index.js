document.addEventListener("DOMContentLoaded", () => {
    // Get the menu button and mobile menu elements
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    // Check if the elements exist in the DOM
    if (menuBtn && mobileMenu) {
        // Add a click event listener to the menu button
        menuBtn.addEventListener("click", () => {
            // Toggle the "hidden" class to show or hide the menu
            mobileMenu.classList.toggle("hidden");

            // Optional: Change the button icon (toggle between "bars" and "times")
            const icon = menuBtn.querySelector("i");
            if (icon.classList.contains("fa-bars")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");
            } else {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });
    } else {
        console.error("Menu button or mobile menu not found in the DOM.");
    }
});

    // EmailJS integration
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            emailjs.sendForm('service_16a4d4e', 'template_ct81nig', this)
                .then(() => alert('Message sent successfully!'))
                .catch(error => alert('Failed to send the message. Please try again later.'));
        });
    } else {
        console.error("Contact form not found in the DOM.");
    }

    // Fetch JSON-LD
    fetch('structured-data.json') // Adjust path as needed
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(data);
            document.head.appendChild(script);
        })
        .catch(error => console.error('Error loading JSON-LD:', error));

