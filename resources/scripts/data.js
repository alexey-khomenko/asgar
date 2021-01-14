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