function verifyPassword() {

    var theForm = document.forms["login-form"];
    var password = theForm.elements["password"].value;

    if (password.length >= 8) {
        $("#login-button").removeAttr('disabled');
    } else {
        $("#login-button").prop("disabled", true);
    }
}
// When the user clicks on the password field, show the message box

$("#password").focus(function () {
    $("#message").show();
});

// // When the user clicks outside of the password field, hide the message box

$("#password").blur(function () {
    if ($("#password").val().length >= 8) {
        $("#message").hide();
    }
});

// When the user starts to type something inside the password field

$("#password").keyup(function () {
    if ($("#password").val().length < 8) {
        $("#length").removeClass("valid");
        $("#length").addClass("invalid");
    } else {
        $("#length").removeClass("invalid");
        $("#length").addClass("valid");
    }
});
