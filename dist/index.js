parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({1:[function(require,module,exports) {
"use strict";function e(e){return Object.prototype.toString.call(e).slice(8,-1)}function n(n){return"Undefined"===e(n)}function t(n){return"Null"===e(n)}function r(n){return"Object"===e(n)}function u(n){return"Array"===e(n)}function i(n){return"String"===e(n)}function o(n){return"Number"===e(n)}function c(n){return"Boolean"===e(n)}function s(n){return"RegExp"===e(n)}function f(n){return"Date"===e(n)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={getType:e,isUndefined:n,isNull:t,isObject:r,isArray:u,isString:i,isNumber:o,isBoolean:c,isRegExp:s,isDate:f};
},{}]},{},[1], null)
//# sourceMappingURL=/index.map