var log = require('fancy-log');
var chalk = require('chalk');
var defineProps = Object.defineProperties;

function ChalkLog() {
  this.enabled = chalk.enabled;
};

var styles = (function () {
	var ret = {};
	Object.keys(chalk.styles).forEach(function (key) {
		ret[key] = {
			get: function () {
				return build.call(this, this._styles.concat(key));
			}
		};
	});
	return ret;
})();

var proto = defineProps(function() {}, styles);

var build = function(_styles) {
  var builder = function () {
    var fn = chalk;
    builder._styles.forEach(function(_style) {
      fn = fn[_style];
    });
		return log(fn.apply(builder, arguments));
	};
	builder._styles = _styles;
	builder.enabled = this.enabled;
	builder.__proto__ = proto;
	return builder;
};

function init() {
	var ret = {};
	Object.keys(styles).forEach(function (name) {
		ret[name] = {
			get: function () {
				return build.call(this, [name]);
			}
		};
	});
	return ret;
}

defineProps(ChalkLog.prototype, init());

module.exports = new ChalkLog();
