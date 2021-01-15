//----------------------------------------------------------------------------------------------------------------------
// универсальная форма
function authForm() {
    const MIN_PASSWORD_LENGTH = 8;

    const login_form = {
        login: {
            value: "",
            error: false,
            spread: {
                ["@input"]() {
                    this.cleanErrors();
                },
                ["@paste"]() {
                    this.cleanErrors();
                },
                [":class"]() {
                    return this.fields.login.error ? "border-red-70" : "border-gray-40";
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
                    this.cleanErrors();
                },
                ["@paste"]() {
                    this.cleanErrors();
                },
                [":class"]() {
                    return this.fields.password.error ? "border-red-70" : "border-gray-40";
                },
                [":type"]() {
                    return this.show ? "text" : "password";
                },
            },
            validate: function (that) {
                return that.fields.password.value.length < MIN_PASSWORD_LENGTH;
            },
        },
    };

    const reset_form = {
        login: {
            value: "",
            error: false,
            spread: {
                ["@input"]() {
                    this.cleanErrors();
                },
                ["@paste"]() {
                    this.cleanErrors();
                },
                [":class"]() {
                    return this.fields.login.error ? "border-red-70" : "border-gray-40";
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
                    this.cleanErrors();
                },
                ["@paste"]() {
                    this.cleanErrors();
                },
                [":class"]() {
                    return this.fields.password_new.error ? "border-red-70" : "border-gray-40";
                },
                [":type"]() {
                    return this.show ? "text" : "password";
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
                    this.cleanErrors();
                },
                ["@paste"]() {
                    this.cleanErrors();
                },
                [":class"]() {
                    return this.fields.password_confirm.error ? "border-red-70" : "border-gray-40";
                },
                [":type"]() {
                    return this.show ? "text" : "password";
                },
            },
            validate: function (that) {
                return that.fields.password_confirm.value.length < MIN_PASSWORD_LENGTH
                    || that.fields.password_confirm.value !== that.fields.password_new.value;
            },
        },
    };

    return {
        show: false,
        sending: false,
        fields: 'login_form' in document.forms ? login_form : reset_form,
        spread: {
            ["@submit.prevent"]() {
                this.$refs.submit_btn.focus();
                this.validate();
                this.send();
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