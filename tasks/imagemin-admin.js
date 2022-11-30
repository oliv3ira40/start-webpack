module.exports = function (gulp, plugins, config) {
    gulp.task('imagemin-admin', function() {
        return gulp.src(config.adminImageSrcFolder + "/**/*.{jpg,png,gif}")
            .pipe(plugins.plumber())
            .pipe(plugins.imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
            .pipe(gulp.dest(config.adminImageDestFolder))
    });
}