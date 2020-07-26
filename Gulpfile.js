const { src, dest, series, task, watch } = require('gulp');

// Plugins

const css_scss =        require('gulp-sass');
const css_clean =       require('gulp-clean-css');
const css_ap =          require('gulp-autoprefixer');

const js_uglify =       require('gulp-uglify');
const js_babel =        require('gulp-babel');

const rename =          require('gulp-rename');
const rimraf =          require('rimraf');
const { glob } = require('glob');

//
// Styles
//

task('styles-global', () =>
{
    return src('site/_styles/global.scss')
        .pipe(css_scss())
        .pipe(css_clean())
        .pipe(css_ap())
        .pipe(rename('global.min.css'))
        .pipe(dest('out/site/styles'));
});

task('styles-pages', () =>
{
    return src('site/_styles/pages/**/*.scss')
        .pipe(css_scss())
        .pipe(css_clean())
        .pipe(css_ap())
        .pipe(rename( (path) => { path.extname = '.min.css'; } ))
        .pipe(dest('out/site/styles'));
});

//
// Scripts
//

task('scripts', () =>
{
    return src('site/_scripts/**/*.js')
        .pipe(js_babel( { presets: ['@babel/preset-env'], plugins: ['@babel/plugin-proposal-class-properties'] } ))
        .pipe(js_uglify())
        .pipe(rename( (path) => { path.extname = '.min.js'; } ))
        .pipe(dest('out/site/scripts'));
});

//
// Files
//

task('move-files', () =>
{
    return src(
        [
            'site/**/*',
            '!site/**/_*/',
            '!site/**/_*/**/*',
            '!site/**/_*'
        ], { nodir: true }
    ).pipe(dest('out/site'));
});

//
// Engine
//

task('engine-build', (done) =>
{
    let engine = require('./_engine/build');
    engine.build();
    done();
});

task('engine-build-write', (done) =>
{
    let engine = require('./_engine/build');
    engine.buildWriteMode();
    done();
});

task('engine-build-editor', (done) =>
{
    let engine = require('./_engine/build');
    engine.buildEditorOnly();
    done();
});

//
// Misc
//

task('clear', (done) =>
{
    rimraf.sync('out/*');
    done();
});

task('move-favicon', (done) =>
{
    src('site/graphics/favicons/favicon.ico').pipe(dest('out'));

    rimraf.sync('out/site/graphics/favicons/favicon.ico');
    done();
});

//
// Build
//

task('build', (done) =>
{
    series(
        'clear',
        'styles-global',
        'styles-pages',
        'scripts',
        'engine-build',
        'move-files',
        'move-favicon'
    )();

    done();
});

task('build-editor', (done) =>
{
    series(
        'clear',
        'styles-global',
        'styles-pages',
        'scripts',
        'engine-build-editor',
        'move-files',
        'move-favicon'
    )();

    done();
});

task('build-out', (done) =>
{
    global.out = true;

    series('build')();
    done();
});

task('watch', () =>
{
    watch([
        'site/**/*',
        'data/**/*'
    ], series('build'));
});

task('watch-editor', () =>
{
    watch([
        'site/**/*',
        'data/**/*'
    ], series('build-editor'));
});