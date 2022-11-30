module.exports = function (gulp, plugins, config) {
    gulp.task('imagemin', function() {
		return gulp.src(config.imageSrcFolder + "/**/*.{jpg,png,gif}")
			.pipe(plugins.plumber())
    		.pipe(plugins.imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
    		.pipe(gulp.dest(config.imageDestFolder))
    });
};