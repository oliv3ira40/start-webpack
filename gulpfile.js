'use strict';

const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const plugins = gulpLoadPlugins();
const config = require('./config.json');
const sass = require('gulp-sass')(require('node-sass'));

// Sass Task
require(`${config.tasksPath}/sass-compile`)(gulp, plugins, config, sass);
require(`${config.tasksPath}/sass-compile-admin`)(gulp, plugins, config, sass);

// JS Task
require(`${config.tasksPath}/js-compile`)(gulp, plugins, config);
require(`${config.tasksPath}/js-compile-admin`)(gulp, plugins, config);

// Images Task
require(`${config.tasksPath}/imagemin`)(gulp, plugins, config);
require(`${config.tasksPath}/imagemin-admin`)(gulp, plugins, config);

//Watch Task
exports.watch = function () {
	gulp.watch(`${config.publicStylesOrigin}/**/*.scss`, gulp.series('sass-compile'));
	gulp.watch(`${config.adminStylesOrigin}/**/*.scss`, gulp.series('sass-compile-admin'));

	gulp.watch(`${config.publicJSOrigin}/**/*.js`, gulp.series('js-compile'));
	gulp.watch(`${config.adminJSOrigin}/**/*.js`, gulp.series('js-compile-admin'));
}

// Default Task
exports.default = gulp.series('imagemin', 'imagemin-admin', 'js-compile', 'js-compile-admin', 'sass-compile', 'sass-compile-admin');
