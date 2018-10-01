const gulp = require('gulp');
const webServer = require('gulp-webserver');
const sass = require('gulp-sass');

gulp.task('html', () => {
    return  gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
});



gulp.task('sass', () => {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function () {
    gulp.watch('./src/index.html', ['html']);
    gulp.watch('./src/sass/*.scss', ['sass']);
});

gulp.task('start-web-server',() => {
    gulp.src('./dist')
        .pipe(webServer({
            livereload: true,
            open:true
        }));
});


gulp.task('default',['html','sass','watch']);