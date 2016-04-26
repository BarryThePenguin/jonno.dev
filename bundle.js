!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(t.s=7)}([function(module,exports){eval('/*\r\n	MIT License http://www.opensource.org/licenses/mit-license.php\r\n	Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\nmodule.exports = function() {\r\n	var list = [];\r\n\r\n	// return the list of modules as css string\r\n	list.toString = function toString() {\r\n		var result = [];\r\n		for(var i = 0; i < this.length; i++) {\r\n			var item = this[i];\r\n			if(item[2]) {\r\n				result.push("@media " + item[2] + "{" + item[1] + "}");\r\n			} else {\r\n				result.push(item[1]);\r\n			}\r\n		}\r\n		return result.join("");\r\n	};\r\n\r\n	// import a list of modules into the list\r\n	list.i = function(modules, mediaQuery) {\r\n		if(typeof modules === "string")\r\n			modules = [[null, modules, ""]];\r\n		var alreadyImportedModules = {};\r\n		for(var i = 0; i < this.length; i++) {\r\n			var id = this[i][0];\r\n			if(typeof id === "number")\r\n				alreadyImportedModules[id] = true;\r\n		}\r\n		for(i = 0; i < modules.length; i++) {\r\n			var item = modules[i];\r\n			// skip already imported module\r\n			// this implementation is not 100% perfect for weird media query combinations\r\n			//  when a module is imported multiple times with different media queries.\r\n			//  I hope this will never occur (Hey this way we have smaller bundles)\r\n			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {\r\n				if(mediaQuery && !item[2]) {\r\n					item[2] = mediaQuery;\r\n				} else if(mediaQuery) {\r\n					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";\r\n				}\r\n				list.push(item);\r\n			}\r\n		}\r\n	};\r\n	return list;\r\n};\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/css-loader/lib/css-base.js\n ** module id = 0\n ** module chunks = 0\n **/\n\n//# sourceURL=webpack:///./~/css-loader/lib/css-base.js?')},function(module,exports,__webpack_require__){eval("/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_site__ = __webpack_require__(6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_site___default = __WEBPACK_IMPORTED_MODULE_0__css_site__ && __WEBPACK_IMPORTED_MODULE_0__css_site__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0__css_site__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0__css_site__; }\n/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0__css_site___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0__css_site___default });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_resume_html__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_resume_html___default = __WEBPACK_IMPORTED_MODULE_1__views_resume_html__ && __WEBPACK_IMPORTED_MODULE_1__views_resume_html__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1__views_resume_html__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1__views_resume_html__; }\n/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1__views_resume_html___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1__views_resume_html___default });\n\n\n\nvar loading = 3200;\n\nsetTimeout(function () {\n	global.document.body.innerHTML = /* harmony import */__WEBPACK_IMPORTED_MODULE_1__views_resume_html___default.a;\n}, loading);\n/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./index.js\n ** module id = 1\n ** module chunks = 0\n **/\n\n//# sourceURL=webpack:///./index.js?")},function(module,exports,__webpack_require__){eval('exports = module.exports = __webpack_require__(0)();\n// imports\n\n\n// module\nexports.push([module.i, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}", ""]);\n\n// exports\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/css-loader!./~/normalize.css/normalize.css\n ** module id = 2\n ** module chunks = 0\n **/\n\n//# sourceURL=webpack:///./~/normalize.css/normalize.css?./~/css-loader')},function(module,exports,__webpack_require__){eval('exports = module.exports = __webpack_require__(0)();\n// imports\nexports.i(__webpack_require__(2), "");\nexports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=EB+Garamond|Open+Sans);", ""]);\n\n// module\nexports.push([module.i, "/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */@media print{*,:after,:before{background:transparent!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\\" (\\" attr(href) \\")\\"}abbr[title]:after{content:\\" (\\" attr(title) \\")\\"}a[href^=\\"#\\"]:after,a[href^=\\"javascript:\\"]:after{content:\\"\\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}*,:after,:before{box-sizing:border-box}html{font-size:1rem;-webkit-tap-highlight-color:transparent}body{font:1.25rem/1.5 EB Garamond,Georgia,Times New Roman,Times,serif;color:#383838;background-color:#f9f9f9}a{color:#f9f9f9}a,a:focus,a:hover{text-decoration:none}a:focus,a:hover{color:#5af}h1,h2,h3,h4,h5,h6{font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:500;color:inherit}h1 .small,h1 small,h2 .small,h2 small,h3 .small,h3 small,h4 .small,h4 small,h5 .small,h5 small,h6 .small,h6 small{font-weight:400;line-height:1;color:inherit}h1 .small,h1 small,h2 .small,h2 small,h3 .small,h3 small,h4 .small,h4 small{font-size:65%}h5,h6{margin-top:30px;margin-bottom:15px}h5 .small,h5 small,h6 .small,h6 small{font-size:75%}h1{font-size:2.96074rem}h1,h2{line-height:3.75rem;margin-top:60px;margin-bottom:30px}h2{font-size:2.22111rem}h3{font-size:1.66625rem;line-height:3.75rem}h3,h4{margin-top:30px;margin-bottom:30px}h4{font-size:1.25rem;line-height:1.875rem}h5{font-size:.9375rem}h6{font-size:.70313rem}p{margin:0 0 15px}ol,ul{margin-top:0;margin-bottom:15px ol,ul;margin-bottom-margin-bottom:0}.loader{position:absolute;top:50%;left:50%;right:auto;bottom:auto;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.loader-dot{display:inline-block;width:25px;height:25px;border-radius:50%;background-color:#000}.loader-dot+.loader-dot{margin-left:10px}@-webkit-keyframes move{to{-webkit-transform:translateY(-75px);transform:translateY(-75px)}}@keyframes move{to{-webkit-transform:translateY(-75px);transform:translateY(-75px)}}.loader-dot{-webkit-animation:move;animation:move;-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-timing-function:cubic-bezier(.6,-.28,.735,.045);animation-timing-function:cubic-bezier(.6,-.28,.735,.045);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate}.loader>:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.loader>:nth-child(2){-webkit-animation-delay:.2s;animation-delay:.2s}.loader>:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}.loader>:nth-child(4){-webkit-animation-delay:.6s;animation-delay:.6s}.loader>:nth-child(5){-webkit-animation-delay:.8s;animation-delay:.8s}html{position:relative;height:auto}body{background-image:repeating-linear-gradient(45deg,#f5a,#f5a 10px,#f9f9f9 0,#f9f9f9 20px)}.container{margin:15px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;min-height:calc(100vh - 30px);border:10px solid #050505;background-color:#f9f9f9}nav{width:100%;height:auto;padding:0 20px;color:#f3f3f3;background:#5a5a5a;text-align:center}@media (min-width:768px){nav{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:calc(99.99% * 1/2 - 7.5px)}nav:nth-child(1n){margin-right:15px}nav:last-child{margin-right:0}nav:nth-child(2n){float:right;margin-right:0}}@media (min-width:992px){nav{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:calc(99.99% * 1/3 - 10px)}nav:nth-child(1n){margin-right:15px}nav:last-child{margin-right:0}nav:nth-child(3n){float:right;margin-right:0}}@media (min-width:1200px){nav{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:calc(99.99% * 1/4 - 11.25px)}nav:nth-child(1n){margin-right:15px}nav:last-child{margin-right:0}nav:nth-child(4n){float:right;margin-right:0}}nav img{border-radius:50%;display:block;max-width:100%;height:auto;margin:30px auto;padding:7.5px;background-color:#f9f9f9}nav a{fill:#f9f9f9;text-decoration:none}nav a:hover{fill:#af5}main{height:100%;padding:0 15px}main h4{width:100%}main h4 .small,main h4 small{float:right}@media (min-width:768px){main{padding:0 30px 30px 0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:calc(99.99% * 1/2 - 7.5px)}main:nth-child(1n){margin-right:15px}main:last-child{margin-right:0}main:nth-child(2n){float:right;margin-right:0}}@media (min-width:992px){main{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:calc(99.99% * 2/3 - 5px)}main:nth-child(1n){margin-right:15px}main:last-child{margin-right:0}main:nth-child(3n){float:right;margin-right:0}}@media (min-width:1200px){main{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:calc(99.99% * 3/4 - 3.75px)}main:nth-child(1n){margin-right:15px}main:last-child{margin-right:0}main:nth-child(4n){float:right;margin-right:0}}article{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap}article header,article section{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:99.99%}article header:nth-child(1n),article section:nth-child(1n){margin-right:15px}article header:last-child,article section:last-child{margin-right:0}article header:nth-child(1n),article section:nth-child(1n){float:right;margin-right:0}@media (min-width:768px){article.strengths section{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:calc(99.99% * 1/2 - 7.5px)}article.strengths section:nth-child(1n){margin-right:15px}article.strengths section:last-child{margin-right:0}article.strengths section:nth-child(2n){float:right;margin-right:0}}@media (min-width:768px){article.interests section{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:calc(99.99% * 1/2 - 7.5px)}article.interests section:nth-child(1n){margin-right:15px}article.interests section:last-child{margin-right:0}article.interests section:nth-child(2n){float:right;margin-right:0}}h3{position:relative;padding-left:35px;margin-left:-35px;background:#5af;box-shadow:0 2px 4px #888}@media (min-width:992px){h3{width:400px}}h3:after{content:\'\';position:absolute;width:0;height:0;left:0;top:100%;border-width:5px 10px;border-style:solid;border-color:#0056ac #0056ac transparent transparent}@media print{h3:after{border:none}}@media print{h1,h2,h3,h4,h5{line-height:2.8125rem;margin-top:7.5px;margin-bottom:7.5px}a{fill:#000!important}.container{margin:0;border:none}.hidden-print{display:none!important}}", ""]);\n\n// exports\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/css-loader!./~/postcss-loader!./~/sass-loader!./css/site.scss\n ** module id = 3\n ** module chunks = 0\n **/\n\n//# sourceURL=webpack:///./css/site.scss?./~/css-loader!./~/postcss-loader!./~/sass-loader')},function(module,exports){eval('module.exports = "<div class=container> <nav> <img src=\\"https://s.gravatar.com/avatar/c7cda18594e6e6c554f8f9872dd9acbb?s=300\\" class=hidden-print alt=\\"profile image\\"/> <h1>Jonathan Haines<br/><small>Web Technology Consultant</small></h1> <h2 class=hidden-print> <a href=https://twitter.com/BarryThePenguin title=Twitter> <svg width=40 height=40 viewBox=\\"0 0 1792 1792\\" xmlns=http://www.w3.org/2000/svg> <path d=\\"M1408 610q-56 25-121 34 68-40 93-117-65 38-134 51-61-66-153-66-87 0-148.5 61.5t-61.5 148.5q0 29 5 48-129-7-242-65t-192-155q-29 50-29 106 0 114 91 175-47-1-100-26v2q0 75 50 133.5t123 72.5q-29 8-51 8-13 0-39-4 21 63 74.5 104t121.5 42q-116 90-261 90-26 0-50-3 148 94 322 94 112 0 210-35.5t168-95 120.5-137 75-162 24.5-168.5q0-18-1-27 63-45 105-109zm256-194v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z\\"/> </svg> </a> <a href=https://github.com/BarryThePenguin title=GitHub> <svg width=40 height=40 viewBox=\\"0 0 1792 1792\\" xmlns=http://www.w3.org/2000/svg> <path d=\\"M522 1352q-8 9-20-3-13-11-4-19 8-9 20 3 12 11 4 19zm-42-61q9 12 0 19-8 6-17-7t0-18q9-7 17 6zm-61-60q-5 7-13 2-10-5-7-12 3-5 13-2 10 5 7 12zm31 34q-6 7-16-3-9-11-2-16 6-6 16 3 9 11 2 16zm129 112q-4 12-19 6-17-4-13-15t19-7q16 5 13 16zm63 5q0 11-16 11-17 2-17-11 0-11 16-11 17-2 17 11zm58-10q2 10-14 14t-18-8 14-15q16-2 18 9zm964-956v960q0 119-84.5 203.5t-203.5 84.5h-224q-16 0-24.5-1t-19.5-5-16-14.5-5-27.5v-239q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 103t.5 68q0 22-11 33.5t-22 13-33 1.5h-224q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z\\"/> </svg> </a> <a href=https://au.linkedin.com/in/jonnohaines title=LinkedIn> <svg width=40 height=40 viewBox=\\"0 0 1792 1792\\" xmlns=http://www.w3.org/2000/svg> <path d=\\"M365 1414h231v-694h-231v694zm246-908q-1-52-36-86t-93-34-94.5 34-36.5 86q0 51 35.5 85.5t92.5 34.5h1q59 0 95-34.5t36-85.5zm585 908h231v-398q0-154-73-233t-193-79q-136 0-209 117h2v-101h-231q3 66 0 694h231v-388q0-38 7-56 15-35 45-59.5t74-24.5q116 0 116 157v371zm468-998v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z\\"/> </svg> </a> </h2> <p><a href=mailto:jonno.haines@gmail.com>jonno.haines@gmail.com</a></p> </nav> <main> <article class=career> <header> <h3> About </h3> </header> <p> Passionate about building up new developers, improving experiences between people and technology, and open source projects and software. </p> <p> Currently exploring web standards, functional programming and composable user interfaces. </p> </article> <article class=strengths> <header> <h3> Skills </h3> </header> <p> Ongoing learning, testing and improvement is an important part of my approach to software development and professional development. </p> <section> <p> Programming </p> <ul> <li> Web Applications </li> <li> JavaScript </li> <li> .Net </li> </ul> </section> <section> <p> People </p> <ul> <li> Collaborating </li> <li> Mentoring </li> <li> Enabling </li> </ul> </section> </article> <article class=employment> <header> <h3> Work </h3> </header> <h4> RXP Services - Consultant <small>July 2012 — Present</small> </h4> <p> <strong>Key Technologies:</strong> npm, Angular, Bootstrap, Karma, Jasmine, ASP.NET MVC and Web API, Entity Framework, OData, Unity Application Block, xUnit </p> <h4> Insight4 - Developer<small>July 2012 — June 2014</small> </h4> <p> <strong>Key Technologies:</strong> ASP.NET MVC and Web API, Entity Framework, xUnit, Kenod UI, Angular, Bootstrap </p> <h4> Insight4 - Junior Developer<small>Summer of 2010 and 2011</small> </h4> <p> <strong>Key Technologies:</strong> ASP.NET MVC, NHibernate, HTML5, JavaScript, CSS </p> </article> <article class=volunteer> <header> <h3> Volunteer </h3> </header> <h4> Vision 100 IT <small>July 2010 — Present</small> </h4> <p> Vision 100 IT exists to help churches - particularly church IT volunteers and ministry staff - to use IT better. </p> </article> <article class=education> <header> <h3> Education </h3> </header> <h4> University of Tasmania <small>2008 — 2014</small> </h4> <p> Bachelor of Engineering, Computer Systems </p> </article> <article class=interests> <header> <h3> Interests </h3> </header> <section> <p>Open Source Software</p> <ul> <li>SparkleShare</li> <li>angular-formly</li> <li>AVA</li> <li>eslint</li> </ul> </section> <section> <p>Relaxing</p> <ul> <li>Cycling</li> <li>Guitar</li> <li>Board games</li> </ul> </section> <section> <p>Thinking</p> <ul> <li>Theology</li> <li>Feminism</li> <li>Diversity in tech</li> <li>Business culture</li> </ul> </section> <section> <p>Tasty Drinks</p> <ul> <li>Coffee</li> <li>Beer</li> <li>Whisky</li> </ul> </section> </article> </main> </div>";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./views/resume.html\n ** module id = 4\n ** module chunks = 0\n **/\n\n//# sourceURL=webpack:///./views/resume.html?')},function(module,exports){eval('/*\r\n	MIT License http://www.opensource.org/licenses/mit-license.php\r\n	Author Tobias Koppers @sokra\r\n*/\r\nvar stylesInDom = {},\r\n	memoize = function(fn) {\r\n		var memo;\r\n		return function () {\r\n			if (typeof memo === "undefined") memo = fn.apply(this, arguments);\r\n			return memo;\r\n		};\r\n	},\r\n	isOldIE = memoize(function() {\r\n		return /msie [6-9]\\b/.test(window.navigator.userAgent.toLowerCase());\r\n	}),\r\n	getHeadElement = memoize(function () {\r\n		return document.head || document.getElementsByTagName("head")[0];\r\n	}),\r\n	singletonElement = null,\r\n	singletonCounter = 0,\r\n	styleElementsInsertedAtTop = [];\r\n\r\nmodule.exports = function(list, options) {\r\n	if(typeof DEBUG !== "undefined" && DEBUG) {\r\n		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");\r\n	}\r\n\r\n	options = options || {};\r\n	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\r\n	// tags it will allow on a page\r\n	if (typeof options.singleton === "undefined") options.singleton = isOldIE();\r\n\r\n	// By default, add <style> tags to the bottom of <head>.\r\n	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";\r\n\r\n	var styles = listToStyles(list);\r\n	addStylesToDom(styles, options);\r\n\r\n	return function update(newList) {\r\n		var mayRemove = [];\r\n		for(var i = 0; i < styles.length; i++) {\r\n			var item = styles[i];\r\n			var domStyle = stylesInDom[item.id];\r\n			domStyle.refs--;\r\n			mayRemove.push(domStyle);\r\n		}\r\n		if(newList) {\r\n			var newStyles = listToStyles(newList);\r\n			addStylesToDom(newStyles, options);\r\n		}\r\n		for(var i = 0; i < mayRemove.length; i++) {\r\n			var domStyle = mayRemove[i];\r\n			if(domStyle.refs === 0) {\r\n				for(var j = 0; j < domStyle.parts.length; j++)\r\n					domStyle.parts[j]();\r\n				delete stylesInDom[domStyle.id];\r\n			}\r\n		}\r\n	};\r\n}\r\n\r\nfunction addStylesToDom(styles, options) {\r\n	for(var i = 0; i < styles.length; i++) {\r\n		var item = styles[i];\r\n		var domStyle = stylesInDom[item.id];\r\n		if(domStyle) {\r\n			domStyle.refs++;\r\n			for(var j = 0; j < domStyle.parts.length; j++) {\r\n				domStyle.parts[j](item.parts[j]);\r\n			}\r\n			for(; j < item.parts.length; j++) {\r\n				domStyle.parts.push(addStyle(item.parts[j], options));\r\n			}\r\n		} else {\r\n			var parts = [];\r\n			for(var j = 0; j < item.parts.length; j++) {\r\n				parts.push(addStyle(item.parts[j], options));\r\n			}\r\n			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\r\n		}\r\n	}\r\n}\r\n\r\nfunction listToStyles(list) {\r\n	var styles = [];\r\n	var newStyles = {};\r\n	for(var i = 0; i < list.length; i++) {\r\n		var item = list[i];\r\n		var id = item[0];\r\n		var css = item[1];\r\n		var media = item[2];\r\n		var sourceMap = item[3];\r\n		var part = {css: css, media: media, sourceMap: sourceMap};\r\n		if(!newStyles[id])\r\n			styles.push(newStyles[id] = {id: id, parts: [part]});\r\n		else\r\n			newStyles[id].parts.push(part);\r\n	}\r\n	return styles;\r\n}\r\n\r\nfunction insertStyleElement(options, styleElement) {\r\n	var head = getHeadElement();\r\n	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];\r\n	if (options.insertAt === "top") {\r\n		if(!lastStyleElementInsertedAtTop) {\r\n			head.insertBefore(styleElement, head.firstChild);\r\n		} else if(lastStyleElementInsertedAtTop.nextSibling) {\r\n			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);\r\n		} else {\r\n			head.appendChild(styleElement);\r\n		}\r\n		styleElementsInsertedAtTop.push(styleElement);\r\n	} else if (options.insertAt === "bottom") {\r\n		head.appendChild(styleElement);\r\n	} else {\r\n		throw new Error("Invalid value for parameter \'insertAt\'. Must be \'top\' or \'bottom\'.");\r\n	}\r\n}\r\n\r\nfunction removeStyleElement(styleElement) {\r\n	styleElement.parentNode.removeChild(styleElement);\r\n	var idx = styleElementsInsertedAtTop.indexOf(styleElement);\r\n	if(idx >= 0) {\r\n		styleElementsInsertedAtTop.splice(idx, 1);\r\n	}\r\n}\r\n\r\nfunction createStyleElement(options) {\r\n	var styleElement = document.createElement("style");\r\n	styleElement.type = "text/css";\r\n	insertStyleElement(options, styleElement);\r\n	return styleElement;\r\n}\r\n\r\nfunction createLinkElement(options) {\r\n	var linkElement = document.createElement("link");\r\n	linkElement.rel = "stylesheet";\r\n	insertStyleElement(options, linkElement);\r\n	return linkElement;\r\n}\r\n\r\nfunction addStyle(obj, options) {\r\n	var styleElement, update, remove;\r\n\r\n	if (options.singleton) {\r\n		var styleIndex = singletonCounter++;\r\n		styleElement = singletonElement || (singletonElement = createStyleElement(options));\r\n		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);\r\n		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);\r\n	} else if(obj.sourceMap &&\r\n		typeof URL === "function" &&\r\n		typeof URL.createObjectURL === "function" &&\r\n		typeof URL.revokeObjectURL === "function" &&\r\n		typeof Blob === "function" &&\r\n		typeof btoa === "function") {\r\n		styleElement = createLinkElement(options);\r\n		update = updateLink.bind(null, styleElement);\r\n		remove = function() {\r\n			removeStyleElement(styleElement);\r\n			if(styleElement.href)\r\n				URL.revokeObjectURL(styleElement.href);\r\n		};\r\n	} else {\r\n		styleElement = createStyleElement(options);\r\n		update = applyToTag.bind(null, styleElement);\r\n		remove = function() {\r\n			removeStyleElement(styleElement);\r\n		};\r\n	}\r\n\r\n	update(obj);\r\n\r\n	return function updateStyle(newObj) {\r\n		if(newObj) {\r\n			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)\r\n				return;\r\n			update(obj = newObj);\r\n		} else {\r\n			remove();\r\n		}\r\n	};\r\n}\r\n\r\nvar replaceText = (function () {\r\n	var textStore = [];\r\n\r\n	return function (index, replacement) {\r\n		textStore[index] = replacement;\r\n		return textStore.filter(Boolean).join(\'\\n\');\r\n	};\r\n})();\r\n\r\nfunction applyToSingletonTag(styleElement, index, remove, obj) {\r\n	var css = remove ? "" : obj.css;\r\n\r\n	if (styleElement.styleSheet) {\r\n		styleElement.styleSheet.cssText = replaceText(index, css);\r\n	} else {\r\n		var cssNode = document.createTextNode(css);\r\n		var childNodes = styleElement.childNodes;\r\n		if (childNodes[index]) styleElement.removeChild(childNodes[index]);\r\n		if (childNodes.length) {\r\n			styleElement.insertBefore(cssNode, childNodes[index]);\r\n		} else {\r\n			styleElement.appendChild(cssNode);\r\n		}\r\n	}\r\n}\r\n\r\nfunction applyToTag(styleElement, obj) {\r\n	var css = obj.css;\r\n	var media = obj.media;\r\n\r\n	if(media) {\r\n		styleElement.setAttribute("media", media)\r\n	}\r\n\r\n	if(styleElement.styleSheet) {\r\n		styleElement.styleSheet.cssText = css;\r\n	} else {\r\n		while(styleElement.firstChild) {\r\n			styleElement.removeChild(styleElement.firstChild);\r\n		}\r\n		styleElement.appendChild(document.createTextNode(css));\r\n	}\r\n}\r\n\r\nfunction updateLink(linkElement, obj) {\r\n	var css = obj.css;\r\n	var sourceMap = obj.sourceMap;\r\n\r\n	if(sourceMap) {\r\n		// http://stackoverflow.com/a/26603875\r\n		css += "\\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";\r\n	}\r\n\r\n	var blob = new Blob([css], { type: "text/css" });\r\n\r\n	var oldSrc = linkElement.href;\r\n\r\n	linkElement.href = URL.createObjectURL(blob);\r\n\r\n	if(oldSrc)\r\n		URL.revokeObjectURL(oldSrc);\r\n}\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/style-loader/addStyles.js\n ** module id = 5\n ** module chunks = 0\n **/\n\n//# sourceURL=webpack:///./~/style-loader/addStyles.js?')},function(module,exports,__webpack_require__){eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(3);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(5)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n	// When the styles change, update the <style> tags\n	if(!content.locals) {\n		module.hot.accept(\"!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./site.scss\", function() {\n			var newContent = require(\"!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./site.scss\");\n			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n			update(newContent);\n		});\n	}\n	// When the module is disposed, remove the <style> tags\n	module.hot.dispose(function() { update(); });\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./css/site.scss\n ** module id = 6\n ** module chunks = 0\n **/\n\n//# sourceURL=webpack:///./css/site.scss?")},function(module,exports,__webpack_require__){eval("module.exports = __webpack_require__(1);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi main\n ** module id = 7\n ** module chunks = 0\n **/\n\n//# sourceURL=webpack:///multi_main?")}]);