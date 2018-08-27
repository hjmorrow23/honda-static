var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sourcemaps = require('gulp-sourcemaps'),
	// sass = require('gulp-ruby-sass'),
	gsass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	rename = require('gulp-rename'),
	watch = require('gulp-watch'),
	// less = require('gulp-less'),
	build = require('gulp-build'),
	sassdoc = require('sassdoc');


var assetsPath = "./assets/";
var javascript = assetsPath + "/javascript/";
var stylesheets = assetsPath + "/stylesheets/";


// SCSS compile and compress
// -----------------------------------

function compileScss() {
	gulp.src(stylesheets + '/scss/refactor.scss')
		.pipe(sourcemaps.init())
		.pipe(gsass({
			errLogToConsole: true,
			outputStyle: "expanded"
		}).on('error', notify.onError("SCSS compilation error"))
	      .on('error', gutil.log))
		.pipe(sourcemaps.write())
        .pipe(gulp.dest(stylesheets))
		.pipe(notify("SCSS Compilation Complete"));
}

// LESS compile and compress
// -----------------------------------

// function compileLess() {
// 	gulp.src(stylesheets + 'style.less')
// 			.pipe(less())
// 			.on('error', notify.onError("SCSS compilation error"))
// 			.on('error', gutil.log)
// 			.pipe(gulp.dest(stylesheets));
// }

// SASS Docs
// -----------------------------------
gulp.task('sassdoc', function () {
	return gulp.src(stylesheets + 'scss/**/*.scss')
			.pipe(sassdoc());
});


// Watch Task
// -----------------------------------
gulp.task('watch', function () {

	// SCSS
	// -----------------------------------
	gulp.watch(stylesheets + 'scss/**/*.scss', function () {
		var startTime = new Date().getTime();
		compileScss();
		var elapsedTime = new Date().getTime() - startTime;
		gutil.log("Finished '", gutil.colors.cyan("scss"), "' after", gutil.colors.magenta(elapsedTime, "ms"));
	});

	// LESS
	// -----------------------------------
	// gulp.watch(stylesheets + '**/*.less', function () {
	// 	var startTime = new Date().getTime();
	// 	compileLess();
	// 	var elapsedTime = new Date().getTime() - startTime;
	// 	gutil.log("Finished '", gutil.colors.cyan("less"), "' after", gutil.colors.magenta(elapsedTime, "ms"));
	// });
});

gulp.task('build', function () {
	// compileLess();
	compileScss();
});

// Put it all together
// -----------------------------------
gulp.task('default', ['build', 'watch']);
