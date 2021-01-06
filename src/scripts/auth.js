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