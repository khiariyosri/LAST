document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const formData = {
            name: name,
            email: email,
            message: message
        };


        document.getElementById("nameLabel").innerText = "Nom : " + formData.name;
        document.getElementById("emailLabel").innerText = "E-mail : " + formData.email;
        document.getElementById("messageLabel").innerText = "Message : " + formData.message;

        alert("Le formulaire a été soumis avec succès!");
    });
});
