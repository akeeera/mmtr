const form = document.forms.application;

function complete(event) {
    event.preventDefault();
    const name = form.elements.user_name
    const email = form.elements.user_email
    const message = form.elements.user_message
    const nameIsValid = name.value
    const messageIsValid = message.value.length >= 50

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        document.application.user_email.focus();
        return true;
    } else {
        alert("Вы ввели неверный Email");
        document.application.user_email.focus();
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
    if (nameIsValid && messageIsValid) {
        var result =
            "Name: " + name.value +
            "\nEmail: " + name.value +
            "\nText: " + name.value;
        console.log(result);
    }
}

form.addEventListener('submit', complete)