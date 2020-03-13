const DEVMODE = false;

const { src, dest, series, task, watch  } = require('gulp');

// Plugins

const scss =        require('gulp-sass');
const clean_css =   require('gulp-clean-css')
const concat =      require('gulp-concat');
const uglify_js =   require('gulp-uglify');
const babel =       require('gulp-babel');
const tools =       require('./tools');
const rimraf =      require('rimraf');

// ===

task('build_scss', () =>
{
    return src(['src/_styles/**/*.scss', '!src/styles/**/_*.scss'])
        .pipe(concat('style.min.css'))
        .pipe(scss())
        .pipe(clean_css())
        .pipe(dest('out'));
});

task('build_js', () =>
{
    return src('src/_scripts/**/*.js')
        .pipe(babel( { presets: ['@babel/preset-env'] }))
        .pipe(uglify_js())
        .pipe(dest('out/scripts'));
});

task('build_htmls', (done) =>
{
    tools.genAll(DEVMODE);

    done();
});

task('build_protos', (done) =>
{
    require('./proto-tasks-handler').genAll();
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

task('move_proto_tasks_files', () =>
{
    return src(
        [
            'proto-tasks/**/*',
            '!proto-tasks/**/task.md',
            '!proto-tasks/**/solution.md',
            '!proto-tasks/**/meta.json'
        ])
        .pipe(dest('out/proto')
    );
});

task('clear', done =>
{
    rimraf.sync('out/*');
    done();
});

//

task('watch', () =>
{
    watch('src/**/*', series('build_look'));
});

// Global tasks

task('build_look', done =>
{
    series('clear', 'build_scss', 'build_js', 'build_htmls', 'build_protos', 'move_files', 'move_tasks_files', 'move_proto_tasks_files')();
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