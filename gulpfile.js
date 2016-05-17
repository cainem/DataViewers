var gulp = require("gulp"),
    tsc = require("gulp-typescript"),
    sourcemaps = require("gulp-sourcemaps"),
    browswerSync = require("browser-sync").create();
    
    
var tsProject = tsc.createProject("tsconfig.json");

gulp.task("build", function() {
    return gulp.src([
            "source/**/**.ts",
            "typings/main.d.ts/",
            "source/interfaces/interfaces.d.ts"
        ])
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("app/"))
});   