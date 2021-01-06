//----------------------------------------------------------------------------------------------------------------------
// форма сброса пароля
document.addEventListener("submit", function (e) {
    if (e.target.name !== "reset") return true;

    e.preventDefault();
    let errors = false;
    const
        submit = e.target.querySelector(".asgar---auth-submit"),
        spinner = e.target.querySelector(".asgar---auth-submit-spinner"),
        action = e.target.action,
        login = e.target.elements.login,
        login_val = login.value.trim(),
        password_new = e.target.elements["password-new"],
        password_new_val = password_new.value.trim(),
        password_confirm = e.target.elements["password-confirm"],
        password_confirm_val = password_confirm.value.trim()
    ;
    submit.focus();

    if (login_val.length === 0) {
        errors = true;
        login.classList.add("border-red-70");
    } else {
        login.classList.remove("border-red-70");
    }

    if (password_new_val.length < MIN_PASSWORD_LENGTH) {
        errors = true;
        password_new.classList.add("border-red-70");
    } else {
        password_new.classList.remove("border-red-70");
    }

    if (password_confirm_val.length < MIN_PASSWORD_LENGTH) {
        errors = true;
        password_confirm.classList.add("border-red-70");
    } else {
        password_confirm.classList.remove("border-red-70");
    }

    if (errors) return false;

    if (password_confirm_val !== password_new_val) {
        errors = true;
        password_confirm.classList.add("border-red-70");
    } else {
        password_confirm.classList.remove("border-red-70");
    }

    if (errors) return false;

    submit.classList.add("hidden");
    spinner.classList.remove("hidden");

    // > демо
    setTimeout(function () {
        document.location.assign("index.html");
    }, 1200);
    console.log(action);
    console.log(login_val);
    console.log(password_new_val);
    // < демо
});