import gulp from 'gulp';
import browserify from 'browserify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import eslint from 'gulp-eslint';
import babelify from 'babelify';
import uglify from 'gulp-uglify';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import rimraf from 'rimraf';
import notify from 'gulp-notify';
import browserSync, { reload } from 'browser-sync';
import sourcemaps from 'gulp-sourcemaps';
import cssnano from 'cssnano';
import htmlReplace from 'gulp-html-replace';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import runSequence from 'run-sequence';
import stylus from 'gulp-stylus';
import flatten from 'gulp-flatten';

const paths = {
  bundle: 'app.js',
  srcJsx: 'src/Index.js',
  vendorCss: [
    "bower_components/bootstrap/dist/css/bootstrap.min.css"
  ],
  srcCss: 'src/**/*.styl',
  srcImg: 'src/images/**',
  srcLint: ['src/**/*.js', 'test/**/*.js'],
  srcLocalizationEng: ['src/**/locale/eng/*.json'],
  srcLocalizationRu: ['src/**/locale/ru/*.json'],
  dist: 'dist',
  distJs: 'dist/js',
  distCss: 'css/style.css',
  distVendorCss: 'css/vendor.css',
  distImg: 'dist/images',
  distLocalizationEng: 'dist/locales/eng/',
  distLocalizationRu: 'dist/locales/ru/',
  distDeploy: './dist/**/*'
};

const customOpts = {
  entries: [paths.srcJsx],
  debug: true
};

const opts = Object.assign({}, watchify.args, customOpts);

gulp.task('clean', cb => {
  rimraf('dist', cb);
});

gulp.task('browserSync', () => {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('watchify', () => {
  let bundler = watchify(browserify(opts));

  function rebundle() {
    return bundler.bundle()
      .on('error', notify.onError())
      .pipe(source(paths.bundle))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(paths.distJs))
      .pipe(reload({stream: true}));
  }

  bundler.transform(babelify)
  .on('update', rebundle);
  return rebundle();
});

gulp.task('browserify', () => {
  browserify(paths.srcJsx, {debug: true})
  .transform(babelify)
  .bundle()
  .pipe(source(paths.bundle))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(uglify())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(paths.distJs));
});

gulp.task('styles', () => {
  gulp.src(paths.srcCss)
  .pipe(stylus())
  .pipe(autoprefixer({
    browsers: [ 'ie >= 10',
      'ie_mob >= 10',
      'ff >= 29',
      'chrome >= 34',
      'safari >= 6',
      'opera >= 23',
      'ios >= 7',
      'android >= 4.4',
      'bb >= 10'],
    cascade: true
  }))
  .pipe(concat(paths.distCss))
  .pipe(gulp.dest(paths.dist))
  .pipe(reload({stream: true}));
});

gulp.task('vendorCss', () => {

  gulp.src(paths.vendorCss)
      .pipe(concat(paths.distVendorCss))
      .pipe(gulp.dest(paths.dist));
});

gulp.task('htmlReplace', () => {
  gulp.src('index.html')
  .pipe(htmlReplace({css: 'styles/main.css', js: 'js/app.js'}))
  .pipe(gulp.dest(paths.dist));
});

gulp.task('images', () => {
  gulp.src(paths.srcImg)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(paths.distImg));
});

gulp.task('localization', () => {
  gulp.src(paths.srcLocalizationEng)
      .pipe(flatten())
      .pipe(gulp.dest(paths.distLocalizationEng));

  gulp.src(paths.srcLocalizationRu)
      .pipe(flatten())
      .pipe(gulp.dest(paths.distLocalizationRu));
});

gulp.task('lint', () => {
  gulp.src(paths.srcLint)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('watchTask', () => {
  gulp.watch(paths.srcCss, ['styles']);
  gulp.watch(paths.srcJsx, ['lint']);
});

gulp.task('watch', cb => {
  runSequence('clean', ['browserSync', 'watchTask', 'watchify', 'localization', 'vendorCss', 'styles', 'lint', 'images'], cb);
});

gulp.task('build', cb => {
  process.env.NODE_ENV = 'production';
  runSequence('clean', ['browserify', 'styles', 'localization', 'vendorCss', 'htmlReplace', 'images'], cb);
});
