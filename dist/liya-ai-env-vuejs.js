var Yh = Object.defineProperty;
var Kh = (s, e, t) => e in s ? Yh(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var To = (s, e, t) => Kh(s, typeof e != "symbol" ? e + "" : e, t);
import { ref as ze, computed as Ne, readonly as Su, defineComponent as Zs, openBlock as Qe, createElementBlock as tt, renderSlot as $h, watch as fn, onMounted as Ba, onUnmounted as Qs, createElementVNode as ue, toDisplayString as dt, createCommentVNode as Xt, normalizeStyle as Jh, createBlock as Mu, Teleport as Zh, createVNode as _i, Transition as ks, withCtx as zs, withModifiers as ll, normalizeClass as xi, unref as ve, createTextVNode as Au, Fragment as Hr, renderList as cl, withDirectives as Qh, vModelText as ed, nextTick as td, resolveDynamicComponent as nd } from "vue";
function Tu(s, e) {
  return function() {
    return s.apply(e, arguments);
  };
}
const { toString: id } = Object.prototype, { getPrototypeOf: Va } = Object, { iterator: ao, toStringTag: bu } = Symbol, lo = /* @__PURE__ */ ((s) => (e) => {
  const t = id.call(e);
  return s[t] || (s[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), _n = (s) => (s = s.toLowerCase(), (e) => lo(e) === s), co = (s) => (e) => typeof e === s, { isArray: ys } = Array, cs = co("undefined");
function er(s) {
  return s !== null && !cs(s) && s.constructor !== null && !cs(s.constructor) && Yt(s.constructor.isBuffer) && s.constructor.isBuffer(s);
}
const wu = _n("ArrayBuffer");
function sd(s) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(s) : e = s && s.buffer && wu(s.buffer), e;
}
const rd = co("string"), Yt = co("function"), Ru = co("number"), tr = (s) => s !== null && typeof s == "object", od = (s) => s === !0 || s === !1, Gr = (s) => {
  if (lo(s) !== "object")
    return !1;
  const e = Va(s);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(bu in s) && !(ao in s);
}, ad = (s) => {
  if (!tr(s) || er(s))
    return !1;
  try {
    return Object.keys(s).length === 0 && Object.getPrototypeOf(s) === Object.prototype;
  } catch {
    return !1;
  }
}, ld = _n("Date"), cd = _n("File"), ud = _n("Blob"), hd = _n("FileList"), dd = (s) => tr(s) && Yt(s.pipe), fd = (s) => {
  let e;
  return s && (typeof FormData == "function" && s instanceof FormData || Yt(s.append) && ((e = lo(s)) === "formdata" || // detect form-data instance
  e === "object" && Yt(s.toString) && s.toString() === "[object FormData]"));
}, pd = _n("URLSearchParams"), [md, gd, _d, vd] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(_n), yd = (s) => s.trim ? s.trim() : s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function nr(s, e, { allOwnKeys: t = !1 } = {}) {
  if (s === null || typeof s > "u")
    return;
  let n, i;
  if (typeof s != "object" && (s = [s]), ys(s))
    for (n = 0, i = s.length; n < i; n++)
      e.call(null, s[n], n, s);
  else {
    if (er(s))
      return;
    const r = t ? Object.getOwnPropertyNames(s) : Object.keys(s), o = r.length;
    let a;
    for (n = 0; n < o; n++)
      a = r[n], e.call(null, s[a], a, s);
  }
}
function Cu(s, e) {
  if (er(s))
    return null;
  e = e.toLowerCase();
  const t = Object.keys(s);
  let n = t.length, i;
  for (; n-- > 0; )
    if (i = t[n], e === i.toLowerCase())
      return i;
  return null;
}
const Ei = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Lu = (s) => !cs(s) && s !== Ei;
function ga() {
  const { caseless: s, skipUndefined: e } = Lu(this) && this || {}, t = {}, n = (i, r) => {
    if (r === "__proto__" || r === "constructor" || r === "prototype")
      return;
    const o = s && Cu(t, r) || r;
    Gr(t[o]) && Gr(i) ? t[o] = ga(t[o], i) : Gr(i) ? t[o] = ga({}, i) : ys(i) ? t[o] = i.slice() : (!e || !cs(i)) && (t[o] = i);
  };
  for (let i = 0, r = arguments.length; i < r; i++)
    arguments[i] && nr(arguments[i], n);
  return t;
}
const xd = (s, e, t, { allOwnKeys: n } = {}) => (nr(
  e,
  (i, r) => {
    t && Yt(i) ? Object.defineProperty(s, r, {
      value: Tu(i, t),
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
), s), Ed = (s) => (s.charCodeAt(0) === 65279 && (s = s.slice(1)), s), Sd = (s, e, t, n) => {
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
}, Md = (s, e, t, n) => {
  let i, r, o;
  const a = {};
  if (e = e || {}, s == null) return e;
  do {
    for (i = Object.getOwnPropertyNames(s), r = i.length; r-- > 0; )
      o = i[r], (!n || n(o, s, e)) && !a[o] && (e[o] = s[o], a[o] = !0);
    s = t !== !1 && Va(s);
  } while (s && (!t || t(s, e)) && s !== Object.prototype);
  return e;
}, Ad = (s, e, t) => {
  s = String(s), (t === void 0 || t > s.length) && (t = s.length), t -= e.length;
  const n = s.indexOf(e, t);
  return n !== -1 && n === t;
}, Td = (s) => {
  if (!s) return null;
  if (ys(s)) return s;
  let e = s.length;
  if (!Ru(e)) return null;
  const t = new Array(e);
  for (; e-- > 0; )
    t[e] = s[e];
  return t;
}, bd = /* @__PURE__ */ ((s) => (e) => s && e instanceof s)(typeof Uint8Array < "u" && Va(Uint8Array)), wd = (s, e) => {
  const n = (s && s[ao]).call(s);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const r = i.value;
    e.call(s, r[0], r[1]);
  }
}, Rd = (s, e) => {
  let t;
  const n = [];
  for (; (t = s.exec(e)) !== null; )
    n.push(t);
  return n;
}, Cd = _n("HTMLFormElement"), Ld = (s) => s.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(t, n, i) {
  return n.toUpperCase() + i;
}), ul = (({ hasOwnProperty: s }) => (e, t) => s.call(e, t))(Object.prototype), Pd = _n("RegExp"), Pu = (s, e) => {
  const t = Object.getOwnPropertyDescriptors(s), n = {};
  nr(t, (i, r) => {
    let o;
    (o = e(i, r, s)) !== !1 && (n[r] = o || i);
  }), Object.defineProperties(s, n);
}, Id = (s) => {
  Pu(s, (e, t) => {
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
}, Dd = (s, e) => {
  const t = {}, n = (i) => {
    i.forEach((r) => {
      t[r] = !0;
    });
  };
  return ys(s) ? n(s) : n(String(s).split(e)), t;
}, Ud = () => {
}, Nd = (s, e) => s != null && Number.isFinite(s = +s) ? s : e;
function Od(s) {
  return !!(s && Yt(s.append) && s[bu] === "FormData" && s[ao]);
}
const Fd = (s) => {
  const e = new Array(10), t = (n, i) => {
    if (tr(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (er(n))
        return n;
      if (!("toJSON" in n)) {
        e[i] = n;
        const r = ys(n) ? [] : {};
        return nr(n, (o, a) => {
          const l = t(o, i + 1);
          !cs(l) && (r[a] = l);
        }), e[i] = void 0, r;
      }
    }
    return n;
  };
  return t(s, 0);
}, Bd = _n("AsyncFunction"), Vd = (s) => s && (tr(s) || Yt(s)) && Yt(s.then) && Yt(s.catch), Iu = ((s, e) => s ? setImmediate : e ? ((t, n) => (Ei.addEventListener(
  "message",
  ({ source: i, data: r }) => {
    i === Ei && r === t && n.length && n.shift()();
  },
  !1
), (i) => {
  n.push(i), Ei.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(typeof setImmediate == "function", Yt(Ei.postMessage)), kd = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ei) : typeof process < "u" && process.nextTick || Iu, zd = (s) => s != null && Yt(s[ao]), X = {
  isArray: ys,
  isArrayBuffer: wu,
  isBuffer: er,
  isFormData: fd,
  isArrayBufferView: sd,
  isString: rd,
  isNumber: Ru,
  isBoolean: od,
  isObject: tr,
  isPlainObject: Gr,
  isEmptyObject: ad,
  isReadableStream: md,
  isRequest: gd,
  isResponse: _d,
  isHeaders: vd,
  isUndefined: cs,
  isDate: ld,
  isFile: cd,
  isBlob: ud,
  isRegExp: Pd,
  isFunction: Yt,
  isStream: dd,
  isURLSearchParams: pd,
  isTypedArray: bd,
  isFileList: hd,
  forEach: nr,
  merge: ga,
  extend: xd,
  trim: yd,
  stripBOM: Ed,
  inherits: Sd,
  toFlatObject: Md,
  kindOf: lo,
  kindOfTest: _n,
  endsWith: Ad,
  toArray: Td,
  forEachEntry: wd,
  matchAll: Rd,
  isHTMLForm: Cd,
  hasOwnProperty: ul,
  hasOwnProp: ul,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Pu,
  freezeMethods: Id,
  toObjectSet: Dd,
  toCamelCase: Ld,
  noop: Ud,
  toFiniteNumber: Nd,
  findKey: Cu,
  global: Ei,
  isContextDefined: Lu,
  isSpecCompliantForm: Od,
  toJSONObject: Fd,
  isAsyncFn: Bd,
  isThenable: Vd,
  setImmediate: Iu,
  asap: kd,
  isIterable: zd
};
let De = class Du extends Error {
  static from(e, t, n, i, r, o) {
    const a = new Du(e.message, t || e.code, n, i, r);
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
      config: X.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
De.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
De.ERR_BAD_OPTION = "ERR_BAD_OPTION";
De.ECONNABORTED = "ECONNABORTED";
De.ETIMEDOUT = "ETIMEDOUT";
De.ERR_NETWORK = "ERR_NETWORK";
De.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
De.ERR_DEPRECATED = "ERR_DEPRECATED";
De.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
De.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
De.ERR_CANCELED = "ERR_CANCELED";
De.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
De.ERR_INVALID_URL = "ERR_INVALID_URL";
const Hd = null;
function _a(s) {
  return X.isPlainObject(s) || X.isArray(s);
}
function Uu(s) {
  return X.endsWith(s, "[]") ? s.slice(0, -2) : s;
}
function hl(s, e, t) {
  return s ? s.concat(e).map(function(i, r) {
    return i = Uu(i), !t && r ? "[" + i + "]" : i;
  }).join(t ? "." : "") : e;
}
function Gd(s) {
  return X.isArray(s) && !s.some(_a);
}
const Wd = X.toFlatObject(X, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function uo(s, e, t) {
  if (!X.isObject(s))
    throw new TypeError("target must be an object");
  e = e || new FormData(), t = X.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(_, f) {
    return !X.isUndefined(f[_]);
  });
  const n = t.metaTokens, i = t.visitor || u, r = t.dots, o = t.indexes, l = (t.Blob || typeof Blob < "u" && Blob) && X.isSpecCompliantForm(e);
  if (!X.isFunction(i))
    throw new TypeError("visitor must be a function");
  function c(g) {
    if (g === null) return "";
    if (X.isDate(g))
      return g.toISOString();
    if (X.isBoolean(g))
      return g.toString();
    if (!l && X.isBlob(g))
      throw new De("Blob is not supported. Use a Buffer instead.");
    return X.isArrayBuffer(g) || X.isTypedArray(g) ? l && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function u(g, _, f) {
    let p = g;
    if (g && !f && typeof g == "object") {
      if (X.endsWith(_, "{}"))
        _ = n ? _ : _.slice(0, -2), g = JSON.stringify(g);
      else if (X.isArray(g) && Gd(g) || (X.isFileList(g) || X.endsWith(_, "[]")) && (p = X.toArray(g)))
        return _ = Uu(_), p.forEach(function(y, b) {
          !(X.isUndefined(y) || y === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? hl([_], b, r) : o === null ? _ : _ + "[]",
            c(y)
          );
        }), !1;
    }
    return _a(g) ? !0 : (e.append(hl(f, _, r), c(g)), !1);
  }
  const h = [], d = Object.assign(Wd, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: _a
  });
  function m(g, _) {
    if (!X.isUndefined(g)) {
      if (h.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + _.join("."));
      h.push(g), X.forEach(g, function(p, x) {
        (!(X.isUndefined(p) || p === null) && i.call(
          e,
          p,
          X.isString(x) ? x.trim() : x,
          _,
          d
        )) === !0 && m(p, _ ? _.concat(x) : [x]);
      }), h.pop();
    }
  }
  if (!X.isObject(s))
    throw new TypeError("data must be an object");
  return m(s), e;
}
function dl(s) {
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
function ka(s, e) {
  this._pairs = [], s && uo(s, this, e);
}
const Nu = ka.prototype;
Nu.append = function(e, t) {
  this._pairs.push([e, t]);
};
Nu.toString = function(e) {
  const t = e ? function(n) {
    return e.call(this, n, dl);
  } : dl;
  return this._pairs.map(function(i) {
    return t(i[0]) + "=" + t(i[1]);
  }, "").join("&");
};
function jd(s) {
  return encodeURIComponent(s).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Ou(s, e, t) {
  if (!e)
    return s;
  const n = t && t.encode || jd, i = X.isFunction(t) ? {
    serialize: t
  } : t, r = i && i.serialize;
  let o;
  if (r ? o = r(e, i) : o = X.isURLSearchParams(e) ? e.toString() : new ka(e, i).toString(n), o) {
    const a = s.indexOf("#");
    a !== -1 && (s = s.slice(0, a)), s += (s.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return s;
}
class fl {
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
    X.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const za = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, Xd = typeof URLSearchParams < "u" ? URLSearchParams : ka, qd = typeof FormData < "u" ? FormData : null, Yd = typeof Blob < "u" ? Blob : null, Kd = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Xd,
    FormData: qd,
    Blob: Yd
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ha = typeof window < "u" && typeof document < "u", va = typeof navigator == "object" && navigator || void 0, $d = Ha && (!va || ["ReactNative", "NativeScript", "NS"].indexOf(va.product) < 0), Jd = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Zd = Ha && window.location.href || "http://localhost", Qd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ha,
  hasStandardBrowserEnv: $d,
  hasStandardBrowserWebWorkerEnv: Jd,
  navigator: va,
  origin: Zd
}, Symbol.toStringTag, { value: "Module" })), Bt = {
  ...Qd,
  ...Kd
};
function ef(s, e) {
  return uo(s, new Bt.classes.URLSearchParams(), {
    visitor: function(t, n, i, r) {
      return Bt.isNode && X.isBuffer(t) ? (this.append(n, t.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function tf(s) {
  return X.matchAll(/\w+|\[(\w*)]/g, s).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function nf(s) {
  const e = {}, t = Object.keys(s);
  let n;
  const i = t.length;
  let r;
  for (n = 0; n < i; n++)
    r = t[n], e[r] = s[r];
  return e;
}
function Fu(s) {
  function e(t, n, i, r) {
    let o = t[r++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o), l = r >= t.length;
    return o = !o && X.isArray(i) ? i.length : o, l ? (X.hasOwnProp(i, o) ? i[o] = [i[o], n] : i[o] = n, !a) : ((!i[o] || !X.isObject(i[o])) && (i[o] = []), e(t, n, i[o], r) && X.isArray(i[o]) && (i[o] = nf(i[o])), !a);
  }
  if (X.isFormData(s) && X.isFunction(s.entries)) {
    const t = {};
    return X.forEachEntry(s, (n, i) => {
      e(tf(n), i, t, 0);
    }), t;
  }
  return null;
}
function sf(s, e, t) {
  if (X.isString(s))
    try {
      return (e || JSON.parse)(s), X.trim(s);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (t || JSON.stringify)(s);
}
const ir = {
  transitional: za,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, t) {
    const n = t.getContentType() || "", i = n.indexOf("application/json") > -1, r = X.isObject(e);
    if (r && X.isHTMLForm(e) && (e = new FormData(e)), X.isFormData(e))
      return i ? JSON.stringify(Fu(e)) : e;
    if (X.isArrayBuffer(e) || X.isBuffer(e) || X.isStream(e) || X.isFile(e) || X.isBlob(e) || X.isReadableStream(e))
      return e;
    if (X.isArrayBufferView(e))
      return e.buffer;
    if (X.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (r) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return ef(e, this.formSerializer).toString();
      if ((a = X.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return uo(
          a ? { "files[]": e } : e,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return r || i ? (t.setContentType("application/json", !1), sf(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || ir.transitional, n = t && t.forcedJSONParsing, i = this.responseType === "json";
    if (X.isResponse(e) || X.isReadableStream(e))
      return e;
    if (e && X.isString(e) && (n && !this.responseType || i)) {
      const o = !(t && t.silentJSONParsing) && i;
      try {
        return JSON.parse(e, this.parseReviver);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? De.from(a, De.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: Bt.classes.FormData,
    Blob: Bt.classes.Blob
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
X.forEach(["delete", "get", "head", "post", "put", "patch"], (s) => {
  ir.headers[s] = {};
});
const rf = X.toObjectSet([
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
]), of = (s) => {
  const e = {};
  let t, n, i;
  return s && s.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), t = o.substring(0, i).trim().toLowerCase(), n = o.substring(i + 1).trim(), !(!t || e[t] && rf[t]) && (t === "set-cookie" ? e[t] ? e[t].push(n) : e[t] = [n] : e[t] = e[t] ? e[t] + ", " + n : n);
  }), e;
}, pl = Symbol("internals");
function Rs(s) {
  return s && String(s).trim().toLowerCase();
}
function Wr(s) {
  return s === !1 || s == null ? s : X.isArray(s) ? s.map(Wr) : String(s);
}
function af(s) {
  const e = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = t.exec(s); )
    e[n[1]] = n[2];
  return e;
}
const lf = (s) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());
function bo(s, e, t, n, i) {
  if (X.isFunction(n))
    return n.call(this, e, t);
  if (i && (e = t), !!X.isString(e)) {
    if (X.isString(n))
      return e.indexOf(n) !== -1;
    if (X.isRegExp(n))
      return n.test(e);
  }
}
function cf(s) {
  return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function uf(s, e) {
  const t = X.toCamelCase(" " + e);
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
      const u = Rs(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const h = X.findKey(i, u);
      (!h || i[h] === void 0 || c === !0 || c === void 0 && i[h] !== !1) && (i[h || l] = Wr(a));
    }
    const o = (a, l) => X.forEach(a, (c, u) => r(c, u, l));
    if (X.isPlainObject(e) || e instanceof this.constructor)
      o(e, t);
    else if (X.isString(e) && (e = e.trim()) && !lf(e))
      o(of(e), t);
    else if (X.isObject(e) && X.isIterable(e)) {
      let a = {}, l, c;
      for (const u of e) {
        if (!X.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[c = u[0]] = (l = a[c]) ? X.isArray(l) ? [...l, u[1]] : [l, u[1]] : u[1];
      }
      o(a, t);
    } else
      e != null && r(t, e, n);
    return this;
  }
  get(e, t) {
    if (e = Rs(e), e) {
      const n = X.findKey(this, e);
      if (n) {
        const i = this[n];
        if (!t)
          return i;
        if (t === !0)
          return af(i);
        if (X.isFunction(t))
          return t.call(this, i, n);
        if (X.isRegExp(t))
          return t.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = Rs(e), e) {
      const n = X.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!t || bo(this, this[n], n, t)));
    }
    return !1;
  }
  delete(e, t) {
    const n = this;
    let i = !1;
    function r(o) {
      if (o = Rs(o), o) {
        const a = X.findKey(n, o);
        a && (!t || bo(n, n[a], a, t)) && (delete n[a], i = !0);
      }
    }
    return X.isArray(e) ? e.forEach(r) : r(e), i;
  }
  clear(e) {
    const t = Object.keys(this);
    let n = t.length, i = !1;
    for (; n--; ) {
      const r = t[n];
      (!e || bo(this, this[r], r, e, !0)) && (delete this[r], i = !0);
    }
    return i;
  }
  normalize(e) {
    const t = this, n = {};
    return X.forEach(this, (i, r) => {
      const o = X.findKey(n, r);
      if (o) {
        t[o] = Wr(i), delete t[r];
        return;
      }
      const a = e ? cf(r) : String(r).trim();
      a !== r && delete t[r], t[a] = Wr(i), n[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return X.forEach(this, (n, i) => {
      n != null && n !== !1 && (t[i] = e && X.isArray(n) ? n.join(", ") : n);
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
    const n = (this[pl] = this[pl] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function r(o) {
      const a = Rs(o);
      n[a] || (uf(i, o), n[a] = !0);
    }
    return X.isArray(e) ? e.forEach(r) : r(e), this;
  }
};
Kt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
X.reduceDescriptors(Kt.prototype, ({ value: s }, e) => {
  let t = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => s,
    set(n) {
      this[t] = n;
    }
  };
});
X.freezeMethods(Kt);
function wo(s, e) {
  const t = this || ir, n = e || t, i = Kt.from(n.headers);
  let r = n.data;
  return X.forEach(s, function(a) {
    r = a.call(t, r, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), r;
}
function Bu(s) {
  return !!(s && s.__CANCEL__);
}
let sr = class extends De {
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
    super(e ?? "canceled", De.ERR_CANCELED, t, n), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function Vu(s, e, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status) ? s(t) : e(new De(
    "Request failed with status code " + t.status,
    [De.ERR_BAD_REQUEST, De.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function hf(s) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(s);
  return e && e[1] || "";
}
function df(s, e) {
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
function ff(s, e) {
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
const $r = (s, e, t = 3) => {
  let n = 0;
  const i = df(50, 250);
  return ff((r) => {
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
}, ml = (s, e) => {
  const t = s != null;
  return [(n) => e[0]({
    lengthComputable: t,
    total: s,
    loaded: n
  }), e[1]];
}, gl = (s) => (...e) => X.asap(() => s(...e)), pf = Bt.hasStandardBrowserEnv ? /* @__PURE__ */ ((s, e) => (t) => (t = new URL(t, Bt.origin), s.protocol === t.protocol && s.host === t.host && (e || s.port === t.port)))(
  new URL(Bt.origin),
  Bt.navigator && /(msie|trident)/i.test(Bt.navigator.userAgent)
) : () => !0, mf = Bt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(s, e, t, n, i, r, o) {
      if (typeof document > "u") return;
      const a = [`${s}=${encodeURIComponent(e)}`];
      X.isNumber(t) && a.push(`expires=${new Date(t).toUTCString()}`), X.isString(n) && a.push(`path=${n}`), X.isString(i) && a.push(`domain=${i}`), r === !0 && a.push("secure"), X.isString(o) && a.push(`SameSite=${o}`), document.cookie = a.join("; ");
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
function gf(s) {
  return typeof s != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(s);
}
function _f(s, e) {
  return e ? s.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : s;
}
function ku(s, e, t) {
  let n = !gf(e);
  return s && (n || t == !1) ? _f(s, e) : e;
}
const _l = (s) => s instanceof Kt ? { ...s } : s;
function Ri(s, e) {
  e = e || {};
  const t = {};
  function n(c, u, h, d) {
    return X.isPlainObject(c) && X.isPlainObject(u) ? X.merge.call({ caseless: d }, c, u) : X.isPlainObject(u) ? X.merge({}, u) : X.isArray(u) ? u.slice() : u;
  }
  function i(c, u, h, d) {
    if (X.isUndefined(u)) {
      if (!X.isUndefined(c))
        return n(void 0, c, h, d);
    } else return n(c, u, h, d);
  }
  function r(c, u) {
    if (!X.isUndefined(u))
      return n(void 0, u);
  }
  function o(c, u) {
    if (X.isUndefined(u)) {
      if (!X.isUndefined(c))
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
    headers: (c, u, h) => i(_l(c), _l(u), h, !0)
  };
  return X.forEach(
    Object.keys({ ...s, ...e }),
    function(u) {
      if (u === "__proto__" || u === "constructor" || u === "prototype")
        return;
      const h = X.hasOwnProp(l, u) ? l[u] : i, d = h(s[u], e[u], u);
      X.isUndefined(d) && h !== a || (t[u] = d);
    }
  ), t;
}
const zu = (s) => {
  const e = Ri({}, s);
  let { data: t, withXSRFToken: n, xsrfHeaderName: i, xsrfCookieName: r, headers: o, auth: a } = e;
  if (e.headers = o = Kt.from(o), e.url = Ou(ku(e.baseURL, e.url, e.allowAbsoluteUrls), s.params, s.paramsSerializer), a && o.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), X.isFormData(t)) {
    if (Bt.hasStandardBrowserEnv || Bt.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if (X.isFunction(t.getHeaders)) {
      const l = t.getHeaders(), c = ["content-type", "content-length"];
      Object.entries(l).forEach(([u, h]) => {
        c.includes(u.toLowerCase()) && o.set(u, h);
      });
    }
  }
  if (Bt.hasStandardBrowserEnv && (n && X.isFunction(n) && (n = n(e)), n || n !== !1 && pf(e.url))) {
    const l = i && r && mf.read(r);
    l && o.set(i, l);
  }
  return e;
}, vf = typeof XMLHttpRequest < "u", yf = vf && function(s) {
  return new Promise(function(t, n) {
    const i = zu(s);
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
      ), C = {
        data: !a || a === "text" || a === "json" ? f.responseText : f.response,
        status: f.status,
        statusText: f.statusText,
        headers: y,
        config: s,
        request: f
      };
      Vu(function(R) {
        t(R), _();
      }, function(R) {
        n(R), _();
      }, C), f = null;
    }
    "onloadend" in f ? f.onloadend = p : f.onreadystatechange = function() {
      !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, f.onabort = function() {
      f && (n(new De("Request aborted", De.ECONNABORTED, s, f)), f = null);
    }, f.onerror = function(b) {
      const C = b && b.message ? b.message : "Network Error", w = new De(C, De.ERR_NETWORK, s, f);
      w.event = b || null, n(w), f = null;
    }, f.ontimeout = function() {
      let b = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const C = i.transitional || za;
      i.timeoutErrorMessage && (b = i.timeoutErrorMessage), n(new De(
        b,
        C.clarifyTimeoutError ? De.ETIMEDOUT : De.ECONNABORTED,
        s,
        f
      )), f = null;
    }, r === void 0 && o.setContentType(null), "setRequestHeader" in f && X.forEach(o.toJSON(), function(b, C) {
      f.setRequestHeader(C, b);
    }), X.isUndefined(i.withCredentials) || (f.withCredentials = !!i.withCredentials), a && a !== "json" && (f.responseType = i.responseType), c && ([d, g] = $r(c, !0), f.addEventListener("progress", d)), l && f.upload && ([h, m] = $r(l), f.upload.addEventListener("progress", h), f.upload.addEventListener("loadend", m)), (i.cancelToken || i.signal) && (u = (y) => {
      f && (n(!y || y.type ? new sr(null, s, f) : y), f.abort(), f = null);
    }, i.cancelToken && i.cancelToken.subscribe(u), i.signal && (i.signal.aborted ? u() : i.signal.addEventListener("abort", u)));
    const x = hf(i.url);
    if (x && Bt.protocols.indexOf(x) === -1) {
      n(new De("Unsupported protocol " + x + ":", De.ERR_BAD_REQUEST, s));
      return;
    }
    f.send(r || null);
  });
}, xf = (s, e) => {
  const { length: t } = s = s ? s.filter(Boolean) : [];
  if (e || t) {
    let n = new AbortController(), i;
    const r = function(c) {
      if (!i) {
        i = !0, a();
        const u = c instanceof Error ? c : this.reason;
        n.abort(u instanceof De ? u : new sr(u instanceof Error ? u.message : u));
      }
    };
    let o = e && setTimeout(() => {
      o = null, r(new De(`timeout of ${e}ms exceeded`, De.ETIMEDOUT));
    }, e);
    const a = () => {
      s && (o && clearTimeout(o), o = null, s.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(r) : c.removeEventListener("abort", r);
      }), s = null);
    };
    s.forEach((c) => c.addEventListener("abort", r));
    const { signal: l } = n;
    return l.unsubscribe = () => X.asap(a), l;
  }
}, Ef = function* (s, e) {
  let t = s.byteLength;
  if (t < e) {
    yield s;
    return;
  }
  let n = 0, i;
  for (; n < t; )
    i = n + e, yield s.slice(n, i), n = i;
}, Sf = async function* (s, e) {
  for await (const t of Mf(s))
    yield* Ef(t, e);
}, Mf = async function* (s) {
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
}, vl = (s, e, t, n) => {
  const i = Sf(s, e);
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
}, yl = 64 * 1024, { isFunction: lr } = X, Af = (({ Request: s, Response: e }) => ({
  Request: s,
  Response: e
}))(X.global), {
  ReadableStream: xl,
  TextEncoder: El
} = X.global, Sl = (s, ...e) => {
  try {
    return !!s(...e);
  } catch {
    return !1;
  }
}, Tf = (s) => {
  s = X.merge.call({
    skipUndefined: !0
  }, Af, s);
  const { fetch: e, Request: t, Response: n } = s, i = e ? lr(e) : typeof fetch == "function", r = lr(t), o = lr(n);
  if (!i)
    return !1;
  const a = i && lr(xl), l = i && (typeof El == "function" ? /* @__PURE__ */ ((g) => (_) => g.encode(_))(new El()) : async (g) => new Uint8Array(await new t(g).arrayBuffer())), c = r && a && Sl(() => {
    let g = !1;
    const _ = new t(Bt.origin, {
      body: new xl(),
      method: "POST",
      get duplex() {
        return g = !0, "half";
      }
    }).headers.has("Content-Type");
    return g && !_;
  }), u = o && a && Sl(() => X.isReadableStream(new n("").body)), h = {
    stream: u && ((g) => g.body)
  };
  i && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((g) => {
    !h[g] && (h[g] = (_, f) => {
      let p = _ && _[g];
      if (p)
        return p.call(_);
      throw new De(`Response type '${g}' is not supported`, De.ERR_NOT_SUPPORT, f);
    });
  });
  const d = async (g) => {
    if (g == null)
      return 0;
    if (X.isBlob(g))
      return g.size;
    if (X.isSpecCompliantForm(g))
      return (await new t(Bt.origin, {
        method: "POST",
        body: g
      }).arrayBuffer()).byteLength;
    if (X.isArrayBufferView(g) || X.isArrayBuffer(g))
      return g.byteLength;
    if (X.isURLSearchParams(g) && (g = g + ""), X.isString(g))
      return (await l(g)).byteLength;
  }, m = async (g, _) => {
    const f = X.toFiniteNumber(g.getContentLength());
    return f ?? d(_);
  };
  return async (g) => {
    let {
      url: _,
      method: f,
      data: p,
      signal: x,
      cancelToken: y,
      timeout: b,
      onDownloadProgress: C,
      onUploadProgress: w,
      responseType: R,
      headers: G,
      withCredentials: E = "same-origin",
      fetchOptions: T
    } = zu(g), z = e || fetch;
    R = R ? (R + "").toLowerCase() : "text";
    let J = xf([x, y && y.toAbortSignal()], b), oe = null;
    const L = J && J.unsubscribe && (() => {
      J.unsubscribe();
    });
    let I;
    try {
      if (w && c && f !== "get" && f !== "head" && (I = await m(G, p)) !== 0) {
        let H = new t(_, {
          method: "POST",
          body: p,
          duplex: "half"
        }), W;
        if (X.isFormData(p) && (W = H.headers.get("content-type")) && G.setContentType(W), H.body) {
          const [D, K] = ml(
            I,
            $r(gl(w))
          );
          p = vl(H.body, yl, D, K);
        }
      }
      X.isString(E) || (E = E ? "include" : "omit");
      const U = r && "credentials" in t.prototype, ee = {
        ...T,
        signal: J,
        method: f.toUpperCase(),
        headers: G.normalize().toJSON(),
        body: p,
        duplex: "half",
        credentials: U ? E : void 0
      };
      oe = r && new t(_, ee);
      let O = await (r ? z(oe, T) : z(_, ee));
      const B = u && (R === "stream" || R === "response");
      if (u && (C || B && L)) {
        const H = {};
        ["status", "statusText", "headers"].forEach((re) => {
          H[re] = O[re];
        });
        const W = X.toFiniteNumber(O.headers.get("content-length")), [D, K] = C && ml(
          W,
          $r(gl(C), !0)
        ) || [];
        O = new n(
          vl(O.body, yl, D, () => {
            K && K(), L && L();
          }),
          H
        );
      }
      R = R || "text";
      let Q = await h[X.findKey(h, R) || "text"](O, g);
      return !B && L && L(), await new Promise((H, W) => {
        Vu(H, W, {
          data: Q,
          headers: Kt.from(O.headers),
          status: O.status,
          statusText: O.statusText,
          config: g,
          request: oe
        });
      });
    } catch (U) {
      throw L && L(), U && U.name === "TypeError" && /Load failed|fetch/i.test(U.message) ? Object.assign(
        new De("Network Error", De.ERR_NETWORK, g, oe, U && U.response),
        {
          cause: U.cause || U
        }
      ) : De.from(U, U && U.code, g, oe, U && U.response);
    }
  };
}, bf = /* @__PURE__ */ new Map(), Hu = (s) => {
  let e = s && s.env || {};
  const { fetch: t, Request: n, Response: i } = e, r = [
    n,
    i,
    t
  ];
  let o = r.length, a = o, l, c, u = bf;
  for (; a--; )
    l = r[a], c = u.get(l), c === void 0 && u.set(l, c = a ? /* @__PURE__ */ new Map() : Tf(e)), u = c;
  return c;
};
Hu();
const Ga = {
  http: Hd,
  xhr: yf,
  fetch: {
    get: Hu
  }
};
X.forEach(Ga, (s, e) => {
  if (s) {
    try {
      Object.defineProperty(s, "name", { value: e });
    } catch {
    }
    Object.defineProperty(s, "adapterName", { value: e });
  }
});
const Ml = (s) => `- ${s}`, wf = (s) => X.isFunction(s) || s === null || s === !1;
function Rf(s, e) {
  s = X.isArray(s) ? s : [s];
  const { length: t } = s;
  let n, i;
  const r = {};
  for (let o = 0; o < t; o++) {
    n = s[o];
    let a;
    if (i = n, !wf(n) && (i = Ga[(a = String(n)).toLowerCase()], i === void 0))
      throw new De(`Unknown adapter '${a}'`);
    if (i && (X.isFunction(i) || (i = i.get(e))))
      break;
    r[a || "#" + o] = i;
  }
  if (!i) {
    const o = Object.entries(r).map(
      ([l, c]) => `adapter ${l} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = t ? o.length > 1 ? `since :
` + o.map(Ml).join(`
`) : " " + Ml(o[0]) : "as no adapter specified";
    throw new De(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return i;
}
const Gu = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Rf,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ga
};
function Ro(s) {
  if (s.cancelToken && s.cancelToken.throwIfRequested(), s.signal && s.signal.aborted)
    throw new sr(null, s);
}
function Al(s) {
  return Ro(s), s.headers = Kt.from(s.headers), s.data = wo.call(
    s,
    s.transformRequest
  ), ["post", "put", "patch"].indexOf(s.method) !== -1 && s.headers.setContentType("application/x-www-form-urlencoded", !1), Gu.getAdapter(s.adapter || ir.adapter, s)(s).then(function(n) {
    return Ro(s), n.data = wo.call(
      s,
      s.transformResponse,
      n
    ), n.headers = Kt.from(n.headers), n;
  }, function(n) {
    return Bu(n) || (Ro(s), n && n.response && (n.response.data = wo.call(
      s,
      s.transformResponse,
      n.response
    ), n.response.headers = Kt.from(n.response.headers))), Promise.reject(n);
  });
}
const Wu = "1.13.5", ho = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((s, e) => {
  ho[s] = function(n) {
    return typeof n === s || "a" + (e < 1 ? "n " : " ") + s;
  };
});
const Tl = {};
ho.transitional = function(e, t, n) {
  function i(r, o) {
    return "[Axios v" + Wu + "] Transitional option '" + r + "'" + o + (n ? ". " + n : "");
  }
  return (r, o, a) => {
    if (e === !1)
      throw new De(
        i(o, " has been removed" + (t ? " in " + t : "")),
        De.ERR_DEPRECATED
      );
    return t && !Tl[o] && (Tl[o] = !0, console.warn(
      i(
        o,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(r, o, a) : !0;
  };
};
ho.spelling = function(e) {
  return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
};
function Cf(s, e, t) {
  if (typeof s != "object")
    throw new De("options must be an object", De.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(s);
  let i = n.length;
  for (; i-- > 0; ) {
    const r = n[i], o = e[r];
    if (o) {
      const a = s[r], l = a === void 0 || o(a, r, s);
      if (l !== !0)
        throw new De("option " + r + " must be " + l, De.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new De("Unknown option " + r, De.ERR_BAD_OPTION);
  }
}
const jr = {
  assertOptions: Cf,
  validators: ho
}, nn = jr.validators;
let Ai = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new fl(),
      response: new fl()
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
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = Ri(this.defaults, t);
    const { transitional: n, paramsSerializer: i, headers: r } = t;
    n !== void 0 && jr.assertOptions(n, {
      silentJSONParsing: nn.transitional(nn.boolean),
      forcedJSONParsing: nn.transitional(nn.boolean),
      clarifyTimeoutError: nn.transitional(nn.boolean),
      legacyInterceptorReqResOrdering: nn.transitional(nn.boolean)
    }, !1), i != null && (X.isFunction(i) ? t.paramsSerializer = {
      serialize: i
    } : jr.assertOptions(i, {
      encode: nn.function,
      serialize: nn.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), jr.assertOptions(t, {
      baseUrl: nn.spelling("baseURL"),
      withXsrfToken: nn.spelling("withXSRFToken")
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let o = r && X.merge(
      r.common,
      r[t.method]
    );
    r && X.forEach(
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
      const f = t.transitional || za;
      f && f.legacyInterceptorReqResOrdering ? a.unshift(_.fulfilled, _.rejected) : a.push(_.fulfilled, _.rejected);
    });
    const c = [];
    this.interceptors.response.forEach(function(_) {
      c.push(_.fulfilled, _.rejected);
    });
    let u, h = 0, d;
    if (!l) {
      const g = [Al.bind(this), void 0];
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
      u = Al.call(this, m);
    } catch (g) {
      return Promise.reject(g);
    }
    for (h = 0, d = c.length; h < d; )
      u = u.then(c[h++], c[h++]);
    return u;
  }
  getUri(e) {
    e = Ri(this.defaults, e);
    const t = ku(e.baseURL, e.url, e.allowAbsoluteUrls);
    return Ou(t, e.params, e.paramsSerializer);
  }
};
X.forEach(["delete", "get", "head", "options"], function(e) {
  Ai.prototype[e] = function(t, n) {
    return this.request(Ri(n || {}, {
      method: e,
      url: t,
      data: (n || {}).data
    }));
  };
});
X.forEach(["post", "put", "patch"], function(e) {
  function t(n) {
    return function(r, o, a) {
      return this.request(Ri(a || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: r,
        data: o
      }));
    };
  }
  Ai.prototype[e] = t(), Ai.prototype[e + "Form"] = t(!0);
});
let Lf = class ju {
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
      n.reason || (n.reason = new sr(r, o, a), t(n.reason));
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
      token: new ju(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
};
function Pf(s) {
  return function(t) {
    return s.apply(null, t);
  };
}
function If(s) {
  return X.isObject(s) && s.isAxiosError === !0;
}
const ya = {
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
Object.entries(ya).forEach(([s, e]) => {
  ya[e] = s;
});
function Xu(s) {
  const e = new Ai(s), t = Tu(Ai.prototype.request, e);
  return X.extend(t, Ai.prototype, e, { allOwnKeys: !0 }), X.extend(t, e, null, { allOwnKeys: !0 }), t.create = function(i) {
    return Xu(Ri(s, i));
  }, t;
}
const xt = Xu(ir);
xt.Axios = Ai;
xt.CanceledError = sr;
xt.CancelToken = Lf;
xt.isCancel = Bu;
xt.VERSION = Wu;
xt.toFormData = uo;
xt.AxiosError = De;
xt.Cancel = xt.CanceledError;
xt.all = function(e) {
  return Promise.all(e);
};
xt.spread = Pf;
xt.isAxiosError = If;
xt.mergeConfig = Ri;
xt.AxiosHeaders = Kt;
xt.formToJSON = (s) => Fu(X.isHTMLForm(s) ? new FormData(s) : s);
xt.getAdapter = Gu.getAdapter;
xt.HttpStatusCode = ya;
xt.default = xt;
const {
  Axios: rS,
  AxiosError: oS,
  CanceledError: aS,
  isCancel: lS,
  CancelToken: cS,
  VERSION: uS,
  all: hS,
  Cancel: dS,
  isAxiosError: fS,
  spread: pS,
  toFormData: mS,
  AxiosHeaders: gS,
  HttpStatusCode: _S,
  formToJSON: vS,
  getAdapter: yS,
  mergeConfig: xS
} = xt;
let Ys = null, Jr = null;
function Df(s) {
  Jr = s, Ys = xt.create({
    baseURL: s.apiUrl,
    timeout: 6e4,
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": s.apiKey
    }
  }), Ys.interceptors.response.use(
    (e) => e,
    (e) => Promise.reject(e)
  );
}
function Uf() {
  if (!Ys)
    throw new Error("[LiyaAiEnvVuejs] API client not initialized. Call liyaAiEnvVuejsInitializeClient first.");
  return Ys;
}
function xs() {
  if (!Jr)
    throw new Error("[LiyaAiEnvVuejs] Config not initialized. Call liyaAiEnvVuejsInitializeClient first.");
  return Jr;
}
function ES() {
  return Ys !== null && Jr !== null;
}
async function Di(s, e, t) {
  var i, r, o, a;
  const n = Uf();
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
class qu extends Error {
  constructor(t, n) {
    super(t);
    To(this, "code");
    this.code = n, this.name = "LiyaAiEnvVuejsApiError";
  }
}
async function Nf(s, e) {
  const n = {
    assistant_id: xs().assistantId,
    message: s,
    session_id: e
  }, i = await Di(
    "POST",
    "/api/v1/external/chat/",
    n
  );
  if (i.status === "success" && i.data)
    return i.data;
  if (i.code)
    throw new qu(i.message || "API error", i.code);
  return null;
}
async function Of(s, e) {
  const t = {
    text: s,
    voice: (e == null ? void 0 : e.voice) || "nova",
    speed: (e == null ? void 0 : e.speed) || 1,
    include_audio: (e == null ? void 0 : e.include_audio) ?? !0,
    include_gestures: (e == null ? void 0 : e.include_gestures) ?? !0
  }, n = await Di(
    "POST",
    "/api/v1/external/avatar/speech/",
    t
  );
  return n.status === "success" && n.data ? n.data : null;
}
async function SS(s) {
  const e = await Di(
    "GET",
    `/api/v1/external/sessions/${s}/messages/`
  );
  return e.status === "success" && e.data ? e.data.messages : [];
}
class Wa extends Error {
  constructor(t, n) {
    super(t);
    To(this, "code");
    this.code = n, this.name = "LiyaAiEnvVuejsAvatarApiError";
  }
}
async function Yu(s) {
  const t = xs().assistantId, n = t ? `?assistant_id=${t}` : "", i = await Di(
    "GET",
    `/api/v1/external/avatar/model/${n}`
  );
  if (i.status === "success" && i.data)
    return i.data;
  throw new Wa(
    i.message || "Failed to get avatar model",
    "AVATAR_MODEL_ERROR"
  );
}
async function Ku(s) {
  const t = xs().assistantId, n = t ? `?assistant_id=${t}` : "", i = await Di(
    "GET",
    `/api/v1/external/scene/background/${n}`
  );
  if (i.status === "success" && i.data)
    return i.data;
  throw new Wa(
    i.message || "Failed to get scene background",
    "SCENE_BACKGROUND_ERROR"
  );
}
async function Ff(s) {
  const e = xs(), t = s || e.assistantId, n = t ? `?assistant_id=${t}` : "", i = await Di(
    "GET",
    `/api/v1/external/presentations/${n}`
  );
  return i.status === "success" && i.data ? i.data : [];
}
async function $u() {
  const s = await Di(
    "GET",
    "/api/v1/external/user/access/"
  );
  if (s.status === "success" && s.data)
    return s.data;
  throw new Wa(
    s.message || "Failed to check user access",
    "USER_ACCESS_ERROR"
  );
}
const Bf = {
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
      pressToSpeak: "Konuşmak için mikrofona basın",
      notSupported: "Ses tanıma bu tarayıcıda desteklenmiyor"
    },
    controls: {
      close: "Kapat",
      back: "Geri",
      cancel: "İptal",
      replay: "Tekrar Oynat",
      pressAndSpeak: "Bas ve Konuş"
    },
    patienceTooltips: [
      "Sakin ol, çay demle ☕",
      "Acele işe şeytan karışır! 😈",
      "Biraz sabır, güzel şeyler geliyor... ✨",
      "Yavaş yavaş, torba dolacak 🐢",
      "Beklemek de bir sanattır 🎨",
      "Nefes al, ver... 🧘",
      "Roma bir günde kurulmadı! 🏛️",
      "Sabır acıdır, meyvesi tatlıdır 🍎"
    ],
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
      pressToSpeak: "Press the microphone to speak",
      notSupported: "Voice recognition is not supported in this browser"
    },
    controls: {
      close: "Close",
      back: "Back",
      cancel: "Cancel",
      replay: "Replay",
      pressAndSpeak: "Press & Speak"
    },
    patienceTooltips: [
      "Easy there, tiger! 🐯",
      "Patience, young padawan... ✨",
      "Good things come to those who wait ⏳",
      "Take a deep breath... 🧘",
      "Rome wasn't built in a day! 🏛️",
      "Slow and steady wins the race 🐢",
      "Chill out, grab a coffee ☕",
      "The best things in life are worth waiting for 🌟"
    ],
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
function Xr(s) {
  return s === "tr" || s === "en";
}
function Vf() {
  if (typeof window > "u" || typeof navigator > "u")
    return "tr";
  const e = (navigator.language || navigator.userLanguage || "").split("-")[0].toLowerCase();
  return Xr(e) ? e : "tr";
}
const oi = ze("tr");
function ja() {
  const s = Ne(() => oi.value), e = Ne(() => Bf[oi.value]);
  function t(i) {
    Xr(i) ? oi.value = i : oi.value = "tr";
  }
  function n(i) {
    i && Xr(i) ? oi.value = i : i ? oi.value = "tr" : oi.value = Vf();
  }
  return {
    locale: Su(s),
    t: e,
    setLocale: t,
    initLocale: n,
    liyaAiEnvVuejsIsSupportedLocale: Xr
  };
}
const MS = {
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
    Df(e);
    const { initLocale: t } = ja();
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
const Xa = "160", kf = 0, bl = 1, zf = 2, Ju = 1, Zu = 2, Nn = 3, Bn = 0, $t = 1, Mn = 2, Qn = 0, os = 1, wl = 2, Rl = 3, Cl = 4, Hf = 5, vi = 100, Gf = 101, Wf = 102, Ll = 103, Pl = 104, jf = 200, Xf = 201, qf = 202, Yf = 203, xa = 204, Ea = 205, Kf = 206, $f = 207, Jf = 208, Zf = 209, Qf = 210, ep = 211, tp = 212, np = 213, ip = 214, sp = 0, rp = 1, op = 2, Zr = 3, ap = 4, lp = 5, cp = 6, up = 7, Qu = 0, hp = 1, dp = 2, ei = 0, fp = 1, pp = 2, mp = 3, eh = 4, gp = 5, _p = 6, Il = "attached", vp = "detached", th = 300, us = 301, hs = 302, Sa = 303, Ma = 304, fo = 306, ds = 1e3, on = 1001, Qr = 1002, Ct = 1003, Aa = 1004, qr = 1005, qt = 1006, nh = 1007, Ci = 1008, ti = 1009, yp = 1010, xp = 1011, qa = 1012, ih = 1013, Jn = 1014, On = 1015, Ks = 1016, sh = 1017, rh = 1018, Ti = 1020, Ep = 1021, an = 1023, Sp = 1024, Mp = 1025, bi = 1026, fs = 1027, Ap = 1028, oh = 1029, Tp = 1030, ah = 1031, lh = 1033, Co = 33776, Lo = 33777, Po = 33778, Io = 33779, Dl = 35840, Ul = 35841, Nl = 35842, Ol = 35843, ch = 36196, Fl = 37492, Bl = 37496, Vl = 37808, kl = 37809, zl = 37810, Hl = 37811, Gl = 37812, Wl = 37813, jl = 37814, Xl = 37815, ql = 37816, Yl = 37817, Kl = 37818, $l = 37819, Jl = 37820, Zl = 37821, Do = 36492, Ql = 36494, ec = 36495, bp = 36283, tc = 36284, nc = 36285, ic = 36286, wp = 2200, Rp = 2201, Cp = 2202, $s = 2300, ps = 2301, Uo = 2302, ns = 2400, is = 2401, eo = 2402, Ya = 2500, Lp = 2501, Pp = 0, uh = 1, Ta = 2, hh = 3e3, wi = 3001, Ip = 3200, Dp = 3201, dh = 0, Up = 1, ln = "", _t = "srgb", Lt = "srgb-linear", Ka = "display-p3", po = "display-p3-linear", to = "linear", ht = "srgb", no = "rec709", io = "p3", Fi = 7680, sc = 519, Np = 512, Op = 513, Fp = 514, fh = 515, Bp = 516, Vp = 517, kp = 518, zp = 519, ba = 35044, rc = "300 es", wa = 1035, Fn = 2e3, so = 2001;
class Ui {
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
const Nt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let oc = 1234567;
const Gs = Math.PI / 180, ms = 180 / Math.PI;
function mn() {
  const s = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Nt[s & 255] + Nt[s >> 8 & 255] + Nt[s >> 16 & 255] + Nt[s >> 24 & 255] + "-" + Nt[e & 255] + Nt[e >> 8 & 255] + "-" + Nt[e >> 16 & 15 | 64] + Nt[e >> 24 & 255] + "-" + Nt[t & 63 | 128] + Nt[t >> 8 & 255] + "-" + Nt[t >> 16 & 255] + Nt[t >> 24 & 255] + Nt[n & 255] + Nt[n >> 8 & 255] + Nt[n >> 16 & 255] + Nt[n >> 24 & 255]).toLowerCase();
}
function Ft(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function $a(s, e) {
  return (s % e + e) % e;
}
function Hp(s, e, t, n, i) {
  return n + (s - e) * (i - n) / (t - e);
}
function Gp(s, e, t) {
  return s !== e ? (t - s) / (e - s) : 0;
}
function Ws(s, e, t) {
  return (1 - t) * s + t * e;
}
function Wp(s, e, t, n) {
  return Ws(s, e, 1 - Math.exp(-t * n));
}
function jp(s, e = 1) {
  return e - Math.abs($a(s, e * 2) - e);
}
function Xp(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * (3 - 2 * s));
}
function qp(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * s * (s * (s * 6 - 15) + 10));
}
function Yp(s, e) {
  return s + Math.floor(Math.random() * (e - s + 1));
}
function Kp(s, e) {
  return s + Math.random() * (e - s);
}
function $p(s) {
  return s * (0.5 - Math.random());
}
function Jp(s) {
  s !== void 0 && (oc = s);
  let e = oc += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Zp(s) {
  return s * Gs;
}
function Qp(s) {
  return s * ms;
}
function Ra(s) {
  return (s & s - 1) === 0 && s !== 0;
}
function em(s) {
  return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function ro(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function tm(s, e, t, n, i) {
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
function An(s, e) {
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
function ct(s, e) {
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
const nm = {
  DEG2RAD: Gs,
  RAD2DEG: ms,
  generateUUID: mn,
  clamp: Ft,
  euclideanModulo: $a,
  mapLinear: Hp,
  inverseLerp: Gp,
  lerp: Ws,
  damp: Wp,
  pingpong: jp,
  smoothstep: Xp,
  smootherstep: qp,
  randInt: Yp,
  randFloat: Kp,
  randFloatSpread: $p,
  seededRandom: Jp,
  degToRad: Zp,
  radToDeg: Qp,
  isPowerOfTwo: Ra,
  ceilPowerOfTwo: em,
  floorPowerOfTwo: ro,
  setQuaternionFromProperEuler: tm,
  normalize: ct,
  denormalize: An
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
    return Math.acos(Ft(n, -1, 1));
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
    const n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], u = n[4], h = n[7], d = n[2], m = n[5], g = n[8], _ = i[0], f = i[3], p = i[6], x = i[1], y = i[4], b = i[7], C = i[2], w = i[5], R = i[8];
    return r[0] = o * _ + a * x + l * C, r[3] = o * f + a * y + l * w, r[6] = o * p + a * b + l * R, r[1] = c * _ + u * x + h * C, r[4] = c * f + u * y + h * w, r[7] = c * p + u * b + h * R, r[2] = d * _ + m * x + g * C, r[5] = d * f + m * y + g * w, r[8] = d * p + m * b + g * R, this;
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
    return this.premultiply(No.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(No.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(No.makeTranslation(e, t)), this;
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
const No = /* @__PURE__ */ new qe();
function ph(s) {
  for (let e = s.length - 1; e >= 0; --e)
    if (s[e] >= 65535) return !0;
  return !1;
}
function Js(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function im() {
  const s = Js("canvas");
  return s.style.display = "block", s;
}
const ac = {};
function js(s) {
  s in ac || (ac[s] = !0, console.warn(s));
}
const lc = /* @__PURE__ */ new qe().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), cc = /* @__PURE__ */ new qe().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), cr = {
  [Lt]: {
    transfer: to,
    primaries: no,
    toReference: (s) => s,
    fromReference: (s) => s
  },
  [_t]: {
    transfer: ht,
    primaries: no,
    toReference: (s) => s.convertSRGBToLinear(),
    fromReference: (s) => s.convertLinearToSRGB()
  },
  [po]: {
    transfer: to,
    primaries: io,
    toReference: (s) => s.applyMatrix3(cc),
    fromReference: (s) => s.applyMatrix3(lc)
  },
  [Ka]: {
    transfer: ht,
    primaries: io,
    toReference: (s) => s.convertSRGBToLinear().applyMatrix3(cc),
    fromReference: (s) => s.applyMatrix3(lc).convertLinearToSRGB()
  }
}, sm = /* @__PURE__ */ new Set([Lt, po]), st = {
  enabled: !0,
  _workingColorSpace: Lt,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(s) {
    if (!sm.has(s))
      throw new Error(`Unsupported working color space, "${s}".`);
    this._workingColorSpace = s;
  },
  convert: function(s, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return s;
    const n = cr[e].toReference, i = cr[t].fromReference;
    return i(n(s));
  },
  fromWorkingColorSpace: function(s, e) {
    return this.convert(s, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(s, e) {
    return this.convert(s, e, this._workingColorSpace);
  },
  getPrimaries: function(s) {
    return cr[s].primaries;
  },
  getTransfer: function(s) {
    return s === ln ? to : cr[s].transfer;
  }
};
function as(s) {
  return s < 0.04045 ? s * 0.0773993808 : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function Oo(s) {
  return s < 31308e-7 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
let Bi;
class mh {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Bi === void 0 && (Bi = Js("canvas")), Bi.width = e.width, Bi.height = e.height;
      const n = Bi.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Bi;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Js("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
      for (let o = 0; o < r.length; o++)
        r[o] = as(r[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(as(t[n] / 255) * 255) : t[n] = as(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let rm = 0;
class gh {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: rm++ }), this.uuid = mn(), this.data = e, this.version = 0;
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
          i[o].isDataTexture ? r.push(Fo(i[o].image)) : r.push(Fo(i[o]));
      } else
        r = Fo(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Fo(s) {
  return typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s instanceof ImageBitmap ? mh.getDataURL(s) : s.data ? {
    data: Array.from(s.data),
    width: s.width,
    height: s.height,
    type: s.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let om = 0;
class Dt extends Ui {
  constructor(e = Dt.DEFAULT_IMAGE, t = Dt.DEFAULT_MAPPING, n = on, i = on, r = qt, o = Ci, a = an, l = ti, c = Dt.DEFAULT_ANISOTROPY, u = ln) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: om++ }), this.uuid = mn(), this.name = "", this.source = new gh(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new Je(0, 0), this.repeat = new Je(1, 1), this.center = new Je(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new qe(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof u == "string" ? this.colorSpace = u : (js("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = u === wi ? _t : ln), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
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
    if (this.mapping !== th) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case ds:
          e.x = e.x - Math.floor(e.x);
          break;
        case on:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Qr:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case ds:
          e.y = e.y - Math.floor(e.y);
          break;
        case on:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Qr:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return js("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === _t ? wi : hh;
  }
  set encoding(e) {
    js("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === wi ? _t : ln;
  }
}
Dt.DEFAULT_IMAGE = null;
Dt.DEFAULT_MAPPING = th;
Dt.DEFAULT_ANISOTROPY = 1;
class ut {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    ut.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
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
      const y = (c + 1) / 2, b = (m + 1) / 2, C = (p + 1) / 2, w = (u + d) / 4, R = (h + _) / 4, G = (g + f) / 4;
      return y > b && y > C ? y < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(y), i = w / n, r = R / n) : b > C ? b < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(b), n = w / i, r = G / i) : C < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(C), n = R / r, i = G / r), this.set(n, i, r, t), this;
    }
    let x = Math.sqrt((f - g) * (f - g) + (h - _) * (h - _) + (d - u) * (d - u));
    return Math.abs(x) < 1e-3 && (x = 1), this.x = (f - g) / x, this.y = (h - _) / x, this.z = (d - u) / x, this.w = Math.acos((c + m + p - 1) / 2), this;
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
class am extends Ui {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new ut(0, 0, e, t), this.scissorTest = !1, this.viewport = new ut(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (js("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === wi ? _t : ln), n = Object.assign({
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
    return this.texture.source = new gh(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Li extends am {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class _h extends Dt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = Ct, this.minFilter = Ct, this.wrapR = on, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class lm extends Dt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = Ct, this.minFilter = Ct, this.wrapR = on, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class gn {
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
      const p = l * d + c * m + u * g + h * _, x = p >= 0 ? 1 : -1, y = 1 - p * p;
      if (y > Number.EPSILON) {
        const C = Math.sqrt(y), w = Math.atan2(C, p * x);
        f = Math.sin(f * w) / C, a = Math.sin(a * w) / C;
      }
      const b = a * x;
      if (l = l * f + d * b, c = c * f + m * b, u = u * f + g * b, h = h * f + _ * b, f === 1 - a) {
        const C = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
        l *= C, c *= C, u *= C, h *= C;
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
    return 2 * Math.acos(Math.abs(Ft(this.dot(e), -1, 1)));
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
    return this.applyQuaternion(uc.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(uc.setFromAxisAngle(e, t));
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
    return Bo.copy(this).projectOnVector(e), this.sub(Bo);
  }
  reflect(e) {
    return this.sub(Bo.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Ft(n, -1, 1));
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
const Bo = /* @__PURE__ */ new N(), uc = /* @__PURE__ */ new gn();
class Vn {
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
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), ur.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), ur.copy(n.boundingBox)), ur.applyMatrix4(e.matrixWorld), this.union(ur);
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
    this.getCenter(Cs), hr.subVectors(this.max, Cs), Vi.subVectors(e.a, Cs), ki.subVectors(e.b, Cs), zi.subVectors(e.c, Cs), zn.subVectors(ki, Vi), Hn.subVectors(zi, ki), ai.subVectors(Vi, zi);
    let t = [
      0,
      -zn.z,
      zn.y,
      0,
      -Hn.z,
      Hn.y,
      0,
      -ai.z,
      ai.y,
      zn.z,
      0,
      -zn.x,
      Hn.z,
      0,
      -Hn.x,
      ai.z,
      0,
      -ai.x,
      -zn.y,
      zn.x,
      0,
      -Hn.y,
      Hn.x,
      0,
      -ai.y,
      ai.x,
      0
    ];
    return !Vo(t, Vi, ki, zi, hr) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Vo(t, Vi, ki, zi, hr)) ? !1 : (dr.crossVectors(zn, Hn), t = [dr.x, dr.y, dr.z], Vo(t, Vi, ki, zi, hr));
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
    return this.isEmpty() ? this : (Cn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Cn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Cn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Cn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Cn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Cn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Cn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Cn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Cn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Cn = [
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N()
], un = /* @__PURE__ */ new N(), ur = /* @__PURE__ */ new Vn(), Vi = /* @__PURE__ */ new N(), ki = /* @__PURE__ */ new N(), zi = /* @__PURE__ */ new N(), zn = /* @__PURE__ */ new N(), Hn = /* @__PURE__ */ new N(), ai = /* @__PURE__ */ new N(), Cs = /* @__PURE__ */ new N(), hr = /* @__PURE__ */ new N(), dr = /* @__PURE__ */ new N(), li = /* @__PURE__ */ new N();
function Vo(s, e, t, n, i) {
  for (let r = 0, o = s.length - 3; r <= o; r += 3) {
    li.fromArray(s, r);
    const a = i.x * Math.abs(li.x) + i.y * Math.abs(li.y) + i.z * Math.abs(li.z), l = e.dot(li), c = t.dot(li), u = n.dot(li);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a)
      return !1;
  }
  return !0;
}
const cm = /* @__PURE__ */ new Vn(), Ls = /* @__PURE__ */ new N(), ko = /* @__PURE__ */ new N();
class bn {
  constructor(e = new N(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : cm.setFromPoints(e).getCenter(n);
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
    Ls.subVectors(e, this.center);
    const t = Ls.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Ls, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (ko.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Ls.copy(e.center).add(ko)), this.expandByPoint(Ls.copy(e.center).sub(ko))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Ln = /* @__PURE__ */ new N(), zo = /* @__PURE__ */ new N(), fr = /* @__PURE__ */ new N(), Gn = /* @__PURE__ */ new N(), Ho = /* @__PURE__ */ new N(), pr = /* @__PURE__ */ new N(), Go = /* @__PURE__ */ new N();
class mo {
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
    return this.origin.copy(this.at(e, Ln)), this;
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
    const t = Ln.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Ln.copy(this.origin).addScaledVector(this.direction, t), Ln.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    zo.copy(e).add(t).multiplyScalar(0.5), fr.copy(t).sub(e).normalize(), Gn.copy(this.origin).sub(zo);
    const r = e.distanceTo(t) * 0.5, o = -this.direction.dot(fr), a = Gn.dot(this.direction), l = -Gn.dot(fr), c = Gn.lengthSq(), u = Math.abs(1 - o * o);
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
    return n && n.copy(this.origin).addScaledVector(this.direction, h), i && i.copy(zo).addScaledVector(fr, d), m;
  }
  intersectSphere(e, t) {
    Ln.subVectors(e.center, this.origin);
    const n = Ln.dot(this.direction), i = Ln.dot(Ln) - n * n, r = e.radius * e.radius;
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
    return this.intersectBox(e, Ln) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    Ho.subVectors(t, e), pr.subVectors(n, e), Go.crossVectors(Ho, pr);
    let o = this.direction.dot(Go), a;
    if (o > 0) {
      if (i) return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    Gn.subVectors(this.origin, e);
    const l = a * this.direction.dot(pr.crossVectors(Gn, pr));
    if (l < 0)
      return null;
    const c = a * this.direction.dot(Ho.cross(Gn));
    if (c < 0 || l + c > o)
      return null;
    const u = -a * Gn.dot(Go);
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
    const t = this.elements, n = e.elements, i = 1 / Hi.setFromMatrixColumn(e, 0).length(), r = 1 / Hi.setFromMatrixColumn(e, 1).length(), o = 1 / Hi.setFromMatrixColumn(e, 2).length();
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
    return this.compose(um, e, hm);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Zt.subVectors(e, t), Zt.lengthSq() === 0 && (Zt.z = 1), Zt.normalize(), Wn.crossVectors(n, Zt), Wn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Zt.x += 1e-4 : Zt.z += 1e-4, Zt.normalize(), Wn.crossVectors(n, Zt)), Wn.normalize(), mr.crossVectors(Zt, Wn), i[0] = Wn.x, i[4] = mr.x, i[8] = Zt.x, i[1] = Wn.y, i[5] = mr.y, i[9] = Zt.y, i[2] = Wn.z, i[6] = mr.z, i[10] = Zt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], u = n[1], h = n[5], d = n[9], m = n[13], g = n[2], _ = n[6], f = n[10], p = n[14], x = n[3], y = n[7], b = n[11], C = n[15], w = i[0], R = i[4], G = i[8], E = i[12], T = i[1], z = i[5], J = i[9], oe = i[13], L = i[2], I = i[6], U = i[10], ee = i[14], O = i[3], B = i[7], Q = i[11], H = i[15];
    return r[0] = o * w + a * T + l * L + c * O, r[4] = o * R + a * z + l * I + c * B, r[8] = o * G + a * J + l * U + c * Q, r[12] = o * E + a * oe + l * ee + c * H, r[1] = u * w + h * T + d * L + m * O, r[5] = u * R + h * z + d * I + m * B, r[9] = u * G + h * J + d * U + m * Q, r[13] = u * E + h * oe + d * ee + m * H, r[2] = g * w + _ * T + f * L + p * O, r[6] = g * R + _ * z + f * I + p * B, r[10] = g * G + _ * J + f * U + p * Q, r[14] = g * E + _ * oe + f * ee + p * H, r[3] = x * w + y * T + b * L + C * O, r[7] = x * R + y * z + b * I + C * B, r[11] = x * G + y * J + b * U + C * Q, r[15] = x * E + y * oe + b * ee + C * H, this;
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
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], h = e[9], d = e[10], m = e[11], g = e[12], _ = e[13], f = e[14], p = e[15], x = h * f * c - _ * d * c + _ * l * m - a * f * m - h * l * p + a * d * p, y = g * d * c - u * f * c - g * l * m + o * f * m + u * l * p - o * d * p, b = u * _ * c - g * h * c + g * a * m - o * _ * m - u * a * p + o * h * p, C = g * h * l - u * _ * l - g * a * d + o * _ * d + u * a * f - o * h * f, w = t * x + n * y + i * b + r * C;
    if (w === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const R = 1 / w;
    return e[0] = x * R, e[1] = (_ * d * r - h * f * r - _ * i * m + n * f * m + h * i * p - n * d * p) * R, e[2] = (a * f * r - _ * l * r + _ * i * c - n * f * c - a * i * p + n * l * p) * R, e[3] = (h * l * r - a * d * r - h * i * c + n * d * c + a * i * m - n * l * m) * R, e[4] = y * R, e[5] = (u * f * r - g * d * r + g * i * m - t * f * m - u * i * p + t * d * p) * R, e[6] = (g * l * r - o * f * r - g * i * c + t * f * c + o * i * p - t * l * p) * R, e[7] = (o * d * r - u * l * r + u * i * c - t * d * c - o * i * m + t * l * m) * R, e[8] = b * R, e[9] = (g * h * r - u * _ * r - g * n * m + t * _ * m + u * n * p - t * h * p) * R, e[10] = (o * _ * r - g * a * r + g * n * c - t * _ * c - o * n * p + t * a * p) * R, e[11] = (u * a * r - o * h * r - u * n * c + t * h * c + o * n * m - t * a * m) * R, e[12] = C * R, e[13] = (u * _ * i - g * h * i + g * n * d - t * _ * d - u * n * f + t * h * f) * R, e[14] = (g * a * i - o * _ * i - g * n * l + t * _ * l + o * n * f - t * a * f) * R, e[15] = (o * h * i - u * a * i + u * n * l - t * h * l - o * n * d + t * a * d) * R, this;
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
    const i = this.elements, r = t._x, o = t._y, a = t._z, l = t._w, c = r + r, u = o + o, h = a + a, d = r * c, m = r * u, g = r * h, _ = o * u, f = o * h, p = a * h, x = l * c, y = l * u, b = l * h, C = n.x, w = n.y, R = n.z;
    return i[0] = (1 - (_ + p)) * C, i[1] = (m + b) * C, i[2] = (g - y) * C, i[3] = 0, i[4] = (m - b) * w, i[5] = (1 - (d + p)) * w, i[6] = (f + x) * w, i[7] = 0, i[8] = (g + y) * R, i[9] = (f - x) * R, i[10] = (1 - (d + _)) * R, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = Hi.set(i[0], i[1], i[2]).length();
    const o = Hi.set(i[4], i[5], i[6]).length(), a = Hi.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], hn.copy(this);
    const c = 1 / r, u = 1 / o, h = 1 / a;
    return hn.elements[0] *= c, hn.elements[1] *= c, hn.elements[2] *= c, hn.elements[4] *= u, hn.elements[5] *= u, hn.elements[6] *= u, hn.elements[8] *= h, hn.elements[9] *= h, hn.elements[10] *= h, t.setFromRotationMatrix(hn), n.x = r, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, i, r, o, a = Fn) {
    const l = this.elements, c = 2 * r / (t - e), u = 2 * r / (n - i), h = (t + e) / (t - e), d = (n + i) / (n - i);
    let m, g;
    if (a === Fn)
      m = -(o + r) / (o - r), g = -2 * o * r / (o - r);
    else if (a === so)
      m = -o / (o - r), g = -o * r / (o - r);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return l[0] = c, l[4] = 0, l[8] = h, l[12] = 0, l[1] = 0, l[5] = u, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = m, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, r, o, a = Fn) {
    const l = this.elements, c = 1 / (t - e), u = 1 / (n - i), h = 1 / (o - r), d = (t + e) * c, m = (n + i) * u;
    let g, _;
    if (a === Fn)
      g = (o + r) * h, _ = -2 * h;
    else if (a === so)
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
const Hi = /* @__PURE__ */ new N(), hn = /* @__PURE__ */ new Ye(), um = /* @__PURE__ */ new N(0, 0, 0), hm = /* @__PURE__ */ new N(1, 1, 1), Wn = /* @__PURE__ */ new N(), mr = /* @__PURE__ */ new N(), Zt = /* @__PURE__ */ new N(), hc = /* @__PURE__ */ new Ye(), dc = /* @__PURE__ */ new gn();
class go {
  constructor(e = 0, t = 0, n = 0, i = go.DEFAULT_ORDER) {
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
        this._y = Math.asin(Ft(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-u, m), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ft(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(a, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ft(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-h, m), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-Ft(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(d, m), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(Ft(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(a, m));
        break;
      case "XZY":
        this._z = Math.asin(-Ft(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-u, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return hc.makeRotationFromQuaternion(e), this.setFromRotationMatrix(hc, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return dc.setFromEuler(this), this.setFromQuaternion(dc, e);
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
go.DEFAULT_ORDER = "XYZ";
class vh {
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
let dm = 0;
const fc = /* @__PURE__ */ new N(), Gi = /* @__PURE__ */ new gn(), Pn = /* @__PURE__ */ new Ye(), gr = /* @__PURE__ */ new N(), Ps = /* @__PURE__ */ new N(), fm = /* @__PURE__ */ new N(), pm = /* @__PURE__ */ new gn(), pc = /* @__PURE__ */ new N(1, 0, 0), mc = /* @__PURE__ */ new N(0, 1, 0), gc = /* @__PURE__ */ new N(0, 0, 1), mm = { type: "added" }, gm = { type: "removed" };
class vt extends Ui {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: dm++ }), this.uuid = mn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = vt.DEFAULT_UP.clone();
    const e = new N(), t = new go(), n = new gn(), i = new N(1, 1, 1);
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
    }), this.matrix = new Ye(), this.matrixWorld = new Ye(), this.matrixAutoUpdate = vt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new vh(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return Gi.setFromAxisAngle(e, t), this.quaternion.multiply(Gi), this;
  }
  rotateOnWorldAxis(e, t) {
    return Gi.setFromAxisAngle(e, t), this.quaternion.premultiply(Gi), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(pc, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(mc, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(gc, e);
  }
  translateOnAxis(e, t) {
    return fc.copy(e).applyQuaternion(this.quaternion), this.position.add(fc.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(pc, e);
  }
  translateY(e) {
    return this.translateOnAxis(mc, e);
  }
  translateZ(e) {
    return this.translateOnAxis(gc, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Pn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? gr.copy(e) : gr.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), Ps.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Pn.lookAt(Ps, gr, this.up) : Pn.lookAt(gr, Ps, this.up), this.quaternion.setFromRotationMatrix(Pn), i && (Pn.extractRotation(i.matrixWorld), Gi.setFromRotationMatrix(Pn), this.quaternion.premultiply(Gi.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(mm)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(gm)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Pn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Pn.multiply(e.parent.matrixWorld)), e.applyMatrix4(Pn), this.add(e), e.updateWorldMatrix(!1, !0), this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ps, e, fm), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ps, pm, e), e;
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
vt.DEFAULT_UP = /* @__PURE__ */ new N(0, 1, 0);
vt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const dn = /* @__PURE__ */ new N(), In = /* @__PURE__ */ new N(), Wo = /* @__PURE__ */ new N(), Dn = /* @__PURE__ */ new N(), Wi = /* @__PURE__ */ new N(), ji = /* @__PURE__ */ new N(), _c = /* @__PURE__ */ new N(), jo = /* @__PURE__ */ new N(), Xo = /* @__PURE__ */ new N(), qo = /* @__PURE__ */ new N();
let _r = !1;
class pn {
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
    dn.subVectors(i, t), In.subVectors(n, t), Wo.subVectors(e, t);
    const o = dn.dot(dn), a = dn.dot(In), l = dn.dot(Wo), c = In.dot(In), u = In.dot(Wo), h = o * c - a * a;
    if (h === 0)
      return r.set(0, 0, 0), null;
    const d = 1 / h, m = (c * l - a * u) * d, g = (o * u - a * l) * d;
    return r.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Dn) === null ? !1 : Dn.x >= 0 && Dn.y >= 0 && Dn.x + Dn.y <= 1;
  }
  static getUV(e, t, n, i, r, o, a, l) {
    return _r === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), _r = !0), this.getInterpolation(e, t, n, i, r, o, a, l);
  }
  static getInterpolation(e, t, n, i, r, o, a, l) {
    return this.getBarycoord(e, t, n, i, Dn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, Dn.x), l.addScaledVector(o, Dn.y), l.addScaledVector(a, Dn.z), l);
  }
  static isFrontFacing(e, t, n, i) {
    return dn.subVectors(n, t), In.subVectors(e, t), dn.cross(In).dot(i) < 0;
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
    return dn.subVectors(this.c, this.b), In.subVectors(this.a, this.b), dn.cross(In).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return pn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return pn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, r) {
    return _r === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), _r = !0), pn.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
  }
  getInterpolation(e, t, n, i, r) {
    return pn.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return pn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return pn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, r = this.c;
    let o, a;
    Wi.subVectors(i, n), ji.subVectors(r, n), jo.subVectors(e, n);
    const l = Wi.dot(jo), c = ji.dot(jo);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    Xo.subVectors(e, i);
    const u = Wi.dot(Xo), h = ji.dot(Xo);
    if (u >= 0 && h <= u)
      return t.copy(i);
    const d = l * h - u * c;
    if (d <= 0 && l >= 0 && u <= 0)
      return o = l / (l - u), t.copy(n).addScaledVector(Wi, o);
    qo.subVectors(e, r);
    const m = Wi.dot(qo), g = ji.dot(qo);
    if (g >= 0 && m <= g)
      return t.copy(r);
    const _ = m * c - l * g;
    if (_ <= 0 && c >= 0 && g <= 0)
      return a = c / (c - g), t.copy(n).addScaledVector(ji, a);
    const f = u * g - m * h;
    if (f <= 0 && h - u >= 0 && m - g >= 0)
      return _c.subVectors(r, i), a = (h - u) / (h - u + (m - g)), t.copy(i).addScaledVector(_c, a);
    const p = 1 / (f + _ + d);
    return o = _ * p, a = d * p, t.copy(n).addScaledVector(Wi, o).addScaledVector(ji, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const yh = {
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
}, jn = { h: 0, s: 0, l: 0 }, vr = { h: 0, s: 0, l: 0 };
function Yo(s, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? s + (e - s) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? s + (e - s) * 6 * (2 / 3 - t) : s;
}
class Be {
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
  setHex(e, t = _t) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, st.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = st.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, st.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = st.workingColorSpace) {
    if (e = $a(e, 1), t = Ft(t, 0, 1), n = Ft(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r;
      this.r = Yo(o, r, e + 1 / 3), this.g = Yo(o, r, e), this.b = Yo(o, r, e - 1 / 3);
    }
    return st.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = _t) {
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
  setColorName(e, t = _t) {
    const n = yh[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = as(e.r), this.g = as(e.g), this.b = as(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Oo(e.r), this.g = Oo(e.g), this.b = Oo(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = _t) {
    return st.fromWorkingColorSpace(Ot.copy(this), e), Math.round(Ft(Ot.r * 255, 0, 255)) * 65536 + Math.round(Ft(Ot.g * 255, 0, 255)) * 256 + Math.round(Ft(Ot.b * 255, 0, 255));
  }
  getHexString(e = _t) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = st.workingColorSpace) {
    st.fromWorkingColorSpace(Ot.copy(this), t);
    const n = Ot.r, i = Ot.g, r = Ot.b, o = Math.max(n, i, r), a = Math.min(n, i, r);
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
    return st.fromWorkingColorSpace(Ot.copy(this), t), e.r = Ot.r, e.g = Ot.g, e.b = Ot.b, e;
  }
  getStyle(e = _t) {
    st.fromWorkingColorSpace(Ot.copy(this), e);
    const t = Ot.r, n = Ot.g, i = Ot.b;
    return e !== _t ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(jn), this.setHSL(jn.h + e, jn.s + t, jn.l + n);
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
    this.getHSL(jn), e.getHSL(vr);
    const n = Ws(jn.h, vr.h, t), i = Ws(jn.s, vr.s, t), r = Ws(jn.l, vr.l, t);
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
const Ot = /* @__PURE__ */ new Be();
Be.NAMES = yh;
let _m = 0;
class Tn extends Ui {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: _m++ }), this.uuid = mn(), this.name = "", this.type = "Material", this.blending = os, this.side = Bn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = xa, this.blendDst = Ea, this.blendEquation = vi, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Be(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Zr, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = sc, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Fi, this.stencilZFail = Fi, this.stencilZPass = Fi, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== os && (n.blending = this.blending), this.side !== Bn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== xa && (n.blendSrc = this.blendSrc), this.blendDst !== Ea && (n.blendDst = this.blendDst), this.blendEquation !== vi && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Zr && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== sc && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Fi && (n.stencilFail = this.stencilFail), this.stencilZFail !== Fi && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Fi && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
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
class Si extends Tn {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Be(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Qu, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Mt = /* @__PURE__ */ new N(), yr = /* @__PURE__ */ new Je();
class Wt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = ba, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = On, this.version = 0;
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
        yr.fromBufferAttribute(this, t), yr.applyMatrix3(e), this.setXY(t, yr.x, yr.y);
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
    return this.normalized && (n = An(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = ct(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = An(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = An(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = An(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = An(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = ct(t, this.array), n = ct(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = ct(t, this.array), n = ct(n, this.array), i = ct(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e *= this.itemSize, this.normalized && (t = ct(t, this.array), n = ct(n, this.array), i = ct(i, this.array), r = ct(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
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
    return this.name !== "" && (e.name = this.name), this.usage !== ba && (e.usage = this.usage), e;
  }
}
class xh extends Wt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Eh extends Wt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class cn extends Wt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let vm = 0;
const sn = /* @__PURE__ */ new Ye(), Ko = /* @__PURE__ */ new vt(), Xi = /* @__PURE__ */ new N(), Qt = /* @__PURE__ */ new Vn(), Is = /* @__PURE__ */ new Vn(), Rt = /* @__PURE__ */ new N();
class vn extends Ui {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: vm++ }), this.uuid = mn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (ph(e) ? Eh : xh)(e, 1) : this.index = e, this;
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
    return Ko.lookAt(e), Ko.updateMatrix(), this.applyMatrix4(Ko.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Xi).negate(), this.translate(Xi.x, Xi.y, Xi.z), this;
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
    this.boundingBox === null && (this.boundingBox = new Vn());
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
    this.boundingSphere === null && (this.boundingSphere = new bn());
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
          Is.setFromBufferAttribute(a), this.morphTargetsRelative ? (Rt.addVectors(Qt.min, Is.min), Qt.expandByPoint(Rt), Rt.addVectors(Qt.max, Is.max), Qt.expandByPoint(Rt)) : (Qt.expandByPoint(Is.min), Qt.expandByPoint(Is.max));
        }
      Qt.getCenter(n);
      let i = 0;
      for (let r = 0, o = e.count; r < o; r++)
        Rt.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(Rt));
      if (t)
        for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r], l = this.morphTargetsRelative;
          for (let c = 0, u = a.count; c < u; c++)
            Rt.fromBufferAttribute(a, c), l && (Xi.fromBufferAttribute(e, c), Rt.add(Xi)), i = Math.max(i, n.distanceToSquared(Rt));
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
    for (let T = 0; T < a; T++)
      c[T] = new N(), u[T] = new N();
    const h = new N(), d = new N(), m = new N(), g = new Je(), _ = new Je(), f = new Je(), p = new N(), x = new N();
    function y(T, z, J) {
      h.fromArray(i, T * 3), d.fromArray(i, z * 3), m.fromArray(i, J * 3), g.fromArray(o, T * 2), _.fromArray(o, z * 2), f.fromArray(o, J * 2), d.sub(h), m.sub(h), _.sub(g), f.sub(g);
      const oe = 1 / (_.x * f.y - f.x * _.y);
      isFinite(oe) && (p.copy(d).multiplyScalar(f.y).addScaledVector(m, -_.y).multiplyScalar(oe), x.copy(m).multiplyScalar(_.x).addScaledVector(d, -f.x).multiplyScalar(oe), c[T].add(p), c[z].add(p), c[J].add(p), u[T].add(x), u[z].add(x), u[J].add(x));
    }
    let b = this.groups;
    b.length === 0 && (b = [{
      start: 0,
      count: n.length
    }]);
    for (let T = 0, z = b.length; T < z; ++T) {
      const J = b[T], oe = J.start, L = J.count;
      for (let I = oe, U = oe + L; I < U; I += 3)
        y(
          n[I + 0],
          n[I + 1],
          n[I + 2]
        );
    }
    const C = new N(), w = new N(), R = new N(), G = new N();
    function E(T) {
      R.fromArray(r, T * 3), G.copy(R);
      const z = c[T];
      C.copy(z), C.sub(R.multiplyScalar(R.dot(z))).normalize(), w.crossVectors(G, z);
      const oe = w.dot(u[T]) < 0 ? -1 : 1;
      l[T * 4] = C.x, l[T * 4 + 1] = C.y, l[T * 4 + 2] = C.z, l[T * 4 + 3] = oe;
    }
    for (let T = 0, z = b.length; T < z; ++T) {
      const J = b[T], oe = J.start, L = J.count;
      for (let I = oe, U = oe + L; I < U; I += 3)
        E(n[I + 0]), E(n[I + 1]), E(n[I + 2]);
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
    const t = new vn(), n = this.index.array, i = this.attributes;
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
const vc = /* @__PURE__ */ new Ye(), ci = /* @__PURE__ */ new mo(), xr = /* @__PURE__ */ new bn(), yc = /* @__PURE__ */ new N(), qi = /* @__PURE__ */ new N(), Yi = /* @__PURE__ */ new N(), Ki = /* @__PURE__ */ new N(), $o = /* @__PURE__ */ new N(), Er = /* @__PURE__ */ new N(), Sr = /* @__PURE__ */ new Je(), Mr = /* @__PURE__ */ new Je(), Ar = /* @__PURE__ */ new Je(), xc = /* @__PURE__ */ new N(), Ec = /* @__PURE__ */ new N(), Sc = /* @__PURE__ */ new N(), Tr = /* @__PURE__ */ new N(), br = /* @__PURE__ */ new N();
class Ge extends vt {
  constructor(e = new vn(), t = new Si()) {
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
      Er.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const u = a[l], h = r[l];
        u !== 0 && ($o.fromBufferAttribute(h, e), o ? Er.addScaledVector($o, u) : Er.addScaledVector($o.sub(t), u));
      }
      t.add(Er);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), xr.copy(n.boundingSphere), xr.applyMatrix4(r), ci.copy(e.ray).recast(e.near), !(xr.containsPoint(ci.origin) === !1 && (ci.intersectSphere(xr, yc) === null || ci.origin.distanceToSquared(yc) > (e.far - e.near) ** 2)) && (vc.copy(r).invert(), ci.copy(e.ray).applyMatrix4(vc), !(n.boundingBox !== null && ci.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, ci)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry, o = this.material, a = r.index, l = r.attributes.position, c = r.attributes.uv, u = r.attributes.uv1, h = r.attributes.normal, d = r.groups, m = r.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let g = 0, _ = d.length; g < _; g++) {
          const f = d[g], p = o[f.materialIndex], x = Math.max(f.start, m.start), y = Math.min(a.count, Math.min(f.start + f.count, m.start + m.count));
          for (let b = x, C = y; b < C; b += 3) {
            const w = a.getX(b), R = a.getX(b + 1), G = a.getX(b + 2);
            i = wr(this, p, e, n, c, u, h, w, R, G), i && (i.faceIndex = Math.floor(b / 3), i.face.materialIndex = f.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, m.start), _ = Math.min(a.count, m.start + m.count);
        for (let f = g, p = _; f < p; f += 3) {
          const x = a.getX(f), y = a.getX(f + 1), b = a.getX(f + 2);
          i = wr(this, o, e, n, c, u, h, x, y, b), i && (i.faceIndex = Math.floor(f / 3), t.push(i));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let g = 0, _ = d.length; g < _; g++) {
          const f = d[g], p = o[f.materialIndex], x = Math.max(f.start, m.start), y = Math.min(l.count, Math.min(f.start + f.count, m.start + m.count));
          for (let b = x, C = y; b < C; b += 3) {
            const w = b, R = b + 1, G = b + 2;
            i = wr(this, p, e, n, c, u, h, w, R, G), i && (i.faceIndex = Math.floor(b / 3), i.face.materialIndex = f.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, m.start), _ = Math.min(l.count, m.start + m.count);
        for (let f = g, p = _; f < p; f += 3) {
          const x = f, y = f + 1, b = f + 2;
          i = wr(this, o, e, n, c, u, h, x, y, b), i && (i.faceIndex = Math.floor(f / 3), t.push(i));
        }
      }
  }
}
function ym(s, e, t, n, i, r, o, a) {
  let l;
  if (e.side === $t ? l = n.intersectTriangle(o, r, i, !0, a) : l = n.intersectTriangle(i, r, o, e.side === Bn, a), l === null) return null;
  br.copy(a), br.applyMatrix4(s.matrixWorld);
  const c = t.ray.origin.distanceTo(br);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: br.clone(),
    object: s
  };
}
function wr(s, e, t, n, i, r, o, a, l, c) {
  s.getVertexPosition(a, qi), s.getVertexPosition(l, Yi), s.getVertexPosition(c, Ki);
  const u = ym(s, e, t, n, qi, Yi, Ki, Tr);
  if (u) {
    i && (Sr.fromBufferAttribute(i, a), Mr.fromBufferAttribute(i, l), Ar.fromBufferAttribute(i, c), u.uv = pn.getInterpolation(Tr, qi, Yi, Ki, Sr, Mr, Ar, new Je())), r && (Sr.fromBufferAttribute(r, a), Mr.fromBufferAttribute(r, l), Ar.fromBufferAttribute(r, c), u.uv1 = pn.getInterpolation(Tr, qi, Yi, Ki, Sr, Mr, Ar, new Je()), u.uv2 = u.uv1), o && (xc.fromBufferAttribute(o, a), Ec.fromBufferAttribute(o, l), Sc.fromBufferAttribute(o, c), u.normal = pn.getInterpolation(Tr, qi, Yi, Ki, xc, Ec, Sc, new N()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const h = {
      a,
      b: l,
      c,
      normal: new N(),
      materialIndex: 0
    };
    pn.getNormal(qi, Yi, Ki, h.normal), u.face = h;
  }
  return u;
}
class gt extends vn {
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
    function g(_, f, p, x, y, b, C, w, R, G, E) {
      const T = b / R, z = C / G, J = b / 2, oe = C / 2, L = w / 2, I = R + 1, U = G + 1;
      let ee = 0, O = 0;
      const B = new N();
      for (let Q = 0; Q < U; Q++) {
        const H = Q * z - oe;
        for (let W = 0; W < I; W++) {
          const D = W * T - J;
          B[_] = D * x, B[f] = H * y, B[p] = L, c.push(B.x, B.y, B.z), B[_] = 0, B[f] = 0, B[p] = w > 0 ? 1 : -1, u.push(B.x, B.y, B.z), h.push(W / R), h.push(1 - Q / G), ee += 1;
        }
      }
      for (let Q = 0; Q < G; Q++)
        for (let H = 0; H < R; H++) {
          const W = d + H + I * Q, D = d + H + I * (Q + 1), K = d + (H + 1) + I * (Q + 1), re = d + (H + 1) + I * Q;
          l.push(W, D, re), l.push(D, K, re), O += 6;
        }
      a.addGroup(m, O, E), m += O, d += ee;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new gt(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function gs(s) {
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
function zt(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const n = gs(s[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function xm(s) {
  const e = [];
  for (let t = 0; t < s.length; t++)
    e.push(s[t].clone());
  return e;
}
function Sh(s) {
  return s.getRenderTarget() === null ? s.outputColorSpace : st.workingColorSpace;
}
const Em = { clone: gs, merge: zt };
var Sm = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Mm = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Pi extends Tn {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Sm, this.fragmentShader = Mm, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = gs(e.uniforms), this.uniformsGroups = xm(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
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
class Mh extends vt {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Ye(), this.projectionMatrix = new Ye(), this.projectionMatrixInverse = new Ye(), this.coordinateSystem = Fn;
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
class Gt extends Mh {
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
    this.fov = ms * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(Gs * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return ms * 2 * Math.atan(
      Math.tan(Gs * 0.5 * this.fov) / this.zoom
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
    let t = e * Math.tan(Gs * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
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
const $i = -90, Ji = 1;
class Am extends vt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new Gt($i, Ji, e, t);
    i.layers = this.layers, this.add(i);
    const r = new Gt($i, Ji, e, t);
    r.layers = this.layers, this.add(r);
    const o = new Gt($i, Ji, e, t);
    o.layers = this.layers, this.add(o);
    const a = new Gt($i, Ji, e, t);
    a.layers = this.layers, this.add(a);
    const l = new Gt($i, Ji, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Gt($i, Ji, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, r, o, a, l] = t;
    for (const c of t) this.remove(c);
    if (e === Fn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === so)
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
class Ah extends Dt {
  constructor(e, t, n, i, r, o, a, l, c, u) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : us, super(e, t, n, i, r, o, a, l, c, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Tm extends Li {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    t.encoding !== void 0 && (js("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === wi ? _t : ln), this.texture = new Ah(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : qt;
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
    }, i = new gt(5, 5, 5), r = new Pi({
      name: "CubemapFromEquirect",
      uniforms: gs(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: $t,
      blending: Qn
    });
    r.uniforms.tEquirect.value = t;
    const o = new Ge(i, r), a = t.minFilter;
    return t.minFilter === Ci && (t.minFilter = qt), new Am(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const Jo = /* @__PURE__ */ new N(), bm = /* @__PURE__ */ new N(), wm = /* @__PURE__ */ new qe();
class mi {
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
    const i = Jo.subVectors(n, t).cross(bm.subVectors(e, t)).normalize();
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
    const n = e.delta(Jo), i = this.normal.dot(n);
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
    const n = t || wm.getNormalMatrix(e), i = this.coplanarPoint(Jo).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
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
const ui = /* @__PURE__ */ new bn(), Rr = /* @__PURE__ */ new N();
class Ja {
  constructor(e = new mi(), t = new mi(), n = new mi(), i = new mi(), r = new mi(), o = new mi()) {
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
  setFromProjectionMatrix(e, t = Fn) {
    const n = this.planes, i = e.elements, r = i[0], o = i[1], a = i[2], l = i[3], c = i[4], u = i[5], h = i[6], d = i[7], m = i[8], g = i[9], _ = i[10], f = i[11], p = i[12], x = i[13], y = i[14], b = i[15];
    if (n[0].setComponents(l - r, d - c, f - m, b - p).normalize(), n[1].setComponents(l + r, d + c, f + m, b + p).normalize(), n[2].setComponents(l + o, d + u, f + g, b + x).normalize(), n[3].setComponents(l - o, d - u, f - g, b - x).normalize(), n[4].setComponents(l - a, d - h, f - _, b - y).normalize(), t === Fn)
      n[5].setComponents(l + a, d + h, f + _, b + y).normalize();
    else if (t === so)
      n[5].setComponents(a, h, _, y).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(ui);
  }
  intersectsSprite(e) {
    return ui.center.set(0, 0, 0), ui.radius = 0.7071067811865476, ui.applyMatrix4(e.matrixWorld), this.intersectsSphere(ui);
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
      if (Rr.x = i.normal.x > 0 ? e.max.x : e.min.x, Rr.y = i.normal.y > 0 ? e.max.y : e.min.y, Rr.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Rr) < 0)
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
function Th() {
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
function Rm(s, e) {
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
class $n extends vn {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const r = e / 2, o = t / 2, a = Math.floor(n), l = Math.floor(i), c = a + 1, u = l + 1, h = e / a, d = t / l, m = [], g = [], _ = [], f = [];
    for (let p = 0; p < u; p++) {
      const x = p * d - o;
      for (let y = 0; y < c; y++) {
        const b = y * h - r;
        g.push(b, -x, 0), _.push(0, 0, 1), f.push(y / a), f.push(1 - p / l);
      }
    }
    for (let p = 0; p < l; p++)
      for (let x = 0; x < a; x++) {
        const y = x + c * p, b = x + c * (p + 1), C = x + 1 + c * (p + 1), w = x + 1 + c * p;
        m.push(y, b, w), m.push(b, C, w);
      }
    this.setIndex(m), this.setAttribute("position", new cn(g, 3)), this.setAttribute("normal", new cn(_, 3)), this.setAttribute("uv", new cn(f, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new $n(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Cm = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Lm = `#ifdef USE_ALPHAHASH
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
#endif`, Pm = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Im = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Dm = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Um = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Nm = `#ifdef USE_AOMAP
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
#endif`, Om = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Fm = `#ifdef USE_BATCHING
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
#endif`, Bm = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`, Vm = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, km = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, zm = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Hm = `#ifdef USE_IRIDESCENCE
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
#endif`, Gm = `#ifdef USE_BUMPMAP
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
#endif`, Wm = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, jm = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Xm = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, qm = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Ym = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Km = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, $m = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Jm = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, Zm = `#define PI 3.141592653589793
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
} // validated`, Qm = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, eg = `vec3 transformedNormal = objectNormal;
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
#endif`, tg = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, ng = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, ig = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, sg = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, rg = "gl_FragColor = linearToOutputTexel( gl_FragColor );", og = `
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
}`, ag = `#ifdef USE_ENVMAP
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
#endif`, lg = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, cg = `#ifdef USE_ENVMAP
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
#endif`, ug = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, hg = `#ifdef USE_ENVMAP
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
#endif`, dg = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, fg = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, pg = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, mg = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, gg = `#ifdef USE_GRADIENTMAP
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
}`, _g = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, vg = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, yg = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, xg = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Eg = `uniform bool receiveShadow;
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
#endif`, Sg = `#ifdef USE_ENVMAP
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
#endif`, Mg = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Ag = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Tg = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, bg = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, wg = `PhysicalMaterial material;
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
#endif`, Rg = `struct PhysicalMaterial {
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
}`, Cg = `
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
#endif`, Lg = `#if defined( RE_IndirectDiffuse )
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
#endif`, Pg = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Ig = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Dg = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Ug = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Ng = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Og = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Fg = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Bg = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Vg = `#if defined( USE_POINTS_UV )
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
#endif`, kg = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, zg = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Hg = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Gg = `#ifdef USE_MORPHNORMALS
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
#endif`, Wg = `#ifdef USE_MORPHTARGETS
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
#endif`, jg = `#ifdef USE_MORPHTARGETS
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
#endif`, Xg = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, qg = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, Yg = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Kg = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, $g = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Jg = `#ifdef USE_NORMALMAP
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
#endif`, Zg = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Qg = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, e_ = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, t_ = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, n_ = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, i_ = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, s_ = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, r_ = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, o_ = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, a_ = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, l_ = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, c_ = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, u_ = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, h_ = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, d_ = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, f_ = `float getShadowMask() {
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
}`, p_ = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, m_ = `#ifdef USE_SKINNING
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
#endif`, g_ = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, __ = `#ifdef USE_SKINNING
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
#endif`, v_ = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, y_ = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, x_ = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, E_ = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, S_ = `#ifdef USE_TRANSMISSION
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
#endif`, M_ = `#ifdef USE_TRANSMISSION
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
#endif`, A_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, T_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, b_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, w_ = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const R_ = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, C_ = `uniform sampler2D t2D;
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
}`, L_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, P_ = `#ifdef ENVMAP_TYPE_CUBE
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
}`, I_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, D_ = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, U_ = `#include <common>
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
}`, N_ = `#if DEPTH_PACKING == 3200
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
}`, O_ = `#define DISTANCE
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
}`, F_ = `#define DISTANCE
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
}`, B_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, V_ = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, k_ = `uniform float scale;
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
}`, z_ = `uniform vec3 diffuse;
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
}`, H_ = `#include <common>
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
}`, G_ = `uniform vec3 diffuse;
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
}`, W_ = `#define LAMBERT
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
}`, j_ = `#define LAMBERT
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
}`, X_ = `#define MATCAP
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
}`, q_ = `#define MATCAP
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
}`, Y_ = `#define NORMAL
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
}`, K_ = `#define NORMAL
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
}`, $_ = `#define PHONG
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
}`, J_ = `#define PHONG
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
}`, Z_ = `#define STANDARD
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
}`, Q_ = `#define STANDARD
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
}`, ev = `#define TOON
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
}`, tv = `#define TOON
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
}`, nv = `uniform float size;
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
}`, iv = `uniform vec3 diffuse;
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
}`, sv = `#include <common>
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
}`, rv = `uniform vec3 color;
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
}`, ov = `uniform float rotation;
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
}`, av = `uniform vec3 diffuse;
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
}`, We = {
  alphahash_fragment: Cm,
  alphahash_pars_fragment: Lm,
  alphamap_fragment: Pm,
  alphamap_pars_fragment: Im,
  alphatest_fragment: Dm,
  alphatest_pars_fragment: Um,
  aomap_fragment: Nm,
  aomap_pars_fragment: Om,
  batching_pars_vertex: Fm,
  batching_vertex: Bm,
  begin_vertex: Vm,
  beginnormal_vertex: km,
  bsdfs: zm,
  iridescence_fragment: Hm,
  bumpmap_pars_fragment: Gm,
  clipping_planes_fragment: Wm,
  clipping_planes_pars_fragment: jm,
  clipping_planes_pars_vertex: Xm,
  clipping_planes_vertex: qm,
  color_fragment: Ym,
  color_pars_fragment: Km,
  color_pars_vertex: $m,
  color_vertex: Jm,
  common: Zm,
  cube_uv_reflection_fragment: Qm,
  defaultnormal_vertex: eg,
  displacementmap_pars_vertex: tg,
  displacementmap_vertex: ng,
  emissivemap_fragment: ig,
  emissivemap_pars_fragment: sg,
  colorspace_fragment: rg,
  colorspace_pars_fragment: og,
  envmap_fragment: ag,
  envmap_common_pars_fragment: lg,
  envmap_pars_fragment: cg,
  envmap_pars_vertex: ug,
  envmap_physical_pars_fragment: Sg,
  envmap_vertex: hg,
  fog_vertex: dg,
  fog_pars_vertex: fg,
  fog_fragment: pg,
  fog_pars_fragment: mg,
  gradientmap_pars_fragment: gg,
  lightmap_fragment: _g,
  lightmap_pars_fragment: vg,
  lights_lambert_fragment: yg,
  lights_lambert_pars_fragment: xg,
  lights_pars_begin: Eg,
  lights_toon_fragment: Mg,
  lights_toon_pars_fragment: Ag,
  lights_phong_fragment: Tg,
  lights_phong_pars_fragment: bg,
  lights_physical_fragment: wg,
  lights_physical_pars_fragment: Rg,
  lights_fragment_begin: Cg,
  lights_fragment_maps: Lg,
  lights_fragment_end: Pg,
  logdepthbuf_fragment: Ig,
  logdepthbuf_pars_fragment: Dg,
  logdepthbuf_pars_vertex: Ug,
  logdepthbuf_vertex: Ng,
  map_fragment: Og,
  map_pars_fragment: Fg,
  map_particle_fragment: Bg,
  map_particle_pars_fragment: Vg,
  metalnessmap_fragment: kg,
  metalnessmap_pars_fragment: zg,
  morphcolor_vertex: Hg,
  morphnormal_vertex: Gg,
  morphtarget_pars_vertex: Wg,
  morphtarget_vertex: jg,
  normal_fragment_begin: Xg,
  normal_fragment_maps: qg,
  normal_pars_fragment: Yg,
  normal_pars_vertex: Kg,
  normal_vertex: $g,
  normalmap_pars_fragment: Jg,
  clearcoat_normal_fragment_begin: Zg,
  clearcoat_normal_fragment_maps: Qg,
  clearcoat_pars_fragment: e_,
  iridescence_pars_fragment: t_,
  opaque_fragment: n_,
  packing: i_,
  premultiplied_alpha_fragment: s_,
  project_vertex: r_,
  dithering_fragment: o_,
  dithering_pars_fragment: a_,
  roughnessmap_fragment: l_,
  roughnessmap_pars_fragment: c_,
  shadowmap_pars_fragment: u_,
  shadowmap_pars_vertex: h_,
  shadowmap_vertex: d_,
  shadowmask_pars_fragment: f_,
  skinbase_vertex: p_,
  skinning_pars_vertex: m_,
  skinning_vertex: g_,
  skinnormal_vertex: __,
  specularmap_fragment: v_,
  specularmap_pars_fragment: y_,
  tonemapping_fragment: x_,
  tonemapping_pars_fragment: E_,
  transmission_fragment: S_,
  transmission_pars_fragment: M_,
  uv_pars_fragment: A_,
  uv_pars_vertex: T_,
  uv_vertex: b_,
  worldpos_vertex: w_,
  background_vert: R_,
  background_frag: C_,
  backgroundCube_vert: L_,
  backgroundCube_frag: P_,
  cube_vert: I_,
  cube_frag: D_,
  depth_vert: U_,
  depth_frag: N_,
  distanceRGBA_vert: O_,
  distanceRGBA_frag: F_,
  equirect_vert: B_,
  equirect_frag: V_,
  linedashed_vert: k_,
  linedashed_frag: z_,
  meshbasic_vert: H_,
  meshbasic_frag: G_,
  meshlambert_vert: W_,
  meshlambert_frag: j_,
  meshmatcap_vert: X_,
  meshmatcap_frag: q_,
  meshnormal_vert: Y_,
  meshnormal_frag: K_,
  meshphong_vert: $_,
  meshphong_frag: J_,
  meshphysical_vert: Z_,
  meshphysical_frag: Q_,
  meshtoon_vert: ev,
  meshtoon_frag: tv,
  points_vert: nv,
  points_frag: iv,
  shadow_vert: sv,
  shadow_frag: rv,
  sprite_vert: ov,
  sprite_frag: av
}, pe = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Be(16777215) },
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
    fogColor: { value: /* @__PURE__ */ new Be(16777215) }
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
    diffuse: { value: /* @__PURE__ */ new Be(16777215) },
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
    diffuse: { value: /* @__PURE__ */ new Be(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Je(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new qe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new qe() },
    alphaTest: { value: 0 }
  }
}, Sn = {
  basic: {
    uniforms: /* @__PURE__ */ zt([
      pe.common,
      pe.specularmap,
      pe.envmap,
      pe.aomap,
      pe.lightmap,
      pe.fog
    ]),
    vertexShader: We.meshbasic_vert,
    fragmentShader: We.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ zt([
      pe.common,
      pe.specularmap,
      pe.envmap,
      pe.aomap,
      pe.lightmap,
      pe.emissivemap,
      pe.bumpmap,
      pe.normalmap,
      pe.displacementmap,
      pe.fog,
      pe.lights,
      {
        emissive: { value: /* @__PURE__ */ new Be(0) }
      }
    ]),
    vertexShader: We.meshlambert_vert,
    fragmentShader: We.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ zt([
      pe.common,
      pe.specularmap,
      pe.envmap,
      pe.aomap,
      pe.lightmap,
      pe.emissivemap,
      pe.bumpmap,
      pe.normalmap,
      pe.displacementmap,
      pe.fog,
      pe.lights,
      {
        emissive: { value: /* @__PURE__ */ new Be(0) },
        specular: { value: /* @__PURE__ */ new Be(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: We.meshphong_vert,
    fragmentShader: We.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ zt([
      pe.common,
      pe.envmap,
      pe.aomap,
      pe.lightmap,
      pe.emissivemap,
      pe.bumpmap,
      pe.normalmap,
      pe.displacementmap,
      pe.roughnessmap,
      pe.metalnessmap,
      pe.fog,
      pe.lights,
      {
        emissive: { value: /* @__PURE__ */ new Be(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: We.meshphysical_vert,
    fragmentShader: We.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ zt([
      pe.common,
      pe.aomap,
      pe.lightmap,
      pe.emissivemap,
      pe.bumpmap,
      pe.normalmap,
      pe.displacementmap,
      pe.gradientmap,
      pe.fog,
      pe.lights,
      {
        emissive: { value: /* @__PURE__ */ new Be(0) }
      }
    ]),
    vertexShader: We.meshtoon_vert,
    fragmentShader: We.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ zt([
      pe.common,
      pe.bumpmap,
      pe.normalmap,
      pe.displacementmap,
      pe.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: We.meshmatcap_vert,
    fragmentShader: We.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ zt([
      pe.points,
      pe.fog
    ]),
    vertexShader: We.points_vert,
    fragmentShader: We.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ zt([
      pe.common,
      pe.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: We.linedashed_vert,
    fragmentShader: We.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ zt([
      pe.common,
      pe.displacementmap
    ]),
    vertexShader: We.depth_vert,
    fragmentShader: We.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ zt([
      pe.common,
      pe.bumpmap,
      pe.normalmap,
      pe.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: We.meshnormal_vert,
    fragmentShader: We.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ zt([
      pe.sprite,
      pe.fog
    ]),
    vertexShader: We.sprite_vert,
    fragmentShader: We.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new qe() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: We.background_vert,
    fragmentShader: We.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: We.backgroundCube_vert,
    fragmentShader: We.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: We.cube_vert,
    fragmentShader: We.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: We.equirect_vert,
    fragmentShader: We.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ zt([
      pe.common,
      pe.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new N() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: We.distanceRGBA_vert,
    fragmentShader: We.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ zt([
      pe.lights,
      pe.fog,
      {
        color: { value: /* @__PURE__ */ new Be(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: We.shadow_vert,
    fragmentShader: We.shadow_frag
  }
};
Sn.physical = {
  uniforms: /* @__PURE__ */ zt([
    Sn.standard.uniforms,
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
      sheenColor: { value: /* @__PURE__ */ new Be(0) },
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
      attenuationColor: { value: /* @__PURE__ */ new Be(0) },
      specularColor: { value: /* @__PURE__ */ new Be(1, 1, 1) },
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
  vertexShader: We.meshphysical_vert,
  fragmentShader: We.meshphysical_frag
};
const Cr = { r: 0, b: 0, g: 0 };
function lv(s, e, t, n, i, r, o) {
  const a = new Be(0);
  let l = r === !0 ? 0 : 1, c, u, h = null, d = 0, m = null;
  function g(f, p) {
    let x = !1, y = p.isScene === !0 ? p.background : null;
    y && y.isTexture && (y = (p.backgroundBlurriness > 0 ? t : e).get(y)), y === null ? _(a, l) : y && y.isColor && (_(y, 1), x = !0);
    const b = s.xr.getEnvironmentBlendMode();
    b === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : b === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (s.autoClear || x) && s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil), y && (y.isCubeTexture || y.mapping === fo) ? (u === void 0 && (u = new Ge(
      new gt(1, 1, 1),
      new Pi({
        name: "BackgroundCubeMaterial",
        uniforms: gs(Sn.backgroundCube.uniforms),
        vertexShader: Sn.backgroundCube.vertexShader,
        fragmentShader: Sn.backgroundCube.fragmentShader,
        side: $t,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(C, w, R) {
      this.matrixWorld.copyPosition(R.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(u)), u.material.uniforms.envMap.value = y, u.material.uniforms.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = p.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, u.material.toneMapped = st.getTransfer(y.colorSpace) !== ht, (h !== y || d !== y.version || m !== s.toneMapping) && (u.material.needsUpdate = !0, h = y, d = y.version, m = s.toneMapping), u.layers.enableAll(), f.unshift(u, u.geometry, u.material, 0, 0, null)) : y && y.isTexture && (c === void 0 && (c = new Ge(
      new $n(2, 2),
      new Pi({
        name: "BackgroundMaterial",
        uniforms: gs(Sn.background.uniforms),
        vertexShader: Sn.background.vertexShader,
        fragmentShader: Sn.background.fragmentShader,
        side: Bn,
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
    f.getRGB(Cr, Sh(s)), n.buffers.color.setClear(Cr.r, Cr.g, Cr.b, p, o);
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
function cv(s, e, t, n) {
  const i = s.getParameter(s.MAX_VERTEX_ATTRIBS), r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || r !== null, a = {}, l = f(null);
  let c = l, u = !1;
  function h(L, I, U, ee, O) {
    let B = !1;
    if (o) {
      const Q = _(ee, U, I);
      c !== Q && (c = Q, m(c.object)), B = p(L, ee, U, O), B && x(L, ee, U, O);
    } else {
      const Q = I.wireframe === !0;
      (c.geometry !== ee.id || c.program !== U.id || c.wireframe !== Q) && (c.geometry = ee.id, c.program = U.id, c.wireframe = Q, B = !0);
    }
    O !== null && t.update(O, s.ELEMENT_ARRAY_BUFFER), (B || u) && (u = !1, G(L, I, U, ee), O !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, t.get(O).buffer));
  }
  function d() {
    return n.isWebGL2 ? s.createVertexArray() : r.createVertexArrayOES();
  }
  function m(L) {
    return n.isWebGL2 ? s.bindVertexArray(L) : r.bindVertexArrayOES(L);
  }
  function g(L) {
    return n.isWebGL2 ? s.deleteVertexArray(L) : r.deleteVertexArrayOES(L);
  }
  function _(L, I, U) {
    const ee = U.wireframe === !0;
    let O = a[L.id];
    O === void 0 && (O = {}, a[L.id] = O);
    let B = O[I.id];
    B === void 0 && (B = {}, O[I.id] = B);
    let Q = B[ee];
    return Q === void 0 && (Q = f(d()), B[ee] = Q), Q;
  }
  function f(L) {
    const I = [], U = [], ee = [];
    for (let O = 0; O < i; O++)
      I[O] = 0, U[O] = 0, ee[O] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: I,
      enabledAttributes: U,
      attributeDivisors: ee,
      object: L,
      attributes: {},
      index: null
    };
  }
  function p(L, I, U, ee) {
    const O = c.attributes, B = I.attributes;
    let Q = 0;
    const H = U.getAttributes();
    for (const W in H)
      if (H[W].location >= 0) {
        const K = O[W];
        let re = B[W];
        if (re === void 0 && (W === "instanceMatrix" && L.instanceMatrix && (re = L.instanceMatrix), W === "instanceColor" && L.instanceColor && (re = L.instanceColor)), K === void 0 || K.attribute !== re || re && K.data !== re.data) return !0;
        Q++;
      }
    return c.attributesNum !== Q || c.index !== ee;
  }
  function x(L, I, U, ee) {
    const O = {}, B = I.attributes;
    let Q = 0;
    const H = U.getAttributes();
    for (const W in H)
      if (H[W].location >= 0) {
        let K = B[W];
        K === void 0 && (W === "instanceMatrix" && L.instanceMatrix && (K = L.instanceMatrix), W === "instanceColor" && L.instanceColor && (K = L.instanceColor));
        const re = {};
        re.attribute = K, K && K.data && (re.data = K.data), O[W] = re, Q++;
      }
    c.attributes = O, c.attributesNum = Q, c.index = ee;
  }
  function y() {
    const L = c.newAttributes;
    for (let I = 0, U = L.length; I < U; I++)
      L[I] = 0;
  }
  function b(L) {
    C(L, 0);
  }
  function C(L, I) {
    const U = c.newAttributes, ee = c.enabledAttributes, O = c.attributeDivisors;
    U[L] = 1, ee[L] === 0 && (s.enableVertexAttribArray(L), ee[L] = 1), O[L] !== I && ((n.isWebGL2 ? s : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](L, I), O[L] = I);
  }
  function w() {
    const L = c.newAttributes, I = c.enabledAttributes;
    for (let U = 0, ee = I.length; U < ee; U++)
      I[U] !== L[U] && (s.disableVertexAttribArray(U), I[U] = 0);
  }
  function R(L, I, U, ee, O, B, Q) {
    Q === !0 ? s.vertexAttribIPointer(L, I, U, O, B) : s.vertexAttribPointer(L, I, U, ee, O, B);
  }
  function G(L, I, U, ee) {
    if (n.isWebGL2 === !1 && (L.isInstancedMesh || ee.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    y();
    const O = ee.attributes, B = U.getAttributes(), Q = I.defaultAttributeValues;
    for (const H in B) {
      const W = B[H];
      if (W.location >= 0) {
        let D = O[H];
        if (D === void 0 && (H === "instanceMatrix" && L.instanceMatrix && (D = L.instanceMatrix), H === "instanceColor" && L.instanceColor && (D = L.instanceColor)), D !== void 0) {
          const K = D.normalized, re = D.itemSize, fe = t.get(D);
          if (fe === void 0) continue;
          const me = fe.buffer, ge = fe.type, le = fe.bytesPerElement, he = n.isWebGL2 === !0 && (ge === s.INT || ge === s.UNSIGNED_INT || D.gpuType === ih);
          if (D.isInterleavedBufferAttribute) {
            const be = D.data, V = be.stride, ft = D.offset;
            if (be.isInstancedInterleavedBuffer) {
              for (let Se = 0; Se < W.locationSize; Se++)
                C(W.location + Se, be.meshPerAttribute);
              L.isInstancedMesh !== !0 && ee._maxInstanceCount === void 0 && (ee._maxInstanceCount = be.meshPerAttribute * be.count);
            } else
              for (let Se = 0; Se < W.locationSize; Se++)
                b(W.location + Se);
            s.bindBuffer(s.ARRAY_BUFFER, me);
            for (let Se = 0; Se < W.locationSize; Se++)
              R(
                W.location + Se,
                re / W.locationSize,
                ge,
                K,
                V * le,
                (ft + re / W.locationSize * Se) * le,
                he
              );
          } else {
            if (D.isInstancedBufferAttribute) {
              for (let be = 0; be < W.locationSize; be++)
                C(W.location + be, D.meshPerAttribute);
              L.isInstancedMesh !== !0 && ee._maxInstanceCount === void 0 && (ee._maxInstanceCount = D.meshPerAttribute * D.count);
            } else
              for (let be = 0; be < W.locationSize; be++)
                b(W.location + be);
            s.bindBuffer(s.ARRAY_BUFFER, me);
            for (let be = 0; be < W.locationSize; be++)
              R(
                W.location + be,
                re / W.locationSize,
                ge,
                K,
                re * le,
                re / W.locationSize * be * le,
                he
              );
          }
        } else if (Q !== void 0) {
          const K = Q[H];
          if (K !== void 0)
            switch (K.length) {
              case 2:
                s.vertexAttrib2fv(W.location, K);
                break;
              case 3:
                s.vertexAttrib3fv(W.location, K);
                break;
              case 4:
                s.vertexAttrib4fv(W.location, K);
                break;
              default:
                s.vertexAttrib1fv(W.location, K);
            }
        }
      }
    }
    w();
  }
  function E() {
    J();
    for (const L in a) {
      const I = a[L];
      for (const U in I) {
        const ee = I[U];
        for (const O in ee)
          g(ee[O].object), delete ee[O];
        delete I[U];
      }
      delete a[L];
    }
  }
  function T(L) {
    if (a[L.id] === void 0) return;
    const I = a[L.id];
    for (const U in I) {
      const ee = I[U];
      for (const O in ee)
        g(ee[O].object), delete ee[O];
      delete I[U];
    }
    delete a[L.id];
  }
  function z(L) {
    for (const I in a) {
      const U = a[I];
      if (U[L.id] === void 0) continue;
      const ee = U[L.id];
      for (const O in ee)
        g(ee[O].object), delete ee[O];
      delete U[L.id];
    }
  }
  function J() {
    oe(), u = !0, c !== l && (c = l, m(c.object));
  }
  function oe() {
    l.geometry = null, l.program = null, l.wireframe = !1;
  }
  return {
    setup: h,
    reset: J,
    resetDefaultState: oe,
    dispose: E,
    releaseStatesOfGeometry: T,
    releaseStatesOfProgram: z,
    initAttributes: y,
    enableAttribute: b,
    disableUnusedAttributes: w
  };
}
function uv(s, e, t, n) {
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
function hv(s, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const R = e.get("EXT_texture_filter_anisotropic");
      n = s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function r(R) {
    if (R === "highp") {
      if (s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision > 0)
        return "highp";
      R = "mediump";
    }
    return R === "mediump" && s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && s.constructor.name === "WebGL2RenderingContext";
  let a = t.precision !== void 0 ? t.precision : "highp";
  const l = r(a);
  l !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", l, "instead."), a = l);
  const c = o || e.has("WEBGL_draw_buffers"), u = t.logarithmicDepthBuffer === !0, h = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS), d = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS), m = s.getParameter(s.MAX_TEXTURE_SIZE), g = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE), _ = s.getParameter(s.MAX_VERTEX_ATTRIBS), f = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS), p = s.getParameter(s.MAX_VARYING_VECTORS), x = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS), y = d > 0, b = o || e.has("OES_texture_float"), C = y && b, w = o ? s.getParameter(s.MAX_SAMPLES) : 0;
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
    maxFragmentUniforms: x,
    vertexTextures: y,
    floatFragmentTextures: b,
    floatVertexTextures: C,
    maxSamples: w
  };
}
function dv(s) {
  const e = this;
  let t = null, n = 0, i = !1, r = !1;
  const o = new mi(), a = new qe(), l = { value: null, needsUpdate: !1 };
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
      const x = r ? 0 : n, y = x * 4;
      let b = p.clippingState || null;
      l.value = b, b = u(g, d, y, m);
      for (let C = 0; C !== y; ++C)
        b[C] = t[C];
      p.clippingState = b, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += x;
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
        const p = m + _ * 4, x = d.matrixWorldInverse;
        a.getNormalMatrix(x), (f === null || f.length < p) && (f = new Float32Array(p));
        for (let y = 0, b = m; y !== _; ++y, b += 4)
          o.copy(h[y]).applyMatrix4(x, a), o.normal.toArray(f, b), f[b + 3] = o.constant;
      }
      l.value = f, l.needsUpdate = !0;
    }
    return e.numPlanes = _, e.numIntersection = 0, f;
  }
}
function fv(s) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === Sa ? o.mapping = us : a === Ma && (o.mapping = hs), o;
  }
  function n(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === Sa || a === Ma)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new Tm(l.height / 2);
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
class Za extends Mh {
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
const ss = 4, Mc = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], yi = 20, Zo = /* @__PURE__ */ new Za(), Ac = /* @__PURE__ */ new Be();
let Qo = null, ea = 0, ta = 0;
const gi = (1 + Math.sqrt(5)) / 2, Zi = 1 / gi, Tc = [
  /* @__PURE__ */ new N(1, 1, 1),
  /* @__PURE__ */ new N(-1, 1, 1),
  /* @__PURE__ */ new N(1, 1, -1),
  /* @__PURE__ */ new N(-1, 1, -1),
  /* @__PURE__ */ new N(0, gi, Zi),
  /* @__PURE__ */ new N(0, gi, -Zi),
  /* @__PURE__ */ new N(Zi, 0, gi),
  /* @__PURE__ */ new N(-Zi, 0, gi),
  /* @__PURE__ */ new N(gi, Zi, 0),
  /* @__PURE__ */ new N(-gi, Zi, 0)
];
class bc {
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
    Qo = this._renderer.getRenderTarget(), ea = this._renderer.getActiveCubeFace(), ta = this._renderer.getActiveMipmapLevel(), this._setSize(256);
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
    this._cubemapMaterial === null && (this._cubemapMaterial = Cc(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Rc(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(Qo, ea, ta), e.scissorTest = !1, Lr(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === us || e.mapping === hs ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Qo = this._renderer.getRenderTarget(), ea = this._renderer.getActiveCubeFace(), ta = this._renderer.getActiveMipmapLevel();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: qt,
      minFilter: qt,
      generateMipmaps: !1,
      type: Ks,
      format: an,
      colorSpace: Lt,
      depthBuffer: !1
    }, i = wc(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = wc(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = pv(r)), this._blurMaterial = mv(r, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Ge(this._lodPlanes[0], e);
    this._renderer.compile(t, Zo);
  }
  _sceneToCubeUV(e, t, n, i) {
    const a = new Gt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], u = this._renderer, h = u.autoClear, d = u.toneMapping;
    u.getClearColor(Ac), u.toneMapping = ei, u.autoClear = !1;
    const m = new Si({
      name: "PMREM.Background",
      side: $t,
      depthWrite: !1,
      depthTest: !1
    }), g = new Ge(new gt(), m);
    let _ = !1;
    const f = e.background;
    f ? f.isColor && (m.color.copy(f), e.background = null, _ = !0) : (m.color.copy(Ac), _ = !0);
    for (let p = 0; p < 6; p++) {
      const x = p % 3;
      x === 0 ? (a.up.set(0, l[p], 0), a.lookAt(c[p], 0, 0)) : x === 1 ? (a.up.set(0, 0, l[p]), a.lookAt(0, c[p], 0)) : (a.up.set(0, l[p], 0), a.lookAt(0, 0, c[p]));
      const y = this._cubeSize;
      Lr(i, x * y, p > 2 ? y : 0, y, y), u.setRenderTarget(i), _ && u.render(g, a), u.render(e, a);
    }
    g.geometry.dispose(), g.material.dispose(), u.toneMapping = d, u.autoClear = h, e.background = f;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === us || e.mapping === hs;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Cc()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Rc());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, o = new Ge(this._lodPlanes[0], r), a = r.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    Lr(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, Zo);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const r = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), o = Tc[(i - 1) % Tc.length];
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
    const u = 3, h = new Ge(this._lodPlanes[i], c), d = c.uniforms, m = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * yi - 1), _ = r / g, f = isFinite(r) ? 1 + Math.floor(u * _) : yi;
    f > yi && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${yi}`);
    const p = [];
    let x = 0;
    for (let R = 0; R < yi; ++R) {
      const G = R / _, E = Math.exp(-G * G / 2);
      p.push(E), R === 0 ? x += E : R < f && (x += 2 * E);
    }
    for (let R = 0; R < p.length; R++)
      p[R] = p[R] / x;
    d.envMap.value = e.texture, d.samples.value = f, d.weights.value = p, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a);
    const { _lodMax: y } = this;
    d.dTheta.value = g, d.mipInt.value = y - n;
    const b = this._sizeLods[i], C = 3 * b * (i > y - ss ? i - y + ss : 0), w = 4 * (this._cubeSize - b);
    Lr(t, C, w, 3 * b, 2 * b), l.setRenderTarget(t), l.render(h, Zo);
  }
}
function pv(s) {
  const e = [], t = [], n = [];
  let i = s;
  const r = s - ss + 1 + Mc.length;
  for (let o = 0; o < r; o++) {
    const a = Math.pow(2, i);
    t.push(a);
    let l = 1 / a;
    o > s - ss ? l = Mc[o - s + ss - 1] : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2), u = -c, h = 1 + c, d = [u, u, h, u, h, h, u, u, h, h, u, h], m = 6, g = 6, _ = 3, f = 2, p = 1, x = new Float32Array(_ * g * m), y = new Float32Array(f * g * m), b = new Float32Array(p * g * m);
    for (let w = 0; w < m; w++) {
      const R = w % 3 * 2 / 3 - 1, G = w > 2 ? 0 : -1, E = [
        R,
        G,
        0,
        R + 2 / 3,
        G,
        0,
        R + 2 / 3,
        G + 1,
        0,
        R,
        G,
        0,
        R + 2 / 3,
        G + 1,
        0,
        R,
        G + 1,
        0
      ];
      x.set(E, _ * g * w), y.set(d, f * g * w);
      const T = [w, w, w, w, w, w];
      b.set(T, p * g * w);
    }
    const C = new vn();
    C.setAttribute("position", new Wt(x, _)), C.setAttribute("uv", new Wt(y, f)), C.setAttribute("faceIndex", new Wt(b, p)), e.push(C), i > ss && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function wc(s, e, t) {
  const n = new Li(s, e, t);
  return n.texture.mapping = fo, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Lr(s, e, t, n, i) {
  s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i);
}
function mv(s, e, t) {
  const n = new Float32Array(yi), i = new N(0, 1, 0);
  return new Pi({
    name: "SphericalGaussianBlur",
    defines: {
      n: yi,
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
    vertexShader: Qa(),
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
    blending: Qn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Rc() {
  return new Pi({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Qa(),
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
    blending: Qn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Cc() {
  return new Pi({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Qa(),
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
    blending: Qn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Qa() {
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
function gv(s) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === Sa || l === Ma, u = l === us || l === hs;
      if (c || u)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let h = e.get(a);
          return t === null && (t = new bc(s)), h = c ? t.fromEquirectangular(a, h) : t.fromCubemap(a, h), e.set(a, h), h.texture;
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const h = a.image;
            if (c && h && h.height > 0 || u && h && i(h)) {
              t === null && (t = new bc(s));
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
function _v(s) {
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
function vv(s, e, t, n) {
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
      const x = m.array;
      _ = m.version;
      for (let y = 0, b = x.length; y < b; y += 3) {
        const C = x[y + 0], w = x[y + 1], R = x[y + 2];
        d.push(C, w, w, R, R, C);
      }
    } else if (g !== void 0) {
      const x = g.array;
      _ = g.version;
      for (let y = 0, b = x.length / 3 - 1; y < b; y += 3) {
        const C = y + 0, w = y + 1, R = y + 2;
        d.push(C, w, w, R, R, C);
      }
    } else
      return;
    const f = new (ph(d) ? Eh : xh)(d, 1);
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
function yv(s, e, t, n) {
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
      for (let x = 0; x < _; x++)
        p += g[x];
      t.update(p, r, 1);
    }
  }
  this.setMode = o, this.setIndex = c, this.render = u, this.renderInstances = h, this.renderMultiDraw = d;
}
function xv(s) {
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
function Ev(s, e) {
  return s[0] - e[0];
}
function Sv(s, e) {
  return Math.abs(e[1]) - Math.abs(s[1]);
}
function Mv(s, e, t) {
  const n = {}, i = new Float32Array(8), r = /* @__PURE__ */ new WeakMap(), o = new ut(), a = [];
  for (let c = 0; c < 8; c++)
    a[c] = [c, 0];
  function l(c, u, h) {
    const d = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const m = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color, g = m !== void 0 ? m.length : 0;
      let _ = r.get(u);
      if (_ === void 0 || _.count !== g) {
        let L = function() {
          J.dispose(), r.delete(u), u.removeEventListener("dispose", L);
        };
        _ !== void 0 && _.texture.dispose();
        const x = u.morphAttributes.position !== void 0, y = u.morphAttributes.normal !== void 0, b = u.morphAttributes.color !== void 0, C = u.morphAttributes.position || [], w = u.morphAttributes.normal || [], R = u.morphAttributes.color || [];
        let G = 0;
        x === !0 && (G = 1), y === !0 && (G = 2), b === !0 && (G = 3);
        let E = u.attributes.position.count * G, T = 1;
        E > e.maxTextureSize && (T = Math.ceil(E / e.maxTextureSize), E = e.maxTextureSize);
        const z = new Float32Array(E * T * 4 * g), J = new _h(z, E, T, g);
        J.type = On, J.needsUpdate = !0;
        const oe = G * 4;
        for (let I = 0; I < g; I++) {
          const U = C[I], ee = w[I], O = R[I], B = E * T * 4 * I;
          for (let Q = 0; Q < U.count; Q++) {
            const H = Q * oe;
            x === !0 && (o.fromBufferAttribute(U, Q), z[B + H + 0] = o.x, z[B + H + 1] = o.y, z[B + H + 2] = o.z, z[B + H + 3] = 0), y === !0 && (o.fromBufferAttribute(ee, Q), z[B + H + 4] = o.x, z[B + H + 5] = o.y, z[B + H + 6] = o.z, z[B + H + 7] = 0), b === !0 && (o.fromBufferAttribute(O, Q), z[B + H + 8] = o.x, z[B + H + 9] = o.y, z[B + H + 10] = o.z, z[B + H + 11] = O.itemSize === 4 ? o.w : 1);
          }
        }
        _ = {
          count: g,
          texture: J,
          size: new Je(E, T)
        }, r.set(u, _), u.addEventListener("dispose", L);
      }
      let f = 0;
      for (let x = 0; x < d.length; x++)
        f += d[x];
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
        const b = g[y];
        b[0] = y, b[1] = d[y];
      }
      g.sort(Sv);
      for (let y = 0; y < 8; y++)
        y < m && g[y][1] ? (a[y][0] = g[y][0], a[y][1] = g[y][1]) : (a[y][0] = Number.MAX_SAFE_INTEGER, a[y][1] = 0);
      a.sort(Ev);
      const _ = u.morphAttributes.position, f = u.morphAttributes.normal;
      let p = 0;
      for (let y = 0; y < 8; y++) {
        const b = a[y], C = b[0], w = b[1];
        C !== Number.MAX_SAFE_INTEGER && w ? (_ && u.getAttribute("morphTarget" + y) !== _[C] && u.setAttribute("morphTarget" + y, _[C]), f && u.getAttribute("morphNormal" + y) !== f[C] && u.setAttribute("morphNormal" + y, f[C]), i[y] = w, p += w) : (_ && u.hasAttribute("morphTarget" + y) === !0 && u.deleteAttribute("morphTarget" + y), f && u.hasAttribute("morphNormal" + y) === !0 && u.deleteAttribute("morphNormal" + y), i[y] = 0);
      }
      const x = u.morphTargetsRelative ? 1 : 1 - p;
      h.getUniforms().setValue(s, "morphTargetBaseInfluence", x), h.getUniforms().setValue(s, "morphTargetInfluences", i);
    }
  }
  return {
    update: l
  };
}
function Av(s, e, t, n) {
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
class bh extends Dt {
  constructor(e, t, n, i, r, o, a, l, c, u) {
    if (u = u !== void 0 ? u : bi, u !== bi && u !== fs)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === bi && (n = Jn), n === void 0 && u === fs && (n = Ti), super(null, i, r, o, a, l, u, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : Ct, this.minFilter = l !== void 0 ? l : Ct, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const wh = /* @__PURE__ */ new Dt(), Rh = /* @__PURE__ */ new bh(1, 1);
Rh.compareFunction = fh;
const Ch = /* @__PURE__ */ new _h(), Lh = /* @__PURE__ */ new lm(), Ph = /* @__PURE__ */ new Ah(), Lc = [], Pc = [], Ic = new Float32Array(16), Dc = new Float32Array(9), Uc = new Float32Array(4);
function Es(s, e, t) {
  const n = s[0];
  if (n <= 0 || n > 0) return s;
  const i = e * t;
  let r = Lc[i];
  if (r === void 0 && (r = new Float32Array(i), Lc[i] = r), e !== 0) {
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
function _o(s, e) {
  let t = Pc[e];
  t === void 0 && (t = new Int32Array(e), Pc[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = s.allocateTextureUnit();
  return t;
}
function Tv(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), t[0] = e);
}
function bv(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (At(t, e)) return;
    s.uniform2fv(this.addr, e), Tt(t, e);
  }
}
function wv(s, e) {
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
function Rv(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (At(t, e)) return;
    s.uniform4fv(this.addr, e), Tt(t, e);
  }
}
function Cv(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (At(t, e)) return;
    s.uniformMatrix2fv(this.addr, !1, e), Tt(t, e);
  } else {
    if (At(t, n)) return;
    Uc.set(n), s.uniformMatrix2fv(this.addr, !1, Uc), Tt(t, n);
  }
}
function Lv(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (At(t, e)) return;
    s.uniformMatrix3fv(this.addr, !1, e), Tt(t, e);
  } else {
    if (At(t, n)) return;
    Dc.set(n), s.uniformMatrix3fv(this.addr, !1, Dc), Tt(t, n);
  }
}
function Pv(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (At(t, e)) return;
    s.uniformMatrix4fv(this.addr, !1, e), Tt(t, e);
  } else {
    if (At(t, n)) return;
    Ic.set(n), s.uniformMatrix4fv(this.addr, !1, Ic), Tt(t, n);
  }
}
function Iv(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), t[0] = e);
}
function Dv(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (At(t, e)) return;
    s.uniform2iv(this.addr, e), Tt(t, e);
  }
}
function Uv(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (At(t, e)) return;
    s.uniform3iv(this.addr, e), Tt(t, e);
  }
}
function Nv(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (At(t, e)) return;
    s.uniform4iv(this.addr, e), Tt(t, e);
  }
}
function Ov(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), t[0] = e);
}
function Fv(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (At(t, e)) return;
    s.uniform2uiv(this.addr, e), Tt(t, e);
  }
}
function Bv(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (At(t, e)) return;
    s.uniform3uiv(this.addr, e), Tt(t, e);
  }
}
function Vv(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (At(t, e)) return;
    s.uniform4uiv(this.addr, e), Tt(t, e);
  }
}
function kv(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i);
  const r = this.type === s.SAMPLER_2D_SHADOW ? Rh : wh;
  t.setTexture2D(e || r, i);
}
function zv(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Lh, i);
}
function Hv(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Ph, i);
}
function Gv(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Ch, i);
}
function Wv(s) {
  switch (s) {
    case 5126:
      return Tv;
    // FLOAT
    case 35664:
      return bv;
    // _VEC2
    case 35665:
      return wv;
    // _VEC3
    case 35666:
      return Rv;
    // _VEC4
    case 35674:
      return Cv;
    // _MAT2
    case 35675:
      return Lv;
    // _MAT3
    case 35676:
      return Pv;
    // _MAT4
    case 5124:
    case 35670:
      return Iv;
    // INT, BOOL
    case 35667:
    case 35671:
      return Dv;
    // _VEC2
    case 35668:
    case 35672:
      return Uv;
    // _VEC3
    case 35669:
    case 35673:
      return Nv;
    // _VEC4
    case 5125:
      return Ov;
    // UINT
    case 36294:
      return Fv;
    // _VEC2
    case 36295:
      return Bv;
    // _VEC3
    case 36296:
      return Vv;
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
      return kv;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return zv;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Hv;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Gv;
  }
}
function jv(s, e) {
  s.uniform1fv(this.addr, e);
}
function Xv(s, e) {
  const t = Es(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function qv(s, e) {
  const t = Es(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function Yv(s, e) {
  const t = Es(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function Kv(s, e) {
  const t = Es(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, t);
}
function $v(s, e) {
  const t = Es(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, t);
}
function Jv(s, e) {
  const t = Es(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, t);
}
function Zv(s, e) {
  s.uniform1iv(this.addr, e);
}
function Qv(s, e) {
  s.uniform2iv(this.addr, e);
}
function e0(s, e) {
  s.uniform3iv(this.addr, e);
}
function t0(s, e) {
  s.uniform4iv(this.addr, e);
}
function n0(s, e) {
  s.uniform1uiv(this.addr, e);
}
function i0(s, e) {
  s.uniform2uiv(this.addr, e);
}
function s0(s, e) {
  s.uniform3uiv(this.addr, e);
}
function r0(s, e) {
  s.uniform4uiv(this.addr, e);
}
function o0(s, e, t) {
  const n = this.cache, i = e.length, r = _o(t, i);
  At(n, r) || (s.uniform1iv(this.addr, r), Tt(n, r));
  for (let o = 0; o !== i; ++o)
    t.setTexture2D(e[o] || wh, r[o]);
}
function a0(s, e, t) {
  const n = this.cache, i = e.length, r = _o(t, i);
  At(n, r) || (s.uniform1iv(this.addr, r), Tt(n, r));
  for (let o = 0; o !== i; ++o)
    t.setTexture3D(e[o] || Lh, r[o]);
}
function l0(s, e, t) {
  const n = this.cache, i = e.length, r = _o(t, i);
  At(n, r) || (s.uniform1iv(this.addr, r), Tt(n, r));
  for (let o = 0; o !== i; ++o)
    t.setTextureCube(e[o] || Ph, r[o]);
}
function c0(s, e, t) {
  const n = this.cache, i = e.length, r = _o(t, i);
  At(n, r) || (s.uniform1iv(this.addr, r), Tt(n, r));
  for (let o = 0; o !== i; ++o)
    t.setTexture2DArray(e[o] || Ch, r[o]);
}
function u0(s) {
  switch (s) {
    case 5126:
      return jv;
    // FLOAT
    case 35664:
      return Xv;
    // _VEC2
    case 35665:
      return qv;
    // _VEC3
    case 35666:
      return Yv;
    // _VEC4
    case 35674:
      return Kv;
    // _MAT2
    case 35675:
      return $v;
    // _MAT3
    case 35676:
      return Jv;
    // _MAT4
    case 5124:
    case 35670:
      return Zv;
    // INT, BOOL
    case 35667:
    case 35671:
      return Qv;
    // _VEC2
    case 35668:
    case 35672:
      return e0;
    // _VEC3
    case 35669:
    case 35673:
      return t0;
    // _VEC4
    case 5125:
      return n0;
    // UINT
    case 36294:
      return i0;
    // _VEC2
    case 36295:
      return s0;
    // _VEC3
    case 36296:
      return r0;
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
      return o0;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return a0;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return l0;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return c0;
  }
}
class h0 {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Wv(t.type);
  }
}
class d0 {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = u0(t.type);
  }
}
class f0 {
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
const na = /(\w+)(\])?(\[|\.)?/g;
function Nc(s, e) {
  s.seq.push(e), s.map[e.id] = e;
}
function p0(s, e, t) {
  const n = s.name, i = n.length;
  for (na.lastIndex = 0; ; ) {
    const r = na.exec(n), o = na.lastIndex;
    let a = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === i) {
      Nc(t, c === void 0 ? new h0(a, s, e) : new d0(a, s, e));
      break;
    } else {
      let h = t.map[a];
      h === void 0 && (h = new f0(a), Nc(t, h)), t = h;
    }
  }
}
class Yr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i), o = e.getUniformLocation(t, r.name);
      p0(r, o, this);
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
function Oc(s, e, t) {
  const n = s.createShader(e);
  return s.shaderSource(n, t), s.compileShader(n), n;
}
const m0 = 37297;
let g0 = 0;
function _0(s, e) {
  const t = s.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let o = i; o < r; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function v0(s) {
  const e = st.getPrimaries(st.workingColorSpace), t = st.getPrimaries(s);
  let n;
  switch (e === t ? n = "" : e === io && t === no ? n = "LinearDisplayP3ToLinearSRGB" : e === no && t === io && (n = "LinearSRGBToLinearDisplayP3"), s) {
    case Lt:
    case po:
      return [n, "LinearTransferOETF"];
    case _t:
    case Ka:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", s), [n, "LinearTransferOETF"];
  }
}
function Fc(s, e, t) {
  const n = s.getShaderParameter(e, s.COMPILE_STATUS), i = s.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const o = parseInt(r[1]);
    return t.toUpperCase() + `

` + i + `

` + _0(s.getShaderSource(e), o);
  } else
    return i;
}
function y0(s, e) {
  const t = v0(e);
  return `vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function x0(s, e) {
  let t;
  switch (e) {
    case fp:
      t = "Linear";
      break;
    case pp:
      t = "Reinhard";
      break;
    case mp:
      t = "OptimizedCineon";
      break;
    case eh:
      t = "ACESFilmic";
      break;
    case _p:
      t = "AgX";
      break;
    case gp:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function E0(s) {
  return [
    s.extensionDerivatives || s.envMapCubeUVHeight || s.bumpMap || s.normalMapTangentSpace || s.clearcoatNormalMap || s.flatShading || s.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (s.extensionFragDepth || s.logarithmicDepthBuffer) && s.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    s.extensionDrawBuffers && s.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (s.extensionShaderTextureLOD || s.envMap || s.transmission) && s.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(rs).join(`
`);
}
function S0(s) {
  return [
    s.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : ""
  ].filter(rs).join(`
`);
}
function M0(s) {
  const e = [];
  for (const t in s) {
    const n = s[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function A0(s, e) {
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
function rs(s) {
  return s !== "";
}
function Bc(s, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Vc(s, e) {
  return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const T0 = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ca(s) {
  return s.replace(T0, w0);
}
const b0 = /* @__PURE__ */ new Map([
  ["encodings_fragment", "colorspace_fragment"],
  // @deprecated, r154
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  // @deprecated, r154
  ["output_fragment", "opaque_fragment"]
  // @deprecated, r154
]);
function w0(s, e) {
  let t = We[e];
  if (t === void 0) {
    const n = b0.get(e);
    if (n !== void 0)
      t = We[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Ca(t);
}
const R0 = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function kc(s) {
  return s.replace(R0, C0);
}
function C0(s, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function zc(s) {
  let e = "precision " + s.precision + ` float;
precision ` + s.precision + " int;";
  return s.precision === "highp" ? e += `
#define HIGH_PRECISION` : s.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : s.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function L0(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return s.shadowMapType === Ju ? e = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === Zu ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === Nn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function P0(s) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s.envMap)
    switch (s.envMapMode) {
      case us:
      case hs:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case fo:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function I0(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case hs:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function D0(s) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s.envMap)
    switch (s.combine) {
      case Qu:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case hp:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case dp:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function U0(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t };
}
function N0(s, e, t, n) {
  const i = s.getContext(), r = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const l = L0(t), c = P0(t), u = I0(t), h = D0(t), d = U0(t), m = t.isWebGL2 ? "" : E0(t), g = S0(t), _ = M0(r), f = i.createProgram();
  let p, x, y = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(rs).join(`
`), p.length > 0 && (p += `
`), x = [
    m,
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(rs).join(`
`), x.length > 0 && (x += `
`)) : (p = [
    zc(t),
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
  ].filter(rs).join(`
`), x = [
    m,
    zc(t),
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
    t.toneMapping !== ei ? "#define TONE_MAPPING" : "",
    t.toneMapping !== ei ? We.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== ei ? x0("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    We.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    y0("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(rs).join(`
`)), o = Ca(o), o = Bc(o, t), o = Vc(o, t), a = Ca(a), a = Bc(a, t), a = Vc(a, t), o = kc(o), a = kc(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (y = `#version 300 es
`, p = [
    g,
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, x = [
    "precision mediump sampler2DArray;",
    "#define varying in",
    t.glslVersion === rc ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === rc ? "" : "#define gl_FragColor pc_fragColor",
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
` + x);
  const b = y + p + o, C = y + x + a, w = Oc(i, i.VERTEX_SHADER, b), R = Oc(i, i.FRAGMENT_SHADER, C);
  i.attachShader(f, w), i.attachShader(f, R), t.index0AttributeName !== void 0 ? i.bindAttribLocation(f, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(f, 0, "position"), i.linkProgram(f);
  function G(J) {
    if (s.debug.checkShaderErrors) {
      const oe = i.getProgramInfoLog(f).trim(), L = i.getShaderInfoLog(w).trim(), I = i.getShaderInfoLog(R).trim();
      let U = !0, ee = !0;
      if (i.getProgramParameter(f, i.LINK_STATUS) === !1)
        if (U = !1, typeof s.debug.onShaderError == "function")
          s.debug.onShaderError(i, f, w, R);
        else {
          const O = Fc(i, w, "vertex"), B = Fc(i, R, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(f, i.VALIDATE_STATUS) + `

Program Info Log: ` + oe + `
` + O + `
` + B
          );
        }
      else oe !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", oe) : (L === "" || I === "") && (ee = !1);
      ee && (J.diagnostics = {
        runnable: U,
        programLog: oe,
        vertexShader: {
          log: L,
          prefix: p
        },
        fragmentShader: {
          log: I,
          prefix: x
        }
      });
    }
    i.deleteShader(w), i.deleteShader(R), E = new Yr(i, f), T = A0(i, f);
  }
  let E;
  this.getUniforms = function() {
    return E === void 0 && G(this), E;
  };
  let T;
  this.getAttributes = function() {
    return T === void 0 && G(this), T;
  };
  let z = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return z === !1 && (z = i.getProgramParameter(f, m0)), z;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(f), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = g0++, this.cacheKey = e, this.usedTimes = 1, this.program = f, this.vertexShader = w, this.fragmentShader = R, this;
}
let O0 = 0;
class F0 {
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
    return n === void 0 && (n = new B0(e), t.set(e, n)), n;
  }
}
class B0 {
  constructor(e) {
    this.id = O0++, this.code = e, this.usedTimes = 0;
  }
}
function V0(s, e, t, n, i, r, o) {
  const a = new vh(), l = new F0(), c = [], u = i.isWebGL2, h = i.logarithmicDepthBuffer, d = i.vertexTextures;
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
  function _(E) {
    return E === 0 ? "uv" : `uv${E}`;
  }
  function f(E, T, z, J, oe) {
    const L = J.fog, I = oe.geometry, U = E.isMeshStandardMaterial ? J.environment : null, ee = (E.isMeshStandardMaterial ? t : e).get(E.envMap || U), O = ee && ee.mapping === fo ? ee.image.height : null, B = g[E.type];
    E.precision !== null && (m = i.getMaxPrecision(E.precision), m !== E.precision && console.warn("THREE.WebGLProgram.getParameters:", E.precision, "not supported, using", m, "instead."));
    const Q = I.morphAttributes.position || I.morphAttributes.normal || I.morphAttributes.color, H = Q !== void 0 ? Q.length : 0;
    let W = 0;
    I.morphAttributes.position !== void 0 && (W = 1), I.morphAttributes.normal !== void 0 && (W = 2), I.morphAttributes.color !== void 0 && (W = 3);
    let D, K, re, fe;
    if (B) {
      const bt = Sn[B];
      D = bt.vertexShader, K = bt.fragmentShader;
    } else
      D = E.vertexShader, K = E.fragmentShader, l.update(E), re = l.getVertexShaderID(E), fe = l.getFragmentShaderID(E);
    const me = s.getRenderTarget(), ge = oe.isInstancedMesh === !0, le = oe.isBatchedMesh === !0, he = !!E.map, be = !!E.matcap, V = !!ee, ft = !!E.aoMap, Se = !!E.lightMap, Ue = !!E.bumpMap, Ee = !!E.normalMap, ot = !!E.displacementMap, Pe = !!E.emissiveMap, A = !!E.metalnessMap, v = !!E.roughnessMap, P = E.anisotropy > 0, q = E.clearcoat > 0, $ = E.iridescence > 0, te = E.sheen > 0, ae = E.transmission > 0, ne = P && !!E.anisotropyMap, ce = q && !!E.clearcoatMap, _e = q && !!E.clearcoatNormalMap, Ce = q && !!E.clearcoatRoughnessMap, se = $ && !!E.iridescenceMap, Ze = $ && !!E.iridescenceThicknessMap, Ve = te && !!E.sheenColorMap, we = te && !!E.sheenRoughnessMap, Me = !!E.specularMap, xe = !!E.specularColorMap, Le = !!E.specularIntensityMap, et = ae && !!E.transmissionMap, rt = ae && !!E.thicknessMap, Oe = !!E.gradientMap, k = !!E.alphaMap, M = E.alphaTest > 0, ie = !!E.alphaHash, de = !!E.extensions, Re = !!I.attributes.uv1, Te = !!I.attributes.uv2, nt = !!I.attributes.uv3;
    let at = ei;
    return E.toneMapped && (me === null || me.isXRRenderTarget === !0) && (at = s.toneMapping), {
      isWebGL2: u,
      shaderID: B,
      shaderType: E.type,
      shaderName: E.name,
      vertexShader: D,
      fragmentShader: K,
      defines: E.defines,
      customVertexShaderID: re,
      customFragmentShaderID: fe,
      isRawShaderMaterial: E.isRawShaderMaterial === !0,
      glslVersion: E.glslVersion,
      precision: m,
      batching: le,
      instancing: ge,
      instancingColor: ge && oe.instanceColor !== null,
      supportsVertexTextures: d,
      outputColorSpace: me === null ? s.outputColorSpace : me.isXRRenderTarget === !0 ? me.texture.colorSpace : Lt,
      map: he,
      matcap: be,
      envMap: V,
      envMapMode: V && ee.mapping,
      envMapCubeUVHeight: O,
      aoMap: ft,
      lightMap: Se,
      bumpMap: Ue,
      normalMap: Ee,
      displacementMap: d && ot,
      emissiveMap: Pe,
      normalMapObjectSpace: Ee && E.normalMapType === Up,
      normalMapTangentSpace: Ee && E.normalMapType === dh,
      metalnessMap: A,
      roughnessMap: v,
      anisotropy: P,
      anisotropyMap: ne,
      clearcoat: q,
      clearcoatMap: ce,
      clearcoatNormalMap: _e,
      clearcoatRoughnessMap: Ce,
      iridescence: $,
      iridescenceMap: se,
      iridescenceThicknessMap: Ze,
      sheen: te,
      sheenColorMap: Ve,
      sheenRoughnessMap: we,
      specularMap: Me,
      specularColorMap: xe,
      specularIntensityMap: Le,
      transmission: ae,
      transmissionMap: et,
      thicknessMap: rt,
      gradientMap: Oe,
      opaque: E.transparent === !1 && E.blending === os,
      alphaMap: k,
      alphaTest: M,
      alphaHash: ie,
      combine: E.combine,
      //
      mapUv: he && _(E.map.channel),
      aoMapUv: ft && _(E.aoMap.channel),
      lightMapUv: Se && _(E.lightMap.channel),
      bumpMapUv: Ue && _(E.bumpMap.channel),
      normalMapUv: Ee && _(E.normalMap.channel),
      displacementMapUv: ot && _(E.displacementMap.channel),
      emissiveMapUv: Pe && _(E.emissiveMap.channel),
      metalnessMapUv: A && _(E.metalnessMap.channel),
      roughnessMapUv: v && _(E.roughnessMap.channel),
      anisotropyMapUv: ne && _(E.anisotropyMap.channel),
      clearcoatMapUv: ce && _(E.clearcoatMap.channel),
      clearcoatNormalMapUv: _e && _(E.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Ce && _(E.clearcoatRoughnessMap.channel),
      iridescenceMapUv: se && _(E.iridescenceMap.channel),
      iridescenceThicknessMapUv: Ze && _(E.iridescenceThicknessMap.channel),
      sheenColorMapUv: Ve && _(E.sheenColorMap.channel),
      sheenRoughnessMapUv: we && _(E.sheenRoughnessMap.channel),
      specularMapUv: Me && _(E.specularMap.channel),
      specularColorMapUv: xe && _(E.specularColorMap.channel),
      specularIntensityMapUv: Le && _(E.specularIntensityMap.channel),
      transmissionMapUv: et && _(E.transmissionMap.channel),
      thicknessMapUv: rt && _(E.thicknessMap.channel),
      alphaMapUv: k && _(E.alphaMap.channel),
      //
      vertexTangents: !!I.attributes.tangent && (Ee || P),
      vertexColors: E.vertexColors,
      vertexAlphas: E.vertexColors === !0 && !!I.attributes.color && I.attributes.color.itemSize === 4,
      vertexUv1s: Re,
      vertexUv2s: Te,
      vertexUv3s: nt,
      pointsUvs: oe.isPoints === !0 && !!I.attributes.uv && (he || k),
      fog: !!L,
      useFog: E.fog === !0,
      fogExp2: L && L.isFogExp2,
      flatShading: E.flatShading === !0,
      sizeAttenuation: E.sizeAttenuation === !0,
      logarithmicDepthBuffer: h,
      skinning: oe.isSkinnedMesh === !0,
      morphTargets: I.morphAttributes.position !== void 0,
      morphNormals: I.morphAttributes.normal !== void 0,
      morphColors: I.morphAttributes.color !== void 0,
      morphTargetsCount: H,
      morphTextureStride: W,
      numDirLights: T.directional.length,
      numPointLights: T.point.length,
      numSpotLights: T.spot.length,
      numSpotLightMaps: T.spotLightMap.length,
      numRectAreaLights: T.rectArea.length,
      numHemiLights: T.hemi.length,
      numDirLightShadows: T.directionalShadowMap.length,
      numPointLightShadows: T.pointShadowMap.length,
      numSpotLightShadows: T.spotShadowMap.length,
      numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps,
      numLightProbes: T.numLightProbes,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: E.dithering,
      shadowMapEnabled: s.shadowMap.enabled && z.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: at,
      useLegacyLights: s._useLegacyLights,
      decodeVideoTexture: he && E.map.isVideoTexture === !0 && st.getTransfer(E.map.colorSpace) === ht,
      premultipliedAlpha: E.premultipliedAlpha,
      doubleSided: E.side === Mn,
      flipSided: E.side === $t,
      useDepthPacking: E.depthPacking >= 0,
      depthPacking: E.depthPacking || 0,
      index0AttributeName: E.index0AttributeName,
      extensionDerivatives: de && E.extensions.derivatives === !0,
      extensionFragDepth: de && E.extensions.fragDepth === !0,
      extensionDrawBuffers: de && E.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: de && E.extensions.shaderTextureLOD === !0,
      extensionClipCullDistance: de && E.extensions.clipCullDistance && n.has("WEBGL_clip_cull_distance"),
      rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: E.customProgramCacheKey()
    };
  }
  function p(E) {
    const T = [];
    if (E.shaderID ? T.push(E.shaderID) : (T.push(E.customVertexShaderID), T.push(E.customFragmentShaderID)), E.defines !== void 0)
      for (const z in E.defines)
        T.push(z), T.push(E.defines[z]);
    return E.isRawShaderMaterial === !1 && (x(T, E), y(T, E), T.push(s.outputColorSpace)), T.push(E.customProgramCacheKey), T.join();
  }
  function x(E, T) {
    E.push(T.precision), E.push(T.outputColorSpace), E.push(T.envMapMode), E.push(T.envMapCubeUVHeight), E.push(T.mapUv), E.push(T.alphaMapUv), E.push(T.lightMapUv), E.push(T.aoMapUv), E.push(T.bumpMapUv), E.push(T.normalMapUv), E.push(T.displacementMapUv), E.push(T.emissiveMapUv), E.push(T.metalnessMapUv), E.push(T.roughnessMapUv), E.push(T.anisotropyMapUv), E.push(T.clearcoatMapUv), E.push(T.clearcoatNormalMapUv), E.push(T.clearcoatRoughnessMapUv), E.push(T.iridescenceMapUv), E.push(T.iridescenceThicknessMapUv), E.push(T.sheenColorMapUv), E.push(T.sheenRoughnessMapUv), E.push(T.specularMapUv), E.push(T.specularColorMapUv), E.push(T.specularIntensityMapUv), E.push(T.transmissionMapUv), E.push(T.thicknessMapUv), E.push(T.combine), E.push(T.fogExp2), E.push(T.sizeAttenuation), E.push(T.morphTargetsCount), E.push(T.morphAttributeCount), E.push(T.numDirLights), E.push(T.numPointLights), E.push(T.numSpotLights), E.push(T.numSpotLightMaps), E.push(T.numHemiLights), E.push(T.numRectAreaLights), E.push(T.numDirLightShadows), E.push(T.numPointLightShadows), E.push(T.numSpotLightShadows), E.push(T.numSpotLightShadowsWithMaps), E.push(T.numLightProbes), E.push(T.shadowMapType), E.push(T.toneMapping), E.push(T.numClippingPlanes), E.push(T.numClipIntersection), E.push(T.depthPacking);
  }
  function y(E, T) {
    a.disableAll(), T.isWebGL2 && a.enable(0), T.supportsVertexTextures && a.enable(1), T.instancing && a.enable(2), T.instancingColor && a.enable(3), T.matcap && a.enable(4), T.envMap && a.enable(5), T.normalMapObjectSpace && a.enable(6), T.normalMapTangentSpace && a.enable(7), T.clearcoat && a.enable(8), T.iridescence && a.enable(9), T.alphaTest && a.enable(10), T.vertexColors && a.enable(11), T.vertexAlphas && a.enable(12), T.vertexUv1s && a.enable(13), T.vertexUv2s && a.enable(14), T.vertexUv3s && a.enable(15), T.vertexTangents && a.enable(16), T.anisotropy && a.enable(17), T.alphaHash && a.enable(18), T.batching && a.enable(19), E.push(a.mask), a.disableAll(), T.fog && a.enable(0), T.useFog && a.enable(1), T.flatShading && a.enable(2), T.logarithmicDepthBuffer && a.enable(3), T.skinning && a.enable(4), T.morphTargets && a.enable(5), T.morphNormals && a.enable(6), T.morphColors && a.enable(7), T.premultipliedAlpha && a.enable(8), T.shadowMapEnabled && a.enable(9), T.useLegacyLights && a.enable(10), T.doubleSided && a.enable(11), T.flipSided && a.enable(12), T.useDepthPacking && a.enable(13), T.dithering && a.enable(14), T.transmission && a.enable(15), T.sheen && a.enable(16), T.opaque && a.enable(17), T.pointsUvs && a.enable(18), T.decodeVideoTexture && a.enable(19), E.push(a.mask);
  }
  function b(E) {
    const T = g[E.type];
    let z;
    if (T) {
      const J = Sn[T];
      z = Em.clone(J.uniforms);
    } else
      z = E.uniforms;
    return z;
  }
  function C(E, T) {
    let z;
    for (let J = 0, oe = c.length; J < oe; J++) {
      const L = c[J];
      if (L.cacheKey === T) {
        z = L, ++z.usedTimes;
        break;
      }
    }
    return z === void 0 && (z = new N0(s, T, E, r), c.push(z)), z;
  }
  function w(E) {
    if (--E.usedTimes === 0) {
      const T = c.indexOf(E);
      c[T] = c[c.length - 1], c.pop(), E.destroy();
    }
  }
  function R(E) {
    l.remove(E);
  }
  function G() {
    l.dispose();
  }
  return {
    getParameters: f,
    getProgramCacheKey: p,
    getUniforms: b,
    acquireProgram: C,
    releaseProgram: w,
    releaseShaderCache: R,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: c,
    dispose: G
  };
}
function k0() {
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
function z0(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id;
}
function Hc(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id;
}
function Gc() {
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
    t.length > 1 && t.sort(h || z0), n.length > 1 && n.sort(d || Hc), i.length > 1 && i.sort(d || Hc);
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
function H0() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const r = s.get(n);
    let o;
    return r === void 0 ? (o = new Gc(), s.set(n, [o])) : i >= r.length ? (o = new Gc(), r.push(o)) : o = r[i], o;
  }
  function t() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function G0() {
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
            color: new Be()
          };
          break;
        case "SpotLight":
          t = {
            position: new N(),
            direction: new N(),
            color: new Be(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new N(),
            color: new Be(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new N(),
            skyColor: new Be(),
            groundColor: new Be()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Be(),
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
function W0() {
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
let j0 = 0;
function X0(s, e) {
  return (e.castShadow ? 2 : 0) - (s.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (s.map ? 1 : 0);
}
function q0(s, e) {
  const t = new G0(), n = W0(), i = {
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
    let _ = 0, f = 0, p = 0, x = 0, y = 0, b = 0, C = 0, w = 0, R = 0, G = 0, E = 0;
    u.sort(X0);
    const T = h === !0 ? Math.PI : 1;
    for (let J = 0, oe = u.length; J < oe; J++) {
      const L = u[J], I = L.color, U = L.intensity, ee = L.distance, O = L.shadow && L.shadow.map ? L.shadow.map.texture : null;
      if (L.isAmbientLight)
        d += I.r * U * T, m += I.g * U * T, g += I.b * U * T;
      else if (L.isLightProbe) {
        for (let B = 0; B < 9; B++)
          i.probe[B].addScaledVector(L.sh.coefficients[B], U);
        E++;
      } else if (L.isDirectionalLight) {
        const B = t.get(L);
        if (B.color.copy(L.color).multiplyScalar(L.intensity * T), L.castShadow) {
          const Q = L.shadow, H = n.get(L);
          H.shadowBias = Q.bias, H.shadowNormalBias = Q.normalBias, H.shadowRadius = Q.radius, H.shadowMapSize = Q.mapSize, i.directionalShadow[_] = H, i.directionalShadowMap[_] = O, i.directionalShadowMatrix[_] = L.shadow.matrix, b++;
        }
        i.directional[_] = B, _++;
      } else if (L.isSpotLight) {
        const B = t.get(L);
        B.position.setFromMatrixPosition(L.matrixWorld), B.color.copy(I).multiplyScalar(U * T), B.distance = ee, B.coneCos = Math.cos(L.angle), B.penumbraCos = Math.cos(L.angle * (1 - L.penumbra)), B.decay = L.decay, i.spot[p] = B;
        const Q = L.shadow;
        if (L.map && (i.spotLightMap[R] = L.map, R++, Q.updateMatrices(L), L.castShadow && G++), i.spotLightMatrix[p] = Q.matrix, L.castShadow) {
          const H = n.get(L);
          H.shadowBias = Q.bias, H.shadowNormalBias = Q.normalBias, H.shadowRadius = Q.radius, H.shadowMapSize = Q.mapSize, i.spotShadow[p] = H, i.spotShadowMap[p] = O, w++;
        }
        p++;
      } else if (L.isRectAreaLight) {
        const B = t.get(L);
        B.color.copy(I).multiplyScalar(U), B.halfWidth.set(L.width * 0.5, 0, 0), B.halfHeight.set(0, L.height * 0.5, 0), i.rectArea[x] = B, x++;
      } else if (L.isPointLight) {
        const B = t.get(L);
        if (B.color.copy(L.color).multiplyScalar(L.intensity * T), B.distance = L.distance, B.decay = L.decay, L.castShadow) {
          const Q = L.shadow, H = n.get(L);
          H.shadowBias = Q.bias, H.shadowNormalBias = Q.normalBias, H.shadowRadius = Q.radius, H.shadowMapSize = Q.mapSize, H.shadowCameraNear = Q.camera.near, H.shadowCameraFar = Q.camera.far, i.pointShadow[f] = H, i.pointShadowMap[f] = O, i.pointShadowMatrix[f] = L.shadow.matrix, C++;
        }
        i.point[f] = B, f++;
      } else if (L.isHemisphereLight) {
        const B = t.get(L);
        B.skyColor.copy(L.color).multiplyScalar(U * T), B.groundColor.copy(L.groundColor).multiplyScalar(U * T), i.hemi[y] = B, y++;
      }
    }
    x > 0 && (e.isWebGL2 ? s.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = pe.LTC_FLOAT_1, i.rectAreaLTC2 = pe.LTC_FLOAT_2) : (i.rectAreaLTC1 = pe.LTC_HALF_1, i.rectAreaLTC2 = pe.LTC_HALF_2) : s.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = pe.LTC_FLOAT_1, i.rectAreaLTC2 = pe.LTC_FLOAT_2) : s.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = pe.LTC_HALF_1, i.rectAreaLTC2 = pe.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = m, i.ambient[2] = g;
    const z = i.hash;
    (z.directionalLength !== _ || z.pointLength !== f || z.spotLength !== p || z.rectAreaLength !== x || z.hemiLength !== y || z.numDirectionalShadows !== b || z.numPointShadows !== C || z.numSpotShadows !== w || z.numSpotMaps !== R || z.numLightProbes !== E) && (i.directional.length = _, i.spot.length = p, i.rectArea.length = x, i.point.length = f, i.hemi.length = y, i.directionalShadow.length = b, i.directionalShadowMap.length = b, i.pointShadow.length = C, i.pointShadowMap.length = C, i.spotShadow.length = w, i.spotShadowMap.length = w, i.directionalShadowMatrix.length = b, i.pointShadowMatrix.length = C, i.spotLightMatrix.length = w + R - G, i.spotLightMap.length = R, i.numSpotLightShadowsWithMaps = G, i.numLightProbes = E, z.directionalLength = _, z.pointLength = f, z.spotLength = p, z.rectAreaLength = x, z.hemiLength = y, z.numDirectionalShadows = b, z.numPointShadows = C, z.numSpotShadows = w, z.numSpotMaps = R, z.numLightProbes = E, i.version = j0++);
  }
  function c(u, h) {
    let d = 0, m = 0, g = 0, _ = 0, f = 0;
    const p = h.matrixWorldInverse;
    for (let x = 0, y = u.length; x < y; x++) {
      const b = u[x];
      if (b.isDirectionalLight) {
        const C = i.directional[d];
        C.direction.setFromMatrixPosition(b.matrixWorld), r.setFromMatrixPosition(b.target.matrixWorld), C.direction.sub(r), C.direction.transformDirection(p), d++;
      } else if (b.isSpotLight) {
        const C = i.spot[g];
        C.position.setFromMatrixPosition(b.matrixWorld), C.position.applyMatrix4(p), C.direction.setFromMatrixPosition(b.matrixWorld), r.setFromMatrixPosition(b.target.matrixWorld), C.direction.sub(r), C.direction.transformDirection(p), g++;
      } else if (b.isRectAreaLight) {
        const C = i.rectArea[_];
        C.position.setFromMatrixPosition(b.matrixWorld), C.position.applyMatrix4(p), a.identity(), o.copy(b.matrixWorld), o.premultiply(p), a.extractRotation(o), C.halfWidth.set(b.width * 0.5, 0, 0), C.halfHeight.set(0, b.height * 0.5, 0), C.halfWidth.applyMatrix4(a), C.halfHeight.applyMatrix4(a), _++;
      } else if (b.isPointLight) {
        const C = i.point[m];
        C.position.setFromMatrixPosition(b.matrixWorld), C.position.applyMatrix4(p), m++;
      } else if (b.isHemisphereLight) {
        const C = i.hemi[f];
        C.direction.setFromMatrixPosition(b.matrixWorld), C.direction.transformDirection(p), f++;
      }
    }
  }
  return {
    setup: l,
    setupView: c,
    state: i
  };
}
function Wc(s, e) {
  const t = new q0(s, e), n = [], i = [];
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
function Y0(s, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(r, o = 0) {
    const a = t.get(r);
    let l;
    return a === void 0 ? (l = new Wc(s, e), t.set(r, [l])) : o >= a.length ? (l = new Wc(s, e), a.push(l)) : l = a[o], l;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class K0 extends Tn {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Ip, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class $0 extends Tn {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const J0 = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Z0 = `uniform sampler2D shadow_pass;
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
function Q0(s, e, t) {
  let n = new Ja();
  const i = new Je(), r = new Je(), o = new ut(), a = new K0({ depthPacking: Dp }), l = new $0(), c = {}, u = t.maxTextureSize, h = { [Bn]: $t, [$t]: Bn, [Mn]: Mn }, d = new Pi({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Je() },
      radius: { value: 4 }
    },
    vertexShader: J0,
    fragmentShader: Z0
  }), m = d.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new vn();
  g.setAttribute(
    "position",
    new Wt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const _ = new Ge(g, d), f = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Ju;
  let p = this.type;
  this.render = function(w, R, G) {
    if (f.enabled === !1 || f.autoUpdate === !1 && f.needsUpdate === !1 || w.length === 0) return;
    const E = s.getRenderTarget(), T = s.getActiveCubeFace(), z = s.getActiveMipmapLevel(), J = s.state;
    J.setBlending(Qn), J.buffers.color.setClear(1, 1, 1, 1), J.buffers.depth.setTest(!0), J.setScissorTest(!1);
    const oe = p !== Nn && this.type === Nn, L = p === Nn && this.type !== Nn;
    for (let I = 0, U = w.length; I < U; I++) {
      const ee = w[I], O = ee.shadow;
      if (O === void 0) {
        console.warn("THREE.WebGLShadowMap:", ee, "has no shadow.");
        continue;
      }
      if (O.autoUpdate === !1 && O.needsUpdate === !1) continue;
      i.copy(O.mapSize);
      const B = O.getFrameExtents();
      if (i.multiply(B), r.copy(O.mapSize), (i.x > u || i.y > u) && (i.x > u && (r.x = Math.floor(u / B.x), i.x = r.x * B.x, O.mapSize.x = r.x), i.y > u && (r.y = Math.floor(u / B.y), i.y = r.y * B.y, O.mapSize.y = r.y)), O.map === null || oe === !0 || L === !0) {
        const H = this.type !== Nn ? { minFilter: Ct, magFilter: Ct } : {};
        O.map !== null && O.map.dispose(), O.map = new Li(i.x, i.y, H), O.map.texture.name = ee.name + ".shadowMap", O.camera.updateProjectionMatrix();
      }
      s.setRenderTarget(O.map), s.clear();
      const Q = O.getViewportCount();
      for (let H = 0; H < Q; H++) {
        const W = O.getViewport(H);
        o.set(
          r.x * W.x,
          r.y * W.y,
          r.x * W.z,
          r.y * W.w
        ), J.viewport(o), O.updateMatrices(ee, H), n = O.getFrustum(), b(R, G, O.camera, ee, this.type);
      }
      O.isPointLightShadow !== !0 && this.type === Nn && x(O, G), O.needsUpdate = !1;
    }
    p = this.type, f.needsUpdate = !1, s.setRenderTarget(E, T, z);
  };
  function x(w, R) {
    const G = e.update(_);
    d.defines.VSM_SAMPLES !== w.blurSamples && (d.defines.VSM_SAMPLES = w.blurSamples, m.defines.VSM_SAMPLES = w.blurSamples, d.needsUpdate = !0, m.needsUpdate = !0), w.mapPass === null && (w.mapPass = new Li(i.x, i.y)), d.uniforms.shadow_pass.value = w.map.texture, d.uniforms.resolution.value = w.mapSize, d.uniforms.radius.value = w.radius, s.setRenderTarget(w.mapPass), s.clear(), s.renderBufferDirect(R, null, G, d, _, null), m.uniforms.shadow_pass.value = w.mapPass.texture, m.uniforms.resolution.value = w.mapSize, m.uniforms.radius.value = w.radius, s.setRenderTarget(w.map), s.clear(), s.renderBufferDirect(R, null, G, m, _, null);
  }
  function y(w, R, G, E) {
    let T = null;
    const z = G.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
    if (z !== void 0)
      T = z;
    else if (T = G.isPointLight === !0 ? l : a, s.localClippingEnabled && R.clipShadows === !0 && Array.isArray(R.clippingPlanes) && R.clippingPlanes.length !== 0 || R.displacementMap && R.displacementScale !== 0 || R.alphaMap && R.alphaTest > 0 || R.map && R.alphaTest > 0) {
      const J = T.uuid, oe = R.uuid;
      let L = c[J];
      L === void 0 && (L = {}, c[J] = L);
      let I = L[oe];
      I === void 0 && (I = T.clone(), L[oe] = I, R.addEventListener("dispose", C)), T = I;
    }
    if (T.visible = R.visible, T.wireframe = R.wireframe, E === Nn ? T.side = R.shadowSide !== null ? R.shadowSide : R.side : T.side = R.shadowSide !== null ? R.shadowSide : h[R.side], T.alphaMap = R.alphaMap, T.alphaTest = R.alphaTest, T.map = R.map, T.clipShadows = R.clipShadows, T.clippingPlanes = R.clippingPlanes, T.clipIntersection = R.clipIntersection, T.displacementMap = R.displacementMap, T.displacementScale = R.displacementScale, T.displacementBias = R.displacementBias, T.wireframeLinewidth = R.wireframeLinewidth, T.linewidth = R.linewidth, G.isPointLight === !0 && T.isMeshDistanceMaterial === !0) {
      const J = s.properties.get(T);
      J.light = G;
    }
    return T;
  }
  function b(w, R, G, E, T) {
    if (w.visible === !1) return;
    if (w.layers.test(R.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && T === Nn) && (!w.frustumCulled || n.intersectsObject(w))) {
      w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse, w.matrixWorld);
      const oe = e.update(w), L = w.material;
      if (Array.isArray(L)) {
        const I = oe.groups;
        for (let U = 0, ee = I.length; U < ee; U++) {
          const O = I[U], B = L[O.materialIndex];
          if (B && B.visible) {
            const Q = y(w, B, E, T);
            w.onBeforeShadow(s, w, R, G, oe, Q, O), s.renderBufferDirect(G, null, oe, Q, w, O), w.onAfterShadow(s, w, R, G, oe, Q, O);
          }
        }
      } else if (L.visible) {
        const I = y(w, L, E, T);
        w.onBeforeShadow(s, w, R, G, oe, I, null), s.renderBufferDirect(G, null, oe, I, w, null), w.onAfterShadow(s, w, R, G, oe, I, null);
      }
    }
    const J = w.children;
    for (let oe = 0, L = J.length; oe < L; oe++)
      b(J[oe], R, G, E, T);
  }
  function C(w) {
    w.target.removeEventListener("dispose", C);
    for (const G in c) {
      const E = c[G], T = w.target.uuid;
      T in E && (E[T].dispose(), delete E[T]);
    }
  }
}
function ey(s, e, t) {
  const n = t.isWebGL2;
  function i() {
    let M = !1;
    const ie = new ut();
    let de = null;
    const Re = new ut(0, 0, 0, 0);
    return {
      setMask: function(Te) {
        de !== Te && !M && (s.colorMask(Te, Te, Te, Te), de = Te);
      },
      setLocked: function(Te) {
        M = Te;
      },
      setClear: function(Te, nt, at, Et, bt) {
        bt === !0 && (Te *= Et, nt *= Et, at *= Et), ie.set(Te, nt, at, Et), Re.equals(ie) === !1 && (s.clearColor(Te, nt, at, Et), Re.copy(ie));
      },
      reset: function() {
        M = !1, de = null, Re.set(-1, 0, 0, 0);
      }
    };
  }
  function r() {
    let M = !1, ie = null, de = null, Re = null;
    return {
      setTest: function(Te) {
        Te ? le(s.DEPTH_TEST) : he(s.DEPTH_TEST);
      },
      setMask: function(Te) {
        ie !== Te && !M && (s.depthMask(Te), ie = Te);
      },
      setFunc: function(Te) {
        if (de !== Te) {
          switch (Te) {
            case sp:
              s.depthFunc(s.NEVER);
              break;
            case rp:
              s.depthFunc(s.ALWAYS);
              break;
            case op:
              s.depthFunc(s.LESS);
              break;
            case Zr:
              s.depthFunc(s.LEQUAL);
              break;
            case ap:
              s.depthFunc(s.EQUAL);
              break;
            case lp:
              s.depthFunc(s.GEQUAL);
              break;
            case cp:
              s.depthFunc(s.GREATER);
              break;
            case up:
              s.depthFunc(s.NOTEQUAL);
              break;
            default:
              s.depthFunc(s.LEQUAL);
          }
          de = Te;
        }
      },
      setLocked: function(Te) {
        M = Te;
      },
      setClear: function(Te) {
        Re !== Te && (s.clearDepth(Te), Re = Te);
      },
      reset: function() {
        M = !1, ie = null, de = null, Re = null;
      }
    };
  }
  function o() {
    let M = !1, ie = null, de = null, Re = null, Te = null, nt = null, at = null, Et = null, bt = null;
    return {
      setTest: function(lt) {
        M || (lt ? le(s.STENCIL_TEST) : he(s.STENCIL_TEST));
      },
      setMask: function(lt) {
        ie !== lt && !M && (s.stencilMask(lt), ie = lt);
      },
      setFunc: function(lt, Pt, Vt) {
        (de !== lt || Re !== Pt || Te !== Vt) && (s.stencilFunc(lt, Pt, Vt), de = lt, Re = Pt, Te = Vt);
      },
      setOp: function(lt, Pt, Vt) {
        (nt !== lt || at !== Pt || Et !== Vt) && (s.stencilOp(lt, Pt, Vt), nt = lt, at = Pt, Et = Vt);
      },
      setLocked: function(lt) {
        M = lt;
      },
      setClear: function(lt) {
        bt !== lt && (s.clearStencil(lt), bt = lt);
      },
      reset: function() {
        M = !1, ie = null, de = null, Re = null, Te = null, nt = null, at = null, Et = null, bt = null;
      }
    };
  }
  const a = new i(), l = new r(), c = new o(), u = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap();
  let d = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), _ = [], f = null, p = !1, x = null, y = null, b = null, C = null, w = null, R = null, G = null, E = new Be(0, 0, 0), T = 0, z = !1, J = null, oe = null, L = null, I = null, U = null;
  const ee = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let O = !1, B = 0;
  const Q = s.getParameter(s.VERSION);
  Q.indexOf("WebGL") !== -1 ? (B = parseFloat(/^WebGL (\d)/.exec(Q)[1]), O = B >= 1) : Q.indexOf("OpenGL ES") !== -1 && (B = parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]), O = B >= 2);
  let H = null, W = {};
  const D = s.getParameter(s.SCISSOR_BOX), K = s.getParameter(s.VIEWPORT), re = new ut().fromArray(D), fe = new ut().fromArray(K);
  function me(M, ie, de, Re) {
    const Te = new Uint8Array(4), nt = s.createTexture();
    s.bindTexture(M, nt), s.texParameteri(M, s.TEXTURE_MIN_FILTER, s.NEAREST), s.texParameteri(M, s.TEXTURE_MAG_FILTER, s.NEAREST);
    for (let at = 0; at < de; at++)
      n && (M === s.TEXTURE_3D || M === s.TEXTURE_2D_ARRAY) ? s.texImage3D(ie, 0, s.RGBA, 1, 1, Re, 0, s.RGBA, s.UNSIGNED_BYTE, Te) : s.texImage2D(ie + at, 0, s.RGBA, 1, 1, 0, s.RGBA, s.UNSIGNED_BYTE, Te);
    return nt;
  }
  const ge = {};
  ge[s.TEXTURE_2D] = me(s.TEXTURE_2D, s.TEXTURE_2D, 1), ge[s.TEXTURE_CUBE_MAP] = me(s.TEXTURE_CUBE_MAP, s.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (ge[s.TEXTURE_2D_ARRAY] = me(s.TEXTURE_2D_ARRAY, s.TEXTURE_2D_ARRAY, 1, 1), ge[s.TEXTURE_3D] = me(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1)), a.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), le(s.DEPTH_TEST), l.setFunc(Zr), Pe(!1), A(bl), le(s.CULL_FACE), Ee(Qn);
  function le(M) {
    d[M] !== !0 && (s.enable(M), d[M] = !0);
  }
  function he(M) {
    d[M] !== !1 && (s.disable(M), d[M] = !1);
  }
  function be(M, ie) {
    return m[M] !== ie ? (s.bindFramebuffer(M, ie), m[M] = ie, n && (M === s.DRAW_FRAMEBUFFER && (m[s.FRAMEBUFFER] = ie), M === s.FRAMEBUFFER && (m[s.DRAW_FRAMEBUFFER] = ie)), !0) : !1;
  }
  function V(M, ie) {
    let de = _, Re = !1;
    if (M)
      if (de = g.get(ie), de === void 0 && (de = [], g.set(ie, de)), M.isWebGLMultipleRenderTargets) {
        const Te = M.texture;
        if (de.length !== Te.length || de[0] !== s.COLOR_ATTACHMENT0) {
          for (let nt = 0, at = Te.length; nt < at; nt++)
            de[nt] = s.COLOR_ATTACHMENT0 + nt;
          de.length = Te.length, Re = !0;
        }
      } else
        de[0] !== s.COLOR_ATTACHMENT0 && (de[0] = s.COLOR_ATTACHMENT0, Re = !0);
    else
      de[0] !== s.BACK && (de[0] = s.BACK, Re = !0);
    Re && (t.isWebGL2 ? s.drawBuffers(de) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de));
  }
  function ft(M) {
    return f !== M ? (s.useProgram(M), f = M, !0) : !1;
  }
  const Se = {
    [vi]: s.FUNC_ADD,
    [Gf]: s.FUNC_SUBTRACT,
    [Wf]: s.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    Se[Ll] = s.MIN, Se[Pl] = s.MAX;
  else {
    const M = e.get("EXT_blend_minmax");
    M !== null && (Se[Ll] = M.MIN_EXT, Se[Pl] = M.MAX_EXT);
  }
  const Ue = {
    [jf]: s.ZERO,
    [Xf]: s.ONE,
    [qf]: s.SRC_COLOR,
    [xa]: s.SRC_ALPHA,
    [Qf]: s.SRC_ALPHA_SATURATE,
    [Jf]: s.DST_COLOR,
    [Kf]: s.DST_ALPHA,
    [Yf]: s.ONE_MINUS_SRC_COLOR,
    [Ea]: s.ONE_MINUS_SRC_ALPHA,
    [Zf]: s.ONE_MINUS_DST_COLOR,
    [$f]: s.ONE_MINUS_DST_ALPHA,
    [ep]: s.CONSTANT_COLOR,
    [tp]: s.ONE_MINUS_CONSTANT_COLOR,
    [np]: s.CONSTANT_ALPHA,
    [ip]: s.ONE_MINUS_CONSTANT_ALPHA
  };
  function Ee(M, ie, de, Re, Te, nt, at, Et, bt, lt) {
    if (M === Qn) {
      p === !0 && (he(s.BLEND), p = !1);
      return;
    }
    if (p === !1 && (le(s.BLEND), p = !0), M !== Hf) {
      if (M !== x || lt !== z) {
        if ((y !== vi || w !== vi) && (s.blendEquation(s.FUNC_ADD), y = vi, w = vi), lt)
          switch (M) {
            case os:
              s.blendFuncSeparate(s.ONE, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
              break;
            case wl:
              s.blendFunc(s.ONE, s.ONE);
              break;
            case Rl:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case Cl:
              s.blendFuncSeparate(s.ZERO, s.SRC_COLOR, s.ZERO, s.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", M);
              break;
          }
        else
          switch (M) {
            case os:
              s.blendFuncSeparate(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
              break;
            case wl:
              s.blendFunc(s.SRC_ALPHA, s.ONE);
              break;
            case Rl:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case Cl:
              s.blendFunc(s.ZERO, s.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", M);
              break;
          }
        b = null, C = null, R = null, G = null, E.set(0, 0, 0), T = 0, x = M, z = lt;
      }
      return;
    }
    Te = Te || ie, nt = nt || de, at = at || Re, (ie !== y || Te !== w) && (s.blendEquationSeparate(Se[ie], Se[Te]), y = ie, w = Te), (de !== b || Re !== C || nt !== R || at !== G) && (s.blendFuncSeparate(Ue[de], Ue[Re], Ue[nt], Ue[at]), b = de, C = Re, R = nt, G = at), (Et.equals(E) === !1 || bt !== T) && (s.blendColor(Et.r, Et.g, Et.b, bt), E.copy(Et), T = bt), x = M, z = !1;
  }
  function ot(M, ie) {
    M.side === Mn ? he(s.CULL_FACE) : le(s.CULL_FACE);
    let de = M.side === $t;
    ie && (de = !de), Pe(de), M.blending === os && M.transparent === !1 ? Ee(Qn) : Ee(M.blending, M.blendEquation, M.blendSrc, M.blendDst, M.blendEquationAlpha, M.blendSrcAlpha, M.blendDstAlpha, M.blendColor, M.blendAlpha, M.premultipliedAlpha), l.setFunc(M.depthFunc), l.setTest(M.depthTest), l.setMask(M.depthWrite), a.setMask(M.colorWrite);
    const Re = M.stencilWrite;
    c.setTest(Re), Re && (c.setMask(M.stencilWriteMask), c.setFunc(M.stencilFunc, M.stencilRef, M.stencilFuncMask), c.setOp(M.stencilFail, M.stencilZFail, M.stencilZPass)), P(M.polygonOffset, M.polygonOffsetFactor, M.polygonOffsetUnits), M.alphaToCoverage === !0 ? le(s.SAMPLE_ALPHA_TO_COVERAGE) : he(s.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Pe(M) {
    J !== M && (M ? s.frontFace(s.CW) : s.frontFace(s.CCW), J = M);
  }
  function A(M) {
    M !== kf ? (le(s.CULL_FACE), M !== oe && (M === bl ? s.cullFace(s.BACK) : M === zf ? s.cullFace(s.FRONT) : s.cullFace(s.FRONT_AND_BACK))) : he(s.CULL_FACE), oe = M;
  }
  function v(M) {
    M !== L && (O && s.lineWidth(M), L = M);
  }
  function P(M, ie, de) {
    M ? (le(s.POLYGON_OFFSET_FILL), (I !== ie || U !== de) && (s.polygonOffset(ie, de), I = ie, U = de)) : he(s.POLYGON_OFFSET_FILL);
  }
  function q(M) {
    M ? le(s.SCISSOR_TEST) : he(s.SCISSOR_TEST);
  }
  function $(M) {
    M === void 0 && (M = s.TEXTURE0 + ee - 1), H !== M && (s.activeTexture(M), H = M);
  }
  function te(M, ie, de) {
    de === void 0 && (H === null ? de = s.TEXTURE0 + ee - 1 : de = H);
    let Re = W[de];
    Re === void 0 && (Re = { type: void 0, texture: void 0 }, W[de] = Re), (Re.type !== M || Re.texture !== ie) && (H !== de && (s.activeTexture(de), H = de), s.bindTexture(M, ie || ge[M]), Re.type = M, Re.texture = ie);
  }
  function ae() {
    const M = W[H];
    M !== void 0 && M.type !== void 0 && (s.bindTexture(M.type, null), M.type = void 0, M.texture = void 0);
  }
  function ne() {
    try {
      s.compressedTexImage2D.apply(s, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function ce() {
    try {
      s.compressedTexImage3D.apply(s, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function _e() {
    try {
      s.texSubImage2D.apply(s, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function Ce() {
    try {
      s.texSubImage3D.apply(s, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function se() {
    try {
      s.compressedTexSubImage2D.apply(s, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function Ze() {
    try {
      s.compressedTexSubImage3D.apply(s, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function Ve() {
    try {
      s.texStorage2D.apply(s, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function we() {
    try {
      s.texStorage3D.apply(s, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function Me() {
    try {
      s.texImage2D.apply(s, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function xe() {
    try {
      s.texImage3D.apply(s, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function Le(M) {
    re.equals(M) === !1 && (s.scissor(M.x, M.y, M.z, M.w), re.copy(M));
  }
  function et(M) {
    fe.equals(M) === !1 && (s.viewport(M.x, M.y, M.z, M.w), fe.copy(M));
  }
  function rt(M, ie) {
    let de = h.get(ie);
    de === void 0 && (de = /* @__PURE__ */ new WeakMap(), h.set(ie, de));
    let Re = de.get(M);
    Re === void 0 && (Re = s.getUniformBlockIndex(ie, M.name), de.set(M, Re));
  }
  function Oe(M, ie) {
    const Re = h.get(ie).get(M);
    u.get(ie) !== Re && (s.uniformBlockBinding(ie, Re, M.__bindingPointIndex), u.set(ie, Re));
  }
  function k() {
    s.disable(s.BLEND), s.disable(s.CULL_FACE), s.disable(s.DEPTH_TEST), s.disable(s.POLYGON_OFFSET_FILL), s.disable(s.SCISSOR_TEST), s.disable(s.STENCIL_TEST), s.disable(s.SAMPLE_ALPHA_TO_COVERAGE), s.blendEquation(s.FUNC_ADD), s.blendFunc(s.ONE, s.ZERO), s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO), s.blendColor(0, 0, 0, 0), s.colorMask(!0, !0, !0, !0), s.clearColor(0, 0, 0, 0), s.depthMask(!0), s.depthFunc(s.LESS), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(s.ALWAYS, 0, 4294967295), s.stencilOp(s.KEEP, s.KEEP, s.KEEP), s.clearStencil(0), s.cullFace(s.BACK), s.frontFace(s.CCW), s.polygonOffset(0, 0), s.activeTexture(s.TEXTURE0), s.bindFramebuffer(s.FRAMEBUFFER, null), n === !0 && (s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), s.bindFramebuffer(s.READ_FRAMEBUFFER, null)), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), d = {}, H = null, W = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), _ = [], f = null, p = !1, x = null, y = null, b = null, C = null, w = null, R = null, G = null, E = new Be(0, 0, 0), T = 0, z = !1, J = null, oe = null, L = null, I = null, U = null, re.set(0, 0, s.canvas.width, s.canvas.height), fe.set(0, 0, s.canvas.width, s.canvas.height), a.reset(), l.reset(), c.reset();
  }
  return {
    buffers: {
      color: a,
      depth: l,
      stencil: c
    },
    enable: le,
    disable: he,
    bindFramebuffer: be,
    drawBuffers: V,
    useProgram: ft,
    setBlending: Ee,
    setMaterial: ot,
    setFlipSided: Pe,
    setCullFace: A,
    setLineWidth: v,
    setPolygonOffset: P,
    setScissorTest: q,
    activeTexture: $,
    bindTexture: te,
    unbindTexture: ae,
    compressedTexImage2D: ne,
    compressedTexImage3D: ce,
    texImage2D: Me,
    texImage3D: xe,
    updateUBOMapping: rt,
    uniformBlockBinding: Oe,
    texStorage2D: Ve,
    texStorage3D: we,
    texSubImage2D: _e,
    texSubImage3D: Ce,
    compressedTexSubImage2D: se,
    compressedTexSubImage3D: Ze,
    scissor: Le,
    viewport: et,
    reset: k
  };
}
function ty(s, e, t, n, i, r, o) {
  const a = i.isWebGL2, l = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), u = /* @__PURE__ */ new WeakMap();
  let h;
  const d = /* @__PURE__ */ new WeakMap();
  let m = !1;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(A, v) {
    return m ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(A, v)
    ) : Js("canvas");
  }
  function _(A, v, P, q) {
    let $ = 1;
    if ((A.width > q || A.height > q) && ($ = q / Math.max(A.width, A.height)), $ < 1 || v === !0)
      if (typeof HTMLImageElement < "u" && A instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && A instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && A instanceof ImageBitmap) {
        const te = v ? ro : Math.floor, ae = te($ * A.width), ne = te($ * A.height);
        h === void 0 && (h = g(ae, ne));
        const ce = P ? g(ae, ne) : h;
        return ce.width = ae, ce.height = ne, ce.getContext("2d").drawImage(A, 0, 0, ae, ne), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + A.width + "x" + A.height + ") to (" + ae + "x" + ne + ")."), ce;
      } else
        return "data" in A && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + A.width + "x" + A.height + ")."), A;
    return A;
  }
  function f(A) {
    return Ra(A.width) && Ra(A.height);
  }
  function p(A) {
    return a ? !1 : A.wrapS !== on || A.wrapT !== on || A.minFilter !== Ct && A.minFilter !== qt;
  }
  function x(A, v) {
    return A.generateMipmaps && v && A.minFilter !== Ct && A.minFilter !== qt;
  }
  function y(A) {
    s.generateMipmap(A);
  }
  function b(A, v, P, q, $ = !1) {
    if (a === !1) return v;
    if (A !== null) {
      if (s[A] !== void 0) return s[A];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + A + "'");
    }
    let te = v;
    if (v === s.RED && (P === s.FLOAT && (te = s.R32F), P === s.HALF_FLOAT && (te = s.R16F), P === s.UNSIGNED_BYTE && (te = s.R8)), v === s.RED_INTEGER && (P === s.UNSIGNED_BYTE && (te = s.R8UI), P === s.UNSIGNED_SHORT && (te = s.R16UI), P === s.UNSIGNED_INT && (te = s.R32UI), P === s.BYTE && (te = s.R8I), P === s.SHORT && (te = s.R16I), P === s.INT && (te = s.R32I)), v === s.RG && (P === s.FLOAT && (te = s.RG32F), P === s.HALF_FLOAT && (te = s.RG16F), P === s.UNSIGNED_BYTE && (te = s.RG8)), v === s.RGBA) {
      const ae = $ ? to : st.getTransfer(q);
      P === s.FLOAT && (te = s.RGBA32F), P === s.HALF_FLOAT && (te = s.RGBA16F), P === s.UNSIGNED_BYTE && (te = ae === ht ? s.SRGB8_ALPHA8 : s.RGBA8), P === s.UNSIGNED_SHORT_4_4_4_4 && (te = s.RGBA4), P === s.UNSIGNED_SHORT_5_5_5_1 && (te = s.RGB5_A1);
    }
    return (te === s.R16F || te === s.R32F || te === s.RG16F || te === s.RG32F || te === s.RGBA16F || te === s.RGBA32F) && e.get("EXT_color_buffer_float"), te;
  }
  function C(A, v, P) {
    return x(A, P) === !0 || A.isFramebufferTexture && A.minFilter !== Ct && A.minFilter !== qt ? Math.log2(Math.max(v.width, v.height)) + 1 : A.mipmaps !== void 0 && A.mipmaps.length > 0 ? A.mipmaps.length : A.isCompressedTexture && Array.isArray(A.image) ? v.mipmaps.length : 1;
  }
  function w(A) {
    return A === Ct || A === Aa || A === qr ? s.NEAREST : s.LINEAR;
  }
  function R(A) {
    const v = A.target;
    v.removeEventListener("dispose", R), E(v), v.isVideoTexture && u.delete(v);
  }
  function G(A) {
    const v = A.target;
    v.removeEventListener("dispose", G), z(v);
  }
  function E(A) {
    const v = n.get(A);
    if (v.__webglInit === void 0) return;
    const P = A.source, q = d.get(P);
    if (q) {
      const $ = q[v.__cacheKey];
      $.usedTimes--, $.usedTimes === 0 && T(A), Object.keys(q).length === 0 && d.delete(P);
    }
    n.remove(A);
  }
  function T(A) {
    const v = n.get(A);
    s.deleteTexture(v.__webglTexture);
    const P = A.source, q = d.get(P);
    delete q[v.__cacheKey], o.memory.textures--;
  }
  function z(A) {
    const v = A.texture, P = n.get(A), q = n.get(v);
    if (q.__webglTexture !== void 0 && (s.deleteTexture(q.__webglTexture), o.memory.textures--), A.depthTexture && A.depthTexture.dispose(), A.isWebGLCubeRenderTarget)
      for (let $ = 0; $ < 6; $++) {
        if (Array.isArray(P.__webglFramebuffer[$]))
          for (let te = 0; te < P.__webglFramebuffer[$].length; te++) s.deleteFramebuffer(P.__webglFramebuffer[$][te]);
        else
          s.deleteFramebuffer(P.__webglFramebuffer[$]);
        P.__webglDepthbuffer && s.deleteRenderbuffer(P.__webglDepthbuffer[$]);
      }
    else {
      if (Array.isArray(P.__webglFramebuffer))
        for (let $ = 0; $ < P.__webglFramebuffer.length; $++) s.deleteFramebuffer(P.__webglFramebuffer[$]);
      else
        s.deleteFramebuffer(P.__webglFramebuffer);
      if (P.__webglDepthbuffer && s.deleteRenderbuffer(P.__webglDepthbuffer), P.__webglMultisampledFramebuffer && s.deleteFramebuffer(P.__webglMultisampledFramebuffer), P.__webglColorRenderbuffer)
        for (let $ = 0; $ < P.__webglColorRenderbuffer.length; $++)
          P.__webglColorRenderbuffer[$] && s.deleteRenderbuffer(P.__webglColorRenderbuffer[$]);
      P.__webglDepthRenderbuffer && s.deleteRenderbuffer(P.__webglDepthRenderbuffer);
    }
    if (A.isWebGLMultipleRenderTargets)
      for (let $ = 0, te = v.length; $ < te; $++) {
        const ae = n.get(v[$]);
        ae.__webglTexture && (s.deleteTexture(ae.__webglTexture), o.memory.textures--), n.remove(v[$]);
      }
    n.remove(v), n.remove(A);
  }
  let J = 0;
  function oe() {
    J = 0;
  }
  function L() {
    const A = J;
    return A >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + A + " texture units while this GPU supports only " + i.maxTextures), J += 1, A;
  }
  function I(A) {
    const v = [];
    return v.push(A.wrapS), v.push(A.wrapT), v.push(A.wrapR || 0), v.push(A.magFilter), v.push(A.minFilter), v.push(A.anisotropy), v.push(A.internalFormat), v.push(A.format), v.push(A.type), v.push(A.generateMipmaps), v.push(A.premultiplyAlpha), v.push(A.flipY), v.push(A.unpackAlignment), v.push(A.colorSpace), v.join();
  }
  function U(A, v) {
    const P = n.get(A);
    if (A.isVideoTexture && ot(A), A.isRenderTargetTexture === !1 && A.version > 0 && P.__version !== A.version) {
      const q = A.image;
      if (q === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (q.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        re(P, A, v);
        return;
      }
    }
    t.bindTexture(s.TEXTURE_2D, P.__webglTexture, s.TEXTURE0 + v);
  }
  function ee(A, v) {
    const P = n.get(A);
    if (A.version > 0 && P.__version !== A.version) {
      re(P, A, v);
      return;
    }
    t.bindTexture(s.TEXTURE_2D_ARRAY, P.__webglTexture, s.TEXTURE0 + v);
  }
  function O(A, v) {
    const P = n.get(A);
    if (A.version > 0 && P.__version !== A.version) {
      re(P, A, v);
      return;
    }
    t.bindTexture(s.TEXTURE_3D, P.__webglTexture, s.TEXTURE0 + v);
  }
  function B(A, v) {
    const P = n.get(A);
    if (A.version > 0 && P.__version !== A.version) {
      fe(P, A, v);
      return;
    }
    t.bindTexture(s.TEXTURE_CUBE_MAP, P.__webglTexture, s.TEXTURE0 + v);
  }
  const Q = {
    [ds]: s.REPEAT,
    [on]: s.CLAMP_TO_EDGE,
    [Qr]: s.MIRRORED_REPEAT
  }, H = {
    [Ct]: s.NEAREST,
    [Aa]: s.NEAREST_MIPMAP_NEAREST,
    [qr]: s.NEAREST_MIPMAP_LINEAR,
    [qt]: s.LINEAR,
    [nh]: s.LINEAR_MIPMAP_NEAREST,
    [Ci]: s.LINEAR_MIPMAP_LINEAR
  }, W = {
    [Np]: s.NEVER,
    [zp]: s.ALWAYS,
    [Op]: s.LESS,
    [fh]: s.LEQUAL,
    [Fp]: s.EQUAL,
    [kp]: s.GEQUAL,
    [Bp]: s.GREATER,
    [Vp]: s.NOTEQUAL
  };
  function D(A, v, P) {
    if (P ? (s.texParameteri(A, s.TEXTURE_WRAP_S, Q[v.wrapS]), s.texParameteri(A, s.TEXTURE_WRAP_T, Q[v.wrapT]), (A === s.TEXTURE_3D || A === s.TEXTURE_2D_ARRAY) && s.texParameteri(A, s.TEXTURE_WRAP_R, Q[v.wrapR]), s.texParameteri(A, s.TEXTURE_MAG_FILTER, H[v.magFilter]), s.texParameteri(A, s.TEXTURE_MIN_FILTER, H[v.minFilter])) : (s.texParameteri(A, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(A, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE), (A === s.TEXTURE_3D || A === s.TEXTURE_2D_ARRAY) && s.texParameteri(A, s.TEXTURE_WRAP_R, s.CLAMP_TO_EDGE), (v.wrapS !== on || v.wrapT !== on) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), s.texParameteri(A, s.TEXTURE_MAG_FILTER, w(v.magFilter)), s.texParameteri(A, s.TEXTURE_MIN_FILTER, w(v.minFilter)), v.minFilter !== Ct && v.minFilter !== qt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), v.compareFunction && (s.texParameteri(A, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE), s.texParameteri(A, s.TEXTURE_COMPARE_FUNC, W[v.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      const q = e.get("EXT_texture_filter_anisotropic");
      if (v.magFilter === Ct || v.minFilter !== qr && v.minFilter !== Ci || v.type === On && e.has("OES_texture_float_linear") === !1 || a === !1 && v.type === Ks && e.has("OES_texture_half_float_linear") === !1) return;
      (v.anisotropy > 1 || n.get(v).__currentAnisotropy) && (s.texParameterf(A, q.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, i.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy);
    }
  }
  function K(A, v) {
    let P = !1;
    A.__webglInit === void 0 && (A.__webglInit = !0, v.addEventListener("dispose", R));
    const q = v.source;
    let $ = d.get(q);
    $ === void 0 && ($ = {}, d.set(q, $));
    const te = I(v);
    if (te !== A.__cacheKey) {
      $[te] === void 0 && ($[te] = {
        texture: s.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, P = !0), $[te].usedTimes++;
      const ae = $[A.__cacheKey];
      ae !== void 0 && ($[A.__cacheKey].usedTimes--, ae.usedTimes === 0 && T(v)), A.__cacheKey = te, A.__webglTexture = $[te].texture;
    }
    return P;
  }
  function re(A, v, P) {
    let q = s.TEXTURE_2D;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (q = s.TEXTURE_2D_ARRAY), v.isData3DTexture && (q = s.TEXTURE_3D);
    const $ = K(A, v), te = v.source;
    t.bindTexture(q, A.__webglTexture, s.TEXTURE0 + P);
    const ae = n.get(te);
    if (te.version !== ae.__version || $ === !0) {
      t.activeTexture(s.TEXTURE0 + P);
      const ne = st.getPrimaries(st.workingColorSpace), ce = v.colorSpace === ln ? null : st.getPrimaries(v.colorSpace), _e = v.colorSpace === ln || ne === ce ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, v.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, v.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, _e);
      const Ce = p(v) && f(v.image) === !1;
      let se = _(v.image, Ce, !1, i.maxTextureSize);
      se = Pe(v, se);
      const Ze = f(se) || a, Ve = r.convert(v.format, v.colorSpace);
      let we = r.convert(v.type), Me = b(v.internalFormat, Ve, we, v.colorSpace, v.isVideoTexture);
      D(q, v, Ze);
      let xe;
      const Le = v.mipmaps, et = a && v.isVideoTexture !== !0 && Me !== ch, rt = ae.__version === void 0 || $ === !0, Oe = C(v, se, Ze);
      if (v.isDepthTexture)
        Me = s.DEPTH_COMPONENT, a ? v.type === On ? Me = s.DEPTH_COMPONENT32F : v.type === Jn ? Me = s.DEPTH_COMPONENT24 : v.type === Ti ? Me = s.DEPTH24_STENCIL8 : Me = s.DEPTH_COMPONENT16 : v.type === On && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), v.format === bi && Me === s.DEPTH_COMPONENT && v.type !== qa && v.type !== Jn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), v.type = Jn, we = r.convert(v.type)), v.format === fs && Me === s.DEPTH_COMPONENT && (Me = s.DEPTH_STENCIL, v.type !== Ti && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), v.type = Ti, we = r.convert(v.type))), rt && (et ? t.texStorage2D(s.TEXTURE_2D, 1, Me, se.width, se.height) : t.texImage2D(s.TEXTURE_2D, 0, Me, se.width, se.height, 0, Ve, we, null));
      else if (v.isDataTexture)
        if (Le.length > 0 && Ze) {
          et && rt && t.texStorage2D(s.TEXTURE_2D, Oe, Me, Le[0].width, Le[0].height);
          for (let k = 0, M = Le.length; k < M; k++)
            xe = Le[k], et ? t.texSubImage2D(s.TEXTURE_2D, k, 0, 0, xe.width, xe.height, Ve, we, xe.data) : t.texImage2D(s.TEXTURE_2D, k, Me, xe.width, xe.height, 0, Ve, we, xe.data);
          v.generateMipmaps = !1;
        } else
          et ? (rt && t.texStorage2D(s.TEXTURE_2D, Oe, Me, se.width, se.height), t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, se.width, se.height, Ve, we, se.data)) : t.texImage2D(s.TEXTURE_2D, 0, Me, se.width, se.height, 0, Ve, we, se.data);
      else if (v.isCompressedTexture)
        if (v.isCompressedArrayTexture) {
          et && rt && t.texStorage3D(s.TEXTURE_2D_ARRAY, Oe, Me, Le[0].width, Le[0].height, se.depth);
          for (let k = 0, M = Le.length; k < M; k++)
            xe = Le[k], v.format !== an ? Ve !== null ? et ? t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, k, 0, 0, 0, xe.width, xe.height, se.depth, Ve, xe.data, 0, 0) : t.compressedTexImage3D(s.TEXTURE_2D_ARRAY, k, Me, xe.width, xe.height, se.depth, 0, xe.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : et ? t.texSubImage3D(s.TEXTURE_2D_ARRAY, k, 0, 0, 0, xe.width, xe.height, se.depth, Ve, we, xe.data) : t.texImage3D(s.TEXTURE_2D_ARRAY, k, Me, xe.width, xe.height, se.depth, 0, Ve, we, xe.data);
        } else {
          et && rt && t.texStorage2D(s.TEXTURE_2D, Oe, Me, Le[0].width, Le[0].height);
          for (let k = 0, M = Le.length; k < M; k++)
            xe = Le[k], v.format !== an ? Ve !== null ? et ? t.compressedTexSubImage2D(s.TEXTURE_2D, k, 0, 0, xe.width, xe.height, Ve, xe.data) : t.compressedTexImage2D(s.TEXTURE_2D, k, Me, xe.width, xe.height, 0, xe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : et ? t.texSubImage2D(s.TEXTURE_2D, k, 0, 0, xe.width, xe.height, Ve, we, xe.data) : t.texImage2D(s.TEXTURE_2D, k, Me, xe.width, xe.height, 0, Ve, we, xe.data);
        }
      else if (v.isDataArrayTexture)
        et ? (rt && t.texStorage3D(s.TEXTURE_2D_ARRAY, Oe, Me, se.width, se.height, se.depth), t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, 0, se.width, se.height, se.depth, Ve, we, se.data)) : t.texImage3D(s.TEXTURE_2D_ARRAY, 0, Me, se.width, se.height, se.depth, 0, Ve, we, se.data);
      else if (v.isData3DTexture)
        et ? (rt && t.texStorage3D(s.TEXTURE_3D, Oe, Me, se.width, se.height, se.depth), t.texSubImage3D(s.TEXTURE_3D, 0, 0, 0, 0, se.width, se.height, se.depth, Ve, we, se.data)) : t.texImage3D(s.TEXTURE_3D, 0, Me, se.width, se.height, se.depth, 0, Ve, we, se.data);
      else if (v.isFramebufferTexture) {
        if (rt)
          if (et)
            t.texStorage2D(s.TEXTURE_2D, Oe, Me, se.width, se.height);
          else {
            let k = se.width, M = se.height;
            for (let ie = 0; ie < Oe; ie++)
              t.texImage2D(s.TEXTURE_2D, ie, Me, k, M, 0, Ve, we, null), k >>= 1, M >>= 1;
          }
      } else if (Le.length > 0 && Ze) {
        et && rt && t.texStorage2D(s.TEXTURE_2D, Oe, Me, Le[0].width, Le[0].height);
        for (let k = 0, M = Le.length; k < M; k++)
          xe = Le[k], et ? t.texSubImage2D(s.TEXTURE_2D, k, 0, 0, Ve, we, xe) : t.texImage2D(s.TEXTURE_2D, k, Me, Ve, we, xe);
        v.generateMipmaps = !1;
      } else
        et ? (rt && t.texStorage2D(s.TEXTURE_2D, Oe, Me, se.width, se.height), t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, Ve, we, se)) : t.texImage2D(s.TEXTURE_2D, 0, Me, Ve, we, se);
      x(v, Ze) && y(q), ae.__version = te.version, v.onUpdate && v.onUpdate(v);
    }
    A.__version = v.version;
  }
  function fe(A, v, P) {
    if (v.image.length !== 6) return;
    const q = K(A, v), $ = v.source;
    t.bindTexture(s.TEXTURE_CUBE_MAP, A.__webglTexture, s.TEXTURE0 + P);
    const te = n.get($);
    if ($.version !== te.__version || q === !0) {
      t.activeTexture(s.TEXTURE0 + P);
      const ae = st.getPrimaries(st.workingColorSpace), ne = v.colorSpace === ln ? null : st.getPrimaries(v.colorSpace), ce = v.colorSpace === ln || ae === ne ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, v.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, v.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, ce);
      const _e = v.isCompressedTexture || v.image[0].isCompressedTexture, Ce = v.image[0] && v.image[0].isDataTexture, se = [];
      for (let k = 0; k < 6; k++)
        !_e && !Ce ? se[k] = _(v.image[k], !1, !0, i.maxCubemapSize) : se[k] = Ce ? v.image[k].image : v.image[k], se[k] = Pe(v, se[k]);
      const Ze = se[0], Ve = f(Ze) || a, we = r.convert(v.format, v.colorSpace), Me = r.convert(v.type), xe = b(v.internalFormat, we, Me, v.colorSpace), Le = a && v.isVideoTexture !== !0, et = te.__version === void 0 || q === !0;
      let rt = C(v, Ze, Ve);
      D(s.TEXTURE_CUBE_MAP, v, Ve);
      let Oe;
      if (_e) {
        Le && et && t.texStorage2D(s.TEXTURE_CUBE_MAP, rt, xe, Ze.width, Ze.height);
        for (let k = 0; k < 6; k++) {
          Oe = se[k].mipmaps;
          for (let M = 0; M < Oe.length; M++) {
            const ie = Oe[M];
            v.format !== an ? we !== null ? Le ? t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + k, M, 0, 0, ie.width, ie.height, we, ie.data) : t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + k, M, xe, ie.width, ie.height, 0, ie.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Le ? t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + k, M, 0, 0, ie.width, ie.height, we, Me, ie.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + k, M, xe, ie.width, ie.height, 0, we, Me, ie.data);
          }
        }
      } else {
        Oe = v.mipmaps, Le && et && (Oe.length > 0 && rt++, t.texStorage2D(s.TEXTURE_CUBE_MAP, rt, xe, se[0].width, se[0].height));
        for (let k = 0; k < 6; k++)
          if (Ce) {
            Le ? t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + k, 0, 0, 0, se[k].width, se[k].height, we, Me, se[k].data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + k, 0, xe, se[k].width, se[k].height, 0, we, Me, se[k].data);
            for (let M = 0; M < Oe.length; M++) {
              const de = Oe[M].image[k].image;
              Le ? t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + k, M + 1, 0, 0, de.width, de.height, we, Me, de.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + k, M + 1, xe, de.width, de.height, 0, we, Me, de.data);
            }
          } else {
            Le ? t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + k, 0, 0, 0, we, Me, se[k]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + k, 0, xe, we, Me, se[k]);
            for (let M = 0; M < Oe.length; M++) {
              const ie = Oe[M];
              Le ? t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + k, M + 1, 0, 0, we, Me, ie.image[k]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + k, M + 1, xe, we, Me, ie.image[k]);
            }
          }
      }
      x(v, Ve) && y(s.TEXTURE_CUBE_MAP), te.__version = $.version, v.onUpdate && v.onUpdate(v);
    }
    A.__version = v.version;
  }
  function me(A, v, P, q, $, te) {
    const ae = r.convert(P.format, P.colorSpace), ne = r.convert(P.type), ce = b(P.internalFormat, ae, ne, P.colorSpace);
    if (!n.get(v).__hasExternalTextures) {
      const Ce = Math.max(1, v.width >> te), se = Math.max(1, v.height >> te);
      $ === s.TEXTURE_3D || $ === s.TEXTURE_2D_ARRAY ? t.texImage3D($, te, ce, Ce, se, v.depth, 0, ae, ne, null) : t.texImage2D($, te, ce, Ce, se, 0, ae, ne, null);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, A), Ee(v) ? l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, q, $, n.get(P).__webglTexture, 0, Ue(v)) : ($ === s.TEXTURE_2D || $ >= s.TEXTURE_CUBE_MAP_POSITIVE_X && $ <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s.framebufferTexture2D(s.FRAMEBUFFER, q, $, n.get(P).__webglTexture, te), t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function ge(A, v, P) {
    if (s.bindRenderbuffer(s.RENDERBUFFER, A), v.depthBuffer && !v.stencilBuffer) {
      let q = a === !0 ? s.DEPTH_COMPONENT24 : s.DEPTH_COMPONENT16;
      if (P || Ee(v)) {
        const $ = v.depthTexture;
        $ && $.isDepthTexture && ($.type === On ? q = s.DEPTH_COMPONENT32F : $.type === Jn && (q = s.DEPTH_COMPONENT24));
        const te = Ue(v);
        Ee(v) ? l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, te, q, v.width, v.height) : s.renderbufferStorageMultisample(s.RENDERBUFFER, te, q, v.width, v.height);
      } else
        s.renderbufferStorage(s.RENDERBUFFER, q, v.width, v.height);
      s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.RENDERBUFFER, A);
    } else if (v.depthBuffer && v.stencilBuffer) {
      const q = Ue(v);
      P && Ee(v) === !1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, q, s.DEPTH24_STENCIL8, v.width, v.height) : Ee(v) ? l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, q, s.DEPTH24_STENCIL8, v.width, v.height) : s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_STENCIL, v.width, v.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.RENDERBUFFER, A);
    } else {
      const q = v.isWebGLMultipleRenderTargets === !0 ? v.texture : [v.texture];
      for (let $ = 0; $ < q.length; $++) {
        const te = q[$], ae = r.convert(te.format, te.colorSpace), ne = r.convert(te.type), ce = b(te.internalFormat, ae, ne, te.colorSpace), _e = Ue(v);
        P && Ee(v) === !1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, _e, ce, v.width, v.height) : Ee(v) ? l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, _e, ce, v.width, v.height) : s.renderbufferStorage(s.RENDERBUFFER, ce, v.width, v.height);
      }
    }
    s.bindRenderbuffer(s.RENDERBUFFER, null);
  }
  function le(A, v) {
    if (v && v.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(s.FRAMEBUFFER, A), !(v.depthTexture && v.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(v.depthTexture).__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = !0), U(v.depthTexture, 0);
    const q = n.get(v.depthTexture).__webglTexture, $ = Ue(v);
    if (v.depthTexture.format === bi)
      Ee(v) ? l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, q, 0, $) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, q, 0);
    else if (v.depthTexture.format === fs)
      Ee(v) ? l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, q, 0, $) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, q, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function he(A) {
    const v = n.get(A), P = A.isWebGLCubeRenderTarget === !0;
    if (A.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (P) throw new Error("target.depthTexture not supported in Cube render targets");
      le(v.__webglFramebuffer, A);
    } else if (P) {
      v.__webglDepthbuffer = [];
      for (let q = 0; q < 6; q++)
        t.bindFramebuffer(s.FRAMEBUFFER, v.__webglFramebuffer[q]), v.__webglDepthbuffer[q] = s.createRenderbuffer(), ge(v.__webglDepthbuffer[q], A, !1);
    } else
      t.bindFramebuffer(s.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer = s.createRenderbuffer(), ge(v.__webglDepthbuffer, A, !1);
    t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function be(A, v, P) {
    const q = n.get(A);
    v !== void 0 && me(q.__webglFramebuffer, A, A.texture, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, 0), P !== void 0 && he(A);
  }
  function V(A) {
    const v = A.texture, P = n.get(A), q = n.get(v);
    A.addEventListener("dispose", G), A.isWebGLMultipleRenderTargets !== !0 && (q.__webglTexture === void 0 && (q.__webglTexture = s.createTexture()), q.__version = v.version, o.memory.textures++);
    const $ = A.isWebGLCubeRenderTarget === !0, te = A.isWebGLMultipleRenderTargets === !0, ae = f(A) || a;
    if ($) {
      P.__webglFramebuffer = [];
      for (let ne = 0; ne < 6; ne++)
        if (a && v.mipmaps && v.mipmaps.length > 0) {
          P.__webglFramebuffer[ne] = [];
          for (let ce = 0; ce < v.mipmaps.length; ce++)
            P.__webglFramebuffer[ne][ce] = s.createFramebuffer();
        } else
          P.__webglFramebuffer[ne] = s.createFramebuffer();
    } else {
      if (a && v.mipmaps && v.mipmaps.length > 0) {
        P.__webglFramebuffer = [];
        for (let ne = 0; ne < v.mipmaps.length; ne++)
          P.__webglFramebuffer[ne] = s.createFramebuffer();
      } else
        P.__webglFramebuffer = s.createFramebuffer();
      if (te)
        if (i.drawBuffers) {
          const ne = A.texture;
          for (let ce = 0, _e = ne.length; ce < _e; ce++) {
            const Ce = n.get(ne[ce]);
            Ce.__webglTexture === void 0 && (Ce.__webglTexture = s.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && A.samples > 0 && Ee(A) === !1) {
        const ne = te ? v : [v];
        P.__webglMultisampledFramebuffer = s.createFramebuffer(), P.__webglColorRenderbuffer = [], t.bindFramebuffer(s.FRAMEBUFFER, P.__webglMultisampledFramebuffer);
        for (let ce = 0; ce < ne.length; ce++) {
          const _e = ne[ce];
          P.__webglColorRenderbuffer[ce] = s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, P.__webglColorRenderbuffer[ce]);
          const Ce = r.convert(_e.format, _e.colorSpace), se = r.convert(_e.type), Ze = b(_e.internalFormat, Ce, se, _e.colorSpace, A.isXRRenderTarget === !0), Ve = Ue(A);
          s.renderbufferStorageMultisample(s.RENDERBUFFER, Ve, Ze, A.width, A.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ce, s.RENDERBUFFER, P.__webglColorRenderbuffer[ce]);
        }
        s.bindRenderbuffer(s.RENDERBUFFER, null), A.depthBuffer && (P.__webglDepthRenderbuffer = s.createRenderbuffer(), ge(P.__webglDepthRenderbuffer, A, !0)), t.bindFramebuffer(s.FRAMEBUFFER, null);
      }
    }
    if ($) {
      t.bindTexture(s.TEXTURE_CUBE_MAP, q.__webglTexture), D(s.TEXTURE_CUBE_MAP, v, ae);
      for (let ne = 0; ne < 6; ne++)
        if (a && v.mipmaps && v.mipmaps.length > 0)
          for (let ce = 0; ce < v.mipmaps.length; ce++)
            me(P.__webglFramebuffer[ne][ce], A, v, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + ne, ce);
        else
          me(P.__webglFramebuffer[ne], A, v, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + ne, 0);
      x(v, ae) && y(s.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (te) {
      const ne = A.texture;
      for (let ce = 0, _e = ne.length; ce < _e; ce++) {
        const Ce = ne[ce], se = n.get(Ce);
        t.bindTexture(s.TEXTURE_2D, se.__webglTexture), D(s.TEXTURE_2D, Ce, ae), me(P.__webglFramebuffer, A, Ce, s.COLOR_ATTACHMENT0 + ce, s.TEXTURE_2D, 0), x(Ce, ae) && y(s.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ne = s.TEXTURE_2D;
      if ((A.isWebGL3DRenderTarget || A.isWebGLArrayRenderTarget) && (a ? ne = A.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(ne, q.__webglTexture), D(ne, v, ae), a && v.mipmaps && v.mipmaps.length > 0)
        for (let ce = 0; ce < v.mipmaps.length; ce++)
          me(P.__webglFramebuffer[ce], A, v, s.COLOR_ATTACHMENT0, ne, ce);
      else
        me(P.__webglFramebuffer, A, v, s.COLOR_ATTACHMENT0, ne, 0);
      x(v, ae) && y(ne), t.unbindTexture();
    }
    A.depthBuffer && he(A);
  }
  function ft(A) {
    const v = f(A) || a, P = A.isWebGLMultipleRenderTargets === !0 ? A.texture : [A.texture];
    for (let q = 0, $ = P.length; q < $; q++) {
      const te = P[q];
      if (x(te, v)) {
        const ae = A.isWebGLCubeRenderTarget ? s.TEXTURE_CUBE_MAP : s.TEXTURE_2D, ne = n.get(te).__webglTexture;
        t.bindTexture(ae, ne), y(ae), t.unbindTexture();
      }
    }
  }
  function Se(A) {
    if (a && A.samples > 0 && Ee(A) === !1) {
      const v = A.isWebGLMultipleRenderTargets ? A.texture : [A.texture], P = A.width, q = A.height;
      let $ = s.COLOR_BUFFER_BIT;
      const te = [], ae = A.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, ne = n.get(A), ce = A.isWebGLMultipleRenderTargets === !0;
      if (ce)
        for (let _e = 0; _e < v.length; _e++)
          t.bindFramebuffer(s.FRAMEBUFFER, ne.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + _e, s.RENDERBUFFER, null), t.bindFramebuffer(s.FRAMEBUFFER, ne.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + _e, s.TEXTURE_2D, null, 0);
      t.bindFramebuffer(s.READ_FRAMEBUFFER, ne.__webglMultisampledFramebuffer), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, ne.__webglFramebuffer);
      for (let _e = 0; _e < v.length; _e++) {
        te.push(s.COLOR_ATTACHMENT0 + _e), A.depthBuffer && te.push(ae);
        const Ce = ne.__ignoreDepthValues !== void 0 ? ne.__ignoreDepthValues : !1;
        if (Ce === !1 && (A.depthBuffer && ($ |= s.DEPTH_BUFFER_BIT), A.stencilBuffer && ($ |= s.STENCIL_BUFFER_BIT)), ce && s.framebufferRenderbuffer(s.READ_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.RENDERBUFFER, ne.__webglColorRenderbuffer[_e]), Ce === !0 && (s.invalidateFramebuffer(s.READ_FRAMEBUFFER, [ae]), s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [ae])), ce) {
          const se = n.get(v[_e]).__webglTexture;
          s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, se, 0);
        }
        s.blitFramebuffer(0, 0, P, q, 0, 0, P, q, $, s.NEAREST), c && s.invalidateFramebuffer(s.READ_FRAMEBUFFER, te);
      }
      if (t.bindFramebuffer(s.READ_FRAMEBUFFER, null), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), ce)
        for (let _e = 0; _e < v.length; _e++) {
          t.bindFramebuffer(s.FRAMEBUFFER, ne.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + _e, s.RENDERBUFFER, ne.__webglColorRenderbuffer[_e]);
          const Ce = n.get(v[_e]).__webglTexture;
          t.bindFramebuffer(s.FRAMEBUFFER, ne.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + _e, s.TEXTURE_2D, Ce, 0);
        }
      t.bindFramebuffer(s.DRAW_FRAMEBUFFER, ne.__webglMultisampledFramebuffer);
    }
  }
  function Ue(A) {
    return Math.min(i.maxSamples, A.samples);
  }
  function Ee(A) {
    const v = n.get(A);
    return a && A.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && v.__useRenderToTexture !== !1;
  }
  function ot(A) {
    const v = o.render.frame;
    u.get(A) !== v && (u.set(A, v), A.update());
  }
  function Pe(A, v) {
    const P = A.colorSpace, q = A.format, $ = A.type;
    return A.isCompressedTexture === !0 || A.isVideoTexture === !0 || A.format === wa || P !== Lt && P !== ln && (st.getTransfer(P) === ht ? a === !1 ? e.has("EXT_sRGB") === !0 && q === an ? (A.format = wa, A.minFilter = qt, A.generateMipmaps = !1) : v = mh.sRGBToLinear(v) : (q !== an || $ !== ti) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", P)), v;
  }
  this.allocateTextureUnit = L, this.resetTextureUnits = oe, this.setTexture2D = U, this.setTexture2DArray = ee, this.setTexture3D = O, this.setTextureCube = B, this.rebindTextures = be, this.setupRenderTarget = V, this.updateRenderTargetMipmap = ft, this.updateMultisampleRenderTarget = Se, this.setupDepthRenderbuffer = he, this.setupFrameBufferTexture = me, this.useMultisampledRTT = Ee;
}
function ny(s, e, t) {
  const n = t.isWebGL2;
  function i(r, o = ln) {
    let a;
    const l = st.getTransfer(o);
    if (r === ti) return s.UNSIGNED_BYTE;
    if (r === sh) return s.UNSIGNED_SHORT_4_4_4_4;
    if (r === rh) return s.UNSIGNED_SHORT_5_5_5_1;
    if (r === yp) return s.BYTE;
    if (r === xp) return s.SHORT;
    if (r === qa) return s.UNSIGNED_SHORT;
    if (r === ih) return s.INT;
    if (r === Jn) return s.UNSIGNED_INT;
    if (r === On) return s.FLOAT;
    if (r === Ks)
      return n ? s.HALF_FLOAT : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (r === Ep) return s.ALPHA;
    if (r === an) return s.RGBA;
    if (r === Sp) return s.LUMINANCE;
    if (r === Mp) return s.LUMINANCE_ALPHA;
    if (r === bi) return s.DEPTH_COMPONENT;
    if (r === fs) return s.DEPTH_STENCIL;
    if (r === wa)
      return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (r === Ap) return s.RED;
    if (r === oh) return s.RED_INTEGER;
    if (r === Tp) return s.RG;
    if (r === ah) return s.RG_INTEGER;
    if (r === lh) return s.RGBA_INTEGER;
    if (r === Co || r === Lo || r === Po || r === Io)
      if (l === ht)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (r === Co) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (r === Lo) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (r === Po) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (r === Io) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (r === Co) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (r === Lo) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (r === Po) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (r === Io) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (r === Dl || r === Ul || r === Nl || r === Ol)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (r === Dl) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (r === Ul) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (r === Nl) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (r === Ol) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (r === ch)
      return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (r === Fl || r === Bl)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (r === Fl) return l === ht ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (r === Bl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (r === Vl || r === kl || r === zl || r === Hl || r === Gl || r === Wl || r === jl || r === Xl || r === ql || r === Yl || r === Kl || r === $l || r === Jl || r === Zl)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (r === Vl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (r === kl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (r === zl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (r === Hl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (r === Gl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (r === Wl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (r === jl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (r === Xl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (r === ql) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (r === Yl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (r === Kl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (r === $l) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (r === Jl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (r === Zl) return l === ht ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (r === Do || r === Ql || r === ec)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (r === Do) return l === ht ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (r === Ql) return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (r === ec) return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (r === bp || r === tc || r === nc || r === ic)
      if (a = e.get("EXT_texture_compression_rgtc"), a !== null) {
        if (r === Do) return a.COMPRESSED_RED_RGTC1_EXT;
        if (r === tc) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (r === nc) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (r === ic) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return r === Ti ? n ? s.UNSIGNED_INT_24_8 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : s[r] !== void 0 ? s[r] : null;
  }
  return { convert: i };
}
class iy extends Gt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Mi extends vt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const sy = { type: "move" };
class ia {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Mi(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Mi(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new N(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new N()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Mi(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new N(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new N()), this._grip;
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
      a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(sy)));
    }
    return a !== null && (a.visible = i !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = o !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Mi();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class ry extends Ui {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, r = 1, o = null, a = "local-floor", l = 1, c = null, u = null, h = null, d = null, m = null, g = null;
    const _ = t.getContextAttributes();
    let f = null, p = null;
    const x = [], y = [], b = new Je();
    let C = null;
    const w = new Gt();
    w.layers.enable(1), w.viewport = new ut();
    const R = new Gt();
    R.layers.enable(2), R.viewport = new ut();
    const G = [w, R], E = new iy();
    E.layers.enable(1), E.layers.enable(2);
    let T = null, z = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(D) {
      let K = x[D];
      return K === void 0 && (K = new ia(), x[D] = K), K.getTargetRaySpace();
    }, this.getControllerGrip = function(D) {
      let K = x[D];
      return K === void 0 && (K = new ia(), x[D] = K), K.getGripSpace();
    }, this.getHand = function(D) {
      let K = x[D];
      return K === void 0 && (K = new ia(), x[D] = K), K.getHandSpace();
    };
    function J(D) {
      const K = y.indexOf(D.inputSource);
      if (K === -1)
        return;
      const re = x[K];
      re !== void 0 && (re.update(D.inputSource, D.frame, c || o), re.dispatchEvent({ type: D.type, data: D.inputSource }));
    }
    function oe() {
      i.removeEventListener("select", J), i.removeEventListener("selectstart", J), i.removeEventListener("selectend", J), i.removeEventListener("squeeze", J), i.removeEventListener("squeezestart", J), i.removeEventListener("squeezeend", J), i.removeEventListener("end", oe), i.removeEventListener("inputsourceschange", L);
      for (let D = 0; D < x.length; D++) {
        const K = y[D];
        K !== null && (y[D] = null, x[D].disconnect(K));
      }
      T = null, z = null, e.setRenderTarget(f), m = null, d = null, h = null, i = null, p = null, W.stop(), n.isPresenting = !1, e.setPixelRatio(C), e.setSize(b.width, b.height, !1), n.dispatchEvent({ type: "sessionend" });
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
        if (f = e.getRenderTarget(), i.addEventListener("select", J), i.addEventListener("selectstart", J), i.addEventListener("selectend", J), i.addEventListener("squeeze", J), i.addEventListener("squeezestart", J), i.addEventListener("squeezeend", J), i.addEventListener("end", oe), i.addEventListener("inputsourceschange", L), _.xrCompatible !== !0 && await t.makeXRCompatible(), C = e.getPixelRatio(), e.getSize(b), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const K = {
            antialias: i.renderState.layers === void 0 ? _.antialias : !0,
            alpha: !0,
            depth: _.depth,
            stencil: _.stencil,
            framebufferScaleFactor: r
          };
          m = new XRWebGLLayer(i, t, K), i.updateRenderState({ baseLayer: m }), e.setPixelRatio(1), e.setSize(m.framebufferWidth, m.framebufferHeight, !1), p = new Li(
            m.framebufferWidth,
            m.framebufferHeight,
            {
              format: an,
              type: ti,
              colorSpace: e.outputColorSpace,
              stencilBuffer: _.stencil
            }
          );
        } else {
          let K = null, re = null, fe = null;
          _.depth && (fe = _.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, K = _.stencil ? fs : bi, re = _.stencil ? Ti : Jn);
          const me = {
            colorFormat: t.RGBA8,
            depthFormat: fe,
            scaleFactor: r
          };
          h = new XRWebGLBinding(i, t), d = h.createProjectionLayer(me), i.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), p = new Li(
            d.textureWidth,
            d.textureHeight,
            {
              format: an,
              type: ti,
              depthTexture: new bh(d.textureWidth, d.textureHeight, re, void 0, void 0, void 0, void 0, void 0, void 0, K),
              stencilBuffer: _.stencil,
              colorSpace: e.outputColorSpace,
              samples: _.antialias ? 4 : 0
            }
          );
          const ge = e.properties.get(p);
          ge.__ignoreDepthValues = d.ignoreDepthValues;
        }
        p.isXRRenderTarget = !0, this.setFoveation(l), c = null, o = await i.requestReferenceSpace(a), W.setContext(i), W.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    };
    function L(D) {
      for (let K = 0; K < D.removed.length; K++) {
        const re = D.removed[K], fe = y.indexOf(re);
        fe >= 0 && (y[fe] = null, x[fe].disconnect(re));
      }
      for (let K = 0; K < D.added.length; K++) {
        const re = D.added[K];
        let fe = y.indexOf(re);
        if (fe === -1) {
          for (let ge = 0; ge < x.length; ge++)
            if (ge >= y.length) {
              y.push(re), fe = ge;
              break;
            } else if (y[ge] === null) {
              y[ge] = re, fe = ge;
              break;
            }
          if (fe === -1) break;
        }
        const me = x[fe];
        me && me.connect(re);
      }
    }
    const I = new N(), U = new N();
    function ee(D, K, re) {
      I.setFromMatrixPosition(K.matrixWorld), U.setFromMatrixPosition(re.matrixWorld);
      const fe = I.distanceTo(U), me = K.projectionMatrix.elements, ge = re.projectionMatrix.elements, le = me[14] / (me[10] - 1), he = me[14] / (me[10] + 1), be = (me[9] + 1) / me[5], V = (me[9] - 1) / me[5], ft = (me[8] - 1) / me[0], Se = (ge[8] + 1) / ge[0], Ue = le * ft, Ee = le * Se, ot = fe / (-ft + Se), Pe = ot * -ft;
      K.matrixWorld.decompose(D.position, D.quaternion, D.scale), D.translateX(Pe), D.translateZ(ot), D.matrixWorld.compose(D.position, D.quaternion, D.scale), D.matrixWorldInverse.copy(D.matrixWorld).invert();
      const A = le + ot, v = he + ot, P = Ue - Pe, q = Ee + (fe - Pe), $ = be * he / v * A, te = V * he / v * A;
      D.projectionMatrix.makePerspective(P, q, $, te, A, v), D.projectionMatrixInverse.copy(D.projectionMatrix).invert();
    }
    function O(D, K) {
      K === null ? D.matrixWorld.copy(D.matrix) : D.matrixWorld.multiplyMatrices(K.matrixWorld, D.matrix), D.matrixWorldInverse.copy(D.matrixWorld).invert();
    }
    this.updateCamera = function(D) {
      if (i === null) return;
      E.near = R.near = w.near = D.near, E.far = R.far = w.far = D.far, (T !== E.near || z !== E.far) && (i.updateRenderState({
        depthNear: E.near,
        depthFar: E.far
      }), T = E.near, z = E.far);
      const K = D.parent, re = E.cameras;
      O(E, K);
      for (let fe = 0; fe < re.length; fe++)
        O(re[fe], K);
      re.length === 2 ? ee(E, w, R) : E.projectionMatrix.copy(w.projectionMatrix), B(D, E, K);
    };
    function B(D, K, re) {
      re === null ? D.matrix.copy(K.matrixWorld) : (D.matrix.copy(re.matrixWorld), D.matrix.invert(), D.matrix.multiply(K.matrixWorld)), D.matrix.decompose(D.position, D.quaternion, D.scale), D.updateMatrixWorld(!0), D.projectionMatrix.copy(K.projectionMatrix), D.projectionMatrixInverse.copy(K.projectionMatrixInverse), D.isPerspectiveCamera && (D.fov = ms * 2 * Math.atan(1 / D.projectionMatrix.elements[5]), D.zoom = 1);
    }
    this.getCamera = function() {
      return E;
    }, this.getFoveation = function() {
      if (!(d === null && m === null))
        return l;
    }, this.setFoveation = function(D) {
      l = D, d !== null && (d.fixedFoveation = D), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = D);
    };
    let Q = null;
    function H(D, K) {
      if (u = K.getViewerPose(c || o), g = K, u !== null) {
        const re = u.views;
        m !== null && (e.setRenderTargetFramebuffer(p, m.framebuffer), e.setRenderTarget(p));
        let fe = !1;
        re.length !== E.cameras.length && (E.cameras.length = 0, fe = !0);
        for (let me = 0; me < re.length; me++) {
          const ge = re[me];
          let le = null;
          if (m !== null)
            le = m.getViewport(ge);
          else {
            const be = h.getViewSubImage(d, ge);
            le = be.viewport, me === 0 && (e.setRenderTargetTextures(
              p,
              be.colorTexture,
              d.ignoreDepthValues ? void 0 : be.depthStencilTexture
            ), e.setRenderTarget(p));
          }
          let he = G[me];
          he === void 0 && (he = new Gt(), he.layers.enable(me), he.viewport = new ut(), G[me] = he), he.matrix.fromArray(ge.transform.matrix), he.matrix.decompose(he.position, he.quaternion, he.scale), he.projectionMatrix.fromArray(ge.projectionMatrix), he.projectionMatrixInverse.copy(he.projectionMatrix).invert(), he.viewport.set(le.x, le.y, le.width, le.height), me === 0 && (E.matrix.copy(he.matrix), E.matrix.decompose(E.position, E.quaternion, E.scale)), fe === !0 && E.cameras.push(he);
        }
      }
      for (let re = 0; re < x.length; re++) {
        const fe = y[re], me = x[re];
        fe !== null && me !== void 0 && me.update(fe, K, c || o);
      }
      Q && Q(D, K), K.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: K }), g = null;
    }
    const W = new Th();
    W.setAnimationLoop(H), this.setAnimationLoop = function(D) {
      Q = D;
    }, this.dispose = function() {
    };
  }
}
function oy(s, e) {
  function t(f, p) {
    f.matrixAutoUpdate === !0 && f.updateMatrix(), p.value.copy(f.matrix);
  }
  function n(f, p) {
    p.color.getRGB(f.fogColor.value, Sh(s)), p.isFog ? (f.fogNear.value = p.near, f.fogFar.value = p.far) : p.isFogExp2 && (f.fogDensity.value = p.density);
  }
  function i(f, p, x, y, b) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? r(f, p) : p.isMeshToonMaterial ? (r(f, p), h(f, p)) : p.isMeshPhongMaterial ? (r(f, p), u(f, p)) : p.isMeshStandardMaterial ? (r(f, p), d(f, p), p.isMeshPhysicalMaterial && m(f, p, b)) : p.isMeshMatcapMaterial ? (r(f, p), g(f, p)) : p.isMeshDepthMaterial ? r(f, p) : p.isMeshDistanceMaterial ? (r(f, p), _(f, p)) : p.isMeshNormalMaterial ? r(f, p) : p.isLineBasicMaterial ? (o(f, p), p.isLineDashedMaterial && a(f, p)) : p.isPointsMaterial ? l(f, p, x, y) : p.isSpriteMaterial ? c(f, p) : p.isShadowMaterial ? (f.color.value.copy(p.color), f.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function r(f, p) {
    f.opacity.value = p.opacity, p.color && f.diffuse.value.copy(p.color), p.emissive && f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (f.map.value = p.map, t(p.map, f.mapTransform)), p.alphaMap && (f.alphaMap.value = p.alphaMap, t(p.alphaMap, f.alphaMapTransform)), p.bumpMap && (f.bumpMap.value = p.bumpMap, t(p.bumpMap, f.bumpMapTransform), f.bumpScale.value = p.bumpScale, p.side === $t && (f.bumpScale.value *= -1)), p.normalMap && (f.normalMap.value = p.normalMap, t(p.normalMap, f.normalMapTransform), f.normalScale.value.copy(p.normalScale), p.side === $t && f.normalScale.value.negate()), p.displacementMap && (f.displacementMap.value = p.displacementMap, t(p.displacementMap, f.displacementMapTransform), f.displacementScale.value = p.displacementScale, f.displacementBias.value = p.displacementBias), p.emissiveMap && (f.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, f.emissiveMapTransform)), p.specularMap && (f.specularMap.value = p.specularMap, t(p.specularMap, f.specularMapTransform)), p.alphaTest > 0 && (f.alphaTest.value = p.alphaTest);
    const x = e.get(p).envMap;
    if (x && (f.envMap.value = x, f.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, f.reflectivity.value = p.reflectivity, f.ior.value = p.ior, f.refractionRatio.value = p.refractionRatio), p.lightMap) {
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
  function l(f, p, x, y) {
    f.diffuse.value.copy(p.color), f.opacity.value = p.opacity, f.size.value = p.size * x, f.scale.value = y * 0.5, p.map && (f.map.value = p.map, t(p.map, f.uvTransform)), p.alphaMap && (f.alphaMap.value = p.alphaMap, t(p.alphaMap, f.alphaMapTransform)), p.alphaTest > 0 && (f.alphaTest.value = p.alphaTest);
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
  function m(f, p, x) {
    f.ior.value = p.ior, p.sheen > 0 && (f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), f.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (f.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, f.sheenColorMapTransform)), p.sheenRoughnessMap && (f.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, f.sheenRoughnessMapTransform))), p.clearcoat > 0 && (f.clearcoat.value = p.clearcoat, f.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (f.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, f.clearcoatMapTransform)), p.clearcoatRoughnessMap && (f.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, f.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (f.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, f.clearcoatNormalMapTransform), f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === $t && f.clearcoatNormalScale.value.negate())), p.iridescence > 0 && (f.iridescence.value = p.iridescence, f.iridescenceIOR.value = p.iridescenceIOR, f.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], f.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (f.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, f.iridescenceMapTransform)), p.iridescenceThicknessMap && (f.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, f.iridescenceThicknessMapTransform))), p.transmission > 0 && (f.transmission.value = p.transmission, f.transmissionSamplerMap.value = x.texture, f.transmissionSamplerSize.value.set(x.width, x.height), p.transmissionMap && (f.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, f.transmissionMapTransform)), f.thickness.value = p.thickness, p.thicknessMap && (f.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, f.thicknessMapTransform)), f.attenuationDistance.value = p.attenuationDistance, f.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (f.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (f.anisotropyMap.value = p.anisotropyMap, t(p.anisotropyMap, f.anisotropyMapTransform))), f.specularIntensity.value = p.specularIntensity, f.specularColor.value.copy(p.specularColor), p.specularColorMap && (f.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, f.specularColorMapTransform)), p.specularIntensityMap && (f.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, f.specularIntensityMapTransform));
  }
  function g(f, p) {
    p.matcap && (f.matcap.value = p.matcap);
  }
  function _(f, p) {
    const x = e.get(p).light;
    f.referencePosition.value.setFromMatrixPosition(x.matrixWorld), f.nearDistance.value = x.shadow.camera.near, f.farDistance.value = x.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function ay(s, e, t, n) {
  let i = {}, r = {}, o = [];
  const a = t.isWebGL2 ? s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function l(x, y) {
    const b = y.program;
    n.uniformBlockBinding(x, b);
  }
  function c(x, y) {
    let b = i[x.id];
    b === void 0 && (g(x), b = u(x), i[x.id] = b, x.addEventListener("dispose", f));
    const C = y.program;
    n.updateUBOMapping(x, C);
    const w = e.render.frame;
    r[x.id] !== w && (d(x), r[x.id] = w);
  }
  function u(x) {
    const y = h();
    x.__bindingPointIndex = y;
    const b = s.createBuffer(), C = x.__size, w = x.usage;
    return s.bindBuffer(s.UNIFORM_BUFFER, b), s.bufferData(s.UNIFORM_BUFFER, C, w), s.bindBuffer(s.UNIFORM_BUFFER, null), s.bindBufferBase(s.UNIFORM_BUFFER, y, b), b;
  }
  function h() {
    for (let x = 0; x < a; x++)
      if (o.indexOf(x) === -1)
        return o.push(x), x;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(x) {
    const y = i[x.id], b = x.uniforms, C = x.__cache;
    s.bindBuffer(s.UNIFORM_BUFFER, y);
    for (let w = 0, R = b.length; w < R; w++) {
      const G = Array.isArray(b[w]) ? b[w] : [b[w]];
      for (let E = 0, T = G.length; E < T; E++) {
        const z = G[E];
        if (m(z, w, E, C) === !0) {
          const J = z.__offset, oe = Array.isArray(z.value) ? z.value : [z.value];
          let L = 0;
          for (let I = 0; I < oe.length; I++) {
            const U = oe[I], ee = _(U);
            typeof U == "number" || typeof U == "boolean" ? (z.__data[0] = U, s.bufferSubData(s.UNIFORM_BUFFER, J + L, z.__data)) : U.isMatrix3 ? (z.__data[0] = U.elements[0], z.__data[1] = U.elements[1], z.__data[2] = U.elements[2], z.__data[3] = 0, z.__data[4] = U.elements[3], z.__data[5] = U.elements[4], z.__data[6] = U.elements[5], z.__data[7] = 0, z.__data[8] = U.elements[6], z.__data[9] = U.elements[7], z.__data[10] = U.elements[8], z.__data[11] = 0) : (U.toArray(z.__data, L), L += ee.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          s.bufferSubData(s.UNIFORM_BUFFER, J, z.__data);
        }
      }
    }
    s.bindBuffer(s.UNIFORM_BUFFER, null);
  }
  function m(x, y, b, C) {
    const w = x.value, R = y + "_" + b;
    if (C[R] === void 0)
      return typeof w == "number" || typeof w == "boolean" ? C[R] = w : C[R] = w.clone(), !0;
    {
      const G = C[R];
      if (typeof w == "number" || typeof w == "boolean") {
        if (G !== w)
          return C[R] = w, !0;
      } else if (G.equals(w) === !1)
        return G.copy(w), !0;
    }
    return !1;
  }
  function g(x) {
    const y = x.uniforms;
    let b = 0;
    const C = 16;
    for (let R = 0, G = y.length; R < G; R++) {
      const E = Array.isArray(y[R]) ? y[R] : [y[R]];
      for (let T = 0, z = E.length; T < z; T++) {
        const J = E[T], oe = Array.isArray(J.value) ? J.value : [J.value];
        for (let L = 0, I = oe.length; L < I; L++) {
          const U = oe[L], ee = _(U), O = b % C;
          O !== 0 && C - O < ee.boundary && (b += C - O), J.__data = new Float32Array(ee.storage / Float32Array.BYTES_PER_ELEMENT), J.__offset = b, b += ee.storage;
        }
      }
    }
    const w = b % C;
    return w > 0 && (b += C - w), x.__size = b, x.__cache = {}, this;
  }
  function _(x) {
    const y = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof x == "number" || typeof x == "boolean" ? (y.boundary = 4, y.storage = 4) : x.isVector2 ? (y.boundary = 8, y.storage = 8) : x.isVector3 || x.isColor ? (y.boundary = 16, y.storage = 12) : x.isVector4 ? (y.boundary = 16, y.storage = 16) : x.isMatrix3 ? (y.boundary = 48, y.storage = 48) : x.isMatrix4 ? (y.boundary = 64, y.storage = 64) : x.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", x), y;
  }
  function f(x) {
    const y = x.target;
    y.removeEventListener("dispose", f);
    const b = o.indexOf(y.__bindingPointIndex);
    o.splice(b, 1), s.deleteBuffer(i[y.id]), delete i[y.id], delete r[y.id];
  }
  function p() {
    for (const x in i)
      s.deleteBuffer(i[x]);
    o = [], i = {}, r = {};
  }
  return {
    bind: l,
    update: c,
    dispose: p
  };
}
class Ih {
  constructor(e = {}) {
    const {
      canvas: t = im(),
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
    const p = [], x = [];
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
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = _t, this._useLegacyLights = !1, this.toneMapping = ei, this.toneMappingExposure = 1;
    const y = this;
    let b = !1, C = 0, w = 0, R = null, G = -1, E = null;
    const T = new ut(), z = new ut();
    let J = null;
    const oe = new Be(0);
    let L = 0, I = t.width, U = t.height, ee = 1, O = null, B = null;
    const Q = new ut(0, 0, I, U), H = new ut(0, 0, I, U);
    let W = !1;
    const D = new Ja();
    let K = !1, re = !1, fe = null;
    const me = new Ye(), ge = new Je(), le = new N(), he = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function be() {
      return R === null ? ee : 1;
    }
    let V = n;
    function ft(S, F) {
      for (let Y = 0; Y < S.length; Y++) {
        const Z = S[Y], j = t.getContext(Z, F);
        if (j !== null) return j;
      }
      return null;
    }
    try {
      const S = {
        alpha: !0,
        depth: i,
        stencil: r,
        antialias: a,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: h
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Xa}`), t.addEventListener("webglcontextlost", k, !1), t.addEventListener("webglcontextrestored", M, !1), t.addEventListener("webglcontextcreationerror", ie, !1), V === null) {
        const F = ["webgl2", "webgl", "experimental-webgl"];
        if (y.isWebGL1Renderer === !0 && F.shift(), V = ft(F, S), V === null)
          throw ft(F) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && V instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), V.getShaderPrecisionFormat === void 0 && (V.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (S) {
      throw console.error("THREE.WebGLRenderer: " + S.message), S;
    }
    let Se, Ue, Ee, ot, Pe, A, v, P, q, $, te, ae, ne, ce, _e, Ce, se, Ze, Ve, we, Me, xe, Le, et;
    function rt() {
      Se = new _v(V), Ue = new hv(V, Se, e), Se.init(Ue), xe = new ny(V, Se, Ue), Ee = new ey(V, Se, Ue), ot = new xv(V), Pe = new k0(), A = new ty(V, Se, Ee, Pe, Ue, xe, ot), v = new fv(y), P = new gv(y), q = new Rm(V, Ue), Le = new cv(V, Se, q, Ue), $ = new vv(V, q, ot, Le), te = new Av(V, $, q, ot), Ve = new Mv(V, Ue, A), Ce = new dv(Pe), ae = new V0(y, v, P, Se, Ue, Le, Ce), ne = new oy(y, Pe), ce = new H0(), _e = new Y0(Se, Ue), Ze = new lv(y, v, P, Ee, te, d, l), se = new Q0(y, te, Ue), et = new ay(V, ot, Ue, Ee), we = new uv(V, Se, ot, Ue), Me = new yv(V, Se, ot, Ue), ot.programs = ae.programs, y.capabilities = Ue, y.extensions = Se, y.properties = Pe, y.renderLists = ce, y.shadowMap = se, y.state = Ee, y.info = ot;
    }
    rt();
    const Oe = new ry(y, V);
    this.xr = Oe, this.getContext = function() {
      return V;
    }, this.getContextAttributes = function() {
      return V.getContextAttributes();
    }, this.forceContextLoss = function() {
      const S = Se.get("WEBGL_lose_context");
      S && S.loseContext();
    }, this.forceContextRestore = function() {
      const S = Se.get("WEBGL_lose_context");
      S && S.restoreContext();
    }, this.getPixelRatio = function() {
      return ee;
    }, this.setPixelRatio = function(S) {
      S !== void 0 && (ee = S, this.setSize(I, U, !1));
    }, this.getSize = function(S) {
      return S.set(I, U);
    }, this.setSize = function(S, F, Y = !0) {
      if (Oe.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      I = S, U = F, t.width = Math.floor(S * ee), t.height = Math.floor(F * ee), Y === !0 && (t.style.width = S + "px", t.style.height = F + "px"), this.setViewport(0, 0, S, F);
    }, this.getDrawingBufferSize = function(S) {
      return S.set(I * ee, U * ee).floor();
    }, this.setDrawingBufferSize = function(S, F, Y) {
      I = S, U = F, ee = Y, t.width = Math.floor(S * Y), t.height = Math.floor(F * Y), this.setViewport(0, 0, S, F);
    }, this.getCurrentViewport = function(S) {
      return S.copy(T);
    }, this.getViewport = function(S) {
      return S.copy(Q);
    }, this.setViewport = function(S, F, Y, Z) {
      S.isVector4 ? Q.set(S.x, S.y, S.z, S.w) : Q.set(S, F, Y, Z), Ee.viewport(T.copy(Q).multiplyScalar(ee).floor());
    }, this.getScissor = function(S) {
      return S.copy(H);
    }, this.setScissor = function(S, F, Y, Z) {
      S.isVector4 ? H.set(S.x, S.y, S.z, S.w) : H.set(S, F, Y, Z), Ee.scissor(z.copy(H).multiplyScalar(ee).floor());
    }, this.getScissorTest = function() {
      return W;
    }, this.setScissorTest = function(S) {
      Ee.setScissorTest(W = S);
    }, this.setOpaqueSort = function(S) {
      O = S;
    }, this.setTransparentSort = function(S) {
      B = S;
    }, this.getClearColor = function(S) {
      return S.copy(Ze.getClearColor());
    }, this.setClearColor = function() {
      Ze.setClearColor.apply(Ze, arguments);
    }, this.getClearAlpha = function() {
      return Ze.getClearAlpha();
    }, this.setClearAlpha = function() {
      Ze.setClearAlpha.apply(Ze, arguments);
    }, this.clear = function(S = !0, F = !0, Y = !0) {
      let Z = 0;
      if (S) {
        let j = !1;
        if (R !== null) {
          const ye = R.texture.format;
          j = ye === lh || ye === ah || ye === oh;
        }
        if (j) {
          const ye = R.texture.type, Ae = ye === ti || ye === Jn || ye === qa || ye === Ti || ye === sh || ye === rh, Ie = Ze.getClearColor(), Fe = Ze.getClearAlpha(), je = Ie.r, ke = Ie.g, He = Ie.b;
          Ae ? (m[0] = je, m[1] = ke, m[2] = He, m[3] = Fe, V.clearBufferuiv(V.COLOR, 0, m)) : (g[0] = je, g[1] = ke, g[2] = He, g[3] = Fe, V.clearBufferiv(V.COLOR, 0, g));
        } else
          Z |= V.COLOR_BUFFER_BIT;
      }
      F && (Z |= V.DEPTH_BUFFER_BIT), Y && (Z |= V.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), V.clear(Z);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", k, !1), t.removeEventListener("webglcontextrestored", M, !1), t.removeEventListener("webglcontextcreationerror", ie, !1), ce.dispose(), _e.dispose(), Pe.dispose(), v.dispose(), P.dispose(), te.dispose(), Le.dispose(), et.dispose(), ae.dispose(), Oe.dispose(), Oe.removeEventListener("sessionstart", bt), Oe.removeEventListener("sessionend", lt), fe && (fe.dispose(), fe = null), Pt.stop();
    };
    function k(S) {
      S.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), b = !0;
    }
    function M() {
      console.log("THREE.WebGLRenderer: Context Restored."), b = !1;
      const S = ot.autoReset, F = se.enabled, Y = se.autoUpdate, Z = se.needsUpdate, j = se.type;
      rt(), ot.autoReset = S, se.enabled = F, se.autoUpdate = Y, se.needsUpdate = Z, se.type = j;
    }
    function ie(S) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", S.statusMessage);
    }
    function de(S) {
      const F = S.target;
      F.removeEventListener("dispose", de), Re(F);
    }
    function Re(S) {
      Te(S), Pe.remove(S);
    }
    function Te(S) {
      const F = Pe.get(S).programs;
      F !== void 0 && (F.forEach(function(Y) {
        ae.releaseProgram(Y);
      }), S.isShaderMaterial && ae.releaseShaderCache(S));
    }
    this.renderBufferDirect = function(S, F, Y, Z, j, ye) {
      F === null && (F = he);
      const Ae = j.isMesh && j.matrixWorld.determinant() < 0, Ie = ar(S, F, Y, Z, j);
      Ee.setMaterial(Z, Ae);
      let Fe = Y.index, je = 1;
      if (Z.wireframe === !0) {
        if (Fe = $.getWireframeAttribute(Y), Fe === void 0) return;
        je = 2;
      }
      const ke = Y.drawRange, He = Y.attributes.position;
      let St = ke.start * je, Jt = (ke.start + ke.count) * je;
      ye !== null && (St = Math.max(St, ye.start * je), Jt = Math.min(Jt, (ye.start + ye.count) * je)), Fe !== null ? (St = Math.max(St, 0), Jt = Math.min(Jt, Fe.count)) : He != null && (St = Math.max(St, 0), Jt = Math.min(Jt, He.count));
      const wt = Jt - St;
      if (wt < 0 || wt === 1 / 0) return;
      Le.setup(j, Z, Ie, Y, Fe);
      let Rn, mt = we;
      if (Fe !== null && (Rn = q.get(Fe), mt = Me, mt.setIndex(Rn)), j.isMesh)
        Z.wireframe === !0 ? (Ee.setLineWidth(Z.wireframeLinewidth * be()), mt.setMode(V.LINES)) : mt.setMode(V.TRIANGLES);
      else if (j.isLine) {
        let Xe = Z.linewidth;
        Xe === void 0 && (Xe = 1), Ee.setLineWidth(Xe * be()), j.isLineSegments ? mt.setMode(V.LINES) : j.isLineLoop ? mt.setMode(V.LINE_LOOP) : mt.setMode(V.LINE_STRIP);
      } else j.isPoints ? mt.setMode(V.POINTS) : j.isSprite && mt.setMode(V.TRIANGLES);
      if (j.isBatchedMesh)
        mt.renderMultiDraw(j._multiDrawStarts, j._multiDrawCounts, j._multiDrawCount);
      else if (j.isInstancedMesh)
        mt.renderInstances(St, wt, j.count);
      else if (Y.isInstancedBufferGeometry) {
        const Xe = Y._maxInstanceCount !== void 0 ? Y._maxInstanceCount : 1 / 0, Eo = Math.min(Y.instanceCount, Xe);
        mt.renderInstances(St, wt, Eo);
      } else
        mt.render(St, wt);
    };
    function nt(S, F, Y) {
      S.transparent === !0 && S.side === Mn && S.forceSinglePass === !1 ? (S.side = $t, S.needsUpdate = !0, ii(S, F, Y), S.side = Bn, S.needsUpdate = !0, ii(S, F, Y), S.side = Mn) : ii(S, F, Y);
    }
    this.compile = function(S, F, Y = null) {
      Y === null && (Y = S), f = _e.get(Y), f.init(), x.push(f), Y.traverseVisible(function(j) {
        j.isLight && j.layers.test(F.layers) && (f.pushLight(j), j.castShadow && f.pushShadow(j));
      }), S !== Y && S.traverseVisible(function(j) {
        j.isLight && j.layers.test(F.layers) && (f.pushLight(j), j.castShadow && f.pushShadow(j));
      }), f.setupLights(y._useLegacyLights);
      const Z = /* @__PURE__ */ new Set();
      return S.traverse(function(j) {
        const ye = j.material;
        if (ye)
          if (Array.isArray(ye))
            for (let Ae = 0; Ae < ye.length; Ae++) {
              const Ie = ye[Ae];
              nt(Ie, Y, j), Z.add(Ie);
            }
          else
            nt(ye, Y, j), Z.add(ye);
      }), x.pop(), f = null, Z;
    }, this.compileAsync = function(S, F, Y = null) {
      const Z = this.compile(S, F, Y);
      return new Promise((j) => {
        function ye() {
          if (Z.forEach(function(Ae) {
            Pe.get(Ae).currentProgram.isReady() && Z.delete(Ae);
          }), Z.size === 0) {
            j(S);
            return;
          }
          setTimeout(ye, 10);
        }
        Se.get("KHR_parallel_shader_compile") !== null ? ye() : setTimeout(ye, 10);
      });
    };
    let at = null;
    function Et(S) {
      at && at(S);
    }
    function bt() {
      Pt.stop();
    }
    function lt() {
      Pt.start();
    }
    const Pt = new Th();
    Pt.setAnimationLoop(Et), typeof self < "u" && Pt.setContext(self), this.setAnimationLoop = function(S) {
      at = S, Oe.setAnimationLoop(S), S === null ? Pt.stop() : Pt.start();
    }, Oe.addEventListener("sessionstart", bt), Oe.addEventListener("sessionend", lt), this.render = function(S, F) {
      if (F !== void 0 && F.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (b === !0) return;
      S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(), F.parent === null && F.matrixWorldAutoUpdate === !0 && F.updateMatrixWorld(), Oe.enabled === !0 && Oe.isPresenting === !0 && (Oe.cameraAutoUpdate === !0 && Oe.updateCamera(F), F = Oe.getCamera()), S.isScene === !0 && S.onBeforeRender(y, S, F, R), f = _e.get(S, x.length), f.init(), x.push(f), me.multiplyMatrices(F.projectionMatrix, F.matrixWorldInverse), D.setFromProjectionMatrix(me), re = this.localClippingEnabled, K = Ce.init(this.clippingPlanes, re), _ = ce.get(S, p.length), _.init(), p.push(_), Vt(S, F, 0, y.sortObjects), _.finish(), y.sortObjects === !0 && _.sort(O, B), this.info.render.frame++, K === !0 && Ce.beginShadows();
      const Y = f.state.shadowsArray;
      if (se.render(Y, S, F), K === !0 && Ce.endShadows(), this.info.autoReset === !0 && this.info.reset(), Ze.render(_, S), f.setupLights(y._useLegacyLights), F.isArrayCamera) {
        const Z = F.cameras;
        for (let j = 0, ye = Z.length; j < ye; j++) {
          const Ae = Z[j];
          Ts(_, S, Ae, Ae.viewport);
        }
      } else
        Ts(_, S, F);
      R !== null && (A.updateMultisampleRenderTarget(R), A.updateRenderTargetMipmap(R)), S.isScene === !0 && S.onAfterRender(y, S, F), Le.resetDefaultState(), G = -1, E = null, x.pop(), x.length > 0 ? f = x[x.length - 1] : f = null, p.pop(), p.length > 0 ? _ = p[p.length - 1] : _ = null;
    };
    function Vt(S, F, Y, Z) {
      if (S.visible === !1) return;
      if (S.layers.test(F.layers)) {
        if (S.isGroup)
          Y = S.renderOrder;
        else if (S.isLOD)
          S.autoUpdate === !0 && S.update(F);
        else if (S.isLight)
          f.pushLight(S), S.castShadow && f.pushShadow(S);
        else if (S.isSprite) {
          if (!S.frustumCulled || D.intersectsSprite(S)) {
            Z && le.setFromMatrixPosition(S.matrixWorld).applyMatrix4(me);
            const Ae = te.update(S), Ie = S.material;
            Ie.visible && _.push(S, Ae, Ie, Y, le.z, null);
          }
        } else if ((S.isMesh || S.isLine || S.isPoints) && (!S.frustumCulled || D.intersectsObject(S))) {
          const Ae = te.update(S), Ie = S.material;
          if (Z && (S.boundingSphere !== void 0 ? (S.boundingSphere === null && S.computeBoundingSphere(), le.copy(S.boundingSphere.center)) : (Ae.boundingSphere === null && Ae.computeBoundingSphere(), le.copy(Ae.boundingSphere.center)), le.applyMatrix4(S.matrixWorld).applyMatrix4(me)), Array.isArray(Ie)) {
            const Fe = Ae.groups;
            for (let je = 0, ke = Fe.length; je < ke; je++) {
              const He = Fe[je], St = Ie[He.materialIndex];
              St && St.visible && _.push(S, Ae, St, Y, le.z, He);
            }
          } else Ie.visible && _.push(S, Ae, Ie, Y, le.z, null);
        }
      }
      const ye = S.children;
      for (let Ae = 0, Ie = ye.length; Ae < Ie; Ae++)
        Vt(ye[Ae], F, Y, Z);
    }
    function Ts(S, F, Y, Z) {
      const j = S.opaque, ye = S.transmissive, Ae = S.transparent;
      f.setupLightsView(Y), K === !0 && Ce.setGlobalState(y.clippingPlanes, Y), ye.length > 0 && bs(j, ye, F, Y), Z && Ee.viewport(T.copy(Z)), j.length > 0 && ni(j, F, Y), ye.length > 0 && ni(ye, F, Y), Ae.length > 0 && ni(Ae, F, Y), Ee.buffers.depth.setTest(!0), Ee.buffers.depth.setMask(!0), Ee.buffers.color.setMask(!0), Ee.setPolygonOffset(!1);
    }
    function bs(S, F, Y, Z) {
      if ((Y.isScene === !0 ? Y.overrideMaterial : null) !== null)
        return;
      const ye = Ue.isWebGL2;
      fe === null && (fe = new Li(1, 1, {
        generateMipmaps: !0,
        type: Se.has("EXT_color_buffer_half_float") ? Ks : ti,
        minFilter: Ci,
        samples: ye ? 4 : 0
      })), y.getDrawingBufferSize(ge), ye ? fe.setSize(ge.x, ge.y) : fe.setSize(ro(ge.x), ro(ge.y));
      const Ae = y.getRenderTarget();
      y.setRenderTarget(fe), y.getClearColor(oe), L = y.getClearAlpha(), L < 1 && y.setClearColor(16777215, 0.5), y.clear();
      const Ie = y.toneMapping;
      y.toneMapping = ei, ni(S, Y, Z), A.updateMultisampleRenderTarget(fe), A.updateRenderTargetMipmap(fe);
      let Fe = !1;
      for (let je = 0, ke = F.length; je < ke; je++) {
        const He = F[je], St = He.object, Jt = He.geometry, wt = He.material, Rn = He.group;
        if (wt.side === Mn && St.layers.test(Z.layers)) {
          const mt = wt.side;
          wt.side = $t, wt.needsUpdate = !0, Ni(St, Y, Z, Jt, wt, Rn), wt.side = mt, wt.needsUpdate = !0, Fe = !0;
        }
      }
      Fe === !0 && (A.updateMultisampleRenderTarget(fe), A.updateRenderTargetMipmap(fe)), y.setRenderTarget(Ae), y.setClearColor(oe, L), y.toneMapping = Ie;
    }
    function ni(S, F, Y) {
      const Z = F.isScene === !0 ? F.overrideMaterial : null;
      for (let j = 0, ye = S.length; j < ye; j++) {
        const Ae = S[j], Ie = Ae.object, Fe = Ae.geometry, je = Z === null ? Ae.material : Z, ke = Ae.group;
        Ie.layers.test(Y.layers) && Ni(Ie, F, Y, Fe, je, ke);
      }
    }
    function Ni(S, F, Y, Z, j, ye) {
      S.onBeforeRender(y, F, Y, Z, j, ye), S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse, S.matrixWorld), S.normalMatrix.getNormalMatrix(S.modelViewMatrix), j.onBeforeRender(y, F, Y, Z, S, ye), j.transparent === !0 && j.side === Mn && j.forceSinglePass === !1 ? (j.side = $t, j.needsUpdate = !0, y.renderBufferDirect(Y, F, Z, j, S, ye), j.side = Bn, j.needsUpdate = !0, y.renderBufferDirect(Y, F, Z, j, S, ye), j.side = Mn) : y.renderBufferDirect(Y, F, Z, j, S, ye), S.onAfterRender(y, F, Y, Z, j, ye);
    }
    function ii(S, F, Y) {
      F.isScene !== !0 && (F = he);
      const Z = Pe.get(S), j = f.state.lights, ye = f.state.shadowsArray, Ae = j.state.version, Ie = ae.getParameters(S, j.state, ye, F, Y), Fe = ae.getProgramCacheKey(Ie);
      let je = Z.programs;
      Z.environment = S.isMeshStandardMaterial ? F.environment : null, Z.fog = F.fog, Z.envMap = (S.isMeshStandardMaterial ? P : v).get(S.envMap || Z.environment), je === void 0 && (S.addEventListener("dispose", de), je = /* @__PURE__ */ new Map(), Z.programs = je);
      let ke = je.get(Fe);
      if (ke !== void 0) {
        if (Z.currentProgram === ke && Z.lightsStateVersion === Ae)
          return Oi(S, Ie), ke;
      } else
        Ie.uniforms = ae.getUniforms(S), S.onBuild(Y, Ie, y), S.onBeforeCompile(Ie, y), ke = ae.acquireProgram(Ie, Fe), je.set(Fe, ke), Z.uniforms = Ie.uniforms;
      const He = Z.uniforms;
      return (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === !0) && (He.clippingPlanes = Ce.uniform), Oi(S, Ie), Z.needsLights = pt(S), Z.lightsStateVersion = Ae, Z.needsLights && (He.ambientLightColor.value = j.state.ambient, He.lightProbe.value = j.state.probe, He.directionalLights.value = j.state.directional, He.directionalLightShadows.value = j.state.directionalShadow, He.spotLights.value = j.state.spot, He.spotLightShadows.value = j.state.spotShadow, He.rectAreaLights.value = j.state.rectArea, He.ltc_1.value = j.state.rectAreaLTC1, He.ltc_2.value = j.state.rectAreaLTC2, He.pointLights.value = j.state.point, He.pointLightShadows.value = j.state.pointShadow, He.hemisphereLights.value = j.state.hemi, He.directionalShadowMap.value = j.state.directionalShadowMap, He.directionalShadowMatrix.value = j.state.directionalShadowMatrix, He.spotShadowMap.value = j.state.spotShadowMap, He.spotLightMatrix.value = j.state.spotLightMatrix, He.spotLightMap.value = j.state.spotLightMap, He.pointShadowMap.value = j.state.pointShadowMap, He.pointShadowMatrix.value = j.state.pointShadowMatrix), Z.currentProgram = ke, Z.uniformsList = null, ke;
    }
    function or(S) {
      if (S.uniformsList === null) {
        const F = S.currentProgram.getUniforms();
        S.uniformsList = Yr.seqWithValue(F.seq, S.uniforms);
      }
      return S.uniformsList;
    }
    function Oi(S, F) {
      const Y = Pe.get(S);
      Y.outputColorSpace = F.outputColorSpace, Y.batching = F.batching, Y.instancing = F.instancing, Y.instancingColor = F.instancingColor, Y.skinning = F.skinning, Y.morphTargets = F.morphTargets, Y.morphNormals = F.morphNormals, Y.morphColors = F.morphColors, Y.morphTargetsCount = F.morphTargetsCount, Y.numClippingPlanes = F.numClippingPlanes, Y.numIntersection = F.numClipIntersection, Y.vertexAlphas = F.vertexAlphas, Y.vertexTangents = F.vertexTangents, Y.toneMapping = F.toneMapping;
    }
    function ar(S, F, Y, Z, j) {
      F.isScene !== !0 && (F = he), A.resetTextureUnits();
      const ye = F.fog, Ae = Z.isMeshStandardMaterial ? F.environment : null, Ie = R === null ? y.outputColorSpace : R.isXRRenderTarget === !0 ? R.texture.colorSpace : Lt, Fe = (Z.isMeshStandardMaterial ? P : v).get(Z.envMap || Ae), je = Z.vertexColors === !0 && !!Y.attributes.color && Y.attributes.color.itemSize === 4, ke = !!Y.attributes.tangent && (!!Z.normalMap || Z.anisotropy > 0), He = !!Y.morphAttributes.position, St = !!Y.morphAttributes.normal, Jt = !!Y.morphAttributes.color;
      let wt = ei;
      Z.toneMapped && (R === null || R.isXRRenderTarget === !0) && (wt = y.toneMapping);
      const Rn = Y.morphAttributes.position || Y.morphAttributes.normal || Y.morphAttributes.color, mt = Rn !== void 0 ? Rn.length : 0, Xe = Pe.get(Z), Eo = f.state.lights;
      if (K === !0 && (re === !0 || S !== E)) {
        const tn = S === E && Z.id === G;
        Ce.setState(Z, S, tn);
      }
      let yt = !1;
      Z.version === Xe.__version ? (Xe.needsLights && Xe.lightsStateVersion !== Eo.state.version || Xe.outputColorSpace !== Ie || j.isBatchedMesh && Xe.batching === !1 || !j.isBatchedMesh && Xe.batching === !0 || j.isInstancedMesh && Xe.instancing === !1 || !j.isInstancedMesh && Xe.instancing === !0 || j.isSkinnedMesh && Xe.skinning === !1 || !j.isSkinnedMesh && Xe.skinning === !0 || j.isInstancedMesh && Xe.instancingColor === !0 && j.instanceColor === null || j.isInstancedMesh && Xe.instancingColor === !1 && j.instanceColor !== null || Xe.envMap !== Fe || Z.fog === !0 && Xe.fog !== ye || Xe.numClippingPlanes !== void 0 && (Xe.numClippingPlanes !== Ce.numPlanes || Xe.numIntersection !== Ce.numIntersection) || Xe.vertexAlphas !== je || Xe.vertexTangents !== ke || Xe.morphTargets !== He || Xe.morphNormals !== St || Xe.morphColors !== Jt || Xe.toneMapping !== wt || Ue.isWebGL2 === !0 && Xe.morphTargetsCount !== mt) && (yt = !0) : (yt = !0, Xe.__version = Z.version);
      let si = Xe.currentProgram;
      yt === !0 && (si = ii(Z, F, j));
      let ol = !1, ws = !1, So = !1;
      const Ut = si.getUniforms(), ri = Xe.uniforms;
      if (Ee.useProgram(si.program) && (ol = !0, ws = !0, So = !0), Z.id !== G && (G = Z.id, ws = !0), ol || E !== S) {
        Ut.setValue(V, "projectionMatrix", S.projectionMatrix), Ut.setValue(V, "viewMatrix", S.matrixWorldInverse);
        const tn = Ut.map.cameraPosition;
        tn !== void 0 && tn.setValue(V, le.setFromMatrixPosition(S.matrixWorld)), Ue.logarithmicDepthBuffer && Ut.setValue(
          V,
          "logDepthBufFC",
          2 / (Math.log(S.far + 1) / Math.LN2)
        ), (Z.isMeshPhongMaterial || Z.isMeshToonMaterial || Z.isMeshLambertMaterial || Z.isMeshBasicMaterial || Z.isMeshStandardMaterial || Z.isShaderMaterial) && Ut.setValue(V, "isOrthographic", S.isOrthographicCamera === !0), E !== S && (E = S, ws = !0, So = !0);
      }
      if (j.isSkinnedMesh) {
        Ut.setOptional(V, j, "bindMatrix"), Ut.setOptional(V, j, "bindMatrixInverse");
        const tn = j.skeleton;
        tn && (Ue.floatVertexTextures ? (tn.boneTexture === null && tn.computeBoneTexture(), Ut.setValue(V, "boneTexture", tn.boneTexture, A)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      j.isBatchedMesh && (Ut.setOptional(V, j, "batchingTexture"), Ut.setValue(V, "batchingTexture", j._matricesTexture, A));
      const Mo = Y.morphAttributes;
      if ((Mo.position !== void 0 || Mo.normal !== void 0 || Mo.color !== void 0 && Ue.isWebGL2 === !0) && Ve.update(j, Y, si), (ws || Xe.receiveShadow !== j.receiveShadow) && (Xe.receiveShadow = j.receiveShadow, Ut.setValue(V, "receiveShadow", j.receiveShadow)), Z.isMeshGouraudMaterial && Z.envMap !== null && (ri.envMap.value = Fe, ri.flipEnvMap.value = Fe.isCubeTexture && Fe.isRenderTargetTexture === !1 ? -1 : 1), ws && (Ut.setValue(V, "toneMappingExposure", y.toneMappingExposure), Xe.needsLights && xo(ri, So), ye && Z.fog === !0 && ne.refreshFogUniforms(ri, ye), ne.refreshMaterialUniforms(ri, Z, ee, U, fe), Yr.upload(V, or(Xe), ri, A)), Z.isShaderMaterial && Z.uniformsNeedUpdate === !0 && (Yr.upload(V, or(Xe), ri, A), Z.uniformsNeedUpdate = !1), Z.isSpriteMaterial && Ut.setValue(V, "center", j.center), Ut.setValue(V, "modelViewMatrix", j.modelViewMatrix), Ut.setValue(V, "normalMatrix", j.normalMatrix), Ut.setValue(V, "modelMatrix", j.matrixWorld), Z.isShaderMaterial || Z.isRawShaderMaterial) {
        const tn = Z.uniformsGroups;
        for (let Ao = 0, qh = tn.length; Ao < qh; Ao++)
          if (Ue.isWebGL2) {
            const al = tn[Ao];
            et.update(al, si), et.bind(al, si);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return si;
    }
    function xo(S, F) {
      S.ambientLightColor.needsUpdate = F, S.lightProbe.needsUpdate = F, S.directionalLights.needsUpdate = F, S.directionalLightShadows.needsUpdate = F, S.pointLights.needsUpdate = F, S.pointLightShadows.needsUpdate = F, S.spotLights.needsUpdate = F, S.spotLightShadows.needsUpdate = F, S.rectAreaLights.needsUpdate = F, S.hemisphereLights.needsUpdate = F;
    }
    function pt(S) {
      return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return C;
    }, this.getActiveMipmapLevel = function() {
      return w;
    }, this.getRenderTarget = function() {
      return R;
    }, this.setRenderTargetTextures = function(S, F, Y) {
      Pe.get(S.texture).__webglTexture = F, Pe.get(S.depthTexture).__webglTexture = Y;
      const Z = Pe.get(S);
      Z.__hasExternalTextures = !0, Z.__hasExternalTextures && (Z.__autoAllocateDepthBuffer = Y === void 0, Z.__autoAllocateDepthBuffer || Se.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), Z.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(S, F) {
      const Y = Pe.get(S);
      Y.__webglFramebuffer = F, Y.__useDefaultFramebuffer = F === void 0;
    }, this.setRenderTarget = function(S, F = 0, Y = 0) {
      R = S, C = F, w = Y;
      let Z = !0, j = null, ye = !1, Ae = !1;
      if (S) {
        const Fe = Pe.get(S);
        Fe.__useDefaultFramebuffer !== void 0 ? (Ee.bindFramebuffer(V.FRAMEBUFFER, null), Z = !1) : Fe.__webglFramebuffer === void 0 ? A.setupRenderTarget(S) : Fe.__hasExternalTextures && A.rebindTextures(S, Pe.get(S.texture).__webglTexture, Pe.get(S.depthTexture).__webglTexture);
        const je = S.texture;
        (je.isData3DTexture || je.isDataArrayTexture || je.isCompressedArrayTexture) && (Ae = !0);
        const ke = Pe.get(S).__webglFramebuffer;
        S.isWebGLCubeRenderTarget ? (Array.isArray(ke[F]) ? j = ke[F][Y] : j = ke[F], ye = !0) : Ue.isWebGL2 && S.samples > 0 && A.useMultisampledRTT(S) === !1 ? j = Pe.get(S).__webglMultisampledFramebuffer : Array.isArray(ke) ? j = ke[Y] : j = ke, T.copy(S.viewport), z.copy(S.scissor), J = S.scissorTest;
      } else
        T.copy(Q).multiplyScalar(ee).floor(), z.copy(H).multiplyScalar(ee).floor(), J = W;
      if (Ee.bindFramebuffer(V.FRAMEBUFFER, j) && Ue.drawBuffers && Z && Ee.drawBuffers(S, j), Ee.viewport(T), Ee.scissor(z), Ee.setScissorTest(J), ye) {
        const Fe = Pe.get(S.texture);
        V.framebufferTexture2D(V.FRAMEBUFFER, V.COLOR_ATTACHMENT0, V.TEXTURE_CUBE_MAP_POSITIVE_X + F, Fe.__webglTexture, Y);
      } else if (Ae) {
        const Fe = Pe.get(S.texture), je = F || 0;
        V.framebufferTextureLayer(V.FRAMEBUFFER, V.COLOR_ATTACHMENT0, Fe.__webglTexture, Y || 0, je);
      }
      G = -1;
    }, this.readRenderTargetPixels = function(S, F, Y, Z, j, ye, Ae) {
      if (!(S && S.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Ie = Pe.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && Ae !== void 0 && (Ie = Ie[Ae]), Ie) {
        Ee.bindFramebuffer(V.FRAMEBUFFER, Ie);
        try {
          const Fe = S.texture, je = Fe.format, ke = Fe.type;
          if (je !== an && xe.convert(je) !== V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const He = ke === Ks && (Se.has("EXT_color_buffer_half_float") || Ue.isWebGL2 && Se.has("EXT_color_buffer_float"));
          if (ke !== ti && xe.convert(ke) !== V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
          !(ke === On && (Ue.isWebGL2 || Se.has("OES_texture_float") || Se.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
          !He) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          F >= 0 && F <= S.width - Z && Y >= 0 && Y <= S.height - j && V.readPixels(F, Y, Z, j, xe.convert(je), xe.convert(ke), ye);
        } finally {
          const Fe = R !== null ? Pe.get(R).__webglFramebuffer : null;
          Ee.bindFramebuffer(V.FRAMEBUFFER, Fe);
        }
      }
    }, this.copyFramebufferToTexture = function(S, F, Y = 0) {
      const Z = Math.pow(2, -Y), j = Math.floor(F.image.width * Z), ye = Math.floor(F.image.height * Z);
      A.setTexture2D(F, 0), V.copyTexSubImage2D(V.TEXTURE_2D, Y, 0, 0, S.x, S.y, j, ye), Ee.unbindTexture();
    }, this.copyTextureToTexture = function(S, F, Y, Z = 0) {
      const j = F.image.width, ye = F.image.height, Ae = xe.convert(Y.format), Ie = xe.convert(Y.type);
      A.setTexture2D(Y, 0), V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL, Y.flipY), V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Y.premultiplyAlpha), V.pixelStorei(V.UNPACK_ALIGNMENT, Y.unpackAlignment), F.isDataTexture ? V.texSubImage2D(V.TEXTURE_2D, Z, S.x, S.y, j, ye, Ae, Ie, F.image.data) : F.isCompressedTexture ? V.compressedTexSubImage2D(V.TEXTURE_2D, Z, S.x, S.y, F.mipmaps[0].width, F.mipmaps[0].height, Ae, F.mipmaps[0].data) : V.texSubImage2D(V.TEXTURE_2D, Z, S.x, S.y, Ae, Ie, F.image), Z === 0 && Y.generateMipmaps && V.generateMipmap(V.TEXTURE_2D), Ee.unbindTexture();
    }, this.copyTextureToTexture3D = function(S, F, Y, Z, j = 0) {
      if (y.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const ye = S.max.x - S.min.x + 1, Ae = S.max.y - S.min.y + 1, Ie = S.max.z - S.min.z + 1, Fe = xe.convert(Z.format), je = xe.convert(Z.type);
      let ke;
      if (Z.isData3DTexture)
        A.setTexture3D(Z, 0), ke = V.TEXTURE_3D;
      else if (Z.isDataArrayTexture || Z.isCompressedArrayTexture)
        A.setTexture2DArray(Z, 0), ke = V.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL, Z.flipY), V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Z.premultiplyAlpha), V.pixelStorei(V.UNPACK_ALIGNMENT, Z.unpackAlignment);
      const He = V.getParameter(V.UNPACK_ROW_LENGTH), St = V.getParameter(V.UNPACK_IMAGE_HEIGHT), Jt = V.getParameter(V.UNPACK_SKIP_PIXELS), wt = V.getParameter(V.UNPACK_SKIP_ROWS), Rn = V.getParameter(V.UNPACK_SKIP_IMAGES), mt = Y.isCompressedTexture ? Y.mipmaps[j] : Y.image;
      V.pixelStorei(V.UNPACK_ROW_LENGTH, mt.width), V.pixelStorei(V.UNPACK_IMAGE_HEIGHT, mt.height), V.pixelStorei(V.UNPACK_SKIP_PIXELS, S.min.x), V.pixelStorei(V.UNPACK_SKIP_ROWS, S.min.y), V.pixelStorei(V.UNPACK_SKIP_IMAGES, S.min.z), Y.isDataTexture || Y.isData3DTexture ? V.texSubImage3D(ke, j, F.x, F.y, F.z, ye, Ae, Ie, Fe, je, mt.data) : Y.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), V.compressedTexSubImage3D(ke, j, F.x, F.y, F.z, ye, Ae, Ie, Fe, mt.data)) : V.texSubImage3D(ke, j, F.x, F.y, F.z, ye, Ae, Ie, Fe, je, mt), V.pixelStorei(V.UNPACK_ROW_LENGTH, He), V.pixelStorei(V.UNPACK_IMAGE_HEIGHT, St), V.pixelStorei(V.UNPACK_SKIP_PIXELS, Jt), V.pixelStorei(V.UNPACK_SKIP_ROWS, wt), V.pixelStorei(V.UNPACK_SKIP_IMAGES, Rn), j === 0 && Z.generateMipmaps && V.generateMipmap(ke), Ee.unbindTexture();
    }, this.initTexture = function(S) {
      S.isCubeTexture ? A.setTextureCube(S, 0) : S.isData3DTexture ? A.setTexture3D(S, 0) : S.isDataArrayTexture || S.isCompressedArrayTexture ? A.setTexture2DArray(S, 0) : A.setTexture2D(S, 0), Ee.unbindTexture();
    }, this.resetState = function() {
      C = 0, w = 0, R = null, Ee.reset(), Le.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Fn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === Ka ? "display-p3" : "srgb", t.unpackColorSpace = st.workingColorSpace === po ? "display-p3" : "srgb";
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === _t ? wi : hh;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === wi ? _t : Lt;
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(e) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
  }
}
class ly extends Ih {
}
ly.prototype.isWebGL1Renderer = !0;
class cy extends vt {
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
class uy {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = ba, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.version = 0, this.uuid = mn();
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
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = mn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = mn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const kt = /* @__PURE__ */ new N();
class el {
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
      kt.fromBufferAttribute(this, t), kt.applyMatrix4(e), this.setXYZ(t, kt.x, kt.y, kt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      kt.fromBufferAttribute(this, t), kt.applyNormalMatrix(e), this.setXYZ(t, kt.x, kt.y, kt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      kt.fromBufferAttribute(this, t), kt.transformDirection(e), this.setXYZ(t, kt.x, kt.y, kt.z);
    return this;
  }
  setX(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = An(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = An(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = An(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = An(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = ct(t, this.array), n = ct(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = ct(t, this.array), n = ct(n, this.array), i = ct(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = ct(t, this.array), n = ct(n, this.array), i = ct(i, this.array), r = ct(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this;
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
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new el(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
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
const jc = /* @__PURE__ */ new N(), Xc = /* @__PURE__ */ new ut(), qc = /* @__PURE__ */ new ut(), hy = /* @__PURE__ */ new N(), Yc = /* @__PURE__ */ new Ye(), Pr = /* @__PURE__ */ new N(), sa = /* @__PURE__ */ new bn(), Kc = /* @__PURE__ */ new Ye(), ra = /* @__PURE__ */ new mo();
class dy extends Ge {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = Il, this.bindMatrix = new Ye(), this.bindMatrixInverse = new Ye(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new Vn()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, Pr), this.boundingBox.expandByPoint(Pr);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new bn()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, Pr), this.boundingSphere.expandByPoint(Pr);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), sa.copy(this.boundingSphere), sa.applyMatrix4(i), e.ray.intersectsSphere(sa) !== !1 && (Kc.copy(i).invert(), ra.copy(e.ray).applyMatrix4(Kc), !(this.boundingBox !== null && ra.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, ra)));
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
    const e = new ut(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === Il ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === vp ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    Xc.fromBufferAttribute(i.attributes.skinIndex, e), qc.fromBufferAttribute(i.attributes.skinWeight, e), jc.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const o = qc.getComponent(r);
      if (o !== 0) {
        const a = Xc.getComponent(r);
        Yc.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(hy.copy(jc).applyMatrix4(Yc), o);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
  boneTransform(e, t) {
    return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."), this.applyBoneTransform(e, t);
  }
}
class Dh extends vt {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class fy extends Dt {
  constructor(e = null, t = 1, n = 1, i, r, o, a, l, c = Ct, u = Ct, h, d) {
    super(null, o, a, l, c, u, i, r, h, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const $c = /* @__PURE__ */ new Ye(), py = /* @__PURE__ */ new Ye();
class tl {
  constructor(e = [], t = []) {
    this.uuid = mn(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
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
      const a = e[r] ? e[r].matrixWorld : py;
      $c.multiplyMatrices(a, t[r]), $c.toArray(n, r * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new tl(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new fy(t, e, e, an, On);
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
      o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), o = new Dh()), this.bones.push(o), this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]));
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
class La extends Wt {
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
const Qi = /* @__PURE__ */ new Ye(), Jc = /* @__PURE__ */ new Ye(), Ir = [], Zc = /* @__PURE__ */ new Vn(), my = /* @__PURE__ */ new Ye(), Ds = /* @__PURE__ */ new Ge(), Us = /* @__PURE__ */ new bn();
class gy extends Ge {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new La(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, my);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new Vn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Qi), Zc.copy(e.boundingBox).applyMatrix4(Qi), this.boundingBox.union(Zc);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new bn()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Qi), Us.copy(e.boundingSphere).applyMatrix4(Qi), this.boundingSphere.union(Us);
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
    if (Ds.geometry = this.geometry, Ds.material = this.material, Ds.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Us.copy(this.boundingSphere), Us.applyMatrix4(n), e.ray.intersectsSphere(Us) !== !1))
      for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, Qi), Jc.multiplyMatrices(n, Qi), Ds.matrixWorld = Jc, Ds.raycast(e, Ir);
        for (let o = 0, a = Ir.length; o < a; o++) {
          const l = Ir[o];
          l.instanceId = r, l.object = this, t.push(l);
        }
        Ir.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new La(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
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
class Uh extends Tn {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Be(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Qc = /* @__PURE__ */ new N(), eu = /* @__PURE__ */ new N(), tu = /* @__PURE__ */ new Ye(), oa = /* @__PURE__ */ new mo(), Dr = /* @__PURE__ */ new bn();
class nl extends vt {
  constructor(e = new vn(), t = new Uh()) {
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
        Qc.fromBufferAttribute(t, i - 1), eu.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += Qc.distanceTo(eu);
      e.setAttribute("lineDistance", new cn(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Dr.copy(n.boundingSphere), Dr.applyMatrix4(i), Dr.radius += r, e.ray.intersectsSphere(Dr) === !1) return;
    tu.copy(i).invert(), oa.copy(e.ray).applyMatrix4(tu);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = new N(), u = new N(), h = new N(), d = new N(), m = this.isLineSegments ? 2 : 1, g = n.index, f = n.attributes.position;
    if (g !== null) {
      const p = Math.max(0, o.start), x = Math.min(g.count, o.start + o.count);
      for (let y = p, b = x - 1; y < b; y += m) {
        const C = g.getX(y), w = g.getX(y + 1);
        if (c.fromBufferAttribute(f, C), u.fromBufferAttribute(f, w), oa.distanceSqToSegment(c, u, d, h) > l) continue;
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
      const p = Math.max(0, o.start), x = Math.min(f.count, o.start + o.count);
      for (let y = p, b = x - 1; y < b; y += m) {
        if (c.fromBufferAttribute(f, y), u.fromBufferAttribute(f, y + 1), oa.distanceSqToSegment(c, u, d, h) > l) continue;
        d.applyMatrix4(this.matrixWorld);
        const w = e.ray.origin.distanceTo(d);
        w < e.near || w > e.far || t.push({
          distance: w,
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
const nu = /* @__PURE__ */ new N(), iu = /* @__PURE__ */ new N();
class _y extends nl {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, r = t.count; i < r; i += 2)
        nu.fromBufferAttribute(t, i), iu.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + nu.distanceTo(iu);
      e.setAttribute("lineDistance", new cn(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class vy extends nl {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class Nh extends Tn {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Be(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const su = /* @__PURE__ */ new Ye(), Pa = /* @__PURE__ */ new mo(), Ur = /* @__PURE__ */ new bn(), Nr = /* @__PURE__ */ new N();
class yy extends vt {
  constructor(e = new vn(), t = new Nh()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Points.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ur.copy(n.boundingSphere), Ur.applyMatrix4(i), Ur.radius += r, e.ray.intersectsSphere(Ur) === !1) return;
    su.copy(i).invert(), Pa.copy(e.ray).applyMatrix4(su);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = n.index, h = n.attributes.position;
    if (c !== null) {
      const d = Math.max(0, o.start), m = Math.min(c.count, o.start + o.count);
      for (let g = d, _ = m; g < _; g++) {
        const f = c.getX(g);
        Nr.fromBufferAttribute(h, f), ru(Nr, f, l, i, e, t, this);
      }
    } else {
      const d = Math.max(0, o.start), m = Math.min(h.count, o.start + o.count);
      for (let g = d, _ = m; g < _; g++)
        Nr.fromBufferAttribute(h, g), ru(Nr, g, l, i, e, t, this);
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
function ru(s, e, t, n, i, r, o) {
  const a = Pa.distanceSqToPoint(s);
  if (a < t) {
    const l = new N();
    Pa.closestPointToPoint(s, l), l.applyMatrix4(n);
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
class oo extends vn {
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
    x(), o === !1 && (e > 0 && y(!0), t > 0 && y(!1)), this.setIndex(u), this.setAttribute("position", new cn(h, 3)), this.setAttribute("normal", new cn(d, 3)), this.setAttribute("uv", new cn(m, 2));
    function x() {
      const b = new N(), C = new N();
      let w = 0;
      const R = (t - e) / n;
      for (let G = 0; G <= r; G++) {
        const E = [], T = G / r, z = T * (t - e) + e;
        for (let J = 0; J <= i; J++) {
          const oe = J / i, L = oe * l + a, I = Math.sin(L), U = Math.cos(L);
          C.x = z * I, C.y = -T * n + f, C.z = z * U, h.push(C.x, C.y, C.z), b.set(I, R, U).normalize(), d.push(b.x, b.y, b.z), m.push(oe, 1 - T), E.push(g++);
        }
        _.push(E);
      }
      for (let G = 0; G < i; G++)
        for (let E = 0; E < r; E++) {
          const T = _[E][G], z = _[E + 1][G], J = _[E + 1][G + 1], oe = _[E][G + 1];
          u.push(T, z, oe), u.push(z, J, oe), w += 6;
        }
      c.addGroup(p, w, 0), p += w;
    }
    function y(b) {
      const C = g, w = new Je(), R = new N();
      let G = 0;
      const E = b === !0 ? e : t, T = b === !0 ? 1 : -1;
      for (let J = 1; J <= i; J++)
        h.push(0, f * T, 0), d.push(0, T, 0), m.push(0.5, 0.5), g++;
      const z = g;
      for (let J = 0; J <= i; J++) {
        const L = J / i * l + a, I = Math.cos(L), U = Math.sin(L);
        R.x = E * U, R.y = f * T, R.z = E * I, h.push(R.x, R.y, R.z), d.push(0, T, 0), w.x = I * 0.5 + 0.5, w.y = U * 0.5 * T + 0.5, m.push(w.x, w.y), g++;
      }
      for (let J = 0; J < i; J++) {
        const oe = C + J, L = z + J;
        b === !0 ? u.push(L, L + 1, oe) : u.push(L + 1, L, oe), G += 3;
      }
      c.addGroup(p, G, b === !0 ? 1 : 2), p += G;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new oo(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Ht extends Tn {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Be(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Be(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = dh, this.normalScale = new Je(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class kn extends Ht {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Je(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return Ft(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Be(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Be(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Be(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
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
function Or(s, e, t) {
  return !s || // let 'undefined' and 'null' pass
  !t && s.constructor === e ? s : typeof e.BYTES_PER_ELEMENT == "number" ? new e(s) : Array.prototype.slice.call(s);
}
function xy(s) {
  return ArrayBuffer.isView(s) && !(s instanceof DataView);
}
function Ey(s) {
  function e(i, r) {
    return s[i] - s[r];
  }
  const t = s.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function ou(s, e, t) {
  const n = s.length, i = new s.constructor(n);
  for (let r = 0, o = 0; o !== n; ++r) {
    const a = t[r] * e;
    for (let l = 0; l !== e; ++l)
      i[o++] = s[a + l];
  }
  return i;
}
function Oh(s, e, t, n) {
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
class rr {
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
class Sy extends rr {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: ns,
      endingEnd: ns
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2, o = e + 1, a = i[r], l = i[o];
    if (a === void 0)
      switch (this.getSettings_().endingStart) {
        case is:
          r = e, a = 2 * t - n;
          break;
        case eo:
          r = i.length - 2, a = t + i[r] - i[r + 1];
          break;
        default:
          r = e, a = n;
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case is:
          o = e, l = 2 * n - t;
          break;
        case eo:
          o = 1, l = n + i[1] - i[0];
          break;
        default:
          o = e - 1, l = t;
      }
    const c = (n - t) * 0.5, u = this.valueSize;
    this._weightPrev = c / (t - a), this._weightNext = c / (l - n), this._offsetPrev = r * u, this._offsetNext = o * u;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, u = this._offsetPrev, h = this._offsetNext, d = this._weightPrev, m = this._weightNext, g = (n - t) / (i - t), _ = g * g, f = _ * g, p = -d * f + 2 * d * _ - d * g, x = (1 + d) * f + (-1.5 - 2 * d) * _ + (-0.5 + d) * g + 1, y = (-1 - m) * f + (1.5 + m) * _ + 0.5 * g, b = m * f - m * _;
    for (let C = 0; C !== a; ++C)
      r[C] = p * o[u + C] + x * o[c + C] + y * o[l + C] + b * o[h + C];
    return r;
  }
}
class Fh extends rr {
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
class My extends rr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class wn {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = Or(t, this.TimeBufferType), this.values = Or(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
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
        times: Or(e.times, Array),
        values: Or(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new My(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Fh(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Sy(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case $s:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case ps:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Uo:
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
        return $s;
      case this.InterpolantFactoryMethodLinear:
        return ps;
      case this.InterpolantFactoryMethodSmooth:
        return Uo;
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
    if (i !== void 0 && xy(i))
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
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Uo, r = e.length - 1;
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
wn.prototype.TimeBufferType = Float32Array;
wn.prototype.ValueBufferType = Float32Array;
wn.prototype.DefaultInterpolation = ps;
class Ss extends wn {
}
Ss.prototype.ValueTypeName = "bool";
Ss.prototype.ValueBufferType = Array;
Ss.prototype.DefaultInterpolation = $s;
Ss.prototype.InterpolantFactoryMethodLinear = void 0;
Ss.prototype.InterpolantFactoryMethodSmooth = void 0;
class Bh extends wn {
}
Bh.prototype.ValueTypeName = "color";
class _s extends wn {
}
_s.prototype.ValueTypeName = "number";
class Ay extends rr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = (n - t) / (i - t);
    let c = e * a;
    for (let u = c + a; c !== u; c += 4)
      gn.slerpFlat(r, 0, o, c - a, o, c, l);
    return r;
  }
}
class Ii extends wn {
  InterpolantFactoryMethodLinear(e) {
    return new Ay(this.times, this.values, this.getValueSize(), e);
  }
}
Ii.prototype.ValueTypeName = "quaternion";
Ii.prototype.DefaultInterpolation = ps;
Ii.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ms extends wn {
}
Ms.prototype.ValueTypeName = "string";
Ms.prototype.ValueBufferType = Array;
Ms.prototype.DefaultInterpolation = $s;
Ms.prototype.InterpolantFactoryMethodLinear = void 0;
Ms.prototype.InterpolantFactoryMethodSmooth = void 0;
class vs extends wn {
}
vs.prototype.ValueTypeName = "vector";
class Ia {
  constructor(e, t = -1, n, i = Ya) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = mn(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let o = 0, a = n.length; o !== a; ++o)
      t.push(by(n[o]).scale(i));
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
      t.push(wn.toJSON(n[r]));
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
      const u = Ey(l);
      l = ou(l, 1, u), c = ou(c, 1, u), !i && l[0] === 0 && (l.push(r), c.push(c[0])), o.push(
        new _s(
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
        Oh(m, f, p, g), f.length !== 0 && _.push(new h(d, f, p));
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
            for (let x = 0; x !== d[g].morphTargets.length; ++x) {
              const y = d[g];
              f.push(y.time), p.push(y.morphTarget === _ ? 1 : 0);
            }
            i.push(new _s(".morphTargetInfluence[" + _ + "]", f, p));
          }
          l = m.length * o;
        } else {
          const m = ".bones[" + t[h].name + "]";
          n(
            vs,
            m + ".position",
            d,
            "pos",
            i
          ), n(
            Ii,
            m + ".quaternion",
            d,
            "rot",
            i
          ), n(
            vs,
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
function Ty(s) {
  switch (s.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return _s;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return vs;
    case "color":
      return Bh;
    case "quaternion":
      return Ii;
    case "bool":
    case "boolean":
      return Ss;
    case "string":
      return Ms;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s);
}
function by(s) {
  if (s.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Ty(s.type);
  if (s.times === void 0) {
    const t = [], n = [];
    Oh(s.keys, t, n, "value"), s.times = t, s.values = n;
  }
  return e.parse !== void 0 ? e.parse(s) : new e(s.name, s.times, s.values, s.interpolation);
}
const Zn = {
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
class wy {
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
const Ry = /* @__PURE__ */ new wy();
class As {
  constructor(e) {
    this.manager = e !== void 0 ? e : Ry, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
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
As.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Un = {};
class Cy extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class Vh extends As {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = Zn.get(e);
    if (r !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(r), this.manager.itemEnd(e);
      }, 0), r;
    if (Un[e] !== void 0) {
      Un[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    Un[e] = [], Un[e].push({
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
        const u = Un[e], h = c.body.getReader(), d = c.headers.get("Content-Length") || c.headers.get("X-File-Size"), m = d ? parseInt(d) : 0, g = m !== 0;
        let _ = 0;
        const f = new ReadableStream({
          start(p) {
            x();
            function x() {
              h.read().then(({ done: y, value: b }) => {
                if (y)
                  p.close();
                else {
                  _ += b.byteLength;
                  const C = new ProgressEvent("progress", { lengthComputable: g, loaded: _, total: m });
                  for (let w = 0, R = u.length; w < R; w++) {
                    const G = u[w];
                    G.onProgress && G.onProgress(C);
                  }
                  p.enqueue(b), x();
                }
              });
            }
          }
        });
        return new Response(f);
      } else
        throw new Cy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
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
      Zn.add(e, c);
      const u = Un[e];
      delete Un[e];
      for (let h = 0, d = u.length; h < d; h++) {
        const m = u[h];
        m.onLoad && m.onLoad(c);
      }
    }).catch((c) => {
      const u = Un[e];
      if (u === void 0)
        throw this.manager.itemError(e), c;
      delete Un[e];
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
class Ly extends As {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, o = Zn.get(e);
    if (o !== void 0)
      return r.manager.itemStart(e), setTimeout(function() {
        t && t(o), r.manager.itemEnd(e);
      }, 0), o;
    const a = Js("img");
    function l() {
      u(), Zn.add(e, this), t && t(this), r.manager.itemEnd(e);
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
class Py extends As {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new Dt(), o = new Ly(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
      r.image = a, r.needsUpdate = !0, t !== void 0 && t(r);
    }, n, i), r;
  }
}
class vo extends vt {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Be(e), this.intensity = t;
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
const aa = /* @__PURE__ */ new Ye(), au = /* @__PURE__ */ new N(), lu = /* @__PURE__ */ new N();
class il {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Je(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ye(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Ja(), this._frameExtents = new Je(1, 1), this._viewportCount = 1, this._viewports = [
      new ut(0, 0, 1, 1)
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
    au.setFromMatrixPosition(e.matrixWorld), t.position.copy(au), lu.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(lu), t.updateMatrixWorld(), aa.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(aa), n.set(
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
    ), n.multiply(aa);
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
class Iy extends il {
  constructor() {
    super(new Gt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = ms * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class kh extends vo {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, o = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(vt.DEFAULT_UP), this.updateMatrix(), this.target = new vt(), this.distance = n, this.angle = i, this.penumbra = r, this.decay = o, this.map = null, this.shadow = new Iy();
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
const cu = /* @__PURE__ */ new Ye(), Ns = /* @__PURE__ */ new N(), la = /* @__PURE__ */ new N();
class Dy extends il {
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
      new ut(2, 1, 1, 1),
      // negative X
      new ut(0, 1, 1, 1),
      // positive Z
      new ut(3, 1, 1, 1),
      // negative Z
      new ut(1, 1, 1, 1),
      // positive Y
      new ut(3, 0, 1, 1),
      // negative Y
      new ut(1, 0, 1, 1)
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
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), Ns.setFromMatrixPosition(e.matrixWorld), n.position.copy(Ns), la.copy(n.position), la.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(la), n.updateMatrixWorld(), i.makeTranslation(-Ns.x, -Ns.y, -Ns.z), cu.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(cu);
  }
}
class Hs extends vo {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Dy();
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
class Uy extends il {
  constructor() {
    super(new Za(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class Da extends vo {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(vt.DEFAULT_UP), this.updateMatrix(), this.target = new vt(), this.shadow = new Uy();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Ny extends vo {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class Xs {
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
class Oy extends As {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, o = Zn.get(e);
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
      return Zn.add(e, c), t && t(c), r.manager.itemEnd(e), c;
    }).catch(function(c) {
      i && i(c), Zn.remove(e), r.manager.itemError(e), r.manager.itemEnd(e);
    });
    Zn.add(e, l), r.manager.itemStart(e);
  }
}
class Fy {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = uu(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
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
      const t = uu();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function uu() {
  return (typeof performance > "u" ? Date : performance).now();
}
class By {
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
    gn.slerpFlat(e, t, e, t, e, n, i);
  }
  _slerpAdditive(e, t, n, i, r) {
    const o = this._workIndex * r;
    gn.multiplyQuaternionsFlat(e, o, e, t, e, n), gn.slerpFlat(e, t, e, t, e, o, i);
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
const sl = "\\[\\]\\.:\\/", Vy = new RegExp("[" + sl + "]", "g"), rl = "[^" + sl + "]", ky = "[^" + sl.replace("\\.", "") + "]", zy = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", rl), Hy = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", ky), Gy = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", rl), Wy = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", rl), jy = new RegExp(
  "^" + zy + Hy + Gy + Wy + "$"
), Xy = ["material", "materials", "bones", "map"];
class qy {
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
    return e.replace(/\s/g, "_").replace(Vy, "");
  }
  static parseTrackName(e) {
    const t = jy.exec(e);
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
      Xy.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r);
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
it.Composite = qy;
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
class Yy {
  constructor(e, t, n = null, i = t.blendMode) {
    this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = i;
    const r = t.tracks, o = r.length, a = new Array(o), l = {
      endingStart: ns,
      endingEnd: ns
    };
    for (let c = 0; c !== o; ++c) {
      const u = r[c].createInterpolant(null);
      a[c] = u, u.settings = l;
    }
    this._interpolantSettings = l, this._interpolants = a, this._propertyBindings = new Array(o), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Rp, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
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
        case Lp:
          for (let u = 0, h = l.length; u !== h; ++u)
            l[u].evaluate(o), c[u].accumulateAdditive(a);
          break;
        case Ya:
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
    const o = n === Cp;
    if (e === 0)
      return r === -1 ? i : o && (r & 1) === 1 ? t - i : i;
    if (n === wp) {
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
    n ? (i.endingStart = is, i.endingEnd = is) : (e ? i.endingStart = this.zeroSlopeAtStart ? is : ns : i.endingStart = eo, t ? i.endingEnd = this.zeroSlopeAtEnd ? is : ns : i.endingEnd = eo);
  }
  _scheduleFading(e, t, n) {
    const i = this._mixer, r = i.time;
    let o = this._weightInterpolant;
    o === null && (o = i._lendControlInterpolant(), this._weightInterpolant = o);
    const a = o.parameterPositions, l = o.sampleValues;
    return a[0] = r, l[0] = t, a[1] = r + e, l[1] = n, this;
  }
}
const Ky = new Float32Array(1);
class Ua extends Ui {
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
        g = new By(
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
    return n === void 0 && (n = new Fh(
      new Float32Array(2),
      new Float32Array(2),
      1,
      Ky
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
    let o = typeof e == "string" ? Ia.findByName(i, e) : e;
    const a = o !== null ? o.uuid : e, l = this._actionsByClip[a];
    let c = null;
    if (n === void 0 && (o !== null ? n = o.blendMode : n = Ya), l !== void 0) {
      const h = l.actionByRoot[r];
      if (h !== void 0 && h.blendMode === n)
        return h;
      c = l.knownActions[0], o === null && (o = c._clip);
    }
    if (o === null) return null;
    const u = new Yy(this, o, t, n);
    return this._bindAction(u, c), this._addInactiveAction(u, a, r), u;
  }
  // get an existing action
  existingAction(e, t) {
    const n = t || this._root, i = n.uuid, r = typeof e == "string" ? Ia.findByName(n, e) : e, o = r ? r.uuid : e, a = this._actionsByClip[o];
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
  revision: Xa
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Xa);
function hu(s, e) {
  if (e === Pp)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), s;
  if (e === Ta || e === uh) {
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
    if (e === Ta)
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
class Na extends As {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new ex(t);
    }), this.register(function(t) {
      return new cx(t);
    }), this.register(function(t) {
      return new ux(t);
    }), this.register(function(t) {
      return new hx(t);
    }), this.register(function(t) {
      return new nx(t);
    }), this.register(function(t) {
      return new ix(t);
    }), this.register(function(t) {
      return new sx(t);
    }), this.register(function(t) {
      return new rx(t);
    }), this.register(function(t) {
      return new Qy(t);
    }), this.register(function(t) {
      return new ox(t);
    }), this.register(function(t) {
      return new tx(t);
    }), this.register(function(t) {
      return new lx(t);
    }), this.register(function(t) {
      return new ax(t);
    }), this.register(function(t) {
      return new Jy(t);
    }), this.register(function(t) {
      return new dx(t);
    }), this.register(function(t) {
      return new fx(t);
    });
  }
  load(e, t, n, i) {
    const r = this;
    let o;
    if (this.resourcePath !== "")
      o = this.resourcePath;
    else if (this.path !== "") {
      const c = Xs.extractUrlBase(e);
      o = Xs.resolveURL(c, this.path);
    } else
      o = Xs.extractUrlBase(e);
    this.manager.itemStart(e);
    const a = function(c) {
      i ? i(c) : console.error(c), r.manager.itemError(e), r.manager.itemEnd(e);
    }, l = new Vh(this.manager);
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
      if (l.decode(new Uint8Array(e, 0, 4)) === zh) {
        try {
          o[$e.KHR_BINARY_GLTF] = new px(e);
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
    const c = new wx(r, {
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
            o[h] = new Zy();
            break;
          case $e.KHR_DRACO_MESH_COMPRESSION:
            o[h] = new mx(r, this.dracoLoader);
            break;
          case $e.KHR_TEXTURE_TRANSFORM:
            o[h] = new gx();
            break;
          case $e.KHR_MESH_QUANTIZATION:
            o[h] = new _x();
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
function $y() {
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
class Jy {
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
    const u = new Be(16777215);
    l.color !== void 0 && u.setRGB(l.color[0], l.color[1], l.color[2], Lt);
    const h = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new Da(u), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new Hs(u), c.distance = h;
        break;
      case "spot":
        c = new kh(u), c.distance = h, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, Kn(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i;
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
class Zy {
  constructor() {
    this.name = $e.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Si;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new Be(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const o = r.baseColorFactor;
        e.color.setRGB(o[0], o[1], o[2], Lt), e.opacity = o[3];
      }
      r.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", r.baseColorTexture, _t));
    }
    return Promise.all(i);
  }
}
class Qy {
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
class ex {
  constructor(e) {
    this.parser = e, this.name = $e.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : kn;
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
class tx {
  constructor(e) {
    this.parser = e, this.name = $e.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : kn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class nx {
  constructor(e) {
    this.parser = e, this.name = $e.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : kn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [];
    t.sheenColor = new Be(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const o = i.extensions[this.name];
    if (o.sheenColorFactor !== void 0) {
      const a = o.sheenColorFactor;
      t.sheenColor.setRGB(a[0], a[1], a[2], Lt);
    }
    return o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, _t)), o.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(r);
  }
}
class ix {
  constructor(e) {
    this.parser = e, this.name = $e.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : kn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && r.push(n.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(r);
  }
}
class sx {
  constructor(e) {
    this.parser = e, this.name = $e.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : kn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && r.push(n.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
    const a = o.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Be().setRGB(a[0], a[1], a[2], Lt), Promise.all(r);
  }
}
class rx {
  constructor(e) {
    this.parser = e, this.name = $e.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : kn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = i.extensions[this.name];
    return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class ox {
  constructor(e) {
    this.parser = e, this.name = $e.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : kn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && r.push(n.assignTexture(t, "specularIntensityMap", o.specularTexture));
    const a = o.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Be().setRGB(a[0], a[1], a[2], Lt), o.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", o.specularColorTexture, _t)), Promise.all(r);
  }
}
class ax {
  constructor(e) {
    this.parser = e, this.name = $e.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : kn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return t.bumpScale = o.bumpFactor !== void 0 ? o.bumpFactor : 1, o.bumpTexture !== void 0 && r.push(n.assignTexture(t, "bumpMap", o.bumpTexture)), Promise.all(r);
  }
}
class lx {
  constructor(e) {
    this.parser = e, this.name = $e.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : kn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && r.push(n.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(r);
  }
}
class cx {
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
class ux {
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
class hx {
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
class dx {
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
class fx {
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
        const _ = new Ye(), f = new N(), p = new gn(), x = new N(1, 1, 1), y = new gy(g.geometry, g.material, d);
        for (let b = 0; b < d; b++)
          l.TRANSLATION && f.fromBufferAttribute(l.TRANSLATION, b), l.ROTATION && p.fromBufferAttribute(l.ROTATION, b), l.SCALE && x.fromBufferAttribute(l.SCALE, b), y.setMatrixAt(b, _.compose(f, p, x));
        for (const b in l)
          if (b === "_COLOR_0") {
            const C = l[b];
            y.instanceColor = new La(C.array, C.itemSize, C.normalized);
          } else b !== "TRANSLATION" && b !== "ROTATION" && b !== "SCALE" && g.geometry.setAttribute(b, l[b]);
        vt.prototype.copy.call(y, g), this.parser.assignFinalMaterial(y), m.push(y);
      }
      return u.isGroup ? (u.clear(), u.add(...m), u) : m[0];
    }));
  }
}
const zh = "glTF", Os = 12, du = { JSON: 1313821514, BIN: 5130562 };
class px {
  constructor(e) {
    this.name = $e.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Os), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== zh)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - Os, r = new DataView(e, Os);
    let o = 0;
    for (; o < i; ) {
      const a = r.getUint32(o, !0);
      o += 4;
      const l = r.getUint32(o, !0);
      if (o += 4, l === du.JSON) {
        const c = new Uint8Array(e, Os + o, a);
        this.content = n.decode(c);
      } else if (l === du.BIN) {
        const c = Os + o;
        this.body = e.slice(c, c + a);
      }
      o += a;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class mx {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = $e.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, r = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, l = {}, c = {};
    for (const u in o) {
      const h = Oa[u] || u.toLowerCase();
      a[h] = o[u];
    }
    for (const u in e.attributes) {
      const h = Oa[u] || u.toLowerCase();
      if (o[u] !== void 0) {
        const d = n.accessors[e.attributes[u]], m = ls[d.componentType];
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
class gx {
  constructor() {
    this.name = $e.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class _x {
  constructor() {
    this.name = $e.KHR_MESH_QUANTIZATION;
  }
}
class Hh extends rr {
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
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = a * 2, c = a * 3, u = i - t, h = (n - t) / u, d = h * h, m = d * h, g = e * c, _ = g - c, f = -2 * m + 3 * d, p = m - d, x = 1 - f, y = p - d + h;
    for (let b = 0; b !== a; b++) {
      const C = o[_ + b + a], w = o[_ + b + l] * u, R = o[g + b + a], G = o[g + b] * u;
      r[b] = x * C + y * w + f * R + p * G;
    }
    return r;
  }
}
const vx = new gn();
class yx extends Hh {
  interpolate_(e, t, n, i) {
    const r = super.interpolate_(e, t, n, i);
    return vx.fromArray(r).normalize().toArray(r), r;
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
}, ls = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, fu = {
  9728: Ct,
  9729: qt,
  9984: Aa,
  9985: nh,
  9986: qr,
  9987: Ci
}, pu = {
  33071: on,
  33648: Qr,
  10497: ds
}, ca = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Oa = {
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
}, Xn = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, xx = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: ps,
  STEP: $s
}, ua = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Ex(s) {
  return s.DefaultMaterial === void 0 && (s.DefaultMaterial = new Ht({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: Bn
  })), s.DefaultMaterial;
}
function hi(s, e, t) {
  for (const n in t.extensions)
    s[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function Kn(s, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(s.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Sx(s, e, t) {
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
function Mx(s, e) {
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
function Ax(s) {
  let e;
  const t = s.extensions && s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + ha(t.attributes) : e = s.indices + ":" + ha(s.attributes) + ":" + s.mode, s.targets !== void 0)
    for (let n = 0, i = s.targets.length; n < i; n++)
      e += ":" + ha(s.targets[n]);
  return e;
}
function ha(s) {
  let e = "";
  const t = Object.keys(s).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + s[t[n]] + ";";
  return e;
}
function Fa(s) {
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
function Tx(s) {
  return s.search(/\.jpe?g($|\?)/i) > 0 || s.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : s.search(/\.webp($|\?)/i) > 0 || s.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const bx = new Ye();
class wx {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new $y(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = !1, r = -1;
    typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, i = navigator.userAgent.indexOf("Firefox") > -1, r = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || i && r < 98 ? this.textureLoader = new Py(this.options.manager) : this.textureLoader = new Oy(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Vh(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
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
      return hi(r, a, i), Kn(a, i), Promise.all(n._invokeAll(function(l) {
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
      n.load(Xs.resolveURL(t.uri, i.path), r, void 0, function() {
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
      const o = ca[i.type], a = ls[i.componentType], l = i.normalized === !0, c = new a(i.count * o);
      return Promise.resolve(new Wt(c, o, l));
    }
    const r = [];
    return i.bufferView !== void 0 ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), i.sparse !== void 0 && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then(function(o) {
      const a = o[0], l = ca[i.type], c = ls[i.componentType], u = c.BYTES_PER_ELEMENT, h = u * l, d = i.byteOffset || 0, m = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0;
      let _, f;
      if (m && m !== h) {
        const p = Math.floor(d / m), x = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + p + ":" + i.count;
        let y = t.cache.get(x);
        y || (_ = new c(a, p * m, i.count * m / u), y = new uy(_, m / u), t.cache.add(x, y)), f = new el(y, l, d % m / u, g);
      } else
        a === null ? _ = new c(i.count * l) : _ = new c(a, d, i.count * l), f = new Wt(_, l, g);
      if (i.sparse !== void 0) {
        const p = ca.SCALAR, x = ls[i.sparse.indices.componentType], y = i.sparse.indices.byteOffset || 0, b = i.sparse.values.byteOffset || 0, C = new x(o[1], y, i.sparse.count * p), w = new c(o[2], b, i.sparse.count * l);
        a !== null && (f = new Wt(f.array.slice(), f.itemSize, f.normalized));
        for (let R = 0, G = C.length; R < G; R++) {
          const E = C[R];
          if (f.setX(E, w[R * l]), l >= 2 && f.setY(E, w[R * l + 1]), l >= 3 && f.setZ(E, w[R * l + 2]), l >= 4 && f.setW(E, w[R * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
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
      return u.magFilter = fu[d.magFilter] || qt, u.minFilter = fu[d.minFilter] || Ci, u.wrapS = pu[d.wrapS] || ds, u.wrapT = pu[d.wrapT] || ds, i.associations.set(u, { textures: e }), u;
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
        }), t.load(Xs.resolveURL(h, r.path), g, void 0, m);
      });
    }).then(function(h) {
      return c === !0 && a.revokeObjectURL(l), h.userData.mimeType = o.mimeType || Tx(o.uri), h;
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
      l || (l = new Nh(), Tn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = !1, this.cache.add(a, l)), n = l;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new Uh(), Tn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(a, l)), n = l;
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
      if (a.color = new Be(1, 1, 1), a.opacity = 1, Array.isArray(h.baseColorFactor)) {
        const d = h.baseColorFactor;
        a.color.setRGB(d[0], d[1], d[2], Lt), a.opacity = d[3];
      }
      h.baseColorTexture !== void 0 && c.push(t.assignTexture(a, "map", h.baseColorTexture, _t)), a.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, a.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(a, "metalnessMap", h.metallicRoughnessTexture)), c.push(t.assignTexture(a, "roughnessMap", h.metallicRoughnessTexture))), o = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, a);
      })));
    }
    r.doubleSided === !0 && (a.side = Mn);
    const u = r.alphaMode || ua.OPAQUE;
    if (u === ua.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, u === ua.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && o !== Si && (c.push(t.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new Je(1, 1), r.normalTexture.scale !== void 0)) {
      const h = r.normalTexture.scale;
      a.normalScale.set(h, h);
    }
    if (r.occlusionTexture !== void 0 && o !== Si && (c.push(t.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && o !== Si) {
      const h = r.emissiveFactor;
      a.emissive = new Be().setRGB(h[0], h[1], h[2], Lt);
    }
    return r.emissiveTexture !== void 0 && o !== Si && c.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, _t)), Promise.all(c).then(function() {
      const h = new o(a);
      return r.name && (h.name = r.name), Kn(h, r), t.associations.set(h, { materials: e }), r.extensions && hi(i, h, r), h;
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
        return mu(l, a, t);
      });
    }
    const o = [];
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], u = Ax(c), h = i[u];
      if (h)
        o.push(h.promise);
      else {
        let d;
        c.extensions && c.extensions[$e.KHR_DRACO_MESH_COMPRESSION] ? d = r(c) : d = mu(new vn(), c, t), i[u] = { primitive: c, promise: d }, o.push(d);
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
      const u = o[l].material === void 0 ? Ex(this.cache) : this.getDependency("material", o[l].material);
      a.push(u);
    }
    return a.push(t.loadGeometries(o)), Promise.all(a).then(function(l) {
      const c = l.slice(0, l.length - 1), u = l[l.length - 1], h = [];
      for (let m = 0, g = u.length; m < g; m++) {
        const _ = u[m], f = o[m];
        let p;
        const x = c[m];
        if (f.mode === rn.TRIANGLES || f.mode === rn.TRIANGLE_STRIP || f.mode === rn.TRIANGLE_FAN || f.mode === void 0)
          p = r.isSkinnedMesh === !0 ? new dy(_, x) : new Ge(_, x), p.isSkinnedMesh === !0 && p.normalizeSkinWeights(), f.mode === rn.TRIANGLE_STRIP ? p.geometry = hu(p.geometry, uh) : f.mode === rn.TRIANGLE_FAN && (p.geometry = hu(p.geometry, Ta));
        else if (f.mode === rn.LINES)
          p = new _y(_, x);
        else if (f.mode === rn.LINE_STRIP)
          p = new nl(_, x);
        else if (f.mode === rn.LINE_LOOP)
          p = new vy(_, x);
        else if (f.mode === rn.POINTS)
          p = new yy(_, x);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + f.mode);
        Object.keys(p.geometry.morphAttributes).length > 0 && Mx(p, r), p.name = t.createUniqueName(r.name || "mesh_" + e), Kn(p, r), f.extensions && hi(i, p, f), t.assignFinalMaterial(p), h.push(p);
      }
      for (let m = 0, g = h.length; m < g; m++)
        t.associations.set(h[m], {
          meshes: e,
          primitives: m
        });
      if (h.length === 1)
        return r.extensions && hi(i, h[0], r), h[0];
      const d = new Mi();
      r.extensions && hi(i, d, r), t.associations.set(d, { meshes: e });
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
    return n.type === "perspective" ? t = new Gt(nm.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Za(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Kn(t, n), Promise.resolve(t);
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
      return new tl(a, l);
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
      const m = i.channels[h], g = i.samplers[m.sampler], _ = m.target, f = _.node, p = i.parameters !== void 0 ? i.parameters[g.input] : g.input, x = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      _.node !== void 0 && (o.push(this.getDependency("node", f)), a.push(this.getDependency("accessor", p)), l.push(this.getDependency("accessor", x)), c.push(g), u.push(_));
    }
    return Promise.all([
      Promise.all(o),
      Promise.all(a),
      Promise.all(l),
      Promise.all(c),
      Promise.all(u)
    ]).then(function(h) {
      const d = h[0], m = h[1], g = h[2], _ = h[3], f = h[4], p = [];
      for (let x = 0, y = d.length; x < y; x++) {
        const b = d[x], C = m[x], w = g[x], R = _[x], G = f[x];
        if (b === void 0) continue;
        b.updateMatrix && b.updateMatrix();
        const E = n._createAnimationTracks(b, C, w, R, G);
        if (E)
          for (let T = 0; T < E.length; T++)
            p.push(E[T]);
      }
      return new Ia(r, void 0, p);
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
        m.isSkinnedMesh && m.bind(d, bx);
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
      if (r.isBone === !0 ? u = new Dh() : c.length > 1 ? u = new Mi() : c.length === 1 ? u = c[0] : u = new vt(), u !== c[0])
        for (let h = 0, d = c.length; h < d; h++)
          u.add(c[h]);
      if (r.name && (u.userData.name = r.name, u.name = o), Kn(u, r), r.extensions && hi(n, u, r), r.matrix !== void 0) {
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
    const t = this.extensions, n = this.json.scenes[e], i = this, r = new Mi();
    n.name && (r.name = i.createUniqueName(n.name)), Kn(r, n), n.extensions && hi(t, r, n);
    const o = n.nodes || [], a = [];
    for (let l = 0, c = o.length; l < c; l++)
      a.push(i.getDependency("node", o[l]));
    return Promise.all(a).then(function(l) {
      for (let u = 0, h = l.length; u < h; u++)
        r.add(l[u]);
      const c = (u) => {
        const h = /* @__PURE__ */ new Map();
        for (const [d, m] of i.associations)
          (d instanceof Tn || d instanceof Dt) && h.set(d, m);
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
    Xn[r.path] === Xn.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && l.push(d.name ? d.name : d.uuid);
    }) : l.push(a);
    let c;
    switch (Xn[r.path]) {
      case Xn.weights:
        c = _s;
        break;
      case Xn.rotation:
        c = Ii;
        break;
      case Xn.position:
      case Xn.scale:
        c = vs;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = _s;
            break;
          case 2:
          case 3:
          default:
            c = vs;
            break;
        }
        break;
    }
    const u = i.interpolation !== void 0 ? xx[i.interpolation] : ps, h = this._getArrayFromAccessor(n);
    for (let d = 0, m = l.length; d < m; d++) {
      const g = new c(
        l[d] + "." + Xn[r.path],
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
      const n = Fa(t.constructor), i = new Float32Array(t.length);
      for (let r = 0, o = t.length; r < o; r++)
        i[r] = t[r] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof Ii ? yx : Hh;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function Rx(s, e, t) {
  const n = e.attributes, i = new Vn();
  if (n.POSITION !== void 0) {
    const a = t.json.accessors[n.POSITION], l = a.min, c = a.max;
    if (l !== void 0 && c !== void 0) {
      if (i.set(
        new N(l[0], l[1], l[2]),
        new N(c[0], c[1], c[2])
      ), a.normalized) {
        const u = Fa(ls[a.componentType]);
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
            const _ = Fa(ls[d.componentType]);
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
  const o = new bn();
  i.getCenter(o.center), o.radius = i.min.distanceTo(i.max) / 2, s.boundingSphere = o;
}
function mu(s, e, t) {
  const n = e.attributes, i = [];
  function r(o, a) {
    return t.getDependency("accessor", o).then(function(l) {
      s.setAttribute(a, l);
    });
  }
  for (const o in n) {
    const a = Oa[o] || o.toLowerCase();
    a in s.attributes || i.push(r(n[o], a));
  }
  if (e.indices !== void 0 && !s.index) {
    const o = t.getDependency("accessor", e.indices).then(function(a) {
      s.setIndex(a);
    });
    i.push(o);
  }
  return st.workingColorSpace !== Lt && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`), Kn(s, e), Rx(s, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? Sx(s, e.targets, t) : s;
  });
}
const Kr = {
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
function AS(s) {
  return Kr[s];
}
function Cx(s, e) {
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
  return Lx(t, n, i);
}
function Lx(s, e, t) {
  const n = { time: s.time + (e.time - s.time) * t };
  return (s.leftArm || e.leftArm) && (n.leftArm = gu(s.leftArm, e.leftArm, t)), (s.rightArm || e.rightArm) && (n.rightArm = gu(s.rightArm, e.rightArm, t)), (s.head || e.head) && (n.head = Px(s.head, e.head, t)), (s.body || e.body) && (n.body = Ix(s.body, e.body, t)), n;
}
function gu(s, e, t) {
  const n = { x: 0, y: 0, z: 0 };
  return {
    shoulderRotation: qs(
      (s == null ? void 0 : s.shoulderRotation) || n,
      (e == null ? void 0 : e.shoulderRotation) || n,
      t
    ),
    elbowRotation: qs(
      (s == null ? void 0 : s.elbowRotation) || n,
      (e == null ? void 0 : e.elbowRotation) || n,
      t
    ),
    wristRotation: qs(
      (s == null ? void 0 : s.wristRotation) || n,
      (e == null ? void 0 : e.wristRotation) || n,
      t
    )
  };
}
function Px(s, e, t) {
  var n, i, r, o, a, l;
  return {
    rotation: qs(
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
function Ix(s, e, t) {
  var n, i, r, o, a, l;
  return {
    rotation: qs(
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
function qs(s, e, t) {
  return {
    x: s.x + (e.x - s.x) * t,
    y: s.y + (e.y - s.y) * t,
    z: s.z + (e.z - s.z) * t
  };
}
const yn = ze({
  currentGesture: "idle",
  intensity: 0,
  progress: 0
}), xn = ze([]), qn = ze(!1);
let Fr = null, _u = 0;
function Gh() {
  const s = Ne(() => yn.value.currentGesture), e = Ne(() => yn.value.intensity), t = Ne(() => yn.value.progress), n = Ne(() => qn.value);
  function i(h, d = 1) {
    const m = Kr[h];
    m && (xn.value.push({
      time: 0,
      type: h,
      intensity: Math.min(1, Math.max(0, d)),
      duration: m.duration
    }), qn.value || o());
  }
  function r(h) {
    xn.value = [...h], h.length > 0 && !qn.value && o();
  }
  function o() {
    if (xn.value.length === 0) {
      qn.value = !1, yn.value = {
        currentGesture: "idle",
        intensity: 0,
        progress: 0
      };
      return;
    }
    const h = xn.value[0];
    yn.value.currentGesture = h.type, yn.value.intensity = h.intensity, _u = performance.now(), qn.value = !0, a();
  }
  function a() {
    if (xn.value.length === 0) {
      qn.value = !1;
      return;
    }
    const h = xn.value[0], d = Kr[h.type], m = (performance.now() - _u) / 1e3, g = Math.min(1, m / h.duration);
    if (yn.value.progress = g, g >= 1) {
      xn.value.shift(), xn.value.length > 0 ? o() : d.loop ? (xn.value.push(h), o()) : (qn.value = !1, yn.value = {
        currentGesture: "idle",
        intensity: 0,
        progress: 0
      });
      return;
    }
    Fr = requestAnimationFrame(a);
  }
  function l() {
    const { currentGesture: h, progress: d, intensity: m } = yn.value, g = Kr[h];
    if (!g)
      return { time: 0 };
    const _ = Cx(g.keyframes, d);
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
    Fr && (cancelAnimationFrame(Fr), Fr = null), xn.value = [], qn.value = !1, yn.value = {
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
const Dx = { class: "liya-ai-env-vuejs-full-body-avatar" }, Ux = /* @__PURE__ */ Zs({
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
    const n = s, i = t, { getCurrentKeyframe: r } = Gh();
    let o = null, a = null, l = [], c = {}, u = null, h = null, d = null, m = null, g = null, _ = null, f = 0, p = !1, x = 0, y = 3e3, b = { x: 0, y: 0 }, C = { x: 0, y: 0 }, w = 0, R = 2e3, G = 0;
    const E = {
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
    function T(H, W) {
      return new Promise((D, K) => {
        new Na().load(
          H,
          (fe) => {
            o = fe.scene, W.add(o), l = [], o.traverse((me) => {
              me instanceof Ge && me.morphTargetInfluences && l.push(me);
            }), z(o), fe.animations.length > 0 && (a = new Ua(o)), i("loaded"), D();
          },
          (fe) => {
            if (fe.total > 0) {
              const me = fe.loaded / fe.total * 100;
              i("progress", me);
            }
          },
          (fe) => {
            i("error", fe), K(fe);
          }
        );
      });
    }
    function z(H) {
      H.traverse((W) => {
        const D = W.name.toLowerCase();
        D.includes("spine") && !u && (u = W), D.includes("head") && !h && (h = W), (D.includes("leftshoulder") || D.includes("left_shoulder")) && (d = W), (D.includes("rightshoulder") || D.includes("right_shoulder")) && (m = W), (D.includes("leftelbow") || D.includes("left_elbow") || D.includes("leftforearm")) && (g = W), (D.includes("rightelbow") || D.includes("right_elbow") || D.includes("rightforearm")) && (_ = W);
      });
    }
    function J(H) {
      var me, ge;
      if (!n.isSpeaking || n.visemes.length === 0) {
        oe();
        return;
      }
      const W = n.currentTime;
      let D = 0;
      for (const le of n.visemes)
        if (W >= le.time && W < le.time + le.duration) {
          D = le.viseme;
          break;
        }
      const K = E[D] || [], re = ((me = n.animationConfig) == null ? void 0 : me.lipSyncIntensity) || 0.5, fe = ((ge = n.animationConfig) == null ? void 0 : ge.lipSyncSpeed) || 0.02;
      for (const le of l)
        if (!(!le.morphTargetDictionary || !le.morphTargetInfluences))
          for (const [he, be] of Object.entries(le.morphTargetDictionary)) {
            const V = K.includes(he) ? re : 0, ft = c[he] || 0, Se = ft + (V - ft) * fe;
            le.morphTargetInfluences[be] = Se, c[he] = Se;
          }
    }
    function oe(H) {
      var D;
      const W = ((D = n.animationConfig) == null ? void 0 : D.lipSyncSpeed) || 0.02;
      for (const K of l)
        if (!(!K.morphTargetDictionary || !K.morphTargetInfluences)) {
          for (const [re, fe] of Object.entries(K.morphTargetDictionary))
            if (re.startsWith("mouth")) {
              const ge = (c[re] || 0) * (1 - W);
              K.morphTargetInfluences[fe] = ge, c[re] = ge;
            }
        }
    }
    function L(H, W) {
      const D = n.animationConfig || {}, K = D.blinkSpeed || 0.25, re = D.blinkIntervalMin || 1500, fe = D.blinkIntervalMax || 3500;
      if (!p && W - f > y && (p = !0, x = 0, f = W, y = re + Math.random() * (fe - re)), p) {
        x += K;
        let me = 0;
        x < 0.5 ? me = x * 2 : me = 1 - (x - 0.5) * 2;
        for (const ge of l) {
          if (!ge.morphTargetDictionary || !ge.morphTargetInfluences) continue;
          const le = ge.morphTargetDictionary.eyeBlinkLeft, he = ge.morphTargetDictionary.eyeBlinkRight;
          le !== void 0 && (ge.morphTargetInfluences[le] = me), he !== void 0 && (ge.morphTargetInfluences[he] = me);
        }
        x >= 1 && (p = !1);
      }
    }
    function I(H, W) {
      const D = n.animationConfig || {}, K = D.eyeMoveSpeed || 0.12, re = D.eyeMoveIntervalMin || 500, fe = D.eyeMoveIntervalMax || 1500, me = D.eyeMoveRange || 0.4;
      W - w > R && (b = {
        x: (Math.random() - 0.5) * me,
        y: (Math.random() - 0.5) * me * 0.5
      }, w = W, R = re + Math.random() * (fe - re)), C.x += (b.x - C.x) * K, C.y += (b.y - C.y) * K;
      for (const ge of l) {
        if (!ge.morphTargetDictionary || !ge.morphTargetInfluences) continue;
        const le = ge.morphTargetDictionary.eyeLookOutLeft, he = ge.morphTargetDictionary.eyeLookOutRight, be = ge.morphTargetDictionary.eyeLookUpLeft, V = ge.morphTargetDictionary.eyeLookDownLeft;
        C.x > 0 && he !== void 0 && (ge.morphTargetInfluences[he] = C.x), C.x < 0 && le !== void 0 && (ge.morphTargetInfluences[le] = -C.x), C.y > 0 && be !== void 0 && (ge.morphTargetInfluences[be] = C.y), C.y < 0 && V !== void 0 && (ge.morphTargetInfluences[V] = -C.y);
      }
    }
    function U(H, W) {
      const D = n.animationConfig || {}, K = D.breathingSpeed || 0.4, re = D.breathingIntensity || 0.015;
      G += H * K;
      const fe = Math.sin(G) * re;
      u && (u.position.y += fe * 0.01);
    }
    function ee(H) {
      var D, K, re, fe;
      const W = r();
      W.leftArm && d && W.leftArm.shoulderRotation && (d.rotation.x = W.leftArm.shoulderRotation.x, d.rotation.y = W.leftArm.shoulderRotation.y, d.rotation.z = W.leftArm.shoulderRotation.z), W.rightArm && m && W.rightArm.shoulderRotation && (m.rotation.x = W.rightArm.shoulderRotation.x, m.rotation.y = W.rightArm.shoulderRotation.y, m.rotation.z = W.rightArm.shoulderRotation.z), (D = W.leftArm) != null && D.elbowRotation && g && (g.rotation.x = W.leftArm.elbowRotation.x), (K = W.rightArm) != null && K.elbowRotation && _ && (_.rotation.x = W.rightArm.elbowRotation.x), (re = W.head) != null && re.rotation && h && (h.rotation.x = W.head.rotation.x, h.rotation.y = W.head.rotation.y, h.rotation.z = W.head.rotation.z), (fe = W.body) != null && fe.lean && u && (u.rotation.x = W.body.lean.x, u.rotation.z = W.body.lean.z);
    }
    function O(H, W) {
      o && (a && a.update(H), J(), L(H, W), I(H, W), U(H), ee());
    }
    function B() {
      return o;
    }
    function Q() {
      o && o.traverse((H) => {
        var W, D;
        H instanceof Ge && ((W = H.geometry) == null || W.dispose(), Array.isArray(H.material) ? H.material.forEach((K) => K.dispose()) : (D = H.material) == null || D.dispose());
      }), a = null, l = [];
    }
    return e({
      loadModel: T,
      update: O,
      getModel: B,
      dispose: Q
    }), (H, W) => (Qe(), tt("div", Dx, [
      $h(H.$slots, "default", {}, void 0, !0)
    ]));
  }
}), yo = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [n, i] of e)
    t[n] = i;
  return t;
}, TS = /* @__PURE__ */ yo(Ux, [["__scopeId", "data-v-bc74c771"]]), Nx = {
  key: 0,
  class: "liya-ai-env-vuejs-board liya-ai-env-vuejs-presentation-board"
}, Ox = ["src", "alt"], Fx = { class: "liya-ai-env-vuejs-presentation-board__info" }, Bx = {
  key: 1,
  class: "liya-ai-env-vuejs-loading"
}, Vx = { class: "liya-ai-env-vuejs-loading__progress" }, kx = /* @__PURE__ */ Zs({
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
    const t = s, n = Ne(() => {
      var v;
      return !!((v = t.presentationResult) != null && v.page_image_url);
    }), i = Ne(() => {
      var P;
      return (((P = t.presentationResult) == null ? void 0 : P.page_image_url) || "").replace(/^http:\/\//i, "https://");
    }), r = Ne(() => t.presentationResult ? `${t.presentationResult.presentation_title} — ${t.presentationResult.page_number}/${t.presentationResult.total_pages}` : ""), o = e, { getCurrentKeyframe: a, setGesturesFromApi: l } = Gh(), c = ze(null), u = ze(!0), h = ze(0);
    let d = null, m = null, g = null, _ = null, f = null, p = null, x = null, y = null, b = [], C = {}, w = null, R = null, G = null, E = null, T = null, z = null;
    const J = typeof navigator < "u" && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    let oe = !1, L = 0, I = !1, U = 0, ee = 3e3, O = { x: 0, y: 0 }, B = { x: 0, y: 0 }, Q = 0, H = 2e3, W = 0;
    const D = {
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
    fn(() => t.gestures, (v) => {
      v && v.length > 0 && l(v);
    }, { deep: !0 }), fn(() => t.avatarModelUrl, (v) => {
      v && d && !x && me(v);
    });
    function K() {
      if (!c.value) return;
      d = new cy(), d.background = new Be(1710638);
      const { position: v, lookAt: P, fov: q } = t.cameraConfig, $ = c.value.clientWidth / c.value.clientHeight;
      m = new Gt(q || 45, $, 0.1, 1e3), m.position.set(v.x, v.y, v.z), m.lookAt(P.x, P.y, P.z), g = new Ih({
        antialias: !J,
        // Safari: disable antialiasing for performance
        alpha: !0,
        powerPreference: J ? "low-power" : "high-performance",
        preserveDrawingBuffer: J
        // Safari: required for WebGL stability
      }), g.setSize(
        c.value.clientWidth,
        c.value.clientHeight
      );
      const te = J ? 1.5 : 2;
      g.setPixelRatio(Math.min(window.devicePixelRatio, te)), g.outputColorSpace = _t, g.toneMapping = eh, g.toneMappingExposure = 1.2, g.shadowMap.enabled = !J, g.shadowMap.type = Zu, c.value.appendChild(g.domElement), re(), _ = new Fy(), fe(), window.addEventListener("resize", Pe), oe = !0, be();
    }
    function re() {
      if (!d) return;
      const v = new Ny(8951976, 0.7);
      d.add(v);
      const P = new Da(14740212, 1.1);
      P.position.set(2, 6, 3), P.castShadow = !0, P.shadow.mapSize.width = 2048, P.shadow.mapSize.height = 2048, P.shadow.camera.near = 0.5, P.shadow.camera.far = 50, P.shadow.camera.left = -10, P.shadow.camera.right = 10, P.shadow.camera.top = 8, P.shadow.camera.bottom = -4, P.shadow.bias = -1e-3, d.add(P);
      const q = new Da(9478320, 0.5);
      q.position.set(-5, 3, 2), d.add(q);
      const $ = new kh(15791868, 1.1, 12, Math.PI / 5, 0.6, 1);
      $.position.set(0, 5.4, -1), $.target.position.set(0, 2.5, -3.9), d.add($), d.add($.target);
      const te = new Hs(54442, 0.35, 10, 2);
      te.position.set(-6, 1.5, -3), d.add(te);
      const ae = new Hs(54442, 0.35, 10, 2);
      ae.position.set(6, 1.5, -3), d.add(ae);
      const ne = new Hs(47252, 0.25, 15, 2);
      ne.position.set(0, 5.5, -2), d.add(ne);
      const ce = new Hs(8427696, 0.3, 10, 2);
      ce.position.set(0, 0.2, -1), d.add(ce);
    }
    async function fe() {
      const v = new Na();
      let P = 0, q = 0;
      if (t.classroomModelUrl && q++, t.avatarModelUrl && q++, q === 0) {
        ge(), u.value = !1, o("loaded");
        return;
      }
      try {
        t.classroomModelUrl ? await new Promise(($, te) => {
          v.load(
            t.classroomModelUrl,
            (ae) => {
              p = ae.scene, p.traverse((ne) => {
                ne instanceof Ge && (ne.castShadow = !0, ne.receiveShadow = !0);
              }), d == null || d.add(p), P += 50, h.value = P, o("progress", P), $();
            },
            (ae) => {
              if (ae.total > 0) {
                const ne = ae.loaded / ae.total * 50;
                h.value = ne, o("progress", ne);
              }
            },
            (ae) => te(ae)
          );
        }) : (ge(), P += 50), t.avatarModelUrl && await new Promise(($, te) => {
          v.load(
            t.avatarModelUrl,
            (ae) => {
              x = ae.scene;
              const ne = t.avatarPosition;
              x.position.set(ne.x, ne.y, ne.z), x.traverse((ce) => {
                ce instanceof Ge && (ce.castShadow = !0, ce.receiveShadow = !0, ce.morphTargetInfluences && b.push(ce));
              }), le(x), ae.animations.length > 0 && (y = new Ua(x)), d == null || d.add(x), P += 50, h.value = P, o("progress", P), $();
            },
            (ae) => {
              if (ae.total > 0) {
                const ne = 50 + ae.loaded / ae.total * 50;
                h.value = ne, o("progress", ne);
              }
            },
            (ae) => te(ae)
          );
        }), u.value = !1, o("loaded");
      } catch ($) {
        o("error", $), u.value = !1;
      }
    }
    async function me(v) {
      if (!d || x) return;
      const P = new Na();
      try {
        await new Promise((q, $) => {
          P.load(
            v,
            (te) => {
              x = te.scene, x.position.set(-1.8, 0, 0.8);
              const ae = t.cameraConfig.position, ne = x.position;
              x.rotation.y = Math.atan2(
                ae.x - ne.x,
                ae.z - ne.z
              ), x.scale.set(1.1, 1.1, 1.1), x.traverse((ce) => {
                ce instanceof Ge && (ce.castShadow = !0, ce.receiveShadow = !0, ce.morphTargetInfluences && b.push(ce));
              }), le(x), te.animations.length > 0 && (y = new Ua(x)), d.add(x), q();
            },
            void 0,
            (te) => {
              $(te);
            }
          );
        });
      } catch {
      }
    }
    function ge() {
      if (!d) return;
      const v = new Ht({
        color: 14212324,
        roughness: 0.45,
        metalness: 0.25
      }), P = new Ht({
        color: 13160668,
        roughness: 0.4,
        metalness: 0.3
      }), q = new Ht({
        color: 12635352,
        roughness: 0.04,
        metalness: 0.5
      }), $ = new Ht({
        color: 13687008,
        roughness: 0.5,
        metalness: 0.2
      }), te = new Ht({
        color: 54442,
        emissive: 54442,
        emissiveIntensity: 0.6,
        roughness: 0.1,
        metalness: 0.3
      }), ae = new Ht({
        color: 47252,
        emissive: 47252,
        emissiveIntensity: 0.3,
        roughness: 0.15,
        metalness: 0.25
      }), ne = new Ht({
        color: 7899288,
        roughness: 0.08,
        metalness: 0.5
      }), ce = new Ht({
        color: 13160668,
        roughness: 0.08,
        metalness: 0.45
      }), _e = new Ht({
        color: 13687012,
        roughness: 0.25,
        metalness: 0.3
      }), Ce = new $n(16, 12), se = new Ge(Ce, q);
      se.rotation.x = -Math.PI / 2, se.position.y = 0, se.receiveShadow = !0, d.add(se);
      const Ze = new Ge(
        new gt(12, 3e-3, 0.02),
        ae
      );
      Ze.position.set(0, 2e-3, -3.2), d.add(Ze);
      const Ve = new $n(16, 6), we = new Ge(Ve, v);
      we.position.set(0, 3, -4), we.receiveShadow = !0, d.add(we);
      const Me = new Ge(
        new gt(16, 1.5, 0.03),
        P
      );
      Me.position.set(0, 0.75, -3.97), d.add(Me);
      const xe = new $n(10, 6), Le = new Ge(xe, v.clone());
      Le.position.set(-8, 3, 1), Le.rotation.y = Math.PI / 2, Le.receiveShadow = !0, d.add(Le);
      const et = new Ge(
        new gt(14, 0.02, 0.015),
        te
      );
      et.position.set(0, 5.1, -3.96), d.add(et);
      const rt = new Ge(
        new gt(14, 0.015, 0.015),
        te
      );
      rt.position.set(0, 1.52, -3.96), d.add(rt);
      const Oe = new Ge(
        new gt(0.015, 3.6, 0.015),
        ae
      );
      Oe.position.set(-7, 3.3, -3.96), d.add(Oe);
      const k = Oe.clone();
      k.position.set(7, 3.3, -3.96), d.add(k);
      const M = new Ge(
        new gt(6.2, 3.4, 0.06),
        ne
      );
      M.position.set(0, 2.85, -3.92), M.castShadow = !0, d.add(M);
      const ie = new $n(5.8, 3.1), de = new Ht({
        color: 16119280,
        emissive: 15790316,
        emissiveIntensity: 0.15,
        roughness: 0.05,
        metalness: 0.02
      }), Re = new Ge(ie, de);
      Re.position.set(0, 2.85, -3.88), d.add(Re);
      const Te = new gt(6.25, 0.04, 0.08), nt = new gt(0.04, 3.45, 0.08), at = [
        { geo: Te, pos: [0, 4.575, -3.9] },
        { geo: Te, pos: [0, 1.125, -3.9] },
        { geo: nt, pos: [-3.125, 2.85, -3.9] },
        { geo: nt, pos: [3.125, 2.85, -3.9] }
      ];
      for (const pt of at) {
        const S = new Ge(pt.geo, ce);
        S.position.set(pt.pos[0], pt.pos[1], pt.pos[2]), d.add(S);
      }
      const Et = new gt(6, 0.01, 0.01), bt = new gt(0.01, 3.2, 0.01), lt = [
        { geo: Et, pos: [0, 4.42, -3.87] },
        { geo: Et, pos: [0, 1.28, -3.87] },
        { geo: bt, pos: [-2.98, 2.85, -3.87] },
        { geo: bt, pos: [2.98, 2.85, -3.87] }
      ];
      for (const pt of lt) {
        const S = new Ge(pt.geo, ae);
        S.position.set(pt.pos[0], pt.pos[1], pt.pos[2]), d.add(S);
      }
      for (let pt = 0; pt < 3; pt++) {
        const S = new Ge(
          new gt(0.6, 2.5, 0.02),
          _e
        );
        S.position.set(-5.5 + pt * 0.75, 3, -3.97), d.add(S);
      }
      for (let pt = 0; pt < 3; pt++) {
        const S = new Ge(
          new gt(0.6, 2.5, 0.02),
          _e
        );
        S.position.set(4.75 + pt * 0.75, 3, -3.97), d.add(S);
      }
      const Pt = new Ht({
        color: 12109008,
        roughness: 0.08,
        metalness: 0.45
      }), Vt = new Ge(
        new gt(1.8, 0.04, 0.7),
        Pt
      );
      Vt.position.set(3.5, 0.75, -2.5), Vt.castShadow = !0, Vt.receiveShadow = !0, d.add(Vt);
      const Ts = new Ge(
        new gt(1.8, 8e-3, 8e-3),
        ae
      );
      Ts.position.set(3.5, 0.73, -2.15), d.add(Ts);
      const bs = new Ge(
        new oo(0.04, 0.06, 0.73, 12),
        ce
      );
      bs.position.set(3.5, 0.365, -2.5), bs.castShadow = !0, d.add(bs);
      const ni = new Ge(
        new oo(0.25, 0.25, 0.02, 16),
        ce
      );
      ni.position.set(3.5, 0.01, -2.5), d.add(ni);
      const Ni = new Ge(
        new gt(5, 0.05, 3),
        P
      );
      Ni.position.set(-0.5, 0.025, -2.5), Ni.receiveShadow = !0, d.add(Ni);
      const ii = new Ge(
        new gt(5, 0.01, 0.01),
        te
      );
      ii.position.set(-0.5, 0.045, -1), d.add(ii);
      const or = new $n(16, 12), Oi = new Ge(or, $);
      Oi.rotation.x = Math.PI / 2, Oi.position.set(0, 5.6, 0), d.add(Oi);
      const ar = new Ge(
        new gt(14, 0.01, 0.01),
        ae
      );
      ar.position.set(0, 5.55, -3.96), d.add(ar);
      const xo = new Ht({
        color: 13689072,
        emissive: 12638440,
        emissiveIntensity: 0.3,
        roughness: 0.1
      });
      for (let pt = -1; pt <= 1; pt += 2) {
        const S = new Ge(
          new gt(0.08, 0.01, 4),
          xo
        );
        S.position.set(pt * 5, 5.58, -1), d.add(S);
      }
      d.background = new Be(8951976);
    }
    function le(v) {
      const P = [];
      v.traverse((q) => {
        const $ = q.name.toLowerCase();
        P.push(q.name), $.includes("spine") && !w && (w = q), $.includes("head") && !R && (R = q), $.includes("leftshoulder") && !G && (G = q), ($.includes("leftarm") || $.includes("left_arm") || $.includes("leftupperarm")) && !T && (T = q), $.includes("rightshoulder") && !E && (E = q), ($.includes("rightarm") || $.includes("right_arm") || $.includes("rightupperarm")) && !z && (z = q);
      });
    }
    function he() {
    }
    function be() {
      if (!oe || (f = requestAnimationFrame(be), !_ || !g || !d || !m)) return;
      const v = _.getDelta(), P = _.getElapsedTime() * 1e3;
      y && y.update(v), x && (V(), Se(v, P), Ue(v, P), Ee(v), ot()), g.render(d, m);
    }
    function V(v) {
      var ne, ce;
      if (!t.isSpeaking || t.visemes.length === 0) {
        ft();
        return;
      }
      const P = t.currentTime;
      let q = 0;
      for (const _e of t.visemes)
        if (P >= _e.time && P < _e.time + _e.duration) {
          q = _e.viseme;
          break;
        }
      const $ = D[q] || [], te = ((ne = t.animationConfig) == null ? void 0 : ne.lipSyncIntensity) || 0.5, ae = ((ce = t.animationConfig) == null ? void 0 : ce.lipSyncSpeed) || 0.02;
      for (const _e of b)
        if (!(!_e.morphTargetDictionary || !_e.morphTargetInfluences))
          for (const [Ce, se] of Object.entries(_e.morphTargetDictionary)) {
            const Ze = $.includes(Ce) ? te : 0, Ve = C[Ce] || 0, we = Ve + (Ze - Ve) * ae;
            _e.morphTargetInfluences[se] = we, C[Ce] = we;
          }
    }
    function ft(v) {
      for (const q of b)
        if (!(!q.morphTargetDictionary || !q.morphTargetInfluences)) {
          for (const [$, te] of Object.entries(q.morphTargetDictionary))
            if ($.startsWith("mouth")) {
              const ne = (C[$] || 0) * (1 - 0.02);
              q.morphTargetInfluences[te] = ne, C[$] = ne;
            }
        }
    }
    function Se(v, P) {
      if (!I && P - L > ee && (I = !0, U = 0, L = P, ee = 1500 + Math.random() * 2e3), I) {
        U += 0.25;
        let ae = 0;
        U < 0.5 ? ae = U * 2 : ae = 1 - (U - 0.5) * 2;
        for (const ne of b) {
          if (!ne.morphTargetDictionary || !ne.morphTargetInfluences) continue;
          const ce = ne.morphTargetDictionary.eyeBlinkLeft, _e = ne.morphTargetDictionary.eyeBlinkRight;
          ce !== void 0 && (ne.morphTargetInfluences[ce] = ae), _e !== void 0 && (ne.morphTargetInfluences[_e] = ae);
        }
        U >= 1 && (I = !1);
      }
    }
    function Ue(v, P) {
      P - Q > H && (O = {
        x: (Math.random() - 0.5) * 0.4,
        y: (Math.random() - 0.5) * 0.4 * 0.5
      }, Q = P, H = 500 + Math.random() * 1e3), B.x += (O.x - B.x) * 0.12, B.y += (O.y - B.y) * 0.12;
      for (const ne of b) {
        if (!ne.morphTargetDictionary || !ne.morphTargetInfluences) continue;
        const ce = ne.morphTargetDictionary.eyeLookOutLeft, _e = ne.morphTargetDictionary.eyeLookOutRight, Ce = ne.morphTargetDictionary.eyeLookUpLeft, se = ne.morphTargetDictionary.eyeLookDownLeft;
        B.x > 0 && _e !== void 0 && (ne.morphTargetInfluences[_e] = B.x), B.x < 0 && ce !== void 0 && (ne.morphTargetInfluences[ce] = -B.x), B.y > 0 && Ce !== void 0 && (ne.morphTargetInfluences[Ce] = B.y), B.y < 0 && se !== void 0 && (ne.morphTargetInfluences[se] = -B.y);
      }
    }
    function Ee(v, P) {
      W += v * 0.4;
      const te = Math.sin(W) * 0.015;
      w && (w.position.y += te * 0.01);
    }
    function ot(v, P) {
      var $, te;
      const q = a();
      ($ = q.head) != null && $.rotation && R && R.rotation.set(
        q.head.rotation.x,
        q.head.rotation.y,
        q.head.rotation.z
      ), (te = q.body) != null && te.lean && w && (w.rotation.x = q.body.lean.x, w.rotation.z = q.body.lean.z);
    }
    function Pe() {
      if (!c.value || !m || !g) return;
      const v = c.value.clientWidth, P = c.value.clientHeight;
      m.aspect = v / P, m.updateProjectionMatrix(), g.setSize(v, P);
    }
    function A() {
      oe = !1, f && (cancelAnimationFrame(f), f = null), window.removeEventListener("resize", Pe);
      const v = (P) => {
        P.traverse((q) => {
          var $, te;
          q instanceof Ge && (($ = q.geometry) == null || $.dispose(), Array.isArray(q.material) ? q.material.forEach((ae) => ae.dispose()) : (te = q.material) == null || te.dispose());
        });
      };
      p && v(p), x && v(x), g && (g.dispose(), g.forceContextLoss(), c.value && g.domElement.parentNode === c.value && c.value.removeChild(g.domElement)), d = null, m = null, g = null, p = null, x = null, y = null, b = [], C = {}, w = null, R = null, G = null, E = null, T = null, z = null;
    }
    return Ba(() => {
      K();
    }), Qs(() => {
      A();
    }), (v, P) => (Qe(), tt("div", {
      ref_key: "liyaAiEnvVuejsContainerRef",
      ref: c,
      class: "liya-ai-env-vuejs-classroom-scene"
    }, [
      n.value ? (Qe(), tt("div", Nx, [
        ue("img", {
          src: i.value,
          alt: r.value,
          class: "liya-ai-env-vuejs-presentation-board__image"
        }, null, 8, Ox),
        ue("div", Fx, dt(r.value), 1),
        P[0] || (P[0] = ue("div", { class: "liya-ai-env-vuejs-board__frame" }, null, -1))
      ])) : Xt("", !0),
      u.value ? (Qe(), tt("div", Bx, [
        P[1] || (P[1] = ue("div", { class: "liya-ai-env-vuejs-loading__spinner" }, null, -1)),
        P[2] || (P[2] = ue("p", { class: "liya-ai-env-vuejs-loading__text" }, "Ortam yükleniyor...", -1)),
        ue("div", Vx, [
          ue("div", {
            class: "liya-ai-env-vuejs-loading__progress-bar",
            style: Jh({ width: `${h.value}%` })
          }, null, 4)
        ])
      ])) : Xt("", !0)
    ], 512));
  }
}), Wh = /* @__PURE__ */ yo(kx, [["__scopeId", "data-v-3d69d89b"]]), Ke = ze({
  isOpen: !1,
  isLoading: !0,
  isReady: !1,
  isSpeaking: !1,
  isListening: !1,
  isProcessing: !1,
  currentMessage: "",
  error: null,
  loadProgress: 0
}), jt = ze([]), vu = ze(null), es = ze([]), Br = ze([]), di = ze(0), da = ze(null), fa = ze(null);
let en = null, yu = 0, fi = null, xu = 0;
const zx = 3;
async function Hx() {
  const s = window.__liyaAiEnvAudioContext;
  if (s && s.state !== "closed") {
    if (s.state === "running")
      return s;
    if (s.state === "suspended")
      try {
        const t = s.resume(), n = new Promise(
          (i, r) => setTimeout(() => r(new Error("AudioContext resume timeout")), 2e3)
        );
        await Promise.race([t, n]);
      } catch {
      }
    return s;
  }
  if (xu >= zx)
    return console.warn("[LiyaAiEnv] Max AudioContext creation attempts reached"), null;
  xu++;
  const e = window.AudioContext || window.webkitAudioContext;
  if (window.__liyaAiEnvAudioContext = new e(), window.__liyaAiEnvAudioContext.state === "suspended")
    try {
      const t = window.__liyaAiEnvAudioContext.resume(), n = new Promise(
        (i, r) => setTimeout(() => r(new Error("AudioContext resume timeout")), 2e3)
      );
      await Promise.race([t, n]);
    } catch {
    }
  return window.__liyaAiEnvAudioContext;
}
function jh() {
  const s = Ne(() => Ke.value.isOpen), e = Ne(() => Ke.value.isLoading), t = Ne(() => Ke.value.isReady), n = Ne(() => Ke.value.isSpeaking), i = Ne(() => Ke.value.isListening), r = Ne(() => Ke.value.isProcessing), o = Ne(() => Ke.value.currentMessage), a = Ne(() => Ke.value.error), l = Ne(() => Ke.value.loadProgress), c = Ne(() => jt.value), u = Ne(() => es.value), h = Ne(() => Br.value), d = Ne(() => di.value), m = Ne(() => da.value);
  function g() {
    Ke.value.isOpen = !0;
  }
  function _() {
    E(), Ke.value.isOpen = !1, Ke.value.isSpeaking = !1, Ke.value.isListening = !1;
  }
  function f(I) {
    Ke.value.isLoading = I;
  }
  function p(I) {
    Ke.value.isReady = I, I && (Ke.value.isLoading = !1);
  }
  function x(I) {
    Ke.value.loadProgress = Math.min(100, Math.max(0, I));
  }
  function y(I) {
    Ke.value.error = I;
  }
  function b(I) {
    try {
      const U = JSON.parse(I);
      if (typeof (U == null ? void 0 : U.response) == "string")
        return U.response;
      if (typeof (U == null ? void 0 : U.answer) == "string")
        return U.answer;
    } catch {
      const U = I.match(/"(?:response|answer)"\s*:\s*"((?:[^"\\]|\\.)*)"/);
      if (U)
        try {
          return JSON.parse(`"${U[1]}"`);
        } catch {
          return U[1];
        }
    }
    return I;
  }
  async function C(I) {
    var ee;
    if (!I.trim() || Ke.value.isProcessing) return;
    Ke.value.isProcessing = !0, Ke.value.currentMessage = I, Ke.value.error = null;
    const U = {
      id: `temp-user-${Date.now()}`,
      content: I.trim(),
      role: "user",
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    jt.value.push(U);
    try {
      const O = await Nf(
        I,
        vu.value || void 0
      );
      if (O) {
        if (O.session_id && (vu.value = O.session_id), O.user_message) {
          const Q = jt.value.findIndex((H) => H.id === U.id);
          Q !== -1 && (jt.value[Q] = O.user_message);
        }
        if (O.assistant_message) {
          if (O.suggestions && O.suggestions.length > 0)
            try {
              const Q = JSON.parse(O.assistant_message.content);
              Q.suggestions || (Q.suggestions = O.suggestions), O.assistant_message.content = JSON.stringify(Q);
            } catch {
              O.assistant_message.content = JSON.stringify({
                response: O.assistant_message.content,
                suggestions: O.suggestions
              });
            }
          jt.value.push(O.assistant_message);
        } else if (O.response) {
          let Q = O.response;
          O.suggestions && O.suggestions.length > 0 && (Q = JSON.stringify({
            response: O.response,
            suggestions: O.suggestions
          })), jt.value.push({
            id: `msg-${Date.now()}`,
            content: Q,
            role: "assistant",
            created_at: (/* @__PURE__ */ new Date()).toISOString()
          });
        }
        if (O.presentation_result && O.presentation_result.success) {
          const Q = { ...O.presentation_result };
          if (Q.page_image_url)
            try {
              const H = xs(), W = H.apiUrl.replace(/\/$/, ""), D = Q.page_image_url.startsWith("http") ? Q.page_image_url : `${W}${Q.page_image_url}`, K = D.includes("?") ? "&" : "?";
              Q.page_image_url = `${D}${K}api_key=${H.apiKey}`;
            } catch {
            }
          da.value = Q;
        }
        const B = O.response || b(
          ((ee = O.assistant_message) == null ? void 0 : ee.content) || ""
        );
        B && await w(B);
      }
    } catch (O) {
      O instanceof qu && O.code && (fa.value = O.code), Ke.value.error = "Mesaj gönderilemedi", jt.value = jt.value.filter((B) => B.id !== U.id);
    } finally {
      Ke.value.isProcessing = !1, Ke.value.currentMessage = "";
    }
  }
  async function w(I) {
    try {
      const U = await Of(I, {
        include_audio: !0,
        include_gestures: !0
      });
      U && (es.value = U.visemes || [], Br.value = U.gestures || [], U.audio_base64 ? await R(U.audio_base64) : G(I));
    } catch {
      G(I);
    }
  }
  async function R(I) {
    try {
      const U = atob(I), ee = U.length, O = new ArrayBuffer(ee), B = new Uint8Array(O);
      for (let K = 0; K < ee; K++)
        B[K] = U.charCodeAt(K);
      const Q = await Hx();
      if (!Q) {
        G(I.substring(0, 100));
        return;
      }
      const H = await new Promise((K, re) => {
        Q.decodeAudioData(
          O,
          (fe) => K(fe),
          (fe) => re(fe || new Error("Audio decode failed"))
        );
      });
      E(), en = Q.createBufferSource(), en.buffer = H, en.connect(Q.destination), Ke.value.isSpeaking = !0, yu = Q.currentTime;
      const W = () => {
        Ke.value.isSpeaking && Q && (di.value = Q.currentTime - yu, requestAnimationFrame(W));
      };
      W();
      const D = H.duration * 1e3;
      fi = setTimeout(() => {
        Ke.value.isSpeaking && (Ke.value.isSpeaking = !1, di.value = 0, es.value = [], Br.value = []);
      }, D + 500), en.onended = () => {
        fi && (clearTimeout(fi), fi = null), Ke.value.isSpeaking = !1, di.value = 0, es.value = [], Br.value = [];
      }, en.start();
    } catch {
      Ke.value.isSpeaking = !1;
    }
  }
  function G(I) {
    const U = I.length * 0.05, ee = [];
    let O = 0;
    for (let H = 0; H < I.length; H++) {
      const W = I[H].toLowerCase();
      let D = 0;
      "aeiouäöü".includes(W) ? D = 10 + Math.floor(Math.random() * 5) : "bcdfghjklmnpqrstvwxyz".includes(W) && (D = 1 + Math.floor(Math.random() * 9)), ee.push({ time: O, viseme: D, duration: 0.05 }), O += 0.05;
    }
    es.value = ee, Ke.value.isSpeaking = !0, di.value = 0;
    const B = Date.now(), Q = () => {
      const H = (Date.now() - B) / 1e3;
      di.value = H, H < U ? requestAnimationFrame(Q) : (Ke.value.isSpeaking = !1, es.value = []);
    };
    Q();
  }
  function E() {
    if (fi && (clearTimeout(fi), fi = null), en) {
      try {
        en.stop(), en.disconnect();
      } catch {
      }
      en = null;
    }
    Ke.value.isSpeaking = !1, di.value = 0;
  }
  function T(I) {
    Ke.value.isListening = I;
  }
  function z(I) {
    jt.value.length === 0 && jt.value.push({
      id: `welcome-${Date.now()}`,
      content: I,
      role: "assistant",
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  function J(I) {
    jt.value.length > 0 && jt.value[0].id.startsWith("welcome-") && (jt.value[0] = { ...jt.value[0], content: I });
  }
  function oe(I) {
    da.value = I;
  }
  function L() {
    if (E(), en) {
      try {
        en.stop(), en.disconnect();
      } catch {
      }
      en = null;
    }
  }
  return {
    // State (readonly)
    state: Su(Ke),
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
    lastApiErrorCode: Ne(() => fa.value),
    clearApiError: () => {
      fa.value = null;
    },
    // Actions
    open: g,
    close: _,
    setLoading: f,
    setReady: p,
    setLoadProgress: x,
    setError: y,
    handleMessage: C,
    speakWithAvatar: w,
    stopAudio: E,
    setListening: T,
    addWelcomeMessage: z,
    updateWelcomeMessage: J,
    setPresentation: oe,
    cleanup: L
  };
}
const pi = ze(!1), pa = ze(""), Vr = ze(!1), ma = ze(!1), Fs = ze("prompt");
let It = null;
function Gx() {
  if (typeof window > "u" || typeof navigator > "u") return !1;
  const s = navigator.userAgent || navigator.vendor || "", e = /iPad|iPhone|iPod/.test(s) && !window.MSStream, t = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  return e || t;
}
function Xh() {
  const s = window.SpeechRecognition || window.webkitSpeechRecognition;
  ma.value = Gx(), Vr.value = !!s && !ma.value;
  async function e() {
    if (typeof navigator > "u" || !navigator.permissions)
      return "prompt";
    try {
      const l = await navigator.permissions.query({ name: "microphone" });
      return Fs.value = l.state, l.onchange = () => {
        Fs.value = l.state;
      }, l.state;
    } catch {
      return "prompt";
    }
  }
  async function t() {
    if (!Vr.value)
      return !1;
    try {
      return (await navigator.mediaDevices.getUserMedia({ audio: !0 })).getTracks().forEach((c) => c.stop()), Fs.value = "granted", !0;
    } catch {
      return Fs.value = "denied", !1;
    }
  }
  function n() {
    !s || It || (It = new s(), It.continuous = !1, It.interimResults = !1, It.lang = "tr-TR", It.onresult = (l) => {
      const c = l.results[l.results.length - 1];
      c.isFinal && (pa.value = c[0].transcript);
    }, It.onerror = (l) => {
      pi.value = !1;
    }, It.onend = () => {
      pi.value = !1;
    });
  }
  function i() {
    Vr.value && (n(), It && !pi.value && (pa.value = "", pi.value = !0, It.start()));
  }
  function r() {
    It && pi.value && (It.stop(), pi.value = !1);
  }
  function o(l) {
    It && (It.lang = l);
  }
  function a() {
    It && (It.abort(), It = null);
  }
  return Qs(() => {
    a();
  }), {
    isRecording: Ne(() => pi.value),
    transcript: Ne(() => pa.value),
    isSupported: Ne(() => Vr.value),
    isIOS: Ne(() => ma.value),
    micPermission: Ne(() => Fs.value),
    startRecording: i,
    stopRecording: r,
    setLanguage: o,
    checkMicPermission: e,
    requestMicPermission: t,
    cleanup: a
  };
}
const Wx = { class: "liya-ai-env-vuejs-modal-container" }, jx = { class: "liya-ai-env-vuejs-header" }, Xx = { class: "liya-ai-env-vuejs-header__title" }, qx = { class: "liya-ai-env-vuejs-header__actions" }, Yx = ["title"], Kx = { class: "liya-ai-env-vuejs-header__lang-text" }, $x = ["aria-label"], Jx = { class: "liya-ai-env-vuejs-scene" }, Zx = {
  key: 0,
  class: "liya-ai-env-vuejs-access-loading"
}, Qx = {
  key: 1,
  class: "liya-ai-env-vuejs-premium-overlay"
}, eE = { class: "liya-ai-env-vuejs-premium-overlay__content" }, tE = { class: "liya-ai-env-vuejs-premium-overlay__title" }, nE = { class: "liya-ai-env-vuejs-premium-overlay__text" }, iE = {
  href: "https://liyalabs.com/pricing",
  target: "_blank",
  rel: "noopener",
  class: "liya-ai-env-vuejs-premium-overlay__btn"
}, sE = {
  key: 0,
  class: "liya-ai-env-vuejs-glass-popup"
}, rE = { class: "liya-ai-env-vuejs-glass-popup__card" }, oE = ["aria-label"], aE = { class: "liya-ai-env-vuejs-glass-popup__title" }, lE = { class: "liya-ai-env-vuejs-glass-popup__text" }, cE = { class: "liya-ai-env-vuejs-status-indicator__text" }, uE = ["title"], hE = ["title"], dE = {
  key: 0,
  class: "liya-ai-env-vuejs-patience-tooltip"
}, fE = { class: "liya-ai-env-vuejs-controls" }, pE = { class: "liya-ai-env-vuejs-controls__label" }, mE = ["disabled", "aria-label"], gE = {
  key: 0,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "32",
  height: "32"
}, _E = {
  key: 1,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "32",
  height: "32"
}, vE = {
  key: 0,
  class: "liya-ai-env-vuejs-controls__toast"
}, yE = { class: "liya-ai-env-vuejs-chat-panel" }, xE = { class: "liya-ai-env-vuejs-chat-panel__role" }, EE = {
  key: 0,
  class: "liya-ai-env-vuejs-chat-panel__suggestions"
}, SE = ["onClick"], ME = {
  key: 0,
  class: "liya-ai-env-vuejs-chat-panel__empty"
}, AE = ["placeholder", "disabled"], TE = ["disabled"], Eu = 3e3, bE = /* @__PURE__ */ Zs({
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
      updateWelcomeMessage: x,
      setPresentation: y,
      cleanup: b
    } = jh(), C = ze(!1), { t: w, locale: R, setLocale: G } = ja();
    function E() {
      const k = R.value === "tr" ? "en" : "tr";
      G(k);
    }
    const {
      isRecording: T,
      transcript: z,
      isSupported: J,
      startRecording: oe,
      stopRecording: L,
      checkMicPermission: I,
      requestMicPermission: U
    } = Xh(), ee = ze(!1);
    function O() {
      ee.value = !0, setTimeout(() => {
        ee.value = !1;
      }, 3e3);
    }
    const B = Ne(() => t.welcomeMessage || w.value.chat.emptyWelcome), Q = Ne(() => t.assistantName || "AI Assistant"), H = ze(t.avatarModelUrl), W = ze(t.classroomModelUrl), D = ze(!1), K = ze(!0), re = ze(null), fe = Ne(() => re.value !== null), me = Ne(() => re.value ? re.value.code === "PREMIUM_PLUS_REQUIRED" ? w.value.premium.upgradePremiumPlus : w.value.premium.upgradePremium : "");
    function ge(k) {
      return k && k.replace(/^http:\/\//i, "https://");
    }
    const le = Ne(() => w.value.welcomeSuggestions), he = ze("");
    let be = 0;
    const V = ze(!1), ft = ze("");
    let Se = null;
    function Ue() {
      const k = w.value.patienceTooltips, M = Math.floor(Math.random() * k.length);
      ft.value = k[M], V.value = !0, Se && clearTimeout(Se), Se = setTimeout(() => {
        V.value = !1;
      }, 2e3);
    }
    const Ee = Ne(() => i.value ? "speaking" : r.value ? "preparing" : T.value ? "listening" : "idle"), ot = Ne(() => w.value.preparingMessages), Pe = ze(0), A = ze(0);
    let v = null;
    fn(r, (k) => {
      k ? (Pe.value = 0, A.value = Date.now(), v = setInterval(() => {
        Date.now() - A.value > 8e3 && (Pe.value = (Pe.value + 1) % ot.value.length);
      }, 4e3)) : (v && (clearInterval(v), v = null), Pe.value = 0);
    });
    const P = Ne(() => {
      switch (Ee.value) {
        case "listening":
          return w.value.status.listening;
        case "preparing":
          return ot.value[Pe.value];
        case "speaking":
          return w.value.status.speaking;
        default:
          return w.value.status.ready;
      }
    });
    function q() {
      const k = Date.now();
      if (k - be < Eu) {
        Ue();
        return;
      }
      be = k, T.value && (L(), f(!1));
    }
    function $() {
      const k = Date.now();
      if (k - be < Eu) {
        Ue();
        return;
      }
      be = k, i.value && _();
      const M = o.value.filter((ie) => ie.role === "assistant").pop();
      if (M) {
        let ie = M.content;
        try {
          const de = JSON.parse(M.content);
          typeof (de == null ? void 0 : de.response) == "string" ? ie = de.response : typeof (de == null ? void 0 : de.answer) == "string" && (ie = de.answer);
        } catch {
          const de = M.content.match(/"(?:response|answer)"\s*:\s*"((?:[^"\\]|\\.)*)"/);
          if (de)
            try {
              ie = JSON.parse(`"${de[1]}"`);
            } catch {
              ie = de[1];
            }
        }
        g(ie);
      }
    }
    function te(k) {
      try {
        const M = JSON.parse(k);
        if (typeof (M == null ? void 0 : M.response) == "string")
          return M.response;
        if (typeof (M == null ? void 0 : M.answer) == "string")
          return M.answer;
      } catch {
        const M = k.match(/"(?:response|answer)"\s*:\s*"((?:[^"\\]|\\.)*)"/);
        if (M)
          try {
            return JSON.parse(`"${M[1]}"`);
          } catch {
            return M[1];
          }
      }
      return k;
    }
    function ae(k) {
      try {
        const M = JSON.parse(k);
        if (Array.isArray(M == null ? void 0 : M.suggestions))
          return M.suggestions;
      } catch {
        const M = k.match(/"suggestions"\s*:\s*\[((?:[^\[\]])*?)\]/);
        if (M)
          try {
            return JSON.parse(`[${M[1]}]`);
          } catch {
          }
      }
      return [];
    }
    const ne = Ne(() => {
      const k = le.value, M = o.value.map((ie) => {
        const de = ie.role === "assistant" ? ae(ie.content) : [];
        return {
          role: ie.role,
          content: te(ie.content),
          suggestions: de
        };
      });
      return M.length === 1 && M[0].role === "assistant" && M[0].suggestions.length === 0 && (M[0].suggestions = k), M;
    }), ce = ze(null);
    function _e() {
      td(() => {
        ce.value && (ce.value.scrollTop = ce.value.scrollHeight);
      });
    }
    fn(() => o.value.length, () => {
      _e();
    });
    function Ce(k) {
      Le(k), _e();
    }
    async function se() {
      const k = he.value.trim();
      k && (he.value = "", _e(), await Le(k));
    }
    async function Ze() {
      K.value = !0, re.value = null;
      try {
        (await $u()).has_avatar_access || (re.value = {
          code: "FEATURE_NOT_AVAILABLE",
          message: w.value.premium.upgradePremium
        });
      } catch (k) {
        const M = (k == null ? void 0 : k.code) || "FEATURE_NOT_AVAILABLE", ie = (k == null ? void 0 : k.message) || "";
        M === "FEATURE_NOT_AVAILABLE" || M === "UPGRADE_REQUIRED" || M === "PREMIUM_PLUS_REQUIRED" || ie.includes("Premium") || ie.includes("upgrade") ? re.value = {
          code: M,
          message: ie
        } : re.value = {
          code: "FEATURE_NOT_AVAILABLE",
          message: w.value.premium.upgradePremium
        };
      } finally {
        K.value = !1;
      }
    }
    async function Ve() {
      if (!H.value) {
        D.value = !0;
        try {
          const k = await Yu();
          H.value = ge(k.model_url);
        } catch {
        } finally {
          D.value = !1;
        }
      }
    }
    async function we() {
      if (!W.value)
        try {
          const k = await Ku();
          W.value = ge(k.model_url);
        } catch {
        }
    }
    fn(z, (k) => {
      k && !T.value && Le(k);
    }), fn(i, (k) => {
      n(k ? "speaking-started" : "speaking-ended");
    });
    function Me(k) {
      if (!k) return null;
      try {
        const M = xs(), ie = k.includes("?") ? "&" : "?";
        return `${k}${ie}api_key=${M.apiKey}`;
      } catch {
        return k;
      }
    }
    async function xe() {
      try {
        const k = await Ff();
        if (k.length > 0) {
          const M = k[0];
          if (M.pages && M.pages.length > 0) {
            const ie = M.pages[0];
            y({
              success: !0,
              action: "show_page",
              presentation_id: M.id,
              presentation_title: M.title,
              page_number: ie.page_number,
              page_title: ie.title,
              page_image_url: Me(ie.image_url),
              total_pages: M.total_pages,
              reason: "initial_load"
            });
          }
        }
      } catch {
      }
    }
    fn(() => t.isOpen, async (k) => {
      k ? (J.value && I().then((M) => {
        M === "prompt" && U();
      }), await Ze(), fe.value || (await Promise.all([
        Ve(),
        we(),
        xe()
      ]), !C.value && B.value && (C.value = !0, p(B.value), setTimeout(() => {
        g(B.value);
      }, 500))), n("opened")) : n("closed");
    }, { immediate: !0 }), fn(R, () => {
      x(B.value), _(), setTimeout(() => {
        g(B.value);
      }, 300);
    });
    async function Le(k) {
      n("message-sent", k), await m(k);
      const M = o.value[o.value.length - 1];
      M && M.role === "assistant" && n("message-received", M.content);
    }
    function et() {
      if (!J.value) {
        O();
        return;
      }
      T.value ? (L(), f(!1)) : (oe(), f(!0));
    }
    function rt() {
      b(), n("close");
    }
    function Oe(k) {
      k.key === "Escape" && rt();
    }
    return Ba(() => {
      document.addEventListener("keydown", Oe);
    }), Qs(() => {
      document.removeEventListener("keydown", Oe), v && (clearInterval(v), v = null), Se && (clearTimeout(Se), Se = null), b();
    }), (k, M) => (Qe(), Mu(Zh, { to: "body" }, [
      _i(ks, { name: "liya-ai-env-vuejs-modal" }, {
        default: zs(() => [
          s.isOpen ? (Qe(), tt("div", {
            key: 0,
            class: "liya-ai-env-vuejs-modal-overlay",
            onClick: ll(rt, ["self"])
          }, [
            ue("div", Wx, [
              ue("header", jx, [
                ue("div", Xx, [
                  ue("div", {
                    class: xi(["liya-ai-env-vuejs-status-dot", { "liya-ai-env-vuejs-status-dot--speaking": ve(i) }])
                  }, null, 2),
                  ue("span", null, dt(Q.value), 1)
                ]),
                ue("div", qx, [
                  ue("button", {
                    class: "liya-ai-env-vuejs-header__lang-btn",
                    onClick: E,
                    title: ve(R) === "tr" ? "Switch to English" : "Türkçe'ye geç"
                  }, [
                    ue("span", Kx, dt(ve(R) === "tr" ? "EN" : "TR"), 1)
                  ], 8, Yx),
                  s.showCloseButton ? (Qe(), tt("button", {
                    key: 0,
                    class: "liya-ai-env-vuejs-header__close-btn",
                    onClick: rt,
                    "aria-label": ve(w).controls.close
                  }, [...M[4] || (M[4] = [
                    ue("svg", {
                      viewBox: "0 0 24 24",
                      fill: "currentColor",
                      width: "24",
                      height: "24"
                    }, [
                      ue("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
                    ], -1)
                  ])], 8, $x)) : Xt("", !0)
                ])
              ]),
              ue("div", Jx, [
                K.value ? (Qe(), tt("div", Zx, [...M[5] || (M[5] = [
                  ue("div", { class: "liya-ai-env-vuejs-access-loading__spinner" }, null, -1)
                ])])) : fe.value ? (Qe(), tt("div", Qx, [
                  ue("div", eE, [
                    M[7] || (M[7] = ue("div", { class: "liya-ai-env-vuejs-premium-overlay__icon" }, [
                      ue("svg", {
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        width: "48",
                        height: "48"
                      }, [
                        ue("path", { d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" })
                      ])
                    ], -1)),
                    ue("h3", tE, dt(ve(w).premium.title), 1),
                    ue("p", nE, dt(me.value), 1),
                    ue("a", iE, [
                      M[6] || (M[6] = ue("svg", {
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        width: "16",
                        height: "16"
                      }, [
                        ue("path", { d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" })
                      ], -1)),
                      Au(" " + dt(ve(w).premium.viewPlans), 1)
                    ])
                  ])
                ])) : (Qe(), tt(Hr, { key: 2 }, [
                  _i(Wh, {
                    "classroom-model-url": W.value,
                    "avatar-model-url": H.value,
                    "avatar-position": s.avatarPosition,
                    "camera-config": s.cameraConfig,
                    "is-speaking": ve(i),
                    visemes: ve(a),
                    gestures: s.enableGestures ? ve(l) : [],
                    "current-time": ve(c),
                    "presentation-result": ve(u),
                    onLoaded: M[0] || (M[0] = (ie) => k.$emit("opened")),
                    onError: M[1] || (M[1] = (ie) => k.$emit("error", ie))
                  }, null, 8, ["classroom-model-url", "avatar-model-url", "avatar-position", "camera-config", "is-speaking", "visemes", "gestures", "current-time", "presentation-result"]),
                  _i(ks, { name: "liya-ai-env-vuejs-glass-fade" }, {
                    default: zs(() => [
                      ve(h) ? (Qe(), tt("div", sE, [
                        ue("div", rE, [
                          ue("button", {
                            class: "liya-ai-env-vuejs-glass-popup__close",
                            onClick: M[2] || (M[2] = //@ts-ignore
                            (...ie) => ve(d) && ve(d)(...ie)),
                            "aria-label": ve(w).controls.close
                          }, [...M[8] || (M[8] = [
                            ue("svg", {
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              width: "18",
                              height: "18"
                            }, [
                              ue("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
                            ], -1)
                          ])], 8, oE),
                          M[9] || (M[9] = ue("div", { class: "liya-ai-env-vuejs-glass-popup__icon" }, "⚠️", -1)),
                          ue("h4", aE, dt(ve(w).errors.problemOccurred), 1),
                          ue("p", lE, dt(ve(w).errors.tryAgainLater), 1)
                        ])
                      ])) : Xt("", !0)
                    ]),
                    _: 1
                  }),
                  ue("div", {
                    class: xi(["liya-ai-env-vuejs-status-indicator", `liya-ai-env-vuejs-status-indicator--${Ee.value}`])
                  }, [
                    M[12] || (M[12] = ue("span", { class: "liya-ai-env-vuejs-status-indicator__dot" }, null, -1)),
                    ue("span", cE, dt(P.value), 1),
                    Ee.value !== "idle" ? (Qe(), tt("button", {
                      key: 0,
                      class: "liya-ai-env-vuejs-status-indicator__btn",
                      onClick: q,
                      title: ve(w).controls.cancel
                    }, [...M[10] || (M[10] = [
                      ue("svg", {
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        width: "20",
                        height: "20"
                      }, [
                        ue("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
                      ], -1)
                    ])], 8, uE)) : Xt("", !0),
                    Ee.value === "idle" && ve(o).length > 0 ? (Qe(), tt("button", {
                      key: 1,
                      class: "liya-ai-env-vuejs-status-indicator__btn",
                      onClick: $,
                      title: ve(w).controls.replay
                    }, [...M[11] || (M[11] = [
                      ue("svg", {
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        width: "20",
                        height: "20"
                      }, [
                        ue("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })
                      ], -1)
                    ])], 8, hE)) : Xt("", !0),
                    _i(ks, { name: "liya-ai-env-vuejs-patience-tooltip" }, {
                      default: zs(() => [
                        V.value ? (Qe(), tt("div", dE, dt(ft.value), 1)) : Xt("", !0)
                      ]),
                      _: 1
                    })
                  ], 2),
                  ue("div", fE, [
                    ue("p", pE, dt(ve(w).controls.pressAndSpeak), 1),
                    ue("button", {
                      class: xi(["liya-ai-env-vuejs-controls__mic", {
                        "liya-ai-env-vuejs-controls__mic--active": ve(T),
                        "liya-ai-env-vuejs-controls__mic--disabled": ve(r) || ve(i),
                        "liya-ai-env-vuejs-controls__mic--not-supported": !ve(J)
                      }]),
                      disabled: ve(r) || ve(i),
                      onClick: et,
                      "aria-label": ve(T) ? ve(w).voice.stopRecording : ve(w).voice.startRecording
                    }, [
                      ve(T) ? (Qe(), tt("svg", _E, [...M[14] || (M[14] = [
                        ue("path", { d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" }, null, -1),
                        ue("path", { d: "M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" }, null, -1)
                      ])])) : (Qe(), tt("svg", gE, [...M[13] || (M[13] = [
                        ue("path", { d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" }, null, -1)
                      ])]))
                    ], 10, mE),
                    _i(ks, { name: "liya-ai-env-vuejs-toast" }, {
                      default: zs(() => [
                        ee.value ? (Qe(), tt("div", vE, [
                          M[15] || (M[15] = ue("svg", {
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            width: "18",
                            height: "18"
                          }, [
                            ue("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" })
                          ], -1)),
                          ue("span", null, dt(ve(w).voice.notSupported), 1)
                        ])) : Xt("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  ue("div", yE, [
                    ue("div", {
                      class: "liya-ai-env-vuejs-chat-panel__messages",
                      ref_key: "liyaAiEnvVuejsMessagesRef",
                      ref: ce
                    }, [
                      (Qe(!0), tt(Hr, null, cl(ne.value, (ie, de) => (Qe(), tt("div", {
                        key: de,
                        class: xi(["liya-ai-env-vuejs-chat-panel__message", {
                          "liya-ai-env-vuejs-chat-panel__message--user": ie.role === "user",
                          "liya-ai-env-vuejs-chat-panel__message--assistant": ie.role === "assistant"
                        }])
                      }, [
                        ue("span", xE, dt(ie.role === "user" ? ve(w).chat.userRole : Q.value), 1),
                        ue("p", null, dt(ie.content), 1),
                        ie.suggestions.length > 0 ? (Qe(), tt("div", EE, [
                          (Qe(!0), tt(Hr, null, cl(ie.suggestions, (Re, Te) => (Qe(), tt("button", {
                            key: Te,
                            class: "liya-ai-env-vuejs-chat-panel__suggestion",
                            onClick: (nt) => Ce(Re)
                          }, dt(Re), 9, SE))), 128))
                        ])) : Xt("", !0)
                      ], 2))), 128)),
                      ne.value.length === 0 ? (Qe(), tt("div", ME, dt(B.value), 1)) : Xt("", !0)
                    ], 512),
                    ue("form", {
                      class: "liya-ai-env-vuejs-chat-panel__input-form",
                      onSubmit: ll(se, ["prevent"])
                    }, [
                      Qh(ue("input", {
                        "onUpdate:modelValue": M[3] || (M[3] = (ie) => he.value = ie),
                        type: "text",
                        class: "liya-ai-env-vuejs-chat-panel__input",
                        placeholder: fe.value ? ve(w).chat.premiumRequired : ve(w).chat.placeholder,
                        disabled: ve(r) || ve(i) || fe.value
                      }, null, 8, AE), [
                        [ed, he.value]
                      ]),
                      ue("button", {
                        type: "submit",
                        class: "liya-ai-env-vuejs-chat-panel__send-btn",
                        disabled: !he.value.trim() || ve(r) || ve(i) || fe.value
                      }, [...M[16] || (M[16] = [
                        ue("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "24",
                          height: "24"
                        }, [
                          ue("path", { d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" })
                        ], -1)
                      ])], 8, TE)
                    ], 32)
                  ])
                ], 64))
              ])
            ])
          ])) : Xt("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), wE = /* @__PURE__ */ yo(bE, [["__scopeId", "data-v-41c02bb3"]]), RE = { class: "liya-ai-env-vuejs-standalone-container" }, CE = { class: "liya-ai-env-vuejs-header" }, LE = { class: "liya-ai-env-vuejs-header__left" }, PE = ["aria-label"], IE = { class: "liya-ai-env-vuejs-header__title" }, DE = { class: "liya-ai-env-vuejs-header__right" }, UE = ["title"], NE = { class: "liya-ai-env-vuejs-header__lang-text" }, OE = { class: "liya-ai-env-vuejs-header__brand" }, FE = { class: "liya-ai-env-vuejs-scene" }, BE = {
  key: 0,
  class: "liya-ai-env-vuejs-access-loading"
}, VE = {
  key: 1,
  class: "liya-ai-env-vuejs-premium-overlay"
}, kE = { class: "liya-ai-env-vuejs-premium-overlay__content" }, zE = { class: "liya-ai-env-vuejs-premium-overlay__title" }, HE = { class: "liya-ai-env-vuejs-premium-overlay__text" }, GE = {
  href: "https://liyalabs.com/pricing",
  target: "_blank",
  rel: "noopener",
  class: "liya-ai-env-vuejs-premium-overlay__btn"
}, WE = {
  key: 0,
  class: "liya-ai-env-vuejs-subtitle"
}, jE = {
  key: 0,
  class: "liya-ai-env-vuejs-thinking-dots"
}, XE = { class: "liya-ai-env-vuejs-controls" }, qE = ["disabled", "aria-label"], YE = {
  key: 0,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "32",
  height: "32"
}, KE = {
  key: 1,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "32",
  height: "32"
}, $E = { class: "liya-ai-env-vuejs-controls__hint" }, JE = {
  key: 0,
  class: "liya-ai-env-vuejs-controls__toast"
}, ZE = /* @__PURE__ */ Zs({
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
    } = jh(), p = ze(!1), { t: x, locale: y, setLocale: b } = ja();
    function C() {
      const le = y.value === "tr" ? "en" : "tr";
      b(le);
    }
    function w(le) {
      return le && le.replace(/^http:\/\//i, "https://");
    }
    const {
      isRecording: R,
      transcript: G,
      isSupported: E,
      startRecording: T,
      stopRecording: z
    } = Xh(), J = ze(!1);
    function oe() {
      J.value = !0, setTimeout(() => {
        J.value = !1;
      }, 3e3);
    }
    const L = Ne(() => t.welcomeMessage || x.value.chat.emptyWelcome), I = Ne(() => t.assistantName || "AI Assistant"), U = ze(t.avatarModelUrl), ee = ze(t.classroomModelUrl), O = ze(!0), B = ze(null), Q = Ne(() => B.value !== null), H = Ne(() => B.value ? B.value.code === "PREMIUM_PLUS_REQUIRED" ? x.value.premium.upgradePremiumPlus : x.value.premium.upgradePremium : "");
    async function W() {
      O.value = !0, B.value = null;
      try {
        (await $u()).has_avatar_access || (B.value = {
          code: "FEATURE_NOT_AVAILABLE",
          message: x.value.premium.upgradePremium
        });
      } catch (le) {
        const he = (le == null ? void 0 : le.code) || "FEATURE_NOT_AVAILABLE", be = (le == null ? void 0 : le.message) || "";
        he === "FEATURE_NOT_AVAILABLE" || he === "UPGRADE_REQUIRED" || he === "PREMIUM_PLUS_REQUIRED" || be.includes("Premium") || be.includes("upgrade") ? B.value = {
          code: he,
          message: be
        } : B.value = {
          code: "FEATURE_NOT_AVAILABLE",
          message: x.value.premium.upgradePremium
        };
      } finally {
        O.value = !1;
      }
    }
    async function D() {
      if (!U.value)
        try {
          const le = await Yu();
          U.value = w(le.model_url);
        } catch {
        }
    }
    async function K() {
      if (!ee.value)
        try {
          const le = await Ku();
          ee.value = w(le.model_url);
        } catch {
        }
    }
    Ba(async () => {
      await W(), Q.value || (await Promise.all([
        D(),
        K()
      ]), !p.value && L.value && (p.value = !0, m(L.value), setTimeout(() => {
        d(L.value);
      }, 500)));
    }), fn(G, (le) => {
      le && !R.value && re(le);
    }), fn(i, (le) => {
      n(le ? "speaking-started" : "speaking-ended");
    }), fn(y, () => {
      g(L.value), f(), setTimeout(() => {
        d(L.value);
      }, 300);
    });
    async function re(le) {
      n("message-sent", le), await h(le);
      const he = o.value[o.value.length - 1];
      he && he.role === "assistant" && n("message-received", he.content);
    }
    function fe() {
      if (!E.value) {
        oe();
        return;
      }
      R.value ? (z(), _(!1)) : (T(), _(!0));
    }
    function me() {
      f(), n("back");
    }
    function ge() {
      var le;
      return o.value.length === 0 ? L.value : ((le = o.value[o.value.length - 1]) == null ? void 0 : le.content) || "";
    }
    return Qs(() => {
      f();
    }), (le, he) => (Qe(), tt("div", RE, [
      ue("header", CE, [
        ue("div", LE, [
          s.showBackButton ? (Qe(), tt("button", {
            key: 0,
            class: "liya-ai-env-vuejs-header__back-btn",
            onClick: me,
            "aria-label": ve(x).controls.back
          }, [...he[2] || (he[2] = [
            ue("svg", {
              viewBox: "0 0 24 24",
              fill: "currentColor",
              width: "24",
              height: "24"
            }, [
              ue("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" })
            ], -1)
          ])], 8, PE)) : Xt("", !0),
          ue("div", IE, [
            ue("div", {
              class: xi(["liya-ai-env-vuejs-status-dot", { "liya-ai-env-vuejs-status-dot--speaking": ve(i) }])
            }, null, 2),
            ue("span", null, dt(I.value), 1)
          ])
        ]),
        ue("div", DE, [
          ue("button", {
            class: "liya-ai-env-vuejs-header__lang-btn",
            onClick: C,
            title: ve(y) === "tr" ? "Switch to English" : "Türkçe'ye geç"
          }, [
            ue("span", NE, dt(ve(y) === "tr" ? "EN" : "TR"), 1)
          ], 8, UE),
          ue("div", OE, dt(ve(x).branding.environmentTitle), 1)
        ])
      ]),
      ue("div", FE, [
        O.value ? (Qe(), tt("div", BE, [...he[3] || (he[3] = [
          ue("div", { class: "liya-ai-env-vuejs-access-loading__spinner" }, null, -1)
        ])])) : Q.value ? (Qe(), tt("div", VE, [
          ue("div", kE, [
            he[5] || (he[5] = ue("div", { class: "liya-ai-env-vuejs-premium-overlay__icon" }, [
              ue("svg", {
                viewBox: "0 0 24 24",
                fill: "currentColor",
                width: "48",
                height: "48"
              }, [
                ue("path", { d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" })
              ])
            ], -1)),
            ue("h3", zE, dt(ve(x).premium.title), 1),
            ue("p", HE, dt(H.value), 1),
            ue("a", GE, [
              he[4] || (he[4] = ue("svg", {
                viewBox: "0 0 24 24",
                fill: "currentColor",
                width: "16",
                height: "16"
              }, [
                ue("path", { d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" })
              ], -1)),
              Au(" " + dt(ve(x).premium.viewPlans), 1)
            ])
          ])
        ])) : (Qe(), tt(Hr, { key: 2 }, [
          _i(Wh, {
            "classroom-model-url": ee.value,
            "avatar-model-url": U.value,
            "avatar-position": s.avatarPosition,
            "camera-config": s.cameraConfig,
            "is-speaking": ve(i),
            visemes: ve(a),
            gestures: s.enableGestures ? ve(l) : [],
            "current-time": ve(c),
            "presentation-result": ve(u),
            onLoaded: he[0] || (he[0] = (be) => le.$emit("loaded")),
            onError: he[1] || (he[1] = (be) => le.$emit("error", be))
          }, null, 8, ["classroom-model-url", "avatar-model-url", "avatar-position", "camera-config", "is-speaking", "visemes", "gestures", "current-time", "presentation-result"]),
          s.enableSubtitles ? (Qe(), tt("div", WE, [
            ve(r) ? (Qe(), tt("div", jE, [...he[6] || (he[6] = [
              ue("span", { class: "liya-ai-env-vuejs-thinking-dot" }, null, -1),
              ue("span", { class: "liya-ai-env-vuejs-thinking-dot" }, null, -1),
              ue("span", { class: "liya-ai-env-vuejs-thinking-dot" }, null, -1)
            ])])) : (Qe(), tt("p", {
              key: 1,
              class: xi(["liya-ai-env-vuejs-subtitle__text", { "liya-ai-env-vuejs-subtitle__welcome": ve(o).length === 0 }])
            }, dt(ge()), 3))
          ])) : Xt("", !0),
          ue("div", XE, [
            ue("button", {
              class: xi(["liya-ai-env-vuejs-controls__mic", {
                "liya-ai-env-vuejs-controls__mic--active": ve(R),
                "liya-ai-env-vuejs-controls__mic--disabled": ve(r) || ve(i),
                "liya-ai-env-vuejs-controls__mic--not-supported": !ve(E)
              }]),
              disabled: ve(r) || ve(i),
              onClick: fe,
              "aria-label": ve(R) ? ve(x).voice.stopRecording : ve(x).voice.startRecording
            }, [
              ve(R) ? (Qe(), tt("svg", KE, [...he[8] || (he[8] = [
                ue("path", { d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" }, null, -1),
                ue("path", { d: "M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" }, null, -1)
              ])])) : (Qe(), tt("svg", YE, [...he[7] || (he[7] = [
                ue("path", { d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" }, null, -1)
              ])]))
            ], 10, qE),
            ue("p", $E, dt(ve(R) ? ve(x).voice.listening : ve(r) ? ve(x).voice.thinking : ve(x).voice.pressToSpeak), 1),
            _i(ks, { name: "liya-ai-env-vuejs-toast" }, {
              default: zs(() => [
                J.value ? (Qe(), tt("div", JE, [
                  he[9] || (he[9] = ue("svg", {
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    width: "18",
                    height: "18"
                  }, [
                    ue("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" })
                  ], -1)),
                  ue("span", null, dt(ve(x).voice.notSupported), 1)
                ])) : Xt("", !0)
              ]),
              _: 1
            })
          ])
        ], 64))
      ])
    ]));
  }
}), QE = /* @__PURE__ */ yo(ZE, [["__scopeId", "data-v-f7d49132"]]), bS = /* @__PURE__ */ Zs({
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
    const e = s, t = Ne(() => e.mode === "modal_fullscreen");
    return (n, i) => (Qe(), Mu(nd(t.value ? wE : QE), {
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
}), Bs = ze(0), kr = ze(!1), ts = ze(new Uint8Array(0));
let Yn = null, En = null, Vs = null, zr = null;
function wS() {
  const s = Ne(() => Bs.value), e = Ne(() => kr.value), t = Ne(() => ts.value);
  async function n() {
    try {
      const l = await navigator.mediaDevices.getUserMedia({ audio: !0 }), c = window.AudioContext || window.webkitAudioContext;
      Yn = new c(), Yn.state === "suspended" && await Yn.resume(), En = Yn.createAnalyser(), En.fftSize = 256, En.smoothingTimeConstant = 0.8, Vs = Yn.createMediaStreamSource(l), Vs.connect(En);
      const u = En.frequencyBinCount;
      return ts.value = new Uint8Array(u), kr.value = !0, i(), !0;
    } catch {
      return !1;
    }
  }
  function i() {
    if (!kr.value || !En) return;
    En.getByteFrequencyData(ts.value);
    let l = 0;
    for (let c = 0; c < ts.value.length; c++)
      l += ts.value[c];
    Bs.value = l / ts.value.length / 255, zr = requestAnimationFrame(i);
  }
  function r() {
    kr.value = !1, zr && (cancelAnimationFrame(zr), zr = null), Vs && (Vs.disconnect(), Vs = null), En && (En.disconnect(), En = null), Yn && (Yn.close(), Yn = null), Bs.value = 0;
  }
  function o() {
    const l = Bs.value;
    return l < 0.1 ? 0.2 : l < 0.3 ? 0.4 : l < 0.5 ? 0.6 : l < 0.7 ? 0.8 : 1;
  }
  function a() {
    const l = Bs.value;
    return l < 0.3 ? "low" : l < 0.6 ? "medium" : "high";
  }
  return Qs(() => {
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
  Kr as LIYA_AI_ENV_VUEJS_GESTURE_DEFINITIONS,
  Wh as LiyaAiEnvVuejsClassroomScene,
  bS as LiyaAiEnvVuejsEnvironment,
  wE as LiyaAiEnvVuejsEnvironmentModal,
  QE as LiyaAiEnvVuejsEnvironmentStandalone,
  TS as LiyaAiEnvVuejsFullBodyAvatar,
  MS as LiyaAiEnvVuejsPlugin,
  MS as default,
  Vf as liyaAiEnvVuejsDetectBrowserLocale,
  Of as liyaAiEnvVuejsGenerateSpeech,
  Uf as liyaAiEnvVuejsGetClient,
  xs as liyaAiEnvVuejsGetConfig,
  AS as liyaAiEnvVuejsGetGestureDefinition,
  Ff as liyaAiEnvVuejsGetPresentations,
  SS as liyaAiEnvVuejsGetSessionHistory,
  Df as liyaAiEnvVuejsInitializeClient,
  Cx as liyaAiEnvVuejsInterpolateKeyframes,
  ES as liyaAiEnvVuejsIsInitialized,
  Xr as liyaAiEnvVuejsIsSupportedLocale,
  Nf as liyaAiEnvVuejsSendMessage,
  Bf as liyaAiEnvVuejsTranslations,
  wS as useLiyaAiEnvVuejsAudioAnalyzer,
  jh as useLiyaAiEnvVuejsEnvironment,
  Gh as useLiyaAiEnvVuejsGestures,
  ja as useLiyaAiEnvVuejsI18n,
  Xh as useLiyaAiEnvVuejsVoice
};
