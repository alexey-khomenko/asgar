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