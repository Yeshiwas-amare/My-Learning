// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Contact form
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_xttcncszya",
        "EarcjCDpVXLR9yHPF",
        this
    )
    .then(() => {

        alert("Message sent successfully!");

        form.reset();

    })
    .catch((error) => {

        alert("Failed to send message.");

        console.error(error);

    });

});
