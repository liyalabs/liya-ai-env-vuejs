(function(Ge,_){typeof exports=="object"&&typeof module<"u"?_(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],_):(Ge=typeof globalThis<"u"?globalThis:Ge||self,_(Ge.LiyaAiEnvVuejs={},Ge.Vue))})(this,(function(Ge,_){"use strict";var Wx=Object.defineProperty;var jx=(Ge,_,Kn)=>_ in Ge?Wx(Ge,_,{enumerable:!0,configurable:!0,writable:!0,value:Kn}):Ge[_]=Kn;var Ya=(Ge,_,Kn)=>jx(Ge,typeof _!="symbol"?_+"":_,Kn);function Kn(s,e){return function(){return s.apply(e,arguments)}}const{toString:Bd}=Object.prototype,{getPrototypeOf:ao}=Object,{iterator:Ks,toStringTag:Ka}=Symbol,Js=(s=>e=>{const t=Bd.call(e);return s[t]||(s[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),sn=s=>(s=s.toLowerCase(),e=>Js(e)===s),Zs=s=>e=>typeof e===s,{isArray:Ri}=Array,Ci=Zs("undefined");function _s(s){return s!==null&&!Ci(s)&&s.constructor!==null&&!Ci(s.constructor)&&kt(s.constructor.isBuffer)&&s.constructor.isBuffer(s)}const Ja=sn("ArrayBuffer");function Vd(s){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(s):e=s&&s.buffer&&Ja(s.buffer),e}const kd=Zs("string"),kt=Zs("function"),Za=Zs("number"),vs=s=>s!==null&&typeof s=="object",zd=s=>s===!0||s===!1,Qs=s=>{if(Js(s)!=="object")return!1;const e=ao(s);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Ka in s)&&!(Ks in s)},Hd=s=>{if(!vs(s)||_s(s))return!1;try{return Object.keys(s).length===0&&Object.getPrototypeOf(s)===Object.prototype}catch{return!1}},Gd=sn("Date"),Wd=sn("File"),jd=sn("Blob"),Xd=sn("FileList"),qd=s=>vs(s)&&kt(s.pipe),$d=s=>{let e;return s&&(typeof FormData=="function"&&s instanceof FormData||kt(s.append)&&((e=Js(s))==="formdata"||e==="object"&&kt(s.toString)&&s.toString()==="[object FormData]"))},Yd=sn("URLSearchParams"),[Kd,Jd,Zd,Qd]=["ReadableStream","Request","Response","Headers"].map(sn),eh=s=>s.trim?s.trim():s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ys(s,e,{allOwnKeys:t=!1}={}){if(s===null||typeof s>"u")return;let n,i;if(typeof s!="object"&&(s=[s]),Ri(s))for(n=0,i=s.length;n<i;n++)e.call(null,s[n],n,s);else{if(_s(s))return;const r=t?Object.getOwnPropertyNames(s):Object.keys(s),o=r.length;let a;for(n=0;n<o;n++)a=r[n],e.call(null,s[a],a,s)}}function Qa(s,e){if(_s(s))return null;e=e.toLowerCase();const t=Object.keys(s);let n=t.length,i;for(;n-- >0;)if(i=t[n],e===i.toLowerCase())return i;return null}const Jn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,el=s=>!Ci(s)&&s!==Jn;function lo(){const{caseless:s,skipUndefined:e}=el(this)&&this||{},t={},n=(i,r)=>{if(r==="__proto__"||r==="constructor"||r==="prototype")return;const o=s&&Qa(t,r)||r;Qs(t[o])&&Qs(i)?t[o]=lo(t[o],i):Qs(i)?t[o]=lo({},i):Ri(i)?t[o]=i.slice():(!e||!Ci(i))&&(t[o]=i)};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&ys(arguments[i],n);return t}const th=(s,e,t,{allOwnKeys:n}={})=>(ys(e,(i,r)=>{t&&kt(i)?Object.defineProperty(s,r,{value:Kn(i,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(s,r,{value:i,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:n}),s),nh=s=>(s.charCodeAt(0)===65279&&(s=s.slice(1)),s),ih=(s,e,t,n)=>{s.prototype=Object.create(e.prototype,n),Object.defineProperty(s.prototype,"constructor",{value:s,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(s,"super",{value:e.prototype}),t&&Object.assign(s.prototype,t)},sh=(s,e,t,n)=>{let i,r,o;const a={};if(e=e||{},s==null)return e;do{for(i=Object.getOwnPropertyNames(s),r=i.length;r-- >0;)o=i[r],(!n||n(o,s,e))&&!a[o]&&(e[o]=s[o],a[o]=!0);s=t!==!1&&ao(s)}while(s&&(!t||t(s,e))&&s!==Object.prototype);return e},rh=(s,e,t)=>{s=String(s),(t===void 0||t>s.length)&&(t=s.length),t-=e.length;const n=s.indexOf(e,t);return n!==-1&&n===t},oh=s=>{if(!s)return null;if(Ri(s))return s;let e=s.length;if(!Za(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=s[e];return t},ah=(s=>e=>s&&e instanceof s)(typeof Uint8Array<"u"&&ao(Uint8Array)),lh=(s,e)=>{const n=(s&&s[Ks]).call(s);let i;for(;(i=n.next())&&!i.done;){const r=i.value;e.call(s,r[0],r[1])}},ch=(s,e)=>{let t;const n=[];for(;(t=s.exec(e))!==null;)n.push(t);return n},uh=sn("HTMLFormElement"),dh=s=>s.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,n,i){return n.toUpperCase()+i}),tl=(({hasOwnProperty:s})=>(e,t)=>s.call(e,t))(Object.prototype),hh=sn("RegExp"),nl=(s,e)=>{const t=Object.getOwnPropertyDescriptors(s),n={};ys(t,(i,r)=>{let o;(o=e(i,r,s))!==!1&&(n[r]=o||i)}),Object.defineProperties(s,n)},fh=s=>{nl(s,(e,t)=>{if(kt(s)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const n=s[t];if(kt(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},ph=(s,e)=>{const t={},n=i=>{i.forEach(r=>{t[r]=!0})};return Ri(s)?n(s):n(String(s).split(e)),t},mh=()=>{},gh=(s,e)=>s!=null&&Number.isFinite(s=+s)?s:e;function _h(s){return!!(s&&kt(s.append)&&s[Ka]==="FormData"&&s[Ks])}const vh=s=>{const e=new Array(10),t=(n,i)=>{if(vs(n)){if(e.indexOf(n)>=0)return;if(_s(n))return n;if(!("toJSON"in n)){e[i]=n;const r=Ri(n)?[]:{};return ys(n,(o,a)=>{const l=t(o,i+1);!Ci(l)&&(r[a]=l)}),e[i]=void 0,r}}return n};return t(s,0)},yh=sn("AsyncFunction"),xh=s=>s&&(vs(s)||kt(s))&&kt(s.then)&&kt(s.catch),il=((s,e)=>s?setImmediate:e?((t,n)=>(Jn.addEventListener("message",({source:i,data:r})=>{i===Jn&&r===t&&n.length&&n.shift()()},!1),i=>{n.push(i),Jn.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",kt(Jn.postMessage)),Eh=typeof queueMicrotask<"u"?queueMicrotask.bind(Jn):typeof process<"u"&&process.nextTick||il,W={isArray:Ri,isArrayBuffer:Ja,isBuffer:_s,isFormData:$d,isArrayBufferView:Vd,isString:kd,isNumber:Za,isBoolean:zd,isObject:vs,isPlainObject:Qs,isEmptyObject:Hd,isReadableStream:Kd,isRequest:Jd,isResponse:Zd,isHeaders:Qd,isUndefined:Ci,isDate:Gd,isFile:Wd,isBlob:jd,isRegExp:hh,isFunction:kt,isStream:qd,isURLSearchParams:Yd,isTypedArray:ah,isFileList:Xd,forEach:ys,merge:lo,extend:th,trim:eh,stripBOM:nh,inherits:ih,toFlatObject:sh,kindOf:Js,kindOfTest:sn,endsWith:rh,toArray:oh,forEachEntry:lh,matchAll:ch,isHTMLForm:uh,hasOwnProperty:tl,hasOwnProp:tl,reduceDescriptors:nl,freezeMethods:fh,toObjectSet:ph,toCamelCase:dh,noop:mh,toFiniteNumber:gh,findKey:Qa,global:Jn,isContextDefined:el,isSpecCompliantForm:_h,toJSONObject:vh,isAsyncFn:yh,isThenable:xh,setImmediate:il,asap:Eh,isIterable:s=>s!=null&&kt(s[Ks])};let Le=class Od extends Error{static from(e,t,n,i,r,o){const a=new Od(e.message,t||e.code,n,i,r);return a.cause=e,a.name=e.name,o&&Object.assign(a,o),a}constructor(e,t,n,i,r){super(e),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r,this.status=r.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:W.toJSONObject(this.config),code:this.code,status:this.status}}};Le.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE",Le.ERR_BAD_OPTION="ERR_BAD_OPTION",Le.ECONNABORTED="ECONNABORTED",Le.ETIMEDOUT="ETIMEDOUT",Le.ERR_NETWORK="ERR_NETWORK",Le.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS",Le.ERR_DEPRECATED="ERR_DEPRECATED",Le.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE",Le.ERR_BAD_REQUEST="ERR_BAD_REQUEST",Le.ERR_CANCELED="ERR_CANCELED",Le.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT",Le.ERR_INVALID_URL="ERR_INVALID_URL";const Sh=null;function co(s){return W.isPlainObject(s)||W.isArray(s)}function sl(s){return W.endsWith(s,"[]")?s.slice(0,-2):s}function rl(s,e,t){return s?s.concat(e).map(function(i,r){return i=sl(i),!t&&r?"["+i+"]":i}).join(t?".":""):e}function Mh(s){return W.isArray(s)&&!s.some(co)}const Ah=W.toFlatObject(W,{},null,function(e){return/^is[A-Z]/.test(e)});function er(s,e,t){if(!W.isObject(s))throw new TypeError("target must be an object");e=e||new FormData,t=W.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,f){return!W.isUndefined(f[v])});const n=t.metaTokens,i=t.visitor||u,r=t.dots,o=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&W.isSpecCompliantForm(e);if(!W.isFunction(i))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(W.isDate(g))return g.toISOString();if(W.isBoolean(g))return g.toString();if(!l&&W.isBlob(g))throw new Le("Blob is not supported. Use a Buffer instead.");return W.isArrayBuffer(g)||W.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,v,f){let p=g;if(g&&!f&&typeof g=="object"){if(W.endsWith(v,"{}"))v=n?v:v.slice(0,-2),g=JSON.stringify(g);else if(W.isArray(g)&&Mh(g)||(W.isFileList(g)||W.endsWith(v,"[]"))&&(p=W.toArray(g)))return v=sl(v),p.forEach(function(x,w){!(W.isUndefined(x)||x===null)&&e.append(o===!0?rl([v],w,r):o===null?v:v+"[]",c(x))}),!1}return co(g)?!0:(e.append(rl(f,v,r),c(g)),!1)}const d=[],h=Object.assign(Ah,{defaultVisitor:u,convertValue:c,isVisitable:co});function m(g,v){if(!W.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(g),W.forEach(g,function(p,E){(!(W.isUndefined(p)||p===null)&&i.call(e,p,W.isString(E)?E.trim():E,v,h))===!0&&m(p,v?v.concat(E):[E])}),d.pop()}}if(!W.isObject(s))throw new TypeError("data must be an object");return m(s),e}function ol(s){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g,function(n){return e[n]})}function uo(s,e){this._pairs=[],s&&er(s,this,e)}const al=uo.prototype;al.append=function(e,t){this._pairs.push([e,t])},al.toString=function(e){const t=e?function(n){return e.call(this,n,ol)}:ol;return this._pairs.map(function(i){return t(i[0])+"="+t(i[1])},"").join("&")};function Th(s){return encodeURIComponent(s).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function ll(s,e,t){if(!e)return s;const n=t&&t.encode||Th,i=W.isFunction(t)?{serialize:t}:t,r=i&&i.serialize;let o;if(r?o=r(e,i):o=W.isURLSearchParams(e)?e.toString():new uo(e,i).toString(n),o){const a=s.indexOf("#");a!==-1&&(s=s.slice(0,a)),s+=(s.indexOf("?")===-1?"?":"&")+o}return s}class cl{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){W.forEach(this.handlers,function(n){n!==null&&e(n)})}}const ho={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},bh={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<"u"?URLSearchParams:uo,FormData:typeof FormData<"u"?FormData:null,Blob:typeof Blob<"u"?Blob:null},protocols:["http","https","file","blob","url","data"]},fo=typeof window<"u"&&typeof document<"u",po=typeof navigator=="object"&&navigator||void 0,wh=fo&&(!po||["ReactNative","NativeScript","NS"].indexOf(po.product)<0),Rh=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Ch=fo&&window.location.href||"http://localhost",Ct={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:fo,hasStandardBrowserEnv:wh,hasStandardBrowserWebWorkerEnv:Rh,navigator:po,origin:Ch},Symbol.toStringTag,{value:"Module"})),...bh};function Lh(s,e){return er(s,new Ct.classes.URLSearchParams,{visitor:function(t,n,i,r){return Ct.isNode&&W.isBuffer(t)?(this.append(n,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...e})}function Ph(s){return W.matchAll(/\w+|\[(\w*)]/g,s).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Ih(s){const e={},t=Object.keys(s);let n;const i=t.length;let r;for(n=0;n<i;n++)r=t[n],e[r]=s[r];return e}function ul(s){function e(t,n,i,r){let o=t[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=t.length;return o=!o&&W.isArray(i)?i.length:o,l?(W.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!a):((!i[o]||!W.isObject(i[o]))&&(i[o]=[]),e(t,n,i[o],r)&&W.isArray(i[o])&&(i[o]=Ih(i[o])),!a)}if(W.isFormData(s)&&W.isFunction(s.entries)){const t={};return W.forEachEntry(s,(n,i)=>{e(Ph(n),i,t,0)}),t}return null}function Dh(s,e,t){if(W.isString(s))try{return(e||JSON.parse)(s),W.trim(s)}catch(n){if(n.name!=="SyntaxError")throw n}return(t||JSON.stringify)(s)}const xs={transitional:ho,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,r=W.isObject(e);if(r&&W.isHTMLForm(e)&&(e=new FormData(e)),W.isFormData(e))return i?JSON.stringify(ul(e)):e;if(W.isArrayBuffer(e)||W.isBuffer(e)||W.isStream(e)||W.isFile(e)||W.isBlob(e)||W.isReadableStream(e))return e;if(W.isArrayBufferView(e))return e.buffer;if(W.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Lh(e,this.formSerializer).toString();if((a=W.isFileList(e))||n.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return er(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return r||i?(t.setContentType("application/json",!1),Dh(e)):e}],transformResponse:[function(e){const t=this.transitional||xs.transitional,n=t&&t.forcedJSONParsing,i=this.responseType==="json";if(W.isResponse(e)||W.isReadableStream(e))return e;if(e&&W.isString(e)&&(n&&!this.responseType||i)){const o=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e,this.parseReviver)}catch(a){if(o)throw a.name==="SyntaxError"?Le.from(a,Le.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ct.classes.FormData,Blob:Ct.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};W.forEach(["delete","get","head","post","put","patch"],s=>{xs.headers[s]={}});const Nh=W.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Uh=s=>{const e={};let t,n,i;return s&&s.split(`
`).forEach(function(o){i=o.indexOf(":"),t=o.substring(0,i).trim().toLowerCase(),n=o.substring(i+1).trim(),!(!t||e[t]&&Nh[t])&&(t==="set-cookie"?e[t]?e[t].push(n):e[t]=[n]:e[t]=e[t]?e[t]+", "+n:n)}),e},dl=Symbol("internals");function Es(s){return s&&String(s).trim().toLowerCase()}function tr(s){return s===!1||s==null?s:W.isArray(s)?s.map(tr):String(s)}function Oh(s){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=t.exec(s);)e[n[1]]=n[2];return e}const Fh=s=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());function mo(s,e,t,n,i){if(W.isFunction(n))return n.call(this,e,t);if(i&&(e=t),!!W.isString(e)){if(W.isString(n))return e.indexOf(n)!==-1;if(W.isRegExp(n))return n.test(e)}}function Bh(s){return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function Vh(s,e){const t=W.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(s,n+t,{value:function(i,r,o){return this[n].call(this,e,i,r,o)},configurable:!0})})}let zt=class{constructor(e){e&&this.set(e)}set(e,t,n){const i=this;function r(a,l,c){const u=Es(l);if(!u)throw new Error("header name must be a non-empty string");const d=W.findKey(i,u);(!d||i[d]===void 0||c===!0||c===void 0&&i[d]!==!1)&&(i[d||l]=tr(a))}const o=(a,l)=>W.forEach(a,(c,u)=>r(c,u,l));if(W.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(W.isString(e)&&(e=e.trim())&&!Fh(e))o(Uh(e),t);else if(W.isObject(e)&&W.isIterable(e)){let a={},l,c;for(const u of e){if(!W.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[c=u[0]]=(l=a[c])?W.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}o(a,t)}else e!=null&&r(t,e,n);return this}get(e,t){if(e=Es(e),e){const n=W.findKey(this,e);if(n){const i=this[n];if(!t)return i;if(t===!0)return Oh(i);if(W.isFunction(t))return t.call(this,i,n);if(W.isRegExp(t))return t.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Es(e),e){const n=W.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||mo(this,this[n],n,t)))}return!1}delete(e,t){const n=this;let i=!1;function r(o){if(o=Es(o),o){const a=W.findKey(n,o);a&&(!t||mo(n,n[a],a,t))&&(delete n[a],i=!0)}}return W.isArray(e)?e.forEach(r):r(e),i}clear(e){const t=Object.keys(this);let n=t.length,i=!1;for(;n--;){const r=t[n];(!e||mo(this,this[r],r,e,!0))&&(delete this[r],i=!0)}return i}normalize(e){const t=this,n={};return W.forEach(this,(i,r)=>{const o=W.findKey(n,r);if(o){t[o]=tr(i),delete t[r];return}const a=e?Bh(r):String(r).trim();a!==r&&delete t[r],t[a]=tr(i),n[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return W.forEach(this,(n,i)=>{n!=null&&n!==!1&&(t[i]=e&&W.isArray(n)?n.join(", "):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach(i=>n.set(i)),n}static accessor(e){const n=(this[dl]=this[dl]={accessors:{}}).accessors,i=this.prototype;function r(o){const a=Es(o);n[a]||(Vh(i,o),n[a]=!0)}return W.isArray(e)?e.forEach(r):r(e),this}};zt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),W.reduceDescriptors(zt.prototype,({value:s},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>s,set(n){this[t]=n}}}),W.freezeMethods(zt);function go(s,e){const t=this||xs,n=e||t,i=zt.from(n.headers);let r=n.data;return W.forEach(s,function(a){r=a.call(t,r,i.normalize(),e?e.status:void 0)}),i.normalize(),r}function hl(s){return!!(s&&s.__CANCEL__)}let Ss=class extends Le{constructor(e,t,n){super(e??"canceled",Le.ERR_CANCELED,t,n),this.name="CanceledError",this.__CANCEL__=!0}};function fl(s,e,t){const n=t.config.validateStatus;!t.status||!n||n(t.status)?s(t):e(new Le("Request failed with status code "+t.status,[Le.ERR_BAD_REQUEST,Le.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function kh(s){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(s);return e&&e[1]||""}function zh(s,e){s=s||10;const t=new Array(s),n=new Array(s);let i=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=n[r];o||(o=c),t[i]=l,n[i]=c;let d=r,h=0;for(;d!==i;)h+=t[d++],d=d%s;if(i=(i+1)%s,i===r&&(r=(r+1)%s),c-o<e)return;const m=u&&c-u;return m?Math.round(h*1e3/m):void 0}}function Hh(s,e){let t=0,n=1e3/e,i,r;const o=(c,u=Date.now())=>{t=u,i=null,r&&(clearTimeout(r),r=null),s(...c)};return[(...c)=>{const u=Date.now(),d=u-t;d>=n?o(c,u):(i=c,r||(r=setTimeout(()=>{r=null,o(i)},n-d)))},()=>i&&o(i)]}const nr=(s,e,t=3)=>{let n=0;const i=zh(50,250);return Hh(r=>{const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=o-n,c=i(l),u=o<=a;n=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};s(d)},t)},pl=(s,e)=>{const t=s!=null;return[n=>e[0]({lengthComputable:t,total:s,loaded:n}),e[1]]},ml=s=>(...e)=>W.asap(()=>s(...e)),Gh=Ct.hasStandardBrowserEnv?((s,e)=>t=>(t=new URL(t,Ct.origin),s.protocol===t.protocol&&s.host===t.host&&(e||s.port===t.port)))(new URL(Ct.origin),Ct.navigator&&/(msie|trident)/i.test(Ct.navigator.userAgent)):()=>!0,Wh=Ct.hasStandardBrowserEnv?{write(s,e,t,n,i,r,o){if(typeof document>"u")return;const a=[`${s}=${encodeURIComponent(e)}`];W.isNumber(t)&&a.push(`expires=${new Date(t).toUTCString()}`),W.isString(n)&&a.push(`path=${n}`),W.isString(i)&&a.push(`domain=${i}`),r===!0&&a.push("secure"),W.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(s){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+s+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(s){this.write(s,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function jh(s){return typeof s!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(s)}function Xh(s,e){return e?s.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):s}function gl(s,e,t){let n=!jh(e);return s&&(n||t==!1)?Xh(s,e):e}const _l=s=>s instanceof zt?{...s}:s;function Zn(s,e){e=e||{};const t={};function n(c,u,d,h){return W.isPlainObject(c)&&W.isPlainObject(u)?W.merge.call({caseless:h},c,u):W.isPlainObject(u)?W.merge({},u):W.isArray(u)?u.slice():u}function i(c,u,d,h){if(W.isUndefined(u)){if(!W.isUndefined(c))return n(void 0,c,d,h)}else return n(c,u,d,h)}function r(c,u){if(!W.isUndefined(u))return n(void 0,u)}function o(c,u){if(W.isUndefined(u)){if(!W.isUndefined(c))return n(void 0,c)}else return n(void 0,u)}function a(c,u,d){if(d in e)return n(c,u);if(d in s)return n(void 0,c)}const l={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,d)=>i(_l(c),_l(u),d,!0)};return W.forEach(Object.keys({...s,...e}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const d=W.hasOwnProp(l,u)?l[u]:i,h=d(s[u],e[u],u);W.isUndefined(h)&&d!==a||(t[u]=h)}),t}const vl=s=>{const e=Zn({},s);let{data:t,withXSRFToken:n,xsrfHeaderName:i,xsrfCookieName:r,headers:o,auth:a}=e;if(e.headers=o=zt.from(o),e.url=ll(gl(e.baseURL,e.url,e.allowAbsoluteUrls),s.params,s.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),W.isFormData(t)){if(Ct.hasStandardBrowserEnv||Ct.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(W.isFunction(t.getHeaders)){const l=t.getHeaders(),c=["content-type","content-length"];Object.entries(l).forEach(([u,d])=>{c.includes(u.toLowerCase())&&o.set(u,d)})}}if(Ct.hasStandardBrowserEnv&&(n&&W.isFunction(n)&&(n=n(e)),n||n!==!1&&Gh(e.url))){const l=i&&r&&Wh.read(r);l&&o.set(i,l)}return e},qh=typeof XMLHttpRequest<"u"&&function(s){return new Promise(function(t,n){const i=vl(s);let r=i.data;const o=zt.from(i.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=i,u,d,h,m,g;function v(){m&&m(),g&&g(),i.cancelToken&&i.cancelToken.unsubscribe(u),i.signal&&i.signal.removeEventListener("abort",u)}let f=new XMLHttpRequest;f.open(i.method.toUpperCase(),i.url,!0),f.timeout=i.timeout;function p(){if(!f)return;const x=zt.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),L={data:!a||a==="text"||a==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:x,config:s,request:f};fl(function(C){t(C),v()},function(C){n(C),v()},L),f=null}"onloadend"in f?f.onloadend=p:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(p)},f.onabort=function(){f&&(n(new Le("Request aborted",Le.ECONNABORTED,s,f)),f=null)},f.onerror=function(w){const L=w&&w.message?w.message:"Network Error",R=new Le(L,Le.ERR_NETWORK,s,f);R.event=w||null,n(R),f=null},f.ontimeout=function(){let w=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const L=i.transitional||ho;i.timeoutErrorMessage&&(w=i.timeoutErrorMessage),n(new Le(w,L.clarifyTimeoutError?Le.ETIMEDOUT:Le.ECONNABORTED,s,f)),f=null},r===void 0&&o.setContentType(null),"setRequestHeader"in f&&W.forEach(o.toJSON(),function(w,L){f.setRequestHeader(L,w)}),W.isUndefined(i.withCredentials)||(f.withCredentials=!!i.withCredentials),a&&a!=="json"&&(f.responseType=i.responseType),c&&([h,g]=nr(c,!0),f.addEventListener("progress",h)),l&&f.upload&&([d,m]=nr(l),f.upload.addEventListener("progress",d),f.upload.addEventListener("loadend",m)),(i.cancelToken||i.signal)&&(u=x=>{f&&(n(!x||x.type?new Ss(null,s,f):x),f.abort(),f=null)},i.cancelToken&&i.cancelToken.subscribe(u),i.signal&&(i.signal.aborted?u():i.signal.addEventListener("abort",u)));const E=kh(i.url);if(E&&Ct.protocols.indexOf(E)===-1){n(new Le("Unsupported protocol "+E+":",Le.ERR_BAD_REQUEST,s));return}f.send(r||null)})},$h=(s,e)=>{const{length:t}=s=s?s.filter(Boolean):[];if(e||t){let n=new AbortController,i;const r=function(c){if(!i){i=!0,a();const u=c instanceof Error?c:this.reason;n.abort(u instanceof Le?u:new Ss(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,r(new Le(`timeout of ${e}ms exceeded`,Le.ETIMEDOUT))},e);const a=()=>{s&&(o&&clearTimeout(o),o=null,s.forEach(c=>{c.unsubscribe?c.unsubscribe(r):c.removeEventListener("abort",r)}),s=null)};s.forEach(c=>c.addEventListener("abort",r));const{signal:l}=n;return l.unsubscribe=()=>W.asap(a),l}},Yh=function*(s,e){let t=s.byteLength;if(t<e){yield s;return}let n=0,i;for(;n<t;)i=n+e,yield s.slice(n,i),n=i},Kh=async function*(s,e){for await(const t of Jh(s))yield*Yh(t,e)},Jh=async function*(s){if(s[Symbol.asyncIterator]){yield*s;return}const e=s.getReader();try{for(;;){const{done:t,value:n}=await e.read();if(t)break;yield n}}finally{await e.cancel()}},yl=(s,e,t,n)=>{const i=Kh(s,e);let r=0,o,a=l=>{o||(o=!0,n&&n(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await i.next();if(c){a(),l.close();return}let d=u.byteLength;if(t){let h=r+=d;t(h)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),i.return()}},{highWaterMark:2})},xl=64*1024,{isFunction:ir}=W,Zh=(({Request:s,Response:e})=>({Request:s,Response:e}))(W.global),{ReadableStream:El,TextEncoder:Sl}=W.global,Ml=(s,...e)=>{try{return!!s(...e)}catch{return!1}},Qh=s=>{s=W.merge.call({skipUndefined:!0},Zh,s);const{fetch:e,Request:t,Response:n}=s,i=e?ir(e):typeof fetch=="function",r=ir(t),o=ir(n);if(!i)return!1;const a=i&&ir(El),l=i&&(typeof Sl=="function"?(g=>v=>g.encode(v))(new Sl):async g=>new Uint8Array(await new t(g).arrayBuffer())),c=r&&a&&Ml(()=>{let g=!1;const v=new t(Ct.origin,{body:new El,method:"POST",get duplex(){return g=!0,"half"}}).headers.has("Content-Type");return g&&!v}),u=o&&a&&Ml(()=>W.isReadableStream(new n("").body)),d={stream:u&&(g=>g.body)};i&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!d[g]&&(d[g]=(v,f)=>{let p=v&&v[g];if(p)return p.call(v);throw new Le(`Response type '${g}' is not supported`,Le.ERR_NOT_SUPPORT,f)})});const h=async g=>{if(g==null)return 0;if(W.isBlob(g))return g.size;if(W.isSpecCompliantForm(g))return(await new t(Ct.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(W.isArrayBufferView(g)||W.isArrayBuffer(g))return g.byteLength;if(W.isURLSearchParams(g)&&(g=g+""),W.isString(g))return(await l(g)).byteLength},m=async(g,v)=>{const f=W.toFiniteNumber(g.getContentLength());return f??h(v)};return async g=>{let{url:v,method:f,data:p,signal:E,cancelToken:x,timeout:w,onDownloadProgress:L,onUploadProgress:R,responseType:C,headers:j,withCredentials:S="same-origin",fetchOptions:b}=vl(g),H=e||fetch;C=C?(C+"").toLowerCase():"text";let Z=$h([E,x&&x.toAbortSignal()],w),ae=null;const P=Z&&Z.unsubscribe&&(()=>{Z.unsubscribe()});let D;try{if(R&&c&&f!=="get"&&f!=="head"&&(D=await m(j,p))!==0){let G=new t(v,{method:"POST",body:p,duplex:"half"}),X;if(W.isFormData(p)&&(X=G.headers.get("content-type"))&&j.setContentType(X),G.body){const[N,K]=pl(D,nr(ml(R)));p=yl(G.body,xl,N,K)}}W.isString(S)||(S=S?"include":"omit");const U=r&&"credentials"in t.prototype,te={...b,signal:Z,method:f.toUpperCase(),headers:j.normalize().toJSON(),body:p,duplex:"half",credentials:U?S:void 0};ae=r&&new t(v,te);let F=await(r?H(ae,b):H(v,te));const V=u&&(C==="stream"||C==="response");if(u&&(L||V&&P)){const G={};["status","statusText","headers"].forEach(oe=>{G[oe]=F[oe]});const X=W.toFiniteNumber(F.headers.get("content-length")),[N,K]=L&&pl(X,nr(ml(L),!0))||[];F=new n(yl(F.body,xl,N,()=>{K&&K(),P&&P()}),G)}C=C||"text";let ee=await d[W.findKey(d,C)||"text"](F,g);return!V&&P&&P(),await new Promise((G,X)=>{fl(G,X,{data:ee,headers:zt.from(F.headers),status:F.status,statusText:F.statusText,config:g,request:ae})})}catch(U){throw P&&P(),U&&U.name==="TypeError"&&/Load failed|fetch/i.test(U.message)?Object.assign(new Le("Network Error",Le.ERR_NETWORK,g,ae,U&&U.response),{cause:U.cause||U}):Le.from(U,U&&U.code,g,ae,U&&U.response)}}},ef=new Map,Al=s=>{let e=s&&s.env||{};const{fetch:t,Request:n,Response:i}=e,r=[n,i,t];let o=r.length,a=o,l,c,u=ef;for(;a--;)l=r[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:Qh(e)),u=c;return c};Al();const _o={http:Sh,xhr:qh,fetch:{get:Al}};W.forEach(_o,(s,e)=>{if(s){try{Object.defineProperty(s,"name",{value:e})}catch{}Object.defineProperty(s,"adapterName",{value:e})}});const Tl=s=>`- ${s}`,tf=s=>W.isFunction(s)||s===null||s===!1;function nf(s,e){s=W.isArray(s)?s:[s];const{length:t}=s;let n,i;const r={};for(let o=0;o<t;o++){n=s[o];let a;if(i=n,!tf(n)&&(i=_o[(a=String(n)).toLowerCase()],i===void 0))throw new Le(`Unknown adapter '${a}'`);if(i&&(W.isFunction(i)||(i=i.get(e))))break;r[a||"#"+o]=i}if(!i){const o=Object.entries(r).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=t?o.length>1?`since :
`+o.map(Tl).join(`
`):" "+Tl(o[0]):"as no adapter specified";throw new Le("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return i}const bl={getAdapter:nf,adapters:_o};function vo(s){if(s.cancelToken&&s.cancelToken.throwIfRequested(),s.signal&&s.signal.aborted)throw new Ss(null,s)}function wl(s){return vo(s),s.headers=zt.from(s.headers),s.data=go.call(s,s.transformRequest),["post","put","patch"].indexOf(s.method)!==-1&&s.headers.setContentType("application/x-www-form-urlencoded",!1),bl.getAdapter(s.adapter||xs.adapter,s)(s).then(function(n){return vo(s),n.data=go.call(s,s.transformResponse,n),n.headers=zt.from(n.headers),n},function(n){return hl(n)||(vo(s),n&&n.response&&(n.response.data=go.call(s,s.transformResponse,n.response),n.response.headers=zt.from(n.response.headers))),Promise.reject(n)})}const Rl="1.13.5",sr={};["object","boolean","number","function","string","symbol"].forEach((s,e)=>{sr[s]=function(n){return typeof n===s||"a"+(e<1?"n ":" ")+s}});const Cl={};sr.transitional=function(e,t,n){function i(r,o){return"[Axios v"+Rl+"] Transitional option '"+r+"'"+o+(n?". "+n:"")}return(r,o,a)=>{if(e===!1)throw new Le(i(o," has been removed"+(t?" in "+t:"")),Le.ERR_DEPRECATED);return t&&!Cl[o]&&(Cl[o]=!0,console.warn(i(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(r,o,a):!0}},sr.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function sf(s,e,t){if(typeof s!="object")throw new Le("options must be an object",Le.ERR_BAD_OPTION_VALUE);const n=Object.keys(s);let i=n.length;for(;i-- >0;){const r=n[i],o=e[r];if(o){const a=s[r],l=a===void 0||o(a,r,s);if(l!==!0)throw new Le("option "+r+" must be "+l,Le.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Le("Unknown option "+r,Le.ERR_BAD_OPTION)}}const rr={assertOptions:sf,validators:sr},Yt=rr.validators;let Qn=class{constructor(e){this.defaults=e||{},this.interceptors={request:new cl,response:new cl}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const r=i.stack?i.stack.replace(/^.+\n/,""):"";try{n.stack?r&&!String(n.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+r):n.stack=r}catch{}}throw n}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Zn(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:r}=t;n!==void 0&&rr.assertOptions(n,{silentJSONParsing:Yt.transitional(Yt.boolean),forcedJSONParsing:Yt.transitional(Yt.boolean),clarifyTimeoutError:Yt.transitional(Yt.boolean),legacyInterceptorReqResOrdering:Yt.transitional(Yt.boolean)},!1),i!=null&&(W.isFunction(i)?t.paramsSerializer={serialize:i}:rr.assertOptions(i,{encode:Yt.function,serialize:Yt.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),rr.assertOptions(t,{baseUrl:Yt.spelling("baseURL"),withXsrfToken:Yt.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=r&&W.merge(r.common,r[t.method]);r&&W.forEach(["delete","get","head","post","put","patch","common"],g=>{delete r[g]}),t.headers=zt.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(v){if(typeof v.runWhen=="function"&&v.runWhen(t)===!1)return;l=l&&v.synchronous;const f=t.transitional||ho;f&&f.legacyInterceptorReqResOrdering?a.unshift(v.fulfilled,v.rejected):a.push(v.fulfilled,v.rejected)});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,d=0,h;if(!l){const g=[wl.bind(this),void 0];for(g.unshift(...a),g.push(...c),h=g.length,u=Promise.resolve(t);d<h;)u=u.then(g[d++],g[d++]);return u}h=a.length;let m=t;for(;d<h;){const g=a[d++],v=a[d++];try{m=g(m)}catch(f){v.call(this,f);break}}try{u=wl.call(this,m)}catch(g){return Promise.reject(g)}for(d=0,h=c.length;d<h;)u=u.then(c[d++],c[d++]);return u}getUri(e){e=Zn(this.defaults,e);const t=gl(e.baseURL,e.url,e.allowAbsoluteUrls);return ll(t,e.params,e.paramsSerializer)}};W.forEach(["delete","get","head","options"],function(e){Qn.prototype[e]=function(t,n){return this.request(Zn(n||{},{method:e,url:t,data:(n||{}).data}))}}),W.forEach(["post","put","patch"],function(e){function t(n){return function(r,o,a){return this.request(Zn(a||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}Qn.prototype[e]=t(),Qn.prototype[e+"Form"]=t(!0)});let rf=class Fd{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(r){t=r});const n=this;this.promise.then(i=>{if(!n._listeners)return;let r=n._listeners.length;for(;r-- >0;)n._listeners[r](i);n._listeners=null}),this.promise.then=i=>{let r;const o=new Promise(a=>{n.subscribe(a),r=a}).then(i);return o.cancel=function(){n.unsubscribe(r)},o},e(function(r,o,a){n.reason||(n.reason=new Ss(r,o,a),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=n=>{e.abort(n)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Fd(function(i){e=i}),cancel:e}}};function of(s){return function(t){return s.apply(null,t)}}function af(s){return W.isObject(s)&&s.isAxiosError===!0}const yo={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(yo).forEach(([s,e])=>{yo[e]=s});function Ll(s){const e=new Qn(s),t=Kn(Qn.prototype.request,e);return W.extend(t,Qn.prototype,e,{allOwnKeys:!0}),W.extend(t,e,null,{allOwnKeys:!0}),t.create=function(i){return Ll(Zn(s,i))},t}const pt=Ll(xs);pt.Axios=Qn,pt.CanceledError=Ss,pt.CancelToken=rf,pt.isCancel=hl,pt.VERSION=Rl,pt.toFormData=er,pt.AxiosError=Le,pt.Cancel=pt.CanceledError,pt.all=function(e){return Promise.all(e)},pt.spread=of,pt.isAxiosError=af,pt.mergeConfig=Zn,pt.AxiosHeaders=zt,pt.formToJSON=s=>ul(W.isHTMLForm(s)?new FormData(s):s),pt.getAdapter=bl.getAdapter,pt.HttpStatusCode=yo,pt.default=pt;const{Axios:Zx,AxiosError:Qx,CanceledError:eE,isCancel:tE,CancelToken:nE,VERSION:iE,all:sE,Cancel:rE,isAxiosError:oE,spread:aE,toFormData:lE,AxiosHeaders:cE,HttpStatusCode:uE,formToJSON:dE,getAdapter:hE,mergeConfig:fE}=pt;let Ms=null,or=null;function Pl(s){or=s,Ms=pt.create({baseURL:s.apiUrl,timeout:6e4,headers:{"Content-Type":"application/json","X-API-Key":s.apiKey}}),Ms.interceptors.response.use(e=>e,e=>Promise.reject(e))}function Il(){if(!Ms)throw new Error("[LiyaAiEnvVuejs] API client not initialized. Call liyaAiEnvVuejsInitializeClient first.");return Ms}function ei(){if(!or)throw new Error("[LiyaAiEnvVuejs] Config not initialized. Call liyaAiEnvVuejsInitializeClient first.");return or}function lf(){return Ms!==null&&or!==null}async function ti(s,e,t){var i,r,o,a;const n=Il();try{return(await n.request({method:s,url:e,data:t})).data}catch(l){return pt.isAxiosError(l)?{status:"error",message:((r=(i=l.response)==null?void 0:i.data)==null?void 0:r.message)||l.message,code:((a=(o=l.response)==null?void 0:o.data)==null?void 0:a.code)||void 0}:{status:"error",message:"An unexpected error occurred"}}}class Dl extends Error{constructor(t,n){super(t);Ya(this,"code");this.code=n,this.name="LiyaAiEnvVuejsApiError"}}async function Nl(s,e){const n={assistant_id:ei().assistantId,message:s,session_id:e},i=await ti("POST","/api/v1/external/chat/",n);if(i.status==="success"&&i.data)return i.data;if(i.code)throw new Dl(i.message||"API error",i.code);return null}async function Ul(s,e){const t={text:s,voice:(e==null?void 0:e.voice)||"nova",speed:(e==null?void 0:e.speed)||1,include_audio:(e==null?void 0:e.include_audio)??!0,include_gestures:(e==null?void 0:e.include_gestures)??!0},n=await ti("POST","/api/v1/external/avatar/speech/",t);return n.status==="success"&&n.data?n.data:null}async function cf(s){const e=await ti("GET",`/api/v1/external/sessions/${s}/messages/`);return e.status==="success"&&e.data?e.data.messages:[]}class xo extends Error{constructor(t,n){super(t);Ya(this,"code");this.code=n,this.name="LiyaAiEnvVuejsAvatarApiError"}}async function Ol(s){const t=ei().assistantId,n=t?`?assistant_id=${t}`:"",i=await ti("GET",`/api/v1/external/avatar/model/${n}`);if(i.status==="success"&&i.data)return i.data;throw new xo(i.message||"Failed to get avatar model","AVATAR_MODEL_ERROR")}async function Fl(s){const t=ei().assistantId,n=t?`?assistant_id=${t}`:"",i=await ti("GET",`/api/v1/external/scene/background/${n}`);if(i.status==="success"&&i.data)return i.data;throw new xo(i.message||"Failed to get scene background","SCENE_BACKGROUND_ERROR")}async function Bl(s){const e=ei(),t=s||e.assistantId,n=t?`?assistant_id=${t}`:"",i=await ti("GET",`/api/v1/external/presentations/${n}`);return i.status==="success"&&i.data?i.data:[]}async function Vl(){const s=await ti("GET","/api/v1/external/user/access/");if(s.status==="success"&&s.data)return s.data;throw new xo(s.message||"Failed to check user access","USER_ACCESS_ERROR")}const kl={tr:{status:{ready:"Hazır",listening:"Dinliyorum...",preparing:"Hazırlanıyor...",speaking:"Konuşuyor...",online:"Çevrimiçi"},preparingMessages:["Hazırlanıyor...","Düşünüyorum... 🤔","Biraz daha bekleyin...","Cevabı hazırlıyorum... ✍️","Neredeyse bitti... ⏳","Az kaldı, sabırlı olun... 😊","Detaylı bir cevap geliyor...","Hâlâ düşünüyorum... 🧠","Bu güzel bir soru, biraz zaman alıyor...","Son rötuşlar... ✨"],chat:{placeholder:"Mesajınızı yazın...",premiumRequired:"Premium abonelik gerekli",userRole:"Sen",emptyWelcome:"Merhaba! Size nasıl yardımcı olabilirim?"},welcomeSuggestions:["Kendini tanıt","Konu hakkında özet bilgi ver","Derse başla"],voice:{startRecording:"Konuşmaya başla",stopRecording:"Dinlemeyi durdur",listening:"Dinliyorum...",thinking:"Düşünüyorum...",pressToSpeak:"Konuşmak için mikrofona basın",notSupported:"Ses tanıma bu tarayıcıda desteklenmiyor"},controls:{close:"Kapat",back:"Geri",cancel:"İptal",replay:"Tekrar Oynat",pressAndSpeak:"Bas ve Konuş"},patienceTooltips:["Sakin ol, çay demle ☕","Acele işe şeytan karışır! 😈","Biraz sabır, güzel şeyler geliyor... ✨","Yavaş yavaş, torba dolacak 🐢","Beklemek de bir sanattır 🎨","Nefes al, ver... 🧘","Roma bir günde kurulmadı! 🏛️","Sabır acıdır, meyvesi tatlıdır 🍎"],premium:{title:"Premium Özellik",upgradePremium:"Bu özelliği kullanmak için Premium veya Premium Plus abonelik gereklidir.",upgradePremiumPlus:"Bu özelliği kullanmak için Premium Plus abonelik gereklidir.",viewPlans:"Planları İncele"},errors:{problemOccurred:"Bir sorun oluştu",tryAgainLater:"En kısa zamanda çözülecektir. Lütfen daha sonra tekrar deneyin.",connectionError:"Bağlantı hatası oluştu",sendError:"Mesaj gönderilemedi"},branding:{environmentTitle:"Liya AI Environment"}},en:{status:{ready:"Ready",listening:"Listening...",preparing:"Preparing...",speaking:"Speaking...",online:"Online"},preparingMessages:["Preparing...","Thinking... 🤔","Hold on a moment...","Preparing the answer... ✍️","Almost done... ⏳","Just a bit more, please be patient... 😊","A detailed answer is coming...","Still thinking... 🧠","Great question, it takes a moment...","Final touches... ✨"],chat:{placeholder:"Type your message...",premiumRequired:"Premium subscription required",userRole:"You",emptyWelcome:"Hello! How can I help you?"},welcomeSuggestions:["Introduce yourself","Give a summary about the topic","Start the lesson"],voice:{startRecording:"Start speaking",stopRecording:"Stop listening",listening:"Listening...",thinking:"Thinking...",pressToSpeak:"Press the microphone to speak",notSupported:"Voice recognition is not supported in this browser"},controls:{close:"Close",back:"Back",cancel:"Cancel",replay:"Replay",pressAndSpeak:"Press & Speak"},patienceTooltips:["Easy there, tiger! 🐯","Patience, young padawan... ✨","Good things come to those who wait ⏳","Take a deep breath... 🧘","Rome wasn't built in a day! 🏛️","Slow and steady wins the race 🐢","Chill out, grab a coffee ☕","The best things in life are worth waiting for 🌟"],premium:{title:"Premium Feature",upgradePremium:"A Premium or Premium Plus subscription is required to use this feature.",upgradePremiumPlus:"A Premium Plus subscription is required to use this feature.",viewPlans:"View Plans"},errors:{problemOccurred:"A problem occurred",tryAgainLater:"It will be resolved as soon as possible. Please try again later.",connectionError:"Connection error occurred",sendError:"Failed to send message"},branding:{environmentTitle:"Liya AI Environment"}}};function As(s){return s==="tr"||s==="en"}function zl(){if(typeof window>"u"||typeof navigator>"u")return"tr";const e=(navigator.language||navigator.userLanguage||"").split("-")[0].toLowerCase();return As(e)?e:"tr"}const ni=_.ref("tr");function ar(){const s=_.computed(()=>ni.value),e=_.computed(()=>kl[ni.value]);function t(i){As(i)?ni.value=i:ni.value="tr"}function n(i){i&&As(i)?ni.value=i:i?ni.value="tr":ni.value=zl()}return{locale:_.readonly(s),t:e,setLocale:t,initLocale:n,liyaAiEnvVuejsIsSupportedLocale:As}}const Hl={install(s,e){if(!e.apiKey){console.error("[LiyaAiEnvVuejs] apiKey is required");return}if(!e.apiUrl){console.error("[LiyaAiEnvVuejs] apiUrl is required");return}if(!e.assistantId){console.error("[LiyaAiEnvVuejs] assistantId is required");return}Pl(e);const{initLocale:t}=ar();t(e.locale),s.config.globalProperties.$liyaAiEnvVuejs={config:e},s.provide("liyaAiEnvVuejsConfig",e)}};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eo="160",uf=0,Gl=1,df=2,Wl=1,jl=2,En=3,Sn=0,Ht=1,hn=2,Un=0,Li=1,Xl=2,ql=3,$l=4,hf=5,ii=100,ff=101,pf=102,Yl=103,Kl=104,mf=200,gf=201,_f=202,vf=203,So=204,Mo=205,yf=206,xf=207,Ef=208,Sf=209,Mf=210,Af=211,Tf=212,bf=213,wf=214,Rf=0,Cf=1,Lf=2,lr=3,Pf=4,If=5,Df=6,Nf=7,Jl=0,Uf=1,Of=2,On=0,Ff=1,Bf=2,Vf=3,Zl=4,kf=5,zf=6,Ql="attached",Hf="detached",ec=300,Pi=301,Ii=302,Ao=303,To=304,cr=306,Di=1e3,Kt=1001,ur=1002,Et=1003,bo=1004,dr=1005,Gt=1006,tc=1007,si=1008,Fn=1009,Gf=1010,Wf=1011,wo=1012,nc=1013,Bn=1014,Mn=1015,Ts=1016,ic=1017,sc=1018,ri=1020,jf=1021,Jt=1023,Xf=1024,qf=1025,oi=1026,Ni=1027,$f=1028,rc=1029,Yf=1030,oc=1031,ac=1033,Ro=33776,Co=33777,Lo=33778,Po=33779,lc=35840,cc=35841,uc=35842,dc=35843,hc=36196,fc=37492,pc=37496,mc=37808,gc=37809,_c=37810,vc=37811,yc=37812,xc=37813,Ec=37814,Sc=37815,Mc=37816,Ac=37817,Tc=37818,bc=37819,wc=37820,Rc=37821,Io=36492,Cc=36494,Lc=36495,Kf=36283,Pc=36284,Ic=36285,Dc=36286,Jf=2200,Zf=2201,Qf=2202,bs=2300,Ui=2301,Do=2302,Oi=2400,Fi=2401,hr=2402,No=2500,ep=2501,tp=0,Nc=1,Uo=2,Uc=3e3,ai=3001,np=3200,ip=3201,Oc=0,sp=1,Zt="",lt="srgb",St="srgb-linear",Oo="display-p3",fr="display-p3-linear",pr="linear",at="srgb",mr="rec709",gr="p3",Bi=7680,Fc=519,rp=512,op=513,ap=514,Bc=515,lp=516,cp=517,up=518,dp=519,Fo=35044,Vc="300 es",Bo=1035,An=2e3,_r=2001;class li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kc=1234567;const ws=Math.PI/180,Vi=180/Math.PI;function rn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[s&255]+Lt[s>>8&255]+Lt[s>>16&255]+Lt[s>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function Pt(s,e,t){return Math.max(e,Math.min(t,s))}function Vo(s,e){return(s%e+e)%e}function hp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function fp(s,e,t){return s!==e?(t-s)/(e-s):0}function Rs(s,e,t){return(1-t)*s+t*e}function pp(s,e,t,n){return Rs(s,e,1-Math.exp(-t*n))}function mp(s,e=1){return e-Math.abs(Vo(s,e*2)-e)}function gp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function _p(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function vp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function yp(s,e){return s+Math.random()*(e-s)}function xp(s){return s*(.5-Math.random())}function Ep(s){s!==void 0&&(kc=s);let e=kc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sp(s){return s*ws}function Mp(s){return s*Vi}function ko(s){return(s&s-1)===0&&s!==0}function Ap(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function vr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Tp(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),h=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*d,l*h,a*c);break;case"YZY":s.set(l*h,a*u,l*d,a*c);break;case"ZXZ":s.set(l*d,l*h,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*m,a*c);break;case"YXY":s.set(l*m,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function nt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const bp={DEG2RAD:ws,RAD2DEG:Vi,generateUUID:rn,clamp:Pt,euclideanModulo:Vo,mapLinear:hp,inverseLerp:fp,lerp:Rs,damp:pp,pingpong:mp,smoothstep:gp,smootherstep:_p,randInt:vp,randFloat:yp,randFloatSpread:xp,seededRandom:Ep,degToRad:Sp,radToDeg:Mp,isPowerOfTwo:ko,ceilPowerOfTwo:Ap,floorPowerOfTwo:vr,setQuaternionFromProperEuler:Tp,normalize:nt,denormalize:fn};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,i,r,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],m=n[5],g=n[8],v=i[0],f=i[3],p=i[6],E=i[1],x=i[4],w=i[7],L=i[2],R=i[5],C=i[8];return r[0]=o*v+a*E+l*L,r[3]=o*f+a*x+l*R,r[6]=o*p+a*w+l*C,r[1]=c*v+u*E+d*L,r[4]=c*f+u*x+d*R,r[7]=c*p+u*w+d*C,r[2]=h*v+m*E+g*L,r[5]=h*f+m*x+g*R,r[8]=h*p+m*w+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,m=c*r-o*l,g=t*d+n*h+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(i*c-u*n)*v,e[2]=(a*n-i*o)*v,e[3]=h*v,e[4]=(u*t-i*l)*v,e[5]=(i*r-a*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(zo.makeScale(e,t)),this}rotate(e){return this.premultiply(zo.makeRotation(-e)),this}translate(e,t){return this.premultiply(zo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zo=new We;function zc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Cs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wp(){const s=Cs("canvas");return s.style.display="block",s}const Hc={};function Ls(s){s in Hc||(Hc[s]=!0,console.warn(s))}const Gc=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wc=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yr={[St]:{transfer:pr,primaries:mr,toReference:s=>s,fromReference:s=>s},[lt]:{transfer:at,primaries:mr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[fr]:{transfer:pr,primaries:gr,toReference:s=>s.applyMatrix3(Wc),fromReference:s=>s.applyMatrix3(Gc)},[Oo]:{transfer:at,primaries:gr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Wc),fromReference:s=>s.applyMatrix3(Gc).convertLinearToSRGB()}},Rp=new Set([St,fr]),Ze={enabled:!0,_workingColorSpace:St,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Rp.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=yr[e].toReference,i=yr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return yr[s].primaries},getTransfer:function(s){return s===Zt?pr:yr[s].transfer}};function ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ho(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let zi;class jc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zi===void 0&&(zi=Cs("canvas")),zi.width=e.width,zi.height=e.height;const n=zi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ki(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ki(t[n]/255)*255):t[n]=ki(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cp=0;class Xc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=rn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Go(i[o].image)):r.push(Go(i[o]))}else r=Go(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Go(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lp=0;class bt extends li{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=Kt,i=Kt,r=Gt,o=si,a=Jt,l=Fn,c=bt.DEFAULT_ANISOTROPY,u=Zt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=rn(),this.name="",this.source=new Xc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ai?lt:Zt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ec)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Di:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Di:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===lt?ai:Uc}set encoding(e){Ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ai?lt:Zt}}bt.DEFAULT_IMAGE=null,bt.DEFAULT_MAPPING=ec,bt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,i=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],g=l[9],v=l[2],f=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,w=(m+1)/2,L=(p+1)/2,R=(u+h)/4,C=(d+v)/4,j=(g+f)/4;return x>w&&x>L?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=R/n,r=C/n):w>L?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=R/i,r=j/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=C/r,i=j/r),this.set(n,i,r,t),this}let E=Math.sqrt((f-g)*(f-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(f-g)/E,this.y=(d-v)/E,this.z=(h-u)/E,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pp extends li{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ls("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ai?lt:Zt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Xc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends Pp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class qc extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ip extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class on{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==h||c!==m||u!==g){let f=1-a;const p=l*h+c*m+u*g+d*v,E=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const L=Math.sqrt(x),R=Math.atan2(L,p*E);f=Math.sin(f*R)/L,a=Math.sin(a*R)/L}const w=a*E;if(l=l*f+h*w,c=c*f+m*w,u=u*f+g*w,d=d*f+v*w,f===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=L,c*=L,u*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[o],h=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*m-c*h,e[t+1]=l*g+u*h+c*d-a*m,e[t+2]=c*g+u*m+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(r/2),h=l(n/2),m=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"YZX":this._x=h*u*d+c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d-h*m*g;break;case"XZY":this._x=h*u*d-c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($c.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($c.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=i+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wo.copy(this).projectOnVector(e),this.sub(Wo)}reflect(e){return this.sub(Wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wo=new O,$c=new on;class Tn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xr.copy(n.boundingBox)),xr.applyMatrix4(e.matrixWorld),this.union(xr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ps),Er.subVectors(this.max,Ps),Hi.subVectors(e.a,Ps),Gi.subVectors(e.b,Ps),Wi.subVectors(e.c,Ps),Vn.subVectors(Gi,Hi),kn.subVectors(Wi,Gi),ui.subVectors(Hi,Wi);let t=[0,-Vn.z,Vn.y,0,-kn.z,kn.y,0,-ui.z,ui.y,Vn.z,0,-Vn.x,kn.z,0,-kn.x,ui.z,0,-ui.x,-Vn.y,Vn.x,0,-kn.y,kn.x,0,-ui.y,ui.x,0];return!jo(t,Hi,Gi,Wi,Er)||(t=[1,0,0,0,1,0,0,0,1],!jo(t,Hi,Gi,Wi,Er))?!1:(Sr.crossVectors(Vn,kn),t=[Sr.x,Sr.y,Sr.z],jo(t,Hi,Gi,Wi,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new O,new O,new O,new O,new O,new O,new O,new O],an=new O,xr=new Tn,Hi=new O,Gi=new O,Wi=new O,Vn=new O,kn=new O,ui=new O,Ps=new O,Er=new O,Sr=new O,di=new O;function jo(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){di.fromArray(s,r);const a=i.x*Math.abs(di.x)+i.y*Math.abs(di.y)+i.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),u=n.dot(di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Dp=new Tn,Is=new O,Xo=new O;class pn{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Dp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);const t=Is.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Is,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(Xo)),this.expandByPoint(Is.copy(e.center).sub(Xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new O,qo=new O,Mr=new O,zn=new O,$o=new O,Ar=new O,Yo=new O;class Tr{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){qo.copy(e).add(t).multiplyScalar(.5),Mr.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(qo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Mr),a=zn.dot(this.direction),l=-zn.dot(Mr),c=zn.lengthSq(),u=Math.abs(1-o*o);let d,h,m,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(qo).addScaledVector(Mr,h),m}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const n=wn.dot(this.direction),i=wn.dot(wn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,i,r){$o.subVectors(t,e),Ar.subVectors(n,e),Yo.crossVectors($o,Ar);let o=this.direction.dot(Yo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,e);const l=a*this.direction.dot(Ar.crossVectors(zn,Ar));if(l<0)return null;const c=a*this.direction.dot($o.cross(zn));if(c<0||l+c>o)return null;const u=-a*zn.dot(Yo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,n,i,r,o,a,l,c,u,d,h,m,g,v,f){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,d,h,m,g,v,f)}set(e,t,n,i,r,o,a,l,c,u,d,h,m,g,v,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=m,p[7]=g,p[11]=v,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ji.setFromMatrixColumn(e,0).length(),r=1/ji.setFromMatrixColumn(e,1).length(),o=1/ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,m=o*d,g=a*u,v=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,g=c*u,v=c*d;t[0]=h+v*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,g=c*u,v=c*d;t[0]=h-v*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*d,g=a*u,v=a*d;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-h*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+g,t[10]=h-v*d}else if(e.order==="XZY"){const h=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Np,e,Up)}lookAt(e,t,n){const i=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Hn.crossVectors(n,jt),Hn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Hn.crossVectors(n,jt)),Hn.normalize(),br.crossVectors(jt,Hn),i[0]=Hn.x,i[4]=br.x,i[8]=jt.x,i[1]=Hn.y,i[5]=br.y,i[9]=jt.y,i[2]=Hn.z,i[6]=br.z,i[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],m=n[13],g=n[2],v=n[6],f=n[10],p=n[14],E=n[3],x=n[7],w=n[11],L=n[15],R=i[0],C=i[4],j=i[8],S=i[12],b=i[1],H=i[5],Z=i[9],ae=i[13],P=i[2],D=i[6],U=i[10],te=i[14],F=i[3],V=i[7],ee=i[11],G=i[15];return r[0]=o*R+a*b+l*P+c*F,r[4]=o*C+a*H+l*D+c*V,r[8]=o*j+a*Z+l*U+c*ee,r[12]=o*S+a*ae+l*te+c*G,r[1]=u*R+d*b+h*P+m*F,r[5]=u*C+d*H+h*D+m*V,r[9]=u*j+d*Z+h*U+m*ee,r[13]=u*S+d*ae+h*te+m*G,r[2]=g*R+v*b+f*P+p*F,r[6]=g*C+v*H+f*D+p*V,r[10]=g*j+v*Z+f*U+p*ee,r[14]=g*S+v*ae+f*te+p*G,r[3]=E*R+x*b+w*P+L*F,r[7]=E*C+x*H+w*D+L*V,r[11]=E*j+x*Z+w*U+L*ee,r[15]=E*S+x*ae+w*te+L*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],v=e[7],f=e[11],p=e[15];return g*(+r*l*d-i*c*d-r*a*h+n*c*h+i*a*m-n*l*m)+v*(+t*l*m-t*c*h+r*o*h-i*o*m+i*c*u-r*l*u)+f*(+t*c*d-t*a*m-r*o*d+n*o*m+r*a*u-n*c*u)+p*(-i*a*u-t*l*d+t*a*h+i*o*d-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],v=e[13],f=e[14],p=e[15],E=d*f*c-v*h*c+v*l*m-a*f*m-d*l*p+a*h*p,x=g*h*c-u*f*c-g*l*m+o*f*m+u*l*p-o*h*p,w=u*v*c-g*d*c+g*a*m-o*v*m-u*a*p+o*d*p,L=g*d*l-u*v*l-g*a*h+o*v*h+u*a*f-o*d*f,R=t*E+n*x+i*w+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=E*C,e[1]=(v*h*r-d*f*r-v*i*m+n*f*m+d*i*p-n*h*p)*C,e[2]=(a*f*r-v*l*r+v*i*c-n*f*c-a*i*p+n*l*p)*C,e[3]=(d*l*r-a*h*r-d*i*c+n*h*c+a*i*m-n*l*m)*C,e[4]=x*C,e[5]=(u*f*r-g*h*r+g*i*m-t*f*m-u*i*p+t*h*p)*C,e[6]=(g*l*r-o*f*r-g*i*c+t*f*c+o*i*p-t*l*p)*C,e[7]=(o*h*r-u*l*r+u*i*c-t*h*c-o*i*m+t*l*m)*C,e[8]=w*C,e[9]=(g*d*r-u*v*r-g*n*m+t*v*m+u*n*p-t*d*p)*C,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*p+t*a*p)*C,e[11]=(u*a*r-o*d*r-u*n*c+t*d*c+o*n*m-t*a*m)*C,e[12]=L*C,e[13]=(u*v*i-g*d*i+g*n*h-t*v*h-u*n*f+t*d*f)*C,e[14]=(g*a*i-o*v*i-g*n*l+t*v*l+o*n*f-t*a*f)*C,e[15]=(o*d*i-u*a*i+u*n*l-t*d*l-o*n*h+t*a*h)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,m=r*u,g=r*d,v=o*u,f=o*d,p=a*d,E=l*c,x=l*u,w=l*d,L=n.x,R=n.y,C=n.z;return i[0]=(1-(v+p))*L,i[1]=(m+w)*L,i[2]=(g-x)*L,i[3]=0,i[4]=(m-w)*R,i[5]=(1-(h+p))*R,i[6]=(f+E)*R,i[7]=0,i[8]=(g+x)*C,i[9]=(f-E)*C,i[10]=(1-(h+v))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ji.set(i[0],i[1],i[2]).length();const o=ji.set(i[4],i[5],i[6]).length(),a=ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ln.copy(this);const c=1/r,u=1/o,d=1/a;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=d,ln.elements[9]*=d,ln.elements[10]*=d,t.setFromRotationMatrix(ln),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=An){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i);let m,g;if(a===An)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===_r)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=An){const l=this.elements,c=1/(t-e),u=1/(n-i),d=1/(o-r),h=(t+e)*c,m=(n+i)*u;let g,v;if(a===An)g=(o+r)*d,v=-2*d;else if(a===_r)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ji=new O,ln=new je,Np=new O(0,0,0),Up=new O(1,1,1),Hn=new O,br=new O,jt=new O,Yc=new je,Kc=new on;class wr{constructor(e=0,t=0,n=0,i=wr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kc.setFromEuler(this),this.setFromQuaternion(Kc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wr.DEFAULT_ORDER="XYZ";class Jc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Op=0;const Zc=new O,Xi=new on,Rn=new je,Rr=new O,Ds=new O,Fp=new O,Bp=new on,Qc=new O(1,0,0),eu=new O(0,1,0),tu=new O(0,0,1),Vp={type:"added"},kp={type:"removed"};class ct extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new O,t=new wr,n=new on,i=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new je},normalMatrix:{value:new We}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(Qc,e)}rotateY(e){return this.rotateOnAxis(eu,e)}rotateZ(e){return this.rotateOnAxis(tu,e)}translateOnAxis(e,t){return Zc.copy(e).applyQuaternion(this.quaternion),this.position.add(Zc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qc,e)}translateY(e){return this.translateOnAxis(eu,e)}translateZ(e){return this.translateOnAxis(tu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rr.copy(e):Rr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Ds,Rr,this.up):Rn.lookAt(Rr,Ds,this.up),this.quaternion.setFromRotationMatrix(Rn),i&&(Rn.extractRotation(i.matrixWorld),Xi.setFromRotationMatrix(Rn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Vp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,Fp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,Bp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ct.DEFAULT_UP=new O(0,1,0),ct.DEFAULT_MATRIX_AUTO_UPDATE=!0,ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new O,Cn=new O,Ko=new O,Ln=new O,qi=new O,$i=new O,nu=new O,Jo=new O,Zo=new O,Qo=new O;let Cr=!1;class un{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),cn.subVectors(e,t),i.cross(cn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){cn.subVectors(i,t),Cn.subVectors(n,t),Ko.subVectors(e,t);const o=cn.dot(cn),a=cn.dot(Cn),l=cn.dot(Ko),c=Cn.dot(Cn),u=Cn.dot(Ko),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,m=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getUV(e,t,n,i,r,o,a,l){return Cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cr=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l)}static isFrontFacing(e,t,n,i){return cn.subVectors(n,t),Cn.subVectors(e,t),cn.cross(Cn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),cn.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cr=!0),un.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return un.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;qi.subVectors(i,n),$i.subVectors(r,n),Jo.subVectors(e,n);const l=qi.dot(Jo),c=$i.dot(Jo);if(l<=0&&c<=0)return t.copy(n);Zo.subVectors(e,i);const u=qi.dot(Zo),d=$i.dot(Zo);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(qi,o);Qo.subVectors(e,r);const m=qi.dot(Qo),g=$i.dot(Qo);if(g>=0&&m<=g)return t.copy(r);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector($i,a);const f=u*g-m*d;if(f<=0&&d-u>=0&&m-g>=0)return nu.subVectors(r,i),a=(d-u)/(d-u+(m-g)),t.copy(i).addScaledVector(nu,a);const p=1/(f+v+h);return o=v*p,a=h*p,t.copy(n).addScaledVector(qi,o).addScaledVector($i,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function ea(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=Vo(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ea(o,r,e+1/3),this.g=ea(o,r,e),this.b=ea(o,r,e-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(e,t=lt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){const n=iu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=Ho(e.r),this.g=Ho(e.g),this.b=Ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return Ze.fromWorkingColorSpace(It.copy(this),e),Math.round(Pt(It.r*255,0,255))*65536+Math.round(Pt(It.g*255,0,255))*256+Math.round(Pt(It.b*255,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(It.copy(this),t);const n=It.r,i=It.g,r=It.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=lt){Ze.fromWorkingColorSpace(It.copy(this),e);const t=It.r,n=It.g,i=It.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(Lr);const n=Rs(Gn.h,Lr.h,t),i=Rs(Gn.s,Lr.s,t),r=Rs(Gn.l,Lr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Ne;Ne.NAMES=iu;let zp=0;class mn extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=rn(),this.name="",this.type="Material",this.blending=Li,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=So,this.blendDst=Mo,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==So&&(n.blendSrc=this.blendSrc),this.blendDst!==Mo&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hi extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new O,Pr=new qe;class Nt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pr.fromBufferAttribute(this,t),Pr.applyMatrix3(e),this.setXY(t,Pr.x,Pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fo&&(e.usage=this.usage),e}}class su extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ru extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qt extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Hp=0;const en=new je,ta=new ct,Yi=new O,Xt=new Tn,Ns=new Tn,Mt=new O;class dn extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zc(e)?ru:su)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return ta.lookAt(e),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Xt.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(Xt.min,Ns.min),Xt.expandByPoint(Mt),Mt.addVectors(Xt.max,Ns.max),Xt.expandByPoint(Mt)):(Xt.expandByPoint(Ns.min),Xt.expandByPoint(Ns.max))}Xt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Mt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Mt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Mt.fromBufferAttribute(a,c),l&&(Yi.fromBufferAttribute(e,c),Mt.add(Yi)),i=Math.max(i,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<a;b++)c[b]=new O,u[b]=new O;const d=new O,h=new O,m=new O,g=new qe,v=new qe,f=new qe,p=new O,E=new O;function x(b,H,Z){d.fromArray(i,b*3),h.fromArray(i,H*3),m.fromArray(i,Z*3),g.fromArray(o,b*2),v.fromArray(o,H*2),f.fromArray(o,Z*2),h.sub(d),m.sub(d),v.sub(g),f.sub(g);const ae=1/(v.x*f.y-f.x*v.y);isFinite(ae)&&(p.copy(h).multiplyScalar(f.y).addScaledVector(m,-v.y).multiplyScalar(ae),E.copy(m).multiplyScalar(v.x).addScaledVector(h,-f.x).multiplyScalar(ae),c[b].add(p),c[H].add(p),c[Z].add(p),u[b].add(E),u[H].add(E),u[Z].add(E))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let b=0,H=w.length;b<H;++b){const Z=w[b],ae=Z.start,P=Z.count;for(let D=ae,U=ae+P;D<U;D+=3)x(n[D+0],n[D+1],n[D+2])}const L=new O,R=new O,C=new O,j=new O;function S(b){C.fromArray(r,b*3),j.copy(C);const H=c[b];L.copy(H),L.sub(C.multiplyScalar(C.dot(H))).normalize(),R.crossVectors(j,H);const ae=R.dot(u[b])<0?-1:1;l[b*4]=L.x,l[b*4+1]=L.y,l[b*4+2]=L.z,l[b*4+3]=ae}for(let b=0,H=w.length;b<H;++b){const Z=w[b],ae=Z.start,P=Z.count;for(let D=ae,U=ae+P;D<U;D+=3)S(n[D+0]),S(n[D+1]),S(n[D+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),v=e.getX(h+1),f=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,f),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let v=0,f=l.length;v<f;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[m++]}return new Nt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ou=new je,fi=new Tr,Ir=new pn,au=new O,Ki=new O,Ji=new O,Zi=new O,na=new O,Dr=new O,Nr=new qe,Ur=new qe,Or=new qe,lu=new O,cu=new O,uu=new O,Fr=new O,Br=new O;class Ve extends ct{constructor(e=new dn,t=new hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(na.fromBufferAttribute(d,e),o?Dr.addScaledVector(na,u):Dr.addScaledVector(na.sub(t),u))}t.add(Dr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(r),fi.copy(e.ray).recast(e.near),!(Ir.containsPoint(fi.origin)===!1&&(fi.intersectSphere(Ir,au)===null||fi.origin.distanceToSquared(au)>(e.far-e.near)**2))&&(ou.copy(r).invert(),fi.copy(e.ray).applyMatrix4(ou),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const f=h[g],p=o[f.materialIndex],E=Math.max(f.start,m.start),x=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let w=E,L=x;w<L;w+=3){const R=a.getX(w),C=a.getX(w+1),j=a.getX(w+2);i=Vr(this,p,e,n,c,u,d,R,C,j),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let f=g,p=v;f<p;f+=3){const E=a.getX(f),x=a.getX(f+1),w=a.getX(f+2);i=Vr(this,o,e,n,c,u,d,E,x,w),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const f=h[g],p=o[f.materialIndex],E=Math.max(f.start,m.start),x=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let w=E,L=x;w<L;w+=3){const R=w,C=w+1,j=w+2;i=Vr(this,p,e,n,c,u,d,R,C,j),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=g,p=v;f<p;f+=3){const E=f,x=f+1,w=f+2;i=Vr(this,o,e,n,c,u,d,E,x,w),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function Gp(s,e,t,n,i,r,o,a){let l;if(e.side===Ht?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Sn,a),l===null)return null;Br.copy(a),Br.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Br);return c<t.near||c>t.far?null:{distance:c,point:Br.clone(),object:s}}function Vr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Ki),s.getVertexPosition(l,Ji),s.getVertexPosition(c,Zi);const u=Gp(s,e,t,n,Ki,Ji,Zi,Fr);if(u){i&&(Nr.fromBufferAttribute(i,a),Ur.fromBufferAttribute(i,l),Or.fromBufferAttribute(i,c),u.uv=un.getInterpolation(Fr,Ki,Ji,Zi,Nr,Ur,Or,new qe)),r&&(Nr.fromBufferAttribute(r,a),Ur.fromBufferAttribute(r,l),Or.fromBufferAttribute(r,c),u.uv1=un.getInterpolation(Fr,Ki,Ji,Zi,Nr,Ur,Or,new qe),u.uv2=u.uv1),o&&(lu.fromBufferAttribute(o,a),cu.fromBufferAttribute(o,l),uu.fromBufferAttribute(o,c),u.normal=un.getInterpolation(Fr,Ki,Ji,Zi,lu,cu,uu,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new O,materialIndex:0};un.getNormal(Ki,Ji,Zi,d.normal),u.face=d}return u}class ut extends dn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2));function g(v,f,p,E,x,w,L,R,C,j,S){const b=w/C,H=L/j,Z=w/2,ae=L/2,P=R/2,D=C+1,U=j+1;let te=0,F=0;const V=new O;for(let ee=0;ee<U;ee++){const G=ee*H-ae;for(let X=0;X<D;X++){const N=X*b-Z;V[v]=N*E,V[f]=G*x,V[p]=P,c.push(V.x,V.y,V.z),V[v]=0,V[f]=0,V[p]=R>0?1:-1,u.push(V.x,V.y,V.z),d.push(X/C),d.push(1-ee/j),te+=1}}for(let ee=0;ee<j;ee++)for(let G=0;G<C;G++){const X=h+G+D*ee,N=h+G+D*(ee+1),K=h+(G+1)+D*(ee+1),oe=h+(G+1)+D*ee;l.push(X,N,oe),l.push(N,K,oe),F+=6}a.addGroup(m,F,S),m+=F,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ut(s){const e={};for(let t=0;t<s.length;t++){const n=Qi(s[t]);for(const i in n)e[i]=n[i]}return e}function Wp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function du(s){return s.getRenderTarget()===null?s.outputColorSpace:Ze.workingColorSpace}const jp={clone:Qi,merge:Ut};var Xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xp,this.fragmentShader=qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=Wp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class hu extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=An}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ot extends hu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vi*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ws*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const es=-90,ts=1;class $p extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ot(es,ts,e,t);i.layers=this.layers,this.add(i);const r=new Ot(es,ts,e,t);r.layers=this.layers,this.add(r);const o=new Ot(es,ts,e,t);o.layers=this.layers,this.add(o);const a=new Ot(es,ts,e,t);a.layers=this.layers,this.add(a);const l=new Ot(es,ts,e,t);l.layers=this.layers,this.add(l);const c=new Ot(es,ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class fu extends bt{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Pi,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yp extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ls("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ai?lt:Zt),this.texture=new fu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ut(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Un});r.uniforms.tEquirect.value=t;const o=new Ve(i,r),a=t.minFilter;return t.minFilter===si&&(t.minFilter=Gt),new $p(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const ia=new O,Kp=new O,Jp=new We;class mi{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ia.subVectors(n,t).cross(Kp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ia),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Jp.getNormalMatrix(e),i=this.coplanarPoint(ia).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new pn,kr=new O;class sa{constructor(e=new mi,t=new mi,n=new mi,i=new mi,r=new mi,o=new mi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],h=i[7],m=i[8],g=i[9],v=i[10],f=i[11],p=i[12],E=i[13],x=i[14],w=i[15];if(n[0].setComponents(l-r,h-c,f-m,w-p).normalize(),n[1].setComponents(l+r,h+c,f+m,w+p).normalize(),n[2].setComponents(l+o,h+u,f+g,w+E).normalize(),n[3].setComponents(l-o,h-u,f-g,w-E).normalize(),n[4].setComponents(l-a,h-d,f-v,w-x).normalize(),t===An)n[5].setComponents(l+a,h+d,f+v,w+x).normalize();else if(t===_r)n[5].setComponents(a,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(kr.x=i.normal.x>0?e.max.x:e.min.x,kr.y=i.normal.y>0?e.max.y:e.min.y,kr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Zp(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const d=c.array,h=c.usage,m=d.byteLength,g=s.createBuffer();s.bindBuffer(u,g),s.bufferData(u,d,h),c.onUploadCallback();let v;if(d instanceof Float32Array)v=s.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=s.SHORT;else if(d instanceof Uint32Array)v=s.UNSIGNED_INT;else if(d instanceof Int32Array)v=s.INT;else if(d instanceof Int8Array)v=s.BYTE;else if(d instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,u,d){const h=u.array,m=u._updateRange,g=u.updateRanges;if(s.bindBuffer(d,c),m.count===-1&&g.length===0&&s.bufferSubData(d,0,h),g.length!==0){for(let v=0,f=g.length;v<f;v++){const p=g[v];t?s.bufferSubData(d,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):s.bufferSubData(d,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}m.count!==-1&&(t?s.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):s.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,i(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}class Wn extends dn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=e/a,h=t/l,m=[],g=[],v=[],f=[];for(let p=0;p<u;p++){const E=p*h-o;for(let x=0;x<c;x++){const w=x*d-r;g.push(w,-E,0),v.push(0,0,1),f.push(x/a),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const x=E+c*p,w=E+c*(p+1),L=E+1+c*(p+1),R=E+1+c*p;m.push(x,w,R),m.push(w,L,R)}this.setIndex(m),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,em=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,im=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,om=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,am=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Am=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Pm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,km=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$m=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Km=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ng=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ig=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ag=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,pg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,mg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,gg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_g=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ze={alphahash_fragment:Qp,alphahash_pars_fragment:em,alphamap_fragment:tm,alphamap_pars_fragment:nm,alphatest_fragment:im,alphatest_pars_fragment:sm,aomap_fragment:rm,aomap_pars_fragment:om,batching_pars_vertex:am,batching_vertex:lm,begin_vertex:cm,beginnormal_vertex:um,bsdfs:dm,iridescence_fragment:hm,bumpmap_pars_fragment:fm,clipping_planes_fragment:pm,clipping_planes_pars_fragment:mm,clipping_planes_pars_vertex:gm,clipping_planes_vertex:_m,color_fragment:vm,color_pars_fragment:ym,color_pars_vertex:xm,color_vertex:Em,common:Sm,cube_uv_reflection_fragment:Mm,defaultnormal_vertex:Am,displacementmap_pars_vertex:Tm,displacementmap_vertex:bm,emissivemap_fragment:wm,emissivemap_pars_fragment:Rm,colorspace_fragment:Cm,colorspace_pars_fragment:Lm,envmap_fragment:Pm,envmap_common_pars_fragment:Im,envmap_pars_fragment:Dm,envmap_pars_vertex:Nm,envmap_physical_pars_fragment:Xm,envmap_vertex:Um,fog_vertex:Om,fog_pars_vertex:Fm,fog_fragment:Bm,fog_pars_fragment:Vm,gradientmap_pars_fragment:km,lightmap_fragment:zm,lightmap_pars_fragment:Hm,lights_lambert_fragment:Gm,lights_lambert_pars_fragment:Wm,lights_pars_begin:jm,lights_toon_fragment:qm,lights_toon_pars_fragment:$m,lights_phong_fragment:Ym,lights_phong_pars_fragment:Km,lights_physical_fragment:Jm,lights_physical_pars_fragment:Zm,lights_fragment_begin:Qm,lights_fragment_maps:eg,lights_fragment_end:tg,logdepthbuf_fragment:ng,logdepthbuf_pars_fragment:ig,logdepthbuf_pars_vertex:sg,logdepthbuf_vertex:rg,map_fragment:og,map_pars_fragment:ag,map_particle_fragment:lg,map_particle_pars_fragment:cg,metalnessmap_fragment:ug,metalnessmap_pars_fragment:dg,morphcolor_vertex:hg,morphnormal_vertex:fg,morphtarget_pars_vertex:pg,morphtarget_vertex:mg,normal_fragment_begin:gg,normal_fragment_maps:_g,normal_pars_fragment:vg,normal_pars_vertex:yg,normal_vertex:xg,normalmap_pars_fragment:Eg,clearcoat_normal_fragment_begin:Sg,clearcoat_normal_fragment_maps:Mg,clearcoat_pars_fragment:Ag,iridescence_pars_fragment:Tg,opaque_fragment:bg,packing:wg,premultiplied_alpha_fragment:Rg,project_vertex:Cg,dithering_fragment:Lg,dithering_pars_fragment:Pg,roughnessmap_fragment:Ig,roughnessmap_pars_fragment:Dg,shadowmap_pars_fragment:Ng,shadowmap_pars_vertex:Ug,shadowmap_vertex:Og,shadowmask_pars_fragment:Fg,skinbase_vertex:Bg,skinning_pars_vertex:Vg,skinning_vertex:kg,skinnormal_vertex:zg,specularmap_fragment:Hg,specularmap_pars_fragment:Gg,tonemapping_fragment:Wg,tonemapping_pars_fragment:jg,transmission_fragment:Xg,transmission_pars_fragment:qg,uv_pars_fragment:$g,uv_pars_vertex:Yg,uv_vertex:Kg,worldpos_vertex:Jg,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},pe={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},gn={basic:{uniforms:Ut([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ut([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ut([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ut([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ut([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ut([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ut([pe.points,pe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ut([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ut([pe.common,pe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ut([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ut([pe.sprite,pe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Ut([pe.common,pe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Ut([pe.lights,pe.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};gn.physical={uniforms:Ut([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const zr={r:0,b:0,g:0};function Zg(s,e,t,n,i,r,o){const a=new Ne(0);let l=r===!0?0:1,c,u,d=null,h=0,m=null;function g(f,p){let E=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?v(a,l):x&&x.isColor&&(v(x,1),E=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||E)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===cr)?(u===void 0&&(u=new Ve(new ut(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Qi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(x.colorSpace)!==at,(d!==x||h!==x.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,m=s.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ve(new Wn(2,2),new pi({name:"BackgroundMaterial",uniforms:Qi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(x.colorSpace)!==at,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,m=s.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function v(f,p){f.getRGB(zr,du(s)),n.buffers.color.setClear(zr.r,zr.g,zr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(f,p=1){a.set(f),l=p,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,v(a,l)},render:g}}function Qg(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=f(null);let c=l,u=!1;function d(P,D,U,te,F){let V=!1;if(o){const ee=v(te,U,D);c!==ee&&(c=ee,m(c.object)),V=p(P,te,U,F),V&&E(P,te,U,F)}else{const ee=D.wireframe===!0;(c.geometry!==te.id||c.program!==U.id||c.wireframe!==ee)&&(c.geometry=te.id,c.program=U.id,c.wireframe=ee,V=!0)}F!==null&&t.update(F,s.ELEMENT_ARRAY_BUFFER),(V||u)&&(u=!1,j(P,D,U,te),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function h(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,D,U){const te=U.wireframe===!0;let F=a[P.id];F===void 0&&(F={},a[P.id]=F);let V=F[D.id];V===void 0&&(V={},F[D.id]=V);let ee=V[te];return ee===void 0&&(ee=f(h()),V[te]=ee),ee}function f(P){const D=[],U=[],te=[];for(let F=0;F<i;F++)D[F]=0,U[F]=0,te[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:te,object:P,attributes:{},index:null}}function p(P,D,U,te){const F=c.attributes,V=D.attributes;let ee=0;const G=U.getAttributes();for(const X in G)if(G[X].location>=0){const K=F[X];let oe=V[X];if(oe===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),K===void 0||K.attribute!==oe||oe&&K.data!==oe.data)return!0;ee++}return c.attributesNum!==ee||c.index!==te}function E(P,D,U,te){const F={},V=D.attributes;let ee=0;const G=U.getAttributes();for(const X in G)if(G[X].location>=0){let K=V[X];K===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));const oe={};oe.attribute=K,K&&K.data&&(oe.data=K.data),F[X]=oe,ee++}c.attributes=F,c.attributesNum=ee,c.index=te}function x(){const P=c.newAttributes;for(let D=0,U=P.length;D<U;D++)P[D]=0}function w(P){L(P,0)}function L(P,D){const U=c.newAttributes,te=c.enabledAttributes,F=c.attributeDivisors;U[P]=1,te[P]===0&&(s.enableVertexAttribArray(P),te[P]=1),F[P]!==D&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,D),F[P]=D)}function R(){const P=c.newAttributes,D=c.enabledAttributes;for(let U=0,te=D.length;U<te;U++)D[U]!==P[U]&&(s.disableVertexAttribArray(U),D[U]=0)}function C(P,D,U,te,F,V,ee){ee===!0?s.vertexAttribIPointer(P,D,U,F,V):s.vertexAttribPointer(P,D,U,te,F,V)}function j(P,D,U,te){if(n.isWebGL2===!1&&(P.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const F=te.attributes,V=U.getAttributes(),ee=D.defaultAttributeValues;for(const G in V){const X=V[G];if(X.location>=0){let N=F[G];if(N===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(N=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(N=P.instanceColor)),N!==void 0){const K=N.normalized,oe=N.itemSize,fe=t.get(N);if(fe===void 0)continue;const me=fe.buffer,ge=fe.type,ce=fe.bytesPerElement,de=n.isWebGL2===!0&&(ge===s.INT||ge===s.UNSIGNED_INT||N.gpuType===nc);if(N.isInterleavedBufferAttribute){const Te=N.data,k=Te.stride,dt=N.offset;if(Te.isInstancedInterleavedBuffer){for(let Ee=0;Ee<X.locationSize;Ee++)L(X.location+Ee,Te.meshPerAttribute);P.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Ee=0;Ee<X.locationSize;Ee++)w(X.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,me);for(let Ee=0;Ee<X.locationSize;Ee++)C(X.location+Ee,oe/X.locationSize,ge,K,k*ce,(dt+oe/X.locationSize*Ee)*ce,de)}else{if(N.isInstancedBufferAttribute){for(let Te=0;Te<X.locationSize;Te++)L(X.location+Te,N.meshPerAttribute);P.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let Te=0;Te<X.locationSize;Te++)w(X.location+Te);s.bindBuffer(s.ARRAY_BUFFER,me);for(let Te=0;Te<X.locationSize;Te++)C(X.location+Te,oe/X.locationSize,ge,K,oe*ce,oe/X.locationSize*Te*ce,de)}}else if(ee!==void 0){const K=ee[G];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(X.location,K);break;case 3:s.vertexAttrib3fv(X.location,K);break;case 4:s.vertexAttrib4fv(X.location,K);break;default:s.vertexAttrib1fv(X.location,K)}}}}R()}function S(){Z();for(const P in a){const D=a[P];for(const U in D){const te=D[U];for(const F in te)g(te[F].object),delete te[F];delete D[U]}delete a[P]}}function b(P){if(a[P.id]===void 0)return;const D=a[P.id];for(const U in D){const te=D[U];for(const F in te)g(te[F].object),delete te[F];delete D[U]}delete a[P.id]}function H(P){for(const D in a){const U=a[D];if(U[P.id]===void 0)continue;const te=U[P.id];for(const F in te)g(te[F].object),delete te[F];delete U[P.id]}}function Z(){ae(),u=!0,c!==l&&(c=l,m(c.object))}function ae(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:ae,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:H,initAttributes:x,enableAttribute:w,disableUnusedAttributes:R}}function e_(s,e,t,n){const i=n.isWebGL2;let r;function o(u){r=u}function a(u,d){s.drawArrays(r,u,d),t.update(d,r,1)}function l(u,d,h){if(h===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,u,d,h),t.update(d,r,h)}function c(u,d,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h;g++)this.render(u[g],d[g]);else{m.multiDrawArraysWEBGL(r,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=d[v];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function t_(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),h=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,w=o||e.has("OES_texture_float"),L=x&&w,R=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:E,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:L,maxSamples:R}}function n_(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new mi,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||n!==0||i;return i=h,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){const g=d.clippingPlanes,v=d.clipIntersection,f=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!f)r?u(null):c();else{const E=r?0:n,x=E*4;let w=p.clippingState||null;l.value=w,w=u(g,h,x,m);for(let L=0;L!==x;++L)w[L]=t[L];p.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,m,g){const v=d!==null?d.length:0;let f=null;if(v!==0){if(f=l.value,g!==!0||f===null){const p=m+v*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(f===null||f.length<p)&&(f=new Float32Array(p));for(let x=0,w=m;x!==v;++x,w+=4)o.copy(d[x]).applyMatrix4(E,a),o.normal.toArray(f,w),f[w+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function i_(s){let e=new WeakMap;function t(o,a){return a===Ao?o.mapping=Pi:a===To&&(o.mapping=Ii),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ao||a===To)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Yp(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ra extends hu{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ns=4,mu=[.125,.215,.35,.446,.526,.582],_i=20,oa=new ra,gu=new Ne;let aa=null,la=0,ca=0;const vi=(1+Math.sqrt(5))/2,is=1/vi,_u=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,vi,is),new O(0,vi,-is),new O(is,0,vi),new O(-is,0,vi),new O(vi,is,0),new O(-vi,is,0)];class vu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){aa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(aa,la,ca),e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),aa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Ts,format:Jt,colorSpace:St,depthBuffer:!1},i=yu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s_(r)),this._blurMaterial=r_(r,e,t)}return i}_compileMaterial(e){const t=new Ve(this._lodPlanes[0],e);this._renderer.compile(t,oa)}_sceneToCubeUV(e,t,n,i){const a=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(gu),u.toneMapping=On,u.autoClear=!1;const m=new hi({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new Ve(new ut,m);let v=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,v=!0):(m.color.copy(gu),v=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Hr(i,E*x,p>2?x:0,x,x),u.setRenderTarget(i),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Pi||e.mapping===Ii;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xu());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ve(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Hr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,oa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=_u[(i-1)%_u.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ve(this._lodPlanes[i],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*_i-1),v=r/g,f=isFinite(r)?1+Math.floor(u*v):_i;f>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${_i}`);const p=[];let E=0;for(let C=0;C<_i;++C){const j=C/v,S=Math.exp(-j*j/2);p.push(S),C===0?E+=S:C<f&&(E+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/E;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const w=this._sizeLods[i],L=3*w*(i>x-ns?i-x+ns:0),R=4*(this._cubeSize-w);Hr(t,L,R,3*w,2*w),l.setRenderTarget(t),l.render(d,oa)}}function s_(s){const e=[],t=[],n=[];let i=s;const r=s-ns+1+mu.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-ns?l=mu[o-s+ns-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,v=3,f=2,p=1,E=new Float32Array(v*g*m),x=new Float32Array(f*g*m),w=new Float32Array(p*g*m);for(let R=0;R<m;R++){const C=R%3*2/3-1,j=R>2?0:-1,S=[C,j,0,C+2/3,j,0,C+2/3,j+1,0,C,j,0,C+2/3,j+1,0,C,j+1,0];E.set(S,v*g*R),x.set(h,f*g*R);const b=[R,R,R,R,R,R];w.set(b,p*g*R)}const L=new dn;L.setAttribute("position",new Nt(E,v)),L.setAttribute("uv",new Nt(x,f)),L.setAttribute("faceIndex",new Nt(w,p)),e.push(L),i>ns&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yu(s,e,t){const n=new ci(s,e,t);return n.texture.mapping=cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function r_(s,e,t){const n=new Float32Array(_i),i=new O(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function xu(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Eu(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function ua(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function o_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ao||l===To,u=l===Pi||l===Ii;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new vu(s)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new vu(s));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function a_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function l_(s,e,t,n){const i={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let f=0,p=v.length;f<p;f++)e.remove(v[f])}h.removeEventListener("dispose",o),delete i[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],s.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const v=m[g];for(let f=0,p=v.length;f<p;f++)e.update(v[f],s.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,g=d.attributes.position;let v=0;if(m!==null){const E=m.array;v=m.version;for(let x=0,w=E.length;x<w;x+=3){const L=E[x+0],R=E[x+1],C=E[x+2];h.push(L,R,R,C,C,L)}}else if(g!==void 0){const E=g.array;v=g.version;for(let x=0,w=E.length/3-1;x<w;x+=3){const L=x+0,R=x+1,C=x+2;h.push(L,R,R,C,C,L)}}else return;const f=new(zc(h)?ru:su)(h,1);f.version=v;const p=r.get(d);p&&e.remove(p),r.set(d,f)}function u(d){const h=r.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function c_(s,e,t,n){const i=n.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,g){s.drawElements(r,g,a,m*l),t.update(g,r,1)}function d(m,g,v){if(v===0)return;let f,p;if(i)f=s,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,g,a,m*l,v),t.update(g,r,v)}function h(m,g,v){if(v===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<v;p++)this.render(m[p]/l,g[p]);else{f.multiDrawElementsWEBGL(r,g,0,a,m,0,v);let p=0;for(let E=0;E<v;E++)p+=g[E];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function u_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function d_(s,e){return s[0]-e[0]}function h_(s,e){return Math.abs(e[1])-Math.abs(s[1])}function f_(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new ot,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let v=r.get(u);if(v===void 0||v.count!==g){let P=function(){Z.dispose(),r.delete(u),u.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();const E=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let j=0;E===!0&&(j=1),x===!0&&(j=2),w===!0&&(j=3);let S=u.attributes.position.count*j,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const H=new Float32Array(S*b*4*g),Z=new qc(H,S,b,g);Z.type=Mn,Z.needsUpdate=!0;const ae=j*4;for(let D=0;D<g;D++){const U=L[D],te=R[D],F=C[D],V=S*b*4*D;for(let ee=0;ee<U.count;ee++){const G=ee*ae;E===!0&&(o.fromBufferAttribute(U,ee),H[V+G+0]=o.x,H[V+G+1]=o.y,H[V+G+2]=o.z,H[V+G+3]=0),x===!0&&(o.fromBufferAttribute(te,ee),H[V+G+4]=o.x,H[V+G+5]=o.y,H[V+G+6]=o.z,H[V+G+7]=0),w===!0&&(o.fromBufferAttribute(F,ee),H[V+G+8]=o.x,H[V+G+9]=o.y,H[V+G+10]=o.z,H[V+G+11]=F.itemSize===4?o.w:1)}}v={count:g,texture:Z,size:new qe(S,b)},r.set(u,v),u.addEventListener("dispose",P)}let f=0;for(let E=0;E<h.length;E++)f+=h[E];const p=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(s,"morphTargetBaseInfluence",p),d.getUniforms().setValue(s,"morphTargetInfluences",h),d.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{const m=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<m;x++){const w=g[x];w[0]=x,w[1]=h[x]}g.sort(h_);for(let x=0;x<8;x++)x<m&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(d_);const v=u.morphAttributes.position,f=u.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const w=a[x],L=w[0],R=w[1];L!==Number.MAX_SAFE_INTEGER&&R?(v&&u.getAttribute("morphTarget"+x)!==v[L]&&u.setAttribute("morphTarget"+x,v[L]),f&&u.getAttribute("morphNormal"+x)!==f[L]&&u.setAttribute("morphNormal"+x,f[L]),i[x]=R,p+=R):(v&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),f&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const E=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",E),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function p_(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Su extends bt{constructor(e,t,n,i,r,o,a,l,c,u){if(u=u!==void 0?u:oi,u!==oi&&u!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===oi&&(n=Bn),n===void 0&&u===Ni&&(n=ri),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Mu=new bt,Au=new Su(1,1);Au.compareFunction=Bc;const Tu=new qc,bu=new Ip,wu=new fu,Ru=[],Cu=[],Lu=new Float32Array(16),Pu=new Float32Array(9),Iu=new Float32Array(4);function ss(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ru[i];if(r===void 0&&(r=new Float32Array(i),Ru[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function yt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function xt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Gr(s,e){let t=Cu[e];t===void 0&&(t=new Int32Array(e),Cu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function m_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function g_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;s.uniform2fv(this.addr,e),xt(t,e)}}function __(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;s.uniform3fv(this.addr,e),xt(t,e)}}function v_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;s.uniform4fv(this.addr,e),xt(t,e)}}function y_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(yt(t,n))return;Iu.set(n),s.uniformMatrix2fv(this.addr,!1,Iu),xt(t,n)}}function x_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(yt(t,n))return;Pu.set(n),s.uniformMatrix3fv(this.addr,!1,Pu),xt(t,n)}}function E_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(yt(t,n))return;Lu.set(n),s.uniformMatrix4fv(this.addr,!1,Lu),xt(t,n)}}function S_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function M_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;s.uniform2iv(this.addr,e),xt(t,e)}}function A_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;s.uniform3iv(this.addr,e),xt(t,e)}}function T_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;s.uniform4iv(this.addr,e),xt(t,e)}}function b_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function w_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;s.uniform2uiv(this.addr,e),xt(t,e)}}function R_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;s.uniform3uiv(this.addr,e),xt(t,e)}}function C_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;s.uniform4uiv(this.addr,e),xt(t,e)}}function L_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Au:Mu;t.setTexture2D(e||r,i)}function P_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||bu,i)}function I_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wu,i)}function D_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Tu,i)}function N_(s){switch(s){case 5126:return m_;case 35664:return g_;case 35665:return __;case 35666:return v_;case 35674:return y_;case 35675:return x_;case 35676:return E_;case 5124:case 35670:return S_;case 35667:case 35671:return M_;case 35668:case 35672:return A_;case 35669:case 35673:return T_;case 5125:return b_;case 36294:return w_;case 36295:return R_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return L_;case 35679:case 36299:case 36307:return P_;case 35680:case 36300:case 36308:case 36293:return I_;case 36289:case 36303:case 36311:case 36292:return D_}}function U_(s,e){s.uniform1fv(this.addr,e)}function O_(s,e){const t=ss(e,this.size,2);s.uniform2fv(this.addr,t)}function F_(s,e){const t=ss(e,this.size,3);s.uniform3fv(this.addr,t)}function B_(s,e){const t=ss(e,this.size,4);s.uniform4fv(this.addr,t)}function V_(s,e){const t=ss(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function k_(s,e){const t=ss(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function z_(s,e){const t=ss(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function H_(s,e){s.uniform1iv(this.addr,e)}function G_(s,e){s.uniform2iv(this.addr,e)}function W_(s,e){s.uniform3iv(this.addr,e)}function j_(s,e){s.uniform4iv(this.addr,e)}function X_(s,e){s.uniform1uiv(this.addr,e)}function q_(s,e){s.uniform2uiv(this.addr,e)}function $_(s,e){s.uniform3uiv(this.addr,e)}function Y_(s,e){s.uniform4uiv(this.addr,e)}function K_(s,e,t){const n=this.cache,i=e.length,r=Gr(t,i);yt(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Mu,r[o])}function J_(s,e,t){const n=this.cache,i=e.length,r=Gr(t,i);yt(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||bu,r[o])}function Z_(s,e,t){const n=this.cache,i=e.length,r=Gr(t,i);yt(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||wu,r[o])}function Q_(s,e,t){const n=this.cache,i=e.length,r=Gr(t,i);yt(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Tu,r[o])}function e0(s){switch(s){case 5126:return U_;case 35664:return O_;case 35665:return F_;case 35666:return B_;case 35674:return V_;case 35675:return k_;case 35676:return z_;case 5124:case 35670:return H_;case 35667:case 35671:return G_;case 35668:case 35672:return W_;case 35669:case 35673:return j_;case 5125:return X_;case 36294:return q_;case 36295:return $_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return K_;case 35679:case 36299:case 36307:return J_;case 35680:case 36300:case 36308:case 36293:return Z_;case 36289:case 36303:case 36311:case 36292:return Q_}}class t0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=N_(t.type)}}class n0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=e0(t.type)}}class i0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const da=/(\w+)(\])?(\[|\.)?/g;function Du(s,e){s.seq.push(e),s.map[e.id]=e}function s0(s,e,t){const n=s.name,i=n.length;for(da.lastIndex=0;;){const r=da.exec(n),o=da.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Du(t,c===void 0?new t0(a,s,e):new n0(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new i0(a),Du(t,d)),t=d}}}class Wr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);s0(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Nu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const r0=37297;let o0=0;function a0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function l0(s){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(s);let n;switch(e===t?n="":e===gr&&t===mr?n="LinearDisplayP3ToLinearSRGB":e===mr&&t===gr&&(n="LinearSRGBToLinearDisplayP3"),s){case St:case fr:return[n,"LinearTransferOETF"];case lt:case Oo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Uu(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+a0(s.getShaderSource(e),o)}else return i}function c0(s,e){const t=l0(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function u0(s,e){let t;switch(e){case Ff:t="Linear";break;case Bf:t="Reinhard";break;case Vf:t="OptimizedCineon";break;case Zl:t="ACESFilmic";break;case zf:t="AgX";break;case kf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function d0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rs).join(`
`)}function h0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(rs).join(`
`)}function f0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function p0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function rs(s){return s!==""}function Ou(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ha(s){return s.replace(m0,_0)}const g0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _0(s,e){let t=ze[e];if(t===void 0){const n=g0.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ha(t)}const v0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(s){return s.replace(v0,y0)}function y0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Vu(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function x0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Wl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===jl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===En&&(e="SHADOWMAP_TYPE_VSM"),e}function E0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Pi:case Ii:e="ENVMAP_TYPE_CUBE";break;case cr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function S0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ii:e="ENVMAP_MODE_REFRACTION";break}return e}function M0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Jl:e="ENVMAP_BLENDING_MULTIPLY";break;case Uf:e="ENVMAP_BLENDING_MIX";break;case Of:e="ENVMAP_BLENDING_ADD";break}return e}function A0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function T0(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=x0(t),c=E0(t),u=S0(t),d=M0(t),h=A0(t),m=t.isWebGL2?"":d0(t),g=h0(t),v=f0(r),f=i.createProgram();let p,E,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(rs).join(`
`),p.length>0&&(p+=`
`),E=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(rs).join(`
`),E.length>0&&(E+=`
`)):(p=[Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),E=[m,Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?ze.tonemapping_pars_fragment:"",t.toneMapping!==On?u0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,c0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rs).join(`
`)),o=ha(o),o=Ou(o,t),o=Fu(o,t),a=ha(a),a=Ou(a,t),a=Fu(a,t),o=Bu(o),a=Bu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const w=x+p+o,L=x+E+a,R=Nu(i,i.VERTEX_SHADER,w),C=Nu(i,i.FRAGMENT_SHADER,L);i.attachShader(f,R),i.attachShader(f,C),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function j(Z){if(s.debug.checkShaderErrors){const ae=i.getProgramInfoLog(f).trim(),P=i.getShaderInfoLog(R).trim(),D=i.getShaderInfoLog(C).trim();let U=!0,te=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,f,R,C);else{const F=Uu(i,R,"vertex"),V=Uu(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Program Info Log: `+ae+`
`+F+`
`+V)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(P===""||D==="")&&(te=!1);te&&(Z.diagnostics={runnable:U,programLog:ae,vertexShader:{log:P,prefix:p},fragmentShader:{log:D,prefix:E}})}i.deleteShader(R),i.deleteShader(C),S=new Wr(i,f),b=p0(i,f)}let S;this.getUniforms=function(){return S===void 0&&j(this),S};let b;this.getAttributes=function(){return b===void 0&&j(this),b};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=i.getProgramParameter(f,r0)),H},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=o0++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=R,this.fragmentShader=C,this}let b0=0;class w0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new R0(e),t.set(e,n)),n}}class R0{constructor(e){this.id=b0++,this.code=e,this.usedTimes=0}}function C0(s,e,t,n,i,r,o){const a=new Jc,l=new w0,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function f(S,b,H,Z,ae){const P=Z.fog,D=ae.geometry,U=S.isMeshStandardMaterial?Z.environment:null,te=(S.isMeshStandardMaterial?t:e).get(S.envMap||U),F=te&&te.mapping===cr?te.image.height:null,V=g[S.type];S.precision!==null&&(m=i.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ee=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,G=ee!==void 0?ee.length:0;let X=0;D.morphAttributes.position!==void 0&&(X=1),D.morphAttributes.normal!==void 0&&(X=2),D.morphAttributes.color!==void 0&&(X=3);let N,K,oe,fe;if(V){const At=gn[V];N=At.vertexShader,K=At.fragmentShader}else N=S.vertexShader,K=S.fragmentShader,l.update(S),oe=l.getVertexShaderID(S),fe=l.getFragmentShaderID(S);const me=s.getRenderTarget(),ge=ae.isInstancedMesh===!0,ce=ae.isBatchedMesh===!0,de=!!S.map,Te=!!S.matcap,k=!!te,dt=!!S.aoMap,Ee=!!S.lightMap,De=!!S.bumpMap,xe=!!S.normalMap,it=!!S.displacementMap,Pe=!!S.emissiveMap,T=!!S.metalnessMap,y=!!S.roughnessMap,I=S.anisotropy>0,$=S.clearcoat>0,J=S.iridescence>0,ne=S.sheen>0,le=S.transmission>0,ie=I&&!!S.anisotropyMap,ue=$&&!!S.clearcoatMap,_e=$&&!!S.clearcoatNormalMap,Re=$&&!!S.clearcoatRoughnessMap,re=J&&!!S.iridescenceMap,Ke=J&&!!S.iridescenceThicknessMap,Fe=ne&&!!S.sheenColorMap,be=ne&&!!S.sheenRoughnessMap,Se=!!S.specularMap,ye=!!S.specularColorMap,Ce=!!S.specularIntensityMap,Je=le&&!!S.transmissionMap,tt=le&&!!S.thicknessMap,Ue=!!S.gradientMap,z=!!S.alphaMap,A=S.alphaTest>0,se=!!S.alphaHash,he=!!S.extensions,we=!!D.attributes.uv1,Ae=!!D.attributes.uv2,et=!!D.attributes.uv3;let st=On;return S.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(st=s.toneMapping),{isWebGL2:u,shaderID:V,shaderType:S.type,shaderName:S.name,vertexShader:N,fragmentShader:K,defines:S.defines,customVertexShaderID:oe,customFragmentShaderID:fe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:ce,instancing:ge,instancingColor:ge&&ae.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:St,map:de,matcap:Te,envMap:k,envMapMode:k&&te.mapping,envMapCubeUVHeight:F,aoMap:dt,lightMap:Ee,bumpMap:De,normalMap:xe,displacementMap:h&&it,emissiveMap:Pe,normalMapObjectSpace:xe&&S.normalMapType===sp,normalMapTangentSpace:xe&&S.normalMapType===Oc,metalnessMap:T,roughnessMap:y,anisotropy:I,anisotropyMap:ie,clearcoat:$,clearcoatMap:ue,clearcoatNormalMap:_e,clearcoatRoughnessMap:Re,iridescence:J,iridescenceMap:re,iridescenceThicknessMap:Ke,sheen:ne,sheenColorMap:Fe,sheenRoughnessMap:be,specularMap:Se,specularColorMap:ye,specularIntensityMap:Ce,transmission:le,transmissionMap:Je,thicknessMap:tt,gradientMap:Ue,opaque:S.transparent===!1&&S.blending===Li,alphaMap:z,alphaTest:A,alphaHash:se,combine:S.combine,mapUv:de&&v(S.map.channel),aoMapUv:dt&&v(S.aoMap.channel),lightMapUv:Ee&&v(S.lightMap.channel),bumpMapUv:De&&v(S.bumpMap.channel),normalMapUv:xe&&v(S.normalMap.channel),displacementMapUv:it&&v(S.displacementMap.channel),emissiveMapUv:Pe&&v(S.emissiveMap.channel),metalnessMapUv:T&&v(S.metalnessMap.channel),roughnessMapUv:y&&v(S.roughnessMap.channel),anisotropyMapUv:ie&&v(S.anisotropyMap.channel),clearcoatMapUv:ue&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:_e&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:be&&v(S.sheenRoughnessMap.channel),specularMapUv:Se&&v(S.specularMap.channel),specularColorMapUv:ye&&v(S.specularColorMap.channel),specularIntensityMapUv:Ce&&v(S.specularIntensityMap.channel),transmissionMapUv:Je&&v(S.transmissionMap.channel),thicknessMapUv:tt&&v(S.thicknessMap.channel),alphaMapUv:z&&v(S.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(xe||I),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:Ae,vertexUv3s:et,pointsUvs:ae.isPoints===!0&&!!D.attributes.uv&&(de||z),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ae.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:X,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:st,useLegacyLights:s._useLegacyLights,decodeVideoTexture:de&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===hn,flipSided:S.side===Ht,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:he&&S.extensions.derivatives===!0,extensionFragDepth:he&&S.extensions.fragDepth===!0,extensionDrawBuffers:he&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const H in S.defines)b.push(H),b.push(S.defines[H]);return S.isRawShaderMaterial===!1&&(E(b,S),x(b,S),b.push(s.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function E(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function x(S,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function w(S){const b=g[S.type];let H;if(b){const Z=gn[b];H=jp.clone(Z.uniforms)}else H=S.uniforms;return H}function L(S,b){let H;for(let Z=0,ae=c.length;Z<ae;Z++){const P=c[Z];if(P.cacheKey===b){H=P,++H.usedTimes;break}}return H===void 0&&(H=new T0(s,b,S,r),c.push(H)),H}function R(S){if(--S.usedTimes===0){const b=c.indexOf(S);c[b]=c[c.length-1],c.pop(),S.destroy()}}function C(S){l.remove(S)}function j(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:w,acquireProgram:L,releaseProgram:R,releaseShaderCache:C,programs:c,dispose:j}}function L0(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function P0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ku(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function zu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,h,m,g,v,f){let p=s[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:f},s[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=m,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=f),e++,p}function a(d,h,m,g,v,f){const p=o(d,h,m,g,v,f);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):t.push(p)}function l(d,h,m,g,v,f){const p=o(d,h,m,g,v,f);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||P0),n.length>1&&n.sort(h||ku),i.length>1&&i.sort(h||ku)}function u(){for(let d=e,h=s.length;d<h;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function I0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new zu,s.set(n,[o])):i>=r.length?(o=new zu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function D0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ne};break;case"SpotLight":t={position:new O,direction:new O,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new O,halfWidth:new O,halfHeight:new O};break}return s[e.id]=t,t}}}function N0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let U0=0;function O0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function F0(s,e){const t=new D0,n=N0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,o=new je,a=new je;function l(u,d){let h=0,m=0,g=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let v=0,f=0,p=0,E=0,x=0,w=0,L=0,R=0,C=0,j=0,S=0;u.sort(O0);const b=d===!0?Math.PI:1;for(let Z=0,ae=u.length;Z<ae;Z++){const P=u[Z],D=P.color,U=P.intensity,te=P.distance,F=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=D.r*U*b,m+=D.g*U*b,g+=D.b*U*b;else if(P.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(P.sh.coefficients[V],U);S++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){const ee=P.shadow,G=n.get(P);G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,i.directionalShadow[v]=G,i.directionalShadowMap[v]=F,i.directionalShadowMatrix[v]=P.shadow.matrix,w++}i.directional[v]=V,v++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(D).multiplyScalar(U*b),V.distance=te,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,i.spot[p]=V;const ee=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,ee.updateMatrices(P),P.castShadow&&j++),i.spotLightMatrix[p]=ee.matrix,P.castShadow){const G=n.get(P);G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,i.spotShadow[p]=G,i.spotShadowMap[p]=F,R++}p++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(D).multiplyScalar(U),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),i.rectArea[E]=V,E++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*b),V.distance=P.distance,V.decay=P.decay,P.castShadow){const ee=P.shadow,G=n.get(P);G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,G.shadowCameraNear=ee.camera.near,G.shadowCameraFar=ee.camera.far,i.pointShadow[f]=G,i.pointShadowMap[f]=F,i.pointShadowMatrix[f]=P.shadow.matrix,L++}i.point[f]=V,f++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(U*b),V.groundColor.copy(P.groundColor).multiplyScalar(U*b),i.hemi[x]=V,x++}}E>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=g;const H=i.hash;(H.directionalLength!==v||H.pointLength!==f||H.spotLength!==p||H.rectAreaLength!==E||H.hemiLength!==x||H.numDirectionalShadows!==w||H.numPointShadows!==L||H.numSpotShadows!==R||H.numSpotMaps!==C||H.numLightProbes!==S)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=E,i.point.length=f,i.hemi.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=R+C-j,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=j,i.numLightProbes=S,H.directionalLength=v,H.pointLength=f,H.spotLength=p,H.rectAreaLength=E,H.hemiLength=x,H.numDirectionalShadows=w,H.numPointShadows=L,H.numSpotShadows=R,H.numSpotMaps=C,H.numLightProbes=S,i.version=U0++)}function c(u,d){let h=0,m=0,g=0,v=0,f=0;const p=d.matrixWorldInverse;for(let E=0,x=u.length;E<x;E++){const w=u[E];if(w.isDirectionalLight){const L=i.directional[h];L.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(p),h++}else if(w.isSpotLight){const L=i.spot[g];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(p),L.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(p),g++}else if(w.isRectAreaLight){const L=i.rectArea[v];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(p),a.identity(),o.copy(w.matrixWorld),o.premultiply(p),a.extractRotation(o),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),v++}else if(w.isPointLight){const L=i.point[m];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(p),m++}else if(w.isHemisphereLight){const L=i.hemi[f];L.direction.setFromMatrixPosition(w.matrixWorld),L.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:i}}function Hu(s,e){const t=new F0(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function B0(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Hu(s,e),t.set(r,[l])):o>=a.length?(l=new Hu(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class V0 extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class k0 extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function G0(s,e,t){let n=new sa;const i=new qe,r=new qe,o=new ot,a=new V0({depthPacking:ip}),l=new k0,c={},u=t.maxTextureSize,d={[Sn]:Ht,[Ht]:Sn,[hn]:hn},h=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:z0,fragmentShader:H0}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new dn;g.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ve(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let p=this.type;this.render=function(R,C,j){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const S=s.getRenderTarget(),b=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(Un),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ae=p!==En&&this.type===En,P=p===En&&this.type!==En;for(let D=0,U=R.length;D<U;D++){const te=R[D],F=te.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const V=F.getFrameExtents();if(i.multiply(V),r.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/V.x),i.x=r.x*V.x,F.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/V.y),i.y=r.y*V.y,F.mapSize.y=r.y)),F.map===null||ae===!0||P===!0){const G=this.type!==En?{minFilter:Et,magFilter:Et}:{};F.map!==null&&F.map.dispose(),F.map=new ci(i.x,i.y,G),F.map.texture.name=te.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const ee=F.getViewportCount();for(let G=0;G<ee;G++){const X=F.getViewport(G);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),Z.viewport(o),F.updateMatrices(te,G),n=F.getFrustum(),w(C,j,F.camera,te,this.type)}F.isPointLightShadow!==!0&&this.type===En&&E(F,j),F.needsUpdate=!1}p=this.type,f.needsUpdate=!1,s.setRenderTarget(S,b,H)};function E(R,C){const j=e.update(v);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ci(i.x,i.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(C,null,j,h,v,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(C,null,j,m,v,null)}function x(R,C,j,S){let b=null;const H=j.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(H!==void 0)b=H;else if(b=j.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const Z=b.uuid,ae=C.uuid;let P=c[Z];P===void 0&&(P={},c[Z]=P);let D=P[ae];D===void 0&&(D=b.clone(),P[ae]=D,C.addEventListener("dispose",L)),b=D}if(b.visible=C.visible,b.wireframe=C.wireframe,S===En?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:d[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,j.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const Z=s.properties.get(b);Z.light=j}return b}function w(R,C,j,S,b){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===En)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld);const ae=e.update(R),P=R.material;if(Array.isArray(P)){const D=ae.groups;for(let U=0,te=D.length;U<te;U++){const F=D[U],V=P[F.materialIndex];if(V&&V.visible){const ee=x(R,V,S,b);R.onBeforeShadow(s,R,C,j,ae,ee,F),s.renderBufferDirect(j,null,ae,ee,R,F),R.onAfterShadow(s,R,C,j,ae,ee,F)}}}else if(P.visible){const D=x(R,P,S,b);R.onBeforeShadow(s,R,C,j,ae,D,null),s.renderBufferDirect(j,null,ae,D,R,null),R.onAfterShadow(s,R,C,j,ae,D,null)}}const Z=R.children;for(let ae=0,P=Z.length;ae<P;ae++)w(Z[ae],C,j,S,b)}function L(R){R.target.removeEventListener("dispose",L);for(const j in c){const S=c[j],b=R.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}function W0(s,e,t){const n=t.isWebGL2;function i(){let A=!1;const se=new ot;let he=null;const we=new ot(0,0,0,0);return{setMask:function(Ae){he!==Ae&&!A&&(s.colorMask(Ae,Ae,Ae,Ae),he=Ae)},setLocked:function(Ae){A=Ae},setClear:function(Ae,et,st,gt,At){At===!0&&(Ae*=gt,et*=gt,st*=gt),se.set(Ae,et,st,gt),we.equals(se)===!1&&(s.clearColor(Ae,et,st,gt),we.copy(se))},reset:function(){A=!1,he=null,we.set(-1,0,0,0)}}}function r(){let A=!1,se=null,he=null,we=null;return{setTest:function(Ae){Ae?ce(s.DEPTH_TEST):de(s.DEPTH_TEST)},setMask:function(Ae){se!==Ae&&!A&&(s.depthMask(Ae),se=Ae)},setFunc:function(Ae){if(he!==Ae){switch(Ae){case Rf:s.depthFunc(s.NEVER);break;case Cf:s.depthFunc(s.ALWAYS);break;case Lf:s.depthFunc(s.LESS);break;case lr:s.depthFunc(s.LEQUAL);break;case Pf:s.depthFunc(s.EQUAL);break;case If:s.depthFunc(s.GEQUAL);break;case Df:s.depthFunc(s.GREATER);break;case Nf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=Ae}},setLocked:function(Ae){A=Ae},setClear:function(Ae){we!==Ae&&(s.clearDepth(Ae),we=Ae)},reset:function(){A=!1,se=null,he=null,we=null}}}function o(){let A=!1,se=null,he=null,we=null,Ae=null,et=null,st=null,gt=null,At=null;return{setTest:function(rt){A||(rt?ce(s.STENCIL_TEST):de(s.STENCIL_TEST))},setMask:function(rt){se!==rt&&!A&&(s.stencilMask(rt),se=rt)},setFunc:function(rt,Rt,Vt){(he!==rt||we!==Rt||Ae!==Vt)&&(s.stencilFunc(rt,Rt,Vt),he=rt,we=Rt,Ae=Vt)},setOp:function(rt,Rt,Vt){(et!==rt||st!==Rt||gt!==Vt)&&(s.stencilOp(rt,Rt,Vt),et=rt,st=Rt,gt=Vt)},setLocked:function(rt){A=rt},setClear:function(rt){At!==rt&&(s.clearStencil(rt),At=rt)},reset:function(){A=!1,se=null,he=null,we=null,Ae=null,et=null,st=null,gt=null,At=null}}}const a=new i,l=new r,c=new o,u=new WeakMap,d=new WeakMap;let h={},m={},g=new WeakMap,v=[],f=null,p=!1,E=null,x=null,w=null,L=null,R=null,C=null,j=null,S=new Ne(0,0,0),b=0,H=!1,Z=null,ae=null,P=null,D=null,U=null;const te=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,V=0;const ee=s.getParameter(s.VERSION);ee.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ee)[1]),F=V>=1):ee.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),F=V>=2);let G=null,X={};const N=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),oe=new ot().fromArray(N),fe=new ot().fromArray(K);function me(A,se,he,we){const Ae=new Uint8Array(4),et=s.createTexture();s.bindTexture(A,et),s.texParameteri(A,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(A,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<he;st++)n&&(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)?s.texImage3D(se,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(se+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return et}const ge={};ge[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ge[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ce(s.DEPTH_TEST),l.setFunc(lr),Pe(!1),T(Gl),ce(s.CULL_FACE),xe(Un);function ce(A){h[A]!==!0&&(s.enable(A),h[A]=!0)}function de(A){h[A]!==!1&&(s.disable(A),h[A]=!1)}function Te(A,se){return m[A]!==se?(s.bindFramebuffer(A,se),m[A]=se,n&&(A===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=se),A===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=se)),!0):!1}function k(A,se){let he=v,we=!1;if(A)if(he=g.get(se),he===void 0&&(he=[],g.set(se,he)),A.isWebGLMultipleRenderTargets){const Ae=A.texture;if(he.length!==Ae.length||he[0]!==s.COLOR_ATTACHMENT0){for(let et=0,st=Ae.length;et<st;et++)he[et]=s.COLOR_ATTACHMENT0+et;he.length=Ae.length,we=!0}}else he[0]!==s.COLOR_ATTACHMENT0&&(he[0]=s.COLOR_ATTACHMENT0,we=!0);else he[0]!==s.BACK&&(he[0]=s.BACK,we=!0);we&&(t.isWebGL2?s.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function dt(A){return f!==A?(s.useProgram(A),f=A,!0):!1}const Ee={[ii]:s.FUNC_ADD,[ff]:s.FUNC_SUBTRACT,[pf]:s.FUNC_REVERSE_SUBTRACT};if(n)Ee[Yl]=s.MIN,Ee[Kl]=s.MAX;else{const A=e.get("EXT_blend_minmax");A!==null&&(Ee[Yl]=A.MIN_EXT,Ee[Kl]=A.MAX_EXT)}const De={[mf]:s.ZERO,[gf]:s.ONE,[_f]:s.SRC_COLOR,[So]:s.SRC_ALPHA,[Mf]:s.SRC_ALPHA_SATURATE,[Ef]:s.DST_COLOR,[yf]:s.DST_ALPHA,[vf]:s.ONE_MINUS_SRC_COLOR,[Mo]:s.ONE_MINUS_SRC_ALPHA,[Sf]:s.ONE_MINUS_DST_COLOR,[xf]:s.ONE_MINUS_DST_ALPHA,[Af]:s.CONSTANT_COLOR,[Tf]:s.ONE_MINUS_CONSTANT_COLOR,[bf]:s.CONSTANT_ALPHA,[wf]:s.ONE_MINUS_CONSTANT_ALPHA};function xe(A,se,he,we,Ae,et,st,gt,At,rt){if(A===Un){p===!0&&(de(s.BLEND),p=!1);return}if(p===!1&&(ce(s.BLEND),p=!0),A!==hf){if(A!==E||rt!==H){if((x!==ii||R!==ii)&&(s.blendEquation(s.FUNC_ADD),x=ii,R=ii),rt)switch(A){case Li:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xl:s.blendFunc(s.ONE,s.ONE);break;case ql:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $l:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Li:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ql:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $l:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}w=null,L=null,C=null,j=null,S.set(0,0,0),b=0,E=A,H=rt}return}Ae=Ae||se,et=et||he,st=st||we,(se!==x||Ae!==R)&&(s.blendEquationSeparate(Ee[se],Ee[Ae]),x=se,R=Ae),(he!==w||we!==L||et!==C||st!==j)&&(s.blendFuncSeparate(De[he],De[we],De[et],De[st]),w=he,L=we,C=et,j=st),(gt.equals(S)===!1||At!==b)&&(s.blendColor(gt.r,gt.g,gt.b,At),S.copy(gt),b=At),E=A,H=!1}function it(A,se){A.side===hn?de(s.CULL_FACE):ce(s.CULL_FACE);let he=A.side===Ht;se&&(he=!he),Pe(he),A.blending===Li&&A.transparent===!1?xe(Un):xe(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),l.setFunc(A.depthFunc),l.setTest(A.depthTest),l.setMask(A.depthWrite),a.setMask(A.colorWrite);const we=A.stencilWrite;c.setTest(we),we&&(c.setMask(A.stencilWriteMask),c.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),c.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),I(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?ce(s.SAMPLE_ALPHA_TO_COVERAGE):de(s.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(A){Z!==A&&(A?s.frontFace(s.CW):s.frontFace(s.CCW),Z=A)}function T(A){A!==uf?(ce(s.CULL_FACE),A!==ae&&(A===Gl?s.cullFace(s.BACK):A===df?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):de(s.CULL_FACE),ae=A}function y(A){A!==P&&(F&&s.lineWidth(A),P=A)}function I(A,se,he){A?(ce(s.POLYGON_OFFSET_FILL),(D!==se||U!==he)&&(s.polygonOffset(se,he),D=se,U=he)):de(s.POLYGON_OFFSET_FILL)}function $(A){A?ce(s.SCISSOR_TEST):de(s.SCISSOR_TEST)}function J(A){A===void 0&&(A=s.TEXTURE0+te-1),G!==A&&(s.activeTexture(A),G=A)}function ne(A,se,he){he===void 0&&(G===null?he=s.TEXTURE0+te-1:he=G);let we=X[he];we===void 0&&(we={type:void 0,texture:void 0},X[he]=we),(we.type!==A||we.texture!==se)&&(G!==he&&(s.activeTexture(he),G=he),s.bindTexture(A,se||ge[A]),we.type=A,we.texture=se)}function le(){const A=X[G];A!==void 0&&A.type!==void 0&&(s.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function ie(){try{s.compressedTexImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ue(){try{s.compressedTexImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function _e(){try{s.texSubImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Re(){try{s.texSubImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function re(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ke(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Fe(){try{s.texStorage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function be(){try{s.texStorage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Se(){try{s.texImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ye(){try{s.texImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ce(A){oe.equals(A)===!1&&(s.scissor(A.x,A.y,A.z,A.w),oe.copy(A))}function Je(A){fe.equals(A)===!1&&(s.viewport(A.x,A.y,A.z,A.w),fe.copy(A))}function tt(A,se){let he=d.get(se);he===void 0&&(he=new WeakMap,d.set(se,he));let we=he.get(A);we===void 0&&(we=s.getUniformBlockIndex(se,A.name),he.set(A,we))}function Ue(A,se){const we=d.get(se).get(A);u.get(se)!==we&&(s.uniformBlockBinding(se,we,A.__bindingPointIndex),u.set(se,we))}function z(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},G=null,X={},m={},g=new WeakMap,v=[],f=null,p=!1,E=null,x=null,w=null,L=null,R=null,C=null,j=null,S=new Ne(0,0,0),b=0,H=!1,Z=null,ae=null,P=null,D=null,U=null,oe.set(0,0,s.canvas.width,s.canvas.height),fe.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ce,disable:de,bindFramebuffer:Te,drawBuffers:k,useProgram:dt,setBlending:xe,setMaterial:it,setFlipSided:Pe,setCullFace:T,setLineWidth:y,setPolygonOffset:I,setScissorTest:$,activeTexture:J,bindTexture:ne,unbindTexture:le,compressedTexImage2D:ie,compressedTexImage3D:ue,texImage2D:Se,texImage3D:ye,updateUBOMapping:tt,uniformBlockBinding:Ue,texStorage2D:Fe,texStorage3D:be,texSubImage2D:_e,texSubImage3D:Re,compressedTexSubImage2D:re,compressedTexSubImage3D:Ke,scissor:Ce,viewport:Je,reset:z}}function j0(s,e,t,n,i,r,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return m?new OffscreenCanvas(T,y):Cs("canvas")}function v(T,y,I,$){let J=1;if((T.width>$||T.height>$)&&(J=$/Math.max(T.width,T.height)),J<1||y===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ne=y?vr:Math.floor,le=ne(J*T.width),ie=ne(J*T.height);d===void 0&&(d=g(le,ie));const ue=I?g(le,ie):d;return ue.width=le,ue.height=ie,ue.getContext("2d").drawImage(T,0,0,le,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+le+"x"+ie+")."),ue}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function f(T){return ko(T.width)&&ko(T.height)}function p(T){return a?!1:T.wrapS!==Kt||T.wrapT!==Kt||T.minFilter!==Et&&T.minFilter!==Gt}function E(T,y){return T.generateMipmaps&&y&&T.minFilter!==Et&&T.minFilter!==Gt}function x(T){s.generateMipmap(T)}function w(T,y,I,$,J=!1){if(a===!1)return y;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ne=y;if(y===s.RED&&(I===s.FLOAT&&(ne=s.R32F),I===s.HALF_FLOAT&&(ne=s.R16F),I===s.UNSIGNED_BYTE&&(ne=s.R8)),y===s.RED_INTEGER&&(I===s.UNSIGNED_BYTE&&(ne=s.R8UI),I===s.UNSIGNED_SHORT&&(ne=s.R16UI),I===s.UNSIGNED_INT&&(ne=s.R32UI),I===s.BYTE&&(ne=s.R8I),I===s.SHORT&&(ne=s.R16I),I===s.INT&&(ne=s.R32I)),y===s.RG&&(I===s.FLOAT&&(ne=s.RG32F),I===s.HALF_FLOAT&&(ne=s.RG16F),I===s.UNSIGNED_BYTE&&(ne=s.RG8)),y===s.RGBA){const le=J?pr:Ze.getTransfer($);I===s.FLOAT&&(ne=s.RGBA32F),I===s.HALF_FLOAT&&(ne=s.RGBA16F),I===s.UNSIGNED_BYTE&&(ne=le===at?s.SRGB8_ALPHA8:s.RGBA8),I===s.UNSIGNED_SHORT_4_4_4_4&&(ne=s.RGBA4),I===s.UNSIGNED_SHORT_5_5_5_1&&(ne=s.RGB5_A1)}return(ne===s.R16F||ne===s.R32F||ne===s.RG16F||ne===s.RG32F||ne===s.RGBA16F||ne===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function L(T,y,I){return E(T,I)===!0||T.isFramebufferTexture&&T.minFilter!==Et&&T.minFilter!==Gt?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function R(T){return T===Et||T===bo||T===dr?s.NEAREST:s.LINEAR}function C(T){const y=T.target;y.removeEventListener("dispose",C),S(y),y.isVideoTexture&&u.delete(y)}function j(T){const y=T.target;y.removeEventListener("dispose",j),H(y)}function S(T){const y=n.get(T);if(y.__webglInit===void 0)return;const I=T.source,$=h.get(I);if($){const J=$[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(T),Object.keys($).length===0&&h.delete(I)}n.remove(T)}function b(T){const y=n.get(T);s.deleteTexture(y.__webglTexture);const I=T.source,$=h.get(I);delete $[y.__cacheKey],o.memory.textures--}function H(T){const y=T.texture,I=n.get(T),$=n.get(y);if($.__webglTexture!==void 0&&(s.deleteTexture($.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(I.__webglFramebuffer[J]))for(let ne=0;ne<I.__webglFramebuffer[J].length;ne++)s.deleteFramebuffer(I.__webglFramebuffer[J][ne]);else s.deleteFramebuffer(I.__webglFramebuffer[J]);I.__webglDepthbuffer&&s.deleteRenderbuffer(I.__webglDepthbuffer[J])}else{if(Array.isArray(I.__webglFramebuffer))for(let J=0;J<I.__webglFramebuffer.length;J++)s.deleteFramebuffer(I.__webglFramebuffer[J]);else s.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&s.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&s.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let J=0;J<I.__webglColorRenderbuffer.length;J++)I.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(I.__webglColorRenderbuffer[J]);I.__webglDepthRenderbuffer&&s.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let J=0,ne=y.length;J<ne;J++){const le=n.get(y[J]);le.__webglTexture&&(s.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(y[J])}n.remove(y),n.remove(T)}let Z=0;function ae(){Z=0}function P(){const T=Z;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),Z+=1,T}function D(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function U(T,y){const I=n.get(T);if(T.isVideoTexture&&it(T),T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(I,T,y);return}}t.bindTexture(s.TEXTURE_2D,I.__webglTexture,s.TEXTURE0+y)}function te(T,y){const I=n.get(T);if(T.version>0&&I.__version!==T.version){oe(I,T,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,I.__webglTexture,s.TEXTURE0+y)}function F(T,y){const I=n.get(T);if(T.version>0&&I.__version!==T.version){oe(I,T,y);return}t.bindTexture(s.TEXTURE_3D,I.__webglTexture,s.TEXTURE0+y)}function V(T,y){const I=n.get(T);if(T.version>0&&I.__version!==T.version){fe(I,T,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+y)}const ee={[Di]:s.REPEAT,[Kt]:s.CLAMP_TO_EDGE,[ur]:s.MIRRORED_REPEAT},G={[Et]:s.NEAREST,[bo]:s.NEAREST_MIPMAP_NEAREST,[dr]:s.NEAREST_MIPMAP_LINEAR,[Gt]:s.LINEAR,[tc]:s.LINEAR_MIPMAP_NEAREST,[si]:s.LINEAR_MIPMAP_LINEAR},X={[rp]:s.NEVER,[dp]:s.ALWAYS,[op]:s.LESS,[Bc]:s.LEQUAL,[ap]:s.EQUAL,[up]:s.GEQUAL,[lp]:s.GREATER,[cp]:s.NOTEQUAL};function N(T,y,I){if(I?(s.texParameteri(T,s.TEXTURE_WRAP_S,ee[y.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,ee[y.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,ee[y.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,G[y.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,G[y.minFilter])):(s.texParameteri(T,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(T,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(y.wrapS!==Kt||y.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,s.TEXTURE_MAG_FILTER,R(y.magFilter)),s.texParameteri(T,s.TEXTURE_MIN_FILTER,R(y.minFilter)),y.minFilter!==Et&&y.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,X[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Et||y.minFilter!==dr&&y.minFilter!==si||y.type===Mn&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===Ts&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(s.texParameterf(T,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function K(T,y){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",C));const $=y.source;let J=h.get($);J===void 0&&(J={},h.set($,J));const ne=D(y);if(ne!==T.__cacheKey){J[ne]===void 0&&(J[ne]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,I=!0),J[ne].usedTimes++;const le=J[T.__cacheKey];le!==void 0&&(J[T.__cacheKey].usedTimes--,le.usedTimes===0&&b(y)),T.__cacheKey=ne,T.__webglTexture=J[ne].texture}return I}function oe(T,y,I){let $=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=s.TEXTURE_3D);const J=K(T,y),ne=y.source;t.bindTexture($,T.__webglTexture,s.TEXTURE0+I);const le=n.get(ne);if(ne.version!==le.__version||J===!0){t.activeTexture(s.TEXTURE0+I);const ie=Ze.getPrimaries(Ze.workingColorSpace),ue=y.colorSpace===Zt?null:Ze.getPrimaries(y.colorSpace),_e=y.colorSpace===Zt||ie===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Re=p(y)&&f(y.image)===!1;let re=v(y.image,Re,!1,i.maxTextureSize);re=Pe(y,re);const Ke=f(re)||a,Fe=r.convert(y.format,y.colorSpace);let be=r.convert(y.type),Se=w(y.internalFormat,Fe,be,y.colorSpace,y.isVideoTexture);N($,y,Ke);let ye;const Ce=y.mipmaps,Je=a&&y.isVideoTexture!==!0&&Se!==hc,tt=le.__version===void 0||J===!0,Ue=L(y,re,Ke);if(y.isDepthTexture)Se=s.DEPTH_COMPONENT,a?y.type===Mn?Se=s.DEPTH_COMPONENT32F:y.type===Bn?Se=s.DEPTH_COMPONENT24:y.type===ri?Se=s.DEPTH24_STENCIL8:Se=s.DEPTH_COMPONENT16:y.type===Mn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===oi&&Se===s.DEPTH_COMPONENT&&y.type!==wo&&y.type!==Bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Bn,be=r.convert(y.type)),y.format===Ni&&Se===s.DEPTH_COMPONENT&&(Se=s.DEPTH_STENCIL,y.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=ri,be=r.convert(y.type))),tt&&(Je?t.texStorage2D(s.TEXTURE_2D,1,Se,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,Se,re.width,re.height,0,Fe,be,null));else if(y.isDataTexture)if(Ce.length>0&&Ke){Je&&tt&&t.texStorage2D(s.TEXTURE_2D,Ue,Se,Ce[0].width,Ce[0].height);for(let z=0,A=Ce.length;z<A;z++)ye=Ce[z],Je?t.texSubImage2D(s.TEXTURE_2D,z,0,0,ye.width,ye.height,Fe,be,ye.data):t.texImage2D(s.TEXTURE_2D,z,Se,ye.width,ye.height,0,Fe,be,ye.data);y.generateMipmaps=!1}else Je?(tt&&t.texStorage2D(s.TEXTURE_2D,Ue,Se,re.width,re.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,re.width,re.height,Fe,be,re.data)):t.texImage2D(s.TEXTURE_2D,0,Se,re.width,re.height,0,Fe,be,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Je&&tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Se,Ce[0].width,Ce[0].height,re.depth);for(let z=0,A=Ce.length;z<A;z++)ye=Ce[z],y.format!==Jt?Fe!==null?Je?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,z,0,0,0,ye.width,ye.height,re.depth,Fe,ye.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,z,Se,ye.width,ye.height,re.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage3D(s.TEXTURE_2D_ARRAY,z,0,0,0,ye.width,ye.height,re.depth,Fe,be,ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,z,Se,ye.width,ye.height,re.depth,0,Fe,be,ye.data)}else{Je&&tt&&t.texStorage2D(s.TEXTURE_2D,Ue,Se,Ce[0].width,Ce[0].height);for(let z=0,A=Ce.length;z<A;z++)ye=Ce[z],y.format!==Jt?Fe!==null?Je?t.compressedTexSubImage2D(s.TEXTURE_2D,z,0,0,ye.width,ye.height,Fe,ye.data):t.compressedTexImage2D(s.TEXTURE_2D,z,Se,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage2D(s.TEXTURE_2D,z,0,0,ye.width,ye.height,Fe,be,ye.data):t.texImage2D(s.TEXTURE_2D,z,Se,ye.width,ye.height,0,Fe,be,ye.data)}else if(y.isDataArrayTexture)Je?(tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Se,re.width,re.height,re.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Fe,be,re.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Se,re.width,re.height,re.depth,0,Fe,be,re.data);else if(y.isData3DTexture)Je?(tt&&t.texStorage3D(s.TEXTURE_3D,Ue,Se,re.width,re.height,re.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Fe,be,re.data)):t.texImage3D(s.TEXTURE_3D,0,Se,re.width,re.height,re.depth,0,Fe,be,re.data);else if(y.isFramebufferTexture){if(tt)if(Je)t.texStorage2D(s.TEXTURE_2D,Ue,Se,re.width,re.height);else{let z=re.width,A=re.height;for(let se=0;se<Ue;se++)t.texImage2D(s.TEXTURE_2D,se,Se,z,A,0,Fe,be,null),z>>=1,A>>=1}}else if(Ce.length>0&&Ke){Je&&tt&&t.texStorage2D(s.TEXTURE_2D,Ue,Se,Ce[0].width,Ce[0].height);for(let z=0,A=Ce.length;z<A;z++)ye=Ce[z],Je?t.texSubImage2D(s.TEXTURE_2D,z,0,0,Fe,be,ye):t.texImage2D(s.TEXTURE_2D,z,Se,Fe,be,ye);y.generateMipmaps=!1}else Je?(tt&&t.texStorage2D(s.TEXTURE_2D,Ue,Se,re.width,re.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,be,re)):t.texImage2D(s.TEXTURE_2D,0,Se,Fe,be,re);E(y,Ke)&&x($),le.__version=ne.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function fe(T,y,I){if(y.image.length!==6)return;const $=K(T,y),J=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+I);const ne=n.get(J);if(J.version!==ne.__version||$===!0){t.activeTexture(s.TEXTURE0+I);const le=Ze.getPrimaries(Ze.workingColorSpace),ie=y.colorSpace===Zt?null:Ze.getPrimaries(y.colorSpace),ue=y.colorSpace===Zt||le===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const _e=y.isCompressedTexture||y.image[0].isCompressedTexture,Re=y.image[0]&&y.image[0].isDataTexture,re=[];for(let z=0;z<6;z++)!_e&&!Re?re[z]=v(y.image[z],!1,!0,i.maxCubemapSize):re[z]=Re?y.image[z].image:y.image[z],re[z]=Pe(y,re[z]);const Ke=re[0],Fe=f(Ke)||a,be=r.convert(y.format,y.colorSpace),Se=r.convert(y.type),ye=w(y.internalFormat,be,Se,y.colorSpace),Ce=a&&y.isVideoTexture!==!0,Je=ne.__version===void 0||$===!0;let tt=L(y,Ke,Fe);N(s.TEXTURE_CUBE_MAP,y,Fe);let Ue;if(_e){Ce&&Je&&t.texStorage2D(s.TEXTURE_CUBE_MAP,tt,ye,Ke.width,Ke.height);for(let z=0;z<6;z++){Ue=re[z].mipmaps;for(let A=0;A<Ue.length;A++){const se=Ue[A];y.format!==Jt?be!==null?Ce?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,A,0,0,se.width,se.height,be,se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,A,ye,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,A,0,0,se.width,se.height,be,Se,se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,A,ye,se.width,se.height,0,be,Se,se.data)}}}else{Ue=y.mipmaps,Ce&&Je&&(Ue.length>0&&tt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,tt,ye,re[0].width,re[0].height));for(let z=0;z<6;z++)if(Re){Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,re[z].width,re[z].height,be,Se,re[z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,ye,re[z].width,re[z].height,0,be,Se,re[z].data);for(let A=0;A<Ue.length;A++){const he=Ue[A].image[z].image;Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,A+1,0,0,he.width,he.height,be,Se,he.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,A+1,ye,he.width,he.height,0,be,Se,he.data)}}else{Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,be,Se,re[z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,ye,be,Se,re[z]);for(let A=0;A<Ue.length;A++){const se=Ue[A];Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,A+1,0,0,be,Se,se.image[z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,A+1,ye,be,Se,se.image[z])}}}E(y,Fe)&&x(s.TEXTURE_CUBE_MAP),ne.__version=J.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function me(T,y,I,$,J,ne){const le=r.convert(I.format,I.colorSpace),ie=r.convert(I.type),ue=w(I.internalFormat,le,ie,I.colorSpace);if(!n.get(y).__hasExternalTextures){const Re=Math.max(1,y.width>>ne),re=Math.max(1,y.height>>ne);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,ne,ue,Re,re,y.depth,0,le,ie,null):t.texImage2D(J,ne,ue,Re,re,0,le,ie,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),xe(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,J,n.get(I).__webglTexture,0,De(y)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,J,n.get(I).__webglTexture,ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(T,y,I){if(s.bindRenderbuffer(s.RENDERBUFFER,T),y.depthBuffer&&!y.stencilBuffer){let $=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(I||xe(y)){const J=y.depthTexture;J&&J.isDepthTexture&&(J.type===Mn?$=s.DEPTH_COMPONENT32F:J.type===Bn&&($=s.DEPTH_COMPONENT24));const ne=De(y);xe(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,$,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,$,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,$,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,T)}else if(y.depthBuffer&&y.stencilBuffer){const $=De(y);I&&xe(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$,s.DEPTH24_STENCIL8,y.width,y.height):xe(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,T)}else{const $=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let J=0;J<$.length;J++){const ne=$[J],le=r.convert(ne.format,ne.colorSpace),ie=r.convert(ne.type),ue=w(ne.internalFormat,le,ie,ne.colorSpace),_e=De(y);I&&xe(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,ue,y.width,y.height):xe(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,ue,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ue,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ce(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),U(y.depthTexture,0);const $=n.get(y.depthTexture).__webglTexture,J=De(y);if(y.depthTexture.format===oi)xe(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(y.depthTexture.format===Ni)xe(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function de(T){const y=n.get(T),I=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");ce(y.__webglFramebuffer,T)}else if(I){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]=s.createRenderbuffer(),ge(y.__webglDepthbuffer[$],T,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),ge(y.__webglDepthbuffer,T,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Te(T,y,I){const $=n.get(T);y!==void 0&&me($.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),I!==void 0&&de(T)}function k(T){const y=T.texture,I=n.get(T),$=n.get(y);T.addEventListener("dispose",j),T.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=y.version,o.memory.textures++);const J=T.isWebGLCubeRenderTarget===!0,ne=T.isWebGLMultipleRenderTargets===!0,le=f(T)||a;if(J){I.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(a&&y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer[ie]=[];for(let ue=0;ue<y.mipmaps.length;ue++)I.__webglFramebuffer[ie][ue]=s.createFramebuffer()}else I.__webglFramebuffer[ie]=s.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer=[];for(let ie=0;ie<y.mipmaps.length;ie++)I.__webglFramebuffer[ie]=s.createFramebuffer()}else I.__webglFramebuffer=s.createFramebuffer();if(ne)if(i.drawBuffers){const ie=T.texture;for(let ue=0,_e=ie.length;ue<_e;ue++){const Re=n.get(ie[ue]);Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&xe(T)===!1){const ie=ne?y:[y];I.__webglMultisampledFramebuffer=s.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ue=0;ue<ie.length;ue++){const _e=ie[ue];I.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,I.__webglColorRenderbuffer[ue]);const Re=r.convert(_e.format,_e.colorSpace),re=r.convert(_e.type),Ke=w(_e.internalFormat,Re,re,_e.colorSpace,T.isXRRenderTarget===!0),Fe=De(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,Ke,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,I.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=s.createRenderbuffer(),ge(I.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),N(s.TEXTURE_CUBE_MAP,y,le);for(let ie=0;ie<6;ie++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)me(I.__webglFramebuffer[ie][ue],T,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ue);else me(I.__webglFramebuffer[ie],T,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);E(y,le)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const ie=T.texture;for(let ue=0,_e=ie.length;ue<_e;ue++){const Re=ie[ue],re=n.get(Re);t.bindTexture(s.TEXTURE_2D,re.__webglTexture),N(s.TEXTURE_2D,Re,le),me(I.__webglFramebuffer,T,Re,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),E(Re,le)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let ie=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?ie=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ie,$.__webglTexture),N(ie,y,le),a&&y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)me(I.__webglFramebuffer[ue],T,y,s.COLOR_ATTACHMENT0,ie,ue);else me(I.__webglFramebuffer,T,y,s.COLOR_ATTACHMENT0,ie,0);E(y,le)&&x(ie),t.unbindTexture()}T.depthBuffer&&de(T)}function dt(T){const y=f(T)||a,I=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let $=0,J=I.length;$<J;$++){const ne=I[$];if(E(ne,y)){const le=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ie=n.get(ne).__webglTexture;t.bindTexture(le,ie),x(le),t.unbindTexture()}}}function Ee(T){if(a&&T.samples>0&&xe(T)===!1){const y=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],I=T.width,$=T.height;let J=s.COLOR_BUFFER_BIT;const ne=[],le=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=n.get(T),ue=T.isWebGLMultipleRenderTargets===!0;if(ue)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){ne.push(s.COLOR_ATTACHMENT0+_e),T.depthBuffer&&ne.push(le);const Re=ie.__ignoreDepthValues!==void 0?ie.__ignoreDepthValues:!1;if(Re===!1&&(T.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),ue&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ie.__webglColorRenderbuffer[_e]),Re===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[le]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[le])),ue){const re=n.get(y[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,re,0)}s.blitFramebuffer(0,0,I,$,0,0,I,$,J,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,ie.__webglColorRenderbuffer[_e]);const Re=n.get(y[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,Re,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}}function De(T){return Math.min(i.maxSamples,T.samples)}function xe(T){const y=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function it(T){const y=o.render.frame;u.get(T)!==y&&(u.set(T,y),T.update())}function Pe(T,y){const I=T.colorSpace,$=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Bo||I!==St&&I!==Zt&&(Ze.getTransfer(I)===at?a===!1?e.has("EXT_sRGB")===!0&&$===Jt?(T.format=Bo,T.minFilter=Gt,T.generateMipmaps=!1):y=jc.sRGBToLinear(y):($!==Jt||J!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),y}this.allocateTextureUnit=P,this.resetTextureUnits=ae,this.setTexture2D=U,this.setTexture2DArray=te,this.setTexture3D=F,this.setTextureCube=V,this.rebindTextures=Te,this.setupRenderTarget=k,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=me,this.useMultisampledRTT=xe}function X0(s,e,t){const n=t.isWebGL2;function i(r,o=Zt){let a;const l=Ze.getTransfer(o);if(r===Fn)return s.UNSIGNED_BYTE;if(r===ic)return s.UNSIGNED_SHORT_4_4_4_4;if(r===sc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Gf)return s.BYTE;if(r===Wf)return s.SHORT;if(r===wo)return s.UNSIGNED_SHORT;if(r===nc)return s.INT;if(r===Bn)return s.UNSIGNED_INT;if(r===Mn)return s.FLOAT;if(r===Ts)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===jf)return s.ALPHA;if(r===Jt)return s.RGBA;if(r===Xf)return s.LUMINANCE;if(r===qf)return s.LUMINANCE_ALPHA;if(r===oi)return s.DEPTH_COMPONENT;if(r===Ni)return s.DEPTH_STENCIL;if(r===Bo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===$f)return s.RED;if(r===rc)return s.RED_INTEGER;if(r===Yf)return s.RG;if(r===oc)return s.RG_INTEGER;if(r===ac)return s.RGBA_INTEGER;if(r===Ro||r===Co||r===Lo||r===Po)if(l===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ro)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Po)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ro)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Co)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Lo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Po)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lc||r===cc||r===uc||r===dc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===lc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===uc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===dc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===fc||r===pc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===fc)return l===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===pc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===mc||r===gc||r===_c||r===vc||r===yc||r===xc||r===Ec||r===Sc||r===Mc||r===Ac||r===Tc||r===bc||r===wc||r===Rc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===mc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_c)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ec)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ac)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Tc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Io||r===Cc||r===Lc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Io)return l===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Cc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Kf||r===Pc||r===Ic||r===Dc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Io)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Pc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ic)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Dc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ri?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class q0 extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yi extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $0={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,n),p=this._getHandJoint(c,v);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Y0 extends li{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,g=null;const v=t.getContextAttributes();let f=null,p=null;const E=[],x=[],w=new qe;let L=null;const R=new Ot;R.layers.enable(1),R.viewport=new ot;const C=new Ot;C.layers.enable(2),C.viewport=new ot;const j=[R,C],S=new q0;S.layers.enable(1),S.layers.enable(2);let b=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let K=E[N];return K===void 0&&(K=new fa,E[N]=K),K.getTargetRaySpace()},this.getControllerGrip=function(N){let K=E[N];return K===void 0&&(K=new fa,E[N]=K),K.getGripSpace()},this.getHand=function(N){let K=E[N];return K===void 0&&(K=new fa,E[N]=K),K.getHandSpace()};function Z(N){const K=x.indexOf(N.inputSource);if(K===-1)return;const oe=E[K];oe!==void 0&&(oe.update(N.inputSource,N.frame,c||o),oe.dispatchEvent({type:N.type,data:N.inputSource}))}function ae(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",ae),i.removeEventListener("inputsourceschange",P);for(let N=0;N<E.length;N++){const K=x[N];K!==null&&(x[N]=null,E[N].disconnect(K))}b=null,H=null,e.setRenderTarget(f),m=null,h=null,d=null,i=null,p=null,X.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",ae),i.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new ci(m.framebufferWidth,m.framebufferHeight,{format:Jt,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let K=null,oe=null,fe=null;v.depth&&(fe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=v.stencil?Ni:oi,oe=v.stencil?ri:Bn);const me={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};d=new XRWebGLBinding(i,t),h=d.createProjectionLayer(me),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),p=new ci(h.textureWidth,h.textureHeight,{format:Jt,type:Fn,depthTexture:new Su(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const ge=e.properties.get(p);ge.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),X.setContext(i),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(N){for(let K=0;K<N.removed.length;K++){const oe=N.removed[K],fe=x.indexOf(oe);fe>=0&&(x[fe]=null,E[fe].disconnect(oe))}for(let K=0;K<N.added.length;K++){const oe=N.added[K];let fe=x.indexOf(oe);if(fe===-1){for(let ge=0;ge<E.length;ge++)if(ge>=x.length){x.push(oe),fe=ge;break}else if(x[ge]===null){x[ge]=oe,fe=ge;break}if(fe===-1)break}const me=E[fe];me&&me.connect(oe)}}const D=new O,U=new O;function te(N,K,oe){D.setFromMatrixPosition(K.matrixWorld),U.setFromMatrixPosition(oe.matrixWorld);const fe=D.distanceTo(U),me=K.projectionMatrix.elements,ge=oe.projectionMatrix.elements,ce=me[14]/(me[10]-1),de=me[14]/(me[10]+1),Te=(me[9]+1)/me[5],k=(me[9]-1)/me[5],dt=(me[8]-1)/me[0],Ee=(ge[8]+1)/ge[0],De=ce*dt,xe=ce*Ee,it=fe/(-dt+Ee),Pe=it*-dt;K.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Pe),N.translateZ(it),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const T=ce+it,y=de+it,I=De-Pe,$=xe+(fe-Pe),J=Te*de/y*T,ne=k*de/y*T;N.projectionMatrix.makePerspective(I,$,J,ne,T,y),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function F(N,K){K===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(K.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;S.near=C.near=R.near=N.near,S.far=C.far=R.far=N.far,(b!==S.near||H!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,H=S.far);const K=N.parent,oe=S.cameras;F(S,K);for(let fe=0;fe<oe.length;fe++)F(oe[fe],K);oe.length===2?te(S,R,C):S.projectionMatrix.copy(R.projectionMatrix),V(N,S,K)};function V(N,K,oe){oe===null?N.matrix.copy(K.matrixWorld):(N.matrix.copy(oe.matrixWorld),N.matrix.invert(),N.matrix.multiply(K.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(K.projectionMatrix),N.projectionMatrixInverse.copy(K.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Vi*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(N){l=N,h!==null&&(h.fixedFoveation=N),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=N)};let ee=null;function G(N,K){if(u=K.getViewerPose(c||o),g=K,u!==null){const oe=u.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let fe=!1;oe.length!==S.cameras.length&&(S.cameras.length=0,fe=!0);for(let me=0;me<oe.length;me++){const ge=oe[me];let ce=null;if(m!==null)ce=m.getViewport(ge);else{const Te=d.getViewSubImage(h,ge);ce=Te.viewport,me===0&&(e.setRenderTargetTextures(p,Te.colorTexture,h.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(p))}let de=j[me];de===void 0&&(de=new Ot,de.layers.enable(me),de.viewport=new ot,j[me]=de),de.matrix.fromArray(ge.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(ge.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(ce.x,ce.y,ce.width,ce.height),me===0&&(S.matrix.copy(de.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),fe===!0&&S.cameras.push(de)}}for(let oe=0;oe<E.length;oe++){const fe=x[oe],me=E[oe];fe!==null&&me!==void 0&&me.update(fe,K,c||o)}ee&&ee(N,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const X=new pu;X.setAnimationLoop(G),this.setAnimationLoop=function(N){ee=N},this.dispose=function(){}}}function K0(s,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,du(s)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,E,x,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),d(f,p)):p.isMeshPhongMaterial?(r(f,p),u(f,p)):p.isMeshStandardMaterial?(r(f,p),h(f,p),p.isMeshPhysicalMaterial&&m(f,p,w)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),v(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?l(f,p,E,x):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Ht&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Ht&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const E=e.get(p).envMap;if(E&&(f.envMap.value=E,f.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,E,x){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*E,f.scale.value=x*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,E){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=E.texture,f.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function v(f,p){const E=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(E.matrixWorld),f.nearDistance.value=E.shadow.camera.near,f.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function J0(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,x){const w=x.program;n.uniformBlockBinding(E,w)}function c(E,x){let w=i[E.id];w===void 0&&(g(E),w=u(E),i[E.id]=w,E.addEventListener("dispose",f));const L=x.program;n.updateUBOMapping(E,L);const R=e.render.frame;r[E.id]!==R&&(h(E),r[E.id]=R)}function u(E){const x=d();E.__bindingPointIndex=x;const w=s.createBuffer(),L=E.__size,R=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,L,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,w),w}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const x=i[E.id],w=E.uniforms,L=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let R=0,C=w.length;R<C;R++){const j=Array.isArray(w[R])?w[R]:[w[R]];for(let S=0,b=j.length;S<b;S++){const H=j[S];if(m(H,R,S,L)===!0){const Z=H.__offset,ae=Array.isArray(H.value)?H.value:[H.value];let P=0;for(let D=0;D<ae.length;D++){const U=ae[D],te=v(U);typeof U=="number"||typeof U=="boolean"?(H.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,Z+P,H.__data)):U.isMatrix3?(H.__data[0]=U.elements[0],H.__data[1]=U.elements[1],H.__data[2]=U.elements[2],H.__data[3]=0,H.__data[4]=U.elements[3],H.__data[5]=U.elements[4],H.__data[6]=U.elements[5],H.__data[7]=0,H.__data[8]=U.elements[6],H.__data[9]=U.elements[7],H.__data[10]=U.elements[8],H.__data[11]=0):(U.toArray(H.__data,P),P+=te.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(E,x,w,L){const R=E.value,C=x+"_"+w;if(L[C]===void 0)return typeof R=="number"||typeof R=="boolean"?L[C]=R:L[C]=R.clone(),!0;{const j=L[C];if(typeof R=="number"||typeof R=="boolean"){if(j!==R)return L[C]=R,!0}else if(j.equals(R)===!1)return j.copy(R),!0}return!1}function g(E){const x=E.uniforms;let w=0;const L=16;for(let C=0,j=x.length;C<j;C++){const S=Array.isArray(x[C])?x[C]:[x[C]];for(let b=0,H=S.length;b<H;b++){const Z=S[b],ae=Array.isArray(Z.value)?Z.value:[Z.value];for(let P=0,D=ae.length;P<D;P++){const U=ae[P],te=v(U),F=w%L;F!==0&&L-F<te.boundary&&(w+=L-F),Z.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=w,w+=te.storage}}}const R=w%L;return R>0&&(w+=L-R),E.__size=w,E.__cache={},this}function v(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function f(E){const x=E.target;x.removeEventListener("dispose",f);const w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Gu{constructor(e={}){const{canvas:t=wp(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,f=null;const p=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=lt,this._useLegacyLights=!1,this.toneMapping=On,this.toneMappingExposure=1;const x=this;let w=!1,L=0,R=0,C=null,j=-1,S=null;const b=new ot,H=new ot;let Z=null;const ae=new Ne(0);let P=0,D=t.width,U=t.height,te=1,F=null,V=null;const ee=new ot(0,0,D,U),G=new ot(0,0,D,U);let X=!1;const N=new sa;let K=!1,oe=!1,fe=null;const me=new je,ge=new qe,ce=new O,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Te(){return C===null?te:1}let k=n;function dt(M,B){for(let Y=0;Y<M.length;Y++){const Q=M[Y],q=t.getContext(Q,B);if(q!==null)return q}return null}try{const M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Eo}`),t.addEventListener("webglcontextlost",z,!1),t.addEventListener("webglcontextrestored",A,!1),t.addEventListener("webglcontextcreationerror",se,!1),k===null){const B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),k=dt(B,M),k===null)throw dt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ee,De,xe,it,Pe,T,y,I,$,J,ne,le,ie,ue,_e,Re,re,Ke,Fe,be,Se,ye,Ce,Je;function tt(){Ee=new a_(k),De=new t_(k,Ee,e),Ee.init(De),ye=new X0(k,Ee,De),xe=new W0(k,Ee,De),it=new u_(k),Pe=new L0,T=new j0(k,Ee,xe,Pe,De,ye,it),y=new i_(x),I=new o_(x),$=new Zp(k,De),Ce=new Qg(k,Ee,$,De),J=new l_(k,$,it,Ce),ne=new p_(k,J,$,it),Fe=new f_(k,De,T),Re=new n_(Pe),le=new C0(x,y,I,Ee,De,Ce,Re),ie=new K0(x,Pe),ue=new I0,_e=new B0(Ee,De),Ke=new Zg(x,y,I,xe,ne,h,l),re=new G0(x,ne,De),Je=new J0(k,it,De,xe),be=new e_(k,Ee,it,De),Se=new c_(k,Ee,it,De),it.programs=le.programs,x.capabilities=De,x.extensions=Ee,x.properties=Pe,x.renderLists=ue,x.shadowMap=re,x.state=xe,x.info=it}tt();const Ue=new Y0(x,k);this.xr=Ue,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const M=Ee.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ee.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(M){M!==void 0&&(te=M,this.setSize(D,U,!1))},this.getSize=function(M){return M.set(D,U)},this.setSize=function(M,B,Y=!0){if(Ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=M,U=B,t.width=Math.floor(M*te),t.height=Math.floor(B*te),Y===!0&&(t.style.width=M+"px",t.style.height=B+"px"),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(D*te,U*te).floor()},this.setDrawingBufferSize=function(M,B,Y){D=M,U=B,te=Y,t.width=Math.floor(M*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,M,B)},this.getCurrentViewport=function(M){return M.copy(b)},this.getViewport=function(M){return M.copy(ee)},this.setViewport=function(M,B,Y,Q){M.isVector4?ee.set(M.x,M.y,M.z,M.w):ee.set(M,B,Y,Q),xe.viewport(b.copy(ee).multiplyScalar(te).floor())},this.getScissor=function(M){return M.copy(G)},this.setScissor=function(M,B,Y,Q){M.isVector4?G.set(M.x,M.y,M.z,M.w):G.set(M,B,Y,Q),xe.scissor(H.copy(G).multiplyScalar(te).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(M){xe.setScissorTest(X=M)},this.setOpaqueSort=function(M){F=M},this.setTransparentSort=function(M){V=M},this.getClearColor=function(M){return M.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(M=!0,B=!0,Y=!0){let Q=0;if(M){let q=!1;if(C!==null){const ve=C.texture.format;q=ve===ac||ve===oc||ve===rc}if(q){const ve=C.texture.type,Me=ve===Fn||ve===Bn||ve===wo||ve===ri||ve===ic||ve===sc,Ie=Ke.getClearColor(),Oe=Ke.getClearAlpha(),He=Ie.r,Be=Ie.g,ke=Ie.b;Me?(m[0]=He,m[1]=Be,m[2]=ke,m[3]=Oe,k.clearBufferuiv(k.COLOR,0,m)):(g[0]=He,g[1]=Be,g[2]=ke,g[3]=Oe,k.clearBufferiv(k.COLOR,0,g))}else Q|=k.COLOR_BUFFER_BIT}B&&(Q|=k.DEPTH_BUFFER_BIT),Y&&(Q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",z,!1),t.removeEventListener("webglcontextrestored",A,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ue.dispose(),_e.dispose(),Pe.dispose(),y.dispose(),I.dispose(),ne.dispose(),Ce.dispose(),Je.dispose(),le.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",At),Ue.removeEventListener("sessionend",rt),fe&&(fe.dispose(),fe=null),Rt.stop()};function z(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function A(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const M=it.autoReset,B=re.enabled,Y=re.autoUpdate,Q=re.needsUpdate,q=re.type;tt(),it.autoReset=M,re.enabled=B,re.autoUpdate=Y,re.needsUpdate=Q,re.type=q}function se(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function he(M){const B=M.target;B.removeEventListener("dispose",he),we(B)}function we(M){Ae(M),Pe.remove(M)}function Ae(M){const B=Pe.get(M).programs;B!==void 0&&(B.forEach(function(Y){le.releaseProgram(Y)}),M.isShaderMaterial&&le.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,Y,Q,q,ve){B===null&&(B=de);const Me=q.isMesh&&q.matrixWorld.determinant()<0,Ie=oo(M,B,Y,Q,q);xe.setMaterial(Q,Me);let Oe=Y.index,He=1;if(Q.wireframe===!0){if(Oe=J.getWireframeAttribute(Y),Oe===void 0)return;He=2}const Be=Y.drawRange,ke=Y.attributes.position;let _t=Be.start*He,$t=(Be.start+Be.count)*He;ve!==null&&(_t=Math.max(_t,ve.start*He),$t=Math.min($t,(ve.start+ve.count)*He)),Oe!==null?(_t=Math.max(_t,0),$t=Math.min($t,Oe.count)):ke!=null&&(_t=Math.max(_t,0),$t=Math.min($t,ke.count));const Tt=$t-_t;if(Tt<0||Tt===1/0)return;Ce.setup(q,Q,Ie,Y,Oe);let Nn,ft=be;if(Oe!==null&&(Nn=$.get(Oe),ft=Se,ft.setIndex(Nn)),q.isMesh)Q.wireframe===!0?(xe.setLineWidth(Q.wireframeLinewidth*Te()),ft.setMode(k.LINES)):ft.setMode(k.TRIANGLES);else if(q.isLine){let Xe=Q.linewidth;Xe===void 0&&(Xe=1),xe.setLineWidth(Xe*Te()),q.isLineSegments?ft.setMode(k.LINES):q.isLineLoop?ft.setMode(k.LINE_LOOP):ft.setMode(k.LINE_STRIP)}else q.isPoints?ft.setMode(k.POINTS):q.isSprite&&ft.setMode(k.TRIANGLES);if(q.isBatchedMesh)ft.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)ft.renderInstances(_t,Tt,q.count);else if(Y.isInstancedBufferGeometry){const Xe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ja=Math.min(Y.instanceCount,Xe);ft.renderInstances(_t,Tt,ja)}else ft.render(_t,Tt)};function et(M,B,Y){M.transparent===!0&&M.side===hn&&M.forceSinglePass===!1?(M.side=Ht,M.needsUpdate=!0,Ti(M,B,Y),M.side=Sn,M.needsUpdate=!0,Ti(M,B,Y),M.side=hn):Ti(M,B,Y)}this.compile=function(M,B,Y=null){Y===null&&(Y=M),f=_e.get(Y),f.init(),E.push(f),Y.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(f.pushLight(q),q.castShadow&&f.pushShadow(q))}),M!==Y&&M.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(f.pushLight(q),q.castShadow&&f.pushShadow(q))}),f.setupLights(x._useLegacyLights);const Q=new Set;return M.traverse(function(q){const ve=q.material;if(ve)if(Array.isArray(ve))for(let Me=0;Me<ve.length;Me++){const Ie=ve[Me];et(Ie,Y,q),Q.add(Ie)}else et(ve,Y,q),Q.add(ve)}),E.pop(),f=null,Q},this.compileAsync=function(M,B,Y=null){const Q=this.compile(M,B,Y);return new Promise(q=>{function ve(){if(Q.forEach(function(Me){Pe.get(Me).currentProgram.isReady()&&Q.delete(Me)}),Q.size===0){q(M);return}setTimeout(ve,10)}Ee.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let st=null;function gt(M){st&&st(M)}function At(){Rt.stop()}function rt(){Rt.start()}const Rt=new pu;Rt.setAnimationLoop(gt),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(M){st=M,Ue.setAnimationLoop(M),M===null?Rt.stop():Rt.start()},Ue.addEventListener("sessionstart",At),Ue.addEventListener("sessionend",rt),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(B),B=Ue.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,B,C),f=_e.get(M,E.length),f.init(),E.push(f),me.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),N.setFromProjectionMatrix(me),oe=this.localClippingEnabled,K=Re.init(this.clippingPlanes,oe),v=ue.get(M,p.length),v.init(),p.push(v),Vt(M,B,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(F,V),this.info.render.frame++,K===!0&&Re.beginShadows();const Y=f.state.shadowsArray;if(re.render(Y,M,B),K===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ke.render(v,M),f.setupLights(x._useLegacyLights),B.isArrayCamera){const Q=B.cameras;for(let q=0,ve=Q.length;q<ve;q++){const Me=Q[q];qs(v,M,Me,Me.viewport)}}else qs(v,M,B);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(x,M,B),Ce.resetDefaultState(),j=-1,S=null,E.pop(),E.length>0?f=E[E.length-1]:f=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Vt(M,B,Y,Q){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||N.intersectsSprite(M)){Q&&ce.setFromMatrixPosition(M.matrixWorld).applyMatrix4(me);const Me=ne.update(M),Ie=M.material;Ie.visible&&v.push(M,Me,Ie,Y,ce.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||N.intersectsObject(M))){const Me=ne.update(M),Ie=M.material;if(Q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ce.copy(M.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ce.copy(Me.boundingSphere.center)),ce.applyMatrix4(M.matrixWorld).applyMatrix4(me)),Array.isArray(Ie)){const Oe=Me.groups;for(let He=0,Be=Oe.length;He<Be;He++){const ke=Oe[He],_t=Ie[ke.materialIndex];_t&&_t.visible&&v.push(M,Me,_t,Y,ce.z,ke)}}else Ie.visible&&v.push(M,Me,Ie,Y,ce.z,null)}}const ve=M.children;for(let Me=0,Ie=ve.length;Me<Ie;Me++)Vt(ve[Me],B,Y,Q)}function qs(M,B,Y,Q){const q=M.opaque,ve=M.transmissive,Me=M.transparent;f.setupLightsView(Y),K===!0&&Re.setGlobalState(x.clippingPlanes,Y),ve.length>0&&$s(q,ve,B,Y),Q&&xe.viewport(b.copy(Q)),q.length>0&&Ai(q,B,Y),ve.length>0&&Ai(ve,B,Y),Me.length>0&&Ai(Me,B,Y),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function $s(M,B,Y,Q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const ve=De.isWebGL2;fe===null&&(fe=new ci(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Ts:Fn,minFilter:si,samples:ve?4:0})),x.getDrawingBufferSize(ge),ve?fe.setSize(ge.x,ge.y):fe.setSize(vr(ge.x),vr(ge.y));const Me=x.getRenderTarget();x.setRenderTarget(fe),x.getClearColor(ae),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const Ie=x.toneMapping;x.toneMapping=On,Ai(M,Y,Q),T.updateMultisampleRenderTarget(fe),T.updateRenderTargetMipmap(fe);let Oe=!1;for(let He=0,Be=B.length;He<Be;He++){const ke=B[He],_t=ke.object,$t=ke.geometry,Tt=ke.material,Nn=ke.group;if(Tt.side===hn&&_t.layers.test(Q.layers)){const ft=Tt.side;Tt.side=Ht,Tt.needsUpdate=!0,ms(_t,Y,Q,$t,Tt,Nn),Tt.side=ft,Tt.needsUpdate=!0,Oe=!0}}Oe===!0&&(T.updateMultisampleRenderTarget(fe),T.updateRenderTargetMipmap(fe)),x.setRenderTarget(Me),x.setClearColor(ae,P),x.toneMapping=Ie}function Ai(M,B,Y){const Q=B.isScene===!0?B.overrideMaterial:null;for(let q=0,ve=M.length;q<ve;q++){const Me=M[q],Ie=Me.object,Oe=Me.geometry,He=Q===null?Me.material:Q,Be=Me.group;Ie.layers.test(Y.layers)&&ms(Ie,B,Y,Oe,He,Be)}}function ms(M,B,Y,Q,q,ve){M.onBeforeRender(x,B,Y,Q,q,ve),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),q.onBeforeRender(x,B,Y,Q,M,ve),q.transparent===!0&&q.side===hn&&q.forceSinglePass===!1?(q.side=Ht,q.needsUpdate=!0,x.renderBufferDirect(Y,B,Q,q,M,ve),q.side=Sn,q.needsUpdate=!0,x.renderBufferDirect(Y,B,Q,q,M,ve),q.side=hn):x.renderBufferDirect(Y,B,Q,q,M,ve),M.onAfterRender(x,B,Y,Q,q,ve)}function Ti(M,B,Y){B.isScene!==!0&&(B=de);const Q=Pe.get(M),q=f.state.lights,ve=f.state.shadowsArray,Me=q.state.version,Ie=le.getParameters(M,q.state,ve,B,Y),Oe=le.getProgramCacheKey(Ie);let He=Q.programs;Q.environment=M.isMeshStandardMaterial?B.environment:null,Q.fog=B.fog,Q.envMap=(M.isMeshStandardMaterial?I:y).get(M.envMap||Q.environment),He===void 0&&(M.addEventListener("dispose",he),He=new Map,Q.programs=He);let Be=He.get(Oe);if(Be!==void 0){if(Q.currentProgram===Be&&Q.lightsStateVersion===Me)return gs(M,Ie),Be}else Ie.uniforms=le.getUniforms(M),M.onBuild(Y,Ie,x),M.onBeforeCompile(Ie,x),Be=le.acquireProgram(Ie,Oe),He.set(Oe,Be),Q.uniforms=Ie.uniforms;const ke=Q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ke.clippingPlanes=Re.uniform),gs(M,Ie),Q.needsLights=ht(M),Q.lightsStateVersion=Me,Q.needsLights&&(ke.ambientLightColor.value=q.state.ambient,ke.lightProbe.value=q.state.probe,ke.directionalLights.value=q.state.directional,ke.directionalLightShadows.value=q.state.directionalShadow,ke.spotLights.value=q.state.spot,ke.spotLightShadows.value=q.state.spotShadow,ke.rectAreaLights.value=q.state.rectArea,ke.ltc_1.value=q.state.rectAreaLTC1,ke.ltc_2.value=q.state.rectAreaLTC2,ke.pointLights.value=q.state.point,ke.pointLightShadows.value=q.state.pointShadow,ke.hemisphereLights.value=q.state.hemi,ke.directionalShadowMap.value=q.state.directionalShadowMap,ke.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ke.spotShadowMap.value=q.state.spotShadowMap,ke.spotLightMatrix.value=q.state.spotLightMatrix,ke.spotLightMap.value=q.state.spotLightMap,ke.pointShadowMap.value=q.state.pointShadowMap,ke.pointShadowMatrix.value=q.state.pointShadowMatrix),Q.currentProgram=Be,Q.uniformsList=null,Be}function ro(M){if(M.uniformsList===null){const B=M.currentProgram.getUniforms();M.uniformsList=Wr.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function gs(M,B){const Y=Pe.get(M);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function oo(M,B,Y,Q,q){B.isScene!==!0&&(B=de),T.resetTextureUnits();const ve=B.fog,Me=Q.isMeshStandardMaterial?B.environment:null,Ie=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:St,Oe=(Q.isMeshStandardMaterial?I:y).get(Q.envMap||Me),He=Q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Be=!!Y.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ke=!!Y.morphAttributes.position,_t=!!Y.morphAttributes.normal,$t=!!Y.morphAttributes.color;let Tt=On;Q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Tt=x.toneMapping);const Nn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ft=Nn!==void 0?Nn.length:0,Xe=Pe.get(Q),ja=f.state.lights;if(K===!0&&(oe===!0||M!==S)){const nn=M===S&&Q.id===j;Re.setState(Q,M,nn)}let mt=!1;Q.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==ja.state.version||Xe.outputColorSpace!==Ie||q.isBatchedMesh&&Xe.batching===!1||!q.isBatchedMesh&&Xe.batching===!0||q.isInstancedMesh&&Xe.instancing===!1||!q.isInstancedMesh&&Xe.instancing===!0||q.isSkinnedMesh&&Xe.skinning===!1||!q.isSkinnedMesh&&Xe.skinning===!0||q.isInstancedMesh&&Xe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Xe.instancingColor===!1&&q.instanceColor!==null||Xe.envMap!==Oe||Q.fog===!0&&Xe.fog!==ve||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Re.numPlanes||Xe.numIntersection!==Re.numIntersection)||Xe.vertexAlphas!==He||Xe.vertexTangents!==Be||Xe.morphTargets!==ke||Xe.morphNormals!==_t||Xe.morphColors!==$t||Xe.toneMapping!==Tt||De.isWebGL2===!0&&Xe.morphTargetsCount!==ft)&&(mt=!0):(mt=!0,Xe.__version=Q.version);let bi=Xe.currentProgram;mt===!0&&(bi=Ti(Q,B,q));let Nd=!1,Ys=!1,Xa=!1;const Dt=bi.getUniforms(),wi=Xe.uniforms;if(xe.useProgram(bi.program)&&(Nd=!0,Ys=!0,Xa=!0),Q.id!==j&&(j=Q.id,Ys=!0),Nd||S!==M){Dt.setValue(k,"projectionMatrix",M.projectionMatrix),Dt.setValue(k,"viewMatrix",M.matrixWorldInverse);const nn=Dt.map.cameraPosition;nn!==void 0&&nn.setValue(k,ce.setFromMatrixPosition(M.matrixWorld)),De.logarithmicDepthBuffer&&Dt.setValue(k,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Dt.setValue(k,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Ys=!0,Xa=!0)}if(q.isSkinnedMesh){Dt.setOptional(k,q,"bindMatrix"),Dt.setOptional(k,q,"bindMatrixInverse");const nn=q.skeleton;nn&&(De.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),Dt.setValue(k,"boneTexture",nn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(Dt.setOptional(k,q,"batchingTexture"),Dt.setValue(k,"batchingTexture",q._matricesTexture,T));const qa=Y.morphAttributes;if((qa.position!==void 0||qa.normal!==void 0||qa.color!==void 0&&De.isWebGL2===!0)&&Fe.update(q,Y,bi),(Ys||Xe.receiveShadow!==q.receiveShadow)&&(Xe.receiveShadow=q.receiveShadow,Dt.setValue(k,"receiveShadow",q.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(wi.envMap.value=Oe,wi.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Ys&&(Dt.setValue(k,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&Wa(wi,Xa),ve&&Q.fog===!0&&ie.refreshFogUniforms(wi,ve),ie.refreshMaterialUniforms(wi,Q,te,U,fe),Wr.upload(k,ro(Xe),wi,T)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Wr.upload(k,ro(Xe),wi,T),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Dt.setValue(k,"center",q.center),Dt.setValue(k,"modelViewMatrix",q.modelViewMatrix),Dt.setValue(k,"normalMatrix",q.normalMatrix),Dt.setValue(k,"modelMatrix",q.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const nn=Q.uniformsGroups;for(let $a=0,Gx=nn.length;$a<Gx;$a++)if(De.isWebGL2){const Ud=nn[$a];Je.update(Ud,bi),Je.bind(Ud,bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bi}function Wa(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function ht(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,B,Y){Pe.get(M.texture).__webglTexture=B,Pe.get(M.depthTexture).__webglTexture=Y;const Q=Pe.get(M);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=Y===void 0,Q.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,B){const Y=Pe.get(M);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(M,B=0,Y=0){C=M,L=B,R=Y;let Q=!0,q=null,ve=!1,Me=!1;if(M){const Oe=Pe.get(M);Oe.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(k.FRAMEBUFFER,null),Q=!1):Oe.__webglFramebuffer===void 0?T.setupRenderTarget(M):Oe.__hasExternalTextures&&T.rebindTextures(M,Pe.get(M.texture).__webglTexture,Pe.get(M.depthTexture).__webglTexture);const He=M.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Me=!0);const Be=Pe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[B])?q=Be[B][Y]:q=Be[B],ve=!0):De.isWebGL2&&M.samples>0&&T.useMultisampledRTT(M)===!1?q=Pe.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?q=Be[Y]:q=Be,b.copy(M.viewport),H.copy(M.scissor),Z=M.scissorTest}else b.copy(ee).multiplyScalar(te).floor(),H.copy(G).multiplyScalar(te).floor(),Z=X;if(xe.bindFramebuffer(k.FRAMEBUFFER,q)&&De.drawBuffers&&Q&&xe.drawBuffers(M,q),xe.viewport(b),xe.scissor(H),xe.setScissorTest(Z),ve){const Oe=Pe.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,Oe.__webglTexture,Y)}else if(Me){const Oe=Pe.get(M.texture),He=B||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Oe.__webglTexture,Y||0,He)}j=-1},this.readRenderTargetPixels=function(M,B,Y,Q,q,ve,Me){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Pe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Ie=Ie[Me]),Ie){xe.bindFramebuffer(k.FRAMEBUFFER,Ie);try{const Oe=M.texture,He=Oe.format,Be=Oe.type;if(He!==Jt&&ye.convert(He)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Be===Ts&&(Ee.has("EXT_color_buffer_half_float")||De.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Be!==Fn&&ye.convert(Be)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===Mn&&(De.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-Q&&Y>=0&&Y<=M.height-q&&k.readPixels(B,Y,Q,q,ye.convert(He),ye.convert(Be),ve)}finally{const Oe=C!==null?Pe.get(C).__webglFramebuffer:null;xe.bindFramebuffer(k.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(M,B,Y=0){const Q=Math.pow(2,-Y),q=Math.floor(B.image.width*Q),ve=Math.floor(B.image.height*Q);T.setTexture2D(B,0),k.copyTexSubImage2D(k.TEXTURE_2D,Y,0,0,M.x,M.y,q,ve),xe.unbindTexture()},this.copyTextureToTexture=function(M,B,Y,Q=0){const q=B.image.width,ve=B.image.height,Me=ye.convert(Y.format),Ie=ye.convert(Y.type);T.setTexture2D(Y,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment),B.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Q,M.x,M.y,q,ve,Me,Ie,B.image.data):B.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Q,M.x,M.y,B.mipmaps[0].width,B.mipmaps[0].height,Me,B.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,Q,M.x,M.y,Me,Ie,B.image),Q===0&&Y.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(M,B,Y,Q,q=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=M.max.x-M.min.x+1,Me=M.max.y-M.min.y+1,Ie=M.max.z-M.min.z+1,Oe=ye.convert(Q.format),He=ye.convert(Q.type);let Be;if(Q.isData3DTexture)T.setTexture3D(Q,0),Be=k.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)T.setTexture2DArray(Q,0),Be=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Q.unpackAlignment);const ke=k.getParameter(k.UNPACK_ROW_LENGTH),_t=k.getParameter(k.UNPACK_IMAGE_HEIGHT),$t=k.getParameter(k.UNPACK_SKIP_PIXELS),Tt=k.getParameter(k.UNPACK_SKIP_ROWS),Nn=k.getParameter(k.UNPACK_SKIP_IMAGES),ft=Y.isCompressedTexture?Y.mipmaps[q]:Y.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ft.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ft.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,M.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,M.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,M.min.z),Y.isDataTexture||Y.isData3DTexture?k.texSubImage3D(Be,q,B.x,B.y,B.z,ve,Me,Ie,Oe,He,ft.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Be,q,B.x,B.y,B.z,ve,Me,Ie,Oe,ft.data)):k.texSubImage3D(Be,q,B.x,B.y,B.z,ve,Me,Ie,Oe,He,ft),k.pixelStorei(k.UNPACK_ROW_LENGTH,ke),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_t),k.pixelStorei(k.UNPACK_SKIP_PIXELS,$t),k.pixelStorei(k.UNPACK_SKIP_ROWS,Tt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Nn),q===0&&Q.generateMipmaps&&k.generateMipmap(Be),xe.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?T.setTextureCube(M,0):M.isData3DTexture?T.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?T.setTexture2DArray(M,0):T.setTexture2D(M,0),xe.unbindTexture()},this.resetState=function(){L=0,R=0,C=null,xe.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Oo?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===fr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===lt?ai:Uc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ai?lt:St}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Z0 extends Gu{}Z0.prototype.isWebGL1Renderer=!0;class Q0 extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ev{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ft=new O;class pa{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Wu=new O,ju=new ot,Xu=new ot,tv=new O,qu=new je,jr=new O,ma=new pn,$u=new je,ga=new Tr;class nv extends Ve{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ql,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jr),this.boundingBox.expandByPoint(jr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jr),this.boundingSphere.expandByPoint(jr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(i),e.ray.intersectsSphere(ma)!==!1&&($u.copy(i).invert(),ga.copy(e.ray).applyMatrix4($u),!(this.boundingBox!==null&&ga.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ga)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ql?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ju.fromBufferAttribute(i.attributes.skinIndex,e),Xu.fromBufferAttribute(i.attributes.skinWeight,e),Wu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Xu.getComponent(r);if(o!==0){const a=ju.getComponent(r);qu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(tv.copy(Wu).applyMatrix4(qu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Yu extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class iv extends bt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Et,u=Et,d,h){super(null,o,a,l,c,u,i,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ku=new je,sv=new je;class _a{constructor(e=[],t=[]){this.uuid=rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:sv;Ku.multiplyMatrices(a,t[r]),Ku.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new _a(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new iv(t,e,e,Jt,Mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Yu),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class va extends Nt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const os=new je,Ju=new je,Xr=[],Zu=new Tn,rv=new je,Us=new Ve,Os=new pn;class ov extends Ve{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new va(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,rv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),Zu.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(Zu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),Os.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(Os)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(n),e.ray.intersectsSphere(Os)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,os),Ju.multiplyMatrices(n,os),Us.matrixWorld=Ju,Us.raycast(e,Xr);for(let o=0,a=Xr.length;o<a;o++){const l=Xr[o];l.instanceId=r,l.object=this,t.push(l)}Xr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new va(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Qu extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ed=new O,td=new O,nd=new je,ya=new Tr,qr=new pn;class xa extends ct{constructor(e=new dn,t=new Qu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ed.fromBufferAttribute(t,i-1),td.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ed.distanceTo(td);e.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(i),qr.radius+=r,e.ray.intersectsSphere(qr)===!1)return;nd.copy(i).invert(),ya.copy(e.ray).applyMatrix4(nd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,u=new O,d=new O,h=new O,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),E=Math.min(g.count,o.start+o.count);for(let x=p,w=E-1;x<w;x+=m){const L=g.getX(x),R=g.getX(x+1);if(c.fromBufferAttribute(f,L),u.fromBufferAttribute(f,R),ya.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const j=e.ray.origin.distanceTo(h);j<e.near||j>e.far||t.push({distance:j,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),E=Math.min(f.count,o.start+o.count);for(let x=p,w=E-1;x<w;x+=m){if(c.fromBufferAttribute(f,x),u.fromBufferAttribute(f,x+1),ya.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||t.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const id=new O,sd=new O;class av extends xa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)id.fromBufferAttribute(t,i),sd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+id.distanceTo(sd);e.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lv extends xa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class rd extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const od=new je,Ea=new Tr,$r=new pn,Yr=new O;class cv extends ct{constructor(e=new dn,t=new rd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),$r.radius+=r,e.ray.intersectsSphere($r)===!1)return;od.copy(i).invert(),Ea.copy(e.ray).applyMatrix4(od);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=h,v=m;g<v;g++){const f=c.getX(g);Yr.fromBufferAttribute(d,f),ad(Yr,f,l,i,e,t,this)}}else{const h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=h,v=m;g<v;g++)Yr.fromBufferAttribute(d,g),ad(Yr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ad(s,e,t,n,i,r,o){const a=Ea.distanceSqToPoint(s);if(a<t){const l=new O;Ea.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Kr extends dn{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],d=[],h=[],m=[];let g=0;const v=[],f=n/2;let p=0;E(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(m,2));function E(){const w=new O,L=new O;let R=0;const C=(t-e)/n;for(let j=0;j<=r;j++){const S=[],b=j/r,H=b*(t-e)+e;for(let Z=0;Z<=i;Z++){const ae=Z/i,P=ae*l+a,D=Math.sin(P),U=Math.cos(P);L.x=H*D,L.y=-b*n+f,L.z=H*U,d.push(L.x,L.y,L.z),w.set(D,C,U).normalize(),h.push(w.x,w.y,w.z),m.push(ae,1-b),S.push(g++)}v.push(S)}for(let j=0;j<i;j++)for(let S=0;S<r;S++){const b=v[S][j],H=v[S+1][j],Z=v[S+1][j+1],ae=v[S][j+1];u.push(b,H,ae),u.push(H,Z,ae),R+=6}c.addGroup(p,R,0),p+=R}function x(w){const L=g,R=new qe,C=new O;let j=0;const S=w===!0?e:t,b=w===!0?1:-1;for(let Z=1;Z<=i;Z++)d.push(0,f*b,0),h.push(0,b,0),m.push(.5,.5),g++;const H=g;for(let Z=0;Z<=i;Z++){const P=Z/i*l+a,D=Math.cos(P),U=Math.sin(P);C.x=S*U,C.y=f*b,C.z=S*D,d.push(C.x,C.y,C.z),h.push(0,b,0),R.x=D*.5+.5,R.y=U*.5*b+.5,m.push(R.x,R.y),g++}for(let Z=0;Z<i;Z++){const ae=L+Z,P=H+Z;w===!0?u.push(P,P+1,ae):u.push(P+1,P,ae),j+=3}c.addGroup(p,j,w===!0?1:2),p+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bt extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oc,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pn extends Bt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Jr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function uv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function dv(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ld(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function cd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Fs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class hv extends Fs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oi,endingEnd:Oi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fi:r=e,a=2*t-n;break;case hr:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fi:o=e,l=2*n-t;break;case hr:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),v=g*g,f=v*g,p=-h*f+2*h*v-h*g,E=(1+h)*f+(-1.5-2*h)*v+(-.5+h)*g+1,x=(-1-m)*f+(1.5+m)*v+.5*g,w=m*f-m*v;for(let L=0;L!==a;++L)r[L]=p*o[u+L]+E*o[c+L]+x*o[l+L]+w*o[d+L];return r}}class ud extends Fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}}class fv extends Fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class _n{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jr(t,this.TimeBufferType),this.values=Jr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Jr(e.times,Array),values:Jr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ud(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bs:t=this.InterpolantFactoryMethodDiscrete;break;case Ui:t=this.InterpolantFactoryMethodLinear;break;case Do:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bs;case this.InterpolantFactoryMethodLinear:return Ui;case this.InterpolantFactoryMethodSmooth:return Do}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&uv(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Do,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const d=a*n,h=d-n,m=d+n;for(let g=0;g!==n;++g){const v=t[d+g];if(v!==t[h+g]||v!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,h=o*n;for(let m=0;m!==n;++m)t[h+m]=t[d+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}_n.prototype.TimeBufferType=Float32Array,_n.prototype.ValueBufferType=Float32Array,_n.prototype.DefaultInterpolation=Ui;class as extends _n{}as.prototype.ValueTypeName="bool",as.prototype.ValueBufferType=Array,as.prototype.DefaultInterpolation=bs,as.prototype.InterpolantFactoryMethodLinear=void 0,as.prototype.InterpolantFactoryMethodSmooth=void 0;class dd extends _n{}dd.prototype.ValueTypeName="color";class ls extends _n{}ls.prototype.ValueTypeName="number";class pv extends Fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)on.slerpFlat(r,0,o,c-a,o,c,l);return r}}class xi extends _n{InterpolantFactoryMethodLinear(e){return new pv(this.times,this.values,this.getValueSize(),e)}}xi.prototype.ValueTypeName="quaternion",xi.prototype.DefaultInterpolation=Ui,xi.prototype.InterpolantFactoryMethodSmooth=void 0;class cs extends _n{}cs.prototype.ValueTypeName="string",cs.prototype.ValueBufferType=Array,cs.prototype.DefaultInterpolation=bs,cs.prototype.InterpolantFactoryMethodLinear=void 0,cs.prototype.InterpolantFactoryMethodSmooth=void 0;class us extends _n{}us.prototype.ValueTypeName="vector";class Sa{constructor(e,t=-1,n,i=No){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=rn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(gv(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(_n.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=dv(l);l=ld(l,1,u),c=ld(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ls(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,m,g,v){if(m.length!==0){const f=[],p=[];cd(m,f,p,g),f.length!==0&&v.push(new d(h,f,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const m={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let v=0;v<h[g].morphTargets.length;v++)m[h[g].morphTargets[v]]=-1;for(const v in m){const f=[],p=[];for(let E=0;E!==h[g].morphTargets.length;++E){const x=h[g];f.push(x.time),p.push(x.morphTarget===v?1:0)}i.push(new ls(".morphTargetInfluence["+v+"]",f,p))}l=m.length*o}else{const m=".bones["+t[d].name+"]";n(us,m+".position",h,"pos",i),n(xi,m+".quaternion",h,"rot",i),n(us,m+".scale",h,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function mv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ls;case"vector":case"vector2":case"vector3":case"vector4":return us;case"color":return dd;case"quaternion":return xi;case"bool":case"boolean":return as;case"string":return cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function gv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=mv(s.type);if(s.times===void 0){const t=[],n=[];cd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const jn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class _v{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const vv=new _v;class ds{constructor(e){this.manager=e!==void 0?e:vv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ds.DEFAULT_MATERIAL_NAME="__DEFAULT";const In={};class yv extends Error{constructor(e,t){super(e),this.response=t}}class hd extends ds{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=jn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(In[e]!==void 0){In[e].push({onLoad:t,onProgress:n,onError:i});return}In[e]=[],In[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=In[e],d=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=h?parseInt(h):0,g=m!==0;let v=0;const f=new ReadableStream({start(p){E();function E(){d.read().then(({done:x,value:w})=>{if(x)p.close();else{v+=w.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:m});for(let R=0,C=u.length;R<C;R++){const j=u[R];j.onProgress&&j.onProgress(L)}p.enqueue(w),E()}})}}});return new Response(f)}else throw new yv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(h);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{jn.add(e,c);const u=In[e];delete In[e];for(let d=0,h=u.length;d<h;d++){const m=u[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=In[e];if(u===void 0)throw this.manager.itemError(e),c;delete In[e];for(let d=0,h=u.length;d<h;d++){const m=u[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class xv extends ds{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=jn.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Cs("img");function l(){u(),jn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Ev extends ds{constructor(e){super(e)}load(e,t,n,i){const r=new bt,o=new xv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Zr extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ma=new je,fd=new O,pd=new O;class Aa{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sa,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fd.setFromMatrixPosition(e.matrixWorld),t.position.copy(fd),pd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pd),t.updateMatrixWorld(),Ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sv extends Aa{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Vi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class md extends Zr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Sv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const gd=new je,Bs=new O,Ta=new O;class Mv extends Aa{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Bs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Bs),Ta.copy(n.position),Ta.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ta),n.updateMatrixWorld(),i.makeTranslation(-Bs.x,-Bs.y,-Bs.z),gd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gd)}}class Vs extends Zr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Mv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Av extends Aa{constructor(){super(new ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ba extends Zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new Av}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Tv extends Zr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ks{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class bv extends ds{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=jn.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return jn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),jn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});jn.add(e,l),r.manager.itemStart(e)}}class wv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_d(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=_d();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function _d(){return(typeof performance>"u"?Date:performance).now()}class Rv{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){on.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;on.multiplyQuaternionsFlat(e,o,e,t,e,n),on.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const wa="\\[\\]\\.:\\/",Cv=new RegExp("["+wa+"]","g"),Ra="[^"+wa+"]",Lv="[^"+wa.replace("\\.","")+"]",Pv=/((?:WC+[\/:])*)/.source.replace("WC",Ra),Iv=/(WCOD+)?/.source.replace("WCOD",Lv),Dv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ra),Nv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ra),Uv=new RegExp("^"+Pv+Iv+Dv+Nv+"$"),Ov=["material","materials","bones","map"];class Fv{constructor(e,t,n){const i=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cv,"")}static parseTrackName(e){const t=Uv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Ov.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=Fv,Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray],Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Bv{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Oi,endingEnd:Oi};for(let c=0;c!==o;++c){const u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Zf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ep:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case No:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Qf;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Jf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Fi,i.endingEnd=Fi):(e?i.endingStart=this.zeroSlopeAtStart?Fi:Oi:i.endingStart=hr,t?i.endingEnd=this.zeroSlopeAtEnd?Fi:Oi:i.endingEnd=hr)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const Vv=new Float32Array(1);class Ca extends li{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==r;++d){const h=i[d],m=h.name;let g=u[m];if(g!==void 0)++g.referenceCount,o[d]=g;else{if(g=o[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,m));continue}const v=t&&t._propertyBindings[d].binding.parsedPath;g=new Rv(Qe.create(n,m,v),h.ValueTypeName,h.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,m),o[d]=g}a[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const d=a.actionByRoot,h=(e._localRoot||this._root).uuid;delete d[h],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new ud(new Float32Array(2),new Float32Array(2),1,Vv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?Sa.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=No),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new Bv(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Sa.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eo}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eo);function vd(s,e){if(e===tp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Uo||e===Nc){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Uo)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class La extends ds{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Wv(t)}),this.register(function(t){return new Qv(t)}),this.register(function(t){return new ey(t)}),this.register(function(t){return new ty(t)}),this.register(function(t){return new Xv(t)}),this.register(function(t){return new qv(t)}),this.register(function(t){return new $v(t)}),this.register(function(t){return new Yv(t)}),this.register(function(t){return new Gv(t)}),this.register(function(t){return new Kv(t)}),this.register(function(t){return new jv(t)}),this.register(function(t){return new Zv(t)}),this.register(function(t){return new Jv(t)}),this.register(function(t){return new zv(t)}),this.register(function(t){return new ny(t)}),this.register(function(t){return new iy(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ks.extractUrlBase(e);o=ks.resolveURL(c,this.path)}else o=ks.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new hd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===yd){try{o[$e.KHR_BINARY_GLTF]=new sy(e)}catch(d){i&&i(d);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new _y(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const d=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(d){case $e.KHR_MATERIALS_UNLIT:o[d]=new Hv;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[d]=new ry(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[d]=new oy;break;case $e.KHR_MESH_QUANTIZATION:o[d]=new ay;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function kv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class zv{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ne(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],St);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ba(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Vs(u),c.distance=d;break;case"spot":c=new md(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,qn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Hv{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return hi}extendParams(e,t,n){const i=[];e.color=new Ne(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],St),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,lt))}return Promise.all(i)}}class Gv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Wv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new qe(a,a)}return Promise.all(r)}}class jv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Xv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],St)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,lt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class qv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class $v{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(a[0],a[1],a[2],St),Promise.all(r)}}class Yv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Kv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(a[0],a[1],a[2],St),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,lt)),Promise.all(r)}}class Jv{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Zv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Qv{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class ey{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ty{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ny{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,d=i.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,h,i.mode,i.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(m),u,d,h,i.mode,i.filter),m})})}else return null}}class iy{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==tn.TRIANGLES&&c.mode!==tn.TRIANGLE_STRIP&&c.mode!==tn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,m=[];for(const g of d){const v=new je,f=new O,p=new on,E=new O(1,1,1),x=new ov(g.geometry,g.material,h);for(let w=0;w<h;w++)l.TRANSLATION&&f.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,w),l.SCALE&&E.fromBufferAttribute(l.SCALE,w),x.setMatrixAt(w,v.compose(f,p,E));for(const w in l)if(w==="_COLOR_0"){const L=l[w];x.instanceColor=new va(L.array,L.itemSize,L.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&g.geometry.setAttribute(w,l[w]);ct.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),m.push(x)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}}const yd="glTF",zs=12,xd={JSON:1313821514,BIN:5130562};class sy{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,zs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==yd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-zs,r=new DataView(e,zs);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===xd.JSON){const c=new Uint8Array(e,zs+o,a);this.content=n.decode(c)}else if(l===xd.BIN){const c=zs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ry{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=Ia[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=Ia[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],m=hs[h.componentType];c[d]=m.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,h){i.decodeDracoFile(u,function(m){for(const g in m.attributes){const v=m.attributes[g],f=l[g];f!==void 0&&(v.normalized=f)}d(m)},a,c,St,h)})})}}class oy{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ay{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class Ed extends Fs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,d=(n-t)/u,h=d*d,m=h*d,g=e*c,v=g-c,f=-2*m+3*h,p=m-h,E=1-f,x=p-h+d;for(let w=0;w!==a;w++){const L=o[v+w+a],R=o[v+w+l]*u,C=o[g+w+a],j=o[g+w]*u;r[w]=E*L+x*R+f*C+p*j}return r}}const ly=new on;class cy extends Ed{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return ly.fromArray(r).normalize().toArray(r),r}}const tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sd={9728:Et,9729:Gt,9984:bo,9985:tc,9986:dr,9987:si},Md={33071:Kt,33648:ur,10497:Di},Pa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ia={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uy={CUBICSPLINE:void 0,LINEAR:Ui,STEP:bs},Da={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Bt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Sn})),s.DefaultMaterial}function Ei(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function qn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function hy(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(h)}if(i){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(h)}if(r){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=h),s.morphTargetsRelative=!0,s})}function fy(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function py(s){let e;const t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Na(t.attributes):e=s.indices+":"+Na(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Na(s.targets[n]);return e}function Na(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ua(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function my(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const gy=new je;class _y{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new kv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Ev(this.options.manager):this.textureLoader=new bv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ei(r,a,i),qn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(ks.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Pa[i.type],a=hs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Nt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Pa[i.type],c=hs[i.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,f;if(m&&m!==d){const p=Math.floor(h/m),E="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(E);x||(v=new c(a,p*m,i.count*m/u),x=new ev(v,m/u),t.cache.add(E,x)),f=new pa(x,l,h%m/u,g)}else a===null?v=new c(i.count*l):v=new c(a,h,i.count*l),f=new Nt(v,l,g);if(i.sparse!==void 0){const p=Pa.SCALAR,E=hs[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,w=i.sparse.values.byteOffset||0,L=new E(o[1],x,i.sparse.count*p),R=new c(o[2],w,i.sparse.count*l);a!==null&&(f=new Nt(f.array.slice(),f.itemSize,f.normalized));for(let C=0,j=L.length;C<j;C++){const S=L[C];if(f.setX(S,R[C*l]),l>=2&&f.setY(S,R[C*l+1]),l>=3&&f.setZ(S,R[C*l+2]),l>=4&&f.setW(S,R[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(r.samplers||{})[o.sampler]||{};return u.magFilter=Sd[h.magFilter]||Gt,u.minFilter=Sd[h.minFilter]||si,u.wrapS=Md[h.wrapS]||Di,u.wrapT=Md[h.wrapT]||Di,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,m){let g=h;t.isImageBitmapLoader===!0&&(g=function(v){const f=new bt(v);f.needsUpdate=!0,h(f)}),t.load(ks.resolveURL(d,r.path),g,void 0,m)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),d.userData.mimeType=o.mimeType||my(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new rd,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Qu,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Bt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const d=i[$e.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],St),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,lt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=hn);const u=r.alphaMode||Da.OPAQUE;if(u===Da.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Da.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==hi&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new qe(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==hi&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==hi){const d=r.emissiveFactor;a.emissive=new Ne().setRGB(d[0],d[1],d[2],St)}return r.emissiveTexture!==void 0&&o!==hi&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,lt)),Promise.all(c).then(function(){const d=new o(a);return r.name&&(d.name=r.name),qn(d,r),t.associations.set(d,{materials:e}),r.extensions&&Ei(i,d,r),d})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ad(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=py(c),d=i[u];if(d)o.push(d.promise);else{let h;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=Ad(new dn,c,t),i[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?dy(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let m=0,g=u.length;m<g;m++){const v=u[m],f=o[m];let p;const E=c[m];if(f.mode===tn.TRIANGLES||f.mode===tn.TRIANGLE_STRIP||f.mode===tn.TRIANGLE_FAN||f.mode===void 0)p=r.isSkinnedMesh===!0?new nv(v,E):new Ve(v,E),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),f.mode===tn.TRIANGLE_STRIP?p.geometry=vd(p.geometry,Nc):f.mode===tn.TRIANGLE_FAN&&(p.geometry=vd(p.geometry,Uo));else if(f.mode===tn.LINES)p=new av(v,E);else if(f.mode===tn.LINE_STRIP)p=new xa(v,E);else if(f.mode===tn.LINE_LOOP)p=new lv(v,E);else if(f.mode===tn.POINTS)p=new cv(v,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(p.geometry.morphAttributes).length>0&&fy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),qn(p,r),f.extensions&&Ei(i,p,f),t.assignFinalMaterial(p),d.push(p)}for(let m=0,g=d.length;m<g;m++)t.associations.set(d[m],{meshes:e,primitives:m});if(d.length===1)return r.extensions&&Ei(i,d[0],r),d[0];const h=new yi;r.extensions&&Ei(i,h,r),t.associations.set(h,{meshes:e});for(let m=0,g=d.length;m<g;m++)h.add(d[m]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ot(bp.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ra(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),qn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const h=new je;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new _a(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,h=i.channels.length;d<h;d++){const m=i.channels[d],g=i.samplers[m.sampler],v=m.target,f=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,E=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",f)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",E)),c.push(g),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],m=d[1],g=d[2],v=d[3],f=d[4],p=[];for(let E=0,x=h.length;E<x;E++){const w=h[E],L=m[E],R=g[E],C=v[E],j=f[E];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const S=n._createAnimationTracks(w,L,R,C,j);if(S)for(let b=0;b<S.length;b++)p.push(S[b])}return new Sa(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(h,gy)});for(let m=0,g=d.length;m<g;m++)u.add(d[m]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Yu:c.length>1?u=new yi:c.length===1?u=c[0]:u=new ct,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=o),qn(u,r),r.extensions&&Ei(n,u,r),r.matrix!==void 0){const d=new je;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new yi;n.name&&(r.name=i.createUniqueName(n.name)),qn(r,n),n.extensions&&Ei(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);const c=u=>{const d=new Map;for(const[h,m]of i.associations)(h instanceof mn||h instanceof bt)&&d.set(h,m);return u.traverse(h=>{const m=i.associations.get(h);m!=null&&d.set(h,m)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Xn[r.path]===Xn.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(Xn[r.path]){case Xn.weights:c=ls;break;case Xn.rotation:c=xi;break;case Xn.position:case Xn.scale:c=us;break;default:switch(n.itemSize){case 1:c=ls;break;case 2:case 3:default:c=us;break}break}const u=i.interpolation!==void 0?uy[i.interpolation]:Ui,d=this._getArrayFromAccessor(n);for(let h=0,m=l.length;h<m;h++){const g=new c(l[h]+"."+Xn[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ua(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof xi?cy:Ed;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function vy(s,e,t){const n=e.attributes,i=new Tn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),a.normalized){const u=Ua(hs[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new O,l=new O;for(let c=0,u=r.length;c<u;c++){const d=r[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],m=h.min,g=h.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),h.normalized){const v=Ua(hs[h.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new pn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Ad(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Ia[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Ze.workingColorSpace!==St&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),qn(s,e),vy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?hy(s,e.targets,t):s})}const Hs={idle:{type:"idle",name:"Idle",duration:4,loop:!0,easing:"ease-in-out",keyframes:[{time:0,body:{lean:{x:0,z:0}},head:{rotation:{x:0,y:0,z:0}}},{time:.5,body:{lean:{x:.01,z:0}},head:{rotation:{x:.02,y:.01,z:0}}},{time:1,body:{lean:{x:0,z:0}},head:{rotation:{x:0,y:0,z:0}}}]},explain:{type:"explain",name:"Explain",duration:2,loop:!1,easing:"ease-in-out",keyframes:[{time:0,leftArm:{shoulderRotation:{x:0,y:0,z:0},elbowRotation:{x:0,y:0,z:0}},rightArm:{shoulderRotation:{x:0,y:0,z:0},elbowRotation:{x:0,y:0,z:0}}},{time:.3,leftArm:{shoulderRotation:{x:-.3,y:.2,z:0},elbowRotation:{x:.5,y:0,z:0}},rightArm:{shoulderRotation:{x:-.4,y:-.2,z:0},elbowRotation:{x:.6,y:0,z:0}}},{time:.7,leftArm:{shoulderRotation:{x:-.4,y:.3,z:0},elbowRotation:{x:.4,y:0,z:0}},rightArm:{shoulderRotation:{x:-.3,y:-.3,z:0},elbowRotation:{x:.5,y:0,z:0}}},{time:1,leftArm:{shoulderRotation:{x:0,y:0,z:0},elbowRotation:{x:0,y:0,z:0}},rightArm:{shoulderRotation:{x:0,y:0,z:0},elbowRotation:{x:0,y:0,z:0}}}]},emphasize:{type:"emphasize",name:"Emphasize",duration:1.5,loop:!1,easing:"ease-out",keyframes:[{time:0,rightArm:{shoulderRotation:{x:0,y:0,z:0},elbowRotation:{x:0,y:0,z:0}},head:{rotation:{x:0,y:0,z:0}}},{time:.2,rightArm:{shoulderRotation:{x:-.5,y:0,z:0},elbowRotation:{x:.8,y:0,z:0}},head:{rotation:{x:.05,y:0,z:0}}},{time:.4,rightArm:{shoulderRotation:{x:-.6,y:0,z:0},elbowRotation:{x:.6,y:0,z:0}},head:{rotation:{x:-.05,y:0,z:0}}},{time:1,rightArm:{shoulderRotation:{x:0,y:0,z:0},elbowRotation:{x:0,y:0,z:0}},head:{rotation:{x:0,y:0,z:0}}}]},point:{type:"point",name:"Point",duration:2,loop:!1,easing:"ease-in-out",keyframes:[{time:0,rightArm:{shoulderRotation:{x:0,y:0,z:0},elbowRotation:{x:0,y:0,z:0}}},{time:.3,rightArm:{shoulderRotation:{x:-.8,y:.3,z:0},elbowRotation:{x:.2,y:0,z:0}}},{time:.7,rightArm:{shoulderRotation:{x:-.8,y:.3,z:0},elbowRotation:{x:.2,y:0,z:0}}},{time:1,rightArm:{shoulderRotation:{x:0,y:0,z:0},elbowRotation:{x:0,y:0,z:0}}}]},wave:{type:"wave",name:"Wave",duration:2,loop:!1,easing:"ease-in-out",keyframes:[{time:0,rightArm:{shoulderRotation:{x:0,y:0,z:0},wristRotation:{x:0,y:0,z:0}}},{time:.2,rightArm:{shoulderRotation:{x:-1.2,y:.5,z:0},wristRotation:{x:0,y:0,z:.3}}},{time:.4,rightArm:{shoulderRotation:{x:-1.2,y:.5,z:0},wristRotation:{x:0,y:0,z:-.3}}},{time:.6,rightArm:{shoulderRotation:{x:-1.2,y:.5,z:0},wristRotation:{x:0,y:0,z:.3}}},{time:.8,rightArm:{shoulderRotation:{x:-1.2,y:.5,z:0},wristRotation:{x:0,y:0,z:-.3}}},{time:1,rightArm:{shoulderRotation:{x:0,y:0,z:0},wristRotation:{x:0,y:0,z:0}}}]},think:{type:"think",name:"Think",duration:3,loop:!1,easing:"ease-in-out",keyframes:[{time:0,rightArm:{shoulderRotation:{x:0,y:0,z:0},elbowRotation:{x:0,y:0,z:0}},head:{rotation:{x:0,y:0,z:0}}},{time:.3,rightArm:{shoulderRotation:{x:-.3,y:.8,z:0},elbowRotation:{x:1.5,y:0,z:0}},head:{rotation:{x:.1,y:.1,z:.05}}},{time:.7,rightArm:{shoulderRotation:{x:-.3,y:.8,z:0},elbowRotation:{x:1.5,y:0,z:0}},head:{rotation:{x:.1,y:-.1,z:-.05}}},{time:1,rightArm:{shoulderRotation:{x:0,y:0,z:0},elbowRotation:{x:0,y:0,z:0}},head:{rotation:{x:0,y:0,z:0}}}]},nod:{type:"nod",name:"Nod",duration:1,loop:!1,easing:"ease-in-out",keyframes:[{time:0,head:{rotation:{x:0,y:0,z:0}}},{time:.25,head:{rotation:{x:.15,y:0,z:0}}},{time:.5,head:{rotation:{x:-.05,y:0,z:0}}},{time:.75,head:{rotation:{x:.1,y:0,z:0}}},{time:1,head:{rotation:{x:0,y:0,z:0}}}]},shrug:{type:"shrug",name:"Shrug",duration:1.5,loop:!1,easing:"ease-in-out",keyframes:[{time:0,leftArm:{shoulderRotation:{x:0,y:0,z:0}},rightArm:{shoulderRotation:{x:0,y:0,z:0}},head:{rotation:{x:0,y:0,z:0}}},{time:.3,leftArm:{shoulderRotation:{x:0,y:0,z:-.3}},rightArm:{shoulderRotation:{x:0,y:0,z:.3}},head:{rotation:{x:0,y:0,z:.05}}},{time:.6,leftArm:{shoulderRotation:{x:0,y:0,z:-.3}},rightArm:{shoulderRotation:{x:0,y:0,z:.3}},head:{rotation:{x:0,y:0,z:-.05}}},{time:1,leftArm:{shoulderRotation:{x:0,y:0,z:0}},rightArm:{shoulderRotation:{x:0,y:0,z:0}},head:{rotation:{x:0,y:0,z:0}}}]}};function yy(s){return Hs[s]}function Td(s,e){if(s.length===0)return{time:0};if(s.length===1)return s[0];let t=s[0],n=s[s.length-1];for(let r=0;r<s.length-1;r++)if(e>=s[r].time&&e<=s[r+1].time){t=s[r],n=s[r+1];break}const i=(e-t.time)/(n.time-t.time);return xy(t,n,i)}function xy(s,e,t){const n={time:s.time+(e.time-s.time)*t};return(s.leftArm||e.leftArm)&&(n.leftArm=bd(s.leftArm,e.leftArm,t)),(s.rightArm||e.rightArm)&&(n.rightArm=bd(s.rightArm,e.rightArm,t)),(s.head||e.head)&&(n.head=Ey(s.head,e.head,t)),(s.body||e.body)&&(n.body=Sy(s.body,e.body,t)),n}function bd(s,e,t){const n={x:0,y:0,z:0};return{shoulderRotation:Gs((s==null?void 0:s.shoulderRotation)||n,(e==null?void 0:e.shoulderRotation)||n,t),elbowRotation:Gs((s==null?void 0:s.elbowRotation)||n,(e==null?void 0:e.elbowRotation)||n,t),wristRotation:Gs((s==null?void 0:s.wristRotation)||n,(e==null?void 0:e.wristRotation)||n,t)}}function Ey(s,e,t){var n,i,r,o,a,l;return{rotation:Gs((s==null?void 0:s.rotation)||{x:0,y:0,z:0},(e==null?void 0:e.rotation)||{x:0,y:0,z:0},t),eyeLookAt:{x:(((n=s==null?void 0:s.eyeLookAt)==null?void 0:n.x)||0)+((((i=e==null?void 0:e.eyeLookAt)==null?void 0:i.x)||0)-(((r=s==null?void 0:s.eyeLookAt)==null?void 0:r.x)||0))*t,y:(((o=s==null?void 0:s.eyeLookAt)==null?void 0:o.y)||0)+((((a=e==null?void 0:e.eyeLookAt)==null?void 0:a.y)||0)-(((l=s==null?void 0:s.eyeLookAt)==null?void 0:l.y)||0))*t}}}function Sy(s,e,t){var n,i,r,o,a,l;return{rotation:Gs((s==null?void 0:s.rotation)||{x:0,y:0,z:0},(e==null?void 0:e.rotation)||{x:0,y:0,z:0},t),lean:{x:(((n=s==null?void 0:s.lean)==null?void 0:n.x)||0)+((((i=e==null?void 0:e.lean)==null?void 0:i.x)||0)-(((r=s==null?void 0:s.lean)==null?void 0:r.x)||0))*t,z:(((o=s==null?void 0:s.lean)==null?void 0:o.z)||0)+((((a=e==null?void 0:e.lean)==null?void 0:a.z)||0)-(((l=s==null?void 0:s.lean)==null?void 0:l.z)||0))*t}}}function Gs(s,e,t){return{x:s.x+(e.x-s.x)*t,y:s.y+(e.y-s.y)*t,z:s.z+(e.z-s.z)*t}}const vn=_.ref({currentGesture:"idle",intensity:0,progress:0}),yn=_.ref([]),$n=_.ref(!1);let Qr=null,wd=0;function Oa(){const s=_.computed(()=>vn.value.currentGesture),e=_.computed(()=>vn.value.intensity),t=_.computed(()=>vn.value.progress),n=_.computed(()=>$n.value);function i(d,h=1){const m=Hs[d];m&&(yn.value.push({time:0,type:d,intensity:Math.min(1,Math.max(0,h)),duration:m.duration}),$n.value||o())}function r(d){yn.value=[...d],d.length>0&&!$n.value&&o()}function o(){if(yn.value.length===0){$n.value=!1,vn.value={currentGesture:"idle",intensity:0,progress:0};return}const d=yn.value[0];vn.value.currentGesture=d.type,vn.value.intensity=d.intensity,wd=performance.now(),$n.value=!0,a()}function a(){if(yn.value.length===0){$n.value=!1;return}const d=yn.value[0],h=Hs[d.type],m=(performance.now()-wd)/1e3,g=Math.min(1,m/d.duration);if(vn.value.progress=g,g>=1){yn.value.shift(),yn.value.length>0?o():h.loop?(yn.value.push(d),o()):($n.value=!1,vn.value={currentGesture:"idle",intensity:0,progress:0});return}Qr=requestAnimationFrame(a)}function l(){const{currentGesture:d,progress:h,intensity:m}=vn.value,g=Hs[d];if(!g)return{time:0};const v=Td(g.keyframes,h);return c(v,m)}function c(d,h){const m={time:d.time};return d.leftArm&&(m.leftArm={shoulderRotation:d.leftArm.shoulderRotation?{x:d.leftArm.shoulderRotation.x*h,y:d.leftArm.shoulderRotation.y*h,z:d.leftArm.shoulderRotation.z*h}:void 0,elbowRotation:d.leftArm.elbowRotation?{x:d.leftArm.elbowRotation.x*h,y:d.leftArm.elbowRotation.y*h,z:d.leftArm.elbowRotation.z*h}:void 0,wristRotation:d.leftArm.wristRotation?{x:d.leftArm.wristRotation.x*h,y:d.leftArm.wristRotation.y*h,z:d.leftArm.wristRotation.z*h}:void 0}),d.rightArm&&(m.rightArm={shoulderRotation:d.rightArm.shoulderRotation?{x:d.rightArm.shoulderRotation.x*h,y:d.rightArm.shoulderRotation.y*h,z:d.rightArm.shoulderRotation.z*h}:void 0,elbowRotation:d.rightArm.elbowRotation?{x:d.rightArm.elbowRotation.x*h,y:d.rightArm.elbowRotation.y*h,z:d.rightArm.elbowRotation.z*h}:void 0,wristRotation:d.rightArm.wristRotation?{x:d.rightArm.wristRotation.x*h,y:d.rightArm.wristRotation.y*h,z:d.rightArm.wristRotation.z*h}:void 0}),d.head&&(m.head={rotation:d.head.rotation?{x:d.head.rotation.x*h,y:d.head.rotation.y*h,z:d.head.rotation.z*h}:void 0,eyeLookAt:d.head.eyeLookAt}),d.body&&(m.body={rotation:d.body.rotation?{x:d.body.rotation.x*h,y:d.body.rotation.y*h,z:d.body.rotation.z*h}:void 0,lean:d.body.lean?{x:d.body.lean.x*h,z:d.body.lean.z*h}:void 0}),m}function u(){Qr&&(cancelAnimationFrame(Qr),Qr=null),yn.value=[],$n.value=!1,vn.value={currentGesture:"idle",intensity:0,progress:0}}return{currentGesture:s,gestureIntensity:e,gestureProgress:t,isAnimating:n,triggerGesture:i,setGesturesFromApi:r,getCurrentKeyframe:l,stopGestures:u}}const My={class:"liya-ai-env-vuejs-full-body-avatar"},Ay=_.defineComponent({__name:"FullBodyAvatar",props:{modelUrl:{default:""},isSpeaking:{type:Boolean,default:!1},visemes:{default:()=>[]},currentTime:{default:0},animationConfig:{default:()=>({lipSyncSpeed:.02,lipSyncIntensity:.5,blinkSpeed:.25,blinkIntervalMin:1500,blinkIntervalMax:3500,eyeMoveSpeed:.12,eyeMoveIntervalMin:500,eyeMoveIntervalMax:1500,eyeMoveRange:.4,breathingSpeed:.4,breathingIntensity:.015,gestureSpeed:.5,gestureIntensity:.2})}},emits:["loaded","error","progress"],setup(s,{expose:e,emit:t}){const n=s,i=t,{getCurrentKeyframe:r}=Oa();let o=null,a=null,l=[],c={},u=null,d=null,h=null,m=null,g=null,v=null,f=0,p=!1,E=0,x=3e3,w={x:0,y:0},L={x:0,y:0},R=0,C=2e3,j=0;const S={0:[],1:["mouthClose","mouthPressLeft","mouthPressRight"],2:["mouthFunnel","mouthLowerDownLeft","mouthLowerDownRight"],3:["mouthLowerDownLeft","mouthLowerDownRight","tongueOut"],4:["mouthLowerDownLeft","mouthLowerDownRight"],5:["mouthLowerDownLeft","mouthLowerDownRight"],6:["mouthFunnel","mouthShrugUpper"],7:["mouthSmileLeft","mouthSmileRight","mouthLowerDownLeft","mouthLowerDownRight"],8:["mouthLowerDownLeft","mouthLowerDownRight"],9:["mouthLowerDownLeft","mouthLowerDownRight","mouthRollLower"],10:["mouthLowerDownLeft","mouthLowerDownRight","mouthUpperUpLeft","mouthUpperUpRight"],11:["mouthSmileLeft","mouthSmileRight","mouthLowerDownLeft","mouthLowerDownRight"],12:["mouthSmileLeft","mouthSmileRight","mouthStretchLeft","mouthStretchRight"],13:["mouthFunnel","mouthLowerDownLeft","mouthLowerDownRight"],14:["mouthPucker","mouthFunnel"]};function b(G,X){return new Promise((N,K)=>{new La().load(G,fe=>{o=fe.scene,X.add(o),l=[],o.traverse(me=>{me instanceof Ve&&me.morphTargetInfluences&&l.push(me)}),H(o),fe.animations.length>0&&(a=new Ca(o)),i("loaded"),N()},fe=>{if(fe.total>0){const me=fe.loaded/fe.total*100;i("progress",me)}},fe=>{i("error",fe),K(fe)})})}function H(G){G.traverse(X=>{const N=X.name.toLowerCase();N.includes("spine")&&!u&&(u=X),N.includes("head")&&!d&&(d=X),(N.includes("leftshoulder")||N.includes("left_shoulder"))&&(h=X),(N.includes("rightshoulder")||N.includes("right_shoulder"))&&(m=X),(N.includes("leftelbow")||N.includes("left_elbow")||N.includes("leftforearm"))&&(g=X),(N.includes("rightelbow")||N.includes("right_elbow")||N.includes("rightforearm"))&&(v=X)})}function Z(G){var me,ge;if(!n.isSpeaking||n.visemes.length===0){ae();return}const X=n.currentTime;let N=0;for(const ce of n.visemes)if(X>=ce.time&&X<ce.time+ce.duration){N=ce.viseme;break}const K=S[N]||[],oe=((me=n.animationConfig)==null?void 0:me.lipSyncIntensity)||.5,fe=((ge=n.animationConfig)==null?void 0:ge.lipSyncSpeed)||.02;for(const ce of l)if(!(!ce.morphTargetDictionary||!ce.morphTargetInfluences))for(const[de,Te]of Object.entries(ce.morphTargetDictionary)){const k=K.includes(de)?oe:0,dt=c[de]||0,Ee=dt+(k-dt)*fe;ce.morphTargetInfluences[Te]=Ee,c[de]=Ee}}function ae(G){var N;const X=((N=n.animationConfig)==null?void 0:N.lipSyncSpeed)||.02;for(const K of l)if(!(!K.morphTargetDictionary||!K.morphTargetInfluences)){for(const[oe,fe]of Object.entries(K.morphTargetDictionary))if(oe.startsWith("mouth")){const ge=(c[oe]||0)*(1-X);K.morphTargetInfluences[fe]=ge,c[oe]=ge}}}function P(G,X){const N=n.animationConfig||{},K=N.blinkSpeed||.25,oe=N.blinkIntervalMin||1500,fe=N.blinkIntervalMax||3500;if(!p&&X-f>x&&(p=!0,E=0,f=X,x=oe+Math.random()*(fe-oe)),p){E+=K;let me=0;E<.5?me=E*2:me=1-(E-.5)*2;for(const ge of l){if(!ge.morphTargetDictionary||!ge.morphTargetInfluences)continue;const ce=ge.morphTargetDictionary.eyeBlinkLeft,de=ge.morphTargetDictionary.eyeBlinkRight;ce!==void 0&&(ge.morphTargetInfluences[ce]=me),de!==void 0&&(ge.morphTargetInfluences[de]=me)}E>=1&&(p=!1)}}function D(G,X){const N=n.animationConfig||{},K=N.eyeMoveSpeed||.12,oe=N.eyeMoveIntervalMin||500,fe=N.eyeMoveIntervalMax||1500,me=N.eyeMoveRange||.4;X-R>C&&(w={x:(Math.random()-.5)*me,y:(Math.random()-.5)*me*.5},R=X,C=oe+Math.random()*(fe-oe)),L.x+=(w.x-L.x)*K,L.y+=(w.y-L.y)*K;for(const ge of l){if(!ge.morphTargetDictionary||!ge.morphTargetInfluences)continue;const ce=ge.morphTargetDictionary.eyeLookOutLeft,de=ge.morphTargetDictionary.eyeLookOutRight,Te=ge.morphTargetDictionary.eyeLookUpLeft,k=ge.morphTargetDictionary.eyeLookDownLeft;L.x>0&&de!==void 0&&(ge.morphTargetInfluences[de]=L.x),L.x<0&&ce!==void 0&&(ge.morphTargetInfluences[ce]=-L.x),L.y>0&&Te!==void 0&&(ge.morphTargetInfluences[Te]=L.y),L.y<0&&k!==void 0&&(ge.morphTargetInfluences[k]=-L.y)}}function U(G,X){const N=n.animationConfig||{},K=N.breathingSpeed||.4,oe=N.breathingIntensity||.015;j+=G*K;const fe=Math.sin(j)*oe;u&&(u.position.y+=fe*.01)}function te(G){var N,K,oe,fe;const X=r();X.leftArm&&h&&X.leftArm.shoulderRotation&&(h.rotation.x=X.leftArm.shoulderRotation.x,h.rotation.y=X.leftArm.shoulderRotation.y,h.rotation.z=X.leftArm.shoulderRotation.z),X.rightArm&&m&&X.rightArm.shoulderRotation&&(m.rotation.x=X.rightArm.shoulderRotation.x,m.rotation.y=X.rightArm.shoulderRotation.y,m.rotation.z=X.rightArm.shoulderRotation.z),(N=X.leftArm)!=null&&N.elbowRotation&&g&&(g.rotation.x=X.leftArm.elbowRotation.x),(K=X.rightArm)!=null&&K.elbowRotation&&v&&(v.rotation.x=X.rightArm.elbowRotation.x),(oe=X.head)!=null&&oe.rotation&&d&&(d.rotation.x=X.head.rotation.x,d.rotation.y=X.head.rotation.y,d.rotation.z=X.head.rotation.z),(fe=X.body)!=null&&fe.lean&&u&&(u.rotation.x=X.body.lean.x,u.rotation.z=X.body.lean.z)}function F(G,X){o&&(a&&a.update(G),Z(),P(G,X),D(G,X),U(G),te())}function V(){return o}function ee(){o&&o.traverse(G=>{var X,N;G instanceof Ve&&((X=G.geometry)==null||X.dispose(),Array.isArray(G.material)?G.material.forEach(K=>K.dispose()):(N=G.material)==null||N.dispose())}),a=null,l=[]}return e({loadModel:b,update:F,getModel:V,dispose:ee}),(G,X)=>(_.openBlock(),_.createElementBlock("div",My,[_.renderSlot(G.$slots,"default",{},void 0,!0)]))}}),eo=(s,e)=>{const t=s.__vccOpts||s;for(const[n,i]of e)t[n]=i;return t},Ty=eo(Ay,[["__scopeId","data-v-bc74c771"]]),by={key:0,class:"liya-ai-env-vuejs-board liya-ai-env-vuejs-presentation-board"},wy=["src","alt"],Ry={class:"liya-ai-env-vuejs-presentation-board__info"},Cy={key:1,class:"liya-ai-env-vuejs-loading"},Ly={class:"liya-ai-env-vuejs-loading__progress"},Fa=eo(_.defineComponent({__name:"ClassroomScene",props:{classroomModelUrl:{default:""},avatarModelUrl:{default:""},avatarPosition:{default:()=>({x:0,y:0,z:0})},cameraConfig:{default:()=>({position:{x:0,y:1.4,z:4},lookAt:{x:0,y:1.2,z:0},fov:45})},isSpeaking:{type:Boolean,default:!1},visemes:{default:()=>[]},gestures:{default:()=>[]},currentTime:{default:0},animationConfig:{default:()=>({})},presentationResult:{default:null}},emits:["loaded","error","progress"],setup(s,{emit:e}){const t=s,n=_.computed(()=>{var y;return!!((y=t.presentationResult)!=null&&y.page_image_url)}),i=_.computed(()=>{var I;return(((I=t.presentationResult)==null?void 0:I.page_image_url)||"").replace(/^http:\/\//i,"https://")}),r=_.computed(()=>t.presentationResult?`${t.presentationResult.presentation_title} — ${t.presentationResult.page_number}/${t.presentationResult.total_pages}`:""),o=e,{getCurrentKeyframe:a,setGesturesFromApi:l}=Oa(),c=_.ref(null),u=_.ref(!0),d=_.ref(0);let h=null,m=null,g=null,v=null,f=null,p=null,E=null,x=null,w=[],L={},R=null,C=null,j=null,S=null,b=null,H=null;const Z=typeof navigator<"u"&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent);let ae=!1,P=0,D=!1,U=0,te=3e3,F={x:0,y:0},V={x:0,y:0},ee=0,G=2e3,X=0;const N={0:[],1:["mouthClose","mouthPressLeft","mouthPressRight"],2:["mouthFunnel","mouthLowerDownLeft","mouthLowerDownRight"],3:["mouthLowerDownLeft","mouthLowerDownRight"],4:["mouthLowerDownLeft","mouthLowerDownRight"],5:["mouthLowerDownLeft","mouthLowerDownRight"],6:["mouthFunnel","mouthShrugUpper"],7:["mouthSmileLeft","mouthSmileRight"],8:["mouthLowerDownLeft","mouthLowerDownRight"],9:["mouthLowerDownLeft","mouthLowerDownRight"],10:["mouthLowerDownLeft","mouthLowerDownRight","mouthUpperUpLeft","mouthUpperUpRight"],11:["mouthSmileLeft","mouthSmileRight"],12:["mouthSmileLeft","mouthSmileRight","mouthStretchLeft","mouthStretchRight"],13:["mouthFunnel","mouthLowerDownLeft","mouthLowerDownRight"],14:["mouthPucker","mouthFunnel"]};_.watch(()=>t.gestures,y=>{y&&y.length>0&&l(y)},{deep:!0}),_.watch(()=>t.avatarModelUrl,y=>{y&&h&&!E&&me(y)});function K(){if(!c.value)return;h=new Q0,h.background=new Ne(1710638);const{position:y,lookAt:I,fov:$}=t.cameraConfig,J=c.value.clientWidth/c.value.clientHeight;m=new Ot($||45,J,.1,1e3),m.position.set(y.x,y.y,y.z),m.lookAt(I.x,I.y,I.z),g=new Gu({antialias:!Z,alpha:!0,powerPreference:Z?"low-power":"high-performance",preserveDrawingBuffer:Z}),g.setSize(c.value.clientWidth,c.value.clientHeight);const ne=Z?1.5:2;g.setPixelRatio(Math.min(window.devicePixelRatio,ne)),g.outputColorSpace=lt,g.toneMapping=Zl,g.toneMappingExposure=1.2,g.shadowMap.enabled=!Z,g.shadowMap.type=jl,c.value.appendChild(g.domElement),oe(),v=new wv,fe(),window.addEventListener("resize",Pe),ae=!0,Te()}function oe(){if(!h)return;const y=new Tv(8951976,.7);h.add(y);const I=new ba(14740212,1.1);I.position.set(2,6,3),I.castShadow=!0,I.shadow.mapSize.width=2048,I.shadow.mapSize.height=2048,I.shadow.camera.near=.5,I.shadow.camera.far=50,I.shadow.camera.left=-10,I.shadow.camera.right=10,I.shadow.camera.top=8,I.shadow.camera.bottom=-4,I.shadow.bias=-.001,h.add(I);const $=new ba(9478320,.5);$.position.set(-5,3,2),h.add($);const J=new md(15791868,1.1,12,Math.PI/5,.6,1);J.position.set(0,5.4,-1),J.target.position.set(0,2.5,-3.9),h.add(J),h.add(J.target);const ne=new Vs(54442,.35,10,2);ne.position.set(-6,1.5,-3),h.add(ne);const le=new Vs(54442,.35,10,2);le.position.set(6,1.5,-3),h.add(le);const ie=new Vs(47252,.25,15,2);ie.position.set(0,5.5,-2),h.add(ie);const ue=new Vs(8427696,.3,10,2);ue.position.set(0,.2,-1),h.add(ue)}async function fe(){const y=new La;let I=0,$=0;if(t.classroomModelUrl&&$++,t.avatarModelUrl&&$++,$===0){ge(),u.value=!1,o("loaded");return}try{t.classroomModelUrl?await new Promise((J,ne)=>{y.load(t.classroomModelUrl,le=>{p=le.scene,p.traverse(ie=>{ie instanceof Ve&&(ie.castShadow=!0,ie.receiveShadow=!0)}),h==null||h.add(p),I+=50,d.value=I,o("progress",I),J()},le=>{if(le.total>0){const ie=le.loaded/le.total*50;d.value=ie,o("progress",ie)}},le=>ne(le))}):(ge(),I+=50),t.avatarModelUrl&&await new Promise((J,ne)=>{y.load(t.avatarModelUrl,le=>{E=le.scene;const ie=t.avatarPosition;E.position.set(ie.x,ie.y,ie.z),E.traverse(ue=>{ue instanceof Ve&&(ue.castShadow=!0,ue.receiveShadow=!0,ue.morphTargetInfluences&&w.push(ue))}),ce(E),le.animations.length>0&&(x=new Ca(E)),h==null||h.add(E),I+=50,d.value=I,o("progress",I),J()},le=>{if(le.total>0){const ie=50+le.loaded/le.total*50;d.value=ie,o("progress",ie)}},le=>ne(le))}),u.value=!1,o("loaded")}catch(J){o("error",J),u.value=!1}}async function me(y){if(!h||E)return;const I=new La;try{await new Promise(($,J)=>{I.load(y,ne=>{E=ne.scene,E.position.set(-1.8,0,.8);const le=t.cameraConfig.position,ie=E.position;E.rotation.y=Math.atan2(le.x-ie.x,le.z-ie.z),E.scale.set(1.1,1.1,1.1),E.traverse(ue=>{ue instanceof Ve&&(ue.castShadow=!0,ue.receiveShadow=!0,ue.morphTargetInfluences&&w.push(ue))}),ce(E),ne.animations.length>0&&(x=new Ca(E)),h.add(E),$()},void 0,ne=>{J(ne)})})}catch{}}function ge(){if(!h)return;const y=new Bt({color:14212324,roughness:.45,metalness:.25}),I=new Bt({color:13160668,roughness:.4,metalness:.3}),$=new Bt({color:12635352,roughness:.04,metalness:.5}),J=new Bt({color:13687008,roughness:.5,metalness:.2}),ne=new Bt({color:54442,emissive:54442,emissiveIntensity:.6,roughness:.1,metalness:.3}),le=new Bt({color:47252,emissive:47252,emissiveIntensity:.3,roughness:.15,metalness:.25}),ie=new Bt({color:7899288,roughness:.08,metalness:.5}),ue=new Bt({color:13160668,roughness:.08,metalness:.45}),_e=new Bt({color:13687012,roughness:.25,metalness:.3}),Re=new Wn(16,12),re=new Ve(Re,$);re.rotation.x=-Math.PI/2,re.position.y=0,re.receiveShadow=!0,h.add(re);const Ke=new Ve(new ut(12,.003,.02),le);Ke.position.set(0,.002,-3.2),h.add(Ke);const Fe=new Wn(16,6),be=new Ve(Fe,y);be.position.set(0,3,-4),be.receiveShadow=!0,h.add(be);const Se=new Ve(new ut(16,1.5,.03),I);Se.position.set(0,.75,-3.97),h.add(Se);const ye=new Wn(10,6),Ce=new Ve(ye,y.clone());Ce.position.set(-8,3,1),Ce.rotation.y=Math.PI/2,Ce.receiveShadow=!0,h.add(Ce);const Je=new Ve(new ut(14,.02,.015),ne);Je.position.set(0,5.1,-3.96),h.add(Je);const tt=new Ve(new ut(14,.015,.015),ne);tt.position.set(0,1.52,-3.96),h.add(tt);const Ue=new Ve(new ut(.015,3.6,.015),le);Ue.position.set(-7,3.3,-3.96),h.add(Ue);const z=Ue.clone();z.position.set(7,3.3,-3.96),h.add(z);const A=new Ve(new ut(6.2,3.4,.06),ie);A.position.set(0,2.85,-3.92),A.castShadow=!0,h.add(A);const se=new Wn(5.8,3.1),he=new Bt({color:16119280,emissive:15790316,emissiveIntensity:.15,roughness:.05,metalness:.02}),we=new Ve(se,he);we.position.set(0,2.85,-3.88),h.add(we);const Ae=new ut(6.25,.04,.08),et=new ut(.04,3.45,.08),st=[{geo:Ae,pos:[0,4.575,-3.9]},{geo:Ae,pos:[0,1.125,-3.9]},{geo:et,pos:[-3.125,2.85,-3.9]},{geo:et,pos:[3.125,2.85,-3.9]}];for(const ht of st){const M=new Ve(ht.geo,ue);M.position.set(ht.pos[0],ht.pos[1],ht.pos[2]),h.add(M)}const gt=new ut(6,.01,.01),At=new ut(.01,3.2,.01),rt=[{geo:gt,pos:[0,4.42,-3.87]},{geo:gt,pos:[0,1.28,-3.87]},{geo:At,pos:[-2.98,2.85,-3.87]},{geo:At,pos:[2.98,2.85,-3.87]}];for(const ht of rt){const M=new Ve(ht.geo,le);M.position.set(ht.pos[0],ht.pos[1],ht.pos[2]),h.add(M)}for(let ht=0;ht<3;ht++){const M=new Ve(new ut(.6,2.5,.02),_e);M.position.set(-5.5+ht*.75,3,-3.97),h.add(M)}for(let ht=0;ht<3;ht++){const M=new Ve(new ut(.6,2.5,.02),_e);M.position.set(4.75+ht*.75,3,-3.97),h.add(M)}const Rt=new Bt({color:12109008,roughness:.08,metalness:.45}),Vt=new Ve(new ut(1.8,.04,.7),Rt);Vt.position.set(3.5,.75,-2.5),Vt.castShadow=!0,Vt.receiveShadow=!0,h.add(Vt);const qs=new Ve(new ut(1.8,.008,.008),le);qs.position.set(3.5,.73,-2.15),h.add(qs);const $s=new Ve(new Kr(.04,.06,.73,12),ue);$s.position.set(3.5,.365,-2.5),$s.castShadow=!0,h.add($s);const Ai=new Ve(new Kr(.25,.25,.02,16),ue);Ai.position.set(3.5,.01,-2.5),h.add(Ai);const ms=new Ve(new ut(5,.05,3),I);ms.position.set(-.5,.025,-2.5),ms.receiveShadow=!0,h.add(ms);const Ti=new Ve(new ut(5,.01,.01),ne);Ti.position.set(-.5,.045,-1),h.add(Ti);const ro=new Wn(16,12),gs=new Ve(ro,J);gs.rotation.x=Math.PI/2,gs.position.set(0,5.6,0),h.add(gs);const oo=new Ve(new ut(14,.01,.01),le);oo.position.set(0,5.55,-3.96),h.add(oo);const Wa=new Bt({color:13689072,emissive:12638440,emissiveIntensity:.3,roughness:.1});for(let ht=-1;ht<=1;ht+=2){const M=new Ve(new ut(.08,.01,4),Wa);M.position.set(ht*5,5.58,-1),h.add(M)}h.background=new Ne(8951976)}function ce(y){const I=[];y.traverse($=>{const J=$.name.toLowerCase();I.push($.name),J.includes("spine")&&!R&&(R=$),J.includes("head")&&!C&&(C=$),J.includes("leftshoulder")&&!j&&(j=$),(J.includes("leftarm")||J.includes("left_arm")||J.includes("leftupperarm"))&&!b&&(b=$),J.includes("rightshoulder")&&!S&&(S=$),(J.includes("rightarm")||J.includes("right_arm")||J.includes("rightupperarm"))&&!H&&(H=$)})}function de(){}function Te(){if(!ae||(f=requestAnimationFrame(Te),!v||!g||!h||!m))return;const y=v.getDelta(),I=v.getElapsedTime()*1e3;x&&x.update(y),E&&(k(),Ee(y,I),De(y,I),xe(y),it()),g.render(h,m)}function k(y){var ie,ue;if(!t.isSpeaking||t.visemes.length===0){dt();return}const I=t.currentTime;let $=0;for(const _e of t.visemes)if(I>=_e.time&&I<_e.time+_e.duration){$=_e.viseme;break}const J=N[$]||[],ne=((ie=t.animationConfig)==null?void 0:ie.lipSyncIntensity)||.5,le=((ue=t.animationConfig)==null?void 0:ue.lipSyncSpeed)||.02;for(const _e of w)if(!(!_e.morphTargetDictionary||!_e.morphTargetInfluences))for(const[Re,re]of Object.entries(_e.morphTargetDictionary)){const Ke=J.includes(Re)?ne:0,Fe=L[Re]||0,be=Fe+(Ke-Fe)*le;_e.morphTargetInfluences[re]=be,L[Re]=be}}function dt(y){for(const $ of w)if(!(!$.morphTargetDictionary||!$.morphTargetInfluences)){for(const[J,ne]of Object.entries($.morphTargetDictionary))if(J.startsWith("mouth")){const ie=(L[J]||0)*(1-.02);$.morphTargetInfluences[ne]=ie,L[J]=ie}}}function Ee(y,I){if(!D&&I-P>te&&(D=!0,U=0,P=I,te=1500+Math.random()*2e3),D){U+=.25;let le=0;U<.5?le=U*2:le=1-(U-.5)*2;for(const ie of w){if(!ie.morphTargetDictionary||!ie.morphTargetInfluences)continue;const ue=ie.morphTargetDictionary.eyeBlinkLeft,_e=ie.morphTargetDictionary.eyeBlinkRight;ue!==void 0&&(ie.morphTargetInfluences[ue]=le),_e!==void 0&&(ie.morphTargetInfluences[_e]=le)}U>=1&&(D=!1)}}function De(y,I){I-ee>G&&(F={x:(Math.random()-.5)*.4,y:(Math.random()-.5)*.4*.5},ee=I,G=500+Math.random()*1e3),V.x+=(F.x-V.x)*.12,V.y+=(F.y-V.y)*.12;for(const ie of w){if(!ie.morphTargetDictionary||!ie.morphTargetInfluences)continue;const ue=ie.morphTargetDictionary.eyeLookOutLeft,_e=ie.morphTargetDictionary.eyeLookOutRight,Re=ie.morphTargetDictionary.eyeLookUpLeft,re=ie.morphTargetDictionary.eyeLookDownLeft;V.x>0&&_e!==void 0&&(ie.morphTargetInfluences[_e]=V.x),V.x<0&&ue!==void 0&&(ie.morphTargetInfluences[ue]=-V.x),V.y>0&&Re!==void 0&&(ie.morphTargetInfluences[Re]=V.y),V.y<0&&re!==void 0&&(ie.morphTargetInfluences[re]=-V.y)}}function xe(y,I){X+=y*.4;const ne=Math.sin(X)*.015;R&&(R.position.y+=ne*.01)}function it(y,I){var J,ne;const $=a();(J=$.head)!=null&&J.rotation&&C&&C.rotation.set($.head.rotation.x,$.head.rotation.y,$.head.rotation.z),(ne=$.body)!=null&&ne.lean&&R&&(R.rotation.x=$.body.lean.x,R.rotation.z=$.body.lean.z)}function Pe(){if(!c.value||!m||!g)return;const y=c.value.clientWidth,I=c.value.clientHeight;m.aspect=y/I,m.updateProjectionMatrix(),g.setSize(y,I)}function T(){ae=!1,f&&(cancelAnimationFrame(f),f=null),window.removeEventListener("resize",Pe);const y=I=>{I.traverse($=>{var J,ne;$ instanceof Ve&&((J=$.geometry)==null||J.dispose(),Array.isArray($.material)?$.material.forEach(le=>le.dispose()):(ne=$.material)==null||ne.dispose())})};p&&y(p),E&&y(E),g&&(g.dispose(),g.forceContextLoss(),c.value&&g.domElement.parentNode===c.value&&c.value.removeChild(g.domElement)),h=null,m=null,g=null,p=null,E=null,x=null,w=[],L={},R=null,C=null,j=null,S=null,b=null,H=null}return _.onMounted(()=>{K()}),_.onUnmounted(()=>{T()}),(y,I)=>(_.openBlock(),_.createElementBlock("div",{ref_key:"liyaAiEnvVuejsContainerRef",ref:c,class:"liya-ai-env-vuejs-classroom-scene"},[n.value?(_.openBlock(),_.createElementBlock("div",by,[_.createElementVNode("img",{src:i.value,alt:r.value,class:"liya-ai-env-vuejs-presentation-board__image"},null,8,wy),_.createElementVNode("div",Ry,_.toDisplayString(r.value),1),I[0]||(I[0]=_.createElementVNode("div",{class:"liya-ai-env-vuejs-board__frame"},null,-1))])):_.createCommentVNode("",!0),u.value?(_.openBlock(),_.createElementBlock("div",Cy,[I[1]||(I[1]=_.createElementVNode("div",{class:"liya-ai-env-vuejs-loading__spinner"},null,-1)),I[2]||(I[2]=_.createElementVNode("p",{class:"liya-ai-env-vuejs-loading__text"},"Ortam yükleniyor...",-1)),_.createElementVNode("div",Ly,[_.createElementVNode("div",{class:"liya-ai-env-vuejs-loading__progress-bar",style:_.normalizeStyle({width:`${d.value}%`})},null,4)])])):_.createCommentVNode("",!0)],512))}}),[["__scopeId","data-v-8c55cb60"]]),Ye=_.ref({isOpen:!1,isLoading:!0,isReady:!1,isSpeaking:!1,isListening:!1,isProcessing:!1,currentMessage:"",error:null,loadProgress:0}),Wt=_.ref([]),Rd=_.ref(null),fs=_.ref([]),to=_.ref([]),Si=_.ref(0),Ba=_.ref(null),Va=_.ref(null);let qt=null,Cd=0,Mi=null,Ld=0;const Py=3;async function Iy(){const s=window.__liyaAiEnvAudioContext;if(s&&s.state!=="closed"){if(s.state==="running")return s;if(s.state==="suspended")try{const t=s.resume(),n=new Promise((i,r)=>setTimeout(()=>r(new Error("AudioContext resume timeout")),2e3));await Promise.race([t,n])}catch{}return s}if(Ld>=Py)return console.warn("[LiyaAiEnv] Max AudioContext creation attempts reached"),null;Ld++;const e=window.AudioContext||window.webkitAudioContext;if(window.__liyaAiEnvAudioContext=new e,window.__liyaAiEnvAudioContext.state==="suspended")try{const t=window.__liyaAiEnvAudioContext.resume(),n=new Promise((i,r)=>setTimeout(()=>r(new Error("AudioContext resume timeout")),2e3));await Promise.race([t,n])}catch{}return window.__liyaAiEnvAudioContext}function ka(){const s=_.computed(()=>Ye.value.isOpen),e=_.computed(()=>Ye.value.isLoading),t=_.computed(()=>Ye.value.isReady),n=_.computed(()=>Ye.value.isSpeaking),i=_.computed(()=>Ye.value.isListening),r=_.computed(()=>Ye.value.isProcessing),o=_.computed(()=>Ye.value.currentMessage),a=_.computed(()=>Ye.value.error),l=_.computed(()=>Ye.value.loadProgress),c=_.computed(()=>Wt.value),u=_.computed(()=>fs.value),d=_.computed(()=>to.value),h=_.computed(()=>Si.value),m=_.computed(()=>Ba.value);function g(){Ye.value.isOpen=!0}function v(){S(),Ye.value.isOpen=!1,Ye.value.isSpeaking=!1,Ye.value.isListening=!1}function f(D){Ye.value.isLoading=D}function p(D){Ye.value.isReady=D,D&&(Ye.value.isLoading=!1)}function E(D){Ye.value.loadProgress=Math.min(100,Math.max(0,D))}function x(D){Ye.value.error=D}function w(D){try{const U=JSON.parse(D);if(typeof(U==null?void 0:U.response)=="string")return U.response;if(typeof(U==null?void 0:U.answer)=="string")return U.answer}catch{const U=D.match(/"(?:response|answer)"\s*:\s*"((?:[^"\\]|\\.)*)"/);if(U)try{return JSON.parse(`"${U[1]}"`)}catch{return U[1]}}return D}async function L(D){var te;if(!D.trim()||Ye.value.isProcessing)return;Ye.value.isProcessing=!0,Ye.value.currentMessage=D,Ye.value.error=null;const U={id:`temp-user-${Date.now()}`,content:D.trim(),role:"user",created_at:new Date().toISOString()};Wt.value.push(U);try{const F=await Nl(D,Rd.value||void 0);if(F){if(F.session_id&&(Rd.value=F.session_id),F.user_message){const ee=Wt.value.findIndex(G=>G.id===U.id);ee!==-1&&(Wt.value[ee]=F.user_message)}if(F.assistant_message){if(F.suggestions&&F.suggestions.length>0)try{const ee=JSON.parse(F.assistant_message.content);ee.suggestions||(ee.suggestions=F.suggestions),F.assistant_message.content=JSON.stringify(ee)}catch{F.assistant_message.content=JSON.stringify({response:F.assistant_message.content,suggestions:F.suggestions})}Wt.value.push(F.assistant_message)}else if(F.response){let ee=F.response;F.suggestions&&F.suggestions.length>0&&(ee=JSON.stringify({response:F.response,suggestions:F.suggestions})),Wt.value.push({id:`msg-${Date.now()}`,content:ee,role:"assistant",created_at:new Date().toISOString()})}if(F.presentation_result&&F.presentation_result.success){const ee={...F.presentation_result};if(ee.page_image_url)try{const G=ei(),X=G.apiUrl.replace(/\/$/,""),N=ee.page_image_url.startsWith("http")?ee.page_image_url:`${X}${ee.page_image_url}`,K=N.includes("?")?"&":"?";ee.page_image_url=`${N}${K}api_key=${G.apiKey}`}catch{}Ba.value=ee}const V=F.response||w(((te=F.assistant_message)==null?void 0:te.content)||"");V&&await R(V)}}catch(F){F instanceof Dl&&F.code&&(Va.value=F.code),Ye.value.error="Mesaj gönderilemedi",Wt.value=Wt.value.filter(V=>V.id!==U.id)}finally{Ye.value.isProcessing=!1,Ye.value.currentMessage=""}}async function R(D){try{const U=await Ul(D,{include_audio:!0,include_gestures:!0});U&&(fs.value=U.visemes||[],to.value=U.gestures||[],U.audio_base64?await C(U.audio_base64):j(D))}catch{j(D)}}async function C(D){try{const U=atob(D),te=U.length,F=new ArrayBuffer(te),V=new Uint8Array(F);for(let K=0;K<te;K++)V[K]=U.charCodeAt(K);const ee=await Iy();if(!ee){j(D.substring(0,100));return}const G=await new Promise((K,oe)=>{ee.decodeAudioData(F,fe=>K(fe),fe=>oe(fe||new Error("Audio decode failed")))});S(),qt=ee.createBufferSource(),qt.buffer=G,qt.connect(ee.destination),Ye.value.isSpeaking=!0,Cd=ee.currentTime;const X=()=>{Ye.value.isSpeaking&&ee&&(Si.value=ee.currentTime-Cd,requestAnimationFrame(X))};X();const N=G.duration*1e3;Mi=setTimeout(()=>{Ye.value.isSpeaking&&(Ye.value.isSpeaking=!1,Si.value=0,fs.value=[],to.value=[])},N+500),qt.onended=()=>{Mi&&(clearTimeout(Mi),Mi=null),Ye.value.isSpeaking=!1,Si.value=0,fs.value=[],to.value=[]},qt.start()}catch{Ye.value.isSpeaking=!1}}function j(D){const U=D.length*.05,te=[];let F=0;for(let G=0;G<D.length;G++){const X=D[G].toLowerCase();let N=0;"aeiouäöü".includes(X)?N=10+Math.floor(Math.random()*5):"bcdfghjklmnpqrstvwxyz".includes(X)&&(N=1+Math.floor(Math.random()*9)),te.push({time:F,viseme:N,duration:.05}),F+=.05}fs.value=te,Ye.value.isSpeaking=!0,Si.value=0;const V=Date.now(),ee=()=>{const G=(Date.now()-V)/1e3;Si.value=G,G<U?requestAnimationFrame(ee):(Ye.value.isSpeaking=!1,fs.value=[])};ee()}function S(){if(Mi&&(clearTimeout(Mi),Mi=null),qt){try{qt.stop(),qt.disconnect()}catch{}qt=null}Ye.value.isSpeaking=!1,Si.value=0}function b(D){Ye.value.isListening=D}function H(D){Wt.value.length===0&&Wt.value.push({id:`welcome-${Date.now()}`,content:D,role:"assistant",created_at:new Date().toISOString()})}function Z(D){Wt.value.length>0&&Wt.value[0].id.startsWith("welcome-")&&(Wt.value[0]={...Wt.value[0],content:D})}function ae(D){Ba.value=D}function P(){if(S(),qt){try{qt.stop(),qt.disconnect()}catch{}qt=null}}return{state:_.readonly(Ye),isOpen:s,isLoading:e,isReady:t,isSpeaking:n,isListening:i,isProcessing:r,currentMessage:o,error:a,loadProgress:l,messages:c,visemes:u,gestures:d,audioTime:h,currentPresentation:m,lastApiErrorCode:_.computed(()=>Va.value),clearApiError:()=>{Va.value=null},open:g,close:v,setLoading:f,setReady:p,setLoadProgress:E,setError:x,handleMessage:L,speakWithAvatar:R,stopAudio:S,setListening:b,addWelcomeMessage:H,updateWelcomeMessage:Z,setPresentation:ae,cleanup:P}}const Dn=_.ref(!1),za=_.ref(""),no=_.ref(!1),Ha=_.ref(!1),Ws=_.ref("prompt");let wt=null;function Dy(){if(typeof window>"u"||typeof navigator>"u")return!1;const s=navigator.userAgent||navigator.vendor||"",e=/iPad|iPhone|iPod/.test(s)&&!window.MSStream,t=navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;return e||t}function Ny(){if(typeof window>"u"||typeof navigator>"u")return!1;const s=navigator.userAgent||"";return s.indexOf("OPR/")!==-1||s.indexOf("Opera")!==-1}function Ga(){const s=window.SpeechRecognition||window.webkitSpeechRecognition;Ha.value=Dy(),no.value=!!s&&!Ha.value;async function e(){if(typeof navigator>"u"||!navigator.permissions)return"prompt";try{const l=await navigator.permissions.query({name:"microphone"});return Ws.value=l.state,l.onchange=()=>{Ws.value=l.state},l.state}catch{return"prompt"}}async function t(){if(!no.value)return!1;try{return(await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(c=>c.stop()),Ws.value="granted",!0}catch{return Ws.value="denied",!1}}function n(){!s||wt||(wt=new s,wt.continuous=!1,wt.interimResults=!1,wt.lang="tr-TR",wt.onresult=l=>{const c=l.results[l.results.length-1];c.isFinal&&(za.value=c[0].transcript)},wt.onerror=l=>{Dn.value=!1},wt.onend=()=>{Dn.value=!1})}function i(){if(no.value&&(n(),wt&&!Dn.value)){za.value="",Dn.value=!0;try{wt.start(),Ny()&&setTimeout(()=>{Dn.value},3e3)}catch{Dn.value=!1}}}function r(){wt&&Dn.value&&(wt.stop(),Dn.value=!1)}function o(l){wt&&(wt.lang=l)}function a(){wt&&(wt.abort(),wt=null)}return _.onUnmounted(()=>{a()}),{isRecording:_.computed(()=>Dn.value),transcript:_.computed(()=>za.value),isSupported:_.computed(()=>no.value),isIOS:_.computed(()=>Ha.value),micPermission:_.computed(()=>Ws.value),startRecording:i,stopRecording:r,setLanguage:o,checkMicPermission:e,requestMicPermission:t,cleanup:a}}const Uy={class:"liya-ai-env-vuejs-modal-container"},Oy={class:"liya-ai-env-vuejs-header"},Fy={class:"liya-ai-env-vuejs-header__title"},By={class:"liya-ai-env-vuejs-header__actions"},Vy=["title"],ky={class:"liya-ai-env-vuejs-header__lang-text"},zy=["aria-label"],Hy={class:"liya-ai-env-vuejs-scene"},Gy={key:0,class:"liya-ai-env-vuejs-access-loading"},Wy={key:1,class:"liya-ai-env-vuejs-premium-overlay"},jy={class:"liya-ai-env-vuejs-premium-overlay__content"},Xy={class:"liya-ai-env-vuejs-premium-overlay__title"},qy={class:"liya-ai-env-vuejs-premium-overlay__text"},$y={href:"https://liyalabs.com/pricing",target:"_blank",rel:"noopener",class:"liya-ai-env-vuejs-premium-overlay__btn"},Yy={key:0,class:"liya-ai-env-vuejs-glass-popup"},Ky={class:"liya-ai-env-vuejs-glass-popup__card"},Jy=["aria-label"],Zy={class:"liya-ai-env-vuejs-glass-popup__title"},Qy={class:"liya-ai-env-vuejs-glass-popup__text"},ex={class:"liya-ai-env-vuejs-status-indicator__text"},tx=["title"],nx=["title"],ix={key:0,class:"liya-ai-env-vuejs-patience-tooltip"},sx={class:"liya-ai-env-vuejs-controls"},rx={class:"liya-ai-env-vuejs-controls__label"},ox=["disabled","aria-label"],ax={key:0,viewBox:"0 0 24 24",fill:"currentColor",width:"32",height:"32"},lx={key:1,viewBox:"0 0 24 24",fill:"currentColor",width:"32",height:"32"},cx={key:0,class:"liya-ai-env-vuejs-controls__toast"},ux={class:"liya-ai-env-vuejs-chat-panel"},dx={class:"liya-ai-env-vuejs-chat-panel__role"},hx={key:0,class:"liya-ai-env-vuejs-chat-panel__suggestions"},fx=["onClick"],px={key:0,class:"liya-ai-env-vuejs-chat-panel__empty"},mx=["placeholder","disabled"],gx=["disabled"],Pd=3e3,Id=eo(_.defineComponent({__name:"EnvironmentModal",props:{isOpen:{type:Boolean,default:!1},showBackButton:{type:Boolean,default:!1},showCloseButton:{type:Boolean,default:!0},classroomModelUrl:{default:""},avatarModelUrl:{default:""},avatarPosition:{default:()=>({x:0,y:0,z:0})},cameraConfig:{default:()=>({position:{x:0,y:1.4,z:4},lookAt:{x:0,y:1.2,z:0},fov:45})},welcomeMessage:{default:""},enableGestures:{type:Boolean,default:!0},enableSubtitles:{type:Boolean,default:!0},assistantName:{default:""},theme:{default:()=>({})}},emits:["close","back","opened","closed","loaded","message-sent","message-received","speaking-started","speaking-ended","error"],setup(s,{emit:e}){const t=s,n=e,{isSpeaking:i,isProcessing:r,messages:o,visemes:a,gestures:l,audioTime:c,currentPresentation:u,lastApiErrorCode:d,clearApiError:h,handleMessage:m,speakWithAvatar:g,stopAudio:v,setListening:f,addWelcomeMessage:p,updateWelcomeMessage:E,setPresentation:x,cleanup:w}=ka(),L=_.ref(!1),{t:R,locale:C,setLocale:j}=ar();function S(){const z=C.value==="tr"?"en":"tr";j(z)}const{isRecording:b,transcript:H,isSupported:Z,startRecording:ae,stopRecording:P,checkMicPermission:D,requestMicPermission:U}=Ga(),te=_.ref(!1);function F(){te.value=!0,setTimeout(()=>{te.value=!1},3e3)}const V=_.computed(()=>t.welcomeMessage||R.value.chat.emptyWelcome),ee=_.computed(()=>t.assistantName||"AI Assistant"),G=_.ref(t.avatarModelUrl),X=_.ref(t.classroomModelUrl),N=_.ref(!1),K=_.ref(!0),oe=_.ref(null),fe=_.computed(()=>oe.value!==null),me=_.computed(()=>oe.value?oe.value.code==="PREMIUM_PLUS_REQUIRED"?R.value.premium.upgradePremiumPlus:R.value.premium.upgradePremium:"");function ge(z){return z&&z.replace(/^http:\/\//i,"https://")}const ce=_.computed(()=>R.value.welcomeSuggestions),de=_.ref("");let Te=0;const k=_.ref(!1),dt=_.ref("");let Ee=null;function De(){const z=R.value.patienceTooltips,A=Math.floor(Math.random()*z.length);dt.value=z[A],k.value=!0,Ee&&clearTimeout(Ee),Ee=setTimeout(()=>{k.value=!1},2e3)}const xe=_.computed(()=>i.value?"speaking":r.value?"preparing":b.value?"listening":"idle"),it=_.computed(()=>R.value.preparingMessages),Pe=_.ref(0),T=_.ref(0);let y=null;_.watch(r,z=>{z?(Pe.value=0,T.value=Date.now(),y=setInterval(()=>{Date.now()-T.value>8e3&&(Pe.value=(Pe.value+1)%it.value.length)},4e3)):(y&&(clearInterval(y),y=null),Pe.value=0)});const I=_.computed(()=>{switch(xe.value){case"listening":return R.value.status.listening;case"preparing":return it.value[Pe.value];case"speaking":return R.value.status.speaking;default:return R.value.status.ready}});function $(){const z=Date.now();if(z-Te<Pd){De();return}Te=z,b.value&&(P(),f(!1))}function J(){const z=Date.now();if(z-Te<Pd){De();return}Te=z,i.value&&v();const A=o.value.filter(se=>se.role==="assistant").pop();if(A){let se=A.content;try{const he=JSON.parse(A.content);typeof(he==null?void 0:he.response)=="string"?se=he.response:typeof(he==null?void 0:he.answer)=="string"&&(se=he.answer)}catch{const he=A.content.match(/"(?:response|answer)"\s*:\s*"((?:[^"\\]|\\.)*)"/);if(he)try{se=JSON.parse(`"${he[1]}"`)}catch{se=he[1]}}g(se)}}function ne(z){try{const A=JSON.parse(z);if(typeof(A==null?void 0:A.response)=="string")return A.response;if(typeof(A==null?void 0:A.answer)=="string")return A.answer}catch{const A=z.match(/"(?:response|answer)"\s*:\s*"((?:[^"\\]|\\.)*)"/);if(A)try{return JSON.parse(`"${A[1]}"`)}catch{return A[1]}}return z}function le(z){try{const A=JSON.parse(z);if(Array.isArray(A==null?void 0:A.suggestions))return A.suggestions}catch{const A=z.match(/"suggestions"\s*:\s*\[((?:[^\[\]])*?)\]/);if(A)try{return JSON.parse(`[${A[1]}]`)}catch{}}return[]}const ie=_.computed(()=>{const z=ce.value,A=o.value.map(se=>{const he=se.role==="assistant"?le(se.content):[];return{role:se.role,content:ne(se.content),suggestions:he}});return A.length===1&&A[0].role==="assistant"&&A[0].suggestions.length===0&&(A[0].suggestions=z),A}),ue=_.ref(null);function _e(){_.nextTick(()=>{ue.value&&(ue.value.scrollTop=ue.value.scrollHeight)})}_.watch(()=>o.value.length,()=>{_e()});function Re(z){Ce(z),_e()}async function re(){const z=de.value.trim();z&&(de.value="",_e(),await Ce(z))}async function Ke(){K.value=!0,oe.value=null;try{(await Vl()).has_avatar_access||(oe.value={code:"FEATURE_NOT_AVAILABLE",message:R.value.premium.upgradePremium})}catch(z){const A=(z==null?void 0:z.code)||"FEATURE_NOT_AVAILABLE",se=(z==null?void 0:z.message)||"";A==="FEATURE_NOT_AVAILABLE"||A==="UPGRADE_REQUIRED"||A==="PREMIUM_PLUS_REQUIRED"||se.includes("Premium")||se.includes("upgrade")?oe.value={code:A,message:se}:oe.value={code:"FEATURE_NOT_AVAILABLE",message:R.value.premium.upgradePremium}}finally{K.value=!1}}async function Fe(){if(!G.value){N.value=!0;try{const z=await Ol();G.value=ge(z.model_url)}catch{}finally{N.value=!1}}}async function be(){if(!X.value)try{const z=await Fl();X.value=ge(z.model_url)}catch{}}_.watch(H,z=>{z&&!b.value&&Ce(z)}),_.watch(i,z=>{n(z?"speaking-started":"speaking-ended")});function Se(z){if(!z)return null;try{const A=ei(),se=z.includes("?")?"&":"?";return`${z}${se}api_key=${A.apiKey}`}catch{return z}}async function ye(){try{const z=await Bl();if(z.length>0){const A=z[0];if(A.pages&&A.pages.length>0){const se=A.pages[0];x({success:!0,action:"show_page",presentation_id:A.id,presentation_title:A.title,page_number:se.page_number,page_title:se.title,page_image_url:Se(se.image_url),total_pages:A.total_pages,reason:"initial_load"})}}}catch{}}_.watch(()=>t.isOpen,async z=>{z?(Z.value&&D().then(A=>{A==="prompt"&&U()}),await Ke(),fe.value||(await Promise.all([Fe(),be(),ye()]),!L.value&&V.value&&(L.value=!0,p(V.value),setTimeout(()=>{g(V.value)},500))),n("opened")):n("closed")},{immediate:!0}),_.watch(C,()=>{E(V.value),v(),setTimeout(()=>{g(V.value)},300)});async function Ce(z){n("message-sent",z),await m(z);const A=o.value[o.value.length-1];A&&A.role==="assistant"&&n("message-received",A.content)}function Je(){if(!Z.value){F();return}b.value?(P(),f(!1)):(ae(),f(!0))}function tt(){w(),n("close")}function Ue(z){z.key==="Escape"&&tt()}return _.onMounted(()=>{document.addEventListener("keydown",Ue)}),_.onUnmounted(()=>{document.removeEventListener("keydown",Ue),y&&(clearInterval(y),y=null),Ee&&(clearTimeout(Ee),Ee=null),w()}),(z,A)=>(_.openBlock(),_.createBlock(_.Teleport,{to:"body"},[_.createVNode(_.Transition,{name:"liya-ai-env-vuejs-modal"},{default:_.withCtx(()=>[s.isOpen?(_.openBlock(),_.createElementBlock("div",{key:0,class:"liya-ai-env-vuejs-modal-overlay",onClick:_.withModifiers(tt,["self"])},[_.createElementVNode("div",Uy,[_.createElementVNode("header",Oy,[_.createElementVNode("div",Fy,[_.createElementVNode("div",{class:_.normalizeClass(["liya-ai-env-vuejs-status-dot",{"liya-ai-env-vuejs-status-dot--speaking":_.unref(i)}])},null,2),_.createElementVNode("span",null,_.toDisplayString(ee.value),1)]),_.createElementVNode("div",By,[_.createElementVNode("button",{class:"liya-ai-env-vuejs-header__lang-btn",onClick:S,title:_.unref(C)==="tr"?"Switch to English":"Türkçe'ye geç"},[_.createElementVNode("span",ky,_.toDisplayString(_.unref(C)==="tr"?"EN":"TR"),1)],8,Vy),s.showCloseButton?(_.openBlock(),_.createElementBlock("button",{key:0,class:"liya-ai-env-vuejs-header__close-btn",onClick:tt,"aria-label":_.unref(R).controls.close},[...A[4]||(A[4]=[_.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"24",height:"24"},[_.createElementVNode("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})],-1)])],8,zy)):_.createCommentVNode("",!0)])]),_.createElementVNode("div",Hy,[K.value?(_.openBlock(),_.createElementBlock("div",Gy,[...A[5]||(A[5]=[_.createElementVNode("div",{class:"liya-ai-env-vuejs-access-loading__spinner"},null,-1)])])):fe.value?(_.openBlock(),_.createElementBlock("div",Wy,[_.createElementVNode("div",jy,[A[7]||(A[7]=_.createElementVNode("div",{class:"liya-ai-env-vuejs-premium-overlay__icon"},[_.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"48",height:"48"},[_.createElementVNode("path",{d:"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"})])],-1)),_.createElementVNode("h3",Xy,_.toDisplayString(_.unref(R).premium.title),1),_.createElementVNode("p",qy,_.toDisplayString(me.value),1),_.createElementVNode("a",$y,[A[6]||(A[6]=_.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"16",height:"16"},[_.createElementVNode("path",{d:"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"})],-1)),_.createTextVNode(" "+_.toDisplayString(_.unref(R).premium.viewPlans),1)])])])):(_.openBlock(),_.createElementBlock(_.Fragment,{key:2},[_.createVNode(Fa,{"classroom-model-url":X.value,"avatar-model-url":G.value,"avatar-position":s.avatarPosition,"camera-config":s.cameraConfig,"is-speaking":_.unref(i),visemes:_.unref(a),gestures:s.enableGestures?_.unref(l):[],"current-time":_.unref(c),"presentation-result":_.unref(u),onLoaded:A[0]||(A[0]=se=>z.$emit("opened")),onError:A[1]||(A[1]=se=>z.$emit("error",se))},null,8,["classroom-model-url","avatar-model-url","avatar-position","camera-config","is-speaking","visemes","gestures","current-time","presentation-result"]),_.createVNode(_.Transition,{name:"liya-ai-env-vuejs-glass-fade"},{default:_.withCtx(()=>[_.unref(d)?(_.openBlock(),_.createElementBlock("div",Yy,[_.createElementVNode("div",Ky,[_.createElementVNode("button",{class:"liya-ai-env-vuejs-glass-popup__close",onClick:A[2]||(A[2]=(...se)=>_.unref(h)&&_.unref(h)(...se)),"aria-label":_.unref(R).controls.close},[...A[8]||(A[8]=[_.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"18",height:"18"},[_.createElementVNode("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})],-1)])],8,Jy),A[9]||(A[9]=_.createElementVNode("div",{class:"liya-ai-env-vuejs-glass-popup__icon"},"⚠️",-1)),_.createElementVNode("h4",Zy,_.toDisplayString(_.unref(R).errors.problemOccurred),1),_.createElementVNode("p",Qy,_.toDisplayString(_.unref(R).errors.tryAgainLater),1)])])):_.createCommentVNode("",!0)]),_:1}),_.createElementVNode("div",{class:_.normalizeClass(["liya-ai-env-vuejs-status-indicator",`liya-ai-env-vuejs-status-indicator--${xe.value}`])},[A[12]||(A[12]=_.createElementVNode("span",{class:"liya-ai-env-vuejs-status-indicator__dot"},null,-1)),_.createElementVNode("span",ex,_.toDisplayString(I.value),1),xe.value!=="idle"?(_.openBlock(),_.createElementBlock("button",{key:0,class:"liya-ai-env-vuejs-status-indicator__btn",onClick:$,title:_.unref(R).controls.cancel},[...A[10]||(A[10]=[_.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"20",height:"20"},[_.createElementVNode("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})],-1)])],8,tx)):_.createCommentVNode("",!0),xe.value==="idle"&&_.unref(o).length>0?(_.openBlock(),_.createElementBlock("button",{key:1,class:"liya-ai-env-vuejs-status-indicator__btn",onClick:J,title:_.unref(R).controls.replay},[...A[11]||(A[11]=[_.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"20",height:"20"},[_.createElementVNode("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})],-1)])],8,nx)):_.createCommentVNode("",!0),_.createVNode(_.Transition,{name:"liya-ai-env-vuejs-patience-tooltip"},{default:_.withCtx(()=>[k.value?(_.openBlock(),_.createElementBlock("div",ix,_.toDisplayString(dt.value),1)):_.createCommentVNode("",!0)]),_:1})],2),_.createElementVNode("div",sx,[_.createElementVNode("p",rx,_.toDisplayString(_.unref(R).controls.pressAndSpeak),1),_.createElementVNode("button",{class:_.normalizeClass(["liya-ai-env-vuejs-controls__mic",{"liya-ai-env-vuejs-controls__mic--active":_.unref(b),"liya-ai-env-vuejs-controls__mic--disabled":_.unref(r)||_.unref(i),"liya-ai-env-vuejs-controls__mic--not-supported":!_.unref(Z)}]),disabled:_.unref(r)||_.unref(i),onClick:Je,"aria-label":_.unref(b)?_.unref(R).voice.stopRecording:_.unref(R).voice.startRecording},[_.unref(b)?(_.openBlock(),_.createElementBlock("svg",lx,[...A[14]||(A[14]=[_.createElementVNode("path",{d:"M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"},null,-1),_.createElementVNode("path",{d:"M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"},null,-1)])])):(_.openBlock(),_.createElementBlock("svg",ax,[...A[13]||(A[13]=[_.createElementVNode("path",{d:"M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"},null,-1)])]))],10,ox),_.createVNode(_.Transition,{name:"liya-ai-env-vuejs-toast"},{default:_.withCtx(()=>[te.value?(_.openBlock(),_.createElementBlock("div",cx,[A[15]||(A[15]=_.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"18",height:"18"},[_.createElementVNode("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})],-1)),_.createElementVNode("span",null,_.toDisplayString(_.unref(R).voice.notSupported),1)])):_.createCommentVNode("",!0)]),_:1})]),_.createElementVNode("div",ux,[_.createElementVNode("div",{class:"liya-ai-env-vuejs-chat-panel__messages",ref_key:"liyaAiEnvVuejsMessagesRef",ref:ue},[(_.openBlock(!0),_.createElementBlock(_.Fragment,null,_.renderList(ie.value,(se,he)=>(_.openBlock(),_.createElementBlock("div",{key:he,class:_.normalizeClass(["liya-ai-env-vuejs-chat-panel__message",{"liya-ai-env-vuejs-chat-panel__message--user":se.role==="user","liya-ai-env-vuejs-chat-panel__message--assistant":se.role==="assistant"}])},[_.createElementVNode("span",dx,_.toDisplayString(se.role==="user"?_.unref(R).chat.userRole:ee.value),1),_.createElementVNode("p",null,_.toDisplayString(se.content),1),se.suggestions.length>0?(_.openBlock(),_.createElementBlock("div",hx,[(_.openBlock(!0),_.createElementBlock(_.Fragment,null,_.renderList(se.suggestions,(we,Ae)=>(_.openBlock(),_.createElementBlock("button",{key:Ae,class:"liya-ai-env-vuejs-chat-panel__suggestion",onClick:et=>Re(we)},_.toDisplayString(we),9,fx))),128))])):_.createCommentVNode("",!0)],2))),128)),ie.value.length===0?(_.openBlock(),_.createElementBlock("div",px,_.toDisplayString(V.value),1)):_.createCommentVNode("",!0)],512),_.createElementVNode("form",{class:"liya-ai-env-vuejs-chat-panel__input-form",onSubmit:_.withModifiers(re,["prevent"])},[_.withDirectives(_.createElementVNode("input",{"onUpdate:modelValue":A[3]||(A[3]=se=>de.value=se),type:"text",class:"liya-ai-env-vuejs-chat-panel__input",placeholder:fe.value?_.unref(R).chat.premiumRequired:_.unref(R).chat.placeholder,disabled:_.unref(r)||_.unref(i)||fe.value},null,8,mx),[[_.vModelText,de.value]]),_.createElementVNode("button",{type:"submit",class:"liya-ai-env-vuejs-chat-panel__send-btn",disabled:!de.value.trim()||_.unref(r)||_.unref(i)||fe.value},[...A[16]||(A[16]=[_.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"24",height:"24"},[_.createElementVNode("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})],-1)])],8,gx)],32)])],64))])])])):_.createCommentVNode("",!0)]),_:1})]))}}),[["__scopeId","data-v-05cd0118"]]),_x={class:"liya-ai-env-vuejs-standalone-container"},vx={class:"liya-ai-env-vuejs-header"},yx={class:"liya-ai-env-vuejs-header__left"},xx=["aria-label"],Ex={class:"liya-ai-env-vuejs-header__title"},Sx={class:"liya-ai-env-vuejs-header__right"},Mx=["title"],Ax={class:"liya-ai-env-vuejs-header__lang-text"},Tx={class:"liya-ai-env-vuejs-header__brand"},bx={class:"liya-ai-env-vuejs-scene"},wx={key:0,class:"liya-ai-env-vuejs-access-loading"},Rx={key:1,class:"liya-ai-env-vuejs-premium-overlay"},Cx={class:"liya-ai-env-vuejs-premium-overlay__content"},Lx={class:"liya-ai-env-vuejs-premium-overlay__title"},Px={class:"liya-ai-env-vuejs-premium-overlay__text"},Ix={href:"https://liyalabs.com/pricing",target:"_blank",rel:"noopener",class:"liya-ai-env-vuejs-premium-overlay__btn"},Dx={key:0,class:"liya-ai-env-vuejs-subtitle"},Nx={key:0,class:"liya-ai-env-vuejs-thinking-dots"},Ux={class:"liya-ai-env-vuejs-controls"},Ox=["disabled","aria-label"],Fx={key:0,viewBox:"0 0 24 24",fill:"currentColor",width:"32",height:"32"},Bx={key:1,viewBox:"0 0 24 24",fill:"currentColor",width:"32",height:"32"},Vx={class:"liya-ai-env-vuejs-controls__hint"},kx={key:0,class:"liya-ai-env-vuejs-controls__toast"},Dd=eo(_.defineComponent({__name:"EnvironmentStandalone",props:{showBackButton:{type:Boolean,default:!0},classroomModelUrl:{default:""},avatarModelUrl:{default:""},avatarPosition:{default:()=>({x:0,y:0,z:0})},cameraConfig:{default:()=>({position:{x:0,y:1.4,z:4},lookAt:{x:0,y:1.2,z:0},fov:45})},welcomeMessage:{default:""},enableGestures:{type:Boolean,default:!0},enableSubtitles:{type:Boolean,default:!0},assistantName:{default:""},theme:{default:()=>({})}},emits:["back","message-sent","message-received","speaking-started","speaking-ended","loaded","error"],setup(s,{emit:e}){const t=s,n=e,{isSpeaking:i,isProcessing:r,messages:o,visemes:a,gestures:l,audioTime:c,currentPresentation:u,handleMessage:d,speakWithAvatar:h,addWelcomeMessage:m,updateWelcomeMessage:g,setListening:v,cleanup:f}=ka(),p=_.ref(!1),{t:E,locale:x,setLocale:w}=ar();function L(){const ce=x.value==="tr"?"en":"tr";w(ce)}function R(ce){return ce&&ce.replace(/^http:\/\//i,"https://")}const{isRecording:C,transcript:j,isSupported:S,startRecording:b,stopRecording:H}=Ga(),Z=_.ref(!1);function ae(){Z.value=!0,setTimeout(()=>{Z.value=!1},3e3)}const P=_.computed(()=>t.welcomeMessage||E.value.chat.emptyWelcome),D=_.computed(()=>t.assistantName||"AI Assistant"),U=_.ref(t.avatarModelUrl),te=_.ref(t.classroomModelUrl),F=_.ref(!0),V=_.ref(null),ee=_.computed(()=>V.value!==null),G=_.computed(()=>V.value?V.value.code==="PREMIUM_PLUS_REQUIRED"?E.value.premium.upgradePremiumPlus:E.value.premium.upgradePremium:"");async function X(){F.value=!0,V.value=null;try{(await Vl()).has_avatar_access||(V.value={code:"FEATURE_NOT_AVAILABLE",message:E.value.premium.upgradePremium})}catch(ce){const de=(ce==null?void 0:ce.code)||"FEATURE_NOT_AVAILABLE",Te=(ce==null?void 0:ce.message)||"";de==="FEATURE_NOT_AVAILABLE"||de==="UPGRADE_REQUIRED"||de==="PREMIUM_PLUS_REQUIRED"||Te.includes("Premium")||Te.includes("upgrade")?V.value={code:de,message:Te}:V.value={code:"FEATURE_NOT_AVAILABLE",message:E.value.premium.upgradePremium}}finally{F.value=!1}}async function N(){if(!U.value)try{const ce=await Ol();U.value=R(ce.model_url)}catch{}}async function K(){if(!te.value)try{const ce=await Fl();te.value=R(ce.model_url)}catch{}}_.onMounted(async()=>{await X(),ee.value||(await Promise.all([N(),K()]),!p.value&&P.value&&(p.value=!0,m(P.value),setTimeout(()=>{h(P.value)},500)))}),_.watch(j,ce=>{ce&&!C.value&&oe(ce)}),_.watch(i,ce=>{n(ce?"speaking-started":"speaking-ended")}),_.watch(x,()=>{g(P.value),f(),setTimeout(()=>{h(P.value)},300)});async function oe(ce){n("message-sent",ce),await d(ce);const de=o.value[o.value.length-1];de&&de.role==="assistant"&&n("message-received",de.content)}function fe(){if(!S.value){ae();return}C.value?(H(),v(!1)):(b(),v(!0))}function me(){f(),n("back")}function ge(){var ce;return o.value.length===0?P.value:((ce=o.value[o.value.length-1])==null?void 0:ce.content)||""}return _.onUnmounted(()=>{f()}),(ce,de)=>(_.openBlock(),_.createElementBlock("div",_x,[_.createElementVNode("header",vx,[_.createElementVNode("div",yx,[s.showBackButton?(_.openBlock(),_.createElementBlock("button",{key:0,class:"liya-ai-env-vuejs-header__back-btn",onClick:me,"aria-label":_.unref(E).controls.back},[...de[2]||(de[2]=[_.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"24",height:"24"},[_.createElementVNode("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})],-1)])],8,xx)):_.createCommentVNode("",!0),_.createElementVNode("div",Ex,[_.createElementVNode("div",{class:_.normalizeClass(["liya-ai-env-vuejs-status-dot",{"liya-ai-env-vuejs-status-dot--speaking":_.unref(i)}])},null,2),_.createElementVNode("span",null,_.toDisplayString(D.value),1)])]),_.createElementVNode("div",Sx,[_.createElementVNode("button",{class:"liya-ai-env-vuejs-header__lang-btn",onClick:L,title:_.unref(x)==="tr"?"Switch to English":"Türkçe'ye geç"},[_.createElementVNode("span",Ax,_.toDisplayString(_.unref(x)==="tr"?"EN":"TR"),1)],8,Mx),_.createElementVNode("div",Tx,_.toDisplayString(_.unref(E).branding.environmentTitle),1)])]),_.createElementVNode("div",bx,[F.value?(_.openBlock(),_.createElementBlock("div",wx,[...de[3]||(de[3]=[_.createElementVNode("div",{class:"liya-ai-env-vuejs-access-loading__spinner"},null,-1)])])):ee.value?(_.openBlock(),_.createElementBlock("div",Rx,[_.createElementVNode("div",Cx,[de[5]||(de[5]=_.createElementVNode("div",{class:"liya-ai-env-vuejs-premium-overlay__icon"},[_.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"48",height:"48"},[_.createElementVNode("path",{d:"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"})])],-1)),_.createElementVNode("h3",Lx,_.toDisplayString(_.unref(E).premium.title),1),_.createElementVNode("p",Px,_.toDisplayString(G.value),1),_.createElementVNode("a",Ix,[de[4]||(de[4]=_.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"16",height:"16"},[_.createElementVNode("path",{d:"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"})],-1)),_.createTextVNode(" "+_.toDisplayString(_.unref(E).premium.viewPlans),1)])])])):(_.openBlock(),_.createElementBlock(_.Fragment,{key:2},[_.createVNode(Fa,{"classroom-model-url":te.value,"avatar-model-url":U.value,"avatar-position":s.avatarPosition,"camera-config":s.cameraConfig,"is-speaking":_.unref(i),visemes:_.unref(a),gestures:s.enableGestures?_.unref(l):[],"current-time":_.unref(c),"presentation-result":_.unref(u),onLoaded:de[0]||(de[0]=Te=>ce.$emit("loaded")),onError:de[1]||(de[1]=Te=>ce.$emit("error",Te))},null,8,["classroom-model-url","avatar-model-url","avatar-position","camera-config","is-speaking","visemes","gestures","current-time","presentation-result"]),s.enableSubtitles?(_.openBlock(),_.createElementBlock("div",Dx,[_.unref(r)?(_.openBlock(),_.createElementBlock("div",Nx,[...de[6]||(de[6]=[_.createElementVNode("span",{class:"liya-ai-env-vuejs-thinking-dot"},null,-1),_.createElementVNode("span",{class:"liya-ai-env-vuejs-thinking-dot"},null,-1),_.createElementVNode("span",{class:"liya-ai-env-vuejs-thinking-dot"},null,-1)])])):(_.openBlock(),_.createElementBlock("p",{key:1,class:_.normalizeClass(["liya-ai-env-vuejs-subtitle__text",{"liya-ai-env-vuejs-subtitle__welcome":_.unref(o).length===0}])},_.toDisplayString(ge()),3))])):_.createCommentVNode("",!0),_.createElementVNode("div",Ux,[_.createElementVNode("button",{class:_.normalizeClass(["liya-ai-env-vuejs-controls__mic",{"liya-ai-env-vuejs-controls__mic--active":_.unref(C),"liya-ai-env-vuejs-controls__mic--disabled":_.unref(r)||_.unref(i),"liya-ai-env-vuejs-controls__mic--not-supported":!_.unref(S)}]),disabled:_.unref(r)||_.unref(i),onClick:fe,"aria-label":_.unref(C)?_.unref(E).voice.stopRecording:_.unref(E).voice.startRecording},[_.unref(C)?(_.openBlock(),_.createElementBlock("svg",Bx,[...de[8]||(de[8]=[_.createElementVNode("path",{d:"M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"},null,-1),_.createElementVNode("path",{d:"M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"},null,-1)])])):(_.openBlock(),_.createElementBlock("svg",Fx,[...de[7]||(de[7]=[_.createElementVNode("path",{d:"M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"},null,-1)])]))],10,Ox),_.createElementVNode("p",Vx,_.toDisplayString(_.unref(C)?_.unref(E).voice.listening:_.unref(r)?_.unref(E).voice.thinking:_.unref(E).voice.pressToSpeak),1),_.createVNode(_.Transition,{name:"liya-ai-env-vuejs-toast"},{default:_.withCtx(()=>[Z.value?(_.openBlock(),_.createElementBlock("div",kx,[de[9]||(de[9]=_.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"18",height:"18"},[_.createElementVNode("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})],-1)),_.createElementVNode("span",null,_.toDisplayString(_.unref(E).voice.notSupported),1)])):_.createCommentVNode("",!0)]),_:1})])],64))])]))}}),[["__scopeId","data-v-a9be9856"]]),zx=_.defineComponent({__name:"LiyaEnvironment",props:{mode:{default:"modal_fullscreen"},isOpen:{type:Boolean,default:!1},showBackButton:{type:Boolean,default:!0},showCloseButton:{type:Boolean,default:!0},classroomModelUrl:{default:""},avatarModelUrl:{default:""},avatarPosition:{default:()=>({x:0,y:0,z:0})},cameraConfig:{default:()=>({position:{x:0,y:1.4,z:4},lookAt:{x:0,y:1.2,z:0},fov:45})},welcomeMessage:{default:""},enableGestures:{type:Boolean,default:!0},enableSubtitles:{type:Boolean,default:!0},assistantName:{default:""},theme:{default:()=>({})}},emits:["close","back","opened","closed","message-sent","message-received","speaking-started","speaking-ended","loaded","error"],setup(s){const e=s,t=_.computed(()=>e.mode==="modal_fullscreen");return(n,i)=>(_.openBlock(),_.createBlock(_.resolveDynamicComponent(t.value?Id:Dd),{"is-open":s.isOpen,"show-back-button":s.showBackButton,"show-close-button":s.showCloseButton,"classroom-model-url":s.classroomModelUrl,"avatar-model-url":s.avatarModelUrl,"avatar-position":s.avatarPosition,"camera-config":s.cameraConfig,"welcome-message":s.welcomeMessage,"enable-gestures":s.enableGestures,"enable-subtitles":s.enableSubtitles,"assistant-name":s.assistantName,theme:s.theme,onClose:i[0]||(i[0]=r=>n.$emit("close")),onBack:i[1]||(i[1]=r=>n.$emit("back")),onOpened:i[2]||(i[2]=r=>n.$emit("opened")),onClosed:i[3]||(i[3]=r=>n.$emit("closed")),onMessageSent:i[4]||(i[4]=r=>n.$emit("message-sent",r)),onMessageReceived:i[5]||(i[5]=r=>n.$emit("message-received",r)),onSpeakingStarted:i[6]||(i[6]=r=>n.$emit("speaking-started")),onSpeakingEnded:i[7]||(i[7]=r=>n.$emit("speaking-ended")),onLoaded:i[8]||(i[8]=r=>n.$emit("loaded")),onError:i[9]||(i[9]=r=>n.$emit("error",r))},null,40,["is-open","show-back-button","show-close-button","classroom-model-url","avatar-model-url","avatar-position","camera-config","welcome-message","enable-gestures","enable-subtitles","assistant-name","theme"]))}}),js=_.ref(0),io=_.ref(!1),ps=_.ref(new Uint8Array(0));let Yn=null,xn=null,Xs=null,so=null;function Hx(){const s=_.computed(()=>js.value),e=_.computed(()=>io.value),t=_.computed(()=>ps.value);async function n(){try{const l=await navigator.mediaDevices.getUserMedia({audio:!0}),c=window.AudioContext||window.webkitAudioContext;Yn=new c,Yn.state==="suspended"&&await Yn.resume(),xn=Yn.createAnalyser(),xn.fftSize=256,xn.smoothingTimeConstant=.8,Xs=Yn.createMediaStreamSource(l),Xs.connect(xn);const u=xn.frequencyBinCount;return ps.value=new Uint8Array(u),io.value=!0,i(),!0}catch{return!1}}function i(){if(!io.value||!xn)return;xn.getByteFrequencyData(ps.value);let l=0;for(let c=0;c<ps.value.length;c++)l+=ps.value[c];js.value=l/ps.value.length/255,so=requestAnimationFrame(i)}function r(){io.value=!1,so&&(cancelAnimationFrame(so),so=null),Xs&&(Xs.disconnect(),Xs=null),xn&&(xn.disconnect(),xn=null),Yn&&(Yn.close(),Yn=null),js.value=0}function o(){const l=js.value;return l<.1?.2:l<.3?.4:l<.5?.6:l<.7?.8:1}function a(){const l=js.value;return l<.3?"low":l<.6?"medium":"high"}return _.onUnmounted(()=>{r()}),{audioLevel:s,isAnalyzing:e,frequencyData:t,startAnalyzing:n,stopAnalyzing:r,getGestureIntensityFromAudio:o,getSpeakingEmphasis:a}}Ge.LIYA_AI_ENV_VUEJS_GESTURE_DEFINITIONS=Hs,Ge.LiyaAiEnvVuejsClassroomScene=Fa,Ge.LiyaAiEnvVuejsEnvironment=zx,Ge.LiyaAiEnvVuejsEnvironmentModal=Id,Ge.LiyaAiEnvVuejsEnvironmentStandalone=Dd,Ge.LiyaAiEnvVuejsFullBodyAvatar=Ty,Ge.LiyaAiEnvVuejsPlugin=Hl,Ge.default=Hl,Ge.liyaAiEnvVuejsDetectBrowserLocale=zl,Ge.liyaAiEnvVuejsGenerateSpeech=Ul,Ge.liyaAiEnvVuejsGetClient=Il,Ge.liyaAiEnvVuejsGetConfig=ei,Ge.liyaAiEnvVuejsGetGestureDefinition=yy,Ge.liyaAiEnvVuejsGetPresentations=Bl,Ge.liyaAiEnvVuejsGetSessionHistory=cf,Ge.liyaAiEnvVuejsInitializeClient=Pl,Ge.liyaAiEnvVuejsInterpolateKeyframes=Td,Ge.liyaAiEnvVuejsIsInitialized=lf,Ge.liyaAiEnvVuejsIsSupportedLocale=As,Ge.liyaAiEnvVuejsSendMessage=Nl,Ge.liyaAiEnvVuejsTranslations=kl,Ge.useLiyaAiEnvVuejsAudioAnalyzer=Hx,Ge.useLiyaAiEnvVuejsEnvironment=ka,Ge.useLiyaAiEnvVuejsGestures=Oa,Ge.useLiyaAiEnvVuejsI18n=ar,Ge.useLiyaAiEnvVuejsVoice=Ga,Object.defineProperties(Ge,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
