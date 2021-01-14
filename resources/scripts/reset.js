//----------------------------------------------------------------------------------------------------------------------
// универсальная форма
function resetForm() {
    let fields_r = {
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

    // todo в x-init

    return {
        show: false,
        sending: false,
        fields: fields_r,
        submit: {
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

            let that = this;
            setTimeout(function () {
                if (that.$el.name === 'reset_form') {
                    document.location.assign("index.html");
                }

                if (that.$el.name === 'login_form') {
                    if (that.fields.login.value !== that.fields.password.value) {
                        that.fields.password.error = true;
                        that.sending = false;
                    } else {
                        document.location.assign("index.html");
                    }
                }

            }, 1020);
            // < демо
        },
    };
}