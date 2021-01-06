//----------------------------------------------------------------------------------------------------------------------
// пустые ссылки #
document.addEventListener("click", function (e) {
    if (e.target.hasOwnProperty("href") && e.target.href === "#") e.preventDefault();
    if (e.target.closest("a[href=\"#\"]")) e.preventDefault();
});