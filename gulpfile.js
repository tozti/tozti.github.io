var gulp = require('gulp');
var uglify = require('gulp-uglify-es').default;
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var del = require('del');

var paths = {
    scripts: ['assets/js/**'],
    images: 'assets/img/**',
    styles: 'assets/sass/**',
    fonts: 'assets/fonts/**'
};

gulp.task('clean', function() {
    return del(['build']);
});

gulp.task('scripts', ['clean'], function() {
    return gulp.src('assets/js/index.js')
          .pipe(uglify())
          .pipe(gulp.dest('dist/js'));
});

gulp.task('fonts', function () {
    return gulp.src(paths.fonts)
          .pipe(gulp.dest('dist/fonts'));
});

gulp.task('images', ['clean'], function() {
    return gulp.src(paths.images)
               .pipe(imagemin({
                    interlaced: true,
                    progressive: true,
                    optimizationLevel: 5,
                }))
               .pipe(gulp.dest('dist/img'));
});

gulp.task('sass', function () {
    return gulp.src(paths.styles)
               .pipe(sass().on('error', sass.logError))
               .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.images, ['images']);
    gulp.watch(paths.styles, ['sass']);
});

gulp.task('default', ['watch', 'scripts', 'images', 'sass', 'fonts']);