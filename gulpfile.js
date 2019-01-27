/* eslint-disable no-unused-vars */
const gulp = require('gulp');
const sass = require('gulp-sass');
const wait = require('gulp-wait');
const browserSync = require('browser-sync');
// const rename = require('gulp-rename');
const del = require('del');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const cache = require('gulp-cache');
const autoprefixer = require('gulp-autoprefixer');
// const uncss = require('gulp-uncss');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const eslint = require('gulp-eslint');

gulp.task('sass', () => gulp.src('app/scss/**/*.scss')
  .pipe(wait(500))
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(autoprefixer(['last 3 versions', '> 1%'], {
    cascade: true,
  }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({
    stream: true,
  })));

gulp.task('lint', () => gulp.src(['app/scripts/*.js', '!app/scripts/bootstrap.min.js', '!app/scripts/jquery.min.js', '!app/scripts/popper.min.js', '!node_modules', '!gulpfile.js'])
  .pipe(eslint())
  .pipe(eslint.format()));

gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: 'app',
    },
    notify: false,
  });
});

gulp.task('watch', ['browser-sync', 'sass'], () => {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/scripts/**/*.js', browserSync.reload);
});

gulp.task('clean', () => del.sync('dist'));
gulp.task('clear', () => cache.clearAll());
gulp.task('img', () => gulp.src('app/images/**/*')
  .pipe(cache(imagemin({
    interlaced: true,
    progressive: true,
    svgoPlugins: [{
      removeViewbox: false,
    }],
    use: [pngquant()],
  })))
  .pipe(gulp.dest('dist/images')));

gulp.task('build', ['clean', 'img', 'sass'], () => {
  const buildCss = gulp.src('app/css/*.css')
    .pipe(gulp.dest('dist/css'));
  const buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
  const buildImages = gulp.src('app/images/**/*')
    .pipe(gulp.dest('dist/images'));
  const buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));
  const buildJs = gulp.src('app/scripts/**/*')
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('default', ['watch']);
