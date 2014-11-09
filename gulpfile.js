var gulp     = require('gulp');
var jshint   = require('gulp-jshint');
var less     = require('gulp-less');
var path     = require('path');

gulp.task('default', ['jshint', 'less'], function() {
  gulp.watch('./src/js/*.js', function() {
    gulp.run('jshint');
  });
  gulp.watch('./src/less/*.less', function() {
    gulp.run('less');
  });
});

gulp.task('jshint', function() {
  gulp.src('./src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('less', function () {
  gulp.src('./src/less/style.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./src/css/'));
});
