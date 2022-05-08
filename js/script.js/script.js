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
        $("#login-button").prop("disabled", true);
    } else {
        $("#length").removeClass("invalid");
        $("#length").addClass("valid");
        $("#login-button").removeAttr('disabled');
    }
});

$("#password").keyup(function () {
    if ($("#password").val().length < 8) {
        $("#length").removeClass("valid");
        $("#length").addClass("invalid");
        $("#login-button").prop("disabled", true);
    } else {
        $("#length").removeClass("invalid");
        $("#length").addClass("valid");
        $("#login-button").removeAttr('disabled');
    }

    if ($("#password").val() == $("#confirmPassword").val()) {
        $("#match").removeClass("invalid");
        $("#match").addClass("valid");
        $("#register-button").removeAttr('disabled');
    } else {
        $("#match").removeClass("valid");
        $("#match").addClass("invalid");
        $("#register-button").prop("disabled", true);
        
    }
});

function passwordValidate() {

    if ($("#password").val() == $("#confirmPassword").val()) {
        $("#match").removeClass("invalid");
        $("#match").addClass("valid");
        $("#register-button").removeAttr('disabled');
    } else {
        $("#match").removeClass("valid");
        $("#match").addClass("invalid");
        $("#register-button").prop("disabled", true);
    }
}


$("#confirmPassword").focus(function () {
    $("#confirmMessage").show();
});

// // When the user clicks outside of the password field, hide the message box

$("#confirmPassword").blur(function () {
    if ($("#password").val() == $("#confirmPassword").val()) {
        $("#confirmMessage").hide();
    } else {
        $("#confirmMessage").show();
    }
});

// When the user starts to type something inside the password field

$("#confirmPassword").keyup(function () {
    if ($("#password").val() == $("#confirmPassword").val()) {
        $("#match").removeClass("invalid");
        $("#match").addClass("valid");
        $("#register-button").removeAttr('disabled');
    } else {
        $("#match").removeClass("valid");
        $("#match").addClass("invalid");
        $("#register-button").prop("disabled", true);
    }
});