let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let uglify = require('gulp-uglify');
let rename = require("gulp-rename");

gulp.task('minify-js', function (cb) {
  return gulp.src('dist/js/*.js')
	.pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('source/js'));
});

gulp.task('minify-css', () => {
  return gulp.src('dist/css/*.css')
	.pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('source/css'));
});

gulp.task('default', function() {
    gulp.start('minify-js', 'minify-css'); 
});