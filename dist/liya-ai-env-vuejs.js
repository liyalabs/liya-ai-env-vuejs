var sh = Object.defineProperty;
var rh = (i, e, t) => e in i ? sh(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Po = (i, e, t) => rh(i, typeof e != "symbol" ? e + "" : e, t);
import { ref as Ne, computed as He, readonly as eo, defineComponent as ir, openBlock as We, createElementBlock as qe, renderSlot as oh, watch as rn, onMounted as Wa, onUnmounted as sr, createElementVNode as O, toDisplayString as Fe, createCommentVNode as Dt, normalizeStyle as ja, createBlock as Cu, Teleport as ah, createVNode as Hn, Transition as Ai, withCtx as Ti, withModifiers as ml, normalizeClass as _n, unref as ie, Fragment as us, renderList as Xr, createTextVNode as Lu, withDirectives as lh, vModelText as ch, nextTick as uh, resolveDynamicComponent as dh } from "vue";
function Pu(i, e) {
  return function() {
    return i.apply(e, arguments);
  };
}
const { toString: hh } = Object.prototype, { getPrototypeOf: Xa } = Object, { iterator: fo, toStringTag: Iu } = Symbol, po = /* @__PURE__ */ ((i) => (e) => {
  const t = hh.call(e);
  return i[t] || (i[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), En = (i) => (i = i.toLowerCase(), (e) => po(e) === i), mo = (i) => (e) => typeof e === i, { isArray: Rs } = Array, vs = mo("undefined");
function rr(i) {
  return i !== null && !vs(i) && i.constructor !== null && !vs(i.constructor) && Jt(i.constructor.isBuffer) && i.constructor.isBuffer(i);
}
const Du = En("ArrayBuffer");
function fh(i) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(i) : e = i && i.buffer && Du(i.buffer), e;
}
const ph = mo("string"), Jt = mo("function"), Uu = mo("number"), or = (i) => i !== null && typeof i == "object", mh = (i) => i === !0 || i === !1, qr = (i) => {
  if (po(i) !== "object")
    return !1;
  const e = Xa(i);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Iu in i) && !(fo in i);
}, gh = (i) => {
  if (!or(i) || rr(i))
    return !1;
  try {
    return Object.keys(i).length === 0 && Object.getPrototypeOf(i) === Object.prototype;
  } catch {
    return !1;
  }
}, _h = En("Date"), vh = En("File"), yh = En("Blob"), xh = En("FileList"), Eh = (i) => or(i) && Jt(i.pipe), Sh = (i) => {
  let e;
  return i && (typeof FormData == "function" && i instanceof FormData || Jt(i.append) && ((e = po(i)) === "formdata" || // detect form-data instance
  e === "object" && Jt(i.toString) && i.toString() === "[object FormData]"));
}, Mh = En("URLSearchParams"), [Ah, Th, bh, wh] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(En), Rh = (i) => i.trim ? i.trim() : i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ar(i, e, { allOwnKeys: t = !1 } = {}) {
  if (i === null || typeof i > "u")
    return;
  let n, s;
  if (typeof i != "object" && (i = [i]), Rs(i))
    for (n = 0, s = i.length; n < s; n++)
      e.call(null, i[n], n, i);
  else {
    if (rr(i))
      return;
    const r = t ? Object.getOwnPropertyNames(i) : Object.keys(i), o = r.length;
    let a;
    for (n = 0; n < o; n++)
      a = r[n], e.call(null, i[a], a, i);
  }
}
function Nu(i, e) {
  if (rr(i))
    return null;
  e = e.toLowerCase();
  const t = Object.keys(i);
  let n = t.length, s;
  for (; n-- > 0; )
    if (s = t[n], e === s.toLowerCase())
      return s;
  return null;
}
const Ri = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ou = (i) => !vs(i) && i !== Ri;
function Sa() {
  const { caseless: i, skipUndefined: e } = Ou(this) && this || {}, t = {}, n = (s, r) => {
    if (r === "__proto__" || r === "constructor" || r === "prototype")
      return;
    const o = i && Nu(t, r) || r;
    qr(t[o]) && qr(s) ? t[o] = Sa(t[o], s) : qr(s) ? t[o] = Sa({}, s) : Rs(s) ? t[o] = s.slice() : (!e || !vs(s)) && (t[o] = s);
  };
  for (let s = 0, r = arguments.length; s < r; s++)
    arguments[s] && ar(arguments[s], n);
  return t;
}
const Ch = (i, e, t, { allOwnKeys: n } = {}) => (ar(
  e,
  (s, r) => {
    t && Jt(s) ? Object.defineProperty(i, r, {
      value: Pu(s, t),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(i, r, {
      value: s,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: n }
), i), Lh = (i) => (i.charCodeAt(0) === 65279 && (i = i.slice(1)), i), Ph = (i, e, t, n) => {
  i.prototype = Object.create(
    e.prototype,
    n
  ), Object.defineProperty(i.prototype, "constructor", {
    value: i,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(i, "super", {
    value: e.prototype
  }), t && Object.assign(i.prototype, t);
}, Ih = (i, e, t, n) => {
  let s, r, o;
  const a = {};
  if (e = e || {}, i == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(i), r = s.length; r-- > 0; )
      o = s[r], (!n || n(o, i, e)) && !a[o] && (e[o] = i[o], a[o] = !0);
    i = t !== !1 && Xa(i);
  } while (i && (!t || t(i, e)) && i !== Object.prototype);
  return e;
}, Dh = (i, e, t) => {
  i = String(i), (t === void 0 || t > i.length) && (t = i.length), t -= e.length;
  const n = i.indexOf(e, t);
  return n !== -1 && n === t;
}, Uh = (i) => {
  if (!i) return null;
  if (Rs(i)) return i;
  let e = i.length;
  if (!Uu(e)) return null;
  const t = new Array(e);
  for (; e-- > 0; )
    t[e] = i[e];
  return t;
}, Nh = /* @__PURE__ */ ((i) => (e) => i && e instanceof i)(typeof Uint8Array < "u" && Xa(Uint8Array)), Oh = (i, e) => {
  const n = (i && i[fo]).call(i);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const r = s.value;
    e.call(i, r[0], r[1]);
  }
}, Fh = (i, e) => {
  let t;
  const n = [];
  for (; (t = i.exec(e)) !== null; )
    n.push(t);
  return n;
}, Bh = En("HTMLFormElement"), Vh = (i) => i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(t, n, s) {
  return n.toUpperCase() + s;
}), gl = (({ hasOwnProperty: i }) => (e, t) => i.call(e, t))(Object.prototype), kh = En("RegExp"), Fu = (i, e) => {
  const t = Object.getOwnPropertyDescriptors(i), n = {};
  ar(t, (s, r) => {
    let o;
    (o = e(s, r, i)) !== !1 && (n[r] = o || s);
  }), Object.defineProperties(i, n);
}, zh = (i) => {
  Fu(i, (e, t) => {
    if (Jt(i) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const n = i[t];
    if (Jt(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, Hh = (i, e) => {
  const t = {}, n = (s) => {
    s.forEach((r) => {
      t[r] = !0;
    });
  };
  return Rs(i) ? n(i) : n(String(i).split(e)), t;
}, Gh = () => {
}, Wh = (i, e) => i != null && Number.isFinite(i = +i) ? i : e;
function jh(i) {
  return !!(i && Jt(i.append) && i[Iu] === "FormData" && i[fo]);
}
const Xh = (i) => {
  const e = new Array(10), t = (n, s) => {
    if (or(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (rr(n))
        return n;
      if (!("toJSON" in n)) {
        e[s] = n;
        const r = Rs(n) ? [] : {};
        return ar(n, (o, a) => {
          const l = t(o, s + 1);
          !vs(l) && (r[a] = l);
        }), e[s] = void 0, r;
      }
    }
    return n;
  };
  return t(i, 0);
}, qh = En("AsyncFunction"), Yh = (i) => i && (or(i) || Jt(i)) && Jt(i.then) && Jt(i.catch), Bu = ((i, e) => i ? setImmediate : e ? ((t, n) => (Ri.addEventListener(
  "message",
  ({ source: s, data: r }) => {
    s === Ri && r === t && n.length && n.shift()();
  },
  !1
), (s) => {
  n.push(s), Ri.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(typeof setImmediate == "function", Jt(Ri.postMessage)), Kh = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ri) : typeof process < "u" && process.nextTick || Bu, $h = (i) => i != null && Jt(i[fo]), X = {
  isArray: Rs,
  isArrayBuffer: Du,
  isBuffer: rr,
  isFormData: Sh,
  isArrayBufferView: fh,
  isString: ph,
  isNumber: Uu,
  isBoolean: mh,
  isObject: or,
  isPlainObject: qr,
  isEmptyObject: gh,
  isReadableStream: Ah,
  isRequest: Th,
  isResponse: bh,
  isHeaders: wh,
  isUndefined: vs,
  isDate: _h,
  isFile: vh,
  isBlob: yh,
  isRegExp: kh,
  isFunction: Jt,
  isStream: Eh,
  isURLSearchParams: Mh,
  isTypedArray: Nh,
  isFileList: xh,
  forEach: ar,
  merge: Sa,
  extend: Ch,
  trim: Rh,
  stripBOM: Lh,
  inherits: Ph,
  toFlatObject: Ih,
  kindOf: po,
  kindOfTest: En,
  endsWith: Dh,
  toArray: Uh,
  forEachEntry: Oh,
  matchAll: Fh,
  isHTMLForm: Bh,
  hasOwnProperty: gl,
  hasOwnProp: gl,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Fu,
  freezeMethods: zh,
  toObjectSet: Hh,
  toCamelCase: Vh,
  noop: Gh,
  toFiniteNumber: Wh,
  findKey: Nu,
  global: Ri,
  isContextDefined: Ou,
  isSpecCompliantForm: jh,
  toJSONObject: Xh,
  isAsyncFn: qh,
  isThenable: Yh,
  setImmediate: Bu,
  asap: Kh,
  isIterable: $h
};
let ke = class Vu extends Error {
  static from(e, t, n, s, r, o) {
    const a = new Vu(e.message, t || e.code, n, s, r);
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
  constructor(e, t, n, s, r) {
    super(e), this.name = "AxiosError", this.isAxiosError = !0, t && (this.code = t), n && (this.config = n), s && (this.request = s), r && (this.response = r, this.status = r.status);
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
ke.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
ke.ERR_BAD_OPTION = "ERR_BAD_OPTION";
ke.ECONNABORTED = "ECONNABORTED";
ke.ETIMEDOUT = "ETIMEDOUT";
ke.ERR_NETWORK = "ERR_NETWORK";
ke.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
ke.ERR_DEPRECATED = "ERR_DEPRECATED";
ke.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
ke.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
ke.ERR_CANCELED = "ERR_CANCELED";
ke.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
ke.ERR_INVALID_URL = "ERR_INVALID_URL";
const Jh = null;
function Ma(i) {
  return X.isPlainObject(i) || X.isArray(i);
}
function ku(i) {
  return X.endsWith(i, "[]") ? i.slice(0, -2) : i;
}
function _l(i, e, t) {
  return i ? i.concat(e).map(function(s, r) {
    return s = ku(s), !t && r ? "[" + s + "]" : s;
  }).join(t ? "." : "") : e;
}
function Zh(i) {
  return X.isArray(i) && !i.some(Ma);
}
const Qh = X.toFlatObject(X, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function go(i, e, t) {
  if (!X.isObject(i))
    throw new TypeError("target must be an object");
  e = e || new FormData(), t = X.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(_, p) {
    return !X.isUndefined(p[_]);
  });
  const n = t.metaTokens, s = t.visitor || u, r = t.dots, o = t.indexes, l = (t.Blob || typeof Blob < "u" && Blob) && X.isSpecCompliantForm(e);
  if (!X.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(g) {
    if (g === null) return "";
    if (X.isDate(g))
      return g.toISOString();
    if (X.isBoolean(g))
      return g.toString();
    if (!l && X.isBlob(g))
      throw new ke("Blob is not supported. Use a Buffer instead.");
    return X.isArrayBuffer(g) || X.isTypedArray(g) ? l && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function u(g, _, p) {
    let m = g;
    if (g && !p && typeof g == "object") {
      if (X.endsWith(_, "{}"))
        _ = n ? _ : _.slice(0, -2), g = JSON.stringify(g);
      else if (X.isArray(g) && Zh(g) || (X.isFileList(g) || X.endsWith(_, "[]")) && (m = X.toArray(g)))
        return _ = ku(_), m.forEach(function(v, b) {
          !(X.isUndefined(v) || v === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? _l([_], b, r) : o === null ? _ : _ + "[]",
            c(v)
          );
        }), !1;
    }
    return Ma(g) ? !0 : (e.append(_l(p, _, r), c(g)), !1);
  }
  const d = [], h = Object.assign(Qh, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Ma
  });
  function f(g, _) {
    if (!X.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + _.join("."));
      d.push(g), X.forEach(g, function(m, x) {
        (!(X.isUndefined(m) || m === null) && s.call(
          e,
          m,
          X.isString(x) ? x.trim() : x,
          _,
          h
        )) === !0 && f(m, _ ? _.concat(x) : [x]);
      }), d.pop();
    }
  }
  if (!X.isObject(i))
    throw new TypeError("data must be an object");
  return f(i), e;
}
function vl(i) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g, function(n) {
    return e[n];
  });
}
function qa(i, e) {
  this._pairs = [], i && go(i, this, e);
}
const zu = qa.prototype;
zu.append = function(e, t) {
  this._pairs.push([e, t]);
};
zu.toString = function(e) {
  const t = e ? function(n) {
    return e.call(this, n, vl);
  } : vl;
  return this._pairs.map(function(s) {
    return t(s[0]) + "=" + t(s[1]);
  }, "").join("&");
};
function ef(i) {
  return encodeURIComponent(i).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Hu(i, e, t) {
  if (!e)
    return i;
  const n = t && t.encode || ef, s = X.isFunction(t) ? {
    serialize: t
  } : t, r = s && s.serialize;
  let o;
  if (r ? o = r(e, s) : o = X.isURLSearchParams(e) ? e.toString() : new qa(e, s).toString(n), o) {
    const a = i.indexOf("#");
    a !== -1 && (i = i.slice(0, a)), i += (i.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return i;
}
class yl {
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
const Ya = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, tf = typeof URLSearchParams < "u" ? URLSearchParams : qa, nf = typeof FormData < "u" ? FormData : null, sf = typeof Blob < "u" ? Blob : null, rf = {
  isBrowser: !0,
  classes: {
    URLSearchParams: tf,
    FormData: nf,
    Blob: sf
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ka = typeof window < "u" && typeof document < "u", Aa = typeof navigator == "object" && navigator || void 0, of = Ka && (!Aa || ["ReactNative", "NativeScript", "NS"].indexOf(Aa.product) < 0), af = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", lf = Ka && window.location.href || "http://localhost", cf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ka,
  hasStandardBrowserEnv: of,
  hasStandardBrowserWebWorkerEnv: af,
  navigator: Aa,
  origin: lf
}, Symbol.toStringTag, { value: "Module" })), Gt = {
  ...cf,
  ...rf
};
function uf(i, e) {
  return go(i, new Gt.classes.URLSearchParams(), {
    visitor: function(t, n, s, r) {
      return Gt.isNode && X.isBuffer(t) ? (this.append(n, t.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function df(i) {
  return X.matchAll(/\w+|\[(\w*)]/g, i).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function hf(i) {
  const e = {}, t = Object.keys(i);
  let n;
  const s = t.length;
  let r;
  for (n = 0; n < s; n++)
    r = t[n], e[r] = i[r];
  return e;
}
function Gu(i) {
  function e(t, n, s, r) {
    let o = t[r++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o), l = r >= t.length;
    return o = !o && X.isArray(s) ? s.length : o, l ? (X.hasOwnProp(s, o) ? s[o] = [s[o], n] : s[o] = n, !a) : ((!s[o] || !X.isObject(s[o])) && (s[o] = []), e(t, n, s[o], r) && X.isArray(s[o]) && (s[o] = hf(s[o])), !a);
  }
  if (X.isFormData(i) && X.isFunction(i.entries)) {
    const t = {};
    return X.forEachEntry(i, (n, s) => {
      e(df(n), s, t, 0);
    }), t;
  }
  return null;
}
function ff(i, e, t) {
  if (X.isString(i))
    try {
      return (e || JSON.parse)(i), X.trim(i);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (t || JSON.stringify)(i);
}
const lr = {
  transitional: Ya,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, t) {
    const n = t.getContentType() || "", s = n.indexOf("application/json") > -1, r = X.isObject(e);
    if (r && X.isHTMLForm(e) && (e = new FormData(e)), X.isFormData(e))
      return s ? JSON.stringify(Gu(e)) : e;
    if (X.isArrayBuffer(e) || X.isBuffer(e) || X.isStream(e) || X.isFile(e) || X.isBlob(e) || X.isReadableStream(e))
      return e;
    if (X.isArrayBufferView(e))
      return e.buffer;
    if (X.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (r) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return uf(e, this.formSerializer).toString();
      if ((a = X.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return go(
          a ? { "files[]": e } : e,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return r || s ? (t.setContentType("application/json", !1), ff(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || lr.transitional, n = t && t.forcedJSONParsing, s = this.responseType === "json";
    if (X.isResponse(e) || X.isReadableStream(e))
      return e;
    if (e && X.isString(e) && (n && !this.responseType || s)) {
      const o = !(t && t.silentJSONParsing) && s;
      try {
        return JSON.parse(e, this.parseReviver);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? ke.from(a, ke.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: Gt.classes.FormData,
    Blob: Gt.classes.Blob
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
X.forEach(["delete", "get", "head", "post", "put", "patch"], (i) => {
  lr.headers[i] = {};
});
const pf = X.toObjectSet([
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
]), mf = (i) => {
  const e = {};
  let t, n, s;
  return i && i.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), t = o.substring(0, s).trim().toLowerCase(), n = o.substring(s + 1).trim(), !(!t || e[t] && pf[t]) && (t === "set-cookie" ? e[t] ? e[t].push(n) : e[t] = [n] : e[t] = e[t] ? e[t] + ", " + n : n);
  }), e;
}, xl = Symbol("internals");
function Ns(i) {
  return i && String(i).trim().toLowerCase();
}
function Yr(i) {
  return i === !1 || i == null ? i : X.isArray(i) ? i.map(Yr) : String(i);
}
function gf(i) {
  const e = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = t.exec(i); )
    e[n[1]] = n[2];
  return e;
}
const _f = (i) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());
function Io(i, e, t, n, s) {
  if (X.isFunction(n))
    return n.call(this, e, t);
  if (s && (e = t), !!X.isString(e)) {
    if (X.isString(n))
      return e.indexOf(n) !== -1;
    if (X.isRegExp(n))
      return n.test(e);
  }
}
function vf(i) {
  return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function yf(i, e) {
  const t = X.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(i, n + t, {
      value: function(s, r, o) {
        return this[n].call(this, e, s, r, o);
      },
      configurable: !0
    });
  });
}
let Zt = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, n) {
    const s = this;
    function r(a, l, c) {
      const u = Ns(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = X.findKey(s, u);
      (!d || s[d] === void 0 || c === !0 || c === void 0 && s[d] !== !1) && (s[d || l] = Yr(a));
    }
    const o = (a, l) => X.forEach(a, (c, u) => r(c, u, l));
    if (X.isPlainObject(e) || e instanceof this.constructor)
      o(e, t);
    else if (X.isString(e) && (e = e.trim()) && !_f(e))
      o(mf(e), t);
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
    if (e = Ns(e), e) {
      const n = X.findKey(this, e);
      if (n) {
        const s = this[n];
        if (!t)
          return s;
        if (t === !0)
          return gf(s);
        if (X.isFunction(t))
          return t.call(this, s, n);
        if (X.isRegExp(t))
          return t.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = Ns(e), e) {
      const n = X.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!t || Io(this, this[n], n, t)));
    }
    return !1;
  }
  delete(e, t) {
    const n = this;
    let s = !1;
    function r(o) {
      if (o = Ns(o), o) {
        const a = X.findKey(n, o);
        a && (!t || Io(n, n[a], a, t)) && (delete n[a], s = !0);
      }
    }
    return X.isArray(e) ? e.forEach(r) : r(e), s;
  }
  clear(e) {
    const t = Object.keys(this);
    let n = t.length, s = !1;
    for (; n--; ) {
      const r = t[n];
      (!e || Io(this, this[r], r, e, !0)) && (delete this[r], s = !0);
    }
    return s;
  }
  normalize(e) {
    const t = this, n = {};
    return X.forEach(this, (s, r) => {
      const o = X.findKey(n, r);
      if (o) {
        t[o] = Yr(s), delete t[r];
        return;
      }
      const a = e ? vf(r) : String(r).trim();
      a !== r && delete t[r], t[a] = Yr(s), n[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return X.forEach(this, (n, s) => {
      n != null && n !== !1 && (t[s] = e && X.isArray(n) ? n.join(", ") : n);
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
    return t.forEach((s) => n.set(s)), n;
  }
  static accessor(e) {
    const n = (this[xl] = this[xl] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function r(o) {
      const a = Ns(o);
      n[a] || (yf(s, o), n[a] = !0);
    }
    return X.isArray(e) ? e.forEach(r) : r(e), this;
  }
};
Zt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
X.reduceDescriptors(Zt.prototype, ({ value: i }, e) => {
  let t = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => i,
    set(n) {
      this[t] = n;
    }
  };
});
X.freezeMethods(Zt);
function Do(i, e) {
  const t = this || lr, n = e || t, s = Zt.from(n.headers);
  let r = n.data;
  return X.forEach(i, function(a) {
    r = a.call(t, r, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), r;
}
function Wu(i) {
  return !!(i && i.__CANCEL__);
}
let cr = class extends ke {
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
    super(e ?? "canceled", ke.ERR_CANCELED, t, n), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function ju(i, e, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status) ? i(t) : e(new ke(
    "Request failed with status code " + t.status,
    [ke.ERR_BAD_REQUEST, ke.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function xf(i) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
  return e && e[1] || "";
}
function Ef(i, e) {
  i = i || 10;
  const t = new Array(i), n = new Array(i);
  let s = 0, r = 0, o;
  return e = e !== void 0 ? e : 1e3, function(l) {
    const c = Date.now(), u = n[r];
    o || (o = c), t[s] = l, n[s] = c;
    let d = r, h = 0;
    for (; d !== s; )
      h += t[d++], d = d % i;
    if (s = (s + 1) % i, s === r && (r = (r + 1) % i), c - o < e)
      return;
    const f = u && c - u;
    return f ? Math.round(h * 1e3 / f) : void 0;
  };
}
function Sf(i, e) {
  let t = 0, n = 1e3 / e, s, r;
  const o = (c, u = Date.now()) => {
    t = u, s = null, r && (clearTimeout(r), r = null), i(...c);
  };
  return [(...c) => {
    const u = Date.now(), d = u - t;
    d >= n ? o(c, u) : (s = c, r || (r = setTimeout(() => {
      r = null, o(s);
    }, n - d)));
  }, () => s && o(s)];
}
const to = (i, e, t = 3) => {
  let n = 0;
  const s = Ef(50, 250);
  return Sf((r) => {
    const o = r.loaded, a = r.lengthComputable ? r.total : void 0, l = o - n, c = s(l), u = o <= a;
    n = o;
    const d = {
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
    i(d);
  }, t);
}, El = (i, e) => {
  const t = i != null;
  return [(n) => e[0]({
    lengthComputable: t,
    total: i,
    loaded: n
  }), e[1]];
}, Sl = (i) => (...e) => X.asap(() => i(...e)), Mf = Gt.hasStandardBrowserEnv ? /* @__PURE__ */ ((i, e) => (t) => (t = new URL(t, Gt.origin), i.protocol === t.protocol && i.host === t.host && (e || i.port === t.port)))(
  new URL(Gt.origin),
  Gt.navigator && /(msie|trident)/i.test(Gt.navigator.userAgent)
) : () => !0, Af = Gt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(i, e, t, n, s, r, o) {
      if (typeof document > "u") return;
      const a = [`${i}=${encodeURIComponent(e)}`];
      X.isNumber(t) && a.push(`expires=${new Date(t).toUTCString()}`), X.isString(n) && a.push(`path=${n}`), X.isString(s) && a.push(`domain=${s}`), r === !0 && a.push("secure"), X.isString(o) && a.push(`SameSite=${o}`), document.cookie = a.join("; ");
    },
    read(i) {
      if (typeof document > "u") return null;
      const e = document.cookie.match(new RegExp("(?:^|; )" + i + "=([^;]*)"));
      return e ? decodeURIComponent(e[1]) : null;
    },
    remove(i) {
      this.write(i, "", Date.now() - 864e5, "/");
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
function Tf(i) {
  return typeof i != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}
function bf(i, e) {
  return e ? i.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : i;
}
function Xu(i, e, t) {
  let n = !Tf(e);
  return i && (n || t == !1) ? bf(i, e) : e;
}
const Ml = (i) => i instanceof Zt ? { ...i } : i;
function Ni(i, e) {
  e = e || {};
  const t = {};
  function n(c, u, d, h) {
    return X.isPlainObject(c) && X.isPlainObject(u) ? X.merge.call({ caseless: h }, c, u) : X.isPlainObject(u) ? X.merge({}, u) : X.isArray(u) ? u.slice() : u;
  }
  function s(c, u, d, h) {
    if (X.isUndefined(u)) {
      if (!X.isUndefined(c))
        return n(void 0, c, d, h);
    } else return n(c, u, d, h);
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
  function a(c, u, d) {
    if (d in e)
      return n(c, u);
    if (d in i)
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
    headers: (c, u, d) => s(Ml(c), Ml(u), d, !0)
  };
  return X.forEach(
    Object.keys({ ...i, ...e }),
    function(u) {
      if (u === "__proto__" || u === "constructor" || u === "prototype")
        return;
      const d = X.hasOwnProp(l, u) ? l[u] : s, h = d(i[u], e[u], u);
      X.isUndefined(h) && d !== a || (t[u] = h);
    }
  ), t;
}
const qu = (i) => {
  const e = Ni({}, i);
  let { data: t, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: r, headers: o, auth: a } = e;
  if (e.headers = o = Zt.from(o), e.url = Hu(Xu(e.baseURL, e.url, e.allowAbsoluteUrls), i.params, i.paramsSerializer), a && o.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), X.isFormData(t)) {
    if (Gt.hasStandardBrowserEnv || Gt.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if (X.isFunction(t.getHeaders)) {
      const l = t.getHeaders(), c = ["content-type", "content-length"];
      Object.entries(l).forEach(([u, d]) => {
        c.includes(u.toLowerCase()) && o.set(u, d);
      });
    }
  }
  if (Gt.hasStandardBrowserEnv && (n && X.isFunction(n) && (n = n(e)), n || n !== !1 && Mf(e.url))) {
    const l = s && r && Af.read(r);
    l && o.set(s, l);
  }
  return e;
}, wf = typeof XMLHttpRequest < "u", Rf = wf && function(i) {
  return new Promise(function(t, n) {
    const s = qu(i);
    let r = s.data;
    const o = Zt.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: c } = s, u, d, h, f, g;
    function _() {
      f && f(), g && g(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let p = new XMLHttpRequest();
    p.open(s.method.toUpperCase(), s.url, !0), p.timeout = s.timeout;
    function m() {
      if (!p)
        return;
      const v = Zt.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), R = {
        data: !a || a === "text" || a === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: v,
        config: i,
        request: p
      };
      ju(function(w) {
        t(w), _();
      }, function(w) {
        n(w), _();
      }, R), p = null;
    }
    "onloadend" in p ? p.onloadend = m : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(m);
    }, p.onabort = function() {
      p && (n(new ke("Request aborted", ke.ECONNABORTED, i, p)), p = null);
    }, p.onerror = function(b) {
      const R = b && b.message ? b.message : "Network Error", A = new ke(R, ke.ERR_NETWORK, i, p);
      A.event = b || null, n(A), p = null;
    }, p.ontimeout = function() {
      let b = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const R = s.transitional || Ya;
      s.timeoutErrorMessage && (b = s.timeoutErrorMessage), n(new ke(
        b,
        R.clarifyTimeoutError ? ke.ETIMEDOUT : ke.ECONNABORTED,
        i,
        p
      )), p = null;
    }, r === void 0 && o.setContentType(null), "setRequestHeader" in p && X.forEach(o.toJSON(), function(b, R) {
      p.setRequestHeader(R, b);
    }), X.isUndefined(s.withCredentials) || (p.withCredentials = !!s.withCredentials), a && a !== "json" && (p.responseType = s.responseType), c && ([h, g] = to(c, !0), p.addEventListener("progress", h)), l && p.upload && ([d, f] = to(l), p.upload.addEventListener("progress", d), p.upload.addEventListener("loadend", f)), (s.cancelToken || s.signal) && (u = (v) => {
      p && (n(!v || v.type ? new cr(null, i, p) : v), p.abort(), p = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const x = xf(s.url);
    if (x && Gt.protocols.indexOf(x) === -1) {
      n(new ke("Unsupported protocol " + x + ":", ke.ERR_BAD_REQUEST, i));
      return;
    }
    p.send(r || null);
  });
}, Cf = (i, e) => {
  const { length: t } = i = i ? i.filter(Boolean) : [];
  if (e || t) {
    let n = new AbortController(), s;
    const r = function(c) {
      if (!s) {
        s = !0, a();
        const u = c instanceof Error ? c : this.reason;
        n.abort(u instanceof ke ? u : new cr(u instanceof Error ? u.message : u));
      }
    };
    let o = e && setTimeout(() => {
      o = null, r(new ke(`timeout of ${e}ms exceeded`, ke.ETIMEDOUT));
    }, e);
    const a = () => {
      i && (o && clearTimeout(o), o = null, i.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(r) : c.removeEventListener("abort", r);
      }), i = null);
    };
    i.forEach((c) => c.addEventListener("abort", r));
    const { signal: l } = n;
    return l.unsubscribe = () => X.asap(a), l;
  }
}, Lf = function* (i, e) {
  let t = i.byteLength;
  if (t < e) {
    yield i;
    return;
  }
  let n = 0, s;
  for (; n < t; )
    s = n + e, yield i.slice(n, s), n = s;
}, Pf = async function* (i, e) {
  for await (const t of If(i))
    yield* Lf(t, e);
}, If = async function* (i) {
  if (i[Symbol.asyncIterator]) {
    yield* i;
    return;
  }
  const e = i.getReader();
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
}, Al = (i, e, t, n) => {
  const s = Pf(i, e);
  let r = 0, o, a = (l) => {
    o || (o = !0, n && n(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: c, value: u } = await s.next();
        if (c) {
          a(), l.close();
          return;
        }
        let d = u.byteLength;
        if (t) {
          let h = r += d;
          t(h);
        }
        l.enqueue(new Uint8Array(u));
      } catch (c) {
        throw a(c), c;
      }
    },
    cancel(l) {
      return a(l), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Tl = 64 * 1024, { isFunction: hr } = X, Df = (({ Request: i, Response: e }) => ({
  Request: i,
  Response: e
}))(X.global), {
  ReadableStream: bl,
  TextEncoder: wl
} = X.global, Rl = (i, ...e) => {
  try {
    return !!i(...e);
  } catch {
    return !1;
  }
}, Uf = (i) => {
  i = X.merge.call({
    skipUndefined: !0
  }, Df, i);
  const { fetch: e, Request: t, Response: n } = i, s = e ? hr(e) : typeof fetch == "function", r = hr(t), o = hr(n);
  if (!s)
    return !1;
  const a = s && hr(bl), l = s && (typeof wl == "function" ? /* @__PURE__ */ ((g) => (_) => g.encode(_))(new wl()) : async (g) => new Uint8Array(await new t(g).arrayBuffer())), c = r && a && Rl(() => {
    let g = !1;
    const _ = new t(Gt.origin, {
      body: new bl(),
      method: "POST",
      get duplex() {
        return g = !0, "half";
      }
    }).headers.has("Content-Type");
    return g && !_;
  }), u = o && a && Rl(() => X.isReadableStream(new n("").body)), d = {
    stream: u && ((g) => g.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((g) => {
    !d[g] && (d[g] = (_, p) => {
      let m = _ && _[g];
      if (m)
        return m.call(_);
      throw new ke(`Response type '${g}' is not supported`, ke.ERR_NOT_SUPPORT, p);
    });
  });
  const h = async (g) => {
    if (g == null)
      return 0;
    if (X.isBlob(g))
      return g.size;
    if (X.isSpecCompliantForm(g))
      return (await new t(Gt.origin, {
        method: "POST",
        body: g
      }).arrayBuffer()).byteLength;
    if (X.isArrayBufferView(g) || X.isArrayBuffer(g))
      return g.byteLength;
    if (X.isURLSearchParams(g) && (g = g + ""), X.isString(g))
      return (await l(g)).byteLength;
  }, f = async (g, _) => {
    const p = X.toFiniteNumber(g.getContentLength());
    return p ?? h(_);
  };
  return async (g) => {
    let {
      url: _,
      method: p,
      data: m,
      signal: x,
      cancelToken: v,
      timeout: b,
      onDownloadProgress: R,
      onUploadProgress: A,
      responseType: w,
      headers: H,
      withCredentials: E = "same-origin",
      fetchOptions: T
    } = qu(g), G = e || fetch;
    w = w ? (w + "").toLowerCase() : "text";
    let J = Cf([x, v && v.toAbortSignal()], b), le = null;
    const C = J && J.unsubscribe && (() => {
      J.unsubscribe();
    });
    let P;
    try {
      if (A && c && p !== "get" && p !== "head" && (P = await f(H, m)) !== 0) {
        let Z = new t(_, {
          method: "POST",
          body: m,
          duplex: "half"
        }), he;
        if (X.isFormData(m) && (he = Z.headers.get("content-type")) && H.setContentType(he), Z.body) {
          const [z, te] = El(
            P,
            to(Sl(A))
          );
          m = Al(Z.body, Tl, z, te);
        }
      }
      X.isString(E) || (E = E ? "include" : "omit");
      const D = r && "credentials" in t.prototype, ee = {
        ...T,
        signal: J,
        method: p.toUpperCase(),
        headers: H.normalize().toJSON(),
        body: m,
        duplex: "half",
        credentials: D ? E : void 0
      };
      le = r && new t(_, ee);
      let V = await (r ? G(le, T) : G(_, ee));
      const q = u && (w === "stream" || w === "response");
      if (u && (R || q && C)) {
        const Z = {};
        ["status", "statusText", "headers"].forEach((se) => {
          Z[se] = V[se];
        });
        const he = X.toFiniteNumber(V.headers.get("content-length")), [z, te] = R && El(
          he,
          to(Sl(R), !0)
        ) || [];
        V = new n(
          Al(V.body, Tl, z, () => {
            te && te(), C && C();
          }),
          Z
        );
      }
      w = w || "text";
      let Y = await d[X.findKey(d, w) || "text"](V, g);
      return !q && C && C(), await new Promise((Z, he) => {
        ju(Z, he, {
          data: Y,
          headers: Zt.from(V.headers),
          status: V.status,
          statusText: V.statusText,
          config: g,
          request: le
        });
      });
    } catch (D) {
      throw C && C(), D && D.name === "TypeError" && /Load failed|fetch/i.test(D.message) ? Object.assign(
        new ke("Network Error", ke.ERR_NETWORK, g, le, D && D.response),
        {
          cause: D.cause || D
        }
      ) : ke.from(D, D && D.code, g, le, D && D.response);
    }
  };
}, Nf = /* @__PURE__ */ new Map(), Yu = (i) => {
  let e = i && i.env || {};
  const { fetch: t, Request: n, Response: s } = e, r = [
    n,
    s,
    t
  ];
  let o = r.length, a = o, l, c, u = Nf;
  for (; a--; )
    l = r[a], c = u.get(l), c === void 0 && u.set(l, c = a ? /* @__PURE__ */ new Map() : Uf(e)), u = c;
  return c;
};
Yu();
const $a = {
  http: Jh,
  xhr: Rf,
  fetch: {
    get: Yu
  }
};
X.forEach($a, (i, e) => {
  if (i) {
    try {
      Object.defineProperty(i, "name", { value: e });
    } catch {
    }
    Object.defineProperty(i, "adapterName", { value: e });
  }
});
const Cl = (i) => `- ${i}`, Of = (i) => X.isFunction(i) || i === null || i === !1;
function Ff(i, e) {
  i = X.isArray(i) ? i : [i];
  const { length: t } = i;
  let n, s;
  const r = {};
  for (let o = 0; o < t; o++) {
    n = i[o];
    let a;
    if (s = n, !Of(n) && (s = $a[(a = String(n)).toLowerCase()], s === void 0))
      throw new ke(`Unknown adapter '${a}'`);
    if (s && (X.isFunction(s) || (s = s.get(e))))
      break;
    r[a || "#" + o] = s;
  }
  if (!s) {
    const o = Object.entries(r).map(
      ([l, c]) => `adapter ${l} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = t ? o.length > 1 ? `since :
` + o.map(Cl).join(`
`) : " " + Cl(o[0]) : "as no adapter specified";
    throw new ke(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const Ku = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Ff,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: $a
};
function Uo(i) {
  if (i.cancelToken && i.cancelToken.throwIfRequested(), i.signal && i.signal.aborted)
    throw new cr(null, i);
}
function Ll(i) {
  return Uo(i), i.headers = Zt.from(i.headers), i.data = Do.call(
    i,
    i.transformRequest
  ), ["post", "put", "patch"].indexOf(i.method) !== -1 && i.headers.setContentType("application/x-www-form-urlencoded", !1), Ku.getAdapter(i.adapter || lr.adapter, i)(i).then(function(n) {
    return Uo(i), n.data = Do.call(
      i,
      i.transformResponse,
      n
    ), n.headers = Zt.from(n.headers), n;
  }, function(n) {
    return Wu(n) || (Uo(i), n && n.response && (n.response.data = Do.call(
      i,
      i.transformResponse,
      n.response
    ), n.response.headers = Zt.from(n.response.headers))), Promise.reject(n);
  });
}
const $u = "1.13.5", _o = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((i, e) => {
  _o[i] = function(n) {
    return typeof n === i || "a" + (e < 1 ? "n " : " ") + i;
  };
});
const Pl = {};
_o.transitional = function(e, t, n) {
  function s(r, o) {
    return "[Axios v" + $u + "] Transitional option '" + r + "'" + o + (n ? ". " + n : "");
  }
  return (r, o, a) => {
    if (e === !1)
      throw new ke(
        s(o, " has been removed" + (t ? " in " + t : "")),
        ke.ERR_DEPRECATED
      );
    return t && !Pl[o] && (Pl[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(r, o, a) : !0;
  };
};
_o.spelling = function(e) {
  return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
};
function Bf(i, e, t) {
  if (typeof i != "object")
    throw new ke("options must be an object", ke.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(i);
  let s = n.length;
  for (; s-- > 0; ) {
    const r = n[s], o = e[r];
    if (o) {
      const a = i[r], l = a === void 0 || o(a, r, i);
      if (l !== !0)
        throw new ke("option " + r + " must be " + l, ke.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new ke("Unknown option " + r, ke.ERR_BAD_OPTION);
  }
}
const Kr = {
  assertOptions: Bf,
  validators: _o
}, an = Kr.validators;
let Pi = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new yl(),
      response: new yl()
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
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const r = s.stack ? s.stack.replace(/^.+\n/, "") : "";
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
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = Ni(this.defaults, t);
    const { transitional: n, paramsSerializer: s, headers: r } = t;
    n !== void 0 && Kr.assertOptions(n, {
      silentJSONParsing: an.transitional(an.boolean),
      forcedJSONParsing: an.transitional(an.boolean),
      clarifyTimeoutError: an.transitional(an.boolean),
      legacyInterceptorReqResOrdering: an.transitional(an.boolean)
    }, !1), s != null && (X.isFunction(s) ? t.paramsSerializer = {
      serialize: s
    } : Kr.assertOptions(s, {
      encode: an.function,
      serialize: an.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), Kr.assertOptions(t, {
      baseUrl: an.spelling("baseURL"),
      withXsrfToken: an.spelling("withXSRFToken")
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
    ), t.headers = Zt.concat(o, r);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(_) {
      if (typeof _.runWhen == "function" && _.runWhen(t) === !1)
        return;
      l = l && _.synchronous;
      const p = t.transitional || Ya;
      p && p.legacyInterceptorReqResOrdering ? a.unshift(_.fulfilled, _.rejected) : a.push(_.fulfilled, _.rejected);
    });
    const c = [];
    this.interceptors.response.forEach(function(_) {
      c.push(_.fulfilled, _.rejected);
    });
    let u, d = 0, h;
    if (!l) {
      const g = [Ll.bind(this), void 0];
      for (g.unshift(...a), g.push(...c), h = g.length, u = Promise.resolve(t); d < h; )
        u = u.then(g[d++], g[d++]);
      return u;
    }
    h = a.length;
    let f = t;
    for (; d < h; ) {
      const g = a[d++], _ = a[d++];
      try {
        f = g(f);
      } catch (p) {
        _.call(this, p);
        break;
      }
    }
    try {
      u = Ll.call(this, f);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, h = c.length; d < h; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(e) {
    e = Ni(this.defaults, e);
    const t = Xu(e.baseURL, e.url, e.allowAbsoluteUrls);
    return Hu(t, e.params, e.paramsSerializer);
  }
};
X.forEach(["delete", "get", "head", "options"], function(e) {
  Pi.prototype[e] = function(t, n) {
    return this.request(Ni(n || {}, {
      method: e,
      url: t,
      data: (n || {}).data
    }));
  };
});
X.forEach(["post", "put", "patch"], function(e) {
  function t(n) {
    return function(r, o, a) {
      return this.request(Ni(a || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: r,
        data: o
      }));
    };
  }
  Pi.prototype[e] = t(), Pi.prototype[e + "Form"] = t(!0);
});
let Vf = class Ju {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(r) {
      t = r;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners) return;
      let r = n._listeners.length;
      for (; r-- > 0; )
        n._listeners[r](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let r;
      const o = new Promise((a) => {
        n.subscribe(a), r = a;
      }).then(s);
      return o.cancel = function() {
        n.unsubscribe(r);
      }, o;
    }, e(function(r, o, a) {
      n.reason || (n.reason = new cr(r, o, a), t(n.reason));
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
      token: new Ju(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
};
function kf(i) {
  return function(t) {
    return i.apply(null, t);
  };
}
function zf(i) {
  return X.isObject(i) && i.isAxiosError === !0;
}
const Ta = {
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
Object.entries(Ta).forEach(([i, e]) => {
  Ta[e] = i;
});
function Zu(i) {
  const e = new Pi(i), t = Pu(Pi.prototype.request, e);
  return X.extend(t, Pi.prototype, e, { allOwnKeys: !0 }), X.extend(t, e, null, { allOwnKeys: !0 }), t.create = function(s) {
    return Zu(Ni(i, s));
  }, t;
}
const At = Zu(lr);
At.Axios = Pi;
At.CanceledError = cr;
At.CancelToken = Vf;
At.isCancel = Wu;
At.VERSION = $u;
At.toFormData = go;
At.AxiosError = ke;
At.Cancel = At.CanceledError;
At.all = function(e) {
  return Promise.all(e);
};
At.spread = kf;
At.isAxiosError = zf;
At.mergeConfig = Ni;
At.AxiosHeaders = Zt;
At.formToJSON = (i) => Gu(X.isHTMLForm(i) ? new FormData(i) : i);
At.getAdapter = Ku.getAdapter;
At.HttpStatusCode = Ta;
At.default = At;
const {
  Axios: vM,
  AxiosError: yM,
  CanceledError: xM,
  isCancel: EM,
  CancelToken: SM,
  VERSION: MM,
  all: AM,
  Cancel: TM,
  isAxiosError: bM,
  spread: wM,
  toFormData: RM,
  AxiosHeaders: CM,
  HttpStatusCode: LM,
  formToJSON: PM,
  getAdapter: IM,
  mergeConfig: DM
} = At;
let Qs = null, no = null;
function Hf(i) {
  no = i, Qs = At.create({
    baseURL: i.apiUrl,
    timeout: 6e4,
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": i.apiKey
    }
  }), Qs.interceptors.response.use(
    (e) => e,
    (e) => Promise.reject(e)
  );
}
function Gf() {
  if (!Qs)
    throw new Error("[LiyaAiEnvVuejs] API client not initialized. Call liyaAiEnvVuejsInitializeClient first.");
  return Qs;
}
function Cs() {
  if (!no)
    throw new Error("[LiyaAiEnvVuejs] Config not initialized. Call liyaAiEnvVuejsInitializeClient first.");
  return no;
}
function UM() {
  return Qs !== null && no !== null;
}
async function ki(i, e, t) {
  var s, r, o, a;
  const n = Gf();
  try {
    return (await n.request({
      method: i,
      url: e,
      data: t
    })).data;
  } catch (l) {
    return At.isAxiosError(l) ? {
      status: "error",
      message: ((r = (s = l.response) == null ? void 0 : s.data) == null ? void 0 : r.message) || l.message,
      code: ((a = (o = l.response) == null ? void 0 : o.data) == null ? void 0 : a.code) || void 0
    } : {
      status: "error",
      message: "An unexpected error occurred"
    };
  }
}
class Qu extends Error {
  constructor(t, n) {
    super(t);
    Po(this, "code");
    this.code = n, this.name = "LiyaAiEnvVuejsApiError";
  }
}
async function Wf(i, e) {
  const n = {
    assistant_id: Cs().assistantId,
    message: i,
    session_id: e
  }, s = await ki(
    "POST",
    "/api/v1/external/chat/",
    n
  );
  if (s.status === "success" && s.data)
    return s.data;
  if (s.code)
    throw new Qu(s.message || "API error", s.code);
  return null;
}
async function jf(i, e) {
  const t = {
    text: i,
    voice: (e == null ? void 0 : e.voice) || "nova",
    speed: (e == null ? void 0 : e.speed) || 1,
    include_audio: (e == null ? void 0 : e.include_audio) ?? !0,
    include_gestures: (e == null ? void 0 : e.include_gestures) ?? !0
  }, n = await ki(
    "POST",
    "/api/v1/external/avatar/speech/",
    t
  );
  return n.status === "success" && n.data ? n.data : null;
}
async function NM(i) {
  const e = await ki(
    "GET",
    `/api/v1/external/sessions/${i}/messages/`
  );
  return e.status === "success" && e.data ? e.data.messages : [];
}
class Ja extends Error {
  constructor(t, n) {
    super(t);
    Po(this, "code");
    this.code = n, this.name = "LiyaAiEnvVuejsAvatarApiError";
  }
}
async function ed(i) {
  const t = Cs().assistantId, n = t ? `?assistant_id=${t}` : "", s = await ki(
    "GET",
    `/api/v1/external/avatar/model/${n}`
  );
  if (s.status === "success" && s.data)
    return s.data;
  throw new Ja(
    s.message || "Failed to get avatar model",
    "AVATAR_MODEL_ERROR"
  );
}
async function td(i) {
  const t = Cs().assistantId, n = t ? `?assistant_id=${t}` : "", s = await ki(
    "GET",
    `/api/v1/external/scene/background/${n}`
  );
  if (s.status === "success" && s.data)
    return s.data;
  throw new Ja(
    s.message || "Failed to get scene background",
    "SCENE_BACKGROUND_ERROR"
  );
}
async function Xf(i) {
  const e = Cs(), t = i || e.assistantId, n = t ? `?assistant_id=${t}` : "", s = await ki(
    "GET",
    `/api/v1/external/presentations/${n}`
  );
  return s.status === "success" && s.data ? s.data : [];
}
async function nd() {
  const i = await ki(
    "GET",
    "/api/v1/external/user/access/"
  );
  if (i.status === "success" && i.data)
    return i.data;
  throw new Ja(
    i.message || "Failed to check user access",
    "USER_ACCESS_ERROR"
  );
}
const qf = {
  tr: {
    status: {
      ready: "Hazır",
      listening: "Dinliyorum...",
      preparing: "Hazırlanıyor...",
      speaking: "Konuşuyor...",
      online: "Çevrimiçi"
    },
    browser: {
      unsupportedTitle: "Tarayıcı Desteklenmiyor",
      unsupportedMessage: "Bu ortam tarayıcınızda çalışmıyor. 3D sahne için WebGL desteği gereklidir.",
      webglRequired: "WebGL desteği gerekli",
      recommendedBrowsers: "Önerilen: Chrome, Edge, Firefox, Safari",
      closeButton: "Kapat"
    },
    mic: {
      permissionRequired: "Mikrofon İzni Gerekli",
      permissionMessage: "Sesli iletişim için mikrofon erişimine izin verin.",
      allowButton: "İzin Ver",
      denied: "Mikrofon izni reddedildi"
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
    },
    settings: {
      title: "Ayarlar",
      outfitColors: "Kıyafet Renkleri",
      top: "Üst",
      bottom: "Alt",
      footwear: "Ayakkabı",
      presets: "Hazır Renkler",
      customColor: "Özel Renk",
      reset: "Sıfırla"
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
    browser: {
      unsupportedTitle: "Browser Not Supported",
      unsupportedMessage: "This environment does not work in your browser. WebGL support is required for 3D scene.",
      webglRequired: "WebGL support required",
      recommendedBrowsers: "Recommended: Chrome, Edge, Firefox, Safari",
      closeButton: "Close"
    },
    mic: {
      permissionRequired: "Microphone Permission Required",
      permissionMessage: "Allow microphone access for voice communication.",
      allowButton: "Allow",
      denied: "Microphone permission denied"
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
    },
    settings: {
      title: "Settings",
      outfitColors: "Outfit Colors",
      top: "Top",
      bottom: "Bottom",
      footwear: "Footwear",
      presets: "Presets",
      customColor: "Custom Color",
      reset: "Reset"
    }
  }
};
function $r(i) {
  return i === "tr" || i === "en";
}
function Yf() {
  if (typeof window > "u" || typeof navigator > "u")
    return "tr";
  const e = (navigator.language || navigator.userLanguage || "").split("-")[0].toLowerCase();
  return $r(e) ? e : "tr";
}
const pi = Ne("tr");
function Za() {
  const i = He(() => pi.value), e = He(() => qf[pi.value]);
  function t(s) {
    $r(s) ? pi.value = s : pi.value = "tr";
  }
  function n(s) {
    s && $r(s) ? pi.value = s : s ? pi.value = "tr" : pi.value = Yf();
  }
  return {
    locale: eo(i),
    t: e,
    setLocale: t,
    initLocale: n,
    liyaAiEnvVuejsIsSupportedLocale: $r
  };
}
const OM = {
  install(i, e) {
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
    Hf(e);
    const { initLocale: t } = Za();
    t(e.locale), i.config.globalProperties.$liyaAiEnvVuejs = {
      config: e
    }, i.provide("liyaAiEnvVuejsConfig", e);
  }
};
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Qa = "160", Kf = 0, Il = 1, $f = 2, id = 1, sd = 2, zn = 3, jn = 0, Qt = 1, wn = 2, oi = 0, ms = 1, Dl = 2, Ul = 3, Nl = 4, Jf = 5, bi = 100, Zf = 101, Qf = 102, Ol = 103, Fl = 104, ep = 200, tp = 201, np = 202, ip = 203, ba = 204, wa = 205, sp = 206, rp = 207, op = 208, ap = 209, lp = 210, cp = 211, up = 212, dp = 213, hp = 214, fp = 0, pp = 1, mp = 2, io = 3, gp = 4, _p = 5, vp = 6, yp = 7, rd = 0, xp = 1, Ep = 2, ai = 0, Sp = 1, Mp = 2, Ap = 3, od = 4, Tp = 5, bp = 6, Bl = "attached", wp = "detached", ad = 300, ys = 301, xs = 302, Ra = 303, Ca = 304, vo = 306, Es = 1e3, un = 1001, so = 1002, Ut = 1003, La = 1004, Jr = 1005, $t = 1006, ld = 1007, Oi = 1008, li = 1009, Rp = 1010, Cp = 1011, el = 1012, cd = 1013, si = 1014, Gn = 1015, er = 1016, ud = 1017, dd = 1018, Ii = 1020, Lp = 1021, dn = 1023, Pp = 1024, Ip = 1025, Di = 1026, Ss = 1027, Dp = 1028, hd = 1029, Up = 1030, fd = 1031, pd = 1033, No = 33776, Oo = 33777, Fo = 33778, Bo = 33779, Vl = 35840, kl = 35841, zl = 35842, Hl = 35843, md = 36196, Gl = 37492, Wl = 37496, jl = 37808, Xl = 37809, ql = 37810, Yl = 37811, Kl = 37812, $l = 37813, Jl = 37814, Zl = 37815, Ql = 37816, ec = 37817, tc = 37818, nc = 37819, ic = 37820, sc = 37821, Vo = 36492, rc = 36494, oc = 36495, Np = 36283, ac = 36284, lc = 36285, cc = 36286, Op = 2200, Fp = 2201, Bp = 2202, tr = 2300, Ms = 2301, ko = 2302, ds = 2400, hs = 2401, ro = 2402, tl = 2500, Vp = 2501, kp = 0, gd = 1, Pa = 2, _d = 3e3, Ui = 3001, zp = 3200, Hp = 3201, vd = 0, Gp = 1, hn = "", xt = "srgb", Nt = "srgb-linear", nl = "display-p3", yo = "display-p3-linear", oo = "linear", gt = "srgb", ao = "rec709", lo = "p3", ji = 7680, uc = 519, Wp = 512, jp = 513, Xp = 514, yd = 515, qp = 516, Yp = 517, Kp = 518, $p = 519, Ia = 35044, dc = "300 es", Da = 1035, Wn = 2e3, co = 2001;
class zi {
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
    const s = this._listeners[e];
    if (s !== void 0) {
      const r = s.indexOf(t);
      r !== -1 && s.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const s = n.slice(0);
      for (let r = 0, o = s.length; r < o; r++)
        s[r].call(this, e);
      e.target = null;
    }
  }
}
const kt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let hc = 1234567;
const Ys = Math.PI / 180, As = 180 / Math.PI;
function yn() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (kt[i & 255] + kt[i >> 8 & 255] + kt[i >> 16 & 255] + kt[i >> 24 & 255] + "-" + kt[e & 255] + kt[e >> 8 & 255] + "-" + kt[e >> 16 & 15 | 64] + kt[e >> 24 & 255] + "-" + kt[t & 63 | 128] + kt[t >> 8 & 255] + "-" + kt[t >> 16 & 255] + kt[t >> 24 & 255] + kt[n & 255] + kt[n >> 8 & 255] + kt[n >> 16 & 255] + kt[n >> 24 & 255]).toLowerCase();
}
function Ht(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function il(i, e) {
  return (i % e + e) % e;
}
function Jp(i, e, t, n, s) {
  return n + (i - e) * (s - n) / (t - e);
}
function Zp(i, e, t) {
  return i !== e ? (t - i) / (e - i) : 0;
}
function Ks(i, e, t) {
  return (1 - t) * i + t * e;
}
function Qp(i, e, t, n) {
  return Ks(i, e, 1 - Math.exp(-t * n));
}
function em(i, e = 1) {
  return e - Math.abs(il(i, e * 2) - e);
}
function tm(i, e, t) {
  return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e), i * i * (3 - 2 * i));
}
function nm(i, e, t) {
  return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e), i * i * i * (i * (i * 6 - 15) + 10));
}
function im(i, e) {
  return i + Math.floor(Math.random() * (e - i + 1));
}
function sm(i, e) {
  return i + Math.random() * (e - i);
}
function rm(i) {
  return i * (0.5 - Math.random());
}
function om(i) {
  i !== void 0 && (hc = i);
  let e = hc += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function am(i) {
  return i * Ys;
}
function lm(i) {
  return i * As;
}
function Ua(i) {
  return (i & i - 1) === 0 && i !== 0;
}
function cm(i) {
  return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
}
function uo(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function um(i, e, t, n, s) {
  const r = Math.cos, o = Math.sin, a = r(t / 2), l = o(t / 2), c = r((e + n) / 2), u = o((e + n) / 2), d = r((e - n) / 2), h = o((e - n) / 2), f = r((n - e) / 2), g = o((n - e) / 2);
  switch (s) {
    case "XYX":
      i.set(a * u, l * d, l * h, a * c);
      break;
    case "YZY":
      i.set(l * h, a * u, l * d, a * c);
      break;
    case "ZXZ":
      i.set(l * d, l * h, a * u, a * c);
      break;
    case "XZX":
      i.set(a * u, l * g, l * f, a * c);
      break;
    case "YXY":
      i.set(l * f, a * u, l * g, a * c);
      break;
    case "ZYZ":
      i.set(l * g, l * f, a * u, a * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + s);
  }
}
function Rn(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function pt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const dm = {
  DEG2RAD: Ys,
  RAD2DEG: As,
  generateUUID: yn,
  clamp: Ht,
  euclideanModulo: il,
  mapLinear: Jp,
  inverseLerp: Zp,
  lerp: Ks,
  damp: Qp,
  pingpong: em,
  smoothstep: tm,
  smootherstep: nm,
  randInt: im,
  randFloat: sm,
  randFloatSpread: rm,
  seededRandom: om,
  degToRad: am,
  radToDeg: lm,
  isPowerOfTwo: Ua,
  ceilPowerOfTwo: cm,
  floorPowerOfTwo: uo,
  setQuaternionFromProperEuler: um,
  normalize: pt,
  denormalize: Rn
};
class ot {
  constructor(e = 0, t = 0) {
    ot.prototype.isVector2 = !0, this.x = e, this.y = t;
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
    const t = this.x, n = this.y, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6], this.y = s[1] * t + s[4] * n + s[7], this;
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
    return Math.acos(Ht(n, -1, 1));
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
    const n = Math.cos(t), s = Math.sin(t), r = this.x - e.x, o = this.y - e.y;
    return this.x = r * n - o * s + e.x, this.y = r * s + o * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class tt {
  constructor(e, t, n, s, r, o, a, l, c) {
    tt.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, s, r, o, a, l, c);
  }
  set(e, t, n, s, r, o, a, l, c) {
    const u = this.elements;
    return u[0] = e, u[1] = s, u[2] = a, u[3] = t, u[4] = r, u[5] = l, u[6] = n, u[7] = o, u[8] = c, this;
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
    const n = e.elements, s = t.elements, r = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], u = n[4], d = n[7], h = n[2], f = n[5], g = n[8], _ = s[0], p = s[3], m = s[6], x = s[1], v = s[4], b = s[7], R = s[2], A = s[5], w = s[8];
    return r[0] = o * _ + a * x + l * R, r[3] = o * p + a * v + l * A, r[6] = o * m + a * b + l * w, r[1] = c * _ + u * x + d * R, r[4] = c * p + u * v + d * A, r[7] = c * m + u * b + d * w, r[2] = h * _ + f * x + g * R, r[5] = h * p + f * v + g * A, r[8] = h * m + f * b + g * w, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8];
    return t * o * u - t * a * c - n * r * u + n * a * l + s * r * c - s * o * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], d = u * o - a * c, h = a * l - u * r, f = c * r - o * l, g = t * d + n * h + s * f;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return e[0] = d * _, e[1] = (s * c - u * n) * _, e[2] = (a * n - s * o) * _, e[3] = h * _, e[4] = (u * t - s * l) * _, e[5] = (s * r - a * t) * _, e[6] = f * _, e[7] = (n * l - c * t) * _, e[8] = (o * t - n * r) * _, this;
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
  setUvTransform(e, t, n, s, r, o, a) {
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(
      n * l,
      n * c,
      -n * (l * o + c * a) + o + e,
      -s * c,
      s * l,
      -s * (-c * o + l * a) + a + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(zo.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(zo.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(zo.makeTranslation(e, t)), this;
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
    for (let s = 0; s < 9; s++)
      if (t[s] !== n[s]) return !1;
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
const zo = /* @__PURE__ */ new tt();
function xd(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function nr(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function hm() {
  const i = nr("canvas");
  return i.style.display = "block", i;
}
const fc = {};
function $s(i) {
  i in fc || (fc[i] = !0, console.warn(i));
}
const pc = /* @__PURE__ */ new tt().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), mc = /* @__PURE__ */ new tt().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), fr = {
  [Nt]: {
    transfer: oo,
    primaries: ao,
    toReference: (i) => i,
    fromReference: (i) => i
  },
  [xt]: {
    transfer: gt,
    primaries: ao,
    toReference: (i) => i.convertSRGBToLinear(),
    fromReference: (i) => i.convertLinearToSRGB()
  },
  [yo]: {
    transfer: oo,
    primaries: lo,
    toReference: (i) => i.applyMatrix3(mc),
    fromReference: (i) => i.applyMatrix3(pc)
  },
  [nl]: {
    transfer: gt,
    primaries: lo,
    toReference: (i) => i.convertSRGBToLinear().applyMatrix3(mc),
    fromReference: (i) => i.applyMatrix3(pc).convertLinearToSRGB()
  }
}, fm = /* @__PURE__ */ new Set([Nt, yo]), ft = {
  enabled: !0,
  _workingColorSpace: Nt,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(i) {
    if (!fm.has(i))
      throw new Error(`Unsupported working color space, "${i}".`);
    this._workingColorSpace = i;
  },
  convert: function(i, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return i;
    const n = fr[e].toReference, s = fr[t].fromReference;
    return s(n(i));
  },
  fromWorkingColorSpace: function(i, e) {
    return this.convert(i, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(i, e) {
    return this.convert(i, e, this._workingColorSpace);
  },
  getPrimaries: function(i) {
    return fr[i].primaries;
  },
  getTransfer: function(i) {
    return i === hn ? oo : fr[i].transfer;
  }
};
function gs(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Ho(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Xi;
class Ed {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Xi === void 0 && (Xi = nr("canvas")), Xi.width = e.width, Xi.height = e.height;
      const n = Xi.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Xi;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = nr("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const s = n.getImageData(0, 0, e.width, e.height), r = s.data;
      for (let o = 0; o < r.length; o++)
        r[o] = gs(r[o] / 255) * 255;
      return n.putImageData(s, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(gs(t[n] / 255) * 255) : t[n] = gs(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let pm = 0;
class Sd {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: pm++ }), this.uuid = yn(), this.data = e, this.version = 0;
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
    }, s = this.data;
    if (s !== null) {
      let r;
      if (Array.isArray(s)) {
        r = [];
        for (let o = 0, a = s.length; o < a; o++)
          s[o].isDataTexture ? r.push(Go(s[o].image)) : r.push(Go(s[o]));
      } else
        r = Go(s);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Go(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Ed.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let mm = 0;
class Ft extends zi {
  constructor(e = Ft.DEFAULT_IMAGE, t = Ft.DEFAULT_MAPPING, n = un, s = un, r = $t, o = Oi, a = dn, l = li, c = Ft.DEFAULT_ANISOTROPY, u = hn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: mm++ }), this.uuid = yn(), this.name = "", this.source = new Sd(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = s, this.magFilter = r, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new ot(0, 0), this.repeat = new ot(1, 1), this.center = new ot(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new tt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof u == "string" ? this.colorSpace = u : ($s("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = u === Ui ? xt : hn), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
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
    if (this.mapping !== ad) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Es:
          e.x = e.x - Math.floor(e.x);
          break;
        case un:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case so:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Es:
          e.y = e.y - Math.floor(e.y);
          break;
        case un:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case so:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return $s("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === xt ? Ui : _d;
  }
  set encoding(e) {
    $s("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === Ui ? xt : hn;
  }
}
Ft.DEFAULT_IMAGE = null;
Ft.DEFAULT_MAPPING = ad;
Ft.DEFAULT_ANISOTROPY = 1;
class mt {
  constructor(e = 0, t = 0, n = 0, s = 1) {
    mt.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = s;
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
  set(e, t, n, s) {
    return this.x = e, this.y = t, this.z = n, this.w = s, this;
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
    const t = this.x, n = this.y, s = this.z, r = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * n + o[8] * s + o[12] * r, this.y = o[1] * t + o[5] * n + o[9] * s + o[13] * r, this.z = o[2] * t + o[6] * n + o[10] * s + o[14] * r, this.w = o[3] * t + o[7] * n + o[11] * s + o[15] * r, this;
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
    let t, n, s, r;
    const l = e.elements, c = l[0], u = l[4], d = l[8], h = l[1], f = l[5], g = l[9], _ = l[2], p = l[6], m = l[10];
    if (Math.abs(u - h) < 0.01 && Math.abs(d - _) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(u + h) < 0.1 && Math.abs(d + _) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(c + f + m - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const v = (c + 1) / 2, b = (f + 1) / 2, R = (m + 1) / 2, A = (u + h) / 4, w = (d + _) / 4, H = (g + p) / 4;
      return v > b && v > R ? v < 0.01 ? (n = 0, s = 0.707106781, r = 0.707106781) : (n = Math.sqrt(v), s = A / n, r = w / n) : b > R ? b < 0.01 ? (n = 0.707106781, s = 0, r = 0.707106781) : (s = Math.sqrt(b), n = A / s, r = H / s) : R < 0.01 ? (n = 0.707106781, s = 0.707106781, r = 0) : (r = Math.sqrt(R), n = w / r, s = H / r), this.set(n, s, r, t), this;
    }
    let x = Math.sqrt((p - g) * (p - g) + (d - _) * (d - _) + (h - u) * (h - u));
    return Math.abs(x) < 1e-3 && (x = 1), this.x = (p - g) / x, this.y = (d - _) / x, this.z = (h - u) / x, this.w = Math.acos((c + f + m - 1) / 2), this;
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
class gm extends zi {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new mt(0, 0, e, t), this.scissorTest = !1, this.viewport = new mt(0, 0, e, t);
    const s = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && ($s("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === Ui ? xt : hn), n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: $t,
      depthBuffer: !0,
      stencilBuffer: !1,
      depthTexture: null,
      samples: 0
    }, n), this.texture = new Ft(s, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps, this.texture.internalFormat = n.internalFormat, this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
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
    return this.texture.source = new Sd(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Fi extends gm {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Md extends Ft {
  constructor(e = null, t = 1, n = 1, s = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: s }, this.magFilter = Ut, this.minFilter = Ut, this.wrapR = un, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class _m extends Ft {
  constructor(e = null, t = 1, n = 1, s = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: s }, this.magFilter = Ut, this.minFilter = Ut, this.wrapR = un, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class xn {
  constructor(e = 0, t = 0, n = 0, s = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = s;
  }
  static slerpFlat(e, t, n, s, r, o, a) {
    let l = n[s + 0], c = n[s + 1], u = n[s + 2], d = n[s + 3];
    const h = r[o + 0], f = r[o + 1], g = r[o + 2], _ = r[o + 3];
    if (a === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = d;
      return;
    }
    if (a === 1) {
      e[t + 0] = h, e[t + 1] = f, e[t + 2] = g, e[t + 3] = _;
      return;
    }
    if (d !== _ || l !== h || c !== f || u !== g) {
      let p = 1 - a;
      const m = l * h + c * f + u * g + d * _, x = m >= 0 ? 1 : -1, v = 1 - m * m;
      if (v > Number.EPSILON) {
        const R = Math.sqrt(v), A = Math.atan2(R, m * x);
        p = Math.sin(p * A) / R, a = Math.sin(a * A) / R;
      }
      const b = a * x;
      if (l = l * p + h * b, c = c * p + f * b, u = u * p + g * b, d = d * p + _ * b, p === 1 - a) {
        const R = 1 / Math.sqrt(l * l + c * c + u * u + d * d);
        l *= R, c *= R, u *= R, d *= R;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = d;
  }
  static multiplyQuaternionsFlat(e, t, n, s, r, o) {
    const a = n[s], l = n[s + 1], c = n[s + 2], u = n[s + 3], d = r[o], h = r[o + 1], f = r[o + 2], g = r[o + 3];
    return e[t] = a * g + u * d + l * f - c * h, e[t + 1] = l * g + u * h + c * d - a * f, e[t + 2] = c * g + u * f + a * h - l * d, e[t + 3] = u * g - a * d - l * h - c * f, e;
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
  set(e, t, n, s) {
    return this._x = e, this._y = t, this._z = n, this._w = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, s = e._y, r = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(n / 2), u = a(s / 2), d = a(r / 2), h = l(n / 2), f = l(s / 2), g = l(r / 2);
    switch (o) {
      case "XYZ":
        this._x = h * u * d + c * f * g, this._y = c * f * d - h * u * g, this._z = c * u * g + h * f * d, this._w = c * u * d - h * f * g;
        break;
      case "YXZ":
        this._x = h * u * d + c * f * g, this._y = c * f * d - h * u * g, this._z = c * u * g - h * f * d, this._w = c * u * d + h * f * g;
        break;
      case "ZXY":
        this._x = h * u * d - c * f * g, this._y = c * f * d + h * u * g, this._z = c * u * g + h * f * d, this._w = c * u * d - h * f * g;
        break;
      case "ZYX":
        this._x = h * u * d - c * f * g, this._y = c * f * d + h * u * g, this._z = c * u * g - h * f * d, this._w = c * u * d + h * f * g;
        break;
      case "YZX":
        this._x = h * u * d + c * f * g, this._y = c * f * d + h * u * g, this._z = c * u * g - h * f * d, this._w = c * u * d - h * f * g;
        break;
      case "XZY":
        this._x = h * u * d - c * f * g, this._y = c * f * d - h * u * g, this._z = c * u * g + h * f * d, this._w = c * u * d + h * f * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, s = Math.sin(n);
    return this._x = e.x * s, this._y = e.y * s, this._z = e.z * s, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], s = t[4], r = t[8], o = t[1], a = t[5], l = t[9], c = t[2], u = t[6], d = t[10], h = n + a + d;
    if (h > 0) {
      const f = 0.5 / Math.sqrt(h + 1);
      this._w = 0.25 / f, this._x = (u - l) * f, this._y = (r - c) * f, this._z = (o - s) * f;
    } else if (n > a && n > d) {
      const f = 2 * Math.sqrt(1 + n - a - d);
      this._w = (u - l) / f, this._x = 0.25 * f, this._y = (s + o) / f, this._z = (r + c) / f;
    } else if (a > d) {
      const f = 2 * Math.sqrt(1 + a - n - d);
      this._w = (r - c) / f, this._x = (s + o) / f, this._y = 0.25 * f, this._z = (l + u) / f;
    } else {
      const f = 2 * Math.sqrt(1 + d - n - a);
      this._w = (o - s) / f, this._x = (r + c) / f, this._y = (l + u) / f, this._z = 0.25 * f;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Ht(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const s = Math.min(1, t / n);
    return this.slerp(e, s), this;
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
    const n = e._x, s = e._y, r = e._z, o = e._w, a = t._x, l = t._y, c = t._z, u = t._w;
    return this._x = n * u + o * a + s * c - r * l, this._y = s * u + o * l + r * a - n * c, this._z = r * u + o * c + n * l - s * a, this._w = o * u - n * a - s * l - r * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, s = this._y, r = this._z, o = this._w;
    let a = o * e._w + n * e._x + s * e._y + r * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1)
      return this._w = o, this._x = n, this._y = s, this._z = r, this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const f = 1 - t;
      return this._w = f * o + t * this._w, this._x = f * n + t * this._x, this._y = f * s + t * this._y, this._z = f * r + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), u = Math.atan2(c, a), d = Math.sin((1 - t) * u) / c, h = Math.sin(t * u) / c;
    return this._w = o * d + this._w * h, this._x = n * d + this._x * h, this._y = s * d + this._y * h, this._z = r * d + this._z * h, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), s = 2 * Math.PI * Math.random(), r = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(s),
      n * Math.sin(r),
      n * Math.cos(r),
      t * Math.sin(s)
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
class U {
  constructor(e = 0, t = 0, n = 0) {
    U.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
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
    return this.applyQuaternion(gc.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(gc.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, s = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6] * s, this.y = r[1] * t + r[4] * n + r[7] * s, this.z = r[2] * t + r[5] * n + r[8] * s, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, s = this.z, r = e.elements, o = 1 / (r[3] * t + r[7] * n + r[11] * s + r[15]);
    return this.x = (r[0] * t + r[4] * n + r[8] * s + r[12]) * o, this.y = (r[1] * t + r[5] * n + r[9] * s + r[13]) * o, this.z = (r[2] * t + r[6] * n + r[10] * s + r[14]) * o, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, s = this.z, r = e.x, o = e.y, a = e.z, l = e.w, c = 2 * (o * s - a * n), u = 2 * (a * t - r * s), d = 2 * (r * n - o * t);
    return this.x = t + l * c + o * d - a * u, this.y = n + l * u + a * c - r * d, this.z = s + l * d + r * u - o * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, s = this.z, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * s, this.y = r[1] * t + r[5] * n + r[9] * s, this.z = r[2] * t + r[6] * n + r[10] * s, this.normalize();
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
    const n = e.x, s = e.y, r = e.z, o = t.x, a = t.y, l = t.z;
    return this.x = s * l - r * a, this.y = r * o - n * l, this.z = n * a - s * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Wo.copy(this).projectOnVector(e), this.sub(Wo);
  }
  reflect(e) {
    return this.sub(Wo.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Ht(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, s = this.z - e.z;
    return t * t + n * n + s * s;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const s = Math.sin(t) * e;
    return this.x = s * Math.sin(n), this.y = Math.cos(t) * e, this.z = s * Math.cos(n), this;
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
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), s = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = s, this;
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
const Wo = /* @__PURE__ */ new U(), gc = /* @__PURE__ */ new xn();
class Xn {
  constructor(e = new U(1 / 0, 1 / 0, 1 / 0), t = new U(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(pn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(pn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = pn.copy(t).multiplyScalar(0.5);
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
          e.isMesh === !0 ? e.getVertexPosition(o, pn) : pn.fromBufferAttribute(r, o), pn.applyMatrix4(e.matrixWorld), this.expandByPoint(pn);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), pr.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), pr.copy(n.boundingBox)), pr.applyMatrix4(e.matrixWorld), this.union(pr);
    }
    const s = e.children;
    for (let r = 0, o = s.length; r < o; r++)
      this.expandByObject(s[r], t);
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
    return this.clampPoint(e.center, pn), pn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Os), mr.subVectors(this.max, Os), qi.subVectors(e.a, Os), Yi.subVectors(e.b, Os), Ki.subVectors(e.c, Os), Yn.subVectors(Yi, qi), Kn.subVectors(Ki, Yi), mi.subVectors(qi, Ki);
    let t = [
      0,
      -Yn.z,
      Yn.y,
      0,
      -Kn.z,
      Kn.y,
      0,
      -mi.z,
      mi.y,
      Yn.z,
      0,
      -Yn.x,
      Kn.z,
      0,
      -Kn.x,
      mi.z,
      0,
      -mi.x,
      -Yn.y,
      Yn.x,
      0,
      -Kn.y,
      Kn.x,
      0,
      -mi.y,
      mi.x,
      0
    ];
    return !jo(t, qi, Yi, Ki, mr) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !jo(t, qi, Yi, Ki, mr)) ? !1 : (gr.crossVectors(Yn, Kn), t = [gr.x, gr.y, gr.z], jo(t, qi, Yi, Ki, mr));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, pn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(pn).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Un[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Un[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Un[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Un[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Un[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Un[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Un[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Un[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Un), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Un = [
  /* @__PURE__ */ new U(),
  /* @__PURE__ */ new U(),
  /* @__PURE__ */ new U(),
  /* @__PURE__ */ new U(),
  /* @__PURE__ */ new U(),
  /* @__PURE__ */ new U(),
  /* @__PURE__ */ new U(),
  /* @__PURE__ */ new U()
], pn = /* @__PURE__ */ new U(), pr = /* @__PURE__ */ new Xn(), qi = /* @__PURE__ */ new U(), Yi = /* @__PURE__ */ new U(), Ki = /* @__PURE__ */ new U(), Yn = /* @__PURE__ */ new U(), Kn = /* @__PURE__ */ new U(), mi = /* @__PURE__ */ new U(), Os = /* @__PURE__ */ new U(), mr = /* @__PURE__ */ new U(), gr = /* @__PURE__ */ new U(), gi = /* @__PURE__ */ new U();
function jo(i, e, t, n, s) {
  for (let r = 0, o = i.length - 3; r <= o; r += 3) {
    gi.fromArray(i, r);
    const a = s.x * Math.abs(gi.x) + s.y * Math.abs(gi.y) + s.z * Math.abs(gi.z), l = e.dot(gi), c = t.dot(gi), u = n.dot(gi);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a)
      return !1;
  }
  return !0;
}
const vm = /* @__PURE__ */ new Xn(), Fs = /* @__PURE__ */ new U(), Xo = /* @__PURE__ */ new U();
class Ln {
  constructor(e = new U(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : vm.setFromPoints(e).getCenter(n);
    let s = 0;
    for (let r = 0, o = e.length; r < o; r++)
      s = Math.max(s, n.distanceToSquared(e[r]));
    return this.radius = Math.sqrt(s), this;
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
    Fs.subVectors(e, this.center);
    const t = Fs.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), s = (n - this.radius) * 0.5;
      this.center.addScaledVector(Fs, s / n), this.radius += s;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Xo.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Fs.copy(e.center).add(Xo)), this.expandByPoint(Fs.copy(e.center).sub(Xo))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Nn = /* @__PURE__ */ new U(), qo = /* @__PURE__ */ new U(), _r = /* @__PURE__ */ new U(), $n = /* @__PURE__ */ new U(), Yo = /* @__PURE__ */ new U(), vr = /* @__PURE__ */ new U(), Ko = /* @__PURE__ */ new U();
class xo {
  constructor(e = new U(), t = new U(0, 0, -1)) {
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
    return this.origin.copy(this.at(e, Nn)), this;
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
    const t = Nn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Nn.copy(this.origin).addScaledVector(this.direction, t), Nn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, s) {
    qo.copy(e).add(t).multiplyScalar(0.5), _r.copy(t).sub(e).normalize(), $n.copy(this.origin).sub(qo);
    const r = e.distanceTo(t) * 0.5, o = -this.direction.dot(_r), a = $n.dot(this.direction), l = -$n.dot(_r), c = $n.lengthSq(), u = Math.abs(1 - o * o);
    let d, h, f, g;
    if (u > 0)
      if (d = o * l - a, h = o * a - l, g = r * u, d >= 0)
        if (h >= -g)
          if (h <= g) {
            const _ = 1 / u;
            d *= _, h *= _, f = d * (d + o * h + 2 * a) + h * (o * d + h + 2 * l) + c;
          } else
            h = r, d = Math.max(0, -(o * h + a)), f = -d * d + h * (h + 2 * l) + c;
        else
          h = -r, d = Math.max(0, -(o * h + a)), f = -d * d + h * (h + 2 * l) + c;
      else
        h <= -g ? (d = Math.max(0, -(-o * r + a)), h = d > 0 ? -r : Math.min(Math.max(-r, -l), r), f = -d * d + h * (h + 2 * l) + c) : h <= g ? (d = 0, h = Math.min(Math.max(-r, -l), r), f = h * (h + 2 * l) + c) : (d = Math.max(0, -(o * r + a)), h = d > 0 ? r : Math.min(Math.max(-r, -l), r), f = -d * d + h * (h + 2 * l) + c);
    else
      h = o > 0 ? -r : r, d = Math.max(0, -(o * h + a)), f = -d * d + h * (h + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, d), s && s.copy(qo).addScaledVector(_r, h), f;
  }
  intersectSphere(e, t) {
    Nn.subVectors(e.center, this.origin);
    const n = Nn.dot(this.direction), s = Nn.dot(Nn) - n * n, r = e.radius * e.radius;
    if (s > r) return null;
    const o = Math.sqrt(r - s), a = n - o, l = n + o;
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
    let n, s, r, o, a, l;
    const c = 1 / this.direction.x, u = 1 / this.direction.y, d = 1 / this.direction.z, h = this.origin;
    return c >= 0 ? (n = (e.min.x - h.x) * c, s = (e.max.x - h.x) * c) : (n = (e.max.x - h.x) * c, s = (e.min.x - h.x) * c), u >= 0 ? (r = (e.min.y - h.y) * u, o = (e.max.y - h.y) * u) : (r = (e.max.y - h.y) * u, o = (e.min.y - h.y) * u), n > o || r > s || ((r > n || isNaN(n)) && (n = r), (o < s || isNaN(s)) && (s = o), d >= 0 ? (a = (e.min.z - h.z) * d, l = (e.max.z - h.z) * d) : (a = (e.max.z - h.z) * d, l = (e.min.z - h.z) * d), n > l || a > s) || ((a > n || n !== n) && (n = a), (l < s || s !== s) && (s = l), s < 0) ? null : this.at(n >= 0 ? n : s, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Nn) !== null;
  }
  intersectTriangle(e, t, n, s, r) {
    Yo.subVectors(t, e), vr.subVectors(n, e), Ko.crossVectors(Yo, vr);
    let o = this.direction.dot(Ko), a;
    if (o > 0) {
      if (s) return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    $n.subVectors(this.origin, e);
    const l = a * this.direction.dot(vr.crossVectors($n, vr));
    if (l < 0)
      return null;
    const c = a * this.direction.dot(Yo.cross($n));
    if (c < 0 || l + c > o)
      return null;
    const u = -a * $n.dot(Ko);
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
class nt {
  constructor(e, t, n, s, r, o, a, l, c, u, d, h, f, g, _, p) {
    nt.prototype.isMatrix4 = !0, this.elements = [
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
    ], e !== void 0 && this.set(e, t, n, s, r, o, a, l, c, u, d, h, f, g, _, p);
  }
  set(e, t, n, s, r, o, a, l, c, u, d, h, f, g, _, p) {
    const m = this.elements;
    return m[0] = e, m[4] = t, m[8] = n, m[12] = s, m[1] = r, m[5] = o, m[9] = a, m[13] = l, m[2] = c, m[6] = u, m[10] = d, m[14] = h, m[3] = f, m[7] = g, m[11] = _, m[15] = p, this;
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
    return new nt().fromArray(this.elements);
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
    const t = this.elements, n = e.elements, s = 1 / $i.setFromMatrixColumn(e, 0).length(), r = 1 / $i.setFromMatrixColumn(e, 1).length(), o = 1 / $i.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * s, t[1] = n[1] * s, t[2] = n[2] * s, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, s = e.y, r = e.z, o = Math.cos(n), a = Math.sin(n), l = Math.cos(s), c = Math.sin(s), u = Math.cos(r), d = Math.sin(r);
    if (e.order === "XYZ") {
      const h = o * u, f = o * d, g = a * u, _ = a * d;
      t[0] = l * u, t[4] = -l * d, t[8] = c, t[1] = f + g * c, t[5] = h - _ * c, t[9] = -a * l, t[2] = _ - h * c, t[6] = g + f * c, t[10] = o * l;
    } else if (e.order === "YXZ") {
      const h = l * u, f = l * d, g = c * u, _ = c * d;
      t[0] = h + _ * a, t[4] = g * a - f, t[8] = o * c, t[1] = o * d, t[5] = o * u, t[9] = -a, t[2] = f * a - g, t[6] = _ + h * a, t[10] = o * l;
    } else if (e.order === "ZXY") {
      const h = l * u, f = l * d, g = c * u, _ = c * d;
      t[0] = h - _ * a, t[4] = -o * d, t[8] = g + f * a, t[1] = f + g * a, t[5] = o * u, t[9] = _ - h * a, t[2] = -o * c, t[6] = a, t[10] = o * l;
    } else if (e.order === "ZYX") {
      const h = o * u, f = o * d, g = a * u, _ = a * d;
      t[0] = l * u, t[4] = g * c - f, t[8] = h * c + _, t[1] = l * d, t[5] = _ * c + h, t[9] = f * c - g, t[2] = -c, t[6] = a * l, t[10] = o * l;
    } else if (e.order === "YZX") {
      const h = o * l, f = o * c, g = a * l, _ = a * c;
      t[0] = l * u, t[4] = _ - h * d, t[8] = g * d + f, t[1] = d, t[5] = o * u, t[9] = -a * u, t[2] = -c * u, t[6] = f * d + g, t[10] = h - _ * d;
    } else if (e.order === "XZY") {
      const h = o * l, f = o * c, g = a * l, _ = a * c;
      t[0] = l * u, t[4] = -d, t[8] = c * u, t[1] = h * d + _, t[5] = o * u, t[9] = f * d - g, t[2] = g * d - f, t[6] = a * u, t[10] = _ * d + h;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(ym, e, xm);
  }
  lookAt(e, t, n) {
    const s = this.elements;
    return tn.subVectors(e, t), tn.lengthSq() === 0 && (tn.z = 1), tn.normalize(), Jn.crossVectors(n, tn), Jn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? tn.x += 1e-4 : tn.z += 1e-4, tn.normalize(), Jn.crossVectors(n, tn)), Jn.normalize(), yr.crossVectors(tn, Jn), s[0] = Jn.x, s[4] = yr.x, s[8] = tn.x, s[1] = Jn.y, s[5] = yr.y, s[9] = tn.y, s[2] = Jn.z, s[6] = yr.z, s[10] = tn.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, s = t.elements, r = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], u = n[1], d = n[5], h = n[9], f = n[13], g = n[2], _ = n[6], p = n[10], m = n[14], x = n[3], v = n[7], b = n[11], R = n[15], A = s[0], w = s[4], H = s[8], E = s[12], T = s[1], G = s[5], J = s[9], le = s[13], C = s[2], P = s[6], D = s[10], ee = s[14], V = s[3], q = s[7], Y = s[11], Z = s[15];
    return r[0] = o * A + a * T + l * C + c * V, r[4] = o * w + a * G + l * P + c * q, r[8] = o * H + a * J + l * D + c * Y, r[12] = o * E + a * le + l * ee + c * Z, r[1] = u * A + d * T + h * C + f * V, r[5] = u * w + d * G + h * P + f * q, r[9] = u * H + d * J + h * D + f * Y, r[13] = u * E + d * le + h * ee + f * Z, r[2] = g * A + _ * T + p * C + m * V, r[6] = g * w + _ * G + p * P + m * q, r[10] = g * H + _ * J + p * D + m * Y, r[14] = g * E + _ * le + p * ee + m * Z, r[3] = x * A + v * T + b * C + R * V, r[7] = x * w + v * G + b * P + R * q, r[11] = x * H + v * J + b * D + R * Y, r[15] = x * E + v * le + b * ee + R * Z, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], s = e[8], r = e[12], o = e[1], a = e[5], l = e[9], c = e[13], u = e[2], d = e[6], h = e[10], f = e[14], g = e[3], _ = e[7], p = e[11], m = e[15];
    return g * (+r * l * d - s * c * d - r * a * h + n * c * h + s * a * f - n * l * f) + _ * (+t * l * f - t * c * h + r * o * h - s * o * f + s * c * u - r * l * u) + p * (+t * c * d - t * a * f - r * o * d + n * o * f + r * a * u - n * c * u) + m * (-s * a * u - t * l * d + t * a * h + s * o * d - n * o * h + n * l * u);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const s = this.elements;
    return e.isVector3 ? (s[12] = e.x, s[13] = e.y, s[14] = e.z) : (s[12] = e, s[13] = t, s[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], d = e[9], h = e[10], f = e[11], g = e[12], _ = e[13], p = e[14], m = e[15], x = d * p * c - _ * h * c + _ * l * f - a * p * f - d * l * m + a * h * m, v = g * h * c - u * p * c - g * l * f + o * p * f + u * l * m - o * h * m, b = u * _ * c - g * d * c + g * a * f - o * _ * f - u * a * m + o * d * m, R = g * d * l - u * _ * l - g * a * h + o * _ * h + u * a * p - o * d * p, A = t * x + n * v + s * b + r * R;
    if (A === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / A;
    return e[0] = x * w, e[1] = (_ * h * r - d * p * r - _ * s * f + n * p * f + d * s * m - n * h * m) * w, e[2] = (a * p * r - _ * l * r + _ * s * c - n * p * c - a * s * m + n * l * m) * w, e[3] = (d * l * r - a * h * r - d * s * c + n * h * c + a * s * f - n * l * f) * w, e[4] = v * w, e[5] = (u * p * r - g * h * r + g * s * f - t * p * f - u * s * m + t * h * m) * w, e[6] = (g * l * r - o * p * r - g * s * c + t * p * c + o * s * m - t * l * m) * w, e[7] = (o * h * r - u * l * r + u * s * c - t * h * c - o * s * f + t * l * f) * w, e[8] = b * w, e[9] = (g * d * r - u * _ * r - g * n * f + t * _ * f + u * n * m - t * d * m) * w, e[10] = (o * _ * r - g * a * r + g * n * c - t * _ * c - o * n * m + t * a * m) * w, e[11] = (u * a * r - o * d * r - u * n * c + t * d * c + o * n * f - t * a * f) * w, e[12] = R * w, e[13] = (u * _ * s - g * d * s + g * n * h - t * _ * h - u * n * p + t * d * p) * w, e[14] = (g * a * s - o * _ * s - g * n * l + t * _ * l + o * n * p - t * a * p) * w, e[15] = (o * d * s - u * a * s + u * n * l - t * d * l - o * n * h + t * a * h) * w, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, s = e.y, r = e.z;
    return t[0] *= n, t[4] *= s, t[8] *= r, t[1] *= n, t[5] *= s, t[9] *= r, t[2] *= n, t[6] *= s, t[10] *= r, t[3] *= n, t[7] *= s, t[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], s = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, s));
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
    const n = Math.cos(t), s = Math.sin(t), r = 1 - n, o = e.x, a = e.y, l = e.z, c = r * o, u = r * a;
    return this.set(
      c * o + n,
      c * a - s * l,
      c * l + s * a,
      0,
      c * a + s * l,
      u * a + n,
      u * l - s * o,
      0,
      c * l - s * a,
      u * l + s * o,
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
  makeShear(e, t, n, s, r, o) {
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
      s,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const s = this.elements, r = t._x, o = t._y, a = t._z, l = t._w, c = r + r, u = o + o, d = a + a, h = r * c, f = r * u, g = r * d, _ = o * u, p = o * d, m = a * d, x = l * c, v = l * u, b = l * d, R = n.x, A = n.y, w = n.z;
    return s[0] = (1 - (_ + m)) * R, s[1] = (f + b) * R, s[2] = (g - v) * R, s[3] = 0, s[4] = (f - b) * A, s[5] = (1 - (h + m)) * A, s[6] = (p + x) * A, s[7] = 0, s[8] = (g + v) * w, s[9] = (p - x) * w, s[10] = (1 - (h + _)) * w, s[11] = 0, s[12] = e.x, s[13] = e.y, s[14] = e.z, s[15] = 1, this;
  }
  decompose(e, t, n) {
    const s = this.elements;
    let r = $i.set(s[0], s[1], s[2]).length();
    const o = $i.set(s[4], s[5], s[6]).length(), a = $i.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (r = -r), e.x = s[12], e.y = s[13], e.z = s[14], mn.copy(this);
    const c = 1 / r, u = 1 / o, d = 1 / a;
    return mn.elements[0] *= c, mn.elements[1] *= c, mn.elements[2] *= c, mn.elements[4] *= u, mn.elements[5] *= u, mn.elements[6] *= u, mn.elements[8] *= d, mn.elements[9] *= d, mn.elements[10] *= d, t.setFromRotationMatrix(mn), n.x = r, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, s, r, o, a = Wn) {
    const l = this.elements, c = 2 * r / (t - e), u = 2 * r / (n - s), d = (t + e) / (t - e), h = (n + s) / (n - s);
    let f, g;
    if (a === Wn)
      f = -(o + r) / (o - r), g = -2 * o * r / (o - r);
    else if (a === co)
      f = -o / (o - r), g = -o * r / (o - r);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return l[0] = c, l[4] = 0, l[8] = d, l[12] = 0, l[1] = 0, l[5] = u, l[9] = h, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = f, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, s, r, o, a = Wn) {
    const l = this.elements, c = 1 / (t - e), u = 1 / (n - s), d = 1 / (o - r), h = (t + e) * c, f = (n + s) * u;
    let g, _;
    if (a === Wn)
      g = (o + r) * d, _ = -2 * d;
    else if (a === co)
      g = r * d, _ = -1 * d;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -h, l[1] = 0, l[5] = 2 * u, l[9] = 0, l[13] = -f, l[2] = 0, l[6] = 0, l[10] = _, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let s = 0; s < 16; s++)
      if (t[s] !== n[s]) return !1;
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
const $i = /* @__PURE__ */ new U(), mn = /* @__PURE__ */ new nt(), ym = /* @__PURE__ */ new U(0, 0, 0), xm = /* @__PURE__ */ new U(1, 1, 1), Jn = /* @__PURE__ */ new U(), yr = /* @__PURE__ */ new U(), tn = /* @__PURE__ */ new U(), _c = /* @__PURE__ */ new nt(), vc = /* @__PURE__ */ new xn();
class Eo {
  constructor(e = 0, t = 0, n = 0, s = Eo.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = s;
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
  set(e, t, n, s = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const s = e.elements, r = s[0], o = s[4], a = s[8], l = s[1], c = s[5], u = s[9], d = s[2], h = s[6], f = s[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Ht(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-u, f), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(h, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ht(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(a, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-d, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ht(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(-d, f), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-Ht(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(h, f), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(Ht(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-d, r)) : (this._x = 0, this._y = Math.atan2(a, f));
        break;
      case "XZY":
        this._z = Math.asin(-Ht(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(h, c), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-u, f), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return _c.makeRotationFromQuaternion(e), this.setFromRotationMatrix(_c, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return vc.setFromEuler(this), this.setFromQuaternion(vc, e);
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
Eo.DEFAULT_ORDER = "XYZ";
class Ad {
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
let Em = 0;
const yc = /* @__PURE__ */ new U(), Ji = /* @__PURE__ */ new xn(), On = /* @__PURE__ */ new nt(), xr = /* @__PURE__ */ new U(), Bs = /* @__PURE__ */ new U(), Sm = /* @__PURE__ */ new U(), Mm = /* @__PURE__ */ new xn(), xc = /* @__PURE__ */ new U(1, 0, 0), Ec = /* @__PURE__ */ new U(0, 1, 0), Sc = /* @__PURE__ */ new U(0, 0, 1), Am = { type: "added" }, Tm = { type: "removed" };
class Et extends zi {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Em++ }), this.uuid = yn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Et.DEFAULT_UP.clone();
    const e = new U(), t = new Eo(), n = new xn(), s = new U(1, 1, 1);
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
        value: s
      },
      modelViewMatrix: {
        value: new nt()
      },
      normalMatrix: {
        value: new tt()
      }
    }), this.matrix = new nt(), this.matrixWorld = new nt(), this.matrixAutoUpdate = Et.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Ad(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return Ji.setFromAxisAngle(e, t), this.quaternion.multiply(Ji), this;
  }
  rotateOnWorldAxis(e, t) {
    return Ji.setFromAxisAngle(e, t), this.quaternion.premultiply(Ji), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(xc, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Ec, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Sc, e);
  }
  translateOnAxis(e, t) {
    return yc.copy(e).applyQuaternion(this.quaternion), this.position.add(yc.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(xc, e);
  }
  translateY(e) {
    return this.translateOnAxis(Ec, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Sc, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(On.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? xr.copy(e) : xr.set(e, t, n);
    const s = this.parent;
    this.updateWorldMatrix(!0, !1), Bs.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? On.lookAt(Bs, xr, this.up) : On.lookAt(xr, Bs, this.up), this.quaternion.setFromRotationMatrix(On), s && (On.extractRotation(s.matrixWorld), Ji.setFromRotationMatrix(On), this.quaternion.premultiply(Ji.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Am)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Tm)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), On.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), On.multiply(e.parent.matrixWorld)), e.applyMatrix4(On), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, s = this.children.length; n < s; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0)
        return o;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const s = this.children;
    for (let r = 0, o = s.length; r < o; r++)
      s[r].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Bs, e, Sm), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Bs, Mm, e), e;
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
    for (let n = 0, s = t.length; n < s; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++)
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
    for (let n = 0, s = t.length; n < s; n++) {
      const r = t[n];
      (r.matrixWorldAutoUpdate === !0 || e === !0) && r.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const s = this.children;
      for (let r = 0, o = s.length; r < o; r++) {
        const a = s[r];
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
    const s = {};
    s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === !0 && (s.castShadow = !0), this.receiveShadow === !0 && (s.receiveShadow = !0), this.visible === !1 && (s.visible = !1), this.frustumCulled === !1 && (s.frustumCulled = !1), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.visibility = this._visibility, s.active = this._active, s.bounds = this._bounds.map((a) => ({
      boxInitialized: a.boxInitialized,
      boxMin: a.box.min.toArray(),
      boxMax: a.box.max.toArray(),
      sphereInitialized: a.sphereInitialized,
      sphereRadius: a.sphere.radius,
      sphereCenter: a.sphere.center.toArray()
    })), s.maxGeometryCount = this._maxGeometryCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.geometryCount = this._geometryCount, s.matricesTexture = this._matricesTexture.toJSON(e), this.boundingSphere !== null && (s.boundingSphere = {
      center: s.boundingSphere.center.toArray(),
      radius: s.boundingSphere.radius
    }), this.boundingBox !== null && (s.boundingBox = {
      min: s.boundingBox.min.toArray(),
      max: s.boundingBox.max.toArray()
    }));
    function r(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (s.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = r(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const d = l[c];
            r(e.shapes, d);
          }
        else
          r(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          a.push(r(e.materials, this.material[l]));
        s.material = a;
      } else
        s.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let a = 0; a < this.children.length; a++)
        s.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        s.animations.push(r(e.animations, l));
      }
    }
    if (t) {
      const a = o(e.geometries), l = o(e.materials), c = o(e.textures), u = o(e.images), d = o(e.shapes), h = o(e.skeletons), f = o(e.animations), g = o(e.nodes);
      a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), d.length > 0 && (n.shapes = d), h.length > 0 && (n.skeletons = h), f.length > 0 && (n.animations = f), g.length > 0 && (n.nodes = g);
    }
    return n.object = s, n;
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
        const s = e.children[n];
        this.add(s.clone());
      }
    return this;
  }
}
Et.DEFAULT_UP = /* @__PURE__ */ new U(0, 1, 0);
Et.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const gn = /* @__PURE__ */ new U(), Fn = /* @__PURE__ */ new U(), $o = /* @__PURE__ */ new U(), Bn = /* @__PURE__ */ new U(), Zi = /* @__PURE__ */ new U(), Qi = /* @__PURE__ */ new U(), Mc = /* @__PURE__ */ new U(), Jo = /* @__PURE__ */ new U(), Zo = /* @__PURE__ */ new U(), Qo = /* @__PURE__ */ new U();
let Er = !1;
class vn {
  constructor(e = new U(), t = new U(), n = new U()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, s) {
    s.subVectors(n, t), gn.subVectors(e, t), s.cross(gn);
    const r = s.lengthSq();
    return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, s, r) {
    gn.subVectors(s, t), Fn.subVectors(n, t), $o.subVectors(e, t);
    const o = gn.dot(gn), a = gn.dot(Fn), l = gn.dot($o), c = Fn.dot(Fn), u = Fn.dot($o), d = o * c - a * a;
    if (d === 0)
      return r.set(0, 0, 0), null;
    const h = 1 / d, f = (c * l - a * u) * h, g = (o * u - a * l) * h;
    return r.set(1 - f - g, g, f);
  }
  static containsPoint(e, t, n, s) {
    return this.getBarycoord(e, t, n, s, Bn) === null ? !1 : Bn.x >= 0 && Bn.y >= 0 && Bn.x + Bn.y <= 1;
  }
  static getUV(e, t, n, s, r, o, a, l) {
    return Er === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Er = !0), this.getInterpolation(e, t, n, s, r, o, a, l);
  }
  static getInterpolation(e, t, n, s, r, o, a, l) {
    return this.getBarycoord(e, t, n, s, Bn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, Bn.x), l.addScaledVector(o, Bn.y), l.addScaledVector(a, Bn.z), l);
  }
  static isFrontFacing(e, t, n, s) {
    return gn.subVectors(n, t), Fn.subVectors(e, t), gn.cross(Fn).dot(s) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, s) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[s]), this;
  }
  setFromAttributeAndIndices(e, t, n, s) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, s), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return gn.subVectors(this.c, this.b), Fn.subVectors(this.a, this.b), gn.cross(Fn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return vn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return vn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, s, r) {
    return Er === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Er = !0), vn.getInterpolation(e, this.a, this.b, this.c, t, n, s, r);
  }
  getInterpolation(e, t, n, s, r) {
    return vn.getInterpolation(e, this.a, this.b, this.c, t, n, s, r);
  }
  containsPoint(e) {
    return vn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return vn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, s = this.b, r = this.c;
    let o, a;
    Zi.subVectors(s, n), Qi.subVectors(r, n), Jo.subVectors(e, n);
    const l = Zi.dot(Jo), c = Qi.dot(Jo);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    Zo.subVectors(e, s);
    const u = Zi.dot(Zo), d = Qi.dot(Zo);
    if (u >= 0 && d <= u)
      return t.copy(s);
    const h = l * d - u * c;
    if (h <= 0 && l >= 0 && u <= 0)
      return o = l / (l - u), t.copy(n).addScaledVector(Zi, o);
    Qo.subVectors(e, r);
    const f = Zi.dot(Qo), g = Qi.dot(Qo);
    if (g >= 0 && f <= g)
      return t.copy(r);
    const _ = f * c - l * g;
    if (_ <= 0 && c >= 0 && g <= 0)
      return a = c / (c - g), t.copy(n).addScaledVector(Qi, a);
    const p = u * g - f * d;
    if (p <= 0 && d - u >= 0 && f - g >= 0)
      return Mc.subVectors(r, s), a = (d - u) / (d - u + (f - g)), t.copy(s).addScaledVector(Mc, a);
    const m = 1 / (p + _ + h);
    return o = _ * m, a = h * m, t.copy(n).addScaledVector(Zi, o).addScaledVector(Qi, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Td = {
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
}, Zn = { h: 0, s: 0, l: 0 }, Sr = { h: 0, s: 0, l: 0 };
function ea(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class je {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const s = e;
      s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = xt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, ft.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, s = ft.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, ft.toWorkingColorSpace(this, s), this;
  }
  setHSL(e, t, n, s = ft.workingColorSpace) {
    if (e = il(e, 1), t = Ht(t, 0, 1), n = Ht(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r;
      this.r = ea(o, r, e + 1 / 3), this.g = ea(o, r, e), this.b = ea(o, r, e - 1 / 3);
    }
    return ft.toWorkingColorSpace(this, s), this;
  }
  setStyle(e, t = xt) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let s;
    if (s = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let r;
      const o = s[1], a = s[2];
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
    } else if (s = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = s[1], o = r.length;
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
  setColorName(e, t = xt) {
    const n = Td[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = gs(e.r), this.g = gs(e.g), this.b = gs(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Ho(e.r), this.g = Ho(e.g), this.b = Ho(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = xt) {
    return ft.fromWorkingColorSpace(zt.copy(this), e), Math.round(Ht(zt.r * 255, 0, 255)) * 65536 + Math.round(Ht(zt.g * 255, 0, 255)) * 256 + Math.round(Ht(zt.b * 255, 0, 255));
  }
  getHexString(e = xt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = ft.workingColorSpace) {
    ft.fromWorkingColorSpace(zt.copy(this), t);
    const n = zt.r, s = zt.g, r = zt.b, o = Math.max(n, s, r), a = Math.min(n, s, r);
    let l, c;
    const u = (a + o) / 2;
    if (a === o)
      l = 0, c = 0;
    else {
      const d = o - a;
      switch (c = u <= 0.5 ? d / (o + a) : d / (2 - o - a), o) {
        case n:
          l = (s - r) / d + (s < r ? 6 : 0);
          break;
        case s:
          l = (r - n) / d + 2;
          break;
        case r:
          l = (n - s) / d + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = u, e;
  }
  getRGB(e, t = ft.workingColorSpace) {
    return ft.fromWorkingColorSpace(zt.copy(this), t), e.r = zt.r, e.g = zt.g, e.b = zt.b, e;
  }
  getStyle(e = xt) {
    ft.fromWorkingColorSpace(zt.copy(this), e);
    const t = zt.r, n = zt.g, s = zt.b;
    return e !== xt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Zn), this.setHSL(Zn.h + e, Zn.s + t, Zn.l + n);
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
    this.getHSL(Zn), e.getHSL(Sr);
    const n = Ks(Zn.h, Sr.h, t), s = Ks(Zn.s, Sr.s, t), r = Ks(Zn.l, Sr.l, t);
    return this.setHSL(n, s, r), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, s = this.b, r = e.elements;
    return this.r = r[0] * t + r[3] * n + r[6] * s, this.g = r[1] * t + r[4] * n + r[7] * s, this.b = r[2] * t + r[5] * n + r[8] * s, this;
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
const zt = /* @__PURE__ */ new je();
je.NAMES = Td;
let bm = 0;
class Cn extends zi {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: bm++ }), this.uuid = yn(), this.name = "", this.type = "Material", this.blending = ms, this.side = jn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = ba, this.blendDst = wa, this.blendEquation = bi, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new je(0, 0, 0), this.blendAlpha = 0, this.depthFunc = io, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = uc, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ji, this.stencilZFail = ji, this.stencilZPass = ji, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
        const s = this[t];
        if (s === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        s && s.isColor ? s.set(n) : s && s.isVector3 && n && n.isVector3 ? s.copy(n) : this[t] = n;
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== ms && (n.blending = this.blending), this.side !== jn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== ba && (n.blendSrc = this.blendSrc), this.blendDst !== wa && (n.blendDst = this.blendDst), this.blendEquation !== bi && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== io && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== uc && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== ji && (n.stencilFail = this.stencilFail), this.stencilZFail !== ji && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== ji && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function s(r) {
      const o = [];
      for (const a in r) {
        const l = r[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (t) {
      const r = s(e.textures), o = s(e.images);
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
      const s = t.length;
      n = new Array(s);
      for (let r = 0; r !== s; ++r)
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
class Ci extends Cn {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new je(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = rd, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Rt = /* @__PURE__ */ new U(), Mr = /* @__PURE__ */ new ot();
class Yt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Ia, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = Gn, this.version = 0;
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
    for (let s = 0, r = this.itemSize; s < r; s++)
      this.array[e + s] = t.array[n + s];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Mr.fromBufferAttribute(this, t), Mr.applyMatrix3(e), this.setXY(t, Mr.x, Mr.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Rt.fromBufferAttribute(this, t), Rt.applyMatrix3(e), this.setXYZ(t, Rt.x, Rt.y, Rt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Rt.fromBufferAttribute(this, t), Rt.applyMatrix4(e), this.setXYZ(t, Rt.x, Rt.y, Rt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Rt.fromBufferAttribute(this, t), Rt.applyNormalMatrix(e), this.setXYZ(t, Rt.x, Rt.y, Rt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Rt.fromBufferAttribute(this, t), Rt.transformDirection(e), this.setXYZ(t, Rt.x, Rt.y, Rt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Rn(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = pt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Rn(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = pt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Rn(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = pt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Rn(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = pt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Rn(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = pt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = pt(t, this.array), n = pt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, s) {
    return e *= this.itemSize, this.normalized && (t = pt(t, this.array), n = pt(n, this.array), s = pt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = s, this;
  }
  setXYZW(e, t, n, s, r) {
    return e *= this.itemSize, this.normalized && (t = pt(t, this.array), n = pt(n, this.array), s = pt(s, this.array), r = pt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = s, this.array[e + 3] = r, this;
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
    return this.name !== "" && (e.name = this.name), this.usage !== Ia && (e.usage = this.usage), e;
  }
}
class bd extends Yt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class wd extends Yt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class fn extends Yt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let wm = 0;
const ln = /* @__PURE__ */ new nt(), ta = /* @__PURE__ */ new Et(), es = /* @__PURE__ */ new U(), nn = /* @__PURE__ */ new Xn(), Vs = /* @__PURE__ */ new Xn(), It = /* @__PURE__ */ new U();
class Sn extends zi {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: wm++ }), this.uuid = yn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (xd(e) ? wd : bd)(e, 1) : this.index = e, this;
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
      const r = new tt().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = !0;
    }
    const s = this.attributes.tangent;
    return s !== void 0 && (s.transformDirection(e), s.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return ln.makeRotationFromQuaternion(e), this.applyMatrix4(ln), this;
  }
  rotateX(e) {
    return ln.makeRotationX(e), this.applyMatrix4(ln), this;
  }
  rotateY(e) {
    return ln.makeRotationY(e), this.applyMatrix4(ln), this;
  }
  rotateZ(e) {
    return ln.makeRotationZ(e), this.applyMatrix4(ln), this;
  }
  translate(e, t, n) {
    return ln.makeTranslation(e, t, n), this.applyMatrix4(ln), this;
  }
  scale(e, t, n) {
    return ln.makeScale(e, t, n), this.applyMatrix4(ln), this;
  }
  lookAt(e) {
    return ta.lookAt(e), ta.updateMatrix(), this.applyMatrix4(ta.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(es).negate(), this.translate(es.x, es.y, es.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, s = e.length; n < s; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new fn(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Xn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new U(-1 / 0, -1 / 0, -1 / 0),
        new U(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, s = t.length; n < s; n++) {
          const r = t[n];
          nn.setFromBufferAttribute(r), this.morphTargetsRelative ? (It.addVectors(this.boundingBox.min, nn.min), this.boundingBox.expandByPoint(It), It.addVectors(this.boundingBox.max, nn.max), this.boundingBox.expandByPoint(It)) : (this.boundingBox.expandByPoint(nn.min), this.boundingBox.expandByPoint(nn.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ln());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new U(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (nn.setFromBufferAttribute(e), t)
        for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r];
          Vs.setFromBufferAttribute(a), this.morphTargetsRelative ? (It.addVectors(nn.min, Vs.min), nn.expandByPoint(It), It.addVectors(nn.max, Vs.max), nn.expandByPoint(It)) : (nn.expandByPoint(Vs.min), nn.expandByPoint(Vs.max));
        }
      nn.getCenter(n);
      let s = 0;
      for (let r = 0, o = e.count; r < o; r++)
        It.fromBufferAttribute(e, r), s = Math.max(s, n.distanceToSquared(It));
      if (t)
        for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r], l = this.morphTargetsRelative;
          for (let c = 0, u = a.count; c < u; c++)
            It.fromBufferAttribute(a, c), l && (es.fromBufferAttribute(e, c), It.add(es)), s = Math.max(s, n.distanceToSquared(It));
        }
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, s = t.position.array, r = t.normal.array, o = t.uv.array, a = s.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Yt(new Float32Array(4 * a), 4));
    const l = this.getAttribute("tangent").array, c = [], u = [];
    for (let T = 0; T < a; T++)
      c[T] = new U(), u[T] = new U();
    const d = new U(), h = new U(), f = new U(), g = new ot(), _ = new ot(), p = new ot(), m = new U(), x = new U();
    function v(T, G, J) {
      d.fromArray(s, T * 3), h.fromArray(s, G * 3), f.fromArray(s, J * 3), g.fromArray(o, T * 2), _.fromArray(o, G * 2), p.fromArray(o, J * 2), h.sub(d), f.sub(d), _.sub(g), p.sub(g);
      const le = 1 / (_.x * p.y - p.x * _.y);
      isFinite(le) && (m.copy(h).multiplyScalar(p.y).addScaledVector(f, -_.y).multiplyScalar(le), x.copy(f).multiplyScalar(_.x).addScaledVector(h, -p.x).multiplyScalar(le), c[T].add(m), c[G].add(m), c[J].add(m), u[T].add(x), u[G].add(x), u[J].add(x));
    }
    let b = this.groups;
    b.length === 0 && (b = [{
      start: 0,
      count: n.length
    }]);
    for (let T = 0, G = b.length; T < G; ++T) {
      const J = b[T], le = J.start, C = J.count;
      for (let P = le, D = le + C; P < D; P += 3)
        v(
          n[P + 0],
          n[P + 1],
          n[P + 2]
        );
    }
    const R = new U(), A = new U(), w = new U(), H = new U();
    function E(T) {
      w.fromArray(r, T * 3), H.copy(w);
      const G = c[T];
      R.copy(G), R.sub(w.multiplyScalar(w.dot(G))).normalize(), A.crossVectors(H, G);
      const le = A.dot(u[T]) < 0 ? -1 : 1;
      l[T * 4] = R.x, l[T * 4 + 1] = R.y, l[T * 4 + 2] = R.z, l[T * 4 + 3] = le;
    }
    for (let T = 0, G = b.length; T < G; ++T) {
      const J = b[T], le = J.start, C = J.count;
      for (let P = le, D = le + C; P < D; P += 3)
        E(n[P + 0]), E(n[P + 1]), E(n[P + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Yt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let h = 0, f = n.count; h < f; h++)
          n.setXYZ(h, 0, 0, 0);
      const s = new U(), r = new U(), o = new U(), a = new U(), l = new U(), c = new U(), u = new U(), d = new U();
      if (e)
        for (let h = 0, f = e.count; h < f; h += 3) {
          const g = e.getX(h + 0), _ = e.getX(h + 1), p = e.getX(h + 2);
          s.fromBufferAttribute(t, g), r.fromBufferAttribute(t, _), o.fromBufferAttribute(t, p), u.subVectors(o, r), d.subVectors(s, r), u.cross(d), a.fromBufferAttribute(n, g), l.fromBufferAttribute(n, _), c.fromBufferAttribute(n, p), a.add(u), l.add(u), c.add(u), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(_, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let h = 0, f = t.count; h < f; h += 3)
          s.fromBufferAttribute(t, h + 0), r.fromBufferAttribute(t, h + 1), o.fromBufferAttribute(t, h + 2), u.subVectors(o, r), d.subVectors(s, r), u.cross(d), n.setXYZ(h + 0, u.x, u.y, u.z), n.setXYZ(h + 1, u.x, u.y, u.z), n.setXYZ(h + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      It.fromBufferAttribute(e, t), It.normalize(), e.setXYZ(t, It.x, It.y, It.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array, u = a.itemSize, d = a.normalized, h = new c.constructor(l.length * u);
      let f = 0, g = 0;
      for (let _ = 0, p = l.length; _ < p; _++) {
        a.isInterleavedBufferAttribute ? f = l[_] * a.data.stride + a.offset : f = l[_] * u;
        for (let m = 0; m < u; m++)
          h[g++] = c[f++];
      }
      return new Yt(h, u, d);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Sn(), n = this.index.array, s = this.attributes;
    for (const a in s) {
      const l = s[a], c = e(l, n);
      t.setAttribute(a, c);
    }
    const r = this.morphAttributes;
    for (const a in r) {
      const l = [], c = r[a];
      for (let u = 0, d = c.length; u < d; u++) {
        const h = c[u], f = e(h, n);
        l.push(f);
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
    const s = {};
    let r = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], u = [];
      for (let d = 0, h = c.length; d < h; d++) {
        const f = c[d];
        u.push(f.toJSON(e.data));
      }
      u.length > 0 && (s[l] = u, r = !0);
    }
    r && (e.data.morphAttributes = s, e.data.morphTargetsRelative = this.morphTargetsRelative);
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
    const s = e.attributes;
    for (const c in s) {
      const u = s[c];
      this.setAttribute(c, u.clone(t));
    }
    const r = e.morphAttributes;
    for (const c in r) {
      const u = [], d = r[c];
      for (let h = 0, f = d.length; h < f; h++)
        u.push(d[h].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, u = o.length; c < u; c++) {
      const d = o[c];
      this.addGroup(d.start, d.count, d.materialIndex);
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
const Ac = /* @__PURE__ */ new nt(), _i = /* @__PURE__ */ new xo(), Ar = /* @__PURE__ */ new Ln(), Tc = /* @__PURE__ */ new U(), ts = /* @__PURE__ */ new U(), ns = /* @__PURE__ */ new U(), is = /* @__PURE__ */ new U(), na = /* @__PURE__ */ new U(), Tr = /* @__PURE__ */ new U(), br = /* @__PURE__ */ new ot(), wr = /* @__PURE__ */ new ot(), Rr = /* @__PURE__ */ new ot(), bc = /* @__PURE__ */ new U(), wc = /* @__PURE__ */ new U(), Rc = /* @__PURE__ */ new U(), Cr = /* @__PURE__ */ new U(), Lr = /* @__PURE__ */ new U();
class $e extends Et {
  constructor(e = new Sn(), t = new Ci()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const s = t[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = s.length; r < o; r++) {
          const a = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, s = n.attributes.position, r = n.morphAttributes.position, o = n.morphTargetsRelative;
    t.fromBufferAttribute(s, e);
    const a = this.morphTargetInfluences;
    if (r && a) {
      Tr.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const u = a[l], d = r[l];
        u !== 0 && (na.fromBufferAttribute(d, e), o ? Tr.addScaledVector(na, u) : Tr.addScaledVector(na.sub(t), u));
      }
      t.add(Tr);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, s = this.material, r = this.matrixWorld;
    s !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Ar.copy(n.boundingSphere), Ar.applyMatrix4(r), _i.copy(e.ray).recast(e.near), !(Ar.containsPoint(_i.origin) === !1 && (_i.intersectSphere(Ar, Tc) === null || _i.origin.distanceToSquared(Tc) > (e.far - e.near) ** 2)) && (Ac.copy(r).invert(), _i.copy(e.ray).applyMatrix4(Ac), !(n.boundingBox !== null && _i.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, _i)));
  }
  _computeIntersections(e, t, n) {
    let s;
    const r = this.geometry, o = this.material, a = r.index, l = r.attributes.position, c = r.attributes.uv, u = r.attributes.uv1, d = r.attributes.normal, h = r.groups, f = r.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let g = 0, _ = h.length; g < _; g++) {
          const p = h[g], m = o[p.materialIndex], x = Math.max(p.start, f.start), v = Math.min(a.count, Math.min(p.start + p.count, f.start + f.count));
          for (let b = x, R = v; b < R; b += 3) {
            const A = a.getX(b), w = a.getX(b + 1), H = a.getX(b + 2);
            s = Pr(this, m, e, n, c, u, d, A, w, H), s && (s.faceIndex = Math.floor(b / 3), s.face.materialIndex = p.materialIndex, t.push(s));
          }
        }
      else {
        const g = Math.max(0, f.start), _ = Math.min(a.count, f.start + f.count);
        for (let p = g, m = _; p < m; p += 3) {
          const x = a.getX(p), v = a.getX(p + 1), b = a.getX(p + 2);
          s = Pr(this, o, e, n, c, u, d, x, v, b), s && (s.faceIndex = Math.floor(p / 3), t.push(s));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let g = 0, _ = h.length; g < _; g++) {
          const p = h[g], m = o[p.materialIndex], x = Math.max(p.start, f.start), v = Math.min(l.count, Math.min(p.start + p.count, f.start + f.count));
          for (let b = x, R = v; b < R; b += 3) {
            const A = b, w = b + 1, H = b + 2;
            s = Pr(this, m, e, n, c, u, d, A, w, H), s && (s.faceIndex = Math.floor(b / 3), s.face.materialIndex = p.materialIndex, t.push(s));
          }
        }
      else {
        const g = Math.max(0, f.start), _ = Math.min(l.count, f.start + f.count);
        for (let p = g, m = _; p < m; p += 3) {
          const x = p, v = p + 1, b = p + 2;
          s = Pr(this, o, e, n, c, u, d, x, v, b), s && (s.faceIndex = Math.floor(p / 3), t.push(s));
        }
      }
  }
}
function Rm(i, e, t, n, s, r, o, a) {
  let l;
  if (e.side === Qt ? l = n.intersectTriangle(o, r, s, !0, a) : l = n.intersectTriangle(s, r, o, e.side === jn, a), l === null) return null;
  Lr.copy(a), Lr.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(Lr);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: Lr.clone(),
    object: i
  };
}
function Pr(i, e, t, n, s, r, o, a, l, c) {
  i.getVertexPosition(a, ts), i.getVertexPosition(l, ns), i.getVertexPosition(c, is);
  const u = Rm(i, e, t, n, ts, ns, is, Cr);
  if (u) {
    s && (br.fromBufferAttribute(s, a), wr.fromBufferAttribute(s, l), Rr.fromBufferAttribute(s, c), u.uv = vn.getInterpolation(Cr, ts, ns, is, br, wr, Rr, new ot())), r && (br.fromBufferAttribute(r, a), wr.fromBufferAttribute(r, l), Rr.fromBufferAttribute(r, c), u.uv1 = vn.getInterpolation(Cr, ts, ns, is, br, wr, Rr, new ot()), u.uv2 = u.uv1), o && (bc.fromBufferAttribute(o, a), wc.fromBufferAttribute(o, l), Rc.fromBufferAttribute(o, c), u.normal = vn.getInterpolation(Cr, ts, ns, is, bc, wc, Rc, new U()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const d = {
      a,
      b: l,
      c,
      normal: new U(),
      materialIndex: 0
    };
    vn.getNormal(ts, ns, is, d.normal), u.face = d;
  }
  return u;
}
class yt extends Sn {
  constructor(e = 1, t = 1, n = 1, s = 1, r = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: s,
      heightSegments: r,
      depthSegments: o
    };
    const a = this;
    s = Math.floor(s), r = Math.floor(r), o = Math.floor(o);
    const l = [], c = [], u = [], d = [];
    let h = 0, f = 0;
    g("z", "y", "x", -1, -1, n, t, e, o, r, 0), g("z", "y", "x", 1, -1, n, t, -e, o, r, 1), g("x", "z", "y", 1, 1, e, n, t, s, o, 2), g("x", "z", "y", 1, -1, e, n, -t, s, o, 3), g("x", "y", "z", 1, -1, e, t, n, s, r, 4), g("x", "y", "z", -1, -1, e, t, -n, s, r, 5), this.setIndex(l), this.setAttribute("position", new fn(c, 3)), this.setAttribute("normal", new fn(u, 3)), this.setAttribute("uv", new fn(d, 2));
    function g(_, p, m, x, v, b, R, A, w, H, E) {
      const T = b / w, G = R / H, J = b / 2, le = R / 2, C = A / 2, P = w + 1, D = H + 1;
      let ee = 0, V = 0;
      const q = new U();
      for (let Y = 0; Y < D; Y++) {
        const Z = Y * G - le;
        for (let he = 0; he < P; he++) {
          const z = he * T - J;
          q[_] = z * x, q[p] = Z * v, q[m] = C, c.push(q.x, q.y, q.z), q[_] = 0, q[p] = 0, q[m] = A > 0 ? 1 : -1, u.push(q.x, q.y, q.z), d.push(he / w), d.push(1 - Y / H), ee += 1;
        }
      }
      for (let Y = 0; Y < H; Y++)
        for (let Z = 0; Z < w; Z++) {
          const he = h + Z + P * Y, z = h + Z + P * (Y + 1), te = h + (Z + 1) + P * (Y + 1), se = h + (Z + 1) + P * Y;
          l.push(he, z, se), l.push(z, te, se), V += 6;
        }
      a.addGroup(f, V, E), f += V, h += ee;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new yt(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Ts(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const s = i[t][n];
      s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? s.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = s.clone() : Array.isArray(s) ? e[t][n] = s.slice() : e[t][n] = s;
    }
  }
  return e;
}
function jt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = Ts(i[t]);
    for (const s in n)
      e[s] = n[s];
  }
  return e;
}
function Cm(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function Rd(i) {
  return i.getRenderTarget() === null ? i.outputColorSpace : ft.workingColorSpace;
}
const Lm = { clone: Ts, merge: jt };
var Pm = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Im = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Bi extends Cn {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Pm, this.fragmentShader = Im, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Ts(e.uniforms), this.uniformsGroups = Cm(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const s in this.uniforms) {
      const o = this.uniforms[s].value;
      o && o.isTexture ? t.uniforms[s] = {
        type: "t",
        value: o.toJSON(e).uuid
      } : o && o.isColor ? t.uniforms[s] = {
        type: "c",
        value: o.getHex()
      } : o && o.isVector2 ? t.uniforms[s] = {
        type: "v2",
        value: o.toArray()
      } : o && o.isVector3 ? t.uniforms[s] = {
        type: "v3",
        value: o.toArray()
      } : o && o.isVector4 ? t.uniforms[s] = {
        type: "v4",
        value: o.toArray()
      } : o && o.isMatrix3 ? t.uniforms[s] = {
        type: "m3",
        value: o.toArray()
      } : o && o.isMatrix4 ? t.uniforms[s] = {
        type: "m4",
        value: o.toArray()
      } : t.uniforms[s] = {
        value: o
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const s in this.extensions)
      this.extensions[s] === !0 && (n[s] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Cd extends Et {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new nt(), this.projectionMatrix = new nt(), this.projectionMatrixInverse = new nt(), this.coordinateSystem = Wn;
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
class qt extends Cd {
  constructor(e = 50, t = 1, n = 0.1, s = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = s, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
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
    this.fov = As * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(Ys * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return As * 2 * Math.atan(
      Math.tan(Ys * 0.5 * this.fov) / this.zoom
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
  setViewOffset(e, t, n, s, r, o) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Ys * 0.5 * this.fov) / this.zoom, n = 2 * t, s = this.aspect * n, r = -0.5 * s;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth, c = o.fullHeight;
      r += o.offsetX * s / l, t -= o.offsetY * n / c, s *= o.width / l, n *= o.height / c;
    }
    const a = this.filmOffset;
    a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + s, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const ss = -90, rs = 1;
class Dm extends Et {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new qt(ss, rs, e, t);
    s.layers = this.layers, this.add(s);
    const r = new qt(ss, rs, e, t);
    r.layers = this.layers, this.add(r);
    const o = new qt(ss, rs, e, t);
    o.layers = this.layers, this.add(o);
    const a = new qt(ss, rs, e, t);
    a.layers = this.layers, this.add(a);
    const l = new qt(ss, rs, e, t);
    l.layers = this.layers, this.add(l);
    const c = new qt(ss, rs, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, s, r, o, a, l] = t;
    for (const c of t) this.remove(c);
    if (e === Wn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === co)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: s } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [r, o, a, l, c, u] = this.children, d = e.getRenderTarget(), h = e.getActiveCubeFace(), f = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, s), e.render(t, r), e.setRenderTarget(n, 1, s), e.render(t, o), e.setRenderTarget(n, 2, s), e.render(t, a), e.setRenderTarget(n, 3, s), e.render(t, l), e.setRenderTarget(n, 4, s), e.render(t, c), n.texture.generateMipmaps = _, e.setRenderTarget(n, 5, s), e.render(t, u), e.setRenderTarget(d, h, f), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class Ld extends Ft {
  constructor(e, t, n, s, r, o, a, l, c, u) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : ys, super(e, t, n, s, r, o, a, l, c, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Um extends Fi {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, s = [n, n, n, n, n, n];
    t.encoding !== void 0 && ($s("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === Ui ? xt : hn), this.texture = new Ld(s, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : $t;
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
    }, s = new yt(5, 5, 5), r = new Bi({
      name: "CubemapFromEquirect",
      uniforms: Ts(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Qt,
      blending: oi
    });
    r.uniforms.tEquirect.value = t;
    const o = new $e(s, r), a = t.minFilter;
    return t.minFilter === Oi && (t.minFilter = $t), new Dm(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, s) {
    const r = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, s);
    e.setRenderTarget(r);
  }
}
const ia = /* @__PURE__ */ new U(), Nm = /* @__PURE__ */ new U(), Om = /* @__PURE__ */ new tt();
class Si {
  constructor(e = new U(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, s) {
    return this.normal.set(e, t, n), this.constant = s, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const s = ia.subVectors(n, t).cross(Nm.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(s, e), this;
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
    const n = e.delta(ia), s = this.normal.dot(n);
    if (s === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / s;
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
    const n = t || Om.getNormalMatrix(e), s = this.coplanarPoint(ia).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -s.dot(r), this;
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
const vi = /* @__PURE__ */ new Ln(), Ir = /* @__PURE__ */ new U();
class sl {
  constructor(e = new Si(), t = new Si(), n = new Si(), s = new Si(), r = new Si(), o = new Si()) {
    this.planes = [e, t, n, s, r, o];
  }
  set(e, t, n, s, r, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(s), a[4].copy(r), a[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = Wn) {
    const n = this.planes, s = e.elements, r = s[0], o = s[1], a = s[2], l = s[3], c = s[4], u = s[5], d = s[6], h = s[7], f = s[8], g = s[9], _ = s[10], p = s[11], m = s[12], x = s[13], v = s[14], b = s[15];
    if (n[0].setComponents(l - r, h - c, p - f, b - m).normalize(), n[1].setComponents(l + r, h + c, p + f, b + m).normalize(), n[2].setComponents(l + o, h + u, p + g, b + x).normalize(), n[3].setComponents(l - o, h - u, p - g, b - x).normalize(), n[4].setComponents(l - a, h - d, p - _, b - v).normalize(), t === Wn)
      n[5].setComponents(l + a, h + d, p + _, b + v).normalize();
    else if (t === co)
      n[5].setComponents(a, d, _, v).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(vi);
  }
  intersectsSprite(e) {
    return vi.center.set(0, 0, 0), vi.radius = 0.7071067811865476, vi.applyMatrix4(e.matrixWorld), this.intersectsSphere(vi);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, s = -e.radius;
    for (let r = 0; r < 6; r++)
      if (t[r].distanceToPoint(n) < s)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const s = t[n];
      if (Ir.x = s.normal.x > 0 ? e.max.x : e.min.x, Ir.y = s.normal.y > 0 ? e.max.y : e.min.y, Ir.z = s.normal.z > 0 ? e.max.z : e.min.z, s.distanceToPoint(Ir) < 0)
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
function Pd() {
  let i = null, e = !1, t = null, n = null;
  function s(r, o) {
    t(r, o), n = i.requestAnimationFrame(s);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = i.requestAnimationFrame(s), e = !0);
    },
    stop: function() {
      i.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(r) {
      t = r;
    },
    setContext: function(r) {
      i = r;
    }
  };
}
function Fm(i, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function s(c, u) {
    const d = c.array, h = c.usage, f = d.byteLength, g = i.createBuffer();
    i.bindBuffer(u, g), i.bufferData(u, d, h), c.onUploadCallback();
    let _;
    if (d instanceof Float32Array)
      _ = i.FLOAT;
    else if (d instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t)
          _ = i.HALF_FLOAT;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        _ = i.UNSIGNED_SHORT;
    else if (d instanceof Int16Array)
      _ = i.SHORT;
    else if (d instanceof Uint32Array)
      _ = i.UNSIGNED_INT;
    else if (d instanceof Int32Array)
      _ = i.INT;
    else if (d instanceof Int8Array)
      _ = i.BYTE;
    else if (d instanceof Uint8Array)
      _ = i.UNSIGNED_BYTE;
    else if (d instanceof Uint8ClampedArray)
      _ = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + d);
    return {
      buffer: g,
      type: _,
      bytesPerElement: d.BYTES_PER_ELEMENT,
      version: c.version,
      size: f
    };
  }
  function r(c, u, d) {
    const h = u.array, f = u._updateRange, g = u.updateRanges;
    if (i.bindBuffer(d, c), f.count === -1 && g.length === 0 && i.bufferSubData(d, 0, h), g.length !== 0) {
      for (let _ = 0, p = g.length; _ < p; _++) {
        const m = g[_];
        t ? i.bufferSubData(
          d,
          m.start * h.BYTES_PER_ELEMENT,
          h,
          m.start,
          m.count
        ) : i.bufferSubData(
          d,
          m.start * h.BYTES_PER_ELEMENT,
          h.subarray(m.start, m.start + m.count)
        );
      }
      u.clearUpdateRanges();
    }
    f.count !== -1 && (t ? i.bufferSubData(
      d,
      f.offset * h.BYTES_PER_ELEMENT,
      h,
      f.offset,
      f.count
    ) : i.bufferSubData(
      d,
      f.offset * h.BYTES_PER_ELEMENT,
      h.subarray(f.offset, f.offset + f.count)
    ), f.count = -1), u.onUploadCallback();
  }
  function o(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function a(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u && (i.deleteBuffer(u.buffer), n.delete(c));
  }
  function l(c, u) {
    if (c.isGLBufferAttribute) {
      const h = n.get(c);
      (!h || h.version < c.version) && n.set(c, {
        buffer: c.buffer,
        type: c.type,
        bytesPerElement: c.elementSize,
        version: c.version
      });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const d = n.get(c);
    if (d === void 0)
      n.set(c, s(c, u));
    else if (d.version < c.version) {
      if (d.size !== c.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      r(d.buffer, c, u), d.version = c.version;
    }
  }
  return {
    get: o,
    remove: a,
    update: l
  };
}
class ii extends Sn {
  constructor(e = 1, t = 1, n = 1, s = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: s
    };
    const r = e / 2, o = t / 2, a = Math.floor(n), l = Math.floor(s), c = a + 1, u = l + 1, d = e / a, h = t / l, f = [], g = [], _ = [], p = [];
    for (let m = 0; m < u; m++) {
      const x = m * h - o;
      for (let v = 0; v < c; v++) {
        const b = v * d - r;
        g.push(b, -x, 0), _.push(0, 0, 1), p.push(v / a), p.push(1 - m / l);
      }
    }
    for (let m = 0; m < l; m++)
      for (let x = 0; x < a; x++) {
        const v = x + c * m, b = x + c * (m + 1), R = x + 1 + c * (m + 1), A = x + 1 + c * m;
        f.push(v, b, A), f.push(b, R, A);
      }
    this.setIndex(f), this.setAttribute("position", new fn(g, 3)), this.setAttribute("normal", new fn(_, 3)), this.setAttribute("uv", new fn(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ii(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Bm = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Vm = `#ifdef USE_ALPHAHASH
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
#endif`, km = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, zm = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Hm = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Gm = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Wm = `#ifdef USE_AOMAP
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
#endif`, jm = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Xm = `#ifdef USE_BATCHING
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
#endif`, qm = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`, Ym = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Km = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, $m = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Jm = `#ifdef USE_IRIDESCENCE
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
#endif`, Zm = `#ifdef USE_BUMPMAP
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
#endif`, Qm = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, eg = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, tg = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, ng = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, ig = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, sg = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, rg = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, og = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, ag = `#define PI 3.141592653589793
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
} // validated`, lg = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, cg = `vec3 transformedNormal = objectNormal;
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
#endif`, ug = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, dg = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, hg = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, fg = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, pg = "gl_FragColor = linearToOutputTexel( gl_FragColor );", mg = `
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
}`, gg = `#ifdef USE_ENVMAP
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
#endif`, _g = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, vg = `#ifdef USE_ENVMAP
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
#endif`, yg = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, xg = `#ifdef USE_ENVMAP
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
#endif`, Eg = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Sg = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Mg = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Ag = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Tg = `#ifdef USE_GRADIENTMAP
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
}`, bg = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, wg = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Rg = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Cg = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Lg = `uniform bool receiveShadow;
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
#endif`, Pg = `#ifdef USE_ENVMAP
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
#endif`, Ig = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Dg = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Ug = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Ng = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Og = `PhysicalMaterial material;
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
#endif`, Fg = `struct PhysicalMaterial {
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
}`, Bg = `
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
#endif`, Vg = `#if defined( RE_IndirectDiffuse )
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
#endif`, kg = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, zg = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Hg = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Gg = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Wg = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, jg = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Xg = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, qg = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Yg = `#if defined( USE_POINTS_UV )
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
#endif`, Kg = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, $g = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Jg = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Zg = `#ifdef USE_MORPHNORMALS
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
#endif`, Qg = `#ifdef USE_MORPHTARGETS
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
#endif`, e_ = `#ifdef USE_MORPHTARGETS
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
#endif`, t_ = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, n_ = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, i_ = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, s_ = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, r_ = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, o_ = `#ifdef USE_NORMALMAP
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
#endif`, a_ = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, l_ = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, c_ = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, u_ = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, d_ = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, h_ = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, f_ = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, p_ = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, m_ = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, g_ = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, __ = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, v_ = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, y_ = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, x_ = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, E_ = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, S_ = `float getShadowMask() {
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
}`, M_ = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, A_ = `#ifdef USE_SKINNING
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
#endif`, T_ = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, b_ = `#ifdef USE_SKINNING
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
#endif`, w_ = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, R_ = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, C_ = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, L_ = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, P_ = `#ifdef USE_TRANSMISSION
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
#endif`, I_ = `#ifdef USE_TRANSMISSION
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
#endif`, D_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, U_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, N_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, O_ = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const F_ = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, B_ = `uniform sampler2D t2D;
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
}`, V_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, k_ = `#ifdef ENVMAP_TYPE_CUBE
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
}`, z_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, H_ = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, G_ = `#include <common>
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
}`, W_ = `#if DEPTH_PACKING == 3200
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
}`, j_ = `#define DISTANCE
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
}`, X_ = `#define DISTANCE
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
}`, q_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Y_ = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, K_ = `uniform float scale;
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
}`, $_ = `uniform vec3 diffuse;
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
}`, J_ = `#include <common>
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
}`, Z_ = `uniform vec3 diffuse;
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
}`, Q_ = `#define LAMBERT
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
}`, ev = `#define LAMBERT
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
}`, tv = `#define MATCAP
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
}`, nv = `#define MATCAP
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
}`, iv = `#define NORMAL
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
}`, sv = `#define NORMAL
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
}`, rv = `#define PHONG
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
}`, ov = `#define PHONG
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
}`, av = `#define STANDARD
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
}`, lv = `#define STANDARD
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
}`, cv = `#define TOON
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
}`, uv = `#define TOON
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
}`, dv = `uniform float size;
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
}`, hv = `uniform vec3 diffuse;
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
}`, fv = `#include <common>
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
}`, pv = `uniform vec3 color;
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
}`, mv = `uniform float rotation;
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
}`, gv = `uniform vec3 diffuse;
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
}`, Je = {
  alphahash_fragment: Bm,
  alphahash_pars_fragment: Vm,
  alphamap_fragment: km,
  alphamap_pars_fragment: zm,
  alphatest_fragment: Hm,
  alphatest_pars_fragment: Gm,
  aomap_fragment: Wm,
  aomap_pars_fragment: jm,
  batching_pars_vertex: Xm,
  batching_vertex: qm,
  begin_vertex: Ym,
  beginnormal_vertex: Km,
  bsdfs: $m,
  iridescence_fragment: Jm,
  bumpmap_pars_fragment: Zm,
  clipping_planes_fragment: Qm,
  clipping_planes_pars_fragment: eg,
  clipping_planes_pars_vertex: tg,
  clipping_planes_vertex: ng,
  color_fragment: ig,
  color_pars_fragment: sg,
  color_pars_vertex: rg,
  color_vertex: og,
  common: ag,
  cube_uv_reflection_fragment: lg,
  defaultnormal_vertex: cg,
  displacementmap_pars_vertex: ug,
  displacementmap_vertex: dg,
  emissivemap_fragment: hg,
  emissivemap_pars_fragment: fg,
  colorspace_fragment: pg,
  colorspace_pars_fragment: mg,
  envmap_fragment: gg,
  envmap_common_pars_fragment: _g,
  envmap_pars_fragment: vg,
  envmap_pars_vertex: yg,
  envmap_physical_pars_fragment: Pg,
  envmap_vertex: xg,
  fog_vertex: Eg,
  fog_pars_vertex: Sg,
  fog_fragment: Mg,
  fog_pars_fragment: Ag,
  gradientmap_pars_fragment: Tg,
  lightmap_fragment: bg,
  lightmap_pars_fragment: wg,
  lights_lambert_fragment: Rg,
  lights_lambert_pars_fragment: Cg,
  lights_pars_begin: Lg,
  lights_toon_fragment: Ig,
  lights_toon_pars_fragment: Dg,
  lights_phong_fragment: Ug,
  lights_phong_pars_fragment: Ng,
  lights_physical_fragment: Og,
  lights_physical_pars_fragment: Fg,
  lights_fragment_begin: Bg,
  lights_fragment_maps: Vg,
  lights_fragment_end: kg,
  logdepthbuf_fragment: zg,
  logdepthbuf_pars_fragment: Hg,
  logdepthbuf_pars_vertex: Gg,
  logdepthbuf_vertex: Wg,
  map_fragment: jg,
  map_pars_fragment: Xg,
  map_particle_fragment: qg,
  map_particle_pars_fragment: Yg,
  metalnessmap_fragment: Kg,
  metalnessmap_pars_fragment: $g,
  morphcolor_vertex: Jg,
  morphnormal_vertex: Zg,
  morphtarget_pars_vertex: Qg,
  morphtarget_vertex: e_,
  normal_fragment_begin: t_,
  normal_fragment_maps: n_,
  normal_pars_fragment: i_,
  normal_pars_vertex: s_,
  normal_vertex: r_,
  normalmap_pars_fragment: o_,
  clearcoat_normal_fragment_begin: a_,
  clearcoat_normal_fragment_maps: l_,
  clearcoat_pars_fragment: c_,
  iridescence_pars_fragment: u_,
  opaque_fragment: d_,
  packing: h_,
  premultiplied_alpha_fragment: f_,
  project_vertex: p_,
  dithering_fragment: m_,
  dithering_pars_fragment: g_,
  roughnessmap_fragment: __,
  roughnessmap_pars_fragment: v_,
  shadowmap_pars_fragment: y_,
  shadowmap_pars_vertex: x_,
  shadowmap_vertex: E_,
  shadowmask_pars_fragment: S_,
  skinbase_vertex: M_,
  skinning_pars_vertex: A_,
  skinning_vertex: T_,
  skinnormal_vertex: b_,
  specularmap_fragment: w_,
  specularmap_pars_fragment: R_,
  tonemapping_fragment: C_,
  tonemapping_pars_fragment: L_,
  transmission_fragment: P_,
  transmission_pars_fragment: I_,
  uv_pars_fragment: D_,
  uv_pars_vertex: U_,
  uv_vertex: N_,
  worldpos_vertex: O_,
  background_vert: F_,
  background_frag: B_,
  backgroundCube_vert: V_,
  backgroundCube_frag: k_,
  cube_vert: z_,
  cube_frag: H_,
  depth_vert: G_,
  depth_frag: W_,
  distanceRGBA_vert: j_,
  distanceRGBA_frag: X_,
  equirect_vert: q_,
  equirect_frag: Y_,
  linedashed_vert: K_,
  linedashed_frag: $_,
  meshbasic_vert: J_,
  meshbasic_frag: Z_,
  meshlambert_vert: Q_,
  meshlambert_frag: ev,
  meshmatcap_vert: tv,
  meshmatcap_frag: nv,
  meshnormal_vert: iv,
  meshnormal_frag: sv,
  meshphong_vert: rv,
  meshphong_frag: ov,
  meshphysical_vert: av,
  meshphysical_frag: lv,
  meshtoon_vert: cv,
  meshtoon_frag: uv,
  points_vert: dv,
  points_frag: hv,
  shadow_vert: fv,
  shadow_frag: pv,
  sprite_vert: mv,
  sprite_frag: gv
}, _e = {
  common: {
    diffuse: { value: /* @__PURE__ */ new je(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new tt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new tt() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new tt() }
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
    aoMapTransform: { value: /* @__PURE__ */ new tt() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new tt() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new tt() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new tt() },
    normalScale: { value: /* @__PURE__ */ new ot(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new tt() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new tt() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new tt() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new tt() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new je(16777215) }
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
    diffuse: { value: /* @__PURE__ */ new je(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new tt() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new tt() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new je(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new ot(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new tt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new tt() },
    alphaTest: { value: 0 }
  }
}, bn = {
  basic: {
    uniforms: /* @__PURE__ */ jt([
      _e.common,
      _e.specularmap,
      _e.envmap,
      _e.aomap,
      _e.lightmap,
      _e.fog
    ]),
    vertexShader: Je.meshbasic_vert,
    fragmentShader: Je.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ jt([
      _e.common,
      _e.specularmap,
      _e.envmap,
      _e.aomap,
      _e.lightmap,
      _e.emissivemap,
      _e.bumpmap,
      _e.normalmap,
      _e.displacementmap,
      _e.fog,
      _e.lights,
      {
        emissive: { value: /* @__PURE__ */ new je(0) }
      }
    ]),
    vertexShader: Je.meshlambert_vert,
    fragmentShader: Je.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ jt([
      _e.common,
      _e.specularmap,
      _e.envmap,
      _e.aomap,
      _e.lightmap,
      _e.emissivemap,
      _e.bumpmap,
      _e.normalmap,
      _e.displacementmap,
      _e.fog,
      _e.lights,
      {
        emissive: { value: /* @__PURE__ */ new je(0) },
        specular: { value: /* @__PURE__ */ new je(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Je.meshphong_vert,
    fragmentShader: Je.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ jt([
      _e.common,
      _e.envmap,
      _e.aomap,
      _e.lightmap,
      _e.emissivemap,
      _e.bumpmap,
      _e.normalmap,
      _e.displacementmap,
      _e.roughnessmap,
      _e.metalnessmap,
      _e.fog,
      _e.lights,
      {
        emissive: { value: /* @__PURE__ */ new je(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: Je.meshphysical_vert,
    fragmentShader: Je.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ jt([
      _e.common,
      _e.aomap,
      _e.lightmap,
      _e.emissivemap,
      _e.bumpmap,
      _e.normalmap,
      _e.displacementmap,
      _e.gradientmap,
      _e.fog,
      _e.lights,
      {
        emissive: { value: /* @__PURE__ */ new je(0) }
      }
    ]),
    vertexShader: Je.meshtoon_vert,
    fragmentShader: Je.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ jt([
      _e.common,
      _e.bumpmap,
      _e.normalmap,
      _e.displacementmap,
      _e.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Je.meshmatcap_vert,
    fragmentShader: Je.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ jt([
      _e.points,
      _e.fog
    ]),
    vertexShader: Je.points_vert,
    fragmentShader: Je.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ jt([
      _e.common,
      _e.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Je.linedashed_vert,
    fragmentShader: Je.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ jt([
      _e.common,
      _e.displacementmap
    ]),
    vertexShader: Je.depth_vert,
    fragmentShader: Je.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ jt([
      _e.common,
      _e.bumpmap,
      _e.normalmap,
      _e.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Je.meshnormal_vert,
    fragmentShader: Je.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ jt([
      _e.sprite,
      _e.fog
    ]),
    vertexShader: Je.sprite_vert,
    fragmentShader: Je.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new tt() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Je.background_vert,
    fragmentShader: Je.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Je.backgroundCube_vert,
    fragmentShader: Je.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Je.cube_vert,
    fragmentShader: Je.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Je.equirect_vert,
    fragmentShader: Je.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ jt([
      _e.common,
      _e.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new U() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Je.distanceRGBA_vert,
    fragmentShader: Je.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ jt([
      _e.lights,
      _e.fog,
      {
        color: { value: /* @__PURE__ */ new je(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Je.shadow_vert,
    fragmentShader: Je.shadow_frag
  }
};
bn.physical = {
  uniforms: /* @__PURE__ */ jt([
    bn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new tt() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new tt() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new ot(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new tt() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new tt() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new tt() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new je(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new tt() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new tt() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new tt() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new ot() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new tt() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new je(0) },
      specularColor: { value: /* @__PURE__ */ new je(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new tt() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new tt() },
      anisotropyVector: { value: /* @__PURE__ */ new ot() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new tt() }
    }
  ]),
  vertexShader: Je.meshphysical_vert,
  fragmentShader: Je.meshphysical_frag
};
const Dr = { r: 0, b: 0, g: 0 };
function _v(i, e, t, n, s, r, o) {
  const a = new je(0);
  let l = r === !0 ? 0 : 1, c, u, d = null, h = 0, f = null;
  function g(p, m) {
    let x = !1, v = m.isScene === !0 ? m.background : null;
    v && v.isTexture && (v = (m.backgroundBlurriness > 0 ? t : e).get(v)), v === null ? _(a, l) : v && v.isColor && (_(v, 1), x = !0);
    const b = i.xr.getEnvironmentBlendMode();
    b === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : b === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (i.autoClear || x) && i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil), v && (v.isCubeTexture || v.mapping === vo) ? (u === void 0 && (u = new $e(
      new yt(1, 1, 1),
      new Bi({
        name: "BackgroundCubeMaterial",
        uniforms: Ts(bn.backgroundCube.uniforms),
        vertexShader: bn.backgroundCube.vertexShader,
        fragmentShader: bn.backgroundCube.fragmentShader,
        side: Qt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(R, A, w) {
      this.matrixWorld.copyPosition(w.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), s.update(u)), u.material.uniforms.envMap.value = v, u.material.uniforms.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = m.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = m.backgroundIntensity, u.material.toneMapped = ft.getTransfer(v.colorSpace) !== gt, (d !== v || h !== v.version || f !== i.toneMapping) && (u.material.needsUpdate = !0, d = v, h = v.version, f = i.toneMapping), u.layers.enableAll(), p.unshift(u, u.geometry, u.material, 0, 0, null)) : v && v.isTexture && (c === void 0 && (c = new $e(
      new ii(2, 2),
      new Bi({
        name: "BackgroundMaterial",
        uniforms: Ts(bn.background.uniforms),
        vertexShader: bn.background.vertexShader,
        fragmentShader: bn.background.fragmentShader,
        side: jn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), s.update(c)), c.material.uniforms.t2D.value = v, c.material.uniforms.backgroundIntensity.value = m.backgroundIntensity, c.material.toneMapped = ft.getTransfer(v.colorSpace) !== gt, v.matrixAutoUpdate === !0 && v.updateMatrix(), c.material.uniforms.uvTransform.value.copy(v.matrix), (d !== v || h !== v.version || f !== i.toneMapping) && (c.material.needsUpdate = !0, d = v, h = v.version, f = i.toneMapping), c.layers.enableAll(), p.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function _(p, m) {
    p.getRGB(Dr, Rd(i)), n.buffers.color.setClear(Dr.r, Dr.g, Dr.b, m, o);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(p, m = 1) {
      a.set(p), l = m, _(a, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(p) {
      l = p, _(a, l);
    },
    render: g
  };
}
function vv(i, e, t, n) {
  const s = i.getParameter(i.MAX_VERTEX_ATTRIBS), r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || r !== null, a = {}, l = p(null);
  let c = l, u = !1;
  function d(C, P, D, ee, V) {
    let q = !1;
    if (o) {
      const Y = _(ee, D, P);
      c !== Y && (c = Y, f(c.object)), q = m(C, ee, D, V), q && x(C, ee, D, V);
    } else {
      const Y = P.wireframe === !0;
      (c.geometry !== ee.id || c.program !== D.id || c.wireframe !== Y) && (c.geometry = ee.id, c.program = D.id, c.wireframe = Y, q = !0);
    }
    V !== null && t.update(V, i.ELEMENT_ARRAY_BUFFER), (q || u) && (u = !1, H(C, P, D, ee), V !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(V).buffer));
  }
  function h() {
    return n.isWebGL2 ? i.createVertexArray() : r.createVertexArrayOES();
  }
  function f(C) {
    return n.isWebGL2 ? i.bindVertexArray(C) : r.bindVertexArrayOES(C);
  }
  function g(C) {
    return n.isWebGL2 ? i.deleteVertexArray(C) : r.deleteVertexArrayOES(C);
  }
  function _(C, P, D) {
    const ee = D.wireframe === !0;
    let V = a[C.id];
    V === void 0 && (V = {}, a[C.id] = V);
    let q = V[P.id];
    q === void 0 && (q = {}, V[P.id] = q);
    let Y = q[ee];
    return Y === void 0 && (Y = p(h()), q[ee] = Y), Y;
  }
  function p(C) {
    const P = [], D = [], ee = [];
    for (let V = 0; V < s; V++)
      P[V] = 0, D[V] = 0, ee[V] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: P,
      enabledAttributes: D,
      attributeDivisors: ee,
      object: C,
      attributes: {},
      index: null
    };
  }
  function m(C, P, D, ee) {
    const V = c.attributes, q = P.attributes;
    let Y = 0;
    const Z = D.getAttributes();
    for (const he in Z)
      if (Z[he].location >= 0) {
        const te = V[he];
        let se = q[he];
        if (se === void 0 && (he === "instanceMatrix" && C.instanceMatrix && (se = C.instanceMatrix), he === "instanceColor" && C.instanceColor && (se = C.instanceColor)), te === void 0 || te.attribute !== se || se && te.data !== se.data) return !0;
        Y++;
      }
    return c.attributesNum !== Y || c.index !== ee;
  }
  function x(C, P, D, ee) {
    const V = {}, q = P.attributes;
    let Y = 0;
    const Z = D.getAttributes();
    for (const he in Z)
      if (Z[he].location >= 0) {
        let te = q[he];
        te === void 0 && (he === "instanceMatrix" && C.instanceMatrix && (te = C.instanceMatrix), he === "instanceColor" && C.instanceColor && (te = C.instanceColor));
        const se = {};
        se.attribute = te, te && te.data && (se.data = te.data), V[he] = se, Y++;
      }
    c.attributes = V, c.attributesNum = Y, c.index = ee;
  }
  function v() {
    const C = c.newAttributes;
    for (let P = 0, D = C.length; P < D; P++)
      C[P] = 0;
  }
  function b(C) {
    R(C, 0);
  }
  function R(C, P) {
    const D = c.newAttributes, ee = c.enabledAttributes, V = c.attributeDivisors;
    D[C] = 1, ee[C] === 0 && (i.enableVertexAttribArray(C), ee[C] = 1), V[C] !== P && ((n.isWebGL2 ? i : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](C, P), V[C] = P);
  }
  function A() {
    const C = c.newAttributes, P = c.enabledAttributes;
    for (let D = 0, ee = P.length; D < ee; D++)
      P[D] !== C[D] && (i.disableVertexAttribArray(D), P[D] = 0);
  }
  function w(C, P, D, ee, V, q, Y) {
    Y === !0 ? i.vertexAttribIPointer(C, P, D, V, q) : i.vertexAttribPointer(C, P, D, ee, V, q);
  }
  function H(C, P, D, ee) {
    if (n.isWebGL2 === !1 && (C.isInstancedMesh || ee.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    v();
    const V = ee.attributes, q = D.getAttributes(), Y = P.defaultAttributeValues;
    for (const Z in q) {
      const he = q[Z];
      if (he.location >= 0) {
        let z = V[Z];
        if (z === void 0 && (Z === "instanceMatrix" && C.instanceMatrix && (z = C.instanceMatrix), Z === "instanceColor" && C.instanceColor && (z = C.instanceColor)), z !== void 0) {
          const te = z.normalized, se = z.itemSize, Q = t.get(z);
          if (Q === void 0) continue;
          const ae = Q.buffer, be = Q.type, Re = Q.bytesPerElement, ge = n.isWebGL2 === !0 && (be === i.INT || be === i.UNSIGNED_INT || z.gpuType === cd);
          if (z.isInterleavedBufferAttribute) {
            const Ae = z.data, N = Ae.stride, Qe = z.offset;
            if (Ae.isInstancedInterleavedBuffer) {
              for (let Ce = 0; Ce < he.locationSize; Ce++)
                R(he.location + Ce, Ae.meshPerAttribute);
              C.isInstancedMesh !== !0 && ee._maxInstanceCount === void 0 && (ee._maxInstanceCount = Ae.meshPerAttribute * Ae.count);
            } else
              for (let Ce = 0; Ce < he.locationSize; Ce++)
                b(he.location + Ce);
            i.bindBuffer(i.ARRAY_BUFFER, ae);
            for (let Ce = 0; Ce < he.locationSize; Ce++)
              w(
                he.location + Ce,
                se / he.locationSize,
                be,
                te,
                N * Re,
                (Qe + se / he.locationSize * Ce) * Re,
                ge
              );
          } else {
            if (z.isInstancedBufferAttribute) {
              for (let Ae = 0; Ae < he.locationSize; Ae++)
                R(he.location + Ae, z.meshPerAttribute);
              C.isInstancedMesh !== !0 && ee._maxInstanceCount === void 0 && (ee._maxInstanceCount = z.meshPerAttribute * z.count);
            } else
              for (let Ae = 0; Ae < he.locationSize; Ae++)
                b(he.location + Ae);
            i.bindBuffer(i.ARRAY_BUFFER, ae);
            for (let Ae = 0; Ae < he.locationSize; Ae++)
              w(
                he.location + Ae,
                se / he.locationSize,
                be,
                te,
                se * Re,
                se / he.locationSize * Ae * Re,
                ge
              );
          }
        } else if (Y !== void 0) {
          const te = Y[Z];
          if (te !== void 0)
            switch (te.length) {
              case 2:
                i.vertexAttrib2fv(he.location, te);
                break;
              case 3:
                i.vertexAttrib3fv(he.location, te);
                break;
              case 4:
                i.vertexAttrib4fv(he.location, te);
                break;
              default:
                i.vertexAttrib1fv(he.location, te);
            }
        }
      }
    }
    A();
  }
  function E() {
    J();
    for (const C in a) {
      const P = a[C];
      for (const D in P) {
        const ee = P[D];
        for (const V in ee)
          g(ee[V].object), delete ee[V];
        delete P[D];
      }
      delete a[C];
    }
  }
  function T(C) {
    if (a[C.id] === void 0) return;
    const P = a[C.id];
    for (const D in P) {
      const ee = P[D];
      for (const V in ee)
        g(ee[V].object), delete ee[V];
      delete P[D];
    }
    delete a[C.id];
  }
  function G(C) {
    for (const P in a) {
      const D = a[P];
      if (D[C.id] === void 0) continue;
      const ee = D[C.id];
      for (const V in ee)
        g(ee[V].object), delete ee[V];
      delete D[C.id];
    }
  }
  function J() {
    le(), u = !0, c !== l && (c = l, f(c.object));
  }
  function le() {
    l.geometry = null, l.program = null, l.wireframe = !1;
  }
  return {
    setup: d,
    reset: J,
    resetDefaultState: le,
    dispose: E,
    releaseStatesOfGeometry: T,
    releaseStatesOfProgram: G,
    initAttributes: v,
    enableAttribute: b,
    disableUnusedAttributes: A
  };
}
function yv(i, e, t, n) {
  const s = n.isWebGL2;
  let r;
  function o(u) {
    r = u;
  }
  function a(u, d) {
    i.drawArrays(r, u, d), t.update(d, r, 1);
  }
  function l(u, d, h) {
    if (h === 0) return;
    let f, g;
    if (s)
      f = i, g = "drawArraysInstanced";
    else if (f = e.get("ANGLE_instanced_arrays"), g = "drawArraysInstancedANGLE", f === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    f[g](r, u, d, h), t.update(d, r, h);
  }
  function c(u, d, h) {
    if (h === 0) return;
    const f = e.get("WEBGL_multi_draw");
    if (f === null)
      for (let g = 0; g < h; g++)
        this.render(u[g], d[g]);
    else {
      f.multiDrawArraysWEBGL(r, u, 0, d, 0, h);
      let g = 0;
      for (let _ = 0; _ < h; _++)
        g += d[_];
      t.update(g, r, 1);
    }
  }
  this.setMode = o, this.render = a, this.renderInstances = l, this.renderMultiDraw = c;
}
function xv(i, e, t) {
  let n;
  function s() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const w = e.get("EXT_texture_filter_anisotropic");
      n = i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function r(w) {
    if (w === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      w = "mediump";
    }
    return w === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && i.constructor.name === "WebGL2RenderingContext";
  let a = t.precision !== void 0 ? t.precision : "highp";
  const l = r(a);
  l !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", l, "instead."), a = l);
  const c = o || e.has("WEBGL_draw_buffers"), u = t.logarithmicDepthBuffer === !0, d = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), h = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), f = i.getParameter(i.MAX_TEXTURE_SIZE), g = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), _ = i.getParameter(i.MAX_VERTEX_ATTRIBS), p = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), m = i.getParameter(i.MAX_VARYING_VECTORS), x = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), v = h > 0, b = o || e.has("OES_texture_float"), R = v && b, A = o ? i.getParameter(i.MAX_SAMPLES) : 0;
  return {
    isWebGL2: o,
    drawBuffers: c,
    getMaxAnisotropy: s,
    getMaxPrecision: r,
    precision: a,
    logarithmicDepthBuffer: u,
    maxTextures: d,
    maxVertexTextures: h,
    maxTextureSize: f,
    maxCubemapSize: g,
    maxAttributes: _,
    maxVertexUniforms: p,
    maxVaryings: m,
    maxFragmentUniforms: x,
    vertexTextures: v,
    floatFragmentTextures: b,
    floatVertexTextures: R,
    maxSamples: A
  };
}
function Ev(i) {
  const e = this;
  let t = null, n = 0, s = !1, r = !1;
  const o = new Si(), a = new tt(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, h) {
    const f = d.length !== 0 || h || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || s;
    return s = h, n = d.length, f;
  }, this.beginShadows = function() {
    r = !0, u(null);
  }, this.endShadows = function() {
    r = !1;
  }, this.setGlobalState = function(d, h) {
    t = u(d, h, 0);
  }, this.setState = function(d, h, f) {
    const g = d.clippingPlanes, _ = d.clipIntersection, p = d.clipShadows, m = i.get(d);
    if (!s || g === null || g.length === 0 || r && !p)
      r ? u(null) : c();
    else {
      const x = r ? 0 : n, v = x * 4;
      let b = m.clippingState || null;
      l.value = b, b = u(g, h, v, f);
      for (let R = 0; R !== v; ++R)
        b[R] = t[R];
      m.clippingState = b, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += x;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(d, h, f, g) {
    const _ = d !== null ? d.length : 0;
    let p = null;
    if (_ !== 0) {
      if (p = l.value, g !== !0 || p === null) {
        const m = f + _ * 4, x = h.matrixWorldInverse;
        a.getNormalMatrix(x), (p === null || p.length < m) && (p = new Float32Array(m));
        for (let v = 0, b = f; v !== _; ++v, b += 4)
          o.copy(d[v]).applyMatrix4(x, a), o.normal.toArray(p, b), p[b + 3] = o.constant;
      }
      l.value = p, l.needsUpdate = !0;
    }
    return e.numPlanes = _, e.numIntersection = 0, p;
  }
}
function Sv(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === Ra ? o.mapping = ys : a === Ca && (o.mapping = xs), o;
  }
  function n(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === Ra || a === Ca)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new Um(l.height / 2);
            return c.fromEquirectangularTexture(i, o), e.set(o, c), o.addEventListener("dispose", s), t(c.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function s(o) {
    const a = o.target;
    a.removeEventListener("dispose", s);
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
class rl extends Cd {
  constructor(e = -1, t = 1, n = 1, s = -1, r = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = s, this.near = r, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, s, r, o) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, s = (this.top + this.bottom) / 2;
    let r = n - e, o = n + e, a = s + t, l = s - t;
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
const fs = 4, Cc = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], wi = 20, sa = /* @__PURE__ */ new rl(), Lc = /* @__PURE__ */ new je();
let ra = null, oa = 0, aa = 0;
const Mi = (1 + Math.sqrt(5)) / 2, os = 1 / Mi, Pc = [
  /* @__PURE__ */ new U(1, 1, 1),
  /* @__PURE__ */ new U(-1, 1, 1),
  /* @__PURE__ */ new U(1, 1, -1),
  /* @__PURE__ */ new U(-1, 1, -1),
  /* @__PURE__ */ new U(0, Mi, os),
  /* @__PURE__ */ new U(0, Mi, -os),
  /* @__PURE__ */ new U(os, 0, Mi),
  /* @__PURE__ */ new U(-os, 0, Mi),
  /* @__PURE__ */ new U(Mi, os, 0),
  /* @__PURE__ */ new U(-Mi, os, 0)
];
class Ic {
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
  fromScene(e, t = 0, n = 0.1, s = 100) {
    ra = this._renderer.getRenderTarget(), oa = this._renderer.getActiveCubeFace(), aa = this._renderer.getActiveMipmapLevel(), this._setSize(256);
    const r = this._allocateTargets();
    return r.depthBuffer = !0, this._sceneToCubeUV(e, n, s, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r;
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
    this._cubemapMaterial === null && (this._cubemapMaterial = Nc(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Uc(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(ra, oa, aa), e.scissorTest = !1, Ur(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === ys || e.mapping === xs ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), ra = this._renderer.getRenderTarget(), oa = this._renderer.getActiveCubeFace(), aa = this._renderer.getActiveMipmapLevel();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: $t,
      minFilter: $t,
      generateMipmaps: !1,
      type: er,
      format: dn,
      colorSpace: Nt,
      depthBuffer: !1
    }, s = Dc(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Dc(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Mv(r)), this._blurMaterial = Av(r, e, t);
    }
    return s;
  }
  _compileMaterial(e) {
    const t = new $e(this._lodPlanes[0], e);
    this._renderer.compile(t, sa);
  }
  _sceneToCubeUV(e, t, n, s) {
    const a = new qt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], u = this._renderer, d = u.autoClear, h = u.toneMapping;
    u.getClearColor(Lc), u.toneMapping = ai, u.autoClear = !1;
    const f = new Ci({
      name: "PMREM.Background",
      side: Qt,
      depthWrite: !1,
      depthTest: !1
    }), g = new $e(new yt(), f);
    let _ = !1;
    const p = e.background;
    p ? p.isColor && (f.color.copy(p), e.background = null, _ = !0) : (f.color.copy(Lc), _ = !0);
    for (let m = 0; m < 6; m++) {
      const x = m % 3;
      x === 0 ? (a.up.set(0, l[m], 0), a.lookAt(c[m], 0, 0)) : x === 1 ? (a.up.set(0, 0, l[m]), a.lookAt(0, c[m], 0)) : (a.up.set(0, l[m], 0), a.lookAt(0, 0, c[m]));
      const v = this._cubeSize;
      Ur(s, x * v, m > 2 ? v : 0, v, v), u.setRenderTarget(s), _ && u.render(g, a), u.render(e, a);
    }
    g.geometry.dispose(), g.material.dispose(), u.toneMapping = h, u.autoClear = d, e.background = p;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, s = e.mapping === ys || e.mapping === xs;
    s ? (this._cubemapMaterial === null && (this._cubemapMaterial = Nc()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Uc());
    const r = s ? this._cubemapMaterial : this._equirectMaterial, o = new $e(this._lodPlanes[0], r), a = r.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    Ur(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, sa);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let s = 1; s < this._lodPlanes.length; s++) {
      const r = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = Pc[(s - 1) % Pc.length];
      this._blur(e, s - 1, s, r, o);
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
  _blur(e, t, n, s, r) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      o,
      t,
      n,
      s,
      "latitudinal",
      r
    ), this._halfBlur(
      o,
      e,
      n,
      n,
      s,
      "longitudinal",
      r
    );
  }
  _halfBlur(e, t, n, s, r, o, a) {
    const l = this._renderer, c = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const u = 3, d = new $e(this._lodPlanes[s], c), h = c.uniforms, f = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * wi - 1), _ = r / g, p = isFinite(r) ? 1 + Math.floor(u * _) : wi;
    p > wi && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wi}`);
    const m = [];
    let x = 0;
    for (let w = 0; w < wi; ++w) {
      const H = w / _, E = Math.exp(-H * H / 2);
      m.push(E), w === 0 ? x += E : w < p && (x += 2 * E);
    }
    for (let w = 0; w < m.length; w++)
      m[w] = m[w] / x;
    h.envMap.value = e.texture, h.samples.value = p, h.weights.value = m, h.latitudinal.value = o === "latitudinal", a && (h.poleAxis.value = a);
    const { _lodMax: v } = this;
    h.dTheta.value = g, h.mipInt.value = v - n;
    const b = this._sizeLods[s], R = 3 * b * (s > v - fs ? s - v + fs : 0), A = 4 * (this._cubeSize - b);
    Ur(t, R, A, 3 * b, 2 * b), l.setRenderTarget(t), l.render(d, sa);
  }
}
function Mv(i) {
  const e = [], t = [], n = [];
  let s = i;
  const r = i - fs + 1 + Cc.length;
  for (let o = 0; o < r; o++) {
    const a = Math.pow(2, s);
    t.push(a);
    let l = 1 / a;
    o > i - fs ? l = Cc[o - i + fs - 1] : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2), u = -c, d = 1 + c, h = [u, u, d, u, d, d, u, u, d, d, u, d], f = 6, g = 6, _ = 3, p = 2, m = 1, x = new Float32Array(_ * g * f), v = new Float32Array(p * g * f), b = new Float32Array(m * g * f);
    for (let A = 0; A < f; A++) {
      const w = A % 3 * 2 / 3 - 1, H = A > 2 ? 0 : -1, E = [
        w,
        H,
        0,
        w + 2 / 3,
        H,
        0,
        w + 2 / 3,
        H + 1,
        0,
        w,
        H,
        0,
        w + 2 / 3,
        H + 1,
        0,
        w,
        H + 1,
        0
      ];
      x.set(E, _ * g * A), v.set(h, p * g * A);
      const T = [A, A, A, A, A, A];
      b.set(T, m * g * A);
    }
    const R = new Sn();
    R.setAttribute("position", new Yt(x, _)), R.setAttribute("uv", new Yt(v, p)), R.setAttribute("faceIndex", new Yt(b, m)), e.push(R), s > fs && s--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Dc(i, e, t) {
  const n = new Fi(i, e, t);
  return n.texture.mapping = vo, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Ur(i, e, t, n, s) {
  i.viewport.set(e, t, n, s), i.scissor.set(e, t, n, s);
}
function Av(i, e, t) {
  const n = new Float32Array(wi), s = new U(0, 1, 0);
  return new Bi({
    name: "SphericalGaussianBlur",
    defines: {
      n: wi,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: s }
    },
    vertexShader: ol(),
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
    blending: oi,
    depthTest: !1,
    depthWrite: !1
  });
}
function Uc() {
  return new Bi({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: ol(),
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
    blending: oi,
    depthTest: !1,
    depthWrite: !1
  });
}
function Nc() {
  return new Bi({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: ol(),
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
    blending: oi,
    depthTest: !1,
    depthWrite: !1
  });
}
function ol() {
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
function Tv(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === Ra || l === Ca, u = l === ys || l === xs;
      if (c || u)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let d = e.get(a);
          return t === null && (t = new Ic(i)), d = c ? t.fromEquirectangular(a, d) : t.fromCubemap(a, d), e.set(a, d), d.texture;
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const d = a.image;
            if (c && d && d.height > 0 || u && d && s(d)) {
              t === null && (t = new Ic(i));
              const h = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, h), a.addEventListener("dispose", r), h.texture;
            } else
              return null;
          }
        }
    }
    return a;
  }
  function s(a) {
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
function bv(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let s;
    switch (n) {
      case "WEBGL_depth_texture":
        s = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        s = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        s = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        s = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        s = i.getExtension(n);
    }
    return e[n] = s, s;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? (t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance")) : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const s = t(n);
      return s === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), s;
    }
  };
}
function wv(i, e, t, n) {
  const s = {}, r = /* @__PURE__ */ new WeakMap();
  function o(d) {
    const h = d.target;
    h.index !== null && e.remove(h.index);
    for (const g in h.attributes)
      e.remove(h.attributes[g]);
    for (const g in h.morphAttributes) {
      const _ = h.morphAttributes[g];
      for (let p = 0, m = _.length; p < m; p++)
        e.remove(_[p]);
    }
    h.removeEventListener("dispose", o), delete s[h.id];
    const f = r.get(h);
    f && (e.remove(f), r.delete(h)), n.releaseStatesOfGeometry(h), h.isInstancedBufferGeometry === !0 && delete h._maxInstanceCount, t.memory.geometries--;
  }
  function a(d, h) {
    return s[h.id] === !0 || (h.addEventListener("dispose", o), s[h.id] = !0, t.memory.geometries++), h;
  }
  function l(d) {
    const h = d.attributes;
    for (const g in h)
      e.update(h[g], i.ARRAY_BUFFER);
    const f = d.morphAttributes;
    for (const g in f) {
      const _ = f[g];
      for (let p = 0, m = _.length; p < m; p++)
        e.update(_[p], i.ARRAY_BUFFER);
    }
  }
  function c(d) {
    const h = [], f = d.index, g = d.attributes.position;
    let _ = 0;
    if (f !== null) {
      const x = f.array;
      _ = f.version;
      for (let v = 0, b = x.length; v < b; v += 3) {
        const R = x[v + 0], A = x[v + 1], w = x[v + 2];
        h.push(R, A, A, w, w, R);
      }
    } else if (g !== void 0) {
      const x = g.array;
      _ = g.version;
      for (let v = 0, b = x.length / 3 - 1; v < b; v += 3) {
        const R = v + 0, A = v + 1, w = v + 2;
        h.push(R, A, A, w, w, R);
      }
    } else
      return;
    const p = new (xd(h) ? wd : bd)(h, 1);
    p.version = _;
    const m = r.get(d);
    m && e.remove(m), r.set(d, p);
  }
  function u(d) {
    const h = r.get(d);
    if (h) {
      const f = d.index;
      f !== null && h.version < f.version && c(d);
    } else
      c(d);
    return r.get(d);
  }
  return {
    get: a,
    update: l,
    getWireframeAttribute: u
  };
}
function Rv(i, e, t, n) {
  const s = n.isWebGL2;
  let r;
  function o(f) {
    r = f;
  }
  let a, l;
  function c(f) {
    a = f.type, l = f.bytesPerElement;
  }
  function u(f, g) {
    i.drawElements(r, g, a, f * l), t.update(g, r, 1);
  }
  function d(f, g, _) {
    if (_ === 0) return;
    let p, m;
    if (s)
      p = i, m = "drawElementsInstanced";
    else if (p = e.get("ANGLE_instanced_arrays"), m = "drawElementsInstancedANGLE", p === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    p[m](r, g, a, f * l, _), t.update(g, r, _);
  }
  function h(f, g, _) {
    if (_ === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null)
      for (let m = 0; m < _; m++)
        this.render(f[m] / l, g[m]);
    else {
      p.multiDrawElementsWEBGL(r, g, 0, a, f, 0, _);
      let m = 0;
      for (let x = 0; x < _; x++)
        m += g[x];
      t.update(m, r, 1);
    }
  }
  this.setMode = o, this.setIndex = c, this.render = u, this.renderInstances = d, this.renderMultiDraw = h;
}
function Cv(i) {
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
      case i.TRIANGLES:
        t.triangles += a * (r / 3);
        break;
      case i.LINES:
        t.lines += a * (r / 2);
        break;
      case i.LINE_STRIP:
        t.lines += a * (r - 1);
        break;
      case i.LINE_LOOP:
        t.lines += a * r;
        break;
      case i.POINTS:
        t.points += a * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function s() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: s,
    update: n
  };
}
function Lv(i, e) {
  return i[0] - e[0];
}
function Pv(i, e) {
  return Math.abs(e[1]) - Math.abs(i[1]);
}
function Iv(i, e, t) {
  const n = {}, s = new Float32Array(8), r = /* @__PURE__ */ new WeakMap(), o = new mt(), a = [];
  for (let c = 0; c < 8; c++)
    a[c] = [c, 0];
  function l(c, u, d) {
    const h = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const f = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color, g = f !== void 0 ? f.length : 0;
      let _ = r.get(u);
      if (_ === void 0 || _.count !== g) {
        let C = function() {
          J.dispose(), r.delete(u), u.removeEventListener("dispose", C);
        };
        _ !== void 0 && _.texture.dispose();
        const x = u.morphAttributes.position !== void 0, v = u.morphAttributes.normal !== void 0, b = u.morphAttributes.color !== void 0, R = u.morphAttributes.position || [], A = u.morphAttributes.normal || [], w = u.morphAttributes.color || [];
        let H = 0;
        x === !0 && (H = 1), v === !0 && (H = 2), b === !0 && (H = 3);
        let E = u.attributes.position.count * H, T = 1;
        E > e.maxTextureSize && (T = Math.ceil(E / e.maxTextureSize), E = e.maxTextureSize);
        const G = new Float32Array(E * T * 4 * g), J = new Md(G, E, T, g);
        J.type = Gn, J.needsUpdate = !0;
        const le = H * 4;
        for (let P = 0; P < g; P++) {
          const D = R[P], ee = A[P], V = w[P], q = E * T * 4 * P;
          for (let Y = 0; Y < D.count; Y++) {
            const Z = Y * le;
            x === !0 && (o.fromBufferAttribute(D, Y), G[q + Z + 0] = o.x, G[q + Z + 1] = o.y, G[q + Z + 2] = o.z, G[q + Z + 3] = 0), v === !0 && (o.fromBufferAttribute(ee, Y), G[q + Z + 4] = o.x, G[q + Z + 5] = o.y, G[q + Z + 6] = o.z, G[q + Z + 7] = 0), b === !0 && (o.fromBufferAttribute(V, Y), G[q + Z + 8] = o.x, G[q + Z + 9] = o.y, G[q + Z + 10] = o.z, G[q + Z + 11] = V.itemSize === 4 ? o.w : 1);
          }
        }
        _ = {
          count: g,
          texture: J,
          size: new ot(E, T)
        }, r.set(u, _), u.addEventListener("dispose", C);
      }
      let p = 0;
      for (let x = 0; x < h.length; x++)
        p += h[x];
      const m = u.morphTargetsRelative ? 1 : 1 - p;
      d.getUniforms().setValue(i, "morphTargetBaseInfluence", m), d.getUniforms().setValue(i, "morphTargetInfluences", h), d.getUniforms().setValue(i, "morphTargetsTexture", _.texture, t), d.getUniforms().setValue(i, "morphTargetsTextureSize", _.size);
    } else {
      const f = h === void 0 ? 0 : h.length;
      let g = n[u.id];
      if (g === void 0 || g.length !== f) {
        g = [];
        for (let v = 0; v < f; v++)
          g[v] = [v, 0];
        n[u.id] = g;
      }
      for (let v = 0; v < f; v++) {
        const b = g[v];
        b[0] = v, b[1] = h[v];
      }
      g.sort(Pv);
      for (let v = 0; v < 8; v++)
        v < f && g[v][1] ? (a[v][0] = g[v][0], a[v][1] = g[v][1]) : (a[v][0] = Number.MAX_SAFE_INTEGER, a[v][1] = 0);
      a.sort(Lv);
      const _ = u.morphAttributes.position, p = u.morphAttributes.normal;
      let m = 0;
      for (let v = 0; v < 8; v++) {
        const b = a[v], R = b[0], A = b[1];
        R !== Number.MAX_SAFE_INTEGER && A ? (_ && u.getAttribute("morphTarget" + v) !== _[R] && u.setAttribute("morphTarget" + v, _[R]), p && u.getAttribute("morphNormal" + v) !== p[R] && u.setAttribute("morphNormal" + v, p[R]), s[v] = A, m += A) : (_ && u.hasAttribute("morphTarget" + v) === !0 && u.deleteAttribute("morphTarget" + v), p && u.hasAttribute("morphNormal" + v) === !0 && u.deleteAttribute("morphNormal" + v), s[v] = 0);
      }
      const x = u.morphTargetsRelative ? 1 : 1 - m;
      d.getUniforms().setValue(i, "morphTargetBaseInfluence", x), d.getUniforms().setValue(i, "morphTargetInfluences", s);
    }
  }
  return {
    update: l
  };
}
function Dv(i, e, t, n) {
  let s = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = n.render.frame, u = l.geometry, d = e.get(l, u);
    if (s.get(d) !== c && (e.update(d), s.set(d, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), s.get(l) !== c && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), s.set(l, c))), l.isSkinnedMesh) {
      const h = l.skeleton;
      s.get(h) !== c && (h.update(), s.set(h, c));
    }
    return d;
  }
  function o() {
    s = /* @__PURE__ */ new WeakMap();
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
class Id extends Ft {
  constructor(e, t, n, s, r, o, a, l, c, u) {
    if (u = u !== void 0 ? u : Di, u !== Di && u !== Ss)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === Di && (n = si), n === void 0 && u === Ss && (n = Ii), super(null, s, r, o, a, l, u, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : Ut, this.minFilter = l !== void 0 ? l : Ut, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const Dd = /* @__PURE__ */ new Ft(), Ud = /* @__PURE__ */ new Id(1, 1);
Ud.compareFunction = yd;
const Nd = /* @__PURE__ */ new Md(), Od = /* @__PURE__ */ new _m(), Fd = /* @__PURE__ */ new Ld(), Oc = [], Fc = [], Bc = new Float32Array(16), Vc = new Float32Array(9), kc = new Float32Array(4);
function Ls(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const s = e * t;
  let r = Oc[s];
  if (r === void 0 && (r = new Float32Array(s), Oc[s] = r), e !== 0) {
    n.toArray(r, 0);
    for (let o = 1, a = 0; o !== e; ++o)
      a += t, i[o].toArray(r, a);
  }
  return r;
}
function Ct(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1;
  return !0;
}
function Lt(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function So(i, e) {
  let t = Fc[e];
  t === void 0 && (t = new Int32Array(e), Fc[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function Uv(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function Nv(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Ct(t, e)) return;
    i.uniform2fv(this.addr, e), Lt(t, e);
  }
}
function Ov(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (Ct(t, e)) return;
    i.uniform3fv(this.addr, e), Lt(t, e);
  }
}
function Fv(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Ct(t, e)) return;
    i.uniform4fv(this.addr, e), Lt(t, e);
  }
}
function Bv(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Ct(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), Lt(t, e);
  } else {
    if (Ct(t, n)) return;
    kc.set(n), i.uniformMatrix2fv(this.addr, !1, kc), Lt(t, n);
  }
}
function Vv(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Ct(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), Lt(t, e);
  } else {
    if (Ct(t, n)) return;
    Vc.set(n), i.uniformMatrix3fv(this.addr, !1, Vc), Lt(t, n);
  }
}
function kv(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Ct(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), Lt(t, e);
  } else {
    if (Ct(t, n)) return;
    Bc.set(n), i.uniformMatrix4fv(this.addr, !1, Bc), Lt(t, n);
  }
}
function zv(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function Hv(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Ct(t, e)) return;
    i.uniform2iv(this.addr, e), Lt(t, e);
  }
}
function Gv(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Ct(t, e)) return;
    i.uniform3iv(this.addr, e), Lt(t, e);
  }
}
function Wv(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Ct(t, e)) return;
    i.uniform4iv(this.addr, e), Lt(t, e);
  }
}
function jv(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function Xv(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Ct(t, e)) return;
    i.uniform2uiv(this.addr, e), Lt(t, e);
  }
}
function qv(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Ct(t, e)) return;
    i.uniform3uiv(this.addr, e), Lt(t, e);
  }
}
function Yv(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Ct(t, e)) return;
    i.uniform4uiv(this.addr, e), Lt(t, e);
  }
}
function Kv(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s);
  const r = this.type === i.SAMPLER_2D_SHADOW ? Ud : Dd;
  t.setTexture2D(e || r, s);
}
function $v(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), t.setTexture3D(e || Od, s);
}
function Jv(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), t.setTextureCube(e || Fd, s);
}
function Zv(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), t.setTexture2DArray(e || Nd, s);
}
function Qv(i) {
  switch (i) {
    case 5126:
      return Uv;
    // FLOAT
    case 35664:
      return Nv;
    // _VEC2
    case 35665:
      return Ov;
    // _VEC3
    case 35666:
      return Fv;
    // _VEC4
    case 35674:
      return Bv;
    // _MAT2
    case 35675:
      return Vv;
    // _MAT3
    case 35676:
      return kv;
    // _MAT4
    case 5124:
    case 35670:
      return zv;
    // INT, BOOL
    case 35667:
    case 35671:
      return Hv;
    // _VEC2
    case 35668:
    case 35672:
      return Gv;
    // _VEC3
    case 35669:
    case 35673:
      return Wv;
    // _VEC4
    case 5125:
      return jv;
    // UINT
    case 36294:
      return Xv;
    // _VEC2
    case 36295:
      return qv;
    // _VEC3
    case 36296:
      return Yv;
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
      return Kv;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return $v;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Jv;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Zv;
  }
}
function e0(i, e) {
  i.uniform1fv(this.addr, e);
}
function t0(i, e) {
  const t = Ls(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function n0(i, e) {
  const t = Ls(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function i0(i, e) {
  const t = Ls(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function s0(i, e) {
  const t = Ls(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function r0(i, e) {
  const t = Ls(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function o0(i, e) {
  const t = Ls(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function a0(i, e) {
  i.uniform1iv(this.addr, e);
}
function l0(i, e) {
  i.uniform2iv(this.addr, e);
}
function c0(i, e) {
  i.uniform3iv(this.addr, e);
}
function u0(i, e) {
  i.uniform4iv(this.addr, e);
}
function d0(i, e) {
  i.uniform1uiv(this.addr, e);
}
function h0(i, e) {
  i.uniform2uiv(this.addr, e);
}
function f0(i, e) {
  i.uniform3uiv(this.addr, e);
}
function p0(i, e) {
  i.uniform4uiv(this.addr, e);
}
function m0(i, e, t) {
  const n = this.cache, s = e.length, r = So(t, s);
  Ct(n, r) || (i.uniform1iv(this.addr, r), Lt(n, r));
  for (let o = 0; o !== s; ++o)
    t.setTexture2D(e[o] || Dd, r[o]);
}
function g0(i, e, t) {
  const n = this.cache, s = e.length, r = So(t, s);
  Ct(n, r) || (i.uniform1iv(this.addr, r), Lt(n, r));
  for (let o = 0; o !== s; ++o)
    t.setTexture3D(e[o] || Od, r[o]);
}
function _0(i, e, t) {
  const n = this.cache, s = e.length, r = So(t, s);
  Ct(n, r) || (i.uniform1iv(this.addr, r), Lt(n, r));
  for (let o = 0; o !== s; ++o)
    t.setTextureCube(e[o] || Fd, r[o]);
}
function v0(i, e, t) {
  const n = this.cache, s = e.length, r = So(t, s);
  Ct(n, r) || (i.uniform1iv(this.addr, r), Lt(n, r));
  for (let o = 0; o !== s; ++o)
    t.setTexture2DArray(e[o] || Nd, r[o]);
}
function y0(i) {
  switch (i) {
    case 5126:
      return e0;
    // FLOAT
    case 35664:
      return t0;
    // _VEC2
    case 35665:
      return n0;
    // _VEC3
    case 35666:
      return i0;
    // _VEC4
    case 35674:
      return s0;
    // _MAT2
    case 35675:
      return r0;
    // _MAT3
    case 35676:
      return o0;
    // _MAT4
    case 5124:
    case 35670:
      return a0;
    // INT, BOOL
    case 35667:
    case 35671:
      return l0;
    // _VEC2
    case 35668:
    case 35672:
      return c0;
    // _VEC3
    case 35669:
    case 35673:
      return u0;
    // _VEC4
    case 5125:
      return d0;
    // UINT
    case 36294:
      return h0;
    // _VEC2
    case 36295:
      return f0;
    // _VEC3
    case 36296:
      return p0;
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
      return m0;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return g0;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return _0;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return v0;
  }
}
class x0 {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Qv(t.type);
  }
}
class E0 {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = y0(t.type);
  }
}
class S0 {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const s = this.seq;
    for (let r = 0, o = s.length; r !== o; ++r) {
      const a = s[r];
      a.setValue(e, t[a.id], n);
    }
  }
}
const la = /(\w+)(\])?(\[|\.)?/g;
function zc(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function M0(i, e, t) {
  const n = i.name, s = n.length;
  for (la.lastIndex = 0; ; ) {
    const r = la.exec(n), o = la.lastIndex;
    let a = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === s) {
      zc(t, c === void 0 ? new x0(a, i, e) : new E0(a, i, e));
      break;
    } else {
      let d = t.map[a];
      d === void 0 && (d = new S0(a), zc(t, d)), t = d;
    }
  }
}
class Zr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const r = e.getActiveUniform(t, s), o = e.getUniformLocation(t, r.name);
      M0(r, o, this);
    }
  }
  setValue(e, t, n, s) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, s);
  }
  setOptional(e, t, n) {
    const s = t[n];
    s !== void 0 && this.setValue(e, n, s);
  }
  static upload(e, t, n, s) {
    for (let r = 0, o = t.length; r !== o; ++r) {
      const a = t[r], l = n[a.id];
      l.needsUpdate !== !1 && a.setValue(e, l.value, s);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let s = 0, r = e.length; s !== r; ++s) {
      const o = e[s];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function Hc(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const A0 = 37297;
let T0 = 0;
function b0(i, e) {
  const t = i.split(`
`), n = [], s = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let o = s; o < r; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function w0(i) {
  const e = ft.getPrimaries(ft.workingColorSpace), t = ft.getPrimaries(i);
  let n;
  switch (e === t ? n = "" : e === lo && t === ao ? n = "LinearDisplayP3ToLinearSRGB" : e === ao && t === lo && (n = "LinearSRGBToLinearDisplayP3"), i) {
    case Nt:
    case yo:
      return [n, "LinearTransferOETF"];
    case xt:
    case nl:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", i), [n, "LinearTransferOETF"];
  }
}
function Gc(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), s = i.getShaderInfoLog(e).trim();
  if (n && s === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(s);
  if (r) {
    const o = parseInt(r[1]);
    return t.toUpperCase() + `

` + s + `

` + b0(i.getShaderSource(e), o);
  } else
    return s;
}
function R0(i, e) {
  const t = w0(e);
  return `vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function C0(i, e) {
  let t;
  switch (e) {
    case Sp:
      t = "Linear";
      break;
    case Mp:
      t = "Reinhard";
      break;
    case Ap:
      t = "OptimizedCineon";
      break;
    case od:
      t = "ACESFilmic";
      break;
    case bp:
      t = "AgX";
      break;
    case Tp:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function L0(i) {
  return [
    i.extensionDerivatives || i.envMapCubeUVHeight || i.bumpMap || i.normalMapTangentSpace || i.clearcoatNormalMap || i.flatShading || i.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (i.extensionFragDepth || i.logarithmicDepthBuffer) && i.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    i.extensionDrawBuffers && i.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (i.extensionShaderTextureLOD || i.envMap || i.transmission) && i.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(ps).join(`
`);
}
function P0(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : ""
  ].filter(ps).join(`
`);
}
function I0(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function D0(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < n; s++) {
    const r = i.getActiveAttrib(e, s), o = r.name;
    let a = 1;
    r.type === i.FLOAT_MAT2 && (a = 2), r.type === i.FLOAT_MAT3 && (a = 3), r.type === i.FLOAT_MAT4 && (a = 4), t[o] = {
      type: r.type,
      location: i.getAttribLocation(e, o),
      locationSize: a
    };
  }
  return t;
}
function ps(i) {
  return i !== "";
}
function Wc(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function jc(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const U0 = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Na(i) {
  return i.replace(U0, O0);
}
const N0 = /* @__PURE__ */ new Map([
  ["encodings_fragment", "colorspace_fragment"],
  // @deprecated, r154
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  // @deprecated, r154
  ["output_fragment", "opaque_fragment"]
  // @deprecated, r154
]);
function O0(i, e) {
  let t = Je[e];
  if (t === void 0) {
    const n = N0.get(e);
    if (n !== void 0)
      t = Je[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Na(t);
}
const F0 = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Xc(i) {
  return i.replace(F0, B0);
}
function B0(i, e, t, n) {
  let s = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    s += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function qc(i) {
  let e = "precision " + i.precision + ` float;
precision ` + i.precision + " int;";
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function V0(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === id ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === sd ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === zn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function k0(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case ys:
      case xs:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case vo:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function z0(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case xs:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function H0(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case rd:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case xp:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Ep:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function G0(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t };
}
function W0(i, e, t, n) {
  const s = i.getContext(), r = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const l = V0(t), c = k0(t), u = z0(t), d = H0(t), h = G0(t), f = t.isWebGL2 ? "" : L0(t), g = P0(t), _ = I0(r), p = s.createProgram();
  let m, x, v = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (m = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(ps).join(`
`), m.length > 0 && (m += `
`), x = [
    f,
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(ps).join(`
`), x.length > 0 && (x += `
`)) : (m = [
    qc(t),
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
  ].filter(ps).join(`
`), x = [
    f,
    qc(t),
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
    t.envMap ? "#define " + d : "",
    h ? "#define CUBEUV_TEXEL_WIDTH " + h.texelWidth : "",
    h ? "#define CUBEUV_TEXEL_HEIGHT " + h.texelHeight : "",
    h ? "#define CUBEUV_MAX_MIP " + h.maxMip + ".0" : "",
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
    t.toneMapping !== ai ? "#define TONE_MAPPING" : "",
    t.toneMapping !== ai ? Je.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== ai ? C0("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Je.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    R0("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(ps).join(`
`)), o = Na(o), o = Wc(o, t), o = jc(o, t), a = Na(a), a = Wc(a, t), a = jc(a, t), o = Xc(o), a = Xc(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (v = `#version 300 es
`, m = [
    g,
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + m, x = [
    "precision mediump sampler2DArray;",
    "#define varying in",
    t.glslVersion === dc ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === dc ? "" : "#define gl_FragColor pc_fragColor",
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
  const b = v + m + o, R = v + x + a, A = Hc(s, s.VERTEX_SHADER, b), w = Hc(s, s.FRAGMENT_SHADER, R);
  s.attachShader(p, A), s.attachShader(p, w), t.index0AttributeName !== void 0 ? s.bindAttribLocation(p, 0, t.index0AttributeName) : t.morphTargets === !0 && s.bindAttribLocation(p, 0, "position"), s.linkProgram(p);
  function H(J) {
    if (i.debug.checkShaderErrors) {
      const le = s.getProgramInfoLog(p).trim(), C = s.getShaderInfoLog(A).trim(), P = s.getShaderInfoLog(w).trim();
      let D = !0, ee = !0;
      if (s.getProgramParameter(p, s.LINK_STATUS) === !1)
        if (D = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(s, p, A, w);
        else {
          const V = Gc(s, A, "vertex"), q = Gc(s, w, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(p, s.VALIDATE_STATUS) + `

Program Info Log: ` + le + `
` + V + `
` + q
          );
        }
      else le !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", le) : (C === "" || P === "") && (ee = !1);
      ee && (J.diagnostics = {
        runnable: D,
        programLog: le,
        vertexShader: {
          log: C,
          prefix: m
        },
        fragmentShader: {
          log: P,
          prefix: x
        }
      });
    }
    s.deleteShader(A), s.deleteShader(w), E = new Zr(s, p), T = D0(s, p);
  }
  let E;
  this.getUniforms = function() {
    return E === void 0 && H(this), E;
  };
  let T;
  this.getAttributes = function() {
    return T === void 0 && H(this), T;
  };
  let G = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return G === !1 && (G = s.getProgramParameter(p, A0)), G;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), s.deleteProgram(p), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = T0++, this.cacheKey = e, this.usedTimes = 1, this.program = p, this.vertexShader = A, this.fragmentShader = w, this;
}
let j0 = 0;
class X0 {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, s = this._getShaderStage(t), r = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
    return o.has(s) === !1 && (o.add(s), s.usedTimes++), o.has(r) === !1 && (o.add(r), r.usedTimes++), this;
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
    return n === void 0 && (n = new q0(e), t.set(e, n)), n;
  }
}
class q0 {
  constructor(e) {
    this.id = j0++, this.code = e, this.usedTimes = 0;
  }
}
function Y0(i, e, t, n, s, r, o) {
  const a = new Ad(), l = new X0(), c = [], u = s.isWebGL2, d = s.logarithmicDepthBuffer, h = s.vertexTextures;
  let f = s.precision;
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
  function p(E, T, G, J, le) {
    const C = J.fog, P = le.geometry, D = E.isMeshStandardMaterial ? J.environment : null, ee = (E.isMeshStandardMaterial ? t : e).get(E.envMap || D), V = ee && ee.mapping === vo ? ee.image.height : null, q = g[E.type];
    E.precision !== null && (f = s.getMaxPrecision(E.precision), f !== E.precision && console.warn("THREE.WebGLProgram.getParameters:", E.precision, "not supported, using", f, "instead."));
    const Y = P.morphAttributes.position || P.morphAttributes.normal || P.morphAttributes.color, Z = Y !== void 0 ? Y.length : 0;
    let he = 0;
    P.morphAttributes.position !== void 0 && (he = 1), P.morphAttributes.normal !== void 0 && (he = 2), P.morphAttributes.color !== void 0 && (he = 3);
    let z, te, se, Q;
    if (q) {
      const bt = bn[q];
      z = bt.vertexShader, te = bt.fragmentShader;
    } else
      z = E.vertexShader, te = E.fragmentShader, l.update(E), se = l.getVertexShaderID(E), Q = l.getFragmentShaderID(E);
    const ae = i.getRenderTarget(), be = le.isInstancedMesh === !0, Re = le.isBatchedMesh === !0, ge = !!E.map, Ae = !!E.matcap, N = !!ee, Qe = !!E.aoMap, Ce = !!E.lightMap, Ie = !!E.bumpMap, Te = !!E.normalMap, lt = !!E.displacementMap, Be = !!E.emissiveMap, M = !!E.metalnessMap, y = !!E.roughnessMap, W = E.anisotropy > 0, de = E.clearcoat > 0, ce = E.iridescence > 0, ue = E.sheen > 0, oe = E.transmission > 0, I = W && !!E.anisotropyMap, k = de && !!E.clearcoatMap, ne = de && !!E.clearcoatNormalMap, Se = de && !!E.clearcoatRoughnessMap, K = ce && !!E.iridescenceMap, xe = ce && !!E.iridescenceThicknessMap, Ee = ue && !!E.sheenColorMap, Le = ue && !!E.sheenRoughnessMap, we = !!E.specularMap, Me = !!E.specularColorMap, ze = !!E.specularIntensityMap, it = oe && !!E.transmissionMap, ut = oe && !!E.thicknessMap, Xe = !!E.gradientMap, fe = !!E.alphaMap, L = E.alphaTest > 0, me = !!E.alphaHash, ve = !!E.extensions, Oe = !!P.attributes.uv1, Ue = !!P.attributes.uv2, ct = !!P.attributes.uv3;
    let dt = ai;
    return E.toneMapped && (ae === null || ae.isXRRenderTarget === !0) && (dt = i.toneMapping), {
      isWebGL2: u,
      shaderID: q,
      shaderType: E.type,
      shaderName: E.name,
      vertexShader: z,
      fragmentShader: te,
      defines: E.defines,
      customVertexShaderID: se,
      customFragmentShaderID: Q,
      isRawShaderMaterial: E.isRawShaderMaterial === !0,
      glslVersion: E.glslVersion,
      precision: f,
      batching: Re,
      instancing: be,
      instancingColor: be && le.instanceColor !== null,
      supportsVertexTextures: h,
      outputColorSpace: ae === null ? i.outputColorSpace : ae.isXRRenderTarget === !0 ? ae.texture.colorSpace : Nt,
      map: ge,
      matcap: Ae,
      envMap: N,
      envMapMode: N && ee.mapping,
      envMapCubeUVHeight: V,
      aoMap: Qe,
      lightMap: Ce,
      bumpMap: Ie,
      normalMap: Te,
      displacementMap: h && lt,
      emissiveMap: Be,
      normalMapObjectSpace: Te && E.normalMapType === Gp,
      normalMapTangentSpace: Te && E.normalMapType === vd,
      metalnessMap: M,
      roughnessMap: y,
      anisotropy: W,
      anisotropyMap: I,
      clearcoat: de,
      clearcoatMap: k,
      clearcoatNormalMap: ne,
      clearcoatRoughnessMap: Se,
      iridescence: ce,
      iridescenceMap: K,
      iridescenceThicknessMap: xe,
      sheen: ue,
      sheenColorMap: Ee,
      sheenRoughnessMap: Le,
      specularMap: we,
      specularColorMap: Me,
      specularIntensityMap: ze,
      transmission: oe,
      transmissionMap: it,
      thicknessMap: ut,
      gradientMap: Xe,
      opaque: E.transparent === !1 && E.blending === ms,
      alphaMap: fe,
      alphaTest: L,
      alphaHash: me,
      combine: E.combine,
      //
      mapUv: ge && _(E.map.channel),
      aoMapUv: Qe && _(E.aoMap.channel),
      lightMapUv: Ce && _(E.lightMap.channel),
      bumpMapUv: Ie && _(E.bumpMap.channel),
      normalMapUv: Te && _(E.normalMap.channel),
      displacementMapUv: lt && _(E.displacementMap.channel),
      emissiveMapUv: Be && _(E.emissiveMap.channel),
      metalnessMapUv: M && _(E.metalnessMap.channel),
      roughnessMapUv: y && _(E.roughnessMap.channel),
      anisotropyMapUv: I && _(E.anisotropyMap.channel),
      clearcoatMapUv: k && _(E.clearcoatMap.channel),
      clearcoatNormalMapUv: ne && _(E.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Se && _(E.clearcoatRoughnessMap.channel),
      iridescenceMapUv: K && _(E.iridescenceMap.channel),
      iridescenceThicknessMapUv: xe && _(E.iridescenceThicknessMap.channel),
      sheenColorMapUv: Ee && _(E.sheenColorMap.channel),
      sheenRoughnessMapUv: Le && _(E.sheenRoughnessMap.channel),
      specularMapUv: we && _(E.specularMap.channel),
      specularColorMapUv: Me && _(E.specularColorMap.channel),
      specularIntensityMapUv: ze && _(E.specularIntensityMap.channel),
      transmissionMapUv: it && _(E.transmissionMap.channel),
      thicknessMapUv: ut && _(E.thicknessMap.channel),
      alphaMapUv: fe && _(E.alphaMap.channel),
      //
      vertexTangents: !!P.attributes.tangent && (Te || W),
      vertexColors: E.vertexColors,
      vertexAlphas: E.vertexColors === !0 && !!P.attributes.color && P.attributes.color.itemSize === 4,
      vertexUv1s: Oe,
      vertexUv2s: Ue,
      vertexUv3s: ct,
      pointsUvs: le.isPoints === !0 && !!P.attributes.uv && (ge || fe),
      fog: !!C,
      useFog: E.fog === !0,
      fogExp2: C && C.isFogExp2,
      flatShading: E.flatShading === !0,
      sizeAttenuation: E.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      skinning: le.isSkinnedMesh === !0,
      morphTargets: P.morphAttributes.position !== void 0,
      morphNormals: P.morphAttributes.normal !== void 0,
      morphColors: P.morphAttributes.color !== void 0,
      morphTargetsCount: Z,
      morphTextureStride: he,
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
      shadowMapEnabled: i.shadowMap.enabled && G.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: dt,
      useLegacyLights: i._useLegacyLights,
      decodeVideoTexture: ge && E.map.isVideoTexture === !0 && ft.getTransfer(E.map.colorSpace) === gt,
      premultipliedAlpha: E.premultipliedAlpha,
      doubleSided: E.side === wn,
      flipSided: E.side === Qt,
      useDepthPacking: E.depthPacking >= 0,
      depthPacking: E.depthPacking || 0,
      index0AttributeName: E.index0AttributeName,
      extensionDerivatives: ve && E.extensions.derivatives === !0,
      extensionFragDepth: ve && E.extensions.fragDepth === !0,
      extensionDrawBuffers: ve && E.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: ve && E.extensions.shaderTextureLOD === !0,
      extensionClipCullDistance: ve && E.extensions.clipCullDistance && n.has("WEBGL_clip_cull_distance"),
      rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: E.customProgramCacheKey()
    };
  }
  function m(E) {
    const T = [];
    if (E.shaderID ? T.push(E.shaderID) : (T.push(E.customVertexShaderID), T.push(E.customFragmentShaderID)), E.defines !== void 0)
      for (const G in E.defines)
        T.push(G), T.push(E.defines[G]);
    return E.isRawShaderMaterial === !1 && (x(T, E), v(T, E), T.push(i.outputColorSpace)), T.push(E.customProgramCacheKey), T.join();
  }
  function x(E, T) {
    E.push(T.precision), E.push(T.outputColorSpace), E.push(T.envMapMode), E.push(T.envMapCubeUVHeight), E.push(T.mapUv), E.push(T.alphaMapUv), E.push(T.lightMapUv), E.push(T.aoMapUv), E.push(T.bumpMapUv), E.push(T.normalMapUv), E.push(T.displacementMapUv), E.push(T.emissiveMapUv), E.push(T.metalnessMapUv), E.push(T.roughnessMapUv), E.push(T.anisotropyMapUv), E.push(T.clearcoatMapUv), E.push(T.clearcoatNormalMapUv), E.push(T.clearcoatRoughnessMapUv), E.push(T.iridescenceMapUv), E.push(T.iridescenceThicknessMapUv), E.push(T.sheenColorMapUv), E.push(T.sheenRoughnessMapUv), E.push(T.specularMapUv), E.push(T.specularColorMapUv), E.push(T.specularIntensityMapUv), E.push(T.transmissionMapUv), E.push(T.thicknessMapUv), E.push(T.combine), E.push(T.fogExp2), E.push(T.sizeAttenuation), E.push(T.morphTargetsCount), E.push(T.morphAttributeCount), E.push(T.numDirLights), E.push(T.numPointLights), E.push(T.numSpotLights), E.push(T.numSpotLightMaps), E.push(T.numHemiLights), E.push(T.numRectAreaLights), E.push(T.numDirLightShadows), E.push(T.numPointLightShadows), E.push(T.numSpotLightShadows), E.push(T.numSpotLightShadowsWithMaps), E.push(T.numLightProbes), E.push(T.shadowMapType), E.push(T.toneMapping), E.push(T.numClippingPlanes), E.push(T.numClipIntersection), E.push(T.depthPacking);
  }
  function v(E, T) {
    a.disableAll(), T.isWebGL2 && a.enable(0), T.supportsVertexTextures && a.enable(1), T.instancing && a.enable(2), T.instancingColor && a.enable(3), T.matcap && a.enable(4), T.envMap && a.enable(5), T.normalMapObjectSpace && a.enable(6), T.normalMapTangentSpace && a.enable(7), T.clearcoat && a.enable(8), T.iridescence && a.enable(9), T.alphaTest && a.enable(10), T.vertexColors && a.enable(11), T.vertexAlphas && a.enable(12), T.vertexUv1s && a.enable(13), T.vertexUv2s && a.enable(14), T.vertexUv3s && a.enable(15), T.vertexTangents && a.enable(16), T.anisotropy && a.enable(17), T.alphaHash && a.enable(18), T.batching && a.enable(19), E.push(a.mask), a.disableAll(), T.fog && a.enable(0), T.useFog && a.enable(1), T.flatShading && a.enable(2), T.logarithmicDepthBuffer && a.enable(3), T.skinning && a.enable(4), T.morphTargets && a.enable(5), T.morphNormals && a.enable(6), T.morphColors && a.enable(7), T.premultipliedAlpha && a.enable(8), T.shadowMapEnabled && a.enable(9), T.useLegacyLights && a.enable(10), T.doubleSided && a.enable(11), T.flipSided && a.enable(12), T.useDepthPacking && a.enable(13), T.dithering && a.enable(14), T.transmission && a.enable(15), T.sheen && a.enable(16), T.opaque && a.enable(17), T.pointsUvs && a.enable(18), T.decodeVideoTexture && a.enable(19), E.push(a.mask);
  }
  function b(E) {
    const T = g[E.type];
    let G;
    if (T) {
      const J = bn[T];
      G = Lm.clone(J.uniforms);
    } else
      G = E.uniforms;
    return G;
  }
  function R(E, T) {
    let G;
    for (let J = 0, le = c.length; J < le; J++) {
      const C = c[J];
      if (C.cacheKey === T) {
        G = C, ++G.usedTimes;
        break;
      }
    }
    return G === void 0 && (G = new W0(i, T, E, r), c.push(G)), G;
  }
  function A(E) {
    if (--E.usedTimes === 0) {
      const T = c.indexOf(E);
      c[T] = c[c.length - 1], c.pop(), E.destroy();
    }
  }
  function w(E) {
    l.remove(E);
  }
  function H() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: m,
    getUniforms: b,
    acquireProgram: R,
    releaseProgram: A,
    releaseShaderCache: w,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: c,
    dispose: H
  };
}
function K0() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(r) {
    let o = i.get(r);
    return o === void 0 && (o = {}, i.set(r, o)), o;
  }
  function t(r) {
    i.delete(r);
  }
  function n(r, o, a) {
    i.get(r)[o] = a;
  }
  function s() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: s
  };
}
function $0(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function Yc(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function Kc() {
  const i = [];
  let e = 0;
  const t = [], n = [], s = [];
  function r() {
    e = 0, t.length = 0, n.length = 0, s.length = 0;
  }
  function o(d, h, f, g, _, p) {
    let m = i[e];
    return m === void 0 ? (m = {
      id: d.id,
      object: d,
      geometry: h,
      material: f,
      groupOrder: g,
      renderOrder: d.renderOrder,
      z: _,
      group: p
    }, i[e] = m) : (m.id = d.id, m.object = d, m.geometry = h, m.material = f, m.groupOrder = g, m.renderOrder = d.renderOrder, m.z = _, m.group = p), e++, m;
  }
  function a(d, h, f, g, _, p) {
    const m = o(d, h, f, g, _, p);
    f.transmission > 0 ? n.push(m) : f.transparent === !0 ? s.push(m) : t.push(m);
  }
  function l(d, h, f, g, _, p) {
    const m = o(d, h, f, g, _, p);
    f.transmission > 0 ? n.unshift(m) : f.transparent === !0 ? s.unshift(m) : t.unshift(m);
  }
  function c(d, h) {
    t.length > 1 && t.sort(d || $0), n.length > 1 && n.sort(h || Yc), s.length > 1 && s.sort(h || Yc);
  }
  function u() {
    for (let d = e, h = i.length; d < h; d++) {
      const f = i[d];
      if (f.id === null) break;
      f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: s,
    init: r,
    push: a,
    unshift: l,
    finish: u,
    sort: c
  };
}
function J0() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, s) {
    const r = i.get(n);
    let o;
    return r === void 0 ? (o = new Kc(), i.set(n, [o])) : s >= r.length ? (o = new Kc(), r.push(o)) : o = r[s], o;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Z0() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new U(),
            color: new je()
          };
          break;
        case "SpotLight":
          t = {
            position: new U(),
            direction: new U(),
            color: new je(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new U(),
            color: new je(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new U(),
            skyColor: new je(),
            groundColor: new je()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new je(),
            position: new U(),
            halfWidth: new U(),
            halfHeight: new U()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function Q0() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ot()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ot()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ot(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let ey = 0;
function ty(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function ny(i, e) {
  const t = new Z0(), n = Q0(), s = {
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
  for (let u = 0; u < 9; u++) s.probe.push(new U());
  const r = new U(), o = new nt(), a = new nt();
  function l(u, d) {
    let h = 0, f = 0, g = 0;
    for (let J = 0; J < 9; J++) s.probe[J].set(0, 0, 0);
    let _ = 0, p = 0, m = 0, x = 0, v = 0, b = 0, R = 0, A = 0, w = 0, H = 0, E = 0;
    u.sort(ty);
    const T = d === !0 ? Math.PI : 1;
    for (let J = 0, le = u.length; J < le; J++) {
      const C = u[J], P = C.color, D = C.intensity, ee = C.distance, V = C.shadow && C.shadow.map ? C.shadow.map.texture : null;
      if (C.isAmbientLight)
        h += P.r * D * T, f += P.g * D * T, g += P.b * D * T;
      else if (C.isLightProbe) {
        for (let q = 0; q < 9; q++)
          s.probe[q].addScaledVector(C.sh.coefficients[q], D);
        E++;
      } else if (C.isDirectionalLight) {
        const q = t.get(C);
        if (q.color.copy(C.color).multiplyScalar(C.intensity * T), C.castShadow) {
          const Y = C.shadow, Z = n.get(C);
          Z.shadowBias = Y.bias, Z.shadowNormalBias = Y.normalBias, Z.shadowRadius = Y.radius, Z.shadowMapSize = Y.mapSize, s.directionalShadow[_] = Z, s.directionalShadowMap[_] = V, s.directionalShadowMatrix[_] = C.shadow.matrix, b++;
        }
        s.directional[_] = q, _++;
      } else if (C.isSpotLight) {
        const q = t.get(C);
        q.position.setFromMatrixPosition(C.matrixWorld), q.color.copy(P).multiplyScalar(D * T), q.distance = ee, q.coneCos = Math.cos(C.angle), q.penumbraCos = Math.cos(C.angle * (1 - C.penumbra)), q.decay = C.decay, s.spot[m] = q;
        const Y = C.shadow;
        if (C.map && (s.spotLightMap[w] = C.map, w++, Y.updateMatrices(C), C.castShadow && H++), s.spotLightMatrix[m] = Y.matrix, C.castShadow) {
          const Z = n.get(C);
          Z.shadowBias = Y.bias, Z.shadowNormalBias = Y.normalBias, Z.shadowRadius = Y.radius, Z.shadowMapSize = Y.mapSize, s.spotShadow[m] = Z, s.spotShadowMap[m] = V, A++;
        }
        m++;
      } else if (C.isRectAreaLight) {
        const q = t.get(C);
        q.color.copy(P).multiplyScalar(D), q.halfWidth.set(C.width * 0.5, 0, 0), q.halfHeight.set(0, C.height * 0.5, 0), s.rectArea[x] = q, x++;
      } else if (C.isPointLight) {
        const q = t.get(C);
        if (q.color.copy(C.color).multiplyScalar(C.intensity * T), q.distance = C.distance, q.decay = C.decay, C.castShadow) {
          const Y = C.shadow, Z = n.get(C);
          Z.shadowBias = Y.bias, Z.shadowNormalBias = Y.normalBias, Z.shadowRadius = Y.radius, Z.shadowMapSize = Y.mapSize, Z.shadowCameraNear = Y.camera.near, Z.shadowCameraFar = Y.camera.far, s.pointShadow[p] = Z, s.pointShadowMap[p] = V, s.pointShadowMatrix[p] = C.shadow.matrix, R++;
        }
        s.point[p] = q, p++;
      } else if (C.isHemisphereLight) {
        const q = t.get(C);
        q.skyColor.copy(C.color).multiplyScalar(D * T), q.groundColor.copy(C.groundColor).multiplyScalar(D * T), s.hemi[v] = q, v++;
      }
    }
    x > 0 && (e.isWebGL2 ? i.has("OES_texture_float_linear") === !0 ? (s.rectAreaLTC1 = _e.LTC_FLOAT_1, s.rectAreaLTC2 = _e.LTC_FLOAT_2) : (s.rectAreaLTC1 = _e.LTC_HALF_1, s.rectAreaLTC2 = _e.LTC_HALF_2) : i.has("OES_texture_float_linear") === !0 ? (s.rectAreaLTC1 = _e.LTC_FLOAT_1, s.rectAreaLTC2 = _e.LTC_FLOAT_2) : i.has("OES_texture_half_float_linear") === !0 ? (s.rectAreaLTC1 = _e.LTC_HALF_1, s.rectAreaLTC2 = _e.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), s.ambient[0] = h, s.ambient[1] = f, s.ambient[2] = g;
    const G = s.hash;
    (G.directionalLength !== _ || G.pointLength !== p || G.spotLength !== m || G.rectAreaLength !== x || G.hemiLength !== v || G.numDirectionalShadows !== b || G.numPointShadows !== R || G.numSpotShadows !== A || G.numSpotMaps !== w || G.numLightProbes !== E) && (s.directional.length = _, s.spot.length = m, s.rectArea.length = x, s.point.length = p, s.hemi.length = v, s.directionalShadow.length = b, s.directionalShadowMap.length = b, s.pointShadow.length = R, s.pointShadowMap.length = R, s.spotShadow.length = A, s.spotShadowMap.length = A, s.directionalShadowMatrix.length = b, s.pointShadowMatrix.length = R, s.spotLightMatrix.length = A + w - H, s.spotLightMap.length = w, s.numSpotLightShadowsWithMaps = H, s.numLightProbes = E, G.directionalLength = _, G.pointLength = p, G.spotLength = m, G.rectAreaLength = x, G.hemiLength = v, G.numDirectionalShadows = b, G.numPointShadows = R, G.numSpotShadows = A, G.numSpotMaps = w, G.numLightProbes = E, s.version = ey++);
  }
  function c(u, d) {
    let h = 0, f = 0, g = 0, _ = 0, p = 0;
    const m = d.matrixWorldInverse;
    for (let x = 0, v = u.length; x < v; x++) {
      const b = u[x];
      if (b.isDirectionalLight) {
        const R = s.directional[h];
        R.direction.setFromMatrixPosition(b.matrixWorld), r.setFromMatrixPosition(b.target.matrixWorld), R.direction.sub(r), R.direction.transformDirection(m), h++;
      } else if (b.isSpotLight) {
        const R = s.spot[g];
        R.position.setFromMatrixPosition(b.matrixWorld), R.position.applyMatrix4(m), R.direction.setFromMatrixPosition(b.matrixWorld), r.setFromMatrixPosition(b.target.matrixWorld), R.direction.sub(r), R.direction.transformDirection(m), g++;
      } else if (b.isRectAreaLight) {
        const R = s.rectArea[_];
        R.position.setFromMatrixPosition(b.matrixWorld), R.position.applyMatrix4(m), a.identity(), o.copy(b.matrixWorld), o.premultiply(m), a.extractRotation(o), R.halfWidth.set(b.width * 0.5, 0, 0), R.halfHeight.set(0, b.height * 0.5, 0), R.halfWidth.applyMatrix4(a), R.halfHeight.applyMatrix4(a), _++;
      } else if (b.isPointLight) {
        const R = s.point[f];
        R.position.setFromMatrixPosition(b.matrixWorld), R.position.applyMatrix4(m), f++;
      } else if (b.isHemisphereLight) {
        const R = s.hemi[p];
        R.direction.setFromMatrixPosition(b.matrixWorld), R.direction.transformDirection(m), p++;
      }
    }
  }
  return {
    setup: l,
    setupView: c,
    state: s
  };
}
function $c(i, e) {
  const t = new ny(i, e), n = [], s = [];
  function r() {
    n.length = 0, s.length = 0;
  }
  function o(d) {
    n.push(d);
  }
  function a(d) {
    s.push(d);
  }
  function l(d) {
    t.setup(n, d);
  }
  function c(d) {
    t.setupView(n, d);
  }
  return {
    init: r,
    state: {
      lightsArray: n,
      shadowsArray: s,
      lights: t
    },
    setupLights: l,
    setupLightsView: c,
    pushLight: o,
    pushShadow: a
  };
}
function iy(i, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(r, o = 0) {
    const a = t.get(r);
    let l;
    return a === void 0 ? (l = new $c(i, e), t.set(r, [l])) : o >= a.length ? (l = new $c(i, e), a.push(l)) : l = a[o], l;
  }
  function s() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class sy extends Cn {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = zp, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class ry extends Cn {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const oy = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, ay = `uniform sampler2D shadow_pass;
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
function ly(i, e, t) {
  let n = new sl();
  const s = new ot(), r = new ot(), o = new mt(), a = new sy({ depthPacking: Hp }), l = new ry(), c = {}, u = t.maxTextureSize, d = { [jn]: Qt, [Qt]: jn, [wn]: wn }, h = new Bi({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new ot() },
      radius: { value: 4 }
    },
    vertexShader: oy,
    fragmentShader: ay
  }), f = h.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const g = new Sn();
  g.setAttribute(
    "position",
    new Yt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const _ = new $e(g, h), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = id;
  let m = this.type;
  this.render = function(A, w, H) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || A.length === 0) return;
    const E = i.getRenderTarget(), T = i.getActiveCubeFace(), G = i.getActiveMipmapLevel(), J = i.state;
    J.setBlending(oi), J.buffers.color.setClear(1, 1, 1, 1), J.buffers.depth.setTest(!0), J.setScissorTest(!1);
    const le = m !== zn && this.type === zn, C = m === zn && this.type !== zn;
    for (let P = 0, D = A.length; P < D; P++) {
      const ee = A[P], V = ee.shadow;
      if (V === void 0) {
        console.warn("THREE.WebGLShadowMap:", ee, "has no shadow.");
        continue;
      }
      if (V.autoUpdate === !1 && V.needsUpdate === !1) continue;
      s.copy(V.mapSize);
      const q = V.getFrameExtents();
      if (s.multiply(q), r.copy(V.mapSize), (s.x > u || s.y > u) && (s.x > u && (r.x = Math.floor(u / q.x), s.x = r.x * q.x, V.mapSize.x = r.x), s.y > u && (r.y = Math.floor(u / q.y), s.y = r.y * q.y, V.mapSize.y = r.y)), V.map === null || le === !0 || C === !0) {
        const Z = this.type !== zn ? { minFilter: Ut, magFilter: Ut } : {};
        V.map !== null && V.map.dispose(), V.map = new Fi(s.x, s.y, Z), V.map.texture.name = ee.name + ".shadowMap", V.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(V.map), i.clear();
      const Y = V.getViewportCount();
      for (let Z = 0; Z < Y; Z++) {
        const he = V.getViewport(Z);
        o.set(
          r.x * he.x,
          r.y * he.y,
          r.x * he.z,
          r.y * he.w
        ), J.viewport(o), V.updateMatrices(ee, Z), n = V.getFrustum(), b(w, H, V.camera, ee, this.type);
      }
      V.isPointLightShadow !== !0 && this.type === zn && x(V, H), V.needsUpdate = !1;
    }
    m = this.type, p.needsUpdate = !1, i.setRenderTarget(E, T, G);
  };
  function x(A, w) {
    const H = e.update(_);
    h.defines.VSM_SAMPLES !== A.blurSamples && (h.defines.VSM_SAMPLES = A.blurSamples, f.defines.VSM_SAMPLES = A.blurSamples, h.needsUpdate = !0, f.needsUpdate = !0), A.mapPass === null && (A.mapPass = new Fi(s.x, s.y)), h.uniforms.shadow_pass.value = A.map.texture, h.uniforms.resolution.value = A.mapSize, h.uniforms.radius.value = A.radius, i.setRenderTarget(A.mapPass), i.clear(), i.renderBufferDirect(w, null, H, h, _, null), f.uniforms.shadow_pass.value = A.mapPass.texture, f.uniforms.resolution.value = A.mapSize, f.uniforms.radius.value = A.radius, i.setRenderTarget(A.map), i.clear(), i.renderBufferDirect(w, null, H, f, _, null);
  }
  function v(A, w, H, E) {
    let T = null;
    const G = H.isPointLight === !0 ? A.customDistanceMaterial : A.customDepthMaterial;
    if (G !== void 0)
      T = G;
    else if (T = H.isPointLight === !0 ? l : a, i.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) {
      const J = T.uuid, le = w.uuid;
      let C = c[J];
      C === void 0 && (C = {}, c[J] = C);
      let P = C[le];
      P === void 0 && (P = T.clone(), C[le] = P, w.addEventListener("dispose", R)), T = P;
    }
    if (T.visible = w.visible, T.wireframe = w.wireframe, E === zn ? T.side = w.shadowSide !== null ? w.shadowSide : w.side : T.side = w.shadowSide !== null ? w.shadowSide : d[w.side], T.alphaMap = w.alphaMap, T.alphaTest = w.alphaTest, T.map = w.map, T.clipShadows = w.clipShadows, T.clippingPlanes = w.clippingPlanes, T.clipIntersection = w.clipIntersection, T.displacementMap = w.displacementMap, T.displacementScale = w.displacementScale, T.displacementBias = w.displacementBias, T.wireframeLinewidth = w.wireframeLinewidth, T.linewidth = w.linewidth, H.isPointLight === !0 && T.isMeshDistanceMaterial === !0) {
      const J = i.properties.get(T);
      J.light = H;
    }
    return T;
  }
  function b(A, w, H, E, T) {
    if (A.visible === !1) return;
    if (A.layers.test(w.layers) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && T === zn) && (!A.frustumCulled || n.intersectsObject(A))) {
      A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse, A.matrixWorld);
      const le = e.update(A), C = A.material;
      if (Array.isArray(C)) {
        const P = le.groups;
        for (let D = 0, ee = P.length; D < ee; D++) {
          const V = P[D], q = C[V.materialIndex];
          if (q && q.visible) {
            const Y = v(A, q, E, T);
            A.onBeforeShadow(i, A, w, H, le, Y, V), i.renderBufferDirect(H, null, le, Y, A, V), A.onAfterShadow(i, A, w, H, le, Y, V);
          }
        }
      } else if (C.visible) {
        const P = v(A, C, E, T);
        A.onBeforeShadow(i, A, w, H, le, P, null), i.renderBufferDirect(H, null, le, P, A, null), A.onAfterShadow(i, A, w, H, le, P, null);
      }
    }
    const J = A.children;
    for (let le = 0, C = J.length; le < C; le++)
      b(J[le], w, H, E, T);
  }
  function R(A) {
    A.target.removeEventListener("dispose", R);
    for (const H in c) {
      const E = c[H], T = A.target.uuid;
      T in E && (E[T].dispose(), delete E[T]);
    }
  }
}
function cy(i, e, t) {
  const n = t.isWebGL2;
  function s() {
    let L = !1;
    const me = new mt();
    let ve = null;
    const Oe = new mt(0, 0, 0, 0);
    return {
      setMask: function(Ue) {
        ve !== Ue && !L && (i.colorMask(Ue, Ue, Ue, Ue), ve = Ue);
      },
      setLocked: function(Ue) {
        L = Ue;
      },
      setClear: function(Ue, ct, dt, St, bt) {
        bt === !0 && (Ue *= St, ct *= St, dt *= St), me.set(Ue, ct, dt, St), Oe.equals(me) === !1 && (i.clearColor(Ue, ct, dt, St), Oe.copy(me));
      },
      reset: function() {
        L = !1, ve = null, Oe.set(-1, 0, 0, 0);
      }
    };
  }
  function r() {
    let L = !1, me = null, ve = null, Oe = null;
    return {
      setTest: function(Ue) {
        Ue ? Re(i.DEPTH_TEST) : ge(i.DEPTH_TEST);
      },
      setMask: function(Ue) {
        me !== Ue && !L && (i.depthMask(Ue), me = Ue);
      },
      setFunc: function(Ue) {
        if (ve !== Ue) {
          switch (Ue) {
            case fp:
              i.depthFunc(i.NEVER);
              break;
            case pp:
              i.depthFunc(i.ALWAYS);
              break;
            case mp:
              i.depthFunc(i.LESS);
              break;
            case io:
              i.depthFunc(i.LEQUAL);
              break;
            case gp:
              i.depthFunc(i.EQUAL);
              break;
            case _p:
              i.depthFunc(i.GEQUAL);
              break;
            case vp:
              i.depthFunc(i.GREATER);
              break;
            case yp:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          ve = Ue;
        }
      },
      setLocked: function(Ue) {
        L = Ue;
      },
      setClear: function(Ue) {
        Oe !== Ue && (i.clearDepth(Ue), Oe = Ue);
      },
      reset: function() {
        L = !1, me = null, ve = null, Oe = null;
      }
    };
  }
  function o() {
    let L = !1, me = null, ve = null, Oe = null, Ue = null, ct = null, dt = null, St = null, bt = null;
    return {
      setTest: function(at) {
        L || (at ? Re(i.STENCIL_TEST) : ge(i.STENCIL_TEST));
      },
      setMask: function(at) {
        me !== at && !L && (i.stencilMask(at), me = at);
      },
      setFunc: function(at, wt, Bt) {
        (ve !== at || Oe !== wt || Ue !== Bt) && (i.stencilFunc(at, wt, Bt), ve = at, Oe = wt, Ue = Bt);
      },
      setOp: function(at, wt, Bt) {
        (ct !== at || dt !== wt || St !== Bt) && (i.stencilOp(at, wt, Bt), ct = at, dt = wt, St = Bt);
      },
      setLocked: function(at) {
        L = at;
      },
      setClear: function(at) {
        bt !== at && (i.clearStencil(at), bt = at);
      },
      reset: function() {
        L = !1, me = null, ve = null, Oe = null, Ue = null, ct = null, dt = null, St = null, bt = null;
      }
    };
  }
  const a = new s(), l = new r(), c = new o(), u = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
  let h = {}, f = {}, g = /* @__PURE__ */ new WeakMap(), _ = [], p = null, m = !1, x = null, v = null, b = null, R = null, A = null, w = null, H = null, E = new je(0, 0, 0), T = 0, G = !1, J = null, le = null, C = null, P = null, D = null;
  const ee = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let V = !1, q = 0;
  const Y = i.getParameter(i.VERSION);
  Y.indexOf("WebGL") !== -1 ? (q = parseFloat(/^WebGL (\d)/.exec(Y)[1]), V = q >= 1) : Y.indexOf("OpenGL ES") !== -1 && (q = parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]), V = q >= 2);
  let Z = null, he = {};
  const z = i.getParameter(i.SCISSOR_BOX), te = i.getParameter(i.VIEWPORT), se = new mt().fromArray(z), Q = new mt().fromArray(te);
  function ae(L, me, ve, Oe) {
    const Ue = new Uint8Array(4), ct = i.createTexture();
    i.bindTexture(L, ct), i.texParameteri(L, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(L, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let dt = 0; dt < ve; dt++)
      n && (L === i.TEXTURE_3D || L === i.TEXTURE_2D_ARRAY) ? i.texImage3D(me, 0, i.RGBA, 1, 1, Oe, 0, i.RGBA, i.UNSIGNED_BYTE, Ue) : i.texImage2D(me + dt, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, Ue);
    return ct;
  }
  const be = {};
  be[i.TEXTURE_2D] = ae(i.TEXTURE_2D, i.TEXTURE_2D, 1), be[i.TEXTURE_CUBE_MAP] = ae(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (be[i.TEXTURE_2D_ARRAY] = ae(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), be[i.TEXTURE_3D] = ae(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)), a.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), Re(i.DEPTH_TEST), l.setFunc(io), Be(!1), M(Il), Re(i.CULL_FACE), Te(oi);
  function Re(L) {
    h[L] !== !0 && (i.enable(L), h[L] = !0);
  }
  function ge(L) {
    h[L] !== !1 && (i.disable(L), h[L] = !1);
  }
  function Ae(L, me) {
    return f[L] !== me ? (i.bindFramebuffer(L, me), f[L] = me, n && (L === i.DRAW_FRAMEBUFFER && (f[i.FRAMEBUFFER] = me), L === i.FRAMEBUFFER && (f[i.DRAW_FRAMEBUFFER] = me)), !0) : !1;
  }
  function N(L, me) {
    let ve = _, Oe = !1;
    if (L)
      if (ve = g.get(me), ve === void 0 && (ve = [], g.set(me, ve)), L.isWebGLMultipleRenderTargets) {
        const Ue = L.texture;
        if (ve.length !== Ue.length || ve[0] !== i.COLOR_ATTACHMENT0) {
          for (let ct = 0, dt = Ue.length; ct < dt; ct++)
            ve[ct] = i.COLOR_ATTACHMENT0 + ct;
          ve.length = Ue.length, Oe = !0;
        }
      } else
        ve[0] !== i.COLOR_ATTACHMENT0 && (ve[0] = i.COLOR_ATTACHMENT0, Oe = !0);
    else
      ve[0] !== i.BACK && (ve[0] = i.BACK, Oe = !0);
    Oe && (t.isWebGL2 ? i.drawBuffers(ve) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve));
  }
  function Qe(L) {
    return p !== L ? (i.useProgram(L), p = L, !0) : !1;
  }
  const Ce = {
    [bi]: i.FUNC_ADD,
    [Zf]: i.FUNC_SUBTRACT,
    [Qf]: i.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    Ce[Ol] = i.MIN, Ce[Fl] = i.MAX;
  else {
    const L = e.get("EXT_blend_minmax");
    L !== null && (Ce[Ol] = L.MIN_EXT, Ce[Fl] = L.MAX_EXT);
  }
  const Ie = {
    [ep]: i.ZERO,
    [tp]: i.ONE,
    [np]: i.SRC_COLOR,
    [ba]: i.SRC_ALPHA,
    [lp]: i.SRC_ALPHA_SATURATE,
    [op]: i.DST_COLOR,
    [sp]: i.DST_ALPHA,
    [ip]: i.ONE_MINUS_SRC_COLOR,
    [wa]: i.ONE_MINUS_SRC_ALPHA,
    [ap]: i.ONE_MINUS_DST_COLOR,
    [rp]: i.ONE_MINUS_DST_ALPHA,
    [cp]: i.CONSTANT_COLOR,
    [up]: i.ONE_MINUS_CONSTANT_COLOR,
    [dp]: i.CONSTANT_ALPHA,
    [hp]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function Te(L, me, ve, Oe, Ue, ct, dt, St, bt, at) {
    if (L === oi) {
      m === !0 && (ge(i.BLEND), m = !1);
      return;
    }
    if (m === !1 && (Re(i.BLEND), m = !0), L !== Jf) {
      if (L !== x || at !== G) {
        if ((v !== bi || A !== bi) && (i.blendEquation(i.FUNC_ADD), v = bi, A = bi), at)
          switch (L) {
            case ms:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case Dl:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case Ul:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Nl:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        else
          switch (L) {
            case ms:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case Dl:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case Ul:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Nl:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        b = null, R = null, w = null, H = null, E.set(0, 0, 0), T = 0, x = L, G = at;
      }
      return;
    }
    Ue = Ue || me, ct = ct || ve, dt = dt || Oe, (me !== v || Ue !== A) && (i.blendEquationSeparate(Ce[me], Ce[Ue]), v = me, A = Ue), (ve !== b || Oe !== R || ct !== w || dt !== H) && (i.blendFuncSeparate(Ie[ve], Ie[Oe], Ie[ct], Ie[dt]), b = ve, R = Oe, w = ct, H = dt), (St.equals(E) === !1 || bt !== T) && (i.blendColor(St.r, St.g, St.b, bt), E.copy(St), T = bt), x = L, G = !1;
  }
  function lt(L, me) {
    L.side === wn ? ge(i.CULL_FACE) : Re(i.CULL_FACE);
    let ve = L.side === Qt;
    me && (ve = !ve), Be(ve), L.blending === ms && L.transparent === !1 ? Te(oi) : Te(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.blendColor, L.blendAlpha, L.premultipliedAlpha), l.setFunc(L.depthFunc), l.setTest(L.depthTest), l.setMask(L.depthWrite), a.setMask(L.colorWrite);
    const Oe = L.stencilWrite;
    c.setTest(Oe), Oe && (c.setMask(L.stencilWriteMask), c.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), c.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), W(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === !0 ? Re(i.SAMPLE_ALPHA_TO_COVERAGE) : ge(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Be(L) {
    J !== L && (L ? i.frontFace(i.CW) : i.frontFace(i.CCW), J = L);
  }
  function M(L) {
    L !== Kf ? (Re(i.CULL_FACE), L !== le && (L === Il ? i.cullFace(i.BACK) : L === $f ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : ge(i.CULL_FACE), le = L;
  }
  function y(L) {
    L !== C && (V && i.lineWidth(L), C = L);
  }
  function W(L, me, ve) {
    L ? (Re(i.POLYGON_OFFSET_FILL), (P !== me || D !== ve) && (i.polygonOffset(me, ve), P = me, D = ve)) : ge(i.POLYGON_OFFSET_FILL);
  }
  function de(L) {
    L ? Re(i.SCISSOR_TEST) : ge(i.SCISSOR_TEST);
  }
  function ce(L) {
    L === void 0 && (L = i.TEXTURE0 + ee - 1), Z !== L && (i.activeTexture(L), Z = L);
  }
  function ue(L, me, ve) {
    ve === void 0 && (Z === null ? ve = i.TEXTURE0 + ee - 1 : ve = Z);
    let Oe = he[ve];
    Oe === void 0 && (Oe = { type: void 0, texture: void 0 }, he[ve] = Oe), (Oe.type !== L || Oe.texture !== me) && (Z !== ve && (i.activeTexture(ve), Z = ve), i.bindTexture(L, me || be[L]), Oe.type = L, Oe.texture = me);
  }
  function oe() {
    const L = he[Z];
    L !== void 0 && L.type !== void 0 && (i.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
  }
  function I() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function k() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ne() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Se() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function K() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function xe() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Ee() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Le() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function we() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Me() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ze(L) {
    se.equals(L) === !1 && (i.scissor(L.x, L.y, L.z, L.w), se.copy(L));
  }
  function it(L) {
    Q.equals(L) === !1 && (i.viewport(L.x, L.y, L.z, L.w), Q.copy(L));
  }
  function ut(L, me) {
    let ve = d.get(me);
    ve === void 0 && (ve = /* @__PURE__ */ new WeakMap(), d.set(me, ve));
    let Oe = ve.get(L);
    Oe === void 0 && (Oe = i.getUniformBlockIndex(me, L.name), ve.set(L, Oe));
  }
  function Xe(L, me) {
    const Oe = d.get(me).get(L);
    u.get(me) !== Oe && (i.uniformBlockBinding(me, Oe, L.__bindingPointIndex), u.set(me, Oe));
  }
  function fe() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), n === !0 && (i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null)), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), h = {}, Z = null, he = {}, f = {}, g = /* @__PURE__ */ new WeakMap(), _ = [], p = null, m = !1, x = null, v = null, b = null, R = null, A = null, w = null, H = null, E = new je(0, 0, 0), T = 0, G = !1, J = null, le = null, C = null, P = null, D = null, se.set(0, 0, i.canvas.width, i.canvas.height), Q.set(0, 0, i.canvas.width, i.canvas.height), a.reset(), l.reset(), c.reset();
  }
  return {
    buffers: {
      color: a,
      depth: l,
      stencil: c
    },
    enable: Re,
    disable: ge,
    bindFramebuffer: Ae,
    drawBuffers: N,
    useProgram: Qe,
    setBlending: Te,
    setMaterial: lt,
    setFlipSided: Be,
    setCullFace: M,
    setLineWidth: y,
    setPolygonOffset: W,
    setScissorTest: de,
    activeTexture: ce,
    bindTexture: ue,
    unbindTexture: oe,
    compressedTexImage2D: I,
    compressedTexImage3D: k,
    texImage2D: we,
    texImage3D: Me,
    updateUBOMapping: ut,
    uniformBlockBinding: Xe,
    texStorage2D: Ee,
    texStorage3D: Le,
    texSubImage2D: ne,
    texSubImage3D: Se,
    compressedTexSubImage2D: K,
    compressedTexSubImage3D: xe,
    scissor: ze,
    viewport: it,
    reset: fe
  };
}
function uy(i, e, t, n, s, r, o) {
  const a = s.isWebGL2, l = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), u = /* @__PURE__ */ new WeakMap();
  let d;
  const h = /* @__PURE__ */ new WeakMap();
  let f = !1;
  try {
    f = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(M, y) {
    return f ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(M, y)
    ) : nr("canvas");
  }
  function _(M, y, W, de) {
    let ce = 1;
    if ((M.width > de || M.height > de) && (ce = de / Math.max(M.width, M.height)), ce < 1 || y === !0)
      if (typeof HTMLImageElement < "u" && M instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && M instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && M instanceof ImageBitmap) {
        const ue = y ? uo : Math.floor, oe = ue(ce * M.width), I = ue(ce * M.height);
        d === void 0 && (d = g(oe, I));
        const k = W ? g(oe, I) : d;
        return k.width = oe, k.height = I, k.getContext("2d").drawImage(M, 0, 0, oe, I), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + M.width + "x" + M.height + ") to (" + oe + "x" + I + ")."), k;
      } else
        return "data" in M && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + M.width + "x" + M.height + ")."), M;
    return M;
  }
  function p(M) {
    return Ua(M.width) && Ua(M.height);
  }
  function m(M) {
    return a ? !1 : M.wrapS !== un || M.wrapT !== un || M.minFilter !== Ut && M.minFilter !== $t;
  }
  function x(M, y) {
    return M.generateMipmaps && y && M.minFilter !== Ut && M.minFilter !== $t;
  }
  function v(M) {
    i.generateMipmap(M);
  }
  function b(M, y, W, de, ce = !1) {
    if (a === !1) return y;
    if (M !== null) {
      if (i[M] !== void 0) return i[M];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + M + "'");
    }
    let ue = y;
    if (y === i.RED && (W === i.FLOAT && (ue = i.R32F), W === i.HALF_FLOAT && (ue = i.R16F), W === i.UNSIGNED_BYTE && (ue = i.R8)), y === i.RED_INTEGER && (W === i.UNSIGNED_BYTE && (ue = i.R8UI), W === i.UNSIGNED_SHORT && (ue = i.R16UI), W === i.UNSIGNED_INT && (ue = i.R32UI), W === i.BYTE && (ue = i.R8I), W === i.SHORT && (ue = i.R16I), W === i.INT && (ue = i.R32I)), y === i.RG && (W === i.FLOAT && (ue = i.RG32F), W === i.HALF_FLOAT && (ue = i.RG16F), W === i.UNSIGNED_BYTE && (ue = i.RG8)), y === i.RGBA) {
      const oe = ce ? oo : ft.getTransfer(de);
      W === i.FLOAT && (ue = i.RGBA32F), W === i.HALF_FLOAT && (ue = i.RGBA16F), W === i.UNSIGNED_BYTE && (ue = oe === gt ? i.SRGB8_ALPHA8 : i.RGBA8), W === i.UNSIGNED_SHORT_4_4_4_4 && (ue = i.RGBA4), W === i.UNSIGNED_SHORT_5_5_5_1 && (ue = i.RGB5_A1);
    }
    return (ue === i.R16F || ue === i.R32F || ue === i.RG16F || ue === i.RG32F || ue === i.RGBA16F || ue === i.RGBA32F) && e.get("EXT_color_buffer_float"), ue;
  }
  function R(M, y, W) {
    return x(M, W) === !0 || M.isFramebufferTexture && M.minFilter !== Ut && M.minFilter !== $t ? Math.log2(Math.max(y.width, y.height)) + 1 : M.mipmaps !== void 0 && M.mipmaps.length > 0 ? M.mipmaps.length : M.isCompressedTexture && Array.isArray(M.image) ? y.mipmaps.length : 1;
  }
  function A(M) {
    return M === Ut || M === La || M === Jr ? i.NEAREST : i.LINEAR;
  }
  function w(M) {
    const y = M.target;
    y.removeEventListener("dispose", w), E(y), y.isVideoTexture && u.delete(y);
  }
  function H(M) {
    const y = M.target;
    y.removeEventListener("dispose", H), G(y);
  }
  function E(M) {
    const y = n.get(M);
    if (y.__webglInit === void 0) return;
    const W = M.source, de = h.get(W);
    if (de) {
      const ce = de[y.__cacheKey];
      ce.usedTimes--, ce.usedTimes === 0 && T(M), Object.keys(de).length === 0 && h.delete(W);
    }
    n.remove(M);
  }
  function T(M) {
    const y = n.get(M);
    i.deleteTexture(y.__webglTexture);
    const W = M.source, de = h.get(W);
    delete de[y.__cacheKey], o.memory.textures--;
  }
  function G(M) {
    const y = M.texture, W = n.get(M), de = n.get(y);
    if (de.__webglTexture !== void 0 && (i.deleteTexture(de.__webglTexture), o.memory.textures--), M.depthTexture && M.depthTexture.dispose(), M.isWebGLCubeRenderTarget)
      for (let ce = 0; ce < 6; ce++) {
        if (Array.isArray(W.__webglFramebuffer[ce]))
          for (let ue = 0; ue < W.__webglFramebuffer[ce].length; ue++) i.deleteFramebuffer(W.__webglFramebuffer[ce][ue]);
        else
          i.deleteFramebuffer(W.__webglFramebuffer[ce]);
        W.__webglDepthbuffer && i.deleteRenderbuffer(W.__webglDepthbuffer[ce]);
      }
    else {
      if (Array.isArray(W.__webglFramebuffer))
        for (let ce = 0; ce < W.__webglFramebuffer.length; ce++) i.deleteFramebuffer(W.__webglFramebuffer[ce]);
      else
        i.deleteFramebuffer(W.__webglFramebuffer);
      if (W.__webglDepthbuffer && i.deleteRenderbuffer(W.__webglDepthbuffer), W.__webglMultisampledFramebuffer && i.deleteFramebuffer(W.__webglMultisampledFramebuffer), W.__webglColorRenderbuffer)
        for (let ce = 0; ce < W.__webglColorRenderbuffer.length; ce++)
          W.__webglColorRenderbuffer[ce] && i.deleteRenderbuffer(W.__webglColorRenderbuffer[ce]);
      W.__webglDepthRenderbuffer && i.deleteRenderbuffer(W.__webglDepthRenderbuffer);
    }
    if (M.isWebGLMultipleRenderTargets)
      for (let ce = 0, ue = y.length; ce < ue; ce++) {
        const oe = n.get(y[ce]);
        oe.__webglTexture && (i.deleteTexture(oe.__webglTexture), o.memory.textures--), n.remove(y[ce]);
      }
    n.remove(y), n.remove(M);
  }
  let J = 0;
  function le() {
    J = 0;
  }
  function C() {
    const M = J;
    return M >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + M + " texture units while this GPU supports only " + s.maxTextures), J += 1, M;
  }
  function P(M) {
    const y = [];
    return y.push(M.wrapS), y.push(M.wrapT), y.push(M.wrapR || 0), y.push(M.magFilter), y.push(M.minFilter), y.push(M.anisotropy), y.push(M.internalFormat), y.push(M.format), y.push(M.type), y.push(M.generateMipmaps), y.push(M.premultiplyAlpha), y.push(M.flipY), y.push(M.unpackAlignment), y.push(M.colorSpace), y.join();
  }
  function D(M, y) {
    const W = n.get(M);
    if (M.isVideoTexture && lt(M), M.isRenderTargetTexture === !1 && M.version > 0 && W.__version !== M.version) {
      const de = M.image;
      if (de === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (de.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        se(W, M, y);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, W.__webglTexture, i.TEXTURE0 + y);
  }
  function ee(M, y) {
    const W = n.get(M);
    if (M.version > 0 && W.__version !== M.version) {
      se(W, M, y);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, W.__webglTexture, i.TEXTURE0 + y);
  }
  function V(M, y) {
    const W = n.get(M);
    if (M.version > 0 && W.__version !== M.version) {
      se(W, M, y);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, W.__webglTexture, i.TEXTURE0 + y);
  }
  function q(M, y) {
    const W = n.get(M);
    if (M.version > 0 && W.__version !== M.version) {
      Q(W, M, y);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, W.__webglTexture, i.TEXTURE0 + y);
  }
  const Y = {
    [Es]: i.REPEAT,
    [un]: i.CLAMP_TO_EDGE,
    [so]: i.MIRRORED_REPEAT
  }, Z = {
    [Ut]: i.NEAREST,
    [La]: i.NEAREST_MIPMAP_NEAREST,
    [Jr]: i.NEAREST_MIPMAP_LINEAR,
    [$t]: i.LINEAR,
    [ld]: i.LINEAR_MIPMAP_NEAREST,
    [Oi]: i.LINEAR_MIPMAP_LINEAR
  }, he = {
    [Wp]: i.NEVER,
    [$p]: i.ALWAYS,
    [jp]: i.LESS,
    [yd]: i.LEQUAL,
    [Xp]: i.EQUAL,
    [Kp]: i.GEQUAL,
    [qp]: i.GREATER,
    [Yp]: i.NOTEQUAL
  };
  function z(M, y, W) {
    if (W ? (i.texParameteri(M, i.TEXTURE_WRAP_S, Y[y.wrapS]), i.texParameteri(M, i.TEXTURE_WRAP_T, Y[y.wrapT]), (M === i.TEXTURE_3D || M === i.TEXTURE_2D_ARRAY) && i.texParameteri(M, i.TEXTURE_WRAP_R, Y[y.wrapR]), i.texParameteri(M, i.TEXTURE_MAG_FILTER, Z[y.magFilter]), i.texParameteri(M, i.TEXTURE_MIN_FILTER, Z[y.minFilter])) : (i.texParameteri(M, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(M, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), (M === i.TEXTURE_3D || M === i.TEXTURE_2D_ARRAY) && i.texParameteri(M, i.TEXTURE_WRAP_R, i.CLAMP_TO_EDGE), (y.wrapS !== un || y.wrapT !== un) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), i.texParameteri(M, i.TEXTURE_MAG_FILTER, A(y.magFilter)), i.texParameteri(M, i.TEXTURE_MIN_FILTER, A(y.minFilter)), y.minFilter !== Ut && y.minFilter !== $t && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), y.compareFunction && (i.texParameteri(M, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(M, i.TEXTURE_COMPARE_FUNC, he[y.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      const de = e.get("EXT_texture_filter_anisotropic");
      if (y.magFilter === Ut || y.minFilter !== Jr && y.minFilter !== Oi || y.type === Gn && e.has("OES_texture_float_linear") === !1 || a === !1 && y.type === er && e.has("OES_texture_half_float_linear") === !1) return;
      (y.anisotropy > 1 || n.get(y).__currentAnisotropy) && (i.texParameterf(M, de.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(y.anisotropy, s.getMaxAnisotropy())), n.get(y).__currentAnisotropy = y.anisotropy);
    }
  }
  function te(M, y) {
    let W = !1;
    M.__webglInit === void 0 && (M.__webglInit = !0, y.addEventListener("dispose", w));
    const de = y.source;
    let ce = h.get(de);
    ce === void 0 && (ce = {}, h.set(de, ce));
    const ue = P(y);
    if (ue !== M.__cacheKey) {
      ce[ue] === void 0 && (ce[ue] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, W = !0), ce[ue].usedTimes++;
      const oe = ce[M.__cacheKey];
      oe !== void 0 && (ce[M.__cacheKey].usedTimes--, oe.usedTimes === 0 && T(y)), M.__cacheKey = ue, M.__webglTexture = ce[ue].texture;
    }
    return W;
  }
  function se(M, y, W) {
    let de = i.TEXTURE_2D;
    (y.isDataArrayTexture || y.isCompressedArrayTexture) && (de = i.TEXTURE_2D_ARRAY), y.isData3DTexture && (de = i.TEXTURE_3D);
    const ce = te(M, y), ue = y.source;
    t.bindTexture(de, M.__webglTexture, i.TEXTURE0 + W);
    const oe = n.get(ue);
    if (ue.version !== oe.__version || ce === !0) {
      t.activeTexture(i.TEXTURE0 + W);
      const I = ft.getPrimaries(ft.workingColorSpace), k = y.colorSpace === hn ? null : ft.getPrimaries(y.colorSpace), ne = y.colorSpace === hn || I === k ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, y.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, y.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, y.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ne);
      const Se = m(y) && p(y.image) === !1;
      let K = _(y.image, Se, !1, s.maxTextureSize);
      K = Be(y, K);
      const xe = p(K) || a, Ee = r.convert(y.format, y.colorSpace);
      let Le = r.convert(y.type), we = b(y.internalFormat, Ee, Le, y.colorSpace, y.isVideoTexture);
      z(de, y, xe);
      let Me;
      const ze = y.mipmaps, it = a && y.isVideoTexture !== !0 && we !== md, ut = oe.__version === void 0 || ce === !0, Xe = R(y, K, xe);
      if (y.isDepthTexture)
        we = i.DEPTH_COMPONENT, a ? y.type === Gn ? we = i.DEPTH_COMPONENT32F : y.type === si ? we = i.DEPTH_COMPONENT24 : y.type === Ii ? we = i.DEPTH24_STENCIL8 : we = i.DEPTH_COMPONENT16 : y.type === Gn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), y.format === Di && we === i.DEPTH_COMPONENT && y.type !== el && y.type !== si && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), y.type = si, Le = r.convert(y.type)), y.format === Ss && we === i.DEPTH_COMPONENT && (we = i.DEPTH_STENCIL, y.type !== Ii && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), y.type = Ii, Le = r.convert(y.type))), ut && (it ? t.texStorage2D(i.TEXTURE_2D, 1, we, K.width, K.height) : t.texImage2D(i.TEXTURE_2D, 0, we, K.width, K.height, 0, Ee, Le, null));
      else if (y.isDataTexture)
        if (ze.length > 0 && xe) {
          it && ut && t.texStorage2D(i.TEXTURE_2D, Xe, we, ze[0].width, ze[0].height);
          for (let fe = 0, L = ze.length; fe < L; fe++)
            Me = ze[fe], it ? t.texSubImage2D(i.TEXTURE_2D, fe, 0, 0, Me.width, Me.height, Ee, Le, Me.data) : t.texImage2D(i.TEXTURE_2D, fe, we, Me.width, Me.height, 0, Ee, Le, Me.data);
          y.generateMipmaps = !1;
        } else
          it ? (ut && t.texStorage2D(i.TEXTURE_2D, Xe, we, K.width, K.height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, K.width, K.height, Ee, Le, K.data)) : t.texImage2D(i.TEXTURE_2D, 0, we, K.width, K.height, 0, Ee, Le, K.data);
      else if (y.isCompressedTexture)
        if (y.isCompressedArrayTexture) {
          it && ut && t.texStorage3D(i.TEXTURE_2D_ARRAY, Xe, we, ze[0].width, ze[0].height, K.depth);
          for (let fe = 0, L = ze.length; fe < L; fe++)
            Me = ze[fe], y.format !== dn ? Ee !== null ? it ? t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, fe, 0, 0, 0, Me.width, Me.height, K.depth, Ee, Me.data, 0, 0) : t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, fe, we, Me.width, Me.height, K.depth, 0, Me.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : it ? t.texSubImage3D(i.TEXTURE_2D_ARRAY, fe, 0, 0, 0, Me.width, Me.height, K.depth, Ee, Le, Me.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, fe, we, Me.width, Me.height, K.depth, 0, Ee, Le, Me.data);
        } else {
          it && ut && t.texStorage2D(i.TEXTURE_2D, Xe, we, ze[0].width, ze[0].height);
          for (let fe = 0, L = ze.length; fe < L; fe++)
            Me = ze[fe], y.format !== dn ? Ee !== null ? it ? t.compressedTexSubImage2D(i.TEXTURE_2D, fe, 0, 0, Me.width, Me.height, Ee, Me.data) : t.compressedTexImage2D(i.TEXTURE_2D, fe, we, Me.width, Me.height, 0, Me.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : it ? t.texSubImage2D(i.TEXTURE_2D, fe, 0, 0, Me.width, Me.height, Ee, Le, Me.data) : t.texImage2D(i.TEXTURE_2D, fe, we, Me.width, Me.height, 0, Ee, Le, Me.data);
        }
      else if (y.isDataArrayTexture)
        it ? (ut && t.texStorage3D(i.TEXTURE_2D_ARRAY, Xe, we, K.width, K.height, K.depth), t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, K.width, K.height, K.depth, Ee, Le, K.data)) : t.texImage3D(i.TEXTURE_2D_ARRAY, 0, we, K.width, K.height, K.depth, 0, Ee, Le, K.data);
      else if (y.isData3DTexture)
        it ? (ut && t.texStorage3D(i.TEXTURE_3D, Xe, we, K.width, K.height, K.depth), t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, K.width, K.height, K.depth, Ee, Le, K.data)) : t.texImage3D(i.TEXTURE_3D, 0, we, K.width, K.height, K.depth, 0, Ee, Le, K.data);
      else if (y.isFramebufferTexture) {
        if (ut)
          if (it)
            t.texStorage2D(i.TEXTURE_2D, Xe, we, K.width, K.height);
          else {
            let fe = K.width, L = K.height;
            for (let me = 0; me < Xe; me++)
              t.texImage2D(i.TEXTURE_2D, me, we, fe, L, 0, Ee, Le, null), fe >>= 1, L >>= 1;
          }
      } else if (ze.length > 0 && xe) {
        it && ut && t.texStorage2D(i.TEXTURE_2D, Xe, we, ze[0].width, ze[0].height);
        for (let fe = 0, L = ze.length; fe < L; fe++)
          Me = ze[fe], it ? t.texSubImage2D(i.TEXTURE_2D, fe, 0, 0, Ee, Le, Me) : t.texImage2D(i.TEXTURE_2D, fe, we, Ee, Le, Me);
        y.generateMipmaps = !1;
      } else
        it ? (ut && t.texStorage2D(i.TEXTURE_2D, Xe, we, K.width, K.height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, Ee, Le, K)) : t.texImage2D(i.TEXTURE_2D, 0, we, Ee, Le, K);
      x(y, xe) && v(de), oe.__version = ue.version, y.onUpdate && y.onUpdate(y);
    }
    M.__version = y.version;
  }
  function Q(M, y, W) {
    if (y.image.length !== 6) return;
    const de = te(M, y), ce = y.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, M.__webglTexture, i.TEXTURE0 + W);
    const ue = n.get(ce);
    if (ce.version !== ue.__version || de === !0) {
      t.activeTexture(i.TEXTURE0 + W);
      const oe = ft.getPrimaries(ft.workingColorSpace), I = y.colorSpace === hn ? null : ft.getPrimaries(y.colorSpace), k = y.colorSpace === hn || oe === I ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, y.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, y.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, y.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, k);
      const ne = y.isCompressedTexture || y.image[0].isCompressedTexture, Se = y.image[0] && y.image[0].isDataTexture, K = [];
      for (let fe = 0; fe < 6; fe++)
        !ne && !Se ? K[fe] = _(y.image[fe], !1, !0, s.maxCubemapSize) : K[fe] = Se ? y.image[fe].image : y.image[fe], K[fe] = Be(y, K[fe]);
      const xe = K[0], Ee = p(xe) || a, Le = r.convert(y.format, y.colorSpace), we = r.convert(y.type), Me = b(y.internalFormat, Le, we, y.colorSpace), ze = a && y.isVideoTexture !== !0, it = ue.__version === void 0 || de === !0;
      let ut = R(y, xe, Ee);
      z(i.TEXTURE_CUBE_MAP, y, Ee);
      let Xe;
      if (ne) {
        ze && it && t.texStorage2D(i.TEXTURE_CUBE_MAP, ut, Me, xe.width, xe.height);
        for (let fe = 0; fe < 6; fe++) {
          Xe = K[fe].mipmaps;
          for (let L = 0; L < Xe.length; L++) {
            const me = Xe[L];
            y.format !== dn ? Le !== null ? ze ? t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + fe, L, 0, 0, me.width, me.height, Le, me.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + fe, L, Me, me.width, me.height, 0, me.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : ze ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + fe, L, 0, 0, me.width, me.height, Le, we, me.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + fe, L, Me, me.width, me.height, 0, Le, we, me.data);
          }
        }
      } else {
        Xe = y.mipmaps, ze && it && (Xe.length > 0 && ut++, t.texStorage2D(i.TEXTURE_CUBE_MAP, ut, Me, K[0].width, K[0].height));
        for (let fe = 0; fe < 6; fe++)
          if (Se) {
            ze ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + fe, 0, 0, 0, K[fe].width, K[fe].height, Le, we, K[fe].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + fe, 0, Me, K[fe].width, K[fe].height, 0, Le, we, K[fe].data);
            for (let L = 0; L < Xe.length; L++) {
              const ve = Xe[L].image[fe].image;
              ze ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + fe, L + 1, 0, 0, ve.width, ve.height, Le, we, ve.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + fe, L + 1, Me, ve.width, ve.height, 0, Le, we, ve.data);
            }
          } else {
            ze ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + fe, 0, 0, 0, Le, we, K[fe]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + fe, 0, Me, Le, we, K[fe]);
            for (let L = 0; L < Xe.length; L++) {
              const me = Xe[L];
              ze ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + fe, L + 1, 0, 0, Le, we, me.image[fe]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + fe, L + 1, Me, Le, we, me.image[fe]);
            }
          }
      }
      x(y, Ee) && v(i.TEXTURE_CUBE_MAP), ue.__version = ce.version, y.onUpdate && y.onUpdate(y);
    }
    M.__version = y.version;
  }
  function ae(M, y, W, de, ce, ue) {
    const oe = r.convert(W.format, W.colorSpace), I = r.convert(W.type), k = b(W.internalFormat, oe, I, W.colorSpace);
    if (!n.get(y).__hasExternalTextures) {
      const Se = Math.max(1, y.width >> ue), K = Math.max(1, y.height >> ue);
      ce === i.TEXTURE_3D || ce === i.TEXTURE_2D_ARRAY ? t.texImage3D(ce, ue, k, Se, K, y.depth, 0, oe, I, null) : t.texImage2D(ce, ue, k, Se, K, 0, oe, I, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, M), Te(y) ? l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, de, ce, n.get(W).__webglTexture, 0, Ie(y)) : (ce === i.TEXTURE_2D || ce >= i.TEXTURE_CUBE_MAP_POSITIVE_X && ce <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, de, ce, n.get(W).__webglTexture, ue), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function be(M, y, W) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, M), y.depthBuffer && !y.stencilBuffer) {
      let de = a === !0 ? i.DEPTH_COMPONENT24 : i.DEPTH_COMPONENT16;
      if (W || Te(y)) {
        const ce = y.depthTexture;
        ce && ce.isDepthTexture && (ce.type === Gn ? de = i.DEPTH_COMPONENT32F : ce.type === si && (de = i.DEPTH_COMPONENT24));
        const ue = Ie(y);
        Te(y) ? l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ue, de, y.width, y.height) : i.renderbufferStorageMultisample(i.RENDERBUFFER, ue, de, y.width, y.height);
      } else
        i.renderbufferStorage(i.RENDERBUFFER, de, y.width, y.height);
      i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, M);
    } else if (y.depthBuffer && y.stencilBuffer) {
      const de = Ie(y);
      W && Te(y) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, de, i.DEPTH24_STENCIL8, y.width, y.height) : Te(y) ? l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, de, i.DEPTH24_STENCIL8, y.width, y.height) : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, y.width, y.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, M);
    } else {
      const de = y.isWebGLMultipleRenderTargets === !0 ? y.texture : [y.texture];
      for (let ce = 0; ce < de.length; ce++) {
        const ue = de[ce], oe = r.convert(ue.format, ue.colorSpace), I = r.convert(ue.type), k = b(ue.internalFormat, oe, I, ue.colorSpace), ne = Ie(y);
        W && Te(y) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, ne, k, y.width, y.height) : Te(y) ? l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ne, k, y.width, y.height) : i.renderbufferStorage(i.RENDERBUFFER, k, y.width, y.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function Re(M, y) {
    if (y && y.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, M), !(y.depthTexture && y.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(y.depthTexture).__webglTexture || y.depthTexture.image.width !== y.width || y.depthTexture.image.height !== y.height) && (y.depthTexture.image.width = y.width, y.depthTexture.image.height = y.height, y.depthTexture.needsUpdate = !0), D(y.depthTexture, 0);
    const de = n.get(y.depthTexture).__webglTexture, ce = Ie(y);
    if (y.depthTexture.format === Di)
      Te(y) ? l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, de, 0, ce) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, de, 0);
    else if (y.depthTexture.format === Ss)
      Te(y) ? l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, de, 0, ce) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, de, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function ge(M) {
    const y = n.get(M), W = M.isWebGLCubeRenderTarget === !0;
    if (M.depthTexture && !y.__autoAllocateDepthBuffer) {
      if (W) throw new Error("target.depthTexture not supported in Cube render targets");
      Re(y.__webglFramebuffer, M);
    } else if (W) {
      y.__webglDepthbuffer = [];
      for (let de = 0; de < 6; de++)
        t.bindFramebuffer(i.FRAMEBUFFER, y.__webglFramebuffer[de]), y.__webglDepthbuffer[de] = i.createRenderbuffer(), be(y.__webglDepthbuffer[de], M, !1);
    } else
      t.bindFramebuffer(i.FRAMEBUFFER, y.__webglFramebuffer), y.__webglDepthbuffer = i.createRenderbuffer(), be(y.__webglDepthbuffer, M, !1);
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Ae(M, y, W) {
    const de = n.get(M);
    y !== void 0 && ae(de.__webglFramebuffer, M, M.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), W !== void 0 && ge(M);
  }
  function N(M) {
    const y = M.texture, W = n.get(M), de = n.get(y);
    M.addEventListener("dispose", H), M.isWebGLMultipleRenderTargets !== !0 && (de.__webglTexture === void 0 && (de.__webglTexture = i.createTexture()), de.__version = y.version, o.memory.textures++);
    const ce = M.isWebGLCubeRenderTarget === !0, ue = M.isWebGLMultipleRenderTargets === !0, oe = p(M) || a;
    if (ce) {
      W.__webglFramebuffer = [];
      for (let I = 0; I < 6; I++)
        if (a && y.mipmaps && y.mipmaps.length > 0) {
          W.__webglFramebuffer[I] = [];
          for (let k = 0; k < y.mipmaps.length; k++)
            W.__webglFramebuffer[I][k] = i.createFramebuffer();
        } else
          W.__webglFramebuffer[I] = i.createFramebuffer();
    } else {
      if (a && y.mipmaps && y.mipmaps.length > 0) {
        W.__webglFramebuffer = [];
        for (let I = 0; I < y.mipmaps.length; I++)
          W.__webglFramebuffer[I] = i.createFramebuffer();
      } else
        W.__webglFramebuffer = i.createFramebuffer();
      if (ue)
        if (s.drawBuffers) {
          const I = M.texture;
          for (let k = 0, ne = I.length; k < ne; k++) {
            const Se = n.get(I[k]);
            Se.__webglTexture === void 0 && (Se.__webglTexture = i.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && M.samples > 0 && Te(M) === !1) {
        const I = ue ? y : [y];
        W.__webglMultisampledFramebuffer = i.createFramebuffer(), W.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, W.__webglMultisampledFramebuffer);
        for (let k = 0; k < I.length; k++) {
          const ne = I[k];
          W.__webglColorRenderbuffer[k] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, W.__webglColorRenderbuffer[k]);
          const Se = r.convert(ne.format, ne.colorSpace), K = r.convert(ne.type), xe = b(ne.internalFormat, Se, K, ne.colorSpace, M.isXRRenderTarget === !0), Ee = Ie(M);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, Ee, xe, M.width, M.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + k, i.RENDERBUFFER, W.__webglColorRenderbuffer[k]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), M.depthBuffer && (W.__webglDepthRenderbuffer = i.createRenderbuffer(), be(W.__webglDepthRenderbuffer, M, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (ce) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, de.__webglTexture), z(i.TEXTURE_CUBE_MAP, y, oe);
      for (let I = 0; I < 6; I++)
        if (a && y.mipmaps && y.mipmaps.length > 0)
          for (let k = 0; k < y.mipmaps.length; k++)
            ae(W.__webglFramebuffer[I][k], M, y, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + I, k);
        else
          ae(W.__webglFramebuffer[I], M, y, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + I, 0);
      x(y, oe) && v(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ue) {
      const I = M.texture;
      for (let k = 0, ne = I.length; k < ne; k++) {
        const Se = I[k], K = n.get(Se);
        t.bindTexture(i.TEXTURE_2D, K.__webglTexture), z(i.TEXTURE_2D, Se, oe), ae(W.__webglFramebuffer, M, Se, i.COLOR_ATTACHMENT0 + k, i.TEXTURE_2D, 0), x(Se, oe) && v(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let I = i.TEXTURE_2D;
      if ((M.isWebGL3DRenderTarget || M.isWebGLArrayRenderTarget) && (a ? I = M.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(I, de.__webglTexture), z(I, y, oe), a && y.mipmaps && y.mipmaps.length > 0)
        for (let k = 0; k < y.mipmaps.length; k++)
          ae(W.__webglFramebuffer[k], M, y, i.COLOR_ATTACHMENT0, I, k);
      else
        ae(W.__webglFramebuffer, M, y, i.COLOR_ATTACHMENT0, I, 0);
      x(y, oe) && v(I), t.unbindTexture();
    }
    M.depthBuffer && ge(M);
  }
  function Qe(M) {
    const y = p(M) || a, W = M.isWebGLMultipleRenderTargets === !0 ? M.texture : [M.texture];
    for (let de = 0, ce = W.length; de < ce; de++) {
      const ue = W[de];
      if (x(ue, y)) {
        const oe = M.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D, I = n.get(ue).__webglTexture;
        t.bindTexture(oe, I), v(oe), t.unbindTexture();
      }
    }
  }
  function Ce(M) {
    if (a && M.samples > 0 && Te(M) === !1) {
      const y = M.isWebGLMultipleRenderTargets ? M.texture : [M.texture], W = M.width, de = M.height;
      let ce = i.COLOR_BUFFER_BIT;
      const ue = [], oe = M.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, I = n.get(M), k = M.isWebGLMultipleRenderTargets === !0;
      if (k)
        for (let ne = 0; ne < y.length; ne++)
          t.bindFramebuffer(i.FRAMEBUFFER, I.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ne, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, I.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ne, i.TEXTURE_2D, null, 0);
      t.bindFramebuffer(i.READ_FRAMEBUFFER, I.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, I.__webglFramebuffer);
      for (let ne = 0; ne < y.length; ne++) {
        ue.push(i.COLOR_ATTACHMENT0 + ne), M.depthBuffer && ue.push(oe);
        const Se = I.__ignoreDepthValues !== void 0 ? I.__ignoreDepthValues : !1;
        if (Se === !1 && (M.depthBuffer && (ce |= i.DEPTH_BUFFER_BIT), M.stencilBuffer && (ce |= i.STENCIL_BUFFER_BIT)), k && i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, I.__webglColorRenderbuffer[ne]), Se === !0 && (i.invalidateFramebuffer(i.READ_FRAMEBUFFER, [oe]), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [oe])), k) {
          const K = n.get(y[ne]).__webglTexture;
          i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, K, 0);
        }
        i.blitFramebuffer(0, 0, W, de, 0, 0, W, de, ce, i.NEAREST), c && i.invalidateFramebuffer(i.READ_FRAMEBUFFER, ue);
      }
      if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), k)
        for (let ne = 0; ne < y.length; ne++) {
          t.bindFramebuffer(i.FRAMEBUFFER, I.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ne, i.RENDERBUFFER, I.__webglColorRenderbuffer[ne]);
          const Se = n.get(y[ne]).__webglTexture;
          t.bindFramebuffer(i.FRAMEBUFFER, I.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ne, i.TEXTURE_2D, Se, 0);
        }
      t.bindFramebuffer(i.DRAW_FRAMEBUFFER, I.__webglMultisampledFramebuffer);
    }
  }
  function Ie(M) {
    return Math.min(s.maxSamples, M.samples);
  }
  function Te(M) {
    const y = n.get(M);
    return a && M.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && y.__useRenderToTexture !== !1;
  }
  function lt(M) {
    const y = o.render.frame;
    u.get(M) !== y && (u.set(M, y), M.update());
  }
  function Be(M, y) {
    const W = M.colorSpace, de = M.format, ce = M.type;
    return M.isCompressedTexture === !0 || M.isVideoTexture === !0 || M.format === Da || W !== Nt && W !== hn && (ft.getTransfer(W) === gt ? a === !1 ? e.has("EXT_sRGB") === !0 && de === dn ? (M.format = Da, M.minFilter = $t, M.generateMipmaps = !1) : y = Ed.sRGBToLinear(y) : (de !== dn || ce !== li) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", W)), y;
  }
  this.allocateTextureUnit = C, this.resetTextureUnits = le, this.setTexture2D = D, this.setTexture2DArray = ee, this.setTexture3D = V, this.setTextureCube = q, this.rebindTextures = Ae, this.setupRenderTarget = N, this.updateRenderTargetMipmap = Qe, this.updateMultisampleRenderTarget = Ce, this.setupDepthRenderbuffer = ge, this.setupFrameBufferTexture = ae, this.useMultisampledRTT = Te;
}
function dy(i, e, t) {
  const n = t.isWebGL2;
  function s(r, o = hn) {
    let a;
    const l = ft.getTransfer(o);
    if (r === li) return i.UNSIGNED_BYTE;
    if (r === ud) return i.UNSIGNED_SHORT_4_4_4_4;
    if (r === dd) return i.UNSIGNED_SHORT_5_5_5_1;
    if (r === Rp) return i.BYTE;
    if (r === Cp) return i.SHORT;
    if (r === el) return i.UNSIGNED_SHORT;
    if (r === cd) return i.INT;
    if (r === si) return i.UNSIGNED_INT;
    if (r === Gn) return i.FLOAT;
    if (r === er)
      return n ? i.HALF_FLOAT : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (r === Lp) return i.ALPHA;
    if (r === dn) return i.RGBA;
    if (r === Pp) return i.LUMINANCE;
    if (r === Ip) return i.LUMINANCE_ALPHA;
    if (r === Di) return i.DEPTH_COMPONENT;
    if (r === Ss) return i.DEPTH_STENCIL;
    if (r === Da)
      return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (r === Dp) return i.RED;
    if (r === hd) return i.RED_INTEGER;
    if (r === Up) return i.RG;
    if (r === fd) return i.RG_INTEGER;
    if (r === pd) return i.RGBA_INTEGER;
    if (r === No || r === Oo || r === Fo || r === Bo)
      if (l === gt)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (r === No) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (r === Oo) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (r === Fo) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (r === Bo) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (r === No) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (r === Oo) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (r === Fo) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (r === Bo) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (r === Vl || r === kl || r === zl || r === Hl)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (r === Vl) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (r === kl) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (r === zl) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (r === Hl) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (r === md)
      return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (r === Gl || r === Wl)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (r === Gl) return l === gt ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (r === Wl) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (r === jl || r === Xl || r === ql || r === Yl || r === Kl || r === $l || r === Jl || r === Zl || r === Ql || r === ec || r === tc || r === nc || r === ic || r === sc)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (r === jl) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (r === Xl) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (r === ql) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (r === Yl) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (r === Kl) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (r === $l) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (r === Jl) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (r === Zl) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (r === Ql) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (r === ec) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (r === tc) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (r === nc) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (r === ic) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (r === sc) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (r === Vo || r === rc || r === oc)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (r === Vo) return l === gt ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (r === rc) return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (r === oc) return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (r === Np || r === ac || r === lc || r === cc)
      if (a = e.get("EXT_texture_compression_rgtc"), a !== null) {
        if (r === Vo) return a.COMPRESSED_RED_RGTC1_EXT;
        if (r === ac) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (r === lc) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (r === cc) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return r === Ii ? n ? i.UNSIGNED_INT_24_8 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : i[r] !== void 0 ? i[r] : null;
  }
  return { convert: s };
}
class hy extends qt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Li extends Et {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const fy = { type: "move" };
class ca {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Li(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Li(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new U(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new U()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Li(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new U(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new U()), this._grip;
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
    let s = null, r = null, o = null;
    const a = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = !0;
        for (const _ of e.hand.values()) {
          const p = t.getJointPose(_, n), m = this._getHandJoint(c, _);
          p !== null && (m.matrix.fromArray(p.transform.matrix), m.matrix.decompose(m.position, m.rotation, m.scale), m.matrixWorldNeedsUpdate = !0, m.jointRadius = p.radius), m.visible = p !== null;
        }
        const u = c.joints["index-finger-tip"], d = c.joints["thumb-tip"], h = u.position.distanceTo(d.position), f = 0.02, g = 5e-3;
        c.inputState.pinching && h > f + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && h <= f - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = !1, r.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = !1));
      a !== null && (s = t.getPose(e.targetRaySpace, n), s === null && r !== null && (s = r), s !== null && (a.matrix.fromArray(s.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(s.linearVelocity)) : a.hasLinearVelocity = !1, s.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(s.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(fy)));
    }
    return a !== null && (a.visible = s !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = o !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Li();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class py extends zi {
  constructor(e, t) {
    super();
    const n = this;
    let s = null, r = 1, o = null, a = "local-floor", l = 1, c = null, u = null, d = null, h = null, f = null, g = null;
    const _ = t.getContextAttributes();
    let p = null, m = null;
    const x = [], v = [], b = new ot();
    let R = null;
    const A = new qt();
    A.layers.enable(1), A.viewport = new mt();
    const w = new qt();
    w.layers.enable(2), w.viewport = new mt();
    const H = [A, w], E = new hy();
    E.layers.enable(1), E.layers.enable(2);
    let T = null, G = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(z) {
      let te = x[z];
      return te === void 0 && (te = new ca(), x[z] = te), te.getTargetRaySpace();
    }, this.getControllerGrip = function(z) {
      let te = x[z];
      return te === void 0 && (te = new ca(), x[z] = te), te.getGripSpace();
    }, this.getHand = function(z) {
      let te = x[z];
      return te === void 0 && (te = new ca(), x[z] = te), te.getHandSpace();
    };
    function J(z) {
      const te = v.indexOf(z.inputSource);
      if (te === -1)
        return;
      const se = x[te];
      se !== void 0 && (se.update(z.inputSource, z.frame, c || o), se.dispatchEvent({ type: z.type, data: z.inputSource }));
    }
    function le() {
      s.removeEventListener("select", J), s.removeEventListener("selectstart", J), s.removeEventListener("selectend", J), s.removeEventListener("squeeze", J), s.removeEventListener("squeezestart", J), s.removeEventListener("squeezeend", J), s.removeEventListener("end", le), s.removeEventListener("inputsourceschange", C);
      for (let z = 0; z < x.length; z++) {
        const te = v[z];
        te !== null && (v[z] = null, x[z].disconnect(te));
      }
      T = null, G = null, e.setRenderTarget(p), f = null, h = null, d = null, s = null, m = null, he.stop(), n.isPresenting = !1, e.setPixelRatio(R), e.setSize(b.width, b.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(z) {
      r = z, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(z) {
      a = z, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(z) {
      c = z;
    }, this.getBaseLayer = function() {
      return h !== null ? h : f;
    }, this.getBinding = function() {
      return d;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return s;
    }, this.setSession = async function(z) {
      if (s = z, s !== null) {
        if (p = e.getRenderTarget(), s.addEventListener("select", J), s.addEventListener("selectstart", J), s.addEventListener("selectend", J), s.addEventListener("squeeze", J), s.addEventListener("squeezestart", J), s.addEventListener("squeezeend", J), s.addEventListener("end", le), s.addEventListener("inputsourceschange", C), _.xrCompatible !== !0 && await t.makeXRCompatible(), R = e.getPixelRatio(), e.getSize(b), s.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const te = {
            antialias: s.renderState.layers === void 0 ? _.antialias : !0,
            alpha: !0,
            depth: _.depth,
            stencil: _.stencil,
            framebufferScaleFactor: r
          };
          f = new XRWebGLLayer(s, t, te), s.updateRenderState({ baseLayer: f }), e.setPixelRatio(1), e.setSize(f.framebufferWidth, f.framebufferHeight, !1), m = new Fi(
            f.framebufferWidth,
            f.framebufferHeight,
            {
              format: dn,
              type: li,
              colorSpace: e.outputColorSpace,
              stencilBuffer: _.stencil
            }
          );
        } else {
          let te = null, se = null, Q = null;
          _.depth && (Q = _.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, te = _.stencil ? Ss : Di, se = _.stencil ? Ii : si);
          const ae = {
            colorFormat: t.RGBA8,
            depthFormat: Q,
            scaleFactor: r
          };
          d = new XRWebGLBinding(s, t), h = d.createProjectionLayer(ae), s.updateRenderState({ layers: [h] }), e.setPixelRatio(1), e.setSize(h.textureWidth, h.textureHeight, !1), m = new Fi(
            h.textureWidth,
            h.textureHeight,
            {
              format: dn,
              type: li,
              depthTexture: new Id(h.textureWidth, h.textureHeight, se, void 0, void 0, void 0, void 0, void 0, void 0, te),
              stencilBuffer: _.stencil,
              colorSpace: e.outputColorSpace,
              samples: _.antialias ? 4 : 0
            }
          );
          const be = e.properties.get(m);
          be.__ignoreDepthValues = h.ignoreDepthValues;
        }
        m.isXRRenderTarget = !0, this.setFoveation(l), c = null, o = await s.requestReferenceSpace(a), he.setContext(s), he.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (s !== null)
        return s.environmentBlendMode;
    };
    function C(z) {
      for (let te = 0; te < z.removed.length; te++) {
        const se = z.removed[te], Q = v.indexOf(se);
        Q >= 0 && (v[Q] = null, x[Q].disconnect(se));
      }
      for (let te = 0; te < z.added.length; te++) {
        const se = z.added[te];
        let Q = v.indexOf(se);
        if (Q === -1) {
          for (let be = 0; be < x.length; be++)
            if (be >= v.length) {
              v.push(se), Q = be;
              break;
            } else if (v[be] === null) {
              v[be] = se, Q = be;
              break;
            }
          if (Q === -1) break;
        }
        const ae = x[Q];
        ae && ae.connect(se);
      }
    }
    const P = new U(), D = new U();
    function ee(z, te, se) {
      P.setFromMatrixPosition(te.matrixWorld), D.setFromMatrixPosition(se.matrixWorld);
      const Q = P.distanceTo(D), ae = te.projectionMatrix.elements, be = se.projectionMatrix.elements, Re = ae[14] / (ae[10] - 1), ge = ae[14] / (ae[10] + 1), Ae = (ae[9] + 1) / ae[5], N = (ae[9] - 1) / ae[5], Qe = (ae[8] - 1) / ae[0], Ce = (be[8] + 1) / be[0], Ie = Re * Qe, Te = Re * Ce, lt = Q / (-Qe + Ce), Be = lt * -Qe;
      te.matrixWorld.decompose(z.position, z.quaternion, z.scale), z.translateX(Be), z.translateZ(lt), z.matrixWorld.compose(z.position, z.quaternion, z.scale), z.matrixWorldInverse.copy(z.matrixWorld).invert();
      const M = Re + lt, y = ge + lt, W = Ie - Be, de = Te + (Q - Be), ce = Ae * ge / y * M, ue = N * ge / y * M;
      z.projectionMatrix.makePerspective(W, de, ce, ue, M, y), z.projectionMatrixInverse.copy(z.projectionMatrix).invert();
    }
    function V(z, te) {
      te === null ? z.matrixWorld.copy(z.matrix) : z.matrixWorld.multiplyMatrices(te.matrixWorld, z.matrix), z.matrixWorldInverse.copy(z.matrixWorld).invert();
    }
    this.updateCamera = function(z) {
      if (s === null) return;
      E.near = w.near = A.near = z.near, E.far = w.far = A.far = z.far, (T !== E.near || G !== E.far) && (s.updateRenderState({
        depthNear: E.near,
        depthFar: E.far
      }), T = E.near, G = E.far);
      const te = z.parent, se = E.cameras;
      V(E, te);
      for (let Q = 0; Q < se.length; Q++)
        V(se[Q], te);
      se.length === 2 ? ee(E, A, w) : E.projectionMatrix.copy(A.projectionMatrix), q(z, E, te);
    };
    function q(z, te, se) {
      se === null ? z.matrix.copy(te.matrixWorld) : (z.matrix.copy(se.matrixWorld), z.matrix.invert(), z.matrix.multiply(te.matrixWorld)), z.matrix.decompose(z.position, z.quaternion, z.scale), z.updateMatrixWorld(!0), z.projectionMatrix.copy(te.projectionMatrix), z.projectionMatrixInverse.copy(te.projectionMatrixInverse), z.isPerspectiveCamera && (z.fov = As * 2 * Math.atan(1 / z.projectionMatrix.elements[5]), z.zoom = 1);
    }
    this.getCamera = function() {
      return E;
    }, this.getFoveation = function() {
      if (!(h === null && f === null))
        return l;
    }, this.setFoveation = function(z) {
      l = z, h !== null && (h.fixedFoveation = z), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = z);
    };
    let Y = null;
    function Z(z, te) {
      if (u = te.getViewerPose(c || o), g = te, u !== null) {
        const se = u.views;
        f !== null && (e.setRenderTargetFramebuffer(m, f.framebuffer), e.setRenderTarget(m));
        let Q = !1;
        se.length !== E.cameras.length && (E.cameras.length = 0, Q = !0);
        for (let ae = 0; ae < se.length; ae++) {
          const be = se[ae];
          let Re = null;
          if (f !== null)
            Re = f.getViewport(be);
          else {
            const Ae = d.getViewSubImage(h, be);
            Re = Ae.viewport, ae === 0 && (e.setRenderTargetTextures(
              m,
              Ae.colorTexture,
              h.ignoreDepthValues ? void 0 : Ae.depthStencilTexture
            ), e.setRenderTarget(m));
          }
          let ge = H[ae];
          ge === void 0 && (ge = new qt(), ge.layers.enable(ae), ge.viewport = new mt(), H[ae] = ge), ge.matrix.fromArray(be.transform.matrix), ge.matrix.decompose(ge.position, ge.quaternion, ge.scale), ge.projectionMatrix.fromArray(be.projectionMatrix), ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(), ge.viewport.set(Re.x, Re.y, Re.width, Re.height), ae === 0 && (E.matrix.copy(ge.matrix), E.matrix.decompose(E.position, E.quaternion, E.scale)), Q === !0 && E.cameras.push(ge);
        }
      }
      for (let se = 0; se < x.length; se++) {
        const Q = v[se], ae = x[se];
        Q !== null && ae !== void 0 && ae.update(Q, te, c || o);
      }
      Y && Y(z, te), te.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: te }), g = null;
    }
    const he = new Pd();
    he.setAnimationLoop(Z), this.setAnimationLoop = function(z) {
      Y = z;
    }, this.dispose = function() {
    };
  }
}
function my(i, e) {
  function t(p, m) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), m.value.copy(p.matrix);
  }
  function n(p, m) {
    m.color.getRGB(p.fogColor.value, Rd(i)), m.isFog ? (p.fogNear.value = m.near, p.fogFar.value = m.far) : m.isFogExp2 && (p.fogDensity.value = m.density);
  }
  function s(p, m, x, v, b) {
    m.isMeshBasicMaterial || m.isMeshLambertMaterial ? r(p, m) : m.isMeshToonMaterial ? (r(p, m), d(p, m)) : m.isMeshPhongMaterial ? (r(p, m), u(p, m)) : m.isMeshStandardMaterial ? (r(p, m), h(p, m), m.isMeshPhysicalMaterial && f(p, m, b)) : m.isMeshMatcapMaterial ? (r(p, m), g(p, m)) : m.isMeshDepthMaterial ? r(p, m) : m.isMeshDistanceMaterial ? (r(p, m), _(p, m)) : m.isMeshNormalMaterial ? r(p, m) : m.isLineBasicMaterial ? (o(p, m), m.isLineDashedMaterial && a(p, m)) : m.isPointsMaterial ? l(p, m, x, v) : m.isSpriteMaterial ? c(p, m) : m.isShadowMaterial ? (p.color.value.copy(m.color), p.opacity.value = m.opacity) : m.isShaderMaterial && (m.uniformsNeedUpdate = !1);
  }
  function r(p, m) {
    p.opacity.value = m.opacity, m.color && p.diffuse.value.copy(m.color), m.emissive && p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity), m.map && (p.map.value = m.map, t(m.map, p.mapTransform)), m.alphaMap && (p.alphaMap.value = m.alphaMap, t(m.alphaMap, p.alphaMapTransform)), m.bumpMap && (p.bumpMap.value = m.bumpMap, t(m.bumpMap, p.bumpMapTransform), p.bumpScale.value = m.bumpScale, m.side === Qt && (p.bumpScale.value *= -1)), m.normalMap && (p.normalMap.value = m.normalMap, t(m.normalMap, p.normalMapTransform), p.normalScale.value.copy(m.normalScale), m.side === Qt && p.normalScale.value.negate()), m.displacementMap && (p.displacementMap.value = m.displacementMap, t(m.displacementMap, p.displacementMapTransform), p.displacementScale.value = m.displacementScale, p.displacementBias.value = m.displacementBias), m.emissiveMap && (p.emissiveMap.value = m.emissiveMap, t(m.emissiveMap, p.emissiveMapTransform)), m.specularMap && (p.specularMap.value = m.specularMap, t(m.specularMap, p.specularMapTransform)), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
    const x = e.get(m).envMap;
    if (x && (p.envMap.value = x, p.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = m.reflectivity, p.ior.value = m.ior, p.refractionRatio.value = m.refractionRatio), m.lightMap) {
      p.lightMap.value = m.lightMap;
      const v = i._useLegacyLights === !0 ? Math.PI : 1;
      p.lightMapIntensity.value = m.lightMapIntensity * v, t(m.lightMap, p.lightMapTransform);
    }
    m.aoMap && (p.aoMap.value = m.aoMap, p.aoMapIntensity.value = m.aoMapIntensity, t(m.aoMap, p.aoMapTransform));
  }
  function o(p, m) {
    p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, m.map && (p.map.value = m.map, t(m.map, p.mapTransform));
  }
  function a(p, m) {
    p.dashSize.value = m.dashSize, p.totalSize.value = m.dashSize + m.gapSize, p.scale.value = m.scale;
  }
  function l(p, m, x, v) {
    p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, p.size.value = m.size * x, p.scale.value = v * 0.5, m.map && (p.map.value = m.map, t(m.map, p.uvTransform)), m.alphaMap && (p.alphaMap.value = m.alphaMap, t(m.alphaMap, p.alphaMapTransform)), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
  }
  function c(p, m) {
    p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, p.rotation.value = m.rotation, m.map && (p.map.value = m.map, t(m.map, p.mapTransform)), m.alphaMap && (p.alphaMap.value = m.alphaMap, t(m.alphaMap, p.alphaMapTransform)), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
  }
  function u(p, m) {
    p.specular.value.copy(m.specular), p.shininess.value = Math.max(m.shininess, 1e-4);
  }
  function d(p, m) {
    m.gradientMap && (p.gradientMap.value = m.gradientMap);
  }
  function h(p, m) {
    p.metalness.value = m.metalness, m.metalnessMap && (p.metalnessMap.value = m.metalnessMap, t(m.metalnessMap, p.metalnessMapTransform)), p.roughness.value = m.roughness, m.roughnessMap && (p.roughnessMap.value = m.roughnessMap, t(m.roughnessMap, p.roughnessMapTransform)), e.get(m).envMap && (p.envMapIntensity.value = m.envMapIntensity);
  }
  function f(p, m, x) {
    p.ior.value = m.ior, m.sheen > 0 && (p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen), p.sheenRoughness.value = m.sheenRoughness, m.sheenColorMap && (p.sheenColorMap.value = m.sheenColorMap, t(m.sheenColorMap, p.sheenColorMapTransform)), m.sheenRoughnessMap && (p.sheenRoughnessMap.value = m.sheenRoughnessMap, t(m.sheenRoughnessMap, p.sheenRoughnessMapTransform))), m.clearcoat > 0 && (p.clearcoat.value = m.clearcoat, p.clearcoatRoughness.value = m.clearcoatRoughness, m.clearcoatMap && (p.clearcoatMap.value = m.clearcoatMap, t(m.clearcoatMap, p.clearcoatMapTransform)), m.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap, t(m.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), m.clearcoatNormalMap && (p.clearcoatNormalMap.value = m.clearcoatNormalMap, t(m.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale), m.side === Qt && p.clearcoatNormalScale.value.negate())), m.iridescence > 0 && (p.iridescence.value = m.iridescence, p.iridescenceIOR.value = m.iridescenceIOR, p.iridescenceThicknessMinimum.value = m.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = m.iridescenceThicknessRange[1], m.iridescenceMap && (p.iridescenceMap.value = m.iridescenceMap, t(m.iridescenceMap, p.iridescenceMapTransform)), m.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = m.iridescenceThicknessMap, t(m.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), m.transmission > 0 && (p.transmission.value = m.transmission, p.transmissionSamplerMap.value = x.texture, p.transmissionSamplerSize.value.set(x.width, x.height), m.transmissionMap && (p.transmissionMap.value = m.transmissionMap, t(m.transmissionMap, p.transmissionMapTransform)), p.thickness.value = m.thickness, m.thicknessMap && (p.thicknessMap.value = m.thicknessMap, t(m.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = m.attenuationDistance, p.attenuationColor.value.copy(m.attenuationColor)), m.anisotropy > 0 && (p.anisotropyVector.value.set(m.anisotropy * Math.cos(m.anisotropyRotation), m.anisotropy * Math.sin(m.anisotropyRotation)), m.anisotropyMap && (p.anisotropyMap.value = m.anisotropyMap, t(m.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = m.specularIntensity, p.specularColor.value.copy(m.specularColor), m.specularColorMap && (p.specularColorMap.value = m.specularColorMap, t(m.specularColorMap, p.specularColorMapTransform)), m.specularIntensityMap && (p.specularIntensityMap.value = m.specularIntensityMap, t(m.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, m) {
    m.matcap && (p.matcap.value = m.matcap);
  }
  function _(p, m) {
    const x = e.get(m).light;
    p.referencePosition.value.setFromMatrixPosition(x.matrixWorld), p.nearDistance.value = x.shadow.camera.near, p.farDistance.value = x.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: s
  };
}
function gy(i, e, t, n) {
  let s = {}, r = {}, o = [];
  const a = t.isWebGL2 ? i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function l(x, v) {
    const b = v.program;
    n.uniformBlockBinding(x, b);
  }
  function c(x, v) {
    let b = s[x.id];
    b === void 0 && (g(x), b = u(x), s[x.id] = b, x.addEventListener("dispose", p));
    const R = v.program;
    n.updateUBOMapping(x, R);
    const A = e.render.frame;
    r[x.id] !== A && (h(x), r[x.id] = A);
  }
  function u(x) {
    const v = d();
    x.__bindingPointIndex = v;
    const b = i.createBuffer(), R = x.__size, A = x.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, b), i.bufferData(i.UNIFORM_BUFFER, R, A), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, v, b), b;
  }
  function d() {
    for (let x = 0; x < a; x++)
      if (o.indexOf(x) === -1)
        return o.push(x), x;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function h(x) {
    const v = s[x.id], b = x.uniforms, R = x.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, v);
    for (let A = 0, w = b.length; A < w; A++) {
      const H = Array.isArray(b[A]) ? b[A] : [b[A]];
      for (let E = 0, T = H.length; E < T; E++) {
        const G = H[E];
        if (f(G, A, E, R) === !0) {
          const J = G.__offset, le = Array.isArray(G.value) ? G.value : [G.value];
          let C = 0;
          for (let P = 0; P < le.length; P++) {
            const D = le[P], ee = _(D);
            typeof D == "number" || typeof D == "boolean" ? (G.__data[0] = D, i.bufferSubData(i.UNIFORM_BUFFER, J + C, G.__data)) : D.isMatrix3 ? (G.__data[0] = D.elements[0], G.__data[1] = D.elements[1], G.__data[2] = D.elements[2], G.__data[3] = 0, G.__data[4] = D.elements[3], G.__data[5] = D.elements[4], G.__data[6] = D.elements[5], G.__data[7] = 0, G.__data[8] = D.elements[6], G.__data[9] = D.elements[7], G.__data[10] = D.elements[8], G.__data[11] = 0) : (D.toArray(G.__data, C), C += ee.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, J, G.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function f(x, v, b, R) {
    const A = x.value, w = v + "_" + b;
    if (R[w] === void 0)
      return typeof A == "number" || typeof A == "boolean" ? R[w] = A : R[w] = A.clone(), !0;
    {
      const H = R[w];
      if (typeof A == "number" || typeof A == "boolean") {
        if (H !== A)
          return R[w] = A, !0;
      } else if (H.equals(A) === !1)
        return H.copy(A), !0;
    }
    return !1;
  }
  function g(x) {
    const v = x.uniforms;
    let b = 0;
    const R = 16;
    for (let w = 0, H = v.length; w < H; w++) {
      const E = Array.isArray(v[w]) ? v[w] : [v[w]];
      for (let T = 0, G = E.length; T < G; T++) {
        const J = E[T], le = Array.isArray(J.value) ? J.value : [J.value];
        for (let C = 0, P = le.length; C < P; C++) {
          const D = le[C], ee = _(D), V = b % R;
          V !== 0 && R - V < ee.boundary && (b += R - V), J.__data = new Float32Array(ee.storage / Float32Array.BYTES_PER_ELEMENT), J.__offset = b, b += ee.storage;
        }
      }
    }
    const A = b % R;
    return A > 0 && (b += R - A), x.__size = b, x.__cache = {}, this;
  }
  function _(x) {
    const v = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof x == "number" || typeof x == "boolean" ? (v.boundary = 4, v.storage = 4) : x.isVector2 ? (v.boundary = 8, v.storage = 8) : x.isVector3 || x.isColor ? (v.boundary = 16, v.storage = 12) : x.isVector4 ? (v.boundary = 16, v.storage = 16) : x.isMatrix3 ? (v.boundary = 48, v.storage = 48) : x.isMatrix4 ? (v.boundary = 64, v.storage = 64) : x.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", x), v;
  }
  function p(x) {
    const v = x.target;
    v.removeEventListener("dispose", p);
    const b = o.indexOf(v.__bindingPointIndex);
    o.splice(b, 1), i.deleteBuffer(s[v.id]), delete s[v.id], delete r[v.id];
  }
  function m() {
    for (const x in s)
      i.deleteBuffer(s[x]);
    o = [], s = {}, r = {};
  }
  return {
    bind: l,
    update: c,
    dispose: m
  };
}
class Bd {
  constructor(e = {}) {
    const {
      canvas: t = hm(),
      context: n = null,
      depth: s = !0,
      stencil: r = !0,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: d = !1
    } = e;
    this.isWebGLRenderer = !0;
    let h;
    n !== null ? h = n.getContextAttributes().alpha : h = o;
    const f = new Uint32Array(4), g = new Int32Array(4);
    let _ = null, p = null;
    const m = [], x = [];
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
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = xt, this._useLegacyLights = !1, this.toneMapping = ai, this.toneMappingExposure = 1;
    const v = this;
    let b = !1, R = 0, A = 0, w = null, H = -1, E = null;
    const T = new mt(), G = new mt();
    let J = null;
    const le = new je(0);
    let C = 0, P = t.width, D = t.height, ee = 1, V = null, q = null;
    const Y = new mt(0, 0, P, D), Z = new mt(0, 0, P, D);
    let he = !1;
    const z = new sl();
    let te = !1, se = !1, Q = null;
    const ae = new nt(), be = new ot(), Re = new U(), ge = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function Ae() {
      return w === null ? ee : 1;
    }
    let N = n;
    function Qe(S, F) {
      for (let j = 0; j < S.length; j++) {
        const $ = S[j], B = t.getContext($, F);
        if (B !== null) return B;
      }
      return null;
    }
    try {
      const S = {
        alpha: !0,
        depth: s,
        stencil: r,
        antialias: a,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: d
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Qa}`), t.addEventListener("webglcontextlost", fe, !1), t.addEventListener("webglcontextrestored", L, !1), t.addEventListener("webglcontextcreationerror", me, !1), N === null) {
        const F = ["webgl2", "webgl", "experimental-webgl"];
        if (v.isWebGL1Renderer === !0 && F.shift(), N = Qe(F, S), N === null)
          throw Qe(F) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && N instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), N.getShaderPrecisionFormat === void 0 && (N.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (S) {
      throw console.error("THREE.WebGLRenderer: " + S.message), S;
    }
    let Ce, Ie, Te, lt, Be, M, y, W, de, ce, ue, oe, I, k, ne, Se, K, xe, Ee, Le, we, Me, ze, it;
    function ut() {
      Ce = new bv(N), Ie = new xv(N, Ce, e), Ce.init(Ie), Me = new dy(N, Ce, Ie), Te = new cy(N, Ce, Ie), lt = new Cv(N), Be = new K0(), M = new uy(N, Ce, Te, Be, Ie, Me, lt), y = new Sv(v), W = new Tv(v), de = new Fm(N, Ie), ze = new vv(N, Ce, de, Ie), ce = new wv(N, de, lt, ze), ue = new Dv(N, ce, de, lt), Ee = new Iv(N, Ie, M), Se = new Ev(Be), oe = new Y0(v, y, W, Ce, Ie, ze, Se), I = new my(v, Be), k = new J0(), ne = new iy(Ce, Ie), xe = new _v(v, y, W, Te, ue, h, l), K = new ly(v, ue, Ie), it = new gy(N, lt, Ie, Te), Le = new yv(N, Ce, lt, Ie), we = new Rv(N, Ce, lt, Ie), lt.programs = oe.programs, v.capabilities = Ie, v.extensions = Ce, v.properties = Be, v.renderLists = k, v.shadowMap = K, v.state = Te, v.info = lt;
    }
    ut();
    const Xe = new py(v, N);
    this.xr = Xe, this.getContext = function() {
      return N;
    }, this.getContextAttributes = function() {
      return N.getContextAttributes();
    }, this.forceContextLoss = function() {
      const S = Ce.get("WEBGL_lose_context");
      S && S.loseContext();
    }, this.forceContextRestore = function() {
      const S = Ce.get("WEBGL_lose_context");
      S && S.restoreContext();
    }, this.getPixelRatio = function() {
      return ee;
    }, this.setPixelRatio = function(S) {
      S !== void 0 && (ee = S, this.setSize(P, D, !1));
    }, this.getSize = function(S) {
      return S.set(P, D);
    }, this.setSize = function(S, F, j = !0) {
      if (Xe.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      P = S, D = F, t.width = Math.floor(S * ee), t.height = Math.floor(F * ee), j === !0 && (t.style.width = S + "px", t.style.height = F + "px"), this.setViewport(0, 0, S, F);
    }, this.getDrawingBufferSize = function(S) {
      return S.set(P * ee, D * ee).floor();
    }, this.setDrawingBufferSize = function(S, F, j) {
      P = S, D = F, ee = j, t.width = Math.floor(S * j), t.height = Math.floor(F * j), this.setViewport(0, 0, S, F);
    }, this.getCurrentViewport = function(S) {
      return S.copy(T);
    }, this.getViewport = function(S) {
      return S.copy(Y);
    }, this.setViewport = function(S, F, j, $) {
      S.isVector4 ? Y.set(S.x, S.y, S.z, S.w) : Y.set(S, F, j, $), Te.viewport(T.copy(Y).multiplyScalar(ee).floor());
    }, this.getScissor = function(S) {
      return S.copy(Z);
    }, this.setScissor = function(S, F, j, $) {
      S.isVector4 ? Z.set(S.x, S.y, S.z, S.w) : Z.set(S, F, j, $), Te.scissor(G.copy(Z).multiplyScalar(ee).floor());
    }, this.getScissorTest = function() {
      return he;
    }, this.setScissorTest = function(S) {
      Te.setScissorTest(he = S);
    }, this.setOpaqueSort = function(S) {
      V = S;
    }, this.setTransparentSort = function(S) {
      q = S;
    }, this.getClearColor = function(S) {
      return S.copy(xe.getClearColor());
    }, this.setClearColor = function() {
      xe.setClearColor.apply(xe, arguments);
    }, this.getClearAlpha = function() {
      return xe.getClearAlpha();
    }, this.setClearAlpha = function() {
      xe.setClearAlpha.apply(xe, arguments);
    }, this.clear = function(S = !0, F = !0, j = !0) {
      let $ = 0;
      if (S) {
        let B = !1;
        if (w !== null) {
          const pe = w.texture.format;
          B = pe === pd || pe === fd || pe === hd;
        }
        if (B) {
          const pe = w.texture.type, De = pe === li || pe === si || pe === el || pe === Ii || pe === ud || pe === dd, Ve = xe.getClearColor(), Ge = xe.getClearAlpha(), Ze = Ve.r, Ye = Ve.g, Ke = Ve.b;
          De ? (f[0] = Ze, f[1] = Ye, f[2] = Ke, f[3] = Ge, N.clearBufferuiv(N.COLOR, 0, f)) : (g[0] = Ze, g[1] = Ye, g[2] = Ke, g[3] = Ge, N.clearBufferiv(N.COLOR, 0, g));
        } else
          $ |= N.COLOR_BUFFER_BIT;
      }
      F && ($ |= N.DEPTH_BUFFER_BIT), j && ($ |= N.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), N.clear($);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", fe, !1), t.removeEventListener("webglcontextrestored", L, !1), t.removeEventListener("webglcontextcreationerror", me, !1), k.dispose(), ne.dispose(), Be.dispose(), y.dispose(), W.dispose(), ue.dispose(), ze.dispose(), it.dispose(), oe.dispose(), Xe.dispose(), Xe.removeEventListener("sessionstart", bt), Xe.removeEventListener("sessionend", at), Q && (Q.dispose(), Q = null), wt.stop();
    };
    function fe(S) {
      S.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), b = !0;
    }
    function L() {
      console.log("THREE.WebGLRenderer: Context Restored."), b = !1;
      const S = lt.autoReset, F = K.enabled, j = K.autoUpdate, $ = K.needsUpdate, B = K.type;
      ut(), lt.autoReset = S, K.enabled = F, K.autoUpdate = j, K.needsUpdate = $, K.type = B;
    }
    function me(S) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", S.statusMessage);
    }
    function ve(S) {
      const F = S.target;
      F.removeEventListener("dispose", ve), Oe(F);
    }
    function Oe(S) {
      Ue(S), Be.remove(S);
    }
    function Ue(S) {
      const F = Be.get(S).programs;
      F !== void 0 && (F.forEach(function(j) {
        oe.releaseProgram(j);
      }), S.isShaderMaterial && oe.releaseShaderCache(S));
    }
    this.renderBufferDirect = function(S, F, j, $, B, pe) {
      F === null && (F = ge);
      const De = B.isMesh && B.matrixWorld.determinant() < 0, Ve = Gi(S, F, j, $, B);
      Te.setMaterial($, De);
      let Ge = j.index, Ze = 1;
      if ($.wireframe === !0) {
        if (Ge = ce.getWireframeAttribute(j), Ge === void 0) return;
        Ze = 2;
      }
      const Ye = j.drawRange, Ke = j.attributes.position;
      let Tt = Ye.start * Ze, en = (Ye.start + Ye.count) * Ze;
      pe !== null && (Tt = Math.max(Tt, pe.start * Ze), en = Math.min(en, (pe.start + pe.count) * Ze)), Ge !== null ? (Tt = Math.max(Tt, 0), en = Math.min(en, Ge.count)) : Ke != null && (Tt = Math.max(Tt, 0), en = Math.min(en, Ke.count));
      const Pt = en - Tt;
      if (Pt < 0 || Pt === 1 / 0) return;
      ze.setup(B, $, Ve, j, Ge);
      let Dn, vt = Le;
      if (Ge !== null && (Dn = de.get(Ge), vt = we, vt.setIndex(Dn)), B.isMesh)
        $.wireframe === !0 ? (Te.setLineWidth($.wireframeLinewidth * Ae()), vt.setMode(N.LINES)) : vt.setMode(N.TRIANGLES);
      else if (B.isLine) {
        let et = $.linewidth;
        et === void 0 && (et = 1), Te.setLineWidth(et * Ae()), B.isLineSegments ? vt.setMode(N.LINES) : B.isLineLoop ? vt.setMode(N.LINE_LOOP) : vt.setMode(N.LINE_STRIP);
      } else B.isPoints ? vt.setMode(N.POINTS) : B.isSprite && vt.setMode(N.TRIANGLES);
      if (B.isBatchedMesh)
        vt.renderMultiDraw(B._multiDrawStarts, B._multiDrawCounts, B._multiDrawCount);
      else if (B.isInstancedMesh)
        vt.renderInstances(Tt, Pt, B.count);
      else if (j.isInstancedBufferGeometry) {
        const et = j._maxInstanceCount !== void 0 ? j._maxInstanceCount : 1 / 0, wo = Math.min(j.instanceCount, et);
        vt.renderInstances(Tt, Pt, wo);
      } else
        vt.render(Tt, Pt);
    };
    function ct(S, F, j) {
      S.transparent === !0 && S.side === wn && S.forceSinglePass === !1 ? (S.side = Qt, S.needsUpdate = !0, Pe(S, F, j), S.side = jn, S.needsUpdate = !0, Pe(S, F, j), S.side = wn) : Pe(S, F, j);
    }
    this.compile = function(S, F, j = null) {
      j === null && (j = S), p = ne.get(j), p.init(), x.push(p), j.traverseVisible(function(B) {
        B.isLight && B.layers.test(F.layers) && (p.pushLight(B), B.castShadow && p.pushShadow(B));
      }), S !== j && S.traverseVisible(function(B) {
        B.isLight && B.layers.test(F.layers) && (p.pushLight(B), B.castShadow && p.pushShadow(B));
      }), p.setupLights(v._useLegacyLights);
      const $ = /* @__PURE__ */ new Set();
      return S.traverse(function(B) {
        const pe = B.material;
        if (pe)
          if (Array.isArray(pe))
            for (let De = 0; De < pe.length; De++) {
              const Ve = pe[De];
              ct(Ve, j, B), $.add(Ve);
            }
          else
            ct(pe, j, B), $.add(pe);
      }), x.pop(), p = null, $;
    }, this.compileAsync = function(S, F, j = null) {
      const $ = this.compile(S, F, j);
      return new Promise((B) => {
        function pe() {
          if ($.forEach(function(De) {
            Be.get(De).currentProgram.isReady() && $.delete(De);
          }), $.size === 0) {
            B(S);
            return;
          }
          setTimeout(pe, 10);
        }
        Ce.get("KHR_parallel_shader_compile") !== null ? pe() : setTimeout(pe, 10);
      });
    };
    let dt = null;
    function St(S) {
      dt && dt(S);
    }
    function bt() {
      wt.stop();
    }
    function at() {
      wt.start();
    }
    const wt = new Pd();
    wt.setAnimationLoop(St), typeof self < "u" && wt.setContext(self), this.setAnimationLoop = function(S) {
      dt = S, Xe.setAnimationLoop(S), S === null ? wt.stop() : wt.start();
    }, Xe.addEventListener("sessionstart", bt), Xe.addEventListener("sessionend", at), this.render = function(S, F) {
      if (F !== void 0 && F.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (b === !0) return;
      S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(), F.parent === null && F.matrixWorldAutoUpdate === !0 && F.updateMatrixWorld(), Xe.enabled === !0 && Xe.isPresenting === !0 && (Xe.cameraAutoUpdate === !0 && Xe.updateCamera(F), F = Xe.getCamera()), S.isScene === !0 && S.onBeforeRender(v, S, F, w), p = ne.get(S, x.length), p.init(), x.push(p), ae.multiplyMatrices(F.projectionMatrix, F.matrixWorldInverse), z.setFromProjectionMatrix(ae), se = this.localClippingEnabled, te = Se.init(this.clippingPlanes, se), _ = k.get(S, m.length), _.init(), m.push(_), Bt(S, F, 0, v.sortObjects), _.finish(), v.sortObjects === !0 && _.sort(V, q), this.info.render.frame++, te === !0 && Se.beginShadows();
      const j = p.state.shadowsArray;
      if (K.render(j, S, F), te === !0 && Se.endShadows(), this.info.autoReset === !0 && this.info.reset(), xe.render(_, S), p.setupLights(v._useLegacyLights), F.isArrayCamera) {
        const $ = F.cameras;
        for (let B = 0, pe = $.length; B < pe; B++) {
          const De = $[B];
          ui(_, S, De, De.viewport);
        }
      } else
        ui(_, S, F);
      w !== null && (M.updateMultisampleRenderTarget(w), M.updateRenderTargetMipmap(w)), S.isScene === !0 && S.onAfterRender(v, S, F), ze.resetDefaultState(), H = -1, E = null, x.pop(), x.length > 0 ? p = x[x.length - 1] : p = null, m.pop(), m.length > 0 ? _ = m[m.length - 1] : _ = null;
    };
    function Bt(S, F, j, $) {
      if (S.visible === !1) return;
      if (S.layers.test(F.layers)) {
        if (S.isGroup)
          j = S.renderOrder;
        else if (S.isLOD)
          S.autoUpdate === !0 && S.update(F);
        else if (S.isLight)
          p.pushLight(S), S.castShadow && p.pushShadow(S);
        else if (S.isSprite) {
          if (!S.frustumCulled || z.intersectsSprite(S)) {
            $ && Re.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ae);
            const De = ue.update(S), Ve = S.material;
            Ve.visible && _.push(S, De, Ve, j, Re.z, null);
          }
        } else if ((S.isMesh || S.isLine || S.isPoints) && (!S.frustumCulled || z.intersectsObject(S))) {
          const De = ue.update(S), Ve = S.material;
          if ($ && (S.boundingSphere !== void 0 ? (S.boundingSphere === null && S.computeBoundingSphere(), Re.copy(S.boundingSphere.center)) : (De.boundingSphere === null && De.computeBoundingSphere(), Re.copy(De.boundingSphere.center)), Re.applyMatrix4(S.matrixWorld).applyMatrix4(ae)), Array.isArray(Ve)) {
            const Ge = De.groups;
            for (let Ze = 0, Ye = Ge.length; Ze < Ye; Ze++) {
              const Ke = Ge[Ze], Tt = Ve[Ke.materialIndex];
              Tt && Tt.visible && _.push(S, De, Tt, j, Re.z, Ke);
            }
          } else Ve.visible && _.push(S, De, Ve, j, Re.z, null);
        }
      }
      const pe = S.children;
      for (let De = 0, Ve = pe.length; De < Ve; De++)
        Bt(pe[De], F, j, $);
    }
    function ui(S, F, j, $) {
      const B = S.opaque, pe = S.transmissive, De = S.transparent;
      p.setupLightsView(j), te === !0 && Se.setGlobalState(v.clippingPlanes, j), pe.length > 0 && di(B, pe, F, j), $ && Te.viewport(T.copy($)), B.length > 0 && ye(B, F, j), pe.length > 0 && ye(pe, F, j), De.length > 0 && ye(De, F, j), Te.buffers.depth.setTest(!0), Te.buffers.depth.setMask(!0), Te.buffers.color.setMask(!0), Te.setPolygonOffset(!1);
    }
    function di(S, F, j, $) {
      if ((j.isScene === !0 ? j.overrideMaterial : null) !== null)
        return;
      const pe = Ie.isWebGL2;
      Q === null && (Q = new Fi(1, 1, {
        generateMipmaps: !0,
        type: Ce.has("EXT_color_buffer_half_float") ? er : li,
        minFilter: Oi,
        samples: pe ? 4 : 0
      })), v.getDrawingBufferSize(be), pe ? Q.setSize(be.x, be.y) : Q.setSize(uo(be.x), uo(be.y));
      const De = v.getRenderTarget();
      v.setRenderTarget(Q), v.getClearColor(le), C = v.getClearAlpha(), C < 1 && v.setClearColor(16777215, 0.5), v.clear();
      const Ve = v.toneMapping;
      v.toneMapping = ai, ye(S, j, $), M.updateMultisampleRenderTarget(Q), M.updateRenderTargetMipmap(Q);
      let Ge = !1;
      for (let Ze = 0, Ye = F.length; Ze < Ye; Ze++) {
        const Ke = F[Ze], Tt = Ke.object, en = Ke.geometry, Pt = Ke.material, Dn = Ke.group;
        if (Pt.side === wn && Tt.layers.test($.layers)) {
          const vt = Pt.side;
          Pt.side = Qt, Pt.needsUpdate = !0, re(Tt, j, $, en, Pt, Dn), Pt.side = vt, Pt.needsUpdate = !0, Ge = !0;
        }
      }
      Ge === !0 && (M.updateMultisampleRenderTarget(Q), M.updateRenderTargetMipmap(Q)), v.setRenderTarget(De), v.setClearColor(le, C), v.toneMapping = Ve;
    }
    function ye(S, F, j) {
      const $ = F.isScene === !0 ? F.overrideMaterial : null;
      for (let B = 0, pe = S.length; B < pe; B++) {
        const De = S[B], Ve = De.object, Ge = De.geometry, Ze = $ === null ? De.material : $, Ye = De.group;
        Ve.layers.test(j.layers) && re(Ve, F, j, Ge, Ze, Ye);
      }
    }
    function re(S, F, j, $, B, pe) {
      S.onBeforeRender(v, F, j, $, B, pe), S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse, S.matrixWorld), S.normalMatrix.getNormalMatrix(S.modelViewMatrix), B.onBeforeRender(v, F, j, $, S, pe), B.transparent === !0 && B.side === wn && B.forceSinglePass === !1 ? (B.side = Qt, B.needsUpdate = !0, v.renderBufferDirect(j, F, $, B, S, pe), B.side = jn, B.needsUpdate = !0, v.renderBufferDirect(j, F, $, B, S, pe), B.side = wn) : v.renderBufferDirect(j, F, $, B, S, pe), S.onAfterRender(v, F, j, $, B, pe);
    }
    function Pe(S, F, j) {
      F.isScene !== !0 && (F = ge);
      const $ = Be.get(S), B = p.state.lights, pe = p.state.shadowsArray, De = B.state.version, Ve = oe.getParameters(S, B.state, pe, F, j), Ge = oe.getProgramCacheKey(Ve);
      let Ze = $.programs;
      $.environment = S.isMeshStandardMaterial ? F.environment : null, $.fog = F.fog, $.envMap = (S.isMeshStandardMaterial ? W : y).get(S.envMap || $.environment), Ze === void 0 && (S.addEventListener("dispose", ve), Ze = /* @__PURE__ */ new Map(), $.programs = Ze);
      let Ye = Ze.get(Ge);
      if (Ye !== void 0) {
        if ($.currentProgram === Ye && $.lightsStateVersion === De)
          return In(S, Ve), Ye;
      } else
        Ve.uniforms = oe.getUniforms(S), S.onBuild(j, Ve, v), S.onBeforeCompile(Ve, v), Ye = oe.acquireProgram(Ve, Ge), Ze.set(Ge, Ye), $.uniforms = Ve.uniforms;
      const Ke = $.uniforms;
      return (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === !0) && (Ke.clippingPlanes = Se.uniform), In(S, Ve), $.needsLights = dr(S), $.lightsStateVersion = De, $.needsLights && (Ke.ambientLightColor.value = B.state.ambient, Ke.lightProbe.value = B.state.probe, Ke.directionalLights.value = B.state.directional, Ke.directionalLightShadows.value = B.state.directionalShadow, Ke.spotLights.value = B.state.spot, Ke.spotLightShadows.value = B.state.spotShadow, Ke.rectAreaLights.value = B.state.rectArea, Ke.ltc_1.value = B.state.rectAreaLTC1, Ke.ltc_2.value = B.state.rectAreaLTC2, Ke.pointLights.value = B.state.point, Ke.pointLightShadows.value = B.state.pointShadow, Ke.hemisphereLights.value = B.state.hemi, Ke.directionalShadowMap.value = B.state.directionalShadowMap, Ke.directionalShadowMatrix.value = B.state.directionalShadowMatrix, Ke.spotShadowMap.value = B.state.spotShadowMap, Ke.spotLightMatrix.value = B.state.spotLightMatrix, Ke.spotLightMap.value = B.state.spotLightMap, Ke.pointShadowMap.value = B.state.pointShadowMap, Ke.pointShadowMatrix.value = B.state.pointShadowMatrix), $.currentProgram = Ye, $.uniformsList = null, Ye;
    }
    function _t(S) {
      if (S.uniformsList === null) {
        const F = S.currentProgram.getUniforms();
        S.uniformsList = Zr.seqWithValue(F.seq, S.uniforms);
      }
      return S.uniformsList;
    }
    function In(S, F) {
      const j = Be.get(S);
      j.outputColorSpace = F.outputColorSpace, j.batching = F.batching, j.instancing = F.instancing, j.instancingColor = F.instancingColor, j.skinning = F.skinning, j.morphTargets = F.morphTargets, j.morphNormals = F.morphNormals, j.morphColors = F.morphColors, j.morphTargetsCount = F.morphTargetsCount, j.numClippingPlanes = F.numClippingPlanes, j.numIntersection = F.numClipIntersection, j.vertexAlphas = F.vertexAlphas, j.vertexTangents = F.vertexTangents, j.toneMapping = F.toneMapping;
    }
    function Gi(S, F, j, $, B) {
      F.isScene !== !0 && (F = ge), M.resetTextureUnits();
      const pe = F.fog, De = $.isMeshStandardMaterial ? F.environment : null, Ve = w === null ? v.outputColorSpace : w.isXRRenderTarget === !0 ? w.texture.colorSpace : Nt, Ge = ($.isMeshStandardMaterial ? W : y).get($.envMap || De), Ze = $.vertexColors === !0 && !!j.attributes.color && j.attributes.color.itemSize === 4, Ye = !!j.attributes.tangent && (!!$.normalMap || $.anisotropy > 0), Ke = !!j.morphAttributes.position, Tt = !!j.morphAttributes.normal, en = !!j.morphAttributes.color;
      let Pt = ai;
      $.toneMapped && (w === null || w.isXRRenderTarget === !0) && (Pt = v.toneMapping);
      const Dn = j.morphAttributes.position || j.morphAttributes.normal || j.morphAttributes.color, vt = Dn !== void 0 ? Dn.length : 0, et = Be.get($), wo = p.state.lights;
      if (te === !0 && (se === !0 || S !== E)) {
        const on = S === E && $.id === H;
        Se.setState($, S, on);
      }
      let Mt = !1;
      $.version === et.__version ? (et.needsLights && et.lightsStateVersion !== wo.state.version || et.outputColorSpace !== Ve || B.isBatchedMesh && et.batching === !1 || !B.isBatchedMesh && et.batching === !0 || B.isInstancedMesh && et.instancing === !1 || !B.isInstancedMesh && et.instancing === !0 || B.isSkinnedMesh && et.skinning === !1 || !B.isSkinnedMesh && et.skinning === !0 || B.isInstancedMesh && et.instancingColor === !0 && B.instanceColor === null || B.isInstancedMesh && et.instancingColor === !1 && B.instanceColor !== null || et.envMap !== Ge || $.fog === !0 && et.fog !== pe || et.numClippingPlanes !== void 0 && (et.numClippingPlanes !== Se.numPlanes || et.numIntersection !== Se.numIntersection) || et.vertexAlphas !== Ze || et.vertexTangents !== Ye || et.morphTargets !== Ke || et.morphNormals !== Tt || et.morphColors !== en || et.toneMapping !== Pt || Ie.isWebGL2 === !0 && et.morphTargetsCount !== vt) && (Mt = !0) : (Mt = !0, et.__version = $.version);
      let hi = et.currentProgram;
      Mt === !0 && (hi = Pe($, F, B));
      let fl = !1, Us = !1, Ro = !1;
      const Vt = hi.getUniforms(), fi = et.uniforms;
      if (Te.useProgram(hi.program) && (fl = !0, Us = !0, Ro = !0), $.id !== H && (H = $.id, Us = !0), fl || E !== S) {
        Vt.setValue(N, "projectionMatrix", S.projectionMatrix), Vt.setValue(N, "viewMatrix", S.matrixWorldInverse);
        const on = Vt.map.cameraPosition;
        on !== void 0 && on.setValue(N, Re.setFromMatrixPosition(S.matrixWorld)), Ie.logarithmicDepthBuffer && Vt.setValue(
          N,
          "logDepthBufFC",
          2 / (Math.log(S.far + 1) / Math.LN2)
        ), ($.isMeshPhongMaterial || $.isMeshToonMaterial || $.isMeshLambertMaterial || $.isMeshBasicMaterial || $.isMeshStandardMaterial || $.isShaderMaterial) && Vt.setValue(N, "isOrthographic", S.isOrthographicCamera === !0), E !== S && (E = S, Us = !0, Ro = !0);
      }
      if (B.isSkinnedMesh) {
        Vt.setOptional(N, B, "bindMatrix"), Vt.setOptional(N, B, "bindMatrixInverse");
        const on = B.skeleton;
        on && (Ie.floatVertexTextures ? (on.boneTexture === null && on.computeBoneTexture(), Vt.setValue(N, "boneTexture", on.boneTexture, M)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      B.isBatchedMesh && (Vt.setOptional(N, B, "batchingTexture"), Vt.setValue(N, "batchingTexture", B._matricesTexture, M));
      const Co = j.morphAttributes;
      if ((Co.position !== void 0 || Co.normal !== void 0 || Co.color !== void 0 && Ie.isWebGL2 === !0) && Ee.update(B, j, hi), (Us || et.receiveShadow !== B.receiveShadow) && (et.receiveShadow = B.receiveShadow, Vt.setValue(N, "receiveShadow", B.receiveShadow)), $.isMeshGouraudMaterial && $.envMap !== null && (fi.envMap.value = Ge, fi.flipEnvMap.value = Ge.isCubeTexture && Ge.isRenderTargetTexture === !1 ? -1 : 1), Us && (Vt.setValue(N, "toneMappingExposure", v.toneMappingExposure), et.needsLights && Wi(fi, Ro), pe && $.fog === !0 && I.refreshFogUniforms(fi, pe), I.refreshMaterialUniforms(fi, $, ee, D, Q), Zr.upload(N, _t(et), fi, M)), $.isShaderMaterial && $.uniformsNeedUpdate === !0 && (Zr.upload(N, _t(et), fi, M), $.uniformsNeedUpdate = !1), $.isSpriteMaterial && Vt.setValue(N, "center", B.center), Vt.setValue(N, "modelViewMatrix", B.modelViewMatrix), Vt.setValue(N, "normalMatrix", B.normalMatrix), Vt.setValue(N, "modelMatrix", B.matrixWorld), $.isShaderMaterial || $.isRawShaderMaterial) {
        const on = $.uniformsGroups;
        for (let Lo = 0, ih = on.length; Lo < ih; Lo++)
          if (Ie.isWebGL2) {
            const pl = on[Lo];
            it.update(pl, hi), it.bind(pl, hi);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return hi;
    }
    function Wi(S, F) {
      S.ambientLightColor.needsUpdate = F, S.lightProbe.needsUpdate = F, S.directionalLights.needsUpdate = F, S.directionalLightShadows.needsUpdate = F, S.pointLights.needsUpdate = F, S.pointLightShadows.needsUpdate = F, S.spotLights.needsUpdate = F, S.spotLightShadows.needsUpdate = F, S.rectAreaLights.needsUpdate = F, S.hemisphereLights.needsUpdate = F;
    }
    function dr(S) {
      return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return R;
    }, this.getActiveMipmapLevel = function() {
      return A;
    }, this.getRenderTarget = function() {
      return w;
    }, this.setRenderTargetTextures = function(S, F, j) {
      Be.get(S.texture).__webglTexture = F, Be.get(S.depthTexture).__webglTexture = j;
      const $ = Be.get(S);
      $.__hasExternalTextures = !0, $.__hasExternalTextures && ($.__autoAllocateDepthBuffer = j === void 0, $.__autoAllocateDepthBuffer || Ce.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), $.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(S, F) {
      const j = Be.get(S);
      j.__webglFramebuffer = F, j.__useDefaultFramebuffer = F === void 0;
    }, this.setRenderTarget = function(S, F = 0, j = 0) {
      w = S, R = F, A = j;
      let $ = !0, B = null, pe = !1, De = !1;
      if (S) {
        const Ge = Be.get(S);
        Ge.__useDefaultFramebuffer !== void 0 ? (Te.bindFramebuffer(N.FRAMEBUFFER, null), $ = !1) : Ge.__webglFramebuffer === void 0 ? M.setupRenderTarget(S) : Ge.__hasExternalTextures && M.rebindTextures(S, Be.get(S.texture).__webglTexture, Be.get(S.depthTexture).__webglTexture);
        const Ze = S.texture;
        (Ze.isData3DTexture || Ze.isDataArrayTexture || Ze.isCompressedArrayTexture) && (De = !0);
        const Ye = Be.get(S).__webglFramebuffer;
        S.isWebGLCubeRenderTarget ? (Array.isArray(Ye[F]) ? B = Ye[F][j] : B = Ye[F], pe = !0) : Ie.isWebGL2 && S.samples > 0 && M.useMultisampledRTT(S) === !1 ? B = Be.get(S).__webglMultisampledFramebuffer : Array.isArray(Ye) ? B = Ye[j] : B = Ye, T.copy(S.viewport), G.copy(S.scissor), J = S.scissorTest;
      } else
        T.copy(Y).multiplyScalar(ee).floor(), G.copy(Z).multiplyScalar(ee).floor(), J = he;
      if (Te.bindFramebuffer(N.FRAMEBUFFER, B) && Ie.drawBuffers && $ && Te.drawBuffers(S, B), Te.viewport(T), Te.scissor(G), Te.setScissorTest(J), pe) {
        const Ge = Be.get(S.texture);
        N.framebufferTexture2D(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0, N.TEXTURE_CUBE_MAP_POSITIVE_X + F, Ge.__webglTexture, j);
      } else if (De) {
        const Ge = Be.get(S.texture), Ze = F || 0;
        N.framebufferTextureLayer(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0, Ge.__webglTexture, j || 0, Ze);
      }
      H = -1;
    }, this.readRenderTargetPixels = function(S, F, j, $, B, pe, De) {
      if (!(S && S.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Ve = Be.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && De !== void 0 && (Ve = Ve[De]), Ve) {
        Te.bindFramebuffer(N.FRAMEBUFFER, Ve);
        try {
          const Ge = S.texture, Ze = Ge.format, Ye = Ge.type;
          if (Ze !== dn && Me.convert(Ze) !== N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const Ke = Ye === er && (Ce.has("EXT_color_buffer_half_float") || Ie.isWebGL2 && Ce.has("EXT_color_buffer_float"));
          if (Ye !== li && Me.convert(Ye) !== N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
          !(Ye === Gn && (Ie.isWebGL2 || Ce.has("OES_texture_float") || Ce.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
          !Ke) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          F >= 0 && F <= S.width - $ && j >= 0 && j <= S.height - B && N.readPixels(F, j, $, B, Me.convert(Ze), Me.convert(Ye), pe);
        } finally {
          const Ge = w !== null ? Be.get(w).__webglFramebuffer : null;
          Te.bindFramebuffer(N.FRAMEBUFFER, Ge);
        }
      }
    }, this.copyFramebufferToTexture = function(S, F, j = 0) {
      const $ = Math.pow(2, -j), B = Math.floor(F.image.width * $), pe = Math.floor(F.image.height * $);
      M.setTexture2D(F, 0), N.copyTexSubImage2D(N.TEXTURE_2D, j, 0, 0, S.x, S.y, B, pe), Te.unbindTexture();
    }, this.copyTextureToTexture = function(S, F, j, $ = 0) {
      const B = F.image.width, pe = F.image.height, De = Me.convert(j.format), Ve = Me.convert(j.type);
      M.setTexture2D(j, 0), N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, j.flipY), N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, j.premultiplyAlpha), N.pixelStorei(N.UNPACK_ALIGNMENT, j.unpackAlignment), F.isDataTexture ? N.texSubImage2D(N.TEXTURE_2D, $, S.x, S.y, B, pe, De, Ve, F.image.data) : F.isCompressedTexture ? N.compressedTexSubImage2D(N.TEXTURE_2D, $, S.x, S.y, F.mipmaps[0].width, F.mipmaps[0].height, De, F.mipmaps[0].data) : N.texSubImage2D(N.TEXTURE_2D, $, S.x, S.y, De, Ve, F.image), $ === 0 && j.generateMipmaps && N.generateMipmap(N.TEXTURE_2D), Te.unbindTexture();
    }, this.copyTextureToTexture3D = function(S, F, j, $, B = 0) {
      if (v.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const pe = S.max.x - S.min.x + 1, De = S.max.y - S.min.y + 1, Ve = S.max.z - S.min.z + 1, Ge = Me.convert($.format), Ze = Me.convert($.type);
      let Ye;
      if ($.isData3DTexture)
        M.setTexture3D($, 0), Ye = N.TEXTURE_3D;
      else if ($.isDataArrayTexture || $.isCompressedArrayTexture)
        M.setTexture2DArray($, 0), Ye = N.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, $.flipY), N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, $.premultiplyAlpha), N.pixelStorei(N.UNPACK_ALIGNMENT, $.unpackAlignment);
      const Ke = N.getParameter(N.UNPACK_ROW_LENGTH), Tt = N.getParameter(N.UNPACK_IMAGE_HEIGHT), en = N.getParameter(N.UNPACK_SKIP_PIXELS), Pt = N.getParameter(N.UNPACK_SKIP_ROWS), Dn = N.getParameter(N.UNPACK_SKIP_IMAGES), vt = j.isCompressedTexture ? j.mipmaps[B] : j.image;
      N.pixelStorei(N.UNPACK_ROW_LENGTH, vt.width), N.pixelStorei(N.UNPACK_IMAGE_HEIGHT, vt.height), N.pixelStorei(N.UNPACK_SKIP_PIXELS, S.min.x), N.pixelStorei(N.UNPACK_SKIP_ROWS, S.min.y), N.pixelStorei(N.UNPACK_SKIP_IMAGES, S.min.z), j.isDataTexture || j.isData3DTexture ? N.texSubImage3D(Ye, B, F.x, F.y, F.z, pe, De, Ve, Ge, Ze, vt.data) : j.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), N.compressedTexSubImage3D(Ye, B, F.x, F.y, F.z, pe, De, Ve, Ge, vt.data)) : N.texSubImage3D(Ye, B, F.x, F.y, F.z, pe, De, Ve, Ge, Ze, vt), N.pixelStorei(N.UNPACK_ROW_LENGTH, Ke), N.pixelStorei(N.UNPACK_IMAGE_HEIGHT, Tt), N.pixelStorei(N.UNPACK_SKIP_PIXELS, en), N.pixelStorei(N.UNPACK_SKIP_ROWS, Pt), N.pixelStorei(N.UNPACK_SKIP_IMAGES, Dn), B === 0 && $.generateMipmaps && N.generateMipmap(Ye), Te.unbindTexture();
    }, this.initTexture = function(S) {
      S.isCubeTexture ? M.setTextureCube(S, 0) : S.isData3DTexture ? M.setTexture3D(S, 0) : S.isDataArrayTexture || S.isCompressedArrayTexture ? M.setTexture2DArray(S, 0) : M.setTexture2D(S, 0), Te.unbindTexture();
    }, this.resetState = function() {
      R = 0, A = 0, w = null, Te.reset(), ze.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Wn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === nl ? "display-p3" : "srgb", t.unpackColorSpace = ft.workingColorSpace === yo ? "display-p3" : "srgb";
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === xt ? Ui : _d;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === Ui ? xt : Nt;
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(e) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
  }
}
class _y extends Bd {
}
_y.prototype.isWebGL1Renderer = !0;
class vy extends Et {
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
class yy {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Ia, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.version = 0, this.uuid = yn();
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
    for (let s = 0, r = this.stride; s < r; s++)
      this.array[e + s] = t.array[n + s];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = yn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = yn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const Wt = /* @__PURE__ */ new U();
class al {
  constructor(e, t, n, s = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = s;
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
      Wt.fromBufferAttribute(this, t), Wt.applyMatrix4(e), this.setXYZ(t, Wt.x, Wt.y, Wt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Wt.fromBufferAttribute(this, t), Wt.applyNormalMatrix(e), this.setXYZ(t, Wt.x, Wt.y, Wt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Wt.fromBufferAttribute(this, t), Wt.transformDirection(e), this.setXYZ(t, Wt.x, Wt.y, Wt.z);
    return this;
  }
  setX(e, t) {
    return this.normalized && (t = pt(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = pt(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = pt(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = pt(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Rn(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Rn(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Rn(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Rn(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = pt(t, this.array), n = pt(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = pt(t, this.array), n = pt(n, this.array), s = pt(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = s, this;
  }
  setXYZW(e, t, n, s, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = pt(t, this.array), n = pt(n, this.array), s = pt(s, this.array), r = pt(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = s, this.data.array[e + 3] = r, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const s = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          t.push(this.data.array[s + r]);
      }
      return new Yt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new al(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const s = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          t.push(this.data.array[s + r]);
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
const Jc = /* @__PURE__ */ new U(), Zc = /* @__PURE__ */ new mt(), Qc = /* @__PURE__ */ new mt(), xy = /* @__PURE__ */ new U(), eu = /* @__PURE__ */ new nt(), Nr = /* @__PURE__ */ new U(), ua = /* @__PURE__ */ new Ln(), tu = /* @__PURE__ */ new nt(), da = /* @__PURE__ */ new xo();
class Ey extends $e {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = Bl, this.bindMatrix = new nt(), this.bindMatrixInverse = new nt(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new Xn()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, Nr), this.boundingBox.expandByPoint(Nr);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new Ln()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, Nr), this.boundingSphere.expandByPoint(Nr);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, s = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), ua.copy(this.boundingSphere), ua.applyMatrix4(s), e.ray.intersectsSphere(ua) !== !1 && (tu.copy(s).invert(), da.copy(e.ray).applyMatrix4(tu), !(this.boundingBox !== null && da.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, da)));
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
    const e = new mt(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, s = t.count; n < s; n++) {
      e.fromBufferAttribute(t, n);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === Bl ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === wp ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, s = this.geometry;
    Zc.fromBufferAttribute(s.attributes.skinIndex, e), Qc.fromBufferAttribute(s.attributes.skinWeight, e), Jc.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const o = Qc.getComponent(r);
      if (o !== 0) {
        const a = Zc.getComponent(r);
        eu.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(xy.copy(Jc).applyMatrix4(eu), o);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
  boneTransform(e, t) {
    return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."), this.applyBoneTransform(e, t);
  }
}
class Vd extends Et {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class Sy extends Ft {
  constructor(e = null, t = 1, n = 1, s, r, o, a, l, c = Ut, u = Ut, d, h) {
    super(null, o, a, l, c, u, s, r, d, h), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const nu = /* @__PURE__ */ new nt(), My = /* @__PURE__ */ new nt();
class ll {
  constructor(e = [], t = []) {
    this.uuid = yn(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, s = this.bones.length; n < s; n++)
        this.boneInverses.push(new nt());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new nt();
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
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, s = this.boneTexture;
    for (let r = 0, o = e.length; r < o; r++) {
      const a = e[r] ? e[r].matrixWorld : My;
      nu.multiplyMatrices(a, t[r]), nu.toArray(n, r * 16);
    }
    s !== null && (s.needsUpdate = !0);
  }
  clone() {
    return new ll(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new Sy(t, e, e, dn, Gn);
    return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const s = this.bones[t];
      if (s.name === e)
        return s;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, s = e.bones.length; n < s; n++) {
      const r = e.bones[n];
      let o = t[r];
      o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), o = new Vd()), this.bones.push(o), this.boneInverses.push(new nt().fromArray(e.boneInverses[n]));
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
    for (let s = 0, r = t.length; s < r; s++) {
      const o = t[s];
      e.bones.push(o.uuid);
      const a = n[s];
      e.boneInverses.push(a.toArray());
    }
    return e;
  }
}
class Oa extends Yt {
  constructor(e, t, n, s = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = s;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
const as = /* @__PURE__ */ new nt(), iu = /* @__PURE__ */ new nt(), Or = [], su = /* @__PURE__ */ new Xn(), Ay = /* @__PURE__ */ new nt(), ks = /* @__PURE__ */ new $e(), zs = /* @__PURE__ */ new Ln();
class Ty extends $e {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new Oa(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let s = 0; s < n; s++)
      this.setMatrixAt(s, Ay);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new Xn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, as), su.copy(e.boundingBox).applyMatrix4(as), this.boundingBox.union(su);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Ln()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, as), zs.copy(e.boundingSphere).applyMatrix4(as), this.boundingSphere.union(zs);
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
    const n = this.matrixWorld, s = this.count;
    if (ks.geometry = this.geometry, ks.material = this.material, ks.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), zs.copy(this.boundingSphere), zs.applyMatrix4(n), e.ray.intersectsSphere(zs) !== !1))
      for (let r = 0; r < s; r++) {
        this.getMatrixAt(r, as), iu.multiplyMatrices(n, as), ks.matrixWorld = iu, ks.raycast(e, Or);
        for (let o = 0, a = Or.length; o < a; o++) {
          const l = Or[o];
          l.instanceId = r, l.object = this, t.push(l);
        }
        Or.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new Oa(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
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
class kd extends Cn {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new je(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const ru = /* @__PURE__ */ new U(), ou = /* @__PURE__ */ new U(), au = /* @__PURE__ */ new nt(), ha = /* @__PURE__ */ new xo(), Fr = /* @__PURE__ */ new Ln();
class cl extends Et {
  constructor(e = new Sn(), t = new kd()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let s = 1, r = t.count; s < r; s++)
        ru.fromBufferAttribute(t, s - 1), ou.fromBufferAttribute(t, s), n[s] = n[s - 1], n[s] += ru.distanceTo(ou);
      e.setAttribute("lineDistance", new fn(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, s = this.matrixWorld, r = e.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Fr.copy(n.boundingSphere), Fr.applyMatrix4(s), Fr.radius += r, e.ray.intersectsSphere(Fr) === !1) return;
    au.copy(s).invert(), ha.copy(e.ray).applyMatrix4(au);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = new U(), u = new U(), d = new U(), h = new U(), f = this.isLineSegments ? 2 : 1, g = n.index, p = n.attributes.position;
    if (g !== null) {
      const m = Math.max(0, o.start), x = Math.min(g.count, o.start + o.count);
      for (let v = m, b = x - 1; v < b; v += f) {
        const R = g.getX(v), A = g.getX(v + 1);
        if (c.fromBufferAttribute(p, R), u.fromBufferAttribute(p, A), ha.distanceSqToSegment(c, u, h, d) > l) continue;
        h.applyMatrix4(this.matrixWorld);
        const H = e.ray.origin.distanceTo(h);
        H < e.near || H > e.far || t.push({
          distance: H,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: d.clone().applyMatrix4(this.matrixWorld),
          index: v,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const m = Math.max(0, o.start), x = Math.min(p.count, o.start + o.count);
      for (let v = m, b = x - 1; v < b; v += f) {
        if (c.fromBufferAttribute(p, v), u.fromBufferAttribute(p, v + 1), ha.distanceSqToSegment(c, u, h, d) > l) continue;
        h.applyMatrix4(this.matrixWorld);
        const A = e.ray.origin.distanceTo(h);
        A < e.near || A > e.far || t.push({
          distance: A,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: d.clone().applyMatrix4(this.matrixWorld),
          index: v,
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
      const s = t[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = s.length; r < o; r++) {
          const a = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
const lu = /* @__PURE__ */ new U(), cu = /* @__PURE__ */ new U();
class by extends cl {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let s = 0, r = t.count; s < r; s += 2)
        lu.fromBufferAttribute(t, s), cu.fromBufferAttribute(t, s + 1), n[s] = s === 0 ? 0 : n[s - 1], n[s + 1] = n[s] + lu.distanceTo(cu);
      e.setAttribute("lineDistance", new fn(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class wy extends cl {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class zd extends Cn {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new je(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const uu = /* @__PURE__ */ new nt(), Fa = /* @__PURE__ */ new xo(), Br = /* @__PURE__ */ new Ln(), Vr = /* @__PURE__ */ new U();
class Ry extends Et {
  constructor(e = new Sn(), t = new zd()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, s = this.matrixWorld, r = e.params.Points.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Br.copy(n.boundingSphere), Br.applyMatrix4(s), Br.radius += r, e.ray.intersectsSphere(Br) === !1) return;
    uu.copy(s).invert(), Fa.copy(e.ray).applyMatrix4(uu);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = n.index, d = n.attributes.position;
    if (c !== null) {
      const h = Math.max(0, o.start), f = Math.min(c.count, o.start + o.count);
      for (let g = h, _ = f; g < _; g++) {
        const p = c.getX(g);
        Vr.fromBufferAttribute(d, p), du(Vr, p, l, s, e, t, this);
      }
    } else {
      const h = Math.max(0, o.start), f = Math.min(d.count, o.start + o.count);
      for (let g = h, _ = f; g < _; g++)
        Vr.fromBufferAttribute(d, g), du(Vr, g, l, s, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const s = t[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = s.length; r < o; r++) {
          const a = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
function du(i, e, t, n, s, r, o) {
  const a = Fa.distanceSqToPoint(i);
  if (a < t) {
    const l = new U();
    Fa.closestPointToPoint(i, l), l.applyMatrix4(n);
    const c = s.ray.origin.distanceTo(l);
    if (c < s.near || c > s.far) return;
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
class ho extends Sn {
  constructor(e = 1, t = 1, n = 1, s = 32, r = 1, o = !1, a = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: e,
      radiusBottom: t,
      height: n,
      radialSegments: s,
      heightSegments: r,
      openEnded: o,
      thetaStart: a,
      thetaLength: l
    };
    const c = this;
    s = Math.floor(s), r = Math.floor(r);
    const u = [], d = [], h = [], f = [];
    let g = 0;
    const _ = [], p = n / 2;
    let m = 0;
    x(), o === !1 && (e > 0 && v(!0), t > 0 && v(!1)), this.setIndex(u), this.setAttribute("position", new fn(d, 3)), this.setAttribute("normal", new fn(h, 3)), this.setAttribute("uv", new fn(f, 2));
    function x() {
      const b = new U(), R = new U();
      let A = 0;
      const w = (t - e) / n;
      for (let H = 0; H <= r; H++) {
        const E = [], T = H / r, G = T * (t - e) + e;
        for (let J = 0; J <= s; J++) {
          const le = J / s, C = le * l + a, P = Math.sin(C), D = Math.cos(C);
          R.x = G * P, R.y = -T * n + p, R.z = G * D, d.push(R.x, R.y, R.z), b.set(P, w, D).normalize(), h.push(b.x, b.y, b.z), f.push(le, 1 - T), E.push(g++);
        }
        _.push(E);
      }
      for (let H = 0; H < s; H++)
        for (let E = 0; E < r; E++) {
          const T = _[E][H], G = _[E + 1][H], J = _[E + 1][H + 1], le = _[E][H + 1];
          u.push(T, G, le), u.push(G, J, le), A += 6;
        }
      c.addGroup(m, A, 0), m += A;
    }
    function v(b) {
      const R = g, A = new ot(), w = new U();
      let H = 0;
      const E = b === !0 ? e : t, T = b === !0 ? 1 : -1;
      for (let J = 1; J <= s; J++)
        d.push(0, p * T, 0), h.push(0, T, 0), f.push(0.5, 0.5), g++;
      const G = g;
      for (let J = 0; J <= s; J++) {
        const C = J / s * l + a, P = Math.cos(C), D = Math.sin(C);
        w.x = E * D, w.y = p * T, w.z = E * P, d.push(w.x, w.y, w.z), h.push(0, T, 0), A.x = P * 0.5 + 0.5, A.y = D * 0.5 * T + 0.5, f.push(A.x, A.y), g++;
      }
      for (let J = 0; J < s; J++) {
        const le = R + J, C = G + J;
        b === !0 ? u.push(C, C + 1, le) : u.push(C + 1, C, le), H += 3;
      }
      c.addGroup(m, H, b === !0 ? 1 : 2), m += H;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ho(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Xt extends Cn {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new je(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new je(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = vd, this.normalScale = new ot(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class qn extends Xt {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new ot(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return Ht(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new je(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new je(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new je(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
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
function kr(i, e, t) {
  return !i || // let 'undefined' and 'null' pass
  !t && i.constructor === e ? i : typeof e.BYTES_PER_ELEMENT == "number" ? new e(i) : Array.prototype.slice.call(i);
}
function Cy(i) {
  return ArrayBuffer.isView(i) && !(i instanceof DataView);
}
function Ly(i) {
  function e(s, r) {
    return i[s] - i[r];
  }
  const t = i.length, n = new Array(t);
  for (let s = 0; s !== t; ++s) n[s] = s;
  return n.sort(e), n;
}
function hu(i, e, t) {
  const n = i.length, s = new i.constructor(n);
  for (let r = 0, o = 0; o !== n; ++r) {
    const a = t[r] * e;
    for (let l = 0; l !== e; ++l)
      s[o++] = i[a + l];
  }
  return s;
}
function Hd(i, e, t, n) {
  let s = 1, r = i[0];
  for (; r !== void 0 && r[n] === void 0; )
    r = i[s++];
  if (r === void 0) return;
  let o = r[n];
  if (o !== void 0)
    if (Array.isArray(o))
      do
        o = r[n], o !== void 0 && (e.push(r.time), t.push.apply(t, o)), r = i[s++];
      while (r !== void 0);
    else if (o.toArray !== void 0)
      do
        o = r[n], o !== void 0 && (e.push(r.time), o.toArray(t, t.length)), r = i[s++];
      while (r !== void 0);
    else
      do
        o = r[n], o !== void 0 && (e.push(r.time), t.push(o)), r = i[s++];
      while (r !== void 0);
}
class ur {
  constructor(e, t, n, s) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = s !== void 0 ? s : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, s = t[n], r = t[n - 1];
    e: {
      t: {
        let o;
        n: {
          i: if (!(e < s)) {
            for (let a = n + 2; ; ) {
              if (s === void 0) {
                if (e < r) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === a) break;
              if (r = s, s = t[++n], e < s)
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
              if (s = r, r = t[--n - 1], e >= r)
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
        if (s = t[n], r = t[n - 1], r === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (s === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, r, s);
    }
    return this.interpolate_(n, r, e, s);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, s = this.valueSize, r = e * s;
    for (let o = 0; o !== s; ++o)
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
class Py extends ur {
  constructor(e, t, n, s) {
    super(e, t, n, s), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: ds,
      endingEnd: ds
    };
  }
  intervalChanged_(e, t, n) {
    const s = this.parameterPositions;
    let r = e - 2, o = e + 1, a = s[r], l = s[o];
    if (a === void 0)
      switch (this.getSettings_().endingStart) {
        case hs:
          r = e, a = 2 * t - n;
          break;
        case ro:
          r = s.length - 2, a = t + s[r] - s[r + 1];
          break;
        default:
          r = e, a = n;
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case hs:
          o = e, l = 2 * n - t;
          break;
        case ro:
          o = 1, l = n + s[1] - s[0];
          break;
        default:
          o = e - 1, l = t;
      }
    const c = (n - t) * 0.5, u = this.valueSize;
    this._weightPrev = c / (t - a), this._weightNext = c / (l - n), this._offsetPrev = r * u, this._offsetNext = o * u;
  }
  interpolate_(e, t, n, s) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, u = this._offsetPrev, d = this._offsetNext, h = this._weightPrev, f = this._weightNext, g = (n - t) / (s - t), _ = g * g, p = _ * g, m = -h * p + 2 * h * _ - h * g, x = (1 + h) * p + (-1.5 - 2 * h) * _ + (-0.5 + h) * g + 1, v = (-1 - f) * p + (1.5 + f) * _ + 0.5 * g, b = f * p - f * _;
    for (let R = 0; R !== a; ++R)
      r[R] = m * o[u + R] + x * o[c + R] + v * o[l + R] + b * o[d + R];
    return r;
  }
}
class Gd extends ur {
  constructor(e, t, n, s) {
    super(e, t, n, s);
  }
  interpolate_(e, t, n, s) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, u = (n - t) / (s - t), d = 1 - u;
    for (let h = 0; h !== a; ++h)
      r[h] = o[c + h] * d + o[l + h] * u;
    return r;
  }
}
class Iy extends ur {
  constructor(e, t, n, s) {
    super(e, t, n, s);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Pn {
  constructor(e, t, n, s) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = kr(t, this.TimeBufferType), this.values = kr(n, this.ValueBufferType), this.setInterpolation(s || this.DefaultInterpolation);
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
        times: kr(e.times, Array),
        values: kr(e.values, Array)
      };
      const s = e.getInterpolation();
      s !== e.DefaultInterpolation && (n.interpolation = s);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Iy(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Gd(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Py(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case tr:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Ms:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case ko:
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
        return tr;
      case this.InterpolantFactoryMethodLinear:
        return Ms;
      case this.InterpolantFactoryMethodSmooth:
        return ko;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  // move all keyframes either forwards or backwards in time
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, s = t.length; n !== s; ++n)
        t[n] += e;
    }
    return this;
  }
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, s = t.length; n !== s; ++n)
        t[n] *= e;
    }
    return this;
  }
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim(e, t) {
    const n = this.times, s = n.length;
    let r = 0, o = s - 1;
    for (; r !== s && n[r] < e; )
      ++r;
    for (; o !== -1 && n[o] > t; )
      --o;
    if (++o, r !== 0 || o !== s) {
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
    const n = this.times, s = this.values, r = n.length;
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
    if (s !== void 0 && Cy(s))
      for (let a = 0, l = s.length; a !== l; ++a) {
        const c = s[a];
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
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), s = this.getInterpolation() === ko, r = e.length - 1;
    let o = 1;
    for (let a = 1; a < r; ++a) {
      let l = !1;
      const c = e[a], u = e[a + 1];
      if (c !== u && (a !== 1 || c !== e[0]))
        if (s)
          l = !0;
        else {
          const d = a * n, h = d - n, f = d + n;
          for (let g = 0; g !== n; ++g) {
            const _ = t[d + g];
            if (_ !== t[h + g] || _ !== t[f + g]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (a !== o) {
          e[o] = e[a];
          const d = a * n, h = o * n;
          for (let f = 0; f !== n; ++f)
            t[h + f] = t[d + f];
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
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, s = new n(this.name, e, t);
    return s.createInterpolant = this.createInterpolant, s;
  }
}
Pn.prototype.TimeBufferType = Float32Array;
Pn.prototype.ValueBufferType = Float32Array;
Pn.prototype.DefaultInterpolation = Ms;
class Ps extends Pn {
}
Ps.prototype.ValueTypeName = "bool";
Ps.prototype.ValueBufferType = Array;
Ps.prototype.DefaultInterpolation = tr;
Ps.prototype.InterpolantFactoryMethodLinear = void 0;
Ps.prototype.InterpolantFactoryMethodSmooth = void 0;
class Wd extends Pn {
}
Wd.prototype.ValueTypeName = "color";
class bs extends Pn {
}
bs.prototype.ValueTypeName = "number";
class Dy extends ur {
  constructor(e, t, n, s) {
    super(e, t, n, s);
  }
  interpolate_(e, t, n, s) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = (n - t) / (s - t);
    let c = e * a;
    for (let u = c + a; c !== u; c += 4)
      xn.slerpFlat(r, 0, o, c - a, o, c, l);
    return r;
  }
}
class Vi extends Pn {
  InterpolantFactoryMethodLinear(e) {
    return new Dy(this.times, this.values, this.getValueSize(), e);
  }
}
Vi.prototype.ValueTypeName = "quaternion";
Vi.prototype.DefaultInterpolation = Ms;
Vi.prototype.InterpolantFactoryMethodSmooth = void 0;
class Is extends Pn {
}
Is.prototype.ValueTypeName = "string";
Is.prototype.ValueBufferType = Array;
Is.prototype.DefaultInterpolation = tr;
Is.prototype.InterpolantFactoryMethodLinear = void 0;
Is.prototype.InterpolantFactoryMethodSmooth = void 0;
class ws extends Pn {
}
ws.prototype.ValueTypeName = "vector";
class Ba {
  constructor(e, t = -1, n, s = tl) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = s, this.uuid = yn(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, s = 1 / (e.fps || 1);
    for (let o = 0, a = n.length; o !== a; ++o)
      t.push(Ny(n[o]).scale(s));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return r.uuid = e.uuid, r;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, s = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let r = 0, o = n.length; r !== o; ++r)
      t.push(Pn.toJSON(n[r]));
    return s;
  }
  static CreateFromMorphTargetSequence(e, t, n, s) {
    const r = t.length, o = [];
    for (let a = 0; a < r; a++) {
      let l = [], c = [];
      l.push(
        (a + r - 1) % r,
        a,
        (a + 1) % r
      ), c.push(0, 1, 0);
      const u = Ly(l);
      l = hu(l, 1, u), c = hu(c, 1, u), !s && l[0] === 0 && (l.push(r), c.push(c[0])), o.push(
        new bs(
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
      const s = e;
      n = s.geometry && s.geometry.animations || s.animations;
    }
    for (let s = 0; s < n.length; s++)
      if (n[s].name === t)
        return n[s];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const s = {}, r = /^([\w-]*?)([\d]+)$/;
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], u = c.name.match(r);
      if (u && u.length > 1) {
        const d = u[1];
        let h = s[d];
        h || (s[d] = h = []), h.push(c);
      }
    }
    const o = [];
    for (const a in s)
      o.push(this.CreateFromMorphTargetSequence(a, s[a], t, n));
    return o;
  }
  // parse the animation.hierarchy format
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(d, h, f, g, _) {
      if (f.length !== 0) {
        const p = [], m = [];
        Hd(f, p, m, g), p.length !== 0 && _.push(new d(h, p, m));
      }
    }, s = [], r = e.name || "default", o = e.fps || 30, a = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let d = 0; d < c.length; d++) {
      const h = c[d].keys;
      if (!(!h || h.length === 0))
        if (h[0].morphTargets) {
          const f = {};
          let g;
          for (g = 0; g < h.length; g++)
            if (h[g].morphTargets)
              for (let _ = 0; _ < h[g].morphTargets.length; _++)
                f[h[g].morphTargets[_]] = -1;
          for (const _ in f) {
            const p = [], m = [];
            for (let x = 0; x !== h[g].morphTargets.length; ++x) {
              const v = h[g];
              p.push(v.time), m.push(v.morphTarget === _ ? 1 : 0);
            }
            s.push(new bs(".morphTargetInfluence[" + _ + "]", p, m));
          }
          l = f.length * o;
        } else {
          const f = ".bones[" + t[d].name + "]";
          n(
            ws,
            f + ".position",
            h,
            "pos",
            s
          ), n(
            Vi,
            f + ".quaternion",
            h,
            "rot",
            s
          ), n(
            ws,
            f + ".scale",
            h,
            "scl",
            s
          );
        }
    }
    return s.length === 0 ? null : new this(r, l, s, a);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, s = e.length; n !== s; ++n) {
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
function Uy(i) {
  switch (i.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return bs;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return ws;
    case "color":
      return Wd;
    case "quaternion":
      return Vi;
    case "bool":
    case "boolean":
      return Ps;
    case "string":
      return Is;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + i);
}
function Ny(i) {
  if (i.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Uy(i.type);
  if (i.times === void 0) {
    const t = [], n = [];
    Hd(i.keys, t, n, "value"), i.times = t, i.values = n;
  }
  return e.parse !== void 0 ? e.parse(i) : new e(i.name, i.times, i.values, i.interpolation);
}
const ri = {
  enabled: !1,
  files: {},
  add: function(i, e) {
    this.enabled !== !1 && (this.files[i] = e);
  },
  get: function(i) {
    if (this.enabled !== !1)
      return this.files[i];
  },
  remove: function(i) {
    delete this.files[i];
  },
  clear: function() {
    this.files = {};
  }
};
class Oy {
  constructor(e, t, n) {
    const s = this;
    let r = !1, o = 0, a = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(u) {
      a++, r === !1 && s.onStart !== void 0 && s.onStart(u, o, a), r = !0;
    }, this.itemEnd = function(u) {
      o++, s.onProgress !== void 0 && s.onProgress(u, o, a), o === a && (r = !1, s.onLoad !== void 0 && s.onLoad());
    }, this.itemError = function(u) {
      s.onError !== void 0 && s.onError(u);
    }, this.resolveURL = function(u) {
      return l ? l(u) : u;
    }, this.setURLModifier = function(u) {
      return l = u, this;
    }, this.addHandler = function(u, d) {
      return c.push(u, d), this;
    }, this.removeHandler = function(u) {
      const d = c.indexOf(u);
      return d !== -1 && c.splice(d, 2), this;
    }, this.getHandler = function(u) {
      for (let d = 0, h = c.length; d < h; d += 2) {
        const f = c[d], g = c[d + 1];
        if (f.global && (f.lastIndex = 0), f.test(u))
          return g;
      }
      return null;
    };
  }
}
const Fy = /* @__PURE__ */ new Oy();
class Ds {
  constructor(e) {
    this.manager = e !== void 0 ? e : Fy, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(s, r) {
      n.load(e, s, t, r);
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
Ds.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Vn = {};
class By extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class jd extends Ds {
  constructor(e) {
    super(e);
  }
  load(e, t, n, s) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = ri.get(e);
    if (r !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(r), this.manager.itemEnd(e);
      }, 0), r;
    if (Vn[e] !== void 0) {
      Vn[e].push({
        onLoad: t,
        onProgress: n,
        onError: s
      });
      return;
    }
    Vn[e] = [], Vn[e].push({
      onLoad: t,
      onProgress: n,
      onError: s
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
        const u = Vn[e], d = c.body.getReader(), h = c.headers.get("Content-Length") || c.headers.get("X-File-Size"), f = h ? parseInt(h) : 0, g = f !== 0;
        let _ = 0;
        const p = new ReadableStream({
          start(m) {
            x();
            function x() {
              d.read().then(({ done: v, value: b }) => {
                if (v)
                  m.close();
                else {
                  _ += b.byteLength;
                  const R = new ProgressEvent("progress", { lengthComputable: g, loaded: _, total: f });
                  for (let A = 0, w = u.length; A < w; A++) {
                    const H = u[A];
                    H.onProgress && H.onProgress(R);
                  }
                  m.enqueue(b), x();
                }
              });
            }
          }
        });
        return new Response(p);
      } else
        throw new By(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
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
            const d = /charset="?([^;"\s]*)"?/i.exec(a), h = d && d[1] ? d[1].toLowerCase() : void 0, f = new TextDecoder(h);
            return c.arrayBuffer().then((g) => f.decode(g));
          }
      }
    }).then((c) => {
      ri.add(e, c);
      const u = Vn[e];
      delete Vn[e];
      for (let d = 0, h = u.length; d < h; d++) {
        const f = u[d];
        f.onLoad && f.onLoad(c);
      }
    }).catch((c) => {
      const u = Vn[e];
      if (u === void 0)
        throw this.manager.itemError(e), c;
      delete Vn[e];
      for (let d = 0, h = u.length; d < h; d++) {
        const f = u[d];
        f.onError && f.onError(c);
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
class Vy extends Ds {
  constructor(e) {
    super(e);
  }
  load(e, t, n, s) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, o = ri.get(e);
    if (o !== void 0)
      return r.manager.itemStart(e), setTimeout(function() {
        t && t(o), r.manager.itemEnd(e);
      }, 0), o;
    const a = nr("img");
    function l() {
      u(), ri.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function c(d) {
      u(), s && s(d), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function u() {
      a.removeEventListener("load", l, !1), a.removeEventListener("error", c, !1);
    }
    return a.addEventListener("load", l, !1), a.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(e), a.src = e, a;
  }
}
class ky extends Ds {
  constructor(e) {
    super(e);
  }
  load(e, t, n, s) {
    const r = new Ft(), o = new Vy(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
      r.image = a, r.needsUpdate = !0, t !== void 0 && t(r);
    }, n, s), r;
  }
}
class Mo extends Et {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new je(e), this.intensity = t;
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
const fa = /* @__PURE__ */ new nt(), fu = /* @__PURE__ */ new U(), pu = /* @__PURE__ */ new U();
class ul {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ot(512, 512), this.map = null, this.mapPass = null, this.matrix = new nt(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new sl(), this._frameExtents = new ot(1, 1), this._viewportCount = 1, this._viewports = [
      new mt(0, 0, 1, 1)
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
    fu.setFromMatrixPosition(e.matrixWorld), t.position.copy(fu), pu.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(pu), t.updateMatrixWorld(), fa.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(fa), n.set(
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
    ), n.multiply(fa);
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
class zy extends ul {
  constructor() {
    super(new qt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = As * 2 * e.angle * this.focus, s = this.mapSize.width / this.mapSize.height, r = e.distance || t.far;
    (n !== t.fov || s !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = s, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class Xd extends Mo {
  constructor(e, t, n = 0, s = Math.PI / 3, r = 0, o = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(Et.DEFAULT_UP), this.updateMatrix(), this.target = new Et(), this.distance = n, this.angle = s, this.penumbra = r, this.decay = o, this.map = null, this.shadow = new zy();
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
const mu = /* @__PURE__ */ new nt(), Hs = /* @__PURE__ */ new U(), pa = /* @__PURE__ */ new U();
class Hy extends ul {
  constructor() {
    super(new qt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new ot(4, 2), this._viewportCount = 6, this._viewports = [
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
      new mt(2, 1, 1, 1),
      // negative X
      new mt(0, 1, 1, 1),
      // positive Z
      new mt(3, 1, 1, 1),
      // negative Z
      new mt(1, 1, 1, 1),
      // positive Y
      new mt(3, 0, 1, 1),
      // negative Y
      new mt(1, 0, 1, 1)
    ], this._cubeDirections = [
      new U(1, 0, 0),
      new U(-1, 0, 0),
      new U(0, 0, 1),
      new U(0, 0, -1),
      new U(0, 1, 0),
      new U(0, -1, 0)
    ], this._cubeUps = [
      new U(0, 1, 0),
      new U(0, 1, 0),
      new U(0, 1, 0),
      new U(0, 1, 0),
      new U(0, 0, 1),
      new U(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, s = this.matrix, r = e.distance || n.far;
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), Hs.setFromMatrixPosition(e.matrixWorld), n.position.copy(Hs), pa.copy(n.position), pa.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(pa), n.updateMatrixWorld(), s.makeTranslation(-Hs.x, -Hs.y, -Hs.z), mu.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(mu);
  }
}
class qs extends Mo {
  constructor(e, t, n = 0, s = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = s, this.shadow = new Hy();
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
class Gy extends ul {
  constructor() {
    super(new rl(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class Va extends Mo {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Et.DEFAULT_UP), this.updateMatrix(), this.target = new Et(), this.shadow = new Gy();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Wy extends Mo {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class Js {
  static decodeText(e) {
    if (typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, s = e.length; n < s; n++)
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
class jy extends Ds {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, s) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, o = ri.get(e);
    if (o !== void 0) {
      if (r.manager.itemStart(e), o.then) {
        o.then((c) => {
          t && t(c), r.manager.itemEnd(e);
        }).catch((c) => {
          s && s(c);
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
      return ri.add(e, c), t && t(c), r.manager.itemEnd(e), c;
    }).catch(function(c) {
      s && s(c), ri.remove(e), r.manager.itemError(e), r.manager.itemEnd(e);
    });
    ri.add(e, l), r.manager.itemStart(e);
  }
}
class Xy {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = gu(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
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
      const t = gu();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function gu() {
  return (typeof performance > "u" ? Date : performance).now();
}
class qy {
  constructor(e, t, n) {
    this.binding = e, this.valueSize = n;
    let s, r, o;
    switch (t) {
      case "quaternion":
        s = this._slerp, r = this._slerpAdditive, o = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
        break;
      case "string":
      case "bool":
        s = this._select, r = this._select, o = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
        break;
      default:
        s = this._lerp, r = this._lerpAdditive, o = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5);
    }
    this._mixBufferRegion = s, this._mixBufferRegionAdditive = r, this._setIdentity = o, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
  }
  // accumulate data in the 'incoming' region into 'accu<i>'
  accumulate(e, t) {
    const n = this.buffer, s = this.valueSize, r = e * s + s;
    let o = this.cumulativeWeight;
    if (o === 0) {
      for (let a = 0; a !== s; ++a)
        n[r + a] = n[a];
      o = t;
    } else {
      o += t;
      const a = t / o;
      this._mixBufferRegion(n, r, 0, a, s);
    }
    this.cumulativeWeight = o;
  }
  // accumulate data in the 'incoming' region into 'add'
  accumulateAdditive(e) {
    const t = this.buffer, n = this.valueSize, s = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, s, 0, e, n), this.cumulativeWeightAdditive += e;
  }
  // apply the state of 'accu<i>' to the binding when accus differ
  apply(e) {
    const t = this.valueSize, n = this.buffer, s = e * t + t, r = this.cumulativeWeight, o = this.cumulativeWeightAdditive, a = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
      const l = t * this._origIndex;
      this._mixBufferRegion(
        n,
        s,
        l,
        1 - r,
        t
      );
    }
    o > 0 && this._mixBufferRegionAdditive(n, s, this._addIndex * t, 1, t);
    for (let l = t, c = t + t; l !== c; ++l)
      if (n[l] !== n[l + t]) {
        a.setValue(n, s);
        break;
      }
  }
  // remember the state of the bound property and copy it to both accus
  saveOriginalState() {
    const e = this.binding, t = this.buffer, n = this.valueSize, s = n * this._origIndex;
    e.getValue(t, s);
    for (let r = n, o = s; r !== o; ++r)
      t[r] = t[s + r % n];
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
  _select(e, t, n, s, r) {
    if (s >= 0.5)
      for (let o = 0; o !== r; ++o)
        e[t + o] = e[n + o];
  }
  _slerp(e, t, n, s) {
    xn.slerpFlat(e, t, e, t, e, n, s);
  }
  _slerpAdditive(e, t, n, s, r) {
    const o = this._workIndex * r;
    xn.multiplyQuaternionsFlat(e, o, e, t, e, n), xn.slerpFlat(e, t, e, t, e, o, s);
  }
  _lerp(e, t, n, s, r) {
    const o = 1 - s;
    for (let a = 0; a !== r; ++a) {
      const l = t + a;
      e[l] = e[l] * o + e[n + a] * s;
    }
  }
  _lerpAdditive(e, t, n, s, r) {
    for (let o = 0; o !== r; ++o) {
      const a = t + o;
      e[a] = e[a] + e[n + o] * s;
    }
  }
}
const dl = "\\[\\]\\.:\\/", Yy = new RegExp("[" + dl + "]", "g"), hl = "[^" + dl + "]", Ky = "[^" + dl.replace("\\.", "") + "]", $y = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", hl), Jy = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", Ky), Zy = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", hl), Qy = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", hl), ex = new RegExp(
  "^" + $y + Jy + Zy + Qy + "$"
), tx = ["material", "materials", "bones", "map"];
class nx {
  constructor(e, t, n) {
    const s = n || ht.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, s);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, s = this._bindings[n];
    s !== void 0 && s.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let s = this._targetGroup.nCachedObjects_, r = n.length; s !== r; ++s)
      n[s].setValue(e, t);
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
class ht {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || ht.parseTrackName(t), this.node = ht.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new ht.Composite(e, t, n) : new ht(e, t, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(Yy, "");
  }
  static parseTrackName(e) {
    const t = ex.exec(e);
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
    }, s = n.nodeName && n.nodeName.lastIndexOf(".");
    if (s !== void 0 && s !== -1) {
      const r = n.nodeName.substring(s + 1);
      tx.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, s), n.objectName = r);
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
      }, s = n(e.children);
      if (s)
        return s;
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
    for (let s = 0, r = n.length; s !== r; ++s)
      e[t++] = n[s];
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
    for (let s = 0, r = n.length; s !== r; ++s)
      n[s] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let s = 0, r = n.length; s !== r; ++s)
      n[s] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let s = 0, r = n.length; s !== r; ++s)
      n[s] = e[t++];
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
    const t = this.parsedPath, n = t.objectName, s = t.propertyName;
    let r = t.propertyIndex;
    if (e || (e = ht.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
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
    const o = e[s];
    if (o === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + s + " but it wasn't found.", e);
      return;
    }
    let a = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? a = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (a = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (r !== void 0) {
      if (s === "morphTargetInfluences") {
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
    } else o.fromArray !== void 0 && o.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (l = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = s;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][a];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
ht.Composite = nx;
ht.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
ht.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
ht.prototype.GetterByBindingType = [
  ht.prototype._getValue_direct,
  ht.prototype._getValue_array,
  ht.prototype._getValue_arrayElement,
  ht.prototype._getValue_toArray
];
ht.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    ht.prototype._setValue_direct,
    ht.prototype._setValue_direct_setNeedsUpdate,
    ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    ht.prototype._setValue_array,
    ht.prototype._setValue_array_setNeedsUpdate,
    ht.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    ht.prototype._setValue_arrayElement,
    ht.prototype._setValue_arrayElement_setNeedsUpdate,
    ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    ht.prototype._setValue_fromArray,
    ht.prototype._setValue_fromArray_setNeedsUpdate,
    ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class ix {
  constructor(e, t, n = null, s = t.blendMode) {
    this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = s;
    const r = t.tracks, o = r.length, a = new Array(o), l = {
      endingStart: ds,
      endingEnd: ds
    };
    for (let c = 0; c !== o; ++c) {
      const u = r[c].createInterpolant(null);
      a[c] = u, u.settings = l;
    }
    this._interpolantSettings = l, this._interpolants = a, this._propertyBindings = new Array(o), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Fp, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
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
      const s = this._clip.duration, r = e._clip.duration, o = r / s, a = s / r;
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
    const s = this._mixer, r = s.time, o = this.timeScale;
    let a = this._timeScaleInterpolant;
    a === null && (a = s._lendControlInterpolant(), this._timeScaleInterpolant = a);
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
  _update(e, t, n, s) {
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
        case Vp:
          for (let u = 0, d = l.length; u !== d; ++u)
            l[u].evaluate(o), c[u].accumulateAdditive(a);
          break;
        case tl:
        default:
          for (let u = 0, d = l.length; u !== d; ++u)
            l[u].evaluate(o), c[u].accumulate(s, a);
      }
    }
  }
  _updateWeight(e) {
    let t = 0;
    if (this.enabled) {
      t = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const s = n.evaluate(e)[0];
        t *= s, e > n.parameterPositions[1] && (this.stopFading(), s === 0 && (this.enabled = !1));
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
        const s = n.evaluate(e)[0];
        t *= s, e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = !0 : this.timeScale = t);
      }
    }
    return this._effectiveTimeScale = t, t;
  }
  _updateTime(e) {
    const t = this._clip.duration, n = this.loop;
    let s = this.time + e, r = this._loopCount;
    const o = n === Bp;
    if (e === 0)
      return r === -1 ? s : o && (r & 1) === 1 ? t - s : s;
    if (n === Op) {
      r === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
      e: {
        if (s >= t)
          s = t;
        else if (s < 0)
          s = 0;
        else {
          this.time = s;
          break e;
        }
        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = s, this._mixer.dispatchEvent({
          type: "finished",
          action: this,
          direction: e < 0 ? -1 : 1
        });
      }
    } else {
      if (r === -1 && (e >= 0 ? (r = 0, this._setEndings(!0, this.repetitions === 0, o)) : this._setEndings(this.repetitions === 0, !0, o)), s >= t || s < 0) {
        const a = Math.floor(s / t);
        s -= t * a, r += Math.abs(a);
        const l = this.repetitions - r;
        if (l <= 0)
          this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, s = e > 0 ? t : 0, this.time = s, this._mixer.dispatchEvent({
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
          this._loopCount = r, this.time = s, this._mixer.dispatchEvent({
            type: "loop",
            action: this,
            loopDelta: a
          });
        }
      } else
        this.time = s;
      if (o && (r & 1) === 1)
        return t - s;
    }
    return s;
  }
  _setEndings(e, t, n) {
    const s = this._interpolantSettings;
    n ? (s.endingStart = hs, s.endingEnd = hs) : (e ? s.endingStart = this.zeroSlopeAtStart ? hs : ds : s.endingStart = ro, t ? s.endingEnd = this.zeroSlopeAtEnd ? hs : ds : s.endingEnd = ro);
  }
  _scheduleFading(e, t, n) {
    const s = this._mixer, r = s.time;
    let o = this._weightInterpolant;
    o === null && (o = s._lendControlInterpolant(), this._weightInterpolant = o);
    const a = o.parameterPositions, l = o.sampleValues;
    return a[0] = r, l[0] = t, a[1] = r + e, l[1] = n, this;
  }
}
const sx = new Float32Array(1);
class ka extends zi {
  constructor(e) {
    super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(e, t) {
    const n = e._localRoot || this._root, s = e._clip.tracks, r = s.length, o = e._propertyBindings, a = e._interpolants, l = n.uuid, c = this._bindingsByRootAndName;
    let u = c[l];
    u === void 0 && (u = {}, c[l] = u);
    for (let d = 0; d !== r; ++d) {
      const h = s[d], f = h.name;
      let g = u[f];
      if (g !== void 0)
        ++g.referenceCount, o[d] = g;
      else {
        if (g = o[d], g !== void 0) {
          g._cacheIndex === null && (++g.referenceCount, this._addInactiveBinding(g, l, f));
          continue;
        }
        const _ = t && t._propertyBindings[d].binding.parsedPath;
        g = new qy(
          ht.create(n, f, _),
          h.ValueTypeName,
          h.getValueSize()
        ), ++g.referenceCount, this._addInactiveBinding(g, l, f), o[d] = g;
      }
      a[d].resultBuffer = g.buffer;
    }
  }
  _activateAction(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        const n = (e._localRoot || this._root).uuid, s = e._clip.uuid, r = this._actionsByClip[s];
        this._bindAction(
          e,
          r && r.knownActions[0]
        ), this._addInactiveAction(e, s, n);
      }
      const t = e._propertyBindings;
      for (let n = 0, s = t.length; n !== s; ++n) {
        const r = t[n];
        r.useCount++ === 0 && (this._lendBinding(r), r.saveOriginalState());
      }
      this._lendAction(e);
    }
  }
  _deactivateAction(e) {
    if (this._isActiveAction(e)) {
      const t = e._propertyBindings;
      for (let n = 0, s = t.length; n !== s; ++n) {
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
    const s = this._actions, r = this._actionsByClip;
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
    e._cacheIndex = s.length, s.push(e), o.actionByRoot[n] = e;
  }
  _removeInactiveAction(e) {
    const t = this._actions, n = t[t.length - 1], s = e._cacheIndex;
    n._cacheIndex = s, t[s] = n, t.pop(), e._cacheIndex = null;
    const r = e._clip.uuid, o = this._actionsByClip, a = o[r], l = a.knownActions, c = l[l.length - 1], u = e._byClipCacheIndex;
    c._byClipCacheIndex = u, l[u] = c, l.pop(), e._byClipCacheIndex = null;
    const d = a.actionByRoot, h = (e._localRoot || this._root).uuid;
    delete d[h], l.length === 0 && delete o[r], this._removeInactiveBindingsForAction(e);
  }
  _removeInactiveBindingsForAction(e) {
    const t = e._propertyBindings;
    for (let n = 0, s = t.length; n !== s; ++n) {
      const r = t[n];
      --r.referenceCount === 0 && this._removeInactiveBinding(r);
    }
  }
  _lendAction(e) {
    const t = this._actions, n = e._cacheIndex, s = this._nActiveActions++, r = t[s];
    e._cacheIndex = s, t[s] = e, r._cacheIndex = n, t[n] = r;
  }
  _takeBackAction(e) {
    const t = this._actions, n = e._cacheIndex, s = --this._nActiveActions, r = t[s];
    e._cacheIndex = s, t[s] = e, r._cacheIndex = n, t[n] = r;
  }
  // Memory management for PropertyMixer objects
  _addInactiveBinding(e, t, n) {
    const s = this._bindingsByRootAndName, r = this._bindings;
    let o = s[t];
    o === void 0 && (o = {}, s[t] = o), o[n] = e, e._cacheIndex = r.length, r.push(e);
  }
  _removeInactiveBinding(e) {
    const t = this._bindings, n = e.binding, s = n.rootNode.uuid, r = n.path, o = this._bindingsByRootAndName, a = o[s], l = t[t.length - 1], c = e._cacheIndex;
    l._cacheIndex = c, t[c] = l, t.pop(), delete a[r], Object.keys(a).length === 0 && delete o[s];
  }
  _lendBinding(e) {
    const t = this._bindings, n = e._cacheIndex, s = this._nActiveBindings++, r = t[s];
    e._cacheIndex = s, t[s] = e, r._cacheIndex = n, t[n] = r;
  }
  _takeBackBinding(e) {
    const t = this._bindings, n = e._cacheIndex, s = --this._nActiveBindings, r = t[s];
    e._cacheIndex = s, t[s] = e, r._cacheIndex = n, t[n] = r;
  }
  // Memory management of Interpolants for weight and time scale
  _lendControlInterpolant() {
    const e = this._controlInterpolants, t = this._nActiveControlInterpolants++;
    let n = e[t];
    return n === void 0 && (n = new Gd(
      new Float32Array(2),
      new Float32Array(2),
      1,
      sx
    ), n.__cacheIndex = t, e[t] = n), n;
  }
  _takeBackControlInterpolant(e) {
    const t = this._controlInterpolants, n = e.__cacheIndex, s = --this._nActiveControlInterpolants, r = t[s];
    e.__cacheIndex = s, t[s] = e, r.__cacheIndex = n, t[n] = r;
  }
  // return an action for a clip optionally using a custom root target
  // object (this method allocates a lot of dynamic memory in case a
  // previously unknown clip/root combination is specified)
  clipAction(e, t, n) {
    const s = t || this._root, r = s.uuid;
    let o = typeof e == "string" ? Ba.findByName(s, e) : e;
    const a = o !== null ? o.uuid : e, l = this._actionsByClip[a];
    let c = null;
    if (n === void 0 && (o !== null ? n = o.blendMode : n = tl), l !== void 0) {
      const d = l.actionByRoot[r];
      if (d !== void 0 && d.blendMode === n)
        return d;
      c = l.knownActions[0], o === null && (o = c._clip);
    }
    if (o === null) return null;
    const u = new ix(this, o, t, n);
    return this._bindAction(u, c), this._addInactiveAction(u, a, r), u;
  }
  // get an existing action
  existingAction(e, t) {
    const n = t || this._root, s = n.uuid, r = typeof e == "string" ? Ba.findByName(n, e) : e, o = r ? r.uuid : e, a = this._actionsByClip[o];
    return a !== void 0 && a.actionByRoot[s] || null;
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
    const t = this._actions, n = this._nActiveActions, s = this.time += e, r = Math.sign(e), o = this._accuIndex ^= 1;
    for (let c = 0; c !== n; ++c)
      t[c]._update(s, e, r, o);
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
    const t = this._actions, n = e.uuid, s = this._actionsByClip, r = s[n];
    if (r !== void 0) {
      const o = r.knownActions;
      for (let a = 0, l = o.length; a !== l; ++a) {
        const c = o[a];
        this._deactivateAction(c);
        const u = c._cacheIndex, d = t[t.length - 1];
        c._cacheIndex = null, c._byClipCacheIndex = null, d._cacheIndex = u, t[u] = d, t.pop(), this._removeInactiveBindingsForAction(c);
      }
      delete s[n];
    }
  }
  // free all resources specific to a particular root target object
  uncacheRoot(e) {
    const t = e.uuid, n = this._actionsByClip;
    for (const o in n) {
      const a = n[o].actionByRoot, l = a[t];
      l !== void 0 && (this._deactivateAction(l), this._removeInactiveAction(l));
    }
    const s = this._bindingsByRootAndName, r = s[t];
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
  revision: Qa
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Qa);
function _u(i, e) {
  if (e === kp)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), i;
  if (e === Pa || e === gd) {
    let t = i.getIndex();
    if (t === null) {
      const o = [], a = i.getAttribute("position");
      if (a !== void 0) {
        for (let l = 0; l < a.count; l++)
          o.push(l);
        i.setIndex(o), t = i.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), i;
    }
    const n = t.count - 2, s = [];
    if (e === Pa)
      for (let o = 1; o <= n; o++)
        s.push(t.getX(0)), s.push(t.getX(o)), s.push(t.getX(o + 1));
    else
      for (let o = 0; o < n; o++)
        o % 2 === 0 ? (s.push(t.getX(o)), s.push(t.getX(o + 1)), s.push(t.getX(o + 2))) : (s.push(t.getX(o + 2)), s.push(t.getX(o + 1)), s.push(t.getX(o)));
    s.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const r = i.clone();
    return r.setIndex(s), r.clearGroups(), r;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), i;
}
class za extends Ds {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new cx(t);
    }), this.register(function(t) {
      return new vx(t);
    }), this.register(function(t) {
      return new yx(t);
    }), this.register(function(t) {
      return new xx(t);
    }), this.register(function(t) {
      return new dx(t);
    }), this.register(function(t) {
      return new hx(t);
    }), this.register(function(t) {
      return new fx(t);
    }), this.register(function(t) {
      return new px(t);
    }), this.register(function(t) {
      return new lx(t);
    }), this.register(function(t) {
      return new mx(t);
    }), this.register(function(t) {
      return new ux(t);
    }), this.register(function(t) {
      return new _x(t);
    }), this.register(function(t) {
      return new gx(t);
    }), this.register(function(t) {
      return new ox(t);
    }), this.register(function(t) {
      return new Ex(t);
    }), this.register(function(t) {
      return new Sx(t);
    });
  }
  load(e, t, n, s) {
    const r = this;
    let o;
    if (this.resourcePath !== "")
      o = this.resourcePath;
    else if (this.path !== "") {
      const c = Js.extractUrlBase(e);
      o = Js.resolveURL(c, this.path);
    } else
      o = Js.extractUrlBase(e);
    this.manager.itemStart(e);
    const a = function(c) {
      s ? s(c) : console.error(c), r.manager.itemError(e), r.manager.itemEnd(e);
    }, l = new jd(this.manager);
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
  parse(e, t, n, s) {
    let r;
    const o = {}, a = {}, l = new TextDecoder();
    if (typeof e == "string")
      r = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (l.decode(new Uint8Array(e, 0, 4)) === qd) {
        try {
          o[rt.KHR_BINARY_GLTF] = new Mx(e);
        } catch (d) {
          s && s(d);
          return;
        }
        r = JSON.parse(o[rt.KHR_BINARY_GLTF].content);
      } else
        r = JSON.parse(l.decode(e));
    else
      r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      s && s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new Ox(r, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let u = 0; u < this.pluginCallbacks.length; u++) {
      const d = this.pluginCallbacks[u](c);
      d.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[d.name] = d, o[d.name] = !0;
    }
    if (r.extensionsUsed)
      for (let u = 0; u < r.extensionsUsed.length; ++u) {
        const d = r.extensionsUsed[u], h = r.extensionsRequired || [];
        switch (d) {
          case rt.KHR_MATERIALS_UNLIT:
            o[d] = new ax();
            break;
          case rt.KHR_DRACO_MESH_COMPRESSION:
            o[d] = new Ax(r, this.dracoLoader);
            break;
          case rt.KHR_TEXTURE_TRANSFORM:
            o[d] = new Tx();
            break;
          case rt.KHR_MESH_QUANTIZATION:
            o[d] = new bx();
            break;
          default:
            h.indexOf(d) >= 0 && a[d] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + d + '".');
        }
      }
    c.setExtensions(o), c.setPlugins(a), c.parse(n, s);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(s, r) {
      n.parse(e, t, s, r);
    });
  }
}
function rx() {
  let i = {};
  return {
    get: function(e) {
      return i[e];
    },
    add: function(e, t) {
      i[e] = t;
    },
    remove: function(e) {
      delete i[e];
    },
    removeAll: function() {
      i = {};
    }
  };
}
const rt = {
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
class ox {
  constructor(e) {
    this.parser = e, this.name = rt.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, s = t.length; n < s; n++) {
      const r = t[n];
      r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let s = t.cache.get(n);
    if (s) return s;
    const r = t.json, l = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e];
    let c;
    const u = new je(16777215);
    l.color !== void 0 && u.setRGB(l.color[0], l.color[1], l.color[2], Nt);
    const d = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new Va(u), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new qs(u), c.distance = d;
        break;
      case "spot":
        c = new Xd(u), c.distance = d, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, ni(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), s = Promise.resolve(c), t.cache.add(n, s), s;
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
class ax {
  constructor() {
    this.name = rt.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Ci;
  }
  extendParams(e, t, n) {
    const s = [];
    e.color = new je(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const o = r.baseColorFactor;
        e.color.setRGB(o[0], o[1], o[2], Nt), e.opacity = o[3];
      }
      r.baseColorTexture !== void 0 && s.push(n.assignTexture(e, "map", r.baseColorTexture, xt));
    }
    return Promise.all(s);
  }
}
class lx {
  constructor(e) {
    this.parser = e, this.name = rt.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const r = s.extensions[this.name].emissiveStrength;
    return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
  }
}
class cx {
  constructor(e) {
    this.parser = e, this.name = rt.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : qn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
      const a = o.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new ot(a, a);
    }
    return Promise.all(r);
  }
}
class ux {
  constructor(e) {
    this.parser = e, this.name = rt.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : qn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class dx {
  constructor(e) {
    this.parser = e, this.name = rt.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : qn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const r = [];
    t.sheenColor = new je(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const o = s.extensions[this.name];
    if (o.sheenColorFactor !== void 0) {
      const a = o.sheenColorFactor;
      t.sheenColor.setRGB(a[0], a[1], a[2], Nt);
    }
    return o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, xt)), o.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(r);
  }
}
class hx {
  constructor(e) {
    this.parser = e, this.name = rt.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : qn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && r.push(n.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(r);
  }
}
class fx {
  constructor(e) {
    this.parser = e, this.name = rt.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : qn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && r.push(n.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
    const a = o.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new je().setRGB(a[0], a[1], a[2], Nt), Promise.all(r);
  }
}
class px {
  constructor(e) {
    this.parser = e, this.name = rt.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : qn;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const r = s.extensions[this.name];
    return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class mx {
  constructor(e) {
    this.parser = e, this.name = rt.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : qn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && r.push(n.assignTexture(t, "specularIntensityMap", o.specularTexture));
    const a = o.specularColorFactor || [1, 1, 1];
    return t.specularColor = new je().setRGB(a[0], a[1], a[2], Nt), o.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", o.specularColorTexture, xt)), Promise.all(r);
  }
}
class gx {
  constructor(e) {
    this.parser = e, this.name = rt.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : qn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    return t.bumpScale = o.bumpFactor !== void 0 ? o.bumpFactor : 1, o.bumpTexture !== void 0 && r.push(n.assignTexture(t, "bumpMap", o.bumpTexture)), Promise.all(r);
  }
}
class _x {
  constructor(e) {
    this.parser = e, this.name = rt.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : qn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && r.push(n.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(r);
  }
}
class vx {
  constructor(e) {
    this.parser = e, this.name = rt.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, s = n.textures[e];
    if (!s.extensions || !s.extensions[this.name])
      return null;
    const r = s.extensions[this.name], o = t.options.ktx2Loader;
    if (!o) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, r.source, o);
  }
}
class yx {
  constructor(e) {
    this.parser = e, this.name = rt.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, s = n.json, r = s.textures[e];
    if (!r.extensions || !r.extensions[t])
      return null;
    const o = r.extensions[t], a = s.images[o.source];
    let l = n.textureLoader;
    if (a.uri) {
      const c = n.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, o.source, l);
      if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0)
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
class xx {
  constructor(e) {
    this.parser = e, this.name = rt.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, s = n.json, r = s.textures[e];
    if (!r.extensions || !r.extensions[t])
      return null;
    const o = r.extensions[t], a = s.images[o.source];
    let l = n.textureLoader;
    if (a.uri) {
      const c = n.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, o.source, l);
      if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0)
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
class Ex {
  constructor(e) {
    this.name = rt.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const s = n.extensions[this.name], r = this.parser.getDependency("buffer", s.buffer), o = this.parser.options.meshoptDecoder;
      if (!o || !o.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return r.then(function(a) {
        const l = s.byteOffset || 0, c = s.byteLength || 0, u = s.count, d = s.byteStride, h = new Uint8Array(a, l, c);
        return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(u, d, h, s.mode, s.filter).then(function(f) {
          return f.buffer;
        }) : o.ready.then(function() {
          const f = new ArrayBuffer(u * d);
          return o.decodeGltfBuffer(new Uint8Array(f), u, d, h, s.mode, s.filter), f;
        });
      });
    } else
      return null;
  }
}
class Sx {
  constructor(e) {
    this.name = rt.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const s = t.meshes[n.mesh];
    for (const c of s.primitives)
      if (c.mode !== cn.TRIANGLES && c.mode !== cn.TRIANGLE_STRIP && c.mode !== cn.TRIANGLE_FAN && c.mode !== void 0)
        return null;
    const o = n.extensions[this.name].attributes, a = [], l = {};
    for (const c in o)
      a.push(this.parser.getDependency("accessor", o[c]).then((u) => (l[c] = u, l[c])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((c) => {
      const u = c.pop(), d = u.isGroup ? u.children : [u], h = c[0].count, f = [];
      for (const g of d) {
        const _ = new nt(), p = new U(), m = new xn(), x = new U(1, 1, 1), v = new Ty(g.geometry, g.material, h);
        for (let b = 0; b < h; b++)
          l.TRANSLATION && p.fromBufferAttribute(l.TRANSLATION, b), l.ROTATION && m.fromBufferAttribute(l.ROTATION, b), l.SCALE && x.fromBufferAttribute(l.SCALE, b), v.setMatrixAt(b, _.compose(p, m, x));
        for (const b in l)
          if (b === "_COLOR_0") {
            const R = l[b];
            v.instanceColor = new Oa(R.array, R.itemSize, R.normalized);
          } else b !== "TRANSLATION" && b !== "ROTATION" && b !== "SCALE" && g.geometry.setAttribute(b, l[b]);
        Et.prototype.copy.call(v, g), this.parser.assignFinalMaterial(v), f.push(v);
      }
      return u.isGroup ? (u.clear(), u.add(...f), u) : f[0];
    }));
  }
}
const qd = "glTF", Gs = 12, vu = { JSON: 1313821514, BIN: 5130562 };
class Mx {
  constructor(e) {
    this.name = rt.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Gs), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== qd)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const s = this.header.length - Gs, r = new DataView(e, Gs);
    let o = 0;
    for (; o < s; ) {
      const a = r.getUint32(o, !0);
      o += 4;
      const l = r.getUint32(o, !0);
      if (o += 4, l === vu.JSON) {
        const c = new Uint8Array(e, Gs + o, a);
        this.content = n.decode(c);
      } else if (l === vu.BIN) {
        const c = Gs + o;
        this.body = e.slice(c, c + a);
      }
      o += a;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Ax {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = rt.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, s = this.dracoLoader, r = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, l = {}, c = {};
    for (const u in o) {
      const d = Ha[u] || u.toLowerCase();
      a[d] = o[u];
    }
    for (const u in e.attributes) {
      const d = Ha[u] || u.toLowerCase();
      if (o[u] !== void 0) {
        const h = n.accessors[e.attributes[u]], f = _s[h.componentType];
        c[d] = f.name, l[d] = h.normalized === !0;
      }
    }
    return t.getDependency("bufferView", r).then(function(u) {
      return new Promise(function(d, h) {
        s.decodeDracoFile(u, function(f) {
          for (const g in f.attributes) {
            const _ = f.attributes[g], p = l[g];
            p !== void 0 && (_.normalized = p);
          }
          d(f);
        }, a, c, Nt, h);
      });
    });
  }
}
class Tx {
  constructor() {
    this.name = rt.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class bx {
  constructor() {
    this.name = rt.KHR_MESH_QUANTIZATION;
  }
}
class Yd extends ur {
  constructor(e, t, n, s) {
    super(e, t, n, s);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, s = this.valueSize, r = e * s * 3 + s;
    for (let o = 0; o !== s; o++)
      t[o] = n[r + o];
    return t;
  }
  interpolate_(e, t, n, s) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = a * 2, c = a * 3, u = s - t, d = (n - t) / u, h = d * d, f = h * d, g = e * c, _ = g - c, p = -2 * f + 3 * h, m = f - h, x = 1 - p, v = m - h + d;
    for (let b = 0; b !== a; b++) {
      const R = o[_ + b + a], A = o[_ + b + l] * u, w = o[g + b + a], H = o[g + b] * u;
      r[b] = x * R + v * A + p * w + m * H;
    }
    return r;
  }
}
const wx = new xn();
class Rx extends Yd {
  interpolate_(e, t, n, s) {
    const r = super.interpolate_(e, t, n, s);
    return wx.fromArray(r).normalize().toArray(r), r;
  }
}
const cn = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, _s = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, yu = {
  9728: Ut,
  9729: $t,
  9984: La,
  9985: ld,
  9986: Jr,
  9987: Oi
}, xu = {
  33071: un,
  33648: so,
  10497: Es
}, ma = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Ha = {
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
}, Qn = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Cx = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: Ms,
  STEP: tr
}, ga = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Lx(i) {
  return i.DefaultMaterial === void 0 && (i.DefaultMaterial = new Xt({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: jn
  })), i.DefaultMaterial;
}
function yi(i, e, t) {
  for (const n in t.extensions)
    i[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function ni(i, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(i.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Px(i, e, t) {
  let n = !1, s = !1, r = !1;
  for (let c = 0, u = e.length; c < u; c++) {
    const d = e[c];
    if (d.POSITION !== void 0 && (n = !0), d.NORMAL !== void 0 && (s = !0), d.COLOR_0 !== void 0 && (r = !0), n && s && r) break;
  }
  if (!n && !s && !r) return Promise.resolve(i);
  const o = [], a = [], l = [];
  for (let c = 0, u = e.length; c < u; c++) {
    const d = e[c];
    if (n) {
      const h = d.POSITION !== void 0 ? t.getDependency("accessor", d.POSITION) : i.attributes.position;
      o.push(h);
    }
    if (s) {
      const h = d.NORMAL !== void 0 ? t.getDependency("accessor", d.NORMAL) : i.attributes.normal;
      a.push(h);
    }
    if (r) {
      const h = d.COLOR_0 !== void 0 ? t.getDependency("accessor", d.COLOR_0) : i.attributes.color;
      l.push(h);
    }
  }
  return Promise.all([
    Promise.all(o),
    Promise.all(a),
    Promise.all(l)
  ]).then(function(c) {
    const u = c[0], d = c[1], h = c[2];
    return n && (i.morphAttributes.position = u), s && (i.morphAttributes.normal = d), r && (i.morphAttributes.color = h), i.morphTargetsRelative = !0, i;
  });
}
function Ix(i, e) {
  if (i.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      i.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (i.morphTargetInfluences.length === t.length) {
      i.morphTargetDictionary = {};
      for (let n = 0, s = t.length; n < s; n++)
        i.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Dx(i) {
  let e;
  const t = i.extensions && i.extensions[rt.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + _a(t.attributes) : e = i.indices + ":" + _a(i.attributes) + ":" + i.mode, i.targets !== void 0)
    for (let n = 0, s = i.targets.length; n < s; n++)
      e += ":" + _a(i.targets[n]);
  return e;
}
function _a(i) {
  let e = "";
  const t = Object.keys(i).sort();
  for (let n = 0, s = t.length; n < s; n++)
    e += t[n] + ":" + i[t[n]] + ";";
  return e;
}
function Ga(i) {
  switch (i) {
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
function Ux(i) {
  return i.search(/\.jpe?g($|\?)/i) > 0 || i.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : i.search(/\.webp($|\?)/i) > 0 || i.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const Nx = new nt();
class Ox {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new rx(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, s = !1, r = -1;
    typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, s = navigator.userAgent.indexOf("Firefox") > -1, r = s ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || s && r < 98 ? this.textureLoader = new ky(this.options.manager) : this.textureLoader = new jy(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new jd(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, s = this.json, r = this.extensions;
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
        scene: o[0][s.scene || 0],
        scenes: o[0],
        animations: o[1],
        cameras: o[2],
        asset: s.asset,
        parser: n,
        userData: {}
      };
      return yi(r, a, s), ni(a, s), Promise.all(n._invokeAll(function(l) {
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
    for (let s = 0, r = t.length; s < r; s++) {
      const o = t[s].joints;
      for (let a = 0, l = o.length; a < l; a++)
        e[o[a]].isBone = !0;
    }
    for (let s = 0, r = e.length; s < r; s++) {
      const o = e[s];
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
    const s = n.clone(), r = (o, a) => {
      const l = this.associations.get(o);
      l != null && this.associations.set(a, l);
      for (const [c, u] of o.children.entries())
        r(u, a.children[c]);
    };
    return r(n, s), s.name += "_instance_" + e.uses[t]++, s;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const s = e(t[n]);
      if (s) return s;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let s = 0; s < t.length; s++) {
      const r = e(t[s]);
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
    let s = this.cache.get(n);
    if (!s) {
      switch (e) {
        case "scene":
          s = this.loadScene(t);
          break;
        case "node":
          s = this._invokeOne(function(r) {
            return r.loadNode && r.loadNode(t);
          });
          break;
        case "mesh":
          s = this._invokeOne(function(r) {
            return r.loadMesh && r.loadMesh(t);
          });
          break;
        case "accessor":
          s = this.loadAccessor(t);
          break;
        case "bufferView":
          s = this._invokeOne(function(r) {
            return r.loadBufferView && r.loadBufferView(t);
          });
          break;
        case "buffer":
          s = this.loadBuffer(t);
          break;
        case "material":
          s = this._invokeOne(function(r) {
            return r.loadMaterial && r.loadMaterial(t);
          });
          break;
        case "texture":
          s = this._invokeOne(function(r) {
            return r.loadTexture && r.loadTexture(t);
          });
          break;
        case "skin":
          s = this.loadSkin(t);
          break;
        case "animation":
          s = this._invokeOne(function(r) {
            return r.loadAnimation && r.loadAnimation(t);
          });
          break;
        case "camera":
          s = this.loadCamera(t);
          break;
        default:
          if (s = this._invokeOne(function(r) {
            return r != this && r.getDependency && r.getDependency(e, t);
          }), !s)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, s);
    }
    return s;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, s = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(s.map(function(r, o) {
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
      return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);
    const s = this.options;
    return new Promise(function(r, o) {
      n.load(Js.resolveURL(t.uri, s.path), r, void 0, function() {
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
      const s = t.byteLength || 0, r = t.byteOffset || 0;
      return n.slice(r, r + s);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, n = this.json, s = this.json.accessors[e];
    if (s.bufferView === void 0 && s.sparse === void 0) {
      const o = ma[s.type], a = _s[s.componentType], l = s.normalized === !0, c = new a(s.count * o);
      return Promise.resolve(new Yt(c, o, l));
    }
    const r = [];
    return s.bufferView !== void 0 ? r.push(this.getDependency("bufferView", s.bufferView)) : r.push(null), s.sparse !== void 0 && (r.push(this.getDependency("bufferView", s.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", s.sparse.values.bufferView))), Promise.all(r).then(function(o) {
      const a = o[0], l = ma[s.type], c = _s[s.componentType], u = c.BYTES_PER_ELEMENT, d = u * l, h = s.byteOffset || 0, f = s.bufferView !== void 0 ? n.bufferViews[s.bufferView].byteStride : void 0, g = s.normalized === !0;
      let _, p;
      if (f && f !== d) {
        const m = Math.floor(h / f), x = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + m + ":" + s.count;
        let v = t.cache.get(x);
        v || (_ = new c(a, m * f, s.count * f / u), v = new yy(_, f / u), t.cache.add(x, v)), p = new al(v, l, h % f / u, g);
      } else
        a === null ? _ = new c(s.count * l) : _ = new c(a, h, s.count * l), p = new Yt(_, l, g);
      if (s.sparse !== void 0) {
        const m = ma.SCALAR, x = _s[s.sparse.indices.componentType], v = s.sparse.indices.byteOffset || 0, b = s.sparse.values.byteOffset || 0, R = new x(o[1], v, s.sparse.count * m), A = new c(o[2], b, s.sparse.count * l);
        a !== null && (p = new Yt(p.array.slice(), p.itemSize, p.normalized));
        for (let w = 0, H = R.length; w < H; w++) {
          const E = R[w];
          if (p.setX(E, A[w * l]), l >= 2 && p.setY(E, A[w * l + 1]), l >= 3 && p.setZ(E, A[w * l + 2]), l >= 4 && p.setW(E, A[w * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return p;
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
    const s = this, r = this.json, o = r.textures[e], a = r.images[t], l = (a.uri || a.bufferView) + ":" + o.sampler;
    if (this.textureCache[l])
      return this.textureCache[l];
    const c = this.loadImageSource(t, n).then(function(u) {
      u.flipY = !1, u.name = o.name || a.name || "", u.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === !1 && (u.name = a.uri);
      const h = (r.samplers || {})[o.sampler] || {};
      return u.magFilter = yu[h.magFilter] || $t, u.minFilter = yu[h.minFilter] || Oi, u.wrapS = xu[h.wrapS] || Es, u.wrapT = xu[h.wrapT] || Es, s.associations.set(u, { textures: e }), u;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, s = this.json, r = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((d) => d.clone());
    const o = s.images[e], a = self.URL || self.webkitURL;
    let l = o.uri || "", c = !1;
    if (o.bufferView !== void 0)
      l = n.getDependency("bufferView", o.bufferView).then(function(d) {
        c = !0;
        const h = new Blob([d], { type: o.mimeType });
        return l = a.createObjectURL(h), l;
      });
    else if (o.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const u = Promise.resolve(l).then(function(d) {
      return new Promise(function(h, f) {
        let g = h;
        t.isImageBitmapLoader === !0 && (g = function(_) {
          const p = new Ft(_);
          p.needsUpdate = !0, h(p);
        }), t.load(Js.resolveURL(d, r.path), g, void 0, f);
      });
    }).then(function(d) {
      return c === !0 && a.revokeObjectURL(l), d.userData.mimeType = o.mimeType || Ux(o.uri), d;
    }).catch(function(d) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), d;
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
  assignTexture(e, t, n, s) {
    const r = this;
    return this.getDependency("texture", n.index).then(function(o) {
      if (!o) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (o = o.clone(), o.channel = n.texCoord), r.extensions[rt.KHR_TEXTURE_TRANSFORM]) {
        const a = n.extensions !== void 0 ? n.extensions[rt.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const l = r.associations.get(o);
          o = r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), r.associations.set(o, l);
        }
      }
      return s !== void 0 && (o.colorSpace = s), e[t] = o, o;
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
    const s = t.attributes.tangent === void 0, r = t.attributes.color !== void 0, o = t.attributes.normal === void 0;
    if (e.isPoints) {
      const a = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new zd(), Cn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = !1, this.cache.add(a, l)), n = l;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new kd(), Cn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(a, l)), n = l;
    }
    if (s || r || o) {
      let a = "ClonedMaterial:" + n.uuid + ":";
      s && (a += "derivative-tangents:"), r && (a += "vertex-colors:"), o && (a += "flat-shading:");
      let l = this.cache.get(a);
      l || (l = n.clone(), r && (l.vertexColors = !0), o && (l.flatShading = !0), s && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(a, l), this.associations.set(l, this.associations.get(n))), n = l;
    }
    e.material = n;
  }
  getMaterialType() {
    return Xt;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, s = this.extensions, r = n.materials[e];
    let o;
    const a = {}, l = r.extensions || {}, c = [];
    if (l[rt.KHR_MATERIALS_UNLIT]) {
      const d = s[rt.KHR_MATERIALS_UNLIT];
      o = d.getMaterialType(), c.push(d.extendParams(a, r, t));
    } else {
      const d = r.pbrMetallicRoughness || {};
      if (a.color = new je(1, 1, 1), a.opacity = 1, Array.isArray(d.baseColorFactor)) {
        const h = d.baseColorFactor;
        a.color.setRGB(h[0], h[1], h[2], Nt), a.opacity = h[3];
      }
      d.baseColorTexture !== void 0 && c.push(t.assignTexture(a, "map", d.baseColorTexture, xt)), a.metalness = d.metallicFactor !== void 0 ? d.metallicFactor : 1, a.roughness = d.roughnessFactor !== void 0 ? d.roughnessFactor : 1, d.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(a, "metalnessMap", d.metallicRoughnessTexture)), c.push(t.assignTexture(a, "roughnessMap", d.metallicRoughnessTexture))), o = this._invokeOne(function(h) {
        return h.getMaterialType && h.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(h) {
        return h.extendMaterialParams && h.extendMaterialParams(e, a);
      })));
    }
    r.doubleSided === !0 && (a.side = wn);
    const u = r.alphaMode || ga.OPAQUE;
    if (u === ga.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, u === ga.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && o !== Ci && (c.push(t.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new ot(1, 1), r.normalTexture.scale !== void 0)) {
      const d = r.normalTexture.scale;
      a.normalScale.set(d, d);
    }
    if (r.occlusionTexture !== void 0 && o !== Ci && (c.push(t.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && o !== Ci) {
      const d = r.emissiveFactor;
      a.emissive = new je().setRGB(d[0], d[1], d[2], Nt);
    }
    return r.emissiveTexture !== void 0 && o !== Ci && c.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, xt)), Promise.all(c).then(function() {
      const d = new o(a);
      return r.name && (d.name = r.name), ni(d, r), t.associations.set(d, { materials: e }), r.extensions && yi(s, d, r), d;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = ht.sanitizeNodeName(e || "");
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
    const t = this, n = this.extensions, s = this.primitiveCache;
    function r(a) {
      return n[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(l) {
        return Eu(l, a, t);
      });
    }
    const o = [];
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], u = Dx(c), d = s[u];
      if (d)
        o.push(d.promise);
      else {
        let h;
        c.extensions && c.extensions[rt.KHR_DRACO_MESH_COMPRESSION] ? h = r(c) : h = Eu(new Sn(), c, t), s[u] = { primitive: c, promise: h }, o.push(h);
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
    const t = this, n = this.json, s = this.extensions, r = n.meshes[e], o = r.primitives, a = [];
    for (let l = 0, c = o.length; l < c; l++) {
      const u = o[l].material === void 0 ? Lx(this.cache) : this.getDependency("material", o[l].material);
      a.push(u);
    }
    return a.push(t.loadGeometries(o)), Promise.all(a).then(function(l) {
      const c = l.slice(0, l.length - 1), u = l[l.length - 1], d = [];
      for (let f = 0, g = u.length; f < g; f++) {
        const _ = u[f], p = o[f];
        let m;
        const x = c[f];
        if (p.mode === cn.TRIANGLES || p.mode === cn.TRIANGLE_STRIP || p.mode === cn.TRIANGLE_FAN || p.mode === void 0)
          m = r.isSkinnedMesh === !0 ? new Ey(_, x) : new $e(_, x), m.isSkinnedMesh === !0 && m.normalizeSkinWeights(), p.mode === cn.TRIANGLE_STRIP ? m.geometry = _u(m.geometry, gd) : p.mode === cn.TRIANGLE_FAN && (m.geometry = _u(m.geometry, Pa));
        else if (p.mode === cn.LINES)
          m = new by(_, x);
        else if (p.mode === cn.LINE_STRIP)
          m = new cl(_, x);
        else if (p.mode === cn.LINE_LOOP)
          m = new wy(_, x);
        else if (p.mode === cn.POINTS)
          m = new Ry(_, x);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
        Object.keys(m.geometry.morphAttributes).length > 0 && Ix(m, r), m.name = t.createUniqueName(r.name || "mesh_" + e), ni(m, r), p.extensions && yi(s, m, p), t.assignFinalMaterial(m), d.push(m);
      }
      for (let f = 0, g = d.length; f < g; f++)
        t.associations.set(d[f], {
          meshes: e,
          primitives: f
        });
      if (d.length === 1)
        return r.extensions && yi(s, d[0], r), d[0];
      const h = new Li();
      r.extensions && yi(s, h, r), t.associations.set(h, { meshes: e });
      for (let f = 0, g = d.length; f < g; f++)
        h.add(d[f]);
      return h;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], s = n[n.type];
    if (!s) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new qt(dm.radToDeg(s.yfov), s.aspectRatio || 1, s.znear || 1, s.zfar || 2e6) : n.type === "orthographic" && (t = new rl(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)), n.name && (t.name = this.createUniqueName(n.name)), ni(t, n), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let s = 0, r = t.joints.length; s < r; s++)
      n.push(this._loadNodeShallow(t.joints[s]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(s) {
      const r = s.pop(), o = s, a = [], l = [];
      for (let c = 0, u = o.length; c < u; c++) {
        const d = o[c];
        if (d) {
          a.push(d);
          const h = new nt();
          r !== null && h.fromArray(r.array, c * 16), l.push(h);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new ll(a, l);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, n = this, s = t.animations[e], r = s.name ? s.name : "animation_" + e, o = [], a = [], l = [], c = [], u = [];
    for (let d = 0, h = s.channels.length; d < h; d++) {
      const f = s.channels[d], g = s.samplers[f.sampler], _ = f.target, p = _.node, m = s.parameters !== void 0 ? s.parameters[g.input] : g.input, x = s.parameters !== void 0 ? s.parameters[g.output] : g.output;
      _.node !== void 0 && (o.push(this.getDependency("node", p)), a.push(this.getDependency("accessor", m)), l.push(this.getDependency("accessor", x)), c.push(g), u.push(_));
    }
    return Promise.all([
      Promise.all(o),
      Promise.all(a),
      Promise.all(l),
      Promise.all(c),
      Promise.all(u)
    ]).then(function(d) {
      const h = d[0], f = d[1], g = d[2], _ = d[3], p = d[4], m = [];
      for (let x = 0, v = h.length; x < v; x++) {
        const b = h[x], R = f[x], A = g[x], w = _[x], H = p[x];
        if (b === void 0) continue;
        b.updateMatrix && b.updateMatrix();
        const E = n._createAnimationTracks(b, R, A, w, H);
        if (E)
          for (let T = 0; T < E.length; T++)
            m.push(E[T]);
      }
      return new Ba(r, void 0, m);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, s = t.nodes[e];
    return s.mesh === void 0 ? null : n.getDependency("mesh", s.mesh).then(function(r) {
      const o = n._getNodeRef(n.meshCache, s.mesh, r);
      return s.weights !== void 0 && o.traverse(function(a) {
        if (a.isMesh)
          for (let l = 0, c = s.weights.length; l < c; l++)
            a.morphTargetInfluences[l] = s.weights[l];
      }), o;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this, s = t.nodes[e], r = n._loadNodeShallow(e), o = [], a = s.children || [];
    for (let c = 0, u = a.length; c < u; c++)
      o.push(n.getDependency("node", a[c]));
    const l = s.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", s.skin);
    return Promise.all([
      r,
      Promise.all(o),
      l
    ]).then(function(c) {
      const u = c[0], d = c[1], h = c[2];
      h !== null && u.traverse(function(f) {
        f.isSkinnedMesh && f.bind(h, Nx);
      });
      for (let f = 0, g = d.length; f < g; f++)
        u.add(d[f]);
      return u;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, s = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const r = t.nodes[e], o = r.name ? s.createUniqueName(r.name) : "", a = [], l = s._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(e);
    });
    return l && a.push(l), r.camera !== void 0 && a.push(s.getDependency("camera", r.camera).then(function(c) {
      return s._getNodeRef(s.cameraCache, r.camera, c);
    })), s._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(e);
    }).forEach(function(c) {
      a.push(c);
    }), this.nodeCache[e] = Promise.all(a).then(function(c) {
      let u;
      if (r.isBone === !0 ? u = new Vd() : c.length > 1 ? u = new Li() : c.length === 1 ? u = c[0] : u = new Et(), u !== c[0])
        for (let d = 0, h = c.length; d < h; d++)
          u.add(c[d]);
      if (r.name && (u.userData.name = r.name, u.name = o), ni(u, r), r.extensions && yi(n, u, r), r.matrix !== void 0) {
        const d = new nt();
        d.fromArray(r.matrix), u.applyMatrix4(d);
      } else
        r.translation !== void 0 && u.position.fromArray(r.translation), r.rotation !== void 0 && u.quaternion.fromArray(r.rotation), r.scale !== void 0 && u.scale.fromArray(r.scale);
      return s.associations.has(u) || s.associations.set(u, {}), s.associations.get(u).nodes = e, u;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], s = this, r = new Li();
    n.name && (r.name = s.createUniqueName(n.name)), ni(r, n), n.extensions && yi(t, r, n);
    const o = n.nodes || [], a = [];
    for (let l = 0, c = o.length; l < c; l++)
      a.push(s.getDependency("node", o[l]));
    return Promise.all(a).then(function(l) {
      for (let u = 0, d = l.length; u < d; u++)
        r.add(l[u]);
      const c = (u) => {
        const d = /* @__PURE__ */ new Map();
        for (const [h, f] of s.associations)
          (h instanceof Cn || h instanceof Ft) && d.set(h, f);
        return u.traverse((h) => {
          const f = s.associations.get(h);
          f != null && d.set(h, f);
        }), d;
      };
      return s.associations = c(r), r;
    });
  }
  _createAnimationTracks(e, t, n, s, r) {
    const o = [], a = e.name ? e.name : e.uuid, l = [];
    Qn[r.path] === Qn.weights ? e.traverse(function(h) {
      h.morphTargetInfluences && l.push(h.name ? h.name : h.uuid);
    }) : l.push(a);
    let c;
    switch (Qn[r.path]) {
      case Qn.weights:
        c = bs;
        break;
      case Qn.rotation:
        c = Vi;
        break;
      case Qn.position:
      case Qn.scale:
        c = ws;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = bs;
            break;
          case 2:
          case 3:
          default:
            c = ws;
            break;
        }
        break;
    }
    const u = s.interpolation !== void 0 ? Cx[s.interpolation] : Ms, d = this._getArrayFromAccessor(n);
    for (let h = 0, f = l.length; h < f; h++) {
      const g = new c(
        l[h] + "." + Qn[r.path],
        t.array,
        d,
        u
      );
      s.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), o.push(g);
    }
    return o;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = Ga(t.constructor), s = new Float32Array(t.length);
      for (let r = 0, o = t.length; r < o; r++)
        s[r] = t[r] * n;
      t = s;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const s = this instanceof Vi ? Rx : Yd;
      return new s(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function Fx(i, e, t) {
  const n = e.attributes, s = new Xn();
  if (n.POSITION !== void 0) {
    const a = t.json.accessors[n.POSITION], l = a.min, c = a.max;
    if (l !== void 0 && c !== void 0) {
      if (s.set(
        new U(l[0], l[1], l[2]),
        new U(c[0], c[1], c[2])
      ), a.normalized) {
        const u = Ga(_s[a.componentType]);
        s.min.multiplyScalar(u), s.max.multiplyScalar(u);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const r = e.targets;
  if (r !== void 0) {
    const a = new U(), l = new U();
    for (let c = 0, u = r.length; c < u; c++) {
      const d = r[c];
      if (d.POSITION !== void 0) {
        const h = t.json.accessors[d.POSITION], f = h.min, g = h.max;
        if (f !== void 0 && g !== void 0) {
          if (l.setX(Math.max(Math.abs(f[0]), Math.abs(g[0]))), l.setY(Math.max(Math.abs(f[1]), Math.abs(g[1]))), l.setZ(Math.max(Math.abs(f[2]), Math.abs(g[2]))), h.normalized) {
            const _ = Ga(_s[h.componentType]);
            l.multiplyScalar(_);
          }
          a.max(l);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    s.expandByVector(a);
  }
  i.boundingBox = s;
  const o = new Ln();
  s.getCenter(o.center), o.radius = s.min.distanceTo(s.max) / 2, i.boundingSphere = o;
}
function Eu(i, e, t) {
  const n = e.attributes, s = [];
  function r(o, a) {
    return t.getDependency("accessor", o).then(function(l) {
      i.setAttribute(a, l);
    });
  }
  for (const o in n) {
    const a = Ha[o] || o.toLowerCase();
    a in i.attributes || s.push(r(n[o], a));
  }
  if (e.indices !== void 0 && !i.index) {
    const o = t.getDependency("accessor", e.indices).then(function(a) {
      i.setIndex(a);
    });
    s.push(o);
  }
  return ft.workingColorSpace !== Nt && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`), ni(i, e), Fx(i, e, t), Promise.all(s).then(function() {
    return e.targets !== void 0 ? Px(i, e.targets, t) : i;
  });
}
const Qr = {
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
function FM(i) {
  return Qr[i];
}
function Bx(i, e) {
  if (i.length === 0)
    return { time: 0 };
  if (i.length === 1)
    return i[0];
  let t = i[0], n = i[i.length - 1];
  for (let r = 0; r < i.length - 1; r++)
    if (e >= i[r].time && e <= i[r + 1].time) {
      t = i[r], n = i[r + 1];
      break;
    }
  const s = (e - t.time) / (n.time - t.time);
  return Vx(t, n, s);
}
function Vx(i, e, t) {
  const n = { time: i.time + (e.time - i.time) * t };
  return (i.leftArm || e.leftArm) && (n.leftArm = Su(i.leftArm, e.leftArm, t)), (i.rightArm || e.rightArm) && (n.rightArm = Su(i.rightArm, e.rightArm, t)), (i.head || e.head) && (n.head = kx(i.head, e.head, t)), (i.body || e.body) && (n.body = zx(i.body, e.body, t)), n;
}
function Su(i, e, t) {
  const n = { x: 0, y: 0, z: 0 };
  return {
    shoulderRotation: Zs(
      (i == null ? void 0 : i.shoulderRotation) || n,
      (e == null ? void 0 : e.shoulderRotation) || n,
      t
    ),
    elbowRotation: Zs(
      (i == null ? void 0 : i.elbowRotation) || n,
      (e == null ? void 0 : e.elbowRotation) || n,
      t
    ),
    wristRotation: Zs(
      (i == null ? void 0 : i.wristRotation) || n,
      (e == null ? void 0 : e.wristRotation) || n,
      t
    )
  };
}
function kx(i, e, t) {
  var n, s, r, o, a, l;
  return {
    rotation: Zs(
      (i == null ? void 0 : i.rotation) || { x: 0, y: 0, z: 0 },
      (e == null ? void 0 : e.rotation) || { x: 0, y: 0, z: 0 },
      t
    ),
    eyeLookAt: {
      x: (((n = i == null ? void 0 : i.eyeLookAt) == null ? void 0 : n.x) || 0) + ((((s = e == null ? void 0 : e.eyeLookAt) == null ? void 0 : s.x) || 0) - (((r = i == null ? void 0 : i.eyeLookAt) == null ? void 0 : r.x) || 0)) * t,
      y: (((o = i == null ? void 0 : i.eyeLookAt) == null ? void 0 : o.y) || 0) + ((((a = e == null ? void 0 : e.eyeLookAt) == null ? void 0 : a.y) || 0) - (((l = i == null ? void 0 : i.eyeLookAt) == null ? void 0 : l.y) || 0)) * t
    }
  };
}
function zx(i, e, t) {
  var n, s, r, o, a, l;
  return {
    rotation: Zs(
      (i == null ? void 0 : i.rotation) || { x: 0, y: 0, z: 0 },
      (e == null ? void 0 : e.rotation) || { x: 0, y: 0, z: 0 },
      t
    ),
    lean: {
      x: (((n = i == null ? void 0 : i.lean) == null ? void 0 : n.x) || 0) + ((((s = e == null ? void 0 : e.lean) == null ? void 0 : s.x) || 0) - (((r = i == null ? void 0 : i.lean) == null ? void 0 : r.x) || 0)) * t,
      z: (((o = i == null ? void 0 : i.lean) == null ? void 0 : o.z) || 0) + ((((a = e == null ? void 0 : e.lean) == null ? void 0 : a.z) || 0) - (((l = i == null ? void 0 : i.lean) == null ? void 0 : l.z) || 0)) * t
    }
  };
}
function Zs(i, e, t) {
  return {
    x: i.x + (e.x - i.x) * t,
    y: i.y + (e.y - i.y) * t,
    z: i.z + (e.z - i.z) * t
  };
}
const Mn = Ne({
  currentGesture: "idle",
  intensity: 0,
  progress: 0
}), An = Ne([]), ei = Ne(!1);
let zr = null, Mu = 0;
function Kd() {
  const i = He(() => Mn.value.currentGesture), e = He(() => Mn.value.intensity), t = He(() => Mn.value.progress), n = He(() => ei.value);
  function s(d, h = 1) {
    const f = Qr[d];
    f && (An.value.push({
      time: 0,
      type: d,
      intensity: Math.min(1, Math.max(0, h)),
      duration: f.duration
    }), ei.value || o());
  }
  function r(d) {
    An.value = [...d], d.length > 0 && !ei.value && o();
  }
  function o() {
    if (An.value.length === 0) {
      ei.value = !1, Mn.value = {
        currentGesture: "idle",
        intensity: 0,
        progress: 0
      };
      return;
    }
    const d = An.value[0];
    Mn.value.currentGesture = d.type, Mn.value.intensity = d.intensity, Mu = performance.now(), ei.value = !0, a();
  }
  function a() {
    if (An.value.length === 0) {
      ei.value = !1;
      return;
    }
    const d = An.value[0], h = Qr[d.type], f = (performance.now() - Mu) / 1e3, g = Math.min(1, f / d.duration);
    if (Mn.value.progress = g, g >= 1) {
      An.value.shift(), An.value.length > 0 ? o() : h.loop ? (An.value.push(d), o()) : (ei.value = !1, Mn.value = {
        currentGesture: "idle",
        intensity: 0,
        progress: 0
      });
      return;
    }
    zr = requestAnimationFrame(a);
  }
  function l() {
    const { currentGesture: d, progress: h, intensity: f } = Mn.value, g = Qr[d];
    if (!g)
      return { time: 0 };
    const _ = Bx(g.keyframes, h);
    return c(_, f);
  }
  function c(d, h) {
    const f = { time: d.time };
    return d.leftArm && (f.leftArm = {
      shoulderRotation: d.leftArm.shoulderRotation ? {
        x: d.leftArm.shoulderRotation.x * h,
        y: d.leftArm.shoulderRotation.y * h,
        z: d.leftArm.shoulderRotation.z * h
      } : void 0,
      elbowRotation: d.leftArm.elbowRotation ? {
        x: d.leftArm.elbowRotation.x * h,
        y: d.leftArm.elbowRotation.y * h,
        z: d.leftArm.elbowRotation.z * h
      } : void 0,
      wristRotation: d.leftArm.wristRotation ? {
        x: d.leftArm.wristRotation.x * h,
        y: d.leftArm.wristRotation.y * h,
        z: d.leftArm.wristRotation.z * h
      } : void 0
    }), d.rightArm && (f.rightArm = {
      shoulderRotation: d.rightArm.shoulderRotation ? {
        x: d.rightArm.shoulderRotation.x * h,
        y: d.rightArm.shoulderRotation.y * h,
        z: d.rightArm.shoulderRotation.z * h
      } : void 0,
      elbowRotation: d.rightArm.elbowRotation ? {
        x: d.rightArm.elbowRotation.x * h,
        y: d.rightArm.elbowRotation.y * h,
        z: d.rightArm.elbowRotation.z * h
      } : void 0,
      wristRotation: d.rightArm.wristRotation ? {
        x: d.rightArm.wristRotation.x * h,
        y: d.rightArm.wristRotation.y * h,
        z: d.rightArm.wristRotation.z * h
      } : void 0
    }), d.head && (f.head = {
      rotation: d.head.rotation ? {
        x: d.head.rotation.x * h,
        y: d.head.rotation.y * h,
        z: d.head.rotation.z * h
      } : void 0,
      eyeLookAt: d.head.eyeLookAt
    }), d.body && (f.body = {
      rotation: d.body.rotation ? {
        x: d.body.rotation.x * h,
        y: d.body.rotation.y * h,
        z: d.body.rotation.z * h
      } : void 0,
      lean: d.body.lean ? {
        x: d.body.lean.x * h,
        z: d.body.lean.z * h
      } : void 0
    }), f;
  }
  function u() {
    zr && (cancelAnimationFrame(zr), zr = null), An.value = [], ei.value = !1, Mn.value = {
      currentGesture: "idle",
      intensity: 0,
      progress: 0
    };
  }
  return {
    currentGesture: i,
    gestureIntensity: e,
    gestureProgress: t,
    isAnimating: n,
    triggerGesture: s,
    setGesturesFromApi: r,
    getCurrentKeyframe: l,
    stopGestures: u
  };
}
const Hx = { class: "liya-ai-env-vuejs-full-body-avatar" }, Gx = /* @__PURE__ */ ir({
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
  setup(i, { expose: e, emit: t }) {
    const n = i, s = t, { getCurrentKeyframe: r } = Kd();
    let o = null, a = null, l = [], c = {}, u = null, d = null, h = null, f = null, g = null, _ = null, p = null, m = null, x = null, v = 0, b = !1, R = 0, A = 3e3, w = { x: 0, y: 0 }, H = { x: 0, y: 0 }, E = 0, T = 2e3, G = 0;
    const J = {
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
    function le(se, Q) {
      return new Promise((ae, be) => {
        new za().load(
          se,
          (ge) => {
            o = ge.scene, Q.add(o), l = [], p = null, m = null, x = null, o.traverse((Ae) => {
              Ae instanceof $e && (Ae.morphTargetInfluences && l.push(Ae), Ae.name === "Wolf3D_Outfit_Top" ? p = Ae : Ae.name === "Wolf3D_Outfit_Bottom" ? m = Ae : Ae.name === "Wolf3D_Outfit_Footwear" && (x = Ae));
            }), C(o), ge.animations.length > 0 && (a = new ka(o)), s("loaded"), ae();
          },
          (ge) => {
            if (ge.total > 0) {
              const Ae = ge.loaded / ge.total * 100;
              s("progress", Ae);
            }
          },
          (ge) => {
            s("error", ge), be(ge);
          }
        );
      });
    }
    function C(se) {
      se.traverse((Q) => {
        const ae = Q.name.toLowerCase();
        ae.includes("spine") && !u && (u = Q), ae.includes("head") && !d && (d = Q), (ae.includes("leftshoulder") || ae.includes("left_shoulder")) && (h = Q), (ae.includes("rightshoulder") || ae.includes("right_shoulder")) && (f = Q), (ae.includes("leftelbow") || ae.includes("left_elbow") || ae.includes("leftforearm")) && (g = Q), (ae.includes("rightelbow") || ae.includes("right_elbow") || ae.includes("rightforearm")) && (_ = Q);
      });
    }
    function P(se) {
      var Ae, N;
      if (!n.isSpeaking || n.visemes.length === 0) {
        D();
        return;
      }
      const Q = n.currentTime;
      let ae = 0;
      for (const Qe of n.visemes)
        if (Q >= Qe.time && Q < Qe.time + Qe.duration) {
          ae = Qe.viseme;
          break;
        }
      const be = J[ae] || [], Re = ((Ae = n.animationConfig) == null ? void 0 : Ae.lipSyncIntensity) || 0.5, ge = ((N = n.animationConfig) == null ? void 0 : N.lipSyncSpeed) || 0.02;
      for (const Qe of l)
        if (!(!Qe.morphTargetDictionary || !Qe.morphTargetInfluences))
          for (const [Ce, Ie] of Object.entries(Qe.morphTargetDictionary)) {
            const Te = be.includes(Ce) ? Re : 0, lt = c[Ce] || 0, Be = lt + (Te - lt) * ge;
            Qe.morphTargetInfluences[Ie] = Be, c[Ce] = Be;
          }
    }
    function D(se) {
      var ae;
      const Q = ((ae = n.animationConfig) == null ? void 0 : ae.lipSyncSpeed) || 0.02;
      for (const be of l)
        if (!(!be.morphTargetDictionary || !be.morphTargetInfluences)) {
          for (const [Re, ge] of Object.entries(be.morphTargetDictionary))
            if (Re.startsWith("mouth")) {
              const N = (c[Re] || 0) * (1 - Q);
              be.morphTargetInfluences[ge] = N, c[Re] = N;
            }
        }
    }
    function ee(se, Q) {
      const ae = n.animationConfig || {}, be = ae.blinkSpeed || 0.25, Re = ae.blinkIntervalMin || 1500, ge = ae.blinkIntervalMax || 3500;
      if (!b && Q - v > A && (b = !0, R = 0, v = Q, A = Re + Math.random() * (ge - Re)), b) {
        R += be;
        let Ae = 0;
        R < 0.5 ? Ae = R * 2 : Ae = 1 - (R - 0.5) * 2;
        for (const N of l) {
          if (!N.morphTargetDictionary || !N.morphTargetInfluences) continue;
          const Qe = N.morphTargetDictionary.eyeBlinkLeft, Ce = N.morphTargetDictionary.eyeBlinkRight;
          Qe !== void 0 && (N.morphTargetInfluences[Qe] = Ae), Ce !== void 0 && (N.morphTargetInfluences[Ce] = Ae);
        }
        R >= 1 && (b = !1);
      }
    }
    function V(se, Q) {
      const ae = n.animationConfig || {}, be = ae.eyeMoveSpeed || 0.12, Re = ae.eyeMoveIntervalMin || 500, ge = ae.eyeMoveIntervalMax || 1500, Ae = ae.eyeMoveRange || 0.4;
      Q - E > T && (w = {
        x: (Math.random() - 0.5) * Ae,
        y: (Math.random() - 0.5) * Ae * 0.5
      }, E = Q, T = Re + Math.random() * (ge - Re)), H.x += (w.x - H.x) * be, H.y += (w.y - H.y) * be;
      for (const N of l) {
        if (!N.morphTargetDictionary || !N.morphTargetInfluences) continue;
        const Qe = N.morphTargetDictionary.eyeLookOutLeft, Ce = N.morphTargetDictionary.eyeLookOutRight, Ie = N.morphTargetDictionary.eyeLookUpLeft, Te = N.morphTargetDictionary.eyeLookDownLeft;
        H.x > 0 && Ce !== void 0 && (N.morphTargetInfluences[Ce] = H.x), H.x < 0 && Qe !== void 0 && (N.morphTargetInfluences[Qe] = -H.x), H.y > 0 && Ie !== void 0 && (N.morphTargetInfluences[Ie] = H.y), H.y < 0 && Te !== void 0 && (N.morphTargetInfluences[Te] = -H.y);
      }
    }
    function q(se, Q) {
      const ae = n.animationConfig || {}, be = ae.breathingSpeed || 0.4, Re = ae.breathingIntensity || 0.015;
      G += se * be;
      const ge = Math.sin(G) * Re;
      u && (u.position.y += ge * 0.01);
    }
    function Y(se) {
      var ae, be, Re, ge;
      const Q = r();
      Q.leftArm && h && Q.leftArm.shoulderRotation && (h.rotation.x = Q.leftArm.shoulderRotation.x, h.rotation.y = Q.leftArm.shoulderRotation.y, h.rotation.z = Q.leftArm.shoulderRotation.z), Q.rightArm && f && Q.rightArm.shoulderRotation && (f.rotation.x = Q.rightArm.shoulderRotation.x, f.rotation.y = Q.rightArm.shoulderRotation.y, f.rotation.z = Q.rightArm.shoulderRotation.z), (ae = Q.leftArm) != null && ae.elbowRotation && g && (g.rotation.x = Q.leftArm.elbowRotation.x), (be = Q.rightArm) != null && be.elbowRotation && _ && (_.rotation.x = Q.rightArm.elbowRotation.x), (Re = Q.head) != null && Re.rotation && d && (d.rotation.x = Q.head.rotation.x, d.rotation.y = Q.head.rotation.y, d.rotation.z = Q.head.rotation.z), (ge = Q.body) != null && ge.lean && u && (u.rotation.x = Q.body.lean.x, u.rotation.z = Q.body.lean.z);
    }
    function Z(se, Q) {
      o && (a && a.update(se), P(), ee(se, Q), V(se, Q), q(se), Y());
    }
    function he() {
      return o;
    }
    function z() {
      o && o.traverse((se) => {
        var Q, ae;
        se instanceof $e && ((Q = se.geometry) == null || Q.dispose(), Array.isArray(se.material) ? se.material.forEach((be) => be.dispose()) : (ae = se.material) == null || ae.dispose());
      }), a = null, l = [];
    }
    function te(se) {
      p != null && p.material && p.material.color.set(se.top), m != null && m.material && m.material.color.set(se.bottom), x != null && x.material && x.material.color.set(se.footwear);
    }
    return e({
      loadModel: le,
      update: Z,
      getModel: he,
      dispose: z,
      applyOutfitColors: te
    }), (se, Q) => (We(), qe("div", Hx, [
      oh(se.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Ao = (i, e) => {
  const t = i.__vccOpts || i;
  for (const [n, s] of e)
    t[n] = s;
  return t;
}, BM = /* @__PURE__ */ Ao(Gx, [["__scopeId", "data-v-148895f1"]]), Wx = {
  key: 0,
  class: "liya-ai-env-vuejs-board liya-ai-env-vuejs-presentation-board"
}, jx = ["src", "alt"], Xx = { class: "liya-ai-env-vuejs-presentation-board__info" }, qx = {
  key: 1,
  class: "liya-ai-env-vuejs-loading"
}, Yx = { class: "liya-ai-env-vuejs-loading__progress" }, Kx = /* @__PURE__ */ ir({
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
  setup(i, { expose: e, emit: t }) {
    const n = i, s = He(() => {
      var oe;
      return !!((oe = n.presentationResult) != null && oe.page_image_url);
    }), r = He(() => {
      var I;
      return (((I = n.presentationResult) == null ? void 0 : I.page_image_url) || "").replace(/^http:\/\//i, "https://");
    }), o = He(() => n.presentationResult ? `${n.presentationResult.presentation_title} — ${n.presentationResult.page_number}/${n.presentationResult.total_pages}` : ""), a = t, { getCurrentKeyframe: l, setGesturesFromApi: c } = Kd(), u = Ne(null), d = Ne(!0), h = Ne(0);
    let f = null, g = null, _ = null, p = null, m = null, x = null, v = null, b = null, R = [], A = {}, w = null, H = null, E = null, T = null, G = null, J = null, le = null, C = null, P = null;
    const D = typeof navigator < "u" && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    let ee = !1, V = 0, q = !1, Y = 0, Z = 3e3, he = { x: 0, y: 0 }, z = { x: 0, y: 0 }, te = 0, se = 2e3, Q = 0;
    const ae = {
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
    rn(() => n.gestures, (oe) => {
      oe && oe.length > 0 && c(oe);
    }, { deep: !0 }), rn(() => n.avatarModelUrl, (oe) => {
      oe && f && !v && Ae(oe);
    });
    function be() {
      if (!u.value) return;
      f = new vy(), f.background = new je(1710638);
      const { position: oe, lookAt: I, fov: k } = n.cameraConfig, ne = u.value.clientWidth / u.value.clientHeight;
      g = new qt(k || 45, ne, 0.1, 1e3), g.position.set(oe.x, oe.y, oe.z), g.lookAt(I.x, I.y, I.z), _ = new Bd({
        antialias: !D,
        // Safari: disable antialiasing for performance
        alpha: !0,
        powerPreference: D ? "low-power" : "high-performance",
        preserveDrawingBuffer: D
        // Safari: required for WebGL stability
      }), _.setSize(
        u.value.clientWidth,
        u.value.clientHeight
      );
      const Se = D ? 1.5 : 2;
      _.setPixelRatio(Math.min(window.devicePixelRatio, Se)), _.outputColorSpace = xt, _.toneMapping = od, _.toneMappingExposure = 1.2, _.shadowMap.enabled = !D, _.shadowMap.type = sd, u.value.appendChild(_.domElement), Re(), p = new Xy(), ge(), window.addEventListener("resize", de), ee = !0, Ie();
    }
    function Re() {
      if (!f) return;
      const oe = new Wy(8951976, 0.7);
      f.add(oe);
      const I = new Va(14740212, 1.1);
      I.position.set(2, 6, 3), I.castShadow = !0, I.shadow.mapSize.width = 2048, I.shadow.mapSize.height = 2048, I.shadow.camera.near = 0.5, I.shadow.camera.far = 50, I.shadow.camera.left = -10, I.shadow.camera.right = 10, I.shadow.camera.top = 8, I.shadow.camera.bottom = -4, I.shadow.bias = -1e-3, f.add(I);
      const k = new Va(9478320, 0.5);
      k.position.set(-5, 3, 2), f.add(k);
      const ne = new Xd(15791868, 1.1, 12, Math.PI / 5, 0.6, 1);
      ne.position.set(0, 5.4, -1), ne.target.position.set(0, 2.5, -3.9), f.add(ne), f.add(ne.target);
      const Se = new qs(54442, 0.35, 10, 2);
      Se.position.set(-6, 1.5, -3), f.add(Se);
      const K = new qs(54442, 0.35, 10, 2);
      K.position.set(6, 1.5, -3), f.add(K);
      const xe = new qs(47252, 0.25, 15, 2);
      xe.position.set(0, 5.5, -2), f.add(xe);
      const Ee = new qs(8427696, 0.3, 10, 2);
      Ee.position.set(0, 0.2, -1), f.add(Ee);
    }
    async function ge() {
      const oe = new za();
      let I = 0, k = 0;
      if (n.classroomModelUrl && k++, n.avatarModelUrl && k++, k === 0) {
        N(), d.value = !1, a("loaded");
        return;
      }
      try {
        n.classroomModelUrl ? await new Promise((ne, Se) => {
          oe.load(
            n.classroomModelUrl,
            (K) => {
              x = K.scene, x.traverse((xe) => {
                xe instanceof $e && (xe.castShadow = !0, xe.receiveShadow = !0);
              }), f == null || f.add(x), I += 50, h.value = I, a("progress", I), ne();
            },
            (K) => {
              if (K.total > 0) {
                const xe = K.loaded / K.total * 50;
                h.value = xe, a("progress", xe);
              }
            },
            (K) => Se(K)
          );
        }) : (N(), I += 50), n.avatarModelUrl && await new Promise((ne, Se) => {
          oe.load(
            n.avatarModelUrl,
            (K) => {
              v = K.scene;
              const xe = n.avatarPosition;
              v.position.set(xe.x, xe.y, xe.z), v.traverse((Ee) => {
                Ee instanceof $e && (Ee.castShadow = !0, Ee.receiveShadow = !0, Ee.morphTargetInfluences && R.push(Ee));
              }), Qe(v), K.animations.length > 0 && (b = new ka(v)), f == null || f.add(v), I += 50, h.value = I, a("progress", I), ne();
            },
            (K) => {
              if (K.total > 0) {
                const xe = 50 + K.loaded / K.total * 50;
                h.value = xe, a("progress", xe);
              }
            },
            (K) => Se(K)
          );
        }), d.value = !1, a("loaded");
      } catch (ne) {
        a("error", ne), d.value = !1;
      }
    }
    async function Ae(oe) {
      if (!f || v) return;
      const I = new za();
      try {
        await new Promise((k, ne) => {
          I.load(
            oe,
            (Se) => {
              v = Se.scene, v.position.set(-1.8, 0, 0.8);
              const K = n.cameraConfig.position, xe = v.position;
              v.rotation.y = Math.atan2(
                K.x - xe.x,
                K.z - xe.z
              ), v.scale.set(1.1, 1.1, 1.1), le = null, C = null, P = null, v.traverse((Ee) => {
                Ee instanceof $e && (Ee.castShadow = !0, Ee.receiveShadow = !0, Ee.morphTargetInfluences && R.push(Ee), Ee.name === "Wolf3D_Outfit_Top" ? le = Ee : Ee.name === "Wolf3D_Outfit_Bottom" ? C = Ee : Ee.name === "Wolf3D_Outfit_Footwear" && (P = Ee));
              }), Qe(v), Se.animations.length > 0 && (b = new ka(v)), f.add(v), k();
            },
            void 0,
            (Se) => {
              ne(Se);
            }
          );
        });
      } catch {
      }
    }
    function N() {
      if (!f) return;
      const oe = new Xt({
        color: 14212324,
        roughness: 0.45,
        metalness: 0.25
      }), I = new Xt({
        color: 13160668,
        roughness: 0.4,
        metalness: 0.3
      }), k = new Xt({
        color: 12635352,
        roughness: 0.04,
        metalness: 0.5
      }), ne = new Xt({
        color: 13687008,
        roughness: 0.5,
        metalness: 0.2
      }), Se = new Xt({
        color: 54442,
        emissive: 54442,
        emissiveIntensity: 0.6,
        roughness: 0.1,
        metalness: 0.3
      }), K = new Xt({
        color: 47252,
        emissive: 47252,
        emissiveIntensity: 0.3,
        roughness: 0.15,
        metalness: 0.25
      }), xe = new Xt({
        color: 7899288,
        roughness: 0.08,
        metalness: 0.5
      }), Ee = new Xt({
        color: 13160668,
        roughness: 0.08,
        metalness: 0.45
      }), Le = new Xt({
        color: 13687012,
        roughness: 0.25,
        metalness: 0.3
      }), we = new ii(16, 12), Me = new $e(we, k);
      Me.rotation.x = -Math.PI / 2, Me.position.y = 0, Me.receiveShadow = !0, f.add(Me);
      const ze = new $e(
        new yt(12, 3e-3, 0.02),
        K
      );
      ze.position.set(0, 2e-3, -3.2), f.add(ze);
      const it = new ii(16, 6), ut = new $e(it, oe);
      ut.position.set(0, 3, -4), ut.receiveShadow = !0, f.add(ut);
      const Xe = new $e(
        new yt(16, 1.5, 0.03),
        I
      );
      Xe.position.set(0, 0.75, -3.97), f.add(Xe);
      const fe = new ii(10, 6), L = new $e(fe, oe.clone());
      L.position.set(-8, 3, 1), L.rotation.y = Math.PI / 2, L.receiveShadow = !0, f.add(L);
      const me = new $e(
        new yt(14, 0.02, 0.015),
        Se
      );
      me.position.set(0, 5.1, -3.96), f.add(me);
      const ve = new $e(
        new yt(14, 0.015, 0.015),
        Se
      );
      ve.position.set(0, 1.52, -3.96), f.add(ve);
      const Oe = new $e(
        new yt(0.015, 3.6, 0.015),
        K
      );
      Oe.position.set(-7, 3.3, -3.96), f.add(Oe);
      const Ue = Oe.clone();
      Ue.position.set(7, 3.3, -3.96), f.add(Ue);
      const ct = new $e(
        new yt(6.2, 3.4, 0.06),
        xe
      );
      ct.position.set(0, 2.85, -3.92), ct.castShadow = !0, f.add(ct);
      const dt = new ii(5.8, 3.1), St = new Xt({
        color: 16119280,
        emissive: 15790316,
        emissiveIntensity: 0.15,
        roughness: 0.05,
        metalness: 0.02
      }), bt = new $e(dt, St);
      bt.position.set(0, 2.85, -3.88), f.add(bt);
      const at = new yt(6.25, 0.04, 0.08), wt = new yt(0.04, 3.45, 0.08), Bt = [
        { geo: at, pos: [0, 4.575, -3.9] },
        { geo: at, pos: [0, 1.125, -3.9] },
        { geo: wt, pos: [-3.125, 2.85, -3.9] },
        { geo: wt, pos: [3.125, 2.85, -3.9] }
      ];
      for (const B of Bt) {
        const pe = new $e(B.geo, Ee);
        pe.position.set(B.pos[0], B.pos[1], B.pos[2]), f.add(pe);
      }
      const ui = new yt(6, 0.01, 0.01), di = new yt(0.01, 3.2, 0.01), ye = [
        { geo: ui, pos: [0, 4.42, -3.87] },
        { geo: ui, pos: [0, 1.28, -3.87] },
        { geo: di, pos: [-2.98, 2.85, -3.87] },
        { geo: di, pos: [2.98, 2.85, -3.87] }
      ];
      for (const B of ye) {
        const pe = new $e(B.geo, K);
        pe.position.set(B.pos[0], B.pos[1], B.pos[2]), f.add(pe);
      }
      for (let B = 0; B < 3; B++) {
        const pe = new $e(
          new yt(0.6, 2.5, 0.02),
          Le
        );
        pe.position.set(-5.5 + B * 0.75, 3, -3.97), f.add(pe);
      }
      for (let B = 0; B < 3; B++) {
        const pe = new $e(
          new yt(0.6, 2.5, 0.02),
          Le
        );
        pe.position.set(4.75 + B * 0.75, 3, -3.97), f.add(pe);
      }
      const re = new Xt({
        color: 12109008,
        roughness: 0.08,
        metalness: 0.45
      }), Pe = new $e(
        new yt(1.8, 0.04, 0.7),
        re
      );
      Pe.position.set(3.5, 0.75, -2.5), Pe.castShadow = !0, Pe.receiveShadow = !0, f.add(Pe);
      const _t = new $e(
        new yt(1.8, 8e-3, 8e-3),
        K
      );
      _t.position.set(3.5, 0.73, -2.15), f.add(_t);
      const In = new $e(
        new ho(0.04, 0.06, 0.73, 12),
        Ee
      );
      In.position.set(3.5, 0.365, -2.5), In.castShadow = !0, f.add(In);
      const Gi = new $e(
        new ho(0.25, 0.25, 0.02, 16),
        Ee
      );
      Gi.position.set(3.5, 0.01, -2.5), f.add(Gi);
      const Wi = new $e(
        new yt(5, 0.05, 3),
        I
      );
      Wi.position.set(-0.5, 0.025, -2.5), Wi.receiveShadow = !0, f.add(Wi);
      const dr = new $e(
        new yt(5, 0.01, 0.01),
        Se
      );
      dr.position.set(-0.5, 0.045, -1), f.add(dr);
      const S = new ii(16, 12), F = new $e(S, ne);
      F.rotation.x = Math.PI / 2, F.position.set(0, 5.6, 0), f.add(F);
      const j = new $e(
        new yt(14, 0.01, 0.01),
        K
      );
      j.position.set(0, 5.55, -3.96), f.add(j);
      const $ = new Xt({
        color: 13689072,
        emissive: 12638440,
        emissiveIntensity: 0.3,
        roughness: 0.1
      });
      for (let B = -1; B <= 1; B += 2) {
        const pe = new $e(
          new yt(0.08, 0.01, 4),
          $
        );
        pe.position.set(B * 5, 5.58, -1), f.add(pe);
      }
      f.background = new je(8951976);
    }
    function Qe(oe) {
      const I = [];
      oe.traverse((k) => {
        const ne = k.name.toLowerCase();
        I.push(k.name), ne.includes("spine") && !w && (w = k), ne.includes("head") && !H && (H = k), ne.includes("leftshoulder") && !E && (E = k), (ne.includes("leftarm") || ne.includes("left_arm") || ne.includes("leftupperarm")) && !G && (G = k), ne.includes("rightshoulder") && !T && (T = k), (ne.includes("rightarm") || ne.includes("right_arm") || ne.includes("rightupperarm")) && !J && (J = k);
      });
    }
    function Ce() {
    }
    function Ie() {
      if (!ee || (m = requestAnimationFrame(Ie), !p || !_ || !f || !g)) return;
      const oe = p.getDelta(), I = p.getElapsedTime() * 1e3;
      b && b.update(oe), v && (Te(), Be(oe, I), M(oe, I), y(oe), W()), _.render(f, g);
    }
    function Te(oe) {
      var xe, Ee;
      if (!n.isSpeaking || n.visemes.length === 0) {
        lt();
        return;
      }
      const I = n.currentTime;
      let k = 0;
      for (const Le of n.visemes)
        if (I >= Le.time && I < Le.time + Le.duration) {
          k = Le.viseme;
          break;
        }
      const ne = ae[k] || [], Se = ((xe = n.animationConfig) == null ? void 0 : xe.lipSyncIntensity) || 0.5, K = ((Ee = n.animationConfig) == null ? void 0 : Ee.lipSyncSpeed) || 0.02;
      for (const Le of R)
        if (!(!Le.morphTargetDictionary || !Le.morphTargetInfluences))
          for (const [we, Me] of Object.entries(Le.morphTargetDictionary)) {
            const ze = ne.includes(we) ? Se : 0, it = A[we] || 0, ut = it + (ze - it) * K;
            Le.morphTargetInfluences[Me] = ut, A[we] = ut;
          }
    }
    function lt(oe) {
      for (const k of R)
        if (!(!k.morphTargetDictionary || !k.morphTargetInfluences)) {
          for (const [ne, Se] of Object.entries(k.morphTargetDictionary))
            if (ne.startsWith("mouth")) {
              const xe = (A[ne] || 0) * (1 - 0.02);
              k.morphTargetInfluences[Se] = xe, A[ne] = xe;
            }
        }
    }
    function Be(oe, I) {
      if (!q && I - V > Z && (q = !0, Y = 0, V = I, Z = 1500 + Math.random() * 2e3), q) {
        Y += 0.25;
        let K = 0;
        Y < 0.5 ? K = Y * 2 : K = 1 - (Y - 0.5) * 2;
        for (const xe of R) {
          if (!xe.morphTargetDictionary || !xe.morphTargetInfluences) continue;
          const Ee = xe.morphTargetDictionary.eyeBlinkLeft, Le = xe.morphTargetDictionary.eyeBlinkRight;
          Ee !== void 0 && (xe.morphTargetInfluences[Ee] = K), Le !== void 0 && (xe.morphTargetInfluences[Le] = K);
        }
        Y >= 1 && (q = !1);
      }
    }
    function M(oe, I) {
      I - te > se && (he = {
        x: (Math.random() - 0.5) * 0.4,
        y: (Math.random() - 0.5) * 0.4 * 0.5
      }, te = I, se = 500 + Math.random() * 1e3), z.x += (he.x - z.x) * 0.12, z.y += (he.y - z.y) * 0.12;
      for (const xe of R) {
        if (!xe.morphTargetDictionary || !xe.morphTargetInfluences) continue;
        const Ee = xe.morphTargetDictionary.eyeLookOutLeft, Le = xe.morphTargetDictionary.eyeLookOutRight, we = xe.morphTargetDictionary.eyeLookUpLeft, Me = xe.morphTargetDictionary.eyeLookDownLeft;
        z.x > 0 && Le !== void 0 && (xe.morphTargetInfluences[Le] = z.x), z.x < 0 && Ee !== void 0 && (xe.morphTargetInfluences[Ee] = -z.x), z.y > 0 && we !== void 0 && (xe.morphTargetInfluences[we] = z.y), z.y < 0 && Me !== void 0 && (xe.morphTargetInfluences[Me] = -z.y);
      }
    }
    function y(oe, I) {
      Q += oe * 0.4;
      const Se = Math.sin(Q) * 0.015;
      w && (w.position.y += Se * 0.01);
    }
    function W(oe, I) {
      var ne, Se;
      const k = l();
      (ne = k.head) != null && ne.rotation && H && H.rotation.set(
        k.head.rotation.x,
        k.head.rotation.y,
        k.head.rotation.z
      ), (Se = k.body) != null && Se.lean && w && (w.rotation.x = k.body.lean.x, w.rotation.z = k.body.lean.z);
    }
    function de() {
      if (!u.value || !g || !_) return;
      const oe = u.value.clientWidth, I = u.value.clientHeight;
      g.aspect = oe / I, g.updateProjectionMatrix(), _.setSize(oe, I);
    }
    function ce() {
      ee = !1, m && (cancelAnimationFrame(m), m = null), window.removeEventListener("resize", de);
      const oe = (I) => {
        I.traverse((k) => {
          var ne, Se;
          k instanceof $e && ((ne = k.geometry) == null || ne.dispose(), Array.isArray(k.material) ? k.material.forEach((K) => K.dispose()) : (Se = k.material) == null || Se.dispose());
        });
      };
      x && oe(x), v && oe(v), _ && (_.dispose(), _.forceContextLoss(), u.value && _.domElement.parentNode === u.value && u.value.removeChild(_.domElement)), f = null, g = null, _ = null, x = null, v = null, b = null, R = [], A = {}, w = null, H = null, E = null, T = null, G = null, J = null;
    }
    Wa(() => {
      be();
    }), sr(() => {
      ce();
    });
    function ue(oe) {
      le != null && le.material && le.material.color.set(oe.top), C != null && C.material && C.material.color.set(oe.bottom), P != null && P.material && P.material.color.set(oe.footwear);
    }
    return e({
      applyOutfitColors: ue
    }), (oe, I) => (We(), qe("div", {
      ref_key: "liyaAiEnvVuejsContainerRef",
      ref: u,
      class: "liya-ai-env-vuejs-classroom-scene"
    }, [
      s.value ? (We(), qe("div", Wx, [
        O("img", {
          src: r.value,
          alt: o.value,
          class: "liya-ai-env-vuejs-presentation-board__image"
        }, null, 8, jx),
        O("div", Xx, Fe(o.value), 1),
        I[0] || (I[0] = O("div", { class: "liya-ai-env-vuejs-board__frame" }, null, -1))
      ])) : Dt("", !0),
      d.value ? (We(), qe("div", qx, [
        I[1] || (I[1] = O("div", { class: "liya-ai-env-vuejs-loading__spinner" }, null, -1)),
        I[2] || (I[2] = O("p", { class: "liya-ai-env-vuejs-loading__text" }, "Ortam yükleniyor...", -1)),
        O("div", Yx, [
          O("div", {
            class: "liya-ai-env-vuejs-loading__progress-bar",
            style: ja({ width: `${h.value}%` })
          }, null, 4)
        ])
      ])) : Dt("", !0)
    ], 512));
  }
}), $d = /* @__PURE__ */ Ao(Kx, [["__scopeId", "data-v-25b9dcfa"]]), st = Ne({
  isOpen: !1,
  isLoading: !0,
  isReady: !1,
  isSpeaking: !1,
  isListening: !1,
  isProcessing: !1,
  currentMessage: "",
  error: null,
  loadProgress: 0
}), Kt = Ne([]), Au = Ne(null), ls = Ne([]), Hr = Ne([]), xi = Ne(0), va = Ne(null), ya = Ne(null);
let sn = null, Tu = 0, Ei = null, bu = 0;
const $x = 3;
async function Jx() {
  const i = window.__liyaAiEnvAudioContext;
  if (i && i.state !== "closed") {
    if (i.state === "running")
      return i;
    if (i.state === "suspended")
      try {
        const t = i.resume(), n = new Promise(
          (s, r) => setTimeout(() => r(new Error("AudioContext resume timeout")), 2e3)
        );
        await Promise.race([t, n]);
      } catch {
      }
    return i;
  }
  if (bu >= $x)
    return console.warn("[LiyaAiEnv] Max AudioContext creation attempts reached"), null;
  bu++;
  const e = window.AudioContext || window.webkitAudioContext;
  if (window.__liyaAiEnvAudioContext = new e(), window.__liyaAiEnvAudioContext.state === "suspended")
    try {
      const t = window.__liyaAiEnvAudioContext.resume(), n = new Promise(
        (s, r) => setTimeout(() => r(new Error("AudioContext resume timeout")), 2e3)
      );
      await Promise.race([t, n]);
    } catch {
    }
  return window.__liyaAiEnvAudioContext;
}
function Jd() {
  const i = He(() => st.value.isOpen), e = He(() => st.value.isLoading), t = He(() => st.value.isReady), n = He(() => st.value.isSpeaking), s = He(() => st.value.isListening), r = He(() => st.value.isProcessing), o = He(() => st.value.currentMessage), a = He(() => st.value.error), l = He(() => st.value.loadProgress), c = He(() => Kt.value), u = He(() => ls.value), d = He(() => Hr.value), h = He(() => xi.value), f = He(() => va.value);
  function g() {
    st.value.isOpen = !0;
  }
  function _() {
    E(), st.value.isOpen = !1, st.value.isSpeaking = !1, st.value.isListening = !1;
  }
  function p(P) {
    st.value.isLoading = P;
  }
  function m(P) {
    st.value.isReady = P, P && (st.value.isLoading = !1);
  }
  function x(P) {
    st.value.loadProgress = Math.min(100, Math.max(0, P));
  }
  function v(P) {
    st.value.error = P;
  }
  function b(P) {
    try {
      const D = JSON.parse(P);
      if (typeof (D == null ? void 0 : D.response) == "string")
        return D.response;
      if (typeof (D == null ? void 0 : D.answer) == "string")
        return D.answer;
    } catch {
      const D = P.match(/"(?:response|answer)"\s*:\s*"((?:[^"\\]|\\.)*)"/);
      if (D)
        try {
          return JSON.parse(`"${D[1]}"`);
        } catch {
          return D[1];
        }
    }
    return P;
  }
  async function R(P) {
    var ee;
    if (!P.trim() || st.value.isProcessing) return;
    st.value.isProcessing = !0, st.value.currentMessage = P, st.value.error = null;
    const D = {
      id: `temp-user-${Date.now()}`,
      content: P.trim(),
      role: "user",
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    Kt.value.push(D);
    try {
      const V = await Wf(
        P,
        Au.value || void 0
      );
      if (V) {
        if (V.session_id && (Au.value = V.session_id), V.user_message) {
          const Y = Kt.value.findIndex((Z) => Z.id === D.id);
          Y !== -1 && (Kt.value[Y] = V.user_message);
        }
        if (V.assistant_message) {
          if (V.suggestions && V.suggestions.length > 0)
            try {
              const Y = JSON.parse(V.assistant_message.content);
              Y.suggestions || (Y.suggestions = V.suggestions), V.assistant_message.content = JSON.stringify(Y);
            } catch {
              V.assistant_message.content = JSON.stringify({
                response: V.assistant_message.content,
                suggestions: V.suggestions
              });
            }
          Kt.value.push(V.assistant_message);
        } else if (V.response) {
          let Y = V.response;
          V.suggestions && V.suggestions.length > 0 && (Y = JSON.stringify({
            response: V.response,
            suggestions: V.suggestions
          })), Kt.value.push({
            id: `msg-${Date.now()}`,
            content: Y,
            role: "assistant",
            created_at: (/* @__PURE__ */ new Date()).toISOString()
          });
        }
        if (V.presentation_result && V.presentation_result.success) {
          const Y = { ...V.presentation_result };
          if (Y.page_image_url)
            try {
              const Z = Cs(), he = Z.apiUrl.replace(/\/$/, ""), z = Y.page_image_url.startsWith("http") ? Y.page_image_url : `${he}${Y.page_image_url}`, te = z.includes("?") ? "&" : "?";
              Y.page_image_url = `${z}${te}api_key=${Z.apiKey}`;
            } catch {
            }
          va.value = Y;
        }
        const q = V.response || b(
          ((ee = V.assistant_message) == null ? void 0 : ee.content) || ""
        );
        q && await A(q);
      }
    } catch (V) {
      V instanceof Qu && V.code && (ya.value = V.code), st.value.error = "Mesaj gönderilemedi", Kt.value = Kt.value.filter((q) => q.id !== D.id);
    } finally {
      st.value.isProcessing = !1, st.value.currentMessage = "";
    }
  }
  async function A(P) {
    try {
      const D = await jf(P, {
        include_audio: !0,
        include_gestures: !0
      });
      D && (ls.value = D.visemes || [], Hr.value = D.gestures || [], D.audio_base64 ? await w(D.audio_base64) : H(P));
    } catch {
      H(P);
    }
  }
  async function w(P) {
    try {
      const D = atob(P), ee = D.length, V = new ArrayBuffer(ee), q = new Uint8Array(V);
      for (let te = 0; te < ee; te++)
        q[te] = D.charCodeAt(te);
      const Y = await Jx();
      if (!Y) {
        H(P.substring(0, 100));
        return;
      }
      const Z = await new Promise((te, se) => {
        Y.decodeAudioData(
          V,
          (Q) => te(Q),
          (Q) => se(Q || new Error("Audio decode failed"))
        );
      });
      E(), sn = Y.createBufferSource(), sn.buffer = Z, sn.connect(Y.destination), st.value.isSpeaking = !0, Tu = Y.currentTime;
      const he = () => {
        st.value.isSpeaking && Y && (xi.value = Y.currentTime - Tu, requestAnimationFrame(he));
      };
      he();
      const z = Z.duration * 1e3;
      Ei = setTimeout(() => {
        st.value.isSpeaking && (st.value.isSpeaking = !1, xi.value = 0, ls.value = [], Hr.value = []);
      }, z + 500), sn.onended = () => {
        Ei && (clearTimeout(Ei), Ei = null), st.value.isSpeaking = !1, xi.value = 0, ls.value = [], Hr.value = [];
      }, sn.start();
    } catch {
      st.value.isSpeaking = !1;
    }
  }
  function H(P) {
    const D = P.length * 0.05, ee = [];
    let V = 0;
    for (let Z = 0; Z < P.length; Z++) {
      const he = P[Z].toLowerCase();
      let z = 0;
      "aeiouäöü".includes(he) ? z = 10 + Math.floor(Math.random() * 5) : "bcdfghjklmnpqrstvwxyz".includes(he) && (z = 1 + Math.floor(Math.random() * 9)), ee.push({ time: V, viseme: z, duration: 0.05 }), V += 0.05;
    }
    ls.value = ee, st.value.isSpeaking = !0, xi.value = 0;
    const q = Date.now(), Y = () => {
      const Z = (Date.now() - q) / 1e3;
      xi.value = Z, Z < D ? requestAnimationFrame(Y) : (st.value.isSpeaking = !1, ls.value = []);
    };
    Y();
  }
  function E() {
    if (Ei && (clearTimeout(Ei), Ei = null), sn) {
      try {
        sn.stop(), sn.disconnect();
      } catch {
      }
      sn = null;
    }
    st.value.isSpeaking = !1, xi.value = 0;
  }
  function T(P) {
    st.value.isListening = P;
  }
  function G(P) {
    Kt.value.length === 0 && Kt.value.push({
      id: `welcome-${Date.now()}`,
      content: P,
      role: "assistant",
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  function J(P) {
    Kt.value.length > 0 && Kt.value[0].id.startsWith("welcome-") && (Kt.value[0] = { ...Kt.value[0], content: P });
  }
  function le(P) {
    va.value = P;
  }
  function C() {
    if (E(), sn) {
      try {
        sn.stop(), sn.disconnect();
      } catch {
      }
      sn = null;
    }
  }
  return {
    // State (readonly)
    state: eo(st),
    isOpen: i,
    isLoading: e,
    isReady: t,
    isSpeaking: n,
    isListening: s,
    isProcessing: r,
    currentMessage: o,
    error: a,
    loadProgress: l,
    messages: c,
    visemes: u,
    gestures: d,
    audioTime: h,
    currentPresentation: f,
    lastApiErrorCode: He(() => ya.value),
    clearApiError: () => {
      ya.value = null;
    },
    // Actions
    open: g,
    close: _,
    setLoading: p,
    setReady: m,
    setLoadProgress: x,
    setError: v,
    handleMessage: R,
    speakWithAvatar: A,
    stopAudio: E,
    setListening: T,
    addWelcomeMessage: G,
    updateWelcomeMessage: J,
    setPresentation: le,
    cleanup: C
  };
}
const kn = Ne(!1), xa = Ne(""), Gr = Ne(!1), Ea = Ne(!1), Ws = Ne("prompt");
let Ot = null;
function Zx() {
  if (typeof window > "u" || typeof navigator > "u") return !1;
  const i = navigator.userAgent || navigator.vendor || "", e = /iPad|iPhone|iPod/.test(i) && !window.MSStream, t = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  return e || t;
}
function wu() {
  if (typeof window > "u" || typeof navigator > "u") return !1;
  const i = navigator.userAgent || "";
  return i.indexOf("OPR/") !== -1 || i.indexOf("Opera") !== -1;
}
function Zd() {
  const i = window.SpeechRecognition || window.webkitSpeechRecognition;
  Ea.value = Zx();
  const e = wu();
  Gr.value = !!i && !Ea.value && !e;
  async function t() {
    if (typeof navigator > "u" || !navigator.permissions)
      return "prompt";
    try {
      const c = await navigator.permissions.query({ name: "microphone" });
      return Ws.value = c.state, c.onchange = () => {
        Ws.value = c.state;
      }, c.state;
    } catch {
      return "prompt";
    }
  }
  async function n() {
    if (!Gr.value)
      return !1;
    try {
      return (await navigator.mediaDevices.getUserMedia({ audio: !0 })).getTracks().forEach((u) => u.stop()), Ws.value = "granted", !0;
    } catch {
      return Ws.value = "denied", !1;
    }
  }
  function s() {
    !i || Ot || (Ot = new i(), Ot.continuous = !1, Ot.interimResults = !1, Ot.lang = "tr-TR", Ot.onresult = (c) => {
      const u = c.results[c.results.length - 1];
      u.isFinal && (xa.value = u[0].transcript);
    }, Ot.onerror = (c) => {
      kn.value = !1;
    }, Ot.onend = () => {
      kn.value = !1;
    });
  }
  function r() {
    if (Gr.value && (s(), Ot && !kn.value)) {
      xa.value = "", kn.value = !0;
      try {
        Ot.start(), wu() && setTimeout(() => {
          kn.value;
        }, 3e3);
      } catch {
        kn.value = !1;
      }
    }
  }
  function o() {
    Ot && kn.value && (Ot.stop(), kn.value = !1);
  }
  function a(c) {
    Ot && (Ot.lang = c);
  }
  function l() {
    Ot && (Ot.abort(), Ot = null);
  }
  return sr(() => {
    l();
  }), {
    isRecording: He(() => kn.value),
    transcript: He(() => xa.value),
    isSupported: He(() => Gr.value),
    isIOS: He(() => Ea.value),
    micPermission: He(() => Ws.value),
    startRecording: r,
    stopRecording: o,
    setLanguage: a,
    checkMicPermission: t,
    requestMicPermission: n,
    cleanup: l
  };
}
function Qd() {
  const i = typeof Proxy < "u";
  let e = !1;
  if (typeof document < "u")
    try {
      const s = document.createElement("canvas");
      e = !!(s.getContext("webgl2") || s.getContext("webgl") || s.getContext("experimental-webgl"));
    } catch {
      e = !1;
    }
  const t = typeof window < "u" && !!(window.SpeechRecognition || window.webkitSpeechRecognition), n = typeof window < "u" && !!(window.AudioContext || window.webkitAudioContext);
  return i ? e ? n ? {
    supported: !0,
    webgl: e,
    speechApi: t,
    audioContext: n
  } : {
    supported: !1,
    webgl: e,
    speechApi: t,
    audioContext: !1,
    reason: "AUDIO_NOT_SUPPORTED"
  } : {
    supported: !1,
    webgl: !1,
    speechApi: t,
    audioContext: n,
    reason: "WEBGL_NOT_SUPPORTED"
  } : {
    supported: !1,
    webgl: !1,
    speechApi: !1,
    audioContext: !1,
    reason: "ES6_NOT_SUPPORTED"
  };
}
const eh = "liya-avatar-colors", To = {
  top: "#F8FAFC",
  bottom: "#E2E8F0",
  footwear: "#CBD5E1"
}, th = [
  { id: "classic-blue", name: "Klasik Mavi", top: "#3B82F6", bottom: "#1E293B", footwear: "#374151" },
  { id: "red-energy", name: "Kırmızı", top: "#EF4444", bottom: "#1E293B", footwear: "#374151" },
  { id: "green-nature", name: "Yeşil", top: "#10B981", bottom: "#1E293B", footwear: "#374151" },
  { id: "purple-royal", name: "Mor", top: "#8B5CF6", bottom: "#1E293B", footwear: "#374151" },
  { id: "orange-warm", name: "Turuncu", top: "#F97316", bottom: "#1E293B", footwear: "#374151" },
  { id: "pink-soft", name: "Pembe", top: "#EC4899", bottom: "#F3E8FF", footwear: "#9333EA" },
  { id: "dark-elegant", name: "Koyu Zarif", top: "#1E293B", bottom: "#0F172A", footwear: "#1E293B" },
  { id: "white-clean", name: "Beyaz Sade", top: "#F8FAFC", bottom: "#E2E8F0", footwear: "#CBD5E1" }
], ci = Ne({ ...To }), Hi = Ne("white-clean");
function Qx() {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const i = localStorage.getItem(eh);
      if (i) {
        const e = JSON.parse(i);
        e.colors && (ci.value = { ...To, ...e.colors }), e.presetId && (Hi.value = e.presetId);
      }
    } catch {
    }
}
function bo() {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      localStorage.setItem(eh, JSON.stringify({
        colors: ci.value,
        presetId: Hi.value
      }));
    } catch {
    }
}
function eE(i) {
  const e = th.find((t) => t.id === i);
  e && (ci.value = {
    top: e.top,
    bottom: e.bottom,
    footwear: e.footwear
  }, Hi.value = i, bo());
}
function tE(i, e) {
  ci.value[i] = e, Hi.value = null, bo();
}
function nE(i) {
  ci.value = { ...ci.value, ...i }, Hi.value = null, bo();
}
function iE() {
  ci.value = { ...To }, Hi.value = "white-clean", bo();
}
function sE() {
  Qx();
}
function nh() {
  return {
    // State
    colors: eo(ci),
    currentPresetId: eo(Hi),
    // Constants
    presets: th,
    defaultColors: To,
    // Actions
    setPreset: eE,
    setColor: tE,
    setColors: nE,
    reset: iE,
    init: sE
  };
}
const rE = { class: "liya-ai-env-vuejs-modal-container" }, oE = { class: "liya-ai-env-vuejs-header" }, aE = { class: "liya-ai-env-vuejs-header__title" }, lE = { class: "liya-ai-env-vuejs-header__actions" }, cE = ["title"], uE = { class: "liya-ai-env-vuejs-header__lang-text" }, dE = ["title"], hE = ["aria-label"], fE = {
  key: 0,
  class: "liya-ai-env-vuejs-settings-panel"
}, pE = { class: "liya-ai-env-vuejs-settings-panel__header" }, mE = { class: "liya-ai-env-vuejs-settings-panel__title" }, gE = { class: "liya-ai-env-vuejs-settings-panel__section" }, _E = { class: "liya-ai-env-vuejs-settings-panel__label" }, vE = { class: "liya-ai-env-vuejs-settings-panel__presets" }, yE = ["title", "onClick"], xE = { class: "liya-ai-env-vuejs-settings-panel__section" }, EE = { class: "liya-ai-env-vuejs-settings-panel__label" }, SE = { class: "liya-ai-env-vuejs-settings-panel__colors" }, ME = { class: "liya-ai-env-vuejs-settings-panel__color-row" }, AE = ["value"], TE = { class: "liya-ai-env-vuejs-settings-panel__color-row" }, bE = ["value"], wE = { class: "liya-ai-env-vuejs-settings-panel__color-row" }, RE = ["value"], CE = {
  key: 0,
  class: "liya-ai-env-vuejs-mic-permission"
}, LE = { class: "liya-ai-env-vuejs-mic-permission__text" }, PE = { class: "liya-ai-env-vuejs-mic-permission__title" }, IE = { class: "liya-ai-env-vuejs-mic-permission__desc" }, DE = { class: "liya-ai-env-vuejs-scene" }, UE = {
  key: 0,
  class: "liya-ai-env-vuejs-unsupported-overlay"
}, NE = { class: "liya-ai-env-vuejs-unsupported-overlay__content" }, OE = { class: "liya-ai-env-vuejs-unsupported-overlay__title" }, FE = { class: "liya-ai-env-vuejs-unsupported-overlay__text" }, BE = { class: "liya-ai-env-vuejs-unsupported-overlay__browsers" }, VE = {
  key: 1,
  class: "liya-ai-env-vuejs-access-loading"
}, kE = {
  key: 2,
  class: "liya-ai-env-vuejs-premium-overlay"
}, zE = { class: "liya-ai-env-vuejs-premium-overlay__content" }, HE = { class: "liya-ai-env-vuejs-premium-overlay__title" }, GE = { class: "liya-ai-env-vuejs-premium-overlay__text" }, WE = {
  href: "https://liyalabs.com/pricing",
  target: "_blank",
  rel: "noopener",
  class: "liya-ai-env-vuejs-premium-overlay__btn"
}, jE = {
  key: 0,
  class: "liya-ai-env-vuejs-glass-popup"
}, XE = { class: "liya-ai-env-vuejs-glass-popup__card" }, qE = ["aria-label"], YE = { class: "liya-ai-env-vuejs-glass-popup__title" }, KE = { class: "liya-ai-env-vuejs-glass-popup__text" }, $E = { class: "liya-ai-env-vuejs-status-indicator__text" }, JE = ["title"], ZE = ["title"], QE = {
  key: 0,
  class: "liya-ai-env-vuejs-patience-tooltip"
}, eS = { class: "liya-ai-env-vuejs-controls" }, tS = { class: "liya-ai-env-vuejs-controls__label" }, nS = ["disabled", "aria-label"], iS = {
  key: 0,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "32",
  height: "32"
}, sS = {
  key: 1,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "32",
  height: "32"
}, rS = {
  key: 0,
  class: "liya-ai-env-vuejs-controls__toast"
}, oS = { class: "liya-ai-env-vuejs-chat-panel" }, aS = { class: "liya-ai-env-vuejs-chat-panel__role" }, lS = {
  key: 0,
  class: "liya-ai-env-vuejs-chat-panel__suggestions"
}, cS = ["onClick"], uS = {
  key: 0,
  class: "liya-ai-env-vuejs-chat-panel__empty"
}, dS = ["placeholder", "disabled"], hS = ["disabled"], Ru = 3e3, fS = /* @__PURE__ */ ir({
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
  setup(i, { emit: e }) {
    const t = i, n = e, {
      isSpeaking: s,
      isProcessing: r,
      messages: o,
      visemes: a,
      gestures: l,
      audioTime: c,
      currentPresentation: u,
      lastApiErrorCode: d,
      clearApiError: h,
      handleMessage: f,
      speakWithAvatar: g,
      stopAudio: _,
      setListening: p,
      addWelcomeMessage: m,
      updateWelcomeMessage: x,
      setPresentation: v,
      cleanup: b
    } = Jd(), R = Ne(!1), { t: A, locale: w, setLocale: H } = Za();
    function E() {
      const ye = w.value === "tr" ? "en" : "tr";
      H(ye);
    }
    const {
      isRecording: T,
      transcript: G,
      isSupported: J,
      startRecording: le,
      stopRecording: C,
      checkMicPermission: P,
      requestMicPermission: D
    } = Zd(), ee = Ne(!1);
    function V() {
      ee.value = !0, setTimeout(() => {
        ee.value = !1;
      }, 3e3);
    }
    const q = He(() => t.welcomeMessage || A.value.chat.emptyWelcome), Y = He(() => t.assistantName || "AI Assistant"), Z = Ne(t.avatarModelUrl), he = Ne(t.classroomModelUrl), z = Ne(!1), te = Ne(!0), se = Ne(null), Q = He(() => se.value !== null), ae = Ne(!0), be = Ne(void 0), Re = Ne(!1), ge = Ne(!1), { colors: Ae, presets: N, currentPresetId: Qe, setPreset: Ce, setColor: Ie, reset: Te, init: lt } = nh(), Be = Ne(null);
    function M() {
      y(), n("opened");
    }
    function y() {
      var ye;
      (ye = Be.value) != null && ye.applyOutfitColors && Be.value.applyOutfitColors({
        top: Ae.value.top,
        bottom: Ae.value.bottom,
        footwear: Ae.value.footwear
      });
    }
    rn(Ae, () => {
      y();
    }, { deep: !0 });
    const W = He(() => se.value ? se.value.code === "PREMIUM_PLUS_REQUIRED" ? A.value.premium.upgradePremiumPlus : A.value.premium.upgradePremium : "");
    function de(ye) {
      return ye && ye.replace(/^http:\/\//i, "https://");
    }
    const ce = He(() => A.value.welcomeSuggestions), ue = Ne("");
    let oe = 0;
    const I = Ne(!1), k = Ne("");
    let ne = null;
    function Se() {
      const ye = A.value.patienceTooltips, re = Math.floor(Math.random() * ye.length);
      k.value = ye[re], I.value = !0, ne && clearTimeout(ne), ne = setTimeout(() => {
        I.value = !1;
      }, 2e3);
    }
    const K = He(() => s.value ? "speaking" : r.value ? "preparing" : T.value ? "listening" : "idle"), xe = He(() => A.value.preparingMessages), Ee = Ne(0), Le = Ne(0);
    let we = null;
    rn(r, (ye) => {
      ye ? (Ee.value = 0, Le.value = Date.now(), we = setInterval(() => {
        Date.now() - Le.value > 8e3 && (Ee.value = (Ee.value + 1) % xe.value.length);
      }, 4e3)) : (we && (clearInterval(we), we = null), Ee.value = 0);
    });
    const Me = He(() => {
      switch (K.value) {
        case "listening":
          return A.value.status.listening;
        case "preparing":
          return xe.value[Ee.value];
        case "speaking":
          return A.value.status.speaking;
        default:
          return A.value.status.ready;
      }
    });
    function ze() {
      const ye = Date.now();
      if (ye - oe < Ru) {
        Se();
        return;
      }
      oe = ye, T.value && (C(), p(!1));
    }
    function it() {
      const ye = Date.now();
      if (ye - oe < Ru) {
        Se();
        return;
      }
      oe = ye, s.value && _();
      const re = o.value.filter((Pe) => Pe.role === "assistant").pop();
      if (re) {
        let Pe = re.content;
        try {
          const _t = JSON.parse(re.content);
          typeof (_t == null ? void 0 : _t.response) == "string" ? Pe = _t.response : typeof (_t == null ? void 0 : _t.answer) == "string" && (Pe = _t.answer);
        } catch {
          const _t = re.content.match(/"(?:response|answer)"\s*:\s*"((?:[^"\\]|\\.)*)"/);
          if (_t)
            try {
              Pe = JSON.parse(`"${_t[1]}"`);
            } catch {
              Pe = _t[1];
            }
        }
        g(Pe);
      }
    }
    function ut(ye) {
      try {
        const re = JSON.parse(ye);
        if (typeof (re == null ? void 0 : re.response) == "string")
          return re.response;
        if (typeof (re == null ? void 0 : re.answer) == "string")
          return re.answer;
      } catch {
        const re = ye.match(/"(?:response|answer)"\s*:\s*"((?:[^"\\]|\\.)*)"/);
        if (re)
          try {
            return JSON.parse(`"${re[1]}"`);
          } catch {
            return re[1];
          }
      }
      return ye;
    }
    function Xe(ye) {
      try {
        const re = JSON.parse(ye);
        if (Array.isArray(re == null ? void 0 : re.suggestions))
          return re.suggestions;
      } catch {
        const re = ye.match(/"suggestions"\s*:\s*\[((?:[^\[\]])*?)\]/);
        if (re)
          try {
            return JSON.parse(`[${re[1]}]`);
          } catch {
          }
      }
      return [];
    }
    const fe = He(() => {
      const ye = ce.value, re = o.value.map((Pe) => {
        const _t = Pe.role === "assistant" ? Xe(Pe.content) : [];
        return {
          role: Pe.role,
          content: ut(Pe.content),
          suggestions: _t
        };
      });
      return re.length === 1 && re[0].role === "assistant" && re[0].suggestions.length === 0 && (re[0].suggestions = ye), re;
    }), L = Ne(null);
    function me() {
      uh(() => {
        L.value && (L.value.scrollTop = L.value.scrollHeight);
      });
    }
    rn(() => o.value.length, () => {
      me();
    });
    function ve(ye) {
      at(ye), me();
    }
    async function Oe() {
      const ye = ue.value.trim();
      ye && (ue.value = "", me(), await at(ye));
    }
    async function Ue() {
      te.value = !0, se.value = null;
      try {
        (await nd()).has_avatar_access || (se.value = {
          code: "FEATURE_NOT_AVAILABLE",
          message: A.value.premium.upgradePremium
        });
      } catch (ye) {
        const re = (ye == null ? void 0 : ye.code) || "FEATURE_NOT_AVAILABLE", Pe = (ye == null ? void 0 : ye.message) || "";
        re === "FEATURE_NOT_AVAILABLE" || re === "UPGRADE_REQUIRED" || re === "PREMIUM_PLUS_REQUIRED" || Pe.includes("Premium") || Pe.includes("upgrade") ? se.value = {
          code: re,
          message: Pe
        } : se.value = {
          code: "FEATURE_NOT_AVAILABLE",
          message: A.value.premium.upgradePremium
        };
      } finally {
        te.value = !1;
      }
    }
    async function ct() {
      if (!Z.value) {
        z.value = !0;
        try {
          const ye = await ed();
          Z.value = de(ye.model_url);
        } catch {
        } finally {
          z.value = !1;
        }
      }
    }
    async function dt() {
      if (!he.value)
        try {
          const ye = await td();
          he.value = de(ye.model_url);
        } catch {
        }
    }
    rn(G, (ye) => {
      ye && !T.value && at(ye);
    }), rn(s, (ye) => {
      n(ye ? "speaking-started" : "speaking-ended");
    });
    function St(ye) {
      if (!ye) return null;
      try {
        const re = Cs(), Pe = ye.includes("?") ? "&" : "?";
        return `${ye}${Pe}api_key=${re.apiKey}`;
      } catch {
        return ye;
      }
    }
    async function bt() {
      try {
        const ye = await Xf();
        if (ye.length > 0) {
          const re = ye[0];
          if (re.pages && re.pages.length > 0) {
            const Pe = re.pages[0];
            v({
              success: !0,
              action: "show_page",
              presentation_id: re.id,
              presentation_title: re.title,
              page_number: Pe.page_number,
              page_title: Pe.title,
              page_image_url: St(Pe.image_url),
              total_pages: re.total_pages,
              reason: "initial_load"
            });
          }
        }
      } catch {
      }
    }
    rn(() => t.isOpen, async (ye) => {
      if (ye) {
        const re = Qd();
        if (ae.value = re.supported, be.value = re.reason, !re.supported) {
          te.value = !1;
          return;
        }
        J.value && await P() === "prompt" && (Re.value = !0), await Ue(), Q.value || (await Promise.all([
          ct(),
          dt(),
          bt()
        ]), !R.value && q.value && (R.value = !0, m(q.value), setTimeout(() => {
          g(q.value);
        }, 500))), n("opened");
      } else
        n("closed");
    }, { immediate: !0 }), rn(w, () => {
      x(q.value), _(), setTimeout(() => {
        g(q.value);
      }, 300);
    });
    async function at(ye) {
      n("message-sent", ye), await f(ye);
      const re = o.value[o.value.length - 1];
      re && re.role === "assistant" && n("message-received", re.content);
    }
    function wt() {
      if (!J.value) {
        V();
        return;
      }
      T.value ? (C(), p(!1)) : (le(), p(!0));
    }
    function Bt() {
      b(), n("close");
    }
    async function ui() {
      await D(), Re.value = !1;
    }
    function di(ye) {
      ye.key === "Escape" && Bt();
    }
    return Wa(() => {
      document.addEventListener("keydown", di), lt();
    }), sr(() => {
      document.removeEventListener("keydown", di), we && (clearInterval(we), we = null), ne && (clearTimeout(ne), ne = null), b();
    }), (ye, re) => (We(), Cu(ah, { to: "body" }, [
      Hn(Ai, { name: "liya-ai-env-vuejs-modal" }, {
        default: Ti(() => [
          i.isOpen ? (We(), qe("div", {
            key: 0,
            class: "liya-ai-env-vuejs-modal-overlay",
            onClick: ml(Bt, ["self"])
          }, [
            O("div", rE, [
              O("header", oE, [
                O("div", aE, [
                  O("div", {
                    class: _n(["liya-ai-env-vuejs-status-dot", { "liya-ai-env-vuejs-status-dot--speaking": ie(s) }])
                  }, null, 2),
                  O("span", null, Fe(Y.value), 1)
                ]),
                O("div", lE, [
                  O("button", {
                    class: "liya-ai-env-vuejs-header__lang-btn",
                    onClick: E,
                    title: ie(w) === "tr" ? "Switch to English" : "Türkçe'ye geç"
                  }, [
                    O("span", uE, Fe(ie(w) === "tr" ? "EN" : "TR"), 1)
                  ], 8, cE),
                  O("button", {
                    class: _n(["liya-ai-env-vuejs-header__settings-btn", { "liya-ai-env-vuejs-header__settings-btn--active": ge.value }]),
                    onClick: re[0] || (re[0] = (Pe) => ge.value = !ge.value),
                    title: ie(A).settings.title
                  }, [...re[9] || (re[9] = [
                    O("svg", {
                      viewBox: "0 0 24 24",
                      fill: "currentColor",
                      width: "20",
                      height: "20"
                    }, [
                      O("path", { d: "M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" })
                    ], -1)
                  ])], 10, dE),
                  i.showCloseButton ? (We(), qe("button", {
                    key: 0,
                    class: "liya-ai-env-vuejs-header__close-btn",
                    onClick: Bt,
                    "aria-label": ie(A).controls.close
                  }, [...re[10] || (re[10] = [
                    O("svg", {
                      viewBox: "0 0 24 24",
                      fill: "currentColor",
                      width: "24",
                      height: "24"
                    }, [
                      O("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
                    ], -1)
                  ])], 8, hE)) : Dt("", !0)
                ])
              ]),
              Hn(Ai, { name: "liya-ai-env-vuejs-settings-panel" }, {
                default: Ti(() => [
                  ge.value ? (We(), qe("div", fE, [
                    O("div", pE, [
                      O("h3", mE, Fe(ie(A).settings.outfitColors), 1),
                      O("button", {
                        class: "liya-ai-env-vuejs-settings-panel__close",
                        onClick: re[1] || (re[1] = (Pe) => ge.value = !1)
                      }, [...re[11] || (re[11] = [
                        O("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "18",
                          height: "18"
                        }, [
                          O("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
                        ], -1)
                      ])])
                    ]),
                    O("div", gE, [
                      O("label", _E, Fe(ie(A).settings.presets), 1),
                      O("div", vE, [
                        (We(!0), qe(us, null, Xr(ie(N), (Pe) => (We(), qe("button", {
                          key: Pe.id,
                          class: _n(["liya-ai-env-vuejs-settings-panel__preset", { "liya-ai-env-vuejs-settings-panel__preset--active": ie(Qe) === Pe.id }]),
                          style: ja({ background: Pe.top }),
                          title: Pe.name,
                          onClick: (_t) => ie(Ce)(Pe.id)
                        }, null, 14, yE))), 128))
                      ])
                    ]),
                    O("div", xE, [
                      O("label", EE, Fe(ie(A).settings.customColor), 1),
                      O("div", SE, [
                        O("div", ME, [
                          O("span", null, Fe(ie(A).settings.top), 1),
                          O("input", {
                            type: "color",
                            value: ie(Ae).top,
                            onInput: re[2] || (re[2] = (Pe) => ie(Ie)("top", Pe.target.value))
                          }, null, 40, AE)
                        ]),
                        O("div", TE, [
                          O("span", null, Fe(ie(A).settings.bottom), 1),
                          O("input", {
                            type: "color",
                            value: ie(Ae).bottom,
                            onInput: re[3] || (re[3] = (Pe) => ie(Ie)("bottom", Pe.target.value))
                          }, null, 40, bE)
                        ]),
                        O("div", wE, [
                          O("span", null, Fe(ie(A).settings.footwear), 1),
                          O("input", {
                            type: "color",
                            value: ie(Ae).footwear,
                            onInput: re[4] || (re[4] = (Pe) => ie(Ie)("footwear", Pe.target.value))
                          }, null, 40, RE)
                        ])
                      ])
                    ]),
                    O("button", {
                      class: "liya-ai-env-vuejs-settings-panel__reset",
                      onClick: re[5] || (re[5] = //@ts-ignore
                      (...Pe) => ie(Te) && ie(Te)(...Pe))
                    }, Fe(ie(A).settings.reset), 1)
                  ])) : Dt("", !0)
                ]),
                _: 1
              }),
              Re.value ? (We(), qe("div", CE, [
                re[12] || (re[12] = O("div", { class: "liya-ai-env-vuejs-mic-permission__icon" }, [
                  O("svg", {
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    width: "24",
                    height: "24"
                  }, [
                    O("path", { d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" })
                  ])
                ], -1)),
                O("div", LE, [
                  O("span", PE, Fe(ie(A).mic.permissionRequired), 1),
                  O("span", IE, Fe(ie(A).mic.permissionMessage), 1)
                ]),
                O("button", {
                  class: "liya-ai-env-vuejs-mic-permission__btn",
                  onClick: ui
                }, Fe(ie(A).mic.allowButton), 1)
              ])) : Dt("", !0),
              O("div", DE, [
                ae.value ? te.value ? (We(), qe("div", VE, [...re[14] || (re[14] = [
                  O("div", { class: "liya-ai-env-vuejs-access-loading__spinner" }, null, -1)
                ])])) : Q.value ? (We(), qe("div", kE, [
                  O("div", zE, [
                    re[16] || (re[16] = O("div", { class: "liya-ai-env-vuejs-premium-overlay__icon" }, [
                      O("svg", {
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        width: "48",
                        height: "48"
                      }, [
                        O("path", { d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" })
                      ])
                    ], -1)),
                    O("h3", HE, Fe(ie(A).premium.title), 1),
                    O("p", GE, Fe(W.value), 1),
                    O("a", WE, [
                      re[15] || (re[15] = O("svg", {
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        width: "16",
                        height: "16"
                      }, [
                        O("path", { d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" })
                      ], -1)),
                      Lu(" " + Fe(ie(A).premium.viewPlans), 1)
                    ])
                  ])
                ])) : (We(), qe(us, { key: 3 }, [
                  Hn($d, {
                    ref_key: "liyaAiEnvVuejsClassroomSceneRef",
                    ref: Be,
                    "classroom-model-url": he.value,
                    "avatar-model-url": Z.value,
                    "avatar-position": i.avatarPosition,
                    "camera-config": i.cameraConfig,
                    "is-speaking": ie(s),
                    visemes: ie(a),
                    gestures: i.enableGestures ? ie(l) : [],
                    "current-time": ie(c),
                    "presentation-result": ie(u),
                    onLoaded: M,
                    onError: re[6] || (re[6] = (Pe) => ye.$emit("error", Pe))
                  }, null, 8, ["classroom-model-url", "avatar-model-url", "avatar-position", "camera-config", "is-speaking", "visemes", "gestures", "current-time", "presentation-result"]),
                  Hn(Ai, { name: "liya-ai-env-vuejs-glass-fade" }, {
                    default: Ti(() => [
                      ie(d) ? (We(), qe("div", jE, [
                        O("div", XE, [
                          O("button", {
                            class: "liya-ai-env-vuejs-glass-popup__close",
                            onClick: re[7] || (re[7] = //@ts-ignore
                            (...Pe) => ie(h) && ie(h)(...Pe)),
                            "aria-label": ie(A).controls.close
                          }, [...re[17] || (re[17] = [
                            O("svg", {
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              width: "18",
                              height: "18"
                            }, [
                              O("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
                            ], -1)
                          ])], 8, qE),
                          re[18] || (re[18] = O("div", { class: "liya-ai-env-vuejs-glass-popup__icon" }, "⚠️", -1)),
                          O("h4", YE, Fe(ie(A).errors.problemOccurred), 1),
                          O("p", KE, Fe(ie(A).errors.tryAgainLater), 1)
                        ])
                      ])) : Dt("", !0)
                    ]),
                    _: 1
                  }),
                  O("div", {
                    class: _n(["liya-ai-env-vuejs-status-indicator", `liya-ai-env-vuejs-status-indicator--${K.value}`])
                  }, [
                    re[21] || (re[21] = O("span", { class: "liya-ai-env-vuejs-status-indicator__dot" }, null, -1)),
                    O("span", $E, Fe(Me.value), 1),
                    K.value !== "idle" ? (We(), qe("button", {
                      key: 0,
                      class: "liya-ai-env-vuejs-status-indicator__btn",
                      onClick: ze,
                      title: ie(A).controls.cancel
                    }, [...re[19] || (re[19] = [
                      O("svg", {
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        width: "20",
                        height: "20"
                      }, [
                        O("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
                      ], -1)
                    ])], 8, JE)) : Dt("", !0),
                    K.value === "idle" && ie(o).length > 0 ? (We(), qe("button", {
                      key: 1,
                      class: "liya-ai-env-vuejs-status-indicator__btn",
                      onClick: it,
                      title: ie(A).controls.replay
                    }, [...re[20] || (re[20] = [
                      O("svg", {
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        width: "20",
                        height: "20"
                      }, [
                        O("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })
                      ], -1)
                    ])], 8, ZE)) : Dt("", !0),
                    Hn(Ai, { name: "liya-ai-env-vuejs-patience-tooltip" }, {
                      default: Ti(() => [
                        I.value ? (We(), qe("div", QE, Fe(k.value), 1)) : Dt("", !0)
                      ]),
                      _: 1
                    })
                  ], 2),
                  O("div", eS, [
                    O("p", tS, Fe(ie(A).controls.pressAndSpeak), 1),
                    O("button", {
                      class: _n(["liya-ai-env-vuejs-controls__mic", {
                        "liya-ai-env-vuejs-controls__mic--active": ie(T),
                        "liya-ai-env-vuejs-controls__mic--disabled": ie(r) || ie(s),
                        "liya-ai-env-vuejs-controls__mic--not-supported": !ie(J)
                      }]),
                      disabled: ie(r) || ie(s),
                      onClick: wt,
                      "aria-label": ie(T) ? ie(A).voice.stopRecording : ie(A).voice.startRecording
                    }, [
                      ie(T) ? (We(), qe("svg", sS, [...re[23] || (re[23] = [
                        O("path", { d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" }, null, -1),
                        O("path", { d: "M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" }, null, -1)
                      ])])) : (We(), qe("svg", iS, [...re[22] || (re[22] = [
                        O("path", { d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" }, null, -1)
                      ])]))
                    ], 10, nS),
                    Hn(Ai, { name: "liya-ai-env-vuejs-toast" }, {
                      default: Ti(() => [
                        ee.value ? (We(), qe("div", rS, [
                          re[24] || (re[24] = O("svg", {
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            width: "18",
                            height: "18"
                          }, [
                            O("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" })
                          ], -1)),
                          O("span", null, Fe(ie(A).voice.notSupported), 1)
                        ])) : Dt("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  O("div", oS, [
                    O("div", {
                      class: "liya-ai-env-vuejs-chat-panel__messages",
                      ref_key: "liyaAiEnvVuejsMessagesRef",
                      ref: L
                    }, [
                      (We(!0), qe(us, null, Xr(fe.value, (Pe, _t) => (We(), qe("div", {
                        key: _t,
                        class: _n(["liya-ai-env-vuejs-chat-panel__message", {
                          "liya-ai-env-vuejs-chat-panel__message--user": Pe.role === "user",
                          "liya-ai-env-vuejs-chat-panel__message--assistant": Pe.role === "assistant"
                        }])
                      }, [
                        O("span", aS, Fe(Pe.role === "user" ? ie(A).chat.userRole : Y.value), 1),
                        O("p", null, Fe(Pe.content), 1),
                        Pe.suggestions.length > 0 ? (We(), qe("div", lS, [
                          (We(!0), qe(us, null, Xr(Pe.suggestions, (In, Gi) => (We(), qe("button", {
                            key: Gi,
                            class: "liya-ai-env-vuejs-chat-panel__suggestion",
                            onClick: (Wi) => ve(In)
                          }, Fe(In), 9, cS))), 128))
                        ])) : Dt("", !0)
                      ], 2))), 128)),
                      fe.value.length === 0 ? (We(), qe("div", uS, Fe(q.value), 1)) : Dt("", !0)
                    ], 512),
                    O("form", {
                      class: "liya-ai-env-vuejs-chat-panel__input-form",
                      onSubmit: ml(Oe, ["prevent"])
                    }, [
                      lh(O("input", {
                        "onUpdate:modelValue": re[8] || (re[8] = (Pe) => ue.value = Pe),
                        type: "text",
                        class: "liya-ai-env-vuejs-chat-panel__input",
                        placeholder: Q.value ? ie(A).chat.premiumRequired : ie(A).chat.placeholder,
                        disabled: ie(r) || ie(s) || Q.value
                      }, null, 8, dS), [
                        [ch, ue.value]
                      ]),
                      O("button", {
                        type: "submit",
                        class: "liya-ai-env-vuejs-chat-panel__send-btn",
                        disabled: !ue.value.trim() || ie(r) || ie(s) || Q.value
                      }, [...re[25] || (re[25] = [
                        O("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "24",
                          height: "24"
                        }, [
                          O("path", { d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" })
                        ], -1)
                      ])], 8, hS)
                    ], 32)
                  ])
                ], 64)) : (We(), qe("div", UE, [
                  O("div", NE, [
                    re[13] || (re[13] = O("div", { class: "liya-ai-env-vuejs-unsupported-overlay__icon" }, [
                      O("svg", {
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        width: "48",
                        height: "48"
                      }, [
                        O("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" })
                      ])
                    ], -1)),
                    O("h3", OE, Fe(ie(A).browser.unsupportedTitle), 1),
                    O("p", FE, Fe(ie(A).browser.unsupportedMessage), 1),
                    O("p", BE, Fe(ie(A).browser.recommendedBrowsers), 1)
                  ])
                ]))
              ])
            ])
          ])) : Dt("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), pS = /* @__PURE__ */ Ao(fS, [["__scopeId", "data-v-566bc402"]]), mS = { class: "liya-ai-env-vuejs-standalone-container" }, gS = { class: "liya-ai-env-vuejs-header" }, _S = { class: "liya-ai-env-vuejs-header__left" }, vS = ["aria-label"], yS = { class: "liya-ai-env-vuejs-header__title" }, xS = { class: "liya-ai-env-vuejs-header__right" }, ES = ["title"], SS = { class: "liya-ai-env-vuejs-header__lang-text" }, MS = ["title"], AS = { class: "liya-ai-env-vuejs-header__brand" }, TS = {
  key: 0,
  class: "liya-ai-env-vuejs-settings-panel"
}, bS = { class: "liya-ai-env-vuejs-settings-panel__header" }, wS = { class: "liya-ai-env-vuejs-settings-panel__title" }, RS = { class: "liya-ai-env-vuejs-settings-panel__section" }, CS = { class: "liya-ai-env-vuejs-settings-panel__label" }, LS = { class: "liya-ai-env-vuejs-settings-panel__presets" }, PS = ["title", "onClick"], IS = { class: "liya-ai-env-vuejs-settings-panel__section" }, DS = { class: "liya-ai-env-vuejs-settings-panel__label" }, US = { class: "liya-ai-env-vuejs-settings-panel__colors" }, NS = { class: "liya-ai-env-vuejs-settings-panel__color-row" }, OS = ["value"], FS = { class: "liya-ai-env-vuejs-settings-panel__color-row" }, BS = ["value"], VS = { class: "liya-ai-env-vuejs-settings-panel__color-row" }, kS = ["value"], zS = {
  key: 0,
  class: "liya-ai-env-vuejs-mic-permission"
}, HS = { class: "liya-ai-env-vuejs-mic-permission__text" }, GS = { class: "liya-ai-env-vuejs-mic-permission__title" }, WS = { class: "liya-ai-env-vuejs-mic-permission__desc" }, jS = { class: "liya-ai-env-vuejs-scene" }, XS = {
  key: 0,
  class: "liya-ai-env-vuejs-unsupported-overlay"
}, qS = { class: "liya-ai-env-vuejs-unsupported-overlay__content" }, YS = { class: "liya-ai-env-vuejs-unsupported-overlay__title" }, KS = { class: "liya-ai-env-vuejs-unsupported-overlay__text" }, $S = { class: "liya-ai-env-vuejs-unsupported-overlay__browsers" }, JS = {
  key: 1,
  class: "liya-ai-env-vuejs-access-loading"
}, ZS = {
  key: 2,
  class: "liya-ai-env-vuejs-premium-overlay"
}, QS = { class: "liya-ai-env-vuejs-premium-overlay__content" }, eM = { class: "liya-ai-env-vuejs-premium-overlay__title" }, tM = { class: "liya-ai-env-vuejs-premium-overlay__text" }, nM = {
  href: "https://liyalabs.com/pricing",
  target: "_blank",
  rel: "noopener",
  class: "liya-ai-env-vuejs-premium-overlay__btn"
}, iM = {
  key: 0,
  class: "liya-ai-env-vuejs-subtitle"
}, sM = {
  key: 0,
  class: "liya-ai-env-vuejs-thinking-dots"
}, rM = { class: "liya-ai-env-vuejs-controls" }, oM = ["disabled", "aria-label"], aM = {
  key: 0,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "32",
  height: "32"
}, lM = {
  key: 1,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "32",
  height: "32"
}, cM = { class: "liya-ai-env-vuejs-controls__hint" }, uM = {
  key: 0,
  class: "liya-ai-env-vuejs-controls__toast"
}, dM = /* @__PURE__ */ ir({
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
  setup(i, { emit: e }) {
    const t = i, n = e, {
      isSpeaking: s,
      isProcessing: r,
      messages: o,
      visemes: a,
      gestures: l,
      audioTime: c,
      currentPresentation: u,
      handleMessage: d,
      speakWithAvatar: h,
      addWelcomeMessage: f,
      updateWelcomeMessage: g,
      setListening: _,
      cleanup: p
    } = Jd(), m = Ne(!1), { t: x, locale: v, setLocale: b } = Za();
    function R() {
      const I = v.value === "tr" ? "en" : "tr";
      b(I);
    }
    function A(I) {
      return I && I.replace(/^http:\/\//i, "https://");
    }
    const {
      isRecording: w,
      transcript: H,
      isSupported: E,
      startRecording: T,
      stopRecording: G,
      checkMicPermission: J,
      requestMicPermission: le
    } = Zd(), C = Ne(!1);
    function P() {
      C.value = !0, setTimeout(() => {
        C.value = !1;
      }, 3e3);
    }
    const D = He(() => t.welcomeMessage || x.value.chat.emptyWelcome), ee = He(() => t.assistantName || "AI Assistant"), V = Ne(t.avatarModelUrl), q = Ne(t.classroomModelUrl), Y = Ne(!0), Z = Ne(null), he = He(() => Z.value !== null), z = Ne(!0), te = Ne(void 0), se = Ne(!1), Q = Ne(!1), { colors: ae, presets: be, currentPresetId: Re, setPreset: ge, setColor: Ae, reset: N, init: Qe } = nh(), Ce = Ne(null);
    function Ie() {
      Te(), n("loaded");
    }
    function Te() {
      var I;
      (I = Ce.value) != null && I.applyOutfitColors && Ce.value.applyOutfitColors({
        top: ae.value.top,
        bottom: ae.value.bottom,
        footwear: ae.value.footwear
      });
    }
    rn(ae, () => {
      Te();
    }, { deep: !0 });
    const lt = He(() => Z.value ? Z.value.code === "PREMIUM_PLUS_REQUIRED" ? x.value.premium.upgradePremiumPlus : x.value.premium.upgradePremium : "");
    async function Be() {
      Y.value = !0, Z.value = null;
      try {
        (await nd()).has_avatar_access || (Z.value = {
          code: "FEATURE_NOT_AVAILABLE",
          message: x.value.premium.upgradePremium
        });
      } catch (I) {
        const k = (I == null ? void 0 : I.code) || "FEATURE_NOT_AVAILABLE", ne = (I == null ? void 0 : I.message) || "";
        k === "FEATURE_NOT_AVAILABLE" || k === "UPGRADE_REQUIRED" || k === "PREMIUM_PLUS_REQUIRED" || ne.includes("Premium") || ne.includes("upgrade") ? Z.value = {
          code: k,
          message: ne
        } : Z.value = {
          code: "FEATURE_NOT_AVAILABLE",
          message: x.value.premium.upgradePremium
        };
      } finally {
        Y.value = !1;
      }
    }
    async function M() {
      if (!V.value)
        try {
          const I = await ed();
          V.value = A(I.model_url);
        } catch {
        }
    }
    async function y() {
      if (!q.value)
        try {
          const I = await td();
          q.value = A(I.model_url);
        } catch {
        }
    }
    async function W() {
      await le(), se.value = !1;
    }
    Wa(async () => {
      const I = Qd();
      if (z.value = I.supported, te.value = I.reason, !I.supported) {
        Y.value = !1;
        return;
      }
      Qe(), E.value && await J() === "prompt" && (se.value = !0), await Be(), he.value || (await Promise.all([
        M(),
        y()
      ]), !m.value && D.value && (m.value = !0, f(D.value), setTimeout(() => {
        h(D.value);
      }, 500)));
    }), rn(H, (I) => {
      I && !w.value && de(I);
    }), rn(s, (I) => {
      n(I ? "speaking-started" : "speaking-ended");
    }), rn(v, () => {
      g(D.value), p(), setTimeout(() => {
        h(D.value);
      }, 300);
    });
    async function de(I) {
      n("message-sent", I), await d(I);
      const k = o.value[o.value.length - 1];
      k && k.role === "assistant" && n("message-received", k.content);
    }
    function ce() {
      if (!E.value) {
        P();
        return;
      }
      w.value ? (G(), _(!1)) : (T(), _(!0));
    }
    function ue() {
      p(), n("back");
    }
    function oe() {
      var I;
      return o.value.length === 0 ? D.value : ((I = o.value[o.value.length - 1]) == null ? void 0 : I.content) || "";
    }
    return sr(() => {
      p();
    }), (I, k) => (We(), qe("div", mS, [
      O("header", gS, [
        O("div", _S, [
          i.showBackButton ? (We(), qe("button", {
            key: 0,
            class: "liya-ai-env-vuejs-header__back-btn",
            onClick: ue,
            "aria-label": ie(x).controls.back
          }, [...k[7] || (k[7] = [
            O("svg", {
              viewBox: "0 0 24 24",
              fill: "currentColor",
              width: "24",
              height: "24"
            }, [
              O("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" })
            ], -1)
          ])], 8, vS)) : Dt("", !0),
          O("div", yS, [
            O("div", {
              class: _n(["liya-ai-env-vuejs-status-dot", { "liya-ai-env-vuejs-status-dot--speaking": ie(s) }])
            }, null, 2),
            O("span", null, Fe(ee.value), 1)
          ])
        ]),
        O("div", xS, [
          O("button", {
            class: "liya-ai-env-vuejs-header__lang-btn",
            onClick: R,
            title: ie(v) === "tr" ? "Switch to English" : "Türkçe'ye geç"
          }, [
            O("span", SS, Fe(ie(v) === "tr" ? "EN" : "TR"), 1)
          ], 8, ES),
          O("button", {
            class: _n(["liya-ai-env-vuejs-header__settings-btn", { "liya-ai-env-vuejs-header__settings-btn--active": Q.value }]),
            onClick: k[0] || (k[0] = (ne) => Q.value = !Q.value),
            title: ie(x).settings.title
          }, [...k[8] || (k[8] = [
            O("svg", {
              viewBox: "0 0 24 24",
              fill: "currentColor",
              width: "20",
              height: "20"
            }, [
              O("path", { d: "M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" })
            ], -1)
          ])], 10, MS),
          O("div", AS, Fe(ie(x).branding.environmentTitle), 1)
        ])
      ]),
      Hn(Ai, { name: "liya-ai-env-vuejs-settings-panel" }, {
        default: Ti(() => [
          Q.value ? (We(), qe("div", TS, [
            O("div", bS, [
              O("h3", wS, Fe(ie(x).settings.outfitColors), 1),
              O("button", {
                class: "liya-ai-env-vuejs-settings-panel__close",
                onClick: k[1] || (k[1] = (ne) => Q.value = !1)
              }, [...k[9] || (k[9] = [
                O("svg", {
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  width: "18",
                  height: "18"
                }, [
                  O("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
                ], -1)
              ])])
            ]),
            O("div", RS, [
              O("label", CS, Fe(ie(x).settings.presets), 1),
              O("div", LS, [
                (We(!0), qe(us, null, Xr(ie(be), (ne) => (We(), qe("button", {
                  key: ne.id,
                  class: _n(["liya-ai-env-vuejs-settings-panel__preset", { "liya-ai-env-vuejs-settings-panel__preset--active": ie(Re) === ne.id }]),
                  style: ja({ background: ne.top }),
                  title: ne.name,
                  onClick: (Se) => ie(ge)(ne.id)
                }, null, 14, PS))), 128))
              ])
            ]),
            O("div", IS, [
              O("label", DS, Fe(ie(x).settings.customColor), 1),
              O("div", US, [
                O("div", NS, [
                  O("span", null, Fe(ie(x).settings.top), 1),
                  O("input", {
                    type: "color",
                    value: ie(ae).top,
                    onInput: k[2] || (k[2] = (ne) => ie(Ae)("top", ne.target.value))
                  }, null, 40, OS)
                ]),
                O("div", FS, [
                  O("span", null, Fe(ie(x).settings.bottom), 1),
                  O("input", {
                    type: "color",
                    value: ie(ae).bottom,
                    onInput: k[3] || (k[3] = (ne) => ie(Ae)("bottom", ne.target.value))
                  }, null, 40, BS)
                ]),
                O("div", VS, [
                  O("span", null, Fe(ie(x).settings.footwear), 1),
                  O("input", {
                    type: "color",
                    value: ie(ae).footwear,
                    onInput: k[4] || (k[4] = (ne) => ie(Ae)("footwear", ne.target.value))
                  }, null, 40, kS)
                ])
              ])
            ]),
            O("button", {
              class: "liya-ai-env-vuejs-settings-panel__reset",
              onClick: k[5] || (k[5] = //@ts-ignore
              (...ne) => ie(N) && ie(N)(...ne))
            }, Fe(ie(x).settings.reset), 1)
          ])) : Dt("", !0)
        ]),
        _: 1
      }),
      se.value ? (We(), qe("div", zS, [
        k[10] || (k[10] = O("div", { class: "liya-ai-env-vuejs-mic-permission__icon" }, [
          O("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            width: "24",
            height: "24"
          }, [
            O("path", { d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" })
          ])
        ], -1)),
        O("div", HS, [
          O("span", GS, Fe(ie(x).mic.permissionRequired), 1),
          O("span", WS, Fe(ie(x).mic.permissionMessage), 1)
        ]),
        O("button", {
          class: "liya-ai-env-vuejs-mic-permission__btn",
          onClick: W
        }, Fe(ie(x).mic.allowButton), 1)
      ])) : Dt("", !0),
      O("div", jS, [
        z.value ? Y.value ? (We(), qe("div", JS, [...k[12] || (k[12] = [
          O("div", { class: "liya-ai-env-vuejs-access-loading__spinner" }, null, -1)
        ])])) : he.value ? (We(), qe("div", ZS, [
          O("div", QS, [
            k[14] || (k[14] = O("div", { class: "liya-ai-env-vuejs-premium-overlay__icon" }, [
              O("svg", {
                viewBox: "0 0 24 24",
                fill: "currentColor",
                width: "48",
                height: "48"
              }, [
                O("path", { d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" })
              ])
            ], -1)),
            O("h3", eM, Fe(ie(x).premium.title), 1),
            O("p", tM, Fe(lt.value), 1),
            O("a", nM, [
              k[13] || (k[13] = O("svg", {
                viewBox: "0 0 24 24",
                fill: "currentColor",
                width: "16",
                height: "16"
              }, [
                O("path", { d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" })
              ], -1)),
              Lu(" " + Fe(ie(x).premium.viewPlans), 1)
            ])
          ])
        ])) : (We(), qe(us, { key: 3 }, [
          Hn($d, {
            ref_key: "liyaAiEnvVuejsClassroomSceneRef",
            ref: Ce,
            "classroom-model-url": q.value,
            "avatar-model-url": V.value,
            "avatar-position": i.avatarPosition,
            "camera-config": i.cameraConfig,
            "is-speaking": ie(s),
            visemes: ie(a),
            gestures: i.enableGestures ? ie(l) : [],
            "current-time": ie(c),
            "presentation-result": ie(u),
            onLoaded: Ie,
            onError: k[6] || (k[6] = (ne) => I.$emit("error", ne))
          }, null, 8, ["classroom-model-url", "avatar-model-url", "avatar-position", "camera-config", "is-speaking", "visemes", "gestures", "current-time", "presentation-result"]),
          i.enableSubtitles ? (We(), qe("div", iM, [
            ie(r) ? (We(), qe("div", sM, [...k[15] || (k[15] = [
              O("span", { class: "liya-ai-env-vuejs-thinking-dot" }, null, -1),
              O("span", { class: "liya-ai-env-vuejs-thinking-dot" }, null, -1),
              O("span", { class: "liya-ai-env-vuejs-thinking-dot" }, null, -1)
            ])])) : (We(), qe("p", {
              key: 1,
              class: _n(["liya-ai-env-vuejs-subtitle__text", { "liya-ai-env-vuejs-subtitle__welcome": ie(o).length === 0 }])
            }, Fe(oe()), 3))
          ])) : Dt("", !0),
          O("div", rM, [
            O("button", {
              class: _n(["liya-ai-env-vuejs-controls__mic", {
                "liya-ai-env-vuejs-controls__mic--active": ie(w),
                "liya-ai-env-vuejs-controls__mic--disabled": ie(r) || ie(s),
                "liya-ai-env-vuejs-controls__mic--not-supported": !ie(E)
              }]),
              disabled: ie(r) || ie(s),
              onClick: ce,
              "aria-label": ie(w) ? ie(x).voice.stopRecording : ie(x).voice.startRecording
            }, [
              ie(w) ? (We(), qe("svg", lM, [...k[17] || (k[17] = [
                O("path", { d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" }, null, -1),
                O("path", { d: "M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" }, null, -1)
              ])])) : (We(), qe("svg", aM, [...k[16] || (k[16] = [
                O("path", { d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" }, null, -1)
              ])]))
            ], 10, oM),
            O("p", cM, Fe(ie(w) ? ie(x).voice.listening : ie(r) ? ie(x).voice.thinking : ie(x).voice.pressToSpeak), 1),
            Hn(Ai, { name: "liya-ai-env-vuejs-toast" }, {
              default: Ti(() => [
                C.value ? (We(), qe("div", uM, [
                  k[18] || (k[18] = O("svg", {
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    width: "18",
                    height: "18"
                  }, [
                    O("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" })
                  ], -1)),
                  O("span", null, Fe(ie(x).voice.notSupported), 1)
                ])) : Dt("", !0)
              ]),
              _: 1
            })
          ])
        ], 64)) : (We(), qe("div", XS, [
          O("div", qS, [
            k[11] || (k[11] = O("div", { class: "liya-ai-env-vuejs-unsupported-overlay__icon" }, [
              O("svg", {
                viewBox: "0 0 24 24",
                fill: "currentColor",
                width: "48",
                height: "48"
              }, [
                O("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" })
              ])
            ], -1)),
            O("h3", YS, Fe(ie(x).browser.unsupportedTitle), 1),
            O("p", KS, Fe(ie(x).browser.unsupportedMessage), 1),
            O("p", $S, Fe(ie(x).browser.recommendedBrowsers), 1)
          ])
        ]))
      ])
    ]));
  }
}), hM = /* @__PURE__ */ Ao(dM, [["__scopeId", "data-v-ededceb9"]]), VM = /* @__PURE__ */ ir({
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
  setup(i) {
    const e = i, t = He(() => e.mode === "modal_fullscreen");
    return (n, s) => (We(), Cu(dh(t.value ? pS : hM), {
      "is-open": i.isOpen,
      "show-back-button": i.showBackButton,
      "show-close-button": i.showCloseButton,
      "classroom-model-url": i.classroomModelUrl,
      "avatar-model-url": i.avatarModelUrl,
      "avatar-position": i.avatarPosition,
      "camera-config": i.cameraConfig,
      "welcome-message": i.welcomeMessage,
      "enable-gestures": i.enableGestures,
      "enable-subtitles": i.enableSubtitles,
      "assistant-name": i.assistantName,
      theme: i.theme,
      onClose: s[0] || (s[0] = (r) => n.$emit("close")),
      onBack: s[1] || (s[1] = (r) => n.$emit("back")),
      onOpened: s[2] || (s[2] = (r) => n.$emit("opened")),
      onClosed: s[3] || (s[3] = (r) => n.$emit("closed")),
      onMessageSent: s[4] || (s[4] = (r) => n.$emit("message-sent", r)),
      onMessageReceived: s[5] || (s[5] = (r) => n.$emit("message-received", r)),
      onSpeakingStarted: s[6] || (s[6] = (r) => n.$emit("speaking-started")),
      onSpeakingEnded: s[7] || (s[7] = (r) => n.$emit("speaking-ended")),
      onLoaded: s[8] || (s[8] = (r) => n.$emit("loaded")),
      onError: s[9] || (s[9] = (r) => n.$emit("error", r))
    }, null, 40, ["is-open", "show-back-button", "show-close-button", "classroom-model-url", "avatar-model-url", "avatar-position", "camera-config", "welcome-message", "enable-gestures", "enable-subtitles", "assistant-name", "theme"]));
  }
}), js = Ne(0), Wr = Ne(!1), cs = Ne(new Uint8Array(0));
let ti = null, Tn = null, Xs = null, jr = null;
function kM() {
  const i = He(() => js.value), e = He(() => Wr.value), t = He(() => cs.value);
  async function n() {
    try {
      const l = await navigator.mediaDevices.getUserMedia({ audio: !0 }), c = window.AudioContext || window.webkitAudioContext;
      ti = new c(), ti.state === "suspended" && await ti.resume(), Tn = ti.createAnalyser(), Tn.fftSize = 256, Tn.smoothingTimeConstant = 0.8, Xs = ti.createMediaStreamSource(l), Xs.connect(Tn);
      const u = Tn.frequencyBinCount;
      return cs.value = new Uint8Array(u), Wr.value = !0, s(), !0;
    } catch {
      return !1;
    }
  }
  function s() {
    if (!Wr.value || !Tn) return;
    Tn.getByteFrequencyData(cs.value);
    let l = 0;
    for (let c = 0; c < cs.value.length; c++)
      l += cs.value[c];
    js.value = l / cs.value.length / 255, jr = requestAnimationFrame(s);
  }
  function r() {
    Wr.value = !1, jr && (cancelAnimationFrame(jr), jr = null), Xs && (Xs.disconnect(), Xs = null), Tn && (Tn.disconnect(), Tn = null), ti && (ti.close(), ti = null), js.value = 0;
  }
  function o() {
    const l = js.value;
    return l < 0.1 ? 0.2 : l < 0.3 ? 0.4 : l < 0.5 ? 0.6 : l < 0.7 ? 0.8 : 1;
  }
  function a() {
    const l = js.value;
    return l < 0.3 ? "low" : l < 0.6 ? "medium" : "high";
  }
  return sr(() => {
    r();
  }), {
    audioLevel: i,
    isAnalyzing: e,
    frequencyData: t,
    startAnalyzing: n,
    stopAnalyzing: r,
    getGestureIntensityFromAudio: o,
    getSpeakingEmphasis: a
  };
}
export {
  Qr as LIYA_AI_ENV_VUEJS_GESTURE_DEFINITIONS,
  $d as LiyaAiEnvVuejsClassroomScene,
  VM as LiyaAiEnvVuejsEnvironment,
  pS as LiyaAiEnvVuejsEnvironmentModal,
  hM as LiyaAiEnvVuejsEnvironmentStandalone,
  BM as LiyaAiEnvVuejsFullBodyAvatar,
  OM as LiyaAiEnvVuejsPlugin,
  OM as default,
  Yf as liyaAiEnvVuejsDetectBrowserLocale,
  jf as liyaAiEnvVuejsGenerateSpeech,
  Gf as liyaAiEnvVuejsGetClient,
  Cs as liyaAiEnvVuejsGetConfig,
  FM as liyaAiEnvVuejsGetGestureDefinition,
  Xf as liyaAiEnvVuejsGetPresentations,
  NM as liyaAiEnvVuejsGetSessionHistory,
  Hf as liyaAiEnvVuejsInitializeClient,
  Bx as liyaAiEnvVuejsInterpolateKeyframes,
  UM as liyaAiEnvVuejsIsInitialized,
  $r as liyaAiEnvVuejsIsSupportedLocale,
  Wf as liyaAiEnvVuejsSendMessage,
  qf as liyaAiEnvVuejsTranslations,
  kM as useLiyaAiEnvVuejsAudioAnalyzer,
  Jd as useLiyaAiEnvVuejsEnvironment,
  Kd as useLiyaAiEnvVuejsGestures,
  Za as useLiyaAiEnvVuejsI18n,
  Zd as useLiyaAiEnvVuejsVoice
};
