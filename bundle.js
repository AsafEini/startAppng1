/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports =function(){

    class AppController {

    constructor(fileSystem){
        this.fileSystem = fileSystem;
    }
}

appModule.component("myApp", {
    controller: AppController,
    templateUrl: "app.component.html",
});
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function() {
    class AppBrowser {

        constructor(fileSystem) {
            this.fileSystem = fileSystem;
            this.root = fileSystem.root;
        }


    }

    appModule.component("browser", {
        controller: AppBrowser,
        templateUrl: "browser.component.html",
        binding: {}
    });
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports=function() {
    class AppContent {

        constructor(contentDisplay) {
            this.contentDisplay = contentDisplay;
        }

        get clickedFolder() {
            return this.contentDisplay.folder;
        }

        handleClick($event, id) {
            switch ($event.which) {
                case 3:
                    this.fs.showContextMenu($event.x, $event.y);
                    break;
            }
        }

    }

    appModule.component("content", {
        controller: AppContent,
        templateUrl: "content.component.html",
        bindings: {
            fs: "<",
        }
    });

};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function() {
    class ContentDisplay {
        constructor() {
            this.folder = null;
        }

        getFolder(child) {
            this.folder = child;
            console.log(child)
        }
    }

    appModule.service("contentDisplay", ContentDisplay);

}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function() {
    class AppContextMenu {

        constructor() {

        }


    }

    appModule.component("contextMenu", {
        controller: AppContextMenu,
        templateUrl: "contextMenu.component.html",
        binding: {}
    });
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

 module.exports= function() {
     class FileSystem {

         constructor() {
             this.root = {
                 children: [{
                     id: 1, name: 'root', children: [
                         {
                             id: 2, name: 'sub1', children: [
                             {id: 4, name: 'sub3', children: []},
                             {id: 5, name: 'file1', content: 'text'},
                         ]
                         },
                         {
                             id: 3, name: 'sub2', children: [
                             {
                                 id: 6, name: 'sub4', children: [
                                 {id: 7, name: 'file2', content: 'text'}
                             ]
                             }
                         ]
                         },
                     ]
                 }]
             };

             this.isContextMenu = false;
             this.posX = 0;
             this.posY = 0;
         }

         showContextMenu(x, y) {
             this.isContextMenu = true;
             this.posX = x + 3;
             this.posY = y + 3;
         }

         closeContextMenu() {
             this.isContextMenu = false;
         }

         getPosX() {
             return this.posX + 'px';
         }

         getPosY() {
             return this.posY + 'px';
         }


     }


     appModule.service("fileSystem", FileSystem);
 }

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports =function() {
    class AppTree {


        constructor(contentDisplay) {
            this.contentDisplay = contentDisplay;
        }

        toggle(child, $event) {
            if (!child.children) {
                return;
            }


            child.expanded = !child.expanded;

            $event.stopPropagation();
        }

        select(child) {
            this.contentDisplay.getFolder(child);


        }

        handleClick($event, id) {
            switch ($event.which) {
                case 3:
                    this.fs.showContextMenu($event.x, $event.y);
                    break;
            }
        }

    }

    appModule.component("tree", {
        controller: AppTree,
        templateUrl: "tree.component.html",
        bindings: {
            group: "<",
            fs: "<",
        }
    });

}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var app = __webpack_require__(0);
var createFs = __webpack_require__(5);
var contentDisplay = __webpack_require__(3);
var browser = __webpack_require__(1);
var content = __webpack_require__(2);
var tree = __webpack_require__(6);
var contextMenu = __webpack_require__(4);

app();
createFs();
contentDisplay();
browser();
content();
tree();
contextMenu();

/***/ })
/******/ ]);