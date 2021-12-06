const form = document.forms.application;

function complete(event) {
    event.preventDefault();
    const name = form.elements.user_name
    const email = form.elements.user_email
    const message = form.elements.user_message

    const nameIsValid = name.value
    const messageIsValid = message.value.length >= 50
    const mailIsValid = email.value.match(mailformat)

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        form.elements.user_email;
        return true;
    } else {
        alert("Вы ввели неверный Email");
        form.elements.user_email.focus();
    }
    if (!nameIsValid) {
        name.style.borderColor = 'red'
    } else {
        name.style.borderColor = 'white'
    }
    if (!messageIsValid) {
        message.value.length < 50
        message.style.borderColor = 'red'
    } else {
        message.style.borderColor = 'white'
    }
    if (!mailIsValid) {
        message.style.borderColor = 'red'
    }
    if (nameIsValid && messageIsValid) {
        var result =
            "Name: " + name.value +
            "\nEmail: " + email.value +
            "\nText: " + message.value;
        console.log(result);
    }
}

form.addEventListener('submit', complete)