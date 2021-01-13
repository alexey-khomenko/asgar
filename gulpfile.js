const {watch, series, parallel, src, dest} = require('gulp');
const del = require('del');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const cssimport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');
const minify = require("gulp-minify");
const concat = require("gulp-concat");
const pug = require('gulp-pug');

const OUTPUT = './docs';
const JS_ENTRY = './resources/scripts/*';
const JS_FILES = './resources/scripts/**/*.js';
const JS_OUTPUT = OUTPUT + '/js';
const CSS_ENTRY = './resources/styles/styles.css';
const CSS_FILES = './resources/styles/**/*.*css';
const CSS_OUTPUT = OUTPUT + '/css';
const HTML_ENTRY = './resources/views/pages/*.pug';
const HTML_FILES = './resources/views/**/*.pug';
const HTML_DIR = './resources/views/pages';
const ICONS_ENTRY = './resources/favicons/*';
const ICONS_FILES = './resources/favicons/**/*.*';
const ICONS_OUTPUT = OUTPUT + '/favicons';
const IMG_ENTRY = './resources/images/*';
const IMG_FILES = ['./resources/images/**/*.png', './resources/img/**/*.svg'];
const IMG_OUTPUT = OUTPUT + '/img';
const FONTS_ENTRY = './resources/fonts/*';
const FONTS_FILES = ['./resources/fonts/**/*.woff', './resources/fonts/**/*.woff2'];
const FONTS_OUTPUT = OUTPUT + '/fonts';
const TAILWIND_CONFIG = 'tailwind.config.js';

function stylesDev() {
    const processors = [cssimport, tailwindcss(TAILWIND_CONFIG)];

    return src(CSS_ENTRY)
        .pipe(postcss(processors))
        .pipe(dest(CSS_OUTPUT))
        .pipe(browserSync.stream())
        ;
}

function stylesProd() {
    const processors = [cssimport, tailwindcss(TAILWIND_CONFIG), autoprefixer, cssnano];

    return src(CSS_ENTRY)
        .pipe(postcss(processors))
        .pipe(dest(CSS_OUTPUT))
        ;
}

function alpineDev() {
    return src('node_modules/alpinejs/dist/alpine.js')
        .pipe(dest(JS_OUTPUT))
        ;
}

function alpineProd() {
    return src('node_modules/alpinejs/dist/alpine.js')
        .pipe(minify({
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(dest(JS_OUTPUT))
        ;
}

function scriptsDev() {
    return src(JS_ENTRY)
        .pipe(concat('scripts.js'))
        .pipe(dest(JS_OUTPUT))
        .pipe(browserSync.stream())
        ;
}

function scriptsProd() {
    return src(JS_ENTRY)
        .pipe(concat('scripts.js'))
        .pipe(minify({
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(dest(JS_OUTPUT))
        ;
}

function html() {
    return src(HTML_ENTRY)
        .pipe(pug({
            basedir: HTML_DIR,
            pretty: true
        }))
        .pipe(dest(OUTPUT))
        .pipe(browserSync.stream())
        ;
}

function icons() {
    return src(ICONS_ENTRY)
        .pipe(dest(ICONS_OUTPUT))
        .pipe(browserSync.stream())
        ;
}

function img() {
    return src(IMG_ENTRY)
        .pipe(dest(IMG_OUTPUT))
        .pipe(browserSync.stream())
        ;
}

function fonts() {
    return src(FONTS_ENTRY)
        .pipe(dest(FONTS_OUTPUT))
        .pipe(browserSync.stream())
        ;
}

function clear() {
    return del(OUTPUT + '/*');
}

function watcher() {
    browserSync.init({
        server: OUTPUT
    });

    watch(CSS_FILES, stylesDev);
    watch(HTML_FILES, html);
    watch(ICONS_FILES, icons);
    watch(IMG_FILES, img);
    watch(FONTS_FILES, fonts);
    watch(JS_FILES, scriptsDev);
}

const dev = series(clear, alpineDev, parallel(stylesDev, scriptsDev, html, icons, img, fonts));
const build = series(clear, alpineProd, parallel(stylesProd, scriptsProd, html, icons, img, fonts));

exports.default = build;
exports.dev = series(dev, watcher);