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