const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')
             (require('sass'))

function buildFiles() {
    return src('sass-files/**/*,scss')
    .pipe (sass())
    .pipe (dest('css'))
}
function watchFiles() {
    watch(['sass-files/**/*,scss'], buildFiles)
    
}
exports.default = series(buildFiles, watchFiles)