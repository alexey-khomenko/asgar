//----------------------------------------------------------------------------------------------------------------------
// пустые ссылки #
document.addEventListener("click", function (e) {
    if (e.target.href === "#" || e.target.closest(`a[href="#"]`)) e.preventDefault();
});