(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = ".//";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=IBM+Plex+Sans:100,100i,400,400i,700,700i|Oxygen);", ""]);

// module
exports.push([module.i, ".vertical-table-center-wrapper{display:table-cell;vertical-align:middle}li{margin:1em 0}li p{margin:0}a:link,a:visited{color:#74fffa}a:active{color:#489f9c}.yellow-text{color:#f5d85b}", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(6);

var _App = __webpack_require__(7);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//React Static needs this.
exports.default = _App2.default;


if (typeof document !== 'undefined') {
    _reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "body{margin:0;padding:0}", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(8);

var _Hero = __webpack_require__(11);

var _Hero2 = _interopRequireDefault(_Hero);

var _PRCalculator = __webpack_require__(15);

var _PRCalculator2 = _interopRequireDefault(_PRCalculator);

var _Footer = __webpack_require__(20);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.title = "Super Turkey Machine | PR Calculator for Smash Bros at WSU";
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(
          _Hero2.default,
          {
            header: 'Super Turkey Machine',
            description: 'Power rankings calculator for Smash Bros at WSU'
          },
          _react2.default.createElement(_PRCalculator2.default, null)
        ),
        _react2.default.createElement(
          'section',
          { id: 'formatting', className: 'note' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'note__text' },
              _react2.default.createElement(
                'header',
                null,
                _react2.default.createElement(
                  'h2',
                  null,
                  'How should my .CSV file be formatted?'
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                'On the first row, starting from the second column, list the names of all the players who placed 13th or higher at at least one event (monthly or weekly).'
              ),
              _react2.default.createElement(
                'p',
                null,
                'On the following rows, type the name of the event in the first cell, and then fill in all of the player\'s placings in their respective columns.'
              ),
              _react2.default.createElement(
                'p',
                null,
                'If a player didn\'t attend that tournament, then leave their cell blank.'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'IMPORTANT: All weekly events must start with \'weekly\'!'
                ),
                ' This is case-insensitive. If your results look strange, this may be why!'
              )
            ),
            _react2.default.createElement('div', { className: 'note__image csv-image' })
          )
        ),
        _react2.default.createElement(
          'section',
          { id: 'about', className: 'note' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'note__text' },
              _react2.default.createElement(
                'header',
                null,
                _react2.default.createElement(
                  'h2',
                  null,
                  'How is the PR calculated?'
                )
              ),
              _react2.default.createElement(
                'section',
                null,
                _react2.default.createElement(
                  'h3',
                  null,
                  'Short answer: When you place high at tournaments, you earn a PR score.'
                ),
                _react2.default.createElement(
                  'h3',
                  null,
                  'Your final PR score is the average of your tournament PR scores, weighted heavily toward your results at monthlies.'
                )
              ),
              _react2.default.createElement(
                'section',
                null,
                _react2.default.createElement(
                  'h3',
                  null,
                  'Long answer: The PR is calculated using the following algorithm.'
                ),
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'p',
                      null,
                      'At every event where you place 13th or higher, you earn PR points.'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'You earn the following number of points per placement:'
                    ),
                    _react2.default.createElement(
                      'ul',
                      null,
                      _react2.default.createElement(
                        'li',
                        null,
                        '1st Place - 1.0'
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        '2nd Place - 0.8'
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        '3rd Place - 0.7'
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        '4th Place - 0.5'
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        '5th Place - 0.4'
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        '7th Place - 0.3'
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        '9th Place - 0.2'
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        '13th Place - 0.1'
                      )
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'There is an intentional point boost between the winner and the runner-up, and the top 3 and the rest - this is to incentivize and reward high tournament placings.'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'p',
                      null,
                      'Weeklies only count toward your score if you attend ',
                      _react2.default.createElement(
                        'strong',
                        null,
                        '2 or more'
                      ),
                      ' of them.'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'p',
                      null,
                      'Monthlies have a ',
                      _react2.default.createElement(
                        'strong',
                        null,
                        'weighting of 75%'
                      ),
                      ' (or 100% if you don\'t attend 2 weeklies).'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'Weeklies have a ',
                      _react2.default.createElement(
                        'strong',
                        null,
                        'weighting of 25%'
                      ),
                      '.'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'p',
                      null,
                      'There is a penalty for missing monthlies: Your score for every monthly that you miss is the average of your other monthly scores, minus 0.1.'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'If you miss more than 1 monthly, this penalty ',
                      _react2.default.createElement(
                        'strong',
                        null,
                        'stacks'
                      ),
                      ': the average calculated for your second missed monthly\'s score includes the previously calculated score for your first missed monthly (and so on).'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'p',
                      null,
                      'There is no penalty for missing weeklies - only the weeklies you attend affect your score.'
                    )
                  )
                ),
                _react2.default.createElement(
                  'h4',
                  null,
                  'Special cases'
                ),
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'p',
                      null,
                      'If two players tie or have scores within 0.02 of each other, they will have a ',
                      _react2.default.createElement(
                        'strong',
                        null,
                        'PR battle'
                      ),
                      '.'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'PR battles are generally at least a best-of-five, if not longer - this can depend on a case-by-case basis.'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'p',
                      null,
                      'In exceptional cases, the TOs reserve the right to override the alogirthm if it would give a ranking that is highly inaccurate to a player\'s skill and/or level of success during the semester.',
                      _react2.default.createElement(
                        'em',
                        null,
                        'This should always be a last resort!'
                      )
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'Real-life example: One semester, our top Smash 4 player almost exclusively attended monthlies where several very good out-of-region players also competed. This meant that, on average, his scores were considerably lower than our second-best player, but in reality, his skill level was considerably higher than everyone else\'s. For this semester, the algorithm was overriden, and he was given 1st place by default.'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement('div', { className: 'note__image pr-image' })
          )
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(2);
exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "section{font-family:IBM Plex,sans-serif}section .container{margin-left:auto;margin-right:auto;display:-ms-flexbox;display:flex}.note:last-of-type .note__text{border:none}.note__text{-ms-flex:5 1;flex:5 1;padding:4%;border-bottom:1px solid gray}.note h2{font-size:2em;font-weight:100}.note h3{margin:.5em 0}.note p{line-height:1.4;font-size:18px}.note__text section,.note header{margin-bottom:2em}.note__image{-ms-flex:3 1;flex:3 1;background-color:#f0f8ff}.pr-image{background-image:url(" + escape(__webpack_require__(9)) + ")}.csv-image{background-image:url(" + escape(__webpack_require__(10)) + ")}@media only screen and (max-width:700px){.note__image{display:none}}", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/pr-image.aaa5d00d.jpg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/csv-image.45b7d863.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(12);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hero = function (_Component) {
  _inherits(Hero, _Component);

  function Hero() {
    _classCallCheck(this, Hero);

    return _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).apply(this, arguments));
  }

  _createClass(Hero, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'hero' },
        _react2.default.createElement(
          'div',
          { className: 'hero-wrapper' },
          _react2.default.createElement(
            'header',
            null,
            _react2.default.createElement(
              'h1',
              null,
              this.props.header
            ),
            _react2.default.createElement(
              'p',
              null,
              this.props.description
            )
          ),
          this.props.children
        )
      );
    }
  }]);

  return Hero;
}(_react.Component);

exports.default = Hero;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(2);
exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "@font-face{font-family:LemonMilk;src:url(" + escape(__webpack_require__(13)) + ")}.hero{background-image:url(" + escape(__webpack_require__(14)) + ");background-position:50% 0;background-repeat:no-repeat;background-size:cover;text-align:center;height:750px;width:100%;display:table}.hero-wrapper{display:table-cell;vertical-align:middle;overflow:hidden}.hero header{margin-bottom:84px}.hero header h1{font-size:5em}.hero header h1,.hero header p{font-family:LemonMilk;color:#fff;text-shadow:.0575em .0575em .025em rgba(0,0,0,.6)}.hero header p{font-size:1.5em}.note__image{background-position:0 0;background-repeat:no-repeat;background-size:cover}", ""]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/LemonMilk.2fd53b00.otf";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/hero-background.1d28a52e.jpg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactCsvReader = __webpack_require__(16);

var _reactCsvReader2 = _interopRequireDefault(_reactCsvReader);

__webpack_require__(17);

__webpack_require__(3);

var _Modal = __webpack_require__(18);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WEEKLY_PREFIX = "weekly";
var MIN_WEEKLY_ATTENDANCE_TO_COUNT = 2;
var WEIGHTING_MONTHLIES = 0.75;
var WEIGHTING_WEEKLIES = 0.25;

var PRCalculator = function (_Component) {
  _inherits(PRCalculator, _Component);

  function PRCalculator(props) {
    _classCallCheck(this, PRCalculator);

    var _this = _possibleConstructorReturn(this, (PRCalculator.__proto__ || Object.getPrototypeOf(PRCalculator)).call(this, props));

    _this.state = {
      data: {},
      modalVisible: false
    };

    _this.processFile = _this.processFile.bind(_this);
    _this.onModalClose = _this.onModalClose.bind(_this);
    return _this;
  }

  _createClass(PRCalculator, [{
    key: 'processFile',
    value: function processFile(fileData) {
      var _this2 = this;

      //Outline of data returned from CSVReader:
      // Array 1: Name of players. data[0][0] should always be blank.
      // Array 2+: Each event. data[1+][0] is the name of the event.
      // Each player's data: data[0][playerIndex] for name, data[1][playerIndex] for results, and so on until a blank array is found

      //console.log(fileData);

      var processedFileData = [];
      //For each array in the data
      fileData.forEach(function (value, index) {
        //The first array contains the names of all of the players.
        //  We'll initalize a player object and add it to processedFileData.
        if (index === 0) {
          value.forEach(function (value, index) {
            if (index > 0) {
              processedFileData.push({
                "name": value,
                "monthliesResults": {},
                "weekliesResults": {},
                "total": null
              });
            }
          });
        }
        //The later arrays contain all of the results for players at each tournament
        //  The first entry is the name of the tournament. Entries past the first
        //  correlate to the players' results, in the order they were processed above.
        else {
            var name = "";
            value.forEach(function (value, index) {
              if (index === 0) {
                name = value;
              } else {
                var result = parseInt(value);
                if (Number.isNaN(result)) {
                  result = 0;
                }

                //console.log(String(name.substring(0,6)).toLowerCase());
                if (String(name.substring(0, 6)).toLowerCase() === WEEKLY_PREFIX) {
                  processedFileData[index - 1].weekliesResults[name] = result;
                } else {
                  processedFileData[index - 1].monthliesResults[name] = result;
                }
              }
            });
          }
      });

      processedFileData = processedFileData.map(function (value) {
        //console.log(value.name);
        //console.log(value.monthliesResults);
        //console.log(value.weekliesResults);
        //console.log("---------------------------");
        value.total = _this2.calculateTotal(value.monthliesResults, value.weekliesResults);
        return value;
      });

      processedFileData.sort(function (a, b) {
        return b.total - a.total;
      });
      console.log("Processed data: ", processedFileData);

      this.setState({
        data: processedFileData,
        modalVisible: true
      });
    }
  }, {
    key: 'calculateTotal',
    value: function calculateTotal(monthliesResults, weekliesResults) {
      var _this3 = this;

      //MonthlyCount is a running total of how many tournaments the player attended.
      //  This variable is called 'monthlyCount' and not 'monthliesAttended' because
      //  we need to use it as part of a counting up toward the total number of tournaments
      //  in the 'punishing for absences' step.
      var total = 0,
          monthlyCount = 0,
          weekliesAttended = 0,
          monthlyTotal = 0,
          weekliesTotal = 0;

      Object.keys(monthliesResults).forEach(function (value) {
        //If they attended, convert their placing to a score.
        if (monthliesResults[value]) {
          monthlyTotal += _this3.scoreToPoints(monthliesResults[value]);
          monthlyCount++;
        }
      });

      Object.keys(weekliesResults).forEach(function (value) {
        //If they attended, convert their placing to a score.
        if (weekliesResults[value]) {
          weekliesTotal += _this3.scoreToPoints(weekliesResults[value]);
          weekliesAttended++;
        }
      });

      //Port of Joey's algorithm for punishing monthly absences.
      //The player's score for a missed tournament is equal to an average of the scores for
      //  tournaments that they attended, minus a penalty.
      //  This penalty stacks in a way if a player misses more than one event. For missed
      //  events passed the first, the average for that event is calculated with prior
      //  penalty-average scores in the mix.
      if (monthlyCount > 0) {
        while (monthlyCount < Object.keys(monthliesResults).length) {
          var absenceScore = monthlyTotal / monthlyCount - .1;
          monthlyTotal = monthlyTotal + absenceScore;
          monthlyCount++;
        }
      }

      console.log("Weeklies attended: ", weekliesAttended);

      //Average
      if (weekliesAttended >= MIN_WEEKLY_ATTENDANCE_TO_COUNT && weekliesAttended > 0) {
        //console.log("Weeklies total: ", (weekliesTotal / weekliesAttended));
        total = monthlyTotal / Object.keys(monthliesResults).length * WEIGHTING_MONTHLIES + weekliesTotal / weekliesAttended * WEIGHTING_WEEKLIES;
      } else {
        total = monthlyTotal / Object.keys(monthliesResults).length;
      }

      total = +total.toFixed(10);

      return total;
    }
  }, {
    key: 'scoreToPoints',
    value: function scoreToPoints(score) {
      var points = 0;
      switch (score) {
        case 1:
          points = 1;
          break;
        case 2:
          points = .8;
          break;
        case 3:
          points = .7;
          break;
        case 4:
          points = .5;
          break;
        case 5:
          points = .4;
          break;
        case 7:
          points = .3;
          break;
        case 9:
          points = .2;
          break;
        case 13:
          points = .1;
          break;
        default:
          points = 0;
          break;
      }

      return points;
    }
  }, {
    key: 'onModalClose',
    value: function onModalClose() {
      this.setState({
        modalVisible: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var modal = this.state.modalVisible ? _react2.default.createElement(_Modal2.default, { data: this.state.data, onClose: this.onModalClose }) : _react2.default.createElement('div', null);

      return _react2.default.createElement(
        'section',
        { className: 'PRcalculator' },
        _react2.default.createElement(
          'div',
          { className: 'vertical-table-center-wrapper' },
          _react2.default.createElement(
            'label',
            null,
            'Select a ',
            _react2.default.createElement(
              'a',
              { href: '#formatting' },
              'properly-formatted'
            ),
            ' ',
            _react2.default.createElement(
              'span',
              { className: 'yellow-text' },
              '.CSV'
            ),
            ' file to calculate PR'
          ),
          _react2.default.createElement(_reactCsvReader2.default, {
            cssClass: 'react-csv-input',
            onFileLoaded: this.processFile
          }),
          modal
        )
      );
    }
  }]);

  return PRCalculator;
}(_react.Component);

exports.default = PRCalculator;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-csv-reader");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".PRcalculator{text-align:center;max-width:1000px;height:190px;width:85%;background-color:#00000096;margin:18px auto 0;display:table;border-radius:16px}.PRcalculator a:link{text-decoration:none;border-bottom:1px solid #74fffa}.PRcalculator label{padding:16px;display:block;font-family:LemonMilk;color:#fff;text-shadow:.0575em .0575em .025em rgba(0,0,0,.6);font-size:2.25em;line-height:1.2;margin:0 auto;max-width:80%}.PRcalculator input{color:#fff}@media only screen and (max-width:700px){.PRcalculator label{font-size:1.75em}}", ""]);

// exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(_ref) {
  var data = _ref.data,
      onClose = _ref.onClose;


  function convertToTableRows(arr) {
    return arr.map(function (value, index) {
      return _react2.default.createElement(
        'tr',
        { key: index },
        _react2.default.createElement(
          'th',
          { scope: 'row' },
          index + 1
        ),
        _react2.default.createElement(
          'td',
          null,
          value.name
        ),
        _react2.default.createElement(
          'td',
          null,
          value.total
        )
      );
    });
  }

  var modalContent = convertToTableRows(data);

  return _react2.default.createElement(
    'div',
    { className: 'modal' },
    _react2.default.createElement(
      'div',
      { className: 'modal__content' },
      _react2.default.createElement(
        'table',
        null,
        _react2.default.createElement(
          'tbody',
          null,
          modalContent
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'modal__close', onClick: onClose },
        _react2.default.createElement(
          'span',
          null,
          'X'
        )
      )
    )
  );
};

exports.default = Modal;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".modal{display:block;position:fixed;text-align:left;top:0;left:0;width:100%;height:100%;background-color:#00000080}.modal table{min-width:25vw}.modal td{padding:2px}.modal__content{display:block;position:fixed;top:50%;left:50%;font-size:18px;padding:32px;max-width:90%;max-height:650px;max-height:80vh;background-color:#fff;overflow-y:scroll;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.modal__close{margin-left:auto;text-align:center;display:inline;position:absolute;top:0;right:0;padding:10px}.modal__close:hover{background-color:red;color:#fff}", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(21);

var _wsugotemEmote = __webpack_require__(22);

var _wsugotemEmote2 = _interopRequireDefault(_wsugotemEmote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'footer',
        null,
        _react2.default.createElement(
          'div',
          { className: 'col' },
          _react2.default.createElement(
            'p',
            null,
            'Created by Jared Goodwin'
          ),
          _react2.default.createElement(
            'p',
            null,
            '\xA9 2018'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col' },
          _react2.default.createElement(
            'a',
            { href: "https://i.imgur.com/oAqvdAL.gif" },
            _react2.default.createElement('img', { src: _wsugotemEmote2.default, alt: "Emote icon from WSU Gotem", height: 30, width: 25 })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col' },
          _react2.default.createElement(
            'p',
            null,
            'hi james'
          )
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0 4%;font-family:IBM Plex,sans-serif;background-color:#981e32;color:#fff;background-image:-webkit-gradient(linear,left top,left bottom,from(#981e32),to(#7f1a2b));background-image:-webkit-linear-gradient(#981e32,#7f1a2b);background-image:-o-linear-gradient(#981e32,#7f1a2b);background-image:linear-gradient(#981e32,#7f1a2b)}footer .col{-ms-flex:1 1;flex:1 1;padding:24px;text-align:center}footer .col:first-of-type{text-align:left}footer .col:last-of-type{text-align:right}", ""]);

// exports


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.97d15999.js.map