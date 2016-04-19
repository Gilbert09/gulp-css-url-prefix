var through = require('through2');
var gutil = require('gulp-util');

// Consts
var PLUGIN_NAME = 'gulp-css-url-prefix';

function gulpCssUrlPrefix(prefix, regexMatch) {

    return through.obj(function(file, enc, callback) {
        if (file.isNull()) {
            callback(null, file);
        }

        if (file.isBuffer()) {
            var reg = new RegExp("url[(]['\"]?(" + regexMatch + "[^'\")]*)['\"]?[)]", "g");

            var contents = file.contents.toString('utf8');

            file.contents = new Buffer(
                contents.replace(reg, "url('" + prefix + "$1')")
            );
        }

        if (file.isStream()) {
            return this.emit('error', new gutil.PluginError(PLUGIN_NAME,  'Streaming not supported'));
        }

        callback(null, file);
    });
}

module.exports = gulpCssUrlPrefix;