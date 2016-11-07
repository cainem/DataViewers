var gulp = require("gulp"),
    tsc = require("gulp-typescript"),
    sourcemaps = require("gulp-sourcemaps"),
    browswerSync = require("browser-sync").create();
        
var tsProject = tsc.createProject("tsconfig.json");

gulp.task("build-ts", function() {
    return gulp.src("source/**/**.ts"            //"typings/main.d.ts/",
            //"source/interfaces/interfaces.d.ts"
        )
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("app/"));
});   

gulp.task('build-html', function () {
    return gulp.src('source/**/*.html')
        .pipe(gulp.dest("app/"));
});

gulp.task('build-css', function () {
    return gulp.src('source/**/*.css')
        .pipe(gulp.dest("app/"));
});

gulp.task("build", [ 'build-ts', 'build-html', 'build-css'])
