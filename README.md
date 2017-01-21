# chalk-logger
A logger based on [chalk](https://github.com/chalk/chalk)

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

### Usage

 `npm i chalk-logger`

```javascript
var logger = require('chalk-logger')('scope');

logger.red('red');
logger.bgGreen('bgGreen');
logger.blue.bgRed.bold('blue+bgRed+bold');
```

![](https://cdn.int64ago.org/slhbiuutwwbn5i6raoflxr.png)

### License
[![license][license-image]][license-url]

 [npm-url]: https://npmjs.org/package/chalk-logger
 [npm-image]: https://img.shields.io/npm/v/chalk-logger.svg

 [travis-url]: https://travis-ci.org/int64ago/chalk-logger
 [travis-image]: https://img.shields.io/travis/int64ago/chalk-logger.svg

 [license-url]: https://github.com/int64ago/chalk-logger/blob/master/LICENSE
 [license-image]: https://img.shields.io/github/license/int64ago/chalk-logger.svg