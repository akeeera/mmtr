function Complete() {
    var result =
        "Name: " + document.application.user_name.value +
        "\nEmail: " + document.application.user_email.value +
        "\nText: " + document.application.user_message.value;
    console.log(result);
}

function ValidateEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        document.application.user_email.focus();
        return true;
    } else {
        alert("Вы ввели неверный Email");
        document.application.user_email.focus();
        return false;
    }
}