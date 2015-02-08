var gulp = require('gulp');
var webserver = require('gulp-webserver');
var gutil = require('gulp-util');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Configuration.
var path = {
	src: {
		css: 'app/css/less',
		js: 'app/js/src'
	},
	dest: {
		css: 'app/css',
		js: 'app/js'
	}
};

// Start webserver.
gulp.task('webserver', function() {
  gulp.src('app/')
    .pipe(webserver({
			host: 'localhost',
			port: 8080,
      open: true
    }));
});

// Compile, vendor prefix, and minify LESS.
gulp.task('less', function() {
	return gulp.src(path.src.css + '/main.less')
		.pipe(less())
		.on('error', function(err){ console.log(err.message); })
    .pipe(autoprefixer({
			browsers: ['last 10 versions']
		}))
		.pipe(minifyCSS({keepBreaks: false}))
		.pipe(gulp.dest(path.dest.css))
});

// Lint JS.
gulp.task('lint', function() {
	return gulp.src(path.src.js + '/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// Concatenate and minify JS.
gulp.task('js', function() {
	return gulp.src(path.src.js + '/*.js')
		.pipe(concat('app.js'))
		.pipe(gulp.dest(path.dest.js))
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest(path.dest.js));
});

// File watcher.
gulp.task('watch', function() {
    gulp.watch(path.src.css + '/*.less', ['less']);
	  gulp.watch(path.src.js + '/*.js', ['lint', 'js']);
});

// Gulp default task(s).
gulp.task('default', ['webserver', 'watch', 'less', 'lint', 'js']);