module.exports = function (gulp, plugins, config) {
	gulp.task('js-compile-admin', function () {
		return gulp.src(config.adminJSOrigin + '/**/*.js')
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.uglify()) // minify
			.pipe(plugins.concat('main-admin.js'))
			.pipe(plugins.sourcemaps.write('./', {addComment: true})) // write sourcemaps
			.pipe(gulp.dest(config.adminJSDestination)) // send minify file
	});
}
