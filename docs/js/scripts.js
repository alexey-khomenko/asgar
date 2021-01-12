//----------------------------------------------------------------------------------------------------------------------
// форма входа
function loginForm() {
    return {
        show: false,
        sending: false,
        login: {
            value: "",
            error: false,
            spread: {
                ["@input"]() {
                    this.login.error = false;
                    this.password.error = false;
                },
                ["@paste"]() {
                    this.login.error = false;
                    this.password.error = false;
                },
                [":class"]() {
                    return this.login.error ? "border-red-70" : "border-gray-40";
                },
            },
        },
        password: {
            value: "",
            error: false,
            spread: {
                ["@input"]() {
                    this.login.error = false;
                    this.password.error = false;
                },
                ["@paste"]() {
                    this.login.error = false;
                    this.password.error = false;
                },
                [":class"]() {
                    return this.password.error ? "border-red-70" : "border-gray-40";
                },
                [":type"]() {
                    return this.show ? "text" : "password";
                },
            },
        },
        submit: {
            ["@submit.prevent"]() {
                this.login.error = this.login.value.length === 0;
                this.password.error = this.password.value.length < MIN_PASSWORD_LENGTH;

                if (this.login.error || this.password.error) return;

                this.sending = true;

                // > демо
                const that = this;
                setTimeout(function () {
                    if (that.login.value !== that.password.value) {
                        that.password.error = true;
                        that.sending = false;
                    } else {
                        document.location.assign("index.html");
                    }
                }, 1200);
                console.log(this.$el.action);
                console.log(this.login.value);
                console.log(this.password.value);
                // < демо
            }
        },
    };
}
//----------------------------------------------------------------------------------------------------------------------
// форма сброса пароля
function resetForm() {
    return {
        show: false,
        sending: false,
        login: {
            value: "",
            error: false,
            spread: {
                ["@input"]() {
                    this.login.error = false;
                    this.password_new.error = false;
                    this.password_confirm.error = false;
                },
                ["@paste"]() {
                    this.login.error = false;
                    this.password_new.error = false;
                    this.password_confirm.error = false;
                },
                [":class"]() {
                    return this.login.error ? "border-red-70" : "border-gray-40";
                },
            },
        },
        password_new: {
            value: "",
            error: false,
            spread: {
                ["@input"]() {
                    this.login.error = false;
                    this.password_new.error = false;
                    this.password_confirm.error = false;
                },
                ["@paste"]() {
                    this.login.error = false;
                    this.password_new.error = false;
                    this.password_confirm.error = false;
                },
                [":class"]() {
                    return this.password_new.error ? "border-red-70" : "border-gray-40";
                },
                [":type"]() {
                    return this.show ? "text" : "password";
                },
            },
        },
        password_confirm: {
            value: "",
            error: false,
            spread: {
                ["@input"]() {
                    this.login.error = false;
                    this.password_new.error = false;
                    this.password_confirm.error = false;
                },
                ["@paste"]() {
                    this.login.error = false;
                    this.password_new.error = false;
                    this.password_confirm.error = false;
                },
                [":class"]() {
                    return this.password_confirm.error ? "border-red-70" : "border-gray-40";
                },
                [":type"]() {
                    return this.show ? "text" : "password";
                },
            },
        },
        submit: {
            ["@submit.prevent"]() {
                this.login.error = this.login.value.length === 0;
                this.password_new.error = this.password_new.value.length < MIN_PASSWORD_LENGTH;
                this.password_confirm.error = this.password_confirm.value.length < MIN_PASSWORD_LENGTH || this.password_new.value !== this.password_confirm.value;

                if (this.login.error || this.password_new.error || this.password_confirm.error) return;

                this.sending = true;

                // > демо
                setTimeout(function () {
                    document.location.assign("index.html");
                }, 1200);
                console.log(this.$el.action);
                console.log(this.login.value);
                console.log(this.password_new.value);
                console.log(this.password_confirm.value);
                // < демо
            }
        },
    };
}
const MIN_PASSWORD_LENGTH = 8;
//----------------------------------------------------------------------------------------------------------------------
// пустые ссылки #
document.addEventListener("click", function (e) {
    if (e.target.href === "#" || e.target.closest(`[href="#"]`)) e.preventDefault();
});