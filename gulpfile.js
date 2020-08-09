const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      concat = require('gulp-concat'),
      browserSync = require('browser-sync').create(),
      sourcemaps = require('gulp-sourcemaps');

const config = {
    path: {
        scss: './src/scss/**/*.scss',
        html: './public/index.html'
    },
    output: {
        cssName: 'bundle.min.css',
        path: './public'
    }
}

const scss = () => {
    return gulp.src(config.path.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat(config.output.cssName))
        .pipe(autoprefixer({cascade: false}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.output.path))
        .pipe(browserSync.stream());
}

const serve = () => {
    browserSync.init({
        server: {
            baseDir: config.output.path
        },
        port: 3001       
    });
    gulp.watch(config.path.scss, scss);
    gulp.watch(config.path.html).on('change', _ => browserSync.reload());
}

gulp.task('default', gulp.series(scss, serve));