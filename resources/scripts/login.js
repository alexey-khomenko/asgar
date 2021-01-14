//----------------------------------------------------------------------------------------------------------------------
// универсальная форма
function loginForm() {
    let fields_l = {
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

    // todo в x-init

    return {
        show: false,
        sending: false,
        fields: fields_l,
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