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
        call: async function (contact) {
            this.show = false;

            const action = 'call';
            let fields = {contact: contact};

            let data = new FormData();
            data.append('action', action);
            data.append('fields', JSON.stringify(fields));

            this.sending = true;
            const response = await fetch('/contacts/', {method: 'POST', body: data});
            this.sending = false;

            if (response.status === 200) {
                const res = await response.json();

                if (Object.keys(res).length) console.log(res);
            }
        }
    };
}