const form = document.forms.application;

function complete(event) {
    event.preventDefault();
    const name = form.elements.user_name
    const email = form.elements.user_email
    const message = form.elements.user_message

    const nameIsValid = name.value
    const messageIsValid = message.value.length >= 50

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const mailIsValid = email.value.match(mailformat)

    if (nameIsValid && messageIsValid && mailIsValid) {
        var result =
            "Name: " + name.value +
            "\nEmail: " + email.value +
            "\nText: " + message.value;
        console.log(result);
        alert('Сообщение отправлено');
    }

    if (email.value.match(mailformat)) {
        form.elements.user_email;
        email.style.borderColor = 'white'
        return true;
    } else {
        email.style.borderColor = 'red'
        alert("Вы ввели неверный Email");
        form.elements.user_email.focus();
    }
    if (!nameIsValid) {
        name.style.borderColor = 'red';
    } else {
        name.style.borderColor = 'white';
    }
    if (!messageIsValid) {
        message.style.borderColor = 'red';
    } else {
        message.style.borderColor = 'white';
    }
}

form.addEventListener('submit', complete)