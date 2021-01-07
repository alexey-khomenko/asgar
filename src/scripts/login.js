//----------------------------------------------------------------------------------------------------------------------
// форма входа
document.addEventListener("submit", function (e) {
    if (e.target.name !== "login") return true;

    e.preventDefault();
    let errors = false;
    const
        submit = e.target.querySelector("[data-s-auth-submit]"),
        spinner = e.target.querySelector("[data-s-auth-submit-spinner]"),
        action = e.target.action,
        login = e.target.elements.login,
        login_val = login.value.trim(),
        password = e.target.elements.password,
        password_val = password.value.trim()
    ;
    submit.focus();

    if (login_val.length === 0) {
        errors = true;
        login.classList.add("border-red-70");
    } else {
        login.classList.remove("border-red-70");
    }

    if (password_val.length < MIN_PASSWORD_LENGTH) {
        errors = true;
        password.classList.add("border-red-70");
    } else {
        password.classList.remove("border-red-70");
    }

    if (errors) return false;

    submit.classList.add("hidden");
    spinner.classList.remove("hidden");

    // > демо
    setTimeout(function () {
        if (password_val !== login_val) {
            errors = true;
            password.classList.add("border-red-70");
        } else {
            password.classList.remove("border-red-70");
        }

        if (errors) {
            spinner.classList.add("hidden");
            submit.classList.remove("hidden");

            return false;
        }

        document.location.assign("index.html");
    }, 1200);
    console.log(action);
    console.log(login_val);
    console.log(password_val);
    // < демо
});