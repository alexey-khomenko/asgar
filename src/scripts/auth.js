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