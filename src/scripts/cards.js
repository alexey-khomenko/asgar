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