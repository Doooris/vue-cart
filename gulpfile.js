var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('sass',function(){
  gulp.src('./cart.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 4 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./css/'))
})
gulp.task('watch',function(){
  gulp.watch('./cart.scss',['sass'])
})
gulp.task('default',['sass','watch'])
