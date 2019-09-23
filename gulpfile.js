var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function () {
  gulp.src('src/stylesheet/scss/main.scss') // Leo el archivo scss
    .pipe(sass()) // Convierto el contenido del archivo index.scss a CSS
    .pipe(gulp.dest('src/css')); // El CSS generado lo guardamos en la carpeta css
});