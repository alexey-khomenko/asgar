//----------------------------------------------------------------------------------------------------------------------
// пустые ссылки #
document.addEventListener("click", function (e) {
    if (e.target.href === "#" || e.target.closest(`[href="#"]`)) e.preventDefault();
});
//----------------------------------------------------------------------------------------------------------------------
// раскрывающиеся по высоте блоки
function maxHeightData() {
    return {
        show: false,
        maxHeightResize: {
            ["@resize.window"]() {
                if (this.show) {
                    this.$refs.max_h_outer.style.maxHeight = this.$refs.max_h_inner.clientHeight + "px";
                } else {
                    this.$refs.max_h_outer.style.maxHeight = "0";
                }
            },
        },
    };
}

function maxHeightClick() {
    this.$watch("show", value => {
        if (value) {
            this.$refs.max_h_outer.style.maxHeight = this.$refs.max_h_inner.clientHeight + "px";
        } else {
            this.$refs.max_h_outer.style.maxHeight = "0";
        }
    });
}