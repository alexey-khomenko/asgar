module.exports = {
    purge: {
        mode: 'layers',
        content: ['resources/views/**/*.pug', 'resources/scripts/**/*.js'],
    },
    theme: {
        screens: {
            '2xl': {'max': '1199px'}, // 980+
            'xl': {'max': '979px'},  // 768+
            'lg': {'max': '767px'},  // 640+
            'md': {'max': '639px'},  // 480+
            'sm': {'max': '479px'},  // 360+
            'xs': {'max': '359px'},  // 320+
        },
        colors: {
            transparent: 'transparent',
            black: '#000000',
            white: '#ffffff',
            pink: '#ff549c',
            purple: {
                20: '#e2bdff',
                40: '#8b64c4',
                60: '#6c41ac',
                80: '#54308a',
            },
            gray: {
                20: '#f7f7f8',
                40: '#b3b3b3',
                60: '#777777',
                80: '#6b6767',
            },
            red: {
                30: '#e85558',
                70: '#d02023',
            },
            green: {
                30: '#6ace45',
                70: '#369d12',
            },
        },
        extend: {
            animation: {
                'spin-slow': 'spin 2s linear infinite',
            },
            fontSize: {
                '2xs': '0.625rem',
            },
            width: {
                7: '1.75rem',
                14: '3.5rem',
            },
            minWidth: {
                4: '1rem',
                5: '1.25rem',
                6: '1.5rem',
                7: '1.75rem',
            },
            height: {
                7: '1.75rem',
            },
            minHeight: {
                32: '8rem',
            },
        },
    },
    variants: {
        container: false,
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
        backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
    plugins: [],
    extend: {},
}
