var gulp = require('gulp');
var reactEasy = require('gulp-react-easy');

gulp.task('build', function(){
    return reactEasy({
        file: 'src/app.jsx',
        debug: true
    })
    .to('bundle.js')
    .pipe(gulp.dest('assets/js'));
});

gulp.task('watch', function() {
  gulp.watch('./src/*.jsx', ['build']);
});
