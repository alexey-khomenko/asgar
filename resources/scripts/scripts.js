//----------------------------------------------------------------------------------------------------------------------
// пустые ссылки #
document.addEventListener("click", function (e) {
    if (e.target.href === "#" || e.target.closest(`[href="#"]`)) e.preventDefault();
});
//----------------------------------------------------------------------------------------------------------------------
// раскрывающиеся по высоте блоки
export function maxHeightData() {
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
        maxHeightClick: function () {
            this.$watch("show", value => {
                if (value) {
                    this.$refs.max_h_outer.style.maxHeight = this.$refs.max_h_inner.clientHeight + "px";
                } else {
                    this.$refs.max_h_outer.style.maxHeight = "0";
                }
            });
        }
    };
}
//----------------------------------------------------------------------------------------------------------------------
// заказ звонка
export function contactData() {
    return {
        show: true,
        call: function (contact) {
            this.show = false;

            console.log(contact);
        }
    };
}