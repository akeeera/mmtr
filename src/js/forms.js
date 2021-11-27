function Complete() {
    localStorage.setItem('Name', document.forma.user_name.value);
    localStorage.setItem('Email', document.forma.user_email.value);
    localStorage.setItem('Message', document.forma.user_message.value);

    console.log("Name: " + localStorage.getItem('Name'));
    console.log("Email: " + localStorage.getItem('Email'));
    console.log("Message: " + localStorage.getItem('Message'));
}

const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Неверный email адрес");
    } else {
        email.setCustomValidity("");
    }
});
