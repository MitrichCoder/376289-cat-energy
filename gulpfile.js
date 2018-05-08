"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var minify = require('gulp-csso');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var webp = require('gulp-webp');
var svgstore = require('gulp-svgstore');
var posthtml = require('gulp-posthtml');
var include = require('posthtml-include');
var run = require('run-sequence');
var del = require('del');

// server
gulp.task('serve', ['style'], function() {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('source/sass/**/*.{scss,sass}', ['style']);
  gulp.watch('source/*.html')
    .on('change', server.reload);
});

// cleaning
gulp.task('clean', function() {
  return del('build');
});

// copying
gulp.task('copy', function() {
  return gulp.src([
    'source/fonts/**/*.{woff,woff2}',
    'source/img/**',
    'source/js/**'
  ], {
    base: 'source'
  })
  .pipe(gulp.dest('build'));
});

// sass preprocessing
gulp.task('style', function() {
  gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sass({includePaths: require('node-normalize-scss').includePaths}))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('build/css'))
    .pipe(minify())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css/'))

    .pipe(server.stream());
});

// graphic - images
gulp.task('images', function() {
  return gulp.src('source/img/**/*.{jpg,png,svg}')
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.jpegtran({progressive: true}),
    imagemin.svgo()
  ]))
  .pipe(gulp.dest('build/img'));
});

// graphic - webp
gulp.task('webp', function() {
  return gulp.src('build/img/**/*.{jpg,png}')
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest('build/img'))
});

// graphic - svg
gulp.task('sprite', function() {
  return gulp.src('source/img/icon-*.svg')
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/img'));
});

// html
gulp.task('html', function() {
  return gulp.src('source/*.html')
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest('build'));
});

// building
gulp.task('build', function(done) {
  run(
    'clean',
    'copy',
    'style',
    'images',
    'webp',
    'sprite',
    'html',
    done
  );
});
