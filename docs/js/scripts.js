//----------------------------------------------------------------------------------------------------------------------
// универсальная форма
function authForm() {
    return {
        show: false,
        sending: false,
        fields: {},
        loaded: false,
        spread: {
            ["@submit.prevent"]() {
                this.$refs.submit_btn.focus();
                this.validate();
                this.send();
            },
            ["@load.window"]() {
                window[this.$el.name + 'Init'](this);
                this.loaded = true;
            }
        },
        cleanErrors: function () {
            for (let field in this.fields) {
                this.fields[field]['error'] = false;
            }
        },
        validate: function () {
            for (let field in this.fields) {
                this.fields[field]['error'] = this.fields[field]['validate'](this);
            }
        },
        send: function () {
            if (!this.loaded) return;

            for (let field in this.fields) {
                if (this.fields[field]['error']) return;
            }

            this.sending = true;

            let data = new FormData(this.$el);

            // > демо
            console.log(this.$el.action);

            setTimeout(() => {
                if (this.$el.name === 'reset_form') {
                    document.location.assign("index.html");
                }
                if (this.$el.name === 'login_form') {
                    if (this.fields.login.value !== this.fields.password.value) {
                        this.fields.password.error = true;
                        this.sending = false;
                    } else {
                        document.location.assign("index.html");
                    }
                }
            }, 1020);
            // < демо
        },
    };
}
const MIN_PASSWORD_LENGTH = 8;

function login_formInit (that) {
    that.fields = {
        login: {
            value: "",
            error: false,
            spread: {
                ["@input"]() {
                    that.cleanErrors();
                },
                ["@paste"]() {
                    that.cleanErrors();
                },
                [":class"]() {
                    return that.fields.login.error ? "border-red-70" : "border-gray-40";
                },
            },
            validate: function (that) {
                return that.fields.login.value.length === 0;
            },
        },
        password: {
            value: "",
            error: false,
            spread: {
                ["@input"]() {
                    that.cleanErrors();
                },
                ["@paste"]() {
                    that.cleanErrors();
                },
                [":class"]() {
                    return that.fields.password.error ? "border-red-70" : "border-gray-40";
                },
                [":type"]() {
                    return that.show ? "text" : "password";
                },
            },
            validate: function (that) {
                return that.fields.password.value.length < MIN_PASSWORD_LENGTH;
            },
        },
    };
}

function reset_formInit (that) {
    that.fields = {
        login: {
            value: "",
            error: false,
            spread: {
                ["@input"]() {
                    that.cleanErrors();
                },
                ["@paste"]() {
                    that.cleanErrors();
                },
                [":class"]() {
                    return that.fields.login.error ? "border-red-70" : "border-gray-40";
                },
            },
            validate: function (that) {
                return that.fields.login.value.length === 0;
            },
        },
        password_new: {
            value: "",
            error: false,
            spread: {
                ["@input"]() {
                    that.cleanErrors();
                },
                ["@paste"]() {
                    that.cleanErrors();
                },
                [":class"]() {
                    return that.fields.password_new.error ? "border-red-70" : "border-gray-40";
                },
                [":type"]() {
                    return that.show ? "text" : "password";
                },
            },
            validate: function (that) {
                return that.fields.password_new.value.length < MIN_PASSWORD_LENGTH;
            },
        },
        password_confirm: {
            value: "",
            error: false,
            spread: {
                ["@input"]() {
                    that.cleanErrors();
                },
                ["@paste"]() {
                    that.cleanErrors();
                },
                [":class"]() {
                    return that.fields.password_confirm.error ? "border-red-70" : "border-gray-40";
                },
                [":type"]() {
                    return that.show ? "text" : "password";
                },
            },
            validate: function (that) {
                return that.fields.password_confirm.value.length < MIN_PASSWORD_LENGTH
                    || that.fields.password_confirm.value !== that.fields.password_new.value;
            },
        },
    };
}
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