document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        if (!isValidName(name)) {
            alert("Veuillez saisir un nom valide.");
            return;
        }


        if (!isValidEmail(email)) {
            alert("Veuillez saisir une adresse e-mail valide.");
            return;
        }


        if (!isValidMessage(message)) {
            alert("Veuillez saisir un message valide.");
            return;
        }

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

    function isValidName(name) {
        const nameRegex = /^[a-zA-Z\s]+$/;
        return nameRegex.test(name);
    }

    function isValidEmail(email) {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidMessage(message) {

        return message.trim() !== "";
    }
});
