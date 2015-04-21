var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  nodedebug = require('gulp-node-debug'),
  ghpages = require('gulp-gh-pages'),
  minimist = require('minimist'),
  livereload = require('gulp-livereload')
  ;

var args = minimist(process.argv.slice(2)),
    message = args.msg
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
    .pipe(ghpages({
      remoteUrl: 'git@github.com:yukoga/twittersample1.git',
      branch: 'master',
      message: message
    }))
    .pipe(ghpages({
      remoteUrl: 'https://git.heroku.com/desolate-stream-8656.git',
      branch: 'master',
      message: message
    }));
});

gulp.task('default', [
  // 'sass',
  'develop',
  'watch'
]);
