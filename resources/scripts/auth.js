//----------------------------------------------------------------------------------------------------------------------
// универсальная форма
export function authForm() {
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
        send: async function () {
            for (let field in this.fields) {
                if (this.fields[field]['error']) return;
            }

            const action = (this.$el.name).split("_")[0];
            let fields = {};
            for (let field in this.fields) {
                fields[field] = this.fields[field]['value'];
            }

            let data = new FormData();
            data.append('action', action);
            data.append('fields', JSON.stringify(fields));

            this.sending = true;
            const response = await fetch(this.$el.action, {method: 'POST', body: data});
            this.sending = false;

            if (response.status === 200) {
                const res = await response.json();

                if (Object.keys(res).length) {
                    console.log(res);
                } else {
                    location.reload();
                }
            }
        }
    };
}