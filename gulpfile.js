var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  nodedebug = require('gulp-node-debug'),
  ghpages = require('gulp-gh-pages'),
  livereload = require('gulp-livereload')
  ;

gulp.task('watch', function() {
  gulp.watch('./public/css/*.scss', ['sass']);
});

gulp.task('debug', function() {
  gulp.src(['app.js'])
    .pipe(nodedebug({
      debugPort: 5858,
      webPort: 7000,
      preload: true
    }));
});

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'app.js',
    ext: 'js ect html', // change for ect
  }).on('restart', function () {
    setTimeout(function () {
      livereload.changed(__dirname);
    }, 500);
  });
});

gulp.task('deploy', function() {
  return gulp.src('./**/*')
    .pipe(ghpages({remoteUrl: 'git@github.com:yukoga/twittersample1.git', branch: 'master'}))
    .pipe(ghpages({remoteUrl: 'https://git.heroku.com/desolate-stream-8656.git', branch: 'master'}));
});

gulp.task('default', [
  // 'sass',
  'develop',
  'watch'
]);
