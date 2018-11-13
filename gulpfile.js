const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')
const htmlmin = require('gulp-htmlmin')
const autoprefixer = require('gulp-autoprefixer')
const fileinclude = require('gulp-file-include')
const changed = require('gulp-changed')
var browserSync = require('browser-sync').create();


//Logs Task
gulp.task('message', function(){
  return console.log('Gulp is running...')
})

//Copy HTML files
gulp.task('copyHtml', function(){
  gulp.src('src/html/*.html')
  .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file'
  }))
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('docs'))
  .pipe(browserSync.stream())
})

//Copy JS
gulp.task('copyJS', function(){
  gulp.src('src/js/*.js')
  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(gulp.dest('docs/js'))
  .pipe(browserSync.stream())
})

//optimize images
gulp.task('imageMin', () =>
  gulp.src('src/img/*')
    .pipe(changed('docs/img'))
		.pipe(imagemin())
        .pipe(gulp.dest('docs/img'))
        .pipe(browserSync.stream())
)

//compile sass
gulp.task('sass', function(){
  gulp.src([
    'src/sass/style.scss',
    'src/sass/portraitM.scss',
    'src/sass/portraitL.scss',
    'src/sass/portraitS.scss',
    'src/sass/portraitXL.scss',
    'src/sass/landscapeS.scss',
    'src/sass/landscapeL.scss'
  ])
  .pipe(concat('style.scss'))
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(uglifycss())
  .pipe(gulp.dest('docs/css'))
  .pipe(browserSync.stream())
})

// Watch

gulp.task('watch', function(){
  gulp.watch('src/html/**/*.html', ['copyHtml'])
  gulp.watch('src/img/*', ['imageMin'])
  gulp.watch('src/js/*.js', ['copyJS'])
  gulp.watch('src/sass/*.scss', ['sass'])
})

// Static server

gulp.task('serve', ['copyHtml', 'imageMin', 'copyJS', 'sass'], function() {

    browserSync.init({
        server: "./docs"
    });

    gulp.watch('src/html/**/*.html', ['copyHtml'])
    gulp.watch('src/img/*', ['imageMin'])
    gulp.watch('src/js/*.js', ['copyJS'])
    gulp.watch('src/sass/*.scss', ['sass'])

    console.log('Static server is running...')
});

gulp.task('default', ['message', 'copyHtml', 'imageMin', 'copyJS', 'sass'])
