//----------------------------------------------------------------------------------------------------------------------
// переключение карточки
document.addEventListener("click", function (e) {
    const switch_selector = "[data-s-card-switch]";

    if (!e.target.dataset.sCardSwitch && !e.target.closest(switch_selector)) return true;

    const
        button = e.target.dataset.sCardSwitch ? e.target : e.target.closest(switch_selector),
        wrap = button.closest("[data-s-card]"),
        text = wrap.querySelector("[data-s-card-text]")
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