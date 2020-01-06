const DEVMODE = false;

const { src, dest, series, task, watch  } = require('gulp');

// Plugins

const scss =        require('gulp-sass');
const clean_css =   require('gulp-clean-css')
const concat =      require('gulp-concat');
const clean =       require('gulp-clean');
const uglify_js =   require('gulp-uglify');
const babel =       require('gulp-babel');
const tools =       require('./tools');

// ===

task('build_scss', () =>
{
    return src(['src/styles/**/*.scss', '!src/styles/**/_*.scss'])
        .pipe(concat('style.min.css'))
        .pipe(scss())
        .pipe(clean_css())
        .pipe(dest('out'));
});

task('build_js', () =>
{
    return src('src/scripts/**/*.js')
        .pipe(babel( { presets: ['@babel/preset-env'] }))
        .pipe(uglify_js())
        .pipe(dest('out/scripts'));
});

task('build_htmls', (done) =>
{
    tools.genAll(DEVMODE);

    done();
});

task('move_files', () =>
{
    return src(
        [
            'src/**/*',
            '!src/**/_*/',
            '!src/**/_*/**/*',
            '!src/**/_*',
            '!src/sitemap.xml'
        ], { nodir: true })
        .pipe(dest('out'));
});

task('move_tasks_files', () =>
{
    return src(
        [
        'tasks/**/*',
        '!tasks/**/task.md',
        '!tasks/**/hint.md',
        '!tasks/**/solution.md',
        '!tasks/**/meta.json'
        ])
        .pipe(dest('out/tasks'));
});

task('clear', () =>
{
    return src('out', { allowEmpty: true, read: false }).pipe(clean()); 
});

//

task('watch', () =>
{
    watch('src/**/*', series('build_look'));
});

// Global tasks

task('build_look', done =>
{
    series('clear', 'build_scss', 'build_js', 'build_htmls', 'move_files', 'move_tasks_files')();
    done();
});

//
//
//

task('test', done =>
{
    let tools = require('./tools');

    tools.genImg();

    done();
});