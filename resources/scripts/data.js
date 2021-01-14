const MIN_PASSWORD_LENGTH = 8;

function loginInit () {
    return {
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
}

function resetInit () {
    return {
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
}