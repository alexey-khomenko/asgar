//----------------------------------------------------------------------------------------------------------------------
// универсальная форма
export function authData() {
    IMask(document.querySelector("[name=login]"), {
        mask: '+{38}(000)000-00-00'
    });

    const MIN_PASSWORD_LENGTH = 8;

    return {
        show: false,
        step: 1,
        sending: false,
        fields: {
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
                    return that.fields.login.value.length !== 17;
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
        },
        spread: {
            ["@submit.prevent"]() {
                if (this.step === 1) {
                    this.$refs.submit_btn_1.focus();
                } else {
                    this.$refs.submit_btn_2.focus();
                }

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
            let field = this.step === 1 ? 'login' : 'password';

            this.fields[field]['error'] = this.fields[field]['validate'](this);
        },
        send: async function () {
            let field = this.step === 1 ? 'login' : 'password';

            if (this.fields[field]['error']) return;

            const login = this.fields.login.value.replace(/\D+/g,"");
            const password = this.fields.password.value;

            const fields = this.step === 1 ? {login: login} : {login: login, password: password};

            let data = new FormData();
            data.append('action', field);
            data.append('fields', JSON.stringify(fields));

            this.sending = true;
            const response = await fetch('/login/', {method: 'POST', body: data});
            this.sending = false;

            if (response.status === 200) {
                const res = await response.json();

                if (Object.keys(res).length) {
                    if (this.step === 1) {
                        this.fields.login.error = true;
                    } else {
                        this.fields.password.error = true;
                    }

                    console.log(res);
                } else if (this.step === 1) {
                    this.step = 2;
                } else {
                    location.reload();
                }
            }
        }
    };
}