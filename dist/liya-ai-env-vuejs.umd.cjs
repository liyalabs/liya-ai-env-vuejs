(function(qe,h){typeof exports=="object"&&typeof module<"u"?h(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],h):(qe=typeof globalThis<"u"?globalThis:qe||self,h(qe.LiyaAiEnvVuejs={},qe.Vue))})(this,(function(qe,h){"use strict";var pS=Object.defineProperty;var mS=(qe,h,ri)=>h in qe?pS(qe,h,{enumerable:!0,configurable:!0,writable:!0,value:ri}):qe[h]=ri;var Qa=(qe,h,ri)=>mS(qe,typeof h!="symbol"?h+"":h,ri);function ri(i,e){return function(){return i.apply(e,arguments)}}const{toString:$d}=Object.prototype,{getPrototypeOf:po}=Object,{iterator:nr,toStringTag:el}=Symbol,ir=(i=>e=>{const t=$d.call(e);return i[t]||(i[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),an=i=>(i=i.toLowerCase(),e=>ir(e)===i),sr=i=>e=>typeof e===i,{isArray:Bi}=Array,Vi=sr("undefined");function Ts(i){return i!==null&&!Vi(i)&&i.constructor!==null&&!Vi(i.constructor)&&Ht(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const tl=an("ArrayBuffer");function Yd(i){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(i):e=i&&i.buffer&&tl(i.buffer),e}const Kd=sr("string"),Ht=sr("function"),nl=sr("number"),bs=i=>i!==null&&typeof i=="object",Jd=i=>i===!0||i===!1,rr=i=>{if(ir(i)!=="object")return!1;const e=po(i);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(el in i)&&!(nr in i)},Zd=i=>{if(!bs(i)||Ts(i))return!1;try{return Object.keys(i).length===0&&Object.getPrototypeOf(i)===Object.prototype}catch{return!1}},Qd=an("Date"),eh=an("File"),th=an("Blob"),nh=an("FileList"),ih=i=>bs(i)&&Ht(i.pipe),sh=i=>{let e;return i&&(typeof FormData=="function"&&i instanceof FormData||Ht(i.append)&&((e=ir(i))==="formdata"||e==="object"&&Ht(i.toString)&&i.toString()==="[object FormData]"))},rh=an("URLSearchParams"),[oh,ah,lh,ch]=["ReadableStream","Request","Response","Headers"].map(an),uh=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ws(i,e,{allOwnKeys:t=!1}={}){if(i===null||typeof i>"u")return;let n,s;if(typeof i!="object"&&(i=[i]),Bi(i))for(n=0,s=i.length;n<s;n++)e.call(null,i[n],n,i);else{if(Ts(i))return;const r=t?Object.getOwnPropertyNames(i):Object.keys(i),o=r.length;let a;for(n=0;n<o;n++)a=r[n],e.call(null,i[a],a,i)}}function il(i,e){if(Ts(i))return null;e=e.toLowerCase();const t=Object.keys(i);let n=t.length,s;for(;n-- >0;)if(s=t[n],e===s.toLowerCase())return s;return null}const oi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,sl=i=>!Vi(i)&&i!==oi;function mo(){const{caseless:i,skipUndefined:e}=sl(this)&&this||{},t={},n=(s,r)=>{if(r==="__proto__"||r==="constructor"||r==="prototype")return;const o=i&&il(t,r)||r;rr(t[o])&&rr(s)?t[o]=mo(t[o],s):rr(s)?t[o]=mo({},s):Bi(s)?t[o]=s.slice():(!e||!Vi(s))&&(t[o]=s)};for(let s=0,r=arguments.length;s<r;s++)arguments[s]&&ws(arguments[s],n);return t}const dh=(i,e,t,{allOwnKeys:n}={})=>(ws(e,(s,r)=>{t&&Ht(s)?Object.defineProperty(i,r,{value:ri(s,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(i,r,{value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:n}),i),hh=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),fh=(i,e,t,n)=>{i.prototype=Object.create(e.prototype,n),Object.defineProperty(i.prototype,"constructor",{value:i,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(i,"super",{value:e.prototype}),t&&Object.assign(i.prototype,t)},ph=(i,e,t,n)=>{let s,r,o;const a={};if(e=e||{},i==null)return e;do{for(s=Object.getOwnPropertyNames(i),r=s.length;r-- >0;)o=s[r],(!n||n(o,i,e))&&!a[o]&&(e[o]=i[o],a[o]=!0);i=t!==!1&&po(i)}while(i&&(!t||t(i,e))&&i!==Object.prototype);return e},mh=(i,e,t)=>{i=String(i),(t===void 0||t>i.length)&&(t=i.length),t-=e.length;const n=i.indexOf(e,t);return n!==-1&&n===t},gh=i=>{if(!i)return null;if(Bi(i))return i;let e=i.length;if(!nl(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=i[e];return t},_h=(i=>e=>i&&e instanceof i)(typeof Uint8Array<"u"&&po(Uint8Array)),vh=(i,e)=>{const n=(i&&i[nr]).call(i);let s;for(;(s=n.next())&&!s.done;){const r=s.value;e.call(i,r[0],r[1])}},yh=(i,e)=>{let t;const n=[];for(;(t=i.exec(e))!==null;)n.push(t);return n},xh=an("HTMLFormElement"),Eh=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,n,s){return n.toUpperCase()+s}),rl=(({hasOwnProperty:i})=>(e,t)=>i.call(e,t))(Object.prototype),Sh=an("RegExp"),ol=(i,e)=>{const t=Object.getOwnPropertyDescriptors(i),n={};ws(t,(s,r)=>{let o;(o=e(s,r,i))!==!1&&(n[r]=o||s)}),Object.defineProperties(i,n)},Mh=i=>{ol(i,(e,t)=>{if(Ht(i)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const n=i[t];if(Ht(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},Ah=(i,e)=>{const t={},n=s=>{s.forEach(r=>{t[r]=!0})};return Bi(i)?n(i):n(String(i).split(e)),t},Th=()=>{},bh=(i,e)=>i!=null&&Number.isFinite(i=+i)?i:e;function wh(i){return!!(i&&Ht(i.append)&&i[el]==="FormData"&&i[nr])}const Rh=i=>{const e=new Array(10),t=(n,s)=>{if(bs(n)){if(e.indexOf(n)>=0)return;if(Ts(n))return n;if(!("toJSON"in n)){e[s]=n;const r=Bi(n)?[]:{};return ws(n,(o,a)=>{const l=t(o,s+1);!Vi(l)&&(r[a]=l)}),e[s]=void 0,r}}return n};return t(i,0)},Ch=an("AsyncFunction"),Lh=i=>i&&(bs(i)||Ht(i))&&Ht(i.then)&&Ht(i.catch),al=((i,e)=>i?setImmediate:e?((t,n)=>(oi.addEventListener("message",({source:s,data:r})=>{s===oi&&r===t&&n.length&&n.shift()()},!1),s=>{n.push(s),oi.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",Ht(oi.postMessage)),Ph=typeof queueMicrotask<"u"?queueMicrotask.bind(oi):typeof process<"u"&&process.nextTick||al,X={isArray:Bi,isArrayBuffer:tl,isBuffer:Ts,isFormData:sh,isArrayBufferView:Yd,isString:Kd,isNumber:nl,isBoolean:Jd,isObject:bs,isPlainObject:rr,isEmptyObject:Zd,isReadableStream:oh,isRequest:ah,isResponse:lh,isHeaders:ch,isUndefined:Vi,isDate:Qd,isFile:eh,isBlob:th,isRegExp:Sh,isFunction:Ht,isStream:ih,isURLSearchParams:rh,isTypedArray:_h,isFileList:nh,forEach:ws,merge:mo,extend:dh,trim:uh,stripBOM:hh,inherits:fh,toFlatObject:ph,kindOf:ir,kindOfTest:an,endsWith:mh,toArray:gh,forEachEntry:vh,matchAll:yh,isHTMLForm:xh,hasOwnProperty:rl,hasOwnProp:rl,reduceDescriptors:ol,freezeMethods:Mh,toObjectSet:Ah,toCamelCase:Eh,noop:Th,toFiniteNumber:bh,findKey:il,global:oi,isContextDefined:sl,isSpecCompliantForm:wh,toJSONObject:Rh,isAsyncFn:Ch,isThenable:Lh,setImmediate:al,asap:Ph,isIterable:i=>i!=null&&Ht(i[nr])};let Oe=class Xd extends Error{static from(e,t,n,s,r,o){const a=new Xd(e.message,t||e.code,n,s,r);return a.cause=e,a.name=e.name,o&&Object.assign(a,o),a}constructor(e,t,n,s,r){super(e),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),n&&(this.config=n),s&&(this.request=s),r&&(this.response=r,this.status=r.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:X.toJSONObject(this.config),code:this.code,status:this.status}}};Oe.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE",Oe.ERR_BAD_OPTION="ERR_BAD_OPTION",Oe.ECONNABORTED="ECONNABORTED",Oe.ETIMEDOUT="ETIMEDOUT",Oe.ERR_NETWORK="ERR_NETWORK",Oe.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS",Oe.ERR_DEPRECATED="ERR_DEPRECATED",Oe.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE",Oe.ERR_BAD_REQUEST="ERR_BAD_REQUEST",Oe.ERR_CANCELED="ERR_CANCELED",Oe.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT",Oe.ERR_INVALID_URL="ERR_INVALID_URL";const Ih=null;function go(i){return X.isPlainObject(i)||X.isArray(i)}function ll(i){return X.endsWith(i,"[]")?i.slice(0,-2):i}function cl(i,e,t){return i?i.concat(e).map(function(s,r){return s=ll(s),!t&&r?"["+s+"]":s}).join(t?".":""):e}function Nh(i){return X.isArray(i)&&!i.some(go)}const Dh=X.toFlatObject(X,{},null,function(e){return/^is[A-Z]/.test(e)});function or(i,e,t){if(!X.isObject(i))throw new TypeError("target must be an object");e=e||new FormData,t=X.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,m){return!X.isUndefined(m[v])});const n=t.metaTokens,s=t.visitor||u,r=t.dots,o=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&X.isSpecCompliantForm(e);if(!X.isFunction(s))throw new TypeError("visitor must be a function");function c(_){if(_===null)return"";if(X.isDate(_))return _.toISOString();if(X.isBoolean(_))return _.toString();if(!l&&X.isBlob(_))throw new Oe("Blob is not supported. Use a Buffer instead.");return X.isArrayBuffer(_)||X.isTypedArray(_)?l&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function u(_,v,m){let g=_;if(_&&!m&&typeof _=="object"){if(X.endsWith(v,"{}"))v=n?v:v.slice(0,-2),_=JSON.stringify(_);else if(X.isArray(_)&&Nh(_)||(X.isFileList(_)||X.endsWith(v,"[]"))&&(g=X.toArray(_)))return v=ll(v),g.forEach(function(y,w){!(X.isUndefined(y)||y===null)&&e.append(o===!0?cl([v],w,r):o===null?v:v+"[]",c(y))}),!1}return go(_)?!0:(e.append(cl(m,v,r),c(_)),!1)}const d=[],f=Object.assign(Dh,{defaultVisitor:u,convertValue:c,isVisitable:go});function p(_,v){if(!X.isUndefined(_)){if(d.indexOf(_)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(_),X.forEach(_,function(g,E){(!(X.isUndefined(g)||g===null)&&s.call(e,g,X.isString(E)?E.trim():E,v,f))===!0&&p(g,v?v.concat(E):[E])}),d.pop()}}if(!X.isObject(i))throw new TypeError("data must be an object");return p(i),e}function ul(i){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g,function(n){return e[n]})}function _o(i,e){this._pairs=[],i&&or(i,this,e)}const dl=_o.prototype;dl.append=function(e,t){this._pairs.push([e,t])},dl.toString=function(e){const t=e?function(n){return e.call(this,n,ul)}:ul;return this._pairs.map(function(s){return t(s[0])+"="+t(s[1])},"").join("&")};function Uh(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function hl(i,e,t){if(!e)return i;const n=t&&t.encode||Uh,s=X.isFunction(t)?{serialize:t}:t,r=s&&s.serialize;let o;if(r?o=r(e,s):o=X.isURLSearchParams(e)?e.toString():new _o(e,s).toString(n),o){const a=i.indexOf("#");a!==-1&&(i=i.slice(0,a)),i+=(i.indexOf("?")===-1?"?":"&")+o}return i}class fl{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){X.forEach(this.handlers,function(n){n!==null&&e(n)})}}const vo={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Oh={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<"u"?URLSearchParams:_o,FormData:typeof FormData<"u"?FormData:null,Blob:typeof Blob<"u"?Blob:null},protocols:["http","https","file","blob","url","data"]},yo=typeof window<"u"&&typeof document<"u",xo=typeof navigator=="object"&&navigator||void 0,Fh=yo&&(!xo||["ReactNative","NativeScript","NS"].indexOf(xo.product)<0),Bh=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Vh=yo&&window.location.href||"http://localhost",It={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:yo,hasStandardBrowserEnv:Fh,hasStandardBrowserWebWorkerEnv:Bh,navigator:xo,origin:Vh},Symbol.toStringTag,{value:"Module"})),...Oh};function kh(i,e){return or(i,new It.classes.URLSearchParams,{visitor:function(t,n,s,r){return It.isNode&&X.isBuffer(t)?(this.append(n,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...e})}function zh(i){return X.matchAll(/\w+|\[(\w*)]/g,i).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Hh(i){const e={},t=Object.keys(i);let n;const s=t.length;let r;for(n=0;n<s;n++)r=t[n],e[r]=i[r];return e}function pl(i){function e(t,n,s,r){let o=t[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=t.length;return o=!o&&X.isArray(s)?s.length:o,l?(X.hasOwnProp(s,o)?s[o]=[s[o],n]:s[o]=n,!a):((!s[o]||!X.isObject(s[o]))&&(s[o]=[]),e(t,n,s[o],r)&&X.isArray(s[o])&&(s[o]=Hh(s[o])),!a)}if(X.isFormData(i)&&X.isFunction(i.entries)){const t={};return X.forEachEntry(i,(n,s)=>{e(zh(n),s,t,0)}),t}return null}function Gh(i,e,t){if(X.isString(i))try{return(e||JSON.parse)(i),X.trim(i)}catch(n){if(n.name!=="SyntaxError")throw n}return(t||JSON.stringify)(i)}const Rs={transitional:vo,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",s=n.indexOf("application/json")>-1,r=X.isObject(e);if(r&&X.isHTMLForm(e)&&(e=new FormData(e)),X.isFormData(e))return s?JSON.stringify(pl(e)):e;if(X.isArrayBuffer(e)||X.isBuffer(e)||X.isStream(e)||X.isFile(e)||X.isBlob(e)||X.isReadableStream(e))return e;if(X.isArrayBufferView(e))return e.buffer;if(X.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return kh(e,this.formSerializer).toString();if((a=X.isFileList(e))||n.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return or(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return r||s?(t.setContentType("application/json",!1),Gh(e)):e}],transformResponse:[function(e){const t=this.transitional||Rs.transitional,n=t&&t.forcedJSONParsing,s=this.responseType==="json";if(X.isResponse(e)||X.isReadableStream(e))return e;if(e&&X.isString(e)&&(n&&!this.responseType||s)){const o=!(t&&t.silentJSONParsing)&&s;try{return JSON.parse(e,this.parseReviver)}catch(a){if(o)throw a.name==="SyntaxError"?Oe.from(a,Oe.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:It.classes.FormData,Blob:It.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};X.forEach(["delete","get","head","post","put","patch"],i=>{Rs.headers[i]={}});const Wh=X.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),jh=i=>{const e={};let t,n,s;return i&&i.split(`
`).forEach(function(o){s=o.indexOf(":"),t=o.substring(0,s).trim().toLowerCase(),n=o.substring(s+1).trim(),!(!t||e[t]&&Wh[t])&&(t==="set-cookie"?e[t]?e[t].push(n):e[t]=[n]:e[t]=e[t]?e[t]+", "+n:n)}),e},ml=Symbol("internals");function Cs(i){return i&&String(i).trim().toLowerCase()}function ar(i){return i===!1||i==null?i:X.isArray(i)?i.map(ar):String(i)}function Xh(i){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=t.exec(i);)e[n[1]]=n[2];return e}const qh=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function Eo(i,e,t,n,s){if(X.isFunction(n))return n.call(this,e,t);if(s&&(e=t),!!X.isString(e)){if(X.isString(n))return e.indexOf(n)!==-1;if(X.isRegExp(n))return n.test(e)}}function $h(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function Yh(i,e){const t=X.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(i,n+t,{value:function(s,r,o){return this[n].call(this,e,s,r,o)},configurable:!0})})}let Gt=class{constructor(e){e&&this.set(e)}set(e,t,n){const s=this;function r(a,l,c){const u=Cs(l);if(!u)throw new Error("header name must be a non-empty string");const d=X.findKey(s,u);(!d||s[d]===void 0||c===!0||c===void 0&&s[d]!==!1)&&(s[d||l]=ar(a))}const o=(a,l)=>X.forEach(a,(c,u)=>r(c,u,l));if(X.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(X.isString(e)&&(e=e.trim())&&!qh(e))o(jh(e),t);else if(X.isObject(e)&&X.isIterable(e)){let a={},l,c;for(const u of e){if(!X.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[c=u[0]]=(l=a[c])?X.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}o(a,t)}else e!=null&&r(t,e,n);return this}get(e,t){if(e=Cs(e),e){const n=X.findKey(this,e);if(n){const s=this[n];if(!t)return s;if(t===!0)return Xh(s);if(X.isFunction(t))return t.call(this,s,n);if(X.isRegExp(t))return t.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Cs(e),e){const n=X.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||Eo(this,this[n],n,t)))}return!1}delete(e,t){const n=this;let s=!1;function r(o){if(o=Cs(o),o){const a=X.findKey(n,o);a&&(!t||Eo(n,n[a],a,t))&&(delete n[a],s=!0)}}return X.isArray(e)?e.forEach(r):r(e),s}clear(e){const t=Object.keys(this);let n=t.length,s=!1;for(;n--;){const r=t[n];(!e||Eo(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const t=this,n={};return X.forEach(this,(s,r)=>{const o=X.findKey(n,r);if(o){t[o]=ar(s),delete t[r];return}const a=e?$h(r):String(r).trim();a!==r&&delete t[r],t[a]=ar(s),n[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return X.forEach(this,(n,s)=>{n!=null&&n!==!1&&(t[s]=e&&X.isArray(n)?n.join(", "):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach(s=>n.set(s)),n}static accessor(e){const n=(this[ml]=this[ml]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=Cs(o);n[a]||(Yh(s,o),n[a]=!0)}return X.isArray(e)?e.forEach(r):r(e),this}};Gt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),X.reduceDescriptors(Gt.prototype,({value:i},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>i,set(n){this[t]=n}}}),X.freezeMethods(Gt);function So(i,e){const t=this||Rs,n=e||t,s=Gt.from(n.headers);let r=n.data;return X.forEach(i,function(a){r=a.call(t,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function gl(i){return!!(i&&i.__CANCEL__)}let Ls=class extends Oe{constructor(e,t,n){super(e??"canceled",Oe.ERR_CANCELED,t,n),this.name="CanceledError",this.__CANCEL__=!0}};function _l(i,e,t){const n=t.config.validateStatus;!t.status||!n||n(t.status)?i(t):e(new Oe("Request failed with status code "+t.status,[Oe.ERR_BAD_REQUEST,Oe.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function Kh(i){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return e&&e[1]||""}function Jh(i,e){i=i||10;const t=new Array(i),n=new Array(i);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=n[r];o||(o=c),t[s]=l,n[s]=c;let d=r,f=0;for(;d!==s;)f+=t[d++],d=d%i;if(s=(s+1)%i,s===r&&(r=(r+1)%i),c-o<e)return;const p=u&&c-u;return p?Math.round(f*1e3/p):void 0}}function Zh(i,e){let t=0,n=1e3/e,s,r;const o=(c,u=Date.now())=>{t=u,s=null,r&&(clearTimeout(r),r=null),i(...c)};return[(...c)=>{const u=Date.now(),d=u-t;d>=n?o(c,u):(s=c,r||(r=setTimeout(()=>{r=null,o(s)},n-d)))},()=>s&&o(s)]}const lr=(i,e,t=3)=>{let n=0;const s=Jh(50,250);return Zh(r=>{const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=o-n,c=s(l),u=o<=a;n=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};i(d)},t)},vl=(i,e)=>{const t=i!=null;return[n=>e[0]({lengthComputable:t,total:i,loaded:n}),e[1]]},yl=i=>(...e)=>X.asap(()=>i(...e)),Qh=It.hasStandardBrowserEnv?((i,e)=>t=>(t=new URL(t,It.origin),i.protocol===t.protocol&&i.host===t.host&&(e||i.port===t.port)))(new URL(It.origin),It.navigator&&/(msie|trident)/i.test(It.navigator.userAgent)):()=>!0,ef=It.hasStandardBrowserEnv?{write(i,e,t,n,s,r,o){if(typeof document>"u")return;const a=[`${i}=${encodeURIComponent(e)}`];X.isNumber(t)&&a.push(`expires=${new Date(t).toUTCString()}`),X.isString(n)&&a.push(`path=${n}`),X.isString(s)&&a.push(`domain=${s}`),r===!0&&a.push("secure"),X.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(i){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+i+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(i){this.write(i,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function tf(i){return typeof i!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function nf(i,e){return e?i.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):i}function xl(i,e,t){let n=!tf(e);return i&&(n||t==!1)?nf(i,e):e}const El=i=>i instanceof Gt?{...i}:i;function ai(i,e){e=e||{};const t={};function n(c,u,d,f){return X.isPlainObject(c)&&X.isPlainObject(u)?X.merge.call({caseless:f},c,u):X.isPlainObject(u)?X.merge({},u):X.isArray(u)?u.slice():u}function s(c,u,d,f){if(X.isUndefined(u)){if(!X.isUndefined(c))return n(void 0,c,d,f)}else return n(c,u,d,f)}function r(c,u){if(!X.isUndefined(u))return n(void 0,u)}function o(c,u){if(X.isUndefined(u)){if(!X.isUndefined(c))return n(void 0,c)}else return n(void 0,u)}function a(c,u,d){if(d in e)return n(c,u);if(d in i)return n(void 0,c)}const l={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,d)=>s(El(c),El(u),d,!0)};return X.forEach(Object.keys({...i,...e}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const d=X.hasOwnProp(l,u)?l[u]:s,f=d(i[u],e[u],u);X.isUndefined(f)&&d!==a||(t[u]=f)}),t}const Sl=i=>{const e=ai({},i);let{data:t,withXSRFToken:n,xsrfHeaderName:s,xsrfCookieName:r,headers:o,auth:a}=e;if(e.headers=o=Gt.from(o),e.url=hl(xl(e.baseURL,e.url,e.allowAbsoluteUrls),i.params,i.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),X.isFormData(t)){if(It.hasStandardBrowserEnv||It.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(X.isFunction(t.getHeaders)){const l=t.getHeaders(),c=["content-type","content-length"];Object.entries(l).forEach(([u,d])=>{c.includes(u.toLowerCase())&&o.set(u,d)})}}if(It.hasStandardBrowserEnv&&(n&&X.isFunction(n)&&(n=n(e)),n||n!==!1&&Qh(e.url))){const l=s&&r&&ef.read(r);l&&o.set(s,l)}return e},sf=typeof XMLHttpRequest<"u"&&function(i){return new Promise(function(t,n){const s=Sl(i);let r=s.data;const o=Gt.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=s,u,d,f,p,_;function v(){p&&p(),_&&_(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(s.method.toUpperCase(),s.url,!0),m.timeout=s.timeout;function g(){if(!m)return;const y=Gt.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),C={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:y,config:i,request:m};_l(function(R){t(R),v()},function(R){n(R),v()},C),m=null}"onloadend"in m?m.onloadend=g:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(g)},m.onabort=function(){m&&(n(new Oe("Request aborted",Oe.ECONNABORTED,i,m)),m=null)},m.onerror=function(w){const C=w&&w.message?w.message:"Network Error",T=new Oe(C,Oe.ERR_NETWORK,i,m);T.event=w||null,n(T),m=null},m.ontimeout=function(){let w=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const C=s.transitional||vo;s.timeoutErrorMessage&&(w=s.timeoutErrorMessage),n(new Oe(w,C.clarifyTimeoutError?Oe.ETIMEDOUT:Oe.ECONNABORTED,i,m)),m=null},r===void 0&&o.setContentType(null),"setRequestHeader"in m&&X.forEach(o.toJSON(),function(w,C){m.setRequestHeader(C,w)}),X.isUndefined(s.withCredentials)||(m.withCredentials=!!s.withCredentials),a&&a!=="json"&&(m.responseType=s.responseType),c&&([f,_]=lr(c,!0),m.addEventListener("progress",f)),l&&m.upload&&([d,p]=lr(l),m.upload.addEventListener("progress",d),m.upload.addEventListener("loadend",p)),(s.cancelToken||s.signal)&&(u=y=>{m&&(n(!y||y.type?new Ls(null,i,m):y),m.abort(),m=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const E=Kh(s.url);if(E&&It.protocols.indexOf(E)===-1){n(new Oe("Unsupported protocol "+E+":",Oe.ERR_BAD_REQUEST,i));return}m.send(r||null)})},rf=(i,e)=>{const{length:t}=i=i?i.filter(Boolean):[];if(e||t){let n=new AbortController,s;const r=function(c){if(!s){s=!0,a();const u=c instanceof Error?c:this.reason;n.abort(u instanceof Oe?u:new Ls(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,r(new Oe(`timeout of ${e}ms exceeded`,Oe.ETIMEDOUT))},e);const a=()=>{i&&(o&&clearTimeout(o),o=null,i.forEach(c=>{c.unsubscribe?c.unsubscribe(r):c.removeEventListener("abort",r)}),i=null)};i.forEach(c=>c.addEventListener("abort",r));const{signal:l}=n;return l.unsubscribe=()=>X.asap(a),l}},of=function*(i,e){let t=i.byteLength;if(t<e){yield i;return}let n=0,s;for(;n<t;)s=n+e,yield i.slice(n,s),n=s},af=async function*(i,e){for await(const t of lf(i))yield*of(t,e)},lf=async function*(i){if(i[Symbol.asyncIterator]){yield*i;return}const e=i.getReader();try{for(;;){const{done:t,value:n}=await e.read();if(t)break;yield n}}finally{await e.cancel()}},Ml=(i,e,t,n)=>{const s=af(i,e);let r=0,o,a=l=>{o||(o=!0,n&&n(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await s.next();if(c){a(),l.close();return}let d=u.byteLength;if(t){let f=r+=d;t(f)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),s.return()}},{highWaterMark:2})},Al=64*1024,{isFunction:cr}=X,cf=(({Request:i,Response:e})=>({Request:i,Response:e}))(X.global),{ReadableStream:Tl,TextEncoder:bl}=X.global,wl=(i,...e)=>{try{return!!i(...e)}catch{return!1}},uf=i=>{i=X.merge.call({skipUndefined:!0},cf,i);const{fetch:e,Request:t,Response:n}=i,s=e?cr(e):typeof fetch=="function",r=cr(t),o=cr(n);if(!s)return!1;const a=s&&cr(Tl),l=s&&(typeof bl=="function"?(_=>v=>_.encode(v))(new bl):async _=>new Uint8Array(await new t(_).arrayBuffer())),c=r&&a&&wl(()=>{let _=!1;const v=new t(It.origin,{body:new Tl,method:"POST",get duplex(){return _=!0,"half"}}).headers.has("Content-Type");return _&&!v}),u=o&&a&&wl(()=>X.isReadableStream(new n("").body)),d={stream:u&&(_=>_.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(_=>{!d[_]&&(d[_]=(v,m)=>{let g=v&&v[_];if(g)return g.call(v);throw new Oe(`Response type '${_}' is not supported`,Oe.ERR_NOT_SUPPORT,m)})});const f=async _=>{if(_==null)return 0;if(X.isBlob(_))return _.size;if(X.isSpecCompliantForm(_))return(await new t(It.origin,{method:"POST",body:_}).arrayBuffer()).byteLength;if(X.isArrayBufferView(_)||X.isArrayBuffer(_))return _.byteLength;if(X.isURLSearchParams(_)&&(_=_+""),X.isString(_))return(await l(_)).byteLength},p=async(_,v)=>{const m=X.toFiniteNumber(_.getContentLength());return m??f(v)};return async _=>{let{url:v,method:m,data:g,signal:E,cancelToken:y,timeout:w,onDownloadProgress:C,onUploadProgress:T,responseType:R,headers:H,withCredentials:S="same-origin",fetchOptions:b}=Sl(_),G=e||fetch;R=R?(R+"").toLowerCase():"text";let J=rf([E,y&&y.toAbortSignal()],w),ae=null;const P=J&&J.unsubscribe&&(()=>{J.unsubscribe()});let I;try{if(T&&c&&m!=="get"&&m!=="head"&&(I=await p(H,g))!==0){let Q=new t(v,{method:"POST",body:g,duplex:"half"}),de;if(X.isFormData(g)&&(de=Q.headers.get("content-type"))&&H.setContentType(de),Q.body){const[z,ne]=vl(I,lr(yl(T)));g=Ml(Q.body,Al,z,ne)}}X.isString(S)||(S=S?"include":"omit");const N=r&&"credentials"in t.prototype,te={...b,signal:J,method:m.toUpperCase(),headers:H.normalize().toJSON(),body:g,duplex:"half",credentials:N?S:void 0};ae=r&&new t(v,te);let V=await(r?G(ae,b):G(v,te));const q=u&&(R==="stream"||R==="response");if(u&&(C||q&&P)){const Q={};["status","statusText","headers"].forEach(se=>{Q[se]=V[se]});const de=X.toFiniteNumber(V.headers.get("content-length")),[z,ne]=C&&vl(de,lr(yl(C),!0))||[];V=new n(Ml(V.body,Al,z,()=>{ne&&ne(),P&&P()}),Q)}R=R||"text";let $=await d[X.findKey(d,R)||"text"](V,_);return!q&&P&&P(),await new Promise((Q,de)=>{_l(Q,de,{data:$,headers:Gt.from(V.headers),status:V.status,statusText:V.statusText,config:_,request:ae})})}catch(N){throw P&&P(),N&&N.name==="TypeError"&&/Load failed|fetch/i.test(N.message)?Object.assign(new Oe("Network Error",Oe.ERR_NETWORK,_,ae,N&&N.response),{cause:N.cause||N}):Oe.from(N,N&&N.code,_,ae,N&&N.response)}}},df=new Map,Rl=i=>{let e=i&&i.env||{};const{fetch:t,Request:n,Response:s}=e,r=[n,s,t];let o=r.length,a=o,l,c,u=df;for(;a--;)l=r[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:uf(e)),u=c;return c};Rl();const Mo={http:Ih,xhr:sf,fetch:{get:Rl}};X.forEach(Mo,(i,e)=>{if(i){try{Object.defineProperty(i,"name",{value:e})}catch{}Object.defineProperty(i,"adapterName",{value:e})}});const Cl=i=>`- ${i}`,hf=i=>X.isFunction(i)||i===null||i===!1;function ff(i,e){i=X.isArray(i)?i:[i];const{length:t}=i;let n,s;const r={};for(let o=0;o<t;o++){n=i[o];let a;if(s=n,!hf(n)&&(s=Mo[(a=String(n)).toLowerCase()],s===void 0))throw new Oe(`Unknown adapter '${a}'`);if(s&&(X.isFunction(s)||(s=s.get(e))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=t?o.length>1?`since :
`+o.map(Cl).join(`
`):" "+Cl(o[0]):"as no adapter specified";throw new Oe("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return s}const Ll={getAdapter:ff,adapters:Mo};function Ao(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new Ls(null,i)}function Pl(i){return Ao(i),i.headers=Gt.from(i.headers),i.data=So.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),Ll.getAdapter(i.adapter||Rs.adapter,i)(i).then(function(n){return Ao(i),n.data=So.call(i,i.transformResponse,n),n.headers=Gt.from(n.headers),n},function(n){return gl(n)||(Ao(i),n&&n.response&&(n.response.data=So.call(i,i.transformResponse,n.response),n.response.headers=Gt.from(n.response.headers))),Promise.reject(n)})}const Il="1.13.5",ur={};["object","boolean","number","function","string","symbol"].forEach((i,e)=>{ur[i]=function(n){return typeof n===i||"a"+(e<1?"n ":" ")+i}});const Nl={};ur.transitional=function(e,t,n){function s(r,o){return"[Axios v"+Il+"] Transitional option '"+r+"'"+o+(n?". "+n:"")}return(r,o,a)=>{if(e===!1)throw new Oe(s(o," has been removed"+(t?" in "+t:"")),Oe.ERR_DEPRECATED);return t&&!Nl[o]&&(Nl[o]=!0,console.warn(s(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(r,o,a):!0}},ur.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function pf(i,e,t){if(typeof i!="object")throw new Oe("options must be an object",Oe.ERR_BAD_OPTION_VALUE);const n=Object.keys(i);let s=n.length;for(;s-- >0;){const r=n[s],o=e[r];if(o){const a=i[r],l=a===void 0||o(a,r,i);if(l!==!0)throw new Oe("option "+r+" must be "+l,Oe.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Oe("Unknown option "+r,Oe.ERR_BAD_OPTION)}}const dr={assertOptions:pf,validators:ur},Zt=dr.validators;let li=class{constructor(e){this.defaults=e||{},this.interceptors={request:new fl,response:new fl}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=s.stack?s.stack.replace(/^.+\n/,""):"";try{n.stack?r&&!String(n.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+r):n.stack=r}catch{}}throw n}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=ai(this.defaults,t);const{transitional:n,paramsSerializer:s,headers:r}=t;n!==void 0&&dr.assertOptions(n,{silentJSONParsing:Zt.transitional(Zt.boolean),forcedJSONParsing:Zt.transitional(Zt.boolean),clarifyTimeoutError:Zt.transitional(Zt.boolean),legacyInterceptorReqResOrdering:Zt.transitional(Zt.boolean)},!1),s!=null&&(X.isFunction(s)?t.paramsSerializer={serialize:s}:dr.assertOptions(s,{encode:Zt.function,serialize:Zt.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),dr.assertOptions(t,{baseUrl:Zt.spelling("baseURL"),withXsrfToken:Zt.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=r&&X.merge(r.common,r[t.method]);r&&X.forEach(["delete","get","head","post","put","patch","common"],_=>{delete r[_]}),t.headers=Gt.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(v){if(typeof v.runWhen=="function"&&v.runWhen(t)===!1)return;l=l&&v.synchronous;const m=t.transitional||vo;m&&m.legacyInterceptorReqResOrdering?a.unshift(v.fulfilled,v.rejected):a.push(v.fulfilled,v.rejected)});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,d=0,f;if(!l){const _=[Pl.bind(this),void 0];for(_.unshift(...a),_.push(...c),f=_.length,u=Promise.resolve(t);d<f;)u=u.then(_[d++],_[d++]);return u}f=a.length;let p=t;for(;d<f;){const _=a[d++],v=a[d++];try{p=_(p)}catch(m){v.call(this,m);break}}try{u=Pl.call(this,p)}catch(_){return Promise.reject(_)}for(d=0,f=c.length;d<f;)u=u.then(c[d++],c[d++]);return u}getUri(e){e=ai(this.defaults,e);const t=xl(e.baseURL,e.url,e.allowAbsoluteUrls);return hl(t,e.params,e.paramsSerializer)}};X.forEach(["delete","get","head","options"],function(e){li.prototype[e]=function(t,n){return this.request(ai(n||{},{method:e,url:t,data:(n||{}).data}))}}),X.forEach(["post","put","patch"],function(e){function t(n){return function(r,o,a){return this.request(ai(a||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}li.prototype[e]=t(),li.prototype[e+"Form"]=t(!0)});let mf=class qd{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(r){t=r});const n=this;this.promise.then(s=>{if(!n._listeners)return;let r=n._listeners.length;for(;r-- >0;)n._listeners[r](s);n._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{n.subscribe(a),r=a}).then(s);return o.cancel=function(){n.unsubscribe(r)},o},e(function(r,o,a){n.reason||(n.reason=new Ls(r,o,a),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=n=>{e.abort(n)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new qd(function(s){e=s}),cancel:e}}};function gf(i){return function(t){return i.apply(null,t)}}function _f(i){return X.isObject(i)&&i.isAxiosError===!0}const To={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(To).forEach(([i,e])=>{To[e]=i});function Dl(i){const e=new li(i),t=ri(li.prototype.request,e);return X.extend(t,li.prototype,e,{allOwnKeys:!0}),X.extend(t,e,null,{allOwnKeys:!0}),t.create=function(s){return Dl(ai(i,s))},t}const _t=Dl(Rs);_t.Axios=li,_t.CanceledError=Ls,_t.CancelToken=mf,_t.isCancel=gl,_t.VERSION=Il,_t.toFormData=or,_t.AxiosError=Oe,_t.Cancel=_t.CanceledError,_t.all=function(e){return Promise.all(e)},_t.spread=gf,_t.isAxiosError=_f,_t.mergeConfig=ai,_t.AxiosHeaders=Gt,_t.formToJSON=i=>pl(X.isHTMLForm(i)?new FormData(i):i),_t.getAdapter=Ll.getAdapter,_t.HttpStatusCode=To,_t.default=_t;const{Axios:SS,AxiosError:MS,CanceledError:AS,isCancel:TS,CancelToken:bS,VERSION:wS,all:RS,Cancel:CS,isAxiosError:LS,spread:PS,toFormData:IS,AxiosHeaders:NS,HttpStatusCode:DS,formToJSON:US,getAdapter:OS,mergeConfig:FS}=_t;let Ps=null,hr=null;function Ul(i){hr=i,Ps=_t.create({baseURL:i.apiUrl,timeout:6e4,headers:{"Content-Type":"application/json","X-API-Key":i.apiKey}}),Ps.interceptors.response.use(e=>e,e=>Promise.reject(e))}function Ol(){if(!Ps)throw new Error("[LiyaAiEnvVuejs] API client not initialized. Call liyaAiEnvVuejsInitializeClient first.");return Ps}function ci(){if(!hr)throw new Error("[LiyaAiEnvVuejs] Config not initialized. Call liyaAiEnvVuejsInitializeClient first.");return hr}function vf(){return Ps!==null&&hr!==null}async function ui(i,e,t){var s,r,o,a;const n=Ol();try{return(await n.request({method:i,url:e,data:t})).data}catch(l){return _t.isAxiosError(l)?{status:"error",message:((r=(s=l.response)==null?void 0:s.data)==null?void 0:r.message)||l.message,code:((a=(o=l.response)==null?void 0:o.data)==null?void 0:a.code)||void 0}:{status:"error",message:"An unexpected error occurred"}}}class Fl extends Error{constructor(t,n){super(t);Qa(this,"code");this.code=n,this.name="LiyaAiEnvVuejsApiError"}}async function Bl(i,e){const n={assistant_id:ci().assistantId,message:i,session_id:e},s=await ui("POST","/api/v1/external/chat/",n);if(s.status==="success"&&s.data)return s.data;if(s.code)throw new Fl(s.message||"API error",s.code);return null}async function Vl(i,e){const t={text:i,voice:(e==null?void 0:e.voice)||"nova",speed:(e==null?void 0:e.speed)||1,include_audio:(e==null?void 0:e.include_audio)??!0,include_gestures:(e==null?void 0:e.include_gestures)??!0},n=await ui("POST","/api/v1/external/avatar/speech/",t);return n.status==="success"&&n.data?n.data:null}async function yf(i){const e=await ui("GET",`/api/v1/external/sessions/${i}/messages/`);return e.status==="success"&&e.data?e.data.messages:[]}class bo extends Error{constructor(t,n){super(t);Qa(this,"code");this.code=n,this.name="LiyaAiEnvVuejsAvatarApiError"}}async function kl(i){const t=ci().assistantId,n=t?`?assistant_id=${t}`:"",s=await ui("GET",`/api/v1/external/avatar/model/${n}`);if(s.status==="success"&&s.data)return s.data;throw new bo(s.message||"Failed to get avatar model","AVATAR_MODEL_ERROR")}async function zl(i){const t=ci().assistantId,n=t?`?assistant_id=${t}`:"",s=await ui("GET",`/api/v1/external/scene/background/${n}`);if(s.status==="success"&&s.data)return s.data;throw new bo(s.message||"Failed to get scene background","SCENE_BACKGROUND_ERROR")}async function Hl(i){const e=ci(),t=i||e.assistantId,n=t?`?assistant_id=${t}`:"",s=await ui("GET",`/api/v1/external/presentations/${n}`);return s.status==="success"&&s.data?s.data:[]}async function Gl(){const i=await ui("GET","/api/v1/external/user/access/");if(i.status==="success"&&i.data)return i.data;throw new bo(i.message||"Failed to check user access","USER_ACCESS_ERROR")}const Wl={tr:{status:{ready:"Hazır",listening:"Dinliyorum...",preparing:"Hazırlanıyor...",speaking:"Konuşuyor...",online:"Çevrimiçi"},browser:{unsupportedTitle:"Tarayıcı Desteklenmiyor",unsupportedMessage:"Bu ortam tarayıcınızda çalışmıyor. 3D sahne için WebGL desteği gereklidir.",webglRequired:"WebGL desteği gerekli",recommendedBrowsers:"Önerilen: Chrome, Edge, Firefox, Safari",closeButton:"Kapat"},mic:{permissionRequired:"Mikrofon İzni Gerekli",permissionMessage:"Sesli iletişim için mikrofon erişimine izin verin.",allowButton:"İzin Ver",denied:"Mikrofon izni reddedildi"},preparingMessages:["Hazırlanıyor...","Düşünüyorum... 🤔","Biraz daha bekleyin...","Cevabı hazırlıyorum... ✍️","Neredeyse bitti... ⏳","Az kaldı, sabırlı olun... 😊","Detaylı bir cevap geliyor...","Hâlâ düşünüyorum... 🧠","Bu güzel bir soru, biraz zaman alıyor...","Son rötuşlar... ✨"],chat:{placeholder:"Mesajınızı yazın...",premiumRequired:"Premium abonelik gerekli",userRole:"Sen",emptyWelcome:"Merhaba! Size nasıl yardımcı olabilirim?"},welcomeSuggestions:["Kendini tanıt","Konu hakkında özet bilgi ver","Derse başla","Bir sonraki slayta geç","Bir önceki slayta geç"],voice:{startRecording:"Konuşmaya başla",stopRecording:"Dinlemeyi durdur",listening:"Dinliyorum...",thinking:"Düşünüyorum...",pressToSpeak:"Konuşmak için mikrofona basın",notSupported:"Ses tanıma bu tarayıcıda desteklenmiyor"},controls:{close:"Kapat",back:"Geri",cancel:"İptal",replay:"Tekrar Oynat",pressAndSpeak:"Bas ve Konuş"},patienceTooltips:["Sakin ol, çay demle ☕","Acele işe şeytan karışır! 😈","Biraz sabır, güzel şeyler geliyor... ✨","Yavaş yavaş, torba dolacak 🐢","Beklemek de bir sanattır 🎨","Nefes al, ver... 🧘","Roma bir günde kurulmadı! 🏛️","Sabır acıdır, meyvesi tatlıdır 🍎"],premium:{title:"Premium Özellik",upgradePremium:"Bu özelliği kullanmak için Premium veya Premium Plus abonelik gereklidir.",upgradePremiumPlus:"Bu özelliği kullanmak için Premium Plus abonelik gereklidir.",viewPlans:"Planları İncele"},errors:{problemOccurred:"Bir sorun oluştu",tryAgainLater:"En kısa zamanda çözülecektir. Lütfen daha sonra tekrar deneyin.",connectionError:"Bağlantı hatası oluştu",sendError:"Mesaj gönderilemedi"},branding:{environmentTitle:"Liya AI Environment"},settings:{title:"Ayarlar",outfitColors:"Kıyafet Renkleri",top:"Üst",bottom:"Alt",footwear:"Ayakkabı",presets:"Hazır Renkler",customColor:"Özel Renk",reset:"Sıfırla"}},en:{status:{ready:"Ready",listening:"Listening...",preparing:"Preparing...",speaking:"Speaking...",online:"Online"},browser:{unsupportedTitle:"Browser Not Supported",unsupportedMessage:"This environment does not work in your browser. WebGL support is required for 3D scene.",webglRequired:"WebGL support required",recommendedBrowsers:"Recommended: Chrome, Edge, Firefox, Safari",closeButton:"Close"},mic:{permissionRequired:"Microphone Permission Required",permissionMessage:"Allow microphone access for voice communication.",allowButton:"Allow",denied:"Microphone permission denied"},preparingMessages:["Preparing...","Thinking... 🤔","Hold on a moment...","Preparing the answer... ✍️","Almost done... ⏳","Just a bit more, please be patient... 😊","A detailed answer is coming...","Still thinking... 🧠","Great question, it takes a moment...","Final touches... ✨"],chat:{placeholder:"Type your message...",premiumRequired:"Premium subscription required",userRole:"You",emptyWelcome:"Hello! How can I help you?"},welcomeSuggestions:["Introduce yourself","Give a summary about the topic","Start the lesson","Go to next slide","Go to previous slide"],voice:{startRecording:"Start speaking",stopRecording:"Stop listening",listening:"Listening...",thinking:"Thinking...",pressToSpeak:"Press the microphone to speak",notSupported:"Voice recognition is not supported in this browser"},controls:{close:"Close",back:"Back",cancel:"Cancel",replay:"Replay",pressAndSpeak:"Press & Speak"},patienceTooltips:["Easy there, tiger! 🐯","Patience, young padawan... ✨","Good things come to those who wait ⏳","Take a deep breath... 🧘","Rome wasn't built in a day! 🏛️","Slow and steady wins the race 🐢","Chill out, grab a coffee ☕","The best things in life are worth waiting for 🌟"],premium:{title:"Premium Feature",upgradePremium:"A Premium or Premium Plus subscription is required to use this feature.",upgradePremiumPlus:"A Premium Plus subscription is required to use this feature.",viewPlans:"View Plans"},errors:{problemOccurred:"A problem occurred",tryAgainLater:"It will be resolved as soon as possible. Please try again later.",connectionError:"Connection error occurred",sendError:"Failed to send message"},branding:{environmentTitle:"Liya AI Environment"},settings:{title:"Settings",outfitColors:"Outfit Colors",top:"Top",bottom:"Bottom",footwear:"Footwear",presets:"Presets",customColor:"Custom Color",reset:"Reset"}}};function Is(i){return i==="tr"||i==="en"}function jl(){if(typeof window>"u"||typeof navigator>"u")return"tr";const e=(navigator.language||navigator.userLanguage||"").split("-")[0].toLowerCase();return Is(e)?e:"tr"}const di=h.ref("tr");function fr(){const i=h.computed(()=>di.value),e=h.computed(()=>Wl[di.value]);function t(s){Is(s)?di.value=s:di.value="tr"}function n(s){s&&Is(s)?di.value=s:s?di.value="tr":di.value=jl()}return{locale:h.readonly(i),t:e,setLocale:t,initLocale:n,liyaAiEnvVuejsIsSupportedLocale:Is}}const Xl={install(i,e){if(!e.apiKey){console.error("[LiyaAiEnvVuejs] apiKey is required");return}if(!e.apiUrl){console.error("[LiyaAiEnvVuejs] apiUrl is required");return}if(!e.assistantId){console.error("[LiyaAiEnvVuejs] assistantId is required");return}Ul(e);const{initLocale:t}=fr();t(e.locale),i.config.globalProperties.$liyaAiEnvVuejs={config:e},i.provide("liyaAiEnvVuejsConfig",e)}};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wo="160",xf=0,ql=1,Ef=2,$l=1,Yl=2,bn=3,wn=0,Wt=1,gn=2,Vn=0,ki=1,Kl=2,Jl=3,Zl=4,Sf=5,hi=100,Mf=101,Af=102,Ql=103,ec=104,Tf=200,bf=201,wf=202,Rf=203,Ro=204,Co=205,Cf=206,Lf=207,Pf=208,If=209,Nf=210,Df=211,Uf=212,Of=213,Ff=214,Bf=0,Vf=1,kf=2,pr=3,zf=4,Hf=5,Gf=6,Wf=7,tc=0,jf=1,Xf=2,kn=0,qf=1,$f=2,Yf=3,nc=4,Kf=5,Jf=6,ic="attached",Zf="detached",sc=300,zi=301,Hi=302,Lo=303,Po=304,mr=306,Gi=1e3,Qt=1001,gr=1002,bt=1003,Io=1004,_r=1005,jt=1006,rc=1007,fi=1008,zn=1009,Qf=1010,ep=1011,No=1012,oc=1013,Hn=1014,Rn=1015,Ns=1016,ac=1017,lc=1018,pi=1020,tp=1021,en=1023,np=1024,ip=1025,mi=1026,Wi=1027,sp=1028,cc=1029,rp=1030,uc=1031,dc=1033,Do=33776,Uo=33777,Oo=33778,Fo=33779,hc=35840,fc=35841,pc=35842,mc=35843,gc=36196,_c=37492,vc=37496,yc=37808,xc=37809,Ec=37810,Sc=37811,Mc=37812,Ac=37813,Tc=37814,bc=37815,wc=37816,Rc=37817,Cc=37818,Lc=37819,Pc=37820,Ic=37821,Bo=36492,Nc=36494,Dc=36495,op=36283,Uc=36284,Oc=36285,Fc=36286,ap=2200,lp=2201,cp=2202,Ds=2300,ji=2301,Vo=2302,Xi=2400,qi=2401,vr=2402,ko=2500,up=2501,dp=0,Bc=1,zo=2,Vc=3e3,gi=3001,hp=3200,fp=3201,kc=0,pp=1,tn="",ft="srgb",wt="srgb-linear",Ho="display-p3",yr="display-p3-linear",xr="linear",dt="srgb",Er="rec709",Sr="p3",$i=7680,zc=519,mp=512,gp=513,_p=514,Hc=515,vp=516,yp=517,xp=518,Ep=519,Go=35044,Gc="300 es",Wo=1035,Cn=2e3,Mr=2001;class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wc=1234567;const Us=Math.PI/180,Yi=180/Math.PI;function ln(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Dt(i,e,t){return Math.max(e,Math.min(t,i))}function jo(i,e){return(i%e+e)%e}function Sp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Mp(i,e,t){return i!==e?(t-i)/(e-i):0}function Os(i,e,t){return(1-t)*i+t*e}function Ap(i,e,t,n){return Os(i,e,1-Math.exp(-t*n))}function Tp(i,e=1){return e-Math.abs(jo(i,e*2)-e)}function bp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function wp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Rp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Cp(i,e){return i+Math.random()*(e-i)}function Lp(i){return i*(.5-Math.random())}function Pp(i){i!==void 0&&(Wc=i);let e=Wc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ip(i){return i*Us}function Np(i){return i*Yi}function Xo(i){return(i&i-1)===0&&i!==0}function Dp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ar(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Up(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Op={DEG2RAD:Us,RAD2DEG:Yi,generateUUID:ln,clamp:Dt,euclideanModulo:jo,mapLinear:Sp,inverseLerp:Mp,lerp:Os,damp:Ap,pingpong:Tp,smoothstep:bp,smootherstep:wp,randInt:Rp,randFloat:Cp,randFloatSpread:Lp,seededRandom:Pp,degToRad:Ip,radToDeg:Np,isPowerOfTwo:Xo,ceilPowerOfTwo:Dp,floorPowerOfTwo:Ar,setQuaternionFromProperEuler:Up,normalize:ct,denormalize:_n};class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,n,s,r,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],p=n[5],_=n[8],v=s[0],m=s[3],g=s[6],E=s[1],y=s[4],w=s[7],C=s[2],T=s[5],R=s[8];return r[0]=o*v+a*E+l*C,r[3]=o*m+a*y+l*T,r[6]=o*g+a*w+l*R,r[1]=c*v+u*E+d*C,r[4]=c*m+u*y+d*T,r[7]=c*g+u*w+d*R,r[2]=f*v+p*E+_*C,r[5]=f*m+p*y+_*T,r[8]=f*g+p*w+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,p=c*r-o*l,_=t*d+n*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(s*c-u*n)*v,e[2]=(a*n-s*o)*v,e[3]=f*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qo.makeScale(e,t)),this}rotate(e){return this.premultiply(qo.makeRotation(-e)),this}translate(e,t){return this.premultiply(qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qo=new $e;function jc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fp(){const i=Fs("canvas");return i.style.display="block",i}const Xc={};function Bs(i){i in Xc||(Xc[i]=!0,console.warn(i))}const qc=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$c=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Tr={[wt]:{transfer:xr,primaries:Er,toReference:i=>i,fromReference:i=>i},[ft]:{transfer:dt,primaries:Er,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[yr]:{transfer:xr,primaries:Sr,toReference:i=>i.applyMatrix3($c),fromReference:i=>i.applyMatrix3(qc)},[Ho]:{transfer:dt,primaries:Sr,toReference:i=>i.convertSRGBToLinear().applyMatrix3($c),fromReference:i=>i.applyMatrix3(qc).convertLinearToSRGB()}},Bp=new Set([wt,yr]),ot={enabled:!0,_workingColorSpace:wt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Bp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Tr[e].toReference,s=Tr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Tr[i].primaries},getTransfer:function(i){return i===tn?xr:Tr[i].transfer}};function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $o(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ji;class Yc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ji===void 0&&(Ji=Fs("canvas")),Ji.width=e.width,Ji.height=e.height;const n=Ji.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ki(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vp=0;class Kc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=ln(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Yo(s[o].image)):r.push(Yo(s[o]))}else r=Yo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Yo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kp=0;class Lt extends _i{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Qt,s=Qt,r=jt,o=fi,a=en,l=zn,c=Lt.DEFAULT_ANISOTROPY,u=tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=ln(),this.name="",this.source=new Kc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===gi?ft:tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gi:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gi:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ft?gi:Vc}set encoding(e){Bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===gi?ft:tn}}Lt.DEFAULT_IMAGE=null,Lt.DEFAULT_MAPPING=sc,Lt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,s=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],_=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,w=(p+1)/2,C=(g+1)/2,T=(u+f)/4,R=(d+v)/4,H=(_+m)/4;return y>w&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=R/n):w>C?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=T/s,r=H/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=R/r,s=H/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(d-v)/E,this.z=(f-u)/E,this.w=Math.acos((c+p+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zp extends _i{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(Bs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===gi?ft:tn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Lt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Kc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends zp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jc extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hp extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const f=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(d!==v||l!==f||c!==p||u!==_){let m=1-a;const g=l*f+c*p+u*_+d*v,E=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const C=Math.sqrt(y),T=Math.atan2(C,g*E);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const w=a*E;if(l=l*m+f*w,c=c*m+p*w,u=u*m+_*w,d=d*m+v*w,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*d+l*p-c*f,e[t+1]=l*_+u*f+c*d-a*p,e[t+2]=c*_+u*p+a*f-l*d,e[t+3]=u*_-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),f=l(n/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"YZX":this._x=f*u*d+c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d-f*p*_;break;case"XZY":this._x=f*u*d-c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ko.copy(this).projectOnVector(e),this.sub(Ko)}reflect(e){return this.sub(Ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ko=new U,Zc=new cn;class Ln{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,un):un.fromBufferAttribute(r,o),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(e.matrixWorld),this.union(br)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),wr.subVectors(this.max,Vs),Zi.subVectors(e.a,Vs),Qi.subVectors(e.b,Vs),es.subVectors(e.c,Vs),Gn.subVectors(Qi,Zi),Wn.subVectors(es,Qi),yi.subVectors(Zi,es);let t=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-yi.z,yi.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,yi.z,0,-yi.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-yi.y,yi.x,0];return!Jo(t,Zi,Qi,es,wr)||(t=[1,0,0,0,1,0,0,0,1],!Jo(t,Zi,Qi,es,wr))?!1:(Rr.crossVectors(Gn,Wn),t=[Rr.x,Rr.y,Rr.z],Jo(t,Zi,Qi,es,wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pn=[new U,new U,new U,new U,new U,new U,new U,new U],un=new U,br=new Ln,Zi=new U,Qi=new U,es=new U,Gn=new U,Wn=new U,yi=new U,Vs=new U,wr=new U,Rr=new U,xi=new U;function Jo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){xi.fromArray(i,r);const a=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),u=n.dot(xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Gp=new Ln,ks=new U,Zo=new U;class vn{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ks,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(Zo)),this.expandByPoint(ks.copy(e.center).sub(Zo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new U,Qo=new U,Cr=new U,jn=new U,ea=new U,Lr=new U,ta=new U;class Pr{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Qo.copy(e).add(t).multiplyScalar(.5),Cr.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(Qo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Cr),a=jn.dot(this.direction),l=-jn.dot(Cr),c=jn.lengthSq(),u=Math.abs(1-o*o);let d,f,p,_;if(u>0)if(d=o*l-a,f=o*a-l,_=r*u,d>=0)if(f>=-_)if(f<=_){const v=1/u;d*=v,f*=v,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Qo).addScaledVector(Cr,f),p}intersectSphere(e,t){In.subVectors(e.center,this.origin);const n=In.dot(this.direction),s=In.dot(In)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,s,r){ea.subVectors(t,e),Lr.subVectors(n,e),ta.crossVectors(ea,Lr);let o=this.direction.dot(ta),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,e);const l=a*this.direction.dot(Lr.crossVectors(jn,Lr));if(l<0)return null;const c=a*this.direction.dot(ea.cross(jn));if(c<0||l+c>o)return null;const u=-a*jn.dot(ta);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,n,s,r,o,a,l,c,u,d,f,p,_,v,m){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,d,f,p,_,v,m)}set(e,t,n,s,r,o,a,l,c,u,d,f,p,_,v,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=f,g[3]=p,g[7]=_,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ts.setFromMatrixColumn(e,0).length(),r=1/ts.setFromMatrixColumn(e,1).length(),o=1/ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*d,_=a*u,v=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,_=c*u,v=c*d;t[0]=f+v*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,_=c*u,v=c*d;t[0]=f-v*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,_=a*u,v=a*d;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-f*d,t[8]=_*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+_,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+v,t[5]=o*u,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wp,e,jp)}lookAt(e,t,n){const s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Xn.crossVectors(n,$t),Xn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Xn.crossVectors(n,$t)),Xn.normalize(),Ir.crossVectors($t,Xn),s[0]=Xn.x,s[4]=Ir.x,s[8]=$t.x,s[1]=Xn.y,s[5]=Ir.y,s[9]=$t.y,s[2]=Xn.z,s[6]=Ir.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],p=n[13],_=n[2],v=n[6],m=n[10],g=n[14],E=n[3],y=n[7],w=n[11],C=n[15],T=s[0],R=s[4],H=s[8],S=s[12],b=s[1],G=s[5],J=s[9],ae=s[13],P=s[2],I=s[6],N=s[10],te=s[14],V=s[3],q=s[7],$=s[11],Q=s[15];return r[0]=o*T+a*b+l*P+c*V,r[4]=o*R+a*G+l*I+c*q,r[8]=o*H+a*J+l*N+c*$,r[12]=o*S+a*ae+l*te+c*Q,r[1]=u*T+d*b+f*P+p*V,r[5]=u*R+d*G+f*I+p*q,r[9]=u*H+d*J+f*N+p*$,r[13]=u*S+d*ae+f*te+p*Q,r[2]=_*T+v*b+m*P+g*V,r[6]=_*R+v*G+m*I+g*q,r[10]=_*H+v*J+m*N+g*$,r[14]=_*S+v*ae+m*te+g*Q,r[3]=E*T+y*b+w*P+C*V,r[7]=E*R+y*G+w*I+C*q,r[11]=E*H+y*J+w*N+C*$,r[15]=E*S+y*ae+w*te+C*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],_=e[3],v=e[7],m=e[11],g=e[15];return _*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*p-n*l*p)+v*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+m*(+t*c*d-t*a*p-r*o*d+n*o*p+r*a*u-n*c*u)+g*(-s*a*u-t*l*d+t*a*f+s*o*d-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],_=e[12],v=e[13],m=e[14],g=e[15],E=d*m*c-v*f*c+v*l*p-a*m*p-d*l*g+a*f*g,y=_*f*c-u*m*c-_*l*p+o*m*p+u*l*g-o*f*g,w=u*v*c-_*d*c+_*a*p-o*v*p-u*a*g+o*d*g,C=_*d*l-u*v*l-_*a*f+o*v*f+u*a*m-o*d*m,T=t*E+n*y+s*w+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=E*R,e[1]=(v*f*r-d*m*r-v*s*p+n*m*p+d*s*g-n*f*g)*R,e[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*g+n*l*g)*R,e[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*p-n*l*p)*R,e[4]=y*R,e[5]=(u*m*r-_*f*r+_*s*p-t*m*p-u*s*g+t*f*g)*R,e[6]=(_*l*r-o*m*r-_*s*c+t*m*c+o*s*g-t*l*g)*R,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*p+t*l*p)*R,e[8]=w*R,e[9]=(_*d*r-u*v*r-_*n*p+t*v*p+u*n*g-t*d*g)*R,e[10]=(o*v*r-_*a*r+_*n*c-t*v*c-o*n*g+t*a*g)*R,e[11]=(u*a*r-o*d*r-u*n*c+t*d*c+o*n*p-t*a*p)*R,e[12]=C*R,e[13]=(u*v*s-_*d*s+_*n*f-t*v*f-u*n*m+t*d*m)*R,e[14]=(_*a*s-o*v*s-_*n*l+t*v*l+o*n*m-t*a*m)*R,e[15]=(o*d*s-u*a*s+u*n*l-t*d*l-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,f=r*c,p=r*u,_=r*d,v=o*u,m=o*d,g=a*d,E=l*c,y=l*u,w=l*d,C=n.x,T=n.y,R=n.z;return s[0]=(1-(v+g))*C,s[1]=(p+w)*C,s[2]=(_-y)*C,s[3]=0,s[4]=(p-w)*T,s[5]=(1-(f+g))*T,s[6]=(m+E)*T,s[7]=0,s[8]=(_+y)*R,s[9]=(m-E)*R,s[10]=(1-(f+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ts.set(s[0],s[1],s[2]).length();const o=ts.set(s[4],s[5],s[6]).length(),a=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],dn.copy(this);const c=1/r,u=1/o,d=1/a;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=d,dn.elements[9]*=d,dn.elements[10]*=d,t.setFromRotationMatrix(dn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Cn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let p,_;if(a===Cn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Mr)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Cn){const l=this.elements,c=1/(t-e),u=1/(n-s),d=1/(o-r),f=(t+e)*c,p=(n+s)*u;let _,v;if(a===Cn)_=(o+r)*d,v=-2*d;else if(a===Mr)_=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ts=new U,dn=new Ye,Wp=new U(0,0,0),jp=new U(1,1,1),Xn=new U,Ir=new U,$t=new U,Qc=new Ye,eu=new cn;class Nr{constructor(e=0,t=0,n=0,s=Nr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eu.setFromEuler(this),this.setFromQuaternion(eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nr.DEFAULT_ORDER="XYZ";class tu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xp=0;const nu=new U,ns=new cn,Nn=new Ye,Dr=new U,zs=new U,qp=new U,$p=new cn,iu=new U(1,0,0),su=new U(0,1,0),ru=new U(0,0,1),Yp={type:"added"},Kp={type:"removed"};class pt extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new U,t=new Nr,n=new cn,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new $e}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(iu,e)}rotateY(e){return this.rotateOnAxis(su,e)}rotateZ(e){return this.rotateOnAxis(ru,e)}translateOnAxis(e,t){return nu.copy(e).applyQuaternion(this.quaternion),this.position.add(nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(iu,e)}translateY(e){return this.translateOnAxis(su,e)}translateZ(e){return this.translateOnAxis(ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Dr.copy(e):Dr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(zs,Dr,this.up):Nn.lookAt(Dr,zs,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(Nn),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Yp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,qp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,$p,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}pt.DEFAULT_UP=new U(0,1,0),pt.DEFAULT_MATRIX_AUTO_UPDATE=!0,pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new U,Dn=new U,na=new U,Un=new U,is=new U,ss=new U,ou=new U,ia=new U,sa=new U,ra=new U;let Ur=!1;class fn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hn.subVectors(e,t),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hn.subVectors(s,t),Dn.subVectors(n,t),na.subVectors(e,t);const o=hn.dot(hn),a=hn.dot(Dn),l=hn.dot(na),c=Dn.dot(Dn),u=Dn.dot(na),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getUV(e,t,n,s,r,o,a,l){return Ur===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ur=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Un.x),l.addScaledVector(o,Un.y),l.addScaledVector(a,Un.z),l)}static isFrontFacing(e,t,n,s){return hn.subVectors(n,t),Dn.subVectors(e,t),hn.cross(Dn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),hn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Ur===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ur=!0),fn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return fn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;is.subVectors(s,n),ss.subVectors(r,n),ia.subVectors(e,n);const l=is.dot(ia),c=ss.dot(ia);if(l<=0&&c<=0)return t.copy(n);sa.subVectors(e,s);const u=is.dot(sa),d=ss.dot(sa);if(u>=0&&d<=u)return t.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(is,o);ra.subVectors(e,r);const p=is.dot(ra),_=ss.dot(ra);if(_>=0&&p<=_)return t.copy(r);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(ss,a);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return ou.subVectors(r,s),a=(d-u)/(d-u+(p-_)),t.copy(s).addScaledVector(ou,a);const g=1/(m+v+f);return o=v*g,a=f*g,t.copy(n).addScaledVector(is,o).addScaledVector(ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Or={h:0,s:0,l:0};function oa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=jo(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=oa(o,r,e+1/3),this.g=oa(o,r,e),this.b=oa(o,r,e-1/3)}return ot.toWorkingColorSpace(this,s),this}setStyle(e,t=ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){const n=au[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=$o(e.r),this.g=$o(e.g),this.b=$o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return ot.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Dt(Ut.r*255,0,255))*65536+Math.round(Dt(Ut.g*255,0,255))*256+Math.round(Dt(Ut.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Ut.copy(this),t);const n=Ut.r,s=Ut.g,r=Ut.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=ft){ot.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,s=Ut.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(Or);const n=Os(qn.h,Or.h,t),s=Os(qn.s,Or.s,t),r=Os(qn.l,Or.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Ve;Ve.NAMES=au;let Jp=0;class yn extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=ln(),this.name="",this.type="Material",this.blending=ki,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ro,this.blendDst=Co,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ro&&(n.blendSrc=this.blendSrc),this.blendDst!==Co&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ei extends yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new U,Fr=new Ze;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Go,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix3(e),this.setXY(t,Fr.x,Fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_n(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_n(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_n(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Go&&(e.usage=this.usage),e}}class lu extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cu extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nn extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Zp=0;const sn=new Ye,aa=new pt,rs=new U,Yt=new Ln,Hs=new Ln,Rt=new U;class pn extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jc(e)?cu:lu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return aa.lookAt(e),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new nn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(Yt.min,Hs.min),Yt.expandByPoint(Rt),Rt.addVectors(Yt.max,Hs.max),Yt.expandByPoint(Rt)):(Yt.expandByPoint(Hs.min),Yt.expandByPoint(Hs.max))}Yt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Rt.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(e,c),Rt.add(rs)),s=Math.max(s,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<a;b++)c[b]=new U,u[b]=new U;const d=new U,f=new U,p=new U,_=new Ze,v=new Ze,m=new Ze,g=new U,E=new U;function y(b,G,J){d.fromArray(s,b*3),f.fromArray(s,G*3),p.fromArray(s,J*3),_.fromArray(o,b*2),v.fromArray(o,G*2),m.fromArray(o,J*2),f.sub(d),p.sub(d),v.sub(_),m.sub(_);const ae=1/(v.x*m.y-m.x*v.y);isFinite(ae)&&(g.copy(f).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(ae),E.copy(p).multiplyScalar(v.x).addScaledVector(f,-m.x).multiplyScalar(ae),c[b].add(g),c[G].add(g),c[J].add(g),u[b].add(E),u[G].add(E),u[J].add(E))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let b=0,G=w.length;b<G;++b){const J=w[b],ae=J.start,P=J.count;for(let I=ae,N=ae+P;I<N;I+=3)y(n[I+0],n[I+1],n[I+2])}const C=new U,T=new U,R=new U,H=new U;function S(b){R.fromArray(r,b*3),H.copy(R);const G=c[b];C.copy(G),C.sub(R.multiplyScalar(R.dot(G))).normalize(),T.crossVectors(H,G);const ae=T.dot(u[b])<0?-1:1;l[b*4]=C.x,l[b*4+1]=C.y,l[b*4+2]=C.z,l[b*4+3]=ae}for(let b=0,G=w.length;b<G;++b){const J=w[b],ae=J.start,P=J.count;for(let I=ae,N=ae+P;I<N;I+=3)S(n[I+0]),S(n[I+1]),S(n[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,u=new U,d=new U;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let g=0;g<u;g++)f[_++]=c[p++]}return new Ft(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uu=new Ye,Si=new Pr,Br=new vn,du=new U,os=new U,as=new U,ls=new U,la=new U,Vr=new U,kr=new Ze,zr=new Ze,Hr=new Ze,hu=new U,fu=new U,pu=new U,Gr=new U,Wr=new U;class Ge extends pt{constructor(e=new pn,t=new Ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(la.fromBufferAttribute(d,e),o?Vr.addScaledVector(la,u):Vr.addScaledVector(la.sub(t),u))}t.add(Vr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(r),Si.copy(e.ray).recast(e.near),!(Br.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Br,du)===null||Si.origin.distanceToSquared(du)>(e.far-e.near)**2))&&(uu.copy(r).invert(),Si.copy(e.ray).applyMatrix4(uu),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],g=o[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let w=E,C=y;w<C;w+=3){const T=a.getX(w),R=a.getX(w+1),H=a.getX(w+2);s=jr(this,g,e,n,c,u,d,T,R,H),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,g=v;m<g;m+=3){const E=a.getX(m),y=a.getX(m+1),w=a.getX(m+2);s=jr(this,o,e,n,c,u,d,E,y,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],g=o[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=E,C=y;w<C;w+=3){const T=w,R=w+1,H=w+2;s=jr(this,g,e,n,c,u,d,T,R,H),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,g=v;m<g;m+=3){const E=m,y=m+1,w=m+2;s=jr(this,o,e,n,c,u,d,E,y,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Qp(i,e,t,n,s,r,o,a){let l;if(e.side===Wt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===wn,a),l===null)return null;Wr.copy(a),Wr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Wr);return c<t.near||c>t.far?null:{distance:c,point:Wr.clone(),object:i}}function jr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,os),i.getVertexPosition(l,as),i.getVertexPosition(c,ls);const u=Qp(i,e,t,n,os,as,ls,Gr);if(u){s&&(kr.fromBufferAttribute(s,a),zr.fromBufferAttribute(s,l),Hr.fromBufferAttribute(s,c),u.uv=fn.getInterpolation(Gr,os,as,ls,kr,zr,Hr,new Ze)),r&&(kr.fromBufferAttribute(r,a),zr.fromBufferAttribute(r,l),Hr.fromBufferAttribute(r,c),u.uv1=fn.getInterpolation(Gr,os,as,ls,kr,zr,Hr,new Ze),u.uv2=u.uv1),o&&(hu.fromBufferAttribute(o,a),fu.fromBufferAttribute(o,l),pu.fromBufferAttribute(o,c),u.normal=fn.getInterpolation(Gr,os,as,ls,hu,fu,pu,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new U,materialIndex:0};fn.getNormal(os,as,ls,d.normal),u.face=d}return u}class mt extends pn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(d,2));function _(v,m,g,E,y,w,C,T,R,H,S){const b=w/R,G=C/H,J=w/2,ae=C/2,P=T/2,I=R+1,N=H+1;let te=0,V=0;const q=new U;for(let $=0;$<N;$++){const Q=$*G-ae;for(let de=0;de<I;de++){const z=de*b-J;q[v]=z*E,q[m]=Q*y,q[g]=P,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[g]=T>0?1:-1,u.push(q.x,q.y,q.z),d.push(de/R),d.push(1-$/H),te+=1}}for(let $=0;$<H;$++)for(let Q=0;Q<R;Q++){const de=f+Q+I*$,z=f+Q+I*($+1),ne=f+(Q+1)+I*($+1),se=f+(Q+1)+I*$;l.push(de,z,se),l.push(z,ne,se),V+=6}a.addGroup(p,V,S),p+=V,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Bt(i){const e={};for(let t=0;t<i.length;t++){const n=cs(i[t]);for(const s in n)e[s]=n[s]}return e}function em(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function mu(i){return i.getRenderTarget()===null?i.outputColorSpace:ot.workingColorSpace}const tm={clone:cs,merge:Bt};var nm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,im=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nm,this.fragmentShader=im,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=em(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gu extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Cn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vt extends gu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yi*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Us*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,ds=1;class sm extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Vt(us,ds,e,t);s.layers=this.layers,this.add(s);const r=new Vt(us,ds,e,t);r.layers=this.layers,this.add(r);const o=new Vt(us,ds,e,t);o.layers=this.layers,this.add(o);const a=new Vt(us,ds,e,t);a.layers=this.layers,this.add(a);const l=new Vt(us,ds,e,t);l.layers=this.layers,this.add(l);const c=new Vt(us,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class _u extends Lt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:zi,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rm extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Bs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===gi?ft:tn),this.texture=new _u(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new mt(5,5,5),r=new Mi({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:Vn});r.uniforms.tEquirect.value=t;const o=new Ge(s,r),a=t.minFilter;return t.minFilter===fi&&(t.minFilter=jt),new sm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const ca=new U,om=new U,am=new $e;class Ai{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ca.subVectors(n,t).cross(om.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||am.getNormalMatrix(e),s=this.coplanarPoint(ca).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new vn,Xr=new U;class ua{constructor(e=new Ai,t=new Ai,n=new Ai,s=new Ai,r=new Ai,o=new Ai){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Cn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],p=s[8],_=s[9],v=s[10],m=s[11],g=s[12],E=s[13],y=s[14],w=s[15];if(n[0].setComponents(l-r,f-c,m-p,w-g).normalize(),n[1].setComponents(l+r,f+c,m+p,w+g).normalize(),n[2].setComponents(l+o,f+u,m+_,w+E).normalize(),n[3].setComponents(l-o,f-u,m-_,w-E).normalize(),n[4].setComponents(l-a,f-d,m-v,w-y).normalize(),t===Cn)n[5].setComponents(l+a,f+d,m+v,w+y).normalize();else if(t===Mr)n[5].setComponents(a,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Xr.x=s.normal.x>0?e.max.x:e.min.x,Xr.y=s.normal.y>0?e.max.y:e.min.y,Xr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vu(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function lm(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const d=c.array,f=c.usage,p=d.byteLength,_=i.createBuffer();i.bindBuffer(u,_),i.bufferData(u,d,f),c.onUploadCallback();let v;if(d instanceof Float32Array)v=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=i.SHORT;else if(d instanceof Uint32Array)v=i.UNSIGNED_INT;else if(d instanceof Int32Array)v=i.INT;else if(d instanceof Int8Array)v=i.BYTE;else if(d instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,u,d){const f=u.array,p=u._updateRange,_=u.updateRanges;if(i.bindBuffer(d,c),p.count===-1&&_.length===0&&i.bufferSubData(d,0,f),_.length!==0){for(let v=0,m=_.length;v<m;v++){const g=_[v];t?i.bufferSubData(d,g.start*f.BYTES_PER_ELEMENT,f,g.start,g.count):i.bufferSubData(d,g.start*f.BYTES_PER_ELEMENT,f.subarray(g.start,g.start+g.count))}u.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,s(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}class $n extends pn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=t/l,p=[],_=[],v=[],m=[];for(let g=0;g<u;g++){const E=g*f-o;for(let y=0;y<c;y++){const w=y*d-r;_.push(w,-E,0),v.push(0,0,1),m.push(y/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let E=0;E<a;E++){const y=E+c*g,w=E+c*(g+1),C=E+1+c*(g+1),T=E+1+c*g;p.push(y,w,T),p.push(w,C,T)}this.setIndex(p),this.setAttribute("position",new nn(_,3)),this.setAttribute("normal",new nn(v,3)),this.setAttribute("uv",new nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $n(e.width,e.height,e.widthSegments,e.heightSegments)}}var cm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,um=`#ifdef USE_ALPHAHASH
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
#endif`,dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mm=`#ifdef USE_AOMAP
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
#endif`,gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_m=`#ifdef USE_BATCHING
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
#endif`,vm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Em=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sm=`#ifdef USE_IRIDESCENCE
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
#endif`,Mm=`#ifdef USE_BUMPMAP
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
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Im=`#define PI 3.141592653589793
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
} // validated`,Nm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dm=`vec3 transformedNormal = objectNormal;
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
#endif`,Um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",km=`
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
}`,zm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$m=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ym=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Km=`#ifdef USE_GRADIENTMAP
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
}`,Jm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tg=`uniform bool receiveShadow;
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
#endif`,ng=`#ifdef USE_ENVMAP
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
#endif`,ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ag=`PhysicalMaterial material;
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
#endif`,lg=`struct PhysicalMaterial {
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
}`,cg=`
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
#endif`,ug=`#if defined( RE_IndirectDiffuse )
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
#endif`,dg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yg=`#if defined( USE_POINTS_UV )
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
#endif`,xg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mg=`#ifdef USE_MORPHNORMALS
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
#endif`,Ag=`#ifdef USE_MORPHTARGETS
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
#endif`,Tg=`#ifdef USE_MORPHTARGETS
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
#endif`,bg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
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
#endif`,Ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qg=`float getShadowMask() {
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
}`,$g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yg=`#ifdef USE_SKINNING
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
#endif`,Kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jg=`#ifdef USE_SKINNING
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
#endif`,Zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,n_=`#ifdef USE_TRANSMISSION
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
#endif`,i_=`#ifdef USE_TRANSMISSION
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
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const je={alphahash_fragment:cm,alphahash_pars_fragment:um,alphamap_fragment:dm,alphamap_pars_fragment:hm,alphatest_fragment:fm,alphatest_pars_fragment:pm,aomap_fragment:mm,aomap_pars_fragment:gm,batching_pars_vertex:_m,batching_vertex:vm,begin_vertex:ym,beginnormal_vertex:xm,bsdfs:Em,iridescence_fragment:Sm,bumpmap_pars_fragment:Mm,clipping_planes_fragment:Am,clipping_planes_pars_fragment:Tm,clipping_planes_pars_vertex:bm,clipping_planes_vertex:wm,color_fragment:Rm,color_pars_fragment:Cm,color_pars_vertex:Lm,color_vertex:Pm,common:Im,cube_uv_reflection_fragment:Nm,defaultnormal_vertex:Dm,displacementmap_pars_vertex:Um,displacementmap_vertex:Om,emissivemap_fragment:Fm,emissivemap_pars_fragment:Bm,colorspace_fragment:Vm,colorspace_pars_fragment:km,envmap_fragment:zm,envmap_common_pars_fragment:Hm,envmap_pars_fragment:Gm,envmap_pars_vertex:Wm,envmap_physical_pars_fragment:ng,envmap_vertex:jm,fog_vertex:Xm,fog_pars_vertex:qm,fog_fragment:$m,fog_pars_fragment:Ym,gradientmap_pars_fragment:Km,lightmap_fragment:Jm,lightmap_pars_fragment:Zm,lights_lambert_fragment:Qm,lights_lambert_pars_fragment:eg,lights_pars_begin:tg,lights_toon_fragment:ig,lights_toon_pars_fragment:sg,lights_phong_fragment:rg,lights_phong_pars_fragment:og,lights_physical_fragment:ag,lights_physical_pars_fragment:lg,lights_fragment_begin:cg,lights_fragment_maps:ug,lights_fragment_end:dg,logdepthbuf_fragment:hg,logdepthbuf_pars_fragment:fg,logdepthbuf_pars_vertex:pg,logdepthbuf_vertex:mg,map_fragment:gg,map_pars_fragment:_g,map_particle_fragment:vg,map_particle_pars_fragment:yg,metalnessmap_fragment:xg,metalnessmap_pars_fragment:Eg,morphcolor_vertex:Sg,morphnormal_vertex:Mg,morphtarget_pars_vertex:Ag,morphtarget_vertex:Tg,normal_fragment_begin:bg,normal_fragment_maps:wg,normal_pars_fragment:Rg,normal_pars_vertex:Cg,normal_vertex:Lg,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Ig,clearcoat_normal_fragment_maps:Ng,clearcoat_pars_fragment:Dg,iridescence_pars_fragment:Ug,opaque_fragment:Og,packing:Fg,premultiplied_alpha_fragment:Bg,project_vertex:Vg,dithering_fragment:kg,dithering_pars_fragment:zg,roughnessmap_fragment:Hg,roughnessmap_pars_fragment:Gg,shadowmap_pars_fragment:Wg,shadowmap_pars_vertex:jg,shadowmap_vertex:Xg,shadowmask_pars_fragment:qg,skinbase_vertex:$g,skinning_pars_vertex:Yg,skinning_vertex:Kg,skinnormal_vertex:Jg,specularmap_fragment:Zg,specularmap_pars_fragment:Qg,tonemapping_fragment:e_,tonemapping_pars_fragment:t_,transmission_fragment:n_,transmission_pars_fragment:i_,uv_pars_fragment:s_,uv_pars_vertex:r_,uv_vertex:o_,worldpos_vertex:a_,background_vert:`varying vec2 vUv;
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
}`},me={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},xn={basic:{uniforms:Bt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Bt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ve(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Bt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Bt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Bt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ve(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Bt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Bt([me.points,me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Bt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Bt([me.common,me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Bt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Bt([me.sprite,me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Bt([me.common,me.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Bt([me.lights,me.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};xn.physical={uniforms:Bt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const qr={r:0,b:0,g:0};function l_(i,e,t,n,s,r,o){const a=new Ve(0);let l=r===!0?0:1,c,u,d=null,f=0,p=null;function _(m,g){let E=!1,y=g.isScene===!0?g.background:null;y&&y.isTexture&&(y=(g.backgroundBlurriness>0?t:e).get(y)),y===null?v(a,l):y&&y.isColor&&(v(y,1),E=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===mr)?(u===void 0&&(u=new Ge(new mt(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:cs(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=ot.getTransfer(y.colorSpace)!==dt,(d!==y||f!==y.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ge(new $n(2,2),new Mi({name:"BackgroundMaterial",uniforms:cs(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=ot.getTransfer(y.colorSpace)!==dt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,g){m.getRGB(qr,mu(i)),n.buffers.color.setClear(qr.r,qr.g,qr.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(m,g=1){a.set(m),l=g,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:_}}function c_(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function d(P,I,N,te,V){let q=!1;if(o){const $=v(te,N,I);c!==$&&(c=$,p(c.object)),q=g(P,te,N,V),q&&E(P,te,N,V)}else{const $=I.wireframe===!0;(c.geometry!==te.id||c.program!==N.id||c.wireframe!==$)&&(c.geometry=te.id,c.program=N.id,c.wireframe=$,q=!0)}V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,H(P,I,N,te),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function _(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,I,N){const te=N.wireframe===!0;let V=a[P.id];V===void 0&&(V={},a[P.id]=V);let q=V[I.id];q===void 0&&(q={},V[I.id]=q);let $=q[te];return $===void 0&&($=m(f()),q[te]=$),$}function m(P){const I=[],N=[],te=[];for(let V=0;V<s;V++)I[V]=0,N[V]=0,te[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:te,object:P,attributes:{},index:null}}function g(P,I,N,te){const V=c.attributes,q=I.attributes;let $=0;const Q=N.getAttributes();for(const de in Q)if(Q[de].location>=0){const ne=V[de];let se=q[de];if(se===void 0&&(de==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),de==="instanceColor"&&P.instanceColor&&(se=P.instanceColor)),ne===void 0||ne.attribute!==se||se&&ne.data!==se.data)return!0;$++}return c.attributesNum!==$||c.index!==te}function E(P,I,N,te){const V={},q=I.attributes;let $=0;const Q=N.getAttributes();for(const de in Q)if(Q[de].location>=0){let ne=q[de];ne===void 0&&(de==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),de==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor));const se={};se.attribute=ne,ne&&ne.data&&(se.data=ne.data),V[de]=se,$++}c.attributes=V,c.attributesNum=$,c.index=te}function y(){const P=c.newAttributes;for(let I=0,N=P.length;I<N;I++)P[I]=0}function w(P){C(P,0)}function C(P,I){const N=c.newAttributes,te=c.enabledAttributes,V=c.attributeDivisors;N[P]=1,te[P]===0&&(i.enableVertexAttribArray(P),te[P]=1),V[P]!==I&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,I),V[P]=I)}function T(){const P=c.newAttributes,I=c.enabledAttributes;for(let N=0,te=I.length;N<te;N++)I[N]!==P[N]&&(i.disableVertexAttribArray(N),I[N]=0)}function R(P,I,N,te,V,q,$){$===!0?i.vertexAttribIPointer(P,I,N,V,q):i.vertexAttribPointer(P,I,N,te,V,q)}function H(P,I,N,te){if(n.isWebGL2===!1&&(P.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const V=te.attributes,q=N.getAttributes(),$=I.defaultAttributeValues;for(const Q in q){const de=q[Q];if(de.location>=0){let z=V[Q];if(z===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(z=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(z=P.instanceColor)),z!==void 0){const ne=z.normalized,se=z.itemSize,ee=t.get(z);if(ee===void 0)continue;const oe=ee.buffer,be=ee.type,Re=ee.bytesPerElement,ge=n.isWebGL2===!0&&(be===i.INT||be===i.UNSIGNED_INT||z.gpuType===oc);if(z.isInterleavedBufferAttribute){const Me=z.data,F=Me.stride,Ke=z.offset;if(Me.isInstancedInterleavedBuffer){for(let Ce=0;Ce<de.locationSize;Ce++)C(de.location+Ce,Me.meshPerAttribute);P.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ce=0;Ce<de.locationSize;Ce++)w(de.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let Ce=0;Ce<de.locationSize;Ce++)R(de.location+Ce,se/de.locationSize,be,ne,F*Re,(Ke+se/de.locationSize*Ce)*Re,ge)}else{if(z.isInstancedBufferAttribute){for(let Me=0;Me<de.locationSize;Me++)C(de.location+Me,z.meshPerAttribute);P.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Me=0;Me<de.locationSize;Me++)w(de.location+Me);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let Me=0;Me<de.locationSize;Me++)R(de.location+Me,se/de.locationSize,be,ne,se*Re,se/de.locationSize*Me*Re,ge)}}else if($!==void 0){const ne=$[Q];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(de.location,ne);break;case 3:i.vertexAttrib3fv(de.location,ne);break;case 4:i.vertexAttrib4fv(de.location,ne);break;default:i.vertexAttrib1fv(de.location,ne)}}}}T()}function S(){J();for(const P in a){const I=a[P];for(const N in I){const te=I[N];for(const V in te)_(te[V].object),delete te[V];delete I[N]}delete a[P]}}function b(P){if(a[P.id]===void 0)return;const I=a[P.id];for(const N in I){const te=I[N];for(const V in te)_(te[V].object),delete te[V];delete I[N]}delete a[P.id]}function G(P){for(const I in a){const N=a[I];if(N[P.id]===void 0)continue;const te=N[P.id];for(const V in te)_(te[V].object),delete te[V];delete N[P.id]}}function J(){ae(),u=!0,c!==l&&(c=l,p(c.object))}function ae(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:J,resetDefaultState:ae,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:G,initAttributes:y,enableAttribute:w,disableUnusedAttributes:T}}function u_(i,e,t,n){const s=n.isWebGL2;let r;function o(u){r=u}function a(u,d){i.drawArrays(r,u,d),t.update(d,r,1)}function l(u,d,f){if(f===0)return;let p,_;if(s)p=i,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](r,u,d,f),t.update(d,r,f)}function c(u,d,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<f;_++)this.render(u[_],d[_]);else{p.multiDrawArraysWEBGL(r,u,0,d,0,f);let _=0;for(let v=0;v<f;v++)_+=d[v];t.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function d_(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,w=o||e.has("OES_texture_float"),C=y&&w,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:E,vertexTextures:y,floatFragmentTextures:w,floatVertexTextures:C,maxSamples:T}}function h_(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ai,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const E=r?0:n,y=E*4;let w=g.clippingState||null;l.value=w,w=u(_,f,y,p);for(let C=0;C!==y;++C)w[C]=t[C];g.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,p,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const g=p+v*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,w=p;y!==v;++y,w+=4)o.copy(d[y]).applyMatrix4(E,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function f_(i){let e=new WeakMap;function t(o,a){return a===Lo?o.mapping=zi:a===Po&&(o.mapping=Hi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Lo||a===Po)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new rm(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class da extends gu{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hs=4,yu=[.125,.215,.35,.446,.526,.582],bi=20,ha=new da,xu=new Ve;let fa=null,pa=0,ma=0;const wi=(1+Math.sqrt(5))/2,fs=1/wi,Eu=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,wi,fs),new U(0,wi,-fs),new U(fs,0,wi),new U(-fs,0,wi),new U(wi,fs,0),new U(-wi,fs,0)];class Su{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){fa=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fa,pa,ma),e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zi||e.mapping===Hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fa=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Ns,format:en,colorSpace:wt,depthBuffer:!1},s=Mu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=p_(r)),this._blurMaterial=m_(r,e,t)}return s}_compileMaterial(e){const t=new Ge(this._lodPlanes[0],e);this._renderer.compile(t,ha)}_sceneToCubeUV(e,t,n,s){const a=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(xu),u.toneMapping=kn,u.autoClear=!1;const p=new Ei({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),_=new Ge(new mt,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(xu),v=!0);for(let g=0;g<6;g++){const E=g%3;E===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):E===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const y=this._cubeSize;$r(s,E*y,g>2?y:0,y,y),u.setRenderTarget(s),v&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===zi||e.mapping===Hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Au());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ge(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;$r(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ha)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Eu[(s-1)%Eu.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ge(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*bi-1),v=r/_,m=isFinite(r)?1+Math.floor(u*v):bi;m>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);const g=[];let E=0;for(let R=0;R<bi;++R){const H=R/v,S=Math.exp(-H*H/2);g.push(S),R===0?E+=S:R<m&&(E+=2*S)}for(let R=0;R<g.length;R++)g[R]=g[R]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-n;const w=this._sizeLods[s],C=3*w*(s>y-hs?s-y+hs:0),T=4*(this._cubeSize-w);$r(t,C,T,3*w,2*w),l.setRenderTarget(t),l.render(d,ha)}}function p_(i){const e=[],t=[],n=[];let s=i;const r=i-hs+1+yu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-hs?l=yu[o-i+hs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,v=3,m=2,g=1,E=new Float32Array(v*_*p),y=new Float32Array(m*_*p),w=new Float32Array(g*_*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,H=T>2?0:-1,S=[R,H,0,R+2/3,H,0,R+2/3,H+1,0,R,H,0,R+2/3,H+1,0,R,H+1,0];E.set(S,v*_*T),y.set(f,m*_*T);const b=[T,T,T,T,T,T];w.set(b,g*_*T)}const C=new pn;C.setAttribute("position",new Ft(E,v)),C.setAttribute("uv",new Ft(y,m)),C.setAttribute("faceIndex",new Ft(w,g)),e.push(C),s>hs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mu(i,e,t){const n=new vi(i,e,t);return n.texture.mapping=mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $r(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function m_(i,e,t){const n=new Float32Array(bi),s=new U(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ga(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Au(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ga(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Tu(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function ga(){return`

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
	`}function g_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Lo||l===Po,u=l===zi||l===Hi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Su(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new Su(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function __(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function v_(i,e,t,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let m=0,g=v.length;m<g;m++)e.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const v=p[_];for(let m=0,g=v.length;m<g;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,_=d.attributes.position;let v=0;if(p!==null){const E=p.array;v=p.version;for(let y=0,w=E.length;y<w;y+=3){const C=E[y+0],T=E[y+1],R=E[y+2];f.push(C,T,T,R,R,C)}}else if(_!==void 0){const E=_.array;v=_.version;for(let y=0,w=E.length/3-1;y<w;y+=3){const C=y+0,T=y+1,R=y+2;f.push(C,T,T,R,R,C)}}else return;const m=new(jc(f)?cu:lu)(f,1);m.version=v;const g=r.get(d);g&&e.remove(g),r.set(d,m)}function u(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function y_(i,e,t,n){const s=n.isWebGL2;let r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,_){i.drawElements(r,_,a,p*l),t.update(_,r,1)}function d(p,_,v){if(v===0)return;let m,g;if(s)m=i,g="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,_,a,p*l,v),t.update(_,r,v)}function f(p,_,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<v;g++)this.render(p[g]/l,_[g]);else{m.multiDrawElementsWEBGL(r,_,0,a,p,0,v);let g=0;for(let E=0;E<v;E++)g+=_[E];t.update(g,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function x_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function E_(i,e){return i[0]-e[0]}function S_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function M_(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new ut,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0;let v=r.get(u);if(v===void 0||v.count!==_){let P=function(){J.dispose(),r.delete(u),u.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();const E=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let H=0;E===!0&&(H=1),y===!0&&(H=2),w===!0&&(H=3);let S=u.attributes.position.count*H,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const G=new Float32Array(S*b*4*_),J=new Jc(G,S,b,_);J.type=Rn,J.needsUpdate=!0;const ae=H*4;for(let I=0;I<_;I++){const N=C[I],te=T[I],V=R[I],q=S*b*4*I;for(let $=0;$<N.count;$++){const Q=$*ae;E===!0&&(o.fromBufferAttribute(N,$),G[q+Q+0]=o.x,G[q+Q+1]=o.y,G[q+Q+2]=o.z,G[q+Q+3]=0),y===!0&&(o.fromBufferAttribute(te,$),G[q+Q+4]=o.x,G[q+Q+5]=o.y,G[q+Q+6]=o.z,G[q+Q+7]=0),w===!0&&(o.fromBufferAttribute(V,$),G[q+Q+8]=o.x,G[q+Q+9]=o.y,G[q+Q+10]=o.z,G[q+Q+11]=V.itemSize===4?o.w:1)}}v={count:_,texture:J,size:new Ze(S,b)},r.set(u,v),u.addEventListener("dispose",P)}let m=0;for(let E=0;E<f.length;E++)m+=f[E];const g=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",g),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const p=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==p){_=[];for(let y=0;y<p;y++)_[y]=[y,0];n[u.id]=_}for(let y=0;y<p;y++){const w=_[y];w[0]=y,w[1]=f[y]}_.sort(S_);for(let y=0;y<8;y++)y<p&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(E_);const v=u.morphAttributes.position,m=u.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const w=a[y],C=w[0],T=w[1];C!==Number.MAX_SAFE_INTEGER&&T?(v&&u.getAttribute("morphTarget"+y)!==v[C]&&u.setAttribute("morphTarget"+y,v[C]),m&&u.getAttribute("morphNormal"+y)!==m[C]&&u.setAttribute("morphNormal"+y,m[C]),s[y]=T,g+=T):(v&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),m&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),s[y]=0)}const E=u.morphTargetsRelative?1:1-g;d.getUniforms().setValue(i,"morphTargetBaseInfluence",E),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function A_(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class bu extends Lt{constructor(e,t,n,s,r,o,a,l,c,u){if(u=u!==void 0?u:mi,u!==mi&&u!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===mi&&(n=Hn),n===void 0&&u===Wi&&(n=pi),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const wu=new Lt,Ru=new bu(1,1);Ru.compareFunction=Hc;const Cu=new Jc,Lu=new Hp,Pu=new _u,Iu=[],Nu=[],Du=new Float32Array(16),Uu=new Float32Array(9),Ou=new Float32Array(4);function ps(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Iu[s];if(r===void 0&&(r=new Float32Array(s),Iu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Yr(i,e){let t=Nu[e];t===void 0&&(t=new Int32Array(e),Nu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function T_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function b_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function w_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function R_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function C_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(At(t,n))return;Ou.set(n),i.uniformMatrix2fv(this.addr,!1,Ou),Tt(t,n)}}function L_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(At(t,n))return;Uu.set(n),i.uniformMatrix3fv(this.addr,!1,Uu),Tt(t,n)}}function P_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(At(t,n))return;Du.set(n),i.uniformMatrix4fv(this.addr,!1,Du),Tt(t,n)}}function I_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function N_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function D_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function U_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function O_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function F_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function B_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function V_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function k_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Ru:wu;t.setTexture2D(e||r,s)}function z_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Lu,s)}function H_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pu,s)}function G_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Cu,s)}function W_(i){switch(i){case 5126:return T_;case 35664:return b_;case 35665:return w_;case 35666:return R_;case 35674:return C_;case 35675:return L_;case 35676:return P_;case 5124:case 35670:return I_;case 35667:case 35671:return N_;case 35668:case 35672:return D_;case 35669:case 35673:return U_;case 5125:return O_;case 36294:return F_;case 36295:return B_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return H_;case 36289:case 36303:case 36311:case 36292:return G_}}function j_(i,e){i.uniform1fv(this.addr,e)}function X_(i,e){const t=ps(e,this.size,2);i.uniform2fv(this.addr,t)}function q_(i,e){const t=ps(e,this.size,3);i.uniform3fv(this.addr,t)}function $_(i,e){const t=ps(e,this.size,4);i.uniform4fv(this.addr,t)}function Y_(i,e){const t=ps(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function K_(i,e){const t=ps(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function J_(i,e){const t=ps(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Z_(i,e){i.uniform1iv(this.addr,e)}function Q_(i,e){i.uniform2iv(this.addr,e)}function e0(i,e){i.uniform3iv(this.addr,e)}function t0(i,e){i.uniform4iv(this.addr,e)}function n0(i,e){i.uniform1uiv(this.addr,e)}function i0(i,e){i.uniform2uiv(this.addr,e)}function s0(i,e){i.uniform3uiv(this.addr,e)}function r0(i,e){i.uniform4uiv(this.addr,e)}function o0(i,e,t){const n=this.cache,s=e.length,r=Yr(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||wu,r[o])}function a0(i,e,t){const n=this.cache,s=e.length,r=Yr(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Lu,r[o])}function l0(i,e,t){const n=this.cache,s=e.length,r=Yr(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Pu,r[o])}function c0(i,e,t){const n=this.cache,s=e.length,r=Yr(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Cu,r[o])}function u0(i){switch(i){case 5126:return j_;case 35664:return X_;case 35665:return q_;case 35666:return $_;case 35674:return Y_;case 35675:return K_;case 35676:return J_;case 5124:case 35670:return Z_;case 35667:case 35671:return Q_;case 35668:case 35672:return e0;case 35669:case 35673:return t0;case 5125:return n0;case 36294:return i0;case 36295:return s0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}class d0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=W_(t.type)}}class h0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=u0(t.type)}}class f0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const _a=/(\w+)(\])?(\[|\.)?/g;function Fu(i,e){i.seq.push(e),i.map[e.id]=e}function p0(i,e,t){const n=i.name,s=n.length;for(_a.lastIndex=0;;){const r=_a.exec(n),o=_a.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Fu(t,c===void 0?new d0(a,i,e):new h0(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new f0(a),Fu(t,d)),t=d}}}class Kr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);p0(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Bu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const m0=37297;let g0=0;function _0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function v0(i){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(i);let n;switch(e===t?n="":e===Sr&&t===Er?n="LinearDisplayP3ToLinearSRGB":e===Er&&t===Sr&&(n="LinearSRGBToLinearDisplayP3"),i){case wt:case yr:return[n,"LinearTransferOETF"];case ft:case Ho:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Vu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+_0(i.getShaderSource(e),o)}else return s}function y0(i,e){const t=v0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function x0(i,e){let t;switch(e){case qf:t="Linear";break;case $f:t="Reinhard";break;case Yf:t="OptimizedCineon";break;case nc:t="ACESFilmic";break;case Jf:t="AgX";break;case Kf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function E0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ms).join(`
`)}function S0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ms).join(`
`)}function M0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function A0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ms(i){return i!==""}function ku(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const T0=/^[ \t]*#include +<([\w\d./]+)>/gm;function va(i){return i.replace(T0,w0)}const b0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function w0(i,e){let t=je[e];if(t===void 0){const n=b0.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return va(t)}const R0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hu(i){return i.replace(R0,C0)}function C0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function L0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$l?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function P0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zi:case Hi:e="ENVMAP_TYPE_CUBE";break;case mr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function I0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hi:e="ENVMAP_MODE_REFRACTION";break}return e}function N0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tc:e="ENVMAP_BLENDING_MULTIPLY";break;case jf:e="ENVMAP_BLENDING_MIX";break;case Xf:e="ENVMAP_BLENDING_ADD";break}return e}function D0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function U0(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=L0(t),c=P0(t),u=I0(t),d=N0(t),f=D0(t),p=t.isWebGL2?"":E0(t),_=S0(t),v=M0(r),m=s.createProgram();let g,E,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ms).join(`
`),g.length>0&&(g+=`
`),E=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ms).join(`
`),E.length>0&&(E+=`
`)):(g=[Gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),E=[p,Gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?je.tonemapping_pars_fragment:"",t.toneMapping!==kn?x0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,y0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ms).join(`
`)),o=va(o),o=ku(o,t),o=zu(o,t),a=va(a),a=ku(a,t),a=zu(a,t),o=Hu(o),a=Hu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const w=y+g+o,C=y+E+a,T=Bu(s,s.VERTEX_SHADER,w),R=Bu(s,s.FRAGMENT_SHADER,C);s.attachShader(m,T),s.attachShader(m,R),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function H(J){if(i.debug.checkShaderErrors){const ae=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(T).trim(),I=s.getShaderInfoLog(R).trim();let N=!0,te=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,T,R);else{const V=Vu(s,T,"vertex"),q=Vu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+ae+`
`+V+`
`+q)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(P===""||I==="")&&(te=!1);te&&(J.diagnostics={runnable:N,programLog:ae,vertexShader:{log:P,prefix:g},fragmentShader:{log:I,prefix:E}})}s.deleteShader(T),s.deleteShader(R),S=new Kr(s,m),b=A0(s,m)}let S;this.getUniforms=function(){return S===void 0&&H(this),S};let b;this.getAttributes=function(){return b===void 0&&H(this),b};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(m,m0)),G},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=g0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=R,this}let O0=0;class F0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new B0(e),t.set(e,n)),n}}class B0{constructor(e){this.id=O0++,this.code=e,this.usedTimes=0}}function V0(i,e,t,n,s,r,o){const a=new tu,l=new F0,c=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,b,G,J,ae){const P=J.fog,I=ae.geometry,N=S.isMeshStandardMaterial?J.environment:null,te=(S.isMeshStandardMaterial?t:e).get(S.envMap||N),V=te&&te.mapping===mr?te.image.height:null,q=_[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const $=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Q=$!==void 0?$.length:0;let de=0;I.morphAttributes.position!==void 0&&(de=1),I.morphAttributes.normal!==void 0&&(de=2),I.morphAttributes.color!==void 0&&(de=3);let z,ne,se,ee;if(q){const St=xn[q];z=St.vertexShader,ne=St.fragmentShader}else z=S.vertexShader,ne=S.fragmentShader,l.update(S),se=l.getVertexShaderID(S),ee=l.getFragmentShaderID(S);const oe=i.getRenderTarget(),be=ae.isInstancedMesh===!0,Re=ae.isBatchedMesh===!0,ge=!!S.map,Me=!!S.matcap,F=!!te,Ke=!!S.aoMap,Ce=!!S.lightMap,Ie=!!S.bumpMap,Ae=!!S.normalMap,it=!!S.displacementMap,Ue=!!S.emissiveMap,A=!!S.metalnessMap,x=!!S.roughnessMap,j=S.anisotropy>0,ue=S.clearcoat>0,le=S.iridescence>0,ce=S.sheen>0,re=S.transmission>0,D=j&&!!S.anisotropyMap,k=ue&&!!S.clearcoatMap,ie=ue&&!!S.clearcoatNormalMap,Ee=ue&&!!S.clearcoatRoughnessMap,Y=le&&!!S.iridescenceMap,ye=le&&!!S.iridescenceThicknessMap,xe=ce&&!!S.sheenColorMap,Le=ce&&!!S.sheenRoughnessMap,we=!!S.specularMap,Se=!!S.specularColorMap,Be=!!S.specularIntensityMap,tt=re&&!!S.transmissionMap,st=re&&!!S.thicknessMap,ze=!!S.gradientMap,he=!!S.alphaMap,L=S.alphaTest>0,_e=!!S.alphaHash,ve=!!S.extensions,De=!!I.attributes.uv1,Pe=!!I.attributes.uv2,nt=!!I.attributes.uv3;let lt=kn;return S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(lt=i.toneMapping),{isWebGL2:u,shaderID:q,shaderType:S.type,shaderName:S.name,vertexShader:z,fragmentShader:ne,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Re,instancing:be,instancingColor:be&&ae.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:wt,map:ge,matcap:Me,envMap:F,envMapMode:F&&te.mapping,envMapCubeUVHeight:V,aoMap:Ke,lightMap:Ce,bumpMap:Ie,normalMap:Ae,displacementMap:f&&it,emissiveMap:Ue,normalMapObjectSpace:Ae&&S.normalMapType===pp,normalMapTangentSpace:Ae&&S.normalMapType===kc,metalnessMap:A,roughnessMap:x,anisotropy:j,anisotropyMap:D,clearcoat:ue,clearcoatMap:k,clearcoatNormalMap:ie,clearcoatRoughnessMap:Ee,iridescence:le,iridescenceMap:Y,iridescenceThicknessMap:ye,sheen:ce,sheenColorMap:xe,sheenRoughnessMap:Le,specularMap:we,specularColorMap:Se,specularIntensityMap:Be,transmission:re,transmissionMap:tt,thicknessMap:st,gradientMap:ze,opaque:S.transparent===!1&&S.blending===ki,alphaMap:he,alphaTest:L,alphaHash:_e,combine:S.combine,mapUv:ge&&v(S.map.channel),aoMapUv:Ke&&v(S.aoMap.channel),lightMapUv:Ce&&v(S.lightMap.channel),bumpMapUv:Ie&&v(S.bumpMap.channel),normalMapUv:Ae&&v(S.normalMap.channel),displacementMapUv:it&&v(S.displacementMap.channel),emissiveMapUv:Ue&&v(S.emissiveMap.channel),metalnessMapUv:A&&v(S.metalnessMap.channel),roughnessMapUv:x&&v(S.roughnessMap.channel),anisotropyMapUv:D&&v(S.anisotropyMap.channel),clearcoatMapUv:k&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Le&&v(S.sheenRoughnessMap.channel),specularMapUv:we&&v(S.specularMap.channel),specularColorMapUv:Se&&v(S.specularColorMap.channel),specularIntensityMapUv:Be&&v(S.specularIntensityMap.channel),transmissionMapUv:tt&&v(S.transmissionMap.channel),thicknessMapUv:st&&v(S.thicknessMap.channel),alphaMapUv:he&&v(S.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Ae||j),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:Pe,vertexUv3s:nt,pointsUvs:ae.isPoints===!0&&!!I.attributes.uv&&(ge||he),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ae.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:de,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:lt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ge&&S.map.isVideoTexture===!0&&ot.getTransfer(S.map.colorSpace)===dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===gn,flipSided:S.side===Wt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ve&&S.extensions.derivatives===!0,extensionFragDepth:ve&&S.extensions.fragDepth===!0,extensionDrawBuffers:ve&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function g(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const G in S.defines)b.push(G),b.push(S.defines[G]);return S.isRawShaderMaterial===!1&&(E(b,S),y(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function E(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function y(S,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function w(S){const b=_[S.type];let G;if(b){const J=xn[b];G=tm.clone(J.uniforms)}else G=S.uniforms;return G}function C(S,b){let G;for(let J=0,ae=c.length;J<ae;J++){const P=c[J];if(P.cacheKey===b){G=P,++G.usedTimes;break}}return G===void 0&&(G=new U0(i,b,S,r),c.push(G)),G}function T(S){if(--S.usedTimes===0){const b=c.indexOf(S);c[b]=c[c.length-1],c.pop(),S.destroy()}}function R(S){l.remove(S)}function H(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:w,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:H}}function k0(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function z0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Wu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ju(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,f,p,_,v,m){let g=i[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},i[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=p,g.groupOrder=_,g.renderOrder=d.renderOrder,g.z=v,g.group=m),e++,g}function a(d,f,p,_,v,m){const g=o(d,f,p,_,v,m);p.transmission>0?n.push(g):p.transparent===!0?s.push(g):t.push(g)}function l(d,f,p,_,v,m){const g=o(d,f,p,_,v,m);p.transmission>0?n.unshift(g):p.transparent===!0?s.unshift(g):t.unshift(g)}function c(d,f){t.length>1&&t.sort(d||z0),n.length>1&&n.sort(f||Wu),s.length>1&&s.sort(f||Wu)}function u(){for(let d=e,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function H0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new ju,i.set(n,[o])):s>=r.length?(o=new ju,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function G0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ve};break;case"SpotLight":t={position:new U,direction:new U,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function W0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let j0=0;function X0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function q0(i,e){const t=new G0,n=W0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new U);const r=new U,o=new Ye,a=new Ye;function l(u,d){let f=0,p=0,_=0;for(let J=0;J<9;J++)s.probe[J].set(0,0,0);let v=0,m=0,g=0,E=0,y=0,w=0,C=0,T=0,R=0,H=0,S=0;u.sort(X0);const b=d===!0?Math.PI:1;for(let J=0,ae=u.length;J<ae;J++){const P=u[J],I=P.color,N=P.intensity,te=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=I.r*N*b,p+=I.g*N*b,_+=I.b*N*b;else if(P.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(P.sh.coefficients[q],N);S++}else if(P.isDirectionalLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){const $=P.shadow,Q=n.get(P);Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,s.directionalShadow[v]=Q,s.directionalShadowMap[v]=V,s.directionalShadowMatrix[v]=P.shadow.matrix,w++}s.directional[v]=q,v++}else if(P.isSpotLight){const q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(I).multiplyScalar(N*b),q.distance=te,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,s.spot[g]=q;const $=P.shadow;if(P.map&&(s.spotLightMap[R]=P.map,R++,$.updateMatrices(P),P.castShadow&&H++),s.spotLightMatrix[g]=$.matrix,P.castShadow){const Q=n.get(P);Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,s.spotShadow[g]=Q,s.spotShadowMap[g]=V,T++}g++}else if(P.isRectAreaLight){const q=t.get(P);q.color.copy(I).multiplyScalar(N),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),s.rectArea[E]=q,E++}else if(P.isPointLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*b),q.distance=P.distance,q.decay=P.decay,P.castShadow){const $=P.shadow,Q=n.get(P);Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,Q.shadowCameraNear=$.camera.near,Q.shadowCameraFar=$.camera.far,s.pointShadow[m]=Q,s.pointShadowMap[m]=V,s.pointShadowMatrix[m]=P.shadow.matrix,C++}s.point[m]=q,m++}else if(P.isHemisphereLight){const q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(N*b),q.groundColor.copy(P.groundColor).multiplyScalar(N*b),s.hemi[y]=q,y++}}E>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=me.LTC_FLOAT_1,s.rectAreaLTC2=me.LTC_FLOAT_2):(s.rectAreaLTC1=me.LTC_HALF_1,s.rectAreaLTC2=me.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=me.LTC_FLOAT_1,s.rectAreaLTC2=me.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=me.LTC_HALF_1,s.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=_;const G=s.hash;(G.directionalLength!==v||G.pointLength!==m||G.spotLength!==g||G.rectAreaLength!==E||G.hemiLength!==y||G.numDirectionalShadows!==w||G.numPointShadows!==C||G.numSpotShadows!==T||G.numSpotMaps!==R||G.numLightProbes!==S)&&(s.directional.length=v,s.spot.length=g,s.rectArea.length=E,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=T+R-H,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=S,G.directionalLength=v,G.pointLength=m,G.spotLength=g,G.rectAreaLength=E,G.hemiLength=y,G.numDirectionalShadows=w,G.numPointShadows=C,G.numSpotShadows=T,G.numSpotMaps=R,G.numLightProbes=S,s.version=j0++)}function c(u,d){let f=0,p=0,_=0,v=0,m=0;const g=d.matrixWorldInverse;for(let E=0,y=u.length;E<y;E++){const w=u[E];if(w.isDirectionalLight){const C=s.directional[f];C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(g),f++}else if(w.isSpotLight){const C=s.spot[_];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(g),_++}else if(w.isRectAreaLight){const C=s.rectArea[v];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(g),a.identity(),o.copy(w.matrixWorld),o.premultiply(g),a.extractRotation(o),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),v++}else if(w.isPointLight){const C=s.point[p];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(g),p++}else if(w.isHemisphereLight){const C=s.hemi[m];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(g),m++}}}return{setup:l,setupView:c,state:s}}function Xu(i,e){const t=new q0(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function $0(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Xu(i,e),t.set(r,[l])):o>=a.length?(l=new Xu(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class Y0 extends yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class K0 extends yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const J0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z0=`uniform sampler2D shadow_pass;
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
}`;function Q0(i,e,t){let n=new ua;const s=new Ze,r=new Ze,o=new ut,a=new Y0({depthPacking:fp}),l=new K0,c={},u=t.maxTextureSize,d={[wn]:Wt,[Wt]:wn,[gn]:gn},f=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:J0,fragmentShader:Z0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new pn;_.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ge(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let g=this.type;this.render=function(T,R,H){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),b=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),J=i.state;J.setBlending(Vn),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ae=g!==bn&&this.type===bn,P=g===bn&&this.type!==bn;for(let I=0,N=T.length;I<N;I++){const te=T[I],V=te.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const q=V.getFrameExtents();if(s.multiply(q),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,V.mapSize.y=r.y)),V.map===null||ae===!0||P===!0){const Q=this.type!==bn?{minFilter:bt,magFilter:bt}:{};V.map!==null&&V.map.dispose(),V.map=new vi(s.x,s.y,Q),V.map.texture.name=te.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const $=V.getViewportCount();for(let Q=0;Q<$;Q++){const de=V.getViewport(Q);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),J.viewport(o),V.updateMatrices(te,Q),n=V.getFrustum(),w(R,H,V.camera,te,this.type)}V.isPointLightShadow!==!0&&this.type===bn&&E(V,H),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(S,b,G)};function E(T,R){const H=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new vi(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,H,f,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,H,p,v,null)}function y(T,R,H,S){let b=null;const G=H.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(G!==void 0)b=G;else if(b=H.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const J=b.uuid,ae=R.uuid;let P=c[J];P===void 0&&(P={},c[J]=P);let I=P[ae];I===void 0&&(I=b.clone(),P[ae]=I,R.addEventListener("dispose",C)),b=I}if(b.visible=R.visible,b.wireframe=R.wireframe,S===bn?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:d[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,H.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const J=i.properties.get(b);J.light=H}return b}function w(T,R,H,S,b){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===bn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld);const ae=e.update(T),P=T.material;if(Array.isArray(P)){const I=ae.groups;for(let N=0,te=I.length;N<te;N++){const V=I[N],q=P[V.materialIndex];if(q&&q.visible){const $=y(T,q,S,b);T.onBeforeShadow(i,T,R,H,ae,$,V),i.renderBufferDirect(H,null,ae,$,T,V),T.onAfterShadow(i,T,R,H,ae,$,V)}}}else if(P.visible){const I=y(T,P,S,b);T.onBeforeShadow(i,T,R,H,ae,I,null),i.renderBufferDirect(H,null,ae,I,T,null),T.onAfterShadow(i,T,R,H,ae,I,null)}}const J=T.children;for(let ae=0,P=J.length;ae<P;ae++)w(J[ae],R,H,S,b)}function C(T){T.target.removeEventListener("dispose",C);for(const H in c){const S=c[H],b=T.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}function ev(i,e,t){const n=t.isWebGL2;function s(){let L=!1;const _e=new ut;let ve=null;const De=new ut(0,0,0,0);return{setMask:function(Pe){ve!==Pe&&!L&&(i.colorMask(Pe,Pe,Pe,Pe),ve=Pe)},setLocked:function(Pe){L=Pe},setClear:function(Pe,nt,lt,vt,St){St===!0&&(Pe*=vt,nt*=vt,lt*=vt),_e.set(Pe,nt,lt,vt),De.equals(_e)===!1&&(i.clearColor(Pe,nt,lt,vt),De.copy(_e))},reset:function(){L=!1,ve=null,De.set(-1,0,0,0)}}}function r(){let L=!1,_e=null,ve=null,De=null;return{setTest:function(Pe){Pe?Re(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(Pe){_e!==Pe&&!L&&(i.depthMask(Pe),_e=Pe)},setFunc:function(Pe){if(ve!==Pe){switch(Pe){case Bf:i.depthFunc(i.NEVER);break;case Vf:i.depthFunc(i.ALWAYS);break;case kf:i.depthFunc(i.LESS);break;case pr:i.depthFunc(i.LEQUAL);break;case zf:i.depthFunc(i.EQUAL);break;case Hf:i.depthFunc(i.GEQUAL);break;case Gf:i.depthFunc(i.GREATER);break;case Wf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=Pe}},setLocked:function(Pe){L=Pe},setClear:function(Pe){De!==Pe&&(i.clearDepth(Pe),De=Pe)},reset:function(){L=!1,_e=null,ve=null,De=null}}}function o(){let L=!1,_e=null,ve=null,De=null,Pe=null,nt=null,lt=null,vt=null,St=null;return{setTest:function(rt){L||(rt?Re(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(rt){_e!==rt&&!L&&(i.stencilMask(rt),_e=rt)},setFunc:function(rt,Mt,qt){(ve!==rt||De!==Mt||Pe!==qt)&&(i.stencilFunc(rt,Mt,qt),ve=rt,De=Mt,Pe=qt)},setOp:function(rt,Mt,qt){(nt!==rt||lt!==Mt||vt!==qt)&&(i.stencilOp(rt,Mt,qt),nt=rt,lt=Mt,vt=qt)},setLocked:function(rt){L=rt},setClear:function(rt){St!==rt&&(i.clearStencil(rt),St=rt)},reset:function(){L=!1,_e=null,ve=null,De=null,Pe=null,nt=null,lt=null,vt=null,St=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,d=new WeakMap;let f={},p={},_=new WeakMap,v=[],m=null,g=!1,E=null,y=null,w=null,C=null,T=null,R=null,H=null,S=new Ve(0,0,0),b=0,G=!1,J=null,ae=null,P=null,I=null,N=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,q=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec($)[1]),V=q>=1):$.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),V=q>=2);let Q=null,de={};const z=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),se=new ut().fromArray(z),ee=new ut().fromArray(ne);function oe(L,_e,ve,De){const Pe=new Uint8Array(4),nt=i.createTexture();i.bindTexture(L,nt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let lt=0;lt<ve;lt++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(_e,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(_e+lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return nt}const be={};be[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(be[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(i.DEPTH_TEST),l.setFunc(pr),Ue(!1),A(ql),Re(i.CULL_FACE),Ae(Vn);function Re(L){f[L]!==!0&&(i.enable(L),f[L]=!0)}function ge(L){f[L]!==!1&&(i.disable(L),f[L]=!1)}function Me(L,_e){return p[L]!==_e?(i.bindFramebuffer(L,_e),p[L]=_e,n&&(L===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=_e),L===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=_e)),!0):!1}function F(L,_e){let ve=v,De=!1;if(L)if(ve=_.get(_e),ve===void 0&&(ve=[],_.set(_e,ve)),L.isWebGLMultipleRenderTargets){const Pe=L.texture;if(ve.length!==Pe.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,lt=Pe.length;nt<lt;nt++)ve[nt]=i.COLOR_ATTACHMENT0+nt;ve.length=Pe.length,De=!0}}else ve[0]!==i.COLOR_ATTACHMENT0&&(ve[0]=i.COLOR_ATTACHMENT0,De=!0);else ve[0]!==i.BACK&&(ve[0]=i.BACK,De=!0);De&&(t.isWebGL2?i.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function Ke(L){return m!==L?(i.useProgram(L),m=L,!0):!1}const Ce={[hi]:i.FUNC_ADD,[Mf]:i.FUNC_SUBTRACT,[Af]:i.FUNC_REVERSE_SUBTRACT};if(n)Ce[Ql]=i.MIN,Ce[ec]=i.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Ce[Ql]=L.MIN_EXT,Ce[ec]=L.MAX_EXT)}const Ie={[Tf]:i.ZERO,[bf]:i.ONE,[wf]:i.SRC_COLOR,[Ro]:i.SRC_ALPHA,[Nf]:i.SRC_ALPHA_SATURATE,[Pf]:i.DST_COLOR,[Cf]:i.DST_ALPHA,[Rf]:i.ONE_MINUS_SRC_COLOR,[Co]:i.ONE_MINUS_SRC_ALPHA,[If]:i.ONE_MINUS_DST_COLOR,[Lf]:i.ONE_MINUS_DST_ALPHA,[Df]:i.CONSTANT_COLOR,[Uf]:i.ONE_MINUS_CONSTANT_COLOR,[Of]:i.CONSTANT_ALPHA,[Ff]:i.ONE_MINUS_CONSTANT_ALPHA};function Ae(L,_e,ve,De,Pe,nt,lt,vt,St,rt){if(L===Vn){g===!0&&(ge(i.BLEND),g=!1);return}if(g===!1&&(Re(i.BLEND),g=!0),L!==Sf){if(L!==E||rt!==G){if((y!==hi||T!==hi)&&(i.blendEquation(i.FUNC_ADD),y=hi,T=hi),rt)switch(L){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kl:i.blendFunc(i.ONE,i.ONE);break;case Jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,C=null,R=null,H=null,S.set(0,0,0),b=0,E=L,G=rt}return}Pe=Pe||_e,nt=nt||ve,lt=lt||De,(_e!==y||Pe!==T)&&(i.blendEquationSeparate(Ce[_e],Ce[Pe]),y=_e,T=Pe),(ve!==w||De!==C||nt!==R||lt!==H)&&(i.blendFuncSeparate(Ie[ve],Ie[De],Ie[nt],Ie[lt]),w=ve,C=De,R=nt,H=lt),(vt.equals(S)===!1||St!==b)&&(i.blendColor(vt.r,vt.g,vt.b,St),S.copy(vt),b=St),E=L,G=!1}function it(L,_e){L.side===gn?ge(i.CULL_FACE):Re(i.CULL_FACE);let ve=L.side===Wt;_e&&(ve=!ve),Ue(ve),L.blending===ki&&L.transparent===!1?Ae(Vn):Ae(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const De=L.stencilWrite;c.setTest(De),De&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),j(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Re(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(L){J!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),J=L)}function A(L){L!==xf?(Re(i.CULL_FACE),L!==ae&&(L===ql?i.cullFace(i.BACK):L===Ef?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),ae=L}function x(L){L!==P&&(V&&i.lineWidth(L),P=L)}function j(L,_e,ve){L?(Re(i.POLYGON_OFFSET_FILL),(I!==_e||N!==ve)&&(i.polygonOffset(_e,ve),I=_e,N=ve)):ge(i.POLYGON_OFFSET_FILL)}function ue(L){L?Re(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function le(L){L===void 0&&(L=i.TEXTURE0+te-1),Q!==L&&(i.activeTexture(L),Q=L)}function ce(L,_e,ve){ve===void 0&&(Q===null?ve=i.TEXTURE0+te-1:ve=Q);let De=de[ve];De===void 0&&(De={type:void 0,texture:void 0},de[ve]=De),(De.type!==L||De.texture!==_e)&&(Q!==ve&&(i.activeTexture(ve),Q=ve),i.bindTexture(L,_e||be[L]),De.type=L,De.texture=_e)}function re(){const L=de[Q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function D(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(L){se.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),se.copy(L))}function tt(L){ee.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ee.copy(L))}function st(L,_e){let ve=d.get(_e);ve===void 0&&(ve=new WeakMap,d.set(_e,ve));let De=ve.get(L);De===void 0&&(De=i.getUniformBlockIndex(_e,L.name),ve.set(L,De))}function ze(L,_e){const De=d.get(_e).get(L);u.get(_e)!==De&&(i.uniformBlockBinding(_e,De,L.__bindingPointIndex),u.set(_e,De))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},Q=null,de={},p={},_=new WeakMap,v=[],m=null,g=!1,E=null,y=null,w=null,C=null,T=null,R=null,H=null,S=new Ve(0,0,0),b=0,G=!1,J=null,ae=null,P=null,I=null,N=null,se.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Re,disable:ge,bindFramebuffer:Me,drawBuffers:F,useProgram:Ke,setBlending:Ae,setMaterial:it,setFlipSided:Ue,setCullFace:A,setLineWidth:x,setPolygonOffset:j,setScissorTest:ue,activeTexture:le,bindTexture:ce,unbindTexture:re,compressedTexImage2D:D,compressedTexImage3D:k,texImage2D:we,texImage3D:Se,updateUBOMapping:st,uniformBlockBinding:ze,texStorage2D:xe,texStorage3D:Le,texSubImage2D:ie,texSubImage3D:Ee,compressedTexSubImage2D:Y,compressedTexSubImage3D:ye,scissor:Be,viewport:tt,reset:he}}function tv(i,e,t,n,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return p?new OffscreenCanvas(A,x):Fs("canvas")}function v(A,x,j,ue){let le=1;if((A.width>ue||A.height>ue)&&(le=ue/Math.max(A.width,A.height)),le<1||x===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ce=x?Ar:Math.floor,re=ce(le*A.width),D=ce(le*A.height);d===void 0&&(d=_(re,D));const k=j?_(re,D):d;return k.width=re,k.height=D,k.getContext("2d").drawImage(A,0,0,re,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+re+"x"+D+")."),k}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Xo(A.width)&&Xo(A.height)}function g(A){return a?!1:A.wrapS!==Qt||A.wrapT!==Qt||A.minFilter!==bt&&A.minFilter!==jt}function E(A,x){return A.generateMipmaps&&x&&A.minFilter!==bt&&A.minFilter!==jt}function y(A){i.generateMipmap(A)}function w(A,x,j,ue,le=!1){if(a===!1)return x;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ce=x;if(x===i.RED&&(j===i.FLOAT&&(ce=i.R32F),j===i.HALF_FLOAT&&(ce=i.R16F),j===i.UNSIGNED_BYTE&&(ce=i.R8)),x===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(ce=i.R8UI),j===i.UNSIGNED_SHORT&&(ce=i.R16UI),j===i.UNSIGNED_INT&&(ce=i.R32UI),j===i.BYTE&&(ce=i.R8I),j===i.SHORT&&(ce=i.R16I),j===i.INT&&(ce=i.R32I)),x===i.RG&&(j===i.FLOAT&&(ce=i.RG32F),j===i.HALF_FLOAT&&(ce=i.RG16F),j===i.UNSIGNED_BYTE&&(ce=i.RG8)),x===i.RGBA){const re=le?xr:ot.getTransfer(ue);j===i.FLOAT&&(ce=i.RGBA32F),j===i.HALF_FLOAT&&(ce=i.RGBA16F),j===i.UNSIGNED_BYTE&&(ce=re===dt?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function C(A,x,j){return E(A,j)===!0||A.isFramebufferTexture&&A.minFilter!==bt&&A.minFilter!==jt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function T(A){return A===bt||A===Io||A===_r?i.NEAREST:i.LINEAR}function R(A){const x=A.target;x.removeEventListener("dispose",R),S(x),x.isVideoTexture&&u.delete(x)}function H(A){const x=A.target;x.removeEventListener("dispose",H),G(x)}function S(A){const x=n.get(A);if(x.__webglInit===void 0)return;const j=A.source,ue=f.get(j);if(ue){const le=ue[x.__cacheKey];le.usedTimes--,le.usedTimes===0&&b(A),Object.keys(ue).length===0&&f.delete(j)}n.remove(A)}function b(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const j=A.source,ue=f.get(j);delete ue[x.__cacheKey],o.memory.textures--}function G(A){const x=A.texture,j=n.get(A),ue=n.get(x);if(ue.__webglTexture!==void 0&&(i.deleteTexture(ue.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(j.__webglFramebuffer[le]))for(let ce=0;ce<j.__webglFramebuffer[le].length;ce++)i.deleteFramebuffer(j.__webglFramebuffer[le][ce]);else i.deleteFramebuffer(j.__webglFramebuffer[le]);j.__webglDepthbuffer&&i.deleteRenderbuffer(j.__webglDepthbuffer[le])}else{if(Array.isArray(j.__webglFramebuffer))for(let le=0;le<j.__webglFramebuffer.length;le++)i.deleteFramebuffer(j.__webglFramebuffer[le]);else i.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&i.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&i.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let le=0;le<j.__webglColorRenderbuffer.length;le++)j.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(j.__webglColorRenderbuffer[le]);j.__webglDepthRenderbuffer&&i.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let le=0,ce=x.length;le<ce;le++){const re=n.get(x[le]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),n.remove(x[le])}n.remove(x),n.remove(A)}let J=0;function ae(){J=0}function P(){const A=J;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),J+=1,A}function I(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function N(A,x){const j=n.get(A);if(A.isVideoTexture&&it(A),A.isRenderTargetTexture===!1&&A.version>0&&j.__version!==A.version){const ue=A.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(j,A,x);return}}t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+x)}function te(A,x){const j=n.get(A);if(A.version>0&&j.__version!==A.version){se(j,A,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+x)}function V(A,x){const j=n.get(A);if(A.version>0&&j.__version!==A.version){se(j,A,x);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+x)}function q(A,x){const j=n.get(A);if(A.version>0&&j.__version!==A.version){ee(j,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+x)}const $={[Gi]:i.REPEAT,[Qt]:i.CLAMP_TO_EDGE,[gr]:i.MIRRORED_REPEAT},Q={[bt]:i.NEAREST,[Io]:i.NEAREST_MIPMAP_NEAREST,[_r]:i.NEAREST_MIPMAP_LINEAR,[jt]:i.LINEAR,[rc]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},de={[mp]:i.NEVER,[Ep]:i.ALWAYS,[gp]:i.LESS,[Hc]:i.LEQUAL,[_p]:i.EQUAL,[xp]:i.GEQUAL,[vp]:i.GREATER,[yp]:i.NOTEQUAL};function z(A,x,j){if(j?(i.texParameteri(A,i.TEXTURE_WRAP_S,$[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,$[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,$[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Q[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Q[x.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Qt||x.wrapT!==Qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,T(x.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,T(x.minFilter)),x.minFilter!==bt&&x.minFilter!==jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,de[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ue=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===bt||x.minFilter!==_r&&x.minFilter!==fi||x.type===Rn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Ns&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(A,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function ne(A,x){let j=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));const ue=x.source;let le=f.get(ue);le===void 0&&(le={},f.set(ue,le));const ce=I(x);if(ce!==A.__cacheKey){le[ce]===void 0&&(le[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,j=!0),le[ce].usedTimes++;const re=le[A.__cacheKey];re!==void 0&&(le[A.__cacheKey].usedTimes--,re.usedTimes===0&&b(x)),A.__cacheKey=ce,A.__webglTexture=le[ce].texture}return j}function se(A,x,j){let ue=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ue=i.TEXTURE_3D);const le=ne(A,x),ce=x.source;t.bindTexture(ue,A.__webglTexture,i.TEXTURE0+j);const re=n.get(ce);if(ce.version!==re.__version||le===!0){t.activeTexture(i.TEXTURE0+j);const D=ot.getPrimaries(ot.workingColorSpace),k=x.colorSpace===tn?null:ot.getPrimaries(x.colorSpace),ie=x.colorSpace===tn||D===k?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const Ee=g(x)&&m(x.image)===!1;let Y=v(x.image,Ee,!1,s.maxTextureSize);Y=Ue(x,Y);const ye=m(Y)||a,xe=r.convert(x.format,x.colorSpace);let Le=r.convert(x.type),we=w(x.internalFormat,xe,Le,x.colorSpace,x.isVideoTexture);z(ue,x,ye);let Se;const Be=x.mipmaps,tt=a&&x.isVideoTexture!==!0&&we!==gc,st=re.__version===void 0||le===!0,ze=C(x,Y,ye);if(x.isDepthTexture)we=i.DEPTH_COMPONENT,a?x.type===Rn?we=i.DEPTH_COMPONENT32F:x.type===Hn?we=i.DEPTH_COMPONENT24:x.type===pi?we=i.DEPTH24_STENCIL8:we=i.DEPTH_COMPONENT16:x.type===Rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===mi&&we===i.DEPTH_COMPONENT&&x.type!==No&&x.type!==Hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Hn,Le=r.convert(x.type)),x.format===Wi&&we===i.DEPTH_COMPONENT&&(we=i.DEPTH_STENCIL,x.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=pi,Le=r.convert(x.type))),st&&(tt?t.texStorage2D(i.TEXTURE_2D,1,we,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,we,Y.width,Y.height,0,xe,Le,null));else if(x.isDataTexture)if(Be.length>0&&ye){tt&&st&&t.texStorage2D(i.TEXTURE_2D,ze,we,Be[0].width,Be[0].height);for(let he=0,L=Be.length;he<L;he++)Se=Be[he],tt?t.texSubImage2D(i.TEXTURE_2D,he,0,0,Se.width,Se.height,xe,Le,Se.data):t.texImage2D(i.TEXTURE_2D,he,we,Se.width,Se.height,0,xe,Le,Se.data);x.generateMipmaps=!1}else tt?(st&&t.texStorage2D(i.TEXTURE_2D,ze,we,Y.width,Y.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Y.width,Y.height,xe,Le,Y.data)):t.texImage2D(i.TEXTURE_2D,0,we,Y.width,Y.height,0,xe,Le,Y.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){tt&&st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ze,we,Be[0].width,Be[0].height,Y.depth);for(let he=0,L=Be.length;he<L;he++)Se=Be[he],x.format!==en?xe!==null?tt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Se.width,Se.height,Y.depth,xe,Se.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,we,Se.width,Se.height,Y.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Se.width,Se.height,Y.depth,xe,Le,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,we,Se.width,Se.height,Y.depth,0,xe,Le,Se.data)}else{tt&&st&&t.texStorage2D(i.TEXTURE_2D,ze,we,Be[0].width,Be[0].height);for(let he=0,L=Be.length;he<L;he++)Se=Be[he],x.format!==en?xe!==null?tt?t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,Se.width,Se.height,xe,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,he,we,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage2D(i.TEXTURE_2D,he,0,0,Se.width,Se.height,xe,Le,Se.data):t.texImage2D(i.TEXTURE_2D,he,we,Se.width,Se.height,0,xe,Le,Se.data)}else if(x.isDataArrayTexture)tt?(st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ze,we,Y.width,Y.height,Y.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,xe,Le,Y.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,Y.width,Y.height,Y.depth,0,xe,Le,Y.data);else if(x.isData3DTexture)tt?(st&&t.texStorage3D(i.TEXTURE_3D,ze,we,Y.width,Y.height,Y.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,xe,Le,Y.data)):t.texImage3D(i.TEXTURE_3D,0,we,Y.width,Y.height,Y.depth,0,xe,Le,Y.data);else if(x.isFramebufferTexture){if(st)if(tt)t.texStorage2D(i.TEXTURE_2D,ze,we,Y.width,Y.height);else{let he=Y.width,L=Y.height;for(let _e=0;_e<ze;_e++)t.texImage2D(i.TEXTURE_2D,_e,we,he,L,0,xe,Le,null),he>>=1,L>>=1}}else if(Be.length>0&&ye){tt&&st&&t.texStorage2D(i.TEXTURE_2D,ze,we,Be[0].width,Be[0].height);for(let he=0,L=Be.length;he<L;he++)Se=Be[he],tt?t.texSubImage2D(i.TEXTURE_2D,he,0,0,xe,Le,Se):t.texImage2D(i.TEXTURE_2D,he,we,xe,Le,Se);x.generateMipmaps=!1}else tt?(st&&t.texStorage2D(i.TEXTURE_2D,ze,we,Y.width,Y.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Le,Y)):t.texImage2D(i.TEXTURE_2D,0,we,xe,Le,Y);E(x,ye)&&y(ue),re.__version=ce.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ee(A,x,j){if(x.image.length!==6)return;const ue=ne(A,x),le=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+j);const ce=n.get(le);if(le.version!==ce.__version||ue===!0){t.activeTexture(i.TEXTURE0+j);const re=ot.getPrimaries(ot.workingColorSpace),D=x.colorSpace===tn?null:ot.getPrimaries(x.colorSpace),k=x.colorSpace===tn||re===D?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);const ie=x.isCompressedTexture||x.image[0].isCompressedTexture,Ee=x.image[0]&&x.image[0].isDataTexture,Y=[];for(let he=0;he<6;he++)!ie&&!Ee?Y[he]=v(x.image[he],!1,!0,s.maxCubemapSize):Y[he]=Ee?x.image[he].image:x.image[he],Y[he]=Ue(x,Y[he]);const ye=Y[0],xe=m(ye)||a,Le=r.convert(x.format,x.colorSpace),we=r.convert(x.type),Se=w(x.internalFormat,Le,we,x.colorSpace),Be=a&&x.isVideoTexture!==!0,tt=ce.__version===void 0||ue===!0;let st=C(x,ye,xe);z(i.TEXTURE_CUBE_MAP,x,xe);let ze;if(ie){Be&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,st,Se,ye.width,ye.height);for(let he=0;he<6;he++){ze=Y[he].mipmaps;for(let L=0;L<ze.length;L++){const _e=ze[L];x.format!==en?Le!==null?Be?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,0,0,_e.width,_e.height,Le,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,Se,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,0,0,_e.width,_e.height,Le,we,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,Se,_e.width,_e.height,0,Le,we,_e.data)}}}else{ze=x.mipmaps,Be&&tt&&(ze.length>0&&st++,t.texStorage2D(i.TEXTURE_CUBE_MAP,st,Se,Y[0].width,Y[0].height));for(let he=0;he<6;he++)if(Ee){Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Y[he].width,Y[he].height,Le,we,Y[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Se,Y[he].width,Y[he].height,0,Le,we,Y[he].data);for(let L=0;L<ze.length;L++){const ve=ze[L].image[he].image;Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,0,0,ve.width,ve.height,Le,we,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,Se,ve.width,ve.height,0,Le,we,ve.data)}}else{Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Le,we,Y[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Se,Le,we,Y[he]);for(let L=0;L<ze.length;L++){const _e=ze[L];Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,0,0,Le,we,_e.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,Se,Le,we,_e.image[he])}}}E(x,xe)&&y(i.TEXTURE_CUBE_MAP),ce.__version=le.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function oe(A,x,j,ue,le,ce){const re=r.convert(j.format,j.colorSpace),D=r.convert(j.type),k=w(j.internalFormat,re,D,j.colorSpace);if(!n.get(x).__hasExternalTextures){const Ee=Math.max(1,x.width>>ce),Y=Math.max(1,x.height>>ce);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,ce,k,Ee,Y,x.depth,0,re,D,null):t.texImage2D(le,ce,k,Ee,Y,0,re,D,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Ae(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,le,n.get(j).__webglTexture,0,Ie(x)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,le,n.get(j).__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(A,x,j){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer&&!x.stencilBuffer){let ue=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(j||Ae(x)){const le=x.depthTexture;le&&le.isDepthTexture&&(le.type===Rn?ue=i.DEPTH_COMPONENT32F:le.type===Hn&&(ue=i.DEPTH_COMPONENT24));const ce=Ie(x);Ae(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,ue,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,ue,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,ue,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(x.depthBuffer&&x.stencilBuffer){const ue=Ie(x);j&&Ae(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,x.width,x.height):Ae(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{const ue=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let le=0;le<ue.length;le++){const ce=ue[le],re=r.convert(ce.format,ce.colorSpace),D=r.convert(ce.type),k=w(ce.internalFormat,re,D,ce.colorSpace),ie=Ie(x);j&&Ae(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,k,x.width,x.height):Ae(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,k,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,k,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),N(x.depthTexture,0);const ue=n.get(x.depthTexture).__webglTexture,le=Ie(x);if(x.depthTexture.format===mi)Ae(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(x.depthTexture.format===Wi)Ae(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function ge(A){const x=n.get(A),j=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Re(x.__webglFramebuffer,A)}else if(j){x.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ue]),x.__webglDepthbuffer[ue]=i.createRenderbuffer(),be(x.__webglDepthbuffer[ue],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),be(x.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(A,x,j){const ue=n.get(A);x!==void 0&&oe(ue.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&ge(A)}function F(A){const x=A.texture,j=n.get(A),ue=n.get(x);A.addEventListener("dispose",H),A.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=x.version,o.memory.textures++);const le=A.isWebGLCubeRenderTarget===!0,ce=A.isWebGLMultipleRenderTargets===!0,re=m(A)||a;if(le){j.__webglFramebuffer=[];for(let D=0;D<6;D++)if(a&&x.mipmaps&&x.mipmaps.length>0){j.__webglFramebuffer[D]=[];for(let k=0;k<x.mipmaps.length;k++)j.__webglFramebuffer[D][k]=i.createFramebuffer()}else j.__webglFramebuffer[D]=i.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){j.__webglFramebuffer=[];for(let D=0;D<x.mipmaps.length;D++)j.__webglFramebuffer[D]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(ce)if(s.drawBuffers){const D=A.texture;for(let k=0,ie=D.length;k<ie;k++){const Ee=n.get(D[k]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Ae(A)===!1){const D=ce?x:[x];j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let k=0;k<D.length;k++){const ie=D[k];j.__webglColorRenderbuffer[k]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[k]);const Ee=r.convert(ie.format,ie.colorSpace),Y=r.convert(ie.type),ye=w(ie.internalFormat,Ee,Y,ie.colorSpace,A.isXRRenderTarget===!0),xe=Ie(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,ye,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.RENDERBUFFER,j.__webglColorRenderbuffer[k])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),be(j.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),z(i.TEXTURE_CUBE_MAP,x,re);for(let D=0;D<6;D++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let k=0;k<x.mipmaps.length;k++)oe(j.__webglFramebuffer[D][k],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+D,k);else oe(j.__webglFramebuffer[D],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0);E(x,re)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const D=A.texture;for(let k=0,ie=D.length;k<ie;k++){const Ee=D[k],Y=n.get(Ee);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture),z(i.TEXTURE_2D,Ee,re),oe(j.__webglFramebuffer,A,Ee,i.COLOR_ATTACHMENT0+k,i.TEXTURE_2D,0),E(Ee,re)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let D=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?D=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(D,ue.__webglTexture),z(D,x,re),a&&x.mipmaps&&x.mipmaps.length>0)for(let k=0;k<x.mipmaps.length;k++)oe(j.__webglFramebuffer[k],A,x,i.COLOR_ATTACHMENT0,D,k);else oe(j.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,D,0);E(x,re)&&y(D),t.unbindTexture()}A.depthBuffer&&ge(A)}function Ke(A){const x=m(A)||a,j=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ue=0,le=j.length;ue<le;ue++){const ce=j[ue];if(E(ce,x)){const re=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,D=n.get(ce).__webglTexture;t.bindTexture(re,D),y(re),t.unbindTexture()}}}function Ce(A){if(a&&A.samples>0&&Ae(A)===!1){const x=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],j=A.width,ue=A.height;let le=i.COLOR_BUFFER_BIT;const ce=[],re=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,D=n.get(A),k=A.isWebGLMultipleRenderTargets===!0;if(k)for(let ie=0;ie<x.length;ie++)t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,D.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,D.__webglFramebuffer);for(let ie=0;ie<x.length;ie++){ce.push(i.COLOR_ATTACHMENT0+ie),A.depthBuffer&&ce.push(re);const Ee=D.__ignoreDepthValues!==void 0?D.__ignoreDepthValues:!1;if(Ee===!1&&(A.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),k&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,D.__webglColorRenderbuffer[ie]),Ee===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[re]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[re])),k){const Y=n.get(x[ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Y,0)}i.blitFramebuffer(0,0,j,ue,0,0,j,ue,le,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),k)for(let ie=0;ie<x.length;ie++){t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,D.__webglColorRenderbuffer[ie]);const Ee=n.get(x[ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,D.__webglMultisampledFramebuffer)}}function Ie(A){return Math.min(s.maxSamples,A.samples)}function Ae(A){const x=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function it(A){const x=o.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function Ue(A,x){const j=A.colorSpace,ue=A.format,le=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Wo||j!==wt&&j!==tn&&(ot.getTransfer(j)===dt?a===!1?e.has("EXT_sRGB")===!0&&ue===en?(A.format=Wo,A.minFilter=jt,A.generateMipmaps=!1):x=Yc.sRGBToLinear(x):(ue!==en||le!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),x}this.allocateTextureUnit=P,this.resetTextureUnits=ae,this.setTexture2D=N,this.setTexture2DArray=te,this.setTexture3D=V,this.setTextureCube=q,this.rebindTextures=Me,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Ae}function nv(i,e,t){const n=t.isWebGL2;function s(r,o=tn){let a;const l=ot.getTransfer(o);if(r===zn)return i.UNSIGNED_BYTE;if(r===ac)return i.UNSIGNED_SHORT_4_4_4_4;if(r===lc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Qf)return i.BYTE;if(r===ep)return i.SHORT;if(r===No)return i.UNSIGNED_SHORT;if(r===oc)return i.INT;if(r===Hn)return i.UNSIGNED_INT;if(r===Rn)return i.FLOAT;if(r===Ns)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===tp)return i.ALPHA;if(r===en)return i.RGBA;if(r===np)return i.LUMINANCE;if(r===ip)return i.LUMINANCE_ALPHA;if(r===mi)return i.DEPTH_COMPONENT;if(r===Wi)return i.DEPTH_STENCIL;if(r===Wo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===sp)return i.RED;if(r===cc)return i.RED_INTEGER;if(r===rp)return i.RG;if(r===uc)return i.RG_INTEGER;if(r===dc)return i.RGBA_INTEGER;if(r===Do||r===Uo||r===Oo||r===Fo)if(l===dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Do)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Oo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Do)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Oo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hc||r===fc||r===pc||r===mc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===hc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===pc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===mc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===_c||r===vc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===_c)return l===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===vc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===yc||r===xc||r===Ec||r===Sc||r===Mc||r===Ac||r===Tc||r===bc||r===wc||r===Rc||r===Cc||r===Lc||r===Pc||r===Ic)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===yc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ec)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Sc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Mc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ac)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Tc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Rc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Cc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Lc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Pc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ic)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bo||r===Nc||r===Dc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Bo)return l===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Dc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===op||r===Uc||r===Oc||r===Fc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Bo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Uc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Oc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===pi?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class iv extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ri extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sv={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ri;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class rv extends _i{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,_=null;const v=t.getContextAttributes();let m=null,g=null;const E=[],y=[],w=new Ze;let C=null;const T=new Vt;T.layers.enable(1),T.viewport=new ut;const R=new Vt;R.layers.enable(2),R.viewport=new ut;const H=[T,R],S=new iv;S.layers.enable(1),S.layers.enable(2);let b=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let ne=E[z];return ne===void 0&&(ne=new ya,E[z]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(z){let ne=E[z];return ne===void 0&&(ne=new ya,E[z]=ne),ne.getGripSpace()},this.getHand=function(z){let ne=E[z];return ne===void 0&&(ne=new ya,E[z]=ne),ne.getHandSpace()};function J(z){const ne=y.indexOf(z.inputSource);if(ne===-1)return;const se=E[ne];se!==void 0&&(se.update(z.inputSource,z.frame,c||o),se.dispatchEvent({type:z.type,data:z.inputSource}))}function ae(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",ae),s.removeEventListener("inputsourceschange",P);for(let z=0;z<E.length;z++){const ne=y[z];ne!==null&&(y[z]=null,E[z].disconnect(ne))}b=null,G=null,e.setRenderTarget(m),p=null,f=null,d=null,s=null,g=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",ae),s.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new vi(p.framebufferWidth,p.framebufferHeight,{format:en,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ne=null,se=null,ee=null;v.depth&&(ee=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=v.stencil?Wi:mi,se=v.stencil?pi:Hn);const oe={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(oe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new vi(f.textureWidth,f.textureHeight,{format:en,type:zn,depthTexture:new bu(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const be=e.properties.get(g);be.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),de.setContext(s),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(z){for(let ne=0;ne<z.removed.length;ne++){const se=z.removed[ne],ee=y.indexOf(se);ee>=0&&(y[ee]=null,E[ee].disconnect(se))}for(let ne=0;ne<z.added.length;ne++){const se=z.added[ne];let ee=y.indexOf(se);if(ee===-1){for(let be=0;be<E.length;be++)if(be>=y.length){y.push(se),ee=be;break}else if(y[be]===null){y[be]=se,ee=be;break}if(ee===-1)break}const oe=E[ee];oe&&oe.connect(se)}}const I=new U,N=new U;function te(z,ne,se){I.setFromMatrixPosition(ne.matrixWorld),N.setFromMatrixPosition(se.matrixWorld);const ee=I.distanceTo(N),oe=ne.projectionMatrix.elements,be=se.projectionMatrix.elements,Re=oe[14]/(oe[10]-1),ge=oe[14]/(oe[10]+1),Me=(oe[9]+1)/oe[5],F=(oe[9]-1)/oe[5],Ke=(oe[8]-1)/oe[0],Ce=(be[8]+1)/be[0],Ie=Re*Ke,Ae=Re*Ce,it=ee/(-Ke+Ce),Ue=it*-Ke;ne.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ue),z.translateZ(it),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const A=Re+it,x=ge+it,j=Ie-Ue,ue=Ae+(ee-Ue),le=Me*ge/x*A,ce=F*ge/x*A;z.projectionMatrix.makePerspective(j,ue,le,ce,A,x),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function V(z,ne){ne===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(ne.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;S.near=R.near=T.near=z.near,S.far=R.far=T.far=z.far,(b!==S.near||G!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,G=S.far);const ne=z.parent,se=S.cameras;V(S,ne);for(let ee=0;ee<se.length;ee++)V(se[ee],ne);se.length===2?te(S,T,R):S.projectionMatrix.copy(T.projectionMatrix),q(z,S,ne)};function q(z,ne,se){se===null?z.matrix.copy(ne.matrixWorld):(z.matrix.copy(se.matrixWorld),z.matrix.invert(),z.matrix.multiply(ne.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(ne.projectionMatrix),z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Yi*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)};let $=null;function Q(z,ne){if(u=ne.getViewerPose(c||o),_=ne,u!==null){const se=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let ee=!1;se.length!==S.cameras.length&&(S.cameras.length=0,ee=!0);for(let oe=0;oe<se.length;oe++){const be=se[oe];let Re=null;if(p!==null)Re=p.getViewport(be);else{const Me=d.getViewSubImage(f,be);Re=Me.viewport,oe===0&&(e.setRenderTargetTextures(g,Me.colorTexture,f.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(g))}let ge=H[oe];ge===void 0&&(ge=new Vt,ge.layers.enable(oe),ge.viewport=new ut,H[oe]=ge),ge.matrix.fromArray(be.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(be.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Re.x,Re.y,Re.width,Re.height),oe===0&&(S.matrix.copy(ge.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ee===!0&&S.cameras.push(ge)}}for(let se=0;se<E.length;se++){const ee=y[se],oe=E[se];ee!==null&&oe!==void 0&&oe.update(ee,ne,c||o)}$&&$(z,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),_=null}const de=new vu;de.setAnimationLoop(Q),this.setAnimationLoop=function(z){$=z},this.dispose=function(){}}}function ov(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,mu(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,E,y,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&p(m,g,w)):g.isMeshMatcapMaterial?(r(m,g),_(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,E,y):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Wt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Wt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const E=e.get(g).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap){m.lightMap.value=g.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=g.lightMapIntensity*y,t(g.lightMap,m.lightMapTransform)}g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,E,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*E,m.scale.value=y*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),e.get(g).envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,E){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Wt&&m.clearcoatNormalScale.value.negate())),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const E=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function av(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,y){const w=y.program;n.uniformBlockBinding(E,w)}function c(E,y){let w=s[E.id];w===void 0&&(_(E),w=u(E),s[E.id]=w,E.addEventListener("dispose",m));const C=y.program;n.updateUBOMapping(E,C);const T=e.render.frame;r[E.id]!==T&&(f(E),r[E.id]=T)}function u(E){const y=d();E.__bindingPointIndex=y;const w=i.createBuffer(),C=E.__size,T=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,w),w}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const y=s[E.id],w=E.uniforms,C=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,R=w.length;T<R;T++){const H=Array.isArray(w[T])?w[T]:[w[T]];for(let S=0,b=H.length;S<b;S++){const G=H[S];if(p(G,T,S,C)===!0){const J=G.__offset,ae=Array.isArray(G.value)?G.value:[G.value];let P=0;for(let I=0;I<ae.length;I++){const N=ae[I],te=v(N);typeof N=="number"||typeof N=="boolean"?(G.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,J+P,G.__data)):N.isMatrix3?(G.__data[0]=N.elements[0],G.__data[1]=N.elements[1],G.__data[2]=N.elements[2],G.__data[3]=0,G.__data[4]=N.elements[3],G.__data[5]=N.elements[4],G.__data[6]=N.elements[5],G.__data[7]=0,G.__data[8]=N.elements[6],G.__data[9]=N.elements[7],G.__data[10]=N.elements[8],G.__data[11]=0):(N.toArray(G.__data,P),P+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,J,G.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,y,w,C){const T=E.value,R=y+"_"+w;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{const H=C[R];if(typeof T=="number"||typeof T=="boolean"){if(H!==T)return C[R]=T,!0}else if(H.equals(T)===!1)return H.copy(T),!0}return!1}function _(E){const y=E.uniforms;let w=0;const C=16;for(let R=0,H=y.length;R<H;R++){const S=Array.isArray(y[R])?y[R]:[y[R]];for(let b=0,G=S.length;b<G;b++){const J=S[b],ae=Array.isArray(J.value)?J.value:[J.value];for(let P=0,I=ae.length;P<I;P++){const N=ae[P],te=v(N),V=w%C;V!==0&&C-V<te.boundary&&(w+=C-V),J.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=w,w+=te.storage}}}const T=w%C;return T>0&&(w+=C-T),E.__size=w,E.__cache={},this}function v(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const w=o.indexOf(y.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function g(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}class qu{constructor(e={}){const{canvas:t=Fp(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const g=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ft,this._useLegacyLights=!1,this.toneMapping=kn,this.toneMappingExposure=1;const y=this;let w=!1,C=0,T=0,R=null,H=-1,S=null;const b=new ut,G=new ut;let J=null;const ae=new Ve(0);let P=0,I=t.width,N=t.height,te=1,V=null,q=null;const $=new ut(0,0,I,N),Q=new ut(0,0,I,N);let de=!1;const z=new ua;let ne=!1,se=!1,ee=null;const oe=new Ye,be=new Ze,Re=new U,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return R===null?te:1}let F=n;function Ke(M,O){for(let W=0;W<M.length;W++){const K=M[W],B=t.getContext(K,O);if(B!==null)return B}return null}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wo}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",_e,!1),F===null){const O=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&O.shift(),F=Ke(O,M),F===null)throw Ke(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ce,Ie,Ae,it,Ue,A,x,j,ue,le,ce,re,D,k,ie,Ee,Y,ye,xe,Le,we,Se,Be,tt;function st(){Ce=new __(F),Ie=new d_(F,Ce,e),Ce.init(Ie),Se=new nv(F,Ce,Ie),Ae=new ev(F,Ce,Ie),it=new x_(F),Ue=new k0,A=new tv(F,Ce,Ae,Ue,Ie,Se,it),x=new f_(y),j=new g_(y),ue=new lm(F,Ie),Be=new c_(F,Ce,ue,Ie),le=new v_(F,ue,it,Be),ce=new A_(F,le,ue,it),xe=new M_(F,Ie,A),Ee=new h_(Ue),re=new V0(y,x,j,Ce,Ie,Be,Ee),D=new ov(y,Ue),k=new H0,ie=new $0(Ce,Ie),ye=new l_(y,x,j,Ae,ce,f,l),Y=new Q0(y,ce,Ie),tt=new av(F,it,Ie,Ae),Le=new u_(F,Ce,it,Ie),we=new y_(F,Ce,it,Ie),it.programs=re.programs,y.capabilities=Ie,y.extensions=Ce,y.properties=Ue,y.renderLists=k,y.shadowMap=Y,y.state=Ae,y.info=it}st();const ze=new rv(y,F);this.xr=ze,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const M=Ce.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ce.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(M){M!==void 0&&(te=M,this.setSize(I,N,!1))},this.getSize=function(M){return M.set(I,N)},this.setSize=function(M,O,W=!0){if(ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=M,N=O,t.width=Math.floor(M*te),t.height=Math.floor(O*te),W===!0&&(t.style.width=M+"px",t.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(I*te,N*te).floor()},this.setDrawingBufferSize=function(M,O,W){I=M,N=O,te=W,t.width=Math.floor(M*W),t.height=Math.floor(O*W),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(b)},this.getViewport=function(M){return M.copy($)},this.setViewport=function(M,O,W,K){M.isVector4?$.set(M.x,M.y,M.z,M.w):$.set(M,O,W,K),Ae.viewport(b.copy($).multiplyScalar(te).floor())},this.getScissor=function(M){return M.copy(Q)},this.setScissor=function(M,O,W,K){M.isVector4?Q.set(M.x,M.y,M.z,M.w):Q.set(M,O,W,K),Ae.scissor(G.copy(Q).multiplyScalar(te).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(M){Ae.setScissorTest(de=M)},this.setOpaqueSort=function(M){V=M},this.setTransparentSort=function(M){q=M},this.getClearColor=function(M){return M.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(M=!0,O=!0,W=!0){let K=0;if(M){let B=!1;if(R!==null){const pe=R.texture.format;B=pe===dc||pe===uc||pe===cc}if(B){const pe=R.texture.type,Ne=pe===zn||pe===Hn||pe===No||pe===pi||pe===ac||pe===lc,Fe=ye.getClearColor(),ke=ye.getClearAlpha(),Xe=Fe.r,He=Fe.g,We=Fe.b;Ne?(p[0]=Xe,p[1]=He,p[2]=We,p[3]=ke,F.clearBufferuiv(F.COLOR,0,p)):(_[0]=Xe,_[1]=He,_[2]=We,_[3]=ke,F.clearBufferiv(F.COLOR,0,_))}else K|=F.COLOR_BUFFER_BIT}O&&(K|=F.DEPTH_BUFFER_BIT),W&&(K|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),k.dispose(),ie.dispose(),Ue.dispose(),x.dispose(),j.dispose(),ce.dispose(),Be.dispose(),tt.dispose(),re.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",St),ze.removeEventListener("sessionend",rt),ee&&(ee.dispose(),ee=null),Mt.stop()};function he(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const M=it.autoReset,O=Y.enabled,W=Y.autoUpdate,K=Y.needsUpdate,B=Y.type;st(),it.autoReset=M,Y.enabled=O,Y.autoUpdate=W,Y.needsUpdate=K,Y.type=B}function _e(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ve(M){const O=M.target;O.removeEventListener("dispose",ve),De(O)}function De(M){Pe(M),Ue.remove(M)}function Pe(M){const O=Ue.get(M).programs;O!==void 0&&(O.forEach(function(W){re.releaseProgram(W)}),M.isShaderMaterial&&re.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,W,K,B,pe){O===null&&(O=ge);const Ne=B.isMesh&&B.matrixWorld.determinant()<0,Fe=Z(M,O,W,K,B);Ae.setMaterial(K,Ne);let ke=W.index,Xe=1;if(K.wireframe===!0){if(ke=le.getWireframeAttribute(W),ke===void 0)return;Xe=2}const He=W.drawRange,We=W.attributes.position;let xt=He.start*Xe,Jt=(He.start+He.count)*Xe;pe!==null&&(xt=Math.max(xt,pe.start*Xe),Jt=Math.min(Jt,(pe.start+pe.count)*Xe)),ke!==null?(xt=Math.max(xt,0),Jt=Math.min(Jt,ke.count)):We!=null&&(xt=Math.max(xt,0),Jt=Math.min(Jt,We.count));const Ct=Jt-xt;if(Ct<0||Ct===1/0)return;Be.setup(B,K,Fe,W,ke);let Bn,gt=Le;if(ke!==null&&(Bn=ue.get(ke),gt=we,gt.setIndex(Bn)),B.isMesh)K.wireframe===!0?(Ae.setLineWidth(K.wireframeLinewidth*Me()),gt.setMode(F.LINES)):gt.setMode(F.TRIANGLES);else if(B.isLine){let Je=K.linewidth;Je===void 0&&(Je=1),Ae.setLineWidth(Je*Me()),B.isLineSegments?gt.setMode(F.LINES):B.isLineLoop?gt.setMode(F.LINE_LOOP):gt.setMode(F.LINE_STRIP)}else B.isPoints?gt.setMode(F.POINTS):B.isSprite&&gt.setMode(F.TRIANGLES);if(B.isBatchedMesh)gt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)gt.renderInstances(xt,Ct,B.count);else if(W.isInstancedBufferGeometry){const Je=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ya=Math.min(W.instanceCount,Je);gt.renderInstances(xt,Ct,Ya)}else gt.render(xt,Ct)};function nt(M,O,W){M.transparent===!0&&M.side===gn&&M.forceSinglePass===!1?(M.side=Wt,M.needsUpdate=!0,mn(M,O,W),M.side=wn,M.needsUpdate=!0,mn(M,O,W),M.side=gn):mn(M,O,W)}this.compile=function(M,O,W=null){W===null&&(W=M),m=ie.get(W),m.init(),E.push(m),W.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),M!==W&&M.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(y._useLegacyLights);const K=new Set;return M.traverse(function(B){const pe=B.material;if(pe)if(Array.isArray(pe))for(let Ne=0;Ne<pe.length;Ne++){const Fe=pe[Ne];nt(Fe,W,B),K.add(Fe)}else nt(pe,W,B),K.add(pe)}),E.pop(),m=null,K},this.compileAsync=function(M,O,W=null){const K=this.compile(M,O,W);return new Promise(B=>{function pe(){if(K.forEach(function(Ne){Ue.get(Ne).currentProgram.isReady()&&K.delete(Ne)}),K.size===0){B(M);return}setTimeout(pe,10)}Ce.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let lt=null;function vt(M){lt&&lt(M)}function St(){Mt.stop()}function rt(){Mt.start()}const Mt=new vu;Mt.setAnimationLoop(vt),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(M){lt=M,ze.setAnimationLoop(M),M===null?Mt.stop():Mt.start()},ze.addEventListener("sessionstart",St),ze.addEventListener("sessionend",rt),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(O),O=ze.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,O,R),m=ie.get(M,E.length),m.init(),E.push(m),oe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),z.setFromProjectionMatrix(oe),se=this.localClippingEnabled,ne=Ee.init(this.clippingPlanes,se),v=k.get(M,g.length),v.init(),g.push(v),qt(M,O,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(V,q),this.info.render.frame++,ne===!0&&Ee.beginShadows();const W=m.state.shadowsArray;if(Y.render(W,M,O),ne===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),ye.render(v,M),m.setupLights(y._useLegacyLights),O.isArrayCamera){const K=O.cameras;for(let B=0,pe=K.length;B<pe;B++){const Ne=K[B];Ui(v,M,Ne,Ne.viewport)}}else Ui(v,M,O);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(y,M,O),Be.resetDefaultState(),H=-1,S=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function qt(M,O,W,K){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||z.intersectsSprite(M)){K&&Re.setFromMatrixPosition(M.matrixWorld).applyMatrix4(oe);const Ne=ce.update(M),Fe=M.material;Fe.visible&&v.push(M,Ne,Fe,W,Re.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||z.intersectsObject(M))){const Ne=ce.update(M),Fe=M.material;if(K&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Re.copy(M.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Re.copy(Ne.boundingSphere.center)),Re.applyMatrix4(M.matrixWorld).applyMatrix4(oe)),Array.isArray(Fe)){const ke=Ne.groups;for(let Xe=0,He=ke.length;Xe<He;Xe++){const We=ke[Xe],xt=Fe[We.materialIndex];xt&&xt.visible&&v.push(M,Ne,xt,W,Re.z,We)}}else Fe.visible&&v.push(M,Ne,Fe,W,Re.z,null)}}const pe=M.children;for(let Ne=0,Fe=pe.length;Ne<Fe;Ne++)qt(pe[Ne],O,W,K)}function Ui(M,O,W,K){const B=M.opaque,pe=M.transmissive,Ne=M.transparent;m.setupLightsView(W),ne===!0&&Ee.setGlobalState(y.clippingPlanes,W),pe.length>0&&ti(B,pe,O,W),K&&Ae.viewport(b.copy(K)),B.length>0&&ni(B,O,W),pe.length>0&&ni(pe,O,W),Ne.length>0&&ni(Ne,O,W),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function ti(M,O,W,K){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const pe=Ie.isWebGL2;ee===null&&(ee=new vi(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?Ns:zn,minFilter:fi,samples:pe?4:0})),y.getDrawingBufferSize(be),pe?ee.setSize(be.x,be.y):ee.setSize(Ar(be.x),Ar(be.y));const Ne=y.getRenderTarget();y.setRenderTarget(ee),y.getClearColor(ae),P=y.getClearAlpha(),P<1&&y.setClearColor(16777215,.5),y.clear();const Fe=y.toneMapping;y.toneMapping=kn,ni(M,W,K),A.updateMultisampleRenderTarget(ee),A.updateRenderTargetMipmap(ee);let ke=!1;for(let Xe=0,He=O.length;Xe<He;Xe++){const We=O[Xe],xt=We.object,Jt=We.geometry,Ct=We.material,Bn=We.group;if(Ct.side===gn&&xt.layers.test(K.layers)){const gt=Ct.side;Ct.side=Wt,Ct.needsUpdate=!0,ii(xt,W,K,Jt,Ct,Bn),Ct.side=gt,Ct.needsUpdate=!0,ke=!0}}ke===!0&&(A.updateMultisampleRenderTarget(ee),A.updateRenderTargetMipmap(ee)),y.setRenderTarget(Ne),y.setClearColor(ae,P),y.toneMapping=Fe}function ni(M,O,W){const K=O.isScene===!0?O.overrideMaterial:null;for(let B=0,pe=M.length;B<pe;B++){const Ne=M[B],Fe=Ne.object,ke=Ne.geometry,Xe=K===null?Ne.material:K,He=Ne.group;Fe.layers.test(W.layers)&&ii(Fe,O,W,ke,Xe,He)}}function ii(M,O,W,K,B,pe){M.onBeforeRender(y,O,W,K,B,pe),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(y,O,W,K,M,pe),B.transparent===!0&&B.side===gn&&B.forceSinglePass===!1?(B.side=Wt,B.needsUpdate=!0,y.renderBufferDirect(W,O,K,B,M,pe),B.side=wn,B.needsUpdate=!0,y.renderBufferDirect(W,O,K,B,M,pe),B.side=gn):y.renderBufferDirect(W,O,K,B,M,pe),M.onAfterRender(y,O,W,K,B,pe)}function mn(M,O,W){O.isScene!==!0&&(O=ge);const K=Ue.get(M),B=m.state.lights,pe=m.state.shadowsArray,Ne=B.state.version,Fe=re.getParameters(M,B.state,pe,O,W),ke=re.getProgramCacheKey(Fe);let Xe=K.programs;K.environment=M.isMeshStandardMaterial?O.environment:null,K.fog=O.fog,K.envMap=(M.isMeshStandardMaterial?j:x).get(M.envMap||K.environment),Xe===void 0&&(M.addEventListener("dispose",ve),Xe=new Map,K.programs=Xe);let He=Xe.get(ke);if(He!==void 0){if(K.currentProgram===He&&K.lightsStateVersion===Ne)return fe(M,Fe),He}else Fe.uniforms=re.getUniforms(M),M.onBuild(W,Fe,y),M.onBeforeCompile(Fe,y),He=re.acquireProgram(Fe,ke),Xe.set(ke,He),K.uniforms=Fe.uniforms;const We=K.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(We.clippingPlanes=Ee.uniform),fe(M,Fe),K.needsLights=ht(M),K.lightsStateVersion=Ne,K.needsLights&&(We.ambientLightColor.value=B.state.ambient,We.lightProbe.value=B.state.probe,We.directionalLights.value=B.state.directional,We.directionalLightShadows.value=B.state.directionalShadow,We.spotLights.value=B.state.spot,We.spotLightShadows.value=B.state.spotShadow,We.rectAreaLights.value=B.state.rectArea,We.ltc_1.value=B.state.rectAreaLTC1,We.ltc_2.value=B.state.rectAreaLTC2,We.pointLights.value=B.state.point,We.pointLightShadows.value=B.state.pointShadow,We.hemisphereLights.value=B.state.hemi,We.directionalShadowMap.value=B.state.directionalShadowMap,We.directionalShadowMatrix.value=B.state.directionalShadowMatrix,We.spotShadowMap.value=B.state.spotShadowMap,We.spotLightMatrix.value=B.state.spotLightMatrix,We.spotLightMap.value=B.state.spotLightMap,We.pointShadowMap.value=B.state.pointShadowMap,We.pointShadowMatrix.value=B.state.pointShadowMatrix),K.currentProgram=He,K.uniformsList=null,He}function si(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=Kr.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function fe(M,O){const W=Ue.get(M);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Z(M,O,W,K,B){O.isScene!==!0&&(O=ge),A.resetTextureUnits();const pe=O.fog,Ne=K.isMeshStandardMaterial?O.environment:null,Fe=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:wt,ke=(K.isMeshStandardMaterial?j:x).get(K.envMap||Ne),Xe=K.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,He=!!W.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),We=!!W.morphAttributes.position,xt=!!W.morphAttributes.normal,Jt=!!W.morphAttributes.color;let Ct=kn;K.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ct=y.toneMapping);const Bn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,gt=Bn!==void 0?Bn.length:0,Je=Ue.get(K),Ya=m.state.lights;if(ne===!0&&(se===!0||M!==S)){const on=M===S&&K.id===H;Ee.setState(K,M,on)}let yt=!1;K.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Ya.state.version||Je.outputColorSpace!==Fe||B.isBatchedMesh&&Je.batching===!1||!B.isBatchedMesh&&Je.batching===!0||B.isInstancedMesh&&Je.instancing===!1||!B.isInstancedMesh&&Je.instancing===!0||B.isSkinnedMesh&&Je.skinning===!1||!B.isSkinnedMesh&&Je.skinning===!0||B.isInstancedMesh&&Je.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Je.instancingColor===!1&&B.instanceColor!==null||Je.envMap!==ke||K.fog===!0&&Je.fog!==pe||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Ee.numPlanes||Je.numIntersection!==Ee.numIntersection)||Je.vertexAlphas!==Xe||Je.vertexTangents!==He||Je.morphTargets!==We||Je.morphNormals!==xt||Je.morphColors!==Jt||Je.toneMapping!==Ct||Ie.isWebGL2===!0&&Je.morphTargetsCount!==gt)&&(yt=!0):(yt=!0,Je.__version=K.version);let Oi=Je.currentProgram;yt===!0&&(Oi=mn(K,O,B));let Wd=!1,tr=!1,Ka=!1;const Ot=Oi.getUniforms(),Fi=Je.uniforms;if(Ae.useProgram(Oi.program)&&(Wd=!0,tr=!0,Ka=!0),K.id!==H&&(H=K.id,tr=!0),Wd||S!==M){Ot.setValue(F,"projectionMatrix",M.projectionMatrix),Ot.setValue(F,"viewMatrix",M.matrixWorldInverse);const on=Ot.map.cameraPosition;on!==void 0&&on.setValue(F,Re.setFromMatrixPosition(M.matrixWorld)),Ie.logarithmicDepthBuffer&&Ot.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ot.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,tr=!0,Ka=!0)}if(B.isSkinnedMesh){Ot.setOptional(F,B,"bindMatrix"),Ot.setOptional(F,B,"bindMatrixInverse");const on=B.skeleton;on&&(Ie.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),Ot.setValue(F,"boneTexture",on.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Ot.setOptional(F,B,"batchingTexture"),Ot.setValue(F,"batchingTexture",B._matricesTexture,A));const Ja=W.morphAttributes;if((Ja.position!==void 0||Ja.normal!==void 0||Ja.color!==void 0&&Ie.isWebGL2===!0)&&xe.update(B,W,Oi),(tr||Je.receiveShadow!==B.receiveShadow)&&(Je.receiveShadow=B.receiveShadow,Ot.setValue(F,"receiveShadow",B.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Fi.envMap.value=ke,Fi.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),tr&&(Ot.setValue(F,"toneMappingExposure",y.toneMappingExposure),Je.needsLights&&Te(Fi,Ka),pe&&K.fog===!0&&D.refreshFogUniforms(Fi,pe),D.refreshMaterialUniforms(Fi,K,te,N,ee),Kr.upload(F,si(Je),Fi,A)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Kr.upload(F,si(Je),Fi,A),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ot.setValue(F,"center",B.center),Ot.setValue(F,"modelViewMatrix",B.modelViewMatrix),Ot.setValue(F,"normalMatrix",B.normalMatrix),Ot.setValue(F,"modelMatrix",B.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const on=K.uniformsGroups;for(let Za=0,fS=on.length;Za<fS;Za++)if(Ie.isWebGL2){const jd=on[Za];tt.update(jd,Oi),tt.bind(jd,Oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Oi}function Te(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function ht(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,O,W){Ue.get(M.texture).__webglTexture=O,Ue.get(M.depthTexture).__webglTexture=W;const K=Ue.get(M);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=W===void 0,K.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,O){const W=Ue.get(M);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,W=0){R=M,C=O,T=W;let K=!0,B=null,pe=!1,Ne=!1;if(M){const ke=Ue.get(M);ke.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(F.FRAMEBUFFER,null),K=!1):ke.__webglFramebuffer===void 0?A.setupRenderTarget(M):ke.__hasExternalTextures&&A.rebindTextures(M,Ue.get(M.texture).__webglTexture,Ue.get(M.depthTexture).__webglTexture);const Xe=M.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ne=!0);const He=Ue.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(He[O])?B=He[O][W]:B=He[O],pe=!0):Ie.isWebGL2&&M.samples>0&&A.useMultisampledRTT(M)===!1?B=Ue.get(M).__webglMultisampledFramebuffer:Array.isArray(He)?B=He[W]:B=He,b.copy(M.viewport),G.copy(M.scissor),J=M.scissorTest}else b.copy($).multiplyScalar(te).floor(),G.copy(Q).multiplyScalar(te).floor(),J=de;if(Ae.bindFramebuffer(F.FRAMEBUFFER,B)&&Ie.drawBuffers&&K&&Ae.drawBuffers(M,B),Ae.viewport(b),Ae.scissor(G),Ae.setScissorTest(J),pe){const ke=Ue.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,ke.__webglTexture,W)}else if(Ne){const ke=Ue.get(M.texture),Xe=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.__webglTexture,W||0,Xe)}H=-1},this.readRenderTargetPixels=function(M,O,W,K,B,pe,Ne){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ue.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe){Ae.bindFramebuffer(F.FRAMEBUFFER,Fe);try{const ke=M.texture,Xe=ke.format,He=ke.type;if(Xe!==en&&Se.convert(Xe)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=He===Ns&&(Ce.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(He!==zn&&Se.convert(He)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===Rn&&(Ie.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-K&&W>=0&&W<=M.height-B&&F.readPixels(O,W,K,B,Se.convert(Xe),Se.convert(He),pe)}finally{const ke=R!==null?Ue.get(R).__webglFramebuffer:null;Ae.bindFramebuffer(F.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(M,O,W=0){const K=Math.pow(2,-W),B=Math.floor(O.image.width*K),pe=Math.floor(O.image.height*K);A.setTexture2D(O,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,M.x,M.y,B,pe),Ae.unbindTexture()},this.copyTextureToTexture=function(M,O,W,K=0){const B=O.image.width,pe=O.image.height,Ne=Se.convert(W.format),Fe=Se.convert(W.type);A.setTexture2D(W,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment),O.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,K,M.x,M.y,B,pe,Ne,Fe,O.image.data):O.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,K,M.x,M.y,O.mipmaps[0].width,O.mipmaps[0].height,Ne,O.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,K,M.x,M.y,Ne,Fe,O.image),K===0&&W.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(M,O,W,K,B=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=M.max.x-M.min.x+1,Ne=M.max.y-M.min.y+1,Fe=M.max.z-M.min.z+1,ke=Se.convert(K.format),Xe=Se.convert(K.type);let He;if(K.isData3DTexture)A.setTexture3D(K,0),He=F.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)A.setTexture2DArray(K,0),He=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,K.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,K.unpackAlignment);const We=F.getParameter(F.UNPACK_ROW_LENGTH),xt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Jt=F.getParameter(F.UNPACK_SKIP_PIXELS),Ct=F.getParameter(F.UNPACK_SKIP_ROWS),Bn=F.getParameter(F.UNPACK_SKIP_IMAGES),gt=W.isCompressedTexture?W.mipmaps[B]:W.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,gt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,M.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,M.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,M.min.z),W.isDataTexture||W.isData3DTexture?F.texSubImage3D(He,B,O.x,O.y,O.z,pe,Ne,Fe,ke,Xe,gt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(He,B,O.x,O.y,O.z,pe,Ne,Fe,ke,gt.data)):F.texSubImage3D(He,B,O.x,O.y,O.z,pe,Ne,Fe,ke,Xe,gt),F.pixelStorei(F.UNPACK_ROW_LENGTH,We),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Jt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ct),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Bn),B===0&&K.generateMipmaps&&F.generateMipmap(He),Ae.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?A.setTextureCube(M,0):M.isData3DTexture?A.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?A.setTexture2DArray(M,0):A.setTexture2D(M,0),Ae.unbindTexture()},this.resetState=function(){C=0,T=0,R=null,Ae.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ho?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===yr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ft?gi:Vc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===gi?ft:wt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class lv extends qu{}lv.prototype.isWebGL1Renderer=!0;class cv extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class uv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Go,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new U;class xa{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const $u=new U,Yu=new ut,Ku=new ut,dv=new U,Ju=new Ye,Jr=new U,Ea=new vn,Zu=new Ye,Sa=new Pr;class hv extends Ge{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ic,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ln),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jr),this.boundingBox.expandByPoint(Jr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jr),this.boundingSphere.expandByPoint(Jr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ea.copy(this.boundingSphere),Ea.applyMatrix4(s),e.ray.intersectsSphere(Ea)!==!1&&(Zu.copy(s).invert(),Sa.copy(e.ray).applyMatrix4(Zu),!(this.boundingBox!==null&&Sa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Sa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ic?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Zf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Yu.fromBufferAttribute(s.attributes.skinIndex,e),Ku.fromBufferAttribute(s.attributes.skinWeight,e),$u.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Ku.getComponent(r);if(o!==0){const a=Yu.getComponent(r);Ju.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(dv.copy($u).applyMatrix4(Ju),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Qu extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class fv extends Lt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=bt,u=bt,d,f){super(null,o,a,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ed=new Ye,pv=new Ye;class Ma{constructor(e=[],t=[]){this.uuid=ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:pv;ed.multiplyMatrices(a,t[r]),ed.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ma(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new fv(t,e,e,en,Rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Qu),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Aa extends Ft{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gs=new Ye,td=new Ye,Zr=[],nd=new Ln,mv=new Ye,Gs=new Ge,Ws=new vn;class gv extends Ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Aa(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),nd.copy(e.boundingBox).applyMatrix4(gs),this.boundingBox.union(nd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),Ws.copy(e.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(Ws)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ws.copy(this.boundingSphere),Ws.applyMatrix4(n),e.ray.intersectsSphere(Ws)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gs),td.multiplyMatrices(n,gs),Gs.matrixWorld=td,Gs.raycast(e,Zr);for(let o=0,a=Zr.length;o<a;o++){const l=Zr[o];l.instanceId=r,l.object=this,t.push(l)}Zr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Aa(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class id extends yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sd=new U,rd=new U,od=new Ye,Ta=new Pr,Qr=new vn;class ba extends pt{constructor(e=new pn,t=new id){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)sd.fromBufferAttribute(t,s-1),rd.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=sd.distanceTo(rd);e.setAttribute("lineDistance",new nn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=r,e.ray.intersectsSphere(Qr)===!1)return;od.copy(s).invert(),Ta.copy(e.ray).applyMatrix4(od);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,u=new U,d=new U,f=new U,p=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const g=Math.max(0,o.start),E=Math.min(_.count,o.start+o.count);for(let y=g,w=E-1;y<w;y+=p){const C=_.getX(y),T=_.getX(y+1);if(c.fromBufferAttribute(m,C),u.fromBufferAttribute(m,T),Ta.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const H=e.ray.origin.distanceTo(f);H<e.near||H>e.far||t.push({distance:H,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),E=Math.min(m.count,o.start+o.count);for(let y=g,w=E-1;y<w;y+=p){if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,y+1),Ta.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(f);T<e.near||T>e.far||t.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const ad=new U,ld=new U;class _v extends ba{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ad.fromBufferAttribute(t,s),ld.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ad.distanceTo(ld);e.setAttribute("lineDistance",new nn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vv extends ba{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class cd extends yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ud=new Ye,wa=new Pr,eo=new vn,to=new U;class yv extends pt{constructor(e=new pn,t=new cd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(s),eo.radius+=r,e.ray.intersectsSphere(eo)===!1)return;ud.copy(s).invert(),wa.copy(e.ray).applyMatrix4(ud);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=f,v=p;_<v;_++){const m=c.getX(_);to.fromBufferAttribute(d,m),dd(to,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,v=p;_<v;_++)to.fromBufferAttribute(d,_),dd(to,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function dd(i,e,t,n,s,r,o){const a=wa.distanceSqToPoint(i);if(a<t){const l=new U;wa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class no extends pn{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],p=[];let _=0;const v=[],m=n/2;let g=0;E(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new nn(d,3)),this.setAttribute("normal",new nn(f,3)),this.setAttribute("uv",new nn(p,2));function E(){const w=new U,C=new U;let T=0;const R=(t-e)/n;for(let H=0;H<=r;H++){const S=[],b=H/r,G=b*(t-e)+e;for(let J=0;J<=s;J++){const ae=J/s,P=ae*l+a,I=Math.sin(P),N=Math.cos(P);C.x=G*I,C.y=-b*n+m,C.z=G*N,d.push(C.x,C.y,C.z),w.set(I,R,N).normalize(),f.push(w.x,w.y,w.z),p.push(ae,1-b),S.push(_++)}v.push(S)}for(let H=0;H<s;H++)for(let S=0;S<r;S++){const b=v[S][H],G=v[S+1][H],J=v[S+1][H+1],ae=v[S][H+1];u.push(b,G,ae),u.push(G,J,ae),T+=6}c.addGroup(g,T,0),g+=T}function y(w){const C=_,T=new Ze,R=new U;let H=0;const S=w===!0?e:t,b=w===!0?1:-1;for(let J=1;J<=s;J++)d.push(0,m*b,0),f.push(0,b,0),p.push(.5,.5),_++;const G=_;for(let J=0;J<=s;J++){const P=J/s*l+a,I=Math.cos(P),N=Math.sin(P);R.x=S*N,R.y=m*b,R.z=S*I,d.push(R.x,R.y,R.z),f.push(0,b,0),T.x=I*.5+.5,T.y=N*.5*b+.5,p.push(T.x,T.y),_++}for(let J=0;J<s;J++){const ae=C+J,P=G+J;w===!0?u.push(P,P+1,ae):u.push(P+1,P,ae),H+=3}c.addGroup(g,H,w===!0?1:2),g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zt extends yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kc,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class On extends zt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function io(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function xv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ev(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function hd(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function fd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class js{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Sv extends js{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xi,endingEnd:Xi}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case qi:r=e,a=2*t-n;break;case vr:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qi:o=e,l=2*n-t;break;case vr:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-t)/(s-t),v=_*_,m=v*_,g=-f*m+2*f*v-f*_,E=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*_+1,y=(-1-p)*m+(1.5+p)*v+.5*_,w=p*m-p*v;for(let C=0;C!==a;++C)r[C]=g*o[u+C]+E*o[c+C]+y*o[l+C]+w*o[d+C];return r}}class pd extends js{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),d=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*u;return r}}class Mv extends js{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class En{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=io(t,this.TimeBufferType),this.values=io(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:io(e.times,Array),values:io(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Mv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ds:t=this.InterpolantFactoryMethodDiscrete;break;case ji:t=this.InterpolantFactoryMethodLinear;break;case Vo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ds;case this.InterpolantFactoryMethodLinear:return ji;case this.InterpolantFactoryMethodSmooth:return Vo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&xv(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Vo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const d=a*n,f=d-n,p=d+n;for(let _=0;_!==n;++_){const v=t[d+_];if(v!==t[f+_]||v!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}En.prototype.TimeBufferType=Float32Array,En.prototype.ValueBufferType=Float32Array,En.prototype.DefaultInterpolation=ji;class _s extends En{}_s.prototype.ValueTypeName="bool",_s.prototype.ValueBufferType=Array,_s.prototype.DefaultInterpolation=Ds,_s.prototype.InterpolantFactoryMethodLinear=void 0,_s.prototype.InterpolantFactoryMethodSmooth=void 0;class md extends En{}md.prototype.ValueTypeName="color";class vs extends En{}vs.prototype.ValueTypeName="number";class Av extends js{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)cn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Ci extends En{InterpolantFactoryMethodLinear(e){return new Av(this.times,this.values,this.getValueSize(),e)}}Ci.prototype.ValueTypeName="quaternion",Ci.prototype.DefaultInterpolation=ji,Ci.prototype.InterpolantFactoryMethodSmooth=void 0;class ys extends En{}ys.prototype.ValueTypeName="string",ys.prototype.ValueBufferType=Array,ys.prototype.DefaultInterpolation=Ds,ys.prototype.InterpolantFactoryMethodLinear=void 0,ys.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends En{}xs.prototype.ValueTypeName="vector";class Ra{constructor(e,t=-1,n,s=ko){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ln(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(bv(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(En.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=Ev(l);l=hd(l,1,u),c=hd(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new vs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const d=u[1];let f=s[d];f||(s[d]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,f,p,_,v){if(p.length!==0){const m=[],g=[];fd(p,m,g,_),m.length!==0&&v.push(new d(f,m,g))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let v=0;v<f[_].morphTargets.length;v++)p[f[_].morphTargets[v]]=-1;for(const v in p){const m=[],g=[];for(let E=0;E!==f[_].morphTargets.length;++E){const y=f[_];m.push(y.time),g.push(y.morphTarget===v?1:0)}s.push(new vs(".morphTargetInfluence["+v+"]",m,g))}l=p.length*o}else{const p=".bones["+t[d].name+"]";n(xs,p+".position",f,"pos",s),n(Ci,p+".quaternion",f,"rot",s),n(xs,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Tv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vs;case"vector":case"vector2":case"vector3":case"vector4":return xs;case"color":return md;case"quaternion":return Ci;case"bool":case"boolean":return _s;case"string":return ys}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function bv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Tv(i.type);if(i.times===void 0){const t=[],n=[];fd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Yn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class wv{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const Rv=new wv;class Es{constructor(e){this.manager=e!==void 0?e:Rv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Es.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fn={};class Cv extends Error{constructor(e,t){super(e),this.response=t}}class gd extends Es{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Yn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Fn[e]!==void 0){Fn[e].push({onLoad:t,onProgress:n,onError:s});return}Fn[e]=[],Fn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Fn[e],d=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,_=p!==0;let v=0;const m=new ReadableStream({start(g){E();function E(){d.read().then(({done:y,value:w})=>{if(y)g.close();else{v+=w.byteLength;const C=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:p});for(let T=0,R=u.length;T<R;T++){const H=u[T];H.onProgress&&H.onProgress(C)}g.enqueue(w),E()}})}}});return new Response(m)}else throw new Cv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{Yn.add(e,c);const u=Fn[e];delete Fn[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Fn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Fn[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Lv extends Es{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Yn.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Fs("img");function l(){u(),Yn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Pv extends Es{constructor(e){super(e)}load(e,t,n,s){const r=new Lt,o=new Lv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class so extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ca=new Ye,_d=new U,vd=new U;class La{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ua,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_d.setFromMatrixPosition(e.matrixWorld),t.position.copy(_d),vd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vd),t.updateMatrixWorld(),Ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Iv extends La{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Yi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class yd extends so{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Iv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const xd=new Ye,Xs=new U,Pa=new U;class Nv extends La{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Xs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xs),Pa.copy(n.position),Pa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Pa),n.updateMatrixWorld(),s.makeTranslation(-Xs.x,-Xs.y,-Xs.z),xd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xd)}}class qs extends so{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Dv extends La{constructor(){super(new da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ia extends so{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Dv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Uv extends so{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $s{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Ov extends Es{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Yn.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Yn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Yn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Yn.add(e,l),r.manager.itemStart(e)}}class Fv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ed(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ed();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ed(){return(typeof performance>"u"?Date:performance).now()}class Bv{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){cn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const o=this._workIndex*r;cn.multiplyQuaternionsFlat(e,o,e,t,e,n),cn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*s}}}const Na="\\[\\]\\.:\\/",Vv=new RegExp("["+Na+"]","g"),Da="[^"+Na+"]",kv="[^"+Na.replace("\\.","")+"]",zv=/((?:WC+[\/:])*)/.source.replace("WC",Da),Hv=/(WCOD+)?/.source.replace("WCOD",kv),Gv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Da),Wv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Da),jv=new RegExp("^"+zv+Hv+Gv+Wv+"$"),Xv=["material","materials","bones","map"];class qv{constructor(e,t,n){const s=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class at{constructor(e,t,n){this.path=t,this.parsedPath=n||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,n):new at(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vv,"")}static parseTrackName(e){const t=jv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Xv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=qv,at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray],at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class $v{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Xi,endingEnd:Xi};for(let c=0;c!==o;++c){const u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=lp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case up:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case ko:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const o=n===cp;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===ap){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=qi,s.endingEnd=qi):(e?s.endingStart=this.zeroSlopeAtStart?qi:Xi:s.endingStart=vr,t?s.endingEnd=this.zeroSlopeAtEnd?qi:Xi:s.endingEnd=vr)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const Yv=new Float32Array(1);class Ua extends _i{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==r;++d){const f=s[d],p=f.name;let _=u[p];if(_!==void 0)++_.referenceCount,o[d]=_;else{if(_=o[d],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,p));continue}const v=t&&t._propertyBindings[d].binding.parsedPath;_=new Bv(at.create(n,p,v),f.ValueTypeName,f.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,p),o[d]=_}a[d].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const d=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete d[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new pd(new Float32Array(2),new Float32Array(2),1,Yv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?Ra.findByName(s,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ko),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new $v(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?Ra.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);function Sd(i,e){if(e===dp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===zo||e===Bc){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===zo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Oa extends Es{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ey(t)}),this.register(function(t){return new cy(t)}),this.register(function(t){return new uy(t)}),this.register(function(t){return new dy(t)}),this.register(function(t){return new ny(t)}),this.register(function(t){return new iy(t)}),this.register(function(t){return new sy(t)}),this.register(function(t){return new ry(t)}),this.register(function(t){return new Qv(t)}),this.register(function(t){return new oy(t)}),this.register(function(t){return new ty(t)}),this.register(function(t){return new ly(t)}),this.register(function(t){return new ay(t)}),this.register(function(t){return new Jv(t)}),this.register(function(t){return new hy(t)}),this.register(function(t){return new fy(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=$s.extractUrlBase(e);o=$s.resolveURL(c,this.path)}else o=$s.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new gd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Md){try{o[Qe.KHR_BINARY_GLTF]=new py(e)}catch(d){s&&s(d);return}r=JSON.parse(o[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new wy(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const d=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(d){case Qe.KHR_MATERIALS_UNLIT:o[d]=new Zv;break;case Qe.KHR_DRACO_MESH_COMPRESSION:o[d]=new my(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:o[d]=new gy;break;case Qe.KHR_MESH_QUANTIZATION:o[d]=new _y;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function Kv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Jv{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ve(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],wt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ia(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new qs(u),c.distance=d;break;case"spot":c=new yd(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Jn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Zv{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Ei}extendParams(e,t,n){const s=[];e.color=new Ve(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],wt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,ft))}return Promise.all(s)}}class Qv{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class ey{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ze(a,a)}return Promise.all(r)}}class ty{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class ny{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],wt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ft)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class iy{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class sy{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(a[0],a[1],a[2],wt),Promise.all(r)}}class ry{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class oy{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(a[0],a[1],a[2],wt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ft)),Promise.all(r)}}class ay{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class ly{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class cy{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class uy{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class dy{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class hy{constructor(e){this.name=Qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,d=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(p),u,d,f,s.mode,s.filter),p})})}else return null}}class fy{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==rn.TRIANGLES&&c.mode!==rn.TRIANGLE_STRIP&&c.mode!==rn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const _ of d){const v=new Ye,m=new U,g=new cn,E=new U(1,1,1),y=new gv(_.geometry,_.material,f);for(let w=0;w<f;w++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,w),l.SCALE&&E.fromBufferAttribute(l.SCALE,w),y.setMatrixAt(w,v.compose(m,g,E));for(const w in l)if(w==="_COLOR_0"){const C=l[w];y.instanceColor=new Aa(C.array,C.itemSize,C.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&_.geometry.setAttribute(w,l[w]);pt.prototype.copy.call(y,_),this.parser.assignFinalMaterial(y),p.push(y)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Md="glTF",Ys=12,Ad={JSON:1313821514,BIN:5130562};class py{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ys),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Md)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ys,r=new DataView(e,Ys);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Ad.JSON){const c=new Uint8Array(e,Ys+o,a);this.content=n.decode(c)}else if(l===Ad.BIN){const c=Ys+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class my{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=Ba[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=Ba[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],p=Ss[f.componentType];c[d]=p.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,f){s.decodeDracoFile(u,function(p){for(const _ in p.attributes){const v=p.attributes[_],m=l[_];m!==void 0&&(v.normalized=m)}d(p)},a,c,wt,f)})})}}class gy{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class _y{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}}class Td extends js{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,d=(n-t)/u,f=d*d,p=f*d,_=e*c,v=_-c,m=-2*p+3*f,g=p-f,E=1-m,y=g-f+d;for(let w=0;w!==a;w++){const C=o[v+w+a],T=o[v+w+l]*u,R=o[_+w+a],H=o[_+w]*u;r[w]=E*C+y*T+m*R+g*H}return r}}const vy=new cn;class yy extends Td{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return vy.fromArray(r).normalize().toArray(r),r}}const rn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ss={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bd={9728:bt,9729:jt,9984:Io,9985:rc,9986:_r,9987:fi},wd={33071:Qt,33648:gr,10497:Gi},Fa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ba={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Kn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xy={CUBICSPLINE:void 0,LINEAR:ji,STEP:Ds},Va={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ey(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new zt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:wn})),i.DefaultMaterial}function Li(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Jn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Sy(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;o.push(f)}if(s){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function My(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ay(i){let e;const t=i.extensions&&i.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ka(t.attributes):e=i.indices+":"+ka(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ka(i.targets[n]);return e}function ka(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function za(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ty(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const by=new Ye;class wy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Kv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new Pv(this.options.manager):this.textureLoader=new Ov(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new gd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Li(r,a,s),Jn(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load($s.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Fa[s.type],a=Ss[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ft(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Fa[s.type],c=Ss[s.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let v,m;if(p&&p!==d){const g=Math.floor(f/p),E="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count;let y=t.cache.get(E);y||(v=new c(a,g*p,s.count*p/u),y=new uv(v,p/u),t.cache.add(E,y)),m=new xa(y,l,f%p/u,_)}else a===null?v=new c(s.count*l):v=new c(a,f,s.count*l),m=new Ft(v,l,_);if(s.sparse!==void 0){const g=Fa.SCALAR,E=Ss[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,w=s.sparse.values.byteOffset||0,C=new E(o[1],y,s.sparse.count*g),T=new c(o[2],w,s.sparse.count*l);a!==null&&(m=new Ft(m.array.slice(),m.itemSize,m.normalized));for(let R=0,H=C.length;R<H;R++){const S=C[R];if(m.setX(S,T[R*l]),l>=2&&m.setY(S,T[R*l+1]),l>=3&&m.setZ(S,T[R*l+2]),l>=4&&m.setW(S,T[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=bd[f.magFilter]||jt,u.minFilter=bd[f.minFilter]||fi,u.wrapS=wd[f.wrapS]||Gi,u.wrapT=wd[f.wrapT]||Gi,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=function(v){const m=new Lt(v);m.needsUpdate=!0,f(m)}),t.load($s.resolveURL(d,r.path),_,void 0,p)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),d.userData.mimeType=o.mimeType||Ty(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new cd,yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new id,yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return zt}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Qe.KHR_MATERIALS_UNLIT]){const d=s[Qe.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new Ve(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],wt),a.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,ft)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=gn);const u=r.alphaMode||Va.OPAQUE;if(u===Va.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Va.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ei&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ze(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Ei&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ei){const d=r.emissiveFactor;a.emissive=new Ve().setRGB(d[0],d[1],d[2],wt)}return r.emissiveTexture!==void 0&&o!==Ei&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ft)),Promise.all(c).then(function(){const d=new o(a);return r.name&&(d.name=r.name),Jn(d,r),t.associations.set(d,{materials:e}),r.extensions&&Li(s,d,r),d})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Rd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Ay(c),d=s[u];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Rd(new pn,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Ey(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let p=0,_=u.length;p<_;p++){const v=u[p],m=o[p];let g;const E=c[p];if(m.mode===rn.TRIANGLES||m.mode===rn.TRIANGLE_STRIP||m.mode===rn.TRIANGLE_FAN||m.mode===void 0)g=r.isSkinnedMesh===!0?new hv(v,E):new Ge(v,E),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===rn.TRIANGLE_STRIP?g.geometry=Sd(g.geometry,Bc):m.mode===rn.TRIANGLE_FAN&&(g.geometry=Sd(g.geometry,zo));else if(m.mode===rn.LINES)g=new _v(v,E);else if(m.mode===rn.LINE_STRIP)g=new ba(v,E);else if(m.mode===rn.LINE_LOOP)g=new vv(v,E);else if(m.mode===rn.POINTS)g=new yv(v,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&My(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Jn(g,r),m.extensions&&Li(s,g,m),t.assignFinalMaterial(g),d.push(g)}for(let p=0,_=d.length;p<_;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return r.extensions&&Li(s,d[0],r),d[0];const f=new Ri;r.extensions&&Li(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,_=d.length;p<_;p++)f.add(d[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vt(Op.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new da(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Jn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const f=new Ye;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ma(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,f=s.channels.length;d<f;d++){const p=s.channels[d],_=s.samplers[p.sampler],v=p.target,m=v.node,g=s.parameters!==void 0?s.parameters[_.input]:_.input,E=s.parameters!==void 0?s.parameters[_.output]:_.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",E)),c.push(_),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const f=d[0],p=d[1],_=d[2],v=d[3],m=d[4],g=[];for(let E=0,y=f.length;E<y;E++){const w=f[E],C=p[E],T=_[E],R=v[E],H=m[E];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const S=n._createAnimationTracks(w,C,T,R,H);if(S)for(let b=0;b<S.length;b++)g.push(S[b])}return new Ra(r,void 0,g)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,by)});for(let p=0,_=d.length;p<_;p++)u.add(d[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Qu:c.length>1?u=new Ri:c.length===1?u=c[0]:u=new pt,u!==c[0])for(let d=0,f=c.length;d<f;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=o),Jn(u,r),r.extensions&&Li(n,u,r),r.matrix!==void 0){const d=new Ye;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Ri;n.name&&(r.name=s.createUniqueName(n.name)),Jn(r,n),n.extensions&&Li(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);const c=u=>{const d=new Map;for(const[f,p]of s.associations)(f instanceof yn||f instanceof Lt)&&d.set(f,p);return u.traverse(f=>{const p=s.associations.get(f);p!=null&&d.set(f,p)}),d};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Kn[r.path]===Kn.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Kn[r.path]){case Kn.weights:c=vs;break;case Kn.rotation:c=Ci;break;case Kn.position:case Kn.scale:c=xs;break;default:switch(n.itemSize){case 1:c=vs;break;case 2:case 3:default:c=xs;break}break}const u=s.interpolation!==void 0?xy[s.interpolation]:ji,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){const _=new c(l[f]+"."+Kn[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=za(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Ci?yy:Td;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ry(i,e,t){const n=e.attributes,s=new Ln;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),a.normalized){const u=za(Ss[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new U,l=new U;for(let c=0,u=r.length;c<u;c++){const d=r[c];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],p=f.min,_=f.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),f.normalized){const v=za(Ss[f.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new vn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Rd(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Ba[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ot.workingColorSpace!==wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),Jn(i,e),Ry(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Sy(i,e.targets,t):i})}const Ks={idle:{type:"idle",name:"Idle",duration:4,loop:!0,easing:"ease-in-out",keyframes:[{time:0,body:{lean:{x:0,z:0}},head:{rotation:{x:0,y:0,z:0}}},{time:.5,body:{lean:{x:.01,z:0}},head:{rotation:{x:.02,y:.01,z:0}}},{time:1,body:{lean:{x:0,z:0}},head:{rotation:{x:0,y:0,z:0}}}]},explain:{type:"explain",name:"Explain",duration:2,loop:!1,easing:"ease-in-out",keyframes:[{time:0,leftArm:{shoulderRotation:{x:0,y:0,z:0},elbowRotation:{x:0,y:0,z:0}},rightArm:{shoulderRotation:{x:0,y:0,z:0},elbowRotation:{x:0,y:0,z:0}}},{time:.3,leftArm:{shoulderRotation:{x:-.3,y:.2,z:0},elbowRotation:{x:.5,y:0,z:0}},rightArm:{shoulderRotation:{x:-.4,y:-.2,z:0},elbowRotation:{x:.6,y:0,z:0}}},{time:.7,leftArm:{shoulderRotation:{x:-.4,y:.3,z:0},elbowRotation:{x:.4,y:0,z:0}},rightArm:{shoulderRotation:{x:-.3,y:-.3,z:0},elbowRotation:{x:.5,y:0,z:0}}},{time:1,leftArm:{shoulderRotation:{x:0,y:0,z:0},elbowRotation:{x:0,y:0,z:0}},rightArm:{shoulderRotation:{x:0,y:0,z:0},elbowRotation:{x:0,y:0,z:0}}}]},emphasize:{type:"emphasize",name:"Emphasize",duration:1.5,loop:!1,easing:"ease-out",keyframes:[{time:0,rightArm:{shoulderRotation:{x:0,y:0,z:0},elbowRotation:{x:0,y:0,z:0}},head:{rotation:{x:0,y:0,z:0}}},{time:.2,rightArm:{shoulderRotation:{x:-.5,y:0,z:0},elbowRotation:{x:.8,y:0,z:0}},head:{rotation:{x:.05,y:0,z:0}}},{time:.4,rightArm:{shoulderRotation:{x:-.6,y:0,z:0},elbowRotation:{x:.6,y:0,z:0}},head:{rotation:{x:-.05,y:0,z:0}}},{time:1,rightArm:{shoulderRotation:{x:0,y:0,z:0},elbowRotation:{x:0,y:0,z:0}},head:{rotation:{x:0,y:0,z:0}}}]},point:{type:"point",name:"Point",duration:2,loop:!1,easing:"ease-in-out",keyframes:[{time:0,rightArm:{shoulderRotation:{x:0,y:0,z:0},elbowRotation:{x:0,y:0,z:0}}},{time:.3,rightArm:{shoulderRotation:{x:-.8,y:.3,z:0},elbowRotation:{x:.2,y:0,z:0}}},{time:.7,rightArm:{shoulderRotation:{x:-.8,y:.3,z:0},elbowRotation:{x:.2,y:0,z:0}}},{time:1,rightArm:{shoulderRotation:{x:0,y:0,z:0},elbowRotation:{x:0,y:0,z:0}}}]},wave:{type:"wave",name:"Wave",duration:2,loop:!1,easing:"ease-in-out",keyframes:[{time:0,rightArm:{shoulderRotation:{x:0,y:0,z:0},wristRotation:{x:0,y:0,z:0}}},{time:.2,rightArm:{shoulderRotation:{x:-1.2,y:.5,z:0},wristRotation:{x:0,y:0,z:.3}}},{time:.4,rightArm:{shoulderRotation:{x:-1.2,y:.5,z:0},wristRotation:{x:0,y:0,z:-.3}}},{time:.6,rightArm:{shoulderRotation:{x:-1.2,y:.5,z:0},wristRotation:{x:0,y:0,z:.3}}},{time:.8,rightArm:{shoulderRotation:{x:-1.2,y:.5,z:0},wristRotation:{x:0,y:0,z:-.3}}},{time:1,rightArm:{shoulderRotation:{x:0,y:0,z:0},wristRotation:{x:0,y:0,z:0}}}]},think:{type:"think",name:"Think",duration:3,loop:!1,easing:"ease-in-out",keyframes:[{time:0,rightArm:{shoulderRotation:{x:0,y:0,z:0},elbowRotation:{x:0,y:0,z:0}},head:{rotation:{x:0,y:0,z:0}}},{time:.3,rightArm:{shoulderRotation:{x:-.3,y:.8,z:0},elbowRotation:{x:1.5,y:0,z:0}},head:{rotation:{x:.1,y:.1,z:.05}}},{time:.7,rightArm:{shoulderRotation:{x:-.3,y:.8,z:0},elbowRotation:{x:1.5,y:0,z:0}},head:{rotation:{x:.1,y:-.1,z:-.05}}},{time:1,rightArm:{shoulderRotation:{x:0,y:0,z:0},elbowRotation:{x:0,y:0,z:0}},head:{rotation:{x:0,y:0,z:0}}}]},nod:{type:"nod",name:"Nod",duration:1,loop:!1,easing:"ease-in-out",keyframes:[{time:0,head:{rotation:{x:0,y:0,z:0}}},{time:.25,head:{rotation:{x:.15,y:0,z:0}}},{time:.5,head:{rotation:{x:-.05,y:0,z:0}}},{time:.75,head:{rotation:{x:.1,y:0,z:0}}},{time:1,head:{rotation:{x:0,y:0,z:0}}}]},shrug:{type:"shrug",name:"Shrug",duration:1.5,loop:!1,easing:"ease-in-out",keyframes:[{time:0,leftArm:{shoulderRotation:{x:0,y:0,z:0}},rightArm:{shoulderRotation:{x:0,y:0,z:0}},head:{rotation:{x:0,y:0,z:0}}},{time:.3,leftArm:{shoulderRotation:{x:0,y:0,z:-.3}},rightArm:{shoulderRotation:{x:0,y:0,z:.3}},head:{rotation:{x:0,y:0,z:.05}}},{time:.6,leftArm:{shoulderRotation:{x:0,y:0,z:-.3}},rightArm:{shoulderRotation:{x:0,y:0,z:.3}},head:{rotation:{x:0,y:0,z:-.05}}},{time:1,leftArm:{shoulderRotation:{x:0,y:0,z:0}},rightArm:{shoulderRotation:{x:0,y:0,z:0}},head:{rotation:{x:0,y:0,z:0}}}]}};function Cy(i){return Ks[i]}function Cd(i,e){if(i.length===0)return{time:0};if(i.length===1)return i[0];let t=i[0],n=i[i.length-1];for(let r=0;r<i.length-1;r++)if(e>=i[r].time&&e<=i[r+1].time){t=i[r],n=i[r+1];break}const s=(e-t.time)/(n.time-t.time);return Ly(t,n,s)}function Ly(i,e,t){const n={time:i.time+(e.time-i.time)*t};return(i.leftArm||e.leftArm)&&(n.leftArm=Ld(i.leftArm,e.leftArm,t)),(i.rightArm||e.rightArm)&&(n.rightArm=Ld(i.rightArm,e.rightArm,t)),(i.head||e.head)&&(n.head=Py(i.head,e.head,t)),(i.body||e.body)&&(n.body=Iy(i.body,e.body,t)),n}function Ld(i,e,t){const n={x:0,y:0,z:0};return{shoulderRotation:Js((i==null?void 0:i.shoulderRotation)||n,(e==null?void 0:e.shoulderRotation)||n,t),elbowRotation:Js((i==null?void 0:i.elbowRotation)||n,(e==null?void 0:e.elbowRotation)||n,t),wristRotation:Js((i==null?void 0:i.wristRotation)||n,(e==null?void 0:e.wristRotation)||n,t)}}function Py(i,e,t){var n,s,r,o,a,l;return{rotation:Js((i==null?void 0:i.rotation)||{x:0,y:0,z:0},(e==null?void 0:e.rotation)||{x:0,y:0,z:0},t),eyeLookAt:{x:(((n=i==null?void 0:i.eyeLookAt)==null?void 0:n.x)||0)+((((s=e==null?void 0:e.eyeLookAt)==null?void 0:s.x)||0)-(((r=i==null?void 0:i.eyeLookAt)==null?void 0:r.x)||0))*t,y:(((o=i==null?void 0:i.eyeLookAt)==null?void 0:o.y)||0)+((((a=e==null?void 0:e.eyeLookAt)==null?void 0:a.y)||0)-(((l=i==null?void 0:i.eyeLookAt)==null?void 0:l.y)||0))*t}}}function Iy(i,e,t){var n,s,r,o,a,l;return{rotation:Js((i==null?void 0:i.rotation)||{x:0,y:0,z:0},(e==null?void 0:e.rotation)||{x:0,y:0,z:0},t),lean:{x:(((n=i==null?void 0:i.lean)==null?void 0:n.x)||0)+((((s=e==null?void 0:e.lean)==null?void 0:s.x)||0)-(((r=i==null?void 0:i.lean)==null?void 0:r.x)||0))*t,z:(((o=i==null?void 0:i.lean)==null?void 0:o.z)||0)+((((a=e==null?void 0:e.lean)==null?void 0:a.z)||0)-(((l=i==null?void 0:i.lean)==null?void 0:l.z)||0))*t}}}function Js(i,e,t){return{x:i.x+(e.x-i.x)*t,y:i.y+(e.y-i.y)*t,z:i.z+(e.z-i.z)*t}}const Sn=h.ref({currentGesture:"idle",intensity:0,progress:0}),Mn=h.ref([]),Zn=h.ref(!1);let ro=null,Pd=0;function Ha(){const i=h.computed(()=>Sn.value.currentGesture),e=h.computed(()=>Sn.value.intensity),t=h.computed(()=>Sn.value.progress),n=h.computed(()=>Zn.value);function s(d,f=1){const p=Ks[d];p&&(Mn.value.push({time:0,type:d,intensity:Math.min(1,Math.max(0,f)),duration:p.duration}),Zn.value||o())}function r(d){Mn.value=[...d],d.length>0&&!Zn.value&&o()}function o(){if(Mn.value.length===0){Zn.value=!1,Sn.value={currentGesture:"idle",intensity:0,progress:0};return}const d=Mn.value[0];Sn.value.currentGesture=d.type,Sn.value.intensity=d.intensity,Pd=performance.now(),Zn.value=!0,a()}function a(){if(Mn.value.length===0){Zn.value=!1;return}const d=Mn.value[0],f=Ks[d.type],p=(performance.now()-Pd)/1e3,_=Math.min(1,p/d.duration);if(Sn.value.progress=_,_>=1){Mn.value.shift(),Mn.value.length>0?o():f.loop?(Mn.value.push(d),o()):(Zn.value=!1,Sn.value={currentGesture:"idle",intensity:0,progress:0});return}ro=requestAnimationFrame(a)}function l(){const{currentGesture:d,progress:f,intensity:p}=Sn.value,_=Ks[d];if(!_)return{time:0};const v=Cd(_.keyframes,f);return c(v,p)}function c(d,f){const p={time:d.time};return d.leftArm&&(p.leftArm={shoulderRotation:d.leftArm.shoulderRotation?{x:d.leftArm.shoulderRotation.x*f,y:d.leftArm.shoulderRotation.y*f,z:d.leftArm.shoulderRotation.z*f}:void 0,elbowRotation:d.leftArm.elbowRotation?{x:d.leftArm.elbowRotation.x*f,y:d.leftArm.elbowRotation.y*f,z:d.leftArm.elbowRotation.z*f}:void 0,wristRotation:d.leftArm.wristRotation?{x:d.leftArm.wristRotation.x*f,y:d.leftArm.wristRotation.y*f,z:d.leftArm.wristRotation.z*f}:void 0}),d.rightArm&&(p.rightArm={shoulderRotation:d.rightArm.shoulderRotation?{x:d.rightArm.shoulderRotation.x*f,y:d.rightArm.shoulderRotation.y*f,z:d.rightArm.shoulderRotation.z*f}:void 0,elbowRotation:d.rightArm.elbowRotation?{x:d.rightArm.elbowRotation.x*f,y:d.rightArm.elbowRotation.y*f,z:d.rightArm.elbowRotation.z*f}:void 0,wristRotation:d.rightArm.wristRotation?{x:d.rightArm.wristRotation.x*f,y:d.rightArm.wristRotation.y*f,z:d.rightArm.wristRotation.z*f}:void 0}),d.head&&(p.head={rotation:d.head.rotation?{x:d.head.rotation.x*f,y:d.head.rotation.y*f,z:d.head.rotation.z*f}:void 0,eyeLookAt:d.head.eyeLookAt}),d.body&&(p.body={rotation:d.body.rotation?{x:d.body.rotation.x*f,y:d.body.rotation.y*f,z:d.body.rotation.z*f}:void 0,lean:d.body.lean?{x:d.body.lean.x*f,z:d.body.lean.z*f}:void 0}),p}function u(){ro&&(cancelAnimationFrame(ro),ro=null),Mn.value=[],Zn.value=!1,Sn.value={currentGesture:"idle",intensity:0,progress:0}}return{currentGesture:i,gestureIntensity:e,gestureProgress:t,isAnimating:n,triggerGesture:s,setGesturesFromApi:r,getCurrentKeyframe:l,stopGestures:u}}const Ny={class:"liya-ai-env-vuejs-full-body-avatar"},Dy=h.defineComponent({__name:"FullBodyAvatar",props:{modelUrl:{default:""},isSpeaking:{type:Boolean,default:!1},visemes:{default:()=>[]},currentTime:{default:0},animationConfig:{default:()=>({lipSyncSpeed:.02,lipSyncIntensity:.5,blinkSpeed:.25,blinkIntervalMin:1500,blinkIntervalMax:3500,eyeMoveSpeed:.12,eyeMoveIntervalMin:500,eyeMoveIntervalMax:1500,eyeMoveRange:.4,breathingSpeed:.4,breathingIntensity:.015,gestureSpeed:.5,gestureIntensity:.2})}},emits:["loaded","error","progress"],setup(i,{expose:e,emit:t}){const n=i,s=t,{getCurrentKeyframe:r}=Ha();let o=null,a=null,l=[],c={},u=null,d=null,f=null,p=null,_=null,v=null,m=null,g=null,E=null,y=0,w=!1,C=0,T=3e3,R={x:0,y:0},H={x:0,y:0},S=0,b=2e3,G=0;const J={0:[],1:["mouthClose","mouthPressLeft","mouthPressRight"],2:["mouthFunnel","mouthLowerDownLeft","mouthLowerDownRight"],3:["mouthLowerDownLeft","mouthLowerDownRight","tongueOut"],4:["mouthLowerDownLeft","mouthLowerDownRight"],5:["mouthLowerDownLeft","mouthLowerDownRight"],6:["mouthFunnel","mouthShrugUpper"],7:["mouthSmileLeft","mouthSmileRight","mouthLowerDownLeft","mouthLowerDownRight"],8:["mouthLowerDownLeft","mouthLowerDownRight"],9:["mouthLowerDownLeft","mouthLowerDownRight","mouthRollLower"],10:["mouthLowerDownLeft","mouthLowerDownRight","mouthUpperUpLeft","mouthUpperUpRight"],11:["mouthSmileLeft","mouthSmileRight","mouthLowerDownLeft","mouthLowerDownRight"],12:["mouthSmileLeft","mouthSmileRight","mouthStretchLeft","mouthStretchRight"],13:["mouthFunnel","mouthLowerDownLeft","mouthLowerDownRight"],14:["mouthPucker","mouthFunnel"]};function ae(se,ee){return new Promise((oe,be)=>{new Oa().load(se,ge=>{o=ge.scene,ee.add(o),l=[],m=null,g=null,E=null,o.traverse(Me=>{Me instanceof Ge&&(Me.morphTargetInfluences&&l.push(Me),Me.name==="Wolf3D_Outfit_Top"?m=Me:Me.name==="Wolf3D_Outfit_Bottom"?g=Me:Me.name==="Wolf3D_Outfit_Footwear"&&(E=Me))}),P(o),ge.animations.length>0&&(a=new Ua(o)),s("loaded"),oe()},ge=>{if(ge.total>0){const Me=ge.loaded/ge.total*100;s("progress",Me)}},ge=>{s("error",ge),be(ge)})})}function P(se){se.traverse(ee=>{const oe=ee.name.toLowerCase();oe.includes("spine")&&!u&&(u=ee),oe.includes("head")&&!d&&(d=ee),(oe.includes("leftshoulder")||oe.includes("left_shoulder"))&&(f=ee),(oe.includes("rightshoulder")||oe.includes("right_shoulder"))&&(p=ee),(oe.includes("leftelbow")||oe.includes("left_elbow")||oe.includes("leftforearm"))&&(_=ee),(oe.includes("rightelbow")||oe.includes("right_elbow")||oe.includes("rightforearm"))&&(v=ee)})}function I(se){var Me,F;if(!n.isSpeaking||n.visemes.length===0){N();return}const ee=n.currentTime;let oe=0;for(const Ke of n.visemes)if(ee>=Ke.time&&ee<Ke.time+Ke.duration){oe=Ke.viseme;break}const be=J[oe]||[],Re=((Me=n.animationConfig)==null?void 0:Me.lipSyncIntensity)||.5,ge=((F=n.animationConfig)==null?void 0:F.lipSyncSpeed)||.02;for(const Ke of l)if(!(!Ke.morphTargetDictionary||!Ke.morphTargetInfluences))for(const[Ce,Ie]of Object.entries(Ke.morphTargetDictionary)){const Ae=be.includes(Ce)?Re:0,it=c[Ce]||0,Ue=it+(Ae-it)*ge;Ke.morphTargetInfluences[Ie]=Ue,c[Ce]=Ue}}function N(se){var oe;const ee=((oe=n.animationConfig)==null?void 0:oe.lipSyncSpeed)||.02;for(const be of l)if(!(!be.morphTargetDictionary||!be.morphTargetInfluences)){for(const[Re,ge]of Object.entries(be.morphTargetDictionary))if(Re.startsWith("mouth")){const F=(c[Re]||0)*(1-ee);be.morphTargetInfluences[ge]=F,c[Re]=F}}}function te(se,ee){const oe=n.animationConfig||{},be=oe.blinkSpeed||.25,Re=oe.blinkIntervalMin||1500,ge=oe.blinkIntervalMax||3500;if(!w&&ee-y>T&&(w=!0,C=0,y=ee,T=Re+Math.random()*(ge-Re)),w){C+=be;let Me=0;C<.5?Me=C*2:Me=1-(C-.5)*2;for(const F of l){if(!F.morphTargetDictionary||!F.morphTargetInfluences)continue;const Ke=F.morphTargetDictionary.eyeBlinkLeft,Ce=F.morphTargetDictionary.eyeBlinkRight;Ke!==void 0&&(F.morphTargetInfluences[Ke]=Me),Ce!==void 0&&(F.morphTargetInfluences[Ce]=Me)}C>=1&&(w=!1)}}function V(se,ee){const oe=n.animationConfig||{},be=oe.eyeMoveSpeed||.12,Re=oe.eyeMoveIntervalMin||500,ge=oe.eyeMoveIntervalMax||1500,Me=oe.eyeMoveRange||.4;ee-S>b&&(R={x:(Math.random()-.5)*Me,y:(Math.random()-.5)*Me*.5},S=ee,b=Re+Math.random()*(ge-Re)),H.x+=(R.x-H.x)*be,H.y+=(R.y-H.y)*be;for(const F of l){if(!F.morphTargetDictionary||!F.morphTargetInfluences)continue;const Ke=F.morphTargetDictionary.eyeLookOutLeft,Ce=F.morphTargetDictionary.eyeLookOutRight,Ie=F.morphTargetDictionary.eyeLookUpLeft,Ae=F.morphTargetDictionary.eyeLookDownLeft;H.x>0&&Ce!==void 0&&(F.morphTargetInfluences[Ce]=H.x),H.x<0&&Ke!==void 0&&(F.morphTargetInfluences[Ke]=-H.x),H.y>0&&Ie!==void 0&&(F.morphTargetInfluences[Ie]=H.y),H.y<0&&Ae!==void 0&&(F.morphTargetInfluences[Ae]=-H.y)}}function q(se,ee){const oe=n.animationConfig||{},be=oe.breathingSpeed||.4,Re=oe.breathingIntensity||.015;G+=se*be;const ge=Math.sin(G)*Re;u&&(u.position.y+=ge*.01)}function $(se){var oe,be,Re,ge;const ee=r();ee.leftArm&&f&&ee.leftArm.shoulderRotation&&(f.rotation.x=ee.leftArm.shoulderRotation.x,f.rotation.y=ee.leftArm.shoulderRotation.y,f.rotation.z=ee.leftArm.shoulderRotation.z),ee.rightArm&&p&&ee.rightArm.shoulderRotation&&(p.rotation.x=ee.rightArm.shoulderRotation.x,p.rotation.y=ee.rightArm.shoulderRotation.y,p.rotation.z=ee.rightArm.shoulderRotation.z),(oe=ee.leftArm)!=null&&oe.elbowRotation&&_&&(_.rotation.x=ee.leftArm.elbowRotation.x),(be=ee.rightArm)!=null&&be.elbowRotation&&v&&(v.rotation.x=ee.rightArm.elbowRotation.x),(Re=ee.head)!=null&&Re.rotation&&d&&(d.rotation.x=ee.head.rotation.x,d.rotation.y=ee.head.rotation.y,d.rotation.z=ee.head.rotation.z),(ge=ee.body)!=null&&ge.lean&&u&&(u.rotation.x=ee.body.lean.x,u.rotation.z=ee.body.lean.z)}function Q(se,ee){o&&(a&&a.update(se),I(),te(se,ee),V(se,ee),q(se),$())}function de(){return o}function z(){o&&o.traverse(se=>{var ee,oe;se instanceof Ge&&((ee=se.geometry)==null||ee.dispose(),Array.isArray(se.material)?se.material.forEach(be=>be.dispose()):(oe=se.material)==null||oe.dispose())}),a=null,l=[]}function ne(se){m!=null&&m.material&&m.material.color.set(se.top),g!=null&&g.material&&g.material.color.set(se.bottom),E!=null&&E.material&&E.material.color.set(se.footwear)}return e({loadModel:ae,update:Q,getModel:de,dispose:z,applyOutfitColors:ne}),(se,ee)=>(h.openBlock(),h.createElementBlock("div",Ny,[h.renderSlot(se.$slots,"default",{},void 0,!0)]))}}),oo=(i,e)=>{const t=i.__vccOpts||i;for(const[n,s]of e)t[n]=s;return t},Uy=oo(Dy,[["__scopeId","data-v-148895f1"]]),Oy={key:0,class:"liya-ai-env-vuejs-board liya-ai-env-vuejs-presentation-board"},Fy=["src","alt"],By={class:"liya-ai-env-vuejs-presentation-board__info"},Vy={key:1,class:"liya-ai-env-vuejs-loading"},ky={class:"liya-ai-env-vuejs-loading__progress"},Ga=oo(h.defineComponent({__name:"ClassroomScene",props:{classroomModelUrl:{default:""},avatarModelUrl:{default:""},avatarPosition:{default:()=>({x:0,y:0,z:0})},cameraConfig:{default:()=>({position:{x:0,y:1.4,z:4},lookAt:{x:0,y:1.2,z:0},fov:45})},isSpeaking:{type:Boolean,default:!1},visemes:{default:()=>[]},gestures:{default:()=>[]},currentTime:{default:0},animationConfig:{default:()=>({})},presentationResult:{default:null}},emits:["loaded","error","progress"],setup(i,{expose:e,emit:t}){const n=i,s=h.computed(()=>{var re;return!!((re=n.presentationResult)!=null&&re.page_image_url)}),r=h.computed(()=>{var D;return(((D=n.presentationResult)==null?void 0:D.page_image_url)||"").replace(/^http:\/\//i,"https://")}),o=h.computed(()=>n.presentationResult?`${n.presentationResult.presentation_title} — ${n.presentationResult.page_number}/${n.presentationResult.total_pages}`:""),a=t,{getCurrentKeyframe:l,setGesturesFromApi:c}=Ha(),u=h.ref(null),d=h.ref(!0),f=h.ref(0);let p=null,_=null,v=null,m=null,g=null,E=null,y=null,w=null,C=[],T={},R=null,H=null,S=null,b=null,G=null,J=null,ae=null,P=null,I=null;const N=typeof navigator<"u"&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent);let te=!1,V=0,q=!1,$=0,Q=3e3,de={x:0,y:0},z={x:0,y:0},ne=0,se=2e3,ee=0;const oe={0:[],1:["mouthClose","mouthPressLeft","mouthPressRight"],2:["mouthFunnel","mouthLowerDownLeft","mouthLowerDownRight"],3:["mouthLowerDownLeft","mouthLowerDownRight"],4:["mouthLowerDownLeft","mouthLowerDownRight"],5:["mouthLowerDownLeft","mouthLowerDownRight"],6:["mouthFunnel","mouthShrugUpper"],7:["mouthSmileLeft","mouthSmileRight"],8:["mouthLowerDownLeft","mouthLowerDownRight"],9:["mouthLowerDownLeft","mouthLowerDownRight"],10:["mouthLowerDownLeft","mouthLowerDownRight","mouthUpperUpLeft","mouthUpperUpRight"],11:["mouthSmileLeft","mouthSmileRight"],12:["mouthSmileLeft","mouthSmileRight","mouthStretchLeft","mouthStretchRight"],13:["mouthFunnel","mouthLowerDownLeft","mouthLowerDownRight"],14:["mouthPucker","mouthFunnel"]};h.watch(()=>n.gestures,re=>{re&&re.length>0&&c(re)},{deep:!0}),h.watch(()=>n.avatarModelUrl,re=>{re&&p&&!y&&Me(re)});function be(){if(!u.value)return;p=new cv,p.background=new Ve(1710638);const{position:re,lookAt:D,fov:k}=n.cameraConfig,ie=u.value.clientWidth/u.value.clientHeight;_=new Vt(k||45,ie,.1,1e3),_.position.set(re.x,re.y,re.z),_.lookAt(D.x,D.y,D.z),v=new qu({antialias:!N,alpha:!0,powerPreference:N?"low-power":"high-performance",preserveDrawingBuffer:N}),v.setSize(u.value.clientWidth,u.value.clientHeight);const Ee=N?1.5:2;v.setPixelRatio(Math.min(window.devicePixelRatio,Ee)),v.outputColorSpace=ft,v.toneMapping=nc,v.toneMappingExposure=1.2,v.shadowMap.enabled=!N,v.shadowMap.type=Yl,u.value.appendChild(v.domElement),Re(),m=new Fv,ge(),window.addEventListener("resize",ue),te=!0,Ie()}function Re(){if(!p)return;const re=new Uv(8951976,.7);p.add(re);const D=new Ia(14740212,1.1);D.position.set(2,6,3),D.castShadow=!0,D.shadow.mapSize.width=2048,D.shadow.mapSize.height=2048,D.shadow.camera.near=.5,D.shadow.camera.far=50,D.shadow.camera.left=-10,D.shadow.camera.right=10,D.shadow.camera.top=8,D.shadow.camera.bottom=-4,D.shadow.bias=-.001,p.add(D);const k=new Ia(9478320,.5);k.position.set(-5,3,2),p.add(k);const ie=new yd(15791868,1.1,12,Math.PI/5,.6,1);ie.position.set(0,5.4,-1),ie.target.position.set(0,2.5,-3.9),p.add(ie),p.add(ie.target);const Ee=new qs(54442,.35,10,2);Ee.position.set(-6,1.5,-3),p.add(Ee);const Y=new qs(54442,.35,10,2);Y.position.set(6,1.5,-3),p.add(Y);const ye=new qs(47252,.25,15,2);ye.position.set(0,5.5,-2),p.add(ye);const xe=new qs(8427696,.3,10,2);xe.position.set(0,.2,-1),p.add(xe)}async function ge(){const re=new Oa;let D=0,k=0;if(n.classroomModelUrl&&k++,n.avatarModelUrl&&k++,k===0){F(),d.value=!1,a("loaded");return}try{n.classroomModelUrl?await new Promise((ie,Ee)=>{re.load(n.classroomModelUrl,Y=>{E=Y.scene,E.traverse(ye=>{ye instanceof Ge&&(ye.castShadow=!0,ye.receiveShadow=!0)}),p==null||p.add(E),D+=50,f.value=D,a("progress",D),ie()},Y=>{if(Y.total>0){const ye=Y.loaded/Y.total*50;f.value=ye,a("progress",ye)}},Y=>Ee(Y))}):(F(),D+=50),n.avatarModelUrl&&await new Promise((ie,Ee)=>{re.load(n.avatarModelUrl,Y=>{y=Y.scene;const ye=n.avatarPosition;y.position.set(ye.x,ye.y,ye.z),y.traverse(xe=>{xe instanceof Ge&&(xe.castShadow=!0,xe.receiveShadow=!0,xe.morphTargetInfluences&&C.push(xe))}),Ke(y),Y.animations.length>0&&(w=new Ua(y)),p==null||p.add(y),D+=50,f.value=D,a("progress",D),ie()},Y=>{if(Y.total>0){const ye=50+Y.loaded/Y.total*50;f.value=ye,a("progress",ye)}},Y=>Ee(Y))}),d.value=!1,a("loaded")}catch(ie){a("error",ie),d.value=!1}}async function Me(re){if(!p||y)return;const D=new Oa;try{await new Promise((k,ie)=>{D.load(re,Ee=>{y=Ee.scene,y.position.set(-1.8,0,.8);const Y=n.cameraConfig.position,ye=y.position;y.rotation.y=Math.atan2(Y.x-ye.x,Y.z-ye.z),y.scale.set(1.1,1.1,1.1),ae=null,P=null,I=null,y.traverse(xe=>{xe instanceof Ge&&(xe.castShadow=!0,xe.receiveShadow=!0,xe.morphTargetInfluences&&C.push(xe),xe.name==="Wolf3D_Outfit_Top"?ae=xe:xe.name==="Wolf3D_Outfit_Bottom"?P=xe:xe.name==="Wolf3D_Outfit_Footwear"&&(I=xe))}),Ke(y),Ee.animations.length>0&&(w=new Ua(y)),p.add(y),a("loaded"),k()},void 0,Ee=>{ie(Ee)})})}catch{}}function F(){if(!p)return;const re=new zt({color:14212324,roughness:.45,metalness:.25}),D=new zt({color:13160668,roughness:.4,metalness:.3}),k=new zt({color:12635352,roughness:.04,metalness:.5}),ie=new zt({color:13687008,roughness:.5,metalness:.2}),Ee=new zt({color:54442,emissive:54442,emissiveIntensity:.6,roughness:.1,metalness:.3}),Y=new zt({color:47252,emissive:47252,emissiveIntensity:.3,roughness:.15,metalness:.25}),ye=new zt({color:7899288,roughness:.08,metalness:.5}),xe=new zt({color:13160668,roughness:.08,metalness:.45}),Le=new zt({color:13687012,roughness:.25,metalness:.3}),we=new $n(16,12),Se=new Ge(we,k);Se.rotation.x=-Math.PI/2,Se.position.y=0,Se.receiveShadow=!0,p.add(Se);const Be=new Ge(new mt(12,.003,.02),Y);Be.position.set(0,.002,-3.2),p.add(Be);const tt=new $n(16,6),st=new Ge(tt,re);st.position.set(0,3,-4),st.receiveShadow=!0,p.add(st);const ze=new Ge(new mt(16,1.5,.03),D);ze.position.set(0,.75,-3.97),p.add(ze);const he=new $n(10,6),L=new Ge(he,re.clone());L.position.set(-8,3,1),L.rotation.y=Math.PI/2,L.receiveShadow=!0,p.add(L);const _e=new Ge(new mt(14,.02,.015),Ee);_e.position.set(0,5.1,-3.96),p.add(_e);const ve=new Ge(new mt(14,.015,.015),Ee);ve.position.set(0,1.52,-3.96),p.add(ve);const De=new Ge(new mt(.015,3.6,.015),Y);De.position.set(-7,3.3,-3.96),p.add(De);const Pe=De.clone();Pe.position.set(7,3.3,-3.96),p.add(Pe);const nt=new Ge(new mt(6.2,3.4,.06),ye);nt.position.set(0,2.85,-3.92),nt.castShadow=!0,p.add(nt);const lt=new $n(5.8,3.1),vt=new zt({color:16119280,emissive:15790316,emissiveIntensity:.15,roughness:.05,metalness:.02}),St=new Ge(lt,vt);St.position.set(0,2.85,-3.88),p.add(St);const rt=new mt(6.25,.04,.08),Mt=new mt(.04,3.45,.08),qt=[{geo:rt,pos:[0,4.575,-3.9]},{geo:rt,pos:[0,1.125,-3.9]},{geo:Mt,pos:[-3.125,2.85,-3.9]},{geo:Mt,pos:[3.125,2.85,-3.9]}];for(const B of qt){const pe=new Ge(B.geo,xe);pe.position.set(B.pos[0],B.pos[1],B.pos[2]),p.add(pe)}const Ui=new mt(6,.01,.01),ti=new mt(.01,3.2,.01),ni=[{geo:Ui,pos:[0,4.42,-3.87]},{geo:Ui,pos:[0,1.28,-3.87]},{geo:ti,pos:[-2.98,2.85,-3.87]},{geo:ti,pos:[2.98,2.85,-3.87]}];for(const B of ni){const pe=new Ge(B.geo,Y);pe.position.set(B.pos[0],B.pos[1],B.pos[2]),p.add(pe)}for(let B=0;B<3;B++){const pe=new Ge(new mt(.6,2.5,.02),Le);pe.position.set(-5.5+B*.75,3,-3.97),p.add(pe)}for(let B=0;B<3;B++){const pe=new Ge(new mt(.6,2.5,.02),Le);pe.position.set(4.75+B*.75,3,-3.97),p.add(pe)}const ii=new zt({color:12109008,roughness:.08,metalness:.45}),mn=new Ge(new mt(1.8,.04,.7),ii);mn.position.set(3.5,.75,-2.5),mn.castShadow=!0,mn.receiveShadow=!0,p.add(mn);const si=new Ge(new mt(1.8,.008,.008),Y);si.position.set(3.5,.73,-2.15),p.add(si);const fe=new Ge(new no(.04,.06,.73,12),xe);fe.position.set(3.5,.365,-2.5),fe.castShadow=!0,p.add(fe);const Z=new Ge(new no(.25,.25,.02,16),xe);Z.position.set(3.5,.01,-2.5),p.add(Z);const Te=new Ge(new mt(5,.05,3),D);Te.position.set(-.5,.025,-2.5),Te.receiveShadow=!0,p.add(Te);const ht=new Ge(new mt(5,.01,.01),Ee);ht.position.set(-.5,.045,-1),p.add(ht);const M=new $n(16,12),O=new Ge(M,ie);O.rotation.x=Math.PI/2,O.position.set(0,5.6,0),p.add(O);const W=new Ge(new mt(14,.01,.01),Y);W.position.set(0,5.55,-3.96),p.add(W);const K=new zt({color:13689072,emissive:12638440,emissiveIntensity:.3,roughness:.1});for(let B=-1;B<=1;B+=2){const pe=new Ge(new mt(.08,.01,4),K);pe.position.set(B*5,5.58,-1),p.add(pe)}p.background=new Ve(8951976)}function Ke(re){const D=[];re.traverse(k=>{const ie=k.name.toLowerCase();D.push(k.name),ie.includes("spine")&&!R&&(R=k),ie.includes("head")&&!H&&(H=k),ie.includes("leftshoulder")&&!S&&(S=k),(ie.includes("leftarm")||ie.includes("left_arm")||ie.includes("leftupperarm"))&&!G&&(G=k),ie.includes("rightshoulder")&&!b&&(b=k),(ie.includes("rightarm")||ie.includes("right_arm")||ie.includes("rightupperarm"))&&!J&&(J=k)})}function Ce(){}function Ie(){if(!te||(g=requestAnimationFrame(Ie),!m||!v||!p||!_))return;const re=m.getDelta(),D=m.getElapsedTime()*1e3;w&&w.update(re),y&&(Ae(),Ue(re,D),A(re,D),x(re),j()),v.render(p,_)}function Ae(re){var ye,xe;if(!n.isSpeaking||n.visemes.length===0){it();return}const D=n.currentTime;let k=0;for(const Le of n.visemes)if(D>=Le.time&&D<Le.time+Le.duration){k=Le.viseme;break}const ie=oe[k]||[],Ee=((ye=n.animationConfig)==null?void 0:ye.lipSyncIntensity)||.5,Y=((xe=n.animationConfig)==null?void 0:xe.lipSyncSpeed)||.02;for(const Le of C)if(!(!Le.morphTargetDictionary||!Le.morphTargetInfluences))for(const[we,Se]of Object.entries(Le.morphTargetDictionary)){const Be=ie.includes(we)?Ee:0,tt=T[we]||0,st=tt+(Be-tt)*Y;Le.morphTargetInfluences[Se]=st,T[we]=st}}function it(re){for(const k of C)if(!(!k.morphTargetDictionary||!k.morphTargetInfluences)){for(const[ie,Ee]of Object.entries(k.morphTargetDictionary))if(ie.startsWith("mouth")){const ye=(T[ie]||0)*(1-.02);k.morphTargetInfluences[Ee]=ye,T[ie]=ye}}}function Ue(re,D){if(!q&&D-V>Q&&(q=!0,$=0,V=D,Q=1500+Math.random()*2e3),q){$+=.25;let Y=0;$<.5?Y=$*2:Y=1-($-.5)*2;for(const ye of C){if(!ye.morphTargetDictionary||!ye.morphTargetInfluences)continue;const xe=ye.morphTargetDictionary.eyeBlinkLeft,Le=ye.morphTargetDictionary.eyeBlinkRight;xe!==void 0&&(ye.morphTargetInfluences[xe]=Y),Le!==void 0&&(ye.morphTargetInfluences[Le]=Y)}$>=1&&(q=!1)}}function A(re,D){D-ne>se&&(de={x:(Math.random()-.5)*.4,y:(Math.random()-.5)*.4*.5},ne=D,se=500+Math.random()*1e3),z.x+=(de.x-z.x)*.12,z.y+=(de.y-z.y)*.12;for(const ye of C){if(!ye.morphTargetDictionary||!ye.morphTargetInfluences)continue;const xe=ye.morphTargetDictionary.eyeLookOutLeft,Le=ye.morphTargetDictionary.eyeLookOutRight,we=ye.morphTargetDictionary.eyeLookUpLeft,Se=ye.morphTargetDictionary.eyeLookDownLeft;z.x>0&&Le!==void 0&&(ye.morphTargetInfluences[Le]=z.x),z.x<0&&xe!==void 0&&(ye.morphTargetInfluences[xe]=-z.x),z.y>0&&we!==void 0&&(ye.morphTargetInfluences[we]=z.y),z.y<0&&Se!==void 0&&(ye.morphTargetInfluences[Se]=-z.y)}}function x(re,D){ee+=re*.4;const Ee=Math.sin(ee)*.015;R&&(R.position.y+=Ee*.01)}function j(re,D){var ie,Ee;const k=l();(ie=k.head)!=null&&ie.rotation&&H&&H.rotation.set(k.head.rotation.x,k.head.rotation.y,k.head.rotation.z),(Ee=k.body)!=null&&Ee.lean&&R&&(R.rotation.x=k.body.lean.x,R.rotation.z=k.body.lean.z)}function ue(){if(!u.value||!_||!v)return;const re=u.value.clientWidth,D=u.value.clientHeight;_.aspect=re/D,_.updateProjectionMatrix(),v.setSize(re,D)}function le(){te=!1,g&&(cancelAnimationFrame(g),g=null),window.removeEventListener("resize",ue);const re=D=>{D.traverse(k=>{var ie,Ee;k instanceof Ge&&((ie=k.geometry)==null||ie.dispose(),Array.isArray(k.material)?k.material.forEach(Y=>Y.dispose()):(Ee=k.material)==null||Ee.dispose())})};E&&re(E),y&&re(y),v&&(v.dispose(),v.forceContextLoss(),u.value&&v.domElement.parentNode===u.value&&u.value.removeChild(v.domElement)),p=null,_=null,v=null,E=null,y=null,w=null,C=[],T={},R=null,H=null,S=null,b=null,G=null,J=null}h.onMounted(()=>{be()}),h.onUnmounted(()=>{le()});function ce(re){ae!=null&&ae.material&&ae.material.color.set(re.top),P!=null&&P.material&&P.material.color.set(re.bottom),I!=null&&I.material&&I.material.color.set(re.footwear)}return e({applyOutfitColors:ce}),(re,D)=>(h.openBlock(),h.createElementBlock("div",{ref_key:"liyaAiEnvVuejsContainerRef",ref:u,class:"liya-ai-env-vuejs-classroom-scene"},[s.value?(h.openBlock(),h.createElementBlock("div",Oy,[h.createElementVNode("img",{src:r.value,alt:o.value,class:"liya-ai-env-vuejs-presentation-board__image"},null,8,Fy),h.createElementVNode("div",By,h.toDisplayString(o.value),1),D[0]||(D[0]=h.createElementVNode("div",{class:"liya-ai-env-vuejs-board__frame"},null,-1))])):h.createCommentVNode("",!0),d.value?(h.openBlock(),h.createElementBlock("div",Vy,[D[1]||(D[1]=h.createElementVNode("div",{class:"liya-ai-env-vuejs-loading__spinner"},null,-1)),D[2]||(D[2]=h.createElementVNode("p",{class:"liya-ai-env-vuejs-loading__text"},"Ortam yükleniyor...",-1)),h.createElementVNode("div",ky,[h.createElementVNode("div",{class:"liya-ai-env-vuejs-loading__progress-bar",style:h.normalizeStyle({width:`${f.value}%`})},null,4)])])):h.createCommentVNode("",!0)],512))}}),[["__scopeId","data-v-6375b589"]]),et=h.ref({isOpen:!1,isLoading:!0,isReady:!1,isSpeaking:!1,isListening:!1,isProcessing:!1,currentMessage:"",error:null,loadProgress:0}),Xt=h.ref([]),Id=h.ref(null),Ms=h.ref([]),ao=h.ref([]),Pi=h.ref(0),Wa=h.ref(null),ja=h.ref(null);let Kt=null,Nd=0,Ii=null,Dd=0;const zy=3;async function Hy(){const i=window.__liyaAiEnvAudioContext;if(i&&i.state!=="closed"){if(i.state==="running")return i;if(i.state==="suspended")try{const t=i.resume(),n=new Promise((s,r)=>setTimeout(()=>r(new Error("AudioContext resume timeout")),2e3));await Promise.race([t,n])}catch{}return i}if(Dd>=zy)return console.warn("[LiyaAiEnv] Max AudioContext creation attempts reached"),null;Dd++;const e=window.AudioContext||window.webkitAudioContext;if(window.__liyaAiEnvAudioContext=new e,window.__liyaAiEnvAudioContext.state==="suspended")try{const t=window.__liyaAiEnvAudioContext.resume(),n=new Promise((s,r)=>setTimeout(()=>r(new Error("AudioContext resume timeout")),2e3));await Promise.race([t,n])}catch{}return window.__liyaAiEnvAudioContext}function Xa(){const i=h.computed(()=>et.value.isOpen),e=h.computed(()=>et.value.isLoading),t=h.computed(()=>et.value.isReady),n=h.computed(()=>et.value.isSpeaking),s=h.computed(()=>et.value.isListening),r=h.computed(()=>et.value.isProcessing),o=h.computed(()=>et.value.currentMessage),a=h.computed(()=>et.value.error),l=h.computed(()=>et.value.loadProgress),c=h.computed(()=>Xt.value),u=h.computed(()=>Ms.value),d=h.computed(()=>ao.value),f=h.computed(()=>Pi.value),p=h.computed(()=>Wa.value);function _(){et.value.isOpen=!0}function v(){S(),et.value.isOpen=!1,et.value.isSpeaking=!1,et.value.isListening=!1}function m(I){et.value.isLoading=I}function g(I){et.value.isReady=I,I&&(et.value.isLoading=!1)}function E(I){et.value.loadProgress=Math.min(100,Math.max(0,I))}function y(I){et.value.error=I}function w(I){try{const N=JSON.parse(I);if(typeof(N==null?void 0:N.response)=="string")return N.response;if(typeof(N==null?void 0:N.answer)=="string")return N.answer}catch{const N=I.match(/"(?:response|answer)"\s*:\s*"((?:[^"\\]|\\.)*)"/);if(N)try{return JSON.parse(`"${N[1]}"`)}catch{return N[1]}}return I}async function C(I){var te;if(!I.trim()||et.value.isProcessing)return;et.value.isProcessing=!0,et.value.currentMessage=I,et.value.error=null;const N={id:`temp-user-${Date.now()}`,content:I.trim(),role:"user",created_at:new Date().toISOString()};Xt.value.push(N);try{const V=await Bl(I,Id.value||void 0);if(V){if(V.session_id&&(Id.value=V.session_id),V.user_message){const $=Xt.value.findIndex(Q=>Q.id===N.id);$!==-1&&(Xt.value[$]=V.user_message)}if(V.assistant_message){if(V.suggestions&&V.suggestions.length>0)try{const $=JSON.parse(V.assistant_message.content);$.suggestions||($.suggestions=V.suggestions),V.assistant_message.content=JSON.stringify($)}catch{V.assistant_message.content=JSON.stringify({response:V.assistant_message.content,suggestions:V.suggestions})}Xt.value.push(V.assistant_message)}else if(V.response){let $=V.response;V.suggestions&&V.suggestions.length>0&&($=JSON.stringify({response:V.response,suggestions:V.suggestions})),Xt.value.push({id:`msg-${Date.now()}`,content:$,role:"assistant",created_at:new Date().toISOString(),media:V.media})}if(V.presentation_result&&V.presentation_result.success){const $={...V.presentation_result};if($.page_image_url)try{const Q=ci(),de=Q.apiUrl.replace(/\/$/,""),z=$.page_image_url.startsWith("http")?$.page_image_url:`${de}${$.page_image_url}`,ne=z.includes("?")?"&":"?";$.page_image_url=`${z}${ne}api_key=${Q.apiKey}`}catch{}Wa.value=$}const q=V.response||w(((te=V.assistant_message)==null?void 0:te.content)||"");q&&await T(q)}}catch(V){V instanceof Fl&&V.code&&(ja.value=V.code),et.value.error="Mesaj gönderilemedi",Xt.value=Xt.value.filter(q=>q.id!==N.id)}finally{et.value.isProcessing=!1,et.value.currentMessage=""}}async function T(I){try{const N=await Vl(I,{include_audio:!0,include_gestures:!0});N&&(Ms.value=N.visemes||[],ao.value=N.gestures||[],N.audio_base64?await R(N.audio_base64):H(I))}catch{H(I)}}async function R(I){try{const N=atob(I),te=N.length,V=new ArrayBuffer(te),q=new Uint8Array(V);for(let ne=0;ne<te;ne++)q[ne]=N.charCodeAt(ne);const $=await Hy();if(!$){H(I.substring(0,100));return}const Q=await new Promise((ne,se)=>{$.decodeAudioData(V,ee=>ne(ee),ee=>se(ee||new Error("Audio decode failed")))});S(),Kt=$.createBufferSource(),Kt.buffer=Q,Kt.connect($.destination),et.value.isSpeaking=!0,Nd=$.currentTime;const de=()=>{et.value.isSpeaking&&$&&(Pi.value=$.currentTime-Nd,requestAnimationFrame(de))};de();const z=Q.duration*1e3;Ii=setTimeout(()=>{et.value.isSpeaking&&(et.value.isSpeaking=!1,Pi.value=0,Ms.value=[],ao.value=[])},z+500),Kt.onended=()=>{Ii&&(clearTimeout(Ii),Ii=null),et.value.isSpeaking=!1,Pi.value=0,Ms.value=[],ao.value=[]},Kt.start()}catch{et.value.isSpeaking=!1}}function H(I){const N=I.length*.05,te=[];let V=0;for(let Q=0;Q<I.length;Q++){const de=I[Q].toLowerCase();let z=0;"aeiouäöü".includes(de)?z=10+Math.floor(Math.random()*5):"bcdfghjklmnpqrstvwxyz".includes(de)&&(z=1+Math.floor(Math.random()*9)),te.push({time:V,viseme:z,duration:.05}),V+=.05}Ms.value=te,et.value.isSpeaking=!0,Pi.value=0;const q=Date.now(),$=()=>{const Q=(Date.now()-q)/1e3;Pi.value=Q,Q<N?requestAnimationFrame($):(et.value.isSpeaking=!1,Ms.value=[])};$()}function S(){if(Ii&&(clearTimeout(Ii),Ii=null),Kt){try{Kt.stop(),Kt.disconnect()}catch{}Kt=null}et.value.isSpeaking=!1,Pi.value=0}function b(I){et.value.isListening=I}function G(I){Xt.value.length===0&&Xt.value.push({id:`welcome-${Date.now()}`,content:I,role:"assistant",created_at:new Date().toISOString()})}function J(I){Xt.value.length>0&&Xt.value[0].id.startsWith("welcome-")&&(Xt.value[0]={...Xt.value[0],content:I})}function ae(I){Wa.value=I}function P(){if(S(),Kt){try{Kt.stop(),Kt.disconnect()}catch{}Kt=null}}return{state:h.readonly(et),isOpen:i,isLoading:e,isReady:t,isSpeaking:n,isListening:s,isProcessing:r,currentMessage:o,error:a,loadProgress:l,messages:c,visemes:u,gestures:d,audioTime:f,currentPresentation:p,lastApiErrorCode:h.computed(()=>ja.value),clearApiError:()=>{ja.value=null},open:_,close:v,setLoading:m,setReady:g,setLoadProgress:E,setError:y,handleMessage:C,speakWithAvatar:T,stopAudio:S,setListening:b,addWelcomeMessage:G,updateWelcomeMessage:J,setPresentation:ae,cleanup:P}}const An=h.ref(!1),lo=h.ref(""),co=h.ref(!1),Ud=h.ref(!1),Zs=h.ref("prompt");let Pt=null;function Gy(){if(typeof window>"u"||typeof navigator>"u")return!1;const i=navigator.userAgent||navigator.vendor||"",e=/iPad|iPhone|iPod/.test(i)&&!window.MSStream,t=navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;return e||t}function Wy(){if(typeof window>"u"||typeof navigator>"u")return!1;const i=navigator.userAgent||"";return i.indexOf("OPR/")!==-1||i.indexOf("Opera")!==-1}function qa(){const i=window.SpeechRecognition||window.webkitSpeechRecognition;Ud.value=Gy();const e=Wy();co.value=!!i&&!e;async function t(){if(typeof navigator>"u"||!navigator.permissions)return"prompt";try{const c=await navigator.permissions.query({name:"microphone"});return Zs.value=c.state,c.onchange=()=>{Zs.value=c.state},c.state}catch{return"prompt"}}async function n(){if(typeof navigator>"u"||!navigator.mediaDevices)return!1;try{return(await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(u=>u.stop()),Zs.value="granted",!0}catch{return Zs.value="denied",!1}}function s(){!i||Pt||(Pt=new i,Pt.continuous=!1,Pt.interimResults=!1,Pt.lang="tr-TR",Pt.onresult=c=>{const u=c.results[c.results.length-1];u.isFinal&&(lo.value=u[0].transcript)},Pt.onerror=c=>{An.value=!1,(c.error==="not-allowed"||c.error==="service-not-allowed"||c.error==="language-not-supported")&&(co.value=!1)},Pt.onend=()=>{An.value=!1})}function r(){if(i&&(s(),Pt&&!An.value)){lo.value="",An.value=!0;try{Pt.start(),setTimeout(()=>{An.value&&lo.value},8e3)}catch{An.value=!1,co.value=!1}}}function o(){Pt&&An.value&&(Pt.stop(),setTimeout(()=>{An.value&&(An.value=!1)},3e3))}function a(c){Pt&&(Pt.lang=c)}function l(){Pt&&(Pt.abort(),Pt=null)}return h.onUnmounted(()=>{l()}),{isRecording:h.computed(()=>An.value),transcript:h.computed(()=>lo.value),isSupported:h.computed(()=>co.value),isIOS:h.computed(()=>Ud.value),micPermission:h.computed(()=>Zs.value),startRecording:r,stopRecording:o,setLanguage:a,checkMicPermission:t,requestMicPermission:n,cleanup:l}}function Od(){const i=typeof Proxy<"u";let e=!1;if(typeof document<"u")try{const s=document.createElement("canvas");e=!!(s.getContext("webgl2")||s.getContext("webgl")||s.getContext("experimental-webgl"))}catch{e=!1}const t=typeof window<"u"&&!!(window.SpeechRecognition||window.webkitSpeechRecognition),n=typeof window<"u"&&!!(window.AudioContext||window.webkitAudioContext);return i?e?n?{supported:!0,webgl:e,speechApi:t,audioContext:n}:{supported:!1,webgl:e,speechApi:t,audioContext:!1,reason:"AUDIO_NOT_SUPPORTED"}:{supported:!1,webgl:!1,speechApi:t,audioContext:n,reason:"WEBGL_NOT_SUPPORTED"}:{supported:!1,webgl:!1,speechApi:!1,audioContext:!1,reason:"ES6_NOT_SUPPORTED"}}const $a="liya-avatar-colors",Ni={top:"#F8FAFC",bottom:"#E2E8F0",footwear:"#CBD5E1"},Fd=[{id:"classic-blue",name:"Klasik Mavi",top:"#3B82F6",bottom:"#1E293B",footwear:"#374151"},{id:"red-energy",name:"Kırmızı",top:"#EF4444",bottom:"#1E293B",footwear:"#374151"},{id:"green-nature",name:"Yeşil",top:"#10B981",bottom:"#1E293B",footwear:"#374151"},{id:"purple-royal",name:"Mor",top:"#8B5CF6",bottom:"#1E293B",footwear:"#374151"},{id:"orange-warm",name:"Turuncu",top:"#F97316",bottom:"#1E293B",footwear:"#374151"},{id:"pink-soft",name:"Pembe",top:"#EC4899",bottom:"#F3E8FF",footwear:"#9333EA"},{id:"dark-elegant",name:"Koyu Zarif",top:"#1E293B",bottom:"#0F172A",footwear:"#1E293B"},{id:"white-clean",name:"Beyaz Sade",top:"#F8FAFC",bottom:"#E2E8F0",footwear:"#CBD5E1"}];function jy(){if(typeof window>"u"||!window.localStorage)return{colors:{...Ni},presetId:"white-clean"};try{const i=localStorage.getItem($a);if(i){const e=JSON.parse(i);return{colors:e.colors?{...Ni,...e.colors}:{...Ni},presetId:e.presetId??"white-clean"}}}catch{}return{colors:{...Ni},presetId:"white-clean"}}const Bd=jy(),Qn=h.ref(Bd.colors),Di=h.ref(Bd.presetId);function Vd(){if(!(typeof window>"u"||!window.localStorage))try{const i=localStorage.getItem($a);if(i){const e=JSON.parse(i);e.colors&&(Qn.value={...Ni,...e.colors}),e.presetId&&(Di.value=e.presetId)}}catch{}}function uo(){if(!(typeof window>"u"||!window.localStorage))try{localStorage.setItem($a,JSON.stringify({colors:Qn.value,presetId:Di.value}))}catch{}}function Xy(i){const e=Fd.find(t=>t.id===i);e&&(Qn.value={top:e.top,bottom:e.bottom,footwear:e.footwear},Di.value=i,uo())}function qy(i,e){Qn.value[i]=e,Di.value=null,uo()}function $y(i){Qn.value={...Qn.value,...i},Di.value=null,uo()}function Yy(){Qn.value={...Ni},Di.value="white-clean",uo()}function Ky(){Vd()}function kd(){return Vd(),{colors:h.readonly(Qn),currentPresetId:h.readonly(Di),presets:Fd,defaultColors:Ni,setPreset:Xy,setColor:qy,setColors:$y,reset:Yy,init:Ky}}const Jy={class:"liya-ai-env-vuejs-modal-container"},Zy={class:"liya-ai-env-vuejs-header"},Qy={class:"liya-ai-env-vuejs-header__title"},ex={class:"liya-ai-env-vuejs-header__actions"},tx=["title"],nx={class:"liya-ai-env-vuejs-header__lang-text"},ix=["title"],sx=["aria-label"],rx={key:0,class:"liya-ai-env-vuejs-settings-panel"},ox={class:"liya-ai-env-vuejs-settings-panel__header"},ax={class:"liya-ai-env-vuejs-settings-panel__title"},lx={class:"liya-ai-env-vuejs-settings-panel__section"},cx={class:"liya-ai-env-vuejs-settings-panel__label"},ux={class:"liya-ai-env-vuejs-settings-panel__presets"},dx=["title","onClick"],hx={class:"liya-ai-env-vuejs-settings-panel__section"},fx={class:"liya-ai-env-vuejs-settings-panel__label"},px={class:"liya-ai-env-vuejs-settings-panel__colors"},mx={class:"liya-ai-env-vuejs-settings-panel__color-row"},gx=["value"],_x={class:"liya-ai-env-vuejs-settings-panel__color-row"},vx=["value"],yx={class:"liya-ai-env-vuejs-settings-panel__color-row"},xx=["value"],Ex={key:0,class:"liya-ai-env-vuejs-mic-permission"},Sx={class:"liya-ai-env-vuejs-mic-permission__text"},Mx={class:"liya-ai-env-vuejs-mic-permission__title"},Ax={class:"liya-ai-env-vuejs-mic-permission__desc"},Tx={class:"liya-ai-env-vuejs-scene"},bx={key:0,class:"liya-ai-env-vuejs-unsupported-overlay"},wx={class:"liya-ai-env-vuejs-unsupported-overlay__content"},Rx={class:"liya-ai-env-vuejs-unsupported-overlay__title"},Cx={class:"liya-ai-env-vuejs-unsupported-overlay__text"},Lx={class:"liya-ai-env-vuejs-unsupported-overlay__browsers"},Px={key:1,class:"liya-ai-env-vuejs-access-loading"},Ix={key:2,class:"liya-ai-env-vuejs-premium-overlay"},Nx={class:"liya-ai-env-vuejs-premium-overlay__content"},Dx={class:"liya-ai-env-vuejs-premium-overlay__title"},Ux={class:"liya-ai-env-vuejs-premium-overlay__text"},Ox={href:"https://liyalabs.com/pricing",target:"_blank",rel:"noopener",class:"liya-ai-env-vuejs-premium-overlay__btn"},Fx={key:0,class:"liya-ai-env-vuejs-glass-popup"},Bx={class:"liya-ai-env-vuejs-glass-popup__card"},Vx=["aria-label"],kx={class:"liya-ai-env-vuejs-glass-popup__title"},zx={class:"liya-ai-env-vuejs-glass-popup__text"},Hx={class:"liya-ai-env-vuejs-status-indicator__text"},Gx=["title"],Wx=["title"],jx={key:0,class:"liya-ai-env-vuejs-patience-tooltip"},Xx={class:"liya-ai-env-vuejs-controls"},qx={class:"liya-ai-env-vuejs-controls__label"},$x=["disabled","aria-label"],Yx={key:0,viewBox:"0 0 24 24",fill:"currentColor",width:"32",height:"32"},Kx={key:1,viewBox:"0 0 24 24",fill:"currentColor",width:"32",height:"32"},Jx={key:0,class:"liya-ai-env-vuejs-controls__toast"},Zx={class:"liya-ai-env-vuejs-chat-panel"},Qx={class:"liya-ai-env-vuejs-chat-panel__role"},eE={key:0},tE=["onClick"],nE={key:0,class:"liya-ai-env-vuejs-chat-panel__media-skeleton"},iE=["src","alt","onLoad","onError"],sE={key:1,class:"liya-ai-env-vuejs-chat-panel__media-error"},rE={key:1,class:"liya-ai-env-vuejs-chat-panel__media-video"},oE=["src"],aE={key:1,class:"liya-ai-env-vuejs-chat-panel__suggestions"},lE=["onClick"],cE={key:0,class:"liya-ai-env-vuejs-chat-panel__empty"},uE=["placeholder","disabled"],dE=["disabled"],hE=["src","alt"],fE=["src"],pE=["href"],zd=3e3,Hd=oo(h.defineComponent({__name:"EnvironmentModal",props:{isOpen:{type:Boolean,default:!1},showBackButton:{type:Boolean,default:!1},showCloseButton:{type:Boolean,default:!0},classroomModelUrl:{default:""},avatarModelUrl:{default:""},avatarPosition:{default:()=>({x:0,y:0,z:0})},cameraConfig:{default:()=>({position:{x:0,y:1.4,z:4},lookAt:{x:0,y:1.2,z:0},fov:45})},welcomeMessage:{default:""},enableGestures:{type:Boolean,default:!0},enableSubtitles:{type:Boolean,default:!0},assistantName:{default:""},theme:{default:()=>({})}},emits:["close","back","opened","closed","loaded","message-sent","message-received","speaking-started","speaking-ended","error"],setup(i,{emit:e}){const t=i,n=e,{isSpeaking:s,isProcessing:r,messages:o,visemes:a,gestures:l,audioTime:c,currentPresentation:u,lastApiErrorCode:d,clearApiError:f,handleMessage:p,speakWithAvatar:_,stopAudio:v,setListening:m,addWelcomeMessage:g,updateWelcomeMessage:E,setPresentation:y,cleanup:w}=Xa(),C=h.ref(!1),{t:T,locale:R,setLocale:H}=fr();function S(){const fe=R.value==="tr"?"en":"tr";H(fe)}const{isRecording:b,transcript:G,isSupported:J,startRecording:ae,stopRecording:P,checkMicPermission:I,requestMicPermission:N}=qa(),te=h.ref(!1);function V(){te.value=!0,setTimeout(()=>{te.value=!1},3e3)}const q=h.computed(()=>t.welcomeMessage||T.value.chat.emptyWelcome),$=h.computed(()=>t.assistantName||"AI Assistant"),Q=h.ref(t.avatarModelUrl),de=h.ref(t.classroomModelUrl),z=h.ref(!1),ne=h.ref(!0),se=h.ref(null),ee=h.computed(()=>se.value!==null),oe=h.ref(!0),be=h.ref(void 0),Re=h.ref(!1),ge=h.ref(!1),{colors:Me,presets:F,currentPresetId:Ke,setPreset:Ce,setColor:Ie,reset:Ae,init:it}=kd(),Ue=h.ref(null);function A(){x(),n("opened")}function x(){var fe;(fe=Ue.value)!=null&&fe.applyOutfitColors&&Ue.value.applyOutfitColors({top:Me.value.top,bottom:Me.value.bottom,footwear:Me.value.footwear})}h.watch(Me,()=>{x()},{deep:!0});const j=h.computed(()=>se.value?se.value.code==="PREMIUM_PLUS_REQUIRED"?T.value.premium.upgradePremiumPlus:T.value.premium.upgradePremium:"");function ue(fe){return fe&&fe.replace(/^http:\/\//i,"https://")}const le=h.computed(()=>T.value.welcomeSuggestions),ce=h.ref("");let re=0;const D=h.ref(!1),k=h.ref("");let ie=null;function Ee(){const fe=T.value.patienceTooltips,Z=Math.floor(Math.random()*fe.length);k.value=fe[Z],D.value=!0,ie&&clearTimeout(ie),ie=setTimeout(()=>{D.value=!1},2e3)}const Y=h.computed(()=>s.value?"speaking":r.value?"preparing":b.value?"listening":"idle"),ye=h.computed(()=>T.value.preparingMessages),xe=h.ref(0),Le=h.ref(0);let we=null;h.watch(r,fe=>{fe?(xe.value=0,Le.value=Date.now(),we=setInterval(()=>{Date.now()-Le.value>8e3&&(xe.value=(xe.value+1)%ye.value.length)},4e3)):(we&&(clearInterval(we),we=null),xe.value=0)});const Se=h.computed(()=>{switch(Y.value){case"listening":return T.value.status.listening;case"preparing":return ye.value[xe.value];case"speaking":return T.value.status.speaking;default:return T.value.status.ready}});function Be(){const fe=Date.now();if(fe-re<zd){Ee();return}re=fe,b.value&&(P(),m(!1))}function tt(){const fe=Date.now();if(fe-re<zd){Ee();return}re=fe,s.value&&v();const Z=o.value.filter(Te=>Te.role==="assistant").pop();if(Z){let Te=Z.content;try{const ht=JSON.parse(Z.content);typeof(ht==null?void 0:ht.response)=="string"?Te=ht.response:typeof(ht==null?void 0:ht.answer)=="string"&&(Te=ht.answer)}catch{const ht=Z.content.match(/"(?:response|answer)"\s*:\s*"((?:[^"\\]|\\.)*)"/);if(ht)try{Te=JSON.parse(`"${ht[1]}"`)}catch{Te=ht[1]}}_(Te)}}function st(fe){try{const Z=JSON.parse(fe);if(typeof(Z==null?void 0:Z.response)=="string")return Z.response;if(typeof(Z==null?void 0:Z.answer)=="string")return Z.answer}catch{const Z=fe.match(/"(?:response|answer)"\s*:\s*"((?:[^"\\]|\\.)*)"/);if(Z)try{return JSON.parse(`"${Z[1]}"`)}catch{return Z[1]}}return fe}function ze(fe){try{const Z=JSON.parse(fe);if(Array.isArray(Z==null?void 0:Z.suggestions))return Z.suggestions}catch{const Z=fe.match(/"suggestions"\s*:\s*\[((?:[^\[\]])*?)\]/);if(Z)try{return JSON.parse(`[${Z[1]}]`)}catch{}}return[]}const he=h.ref({show:!1,type:"image",url:"",alt:""}),L=h.ref({});function _e(fe,Z){const Te=[];if(Z&&Array.isArray(Z)&&Z.length>0){for(const B of Z)Te.push({type:B.type||"image",url:B.url,alt:B.alt||(B.type==="video"?"Video":"Görsel")});return{cleanText:fe.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,"").replace(/\[([^\]]*)\]\((https?:\/\/[^)]+\.(?:mp4|webm|mov|MP4|WEBM|MOV))\)/g,"").trim(),media:Te}}const ht=/!\[([^\]]*)\]\(([^)]+)\)/g;let M;for(;(M=ht.exec(fe))!==null;)Te.push({type:"image",url:M[2],alt:M[1]||"Görsel"});const O=/\[([^\]]*)\]\((https?:\/\/[^)]+\.(?:mp4|webm|mov|MP4|WEBM|MOV))\)/gi;for(;(M=O.exec(fe))!==null;)Te.push({type:"video",url:M[2],alt:M[1]||"Video"});return{cleanText:fe.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,"").replace(/\[([^\]]*)\]\((https?:\/\/[^)]+\.(?:mp4|webm|mov|MP4|WEBM|MOV))\)/gi,"").trim(),media:Te}}function ve(fe){he.value={show:!0,type:fe.type,url:fe.url,alt:fe.alt}}const De=h.computed(()=>{const fe=le.value,Z=o.value.map(Te=>{const ht=Te.role==="assistant"?ze(Te.content):[],M=st(Te.content),O=_e(M,Te.media);return{role:Te.role,content:O.cleanText,suggestions:ht,media:O.media}});return Z.length===1&&Z[0].role==="assistant"&&Z[0].suggestions.length===0&&(Z[0].suggestions=fe),Z}),Pe=h.ref(null);function nt(){h.nextTick(()=>{Pe.value&&(Pe.value.scrollTop=Pe.value.scrollHeight)})}h.watch(()=>o.value.length,()=>{nt()});function lt(fe){ti(fe),nt()}async function vt(){const fe=ce.value.trim();fe&&(ce.value="",nt(),await ti(fe))}async function St(){ne.value=!0,se.value=null;try{(await Gl()).has_avatar_access||(se.value={code:"FEATURE_NOT_AVAILABLE",message:T.value.premium.upgradePremium})}catch(fe){const Z=(fe==null?void 0:fe.code)||"FEATURE_NOT_AVAILABLE",Te=(fe==null?void 0:fe.message)||"";Z==="FEATURE_NOT_AVAILABLE"||Z==="UPGRADE_REQUIRED"||Z==="PREMIUM_PLUS_REQUIRED"||Te.includes("Premium")||Te.includes("upgrade")?se.value={code:Z,message:Te}:se.value={code:"FEATURE_NOT_AVAILABLE",message:T.value.premium.upgradePremium}}finally{ne.value=!1}}async function rt(){if(!Q.value){z.value=!0;try{const fe=await kl();Q.value=ue(fe.model_url)}catch{}finally{z.value=!1}}}async function Mt(){if(!de.value)try{const fe=await zl();de.value=ue(fe.model_url)}catch{}}h.watch(b,(fe,Z)=>{Z&&!fe&&G.value&&ti(G.value)}),h.watch(s,fe=>{n(fe?"speaking-started":"speaking-ended")});function qt(fe){if(!fe)return null;try{const Z=ci(),Te=fe.includes("?")?"&":"?";return`${fe}${Te}api_key=${Z.apiKey}`}catch{return fe}}async function Ui(){try{const fe=await Hl();if(fe.length>0){const Z=fe[0];if(Z.pages&&Z.pages.length>0){const Te=Z.pages[0];y({success:!0,action:"show_page",presentation_id:Z.id,presentation_title:Z.title,page_number:Te.page_number,page_title:Te.title,page_image_url:qt(Te.image_url),total_pages:Z.total_pages,reason:"initial_load"})}}}catch{}}h.watch(()=>t.isOpen,async fe=>{if(fe){const Z=Od();if(oe.value=Z.supported,be.value=Z.reason,!Z.supported){ne.value=!1;return}J.value&&await I()==="prompt"&&(Re.value=!0),await St(),ee.value||(await Promise.all([rt(),Mt(),Ui()]),!C.value&&q.value&&(C.value=!0,g(q.value),setTimeout(()=>{_(q.value)},500))),n("opened")}else n("closed")},{immediate:!0}),h.watch(R,()=>{E(q.value),v(),setTimeout(()=>{_(q.value)},300)});async function ti(fe){n("message-sent",fe),await p(fe);const Z=o.value[o.value.length-1];Z&&Z.role==="assistant"&&n("message-received",Z.content)}function ni(){if(!J.value){V();return}b.value?(P(),m(!1)):(ae(),m(!0))}function ii(){w(),n("close")}async function mn(){await N(),Re.value=!1}function si(fe){fe.key==="Escape"&&ii()}return h.onMounted(()=>{document.addEventListener("keydown",si),it()}),h.onUnmounted(()=>{document.removeEventListener("keydown",si),we&&(clearInterval(we),we=null),ie&&(clearTimeout(ie),ie=null),w()}),(fe,Z)=>(h.openBlock(),h.createElementBlock(h.Fragment,null,[(h.openBlock(),h.createBlock(h.Teleport,{to:"body"},[h.createVNode(h.Transition,{name:"liya-ai-env-vuejs-modal"},{default:h.withCtx(()=>[i.isOpen?(h.openBlock(),h.createElementBlock("div",{key:0,class:"liya-ai-env-vuejs-modal-overlay",onClick:h.withModifiers(ii,["self"])},[h.createElementVNode("div",Jy,[h.createElementVNode("header",Zy,[h.createElementVNode("div",Qy,[h.createElementVNode("div",{class:h.normalizeClass(["liya-ai-env-vuejs-status-dot",{"liya-ai-env-vuejs-status-dot--speaking":h.unref(s)}])},null,2),h.createElementVNode("span",null,h.toDisplayString($.value),1)]),h.createElementVNode("div",ex,[h.createElementVNode("button",{class:"liya-ai-env-vuejs-header__lang-btn",onClick:S,title:h.unref(R)==="tr"?"Switch to English":"Türkçe'ye geç"},[h.createElementVNode("span",nx,h.toDisplayString(h.unref(R)==="tr"?"EN":"TR"),1)],8,tx),h.createElementVNode("button",{class:h.normalizeClass(["liya-ai-env-vuejs-header__settings-btn",{"liya-ai-env-vuejs-header__settings-btn--active":ge.value}]),onClick:Z[0]||(Z[0]=Te=>ge.value=!ge.value),title:h.unref(T).settings.title},[...Z[11]||(Z[11]=[h.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"20",height:"20"},[h.createElementVNode("path",{d:"M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})],-1)])],10,ix),i.showCloseButton?(h.openBlock(),h.createElementBlock("button",{key:0,class:"liya-ai-env-vuejs-header__close-btn",onClick:ii,"aria-label":h.unref(T).controls.close},[...Z[12]||(Z[12]=[h.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"24",height:"24"},[h.createElementVNode("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})],-1)])],8,sx)):h.createCommentVNode("",!0)])]),h.createVNode(h.Transition,{name:"liya-ai-env-vuejs-settings-panel"},{default:h.withCtx(()=>[ge.value?(h.openBlock(),h.createElementBlock("div",rx,[h.createElementVNode("div",ox,[h.createElementVNode("h3",ax,h.toDisplayString(h.unref(T).settings.outfitColors),1),h.createElementVNode("button",{class:"liya-ai-env-vuejs-settings-panel__close",onClick:Z[1]||(Z[1]=Te=>ge.value=!1)},[...Z[13]||(Z[13]=[h.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"18",height:"18"},[h.createElementVNode("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})],-1)])])]),h.createElementVNode("div",lx,[h.createElementVNode("label",cx,h.toDisplayString(h.unref(T).settings.presets),1),h.createElementVNode("div",ux,[(h.openBlock(!0),h.createElementBlock(h.Fragment,null,h.renderList(h.unref(F),Te=>(h.openBlock(),h.createElementBlock("button",{key:Te.id,class:h.normalizeClass(["liya-ai-env-vuejs-settings-panel__preset",{"liya-ai-env-vuejs-settings-panel__preset--active":h.unref(Ke)===Te.id}]),style:h.normalizeStyle({background:Te.top}),title:Te.name,onClick:ht=>h.unref(Ce)(Te.id)},null,14,dx))),128))])]),h.createElementVNode("div",hx,[h.createElementVNode("label",fx,h.toDisplayString(h.unref(T).settings.customColor),1),h.createElementVNode("div",px,[h.createElementVNode("div",mx,[h.createElementVNode("span",null,h.toDisplayString(h.unref(T).settings.top),1),h.createElementVNode("input",{type:"color",value:h.unref(Me).top,onInput:Z[2]||(Z[2]=Te=>h.unref(Ie)("top",Te.target.value))},null,40,gx)]),h.createElementVNode("div",_x,[h.createElementVNode("span",null,h.toDisplayString(h.unref(T).settings.bottom),1),h.createElementVNode("input",{type:"color",value:h.unref(Me).bottom,onInput:Z[3]||(Z[3]=Te=>h.unref(Ie)("bottom",Te.target.value))},null,40,vx)]),h.createElementVNode("div",yx,[h.createElementVNode("span",null,h.toDisplayString(h.unref(T).settings.footwear),1),h.createElementVNode("input",{type:"color",value:h.unref(Me).footwear,onInput:Z[4]||(Z[4]=Te=>h.unref(Ie)("footwear",Te.target.value))},null,40,xx)])])]),h.createElementVNode("button",{class:"liya-ai-env-vuejs-settings-panel__reset",onClick:Z[5]||(Z[5]=(...Te)=>h.unref(Ae)&&h.unref(Ae)(...Te))},h.toDisplayString(h.unref(T).settings.reset),1)])):h.createCommentVNode("",!0)]),_:1}),Re.value?(h.openBlock(),h.createElementBlock("div",Ex,[Z[14]||(Z[14]=h.createElementVNode("div",{class:"liya-ai-env-vuejs-mic-permission__icon"},[h.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"24",height:"24"},[h.createElementVNode("path",{d:"M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"})])],-1)),h.createElementVNode("div",Sx,[h.createElementVNode("span",Mx,h.toDisplayString(h.unref(T).mic.permissionRequired),1),h.createElementVNode("span",Ax,h.toDisplayString(h.unref(T).mic.permissionMessage),1)]),h.createElementVNode("button",{class:"liya-ai-env-vuejs-mic-permission__btn",onClick:mn},h.toDisplayString(h.unref(T).mic.allowButton),1)])):h.createCommentVNode("",!0),h.createElementVNode("div",Tx,[oe.value?ne.value?(h.openBlock(),h.createElementBlock("div",Px,[...Z[16]||(Z[16]=[h.createElementVNode("div",{class:"liya-ai-env-vuejs-access-loading__spinner"},null,-1)])])):ee.value?(h.openBlock(),h.createElementBlock("div",Ix,[h.createElementVNode("div",Nx,[Z[18]||(Z[18]=h.createElementVNode("div",{class:"liya-ai-env-vuejs-premium-overlay__icon"},[h.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"48",height:"48"},[h.createElementVNode("path",{d:"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"})])],-1)),h.createElementVNode("h3",Dx,h.toDisplayString(h.unref(T).premium.title),1),h.createElementVNode("p",Ux,h.toDisplayString(j.value),1),h.createElementVNode("a",Ox,[Z[17]||(Z[17]=h.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"16",height:"16"},[h.createElementVNode("path",{d:"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"})],-1)),h.createTextVNode(" "+h.toDisplayString(h.unref(T).premium.viewPlans),1)])])])):(h.openBlock(),h.createElementBlock(h.Fragment,{key:3},[h.createVNode(Ga,{ref_key:"liyaAiEnvVuejsClassroomSceneRef",ref:Ue,"classroom-model-url":de.value,"avatar-model-url":Q.value,"avatar-position":i.avatarPosition,"camera-config":i.cameraConfig,"is-speaking":h.unref(s),visemes:h.unref(a),gestures:i.enableGestures?h.unref(l):[],"current-time":h.unref(c),"presentation-result":h.unref(u),onLoaded:A,onError:Z[6]||(Z[6]=Te=>fe.$emit("error",Te))},null,8,["classroom-model-url","avatar-model-url","avatar-position","camera-config","is-speaking","visemes","gestures","current-time","presentation-result"]),h.createVNode(h.Transition,{name:"liya-ai-env-vuejs-glass-fade"},{default:h.withCtx(()=>[h.unref(d)?(h.openBlock(),h.createElementBlock("div",Fx,[h.createElementVNode("div",Bx,[h.createElementVNode("button",{class:"liya-ai-env-vuejs-glass-popup__close",onClick:Z[7]||(Z[7]=(...Te)=>h.unref(f)&&h.unref(f)(...Te)),"aria-label":h.unref(T).controls.close},[...Z[19]||(Z[19]=[h.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"18",height:"18"},[h.createElementVNode("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})],-1)])],8,Vx),Z[20]||(Z[20]=h.createElementVNode("div",{class:"liya-ai-env-vuejs-glass-popup__icon"},"⚠️",-1)),h.createElementVNode("h4",kx,h.toDisplayString(h.unref(T).errors.problemOccurred),1),h.createElementVNode("p",zx,h.toDisplayString(h.unref(T).errors.tryAgainLater),1)])])):h.createCommentVNode("",!0)]),_:1}),h.createElementVNode("div",{class:h.normalizeClass(["liya-ai-env-vuejs-status-indicator",`liya-ai-env-vuejs-status-indicator--${Y.value}`])},[Z[23]||(Z[23]=h.createElementVNode("span",{class:"liya-ai-env-vuejs-status-indicator__dot"},null,-1)),h.createElementVNode("span",Hx,h.toDisplayString(Se.value),1),Y.value!=="idle"?(h.openBlock(),h.createElementBlock("button",{key:0,class:"liya-ai-env-vuejs-status-indicator__btn",onClick:Be,title:h.unref(T).controls.cancel},[...Z[21]||(Z[21]=[h.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"20",height:"20"},[h.createElementVNode("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})],-1)])],8,Gx)):h.createCommentVNode("",!0),Y.value==="idle"&&h.unref(o).length>0?(h.openBlock(),h.createElementBlock("button",{key:1,class:"liya-ai-env-vuejs-status-indicator__btn",onClick:tt,title:h.unref(T).controls.replay},[...Z[22]||(Z[22]=[h.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"20",height:"20"},[h.createElementVNode("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})],-1)])],8,Wx)):h.createCommentVNode("",!0),h.createVNode(h.Transition,{name:"liya-ai-env-vuejs-patience-tooltip"},{default:h.withCtx(()=>[D.value?(h.openBlock(),h.createElementBlock("div",jx,h.toDisplayString(k.value),1)):h.createCommentVNode("",!0)]),_:1})],2),h.createElementVNode("div",Xx,[h.createElementVNode("p",qx,h.toDisplayString(h.unref(T).controls.pressAndSpeak),1),h.createElementVNode("button",{class:h.normalizeClass(["liya-ai-env-vuejs-controls__mic",{"liya-ai-env-vuejs-controls__mic--active":h.unref(b),"liya-ai-env-vuejs-controls__mic--disabled":h.unref(r)||h.unref(s),"liya-ai-env-vuejs-controls__mic--not-supported":!h.unref(J)}]),disabled:h.unref(r)||h.unref(s),onClick:ni,"aria-label":h.unref(b)?h.unref(T).voice.stopRecording:h.unref(T).voice.startRecording},[h.unref(b)?(h.openBlock(),h.createElementBlock("svg",Kx,[...Z[25]||(Z[25]=[h.createElementVNode("path",{d:"M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"},null,-1),h.createElementVNode("path",{d:"M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"},null,-1)])])):(h.openBlock(),h.createElementBlock("svg",Yx,[...Z[24]||(Z[24]=[h.createElementVNode("path",{d:"M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"},null,-1)])]))],10,$x),h.createVNode(h.Transition,{name:"liya-ai-env-vuejs-toast"},{default:h.withCtx(()=>[te.value?(h.openBlock(),h.createElementBlock("div",Jx,[Z[26]||(Z[26]=h.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"18",height:"18"},[h.createElementVNode("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})],-1)),h.createElementVNode("span",null,h.toDisplayString(h.unref(T).voice.notSupported),1)])):h.createCommentVNode("",!0)]),_:1})]),h.createElementVNode("div",Zx,[h.createElementVNode("div",{class:"liya-ai-env-vuejs-chat-panel__messages",ref_key:"liyaAiEnvVuejsMessagesRef",ref:Pe},[(h.openBlock(!0),h.createElementBlock(h.Fragment,null,h.renderList(De.value,(Te,ht)=>(h.openBlock(),h.createElementBlock("div",{key:ht,class:h.normalizeClass(["liya-ai-env-vuejs-chat-panel__message",{"liya-ai-env-vuejs-chat-panel__message--user":Te.role==="user","liya-ai-env-vuejs-chat-panel__message--assistant":Te.role==="assistant"}])},[h.createElementVNode("span",Qx,h.toDisplayString(Te.role==="user"?h.unref(T).chat.userRole:$.value),1),Te.content?(h.openBlock(),h.createElementBlock("p",eE,h.toDisplayString(Te.content),1)):h.createCommentVNode("",!0),(h.openBlock(!0),h.createElementBlock(h.Fragment,null,h.renderList(Te.media,(M,O)=>(h.openBlock(),h.createElementBlock("div",{key:O,class:"liya-ai-env-vuejs-chat-panel__media",onClick:W=>ve(M)},[M.type==="image"?(h.openBlock(),h.createElementBlock(h.Fragment,{key:0},[!L.value[M.url]||L.value[M.url]==="loading"?(h.openBlock(),h.createElementBlock("div",nE,[...Z[27]||(Z[27]=[h.createElementVNode("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"rgba(255,255,255,0.2)","stroke-width":"1.5"},[h.createElementVNode("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),h.createElementVNode("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),h.createElementVNode("polyline",{points:"21,15 16,10 5,21"})],-1)])])):h.createCommentVNode("",!0),h.createElementVNode("img",{src:M.url,alt:M.alt,class:h.normalizeClass(["liya-ai-env-vuejs-chat-panel__media-img",{"liya-ai-env-vuejs-chat-panel__media-img--hidden":L.value[M.url]!=="loaded"}]),loading:"lazy",onLoad:W=>L.value[M.url]="loaded",onError:W=>L.value[M.url]="error"},null,42,iE),L.value[M.url]==="error"?(h.openBlock(),h.createElementBlock("div",sE," ⚠️ ")):h.createCommentVNode("",!0)],64)):M.type==="video"?(h.openBlock(),h.createElementBlock("div",rE,[h.createElementVNode("video",{src:M.url+"#t=0.001",preload:"metadata",muted:"",playsinline:"","webkit-playsinline":""},null,8,oE),Z[28]||(Z[28]=h.createElementVNode("div",{class:"liya-ai-env-vuejs-chat-panel__play-icon"},"▶",-1))])):h.createCommentVNode("",!0)],8,tE))),128)),Te.suggestions.length>0?(h.openBlock(),h.createElementBlock("div",aE,[(h.openBlock(!0),h.createElementBlock(h.Fragment,null,h.renderList(Te.suggestions,(M,O)=>(h.openBlock(),h.createElementBlock("button",{key:O,class:"liya-ai-env-vuejs-chat-panel__suggestion",onClick:W=>lt(M)},h.toDisplayString(M),9,lE))),128))])):h.createCommentVNode("",!0)],2))),128)),De.value.length===0?(h.openBlock(),h.createElementBlock("div",cE,h.toDisplayString(q.value),1)):h.createCommentVNode("",!0)],512),h.createElementVNode("form",{class:"liya-ai-env-vuejs-chat-panel__input-form",onSubmit:h.withModifiers(vt,["prevent"])},[h.withDirectives(h.createElementVNode("input",{"onUpdate:modelValue":Z[8]||(Z[8]=Te=>ce.value=Te),type:"text",class:"liya-ai-env-vuejs-chat-panel__input",placeholder:ee.value?h.unref(T).chat.premiumRequired:h.unref(T).chat.placeholder,disabled:h.unref(r)||h.unref(s)||ee.value},null,8,uE),[[h.vModelText,ce.value]]),h.createElementVNode("button",{type:"submit",class:"liya-ai-env-vuejs-chat-panel__send-btn",disabled:!ce.value.trim()||h.unref(r)||h.unref(s)||ee.value},[...Z[29]||(Z[29]=[h.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"24",height:"24"},[h.createElementVNode("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})],-1)])],8,dE)],32)])],64)):(h.openBlock(),h.createElementBlock("div",bx,[h.createElementVNode("div",wx,[Z[15]||(Z[15]=h.createElementVNode("div",{class:"liya-ai-env-vuejs-unsupported-overlay__icon"},[h.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"48",height:"48"},[h.createElementVNode("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})])],-1)),h.createElementVNode("h3",Rx,h.toDisplayString(h.unref(T).browser.unsupportedTitle),1),h.createElementVNode("p",Cx,h.toDisplayString(h.unref(T).browser.unsupportedMessage),1),h.createElementVNode("p",Lx,h.toDisplayString(h.unref(T).browser.recommendedBrowsers),1)])]))])])])):h.createCommentVNode("",!0)]),_:1})])),(h.openBlock(),h.createBlock(h.Teleport,{to:"body"},[h.createVNode(h.Transition,{name:"liya-ai-env-vuejs-fade"},{default:h.withCtx(()=>[he.value.show?(h.openBlock(),h.createElementBlock("div",{key:0,class:"liya-ai-env-vuejs-media-preview-overlay",onClick:Z[10]||(Z[10]=h.withModifiers(Te=>he.value.show=!1,["self"]))},[h.createElementVNode("button",{class:"liya-ai-env-vuejs-media-preview-close",onClick:Z[9]||(Z[9]=Te=>he.value.show=!1)}," ✕ "),he.value.type==="image"?(h.openBlock(),h.createElementBlock("img",{key:0,src:he.value.url,alt:he.value.alt,class:"liya-ai-env-vuejs-media-preview-content"},null,8,hE)):(h.openBlock(),h.createElementBlock("video",{key:1,src:he.value.url,controls:"",autoplay:"",playsinline:"","webkit-playsinline":"",class:"liya-ai-env-vuejs-media-preview-content"},null,8,fE)),h.createElementVNode("a",{href:he.value.url,download:"",target:"_blank",class:"liya-ai-env-vuejs-media-preview-download"}," İndir ",8,pE)])):h.createCommentVNode("",!0)]),_:1})]))],64))}}),[["__scopeId","data-v-446a7c08"]]),mE={class:"liya-ai-env-vuejs-standalone-container"},gE={class:"liya-ai-env-vuejs-header"},_E={class:"liya-ai-env-vuejs-header__left"},vE=["aria-label"],yE={class:"liya-ai-env-vuejs-header__title"},xE={class:"liya-ai-env-vuejs-header__right"},EE=["title"],SE={class:"liya-ai-env-vuejs-header__lang-text"},ME=["title"],AE={class:"liya-ai-env-vuejs-header__brand"},TE={key:0,class:"liya-ai-env-vuejs-settings-panel"},bE={class:"liya-ai-env-vuejs-settings-panel__header"},wE={class:"liya-ai-env-vuejs-settings-panel__title"},RE={class:"liya-ai-env-vuejs-settings-panel__section"},CE={class:"liya-ai-env-vuejs-settings-panel__label"},LE={class:"liya-ai-env-vuejs-settings-panel__presets"},PE=["title","onClick"],IE={class:"liya-ai-env-vuejs-settings-panel__section"},NE={class:"liya-ai-env-vuejs-settings-panel__label"},DE={class:"liya-ai-env-vuejs-settings-panel__colors"},UE={class:"liya-ai-env-vuejs-settings-panel__color-row"},OE=["value"],FE={class:"liya-ai-env-vuejs-settings-panel__color-row"},BE=["value"],VE={class:"liya-ai-env-vuejs-settings-panel__color-row"},kE=["value"],zE={key:0,class:"liya-ai-env-vuejs-mic-permission"},HE={class:"liya-ai-env-vuejs-mic-permission__text"},GE={class:"liya-ai-env-vuejs-mic-permission__title"},WE={class:"liya-ai-env-vuejs-mic-permission__desc"},jE={class:"liya-ai-env-vuejs-scene"},XE={key:0,class:"liya-ai-env-vuejs-unsupported-overlay"},qE={class:"liya-ai-env-vuejs-unsupported-overlay__content"},$E={class:"liya-ai-env-vuejs-unsupported-overlay__title"},YE={class:"liya-ai-env-vuejs-unsupported-overlay__text"},KE={class:"liya-ai-env-vuejs-unsupported-overlay__browsers"},JE={key:1,class:"liya-ai-env-vuejs-access-loading"},ZE={key:2,class:"liya-ai-env-vuejs-premium-overlay"},QE={class:"liya-ai-env-vuejs-premium-overlay__content"},eS={class:"liya-ai-env-vuejs-premium-overlay__title"},tS={class:"liya-ai-env-vuejs-premium-overlay__text"},nS={href:"https://liyalabs.com/pricing",target:"_blank",rel:"noopener",class:"liya-ai-env-vuejs-premium-overlay__btn"},iS={key:0,class:"liya-ai-env-vuejs-subtitle"},sS={key:0,class:"liya-ai-env-vuejs-thinking-dots"},rS={class:"liya-ai-env-vuejs-controls"},oS=["disabled","aria-label"],aS={key:0,viewBox:"0 0 24 24",fill:"currentColor",width:"32",height:"32"},lS={key:1,viewBox:"0 0 24 24",fill:"currentColor",width:"32",height:"32"},cS={class:"liya-ai-env-vuejs-controls__hint"},uS={key:0,class:"liya-ai-env-vuejs-controls__toast"},Gd=oo(h.defineComponent({__name:"EnvironmentStandalone",props:{showBackButton:{type:Boolean,default:!0},classroomModelUrl:{default:""},avatarModelUrl:{default:""},avatarPosition:{default:()=>({x:0,y:0,z:0})},cameraConfig:{default:()=>({position:{x:0,y:1.4,z:4},lookAt:{x:0,y:1.2,z:0},fov:45})},welcomeMessage:{default:""},enableGestures:{type:Boolean,default:!0},enableSubtitles:{type:Boolean,default:!0},assistantName:{default:""},theme:{default:()=>({})}},emits:["back","message-sent","message-received","speaking-started","speaking-ended","loaded","error"],setup(i,{emit:e}){const t=i,n=e,{isSpeaking:s,isProcessing:r,messages:o,visemes:a,gestures:l,audioTime:c,currentPresentation:u,handleMessage:d,speakWithAvatar:f,addWelcomeMessage:p,updateWelcomeMessage:_,setListening:v,cleanup:m}=Xa(),g=h.ref(!1),{t:E,locale:y,setLocale:w}=fr();function C(){const D=y.value==="tr"?"en":"tr";w(D)}function T(D){return D&&D.replace(/^http:\/\//i,"https://")}const{isRecording:R,transcript:H,isSupported:S,startRecording:b,stopRecording:G,checkMicPermission:J,requestMicPermission:ae}=qa(),P=h.ref(!1);function I(){P.value=!0,setTimeout(()=>{P.value=!1},3e3)}const N=h.computed(()=>t.welcomeMessage||E.value.chat.emptyWelcome),te=h.computed(()=>t.assistantName||"AI Assistant"),V=h.ref(t.avatarModelUrl),q=h.ref(t.classroomModelUrl),$=h.ref(!0),Q=h.ref(null),de=h.computed(()=>Q.value!==null),z=h.ref(!0),ne=h.ref(void 0),se=h.ref(!1),ee=h.ref(!1),{colors:oe,presets:be,currentPresetId:Re,setPreset:ge,setColor:Me,reset:F,init:Ke}=kd(),Ce=h.ref(null);function Ie(){Ae(),n("loaded")}function Ae(){var D;(D=Ce.value)!=null&&D.applyOutfitColors&&Ce.value.applyOutfitColors({top:oe.value.top,bottom:oe.value.bottom,footwear:oe.value.footwear})}h.watch(oe,()=>{Ae()},{deep:!0});const it=h.computed(()=>Q.value?Q.value.code==="PREMIUM_PLUS_REQUIRED"?E.value.premium.upgradePremiumPlus:E.value.premium.upgradePremium:"");async function Ue(){$.value=!0,Q.value=null;try{(await Gl()).has_avatar_access||(Q.value={code:"FEATURE_NOT_AVAILABLE",message:E.value.premium.upgradePremium})}catch(D){const k=(D==null?void 0:D.code)||"FEATURE_NOT_AVAILABLE",ie=(D==null?void 0:D.message)||"";k==="FEATURE_NOT_AVAILABLE"||k==="UPGRADE_REQUIRED"||k==="PREMIUM_PLUS_REQUIRED"||ie.includes("Premium")||ie.includes("upgrade")?Q.value={code:k,message:ie}:Q.value={code:"FEATURE_NOT_AVAILABLE",message:E.value.premium.upgradePremium}}finally{$.value=!1}}async function A(){if(!V.value)try{const D=await kl();V.value=T(D.model_url)}catch{}}async function x(){if(!q.value)try{const D=await zl();q.value=T(D.model_url)}catch{}}async function j(){await ae(),se.value=!1}h.onMounted(async()=>{const D=Od();if(z.value=D.supported,ne.value=D.reason,!D.supported){$.value=!1;return}Ke(),S.value&&await J()==="prompt"&&(se.value=!0),await Ue(),de.value||(await Promise.all([A(),x()]),!g.value&&N.value&&(g.value=!0,p(N.value),setTimeout(()=>{f(N.value)},500)))}),h.watch(R,(D,k)=>{k&&!D&&H.value&&ue(H.value)}),h.watch(s,D=>{n(D?"speaking-started":"speaking-ended")}),h.watch(y,()=>{_(N.value),m(),setTimeout(()=>{f(N.value)},300)});async function ue(D){n("message-sent",D),await d(D);const k=o.value[o.value.length-1];k&&k.role==="assistant"&&n("message-received",k.content)}function le(){if(!S.value){I();return}R.value?(G(),v(!1)):(b(),v(!0))}function ce(){m(),n("back")}function re(){var D;return o.value.length===0?N.value:((D=o.value[o.value.length-1])==null?void 0:D.content)||""}return h.onUnmounted(()=>{m()}),(D,k)=>(h.openBlock(),h.createElementBlock("div",mE,[h.createElementVNode("header",gE,[h.createElementVNode("div",_E,[i.showBackButton?(h.openBlock(),h.createElementBlock("button",{key:0,class:"liya-ai-env-vuejs-header__back-btn",onClick:ce,"aria-label":h.unref(E).controls.back},[...k[7]||(k[7]=[h.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"24",height:"24"},[h.createElementVNode("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})],-1)])],8,vE)):h.createCommentVNode("",!0),h.createElementVNode("div",yE,[h.createElementVNode("div",{class:h.normalizeClass(["liya-ai-env-vuejs-status-dot",{"liya-ai-env-vuejs-status-dot--speaking":h.unref(s)}])},null,2),h.createElementVNode("span",null,h.toDisplayString(te.value),1)])]),h.createElementVNode("div",xE,[h.createElementVNode("button",{class:"liya-ai-env-vuejs-header__lang-btn",onClick:C,title:h.unref(y)==="tr"?"Switch to English":"Türkçe'ye geç"},[h.createElementVNode("span",SE,h.toDisplayString(h.unref(y)==="tr"?"EN":"TR"),1)],8,EE),h.createElementVNode("button",{class:h.normalizeClass(["liya-ai-env-vuejs-header__settings-btn",{"liya-ai-env-vuejs-header__settings-btn--active":ee.value}]),onClick:k[0]||(k[0]=ie=>ee.value=!ee.value),title:h.unref(E).settings.title},[...k[8]||(k[8]=[h.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"20",height:"20"},[h.createElementVNode("path",{d:"M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})],-1)])],10,ME),h.createElementVNode("div",AE,h.toDisplayString(h.unref(E).branding.environmentTitle),1)])]),h.createVNode(h.Transition,{name:"liya-ai-env-vuejs-settings-panel"},{default:h.withCtx(()=>[ee.value?(h.openBlock(),h.createElementBlock("div",TE,[h.createElementVNode("div",bE,[h.createElementVNode("h3",wE,h.toDisplayString(h.unref(E).settings.outfitColors),1),h.createElementVNode("button",{class:"liya-ai-env-vuejs-settings-panel__close",onClick:k[1]||(k[1]=ie=>ee.value=!1)},[...k[9]||(k[9]=[h.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"18",height:"18"},[h.createElementVNode("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})],-1)])])]),h.createElementVNode("div",RE,[h.createElementVNode("label",CE,h.toDisplayString(h.unref(E).settings.presets),1),h.createElementVNode("div",LE,[(h.openBlock(!0),h.createElementBlock(h.Fragment,null,h.renderList(h.unref(be),ie=>(h.openBlock(),h.createElementBlock("button",{key:ie.id,class:h.normalizeClass(["liya-ai-env-vuejs-settings-panel__preset",{"liya-ai-env-vuejs-settings-panel__preset--active":h.unref(Re)===ie.id}]),style:h.normalizeStyle({background:ie.top}),title:ie.name,onClick:Ee=>h.unref(ge)(ie.id)},null,14,PE))),128))])]),h.createElementVNode("div",IE,[h.createElementVNode("label",NE,h.toDisplayString(h.unref(E).settings.customColor),1),h.createElementVNode("div",DE,[h.createElementVNode("div",UE,[h.createElementVNode("span",null,h.toDisplayString(h.unref(E).settings.top),1),h.createElementVNode("input",{type:"color",value:h.unref(oe).top,onInput:k[2]||(k[2]=ie=>h.unref(Me)("top",ie.target.value))},null,40,OE)]),h.createElementVNode("div",FE,[h.createElementVNode("span",null,h.toDisplayString(h.unref(E).settings.bottom),1),h.createElementVNode("input",{type:"color",value:h.unref(oe).bottom,onInput:k[3]||(k[3]=ie=>h.unref(Me)("bottom",ie.target.value))},null,40,BE)]),h.createElementVNode("div",VE,[h.createElementVNode("span",null,h.toDisplayString(h.unref(E).settings.footwear),1),h.createElementVNode("input",{type:"color",value:h.unref(oe).footwear,onInput:k[4]||(k[4]=ie=>h.unref(Me)("footwear",ie.target.value))},null,40,kE)])])]),h.createElementVNode("button",{class:"liya-ai-env-vuejs-settings-panel__reset",onClick:k[5]||(k[5]=(...ie)=>h.unref(F)&&h.unref(F)(...ie))},h.toDisplayString(h.unref(E).settings.reset),1)])):h.createCommentVNode("",!0)]),_:1}),se.value?(h.openBlock(),h.createElementBlock("div",zE,[k[10]||(k[10]=h.createElementVNode("div",{class:"liya-ai-env-vuejs-mic-permission__icon"},[h.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"24",height:"24"},[h.createElementVNode("path",{d:"M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"})])],-1)),h.createElementVNode("div",HE,[h.createElementVNode("span",GE,h.toDisplayString(h.unref(E).mic.permissionRequired),1),h.createElementVNode("span",WE,h.toDisplayString(h.unref(E).mic.permissionMessage),1)]),h.createElementVNode("button",{class:"liya-ai-env-vuejs-mic-permission__btn",onClick:j},h.toDisplayString(h.unref(E).mic.allowButton),1)])):h.createCommentVNode("",!0),h.createElementVNode("div",jE,[z.value?$.value?(h.openBlock(),h.createElementBlock("div",JE,[...k[12]||(k[12]=[h.createElementVNode("div",{class:"liya-ai-env-vuejs-access-loading__spinner"},null,-1)])])):de.value?(h.openBlock(),h.createElementBlock("div",ZE,[h.createElementVNode("div",QE,[k[14]||(k[14]=h.createElementVNode("div",{class:"liya-ai-env-vuejs-premium-overlay__icon"},[h.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"48",height:"48"},[h.createElementVNode("path",{d:"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"})])],-1)),h.createElementVNode("h3",eS,h.toDisplayString(h.unref(E).premium.title),1),h.createElementVNode("p",tS,h.toDisplayString(it.value),1),h.createElementVNode("a",nS,[k[13]||(k[13]=h.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"16",height:"16"},[h.createElementVNode("path",{d:"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"})],-1)),h.createTextVNode(" "+h.toDisplayString(h.unref(E).premium.viewPlans),1)])])])):(h.openBlock(),h.createElementBlock(h.Fragment,{key:3},[h.createVNode(Ga,{ref_key:"liyaAiEnvVuejsClassroomSceneRef",ref:Ce,"classroom-model-url":q.value,"avatar-model-url":V.value,"avatar-position":i.avatarPosition,"camera-config":i.cameraConfig,"is-speaking":h.unref(s),visemes:h.unref(a),gestures:i.enableGestures?h.unref(l):[],"current-time":h.unref(c),"presentation-result":h.unref(u),onLoaded:Ie,onError:k[6]||(k[6]=ie=>D.$emit("error",ie))},null,8,["classroom-model-url","avatar-model-url","avatar-position","camera-config","is-speaking","visemes","gestures","current-time","presentation-result"]),i.enableSubtitles?(h.openBlock(),h.createElementBlock("div",iS,[h.unref(r)?(h.openBlock(),h.createElementBlock("div",sS,[...k[15]||(k[15]=[h.createElementVNode("span",{class:"liya-ai-env-vuejs-thinking-dot"},null,-1),h.createElementVNode("span",{class:"liya-ai-env-vuejs-thinking-dot"},null,-1),h.createElementVNode("span",{class:"liya-ai-env-vuejs-thinking-dot"},null,-1)])])):(h.openBlock(),h.createElementBlock("p",{key:1,class:h.normalizeClass(["liya-ai-env-vuejs-subtitle__text",{"liya-ai-env-vuejs-subtitle__welcome":h.unref(o).length===0}])},h.toDisplayString(re()),3))])):h.createCommentVNode("",!0),h.createElementVNode("div",rS,[h.createElementVNode("button",{class:h.normalizeClass(["liya-ai-env-vuejs-controls__mic",{"liya-ai-env-vuejs-controls__mic--active":h.unref(R),"liya-ai-env-vuejs-controls__mic--disabled":h.unref(r)||h.unref(s),"liya-ai-env-vuejs-controls__mic--not-supported":!h.unref(S)}]),disabled:h.unref(r)||h.unref(s),onClick:le,"aria-label":h.unref(R)?h.unref(E).voice.stopRecording:h.unref(E).voice.startRecording},[h.unref(R)?(h.openBlock(),h.createElementBlock("svg",lS,[...k[17]||(k[17]=[h.createElementVNode("path",{d:"M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"},null,-1),h.createElementVNode("path",{d:"M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"},null,-1)])])):(h.openBlock(),h.createElementBlock("svg",aS,[...k[16]||(k[16]=[h.createElementVNode("path",{d:"M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"},null,-1)])]))],10,oS),h.createElementVNode("p",cS,h.toDisplayString(h.unref(R)?h.unref(E).voice.listening:h.unref(r)?h.unref(E).voice.thinking:h.unref(E).voice.pressToSpeak),1),h.createVNode(h.Transition,{name:"liya-ai-env-vuejs-toast"},{default:h.withCtx(()=>[P.value?(h.openBlock(),h.createElementBlock("div",uS,[k[18]||(k[18]=h.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"18",height:"18"},[h.createElementVNode("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})],-1)),h.createElementVNode("span",null,h.toDisplayString(h.unref(E).voice.notSupported),1)])):h.createCommentVNode("",!0)]),_:1})])],64)):(h.openBlock(),h.createElementBlock("div",XE,[h.createElementVNode("div",qE,[k[11]||(k[11]=h.createElementVNode("div",{class:"liya-ai-env-vuejs-unsupported-overlay__icon"},[h.createElementVNode("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"48",height:"48"},[h.createElementVNode("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})])],-1)),h.createElementVNode("h3",$E,h.toDisplayString(h.unref(E).browser.unsupportedTitle),1),h.createElementVNode("p",YE,h.toDisplayString(h.unref(E).browser.unsupportedMessage),1),h.createElementVNode("p",KE,h.toDisplayString(h.unref(E).browser.recommendedBrowsers),1)])]))])]))}}),[["__scopeId","data-v-8ee1a533"]]),dS=h.defineComponent({__name:"LiyaEnvironment",props:{mode:{default:"modal_fullscreen"},isOpen:{type:Boolean,default:!1},showBackButton:{type:Boolean,default:!0},showCloseButton:{type:Boolean,default:!0},classroomModelUrl:{default:""},avatarModelUrl:{default:""},avatarPosition:{default:()=>({x:0,y:0,z:0})},cameraConfig:{default:()=>({position:{x:0,y:1.4,z:4},lookAt:{x:0,y:1.2,z:0},fov:45})},welcomeMessage:{default:""},enableGestures:{type:Boolean,default:!0},enableSubtitles:{type:Boolean,default:!0},assistantName:{default:""},theme:{default:()=>({})}},emits:["close","back","opened","closed","message-sent","message-received","speaking-started","speaking-ended","loaded","error"],setup(i){const e=i,t=h.computed(()=>e.mode==="modal_fullscreen");return(n,s)=>(h.openBlock(),h.createBlock(h.resolveDynamicComponent(t.value?Hd:Gd),{"is-open":i.isOpen,"show-back-button":i.showBackButton,"show-close-button":i.showCloseButton,"classroom-model-url":i.classroomModelUrl,"avatar-model-url":i.avatarModelUrl,"avatar-position":i.avatarPosition,"camera-config":i.cameraConfig,"welcome-message":i.welcomeMessage,"enable-gestures":i.enableGestures,"enable-subtitles":i.enableSubtitles,"assistant-name":i.assistantName,theme:i.theme,onClose:s[0]||(s[0]=r=>n.$emit("close")),onBack:s[1]||(s[1]=r=>n.$emit("back")),onOpened:s[2]||(s[2]=r=>n.$emit("opened")),onClosed:s[3]||(s[3]=r=>n.$emit("closed")),onMessageSent:s[4]||(s[4]=r=>n.$emit("message-sent",r)),onMessageReceived:s[5]||(s[5]=r=>n.$emit("message-received",r)),onSpeakingStarted:s[6]||(s[6]=r=>n.$emit("speaking-started")),onSpeakingEnded:s[7]||(s[7]=r=>n.$emit("speaking-ended")),onLoaded:s[8]||(s[8]=r=>n.$emit("loaded")),onError:s[9]||(s[9]=r=>n.$emit("error",r))},null,40,["is-open","show-back-button","show-close-button","classroom-model-url","avatar-model-url","avatar-position","camera-config","welcome-message","enable-gestures","enable-subtitles","assistant-name","theme"]))}}),Qs=h.ref(0),ho=h.ref(!1),As=h.ref(new Uint8Array(0));let ei=null,Tn=null,er=null,fo=null;function hS(){const i=h.computed(()=>Qs.value),e=h.computed(()=>ho.value),t=h.computed(()=>As.value);async function n(){try{const l=await navigator.mediaDevices.getUserMedia({audio:!0}),c=window.AudioContext||window.webkitAudioContext;ei=new c,ei.state==="suspended"&&await ei.resume(),Tn=ei.createAnalyser(),Tn.fftSize=256,Tn.smoothingTimeConstant=.8,er=ei.createMediaStreamSource(l),er.connect(Tn);const u=Tn.frequencyBinCount;return As.value=new Uint8Array(u),ho.value=!0,s(),!0}catch{return!1}}function s(){if(!ho.value||!Tn)return;Tn.getByteFrequencyData(As.value);let l=0;for(let c=0;c<As.value.length;c++)l+=As.value[c];Qs.value=l/As.value.length/255,fo=requestAnimationFrame(s)}function r(){ho.value=!1,fo&&(cancelAnimationFrame(fo),fo=null),er&&(er.disconnect(),er=null),Tn&&(Tn.disconnect(),Tn=null),ei&&(ei.close(),ei=null),Qs.value=0}function o(){const l=Qs.value;return l<.1?.2:l<.3?.4:l<.5?.6:l<.7?.8:1}function a(){const l=Qs.value;return l<.3?"low":l<.6?"medium":"high"}return h.onUnmounted(()=>{r()}),{audioLevel:i,isAnalyzing:e,frequencyData:t,startAnalyzing:n,stopAnalyzing:r,getGestureIntensityFromAudio:o,getSpeakingEmphasis:a}}qe.LIYA_AI_ENV_VUEJS_GESTURE_DEFINITIONS=Ks,qe.LiyaAiEnvVuejsClassroomScene=Ga,qe.LiyaAiEnvVuejsEnvironment=dS,qe.LiyaAiEnvVuejsEnvironmentModal=Hd,qe.LiyaAiEnvVuejsEnvironmentStandalone=Gd,qe.LiyaAiEnvVuejsFullBodyAvatar=Uy,qe.LiyaAiEnvVuejsPlugin=Xl,qe.default=Xl,qe.liyaAiEnvVuejsDetectBrowserLocale=jl,qe.liyaAiEnvVuejsGenerateSpeech=Vl,qe.liyaAiEnvVuejsGetClient=Ol,qe.liyaAiEnvVuejsGetConfig=ci,qe.liyaAiEnvVuejsGetGestureDefinition=Cy,qe.liyaAiEnvVuejsGetPresentations=Hl,qe.liyaAiEnvVuejsGetSessionHistory=yf,qe.liyaAiEnvVuejsInitializeClient=Ul,qe.liyaAiEnvVuejsInterpolateKeyframes=Cd,qe.liyaAiEnvVuejsIsInitialized=vf,qe.liyaAiEnvVuejsIsSupportedLocale=Is,qe.liyaAiEnvVuejsSendMessage=Bl,qe.liyaAiEnvVuejsTranslations=Wl,qe.useLiyaAiEnvVuejsAudioAnalyzer=hS,qe.useLiyaAiEnvVuejsEnvironment=Xa,qe.useLiyaAiEnvVuejsGestures=Ha,qe.useLiyaAiEnvVuejsI18n=fr,qe.useLiyaAiEnvVuejsVoice=qa,Object.defineProperties(qe,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
