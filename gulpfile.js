/* File: gulpfile.js */

// grab our gulp packages
var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    jshint          = require('gulp-jshint'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    concat          = require('gulp-concat'),
    sourcemaps      = require('gulp-sourcemaps');

// create a default task and just log a message
gulp.task('default', ['watch']);

gulp.task('jshint', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-css', function() {
    return gulp.src('src/css/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/css'));
});

gulp.task('build-js', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/js'));
});

gulp.task('build', ['build-js', 'build-css']);

gulp.task('watch', function() {
    gulp.watch('src/js/**/*.js', ['jshint', 'build-js']);
    gulp.watch('src/css/**/*.scss', ['build-css']);
});

