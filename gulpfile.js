var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var jshint = require('gulp-jshint');
var del = require('del');
var utilities = require('gulp-util');

gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/journal-interface.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('jshint', function() {
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('clean', function() {
  return del(['build']);
});
