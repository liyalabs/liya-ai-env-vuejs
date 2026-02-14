var jh = Object.defineProperty;
var Xh = (s, e, t) => e in s ? jh(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var yo = (s, e, t) => Xh(s, typeof e != "symbol" ? e + "" : e, t);
import { ref as Ke, computed as Fe, readonly as vu, defineComponent as Ys, openBlock as et, createElementBlock as tt, renderSlot as qh, watch as pn, onMounted as Da, onUnmounted as Ks, createElementVNode as de, toDisplayString as yt, createCommentVNode as en, normalizeStyle as Yh, createBlock as yu, Teleport as Kh, createVNode as Or, Transition as il, withCtx as sl, withModifiers as rl, normalizeClass as vi, unref as Se, createTextVNode as xu, Fragment as Fr, renderList as ol, withDirectives as $h, vModelText as Jh, nextTick as Zh, resolveDynamicComponent as Qh } from "vue";
function Eu(s, e) {
  return function() {
    return s.apply(e, arguments);
  };
}
const { toString: ed } = Object.prototype, { getPrototypeOf: Ua } = Object, { iterator: no, toStringTag: Su } = Symbol, io = /* @__PURE__ */ ((s) => (e) => {
  const t = ed.call(e);
  return s[t] || (s[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), vn = (s) => (s = s.toLowerCase(), (e) => io(e) === s), so = (s) => (e) => typeof e === s, { isArray: gs } = Array, os = so("undefined");
function $s(s) {
  return s !== null && !os(s) && s.constructor !== null && !os(s.constructor) && Yt(s.constructor.isBuffer) && s.constructor.isBuffer(s);
}
const Mu = vn("ArrayBuffer");
function td(s) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(s) : e = s && s.buffer && Mu(s.buffer), e;
}
const nd = so("string"), Yt = so("function"), Au = so("number"), Js = (s) => s !== null && typeof s == "object", id = (s) => s === !0 || s === !1, Br = (s) => {
  if (io(s) !== "object")
    return !1;
  const e = Ua(s);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Su in s) && !(no in s);
}, sd = (s) => {
  if (!Js(s) || $s(s))
    return !1;
  try {
    return Object.keys(s).length === 0 && Object.getPrototypeOf(s) === Object.prototype;
  } catch {
    return !1;
  }
}, rd = vn("Date"), od = vn("File"), ad = vn("Blob"), ld = vn("FileList"), cd = (s) => Js(s) && Yt(s.pipe), ud = (s) => {
  let e;
  return s && (typeof FormData == "function" && s instanceof FormData || Yt(s.append) && ((e = io(s)) === "formdata" || // detect form-data instance
  e === "object" && Yt(s.toString) && s.toString() === "[object FormData]"));
}, hd = vn("URLSearchParams"), [dd, fd, pd, md] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(vn), gd = (s) => s.trim ? s.trim() : s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Zs(s, e, { allOwnKeys: t = !1 } = {}) {
  if (s === null || typeof s > "u")
    return;
  let n, i;
  if (typeof s != "object" && (s = [s]), gs(s))
    for (n = 0, i = s.length; n < i; n++)
      e.call(null, s[n], n, s);
  else {
    if ($s(s))
      return;
    const r = t ? Object.getOwnPropertyNames(s) : Object.keys(s), o = r.length;
    let a;
    for (n = 0; n < o; n++)
      a = r[n], e.call(null, s[a], a, s);
  }
}
function Tu(s, e) {
  if ($s(s))
    return null;
  e = e.toLowerCase();
  const t = Object.keys(s);
  let n = t.length, i;
  for (; n-- > 0; )
    if (i = t[n], e === i.toLowerCase())
      return i;
  return null;
}
const yi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, bu = (s) => !os(s) && s !== yi;
function ha() {
  const { caseless: s, skipUndefined: e } = bu(this) && this || {}, t = {}, n = (i, r) => {
    if (r === "__proto__" || r === "constructor" || r === "prototype")
      return;
    const o = s && Tu(t, r) || r;
    Br(t[o]) && Br(i) ? t[o] = ha(t[o], i) : Br(i) ? t[o] = ha({}, i) : gs(i) ? t[o] = i.slice() : (!e || !os(i)) && (t[o] = i);
  };
  for (let i = 0, r = arguments.length; i < r; i++)
    arguments[i] && Zs(arguments[i], n);
  return t;
}
const _d = (s, e, t, { allOwnKeys: n } = {}) => (Zs(
  e,
  (i, r) => {
    t && Yt(i) ? Object.defineProperty(s, r, {
      value: Eu(i, t),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(s, r, {
      value: i,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: n }
), s), vd = (s) => (s.charCodeAt(0) === 65279 && (s = s.slice(1)), s), yd = (s, e, t, n) => {
  s.prototype = Object.create(
    e.prototype,
    n
  ), Object.defineProperty(s.prototype, "constructor", {
    value: s,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(s, "super", {
    value: e.prototype
  }), t && Object.assign(s.prototype, t);
}, xd = (s, e, t, n) => {
  let i, r, o;
  const a = {};
  if (e = e || {}, s == null) return e;
  do {
    for (i = Object.getOwnPropertyNames(s), r = i.length; r-- > 0; )
      o = i[r], (!n || n(o, s, e)) && !a[o] && (e[o] = s[o], a[o] = !0);
    s = t !== !1 && Ua(s);
  } while (s && (!t || t(s, e)) && s !== Object.prototype);
  return e;
}, Ed = (s, e, t) => {
  s = String(s), (t === void 0 || t > s.length) && (t = s.length), t -= e.length;
  const n = s.indexOf(e, t);
  return n !== -1 && n === t;
}, Sd = (s) => {
  if (!s) return null;
  if (gs(s)) return s;
  let e = s.length;
  if (!Au(e)) return null;
  const t = new Array(e);
  for (; e-- > 0; )
    t[e] = s[e];
  return t;
}, Md = /* @__PURE__ */ ((s) => (e) => s && e instanceof s)(typeof Uint8Array < "u" && Ua(Uint8Array)), Ad = (s, e) => {
  const n = (s && s[no]).call(s);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const r = i.value;
    e.call(s, r[0], r[1]);
  }
}, Td = (s, e) => {
  let t;
  const n = [];
  for (; (t = s.exec(e)) !== null; )
    n.push(t);
  return n;
}, bd = vn("HTMLFormElement"), wd = (s) => s.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(t, n, i) {
  return n.toUpperCase() + i;
}), al = (({ hasOwnProperty: s }) => (e, t) => s.call(e, t))(Object.prototype), Rd = vn("RegExp"), wu = (s, e) => {
  const t = Object.getOwnPropertyDescriptors(s), n = {};
  Zs(t, (i, r) => {
    let o;
    (o = e(i, r, s)) !== !1 && (n[r] = o || i);
  }), Object.defineProperties(s, n);
}, Cd = (s) => {
  wu(s, (e, t) => {
    if (Yt(s) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const n = s[t];
    if (Yt(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, Ld = (s, e) => {
  const t = {}, n = (i) => {
    i.forEach((r) => {
      t[r] = !0;
    });
  };
  return gs(s) ? n(s) : n(String(s).split(e)), t;
}, Pd = () => {
}, Id = (s, e) => s != null && Number.isFinite(s = +s) ? s : e;
function Dd(s) {
  return !!(s && Yt(s.append) && s[Su] === "FormData" && s[no]);
}
const Ud = (s) => {
  const e = new Array(10), t = (n, i) => {
    if (Js(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if ($s(n))
        return n;
      if (!("toJSON" in n)) {
        e[i] = n;
        const r = gs(n) ? [] : {};
        return Zs(n, (o, a) => {
          const l = t(o, i + 1);
          !os(l) && (r[a] = l);
        }), e[i] = void 0, r;
      }
    }
    return n;
  };
  return t(s, 0);
}, Nd = vn("AsyncFunction"), Od = (s) => s && (Js(s) || Yt(s)) && Yt(s.then) && Yt(s.catch), Ru = ((s, e) => s ? setImmediate : e ? ((t, n) => (yi.addEventListener(
  "message",
  ({ source: i, data: r }) => {
    i === yi && r === t && n.length && n.shift()();
  },
  !1
), (i) => {
  n.push(i), yi.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(typeof setImmediate == "function", Yt(yi.postMessage)), Fd = typeof queueMicrotask < "u" ? queueMicrotask.bind(yi) : typeof process < "u" && process.nextTick || Ru, Bd = (s) => s != null && Yt(s[no]), H = {
  isArray: gs,
  isArrayBuffer: Mu,
  isBuffer: $s,
  isFormData: ud,
  isArrayBufferView: td,
  isString: nd,
  isNumber: Au,
  isBoolean: id,
  isObject: Js,
  isPlainObject: Br,
  isEmptyObject: sd,
  isReadableStream: dd,
  isRequest: fd,
  isResponse: pd,
  isHeaders: md,
  isUndefined: os,
  isDate: rd,
  isFile: od,
  isBlob: ad,
  isRegExp: Rd,
  isFunction: Yt,
  isStream: cd,
  isURLSearchParams: hd,
  isTypedArray: Md,
  isFileList: ld,
  forEach: Zs,
  merge: ha,
  extend: _d,
  trim: gd,
  stripBOM: vd,
  inherits: yd,
  toFlatObject: xd,
  kindOf: io,
  kindOfTest: vn,
  endsWith: Ed,
  toArray: Sd,
  forEachEntry: Ad,
  matchAll: Td,
  isHTMLForm: bd,
  hasOwnProperty: al,
  hasOwnProp: al,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: wu,
  freezeMethods: Cd,
  toObjectSet: Ld,
  toCamelCase: wd,
  noop: Pd,
  toFiniteNumber: Id,
  findKey: Tu,
  global: yi,
  isContextDefined: bu,
  isSpecCompliantForm: Dd,
  toJSONObject: Ud,
  isAsyncFn: Nd,
  isThenable: Od,
  setImmediate: Ru,
  asap: Fd,
  isIterable: Bd
};
let Pe = class Cu extends Error {
  static from(e, t, n, i, r, o) {
    const a = new Cu(e.message, t || e.code, n, i, r);
    return a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(e, t, n, i, r) {
    super(e), this.name = "AxiosError", this.isAxiosError = !0, t && (this.code = t), n && (this.config = n), i && (this.request = i), r && (this.response = r, this.status = r.status);
  }
  toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: H.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
Pe.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
Pe.ERR_BAD_OPTION = "ERR_BAD_OPTION";
Pe.ECONNABORTED = "ECONNABORTED";
Pe.ETIMEDOUT = "ETIMEDOUT";
Pe.ERR_NETWORK = "ERR_NETWORK";
Pe.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
Pe.ERR_DEPRECATED = "ERR_DEPRECATED";
Pe.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
Pe.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
Pe.ERR_CANCELED = "ERR_CANCELED";
Pe.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
Pe.ERR_INVALID_URL = "ERR_INVALID_URL";
const Vd = null;
function da(s) {
  return H.isPlainObject(s) || H.isArray(s);
}
function Lu(s) {
  return H.endsWith(s, "[]") ? s.slice(0, -2) : s;
}
function ll(s, e, t) {
  return s ? s.concat(e).map(function(i, r) {
    return i = Lu(i), !t && r ? "[" + i + "]" : i;
  }).join(t ? "." : "") : e;
}
function zd(s) {
  return H.isArray(s) && !s.some(da);
}
const kd = H.toFlatObject(H, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function ro(s, e, t) {
  if (!H.isObject(s))
    throw new TypeError("target must be an object");
  e = e || new FormData(), t = H.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(_, f) {
    return !H.isUndefined(f[_]);
  });
  const n = t.metaTokens, i = t.visitor || u, r = t.dots, o = t.indexes, l = (t.Blob || typeof Blob < "u" && Blob) && H.isSpecCompliantForm(e);
  if (!H.isFunction(i))
    throw new TypeError("visitor must be a function");
  function c(g) {
    if (g === null) return "";
    if (H.isDate(g))
      return g.toISOString();
    if (H.isBoolean(g))
      return g.toString();
    if (!l && H.isBlob(g))
      throw new Pe("Blob is not supported. Use a Buffer instead.");
    return H.isArrayBuffer(g) || H.isTypedArray(g) ? l && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function u(g, _, f) {
    let p = g;
    if (g && !f && typeof g == "object") {
      if (H.endsWith(_, "{}"))
        _ = n ? _ : _.slice(0, -2), g = JSON.stringify(g);
      else if (H.isArray(g) && zd(g) || (H.isFileList(g) || H.endsWith(_, "[]")) && (p = H.toArray(g)))
        return _ = Lu(_), p.forEach(function(y, T) {
          !(H.isUndefined(y) || y === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? ll([_], T, r) : o === null ? _ : _ + "[]",
            c(y)
          );
        }), !1;
    }
    return da(g) ? !0 : (e.append(ll(f, _, r), c(g)), !1);
  }
  const h = [], d = Object.assign(kd, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: da
  });
  function m(g, _) {
    if (!H.isUndefined(g)) {
      if (h.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + _.join("."));
      h.push(g), H.forEach(g, function(p, E) {
        (!(H.isUndefined(p) || p === null) && i.call(
          e,
          p,
          H.isString(E) ? E.trim() : E,
          _,
          d
        )) === !0 && m(p, _ ? _.concat(E) : [E]);
      }), h.pop();
    }
  }
  if (!H.isObject(s))
    throw new TypeError("data must be an object");
  return m(s), e;
}
function cl(s) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g, function(n) {
    return e[n];
  });
}
function Na(s, e) {
  this._pairs = [], s && ro(s, this, e);
}
const Pu = Na.prototype;
Pu.append = function(e, t) {
  this._pairs.push([e, t]);
};
Pu.toString = function(e) {
  const t = e ? function(n) {
    return e.call(this, n, cl);
  } : cl;
  return this._pairs.map(function(i) {
    return t(i[0]) + "=" + t(i[1]);
  }, "").join("&");
};
function Hd(s) {
  return encodeURIComponent(s).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Iu(s, e, t) {
  if (!e)
    return s;
  const n = t && t.encode || Hd, i = H.isFunction(t) ? {
    serialize: t
  } : t, r = i && i.serialize;
  let o;
  if (r ? o = r(e, i) : o = H.isURLSearchParams(e) ? e.toString() : new Na(e, i).toString(n), o) {
    const a = s.indexOf("#");
    a !== -1 && (s = s.slice(0, a)), s += (s.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return s;
}
class ul {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, t, n) {
    return this.handlers.push({
      fulfilled: e,
      rejected: t,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    H.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const Oa = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, Gd = typeof URLSearchParams < "u" ? URLSearchParams : Na, Wd = typeof FormData < "u" ? FormData : null, jd = typeof Blob < "u" ? Blob : null, Xd = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Gd,
    FormData: Wd,
    Blob: jd
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Fa = typeof window < "u" && typeof document < "u", fa = typeof navigator == "object" && navigator || void 0, qd = Fa && (!fa || ["ReactNative", "NativeScript", "NS"].indexOf(fa.product) < 0), Yd = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Kd = Fa && window.location.href || "http://localhost", $d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Fa,
  hasStandardBrowserEnv: qd,
  hasStandardBrowserWebWorkerEnv: Yd,
  navigator: fa,
  origin: Kd
}, Symbol.toStringTag, { value: "Module" })), Vt = {
  ...$d,
  ...Xd
};
function Jd(s, e) {
  return ro(s, new Vt.classes.URLSearchParams(), {
    visitor: function(t, n, i, r) {
      return Vt.isNode && H.isBuffer(t) ? (this.append(n, t.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function Zd(s) {
  return H.matchAll(/\w+|\[(\w*)]/g, s).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Qd(s) {
  const e = {}, t = Object.keys(s);
  let n;
  const i = t.length;
  let r;
  for (n = 0; n < i; n++)
    r = t[n], e[r] = s[r];
  return e;
}
function Du(s) {
  function e(t, n, i, r) {
    let o = t[r++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o), l = r >= t.length;
    return o = !o && H.isArray(i) ? i.length : o, l ? (H.hasOwnProp(i, o) ? i[o] = [i[o], n] : i[o] = n, !a) : ((!i[o] || !H.isObject(i[o])) && (i[o] = []), e(t, n, i[o], r) && H.isArray(i[o]) && (i[o] = Qd(i[o])), !a);
  }
  if (H.isFormData(s) && H.isFunction(s.entries)) {
    const t = {};
    return H.forEachEntry(s, (n, i) => {
      e(Zd(n), i, t, 0);
    }), t;
  }
  return null;
}
function ef(s, e, t) {
  if (H.isString(s))
    try {
      return (e || JSON.parse)(s), H.trim(s);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (t || JSON.stringify)(s);
}
const Qs = {
  transitional: Oa,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, t) {
    const n = t.getContentType() || "", i = n.indexOf("application/json") > -1, r = H.isObject(e);
    if (r && H.isHTMLForm(e) && (e = new FormData(e)), H.isFormData(e))
      return i ? JSON.stringify(Du(e)) : e;
    if (H.isArrayBuffer(e) || H.isBuffer(e) || H.isStream(e) || H.isFile(e) || H.isBlob(e) || H.isReadableStream(e))
      return e;
    if (H.isArrayBufferView(e))
      return e.buffer;
    if (H.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (r) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Jd(e, this.formSerializer).toString();
      if ((a = H.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return ro(
          a ? { "files[]": e } : e,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return r || i ? (t.setContentType("application/json", !1), ef(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || Qs.transitional, n = t && t.forcedJSONParsing, i = this.responseType === "json";
    if (H.isResponse(e) || H.isReadableStream(e))
      return e;
    if (e && H.isString(e) && (n && !this.responseType || i)) {
      const o = !(t && t.silentJSONParsing) && i;
      try {
        return JSON.parse(e, this.parseReviver);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? Pe.from(a, Pe.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Vt.classes.FormData,
    Blob: Vt.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
H.forEach(["delete", "get", "head", "post", "put", "patch"], (s) => {
  Qs.headers[s] = {};
});
const tf = H.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), nf = (s) => {
  const e = {};
  let t, n, i;
  return s && s.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), t = o.substring(0, i).trim().toLowerCase(), n = o.substring(i + 1).trim(), !(!t || e[t] && tf[t]) && (t === "set-cookie" ? e[t] ? e[t].push(n) : e[t] = [n] : e[t] = e[t] ? e[t] + ", " + n : n);
  }), e;
}, hl = Symbol("internals");
function bs(s) {
  return s && String(s).trim().toLowerCase();
}
function Vr(s) {
  return s === !1 || s == null ? s : H.isArray(s) ? s.map(Vr) : String(s);
}
function sf(s) {
  const e = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = t.exec(s); )
    e[n[1]] = n[2];
  return e;
}
const rf = (s) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());
function xo(s, e, t, n, i) {
  if (H.isFunction(n))
    return n.call(this, e, t);
  if (i && (e = t), !!H.isString(e)) {
    if (H.isString(n))
      return e.indexOf(n) !== -1;
    if (H.isRegExp(n))
      return n.test(e);
  }
}
function of(s) {
  return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function af(s, e) {
  const t = H.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(s, n + t, {
      value: function(i, r, o) {
        return this[n].call(this, e, i, r, o);
      },
      configurable: !0
    });
  });
}
let Kt = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, n) {
    const i = this;
    function r(a, l, c) {
      const u = bs(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const h = H.findKey(i, u);
      (!h || i[h] === void 0 || c === !0 || c === void 0 && i[h] !== !1) && (i[h || l] = Vr(a));
    }
    const o = (a, l) => H.forEach(a, (c, u) => r(c, u, l));
    if (H.isPlainObject(e) || e instanceof this.constructor)
      o(e, t);
    else if (H.isString(e) && (e = e.trim()) && !rf(e))
      o(nf(e), t);
    else if (H.isObject(e) && H.isIterable(e)) {
      let a = {}, l, c;
      for (const u of e) {
        if (!H.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[c = u[0]] = (l = a[c]) ? H.isArray(l) ? [...l, u[1]] : [l, u[1]] : u[1];
      }
      o(a, t);
    } else
      e != null && r(t, e, n);
    return this;
  }
  get(e, t) {
    if (e = bs(e), e) {
      const n = H.findKey(this, e);
      if (n) {
        const i = this[n];
        if (!t)
          return i;
        if (t === !0)
          return sf(i);
        if (H.isFunction(t))
          return t.call(this, i, n);
        if (H.isRegExp(t))
          return t.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = bs(e), e) {
      const n = H.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!t || xo(this, this[n], n, t)));
    }
    return !1;
  }
  delete(e, t) {
    const n = this;
    let i = !1;
    function r(o) {
      if (o = bs(o), o) {
        const a = H.findKey(n, o);
        a && (!t || xo(n, n[a], a, t)) && (delete n[a], i = !0);
      }
    }
    return H.isArray(e) ? e.forEach(r) : r(e), i;
  }
  clear(e) {
    const t = Object.keys(this);
    let n = t.length, i = !1;
    for (; n--; ) {
      const r = t[n];
      (!e || xo(this, this[r], r, e, !0)) && (delete this[r], i = !0);
    }
    return i;
  }
  normalize(e) {
    const t = this, n = {};
    return H.forEach(this, (i, r) => {
      const o = H.findKey(n, r);
      if (o) {
        t[o] = Vr(i), delete t[r];
        return;
      }
      const a = e ? of(r) : String(r).trim();
      a !== r && delete t[r], t[a] = Vr(i), n[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return H.forEach(this, (n, i) => {
      n != null && n !== !1 && (t[i] = e && H.isArray(n) ? n.join(", ") : n);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...t) {
    const n = new this(e);
    return t.forEach((i) => n.set(i)), n;
  }
  static accessor(e) {
    const n = (this[hl] = this[hl] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function r(o) {
      const a = bs(o);
      n[a] || (af(i, o), n[a] = !0);
    }
    return H.isArray(e) ? e.forEach(r) : r(e), this;
  }
};
Kt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
H.reduceDescriptors(Kt.prototype, ({ value: s }, e) => {
  let t = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => s,
    set(n) {
      this[t] = n;
    }
  };
});
H.freezeMethods(Kt);
function Eo(s, e) {
  const t = this || Qs, n = e || t, i = Kt.from(n.headers);
  let r = n.data;
  return H.forEach(s, function(a) {
    r = a.call(t, r, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), r;
}
function Uu(s) {
  return !!(s && s.__CANCEL__);
}
let er = class extends Pe {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(e, t, n) {
    super(e ?? "canceled", Pe.ERR_CANCELED, t, n), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function Nu(s, e, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status) ? s(t) : e(new Pe(
    "Request failed with status code " + t.status,
    [Pe.ERR_BAD_REQUEST, Pe.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function lf(s) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(s);
  return e && e[1] || "";
}
function cf(s, e) {
  s = s || 10;
  const t = new Array(s), n = new Array(s);
  let i = 0, r = 0, o;
  return e = e !== void 0 ? e : 1e3, function(l) {
    const c = Date.now(), u = n[r];
    o || (o = c), t[i] = l, n[i] = c;
    let h = r, d = 0;
    for (; h !== i; )
      d += t[h++], h = h % s;
    if (i = (i + 1) % s, i === r && (r = (r + 1) % s), c - o < e)
      return;
    const m = u && c - u;
    return m ? Math.round(d * 1e3 / m) : void 0;
  };
}
function uf(s, e) {
  let t = 0, n = 1e3 / e, i, r;
  const o = (c, u = Date.now()) => {
    t = u, i = null, r && (clearTimeout(r), r = null), s(...c);
  };
  return [(...c) => {
    const u = Date.now(), h = u - t;
    h >= n ? o(c, u) : (i = c, r || (r = setTimeout(() => {
      r = null, o(i);
    }, n - h)));
  }, () => i && o(i)];
}
const jr = (s, e, t = 3) => {
  let n = 0;
  const i = cf(50, 250);
  return uf((r) => {
    const o = r.loaded, a = r.lengthComputable ? r.total : void 0, l = o - n, c = i(l), u = o <= a;
    n = o;
    const h = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && a && u ? (a - o) / c : void 0,
      event: r,
      lengthComputable: a != null,
      [e ? "download" : "upload"]: !0
    };
    s(h);
  }, t);
}, dl = (s, e) => {
  const t = s != null;
  return [(n) => e[0]({
    lengthComputable: t,
    total: s,
    loaded: n
  }), e[1]];
}, fl = (s) => (...e) => H.asap(() => s(...e)), hf = Vt.hasStandardBrowserEnv ? /* @__PURE__ */ ((s, e) => (t) => (t = new URL(t, Vt.origin), s.protocol === t.protocol && s.host === t.host && (e || s.port === t.port)))(
  new URL(Vt.origin),
  Vt.navigator && /(msie|trident)/i.test(Vt.navigator.userAgent)
) : () => !0, df = Vt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(s, e, t, n, i, r, o) {
      if (typeof document > "u") return;
      const a = [`${s}=${encodeURIComponent(e)}`];
      H.isNumber(t) && a.push(`expires=${new Date(t).toUTCString()}`), H.isString(n) && a.push(`path=${n}`), H.isString(i) && a.push(`domain=${i}`), r === !0 && a.push("secure"), H.isString(o) && a.push(`SameSite=${o}`), document.cookie = a.join("; ");
    },
    read(s) {
      if (typeof document > "u") return null;
      const e = document.cookie.match(new RegExp("(?:^|; )" + s + "=([^;]*)"));
      return e ? decodeURIComponent(e[1]) : null;
    },
    remove(s) {
      this.write(s, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function ff(s) {
  return typeof s != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(s);
}
function pf(s, e) {
  return e ? s.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : s;
}
function Ou(s, e, t) {
  let n = !ff(e);
  return s && (n || t == !1) ? pf(s, e) : e;
}
const pl = (s) => s instanceof Kt ? { ...s } : s;
function bi(s, e) {
  e = e || {};
  const t = {};
  function n(c, u, h, d) {
    return H.isPlainObject(c) && H.isPlainObject(u) ? H.merge.call({ caseless: d }, c, u) : H.isPlainObject(u) ? H.merge({}, u) : H.isArray(u) ? u.slice() : u;
  }
  function i(c, u, h, d) {
    if (H.isUndefined(u)) {
      if (!H.isUndefined(c))
        return n(void 0, c, h, d);
    } else return n(c, u, h, d);
  }
  function r(c, u) {
    if (!H.isUndefined(u))
      return n(void 0, u);
  }
  function o(c, u) {
    if (H.isUndefined(u)) {
      if (!H.isUndefined(c))
        return n(void 0, c);
    } else return n(void 0, u);
  }
  function a(c, u, h) {
    if (h in e)
      return n(c, u);
    if (h in s)
      return n(void 0, c);
  }
  const l = {
    url: r,
    method: r,
    data: r,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (c, u, h) => i(pl(c), pl(u), h, !0)
  };
  return H.forEach(
    Object.keys({ ...s, ...e }),
    function(u) {
      if (u === "__proto__" || u === "constructor" || u === "prototype")
        return;
      const h = H.hasOwnProp(l, u) ? l[u] : i, d = h(s[u], e[u], u);
      H.isUndefined(d) && h !== a || (t[u] = d);
    }
  ), t;
}
const Fu = (s) => {
  const e = bi({}, s);
  let { data: t, withXSRFToken: n, xsrfHeaderName: i, xsrfCookieName: r, headers: o, auth: a } = e;
  if (e.headers = o = Kt.from(o), e.url = Iu(Ou(e.baseURL, e.url, e.allowAbsoluteUrls), s.params, s.paramsSerializer), a && o.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), H.isFormData(t)) {
    if (Vt.hasStandardBrowserEnv || Vt.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if (H.isFunction(t.getHeaders)) {
      const l = t.getHeaders(), c = ["content-type", "content-length"];
      Object.entries(l).forEach(([u, h]) => {
        c.includes(u.toLowerCase()) && o.set(u, h);
      });
    }
  }
  if (Vt.hasStandardBrowserEnv && (n && H.isFunction(n) && (n = n(e)), n || n !== !1 && hf(e.url))) {
    const l = i && r && df.read(r);
    l && o.set(i, l);
  }
  return e;
}, mf = typeof XMLHttpRequest < "u", gf = mf && function(s) {
  return new Promise(function(t, n) {
    const i = Fu(s);
    let r = i.data;
    const o = Kt.from(i.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: c } = i, u, h, d, m, g;
    function _() {
      m && m(), g && g(), i.cancelToken && i.cancelToken.unsubscribe(u), i.signal && i.signal.removeEventListener("abort", u);
    }
    let f = new XMLHttpRequest();
    f.open(i.method.toUpperCase(), i.url, !0), f.timeout = i.timeout;
    function p() {
      if (!f)
        return;
      const y = Kt.from(
        "getAllResponseHeaders" in f && f.getAllResponseHeaders()
      ), R = {
        data: !a || a === "text" || a === "json" ? f.responseText : f.response,
        status: f.status,
        statusText: f.statusText,
        headers: y,
        config: s,
        request: f
      };
      Nu(function(w) {
        t(w), _();
      }, function(w) {
        n(w), _();
      }, R), f = null;
    }
    "onloadend" in f ? f.onloadend = p : f.onreadystatechange = function() {
      !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, f.onabort = function() {
      f && (n(new Pe("Request aborted", Pe.ECONNABORTED, s, f)), f = null);
    }, f.onerror = function(T) {
      const R = T && T.message ? T.message : "Network Error", b = new Pe(R, Pe.ERR_NETWORK, s, f);
      b.event = T || null, n(b), f = null;
    }, f.ontimeout = function() {
      let T = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const R = i.transitional || Oa;
      i.timeoutErrorMessage && (T = i.timeoutErrorMessage), n(new Pe(
        T,
        R.clarifyTimeoutError ? Pe.ETIMEDOUT : Pe.ECONNABORTED,
        s,
        f
      )), f = null;
    }, r === void 0 && o.setContentType(null), "setRequestHeader" in f && H.forEach(o.toJSON(), function(T, R) {
      f.setRequestHeader(R, T);
    }), H.isUndefined(i.withCredentials) || (f.withCredentials = !!i.withCredentials), a && a !== "json" && (f.responseType = i.responseType), c && ([d, g] = jr(c, !0), f.addEventListener("progress", d)), l && f.upload && ([h, m] = jr(l), f.upload.addEventListener("progress", h), f.upload.addEventListener("loadend", m)), (i.cancelToken || i.signal) && (u = (y) => {
      f && (n(!y || y.type ? new er(null, s, f) : y), f.abort(), f = null);
    }, i.cancelToken && i.cancelToken.subscribe(u), i.signal && (i.signal.aborted ? u() : i.signal.addEventListener("abort", u)));
    const E = lf(i.url);
    if (E && Vt.protocols.indexOf(E) === -1) {
      n(new Pe("Unsupported protocol " + E + ":", Pe.ERR_BAD_REQUEST, s));
      return;
    }
    f.send(r || null);
  });
}, _f = (s, e) => {
  const { length: t } = s = s ? s.filter(Boolean) : [];
  if (e || t) {
    let n = new AbortController(), i;
    const r = function(c) {
      if (!i) {
        i = !0, a();
        const u = c instanceof Error ? c : this.reason;
        n.abort(u instanceof Pe ? u : new er(u instanceof Error ? u.message : u));
      }
    };
    let o = e && setTimeout(() => {
      o = null, r(new Pe(`timeout of ${e}ms exceeded`, Pe.ETIMEDOUT));
    }, e);
    const a = () => {
      s && (o && clearTimeout(o), o = null, s.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(r) : c.removeEventListener("abort", r);
      }), s = null);
    };
    s.forEach((c) => c.addEventListener("abort", r));
    const { signal: l } = n;
    return l.unsubscribe = () => H.asap(a), l;
  }
}, vf = function* (s, e) {
  let t = s.byteLength;
  if (t < e) {
    yield s;
    return;
  }
  let n = 0, i;
  for (; n < t; )
    i = n + e, yield s.slice(n, i), n = i;
}, yf = async function* (s, e) {
  for await (const t of xf(s))
    yield* vf(t, e);
}, xf = async function* (s) {
  if (s[Symbol.asyncIterator]) {
    yield* s;
    return;
  }
  const e = s.getReader();
  try {
    for (; ; ) {
      const { done: t, value: n } = await e.read();
      if (t)
        break;
      yield n;
    }
  } finally {
    await e.cancel();
  }
}, ml = (s, e, t, n) => {
  const i = yf(s, e);
  let r = 0, o, a = (l) => {
    o || (o = !0, n && n(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: c, value: u } = await i.next();
        if (c) {
          a(), l.close();
          return;
        }
        let h = u.byteLength;
        if (t) {
          let d = r += h;
          t(d);
        }
        l.enqueue(new Uint8Array(u));
      } catch (c) {
        throw a(c), c;
      }
    },
    cancel(l) {
      return a(l), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, gl = 64 * 1024, { isFunction: sr } = H, Ef = (({ Request: s, Response: e }) => ({
  Request: s,
  Response: e
}))(H.global), {
  ReadableStream: _l,
  TextEncoder: vl
} = H.global, yl = (s, ...e) => {
  try {
    return !!s(...e);
  } catch {
    return !1;
  }
}, Sf = (s) => {
  s = H.merge.call({
    skipUndefined: !0
  }, Ef, s);
  const { fetch: e, Request: t, Response: n } = s, i = e ? sr(e) : typeof fetch == "function", r = sr(t), o = sr(n);
  if (!i)
    return !1;
  const a = i && sr(_l), l = i && (typeof vl == "function" ? /* @__PURE__ */ ((g) => (_) => g.encode(_))(new vl()) : async (g) => new Uint8Array(await new t(g).arrayBuffer())), c = r && a && yl(() => {
    let g = !1;
    const _ = new t(Vt.origin, {
      body: new _l(),
      method: "POST",
      get duplex() {
        return g = !0, "half";
      }
    }).headers.has("Content-Type");
    return g && !_;
  }), u = o && a && yl(() => H.isReadableStream(new n("").body)), h = {
    stream: u && ((g) => g.body)
  };
  i && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((g) => {
    !h[g] && (h[g] = (_, f) => {
      let p = _ && _[g];
      if (p)
        return p.call(_);
      throw new Pe(`Response type '${g}' is not supported`, Pe.ERR_NOT_SUPPORT, f);
    });
  });
  const d = async (g) => {
    if (g == null)
      return 0;
    if (H.isBlob(g))
      return g.size;
    if (H.isSpecCompliantForm(g))
      return (await new t(Vt.origin, {
        method: "POST",
        body: g
      }).arrayBuffer()).byteLength;
    if (H.isArrayBufferView(g) || H.isArrayBuffer(g))
      return g.byteLength;
    if (H.isURLSearchParams(g) && (g = g + ""), H.isString(g))
      return (await l(g)).byteLength;
  }, m = async (g, _) => {
    const f = H.toFiniteNumber(g.getContentLength());
    return f ?? d(_);
  };
  return async (g) => {
    let {
      url: _,
      method: f,
      data: p,
      signal: E,
      cancelToken: y,
      timeout: T,
      onDownloadProgress: R,
      onUploadProgress: b,
      responseType: w,
      headers: G,
      withCredentials: S = "same-origin",
      fetchOptions: A
    } = Fu(g), V = e || fetch;
    w = w ? (w + "").toLowerCase() : "text";
    let J = _f([E, y && y.toAbortSignal()], T), se = null;
    const C = J && J.unsubscribe && (() => {
      J.unsubscribe();
    });
    let P;
    try {
      if (b && c && f !== "get" && f !== "head" && (P = await m(G, p)) !== 0) {
        let z = new t(_, {
          method: "POST",
          body: p,
          duplex: "half"
        }), W;
        if (H.isFormData(p) && (W = z.headers.get("content-type")) && G.setContentType(W), z.body) {
          const [D, Q] = dl(
            P,
            jr(fl(b))
          );
          p = ml(z.body, gl, D, Q);
        }
      }
      H.isString(S) || (S = S ? "include" : "omit");
      const U = r && "credentials" in t.prototype, X = {
        ...A,
        signal: J,
        method: f.toUpperCase(),
        headers: G.normalize().toJSON(),
        body: p,
        duplex: "half",
        credentials: U ? S : void 0
      };
      se = r && new t(_, X);
      let O = await (r ? V(se, A) : V(_, X));
      const $ = u && (w === "stream" || w === "response");
      if (u && (R || $ && C)) {
        const z = {};
        ["status", "statusText", "headers"].forEach((ae) => {
          z[ae] = O[ae];
        });
        const W = H.toFiniteNumber(O.headers.get("content-length")), [D, Q] = R && dl(
          W,
          jr(fl(R), !0)
        ) || [];
        O = new n(
          ml(O.body, gl, D, () => {
            Q && Q(), C && C();
          }),
          z
        );
      }
      w = w || "text";
      let Z = await h[H.findKey(h, w) || "text"](O, g);
      return !$ && C && C(), await new Promise((z, W) => {
        Nu(z, W, {
          data: Z,
          headers: Kt.from(O.headers),
          status: O.status,
          statusText: O.statusText,
          config: g,
          request: se
        });
      });
    } catch (U) {
      throw C && C(), U && U.name === "TypeError" && /Load failed|fetch/i.test(U.message) ? Object.assign(
        new Pe("Network Error", Pe.ERR_NETWORK, g, se, U && U.response),
        {
          cause: U.cause || U
        }
      ) : Pe.from(U, U && U.code, g, se, U && U.response);
    }
  };
}, Mf = /* @__PURE__ */ new Map(), Bu = (s) => {
  let e = s && s.env || {};
  const { fetch: t, Request: n, Response: i } = e, r = [
    n,
    i,
    t
  ];
  let o = r.length, a = o, l, c, u = Mf;
  for (; a--; )
    l = r[a], c = u.get(l), c === void 0 && u.set(l, c = a ? /* @__PURE__ */ new Map() : Sf(e)), u = c;
  return c;
};
Bu();
const Ba = {
  http: Vd,
  xhr: gf,
  fetch: {
    get: Bu
  }
};
H.forEach(Ba, (s, e) => {
  if (s) {
    try {
      Object.defineProperty(s, "name", { value: e });
    } catch {
    }
    Object.defineProperty(s, "adapterName", { value: e });
  }
});
const xl = (s) => `- ${s}`, Af = (s) => H.isFunction(s) || s === null || s === !1;
function Tf(s, e) {
  s = H.isArray(s) ? s : [s];
  const { length: t } = s;
  let n, i;
  const r = {};
  for (let o = 0; o < t; o++) {
    n = s[o];
    let a;
    if (i = n, !Af(n) && (i = Ba[(a = String(n)).toLowerCase()], i === void 0))
      throw new Pe(`Unknown adapter '${a}'`);
    if (i && (H.isFunction(i) || (i = i.get(e))))
      break;
    r[a || "#" + o] = i;
  }
  if (!i) {
    const o = Object.entries(r).map(
      ([l, c]) => `adapter ${l} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = t ? o.length > 1 ? `since :
` + o.map(xl).join(`
`) : " " + xl(o[0]) : "as no adapter specified";
    throw new Pe(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return i;
}
const Vu = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Tf,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ba
};
function So(s) {
  if (s.cancelToken && s.cancelToken.throwIfRequested(), s.signal && s.signal.aborted)
    throw new er(null, s);
}
function El(s) {
  return So(s), s.headers = Kt.from(s.headers), s.data = Eo.call(
    s,
    s.transformRequest
  ), ["post", "put", "patch"].indexOf(s.method) !== -1 && s.headers.setContentType("application/x-www-form-urlencoded", !1), Vu.getAdapter(s.adapter || Qs.adapter, s)(s).then(function(n) {
    return So(s), n.data = Eo.call(
      s,
      s.transformResponse,
      n
    ), n.headers = Kt.from(n.headers), n;
  }, function(n) {
    return Uu(n) || (So(s), n && n.response && (n.response.data = Eo.call(
      s,
      s.transformResponse,
      n.response
    ), n.response.headers = Kt.from(n.response.headers))), Promise.reject(n);
  });
}
const zu = "1.13.5", oo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((s, e) => {
  oo[s] = function(n) {
    return typeof n === s || "a" + (e < 1 ? "n " : " ") + s;
  };
});
const Sl = {};
oo.transitional = function(e, t, n) {
  function i(r, o) {
    return "[Axios v" + zu + "] Transitional option '" + r + "'" + o + (n ? ". " + n : "");
  }
  return (r, o, a) => {
    if (e === !1)
      throw new Pe(
        i(o, " has been removed" + (t ? " in " + t : "")),
        Pe.ERR_DEPRECATED
      );
    return t && !Sl[o] && (Sl[o] = !0, console.warn(
      i(
        o,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(r, o, a) : !0;
  };
};
oo.spelling = function(e) {
  return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
};
function bf(s, e, t) {
  if (typeof s != "object")
    throw new Pe("options must be an object", Pe.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(s);
  let i = n.length;
  for (; i-- > 0; ) {
    const r = n[i], o = e[r];
    if (o) {
      const a = s[r], l = a === void 0 || o(a, r, s);
      if (l !== !0)
        throw new Pe("option " + r + " must be " + l, Pe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new Pe("Unknown option " + r, Pe.ERR_BAD_OPTION);
  }
}
const zr = {
  assertOptions: bf,
  validators: oo
}, nn = zr.validators;
let Si = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new ul(),
      response: new ul()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, t) {
    try {
      return await this._request(e, t);
    } catch (n) {
      if (n instanceof Error) {
        let i = {};
        Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error();
        const r = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? r && !String(n.stack).endsWith(r.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + r) : n.stack = r;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(e, t) {
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = bi(this.defaults, t);
    const { transitional: n, paramsSerializer: i, headers: r } = t;
    n !== void 0 && zr.assertOptions(n, {
      silentJSONParsing: nn.transitional(nn.boolean),
      forcedJSONParsing: nn.transitional(nn.boolean),
      clarifyTimeoutError: nn.transitional(nn.boolean),
      legacyInterceptorReqResOrdering: nn.transitional(nn.boolean)
    }, !1), i != null && (H.isFunction(i) ? t.paramsSerializer = {
      serialize: i
    } : zr.assertOptions(i, {
      encode: nn.function,
      serialize: nn.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), zr.assertOptions(t, {
      baseUrl: nn.spelling("baseURL"),
      withXsrfToken: nn.spelling("withXSRFToken")
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let o = r && H.merge(
      r.common,
      r[t.method]
    );
    r && H.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete r[g];
      }
    ), t.headers = Kt.concat(o, r);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(_) {
      if (typeof _.runWhen == "function" && _.runWhen(t) === !1)
        return;
      l = l && _.synchronous;
      const f = t.transitional || Oa;
      f && f.legacyInterceptorReqResOrdering ? a.unshift(_.fulfilled, _.rejected) : a.push(_.fulfilled, _.rejected);
    });
    const c = [];
    this.interceptors.response.forEach(function(_) {
      c.push(_.fulfilled, _.rejected);
    });
    let u, h = 0, d;
    if (!l) {
      const g = [El.bind(this), void 0];
      for (g.unshift(...a), g.push(...c), d = g.length, u = Promise.resolve(t); h < d; )
        u = u.then(g[h++], g[h++]);
      return u;
    }
    d = a.length;
    let m = t;
    for (; h < d; ) {
      const g = a[h++], _ = a[h++];
      try {
        m = g(m);
      } catch (f) {
        _.call(this, f);
        break;
      }
    }
    try {
      u = El.call(this, m);
    } catch (g) {
      return Promise.reject(g);
    }
    for (h = 0, d = c.length; h < d; )
      u = u.then(c[h++], c[h++]);
    return u;
  }
  getUri(e) {
    e = bi(this.defaults, e);
    const t = Ou(e.baseURL, e.url, e.allowAbsoluteUrls);
    return Iu(t, e.params, e.paramsSerializer);
  }
};
H.forEach(["delete", "get", "head", "options"], function(e) {
  Si.prototype[e] = function(t, n) {
    return this.request(bi(n || {}, {
      method: e,
      url: t,
      data: (n || {}).data
    }));
  };
});
H.forEach(["post", "put", "patch"], function(e) {
  function t(n) {
    return function(r, o, a) {
      return this.request(bi(a || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: r,
        data: o
      }));
    };
  }
  Si.prototype[e] = t(), Si.prototype[e + "Form"] = t(!0);
});
let wf = class ku {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(r) {
      t = r;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners) return;
      let r = n._listeners.length;
      for (; r-- > 0; )
        n._listeners[r](i);
      n._listeners = null;
    }), this.promise.then = (i) => {
      let r;
      const o = new Promise((a) => {
        n.subscribe(a), r = a;
      }).then(i);
      return o.cancel = function() {
        n.unsubscribe(r);
      }, o;
    }, e(function(r, o, a) {
      n.reason || (n.reason = new er(r, o, a), t(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const t = this._listeners.indexOf(e);
    t !== -1 && this._listeners.splice(t, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), t = (n) => {
      e.abort(n);
    };
    return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new ku(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
};
function Rf(s) {
  return function(t) {
    return s.apply(null, t);
  };
}
function Cf(s) {
  return H.isObject(s) && s.isAxiosError === !0;
}
const pa = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(pa).forEach(([s, e]) => {
  pa[e] = s;
});
function Hu(s) {
  const e = new Si(s), t = Eu(Si.prototype.request, e);
  return H.extend(t, Si.prototype, e, { allOwnKeys: !0 }), H.extend(t, e, null, { allOwnKeys: !0 }), t.create = function(i) {
    return Hu(bi(s, i));
  }, t;
}
const xt = Hu(Qs);
xt.Axios = Si;
xt.CanceledError = er;
xt.CancelToken = wf;
xt.isCancel = Uu;
xt.VERSION = zu;
xt.toFormData = ro;
xt.AxiosError = Pe;
xt.Cancel = xt.CanceledError;
xt.all = function(e) {
  return Promise.all(e);
};
xt.spread = Rf;
xt.isAxiosError = Cf;
xt.mergeConfig = bi;
xt.AxiosHeaders = Kt;
xt.formToJSON = (s) => Du(H.isHTMLForm(s) ? new FormData(s) : s);
xt.getAdapter = Vu.getAdapter;
xt.HttpStatusCode = pa;
xt.default = xt;
const {
  Axios: $E,
  AxiosError: JE,
  CanceledError: ZE,
  isCancel: QE,
  CancelToken: eS,
  VERSION: tS,
  all: nS,
  Cancel: iS,
  isAxiosError: sS,
  spread: rS,
  toFormData: oS,
  AxiosHeaders: aS,
  HttpStatusCode: lS,
  formToJSON: cS,
  getAdapter: uS,
  mergeConfig: hS
} = xt;
let Ws = null, Xr = null;
function Lf(s) {
  Xr = s, Ws = xt.create({
    baseURL: s.apiUrl,
    timeout: 6e4,
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": s.apiKey
    }
  }), Ws.interceptors.response.use(
    (e) => e,
    (e) => Promise.reject(e)
  );
}
function Pf() {
  if (!Ws)
    throw new Error("[LiyaAiEnvVuejs] API client not initialized. Call liyaAiEnvVuejsInitializeClient first.");
  return Ws;
}
function _s() {
  if (!Xr)
    throw new Error("[LiyaAiEnvVuejs] Config not initialized. Call liyaAiEnvVuejsInitializeClient first.");
  return Xr;
}
function dS() {
  return Ws !== null && Xr !== null;
}
async function Pi(s, e, t) {
  var i, r, o, a;
  const n = Pf();
  try {
    return (await n.request({
      method: s,
      url: e,
      data: t
    })).data;
  } catch (l) {
    return xt.isAxiosError(l) ? {
      status: "error",
      message: ((r = (i = l.response) == null ? void 0 : i.data) == null ? void 0 : r.message) || l.message,
      code: ((a = (o = l.response) == null ? void 0 : o.data) == null ? void 0 : a.code) || void 0
    } : {
      status: "error",
      message: "An unexpected error occurred"
    };
  }
}
class Gu extends Error {
  constructor(t, n) {
    super(t);
    yo(this, "code");
    this.code = n, this.name = "LiyaAiEnvVuejsApiError";
  }
}
async function If(s, e) {
  const n = {
    assistant_id: _s().assistantId,
    message: s,
    session_id: e
  }, i = await Pi(
    "POST",
    "/api/v1/external/chat/",
    n
  );
  if (i.status === "success" && i.data)
    return i.data;
  if (i.code)
    throw new Gu(i.message || "API error", i.code);
  return null;
}
async function Df(s, e) {
  const t = {
    text: s,
    voice: (e == null ? void 0 : e.voice) || "nova",
    speed: (e == null ? void 0 : e.speed) || 1,
    include_audio: (e == null ? void 0 : e.include_audio) ?? !0,
    include_gestures: (e == null ? void 0 : e.include_gestures) ?? !0
  }, n = await Pi(
    "POST",
    "/api/v1/external/avatar/speech/",
    t
  );
  return n.status === "success" && n.data ? n.data : null;
}
async function fS(s) {
  const e = await Pi(
    "GET",
    `/api/v1/external/sessions/${s}/messages/`
  );
  return e.status === "success" && e.data ? e.data.messages : [];
}
class Va extends Error {
  constructor(t, n) {
    super(t);
    yo(this, "code");
    this.code = n, this.name = "LiyaAiEnvVuejsAvatarApiError";
  }
}
async function Wu(s) {
  const t = _s().assistantId, n = t ? `?assistant_id=${t}` : "", i = await Pi(
    "GET",
    `/api/v1/external/avatar/model/${n}`
  );
  if (i.status === "success" && i.data)
    return i.data;
  throw new Va(
    i.message || "Failed to get avatar model",
    "AVATAR_MODEL_ERROR"
  );
}
async function ju(s) {
  const t = _s().assistantId, n = t ? `?assistant_id=${t}` : "", i = await Pi(
    "GET",
    `/api/v1/external/scene/background/${n}`
  );
  if (i.status === "success" && i.data)
    return i.data;
  throw new Va(
    i.message || "Failed to get scene background",
    "SCENE_BACKGROUND_ERROR"
  );
}
async function Uf(s) {
  const e = _s(), t = s || e.assistantId, n = t ? `?assistant_id=${t}` : "", i = await Pi(
    "GET",
    `/api/v1/external/presentations/${n}`
  );
  return i.status === "success" && i.data ? i.data : [];
}
async function Xu() {
  const s = await Pi(
    "GET",
    "/api/v1/external/user/access/"
  );
  if (s.status === "success" && s.data)
    return s.data;
  throw new Va(
    s.message || "Failed to check user access",
    "USER_ACCESS_ERROR"
  );
}
const Nf = {
  tr: {
    status: {
      ready: "Hazır",
      listening: "Dinliyorum...",
      preparing: "Hazırlanıyor...",
      speaking: "Konuşuyor...",
      online: "Çevrimiçi"
    },
    preparingMessages: [
      "Hazırlanıyor...",
      "Düşünüyorum... 🤔",
      "Biraz daha bekleyin...",
      "Cevabı hazırlıyorum... ✍️",
      "Neredeyse bitti... ⏳",
      "Az kaldı, sabırlı olun... 😊",
      "Detaylı bir cevap geliyor...",
      "Hâlâ düşünüyorum... 🧠",
      "Bu güzel bir soru, biraz zaman alıyor...",
      "Son rötuşlar... ✨"
    ],
    chat: {
      placeholder: "Mesajınızı yazın...",
      premiumRequired: "Premium abonelik gerekli",
      userRole: "Sen",
      emptyWelcome: "Merhaba! Size nasıl yardımcı olabilirim?"
    },
    welcomeSuggestions: [
      "Kendini tanıt",
      "Konu hakkında özet bilgi ver",
      "Derse başla"
    ],
    voice: {
      startRecording: "Konuşmaya başla",
      stopRecording: "Dinlemeyi durdur",
      listening: "Dinliyorum...",
      thinking: "Düşünüyorum...",
      pressToSpeak: "Konuşmak için mikrofona basın"
    },
    controls: {
      close: "Kapat",
      back: "Geri",
      cancel: "İptal",
      replay: "Tekrar Oynat",
      pressAndSpeak: "Bas ve Konuş"
    },
    premium: {
      title: "Premium Özellik",
      upgradePremium: "Bu özelliği kullanmak için Premium veya Premium Plus abonelik gereklidir.",
      upgradePremiumPlus: "Bu özelliği kullanmak için Premium Plus abonelik gereklidir.",
      viewPlans: "Planları İncele"
    },
    errors: {
      problemOccurred: "Bir sorun oluştu",
      tryAgainLater: "En kısa zamanda çözülecektir. Lütfen daha sonra tekrar deneyin.",
      connectionError: "Bağlantı hatası oluştu",
      sendError: "Mesaj gönderilemedi"
    },
    branding: {
      environmentTitle: "Liya AI Environment"
    }
  },
  en: {
    status: {
      ready: "Ready",
      listening: "Listening...",
      preparing: "Preparing...",
      speaking: "Speaking...",
      online: "Online"
    },
    preparingMessages: [
      "Preparing...",
      "Thinking... 🤔",
      "Hold on a moment...",
      "Preparing the answer... ✍️",
      "Almost done... ⏳",
      "Just a bit more, please be patient... 😊",
      "A detailed answer is coming...",
      "Still thinking... 🧠",
      "Great question, it takes a moment...",
      "Final touches... ✨"
    ],
    chat: {
      placeholder: "Type your message...",
      premiumRequired: "Premium subscription required",
      userRole: "You",
      emptyWelcome: "Hello! How can I help you?"
    },
    welcomeSuggestions: [
      "Introduce yourself",
      "Give a summary about the topic",
      "Start the lesson"
    ],
    voice: {
      startRecording: "Start speaking",
      stopRecording: "Stop listening",
      listening: "Listening...",
      thinking: "Thinking...",
      pressToSpeak: "Press the microphone to speak"
    },
    controls: {
      close: "Close",
      back: "Back",
      cancel: "Cancel",
      replay: "Replay",
      pressAndSpeak: "Press & Speak"
    },
    premium: {
      title: "Premium Feature",
      upgradePremium: "A Premium or Premium Plus subscription is required to use this feature.",
      upgradePremiumPlus: "A Premium Plus subscription is required to use this feature.",
      viewPlans: "View Plans"
    },
    errors: {
      problemOccurred: "A problem occurred",
      tryAgainLater: "It will be resolved as soon as possible. Please try again later.",
      connectionError: "Connection error occurred",
      sendError: "Failed to send message"
    },
    branding: {
      environmentTitle: "Liya AI Environment"
    }
  }
};
function kr(s) {
  return s === "tr" || s === "en";
}
function Of() {
  if (typeof window > "u" || typeof navigator > "u")
    return "tr";
  const e = (navigator.language || navigator.userLanguage || "").split("-")[0].toLowerCase();
  return kr(e) ? e : "tr";
}
const ai = Ke("tr");
function za() {
  const s = Fe(() => ai.value), e = Fe(() => Nf[ai.value]);
  function t(i) {
    kr(i) ? ai.value = i : ai.value = "tr";
  }
  function n(i) {
    i && kr(i) ? ai.value = i : i ? ai.value = "tr" : ai.value = Of();
  }
  return {
    locale: vu(s),
    t: e,
    setLocale: t,
    initLocale: n,
    liyaAiEnvVuejsIsSupportedLocale: kr
  };
}
const pS = {
  install(s, e) {
    if (!e.apiKey) {
      console.error("[LiyaAiEnvVuejs] apiKey is required");
      return;
    }
    if (!e.apiUrl) {
      console.error("[LiyaAiEnvVuejs] apiUrl is required");
      return;
    }
    if (!e.assistantId) {
      console.error("[LiyaAiEnvVuejs] assistantId is required");
      return;
    }
    Lf(e);
    const { initLocale: t } = za();
    t(e.locale), s.config.globalProperties.$liyaAiEnvVuejs = {
      config: e
    }, s.provide("liyaAiEnvVuejsConfig", e);
  }
};
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const ka = "160", Ff = 0, Ml = 1, Bf = 2, qu = 1, Yu = 2, Fn = 3, zn = 0, $t = 1, An = 2, ti = 0, is = 1, Al = 2, Tl = 3, bl = 4, Vf = 5, gi = 100, zf = 101, kf = 102, wl = 103, Rl = 104, Hf = 200, Gf = 201, Wf = 202, jf = 203, ma = 204, ga = 205, Xf = 206, qf = 207, Yf = 208, Kf = 209, $f = 210, Jf = 211, Zf = 212, Qf = 213, ep = 214, tp = 0, np = 1, ip = 2, qr = 3, sp = 4, rp = 5, op = 6, ap = 7, Ku = 0, lp = 1, cp = 2, ni = 0, up = 1, hp = 2, dp = 3, $u = 4, fp = 5, pp = 6, Cl = "attached", mp = "detached", Ju = 300, as = 301, ls = 302, _a = 303, va = 304, ao = 306, cs = 1e3, on = 1001, Yr = 1002, Ct = 1003, ya = 1004, Hr = 1005, qt = 1006, Zu = 1007, wi = 1008, ii = 1009, gp = 1010, _p = 1011, Ha = 1012, Qu = 1013, Qn = 1014, Bn = 1015, js = 1016, eh = 1017, th = 1018, Mi = 1020, vp = 1021, an = 1023, yp = 1024, xp = 1025, Ai = 1026, us = 1027, Ep = 1028, nh = 1029, Sp = 1030, ih = 1031, sh = 1033, Mo = 33776, Ao = 33777, To = 33778, bo = 33779, Ll = 35840, Pl = 35841, Il = 35842, Dl = 35843, rh = 36196, Ul = 37492, Nl = 37496, Ol = 37808, Fl = 37809, Bl = 37810, Vl = 37811, zl = 37812, kl = 37813, Hl = 37814, Gl = 37815, Wl = 37816, jl = 37817, Xl = 37818, ql = 37819, Yl = 37820, Kl = 37821, wo = 36492, $l = 36494, Jl = 36495, Mp = 36283, Zl = 36284, Ql = 36285, ec = 36286, Ap = 2200, Tp = 2201, bp = 2202, Xs = 2300, hs = 2301, Ro = 2302, Qi = 2400, es = 2401, Kr = 2402, Ga = 2500, wp = 2501, Rp = 0, oh = 1, xa = 2, ah = 3e3, Ti = 3001, Cp = 3200, Lp = 3201, lh = 0, Pp = 1, ln = "", mt = "srgb", Lt = "srgb-linear", Wa = "display-p3", lo = "display-p3-linear", $r = "linear", ht = "srgb", Jr = "rec709", Zr = "p3", Di = 7680, tc = 519, Ip = 512, Dp = 513, Up = 514, ch = 515, Np = 516, Op = 517, Fp = 518, Bp = 519, Ea = 35044, nc = "300 es", Sa = 1035, Vn = 2e3, Qr = 2001;
class Ii {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, o = i.length; r < o; r++)
        i[r].call(this, e);
      e.target = null;
    }
  }
}
const Ot = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let ic = 1234567;
const Vs = Math.PI / 180, ds = 180 / Math.PI;
function gn() {
  const s = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Ot[s & 255] + Ot[s >> 8 & 255] + Ot[s >> 16 & 255] + Ot[s >> 24 & 255] + "-" + Ot[e & 255] + Ot[e >> 8 & 255] + "-" + Ot[e >> 16 & 15 | 64] + Ot[e >> 24 & 255] + "-" + Ot[t & 63 | 128] + Ot[t >> 8 & 255] + "-" + Ot[t >> 16 & 255] + Ot[t >> 24 & 255] + Ot[n & 255] + Ot[n >> 8 & 255] + Ot[n >> 16 & 255] + Ot[n >> 24 & 255]).toLowerCase();
}
function Bt(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function ja(s, e) {
  return (s % e + e) % e;
}
function Vp(s, e, t, n, i) {
  return n + (s - e) * (i - n) / (t - e);
}
function zp(s, e, t) {
  return s !== e ? (t - s) / (e - s) : 0;
}
function zs(s, e, t) {
  return (1 - t) * s + t * e;
}
function kp(s, e, t, n) {
  return zs(s, e, 1 - Math.exp(-t * n));
}
function Hp(s, e = 1) {
  return e - Math.abs(ja(s, e * 2) - e);
}
function Gp(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * (3 - 2 * s));
}
function Wp(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * s * (s * (s * 6 - 15) + 10));
}
function jp(s, e) {
  return s + Math.floor(Math.random() * (e - s + 1));
}
function Xp(s, e) {
  return s + Math.random() * (e - s);
}
function qp(s) {
  return s * (0.5 - Math.random());
}
function Yp(s) {
  s !== void 0 && (ic = s);
  let e = ic += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Kp(s) {
  return s * Vs;
}
function $p(s) {
  return s * ds;
}
function Ma(s) {
  return (s & s - 1) === 0 && s !== 0;
}
function Jp(s) {
  return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function eo(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function Zp(s, e, t, n, i) {
  const r = Math.cos, o = Math.sin, a = r(t / 2), l = o(t / 2), c = r((e + n) / 2), u = o((e + n) / 2), h = r((e - n) / 2), d = o((e - n) / 2), m = r((n - e) / 2), g = o((n - e) / 2);
  switch (i) {
    case "XYX":
      s.set(a * u, l * h, l * d, a * c);
      break;
    case "YZY":
      s.set(l * d, a * u, l * h, a * c);
      break;
    case "ZXZ":
      s.set(l * h, l * d, a * u, a * c);
      break;
    case "XZX":
      s.set(a * u, l * g, l * m, a * c);
      break;
    case "YXY":
      s.set(l * m, a * u, l * g, a * c);
      break;
    case "ZYZ":
      s.set(l * g, l * m, a * u, a * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function Tn(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return s / 4294967295;
    case Uint16Array:
      return s / 65535;
    case Uint8Array:
      return s / 255;
    case Int32Array:
      return Math.max(s / 2147483647, -1);
    case Int16Array:
      return Math.max(s / 32767, -1);
    case Int8Array:
      return Math.max(s / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function at(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return Math.round(s * 4294967295);
    case Uint16Array:
      return Math.round(s * 65535);
    case Uint8Array:
      return Math.round(s * 255);
    case Int32Array:
      return Math.round(s * 2147483647);
    case Int16Array:
      return Math.round(s * 32767);
    case Int8Array:
      return Math.round(s * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Qp = {
  DEG2RAD: Vs,
  RAD2DEG: ds,
  generateUUID: gn,
  clamp: Bt,
  euclideanModulo: ja,
  mapLinear: Vp,
  inverseLerp: zp,
  lerp: zs,
  damp: kp,
  pingpong: Hp,
  smoothstep: Gp,
  smootherstep: Wp,
  randInt: jp,
  randFloat: Xp,
  randFloatSpread: qp,
  seededRandom: Yp,
  degToRad: Kp,
  radToDeg: $p,
  isPowerOfTwo: Ma,
  ceilPowerOfTwo: Jp,
  floorPowerOfTwo: eo,
  setQuaternionFromProperEuler: Zp,
  normalize: at,
  denormalize: Tn
};
class Je {
  constructor(e = 0, t = 0) {
    Je.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Bt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = this.x - e.x, o = this.y - e.y;
    return this.x = r * n - o * i + e.x, this.y = r * i + o * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class qe {
  constructor(e, t, n, i, r, o, a, l, c) {
    qe.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, r, o, a, l, c);
  }
  set(e, t, n, i, r, o, a, l, c) {
    const u = this.elements;
    return u[0] = e, u[1] = i, u[2] = a, u[3] = t, u[4] = r, u[5] = l, u[6] = n, u[7] = o, u[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], u = n[4], h = n[7], d = n[2], m = n[5], g = n[8], _ = i[0], f = i[3], p = i[6], E = i[1], y = i[4], T = i[7], R = i[2], b = i[5], w = i[8];
    return r[0] = o * _ + a * E + l * R, r[3] = o * f + a * y + l * b, r[6] = o * p + a * T + l * w, r[1] = c * _ + u * E + h * R, r[4] = c * f + u * y + h * b, r[7] = c * p + u * T + h * w, r[2] = d * _ + m * E + g * R, r[5] = d * f + m * y + g * b, r[8] = d * p + m * T + g * w, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8];
    return t * o * u - t * a * c - n * r * u + n * a * l + i * r * c - i * o * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], h = u * o - a * c, d = a * l - u * r, m = c * r - o * l, g = t * h + n * d + i * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return e[0] = h * _, e[1] = (i * c - u * n) * _, e[2] = (a * n - i * o) * _, e[3] = d * _, e[4] = (u * t - i * l) * _, e[5] = (i * r - a * t) * _, e[6] = m * _, e[7] = (n * l - c * t) * _, e[8] = (o * t - n * r) * _, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, r, o, a) {
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(
      n * l,
      n * c,
      -n * (l * o + c * a) + o + e,
      -i * c,
      i * l,
      -i * (-c * o + l * a) + a + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(Co.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Co.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Co.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Co = /* @__PURE__ */ new qe();
function uh(s) {
  for (let e = s.length - 1; e >= 0; --e)
    if (s[e] >= 65535) return !0;
  return !1;
}
function qs(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function em() {
  const s = qs("canvas");
  return s.style.display = "block", s;
}
const sc = {};
function ks(s) {
  s in sc || (sc[s] = !0, console.warn(s));
}
const rc = /* @__PURE__ */ new qe().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), oc = /* @__PURE__ */ new qe().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), rr = {
  [Lt]: {
    transfer: $r,
    primaries: Jr,
    toReference: (s) => s,
    fromReference: (s) => s
  },
  [mt]: {
    transfer: ht,
    primaries: Jr,
    toReference: (s) => s.convertSRGBToLinear(),
    fromReference: (s) => s.convertLinearToSRGB()
  },
  [lo]: {
    transfer: $r,
    primaries: Zr,
    toReference: (s) => s.applyMatrix3(oc),
    fromReference: (s) => s.applyMatrix3(rc)
  },
  [Wa]: {
    transfer: ht,
    primaries: Zr,
    toReference: (s) => s.convertSRGBToLinear().applyMatrix3(oc),
    fromReference: (s) => s.applyMatrix3(rc).convertLinearToSRGB()
  }
}, tm = /* @__PURE__ */ new Set([Lt, lo]), st = {
  enabled: !0,
  _workingColorSpace: Lt,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(s) {
    if (!tm.has(s))
      throw new Error(`Unsupported working color space, "${s}".`);
    this._workingColorSpace = s;
  },
  convert: function(s, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return s;
    const n = rr[e].toReference, i = rr[t].fromReference;
    return i(n(s));
  },
  fromWorkingColorSpace: function(s, e) {
    return this.convert(s, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(s, e) {
    return this.convert(s, e, this._workingColorSpace);
  },
  getPrimaries: function(s) {
    return rr[s].primaries;
  },
  getTransfer: function(s) {
    return s === ln ? $r : rr[s].transfer;
  }
};
function ss(s) {
  return s < 0.04045 ? s * 0.0773993808 : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function Lo(s) {
  return s < 31308e-7 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
let Ui;
class hh {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Ui === void 0 && (Ui = qs("canvas")), Ui.width = e.width, Ui.height = e.height;
      const n = Ui.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Ui;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = qs("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
      for (let o = 0; o < r.length; o++)
        r[o] = ss(r[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(ss(t[n] / 255) * 255) : t[n] = ss(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let nm = 0;
class dh {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: nm++ }), this.uuid = gn(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let o = 0, a = i.length; o < a; o++)
          i[o].isDataTexture ? r.push(Po(i[o].image)) : r.push(Po(i[o]));
      } else
        r = Po(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Po(s) {
  return typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s instanceof ImageBitmap ? hh.getDataURL(s) : s.data ? {
    data: Array.from(s.data),
    width: s.width,
    height: s.height,
    type: s.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let im = 0;
class Dt extends Ii {
  constructor(e = Dt.DEFAULT_IMAGE, t = Dt.DEFAULT_MAPPING, n = on, i = on, r = qt, o = wi, a = an, l = ii, c = Dt.DEFAULT_ANISOTROPY, u = ln) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: im++ }), this.uuid = gn(), this.name = "", this.source = new dh(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new Je(0, 0), this.repeat = new Je(1, 1), this.center = new Je(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new qe(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof u == "string" ? this.colorSpace = u : (ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = u === Ti ? mt : ln), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Ju) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case cs:
          e.x = e.x - Math.floor(e.x);
          break;
        case on:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Yr:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case cs:
          e.y = e.y - Math.floor(e.y);
          break;
        case on:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Yr:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === mt ? Ti : ah;
  }
  set encoding(e) {
    ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === Ti ? mt : ln;
  }
}
Dt.DEFAULT_IMAGE = null;
Dt.DEFAULT_MAPPING = Ju;
Dt.DEFAULT_ANISOTROPY = 1;
class ct {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    ct.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * r, this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * r, this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * r, this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * r, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    const l = e.elements, c = l[0], u = l[4], h = l[8], d = l[1], m = l[5], g = l[9], _ = l[2], f = l[6], p = l[10];
    if (Math.abs(u - d) < 0.01 && Math.abs(h - _) < 0.01 && Math.abs(g - f) < 0.01) {
      if (Math.abs(u + d) < 0.1 && Math.abs(h + _) < 0.1 && Math.abs(g + f) < 0.1 && Math.abs(c + m + p - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const y = (c + 1) / 2, T = (m + 1) / 2, R = (p + 1) / 2, b = (u + d) / 4, w = (h + _) / 4, G = (g + f) / 4;
      return y > T && y > R ? y < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(y), i = b / n, r = w / n) : T > R ? T < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(T), n = b / i, r = G / i) : R < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(R), n = w / r, i = G / r), this.set(n, i, r, t), this;
    }
    let E = Math.sqrt((f - g) * (f - g) + (h - _) * (h - _) + (d - u) * (d - u));
    return Math.abs(E) < 1e-3 && (E = 1), this.x = (f - g) / E, this.y = (h - _) / E, this.z = (d - u) / E, this.w = Math.acos((c + m + p - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class sm extends Ii {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new ct(0, 0, e, t), this.scissorTest = !1, this.viewport = new ct(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (ks("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === Ti ? mt : ln), n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: qt,
      depthBuffer: !0,
      stencilBuffer: !1,
      depthTexture: null,
      samples: 0
    }, n), this.texture = new Dt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps, this.texture.internalFormat = n.internalFormat, this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new dh(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Ri extends sm {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class fh extends Dt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = Ct, this.minFilter = Ct, this.wrapR = on, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class rm extends Dt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = Ct, this.minFilter = Ct, this.wrapR = on, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class _n {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, r, o, a) {
    let l = n[i + 0], c = n[i + 1], u = n[i + 2], h = n[i + 3];
    const d = r[o + 0], m = r[o + 1], g = r[o + 2], _ = r[o + 3];
    if (a === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
      return;
    }
    if (a === 1) {
      e[t + 0] = d, e[t + 1] = m, e[t + 2] = g, e[t + 3] = _;
      return;
    }
    if (h !== _ || l !== d || c !== m || u !== g) {
      let f = 1 - a;
      const p = l * d + c * m + u * g + h * _, E = p >= 0 ? 1 : -1, y = 1 - p * p;
      if (y > Number.EPSILON) {
        const R = Math.sqrt(y), b = Math.atan2(R, p * E);
        f = Math.sin(f * b) / R, a = Math.sin(a * b) / R;
      }
      const T = a * E;
      if (l = l * f + d * T, c = c * f + m * T, u = u * f + g * T, h = h * f + _ * T, f === 1 - a) {
        const R = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
        l *= R, c *= R, u *= R, h *= R;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, o) {
    const a = n[i], l = n[i + 1], c = n[i + 2], u = n[i + 3], h = r[o], d = r[o + 1], m = r[o + 2], g = r[o + 3];
    return e[t] = a * g + u * h + l * m - c * d, e[t + 1] = l * g + u * d + c * h - a * m, e[t + 2] = c * g + u * m + a * d - l * h, e[t + 3] = u * g - a * h - l * d - c * m, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, i = e._y, r = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(n / 2), u = a(i / 2), h = a(r / 2), d = l(n / 2), m = l(i / 2), g = l(r / 2);
    switch (o) {
      case "XYZ":
        this._x = d * u * h + c * m * g, this._y = c * m * h - d * u * g, this._z = c * u * g + d * m * h, this._w = c * u * h - d * m * g;
        break;
      case "YXZ":
        this._x = d * u * h + c * m * g, this._y = c * m * h - d * u * g, this._z = c * u * g - d * m * h, this._w = c * u * h + d * m * g;
        break;
      case "ZXY":
        this._x = d * u * h - c * m * g, this._y = c * m * h + d * u * g, this._z = c * u * g + d * m * h, this._w = c * u * h - d * m * g;
        break;
      case "ZYX":
        this._x = d * u * h - c * m * g, this._y = c * m * h + d * u * g, this._z = c * u * g - d * m * h, this._w = c * u * h + d * m * g;
        break;
      case "YZX":
        this._x = d * u * h + c * m * g, this._y = c * m * h + d * u * g, this._z = c * u * g - d * m * h, this._w = c * u * h - d * m * g;
        break;
      case "XZY":
        this._x = d * u * h - c * m * g, this._y = c * m * h - d * u * g, this._z = c * u * g + d * m * h, this._w = c * u * h + d * m * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], r = t[8], o = t[1], a = t[5], l = t[9], c = t[2], u = t[6], h = t[10], d = n + a + h;
    if (d > 0) {
      const m = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / m, this._x = (u - l) * m, this._y = (r - c) * m, this._z = (o - i) * m;
    } else if (n > a && n > h) {
      const m = 2 * Math.sqrt(1 + n - a - h);
      this._w = (u - l) / m, this._x = 0.25 * m, this._y = (i + o) / m, this._z = (r + c) / m;
    } else if (a > h) {
      const m = 2 * Math.sqrt(1 + a - n - h);
      this._w = (r - c) / m, this._x = (i + o) / m, this._y = 0.25 * m, this._z = (l + u) / m;
    } else {
      const m = 2 * Math.sqrt(1 + h - n - a);
      this._w = (o - i) / m, this._x = (r + c) / m, this._y = (l + u) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Bt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, r = e._z, o = e._w, a = t._x, l = t._y, c = t._z, u = t._w;
    return this._x = n * u + o * a + i * c - r * l, this._y = i * u + o * l + r * a - n * c, this._z = r * u + o * c + n * l - i * a, this._w = o * u - n * a - i * l - r * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, i = this._y, r = this._z, o = this._w;
    let a = o * e._w + n * e._x + i * e._y + r * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1)
      return this._w = o, this._x = n, this._y = i, this._z = r, this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * o + t * this._w, this._x = m * n + t * this._x, this._y = m * i + t * this._y, this._z = m * r + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), u = Math.atan2(c, a), h = Math.sin((1 - t) * u) / c, d = Math.sin(t * u) / c;
    return this._w = o * h + this._w * d, this._x = n * h + this._x * d, this._y = i * h + this._y * d, this._z = r * h + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), r = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(r),
      n * Math.cos(r),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class N {
  constructor(e = 0, t = 0, n = 0) {
    N.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(ac.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(ac.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements, o = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * o, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * o, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * o, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, r = e.x, o = e.y, a = e.z, l = e.w, c = 2 * (o * i - a * n), u = 2 * (a * t - r * i), h = 2 * (r * n - o * t);
    return this.x = t + l * c + o * h - a * u, this.y = n + l * u + a * c - r * h, this.z = i + l * h + r * u - o * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, r = e.z, o = t.x, a = t.y, l = t.z;
    return this.x = i * l - r * a, this.y = r * o - n * l, this.z = n * a - i * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Io.copy(this).projectOnVector(e), this.sub(Io);
  }
  reflect(e) {
    return this.sub(Io.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Bt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Io = /* @__PURE__ */ new N(), ac = /* @__PURE__ */ new _n();
class kn {
  constructor(e = new N(1 / 0, 1 / 0, 1 / 0), t = new N(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(un.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(un.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = un.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0)
        for (let o = 0, a = r.count; o < a; o++)
          e.isMesh === !0 ? e.getVertexPosition(o, un) : un.fromBufferAttribute(r, o), un.applyMatrix4(e.matrixWorld), this.expandByPoint(un);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), or.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), or.copy(n.boundingBox)), or.applyMatrix4(e.matrixWorld), this.union(or);
    }
    const i = e.children;
    for (let r = 0, o = i.length; r < o; r++)
      this.expandByObject(i[r], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, un), un.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(ws), ar.subVectors(this.max, ws), Ni.subVectors(e.a, ws), Oi.subVectors(e.b, ws), Fi.subVectors(e.c, ws), Wn.subVectors(Oi, Ni), jn.subVectors(Fi, Oi), li.subVectors(Ni, Fi);
    let t = [
      0,
      -Wn.z,
      Wn.y,
      0,
      -jn.z,
      jn.y,
      0,
      -li.z,
      li.y,
      Wn.z,
      0,
      -Wn.x,
      jn.z,
      0,
      -jn.x,
      li.z,
      0,
      -li.x,
      -Wn.y,
      Wn.x,
      0,
      -jn.y,
      jn.x,
      0,
      -li.y,
      li.x,
      0
    ];
    return !Do(t, Ni, Oi, Fi, ar) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Do(t, Ni, Oi, Fi, ar)) ? !1 : (lr.crossVectors(Wn, jn), t = [lr.x, lr.y, lr.z], Do(t, Ni, Oi, Fi, ar));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, un).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(un).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Ln[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Ln[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Ln[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Ln[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Ln[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Ln[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Ln[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Ln[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Ln), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Ln = [
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N()
], un = /* @__PURE__ */ new N(), or = /* @__PURE__ */ new kn(), Ni = /* @__PURE__ */ new N(), Oi = /* @__PURE__ */ new N(), Fi = /* @__PURE__ */ new N(), Wn = /* @__PURE__ */ new N(), jn = /* @__PURE__ */ new N(), li = /* @__PURE__ */ new N(), ws = /* @__PURE__ */ new N(), ar = /* @__PURE__ */ new N(), lr = /* @__PURE__ */ new N(), ci = /* @__PURE__ */ new N();
function Do(s, e, t, n, i) {
  for (let r = 0, o = s.length - 3; r <= o; r += 3) {
    ci.fromArray(s, r);
    const a = i.x * Math.abs(ci.x) + i.y * Math.abs(ci.y) + i.z * Math.abs(ci.z), l = e.dot(ci), c = t.dot(ci), u = n.dot(ci);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a)
      return !1;
  }
  return !0;
}
const om = /* @__PURE__ */ new kn(), Rs = /* @__PURE__ */ new N(), Uo = /* @__PURE__ */ new N();
class wn {
  constructor(e = new N(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : om.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, o = e.length; r < o; r++)
      i = Math.max(i, n.distanceToSquared(e[r]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    Rs.subVectors(e, this.center);
    const t = Rs.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Rs, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Uo.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Rs.copy(e.center).add(Uo)), this.expandByPoint(Rs.copy(e.center).sub(Uo))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Pn = /* @__PURE__ */ new N(), No = /* @__PURE__ */ new N(), cr = /* @__PURE__ */ new N(), Xn = /* @__PURE__ */ new N(), Oo = /* @__PURE__ */ new N(), ur = /* @__PURE__ */ new N(), Fo = /* @__PURE__ */ new N();
class co {
  constructor(e = new N(), t = new N(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Pn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Pn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Pn.copy(this.origin).addScaledVector(this.direction, t), Pn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    No.copy(e).add(t).multiplyScalar(0.5), cr.copy(t).sub(e).normalize(), Xn.copy(this.origin).sub(No);
    const r = e.distanceTo(t) * 0.5, o = -this.direction.dot(cr), a = Xn.dot(this.direction), l = -Xn.dot(cr), c = Xn.lengthSq(), u = Math.abs(1 - o * o);
    let h, d, m, g;
    if (u > 0)
      if (h = o * l - a, d = o * a - l, g = r * u, h >= 0)
        if (d >= -g)
          if (d <= g) {
            const _ = 1 / u;
            h *= _, d *= _, m = h * (h + o * d + 2 * a) + d * (o * h + d + 2 * l) + c;
          } else
            d = r, h = Math.max(0, -(o * d + a)), m = -h * h + d * (d + 2 * l) + c;
        else
          d = -r, h = Math.max(0, -(o * d + a)), m = -h * h + d * (d + 2 * l) + c;
      else
        d <= -g ? (h = Math.max(0, -(-o * r + a)), d = h > 0 ? -r : Math.min(Math.max(-r, -l), r), m = -h * h + d * (d + 2 * l) + c) : d <= g ? (h = 0, d = Math.min(Math.max(-r, -l), r), m = d * (d + 2 * l) + c) : (h = Math.max(0, -(o * r + a)), d = h > 0 ? r : Math.min(Math.max(-r, -l), r), m = -h * h + d * (d + 2 * l) + c);
    else
      d = o > 0 ? -r : r, h = Math.max(0, -(o * d + a)), m = -h * h + d * (d + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, h), i && i.copy(No).addScaledVector(cr, d), m;
  }
  intersectSphere(e, t) {
    Pn.subVectors(e.center, this.origin);
    const n = Pn.dot(this.direction), i = Pn.dot(Pn) - n * n, r = e.radius * e.radius;
    if (i > r) return null;
    const o = Math.sqrt(r - i), a = n - o, l = n + o;
    return l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, o, a, l;
    const c = 1 / this.direction.x, u = 1 / this.direction.y, h = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (e.min.x - d.x) * c, i = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, i = (e.min.x - d.x) * c), u >= 0 ? (r = (e.min.y - d.y) * u, o = (e.max.y - d.y) * u) : (r = (e.max.y - d.y) * u, o = (e.min.y - d.y) * u), n > o || r > i || ((r > n || isNaN(n)) && (n = r), (o < i || isNaN(i)) && (i = o), h >= 0 ? (a = (e.min.z - d.z) * h, l = (e.max.z - d.z) * h) : (a = (e.max.z - d.z) * h, l = (e.min.z - d.z) * h), n > l || a > i) || ((a > n || n !== n) && (n = a), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Pn) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    Oo.subVectors(t, e), ur.subVectors(n, e), Fo.crossVectors(Oo, ur);
    let o = this.direction.dot(Fo), a;
    if (o > 0) {
      if (i) return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    Xn.subVectors(this.origin, e);
    const l = a * this.direction.dot(ur.crossVectors(Xn, ur));
    if (l < 0)
      return null;
    const c = a * this.direction.dot(Oo.cross(Xn));
    if (c < 0 || l + c > o)
      return null;
    const u = -a * Xn.dot(Fo);
    return u < 0 ? null : this.at(u / o, r);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ye {
  constructor(e, t, n, i, r, o, a, l, c, u, h, d, m, g, _, f) {
    Ye.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, r, o, a, l, c, u, h, d, m, g, _, f);
  }
  set(e, t, n, i, r, o, a, l, c, u, h, d, m, g, _, f) {
    const p = this.elements;
    return p[0] = e, p[4] = t, p[8] = n, p[12] = i, p[1] = r, p[5] = o, p[9] = a, p[13] = l, p[2] = c, p[6] = u, p[10] = h, p[14] = d, p[3] = m, p[7] = g, p[11] = _, p[15] = f, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new Ye().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / Bi.setFromMatrixColumn(e, 0).length(), r = 1 / Bi.setFromMatrixColumn(e, 1).length(), o = 1 / Bi.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z, o = Math.cos(n), a = Math.sin(n), l = Math.cos(i), c = Math.sin(i), u = Math.cos(r), h = Math.sin(r);
    if (e.order === "XYZ") {
      const d = o * u, m = o * h, g = a * u, _ = a * h;
      t[0] = l * u, t[4] = -l * h, t[8] = c, t[1] = m + g * c, t[5] = d - _ * c, t[9] = -a * l, t[2] = _ - d * c, t[6] = g + m * c, t[10] = o * l;
    } else if (e.order === "YXZ") {
      const d = l * u, m = l * h, g = c * u, _ = c * h;
      t[0] = d + _ * a, t[4] = g * a - m, t[8] = o * c, t[1] = o * h, t[5] = o * u, t[9] = -a, t[2] = m * a - g, t[6] = _ + d * a, t[10] = o * l;
    } else if (e.order === "ZXY") {
      const d = l * u, m = l * h, g = c * u, _ = c * h;
      t[0] = d - _ * a, t[4] = -o * h, t[8] = g + m * a, t[1] = m + g * a, t[5] = o * u, t[9] = _ - d * a, t[2] = -o * c, t[6] = a, t[10] = o * l;
    } else if (e.order === "ZYX") {
      const d = o * u, m = o * h, g = a * u, _ = a * h;
      t[0] = l * u, t[4] = g * c - m, t[8] = d * c + _, t[1] = l * h, t[5] = _ * c + d, t[9] = m * c - g, t[2] = -c, t[6] = a * l, t[10] = o * l;
    } else if (e.order === "YZX") {
      const d = o * l, m = o * c, g = a * l, _ = a * c;
      t[0] = l * u, t[4] = _ - d * h, t[8] = g * h + m, t[1] = h, t[5] = o * u, t[9] = -a * u, t[2] = -c * u, t[6] = m * h + g, t[10] = d - _ * h;
    } else if (e.order === "XZY") {
      const d = o * l, m = o * c, g = a * l, _ = a * c;
      t[0] = l * u, t[4] = -h, t[8] = c * u, t[1] = d * h + _, t[5] = o * u, t[9] = m * h - g, t[2] = g * h - m, t[6] = a * u, t[10] = _ * h + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(am, e, lm);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Zt.subVectors(e, t), Zt.lengthSq() === 0 && (Zt.z = 1), Zt.normalize(), qn.crossVectors(n, Zt), qn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Zt.x += 1e-4 : Zt.z += 1e-4, Zt.normalize(), qn.crossVectors(n, Zt)), qn.normalize(), hr.crossVectors(Zt, qn), i[0] = qn.x, i[4] = hr.x, i[8] = Zt.x, i[1] = qn.y, i[5] = hr.y, i[9] = Zt.y, i[2] = qn.z, i[6] = hr.z, i[10] = Zt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], u = n[1], h = n[5], d = n[9], m = n[13], g = n[2], _ = n[6], f = n[10], p = n[14], E = n[3], y = n[7], T = n[11], R = n[15], b = i[0], w = i[4], G = i[8], S = i[12], A = i[1], V = i[5], J = i[9], se = i[13], C = i[2], P = i[6], U = i[10], X = i[14], O = i[3], $ = i[7], Z = i[11], z = i[15];
    return r[0] = o * b + a * A + l * C + c * O, r[4] = o * w + a * V + l * P + c * $, r[8] = o * G + a * J + l * U + c * Z, r[12] = o * S + a * se + l * X + c * z, r[1] = u * b + h * A + d * C + m * O, r[5] = u * w + h * V + d * P + m * $, r[9] = u * G + h * J + d * U + m * Z, r[13] = u * S + h * se + d * X + m * z, r[2] = g * b + _ * A + f * C + p * O, r[6] = g * w + _ * V + f * P + p * $, r[10] = g * G + _ * J + f * U + p * Z, r[14] = g * S + _ * se + f * X + p * z, r[3] = E * b + y * A + T * C + R * O, r[7] = E * w + y * V + T * P + R * $, r[11] = E * G + y * J + T * U + R * Z, r[15] = E * S + y * se + T * X + R * z, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], o = e[1], a = e[5], l = e[9], c = e[13], u = e[2], h = e[6], d = e[10], m = e[14], g = e[3], _ = e[7], f = e[11], p = e[15];
    return g * (+r * l * h - i * c * h - r * a * d + n * c * d + i * a * m - n * l * m) + _ * (+t * l * m - t * c * d + r * o * d - i * o * m + i * c * u - r * l * u) + f * (+t * c * h - t * a * m - r * o * h + n * o * m + r * a * u - n * c * u) + p * (-i * a * u - t * l * h + t * a * d + i * o * h - n * o * d + n * l * u);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], h = e[9], d = e[10], m = e[11], g = e[12], _ = e[13], f = e[14], p = e[15], E = h * f * c - _ * d * c + _ * l * m - a * f * m - h * l * p + a * d * p, y = g * d * c - u * f * c - g * l * m + o * f * m + u * l * p - o * d * p, T = u * _ * c - g * h * c + g * a * m - o * _ * m - u * a * p + o * h * p, R = g * h * l - u * _ * l - g * a * d + o * _ * d + u * a * f - o * h * f, b = t * E + n * y + i * T + r * R;
    if (b === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / b;
    return e[0] = E * w, e[1] = (_ * d * r - h * f * r - _ * i * m + n * f * m + h * i * p - n * d * p) * w, e[2] = (a * f * r - _ * l * r + _ * i * c - n * f * c - a * i * p + n * l * p) * w, e[3] = (h * l * r - a * d * r - h * i * c + n * d * c + a * i * m - n * l * m) * w, e[4] = y * w, e[5] = (u * f * r - g * d * r + g * i * m - t * f * m - u * i * p + t * d * p) * w, e[6] = (g * l * r - o * f * r - g * i * c + t * f * c + o * i * p - t * l * p) * w, e[7] = (o * d * r - u * l * r + u * i * c - t * d * c - o * i * m + t * l * m) * w, e[8] = T * w, e[9] = (g * h * r - u * _ * r - g * n * m + t * _ * m + u * n * p - t * h * p) * w, e[10] = (o * _ * r - g * a * r + g * n * c - t * _ * c - o * n * p + t * a * p) * w, e[11] = (u * a * r - o * h * r - u * n * c + t * h * c + o * n * m - t * a * m) * w, e[12] = R * w, e[13] = (u * _ * i - g * h * i + g * n * d - t * _ * d - u * n * f + t * h * f) * w, e[14] = (g * a * i - o * _ * i - g * n * l + t * _ * l + o * n * f - t * a * f) * w, e[15] = (o * h * i - u * a * i + u * n * l - t * h * l - o * n * d + t * a * d) * w, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = 1 - n, o = e.x, a = e.y, l = e.z, c = r * o, u = r * a;
    return this.set(
      c * o + n,
      c * a - i * l,
      c * l + i * a,
      0,
      c * a + i * l,
      u * a + n,
      u * l - i * o,
      0,
      c * l - i * a,
      u * l + i * o,
      r * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, i, r, o) {
    return this.set(
      1,
      n,
      r,
      0,
      e,
      1,
      o,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, r = t._x, o = t._y, a = t._z, l = t._w, c = r + r, u = o + o, h = a + a, d = r * c, m = r * u, g = r * h, _ = o * u, f = o * h, p = a * h, E = l * c, y = l * u, T = l * h, R = n.x, b = n.y, w = n.z;
    return i[0] = (1 - (_ + p)) * R, i[1] = (m + T) * R, i[2] = (g - y) * R, i[3] = 0, i[4] = (m - T) * b, i[5] = (1 - (d + p)) * b, i[6] = (f + E) * b, i[7] = 0, i[8] = (g + y) * w, i[9] = (f - E) * w, i[10] = (1 - (d + _)) * w, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = Bi.set(i[0], i[1], i[2]).length();
    const o = Bi.set(i[4], i[5], i[6]).length(), a = Bi.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], hn.copy(this);
    const c = 1 / r, u = 1 / o, h = 1 / a;
    return hn.elements[0] *= c, hn.elements[1] *= c, hn.elements[2] *= c, hn.elements[4] *= u, hn.elements[5] *= u, hn.elements[6] *= u, hn.elements[8] *= h, hn.elements[9] *= h, hn.elements[10] *= h, t.setFromRotationMatrix(hn), n.x = r, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, i, r, o, a = Vn) {
    const l = this.elements, c = 2 * r / (t - e), u = 2 * r / (n - i), h = (t + e) / (t - e), d = (n + i) / (n - i);
    let m, g;
    if (a === Vn)
      m = -(o + r) / (o - r), g = -2 * o * r / (o - r);
    else if (a === Qr)
      m = -o / (o - r), g = -o * r / (o - r);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return l[0] = c, l[4] = 0, l[8] = h, l[12] = 0, l[1] = 0, l[5] = u, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = m, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, r, o, a = Vn) {
    const l = this.elements, c = 1 / (t - e), u = 1 / (n - i), h = 1 / (o - r), d = (t + e) * c, m = (n + i) * u;
    let g, _;
    if (a === Vn)
      g = (o + r) * h, _ = -2 * h;
    else if (a === Qr)
      g = r * h, _ = -1 * h;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * u, l[9] = 0, l[13] = -m, l[2] = 0, l[6] = 0, l[10] = _, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Bi = /* @__PURE__ */ new N(), hn = /* @__PURE__ */ new Ye(), am = /* @__PURE__ */ new N(0, 0, 0), lm = /* @__PURE__ */ new N(1, 1, 1), qn = /* @__PURE__ */ new N(), hr = /* @__PURE__ */ new N(), Zt = /* @__PURE__ */ new N(), lc = /* @__PURE__ */ new Ye(), cc = /* @__PURE__ */ new _n();
class uo {
  constructor(e = 0, t = 0, n = 0, i = uo.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, r = i[0], o = i[4], a = i[8], l = i[1], c = i[5], u = i[9], h = i[2], d = i[6], m = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Bt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-u, m), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Bt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(a, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Bt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-h, m), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-Bt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(d, m), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(Bt(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(a, m));
        break;
      case "XZY":
        this._z = Math.asin(-Bt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-u, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return lc.makeRotationFromQuaternion(e), this.setFromRotationMatrix(lc, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return cc.setFromEuler(this), this.setFromQuaternion(cc, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
uo.DEFAULT_ORDER = "XYZ";
class ph {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let cm = 0;
const uc = /* @__PURE__ */ new N(), Vi = /* @__PURE__ */ new _n(), In = /* @__PURE__ */ new Ye(), dr = /* @__PURE__ */ new N(), Cs = /* @__PURE__ */ new N(), um = /* @__PURE__ */ new N(), hm = /* @__PURE__ */ new _n(), hc = /* @__PURE__ */ new N(1, 0, 0), dc = /* @__PURE__ */ new N(0, 1, 0), fc = /* @__PURE__ */ new N(0, 0, 1), dm = { type: "added" }, fm = { type: "removed" };
class gt extends Ii {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: cm++ }), this.uuid = gn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = gt.DEFAULT_UP.clone();
    const e = new N(), t = new uo(), n = new _n(), i = new N(1, 1, 1);
    function r() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(r), n._onChange(o), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new Ye()
      },
      normalMatrix: {
        value: new qe()
      }
    }), this.matrix = new Ye(), this.matrixWorld = new Ye(), this.matrixAutoUpdate = gt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new ph(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Vi.setFromAxisAngle(e, t), this.quaternion.multiply(Vi), this;
  }
  rotateOnWorldAxis(e, t) {
    return Vi.setFromAxisAngle(e, t), this.quaternion.premultiply(Vi), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(hc, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(dc, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(fc, e);
  }
  translateOnAxis(e, t) {
    return uc.copy(e).applyQuaternion(this.quaternion), this.position.add(uc.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(hc, e);
  }
  translateY(e) {
    return this.translateOnAxis(dc, e);
  }
  translateZ(e) {
    return this.translateOnAxis(fc, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(In.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? dr.copy(e) : dr.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), Cs.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? In.lookAt(Cs, dr, this.up) : In.lookAt(dr, Cs, this.up), this.quaternion.setFromRotationMatrix(In), i && (In.extractRotation(i.matrixWorld), Vi.setFromRotationMatrix(In), this.quaternion.premultiply(Vi.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(dm)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(fm)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), In.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), In.multiply(e.parent.matrixWorld)), e.applyMatrix4(In), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0)
        return o;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const i = this.children;
    for (let r = 0, o = i.length; r < o; r++)
      i[r].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Cs, e, um), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Cs, hm, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      (r.matrixWorldAutoUpdate === !0 || e === !0) && r.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const i = this.children;
      for (let r = 0, o = i.length; r < o; r++) {
        const a = i[r];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((a) => ({
      boxInitialized: a.boxInitialized,
      boxMin: a.box.min.toArray(),
      boxMax: a.box.max.toArray(),
      sphereInitialized: a.sphereInitialized,
      sphereRadius: a.sphere.radius,
      sphereCenter: a.sphere.center.toArray()
    })), i.maxGeometryCount = this._maxGeometryCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(e), this.boundingSphere !== null && (i.boundingSphere = {
      center: i.boundingSphere.center.toArray(),
      radius: i.boundingSphere.radius
    }), this.boundingBox !== null && (i.boundingBox = {
      min: i.boundingBox.min.toArray(),
      max: i.boundingBox.max.toArray()
    }));
    function r(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const h = l[c];
            r(e.shapes, h);
          }
        else
          r(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          a.push(r(e.materials, this.material[l]));
        i.material = a;
      } else
        i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let a = 0; a < this.children.length; a++)
        i.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        i.animations.push(r(e.animations, l));
      }
    }
    if (t) {
      const a = o(e.geometries), l = o(e.materials), c = o(e.textures), u = o(e.images), h = o(e.shapes), d = o(e.skeletons), m = o(e.animations), g = o(e.nodes);
      a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), h.length > 0 && (n.shapes = h), d.length > 0 && (n.skeletons = d), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function o(a) {
      const l = [];
      for (const c in a) {
        const u = a[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
gt.DEFAULT_UP = /* @__PURE__ */ new N(0, 1, 0);
gt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const dn = /* @__PURE__ */ new N(), Dn = /* @__PURE__ */ new N(), Bo = /* @__PURE__ */ new N(), Un = /* @__PURE__ */ new N(), zi = /* @__PURE__ */ new N(), ki = /* @__PURE__ */ new N(), pc = /* @__PURE__ */ new N(), Vo = /* @__PURE__ */ new N(), zo = /* @__PURE__ */ new N(), ko = /* @__PURE__ */ new N();
let fr = !1;
class mn {
  constructor(e = new N(), t = new N(), n = new N()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), dn.subVectors(e, t), i.cross(dn);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, i, r) {
    dn.subVectors(i, t), Dn.subVectors(n, t), Bo.subVectors(e, t);
    const o = dn.dot(dn), a = dn.dot(Dn), l = dn.dot(Bo), c = Dn.dot(Dn), u = Dn.dot(Bo), h = o * c - a * a;
    if (h === 0)
      return r.set(0, 0, 0), null;
    const d = 1 / h, m = (c * l - a * u) * d, g = (o * u - a * l) * d;
    return r.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Un) === null ? !1 : Un.x >= 0 && Un.y >= 0 && Un.x + Un.y <= 1;
  }
  static getUV(e, t, n, i, r, o, a, l) {
    return fr === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), fr = !0), this.getInterpolation(e, t, n, i, r, o, a, l);
  }
  static getInterpolation(e, t, n, i, r, o, a, l) {
    return this.getBarycoord(e, t, n, i, Un) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, Un.x), l.addScaledVector(o, Un.y), l.addScaledVector(a, Un.z), l);
  }
  static isFrontFacing(e, t, n, i) {
    return dn.subVectors(n, t), Dn.subVectors(e, t), dn.cross(Dn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return dn.subVectors(this.c, this.b), Dn.subVectors(this.a, this.b), dn.cross(Dn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return mn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return mn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, r) {
    return fr === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), fr = !0), mn.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
  }
  getInterpolation(e, t, n, i, r) {
    return mn.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return mn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return mn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, r = this.c;
    let o, a;
    zi.subVectors(i, n), ki.subVectors(r, n), Vo.subVectors(e, n);
    const l = zi.dot(Vo), c = ki.dot(Vo);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    zo.subVectors(e, i);
    const u = zi.dot(zo), h = ki.dot(zo);
    if (u >= 0 && h <= u)
      return t.copy(i);
    const d = l * h - u * c;
    if (d <= 0 && l >= 0 && u <= 0)
      return o = l / (l - u), t.copy(n).addScaledVector(zi, o);
    ko.subVectors(e, r);
    const m = zi.dot(ko), g = ki.dot(ko);
    if (g >= 0 && m <= g)
      return t.copy(r);
    const _ = m * c - l * g;
    if (_ <= 0 && c >= 0 && g <= 0)
      return a = c / (c - g), t.copy(n).addScaledVector(ki, a);
    const f = u * g - m * h;
    if (f <= 0 && h - u >= 0 && m - g >= 0)
      return pc.subVectors(r, i), a = (h - u) / (h - u + (m - g)), t.copy(i).addScaledVector(pc, a);
    const p = 1 / (f + _ + d);
    return o = _ * p, a = d * p, t.copy(n).addScaledVector(zi, o).addScaledVector(ki, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const mh = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, Yn = { h: 0, s: 0, l: 0 }, pr = { h: 0, s: 0, l: 0 };
function Ho(s, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? s + (e - s) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? s + (e - s) * 6 * (2 / 3 - t) : s;
}
class Oe {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = mt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, st.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = st.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, st.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = st.workingColorSpace) {
    if (e = ja(e, 1), t = Bt(t, 0, 1), n = Bt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r;
      this.r = Ho(o, r, e + 1 / 3), this.g = Ho(o, r, e), this.b = Ho(o, r, e - 1 / 3);
    }
    return st.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = mt) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let r;
      const o = i[1], a = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(r[4]), this.setRGB(
              Math.min(255, parseInt(r[1], 10)) / 255,
              Math.min(255, parseInt(r[2], 10)) / 255,
              Math.min(255, parseInt(r[3], 10)) / 255,
              t
            );
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(r[4]), this.setRGB(
              Math.min(100, parseInt(r[1], 10)) / 100,
              Math.min(100, parseInt(r[2], 10)) / 100,
              Math.min(100, parseInt(r[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(r[4]), this.setHSL(
              parseFloat(r[1]) / 360,
              parseFloat(r[2]) / 100,
              parseFloat(r[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = i[1], o = r.length;
      if (o === 3)
        return this.setRGB(
          parseInt(r.charAt(0), 16) / 15,
          parseInt(r.charAt(1), 16) / 15,
          parseInt(r.charAt(2), 16) / 15,
          t
        );
      if (o === 6)
        return this.setHex(parseInt(r, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = mt) {
    const n = mh[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = ss(e.r), this.g = ss(e.g), this.b = ss(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Lo(e.r), this.g = Lo(e.g), this.b = Lo(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = mt) {
    return st.fromWorkingColorSpace(Ft.copy(this), e), Math.round(Bt(Ft.r * 255, 0, 255)) * 65536 + Math.round(Bt(Ft.g * 255, 0, 255)) * 256 + Math.round(Bt(Ft.b * 255, 0, 255));
  }
  getHexString(e = mt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = st.workingColorSpace) {
    st.fromWorkingColorSpace(Ft.copy(this), t);
    const n = Ft.r, i = Ft.g, r = Ft.b, o = Math.max(n, i, r), a = Math.min(n, i, r);
    let l, c;
    const u = (a + o) / 2;
    if (a === o)
      l = 0, c = 0;
    else {
      const h = o - a;
      switch (c = u <= 0.5 ? h / (o + a) : h / (2 - o - a), o) {
        case n:
          l = (i - r) / h + (i < r ? 6 : 0);
          break;
        case i:
          l = (r - n) / h + 2;
          break;
        case r:
          l = (n - i) / h + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = u, e;
  }
  getRGB(e, t = st.workingColorSpace) {
    return st.fromWorkingColorSpace(Ft.copy(this), t), e.r = Ft.r, e.g = Ft.g, e.b = Ft.b, e;
  }
  getStyle(e = mt) {
    st.fromWorkingColorSpace(Ft.copy(this), e);
    const t = Ft.r, n = Ft.g, i = Ft.b;
    return e !== mt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Yn), this.setHSL(Yn.h + e, Yn.s + t, Yn.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(Yn), e.getHSL(pr);
    const n = zs(Yn.h, pr.h, t), i = zs(Yn.s, pr.s, t), r = zs(Yn.l, pr.l, t);
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, i = this.b, r = e.elements;
    return this.r = r[0] * t + r[3] * n + r[6] * i, this.g = r[1] * t + r[4] * n + r[7] * i, this.b = r[2] * t + r[5] * n + r[8] * i, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Ft = /* @__PURE__ */ new Oe();
Oe.NAMES = mh;
let pm = 0;
class bn extends Ii {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: pm++ }), this.uuid = gn(), this.name = "", this.type = "Material", this.blending = is, this.side = zn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = ma, this.blendDst = ga, this.blendEquation = gi, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Oe(0, 0, 0), this.blendAlpha = 0, this.depthFunc = qr, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = tc, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Di, this.stencilZFail = Di, this.stencilZPass = Di, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== is && (n.blending = this.blending), this.side !== zn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== ma && (n.blendSrc = this.blendSrc), this.blendDst !== ga && (n.blendDst = this.blendDst), this.blendEquation !== gi && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== qr && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== tc && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Di && (n.stencilFail = this.stencilFail), this.stencilZFail !== Di && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Di && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const o = [];
      for (const a in r) {
        const l = r[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (t) {
      const r = i(e.textures), o = i(e.images);
      r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r)
        n[r] = t[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class xi extends bn {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Oe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Ku, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Mt = /* @__PURE__ */ new N(), mr = /* @__PURE__ */ new Je();
class Wt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Ea, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = Bn, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        mr.fromBufferAttribute(this, t), mr.applyMatrix3(e), this.setXY(t, mr.x, mr.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Mt.fromBufferAttribute(this, t), Mt.applyMatrix3(e), this.setXYZ(t, Mt.x, Mt.y, Mt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Mt.fromBufferAttribute(this, t), Mt.applyMatrix4(e), this.setXYZ(t, Mt.x, Mt.y, Mt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Mt.fromBufferAttribute(this, t), Mt.applyNormalMatrix(e), this.setXYZ(t, Mt.x, Mt.y, Mt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Mt.fromBufferAttribute(this, t), Mt.transformDirection(e), this.setXYZ(t, Mt.x, Mt.y, Mt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Tn(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = at(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Tn(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = at(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Tn(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = at(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Tn(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = at(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Tn(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = at(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = at(t, this.array), n = at(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = at(t, this.array), n = at(n, this.array), i = at(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e *= this.itemSize, this.normalized && (t = at(t, this.array), n = at(n, this.array), i = at(i, this.array), r = at(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== Ea && (e.usage = this.usage), e;
  }
}
class gh extends Wt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class _h extends Wt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class cn extends Wt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let mm = 0;
const sn = /* @__PURE__ */ new Ye(), Go = /* @__PURE__ */ new gt(), Hi = /* @__PURE__ */ new N(), Qt = /* @__PURE__ */ new kn(), Ls = /* @__PURE__ */ new kn(), Rt = /* @__PURE__ */ new N();
class yn extends Ii {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: mm++ }), this.uuid = gn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (uh(e) ? _h : gh)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new qe().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return sn.makeRotationFromQuaternion(e), this.applyMatrix4(sn), this;
  }
  rotateX(e) {
    return sn.makeRotationX(e), this.applyMatrix4(sn), this;
  }
  rotateY(e) {
    return sn.makeRotationY(e), this.applyMatrix4(sn), this;
  }
  rotateZ(e) {
    return sn.makeRotationZ(e), this.applyMatrix4(sn), this;
  }
  translate(e, t, n) {
    return sn.makeTranslation(e, t, n), this.applyMatrix4(sn), this;
  }
  scale(e, t, n) {
    return sn.makeScale(e, t, n), this.applyMatrix4(sn), this;
  }
  lookAt(e) {
    return Go.lookAt(e), Go.updateMatrix(), this.applyMatrix4(Go.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Hi).negate(), this.translate(Hi.x, Hi.y, Hi.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new cn(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new kn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new N(-1 / 0, -1 / 0, -1 / 0),
        new N(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const r = t[n];
          Qt.setFromBufferAttribute(r), this.morphTargetsRelative ? (Rt.addVectors(this.boundingBox.min, Qt.min), this.boundingBox.expandByPoint(Rt), Rt.addVectors(this.boundingBox.max, Qt.max), this.boundingBox.expandByPoint(Rt)) : (this.boundingBox.expandByPoint(Qt.min), this.boundingBox.expandByPoint(Qt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new wn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new N(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Qt.setFromBufferAttribute(e), t)
        for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r];
          Ls.setFromBufferAttribute(a), this.morphTargetsRelative ? (Rt.addVectors(Qt.min, Ls.min), Qt.expandByPoint(Rt), Rt.addVectors(Qt.max, Ls.max), Qt.expandByPoint(Rt)) : (Qt.expandByPoint(Ls.min), Qt.expandByPoint(Ls.max));
        }
      Qt.getCenter(n);
      let i = 0;
      for (let r = 0, o = e.count; r < o; r++)
        Rt.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(Rt));
      if (t)
        for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r], l = this.morphTargetsRelative;
          for (let c = 0, u = a.count; c < u; c++)
            Rt.fromBufferAttribute(a, c), l && (Hi.fromBufferAttribute(e, c), Rt.add(Hi)), i = Math.max(i, n.distanceToSquared(Rt));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, i = t.position.array, r = t.normal.array, o = t.uv.array, a = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Wt(new Float32Array(4 * a), 4));
    const l = this.getAttribute("tangent").array, c = [], u = [];
    for (let A = 0; A < a; A++)
      c[A] = new N(), u[A] = new N();
    const h = new N(), d = new N(), m = new N(), g = new Je(), _ = new Je(), f = new Je(), p = new N(), E = new N();
    function y(A, V, J) {
      h.fromArray(i, A * 3), d.fromArray(i, V * 3), m.fromArray(i, J * 3), g.fromArray(o, A * 2), _.fromArray(o, V * 2), f.fromArray(o, J * 2), d.sub(h), m.sub(h), _.sub(g), f.sub(g);
      const se = 1 / (_.x * f.y - f.x * _.y);
      isFinite(se) && (p.copy(d).multiplyScalar(f.y).addScaledVector(m, -_.y).multiplyScalar(se), E.copy(m).multiplyScalar(_.x).addScaledVector(d, -f.x).multiplyScalar(se), c[A].add(p), c[V].add(p), c[J].add(p), u[A].add(E), u[V].add(E), u[J].add(E));
    }
    let T = this.groups;
    T.length === 0 && (T = [{
      start: 0,
      count: n.length
    }]);
    for (let A = 0, V = T.length; A < V; ++A) {
      const J = T[A], se = J.start, C = J.count;
      for (let P = se, U = se + C; P < U; P += 3)
        y(
          n[P + 0],
          n[P + 1],
          n[P + 2]
        );
    }
    const R = new N(), b = new N(), w = new N(), G = new N();
    function S(A) {
      w.fromArray(r, A * 3), G.copy(w);
      const V = c[A];
      R.copy(V), R.sub(w.multiplyScalar(w.dot(V))).normalize(), b.crossVectors(G, V);
      const se = b.dot(u[A]) < 0 ? -1 : 1;
      l[A * 4] = R.x, l[A * 4 + 1] = R.y, l[A * 4 + 2] = R.z, l[A * 4 + 3] = se;
    }
    for (let A = 0, V = T.length; A < V; ++A) {
      const J = T[A], se = J.start, C = J.count;
      for (let P = se, U = se + C; P < U; P += 3)
        S(n[P + 0]), S(n[P + 1]), S(n[P + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Wt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, m = n.count; d < m; d++)
          n.setXYZ(d, 0, 0, 0);
      const i = new N(), r = new N(), o = new N(), a = new N(), l = new N(), c = new N(), u = new N(), h = new N();
      if (e)
        for (let d = 0, m = e.count; d < m; d += 3) {
          const g = e.getX(d + 0), _ = e.getX(d + 1), f = e.getX(d + 2);
          i.fromBufferAttribute(t, g), r.fromBufferAttribute(t, _), o.fromBufferAttribute(t, f), u.subVectors(o, r), h.subVectors(i, r), u.cross(h), a.fromBufferAttribute(n, g), l.fromBufferAttribute(n, _), c.fromBufferAttribute(n, f), a.add(u), l.add(u), c.add(u), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(_, l.x, l.y, l.z), n.setXYZ(f, c.x, c.y, c.z);
        }
      else
        for (let d = 0, m = t.count; d < m; d += 3)
          i.fromBufferAttribute(t, d + 0), r.fromBufferAttribute(t, d + 1), o.fromBufferAttribute(t, d + 2), u.subVectors(o, r), h.subVectors(i, r), u.cross(h), n.setXYZ(d + 0, u.x, u.y, u.z), n.setXYZ(d + 1, u.x, u.y, u.z), n.setXYZ(d + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      Rt.fromBufferAttribute(e, t), Rt.normalize(), e.setXYZ(t, Rt.x, Rt.y, Rt.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array, u = a.itemSize, h = a.normalized, d = new c.constructor(l.length * u);
      let m = 0, g = 0;
      for (let _ = 0, f = l.length; _ < f; _++) {
        a.isInterleavedBufferAttribute ? m = l[_] * a.data.stride + a.offset : m = l[_] * u;
        for (let p = 0; p < u; p++)
          d[g++] = c[m++];
      }
      return new Wt(d, u, h);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new yn(), n = this.index.array, i = this.attributes;
    for (const a in i) {
      const l = i[a], c = e(l, n);
      t.setAttribute(a, c);
    }
    const r = this.morphAttributes;
    for (const a in r) {
      const l = [], c = r[a];
      for (let u = 0, h = c.length; u < h; u++) {
        const d = c[u], m = e(d, n);
        l.push(m);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let r = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], u = [];
      for (let h = 0, d = c.length; h < d; h++) {
        const m = c[h];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && (i[l] = u, r = !0);
    }
    r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = {
      center: a.center.toArray(),
      radius: a.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const u = i[c];
      this.setAttribute(c, u.clone(t));
    }
    const r = e.morphAttributes;
    for (const c in r) {
      const u = [], h = r[c];
      for (let d = 0, m = h.length; d < m; d++)
        u.push(h[d].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, u = o.length; c < u; c++) {
      const h = o[c];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const mc = /* @__PURE__ */ new Ye(), ui = /* @__PURE__ */ new co(), gr = /* @__PURE__ */ new wn(), gc = /* @__PURE__ */ new N(), Gi = /* @__PURE__ */ new N(), Wi = /* @__PURE__ */ new N(), ji = /* @__PURE__ */ new N(), Wo = /* @__PURE__ */ new N(), _r = /* @__PURE__ */ new N(), vr = /* @__PURE__ */ new Je(), yr = /* @__PURE__ */ new Je(), xr = /* @__PURE__ */ new Je(), _c = /* @__PURE__ */ new N(), vc = /* @__PURE__ */ new N(), yc = /* @__PURE__ */ new N(), Er = /* @__PURE__ */ new N(), Sr = /* @__PURE__ */ new N();
class He extends gt {
  constructor(e = new yn(), t = new xi()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = i.length; r < o; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, o = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const a = this.morphTargetInfluences;
    if (r && a) {
      _r.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const u = a[l], h = r[l];
        u !== 0 && (Wo.fromBufferAttribute(h, e), o ? _r.addScaledVector(Wo, u) : _r.addScaledVector(Wo.sub(t), u));
      }
      t.add(_r);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), gr.copy(n.boundingSphere), gr.applyMatrix4(r), ui.copy(e.ray).recast(e.near), !(gr.containsPoint(ui.origin) === !1 && (ui.intersectSphere(gr, gc) === null || ui.origin.distanceToSquared(gc) > (e.far - e.near) ** 2)) && (mc.copy(r).invert(), ui.copy(e.ray).applyMatrix4(mc), !(n.boundingBox !== null && ui.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, ui)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry, o = this.material, a = r.index, l = r.attributes.position, c = r.attributes.uv, u = r.attributes.uv1, h = r.attributes.normal, d = r.groups, m = r.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let g = 0, _ = d.length; g < _; g++) {
          const f = d[g], p = o[f.materialIndex], E = Math.max(f.start, m.start), y = Math.min(a.count, Math.min(f.start + f.count, m.start + m.count));
          for (let T = E, R = y; T < R; T += 3) {
            const b = a.getX(T), w = a.getX(T + 1), G = a.getX(T + 2);
            i = Mr(this, p, e, n, c, u, h, b, w, G), i && (i.faceIndex = Math.floor(T / 3), i.face.materialIndex = f.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, m.start), _ = Math.min(a.count, m.start + m.count);
        for (let f = g, p = _; f < p; f += 3) {
          const E = a.getX(f), y = a.getX(f + 1), T = a.getX(f + 2);
          i = Mr(this, o, e, n, c, u, h, E, y, T), i && (i.faceIndex = Math.floor(f / 3), t.push(i));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let g = 0, _ = d.length; g < _; g++) {
          const f = d[g], p = o[f.materialIndex], E = Math.max(f.start, m.start), y = Math.min(l.count, Math.min(f.start + f.count, m.start + m.count));
          for (let T = E, R = y; T < R; T += 3) {
            const b = T, w = T + 1, G = T + 2;
            i = Mr(this, p, e, n, c, u, h, b, w, G), i && (i.faceIndex = Math.floor(T / 3), i.face.materialIndex = f.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, m.start), _ = Math.min(l.count, m.start + m.count);
        for (let f = g, p = _; f < p; f += 3) {
          const E = f, y = f + 1, T = f + 2;
          i = Mr(this, o, e, n, c, u, h, E, y, T), i && (i.faceIndex = Math.floor(f / 3), t.push(i));
        }
      }
  }
}
function gm(s, e, t, n, i, r, o, a) {
  let l;
  if (e.side === $t ? l = n.intersectTriangle(o, r, i, !0, a) : l = n.intersectTriangle(i, r, o, e.side === zn, a), l === null) return null;
  Sr.copy(a), Sr.applyMatrix4(s.matrixWorld);
  const c = t.ray.origin.distanceTo(Sr);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: Sr.clone(),
    object: s
  };
}
function Mr(s, e, t, n, i, r, o, a, l, c) {
  s.getVertexPosition(a, Gi), s.getVertexPosition(l, Wi), s.getVertexPosition(c, ji);
  const u = gm(s, e, t, n, Gi, Wi, ji, Er);
  if (u) {
    i && (vr.fromBufferAttribute(i, a), yr.fromBufferAttribute(i, l), xr.fromBufferAttribute(i, c), u.uv = mn.getInterpolation(Er, Gi, Wi, ji, vr, yr, xr, new Je())), r && (vr.fromBufferAttribute(r, a), yr.fromBufferAttribute(r, l), xr.fromBufferAttribute(r, c), u.uv1 = mn.getInterpolation(Er, Gi, Wi, ji, vr, yr, xr, new Je()), u.uv2 = u.uv1), o && (_c.fromBufferAttribute(o, a), vc.fromBufferAttribute(o, l), yc.fromBufferAttribute(o, c), u.normal = mn.getInterpolation(Er, Gi, Wi, ji, _c, vc, yc, new N()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const h = {
      a,
      b: l,
      c,
      normal: new N(),
      materialIndex: 0
    };
    mn.getNormal(Gi, Wi, ji, h.normal), u.face = h;
  }
  return u;
}
class pt extends yn {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: r,
      depthSegments: o
    };
    const a = this;
    i = Math.floor(i), r = Math.floor(r), o = Math.floor(o);
    const l = [], c = [], u = [], h = [];
    let d = 0, m = 0;
    g("z", "y", "x", -1, -1, n, t, e, o, r, 0), g("z", "y", "x", 1, -1, n, t, -e, o, r, 1), g("x", "z", "y", 1, 1, e, n, t, i, o, 2), g("x", "z", "y", 1, -1, e, n, -t, i, o, 3), g("x", "y", "z", 1, -1, e, t, n, i, r, 4), g("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(l), this.setAttribute("position", new cn(c, 3)), this.setAttribute("normal", new cn(u, 3)), this.setAttribute("uv", new cn(h, 2));
    function g(_, f, p, E, y, T, R, b, w, G, S) {
      const A = T / w, V = R / G, J = T / 2, se = R / 2, C = b / 2, P = w + 1, U = G + 1;
      let X = 0, O = 0;
      const $ = new N();
      for (let Z = 0; Z < U; Z++) {
        const z = Z * V - se;
        for (let W = 0; W < P; W++) {
          const D = W * A - J;
          $[_] = D * E, $[f] = z * y, $[p] = C, c.push($.x, $.y, $.z), $[_] = 0, $[f] = 0, $[p] = b > 0 ? 1 : -1, u.push($.x, $.y, $.z), h.push(W / w), h.push(1 - Z / G), X += 1;
        }
      }
      for (let Z = 0; Z < G; Z++)
        for (let z = 0; z < w; z++) {
          const W = d + z + P * Z, D = d + z + P * (Z + 1), Q = d + (z + 1) + P * (Z + 1), ae = d + (z + 1) + P * Z;
          l.push(W, D, ae), l.push(D, Q, ae), O += 6;
        }
      a.addGroup(m, O, S), m += O, d += X;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new pt(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function fs(s) {
  const e = {};
  for (const t in s) {
    e[t] = {};
    for (const n in s[t]) {
      const i = s[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function kt(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const n = fs(s[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function _m(s) {
  const e = [];
  for (let t = 0; t < s.length; t++)
    e.push(s[t].clone());
  return e;
}
function vh(s) {
  return s.getRenderTarget() === null ? s.outputColorSpace : st.workingColorSpace;
}
const vm = { clone: fs, merge: kt };
var ym = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, xm = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Ci extends bn {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = ym, this.fragmentShader = xm, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      derivatives: !1,
      // set to use derivatives
      fragDepth: !1,
      // set to use fragment depth values
      drawBuffers: !1,
      // set to use draw buffers
      shaderTextureLOD: !1,
      // set to use shader texture LOD
      clipCullDistance: !1
      // set to use vertex shader clipping
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = fs(e.uniforms), this.uniformsGroups = _m(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const o = this.uniforms[i].value;
      o && o.isTexture ? t.uniforms[i] = {
        type: "t",
        value: o.toJSON(e).uuid
      } : o && o.isColor ? t.uniforms[i] = {
        type: "c",
        value: o.getHex()
      } : o && o.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: o.toArray()
      } : o && o.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: o.toArray()
      } : o && o.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: o.toArray()
      } : o && o.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: o.toArray()
      } : o && o.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: o.toArray()
      } : t.uniforms[i] = {
        value: o
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class yh extends gt {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Ye(), this.projectionMatrix = new Ye(), this.projectionMatrixInverse = new Ye(), this.coordinateSystem = Vn;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Gt extends yh {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = ds * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(Vs * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return ds * 2 * Math.atan(
      Math.tan(Vs * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, i, r, o) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Vs * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth, c = o.fullHeight;
      r += o.offsetX * i / l, t -= o.offsetY * n / c, i *= o.width / l, n *= o.height / c;
    }
    const a = this.filmOffset;
    a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Xi = -90, qi = 1;
class Em extends gt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new Gt(Xi, qi, e, t);
    i.layers = this.layers, this.add(i);
    const r = new Gt(Xi, qi, e, t);
    r.layers = this.layers, this.add(r);
    const o = new Gt(Xi, qi, e, t);
    o.layers = this.layers, this.add(o);
    const a = new Gt(Xi, qi, e, t);
    a.layers = this.layers, this.add(a);
    const l = new Gt(Xi, qi, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Gt(Xi, qi, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, r, o, a, l] = t;
    for (const c of t) this.remove(c);
    if (e === Vn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === Qr)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [r, o, a, l, c, u] = this.children, h = e.getRenderTarget(), d = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, i), e.render(t, r), e.setRenderTarget(n, 1, i), e.render(t, o), e.setRenderTarget(n, 2, i), e.render(t, a), e.setRenderTarget(n, 3, i), e.render(t, l), e.setRenderTarget(n, 4, i), e.render(t, c), n.texture.generateMipmaps = _, e.setRenderTarget(n, 5, i), e.render(t, u), e.setRenderTarget(h, d, m), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class xh extends Dt {
  constructor(e, t, n, i, r, o, a, l, c, u) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : as, super(e, t, n, i, r, o, a, l, c, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Sm extends Ri {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    t.encoding !== void 0 && (ks("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === Ti ? mt : ln), this.texture = new xh(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : qt;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, i = new pt(5, 5, 5), r = new Ci({
      name: "CubemapFromEquirect",
      uniforms: fs(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: $t,
      blending: ti
    });
    r.uniforms.tEquirect.value = t;
    const o = new He(i, r), a = t.minFilter;
    return t.minFilter === wi && (t.minFilter = qt), new Em(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const jo = /* @__PURE__ */ new N(), Mm = /* @__PURE__ */ new N(), Am = /* @__PURE__ */ new qe();
class pi {
  constructor(e = new N(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = jo.subVectors(n, t).cross(Mm.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(jo), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Am.getNormalMatrix(e), i = this.coplanarPoint(jo).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(r), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const hi = /* @__PURE__ */ new wn(), Ar = /* @__PURE__ */ new N();
class Xa {
  constructor(e = new pi(), t = new pi(), n = new pi(), i = new pi(), r = new pi(), o = new pi()) {
    this.planes = [e, t, n, i, r, o];
  }
  set(e, t, n, i, r, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = Vn) {
    const n = this.planes, i = e.elements, r = i[0], o = i[1], a = i[2], l = i[3], c = i[4], u = i[5], h = i[6], d = i[7], m = i[8], g = i[9], _ = i[10], f = i[11], p = i[12], E = i[13], y = i[14], T = i[15];
    if (n[0].setComponents(l - r, d - c, f - m, T - p).normalize(), n[1].setComponents(l + r, d + c, f + m, T + p).normalize(), n[2].setComponents(l + o, d + u, f + g, T + E).normalize(), n[3].setComponents(l - o, d - u, f - g, T - E).normalize(), n[4].setComponents(l - a, d - h, f - _, T - y).normalize(), t === Vn)
      n[5].setComponents(l + a, d + h, f + _, T + y).normalize();
    else if (t === Qr)
      n[5].setComponents(a, h, _, y).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(hi);
  }
  intersectsSprite(e) {
    return hi.center.set(0, 0, 0), hi.radius = 0.7071067811865476, hi.applyMatrix4(e.matrixWorld), this.intersectsSphere(hi);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let r = 0; r < 6; r++)
      if (t[r].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (Ar.x = i.normal.x > 0 ? e.max.x : e.min.x, Ar.y = i.normal.y > 0 ? e.max.y : e.min.y, Ar.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Ar) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Eh() {
  let s = null, e = !1, t = null, n = null;
  function i(r, o) {
    t(r, o), n = s.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = s.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      s.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(r) {
      t = r;
    },
    setContext: function(r) {
      s = r;
    }
  };
}
function Tm(s, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(c, u) {
    const h = c.array, d = c.usage, m = h.byteLength, g = s.createBuffer();
    s.bindBuffer(u, g), s.bufferData(u, h, d), c.onUploadCallback();
    let _;
    if (h instanceof Float32Array)
      _ = s.FLOAT;
    else if (h instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t)
          _ = s.HALF_FLOAT;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        _ = s.UNSIGNED_SHORT;
    else if (h instanceof Int16Array)
      _ = s.SHORT;
    else if (h instanceof Uint32Array)
      _ = s.UNSIGNED_INT;
    else if (h instanceof Int32Array)
      _ = s.INT;
    else if (h instanceof Int8Array)
      _ = s.BYTE;
    else if (h instanceof Uint8Array)
      _ = s.UNSIGNED_BYTE;
    else if (h instanceof Uint8ClampedArray)
      _ = s.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + h);
    return {
      buffer: g,
      type: _,
      bytesPerElement: h.BYTES_PER_ELEMENT,
      version: c.version,
      size: m
    };
  }
  function r(c, u, h) {
    const d = u.array, m = u._updateRange, g = u.updateRanges;
    if (s.bindBuffer(h, c), m.count === -1 && g.length === 0 && s.bufferSubData(h, 0, d), g.length !== 0) {
      for (let _ = 0, f = g.length; _ < f; _++) {
        const p = g[_];
        t ? s.bufferSubData(
          h,
          p.start * d.BYTES_PER_ELEMENT,
          d,
          p.start,
          p.count
        ) : s.bufferSubData(
          h,
          p.start * d.BYTES_PER_ELEMENT,
          d.subarray(p.start, p.start + p.count)
        );
      }
      u.clearUpdateRanges();
    }
    m.count !== -1 && (t ? s.bufferSubData(
      h,
      m.offset * d.BYTES_PER_ELEMENT,
      d,
      m.offset,
      m.count
    ) : s.bufferSubData(
      h,
      m.offset * d.BYTES_PER_ELEMENT,
      d.subarray(m.offset, m.offset + m.count)
    ), m.count = -1), u.onUploadCallback();
  }
  function o(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function a(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u && (s.deleteBuffer(u.buffer), n.delete(c));
  }
  function l(c, u) {
    if (c.isGLBufferAttribute) {
      const d = n.get(c);
      (!d || d.version < c.version) && n.set(c, {
        buffer: c.buffer,
        type: c.type,
        bytesPerElement: c.elementSize,
        version: c.version
      });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const h = n.get(c);
    if (h === void 0)
      n.set(c, i(c, u));
    else if (h.version < c.version) {
      if (h.size !== c.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      r(h.buffer, c, u), h.version = c.version;
    }
  }
  return {
    get: o,
    remove: a,
    update: l
  };
}
class Zn extends yn {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const r = e / 2, o = t / 2, a = Math.floor(n), l = Math.floor(i), c = a + 1, u = l + 1, h = e / a, d = t / l, m = [], g = [], _ = [], f = [];
    for (let p = 0; p < u; p++) {
      const E = p * d - o;
      for (let y = 0; y < c; y++) {
        const T = y * h - r;
        g.push(T, -E, 0), _.push(0, 0, 1), f.push(y / a), f.push(1 - p / l);
      }
    }
    for (let p = 0; p < l; p++)
      for (let E = 0; E < a; E++) {
        const y = E + c * p, T = E + c * (p + 1), R = E + 1 + c * (p + 1), b = E + 1 + c * p;
        m.push(y, T, b), m.push(T, R, b);
      }
    this.setIndex(m), this.setAttribute("position", new cn(g, 3)), this.setAttribute("normal", new cn(_, 3)), this.setAttribute("uv", new cn(f, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Zn(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var bm = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, wm = `#ifdef USE_ALPHAHASH
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
#endif`, Rm = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Cm = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Lm = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Pm = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Im = `#ifdef USE_AOMAP
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
#endif`, Dm = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Um = `#ifdef USE_BATCHING
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
#endif`, Nm = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`, Om = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Fm = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Bm = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Vm = `#ifdef USE_IRIDESCENCE
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
#endif`, zm = `#ifdef USE_BUMPMAP
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
#endif`, km = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, Hm = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Gm = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Wm = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, jm = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Xm = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, qm = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Ym = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, Km = `#define PI 3.141592653589793
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
} // validated`, $m = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, Jm = `vec3 transformedNormal = objectNormal;
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
#endif`, Zm = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Qm = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, eg = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, tg = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, ng = "gl_FragColor = linearToOutputTexel( gl_FragColor );", ig = `
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
}`, sg = `#ifdef USE_ENVMAP
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
#endif`, rg = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, og = `#ifdef USE_ENVMAP
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
#endif`, ag = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, lg = `#ifdef USE_ENVMAP
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
#endif`, cg = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, ug = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, hg = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, dg = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, fg = `#ifdef USE_GRADIENTMAP
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
}`, pg = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, mg = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, gg = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, _g = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, vg = `uniform bool receiveShadow;
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
#endif`, yg = `#ifdef USE_ENVMAP
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
#endif`, xg = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Eg = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Sg = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Mg = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Ag = `PhysicalMaterial material;
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
#endif`, Tg = `struct PhysicalMaterial {
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
}`, bg = `
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
#endif`, wg = `#if defined( RE_IndirectDiffuse )
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
#endif`, Rg = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Cg = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Lg = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Pg = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Ig = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Dg = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Ug = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Ng = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Og = `#if defined( USE_POINTS_UV )
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
#endif`, Fg = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Bg = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Vg = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, zg = `#ifdef USE_MORPHNORMALS
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
#endif`, kg = `#ifdef USE_MORPHTARGETS
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
#endif`, Hg = `#ifdef USE_MORPHTARGETS
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
#endif`, Gg = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, Wg = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, jg = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Xg = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, qg = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Yg = `#ifdef USE_NORMALMAP
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
#endif`, Kg = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, $g = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Jg = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Zg = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Qg = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, e_ = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, t_ = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, n_ = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, i_ = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, s_ = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, r_ = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, o_ = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, a_ = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, l_ = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, c_ = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, u_ = `float getShadowMask() {
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
}`, h_ = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, d_ = `#ifdef USE_SKINNING
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
#endif`, f_ = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, p_ = `#ifdef USE_SKINNING
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
#endif`, m_ = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, g_ = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, __ = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, v_ = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, y_ = `#ifdef USE_TRANSMISSION
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
#endif`, x_ = `#ifdef USE_TRANSMISSION
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
#endif`, E_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, S_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, M_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, A_ = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const T_ = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, b_ = `uniform sampler2D t2D;
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
}`, w_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, R_ = `#ifdef ENVMAP_TYPE_CUBE
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
}`, C_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, L_ = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, P_ = `#include <common>
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
}`, I_ = `#if DEPTH_PACKING == 3200
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
}`, D_ = `#define DISTANCE
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
}`, U_ = `#define DISTANCE
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
}`, N_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, O_ = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, F_ = `uniform float scale;
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
}`, B_ = `uniform vec3 diffuse;
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
}`, V_ = `#include <common>
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
}`, z_ = `uniform vec3 diffuse;
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
}`, k_ = `#define LAMBERT
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
}`, H_ = `#define LAMBERT
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
}`, G_ = `#define MATCAP
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
}`, W_ = `#define MATCAP
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
}`, j_ = `#define NORMAL
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
}`, X_ = `#define NORMAL
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
}`, q_ = `#define PHONG
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
}`, Y_ = `#define PHONG
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
}`, K_ = `#define STANDARD
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
}`, $_ = `#define STANDARD
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
}`, J_ = `#define TOON
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
}`, Z_ = `#define TOON
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
}`, Q_ = `uniform float size;
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
}`, ev = `uniform vec3 diffuse;
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
}`, tv = `#include <common>
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
}`, nv = `uniform vec3 color;
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
}`, iv = `uniform float rotation;
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
}`, sv = `uniform vec3 diffuse;
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
}`, Ge = {
  alphahash_fragment: bm,
  alphahash_pars_fragment: wm,
  alphamap_fragment: Rm,
  alphamap_pars_fragment: Cm,
  alphatest_fragment: Lm,
  alphatest_pars_fragment: Pm,
  aomap_fragment: Im,
  aomap_pars_fragment: Dm,
  batching_pars_vertex: Um,
  batching_vertex: Nm,
  begin_vertex: Om,
  beginnormal_vertex: Fm,
  bsdfs: Bm,
  iridescence_fragment: Vm,
  bumpmap_pars_fragment: zm,
  clipping_planes_fragment: km,
  clipping_planes_pars_fragment: Hm,
  clipping_planes_pars_vertex: Gm,
  clipping_planes_vertex: Wm,
  color_fragment: jm,
  color_pars_fragment: Xm,
  color_pars_vertex: qm,
  color_vertex: Ym,
  common: Km,
  cube_uv_reflection_fragment: $m,
  defaultnormal_vertex: Jm,
  displacementmap_pars_vertex: Zm,
  displacementmap_vertex: Qm,
  emissivemap_fragment: eg,
  emissivemap_pars_fragment: tg,
  colorspace_fragment: ng,
  colorspace_pars_fragment: ig,
  envmap_fragment: sg,
  envmap_common_pars_fragment: rg,
  envmap_pars_fragment: og,
  envmap_pars_vertex: ag,
  envmap_physical_pars_fragment: yg,
  envmap_vertex: lg,
  fog_vertex: cg,
  fog_pars_vertex: ug,
  fog_fragment: hg,
  fog_pars_fragment: dg,
  gradientmap_pars_fragment: fg,
  lightmap_fragment: pg,
  lightmap_pars_fragment: mg,
  lights_lambert_fragment: gg,
  lights_lambert_pars_fragment: _g,
  lights_pars_begin: vg,
  lights_toon_fragment: xg,
  lights_toon_pars_fragment: Eg,
  lights_phong_fragment: Sg,
  lights_phong_pars_fragment: Mg,
  lights_physical_fragment: Ag,
  lights_physical_pars_fragment: Tg,
  lights_fragment_begin: bg,
  lights_fragment_maps: wg,
  lights_fragment_end: Rg,
  logdepthbuf_fragment: Cg,
  logdepthbuf_pars_fragment: Lg,
  logdepthbuf_pars_vertex: Pg,
  logdepthbuf_vertex: Ig,
  map_fragment: Dg,
  map_pars_fragment: Ug,
  map_particle_fragment: Ng,
  map_particle_pars_fragment: Og,
  metalnessmap_fragment: Fg,
  metalnessmap_pars_fragment: Bg,
  morphcolor_vertex: Vg,
  morphnormal_vertex: zg,
  morphtarget_pars_vertex: kg,
  morphtarget_vertex: Hg,
  normal_fragment_begin: Gg,
  normal_fragment_maps: Wg,
  normal_pars_fragment: jg,
  normal_pars_vertex: Xg,
  normal_vertex: qg,
  normalmap_pars_fragment: Yg,
  clearcoat_normal_fragment_begin: Kg,
  clearcoat_normal_fragment_maps: $g,
  clearcoat_pars_fragment: Jg,
  iridescence_pars_fragment: Zg,
  opaque_fragment: Qg,
  packing: e_,
  premultiplied_alpha_fragment: t_,
  project_vertex: n_,
  dithering_fragment: i_,
  dithering_pars_fragment: s_,
  roughnessmap_fragment: r_,
  roughnessmap_pars_fragment: o_,
  shadowmap_pars_fragment: a_,
  shadowmap_pars_vertex: l_,
  shadowmap_vertex: c_,
  shadowmask_pars_fragment: u_,
  skinbase_vertex: h_,
  skinning_pars_vertex: d_,
  skinning_vertex: f_,
  skinnormal_vertex: p_,
  specularmap_fragment: m_,
  specularmap_pars_fragment: g_,
  tonemapping_fragment: __,
  tonemapping_pars_fragment: v_,
  transmission_fragment: y_,
  transmission_pars_fragment: x_,
  uv_pars_fragment: E_,
  uv_pars_vertex: S_,
  uv_vertex: M_,
  worldpos_vertex: A_,
  background_vert: T_,
  background_frag: b_,
  backgroundCube_vert: w_,
  backgroundCube_frag: R_,
  cube_vert: C_,
  cube_frag: L_,
  depth_vert: P_,
  depth_frag: I_,
  distanceRGBA_vert: D_,
  distanceRGBA_frag: U_,
  equirect_vert: N_,
  equirect_frag: O_,
  linedashed_vert: F_,
  linedashed_frag: B_,
  meshbasic_vert: V_,
  meshbasic_frag: z_,
  meshlambert_vert: k_,
  meshlambert_frag: H_,
  meshmatcap_vert: G_,
  meshmatcap_frag: W_,
  meshnormal_vert: j_,
  meshnormal_frag: X_,
  meshphong_vert: q_,
  meshphong_frag: Y_,
  meshphysical_vert: K_,
  meshphysical_frag: $_,
  meshtoon_vert: J_,
  meshtoon_frag: Z_,
  points_vert: Q_,
  points_frag: ev,
  shadow_vert: tv,
  shadow_frag: nv,
  sprite_vert: iv,
  sprite_frag: sv
}, ge = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Oe(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new qe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new qe() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new qe() }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new qe() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new qe() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new qe() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new qe() },
    normalScale: { value: /* @__PURE__ */ new Je(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new qe() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new qe() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new qe() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new qe() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Oe(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Oe(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new qe() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new qe() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Oe(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Je(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new qe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new qe() },
    alphaTest: { value: 0 }
  }
}, Mn = {
  basic: {
    uniforms: /* @__PURE__ */ kt([
      ge.common,
      ge.specularmap,
      ge.envmap,
      ge.aomap,
      ge.lightmap,
      ge.fog
    ]),
    vertexShader: Ge.meshbasic_vert,
    fragmentShader: Ge.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ kt([
      ge.common,
      ge.specularmap,
      ge.envmap,
      ge.aomap,
      ge.lightmap,
      ge.emissivemap,
      ge.bumpmap,
      ge.normalmap,
      ge.displacementmap,
      ge.fog,
      ge.lights,
      {
        emissive: { value: /* @__PURE__ */ new Oe(0) }
      }
    ]),
    vertexShader: Ge.meshlambert_vert,
    fragmentShader: Ge.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ kt([
      ge.common,
      ge.specularmap,
      ge.envmap,
      ge.aomap,
      ge.lightmap,
      ge.emissivemap,
      ge.bumpmap,
      ge.normalmap,
      ge.displacementmap,
      ge.fog,
      ge.lights,
      {
        emissive: { value: /* @__PURE__ */ new Oe(0) },
        specular: { value: /* @__PURE__ */ new Oe(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Ge.meshphong_vert,
    fragmentShader: Ge.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ kt([
      ge.common,
      ge.envmap,
      ge.aomap,
      ge.lightmap,
      ge.emissivemap,
      ge.bumpmap,
      ge.normalmap,
      ge.displacementmap,
      ge.roughnessmap,
      ge.metalnessmap,
      ge.fog,
      ge.lights,
      {
        emissive: { value: /* @__PURE__ */ new Oe(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: Ge.meshphysical_vert,
    fragmentShader: Ge.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ kt([
      ge.common,
      ge.aomap,
      ge.lightmap,
      ge.emissivemap,
      ge.bumpmap,
      ge.normalmap,
      ge.displacementmap,
      ge.gradientmap,
      ge.fog,
      ge.lights,
      {
        emissive: { value: /* @__PURE__ */ new Oe(0) }
      }
    ]),
    vertexShader: Ge.meshtoon_vert,
    fragmentShader: Ge.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ kt([
      ge.common,
      ge.bumpmap,
      ge.normalmap,
      ge.displacementmap,
      ge.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ge.meshmatcap_vert,
    fragmentShader: Ge.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ kt([
      ge.points,
      ge.fog
    ]),
    vertexShader: Ge.points_vert,
    fragmentShader: Ge.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ kt([
      ge.common,
      ge.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ge.linedashed_vert,
    fragmentShader: Ge.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ kt([
      ge.common,
      ge.displacementmap
    ]),
    vertexShader: Ge.depth_vert,
    fragmentShader: Ge.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ kt([
      ge.common,
      ge.bumpmap,
      ge.normalmap,
      ge.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ge.meshnormal_vert,
    fragmentShader: Ge.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ kt([
      ge.sprite,
      ge.fog
    ]),
    vertexShader: Ge.sprite_vert,
    fragmentShader: Ge.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new qe() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ge.background_vert,
    fragmentShader: Ge.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ge.backgroundCube_vert,
    fragmentShader: Ge.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Ge.cube_vert,
    fragmentShader: Ge.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ge.equirect_vert,
    fragmentShader: Ge.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ kt([
      ge.common,
      ge.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new N() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ge.distanceRGBA_vert,
    fragmentShader: Ge.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ kt([
      ge.lights,
      ge.fog,
      {
        color: { value: /* @__PURE__ */ new Oe(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ge.shadow_vert,
    fragmentShader: Ge.shadow_frag
  }
};
Mn.physical = {
  uniforms: /* @__PURE__ */ kt([
    Mn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new qe() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new qe() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Je(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new qe() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new qe() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new qe() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Oe(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new qe() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new qe() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new qe() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Je() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new qe() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Oe(0) },
      specularColor: { value: /* @__PURE__ */ new Oe(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new qe() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new qe() },
      anisotropyVector: { value: /* @__PURE__ */ new Je() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new qe() }
    }
  ]),
  vertexShader: Ge.meshphysical_vert,
  fragmentShader: Ge.meshphysical_frag
};
const Tr = { r: 0, b: 0, g: 0 };
function rv(s, e, t, n, i, r, o) {
  const a = new Oe(0);
  let l = r === !0 ? 0 : 1, c, u, h = null, d = 0, m = null;
  function g(f, p) {
    let E = !1, y = p.isScene === !0 ? p.background : null;
    y && y.isTexture && (y = (p.backgroundBlurriness > 0 ? t : e).get(y)), y === null ? _(a, l) : y && y.isColor && (_(y, 1), E = !0);
    const T = s.xr.getEnvironmentBlendMode();
    T === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : T === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (s.autoClear || E) && s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil), y && (y.isCubeTexture || y.mapping === ao) ? (u === void 0 && (u = new He(
      new pt(1, 1, 1),
      new Ci({
        name: "BackgroundCubeMaterial",
        uniforms: fs(Mn.backgroundCube.uniforms),
        vertexShader: Mn.backgroundCube.vertexShader,
        fragmentShader: Mn.backgroundCube.fragmentShader,
        side: $t,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(R, b, w) {
      this.matrixWorld.copyPosition(w.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(u)), u.material.uniforms.envMap.value = y, u.material.uniforms.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = p.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, u.material.toneMapped = st.getTransfer(y.colorSpace) !== ht, (h !== y || d !== y.version || m !== s.toneMapping) && (u.material.needsUpdate = !0, h = y, d = y.version, m = s.toneMapping), u.layers.enableAll(), f.unshift(u, u.geometry, u.material, 0, 0, null)) : y && y.isTexture && (c === void 0 && (c = new He(
      new Zn(2, 2),
      new Ci({
        name: "BackgroundMaterial",
        uniforms: fs(Mn.background.uniforms),
        vertexShader: Mn.background.vertexShader,
        fragmentShader: Mn.background.fragmentShader,
        side: zn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(c)), c.material.uniforms.t2D.value = y, c.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, c.material.toneMapped = st.getTransfer(y.colorSpace) !== ht, y.matrixAutoUpdate === !0 && y.updateMatrix(), c.material.uniforms.uvTransform.value.copy(y.matrix), (h !== y || d !== y.version || m !== s.toneMapping) && (c.material.needsUpdate = !0, h = y, d = y.version, m = s.toneMapping), c.layers.enableAll(), f.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function _(f, p) {
    f.getRGB(Tr, vh(s)), n.buffers.color.setClear(Tr.r, Tr.g, Tr.b, p, o);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(f, p = 1) {
      a.set(f), l = p, _(a, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(f) {
      l = f, _(a, l);
    },
    render: g
  };
}
function ov(s, e, t, n) {
  const i = s.getParameter(s.MAX_VERTEX_ATTRIBS), r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || r !== null, a = {}, l = f(null);
  let c = l, u = !1;
  function h(C, P, U, X, O) {
    let $ = !1;
    if (o) {
      const Z = _(X, U, P);
      c !== Z && (c = Z, m(c.object)), $ = p(C, X, U, O), $ && E(C, X, U, O);
    } else {
      const Z = P.wireframe === !0;
      (c.geometry !== X.id || c.program !== U.id || c.wireframe !== Z) && (c.geometry = X.id, c.program = U.id, c.wireframe = Z, $ = !0);
    }
    O !== null && t.update(O, s.ELEMENT_ARRAY_BUFFER), ($ || u) && (u = !1, G(C, P, U, X), O !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, t.get(O).buffer));
  }
  function d() {
    return n.isWebGL2 ? s.createVertexArray() : r.createVertexArrayOES();
  }
  function m(C) {
    return n.isWebGL2 ? s.bindVertexArray(C) : r.bindVertexArrayOES(C);
  }
  function g(C) {
    return n.isWebGL2 ? s.deleteVertexArray(C) : r.deleteVertexArrayOES(C);
  }
  function _(C, P, U) {
    const X = U.wireframe === !0;
    let O = a[C.id];
    O === void 0 && (O = {}, a[C.id] = O);
    let $ = O[P.id];
    $ === void 0 && ($ = {}, O[P.id] = $);
    let Z = $[X];
    return Z === void 0 && (Z = f(d()), $[X] = Z), Z;
  }
  function f(C) {
    const P = [], U = [], X = [];
    for (let O = 0; O < i; O++)
      P[O] = 0, U[O] = 0, X[O] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: P,
      enabledAttributes: U,
      attributeDivisors: X,
      object: C,
      attributes: {},
      index: null
    };
  }
  function p(C, P, U, X) {
    const O = c.attributes, $ = P.attributes;
    let Z = 0;
    const z = U.getAttributes();
    for (const W in z)
      if (z[W].location >= 0) {
        const Q = O[W];
        let ae = $[W];
        if (ae === void 0 && (W === "instanceMatrix" && C.instanceMatrix && (ae = C.instanceMatrix), W === "instanceColor" && C.instanceColor && (ae = C.instanceColor)), Q === void 0 || Q.attribute !== ae || ae && Q.data !== ae.data) return !0;
        Z++;
      }
    return c.attributesNum !== Z || c.index !== X;
  }
  function E(C, P, U, X) {
    const O = {}, $ = P.attributes;
    let Z = 0;
    const z = U.getAttributes();
    for (const W in z)
      if (z[W].location >= 0) {
        let Q = $[W];
        Q === void 0 && (W === "instanceMatrix" && C.instanceMatrix && (Q = C.instanceMatrix), W === "instanceColor" && C.instanceColor && (Q = C.instanceColor));
        const ae = {};
        ae.attribute = Q, Q && Q.data && (ae.data = Q.data), O[W] = ae, Z++;
      }
    c.attributes = O, c.attributesNum = Z, c.index = X;
  }
  function y() {
    const C = c.newAttributes;
    for (let P = 0, U = C.length; P < U; P++)
      C[P] = 0;
  }
  function T(C) {
    R(C, 0);
  }
  function R(C, P) {
    const U = c.newAttributes, X = c.enabledAttributes, O = c.attributeDivisors;
    U[C] = 1, X[C] === 0 && (s.enableVertexAttribArray(C), X[C] = 1), O[C] !== P && ((n.isWebGL2 ? s : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](C, P), O[C] = P);
  }
  function b() {
    const C = c.newAttributes, P = c.enabledAttributes;
    for (let U = 0, X = P.length; U < X; U++)
      P[U] !== C[U] && (s.disableVertexAttribArray(U), P[U] = 0);
  }
  function w(C, P, U, X, O, $, Z) {
    Z === !0 ? s.vertexAttribIPointer(C, P, U, O, $) : s.vertexAttribPointer(C, P, U, X, O, $);
  }
  function G(C, P, U, X) {
    if (n.isWebGL2 === !1 && (C.isInstancedMesh || X.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    y();
    const O = X.attributes, $ = U.getAttributes(), Z = P.defaultAttributeValues;
    for (const z in $) {
      const W = $[z];
      if (W.location >= 0) {
        let D = O[z];
        if (D === void 0 && (z === "instanceMatrix" && C.instanceMatrix && (D = C.instanceMatrix), z === "instanceColor" && C.instanceColor && (D = C.instanceColor)), D !== void 0) {
          const Q = D.normalized, ae = D.itemSize, he = t.get(D);
          if (he === void 0) continue;
          const ne = he.buffer, oe = he.type, xe = he.bytesPerElement, Me = n.isWebGL2 === !0 && (oe === s.INT || oe === s.UNSIGNED_INT || D.gpuType === Qu);
          if (D.isInterleavedBufferAttribute) {
            const Be = D.data, B = Be.stride, _t = D.offset;
            if (Be.isInstancedInterleavedBuffer) {
              for (let be = 0; be < W.locationSize; be++)
                R(W.location + be, Be.meshPerAttribute);
              C.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = Be.meshPerAttribute * Be.count);
            } else
              for (let be = 0; be < W.locationSize; be++)
                T(W.location + be);
            s.bindBuffer(s.ARRAY_BUFFER, ne);
            for (let be = 0; be < W.locationSize; be++)
              w(
                W.location + be,
                ae / W.locationSize,
                oe,
                Q,
                B * xe,
                (_t + ae / W.locationSize * be) * xe,
                Me
              );
          } else {
            if (D.isInstancedBufferAttribute) {
              for (let Be = 0; Be < W.locationSize; Be++)
                R(W.location + Be, D.meshPerAttribute);
              C.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = D.meshPerAttribute * D.count);
            } else
              for (let Be = 0; Be < W.locationSize; Be++)
                T(W.location + Be);
            s.bindBuffer(s.ARRAY_BUFFER, ne);
            for (let Be = 0; Be < W.locationSize; Be++)
              w(
                W.location + Be,
                ae / W.locationSize,
                oe,
                Q,
                ae * xe,
                ae / W.locationSize * Be * xe,
                Me
              );
          }
        } else if (Z !== void 0) {
          const Q = Z[z];
          if (Q !== void 0)
            switch (Q.length) {
              case 2:
                s.vertexAttrib2fv(W.location, Q);
                break;
              case 3:
                s.vertexAttrib3fv(W.location, Q);
                break;
              case 4:
                s.vertexAttrib4fv(W.location, Q);
                break;
              default:
                s.vertexAttrib1fv(W.location, Q);
            }
        }
      }
    }
    b();
  }
  function S() {
    J();
    for (const C in a) {
      const P = a[C];
      for (const U in P) {
        const X = P[U];
        for (const O in X)
          g(X[O].object), delete X[O];
        delete P[U];
      }
      delete a[C];
    }
  }
  function A(C) {
    if (a[C.id] === void 0) return;
    const P = a[C.id];
    for (const U in P) {
      const X = P[U];
      for (const O in X)
        g(X[O].object), delete X[O];
      delete P[U];
    }
    delete a[C.id];
  }
  function V(C) {
    for (const P in a) {
      const U = a[P];
      if (U[C.id] === void 0) continue;
      const X = U[C.id];
      for (const O in X)
        g(X[O].object), delete X[O];
      delete U[C.id];
    }
  }
  function J() {
    se(), u = !0, c !== l && (c = l, m(c.object));
  }
  function se() {
    l.geometry = null, l.program = null, l.wireframe = !1;
  }
  return {
    setup: h,
    reset: J,
    resetDefaultState: se,
    dispose: S,
    releaseStatesOfGeometry: A,
    releaseStatesOfProgram: V,
    initAttributes: y,
    enableAttribute: T,
    disableUnusedAttributes: b
  };
}
function av(s, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function o(u) {
    r = u;
  }
  function a(u, h) {
    s.drawArrays(r, u, h), t.update(h, r, 1);
  }
  function l(u, h, d) {
    if (d === 0) return;
    let m, g;
    if (i)
      m = s, g = "drawArraysInstanced";
    else if (m = e.get("ANGLE_instanced_arrays"), g = "drawArraysInstancedANGLE", m === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    m[g](r, u, h, d), t.update(h, r, d);
  }
  function c(u, h, d) {
    if (d === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null)
      for (let g = 0; g < d; g++)
        this.render(u[g], h[g]);
    else {
      m.multiDrawArraysWEBGL(r, u, 0, h, 0, d);
      let g = 0;
      for (let _ = 0; _ < d; _++)
        g += h[_];
      t.update(g, r, 1);
    }
  }
  this.setMode = o, this.render = a, this.renderInstances = l, this.renderMultiDraw = c;
}
function lv(s, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const w = e.get("EXT_texture_filter_anisotropic");
      n = s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function r(w) {
    if (w === "highp") {
      if (s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision > 0)
        return "highp";
      w = "mediump";
    }
    return w === "mediump" && s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && s.constructor.name === "WebGL2RenderingContext";
  let a = t.precision !== void 0 ? t.precision : "highp";
  const l = r(a);
  l !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", l, "instead."), a = l);
  const c = o || e.has("WEBGL_draw_buffers"), u = t.logarithmicDepthBuffer === !0, h = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS), d = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS), m = s.getParameter(s.MAX_TEXTURE_SIZE), g = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE), _ = s.getParameter(s.MAX_VERTEX_ATTRIBS), f = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS), p = s.getParameter(s.MAX_VARYING_VECTORS), E = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS), y = d > 0, T = o || e.has("OES_texture_float"), R = y && T, b = o ? s.getParameter(s.MAX_SAMPLES) : 0;
  return {
    isWebGL2: o,
    drawBuffers: c,
    getMaxAnisotropy: i,
    getMaxPrecision: r,
    precision: a,
    logarithmicDepthBuffer: u,
    maxTextures: h,
    maxVertexTextures: d,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: _,
    maxVertexUniforms: f,
    maxVaryings: p,
    maxFragmentUniforms: E,
    vertexTextures: y,
    floatFragmentTextures: T,
    floatVertexTextures: R,
    maxSamples: b
  };
}
function cv(s) {
  const e = this;
  let t = null, n = 0, i = !1, r = !1;
  const o = new pi(), a = new qe(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, d) {
    const m = h.length !== 0 || d || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = d, n = h.length, m;
  }, this.beginShadows = function() {
    r = !0, u(null);
  }, this.endShadows = function() {
    r = !1;
  }, this.setGlobalState = function(h, d) {
    t = u(h, d, 0);
  }, this.setState = function(h, d, m) {
    const g = h.clippingPlanes, _ = h.clipIntersection, f = h.clipShadows, p = s.get(h);
    if (!i || g === null || g.length === 0 || r && !f)
      r ? u(null) : c();
    else {
      const E = r ? 0 : n, y = E * 4;
      let T = p.clippingState || null;
      l.value = T, T = u(g, d, y, m);
      for (let R = 0; R !== y; ++R)
        T[R] = t[R];
      p.clippingState = T, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += E;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(h, d, m, g) {
    const _ = h !== null ? h.length : 0;
    let f = null;
    if (_ !== 0) {
      if (f = l.value, g !== !0 || f === null) {
        const p = m + _ * 4, E = d.matrixWorldInverse;
        a.getNormalMatrix(E), (f === null || f.length < p) && (f = new Float32Array(p));
        for (let y = 0, T = m; y !== _; ++y, T += 4)
          o.copy(h[y]).applyMatrix4(E, a), o.normal.toArray(f, T), f[T + 3] = o.constant;
      }
      l.value = f, l.needsUpdate = !0;
    }
    return e.numPlanes = _, e.numIntersection = 0, f;
  }
}
function uv(s) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === _a ? o.mapping = as : a === va && (o.mapping = ls), o;
  }
  function n(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === _a || a === va)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new Sm(l.height / 2);
            return c.fromEquirectangularTexture(s, o), e.set(o, c), o.addEventListener("dispose", i), t(c.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function i(o) {
    const a = o.target;
    a.removeEventListener("dispose", i);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
class qa extends yh {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, r, o) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let r = n - e, o = n + e, a = i + t, l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, o = r + c * this.view.width, a -= u * this.view.offsetY, l = a - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, o, a, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const ts = 4, xc = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], _i = 20, Xo = /* @__PURE__ */ new qa(), Ec = /* @__PURE__ */ new Oe();
let qo = null, Yo = 0, Ko = 0;
const mi = (1 + Math.sqrt(5)) / 2, Yi = 1 / mi, Sc = [
  /* @__PURE__ */ new N(1, 1, 1),
  /* @__PURE__ */ new N(-1, 1, 1),
  /* @__PURE__ */ new N(1, 1, -1),
  /* @__PURE__ */ new N(-1, 1, -1),
  /* @__PURE__ */ new N(0, mi, Yi),
  /* @__PURE__ */ new N(0, mi, -Yi),
  /* @__PURE__ */ new N(Yi, 0, mi),
  /* @__PURE__ */ new N(-Yi, 0, mi),
  /* @__PURE__ */ new N(mi, Yi, 0),
  /* @__PURE__ */ new N(-mi, Yi, 0)
];
class Mc {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, i = 100) {
    qo = this._renderer.getRenderTarget(), Yo = this._renderer.getActiveCubeFace(), Ko = this._renderer.getActiveMipmapLevel(), this._setSize(256);
    const r = this._allocateTargets();
    return r.depthBuffer = !0, this._sceneToCubeUV(e, n, i, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = bc(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Tc(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(qo, Yo, Ko), e.scissorTest = !1, br(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === as || e.mapping === ls ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), qo = this._renderer.getRenderTarget(), Yo = this._renderer.getActiveCubeFace(), Ko = this._renderer.getActiveMipmapLevel();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: qt,
      minFilter: qt,
      generateMipmaps: !1,
      type: js,
      format: an,
      colorSpace: Lt,
      depthBuffer: !1
    }, i = Ac(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Ac(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = hv(r)), this._blurMaterial = dv(r, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new He(this._lodPlanes[0], e);
    this._renderer.compile(t, Xo);
  }
  _sceneToCubeUV(e, t, n, i) {
    const a = new Gt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], u = this._renderer, h = u.autoClear, d = u.toneMapping;
    u.getClearColor(Ec), u.toneMapping = ni, u.autoClear = !1;
    const m = new xi({
      name: "PMREM.Background",
      side: $t,
      depthWrite: !1,
      depthTest: !1
    }), g = new He(new pt(), m);
    let _ = !1;
    const f = e.background;
    f ? f.isColor && (m.color.copy(f), e.background = null, _ = !0) : (m.color.copy(Ec), _ = !0);
    for (let p = 0; p < 6; p++) {
      const E = p % 3;
      E === 0 ? (a.up.set(0, l[p], 0), a.lookAt(c[p], 0, 0)) : E === 1 ? (a.up.set(0, 0, l[p]), a.lookAt(0, c[p], 0)) : (a.up.set(0, l[p], 0), a.lookAt(0, 0, c[p]));
      const y = this._cubeSize;
      br(i, E * y, p > 2 ? y : 0, y, y), u.setRenderTarget(i), _ && u.render(g, a), u.render(e, a);
    }
    g.geometry.dispose(), g.material.dispose(), u.toneMapping = d, u.autoClear = h, e.background = f;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === as || e.mapping === ls;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = bc()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Tc());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, o = new He(this._lodPlanes[0], r), a = r.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    br(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, Xo);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const r = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), o = Sc[(i - 1) % Sc.length];
      this._blur(e, i - 1, i, r, o);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, i, r) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      o,
      t,
      n,
      i,
      "latitudinal",
      r
    ), this._halfBlur(
      o,
      e,
      n,
      n,
      i,
      "longitudinal",
      r
    );
  }
  _halfBlur(e, t, n, i, r, o, a) {
    const l = this._renderer, c = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const u = 3, h = new He(this._lodPlanes[i], c), d = c.uniforms, m = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * _i - 1), _ = r / g, f = isFinite(r) ? 1 + Math.floor(u * _) : _i;
    f > _i && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${_i}`);
    const p = [];
    let E = 0;
    for (let w = 0; w < _i; ++w) {
      const G = w / _, S = Math.exp(-G * G / 2);
      p.push(S), w === 0 ? E += S : w < f && (E += 2 * S);
    }
    for (let w = 0; w < p.length; w++)
      p[w] = p[w] / E;
    d.envMap.value = e.texture, d.samples.value = f, d.weights.value = p, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a);
    const { _lodMax: y } = this;
    d.dTheta.value = g, d.mipInt.value = y - n;
    const T = this._sizeLods[i], R = 3 * T * (i > y - ts ? i - y + ts : 0), b = 4 * (this._cubeSize - T);
    br(t, R, b, 3 * T, 2 * T), l.setRenderTarget(t), l.render(h, Xo);
  }
}
function hv(s) {
  const e = [], t = [], n = [];
  let i = s;
  const r = s - ts + 1 + xc.length;
  for (let o = 0; o < r; o++) {
    const a = Math.pow(2, i);
    t.push(a);
    let l = 1 / a;
    o > s - ts ? l = xc[o - s + ts - 1] : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2), u = -c, h = 1 + c, d = [u, u, h, u, h, h, u, u, h, h, u, h], m = 6, g = 6, _ = 3, f = 2, p = 1, E = new Float32Array(_ * g * m), y = new Float32Array(f * g * m), T = new Float32Array(p * g * m);
    for (let b = 0; b < m; b++) {
      const w = b % 3 * 2 / 3 - 1, G = b > 2 ? 0 : -1, S = [
        w,
        G,
        0,
        w + 2 / 3,
        G,
        0,
        w + 2 / 3,
        G + 1,
        0,
        w,
        G,
        0,
        w + 2 / 3,
        G + 1,
        0,
        w,
        G + 1,
        0
      ];
      E.set(S, _ * g * b), y.set(d, f * g * b);
      const A = [b, b, b, b, b, b];
      T.set(A, p * g * b);
    }
    const R = new yn();
    R.setAttribute("position", new Wt(E, _)), R.setAttribute("uv", new Wt(y, f)), R.setAttribute("faceIndex", new Wt(T, p)), e.push(R), i > ts && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Ac(s, e, t) {
  const n = new Ri(s, e, t);
  return n.texture.mapping = ao, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function br(s, e, t, n, i) {
  s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i);
}
function dv(s, e, t) {
  const n = new Float32Array(_i), i = new N(0, 1, 0);
  return new Ci({
    name: "SphericalGaussianBlur",
    defines: {
      n: _i,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${s}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: Ya(),
    fragmentShader: (
      /* glsl */
      `

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
		`
    ),
    blending: ti,
    depthTest: !1,
    depthWrite: !1
  });
}
function Tc() {
  return new Ci({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Ya(),
    fragmentShader: (
      /* glsl */
      `

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
		`
    ),
    blending: ti,
    depthTest: !1,
    depthWrite: !1
  });
}
function bc() {
  return new Ci({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Ya(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: ti,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ya() {
  return (
    /* glsl */
    `

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
	`
  );
}
function fv(s) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === _a || l === va, u = l === as || l === ls;
      if (c || u)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let h = e.get(a);
          return t === null && (t = new Mc(s)), h = c ? t.fromEquirectangular(a, h) : t.fromCubemap(a, h), e.set(a, h), h.texture;
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const h = a.image;
            if (c && h && h.height > 0 || u && h && i(h)) {
              t === null && (t = new Mc(s));
              const d = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, d), a.addEventListener("dispose", r), d.texture;
            } else
              return null;
          }
        }
    }
    return a;
  }
  function i(a) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++)
      a[u] !== void 0 && l++;
    return l === c;
  }
  function r(a) {
    const l = a.target;
    l.removeEventListener("dispose", r);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: o
  };
}
function pv(s) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = s.getExtension("WEBGL_depth_texture") || s.getExtension("MOZ_WEBGL_depth_texture") || s.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = s.getExtension("EXT_texture_filter_anisotropic") || s.getExtension("MOZ_EXT_texture_filter_anisotropic") || s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = s.getExtension("WEBGL_compressed_texture_s3tc") || s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = s.getExtension("WEBGL_compressed_texture_pvrtc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = s.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? (t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance")) : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const i = t(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function mv(s, e, t, n) {
  const i = {}, r = /* @__PURE__ */ new WeakMap();
  function o(h) {
    const d = h.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes)
      e.remove(d.attributes[g]);
    for (const g in d.morphAttributes) {
      const _ = d.morphAttributes[g];
      for (let f = 0, p = _.length; f < p; f++)
        e.remove(_[f]);
    }
    d.removeEventListener("dispose", o), delete i[d.id];
    const m = r.get(d);
    m && (e.remove(m), r.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function a(h, d) {
    return i[d.id] === !0 || (d.addEventListener("dispose", o), i[d.id] = !0, t.memory.geometries++), d;
  }
  function l(h) {
    const d = h.attributes;
    for (const g in d)
      e.update(d[g], s.ARRAY_BUFFER);
    const m = h.morphAttributes;
    for (const g in m) {
      const _ = m[g];
      for (let f = 0, p = _.length; f < p; f++)
        e.update(_[f], s.ARRAY_BUFFER);
    }
  }
  function c(h) {
    const d = [], m = h.index, g = h.attributes.position;
    let _ = 0;
    if (m !== null) {
      const E = m.array;
      _ = m.version;
      for (let y = 0, T = E.length; y < T; y += 3) {
        const R = E[y + 0], b = E[y + 1], w = E[y + 2];
        d.push(R, b, b, w, w, R);
      }
    } else if (g !== void 0) {
      const E = g.array;
      _ = g.version;
      for (let y = 0, T = E.length / 3 - 1; y < T; y += 3) {
        const R = y + 0, b = y + 1, w = y + 2;
        d.push(R, b, b, w, w, R);
      }
    } else
      return;
    const f = new (uh(d) ? _h : gh)(d, 1);
    f.version = _;
    const p = r.get(h);
    p && e.remove(p), r.set(h, f);
  }
  function u(h) {
    const d = r.get(h);
    if (d) {
      const m = h.index;
      m !== null && d.version < m.version && c(h);
    } else
      c(h);
    return r.get(h);
  }
  return {
    get: a,
    update: l,
    getWireframeAttribute: u
  };
}
function gv(s, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function o(m) {
    r = m;
  }
  let a, l;
  function c(m) {
    a = m.type, l = m.bytesPerElement;
  }
  function u(m, g) {
    s.drawElements(r, g, a, m * l), t.update(g, r, 1);
  }
  function h(m, g, _) {
    if (_ === 0) return;
    let f, p;
    if (i)
      f = s, p = "drawElementsInstanced";
    else if (f = e.get("ANGLE_instanced_arrays"), p = "drawElementsInstancedANGLE", f === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    f[p](r, g, a, m * l, _), t.update(g, r, _);
  }
  function d(m, g, _) {
    if (_ === 0) return;
    const f = e.get("WEBGL_multi_draw");
    if (f === null)
      for (let p = 0; p < _; p++)
        this.render(m[p] / l, g[p]);
    else {
      f.multiDrawElementsWEBGL(r, g, 0, a, m, 0, _);
      let p = 0;
      for (let E = 0; E < _; E++)
        p += g[E];
      t.update(p, r, 1);
    }
  }
  this.setMode = o, this.setIndex = c, this.render = u, this.renderInstances = h, this.renderMultiDraw = d;
}
function _v(s) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(r, o, a) {
    switch (t.calls++, o) {
      case s.TRIANGLES:
        t.triangles += a * (r / 3);
        break;
      case s.LINES:
        t.lines += a * (r / 2);
        break;
      case s.LINE_STRIP:
        t.lines += a * (r - 1);
        break;
      case s.LINE_LOOP:
        t.lines += a * r;
        break;
      case s.POINTS:
        t.points += a * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function i() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function vv(s, e) {
  return s[0] - e[0];
}
function yv(s, e) {
  return Math.abs(e[1]) - Math.abs(s[1]);
}
function xv(s, e, t) {
  const n = {}, i = new Float32Array(8), r = /* @__PURE__ */ new WeakMap(), o = new ct(), a = [];
  for (let c = 0; c < 8; c++)
    a[c] = [c, 0];
  function l(c, u, h) {
    const d = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const m = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color, g = m !== void 0 ? m.length : 0;
      let _ = r.get(u);
      if (_ === void 0 || _.count !== g) {
        let C = function() {
          J.dispose(), r.delete(u), u.removeEventListener("dispose", C);
        };
        _ !== void 0 && _.texture.dispose();
        const E = u.morphAttributes.position !== void 0, y = u.morphAttributes.normal !== void 0, T = u.morphAttributes.color !== void 0, R = u.morphAttributes.position || [], b = u.morphAttributes.normal || [], w = u.morphAttributes.color || [];
        let G = 0;
        E === !0 && (G = 1), y === !0 && (G = 2), T === !0 && (G = 3);
        let S = u.attributes.position.count * G, A = 1;
        S > e.maxTextureSize && (A = Math.ceil(S / e.maxTextureSize), S = e.maxTextureSize);
        const V = new Float32Array(S * A * 4 * g), J = new fh(V, S, A, g);
        J.type = Bn, J.needsUpdate = !0;
        const se = G * 4;
        for (let P = 0; P < g; P++) {
          const U = R[P], X = b[P], O = w[P], $ = S * A * 4 * P;
          for (let Z = 0; Z < U.count; Z++) {
            const z = Z * se;
            E === !0 && (o.fromBufferAttribute(U, Z), V[$ + z + 0] = o.x, V[$ + z + 1] = o.y, V[$ + z + 2] = o.z, V[$ + z + 3] = 0), y === !0 && (o.fromBufferAttribute(X, Z), V[$ + z + 4] = o.x, V[$ + z + 5] = o.y, V[$ + z + 6] = o.z, V[$ + z + 7] = 0), T === !0 && (o.fromBufferAttribute(O, Z), V[$ + z + 8] = o.x, V[$ + z + 9] = o.y, V[$ + z + 10] = o.z, V[$ + z + 11] = O.itemSize === 4 ? o.w : 1);
          }
        }
        _ = {
          count: g,
          texture: J,
          size: new Je(S, A)
        }, r.set(u, _), u.addEventListener("dispose", C);
      }
      let f = 0;
      for (let E = 0; E < d.length; E++)
        f += d[E];
      const p = u.morphTargetsRelative ? 1 : 1 - f;
      h.getUniforms().setValue(s, "morphTargetBaseInfluence", p), h.getUniforms().setValue(s, "morphTargetInfluences", d), h.getUniforms().setValue(s, "morphTargetsTexture", _.texture, t), h.getUniforms().setValue(s, "morphTargetsTextureSize", _.size);
    } else {
      const m = d === void 0 ? 0 : d.length;
      let g = n[u.id];
      if (g === void 0 || g.length !== m) {
        g = [];
        for (let y = 0; y < m; y++)
          g[y] = [y, 0];
        n[u.id] = g;
      }
      for (let y = 0; y < m; y++) {
        const T = g[y];
        T[0] = y, T[1] = d[y];
      }
      g.sort(yv);
      for (let y = 0; y < 8; y++)
        y < m && g[y][1] ? (a[y][0] = g[y][0], a[y][1] = g[y][1]) : (a[y][0] = Number.MAX_SAFE_INTEGER, a[y][1] = 0);
      a.sort(vv);
      const _ = u.morphAttributes.position, f = u.morphAttributes.normal;
      let p = 0;
      for (let y = 0; y < 8; y++) {
        const T = a[y], R = T[0], b = T[1];
        R !== Number.MAX_SAFE_INTEGER && b ? (_ && u.getAttribute("morphTarget" + y) !== _[R] && u.setAttribute("morphTarget" + y, _[R]), f && u.getAttribute("morphNormal" + y) !== f[R] && u.setAttribute("morphNormal" + y, f[R]), i[y] = b, p += b) : (_ && u.hasAttribute("morphTarget" + y) === !0 && u.deleteAttribute("morphTarget" + y), f && u.hasAttribute("morphNormal" + y) === !0 && u.deleteAttribute("morphNormal" + y), i[y] = 0);
      }
      const E = u.morphTargetsRelative ? 1 : 1 - p;
      h.getUniforms().setValue(s, "morphTargetBaseInfluence", E), h.getUniforms().setValue(s, "morphTargetInfluences", i);
    }
  }
  return {
    update: l
  };
}
function Ev(s, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = n.render.frame, u = l.geometry, h = e.get(l, u);
    if (i.get(h) !== c && (e.update(h), i.set(h, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), i.get(l) !== c && (t.update(l.instanceMatrix, s.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, s.ARRAY_BUFFER), i.set(l, c))), l.isSkinnedMesh) {
      const d = l.skeleton;
      i.get(d) !== c && (d.update(), i.set(d, c));
    }
    return h;
  }
  function o() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: r,
    dispose: o
  };
}
class Sh extends Dt {
  constructor(e, t, n, i, r, o, a, l, c, u) {
    if (u = u !== void 0 ? u : Ai, u !== Ai && u !== us)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === Ai && (n = Qn), n === void 0 && u === us && (n = Mi), super(null, i, r, o, a, l, u, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : Ct, this.minFilter = l !== void 0 ? l : Ct, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const Mh = /* @__PURE__ */ new Dt(), Ah = /* @__PURE__ */ new Sh(1, 1);
Ah.compareFunction = ch;
const Th = /* @__PURE__ */ new fh(), bh = /* @__PURE__ */ new rm(), wh = /* @__PURE__ */ new xh(), wc = [], Rc = [], Cc = new Float32Array(16), Lc = new Float32Array(9), Pc = new Float32Array(4);
function vs(s, e, t) {
  const n = s[0];
  if (n <= 0 || n > 0) return s;
  const i = e * t;
  let r = wc[i];
  if (r === void 0 && (r = new Float32Array(i), wc[i] = r), e !== 0) {
    n.toArray(r, 0);
    for (let o = 1, a = 0; o !== e; ++o)
      a += t, s[o].toArray(r, a);
  }
  return r;
}
function At(s, e) {
  if (s.length !== e.length) return !1;
  for (let t = 0, n = s.length; t < n; t++)
    if (s[t] !== e[t]) return !1;
  return !0;
}
function Tt(s, e) {
  for (let t = 0, n = e.length; t < n; t++)
    s[t] = e[t];
}
function ho(s, e) {
  let t = Rc[e];
  t === void 0 && (t = new Int32Array(e), Rc[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = s.allocateTextureUnit();
  return t;
}
function Sv(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), t[0] = e);
}
function Mv(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (At(t, e)) return;
    s.uniform2fv(this.addr, e), Tt(t, e);
  }
}
function Av(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (s.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (At(t, e)) return;
    s.uniform3fv(this.addr, e), Tt(t, e);
  }
}
function Tv(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (At(t, e)) return;
    s.uniform4fv(this.addr, e), Tt(t, e);
  }
}
function bv(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (At(t, e)) return;
    s.uniformMatrix2fv(this.addr, !1, e), Tt(t, e);
  } else {
    if (At(t, n)) return;
    Pc.set(n), s.uniformMatrix2fv(this.addr, !1, Pc), Tt(t, n);
  }
}
function wv(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (At(t, e)) return;
    s.uniformMatrix3fv(this.addr, !1, e), Tt(t, e);
  } else {
    if (At(t, n)) return;
    Lc.set(n), s.uniformMatrix3fv(this.addr, !1, Lc), Tt(t, n);
  }
}
function Rv(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (At(t, e)) return;
    s.uniformMatrix4fv(this.addr, !1, e), Tt(t, e);
  } else {
    if (At(t, n)) return;
    Cc.set(n), s.uniformMatrix4fv(this.addr, !1, Cc), Tt(t, n);
  }
}
function Cv(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), t[0] = e);
}
function Lv(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (At(t, e)) return;
    s.uniform2iv(this.addr, e), Tt(t, e);
  }
}
function Pv(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (At(t, e)) return;
    s.uniform3iv(this.addr, e), Tt(t, e);
  }
}
function Iv(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (At(t, e)) return;
    s.uniform4iv(this.addr, e), Tt(t, e);
  }
}
function Dv(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), t[0] = e);
}
function Uv(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (At(t, e)) return;
    s.uniform2uiv(this.addr, e), Tt(t, e);
  }
}
function Nv(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (At(t, e)) return;
    s.uniform3uiv(this.addr, e), Tt(t, e);
  }
}
function Ov(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (At(t, e)) return;
    s.uniform4uiv(this.addr, e), Tt(t, e);
  }
}
function Fv(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i);
  const r = this.type === s.SAMPLER_2D_SHADOW ? Ah : Mh;
  t.setTexture2D(e || r, i);
}
function Bv(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || bh, i);
}
function Vv(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || wh, i);
}
function zv(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Th, i);
}
function kv(s) {
  switch (s) {
    case 5126:
      return Sv;
    // FLOAT
    case 35664:
      return Mv;
    // _VEC2
    case 35665:
      return Av;
    // _VEC3
    case 35666:
      return Tv;
    // _VEC4
    case 35674:
      return bv;
    // _MAT2
    case 35675:
      return wv;
    // _MAT3
    case 35676:
      return Rv;
    // _MAT4
    case 5124:
    case 35670:
      return Cv;
    // INT, BOOL
    case 35667:
    case 35671:
      return Lv;
    // _VEC2
    case 35668:
    case 35672:
      return Pv;
    // _VEC3
    case 35669:
    case 35673:
      return Iv;
    // _VEC4
    case 5125:
      return Dv;
    // UINT
    case 36294:
      return Uv;
    // _VEC2
    case 36295:
      return Nv;
    // _VEC3
    case 36296:
      return Ov;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return Fv;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Bv;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Vv;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return zv;
  }
}
function Hv(s, e) {
  s.uniform1fv(this.addr, e);
}
function Gv(s, e) {
  const t = vs(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function Wv(s, e) {
  const t = vs(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function jv(s, e) {
  const t = vs(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function Xv(s, e) {
  const t = vs(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, t);
}
function qv(s, e) {
  const t = vs(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, t);
}
function Yv(s, e) {
  const t = vs(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, t);
}
function Kv(s, e) {
  s.uniform1iv(this.addr, e);
}
function $v(s, e) {
  s.uniform2iv(this.addr, e);
}
function Jv(s, e) {
  s.uniform3iv(this.addr, e);
}
function Zv(s, e) {
  s.uniform4iv(this.addr, e);
}
function Qv(s, e) {
  s.uniform1uiv(this.addr, e);
}
function e0(s, e) {
  s.uniform2uiv(this.addr, e);
}
function t0(s, e) {
  s.uniform3uiv(this.addr, e);
}
function n0(s, e) {
  s.uniform4uiv(this.addr, e);
}
function i0(s, e, t) {
  const n = this.cache, i = e.length, r = ho(t, i);
  At(n, r) || (s.uniform1iv(this.addr, r), Tt(n, r));
  for (let o = 0; o !== i; ++o)
    t.setTexture2D(e[o] || Mh, r[o]);
}
function s0(s, e, t) {
  const n = this.cache, i = e.length, r = ho(t, i);
  At(n, r) || (s.uniform1iv(this.addr, r), Tt(n, r));
  for (let o = 0; o !== i; ++o)
    t.setTexture3D(e[o] || bh, r[o]);
}
function r0(s, e, t) {
  const n = this.cache, i = e.length, r = ho(t, i);
  At(n, r) || (s.uniform1iv(this.addr, r), Tt(n, r));
  for (let o = 0; o !== i; ++o)
    t.setTextureCube(e[o] || wh, r[o]);
}
function o0(s, e, t) {
  const n = this.cache, i = e.length, r = ho(t, i);
  At(n, r) || (s.uniform1iv(this.addr, r), Tt(n, r));
  for (let o = 0; o !== i; ++o)
    t.setTexture2DArray(e[o] || Th, r[o]);
}
function a0(s) {
  switch (s) {
    case 5126:
      return Hv;
    // FLOAT
    case 35664:
      return Gv;
    // _VEC2
    case 35665:
      return Wv;
    // _VEC3
    case 35666:
      return jv;
    // _VEC4
    case 35674:
      return Xv;
    // _MAT2
    case 35675:
      return qv;
    // _MAT3
    case 35676:
      return Yv;
    // _MAT4
    case 5124:
    case 35670:
      return Kv;
    // INT, BOOL
    case 35667:
    case 35671:
      return $v;
    // _VEC2
    case 35668:
    case 35672:
      return Jv;
    // _VEC3
    case 35669:
    case 35673:
      return Zv;
    // _VEC4
    case 5125:
      return Qv;
    // UINT
    case 36294:
      return e0;
    // _VEC2
    case 36295:
      return t0;
    // _VEC3
    case 36296:
      return n0;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return i0;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return s0;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return r0;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return o0;
  }
}
class l0 {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = kv(t.type);
  }
}
class c0 {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = a0(t.type);
  }
}
class u0 {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, o = i.length; r !== o; ++r) {
      const a = i[r];
      a.setValue(e, t[a.id], n);
    }
  }
}
const $o = /(\w+)(\])?(\[|\.)?/g;
function Ic(s, e) {
  s.seq.push(e), s.map[e.id] = e;
}
function h0(s, e, t) {
  const n = s.name, i = n.length;
  for ($o.lastIndex = 0; ; ) {
    const r = $o.exec(n), o = $o.lastIndex;
    let a = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === i) {
      Ic(t, c === void 0 ? new l0(a, s, e) : new c0(a, s, e));
      break;
    } else {
      let h = t.map[a];
      h === void 0 && (h = new u0(a), Ic(t, h)), t = h;
    }
  }
}
class Gr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i), o = e.getUniformLocation(t, r.name);
      h0(r, o, this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, o = t.length; r !== o; ++r) {
      const a = t[r], l = n[a.id];
      l.needsUpdate !== !1 && a.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const o = e[i];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function Dc(s, e, t) {
  const n = s.createShader(e);
  return s.shaderSource(n, t), s.compileShader(n), n;
}
const d0 = 37297;
let f0 = 0;
function p0(s, e) {
  const t = s.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let o = i; o < r; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function m0(s) {
  const e = st.getPrimaries(st.workingColorSpace), t = st.getPrimaries(s);
  let n;
  switch (e === t ? n = "" : e === Zr && t === Jr ? n = "LinearDisplayP3ToLinearSRGB" : e === Jr && t === Zr && (n = "LinearSRGBToLinearDisplayP3"), s) {
    case Lt:
    case lo:
      return [n, "LinearTransferOETF"];
    case mt:
    case Wa:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", s), [n, "LinearTransferOETF"];
  }
}
function Uc(s, e, t) {
  const n = s.getShaderParameter(e, s.COMPILE_STATUS), i = s.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const o = parseInt(r[1]);
    return t.toUpperCase() + `

` + i + `

` + p0(s.getShaderSource(e), o);
  } else
    return i;
}
function g0(s, e) {
  const t = m0(e);
  return `vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function _0(s, e) {
  let t;
  switch (e) {
    case up:
      t = "Linear";
      break;
    case hp:
      t = "Reinhard";
      break;
    case dp:
      t = "OptimizedCineon";
      break;
    case $u:
      t = "ACESFilmic";
      break;
    case pp:
      t = "AgX";
      break;
    case fp:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function v0(s) {
  return [
    s.extensionDerivatives || s.envMapCubeUVHeight || s.bumpMap || s.normalMapTangentSpace || s.clearcoatNormalMap || s.flatShading || s.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (s.extensionFragDepth || s.logarithmicDepthBuffer) && s.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    s.extensionDrawBuffers && s.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (s.extensionShaderTextureLOD || s.envMap || s.transmission) && s.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(ns).join(`
`);
}
function y0(s) {
  return [
    s.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : ""
  ].filter(ns).join(`
`);
}
function x0(s) {
  const e = [];
  for (const t in s) {
    const n = s[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function E0(s, e) {
  const t = {}, n = s.getProgramParameter(e, s.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const r = s.getActiveAttrib(e, i), o = r.name;
    let a = 1;
    r.type === s.FLOAT_MAT2 && (a = 2), r.type === s.FLOAT_MAT3 && (a = 3), r.type === s.FLOAT_MAT4 && (a = 4), t[o] = {
      type: r.type,
      location: s.getAttribLocation(e, o),
      locationSize: a
    };
  }
  return t;
}
function ns(s) {
  return s !== "";
}
function Nc(s, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Oc(s, e) {
  return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const S0 = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Aa(s) {
  return s.replace(S0, A0);
}
const M0 = /* @__PURE__ */ new Map([
  ["encodings_fragment", "colorspace_fragment"],
  // @deprecated, r154
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  // @deprecated, r154
  ["output_fragment", "opaque_fragment"]
  // @deprecated, r154
]);
function A0(s, e) {
  let t = Ge[e];
  if (t === void 0) {
    const n = M0.get(e);
    if (n !== void 0)
      t = Ge[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Aa(t);
}
const T0 = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Fc(s) {
  return s.replace(T0, b0);
}
function b0(s, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function Bc(s) {
  let e = "precision " + s.precision + ` float;
precision ` + s.precision + " int;";
  return s.precision === "highp" ? e += `
#define HIGH_PRECISION` : s.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : s.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function w0(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return s.shadowMapType === qu ? e = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === Yu ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === Fn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function R0(s) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s.envMap)
    switch (s.envMapMode) {
      case as:
      case ls:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case ao:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function C0(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case ls:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function L0(s) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s.envMap)
    switch (s.combine) {
      case Ku:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case lp:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case cp:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function P0(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t };
}
function I0(s, e, t, n) {
  const i = s.getContext(), r = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const l = w0(t), c = R0(t), u = C0(t), h = L0(t), d = P0(t), m = t.isWebGL2 ? "" : v0(t), g = y0(t), _ = x0(r), f = i.createProgram();
  let p, E, y = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(ns).join(`
`), p.length > 0 && (p += `
`), E = [
    m,
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(ns).join(`
`), E.length > 0 && (E += `
`)) : (p = [
    Bc(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + u : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(ns).join(`
`), E = [
    m,
    Bc(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + u : "",
    t.envMap ? "#define " + h : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== ni ? "#define TONE_MAPPING" : "",
    t.toneMapping !== ni ? Ge.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== ni ? _0("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ge.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    g0("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(ns).join(`
`)), o = Aa(o), o = Nc(o, t), o = Oc(o, t), a = Aa(a), a = Nc(a, t), a = Oc(a, t), o = Fc(o), a = Fc(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (y = `#version 300 es
`, p = [
    g,
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, E = [
    "precision mediump sampler2DArray;",
    "#define varying in",
    t.glslVersion === nc ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === nc ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + E);
  const T = y + p + o, R = y + E + a, b = Dc(i, i.VERTEX_SHADER, T), w = Dc(i, i.FRAGMENT_SHADER, R);
  i.attachShader(f, b), i.attachShader(f, w), t.index0AttributeName !== void 0 ? i.bindAttribLocation(f, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(f, 0, "position"), i.linkProgram(f);
  function G(J) {
    if (s.debug.checkShaderErrors) {
      const se = i.getProgramInfoLog(f).trim(), C = i.getShaderInfoLog(b).trim(), P = i.getShaderInfoLog(w).trim();
      let U = !0, X = !0;
      if (i.getProgramParameter(f, i.LINK_STATUS) === !1)
        if (U = !1, typeof s.debug.onShaderError == "function")
          s.debug.onShaderError(i, f, b, w);
        else {
          const O = Uc(i, b, "vertex"), $ = Uc(i, w, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(f, i.VALIDATE_STATUS) + `

Program Info Log: ` + se + `
` + O + `
` + $
          );
        }
      else se !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", se) : (C === "" || P === "") && (X = !1);
      X && (J.diagnostics = {
        runnable: U,
        programLog: se,
        vertexShader: {
          log: C,
          prefix: p
        },
        fragmentShader: {
          log: P,
          prefix: E
        }
      });
    }
    i.deleteShader(b), i.deleteShader(w), S = new Gr(i, f), A = E0(i, f);
  }
  let S;
  this.getUniforms = function() {
    return S === void 0 && G(this), S;
  };
  let A;
  this.getAttributes = function() {
    return A === void 0 && G(this), A;
  };
  let V = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return V === !1 && (V = i.getProgramParameter(f, d0)), V;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(f), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = f0++, this.cacheKey = e, this.usedTimes = 1, this.program = f, this.vertexShader = b, this.fragmentShader = w, this;
}
let D0 = 0;
class U0 {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), r = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
    return o.has(i) === !1 && (o.add(i), i.usedTimes++), o.has(r) === !1 && (o.add(r), r.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new N0(e), t.set(e, n)), n;
  }
}
class N0 {
  constructor(e) {
    this.id = D0++, this.code = e, this.usedTimes = 0;
  }
}
function O0(s, e, t, n, i, r, o) {
  const a = new ph(), l = new U0(), c = [], u = i.isWebGL2, h = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let m = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function _(S) {
    return S === 0 ? "uv" : `uv${S}`;
  }
  function f(S, A, V, J, se) {
    const C = J.fog, P = se.geometry, U = S.isMeshStandardMaterial ? J.environment : null, X = (S.isMeshStandardMaterial ? t : e).get(S.envMap || U), O = X && X.mapping === ao ? X.image.height : null, $ = g[S.type];
    S.precision !== null && (m = i.getMaxPrecision(S.precision), m !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", m, "instead."));
    const Z = P.morphAttributes.position || P.morphAttributes.normal || P.morphAttributes.color, z = Z !== void 0 ? Z.length : 0;
    let W = 0;
    P.morphAttributes.position !== void 0 && (W = 1), P.morphAttributes.normal !== void 0 && (W = 2), P.morphAttributes.color !== void 0 && (W = 3);
    let D, Q, ae, he;
    if ($) {
      const Pt = Mn[$];
      D = Pt.vertexShader, Q = Pt.fragmentShader;
    } else
      D = S.vertexShader, Q = S.fragmentShader, l.update(S), ae = l.getVertexShaderID(S), he = l.getFragmentShaderID(S);
    const ne = s.getRenderTarget(), oe = se.isInstancedMesh === !0, xe = se.isBatchedMesh === !0, Me = !!S.map, Be = !!S.matcap, B = !!X, _t = !!S.aoMap, be = !!S.lightMap, Ie = !!S.bumpMap, Ae = !!S.normalMap, lt = !!S.displacementMap, ue = !!S.emissiveMap, x = !!S.metalnessMap, v = !!S.roughnessMap, I = S.anisotropy > 0, te = S.clearcoat > 0, Y = S.iridescence > 0, q = S.sheen > 0, fe = S.transmission > 0, ce = I && !!S.anisotropyMap, ye = te && !!S.clearcoatMap, Te = te && !!S.clearcoatNormalMap, De = te && !!S.clearcoatRoughnessMap, re = Y && !!S.iridescenceMap, je = Y && !!S.iridescenceThicknessMap, ie = q && !!S.sheenColorMap, ee = q && !!S.sheenRoughnessMap, le = !!S.specularMap, pe = !!S.specularColorMap, Ue = !!S.specularIntensityMap, Ze = fe && !!S.transmissionMap, ut = fe && !!S.thicknessMap, Ve = !!S.gradientMap, me = !!S.alphaMap, L = S.alphaTest > 0, _e = !!S.alphaHash, ve = !!S.extensions, Ce = !!P.attributes.uv1, Re = !!P.attributes.uv2, rt = !!P.attributes.uv3;
    let ot = ni;
    return S.toneMapped && (ne === null || ne.isXRRenderTarget === !0) && (ot = s.toneMapping), {
      isWebGL2: u,
      shaderID: $,
      shaderType: S.type,
      shaderName: S.name,
      vertexShader: D,
      fragmentShader: Q,
      defines: S.defines,
      customVertexShaderID: ae,
      customFragmentShaderID: he,
      isRawShaderMaterial: S.isRawShaderMaterial === !0,
      glslVersion: S.glslVersion,
      precision: m,
      batching: xe,
      instancing: oe,
      instancingColor: oe && se.instanceColor !== null,
      supportsVertexTextures: d,
      outputColorSpace: ne === null ? s.outputColorSpace : ne.isXRRenderTarget === !0 ? ne.texture.colorSpace : Lt,
      map: Me,
      matcap: Be,
      envMap: B,
      envMapMode: B && X.mapping,
      envMapCubeUVHeight: O,
      aoMap: _t,
      lightMap: be,
      bumpMap: Ie,
      normalMap: Ae,
      displacementMap: d && lt,
      emissiveMap: ue,
      normalMapObjectSpace: Ae && S.normalMapType === Pp,
      normalMapTangentSpace: Ae && S.normalMapType === lh,
      metalnessMap: x,
      roughnessMap: v,
      anisotropy: I,
      anisotropyMap: ce,
      clearcoat: te,
      clearcoatMap: ye,
      clearcoatNormalMap: Te,
      clearcoatRoughnessMap: De,
      iridescence: Y,
      iridescenceMap: re,
      iridescenceThicknessMap: je,
      sheen: q,
      sheenColorMap: ie,
      sheenRoughnessMap: ee,
      specularMap: le,
      specularColorMap: pe,
      specularIntensityMap: Ue,
      transmission: fe,
      transmissionMap: Ze,
      thicknessMap: ut,
      gradientMap: Ve,
      opaque: S.transparent === !1 && S.blending === is,
      alphaMap: me,
      alphaTest: L,
      alphaHash: _e,
      combine: S.combine,
      //
      mapUv: Me && _(S.map.channel),
      aoMapUv: _t && _(S.aoMap.channel),
      lightMapUv: be && _(S.lightMap.channel),
      bumpMapUv: Ie && _(S.bumpMap.channel),
      normalMapUv: Ae && _(S.normalMap.channel),
      displacementMapUv: lt && _(S.displacementMap.channel),
      emissiveMapUv: ue && _(S.emissiveMap.channel),
      metalnessMapUv: x && _(S.metalnessMap.channel),
      roughnessMapUv: v && _(S.roughnessMap.channel),
      anisotropyMapUv: ce && _(S.anisotropyMap.channel),
      clearcoatMapUv: ye && _(S.clearcoatMap.channel),
      clearcoatNormalMapUv: Te && _(S.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: De && _(S.clearcoatRoughnessMap.channel),
      iridescenceMapUv: re && _(S.iridescenceMap.channel),
      iridescenceThicknessMapUv: je && _(S.iridescenceThicknessMap.channel),
      sheenColorMapUv: ie && _(S.sheenColorMap.channel),
      sheenRoughnessMapUv: ee && _(S.sheenRoughnessMap.channel),
      specularMapUv: le && _(S.specularMap.channel),
      specularColorMapUv: pe && _(S.specularColorMap.channel),
      specularIntensityMapUv: Ue && _(S.specularIntensityMap.channel),
      transmissionMapUv: Ze && _(S.transmissionMap.channel),
      thicknessMapUv: ut && _(S.thicknessMap.channel),
      alphaMapUv: me && _(S.alphaMap.channel),
      //
      vertexTangents: !!P.attributes.tangent && (Ae || I),
      vertexColors: S.vertexColors,
      vertexAlphas: S.vertexColors === !0 && !!P.attributes.color && P.attributes.color.itemSize === 4,
      vertexUv1s: Ce,
      vertexUv2s: Re,
      vertexUv3s: rt,
      pointsUvs: se.isPoints === !0 && !!P.attributes.uv && (Me || me),
      fog: !!C,
      useFog: S.fog === !0,
      fogExp2: C && C.isFogExp2,
      flatShading: S.flatShading === !0,
      sizeAttenuation: S.sizeAttenuation === !0,
      logarithmicDepthBuffer: h,
      skinning: se.isSkinnedMesh === !0,
      morphTargets: P.morphAttributes.position !== void 0,
      morphNormals: P.morphAttributes.normal !== void 0,
      morphColors: P.morphAttributes.color !== void 0,
      morphTargetsCount: z,
      morphTextureStride: W,
      numDirLights: A.directional.length,
      numPointLights: A.point.length,
      numSpotLights: A.spot.length,
      numSpotLightMaps: A.spotLightMap.length,
      numRectAreaLights: A.rectArea.length,
      numHemiLights: A.hemi.length,
      numDirLightShadows: A.directionalShadowMap.length,
      numPointLightShadows: A.pointShadowMap.length,
      numSpotLightShadows: A.spotShadowMap.length,
      numSpotLightShadowsWithMaps: A.numSpotLightShadowsWithMaps,
      numLightProbes: A.numLightProbes,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: S.dithering,
      shadowMapEnabled: s.shadowMap.enabled && V.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: ot,
      useLegacyLights: s._useLegacyLights,
      decodeVideoTexture: Me && S.map.isVideoTexture === !0 && st.getTransfer(S.map.colorSpace) === ht,
      premultipliedAlpha: S.premultipliedAlpha,
      doubleSided: S.side === An,
      flipSided: S.side === $t,
      useDepthPacking: S.depthPacking >= 0,
      depthPacking: S.depthPacking || 0,
      index0AttributeName: S.index0AttributeName,
      extensionDerivatives: ve && S.extensions.derivatives === !0,
      extensionFragDepth: ve && S.extensions.fragDepth === !0,
      extensionDrawBuffers: ve && S.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: ve && S.extensions.shaderTextureLOD === !0,
      extensionClipCullDistance: ve && S.extensions.clipCullDistance && n.has("WEBGL_clip_cull_distance"),
      rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: S.customProgramCacheKey()
    };
  }
  function p(S) {
    const A = [];
    if (S.shaderID ? A.push(S.shaderID) : (A.push(S.customVertexShaderID), A.push(S.customFragmentShaderID)), S.defines !== void 0)
      for (const V in S.defines)
        A.push(V), A.push(S.defines[V]);
    return S.isRawShaderMaterial === !1 && (E(A, S), y(A, S), A.push(s.outputColorSpace)), A.push(S.customProgramCacheKey), A.join();
  }
  function E(S, A) {
    S.push(A.precision), S.push(A.outputColorSpace), S.push(A.envMapMode), S.push(A.envMapCubeUVHeight), S.push(A.mapUv), S.push(A.alphaMapUv), S.push(A.lightMapUv), S.push(A.aoMapUv), S.push(A.bumpMapUv), S.push(A.normalMapUv), S.push(A.displacementMapUv), S.push(A.emissiveMapUv), S.push(A.metalnessMapUv), S.push(A.roughnessMapUv), S.push(A.anisotropyMapUv), S.push(A.clearcoatMapUv), S.push(A.clearcoatNormalMapUv), S.push(A.clearcoatRoughnessMapUv), S.push(A.iridescenceMapUv), S.push(A.iridescenceThicknessMapUv), S.push(A.sheenColorMapUv), S.push(A.sheenRoughnessMapUv), S.push(A.specularMapUv), S.push(A.specularColorMapUv), S.push(A.specularIntensityMapUv), S.push(A.transmissionMapUv), S.push(A.thicknessMapUv), S.push(A.combine), S.push(A.fogExp2), S.push(A.sizeAttenuation), S.push(A.morphTargetsCount), S.push(A.morphAttributeCount), S.push(A.numDirLights), S.push(A.numPointLights), S.push(A.numSpotLights), S.push(A.numSpotLightMaps), S.push(A.numHemiLights), S.push(A.numRectAreaLights), S.push(A.numDirLightShadows), S.push(A.numPointLightShadows), S.push(A.numSpotLightShadows), S.push(A.numSpotLightShadowsWithMaps), S.push(A.numLightProbes), S.push(A.shadowMapType), S.push(A.toneMapping), S.push(A.numClippingPlanes), S.push(A.numClipIntersection), S.push(A.depthPacking);
  }
  function y(S, A) {
    a.disableAll(), A.isWebGL2 && a.enable(0), A.supportsVertexTextures && a.enable(1), A.instancing && a.enable(2), A.instancingColor && a.enable(3), A.matcap && a.enable(4), A.envMap && a.enable(5), A.normalMapObjectSpace && a.enable(6), A.normalMapTangentSpace && a.enable(7), A.clearcoat && a.enable(8), A.iridescence && a.enable(9), A.alphaTest && a.enable(10), A.vertexColors && a.enable(11), A.vertexAlphas && a.enable(12), A.vertexUv1s && a.enable(13), A.vertexUv2s && a.enable(14), A.vertexUv3s && a.enable(15), A.vertexTangents && a.enable(16), A.anisotropy && a.enable(17), A.alphaHash && a.enable(18), A.batching && a.enable(19), S.push(a.mask), a.disableAll(), A.fog && a.enable(0), A.useFog && a.enable(1), A.flatShading && a.enable(2), A.logarithmicDepthBuffer && a.enable(3), A.skinning && a.enable(4), A.morphTargets && a.enable(5), A.morphNormals && a.enable(6), A.morphColors && a.enable(7), A.premultipliedAlpha && a.enable(8), A.shadowMapEnabled && a.enable(9), A.useLegacyLights && a.enable(10), A.doubleSided && a.enable(11), A.flipSided && a.enable(12), A.useDepthPacking && a.enable(13), A.dithering && a.enable(14), A.transmission && a.enable(15), A.sheen && a.enable(16), A.opaque && a.enable(17), A.pointsUvs && a.enable(18), A.decodeVideoTexture && a.enable(19), S.push(a.mask);
  }
  function T(S) {
    const A = g[S.type];
    let V;
    if (A) {
      const J = Mn[A];
      V = vm.clone(J.uniforms);
    } else
      V = S.uniforms;
    return V;
  }
  function R(S, A) {
    let V;
    for (let J = 0, se = c.length; J < se; J++) {
      const C = c[J];
      if (C.cacheKey === A) {
        V = C, ++V.usedTimes;
        break;
      }
    }
    return V === void 0 && (V = new I0(s, A, S, r), c.push(V)), V;
  }
  function b(S) {
    if (--S.usedTimes === 0) {
      const A = c.indexOf(S);
      c[A] = c[c.length - 1], c.pop(), S.destroy();
    }
  }
  function w(S) {
    l.remove(S);
  }
  function G() {
    l.dispose();
  }
  return {
    getParameters: f,
    getProgramCacheKey: p,
    getUniforms: T,
    acquireProgram: R,
    releaseProgram: b,
    releaseShaderCache: w,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: c,
    dispose: G
  };
}
function F0() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(r) {
    let o = s.get(r);
    return o === void 0 && (o = {}, s.set(r, o)), o;
  }
  function t(r) {
    s.delete(r);
  }
  function n(r, o, a) {
    s.get(r)[o] = a;
  }
  function i() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  };
}
function B0(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id;
}
function Vc(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id;
}
function zc() {
  const s = [];
  let e = 0;
  const t = [], n = [], i = [];
  function r() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function o(h, d, m, g, _, f) {
    let p = s[e];
    return p === void 0 ? (p = {
      id: h.id,
      object: h,
      geometry: d,
      material: m,
      groupOrder: g,
      renderOrder: h.renderOrder,
      z: _,
      group: f
    }, s[e] = p) : (p.id = h.id, p.object = h, p.geometry = d, p.material = m, p.groupOrder = g, p.renderOrder = h.renderOrder, p.z = _, p.group = f), e++, p;
  }
  function a(h, d, m, g, _, f) {
    const p = o(h, d, m, g, _, f);
    m.transmission > 0 ? n.push(p) : m.transparent === !0 ? i.push(p) : t.push(p);
  }
  function l(h, d, m, g, _, f) {
    const p = o(h, d, m, g, _, f);
    m.transmission > 0 ? n.unshift(p) : m.transparent === !0 ? i.unshift(p) : t.unshift(p);
  }
  function c(h, d) {
    t.length > 1 && t.sort(h || B0), n.length > 1 && n.sort(d || Vc), i.length > 1 && i.sort(d || Vc);
  }
  function u() {
    for (let h = e, d = s.length; h < d; h++) {
      const m = s[h];
      if (m.id === null) break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: r,
    push: a,
    unshift: l,
    finish: u,
    sort: c
  };
}
function V0() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const r = s.get(n);
    let o;
    return r === void 0 ? (o = new zc(), s.set(n, [o])) : i >= r.length ? (o = new zc(), r.push(o)) : o = r[i], o;
  }
  function t() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function z0() {
  const s = {};
  return {
    get: function(e) {
      if (s[e.id] !== void 0)
        return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new N(),
            color: new Oe()
          };
          break;
        case "SpotLight":
          t = {
            position: new N(),
            direction: new N(),
            color: new Oe(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new N(),
            color: new Oe(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new N(),
            skyColor: new Oe(),
            groundColor: new Oe()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Oe(),
            position: new N(),
            halfWidth: new N(),
            halfHeight: new N()
          };
          break;
      }
      return s[e.id] = t, t;
    }
  };
}
function k0() {
  const s = {};
  return {
    get: function(e) {
      if (s[e.id] !== void 0)
        return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Je()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Je()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Je(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return s[e.id] = t, t;
    }
  };
}
let H0 = 0;
function G0(s, e) {
  return (e.castShadow ? 2 : 0) - (s.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (s.map ? 1 : 0);
}
function W0(s, e) {
  const t = new z0(), n = k0(), i = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let u = 0; u < 9; u++) i.probe.push(new N());
  const r = new N(), o = new Ye(), a = new Ye();
  function l(u, h) {
    let d = 0, m = 0, g = 0;
    for (let J = 0; J < 9; J++) i.probe[J].set(0, 0, 0);
    let _ = 0, f = 0, p = 0, E = 0, y = 0, T = 0, R = 0, b = 0, w = 0, G = 0, S = 0;
    u.sort(G0);
    const A = h === !0 ? Math.PI : 1;
    for (let J = 0, se = u.length; J < se; J++) {
      const C = u[J], P = C.color, U = C.intensity, X = C.distance, O = C.shadow && C.shadow.map ? C.shadow.map.texture : null;
      if (C.isAmbientLight)
        d += P.r * U * A, m += P.g * U * A, g += P.b * U * A;
      else if (C.isLightProbe) {
        for (let $ = 0; $ < 9; $++)
          i.probe[$].addScaledVector(C.sh.coefficients[$], U);
        S++;
      } else if (C.isDirectionalLight) {
        const $ = t.get(C);
        if ($.color.copy(C.color).multiplyScalar(C.intensity * A), C.castShadow) {
          const Z = C.shadow, z = n.get(C);
          z.shadowBias = Z.bias, z.shadowNormalBias = Z.normalBias, z.shadowRadius = Z.radius, z.shadowMapSize = Z.mapSize, i.directionalShadow[_] = z, i.directionalShadowMap[_] = O, i.directionalShadowMatrix[_] = C.shadow.matrix, T++;
        }
        i.directional[_] = $, _++;
      } else if (C.isSpotLight) {
        const $ = t.get(C);
        $.position.setFromMatrixPosition(C.matrixWorld), $.color.copy(P).multiplyScalar(U * A), $.distance = X, $.coneCos = Math.cos(C.angle), $.penumbraCos = Math.cos(C.angle * (1 - C.penumbra)), $.decay = C.decay, i.spot[p] = $;
        const Z = C.shadow;
        if (C.map && (i.spotLightMap[w] = C.map, w++, Z.updateMatrices(C), C.castShadow && G++), i.spotLightMatrix[p] = Z.matrix, C.castShadow) {
          const z = n.get(C);
          z.shadowBias = Z.bias, z.shadowNormalBias = Z.normalBias, z.shadowRadius = Z.radius, z.shadowMapSize = Z.mapSize, i.spotShadow[p] = z, i.spotShadowMap[p] = O, b++;
        }
        p++;
      } else if (C.isRectAreaLight) {
        const $ = t.get(C);
        $.color.copy(P).multiplyScalar(U), $.halfWidth.set(C.width * 0.5, 0, 0), $.halfHeight.set(0, C.height * 0.5, 0), i.rectArea[E] = $, E++;
      } else if (C.isPointLight) {
        const $ = t.get(C);
        if ($.color.copy(C.color).multiplyScalar(C.intensity * A), $.distance = C.distance, $.decay = C.decay, C.castShadow) {
          const Z = C.shadow, z = n.get(C);
          z.shadowBias = Z.bias, z.shadowNormalBias = Z.normalBias, z.shadowRadius = Z.radius, z.shadowMapSize = Z.mapSize, z.shadowCameraNear = Z.camera.near, z.shadowCameraFar = Z.camera.far, i.pointShadow[f] = z, i.pointShadowMap[f] = O, i.pointShadowMatrix[f] = C.shadow.matrix, R++;
        }
        i.point[f] = $, f++;
      } else if (C.isHemisphereLight) {
        const $ = t.get(C);
        $.skyColor.copy(C.color).multiplyScalar(U * A), $.groundColor.copy(C.groundColor).multiplyScalar(U * A), i.hemi[y] = $, y++;
      }
    }
    E > 0 && (e.isWebGL2 ? s.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ge.LTC_FLOAT_1, i.rectAreaLTC2 = ge.LTC_FLOAT_2) : (i.rectAreaLTC1 = ge.LTC_HALF_1, i.rectAreaLTC2 = ge.LTC_HALF_2) : s.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ge.LTC_FLOAT_1, i.rectAreaLTC2 = ge.LTC_FLOAT_2) : s.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = ge.LTC_HALF_1, i.rectAreaLTC2 = ge.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = m, i.ambient[2] = g;
    const V = i.hash;
    (V.directionalLength !== _ || V.pointLength !== f || V.spotLength !== p || V.rectAreaLength !== E || V.hemiLength !== y || V.numDirectionalShadows !== T || V.numPointShadows !== R || V.numSpotShadows !== b || V.numSpotMaps !== w || V.numLightProbes !== S) && (i.directional.length = _, i.spot.length = p, i.rectArea.length = E, i.point.length = f, i.hemi.length = y, i.directionalShadow.length = T, i.directionalShadowMap.length = T, i.pointShadow.length = R, i.pointShadowMap.length = R, i.spotShadow.length = b, i.spotShadowMap.length = b, i.directionalShadowMatrix.length = T, i.pointShadowMatrix.length = R, i.spotLightMatrix.length = b + w - G, i.spotLightMap.length = w, i.numSpotLightShadowsWithMaps = G, i.numLightProbes = S, V.directionalLength = _, V.pointLength = f, V.spotLength = p, V.rectAreaLength = E, V.hemiLength = y, V.numDirectionalShadows = T, V.numPointShadows = R, V.numSpotShadows = b, V.numSpotMaps = w, V.numLightProbes = S, i.version = H0++);
  }
  function c(u, h) {
    let d = 0, m = 0, g = 0, _ = 0, f = 0;
    const p = h.matrixWorldInverse;
    for (let E = 0, y = u.length; E < y; E++) {
      const T = u[E];
      if (T.isDirectionalLight) {
        const R = i.directional[d];
        R.direction.setFromMatrixPosition(T.matrixWorld), r.setFromMatrixPosition(T.target.matrixWorld), R.direction.sub(r), R.direction.transformDirection(p), d++;
      } else if (T.isSpotLight) {
        const R = i.spot[g];
        R.position.setFromMatrixPosition(T.matrixWorld), R.position.applyMatrix4(p), R.direction.setFromMatrixPosition(T.matrixWorld), r.setFromMatrixPosition(T.target.matrixWorld), R.direction.sub(r), R.direction.transformDirection(p), g++;
      } else if (T.isRectAreaLight) {
        const R = i.rectArea[_];
        R.position.setFromMatrixPosition(T.matrixWorld), R.position.applyMatrix4(p), a.identity(), o.copy(T.matrixWorld), o.premultiply(p), a.extractRotation(o), R.halfWidth.set(T.width * 0.5, 0, 0), R.halfHeight.set(0, T.height * 0.5, 0), R.halfWidth.applyMatrix4(a), R.halfHeight.applyMatrix4(a), _++;
      } else if (T.isPointLight) {
        const R = i.point[m];
        R.position.setFromMatrixPosition(T.matrixWorld), R.position.applyMatrix4(p), m++;
      } else if (T.isHemisphereLight) {
        const R = i.hemi[f];
        R.direction.setFromMatrixPosition(T.matrixWorld), R.direction.transformDirection(p), f++;
      }
    }
  }
  return {
    setup: l,
    setupView: c,
    state: i
  };
}
function kc(s, e) {
  const t = new W0(s, e), n = [], i = [];
  function r() {
    n.length = 0, i.length = 0;
  }
  function o(h) {
    n.push(h);
  }
  function a(h) {
    i.push(h);
  }
  function l(h) {
    t.setup(n, h);
  }
  function c(h) {
    t.setupView(n, h);
  }
  return {
    init: r,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t
    },
    setupLights: l,
    setupLightsView: c,
    pushLight: o,
    pushShadow: a
  };
}
function j0(s, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(r, o = 0) {
    const a = t.get(r);
    let l;
    return a === void 0 ? (l = new kc(s, e), t.set(r, [l])) : o >= a.length ? (l = new kc(s, e), a.push(l)) : l = a[o], l;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class X0 extends bn {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Cp, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class q0 extends bn {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Y0 = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, K0 = `uniform sampler2D shadow_pass;
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
}`;
function $0(s, e, t) {
  let n = new Xa();
  const i = new Je(), r = new Je(), o = new ct(), a = new X0({ depthPacking: Lp }), l = new q0(), c = {}, u = t.maxTextureSize, h = { [zn]: $t, [$t]: zn, [An]: An }, d = new Ci({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Je() },
      radius: { value: 4 }
    },
    vertexShader: Y0,
    fragmentShader: K0
  }), m = d.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new yn();
  g.setAttribute(
    "position",
    new Wt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const _ = new He(g, d), f = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = qu;
  let p = this.type;
  this.render = function(b, w, G) {
    if (f.enabled === !1 || f.autoUpdate === !1 && f.needsUpdate === !1 || b.length === 0) return;
    const S = s.getRenderTarget(), A = s.getActiveCubeFace(), V = s.getActiveMipmapLevel(), J = s.state;
    J.setBlending(ti), J.buffers.color.setClear(1, 1, 1, 1), J.buffers.depth.setTest(!0), J.setScissorTest(!1);
    const se = p !== Fn && this.type === Fn, C = p === Fn && this.type !== Fn;
    for (let P = 0, U = b.length; P < U; P++) {
      const X = b[P], O = X.shadow;
      if (O === void 0) {
        console.warn("THREE.WebGLShadowMap:", X, "has no shadow.");
        continue;
      }
      if (O.autoUpdate === !1 && O.needsUpdate === !1) continue;
      i.copy(O.mapSize);
      const $ = O.getFrameExtents();
      if (i.multiply($), r.copy(O.mapSize), (i.x > u || i.y > u) && (i.x > u && (r.x = Math.floor(u / $.x), i.x = r.x * $.x, O.mapSize.x = r.x), i.y > u && (r.y = Math.floor(u / $.y), i.y = r.y * $.y, O.mapSize.y = r.y)), O.map === null || se === !0 || C === !0) {
        const z = this.type !== Fn ? { minFilter: Ct, magFilter: Ct } : {};
        O.map !== null && O.map.dispose(), O.map = new Ri(i.x, i.y, z), O.map.texture.name = X.name + ".shadowMap", O.camera.updateProjectionMatrix();
      }
      s.setRenderTarget(O.map), s.clear();
      const Z = O.getViewportCount();
      for (let z = 0; z < Z; z++) {
        const W = O.getViewport(z);
        o.set(
          r.x * W.x,
          r.y * W.y,
          r.x * W.z,
          r.y * W.w
        ), J.viewport(o), O.updateMatrices(X, z), n = O.getFrustum(), T(w, G, O.camera, X, this.type);
      }
      O.isPointLightShadow !== !0 && this.type === Fn && E(O, G), O.needsUpdate = !1;
    }
    p = this.type, f.needsUpdate = !1, s.setRenderTarget(S, A, V);
  };
  function E(b, w) {
    const G = e.update(_);
    d.defines.VSM_SAMPLES !== b.blurSamples && (d.defines.VSM_SAMPLES = b.blurSamples, m.defines.VSM_SAMPLES = b.blurSamples, d.needsUpdate = !0, m.needsUpdate = !0), b.mapPass === null && (b.mapPass = new Ri(i.x, i.y)), d.uniforms.shadow_pass.value = b.map.texture, d.uniforms.resolution.value = b.mapSize, d.uniforms.radius.value = b.radius, s.setRenderTarget(b.mapPass), s.clear(), s.renderBufferDirect(w, null, G, d, _, null), m.uniforms.shadow_pass.value = b.mapPass.texture, m.uniforms.resolution.value = b.mapSize, m.uniforms.radius.value = b.radius, s.setRenderTarget(b.map), s.clear(), s.renderBufferDirect(w, null, G, m, _, null);
  }
  function y(b, w, G, S) {
    let A = null;
    const V = G.isPointLight === !0 ? b.customDistanceMaterial : b.customDepthMaterial;
    if (V !== void 0)
      A = V;
    else if (A = G.isPointLight === !0 ? l : a, s.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) {
      const J = A.uuid, se = w.uuid;
      let C = c[J];
      C === void 0 && (C = {}, c[J] = C);
      let P = C[se];
      P === void 0 && (P = A.clone(), C[se] = P, w.addEventListener("dispose", R)), A = P;
    }
    if (A.visible = w.visible, A.wireframe = w.wireframe, S === Fn ? A.side = w.shadowSide !== null ? w.shadowSide : w.side : A.side = w.shadowSide !== null ? w.shadowSide : h[w.side], A.alphaMap = w.alphaMap, A.alphaTest = w.alphaTest, A.map = w.map, A.clipShadows = w.clipShadows, A.clippingPlanes = w.clippingPlanes, A.clipIntersection = w.clipIntersection, A.displacementMap = w.displacementMap, A.displacementScale = w.displacementScale, A.displacementBias = w.displacementBias, A.wireframeLinewidth = w.wireframeLinewidth, A.linewidth = w.linewidth, G.isPointLight === !0 && A.isMeshDistanceMaterial === !0) {
      const J = s.properties.get(A);
      J.light = G;
    }
    return A;
  }
  function T(b, w, G, S, A) {
    if (b.visible === !1) return;
    if (b.layers.test(w.layers) && (b.isMesh || b.isLine || b.isPoints) && (b.castShadow || b.receiveShadow && A === Fn) && (!b.frustumCulled || n.intersectsObject(b))) {
      b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse, b.matrixWorld);
      const se = e.update(b), C = b.material;
      if (Array.isArray(C)) {
        const P = se.groups;
        for (let U = 0, X = P.length; U < X; U++) {
          const O = P[U], $ = C[O.materialIndex];
          if ($ && $.visible) {
            const Z = y(b, $, S, A);
            b.onBeforeShadow(s, b, w, G, se, Z, O), s.renderBufferDirect(G, null, se, Z, b, O), b.onAfterShadow(s, b, w, G, se, Z, O);
          }
        }
      } else if (C.visible) {
        const P = y(b, C, S, A);
        b.onBeforeShadow(s, b, w, G, se, P, null), s.renderBufferDirect(G, null, se, P, b, null), b.onAfterShadow(s, b, w, G, se, P, null);
      }
    }
    const J = b.children;
    for (let se = 0, C = J.length; se < C; se++)
      T(J[se], w, G, S, A);
  }
  function R(b) {
    b.target.removeEventListener("dispose", R);
    for (const G in c) {
      const S = c[G], A = b.target.uuid;
      A in S && (S[A].dispose(), delete S[A]);
    }
  }
}
function J0(s, e, t) {
  const n = t.isWebGL2;
  function i() {
    let L = !1;
    const _e = new ct();
    let ve = null;
    const Ce = new ct(0, 0, 0, 0);
    return {
      setMask: function(Re) {
        ve !== Re && !L && (s.colorMask(Re, Re, Re, Re), ve = Re);
      },
      setLocked: function(Re) {
        L = Re;
      },
      setClear: function(Re, rt, ot, St, Pt) {
        Pt === !0 && (Re *= St, rt *= St, ot *= St), _e.set(Re, rt, ot, St), Ce.equals(_e) === !1 && (s.clearColor(Re, rt, ot, St), Ce.copy(_e));
      },
      reset: function() {
        L = !1, ve = null, Ce.set(-1, 0, 0, 0);
      }
    };
  }
  function r() {
    let L = !1, _e = null, ve = null, Ce = null;
    return {
      setTest: function(Re) {
        Re ? xe(s.DEPTH_TEST) : Me(s.DEPTH_TEST);
      },
      setMask: function(Re) {
        _e !== Re && !L && (s.depthMask(Re), _e = Re);
      },
      setFunc: function(Re) {
        if (ve !== Re) {
          switch (Re) {
            case tp:
              s.depthFunc(s.NEVER);
              break;
            case np:
              s.depthFunc(s.ALWAYS);
              break;
            case ip:
              s.depthFunc(s.LESS);
              break;
            case qr:
              s.depthFunc(s.LEQUAL);
              break;
            case sp:
              s.depthFunc(s.EQUAL);
              break;
            case rp:
              s.depthFunc(s.GEQUAL);
              break;
            case op:
              s.depthFunc(s.GREATER);
              break;
            case ap:
              s.depthFunc(s.NOTEQUAL);
              break;
            default:
              s.depthFunc(s.LEQUAL);
          }
          ve = Re;
        }
      },
      setLocked: function(Re) {
        L = Re;
      },
      setClear: function(Re) {
        Ce !== Re && (s.clearDepth(Re), Ce = Re);
      },
      reset: function() {
        L = !1, _e = null, ve = null, Ce = null;
      }
    };
  }
  function o() {
    let L = !1, _e = null, ve = null, Ce = null, Re = null, rt = null, ot = null, St = null, Pt = null;
    return {
      setTest: function(nt) {
        L || (nt ? xe(s.STENCIL_TEST) : Me(s.STENCIL_TEST));
      },
      setMask: function(nt) {
        _e !== nt && !L && (s.stencilMask(nt), _e = nt);
      },
      setFunc: function(nt, bt, jt) {
        (ve !== nt || Ce !== bt || Re !== jt) && (s.stencilFunc(nt, bt, jt), ve = nt, Ce = bt, Re = jt);
      },
      setOp: function(nt, bt, jt) {
        (rt !== nt || ot !== bt || St !== jt) && (s.stencilOp(nt, bt, jt), rt = nt, ot = bt, St = jt);
      },
      setLocked: function(nt) {
        L = nt;
      },
      setClear: function(nt) {
        Pt !== nt && (s.clearStencil(nt), Pt = nt);
      },
      reset: function() {
        L = !1, _e = null, ve = null, Ce = null, Re = null, rt = null, ot = null, St = null, Pt = null;
      }
    };
  }
  const a = new i(), l = new r(), c = new o(), u = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap();
  let d = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), _ = [], f = null, p = !1, E = null, y = null, T = null, R = null, b = null, w = null, G = null, S = new Oe(0, 0, 0), A = 0, V = !1, J = null, se = null, C = null, P = null, U = null;
  const X = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let O = !1, $ = 0;
  const Z = s.getParameter(s.VERSION);
  Z.indexOf("WebGL") !== -1 ? ($ = parseFloat(/^WebGL (\d)/.exec(Z)[1]), O = $ >= 1) : Z.indexOf("OpenGL ES") !== -1 && ($ = parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]), O = $ >= 2);
  let z = null, W = {};
  const D = s.getParameter(s.SCISSOR_BOX), Q = s.getParameter(s.VIEWPORT), ae = new ct().fromArray(D), he = new ct().fromArray(Q);
  function ne(L, _e, ve, Ce) {
    const Re = new Uint8Array(4), rt = s.createTexture();
    s.bindTexture(L, rt), s.texParameteri(L, s.TEXTURE_MIN_FILTER, s.NEAREST), s.texParameteri(L, s.TEXTURE_MAG_FILTER, s.NEAREST);
    for (let ot = 0; ot < ve; ot++)
      n && (L === s.TEXTURE_3D || L === s.TEXTURE_2D_ARRAY) ? s.texImage3D(_e, 0, s.RGBA, 1, 1, Ce, 0, s.RGBA, s.UNSIGNED_BYTE, Re) : s.texImage2D(_e + ot, 0, s.RGBA, 1, 1, 0, s.RGBA, s.UNSIGNED_BYTE, Re);
    return rt;
  }
  const oe = {};
  oe[s.TEXTURE_2D] = ne(s.TEXTURE_2D, s.TEXTURE_2D, 1), oe[s.TEXTURE_CUBE_MAP] = ne(s.TEXTURE_CUBE_MAP, s.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (oe[s.TEXTURE_2D_ARRAY] = ne(s.TEXTURE_2D_ARRAY, s.TEXTURE_2D_ARRAY, 1, 1), oe[s.TEXTURE_3D] = ne(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1)), a.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), xe(s.DEPTH_TEST), l.setFunc(qr), ue(!1), x(Ml), xe(s.CULL_FACE), Ae(ti);
  function xe(L) {
    d[L] !== !0 && (s.enable(L), d[L] = !0);
  }
  function Me(L) {
    d[L] !== !1 && (s.disable(L), d[L] = !1);
  }
  function Be(L, _e) {
    return m[L] !== _e ? (s.bindFramebuffer(L, _e), m[L] = _e, n && (L === s.DRAW_FRAMEBUFFER && (m[s.FRAMEBUFFER] = _e), L === s.FRAMEBUFFER && (m[s.DRAW_FRAMEBUFFER] = _e)), !0) : !1;
  }
  function B(L, _e) {
    let ve = _, Ce = !1;
    if (L)
      if (ve = g.get(_e), ve === void 0 && (ve = [], g.set(_e, ve)), L.isWebGLMultipleRenderTargets) {
        const Re = L.texture;
        if (ve.length !== Re.length || ve[0] !== s.COLOR_ATTACHMENT0) {
          for (let rt = 0, ot = Re.length; rt < ot; rt++)
            ve[rt] = s.COLOR_ATTACHMENT0 + rt;
          ve.length = Re.length, Ce = !0;
        }
      } else
        ve[0] !== s.COLOR_ATTACHMENT0 && (ve[0] = s.COLOR_ATTACHMENT0, Ce = !0);
    else
      ve[0] !== s.BACK && (ve[0] = s.BACK, Ce = !0);
    Ce && (t.isWebGL2 ? s.drawBuffers(ve) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve));
  }
  function _t(L) {
    return f !== L ? (s.useProgram(L), f = L, !0) : !1;
  }
  const be = {
    [gi]: s.FUNC_ADD,
    [zf]: s.FUNC_SUBTRACT,
    [kf]: s.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    be[wl] = s.MIN, be[Rl] = s.MAX;
  else {
    const L = e.get("EXT_blend_minmax");
    L !== null && (be[wl] = L.MIN_EXT, be[Rl] = L.MAX_EXT);
  }
  const Ie = {
    [Hf]: s.ZERO,
    [Gf]: s.ONE,
    [Wf]: s.SRC_COLOR,
    [ma]: s.SRC_ALPHA,
    [$f]: s.SRC_ALPHA_SATURATE,
    [Yf]: s.DST_COLOR,
    [Xf]: s.DST_ALPHA,
    [jf]: s.ONE_MINUS_SRC_COLOR,
    [ga]: s.ONE_MINUS_SRC_ALPHA,
    [Kf]: s.ONE_MINUS_DST_COLOR,
    [qf]: s.ONE_MINUS_DST_ALPHA,
    [Jf]: s.CONSTANT_COLOR,
    [Zf]: s.ONE_MINUS_CONSTANT_COLOR,
    [Qf]: s.CONSTANT_ALPHA,
    [ep]: s.ONE_MINUS_CONSTANT_ALPHA
  };
  function Ae(L, _e, ve, Ce, Re, rt, ot, St, Pt, nt) {
    if (L === ti) {
      p === !0 && (Me(s.BLEND), p = !1);
      return;
    }
    if (p === !1 && (xe(s.BLEND), p = !0), L !== Vf) {
      if (L !== E || nt !== V) {
        if ((y !== gi || b !== gi) && (s.blendEquation(s.FUNC_ADD), y = gi, b = gi), nt)
          switch (L) {
            case is:
              s.blendFuncSeparate(s.ONE, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
              break;
            case Al:
              s.blendFunc(s.ONE, s.ONE);
              break;
            case Tl:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case bl:
              s.blendFuncSeparate(s.ZERO, s.SRC_COLOR, s.ZERO, s.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        else
          switch (L) {
            case is:
              s.blendFuncSeparate(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
              break;
            case Al:
              s.blendFunc(s.SRC_ALPHA, s.ONE);
              break;
            case Tl:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case bl:
              s.blendFunc(s.ZERO, s.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        T = null, R = null, w = null, G = null, S.set(0, 0, 0), A = 0, E = L, V = nt;
      }
      return;
    }
    Re = Re || _e, rt = rt || ve, ot = ot || Ce, (_e !== y || Re !== b) && (s.blendEquationSeparate(be[_e], be[Re]), y = _e, b = Re), (ve !== T || Ce !== R || rt !== w || ot !== G) && (s.blendFuncSeparate(Ie[ve], Ie[Ce], Ie[rt], Ie[ot]), T = ve, R = Ce, w = rt, G = ot), (St.equals(S) === !1 || Pt !== A) && (s.blendColor(St.r, St.g, St.b, Pt), S.copy(St), A = Pt), E = L, V = !1;
  }
  function lt(L, _e) {
    L.side === An ? Me(s.CULL_FACE) : xe(s.CULL_FACE);
    let ve = L.side === $t;
    _e && (ve = !ve), ue(ve), L.blending === is && L.transparent === !1 ? Ae(ti) : Ae(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.blendColor, L.blendAlpha, L.premultipliedAlpha), l.setFunc(L.depthFunc), l.setTest(L.depthTest), l.setMask(L.depthWrite), a.setMask(L.colorWrite);
    const Ce = L.stencilWrite;
    c.setTest(Ce), Ce && (c.setMask(L.stencilWriteMask), c.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), c.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), I(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === !0 ? xe(s.SAMPLE_ALPHA_TO_COVERAGE) : Me(s.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function ue(L) {
    J !== L && (L ? s.frontFace(s.CW) : s.frontFace(s.CCW), J = L);
  }
  function x(L) {
    L !== Ff ? (xe(s.CULL_FACE), L !== se && (L === Ml ? s.cullFace(s.BACK) : L === Bf ? s.cullFace(s.FRONT) : s.cullFace(s.FRONT_AND_BACK))) : Me(s.CULL_FACE), se = L;
  }
  function v(L) {
    L !== C && (O && s.lineWidth(L), C = L);
  }
  function I(L, _e, ve) {
    L ? (xe(s.POLYGON_OFFSET_FILL), (P !== _e || U !== ve) && (s.polygonOffset(_e, ve), P = _e, U = ve)) : Me(s.POLYGON_OFFSET_FILL);
  }
  function te(L) {
    L ? xe(s.SCISSOR_TEST) : Me(s.SCISSOR_TEST);
  }
  function Y(L) {
    L === void 0 && (L = s.TEXTURE0 + X - 1), z !== L && (s.activeTexture(L), z = L);
  }
  function q(L, _e, ve) {
    ve === void 0 && (z === null ? ve = s.TEXTURE0 + X - 1 : ve = z);
    let Ce = W[ve];
    Ce === void 0 && (Ce = { type: void 0, texture: void 0 }, W[ve] = Ce), (Ce.type !== L || Ce.texture !== _e) && (z !== ve && (s.activeTexture(ve), z = ve), s.bindTexture(L, _e || oe[L]), Ce.type = L, Ce.texture = _e);
  }
  function fe() {
    const L = W[z];
    L !== void 0 && L.type !== void 0 && (s.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
  }
  function ce() {
    try {
      s.compressedTexImage2D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ye() {
    try {
      s.compressedTexImage3D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Te() {
    try {
      s.texSubImage2D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function De() {
    try {
      s.texSubImage3D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function re() {
    try {
      s.compressedTexSubImage2D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function je() {
    try {
      s.compressedTexSubImage3D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ie() {
    try {
      s.texStorage2D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ee() {
    try {
      s.texStorage3D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function le() {
    try {
      s.texImage2D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function pe() {
    try {
      s.texImage3D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Ue(L) {
    ae.equals(L) === !1 && (s.scissor(L.x, L.y, L.z, L.w), ae.copy(L));
  }
  function Ze(L) {
    he.equals(L) === !1 && (s.viewport(L.x, L.y, L.z, L.w), he.copy(L));
  }
  function ut(L, _e) {
    let ve = h.get(_e);
    ve === void 0 && (ve = /* @__PURE__ */ new WeakMap(), h.set(_e, ve));
    let Ce = ve.get(L);
    Ce === void 0 && (Ce = s.getUniformBlockIndex(_e, L.name), ve.set(L, Ce));
  }
  function Ve(L, _e) {
    const Ce = h.get(_e).get(L);
    u.get(_e) !== Ce && (s.uniformBlockBinding(_e, Ce, L.__bindingPointIndex), u.set(_e, Ce));
  }
  function me() {
    s.disable(s.BLEND), s.disable(s.CULL_FACE), s.disable(s.DEPTH_TEST), s.disable(s.POLYGON_OFFSET_FILL), s.disable(s.SCISSOR_TEST), s.disable(s.STENCIL_TEST), s.disable(s.SAMPLE_ALPHA_TO_COVERAGE), s.blendEquation(s.FUNC_ADD), s.blendFunc(s.ONE, s.ZERO), s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO), s.blendColor(0, 0, 0, 0), s.colorMask(!0, !0, !0, !0), s.clearColor(0, 0, 0, 0), s.depthMask(!0), s.depthFunc(s.LESS), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(s.ALWAYS, 0, 4294967295), s.stencilOp(s.KEEP, s.KEEP, s.KEEP), s.clearStencil(0), s.cullFace(s.BACK), s.frontFace(s.CCW), s.polygonOffset(0, 0), s.activeTexture(s.TEXTURE0), s.bindFramebuffer(s.FRAMEBUFFER, null), n === !0 && (s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), s.bindFramebuffer(s.READ_FRAMEBUFFER, null)), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), d = {}, z = null, W = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), _ = [], f = null, p = !1, E = null, y = null, T = null, R = null, b = null, w = null, G = null, S = new Oe(0, 0, 0), A = 0, V = !1, J = null, se = null, C = null, P = null, U = null, ae.set(0, 0, s.canvas.width, s.canvas.height), he.set(0, 0, s.canvas.width, s.canvas.height), a.reset(), l.reset(), c.reset();
  }
  return {
    buffers: {
      color: a,
      depth: l,
      stencil: c
    },
    enable: xe,
    disable: Me,
    bindFramebuffer: Be,
    drawBuffers: B,
    useProgram: _t,
    setBlending: Ae,
    setMaterial: lt,
    setFlipSided: ue,
    setCullFace: x,
    setLineWidth: v,
    setPolygonOffset: I,
    setScissorTest: te,
    activeTexture: Y,
    bindTexture: q,
    unbindTexture: fe,
    compressedTexImage2D: ce,
    compressedTexImage3D: ye,
    texImage2D: le,
    texImage3D: pe,
    updateUBOMapping: ut,
    uniformBlockBinding: Ve,
    texStorage2D: ie,
    texStorage3D: ee,
    texSubImage2D: Te,
    texSubImage3D: De,
    compressedTexSubImage2D: re,
    compressedTexSubImage3D: je,
    scissor: Ue,
    viewport: Ze,
    reset: me
  };
}
function Z0(s, e, t, n, i, r, o) {
  const a = i.isWebGL2, l = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), u = /* @__PURE__ */ new WeakMap();
  let h;
  const d = /* @__PURE__ */ new WeakMap();
  let m = !1;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(x, v) {
    return m ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(x, v)
    ) : qs("canvas");
  }
  function _(x, v, I, te) {
    let Y = 1;
    if ((x.width > te || x.height > te) && (Y = te / Math.max(x.width, x.height)), Y < 1 || v === !0)
      if (typeof HTMLImageElement < "u" && x instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && x instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && x instanceof ImageBitmap) {
        const q = v ? eo : Math.floor, fe = q(Y * x.width), ce = q(Y * x.height);
        h === void 0 && (h = g(fe, ce));
        const ye = I ? g(fe, ce) : h;
        return ye.width = fe, ye.height = ce, ye.getContext("2d").drawImage(x, 0, 0, fe, ce), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + x.width + "x" + x.height + ") to (" + fe + "x" + ce + ")."), ye;
      } else
        return "data" in x && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + x.width + "x" + x.height + ")."), x;
    return x;
  }
  function f(x) {
    return Ma(x.width) && Ma(x.height);
  }
  function p(x) {
    return a ? !1 : x.wrapS !== on || x.wrapT !== on || x.minFilter !== Ct && x.minFilter !== qt;
  }
  function E(x, v) {
    return x.generateMipmaps && v && x.minFilter !== Ct && x.minFilter !== qt;
  }
  function y(x) {
    s.generateMipmap(x);
  }
  function T(x, v, I, te, Y = !1) {
    if (a === !1) return v;
    if (x !== null) {
      if (s[x] !== void 0) return s[x];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + x + "'");
    }
    let q = v;
    if (v === s.RED && (I === s.FLOAT && (q = s.R32F), I === s.HALF_FLOAT && (q = s.R16F), I === s.UNSIGNED_BYTE && (q = s.R8)), v === s.RED_INTEGER && (I === s.UNSIGNED_BYTE && (q = s.R8UI), I === s.UNSIGNED_SHORT && (q = s.R16UI), I === s.UNSIGNED_INT && (q = s.R32UI), I === s.BYTE && (q = s.R8I), I === s.SHORT && (q = s.R16I), I === s.INT && (q = s.R32I)), v === s.RG && (I === s.FLOAT && (q = s.RG32F), I === s.HALF_FLOAT && (q = s.RG16F), I === s.UNSIGNED_BYTE && (q = s.RG8)), v === s.RGBA) {
      const fe = Y ? $r : st.getTransfer(te);
      I === s.FLOAT && (q = s.RGBA32F), I === s.HALF_FLOAT && (q = s.RGBA16F), I === s.UNSIGNED_BYTE && (q = fe === ht ? s.SRGB8_ALPHA8 : s.RGBA8), I === s.UNSIGNED_SHORT_4_4_4_4 && (q = s.RGBA4), I === s.UNSIGNED_SHORT_5_5_5_1 && (q = s.RGB5_A1);
    }
    return (q === s.R16F || q === s.R32F || q === s.RG16F || q === s.RG32F || q === s.RGBA16F || q === s.RGBA32F) && e.get("EXT_color_buffer_float"), q;
  }
  function R(x, v, I) {
    return E(x, I) === !0 || x.isFramebufferTexture && x.minFilter !== Ct && x.minFilter !== qt ? Math.log2(Math.max(v.width, v.height)) + 1 : x.mipmaps !== void 0 && x.mipmaps.length > 0 ? x.mipmaps.length : x.isCompressedTexture && Array.isArray(x.image) ? v.mipmaps.length : 1;
  }
  function b(x) {
    return x === Ct || x === ya || x === Hr ? s.NEAREST : s.LINEAR;
  }
  function w(x) {
    const v = x.target;
    v.removeEventListener("dispose", w), S(v), v.isVideoTexture && u.delete(v);
  }
  function G(x) {
    const v = x.target;
    v.removeEventListener("dispose", G), V(v);
  }
  function S(x) {
    const v = n.get(x);
    if (v.__webglInit === void 0) return;
    const I = x.source, te = d.get(I);
    if (te) {
      const Y = te[v.__cacheKey];
      Y.usedTimes--, Y.usedTimes === 0 && A(x), Object.keys(te).length === 0 && d.delete(I);
    }
    n.remove(x);
  }
  function A(x) {
    const v = n.get(x);
    s.deleteTexture(v.__webglTexture);
    const I = x.source, te = d.get(I);
    delete te[v.__cacheKey], o.memory.textures--;
  }
  function V(x) {
    const v = x.texture, I = n.get(x), te = n.get(v);
    if (te.__webglTexture !== void 0 && (s.deleteTexture(te.__webglTexture), o.memory.textures--), x.depthTexture && x.depthTexture.dispose(), x.isWebGLCubeRenderTarget)
      for (let Y = 0; Y < 6; Y++) {
        if (Array.isArray(I.__webglFramebuffer[Y]))
          for (let q = 0; q < I.__webglFramebuffer[Y].length; q++) s.deleteFramebuffer(I.__webglFramebuffer[Y][q]);
        else
          s.deleteFramebuffer(I.__webglFramebuffer[Y]);
        I.__webglDepthbuffer && s.deleteRenderbuffer(I.__webglDepthbuffer[Y]);
      }
    else {
      if (Array.isArray(I.__webglFramebuffer))
        for (let Y = 0; Y < I.__webglFramebuffer.length; Y++) s.deleteFramebuffer(I.__webglFramebuffer[Y]);
      else
        s.deleteFramebuffer(I.__webglFramebuffer);
      if (I.__webglDepthbuffer && s.deleteRenderbuffer(I.__webglDepthbuffer), I.__webglMultisampledFramebuffer && s.deleteFramebuffer(I.__webglMultisampledFramebuffer), I.__webglColorRenderbuffer)
        for (let Y = 0; Y < I.__webglColorRenderbuffer.length; Y++)
          I.__webglColorRenderbuffer[Y] && s.deleteRenderbuffer(I.__webglColorRenderbuffer[Y]);
      I.__webglDepthRenderbuffer && s.deleteRenderbuffer(I.__webglDepthRenderbuffer);
    }
    if (x.isWebGLMultipleRenderTargets)
      for (let Y = 0, q = v.length; Y < q; Y++) {
        const fe = n.get(v[Y]);
        fe.__webglTexture && (s.deleteTexture(fe.__webglTexture), o.memory.textures--), n.remove(v[Y]);
      }
    n.remove(v), n.remove(x);
  }
  let J = 0;
  function se() {
    J = 0;
  }
  function C() {
    const x = J;
    return x >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + x + " texture units while this GPU supports only " + i.maxTextures), J += 1, x;
  }
  function P(x) {
    const v = [];
    return v.push(x.wrapS), v.push(x.wrapT), v.push(x.wrapR || 0), v.push(x.magFilter), v.push(x.minFilter), v.push(x.anisotropy), v.push(x.internalFormat), v.push(x.format), v.push(x.type), v.push(x.generateMipmaps), v.push(x.premultiplyAlpha), v.push(x.flipY), v.push(x.unpackAlignment), v.push(x.colorSpace), v.join();
  }
  function U(x, v) {
    const I = n.get(x);
    if (x.isVideoTexture && lt(x), x.isRenderTargetTexture === !1 && x.version > 0 && I.__version !== x.version) {
      const te = x.image;
      if (te === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (te.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        ae(I, x, v);
        return;
      }
    }
    t.bindTexture(s.TEXTURE_2D, I.__webglTexture, s.TEXTURE0 + v);
  }
  function X(x, v) {
    const I = n.get(x);
    if (x.version > 0 && I.__version !== x.version) {
      ae(I, x, v);
      return;
    }
    t.bindTexture(s.TEXTURE_2D_ARRAY, I.__webglTexture, s.TEXTURE0 + v);
  }
  function O(x, v) {
    const I = n.get(x);
    if (x.version > 0 && I.__version !== x.version) {
      ae(I, x, v);
      return;
    }
    t.bindTexture(s.TEXTURE_3D, I.__webglTexture, s.TEXTURE0 + v);
  }
  function $(x, v) {
    const I = n.get(x);
    if (x.version > 0 && I.__version !== x.version) {
      he(I, x, v);
      return;
    }
    t.bindTexture(s.TEXTURE_CUBE_MAP, I.__webglTexture, s.TEXTURE0 + v);
  }
  const Z = {
    [cs]: s.REPEAT,
    [on]: s.CLAMP_TO_EDGE,
    [Yr]: s.MIRRORED_REPEAT
  }, z = {
    [Ct]: s.NEAREST,
    [ya]: s.NEAREST_MIPMAP_NEAREST,
    [Hr]: s.NEAREST_MIPMAP_LINEAR,
    [qt]: s.LINEAR,
    [Zu]: s.LINEAR_MIPMAP_NEAREST,
    [wi]: s.LINEAR_MIPMAP_LINEAR
  }, W = {
    [Ip]: s.NEVER,
    [Bp]: s.ALWAYS,
    [Dp]: s.LESS,
    [ch]: s.LEQUAL,
    [Up]: s.EQUAL,
    [Fp]: s.GEQUAL,
    [Np]: s.GREATER,
    [Op]: s.NOTEQUAL
  };
  function D(x, v, I) {
    if (I ? (s.texParameteri(x, s.TEXTURE_WRAP_S, Z[v.wrapS]), s.texParameteri(x, s.TEXTURE_WRAP_T, Z[v.wrapT]), (x === s.TEXTURE_3D || x === s.TEXTURE_2D_ARRAY) && s.texParameteri(x, s.TEXTURE_WRAP_R, Z[v.wrapR]), s.texParameteri(x, s.TEXTURE_MAG_FILTER, z[v.magFilter]), s.texParameteri(x, s.TEXTURE_MIN_FILTER, z[v.minFilter])) : (s.texParameteri(x, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(x, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE), (x === s.TEXTURE_3D || x === s.TEXTURE_2D_ARRAY) && s.texParameteri(x, s.TEXTURE_WRAP_R, s.CLAMP_TO_EDGE), (v.wrapS !== on || v.wrapT !== on) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), s.texParameteri(x, s.TEXTURE_MAG_FILTER, b(v.magFilter)), s.texParameteri(x, s.TEXTURE_MIN_FILTER, b(v.minFilter)), v.minFilter !== Ct && v.minFilter !== qt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), v.compareFunction && (s.texParameteri(x, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE), s.texParameteri(x, s.TEXTURE_COMPARE_FUNC, W[v.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      const te = e.get("EXT_texture_filter_anisotropic");
      if (v.magFilter === Ct || v.minFilter !== Hr && v.minFilter !== wi || v.type === Bn && e.has("OES_texture_float_linear") === !1 || a === !1 && v.type === js && e.has("OES_texture_half_float_linear") === !1) return;
      (v.anisotropy > 1 || n.get(v).__currentAnisotropy) && (s.texParameterf(x, te.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, i.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy);
    }
  }
  function Q(x, v) {
    let I = !1;
    x.__webglInit === void 0 && (x.__webglInit = !0, v.addEventListener("dispose", w));
    const te = v.source;
    let Y = d.get(te);
    Y === void 0 && (Y = {}, d.set(te, Y));
    const q = P(v);
    if (q !== x.__cacheKey) {
      Y[q] === void 0 && (Y[q] = {
        texture: s.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, I = !0), Y[q].usedTimes++;
      const fe = Y[x.__cacheKey];
      fe !== void 0 && (Y[x.__cacheKey].usedTimes--, fe.usedTimes === 0 && A(v)), x.__cacheKey = q, x.__webglTexture = Y[q].texture;
    }
    return I;
  }
  function ae(x, v, I) {
    let te = s.TEXTURE_2D;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (te = s.TEXTURE_2D_ARRAY), v.isData3DTexture && (te = s.TEXTURE_3D);
    const Y = Q(x, v), q = v.source;
    t.bindTexture(te, x.__webglTexture, s.TEXTURE0 + I);
    const fe = n.get(q);
    if (q.version !== fe.__version || Y === !0) {
      t.activeTexture(s.TEXTURE0 + I);
      const ce = st.getPrimaries(st.workingColorSpace), ye = v.colorSpace === ln ? null : st.getPrimaries(v.colorSpace), Te = v.colorSpace === ln || ce === ye ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, v.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, v.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, Te);
      const De = p(v) && f(v.image) === !1;
      let re = _(v.image, De, !1, i.maxTextureSize);
      re = ue(v, re);
      const je = f(re) || a, ie = r.convert(v.format, v.colorSpace);
      let ee = r.convert(v.type), le = T(v.internalFormat, ie, ee, v.colorSpace, v.isVideoTexture);
      D(te, v, je);
      let pe;
      const Ue = v.mipmaps, Ze = a && v.isVideoTexture !== !0 && le !== rh, ut = fe.__version === void 0 || Y === !0, Ve = R(v, re, je);
      if (v.isDepthTexture)
        le = s.DEPTH_COMPONENT, a ? v.type === Bn ? le = s.DEPTH_COMPONENT32F : v.type === Qn ? le = s.DEPTH_COMPONENT24 : v.type === Mi ? le = s.DEPTH24_STENCIL8 : le = s.DEPTH_COMPONENT16 : v.type === Bn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), v.format === Ai && le === s.DEPTH_COMPONENT && v.type !== Ha && v.type !== Qn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), v.type = Qn, ee = r.convert(v.type)), v.format === us && le === s.DEPTH_COMPONENT && (le = s.DEPTH_STENCIL, v.type !== Mi && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), v.type = Mi, ee = r.convert(v.type))), ut && (Ze ? t.texStorage2D(s.TEXTURE_2D, 1, le, re.width, re.height) : t.texImage2D(s.TEXTURE_2D, 0, le, re.width, re.height, 0, ie, ee, null));
      else if (v.isDataTexture)
        if (Ue.length > 0 && je) {
          Ze && ut && t.texStorage2D(s.TEXTURE_2D, Ve, le, Ue[0].width, Ue[0].height);
          for (let me = 0, L = Ue.length; me < L; me++)
            pe = Ue[me], Ze ? t.texSubImage2D(s.TEXTURE_2D, me, 0, 0, pe.width, pe.height, ie, ee, pe.data) : t.texImage2D(s.TEXTURE_2D, me, le, pe.width, pe.height, 0, ie, ee, pe.data);
          v.generateMipmaps = !1;
        } else
          Ze ? (ut && t.texStorage2D(s.TEXTURE_2D, Ve, le, re.width, re.height), t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, re.width, re.height, ie, ee, re.data)) : t.texImage2D(s.TEXTURE_2D, 0, le, re.width, re.height, 0, ie, ee, re.data);
      else if (v.isCompressedTexture)
        if (v.isCompressedArrayTexture) {
          Ze && ut && t.texStorage3D(s.TEXTURE_2D_ARRAY, Ve, le, Ue[0].width, Ue[0].height, re.depth);
          for (let me = 0, L = Ue.length; me < L; me++)
            pe = Ue[me], v.format !== an ? ie !== null ? Ze ? t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, me, 0, 0, 0, pe.width, pe.height, re.depth, ie, pe.data, 0, 0) : t.compressedTexImage3D(s.TEXTURE_2D_ARRAY, me, le, pe.width, pe.height, re.depth, 0, pe.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ze ? t.texSubImage3D(s.TEXTURE_2D_ARRAY, me, 0, 0, 0, pe.width, pe.height, re.depth, ie, ee, pe.data) : t.texImage3D(s.TEXTURE_2D_ARRAY, me, le, pe.width, pe.height, re.depth, 0, ie, ee, pe.data);
        } else {
          Ze && ut && t.texStorage2D(s.TEXTURE_2D, Ve, le, Ue[0].width, Ue[0].height);
          for (let me = 0, L = Ue.length; me < L; me++)
            pe = Ue[me], v.format !== an ? ie !== null ? Ze ? t.compressedTexSubImage2D(s.TEXTURE_2D, me, 0, 0, pe.width, pe.height, ie, pe.data) : t.compressedTexImage2D(s.TEXTURE_2D, me, le, pe.width, pe.height, 0, pe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ze ? t.texSubImage2D(s.TEXTURE_2D, me, 0, 0, pe.width, pe.height, ie, ee, pe.data) : t.texImage2D(s.TEXTURE_2D, me, le, pe.width, pe.height, 0, ie, ee, pe.data);
        }
      else if (v.isDataArrayTexture)
        Ze ? (ut && t.texStorage3D(s.TEXTURE_2D_ARRAY, Ve, le, re.width, re.height, re.depth), t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, 0, re.width, re.height, re.depth, ie, ee, re.data)) : t.texImage3D(s.TEXTURE_2D_ARRAY, 0, le, re.width, re.height, re.depth, 0, ie, ee, re.data);
      else if (v.isData3DTexture)
        Ze ? (ut && t.texStorage3D(s.TEXTURE_3D, Ve, le, re.width, re.height, re.depth), t.texSubImage3D(s.TEXTURE_3D, 0, 0, 0, 0, re.width, re.height, re.depth, ie, ee, re.data)) : t.texImage3D(s.TEXTURE_3D, 0, le, re.width, re.height, re.depth, 0, ie, ee, re.data);
      else if (v.isFramebufferTexture) {
        if (ut)
          if (Ze)
            t.texStorage2D(s.TEXTURE_2D, Ve, le, re.width, re.height);
          else {
            let me = re.width, L = re.height;
            for (let _e = 0; _e < Ve; _e++)
              t.texImage2D(s.TEXTURE_2D, _e, le, me, L, 0, ie, ee, null), me >>= 1, L >>= 1;
          }
      } else if (Ue.length > 0 && je) {
        Ze && ut && t.texStorage2D(s.TEXTURE_2D, Ve, le, Ue[0].width, Ue[0].height);
        for (let me = 0, L = Ue.length; me < L; me++)
          pe = Ue[me], Ze ? t.texSubImage2D(s.TEXTURE_2D, me, 0, 0, ie, ee, pe) : t.texImage2D(s.TEXTURE_2D, me, le, ie, ee, pe);
        v.generateMipmaps = !1;
      } else
        Ze ? (ut && t.texStorage2D(s.TEXTURE_2D, Ve, le, re.width, re.height), t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, ie, ee, re)) : t.texImage2D(s.TEXTURE_2D, 0, le, ie, ee, re);
      E(v, je) && y(te), fe.__version = q.version, v.onUpdate && v.onUpdate(v);
    }
    x.__version = v.version;
  }
  function he(x, v, I) {
    if (v.image.length !== 6) return;
    const te = Q(x, v), Y = v.source;
    t.bindTexture(s.TEXTURE_CUBE_MAP, x.__webglTexture, s.TEXTURE0 + I);
    const q = n.get(Y);
    if (Y.version !== q.__version || te === !0) {
      t.activeTexture(s.TEXTURE0 + I);
      const fe = st.getPrimaries(st.workingColorSpace), ce = v.colorSpace === ln ? null : st.getPrimaries(v.colorSpace), ye = v.colorSpace === ln || fe === ce ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, v.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, v.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, ye);
      const Te = v.isCompressedTexture || v.image[0].isCompressedTexture, De = v.image[0] && v.image[0].isDataTexture, re = [];
      for (let me = 0; me < 6; me++)
        !Te && !De ? re[me] = _(v.image[me], !1, !0, i.maxCubemapSize) : re[me] = De ? v.image[me].image : v.image[me], re[me] = ue(v, re[me]);
      const je = re[0], ie = f(je) || a, ee = r.convert(v.format, v.colorSpace), le = r.convert(v.type), pe = T(v.internalFormat, ee, le, v.colorSpace), Ue = a && v.isVideoTexture !== !0, Ze = q.__version === void 0 || te === !0;
      let ut = R(v, je, ie);
      D(s.TEXTURE_CUBE_MAP, v, ie);
      let Ve;
      if (Te) {
        Ue && Ze && t.texStorage2D(s.TEXTURE_CUBE_MAP, ut, pe, je.width, je.height);
        for (let me = 0; me < 6; me++) {
          Ve = re[me].mipmaps;
          for (let L = 0; L < Ve.length; L++) {
            const _e = Ve[L];
            v.format !== an ? ee !== null ? Ue ? t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + me, L, 0, 0, _e.width, _e.height, ee, _e.data) : t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + me, L, pe, _e.width, _e.height, 0, _e.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ue ? t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + me, L, 0, 0, _e.width, _e.height, ee, le, _e.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + me, L, pe, _e.width, _e.height, 0, ee, le, _e.data);
          }
        }
      } else {
        Ve = v.mipmaps, Ue && Ze && (Ve.length > 0 && ut++, t.texStorage2D(s.TEXTURE_CUBE_MAP, ut, pe, re[0].width, re[0].height));
        for (let me = 0; me < 6; me++)
          if (De) {
            Ue ? t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + me, 0, 0, 0, re[me].width, re[me].height, ee, le, re[me].data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + me, 0, pe, re[me].width, re[me].height, 0, ee, le, re[me].data);
            for (let L = 0; L < Ve.length; L++) {
              const ve = Ve[L].image[me].image;
              Ue ? t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + me, L + 1, 0, 0, ve.width, ve.height, ee, le, ve.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + me, L + 1, pe, ve.width, ve.height, 0, ee, le, ve.data);
            }
          } else {
            Ue ? t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + me, 0, 0, 0, ee, le, re[me]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + me, 0, pe, ee, le, re[me]);
            for (let L = 0; L < Ve.length; L++) {
              const _e = Ve[L];
              Ue ? t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + me, L + 1, 0, 0, ee, le, _e.image[me]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + me, L + 1, pe, ee, le, _e.image[me]);
            }
          }
      }
      E(v, ie) && y(s.TEXTURE_CUBE_MAP), q.__version = Y.version, v.onUpdate && v.onUpdate(v);
    }
    x.__version = v.version;
  }
  function ne(x, v, I, te, Y, q) {
    const fe = r.convert(I.format, I.colorSpace), ce = r.convert(I.type), ye = T(I.internalFormat, fe, ce, I.colorSpace);
    if (!n.get(v).__hasExternalTextures) {
      const De = Math.max(1, v.width >> q), re = Math.max(1, v.height >> q);
      Y === s.TEXTURE_3D || Y === s.TEXTURE_2D_ARRAY ? t.texImage3D(Y, q, ye, De, re, v.depth, 0, fe, ce, null) : t.texImage2D(Y, q, ye, De, re, 0, fe, ce, null);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, x), Ae(v) ? l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, te, Y, n.get(I).__webglTexture, 0, Ie(v)) : (Y === s.TEXTURE_2D || Y >= s.TEXTURE_CUBE_MAP_POSITIVE_X && Y <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s.framebufferTexture2D(s.FRAMEBUFFER, te, Y, n.get(I).__webglTexture, q), t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function oe(x, v, I) {
    if (s.bindRenderbuffer(s.RENDERBUFFER, x), v.depthBuffer && !v.stencilBuffer) {
      let te = a === !0 ? s.DEPTH_COMPONENT24 : s.DEPTH_COMPONENT16;
      if (I || Ae(v)) {
        const Y = v.depthTexture;
        Y && Y.isDepthTexture && (Y.type === Bn ? te = s.DEPTH_COMPONENT32F : Y.type === Qn && (te = s.DEPTH_COMPONENT24));
        const q = Ie(v);
        Ae(v) ? l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, q, te, v.width, v.height) : s.renderbufferStorageMultisample(s.RENDERBUFFER, q, te, v.width, v.height);
      } else
        s.renderbufferStorage(s.RENDERBUFFER, te, v.width, v.height);
      s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.RENDERBUFFER, x);
    } else if (v.depthBuffer && v.stencilBuffer) {
      const te = Ie(v);
      I && Ae(v) === !1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, te, s.DEPTH24_STENCIL8, v.width, v.height) : Ae(v) ? l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, te, s.DEPTH24_STENCIL8, v.width, v.height) : s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_STENCIL, v.width, v.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.RENDERBUFFER, x);
    } else {
      const te = v.isWebGLMultipleRenderTargets === !0 ? v.texture : [v.texture];
      for (let Y = 0; Y < te.length; Y++) {
        const q = te[Y], fe = r.convert(q.format, q.colorSpace), ce = r.convert(q.type), ye = T(q.internalFormat, fe, ce, q.colorSpace), Te = Ie(v);
        I && Ae(v) === !1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, Te, ye, v.width, v.height) : Ae(v) ? l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, Te, ye, v.width, v.height) : s.renderbufferStorage(s.RENDERBUFFER, ye, v.width, v.height);
      }
    }
    s.bindRenderbuffer(s.RENDERBUFFER, null);
  }
  function xe(x, v) {
    if (v && v.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(s.FRAMEBUFFER, x), !(v.depthTexture && v.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(v.depthTexture).__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = !0), U(v.depthTexture, 0);
    const te = n.get(v.depthTexture).__webglTexture, Y = Ie(v);
    if (v.depthTexture.format === Ai)
      Ae(v) ? l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, te, 0, Y) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, te, 0);
    else if (v.depthTexture.format === us)
      Ae(v) ? l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, te, 0, Y) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, te, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Me(x) {
    const v = n.get(x), I = x.isWebGLCubeRenderTarget === !0;
    if (x.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (I) throw new Error("target.depthTexture not supported in Cube render targets");
      xe(v.__webglFramebuffer, x);
    } else if (I) {
      v.__webglDepthbuffer = [];
      for (let te = 0; te < 6; te++)
        t.bindFramebuffer(s.FRAMEBUFFER, v.__webglFramebuffer[te]), v.__webglDepthbuffer[te] = s.createRenderbuffer(), oe(v.__webglDepthbuffer[te], x, !1);
    } else
      t.bindFramebuffer(s.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer = s.createRenderbuffer(), oe(v.__webglDepthbuffer, x, !1);
    t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function Be(x, v, I) {
    const te = n.get(x);
    v !== void 0 && ne(te.__webglFramebuffer, x, x.texture, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, 0), I !== void 0 && Me(x);
  }
  function B(x) {
    const v = x.texture, I = n.get(x), te = n.get(v);
    x.addEventListener("dispose", G), x.isWebGLMultipleRenderTargets !== !0 && (te.__webglTexture === void 0 && (te.__webglTexture = s.createTexture()), te.__version = v.version, o.memory.textures++);
    const Y = x.isWebGLCubeRenderTarget === !0, q = x.isWebGLMultipleRenderTargets === !0, fe = f(x) || a;
    if (Y) {
      I.__webglFramebuffer = [];
      for (let ce = 0; ce < 6; ce++)
        if (a && v.mipmaps && v.mipmaps.length > 0) {
          I.__webglFramebuffer[ce] = [];
          for (let ye = 0; ye < v.mipmaps.length; ye++)
            I.__webglFramebuffer[ce][ye] = s.createFramebuffer();
        } else
          I.__webglFramebuffer[ce] = s.createFramebuffer();
    } else {
      if (a && v.mipmaps && v.mipmaps.length > 0) {
        I.__webglFramebuffer = [];
        for (let ce = 0; ce < v.mipmaps.length; ce++)
          I.__webglFramebuffer[ce] = s.createFramebuffer();
      } else
        I.__webglFramebuffer = s.createFramebuffer();
      if (q)
        if (i.drawBuffers) {
          const ce = x.texture;
          for (let ye = 0, Te = ce.length; ye < Te; ye++) {
            const De = n.get(ce[ye]);
            De.__webglTexture === void 0 && (De.__webglTexture = s.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && x.samples > 0 && Ae(x) === !1) {
        const ce = q ? v : [v];
        I.__webglMultisampledFramebuffer = s.createFramebuffer(), I.__webglColorRenderbuffer = [], t.bindFramebuffer(s.FRAMEBUFFER, I.__webglMultisampledFramebuffer);
        for (let ye = 0; ye < ce.length; ye++) {
          const Te = ce[ye];
          I.__webglColorRenderbuffer[ye] = s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, I.__webglColorRenderbuffer[ye]);
          const De = r.convert(Te.format, Te.colorSpace), re = r.convert(Te.type), je = T(Te.internalFormat, De, re, Te.colorSpace, x.isXRRenderTarget === !0), ie = Ie(x);
          s.renderbufferStorageMultisample(s.RENDERBUFFER, ie, je, x.width, x.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ye, s.RENDERBUFFER, I.__webglColorRenderbuffer[ye]);
        }
        s.bindRenderbuffer(s.RENDERBUFFER, null), x.depthBuffer && (I.__webglDepthRenderbuffer = s.createRenderbuffer(), oe(I.__webglDepthRenderbuffer, x, !0)), t.bindFramebuffer(s.FRAMEBUFFER, null);
      }
    }
    if (Y) {
      t.bindTexture(s.TEXTURE_CUBE_MAP, te.__webglTexture), D(s.TEXTURE_CUBE_MAP, v, fe);
      for (let ce = 0; ce < 6; ce++)
        if (a && v.mipmaps && v.mipmaps.length > 0)
          for (let ye = 0; ye < v.mipmaps.length; ye++)
            ne(I.__webglFramebuffer[ce][ye], x, v, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + ce, ye);
        else
          ne(I.__webglFramebuffer[ce], x, v, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + ce, 0);
      E(v, fe) && y(s.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (q) {
      const ce = x.texture;
      for (let ye = 0, Te = ce.length; ye < Te; ye++) {
        const De = ce[ye], re = n.get(De);
        t.bindTexture(s.TEXTURE_2D, re.__webglTexture), D(s.TEXTURE_2D, De, fe), ne(I.__webglFramebuffer, x, De, s.COLOR_ATTACHMENT0 + ye, s.TEXTURE_2D, 0), E(De, fe) && y(s.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ce = s.TEXTURE_2D;
      if ((x.isWebGL3DRenderTarget || x.isWebGLArrayRenderTarget) && (a ? ce = x.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(ce, te.__webglTexture), D(ce, v, fe), a && v.mipmaps && v.mipmaps.length > 0)
        for (let ye = 0; ye < v.mipmaps.length; ye++)
          ne(I.__webglFramebuffer[ye], x, v, s.COLOR_ATTACHMENT0, ce, ye);
      else
        ne(I.__webglFramebuffer, x, v, s.COLOR_ATTACHMENT0, ce, 0);
      E(v, fe) && y(ce), t.unbindTexture();
    }
    x.depthBuffer && Me(x);
  }
  function _t(x) {
    const v = f(x) || a, I = x.isWebGLMultipleRenderTargets === !0 ? x.texture : [x.texture];
    for (let te = 0, Y = I.length; te < Y; te++) {
      const q = I[te];
      if (E(q, v)) {
        const fe = x.isWebGLCubeRenderTarget ? s.TEXTURE_CUBE_MAP : s.TEXTURE_2D, ce = n.get(q).__webglTexture;
        t.bindTexture(fe, ce), y(fe), t.unbindTexture();
      }
    }
  }
  function be(x) {
    if (a && x.samples > 0 && Ae(x) === !1) {
      const v = x.isWebGLMultipleRenderTargets ? x.texture : [x.texture], I = x.width, te = x.height;
      let Y = s.COLOR_BUFFER_BIT;
      const q = [], fe = x.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, ce = n.get(x), ye = x.isWebGLMultipleRenderTargets === !0;
      if (ye)
        for (let Te = 0; Te < v.length; Te++)
          t.bindFramebuffer(s.FRAMEBUFFER, ce.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + Te, s.RENDERBUFFER, null), t.bindFramebuffer(s.FRAMEBUFFER, ce.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + Te, s.TEXTURE_2D, null, 0);
      t.bindFramebuffer(s.READ_FRAMEBUFFER, ce.__webglMultisampledFramebuffer), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, ce.__webglFramebuffer);
      for (let Te = 0; Te < v.length; Te++) {
        q.push(s.COLOR_ATTACHMENT0 + Te), x.depthBuffer && q.push(fe);
        const De = ce.__ignoreDepthValues !== void 0 ? ce.__ignoreDepthValues : !1;
        if (De === !1 && (x.depthBuffer && (Y |= s.DEPTH_BUFFER_BIT), x.stencilBuffer && (Y |= s.STENCIL_BUFFER_BIT)), ye && s.framebufferRenderbuffer(s.READ_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.RENDERBUFFER, ce.__webglColorRenderbuffer[Te]), De === !0 && (s.invalidateFramebuffer(s.READ_FRAMEBUFFER, [fe]), s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [fe])), ye) {
          const re = n.get(v[Te]).__webglTexture;
          s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, re, 0);
        }
        s.blitFramebuffer(0, 0, I, te, 0, 0, I, te, Y, s.NEAREST), c && s.invalidateFramebuffer(s.READ_FRAMEBUFFER, q);
      }
      if (t.bindFramebuffer(s.READ_FRAMEBUFFER, null), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), ye)
        for (let Te = 0; Te < v.length; Te++) {
          t.bindFramebuffer(s.FRAMEBUFFER, ce.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + Te, s.RENDERBUFFER, ce.__webglColorRenderbuffer[Te]);
          const De = n.get(v[Te]).__webglTexture;
          t.bindFramebuffer(s.FRAMEBUFFER, ce.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + Te, s.TEXTURE_2D, De, 0);
        }
      t.bindFramebuffer(s.DRAW_FRAMEBUFFER, ce.__webglMultisampledFramebuffer);
    }
  }
  function Ie(x) {
    return Math.min(i.maxSamples, x.samples);
  }
  function Ae(x) {
    const v = n.get(x);
    return a && x.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && v.__useRenderToTexture !== !1;
  }
  function lt(x) {
    const v = o.render.frame;
    u.get(x) !== v && (u.set(x, v), x.update());
  }
  function ue(x, v) {
    const I = x.colorSpace, te = x.format, Y = x.type;
    return x.isCompressedTexture === !0 || x.isVideoTexture === !0 || x.format === Sa || I !== Lt && I !== ln && (st.getTransfer(I) === ht ? a === !1 ? e.has("EXT_sRGB") === !0 && te === an ? (x.format = Sa, x.minFilter = qt, x.generateMipmaps = !1) : v = hh.sRGBToLinear(v) : (te !== an || Y !== ii) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", I)), v;
  }
  this.allocateTextureUnit = C, this.resetTextureUnits = se, this.setTexture2D = U, this.setTexture2DArray = X, this.setTexture3D = O, this.setTextureCube = $, this.rebindTextures = Be, this.setupRenderTarget = B, this.updateRenderTargetMipmap = _t, this.updateMultisampleRenderTarget = be, this.setupDepthRenderbuffer = Me, this.setupFrameBufferTexture = ne, this.useMultisampledRTT = Ae;
}
function Q0(s, e, t) {
  const n = t.isWebGL2;
  function i(r, o = ln) {
    let a;
    const l = st.getTransfer(o);
    if (r === ii) return s.UNSIGNED_BYTE;
    if (r === eh) return s.UNSIGNED_SHORT_4_4_4_4;
    if (r === th) return s.UNSIGNED_SHORT_5_5_5_1;
    if (r === gp) return s.BYTE;
    if (r === _p) return s.SHORT;
    if (r === Ha) return s.UNSIGNED_SHORT;
    if (r === Qu) return s.INT;
    if (r === Qn) return s.UNSIGNED_INT;
    if (r === Bn) return s.FLOAT;
    if (r === js)
      return n ? s.HALF_FLOAT : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (r === vp) return s.ALPHA;
    if (r === an) return s.RGBA;
    if (r === yp) return s.LUMINANCE;
    if (r === xp) return s.LUMINANCE_ALPHA;
    if (r === Ai) return s.DEPTH_COMPONENT;
    if (r === us) return s.DEPTH_STENCIL;
    if (r === Sa)
      return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (r === Ep) return s.RED;
    if (r === nh) return s.RED_INTEGER;
    if (r === Sp) return s.RG;
    if (r === ih) return s.RG_INTEGER;
    if (r === sh) return s.RGBA_INTEGER;
    if (r === Mo || r === Ao || r === To || r === bo)
      if (l === ht)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (r === Mo) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (r === Ao) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (r === To) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (r === bo) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (r === Mo) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (r === Ao) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (r === To) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (r === bo) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (r === Ll || r === Pl || r === Il || r === Dl)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (r === Ll) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (r === Pl) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (r === Il) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (r === Dl) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (r === rh)
      return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (r === Ul || r === Nl)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (r === Ul) return l === ht ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (r === Nl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (r === Ol || r === Fl || r === Bl || r === Vl || r === zl || r === kl || r === Hl || r === Gl || r === Wl || r === jl || r === Xl || r === ql || r === Yl || r === Kl)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (r === Ol) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (r === Fl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (r === Bl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (r === Vl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (r === zl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (r === kl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (r === Hl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (r === Gl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (r === Wl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (r === jl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (r === Xl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (r === ql) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (r === Yl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (r === Kl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (r === wo || r === $l || r === Jl)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (r === wo) return l === ht ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (r === $l) return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (r === Jl) return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (r === Mp || r === Zl || r === Ql || r === ec)
      if (a = e.get("EXT_texture_compression_rgtc"), a !== null) {
        if (r === wo) return a.COMPRESSED_RED_RGTC1_EXT;
        if (r === Zl) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (r === Ql) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (r === ec) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return r === Mi ? n ? s.UNSIGNED_INT_24_8 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : s[r] !== void 0 ? s[r] : null;
  }
  return { convert: i };
}
class ey extends Gt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Ei extends gt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const ty = { type: "move" };
class Jo {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Ei(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Ei(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new N(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new N()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Ei(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new N(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new N()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, r = null, o = null;
    const a = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = !0;
        for (const _ of e.hand.values()) {
          const f = t.getJointPose(_, n), p = this._getHandJoint(c, _);
          f !== null && (p.matrix.fromArray(f.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = !0, p.jointRadius = f.radius), p.visible = f !== null;
        }
        const u = c.joints["index-finger-tip"], h = c.joints["thumb-tip"], d = u.position.distanceTo(h.position), m = 0.02, g = 5e-3;
        c.inputState.pinching && d > m + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && d <= m - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = !1, r.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = !1));
      a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(ty)));
    }
    return a !== null && (a.visible = i !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = o !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Ei();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class ny extends Ii {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, r = 1, o = null, a = "local-floor", l = 1, c = null, u = null, h = null, d = null, m = null, g = null;
    const _ = t.getContextAttributes();
    let f = null, p = null;
    const E = [], y = [], T = new Je();
    let R = null;
    const b = new Gt();
    b.layers.enable(1), b.viewport = new ct();
    const w = new Gt();
    w.layers.enable(2), w.viewport = new ct();
    const G = [b, w], S = new ey();
    S.layers.enable(1), S.layers.enable(2);
    let A = null, V = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(D) {
      let Q = E[D];
      return Q === void 0 && (Q = new Jo(), E[D] = Q), Q.getTargetRaySpace();
    }, this.getControllerGrip = function(D) {
      let Q = E[D];
      return Q === void 0 && (Q = new Jo(), E[D] = Q), Q.getGripSpace();
    }, this.getHand = function(D) {
      let Q = E[D];
      return Q === void 0 && (Q = new Jo(), E[D] = Q), Q.getHandSpace();
    };
    function J(D) {
      const Q = y.indexOf(D.inputSource);
      if (Q === -1)
        return;
      const ae = E[Q];
      ae !== void 0 && (ae.update(D.inputSource, D.frame, c || o), ae.dispatchEvent({ type: D.type, data: D.inputSource }));
    }
    function se() {
      i.removeEventListener("select", J), i.removeEventListener("selectstart", J), i.removeEventListener("selectend", J), i.removeEventListener("squeeze", J), i.removeEventListener("squeezestart", J), i.removeEventListener("squeezeend", J), i.removeEventListener("end", se), i.removeEventListener("inputsourceschange", C);
      for (let D = 0; D < E.length; D++) {
        const Q = y[D];
        Q !== null && (y[D] = null, E[D].disconnect(Q));
      }
      A = null, V = null, e.setRenderTarget(f), m = null, d = null, h = null, i = null, p = null, W.stop(), n.isPresenting = !1, e.setPixelRatio(R), e.setSize(T.width, T.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(D) {
      r = D, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(D) {
      a = D, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(D) {
      c = D;
    }, this.getBaseLayer = function() {
      return d !== null ? d : m;
    }, this.getBinding = function() {
      return h;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(D) {
      if (i = D, i !== null) {
        if (f = e.getRenderTarget(), i.addEventListener("select", J), i.addEventListener("selectstart", J), i.addEventListener("selectend", J), i.addEventListener("squeeze", J), i.addEventListener("squeezestart", J), i.addEventListener("squeezeend", J), i.addEventListener("end", se), i.addEventListener("inputsourceschange", C), _.xrCompatible !== !0 && await t.makeXRCompatible(), R = e.getPixelRatio(), e.getSize(T), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const Q = {
            antialias: i.renderState.layers === void 0 ? _.antialias : !0,
            alpha: !0,
            depth: _.depth,
            stencil: _.stencil,
            framebufferScaleFactor: r
          };
          m = new XRWebGLLayer(i, t, Q), i.updateRenderState({ baseLayer: m }), e.setPixelRatio(1), e.setSize(m.framebufferWidth, m.framebufferHeight, !1), p = new Ri(
            m.framebufferWidth,
            m.framebufferHeight,
            {
              format: an,
              type: ii,
              colorSpace: e.outputColorSpace,
              stencilBuffer: _.stencil
            }
          );
        } else {
          let Q = null, ae = null, he = null;
          _.depth && (he = _.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, Q = _.stencil ? us : Ai, ae = _.stencil ? Mi : Qn);
          const ne = {
            colorFormat: t.RGBA8,
            depthFormat: he,
            scaleFactor: r
          };
          h = new XRWebGLBinding(i, t), d = h.createProjectionLayer(ne), i.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), p = new Ri(
            d.textureWidth,
            d.textureHeight,
            {
              format: an,
              type: ii,
              depthTexture: new Sh(d.textureWidth, d.textureHeight, ae, void 0, void 0, void 0, void 0, void 0, void 0, Q),
              stencilBuffer: _.stencil,
              colorSpace: e.outputColorSpace,
              samples: _.antialias ? 4 : 0
            }
          );
          const oe = e.properties.get(p);
          oe.__ignoreDepthValues = d.ignoreDepthValues;
        }
        p.isXRRenderTarget = !0, this.setFoveation(l), c = null, o = await i.requestReferenceSpace(a), W.setContext(i), W.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    };
    function C(D) {
      for (let Q = 0; Q < D.removed.length; Q++) {
        const ae = D.removed[Q], he = y.indexOf(ae);
        he >= 0 && (y[he] = null, E[he].disconnect(ae));
      }
      for (let Q = 0; Q < D.added.length; Q++) {
        const ae = D.added[Q];
        let he = y.indexOf(ae);
        if (he === -1) {
          for (let oe = 0; oe < E.length; oe++)
            if (oe >= y.length) {
              y.push(ae), he = oe;
              break;
            } else if (y[oe] === null) {
              y[oe] = ae, he = oe;
              break;
            }
          if (he === -1) break;
        }
        const ne = E[he];
        ne && ne.connect(ae);
      }
    }
    const P = new N(), U = new N();
    function X(D, Q, ae) {
      P.setFromMatrixPosition(Q.matrixWorld), U.setFromMatrixPosition(ae.matrixWorld);
      const he = P.distanceTo(U), ne = Q.projectionMatrix.elements, oe = ae.projectionMatrix.elements, xe = ne[14] / (ne[10] - 1), Me = ne[14] / (ne[10] + 1), Be = (ne[9] + 1) / ne[5], B = (ne[9] - 1) / ne[5], _t = (ne[8] - 1) / ne[0], be = (oe[8] + 1) / oe[0], Ie = xe * _t, Ae = xe * be, lt = he / (-_t + be), ue = lt * -_t;
      Q.matrixWorld.decompose(D.position, D.quaternion, D.scale), D.translateX(ue), D.translateZ(lt), D.matrixWorld.compose(D.position, D.quaternion, D.scale), D.matrixWorldInverse.copy(D.matrixWorld).invert();
      const x = xe + lt, v = Me + lt, I = Ie - ue, te = Ae + (he - ue), Y = Be * Me / v * x, q = B * Me / v * x;
      D.projectionMatrix.makePerspective(I, te, Y, q, x, v), D.projectionMatrixInverse.copy(D.projectionMatrix).invert();
    }
    function O(D, Q) {
      Q === null ? D.matrixWorld.copy(D.matrix) : D.matrixWorld.multiplyMatrices(Q.matrixWorld, D.matrix), D.matrixWorldInverse.copy(D.matrixWorld).invert();
    }
    this.updateCamera = function(D) {
      if (i === null) return;
      S.near = w.near = b.near = D.near, S.far = w.far = b.far = D.far, (A !== S.near || V !== S.far) && (i.updateRenderState({
        depthNear: S.near,
        depthFar: S.far
      }), A = S.near, V = S.far);
      const Q = D.parent, ae = S.cameras;
      O(S, Q);
      for (let he = 0; he < ae.length; he++)
        O(ae[he], Q);
      ae.length === 2 ? X(S, b, w) : S.projectionMatrix.copy(b.projectionMatrix), $(D, S, Q);
    };
    function $(D, Q, ae) {
      ae === null ? D.matrix.copy(Q.matrixWorld) : (D.matrix.copy(ae.matrixWorld), D.matrix.invert(), D.matrix.multiply(Q.matrixWorld)), D.matrix.decompose(D.position, D.quaternion, D.scale), D.updateMatrixWorld(!0), D.projectionMatrix.copy(Q.projectionMatrix), D.projectionMatrixInverse.copy(Q.projectionMatrixInverse), D.isPerspectiveCamera && (D.fov = ds * 2 * Math.atan(1 / D.projectionMatrix.elements[5]), D.zoom = 1);
    }
    this.getCamera = function() {
      return S;
    }, this.getFoveation = function() {
      if (!(d === null && m === null))
        return l;
    }, this.setFoveation = function(D) {
      l = D, d !== null && (d.fixedFoveation = D), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = D);
    };
    let Z = null;
    function z(D, Q) {
      if (u = Q.getViewerPose(c || o), g = Q, u !== null) {
        const ae = u.views;
        m !== null && (e.setRenderTargetFramebuffer(p, m.framebuffer), e.setRenderTarget(p));
        let he = !1;
        ae.length !== S.cameras.length && (S.cameras.length = 0, he = !0);
        for (let ne = 0; ne < ae.length; ne++) {
          const oe = ae[ne];
          let xe = null;
          if (m !== null)
            xe = m.getViewport(oe);
          else {
            const Be = h.getViewSubImage(d, oe);
            xe = Be.viewport, ne === 0 && (e.setRenderTargetTextures(
              p,
              Be.colorTexture,
              d.ignoreDepthValues ? void 0 : Be.depthStencilTexture
            ), e.setRenderTarget(p));
          }
          let Me = G[ne];
          Me === void 0 && (Me = new Gt(), Me.layers.enable(ne), Me.viewport = new ct(), G[ne] = Me), Me.matrix.fromArray(oe.transform.matrix), Me.matrix.decompose(Me.position, Me.quaternion, Me.scale), Me.projectionMatrix.fromArray(oe.projectionMatrix), Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(), Me.viewport.set(xe.x, xe.y, xe.width, xe.height), ne === 0 && (S.matrix.copy(Me.matrix), S.matrix.decompose(S.position, S.quaternion, S.scale)), he === !0 && S.cameras.push(Me);
        }
      }
      for (let ae = 0; ae < E.length; ae++) {
        const he = y[ae], ne = E[ae];
        he !== null && ne !== void 0 && ne.update(he, Q, c || o);
      }
      Z && Z(D, Q), Q.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: Q }), g = null;
    }
    const W = new Eh();
    W.setAnimationLoop(z), this.setAnimationLoop = function(D) {
      Z = D;
    }, this.dispose = function() {
    };
  }
}
function iy(s, e) {
  function t(f, p) {
    f.matrixAutoUpdate === !0 && f.updateMatrix(), p.value.copy(f.matrix);
  }
  function n(f, p) {
    p.color.getRGB(f.fogColor.value, vh(s)), p.isFog ? (f.fogNear.value = p.near, f.fogFar.value = p.far) : p.isFogExp2 && (f.fogDensity.value = p.density);
  }
  function i(f, p, E, y, T) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? r(f, p) : p.isMeshToonMaterial ? (r(f, p), h(f, p)) : p.isMeshPhongMaterial ? (r(f, p), u(f, p)) : p.isMeshStandardMaterial ? (r(f, p), d(f, p), p.isMeshPhysicalMaterial && m(f, p, T)) : p.isMeshMatcapMaterial ? (r(f, p), g(f, p)) : p.isMeshDepthMaterial ? r(f, p) : p.isMeshDistanceMaterial ? (r(f, p), _(f, p)) : p.isMeshNormalMaterial ? r(f, p) : p.isLineBasicMaterial ? (o(f, p), p.isLineDashedMaterial && a(f, p)) : p.isPointsMaterial ? l(f, p, E, y) : p.isSpriteMaterial ? c(f, p) : p.isShadowMaterial ? (f.color.value.copy(p.color), f.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function r(f, p) {
    f.opacity.value = p.opacity, p.color && f.diffuse.value.copy(p.color), p.emissive && f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (f.map.value = p.map, t(p.map, f.mapTransform)), p.alphaMap && (f.alphaMap.value = p.alphaMap, t(p.alphaMap, f.alphaMapTransform)), p.bumpMap && (f.bumpMap.value = p.bumpMap, t(p.bumpMap, f.bumpMapTransform), f.bumpScale.value = p.bumpScale, p.side === $t && (f.bumpScale.value *= -1)), p.normalMap && (f.normalMap.value = p.normalMap, t(p.normalMap, f.normalMapTransform), f.normalScale.value.copy(p.normalScale), p.side === $t && f.normalScale.value.negate()), p.displacementMap && (f.displacementMap.value = p.displacementMap, t(p.displacementMap, f.displacementMapTransform), f.displacementScale.value = p.displacementScale, f.displacementBias.value = p.displacementBias), p.emissiveMap && (f.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, f.emissiveMapTransform)), p.specularMap && (f.specularMap.value = p.specularMap, t(p.specularMap, f.specularMapTransform)), p.alphaTest > 0 && (f.alphaTest.value = p.alphaTest);
    const E = e.get(p).envMap;
    if (E && (f.envMap.value = E, f.flipEnvMap.value = E.isCubeTexture && E.isRenderTargetTexture === !1 ? -1 : 1, f.reflectivity.value = p.reflectivity, f.ior.value = p.ior, f.refractionRatio.value = p.refractionRatio), p.lightMap) {
      f.lightMap.value = p.lightMap;
      const y = s._useLegacyLights === !0 ? Math.PI : 1;
      f.lightMapIntensity.value = p.lightMapIntensity * y, t(p.lightMap, f.lightMapTransform);
    }
    p.aoMap && (f.aoMap.value = p.aoMap, f.aoMapIntensity.value = p.aoMapIntensity, t(p.aoMap, f.aoMapTransform));
  }
  function o(f, p) {
    f.diffuse.value.copy(p.color), f.opacity.value = p.opacity, p.map && (f.map.value = p.map, t(p.map, f.mapTransform));
  }
  function a(f, p) {
    f.dashSize.value = p.dashSize, f.totalSize.value = p.dashSize + p.gapSize, f.scale.value = p.scale;
  }
  function l(f, p, E, y) {
    f.diffuse.value.copy(p.color), f.opacity.value = p.opacity, f.size.value = p.size * E, f.scale.value = y * 0.5, p.map && (f.map.value = p.map, t(p.map, f.uvTransform)), p.alphaMap && (f.alphaMap.value = p.alphaMap, t(p.alphaMap, f.alphaMapTransform)), p.alphaTest > 0 && (f.alphaTest.value = p.alphaTest);
  }
  function c(f, p) {
    f.diffuse.value.copy(p.color), f.opacity.value = p.opacity, f.rotation.value = p.rotation, p.map && (f.map.value = p.map, t(p.map, f.mapTransform)), p.alphaMap && (f.alphaMap.value = p.alphaMap, t(p.alphaMap, f.alphaMapTransform)), p.alphaTest > 0 && (f.alphaTest.value = p.alphaTest);
  }
  function u(f, p) {
    f.specular.value.copy(p.specular), f.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function h(f, p) {
    p.gradientMap && (f.gradientMap.value = p.gradientMap);
  }
  function d(f, p) {
    f.metalness.value = p.metalness, p.metalnessMap && (f.metalnessMap.value = p.metalnessMap, t(p.metalnessMap, f.metalnessMapTransform)), f.roughness.value = p.roughness, p.roughnessMap && (f.roughnessMap.value = p.roughnessMap, t(p.roughnessMap, f.roughnessMapTransform)), e.get(p).envMap && (f.envMapIntensity.value = p.envMapIntensity);
  }
  function m(f, p, E) {
    f.ior.value = p.ior, p.sheen > 0 && (f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), f.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (f.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, f.sheenColorMapTransform)), p.sheenRoughnessMap && (f.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, f.sheenRoughnessMapTransform))), p.clearcoat > 0 && (f.clearcoat.value = p.clearcoat, f.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (f.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, f.clearcoatMapTransform)), p.clearcoatRoughnessMap && (f.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, f.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (f.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, f.clearcoatNormalMapTransform), f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === $t && f.clearcoatNormalScale.value.negate())), p.iridescence > 0 && (f.iridescence.value = p.iridescence, f.iridescenceIOR.value = p.iridescenceIOR, f.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], f.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (f.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, f.iridescenceMapTransform)), p.iridescenceThicknessMap && (f.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, f.iridescenceThicknessMapTransform))), p.transmission > 0 && (f.transmission.value = p.transmission, f.transmissionSamplerMap.value = E.texture, f.transmissionSamplerSize.value.set(E.width, E.height), p.transmissionMap && (f.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, f.transmissionMapTransform)), f.thickness.value = p.thickness, p.thicknessMap && (f.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, f.thicknessMapTransform)), f.attenuationDistance.value = p.attenuationDistance, f.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (f.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (f.anisotropyMap.value = p.anisotropyMap, t(p.anisotropyMap, f.anisotropyMapTransform))), f.specularIntensity.value = p.specularIntensity, f.specularColor.value.copy(p.specularColor), p.specularColorMap && (f.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, f.specularColorMapTransform)), p.specularIntensityMap && (f.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, f.specularIntensityMapTransform));
  }
  function g(f, p) {
    p.matcap && (f.matcap.value = p.matcap);
  }
  function _(f, p) {
    const E = e.get(p).light;
    f.referencePosition.value.setFromMatrixPosition(E.matrixWorld), f.nearDistance.value = E.shadow.camera.near, f.farDistance.value = E.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function sy(s, e, t, n) {
  let i = {}, r = {}, o = [];
  const a = t.isWebGL2 ? s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function l(E, y) {
    const T = y.program;
    n.uniformBlockBinding(E, T);
  }
  function c(E, y) {
    let T = i[E.id];
    T === void 0 && (g(E), T = u(E), i[E.id] = T, E.addEventListener("dispose", f));
    const R = y.program;
    n.updateUBOMapping(E, R);
    const b = e.render.frame;
    r[E.id] !== b && (d(E), r[E.id] = b);
  }
  function u(E) {
    const y = h();
    E.__bindingPointIndex = y;
    const T = s.createBuffer(), R = E.__size, b = E.usage;
    return s.bindBuffer(s.UNIFORM_BUFFER, T), s.bufferData(s.UNIFORM_BUFFER, R, b), s.bindBuffer(s.UNIFORM_BUFFER, null), s.bindBufferBase(s.UNIFORM_BUFFER, y, T), T;
  }
  function h() {
    for (let E = 0; E < a; E++)
      if (o.indexOf(E) === -1)
        return o.push(E), E;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(E) {
    const y = i[E.id], T = E.uniforms, R = E.__cache;
    s.bindBuffer(s.UNIFORM_BUFFER, y);
    for (let b = 0, w = T.length; b < w; b++) {
      const G = Array.isArray(T[b]) ? T[b] : [T[b]];
      for (let S = 0, A = G.length; S < A; S++) {
        const V = G[S];
        if (m(V, b, S, R) === !0) {
          const J = V.__offset, se = Array.isArray(V.value) ? V.value : [V.value];
          let C = 0;
          for (let P = 0; P < se.length; P++) {
            const U = se[P], X = _(U);
            typeof U == "number" || typeof U == "boolean" ? (V.__data[0] = U, s.bufferSubData(s.UNIFORM_BUFFER, J + C, V.__data)) : U.isMatrix3 ? (V.__data[0] = U.elements[0], V.__data[1] = U.elements[1], V.__data[2] = U.elements[2], V.__data[3] = 0, V.__data[4] = U.elements[3], V.__data[5] = U.elements[4], V.__data[6] = U.elements[5], V.__data[7] = 0, V.__data[8] = U.elements[6], V.__data[9] = U.elements[7], V.__data[10] = U.elements[8], V.__data[11] = 0) : (U.toArray(V.__data, C), C += X.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          s.bufferSubData(s.UNIFORM_BUFFER, J, V.__data);
        }
      }
    }
    s.bindBuffer(s.UNIFORM_BUFFER, null);
  }
  function m(E, y, T, R) {
    const b = E.value, w = y + "_" + T;
    if (R[w] === void 0)
      return typeof b == "number" || typeof b == "boolean" ? R[w] = b : R[w] = b.clone(), !0;
    {
      const G = R[w];
      if (typeof b == "number" || typeof b == "boolean") {
        if (G !== b)
          return R[w] = b, !0;
      } else if (G.equals(b) === !1)
        return G.copy(b), !0;
    }
    return !1;
  }
  function g(E) {
    const y = E.uniforms;
    let T = 0;
    const R = 16;
    for (let w = 0, G = y.length; w < G; w++) {
      const S = Array.isArray(y[w]) ? y[w] : [y[w]];
      for (let A = 0, V = S.length; A < V; A++) {
        const J = S[A], se = Array.isArray(J.value) ? J.value : [J.value];
        for (let C = 0, P = se.length; C < P; C++) {
          const U = se[C], X = _(U), O = T % R;
          O !== 0 && R - O < X.boundary && (T += R - O), J.__data = new Float32Array(X.storage / Float32Array.BYTES_PER_ELEMENT), J.__offset = T, T += X.storage;
        }
      }
    }
    const b = T % R;
    return b > 0 && (T += R - b), E.__size = T, E.__cache = {}, this;
  }
  function _(E) {
    const y = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof E == "number" || typeof E == "boolean" ? (y.boundary = 4, y.storage = 4) : E.isVector2 ? (y.boundary = 8, y.storage = 8) : E.isVector3 || E.isColor ? (y.boundary = 16, y.storage = 12) : E.isVector4 ? (y.boundary = 16, y.storage = 16) : E.isMatrix3 ? (y.boundary = 48, y.storage = 48) : E.isMatrix4 ? (y.boundary = 64, y.storage = 64) : E.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", E), y;
  }
  function f(E) {
    const y = E.target;
    y.removeEventListener("dispose", f);
    const T = o.indexOf(y.__bindingPointIndex);
    o.splice(T, 1), s.deleteBuffer(i[y.id]), delete i[y.id], delete r[y.id];
  }
  function p() {
    for (const E in i)
      s.deleteBuffer(i[E]);
    o = [], i = {}, r = {};
  }
  return {
    bind: l,
    update: c,
    dispose: p
  };
}
class Rh {
  constructor(e = {}) {
    const {
      canvas: t = em(),
      context: n = null,
      depth: i = !0,
      stencil: r = !0,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: h = !1
    } = e;
    this.isWebGLRenderer = !0;
    let d;
    n !== null ? d = n.getContextAttributes().alpha : d = o;
    const m = new Uint32Array(4), g = new Int32Array(4);
    let _ = null, f = null;
    const p = [], E = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = mt, this._useLegacyLights = !1, this.toneMapping = ni, this.toneMappingExposure = 1;
    const y = this;
    let T = !1, R = 0, b = 0, w = null, G = -1, S = null;
    const A = new ct(), V = new ct();
    let J = null;
    const se = new Oe(0);
    let C = 0, P = t.width, U = t.height, X = 1, O = null, $ = null;
    const Z = new ct(0, 0, P, U), z = new ct(0, 0, P, U);
    let W = !1;
    const D = new Xa();
    let Q = !1, ae = !1, he = null;
    const ne = new Ye(), oe = new Je(), xe = new N(), Me = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function Be() {
      return w === null ? X : 1;
    }
    let B = n;
    function _t(M, F) {
      for (let j = 0; j < M.length; j++) {
        const K = M[j], k = t.getContext(K, F);
        if (k !== null) return k;
      }
      return null;
    }
    try {
      const M = {
        alpha: !0,
        depth: i,
        stencil: r,
        antialias: a,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: h
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${ka}`), t.addEventListener("webglcontextlost", me, !1), t.addEventListener("webglcontextrestored", L, !1), t.addEventListener("webglcontextcreationerror", _e, !1), B === null) {
        const F = ["webgl2", "webgl", "experimental-webgl"];
        if (y.isWebGL1Renderer === !0 && F.shift(), B = _t(F, M), B === null)
          throw _t(F) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && B instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), B.getShaderPrecisionFormat === void 0 && (B.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (M) {
      throw console.error("THREE.WebGLRenderer: " + M.message), M;
    }
    let be, Ie, Ae, lt, ue, x, v, I, te, Y, q, fe, ce, ye, Te, De, re, je, ie, ee, le, pe, Ue, Ze;
    function ut() {
      be = new pv(B), Ie = new lv(B, be, e), be.init(Ie), pe = new Q0(B, be, Ie), Ae = new J0(B, be, Ie), lt = new _v(B), ue = new F0(), x = new Z0(B, be, Ae, ue, Ie, pe, lt), v = new uv(y), I = new fv(y), te = new Tm(B, Ie), Ue = new ov(B, be, te, Ie), Y = new mv(B, te, lt, Ue), q = new Ev(B, Y, te, lt), ie = new xv(B, Ie, x), De = new cv(ue), fe = new O0(y, v, I, be, Ie, Ue, De), ce = new iy(y, ue), ye = new V0(), Te = new j0(be, Ie), je = new rv(y, v, I, Ae, q, d, l), re = new $0(y, q, Ie), Ze = new sy(B, lt, Ie, Ae), ee = new av(B, be, lt, Ie), le = new gv(B, be, lt, Ie), lt.programs = fe.programs, y.capabilities = Ie, y.extensions = be, y.properties = ue, y.renderLists = ye, y.shadowMap = re, y.state = Ae, y.info = lt;
    }
    ut();
    const Ve = new ny(y, B);
    this.xr = Ve, this.getContext = function() {
      return B;
    }, this.getContextAttributes = function() {
      return B.getContextAttributes();
    }, this.forceContextLoss = function() {
      const M = be.get("WEBGL_lose_context");
      M && M.loseContext();
    }, this.forceContextRestore = function() {
      const M = be.get("WEBGL_lose_context");
      M && M.restoreContext();
    }, this.getPixelRatio = function() {
      return X;
    }, this.setPixelRatio = function(M) {
      M !== void 0 && (X = M, this.setSize(P, U, !1));
    }, this.getSize = function(M) {
      return M.set(P, U);
    }, this.setSize = function(M, F, j = !0) {
      if (Ve.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      P = M, U = F, t.width = Math.floor(M * X), t.height = Math.floor(F * X), j === !0 && (t.style.width = M + "px", t.style.height = F + "px"), this.setViewport(0, 0, M, F);
    }, this.getDrawingBufferSize = function(M) {
      return M.set(P * X, U * X).floor();
    }, this.setDrawingBufferSize = function(M, F, j) {
      P = M, U = F, X = j, t.width = Math.floor(M * j), t.height = Math.floor(F * j), this.setViewport(0, 0, M, F);
    }, this.getCurrentViewport = function(M) {
      return M.copy(A);
    }, this.getViewport = function(M) {
      return M.copy(Z);
    }, this.setViewport = function(M, F, j, K) {
      M.isVector4 ? Z.set(M.x, M.y, M.z, M.w) : Z.set(M, F, j, K), Ae.viewport(A.copy(Z).multiplyScalar(X).floor());
    }, this.getScissor = function(M) {
      return M.copy(z);
    }, this.setScissor = function(M, F, j, K) {
      M.isVector4 ? z.set(M.x, M.y, M.z, M.w) : z.set(M, F, j, K), Ae.scissor(V.copy(z).multiplyScalar(X).floor());
    }, this.getScissorTest = function() {
      return W;
    }, this.setScissorTest = function(M) {
      Ae.setScissorTest(W = M);
    }, this.setOpaqueSort = function(M) {
      O = M;
    }, this.setTransparentSort = function(M) {
      $ = M;
    }, this.getClearColor = function(M) {
      return M.copy(je.getClearColor());
    }, this.setClearColor = function() {
      je.setClearColor.apply(je, arguments);
    }, this.getClearAlpha = function() {
      return je.getClearAlpha();
    }, this.setClearAlpha = function() {
      je.setClearAlpha.apply(je, arguments);
    }, this.clear = function(M = !0, F = !0, j = !0) {
      let K = 0;
      if (M) {
        let k = !1;
        if (w !== null) {
          const Ee = w.texture.format;
          k = Ee === sh || Ee === ih || Ee === nh;
        }
        if (k) {
          const Ee = w.texture.type, we = Ee === ii || Ee === Qn || Ee === Ha || Ee === Mi || Ee === eh || Ee === th, Le = je.getClearColor(), Ne = je.getClearAlpha(), We = Le.r, ze = Le.g, ke = Le.b;
          we ? (m[0] = We, m[1] = ze, m[2] = ke, m[3] = Ne, B.clearBufferuiv(B.COLOR, 0, m)) : (g[0] = We, g[1] = ze, g[2] = ke, g[3] = Ne, B.clearBufferiv(B.COLOR, 0, g));
        } else
          K |= B.COLOR_BUFFER_BIT;
      }
      F && (K |= B.DEPTH_BUFFER_BIT), j && (K |= B.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), B.clear(K);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", me, !1), t.removeEventListener("webglcontextrestored", L, !1), t.removeEventListener("webglcontextcreationerror", _e, !1), ye.dispose(), Te.dispose(), ue.dispose(), v.dispose(), I.dispose(), q.dispose(), Ue.dispose(), Ze.dispose(), fe.dispose(), Ve.dispose(), Ve.removeEventListener("sessionstart", Pt), Ve.removeEventListener("sessionend", nt), he && (he.dispose(), he = null), bt.stop();
    };
    function me(M) {
      M.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), T = !0;
    }
    function L() {
      console.log("THREE.WebGLRenderer: Context Restored."), T = !1;
      const M = lt.autoReset, F = re.enabled, j = re.autoUpdate, K = re.needsUpdate, k = re.type;
      ut(), lt.autoReset = M, re.enabled = F, re.autoUpdate = j, re.needsUpdate = K, re.type = k;
    }
    function _e(M) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", M.statusMessage);
    }
    function ve(M) {
      const F = M.target;
      F.removeEventListener("dispose", ve), Ce(F);
    }
    function Ce(M) {
      Re(M), ue.remove(M);
    }
    function Re(M) {
      const F = ue.get(M).programs;
      F !== void 0 && (F.forEach(function(j) {
        fe.releaseProgram(j);
      }), M.isShaderMaterial && fe.releaseShaderCache(M));
    }
    this.renderBufferDirect = function(M, F, j, K, k, Ee) {
      F === null && (F = Me);
      const we = k.isMesh && k.matrixWorld.determinant() < 0, Le = dt(M, F, j, K, k);
      Ae.setMaterial(K, we);
      let Ne = j.index, We = 1;
      if (K.wireframe === !0) {
        if (Ne = Y.getWireframeAttribute(j), Ne === void 0) return;
        We = 2;
      }
      const ze = j.drawRange, ke = j.attributes.position;
      let Et = ze.start * We, Jt = (ze.start + ze.count) * We;
      Ee !== null && (Et = Math.max(Et, Ee.start * We), Jt = Math.min(Jt, (Ee.start + Ee.count) * We)), Ne !== null ? (Et = Math.max(Et, 0), Jt = Math.min(Jt, Ne.count)) : ke != null && (Et = Math.max(Et, 0), Jt = Math.min(Jt, ke.count));
      const wt = Jt - Et;
      if (wt < 0 || wt === 1 / 0) return;
      Ue.setup(k, K, Le, j, Ne);
      let Cn, ft = ee;
      if (Ne !== null && (Cn = te.get(Ne), ft = le, ft.setIndex(Cn)), k.isMesh)
        K.wireframe === !0 ? (Ae.setLineWidth(K.wireframeLinewidth * Be()), ft.setMode(B.LINES)) : ft.setMode(B.TRIANGLES);
      else if (k.isLine) {
        let Xe = K.linewidth;
        Xe === void 0 && (Xe = 1), Ae.setLineWidth(Xe * Be()), k.isLineSegments ? ft.setMode(B.LINES) : k.isLineLoop ? ft.setMode(B.LINE_LOOP) : ft.setMode(B.LINE_STRIP);
      } else k.isPoints ? ft.setMode(B.POINTS) : k.isSprite && ft.setMode(B.TRIANGLES);
      if (k.isBatchedMesh)
        ft.renderMultiDraw(k._multiDrawStarts, k._multiDrawCounts, k._multiDrawCount);
      else if (k.isInstancedMesh)
        ft.renderInstances(Et, wt, k.count);
      else if (j.isInstancedBufferGeometry) {
        const Xe = j._maxInstanceCount !== void 0 ? j._maxInstanceCount : 1 / 0, mo = Math.min(j.instanceCount, Xe);
        ft.renderInstances(Et, wt, mo);
      } else
        ft.render(Et, wt);
    };
    function rt(M, F, j) {
      M.transparent === !0 && M.side === An && M.forceSinglePass === !1 ? (M.side = $t, M.needsUpdate = !0, Gn(M, F, j), M.side = zn, M.needsUpdate = !0, Gn(M, F, j), M.side = An) : Gn(M, F, j);
    }
    this.compile = function(M, F, j = null) {
      j === null && (j = M), f = Te.get(j), f.init(), E.push(f), j.traverseVisible(function(k) {
        k.isLight && k.layers.test(F.layers) && (f.pushLight(k), k.castShadow && f.pushShadow(k));
      }), M !== j && M.traverseVisible(function(k) {
        k.isLight && k.layers.test(F.layers) && (f.pushLight(k), k.castShadow && f.pushShadow(k));
      }), f.setupLights(y._useLegacyLights);
      const K = /* @__PURE__ */ new Set();
      return M.traverse(function(k) {
        const Ee = k.material;
        if (Ee)
          if (Array.isArray(Ee))
            for (let we = 0; we < Ee.length; we++) {
              const Le = Ee[we];
              rt(Le, j, k), K.add(Le);
            }
          else
            rt(Ee, j, k), K.add(Ee);
      }), E.pop(), f = null, K;
    }, this.compileAsync = function(M, F, j = null) {
      const K = this.compile(M, F, j);
      return new Promise((k) => {
        function Ee() {
          if (K.forEach(function(we) {
            ue.get(we).currentProgram.isReady() && K.delete(we);
          }), K.size === 0) {
            k(M);
            return;
          }
          setTimeout(Ee, 10);
        }
        be.get("KHR_parallel_shader_compile") !== null ? Ee() : setTimeout(Ee, 10);
      });
    };
    let ot = null;
    function St(M) {
      ot && ot(M);
    }
    function Pt() {
      bt.stop();
    }
    function nt() {
      bt.start();
    }
    const bt = new Eh();
    bt.setAnimationLoop(St), typeof self < "u" && bt.setContext(self), this.setAnimationLoop = function(M) {
      ot = M, Ve.setAnimationLoop(M), M === null ? bt.stop() : bt.start();
    }, Ve.addEventListener("sessionstart", Pt), Ve.addEventListener("sessionend", nt), this.render = function(M, F) {
      if (F !== void 0 && F.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (T === !0) return;
      M.matrixWorldAutoUpdate === !0 && M.updateMatrixWorld(), F.parent === null && F.matrixWorldAutoUpdate === !0 && F.updateMatrixWorld(), Ve.enabled === !0 && Ve.isPresenting === !0 && (Ve.cameraAutoUpdate === !0 && Ve.updateCamera(F), F = Ve.getCamera()), M.isScene === !0 && M.onBeforeRender(y, M, F, w), f = Te.get(M, E.length), f.init(), E.push(f), ne.multiplyMatrices(F.projectionMatrix, F.matrixWorldInverse), D.setFromProjectionMatrix(ne), ae = this.localClippingEnabled, Q = De.init(this.clippingPlanes, ae), _ = ye.get(M, p.length), _.init(), p.push(_), jt(M, F, 0, y.sortObjects), _.finish(), y.sortObjects === !0 && _.sort(O, $), this.info.render.frame++, Q === !0 && De.beginShadows();
      const j = f.state.shadowsArray;
      if (re.render(j, M, F), Q === !0 && De.endShadows(), this.info.autoReset === !0 && this.info.reset(), je.render(_, M), f.setupLights(y._useLegacyLights), F.isArrayCamera) {
        const K = F.cameras;
        for (let k = 0, Ee = K.length; k < Ee; k++) {
          const we = K[k];
          Ss(_, M, we, we.viewport);
        }
      } else
        Ss(_, M, F);
      w !== null && (x.updateMultisampleRenderTarget(w), x.updateRenderTargetMipmap(w)), M.isScene === !0 && M.onAfterRender(y, M, F), Ue.resetDefaultState(), G = -1, S = null, E.pop(), E.length > 0 ? f = E[E.length - 1] : f = null, p.pop(), p.length > 0 ? _ = p[p.length - 1] : _ = null;
    };
    function jt(M, F, j, K) {
      if (M.visible === !1) return;
      if (M.layers.test(F.layers)) {
        if (M.isGroup)
          j = M.renderOrder;
        else if (M.isLOD)
          M.autoUpdate === !0 && M.update(F);
        else if (M.isLight)
          f.pushLight(M), M.castShadow && f.pushShadow(M);
        else if (M.isSprite) {
          if (!M.frustumCulled || D.intersectsSprite(M)) {
            K && xe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ne);
            const we = q.update(M), Le = M.material;
            Le.visible && _.push(M, we, Le, j, xe.z, null);
          }
        } else if ((M.isMesh || M.isLine || M.isPoints) && (!M.frustumCulled || D.intersectsObject(M))) {
          const we = q.update(M), Le = M.material;
          if (K && (M.boundingSphere !== void 0 ? (M.boundingSphere === null && M.computeBoundingSphere(), xe.copy(M.boundingSphere.center)) : (we.boundingSphere === null && we.computeBoundingSphere(), xe.copy(we.boundingSphere.center)), xe.applyMatrix4(M.matrixWorld).applyMatrix4(ne)), Array.isArray(Le)) {
            const Ne = we.groups;
            for (let We = 0, ze = Ne.length; We < ze; We++) {
              const ke = Ne[We], Et = Le[ke.materialIndex];
              Et && Et.visible && _.push(M, we, Et, j, xe.z, ke);
            }
          } else Le.visible && _.push(M, we, Le, j, xe.z, null);
        }
      }
      const Ee = M.children;
      for (let we = 0, Le = Ee.length; we < Le; we++)
        jt(Ee[we], F, j, K);
    }
    function Ss(M, F, j, K) {
      const k = M.opaque, Ee = M.transmissive, we = M.transparent;
      f.setupLightsView(j), Q === !0 && De.setGlobalState(y.clippingPlanes, j), Ee.length > 0 && Ms(k, Ee, F, j), K && Ae.viewport(A.copy(K)), k.length > 0 && si(k, F, j), Ee.length > 0 && si(Ee, F, j), we.length > 0 && si(we, F, j), Ae.buffers.depth.setTest(!0), Ae.buffers.depth.setMask(!0), Ae.buffers.color.setMask(!0), Ae.setPolygonOffset(!1);
    }
    function Ms(M, F, j, K) {
      if ((j.isScene === !0 ? j.overrideMaterial : null) !== null)
        return;
      const Ee = Ie.isWebGL2;
      he === null && (he = new Ri(1, 1, {
        generateMipmaps: !0,
        type: be.has("EXT_color_buffer_half_float") ? js : ii,
        minFilter: wi,
        samples: Ee ? 4 : 0
      })), y.getDrawingBufferSize(oe), Ee ? he.setSize(oe.x, oe.y) : he.setSize(eo(oe.x), eo(oe.y));
      const we = y.getRenderTarget();
      y.setRenderTarget(he), y.getClearColor(se), C = y.getClearAlpha(), C < 1 && y.setClearColor(16777215, 0.5), y.clear();
      const Le = y.toneMapping;
      y.toneMapping = ni, si(M, j, K), x.updateMultisampleRenderTarget(he), x.updateRenderTargetMipmap(he);
      let Ne = !1;
      for (let We = 0, ze = F.length; We < ze; We++) {
        const ke = F[We], Et = ke.object, Jt = ke.geometry, wt = ke.material, Cn = ke.group;
        if (wt.side === An && Et.layers.test(K.layers)) {
          const ft = wt.side;
          wt.side = $t, wt.needsUpdate = !0, nr(Et, j, K, Jt, wt, Cn), wt.side = ft, wt.needsUpdate = !0, Ne = !0;
        }
      }
      Ne === !0 && (x.updateMultisampleRenderTarget(he), x.updateRenderTargetMipmap(he)), y.setRenderTarget(we), y.setClearColor(se, C), y.toneMapping = Le;
    }
    function si(M, F, j) {
      const K = F.isScene === !0 ? F.overrideMaterial : null;
      for (let k = 0, Ee = M.length; k < Ee; k++) {
        const we = M[k], Le = we.object, Ne = we.geometry, We = K === null ? we.material : K, ze = we.group;
        Le.layers.test(j.layers) && nr(Le, F, j, Ne, We, ze);
      }
    }
    function nr(M, F, j, K, k, Ee) {
      M.onBeforeRender(y, F, j, K, k, Ee), M.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse, M.matrixWorld), M.normalMatrix.getNormalMatrix(M.modelViewMatrix), k.onBeforeRender(y, F, j, K, M, Ee), k.transparent === !0 && k.side === An && k.forceSinglePass === !1 ? (k.side = $t, k.needsUpdate = !0, y.renderBufferDirect(j, F, K, k, M, Ee), k.side = zn, k.needsUpdate = !0, y.renderBufferDirect(j, F, K, k, M, Ee), k.side = An) : y.renderBufferDirect(j, F, K, k, M, Ee), M.onAfterRender(y, F, j, K, k, Ee);
    }
    function Gn(M, F, j) {
      F.isScene !== !0 && (F = Me);
      const K = ue.get(M), k = f.state.lights, Ee = f.state.shadowsArray, we = k.state.version, Le = fe.getParameters(M, k.state, Ee, F, j), Ne = fe.getProgramCacheKey(Le);
      let We = K.programs;
      K.environment = M.isMeshStandardMaterial ? F.environment : null, K.fog = F.fog, K.envMap = (M.isMeshStandardMaterial ? I : v).get(M.envMap || K.environment), We === void 0 && (M.addEventListener("dispose", ve), We = /* @__PURE__ */ new Map(), K.programs = We);
      let ze = We.get(Ne);
      if (ze !== void 0) {
        if (K.currentProgram === ze && K.lightsStateVersion === we)
          return ir(M, Le), ze;
      } else
        Le.uniforms = fe.getUniforms(M), M.onBuild(j, Le, y), M.onBeforeCompile(Le, y), ze = fe.acquireProgram(Le, Ne), We.set(Ne, ze), K.uniforms = Le.uniforms;
      const ke = K.uniforms;
      return (!M.isShaderMaterial && !M.isRawShaderMaterial || M.clipping === !0) && (ke.clippingPlanes = De.uniform), ir(M, Le), K.needsLights = Gh(M), K.lightsStateVersion = we, K.needsLights && (ke.ambientLightColor.value = k.state.ambient, ke.lightProbe.value = k.state.probe, ke.directionalLights.value = k.state.directional, ke.directionalLightShadows.value = k.state.directionalShadow, ke.spotLights.value = k.state.spot, ke.spotLightShadows.value = k.state.spotShadow, ke.rectAreaLights.value = k.state.rectArea, ke.ltc_1.value = k.state.rectAreaLTC1, ke.ltc_2.value = k.state.rectAreaLTC2, ke.pointLights.value = k.state.point, ke.pointLightShadows.value = k.state.pointShadow, ke.hemisphereLights.value = k.state.hemi, ke.directionalShadowMap.value = k.state.directionalShadowMap, ke.directionalShadowMatrix.value = k.state.directionalShadowMatrix, ke.spotShadowMap.value = k.state.spotShadowMap, ke.spotLightMatrix.value = k.state.spotLightMatrix, ke.spotLightMap.value = k.state.spotLightMap, ke.pointShadowMap.value = k.state.pointShadowMap, ke.pointShadowMatrix.value = k.state.pointShadowMatrix), K.currentProgram = ze, K.uniformsList = null, ze;
    }
    function As(M) {
      if (M.uniformsList === null) {
        const F = M.currentProgram.getUniforms();
        M.uniformsList = Gr.seqWithValue(F.seq, M.uniforms);
      }
      return M.uniformsList;
    }
    function ir(M, F) {
      const j = ue.get(M);
      j.outputColorSpace = F.outputColorSpace, j.batching = F.batching, j.instancing = F.instancing, j.instancingColor = F.instancingColor, j.skinning = F.skinning, j.morphTargets = F.morphTargets, j.morphNormals = F.morphNormals, j.morphColors = F.morphColors, j.morphTargetsCount = F.morphTargetsCount, j.numClippingPlanes = F.numClippingPlanes, j.numIntersection = F.numClipIntersection, j.vertexAlphas = F.vertexAlphas, j.vertexTangents = F.vertexTangents, j.toneMapping = F.toneMapping;
    }
    function dt(M, F, j, K, k) {
      F.isScene !== !0 && (F = Me), x.resetTextureUnits();
      const Ee = F.fog, we = K.isMeshStandardMaterial ? F.environment : null, Le = w === null ? y.outputColorSpace : w.isXRRenderTarget === !0 ? w.texture.colorSpace : Lt, Ne = (K.isMeshStandardMaterial ? I : v).get(K.envMap || we), We = K.vertexColors === !0 && !!j.attributes.color && j.attributes.color.itemSize === 4, ze = !!j.attributes.tangent && (!!K.normalMap || K.anisotropy > 0), ke = !!j.morphAttributes.position, Et = !!j.morphAttributes.normal, Jt = !!j.morphAttributes.color;
      let wt = ni;
      K.toneMapped && (w === null || w.isXRRenderTarget === !0) && (wt = y.toneMapping);
      const Cn = j.morphAttributes.position || j.morphAttributes.normal || j.morphAttributes.color, ft = Cn !== void 0 ? Cn.length : 0, Xe = ue.get(K), mo = f.state.lights;
      if (Q === !0 && (ae === !0 || M !== S)) {
        const tn = M === S && K.id === G;
        De.setState(K, M, tn);
      }
      let vt = !1;
      K.version === Xe.__version ? (Xe.needsLights && Xe.lightsStateVersion !== mo.state.version || Xe.outputColorSpace !== Le || k.isBatchedMesh && Xe.batching === !1 || !k.isBatchedMesh && Xe.batching === !0 || k.isInstancedMesh && Xe.instancing === !1 || !k.isInstancedMesh && Xe.instancing === !0 || k.isSkinnedMesh && Xe.skinning === !1 || !k.isSkinnedMesh && Xe.skinning === !0 || k.isInstancedMesh && Xe.instancingColor === !0 && k.instanceColor === null || k.isInstancedMesh && Xe.instancingColor === !1 && k.instanceColor !== null || Xe.envMap !== Ne || K.fog === !0 && Xe.fog !== Ee || Xe.numClippingPlanes !== void 0 && (Xe.numClippingPlanes !== De.numPlanes || Xe.numIntersection !== De.numIntersection) || Xe.vertexAlphas !== We || Xe.vertexTangents !== ze || Xe.morphTargets !== ke || Xe.morphNormals !== Et || Xe.morphColors !== Jt || Xe.toneMapping !== wt || Ie.isWebGL2 === !0 && Xe.morphTargetsCount !== ft) && (vt = !0) : (vt = !0, Xe.__version = K.version);
      let ri = Xe.currentProgram;
      vt === !0 && (ri = Gn(K, F, k));
      let tl = !1, Ts = !1, go = !1;
      const Nt = ri.getUniforms(), oi = Xe.uniforms;
      if (Ae.useProgram(ri.program) && (tl = !0, Ts = !0, go = !0), K.id !== G && (G = K.id, Ts = !0), tl || S !== M) {
        Nt.setValue(B, "projectionMatrix", M.projectionMatrix), Nt.setValue(B, "viewMatrix", M.matrixWorldInverse);
        const tn = Nt.map.cameraPosition;
        tn !== void 0 && tn.setValue(B, xe.setFromMatrixPosition(M.matrixWorld)), Ie.logarithmicDepthBuffer && Nt.setValue(
          B,
          "logDepthBufFC",
          2 / (Math.log(M.far + 1) / Math.LN2)
        ), (K.isMeshPhongMaterial || K.isMeshToonMaterial || K.isMeshLambertMaterial || K.isMeshBasicMaterial || K.isMeshStandardMaterial || K.isShaderMaterial) && Nt.setValue(B, "isOrthographic", M.isOrthographicCamera === !0), S !== M && (S = M, Ts = !0, go = !0);
      }
      if (k.isSkinnedMesh) {
        Nt.setOptional(B, k, "bindMatrix"), Nt.setOptional(B, k, "bindMatrixInverse");
        const tn = k.skeleton;
        tn && (Ie.floatVertexTextures ? (tn.boneTexture === null && tn.computeBoneTexture(), Nt.setValue(B, "boneTexture", tn.boneTexture, x)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      k.isBatchedMesh && (Nt.setOptional(B, k, "batchingTexture"), Nt.setValue(B, "batchingTexture", k._matricesTexture, x));
      const _o = j.morphAttributes;
      if ((_o.position !== void 0 || _o.normal !== void 0 || _o.color !== void 0 && Ie.isWebGL2 === !0) && ie.update(k, j, ri), (Ts || Xe.receiveShadow !== k.receiveShadow) && (Xe.receiveShadow = k.receiveShadow, Nt.setValue(B, "receiveShadow", k.receiveShadow)), K.isMeshGouraudMaterial && K.envMap !== null && (oi.envMap.value = Ne, oi.flipEnvMap.value = Ne.isCubeTexture && Ne.isRenderTargetTexture === !1 ? -1 : 1), Ts && (Nt.setValue(B, "toneMappingExposure", y.toneMappingExposure), Xe.needsLights && Ut(oi, go), Ee && K.fog === !0 && ce.refreshFogUniforms(oi, Ee), ce.refreshMaterialUniforms(oi, K, X, U, he), Gr.upload(B, As(Xe), oi, x)), K.isShaderMaterial && K.uniformsNeedUpdate === !0 && (Gr.upload(B, As(Xe), oi, x), K.uniformsNeedUpdate = !1), K.isSpriteMaterial && Nt.setValue(B, "center", k.center), Nt.setValue(B, "modelViewMatrix", k.modelViewMatrix), Nt.setValue(B, "normalMatrix", k.normalMatrix), Nt.setValue(B, "modelMatrix", k.matrixWorld), K.isShaderMaterial || K.isRawShaderMaterial) {
        const tn = K.uniformsGroups;
        for (let vo = 0, Wh = tn.length; vo < Wh; vo++)
          if (Ie.isWebGL2) {
            const nl = tn[vo];
            Ze.update(nl, ri), Ze.bind(nl, ri);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return ri;
    }
    function Ut(M, F) {
      M.ambientLightColor.needsUpdate = F, M.lightProbe.needsUpdate = F, M.directionalLights.needsUpdate = F, M.directionalLightShadows.needsUpdate = F, M.pointLights.needsUpdate = F, M.pointLightShadows.needsUpdate = F, M.spotLights.needsUpdate = F, M.spotLightShadows.needsUpdate = F, M.rectAreaLights.needsUpdate = F, M.hemisphereLights.needsUpdate = F;
    }
    function Gh(M) {
      return M.isMeshLambertMaterial || M.isMeshToonMaterial || M.isMeshPhongMaterial || M.isMeshStandardMaterial || M.isShadowMaterial || M.isShaderMaterial && M.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return R;
    }, this.getActiveMipmapLevel = function() {
      return b;
    }, this.getRenderTarget = function() {
      return w;
    }, this.setRenderTargetTextures = function(M, F, j) {
      ue.get(M.texture).__webglTexture = F, ue.get(M.depthTexture).__webglTexture = j;
      const K = ue.get(M);
      K.__hasExternalTextures = !0, K.__hasExternalTextures && (K.__autoAllocateDepthBuffer = j === void 0, K.__autoAllocateDepthBuffer || be.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), K.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(M, F) {
      const j = ue.get(M);
      j.__webglFramebuffer = F, j.__useDefaultFramebuffer = F === void 0;
    }, this.setRenderTarget = function(M, F = 0, j = 0) {
      w = M, R = F, b = j;
      let K = !0, k = null, Ee = !1, we = !1;
      if (M) {
        const Ne = ue.get(M);
        Ne.__useDefaultFramebuffer !== void 0 ? (Ae.bindFramebuffer(B.FRAMEBUFFER, null), K = !1) : Ne.__webglFramebuffer === void 0 ? x.setupRenderTarget(M) : Ne.__hasExternalTextures && x.rebindTextures(M, ue.get(M.texture).__webglTexture, ue.get(M.depthTexture).__webglTexture);
        const We = M.texture;
        (We.isData3DTexture || We.isDataArrayTexture || We.isCompressedArrayTexture) && (we = !0);
        const ze = ue.get(M).__webglFramebuffer;
        M.isWebGLCubeRenderTarget ? (Array.isArray(ze[F]) ? k = ze[F][j] : k = ze[F], Ee = !0) : Ie.isWebGL2 && M.samples > 0 && x.useMultisampledRTT(M) === !1 ? k = ue.get(M).__webglMultisampledFramebuffer : Array.isArray(ze) ? k = ze[j] : k = ze, A.copy(M.viewport), V.copy(M.scissor), J = M.scissorTest;
      } else
        A.copy(Z).multiplyScalar(X).floor(), V.copy(z).multiplyScalar(X).floor(), J = W;
      if (Ae.bindFramebuffer(B.FRAMEBUFFER, k) && Ie.drawBuffers && K && Ae.drawBuffers(M, k), Ae.viewport(A), Ae.scissor(V), Ae.setScissorTest(J), Ee) {
        const Ne = ue.get(M.texture);
        B.framebufferTexture2D(B.FRAMEBUFFER, B.COLOR_ATTACHMENT0, B.TEXTURE_CUBE_MAP_POSITIVE_X + F, Ne.__webglTexture, j);
      } else if (we) {
        const Ne = ue.get(M.texture), We = F || 0;
        B.framebufferTextureLayer(B.FRAMEBUFFER, B.COLOR_ATTACHMENT0, Ne.__webglTexture, j || 0, We);
      }
      G = -1;
    }, this.readRenderTargetPixels = function(M, F, j, K, k, Ee, we) {
      if (!(M && M.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Le = ue.get(M).__webglFramebuffer;
      if (M.isWebGLCubeRenderTarget && we !== void 0 && (Le = Le[we]), Le) {
        Ae.bindFramebuffer(B.FRAMEBUFFER, Le);
        try {
          const Ne = M.texture, We = Ne.format, ze = Ne.type;
          if (We !== an && pe.convert(We) !== B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const ke = ze === js && (be.has("EXT_color_buffer_half_float") || Ie.isWebGL2 && be.has("EXT_color_buffer_float"));
          if (ze !== ii && pe.convert(ze) !== B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
          !(ze === Bn && (Ie.isWebGL2 || be.has("OES_texture_float") || be.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
          !ke) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          F >= 0 && F <= M.width - K && j >= 0 && j <= M.height - k && B.readPixels(F, j, K, k, pe.convert(We), pe.convert(ze), Ee);
        } finally {
          const Ne = w !== null ? ue.get(w).__webglFramebuffer : null;
          Ae.bindFramebuffer(B.FRAMEBUFFER, Ne);
        }
      }
    }, this.copyFramebufferToTexture = function(M, F, j = 0) {
      const K = Math.pow(2, -j), k = Math.floor(F.image.width * K), Ee = Math.floor(F.image.height * K);
      x.setTexture2D(F, 0), B.copyTexSubImage2D(B.TEXTURE_2D, j, 0, 0, M.x, M.y, k, Ee), Ae.unbindTexture();
    }, this.copyTextureToTexture = function(M, F, j, K = 0) {
      const k = F.image.width, Ee = F.image.height, we = pe.convert(j.format), Le = pe.convert(j.type);
      x.setTexture2D(j, 0), B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL, j.flipY), B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL, j.premultiplyAlpha), B.pixelStorei(B.UNPACK_ALIGNMENT, j.unpackAlignment), F.isDataTexture ? B.texSubImage2D(B.TEXTURE_2D, K, M.x, M.y, k, Ee, we, Le, F.image.data) : F.isCompressedTexture ? B.compressedTexSubImage2D(B.TEXTURE_2D, K, M.x, M.y, F.mipmaps[0].width, F.mipmaps[0].height, we, F.mipmaps[0].data) : B.texSubImage2D(B.TEXTURE_2D, K, M.x, M.y, we, Le, F.image), K === 0 && j.generateMipmaps && B.generateMipmap(B.TEXTURE_2D), Ae.unbindTexture();
    }, this.copyTextureToTexture3D = function(M, F, j, K, k = 0) {
      if (y.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const Ee = M.max.x - M.min.x + 1, we = M.max.y - M.min.y + 1, Le = M.max.z - M.min.z + 1, Ne = pe.convert(K.format), We = pe.convert(K.type);
      let ze;
      if (K.isData3DTexture)
        x.setTexture3D(K, 0), ze = B.TEXTURE_3D;
      else if (K.isDataArrayTexture || K.isCompressedArrayTexture)
        x.setTexture2DArray(K, 0), ze = B.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL, K.flipY), B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL, K.premultiplyAlpha), B.pixelStorei(B.UNPACK_ALIGNMENT, K.unpackAlignment);
      const ke = B.getParameter(B.UNPACK_ROW_LENGTH), Et = B.getParameter(B.UNPACK_IMAGE_HEIGHT), Jt = B.getParameter(B.UNPACK_SKIP_PIXELS), wt = B.getParameter(B.UNPACK_SKIP_ROWS), Cn = B.getParameter(B.UNPACK_SKIP_IMAGES), ft = j.isCompressedTexture ? j.mipmaps[k] : j.image;
      B.pixelStorei(B.UNPACK_ROW_LENGTH, ft.width), B.pixelStorei(B.UNPACK_IMAGE_HEIGHT, ft.height), B.pixelStorei(B.UNPACK_SKIP_PIXELS, M.min.x), B.pixelStorei(B.UNPACK_SKIP_ROWS, M.min.y), B.pixelStorei(B.UNPACK_SKIP_IMAGES, M.min.z), j.isDataTexture || j.isData3DTexture ? B.texSubImage3D(ze, k, F.x, F.y, F.z, Ee, we, Le, Ne, We, ft.data) : j.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), B.compressedTexSubImage3D(ze, k, F.x, F.y, F.z, Ee, we, Le, Ne, ft.data)) : B.texSubImage3D(ze, k, F.x, F.y, F.z, Ee, we, Le, Ne, We, ft), B.pixelStorei(B.UNPACK_ROW_LENGTH, ke), B.pixelStorei(B.UNPACK_IMAGE_HEIGHT, Et), B.pixelStorei(B.UNPACK_SKIP_PIXELS, Jt), B.pixelStorei(B.UNPACK_SKIP_ROWS, wt), B.pixelStorei(B.UNPACK_SKIP_IMAGES, Cn), k === 0 && K.generateMipmaps && B.generateMipmap(ze), Ae.unbindTexture();
    }, this.initTexture = function(M) {
      M.isCubeTexture ? x.setTextureCube(M, 0) : M.isData3DTexture ? x.setTexture3D(M, 0) : M.isDataArrayTexture || M.isCompressedArrayTexture ? x.setTexture2DArray(M, 0) : x.setTexture2D(M, 0), Ae.unbindTexture();
    }, this.resetState = function() {
      R = 0, b = 0, w = null, Ae.reset(), Ue.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Vn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === Wa ? "display-p3" : "srgb", t.unpackColorSpace = st.workingColorSpace === lo ? "display-p3" : "srgb";
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === mt ? Ti : ah;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === Ti ? mt : Lt;
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(e) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
  }
}
class ry extends Rh {
}
ry.prototype.isWebGL1Renderer = !0;
class oy extends gt {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t;
  }
}
class ay {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Ea, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.version = 0, this.uuid = gn();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, r = this.stride; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = gn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = gn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const zt = /* @__PURE__ */ new N();
class Ka {
  constructor(e, t, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      zt.fromBufferAttribute(this, t), zt.applyMatrix4(e), this.setXYZ(t, zt.x, zt.y, zt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      zt.fromBufferAttribute(this, t), zt.applyNormalMatrix(e), this.setXYZ(t, zt.x, zt.y, zt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      zt.fromBufferAttribute(this, t), zt.transformDirection(e), this.setXYZ(t, zt.x, zt.y, zt.z);
    return this;
  }
  setX(e, t) {
    return this.normalized && (t = at(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = at(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = at(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = at(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Tn(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Tn(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Tn(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Tn(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = at(t, this.array), n = at(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = at(t, this.array), n = at(n, this.array), i = at(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = at(t, this.array), n = at(n, this.array), i = at(i, this.array), r = at(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          t.push(this.data.array[i + r]);
      }
      return new Wt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Ka(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          t.push(this.data.array[i + r]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
const Hc = /* @__PURE__ */ new N(), Gc = /* @__PURE__ */ new ct(), Wc = /* @__PURE__ */ new ct(), ly = /* @__PURE__ */ new N(), jc = /* @__PURE__ */ new Ye(), wr = /* @__PURE__ */ new N(), Zo = /* @__PURE__ */ new wn(), Xc = /* @__PURE__ */ new Ye(), Qo = /* @__PURE__ */ new co();
class cy extends He {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = Cl, this.bindMatrix = new Ye(), this.bindMatrixInverse = new Ye(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new kn()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, wr), this.boundingBox.expandByPoint(wr);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new wn()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, wr), this.boundingSphere.expandByPoint(wr);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Zo.copy(this.boundingSphere), Zo.applyMatrix4(i), e.ray.intersectsSphere(Zo) !== !1 && (Xc.copy(i).invert(), Qo.copy(e.ray).applyMatrix4(Xc), !(this.boundingBox !== null && Qo.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, Qo)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new ct(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === Cl ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === mp ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    Gc.fromBufferAttribute(i.attributes.skinIndex, e), Wc.fromBufferAttribute(i.attributes.skinWeight, e), Hc.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const o = Wc.getComponent(r);
      if (o !== 0) {
        const a = Gc.getComponent(r);
        jc.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(ly.copy(Hc).applyMatrix4(jc), o);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
  boneTransform(e, t) {
    return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."), this.applyBoneTransform(e, t);
  }
}
class Ch extends gt {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class uy extends Dt {
  constructor(e = null, t = 1, n = 1, i, r, o, a, l, c = Ct, u = Ct, h, d) {
    super(null, o, a, l, c, u, i, r, h, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const qc = /* @__PURE__ */ new Ye(), hy = /* @__PURE__ */ new Ye();
class $a {
  constructor(e = [], t = []) {
    this.uuid = gn(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Ye());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Ye();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let r = 0, o = e.length; r < o; r++) {
      const a = e[r] ? e[r].matrixWorld : hy;
      qc.multiplyMatrices(a, t[r]), qc.toArray(n, r * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new $a(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new uy(t, e, e, an, Bn);
    return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e)
        return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const r = e.bones[n];
      let o = t[r];
      o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), o = new Ch()), this.bones.push(o), this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, r = t.length; i < r; i++) {
      const o = t[i];
      e.bones.push(o.uuid);
      const a = n[i];
      e.boneInverses.push(a.toArray());
    }
    return e;
  }
}
class Ta extends Wt {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
const Ki = /* @__PURE__ */ new Ye(), Yc = /* @__PURE__ */ new Ye(), Rr = [], Kc = /* @__PURE__ */ new kn(), dy = /* @__PURE__ */ new Ye(), Ps = /* @__PURE__ */ new He(), Is = /* @__PURE__ */ new wn();
class fy extends He {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new Ta(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, dy);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new kn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Ki), Kc.copy(e.boundingBox).applyMatrix4(Ki), this.boundingBox.union(Kc);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new wn()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Ki), Is.copy(e.boundingSphere).applyMatrix4(Ki), this.boundingSphere.union(Is);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (Ps.geometry = this.geometry, Ps.material = this.material, Ps.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Is.copy(this.boundingSphere), Is.applyMatrix4(n), e.ray.intersectsSphere(Is) !== !1))
      for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, Ki), Yc.multiplyMatrices(n, Ki), Ps.matrixWorld = Yc, Ps.raycast(e, Rr);
        for (let o = 0, a = Rr.length; o < a; o++) {
          const l = Rr[o];
          l.instanceId = r, l.object = this, t.push(l);
        }
        Rr.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new Ta(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Lh extends bn {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Oe(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const $c = /* @__PURE__ */ new N(), Jc = /* @__PURE__ */ new N(), Zc = /* @__PURE__ */ new Ye(), ea = /* @__PURE__ */ new co(), Cr = /* @__PURE__ */ new wn();
class Ja extends gt {
  constructor(e = new yn(), t = new Lh()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, r = t.count; i < r; i++)
        $c.fromBufferAttribute(t, i - 1), Jc.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += $c.distanceTo(Jc);
      e.setAttribute("lineDistance", new cn(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Cr.copy(n.boundingSphere), Cr.applyMatrix4(i), Cr.radius += r, e.ray.intersectsSphere(Cr) === !1) return;
    Zc.copy(i).invert(), ea.copy(e.ray).applyMatrix4(Zc);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = new N(), u = new N(), h = new N(), d = new N(), m = this.isLineSegments ? 2 : 1, g = n.index, f = n.attributes.position;
    if (g !== null) {
      const p = Math.max(0, o.start), E = Math.min(g.count, o.start + o.count);
      for (let y = p, T = E - 1; y < T; y += m) {
        const R = g.getX(y), b = g.getX(y + 1);
        if (c.fromBufferAttribute(f, R), u.fromBufferAttribute(f, b), ea.distanceSqToSegment(c, u, d, h) > l) continue;
        d.applyMatrix4(this.matrixWorld);
        const G = e.ray.origin.distanceTo(d);
        G < e.near || G > e.far || t.push({
          distance: G,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: h.clone().applyMatrix4(this.matrixWorld),
          index: y,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const p = Math.max(0, o.start), E = Math.min(f.count, o.start + o.count);
      for (let y = p, T = E - 1; y < T; y += m) {
        if (c.fromBufferAttribute(f, y), u.fromBufferAttribute(f, y + 1), ea.distanceSqToSegment(c, u, d, h) > l) continue;
        d.applyMatrix4(this.matrixWorld);
        const b = e.ray.origin.distanceTo(d);
        b < e.near || b > e.far || t.push({
          distance: b,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: h.clone().applyMatrix4(this.matrixWorld),
          index: y,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = i.length; r < o; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
const Qc = /* @__PURE__ */ new N(), eu = /* @__PURE__ */ new N();
class py extends Ja {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, r = t.count; i < r; i += 2)
        Qc.fromBufferAttribute(t, i), eu.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Qc.distanceTo(eu);
      e.setAttribute("lineDistance", new cn(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class my extends Ja {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class Ph extends bn {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Oe(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const tu = /* @__PURE__ */ new Ye(), ba = /* @__PURE__ */ new co(), Lr = /* @__PURE__ */ new wn(), Pr = /* @__PURE__ */ new N();
class gy extends gt {
  constructor(e = new yn(), t = new Ph()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Points.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Lr.copy(n.boundingSphere), Lr.applyMatrix4(i), Lr.radius += r, e.ray.intersectsSphere(Lr) === !1) return;
    tu.copy(i).invert(), ba.copy(e.ray).applyMatrix4(tu);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = n.index, h = n.attributes.position;
    if (c !== null) {
      const d = Math.max(0, o.start), m = Math.min(c.count, o.start + o.count);
      for (let g = d, _ = m; g < _; g++) {
        const f = c.getX(g);
        Pr.fromBufferAttribute(h, f), nu(Pr, f, l, i, e, t, this);
      }
    } else {
      const d = Math.max(0, o.start), m = Math.min(h.count, o.start + o.count);
      for (let g = d, _ = m; g < _; g++)
        Pr.fromBufferAttribute(h, g), nu(Pr, g, l, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = i.length; r < o; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
function nu(s, e, t, n, i, r, o) {
  const a = ba.distanceSqToPoint(s);
  if (a < t) {
    const l = new N();
    ba.closestPointToPoint(s, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    r.push({
      distance: c,
      distanceToRay: Math.sqrt(a),
      point: l,
      index: e,
      face: null,
      object: o
    });
  }
}
class to extends yn {
  constructor(e = 1, t = 1, n = 1, i = 32, r = 1, o = !1, a = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: e,
      radiusBottom: t,
      height: n,
      radialSegments: i,
      heightSegments: r,
      openEnded: o,
      thetaStart: a,
      thetaLength: l
    };
    const c = this;
    i = Math.floor(i), r = Math.floor(r);
    const u = [], h = [], d = [], m = [];
    let g = 0;
    const _ = [], f = n / 2;
    let p = 0;
    E(), o === !1 && (e > 0 && y(!0), t > 0 && y(!1)), this.setIndex(u), this.setAttribute("position", new cn(h, 3)), this.setAttribute("normal", new cn(d, 3)), this.setAttribute("uv", new cn(m, 2));
    function E() {
      const T = new N(), R = new N();
      let b = 0;
      const w = (t - e) / n;
      for (let G = 0; G <= r; G++) {
        const S = [], A = G / r, V = A * (t - e) + e;
        for (let J = 0; J <= i; J++) {
          const se = J / i, C = se * l + a, P = Math.sin(C), U = Math.cos(C);
          R.x = V * P, R.y = -A * n + f, R.z = V * U, h.push(R.x, R.y, R.z), T.set(P, w, U).normalize(), d.push(T.x, T.y, T.z), m.push(se, 1 - A), S.push(g++);
        }
        _.push(S);
      }
      for (let G = 0; G < i; G++)
        for (let S = 0; S < r; S++) {
          const A = _[S][G], V = _[S + 1][G], J = _[S + 1][G + 1], se = _[S][G + 1];
          u.push(A, V, se), u.push(V, J, se), b += 6;
        }
      c.addGroup(p, b, 0), p += b;
    }
    function y(T) {
      const R = g, b = new Je(), w = new N();
      let G = 0;
      const S = T === !0 ? e : t, A = T === !0 ? 1 : -1;
      for (let J = 1; J <= i; J++)
        h.push(0, f * A, 0), d.push(0, A, 0), m.push(0.5, 0.5), g++;
      const V = g;
      for (let J = 0; J <= i; J++) {
        const C = J / i * l + a, P = Math.cos(C), U = Math.sin(C);
        w.x = S * U, w.y = f * A, w.z = S * P, h.push(w.x, w.y, w.z), d.push(0, A, 0), b.x = P * 0.5 + 0.5, b.y = U * 0.5 * A + 0.5, m.push(b.x, b.y), g++;
      }
      for (let J = 0; J < i; J++) {
        const se = R + J, C = V + J;
        T === !0 ? u.push(C, C + 1, se) : u.push(C + 1, C, se), G += 3;
      }
      c.addGroup(p, G, T === !0 ? 1 : 2), p += G;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new to(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Ht extends bn {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Oe(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Oe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = lh, this.normalScale = new Je(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Hn extends Ht {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Je(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return Bt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Oe(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Oe(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Oe(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
function Ir(s, e, t) {
  return !s || // let 'undefined' and 'null' pass
  !t && s.constructor === e ? s : typeof e.BYTES_PER_ELEMENT == "number" ? new e(s) : Array.prototype.slice.call(s);
}
function _y(s) {
  return ArrayBuffer.isView(s) && !(s instanceof DataView);
}
function vy(s) {
  function e(i, r) {
    return s[i] - s[r];
  }
  const t = s.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function iu(s, e, t) {
  const n = s.length, i = new s.constructor(n);
  for (let r = 0, o = 0; o !== n; ++r) {
    const a = t[r] * e;
    for (let l = 0; l !== e; ++l)
      i[o++] = s[a + l];
  }
  return i;
}
function Ih(s, e, t, n) {
  let i = 1, r = s[0];
  for (; r !== void 0 && r[n] === void 0; )
    r = s[i++];
  if (r === void 0) return;
  let o = r[n];
  if (o !== void 0)
    if (Array.isArray(o))
      do
        o = r[n], o !== void 0 && (e.push(r.time), t.push.apply(t, o)), r = s[i++];
      while (r !== void 0);
    else if (o.toArray !== void 0)
      do
        o = r[n], o !== void 0 && (e.push(r.time), o.toArray(t, t.length)), r = s[i++];
      while (r !== void 0);
    else
      do
        o = r[n], o !== void 0 && (e.push(r.time), t.push(o)), r = s[i++];
      while (r !== void 0);
}
class tr {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], r = t[n - 1];
    e: {
      t: {
        let o;
        n: {
          i: if (!(e < i)) {
            for (let a = n + 2; ; ) {
              if (i === void 0) {
                if (e < r) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === a) break;
              if (r = i, i = t[++n], e < i)
                break t;
            }
            o = t.length;
            break n;
          }
          if (!(e >= r)) {
            const a = t[1];
            e < a && (n = 2, r = a);
            for (let l = n - 2; ; ) {
              if (r === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === l) break;
              if (i = r, r = t[--n - 1], e >= r)
                break t;
            }
            o = n, n = 0;
            break n;
          }
          break e;
        }
        for (; n < o; ) {
          const a = n + o >>> 1;
          e < t[a] ? o = a : n = a + 1;
        }
        if (i = t[n], r = t[n - 1], r === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i;
    for (let o = 0; o !== i; ++o)
      t[o] = n[r + o];
    return t;
  }
  // Template methods for derived classes:
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class yy extends tr {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: Qi,
      endingEnd: Qi
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2, o = e + 1, a = i[r], l = i[o];
    if (a === void 0)
      switch (this.getSettings_().endingStart) {
        case es:
          r = e, a = 2 * t - n;
          break;
        case Kr:
          r = i.length - 2, a = t + i[r] - i[r + 1];
          break;
        default:
          r = e, a = n;
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case es:
          o = e, l = 2 * n - t;
          break;
        case Kr:
          o = 1, l = n + i[1] - i[0];
          break;
        default:
          o = e - 1, l = t;
      }
    const c = (n - t) * 0.5, u = this.valueSize;
    this._weightPrev = c / (t - a), this._weightNext = c / (l - n), this._offsetPrev = r * u, this._offsetNext = o * u;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, u = this._offsetPrev, h = this._offsetNext, d = this._weightPrev, m = this._weightNext, g = (n - t) / (i - t), _ = g * g, f = _ * g, p = -d * f + 2 * d * _ - d * g, E = (1 + d) * f + (-1.5 - 2 * d) * _ + (-0.5 + d) * g + 1, y = (-1 - m) * f + (1.5 + m) * _ + 0.5 * g, T = m * f - m * _;
    for (let R = 0; R !== a; ++R)
      r[R] = p * o[u + R] + E * o[c + R] + y * o[l + R] + T * o[h + R];
    return r;
  }
}
class Dh extends tr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, u = (n - t) / (i - t), h = 1 - u;
    for (let d = 0; d !== a; ++d)
      r[d] = o[c + d] * h + o[l + d] * u;
    return r;
  }
}
class xy extends tr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Rn {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = Ir(t, this.TimeBufferType), this.values = Ir(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: Ir(e.times, Array),
        values: Ir(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new xy(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Dh(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new yy(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Xs:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case hs:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Ro:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return Xs;
      case this.InterpolantFactoryMethodLinear:
        return hs;
      case this.InterpolantFactoryMethodSmooth:
        return Ro;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  // move all keyframes either forwards or backwards in time
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] += e;
    }
    return this;
  }
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] *= e;
    }
    return this;
  }
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim(e, t) {
    const n = this.times, i = n.length;
    let r = 0, o = i - 1;
    for (; r !== i && n[r] < e; )
      ++r;
    for (; o !== -1 && n[o] > t; )
      --o;
    if (++o, r !== 0 || o !== i) {
      r >= o && (o = Math.max(o, 1), r = o - 1);
      const a = this.getValueSize();
      this.times = n.slice(r, o), this.values = this.values.slice(r * a, o * a);
    }
    return this;
  }
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, r = n.length;
    r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let o = null;
    for (let a = 0; a !== r; a++) {
      const l = n[a];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, l), e = !1;
        break;
      }
      if (o !== null && o > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, a, l, o), e = !1;
        break;
      }
      o = l;
    }
    if (i !== void 0 && _y(i))
      for (let a = 0, l = i.length; a !== l; ++a) {
        const c = i[a];
        if (isNaN(c)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, c), e = !1;
          break;
        }
      }
    return e;
  }
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Ro, r = e.length - 1;
    let o = 1;
    for (let a = 1; a < r; ++a) {
      let l = !1;
      const c = e[a], u = e[a + 1];
      if (c !== u && (a !== 1 || c !== e[0]))
        if (i)
          l = !0;
        else {
          const h = a * n, d = h - n, m = h + n;
          for (let g = 0; g !== n; ++g) {
            const _ = t[h + g];
            if (_ !== t[d + g] || _ !== t[m + g]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (a !== o) {
          e[o] = e[a];
          const h = a * n, d = o * n;
          for (let m = 0; m !== n; ++m)
            t[d + m] = t[h + m];
        }
        ++o;
      }
    }
    if (r > 0) {
      e[o] = e[r];
      for (let a = r * n, l = o * n, c = 0; c !== n; ++c)
        t[l + c] = t[a + c];
      ++o;
    }
    return o !== e.length ? (this.times = e.slice(0, o), this.values = t.slice(0, o * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
Rn.prototype.TimeBufferType = Float32Array;
Rn.prototype.ValueBufferType = Float32Array;
Rn.prototype.DefaultInterpolation = hs;
class ys extends Rn {
}
ys.prototype.ValueTypeName = "bool";
ys.prototype.ValueBufferType = Array;
ys.prototype.DefaultInterpolation = Xs;
ys.prototype.InterpolantFactoryMethodLinear = void 0;
ys.prototype.InterpolantFactoryMethodSmooth = void 0;
class Uh extends Rn {
}
Uh.prototype.ValueTypeName = "color";
class ps extends Rn {
}
ps.prototype.ValueTypeName = "number";
class Ey extends tr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = (n - t) / (i - t);
    let c = e * a;
    for (let u = c + a; c !== u; c += 4)
      _n.slerpFlat(r, 0, o, c - a, o, c, l);
    return r;
  }
}
class Li extends Rn {
  InterpolantFactoryMethodLinear(e) {
    return new Ey(this.times, this.values, this.getValueSize(), e);
  }
}
Li.prototype.ValueTypeName = "quaternion";
Li.prototype.DefaultInterpolation = hs;
Li.prototype.InterpolantFactoryMethodSmooth = void 0;
class xs extends Rn {
}
xs.prototype.ValueTypeName = "string";
xs.prototype.ValueBufferType = Array;
xs.prototype.DefaultInterpolation = Xs;
xs.prototype.InterpolantFactoryMethodLinear = void 0;
xs.prototype.InterpolantFactoryMethodSmooth = void 0;
class ms extends Rn {
}
ms.prototype.ValueTypeName = "vector";
class wa {
  constructor(e, t = -1, n, i = Ga) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = gn(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let o = 0, a = n.length; o !== a; ++o)
      t.push(My(n[o]).scale(i));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return r.uuid = e.uuid, r;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let r = 0, o = n.length; r !== o; ++r)
      t.push(Rn.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const r = t.length, o = [];
    for (let a = 0; a < r; a++) {
      let l = [], c = [];
      l.push(
        (a + r - 1) % r,
        a,
        (a + 1) % r
      ), c.push(0, 1, 0);
      const u = vy(l);
      l = iu(l, 1, u), c = iu(c, 1, u), !i && l[0] === 0 && (l.push(r), c.push(c[0])), o.push(
        new ps(
          ".morphTargetInfluences[" + t[a].name + "]",
          l,
          c
        ).scale(1 / n)
      );
    }
    return new this(e, -1, o);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === t)
        return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, r = /^([\w-]*?)([\d]+)$/;
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], u = c.name.match(r);
      if (u && u.length > 1) {
        const h = u[1];
        let d = i[h];
        d || (i[h] = d = []), d.push(c);
      }
    }
    const o = [];
    for (const a in i)
      o.push(this.CreateFromMorphTargetSequence(a, i[a], t, n));
    return o;
  }
  // parse the animation.hierarchy format
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(h, d, m, g, _) {
      if (m.length !== 0) {
        const f = [], p = [];
        Ih(m, f, p, g), f.length !== 0 && _.push(new h(d, f, p));
      }
    }, i = [], r = e.name || "default", o = e.fps || 30, a = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let h = 0; h < c.length; h++) {
      const d = c[h].keys;
      if (!(!d || d.length === 0))
        if (d[0].morphTargets) {
          const m = {};
          let g;
          for (g = 0; g < d.length; g++)
            if (d[g].morphTargets)
              for (let _ = 0; _ < d[g].morphTargets.length; _++)
                m[d[g].morphTargets[_]] = -1;
          for (const _ in m) {
            const f = [], p = [];
            for (let E = 0; E !== d[g].morphTargets.length; ++E) {
              const y = d[g];
              f.push(y.time), p.push(y.morphTarget === _ ? 1 : 0);
            }
            i.push(new ps(".morphTargetInfluence[" + _ + "]", f, p));
          }
          l = m.length * o;
        } else {
          const m = ".bones[" + t[h].name + "]";
          n(
            ms,
            m + ".position",
            d,
            "pos",
            i
          ), n(
            Li,
            m + ".quaternion",
            d,
            "rot",
            i
          ), n(
            ms,
            m + ".scale",
            d,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(r, l, i, a);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const r = this.tracks[n];
      t = Math.max(t, r.times[r.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function Sy(s) {
  switch (s.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return ps;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return ms;
    case "color":
      return Uh;
    case "quaternion":
      return Li;
    case "bool":
    case "boolean":
      return ys;
    case "string":
      return xs;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s);
}
function My(s) {
  if (s.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Sy(s.type);
  if (s.times === void 0) {
    const t = [], n = [];
    Ih(s.keys, t, n, "value"), s.times = t, s.values = n;
  }
  return e.parse !== void 0 ? e.parse(s) : new e(s.name, s.times, s.values, s.interpolation);
}
const ei = {
  enabled: !1,
  files: {},
  add: function(s, e) {
    this.enabled !== !1 && (this.files[s] = e);
  },
  get: function(s) {
    if (this.enabled !== !1)
      return this.files[s];
  },
  remove: function(s) {
    delete this.files[s];
  },
  clear: function() {
    this.files = {};
  }
};
class Ay {
  constructor(e, t, n) {
    const i = this;
    let r = !1, o = 0, a = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(u) {
      a++, r === !1 && i.onStart !== void 0 && i.onStart(u, o, a), r = !0;
    }, this.itemEnd = function(u) {
      o++, i.onProgress !== void 0 && i.onProgress(u, o, a), o === a && (r = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(u) {
      i.onError !== void 0 && i.onError(u);
    }, this.resolveURL = function(u) {
      return l ? l(u) : u;
    }, this.setURLModifier = function(u) {
      return l = u, this;
    }, this.addHandler = function(u, h) {
      return c.push(u, h), this;
    }, this.removeHandler = function(u) {
      const h = c.indexOf(u);
      return h !== -1 && c.splice(h, 2), this;
    }, this.getHandler = function(u) {
      for (let h = 0, d = c.length; h < d; h += 2) {
        const m = c[h], g = c[h + 1];
        if (m.global && (m.lastIndex = 0), m.test(u))
          return g;
      }
      return null;
    };
  }
}
const Ty = /* @__PURE__ */ new Ay();
class Es {
  constructor(e) {
    this.manager = e !== void 0 ? e : Ty, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
Es.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Nn = {};
class by extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class Nh extends Es {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = ei.get(e);
    if (r !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(r), this.manager.itemEnd(e);
      }, 0), r;
    if (Nn[e] !== void 0) {
      Nn[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    Nn[e] = [], Nn[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const o = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
      // An abort controller could be added within a future PR
    }), a = this.mimeType, l = this.responseType;
    fetch(o).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0)
          return c;
        const u = Nn[e], h = c.body.getReader(), d = c.headers.get("Content-Length") || c.headers.get("X-File-Size"), m = d ? parseInt(d) : 0, g = m !== 0;
        let _ = 0;
        const f = new ReadableStream({
          start(p) {
            E();
            function E() {
              h.read().then(({ done: y, value: T }) => {
                if (y)
                  p.close();
                else {
                  _ += T.byteLength;
                  const R = new ProgressEvent("progress", { lengthComputable: g, loaded: _, total: m });
                  for (let b = 0, w = u.length; b < w; b++) {
                    const G = u[b];
                    G.onProgress && G.onProgress(R);
                  }
                  p.enqueue(T), E();
                }
              });
            }
          }
        });
        return new Response(f);
      } else
        throw new by(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((u) => new DOMParser().parseFromString(u, a));
        case "json":
          return c.json();
        default:
          if (a === void 0)
            return c.text();
          {
            const h = /charset="?([^;"\s]*)"?/i.exec(a), d = h && h[1] ? h[1].toLowerCase() : void 0, m = new TextDecoder(d);
            return c.arrayBuffer().then((g) => m.decode(g));
          }
      }
    }).then((c) => {
      ei.add(e, c);
      const u = Nn[e];
      delete Nn[e];
      for (let h = 0, d = u.length; h < d; h++) {
        const m = u[h];
        m.onLoad && m.onLoad(c);
      }
    }).catch((c) => {
      const u = Nn[e];
      if (u === void 0)
        throw this.manager.itemError(e), c;
      delete Nn[e];
      for (let h = 0, d = u.length; h < d; h++) {
        const m = u[h];
        m.onError && m.onError(c);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class wy extends Es {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, o = ei.get(e);
    if (o !== void 0)
      return r.manager.itemStart(e), setTimeout(function() {
        t && t(o), r.manager.itemEnd(e);
      }, 0), o;
    const a = qs("img");
    function l() {
      u(), ei.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function c(h) {
      u(), i && i(h), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function u() {
      a.removeEventListener("load", l, !1), a.removeEventListener("error", c, !1);
    }
    return a.addEventListener("load", l, !1), a.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(e), a.src = e, a;
  }
}
class Ry extends Es {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new Dt(), o = new wy(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
      r.image = a, r.needsUpdate = !0, t !== void 0 && t(r);
    }, n, i), r;
  }
}
class fo extends gt {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Oe(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
const ta = /* @__PURE__ */ new Ye(), su = /* @__PURE__ */ new N(), ru = /* @__PURE__ */ new N();
class Za {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Je(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ye(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Xa(), this._frameExtents = new Je(1, 1), this._viewportCount = 1, this._viewports = [
      new ct(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    su.setFromMatrixPosition(e.matrixWorld), t.position.copy(su), ru.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(ru), t.updateMatrixWorld(), ta.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ta), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(ta);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class Cy extends Za {
  constructor() {
    super(new Gt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = ds * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class Oh extends fo {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, o = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(gt.DEFAULT_UP), this.updateMatrix(), this.target = new gt(), this.distance = n, this.angle = i, this.penumbra = r, this.decay = o, this.map = null, this.shadow = new Cy();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const ou = /* @__PURE__ */ new Ye(), Ds = /* @__PURE__ */ new N(), na = /* @__PURE__ */ new N();
class Ly extends Za {
  constructor() {
    super(new Gt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Je(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new ct(2, 1, 1, 1),
      // negative X
      new ct(0, 1, 1, 1),
      // positive Z
      new ct(3, 1, 1, 1),
      // negative Z
      new ct(1, 1, 1, 1),
      // positive Y
      new ct(3, 0, 1, 1),
      // negative Y
      new ct(1, 0, 1, 1)
    ], this._cubeDirections = [
      new N(1, 0, 0),
      new N(-1, 0, 0),
      new N(0, 0, 1),
      new N(0, 0, -1),
      new N(0, 1, 0),
      new N(0, -1, 0)
    ], this._cubeUps = [
      new N(0, 1, 0),
      new N(0, 1, 0),
      new N(0, 1, 0),
      new N(0, 1, 0),
      new N(0, 0, 1),
      new N(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, r = e.distance || n.far;
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), Ds.setFromMatrixPosition(e.matrixWorld), n.position.copy(Ds), na.copy(n.position), na.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(na), n.updateMatrixWorld(), i.makeTranslation(-Ds.x, -Ds.y, -Ds.z), ou.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ou);
  }
}
class Bs extends fo {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Ly();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class Py extends Za {
  constructor() {
    super(new qa(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class Ra extends fo {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(gt.DEFAULT_UP), this.updateMatrix(), this.target = new gt(), this.shadow = new Py();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Iy extends fo {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class Hs {
  static decodeText(e) {
    if (typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class Dy extends Es {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, o = ei.get(e);
    if (o !== void 0) {
      if (r.manager.itemStart(e), o.then) {
        o.then((c) => {
          t && t(c), r.manager.itemEnd(e);
        }).catch((c) => {
          i && i(c);
        });
        return;
      }
      return setTimeout(function() {
        t && t(o), r.manager.itemEnd(e);
      }, 0), o;
    }
    const a = {};
    a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader;
    const l = fetch(e, a).then(function(c) {
      return c.blob();
    }).then(function(c) {
      return createImageBitmap(c, Object.assign(r.options, { colorSpaceConversion: "none" }));
    }).then(function(c) {
      return ei.add(e, c), t && t(c), r.manager.itemEnd(e), c;
    }).catch(function(c) {
      i && i(c), ei.remove(e), r.manager.itemError(e), r.manager.itemEnd(e);
    });
    ei.add(e, l), r.manager.itemStart(e);
  }
}
class Uy {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = au(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const t = au();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function au() {
  return (typeof performance > "u" ? Date : performance).now();
}
class Ny {
  constructor(e, t, n) {
    this.binding = e, this.valueSize = n;
    let i, r, o;
    switch (t) {
      case "quaternion":
        i = this._slerp, r = this._slerpAdditive, o = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
        break;
      case "string":
      case "bool":
        i = this._select, r = this._select, o = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
        break;
      default:
        i = this._lerp, r = this._lerpAdditive, o = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5);
    }
    this._mixBufferRegion = i, this._mixBufferRegionAdditive = r, this._setIdentity = o, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
  }
  // accumulate data in the 'incoming' region into 'accu<i>'
  accumulate(e, t) {
    const n = this.buffer, i = this.valueSize, r = e * i + i;
    let o = this.cumulativeWeight;
    if (o === 0) {
      for (let a = 0; a !== i; ++a)
        n[r + a] = n[a];
      o = t;
    } else {
      o += t;
      const a = t / o;
      this._mixBufferRegion(n, r, 0, a, i);
    }
    this.cumulativeWeight = o;
  }
  // accumulate data in the 'incoming' region into 'add'
  accumulateAdditive(e) {
    const t = this.buffer, n = this.valueSize, i = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, i, 0, e, n), this.cumulativeWeightAdditive += e;
  }
  // apply the state of 'accu<i>' to the binding when accus differ
  apply(e) {
    const t = this.valueSize, n = this.buffer, i = e * t + t, r = this.cumulativeWeight, o = this.cumulativeWeightAdditive, a = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
      const l = t * this._origIndex;
      this._mixBufferRegion(
        n,
        i,
        l,
        1 - r,
        t
      );
    }
    o > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
    for (let l = t, c = t + t; l !== c; ++l)
      if (n[l] !== n[l + t]) {
        a.setValue(n, i);
        break;
      }
  }
  // remember the state of the bound property and copy it to both accus
  saveOriginalState() {
    const e = this.binding, t = this.buffer, n = this.valueSize, i = n * this._origIndex;
    e.getValue(t, i);
    for (let r = n, o = i; r !== o; ++r)
      t[r] = t[i + r % n];
    this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
  }
  // apply the state previously taken via 'saveOriginalState' to the binding
  restoreOriginalState() {
    const e = this.valueSize * 3;
    this.binding.setValue(this.buffer, e);
  }
  _setAdditiveIdentityNumeric() {
    const e = this._addIndex * this.valueSize, t = e + this.valueSize;
    for (let n = e; n < t; n++)
      this.buffer[n] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
  }
  _setAdditiveIdentityOther() {
    const e = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize;
    for (let n = 0; n < this.valueSize; n++)
      this.buffer[t + n] = this.buffer[e + n];
  }
  // mix functions
  _select(e, t, n, i, r) {
    if (i >= 0.5)
      for (let o = 0; o !== r; ++o)
        e[t + o] = e[n + o];
  }
  _slerp(e, t, n, i) {
    _n.slerpFlat(e, t, e, t, e, n, i);
  }
  _slerpAdditive(e, t, n, i, r) {
    const o = this._workIndex * r;
    _n.multiplyQuaternionsFlat(e, o, e, t, e, n), _n.slerpFlat(e, t, e, t, e, o, i);
  }
  _lerp(e, t, n, i, r) {
    const o = 1 - i;
    for (let a = 0; a !== r; ++a) {
      const l = t + a;
      e[l] = e[l] * o + e[n + a] * i;
    }
  }
  _lerpAdditive(e, t, n, i, r) {
    for (let o = 0; o !== r; ++o) {
      const a = t + o;
      e[a] = e[a] + e[n + o] * i;
    }
  }
}
const Qa = "\\[\\]\\.:\\/", Oy = new RegExp("[" + Qa + "]", "g"), el = "[^" + Qa + "]", Fy = "[^" + Qa.replace("\\.", "") + "]", By = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", el), Vy = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", Fy), zy = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", el), ky = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", el), Hy = new RegExp(
  "^" + By + Vy + zy + ky + "$"
), Gy = ["material", "materials", "bones", "map"];
class Wy {
  constructor(e, t, n) {
    const i = n || it.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class it {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || it.parseTrackName(t), this.node = it.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new it.Composite(e, t, n) : new it(e, t, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(Oy, "");
  }
  static parseTrackName(e) {
    const t = Hy.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      // required
      propertyIndex: t[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const r = n.nodeName.substring(i + 1);
      Gy.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      const n = function(r) {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          if (a.name === t || a.uuid === t)
            return a;
          const l = n(a.children);
          if (l) return l;
        }
        return null;
      }, i = n(e.children);
      if (i)
        return i;
    }
    return null;
  }
  // these are used to "bind" a nonexistent property
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  // Getters
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  // Direct
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // EntireArray
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // ArrayElement
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // HasToFromArray
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  // create getter / setter pair for a property in the scene graph
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let r = t.propertyIndex;
    if (e || (e = it.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let c = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let u = 0; u < e.length; u++)
            if (e[u].name === c) {
              c = u;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[c];
      }
    }
    const o = e[i];
    if (o === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e);
      return;
    }
    let a = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? a = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (a = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (r !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[r] !== void 0 && (r = e.morphTargetDictionary[r]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = r;
    } else o.fromArray !== void 0 && o.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (l = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][a];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
it.Composite = Wy;
it.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
it.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
it.prototype.GetterByBindingType = [
  it.prototype._getValue_direct,
  it.prototype._getValue_array,
  it.prototype._getValue_arrayElement,
  it.prototype._getValue_toArray
];
it.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    it.prototype._setValue_direct,
    it.prototype._setValue_direct_setNeedsUpdate,
    it.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    it.prototype._setValue_array,
    it.prototype._setValue_array_setNeedsUpdate,
    it.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    it.prototype._setValue_arrayElement,
    it.prototype._setValue_arrayElement_setNeedsUpdate,
    it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    it.prototype._setValue_fromArray,
    it.prototype._setValue_fromArray_setNeedsUpdate,
    it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class jy {
  constructor(e, t, n = null, i = t.blendMode) {
    this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = i;
    const r = t.tracks, o = r.length, a = new Array(o), l = {
      endingStart: Qi,
      endingEnd: Qi
    };
    for (let c = 0; c !== o; ++c) {
      const u = r[c].createInterpolant(null);
      a[c] = u, u.settings = l;
    }
    this._interpolantSettings = l, this._interpolants = a, this._propertyBindings = new Array(o), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Tp, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
  }
  // State & Scheduling
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
  }
  isRunning() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  }
  // return true when play has been called
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(e) {
    return this._startTime = e, this;
  }
  setLoop(e, t) {
    return this.loop = e, this.repetitions = t, this;
  }
  // Weight
  // set the weight stopping any scheduled fading
  // although .enabled = false yields an effective weight of zero, this
  // method does *not* change .enabled, because it would be confusing
  setEffectiveWeight(e) {
    return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading();
  }
  // return the weight considering fading and .enabled
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(e) {
    return this._scheduleFading(e, 0, 1);
  }
  fadeOut(e) {
    return this._scheduleFading(e, 1, 0);
  }
  crossFadeFrom(e, t, n) {
    if (e.fadeOut(t), this.fadeIn(t), n) {
      const i = this._clip.duration, r = e._clip.duration, o = r / i, a = i / r;
      e.warp(1, o, t), this.warp(a, 1, t);
    }
    return this;
  }
  crossFadeTo(e, t, n) {
    return e.crossFadeFrom(this, t, n);
  }
  stopFading() {
    const e = this._weightInterpolant;
    return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  // Time Scale Control
  // set the time scale stopping any scheduled warping
  // although .paused = true yields an effective time scale of zero, this
  // method does *not* change .paused, because it would be confusing
  setEffectiveTimeScale(e) {
    return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping();
  }
  // return the time scale considering warping and .paused
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(e) {
    return this.timeScale = this._clip.duration / e, this.stopWarping();
  }
  syncWith(e) {
    return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping();
  }
  halt(e) {
    return this.warp(this._effectiveTimeScale, 0, e);
  }
  warp(e, t, n) {
    const i = this._mixer, r = i.time, o = this.timeScale;
    let a = this._timeScaleInterpolant;
    a === null && (a = i._lendControlInterpolant(), this._timeScaleInterpolant = a);
    const l = a.parameterPositions, c = a.sampleValues;
    return l[0] = r, l[1] = r + n, c[0] = e / o, c[1] = t / o, this;
  }
  stopWarping() {
    const e = this._timeScaleInterpolant;
    return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  // Object Accessors
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  // Interna
  _update(e, t, n, i) {
    if (!this.enabled) {
      this._updateWeight(e);
      return;
    }
    const r = this._startTime;
    if (r !== null) {
      const l = (e - r) * n;
      l < 0 || n === 0 ? t = 0 : (this._startTime = null, t = n * l);
    }
    t *= this._updateTimeScale(e);
    const o = this._updateTime(t), a = this._updateWeight(e);
    if (a > 0) {
      const l = this._interpolants, c = this._propertyBindings;
      switch (this.blendMode) {
        case wp:
          for (let u = 0, h = l.length; u !== h; ++u)
            l[u].evaluate(o), c[u].accumulateAdditive(a);
          break;
        case Ga:
        default:
          for (let u = 0, h = l.length; u !== h; ++u)
            l[u].evaluate(o), c[u].accumulate(i, a);
      }
    }
  }
  _updateWeight(e) {
    let t = 0;
    if (this.enabled) {
      t = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        t *= i, e > n.parameterPositions[1] && (this.stopFading(), i === 0 && (this.enabled = !1));
      }
    }
    return this._effectiveWeight = t, t;
  }
  _updateTimeScale(e) {
    let t = 0;
    if (!this.paused) {
      t = this.timeScale;
      const n = this._timeScaleInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        t *= i, e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = !0 : this.timeScale = t);
      }
    }
    return this._effectiveTimeScale = t, t;
  }
  _updateTime(e) {
    const t = this._clip.duration, n = this.loop;
    let i = this.time + e, r = this._loopCount;
    const o = n === bp;
    if (e === 0)
      return r === -1 ? i : o && (r & 1) === 1 ? t - i : i;
    if (n === Ap) {
      r === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
      e: {
        if (i >= t)
          i = t;
        else if (i < 0)
          i = 0;
        else {
          this.time = i;
          break e;
        }
        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({
          type: "finished",
          action: this,
          direction: e < 0 ? -1 : 1
        });
      }
    } else {
      if (r === -1 && (e >= 0 ? (r = 0, this._setEndings(!0, this.repetitions === 0, o)) : this._setEndings(this.repetitions === 0, !0, o)), i >= t || i < 0) {
        const a = Math.floor(i / t);
        i -= t * a, r += Math.abs(a);
        const l = this.repetitions - r;
        if (l <= 0)
          this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = e > 0 ? t : 0, this.time = i, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: e > 0 ? 1 : -1
          });
        else {
          if (l === 1) {
            const c = e < 0;
            this._setEndings(c, !c, o);
          } else
            this._setEndings(!1, !1, o);
          this._loopCount = r, this.time = i, this._mixer.dispatchEvent({
            type: "loop",
            action: this,
            loopDelta: a
          });
        }
      } else
        this.time = i;
      if (o && (r & 1) === 1)
        return t - i;
    }
    return i;
  }
  _setEndings(e, t, n) {
    const i = this._interpolantSettings;
    n ? (i.endingStart = es, i.endingEnd = es) : (e ? i.endingStart = this.zeroSlopeAtStart ? es : Qi : i.endingStart = Kr, t ? i.endingEnd = this.zeroSlopeAtEnd ? es : Qi : i.endingEnd = Kr);
  }
  _scheduleFading(e, t, n) {
    const i = this._mixer, r = i.time;
    let o = this._weightInterpolant;
    o === null && (o = i._lendControlInterpolant(), this._weightInterpolant = o);
    const a = o.parameterPositions, l = o.sampleValues;
    return a[0] = r, l[0] = t, a[1] = r + e, l[1] = n, this;
  }
}
const Xy = new Float32Array(1);
class Ca extends Ii {
  constructor(e) {
    super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(e, t) {
    const n = e._localRoot || this._root, i = e._clip.tracks, r = i.length, o = e._propertyBindings, a = e._interpolants, l = n.uuid, c = this._bindingsByRootAndName;
    let u = c[l];
    u === void 0 && (u = {}, c[l] = u);
    for (let h = 0; h !== r; ++h) {
      const d = i[h], m = d.name;
      let g = u[m];
      if (g !== void 0)
        ++g.referenceCount, o[h] = g;
      else {
        if (g = o[h], g !== void 0) {
          g._cacheIndex === null && (++g.referenceCount, this._addInactiveBinding(g, l, m));
          continue;
        }
        const _ = t && t._propertyBindings[h].binding.parsedPath;
        g = new Ny(
          it.create(n, m, _),
          d.ValueTypeName,
          d.getValueSize()
        ), ++g.referenceCount, this._addInactiveBinding(g, l, m), o[h] = g;
      }
      a[h].resultBuffer = g.buffer;
    }
  }
  _activateAction(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        const n = (e._localRoot || this._root).uuid, i = e._clip.uuid, r = this._actionsByClip[i];
        this._bindAction(
          e,
          r && r.knownActions[0]
        ), this._addInactiveAction(e, i, n);
      }
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const r = t[n];
        r.useCount++ === 0 && (this._lendBinding(r), r.saveOriginalState());
      }
      this._lendAction(e);
    }
  }
  _deactivateAction(e) {
    if (this._isActiveAction(e)) {
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const r = t[n];
        --r.useCount === 0 && (r.restoreOriginalState(), this._takeBackBinding(r));
      }
      this._takeBackAction(e);
    }
  }
  // Memory manager
  _initMemoryManager() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    const e = this;
    this.stats = {
      actions: {
        get total() {
          return e._actions.length;
        },
        get inUse() {
          return e._nActiveActions;
        }
      },
      bindings: {
        get total() {
          return e._bindings.length;
        },
        get inUse() {
          return e._nActiveBindings;
        }
      },
      controlInterpolants: {
        get total() {
          return e._controlInterpolants.length;
        },
        get inUse() {
          return e._nActiveControlInterpolants;
        }
      }
    };
  }
  // Memory management for AnimationAction objects
  _isActiveAction(e) {
    const t = e._cacheIndex;
    return t !== null && t < this._nActiveActions;
  }
  _addInactiveAction(e, t, n) {
    const i = this._actions, r = this._actionsByClip;
    let o = r[t];
    if (o === void 0)
      o = {
        knownActions: [e],
        actionByRoot: {}
      }, e._byClipCacheIndex = 0, r[t] = o;
    else {
      const a = o.knownActions;
      e._byClipCacheIndex = a.length, a.push(e);
    }
    e._cacheIndex = i.length, i.push(e), o.actionByRoot[n] = e;
  }
  _removeInactiveAction(e) {
    const t = this._actions, n = t[t.length - 1], i = e._cacheIndex;
    n._cacheIndex = i, t[i] = n, t.pop(), e._cacheIndex = null;
    const r = e._clip.uuid, o = this._actionsByClip, a = o[r], l = a.knownActions, c = l[l.length - 1], u = e._byClipCacheIndex;
    c._byClipCacheIndex = u, l[u] = c, l.pop(), e._byClipCacheIndex = null;
    const h = a.actionByRoot, d = (e._localRoot || this._root).uuid;
    delete h[d], l.length === 0 && delete o[r], this._removeInactiveBindingsForAction(e);
  }
  _removeInactiveBindingsForAction(e) {
    const t = e._propertyBindings;
    for (let n = 0, i = t.length; n !== i; ++n) {
      const r = t[n];
      --r.referenceCount === 0 && this._removeInactiveBinding(r);
    }
  }
  _lendAction(e) {
    const t = this._actions, n = e._cacheIndex, i = this._nActiveActions++, r = t[i];
    e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r;
  }
  _takeBackAction(e) {
    const t = this._actions, n = e._cacheIndex, i = --this._nActiveActions, r = t[i];
    e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r;
  }
  // Memory management for PropertyMixer objects
  _addInactiveBinding(e, t, n) {
    const i = this._bindingsByRootAndName, r = this._bindings;
    let o = i[t];
    o === void 0 && (o = {}, i[t] = o), o[n] = e, e._cacheIndex = r.length, r.push(e);
  }
  _removeInactiveBinding(e) {
    const t = this._bindings, n = e.binding, i = n.rootNode.uuid, r = n.path, o = this._bindingsByRootAndName, a = o[i], l = t[t.length - 1], c = e._cacheIndex;
    l._cacheIndex = c, t[c] = l, t.pop(), delete a[r], Object.keys(a).length === 0 && delete o[i];
  }
  _lendBinding(e) {
    const t = this._bindings, n = e._cacheIndex, i = this._nActiveBindings++, r = t[i];
    e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r;
  }
  _takeBackBinding(e) {
    const t = this._bindings, n = e._cacheIndex, i = --this._nActiveBindings, r = t[i];
    e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r;
  }
  // Memory management of Interpolants for weight and time scale
  _lendControlInterpolant() {
    const e = this._controlInterpolants, t = this._nActiveControlInterpolants++;
    let n = e[t];
    return n === void 0 && (n = new Dh(
      new Float32Array(2),
      new Float32Array(2),
      1,
      Xy
    ), n.__cacheIndex = t, e[t] = n), n;
  }
  _takeBackControlInterpolant(e) {
    const t = this._controlInterpolants, n = e.__cacheIndex, i = --this._nActiveControlInterpolants, r = t[i];
    e.__cacheIndex = i, t[i] = e, r.__cacheIndex = n, t[n] = r;
  }
  // return an action for a clip optionally using a custom root target
  // object (this method allocates a lot of dynamic memory in case a
  // previously unknown clip/root combination is specified)
  clipAction(e, t, n) {
    const i = t || this._root, r = i.uuid;
    let o = typeof e == "string" ? wa.findByName(i, e) : e;
    const a = o !== null ? o.uuid : e, l = this._actionsByClip[a];
    let c = null;
    if (n === void 0 && (o !== null ? n = o.blendMode : n = Ga), l !== void 0) {
      const h = l.actionByRoot[r];
      if (h !== void 0 && h.blendMode === n)
        return h;
      c = l.knownActions[0], o === null && (o = c._clip);
    }
    if (o === null) return null;
    const u = new jy(this, o, t, n);
    return this._bindAction(u, c), this._addInactiveAction(u, a, r), u;
  }
  // get an existing action
  existingAction(e, t) {
    const n = t || this._root, i = n.uuid, r = typeof e == "string" ? wa.findByName(n, e) : e, o = r ? r.uuid : e, a = this._actionsByClip[o];
    return a !== void 0 && a.actionByRoot[i] || null;
  }
  // deactivates all previously scheduled actions
  stopAllAction() {
    const e = this._actions, t = this._nActiveActions;
    for (let n = t - 1; n >= 0; --n)
      e[n].stop();
    return this;
  }
  // advance the time and update apply the animation
  update(e) {
    e *= this.timeScale;
    const t = this._actions, n = this._nActiveActions, i = this.time += e, r = Math.sign(e), o = this._accuIndex ^= 1;
    for (let c = 0; c !== n; ++c)
      t[c]._update(i, e, r, o);
    const a = this._bindings, l = this._nActiveBindings;
    for (let c = 0; c !== l; ++c)
      a[c].apply(o);
    return this;
  }
  // Allows you to seek to a specific time in an animation.
  setTime(e) {
    this.time = 0;
    for (let t = 0; t < this._actions.length; t++)
      this._actions[t].time = 0;
    return this.update(e);
  }
  // return this mixer's root target object
  getRoot() {
    return this._root;
  }
  // free all resources specific to a particular clip
  uncacheClip(e) {
    const t = this._actions, n = e.uuid, i = this._actionsByClip, r = i[n];
    if (r !== void 0) {
      const o = r.knownActions;
      for (let a = 0, l = o.length; a !== l; ++a) {
        const c = o[a];
        this._deactivateAction(c);
        const u = c._cacheIndex, h = t[t.length - 1];
        c._cacheIndex = null, c._byClipCacheIndex = null, h._cacheIndex = u, t[u] = h, t.pop(), this._removeInactiveBindingsForAction(c);
      }
      delete i[n];
    }
  }
  // free all resources specific to a particular root target object
  uncacheRoot(e) {
    const t = e.uuid, n = this._actionsByClip;
    for (const o in n) {
      const a = n[o].actionByRoot, l = a[t];
      l !== void 0 && (this._deactivateAction(l), this._removeInactiveAction(l));
    }
    const i = this._bindingsByRootAndName, r = i[t];
    if (r !== void 0)
      for (const o in r) {
        const a = r[o];
        a.restoreOriginalState(), this._removeInactiveBinding(a);
      }
  }
  // remove a targeted clip from the cache
  uncacheAction(e, t) {
    const n = this.existingAction(e, t);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: ka
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = ka);
function lu(s, e) {
  if (e === Rp)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), s;
  if (e === xa || e === oh) {
    let t = s.getIndex();
    if (t === null) {
      const o = [], a = s.getAttribute("position");
      if (a !== void 0) {
        for (let l = 0; l < a.count; l++)
          o.push(l);
        s.setIndex(o), t = s.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), s;
    }
    const n = t.count - 2, i = [];
    if (e === xa)
      for (let o = 1; o <= n; o++)
        i.push(t.getX(0)), i.push(t.getX(o)), i.push(t.getX(o + 1));
    else
      for (let o = 0; o < n; o++)
        o % 2 === 0 ? (i.push(t.getX(o)), i.push(t.getX(o + 1)), i.push(t.getX(o + 2))) : (i.push(t.getX(o + 2)), i.push(t.getX(o + 1)), i.push(t.getX(o)));
    i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const r = s.clone();
    return r.setIndex(i), r.clearGroups(), r;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), s;
}
class La extends Es {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new Jy(t);
    }), this.register(function(t) {
      return new ox(t);
    }), this.register(function(t) {
      return new ax(t);
    }), this.register(function(t) {
      return new lx(t);
    }), this.register(function(t) {
      return new Qy(t);
    }), this.register(function(t) {
      return new ex(t);
    }), this.register(function(t) {
      return new tx(t);
    }), this.register(function(t) {
      return new nx(t);
    }), this.register(function(t) {
      return new $y(t);
    }), this.register(function(t) {
      return new ix(t);
    }), this.register(function(t) {
      return new Zy(t);
    }), this.register(function(t) {
      return new rx(t);
    }), this.register(function(t) {
      return new sx(t);
    }), this.register(function(t) {
      return new Yy(t);
    }), this.register(function(t) {
      return new cx(t);
    }), this.register(function(t) {
      return new ux(t);
    });
  }
  load(e, t, n, i) {
    const r = this;
    let o;
    if (this.resourcePath !== "")
      o = this.resourcePath;
    else if (this.path !== "") {
      const c = Hs.extractUrlBase(e);
      o = Hs.resolveURL(c, this.path);
    } else
      o = Hs.extractUrlBase(e);
    this.manager.itemStart(e);
    const a = function(c) {
      i ? i(c) : console.error(c), r.manager.itemError(e), r.manager.itemEnd(e);
    }, l = new Nh(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
      try {
        r.parse(c, o, function(u) {
          t(u), r.manager.itemEnd(e);
        }, a);
      } catch (u) {
        a(u);
      }
    }, n, a);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, i) {
    let r;
    const o = {}, a = {}, l = new TextDecoder();
    if (typeof e == "string")
      r = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (l.decode(new Uint8Array(e, 0, 4)) === Fh) {
        try {
          o[$e.KHR_BINARY_GLTF] = new hx(e);
        } catch (h) {
          i && i(h);
          return;
        }
        r = JSON.parse(o[$e.KHR_BINARY_GLTF].content);
      } else
        r = JSON.parse(l.decode(e));
    else
      r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new Ax(r, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let u = 0; u < this.pluginCallbacks.length; u++) {
      const h = this.pluginCallbacks[u](c);
      h.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[h.name] = h, o[h.name] = !0;
    }
    if (r.extensionsUsed)
      for (let u = 0; u < r.extensionsUsed.length; ++u) {
        const h = r.extensionsUsed[u], d = r.extensionsRequired || [];
        switch (h) {
          case $e.KHR_MATERIALS_UNLIT:
            o[h] = new Ky();
            break;
          case $e.KHR_DRACO_MESH_COMPRESSION:
            o[h] = new dx(r, this.dracoLoader);
            break;
          case $e.KHR_TEXTURE_TRANSFORM:
            o[h] = new fx();
            break;
          case $e.KHR_MESH_QUANTIZATION:
            o[h] = new px();
            break;
          default:
            d.indexOf(h) >= 0 && a[h] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".');
        }
      }
    c.setExtensions(o), c.setPlugins(a), c.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.parse(e, t, i, r);
    });
  }
}
function qy() {
  let s = {};
  return {
    get: function(e) {
      return s[e];
    },
    add: function(e, t) {
      s[e] = t;
    },
    remove: function(e) {
      delete s[e];
    },
    removeAll: function() {
      s = {};
    }
  };
}
const $e = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class Yy {
  constructor(e) {
    this.parser = e, this.name = $e.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const r = t.json, l = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e];
    let c;
    const u = new Oe(16777215);
    l.color !== void 0 && u.setRGB(l.color[0], l.color[1], l.color[2], Lt);
    const h = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new Ra(u), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new Bs(u), c.distance = h;
        break;
      case "spot":
        c = new Oh(u), c.distance = h, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, Jn(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, r = n.json.nodes[e], a = (r.extensions && r.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(l) {
      return n._getNodeRef(t.cache, a, l);
    });
  }
}
class Ky {
  constructor() {
    this.name = $e.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return xi;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new Oe(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const o = r.baseColorFactor;
        e.color.setRGB(o[0], o[1], o[2], Lt), e.opacity = o[3];
      }
      r.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", r.baseColorTexture, mt));
    }
    return Promise.all(i);
  }
}
class $y {
  constructor(e) {
    this.parser = e, this.name = $e.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = i.extensions[this.name].emissiveStrength;
    return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
  }
}
class Jy {
  constructor(e) {
    this.parser = e, this.name = $e.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Hn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
      const a = o.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Je(a, a);
    }
    return Promise.all(r);
  }
}
class Zy {
  constructor(e) {
    this.parser = e, this.name = $e.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Hn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class Qy {
  constructor(e) {
    this.parser = e, this.name = $e.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Hn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [];
    t.sheenColor = new Oe(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const o = i.extensions[this.name];
    if (o.sheenColorFactor !== void 0) {
      const a = o.sheenColorFactor;
      t.sheenColor.setRGB(a[0], a[1], a[2], Lt);
    }
    return o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, mt)), o.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(r);
  }
}
class ex {
  constructor(e) {
    this.parser = e, this.name = $e.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Hn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && r.push(n.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(r);
  }
}
class tx {
  constructor(e) {
    this.parser = e, this.name = $e.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Hn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && r.push(n.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
    const a = o.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Oe().setRGB(a[0], a[1], a[2], Lt), Promise.all(r);
  }
}
class nx {
  constructor(e) {
    this.parser = e, this.name = $e.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Hn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = i.extensions[this.name];
    return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class ix {
  constructor(e) {
    this.parser = e, this.name = $e.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Hn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && r.push(n.assignTexture(t, "specularIntensityMap", o.specularTexture));
    const a = o.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Oe().setRGB(a[0], a[1], a[2], Lt), o.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", o.specularColorTexture, mt)), Promise.all(r);
  }
}
class sx {
  constructor(e) {
    this.parser = e, this.name = $e.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Hn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return t.bumpScale = o.bumpFactor !== void 0 ? o.bumpFactor : 1, o.bumpTexture !== void 0 && r.push(n.assignTexture(t, "bumpMap", o.bumpTexture)), Promise.all(r);
  }
}
class rx {
  constructor(e) {
    this.parser = e, this.name = $e.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Hn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && r.push(n.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(r);
  }
}
class ox {
  constructor(e) {
    this.parser = e, this.name = $e.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const r = i.extensions[this.name], o = t.options.ktx2Loader;
    if (!o) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, r.source, o);
  }
}
class ax {
  constructor(e) {
    this.parser = e, this.name = $e.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t])
      return null;
    const o = r.extensions[t], a = i.images[o.source];
    let l = n.textureLoader;
    if (a.uri) {
      const c = n.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, o.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class lx {
  constructor(e) {
    this.parser = e, this.name = $e.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t])
      return null;
    const o = r.extensions[t], a = i.images[o.source];
    let l = n.textureLoader;
    if (a.uri) {
      const c = n.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, o.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class cx {
  constructor(e) {
    this.name = $e.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], r = this.parser.getDependency("buffer", i.buffer), o = this.parser.options.meshoptDecoder;
      if (!o || !o.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return r.then(function(a) {
        const l = i.byteOffset || 0, c = i.byteLength || 0, u = i.count, h = i.byteStride, d = new Uint8Array(a, l, c);
        return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(u, h, d, i.mode, i.filter).then(function(m) {
          return m.buffer;
        }) : o.ready.then(function() {
          const m = new ArrayBuffer(u * h);
          return o.decodeGltfBuffer(new Uint8Array(m), u, h, d, i.mode, i.filter), m;
        });
      });
    } else
      return null;
  }
}
class ux {
  constructor(e) {
    this.name = $e.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const c of i.primitives)
      if (c.mode !== rn.TRIANGLES && c.mode !== rn.TRIANGLE_STRIP && c.mode !== rn.TRIANGLE_FAN && c.mode !== void 0)
        return null;
    const o = n.extensions[this.name].attributes, a = [], l = {};
    for (const c in o)
      a.push(this.parser.getDependency("accessor", o[c]).then((u) => (l[c] = u, l[c])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((c) => {
      const u = c.pop(), h = u.isGroup ? u.children : [u], d = c[0].count, m = [];
      for (const g of h) {
        const _ = new Ye(), f = new N(), p = new _n(), E = new N(1, 1, 1), y = new fy(g.geometry, g.material, d);
        for (let T = 0; T < d; T++)
          l.TRANSLATION && f.fromBufferAttribute(l.TRANSLATION, T), l.ROTATION && p.fromBufferAttribute(l.ROTATION, T), l.SCALE && E.fromBufferAttribute(l.SCALE, T), y.setMatrixAt(T, _.compose(f, p, E));
        for (const T in l)
          if (T === "_COLOR_0") {
            const R = l[T];
            y.instanceColor = new Ta(R.array, R.itemSize, R.normalized);
          } else T !== "TRANSLATION" && T !== "ROTATION" && T !== "SCALE" && g.geometry.setAttribute(T, l[T]);
        gt.prototype.copy.call(y, g), this.parser.assignFinalMaterial(y), m.push(y);
      }
      return u.isGroup ? (u.clear(), u.add(...m), u) : m[0];
    }));
  }
}
const Fh = "glTF", Us = 12, cu = { JSON: 1313821514, BIN: 5130562 };
class hx {
  constructor(e) {
    this.name = $e.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Us), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== Fh)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - Us, r = new DataView(e, Us);
    let o = 0;
    for (; o < i; ) {
      const a = r.getUint32(o, !0);
      o += 4;
      const l = r.getUint32(o, !0);
      if (o += 4, l === cu.JSON) {
        const c = new Uint8Array(e, Us + o, a);
        this.content = n.decode(c);
      } else if (l === cu.BIN) {
        const c = Us + o;
        this.body = e.slice(c, c + a);
      }
      o += a;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class dx {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = $e.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, r = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, l = {}, c = {};
    for (const u in o) {
      const h = Pa[u] || u.toLowerCase();
      a[h] = o[u];
    }
    for (const u in e.attributes) {
      const h = Pa[u] || u.toLowerCase();
      if (o[u] !== void 0) {
        const d = n.accessors[e.attributes[u]], m = rs[d.componentType];
        c[h] = m.name, l[h] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", r).then(function(u) {
      return new Promise(function(h, d) {
        i.decodeDracoFile(u, function(m) {
          for (const g in m.attributes) {
            const _ = m.attributes[g], f = l[g];
            f !== void 0 && (_.normalized = f);
          }
          h(m);
        }, a, c, Lt, d);
      });
    });
  }
}
class fx {
  constructor() {
    this.name = $e.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class px {
  constructor() {
    this.name = $e.KHR_MESH_QUANTIZATION;
  }
}
class Bh extends tr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i * 3 + i;
    for (let o = 0; o !== i; o++)
      t[o] = n[r + o];
    return t;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = a * 2, c = a * 3, u = i - t, h = (n - t) / u, d = h * h, m = d * h, g = e * c, _ = g - c, f = -2 * m + 3 * d, p = m - d, E = 1 - f, y = p - d + h;
    for (let T = 0; T !== a; T++) {
      const R = o[_ + T + a], b = o[_ + T + l] * u, w = o[g + T + a], G = o[g + T] * u;
      r[T] = E * R + y * b + f * w + p * G;
    }
    return r;
  }
}
const mx = new _n();
class gx extends Bh {
  interpolate_(e, t, n, i) {
    const r = super.interpolate_(e, t, n, i);
    return mx.fromArray(r).normalize().toArray(r), r;
  }
}
const rn = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, rs = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, uu = {
  9728: Ct,
  9729: qt,
  9984: ya,
  9985: Zu,
  9986: Hr,
  9987: wi
}, hu = {
  33071: on,
  33648: Yr,
  10497: cs
}, ia = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Pa = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, Kn = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, _x = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: hs,
  STEP: Xs
}, sa = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function vx(s) {
  return s.DefaultMaterial === void 0 && (s.DefaultMaterial = new Ht({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: zn
  })), s.DefaultMaterial;
}
function di(s, e, t) {
  for (const n in t.extensions)
    s[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function Jn(s, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(s.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function yx(s, e, t) {
  let n = !1, i = !1, r = !1;
  for (let c = 0, u = e.length; c < u; c++) {
    const h = e[c];
    if (h.POSITION !== void 0 && (n = !0), h.NORMAL !== void 0 && (i = !0), h.COLOR_0 !== void 0 && (r = !0), n && i && r) break;
  }
  if (!n && !i && !r) return Promise.resolve(s);
  const o = [], a = [], l = [];
  for (let c = 0, u = e.length; c < u; c++) {
    const h = e[c];
    if (n) {
      const d = h.POSITION !== void 0 ? t.getDependency("accessor", h.POSITION) : s.attributes.position;
      o.push(d);
    }
    if (i) {
      const d = h.NORMAL !== void 0 ? t.getDependency("accessor", h.NORMAL) : s.attributes.normal;
      a.push(d);
    }
    if (r) {
      const d = h.COLOR_0 !== void 0 ? t.getDependency("accessor", h.COLOR_0) : s.attributes.color;
      l.push(d);
    }
  }
  return Promise.all([
    Promise.all(o),
    Promise.all(a),
    Promise.all(l)
  ]).then(function(c) {
    const u = c[0], h = c[1], d = c[2];
    return n && (s.morphAttributes.position = u), i && (s.morphAttributes.normal = h), r && (s.morphAttributes.color = d), s.morphTargetsRelative = !0, s;
  });
}
function xx(s, e) {
  if (s.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      s.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (s.morphTargetInfluences.length === t.length) {
      s.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        s.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Ex(s) {
  let e;
  const t = s.extensions && s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + ra(t.attributes) : e = s.indices + ":" + ra(s.attributes) + ":" + s.mode, s.targets !== void 0)
    for (let n = 0, i = s.targets.length; n < i; n++)
      e += ":" + ra(s.targets[n]);
  return e;
}
function ra(s) {
  let e = "";
  const t = Object.keys(s).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + s[t[n]] + ";";
  return e;
}
function Ia(s) {
  switch (s) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function Sx(s) {
  return s.search(/\.jpe?g($|\?)/i) > 0 || s.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : s.search(/\.webp($|\?)/i) > 0 || s.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const Mx = new Ye();
class Ax {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new qy(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = !1, r = -1;
    typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, i = navigator.userAgent.indexOf("Firefox") > -1, r = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || i && r < 98 ? this.textureLoader = new Ry(this.options.manager) : this.textureLoader = new Dy(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Nh(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, r = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(o) {
      return o._markDefs && o._markDefs();
    }), Promise.all(this._invokeAll(function(o) {
      return o.beforeRoot && o.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(o) {
      const a = {
        scene: o[0][i.scene || 0],
        scenes: o[0],
        animations: o[1],
        cameras: o[2],
        asset: i.asset,
        parser: n,
        userData: {}
      };
      return di(r, a, i), Jn(a, i), Promise.all(n._invokeAll(function(l) {
        return l.afterRoot && l.afterRoot(a);
      })).then(function() {
        e(a);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, r = t.length; i < r; i++) {
      const o = t[i].joints;
      for (let a = 0, l = o.length; a < l; a++)
        e[o[a]].isBone = !0;
    }
    for (let i = 0, r = e.length; i < r; i++) {
      const o = e[i];
      o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (n[o.mesh].isSkinnedMesh = !0)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(), r = (o, a) => {
      const l = this.associations.get(o);
      l != null && this.associations.set(a, l);
      for (const [c, u] of o.children.entries())
        r(u, a.children[c]);
    };
    return r(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const r = e(t[i]);
      r && n.push(r);
    }
    return n;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function(r) {
            return r.loadNode && r.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(r) {
            return r.loadMesh && r.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(r) {
            return r.loadBufferView && r.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(r) {
            return r.loadMaterial && r.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(r) {
            return r.loadTexture && r.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(r) {
            return r.loadAnimation && r.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(r) {
            return r != this && r.getDependency && r.getDependency(e, t);
          }), !i)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(r, o) {
        return n.getDependency(e, o);
      })), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(r, o) {
      n.load(Hs.resolveURL(t.uri, i.path), r, void 0, function() {
        o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, r = t.byteOffset || 0;
      return n.slice(r, r + i);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const o = ia[i.type], a = rs[i.componentType], l = i.normalized === !0, c = new a(i.count * o);
      return Promise.resolve(new Wt(c, o, l));
    }
    const r = [];
    return i.bufferView !== void 0 ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), i.sparse !== void 0 && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then(function(o) {
      const a = o[0], l = ia[i.type], c = rs[i.componentType], u = c.BYTES_PER_ELEMENT, h = u * l, d = i.byteOffset || 0, m = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0;
      let _, f;
      if (m && m !== h) {
        const p = Math.floor(d / m), E = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + p + ":" + i.count;
        let y = t.cache.get(E);
        y || (_ = new c(a, p * m, i.count * m / u), y = new ay(_, m / u), t.cache.add(E, y)), f = new Ka(y, l, d % m / u, g);
      } else
        a === null ? _ = new c(i.count * l) : _ = new c(a, d, i.count * l), f = new Wt(_, l, g);
      if (i.sparse !== void 0) {
        const p = ia.SCALAR, E = rs[i.sparse.indices.componentType], y = i.sparse.indices.byteOffset || 0, T = i.sparse.values.byteOffset || 0, R = new E(o[1], y, i.sparse.count * p), b = new c(o[2], T, i.sparse.count * l);
        a !== null && (f = new Wt(f.array.slice(), f.itemSize, f.normalized));
        for (let w = 0, G = R.length; w < G; w++) {
          const S = R[w];
          if (f.setX(S, b[w * l]), l >= 2 && f.setY(S, b[w * l + 1]), l >= 3 && f.setZ(S, b[w * l + 2]), l >= 4 && f.setW(S, b[w * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return f;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, n = this.options, r = t.textures[e].source, o = t.images[r];
    let a = this.textureLoader;
    if (o.uri) {
      const l = n.manager.getHandler(o.uri);
      l !== null && (a = l);
    }
    return this.loadTextureImage(e, r, a);
  }
  loadTextureImage(e, t, n) {
    const i = this, r = this.json, o = r.textures[e], a = r.images[t], l = (a.uri || a.bufferView) + ":" + o.sampler;
    if (this.textureCache[l])
      return this.textureCache[l];
    const c = this.loadImageSource(t, n).then(function(u) {
      u.flipY = !1, u.name = o.name || a.name || "", u.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === !1 && (u.name = a.uri);
      const d = (r.samplers || {})[o.sampler] || {};
      return u.magFilter = uu[d.magFilter] || qt, u.minFilter = uu[d.minFilter] || wi, u.wrapS = hu[d.wrapS] || cs, u.wrapT = hu[d.wrapT] || cs, i.associations.set(u, { textures: e }), u;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, r = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((h) => h.clone());
    const o = i.images[e], a = self.URL || self.webkitURL;
    let l = o.uri || "", c = !1;
    if (o.bufferView !== void 0)
      l = n.getDependency("bufferView", o.bufferView).then(function(h) {
        c = !0;
        const d = new Blob([h], { type: o.mimeType });
        return l = a.createObjectURL(d), l;
      });
    else if (o.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const u = Promise.resolve(l).then(function(h) {
      return new Promise(function(d, m) {
        let g = d;
        t.isImageBitmapLoader === !0 && (g = function(_) {
          const f = new Dt(_);
          f.needsUpdate = !0, d(f);
        }), t.load(Hs.resolveURL(h, r.path), g, void 0, m);
      });
    }).then(function(h) {
      return c === !0 && a.revokeObjectURL(l), h.userData.mimeType = o.mimeType || Sx(o.uri), h;
    }).catch(function(h) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), h;
    });
    return this.sourceCache[e] = u, u;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, n, i) {
    const r = this;
    return this.getDependency("texture", n.index).then(function(o) {
      if (!o) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (o = o.clone(), o.channel = n.texCoord), r.extensions[$e.KHR_TEXTURE_TRANSFORM]) {
        const a = n.extensions !== void 0 ? n.extensions[$e.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const l = r.associations.get(o);
          o = r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), r.associations.set(o, l);
        }
      }
      return i !== void 0 && (o.colorSpace = i), e[t] = o, o;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, r = t.attributes.color !== void 0, o = t.attributes.normal === void 0;
    if (e.isPoints) {
      const a = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new Ph(), bn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = !1, this.cache.add(a, l)), n = l;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new Lh(), bn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(a, l)), n = l;
    }
    if (i || r || o) {
      let a = "ClonedMaterial:" + n.uuid + ":";
      i && (a += "derivative-tangents:"), r && (a += "vertex-colors:"), o && (a += "flat-shading:");
      let l = this.cache.get(a);
      l || (l = n.clone(), r && (l.vertexColors = !0), o && (l.flatShading = !0), i && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(a, l), this.associations.set(l, this.associations.get(n))), n = l;
    }
    e.material = n;
  }
  getMaterialType() {
    return Ht;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, r = n.materials[e];
    let o;
    const a = {}, l = r.extensions || {}, c = [];
    if (l[$e.KHR_MATERIALS_UNLIT]) {
      const h = i[$e.KHR_MATERIALS_UNLIT];
      o = h.getMaterialType(), c.push(h.extendParams(a, r, t));
    } else {
      const h = r.pbrMetallicRoughness || {};
      if (a.color = new Oe(1, 1, 1), a.opacity = 1, Array.isArray(h.baseColorFactor)) {
        const d = h.baseColorFactor;
        a.color.setRGB(d[0], d[1], d[2], Lt), a.opacity = d[3];
      }
      h.baseColorTexture !== void 0 && c.push(t.assignTexture(a, "map", h.baseColorTexture, mt)), a.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, a.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(a, "metalnessMap", h.metallicRoughnessTexture)), c.push(t.assignTexture(a, "roughnessMap", h.metallicRoughnessTexture))), o = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, a);
      })));
    }
    r.doubleSided === !0 && (a.side = An);
    const u = r.alphaMode || sa.OPAQUE;
    if (u === sa.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, u === sa.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && o !== xi && (c.push(t.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new Je(1, 1), r.normalTexture.scale !== void 0)) {
      const h = r.normalTexture.scale;
      a.normalScale.set(h, h);
    }
    if (r.occlusionTexture !== void 0 && o !== xi && (c.push(t.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && o !== xi) {
      const h = r.emissiveFactor;
      a.emissive = new Oe().setRGB(h[0], h[1], h[2], Lt);
    }
    return r.emissiveTexture !== void 0 && o !== xi && c.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, mt)), Promise.all(c).then(function() {
      const h = new o(a);
      return r.name && (h.name = r.name), Jn(h, r), t.associations.set(h, { materials: e }), r.extensions && di(i, h, r), h;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = it.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function r(a) {
      return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(l) {
        return du(l, a, t);
      });
    }
    const o = [];
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], u = Ex(c), h = i[u];
      if (h)
        o.push(h.promise);
      else {
        let d;
        c.extensions && c.extensions[$e.KHR_DRACO_MESH_COMPRESSION] ? d = r(c) : d = du(new yn(), c, t), i[u] = { primitive: c, promise: d }, o.push(d);
      }
    }
    return Promise.all(o);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, r = n.meshes[e], o = r.primitives, a = [];
    for (let l = 0, c = o.length; l < c; l++) {
      const u = o[l].material === void 0 ? vx(this.cache) : this.getDependency("material", o[l].material);
      a.push(u);
    }
    return a.push(t.loadGeometries(o)), Promise.all(a).then(function(l) {
      const c = l.slice(0, l.length - 1), u = l[l.length - 1], h = [];
      for (let m = 0, g = u.length; m < g; m++) {
        const _ = u[m], f = o[m];
        let p;
        const E = c[m];
        if (f.mode === rn.TRIANGLES || f.mode === rn.TRIANGLE_STRIP || f.mode === rn.TRIANGLE_FAN || f.mode === void 0)
          p = r.isSkinnedMesh === !0 ? new cy(_, E) : new He(_, E), p.isSkinnedMesh === !0 && p.normalizeSkinWeights(), f.mode === rn.TRIANGLE_STRIP ? p.geometry = lu(p.geometry, oh) : f.mode === rn.TRIANGLE_FAN && (p.geometry = lu(p.geometry, xa));
        else if (f.mode === rn.LINES)
          p = new py(_, E);
        else if (f.mode === rn.LINE_STRIP)
          p = new Ja(_, E);
        else if (f.mode === rn.LINE_LOOP)
          p = new my(_, E);
        else if (f.mode === rn.POINTS)
          p = new gy(_, E);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + f.mode);
        Object.keys(p.geometry.morphAttributes).length > 0 && xx(p, r), p.name = t.createUniqueName(r.name || "mesh_" + e), Jn(p, r), f.extensions && di(i, p, f), t.assignFinalMaterial(p), h.push(p);
      }
      for (let m = 0, g = h.length; m < g; m++)
        t.associations.set(h[m], {
          meshes: e,
          primitives: m
        });
      if (h.length === 1)
        return r.extensions && di(i, h[0], r), h[0];
      const d = new Ei();
      r.extensions && di(i, d, r), t.associations.set(d, { meshes: e });
      for (let m = 0, g = h.length; m < g; m++)
        d.add(h[m]);
      return d;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new Gt(Qp.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new qa(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Jn(t, n), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, r = t.joints.length; i < r; i++)
      n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const r = i.pop(), o = i, a = [], l = [];
      for (let c = 0, u = o.length; c < u; c++) {
        const h = o[c];
        if (h) {
          a.push(h);
          const d = new Ye();
          r !== null && d.fromArray(r.array, c * 16), l.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new $a(a, l);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], r = i.name ? i.name : "animation_" + e, o = [], a = [], l = [], c = [], u = [];
    for (let h = 0, d = i.channels.length; h < d; h++) {
      const m = i.channels[h], g = i.samplers[m.sampler], _ = m.target, f = _.node, p = i.parameters !== void 0 ? i.parameters[g.input] : g.input, E = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      _.node !== void 0 && (o.push(this.getDependency("node", f)), a.push(this.getDependency("accessor", p)), l.push(this.getDependency("accessor", E)), c.push(g), u.push(_));
    }
    return Promise.all([
      Promise.all(o),
      Promise.all(a),
      Promise.all(l),
      Promise.all(c),
      Promise.all(u)
    ]).then(function(h) {
      const d = h[0], m = h[1], g = h[2], _ = h[3], f = h[4], p = [];
      for (let E = 0, y = d.length; E < y; E++) {
        const T = d[E], R = m[E], b = g[E], w = _[E], G = f[E];
        if (T === void 0) continue;
        T.updateMatrix && T.updateMatrix();
        const S = n._createAnimationTracks(T, R, b, w, G);
        if (S)
          for (let A = 0; A < S.length; A++)
            p.push(S[A]);
      }
      return new wa(r, void 0, p);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(r) {
      const o = n._getNodeRef(n.meshCache, i.mesh, r);
      return i.weights !== void 0 && o.traverse(function(a) {
        if (a.isMesh)
          for (let l = 0, c = i.weights.length; l < c; l++)
            a.morphTargetInfluences[l] = i.weights[l];
      }), o;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], r = n._loadNodeShallow(e), o = [], a = i.children || [];
    for (let c = 0, u = a.length; c < u; c++)
      o.push(n.getDependency("node", a[c]));
    const l = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([
      r,
      Promise.all(o),
      l
    ]).then(function(c) {
      const u = c[0], h = c[1], d = c[2];
      d !== null && u.traverse(function(m) {
        m.isSkinnedMesh && m.bind(d, Mx);
      });
      for (let m = 0, g = h.length; m < g; m++)
        u.add(h[m]);
      return u;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const r = t.nodes[e], o = r.name ? i.createUniqueName(r.name) : "", a = [], l = i._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(e);
    });
    return l && a.push(l), r.camera !== void 0 && a.push(i.getDependency("camera", r.camera).then(function(c) {
      return i._getNodeRef(i.cameraCache, r.camera, c);
    })), i._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(e);
    }).forEach(function(c) {
      a.push(c);
    }), this.nodeCache[e] = Promise.all(a).then(function(c) {
      let u;
      if (r.isBone === !0 ? u = new Ch() : c.length > 1 ? u = new Ei() : c.length === 1 ? u = c[0] : u = new gt(), u !== c[0])
        for (let h = 0, d = c.length; h < d; h++)
          u.add(c[h]);
      if (r.name && (u.userData.name = r.name, u.name = o), Jn(u, r), r.extensions && di(n, u, r), r.matrix !== void 0) {
        const h = new Ye();
        h.fromArray(r.matrix), u.applyMatrix4(h);
      } else
        r.translation !== void 0 && u.position.fromArray(r.translation), r.rotation !== void 0 && u.quaternion.fromArray(r.rotation), r.scale !== void 0 && u.scale.fromArray(r.scale);
      return i.associations.has(u) || i.associations.set(u, {}), i.associations.get(u).nodes = e, u;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, r = new Ei();
    n.name && (r.name = i.createUniqueName(n.name)), Jn(r, n), n.extensions && di(t, r, n);
    const o = n.nodes || [], a = [];
    for (let l = 0, c = o.length; l < c; l++)
      a.push(i.getDependency("node", o[l]));
    return Promise.all(a).then(function(l) {
      for (let u = 0, h = l.length; u < h; u++)
        r.add(l[u]);
      const c = (u) => {
        const h = /* @__PURE__ */ new Map();
        for (const [d, m] of i.associations)
          (d instanceof bn || d instanceof Dt) && h.set(d, m);
        return u.traverse((d) => {
          const m = i.associations.get(d);
          m != null && h.set(d, m);
        }), h;
      };
      return i.associations = c(r), r;
    });
  }
  _createAnimationTracks(e, t, n, i, r) {
    const o = [], a = e.name ? e.name : e.uuid, l = [];
    Kn[r.path] === Kn.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && l.push(d.name ? d.name : d.uuid);
    }) : l.push(a);
    let c;
    switch (Kn[r.path]) {
      case Kn.weights:
        c = ps;
        break;
      case Kn.rotation:
        c = Li;
        break;
      case Kn.position:
      case Kn.scale:
        c = ms;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = ps;
            break;
          case 2:
          case 3:
          default:
            c = ms;
            break;
        }
        break;
    }
    const u = i.interpolation !== void 0 ? _x[i.interpolation] : hs, h = this._getArrayFromAccessor(n);
    for (let d = 0, m = l.length; d < m; d++) {
      const g = new c(
        l[d] + "." + Kn[r.path],
        t.array,
        h,
        u
      );
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), o.push(g);
    }
    return o;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = Ia(t.constructor), i = new Float32Array(t.length);
      for (let r = 0, o = t.length; r < o; r++)
        i[r] = t[r] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof Li ? gx : Bh;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function Tx(s, e, t) {
  const n = e.attributes, i = new kn();
  if (n.POSITION !== void 0) {
    const a = t.json.accessors[n.POSITION], l = a.min, c = a.max;
    if (l !== void 0 && c !== void 0) {
      if (i.set(
        new N(l[0], l[1], l[2]),
        new N(c[0], c[1], c[2])
      ), a.normalized) {
        const u = Ia(rs[a.componentType]);
        i.min.multiplyScalar(u), i.max.multiplyScalar(u);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const r = e.targets;
  if (r !== void 0) {
    const a = new N(), l = new N();
    for (let c = 0, u = r.length; c < u; c++) {
      const h = r[c];
      if (h.POSITION !== void 0) {
        const d = t.json.accessors[h.POSITION], m = d.min, g = d.max;
        if (m !== void 0 && g !== void 0) {
          if (l.setX(Math.max(Math.abs(m[0]), Math.abs(g[0]))), l.setY(Math.max(Math.abs(m[1]), Math.abs(g[1]))), l.setZ(Math.max(Math.abs(m[2]), Math.abs(g[2]))), d.normalized) {
            const _ = Ia(rs[d.componentType]);
            l.multiplyScalar(_);
          }
          a.max(l);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(a);
  }
  s.boundingBox = i;
  const o = new wn();
  i.getCenter(o.center), o.radius = i.min.distanceTo(i.max) / 2, s.boundingSphere = o;
}
function du(s, e, t) {
  const n = e.attributes, i = [];
  function r(o, a) {
    return t.getDependency("accessor", o).then(function(l) {
      s.setAttribute(a, l);
    });
  }
  for (const o in n) {
    const a = Pa[o] || o.toLowerCase();
    a in s.attributes || i.push(r(n[o], a));
  }
  if (e.indices !== void 0 && !s.index) {
    const o = t.getDependency("accessor", e.indices).then(function(a) {
      s.setIndex(a);
    });
    i.push(o);
  }
  return st.workingColorSpace !== Lt && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`), Jn(s, e), Tx(s, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? yx(s, e.targets, t) : s;
  });
}
const Wr = {
  idle: {
    type: "idle",
    name: "Idle",
    duration: 4,
    loop: !0,
    easing: "ease-in-out",
    keyframes: [
      {
        time: 0,
        body: { lean: { x: 0, z: 0 } },
        head: { rotation: { x: 0, y: 0, z: 0 } }
      },
      {
        time: 0.5,
        body: { lean: { x: 0.01, z: 0 } },
        head: { rotation: { x: 0.02, y: 0.01, z: 0 } }
      },
      {
        time: 1,
        body: { lean: { x: 0, z: 0 } },
        head: { rotation: { x: 0, y: 0, z: 0 } }
      }
    ]
  },
  explain: {
    type: "explain",
    name: "Explain",
    duration: 2,
    loop: !1,
    easing: "ease-in-out",
    keyframes: [
      {
        time: 0,
        leftArm: { shoulderRotation: { x: 0, y: 0, z: 0 }, elbowRotation: { x: 0, y: 0, z: 0 } },
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0 }, elbowRotation: { x: 0, y: 0, z: 0 } }
      },
      {
        time: 0.3,
        leftArm: { shoulderRotation: { x: -0.3, y: 0.2, z: 0 }, elbowRotation: { x: 0.5, y: 0, z: 0 } },
        rightArm: { shoulderRotation: { x: -0.4, y: -0.2, z: 0 }, elbowRotation: { x: 0.6, y: 0, z: 0 } }
      },
      {
        time: 0.7,
        leftArm: { shoulderRotation: { x: -0.4, y: 0.3, z: 0 }, elbowRotation: { x: 0.4, y: 0, z: 0 } },
        rightArm: { shoulderRotation: { x: -0.3, y: -0.3, z: 0 }, elbowRotation: { x: 0.5, y: 0, z: 0 } }
      },
      {
        time: 1,
        leftArm: { shoulderRotation: { x: 0, y: 0, z: 0 }, elbowRotation: { x: 0, y: 0, z: 0 } },
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0 }, elbowRotation: { x: 0, y: 0, z: 0 } }
      }
    ]
  },
  emphasize: {
    type: "emphasize",
    name: "Emphasize",
    duration: 1.5,
    loop: !1,
    easing: "ease-out",
    keyframes: [
      {
        time: 0,
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0 }, elbowRotation: { x: 0, y: 0, z: 0 } },
        head: { rotation: { x: 0, y: 0, z: 0 } }
      },
      {
        time: 0.2,
        rightArm: { shoulderRotation: { x: -0.5, y: 0, z: 0 }, elbowRotation: { x: 0.8, y: 0, z: 0 } },
        head: { rotation: { x: 0.05, y: 0, z: 0 } }
      },
      {
        time: 0.4,
        rightArm: { shoulderRotation: { x: -0.6, y: 0, z: 0 }, elbowRotation: { x: 0.6, y: 0, z: 0 } },
        head: { rotation: { x: -0.05, y: 0, z: 0 } }
      },
      {
        time: 1,
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0 }, elbowRotation: { x: 0, y: 0, z: 0 } },
        head: { rotation: { x: 0, y: 0, z: 0 } }
      }
    ]
  },
  point: {
    type: "point",
    name: "Point",
    duration: 2,
    loop: !1,
    easing: "ease-in-out",
    keyframes: [
      {
        time: 0,
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0 }, elbowRotation: { x: 0, y: 0, z: 0 } }
      },
      {
        time: 0.3,
        rightArm: { shoulderRotation: { x: -0.8, y: 0.3, z: 0 }, elbowRotation: { x: 0.2, y: 0, z: 0 } }
      },
      {
        time: 0.7,
        rightArm: { shoulderRotation: { x: -0.8, y: 0.3, z: 0 }, elbowRotation: { x: 0.2, y: 0, z: 0 } }
      },
      {
        time: 1,
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0 }, elbowRotation: { x: 0, y: 0, z: 0 } }
      }
    ]
  },
  wave: {
    type: "wave",
    name: "Wave",
    duration: 2,
    loop: !1,
    easing: "ease-in-out",
    keyframes: [
      {
        time: 0,
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0 }, wristRotation: { x: 0, y: 0, z: 0 } }
      },
      {
        time: 0.2,
        rightArm: { shoulderRotation: { x: -1.2, y: 0.5, z: 0 }, wristRotation: { x: 0, y: 0, z: 0.3 } }
      },
      {
        time: 0.4,
        rightArm: { shoulderRotation: { x: -1.2, y: 0.5, z: 0 }, wristRotation: { x: 0, y: 0, z: -0.3 } }
      },
      {
        time: 0.6,
        rightArm: { shoulderRotation: { x: -1.2, y: 0.5, z: 0 }, wristRotation: { x: 0, y: 0, z: 0.3 } }
      },
      {
        time: 0.8,
        rightArm: { shoulderRotation: { x: -1.2, y: 0.5, z: 0 }, wristRotation: { x: 0, y: 0, z: -0.3 } }
      },
      {
        time: 1,
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0 }, wristRotation: { x: 0, y: 0, z: 0 } }
      }
    ]
  },
  think: {
    type: "think",
    name: "Think",
    duration: 3,
    loop: !1,
    easing: "ease-in-out",
    keyframes: [
      {
        time: 0,
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0 }, elbowRotation: { x: 0, y: 0, z: 0 } },
        head: { rotation: { x: 0, y: 0, z: 0 } }
      },
      {
        time: 0.3,
        rightArm: { shoulderRotation: { x: -0.3, y: 0.8, z: 0 }, elbowRotation: { x: 1.5, y: 0, z: 0 } },
        head: { rotation: { x: 0.1, y: 0.1, z: 0.05 } }
      },
      {
        time: 0.7,
        rightArm: { shoulderRotation: { x: -0.3, y: 0.8, z: 0 }, elbowRotation: { x: 1.5, y: 0, z: 0 } },
        head: { rotation: { x: 0.1, y: -0.1, z: -0.05 } }
      },
      {
        time: 1,
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0 }, elbowRotation: { x: 0, y: 0, z: 0 } },
        head: { rotation: { x: 0, y: 0, z: 0 } }
      }
    ]
  },
  nod: {
    type: "nod",
    name: "Nod",
    duration: 1,
    loop: !1,
    easing: "ease-in-out",
    keyframes: [
      {
        time: 0,
        head: { rotation: { x: 0, y: 0, z: 0 } }
      },
      {
        time: 0.25,
        head: { rotation: { x: 0.15, y: 0, z: 0 } }
      },
      {
        time: 0.5,
        head: { rotation: { x: -0.05, y: 0, z: 0 } }
      },
      {
        time: 0.75,
        head: { rotation: { x: 0.1, y: 0, z: 0 } }
      },
      {
        time: 1,
        head: { rotation: { x: 0, y: 0, z: 0 } }
      }
    ]
  },
  shrug: {
    type: "shrug",
    name: "Shrug",
    duration: 1.5,
    loop: !1,
    easing: "ease-in-out",
    keyframes: [
      {
        time: 0,
        leftArm: { shoulderRotation: { x: 0, y: 0, z: 0 } },
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0 } },
        head: { rotation: { x: 0, y: 0, z: 0 } }
      },
      {
        time: 0.3,
        leftArm: { shoulderRotation: { x: 0, y: 0, z: -0.3 } },
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0.3 } },
        head: { rotation: { x: 0, y: 0, z: 0.05 } }
      },
      {
        time: 0.6,
        leftArm: { shoulderRotation: { x: 0, y: 0, z: -0.3 } },
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0.3 } },
        head: { rotation: { x: 0, y: 0, z: -0.05 } }
      },
      {
        time: 1,
        leftArm: { shoulderRotation: { x: 0, y: 0, z: 0 } },
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0 } },
        head: { rotation: { x: 0, y: 0, z: 0 } }
      }
    ]
  }
};
function mS(s) {
  return Wr[s];
}
function bx(s, e) {
  if (s.length === 0)
    return { time: 0 };
  if (s.length === 1)
    return s[0];
  let t = s[0], n = s[s.length - 1];
  for (let r = 0; r < s.length - 1; r++)
    if (e >= s[r].time && e <= s[r + 1].time) {
      t = s[r], n = s[r + 1];
      break;
    }
  const i = (e - t.time) / (n.time - t.time);
  return wx(t, n, i);
}
function wx(s, e, t) {
  const n = { time: s.time + (e.time - s.time) * t };
  return (s.leftArm || e.leftArm) && (n.leftArm = fu(s.leftArm, e.leftArm, t)), (s.rightArm || e.rightArm) && (n.rightArm = fu(s.rightArm, e.rightArm, t)), (s.head || e.head) && (n.head = Rx(s.head, e.head, t)), (s.body || e.body) && (n.body = Cx(s.body, e.body, t)), n;
}
function fu(s, e, t) {
  const n = { x: 0, y: 0, z: 0 };
  return {
    shoulderRotation: Gs(
      (s == null ? void 0 : s.shoulderRotation) || n,
      (e == null ? void 0 : e.shoulderRotation) || n,
      t
    ),
    elbowRotation: Gs(
      (s == null ? void 0 : s.elbowRotation) || n,
      (e == null ? void 0 : e.elbowRotation) || n,
      t
    ),
    wristRotation: Gs(
      (s == null ? void 0 : s.wristRotation) || n,
      (e == null ? void 0 : e.wristRotation) || n,
      t
    )
  };
}
function Rx(s, e, t) {
  var n, i, r, o, a, l;
  return {
    rotation: Gs(
      (s == null ? void 0 : s.rotation) || { x: 0, y: 0, z: 0 },
      (e == null ? void 0 : e.rotation) || { x: 0, y: 0, z: 0 },
      t
    ),
    eyeLookAt: {
      x: (((n = s == null ? void 0 : s.eyeLookAt) == null ? void 0 : n.x) || 0) + ((((i = e == null ? void 0 : e.eyeLookAt) == null ? void 0 : i.x) || 0) - (((r = s == null ? void 0 : s.eyeLookAt) == null ? void 0 : r.x) || 0)) * t,
      y: (((o = s == null ? void 0 : s.eyeLookAt) == null ? void 0 : o.y) || 0) + ((((a = e == null ? void 0 : e.eyeLookAt) == null ? void 0 : a.y) || 0) - (((l = s == null ? void 0 : s.eyeLookAt) == null ? void 0 : l.y) || 0)) * t
    }
  };
}
function Cx(s, e, t) {
  var n, i, r, o, a, l;
  return {
    rotation: Gs(
      (s == null ? void 0 : s.rotation) || { x: 0, y: 0, z: 0 },
      (e == null ? void 0 : e.rotation) || { x: 0, y: 0, z: 0 },
      t
    ),
    lean: {
      x: (((n = s == null ? void 0 : s.lean) == null ? void 0 : n.x) || 0) + ((((i = e == null ? void 0 : e.lean) == null ? void 0 : i.x) || 0) - (((r = s == null ? void 0 : s.lean) == null ? void 0 : r.x) || 0)) * t,
      z: (((o = s == null ? void 0 : s.lean) == null ? void 0 : o.z) || 0) + ((((a = e == null ? void 0 : e.lean) == null ? void 0 : a.z) || 0) - (((l = s == null ? void 0 : s.lean) == null ? void 0 : l.z) || 0)) * t
    }
  };
}
function Gs(s, e, t) {
  return {
    x: s.x + (e.x - s.x) * t,
    y: s.y + (e.y - s.y) * t,
    z: s.z + (e.z - s.z) * t
  };
}
const xn = Ke({
  currentGesture: "idle",
  intensity: 0,
  progress: 0
}), En = Ke([]), $n = Ke(!1);
let Dr = null, pu = 0;
function Vh() {
  const s = Fe(() => xn.value.currentGesture), e = Fe(() => xn.value.intensity), t = Fe(() => xn.value.progress), n = Fe(() => $n.value);
  function i(h, d = 1) {
    const m = Wr[h];
    m && (En.value.push({
      time: 0,
      type: h,
      intensity: Math.min(1, Math.max(0, d)),
      duration: m.duration
    }), $n.value || o());
  }
  function r(h) {
    En.value = [...h], h.length > 0 && !$n.value && o();
  }
  function o() {
    if (En.value.length === 0) {
      $n.value = !1, xn.value = {
        currentGesture: "idle",
        intensity: 0,
        progress: 0
      };
      return;
    }
    const h = En.value[0];
    xn.value.currentGesture = h.type, xn.value.intensity = h.intensity, pu = performance.now(), $n.value = !0, a();
  }
  function a() {
    if (En.value.length === 0) {
      $n.value = !1;
      return;
    }
    const h = En.value[0], d = Wr[h.type], m = (performance.now() - pu) / 1e3, g = Math.min(1, m / h.duration);
    if (xn.value.progress = g, g >= 1) {
      En.value.shift(), En.value.length > 0 ? o() : d.loop ? (En.value.push(h), o()) : ($n.value = !1, xn.value = {
        currentGesture: "idle",
        intensity: 0,
        progress: 0
      });
      return;
    }
    Dr = requestAnimationFrame(a);
  }
  function l() {
    const { currentGesture: h, progress: d, intensity: m } = xn.value, g = Wr[h];
    if (!g)
      return { time: 0 };
    const _ = bx(g.keyframes, d);
    return c(_, m);
  }
  function c(h, d) {
    const m = { time: h.time };
    return h.leftArm && (m.leftArm = {
      shoulderRotation: h.leftArm.shoulderRotation ? {
        x: h.leftArm.shoulderRotation.x * d,
        y: h.leftArm.shoulderRotation.y * d,
        z: h.leftArm.shoulderRotation.z * d
      } : void 0,
      elbowRotation: h.leftArm.elbowRotation ? {
        x: h.leftArm.elbowRotation.x * d,
        y: h.leftArm.elbowRotation.y * d,
        z: h.leftArm.elbowRotation.z * d
      } : void 0,
      wristRotation: h.leftArm.wristRotation ? {
        x: h.leftArm.wristRotation.x * d,
        y: h.leftArm.wristRotation.y * d,
        z: h.leftArm.wristRotation.z * d
      } : void 0
    }), h.rightArm && (m.rightArm = {
      shoulderRotation: h.rightArm.shoulderRotation ? {
        x: h.rightArm.shoulderRotation.x * d,
        y: h.rightArm.shoulderRotation.y * d,
        z: h.rightArm.shoulderRotation.z * d
      } : void 0,
      elbowRotation: h.rightArm.elbowRotation ? {
        x: h.rightArm.elbowRotation.x * d,
        y: h.rightArm.elbowRotation.y * d,
        z: h.rightArm.elbowRotation.z * d
      } : void 0,
      wristRotation: h.rightArm.wristRotation ? {
        x: h.rightArm.wristRotation.x * d,
        y: h.rightArm.wristRotation.y * d,
        z: h.rightArm.wristRotation.z * d
      } : void 0
    }), h.head && (m.head = {
      rotation: h.head.rotation ? {
        x: h.head.rotation.x * d,
        y: h.head.rotation.y * d,
        z: h.head.rotation.z * d
      } : void 0,
      eyeLookAt: h.head.eyeLookAt
    }), h.body && (m.body = {
      rotation: h.body.rotation ? {
        x: h.body.rotation.x * d,
        y: h.body.rotation.y * d,
        z: h.body.rotation.z * d
      } : void 0,
      lean: h.body.lean ? {
        x: h.body.lean.x * d,
        z: h.body.lean.z * d
      } : void 0
    }), m;
  }
  function u() {
    Dr && (cancelAnimationFrame(Dr), Dr = null), En.value = [], $n.value = !1, xn.value = {
      currentGesture: "idle",
      intensity: 0,
      progress: 0
    };
  }
  return {
    currentGesture: s,
    gestureIntensity: e,
    gestureProgress: t,
    isAnimating: n,
    triggerGesture: i,
    setGesturesFromApi: r,
    getCurrentKeyframe: l,
    stopGestures: u
  };
}
const Lx = { class: "liya-ai-env-vuejs-full-body-avatar" }, Px = /* @__PURE__ */ Ys({
  __name: "FullBodyAvatar",
  props: {
    modelUrl: { default: "" },
    isSpeaking: { type: Boolean, default: !1 },
    visemes: { default: () => [] },
    currentTime: { default: 0 },
    animationConfig: { default: () => ({
      lipSyncSpeed: 0.02,
      lipSyncIntensity: 0.5,
      blinkSpeed: 0.25,
      blinkIntervalMin: 1500,
      blinkIntervalMax: 3500,
      eyeMoveSpeed: 0.12,
      eyeMoveIntervalMin: 500,
      eyeMoveIntervalMax: 1500,
      eyeMoveRange: 0.4,
      breathingSpeed: 0.4,
      breathingIntensity: 0.015,
      gestureSpeed: 0.5,
      gestureIntensity: 0.2
    }) }
  },
  emits: ["loaded", "error", "progress"],
  setup(s, { expose: e, emit: t }) {
    const n = s, i = t, { getCurrentKeyframe: r } = Vh();
    let o = null, a = null, l = [], c = {}, u = null, h = null, d = null, m = null, g = null, _ = null, f = 0, p = !1, E = 0, y = 3e3, T = { x: 0, y: 0 }, R = { x: 0, y: 0 }, b = 0, w = 2e3, G = 0;
    const S = {
      0: [],
      1: ["mouthClose", "mouthPressLeft", "mouthPressRight"],
      2: ["mouthFunnel", "mouthLowerDownLeft", "mouthLowerDownRight"],
      3: ["mouthLowerDownLeft", "mouthLowerDownRight", "tongueOut"],
      4: ["mouthLowerDownLeft", "mouthLowerDownRight"],
      5: ["mouthLowerDownLeft", "mouthLowerDownRight"],
      6: ["mouthFunnel", "mouthShrugUpper"],
      7: ["mouthSmileLeft", "mouthSmileRight", "mouthLowerDownLeft", "mouthLowerDownRight"],
      8: ["mouthLowerDownLeft", "mouthLowerDownRight"],
      9: ["mouthLowerDownLeft", "mouthLowerDownRight", "mouthRollLower"],
      10: ["mouthLowerDownLeft", "mouthLowerDownRight", "mouthUpperUpLeft", "mouthUpperUpRight"],
      11: ["mouthSmileLeft", "mouthSmileRight", "mouthLowerDownLeft", "mouthLowerDownRight"],
      12: ["mouthSmileLeft", "mouthSmileRight", "mouthStretchLeft", "mouthStretchRight"],
      13: ["mouthFunnel", "mouthLowerDownLeft", "mouthLowerDownRight"],
      14: ["mouthPucker", "mouthFunnel"]
    };
    function A(z, W) {
      return new Promise((D, Q) => {
        new La().load(
          z,
          (he) => {
            o = he.scene, W.add(o), l = [], o.traverse((ne) => {
              ne instanceof He && ne.morphTargetInfluences && l.push(ne);
            }), V(o), he.animations.length > 0 && (a = new Ca(o)), i("loaded"), D();
          },
          (he) => {
            if (he.total > 0) {
              const ne = he.loaded / he.total * 100;
              i("progress", ne);
            }
          },
          (he) => {
            i("error", he), Q(he);
          }
        );
      });
    }
    function V(z) {
      z.traverse((W) => {
        const D = W.name.toLowerCase();
        D.includes("spine") && !u && (u = W), D.includes("head") && !h && (h = W), (D.includes("leftshoulder") || D.includes("left_shoulder")) && (d = W), (D.includes("rightshoulder") || D.includes("right_shoulder")) && (m = W), (D.includes("leftelbow") || D.includes("left_elbow") || D.includes("leftforearm")) && (g = W), (D.includes("rightelbow") || D.includes("right_elbow") || D.includes("rightforearm")) && (_ = W);
      });
    }
    function J(z) {
      var ne, oe;
      if (!n.isSpeaking || n.visemes.length === 0) {
        se();
        return;
      }
      const W = n.currentTime;
      let D = 0;
      for (const xe of n.visemes)
        if (W >= xe.time && W < xe.time + xe.duration) {
          D = xe.viseme;
          break;
        }
      const Q = S[D] || [], ae = ((ne = n.animationConfig) == null ? void 0 : ne.lipSyncIntensity) || 0.5, he = ((oe = n.animationConfig) == null ? void 0 : oe.lipSyncSpeed) || 0.02;
      for (const xe of l)
        if (!(!xe.morphTargetDictionary || !xe.morphTargetInfluences))
          for (const [Me, Be] of Object.entries(xe.morphTargetDictionary)) {
            const B = Q.includes(Me) ? ae : 0, _t = c[Me] || 0, be = _t + (B - _t) * he;
            xe.morphTargetInfluences[Be] = be, c[Me] = be;
          }
    }
    function se(z) {
      var D;
      const W = ((D = n.animationConfig) == null ? void 0 : D.lipSyncSpeed) || 0.02;
      for (const Q of l)
        if (!(!Q.morphTargetDictionary || !Q.morphTargetInfluences)) {
          for (const [ae, he] of Object.entries(Q.morphTargetDictionary))
            if (ae.startsWith("mouth")) {
              const oe = (c[ae] || 0) * (1 - W);
              Q.morphTargetInfluences[he] = oe, c[ae] = oe;
            }
        }
    }
    function C(z, W) {
      const D = n.animationConfig || {}, Q = D.blinkSpeed || 0.25, ae = D.blinkIntervalMin || 1500, he = D.blinkIntervalMax || 3500;
      if (!p && W - f > y && (p = !0, E = 0, f = W, y = ae + Math.random() * (he - ae)), p) {
        E += Q;
        let ne = 0;
        E < 0.5 ? ne = E * 2 : ne = 1 - (E - 0.5) * 2;
        for (const oe of l) {
          if (!oe.morphTargetDictionary || !oe.morphTargetInfluences) continue;
          const xe = oe.morphTargetDictionary.eyeBlinkLeft, Me = oe.morphTargetDictionary.eyeBlinkRight;
          xe !== void 0 && (oe.morphTargetInfluences[xe] = ne), Me !== void 0 && (oe.morphTargetInfluences[Me] = ne);
        }
        E >= 1 && (p = !1);
      }
    }
    function P(z, W) {
      const D = n.animationConfig || {}, Q = D.eyeMoveSpeed || 0.12, ae = D.eyeMoveIntervalMin || 500, he = D.eyeMoveIntervalMax || 1500, ne = D.eyeMoveRange || 0.4;
      W - b > w && (T = {
        x: (Math.random() - 0.5) * ne,
        y: (Math.random() - 0.5) * ne * 0.5
      }, b = W, w = ae + Math.random() * (he - ae)), R.x += (T.x - R.x) * Q, R.y += (T.y - R.y) * Q;
      for (const oe of l) {
        if (!oe.morphTargetDictionary || !oe.morphTargetInfluences) continue;
        const xe = oe.morphTargetDictionary.eyeLookOutLeft, Me = oe.morphTargetDictionary.eyeLookOutRight, Be = oe.morphTargetDictionary.eyeLookUpLeft, B = oe.morphTargetDictionary.eyeLookDownLeft;
        R.x > 0 && Me !== void 0 && (oe.morphTargetInfluences[Me] = R.x), R.x < 0 && xe !== void 0 && (oe.morphTargetInfluences[xe] = -R.x), R.y > 0 && Be !== void 0 && (oe.morphTargetInfluences[Be] = R.y), R.y < 0 && B !== void 0 && (oe.morphTargetInfluences[B] = -R.y);
      }
    }
    function U(z, W) {
      const D = n.animationConfig || {}, Q = D.breathingSpeed || 0.4, ae = D.breathingIntensity || 0.015;
      G += z * Q;
      const he = Math.sin(G) * ae;
      u && (u.position.y += he * 0.01);
    }
    function X(z) {
      var D, Q, ae, he;
      const W = r();
      W.leftArm && d && W.leftArm.shoulderRotation && (d.rotation.x = W.leftArm.shoulderRotation.x, d.rotation.y = W.leftArm.shoulderRotation.y, d.rotation.z = W.leftArm.shoulderRotation.z), W.rightArm && m && W.rightArm.shoulderRotation && (m.rotation.x = W.rightArm.shoulderRotation.x, m.rotation.y = W.rightArm.shoulderRotation.y, m.rotation.z = W.rightArm.shoulderRotation.z), (D = W.leftArm) != null && D.elbowRotation && g && (g.rotation.x = W.leftArm.elbowRotation.x), (Q = W.rightArm) != null && Q.elbowRotation && _ && (_.rotation.x = W.rightArm.elbowRotation.x), (ae = W.head) != null && ae.rotation && h && (h.rotation.x = W.head.rotation.x, h.rotation.y = W.head.rotation.y, h.rotation.z = W.head.rotation.z), (he = W.body) != null && he.lean && u && (u.rotation.x = W.body.lean.x, u.rotation.z = W.body.lean.z);
    }
    function O(z, W) {
      o && (a && a.update(z), J(), C(z, W), P(z, W), U(z), X());
    }
    function $() {
      return o;
    }
    function Z() {
      o && o.traverse((z) => {
        var W, D;
        z instanceof He && ((W = z.geometry) == null || W.dispose(), Array.isArray(z.material) ? z.material.forEach((Q) => Q.dispose()) : (D = z.material) == null || D.dispose());
      }), a = null, l = [];
    }
    return e({
      loadModel: A,
      update: O,
      getModel: $,
      dispose: Z
    }), (z, W) => (et(), tt("div", Lx, [
      qh(z.$slots, "default", {}, void 0, !0)
    ]));
  }
}), po = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [n, i] of e)
    t[n] = i;
  return t;
}, gS = /* @__PURE__ */ po(Px, [["__scopeId", "data-v-bc74c771"]]), Ix = {
  key: 0,
  class: "liya-ai-env-vuejs-board liya-ai-env-vuejs-presentation-board"
}, Dx = ["src", "alt"], Ux = { class: "liya-ai-env-vuejs-presentation-board__info" }, Nx = {
  key: 1,
  class: "liya-ai-env-vuejs-loading"
}, Ox = { class: "liya-ai-env-vuejs-loading__progress" }, Fx = /* @__PURE__ */ Ys({
  __name: "ClassroomScene",
  props: {
    classroomModelUrl: { default: "" },
    avatarModelUrl: { default: "" },
    avatarPosition: { default: () => ({ x: 0, y: 0, z: 0 }) },
    cameraConfig: { default: () => ({
      position: { x: 0, y: 1.4, z: 4 },
      lookAt: { x: 0, y: 1.2, z: 0 },
      fov: 45
    }) },
    isSpeaking: { type: Boolean, default: !1 },
    visemes: { default: () => [] },
    gestures: { default: () => [] },
    currentTime: { default: 0 },
    animationConfig: { default: () => ({}) },
    presentationResult: { default: null }
  },
  emits: ["loaded", "error", "progress"],
  setup(s, { emit: e }) {
    const t = s, n = Fe(() => {
      var ue;
      return !!((ue = t.presentationResult) != null && ue.page_image_url);
    }), i = Fe(() => {
      var x;
      return (((x = t.presentationResult) == null ? void 0 : x.page_image_url) || "").replace(/^http:\/\//i, "https://");
    }), r = Fe(() => t.presentationResult ? `${t.presentationResult.presentation_title} — ${t.presentationResult.page_number}/${t.presentationResult.total_pages}` : ""), o = e, { getCurrentKeyframe: a, setGesturesFromApi: l } = Vh(), c = Ke(null), u = Ke(!0), h = Ke(0);
    let d = null, m = null, g = null, _ = null, f = null, p = null, E = null, y = null, T = [], R = {}, b = null, w = null, G = null, S = null, A = null, V = null, J = 0, se = !1, C = 0, P = 3e3, U = { x: 0, y: 0 }, X = { x: 0, y: 0 }, O = 0, $ = 2e3, Z = 0;
    const z = {
      0: [],
      1: ["mouthClose", "mouthPressLeft", "mouthPressRight"],
      2: ["mouthFunnel", "mouthLowerDownLeft", "mouthLowerDownRight"],
      3: ["mouthLowerDownLeft", "mouthLowerDownRight"],
      4: ["mouthLowerDownLeft", "mouthLowerDownRight"],
      5: ["mouthLowerDownLeft", "mouthLowerDownRight"],
      6: ["mouthFunnel", "mouthShrugUpper"],
      7: ["mouthSmileLeft", "mouthSmileRight"],
      8: ["mouthLowerDownLeft", "mouthLowerDownRight"],
      9: ["mouthLowerDownLeft", "mouthLowerDownRight"],
      10: ["mouthLowerDownLeft", "mouthLowerDownRight", "mouthUpperUpLeft", "mouthUpperUpRight"],
      11: ["mouthSmileLeft", "mouthSmileRight"],
      12: ["mouthSmileLeft", "mouthSmileRight", "mouthStretchLeft", "mouthStretchRight"],
      13: ["mouthFunnel", "mouthLowerDownLeft", "mouthLowerDownRight"],
      14: ["mouthPucker", "mouthFunnel"]
    };
    pn(() => t.gestures, (ue) => {
      ue && ue.length > 0 && l(ue);
    }, { deep: !0 }), pn(() => t.avatarModelUrl, (ue) => {
      ue && d && !E && ae(ue);
    });
    function W() {
      if (!c.value) return;
      d = new oy(), d.background = new Oe(1710638);
      const { position: ue, lookAt: x, fov: v } = t.cameraConfig, I = c.value.clientWidth / c.value.clientHeight;
      m = new Gt(v || 45, I, 0.1, 1e3), m.position.set(ue.x, ue.y, ue.z), m.lookAt(x.x, x.y, x.z), g = new Rh({
        antialias: !0,
        alpha: !0
      }), g.setSize(
        c.value.clientWidth,
        c.value.clientHeight
      ), g.setPixelRatio(Math.min(window.devicePixelRatio, 2)), g.outputColorSpace = mt, g.toneMapping = $u, g.toneMappingExposure = 1.2, g.shadowMap.enabled = !0, g.shadowMap.type = Yu, c.value.appendChild(g.domElement), D(), _ = new Uy(), Q(), window.addEventListener("resize", Ae), xe();
    }
    function D() {
      if (!d) return;
      const ue = new Iy(8951976, 0.7);
      d.add(ue);
      const x = new Ra(14740212, 1.1);
      x.position.set(2, 6, 3), x.castShadow = !0, x.shadow.mapSize.width = 2048, x.shadow.mapSize.height = 2048, x.shadow.camera.near = 0.5, x.shadow.camera.far = 50, x.shadow.camera.left = -10, x.shadow.camera.right = 10, x.shadow.camera.top = 8, x.shadow.camera.bottom = -4, x.shadow.bias = -1e-3, d.add(x);
      const v = new Ra(9478320, 0.5);
      v.position.set(-5, 3, 2), d.add(v);
      const I = new Oh(15791868, 1.1, 12, Math.PI / 5, 0.6, 1);
      I.position.set(0, 5.4, -1), I.target.position.set(0, 2.5, -3.9), d.add(I), d.add(I.target);
      const te = new Bs(54442, 0.35, 10, 2);
      te.position.set(-6, 1.5, -3), d.add(te);
      const Y = new Bs(54442, 0.35, 10, 2);
      Y.position.set(6, 1.5, -3), d.add(Y);
      const q = new Bs(47252, 0.25, 15, 2);
      q.position.set(0, 5.5, -2), d.add(q);
      const fe = new Bs(8427696, 0.3, 10, 2);
      fe.position.set(0, 0.2, -1), d.add(fe);
    }
    async function Q() {
      const ue = new La();
      let x = 0, v = 0;
      if (t.classroomModelUrl && v++, t.avatarModelUrl && v++, v === 0) {
        he(), u.value = !1, o("loaded");
        return;
      }
      try {
        t.classroomModelUrl ? await new Promise((I, te) => {
          ue.load(
            t.classroomModelUrl,
            (Y) => {
              p = Y.scene, p.traverse((q) => {
                q instanceof He && (q.castShadow = !0, q.receiveShadow = !0);
              }), d == null || d.add(p), x += 50, h.value = x, o("progress", x), I();
            },
            (Y) => {
              if (Y.total > 0) {
                const q = Y.loaded / Y.total * 50;
                h.value = q, o("progress", q);
              }
            },
            (Y) => te(Y)
          );
        }) : (he(), x += 50), t.avatarModelUrl && await new Promise((I, te) => {
          ue.load(
            t.avatarModelUrl,
            (Y) => {
              E = Y.scene;
              const q = t.avatarPosition;
              E.position.set(q.x, q.y, q.z), E.traverse((fe) => {
                fe instanceof He && (fe.castShadow = !0, fe.receiveShadow = !0, fe.morphTargetInfluences && T.push(fe));
              }), ne(E), Y.animations.length > 0 && (y = new Ca(E)), d == null || d.add(E), x += 50, h.value = x, o("progress", x), I();
            },
            (Y) => {
              if (Y.total > 0) {
                const q = 50 + Y.loaded / Y.total * 50;
                h.value = q, o("progress", q);
              }
            },
            (Y) => te(Y)
          );
        }), u.value = !1, o("loaded");
      } catch (I) {
        o("error", I), u.value = !1;
      }
    }
    async function ae(ue) {
      if (!d || E) return;
      const x = new La();
      try {
        await new Promise((v, I) => {
          x.load(
            ue,
            (te) => {
              E = te.scene, E.position.set(-1.8, 0, 0.8);
              const Y = t.cameraConfig.position, q = E.position;
              E.rotation.y = Math.atan2(
                Y.x - q.x,
                Y.z - q.z
              ), E.scale.set(1.1, 1.1, 1.1), E.traverse((fe) => {
                fe instanceof He && (fe.castShadow = !0, fe.receiveShadow = !0, fe.morphTargetInfluences && T.push(fe));
              }), ne(E), te.animations.length > 0 && (y = new Ca(E)), d.add(E), v();
            },
            void 0,
            (te) => {
              I(te);
            }
          );
        });
      } catch {
      }
    }
    function he() {
      if (!d) return;
      const ue = new Ht({
        color: 14212324,
        roughness: 0.45,
        metalness: 0.25
      }), x = new Ht({
        color: 13160668,
        roughness: 0.4,
        metalness: 0.3
      }), v = new Ht({
        color: 12635352,
        roughness: 0.04,
        metalness: 0.5
      }), I = new Ht({
        color: 13687008,
        roughness: 0.5,
        metalness: 0.2
      }), te = new Ht({
        color: 54442,
        emissive: 54442,
        emissiveIntensity: 0.6,
        roughness: 0.1,
        metalness: 0.3
      }), Y = new Ht({
        color: 47252,
        emissive: 47252,
        emissiveIntensity: 0.3,
        roughness: 0.15,
        metalness: 0.25
      }), q = new Ht({
        color: 7899288,
        roughness: 0.08,
        metalness: 0.5
      }), fe = new Ht({
        color: 13160668,
        roughness: 0.08,
        metalness: 0.45
      }), ce = new Ht({
        color: 13687012,
        roughness: 0.25,
        metalness: 0.3
      }), ye = new Zn(16, 12), Te = new He(ye, v);
      Te.rotation.x = -Math.PI / 2, Te.position.y = 0, Te.receiveShadow = !0, d.add(Te);
      const De = new He(
        new pt(12, 3e-3, 0.02),
        Y
      );
      De.position.set(0, 2e-3, -3.2), d.add(De);
      const re = new Zn(16, 6), je = new He(re, ue);
      je.position.set(0, 3, -4), je.receiveShadow = !0, d.add(je);
      const ie = new He(
        new pt(16, 1.5, 0.03),
        x
      );
      ie.position.set(0, 0.75, -3.97), d.add(ie);
      const ee = new Zn(10, 6), le = new He(ee, ue.clone());
      le.position.set(-8, 3, 1), le.rotation.y = Math.PI / 2, le.receiveShadow = !0, d.add(le);
      const pe = new He(
        new pt(14, 0.02, 0.015),
        te
      );
      pe.position.set(0, 5.1, -3.96), d.add(pe);
      const Ue = new He(
        new pt(14, 0.015, 0.015),
        te
      );
      Ue.position.set(0, 1.52, -3.96), d.add(Ue);
      const Ze = new He(
        new pt(0.015, 3.6, 0.015),
        Y
      );
      Ze.position.set(-7, 3.3, -3.96), d.add(Ze);
      const ut = Ze.clone();
      ut.position.set(7, 3.3, -3.96), d.add(ut);
      const Ve = new He(
        new pt(6.2, 3.4, 0.06),
        q
      );
      Ve.position.set(0, 2.85, -3.92), Ve.castShadow = !0, d.add(Ve);
      const me = new Zn(5.8, 3.1), L = new Ht({
        color: 16119280,
        emissive: 15790316,
        emissiveIntensity: 0.15,
        roughness: 0.05,
        metalness: 0.02
      }), _e = new He(me, L);
      _e.position.set(0, 2.85, -3.88), d.add(_e);
      const ve = new pt(6.25, 0.04, 0.08), Ce = new pt(0.04, 3.45, 0.08), Re = [
        { geo: ve, pos: [0, 4.575, -3.9] },
        { geo: ve, pos: [0, 1.125, -3.9] },
        { geo: Ce, pos: [-3.125, 2.85, -3.9] },
        { geo: Ce, pos: [3.125, 2.85, -3.9] }
      ];
      for (const dt of Re) {
        const Ut = new He(dt.geo, fe);
        Ut.position.set(dt.pos[0], dt.pos[1], dt.pos[2]), d.add(Ut);
      }
      const rt = new pt(6, 0.01, 0.01), ot = new pt(0.01, 3.2, 0.01), St = [
        { geo: rt, pos: [0, 4.42, -3.87] },
        { geo: rt, pos: [0, 1.28, -3.87] },
        { geo: ot, pos: [-2.98, 2.85, -3.87] },
        { geo: ot, pos: [2.98, 2.85, -3.87] }
      ];
      for (const dt of St) {
        const Ut = new He(dt.geo, Y);
        Ut.position.set(dt.pos[0], dt.pos[1], dt.pos[2]), d.add(Ut);
      }
      for (let dt = 0; dt < 3; dt++) {
        const Ut = new He(
          new pt(0.6, 2.5, 0.02),
          ce
        );
        Ut.position.set(-5.5 + dt * 0.75, 3, -3.97), d.add(Ut);
      }
      for (let dt = 0; dt < 3; dt++) {
        const Ut = new He(
          new pt(0.6, 2.5, 0.02),
          ce
        );
        Ut.position.set(4.75 + dt * 0.75, 3, -3.97), d.add(Ut);
      }
      const Pt = new Ht({
        color: 12109008,
        roughness: 0.08,
        metalness: 0.45
      }), nt = new He(
        new pt(1.8, 0.04, 0.7),
        Pt
      );
      nt.position.set(3.5, 0.75, -2.5), nt.castShadow = !0, nt.receiveShadow = !0, d.add(nt);
      const bt = new He(
        new pt(1.8, 8e-3, 8e-3),
        Y
      );
      bt.position.set(3.5, 0.73, -2.15), d.add(bt);
      const jt = new He(
        new to(0.04, 0.06, 0.73, 12),
        fe
      );
      jt.position.set(3.5, 0.365, -2.5), jt.castShadow = !0, d.add(jt);
      const Ss = new He(
        new to(0.25, 0.25, 0.02, 16),
        fe
      );
      Ss.position.set(3.5, 0.01, -2.5), d.add(Ss);
      const Ms = new He(
        new pt(5, 0.05, 3),
        x
      );
      Ms.position.set(-0.5, 0.025, -2.5), Ms.receiveShadow = !0, d.add(Ms);
      const si = new He(
        new pt(5, 0.01, 0.01),
        te
      );
      si.position.set(-0.5, 0.045, -1), d.add(si);
      const nr = new Zn(16, 12), Gn = new He(nr, I);
      Gn.rotation.x = Math.PI / 2, Gn.position.set(0, 5.6, 0), d.add(Gn);
      const As = new He(
        new pt(14, 0.01, 0.01),
        Y
      );
      As.position.set(0, 5.55, -3.96), d.add(As);
      const ir = new Ht({
        color: 13689072,
        emissive: 12638440,
        emissiveIntensity: 0.3,
        roughness: 0.1
      });
      for (let dt = -1; dt <= 1; dt += 2) {
        const Ut = new He(
          new pt(0.08, 0.01, 4),
          ir
        );
        Ut.position.set(dt * 5, 5.58, -1), d.add(Ut);
      }
      d.background = new Oe(8951976);
    }
    function ne(ue) {
      const x = [];
      ue.traverse((v) => {
        const I = v.name.toLowerCase();
        x.push(v.name), I.includes("spine") && !b && (b = v), I.includes("head") && !w && (w = v), I.includes("leftshoulder") && !G && (G = v), (I.includes("leftarm") || I.includes("left_arm") || I.includes("leftupperarm")) && !A && (A = v), I.includes("rightshoulder") && !S && (S = v), (I.includes("rightarm") || I.includes("right_arm") || I.includes("rightupperarm")) && !V && (V = v);
      });
    }
    function oe() {
    }
    function xe() {
      if (f = requestAnimationFrame(xe), !_ || !g || !d || !m) return;
      const ue = _.getDelta(), x = _.getElapsedTime() * 1e3;
      y && y.update(ue), E && (Me(), B(ue, x), _t(ue, x), be(ue), Ie()), g.render(d, m);
    }
    function Me(ue) {
      var q, fe;
      if (!t.isSpeaking || t.visemes.length === 0) {
        Be();
        return;
      }
      const x = t.currentTime;
      let v = 0;
      for (const ce of t.visemes)
        if (x >= ce.time && x < ce.time + ce.duration) {
          v = ce.viseme;
          break;
        }
      const I = z[v] || [], te = ((q = t.animationConfig) == null ? void 0 : q.lipSyncIntensity) || 0.5, Y = ((fe = t.animationConfig) == null ? void 0 : fe.lipSyncSpeed) || 0.02;
      for (const ce of T)
        if (!(!ce.morphTargetDictionary || !ce.morphTargetInfluences))
          for (const [ye, Te] of Object.entries(ce.morphTargetDictionary)) {
            const De = I.includes(ye) ? te : 0, re = R[ye] || 0, je = re + (De - re) * Y;
            ce.morphTargetInfluences[Te] = je, R[ye] = je;
          }
    }
    function Be(ue) {
      for (const v of T)
        if (!(!v.morphTargetDictionary || !v.morphTargetInfluences)) {
          for (const [I, te] of Object.entries(v.morphTargetDictionary))
            if (I.startsWith("mouth")) {
              const q = (R[I] || 0) * (1 - 0.02);
              v.morphTargetInfluences[te] = q, R[I] = q;
            }
        }
    }
    function B(ue, x) {
      if (!se && x - J > P && (se = !0, C = 0, J = x, P = 1500 + Math.random() * 2e3), se) {
        C += 0.25;
        let Y = 0;
        C < 0.5 ? Y = C * 2 : Y = 1 - (C - 0.5) * 2;
        for (const q of T) {
          if (!q.morphTargetDictionary || !q.morphTargetInfluences) continue;
          const fe = q.morphTargetDictionary.eyeBlinkLeft, ce = q.morphTargetDictionary.eyeBlinkRight;
          fe !== void 0 && (q.morphTargetInfluences[fe] = Y), ce !== void 0 && (q.morphTargetInfluences[ce] = Y);
        }
        C >= 1 && (se = !1);
      }
    }
    function _t(ue, x) {
      x - O > $ && (U = {
        x: (Math.random() - 0.5) * 0.4,
        y: (Math.random() - 0.5) * 0.4 * 0.5
      }, O = x, $ = 500 + Math.random() * 1e3), X.x += (U.x - X.x) * 0.12, X.y += (U.y - X.y) * 0.12;
      for (const q of T) {
        if (!q.morphTargetDictionary || !q.morphTargetInfluences) continue;
        const fe = q.morphTargetDictionary.eyeLookOutLeft, ce = q.morphTargetDictionary.eyeLookOutRight, ye = q.morphTargetDictionary.eyeLookUpLeft, Te = q.morphTargetDictionary.eyeLookDownLeft;
        X.x > 0 && ce !== void 0 && (q.morphTargetInfluences[ce] = X.x), X.x < 0 && fe !== void 0 && (q.morphTargetInfluences[fe] = -X.x), X.y > 0 && ye !== void 0 && (q.morphTargetInfluences[ye] = X.y), X.y < 0 && Te !== void 0 && (q.morphTargetInfluences[Te] = -X.y);
      }
    }
    function be(ue, x) {
      Z += ue * 0.4;
      const te = Math.sin(Z) * 0.015;
      b && (b.position.y += te * 0.01);
    }
    function Ie(ue, x) {
      var I, te;
      const v = a();
      (I = v.head) != null && I.rotation && w && w.rotation.set(
        v.head.rotation.x,
        v.head.rotation.y,
        v.head.rotation.z
      ), (te = v.body) != null && te.lean && b && (b.rotation.x = v.body.lean.x, b.rotation.z = v.body.lean.z);
    }
    function Ae() {
      if (!c.value || !m || !g) return;
      const ue = c.value.clientWidth, x = c.value.clientHeight;
      m.aspect = ue / x, m.updateProjectionMatrix(), g.setSize(ue, x);
    }
    function lt() {
      f && cancelAnimationFrame(f), window.removeEventListener("resize", Ae);
      const ue = (x) => {
        x.traverse((v) => {
          var I, te;
          v instanceof He && ((I = v.geometry) == null || I.dispose(), Array.isArray(v.material) ? v.material.forEach((Y) => Y.dispose()) : (te = v.material) == null || te.dispose());
        });
      };
      p && ue(p), E && ue(E), g == null || g.dispose(), d = null, m = null, g = null;
    }
    return Da(() => {
      W();
    }), Ks(() => {
      lt();
    }), (ue, x) => (et(), tt("div", {
      ref_key: "liyaAiEnvVuejsContainerRef",
      ref: c,
      class: "liya-ai-env-vuejs-classroom-scene"
    }, [
      n.value ? (et(), tt("div", Ix, [
        de("img", {
          src: i.value,
          alt: r.value,
          class: "liya-ai-env-vuejs-presentation-board__image"
        }, null, 8, Dx),
        de("div", Ux, yt(r.value), 1),
        x[0] || (x[0] = de("div", { class: "liya-ai-env-vuejs-board__frame" }, null, -1))
      ])) : en("", !0),
      u.value ? (et(), tt("div", Nx, [
        x[1] || (x[1] = de("div", { class: "liya-ai-env-vuejs-loading__spinner" }, null, -1)),
        x[2] || (x[2] = de("p", { class: "liya-ai-env-vuejs-loading__text" }, "Ortam yükleniyor...", -1)),
        de("div", Ox, [
          de("div", {
            class: "liya-ai-env-vuejs-loading__progress-bar",
            style: Yh({ width: `${h.value}%` })
          }, null, 4)
        ])
      ])) : en("", !0)
    ], 512));
  }
}), zh = /* @__PURE__ */ po(Fx, [["__scopeId", "data-v-228a7272"]]), Qe = Ke({
  isOpen: !1,
  isLoading: !0,
  isReady: !1,
  isSpeaking: !1,
  isListening: !1,
  isProcessing: !1,
  currentMessage: "",
  error: null,
  loadProgress: 0
}), Xt = Ke([]), mu = Ke(null), Ns = Ke([]), oa = Ke([]), $i = Ke(0), aa = Ke(null), la = Ke(null);
let fn = null, On = null, gu = 0;
function kh() {
  const s = Fe(() => Qe.value.isOpen), e = Fe(() => Qe.value.isLoading), t = Fe(() => Qe.value.isReady), n = Fe(() => Qe.value.isSpeaking), i = Fe(() => Qe.value.isListening), r = Fe(() => Qe.value.isProcessing), o = Fe(() => Qe.value.currentMessage), a = Fe(() => Qe.value.error), l = Fe(() => Qe.value.loadProgress), c = Fe(() => Xt.value), u = Fe(() => Ns.value), h = Fe(() => oa.value), d = Fe(() => $i.value), m = Fe(() => aa.value);
  function g() {
    Qe.value.isOpen = !0;
  }
  function _() {
    S(), Qe.value.isOpen = !1, Qe.value.isSpeaking = !1, Qe.value.isListening = !1;
  }
  function f(P) {
    Qe.value.isLoading = P;
  }
  function p(P) {
    Qe.value.isReady = P, P && (Qe.value.isLoading = !1);
  }
  function E(P) {
    Qe.value.loadProgress = Math.min(100, Math.max(0, P));
  }
  function y(P) {
    Qe.value.error = P;
  }
  function T(P) {
    try {
      const U = JSON.parse(P);
      if (typeof (U == null ? void 0 : U.response) == "string")
        return U.response;
      if (typeof (U == null ? void 0 : U.answer) == "string")
        return U.answer;
    } catch {
      const U = P.match(/"(?:response|answer)"\s*:\s*"((?:[^"\\]|\\.)*)"/);
      if (U)
        try {
          return JSON.parse(`"${U[1]}"`);
        } catch {
          return U[1];
        }
    }
    return P;
  }
  async function R(P) {
    var X;
    if (!P.trim() || Qe.value.isProcessing) return;
    Qe.value.isProcessing = !0, Qe.value.currentMessage = P, Qe.value.error = null;
    const U = {
      id: `temp-user-${Date.now()}`,
      content: P.trim(),
      role: "user",
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    Xt.value.push(U);
    try {
      const O = await If(
        P,
        mu.value || void 0
      );
      if (O) {
        if (O.session_id && (mu.value = O.session_id), O.user_message) {
          const Z = Xt.value.findIndex((z) => z.id === U.id);
          Z !== -1 && (Xt.value[Z] = O.user_message);
        }
        if (O.assistant_message) {
          if (O.suggestions && O.suggestions.length > 0)
            try {
              const Z = JSON.parse(O.assistant_message.content);
              Z.suggestions || (Z.suggestions = O.suggestions), O.assistant_message.content = JSON.stringify(Z);
            } catch {
              O.assistant_message.content = JSON.stringify({
                response: O.assistant_message.content,
                suggestions: O.suggestions
              });
            }
          Xt.value.push(O.assistant_message);
        } else if (O.response) {
          let Z = O.response;
          O.suggestions && O.suggestions.length > 0 && (Z = JSON.stringify({
            response: O.response,
            suggestions: O.suggestions
          })), Xt.value.push({
            id: `msg-${Date.now()}`,
            content: Z,
            role: "assistant",
            created_at: (/* @__PURE__ */ new Date()).toISOString()
          });
        }
        if (O.presentation_result && O.presentation_result.success) {
          const Z = { ...O.presentation_result };
          if (Z.page_image_url)
            try {
              const z = _s(), W = z.apiUrl.replace(/\/$/, ""), D = Z.page_image_url.startsWith("http") ? Z.page_image_url : `${W}${Z.page_image_url}`, Q = D.includes("?") ? "&" : "?";
              Z.page_image_url = `${D}${Q}api_key=${z.apiKey}`;
            } catch {
            }
          aa.value = Z;
        }
        const $ = O.response || T(
          ((X = O.assistant_message) == null ? void 0 : X.content) || ""
        );
        $ && await b($);
      }
    } catch (O) {
      O instanceof Gu && O.code && (la.value = O.code), Qe.value.error = "Mesaj gönderilemedi", Xt.value = Xt.value.filter(($) => $.id !== U.id);
    } finally {
      Qe.value.isProcessing = !1, Qe.value.currentMessage = "";
    }
  }
  async function b(P) {
    try {
      const U = await Df(P, {
        include_audio: !0,
        include_gestures: !0
      });
      U && (Ns.value = U.visemes || [], oa.value = U.gestures || [], U.audio_base64 ? await w(U.audio_base64) : G(P));
    } catch {
      G(P);
    }
  }
  async function w(P) {
    try {
      const U = atob(P), X = new Uint8Array(U.length);
      for (let Z = 0; Z < U.length; Z++)
        X[Z] = U.charCodeAt(Z);
      fn || (fn = new AudioContext());
      const O = await fn.decodeAudioData(X.buffer);
      S(), On = fn.createBufferSource(), On.buffer = O, On.connect(fn.destination), Qe.value.isSpeaking = !0, gu = fn.currentTime;
      const $ = () => {
        Qe.value.isSpeaking && fn && ($i.value = fn.currentTime - gu, requestAnimationFrame($));
      };
      $(), On.onended = () => {
        Qe.value.isSpeaking = !1, $i.value = 0, Ns.value = [], oa.value = [];
      }, On.start();
    } catch {
      Qe.value.isSpeaking = !1;
    }
  }
  function G(P) {
    const U = P.length * 0.05, X = [];
    let O = 0;
    for (let z = 0; z < P.length; z++) {
      const W = P[z].toLowerCase();
      let D = 0;
      "aeiouäöü".includes(W) ? D = 10 + Math.floor(Math.random() * 5) : "bcdfghjklmnpqrstvwxyz".includes(W) && (D = 1 + Math.floor(Math.random() * 9)), X.push({ time: O, viseme: D, duration: 0.05 }), O += 0.05;
    }
    Ns.value = X, Qe.value.isSpeaking = !0, $i.value = 0;
    const $ = Date.now(), Z = () => {
      const z = (Date.now() - $) / 1e3;
      $i.value = z, z < U ? requestAnimationFrame(Z) : (Qe.value.isSpeaking = !1, Ns.value = []);
    };
    Z();
  }
  function S() {
    if (On) {
      try {
        On.stop(), On.disconnect();
      } catch {
      }
      On = null;
    }
    Qe.value.isSpeaking = !1, $i.value = 0;
  }
  function A(P) {
    Qe.value.isListening = P;
  }
  function V(P) {
    Xt.value.length === 0 && Xt.value.push({
      id: `welcome-${Date.now()}`,
      content: P,
      role: "assistant",
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  function J(P) {
    Xt.value.length > 0 && Xt.value[0].id.startsWith("welcome-") && (Xt.value[0] = { ...Xt.value[0], content: P });
  }
  function se(P) {
    aa.value = P;
  }
  function C() {
    S(), fn && (fn.close(), fn = null);
  }
  return {
    // State (readonly)
    state: vu(Qe),
    isOpen: s,
    isLoading: e,
    isReady: t,
    isSpeaking: n,
    isListening: i,
    isProcessing: r,
    currentMessage: o,
    error: a,
    loadProgress: l,
    messages: c,
    visemes: u,
    gestures: h,
    audioTime: d,
    currentPresentation: m,
    lastApiErrorCode: Fe(() => la.value),
    clearApiError: () => {
      la.value = null;
    },
    // Actions
    open: g,
    close: _,
    setLoading: f,
    setReady: p,
    setLoadProgress: E,
    setError: y,
    handleMessage: R,
    speakWithAvatar: b,
    stopAudio: S,
    setListening: A,
    addWelcomeMessage: V,
    updateWelcomeMessage: J,
    setPresentation: se,
    cleanup: C
  };
}
const fi = Ke(!1), ca = Ke(""), ua = Ke(!1);
let It = null;
function Hh() {
  const s = window.SpeechRecognition || window.webkitSpeechRecognition;
  ua.value = !!s;
  function e() {
    !s || It || (It = new s(), It.continuous = !1, It.interimResults = !1, It.lang = "tr-TR", It.onresult = (o) => {
      const a = o.results[o.results.length - 1];
      a.isFinal && (ca.value = a[0].transcript);
    }, It.onerror = (o) => {
      fi.value = !1;
    }, It.onend = () => {
      fi.value = !1;
    });
  }
  function t() {
    ua.value && (e(), It && !fi.value && (ca.value = "", fi.value = !0, It.start()));
  }
  function n() {
    It && fi.value && (It.stop(), fi.value = !1);
  }
  function i(o) {
    It && (It.lang = o);
  }
  function r() {
    It && (It.abort(), It = null);
  }
  return Ks(() => {
    r();
  }), {
    isRecording: Fe(() => fi.value),
    transcript: Fe(() => ca.value),
    isSupported: Fe(() => ua.value),
    startRecording: t,
    stopRecording: n,
    setLanguage: i,
    cleanup: r
  };
}
const Bx = { class: "liya-ai-env-vuejs-modal-container" }, Vx = { class: "liya-ai-env-vuejs-header" }, zx = { class: "liya-ai-env-vuejs-header__title" }, kx = { class: "liya-ai-env-vuejs-header__actions" }, Hx = ["title"], Gx = { class: "liya-ai-env-vuejs-header__lang-text" }, Wx = ["aria-label"], jx = { class: "liya-ai-env-vuejs-scene" }, Xx = {
  key: 0,
  class: "liya-ai-env-vuejs-access-loading"
}, qx = {
  key: 1,
  class: "liya-ai-env-vuejs-premium-overlay"
}, Yx = { class: "liya-ai-env-vuejs-premium-overlay__content" }, Kx = { class: "liya-ai-env-vuejs-premium-overlay__title" }, $x = { class: "liya-ai-env-vuejs-premium-overlay__text" }, Jx = {
  href: "https://liyalabs.com/pricing",
  target: "_blank",
  rel: "noopener",
  class: "liya-ai-env-vuejs-premium-overlay__btn"
}, Zx = {
  key: 0,
  class: "liya-ai-env-vuejs-glass-popup"
}, Qx = { class: "liya-ai-env-vuejs-glass-popup__card" }, eE = ["aria-label"], tE = { class: "liya-ai-env-vuejs-glass-popup__title" }, nE = { class: "liya-ai-env-vuejs-glass-popup__text" }, iE = { class: "liya-ai-env-vuejs-status-indicator__text" }, sE = ["title"], rE = ["title"], oE = { class: "liya-ai-env-vuejs-controls" }, aE = { class: "liya-ai-env-vuejs-controls__label" }, lE = ["disabled", "aria-label"], cE = {
  key: 0,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "32",
  height: "32"
}, uE = {
  key: 1,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "32",
  height: "32"
}, hE = { class: "liya-ai-env-vuejs-chat-panel" }, dE = { class: "liya-ai-env-vuejs-chat-panel__role" }, fE = {
  key: 0,
  class: "liya-ai-env-vuejs-chat-panel__suggestions"
}, pE = ["onClick"], mE = {
  key: 0,
  class: "liya-ai-env-vuejs-chat-panel__empty"
}, gE = ["placeholder", "disabled"], _E = ["disabled"], _u = 3e3, vE = /* @__PURE__ */ Ys({
  __name: "EnvironmentModal",
  props: {
    isOpen: { type: Boolean, default: !1 },
    showBackButton: { type: Boolean, default: !1 },
    showCloseButton: { type: Boolean, default: !0 },
    classroomModelUrl: { default: "" },
    avatarModelUrl: { default: "" },
    avatarPosition: { default: () => ({ x: 0, y: 0, z: 0 }) },
    cameraConfig: { default: () => ({
      position: { x: 0, y: 1.4, z: 4 },
      lookAt: { x: 0, y: 1.2, z: 0 },
      fov: 45
    }) },
    welcomeMessage: { default: "" },
    enableGestures: { type: Boolean, default: !0 },
    enableSubtitles: { type: Boolean, default: !0 },
    assistantName: { default: "" },
    theme: { default: () => ({}) }
  },
  emits: ["close", "back", "opened", "closed", "loaded", "message-sent", "message-received", "speaking-started", "speaking-ended", "error"],
  setup(s, { emit: e }) {
    const t = s, n = e, {
      isSpeaking: i,
      isProcessing: r,
      messages: o,
      visemes: a,
      gestures: l,
      audioTime: c,
      currentPresentation: u,
      lastApiErrorCode: h,
      clearApiError: d,
      handleMessage: m,
      speakWithAvatar: g,
      stopAudio: _,
      setListening: f,
      addWelcomeMessage: p,
      updateWelcomeMessage: E,
      setPresentation: y,
      cleanup: T
    } = kh(), R = Ke(!1), { t: b, locale: w, setLocale: G } = za();
    function S() {
      const ie = w.value === "tr" ? "en" : "tr";
      G(ie);
    }
    const {
      isRecording: A,
      transcript: V,
      isSupported: J,
      startRecording: se,
      stopRecording: C
    } = Hh(), P = Fe(() => t.welcomeMessage || b.value.chat.emptyWelcome), U = Fe(() => t.assistantName || "AI Assistant"), X = Ke(t.avatarModelUrl), O = Ke(t.classroomModelUrl), $ = Ke(!1), Z = Ke(!0), z = Ke(null), W = Fe(() => z.value !== null), D = Fe(() => z.value ? z.value.code === "PREMIUM_PLUS_REQUIRED" ? b.value.premium.upgradePremiumPlus : b.value.premium.upgradePremium : "");
    function Q(ie) {
      return ie && ie.replace(/^http:\/\//i, "https://");
    }
    const ae = Fe(() => b.value.welcomeSuggestions), he = Ke("");
    let ne = 0;
    const oe = Fe(() => i.value ? "speaking" : r.value ? "preparing" : A.value ? "listening" : "idle"), xe = Fe(() => b.value.preparingMessages), Me = Ke(0), Be = Ke(0);
    let B = null;
    pn(r, (ie) => {
      ie ? (Me.value = 0, Be.value = Date.now(), B = setInterval(() => {
        Date.now() - Be.value > 8e3 && (Me.value = (Me.value + 1) % xe.value.length);
      }, 4e3)) : (B && (clearInterval(B), B = null), Me.value = 0);
    });
    const _t = Fe(() => {
      switch (oe.value) {
        case "listening":
          return b.value.status.listening;
        case "preparing":
          return xe.value[Me.value];
        case "speaking":
          return b.value.status.speaking;
        default:
          return b.value.status.ready;
      }
    });
    function be() {
      const ie = Date.now();
      ie - ne < _u || (ne = ie, A.value && (C(), f(!1)));
    }
    function Ie() {
      const ie = Date.now();
      if (ie - ne < _u) return;
      ne = ie, i.value && _();
      const ee = o.value.filter((le) => le.role === "assistant").pop();
      if (ee) {
        let le = ee.content;
        try {
          const pe = JSON.parse(ee.content);
          typeof (pe == null ? void 0 : pe.response) == "string" ? le = pe.response : typeof (pe == null ? void 0 : pe.answer) == "string" && (le = pe.answer);
        } catch {
          const pe = ee.content.match(/"(?:response|answer)"\s*:\s*"((?:[^"\\]|\\.)*)"/);
          if (pe)
            try {
              le = JSON.parse(`"${pe[1]}"`);
            } catch {
              le = pe[1];
            }
        }
        g(le);
      }
    }
    function Ae(ie) {
      try {
        const ee = JSON.parse(ie);
        if (typeof (ee == null ? void 0 : ee.response) == "string")
          return ee.response;
        if (typeof (ee == null ? void 0 : ee.answer) == "string")
          return ee.answer;
      } catch {
        const ee = ie.match(/"(?:response|answer)"\s*:\s*"((?:[^"\\]|\\.)*)"/);
        if (ee)
          try {
            return JSON.parse(`"${ee[1]}"`);
          } catch {
            return ee[1];
          }
      }
      return ie;
    }
    function lt(ie) {
      try {
        const ee = JSON.parse(ie);
        if (Array.isArray(ee == null ? void 0 : ee.suggestions))
          return ee.suggestions;
      } catch {
        const ee = ie.match(/"suggestions"\s*:\s*\[((?:[^\[\]])*?)\]/);
        if (ee)
          try {
            return JSON.parse(`[${ee[1]}]`);
          } catch {
          }
      }
      return [];
    }
    const ue = Fe(() => {
      const ie = ae.value, ee = o.value.map((le) => {
        const pe = le.role === "assistant" ? lt(le.content) : [];
        return {
          role: le.role,
          content: Ae(le.content),
          suggestions: pe
        };
      });
      return ee.length === 1 && ee[0].role === "assistant" && ee[0].suggestions.length === 0 && (ee[0].suggestions = ie), ee;
    }), x = Ke(null);
    function v() {
      Zh(() => {
        x.value && (x.value.scrollTop = x.value.scrollHeight);
      });
    }
    pn(() => o.value.length, () => {
      v();
    });
    function I(ie) {
      Te(ie), v();
    }
    async function te() {
      const ie = he.value.trim();
      ie && (he.value = "", v(), await Te(ie));
    }
    async function Y() {
      Z.value = !0, z.value = null;
      try {
        (await Xu()).has_avatar_access || (z.value = {
          code: "FEATURE_NOT_AVAILABLE",
          message: b.value.premium.upgradePremium
        });
      } catch (ie) {
        const ee = (ie == null ? void 0 : ie.code) || "FEATURE_NOT_AVAILABLE", le = (ie == null ? void 0 : ie.message) || "";
        ee === "FEATURE_NOT_AVAILABLE" || ee === "UPGRADE_REQUIRED" || ee === "PREMIUM_PLUS_REQUIRED" || le.includes("Premium") || le.includes("upgrade") ? z.value = {
          code: ee,
          message: le
        } : z.value = {
          code: "FEATURE_NOT_AVAILABLE",
          message: b.value.premium.upgradePremium
        };
      } finally {
        Z.value = !1;
      }
    }
    async function q() {
      if (!X.value) {
        $.value = !0;
        try {
          const ie = await Wu();
          X.value = Q(ie.model_url);
        } catch {
        } finally {
          $.value = !1;
        }
      }
    }
    async function fe() {
      if (!O.value)
        try {
          const ie = await ju();
          O.value = Q(ie.model_url);
        } catch {
        }
    }
    pn(V, (ie) => {
      ie && !A.value && Te(ie);
    }), pn(i, (ie) => {
      n(ie ? "speaking-started" : "speaking-ended");
    });
    function ce(ie) {
      if (!ie) return null;
      try {
        const ee = _s(), le = ie.includes("?") ? "&" : "?";
        return `${ie}${le}api_key=${ee.apiKey}`;
      } catch {
        return ie;
      }
    }
    async function ye() {
      try {
        const ie = await Uf();
        if (ie.length > 0) {
          const ee = ie[0];
          if (ee.pages && ee.pages.length > 0) {
            const le = ee.pages[0];
            y({
              success: !0,
              action: "show_page",
              presentation_id: ee.id,
              presentation_title: ee.title,
              page_number: le.page_number,
              page_title: le.title,
              page_image_url: ce(le.image_url),
              total_pages: ee.total_pages,
              reason: "initial_load"
            });
          }
        }
      } catch {
      }
    }
    pn(() => t.isOpen, async (ie) => {
      ie ? (await Y(), W.value || (await Promise.all([
        q(),
        fe(),
        ye()
      ]), !R.value && P.value && (R.value = !0, p(P.value), setTimeout(() => {
        g(P.value);
      }, 500))), n("opened")) : n("closed");
    }, { immediate: !0 }), pn(w, () => {
      E(P.value), _(), setTimeout(() => {
        g(P.value);
      }, 300);
    });
    async function Te(ie) {
      n("message-sent", ie), await m(ie);
      const ee = o.value[o.value.length - 1];
      ee && ee.role === "assistant" && n("message-received", ee.content);
    }
    function De() {
      A.value ? (C(), f(!1)) : (se(), f(!0));
    }
    function re() {
      T(), n("close");
    }
    function je(ie) {
      ie.key === "Escape" && re();
    }
    return Da(() => {
      document.addEventListener("keydown", je);
    }), Ks(() => {
      document.removeEventListener("keydown", je), T();
    }), (ie, ee) => (et(), yu(Kh, { to: "body" }, [
      Or(il, { name: "liya-ai-env-vuejs-modal" }, {
        default: sl(() => [
          s.isOpen ? (et(), tt("div", {
            key: 0,
            class: "liya-ai-env-vuejs-modal-overlay",
            onClick: rl(re, ["self"])
          }, [
            de("div", Bx, [
              de("header", Vx, [
                de("div", zx, [
                  de("div", {
                    class: vi(["liya-ai-env-vuejs-status-dot", { "liya-ai-env-vuejs-status-dot--speaking": Se(i) }])
                  }, null, 2),
                  de("span", null, yt(U.value), 1)
                ]),
                de("div", kx, [
                  de("button", {
                    class: "liya-ai-env-vuejs-header__lang-btn",
                    onClick: S,
                    title: Se(w) === "tr" ? "Switch to English" : "Türkçe'ye geç"
                  }, [
                    de("span", Gx, yt(Se(w) === "tr" ? "EN" : "TR"), 1)
                  ], 8, Hx),
                  s.showCloseButton ? (et(), tt("button", {
                    key: 0,
                    class: "liya-ai-env-vuejs-header__close-btn",
                    onClick: re,
                    "aria-label": Se(b).controls.close
                  }, [...ee[4] || (ee[4] = [
                    de("svg", {
                      viewBox: "0 0 24 24",
                      fill: "currentColor",
                      width: "24",
                      height: "24"
                    }, [
                      de("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
                    ], -1)
                  ])], 8, Wx)) : en("", !0)
                ])
              ]),
              de("div", jx, [
                Z.value ? (et(), tt("div", Xx, [...ee[5] || (ee[5] = [
                  de("div", { class: "liya-ai-env-vuejs-access-loading__spinner" }, null, -1)
                ])])) : W.value ? (et(), tt("div", qx, [
                  de("div", Yx, [
                    ee[7] || (ee[7] = de("div", { class: "liya-ai-env-vuejs-premium-overlay__icon" }, [
                      de("svg", {
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        width: "48",
                        height: "48"
                      }, [
                        de("path", { d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" })
                      ])
                    ], -1)),
                    de("h3", Kx, yt(Se(b).premium.title), 1),
                    de("p", $x, yt(D.value), 1),
                    de("a", Jx, [
                      ee[6] || (ee[6] = de("svg", {
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        width: "16",
                        height: "16"
                      }, [
                        de("path", { d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" })
                      ], -1)),
                      xu(" " + yt(Se(b).premium.viewPlans), 1)
                    ])
                  ])
                ])) : (et(), tt(Fr, { key: 2 }, [
                  Or(zh, {
                    "classroom-model-url": O.value,
                    "avatar-model-url": X.value,
                    "avatar-position": s.avatarPosition,
                    "camera-config": s.cameraConfig,
                    "is-speaking": Se(i),
                    visemes: Se(a),
                    gestures: s.enableGestures ? Se(l) : [],
                    "current-time": Se(c),
                    "presentation-result": Se(u),
                    onLoaded: ee[0] || (ee[0] = (le) => ie.$emit("opened")),
                    onError: ee[1] || (ee[1] = (le) => ie.$emit("error", le))
                  }, null, 8, ["classroom-model-url", "avatar-model-url", "avatar-position", "camera-config", "is-speaking", "visemes", "gestures", "current-time", "presentation-result"]),
                  Or(il, { name: "liya-ai-env-vuejs-glass-fade" }, {
                    default: sl(() => [
                      Se(h) ? (et(), tt("div", Zx, [
                        de("div", Qx, [
                          de("button", {
                            class: "liya-ai-env-vuejs-glass-popup__close",
                            onClick: ee[2] || (ee[2] = //@ts-ignore
                            (...le) => Se(d) && Se(d)(...le)),
                            "aria-label": Se(b).controls.close
                          }, [...ee[8] || (ee[8] = [
                            de("svg", {
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              width: "18",
                              height: "18"
                            }, [
                              de("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
                            ], -1)
                          ])], 8, eE),
                          ee[9] || (ee[9] = de("div", { class: "liya-ai-env-vuejs-glass-popup__icon" }, "⚠️", -1)),
                          de("h4", tE, yt(Se(b).errors.problemOccurred), 1),
                          de("p", nE, yt(Se(b).errors.tryAgainLater), 1)
                        ])
                      ])) : en("", !0)
                    ]),
                    _: 1
                  }),
                  de("div", {
                    class: vi(["liya-ai-env-vuejs-status-indicator", `liya-ai-env-vuejs-status-indicator--${oe.value}`])
                  }, [
                    ee[12] || (ee[12] = de("span", { class: "liya-ai-env-vuejs-status-indicator__dot" }, null, -1)),
                    de("span", iE, yt(_t.value), 1),
                    oe.value !== "idle" ? (et(), tt("button", {
                      key: 0,
                      class: "liya-ai-env-vuejs-status-indicator__btn",
                      onClick: be,
                      title: Se(b).controls.cancel
                    }, [...ee[10] || (ee[10] = [
                      de("svg", {
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        width: "20",
                        height: "20"
                      }, [
                        de("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
                      ], -1)
                    ])], 8, sE)) : en("", !0),
                    oe.value === "idle" && Se(o).length > 0 ? (et(), tt("button", {
                      key: 1,
                      class: "liya-ai-env-vuejs-status-indicator__btn",
                      onClick: Ie,
                      title: Se(b).controls.replay
                    }, [...ee[11] || (ee[11] = [
                      de("svg", {
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        width: "20",
                        height: "20"
                      }, [
                        de("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })
                      ], -1)
                    ])], 8, rE)) : en("", !0)
                  ], 2),
                  de("div", oE, [
                    de("p", aE, yt(Se(b).controls.pressAndSpeak), 1),
                    Se(J) ? (et(), tt("button", {
                      key: 0,
                      class: vi(["liya-ai-env-vuejs-controls__mic", {
                        "liya-ai-env-vuejs-controls__mic--active": Se(A),
                        "liya-ai-env-vuejs-controls__mic--disabled": Se(r) || Se(i)
                      }]),
                      disabled: Se(r) || Se(i),
                      onClick: De,
                      "aria-label": Se(A) ? Se(b).voice.stopRecording : Se(b).voice.startRecording
                    }, [
                      Se(A) ? (et(), tt("svg", uE, [...ee[14] || (ee[14] = [
                        de("path", { d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" }, null, -1),
                        de("path", { d: "M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" }, null, -1)
                      ])])) : (et(), tt("svg", cE, [...ee[13] || (ee[13] = [
                        de("path", { d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" }, null, -1)
                      ])]))
                    ], 10, lE)) : en("", !0)
                  ]),
                  de("div", hE, [
                    de("div", {
                      class: "liya-ai-env-vuejs-chat-panel__messages",
                      ref_key: "liyaAiEnvVuejsMessagesRef",
                      ref: x
                    }, [
                      (et(!0), tt(Fr, null, ol(ue.value, (le, pe) => (et(), tt("div", {
                        key: pe,
                        class: vi(["liya-ai-env-vuejs-chat-panel__message", {
                          "liya-ai-env-vuejs-chat-panel__message--user": le.role === "user",
                          "liya-ai-env-vuejs-chat-panel__message--assistant": le.role === "assistant"
                        }])
                      }, [
                        de("span", dE, yt(le.role === "user" ? Se(b).chat.userRole : U.value), 1),
                        de("p", null, yt(le.content), 1),
                        le.suggestions.length > 0 ? (et(), tt("div", fE, [
                          (et(!0), tt(Fr, null, ol(le.suggestions, (Ue, Ze) => (et(), tt("button", {
                            key: Ze,
                            class: "liya-ai-env-vuejs-chat-panel__suggestion",
                            onClick: (ut) => I(Ue)
                          }, yt(Ue), 9, pE))), 128))
                        ])) : en("", !0)
                      ], 2))), 128)),
                      ue.value.length === 0 ? (et(), tt("div", mE, yt(P.value), 1)) : en("", !0)
                    ], 512),
                    de("form", {
                      class: "liya-ai-env-vuejs-chat-panel__input-form",
                      onSubmit: rl(te, ["prevent"])
                    }, [
                      $h(de("input", {
                        "onUpdate:modelValue": ee[3] || (ee[3] = (le) => he.value = le),
                        type: "text",
                        class: "liya-ai-env-vuejs-chat-panel__input",
                        placeholder: W.value ? Se(b).chat.premiumRequired : Se(b).chat.placeholder,
                        disabled: Se(r) || Se(i) || W.value
                      }, null, 8, gE), [
                        [Jh, he.value]
                      ]),
                      de("button", {
                        type: "submit",
                        class: "liya-ai-env-vuejs-chat-panel__send-btn",
                        disabled: !he.value.trim() || Se(r) || Se(i) || W.value
                      }, [...ee[15] || (ee[15] = [
                        de("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "24",
                          height: "24"
                        }, [
                          de("path", { d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" })
                        ], -1)
                      ])], 8, _E)
                    ], 32)
                  ])
                ], 64))
              ])
            ])
          ])) : en("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), yE = /* @__PURE__ */ po(vE, [["__scopeId", "data-v-c1ab78c0"]]), xE = { class: "liya-ai-env-vuejs-standalone-container" }, EE = { class: "liya-ai-env-vuejs-header" }, SE = { class: "liya-ai-env-vuejs-header__left" }, ME = ["aria-label"], AE = { class: "liya-ai-env-vuejs-header__title" }, TE = { class: "liya-ai-env-vuejs-header__right" }, bE = ["title"], wE = { class: "liya-ai-env-vuejs-header__lang-text" }, RE = { class: "liya-ai-env-vuejs-header__brand" }, CE = { class: "liya-ai-env-vuejs-scene" }, LE = {
  key: 0,
  class: "liya-ai-env-vuejs-access-loading"
}, PE = {
  key: 1,
  class: "liya-ai-env-vuejs-premium-overlay"
}, IE = { class: "liya-ai-env-vuejs-premium-overlay__content" }, DE = { class: "liya-ai-env-vuejs-premium-overlay__title" }, UE = { class: "liya-ai-env-vuejs-premium-overlay__text" }, NE = {
  href: "https://liyalabs.com/pricing",
  target: "_blank",
  rel: "noopener",
  class: "liya-ai-env-vuejs-premium-overlay__btn"
}, OE = {
  key: 0,
  class: "liya-ai-env-vuejs-subtitle"
}, FE = {
  key: 0,
  class: "liya-ai-env-vuejs-thinking-dots"
}, BE = { class: "liya-ai-env-vuejs-controls" }, VE = ["disabled", "aria-label"], zE = {
  key: 0,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "32",
  height: "32"
}, kE = {
  key: 1,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "32",
  height: "32"
}, HE = { class: "liya-ai-env-vuejs-controls__hint" }, GE = /* @__PURE__ */ Ys({
  __name: "EnvironmentStandalone",
  props: {
    showBackButton: { type: Boolean, default: !0 },
    classroomModelUrl: { default: "" },
    avatarModelUrl: { default: "" },
    avatarPosition: { default: () => ({ x: 0, y: 0, z: 0 }) },
    cameraConfig: { default: () => ({
      position: { x: 0, y: 1.4, z: 4 },
      lookAt: { x: 0, y: 1.2, z: 0 },
      fov: 45
    }) },
    welcomeMessage: { default: "" },
    enableGestures: { type: Boolean, default: !0 },
    enableSubtitles: { type: Boolean, default: !0 },
    assistantName: { default: "" },
    theme: { default: () => ({}) }
  },
  emits: ["back", "message-sent", "message-received", "speaking-started", "speaking-ended", "loaded", "error"],
  setup(s, { emit: e }) {
    const t = s, n = e, {
      isSpeaking: i,
      isProcessing: r,
      messages: o,
      visemes: a,
      gestures: l,
      audioTime: c,
      currentPresentation: u,
      handleMessage: h,
      speakWithAvatar: d,
      addWelcomeMessage: m,
      updateWelcomeMessage: g,
      setListening: _,
      cleanup: f
    } = kh(), p = Ke(!1), { t: E, locale: y, setLocale: T } = za();
    function R() {
      const ne = y.value === "tr" ? "en" : "tr";
      T(ne);
    }
    function b(ne) {
      return ne && ne.replace(/^http:\/\//i, "https://");
    }
    const {
      isRecording: w,
      transcript: G,
      isSupported: S,
      startRecording: A,
      stopRecording: V
    } = Hh(), J = Fe(() => t.welcomeMessage || E.value.chat.emptyWelcome), se = Fe(() => t.assistantName || "AI Assistant"), C = Ke(t.avatarModelUrl), P = Ke(t.classroomModelUrl), U = Ke(!0), X = Ke(null), O = Fe(() => X.value !== null), $ = Fe(() => X.value ? X.value.code === "PREMIUM_PLUS_REQUIRED" ? E.value.premium.upgradePremiumPlus : E.value.premium.upgradePremium : "");
    async function Z() {
      U.value = !0, X.value = null;
      try {
        (await Xu()).has_avatar_access || (X.value = {
          code: "FEATURE_NOT_AVAILABLE",
          message: E.value.premium.upgradePremium
        });
      } catch (ne) {
        const oe = (ne == null ? void 0 : ne.code) || "FEATURE_NOT_AVAILABLE", xe = (ne == null ? void 0 : ne.message) || "";
        oe === "FEATURE_NOT_AVAILABLE" || oe === "UPGRADE_REQUIRED" || oe === "PREMIUM_PLUS_REQUIRED" || xe.includes("Premium") || xe.includes("upgrade") ? X.value = {
          code: oe,
          message: xe
        } : X.value = {
          code: "FEATURE_NOT_AVAILABLE",
          message: E.value.premium.upgradePremium
        };
      } finally {
        U.value = !1;
      }
    }
    async function z() {
      if (!C.value)
        try {
          const ne = await Wu();
          C.value = b(ne.model_url);
        } catch {
        }
    }
    async function W() {
      if (!P.value)
        try {
          const ne = await ju();
          P.value = b(ne.model_url);
        } catch {
        }
    }
    Da(async () => {
      await Z(), O.value || (await Promise.all([
        z(),
        W()
      ]), !p.value && J.value && (p.value = !0, m(J.value), setTimeout(() => {
        d(J.value);
      }, 500)));
    }), pn(G, (ne) => {
      ne && !w.value && D(ne);
    }), pn(i, (ne) => {
      n(ne ? "speaking-started" : "speaking-ended");
    }), pn(y, () => {
      g(J.value), f(), setTimeout(() => {
        d(J.value);
      }, 300);
    });
    async function D(ne) {
      n("message-sent", ne), await h(ne);
      const oe = o.value[o.value.length - 1];
      oe && oe.role === "assistant" && n("message-received", oe.content);
    }
    function Q() {
      w.value ? (V(), _(!1)) : (A(), _(!0));
    }
    function ae() {
      f(), n("back");
    }
    function he() {
      var ne;
      return o.value.length === 0 ? J.value : ((ne = o.value[o.value.length - 1]) == null ? void 0 : ne.content) || "";
    }
    return Ks(() => {
      f();
    }), (ne, oe) => (et(), tt("div", xE, [
      de("header", EE, [
        de("div", SE, [
          s.showBackButton ? (et(), tt("button", {
            key: 0,
            class: "liya-ai-env-vuejs-header__back-btn",
            onClick: ae,
            "aria-label": Se(E).controls.back
          }, [...oe[2] || (oe[2] = [
            de("svg", {
              viewBox: "0 0 24 24",
              fill: "currentColor",
              width: "24",
              height: "24"
            }, [
              de("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" })
            ], -1)
          ])], 8, ME)) : en("", !0),
          de("div", AE, [
            de("div", {
              class: vi(["liya-ai-env-vuejs-status-dot", { "liya-ai-env-vuejs-status-dot--speaking": Se(i) }])
            }, null, 2),
            de("span", null, yt(se.value), 1)
          ])
        ]),
        de("div", TE, [
          de("button", {
            class: "liya-ai-env-vuejs-header__lang-btn",
            onClick: R,
            title: Se(y) === "tr" ? "Switch to English" : "Türkçe'ye geç"
          }, [
            de("span", wE, yt(Se(y) === "tr" ? "EN" : "TR"), 1)
          ], 8, bE),
          de("div", RE, yt(Se(E).branding.environmentTitle), 1)
        ])
      ]),
      de("div", CE, [
        U.value ? (et(), tt("div", LE, [...oe[3] || (oe[3] = [
          de("div", { class: "liya-ai-env-vuejs-access-loading__spinner" }, null, -1)
        ])])) : O.value ? (et(), tt("div", PE, [
          de("div", IE, [
            oe[5] || (oe[5] = de("div", { class: "liya-ai-env-vuejs-premium-overlay__icon" }, [
              de("svg", {
                viewBox: "0 0 24 24",
                fill: "currentColor",
                width: "48",
                height: "48"
              }, [
                de("path", { d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" })
              ])
            ], -1)),
            de("h3", DE, yt(Se(E).premium.title), 1),
            de("p", UE, yt($.value), 1),
            de("a", NE, [
              oe[4] || (oe[4] = de("svg", {
                viewBox: "0 0 24 24",
                fill: "currentColor",
                width: "16",
                height: "16"
              }, [
                de("path", { d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" })
              ], -1)),
              xu(" " + yt(Se(E).premium.viewPlans), 1)
            ])
          ])
        ])) : (et(), tt(Fr, { key: 2 }, [
          Or(zh, {
            "classroom-model-url": P.value,
            "avatar-model-url": C.value,
            "avatar-position": s.avatarPosition,
            "camera-config": s.cameraConfig,
            "is-speaking": Se(i),
            visemes: Se(a),
            gestures: s.enableGestures ? Se(l) : [],
            "current-time": Se(c),
            "presentation-result": Se(u),
            onLoaded: oe[0] || (oe[0] = (xe) => ne.$emit("loaded")),
            onError: oe[1] || (oe[1] = (xe) => ne.$emit("error", xe))
          }, null, 8, ["classroom-model-url", "avatar-model-url", "avatar-position", "camera-config", "is-speaking", "visemes", "gestures", "current-time", "presentation-result"]),
          s.enableSubtitles ? (et(), tt("div", OE, [
            Se(r) ? (et(), tt("div", FE, [...oe[6] || (oe[6] = [
              de("span", { class: "liya-ai-env-vuejs-thinking-dot" }, null, -1),
              de("span", { class: "liya-ai-env-vuejs-thinking-dot" }, null, -1),
              de("span", { class: "liya-ai-env-vuejs-thinking-dot" }, null, -1)
            ])])) : (et(), tt("p", {
              key: 1,
              class: vi(["liya-ai-env-vuejs-subtitle__text", { "liya-ai-env-vuejs-subtitle__welcome": Se(o).length === 0 }])
            }, yt(he()), 3))
          ])) : en("", !0),
          de("div", BE, [
            Se(S) ? (et(), tt("button", {
              key: 0,
              class: vi(["liya-ai-env-vuejs-controls__mic", {
                "liya-ai-env-vuejs-controls__mic--active": Se(w),
                "liya-ai-env-vuejs-controls__mic--disabled": Se(r) || Se(i)
              }]),
              disabled: Se(r) || Se(i),
              onClick: Q,
              "aria-label": Se(w) ? Se(E).voice.stopRecording : Se(E).voice.startRecording
            }, [
              Se(w) ? (et(), tt("svg", kE, [...oe[8] || (oe[8] = [
                de("path", { d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" }, null, -1),
                de("path", { d: "M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" }, null, -1)
              ])])) : (et(), tt("svg", zE, [...oe[7] || (oe[7] = [
                de("path", { d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" }, null, -1)
              ])]))
            ], 10, VE)) : en("", !0),
            de("p", HE, yt(Se(w) ? Se(E).voice.listening : Se(r) ? Se(E).voice.thinking : Se(E).voice.pressToSpeak), 1)
          ])
        ], 64))
      ])
    ]));
  }
}), WE = /* @__PURE__ */ po(GE, [["__scopeId", "data-v-1854527a"]]), _S = /* @__PURE__ */ Ys({
  __name: "LiyaEnvironment",
  props: {
    mode: { default: "modal_fullscreen" },
    isOpen: { type: Boolean, default: !1 },
    showBackButton: { type: Boolean, default: !0 },
    showCloseButton: { type: Boolean, default: !0 },
    classroomModelUrl: { default: "" },
    avatarModelUrl: { default: "" },
    avatarPosition: { default: () => ({ x: 0, y: 0, z: 0 }) },
    cameraConfig: { default: () => ({
      position: { x: 0, y: 1.4, z: 4 },
      lookAt: { x: 0, y: 1.2, z: 0 },
      fov: 45
    }) },
    welcomeMessage: { default: "" },
    enableGestures: { type: Boolean, default: !0 },
    enableSubtitles: { type: Boolean, default: !0 },
    assistantName: { default: "" },
    theme: { default: () => ({}) }
  },
  emits: ["close", "back", "opened", "closed", "message-sent", "message-received", "speaking-started", "speaking-ended", "loaded", "error"],
  setup(s) {
    const e = s, t = Fe(() => e.mode === "modal_fullscreen");
    return (n, i) => (et(), yu(Qh(t.value ? yE : WE), {
      "is-open": s.isOpen,
      "show-back-button": s.showBackButton,
      "show-close-button": s.showCloseButton,
      "classroom-model-url": s.classroomModelUrl,
      "avatar-model-url": s.avatarModelUrl,
      "avatar-position": s.avatarPosition,
      "camera-config": s.cameraConfig,
      "welcome-message": s.welcomeMessage,
      "enable-gestures": s.enableGestures,
      "enable-subtitles": s.enableSubtitles,
      "assistant-name": s.assistantName,
      theme: s.theme,
      onClose: i[0] || (i[0] = (r) => n.$emit("close")),
      onBack: i[1] || (i[1] = (r) => n.$emit("back")),
      onOpened: i[2] || (i[2] = (r) => n.$emit("opened")),
      onClosed: i[3] || (i[3] = (r) => n.$emit("closed")),
      onMessageSent: i[4] || (i[4] = (r) => n.$emit("message-sent", r)),
      onMessageReceived: i[5] || (i[5] = (r) => n.$emit("message-received", r)),
      onSpeakingStarted: i[6] || (i[6] = (r) => n.$emit("speaking-started")),
      onSpeakingEnded: i[7] || (i[7] = (r) => n.$emit("speaking-ended")),
      onLoaded: i[8] || (i[8] = (r) => n.$emit("loaded")),
      onError: i[9] || (i[9] = (r) => n.$emit("error", r))
    }, null, 40, ["is-open", "show-back-button", "show-close-button", "classroom-model-url", "avatar-model-url", "avatar-position", "camera-config", "welcome-message", "enable-gestures", "enable-subtitles", "assistant-name", "theme"]));
  }
}), Os = Ke(0), Ur = Ke(!1), Ji = Ke(new Uint8Array(0));
let Zi = null, Sn = null, Fs = null, Nr = null;
function vS() {
  const s = Fe(() => Os.value), e = Fe(() => Ur.value), t = Fe(() => Ji.value);
  async function n() {
    try {
      const l = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      Zi = new AudioContext(), Sn = Zi.createAnalyser(), Sn.fftSize = 256, Sn.smoothingTimeConstant = 0.8, Fs = Zi.createMediaStreamSource(l), Fs.connect(Sn);
      const c = Sn.frequencyBinCount;
      return Ji.value = new Uint8Array(c), Ur.value = !0, i(), !0;
    } catch {
      return !1;
    }
  }
  function i() {
    if (!Ur.value || !Sn) return;
    Sn.getByteFrequencyData(Ji.value);
    let l = 0;
    for (let c = 0; c < Ji.value.length; c++)
      l += Ji.value[c];
    Os.value = l / Ji.value.length / 255, Nr = requestAnimationFrame(i);
  }
  function r() {
    Ur.value = !1, Nr && (cancelAnimationFrame(Nr), Nr = null), Fs && (Fs.disconnect(), Fs = null), Sn && (Sn.disconnect(), Sn = null), Zi && (Zi.close(), Zi = null), Os.value = 0;
  }
  function o() {
    const l = Os.value;
    return l < 0.1 ? 0.2 : l < 0.3 ? 0.4 : l < 0.5 ? 0.6 : l < 0.7 ? 0.8 : 1;
  }
  function a() {
    const l = Os.value;
    return l < 0.3 ? "low" : l < 0.6 ? "medium" : "high";
  }
  return Ks(() => {
    r();
  }), {
    audioLevel: s,
    isAnalyzing: e,
    frequencyData: t,
    startAnalyzing: n,
    stopAnalyzing: r,
    getGestureIntensityFromAudio: o,
    getSpeakingEmphasis: a
  };
}
export {
  Wr as LIYA_AI_ENV_VUEJS_GESTURE_DEFINITIONS,
  zh as LiyaAiEnvVuejsClassroomScene,
  _S as LiyaAiEnvVuejsEnvironment,
  yE as LiyaAiEnvVuejsEnvironmentModal,
  WE as LiyaAiEnvVuejsEnvironmentStandalone,
  gS as LiyaAiEnvVuejsFullBodyAvatar,
  pS as LiyaAiEnvVuejsPlugin,
  pS as default,
  Of as liyaAiEnvVuejsDetectBrowserLocale,
  Df as liyaAiEnvVuejsGenerateSpeech,
  Pf as liyaAiEnvVuejsGetClient,
  _s as liyaAiEnvVuejsGetConfig,
  mS as liyaAiEnvVuejsGetGestureDefinition,
  Uf as liyaAiEnvVuejsGetPresentations,
  fS as liyaAiEnvVuejsGetSessionHistory,
  Lf as liyaAiEnvVuejsInitializeClient,
  bx as liyaAiEnvVuejsInterpolateKeyframes,
  dS as liyaAiEnvVuejsIsInitialized,
  kr as liyaAiEnvVuejsIsSupportedLocale,
  If as liyaAiEnvVuejsSendMessage,
  Nf as liyaAiEnvVuejsTranslations,
  vS as useLiyaAiEnvVuejsAudioAnalyzer,
  kh as useLiyaAiEnvVuejsEnvironment,
  Vh as useLiyaAiEnvVuejsGestures,
  za as useLiyaAiEnvVuejsI18n,
  Hh as useLiyaAiEnvVuejsVoice
};
