const MIN_PASSWORD_LENGTH = 8;
//----------------------------------------------------------------------------------------------------------------------
// убрать рамку ошибки
function removeError() {
    document.querySelectorAll(".border-red-70").forEach(function (element){
        element.classList.remove("border-red-70");
    });
    return true;
}

document.addEventListener("input", removeError);
document.addEventListener("paste", removeError);
document.addEventListener("change", removeError);
//----------------------------------------------------------------------------------------------------------------------
// показать пароль по кнопке
document.addEventListener("click", function (e) {
    const pwd_show = "asgar---auth-password-show", pwd_hide = "asgar---auth-password-hide";

    if (!e.target.classList.contains(pwd_show) && !e.target.closest("." + pwd_show)) return true;

    e.preventDefault();
    document.querySelectorAll("." + pwd_show).forEach(function (element) {
        element.classList.add("hidden");
    });
    document.querySelectorAll("." + pwd_hide).forEach(function (element) {
        element.classList.remove("hidden");
    });
    document.querySelectorAll(".asgar---auth-password").forEach(function (element) {
        element.type = "text";
    });
});
//----------------------------------------------------------------------------------------------------------------------
// скрыть пароль по кнопке
document.addEventListener("click", function (e) {
    const pwd_show = "asgar---auth-password-show", pwd_hide = "asgar---auth-password-hide";

    if (!e.target.classList.contains(pwd_hide) && !e.target.closest("." + pwd_hide)) return true;

    e.preventDefault();
    document.querySelectorAll("." + pwd_hide).forEach(function (element) {
        element.classList.add("hidden");
    });
    document.querySelectorAll("." + pwd_show).forEach(function (element) {
        element.classList.remove("hidden");
    });
    document.querySelectorAll(".asgar---auth-password").forEach(function (element) {
        element.type = "password";
    });
});
//----------------------------------------------------------------------------------------------------------------------
// переключение карточки
document.addEventListener("click", function (e) {
    const switch_class = "asgar---card-switch";

    if (!e.target.classList.contains(switch_class) && !e.target.closest("." + switch_class)) return true;

    const
        button = e.target.classList.contains(switch_class) ? e.target : e.target.closest("." + switch_class),
        wrap = button.closest(".asgar---card"),
        text = wrap.querySelector(".asgar---card-text")
    ;

    if (button.classList.contains("rotate-90")) {
        button.classList.remove("rotate-90");
        text.classList.remove("max-h-none");

        button.classList.add("-rotate-90");
        text.classList.add("max-h-full");
    } else {
        button.classList.remove("-rotate-90");
        text.classList.remove("max-h-full");

        button.classList.add("rotate-90");
        text.classList.add("max-h-none");
    }
});
//----------------------------------------------------------------------------------------------------------------------
// пустые ссылки #
document.addEventListener("click", function (e) {
    if (e.target.hasOwnProperty("href") && e.target.href === "#") e.preventDefault();
    if (e.target.closest("a[href=\"#\"]")) e.preventDefault();
});
//----------------------------------------------------------------------------------------------------------------------
// форма входа
document.addEventListener("submit", function (e) {
    if (e.target.name !== "login") return true;

    e.preventDefault();
    let errors = false;
    const
        submit = e.target.querySelector(".asgar---auth-submit"),
        spinner = e.target.querySelector(".asgar---auth-submit-spinner"),
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
//----------------------------------------------------------------------------------------------------------------------
// переключение подменю в мобильном меню
document.addEventListener("click", function (e) {
    const switch_class = "asgar---header-submenu-switch";

    if (!e.target.classList.contains(switch_class) && !e.target.closest("." + switch_class)) return true;

    const
        button = e.target.classList.contains(switch_class) ? e.target : e.target.closest("." + switch_class),
        wrap = button.closest(".asgar---header-submenu-wrap"),
        group = wrap.querySelector(".asgar---header-submenu-group")
    ;

    if (button.classList.contains("rotate-90")) {
        button.classList.remove("rotate-90");
        group.classList.remove("max-h-none");
        wrap.classList.remove("bg-transparent");
        wrap.classList.remove("shadow-none");

        button.classList.add("-rotate-90");
        group.classList.add("max-h-full");
        wrap.classList.add("bg-purple-60");
        wrap.classList.add("shadow-2xl");
    } else {
        button.classList.remove("-rotate-90");
        group.classList.remove("max-h-full");
        wrap.classList.remove("bg-purple-60");
        wrap.classList.remove("shadow-2xl");

        button.classList.add("rotate-90");
        group.classList.add("max-h-none");
        wrap.classList.add("bg-transparent");
        wrap.classList.add("shadow-none");
    }
});
//----------------------------------------------------------------------------------------------------------------------
// клик за пределами мобильного меню
document.addEventListener("click", function (e) {
    const menu_class = "asgar---header-menu";

    if (e.target.classList.contains(menu_class) || e.target.closest("." + menu_class)) return true;

    const menu = document.querySelector("." + menu_class);
    menu.classList.remove("translate-x-0");
    menu.classList.remove("shadow-2xl");
    menu.classList.add("-translate-x-full");
    menu.classList.add("shadow-none");
});
//----------------------------------------------------------------------------------------------------------------------
// открыть мобильное меню по кнопке
document.addEventListener("click", function (e) {
    const button = "asgar---header-menu-show";

    if (!e.target.classList.contains(button) && !e.target.closest("." + button)) return true;

    e.preventDefault();
    const menu = document.querySelector(".asgar---header-menu");
    menu.classList.remove("-translate-x-full");
    menu.classList.remove("shadow-none");
    menu.classList.add("translate-x-0");
    menu.classList.add("shadow-2xl");
});
//----------------------------------------------------------------------------------------------------------------------
// закрыть мобильное меню по кнопке
document.addEventListener("click", function (e) {
    const button = "asgar---header-menu-hide";

    if (!e.target.classList.contains(button) && !e.target.closest("." + button)) return true;

    e.preventDefault();
    const menu = document.querySelector(".asgar---header-menu");
    menu.classList.remove("translate-x-0");
    menu.classList.remove("shadow-2xl");
    menu.classList.add("-translate-x-full");
    menu.classList.add("shadow-none");
});
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