var gulp = require('gulp');
var reactEasy = require('gulp-react-easy');
var browserSync = require('browser-sync').create();

gulp.task('build', function(){
    return reactEasy({
        file: 'src/app.jsx',
        debug: true
    })
    .to('bundle.js')
    .pipe(gulp.dest('assets/js'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browser-sync', function(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('watch', ['browser-sync', 'build'], function() {
  gulp.watch('./src/*.jsx', ['build']);
});
