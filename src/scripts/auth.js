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
    const pwd_show = "[data-s-auth-password-show]", pwd_hide = "[data-s-auth-password-hide]";

    if (!e.target.dataset.sAuthPasswordShow && !e.target.closest(pwd_show)) return true;

    e.preventDefault();
    document.querySelectorAll(pwd_show).forEach(function (element) {
        element.classList.add("hidden");
    });
    document.querySelectorAll(pwd_hide).forEach(function (element) {
        element.classList.remove("hidden");
    });
    document.querySelectorAll("[data-s-auth-password]").forEach(function (element) {
        element.type = "text";
    });
});
//----------------------------------------------------------------------------------------------------------------------
// скрыть пароль по кнопке
document.addEventListener("click", function (e) {
    const pwd_show = "[data-s-auth-password-show]", pwd_hide = "[data-s-auth-password-hide]";

    if (!e.target.dataset.sAuthPasswordHide && !e.target.closest(pwd_hide)) return true;

    e.preventDefault();
    document.querySelectorAll(pwd_hide).forEach(function (element) {
        element.classList.add("hidden");
    });
    document.querySelectorAll(pwd_show).forEach(function (element) {
        element.classList.remove("hidden");
    });
    document.querySelectorAll("[data-s-auth-password]").forEach(function (element) {
        element.type = "password";
    });
});