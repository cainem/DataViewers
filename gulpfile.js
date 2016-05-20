var gulp = require("gulp"),
    tsc = require("gulp-typescript"),
    sourcemaps = require("gulp-sourcemaps"),
    mocha = require("gulp-mocha"),
    browswerSync = require("browser-sync").create();
        
var tsProject = tsc.createProject("tsconfig.json");
var tsProjectTest = tsc.createProject("tsconfig.json");

gulp.task("build", function() {
    return gulp.src([
            "source/**/**.ts",
            "typings/main.d.ts/",
            "source/interfaces/interfaces.d.ts"
        ])
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("app/"));
});   

gulp.task("build-tests", function() {
    return gulp.src([
            "test/source/**/**.ts",
            "typings/main.d.ts/",
            "source/interfaces/interfaces.d.ts"
        ])
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProjectTest))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("test/out/"));
});   

gulp.task("run-tests", function() {
    return gulp.src('test/out/**/*.test.js')
        .pipe(mocha({ui: 'bdd'}));
});

gulp.task("test", ['build', 'build-tests', 'run-tests']);
