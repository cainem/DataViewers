var gulp = require("gulp"),
    tsc = require("gulp-typescript"),
    sourcemaps = require("gulp-sourcemaps"),
    path = require('path'),
    browswerSync = require("browser-sync").create();
        
var tsProject = tsc.createProject("tsconfig.json", { sourceMap : false });

gulp.task("build-ts", function() {
    return gulp.src("source/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write({
                // Return relative source map root directories per file.
                sourceRoot: function (file) {
                var sourceFile = path.join(file.cwd, file.sourceMap.file);
                return path.relative(path.dirname(sourceFile), file.cwd);
            }
        }))
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
