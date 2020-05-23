var gulp = require('gulp');
const { parallel  } = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-terser');
var cleanCSS = require('gulp-clean-css');
var order = require("gulp-order");

const image = require('gulp-image');



function scripts() {
	return gulp.src('src/js/**/*.js')
		.pipe(order([
			"jquery-3.3.1.min.js",
			"jquery-migrate-3.0.0.min.js",
			"mmenu.min.js",
			"tippy.all.min.js",
			"simplebar.min.js",
			"bootstrap-slider.min.js",
			"bootstrap-select.min.js",
			"snackbar.js",
			"clipboard.js",
			"anime.min.js",
			"counterup.min.js",
			"magnific-popup.min.js",
			"slick.min.js",
			"custom.js",
			"canvas-to-blob.min.js",
			"moment.min.js",
			"eucalls.js",
		]))
		.pipe(concat('home.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
};


function css() {
	return gulp.src('src/css/**/*.css')
		.pipe(cleanCSS())
		.pipe(concat('home.min.css'))
		.pipe(gulp.dest('dist'))
};

function img() {
	return gulp.src('src/img/*')
		.pipe(image())
		.pipe(gulp.dest('./dist'));
}

exports.default = parallel(scripts, css, img);