let gulp = require("gulp"),
    rename = require("gulp-rename"),
    sass = require("gulp-sass"),
    sourcemaps = require("gulp-sourcemaps"),
    autoprefixer = require("gulp-autoprefixer")

function styleFile(){
    return gulp.src("./site/sass/*.sass")
        .pipe(sourcemaps.init())
        .pipe(sass({
            errorLogToConsole:true,
            outputStyle:"compressed"
        }))
        .on("error", sass.logError)
        .pipe(autoprefixer({
            cascade:false
        }))
        .pipe(rename({suffix:".min"}))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./site/css/"))
}

function watchFile(){
    return gulp.watch("./site/sass/*.sass" , styleFile)
}

exports.styleFile = gulp.parallel(styleFile , watchFile)

