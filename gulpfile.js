var gulp = require("gulp"),
    tsc = require("gulp-typescript"),
    sourcemaps = require("gulp-sourcemaps"),
    mocha = require("gulp-mocha"),
    browswerSync = require("browser-sync").create();
        
var tsProject = tsc.createProject("tsconfig.json");
var tsProjectTest = tsc.createProject("tsconfig.json");

gulp.task("build-ts", function() {
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

gulp.task('build-html', function () {
    return gulp.src('source/**/*.html')
        .pipe(gulp.dest("app/"));
});

gulp.task('build-css', function () {
    return gulp.src('source/**/*.css')
        .pipe(gulp.dest("app/"));
});

gulp.task("build-tests", function() {
    return gulp.src([
            "source/**/**.ts",
            "test/source/**/**.ts",
            "typings/main.d.ts/",
            "source/interfaces/interfaces.d.ts"
        ])
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProjectTest))
        .pipe(sourcemaps.write('.', { "includeContent" : true, "sourceRoot" : ".." }))
        .pipe(gulp.dest("test/out/"));
});   

gulp.task("run-tests", [ "build-tests" ], function() {
    return gulp.src('test/out/**/*.test.js')
        .pipe(mocha({ui: 'bdd'}).on("error", function(err) {
            console.log(err.toString());
        }));
});

gulp.task("test", [ 'build-tests', 'run-tests']);
gulp.task("build", [ 'build-ts', 'build-html', 'build-css'])
