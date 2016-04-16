var gulp = require('gulp'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');
 
gulp.task('default', function () {
    return gulp.src(['src/start.js','src/helpers.js','src/conversions/**/*.js','src/operations/**/*.js','src/end.js'])
        .pipe(concat('chromatism.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(rename('chromatism.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.js', ['default']);
});