function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/button-active-4b76b5c3.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/button-active-4b76b5c3.js ***!
    \*********************************************************************/

  /*! exports provided: c */

  /***/
  function node_modulesIonicCoreDistEsmButtonActive4b76b5c3Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createButtonActiveGesture;
    });
    /* harmony import */


    var _index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-29df6f59.js */
    "./node_modules/@ionic/core/dist/esm/index-29df6f59.js");
    /* harmony import */


    var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index-eea61379.js */
    "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
    /* harmony import */


    var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./haptic-7b8ba70a.js */
    "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");

    var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
      var currentTouchedButton;
      var initialTouchedButton;

      var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
        if (typeof document === 'undefined') {
          return;
        }

        var target = document.elementFromPoint(x, y);

        if (!target || !isButton(target)) {
          clearActiveButton();
          return;
        }

        if (target !== currentTouchedButton) {
          clearActiveButton();
          setActiveButton(target, hapticFeedbackFn);
        }
      };

      var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
        currentTouchedButton = button;

        if (!initialTouchedButton) {
          initialTouchedButton = currentTouchedButton;
        }

        var buttonToModify = currentTouchedButton;
        Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
          return buttonToModify.classList.add('ion-activated');
        });
        hapticFeedbackFn();
      };

      var clearActiveButton = function clearActiveButton() {
        var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!currentTouchedButton) {
          return;
        }

        var buttonToModify = currentTouchedButton;
        Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
          return buttonToModify.classList.remove('ion-activated');
        });
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */

        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
          currentTouchedButton.click();
        }

        currentTouchedButton = undefined;
      };

      return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el: el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: function onStart(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
        },
        onMove: function onMove(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
        },
        onEnd: function onEnd() {
          clearActiveButton(true);
          Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
          initialTouchedButton = undefined;
        }
      });
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, d, h */

  /***/
  function node_modulesIonicCoreDistEsmHaptic7b8ba70aJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return hapticImpact;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelectionEnd;
    });

    var HapticEngine = {
      getEngine: function getEngine() {
        var win = window;
        return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
      },
      available: function available() {
        return !!this.getEngine();
      },
      isCordova: function isCordova() {
        return !!window.TapticEngine;
      },
      isCapacitor: function isCapacitor() {
        var win = window;
        return !!win.Capacitor;
      },
      impact: function impact(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({
          style: style
        });
      },
      notification: function notification(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({
          style: style
        });
      },
      selection: function selection() {
        this.impact({
          style: 'light'
        });
      },
      selectionStart: function selectionStart() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionStart();
        } else {
          engine.gestureSelectionStart();
        }
      },
      selectionChanged: function selectionChanged() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      },
      selectionEnd: function selectionEnd() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionEnd();
        } else {
          engine.gestureSelectionEnd();
        }
      }
    };
    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */

    var hapticSelection = function hapticSelection() {
      HapticEngine.selection();
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      HapticEngine.selectionStart();
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      HapticEngine.selectionChanged();
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      HapticEngine.selectionEnd();
    };
    /**
     * Use this to indicate success/failure/warning to the user.
     * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
     */


    var hapticImpact = function hapticImpact(options) {
      HapticEngine.impact(options);
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
          return {
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {}
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmTheme3f0b0c04Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction, animation));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8, _x9) {
        return _ref3.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/smallplayer/smallplayer.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/smallplayer/smallplayer.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSmallplayerSmallplayerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<img src={{image}} class=\"profImg\" alt=\"\">\n<div *ngIf=\"this.pres\" [class]=\"'bubble imgPres' + this.pres\"><img [attr.src]=\"'../../../assets/' + this.imageName\" alt=\"\"></div>\n<h1>{{first}} {{last}}</h1>\n<span class=\"parent\" *ngIf=\"this.p_first\">{{p_first}} {{p_last}}</span>\n<span class=\"coach\" *ngIf=\"this.role\">({{this.translatedCoach}})</span>\n\n\n<span class=\"late\" *ngIf=\"this.late != 0 && this.late\">{{this.translatedLate}}</span>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/team/team.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/team/team.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTeamTeamComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<img src={{image}} alt=\"\">\n<h1>{{name}}</h1>\n\n<h2 *ngIf=\"category != ''\">{{category}}</h2>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/roles/roles.page.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/roles/roles.page.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSettingsRolesRolesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"navbar-theme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"{{'SETTINGS.ROLESPAGE.BACKTITLE' | translate}}\" color=\"light\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"white\">{{\"SETTINGS.ROLESPAGE.TITLE\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"roleContainer\" *ngFor=\"let role of this.userInformation.availableRoles; let i = index;\">{{this.options[role]}}</div>\n  <ion-button *ngIf=\"!this.userInformation.availableRoles || this.userInformation.availableRoles.length != 3\" class=\"createRole\" expand=\"block\" (click)=\"newRole()\">\n    <ion-icon name=\"add-circle-outline\"></ion-icon>\n    {{\"SETTINGS.ROLESPAGE.0\" | translate}}\n  </ion-button>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/components/smallplayer/smallplayer.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/smallplayer/smallplayer.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSmallplayerSmallplayerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profImg {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  margin: 15px 15px 15px 15px;\n  float: left;\n}\n\nh1 {\n  float: left;\n  font-size: 15px;\n  padding: 2px 10px 8px 0px;\n  font-weight: 400;\n  font-family: \"Roboto\";\n  color: black;\n}\n\n.parent {\n  float: left;\n  padding: 22.5px 10px 8px 0px;\n}\n\n.coach {\n  float: left;\n  padding: 22.5px 10px 8px 0px;\n}\n\n.late {\n  float: right;\n  padding: 22.5px 10px 8px 0px;\n  color: orange;\n}\n\n.imgPres0 {\n  background-color: #21ed95;\n}\n\n.imgPres1 {\n  background-color: #e6e6e6;\n}\n\n.imgPres2 {\n  background-color: #ff004c;\n}\n\n.bubble {\n  position: absolute;\n  top: 35px;\n  left: 35px;\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n}\n\n.bubble img {\n  -webkit-filter: invert(1);\n          filter: invert(1);\n  position: relative;\n  margin: 2.5px;\n  width: calc(100% - 5px);\n  height: calc(100% - 5px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL2NvbXBvbmVudHMvc21hbGxwbGF5ZXIvc21hbGxwbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc21hbGxwbGF5ZXIvc21hbGxwbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSw0QkFBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUNBLDRCQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FDSUo7O0FERkE7RUFDSSx5QkFBQTtBQ0tKOztBREhBO0VBQ0kseUJBQUE7QUNNSjs7QURKQTtFQUNJLHlCQUFBO0FDT0o7O0FETEE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1FKOztBRE5BO0VBQ0kseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7QUNTSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc21hbGxwbGF5ZXIvc21hbGxwbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZkltZ3tcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMTVweCAxNXB4IDE1cHggMTVweDtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuaDF7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHBhZGRpbmc6IDJweCAxMHB4IDhweCAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4ucGFyZW50e1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDIyLjVweCAxMHB4IDhweCAwcHg7XG59XG4uY29hY2h7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMjIuNXB4IDEwcHggOHB4IDBweDtcbn1cbi5sYXRle1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nOiAyMi41cHggMTBweCA4cHggMHB4O1xuICAgIGNvbG9yOiBvcmFuZ2U7XG59XG4uaW1nUHJlczB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxZWQ5NTtcbn1cbi5pbWdQcmVzMXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xufVxuLmltZ1ByZXMye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwNGM7XG59XG4uYnViYmxle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDM1cHg7XG4gICAgbGVmdDogMzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xufVxuLmJ1YmJsZSBpbWd7XG4gICAgZmlsdGVyOiBpbnZlcnQoMS4wKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAyLjVweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNXB4KTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDVweCk7XG59IiwiLnByb2ZJbWcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMTVweCAxNXB4IDE1cHggMTVweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbmgxIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMnB4IDEwcHggOHB4IDBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnBhcmVudCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAyMi41cHggMTBweCA4cHggMHB4O1xufVxuXG4uY29hY2gge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMjIuNXB4IDEwcHggOHB4IDBweDtcbn1cblxuLmxhdGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDIyLjVweCAxMHB4IDhweCAwcHg7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5pbWdQcmVzMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMWVkOTU7XG59XG5cbi5pbWdQcmVzMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5pbWdQcmVzMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwNGM7XG59XG5cbi5idWJibGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzVweDtcbiAgbGVmdDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuXG4uYnViYmxlIGltZyB7XG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMi41cHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1cHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDVweCk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/smallplayer/smallplayer.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/smallplayer/smallplayer.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SmallplayerComponent, SmallplayerModule */

  /***/
  function srcAppComponentsSmallplayerSmallplayerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SmallplayerComponent", function () {
      return SmallplayerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SmallplayerModule", function () {
      return SmallplayerModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var SmallplayerComponent = /*#__PURE__*/function () {
      function SmallplayerComponent(translate) {
        _classCallCheck(this, SmallplayerComponent);

        this.translate = translate;
        this.imageName = "";
        this.translatedLate = "";
        this.translatedCoach = "";
      }

      _createClass(SmallplayerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.pres == 0) {
            this.imageName = "checkmark.png";
          } else if (this.pres == 1) {
            this.imageName = "ellipsis.png";
          } else if (this.pres == 2) {
            this.imageName = "x.png";
          }

          this.translatedCoach = this.translate.instant("EVENT.COACH");
          this.translatedLate = this.translate.instant("EVENT.PRESENCE.YESLATE") + this.late + " min";
        }
      }]);

      return SmallplayerComponent;
    }();

    SmallplayerComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('first')], SmallplayerComponent.prototype, "first", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('last')], SmallplayerComponent.prototype, "last", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('p_first')], SmallplayerComponent.prototype, "p_first", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('p_last')], SmallplayerComponent.prototype, "p_last", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('img')], SmallplayerComponent.prototype, "image", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('role')], SmallplayerComponent.prototype, "role", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('late')], SmallplayerComponent.prototype, "late", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('pres')], SmallplayerComponent.prototype, "pres", void 0);
    SmallplayerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-smallplayer',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./smallplayer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/smallplayer/smallplayer.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./smallplayer.component.scss */
      "./src/app/components/smallplayer/smallplayer.component.scss"))["default"]]
    })], SmallplayerComponent);

    var SmallplayerModule = function SmallplayerModule() {
      _classCallCheck(this, SmallplayerModule);
    };

    SmallplayerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
      declarations: [SmallplayerComponent],
      exports: [SmallplayerComponent]
    })], SmallplayerModule);
    /***/
  },

  /***/
  "./src/app/components/team/team.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/team/team.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTeamTeamComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin: 15px 15px 15px 0px;\n  float: left;\n}\n\nh1 {\n  float: left;\n  font-size: 18px;\n  height: 50px;\n  padding: 8px 10px 8px 0px;\n  font-weight: 400;\n  font-family: \"Roboto\";\n}\n\nh2 {\n  float: left;\n  font-size: 15px;\n  height: 50px;\n  padding: 13px 10px 8px 0px;\n  font-weight: 400;\n  font-family: \"Roboto\";\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL2NvbXBvbmVudHMvdGVhbS90ZWFtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RlYW0vdGVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZWFtL3RlYW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDE1cHggMTVweCAxNXB4IDBweDtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuaDF7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiA4cHggMTBweCA4cHggMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG59XG5cbmgye1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogMTNweCAxMHB4IDhweCAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgICBjb2xvcjogZ3JheTtcbn0iLCJpbWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMTVweCAxNXB4IDE1cHggMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuaDEge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDhweCAxMHB4IDhweCAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xufVxuXG5oMiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMTNweCAxMHB4IDhweCAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBjb2xvcjogZ3JheTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/team/team.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/team/team.component.ts ***!
    \***************************************************/

  /*! exports provided: TeamComponent, TeamModule */

  /***/
  function srcAppComponentsTeamTeamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamComponent", function () {
      return TeamComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamModule", function () {
      return TeamModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var TeamComponent = /*#__PURE__*/function () {
      function TeamComponent() {
        _classCallCheck(this, TeamComponent);
      }

      _createClass(TeamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TeamComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('img')], TeamComponent.prototype, "image", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('name')], TeamComponent.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('category')], TeamComponent.prototype, "category", void 0);
    TeamComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-team',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./team.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/team/team.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./team.component.scss */
      "./src/app/components/team/team.component.scss"))["default"]]
    })], TeamComponent);

    var TeamModule = function TeamModule() {
      _classCallCheck(this, TeamModule);
    };

    TeamModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [TeamComponent],
      exports: [TeamComponent]
    })], TeamModule);
    /***/
  },

  /***/
  "./src/app/pages/settings/roles/roles-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/settings/roles/roles-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: RolesPageRoutingModule */

  /***/
  function srcAppPagesSettingsRolesRolesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RolesPageRoutingModule", function () {
      return RolesPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _roles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./roles.page */
    "./src/app/pages/settings/roles/roles.page.ts");

    var routes = [{
      path: '',
      component: _roles_page__WEBPACK_IMPORTED_MODULE_3__["RolesPage"]
    }];

    var RolesPageRoutingModule = function RolesPageRoutingModule() {
      _classCallCheck(this, RolesPageRoutingModule);
    };

    RolesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RolesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/settings/roles/roles.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/settings/roles/roles.module.ts ***!
    \******************************************************/

  /*! exports provided: RolesPageModule */

  /***/
  function srcAppPagesSettingsRolesRolesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RolesPageModule", function () {
      return RolesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _roles_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./roles-routing.module */
    "./src/app/pages/settings/roles/roles-routing.module.ts");
    /* harmony import */


    var _roles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./roles.page */
    "./src/app/pages/settings/roles/roles.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var RolesPageModule = function RolesPageModule() {
      _classCallCheck(this, RolesPageModule);
    };

    RolesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _roles_routing_module__WEBPACK_IMPORTED_MODULE_5__["RolesPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_roles_page__WEBPACK_IMPORTED_MODULE_6__["RolesPage"]]
    })], RolesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/settings/roles/roles.page.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/settings/roles/roles.page.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSettingsRolesRolesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title {\n  margin: 20px 20px 20px 20px;\n}\n\n.roleContainer {\n  margin: 20px 20px 20px 20px;\n  background-color: #efefef;\n  padding: 10px 20px 10px 20px;\n  border-radius: 12px;\n}\n\n.createRole {\n  margin: 20px 20px 20px 20px;\n  width: calc(100% - 40px);\n}\n\n.createRole ion-icon {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpZW50cmFoYW4vRGVza3RvcC9UZWFtY2xhcC9UZWFtQ2xhcC9zcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3JvbGVzL3JvbGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvcm9sZXMvcm9sZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUNDSjs7QURDQTtFQUNJLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSwyQkFBQTtFQUNBLHdCQUFBO0FDR0o7O0FEREE7RUFDSSxpQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvcm9sZXMvcm9sZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcbn1cbi5yb2xlQ29udGFpbmVye1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbi5jcmVhdGVSb2xle1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG59XG4uY3JlYXRlUm9sZSBpb24taWNvbntcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iLCIudGl0bGUge1xuICBtYXJnaW46IDIwcHggMjBweCAyMHB4IDIwcHg7XG59XG5cbi5yb2xlQ29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4uY3JlYXRlUm9sZSB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xufVxuXG4uY3JlYXRlUm9sZSBpb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/settings/roles/roles.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/settings/roles/roles.page.ts ***!
    \****************************************************/

  /*! exports provided: RolesPage */

  /***/
  function srcAppPagesSettingsRolesRolesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RolesPage", function () {
      return RolesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _home_home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../home/home.page */
    "./src/app/pages/home/home.page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _rolechooser_rolechooser_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../rolechooser/rolechooser.page */
    "./src/app/pages/rolechooser/rolechooser.page.ts");

    var RolesPage = /*#__PURE__*/function () {
      function RolesPage(modal) {
        _classCallCheck(this, RolesPage);

        this.modal = modal;
        this.options = {
          "0": "parent",
          "1": "coach",
          "2": "player"
        };
        this.userInformation = _home_home_page__WEBPACK_IMPORTED_MODULE_2__["HomePage"].userInformation;
      }

      _createClass(RolesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "newRole",
        value: function newRole() {
          var _this = this;

          this.modal.create({
            component: _rolechooser_rolechooser_page__WEBPACK_IMPORTED_MODULE_4__["RolechooserPage"]
          }).then(function (modal) {
            modal.present();
            modal.onDidDismiss().then(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return _home_home_page__WEBPACK_IMPORTED_MODULE_2__["HomePage"].updateInfo();

                      case 2:
                        this.userInformation = _home_home_page__WEBPACK_IMPORTED_MODULE_2__["HomePage"].userInformation;

                      case 3:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            });
          });
        }
      }]);

      return RolesPage;
    }();

    RolesPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };

    RolesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-roles',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./roles.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/roles/roles.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./roles.page.scss */
      "./src/app/pages/settings/roles/roles.page.scss"))["default"]]
    })], RolesPage);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map