var fs = require('fs')
  , extend = require('xtend');

function useFile(file, next) {
	fs.readFile(file, function(err, res) {
		if (err) next(err);
		exports.conf = extend(exports.conf, JSON.parse(res));
		next(null, exports.conf);
	})
}

function useObject(conf, next) {
	exports.conf = extend(exports.conf, conf);
	next(null, exports.conf);
}

exports.conf = {};

exports.use = function(data, next) {
	if (typeof data == 'object') useObject(data, next);
	else if (typeof data == 'string') useFile(data, next);
};