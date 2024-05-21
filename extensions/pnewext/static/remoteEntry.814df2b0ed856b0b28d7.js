var _JUPYTERLAB;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "webpack/container/entry/pnewext":
/*!***********************!*\
  !*** container entry ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var moduleMap = {
	"./index": () => {
		return __webpack_require__.e("lib_index_js").then(() => (() => ((__webpack_require__(/*! ./lib/index.js */ "./lib/index.js")))));
	},
	"./extension": () => {
		return __webpack_require__.e("lib_index_js").then(() => (() => ((__webpack_require__(/*! ./lib/index.js */ "./lib/index.js")))));
	},
	"./style": () => {
		return __webpack_require__.e("style_index_js").then(() => (() => ((__webpack_require__(/*! ./style/index.js */ "./style/index.js")))));
	}
};
var get = (module, getScope) => {
	__webpack_require__.R = getScope;
	getScope = (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(() => {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
	__webpack_require__.R = undefined;
	return getScope;
};
var init = (shareScope, initScope) => {
	if (!__webpack_require__.S) return;
	var name = "default"
	var oldScope = __webpack_require__.S[name];
	if(oldScope && oldScope !== shareScope) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
	__webpack_require__.S[name] = shareScope;
	return __webpack_require__.I(name, initScope);
};

// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: () => (get),
	init: () => (init)
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"lib_index_js":"a28bc70f1936a803e9cb","style_index_js":"1fb5d9732505d92fa439","vendors-node_modules_azure_openai_dist-esm_src_index_js":"87c1e062e78ed22ad746","vendors-node_modules_monaco-editor_esm_vs_editor_editor_main_js":"9f81a8c5fb32f3ea5dc4","data_image_png_base64_iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5_AAAAAXNSR0IArs4c6QAAAARnQU1-5f4412":"70a7f18ee11adc814ce2","vendors-node_modules_openai_index_mjs":"dd12f22857eea3be033d","vendors-node_modules_posthog-js_dist_es_js":"78416430ef8b838fb6a6","vendors-node_modules_monaco-editor_esm_vs_basic-languages_abap_abap_js":"bc8b8dd5f7879d1b792f","node_modules_monaco-editor_esm_vs_basic-languages_apex_apex_js":"ee9070fc00fc37f7ca8a","node_modules_monaco-editor_esm_vs_basic-languages_azcli_azcli_js":"c6f180f2909378e73f1f","node_modules_monaco-editor_esm_vs_basic-languages_bat_bat_js":"3789480ae7d5c939ff07","node_modules_monaco-editor_esm_vs_basic-languages_bicep_bicep_js":"47742761008047ad8619","node_modules_monaco-editor_esm_vs_basic-languages_cameligo_cameligo_js":"2a42a8e7ea5b2d11c2e9","vendors-node_modules_monaco-editor_esm_vs_basic-languages_clojure_clojure_js":"406f77a6cee1c5ed54fe","node_modules_monaco-editor_esm_vs_basic-languages_coffee_coffee_js":"591b45d7f5f79e27828c","node_modules_monaco-editor_esm_vs_basic-languages_cpp_cpp_js":"5d021963dbac017386ba","node_modules_monaco-editor_esm_vs_basic-languages_csharp_csharp_js":"79dc6c565bd4a2fe70e5","node_modules_monaco-editor_esm_vs_basic-languages_csp_csp_js":"8c2d30f2400adb204ec6","node_modules_monaco-editor_esm_vs_basic-languages_css_css_js":"16ae80ea7de7af4f1d26","node_modules_monaco-editor_esm_vs_basic-languages_cypher_cypher_js":"f0feb6325831bb3a587d","node_modules_monaco-editor_esm_vs_basic-languages_dart_dart_js":"443285a91c4a04bcb0a6","node_modules_monaco-editor_esm_vs_basic-languages_dockerfile_dockerfile_js":"296ab0e6b24a8a154019","node_modules_monaco-editor_esm_vs_basic-languages_ecl_ecl_js":"8095656a3566611dae4e","vendors-node_modules_monaco-editor_esm_vs_basic-languages_elixir_elixir_js":"6c186c698a4a332704b4","node_modules_monaco-editor_esm_vs_basic-languages_flow9_flow9_js":"041e47c0d7d4c641e167","node_modules_monaco-editor_esm_vs_basic-languages_fsharp_fsharp_js":"4fa757d4dafddb816c3d","vendors-node_modules_monaco-editor_esm_vs_basic-languages_freemarker2_freemarker2_js":"dac8522538773cad5b85","node_modules_monaco-editor_esm_vs_basic-languages_go_go_js":"4594516cc980ba536331","node_modules_monaco-editor_esm_vs_basic-languages_graphql_graphql_js":"1c27a96bff41c2feabc0","vendors-node_modules_monaco-editor_esm_vs_basic-languages_handlebars_handlebars_js":"cb87b0924f919ebaae3c","node_modules_monaco-editor_esm_vs_basic-languages_hcl_hcl_js":"251d3e4236840c5d67d0","node_modules_monaco-editor_esm_vs_basic-languages_html_html_js":"102115f2fba49cc0c133","node_modules_monaco-editor_esm_vs_basic-languages_ini_ini_js":"a91a82f76da3a739e447","node_modules_monaco-editor_esm_vs_basic-languages_java_java_js":"0b14acbd5b94263faf55","vendors-node_modules_monaco-editor_esm_vs_basic-languages_javascript_javascript_js":"59b8eb5ce365e4868955","vendors-node_modules_monaco-editor_esm_vs_basic-languages_julia_julia_js":"2f26b01e08c4c0e4c3ed","node_modules_monaco-editor_esm_vs_basic-languages_kotlin_kotlin_js":"7054536bec6166fde06e","node_modules_monaco-editor_esm_vs_basic-languages_less_less_js":"cecda4a19a112aab7843","node_modules_monaco-editor_esm_vs_basic-languages_lexon_lexon_js":"728be5f9555888030eed","node_modules_monaco-editor_esm_vs_basic-languages_lua_lua_js":"024b809a7e315866b5fb","node_modules_monaco-editor_esm_vs_basic-languages_liquid_liquid_js":"32bbb2dca8cd9bf3e7b5","node_modules_monaco-editor_esm_vs_basic-languages_m3_m3_js":"b83da338511104e6859d","node_modules_monaco-editor_esm_vs_basic-languages_markdown_markdown_js":"fd1bf3bb21987b704fc5","node_modules_monaco-editor_esm_vs_basic-languages_mdx_mdx_js":"a0e6fd33fc15a3bde17c","node_modules_monaco-editor_esm_vs_basic-languages_mips_mips_js":"e96169d4c1f7ab65c657","node_modules_monaco-editor_esm_vs_basic-languages_msdax_msdax_js":"69421f1d9c6ced0dcbaf","vendors-node_modules_monaco-editor_esm_vs_basic-languages_mysql_mysql_js":"ce2c2e969dfa911e9336","node_modules_monaco-editor_esm_vs_basic-languages_objective-c_objective-c_js":"0ffd8afd6c93cf2b5af7","node_modules_monaco-editor_esm_vs_basic-languages_pascal_pascal_js":"02a6bf65aa469ea424c0","node_modules_monaco-editor_esm_vs_basic-languages_pascaligo_pascaligo_js":"0cd0254c406598477315","vendors-node_modules_monaco-editor_esm_vs_basic-languages_perl_perl_js":"eb0064a5e15f1e8e422d","vendors-node_modules_monaco-editor_esm_vs_basic-languages_pgsql_pgsql_js":"446cf3605aea48b504d5","vendors-node_modules_monaco-editor_esm_vs_basic-languages_php_php_js":"441dc041d5a1109f21bd","node_modules_monaco-editor_esm_vs_basic-languages_pla_pla_js":"a5658ea41807abe0acf1","vendors-node_modules_monaco-editor_esm_vs_basic-languages_postiats_postiats_js":"0fd936c3d0585326b392","vendors-node_modules_monaco-editor_esm_vs_basic-languages_powerquery_powerquery_js":"00ff814a386c46bb5cd2","node_modules_monaco-editor_esm_vs_basic-languages_powershell_powershell_js":"895562571f2f69d51bd1","vendors-node_modules_monaco-editor_esm_vs_basic-languages_protobuf_protobuf_js":"8f3bb2c45a6c9d20cab7","node_modules_monaco-editor_esm_vs_basic-languages_pug_pug_js":"d601766ba9d91b65454c","node_modules_monaco-editor_esm_vs_basic-languages_python_python_js":"08ca22eae6a9f5f219eb","node_modules_monaco-editor_esm_vs_basic-languages_qsharp_qsharp_js":"ff779e4ee257b2c79b88","node_modules_monaco-editor_esm_vs_basic-languages_r_r_js":"b7e38f6790158ed14914","vendors-node_modules_monaco-editor_esm_vs_basic-languages_razor_razor_js":"df1f454a771074c43097","node_modules_monaco-editor_esm_vs_basic-languages_redis_redis_js":"0c58a074ab2eb78cd1ae","vendors-node_modules_monaco-editor_esm_vs_basic-languages_redshift_redshift_js":"3afcfcf6dfabdba2e275","node_modules_monaco-editor_esm_vs_basic-languages_restructuredtext_restructuredtext_js":"803355dcbc6c5e53cc5f","vendors-node_modules_monaco-editor_esm_vs_basic-languages_ruby_ruby_js":"aef2fb6ad977e252bba6","node_modules_monaco-editor_esm_vs_basic-languages_rust_rust_js":"727173ddf378f064f3ed","node_modules_monaco-editor_esm_vs_basic-languages_sb_sb_js":"00fc1804460dea21fba8","vendors-node_modules_monaco-editor_esm_vs_basic-languages_scala_scala_js":"9639deccc19fd58d18a9","node_modules_monaco-editor_esm_vs_basic-languages_scheme_scheme_js":"5da53ed1f3864030dee4","node_modules_monaco-editor_esm_vs_basic-languages_scss_scss_js":"ccc1435b87b0c1b53d83","node_modules_monaco-editor_esm_vs_basic-languages_shell_shell_js":"4038129c0d5d71d74254","vendors-node_modules_monaco-editor_esm_vs_basic-languages_solidity_solidity_js":"b02c9e03aca0909c53b1","node_modules_monaco-editor_esm_vs_basic-languages_sophia_sophia_js":"92dea330959fffaa24ff","node_modules_monaco-editor_esm_vs_basic-languages_sparql_sparql_js":"eb384db17a35b81c12cb","vendors-node_modules_monaco-editor_esm_vs_basic-languages_sql_sql_js":"011e63d3185dfae26e70","vendors-node_modules_monaco-editor_esm_vs_basic-languages_st_st_js":"f3171bfd48f2a215c75a","node_modules_monaco-editor_esm_vs_basic-languages_swift_swift_js":"2f86dc36da6854b4d8ae","vendors-node_modules_monaco-editor_esm_vs_basic-languages_systemverilog_systemverilog_js":"01577748fb109701b65b","node_modules_monaco-editor_esm_vs_basic-languages_tcl_tcl_js":"5d110ca36b140090e9be","vendors-node_modules_monaco-editor_esm_vs_basic-languages_twig_twig_js":"9fa29678ea82fe8ce02a","node_modules_monaco-editor_esm_vs_basic-languages_typescript_typescript_js":"cff224367de5dd75e2f4","node_modules_monaco-editor_esm_vs_basic-languages_vb_vb_js":"50f15b03b13d4c03ddd9","vendors-node_modules_monaco-editor_esm_vs_basic-languages_wgsl_wgsl_js":"bb1c43304288f3c76a27","node_modules_monaco-editor_esm_vs_basic-languages_xml_xml_js":"eb3cc6c15b4f05531093","node_modules_monaco-editor_esm_vs_basic-languages_yaml_yaml_js":"c37641c52eda79a461a7","vendors-node_modules_monaco-editor_esm_vs_language_css_cssMode_js":"a94f578c00d11933dbff","vendors-node_modules_monaco-editor_esm_vs_language_html_htmlMode_js":"bbefad17956b320c7250","vendors-node_modules_monaco-editor_esm_vs_language_json_jsonMode_js":"d8557768ca61d66c1af9","vendors-node_modules_monaco-editor_esm_vs_language_typescript_tsMode_js":"1e2c8a19ac9164251709"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "pnewext:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => {
/******/ 				if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 			};
/******/ 			var uniqueName = "pnewext";
/******/ 			var register = (name, version, factory, eager) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					register("@azure/openai", "1.0.0-beta.12", () => (__webpack_require__.e("vendors-node_modules_azure_openai_dist-esm_src_index_js").then(() => (() => (__webpack_require__(/*! ./node_modules/@azure/openai/dist-esm/src/index.js */ "./node_modules/@azure/openai/dist-esm/src/index.js"))))));
/******/ 					register("monaco-editor", "0.48.0", () => (Promise.all([__webpack_require__.e("vendors-node_modules_monaco-editor_esm_vs_editor_editor_main_js"), __webpack_require__.e("data_image_png_base64_iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5_AAAAAXNSR0IArs4c6QAAAARnQU1-5f4412")]).then(() => (() => (__webpack_require__(/*! ./node_modules/monaco-editor/esm/vs/editor/editor.main.js */ "./node_modules/monaco-editor/esm/vs/editor/editor.main.js"))))));
/******/ 					register("openai", "4.47.1", () => (__webpack_require__.e("vendors-node_modules_openai_index_mjs").then(() => (() => (__webpack_require__(/*! ./node_modules/openai/index.mjs */ "./node_modules/openai/index.mjs"))))));
/******/ 					register("pnewext", "0.1.0", () => (__webpack_require__.e("lib_index_js").then(() => (() => (__webpack_require__(/*! ./lib/index.js */ "./lib/index.js"))))));
/******/ 					register("posthog-js", "1.131.4", () => (__webpack_require__.e("vendors-node_modules_posthog-js_dist_es_js").then(() => (() => (__webpack_require__(/*! ./node_modules/posthog-js/dist/es.js */ "./node_modules/posthog-js/dist/es.js"))))));
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/consumes */
/******/ 	(() => {
/******/ 		var parseVersion = (str) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var p=p=>{return p.split(".").map((p=>{return+p==p?+p:p}))},n=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(str),r=n[1]?p(n[1]):[];return n[2]&&(r.length++,r.push.apply(r,p(n[2]))),n[3]&&(r.push([]),r.push.apply(r,p(n[3]))),r;
/******/ 		}
/******/ 		var versionLt = (a, b) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			a=parseVersion(a),b=parseVersion(b);for(var r=0;;){if(r>=a.length)return r<b.length&&"u"!=(typeof b[r])[0];var e=a[r],n=(typeof e)[0];if(r>=b.length)return"u"==n;var t=b[r],f=(typeof t)[0];if(n!=f)return"o"==n&&"n"==f||("s"==f||"u"==n);if("o"!=n&&"u"!=n&&e!=t)return e<t;r++}
/******/ 		}
/******/ 		var rangeToString = (range) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var r=range[0],n="";if(1===range.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var e=1,a=1;a<range.length;a++){e--,n+="u"==(typeof(t=range[a]))[0]?"-":(e>0?".":"")+(e=2,t)}return n}var g=[];for(a=1;a<range.length;a++){var t=range[a];g.push(0===t?"not("+o()+")":1===t?"("+o()+" || "+o()+")":2===t?g.pop()+" "+g.pop():rangeToString(t))}return o();function o(){return g.pop().replace(/^\((.+)\)$/,"$1")}
/******/ 		}
/******/ 		var satisfy = (range, version) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			if(0 in range){version=parseVersion(version);var e=range[0],r=e<0;r&&(e=-e-1);for(var n=0,i=1,a=!0;;i++,n++){var f,s,g=i<range.length?(typeof range[i])[0]:"";if(n>=version.length||"o"==(s=(typeof(f=version[n]))[0]))return!a||("u"==g?i>e&&!r:""==g!=r);if("u"==s){if(!a||"u"!=g)return!1}else if(a)if(g==s)if(i<=e){if(f!=range[i])return!1}else{if(r?f>range[i]:f<range[i])return!1;f!=range[i]&&(a=!1)}else if("s"!=g&&"n"!=g){if(r||i<=e)return!1;a=!1,i--}else{if(i<=e||s<g!=r)return!1;a=!1}else"s"!=g&&"n"!=g&&(a=!1,i--)}}var t=[],o=t.pop.bind(t);for(n=1;n<range.length;n++){var u=range[n];t.push(1==u?o()|o():2==u?o()&o():u?satisfy(u,version):!o())}return!!o();
/******/ 		}
/******/ 		var ensureExistence = (scopeName, key) => {
/******/ 			var scope = __webpack_require__.S[scopeName];
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) throw new Error("Shared module " + key + " doesn't exist in shared scope " + scopeName);
/******/ 			return scope;
/******/ 		};
/******/ 		var findVersion = (scope, key) => {
/******/ 			var versions = scope[key];
/******/ 			var key = Object.keys(versions).reduce((a, b) => {
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key]
/******/ 		};
/******/ 		var findSingletonVersionKey = (scope, key) => {
/******/ 			var versions = scope[key];
/******/ 			return Object.keys(versions).reduce((a, b) => {
/******/ 				return !a || (!versions[a].loaded && versionLt(a, b)) ? b : a;
/******/ 			}, 0);
/******/ 		};
/******/ 		var getInvalidSingletonVersionMessage = (scope, key, version, requiredVersion) => {
/******/ 			return "Unsatisfied version " + version + " from " + (version && scope[key][version].from) + " of shared singleton module " + key + " (required " + rangeToString(requiredVersion) + ")"
/******/ 		};
/******/ 		var getSingleton = (scope, scopeName, key, requiredVersion) => {
/******/ 			var version = findSingletonVersionKey(scope, key);
/******/ 			return get(scope[key][version]);
/******/ 		};
/******/ 		var getSingletonVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 			var version = findSingletonVersionKey(scope, key);
/******/ 			if (!satisfy(requiredVersion, version)) warn(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 			return get(scope[key][version]);
/******/ 		};
/******/ 		var getStrictSingletonVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 			var version = findSingletonVersionKey(scope, key);
/******/ 			if (!satisfy(requiredVersion, version)) throw new Error(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 			return get(scope[key][version]);
/******/ 		};
/******/ 		var findValidVersion = (scope, key, requiredVersion) => {
/******/ 			var versions = scope[key];
/******/ 			var key = Object.keys(versions).reduce((a, b) => {
/******/ 				if (!satisfy(requiredVersion, b)) return a;
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key]
/******/ 		};
/******/ 		var getInvalidVersionMessage = (scope, scopeName, key, requiredVersion) => {
/******/ 			var versions = scope[key];
/******/ 			return "No satisfying version (" + rangeToString(requiredVersion) + ") of shared module " + key + " found in shared scope " + scopeName + ".\n" +
/******/ 				"Available versions: " + Object.keys(versions).map((key) => {
/******/ 				return key + " from " + versions[key].from;
/******/ 			}).join(", ");
/******/ 		};
/******/ 		var getValidVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 			var entry = findValidVersion(scope, key, requiredVersion);
/******/ 			if(entry) return get(entry);
/******/ 			throw new Error(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 		};
/******/ 		var warn = (msg) => {
/******/ 			if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 		};
/******/ 		var warnInvalidVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 			warn(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 		};
/******/ 		var get = (entry) => {
/******/ 			entry.loaded = 1;
/******/ 			return entry.get()
/******/ 		};
/******/ 		var init = (fn) => (function(scopeName, a, b, c) {
/******/ 			var promise = __webpack_require__.I(scopeName);
/******/ 			if (promise && promise.then) return promise.then(fn.bind(fn, scopeName, __webpack_require__.S[scopeName], a, b, c));
/******/ 			return fn(scopeName, __webpack_require__.S[scopeName], a, b, c);
/******/ 		});
/******/ 		
/******/ 		var load = /*#__PURE__*/ init((scopeName, scope, key) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return get(findVersion(scope, key));
/******/ 		});
/******/ 		var loadFallback = /*#__PURE__*/ init((scopeName, scope, key, fallback) => {
/******/ 			return scope && __webpack_require__.o(scope, key) ? get(findVersion(scope, key)) : fallback();
/******/ 		});
/******/ 		var loadVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 		});
/******/ 		var loadSingleton = /*#__PURE__*/ init((scopeName, scope, key) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getSingleton(scope, scopeName, key);
/******/ 		});
/******/ 		var loadSingletonVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getValidVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictSingletonVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 		});
/******/ 		var loadSingletonFallback = /*#__PURE__*/ init((scopeName, scope, key, fallback) => {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return getSingleton(scope, scopeName, key);
/******/ 		});
/******/ 		var loadSingletonVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return getSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 			var entry = scope && __webpack_require__.o(scope, key) && findValidVersion(scope, key, version);
/******/ 			return entry ? get(entry) : fallback();
/******/ 		});
/******/ 		var loadStrictSingletonVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var installedModules = {};
/******/ 		var moduleToHandlerMapping = {
/******/ 			"webpack/sharing/consume/default/@jupyterlab/apputils": () => (loadSingletonVersionCheck("default", "@jupyterlab/apputils", [1,4,3,0])),
/******/ 			"webpack/sharing/consume/default/@jupyterlab/notebook": () => (loadSingletonVersionCheck("default", "@jupyterlab/notebook", [1,4,2,0])),
/******/ 			"webpack/sharing/consume/default/monaco-editor/monaco-editor": () => (loadStrictVersionCheckFallback("default", "monaco-editor", [2,0,48,0], () => (Promise.all([__webpack_require__.e("vendors-node_modules_monaco-editor_esm_vs_editor_editor_main_js"), __webpack_require__.e("data_image_png_base64_iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5_AAAAAXNSR0IArs4c6QAAAARnQU1-5f4412")]).then(() => (() => (__webpack_require__(/*! monaco-editor */ "./node_modules/monaco-editor/esm/vs/editor/editor.main.js"))))))),
/******/ 			"webpack/sharing/consume/default/openai/openai": () => (loadStrictVersionCheckFallback("default", "openai", [1,4,47,1], () => (__webpack_require__.e("vendors-node_modules_openai_index_mjs").then(() => (() => (__webpack_require__(/*! openai */ "./node_modules/openai/index.mjs"))))))),
/******/ 			"webpack/sharing/consume/default/@jupyterlab/settingregistry": () => (loadSingletonVersionCheck("default", "@jupyterlab/settingregistry", [1,4,2,0])),
/******/ 			"webpack/sharing/consume/default/@azure/openai/@azure/openai": () => (loadStrictVersionCheckFallback("default", "@azure/openai", [1,1,0,0,,"beta",12], () => (__webpack_require__.e("vendors-node_modules_azure_openai_dist-esm_src_index_js").then(() => (() => (__webpack_require__(/*! @azure/openai */ "./node_modules/@azure/openai/dist-esm/src/index.js"))))))),
/******/ 			"webpack/sharing/consume/default/posthog-js/posthog-js": () => (loadStrictVersionCheckFallback("default", "posthog-js", [1,1,131,4], () => (__webpack_require__.e("vendors-node_modules_posthog-js_dist_es_js").then(() => (() => (__webpack_require__(/*! posthog-js */ "./node_modules/posthog-js/dist/es.js")))))))
/******/ 		};
/******/ 		// no consumes in initial chunks
/******/ 		var chunkMapping = {
/******/ 			"lib_index_js": [
/******/ 				"webpack/sharing/consume/default/@jupyterlab/apputils",
/******/ 				"webpack/sharing/consume/default/@jupyterlab/notebook",
/******/ 				"webpack/sharing/consume/default/monaco-editor/monaco-editor",
/******/ 				"webpack/sharing/consume/default/openai/openai",
/******/ 				"webpack/sharing/consume/default/@jupyterlab/settingregistry",
/******/ 				"webpack/sharing/consume/default/@azure/openai/@azure/openai",
/******/ 				"webpack/sharing/consume/default/posthog-js/posthog-js"
/******/ 			]
/******/ 		};
/******/ 		var startedInstallModules = {};
/******/ 		__webpack_require__.f.consumes = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					if(__webpack_require__.o(installedModules, id)) return promises.push(installedModules[id]);
/******/ 					if(!startedInstallModules[id]) {
/******/ 					var onFactory = (factory) => {
/******/ 						installedModules[id] = 0;
/******/ 						__webpack_require__.m[id] = (module) => {
/******/ 							delete __webpack_require__.c[id];
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					startedInstallModules[id] = true;
/******/ 					var onError = (error) => {
/******/ 						delete installedModules[id];
/******/ 						__webpack_require__.m[id] = (module) => {
/******/ 							delete __webpack_require__.c[id];
/******/ 							throw error;
/******/ 						}
/******/ 					};
/******/ 					try {
/******/ 						var promise = moduleToHandlerMapping[id]();
/******/ 						if(promise.then) {
/******/ 							promises.push(installedModules[id] = promise.then(onFactory)['catch'](onError));
/******/ 						} else onFactory(promise);
/******/ 					} catch(e) { onError(e); }
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"pnewext": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpnewext"] = self["webpackChunkpnewext"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("webpack/container/entry/pnewext");
/******/ 	(_JUPYTERLAB = typeof _JUPYTERLAB === "undefined" ? {} : _JUPYTERLAB).pnewext = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=remoteEntry.814df2b0ed856b0b28d7.js.map