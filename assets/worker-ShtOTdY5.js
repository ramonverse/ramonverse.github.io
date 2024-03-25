var se=Object.create,L=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,le=Object.getOwnPropertyNames,ue=Object.getPrototypeOf,fe=Object.prototype.hasOwnProperty,p=(e,t)=>L(e,"name",{value:t,configurable:!0}),j=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,a)=>(typeof require<"u"?require:t)[a]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')}),T=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),de=(e,t,a,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of le(t))!fe.call(e,s)&&s!==a&&L(e,s,{get:()=>t[s],enumerable:!(i=ce(t,s))||i.enumerable});return e},pe=(e,t,a)=>(a=e!=null?se(ue(e)):{},de(t||!e||!e.__esModule?L(a,"default",{value:e,enumerable:!0}):a,e)),me=T((e,t)=>{(function(a,i){typeof define=="function"&&define.amd?define("stackframe",[],i):typeof e=="object"?t.exports=i():a.StackFrame=i()})(e,function(){function a(d){return!isNaN(parseFloat(d))&&isFinite(d)}p(a,"_isNumber");function i(d){return d.charAt(0).toUpperCase()+d.substring(1)}p(i,"_capitalize");function s(d){return function(){return this[d]}}p(s,"_getter");var r=["isConstructor","isEval","isNative","isToplevel"],n=["columnNumber","lineNumber"],c=["fileName","functionName","source"],o=["args"],u=["evalOrigin"],l=r.concat(n,c,o,u);function f(d){if(d)for(var h=0;h<l.length;h++)d[l[h]]!==void 0&&this["set"+i(l[h])](d[l[h]])}p(f,"StackFrame"),f.prototype={getArgs:function(){return this.args},setArgs:function(d){if(Object.prototype.toString.call(d)!=="[object Array]")throw new TypeError("Args must be an Array");this.args=d},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(d){if(d instanceof f)this.evalOrigin=d;else if(d instanceof Object)this.evalOrigin=new f(d);else throw new TypeError("Eval Origin must be an Object or StackFrame")},toString:function(){var d=this.getFileName()||"",h=this.getLineNumber()||"",v=this.getColumnNumber()||"",E=this.getFunctionName()||"";return this.getIsEval()?d?"[eval] ("+d+":"+h+":"+v+")":"[eval]:"+h+":"+v:E?E+" ("+d+":"+h+":"+v+")":d+":"+h+":"+v}},f.fromString=p(function(d){var h=d.indexOf("("),v=d.lastIndexOf(")"),E=d.substring(0,h),ne=d.substring(h+1,v).split(","),D=d.substring(v+1);if(D.indexOf("@")===0)var S=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(D,""),oe=S[1],ie=S[2],ae=S[3];return new f({functionName:E,args:ne||void 0,fileName:oe,lineNumber:ie||void 0,columnNumber:ae||void 0})},"StackFrame$$fromString");for(var m=0;m<r.length;m++)f.prototype["get"+i(r[m])]=s(r[m]),f.prototype["set"+i(r[m])]=function(d){return function(h){this[d]=!!h}}(r[m]);for(var y=0;y<n.length;y++)f.prototype["get"+i(n[y])]=s(n[y]),f.prototype["set"+i(n[y])]=function(d){return function(h){if(!a(h))throw new TypeError(d+" must be a Number");this[d]=Number(h)}}(n[y]);for(var w=0;w<c.length;w++)f.prototype["get"+i(c[w])]=s(c[w]),f.prototype["set"+i(c[w])]=function(d){return function(h){this[d]=String(h)}}(c[w]);return f})}),ye=T((e,t)=>{(function(a,i){typeof define=="function"&&define.amd?define("error-stack-parser",["stackframe"],i):typeof e=="object"?t.exports=i(me()):a.ErrorStackParser=i(a.StackFrame)})(e,p(function(a){var i=/(^|@)\S+:\d+/,s=/^\s*at .*(\S+:\d+|\(native\))/m,r=/^(eval@)?(\[native code])?$/;return{parse:p(function(n){if(typeof n.stacktrace<"u"||typeof n["opera#sourceloc"]<"u")return this.parseOpera(n);if(n.stack&&n.stack.match(s))return this.parseV8OrIE(n);if(n.stack)return this.parseFFOrSafari(n);throw new Error("Cannot parse given Error object")},"ErrorStackParser$$parse"),extractLocation:p(function(n){if(n.indexOf(":")===-1)return[n];var c=/(.+?)(?::(\d+))?(?::(\d+))?$/,o=c.exec(n.replace(/[()]/g,""));return[o[1],o[2]||void 0,o[3]||void 0]},"ErrorStackParser$$extractLocation"),parseV8OrIE:p(function(n){var c=n.stack.split(`
`).filter(function(o){return!!o.match(s)},this);return c.map(function(o){o.indexOf("(eval ")>-1&&(o=o.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));var u=o.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),l=u.match(/ (\(.+\)$)/);u=l?u.replace(l[0],""):u;var f=this.extractLocation(l?l[1]:u),m=l&&u||void 0,y=["eval","<anonymous>"].indexOf(f[0])>-1?void 0:f[0];return new a({functionName:m,fileName:y,lineNumber:f[1],columnNumber:f[2],source:o})},this)},"ErrorStackParser$$parseV8OrIE"),parseFFOrSafari:p(function(n){var c=n.stack.split(`
`).filter(function(o){return!o.match(r)},this);return c.map(function(o){if(o.indexOf(" > eval")>-1&&(o=o.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),o.indexOf("@")===-1&&o.indexOf(":")===-1)return new a({functionName:o});var u=/((.*".+"[^@]*)?[^@]*)(?:@)/,l=o.match(u),f=l&&l[1]?l[1]:void 0,m=this.extractLocation(o.replace(u,""));return new a({functionName:f,fileName:m[0],lineNumber:m[1],columnNumber:m[2],source:o})},this)},"ErrorStackParser$$parseFFOrSafari"),parseOpera:p(function(n){return!n.stacktrace||n.message.indexOf(`
`)>-1&&n.message.split(`
`).length>n.stacktrace.split(`
`).length?this.parseOpera9(n):n.stack?this.parseOpera11(n):this.parseOpera10(n)},"ErrorStackParser$$parseOpera"),parseOpera9:p(function(n){for(var c=/Line (\d+).*script (?:in )?(\S+)/i,o=n.message.split(`
`),u=[],l=2,f=o.length;l<f;l+=2){var m=c.exec(o[l]);m&&u.push(new a({fileName:m[2],lineNumber:m[1],source:o[l]}))}return u},"ErrorStackParser$$parseOpera9"),parseOpera10:p(function(n){for(var c=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,o=n.stacktrace.split(`
`),u=[],l=0,f=o.length;l<f;l+=2){var m=c.exec(o[l]);m&&u.push(new a({functionName:m[3]||void 0,fileName:m[2],lineNumber:m[1],source:o[l]}))}return u},"ErrorStackParser$$parseOpera10"),parseOpera11:p(function(n){var c=n.stack.split(`
`).filter(function(o){return!!o.match(i)&&!o.match(/^Error created at/)},this);return c.map(function(o){var u=o.split("@"),l=this.extractLocation(u.pop()),f=u.shift()||"",m=f.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^)]*\)/g,"")||void 0,y;f.match(/\(([^)]*)\)/)&&(y=f.replace(/^[^(]+\(([^)]*)\)$/,"$1"));var w=y===void 0||y==="[arguments not available]"?void 0:y.split(",");return new a({functionName:m,args:w,fileName:l[0],lineNumber:l[1],columnNumber:l[2],source:o})},this)},"ErrorStackParser$$parseOpera11")}},"ErrorStackParser"))}),he=pe(ye()),g=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&typeof process.browser>"u",M=g&&typeof module<"u"&&typeof module.exports<"u"&&typeof j<"u"&&typeof __dirname<"u",we=g&&!M,ge=typeof Deno<"u",A=!g&&!ge,ve=A&&typeof window<"u"&&typeof document<"u"&&typeof document.createElement<"u"&&typeof sessionStorage<"u",be=A&&typeof importScripts<"u"&&typeof self<"u",U,O,N,I,P,Ee=`"fetch" is not defined, maybe you're using node < 18? From Pyodide >= 0.25.0, node >= 18 is required. Older versions of Node.js may work, but it is not guaranteed or supported. Falling back to "node-fetch".`;async function $(){if(!g||(U=(await import("./__vite-browser-external-8cwSXEUx.js").then(function(r){return r._})).default,P=await import("./__vite-browser-external-8cwSXEUx.js").then(function(r){return r._}),globalThis.fetch?O=fetch:(console.warn(Ee),O=(await import("./index-k525EB0O.js")).default),I=(await import("./__vite-browser-external-8cwSXEUx.js").then(function(r){return r._})).default,N=await import("./__vite-browser-external-8cwSXEUx.js").then(function(r){return r._}),R=N.sep,typeof j<"u"))return;let e=await import("./__vite-browser-external-8cwSXEUx.js").then(function(r){return r._}),t=await import("./__vite-browser-external-8cwSXEUx.js").then(function(r){return r._}),a=await import("./__vite-browser-external-8cwSXEUx.js").then(function(r){return r._}),i=await import("./__vite-browser-external-8cwSXEUx.js").then(function(r){return r._}),s={fs:e,crypto:t,ws:a,child_process:i};globalThis.require=function(r){return s[r]}}p($,"initNodeModules");function C(e,t){return N.resolve(t||".",e)}p(C,"node_resolvePath");function q(e,t){return t===void 0&&(t=location),new URL(e,t).toString()}p(q,"browser_resolvePath");var x;g?x=C:x=q;var R;g||(R="/");function W(e,t){return e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?{response:O(e)}:{binary:P.readFile(e).then(a=>new Uint8Array(a.buffer,a.byteOffset,a.byteLength))}}p(W,"node_getBinaryResponse");function H(e,t){let a=new URL(e,location);return{response:fetch(a,t?{integrity:t}:{})}}p(H,"browser_getBinaryResponse");var _;g?_=W:_=H;async function z(e,t){let{response:a,binary:i}=_(e,t);if(i)return i;let s=await a;if(!s.ok)throw new Error(`Failed to load '${e}': request failed.`);return new Uint8Array(await s.arrayBuffer())}p(z,"loadBinaryFile");var k;if(ve)k=p(async e=>await import(e),"loadScript");else if(be)k=p(async e=>{try{globalThis.importScripts(e)}catch(t){if(t instanceof TypeError)await import(e);else throw t}},"loadScript");else if(g)k=B;else throw new Error("Cannot determine runtime environment");async function B(e){e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?I.runInThisContext(await(await O(e)).text()):await import(U.pathToFileURL(e).href)}p(B,"nodeLoadScript");async function V(e){if(g){await $();let t=await P.readFile(e);return JSON.parse(t)}else return await(await fetch(e)).json()}p(V,"loadLockFile");async function J(){if(M)return __dirname;let e;try{throw new Error}catch(i){e=i}let t=he.default.parse(e)[0].fileName;if(we){let i=await import("./__vite-browser-external-8cwSXEUx.js").then(function(s){return s._});return(await import("./__vite-browser-external-8cwSXEUx.js").then(function(s){return s._})).fileURLToPath(i.dirname(t))}let a=t.lastIndexOf(R);if(a===-1)throw new Error("Could not extract indexURL path from pyodide module location");return t.slice(0,a)}p(J,"calculateDirname");function Y(e){let t=e.FS,a=e.FS.filesystems.MEMFS,i=e.PATH,s={DIR_MODE:16895,FILE_MODE:33279,mount:function(r){if(!r.opts.fileSystemHandle)throw new Error("opts.fileSystemHandle is required");return a.mount.apply(null,arguments)},syncfs:async(r,n,c)=>{try{let o=s.getLocalSet(r),u=await s.getRemoteSet(r),l=n?u:o,f=n?o:u;await s.reconcile(r,l,f),c(null)}catch(o){c(o)}},getLocalSet:r=>{let n=Object.create(null);function c(l){return l!=="."&&l!==".."}p(c,"isRealDir");function o(l){return f=>i.join2(l,f)}p(o,"toAbsolute");let u=t.readdir(r.mountpoint).filter(c).map(o(r.mountpoint));for(;u.length;){let l=u.pop(),f=t.stat(l);t.isDir(f.mode)&&u.push.apply(u,t.readdir(l).filter(c).map(o(l))),n[l]={timestamp:f.mtime,mode:f.mode}}return{type:"local",entries:n}},getRemoteSet:async r=>{let n=Object.create(null),c=await ke(r.opts.fileSystemHandle);for(let[o,u]of c)o!=="."&&(n[i.join2(r.mountpoint,o)]={timestamp:u.kind==="file"?(await u.getFile()).lastModifiedDate:new Date,mode:u.kind==="file"?s.FILE_MODE:s.DIR_MODE});return{type:"remote",entries:n,handles:c}},loadLocalEntry:r=>{let n=t.lookupPath(r).node,c=t.stat(r);if(t.isDir(c.mode))return{timestamp:c.mtime,mode:c.mode};if(t.isFile(c.mode))return n.contents=a.getFileDataAsTypedArray(n),{timestamp:c.mtime,mode:c.mode,contents:n.contents};throw new Error("node type not supported")},storeLocalEntry:(r,n)=>{if(t.isDir(n.mode))t.mkdirTree(r,n.mode);else if(t.isFile(n.mode))t.writeFile(r,n.contents,{canOwn:!0});else throw new Error("node type not supported");t.chmod(r,n.mode),t.utime(r,n.timestamp,n.timestamp)},removeLocalEntry:r=>{var n=t.stat(r);t.isDir(n.mode)?t.rmdir(r):t.isFile(n.mode)&&t.unlink(r)},loadRemoteEntry:async r=>{if(r.kind==="file"){let n=await r.getFile();return{contents:new Uint8Array(await n.arrayBuffer()),mode:s.FILE_MODE,timestamp:n.lastModifiedDate}}else{if(r.kind==="directory")return{mode:s.DIR_MODE,timestamp:new Date};throw new Error("unknown kind: "+r.kind)}},storeRemoteEntry:async(r,n,c)=>{let o=r.get(i.dirname(n)),u=t.isFile(c.mode)?await o.getFileHandle(i.basename(n),{create:!0}):await o.getDirectoryHandle(i.basename(n),{create:!0});if(u.kind==="file"){let l=await u.createWritable();await l.write(c.contents),await l.close()}r.set(n,u)},removeRemoteEntry:async(r,n)=>{await r.get(i.dirname(n)).removeEntry(i.basename(n)),r.delete(n)},reconcile:async(r,n,c)=>{let o=0,u=[];Object.keys(n.entries).forEach(function(m){let y=n.entries[m],w=c.entries[m];(!w||t.isFile(y.mode)&&y.timestamp.getTime()>w.timestamp.getTime())&&(u.push(m),o++)}),u.sort();let l=[];if(Object.keys(c.entries).forEach(function(m){n.entries[m]||(l.push(m),o++)}),l.sort().reverse(),!o)return;let f=n.type==="remote"?n.handles:c.handles;for(let m of u){let y=i.normalize(m.replace(r.mountpoint,"/")).substring(1);if(c.type==="local"){let w=f.get(y),d=await s.loadRemoteEntry(w);s.storeLocalEntry(m,d)}else{let w=s.loadLocalEntry(m);await s.storeRemoteEntry(f,y,w)}}for(let m of l)if(c.type==="local")s.removeLocalEntry(m);else{let y=i.normalize(m.replace(r.mountpoint,"/")).substring(1);await s.removeRemoteEntry(f,y)}}};e.FS.filesystems.NATIVEFS_ASYNC=s}p(Y,"initializeNativeFS");var ke=p(async e=>{let t=[];async function a(s){for await(let r of s.values())t.push(r),r.kind==="directory"&&await a(r)}p(a,"collect"),await a(e);let i=new Map;i.set(".",e);for(let s of t){let r=(await e.resolve(s)).join("/");i.set(r,s)}return i},"getFsHandles");function G(){let e={};return e.noImageDecoding=!0,e.noAudioDecoding=!0,e.noWasmDecoding=!1,e.preRun=[],e.quit=(t,a)=>{throw e.exited={status:t,toThrow:a},a},e}p(G,"createModule");function K(e,t){e.preRun.push(function(){let a="/";try{e.FS.mkdirTree(t)}catch(i){console.error(`Error occurred while making a home directory '${t}':`),console.error(i),console.error(`Using '${a}' for a home directory instead`),t=a}e.FS.chdir(t)})}p(K,"createHomeDirectory");function Q(e,t){e.preRun.push(function(){Object.assign(e.ENV,t)})}p(Q,"setEnvironment");function X(e,t){e.preRun.push(()=>{for(let a of t)e.FS.mkdirTree(a),e.FS.mount(e.FS.filesystems.NODEFS,{root:a},a)})}p(X,"mountLocalDirectories");function Z(e,t){let a=z(t);e.preRun.push(()=>{let i=e._py_version_major(),s=e._py_version_minor();e.FS.mkdirTree("/lib"),e.FS.mkdirTree(`/lib/python${i}.${s}/site-packages`),e.addRunDependency("install-stdlib"),a.then(r=>{e.FS.writeFile(`/lib/python${i}${s}.zip`,r)}).catch(r=>{console.error("Error occurred while installing the standard library:"),console.error(r)}).finally(()=>{e.removeRunDependency("install-stdlib")})})}p(Z,"installStdlib");function ee(e,t){let a;t.stdLibURL!=null?a=t.stdLibURL:a=t.indexURL+"python_stdlib.zip",Z(e,a),K(e,t.env.HOME),Q(e,t.env),X(e,t._node_mounts),e.preRun.push(()=>Y(e))}p(ee,"initializeFileSystem");function te(e,t){let{binary:a,response:i}=_(t+"pyodide.asm.wasm");e.instantiateWasm=function(s,r){return async function(){try{let n;i?n=await WebAssembly.instantiateStreaming(i,s):n=await WebAssembly.instantiate(await a,s);let{instance:c,module:o}=n;typeof WasmOffsetConverter<"u"&&(wasmOffsetConverter=new WasmOffsetConverter(wasmBinary,o)),r(c,o)}catch(n){console.warn("wasm instantiation failed!"),console.warn(n)}}(),{}}}p(te,"preloadWasm");var F="0.25.0";async function re(e={}){await $();let t=e.indexURL||await J();t=x(t),t.endsWith("/")||(t+="/"),e.indexURL=t;let a={fullStdLib:!1,jsglobals:globalThis,stdin:globalThis.prompt?globalThis.prompt:void 0,lockFileURL:t+"pyodide-lock.json",args:[],_node_mounts:[],env:{},packageCacheDir:t,packages:[]},i=Object.assign(a,e);i.env.HOME||(i.env.HOME="/home/pyodide");let s=G();s.print=i.stdout,s.printErr=i.stderr,s.arguments=i.args;let r={config:i};s.API=r,r.lockFilePromise=V(i.lockFileURL),te(s,t),ee(s,i);let n=new Promise(o=>s.postRun=o);if(s.locateFile=o=>i.indexURL+o,typeof _createPyodideModule!="function"){let o=`${i.indexURL}pyodide.asm.js`;await k(o)}if(await _createPyodideModule(s),await n,s.exited)throw s.exited.toThrow;if(e.pyproxyToStringRepr&&r.setPyProxyToStringMethod(!0),r.version!==F)throw new Error(`Pyodide version does not match: '${F}' <==> '${r.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);s.locateFile=o=>{throw new Error("Didn't expect to load any more file_packager files!")};let c=r.finalizeBootstrap();if(c.version.includes("dev")||r.setCdnUrl(`https://cdn.jsdelivr.net/pyodide/v${c.version}/full/`),await r.packageIndexReady,r._pyodide._importhook.register_module_not_found_hook(r._import_name_to_package_name,r.lockfile_unvendored_stdlibs_and_test),r.lockfile_info.version!==F)throw new Error("Lock file version doesn't match Pyodide version");return r.package_loader.init_loaded_packages(),i.fullStdLib&&await c.loadPackage(r.lockfile_unvendored_stdlibs),r.initializeStreams(i.stdin,i.stdout,i.stderr),c}p(re,"loadPyodide");const b=await re({indexURL:"../pyodide"});await b.loadPackage("pandas");await b.loadPackage("numpy");try{await b.runPythonAsync("import pandas as pd")}catch(e){console.log(e)}postMessage("ready");onmessage=async e=>{try{postMessage(String(await b.runPythonAsync(e.data)||"")),/^(?!.*#.*df_output).*df_output/gm.test(e.data)&&postMessage("export"+String(await b.runPythonAsync("df_output.to_csv()")))}catch(t){postMessage(`Error: ${t.type}`)}};