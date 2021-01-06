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