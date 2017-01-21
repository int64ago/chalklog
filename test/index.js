var logger = require('../index')('scope');

logger.red('red');
logger.bgGreen('bgGreen');
logger.blue.bgRed.bold('blue+bgRed+bold');
