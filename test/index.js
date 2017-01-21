var log = require('../index')('scope');

log.red('red');
log.bgGreen('bgGreen');
log.blue.bgRed.bold('blue+bgRed+bold');
