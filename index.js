'use strict';

var gutil = require('gulp-util'),
		through = require('through2'),
		esperanto = require('esperanto');

module.exports = function (options) {
	if (!options.foo) {
		throw new gutil.PluginError('gulp-esperanto-bundle', '`foo` required');
	}

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-esperanto-bundle', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = new Buffer(someModule(file.contents.toString(), options));
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-esperanto-bundle', err));
		}

		cb();
	});
};
