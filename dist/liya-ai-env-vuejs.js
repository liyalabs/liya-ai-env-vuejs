var oh = Object.defineProperty;
var ah = (i, e, t) => e in i ? oh(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Io = (i, e, t) => ah(i, typeof e != "symbol" ? e + "" : e, t);
import { ref as Ne, computed as We, readonly as no, defineComponent as or, openBlock as De, createElementBlock as Fe, renderSlot as lh, watch as rn, onMounted as ja, onUnmounted as ar, createElementVNode as U, toDisplayString as Ve, createCommentVNode as xt, normalizeStyle as Xa, Fragment as Gn, createBlock as Sa, Teleport as _l, createVNode as Rn, Transition as ai, withCtx as li, withModifiers as Do, normalizeClass as un, unref as se, renderList as $s, createTextVNode as Pu, withDirectives as ch, vModelText as uh, nextTick as dh, resolveDynamicComponent as hh } from "vue";
function Iu(i, e) {
  return function() {
    return i.apply(e, arguments);
  };
}
const { toString: fh } = Object.prototype, { getPrototypeOf: qa } = Object, { iterator: mo, toStringTag: Du } = Symbol, go = /* @__PURE__ */ ((i) => (e) => {
  const t = fh.call(e);
  return i[t] || (i[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Sn = (i) => (i = i.toLowerCase(), (e) => go(e) === i), _o = (i) => (e) => typeof e === i, { isArray: Ls } = Array, xs = _o("undefined");
function lr(i) {
  return i !== null && !xs(i) && i.constructor !== null && !xs(i.constructor) && Jt(i.constructor.isBuffer) && i.constructor.isBuffer(i);
}
const Uu = Sn("ArrayBuffer");
function ph(i) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(i) : e = i && i.buffer && Uu(i.buffer), e;
}
const mh = _o("string"), Jt = _o("function"), Nu = _o("number"), cr = (i) => i !== null && typeof i == "object", gh = (i) => i === !0 || i === !1, $r = (i) => {
  if (go(i) !== "object")
    return !1;
  const e = qa(i);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Du in i) && !(mo in i);
}, _h = (i) => {
  if (!cr(i) || lr(i))
    return !1;
  try {
    return Object.keys(i).length === 0 && Object.getPrototypeOf(i) === Object.prototype;
  } catch {
    return !1;
  }
}, vh = Sn("Date"), yh = Sn("File"), xh = Sn("Blob"), Eh = Sn("FileList"), Sh = (i) => cr(i) && Jt(i.pipe), Mh = (i) => {
  let e;
  return i && (typeof FormData == "function" && i instanceof FormData || Jt(i.append) && ((e = go(i)) === "formdata" || // detect form-data instance
  e === "object" && Jt(i.toString) && i.toString() === "[object FormData]"));
}, Ah = Sn("URLSearchParams"), [Th, bh, wh, Rh] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Sn), Ch = (i) => i.trim ? i.trim() : i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ur(i, e, { allOwnKeys: t = !1 } = {}) {
  if (i === null || typeof i > "u")
    return;
  let n, s;
  if (typeof i != "object" && (i = [i]), Ls(i))
    for (n = 0, s = i.length; n < s; n++)
      e.call(null, i[n], n, i);
  else {
    if (lr(i))
      return;
    const r = t ? Object.getOwnPropertyNames(i) : Object.keys(i), o = r.length;
    let a;
    for (n = 0; n < o; n++)
      a = r[n], e.call(null, i[a], a, i);
  }
}
function Ou(i, e) {
  if (lr(i))
    return null;
  e = e.toLowerCase();
  const t = Object.keys(i);
  let n = t.length, s;
  for (; n-- > 0; )
    if (s = t[n], e === s.toLowerCase())
      return s;
  return null;
}
const Ii = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Fu = (i) => !xs(i) && i !== Ii;
function Ma() {
  const { caseless: i, skipUndefined: e } = Fu(this) && this || {}, t = {}, n = (s, r) => {
    if (r === "__proto__" || r === "constructor" || r === "prototype")
      return;
    const o = i && Ou(t, r) || r;
    $r(t[o]) && $r(s) ? t[o] = Ma(t[o], s) : $r(s) ? t[o] = Ma({}, s) : Ls(s) ? t[o] = s.slice() : (!e || !xs(s)) && (t[o] = s);
  };
  for (let s = 0, r = arguments.length; s < r; s++)
    arguments[s] && ur(arguments[s], n);
  return t;
}
const Lh = (i, e, t, { allOwnKeys: n } = {}) => (ur(
  e,
  (s, r) => {
    t && Jt(s) ? Object.defineProperty(i, r, {
      value: Iu(s, t),
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
), i), Ph = (i) => (i.charCodeAt(0) === 65279 && (i = i.slice(1)), i), Ih = (i, e, t, n) => {
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
}, Dh = (i, e, t, n) => {
  let s, r, o;
  const a = {};
  if (e = e || {}, i == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(i), r = s.length; r-- > 0; )
      o = s[r], (!n || n(o, i, e)) && !a[o] && (e[o] = i[o], a[o] = !0);
    i = t !== !1 && qa(i);
  } while (i && (!t || t(i, e)) && i !== Object.prototype);
  return e;
}, Uh = (i, e, t) => {
  i = String(i), (t === void 0 || t > i.length) && (t = i.length), t -= e.length;
  const n = i.indexOf(e, t);
  return n !== -1 && n === t;
}, Nh = (i) => {
  if (!i) return null;
  if (Ls(i)) return i;
  let e = i.length;
  if (!Nu(e)) return null;
  const t = new Array(e);
  for (; e-- > 0; )
    t[e] = i[e];
  return t;
}, Oh = /* @__PURE__ */ ((i) => (e) => i && e instanceof i)(typeof Uint8Array < "u" && qa(Uint8Array)), Fh = (i, e) => {
  const n = (i && i[mo]).call(i);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const r = s.value;
    e.call(i, r[0], r[1]);
  }
}, Bh = (i, e) => {
  let t;
  const n = [];
  for (; (t = i.exec(e)) !== null; )
    n.push(t);
  return n;
}, Vh = Sn("HTMLFormElement"), kh = (i) => i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(t, n, s) {
  return n.toUpperCase() + s;
}), vl = (({ hasOwnProperty: i }) => (e, t) => i.call(e, t))(Object.prototype), zh = Sn("RegExp"), Bu = (i, e) => {
  const t = Object.getOwnPropertyDescriptors(i), n = {};
  ur(t, (s, r) => {
    let o;
    (o = e(s, r, i)) !== !1 && (n[r] = o || s);
  }), Object.defineProperties(i, n);
}, Hh = (i) => {
  Bu(i, (e, t) => {
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
}, Gh = (i, e) => {
  const t = {}, n = (s) => {
    s.forEach((r) => {
      t[r] = !0;
    });
  };
  return Ls(i) ? n(i) : n(String(i).split(e)), t;
}, Wh = () => {
}, jh = (i, e) => i != null && Number.isFinite(i = +i) ? i : e;
function Xh(i) {
  return !!(i && Jt(i.append) && i[Du] === "FormData" && i[mo]);
}
const qh = (i) => {
  const e = new Array(10), t = (n, s) => {
    if (cr(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (lr(n))
        return n;
      if (!("toJSON" in n)) {
        e[s] = n;
        const r = Ls(n) ? [] : {};
        return ur(n, (o, a) => {
          const l = t(o, s + 1);
          !xs(l) && (r[a] = l);
        }), e[s] = void 0, r;
      }
    }
    return n;
  };
  return t(i, 0);
}, Yh = Sn("AsyncFunction"), $h = (i) => i && (cr(i) || Jt(i)) && Jt(i.then) && Jt(i.catch), Vu = ((i, e) => i ? setImmediate : e ? ((t, n) => (Ii.addEventListener(
  "message",
  ({ source: s, data: r }) => {
    s === Ii && r === t && n.length && n.shift()();
  },
  !1
), (s) => {
  n.push(s), Ii.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(typeof setImmediate == "function", Jt(Ii.postMessage)), Kh = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ii) : typeof process < "u" && process.nextTick || Vu, Jh = (i) => i != null && Jt(i[mo]), X = {
  isArray: Ls,
  isArrayBuffer: Uu,
  isBuffer: lr,
  isFormData: Mh,
  isArrayBufferView: ph,
  isString: mh,
  isNumber: Nu,
  isBoolean: gh,
  isObject: cr,
  isPlainObject: $r,
  isEmptyObject: _h,
  isReadableStream: Th,
  isRequest: bh,
  isResponse: wh,
  isHeaders: Rh,
  isUndefined: xs,
  isDate: vh,
  isFile: yh,
  isBlob: xh,
  isRegExp: zh,
  isFunction: Jt,
  isStream: Sh,
  isURLSearchParams: Ah,
  isTypedArray: Oh,
  isFileList: Eh,
  forEach: ur,
  merge: Ma,
  extend: Lh,
  trim: Ch,
  stripBOM: Ph,
  inherits: Ih,
  toFlatObject: Dh,
  kindOf: go,
  kindOfTest: Sn,
  endsWith: Uh,
  toArray: Nh,
  forEachEntry: Fh,
  matchAll: Bh,
  isHTMLForm: Vh,
  hasOwnProperty: vl,
  hasOwnProp: vl,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Bu,
  freezeMethods: Hh,
  toObjectSet: Gh,
  toCamelCase: kh,
  noop: Wh,
  toFiniteNumber: jh,
  findKey: Ou,
  global: Ii,
  isContextDefined: Fu,
  isSpecCompliantForm: Xh,
  toJSONObject: qh,
  isAsyncFn: Yh,
  isThenable: $h,
  setImmediate: Vu,
  asap: Kh,
  isIterable: Jh
};
let He = class ku extends Error {
  static from(e, t, n, s, r, o) {
    const a = new ku(e.message, t || e.code, n, s, r);
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
He.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
He.ERR_BAD_OPTION = "ERR_BAD_OPTION";
He.ECONNABORTED = "ECONNABORTED";
He.ETIMEDOUT = "ETIMEDOUT";
He.ERR_NETWORK = "ERR_NETWORK";
He.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
He.ERR_DEPRECATED = "ERR_DEPRECATED";
He.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
He.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
He.ERR_CANCELED = "ERR_CANCELED";
He.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
He.ERR_INVALID_URL = "ERR_INVALID_URL";
const Zh = null;
function Aa(i) {
  return X.isPlainObject(i) || X.isArray(i);
}
function zu(i) {
  return X.endsWith(i, "[]") ? i.slice(0, -2) : i;
}
function yl(i, e, t) {
  return i ? i.concat(e).map(function(s, r) {
    return s = zu(s), !t && r ? "[" + s + "]" : s;
  }).join(t ? "." : "") : e;
}
function Qh(i) {
  return X.isArray(i) && !i.some(Aa);
}
const ef = X.toFlatObject(X, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function vo(i, e, t) {
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
      throw new He("Blob is not supported. Use a Buffer instead.");
    return X.isArrayBuffer(g) || X.isTypedArray(g) ? l && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function u(g, _, p) {
    let m = g;
    if (g && !p && typeof g == "object") {
      if (X.endsWith(_, "{}"))
        _ = n ? _ : _.slice(0, -2), g = JSON.stringify(g);
      else if (X.isArray(g) && Qh(g) || (X.isFileList(g) || X.endsWith(_, "[]")) && (m = X.toArray(g)))
        return _ = zu(_), m.forEach(function(v, b) {
          !(X.isUndefined(v) || v === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? yl([_], b, r) : o === null ? _ : _ + "[]",
            c(v)
          );
        }), !1;
    }
    return Aa(g) ? !0 : (e.append(yl(p, _, r), c(g)), !1);
  }
  const d = [], h = Object.assign(ef, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Aa
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
function xl(i) {
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
function Ya(i, e) {
  this._pairs = [], i && vo(i, this, e);
}
const Hu = Ya.prototype;
Hu.append = function(e, t) {
  this._pairs.push([e, t]);
};
Hu.toString = function(e) {
  const t = e ? function(n) {
    return e.call(this, n, xl);
  } : xl;
  return this._pairs.map(function(s) {
    return t(s[0]) + "=" + t(s[1]);
  }, "").join("&");
};
function tf(i) {
  return encodeURIComponent(i).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Gu(i, e, t) {
  if (!e)
    return i;
  const n = t && t.encode || tf, s = X.isFunction(t) ? {
    serialize: t
  } : t, r = s && s.serialize;
  let o;
  if (r ? o = r(e, s) : o = X.isURLSearchParams(e) ? e.toString() : new Ya(e, s).toString(n), o) {
    const a = i.indexOf("#");
    a !== -1 && (i = i.slice(0, a)), i += (i.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return i;
}
class El {
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
const $a = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, nf = typeof URLSearchParams < "u" ? URLSearchParams : Ya, sf = typeof FormData < "u" ? FormData : null, rf = typeof Blob < "u" ? Blob : null, of = {
  isBrowser: !0,
  classes: {
    URLSearchParams: nf,
    FormData: sf,
    Blob: rf
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ka = typeof window < "u" && typeof document < "u", Ta = typeof navigator == "object" && navigator || void 0, af = Ka && (!Ta || ["ReactNative", "NativeScript", "NS"].indexOf(Ta.product) < 0), lf = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", cf = Ka && window.location.href || "http://localhost", uf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ka,
  hasStandardBrowserEnv: af,
  hasStandardBrowserWebWorkerEnv: lf,
  navigator: Ta,
  origin: cf
}, Symbol.toStringTag, { value: "Module" })), Ht = {
  ...uf,
  ...of
};
function df(i, e) {
  return vo(i, new Ht.classes.URLSearchParams(), {
    visitor: function(t, n, s, r) {
      return Ht.isNode && X.isBuffer(t) ? (this.append(n, t.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function hf(i) {
  return X.matchAll(/\w+|\[(\w*)]/g, i).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function ff(i) {
  const e = {}, t = Object.keys(i);
  let n;
  const s = t.length;
  let r;
  for (n = 0; n < s; n++)
    r = t[n], e[r] = i[r];
  return e;
}
function Wu(i) {
  function e(t, n, s, r) {
    let o = t[r++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o), l = r >= t.length;
    return o = !o && X.isArray(s) ? s.length : o, l ? (X.hasOwnProp(s, o) ? s[o] = [s[o], n] : s[o] = n, !a) : ((!s[o] || !X.isObject(s[o])) && (s[o] = []), e(t, n, s[o], r) && X.isArray(s[o]) && (s[o] = ff(s[o])), !a);
  }
  if (X.isFormData(i) && X.isFunction(i.entries)) {
    const t = {};
    return X.forEachEntry(i, (n, s) => {
      e(hf(n), s, t, 0);
    }), t;
  }
  return null;
}
function pf(i, e, t) {
  if (X.isString(i))
    try {
      return (e || JSON.parse)(i), X.trim(i);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (t || JSON.stringify)(i);
}
const dr = {
  transitional: $a,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, t) {
    const n = t.getContentType() || "", s = n.indexOf("application/json") > -1, r = X.isObject(e);
    if (r && X.isHTMLForm(e) && (e = new FormData(e)), X.isFormData(e))
      return s ? JSON.stringify(Wu(e)) : e;
    if (X.isArrayBuffer(e) || X.isBuffer(e) || X.isStream(e) || X.isFile(e) || X.isBlob(e) || X.isReadableStream(e))
      return e;
    if (X.isArrayBufferView(e))
      return e.buffer;
    if (X.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (r) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return df(e, this.formSerializer).toString();
      if ((a = X.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return vo(
          a ? { "files[]": e } : e,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return r || s ? (t.setContentType("application/json", !1), pf(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || dr.transitional, n = t && t.forcedJSONParsing, s = this.responseType === "json";
    if (X.isResponse(e) || X.isReadableStream(e))
      return e;
    if (e && X.isString(e) && (n && !this.responseType || s)) {
      const o = !(t && t.silentJSONParsing) && s;
      try {
        return JSON.parse(e, this.parseReviver);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? He.from(a, He.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: Ht.classes.FormData,
    Blob: Ht.classes.Blob
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
  dr.headers[i] = {};
});
const mf = X.toObjectSet([
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
]), gf = (i) => {
  const e = {};
  let t, n, s;
  return i && i.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), t = o.substring(0, s).trim().toLowerCase(), n = o.substring(s + 1).trim(), !(!t || e[t] && mf[t]) && (t === "set-cookie" ? e[t] ? e[t].push(n) : e[t] = [n] : e[t] = e[t] ? e[t] + ", " + n : n);
  }), e;
}, Sl = Symbol("internals");
function Fs(i) {
  return i && String(i).trim().toLowerCase();
}
function Kr(i) {
  return i === !1 || i == null ? i : X.isArray(i) ? i.map(Kr) : String(i);
}
function _f(i) {
  const e = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = t.exec(i); )
    e[n[1]] = n[2];
  return e;
}
const vf = (i) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());
function Uo(i, e, t, n, s) {
  if (X.isFunction(n))
    return n.call(this, e, t);
  if (s && (e = t), !!X.isString(e)) {
    if (X.isString(n))
      return e.indexOf(n) !== -1;
    if (X.isRegExp(n))
      return n.test(e);
  }
}
function yf(i) {
  return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function xf(i, e) {
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
      const u = Fs(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = X.findKey(s, u);
      (!d || s[d] === void 0 || c === !0 || c === void 0 && s[d] !== !1) && (s[d || l] = Kr(a));
    }
    const o = (a, l) => X.forEach(a, (c, u) => r(c, u, l));
    if (X.isPlainObject(e) || e instanceof this.constructor)
      o(e, t);
    else if (X.isString(e) && (e = e.trim()) && !vf(e))
      o(gf(e), t);
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
    if (e = Fs(e), e) {
      const n = X.findKey(this, e);
      if (n) {
        const s = this[n];
        if (!t)
          return s;
        if (t === !0)
          return _f(s);
        if (X.isFunction(t))
          return t.call(this, s, n);
        if (X.isRegExp(t))
          return t.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = Fs(e), e) {
      const n = X.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!t || Uo(this, this[n], n, t)));
    }
    return !1;
  }
  delete(e, t) {
    const n = this;
    let s = !1;
    function r(o) {
      if (o = Fs(o), o) {
        const a = X.findKey(n, o);
        a && (!t || Uo(n, n[a], a, t)) && (delete n[a], s = !0);
      }
    }
    return X.isArray(e) ? e.forEach(r) : r(e), s;
  }
  clear(e) {
    const t = Object.keys(this);
    let n = t.length, s = !1;
    for (; n--; ) {
      const r = t[n];
      (!e || Uo(this, this[r], r, e, !0)) && (delete this[r], s = !0);
    }
    return s;
  }
  normalize(e) {
    const t = this, n = {};
    return X.forEach(this, (s, r) => {
      const o = X.findKey(n, r);
      if (o) {
        t[o] = Kr(s), delete t[r];
        return;
      }
      const a = e ? yf(r) : String(r).trim();
      a !== r && delete t[r], t[a] = Kr(s), n[a] = !0;
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
    const n = (this[Sl] = this[Sl] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function r(o) {
      const a = Fs(o);
      n[a] || (xf(s, o), n[a] = !0);
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
function No(i, e) {
  const t = this || dr, n = e || t, s = Zt.from(n.headers);
  let r = n.data;
  return X.forEach(i, function(a) {
    r = a.call(t, r, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), r;
}
function ju(i) {
  return !!(i && i.__CANCEL__);
}
let hr = class extends He {
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
    super(e ?? "canceled", He.ERR_CANCELED, t, n), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function Xu(i, e, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status) ? i(t) : e(new He(
    "Request failed with status code " + t.status,
    [He.ERR_BAD_REQUEST, He.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function Ef(i) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
  return e && e[1] || "";
}
function Sf(i, e) {
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
function Mf(i, e) {
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
const io = (i, e, t = 3) => {
  let n = 0;
  const s = Sf(50, 250);
  return Mf((r) => {
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
}, Ml = (i, e) => {
  const t = i != null;
  return [(n) => e[0]({
    lengthComputable: t,
    total: i,
    loaded: n
  }), e[1]];
}, Al = (i) => (...e) => X.asap(() => i(...e)), Af = Ht.hasStandardBrowserEnv ? /* @__PURE__ */ ((i, e) => (t) => (t = new URL(t, Ht.origin), i.protocol === t.protocol && i.host === t.host && (e || i.port === t.port)))(
  new URL(Ht.origin),
  Ht.navigator && /(msie|trident)/i.test(Ht.navigator.userAgent)
) : () => !0, Tf = Ht.hasStandardBrowserEnv ? (
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
function bf(i) {
  return typeof i != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}
function wf(i, e) {
  return e ? i.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : i;
}
function qu(i, e, t) {
  let n = !bf(e);
  return i && (n || t == !1) ? wf(i, e) : e;
}
const Tl = (i) => i instanceof Zt ? { ...i } : i;
function ki(i, e) {
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
    headers: (c, u, d) => s(Tl(c), Tl(u), d, !0)
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
const Yu = (i) => {
  const e = ki({}, i);
  let { data: t, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: r, headers: o, auth: a } = e;
  if (e.headers = o = Zt.from(o), e.url = Gu(qu(e.baseURL, e.url, e.allowAbsoluteUrls), i.params, i.paramsSerializer), a && o.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), X.isFormData(t)) {
    if (Ht.hasStandardBrowserEnv || Ht.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if (X.isFunction(t.getHeaders)) {
      const l = t.getHeaders(), c = ["content-type", "content-length"];
      Object.entries(l).forEach(([u, d]) => {
        c.includes(u.toLowerCase()) && o.set(u, d);
      });
    }
  }
  if (Ht.hasStandardBrowserEnv && (n && X.isFunction(n) && (n = n(e)), n || n !== !1 && Af(e.url))) {
    const l = s && r && Tf.read(r);
    l && o.set(s, l);
  }
  return e;
}, Rf = typeof XMLHttpRequest < "u", Cf = Rf && function(i) {
  return new Promise(function(t, n) {
    const s = Yu(i);
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
      Xu(function(w) {
        t(w), _();
      }, function(w) {
        n(w), _();
      }, R), p = null;
    }
    "onloadend" in p ? p.onloadend = m : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(m);
    }, p.onabort = function() {
      p && (n(new He("Request aborted", He.ECONNABORTED, i, p)), p = null);
    }, p.onerror = function(b) {
      const R = b && b.message ? b.message : "Network Error", A = new He(R, He.ERR_NETWORK, i, p);
      A.event = b || null, n(A), p = null;
    }, p.ontimeout = function() {
      let b = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const R = s.transitional || $a;
      s.timeoutErrorMessage && (b = s.timeoutErrorMessage), n(new He(
        b,
        R.clarifyTimeoutError ? He.ETIMEDOUT : He.ECONNABORTED,
        i,
        p
      )), p = null;
    }, r === void 0 && o.setContentType(null), "setRequestHeader" in p && X.forEach(o.toJSON(), function(b, R) {
      p.setRequestHeader(R, b);
    }), X.isUndefined(s.withCredentials) || (p.withCredentials = !!s.withCredentials), a && a !== "json" && (p.responseType = s.responseType), c && ([h, g] = io(c, !0), p.addEventListener("progress", h)), l && p.upload && ([d, f] = io(l), p.upload.addEventListener("progress", d), p.upload.addEventListener("loadend", f)), (s.cancelToken || s.signal) && (u = (v) => {
      p && (n(!v || v.type ? new hr(null, i, p) : v), p.abort(), p = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const x = Ef(s.url);
    if (x && Ht.protocols.indexOf(x) === -1) {
      n(new He("Unsupported protocol " + x + ":", He.ERR_BAD_REQUEST, i));
      return;
    }
    p.send(r || null);
  });
}, Lf = (i, e) => {
  const { length: t } = i = i ? i.filter(Boolean) : [];
  if (e || t) {
    let n = new AbortController(), s;
    const r = function(c) {
      if (!s) {
        s = !0, a();
        const u = c instanceof Error ? c : this.reason;
        n.abort(u instanceof He ? u : new hr(u instanceof Error ? u.message : u));
      }
    };
    let o = e && setTimeout(() => {
      o = null, r(new He(`timeout of ${e}ms exceeded`, He.ETIMEDOUT));
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
}, Pf = function* (i, e) {
  let t = i.byteLength;
  if (t < e) {
    yield i;
    return;
  }
  let n = 0, s;
  for (; n < t; )
    s = n + e, yield i.slice(n, s), n = s;
}, If = async function* (i, e) {
  for await (const t of Df(i))
    yield* Pf(t, e);
}, Df = async function* (i) {
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
}, bl = (i, e, t, n) => {
  const s = If(i, e);
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
}, wl = 64 * 1024, { isFunction: pr } = X, Uf = (({ Request: i, Response: e }) => ({
  Request: i,
  Response: e
}))(X.global), {
  ReadableStream: Rl,
  TextEncoder: Cl
} = X.global, Ll = (i, ...e) => {
  try {
    return !!i(...e);
  } catch {
    return !1;
  }
}, Nf = (i) => {
  i = X.merge.call({
    skipUndefined: !0
  }, Uf, i);
  const { fetch: e, Request: t, Response: n } = i, s = e ? pr(e) : typeof fetch == "function", r = pr(t), o = pr(n);
  if (!s)
    return !1;
  const a = s && pr(Rl), l = s && (typeof Cl == "function" ? /* @__PURE__ */ ((g) => (_) => g.encode(_))(new Cl()) : async (g) => new Uint8Array(await new t(g).arrayBuffer())), c = r && a && Ll(() => {
    let g = !1;
    const _ = new t(Ht.origin, {
      body: new Rl(),
      method: "POST",
      get duplex() {
        return g = !0, "half";
      }
    }).headers.has("Content-Type");
    return g && !_;
  }), u = o && a && Ll(() => X.isReadableStream(new n("").body)), d = {
    stream: u && ((g) => g.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((g) => {
    !d[g] && (d[g] = (_, p) => {
      let m = _ && _[g];
      if (m)
        return m.call(_);
      throw new He(`Response type '${g}' is not supported`, He.ERR_NOT_SUPPORT, p);
    });
  });
  const h = async (g) => {
    if (g == null)
      return 0;
    if (X.isBlob(g))
      return g.size;
    if (X.isSpecCompliantForm(g))
      return (await new t(Ht.origin, {
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
    } = Yu(g), G = e || fetch;
    w = w ? (w + "").toLowerCase() : "text";
    let J = Lf([x, v && v.toAbortSignal()], b), le = null;
    const L = J && J.unsubscribe && (() => {
      J.unsubscribe();
    });
    let P;
    try {
      if (A && c && p !== "get" && p !== "head" && (P = await f(H, m)) !== 0) {
        let Q = new t(_, {
          method: "POST",
          body: m,
          duplex: "half"
        }), he;
        if (X.isFormData(m) && (he = Q.headers.get("content-type")) && H.setContentType(he), Q.body) {
          const [z, ne] = Ml(
            P,
            io(Al(A))
          );
          m = bl(Q.body, wl, z, ne);
        }
      }
      X.isString(E) || (E = E ? "include" : "omit");
      const I = r && "credentials" in t.prototype, te = {
        ...T,
        signal: J,
        method: p.toUpperCase(),
        headers: H.normalize().toJSON(),
        body: m,
        duplex: "half",
        credentials: I ? E : void 0
      };
      le = r && new t(_, te);
      let V = await (r ? G(le, T) : G(_, te));
      const q = u && (w === "stream" || w === "response");
      if (u && (R || q && L)) {
        const Q = {};
        ["status", "statusText", "headers"].forEach((re) => {
          Q[re] = V[re];
        });
        const he = X.toFiniteNumber(V.headers.get("content-length")), [z, ne] = R && Ml(
          he,
          io(Al(R), !0)
        ) || [];
        V = new n(
          bl(V.body, wl, z, () => {
            ne && ne(), L && L();
          }),
          Q
        );
      }
      w = w || "text";
      let Y = await d[X.findKey(d, w) || "text"](V, g);
      return !q && L && L(), await new Promise((Q, he) => {
        Xu(Q, he, {
          data: Y,
          headers: Zt.from(V.headers),
          status: V.status,
          statusText: V.statusText,
          config: g,
          request: le
        });
      });
    } catch (I) {
      throw L && L(), I && I.name === "TypeError" && /Load failed|fetch/i.test(I.message) ? Object.assign(
        new He("Network Error", He.ERR_NETWORK, g, le, I && I.response),
        {
          cause: I.cause || I
        }
      ) : He.from(I, I && I.code, g, le, I && I.response);
    }
  };
}, Of = /* @__PURE__ */ new Map(), $u = (i) => {
  let e = i && i.env || {};
  const { fetch: t, Request: n, Response: s } = e, r = [
    n,
    s,
    t
  ];
  let o = r.length, a = o, l, c, u = Of;
  for (; a--; )
    l = r[a], c = u.get(l), c === void 0 && u.set(l, c = a ? /* @__PURE__ */ new Map() : Nf(e)), u = c;
  return c;
};
$u();
const Ja = {
  http: Zh,
  xhr: Cf,
  fetch: {
    get: $u
  }
};
X.forEach(Ja, (i, e) => {
  if (i) {
    try {
      Object.defineProperty(i, "name", { value: e });
    } catch {
    }
    Object.defineProperty(i, "adapterName", { value: e });
  }
});
const Pl = (i) => `- ${i}`, Ff = (i) => X.isFunction(i) || i === null || i === !1;
function Bf(i, e) {
  i = X.isArray(i) ? i : [i];
  const { length: t } = i;
  let n, s;
  const r = {};
  for (let o = 0; o < t; o++) {
    n = i[o];
    let a;
    if (s = n, !Ff(n) && (s = Ja[(a = String(n)).toLowerCase()], s === void 0))
      throw new He(`Unknown adapter '${a}'`);
    if (s && (X.isFunction(s) || (s = s.get(e))))
      break;
    r[a || "#" + o] = s;
  }
  if (!s) {
    const o = Object.entries(r).map(
      ([l, c]) => `adapter ${l} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = t ? o.length > 1 ? `since :
` + o.map(Pl).join(`
`) : " " + Pl(o[0]) : "as no adapter specified";
    throw new He(
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
  getAdapter: Bf,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ja
};
function Oo(i) {
  if (i.cancelToken && i.cancelToken.throwIfRequested(), i.signal && i.signal.aborted)
    throw new hr(null, i);
}
function Il(i) {
  return Oo(i), i.headers = Zt.from(i.headers), i.data = No.call(
    i,
    i.transformRequest
  ), ["post", "put", "patch"].indexOf(i.method) !== -1 && i.headers.setContentType("application/x-www-form-urlencoded", !1), Ku.getAdapter(i.adapter || dr.adapter, i)(i).then(function(n) {
    return Oo(i), n.data = No.call(
      i,
      i.transformResponse,
      n
    ), n.headers = Zt.from(n.headers), n;
  }, function(n) {
    return ju(n) || (Oo(i), n && n.response && (n.response.data = No.call(
      i,
      i.transformResponse,
      n.response
    ), n.response.headers = Zt.from(n.response.headers))), Promise.reject(n);
  });
}
const Ju = "1.13.5", yo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((i, e) => {
  yo[i] = function(n) {
    return typeof n === i || "a" + (e < 1 ? "n " : " ") + i;
  };
});
const Dl = {};
yo.transitional = function(e, t, n) {
  function s(r, o) {
    return "[Axios v" + Ju + "] Transitional option '" + r + "'" + o + (n ? ". " + n : "");
  }
  return (r, o, a) => {
    if (e === !1)
      throw new He(
        s(o, " has been removed" + (t ? " in " + t : "")),
        He.ERR_DEPRECATED
      );
    return t && !Dl[o] && (Dl[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(r, o, a) : !0;
  };
};
yo.spelling = function(e) {
  return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
};
function Vf(i, e, t) {
  if (typeof i != "object")
    throw new He("options must be an object", He.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(i);
  let s = n.length;
  for (; s-- > 0; ) {
    const r = n[s], o = e[r];
    if (o) {
      const a = i[r], l = a === void 0 || o(a, r, i);
      if (l !== !0)
        throw new He("option " + r + " must be " + l, He.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new He("Unknown option " + r, He.ERR_BAD_OPTION);
  }
}
const Jr = {
  assertOptions: Vf,
  validators: yo
}, an = Jr.validators;
let Oi = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new El(),
      response: new El()
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
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = ki(this.defaults, t);
    const { transitional: n, paramsSerializer: s, headers: r } = t;
    n !== void 0 && Jr.assertOptions(n, {
      silentJSONParsing: an.transitional(an.boolean),
      forcedJSONParsing: an.transitional(an.boolean),
      clarifyTimeoutError: an.transitional(an.boolean),
      legacyInterceptorReqResOrdering: an.transitional(an.boolean)
    }, !1), s != null && (X.isFunction(s) ? t.paramsSerializer = {
      serialize: s
    } : Jr.assertOptions(s, {
      encode: an.function,
      serialize: an.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), Jr.assertOptions(t, {
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
      const p = t.transitional || $a;
      p && p.legacyInterceptorReqResOrdering ? a.unshift(_.fulfilled, _.rejected) : a.push(_.fulfilled, _.rejected);
    });
    const c = [];
    this.interceptors.response.forEach(function(_) {
      c.push(_.fulfilled, _.rejected);
    });
    let u, d = 0, h;
    if (!l) {
      const g = [Il.bind(this), void 0];
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
      u = Il.call(this, f);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, h = c.length; d < h; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(e) {
    e = ki(this.defaults, e);
    const t = qu(e.baseURL, e.url, e.allowAbsoluteUrls);
    return Gu(t, e.params, e.paramsSerializer);
  }
};
X.forEach(["delete", "get", "head", "options"], function(e) {
  Oi.prototype[e] = function(t, n) {
    return this.request(ki(n || {}, {
      method: e,
      url: t,
      data: (n || {}).data
    }));
  };
});
X.forEach(["post", "put", "patch"], function(e) {
  function t(n) {
    return function(r, o, a) {
      return this.request(ki(a || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: r,
        data: o
      }));
    };
  }
  Oi.prototype[e] = t(), Oi.prototype[e + "Form"] = t(!0);
});
let kf = class Zu {
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
      n.reason || (n.reason = new hr(r, o, a), t(n.reason));
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
      token: new Zu(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
};
function zf(i) {
  return function(t) {
    return i.apply(null, t);
  };
}
function Hf(i) {
  return X.isObject(i) && i.isAxiosError === !0;
}
const ba = {
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
Object.entries(ba).forEach(([i, e]) => {
  ba[e] = i;
});
function Qu(i) {
  const e = new Oi(i), t = Iu(Oi.prototype.request, e);
  return X.extend(t, Oi.prototype, e, { allOwnKeys: !0 }), X.extend(t, e, null, { allOwnKeys: !0 }), t.create = function(s) {
    return Qu(ki(i, s));
  }, t;
}
const Tt = Qu(dr);
Tt.Axios = Oi;
Tt.CanceledError = hr;
Tt.CancelToken = kf;
Tt.isCancel = ju;
Tt.VERSION = Ju;
Tt.toFormData = vo;
Tt.AxiosError = He;
Tt.Cancel = Tt.CanceledError;
Tt.all = function(e) {
  return Promise.all(e);
};
Tt.spread = zf;
Tt.isAxiosError = Hf;
Tt.mergeConfig = ki;
Tt.AxiosHeaders = Zt;
Tt.formToJSON = (i) => Wu(X.isHTMLForm(i) ? new FormData(i) : i);
Tt.getAdapter = Ku.getAdapter;
Tt.HttpStatusCode = ba;
Tt.default = Tt;
const {
  Axios: LM,
  AxiosError: PM,
  CanceledError: IM,
  isCancel: DM,
  CancelToken: UM,
  VERSION: NM,
  all: OM,
  Cancel: FM,
  isAxiosError: BM,
  spread: VM,
  toFormData: kM,
  AxiosHeaders: zM,
  HttpStatusCode: HM,
  formToJSON: GM,
  getAdapter: WM,
  mergeConfig: jM
} = Tt;
let nr = null, so = null;
function Gf(i) {
  so = i, nr = Tt.create({
    baseURL: i.apiUrl,
    timeout: 6e4,
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": i.apiKey
    }
  }), nr.interceptors.response.use(
    (e) => e,
    (e) => Promise.reject(e)
  );
}
function Wf() {
  if (!nr)
    throw new Error("[LiyaAiEnvVuejs] API client not initialized. Call liyaAiEnvVuejsInitializeClient first.");
  return nr;
}
function Ps() {
  if (!so)
    throw new Error("[LiyaAiEnvVuejs] Config not initialized. Call liyaAiEnvVuejsInitializeClient first.");
  return so;
}
function XM() {
  return nr !== null && so !== null;
}
async function ji(i, e, t) {
  var s, r, o, a;
  const n = Wf();
  try {
    return (await n.request({
      method: i,
      url: e,
      data: t
    })).data;
  } catch (l) {
    return Tt.isAxiosError(l) ? {
      status: "error",
      message: ((r = (s = l.response) == null ? void 0 : s.data) == null ? void 0 : r.message) || l.message,
      code: ((a = (o = l.response) == null ? void 0 : o.data) == null ? void 0 : a.code) || void 0
    } : {
      status: "error",
      message: "An unexpected error occurred"
    };
  }
}
class ed extends Error {
  constructor(t, n) {
    super(t);
    Io(this, "code");
    this.code = n, this.name = "LiyaAiEnvVuejsApiError";
  }
}
async function jf(i, e) {
  const n = {
    assistant_id: Ps().assistantId,
    message: i,
    session_id: e
  }, s = await ji(
    "POST",
    "/api/v1/external/chat/",
    n
  );
  if (s.status === "success" && s.data)
    return s.data;
  if (s.code)
    throw new ed(s.message || "API error", s.code);
  return null;
}
async function Xf(i, e) {
  const t = {
    text: i,
    voice: (e == null ? void 0 : e.voice) || "nova",
    speed: (e == null ? void 0 : e.speed) || 1,
    include_audio: (e == null ? void 0 : e.include_audio) ?? !0,
    include_gestures: (e == null ? void 0 : e.include_gestures) ?? !0
  }, n = await ji(
    "POST",
    "/api/v1/external/avatar/speech/",
    t
  );
  return n.status === "success" && n.data ? n.data : null;
}
async function qM(i) {
  const e = await ji(
    "GET",
    `/api/v1/external/sessions/${i}/messages/`
  );
  return e.status === "success" && e.data ? e.data.messages : [];
}
class Za extends Error {
  constructor(t, n) {
    super(t);
    Io(this, "code");
    this.code = n, this.name = "LiyaAiEnvVuejsAvatarApiError";
  }
}
async function td(i) {
  const t = Ps().assistantId, n = t ? `?assistant_id=${t}` : "", s = await ji(
    "GET",
    `/api/v1/external/avatar/model/${n}`
  );
  if (s.status === "success" && s.data)
    return s.data;
  throw new Za(
    s.message || "Failed to get avatar model",
    "AVATAR_MODEL_ERROR"
  );
}
async function nd(i) {
  const t = Ps().assistantId, n = t ? `?assistant_id=${t}` : "", s = await ji(
    "GET",
    `/api/v1/external/scene/background/${n}`
  );
  if (s.status === "success" && s.data)
    return s.data;
  throw new Za(
    s.message || "Failed to get scene background",
    "SCENE_BACKGROUND_ERROR"
  );
}
async function qf(i) {
  const e = Ps(), t = i || e.assistantId, n = t ? `?assistant_id=${t}` : "", s = await ji(
    "GET",
    `/api/v1/external/presentations/${n}`
  );
  return s.status === "success" && s.data ? s.data : [];
}
async function id() {
  const i = await ji(
    "GET",
    "/api/v1/external/user/access/"
  );
  if (i.status === "success" && i.data)
    return i.data;
  throw new Za(
    i.message || "Failed to check user access",
    "USER_ACCESS_ERROR"
  );
}
const Yf = {
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
      "Derse başla",
      "Bir sonraki slayta geç",
      "Bir önceki slayta geç"
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
      "Start the lesson",
      "Go to next slide",
      "Go to previous slide"
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
function Zr(i) {
  return i === "tr" || i === "en";
}
function $f() {
  if (typeof window > "u" || typeof navigator > "u")
    return "tr";
  const e = (navigator.language || navigator.userLanguage || "").split("-")[0].toLowerCase();
  return Zr(e) ? e : "tr";
}
const xi = Ne("tr");
function Qa() {
  const i = We(() => xi.value), e = We(() => Yf[xi.value]);
  function t(s) {
    Zr(s) ? xi.value = s : xi.value = "tr";
  }
  function n(s) {
    s && Zr(s) ? xi.value = s : s ? xi.value = "tr" : xi.value = $f();
  }
  return {
    locale: no(i),
    t: e,
    setLocale: t,
    initLocale: n,
    liyaAiEnvVuejsIsSupportedLocale: Zr
  };
}
const YM = {
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
    Gf(e);
    const { initLocale: t } = Qa();
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
const el = "160", Kf = 0, Ul = 1, Jf = 2, sd = 1, rd = 2, Hn = 3, Xn = 0, Qt = 1, Ln = 2, fi = 0, _s = 1, Nl = 2, Ol = 3, Fl = 4, Zf = 5, Li = 100, Qf = 101, ep = 102, Bl = 103, Vl = 104, tp = 200, np = 201, ip = 202, sp = 203, wa = 204, Ra = 205, rp = 206, op = 207, ap = 208, lp = 209, cp = 210, up = 211, dp = 212, hp = 213, fp = 214, pp = 0, mp = 1, gp = 2, ro = 3, _p = 4, vp = 5, yp = 6, xp = 7, od = 0, Ep = 1, Sp = 2, pi = 0, Mp = 1, Ap = 2, Tp = 3, ad = 4, bp = 5, wp = 6, kl = "attached", Rp = "detached", ld = 300, Es = 301, Ss = 302, Ca = 303, La = 304, xo = 306, Ms = 1e3, dn = 1001, oo = 1002, Ut = 1003, Pa = 1004, Qr = 1005, Kt = 1006, cd = 1007, zi = 1008, mi = 1009, Cp = 1010, Lp = 1011, tl = 1012, ud = 1013, di = 1014, Wn = 1015, ir = 1016, dd = 1017, hd = 1018, Fi = 1020, Pp = 1021, hn = 1023, Ip = 1024, Dp = 1025, Bi = 1026, As = 1027, Up = 1028, fd = 1029, Np = 1030, pd = 1031, md = 1033, Fo = 33776, Bo = 33777, Vo = 33778, ko = 33779, zl = 35840, Hl = 35841, Gl = 35842, Wl = 35843, gd = 36196, jl = 37492, Xl = 37496, ql = 37808, Yl = 37809, $l = 37810, Kl = 37811, Jl = 37812, Zl = 37813, Ql = 37814, ec = 37815, tc = 37816, nc = 37817, ic = 37818, sc = 37819, rc = 37820, oc = 37821, zo = 36492, ac = 36494, lc = 36495, Op = 36283, cc = 36284, uc = 36285, dc = 36286, Fp = 2200, Bp = 2201, Vp = 2202, sr = 2300, Ts = 2301, Ho = 2302, fs = 2400, ps = 2401, ao = 2402, nl = 2500, kp = 2501, zp = 0, _d = 1, Ia = 2, vd = 3e3, Vi = 3001, Hp = 3200, Gp = 3201, yd = 0, Wp = 1, fn = "", Et = "srgb", Nt = "srgb-linear", il = "display-p3", Eo = "display-p3-linear", lo = "linear", gt = "srgb", co = "rec709", uo = "p3", Yi = 7680, hc = 519, jp = 512, Xp = 513, qp = 514, xd = 515, Yp = 516, $p = 517, Kp = 518, Jp = 519, Da = 35044, fc = "300 es", Ua = 1035, jn = 2e3, ho = 2001;
class Xi {
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
const Vt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let pc = 1234567;
const Js = Math.PI / 180, bs = 180 / Math.PI;
function xn() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Vt[i & 255] + Vt[i >> 8 & 255] + Vt[i >> 16 & 255] + Vt[i >> 24 & 255] + "-" + Vt[e & 255] + Vt[e >> 8 & 255] + "-" + Vt[e >> 16 & 15 | 64] + Vt[e >> 24 & 255] + "-" + Vt[t & 63 | 128] + Vt[t >> 8 & 255] + "-" + Vt[t >> 16 & 255] + Vt[t >> 24 & 255] + Vt[n & 255] + Vt[n >> 8 & 255] + Vt[n >> 16 & 255] + Vt[n >> 24 & 255]).toLowerCase();
}
function zt(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function sl(i, e) {
  return (i % e + e) % e;
}
function Zp(i, e, t, n, s) {
  return n + (i - e) * (s - n) / (t - e);
}
function Qp(i, e, t) {
  return i !== e ? (t - i) / (e - i) : 0;
}
function Zs(i, e, t) {
  return (1 - t) * i + t * e;
}
function em(i, e, t, n) {
  return Zs(i, e, 1 - Math.exp(-t * n));
}
function tm(i, e = 1) {
  return e - Math.abs(sl(i, e * 2) - e);
}
function nm(i, e, t) {
  return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e), i * i * (3 - 2 * i));
}
function im(i, e, t) {
  return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e), i * i * i * (i * (i * 6 - 15) + 10));
}
function sm(i, e) {
  return i + Math.floor(Math.random() * (e - i + 1));
}
function rm(i, e) {
  return i + Math.random() * (e - i);
}
function om(i) {
  return i * (0.5 - Math.random());
}
function am(i) {
  i !== void 0 && (pc = i);
  let e = pc += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function lm(i) {
  return i * Js;
}
function cm(i) {
  return i * bs;
}
function Na(i) {
  return (i & i - 1) === 0 && i !== 0;
}
function um(i) {
  return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
}
function fo(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function dm(i, e, t, n, s) {
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
function Pn(i, e) {
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
const hm = {
  DEG2RAD: Js,
  RAD2DEG: bs,
  generateUUID: xn,
  clamp: zt,
  euclideanModulo: sl,
  mapLinear: Zp,
  inverseLerp: Qp,
  lerp: Zs,
  damp: em,
  pingpong: tm,
  smoothstep: nm,
  smootherstep: im,
  randInt: sm,
  randFloat: rm,
  randFloatSpread: om,
  seededRandom: am,
  degToRad: lm,
  radToDeg: cm,
  isPowerOfTwo: Na,
  ceilPowerOfTwo: um,
  floorPowerOfTwo: fo,
  setQuaternionFromProperEuler: dm,
  normalize: pt,
  denormalize: Pn
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
    return Math.acos(zt(n, -1, 1));
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
    return this.premultiply(Go.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Go.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Go.makeTranslation(e, t)), this;
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
const Go = /* @__PURE__ */ new tt();
function Ed(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function rr(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function fm() {
  const i = rr("canvas");
  return i.style.display = "block", i;
}
const mc = {};
function Qs(i) {
  i in mc || (mc[i] = !0, console.warn(i));
}
const gc = /* @__PURE__ */ new tt().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), _c = /* @__PURE__ */ new tt().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), mr = {
  [Nt]: {
    transfer: lo,
    primaries: co,
    toReference: (i) => i,
    fromReference: (i) => i
  },
  [Et]: {
    transfer: gt,
    primaries: co,
    toReference: (i) => i.convertSRGBToLinear(),
    fromReference: (i) => i.convertLinearToSRGB()
  },
  [Eo]: {
    transfer: lo,
    primaries: uo,
    toReference: (i) => i.applyMatrix3(_c),
    fromReference: (i) => i.applyMatrix3(gc)
  },
  [il]: {
    transfer: gt,
    primaries: uo,
    toReference: (i) => i.convertSRGBToLinear().applyMatrix3(_c),
    fromReference: (i) => i.applyMatrix3(gc).convertLinearToSRGB()
  }
}, pm = /* @__PURE__ */ new Set([Nt, Eo]), ft = {
  enabled: !0,
  _workingColorSpace: Nt,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(i) {
    if (!pm.has(i))
      throw new Error(`Unsupported working color space, "${i}".`);
    this._workingColorSpace = i;
  },
  convert: function(i, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return i;
    const n = mr[e].toReference, s = mr[t].fromReference;
    return s(n(i));
  },
  fromWorkingColorSpace: function(i, e) {
    return this.convert(i, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(i, e) {
    return this.convert(i, e, this._workingColorSpace);
  },
  getPrimaries: function(i) {
    return mr[i].primaries;
  },
  getTransfer: function(i) {
    return i === fn ? lo : mr[i].transfer;
  }
};
function vs(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Wo(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let $i;
class Sd {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      $i === void 0 && ($i = rr("canvas")), $i.width = e.width, $i.height = e.height;
      const n = $i.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = $i;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = rr("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const s = n.getImageData(0, 0, e.width, e.height), r = s.data;
      for (let o = 0; o < r.length; o++)
        r[o] = vs(r[o] / 255) * 255;
      return n.putImageData(s, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(vs(t[n] / 255) * 255) : t[n] = vs(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let mm = 0;
class Md {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: mm++ }), this.uuid = xn(), this.data = e, this.version = 0;
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
          s[o].isDataTexture ? r.push(jo(s[o].image)) : r.push(jo(s[o]));
      } else
        r = jo(s);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function jo(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Sd.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let gm = 0;
class Ft extends Xi {
  constructor(e = Ft.DEFAULT_IMAGE, t = Ft.DEFAULT_MAPPING, n = dn, s = dn, r = Kt, o = zi, a = hn, l = mi, c = Ft.DEFAULT_ANISOTROPY, u = fn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: gm++ }), this.uuid = xn(), this.name = "", this.source = new Md(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = s, this.magFilter = r, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new ot(0, 0), this.repeat = new ot(1, 1), this.center = new ot(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new tt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof u == "string" ? this.colorSpace = u : (Qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = u === Vi ? Et : fn), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
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
    if (this.mapping !== ld) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Ms:
          e.x = e.x - Math.floor(e.x);
          break;
        case dn:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case oo:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Ms:
          e.y = e.y - Math.floor(e.y);
          break;
        case dn:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case oo:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return Qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === Et ? Vi : vd;
  }
  set encoding(e) {
    Qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === Vi ? Et : fn;
  }
}
Ft.DEFAULT_IMAGE = null;
Ft.DEFAULT_MAPPING = ld;
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
class _m extends Xi {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new mt(0, 0, e, t), this.scissorTest = !1, this.viewport = new mt(0, 0, e, t);
    const s = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (Qs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === Vi ? Et : fn), n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Kt,
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
    return this.texture.source = new Md(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Hi extends _m {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Ad extends Ft {
  constructor(e = null, t = 1, n = 1, s = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: s }, this.magFilter = Ut, this.minFilter = Ut, this.wrapR = dn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class vm extends Ft {
  constructor(e = null, t = 1, n = 1, s = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: s }, this.magFilter = Ut, this.minFilter = Ut, this.wrapR = dn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class En {
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
    return 2 * Math.acos(Math.abs(zt(this.dot(e), -1, 1)));
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
    return this.applyQuaternion(vc.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(vc.setFromAxisAngle(e, t));
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
    return Xo.copy(this).projectOnVector(e), this.sub(Xo);
  }
  reflect(e) {
    return this.sub(Xo.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(zt(n, -1, 1));
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
const Xo = /* @__PURE__ */ new N(), vc = /* @__PURE__ */ new En();
class qn {
  constructor(e = new N(1 / 0, 1 / 0, 1 / 0), t = new N(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(gn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(gn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = gn.copy(t).multiplyScalar(0.5);
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
          e.isMesh === !0 ? e.getVertexPosition(o, gn) : gn.fromBufferAttribute(r, o), gn.applyMatrix4(e.matrixWorld), this.expandByPoint(gn);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), gr.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), gr.copy(n.boundingBox)), gr.applyMatrix4(e.matrixWorld), this.union(gr);
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
    return this.clampPoint(e.center, gn), gn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Bs), _r.subVectors(this.max, Bs), Ki.subVectors(e.a, Bs), Ji.subVectors(e.b, Bs), Zi.subVectors(e.c, Bs), Qn.subVectors(Ji, Ki), ei.subVectors(Zi, Ji), Ei.subVectors(Ki, Zi);
    let t = [
      0,
      -Qn.z,
      Qn.y,
      0,
      -ei.z,
      ei.y,
      0,
      -Ei.z,
      Ei.y,
      Qn.z,
      0,
      -Qn.x,
      ei.z,
      0,
      -ei.x,
      Ei.z,
      0,
      -Ei.x,
      -Qn.y,
      Qn.x,
      0,
      -ei.y,
      ei.x,
      0,
      -Ei.y,
      Ei.x,
      0
    ];
    return !qo(t, Ki, Ji, Zi, _r) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !qo(t, Ki, Ji, Zi, _r)) ? !1 : (vr.crossVectors(Qn, ei), t = [vr.x, vr.y, vr.z], qo(t, Ki, Ji, Zi, _r));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, gn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(gn).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (On[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), On[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), On[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), On[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), On[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), On[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), On[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), On[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(On), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const On = [
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N()
], gn = /* @__PURE__ */ new N(), gr = /* @__PURE__ */ new qn(), Ki = /* @__PURE__ */ new N(), Ji = /* @__PURE__ */ new N(), Zi = /* @__PURE__ */ new N(), Qn = /* @__PURE__ */ new N(), ei = /* @__PURE__ */ new N(), Ei = /* @__PURE__ */ new N(), Bs = /* @__PURE__ */ new N(), _r = /* @__PURE__ */ new N(), vr = /* @__PURE__ */ new N(), Si = /* @__PURE__ */ new N();
function qo(i, e, t, n, s) {
  for (let r = 0, o = i.length - 3; r <= o; r += 3) {
    Si.fromArray(i, r);
    const a = s.x * Math.abs(Si.x) + s.y * Math.abs(Si.y) + s.z * Math.abs(Si.z), l = e.dot(Si), c = t.dot(Si), u = n.dot(Si);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a)
      return !1;
  }
  return !0;
}
const ym = /* @__PURE__ */ new qn(), Vs = /* @__PURE__ */ new N(), Yo = /* @__PURE__ */ new N();
class Dn {
  constructor(e = new N(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : ym.setFromPoints(e).getCenter(n);
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
    Vs.subVectors(e, this.center);
    const t = Vs.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), s = (n - this.radius) * 0.5;
      this.center.addScaledVector(Vs, s / n), this.radius += s;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Yo.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Vs.copy(e.center).add(Yo)), this.expandByPoint(Vs.copy(e.center).sub(Yo))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Fn = /* @__PURE__ */ new N(), $o = /* @__PURE__ */ new N(), yr = /* @__PURE__ */ new N(), ti = /* @__PURE__ */ new N(), Ko = /* @__PURE__ */ new N(), xr = /* @__PURE__ */ new N(), Jo = /* @__PURE__ */ new N();
class So {
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
    return this.origin.copy(this.at(e, Fn)), this;
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
    const t = Fn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Fn.copy(this.origin).addScaledVector(this.direction, t), Fn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, s) {
    $o.copy(e).add(t).multiplyScalar(0.5), yr.copy(t).sub(e).normalize(), ti.copy(this.origin).sub($o);
    const r = e.distanceTo(t) * 0.5, o = -this.direction.dot(yr), a = ti.dot(this.direction), l = -ti.dot(yr), c = ti.lengthSq(), u = Math.abs(1 - o * o);
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
    return n && n.copy(this.origin).addScaledVector(this.direction, d), s && s.copy($o).addScaledVector(yr, h), f;
  }
  intersectSphere(e, t) {
    Fn.subVectors(e.center, this.origin);
    const n = Fn.dot(this.direction), s = Fn.dot(Fn) - n * n, r = e.radius * e.radius;
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
    return this.intersectBox(e, Fn) !== null;
  }
  intersectTriangle(e, t, n, s, r) {
    Ko.subVectors(t, e), xr.subVectors(n, e), Jo.crossVectors(Ko, xr);
    let o = this.direction.dot(Jo), a;
    if (o > 0) {
      if (s) return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    ti.subVectors(this.origin, e);
    const l = a * this.direction.dot(xr.crossVectors(ti, xr));
    if (l < 0)
      return null;
    const c = a * this.direction.dot(Ko.cross(ti));
    if (c < 0 || l + c > o)
      return null;
    const u = -a * ti.dot(Jo);
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
    const t = this.elements, n = e.elements, s = 1 / Qi.setFromMatrixColumn(e, 0).length(), r = 1 / Qi.setFromMatrixColumn(e, 1).length(), o = 1 / Qi.setFromMatrixColumn(e, 2).length();
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
    return this.compose(xm, e, Em);
  }
  lookAt(e, t, n) {
    const s = this.elements;
    return tn.subVectors(e, t), tn.lengthSq() === 0 && (tn.z = 1), tn.normalize(), ni.crossVectors(n, tn), ni.lengthSq() === 0 && (Math.abs(n.z) === 1 ? tn.x += 1e-4 : tn.z += 1e-4, tn.normalize(), ni.crossVectors(n, tn)), ni.normalize(), Er.crossVectors(tn, ni), s[0] = ni.x, s[4] = Er.x, s[8] = tn.x, s[1] = ni.y, s[5] = Er.y, s[9] = tn.y, s[2] = ni.z, s[6] = Er.z, s[10] = tn.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, s = t.elements, r = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], u = n[1], d = n[5], h = n[9], f = n[13], g = n[2], _ = n[6], p = n[10], m = n[14], x = n[3], v = n[7], b = n[11], R = n[15], A = s[0], w = s[4], H = s[8], E = s[12], T = s[1], G = s[5], J = s[9], le = s[13], L = s[2], P = s[6], I = s[10], te = s[14], V = s[3], q = s[7], Y = s[11], Q = s[15];
    return r[0] = o * A + a * T + l * L + c * V, r[4] = o * w + a * G + l * P + c * q, r[8] = o * H + a * J + l * I + c * Y, r[12] = o * E + a * le + l * te + c * Q, r[1] = u * A + d * T + h * L + f * V, r[5] = u * w + d * G + h * P + f * q, r[9] = u * H + d * J + h * I + f * Y, r[13] = u * E + d * le + h * te + f * Q, r[2] = g * A + _ * T + p * L + m * V, r[6] = g * w + _ * G + p * P + m * q, r[10] = g * H + _ * J + p * I + m * Y, r[14] = g * E + _ * le + p * te + m * Q, r[3] = x * A + v * T + b * L + R * V, r[7] = x * w + v * G + b * P + R * q, r[11] = x * H + v * J + b * I + R * Y, r[15] = x * E + v * le + b * te + R * Q, this;
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
    let r = Qi.set(s[0], s[1], s[2]).length();
    const o = Qi.set(s[4], s[5], s[6]).length(), a = Qi.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (r = -r), e.x = s[12], e.y = s[13], e.z = s[14], _n.copy(this);
    const c = 1 / r, u = 1 / o, d = 1 / a;
    return _n.elements[0] *= c, _n.elements[1] *= c, _n.elements[2] *= c, _n.elements[4] *= u, _n.elements[5] *= u, _n.elements[6] *= u, _n.elements[8] *= d, _n.elements[9] *= d, _n.elements[10] *= d, t.setFromRotationMatrix(_n), n.x = r, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, s, r, o, a = jn) {
    const l = this.elements, c = 2 * r / (t - e), u = 2 * r / (n - s), d = (t + e) / (t - e), h = (n + s) / (n - s);
    let f, g;
    if (a === jn)
      f = -(o + r) / (o - r), g = -2 * o * r / (o - r);
    else if (a === ho)
      f = -o / (o - r), g = -o * r / (o - r);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return l[0] = c, l[4] = 0, l[8] = d, l[12] = 0, l[1] = 0, l[5] = u, l[9] = h, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = f, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, s, r, o, a = jn) {
    const l = this.elements, c = 1 / (t - e), u = 1 / (n - s), d = 1 / (o - r), h = (t + e) * c, f = (n + s) * u;
    let g, _;
    if (a === jn)
      g = (o + r) * d, _ = -2 * d;
    else if (a === ho)
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
const Qi = /* @__PURE__ */ new N(), _n = /* @__PURE__ */ new nt(), xm = /* @__PURE__ */ new N(0, 0, 0), Em = /* @__PURE__ */ new N(1, 1, 1), ni = /* @__PURE__ */ new N(), Er = /* @__PURE__ */ new N(), tn = /* @__PURE__ */ new N(), yc = /* @__PURE__ */ new nt(), xc = /* @__PURE__ */ new En();
class Mo {
  constructor(e = 0, t = 0, n = 0, s = Mo.DEFAULT_ORDER) {
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
        this._y = Math.asin(zt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-u, f), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(h, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-zt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(a, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-d, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(zt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(-d, f), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-zt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(h, f), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(zt(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-d, r)) : (this._x = 0, this._y = Math.atan2(a, f));
        break;
      case "XZY":
        this._z = Math.asin(-zt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(h, c), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-u, f), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return yc.makeRotationFromQuaternion(e), this.setFromRotationMatrix(yc, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return xc.setFromEuler(this), this.setFromQuaternion(xc, e);
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
Mo.DEFAULT_ORDER = "XYZ";
class Td {
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
let Sm = 0;
const Ec = /* @__PURE__ */ new N(), es = /* @__PURE__ */ new En(), Bn = /* @__PURE__ */ new nt(), Sr = /* @__PURE__ */ new N(), ks = /* @__PURE__ */ new N(), Mm = /* @__PURE__ */ new N(), Am = /* @__PURE__ */ new En(), Sc = /* @__PURE__ */ new N(1, 0, 0), Mc = /* @__PURE__ */ new N(0, 1, 0), Ac = /* @__PURE__ */ new N(0, 0, 1), Tm = { type: "added" }, bm = { type: "removed" };
class St extends Xi {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Sm++ }), this.uuid = xn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = St.DEFAULT_UP.clone();
    const e = new N(), t = new Mo(), n = new En(), s = new N(1, 1, 1);
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
    }), this.matrix = new nt(), this.matrixWorld = new nt(), this.matrixAutoUpdate = St.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Td(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return es.setFromAxisAngle(e, t), this.quaternion.multiply(es), this;
  }
  rotateOnWorldAxis(e, t) {
    return es.setFromAxisAngle(e, t), this.quaternion.premultiply(es), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Sc, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Mc, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Ac, e);
  }
  translateOnAxis(e, t) {
    return Ec.copy(e).applyQuaternion(this.quaternion), this.position.add(Ec.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Sc, e);
  }
  translateY(e) {
    return this.translateOnAxis(Mc, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Ac, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Bn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Sr.copy(e) : Sr.set(e, t, n);
    const s = this.parent;
    this.updateWorldMatrix(!0, !1), ks.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Bn.lookAt(ks, Sr, this.up) : Bn.lookAt(Sr, ks, this.up), this.quaternion.setFromRotationMatrix(Bn), s && (Bn.extractRotation(s.matrixWorld), es.setFromRotationMatrix(Bn), this.quaternion.premultiply(es.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Tm)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(bm)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Bn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Bn.multiply(e.parent.matrixWorld)), e.applyMatrix4(Bn), this.add(e), e.updateWorldMatrix(!1, !0), this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ks, e, Mm), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ks, Am, e), e;
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
St.DEFAULT_UP = /* @__PURE__ */ new N(0, 1, 0);
St.DEFAULT_MATRIX_AUTO_UPDATE = !0;
St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const vn = /* @__PURE__ */ new N(), Vn = /* @__PURE__ */ new N(), Zo = /* @__PURE__ */ new N(), kn = /* @__PURE__ */ new N(), ts = /* @__PURE__ */ new N(), ns = /* @__PURE__ */ new N(), Tc = /* @__PURE__ */ new N(), Qo = /* @__PURE__ */ new N(), ea = /* @__PURE__ */ new N(), ta = /* @__PURE__ */ new N();
let Mr = !1;
class yn {
  constructor(e = new N(), t = new N(), n = new N()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, s) {
    s.subVectors(n, t), vn.subVectors(e, t), s.cross(vn);
    const r = s.lengthSq();
    return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, s, r) {
    vn.subVectors(s, t), Vn.subVectors(n, t), Zo.subVectors(e, t);
    const o = vn.dot(vn), a = vn.dot(Vn), l = vn.dot(Zo), c = Vn.dot(Vn), u = Vn.dot(Zo), d = o * c - a * a;
    if (d === 0)
      return r.set(0, 0, 0), null;
    const h = 1 / d, f = (c * l - a * u) * h, g = (o * u - a * l) * h;
    return r.set(1 - f - g, g, f);
  }
  static containsPoint(e, t, n, s) {
    return this.getBarycoord(e, t, n, s, kn) === null ? !1 : kn.x >= 0 && kn.y >= 0 && kn.x + kn.y <= 1;
  }
  static getUV(e, t, n, s, r, o, a, l) {
    return Mr === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Mr = !0), this.getInterpolation(e, t, n, s, r, o, a, l);
  }
  static getInterpolation(e, t, n, s, r, o, a, l) {
    return this.getBarycoord(e, t, n, s, kn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, kn.x), l.addScaledVector(o, kn.y), l.addScaledVector(a, kn.z), l);
  }
  static isFrontFacing(e, t, n, s) {
    return vn.subVectors(n, t), Vn.subVectors(e, t), vn.cross(Vn).dot(s) < 0;
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
    return vn.subVectors(this.c, this.b), Vn.subVectors(this.a, this.b), vn.cross(Vn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return yn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return yn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, s, r) {
    return Mr === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Mr = !0), yn.getInterpolation(e, this.a, this.b, this.c, t, n, s, r);
  }
  getInterpolation(e, t, n, s, r) {
    return yn.getInterpolation(e, this.a, this.b, this.c, t, n, s, r);
  }
  containsPoint(e) {
    return yn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return yn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, s = this.b, r = this.c;
    let o, a;
    ts.subVectors(s, n), ns.subVectors(r, n), Qo.subVectors(e, n);
    const l = ts.dot(Qo), c = ns.dot(Qo);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    ea.subVectors(e, s);
    const u = ts.dot(ea), d = ns.dot(ea);
    if (u >= 0 && d <= u)
      return t.copy(s);
    const h = l * d - u * c;
    if (h <= 0 && l >= 0 && u <= 0)
      return o = l / (l - u), t.copy(n).addScaledVector(ts, o);
    ta.subVectors(e, r);
    const f = ts.dot(ta), g = ns.dot(ta);
    if (g >= 0 && f <= g)
      return t.copy(r);
    const _ = f * c - l * g;
    if (_ <= 0 && c >= 0 && g <= 0)
      return a = c / (c - g), t.copy(n).addScaledVector(ns, a);
    const p = u * g - f * d;
    if (p <= 0 && d - u >= 0 && f - g >= 0)
      return Tc.subVectors(r, s), a = (d - u) / (d - u + (f - g)), t.copy(s).addScaledVector(Tc, a);
    const m = 1 / (p + _ + h);
    return o = _ * m, a = h * m, t.copy(n).addScaledVector(ts, o).addScaledVector(ns, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const bd = {
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
}, ii = { h: 0, s: 0, l: 0 }, Ar = { h: 0, s: 0, l: 0 };
function na(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class Xe {
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
  setHex(e, t = Et) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, ft.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, s = ft.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, ft.toWorkingColorSpace(this, s), this;
  }
  setHSL(e, t, n, s = ft.workingColorSpace) {
    if (e = sl(e, 1), t = zt(t, 0, 1), n = zt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r;
      this.r = na(o, r, e + 1 / 3), this.g = na(o, r, e), this.b = na(o, r, e - 1 / 3);
    }
    return ft.toWorkingColorSpace(this, s), this;
  }
  setStyle(e, t = Et) {
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
  setColorName(e, t = Et) {
    const n = bd[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = vs(e.r), this.g = vs(e.g), this.b = vs(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Wo(e.r), this.g = Wo(e.g), this.b = Wo(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Et) {
    return ft.fromWorkingColorSpace(kt.copy(this), e), Math.round(zt(kt.r * 255, 0, 255)) * 65536 + Math.round(zt(kt.g * 255, 0, 255)) * 256 + Math.round(zt(kt.b * 255, 0, 255));
  }
  getHexString(e = Et) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = ft.workingColorSpace) {
    ft.fromWorkingColorSpace(kt.copy(this), t);
    const n = kt.r, s = kt.g, r = kt.b, o = Math.max(n, s, r), a = Math.min(n, s, r);
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
    return ft.fromWorkingColorSpace(kt.copy(this), t), e.r = kt.r, e.g = kt.g, e.b = kt.b, e;
  }
  getStyle(e = Et) {
    ft.fromWorkingColorSpace(kt.copy(this), e);
    const t = kt.r, n = kt.g, s = kt.b;
    return e !== Et ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(ii), this.setHSL(ii.h + e, ii.s + t, ii.l + n);
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
    this.getHSL(ii), e.getHSL(Ar);
    const n = Zs(ii.h, Ar.h, t), s = Zs(ii.s, Ar.s, t), r = Zs(ii.l, Ar.l, t);
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
const kt = /* @__PURE__ */ new Xe();
Xe.NAMES = bd;
let wm = 0;
class In extends Xi {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: wm++ }), this.uuid = xn(), this.name = "", this.type = "Material", this.blending = _s, this.side = Xn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = wa, this.blendDst = Ra, this.blendEquation = Li, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Xe(0, 0, 0), this.blendAlpha = 0, this.depthFunc = ro, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = hc, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Yi, this.stencilZFail = Yi, this.stencilZPass = Yi, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== _s && (n.blending = this.blending), this.side !== Xn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== wa && (n.blendSrc = this.blendSrc), this.blendDst !== Ra && (n.blendDst = this.blendDst), this.blendEquation !== Li && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== ro && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== hc && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Yi && (n.stencilFail = this.stencilFail), this.stencilZFail !== Yi && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Yi && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
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
class Di extends In {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Xe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = od, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Ct = /* @__PURE__ */ new N(), Tr = /* @__PURE__ */ new ot();
class qt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Da, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = Wn, this.version = 0;
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
        Tr.fromBufferAttribute(this, t), Tr.applyMatrix3(e), this.setXY(t, Tr.x, Tr.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Ct.fromBufferAttribute(this, t), Ct.applyMatrix3(e), this.setXYZ(t, Ct.x, Ct.y, Ct.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ct.fromBufferAttribute(this, t), Ct.applyMatrix4(e), this.setXYZ(t, Ct.x, Ct.y, Ct.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ct.fromBufferAttribute(this, t), Ct.applyNormalMatrix(e), this.setXYZ(t, Ct.x, Ct.y, Ct.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ct.fromBufferAttribute(this, t), Ct.transformDirection(e), this.setXYZ(t, Ct.x, Ct.y, Ct.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Pn(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = pt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Pn(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = pt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Pn(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = pt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Pn(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = pt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Pn(t, this.array)), t;
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
    return this.name !== "" && (e.name = this.name), this.usage !== Da && (e.usage = this.usage), e;
  }
}
class wd extends qt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Rd extends qt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class pn extends qt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Rm = 0;
const ln = /* @__PURE__ */ new nt(), ia = /* @__PURE__ */ new St(), is = /* @__PURE__ */ new N(), nn = /* @__PURE__ */ new qn(), zs = /* @__PURE__ */ new qn(), Dt = /* @__PURE__ */ new N();
class Mn extends Xi {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Rm++ }), this.uuid = xn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Ed(e) ? Rd : wd)(e, 1) : this.index = e, this;
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
    return ia.lookAt(e), ia.updateMatrix(), this.applyMatrix4(ia.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(is).negate(), this.translate(is.x, is.y, is.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, s = e.length; n < s; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new pn(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new qn());
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
        for (let n = 0, s = t.length; n < s; n++) {
          const r = t[n];
          nn.setFromBufferAttribute(r), this.morphTargetsRelative ? (Dt.addVectors(this.boundingBox.min, nn.min), this.boundingBox.expandByPoint(Dt), Dt.addVectors(this.boundingBox.max, nn.max), this.boundingBox.expandByPoint(Dt)) : (this.boundingBox.expandByPoint(nn.min), this.boundingBox.expandByPoint(nn.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Dn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new N(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (nn.setFromBufferAttribute(e), t)
        for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r];
          zs.setFromBufferAttribute(a), this.morphTargetsRelative ? (Dt.addVectors(nn.min, zs.min), nn.expandByPoint(Dt), Dt.addVectors(nn.max, zs.max), nn.expandByPoint(Dt)) : (nn.expandByPoint(zs.min), nn.expandByPoint(zs.max));
        }
      nn.getCenter(n);
      let s = 0;
      for (let r = 0, o = e.count; r < o; r++)
        Dt.fromBufferAttribute(e, r), s = Math.max(s, n.distanceToSquared(Dt));
      if (t)
        for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r], l = this.morphTargetsRelative;
          for (let c = 0, u = a.count; c < u; c++)
            Dt.fromBufferAttribute(a, c), l && (is.fromBufferAttribute(e, c), Dt.add(is)), s = Math.max(s, n.distanceToSquared(Dt));
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
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new qt(new Float32Array(4 * a), 4));
    const l = this.getAttribute("tangent").array, c = [], u = [];
    for (let T = 0; T < a; T++)
      c[T] = new N(), u[T] = new N();
    const d = new N(), h = new N(), f = new N(), g = new ot(), _ = new ot(), p = new ot(), m = new N(), x = new N();
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
      const J = b[T], le = J.start, L = J.count;
      for (let P = le, I = le + L; P < I; P += 3)
        v(
          n[P + 0],
          n[P + 1],
          n[P + 2]
        );
    }
    const R = new N(), A = new N(), w = new N(), H = new N();
    function E(T) {
      w.fromArray(r, T * 3), H.copy(w);
      const G = c[T];
      R.copy(G), R.sub(w.multiplyScalar(w.dot(G))).normalize(), A.crossVectors(H, G);
      const le = A.dot(u[T]) < 0 ? -1 : 1;
      l[T * 4] = R.x, l[T * 4 + 1] = R.y, l[T * 4 + 2] = R.z, l[T * 4 + 3] = le;
    }
    for (let T = 0, G = b.length; T < G; ++T) {
      const J = b[T], le = J.start, L = J.count;
      for (let P = le, I = le + L; P < I; P += 3)
        E(n[P + 0]), E(n[P + 1]), E(n[P + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new qt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let h = 0, f = n.count; h < f; h++)
          n.setXYZ(h, 0, 0, 0);
      const s = new N(), r = new N(), o = new N(), a = new N(), l = new N(), c = new N(), u = new N(), d = new N();
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
      Dt.fromBufferAttribute(e, t), Dt.normalize(), e.setXYZ(t, Dt.x, Dt.y, Dt.z);
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
      return new qt(h, u, d);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Mn(), n = this.index.array, s = this.attributes;
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
const bc = /* @__PURE__ */ new nt(), Mi = /* @__PURE__ */ new So(), br = /* @__PURE__ */ new Dn(), wc = /* @__PURE__ */ new N(), ss = /* @__PURE__ */ new N(), rs = /* @__PURE__ */ new N(), os = /* @__PURE__ */ new N(), sa = /* @__PURE__ */ new N(), wr = /* @__PURE__ */ new N(), Rr = /* @__PURE__ */ new ot(), Cr = /* @__PURE__ */ new ot(), Lr = /* @__PURE__ */ new ot(), Rc = /* @__PURE__ */ new N(), Cc = /* @__PURE__ */ new N(), Lc = /* @__PURE__ */ new N(), Pr = /* @__PURE__ */ new N(), Ir = /* @__PURE__ */ new N();
class Ke extends St {
  constructor(e = new Mn(), t = new Di()) {
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
      wr.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const u = a[l], d = r[l];
        u !== 0 && (sa.fromBufferAttribute(d, e), o ? wr.addScaledVector(sa, u) : wr.addScaledVector(sa.sub(t), u));
      }
      t.add(wr);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, s = this.material, r = this.matrixWorld;
    s !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), br.copy(n.boundingSphere), br.applyMatrix4(r), Mi.copy(e.ray).recast(e.near), !(br.containsPoint(Mi.origin) === !1 && (Mi.intersectSphere(br, wc) === null || Mi.origin.distanceToSquared(wc) > (e.far - e.near) ** 2)) && (bc.copy(r).invert(), Mi.copy(e.ray).applyMatrix4(bc), !(n.boundingBox !== null && Mi.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Mi)));
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
            s = Dr(this, m, e, n, c, u, d, A, w, H), s && (s.faceIndex = Math.floor(b / 3), s.face.materialIndex = p.materialIndex, t.push(s));
          }
        }
      else {
        const g = Math.max(0, f.start), _ = Math.min(a.count, f.start + f.count);
        for (let p = g, m = _; p < m; p += 3) {
          const x = a.getX(p), v = a.getX(p + 1), b = a.getX(p + 2);
          s = Dr(this, o, e, n, c, u, d, x, v, b), s && (s.faceIndex = Math.floor(p / 3), t.push(s));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let g = 0, _ = h.length; g < _; g++) {
          const p = h[g], m = o[p.materialIndex], x = Math.max(p.start, f.start), v = Math.min(l.count, Math.min(p.start + p.count, f.start + f.count));
          for (let b = x, R = v; b < R; b += 3) {
            const A = b, w = b + 1, H = b + 2;
            s = Dr(this, m, e, n, c, u, d, A, w, H), s && (s.faceIndex = Math.floor(b / 3), s.face.materialIndex = p.materialIndex, t.push(s));
          }
        }
      else {
        const g = Math.max(0, f.start), _ = Math.min(l.count, f.start + f.count);
        for (let p = g, m = _; p < m; p += 3) {
          const x = p, v = p + 1, b = p + 2;
          s = Dr(this, o, e, n, c, u, d, x, v, b), s && (s.faceIndex = Math.floor(p / 3), t.push(s));
        }
      }
  }
}
function Cm(i, e, t, n, s, r, o, a) {
  let l;
  if (e.side === Qt ? l = n.intersectTriangle(o, r, s, !0, a) : l = n.intersectTriangle(s, r, o, e.side === Xn, a), l === null) return null;
  Ir.copy(a), Ir.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(Ir);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: Ir.clone(),
    object: i
  };
}
function Dr(i, e, t, n, s, r, o, a, l, c) {
  i.getVertexPosition(a, ss), i.getVertexPosition(l, rs), i.getVertexPosition(c, os);
  const u = Cm(i, e, t, n, ss, rs, os, Pr);
  if (u) {
    s && (Rr.fromBufferAttribute(s, a), Cr.fromBufferAttribute(s, l), Lr.fromBufferAttribute(s, c), u.uv = yn.getInterpolation(Pr, ss, rs, os, Rr, Cr, Lr, new ot())), r && (Rr.fromBufferAttribute(r, a), Cr.fromBufferAttribute(r, l), Lr.fromBufferAttribute(r, c), u.uv1 = yn.getInterpolation(Pr, ss, rs, os, Rr, Cr, Lr, new ot()), u.uv2 = u.uv1), o && (Rc.fromBufferAttribute(o, a), Cc.fromBufferAttribute(o, l), Lc.fromBufferAttribute(o, c), u.normal = yn.getInterpolation(Pr, ss, rs, os, Rc, Cc, Lc, new N()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const d = {
      a,
      b: l,
      c,
      normal: new N(),
      materialIndex: 0
    };
    yn.getNormal(ss, rs, os, d.normal), u.face = d;
  }
  return u;
}
class yt extends Mn {
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
    g("z", "y", "x", -1, -1, n, t, e, o, r, 0), g("z", "y", "x", 1, -1, n, t, -e, o, r, 1), g("x", "z", "y", 1, 1, e, n, t, s, o, 2), g("x", "z", "y", 1, -1, e, n, -t, s, o, 3), g("x", "y", "z", 1, -1, e, t, n, s, r, 4), g("x", "y", "z", -1, -1, e, t, -n, s, r, 5), this.setIndex(l), this.setAttribute("position", new pn(c, 3)), this.setAttribute("normal", new pn(u, 3)), this.setAttribute("uv", new pn(d, 2));
    function g(_, p, m, x, v, b, R, A, w, H, E) {
      const T = b / w, G = R / H, J = b / 2, le = R / 2, L = A / 2, P = w + 1, I = H + 1;
      let te = 0, V = 0;
      const q = new N();
      for (let Y = 0; Y < I; Y++) {
        const Q = Y * G - le;
        for (let he = 0; he < P; he++) {
          const z = he * T - J;
          q[_] = z * x, q[p] = Q * v, q[m] = L, c.push(q.x, q.y, q.z), q[_] = 0, q[p] = 0, q[m] = A > 0 ? 1 : -1, u.push(q.x, q.y, q.z), d.push(he / w), d.push(1 - Y / H), te += 1;
        }
      }
      for (let Y = 0; Y < H; Y++)
        for (let Q = 0; Q < w; Q++) {
          const he = h + Q + P * Y, z = h + Q + P * (Y + 1), ne = h + (Q + 1) + P * (Y + 1), re = h + (Q + 1) + P * Y;
          l.push(he, z, re), l.push(z, ne, re), V += 6;
        }
      a.addGroup(f, V, E), f += V, h += te;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new yt(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function ws(i) {
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
function Wt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = ws(i[t]);
    for (const s in n)
      e[s] = n[s];
  }
  return e;
}
function Lm(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function Cd(i) {
  return i.getRenderTarget() === null ? i.outputColorSpace : ft.workingColorSpace;
}
const Pm = { clone: ws, merge: Wt };
var Im = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Dm = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Gi extends In {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Im, this.fragmentShader = Dm, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ws(e.uniforms), this.uniformsGroups = Lm(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
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
class Ld extends St {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new nt(), this.projectionMatrix = new nt(), this.projectionMatrixInverse = new nt(), this.coordinateSystem = jn;
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
class Xt extends Ld {
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
    this.fov = bs * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(Js * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return bs * 2 * Math.atan(
      Math.tan(Js * 0.5 * this.fov) / this.zoom
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
    let t = e * Math.tan(Js * 0.5 * this.fov) / this.zoom, n = 2 * t, s = this.aspect * n, r = -0.5 * s;
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
const as = -90, ls = 1;
class Um extends St {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new Xt(as, ls, e, t);
    s.layers = this.layers, this.add(s);
    const r = new Xt(as, ls, e, t);
    r.layers = this.layers, this.add(r);
    const o = new Xt(as, ls, e, t);
    o.layers = this.layers, this.add(o);
    const a = new Xt(as, ls, e, t);
    a.layers = this.layers, this.add(a);
    const l = new Xt(as, ls, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Xt(as, ls, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, s, r, o, a, l] = t;
    for (const c of t) this.remove(c);
    if (e === jn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === ho)
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
class Pd extends Ft {
  constructor(e, t, n, s, r, o, a, l, c, u) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : Es, super(e, t, n, s, r, o, a, l, c, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Nm extends Hi {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, s = [n, n, n, n, n, n];
    t.encoding !== void 0 && (Qs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === Vi ? Et : fn), this.texture = new Pd(s, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Kt;
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
    }, s = new yt(5, 5, 5), r = new Gi({
      name: "CubemapFromEquirect",
      uniforms: ws(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Qt,
      blending: fi
    });
    r.uniforms.tEquirect.value = t;
    const o = new Ke(s, r), a = t.minFilter;
    return t.minFilter === zi && (t.minFilter = Kt), new Um(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, s) {
    const r = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, s);
    e.setRenderTarget(r);
  }
}
const ra = /* @__PURE__ */ new N(), Om = /* @__PURE__ */ new N(), Fm = /* @__PURE__ */ new tt();
class Ri {
  constructor(e = new N(1, 0, 0), t = 0) {
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
    const s = ra.subVectors(n, t).cross(Om.subVectors(e, t)).normalize();
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
    const n = e.delta(ra), s = this.normal.dot(n);
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
    const n = t || Fm.getNormalMatrix(e), s = this.coplanarPoint(ra).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
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
const Ai = /* @__PURE__ */ new Dn(), Ur = /* @__PURE__ */ new N();
class rl {
  constructor(e = new Ri(), t = new Ri(), n = new Ri(), s = new Ri(), r = new Ri(), o = new Ri()) {
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
  setFromProjectionMatrix(e, t = jn) {
    const n = this.planes, s = e.elements, r = s[0], o = s[1], a = s[2], l = s[3], c = s[4], u = s[5], d = s[6], h = s[7], f = s[8], g = s[9], _ = s[10], p = s[11], m = s[12], x = s[13], v = s[14], b = s[15];
    if (n[0].setComponents(l - r, h - c, p - f, b - m).normalize(), n[1].setComponents(l + r, h + c, p + f, b + m).normalize(), n[2].setComponents(l + o, h + u, p + g, b + x).normalize(), n[3].setComponents(l - o, h - u, p - g, b - x).normalize(), n[4].setComponents(l - a, h - d, p - _, b - v).normalize(), t === jn)
      n[5].setComponents(l + a, h + d, p + _, b + v).normalize();
    else if (t === ho)
      n[5].setComponents(a, d, _, v).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Ai);
  }
  intersectsSprite(e) {
    return Ai.center.set(0, 0, 0), Ai.radius = 0.7071067811865476, Ai.applyMatrix4(e.matrixWorld), this.intersectsSphere(Ai);
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
      if (Ur.x = s.normal.x > 0 ? e.max.x : e.min.x, Ur.y = s.normal.y > 0 ? e.max.y : e.min.y, Ur.z = s.normal.z > 0 ? e.max.z : e.min.z, s.distanceToPoint(Ur) < 0)
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
function Id() {
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
function Bm(i, e) {
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
class ui extends Mn {
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
    this.setIndex(f), this.setAttribute("position", new pn(g, 3)), this.setAttribute("normal", new pn(_, 3)), this.setAttribute("uv", new pn(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ui(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Vm = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, km = `#ifdef USE_ALPHAHASH
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
#endif`, zm = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Hm = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Gm = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Wm = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, jm = `#ifdef USE_AOMAP
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
#endif`, Xm = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, qm = `#ifdef USE_BATCHING
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
#endif`, Ym = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`, $m = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Km = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Jm = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Zm = `#ifdef USE_IRIDESCENCE
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
#endif`, Qm = `#ifdef USE_BUMPMAP
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
#endif`, eg = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, tg = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, ng = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, ig = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, sg = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, rg = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, og = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, ag = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, lg = `#define PI 3.141592653589793
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
} // validated`, cg = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, ug = `vec3 transformedNormal = objectNormal;
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
#endif`, dg = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, hg = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, fg = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, pg = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, mg = "gl_FragColor = linearToOutputTexel( gl_FragColor );", gg = `
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
}`, _g = `#ifdef USE_ENVMAP
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
#endif`, vg = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, yg = `#ifdef USE_ENVMAP
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
#endif`, xg = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Eg = `#ifdef USE_ENVMAP
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
#endif`, Sg = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Mg = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Ag = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Tg = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, bg = `#ifdef USE_GRADIENTMAP
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
}`, wg = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, Rg = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Cg = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Lg = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Pg = `uniform bool receiveShadow;
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
#endif`, Ig = `#ifdef USE_ENVMAP
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
#endif`, Dg = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Ug = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Ng = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Og = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Fg = `PhysicalMaterial material;
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
#endif`, Bg = `struct PhysicalMaterial {
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
}`, Vg = `
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
#endif`, kg = `#if defined( RE_IndirectDiffuse )
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
#endif`, zg = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Hg = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Gg = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Wg = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, jg = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Xg = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, qg = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Yg = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, $g = `#if defined( USE_POINTS_UV )
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
#endif`, Jg = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Zg = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Qg = `#ifdef USE_MORPHNORMALS
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
#endif`, e_ = `#ifdef USE_MORPHTARGETS
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
#endif`, t_ = `#ifdef USE_MORPHTARGETS
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
#endif`, n_ = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, i_ = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, s_ = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, r_ = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, o_ = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, a_ = `#ifdef USE_NORMALMAP
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
#endif`, l_ = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, c_ = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, u_ = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, d_ = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, h_ = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, f_ = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, p_ = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, m_ = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, g_ = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, __ = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, v_ = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, y_ = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, x_ = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, E_ = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, S_ = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, M_ = `float getShadowMask() {
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
}`, A_ = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, T_ = `#ifdef USE_SKINNING
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
#endif`, b_ = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, w_ = `#ifdef USE_SKINNING
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
#endif`, R_ = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, C_ = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, L_ = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, P_ = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, I_ = `#ifdef USE_TRANSMISSION
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
#endif`, D_ = `#ifdef USE_TRANSMISSION
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
#endif`, U_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, N_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, O_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, F_ = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const B_ = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, V_ = `uniform sampler2D t2D;
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
}`, k_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, z_ = `#ifdef ENVMAP_TYPE_CUBE
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
}`, H_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, G_ = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, W_ = `#include <common>
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
}`, j_ = `#if DEPTH_PACKING == 3200
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
}`, X_ = `#define DISTANCE
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
}`, q_ = `#define DISTANCE
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
}`, Y_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, $_ = `uniform sampler2D tEquirect;
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
}`, J_ = `uniform vec3 diffuse;
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
}`, Z_ = `#include <common>
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
}`, Q_ = `uniform vec3 diffuse;
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
}`, ev = `#define LAMBERT
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
}`, tv = `#define LAMBERT
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
}`, nv = `#define MATCAP
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
}`, iv = `#define MATCAP
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
}`, sv = `#define NORMAL
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
}`, rv = `#define NORMAL
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
}`, ov = `#define PHONG
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
}`, av = `#define PHONG
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
}`, lv = `#define STANDARD
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
}`, cv = `#define STANDARD
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
}`, uv = `#define TOON
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
}`, dv = `#define TOON
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
}`, hv = `uniform float size;
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
}`, fv = `uniform vec3 diffuse;
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
}`, pv = `#include <common>
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
}`, mv = `uniform vec3 color;
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
}`, gv = `uniform float rotation;
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
}`, _v = `uniform vec3 diffuse;
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
  alphahash_fragment: Vm,
  alphahash_pars_fragment: km,
  alphamap_fragment: zm,
  alphamap_pars_fragment: Hm,
  alphatest_fragment: Gm,
  alphatest_pars_fragment: Wm,
  aomap_fragment: jm,
  aomap_pars_fragment: Xm,
  batching_pars_vertex: qm,
  batching_vertex: Ym,
  begin_vertex: $m,
  beginnormal_vertex: Km,
  bsdfs: Jm,
  iridescence_fragment: Zm,
  bumpmap_pars_fragment: Qm,
  clipping_planes_fragment: eg,
  clipping_planes_pars_fragment: tg,
  clipping_planes_pars_vertex: ng,
  clipping_planes_vertex: ig,
  color_fragment: sg,
  color_pars_fragment: rg,
  color_pars_vertex: og,
  color_vertex: ag,
  common: lg,
  cube_uv_reflection_fragment: cg,
  defaultnormal_vertex: ug,
  displacementmap_pars_vertex: dg,
  displacementmap_vertex: hg,
  emissivemap_fragment: fg,
  emissivemap_pars_fragment: pg,
  colorspace_fragment: mg,
  colorspace_pars_fragment: gg,
  envmap_fragment: _g,
  envmap_common_pars_fragment: vg,
  envmap_pars_fragment: yg,
  envmap_pars_vertex: xg,
  envmap_physical_pars_fragment: Ig,
  envmap_vertex: Eg,
  fog_vertex: Sg,
  fog_pars_vertex: Mg,
  fog_fragment: Ag,
  fog_pars_fragment: Tg,
  gradientmap_pars_fragment: bg,
  lightmap_fragment: wg,
  lightmap_pars_fragment: Rg,
  lights_lambert_fragment: Cg,
  lights_lambert_pars_fragment: Lg,
  lights_pars_begin: Pg,
  lights_toon_fragment: Dg,
  lights_toon_pars_fragment: Ug,
  lights_phong_fragment: Ng,
  lights_phong_pars_fragment: Og,
  lights_physical_fragment: Fg,
  lights_physical_pars_fragment: Bg,
  lights_fragment_begin: Vg,
  lights_fragment_maps: kg,
  lights_fragment_end: zg,
  logdepthbuf_fragment: Hg,
  logdepthbuf_pars_fragment: Gg,
  logdepthbuf_pars_vertex: Wg,
  logdepthbuf_vertex: jg,
  map_fragment: Xg,
  map_pars_fragment: qg,
  map_particle_fragment: Yg,
  map_particle_pars_fragment: $g,
  metalnessmap_fragment: Kg,
  metalnessmap_pars_fragment: Jg,
  morphcolor_vertex: Zg,
  morphnormal_vertex: Qg,
  morphtarget_pars_vertex: e_,
  morphtarget_vertex: t_,
  normal_fragment_begin: n_,
  normal_fragment_maps: i_,
  normal_pars_fragment: s_,
  normal_pars_vertex: r_,
  normal_vertex: o_,
  normalmap_pars_fragment: a_,
  clearcoat_normal_fragment_begin: l_,
  clearcoat_normal_fragment_maps: c_,
  clearcoat_pars_fragment: u_,
  iridescence_pars_fragment: d_,
  opaque_fragment: h_,
  packing: f_,
  premultiplied_alpha_fragment: p_,
  project_vertex: m_,
  dithering_fragment: g_,
  dithering_pars_fragment: __,
  roughnessmap_fragment: v_,
  roughnessmap_pars_fragment: y_,
  shadowmap_pars_fragment: x_,
  shadowmap_pars_vertex: E_,
  shadowmap_vertex: S_,
  shadowmask_pars_fragment: M_,
  skinbase_vertex: A_,
  skinning_pars_vertex: T_,
  skinning_vertex: b_,
  skinnormal_vertex: w_,
  specularmap_fragment: R_,
  specularmap_pars_fragment: C_,
  tonemapping_fragment: L_,
  tonemapping_pars_fragment: P_,
  transmission_fragment: I_,
  transmission_pars_fragment: D_,
  uv_pars_fragment: U_,
  uv_pars_vertex: N_,
  uv_vertex: O_,
  worldpos_vertex: F_,
  background_vert: B_,
  background_frag: V_,
  backgroundCube_vert: k_,
  backgroundCube_frag: z_,
  cube_vert: H_,
  cube_frag: G_,
  depth_vert: W_,
  depth_frag: j_,
  distanceRGBA_vert: X_,
  distanceRGBA_frag: q_,
  equirect_vert: Y_,
  equirect_frag: $_,
  linedashed_vert: K_,
  linedashed_frag: J_,
  meshbasic_vert: Z_,
  meshbasic_frag: Q_,
  meshlambert_vert: ev,
  meshlambert_frag: tv,
  meshmatcap_vert: nv,
  meshmatcap_frag: iv,
  meshnormal_vert: sv,
  meshnormal_frag: rv,
  meshphong_vert: ov,
  meshphong_frag: av,
  meshphysical_vert: lv,
  meshphysical_frag: cv,
  meshtoon_vert: uv,
  meshtoon_frag: dv,
  points_vert: hv,
  points_frag: fv,
  shadow_vert: pv,
  shadow_frag: mv,
  sprite_vert: gv,
  sprite_frag: _v
}, _e = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Xe(16777215) },
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
    fogColor: { value: /* @__PURE__ */ new Xe(16777215) }
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
    diffuse: { value: /* @__PURE__ */ new Xe(16777215) },
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
    diffuse: { value: /* @__PURE__ */ new Xe(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new ot(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new tt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new tt() },
    alphaTest: { value: 0 }
  }
}, Cn = {
  basic: {
    uniforms: /* @__PURE__ */ Wt([
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
    uniforms: /* @__PURE__ */ Wt([
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
        emissive: { value: /* @__PURE__ */ new Xe(0) }
      }
    ]),
    vertexShader: Je.meshlambert_vert,
    fragmentShader: Je.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Wt([
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
        emissive: { value: /* @__PURE__ */ new Xe(0) },
        specular: { value: /* @__PURE__ */ new Xe(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Je.meshphong_vert,
    fragmentShader: Je.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Wt([
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
        emissive: { value: /* @__PURE__ */ new Xe(0) },
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
    uniforms: /* @__PURE__ */ Wt([
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
        emissive: { value: /* @__PURE__ */ new Xe(0) }
      }
    ]),
    vertexShader: Je.meshtoon_vert,
    fragmentShader: Je.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Wt([
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
    uniforms: /* @__PURE__ */ Wt([
      _e.points,
      _e.fog
    ]),
    vertexShader: Je.points_vert,
    fragmentShader: Je.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Wt([
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
    uniforms: /* @__PURE__ */ Wt([
      _e.common,
      _e.displacementmap
    ]),
    vertexShader: Je.depth_vert,
    fragmentShader: Je.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Wt([
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
    uniforms: /* @__PURE__ */ Wt([
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
    uniforms: /* @__PURE__ */ Wt([
      _e.common,
      _e.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new N() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Je.distanceRGBA_vert,
    fragmentShader: Je.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Wt([
      _e.lights,
      _e.fog,
      {
        color: { value: /* @__PURE__ */ new Xe(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Je.shadow_vert,
    fragmentShader: Je.shadow_frag
  }
};
Cn.physical = {
  uniforms: /* @__PURE__ */ Wt([
    Cn.standard.uniforms,
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
      sheenColor: { value: /* @__PURE__ */ new Xe(0) },
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
      attenuationColor: { value: /* @__PURE__ */ new Xe(0) },
      specularColor: { value: /* @__PURE__ */ new Xe(1, 1, 1) },
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
const Nr = { r: 0, b: 0, g: 0 };
function vv(i, e, t, n, s, r, o) {
  const a = new Xe(0);
  let l = r === !0 ? 0 : 1, c, u, d = null, h = 0, f = null;
  function g(p, m) {
    let x = !1, v = m.isScene === !0 ? m.background : null;
    v && v.isTexture && (v = (m.backgroundBlurriness > 0 ? t : e).get(v)), v === null ? _(a, l) : v && v.isColor && (_(v, 1), x = !0);
    const b = i.xr.getEnvironmentBlendMode();
    b === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : b === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (i.autoClear || x) && i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil), v && (v.isCubeTexture || v.mapping === xo) ? (u === void 0 && (u = new Ke(
      new yt(1, 1, 1),
      new Gi({
        name: "BackgroundCubeMaterial",
        uniforms: ws(Cn.backgroundCube.uniforms),
        vertexShader: Cn.backgroundCube.vertexShader,
        fragmentShader: Cn.backgroundCube.fragmentShader,
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
    }), s.update(u)), u.material.uniforms.envMap.value = v, u.material.uniforms.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = m.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = m.backgroundIntensity, u.material.toneMapped = ft.getTransfer(v.colorSpace) !== gt, (d !== v || h !== v.version || f !== i.toneMapping) && (u.material.needsUpdate = !0, d = v, h = v.version, f = i.toneMapping), u.layers.enableAll(), p.unshift(u, u.geometry, u.material, 0, 0, null)) : v && v.isTexture && (c === void 0 && (c = new Ke(
      new ui(2, 2),
      new Gi({
        name: "BackgroundMaterial",
        uniforms: ws(Cn.background.uniforms),
        vertexShader: Cn.background.vertexShader,
        fragmentShader: Cn.background.fragmentShader,
        side: Xn,
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
    p.getRGB(Nr, Cd(i)), n.buffers.color.setClear(Nr.r, Nr.g, Nr.b, m, o);
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
function yv(i, e, t, n) {
  const s = i.getParameter(i.MAX_VERTEX_ATTRIBS), r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || r !== null, a = {}, l = p(null);
  let c = l, u = !1;
  function d(L, P, I, te, V) {
    let q = !1;
    if (o) {
      const Y = _(te, I, P);
      c !== Y && (c = Y, f(c.object)), q = m(L, te, I, V), q && x(L, te, I, V);
    } else {
      const Y = P.wireframe === !0;
      (c.geometry !== te.id || c.program !== I.id || c.wireframe !== Y) && (c.geometry = te.id, c.program = I.id, c.wireframe = Y, q = !0);
    }
    V !== null && t.update(V, i.ELEMENT_ARRAY_BUFFER), (q || u) && (u = !1, H(L, P, I, te), V !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(V).buffer));
  }
  function h() {
    return n.isWebGL2 ? i.createVertexArray() : r.createVertexArrayOES();
  }
  function f(L) {
    return n.isWebGL2 ? i.bindVertexArray(L) : r.bindVertexArrayOES(L);
  }
  function g(L) {
    return n.isWebGL2 ? i.deleteVertexArray(L) : r.deleteVertexArrayOES(L);
  }
  function _(L, P, I) {
    const te = I.wireframe === !0;
    let V = a[L.id];
    V === void 0 && (V = {}, a[L.id] = V);
    let q = V[P.id];
    q === void 0 && (q = {}, V[P.id] = q);
    let Y = q[te];
    return Y === void 0 && (Y = p(h()), q[te] = Y), Y;
  }
  function p(L) {
    const P = [], I = [], te = [];
    for (let V = 0; V < s; V++)
      P[V] = 0, I[V] = 0, te[V] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: P,
      enabledAttributes: I,
      attributeDivisors: te,
      object: L,
      attributes: {},
      index: null
    };
  }
  function m(L, P, I, te) {
    const V = c.attributes, q = P.attributes;
    let Y = 0;
    const Q = I.getAttributes();
    for (const he in Q)
      if (Q[he].location >= 0) {
        const ne = V[he];
        let re = q[he];
        if (re === void 0 && (he === "instanceMatrix" && L.instanceMatrix && (re = L.instanceMatrix), he === "instanceColor" && L.instanceColor && (re = L.instanceColor)), ne === void 0 || ne.attribute !== re || re && ne.data !== re.data) return !0;
        Y++;
      }
    return c.attributesNum !== Y || c.index !== te;
  }
  function x(L, P, I, te) {
    const V = {}, q = P.attributes;
    let Y = 0;
    const Q = I.getAttributes();
    for (const he in Q)
      if (Q[he].location >= 0) {
        let ne = q[he];
        ne === void 0 && (he === "instanceMatrix" && L.instanceMatrix && (ne = L.instanceMatrix), he === "instanceColor" && L.instanceColor && (ne = L.instanceColor));
        const re = {};
        re.attribute = ne, ne && ne.data && (re.data = ne.data), V[he] = re, Y++;
      }
    c.attributes = V, c.attributesNum = Y, c.index = te;
  }
  function v() {
    const L = c.newAttributes;
    for (let P = 0, I = L.length; P < I; P++)
      L[P] = 0;
  }
  function b(L) {
    R(L, 0);
  }
  function R(L, P) {
    const I = c.newAttributes, te = c.enabledAttributes, V = c.attributeDivisors;
    I[L] = 1, te[L] === 0 && (i.enableVertexAttribArray(L), te[L] = 1), V[L] !== P && ((n.isWebGL2 ? i : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](L, P), V[L] = P);
  }
  function A() {
    const L = c.newAttributes, P = c.enabledAttributes;
    for (let I = 0, te = P.length; I < te; I++)
      P[I] !== L[I] && (i.disableVertexAttribArray(I), P[I] = 0);
  }
  function w(L, P, I, te, V, q, Y) {
    Y === !0 ? i.vertexAttribIPointer(L, P, I, V, q) : i.vertexAttribPointer(L, P, I, te, V, q);
  }
  function H(L, P, I, te) {
    if (n.isWebGL2 === !1 && (L.isInstancedMesh || te.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    v();
    const V = te.attributes, q = I.getAttributes(), Y = P.defaultAttributeValues;
    for (const Q in q) {
      const he = q[Q];
      if (he.location >= 0) {
        let z = V[Q];
        if (z === void 0 && (Q === "instanceMatrix" && L.instanceMatrix && (z = L.instanceMatrix), Q === "instanceColor" && L.instanceColor && (z = L.instanceColor)), z !== void 0) {
          const ne = z.normalized, re = z.itemSize, ee = t.get(z);
          if (ee === void 0) continue;
          const ae = ee.buffer, we = ee.type, Ce = ee.bytesPerElement, ge = n.isWebGL2 === !0 && (we === i.INT || we === i.UNSIGNED_INT || z.gpuType === ud);
          if (z.isInterleavedBufferAttribute) {
            const Ae = z.data, F = Ae.stride, Qe = z.offset;
            if (Ae.isInstancedInterleavedBuffer) {
              for (let Le = 0; Le < he.locationSize; Le++)
                R(he.location + Le, Ae.meshPerAttribute);
              L.isInstancedMesh !== !0 && te._maxInstanceCount === void 0 && (te._maxInstanceCount = Ae.meshPerAttribute * Ae.count);
            } else
              for (let Le = 0; Le < he.locationSize; Le++)
                b(he.location + Le);
            i.bindBuffer(i.ARRAY_BUFFER, ae);
            for (let Le = 0; Le < he.locationSize; Le++)
              w(
                he.location + Le,
                re / he.locationSize,
                we,
                ne,
                F * Ce,
                (Qe + re / he.locationSize * Le) * Ce,
                ge
              );
          } else {
            if (z.isInstancedBufferAttribute) {
              for (let Ae = 0; Ae < he.locationSize; Ae++)
                R(he.location + Ae, z.meshPerAttribute);
              L.isInstancedMesh !== !0 && te._maxInstanceCount === void 0 && (te._maxInstanceCount = z.meshPerAttribute * z.count);
            } else
              for (let Ae = 0; Ae < he.locationSize; Ae++)
                b(he.location + Ae);
            i.bindBuffer(i.ARRAY_BUFFER, ae);
            for (let Ae = 0; Ae < he.locationSize; Ae++)
              w(
                he.location + Ae,
                re / he.locationSize,
                we,
                ne,
                re * Ce,
                re / he.locationSize * Ae * Ce,
                ge
              );
          }
        } else if (Y !== void 0) {
          const ne = Y[Q];
          if (ne !== void 0)
            switch (ne.length) {
              case 2:
                i.vertexAttrib2fv(he.location, ne);
                break;
              case 3:
                i.vertexAttrib3fv(he.location, ne);
                break;
              case 4:
                i.vertexAttrib4fv(he.location, ne);
                break;
              default:
                i.vertexAttrib1fv(he.location, ne);
            }
        }
      }
    }
    A();
  }
  function E() {
    J();
    for (const L in a) {
      const P = a[L];
      for (const I in P) {
        const te = P[I];
        for (const V in te)
          g(te[V].object), delete te[V];
        delete P[I];
      }
      delete a[L];
    }
  }
  function T(L) {
    if (a[L.id] === void 0) return;
    const P = a[L.id];
    for (const I in P) {
      const te = P[I];
      for (const V in te)
        g(te[V].object), delete te[V];
      delete P[I];
    }
    delete a[L.id];
  }
  function G(L) {
    for (const P in a) {
      const I = a[P];
      if (I[L.id] === void 0) continue;
      const te = I[L.id];
      for (const V in te)
        g(te[V].object), delete te[V];
      delete I[L.id];
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
function xv(i, e, t, n) {
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
function Ev(i, e, t) {
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
function Sv(i) {
  const e = this;
  let t = null, n = 0, s = !1, r = !1;
  const o = new Ri(), a = new tt(), l = { value: null, needsUpdate: !1 };
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
function Mv(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === Ca ? o.mapping = Es : a === La && (o.mapping = Ss), o;
  }
  function n(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === Ca || a === La)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new Nm(l.height / 2);
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
class ol extends Ld {
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
const ms = 4, Pc = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Pi = 20, oa = /* @__PURE__ */ new ol(), Ic = /* @__PURE__ */ new Xe();
let aa = null, la = 0, ca = 0;
const Ci = (1 + Math.sqrt(5)) / 2, cs = 1 / Ci, Dc = [
  /* @__PURE__ */ new N(1, 1, 1),
  /* @__PURE__ */ new N(-1, 1, 1),
  /* @__PURE__ */ new N(1, 1, -1),
  /* @__PURE__ */ new N(-1, 1, -1),
  /* @__PURE__ */ new N(0, Ci, cs),
  /* @__PURE__ */ new N(0, Ci, -cs),
  /* @__PURE__ */ new N(cs, 0, Ci),
  /* @__PURE__ */ new N(-cs, 0, Ci),
  /* @__PURE__ */ new N(Ci, cs, 0),
  /* @__PURE__ */ new N(-Ci, cs, 0)
];
class Uc {
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
    aa = this._renderer.getRenderTarget(), la = this._renderer.getActiveCubeFace(), ca = this._renderer.getActiveMipmapLevel(), this._setSize(256);
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
    this._cubemapMaterial === null && (this._cubemapMaterial = Fc(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Oc(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(aa, la, ca), e.scissorTest = !1, Or(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Es || e.mapping === Ss ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), aa = this._renderer.getRenderTarget(), la = this._renderer.getActiveCubeFace(), ca = this._renderer.getActiveMipmapLevel();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: Kt,
      minFilter: Kt,
      generateMipmaps: !1,
      type: ir,
      format: hn,
      colorSpace: Nt,
      depthBuffer: !1
    }, s = Nc(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Nc(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Av(r)), this._blurMaterial = Tv(r, e, t);
    }
    return s;
  }
  _compileMaterial(e) {
    const t = new Ke(this._lodPlanes[0], e);
    this._renderer.compile(t, oa);
  }
  _sceneToCubeUV(e, t, n, s) {
    const a = new Xt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], u = this._renderer, d = u.autoClear, h = u.toneMapping;
    u.getClearColor(Ic), u.toneMapping = pi, u.autoClear = !1;
    const f = new Di({
      name: "PMREM.Background",
      side: Qt,
      depthWrite: !1,
      depthTest: !1
    }), g = new Ke(new yt(), f);
    let _ = !1;
    const p = e.background;
    p ? p.isColor && (f.color.copy(p), e.background = null, _ = !0) : (f.color.copy(Ic), _ = !0);
    for (let m = 0; m < 6; m++) {
      const x = m % 3;
      x === 0 ? (a.up.set(0, l[m], 0), a.lookAt(c[m], 0, 0)) : x === 1 ? (a.up.set(0, 0, l[m]), a.lookAt(0, c[m], 0)) : (a.up.set(0, l[m], 0), a.lookAt(0, 0, c[m]));
      const v = this._cubeSize;
      Or(s, x * v, m > 2 ? v : 0, v, v), u.setRenderTarget(s), _ && u.render(g, a), u.render(e, a);
    }
    g.geometry.dispose(), g.material.dispose(), u.toneMapping = h, u.autoClear = d, e.background = p;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, s = e.mapping === Es || e.mapping === Ss;
    s ? (this._cubemapMaterial === null && (this._cubemapMaterial = Fc()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Oc());
    const r = s ? this._cubemapMaterial : this._equirectMaterial, o = new Ke(this._lodPlanes[0], r), a = r.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    Or(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, oa);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let s = 1; s < this._lodPlanes.length; s++) {
      const r = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = Dc[(s - 1) % Dc.length];
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
    const u = 3, d = new Ke(this._lodPlanes[s], c), h = c.uniforms, f = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * Pi - 1), _ = r / g, p = isFinite(r) ? 1 + Math.floor(u * _) : Pi;
    p > Pi && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Pi}`);
    const m = [];
    let x = 0;
    for (let w = 0; w < Pi; ++w) {
      const H = w / _, E = Math.exp(-H * H / 2);
      m.push(E), w === 0 ? x += E : w < p && (x += 2 * E);
    }
    for (let w = 0; w < m.length; w++)
      m[w] = m[w] / x;
    h.envMap.value = e.texture, h.samples.value = p, h.weights.value = m, h.latitudinal.value = o === "latitudinal", a && (h.poleAxis.value = a);
    const { _lodMax: v } = this;
    h.dTheta.value = g, h.mipInt.value = v - n;
    const b = this._sizeLods[s], R = 3 * b * (s > v - ms ? s - v + ms : 0), A = 4 * (this._cubeSize - b);
    Or(t, R, A, 3 * b, 2 * b), l.setRenderTarget(t), l.render(d, oa);
  }
}
function Av(i) {
  const e = [], t = [], n = [];
  let s = i;
  const r = i - ms + 1 + Pc.length;
  for (let o = 0; o < r; o++) {
    const a = Math.pow(2, s);
    t.push(a);
    let l = 1 / a;
    o > i - ms ? l = Pc[o - i + ms - 1] : o === 0 && (l = 0), n.push(l);
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
    const R = new Mn();
    R.setAttribute("position", new qt(x, _)), R.setAttribute("uv", new qt(v, p)), R.setAttribute("faceIndex", new qt(b, m)), e.push(R), s > ms && s--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Nc(i, e, t) {
  const n = new Hi(i, e, t);
  return n.texture.mapping = xo, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Or(i, e, t, n, s) {
  i.viewport.set(e, t, n, s), i.scissor.set(e, t, n, s);
}
function Tv(i, e, t) {
  const n = new Float32Array(Pi), s = new N(0, 1, 0);
  return new Gi({
    name: "SphericalGaussianBlur",
    defines: {
      n: Pi,
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
    vertexShader: al(),
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
    blending: fi,
    depthTest: !1,
    depthWrite: !1
  });
}
function Oc() {
  return new Gi({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: al(),
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
    blending: fi,
    depthTest: !1,
    depthWrite: !1
  });
}
function Fc() {
  return new Gi({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: al(),
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
    blending: fi,
    depthTest: !1,
    depthWrite: !1
  });
}
function al() {
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
function bv(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === Ca || l === La, u = l === Es || l === Ss;
      if (c || u)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let d = e.get(a);
          return t === null && (t = new Uc(i)), d = c ? t.fromEquirectangular(a, d) : t.fromCubemap(a, d), e.set(a, d), d.texture;
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const d = a.image;
            if (c && d && d.height > 0 || u && d && s(d)) {
              t === null && (t = new Uc(i));
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
function wv(i) {
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
function Rv(i, e, t, n) {
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
    const p = new (Ed(h) ? Rd : wd)(h, 1);
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
function Cv(i, e, t, n) {
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
function Lv(i) {
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
function Pv(i, e) {
  return i[0] - e[0];
}
function Iv(i, e) {
  return Math.abs(e[1]) - Math.abs(i[1]);
}
function Dv(i, e, t) {
  const n = {}, s = new Float32Array(8), r = /* @__PURE__ */ new WeakMap(), o = new mt(), a = [];
  for (let c = 0; c < 8; c++)
    a[c] = [c, 0];
  function l(c, u, d) {
    const h = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const f = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color, g = f !== void 0 ? f.length : 0;
      let _ = r.get(u);
      if (_ === void 0 || _.count !== g) {
        let L = function() {
          J.dispose(), r.delete(u), u.removeEventListener("dispose", L);
        };
        _ !== void 0 && _.texture.dispose();
        const x = u.morphAttributes.position !== void 0, v = u.morphAttributes.normal !== void 0, b = u.morphAttributes.color !== void 0, R = u.morphAttributes.position || [], A = u.morphAttributes.normal || [], w = u.morphAttributes.color || [];
        let H = 0;
        x === !0 && (H = 1), v === !0 && (H = 2), b === !0 && (H = 3);
        let E = u.attributes.position.count * H, T = 1;
        E > e.maxTextureSize && (T = Math.ceil(E / e.maxTextureSize), E = e.maxTextureSize);
        const G = new Float32Array(E * T * 4 * g), J = new Ad(G, E, T, g);
        J.type = Wn, J.needsUpdate = !0;
        const le = H * 4;
        for (let P = 0; P < g; P++) {
          const I = R[P], te = A[P], V = w[P], q = E * T * 4 * P;
          for (let Y = 0; Y < I.count; Y++) {
            const Q = Y * le;
            x === !0 && (o.fromBufferAttribute(I, Y), G[q + Q + 0] = o.x, G[q + Q + 1] = o.y, G[q + Q + 2] = o.z, G[q + Q + 3] = 0), v === !0 && (o.fromBufferAttribute(te, Y), G[q + Q + 4] = o.x, G[q + Q + 5] = o.y, G[q + Q + 6] = o.z, G[q + Q + 7] = 0), b === !0 && (o.fromBufferAttribute(V, Y), G[q + Q + 8] = o.x, G[q + Q + 9] = o.y, G[q + Q + 10] = o.z, G[q + Q + 11] = V.itemSize === 4 ? o.w : 1);
          }
        }
        _ = {
          count: g,
          texture: J,
          size: new ot(E, T)
        }, r.set(u, _), u.addEventListener("dispose", L);
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
      g.sort(Iv);
      for (let v = 0; v < 8; v++)
        v < f && g[v][1] ? (a[v][0] = g[v][0], a[v][1] = g[v][1]) : (a[v][0] = Number.MAX_SAFE_INTEGER, a[v][1] = 0);
      a.sort(Pv);
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
function Uv(i, e, t, n) {
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
class Dd extends Ft {
  constructor(e, t, n, s, r, o, a, l, c, u) {
    if (u = u !== void 0 ? u : Bi, u !== Bi && u !== As)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === Bi && (n = di), n === void 0 && u === As && (n = Fi), super(null, s, r, o, a, l, u, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : Ut, this.minFilter = l !== void 0 ? l : Ut, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const Ud = /* @__PURE__ */ new Ft(), Nd = /* @__PURE__ */ new Dd(1, 1);
Nd.compareFunction = xd;
const Od = /* @__PURE__ */ new Ad(), Fd = /* @__PURE__ */ new vm(), Bd = /* @__PURE__ */ new Pd(), Bc = [], Vc = [], kc = new Float32Array(16), zc = new Float32Array(9), Hc = new Float32Array(4);
function Is(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const s = e * t;
  let r = Bc[s];
  if (r === void 0 && (r = new Float32Array(s), Bc[s] = r), e !== 0) {
    n.toArray(r, 0);
    for (let o = 1, a = 0; o !== e; ++o)
      a += t, i[o].toArray(r, a);
  }
  return r;
}
function Lt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1;
  return !0;
}
function Pt(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function Ao(i, e) {
  let t = Vc[e];
  t === void 0 && (t = new Int32Array(e), Vc[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function Nv(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function Ov(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Lt(t, e)) return;
    i.uniform2fv(this.addr, e), Pt(t, e);
  }
}
function Fv(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (Lt(t, e)) return;
    i.uniform3fv(this.addr, e), Pt(t, e);
  }
}
function Bv(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Lt(t, e)) return;
    i.uniform4fv(this.addr, e), Pt(t, e);
  }
}
function Vv(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Lt(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), Pt(t, e);
  } else {
    if (Lt(t, n)) return;
    Hc.set(n), i.uniformMatrix2fv(this.addr, !1, Hc), Pt(t, n);
  }
}
function kv(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Lt(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), Pt(t, e);
  } else {
    if (Lt(t, n)) return;
    zc.set(n), i.uniformMatrix3fv(this.addr, !1, zc), Pt(t, n);
  }
}
function zv(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Lt(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), Pt(t, e);
  } else {
    if (Lt(t, n)) return;
    kc.set(n), i.uniformMatrix4fv(this.addr, !1, kc), Pt(t, n);
  }
}
function Hv(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function Gv(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Lt(t, e)) return;
    i.uniform2iv(this.addr, e), Pt(t, e);
  }
}
function Wv(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Lt(t, e)) return;
    i.uniform3iv(this.addr, e), Pt(t, e);
  }
}
function jv(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Lt(t, e)) return;
    i.uniform4iv(this.addr, e), Pt(t, e);
  }
}
function Xv(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function qv(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Lt(t, e)) return;
    i.uniform2uiv(this.addr, e), Pt(t, e);
  }
}
function Yv(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Lt(t, e)) return;
    i.uniform3uiv(this.addr, e), Pt(t, e);
  }
}
function $v(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Lt(t, e)) return;
    i.uniform4uiv(this.addr, e), Pt(t, e);
  }
}
function Kv(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s);
  const r = this.type === i.SAMPLER_2D_SHADOW ? Nd : Ud;
  t.setTexture2D(e || r, s);
}
function Jv(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), t.setTexture3D(e || Fd, s);
}
function Zv(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), t.setTextureCube(e || Bd, s);
}
function Qv(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), t.setTexture2DArray(e || Od, s);
}
function e0(i) {
  switch (i) {
    case 5126:
      return Nv;
    // FLOAT
    case 35664:
      return Ov;
    // _VEC2
    case 35665:
      return Fv;
    // _VEC3
    case 35666:
      return Bv;
    // _VEC4
    case 35674:
      return Vv;
    // _MAT2
    case 35675:
      return kv;
    // _MAT3
    case 35676:
      return zv;
    // _MAT4
    case 5124:
    case 35670:
      return Hv;
    // INT, BOOL
    case 35667:
    case 35671:
      return Gv;
    // _VEC2
    case 35668:
    case 35672:
      return Wv;
    // _VEC3
    case 35669:
    case 35673:
      return jv;
    // _VEC4
    case 5125:
      return Xv;
    // UINT
    case 36294:
      return qv;
    // _VEC2
    case 36295:
      return Yv;
    // _VEC3
    case 36296:
      return $v;
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
      return Jv;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Zv;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Qv;
  }
}
function t0(i, e) {
  i.uniform1fv(this.addr, e);
}
function n0(i, e) {
  const t = Is(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function i0(i, e) {
  const t = Is(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function s0(i, e) {
  const t = Is(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function r0(i, e) {
  const t = Is(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function o0(i, e) {
  const t = Is(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function a0(i, e) {
  const t = Is(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function l0(i, e) {
  i.uniform1iv(this.addr, e);
}
function c0(i, e) {
  i.uniform2iv(this.addr, e);
}
function u0(i, e) {
  i.uniform3iv(this.addr, e);
}
function d0(i, e) {
  i.uniform4iv(this.addr, e);
}
function h0(i, e) {
  i.uniform1uiv(this.addr, e);
}
function f0(i, e) {
  i.uniform2uiv(this.addr, e);
}
function p0(i, e) {
  i.uniform3uiv(this.addr, e);
}
function m0(i, e) {
  i.uniform4uiv(this.addr, e);
}
function g0(i, e, t) {
  const n = this.cache, s = e.length, r = Ao(t, s);
  Lt(n, r) || (i.uniform1iv(this.addr, r), Pt(n, r));
  for (let o = 0; o !== s; ++o)
    t.setTexture2D(e[o] || Ud, r[o]);
}
function _0(i, e, t) {
  const n = this.cache, s = e.length, r = Ao(t, s);
  Lt(n, r) || (i.uniform1iv(this.addr, r), Pt(n, r));
  for (let o = 0; o !== s; ++o)
    t.setTexture3D(e[o] || Fd, r[o]);
}
function v0(i, e, t) {
  const n = this.cache, s = e.length, r = Ao(t, s);
  Lt(n, r) || (i.uniform1iv(this.addr, r), Pt(n, r));
  for (let o = 0; o !== s; ++o)
    t.setTextureCube(e[o] || Bd, r[o]);
}
function y0(i, e, t) {
  const n = this.cache, s = e.length, r = Ao(t, s);
  Lt(n, r) || (i.uniform1iv(this.addr, r), Pt(n, r));
  for (let o = 0; o !== s; ++o)
    t.setTexture2DArray(e[o] || Od, r[o]);
}
function x0(i) {
  switch (i) {
    case 5126:
      return t0;
    // FLOAT
    case 35664:
      return n0;
    // _VEC2
    case 35665:
      return i0;
    // _VEC3
    case 35666:
      return s0;
    // _VEC4
    case 35674:
      return r0;
    // _MAT2
    case 35675:
      return o0;
    // _MAT3
    case 35676:
      return a0;
    // _MAT4
    case 5124:
    case 35670:
      return l0;
    // INT, BOOL
    case 35667:
    case 35671:
      return c0;
    // _VEC2
    case 35668:
    case 35672:
      return u0;
    // _VEC3
    case 35669:
    case 35673:
      return d0;
    // _VEC4
    case 5125:
      return h0;
    // UINT
    case 36294:
      return f0;
    // _VEC2
    case 36295:
      return p0;
    // _VEC3
    case 36296:
      return m0;
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
      return g0;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return _0;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return v0;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return y0;
  }
}
class E0 {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = e0(t.type);
  }
}
class S0 {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = x0(t.type);
  }
}
class M0 {
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
const ua = /(\w+)(\])?(\[|\.)?/g;
function Gc(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function A0(i, e, t) {
  const n = i.name, s = n.length;
  for (ua.lastIndex = 0; ; ) {
    const r = ua.exec(n), o = ua.lastIndex;
    let a = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === s) {
      Gc(t, c === void 0 ? new E0(a, i, e) : new S0(a, i, e));
      break;
    } else {
      let d = t.map[a];
      d === void 0 && (d = new M0(a), Gc(t, d)), t = d;
    }
  }
}
class eo {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const r = e.getActiveUniform(t, s), o = e.getUniformLocation(t, r.name);
      A0(r, o, this);
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
function Wc(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const T0 = 37297;
let b0 = 0;
function w0(i, e) {
  const t = i.split(`
`), n = [], s = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let o = s; o < r; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function R0(i) {
  const e = ft.getPrimaries(ft.workingColorSpace), t = ft.getPrimaries(i);
  let n;
  switch (e === t ? n = "" : e === uo && t === co ? n = "LinearDisplayP3ToLinearSRGB" : e === co && t === uo && (n = "LinearSRGBToLinearDisplayP3"), i) {
    case Nt:
    case Eo:
      return [n, "LinearTransferOETF"];
    case Et:
    case il:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", i), [n, "LinearTransferOETF"];
  }
}
function jc(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), s = i.getShaderInfoLog(e).trim();
  if (n && s === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(s);
  if (r) {
    const o = parseInt(r[1]);
    return t.toUpperCase() + `

` + s + `

` + w0(i.getShaderSource(e), o);
  } else
    return s;
}
function C0(i, e) {
  const t = R0(e);
  return `vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function L0(i, e) {
  let t;
  switch (e) {
    case Mp:
      t = "Linear";
      break;
    case Ap:
      t = "Reinhard";
      break;
    case Tp:
      t = "OptimizedCineon";
      break;
    case ad:
      t = "ACESFilmic";
      break;
    case wp:
      t = "AgX";
      break;
    case bp:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function P0(i) {
  return [
    i.extensionDerivatives || i.envMapCubeUVHeight || i.bumpMap || i.normalMapTangentSpace || i.clearcoatNormalMap || i.flatShading || i.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (i.extensionFragDepth || i.logarithmicDepthBuffer) && i.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    i.extensionDrawBuffers && i.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (i.extensionShaderTextureLOD || i.envMap || i.transmission) && i.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(gs).join(`
`);
}
function I0(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : ""
  ].filter(gs).join(`
`);
}
function D0(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function U0(i, e) {
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
function gs(i) {
  return i !== "";
}
function Xc(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function qc(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const N0 = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Oa(i) {
  return i.replace(N0, F0);
}
const O0 = /* @__PURE__ */ new Map([
  ["encodings_fragment", "colorspace_fragment"],
  // @deprecated, r154
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  // @deprecated, r154
  ["output_fragment", "opaque_fragment"]
  // @deprecated, r154
]);
function F0(i, e) {
  let t = Je[e];
  if (t === void 0) {
    const n = O0.get(e);
    if (n !== void 0)
      t = Je[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Oa(t);
}
const B0 = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Yc(i) {
  return i.replace(B0, V0);
}
function V0(i, e, t, n) {
  let s = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    s += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function $c(i) {
  let e = "precision " + i.precision + ` float;
precision ` + i.precision + " int;";
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function k0(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === sd ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === rd ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === Hn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function z0(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case Es:
      case Ss:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case xo:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function H0(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case Ss:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function G0(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case od:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Ep:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Sp:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function W0(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t };
}
function j0(i, e, t, n) {
  const s = i.getContext(), r = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const l = k0(t), c = z0(t), u = H0(t), d = G0(t), h = W0(t), f = t.isWebGL2 ? "" : P0(t), g = I0(t), _ = D0(r), p = s.createProgram();
  let m, x, v = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (m = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(gs).join(`
`), m.length > 0 && (m += `
`), x = [
    f,
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(gs).join(`
`), x.length > 0 && (x += `
`)) : (m = [
    $c(t),
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
  ].filter(gs).join(`
`), x = [
    f,
    $c(t),
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
    t.toneMapping !== pi ? "#define TONE_MAPPING" : "",
    t.toneMapping !== pi ? Je.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== pi ? L0("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Je.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    C0("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(gs).join(`
`)), o = Oa(o), o = Xc(o, t), o = qc(o, t), a = Oa(a), a = Xc(a, t), a = qc(a, t), o = Yc(o), a = Yc(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (v = `#version 300 es
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
    t.glslVersion === fc ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === fc ? "" : "#define gl_FragColor pc_fragColor",
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
  const b = v + m + o, R = v + x + a, A = Wc(s, s.VERTEX_SHADER, b), w = Wc(s, s.FRAGMENT_SHADER, R);
  s.attachShader(p, A), s.attachShader(p, w), t.index0AttributeName !== void 0 ? s.bindAttribLocation(p, 0, t.index0AttributeName) : t.morphTargets === !0 && s.bindAttribLocation(p, 0, "position"), s.linkProgram(p);
  function H(J) {
    if (i.debug.checkShaderErrors) {
      const le = s.getProgramInfoLog(p).trim(), L = s.getShaderInfoLog(A).trim(), P = s.getShaderInfoLog(w).trim();
      let I = !0, te = !0;
      if (s.getProgramParameter(p, s.LINK_STATUS) === !1)
        if (I = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(s, p, A, w);
        else {
          const V = jc(s, A, "vertex"), q = jc(s, w, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(p, s.VALIDATE_STATUS) + `

Program Info Log: ` + le + `
` + V + `
` + q
          );
        }
      else le !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", le) : (L === "" || P === "") && (te = !1);
      te && (J.diagnostics = {
        runnable: I,
        programLog: le,
        vertexShader: {
          log: L,
          prefix: m
        },
        fragmentShader: {
          log: P,
          prefix: x
        }
      });
    }
    s.deleteShader(A), s.deleteShader(w), E = new eo(s, p), T = U0(s, p);
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
    return G === !1 && (G = s.getProgramParameter(p, T0)), G;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), s.deleteProgram(p), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = b0++, this.cacheKey = e, this.usedTimes = 1, this.program = p, this.vertexShader = A, this.fragmentShader = w, this;
}
let X0 = 0;
class q0 {
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
    return n === void 0 && (n = new Y0(e), t.set(e, n)), n;
  }
}
class Y0 {
  constructor(e) {
    this.id = X0++, this.code = e, this.usedTimes = 0;
  }
}
function $0(i, e, t, n, s, r, o) {
  const a = new Td(), l = new q0(), c = [], u = s.isWebGL2, d = s.logarithmicDepthBuffer, h = s.vertexTextures;
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
    const L = J.fog, P = le.geometry, I = E.isMeshStandardMaterial ? J.environment : null, te = (E.isMeshStandardMaterial ? t : e).get(E.envMap || I), V = te && te.mapping === xo ? te.image.height : null, q = g[E.type];
    E.precision !== null && (f = s.getMaxPrecision(E.precision), f !== E.precision && console.warn("THREE.WebGLProgram.getParameters:", E.precision, "not supported, using", f, "instead."));
    const Y = P.morphAttributes.position || P.morphAttributes.normal || P.morphAttributes.color, Q = Y !== void 0 ? Y.length : 0;
    let he = 0;
    P.morphAttributes.position !== void 0 && (he = 1), P.morphAttributes.normal !== void 0 && (he = 2), P.morphAttributes.color !== void 0 && (he = 3);
    let z, ne, re, ee;
    if (q) {
      const wt = Cn[q];
      z = wt.vertexShader, ne = wt.fragmentShader;
    } else
      z = E.vertexShader, ne = E.fragmentShader, l.update(E), re = l.getVertexShaderID(E), ee = l.getFragmentShaderID(E);
    const ae = i.getRenderTarget(), we = le.isInstancedMesh === !0, Ce = le.isBatchedMesh === !0, ge = !!E.map, Ae = !!E.matcap, F = !!te, Qe = !!E.aoMap, Le = !!E.lightMap, Ue = !!E.bumpMap, Te = !!E.normalMap, lt = !!E.displacementMap, ke = !!E.emissiveMap, M = !!E.metalnessMap, y = !!E.roughnessMap, j = E.anisotropy > 0, de = E.clearcoat > 0, ce = E.iridescence > 0, ue = E.sheen > 0, oe = E.transmission > 0, D = j && !!E.anisotropyMap, k = de && !!E.clearcoatMap, ie = de && !!E.clearcoatNormalMap, Se = de && !!E.clearcoatRoughnessMap, $ = ce && !!E.iridescenceMap, xe = ce && !!E.iridescenceThicknessMap, Ee = ue && !!E.sheenColorMap, Pe = ue && !!E.sheenRoughnessMap, Re = !!E.specularMap, Me = !!E.specularColorMap, Ge = !!E.specularIntensityMap, it = oe && !!E.transmissionMap, ct = oe && !!E.thicknessMap, qe = !!E.gradientMap, fe = !!E.alphaMap, C = E.alphaTest > 0, ve = !!E.alphaHash, ye = !!E.extensions, Be = !!P.attributes.uv1, Ie = !!P.attributes.uv2, at = !!P.attributes.uv3;
    let dt = pi;
    return E.toneMapped && (ae === null || ae.isXRRenderTarget === !0) && (dt = i.toneMapping), {
      isWebGL2: u,
      shaderID: q,
      shaderType: E.type,
      shaderName: E.name,
      vertexShader: z,
      fragmentShader: ne,
      defines: E.defines,
      customVertexShaderID: re,
      customFragmentShaderID: ee,
      isRawShaderMaterial: E.isRawShaderMaterial === !0,
      glslVersion: E.glslVersion,
      precision: f,
      batching: Ce,
      instancing: we,
      instancingColor: we && le.instanceColor !== null,
      supportsVertexTextures: h,
      outputColorSpace: ae === null ? i.outputColorSpace : ae.isXRRenderTarget === !0 ? ae.texture.colorSpace : Nt,
      map: ge,
      matcap: Ae,
      envMap: F,
      envMapMode: F && te.mapping,
      envMapCubeUVHeight: V,
      aoMap: Qe,
      lightMap: Le,
      bumpMap: Ue,
      normalMap: Te,
      displacementMap: h && lt,
      emissiveMap: ke,
      normalMapObjectSpace: Te && E.normalMapType === Wp,
      normalMapTangentSpace: Te && E.normalMapType === yd,
      metalnessMap: M,
      roughnessMap: y,
      anisotropy: j,
      anisotropyMap: D,
      clearcoat: de,
      clearcoatMap: k,
      clearcoatNormalMap: ie,
      clearcoatRoughnessMap: Se,
      iridescence: ce,
      iridescenceMap: $,
      iridescenceThicknessMap: xe,
      sheen: ue,
      sheenColorMap: Ee,
      sheenRoughnessMap: Pe,
      specularMap: Re,
      specularColorMap: Me,
      specularIntensityMap: Ge,
      transmission: oe,
      transmissionMap: it,
      thicknessMap: ct,
      gradientMap: qe,
      opaque: E.transparent === !1 && E.blending === _s,
      alphaMap: fe,
      alphaTest: C,
      alphaHash: ve,
      combine: E.combine,
      //
      mapUv: ge && _(E.map.channel),
      aoMapUv: Qe && _(E.aoMap.channel),
      lightMapUv: Le && _(E.lightMap.channel),
      bumpMapUv: Ue && _(E.bumpMap.channel),
      normalMapUv: Te && _(E.normalMap.channel),
      displacementMapUv: lt && _(E.displacementMap.channel),
      emissiveMapUv: ke && _(E.emissiveMap.channel),
      metalnessMapUv: M && _(E.metalnessMap.channel),
      roughnessMapUv: y && _(E.roughnessMap.channel),
      anisotropyMapUv: D && _(E.anisotropyMap.channel),
      clearcoatMapUv: k && _(E.clearcoatMap.channel),
      clearcoatNormalMapUv: ie && _(E.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Se && _(E.clearcoatRoughnessMap.channel),
      iridescenceMapUv: $ && _(E.iridescenceMap.channel),
      iridescenceThicknessMapUv: xe && _(E.iridescenceThicknessMap.channel),
      sheenColorMapUv: Ee && _(E.sheenColorMap.channel),
      sheenRoughnessMapUv: Pe && _(E.sheenRoughnessMap.channel),
      specularMapUv: Re && _(E.specularMap.channel),
      specularColorMapUv: Me && _(E.specularColorMap.channel),
      specularIntensityMapUv: Ge && _(E.specularIntensityMap.channel),
      transmissionMapUv: it && _(E.transmissionMap.channel),
      thicknessMapUv: ct && _(E.thicknessMap.channel),
      alphaMapUv: fe && _(E.alphaMap.channel),
      //
      vertexTangents: !!P.attributes.tangent && (Te || j),
      vertexColors: E.vertexColors,
      vertexAlphas: E.vertexColors === !0 && !!P.attributes.color && P.attributes.color.itemSize === 4,
      vertexUv1s: Be,
      vertexUv2s: Ie,
      vertexUv3s: at,
      pointsUvs: le.isPoints === !0 && !!P.attributes.uv && (ge || fe),
      fog: !!L,
      useFog: E.fog === !0,
      fogExp2: L && L.isFogExp2,
      flatShading: E.flatShading === !0,
      sizeAttenuation: E.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      skinning: le.isSkinnedMesh === !0,
      morphTargets: P.morphAttributes.position !== void 0,
      morphNormals: P.morphAttributes.normal !== void 0,
      morphColors: P.morphAttributes.color !== void 0,
      morphTargetsCount: Q,
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
      doubleSided: E.side === Ln,
      flipSided: E.side === Qt,
      useDepthPacking: E.depthPacking >= 0,
      depthPacking: E.depthPacking || 0,
      index0AttributeName: E.index0AttributeName,
      extensionDerivatives: ye && E.extensions.derivatives === !0,
      extensionFragDepth: ye && E.extensions.fragDepth === !0,
      extensionDrawBuffers: ye && E.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: ye && E.extensions.shaderTextureLOD === !0,
      extensionClipCullDistance: ye && E.extensions.clipCullDistance && n.has("WEBGL_clip_cull_distance"),
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
      const J = Cn[T];
      G = Pm.clone(J.uniforms);
    } else
      G = E.uniforms;
    return G;
  }
  function R(E, T) {
    let G;
    for (let J = 0, le = c.length; J < le; J++) {
      const L = c[J];
      if (L.cacheKey === T) {
        G = L, ++G.usedTimes;
        break;
      }
    }
    return G === void 0 && (G = new j0(i, T, E, r), c.push(G)), G;
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
function J0(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function Kc(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function Jc() {
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
    t.length > 1 && t.sort(d || J0), n.length > 1 && n.sort(h || Kc), s.length > 1 && s.sort(h || Kc);
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
function Z0() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, s) {
    const r = i.get(n);
    let o;
    return r === void 0 ? (o = new Jc(), i.set(n, [o])) : s >= r.length ? (o = new Jc(), r.push(o)) : o = r[s], o;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
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
            direction: new N(),
            color: new Xe()
          };
          break;
        case "SpotLight":
          t = {
            position: new N(),
            direction: new N(),
            color: new Xe(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new N(),
            color: new Xe(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new N(),
            skyColor: new Xe(),
            groundColor: new Xe()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Xe(),
            position: new N(),
            halfWidth: new N(),
            halfHeight: new N()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function ey() {
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
let ty = 0;
function ny(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function iy(i, e) {
  const t = new Q0(), n = ey(), s = {
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
  for (let u = 0; u < 9; u++) s.probe.push(new N());
  const r = new N(), o = new nt(), a = new nt();
  function l(u, d) {
    let h = 0, f = 0, g = 0;
    for (let J = 0; J < 9; J++) s.probe[J].set(0, 0, 0);
    let _ = 0, p = 0, m = 0, x = 0, v = 0, b = 0, R = 0, A = 0, w = 0, H = 0, E = 0;
    u.sort(ny);
    const T = d === !0 ? Math.PI : 1;
    for (let J = 0, le = u.length; J < le; J++) {
      const L = u[J], P = L.color, I = L.intensity, te = L.distance, V = L.shadow && L.shadow.map ? L.shadow.map.texture : null;
      if (L.isAmbientLight)
        h += P.r * I * T, f += P.g * I * T, g += P.b * I * T;
      else if (L.isLightProbe) {
        for (let q = 0; q < 9; q++)
          s.probe[q].addScaledVector(L.sh.coefficients[q], I);
        E++;
      } else if (L.isDirectionalLight) {
        const q = t.get(L);
        if (q.color.copy(L.color).multiplyScalar(L.intensity * T), L.castShadow) {
          const Y = L.shadow, Q = n.get(L);
          Q.shadowBias = Y.bias, Q.shadowNormalBias = Y.normalBias, Q.shadowRadius = Y.radius, Q.shadowMapSize = Y.mapSize, s.directionalShadow[_] = Q, s.directionalShadowMap[_] = V, s.directionalShadowMatrix[_] = L.shadow.matrix, b++;
        }
        s.directional[_] = q, _++;
      } else if (L.isSpotLight) {
        const q = t.get(L);
        q.position.setFromMatrixPosition(L.matrixWorld), q.color.copy(P).multiplyScalar(I * T), q.distance = te, q.coneCos = Math.cos(L.angle), q.penumbraCos = Math.cos(L.angle * (1 - L.penumbra)), q.decay = L.decay, s.spot[m] = q;
        const Y = L.shadow;
        if (L.map && (s.spotLightMap[w] = L.map, w++, Y.updateMatrices(L), L.castShadow && H++), s.spotLightMatrix[m] = Y.matrix, L.castShadow) {
          const Q = n.get(L);
          Q.shadowBias = Y.bias, Q.shadowNormalBias = Y.normalBias, Q.shadowRadius = Y.radius, Q.shadowMapSize = Y.mapSize, s.spotShadow[m] = Q, s.spotShadowMap[m] = V, A++;
        }
        m++;
      } else if (L.isRectAreaLight) {
        const q = t.get(L);
        q.color.copy(P).multiplyScalar(I), q.halfWidth.set(L.width * 0.5, 0, 0), q.halfHeight.set(0, L.height * 0.5, 0), s.rectArea[x] = q, x++;
      } else if (L.isPointLight) {
        const q = t.get(L);
        if (q.color.copy(L.color).multiplyScalar(L.intensity * T), q.distance = L.distance, q.decay = L.decay, L.castShadow) {
          const Y = L.shadow, Q = n.get(L);
          Q.shadowBias = Y.bias, Q.shadowNormalBias = Y.normalBias, Q.shadowRadius = Y.radius, Q.shadowMapSize = Y.mapSize, Q.shadowCameraNear = Y.camera.near, Q.shadowCameraFar = Y.camera.far, s.pointShadow[p] = Q, s.pointShadowMap[p] = V, s.pointShadowMatrix[p] = L.shadow.matrix, R++;
        }
        s.point[p] = q, p++;
      } else if (L.isHemisphereLight) {
        const q = t.get(L);
        q.skyColor.copy(L.color).multiplyScalar(I * T), q.groundColor.copy(L.groundColor).multiplyScalar(I * T), s.hemi[v] = q, v++;
      }
    }
    x > 0 && (e.isWebGL2 ? i.has("OES_texture_float_linear") === !0 ? (s.rectAreaLTC1 = _e.LTC_FLOAT_1, s.rectAreaLTC2 = _e.LTC_FLOAT_2) : (s.rectAreaLTC1 = _e.LTC_HALF_1, s.rectAreaLTC2 = _e.LTC_HALF_2) : i.has("OES_texture_float_linear") === !0 ? (s.rectAreaLTC1 = _e.LTC_FLOAT_1, s.rectAreaLTC2 = _e.LTC_FLOAT_2) : i.has("OES_texture_half_float_linear") === !0 ? (s.rectAreaLTC1 = _e.LTC_HALF_1, s.rectAreaLTC2 = _e.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), s.ambient[0] = h, s.ambient[1] = f, s.ambient[2] = g;
    const G = s.hash;
    (G.directionalLength !== _ || G.pointLength !== p || G.spotLength !== m || G.rectAreaLength !== x || G.hemiLength !== v || G.numDirectionalShadows !== b || G.numPointShadows !== R || G.numSpotShadows !== A || G.numSpotMaps !== w || G.numLightProbes !== E) && (s.directional.length = _, s.spot.length = m, s.rectArea.length = x, s.point.length = p, s.hemi.length = v, s.directionalShadow.length = b, s.directionalShadowMap.length = b, s.pointShadow.length = R, s.pointShadowMap.length = R, s.spotShadow.length = A, s.spotShadowMap.length = A, s.directionalShadowMatrix.length = b, s.pointShadowMatrix.length = R, s.spotLightMatrix.length = A + w - H, s.spotLightMap.length = w, s.numSpotLightShadowsWithMaps = H, s.numLightProbes = E, G.directionalLength = _, G.pointLength = p, G.spotLength = m, G.rectAreaLength = x, G.hemiLength = v, G.numDirectionalShadows = b, G.numPointShadows = R, G.numSpotShadows = A, G.numSpotMaps = w, G.numLightProbes = E, s.version = ty++);
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
function Zc(i, e) {
  const t = new iy(i, e), n = [], s = [];
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
function sy(i, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(r, o = 0) {
    const a = t.get(r);
    let l;
    return a === void 0 ? (l = new Zc(i, e), t.set(r, [l])) : o >= a.length ? (l = new Zc(i, e), a.push(l)) : l = a[o], l;
  }
  function s() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class ry extends In {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Hp, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class oy extends In {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const ay = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, ly = `uniform sampler2D shadow_pass;
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
function cy(i, e, t) {
  let n = new rl();
  const s = new ot(), r = new ot(), o = new mt(), a = new ry({ depthPacking: Gp }), l = new oy(), c = {}, u = t.maxTextureSize, d = { [Xn]: Qt, [Qt]: Xn, [Ln]: Ln }, h = new Gi({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new ot() },
      radius: { value: 4 }
    },
    vertexShader: ay,
    fragmentShader: ly
  }), f = h.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const g = new Mn();
  g.setAttribute(
    "position",
    new qt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const _ = new Ke(g, h), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = sd;
  let m = this.type;
  this.render = function(A, w, H) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || A.length === 0) return;
    const E = i.getRenderTarget(), T = i.getActiveCubeFace(), G = i.getActiveMipmapLevel(), J = i.state;
    J.setBlending(fi), J.buffers.color.setClear(1, 1, 1, 1), J.buffers.depth.setTest(!0), J.setScissorTest(!1);
    const le = m !== Hn && this.type === Hn, L = m === Hn && this.type !== Hn;
    for (let P = 0, I = A.length; P < I; P++) {
      const te = A[P], V = te.shadow;
      if (V === void 0) {
        console.warn("THREE.WebGLShadowMap:", te, "has no shadow.");
        continue;
      }
      if (V.autoUpdate === !1 && V.needsUpdate === !1) continue;
      s.copy(V.mapSize);
      const q = V.getFrameExtents();
      if (s.multiply(q), r.copy(V.mapSize), (s.x > u || s.y > u) && (s.x > u && (r.x = Math.floor(u / q.x), s.x = r.x * q.x, V.mapSize.x = r.x), s.y > u && (r.y = Math.floor(u / q.y), s.y = r.y * q.y, V.mapSize.y = r.y)), V.map === null || le === !0 || L === !0) {
        const Q = this.type !== Hn ? { minFilter: Ut, magFilter: Ut } : {};
        V.map !== null && V.map.dispose(), V.map = new Hi(s.x, s.y, Q), V.map.texture.name = te.name + ".shadowMap", V.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(V.map), i.clear();
      const Y = V.getViewportCount();
      for (let Q = 0; Q < Y; Q++) {
        const he = V.getViewport(Q);
        o.set(
          r.x * he.x,
          r.y * he.y,
          r.x * he.z,
          r.y * he.w
        ), J.viewport(o), V.updateMatrices(te, Q), n = V.getFrustum(), b(w, H, V.camera, te, this.type);
      }
      V.isPointLightShadow !== !0 && this.type === Hn && x(V, H), V.needsUpdate = !1;
    }
    m = this.type, p.needsUpdate = !1, i.setRenderTarget(E, T, G);
  };
  function x(A, w) {
    const H = e.update(_);
    h.defines.VSM_SAMPLES !== A.blurSamples && (h.defines.VSM_SAMPLES = A.blurSamples, f.defines.VSM_SAMPLES = A.blurSamples, h.needsUpdate = !0, f.needsUpdate = !0), A.mapPass === null && (A.mapPass = new Hi(s.x, s.y)), h.uniforms.shadow_pass.value = A.map.texture, h.uniforms.resolution.value = A.mapSize, h.uniforms.radius.value = A.radius, i.setRenderTarget(A.mapPass), i.clear(), i.renderBufferDirect(w, null, H, h, _, null), f.uniforms.shadow_pass.value = A.mapPass.texture, f.uniforms.resolution.value = A.mapSize, f.uniforms.radius.value = A.radius, i.setRenderTarget(A.map), i.clear(), i.renderBufferDirect(w, null, H, f, _, null);
  }
  function v(A, w, H, E) {
    let T = null;
    const G = H.isPointLight === !0 ? A.customDistanceMaterial : A.customDepthMaterial;
    if (G !== void 0)
      T = G;
    else if (T = H.isPointLight === !0 ? l : a, i.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) {
      const J = T.uuid, le = w.uuid;
      let L = c[J];
      L === void 0 && (L = {}, c[J] = L);
      let P = L[le];
      P === void 0 && (P = T.clone(), L[le] = P, w.addEventListener("dispose", R)), T = P;
    }
    if (T.visible = w.visible, T.wireframe = w.wireframe, E === Hn ? T.side = w.shadowSide !== null ? w.shadowSide : w.side : T.side = w.shadowSide !== null ? w.shadowSide : d[w.side], T.alphaMap = w.alphaMap, T.alphaTest = w.alphaTest, T.map = w.map, T.clipShadows = w.clipShadows, T.clippingPlanes = w.clippingPlanes, T.clipIntersection = w.clipIntersection, T.displacementMap = w.displacementMap, T.displacementScale = w.displacementScale, T.displacementBias = w.displacementBias, T.wireframeLinewidth = w.wireframeLinewidth, T.linewidth = w.linewidth, H.isPointLight === !0 && T.isMeshDistanceMaterial === !0) {
      const J = i.properties.get(T);
      J.light = H;
    }
    return T;
  }
  function b(A, w, H, E, T) {
    if (A.visible === !1) return;
    if (A.layers.test(w.layers) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && T === Hn) && (!A.frustumCulled || n.intersectsObject(A))) {
      A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse, A.matrixWorld);
      const le = e.update(A), L = A.material;
      if (Array.isArray(L)) {
        const P = le.groups;
        for (let I = 0, te = P.length; I < te; I++) {
          const V = P[I], q = L[V.materialIndex];
          if (q && q.visible) {
            const Y = v(A, q, E, T);
            A.onBeforeShadow(i, A, w, H, le, Y, V), i.renderBufferDirect(H, null, le, Y, A, V), A.onAfterShadow(i, A, w, H, le, Y, V);
          }
        }
      } else if (L.visible) {
        const P = v(A, L, E, T);
        A.onBeforeShadow(i, A, w, H, le, P, null), i.renderBufferDirect(H, null, le, P, A, null), A.onAfterShadow(i, A, w, H, le, P, null);
      }
    }
    const J = A.children;
    for (let le = 0, L = J.length; le < L; le++)
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
function uy(i, e, t) {
  const n = t.isWebGL2;
  function s() {
    let C = !1;
    const ve = new mt();
    let ye = null;
    const Be = new mt(0, 0, 0, 0);
    return {
      setMask: function(Ie) {
        ye !== Ie && !C && (i.colorMask(Ie, Ie, Ie, Ie), ye = Ie);
      },
      setLocked: function(Ie) {
        C = Ie;
      },
      setClear: function(Ie, at, dt, Mt, wt) {
        wt === !0 && (Ie *= Mt, at *= Mt, dt *= Mt), ve.set(Ie, at, dt, Mt), Be.equals(ve) === !1 && (i.clearColor(Ie, at, dt, Mt), Be.copy(ve));
      },
      reset: function() {
        C = !1, ye = null, Be.set(-1, 0, 0, 0);
      }
    };
  }
  function r() {
    let C = !1, ve = null, ye = null, Be = null;
    return {
      setTest: function(Ie) {
        Ie ? Ce(i.DEPTH_TEST) : ge(i.DEPTH_TEST);
      },
      setMask: function(Ie) {
        ve !== Ie && !C && (i.depthMask(Ie), ve = Ie);
      },
      setFunc: function(Ie) {
        if (ye !== Ie) {
          switch (Ie) {
            case pp:
              i.depthFunc(i.NEVER);
              break;
            case mp:
              i.depthFunc(i.ALWAYS);
              break;
            case gp:
              i.depthFunc(i.LESS);
              break;
            case ro:
              i.depthFunc(i.LEQUAL);
              break;
            case _p:
              i.depthFunc(i.EQUAL);
              break;
            case vp:
              i.depthFunc(i.GEQUAL);
              break;
            case yp:
              i.depthFunc(i.GREATER);
              break;
            case xp:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          ye = Ie;
        }
      },
      setLocked: function(Ie) {
        C = Ie;
      },
      setClear: function(Ie) {
        Be !== Ie && (i.clearDepth(Ie), Be = Ie);
      },
      reset: function() {
        C = !1, ve = null, ye = null, Be = null;
      }
    };
  }
  function o() {
    let C = !1, ve = null, ye = null, Be = null, Ie = null, at = null, dt = null, Mt = null, wt = null;
    return {
      setTest: function(ut) {
        C || (ut ? Ce(i.STENCIL_TEST) : ge(i.STENCIL_TEST));
      },
      setMask: function(ut) {
        ve !== ut && !C && (i.stencilMask(ut), ve = ut);
      },
      setFunc: function(ut, Rt, Yt) {
        (ye !== ut || Be !== Rt || Ie !== Yt) && (i.stencilFunc(ut, Rt, Yt), ye = ut, Be = Rt, Ie = Yt);
      },
      setOp: function(ut, Rt, Yt) {
        (at !== ut || dt !== Rt || Mt !== Yt) && (i.stencilOp(ut, Rt, Yt), at = ut, dt = Rt, Mt = Yt);
      },
      setLocked: function(ut) {
        C = ut;
      },
      setClear: function(ut) {
        wt !== ut && (i.clearStencil(ut), wt = ut);
      },
      reset: function() {
        C = !1, ve = null, ye = null, Be = null, Ie = null, at = null, dt = null, Mt = null, wt = null;
      }
    };
  }
  const a = new s(), l = new r(), c = new o(), u = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
  let h = {}, f = {}, g = /* @__PURE__ */ new WeakMap(), _ = [], p = null, m = !1, x = null, v = null, b = null, R = null, A = null, w = null, H = null, E = new Xe(0, 0, 0), T = 0, G = !1, J = null, le = null, L = null, P = null, I = null;
  const te = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let V = !1, q = 0;
  const Y = i.getParameter(i.VERSION);
  Y.indexOf("WebGL") !== -1 ? (q = parseFloat(/^WebGL (\d)/.exec(Y)[1]), V = q >= 1) : Y.indexOf("OpenGL ES") !== -1 && (q = parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]), V = q >= 2);
  let Q = null, he = {};
  const z = i.getParameter(i.SCISSOR_BOX), ne = i.getParameter(i.VIEWPORT), re = new mt().fromArray(z), ee = new mt().fromArray(ne);
  function ae(C, ve, ye, Be) {
    const Ie = new Uint8Array(4), at = i.createTexture();
    i.bindTexture(C, at), i.texParameteri(C, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(C, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let dt = 0; dt < ye; dt++)
      n && (C === i.TEXTURE_3D || C === i.TEXTURE_2D_ARRAY) ? i.texImage3D(ve, 0, i.RGBA, 1, 1, Be, 0, i.RGBA, i.UNSIGNED_BYTE, Ie) : i.texImage2D(ve + dt, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, Ie);
    return at;
  }
  const we = {};
  we[i.TEXTURE_2D] = ae(i.TEXTURE_2D, i.TEXTURE_2D, 1), we[i.TEXTURE_CUBE_MAP] = ae(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (we[i.TEXTURE_2D_ARRAY] = ae(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), we[i.TEXTURE_3D] = ae(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)), a.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), Ce(i.DEPTH_TEST), l.setFunc(ro), ke(!1), M(Ul), Ce(i.CULL_FACE), Te(fi);
  function Ce(C) {
    h[C] !== !0 && (i.enable(C), h[C] = !0);
  }
  function ge(C) {
    h[C] !== !1 && (i.disable(C), h[C] = !1);
  }
  function Ae(C, ve) {
    return f[C] !== ve ? (i.bindFramebuffer(C, ve), f[C] = ve, n && (C === i.DRAW_FRAMEBUFFER && (f[i.FRAMEBUFFER] = ve), C === i.FRAMEBUFFER && (f[i.DRAW_FRAMEBUFFER] = ve)), !0) : !1;
  }
  function F(C, ve) {
    let ye = _, Be = !1;
    if (C)
      if (ye = g.get(ve), ye === void 0 && (ye = [], g.set(ve, ye)), C.isWebGLMultipleRenderTargets) {
        const Ie = C.texture;
        if (ye.length !== Ie.length || ye[0] !== i.COLOR_ATTACHMENT0) {
          for (let at = 0, dt = Ie.length; at < dt; at++)
            ye[at] = i.COLOR_ATTACHMENT0 + at;
          ye.length = Ie.length, Be = !0;
        }
      } else
        ye[0] !== i.COLOR_ATTACHMENT0 && (ye[0] = i.COLOR_ATTACHMENT0, Be = !0);
    else
      ye[0] !== i.BACK && (ye[0] = i.BACK, Be = !0);
    Be && (t.isWebGL2 ? i.drawBuffers(ye) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ye));
  }
  function Qe(C) {
    return p !== C ? (i.useProgram(C), p = C, !0) : !1;
  }
  const Le = {
    [Li]: i.FUNC_ADD,
    [Qf]: i.FUNC_SUBTRACT,
    [ep]: i.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    Le[Bl] = i.MIN, Le[Vl] = i.MAX;
  else {
    const C = e.get("EXT_blend_minmax");
    C !== null && (Le[Bl] = C.MIN_EXT, Le[Vl] = C.MAX_EXT);
  }
  const Ue = {
    [tp]: i.ZERO,
    [np]: i.ONE,
    [ip]: i.SRC_COLOR,
    [wa]: i.SRC_ALPHA,
    [cp]: i.SRC_ALPHA_SATURATE,
    [ap]: i.DST_COLOR,
    [rp]: i.DST_ALPHA,
    [sp]: i.ONE_MINUS_SRC_COLOR,
    [Ra]: i.ONE_MINUS_SRC_ALPHA,
    [lp]: i.ONE_MINUS_DST_COLOR,
    [op]: i.ONE_MINUS_DST_ALPHA,
    [up]: i.CONSTANT_COLOR,
    [dp]: i.ONE_MINUS_CONSTANT_COLOR,
    [hp]: i.CONSTANT_ALPHA,
    [fp]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function Te(C, ve, ye, Be, Ie, at, dt, Mt, wt, ut) {
    if (C === fi) {
      m === !0 && (ge(i.BLEND), m = !1);
      return;
    }
    if (m === !1 && (Ce(i.BLEND), m = !0), C !== Zf) {
      if (C !== x || ut !== G) {
        if ((v !== Li || A !== Li) && (i.blendEquation(i.FUNC_ADD), v = Li, A = Li), ut)
          switch (C) {
            case _s:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case Nl:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case Ol:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Fl:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        else
          switch (C) {
            case _s:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case Nl:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case Ol:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Fl:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        b = null, R = null, w = null, H = null, E.set(0, 0, 0), T = 0, x = C, G = ut;
      }
      return;
    }
    Ie = Ie || ve, at = at || ye, dt = dt || Be, (ve !== v || Ie !== A) && (i.blendEquationSeparate(Le[ve], Le[Ie]), v = ve, A = Ie), (ye !== b || Be !== R || at !== w || dt !== H) && (i.blendFuncSeparate(Ue[ye], Ue[Be], Ue[at], Ue[dt]), b = ye, R = Be, w = at, H = dt), (Mt.equals(E) === !1 || wt !== T) && (i.blendColor(Mt.r, Mt.g, Mt.b, wt), E.copy(Mt), T = wt), x = C, G = !1;
  }
  function lt(C, ve) {
    C.side === Ln ? ge(i.CULL_FACE) : Ce(i.CULL_FACE);
    let ye = C.side === Qt;
    ve && (ye = !ye), ke(ye), C.blending === _s && C.transparent === !1 ? Te(fi) : Te(C.blending, C.blendEquation, C.blendSrc, C.blendDst, C.blendEquationAlpha, C.blendSrcAlpha, C.blendDstAlpha, C.blendColor, C.blendAlpha, C.premultipliedAlpha), l.setFunc(C.depthFunc), l.setTest(C.depthTest), l.setMask(C.depthWrite), a.setMask(C.colorWrite);
    const Be = C.stencilWrite;
    c.setTest(Be), Be && (c.setMask(C.stencilWriteMask), c.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask), c.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)), j(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits), C.alphaToCoverage === !0 ? Ce(i.SAMPLE_ALPHA_TO_COVERAGE) : ge(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function ke(C) {
    J !== C && (C ? i.frontFace(i.CW) : i.frontFace(i.CCW), J = C);
  }
  function M(C) {
    C !== Kf ? (Ce(i.CULL_FACE), C !== le && (C === Ul ? i.cullFace(i.BACK) : C === Jf ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : ge(i.CULL_FACE), le = C;
  }
  function y(C) {
    C !== L && (V && i.lineWidth(C), L = C);
  }
  function j(C, ve, ye) {
    C ? (Ce(i.POLYGON_OFFSET_FILL), (P !== ve || I !== ye) && (i.polygonOffset(ve, ye), P = ve, I = ye)) : ge(i.POLYGON_OFFSET_FILL);
  }
  function de(C) {
    C ? Ce(i.SCISSOR_TEST) : ge(i.SCISSOR_TEST);
  }
  function ce(C) {
    C === void 0 && (C = i.TEXTURE0 + te - 1), Q !== C && (i.activeTexture(C), Q = C);
  }
  function ue(C, ve, ye) {
    ye === void 0 && (Q === null ? ye = i.TEXTURE0 + te - 1 : ye = Q);
    let Be = he[ye];
    Be === void 0 && (Be = { type: void 0, texture: void 0 }, he[ye] = Be), (Be.type !== C || Be.texture !== ve) && (Q !== ye && (i.activeTexture(ye), Q = ye), i.bindTexture(C, ve || we[C]), Be.type = C, Be.texture = ve);
  }
  function oe() {
    const C = he[Q];
    C !== void 0 && C.type !== void 0 && (i.bindTexture(C.type, null), C.type = void 0, C.texture = void 0);
  }
  function D() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function k() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ie() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Se() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function $() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function xe() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Ee() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Pe() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Re() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Me() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Ge(C) {
    re.equals(C) === !1 && (i.scissor(C.x, C.y, C.z, C.w), re.copy(C));
  }
  function it(C) {
    ee.equals(C) === !1 && (i.viewport(C.x, C.y, C.z, C.w), ee.copy(C));
  }
  function ct(C, ve) {
    let ye = d.get(ve);
    ye === void 0 && (ye = /* @__PURE__ */ new WeakMap(), d.set(ve, ye));
    let Be = ye.get(C);
    Be === void 0 && (Be = i.getUniformBlockIndex(ve, C.name), ye.set(C, Be));
  }
  function qe(C, ve) {
    const Be = d.get(ve).get(C);
    u.get(ve) !== Be && (i.uniformBlockBinding(ve, Be, C.__bindingPointIndex), u.set(ve, Be));
  }
  function fe() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), n === !0 && (i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null)), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), h = {}, Q = null, he = {}, f = {}, g = /* @__PURE__ */ new WeakMap(), _ = [], p = null, m = !1, x = null, v = null, b = null, R = null, A = null, w = null, H = null, E = new Xe(0, 0, 0), T = 0, G = !1, J = null, le = null, L = null, P = null, I = null, re.set(0, 0, i.canvas.width, i.canvas.height), ee.set(0, 0, i.canvas.width, i.canvas.height), a.reset(), l.reset(), c.reset();
  }
  return {
    buffers: {
      color: a,
      depth: l,
      stencil: c
    },
    enable: Ce,
    disable: ge,
    bindFramebuffer: Ae,
    drawBuffers: F,
    useProgram: Qe,
    setBlending: Te,
    setMaterial: lt,
    setFlipSided: ke,
    setCullFace: M,
    setLineWidth: y,
    setPolygonOffset: j,
    setScissorTest: de,
    activeTexture: ce,
    bindTexture: ue,
    unbindTexture: oe,
    compressedTexImage2D: D,
    compressedTexImage3D: k,
    texImage2D: Re,
    texImage3D: Me,
    updateUBOMapping: ct,
    uniformBlockBinding: qe,
    texStorage2D: Ee,
    texStorage3D: Pe,
    texSubImage2D: ie,
    texSubImage3D: Se,
    compressedTexSubImage2D: $,
    compressedTexSubImage3D: xe,
    scissor: Ge,
    viewport: it,
    reset: fe
  };
}
function dy(i, e, t, n, s, r, o) {
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
    ) : rr("canvas");
  }
  function _(M, y, j, de) {
    let ce = 1;
    if ((M.width > de || M.height > de) && (ce = de / Math.max(M.width, M.height)), ce < 1 || y === !0)
      if (typeof HTMLImageElement < "u" && M instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && M instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && M instanceof ImageBitmap) {
        const ue = y ? fo : Math.floor, oe = ue(ce * M.width), D = ue(ce * M.height);
        d === void 0 && (d = g(oe, D));
        const k = j ? g(oe, D) : d;
        return k.width = oe, k.height = D, k.getContext("2d").drawImage(M, 0, 0, oe, D), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + M.width + "x" + M.height + ") to (" + oe + "x" + D + ")."), k;
      } else
        return "data" in M && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + M.width + "x" + M.height + ")."), M;
    return M;
  }
  function p(M) {
    return Na(M.width) && Na(M.height);
  }
  function m(M) {
    return a ? !1 : M.wrapS !== dn || M.wrapT !== dn || M.minFilter !== Ut && M.minFilter !== Kt;
  }
  function x(M, y) {
    return M.generateMipmaps && y && M.minFilter !== Ut && M.minFilter !== Kt;
  }
  function v(M) {
    i.generateMipmap(M);
  }
  function b(M, y, j, de, ce = !1) {
    if (a === !1) return y;
    if (M !== null) {
      if (i[M] !== void 0) return i[M];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + M + "'");
    }
    let ue = y;
    if (y === i.RED && (j === i.FLOAT && (ue = i.R32F), j === i.HALF_FLOAT && (ue = i.R16F), j === i.UNSIGNED_BYTE && (ue = i.R8)), y === i.RED_INTEGER && (j === i.UNSIGNED_BYTE && (ue = i.R8UI), j === i.UNSIGNED_SHORT && (ue = i.R16UI), j === i.UNSIGNED_INT && (ue = i.R32UI), j === i.BYTE && (ue = i.R8I), j === i.SHORT && (ue = i.R16I), j === i.INT && (ue = i.R32I)), y === i.RG && (j === i.FLOAT && (ue = i.RG32F), j === i.HALF_FLOAT && (ue = i.RG16F), j === i.UNSIGNED_BYTE && (ue = i.RG8)), y === i.RGBA) {
      const oe = ce ? lo : ft.getTransfer(de);
      j === i.FLOAT && (ue = i.RGBA32F), j === i.HALF_FLOAT && (ue = i.RGBA16F), j === i.UNSIGNED_BYTE && (ue = oe === gt ? i.SRGB8_ALPHA8 : i.RGBA8), j === i.UNSIGNED_SHORT_4_4_4_4 && (ue = i.RGBA4), j === i.UNSIGNED_SHORT_5_5_5_1 && (ue = i.RGB5_A1);
    }
    return (ue === i.R16F || ue === i.R32F || ue === i.RG16F || ue === i.RG32F || ue === i.RGBA16F || ue === i.RGBA32F) && e.get("EXT_color_buffer_float"), ue;
  }
  function R(M, y, j) {
    return x(M, j) === !0 || M.isFramebufferTexture && M.minFilter !== Ut && M.minFilter !== Kt ? Math.log2(Math.max(y.width, y.height)) + 1 : M.mipmaps !== void 0 && M.mipmaps.length > 0 ? M.mipmaps.length : M.isCompressedTexture && Array.isArray(M.image) ? y.mipmaps.length : 1;
  }
  function A(M) {
    return M === Ut || M === Pa || M === Qr ? i.NEAREST : i.LINEAR;
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
    const j = M.source, de = h.get(j);
    if (de) {
      const ce = de[y.__cacheKey];
      ce.usedTimes--, ce.usedTimes === 0 && T(M), Object.keys(de).length === 0 && h.delete(j);
    }
    n.remove(M);
  }
  function T(M) {
    const y = n.get(M);
    i.deleteTexture(y.__webglTexture);
    const j = M.source, de = h.get(j);
    delete de[y.__cacheKey], o.memory.textures--;
  }
  function G(M) {
    const y = M.texture, j = n.get(M), de = n.get(y);
    if (de.__webglTexture !== void 0 && (i.deleteTexture(de.__webglTexture), o.memory.textures--), M.depthTexture && M.depthTexture.dispose(), M.isWebGLCubeRenderTarget)
      for (let ce = 0; ce < 6; ce++) {
        if (Array.isArray(j.__webglFramebuffer[ce]))
          for (let ue = 0; ue < j.__webglFramebuffer[ce].length; ue++) i.deleteFramebuffer(j.__webglFramebuffer[ce][ue]);
        else
          i.deleteFramebuffer(j.__webglFramebuffer[ce]);
        j.__webglDepthbuffer && i.deleteRenderbuffer(j.__webglDepthbuffer[ce]);
      }
    else {
      if (Array.isArray(j.__webglFramebuffer))
        for (let ce = 0; ce < j.__webglFramebuffer.length; ce++) i.deleteFramebuffer(j.__webglFramebuffer[ce]);
      else
        i.deleteFramebuffer(j.__webglFramebuffer);
      if (j.__webglDepthbuffer && i.deleteRenderbuffer(j.__webglDepthbuffer), j.__webglMultisampledFramebuffer && i.deleteFramebuffer(j.__webglMultisampledFramebuffer), j.__webglColorRenderbuffer)
        for (let ce = 0; ce < j.__webglColorRenderbuffer.length; ce++)
          j.__webglColorRenderbuffer[ce] && i.deleteRenderbuffer(j.__webglColorRenderbuffer[ce]);
      j.__webglDepthRenderbuffer && i.deleteRenderbuffer(j.__webglDepthRenderbuffer);
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
  function L() {
    const M = J;
    return M >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + M + " texture units while this GPU supports only " + s.maxTextures), J += 1, M;
  }
  function P(M) {
    const y = [];
    return y.push(M.wrapS), y.push(M.wrapT), y.push(M.wrapR || 0), y.push(M.magFilter), y.push(M.minFilter), y.push(M.anisotropy), y.push(M.internalFormat), y.push(M.format), y.push(M.type), y.push(M.generateMipmaps), y.push(M.premultiplyAlpha), y.push(M.flipY), y.push(M.unpackAlignment), y.push(M.colorSpace), y.join();
  }
  function I(M, y) {
    const j = n.get(M);
    if (M.isVideoTexture && lt(M), M.isRenderTargetTexture === !1 && M.version > 0 && j.__version !== M.version) {
      const de = M.image;
      if (de === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (de.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        re(j, M, y);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, j.__webglTexture, i.TEXTURE0 + y);
  }
  function te(M, y) {
    const j = n.get(M);
    if (M.version > 0 && j.__version !== M.version) {
      re(j, M, y);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, j.__webglTexture, i.TEXTURE0 + y);
  }
  function V(M, y) {
    const j = n.get(M);
    if (M.version > 0 && j.__version !== M.version) {
      re(j, M, y);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, j.__webglTexture, i.TEXTURE0 + y);
  }
  function q(M, y) {
    const j = n.get(M);
    if (M.version > 0 && j.__version !== M.version) {
      ee(j, M, y);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, j.__webglTexture, i.TEXTURE0 + y);
  }
  const Y = {
    [Ms]: i.REPEAT,
    [dn]: i.CLAMP_TO_EDGE,
    [oo]: i.MIRRORED_REPEAT
  }, Q = {
    [Ut]: i.NEAREST,
    [Pa]: i.NEAREST_MIPMAP_NEAREST,
    [Qr]: i.NEAREST_MIPMAP_LINEAR,
    [Kt]: i.LINEAR,
    [cd]: i.LINEAR_MIPMAP_NEAREST,
    [zi]: i.LINEAR_MIPMAP_LINEAR
  }, he = {
    [jp]: i.NEVER,
    [Jp]: i.ALWAYS,
    [Xp]: i.LESS,
    [xd]: i.LEQUAL,
    [qp]: i.EQUAL,
    [Kp]: i.GEQUAL,
    [Yp]: i.GREATER,
    [$p]: i.NOTEQUAL
  };
  function z(M, y, j) {
    if (j ? (i.texParameteri(M, i.TEXTURE_WRAP_S, Y[y.wrapS]), i.texParameteri(M, i.TEXTURE_WRAP_T, Y[y.wrapT]), (M === i.TEXTURE_3D || M === i.TEXTURE_2D_ARRAY) && i.texParameteri(M, i.TEXTURE_WRAP_R, Y[y.wrapR]), i.texParameteri(M, i.TEXTURE_MAG_FILTER, Q[y.magFilter]), i.texParameteri(M, i.TEXTURE_MIN_FILTER, Q[y.minFilter])) : (i.texParameteri(M, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(M, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), (M === i.TEXTURE_3D || M === i.TEXTURE_2D_ARRAY) && i.texParameteri(M, i.TEXTURE_WRAP_R, i.CLAMP_TO_EDGE), (y.wrapS !== dn || y.wrapT !== dn) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), i.texParameteri(M, i.TEXTURE_MAG_FILTER, A(y.magFilter)), i.texParameteri(M, i.TEXTURE_MIN_FILTER, A(y.minFilter)), y.minFilter !== Ut && y.minFilter !== Kt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), y.compareFunction && (i.texParameteri(M, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(M, i.TEXTURE_COMPARE_FUNC, he[y.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      const de = e.get("EXT_texture_filter_anisotropic");
      if (y.magFilter === Ut || y.minFilter !== Qr && y.minFilter !== zi || y.type === Wn && e.has("OES_texture_float_linear") === !1 || a === !1 && y.type === ir && e.has("OES_texture_half_float_linear") === !1) return;
      (y.anisotropy > 1 || n.get(y).__currentAnisotropy) && (i.texParameterf(M, de.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(y.anisotropy, s.getMaxAnisotropy())), n.get(y).__currentAnisotropy = y.anisotropy);
    }
  }
  function ne(M, y) {
    let j = !1;
    M.__webglInit === void 0 && (M.__webglInit = !0, y.addEventListener("dispose", w));
    const de = y.source;
    let ce = h.get(de);
    ce === void 0 && (ce = {}, h.set(de, ce));
    const ue = P(y);
    if (ue !== M.__cacheKey) {
      ce[ue] === void 0 && (ce[ue] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, j = !0), ce[ue].usedTimes++;
      const oe = ce[M.__cacheKey];
      oe !== void 0 && (ce[M.__cacheKey].usedTimes--, oe.usedTimes === 0 && T(y)), M.__cacheKey = ue, M.__webglTexture = ce[ue].texture;
    }
    return j;
  }
  function re(M, y, j) {
    let de = i.TEXTURE_2D;
    (y.isDataArrayTexture || y.isCompressedArrayTexture) && (de = i.TEXTURE_2D_ARRAY), y.isData3DTexture && (de = i.TEXTURE_3D);
    const ce = ne(M, y), ue = y.source;
    t.bindTexture(de, M.__webglTexture, i.TEXTURE0 + j);
    const oe = n.get(ue);
    if (ue.version !== oe.__version || ce === !0) {
      t.activeTexture(i.TEXTURE0 + j);
      const D = ft.getPrimaries(ft.workingColorSpace), k = y.colorSpace === fn ? null : ft.getPrimaries(y.colorSpace), ie = y.colorSpace === fn || D === k ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, y.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, y.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, y.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ie);
      const Se = m(y) && p(y.image) === !1;
      let $ = _(y.image, Se, !1, s.maxTextureSize);
      $ = ke(y, $);
      const xe = p($) || a, Ee = r.convert(y.format, y.colorSpace);
      let Pe = r.convert(y.type), Re = b(y.internalFormat, Ee, Pe, y.colorSpace, y.isVideoTexture);
      z(de, y, xe);
      let Me;
      const Ge = y.mipmaps, it = a && y.isVideoTexture !== !0 && Re !== gd, ct = oe.__version === void 0 || ce === !0, qe = R(y, $, xe);
      if (y.isDepthTexture)
        Re = i.DEPTH_COMPONENT, a ? y.type === Wn ? Re = i.DEPTH_COMPONENT32F : y.type === di ? Re = i.DEPTH_COMPONENT24 : y.type === Fi ? Re = i.DEPTH24_STENCIL8 : Re = i.DEPTH_COMPONENT16 : y.type === Wn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), y.format === Bi && Re === i.DEPTH_COMPONENT && y.type !== tl && y.type !== di && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), y.type = di, Pe = r.convert(y.type)), y.format === As && Re === i.DEPTH_COMPONENT && (Re = i.DEPTH_STENCIL, y.type !== Fi && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), y.type = Fi, Pe = r.convert(y.type))), ct && (it ? t.texStorage2D(i.TEXTURE_2D, 1, Re, $.width, $.height) : t.texImage2D(i.TEXTURE_2D, 0, Re, $.width, $.height, 0, Ee, Pe, null));
      else if (y.isDataTexture)
        if (Ge.length > 0 && xe) {
          it && ct && t.texStorage2D(i.TEXTURE_2D, qe, Re, Ge[0].width, Ge[0].height);
          for (let fe = 0, C = Ge.length; fe < C; fe++)
            Me = Ge[fe], it ? t.texSubImage2D(i.TEXTURE_2D, fe, 0, 0, Me.width, Me.height, Ee, Pe, Me.data) : t.texImage2D(i.TEXTURE_2D, fe, Re, Me.width, Me.height, 0, Ee, Pe, Me.data);
          y.generateMipmaps = !1;
        } else
          it ? (ct && t.texStorage2D(i.TEXTURE_2D, qe, Re, $.width, $.height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, $.width, $.height, Ee, Pe, $.data)) : t.texImage2D(i.TEXTURE_2D, 0, Re, $.width, $.height, 0, Ee, Pe, $.data);
      else if (y.isCompressedTexture)
        if (y.isCompressedArrayTexture) {
          it && ct && t.texStorage3D(i.TEXTURE_2D_ARRAY, qe, Re, Ge[0].width, Ge[0].height, $.depth);
          for (let fe = 0, C = Ge.length; fe < C; fe++)
            Me = Ge[fe], y.format !== hn ? Ee !== null ? it ? t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, fe, 0, 0, 0, Me.width, Me.height, $.depth, Ee, Me.data, 0, 0) : t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, fe, Re, Me.width, Me.height, $.depth, 0, Me.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : it ? t.texSubImage3D(i.TEXTURE_2D_ARRAY, fe, 0, 0, 0, Me.width, Me.height, $.depth, Ee, Pe, Me.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, fe, Re, Me.width, Me.height, $.depth, 0, Ee, Pe, Me.data);
        } else {
          it && ct && t.texStorage2D(i.TEXTURE_2D, qe, Re, Ge[0].width, Ge[0].height);
          for (let fe = 0, C = Ge.length; fe < C; fe++)
            Me = Ge[fe], y.format !== hn ? Ee !== null ? it ? t.compressedTexSubImage2D(i.TEXTURE_2D, fe, 0, 0, Me.width, Me.height, Ee, Me.data) : t.compressedTexImage2D(i.TEXTURE_2D, fe, Re, Me.width, Me.height, 0, Me.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : it ? t.texSubImage2D(i.TEXTURE_2D, fe, 0, 0, Me.width, Me.height, Ee, Pe, Me.data) : t.texImage2D(i.TEXTURE_2D, fe, Re, Me.width, Me.height, 0, Ee, Pe, Me.data);
        }
      else if (y.isDataArrayTexture)
        it ? (ct && t.texStorage3D(i.TEXTURE_2D_ARRAY, qe, Re, $.width, $.height, $.depth), t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, $.width, $.height, $.depth, Ee, Pe, $.data)) : t.texImage3D(i.TEXTURE_2D_ARRAY, 0, Re, $.width, $.height, $.depth, 0, Ee, Pe, $.data);
      else if (y.isData3DTexture)
        it ? (ct && t.texStorage3D(i.TEXTURE_3D, qe, Re, $.width, $.height, $.depth), t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, $.width, $.height, $.depth, Ee, Pe, $.data)) : t.texImage3D(i.TEXTURE_3D, 0, Re, $.width, $.height, $.depth, 0, Ee, Pe, $.data);
      else if (y.isFramebufferTexture) {
        if (ct)
          if (it)
            t.texStorage2D(i.TEXTURE_2D, qe, Re, $.width, $.height);
          else {
            let fe = $.width, C = $.height;
            for (let ve = 0; ve < qe; ve++)
              t.texImage2D(i.TEXTURE_2D, ve, Re, fe, C, 0, Ee, Pe, null), fe >>= 1, C >>= 1;
          }
      } else if (Ge.length > 0 && xe) {
        it && ct && t.texStorage2D(i.TEXTURE_2D, qe, Re, Ge[0].width, Ge[0].height);
        for (let fe = 0, C = Ge.length; fe < C; fe++)
          Me = Ge[fe], it ? t.texSubImage2D(i.TEXTURE_2D, fe, 0, 0, Ee, Pe, Me) : t.texImage2D(i.TEXTURE_2D, fe, Re, Ee, Pe, Me);
        y.generateMipmaps = !1;
      } else
        it ? (ct && t.texStorage2D(i.TEXTURE_2D, qe, Re, $.width, $.height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, Ee, Pe, $)) : t.texImage2D(i.TEXTURE_2D, 0, Re, Ee, Pe, $);
      x(y, xe) && v(de), oe.__version = ue.version, y.onUpdate && y.onUpdate(y);
    }
    M.__version = y.version;
  }
  function ee(M, y, j) {
    if (y.image.length !== 6) return;
    const de = ne(M, y), ce = y.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, M.__webglTexture, i.TEXTURE0 + j);
    const ue = n.get(ce);
    if (ce.version !== ue.__version || de === !0) {
      t.activeTexture(i.TEXTURE0 + j);
      const oe = ft.getPrimaries(ft.workingColorSpace), D = y.colorSpace === fn ? null : ft.getPrimaries(y.colorSpace), k = y.colorSpace === fn || oe === D ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, y.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, y.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, y.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, k);
      const ie = y.isCompressedTexture || y.image[0].isCompressedTexture, Se = y.image[0] && y.image[0].isDataTexture, $ = [];
      for (let fe = 0; fe < 6; fe++)
        !ie && !Se ? $[fe] = _(y.image[fe], !1, !0, s.maxCubemapSize) : $[fe] = Se ? y.image[fe].image : y.image[fe], $[fe] = ke(y, $[fe]);
      const xe = $[0], Ee = p(xe) || a, Pe = r.convert(y.format, y.colorSpace), Re = r.convert(y.type), Me = b(y.internalFormat, Pe, Re, y.colorSpace), Ge = a && y.isVideoTexture !== !0, it = ue.__version === void 0 || de === !0;
      let ct = R(y, xe, Ee);
      z(i.TEXTURE_CUBE_MAP, y, Ee);
      let qe;
      if (ie) {
        Ge && it && t.texStorage2D(i.TEXTURE_CUBE_MAP, ct, Me, xe.width, xe.height);
        for (let fe = 0; fe < 6; fe++) {
          qe = $[fe].mipmaps;
          for (let C = 0; C < qe.length; C++) {
            const ve = qe[C];
            y.format !== hn ? Pe !== null ? Ge ? t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + fe, C, 0, 0, ve.width, ve.height, Pe, ve.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + fe, C, Me, ve.width, ve.height, 0, ve.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ge ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + fe, C, 0, 0, ve.width, ve.height, Pe, Re, ve.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + fe, C, Me, ve.width, ve.height, 0, Pe, Re, ve.data);
          }
        }
      } else {
        qe = y.mipmaps, Ge && it && (qe.length > 0 && ct++, t.texStorage2D(i.TEXTURE_CUBE_MAP, ct, Me, $[0].width, $[0].height));
        for (let fe = 0; fe < 6; fe++)
          if (Se) {
            Ge ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + fe, 0, 0, 0, $[fe].width, $[fe].height, Pe, Re, $[fe].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + fe, 0, Me, $[fe].width, $[fe].height, 0, Pe, Re, $[fe].data);
            for (let C = 0; C < qe.length; C++) {
              const ye = qe[C].image[fe].image;
              Ge ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + fe, C + 1, 0, 0, ye.width, ye.height, Pe, Re, ye.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + fe, C + 1, Me, ye.width, ye.height, 0, Pe, Re, ye.data);
            }
          } else {
            Ge ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + fe, 0, 0, 0, Pe, Re, $[fe]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + fe, 0, Me, Pe, Re, $[fe]);
            for (let C = 0; C < qe.length; C++) {
              const ve = qe[C];
              Ge ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + fe, C + 1, 0, 0, Pe, Re, ve.image[fe]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + fe, C + 1, Me, Pe, Re, ve.image[fe]);
            }
          }
      }
      x(y, Ee) && v(i.TEXTURE_CUBE_MAP), ue.__version = ce.version, y.onUpdate && y.onUpdate(y);
    }
    M.__version = y.version;
  }
  function ae(M, y, j, de, ce, ue) {
    const oe = r.convert(j.format, j.colorSpace), D = r.convert(j.type), k = b(j.internalFormat, oe, D, j.colorSpace);
    if (!n.get(y).__hasExternalTextures) {
      const Se = Math.max(1, y.width >> ue), $ = Math.max(1, y.height >> ue);
      ce === i.TEXTURE_3D || ce === i.TEXTURE_2D_ARRAY ? t.texImage3D(ce, ue, k, Se, $, y.depth, 0, oe, D, null) : t.texImage2D(ce, ue, k, Se, $, 0, oe, D, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, M), Te(y) ? l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, de, ce, n.get(j).__webglTexture, 0, Ue(y)) : (ce === i.TEXTURE_2D || ce >= i.TEXTURE_CUBE_MAP_POSITIVE_X && ce <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, de, ce, n.get(j).__webglTexture, ue), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function we(M, y, j) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, M), y.depthBuffer && !y.stencilBuffer) {
      let de = a === !0 ? i.DEPTH_COMPONENT24 : i.DEPTH_COMPONENT16;
      if (j || Te(y)) {
        const ce = y.depthTexture;
        ce && ce.isDepthTexture && (ce.type === Wn ? de = i.DEPTH_COMPONENT32F : ce.type === di && (de = i.DEPTH_COMPONENT24));
        const ue = Ue(y);
        Te(y) ? l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ue, de, y.width, y.height) : i.renderbufferStorageMultisample(i.RENDERBUFFER, ue, de, y.width, y.height);
      } else
        i.renderbufferStorage(i.RENDERBUFFER, de, y.width, y.height);
      i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, M);
    } else if (y.depthBuffer && y.stencilBuffer) {
      const de = Ue(y);
      j && Te(y) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, de, i.DEPTH24_STENCIL8, y.width, y.height) : Te(y) ? l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, de, i.DEPTH24_STENCIL8, y.width, y.height) : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, y.width, y.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, M);
    } else {
      const de = y.isWebGLMultipleRenderTargets === !0 ? y.texture : [y.texture];
      for (let ce = 0; ce < de.length; ce++) {
        const ue = de[ce], oe = r.convert(ue.format, ue.colorSpace), D = r.convert(ue.type), k = b(ue.internalFormat, oe, D, ue.colorSpace), ie = Ue(y);
        j && Te(y) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, ie, k, y.width, y.height) : Te(y) ? l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ie, k, y.width, y.height) : i.renderbufferStorage(i.RENDERBUFFER, k, y.width, y.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function Ce(M, y) {
    if (y && y.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, M), !(y.depthTexture && y.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(y.depthTexture).__webglTexture || y.depthTexture.image.width !== y.width || y.depthTexture.image.height !== y.height) && (y.depthTexture.image.width = y.width, y.depthTexture.image.height = y.height, y.depthTexture.needsUpdate = !0), I(y.depthTexture, 0);
    const de = n.get(y.depthTexture).__webglTexture, ce = Ue(y);
    if (y.depthTexture.format === Bi)
      Te(y) ? l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, de, 0, ce) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, de, 0);
    else if (y.depthTexture.format === As)
      Te(y) ? l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, de, 0, ce) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, de, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function ge(M) {
    const y = n.get(M), j = M.isWebGLCubeRenderTarget === !0;
    if (M.depthTexture && !y.__autoAllocateDepthBuffer) {
      if (j) throw new Error("target.depthTexture not supported in Cube render targets");
      Ce(y.__webglFramebuffer, M);
    } else if (j) {
      y.__webglDepthbuffer = [];
      for (let de = 0; de < 6; de++)
        t.bindFramebuffer(i.FRAMEBUFFER, y.__webglFramebuffer[de]), y.__webglDepthbuffer[de] = i.createRenderbuffer(), we(y.__webglDepthbuffer[de], M, !1);
    } else
      t.bindFramebuffer(i.FRAMEBUFFER, y.__webglFramebuffer), y.__webglDepthbuffer = i.createRenderbuffer(), we(y.__webglDepthbuffer, M, !1);
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Ae(M, y, j) {
    const de = n.get(M);
    y !== void 0 && ae(de.__webglFramebuffer, M, M.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), j !== void 0 && ge(M);
  }
  function F(M) {
    const y = M.texture, j = n.get(M), de = n.get(y);
    M.addEventListener("dispose", H), M.isWebGLMultipleRenderTargets !== !0 && (de.__webglTexture === void 0 && (de.__webglTexture = i.createTexture()), de.__version = y.version, o.memory.textures++);
    const ce = M.isWebGLCubeRenderTarget === !0, ue = M.isWebGLMultipleRenderTargets === !0, oe = p(M) || a;
    if (ce) {
      j.__webglFramebuffer = [];
      for (let D = 0; D < 6; D++)
        if (a && y.mipmaps && y.mipmaps.length > 0) {
          j.__webglFramebuffer[D] = [];
          for (let k = 0; k < y.mipmaps.length; k++)
            j.__webglFramebuffer[D][k] = i.createFramebuffer();
        } else
          j.__webglFramebuffer[D] = i.createFramebuffer();
    } else {
      if (a && y.mipmaps && y.mipmaps.length > 0) {
        j.__webglFramebuffer = [];
        for (let D = 0; D < y.mipmaps.length; D++)
          j.__webglFramebuffer[D] = i.createFramebuffer();
      } else
        j.__webglFramebuffer = i.createFramebuffer();
      if (ue)
        if (s.drawBuffers) {
          const D = M.texture;
          for (let k = 0, ie = D.length; k < ie; k++) {
            const Se = n.get(D[k]);
            Se.__webglTexture === void 0 && (Se.__webglTexture = i.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && M.samples > 0 && Te(M) === !1) {
        const D = ue ? y : [y];
        j.__webglMultisampledFramebuffer = i.createFramebuffer(), j.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, j.__webglMultisampledFramebuffer);
        for (let k = 0; k < D.length; k++) {
          const ie = D[k];
          j.__webglColorRenderbuffer[k] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, j.__webglColorRenderbuffer[k]);
          const Se = r.convert(ie.format, ie.colorSpace), $ = r.convert(ie.type), xe = b(ie.internalFormat, Se, $, ie.colorSpace, M.isXRRenderTarget === !0), Ee = Ue(M);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, Ee, xe, M.width, M.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + k, i.RENDERBUFFER, j.__webglColorRenderbuffer[k]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), M.depthBuffer && (j.__webglDepthRenderbuffer = i.createRenderbuffer(), we(j.__webglDepthRenderbuffer, M, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (ce) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, de.__webglTexture), z(i.TEXTURE_CUBE_MAP, y, oe);
      for (let D = 0; D < 6; D++)
        if (a && y.mipmaps && y.mipmaps.length > 0)
          for (let k = 0; k < y.mipmaps.length; k++)
            ae(j.__webglFramebuffer[D][k], M, y, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + D, k);
        else
          ae(j.__webglFramebuffer[D], M, y, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + D, 0);
      x(y, oe) && v(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ue) {
      const D = M.texture;
      for (let k = 0, ie = D.length; k < ie; k++) {
        const Se = D[k], $ = n.get(Se);
        t.bindTexture(i.TEXTURE_2D, $.__webglTexture), z(i.TEXTURE_2D, Se, oe), ae(j.__webglFramebuffer, M, Se, i.COLOR_ATTACHMENT0 + k, i.TEXTURE_2D, 0), x(Se, oe) && v(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let D = i.TEXTURE_2D;
      if ((M.isWebGL3DRenderTarget || M.isWebGLArrayRenderTarget) && (a ? D = M.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(D, de.__webglTexture), z(D, y, oe), a && y.mipmaps && y.mipmaps.length > 0)
        for (let k = 0; k < y.mipmaps.length; k++)
          ae(j.__webglFramebuffer[k], M, y, i.COLOR_ATTACHMENT0, D, k);
      else
        ae(j.__webglFramebuffer, M, y, i.COLOR_ATTACHMENT0, D, 0);
      x(y, oe) && v(D), t.unbindTexture();
    }
    M.depthBuffer && ge(M);
  }
  function Qe(M) {
    const y = p(M) || a, j = M.isWebGLMultipleRenderTargets === !0 ? M.texture : [M.texture];
    for (let de = 0, ce = j.length; de < ce; de++) {
      const ue = j[de];
      if (x(ue, y)) {
        const oe = M.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D, D = n.get(ue).__webglTexture;
        t.bindTexture(oe, D), v(oe), t.unbindTexture();
      }
    }
  }
  function Le(M) {
    if (a && M.samples > 0 && Te(M) === !1) {
      const y = M.isWebGLMultipleRenderTargets ? M.texture : [M.texture], j = M.width, de = M.height;
      let ce = i.COLOR_BUFFER_BIT;
      const ue = [], oe = M.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, D = n.get(M), k = M.isWebGLMultipleRenderTargets === !0;
      if (k)
        for (let ie = 0; ie < y.length; ie++)
          t.bindFramebuffer(i.FRAMEBUFFER, D.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ie, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, D.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ie, i.TEXTURE_2D, null, 0);
      t.bindFramebuffer(i.READ_FRAMEBUFFER, D.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, D.__webglFramebuffer);
      for (let ie = 0; ie < y.length; ie++) {
        ue.push(i.COLOR_ATTACHMENT0 + ie), M.depthBuffer && ue.push(oe);
        const Se = D.__ignoreDepthValues !== void 0 ? D.__ignoreDepthValues : !1;
        if (Se === !1 && (M.depthBuffer && (ce |= i.DEPTH_BUFFER_BIT), M.stencilBuffer && (ce |= i.STENCIL_BUFFER_BIT)), k && i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, D.__webglColorRenderbuffer[ie]), Se === !0 && (i.invalidateFramebuffer(i.READ_FRAMEBUFFER, [oe]), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [oe])), k) {
          const $ = n.get(y[ie]).__webglTexture;
          i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, $, 0);
        }
        i.blitFramebuffer(0, 0, j, de, 0, 0, j, de, ce, i.NEAREST), c && i.invalidateFramebuffer(i.READ_FRAMEBUFFER, ue);
      }
      if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), k)
        for (let ie = 0; ie < y.length; ie++) {
          t.bindFramebuffer(i.FRAMEBUFFER, D.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ie, i.RENDERBUFFER, D.__webglColorRenderbuffer[ie]);
          const Se = n.get(y[ie]).__webglTexture;
          t.bindFramebuffer(i.FRAMEBUFFER, D.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ie, i.TEXTURE_2D, Se, 0);
        }
      t.bindFramebuffer(i.DRAW_FRAMEBUFFER, D.__webglMultisampledFramebuffer);
    }
  }
  function Ue(M) {
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
  function ke(M, y) {
    const j = M.colorSpace, de = M.format, ce = M.type;
    return M.isCompressedTexture === !0 || M.isVideoTexture === !0 || M.format === Ua || j !== Nt && j !== fn && (ft.getTransfer(j) === gt ? a === !1 ? e.has("EXT_sRGB") === !0 && de === hn ? (M.format = Ua, M.minFilter = Kt, M.generateMipmaps = !1) : y = Sd.sRGBToLinear(y) : (de !== hn || ce !== mi) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", j)), y;
  }
  this.allocateTextureUnit = L, this.resetTextureUnits = le, this.setTexture2D = I, this.setTexture2DArray = te, this.setTexture3D = V, this.setTextureCube = q, this.rebindTextures = Ae, this.setupRenderTarget = F, this.updateRenderTargetMipmap = Qe, this.updateMultisampleRenderTarget = Le, this.setupDepthRenderbuffer = ge, this.setupFrameBufferTexture = ae, this.useMultisampledRTT = Te;
}
function hy(i, e, t) {
  const n = t.isWebGL2;
  function s(r, o = fn) {
    let a;
    const l = ft.getTransfer(o);
    if (r === mi) return i.UNSIGNED_BYTE;
    if (r === dd) return i.UNSIGNED_SHORT_4_4_4_4;
    if (r === hd) return i.UNSIGNED_SHORT_5_5_5_1;
    if (r === Cp) return i.BYTE;
    if (r === Lp) return i.SHORT;
    if (r === tl) return i.UNSIGNED_SHORT;
    if (r === ud) return i.INT;
    if (r === di) return i.UNSIGNED_INT;
    if (r === Wn) return i.FLOAT;
    if (r === ir)
      return n ? i.HALF_FLOAT : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (r === Pp) return i.ALPHA;
    if (r === hn) return i.RGBA;
    if (r === Ip) return i.LUMINANCE;
    if (r === Dp) return i.LUMINANCE_ALPHA;
    if (r === Bi) return i.DEPTH_COMPONENT;
    if (r === As) return i.DEPTH_STENCIL;
    if (r === Ua)
      return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (r === Up) return i.RED;
    if (r === fd) return i.RED_INTEGER;
    if (r === Np) return i.RG;
    if (r === pd) return i.RG_INTEGER;
    if (r === md) return i.RGBA_INTEGER;
    if (r === Fo || r === Bo || r === Vo || r === ko)
      if (l === gt)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (r === Fo) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (r === Bo) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (r === Vo) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (r === ko) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (r === Fo) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (r === Bo) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (r === Vo) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (r === ko) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (r === zl || r === Hl || r === Gl || r === Wl)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (r === zl) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (r === Hl) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (r === Gl) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (r === Wl) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (r === gd)
      return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (r === jl || r === Xl)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (r === jl) return l === gt ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (r === Xl) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (r === ql || r === Yl || r === $l || r === Kl || r === Jl || r === Zl || r === Ql || r === ec || r === tc || r === nc || r === ic || r === sc || r === rc || r === oc)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (r === ql) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (r === Yl) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (r === $l) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (r === Kl) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (r === Jl) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (r === Zl) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (r === Ql) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (r === ec) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (r === tc) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (r === nc) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (r === ic) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (r === sc) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (r === rc) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (r === oc) return l === gt ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (r === zo || r === ac || r === lc)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (r === zo) return l === gt ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (r === ac) return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (r === lc) return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (r === Op || r === cc || r === uc || r === dc)
      if (a = e.get("EXT_texture_compression_rgtc"), a !== null) {
        if (r === zo) return a.COMPRESSED_RED_RGTC1_EXT;
        if (r === cc) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (r === uc) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (r === dc) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return r === Fi ? n ? i.UNSIGNED_INT_24_8 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : i[r] !== void 0 ? i[r] : null;
  }
  return { convert: s };
}
class fy extends Xt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Ui extends St {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const py = { type: "move" };
class da {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Ui(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Ui(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new N(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new N()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Ui(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new N(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new N()), this._grip;
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
      a !== null && (s = t.getPose(e.targetRaySpace, n), s === null && r !== null && (s = r), s !== null && (a.matrix.fromArray(s.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(s.linearVelocity)) : a.hasLinearVelocity = !1, s.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(s.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(py)));
    }
    return a !== null && (a.visible = s !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = o !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Ui();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class my extends Xi {
  constructor(e, t) {
    super();
    const n = this;
    let s = null, r = 1, o = null, a = "local-floor", l = 1, c = null, u = null, d = null, h = null, f = null, g = null;
    const _ = t.getContextAttributes();
    let p = null, m = null;
    const x = [], v = [], b = new ot();
    let R = null;
    const A = new Xt();
    A.layers.enable(1), A.viewport = new mt();
    const w = new Xt();
    w.layers.enable(2), w.viewport = new mt();
    const H = [A, w], E = new fy();
    E.layers.enable(1), E.layers.enable(2);
    let T = null, G = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(z) {
      let ne = x[z];
      return ne === void 0 && (ne = new da(), x[z] = ne), ne.getTargetRaySpace();
    }, this.getControllerGrip = function(z) {
      let ne = x[z];
      return ne === void 0 && (ne = new da(), x[z] = ne), ne.getGripSpace();
    }, this.getHand = function(z) {
      let ne = x[z];
      return ne === void 0 && (ne = new da(), x[z] = ne), ne.getHandSpace();
    };
    function J(z) {
      const ne = v.indexOf(z.inputSource);
      if (ne === -1)
        return;
      const re = x[ne];
      re !== void 0 && (re.update(z.inputSource, z.frame, c || o), re.dispatchEvent({ type: z.type, data: z.inputSource }));
    }
    function le() {
      s.removeEventListener("select", J), s.removeEventListener("selectstart", J), s.removeEventListener("selectend", J), s.removeEventListener("squeeze", J), s.removeEventListener("squeezestart", J), s.removeEventListener("squeezeend", J), s.removeEventListener("end", le), s.removeEventListener("inputsourceschange", L);
      for (let z = 0; z < x.length; z++) {
        const ne = v[z];
        ne !== null && (v[z] = null, x[z].disconnect(ne));
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
        if (p = e.getRenderTarget(), s.addEventListener("select", J), s.addEventListener("selectstart", J), s.addEventListener("selectend", J), s.addEventListener("squeeze", J), s.addEventListener("squeezestart", J), s.addEventListener("squeezeend", J), s.addEventListener("end", le), s.addEventListener("inputsourceschange", L), _.xrCompatible !== !0 && await t.makeXRCompatible(), R = e.getPixelRatio(), e.getSize(b), s.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const ne = {
            antialias: s.renderState.layers === void 0 ? _.antialias : !0,
            alpha: !0,
            depth: _.depth,
            stencil: _.stencil,
            framebufferScaleFactor: r
          };
          f = new XRWebGLLayer(s, t, ne), s.updateRenderState({ baseLayer: f }), e.setPixelRatio(1), e.setSize(f.framebufferWidth, f.framebufferHeight, !1), m = new Hi(
            f.framebufferWidth,
            f.framebufferHeight,
            {
              format: hn,
              type: mi,
              colorSpace: e.outputColorSpace,
              stencilBuffer: _.stencil
            }
          );
        } else {
          let ne = null, re = null, ee = null;
          _.depth && (ee = _.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ne = _.stencil ? As : Bi, re = _.stencil ? Fi : di);
          const ae = {
            colorFormat: t.RGBA8,
            depthFormat: ee,
            scaleFactor: r
          };
          d = new XRWebGLBinding(s, t), h = d.createProjectionLayer(ae), s.updateRenderState({ layers: [h] }), e.setPixelRatio(1), e.setSize(h.textureWidth, h.textureHeight, !1), m = new Hi(
            h.textureWidth,
            h.textureHeight,
            {
              format: hn,
              type: mi,
              depthTexture: new Dd(h.textureWidth, h.textureHeight, re, void 0, void 0, void 0, void 0, void 0, void 0, ne),
              stencilBuffer: _.stencil,
              colorSpace: e.outputColorSpace,
              samples: _.antialias ? 4 : 0
            }
          );
          const we = e.properties.get(m);
          we.__ignoreDepthValues = h.ignoreDepthValues;
        }
        m.isXRRenderTarget = !0, this.setFoveation(l), c = null, o = await s.requestReferenceSpace(a), he.setContext(s), he.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (s !== null)
        return s.environmentBlendMode;
    };
    function L(z) {
      for (let ne = 0; ne < z.removed.length; ne++) {
        const re = z.removed[ne], ee = v.indexOf(re);
        ee >= 0 && (v[ee] = null, x[ee].disconnect(re));
      }
      for (let ne = 0; ne < z.added.length; ne++) {
        const re = z.added[ne];
        let ee = v.indexOf(re);
        if (ee === -1) {
          for (let we = 0; we < x.length; we++)
            if (we >= v.length) {
              v.push(re), ee = we;
              break;
            } else if (v[we] === null) {
              v[we] = re, ee = we;
              break;
            }
          if (ee === -1) break;
        }
        const ae = x[ee];
        ae && ae.connect(re);
      }
    }
    const P = new N(), I = new N();
    function te(z, ne, re) {
      P.setFromMatrixPosition(ne.matrixWorld), I.setFromMatrixPosition(re.matrixWorld);
      const ee = P.distanceTo(I), ae = ne.projectionMatrix.elements, we = re.projectionMatrix.elements, Ce = ae[14] / (ae[10] - 1), ge = ae[14] / (ae[10] + 1), Ae = (ae[9] + 1) / ae[5], F = (ae[9] - 1) / ae[5], Qe = (ae[8] - 1) / ae[0], Le = (we[8] + 1) / we[0], Ue = Ce * Qe, Te = Ce * Le, lt = ee / (-Qe + Le), ke = lt * -Qe;
      ne.matrixWorld.decompose(z.position, z.quaternion, z.scale), z.translateX(ke), z.translateZ(lt), z.matrixWorld.compose(z.position, z.quaternion, z.scale), z.matrixWorldInverse.copy(z.matrixWorld).invert();
      const M = Ce + lt, y = ge + lt, j = Ue - ke, de = Te + (ee - ke), ce = Ae * ge / y * M, ue = F * ge / y * M;
      z.projectionMatrix.makePerspective(j, de, ce, ue, M, y), z.projectionMatrixInverse.copy(z.projectionMatrix).invert();
    }
    function V(z, ne) {
      ne === null ? z.matrixWorld.copy(z.matrix) : z.matrixWorld.multiplyMatrices(ne.matrixWorld, z.matrix), z.matrixWorldInverse.copy(z.matrixWorld).invert();
    }
    this.updateCamera = function(z) {
      if (s === null) return;
      E.near = w.near = A.near = z.near, E.far = w.far = A.far = z.far, (T !== E.near || G !== E.far) && (s.updateRenderState({
        depthNear: E.near,
        depthFar: E.far
      }), T = E.near, G = E.far);
      const ne = z.parent, re = E.cameras;
      V(E, ne);
      for (let ee = 0; ee < re.length; ee++)
        V(re[ee], ne);
      re.length === 2 ? te(E, A, w) : E.projectionMatrix.copy(A.projectionMatrix), q(z, E, ne);
    };
    function q(z, ne, re) {
      re === null ? z.matrix.copy(ne.matrixWorld) : (z.matrix.copy(re.matrixWorld), z.matrix.invert(), z.matrix.multiply(ne.matrixWorld)), z.matrix.decompose(z.position, z.quaternion, z.scale), z.updateMatrixWorld(!0), z.projectionMatrix.copy(ne.projectionMatrix), z.projectionMatrixInverse.copy(ne.projectionMatrixInverse), z.isPerspectiveCamera && (z.fov = bs * 2 * Math.atan(1 / z.projectionMatrix.elements[5]), z.zoom = 1);
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
    function Q(z, ne) {
      if (u = ne.getViewerPose(c || o), g = ne, u !== null) {
        const re = u.views;
        f !== null && (e.setRenderTargetFramebuffer(m, f.framebuffer), e.setRenderTarget(m));
        let ee = !1;
        re.length !== E.cameras.length && (E.cameras.length = 0, ee = !0);
        for (let ae = 0; ae < re.length; ae++) {
          const we = re[ae];
          let Ce = null;
          if (f !== null)
            Ce = f.getViewport(we);
          else {
            const Ae = d.getViewSubImage(h, we);
            Ce = Ae.viewport, ae === 0 && (e.setRenderTargetTextures(
              m,
              Ae.colorTexture,
              h.ignoreDepthValues ? void 0 : Ae.depthStencilTexture
            ), e.setRenderTarget(m));
          }
          let ge = H[ae];
          ge === void 0 && (ge = new Xt(), ge.layers.enable(ae), ge.viewport = new mt(), H[ae] = ge), ge.matrix.fromArray(we.transform.matrix), ge.matrix.decompose(ge.position, ge.quaternion, ge.scale), ge.projectionMatrix.fromArray(we.projectionMatrix), ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(), ge.viewport.set(Ce.x, Ce.y, Ce.width, Ce.height), ae === 0 && (E.matrix.copy(ge.matrix), E.matrix.decompose(E.position, E.quaternion, E.scale)), ee === !0 && E.cameras.push(ge);
        }
      }
      for (let re = 0; re < x.length; re++) {
        const ee = v[re], ae = x[re];
        ee !== null && ae !== void 0 && ae.update(ee, ne, c || o);
      }
      Y && Y(z, ne), ne.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: ne }), g = null;
    }
    const he = new Id();
    he.setAnimationLoop(Q), this.setAnimationLoop = function(z) {
      Y = z;
    }, this.dispose = function() {
    };
  }
}
function gy(i, e) {
  function t(p, m) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), m.value.copy(p.matrix);
  }
  function n(p, m) {
    m.color.getRGB(p.fogColor.value, Cd(i)), m.isFog ? (p.fogNear.value = m.near, p.fogFar.value = m.far) : m.isFogExp2 && (p.fogDensity.value = m.density);
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
function _y(i, e, t, n) {
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
          let L = 0;
          for (let P = 0; P < le.length; P++) {
            const I = le[P], te = _(I);
            typeof I == "number" || typeof I == "boolean" ? (G.__data[0] = I, i.bufferSubData(i.UNIFORM_BUFFER, J + L, G.__data)) : I.isMatrix3 ? (G.__data[0] = I.elements[0], G.__data[1] = I.elements[1], G.__data[2] = I.elements[2], G.__data[3] = 0, G.__data[4] = I.elements[3], G.__data[5] = I.elements[4], G.__data[6] = I.elements[5], G.__data[7] = 0, G.__data[8] = I.elements[6], G.__data[9] = I.elements[7], G.__data[10] = I.elements[8], G.__data[11] = 0) : (I.toArray(G.__data, L), L += te.storage / Float32Array.BYTES_PER_ELEMENT);
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
        for (let L = 0, P = le.length; L < P; L++) {
          const I = le[L], te = _(I), V = b % R;
          V !== 0 && R - V < te.boundary && (b += R - V), J.__data = new Float32Array(te.storage / Float32Array.BYTES_PER_ELEMENT), J.__offset = b, b += te.storage;
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
class Vd {
  constructor(e = {}) {
    const {
      canvas: t = fm(),
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
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = Et, this._useLegacyLights = !1, this.toneMapping = pi, this.toneMappingExposure = 1;
    const v = this;
    let b = !1, R = 0, A = 0, w = null, H = -1, E = null;
    const T = new mt(), G = new mt();
    let J = null;
    const le = new Xe(0);
    let L = 0, P = t.width, I = t.height, te = 1, V = null, q = null;
    const Y = new mt(0, 0, P, I), Q = new mt(0, 0, P, I);
    let he = !1;
    const z = new rl();
    let ne = !1, re = !1, ee = null;
    const ae = new nt(), we = new ot(), Ce = new N(), ge = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function Ae() {
      return w === null ? te : 1;
    }
    let F = n;
    function Qe(S, O) {
      for (let W = 0; W < S.length; W++) {
        const K = S[W], B = t.getContext(K, O);
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
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${el}`), t.addEventListener("webglcontextlost", fe, !1), t.addEventListener("webglcontextrestored", C, !1), t.addEventListener("webglcontextcreationerror", ve, !1), F === null) {
        const O = ["webgl2", "webgl", "experimental-webgl"];
        if (v.isWebGL1Renderer === !0 && O.shift(), F = Qe(O, S), F === null)
          throw Qe(O) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && F instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), F.getShaderPrecisionFormat === void 0 && (F.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (S) {
      throw console.error("THREE.WebGLRenderer: " + S.message), S;
    }
    let Le, Ue, Te, lt, ke, M, y, j, de, ce, ue, oe, D, k, ie, Se, $, xe, Ee, Pe, Re, Me, Ge, it;
    function ct() {
      Le = new wv(F), Ue = new Ev(F, Le, e), Le.init(Ue), Me = new hy(F, Le, Ue), Te = new uy(F, Le, Ue), lt = new Lv(F), ke = new K0(), M = new dy(F, Le, Te, ke, Ue, Me, lt), y = new Mv(v), j = new bv(v), de = new Bm(F, Ue), Ge = new yv(F, Le, de, Ue), ce = new Rv(F, de, lt, Ge), ue = new Uv(F, ce, de, lt), Ee = new Dv(F, Ue, M), Se = new Sv(ke), oe = new $0(v, y, j, Le, Ue, Ge, Se), D = new gy(v, ke), k = new Z0(), ie = new sy(Le, Ue), xe = new vv(v, y, j, Te, ue, h, l), $ = new cy(v, ue, Ue), it = new _y(F, lt, Ue, Te), Pe = new xv(F, Le, lt, Ue), Re = new Cv(F, Le, lt, Ue), lt.programs = oe.programs, v.capabilities = Ue, v.extensions = Le, v.properties = ke, v.renderLists = k, v.shadowMap = $, v.state = Te, v.info = lt;
    }
    ct();
    const qe = new my(v, F);
    this.xr = qe, this.getContext = function() {
      return F;
    }, this.getContextAttributes = function() {
      return F.getContextAttributes();
    }, this.forceContextLoss = function() {
      const S = Le.get("WEBGL_lose_context");
      S && S.loseContext();
    }, this.forceContextRestore = function() {
      const S = Le.get("WEBGL_lose_context");
      S && S.restoreContext();
    }, this.getPixelRatio = function() {
      return te;
    }, this.setPixelRatio = function(S) {
      S !== void 0 && (te = S, this.setSize(P, I, !1));
    }, this.getSize = function(S) {
      return S.set(P, I);
    }, this.setSize = function(S, O, W = !0) {
      if (qe.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      P = S, I = O, t.width = Math.floor(S * te), t.height = Math.floor(O * te), W === !0 && (t.style.width = S + "px", t.style.height = O + "px"), this.setViewport(0, 0, S, O);
    }, this.getDrawingBufferSize = function(S) {
      return S.set(P * te, I * te).floor();
    }, this.setDrawingBufferSize = function(S, O, W) {
      P = S, I = O, te = W, t.width = Math.floor(S * W), t.height = Math.floor(O * W), this.setViewport(0, 0, S, O);
    }, this.getCurrentViewport = function(S) {
      return S.copy(T);
    }, this.getViewport = function(S) {
      return S.copy(Y);
    }, this.setViewport = function(S, O, W, K) {
      S.isVector4 ? Y.set(S.x, S.y, S.z, S.w) : Y.set(S, O, W, K), Te.viewport(T.copy(Y).multiplyScalar(te).floor());
    }, this.getScissor = function(S) {
      return S.copy(Q);
    }, this.setScissor = function(S, O, W, K) {
      S.isVector4 ? Q.set(S.x, S.y, S.z, S.w) : Q.set(S, O, W, K), Te.scissor(G.copy(Q).multiplyScalar(te).floor());
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
    }, this.clear = function(S = !0, O = !0, W = !0) {
      let K = 0;
      if (S) {
        let B = !1;
        if (w !== null) {
          const me = w.texture.format;
          B = me === md || me === pd || me === fd;
        }
        if (B) {
          const me = w.texture.type, Oe = me === mi || me === di || me === tl || me === Fi || me === dd || me === hd, ze = xe.getClearColor(), je = xe.getClearAlpha(), Ze = ze.r, Ye = ze.g, $e = ze.b;
          Oe ? (f[0] = Ze, f[1] = Ye, f[2] = $e, f[3] = je, F.clearBufferuiv(F.COLOR, 0, f)) : (g[0] = Ze, g[1] = Ye, g[2] = $e, g[3] = je, F.clearBufferiv(F.COLOR, 0, g));
        } else
          K |= F.COLOR_BUFFER_BIT;
      }
      O && (K |= F.DEPTH_BUFFER_BIT), W && (K |= F.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), F.clear(K);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", fe, !1), t.removeEventListener("webglcontextrestored", C, !1), t.removeEventListener("webglcontextcreationerror", ve, !1), k.dispose(), ie.dispose(), ke.dispose(), y.dispose(), j.dispose(), ue.dispose(), Ge.dispose(), it.dispose(), oe.dispose(), qe.dispose(), qe.removeEventListener("sessionstart", wt), qe.removeEventListener("sessionend", ut), ee && (ee.dispose(), ee = null), Rt.stop();
    };
    function fe(S) {
      S.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), b = !0;
    }
    function C() {
      console.log("THREE.WebGLRenderer: Context Restored."), b = !1;
      const S = lt.autoReset, O = $.enabled, W = $.autoUpdate, K = $.needsUpdate, B = $.type;
      ct(), lt.autoReset = S, $.enabled = O, $.autoUpdate = W, $.needsUpdate = K, $.type = B;
    }
    function ve(S) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", S.statusMessage);
    }
    function ye(S) {
      const O = S.target;
      O.removeEventListener("dispose", ye), Be(O);
    }
    function Be(S) {
      Ie(S), ke.remove(S);
    }
    function Ie(S) {
      const O = ke.get(S).programs;
      O !== void 0 && (O.forEach(function(W) {
        oe.releaseProgram(W);
      }), S.isShaderMaterial && oe.releaseShaderCache(S));
    }
    this.renderBufferDirect = function(S, O, W, K, B, me) {
      O === null && (O = ge);
      const Oe = B.isMesh && B.matrixWorld.determinant() < 0, ze = Z(S, O, W, K, B);
      Te.setMaterial(K, Oe);
      let je = W.index, Ze = 1;
      if (K.wireframe === !0) {
        if (je = ce.getWireframeAttribute(W), je === void 0) return;
        Ze = 2;
      }
      const Ye = W.drawRange, $e = W.attributes.position;
      let bt = Ye.start * Ze, en = (Ye.start + Ye.count) * Ze;
      me !== null && (bt = Math.max(bt, me.start * Ze), en = Math.min(en, (me.start + me.count) * Ze)), je !== null ? (bt = Math.max(bt, 0), en = Math.min(en, je.count)) : $e != null && (bt = Math.max(bt, 0), en = Math.min(en, $e.count));
      const It = en - bt;
      if (It < 0 || It === 1 / 0) return;
      Ge.setup(B, K, ze, W, je);
      let Nn, vt = Pe;
      if (je !== null && (Nn = de.get(je), vt = Re, vt.setIndex(Nn)), B.isMesh)
        K.wireframe === !0 ? (Te.setLineWidth(K.wireframeLinewidth * Ae()), vt.setMode(F.LINES)) : vt.setMode(F.TRIANGLES);
      else if (B.isLine) {
        let et = K.linewidth;
        et === void 0 && (et = 1), Te.setLineWidth(et * Ae()), B.isLineSegments ? vt.setMode(F.LINES) : B.isLineLoop ? vt.setMode(F.LINE_LOOP) : vt.setMode(F.LINE_STRIP);
      } else B.isPoints ? vt.setMode(F.POINTS) : B.isSprite && vt.setMode(F.TRIANGLES);
      if (B.isBatchedMesh)
        vt.renderMultiDraw(B._multiDrawStarts, B._multiDrawCounts, B._multiDrawCount);
      else if (B.isInstancedMesh)
        vt.renderInstances(bt, It, B.count);
      else if (W.isInstancedBufferGeometry) {
        const et = W._maxInstanceCount !== void 0 ? W._maxInstanceCount : 1 / 0, Ro = Math.min(W.instanceCount, et);
        vt.renderInstances(bt, It, Ro);
      } else
        vt.render(bt, It);
    };
    function at(S, O, W) {
      S.transparent === !0 && S.side === Ln && S.forceSinglePass === !1 ? (S.side = Qt, S.needsUpdate = !0, mn(S, O, W), S.side = Xn, S.needsUpdate = !0, mn(S, O, W), S.side = Ln) : mn(S, O, W);
    }
    this.compile = function(S, O, W = null) {
      W === null && (W = S), p = ie.get(W), p.init(), x.push(p), W.traverseVisible(function(B) {
        B.isLight && B.layers.test(O.layers) && (p.pushLight(B), B.castShadow && p.pushShadow(B));
      }), S !== W && S.traverseVisible(function(B) {
        B.isLight && B.layers.test(O.layers) && (p.pushLight(B), B.castShadow && p.pushShadow(B));
      }), p.setupLights(v._useLegacyLights);
      const K = /* @__PURE__ */ new Set();
      return S.traverse(function(B) {
        const me = B.material;
        if (me)
          if (Array.isArray(me))
            for (let Oe = 0; Oe < me.length; Oe++) {
              const ze = me[Oe];
              at(ze, W, B), K.add(ze);
            }
          else
            at(me, W, B), K.add(me);
      }), x.pop(), p = null, K;
    }, this.compileAsync = function(S, O, W = null) {
      const K = this.compile(S, O, W);
      return new Promise((B) => {
        function me() {
          if (K.forEach(function(Oe) {
            ke.get(Oe).currentProgram.isReady() && K.delete(Oe);
          }), K.size === 0) {
            B(S);
            return;
          }
          setTimeout(me, 10);
        }
        Le.get("KHR_parallel_shader_compile") !== null ? me() : setTimeout(me, 10);
      });
    };
    let dt = null;
    function Mt(S) {
      dt && dt(S);
    }
    function wt() {
      Rt.stop();
    }
    function ut() {
      Rt.start();
    }
    const Rt = new Id();
    Rt.setAnimationLoop(Mt), typeof self < "u" && Rt.setContext(self), this.setAnimationLoop = function(S) {
      dt = S, qe.setAnimationLoop(S), S === null ? Rt.stop() : Rt.start();
    }, qe.addEventListener("sessionstart", wt), qe.addEventListener("sessionend", ut), this.render = function(S, O) {
      if (O !== void 0 && O.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (b === !0) return;
      S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(), O.parent === null && O.matrixWorldAutoUpdate === !0 && O.updateMatrixWorld(), qe.enabled === !0 && qe.isPresenting === !0 && (qe.cameraAutoUpdate === !0 && qe.updateCamera(O), O = qe.getCamera()), S.isScene === !0 && S.onBeforeRender(v, S, O, w), p = ie.get(S, x.length), p.init(), x.push(p), ae.multiplyMatrices(O.projectionMatrix, O.matrixWorldInverse), z.setFromProjectionMatrix(ae), re = this.localClippingEnabled, ne = Se.init(this.clippingPlanes, re), _ = k.get(S, m.length), _.init(), m.push(_), Yt(S, O, 0, v.sortObjects), _.finish(), v.sortObjects === !0 && _.sort(V, q), this.info.render.frame++, ne === !0 && Se.beginShadows();
      const W = p.state.shadowsArray;
      if ($.render(W, S, O), ne === !0 && Se.endShadows(), this.info.autoReset === !0 && this.info.reset(), xe.render(_, S), p.setupLights(v._useLegacyLights), O.isArrayCamera) {
        const K = O.cameras;
        for (let B = 0, me = K.length; B < me; B++) {
          const Oe = K[B];
          _i(_, S, Oe, Oe.viewport);
        }
      } else
        _i(_, S, O);
      w !== null && (M.updateMultisampleRenderTarget(w), M.updateRenderTargetMipmap(w)), S.isScene === !0 && S.onAfterRender(v, S, O), Ge.resetDefaultState(), H = -1, E = null, x.pop(), x.length > 0 ? p = x[x.length - 1] : p = null, m.pop(), m.length > 0 ? _ = m[m.length - 1] : _ = null;
    };
    function Yt(S, O, W, K) {
      if (S.visible === !1) return;
      if (S.layers.test(O.layers)) {
        if (S.isGroup)
          W = S.renderOrder;
        else if (S.isLOD)
          S.autoUpdate === !0 && S.update(O);
        else if (S.isLight)
          p.pushLight(S), S.castShadow && p.pushShadow(S);
        else if (S.isSprite) {
          if (!S.frustumCulled || z.intersectsSprite(S)) {
            K && Ce.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ae);
            const Oe = ue.update(S), ze = S.material;
            ze.visible && _.push(S, Oe, ze, W, Ce.z, null);
          }
        } else if ((S.isMesh || S.isLine || S.isPoints) && (!S.frustumCulled || z.intersectsObject(S))) {
          const Oe = ue.update(S), ze = S.material;
          if (K && (S.boundingSphere !== void 0 ? (S.boundingSphere === null && S.computeBoundingSphere(), Ce.copy(S.boundingSphere.center)) : (Oe.boundingSphere === null && Oe.computeBoundingSphere(), Ce.copy(Oe.boundingSphere.center)), Ce.applyMatrix4(S.matrixWorld).applyMatrix4(ae)), Array.isArray(ze)) {
            const je = Oe.groups;
            for (let Ze = 0, Ye = je.length; Ze < Ye; Ze++) {
              const $e = je[Ze], bt = ze[$e.materialIndex];
              bt && bt.visible && _.push(S, Oe, bt, W, Ce.z, $e);
            }
          } else ze.visible && _.push(S, Oe, ze, W, Ce.z, null);
        }
      }
      const me = S.children;
      for (let Oe = 0, ze = me.length; Oe < ze; Oe++)
        Yt(me[Oe], O, W, K);
    }
    function _i(S, O, W, K) {
      const B = S.opaque, me = S.transmissive, Oe = S.transparent;
      p.setupLightsView(W), ne === !0 && Se.setGlobalState(v.clippingPlanes, W), me.length > 0 && $n(B, me, O, W), K && Te.viewport(T.copy(K)), B.length > 0 && Kn(B, O, W), me.length > 0 && Kn(me, O, W), Oe.length > 0 && Kn(Oe, O, W), Te.buffers.depth.setTest(!0), Te.buffers.depth.setMask(!0), Te.buffers.color.setMask(!0), Te.setPolygonOffset(!1);
    }
    function $n(S, O, W, K) {
      if ((W.isScene === !0 ? W.overrideMaterial : null) !== null)
        return;
      const me = Ue.isWebGL2;
      ee === null && (ee = new Hi(1, 1, {
        generateMipmaps: !0,
        type: Le.has("EXT_color_buffer_half_float") ? ir : mi,
        minFilter: zi,
        samples: me ? 4 : 0
      })), v.getDrawingBufferSize(we), me ? ee.setSize(we.x, we.y) : ee.setSize(fo(we.x), fo(we.y));
      const Oe = v.getRenderTarget();
      v.setRenderTarget(ee), v.getClearColor(le), L = v.getClearAlpha(), L < 1 && v.setClearColor(16777215, 0.5), v.clear();
      const ze = v.toneMapping;
      v.toneMapping = pi, Kn(S, W, K), M.updateMultisampleRenderTarget(ee), M.updateRenderTargetMipmap(ee);
      let je = !1;
      for (let Ze = 0, Ye = O.length; Ze < Ye; Ze++) {
        const $e = O[Ze], bt = $e.object, en = $e.geometry, It = $e.material, Nn = $e.group;
        if (It.side === Ln && bt.layers.test(K.layers)) {
          const vt = It.side;
          It.side = Qt, It.needsUpdate = !0, Jn(bt, W, K, en, It, Nn), It.side = vt, It.needsUpdate = !0, je = !0;
        }
      }
      je === !0 && (M.updateMultisampleRenderTarget(ee), M.updateRenderTargetMipmap(ee)), v.setRenderTarget(Oe), v.setClearColor(le, L), v.toneMapping = ze;
    }
    function Kn(S, O, W) {
      const K = O.isScene === !0 ? O.overrideMaterial : null;
      for (let B = 0, me = S.length; B < me; B++) {
        const Oe = S[B], ze = Oe.object, je = Oe.geometry, Ze = K === null ? Oe.material : K, Ye = Oe.group;
        ze.layers.test(W.layers) && Jn(ze, O, W, je, Ze, Ye);
      }
    }
    function Jn(S, O, W, K, B, me) {
      S.onBeforeRender(v, O, W, K, B, me), S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse, S.matrixWorld), S.normalMatrix.getNormalMatrix(S.modelViewMatrix), B.onBeforeRender(v, O, W, K, S, me), B.transparent === !0 && B.side === Ln && B.forceSinglePass === !1 ? (B.side = Qt, B.needsUpdate = !0, v.renderBufferDirect(W, O, K, B, S, me), B.side = Xn, B.needsUpdate = !0, v.renderBufferDirect(W, O, K, B, S, me), B.side = Ln) : v.renderBufferDirect(W, O, K, B, S, me), S.onAfterRender(v, O, W, K, B, me);
    }
    function mn(S, O, W) {
      O.isScene !== !0 && (O = ge);
      const K = ke.get(S), B = p.state.lights, me = p.state.shadowsArray, Oe = B.state.version, ze = oe.getParameters(S, B.state, me, O, W), je = oe.getProgramCacheKey(ze);
      let Ze = K.programs;
      K.environment = S.isMeshStandardMaterial ? O.environment : null, K.fog = O.fog, K.envMap = (S.isMeshStandardMaterial ? j : y).get(S.envMap || K.environment), Ze === void 0 && (S.addEventListener("dispose", ye), Ze = /* @__PURE__ */ new Map(), K.programs = Ze);
      let Ye = Ze.get(je);
      if (Ye !== void 0) {
        if (K.currentProgram === Ye && K.lightsStateVersion === Oe)
          return pe(S, ze), Ye;
      } else
        ze.uniforms = oe.getUniforms(S), S.onBuild(W, ze, v), S.onBeforeCompile(ze, v), Ye = oe.acquireProgram(ze, je), Ze.set(je, Ye), K.uniforms = ze.uniforms;
      const $e = K.uniforms;
      return (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === !0) && ($e.clippingPlanes = Se.uniform), pe(S, ze), K.needsLights = _t(S), K.lightsStateVersion = Oe, K.needsLights && ($e.ambientLightColor.value = B.state.ambient, $e.lightProbe.value = B.state.probe, $e.directionalLights.value = B.state.directional, $e.directionalLightShadows.value = B.state.directionalShadow, $e.spotLights.value = B.state.spot, $e.spotLightShadows.value = B.state.spotShadow, $e.rectAreaLights.value = B.state.rectArea, $e.ltc_1.value = B.state.rectAreaLTC1, $e.ltc_2.value = B.state.rectAreaLTC2, $e.pointLights.value = B.state.point, $e.pointLightShadows.value = B.state.pointShadow, $e.hemisphereLights.value = B.state.hemi, $e.directionalShadowMap.value = B.state.directionalShadowMap, $e.directionalShadowMatrix.value = B.state.directionalShadowMatrix, $e.spotShadowMap.value = B.state.spotShadowMap, $e.spotLightMatrix.value = B.state.spotLightMatrix, $e.spotLightMap.value = B.state.spotLightMap, $e.pointShadowMap.value = B.state.pointShadowMap, $e.pointShadowMatrix.value = B.state.pointShadowMatrix), K.currentProgram = Ye, K.uniformsList = null, Ye;
    }
    function Zn(S) {
      if (S.uniformsList === null) {
        const O = S.currentProgram.getUniforms();
        S.uniformsList = eo.seqWithValue(O.seq, S.uniforms);
      }
      return S.uniformsList;
    }
    function pe(S, O) {
      const W = ke.get(S);
      W.outputColorSpace = O.outputColorSpace, W.batching = O.batching, W.instancing = O.instancing, W.instancingColor = O.instancingColor, W.skinning = O.skinning, W.morphTargets = O.morphTargets, W.morphNormals = O.morphNormals, W.morphColors = O.morphColors, W.morphTargetsCount = O.morphTargetsCount, W.numClippingPlanes = O.numClippingPlanes, W.numIntersection = O.numClipIntersection, W.vertexAlphas = O.vertexAlphas, W.vertexTangents = O.vertexTangents, W.toneMapping = O.toneMapping;
    }
    function Z(S, O, W, K, B) {
      O.isScene !== !0 && (O = ge), M.resetTextureUnits();
      const me = O.fog, Oe = K.isMeshStandardMaterial ? O.environment : null, ze = w === null ? v.outputColorSpace : w.isXRRenderTarget === !0 ? w.texture.colorSpace : Nt, je = (K.isMeshStandardMaterial ? j : y).get(K.envMap || Oe), Ze = K.vertexColors === !0 && !!W.attributes.color && W.attributes.color.itemSize === 4, Ye = !!W.attributes.tangent && (!!K.normalMap || K.anisotropy > 0), $e = !!W.morphAttributes.position, bt = !!W.morphAttributes.normal, en = !!W.morphAttributes.color;
      let It = pi;
      K.toneMapped && (w === null || w.isXRRenderTarget === !0) && (It = v.toneMapping);
      const Nn = W.morphAttributes.position || W.morphAttributes.normal || W.morphAttributes.color, vt = Nn !== void 0 ? Nn.length : 0, et = ke.get(K), Ro = p.state.lights;
      if (ne === !0 && (re === !0 || S !== E)) {
        const on = S === E && K.id === H;
        Se.setState(K, S, on);
      }
      let At = !1;
      K.version === et.__version ? (et.needsLights && et.lightsStateVersion !== Ro.state.version || et.outputColorSpace !== ze || B.isBatchedMesh && et.batching === !1 || !B.isBatchedMesh && et.batching === !0 || B.isInstancedMesh && et.instancing === !1 || !B.isInstancedMesh && et.instancing === !0 || B.isSkinnedMesh && et.skinning === !1 || !B.isSkinnedMesh && et.skinning === !0 || B.isInstancedMesh && et.instancingColor === !0 && B.instanceColor === null || B.isInstancedMesh && et.instancingColor === !1 && B.instanceColor !== null || et.envMap !== je || K.fog === !0 && et.fog !== me || et.numClippingPlanes !== void 0 && (et.numClippingPlanes !== Se.numPlanes || et.numIntersection !== Se.numIntersection) || et.vertexAlphas !== Ze || et.vertexTangents !== Ye || et.morphTargets !== $e || et.morphNormals !== bt || et.morphColors !== en || et.toneMapping !== It || Ue.isWebGL2 === !0 && et.morphTargetsCount !== vt) && (At = !0) : (At = !0, et.__version = K.version);
      let vi = et.currentProgram;
      At === !0 && (vi = mn(K, O, B));
      let ml = !1, Os = !1, Co = !1;
      const Bt = vi.getUniforms(), yi = et.uniforms;
      if (Te.useProgram(vi.program) && (ml = !0, Os = !0, Co = !0), K.id !== H && (H = K.id, Os = !0), ml || E !== S) {
        Bt.setValue(F, "projectionMatrix", S.projectionMatrix), Bt.setValue(F, "viewMatrix", S.matrixWorldInverse);
        const on = Bt.map.cameraPosition;
        on !== void 0 && on.setValue(F, Ce.setFromMatrixPosition(S.matrixWorld)), Ue.logarithmicDepthBuffer && Bt.setValue(
          F,
          "logDepthBufFC",
          2 / (Math.log(S.far + 1) / Math.LN2)
        ), (K.isMeshPhongMaterial || K.isMeshToonMaterial || K.isMeshLambertMaterial || K.isMeshBasicMaterial || K.isMeshStandardMaterial || K.isShaderMaterial) && Bt.setValue(F, "isOrthographic", S.isOrthographicCamera === !0), E !== S && (E = S, Os = !0, Co = !0);
      }
      if (B.isSkinnedMesh) {
        Bt.setOptional(F, B, "bindMatrix"), Bt.setOptional(F, B, "bindMatrixInverse");
        const on = B.skeleton;
        on && (Ue.floatVertexTextures ? (on.boneTexture === null && on.computeBoneTexture(), Bt.setValue(F, "boneTexture", on.boneTexture, M)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      B.isBatchedMesh && (Bt.setOptional(F, B, "batchingTexture"), Bt.setValue(F, "batchingTexture", B._matricesTexture, M));
      const Lo = W.morphAttributes;
      if ((Lo.position !== void 0 || Lo.normal !== void 0 || Lo.color !== void 0 && Ue.isWebGL2 === !0) && Ee.update(B, W, vi), (Os || et.receiveShadow !== B.receiveShadow) && (et.receiveShadow = B.receiveShadow, Bt.setValue(F, "receiveShadow", B.receiveShadow)), K.isMeshGouraudMaterial && K.envMap !== null && (yi.envMap.value = je, yi.flipEnvMap.value = je.isCubeTexture && je.isRenderTargetTexture === !1 ? -1 : 1), Os && (Bt.setValue(F, "toneMappingExposure", v.toneMappingExposure), et.needsLights && be(yi, Co), me && K.fog === !0 && D.refreshFogUniforms(yi, me), D.refreshMaterialUniforms(yi, K, te, I, ee), eo.upload(F, Zn(et), yi, M)), K.isShaderMaterial && K.uniformsNeedUpdate === !0 && (eo.upload(F, Zn(et), yi, M), K.uniformsNeedUpdate = !1), K.isSpriteMaterial && Bt.setValue(F, "center", B.center), Bt.setValue(F, "modelViewMatrix", B.modelViewMatrix), Bt.setValue(F, "normalMatrix", B.normalMatrix), Bt.setValue(F, "modelMatrix", B.matrixWorld), K.isShaderMaterial || K.isRawShaderMaterial) {
        const on = K.uniformsGroups;
        for (let Po = 0, rh = on.length; Po < rh; Po++)
          if (Ue.isWebGL2) {
            const gl = on[Po];
            it.update(gl, vi), it.bind(gl, vi);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return vi;
    }
    function be(S, O) {
      S.ambientLightColor.needsUpdate = O, S.lightProbe.needsUpdate = O, S.directionalLights.needsUpdate = O, S.directionalLightShadows.needsUpdate = O, S.pointLights.needsUpdate = O, S.pointLightShadows.needsUpdate = O, S.spotLights.needsUpdate = O, S.spotLightShadows.needsUpdate = O, S.rectAreaLights.needsUpdate = O, S.hemisphereLights.needsUpdate = O;
    }
    function _t(S) {
      return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return R;
    }, this.getActiveMipmapLevel = function() {
      return A;
    }, this.getRenderTarget = function() {
      return w;
    }, this.setRenderTargetTextures = function(S, O, W) {
      ke.get(S.texture).__webglTexture = O, ke.get(S.depthTexture).__webglTexture = W;
      const K = ke.get(S);
      K.__hasExternalTextures = !0, K.__hasExternalTextures && (K.__autoAllocateDepthBuffer = W === void 0, K.__autoAllocateDepthBuffer || Le.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), K.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(S, O) {
      const W = ke.get(S);
      W.__webglFramebuffer = O, W.__useDefaultFramebuffer = O === void 0;
    }, this.setRenderTarget = function(S, O = 0, W = 0) {
      w = S, R = O, A = W;
      let K = !0, B = null, me = !1, Oe = !1;
      if (S) {
        const je = ke.get(S);
        je.__useDefaultFramebuffer !== void 0 ? (Te.bindFramebuffer(F.FRAMEBUFFER, null), K = !1) : je.__webglFramebuffer === void 0 ? M.setupRenderTarget(S) : je.__hasExternalTextures && M.rebindTextures(S, ke.get(S.texture).__webglTexture, ke.get(S.depthTexture).__webglTexture);
        const Ze = S.texture;
        (Ze.isData3DTexture || Ze.isDataArrayTexture || Ze.isCompressedArrayTexture) && (Oe = !0);
        const Ye = ke.get(S).__webglFramebuffer;
        S.isWebGLCubeRenderTarget ? (Array.isArray(Ye[O]) ? B = Ye[O][W] : B = Ye[O], me = !0) : Ue.isWebGL2 && S.samples > 0 && M.useMultisampledRTT(S) === !1 ? B = ke.get(S).__webglMultisampledFramebuffer : Array.isArray(Ye) ? B = Ye[W] : B = Ye, T.copy(S.viewport), G.copy(S.scissor), J = S.scissorTest;
      } else
        T.copy(Y).multiplyScalar(te).floor(), G.copy(Q).multiplyScalar(te).floor(), J = he;
      if (Te.bindFramebuffer(F.FRAMEBUFFER, B) && Ue.drawBuffers && K && Te.drawBuffers(S, B), Te.viewport(T), Te.scissor(G), Te.setScissorTest(J), me) {
        const je = ke.get(S.texture);
        F.framebufferTexture2D(F.FRAMEBUFFER, F.COLOR_ATTACHMENT0, F.TEXTURE_CUBE_MAP_POSITIVE_X + O, je.__webglTexture, W);
      } else if (Oe) {
        const je = ke.get(S.texture), Ze = O || 0;
        F.framebufferTextureLayer(F.FRAMEBUFFER, F.COLOR_ATTACHMENT0, je.__webglTexture, W || 0, Ze);
      }
      H = -1;
    }, this.readRenderTargetPixels = function(S, O, W, K, B, me, Oe) {
      if (!(S && S.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ze = ke.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && Oe !== void 0 && (ze = ze[Oe]), ze) {
        Te.bindFramebuffer(F.FRAMEBUFFER, ze);
        try {
          const je = S.texture, Ze = je.format, Ye = je.type;
          if (Ze !== hn && Me.convert(Ze) !== F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const $e = Ye === ir && (Le.has("EXT_color_buffer_half_float") || Ue.isWebGL2 && Le.has("EXT_color_buffer_float"));
          if (Ye !== mi && Me.convert(Ye) !== F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
          !(Ye === Wn && (Ue.isWebGL2 || Le.has("OES_texture_float") || Le.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
          !$e) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          O >= 0 && O <= S.width - K && W >= 0 && W <= S.height - B && F.readPixels(O, W, K, B, Me.convert(Ze), Me.convert(Ye), me);
        } finally {
          const je = w !== null ? ke.get(w).__webglFramebuffer : null;
          Te.bindFramebuffer(F.FRAMEBUFFER, je);
        }
      }
    }, this.copyFramebufferToTexture = function(S, O, W = 0) {
      const K = Math.pow(2, -W), B = Math.floor(O.image.width * K), me = Math.floor(O.image.height * K);
      M.setTexture2D(O, 0), F.copyTexSubImage2D(F.TEXTURE_2D, W, 0, 0, S.x, S.y, B, me), Te.unbindTexture();
    }, this.copyTextureToTexture = function(S, O, W, K = 0) {
      const B = O.image.width, me = O.image.height, Oe = Me.convert(W.format), ze = Me.convert(W.type);
      M.setTexture2D(W, 0), F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL, W.flipY), F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL, W.premultiplyAlpha), F.pixelStorei(F.UNPACK_ALIGNMENT, W.unpackAlignment), O.isDataTexture ? F.texSubImage2D(F.TEXTURE_2D, K, S.x, S.y, B, me, Oe, ze, O.image.data) : O.isCompressedTexture ? F.compressedTexSubImage2D(F.TEXTURE_2D, K, S.x, S.y, O.mipmaps[0].width, O.mipmaps[0].height, Oe, O.mipmaps[0].data) : F.texSubImage2D(F.TEXTURE_2D, K, S.x, S.y, Oe, ze, O.image), K === 0 && W.generateMipmaps && F.generateMipmap(F.TEXTURE_2D), Te.unbindTexture();
    }, this.copyTextureToTexture3D = function(S, O, W, K, B = 0) {
      if (v.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const me = S.max.x - S.min.x + 1, Oe = S.max.y - S.min.y + 1, ze = S.max.z - S.min.z + 1, je = Me.convert(K.format), Ze = Me.convert(K.type);
      let Ye;
      if (K.isData3DTexture)
        M.setTexture3D(K, 0), Ye = F.TEXTURE_3D;
      else if (K.isDataArrayTexture || K.isCompressedArrayTexture)
        M.setTexture2DArray(K, 0), Ye = F.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL, K.flipY), F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL, K.premultiplyAlpha), F.pixelStorei(F.UNPACK_ALIGNMENT, K.unpackAlignment);
      const $e = F.getParameter(F.UNPACK_ROW_LENGTH), bt = F.getParameter(F.UNPACK_IMAGE_HEIGHT), en = F.getParameter(F.UNPACK_SKIP_PIXELS), It = F.getParameter(F.UNPACK_SKIP_ROWS), Nn = F.getParameter(F.UNPACK_SKIP_IMAGES), vt = W.isCompressedTexture ? W.mipmaps[B] : W.image;
      F.pixelStorei(F.UNPACK_ROW_LENGTH, vt.width), F.pixelStorei(F.UNPACK_IMAGE_HEIGHT, vt.height), F.pixelStorei(F.UNPACK_SKIP_PIXELS, S.min.x), F.pixelStorei(F.UNPACK_SKIP_ROWS, S.min.y), F.pixelStorei(F.UNPACK_SKIP_IMAGES, S.min.z), W.isDataTexture || W.isData3DTexture ? F.texSubImage3D(Ye, B, O.x, O.y, O.z, me, Oe, ze, je, Ze, vt.data) : W.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), F.compressedTexSubImage3D(Ye, B, O.x, O.y, O.z, me, Oe, ze, je, vt.data)) : F.texSubImage3D(Ye, B, O.x, O.y, O.z, me, Oe, ze, je, Ze, vt), F.pixelStorei(F.UNPACK_ROW_LENGTH, $e), F.pixelStorei(F.UNPACK_IMAGE_HEIGHT, bt), F.pixelStorei(F.UNPACK_SKIP_PIXELS, en), F.pixelStorei(F.UNPACK_SKIP_ROWS, It), F.pixelStorei(F.UNPACK_SKIP_IMAGES, Nn), B === 0 && K.generateMipmaps && F.generateMipmap(Ye), Te.unbindTexture();
    }, this.initTexture = function(S) {
      S.isCubeTexture ? M.setTextureCube(S, 0) : S.isData3DTexture ? M.setTexture3D(S, 0) : S.isDataArrayTexture || S.isCompressedArrayTexture ? M.setTexture2DArray(S, 0) : M.setTexture2D(S, 0), Te.unbindTexture();
    }, this.resetState = function() {
      R = 0, A = 0, w = null, Te.reset(), Ge.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return jn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === il ? "display-p3" : "srgb", t.unpackColorSpace = ft.workingColorSpace === Eo ? "display-p3" : "srgb";
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === Et ? Vi : vd;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === Vi ? Et : Nt;
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(e) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
  }
}
class vy extends Vd {
}
vy.prototype.isWebGL1Renderer = !0;
class yy extends St {
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
class xy {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Da, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.version = 0, this.uuid = xn();
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
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = xn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = xn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const Gt = /* @__PURE__ */ new N();
class ll {
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
      Gt.fromBufferAttribute(this, t), Gt.applyMatrix4(e), this.setXYZ(t, Gt.x, Gt.y, Gt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Gt.fromBufferAttribute(this, t), Gt.applyNormalMatrix(e), this.setXYZ(t, Gt.x, Gt.y, Gt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Gt.fromBufferAttribute(this, t), Gt.transformDirection(e), this.setXYZ(t, Gt.x, Gt.y, Gt.z);
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
    return this.normalized && (t = Pn(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Pn(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Pn(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Pn(t, this.array)), t;
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
      return new qt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new ll(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
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
const Qc = /* @__PURE__ */ new N(), eu = /* @__PURE__ */ new mt(), tu = /* @__PURE__ */ new mt(), Ey = /* @__PURE__ */ new N(), nu = /* @__PURE__ */ new nt(), Fr = /* @__PURE__ */ new N(), ha = /* @__PURE__ */ new Dn(), iu = /* @__PURE__ */ new nt(), fa = /* @__PURE__ */ new So();
class Sy extends Ke {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = kl, this.bindMatrix = new nt(), this.bindMatrixInverse = new nt(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new qn()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, Fr), this.boundingBox.expandByPoint(Fr);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new Dn()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, Fr), this.boundingSphere.expandByPoint(Fr);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, s = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), ha.copy(this.boundingSphere), ha.applyMatrix4(s), e.ray.intersectsSphere(ha) !== !1 && (iu.copy(s).invert(), fa.copy(e.ray).applyMatrix4(iu), !(this.boundingBox !== null && fa.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, fa)));
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
    super.updateMatrixWorld(e), this.bindMode === kl ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === Rp ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, s = this.geometry;
    eu.fromBufferAttribute(s.attributes.skinIndex, e), tu.fromBufferAttribute(s.attributes.skinWeight, e), Qc.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const o = tu.getComponent(r);
      if (o !== 0) {
        const a = eu.getComponent(r);
        nu.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(Ey.copy(Qc).applyMatrix4(nu), o);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
  boneTransform(e, t) {
    return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."), this.applyBoneTransform(e, t);
  }
}
class kd extends St {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class My extends Ft {
  constructor(e = null, t = 1, n = 1, s, r, o, a, l, c = Ut, u = Ut, d, h) {
    super(null, o, a, l, c, u, s, r, d, h), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const su = /* @__PURE__ */ new nt(), Ay = /* @__PURE__ */ new nt();
class cl {
  constructor(e = [], t = []) {
    this.uuid = xn(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
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
      const a = e[r] ? e[r].matrixWorld : Ay;
      su.multiplyMatrices(a, t[r]), su.toArray(n, r * 16);
    }
    s !== null && (s.needsUpdate = !0);
  }
  clone() {
    return new cl(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new My(t, e, e, hn, Wn);
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
      o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), o = new kd()), this.bones.push(o), this.boneInverses.push(new nt().fromArray(e.boneInverses[n]));
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
class Fa extends qt {
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
const us = /* @__PURE__ */ new nt(), ru = /* @__PURE__ */ new nt(), Br = [], ou = /* @__PURE__ */ new qn(), Ty = /* @__PURE__ */ new nt(), Hs = /* @__PURE__ */ new Ke(), Gs = /* @__PURE__ */ new Dn();
class by extends Ke {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new Fa(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let s = 0; s < n; s++)
      this.setMatrixAt(s, Ty);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new qn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, us), ou.copy(e.boundingBox).applyMatrix4(us), this.boundingBox.union(ou);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Dn()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, us), Gs.copy(e.boundingSphere).applyMatrix4(us), this.boundingSphere.union(Gs);
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
    if (Hs.geometry = this.geometry, Hs.material = this.material, Hs.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Gs.copy(this.boundingSphere), Gs.applyMatrix4(n), e.ray.intersectsSphere(Gs) !== !1))
      for (let r = 0; r < s; r++) {
        this.getMatrixAt(r, us), ru.multiplyMatrices(n, us), Hs.matrixWorld = ru, Hs.raycast(e, Br);
        for (let o = 0, a = Br.length; o < a; o++) {
          const l = Br[o];
          l.instanceId = r, l.object = this, t.push(l);
        }
        Br.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new Fa(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
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
class zd extends In {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Xe(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const au = /* @__PURE__ */ new N(), lu = /* @__PURE__ */ new N(), cu = /* @__PURE__ */ new nt(), pa = /* @__PURE__ */ new So(), Vr = /* @__PURE__ */ new Dn();
class ul extends St {
  constructor(e = new Mn(), t = new zd()) {
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
        au.fromBufferAttribute(t, s - 1), lu.fromBufferAttribute(t, s), n[s] = n[s - 1], n[s] += au.distanceTo(lu);
      e.setAttribute("lineDistance", new pn(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, s = this.matrixWorld, r = e.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Vr.copy(n.boundingSphere), Vr.applyMatrix4(s), Vr.radius += r, e.ray.intersectsSphere(Vr) === !1) return;
    cu.copy(s).invert(), pa.copy(e.ray).applyMatrix4(cu);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = new N(), u = new N(), d = new N(), h = new N(), f = this.isLineSegments ? 2 : 1, g = n.index, p = n.attributes.position;
    if (g !== null) {
      const m = Math.max(0, o.start), x = Math.min(g.count, o.start + o.count);
      for (let v = m, b = x - 1; v < b; v += f) {
        const R = g.getX(v), A = g.getX(v + 1);
        if (c.fromBufferAttribute(p, R), u.fromBufferAttribute(p, A), pa.distanceSqToSegment(c, u, h, d) > l) continue;
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
        if (c.fromBufferAttribute(p, v), u.fromBufferAttribute(p, v + 1), pa.distanceSqToSegment(c, u, h, d) > l) continue;
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
const uu = /* @__PURE__ */ new N(), du = /* @__PURE__ */ new N();
class wy extends ul {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let s = 0, r = t.count; s < r; s += 2)
        uu.fromBufferAttribute(t, s), du.fromBufferAttribute(t, s + 1), n[s] = s === 0 ? 0 : n[s - 1], n[s + 1] = n[s] + uu.distanceTo(du);
      e.setAttribute("lineDistance", new pn(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Ry extends ul {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class Hd extends In {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Xe(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const hu = /* @__PURE__ */ new nt(), Ba = /* @__PURE__ */ new So(), kr = /* @__PURE__ */ new Dn(), zr = /* @__PURE__ */ new N();
class Cy extends St {
  constructor(e = new Mn(), t = new Hd()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, s = this.matrixWorld, r = e.params.Points.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), kr.copy(n.boundingSphere), kr.applyMatrix4(s), kr.radius += r, e.ray.intersectsSphere(kr) === !1) return;
    hu.copy(s).invert(), Ba.copy(e.ray).applyMatrix4(hu);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = n.index, d = n.attributes.position;
    if (c !== null) {
      const h = Math.max(0, o.start), f = Math.min(c.count, o.start + o.count);
      for (let g = h, _ = f; g < _; g++) {
        const p = c.getX(g);
        zr.fromBufferAttribute(d, p), fu(zr, p, l, s, e, t, this);
      }
    } else {
      const h = Math.max(0, o.start), f = Math.min(d.count, o.start + o.count);
      for (let g = h, _ = f; g < _; g++)
        zr.fromBufferAttribute(d, g), fu(zr, g, l, s, e, t, this);
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
function fu(i, e, t, n, s, r, o) {
  const a = Ba.distanceSqToPoint(i);
  if (a < t) {
    const l = new N();
    Ba.closestPointToPoint(i, l), l.applyMatrix4(n);
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
class po extends Mn {
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
    x(), o === !1 && (e > 0 && v(!0), t > 0 && v(!1)), this.setIndex(u), this.setAttribute("position", new pn(d, 3)), this.setAttribute("normal", new pn(h, 3)), this.setAttribute("uv", new pn(f, 2));
    function x() {
      const b = new N(), R = new N();
      let A = 0;
      const w = (t - e) / n;
      for (let H = 0; H <= r; H++) {
        const E = [], T = H / r, G = T * (t - e) + e;
        for (let J = 0; J <= s; J++) {
          const le = J / s, L = le * l + a, P = Math.sin(L), I = Math.cos(L);
          R.x = G * P, R.y = -T * n + p, R.z = G * I, d.push(R.x, R.y, R.z), b.set(P, w, I).normalize(), h.push(b.x, b.y, b.z), f.push(le, 1 - T), E.push(g++);
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
      const R = g, A = new ot(), w = new N();
      let H = 0;
      const E = b === !0 ? e : t, T = b === !0 ? 1 : -1;
      for (let J = 1; J <= s; J++)
        d.push(0, p * T, 0), h.push(0, T, 0), f.push(0.5, 0.5), g++;
      const G = g;
      for (let J = 0; J <= s; J++) {
        const L = J / s * l + a, P = Math.cos(L), I = Math.sin(L);
        w.x = E * I, w.y = p * T, w.z = E * P, d.push(w.x, w.y, w.z), h.push(0, T, 0), A.x = P * 0.5 + 0.5, A.y = I * 0.5 * T + 0.5, f.push(A.x, A.y), g++;
      }
      for (let J = 0; J < s; J++) {
        const le = R + J, L = G + J;
        b === !0 ? u.push(L, L + 1, le) : u.push(L + 1, L, le), H += 3;
      }
      c.addGroup(m, H, b === !0 ? 1 : 2), m += H;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new po(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class jt extends In {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Xe(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Xe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = yd, this.normalScale = new ot(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Yn extends jt {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new ot(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return zt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Xe(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Xe(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Xe(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
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
function Hr(i, e, t) {
  return !i || // let 'undefined' and 'null' pass
  !t && i.constructor === e ? i : typeof e.BYTES_PER_ELEMENT == "number" ? new e(i) : Array.prototype.slice.call(i);
}
function Ly(i) {
  return ArrayBuffer.isView(i) && !(i instanceof DataView);
}
function Py(i) {
  function e(s, r) {
    return i[s] - i[r];
  }
  const t = i.length, n = new Array(t);
  for (let s = 0; s !== t; ++s) n[s] = s;
  return n.sort(e), n;
}
function pu(i, e, t) {
  const n = i.length, s = new i.constructor(n);
  for (let r = 0, o = 0; o !== n; ++r) {
    const a = t[r] * e;
    for (let l = 0; l !== e; ++l)
      s[o++] = i[a + l];
  }
  return s;
}
function Gd(i, e, t, n) {
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
class fr {
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
class Iy extends fr {
  constructor(e, t, n, s) {
    super(e, t, n, s), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: fs,
      endingEnd: fs
    };
  }
  intervalChanged_(e, t, n) {
    const s = this.parameterPositions;
    let r = e - 2, o = e + 1, a = s[r], l = s[o];
    if (a === void 0)
      switch (this.getSettings_().endingStart) {
        case ps:
          r = e, a = 2 * t - n;
          break;
        case ao:
          r = s.length - 2, a = t + s[r] - s[r + 1];
          break;
        default:
          r = e, a = n;
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case ps:
          o = e, l = 2 * n - t;
          break;
        case ao:
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
class Wd extends fr {
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
class Dy extends fr {
  constructor(e, t, n, s) {
    super(e, t, n, s);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Un {
  constructor(e, t, n, s) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = Hr(t, this.TimeBufferType), this.values = Hr(n, this.ValueBufferType), this.setInterpolation(s || this.DefaultInterpolation);
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
        times: Hr(e.times, Array),
        values: Hr(e.values, Array)
      };
      const s = e.getInterpolation();
      s !== e.DefaultInterpolation && (n.interpolation = s);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Dy(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Wd(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Iy(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case sr:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Ts:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Ho:
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
        return sr;
      case this.InterpolantFactoryMethodLinear:
        return Ts;
      case this.InterpolantFactoryMethodSmooth:
        return Ho;
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
    if (s !== void 0 && Ly(s))
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
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), s = this.getInterpolation() === Ho, r = e.length - 1;
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
Un.prototype.TimeBufferType = Float32Array;
Un.prototype.ValueBufferType = Float32Array;
Un.prototype.DefaultInterpolation = Ts;
class Ds extends Un {
}
Ds.prototype.ValueTypeName = "bool";
Ds.prototype.ValueBufferType = Array;
Ds.prototype.DefaultInterpolation = sr;
Ds.prototype.InterpolantFactoryMethodLinear = void 0;
Ds.prototype.InterpolantFactoryMethodSmooth = void 0;
class jd extends Un {
}
jd.prototype.ValueTypeName = "color";
class Rs extends Un {
}
Rs.prototype.ValueTypeName = "number";
class Uy extends fr {
  constructor(e, t, n, s) {
    super(e, t, n, s);
  }
  interpolate_(e, t, n, s) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = (n - t) / (s - t);
    let c = e * a;
    for (let u = c + a; c !== u; c += 4)
      En.slerpFlat(r, 0, o, c - a, o, c, l);
    return r;
  }
}
class Wi extends Un {
  InterpolantFactoryMethodLinear(e) {
    return new Uy(this.times, this.values, this.getValueSize(), e);
  }
}
Wi.prototype.ValueTypeName = "quaternion";
Wi.prototype.DefaultInterpolation = Ts;
Wi.prototype.InterpolantFactoryMethodSmooth = void 0;
class Us extends Un {
}
Us.prototype.ValueTypeName = "string";
Us.prototype.ValueBufferType = Array;
Us.prototype.DefaultInterpolation = sr;
Us.prototype.InterpolantFactoryMethodLinear = void 0;
Us.prototype.InterpolantFactoryMethodSmooth = void 0;
class Cs extends Un {
}
Cs.prototype.ValueTypeName = "vector";
class Va {
  constructor(e, t = -1, n, s = nl) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = s, this.uuid = xn(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, s = 1 / (e.fps || 1);
    for (let o = 0, a = n.length; o !== a; ++o)
      t.push(Oy(n[o]).scale(s));
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
      t.push(Un.toJSON(n[r]));
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
      const u = Py(l);
      l = pu(l, 1, u), c = pu(c, 1, u), !s && l[0] === 0 && (l.push(r), c.push(c[0])), o.push(
        new Rs(
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
        Gd(f, p, m, g), p.length !== 0 && _.push(new d(h, p, m));
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
            s.push(new Rs(".morphTargetInfluence[" + _ + "]", p, m));
          }
          l = f.length * o;
        } else {
          const f = ".bones[" + t[d].name + "]";
          n(
            Cs,
            f + ".position",
            h,
            "pos",
            s
          ), n(
            Wi,
            f + ".quaternion",
            h,
            "rot",
            s
          ), n(
            Cs,
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
function Ny(i) {
  switch (i.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Rs;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Cs;
    case "color":
      return jd;
    case "quaternion":
      return Wi;
    case "bool":
    case "boolean":
      return Ds;
    case "string":
      return Us;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + i);
}
function Oy(i) {
  if (i.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Ny(i.type);
  if (i.times === void 0) {
    const t = [], n = [];
    Gd(i.keys, t, n, "value"), i.times = t, i.values = n;
  }
  return e.parse !== void 0 ? e.parse(i) : new e(i.name, i.times, i.values, i.interpolation);
}
const hi = {
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
class Fy {
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
const By = /* @__PURE__ */ new Fy();
class Ns {
  constructor(e) {
    this.manager = e !== void 0 ? e : By, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
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
Ns.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const zn = {};
class Vy extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class Xd extends Ns {
  constructor(e) {
    super(e);
  }
  load(e, t, n, s) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = hi.get(e);
    if (r !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(r), this.manager.itemEnd(e);
      }, 0), r;
    if (zn[e] !== void 0) {
      zn[e].push({
        onLoad: t,
        onProgress: n,
        onError: s
      });
      return;
    }
    zn[e] = [], zn[e].push({
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
        const u = zn[e], d = c.body.getReader(), h = c.headers.get("Content-Length") || c.headers.get("X-File-Size"), f = h ? parseInt(h) : 0, g = f !== 0;
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
        throw new Vy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
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
      hi.add(e, c);
      const u = zn[e];
      delete zn[e];
      for (let d = 0, h = u.length; d < h; d++) {
        const f = u[d];
        f.onLoad && f.onLoad(c);
      }
    }).catch((c) => {
      const u = zn[e];
      if (u === void 0)
        throw this.manager.itemError(e), c;
      delete zn[e];
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
class ky extends Ns {
  constructor(e) {
    super(e);
  }
  load(e, t, n, s) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, o = hi.get(e);
    if (o !== void 0)
      return r.manager.itemStart(e), setTimeout(function() {
        t && t(o), r.manager.itemEnd(e);
      }, 0), o;
    const a = rr("img");
    function l() {
      u(), hi.add(e, this), t && t(this), r.manager.itemEnd(e);
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
class zy extends Ns {
  constructor(e) {
    super(e);
  }
  load(e, t, n, s) {
    const r = new Ft(), o = new ky(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
      r.image = a, r.needsUpdate = !0, t !== void 0 && t(r);
    }, n, s), r;
  }
}
class To extends St {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Xe(e), this.intensity = t;
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
const ma = /* @__PURE__ */ new nt(), mu = /* @__PURE__ */ new N(), gu = /* @__PURE__ */ new N();
class dl {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ot(512, 512), this.map = null, this.mapPass = null, this.matrix = new nt(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new rl(), this._frameExtents = new ot(1, 1), this._viewportCount = 1, this._viewports = [
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
    mu.setFromMatrixPosition(e.matrixWorld), t.position.copy(mu), gu.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(gu), t.updateMatrixWorld(), ma.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ma), n.set(
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
    ), n.multiply(ma);
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
class Hy extends dl {
  constructor() {
    super(new Xt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = bs * 2 * e.angle * this.focus, s = this.mapSize.width / this.mapSize.height, r = e.distance || t.far;
    (n !== t.fov || s !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = s, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class qd extends To {
  constructor(e, t, n = 0, s = Math.PI / 3, r = 0, o = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(St.DEFAULT_UP), this.updateMatrix(), this.target = new St(), this.distance = n, this.angle = s, this.penumbra = r, this.decay = o, this.map = null, this.shadow = new Hy();
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
const _u = /* @__PURE__ */ new nt(), Ws = /* @__PURE__ */ new N(), ga = /* @__PURE__ */ new N();
class Gy extends dl {
  constructor() {
    super(new Xt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new ot(4, 2), this._viewportCount = 6, this._viewports = [
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
    const n = this.camera, s = this.matrix, r = e.distance || n.far;
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), Ws.setFromMatrixPosition(e.matrixWorld), n.position.copy(Ws), ga.copy(n.position), ga.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(ga), n.updateMatrixWorld(), s.makeTranslation(-Ws.x, -Ws.y, -Ws.z), _u.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(_u);
  }
}
class Ks extends To {
  constructor(e, t, n = 0, s = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = s, this.shadow = new Gy();
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
class Wy extends dl {
  constructor() {
    super(new ol(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class ka extends To {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(St.DEFAULT_UP), this.updateMatrix(), this.target = new St(), this.shadow = new Wy();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class jy extends To {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class er {
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
class Xy extends Ns {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, s) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, o = hi.get(e);
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
      return hi.add(e, c), t && t(c), r.manager.itemEnd(e), c;
    }).catch(function(c) {
      s && s(c), hi.remove(e), r.manager.itemError(e), r.manager.itemEnd(e);
    });
    hi.add(e, l), r.manager.itemStart(e);
  }
}
class qy {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = vu(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
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
      const t = vu();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function vu() {
  return (typeof performance > "u" ? Date : performance).now();
}
class Yy {
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
    En.slerpFlat(e, t, e, t, e, n, s);
  }
  _slerpAdditive(e, t, n, s, r) {
    const o = this._workIndex * r;
    En.multiplyQuaternionsFlat(e, o, e, t, e, n), En.slerpFlat(e, t, e, t, e, o, s);
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
const hl = "\\[\\]\\.:\\/", $y = new RegExp("[" + hl + "]", "g"), fl = "[^" + hl + "]", Ky = "[^" + hl.replace("\\.", "") + "]", Jy = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", fl), Zy = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", Ky), Qy = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", fl), ex = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", fl), tx = new RegExp(
  "^" + Jy + Zy + Qy + ex + "$"
), nx = ["material", "materials", "bones", "map"];
class ix {
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
    return e.replace(/\s/g, "_").replace($y, "");
  }
  static parseTrackName(e) {
    const t = tx.exec(e);
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
      nx.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, s), n.objectName = r);
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
ht.Composite = ix;
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
class sx {
  constructor(e, t, n = null, s = t.blendMode) {
    this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = s;
    const r = t.tracks, o = r.length, a = new Array(o), l = {
      endingStart: fs,
      endingEnd: fs
    };
    for (let c = 0; c !== o; ++c) {
      const u = r[c].createInterpolant(null);
      a[c] = u, u.settings = l;
    }
    this._interpolantSettings = l, this._interpolants = a, this._propertyBindings = new Array(o), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Bp, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
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
        case kp:
          for (let u = 0, d = l.length; u !== d; ++u)
            l[u].evaluate(o), c[u].accumulateAdditive(a);
          break;
        case nl:
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
    const o = n === Vp;
    if (e === 0)
      return r === -1 ? s : o && (r & 1) === 1 ? t - s : s;
    if (n === Fp) {
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
    n ? (s.endingStart = ps, s.endingEnd = ps) : (e ? s.endingStart = this.zeroSlopeAtStart ? ps : fs : s.endingStart = ao, t ? s.endingEnd = this.zeroSlopeAtEnd ? ps : fs : s.endingEnd = ao);
  }
  _scheduleFading(e, t, n) {
    const s = this._mixer, r = s.time;
    let o = this._weightInterpolant;
    o === null && (o = s._lendControlInterpolant(), this._weightInterpolant = o);
    const a = o.parameterPositions, l = o.sampleValues;
    return a[0] = r, l[0] = t, a[1] = r + e, l[1] = n, this;
  }
}
const rx = new Float32Array(1);
class za extends Xi {
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
        g = new Yy(
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
    return n === void 0 && (n = new Wd(
      new Float32Array(2),
      new Float32Array(2),
      1,
      rx
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
    let o = typeof e == "string" ? Va.findByName(s, e) : e;
    const a = o !== null ? o.uuid : e, l = this._actionsByClip[a];
    let c = null;
    if (n === void 0 && (o !== null ? n = o.blendMode : n = nl), l !== void 0) {
      const d = l.actionByRoot[r];
      if (d !== void 0 && d.blendMode === n)
        return d;
      c = l.knownActions[0], o === null && (o = c._clip);
    }
    if (o === null) return null;
    const u = new sx(this, o, t, n);
    return this._bindAction(u, c), this._addInactiveAction(u, a, r), u;
  }
  // get an existing action
  existingAction(e, t) {
    const n = t || this._root, s = n.uuid, r = typeof e == "string" ? Va.findByName(n, e) : e, o = r ? r.uuid : e, a = this._actionsByClip[o];
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
  revision: el
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = el);
function yu(i, e) {
  if (e === zp)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), i;
  if (e === Ia || e === _d) {
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
    if (e === Ia)
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
class Ha extends Ns {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new ux(t);
    }), this.register(function(t) {
      return new yx(t);
    }), this.register(function(t) {
      return new xx(t);
    }), this.register(function(t) {
      return new Ex(t);
    }), this.register(function(t) {
      return new hx(t);
    }), this.register(function(t) {
      return new fx(t);
    }), this.register(function(t) {
      return new px(t);
    }), this.register(function(t) {
      return new mx(t);
    }), this.register(function(t) {
      return new cx(t);
    }), this.register(function(t) {
      return new gx(t);
    }), this.register(function(t) {
      return new dx(t);
    }), this.register(function(t) {
      return new vx(t);
    }), this.register(function(t) {
      return new _x(t);
    }), this.register(function(t) {
      return new ax(t);
    }), this.register(function(t) {
      return new Sx(t);
    }), this.register(function(t) {
      return new Mx(t);
    });
  }
  load(e, t, n, s) {
    const r = this;
    let o;
    if (this.resourcePath !== "")
      o = this.resourcePath;
    else if (this.path !== "") {
      const c = er.extractUrlBase(e);
      o = er.resolveURL(c, this.path);
    } else
      o = er.extractUrlBase(e);
    this.manager.itemStart(e);
    const a = function(c) {
      s ? s(c) : console.error(c), r.manager.itemError(e), r.manager.itemEnd(e);
    }, l = new Xd(this.manager);
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
      if (l.decode(new Uint8Array(e, 0, 4)) === Yd) {
        try {
          o[rt.KHR_BINARY_GLTF] = new Ax(e);
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
    const c = new Fx(r, {
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
            o[d] = new lx();
            break;
          case rt.KHR_DRACO_MESH_COMPRESSION:
            o[d] = new Tx(r, this.dracoLoader);
            break;
          case rt.KHR_TEXTURE_TRANSFORM:
            o[d] = new bx();
            break;
          case rt.KHR_MESH_QUANTIZATION:
            o[d] = new wx();
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
function ox() {
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
class ax {
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
    const u = new Xe(16777215);
    l.color !== void 0 && u.setRGB(l.color[0], l.color[1], l.color[2], Nt);
    const d = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new ka(u), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new Ks(u), c.distance = d;
        break;
      case "spot":
        c = new qd(u), c.distance = d, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, ci(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), s = Promise.resolve(c), t.cache.add(n, s), s;
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
class lx {
  constructor() {
    this.name = rt.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Di;
  }
  extendParams(e, t, n) {
    const s = [];
    e.color = new Xe(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const o = r.baseColorFactor;
        e.color.setRGB(o[0], o[1], o[2], Nt), e.opacity = o[3];
      }
      r.baseColorTexture !== void 0 && s.push(n.assignTexture(e, "map", r.baseColorTexture, Et));
    }
    return Promise.all(s);
  }
}
class cx {
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
class ux {
  constructor(e) {
    this.parser = e, this.name = rt.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yn;
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
class dx {
  constructor(e) {
    this.parser = e, this.name = rt.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class hx {
  constructor(e) {
    this.parser = e, this.name = rt.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const r = [];
    t.sheenColor = new Xe(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const o = s.extensions[this.name];
    if (o.sheenColorFactor !== void 0) {
      const a = o.sheenColorFactor;
      t.sheenColor.setRGB(a[0], a[1], a[2], Nt);
    }
    return o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, Et)), o.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(r);
  }
}
class fx {
  constructor(e) {
    this.parser = e, this.name = rt.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && r.push(n.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(r);
  }
}
class px {
  constructor(e) {
    this.parser = e, this.name = rt.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && r.push(n.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
    const a = o.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Xe().setRGB(a[0], a[1], a[2], Nt), Promise.all(r);
  }
}
class mx {
  constructor(e) {
    this.parser = e, this.name = rt.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yn;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const r = s.extensions[this.name];
    return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class gx {
  constructor(e) {
    this.parser = e, this.name = rt.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && r.push(n.assignTexture(t, "specularIntensityMap", o.specularTexture));
    const a = o.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Xe().setRGB(a[0], a[1], a[2], Nt), o.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", o.specularColorTexture, Et)), Promise.all(r);
  }
}
class _x {
  constructor(e) {
    this.parser = e, this.name = rt.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    return t.bumpScale = o.bumpFactor !== void 0 ? o.bumpFactor : 1, o.bumpTexture !== void 0 && r.push(n.assignTexture(t, "bumpMap", o.bumpTexture)), Promise.all(r);
  }
}
class vx {
  constructor(e) {
    this.parser = e, this.name = rt.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const r = [], o = s.extensions[this.name];
    return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && r.push(n.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(r);
  }
}
class yx {
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
class xx {
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
class Ex {
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
class Sx {
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
class Mx {
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
        const _ = new nt(), p = new N(), m = new En(), x = new N(1, 1, 1), v = new by(g.geometry, g.material, h);
        for (let b = 0; b < h; b++)
          l.TRANSLATION && p.fromBufferAttribute(l.TRANSLATION, b), l.ROTATION && m.fromBufferAttribute(l.ROTATION, b), l.SCALE && x.fromBufferAttribute(l.SCALE, b), v.setMatrixAt(b, _.compose(p, m, x));
        for (const b in l)
          if (b === "_COLOR_0") {
            const R = l[b];
            v.instanceColor = new Fa(R.array, R.itemSize, R.normalized);
          } else b !== "TRANSLATION" && b !== "ROTATION" && b !== "SCALE" && g.geometry.setAttribute(b, l[b]);
        St.prototype.copy.call(v, g), this.parser.assignFinalMaterial(v), f.push(v);
      }
      return u.isGroup ? (u.clear(), u.add(...f), u) : f[0];
    }));
  }
}
const Yd = "glTF", js = 12, xu = { JSON: 1313821514, BIN: 5130562 };
class Ax {
  constructor(e) {
    this.name = rt.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, js), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== Yd)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const s = this.header.length - js, r = new DataView(e, js);
    let o = 0;
    for (; o < s; ) {
      const a = r.getUint32(o, !0);
      o += 4;
      const l = r.getUint32(o, !0);
      if (o += 4, l === xu.JSON) {
        const c = new Uint8Array(e, js + o, a);
        this.content = n.decode(c);
      } else if (l === xu.BIN) {
        const c = js + o;
        this.body = e.slice(c, c + a);
      }
      o += a;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Tx {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = rt.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, s = this.dracoLoader, r = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, l = {}, c = {};
    for (const u in o) {
      const d = Ga[u] || u.toLowerCase();
      a[d] = o[u];
    }
    for (const u in e.attributes) {
      const d = Ga[u] || u.toLowerCase();
      if (o[u] !== void 0) {
        const h = n.accessors[e.attributes[u]], f = ys[h.componentType];
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
class bx {
  constructor() {
    this.name = rt.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class wx {
  constructor() {
    this.name = rt.KHR_MESH_QUANTIZATION;
  }
}
class $d extends fr {
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
const Rx = new En();
class Cx extends $d {
  interpolate_(e, t, n, s) {
    const r = super.interpolate_(e, t, n, s);
    return Rx.fromArray(r).normalize().toArray(r), r;
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
}, ys = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, Eu = {
  9728: Ut,
  9729: Kt,
  9984: Pa,
  9985: cd,
  9986: Qr,
  9987: zi
}, Su = {
  33071: dn,
  33648: oo,
  10497: Ms
}, _a = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Ga = {
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
}, si = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Lx = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: Ts,
  STEP: sr
}, va = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Px(i) {
  return i.DefaultMaterial === void 0 && (i.DefaultMaterial = new jt({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: Xn
  })), i.DefaultMaterial;
}
function Ti(i, e, t) {
  for (const n in t.extensions)
    i[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function ci(i, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(i.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Ix(i, e, t) {
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
function Dx(i, e) {
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
function Ux(i) {
  let e;
  const t = i.extensions && i.extensions[rt.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + ya(t.attributes) : e = i.indices + ":" + ya(i.attributes) + ":" + i.mode, i.targets !== void 0)
    for (let n = 0, s = i.targets.length; n < s; n++)
      e += ":" + ya(i.targets[n]);
  return e;
}
function ya(i) {
  let e = "";
  const t = Object.keys(i).sort();
  for (let n = 0, s = t.length; n < s; n++)
    e += t[n] + ":" + i[t[n]] + ";";
  return e;
}
function Wa(i) {
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
function Nx(i) {
  return i.search(/\.jpe?g($|\?)/i) > 0 || i.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : i.search(/\.webp($|\?)/i) > 0 || i.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const Ox = new nt();
class Fx {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new ox(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, s = !1, r = -1;
    typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, s = navigator.userAgent.indexOf("Firefox") > -1, r = s ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || s && r < 98 ? this.textureLoader = new zy(this.options.manager) : this.textureLoader = new Xy(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Xd(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
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
      return Ti(r, a, s), ci(a, s), Promise.all(n._invokeAll(function(l) {
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
      n.load(er.resolveURL(t.uri, s.path), r, void 0, function() {
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
      const o = _a[s.type], a = ys[s.componentType], l = s.normalized === !0, c = new a(s.count * o);
      return Promise.resolve(new qt(c, o, l));
    }
    const r = [];
    return s.bufferView !== void 0 ? r.push(this.getDependency("bufferView", s.bufferView)) : r.push(null), s.sparse !== void 0 && (r.push(this.getDependency("bufferView", s.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", s.sparse.values.bufferView))), Promise.all(r).then(function(o) {
      const a = o[0], l = _a[s.type], c = ys[s.componentType], u = c.BYTES_PER_ELEMENT, d = u * l, h = s.byteOffset || 0, f = s.bufferView !== void 0 ? n.bufferViews[s.bufferView].byteStride : void 0, g = s.normalized === !0;
      let _, p;
      if (f && f !== d) {
        const m = Math.floor(h / f), x = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + m + ":" + s.count;
        let v = t.cache.get(x);
        v || (_ = new c(a, m * f, s.count * f / u), v = new xy(_, f / u), t.cache.add(x, v)), p = new ll(v, l, h % f / u, g);
      } else
        a === null ? _ = new c(s.count * l) : _ = new c(a, h, s.count * l), p = new qt(_, l, g);
      if (s.sparse !== void 0) {
        const m = _a.SCALAR, x = ys[s.sparse.indices.componentType], v = s.sparse.indices.byteOffset || 0, b = s.sparse.values.byteOffset || 0, R = new x(o[1], v, s.sparse.count * m), A = new c(o[2], b, s.sparse.count * l);
        a !== null && (p = new qt(p.array.slice(), p.itemSize, p.normalized));
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
      return u.magFilter = Eu[h.magFilter] || Kt, u.minFilter = Eu[h.minFilter] || zi, u.wrapS = Su[h.wrapS] || Ms, u.wrapT = Su[h.wrapT] || Ms, s.associations.set(u, { textures: e }), u;
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
        }), t.load(er.resolveURL(d, r.path), g, void 0, f);
      });
    }).then(function(d) {
      return c === !0 && a.revokeObjectURL(l), d.userData.mimeType = o.mimeType || Nx(o.uri), d;
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
      l || (l = new Hd(), In.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = !1, this.cache.add(a, l)), n = l;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new zd(), In.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(a, l)), n = l;
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
    return jt;
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
      if (a.color = new Xe(1, 1, 1), a.opacity = 1, Array.isArray(d.baseColorFactor)) {
        const h = d.baseColorFactor;
        a.color.setRGB(h[0], h[1], h[2], Nt), a.opacity = h[3];
      }
      d.baseColorTexture !== void 0 && c.push(t.assignTexture(a, "map", d.baseColorTexture, Et)), a.metalness = d.metallicFactor !== void 0 ? d.metallicFactor : 1, a.roughness = d.roughnessFactor !== void 0 ? d.roughnessFactor : 1, d.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(a, "metalnessMap", d.metallicRoughnessTexture)), c.push(t.assignTexture(a, "roughnessMap", d.metallicRoughnessTexture))), o = this._invokeOne(function(h) {
        return h.getMaterialType && h.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(h) {
        return h.extendMaterialParams && h.extendMaterialParams(e, a);
      })));
    }
    r.doubleSided === !0 && (a.side = Ln);
    const u = r.alphaMode || va.OPAQUE;
    if (u === va.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, u === va.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && o !== Di && (c.push(t.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new ot(1, 1), r.normalTexture.scale !== void 0)) {
      const d = r.normalTexture.scale;
      a.normalScale.set(d, d);
    }
    if (r.occlusionTexture !== void 0 && o !== Di && (c.push(t.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && o !== Di) {
      const d = r.emissiveFactor;
      a.emissive = new Xe().setRGB(d[0], d[1], d[2], Nt);
    }
    return r.emissiveTexture !== void 0 && o !== Di && c.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, Et)), Promise.all(c).then(function() {
      const d = new o(a);
      return r.name && (d.name = r.name), ci(d, r), t.associations.set(d, { materials: e }), r.extensions && Ti(s, d, r), d;
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
        return Mu(l, a, t);
      });
    }
    const o = [];
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], u = Ux(c), d = s[u];
      if (d)
        o.push(d.promise);
      else {
        let h;
        c.extensions && c.extensions[rt.KHR_DRACO_MESH_COMPRESSION] ? h = r(c) : h = Mu(new Mn(), c, t), s[u] = { primitive: c, promise: h }, o.push(h);
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
      const u = o[l].material === void 0 ? Px(this.cache) : this.getDependency("material", o[l].material);
      a.push(u);
    }
    return a.push(t.loadGeometries(o)), Promise.all(a).then(function(l) {
      const c = l.slice(0, l.length - 1), u = l[l.length - 1], d = [];
      for (let f = 0, g = u.length; f < g; f++) {
        const _ = u[f], p = o[f];
        let m;
        const x = c[f];
        if (p.mode === cn.TRIANGLES || p.mode === cn.TRIANGLE_STRIP || p.mode === cn.TRIANGLE_FAN || p.mode === void 0)
          m = r.isSkinnedMesh === !0 ? new Sy(_, x) : new Ke(_, x), m.isSkinnedMesh === !0 && m.normalizeSkinWeights(), p.mode === cn.TRIANGLE_STRIP ? m.geometry = yu(m.geometry, _d) : p.mode === cn.TRIANGLE_FAN && (m.geometry = yu(m.geometry, Ia));
        else if (p.mode === cn.LINES)
          m = new wy(_, x);
        else if (p.mode === cn.LINE_STRIP)
          m = new ul(_, x);
        else if (p.mode === cn.LINE_LOOP)
          m = new Ry(_, x);
        else if (p.mode === cn.POINTS)
          m = new Cy(_, x);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
        Object.keys(m.geometry.morphAttributes).length > 0 && Dx(m, r), m.name = t.createUniqueName(r.name || "mesh_" + e), ci(m, r), p.extensions && Ti(s, m, p), t.assignFinalMaterial(m), d.push(m);
      }
      for (let f = 0, g = d.length; f < g; f++)
        t.associations.set(d[f], {
          meshes: e,
          primitives: f
        });
      if (d.length === 1)
        return r.extensions && Ti(s, d[0], r), d[0];
      const h = new Ui();
      r.extensions && Ti(s, h, r), t.associations.set(h, { meshes: e });
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
    return n.type === "perspective" ? t = new Xt(hm.radToDeg(s.yfov), s.aspectRatio || 1, s.znear || 1, s.zfar || 2e6) : n.type === "orthographic" && (t = new ol(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)), n.name && (t.name = this.createUniqueName(n.name)), ci(t, n), Promise.resolve(t);
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
      return new cl(a, l);
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
      return new Va(r, void 0, m);
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
        f.isSkinnedMesh && f.bind(h, Ox);
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
      if (r.isBone === !0 ? u = new kd() : c.length > 1 ? u = new Ui() : c.length === 1 ? u = c[0] : u = new St(), u !== c[0])
        for (let d = 0, h = c.length; d < h; d++)
          u.add(c[d]);
      if (r.name && (u.userData.name = r.name, u.name = o), ci(u, r), r.extensions && Ti(n, u, r), r.matrix !== void 0) {
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
    const t = this.extensions, n = this.json.scenes[e], s = this, r = new Ui();
    n.name && (r.name = s.createUniqueName(n.name)), ci(r, n), n.extensions && Ti(t, r, n);
    const o = n.nodes || [], a = [];
    for (let l = 0, c = o.length; l < c; l++)
      a.push(s.getDependency("node", o[l]));
    return Promise.all(a).then(function(l) {
      for (let u = 0, d = l.length; u < d; u++)
        r.add(l[u]);
      const c = (u) => {
        const d = /* @__PURE__ */ new Map();
        for (const [h, f] of s.associations)
          (h instanceof In || h instanceof Ft) && d.set(h, f);
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
    si[r.path] === si.weights ? e.traverse(function(h) {
      h.morphTargetInfluences && l.push(h.name ? h.name : h.uuid);
    }) : l.push(a);
    let c;
    switch (si[r.path]) {
      case si.weights:
        c = Rs;
        break;
      case si.rotation:
        c = Wi;
        break;
      case si.position:
      case si.scale:
        c = Cs;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = Rs;
            break;
          case 2:
          case 3:
          default:
            c = Cs;
            break;
        }
        break;
    }
    const u = s.interpolation !== void 0 ? Lx[s.interpolation] : Ts, d = this._getArrayFromAccessor(n);
    for (let h = 0, f = l.length; h < f; h++) {
      const g = new c(
        l[h] + "." + si[r.path],
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
      const n = Wa(t.constructor), s = new Float32Array(t.length);
      for (let r = 0, o = t.length; r < o; r++)
        s[r] = t[r] * n;
      t = s;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const s = this instanceof Wi ? Cx : $d;
      return new s(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function Bx(i, e, t) {
  const n = e.attributes, s = new qn();
  if (n.POSITION !== void 0) {
    const a = t.json.accessors[n.POSITION], l = a.min, c = a.max;
    if (l !== void 0 && c !== void 0) {
      if (s.set(
        new N(l[0], l[1], l[2]),
        new N(c[0], c[1], c[2])
      ), a.normalized) {
        const u = Wa(ys[a.componentType]);
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
    const a = new N(), l = new N();
    for (let c = 0, u = r.length; c < u; c++) {
      const d = r[c];
      if (d.POSITION !== void 0) {
        const h = t.json.accessors[d.POSITION], f = h.min, g = h.max;
        if (f !== void 0 && g !== void 0) {
          if (l.setX(Math.max(Math.abs(f[0]), Math.abs(g[0]))), l.setY(Math.max(Math.abs(f[1]), Math.abs(g[1]))), l.setZ(Math.max(Math.abs(f[2]), Math.abs(g[2]))), h.normalized) {
            const _ = Wa(ys[h.componentType]);
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
  const o = new Dn();
  s.getCenter(o.center), o.radius = s.min.distanceTo(s.max) / 2, i.boundingSphere = o;
}
function Mu(i, e, t) {
  const n = e.attributes, s = [];
  function r(o, a) {
    return t.getDependency("accessor", o).then(function(l) {
      i.setAttribute(a, l);
    });
  }
  for (const o in n) {
    const a = Ga[o] || o.toLowerCase();
    a in i.attributes || s.push(r(n[o], a));
  }
  if (e.indices !== void 0 && !i.index) {
    const o = t.getDependency("accessor", e.indices).then(function(a) {
      i.setIndex(a);
    });
    s.push(o);
  }
  return ft.workingColorSpace !== Nt && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`), ci(i, e), Bx(i, e, t), Promise.all(s).then(function() {
    return e.targets !== void 0 ? Ix(i, e.targets, t) : i;
  });
}
const to = {
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
function $M(i) {
  return to[i];
}
function Vx(i, e) {
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
  return kx(t, n, s);
}
function kx(i, e, t) {
  const n = { time: i.time + (e.time - i.time) * t };
  return (i.leftArm || e.leftArm) && (n.leftArm = Au(i.leftArm, e.leftArm, t)), (i.rightArm || e.rightArm) && (n.rightArm = Au(i.rightArm, e.rightArm, t)), (i.head || e.head) && (n.head = zx(i.head, e.head, t)), (i.body || e.body) && (n.body = Hx(i.body, e.body, t)), n;
}
function Au(i, e, t) {
  const n = { x: 0, y: 0, z: 0 };
  return {
    shoulderRotation: tr(
      (i == null ? void 0 : i.shoulderRotation) || n,
      (e == null ? void 0 : e.shoulderRotation) || n,
      t
    ),
    elbowRotation: tr(
      (i == null ? void 0 : i.elbowRotation) || n,
      (e == null ? void 0 : e.elbowRotation) || n,
      t
    ),
    wristRotation: tr(
      (i == null ? void 0 : i.wristRotation) || n,
      (e == null ? void 0 : e.wristRotation) || n,
      t
    )
  };
}
function zx(i, e, t) {
  var n, s, r, o, a, l;
  return {
    rotation: tr(
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
function Hx(i, e, t) {
  var n, s, r, o, a, l;
  return {
    rotation: tr(
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
function tr(i, e, t) {
  return {
    x: i.x + (e.x - i.x) * t,
    y: i.y + (e.y - i.y) * t,
    z: i.z + (e.z - i.z) * t
  };
}
const An = Ne({
  currentGesture: "idle",
  intensity: 0,
  progress: 0
}), Tn = Ne([]), ri = Ne(!1);
let Gr = null, Tu = 0;
function Kd() {
  const i = We(() => An.value.currentGesture), e = We(() => An.value.intensity), t = We(() => An.value.progress), n = We(() => ri.value);
  function s(d, h = 1) {
    const f = to[d];
    f && (Tn.value.push({
      time: 0,
      type: d,
      intensity: Math.min(1, Math.max(0, h)),
      duration: f.duration
    }), ri.value || o());
  }
  function r(d) {
    Tn.value = [...d], d.length > 0 && !ri.value && o();
  }
  function o() {
    if (Tn.value.length === 0) {
      ri.value = !1, An.value = {
        currentGesture: "idle",
        intensity: 0,
        progress: 0
      };
      return;
    }
    const d = Tn.value[0];
    An.value.currentGesture = d.type, An.value.intensity = d.intensity, Tu = performance.now(), ri.value = !0, a();
  }
  function a() {
    if (Tn.value.length === 0) {
      ri.value = !1;
      return;
    }
    const d = Tn.value[0], h = to[d.type], f = (performance.now() - Tu) / 1e3, g = Math.min(1, f / d.duration);
    if (An.value.progress = g, g >= 1) {
      Tn.value.shift(), Tn.value.length > 0 ? o() : h.loop ? (Tn.value.push(d), o()) : (ri.value = !1, An.value = {
        currentGesture: "idle",
        intensity: 0,
        progress: 0
      });
      return;
    }
    Gr = requestAnimationFrame(a);
  }
  function l() {
    const { currentGesture: d, progress: h, intensity: f } = An.value, g = to[d];
    if (!g)
      return { time: 0 };
    const _ = Vx(g.keyframes, h);
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
    Gr && (cancelAnimationFrame(Gr), Gr = null), Tn.value = [], ri.value = !1, An.value = {
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
const Gx = { class: "liya-ai-env-vuejs-full-body-avatar" }, Wx = /* @__PURE__ */ or({
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
    function le(re, ee) {
      return new Promise((ae, we) => {
        new Ha().load(
          re,
          (ge) => {
            o = ge.scene, ee.add(o), l = [], p = null, m = null, x = null, o.traverse((Ae) => {
              Ae instanceof Ke && (Ae.morphTargetInfluences && l.push(Ae), Ae.name === "Wolf3D_Outfit_Top" ? p = Ae : Ae.name === "Wolf3D_Outfit_Bottom" ? m = Ae : Ae.name === "Wolf3D_Outfit_Footwear" && (x = Ae));
            }), L(o), ge.animations.length > 0 && (a = new za(o)), s("loaded"), ae();
          },
          (ge) => {
            if (ge.total > 0) {
              const Ae = ge.loaded / ge.total * 100;
              s("progress", Ae);
            }
          },
          (ge) => {
            s("error", ge), we(ge);
          }
        );
      });
    }
    function L(re) {
      re.traverse((ee) => {
        const ae = ee.name.toLowerCase();
        ae.includes("spine") && !u && (u = ee), ae.includes("head") && !d && (d = ee), (ae.includes("leftshoulder") || ae.includes("left_shoulder")) && (h = ee), (ae.includes("rightshoulder") || ae.includes("right_shoulder")) && (f = ee), (ae.includes("leftelbow") || ae.includes("left_elbow") || ae.includes("leftforearm")) && (g = ee), (ae.includes("rightelbow") || ae.includes("right_elbow") || ae.includes("rightforearm")) && (_ = ee);
      });
    }
    function P(re) {
      var Ae, F;
      if (!n.isSpeaking || n.visemes.length === 0) {
        I();
        return;
      }
      const ee = n.currentTime;
      let ae = 0;
      for (const Qe of n.visemes)
        if (ee >= Qe.time && ee < Qe.time + Qe.duration) {
          ae = Qe.viseme;
          break;
        }
      const we = J[ae] || [], Ce = ((Ae = n.animationConfig) == null ? void 0 : Ae.lipSyncIntensity) || 0.5, ge = ((F = n.animationConfig) == null ? void 0 : F.lipSyncSpeed) || 0.02;
      for (const Qe of l)
        if (!(!Qe.morphTargetDictionary || !Qe.morphTargetInfluences))
          for (const [Le, Ue] of Object.entries(Qe.morphTargetDictionary)) {
            const Te = we.includes(Le) ? Ce : 0, lt = c[Le] || 0, ke = lt + (Te - lt) * ge;
            Qe.morphTargetInfluences[Ue] = ke, c[Le] = ke;
          }
    }
    function I(re) {
      var ae;
      const ee = ((ae = n.animationConfig) == null ? void 0 : ae.lipSyncSpeed) || 0.02;
      for (const we of l)
        if (!(!we.morphTargetDictionary || !we.morphTargetInfluences)) {
          for (const [Ce, ge] of Object.entries(we.morphTargetDictionary))
            if (Ce.startsWith("mouth")) {
              const F = (c[Ce] || 0) * (1 - ee);
              we.morphTargetInfluences[ge] = F, c[Ce] = F;
            }
        }
    }
    function te(re, ee) {
      const ae = n.animationConfig || {}, we = ae.blinkSpeed || 0.25, Ce = ae.blinkIntervalMin || 1500, ge = ae.blinkIntervalMax || 3500;
      if (!b && ee - v > A && (b = !0, R = 0, v = ee, A = Ce + Math.random() * (ge - Ce)), b) {
        R += we;
        let Ae = 0;
        R < 0.5 ? Ae = R * 2 : Ae = 1 - (R - 0.5) * 2;
        for (const F of l) {
          if (!F.morphTargetDictionary || !F.morphTargetInfluences) continue;
          const Qe = F.morphTargetDictionary.eyeBlinkLeft, Le = F.morphTargetDictionary.eyeBlinkRight;
          Qe !== void 0 && (F.morphTargetInfluences[Qe] = Ae), Le !== void 0 && (F.morphTargetInfluences[Le] = Ae);
        }
        R >= 1 && (b = !1);
      }
    }
    function V(re, ee) {
      const ae = n.animationConfig || {}, we = ae.eyeMoveSpeed || 0.12, Ce = ae.eyeMoveIntervalMin || 500, ge = ae.eyeMoveIntervalMax || 1500, Ae = ae.eyeMoveRange || 0.4;
      ee - E > T && (w = {
        x: (Math.random() - 0.5) * Ae,
        y: (Math.random() - 0.5) * Ae * 0.5
      }, E = ee, T = Ce + Math.random() * (ge - Ce)), H.x += (w.x - H.x) * we, H.y += (w.y - H.y) * we;
      for (const F of l) {
        if (!F.morphTargetDictionary || !F.morphTargetInfluences) continue;
        const Qe = F.morphTargetDictionary.eyeLookOutLeft, Le = F.morphTargetDictionary.eyeLookOutRight, Ue = F.morphTargetDictionary.eyeLookUpLeft, Te = F.morphTargetDictionary.eyeLookDownLeft;
        H.x > 0 && Le !== void 0 && (F.morphTargetInfluences[Le] = H.x), H.x < 0 && Qe !== void 0 && (F.morphTargetInfluences[Qe] = -H.x), H.y > 0 && Ue !== void 0 && (F.morphTargetInfluences[Ue] = H.y), H.y < 0 && Te !== void 0 && (F.morphTargetInfluences[Te] = -H.y);
      }
    }
    function q(re, ee) {
      const ae = n.animationConfig || {}, we = ae.breathingSpeed || 0.4, Ce = ae.breathingIntensity || 0.015;
      G += re * we;
      const ge = Math.sin(G) * Ce;
      u && (u.position.y += ge * 0.01);
    }
    function Y(re) {
      var ae, we, Ce, ge;
      const ee = r();
      ee.leftArm && h && ee.leftArm.shoulderRotation && (h.rotation.x = ee.leftArm.shoulderRotation.x, h.rotation.y = ee.leftArm.shoulderRotation.y, h.rotation.z = ee.leftArm.shoulderRotation.z), ee.rightArm && f && ee.rightArm.shoulderRotation && (f.rotation.x = ee.rightArm.shoulderRotation.x, f.rotation.y = ee.rightArm.shoulderRotation.y, f.rotation.z = ee.rightArm.shoulderRotation.z), (ae = ee.leftArm) != null && ae.elbowRotation && g && (g.rotation.x = ee.leftArm.elbowRotation.x), (we = ee.rightArm) != null && we.elbowRotation && _ && (_.rotation.x = ee.rightArm.elbowRotation.x), (Ce = ee.head) != null && Ce.rotation && d && (d.rotation.x = ee.head.rotation.x, d.rotation.y = ee.head.rotation.y, d.rotation.z = ee.head.rotation.z), (ge = ee.body) != null && ge.lean && u && (u.rotation.x = ee.body.lean.x, u.rotation.z = ee.body.lean.z);
    }
    function Q(re, ee) {
      o && (a && a.update(re), P(), te(re, ee), V(re, ee), q(re), Y());
    }
    function he() {
      return o;
    }
    function z() {
      o && o.traverse((re) => {
        var ee, ae;
        re instanceof Ke && ((ee = re.geometry) == null || ee.dispose(), Array.isArray(re.material) ? re.material.forEach((we) => we.dispose()) : (ae = re.material) == null || ae.dispose());
      }), a = null, l = [];
    }
    function ne(re) {
      p != null && p.material && p.material.color.set(re.top), m != null && m.material && m.material.color.set(re.bottom), x != null && x.material && x.material.color.set(re.footwear);
    }
    return e({
      loadModel: le,
      update: Q,
      getModel: he,
      dispose: z,
      applyOutfitColors: ne
    }), (re, ee) => (De(), Fe("div", Gx, [
      lh(re.$slots, "default", {}, void 0, !0)
    ]));
  }
}), bo = (i, e) => {
  const t = i.__vccOpts || i;
  for (const [n, s] of e)
    t[n] = s;
  return t;
}, KM = /* @__PURE__ */ bo(Wx, [["__scopeId", "data-v-148895f1"]]), jx = {
  key: 0,
  class: "liya-ai-env-vuejs-board liya-ai-env-vuejs-presentation-board"
}, Xx = ["src", "alt"], qx = { class: "liya-ai-env-vuejs-presentation-board__info" }, Yx = {
  key: 1,
  class: "liya-ai-env-vuejs-loading"
}, $x = { class: "liya-ai-env-vuejs-loading__progress" }, Kx = /* @__PURE__ */ or({
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
    const n = i, s = We(() => {
      var oe;
      return !!((oe = n.presentationResult) != null && oe.page_image_url);
    }), r = We(() => {
      var D;
      return (((D = n.presentationResult) == null ? void 0 : D.page_image_url) || "").replace(/^http:\/\//i, "https://");
    }), o = We(() => n.presentationResult ? `${n.presentationResult.presentation_title} — ${n.presentationResult.page_number}/${n.presentationResult.total_pages}` : ""), a = t, { getCurrentKeyframe: l, setGesturesFromApi: c } = Kd(), u = Ne(null), d = Ne(!0), h = Ne(0);
    let f = null, g = null, _ = null, p = null, m = null, x = null, v = null, b = null, R = [], A = {}, w = null, H = null, E = null, T = null, G = null, J = null, le = null, L = null, P = null;
    const I = typeof navigator < "u" && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    let te = !1, V = 0, q = !1, Y = 0, Q = 3e3, he = { x: 0, y: 0 }, z = { x: 0, y: 0 }, ne = 0, re = 2e3, ee = 0;
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
    function we() {
      if (!u.value) return;
      f = new yy(), f.background = new Xe(1710638);
      const { position: oe, lookAt: D, fov: k } = n.cameraConfig, ie = u.value.clientWidth / u.value.clientHeight;
      g = new Xt(k || 45, ie, 0.1, 1e3), g.position.set(oe.x, oe.y, oe.z), g.lookAt(D.x, D.y, D.z), _ = new Vd({
        antialias: !I,
        // Safari: disable antialiasing for performance
        alpha: !0,
        powerPreference: I ? "low-power" : "high-performance",
        preserveDrawingBuffer: I
        // Safari: required for WebGL stability
      }), _.setSize(
        u.value.clientWidth,
        u.value.clientHeight
      );
      const Se = I ? 1.5 : 2;
      _.setPixelRatio(Math.min(window.devicePixelRatio, Se)), _.outputColorSpace = Et, _.toneMapping = ad, _.toneMappingExposure = 1.2, _.shadowMap.enabled = !I, _.shadowMap.type = rd, u.value.appendChild(_.domElement), Ce(), p = new qy(), ge(), window.addEventListener("resize", de), te = !0, Ue();
    }
    function Ce() {
      if (!f) return;
      const oe = new jy(8951976, 0.7);
      f.add(oe);
      const D = new ka(14740212, 1.1);
      D.position.set(2, 6, 3), D.castShadow = !0, D.shadow.mapSize.width = 2048, D.shadow.mapSize.height = 2048, D.shadow.camera.near = 0.5, D.shadow.camera.far = 50, D.shadow.camera.left = -10, D.shadow.camera.right = 10, D.shadow.camera.top = 8, D.shadow.camera.bottom = -4, D.shadow.bias = -1e-3, f.add(D);
      const k = new ka(9478320, 0.5);
      k.position.set(-5, 3, 2), f.add(k);
      const ie = new qd(15791868, 1.1, 12, Math.PI / 5, 0.6, 1);
      ie.position.set(0, 5.4, -1), ie.target.position.set(0, 2.5, -3.9), f.add(ie), f.add(ie.target);
      const Se = new Ks(54442, 0.35, 10, 2);
      Se.position.set(-6, 1.5, -3), f.add(Se);
      const $ = new Ks(54442, 0.35, 10, 2);
      $.position.set(6, 1.5, -3), f.add($);
      const xe = new Ks(47252, 0.25, 15, 2);
      xe.position.set(0, 5.5, -2), f.add(xe);
      const Ee = new Ks(8427696, 0.3, 10, 2);
      Ee.position.set(0, 0.2, -1), f.add(Ee);
    }
    async function ge() {
      const oe = new Ha();
      let D = 0, k = 0;
      if (n.classroomModelUrl && k++, n.avatarModelUrl && k++, k === 0) {
        F(), d.value = !1, a("loaded");
        return;
      }
      try {
        n.classroomModelUrl ? await new Promise((ie, Se) => {
          oe.load(
            n.classroomModelUrl,
            ($) => {
              x = $.scene, x.traverse((xe) => {
                xe instanceof Ke && (xe.castShadow = !0, xe.receiveShadow = !0);
              }), f == null || f.add(x), D += 50, h.value = D, a("progress", D), ie();
            },
            ($) => {
              if ($.total > 0) {
                const xe = $.loaded / $.total * 50;
                h.value = xe, a("progress", xe);
              }
            },
            ($) => Se($)
          );
        }) : (F(), D += 50), n.avatarModelUrl && await new Promise((ie, Se) => {
          oe.load(
            n.avatarModelUrl,
            ($) => {
              v = $.scene;
              const xe = n.avatarPosition;
              v.position.set(xe.x, xe.y, xe.z), v.traverse((Ee) => {
                Ee instanceof Ke && (Ee.castShadow = !0, Ee.receiveShadow = !0, Ee.morphTargetInfluences && R.push(Ee));
              }), Qe(v), $.animations.length > 0 && (b = new za(v)), f == null || f.add(v), D += 50, h.value = D, a("progress", D), ie();
            },
            ($) => {
              if ($.total > 0) {
                const xe = 50 + $.loaded / $.total * 50;
                h.value = xe, a("progress", xe);
              }
            },
            ($) => Se($)
          );
        }), d.value = !1, a("loaded");
      } catch (ie) {
        a("error", ie), d.value = !1;
      }
    }
    async function Ae(oe) {
      if (!f || v) return;
      const D = new Ha();
      try {
        await new Promise((k, ie) => {
          D.load(
            oe,
            (Se) => {
              v = Se.scene, v.position.set(-1.8, 0, 0.8);
              const $ = n.cameraConfig.position, xe = v.position;
              v.rotation.y = Math.atan2(
                $.x - xe.x,
                $.z - xe.z
              ), v.scale.set(1.1, 1.1, 1.1), le = null, L = null, P = null, v.traverse((Ee) => {
                Ee instanceof Ke && (Ee.castShadow = !0, Ee.receiveShadow = !0, Ee.morphTargetInfluences && R.push(Ee), Ee.name === "Wolf3D_Outfit_Top" ? le = Ee : Ee.name === "Wolf3D_Outfit_Bottom" ? L = Ee : Ee.name === "Wolf3D_Outfit_Footwear" && (P = Ee));
              }), Qe(v), Se.animations.length > 0 && (b = new za(v)), f.add(v), a("loaded"), k();
            },
            void 0,
            (Se) => {
              ie(Se);
            }
          );
        });
      } catch {
      }
    }
    function F() {
      if (!f) return;
      const oe = new jt({
        color: 14212324,
        roughness: 0.45,
        metalness: 0.25
      }), D = new jt({
        color: 13160668,
        roughness: 0.4,
        metalness: 0.3
      }), k = new jt({
        color: 12635352,
        roughness: 0.04,
        metalness: 0.5
      }), ie = new jt({
        color: 13687008,
        roughness: 0.5,
        metalness: 0.2
      }), Se = new jt({
        color: 54442,
        emissive: 54442,
        emissiveIntensity: 0.6,
        roughness: 0.1,
        metalness: 0.3
      }), $ = new jt({
        color: 47252,
        emissive: 47252,
        emissiveIntensity: 0.3,
        roughness: 0.15,
        metalness: 0.25
      }), xe = new jt({
        color: 7899288,
        roughness: 0.08,
        metalness: 0.5
      }), Ee = new jt({
        color: 13160668,
        roughness: 0.08,
        metalness: 0.45
      }), Pe = new jt({
        color: 13687012,
        roughness: 0.25,
        metalness: 0.3
      }), Re = new ui(16, 12), Me = new Ke(Re, k);
      Me.rotation.x = -Math.PI / 2, Me.position.y = 0, Me.receiveShadow = !0, f.add(Me);
      const Ge = new Ke(
        new yt(12, 3e-3, 0.02),
        $
      );
      Ge.position.set(0, 2e-3, -3.2), f.add(Ge);
      const it = new ui(16, 6), ct = new Ke(it, oe);
      ct.position.set(0, 3, -4), ct.receiveShadow = !0, f.add(ct);
      const qe = new Ke(
        new yt(16, 1.5, 0.03),
        D
      );
      qe.position.set(0, 0.75, -3.97), f.add(qe);
      const fe = new ui(10, 6), C = new Ke(fe, oe.clone());
      C.position.set(-8, 3, 1), C.rotation.y = Math.PI / 2, C.receiveShadow = !0, f.add(C);
      const ve = new Ke(
        new yt(14, 0.02, 0.015),
        Se
      );
      ve.position.set(0, 5.1, -3.96), f.add(ve);
      const ye = new Ke(
        new yt(14, 0.015, 0.015),
        Se
      );
      ye.position.set(0, 1.52, -3.96), f.add(ye);
      const Be = new Ke(
        new yt(0.015, 3.6, 0.015),
        $
      );
      Be.position.set(-7, 3.3, -3.96), f.add(Be);
      const Ie = Be.clone();
      Ie.position.set(7, 3.3, -3.96), f.add(Ie);
      const at = new Ke(
        new yt(6.2, 3.4, 0.06),
        xe
      );
      at.position.set(0, 2.85, -3.92), at.castShadow = !0, f.add(at);
      const dt = new ui(5.8, 3.1), Mt = new jt({
        color: 16119280,
        emissive: 15790316,
        emissiveIntensity: 0.15,
        roughness: 0.05,
        metalness: 0.02
      }), wt = new Ke(dt, Mt);
      wt.position.set(0, 2.85, -3.88), f.add(wt);
      const ut = new yt(6.25, 0.04, 0.08), Rt = new yt(0.04, 3.45, 0.08), Yt = [
        { geo: ut, pos: [0, 4.575, -3.9] },
        { geo: ut, pos: [0, 1.125, -3.9] },
        { geo: Rt, pos: [-3.125, 2.85, -3.9] },
        { geo: Rt, pos: [3.125, 2.85, -3.9] }
      ];
      for (const B of Yt) {
        const me = new Ke(B.geo, Ee);
        me.position.set(B.pos[0], B.pos[1], B.pos[2]), f.add(me);
      }
      const _i = new yt(6, 0.01, 0.01), $n = new yt(0.01, 3.2, 0.01), Kn = [
        { geo: _i, pos: [0, 4.42, -3.87] },
        { geo: _i, pos: [0, 1.28, -3.87] },
        { geo: $n, pos: [-2.98, 2.85, -3.87] },
        { geo: $n, pos: [2.98, 2.85, -3.87] }
      ];
      for (const B of Kn) {
        const me = new Ke(B.geo, $);
        me.position.set(B.pos[0], B.pos[1], B.pos[2]), f.add(me);
      }
      for (let B = 0; B < 3; B++) {
        const me = new Ke(
          new yt(0.6, 2.5, 0.02),
          Pe
        );
        me.position.set(-5.5 + B * 0.75, 3, -3.97), f.add(me);
      }
      for (let B = 0; B < 3; B++) {
        const me = new Ke(
          new yt(0.6, 2.5, 0.02),
          Pe
        );
        me.position.set(4.75 + B * 0.75, 3, -3.97), f.add(me);
      }
      const Jn = new jt({
        color: 12109008,
        roughness: 0.08,
        metalness: 0.45
      }), mn = new Ke(
        new yt(1.8, 0.04, 0.7),
        Jn
      );
      mn.position.set(3.5, 0.75, -2.5), mn.castShadow = !0, mn.receiveShadow = !0, f.add(mn);
      const Zn = new Ke(
        new yt(1.8, 8e-3, 8e-3),
        $
      );
      Zn.position.set(3.5, 0.73, -2.15), f.add(Zn);
      const pe = new Ke(
        new po(0.04, 0.06, 0.73, 12),
        Ee
      );
      pe.position.set(3.5, 0.365, -2.5), pe.castShadow = !0, f.add(pe);
      const Z = new Ke(
        new po(0.25, 0.25, 0.02, 16),
        Ee
      );
      Z.position.set(3.5, 0.01, -2.5), f.add(Z);
      const be = new Ke(
        new yt(5, 0.05, 3),
        D
      );
      be.position.set(-0.5, 0.025, -2.5), be.receiveShadow = !0, f.add(be);
      const _t = new Ke(
        new yt(5, 0.01, 0.01),
        Se
      );
      _t.position.set(-0.5, 0.045, -1), f.add(_t);
      const S = new ui(16, 12), O = new Ke(S, ie);
      O.rotation.x = Math.PI / 2, O.position.set(0, 5.6, 0), f.add(O);
      const W = new Ke(
        new yt(14, 0.01, 0.01),
        $
      );
      W.position.set(0, 5.55, -3.96), f.add(W);
      const K = new jt({
        color: 13689072,
        emissive: 12638440,
        emissiveIntensity: 0.3,
        roughness: 0.1
      });
      for (let B = -1; B <= 1; B += 2) {
        const me = new Ke(
          new yt(0.08, 0.01, 4),
          K
        );
        me.position.set(B * 5, 5.58, -1), f.add(me);
      }
      f.background = new Xe(8951976);
    }
    function Qe(oe) {
      const D = [];
      oe.traverse((k) => {
        const ie = k.name.toLowerCase();
        D.push(k.name), ie.includes("spine") && !w && (w = k), ie.includes("head") && !H && (H = k), ie.includes("leftshoulder") && !E && (E = k), (ie.includes("leftarm") || ie.includes("left_arm") || ie.includes("leftupperarm")) && !G && (G = k), ie.includes("rightshoulder") && !T && (T = k), (ie.includes("rightarm") || ie.includes("right_arm") || ie.includes("rightupperarm")) && !J && (J = k);
      });
    }
    function Le() {
    }
    function Ue() {
      if (!te || (m = requestAnimationFrame(Ue), !p || !_ || !f || !g)) return;
      const oe = p.getDelta(), D = p.getElapsedTime() * 1e3;
      b && b.update(oe), v && (Te(), ke(oe, D), M(oe, D), y(oe), j()), _.render(f, g);
    }
    function Te(oe) {
      var xe, Ee;
      if (!n.isSpeaking || n.visemes.length === 0) {
        lt();
        return;
      }
      const D = n.currentTime;
      let k = 0;
      for (const Pe of n.visemes)
        if (D >= Pe.time && D < Pe.time + Pe.duration) {
          k = Pe.viseme;
          break;
        }
      const ie = ae[k] || [], Se = ((xe = n.animationConfig) == null ? void 0 : xe.lipSyncIntensity) || 0.5, $ = ((Ee = n.animationConfig) == null ? void 0 : Ee.lipSyncSpeed) || 0.02;
      for (const Pe of R)
        if (!(!Pe.morphTargetDictionary || !Pe.morphTargetInfluences))
          for (const [Re, Me] of Object.entries(Pe.morphTargetDictionary)) {
            const Ge = ie.includes(Re) ? Se : 0, it = A[Re] || 0, ct = it + (Ge - it) * $;
            Pe.morphTargetInfluences[Me] = ct, A[Re] = ct;
          }
    }
    function lt(oe) {
      for (const k of R)
        if (!(!k.morphTargetDictionary || !k.morphTargetInfluences)) {
          for (const [ie, Se] of Object.entries(k.morphTargetDictionary))
            if (ie.startsWith("mouth")) {
              const xe = (A[ie] || 0) * (1 - 0.02);
              k.morphTargetInfluences[Se] = xe, A[ie] = xe;
            }
        }
    }
    function ke(oe, D) {
      if (!q && D - V > Q && (q = !0, Y = 0, V = D, Q = 1500 + Math.random() * 2e3), q) {
        Y += 0.25;
        let $ = 0;
        Y < 0.5 ? $ = Y * 2 : $ = 1 - (Y - 0.5) * 2;
        for (const xe of R) {
          if (!xe.morphTargetDictionary || !xe.morphTargetInfluences) continue;
          const Ee = xe.morphTargetDictionary.eyeBlinkLeft, Pe = xe.morphTargetDictionary.eyeBlinkRight;
          Ee !== void 0 && (xe.morphTargetInfluences[Ee] = $), Pe !== void 0 && (xe.morphTargetInfluences[Pe] = $);
        }
        Y >= 1 && (q = !1);
      }
    }
    function M(oe, D) {
      D - ne > re && (he = {
        x: (Math.random() - 0.5) * 0.4,
        y: (Math.random() - 0.5) * 0.4 * 0.5
      }, ne = D, re = 500 + Math.random() * 1e3), z.x += (he.x - z.x) * 0.12, z.y += (he.y - z.y) * 0.12;
      for (const xe of R) {
        if (!xe.morphTargetDictionary || !xe.morphTargetInfluences) continue;
        const Ee = xe.morphTargetDictionary.eyeLookOutLeft, Pe = xe.morphTargetDictionary.eyeLookOutRight, Re = xe.morphTargetDictionary.eyeLookUpLeft, Me = xe.morphTargetDictionary.eyeLookDownLeft;
        z.x > 0 && Pe !== void 0 && (xe.morphTargetInfluences[Pe] = z.x), z.x < 0 && Ee !== void 0 && (xe.morphTargetInfluences[Ee] = -z.x), z.y > 0 && Re !== void 0 && (xe.morphTargetInfluences[Re] = z.y), z.y < 0 && Me !== void 0 && (xe.morphTargetInfluences[Me] = -z.y);
      }
    }
    function y(oe, D) {
      ee += oe * 0.4;
      const Se = Math.sin(ee) * 0.015;
      w && (w.position.y += Se * 0.01);
    }
    function j(oe, D) {
      var ie, Se;
      const k = l();
      (ie = k.head) != null && ie.rotation && H && H.rotation.set(
        k.head.rotation.x,
        k.head.rotation.y,
        k.head.rotation.z
      ), (Se = k.body) != null && Se.lean && w && (w.rotation.x = k.body.lean.x, w.rotation.z = k.body.lean.z);
    }
    function de() {
      if (!u.value || !g || !_) return;
      const oe = u.value.clientWidth, D = u.value.clientHeight;
      g.aspect = oe / D, g.updateProjectionMatrix(), _.setSize(oe, D);
    }
    function ce() {
      te = !1, m && (cancelAnimationFrame(m), m = null), window.removeEventListener("resize", de);
      const oe = (D) => {
        D.traverse((k) => {
          var ie, Se;
          k instanceof Ke && ((ie = k.geometry) == null || ie.dispose(), Array.isArray(k.material) ? k.material.forEach(($) => $.dispose()) : (Se = k.material) == null || Se.dispose());
        });
      };
      x && oe(x), v && oe(v), _ && (_.dispose(), _.forceContextLoss(), u.value && _.domElement.parentNode === u.value && u.value.removeChild(_.domElement)), f = null, g = null, _ = null, x = null, v = null, b = null, R = [], A = {}, w = null, H = null, E = null, T = null, G = null, J = null;
    }
    ja(() => {
      we();
    }), ar(() => {
      ce();
    });
    function ue(oe) {
      le != null && le.material && le.material.color.set(oe.top), L != null && L.material && L.material.color.set(oe.bottom), P != null && P.material && P.material.color.set(oe.footwear);
    }
    return e({
      applyOutfitColors: ue
    }), (oe, D) => (De(), Fe("div", {
      ref_key: "liyaAiEnvVuejsContainerRef",
      ref: u,
      class: "liya-ai-env-vuejs-classroom-scene"
    }, [
      s.value ? (De(), Fe("div", jx, [
        U("img", {
          src: r.value,
          alt: o.value,
          class: "liya-ai-env-vuejs-presentation-board__image"
        }, null, 8, Xx),
        U("div", qx, Ve(o.value), 1),
        D[0] || (D[0] = U("div", { class: "liya-ai-env-vuejs-board__frame" }, null, -1))
      ])) : xt("", !0),
      d.value ? (De(), Fe("div", Yx, [
        D[1] || (D[1] = U("div", { class: "liya-ai-env-vuejs-loading__spinner" }, null, -1)),
        D[2] || (D[2] = U("p", { class: "liya-ai-env-vuejs-loading__text" }, "Ortam yükleniyor...", -1)),
        U("div", $x, [
          U("div", {
            class: "liya-ai-env-vuejs-loading__progress-bar",
            style: Xa({ width: `${h.value}%` })
          }, null, 4)
        ])
      ])) : xt("", !0)
    ], 512));
  }
}), Jd = /* @__PURE__ */ bo(Kx, [["__scopeId", "data-v-6375b589"]]), st = Ne({
  isOpen: !1,
  isLoading: !0,
  isReady: !1,
  isSpeaking: !1,
  isListening: !1,
  isProcessing: !1,
  currentMessage: "",
  error: null,
  loadProgress: 0
}), $t = Ne([]), bu = Ne(null), ds = Ne([]), Wr = Ne([]), bi = Ne(0), xa = Ne(null), Ea = Ne(null);
let sn = null, wu = 0, wi = null, Ru = 0;
const Jx = 3;
async function Zx() {
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
  if (Ru >= Jx)
    return console.warn("[LiyaAiEnv] Max AudioContext creation attempts reached"), null;
  Ru++;
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
function Zd() {
  const i = We(() => st.value.isOpen), e = We(() => st.value.isLoading), t = We(() => st.value.isReady), n = We(() => st.value.isSpeaking), s = We(() => st.value.isListening), r = We(() => st.value.isProcessing), o = We(() => st.value.currentMessage), a = We(() => st.value.error), l = We(() => st.value.loadProgress), c = We(() => $t.value), u = We(() => ds.value), d = We(() => Wr.value), h = We(() => bi.value), f = We(() => xa.value);
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
      const I = JSON.parse(P);
      if (typeof (I == null ? void 0 : I.response) == "string")
        return I.response;
      if (typeof (I == null ? void 0 : I.answer) == "string")
        return I.answer;
    } catch {
      const I = P.match(/"(?:response|answer)"\s*:\s*"((?:[^"\\]|\\.)*)"/);
      if (I)
        try {
          return JSON.parse(`"${I[1]}"`);
        } catch {
          return I[1];
        }
    }
    return P;
  }
  async function R(P) {
    var te;
    if (!P.trim() || st.value.isProcessing) return;
    st.value.isProcessing = !0, st.value.currentMessage = P, st.value.error = null;
    const I = {
      id: `temp-user-${Date.now()}`,
      content: P.trim(),
      role: "user",
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    $t.value.push(I);
    try {
      const V = await jf(
        P,
        bu.value || void 0
      );
      if (V) {
        if (V.session_id && (bu.value = V.session_id), V.user_message) {
          const Y = $t.value.findIndex((Q) => Q.id === I.id);
          Y !== -1 && ($t.value[Y] = V.user_message);
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
          $t.value.push(V.assistant_message);
        } else if (V.response) {
          let Y = V.response;
          V.suggestions && V.suggestions.length > 0 && (Y = JSON.stringify({
            response: V.response,
            suggestions: V.suggestions
          })), $t.value.push({
            id: `msg-${Date.now()}`,
            content: Y,
            role: "assistant",
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            media: V.media
          });
        }
        if (V.presentation_result && V.presentation_result.success) {
          const Y = { ...V.presentation_result };
          if (Y.page_image_url)
            try {
              const Q = Ps(), he = Q.apiUrl.replace(/\/$/, ""), z = Y.page_image_url.startsWith("http") ? Y.page_image_url : `${he}${Y.page_image_url}`, ne = z.includes("?") ? "&" : "?";
              Y.page_image_url = `${z}${ne}api_key=${Q.apiKey}`;
            } catch {
            }
          xa.value = Y;
        }
        const q = V.response || b(
          ((te = V.assistant_message) == null ? void 0 : te.content) || ""
        );
        q && await A(q);
      }
    } catch (V) {
      V instanceof ed && V.code && (Ea.value = V.code), st.value.error = "Mesaj gönderilemedi", $t.value = $t.value.filter((q) => q.id !== I.id);
    } finally {
      st.value.isProcessing = !1, st.value.currentMessage = "";
    }
  }
  async function A(P) {
    try {
      const I = await Xf(P, {
        include_audio: !0,
        include_gestures: !0
      });
      I && (ds.value = I.visemes || [], Wr.value = I.gestures || [], I.audio_base64 ? await w(I.audio_base64) : H(P));
    } catch {
      H(P);
    }
  }
  async function w(P) {
    try {
      const I = atob(P), te = I.length, V = new ArrayBuffer(te), q = new Uint8Array(V);
      for (let ne = 0; ne < te; ne++)
        q[ne] = I.charCodeAt(ne);
      const Y = await Zx();
      if (!Y) {
        H(P.substring(0, 100));
        return;
      }
      const Q = await new Promise((ne, re) => {
        Y.decodeAudioData(
          V,
          (ee) => ne(ee),
          (ee) => re(ee || new Error("Audio decode failed"))
        );
      });
      E(), sn = Y.createBufferSource(), sn.buffer = Q, sn.connect(Y.destination), st.value.isSpeaking = !0, wu = Y.currentTime;
      const he = () => {
        st.value.isSpeaking && Y && (bi.value = Y.currentTime - wu, requestAnimationFrame(he));
      };
      he();
      const z = Q.duration * 1e3;
      wi = setTimeout(() => {
        st.value.isSpeaking && (st.value.isSpeaking = !1, bi.value = 0, ds.value = [], Wr.value = []);
      }, z + 500), sn.onended = () => {
        wi && (clearTimeout(wi), wi = null), st.value.isSpeaking = !1, bi.value = 0, ds.value = [], Wr.value = [];
      }, sn.start();
    } catch {
      st.value.isSpeaking = !1;
    }
  }
  function H(P) {
    const I = P.length * 0.05, te = [];
    let V = 0;
    for (let Q = 0; Q < P.length; Q++) {
      const he = P[Q].toLowerCase();
      let z = 0;
      "aeiouäöü".includes(he) ? z = 10 + Math.floor(Math.random() * 5) : "bcdfghjklmnpqrstvwxyz".includes(he) && (z = 1 + Math.floor(Math.random() * 9)), te.push({ time: V, viseme: z, duration: 0.05 }), V += 0.05;
    }
    ds.value = te, st.value.isSpeaking = !0, bi.value = 0;
    const q = Date.now(), Y = () => {
      const Q = (Date.now() - q) / 1e3;
      bi.value = Q, Q < I ? requestAnimationFrame(Y) : (st.value.isSpeaking = !1, ds.value = []);
    };
    Y();
  }
  function E() {
    if (wi && (clearTimeout(wi), wi = null), sn) {
      try {
        sn.stop(), sn.disconnect();
      } catch {
      }
      sn = null;
    }
    st.value.isSpeaking = !1, bi.value = 0;
  }
  function T(P) {
    st.value.isListening = P;
  }
  function G(P) {
    $t.value.length === 0 && $t.value.push({
      id: `welcome-${Date.now()}`,
      content: P,
      role: "assistant",
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  function J(P) {
    $t.value.length > 0 && $t.value[0].id.startsWith("welcome-") && ($t.value[0] = { ...$t.value[0], content: P });
  }
  function le(P) {
    xa.value = P;
  }
  function L() {
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
    state: no(st),
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
    lastApiErrorCode: We(() => Ea.value),
    clearApiError: () => {
      Ea.value = null;
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
    cleanup: L
  };
}
const bn = Ne(!1), jr = Ne(""), Xr = Ne(!1), Cu = Ne(!1), Xs = Ne("prompt");
let Ot = null;
function Qx() {
  if (typeof window > "u" || typeof navigator > "u") return !1;
  const i = navigator.userAgent || navigator.vendor || "", e = /iPad|iPhone|iPod/.test(i) && !window.MSStream, t = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  return e || t;
}
function eE() {
  if (typeof window > "u" || typeof navigator > "u") return !1;
  const i = navigator.userAgent || "";
  return i.indexOf("OPR/") !== -1 || i.indexOf("Opera") !== -1;
}
function Qd() {
  const i = window.SpeechRecognition || window.webkitSpeechRecognition;
  Cu.value = Qx();
  const e = eE();
  Xr.value = !!i && !e;
  async function t() {
    if (typeof navigator > "u" || !navigator.permissions)
      return "prompt";
    try {
      const c = await navigator.permissions.query({ name: "microphone" });
      return Xs.value = c.state, c.onchange = () => {
        Xs.value = c.state;
      }, c.state;
    } catch {
      return "prompt";
    }
  }
  async function n() {
    if (typeof navigator > "u" || !navigator.mediaDevices)
      return !1;
    try {
      return (await navigator.mediaDevices.getUserMedia({ audio: !0 })).getTracks().forEach((u) => u.stop()), Xs.value = "granted", !0;
    } catch {
      return Xs.value = "denied", !1;
    }
  }
  function s() {
    !i || Ot || (Ot = new i(), Ot.continuous = !1, Ot.interimResults = !1, Ot.lang = "tr-TR", Ot.onresult = (c) => {
      const u = c.results[c.results.length - 1];
      u.isFinal && (jr.value = u[0].transcript);
    }, Ot.onerror = (c) => {
      bn.value = !1, (c.error === "not-allowed" || c.error === "service-not-allowed" || c.error === "language-not-supported") && (Xr.value = !1);
    }, Ot.onend = () => {
      bn.value = !1;
    });
  }
  function r() {
    if (i && (s(), Ot && !bn.value)) {
      jr.value = "", bn.value = !0;
      try {
        Ot.start(), setTimeout(() => {
          bn.value && jr.value;
        }, 8e3);
      } catch {
        bn.value = !1, Xr.value = !1;
      }
    }
  }
  function o() {
    Ot && bn.value && (Ot.stop(), setTimeout(() => {
      bn.value && (bn.value = !1);
    }, 3e3));
  }
  function a(c) {
    Ot && (Ot.lang = c);
  }
  function l() {
    Ot && (Ot.abort(), Ot = null);
  }
  return ar(() => {
    l();
  }), {
    isRecording: We(() => bn.value),
    transcript: We(() => jr.value),
    isSupported: We(() => Xr.value),
    isIOS: We(() => Cu.value),
    micPermission: We(() => Xs.value),
    startRecording: r,
    stopRecording: o,
    setLanguage: a,
    checkMicPermission: t,
    requestMicPermission: n,
    cleanup: l
  };
}
function eh() {
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
const pl = "liya-avatar-colors", Ni = {
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
];
function tE() {
  if (typeof window > "u" || !window.localStorage)
    return { colors: { ...Ni }, presetId: "white-clean" };
  try {
    const i = localStorage.getItem(pl);
    if (i) {
      const e = JSON.parse(i);
      return {
        colors: e.colors ? { ...Ni, ...e.colors } : { ...Ni },
        presetId: e.presetId ?? "white-clean"
      };
    }
  } catch {
  }
  return { colors: { ...Ni }, presetId: "white-clean" };
}
const nh = tE(), gi = Ne(nh.colors), qi = Ne(nh.presetId);
function ih() {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      const i = localStorage.getItem(pl);
      if (i) {
        const e = JSON.parse(i);
        e.colors && (gi.value = { ...Ni, ...e.colors }), e.presetId && (qi.value = e.presetId);
      }
    } catch {
    }
}
function wo() {
  if (!(typeof window > "u" || !window.localStorage))
    try {
      localStorage.setItem(pl, JSON.stringify({
        colors: gi.value,
        presetId: qi.value
      }));
    } catch {
    }
}
function nE(i) {
  const e = th.find((t) => t.id === i);
  e && (gi.value = {
    top: e.top,
    bottom: e.bottom,
    footwear: e.footwear
  }, qi.value = i, wo());
}
function iE(i, e) {
  gi.value[i] = e, qi.value = null, wo();
}
function sE(i) {
  gi.value = { ...gi.value, ...i }, qi.value = null, wo();
}
function rE() {
  gi.value = { ...Ni }, qi.value = "white-clean", wo();
}
function oE() {
  ih();
}
function sh() {
  return ih(), {
    // State
    colors: no(gi),
    currentPresetId: no(qi),
    // Constants
    presets: th,
    defaultColors: Ni,
    // Actions
    setPreset: nE,
    setColor: iE,
    setColors: sE,
    reset: rE,
    init: oE
  };
}
const aE = { class: "liya-ai-env-vuejs-modal-container" }, lE = { class: "liya-ai-env-vuejs-header" }, cE = { class: "liya-ai-env-vuejs-header__title" }, uE = { class: "liya-ai-env-vuejs-header__actions" }, dE = ["title"], hE = { class: "liya-ai-env-vuejs-header__lang-text" }, fE = ["title"], pE = ["aria-label"], mE = {
  key: 0,
  class: "liya-ai-env-vuejs-settings-panel"
}, gE = { class: "liya-ai-env-vuejs-settings-panel__header" }, _E = { class: "liya-ai-env-vuejs-settings-panel__title" }, vE = { class: "liya-ai-env-vuejs-settings-panel__section" }, yE = { class: "liya-ai-env-vuejs-settings-panel__label" }, xE = { class: "liya-ai-env-vuejs-settings-panel__presets" }, EE = ["title", "onClick"], SE = { class: "liya-ai-env-vuejs-settings-panel__section" }, ME = { class: "liya-ai-env-vuejs-settings-panel__label" }, AE = { class: "liya-ai-env-vuejs-settings-panel__colors" }, TE = { class: "liya-ai-env-vuejs-settings-panel__color-row" }, bE = ["value"], wE = { class: "liya-ai-env-vuejs-settings-panel__color-row" }, RE = ["value"], CE = { class: "liya-ai-env-vuejs-settings-panel__color-row" }, LE = ["value"], PE = {
  key: 0,
  class: "liya-ai-env-vuejs-mic-permission"
}, IE = { class: "liya-ai-env-vuejs-mic-permission__text" }, DE = { class: "liya-ai-env-vuejs-mic-permission__title" }, UE = { class: "liya-ai-env-vuejs-mic-permission__desc" }, NE = { class: "liya-ai-env-vuejs-scene" }, OE = {
  key: 0,
  class: "liya-ai-env-vuejs-unsupported-overlay"
}, FE = { class: "liya-ai-env-vuejs-unsupported-overlay__content" }, BE = { class: "liya-ai-env-vuejs-unsupported-overlay__title" }, VE = { class: "liya-ai-env-vuejs-unsupported-overlay__text" }, kE = { class: "liya-ai-env-vuejs-unsupported-overlay__browsers" }, zE = {
  key: 1,
  class: "liya-ai-env-vuejs-access-loading"
}, HE = {
  key: 2,
  class: "liya-ai-env-vuejs-premium-overlay"
}, GE = { class: "liya-ai-env-vuejs-premium-overlay__content" }, WE = { class: "liya-ai-env-vuejs-premium-overlay__title" }, jE = { class: "liya-ai-env-vuejs-premium-overlay__text" }, XE = {
  href: "https://liyalabs.com/pricing",
  target: "_blank",
  rel: "noopener",
  class: "liya-ai-env-vuejs-premium-overlay__btn"
}, qE = {
  key: 0,
  class: "liya-ai-env-vuejs-glass-popup"
}, YE = { class: "liya-ai-env-vuejs-glass-popup__card" }, $E = ["aria-label"], KE = { class: "liya-ai-env-vuejs-glass-popup__title" }, JE = { class: "liya-ai-env-vuejs-glass-popup__text" }, ZE = { class: "liya-ai-env-vuejs-status-indicator__text" }, QE = ["title"], eS = ["title"], tS = {
  key: 0,
  class: "liya-ai-env-vuejs-patience-tooltip"
}, nS = { class: "liya-ai-env-vuejs-controls" }, iS = { class: "liya-ai-env-vuejs-controls__label" }, sS = ["disabled", "aria-label"], rS = {
  key: 0,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "32",
  height: "32"
}, oS = {
  key: 1,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "32",
  height: "32"
}, aS = {
  key: 0,
  class: "liya-ai-env-vuejs-controls__toast"
}, lS = { class: "liya-ai-env-vuejs-chat-panel" }, cS = { class: "liya-ai-env-vuejs-chat-panel__role" }, uS = { key: 0 }, dS = ["onClick"], hS = {
  key: 0,
  class: "liya-ai-env-vuejs-chat-panel__media-skeleton"
}, fS = ["src", "alt", "onLoad", "onError"], pS = {
  key: 1,
  class: "liya-ai-env-vuejs-chat-panel__media-error"
}, mS = {
  key: 1,
  class: "liya-ai-env-vuejs-chat-panel__media-video"
}, gS = ["src"], _S = {
  key: 1,
  class: "liya-ai-env-vuejs-chat-panel__suggestions"
}, vS = ["onClick"], yS = {
  key: 0,
  class: "liya-ai-env-vuejs-chat-panel__empty"
}, xS = ["placeholder", "disabled"], ES = ["disabled"], SS = ["src", "alt"], MS = ["src"], AS = ["href"], Lu = 3e3, TS = /* @__PURE__ */ or({
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
    } = Zd(), R = Ne(!1), { t: A, locale: w, setLocale: H } = Qa();
    function E() {
      const pe = w.value === "tr" ? "en" : "tr";
      H(pe);
    }
    const {
      isRecording: T,
      transcript: G,
      isSupported: J,
      startRecording: le,
      stopRecording: L,
      checkMicPermission: P,
      requestMicPermission: I
    } = Qd(), te = Ne(!1);
    function V() {
      te.value = !0, setTimeout(() => {
        te.value = !1;
      }, 3e3);
    }
    const q = We(() => t.welcomeMessage || A.value.chat.emptyWelcome), Y = We(() => t.assistantName || "AI Assistant"), Q = Ne(t.avatarModelUrl), he = Ne(t.classroomModelUrl), z = Ne(!1), ne = Ne(!0), re = Ne(null), ee = We(() => re.value !== null), ae = Ne(!0), we = Ne(void 0), Ce = Ne(!1), ge = Ne(!1), { colors: Ae, presets: F, currentPresetId: Qe, setPreset: Le, setColor: Ue, reset: Te, init: lt } = sh(), ke = Ne(null);
    function M() {
      y(), n("opened");
    }
    function y() {
      var pe;
      (pe = ke.value) != null && pe.applyOutfitColors && ke.value.applyOutfitColors({
        top: Ae.value.top,
        bottom: Ae.value.bottom,
        footwear: Ae.value.footwear
      });
    }
    rn(Ae, () => {
      y();
    }, { deep: !0 });
    const j = We(() => re.value ? re.value.code === "PREMIUM_PLUS_REQUIRED" ? A.value.premium.upgradePremiumPlus : A.value.premium.upgradePremium : "");
    function de(pe) {
      return pe && pe.replace(/^http:\/\//i, "https://");
    }
    const ce = We(() => A.value.welcomeSuggestions), ue = Ne("");
    let oe = 0;
    const D = Ne(!1), k = Ne("");
    let ie = null;
    function Se() {
      const pe = A.value.patienceTooltips, Z = Math.floor(Math.random() * pe.length);
      k.value = pe[Z], D.value = !0, ie && clearTimeout(ie), ie = setTimeout(() => {
        D.value = !1;
      }, 2e3);
    }
    const $ = We(() => s.value ? "speaking" : r.value ? "preparing" : T.value ? "listening" : "idle"), xe = We(() => A.value.preparingMessages), Ee = Ne(0), Pe = Ne(0);
    let Re = null;
    rn(r, (pe) => {
      pe ? (Ee.value = 0, Pe.value = Date.now(), Re = setInterval(() => {
        Date.now() - Pe.value > 8e3 && (Ee.value = (Ee.value + 1) % xe.value.length);
      }, 4e3)) : (Re && (clearInterval(Re), Re = null), Ee.value = 0);
    });
    const Me = We(() => {
      switch ($.value) {
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
    function Ge() {
      const pe = Date.now();
      if (pe - oe < Lu) {
        Se();
        return;
      }
      oe = pe, T.value && (L(), p(!1));
    }
    function it() {
      const pe = Date.now();
      if (pe - oe < Lu) {
        Se();
        return;
      }
      oe = pe, s.value && _();
      const Z = o.value.filter((be) => be.role === "assistant").pop();
      if (Z) {
        let be = Z.content;
        try {
          const _t = JSON.parse(Z.content);
          typeof (_t == null ? void 0 : _t.response) == "string" ? be = _t.response : typeof (_t == null ? void 0 : _t.answer) == "string" && (be = _t.answer);
        } catch {
          const _t = Z.content.match(/"(?:response|answer)"\s*:\s*"((?:[^"\\]|\\.)*)"/);
          if (_t)
            try {
              be = JSON.parse(`"${_t[1]}"`);
            } catch {
              be = _t[1];
            }
        }
        g(be);
      }
    }
    function ct(pe) {
      try {
        const Z = JSON.parse(pe);
        if (typeof (Z == null ? void 0 : Z.response) == "string")
          return Z.response;
        if (typeof (Z == null ? void 0 : Z.answer) == "string")
          return Z.answer;
      } catch {
        const Z = pe.match(/"(?:response|answer)"\s*:\s*"((?:[^"\\]|\\.)*)"/);
        if (Z)
          try {
            return JSON.parse(`"${Z[1]}"`);
          } catch {
            return Z[1];
          }
      }
      return pe;
    }
    function qe(pe) {
      try {
        const Z = JSON.parse(pe);
        if (Array.isArray(Z == null ? void 0 : Z.suggestions))
          return Z.suggestions;
      } catch {
        const Z = pe.match(/"suggestions"\s*:\s*\[((?:[^\[\]])*?)\]/);
        if (Z)
          try {
            return JSON.parse(`[${Z[1]}]`);
          } catch {
          }
      }
      return [];
    }
    const fe = Ne({
      show: !1,
      type: "image",
      url: "",
      alt: ""
    }), C = Ne({});
    function ve(pe, Z) {
      const be = [];
      if (Z && Array.isArray(Z) && Z.length > 0) {
        for (const B of Z)
          be.push({ type: B.type || "image", url: B.url, alt: B.alt || (B.type === "video" ? "Video" : "Görsel") });
        return { cleanText: pe.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, "").replace(/\[([^\]]*)\]\((https?:\/\/[^)]+\.(?:mp4|webm|mov|MP4|WEBM|MOV))\)/g, "").trim(), media: be };
      }
      const _t = /!\[([^\]]*)\]\(([^)]+)\)/g;
      let S;
      for (; (S = _t.exec(pe)) !== null; )
        be.push({ type: "image", url: S[2], alt: S[1] || "Görsel" });
      const O = /\[([^\]]*)\]\((https?:\/\/[^)]+\.(?:mp4|webm|mov|MP4|WEBM|MOV))\)/gi;
      for (; (S = O.exec(pe)) !== null; )
        be.push({ type: "video", url: S[2], alt: S[1] || "Video" });
      return { cleanText: pe.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, "").replace(/\[([^\]]*)\]\((https?:\/\/[^)]+\.(?:mp4|webm|mov|MP4|WEBM|MOV))\)/gi, "").trim(), media: be };
    }
    function ye(pe) {
      fe.value = {
        show: !0,
        type: pe.type,
        url: pe.url,
        alt: pe.alt
      };
    }
    const Be = We(() => {
      const pe = ce.value, Z = o.value.map((be) => {
        const _t = be.role === "assistant" ? qe(be.content) : [], S = ct(be.content), O = ve(S, be.media);
        return {
          role: be.role,
          content: O.cleanText,
          suggestions: _t,
          media: O.media
        };
      });
      return Z.length === 1 && Z[0].role === "assistant" && Z[0].suggestions.length === 0 && (Z[0].suggestions = pe), Z;
    }), Ie = Ne(null);
    function at() {
      dh(() => {
        Ie.value && (Ie.value.scrollTop = Ie.value.scrollHeight);
      });
    }
    rn(() => o.value.length, () => {
      at();
    });
    function dt(pe) {
      $n(pe), at();
    }
    async function Mt() {
      const pe = ue.value.trim();
      pe && (ue.value = "", at(), await $n(pe));
    }
    async function wt() {
      ne.value = !0, re.value = null;
      try {
        (await id()).has_avatar_access || (re.value = {
          code: "FEATURE_NOT_AVAILABLE",
          message: A.value.premium.upgradePremium
        });
      } catch (pe) {
        const Z = (pe == null ? void 0 : pe.code) || "FEATURE_NOT_AVAILABLE", be = (pe == null ? void 0 : pe.message) || "";
        Z === "FEATURE_NOT_AVAILABLE" || Z === "UPGRADE_REQUIRED" || Z === "PREMIUM_PLUS_REQUIRED" || be.includes("Premium") || be.includes("upgrade") ? re.value = {
          code: Z,
          message: be
        } : re.value = {
          code: "FEATURE_NOT_AVAILABLE",
          message: A.value.premium.upgradePremium
        };
      } finally {
        ne.value = !1;
      }
    }
    async function ut() {
      if (!Q.value) {
        z.value = !0;
        try {
          const pe = await td();
          Q.value = de(pe.model_url);
        } catch {
        } finally {
          z.value = !1;
        }
      }
    }
    async function Rt() {
      if (!he.value)
        try {
          const pe = await nd();
          he.value = de(pe.model_url);
        } catch {
        }
    }
    rn(T, (pe, Z) => {
      Z && !pe && G.value && $n(G.value);
    }), rn(s, (pe) => {
      n(pe ? "speaking-started" : "speaking-ended");
    });
    function Yt(pe) {
      if (!pe) return null;
      try {
        const Z = Ps(), be = pe.includes("?") ? "&" : "?";
        return `${pe}${be}api_key=${Z.apiKey}`;
      } catch {
        return pe;
      }
    }
    async function _i() {
      try {
        const pe = await qf();
        if (pe.length > 0) {
          const Z = pe[0];
          if (Z.pages && Z.pages.length > 0) {
            const be = Z.pages[0];
            v({
              success: !0,
              action: "show_page",
              presentation_id: Z.id,
              presentation_title: Z.title,
              page_number: be.page_number,
              page_title: be.title,
              page_image_url: Yt(be.image_url),
              total_pages: Z.total_pages,
              reason: "initial_load"
            });
          }
        }
      } catch {
      }
    }
    rn(() => t.isOpen, async (pe) => {
      if (pe) {
        const Z = eh();
        if (ae.value = Z.supported, we.value = Z.reason, !Z.supported) {
          ne.value = !1;
          return;
        }
        J.value && await P() === "prompt" && (Ce.value = !0), await wt(), ee.value || (await Promise.all([
          ut(),
          Rt(),
          _i()
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
    async function $n(pe) {
      n("message-sent", pe), await f(pe);
      const Z = o.value[o.value.length - 1];
      Z && Z.role === "assistant" && n("message-received", Z.content);
    }
    function Kn() {
      if (!J.value) {
        V();
        return;
      }
      T.value ? (L(), p(!1)) : (le(), p(!0));
    }
    function Jn() {
      b(), n("close");
    }
    async function mn() {
      await I(), Ce.value = !1;
    }
    function Zn(pe) {
      pe.key === "Escape" && Jn();
    }
    return ja(() => {
      document.addEventListener("keydown", Zn), lt();
    }), ar(() => {
      document.removeEventListener("keydown", Zn), Re && (clearInterval(Re), Re = null), ie && (clearTimeout(ie), ie = null), b();
    }), (pe, Z) => (De(), Fe(Gn, null, [
      (De(), Sa(_l, { to: "body" }, [
        Rn(ai, { name: "liya-ai-env-vuejs-modal" }, {
          default: li(() => [
            i.isOpen ? (De(), Fe("div", {
              key: 0,
              class: "liya-ai-env-vuejs-modal-overlay",
              onClick: Do(Jn, ["self"])
            }, [
              U("div", aE, [
                U("header", lE, [
                  U("div", cE, [
                    U("div", {
                      class: un(["liya-ai-env-vuejs-status-dot", { "liya-ai-env-vuejs-status-dot--speaking": se(s) }])
                    }, null, 2),
                    U("span", null, Ve(Y.value), 1)
                  ]),
                  U("div", uE, [
                    U("button", {
                      class: "liya-ai-env-vuejs-header__lang-btn",
                      onClick: E,
                      title: se(w) === "tr" ? "Switch to English" : "Türkçe'ye geç"
                    }, [
                      U("span", hE, Ve(se(w) === "tr" ? "EN" : "TR"), 1)
                    ], 8, dE),
                    U("button", {
                      class: un(["liya-ai-env-vuejs-header__settings-btn", { "liya-ai-env-vuejs-header__settings-btn--active": ge.value }]),
                      onClick: Z[0] || (Z[0] = (be) => ge.value = !ge.value),
                      title: se(A).settings.title
                    }, [...Z[11] || (Z[11] = [
                      U("svg", {
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        width: "20",
                        height: "20"
                      }, [
                        U("path", { d: "M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" })
                      ], -1)
                    ])], 10, fE),
                    i.showCloseButton ? (De(), Fe("button", {
                      key: 0,
                      class: "liya-ai-env-vuejs-header__close-btn",
                      onClick: Jn,
                      "aria-label": se(A).controls.close
                    }, [...Z[12] || (Z[12] = [
                      U("svg", {
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        width: "24",
                        height: "24"
                      }, [
                        U("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
                      ], -1)
                    ])], 8, pE)) : xt("", !0)
                  ])
                ]),
                Rn(ai, { name: "liya-ai-env-vuejs-settings-panel" }, {
                  default: li(() => [
                    ge.value ? (De(), Fe("div", mE, [
                      U("div", gE, [
                        U("h3", _E, Ve(se(A).settings.outfitColors), 1),
                        U("button", {
                          class: "liya-ai-env-vuejs-settings-panel__close",
                          onClick: Z[1] || (Z[1] = (be) => ge.value = !1)
                        }, [...Z[13] || (Z[13] = [
                          U("svg", {
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            width: "18",
                            height: "18"
                          }, [
                            U("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
                          ], -1)
                        ])])
                      ]),
                      U("div", vE, [
                        U("label", yE, Ve(se(A).settings.presets), 1),
                        U("div", xE, [
                          (De(!0), Fe(Gn, null, $s(se(F), (be) => (De(), Fe("button", {
                            key: be.id,
                            class: un(["liya-ai-env-vuejs-settings-panel__preset", { "liya-ai-env-vuejs-settings-panel__preset--active": se(Qe) === be.id }]),
                            style: Xa({ background: be.top }),
                            title: be.name,
                            onClick: (_t) => se(Le)(be.id)
                          }, null, 14, EE))), 128))
                        ])
                      ]),
                      U("div", SE, [
                        U("label", ME, Ve(se(A).settings.customColor), 1),
                        U("div", AE, [
                          U("div", TE, [
                            U("span", null, Ve(se(A).settings.top), 1),
                            U("input", {
                              type: "color",
                              value: se(Ae).top,
                              onInput: Z[2] || (Z[2] = (be) => se(Ue)("top", be.target.value))
                            }, null, 40, bE)
                          ]),
                          U("div", wE, [
                            U("span", null, Ve(se(A).settings.bottom), 1),
                            U("input", {
                              type: "color",
                              value: se(Ae).bottom,
                              onInput: Z[3] || (Z[3] = (be) => se(Ue)("bottom", be.target.value))
                            }, null, 40, RE)
                          ]),
                          U("div", CE, [
                            U("span", null, Ve(se(A).settings.footwear), 1),
                            U("input", {
                              type: "color",
                              value: se(Ae).footwear,
                              onInput: Z[4] || (Z[4] = (be) => se(Ue)("footwear", be.target.value))
                            }, null, 40, LE)
                          ])
                        ])
                      ]),
                      U("button", {
                        class: "liya-ai-env-vuejs-settings-panel__reset",
                        onClick: Z[5] || (Z[5] = //@ts-ignore
                        (...be) => se(Te) && se(Te)(...be))
                      }, Ve(se(A).settings.reset), 1)
                    ])) : xt("", !0)
                  ]),
                  _: 1
                }),
                Ce.value ? (De(), Fe("div", PE, [
                  Z[14] || (Z[14] = U("div", { class: "liya-ai-env-vuejs-mic-permission__icon" }, [
                    U("svg", {
                      viewBox: "0 0 24 24",
                      fill: "currentColor",
                      width: "24",
                      height: "24"
                    }, [
                      U("path", { d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" })
                    ])
                  ], -1)),
                  U("div", IE, [
                    U("span", DE, Ve(se(A).mic.permissionRequired), 1),
                    U("span", UE, Ve(se(A).mic.permissionMessage), 1)
                  ]),
                  U("button", {
                    class: "liya-ai-env-vuejs-mic-permission__btn",
                    onClick: mn
                  }, Ve(se(A).mic.allowButton), 1)
                ])) : xt("", !0),
                U("div", NE, [
                  ae.value ? ne.value ? (De(), Fe("div", zE, [...Z[16] || (Z[16] = [
                    U("div", { class: "liya-ai-env-vuejs-access-loading__spinner" }, null, -1)
                  ])])) : ee.value ? (De(), Fe("div", HE, [
                    U("div", GE, [
                      Z[18] || (Z[18] = U("div", { class: "liya-ai-env-vuejs-premium-overlay__icon" }, [
                        U("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "48",
                          height: "48"
                        }, [
                          U("path", { d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" })
                        ])
                      ], -1)),
                      U("h3", WE, Ve(se(A).premium.title), 1),
                      U("p", jE, Ve(j.value), 1),
                      U("a", XE, [
                        Z[17] || (Z[17] = U("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "16",
                          height: "16"
                        }, [
                          U("path", { d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" })
                        ], -1)),
                        Pu(" " + Ve(se(A).premium.viewPlans), 1)
                      ])
                    ])
                  ])) : (De(), Fe(Gn, { key: 3 }, [
                    Rn(Jd, {
                      ref_key: "liyaAiEnvVuejsClassroomSceneRef",
                      ref: ke,
                      "classroom-model-url": he.value,
                      "avatar-model-url": Q.value,
                      "avatar-position": i.avatarPosition,
                      "camera-config": i.cameraConfig,
                      "is-speaking": se(s),
                      visemes: se(a),
                      gestures: i.enableGestures ? se(l) : [],
                      "current-time": se(c),
                      "presentation-result": se(u),
                      onLoaded: M,
                      onError: Z[6] || (Z[6] = (be) => pe.$emit("error", be))
                    }, null, 8, ["classroom-model-url", "avatar-model-url", "avatar-position", "camera-config", "is-speaking", "visemes", "gestures", "current-time", "presentation-result"]),
                    Rn(ai, { name: "liya-ai-env-vuejs-glass-fade" }, {
                      default: li(() => [
                        se(d) ? (De(), Fe("div", qE, [
                          U("div", YE, [
                            U("button", {
                              class: "liya-ai-env-vuejs-glass-popup__close",
                              onClick: Z[7] || (Z[7] = //@ts-ignore
                              (...be) => se(h) && se(h)(...be)),
                              "aria-label": se(A).controls.close
                            }, [...Z[19] || (Z[19] = [
                              U("svg", {
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                width: "18",
                                height: "18"
                              }, [
                                U("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
                              ], -1)
                            ])], 8, $E),
                            Z[20] || (Z[20] = U("div", { class: "liya-ai-env-vuejs-glass-popup__icon" }, "⚠️", -1)),
                            U("h4", KE, Ve(se(A).errors.problemOccurred), 1),
                            U("p", JE, Ve(se(A).errors.tryAgainLater), 1)
                          ])
                        ])) : xt("", !0)
                      ]),
                      _: 1
                    }),
                    U("div", {
                      class: un(["liya-ai-env-vuejs-status-indicator", `liya-ai-env-vuejs-status-indicator--${$.value}`])
                    }, [
                      Z[23] || (Z[23] = U("span", { class: "liya-ai-env-vuejs-status-indicator__dot" }, null, -1)),
                      U("span", ZE, Ve(Me.value), 1),
                      $.value !== "idle" ? (De(), Fe("button", {
                        key: 0,
                        class: "liya-ai-env-vuejs-status-indicator__btn",
                        onClick: Ge,
                        title: se(A).controls.cancel
                      }, [...Z[21] || (Z[21] = [
                        U("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "20",
                          height: "20"
                        }, [
                          U("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
                        ], -1)
                      ])], 8, QE)) : xt("", !0),
                      $.value === "idle" && se(o).length > 0 ? (De(), Fe("button", {
                        key: 1,
                        class: "liya-ai-env-vuejs-status-indicator__btn",
                        onClick: it,
                        title: se(A).controls.replay
                      }, [...Z[22] || (Z[22] = [
                        U("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "20",
                          height: "20"
                        }, [
                          U("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })
                        ], -1)
                      ])], 8, eS)) : xt("", !0),
                      Rn(ai, { name: "liya-ai-env-vuejs-patience-tooltip" }, {
                        default: li(() => [
                          D.value ? (De(), Fe("div", tS, Ve(k.value), 1)) : xt("", !0)
                        ]),
                        _: 1
                      })
                    ], 2),
                    U("div", nS, [
                      U("p", iS, Ve(se(A).controls.pressAndSpeak), 1),
                      U("button", {
                        class: un(["liya-ai-env-vuejs-controls__mic", {
                          "liya-ai-env-vuejs-controls__mic--active": se(T),
                          "liya-ai-env-vuejs-controls__mic--disabled": se(r) || se(s),
                          "liya-ai-env-vuejs-controls__mic--not-supported": !se(J)
                        }]),
                        disabled: se(r) || se(s),
                        onClick: Kn,
                        "aria-label": se(T) ? se(A).voice.stopRecording : se(A).voice.startRecording
                      }, [
                        se(T) ? (De(), Fe("svg", oS, [...Z[25] || (Z[25] = [
                          U("path", { d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" }, null, -1),
                          U("path", { d: "M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" }, null, -1)
                        ])])) : (De(), Fe("svg", rS, [...Z[24] || (Z[24] = [
                          U("path", { d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" }, null, -1)
                        ])]))
                      ], 10, sS),
                      Rn(ai, { name: "liya-ai-env-vuejs-toast" }, {
                        default: li(() => [
                          te.value ? (De(), Fe("div", aS, [
                            Z[26] || (Z[26] = U("svg", {
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              width: "18",
                              height: "18"
                            }, [
                              U("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" })
                            ], -1)),
                            U("span", null, Ve(se(A).voice.notSupported), 1)
                          ])) : xt("", !0)
                        ]),
                        _: 1
                      })
                    ]),
                    U("div", lS, [
                      U("div", {
                        class: "liya-ai-env-vuejs-chat-panel__messages",
                        ref_key: "liyaAiEnvVuejsMessagesRef",
                        ref: Ie
                      }, [
                        (De(!0), Fe(Gn, null, $s(Be.value, (be, _t) => (De(), Fe("div", {
                          key: _t,
                          class: un(["liya-ai-env-vuejs-chat-panel__message", {
                            "liya-ai-env-vuejs-chat-panel__message--user": be.role === "user",
                            "liya-ai-env-vuejs-chat-panel__message--assistant": be.role === "assistant"
                          }])
                        }, [
                          U("span", cS, Ve(be.role === "user" ? se(A).chat.userRole : Y.value), 1),
                          be.content ? (De(), Fe("p", uS, Ve(be.content), 1)) : xt("", !0),
                          (De(!0), Fe(Gn, null, $s(be.media, (S, O) => (De(), Fe("div", {
                            key: O,
                            class: "liya-ai-env-vuejs-chat-panel__media",
                            onClick: (W) => ye(S)
                          }, [
                            S.type === "image" ? (De(), Fe(Gn, { key: 0 }, [
                              !C.value[S.url] || C.value[S.url] === "loading" ? (De(), Fe("div", hS, [...Z[27] || (Z[27] = [
                                U("svg", {
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "rgba(255,255,255,0.2)",
                                  "stroke-width": "1.5"
                                }, [
                                  U("rect", {
                                    x: "3",
                                    y: "3",
                                    width: "18",
                                    height: "18",
                                    rx: "2",
                                    ry: "2"
                                  }),
                                  U("circle", {
                                    cx: "8.5",
                                    cy: "8.5",
                                    r: "1.5"
                                  }),
                                  U("polyline", { points: "21,15 16,10 5,21" })
                                ], -1)
                              ])])) : xt("", !0),
                              U("img", {
                                src: S.url,
                                alt: S.alt,
                                class: un(["liya-ai-env-vuejs-chat-panel__media-img", { "liya-ai-env-vuejs-chat-panel__media-img--hidden": C.value[S.url] !== "loaded" }]),
                                loading: "lazy",
                                onLoad: (W) => C.value[S.url] = "loaded",
                                onError: (W) => C.value[S.url] = "error"
                              }, null, 42, fS),
                              C.value[S.url] === "error" ? (De(), Fe("div", pS, " ⚠️ ")) : xt("", !0)
                            ], 64)) : S.type === "video" ? (De(), Fe("div", mS, [
                              U("video", {
                                src: S.url + "#t=0.001",
                                preload: "metadata",
                                muted: "",
                                playsinline: "",
                                "webkit-playsinline": ""
                              }, null, 8, gS),
                              Z[28] || (Z[28] = U("div", { class: "liya-ai-env-vuejs-chat-panel__play-icon" }, "▶", -1))
                            ])) : xt("", !0)
                          ], 8, dS))), 128)),
                          be.suggestions.length > 0 ? (De(), Fe("div", _S, [
                            (De(!0), Fe(Gn, null, $s(be.suggestions, (S, O) => (De(), Fe("button", {
                              key: O,
                              class: "liya-ai-env-vuejs-chat-panel__suggestion",
                              onClick: (W) => dt(S)
                            }, Ve(S), 9, vS))), 128))
                          ])) : xt("", !0)
                        ], 2))), 128)),
                        Be.value.length === 0 ? (De(), Fe("div", yS, Ve(q.value), 1)) : xt("", !0)
                      ], 512),
                      U("form", {
                        class: "liya-ai-env-vuejs-chat-panel__input-form",
                        onSubmit: Do(Mt, ["prevent"])
                      }, [
                        ch(U("input", {
                          "onUpdate:modelValue": Z[8] || (Z[8] = (be) => ue.value = be),
                          type: "text",
                          class: "liya-ai-env-vuejs-chat-panel__input",
                          placeholder: ee.value ? se(A).chat.premiumRequired : se(A).chat.placeholder,
                          disabled: se(r) || se(s) || ee.value
                        }, null, 8, xS), [
                          [uh, ue.value]
                        ]),
                        U("button", {
                          type: "submit",
                          class: "liya-ai-env-vuejs-chat-panel__send-btn",
                          disabled: !ue.value.trim() || se(r) || se(s) || ee.value
                        }, [...Z[29] || (Z[29] = [
                          U("svg", {
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            width: "24",
                            height: "24"
                          }, [
                            U("path", { d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" })
                          ], -1)
                        ])], 8, ES)
                      ], 32)
                    ])
                  ], 64)) : (De(), Fe("div", OE, [
                    U("div", FE, [
                      Z[15] || (Z[15] = U("div", { class: "liya-ai-env-vuejs-unsupported-overlay__icon" }, [
                        U("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "48",
                          height: "48"
                        }, [
                          U("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" })
                        ])
                      ], -1)),
                      U("h3", BE, Ve(se(A).browser.unsupportedTitle), 1),
                      U("p", VE, Ve(se(A).browser.unsupportedMessage), 1),
                      U("p", kE, Ve(se(A).browser.recommendedBrowsers), 1)
                    ])
                  ]))
                ])
              ])
            ])) : xt("", !0)
          ]),
          _: 1
        })
      ])),
      (De(), Sa(_l, { to: "body" }, [
        Rn(ai, { name: "liya-ai-env-vuejs-fade" }, {
          default: li(() => [
            fe.value.show ? (De(), Fe("div", {
              key: 0,
              class: "liya-ai-env-vuejs-media-preview-overlay",
              onClick: Z[10] || (Z[10] = Do((be) => fe.value.show = !1, ["self"]))
            }, [
              U("button", {
                class: "liya-ai-env-vuejs-media-preview-close",
                onClick: Z[9] || (Z[9] = (be) => fe.value.show = !1)
              }, " ✕ "),
              fe.value.type === "image" ? (De(), Fe("img", {
                key: 0,
                src: fe.value.url,
                alt: fe.value.alt,
                class: "liya-ai-env-vuejs-media-preview-content"
              }, null, 8, SS)) : (De(), Fe("video", {
                key: 1,
                src: fe.value.url,
                controls: "",
                autoplay: "",
                playsinline: "",
                "webkit-playsinline": "",
                class: "liya-ai-env-vuejs-media-preview-content"
              }, null, 8, MS)),
              U("a", {
                href: fe.value.url,
                download: "",
                target: "_blank",
                class: "liya-ai-env-vuejs-media-preview-download"
              }, " İndir ", 8, AS)
            ])) : xt("", !0)
          ]),
          _: 1
        })
      ]))
    ], 64));
  }
}), bS = /* @__PURE__ */ bo(TS, [["__scopeId", "data-v-446a7c08"]]), wS = { class: "liya-ai-env-vuejs-standalone-container" }, RS = { class: "liya-ai-env-vuejs-header" }, CS = { class: "liya-ai-env-vuejs-header__left" }, LS = ["aria-label"], PS = { class: "liya-ai-env-vuejs-header__title" }, IS = { class: "liya-ai-env-vuejs-header__right" }, DS = ["title"], US = { class: "liya-ai-env-vuejs-header__lang-text" }, NS = ["title"], OS = { class: "liya-ai-env-vuejs-header__brand" }, FS = {
  key: 0,
  class: "liya-ai-env-vuejs-settings-panel"
}, BS = { class: "liya-ai-env-vuejs-settings-panel__header" }, VS = { class: "liya-ai-env-vuejs-settings-panel__title" }, kS = { class: "liya-ai-env-vuejs-settings-panel__section" }, zS = { class: "liya-ai-env-vuejs-settings-panel__label" }, HS = { class: "liya-ai-env-vuejs-settings-panel__presets" }, GS = ["title", "onClick"], WS = { class: "liya-ai-env-vuejs-settings-panel__section" }, jS = { class: "liya-ai-env-vuejs-settings-panel__label" }, XS = { class: "liya-ai-env-vuejs-settings-panel__colors" }, qS = { class: "liya-ai-env-vuejs-settings-panel__color-row" }, YS = ["value"], $S = { class: "liya-ai-env-vuejs-settings-panel__color-row" }, KS = ["value"], JS = { class: "liya-ai-env-vuejs-settings-panel__color-row" }, ZS = ["value"], QS = {
  key: 0,
  class: "liya-ai-env-vuejs-mic-permission"
}, eM = { class: "liya-ai-env-vuejs-mic-permission__text" }, tM = { class: "liya-ai-env-vuejs-mic-permission__title" }, nM = { class: "liya-ai-env-vuejs-mic-permission__desc" }, iM = { class: "liya-ai-env-vuejs-scene" }, sM = {
  key: 0,
  class: "liya-ai-env-vuejs-unsupported-overlay"
}, rM = { class: "liya-ai-env-vuejs-unsupported-overlay__content" }, oM = { class: "liya-ai-env-vuejs-unsupported-overlay__title" }, aM = { class: "liya-ai-env-vuejs-unsupported-overlay__text" }, lM = { class: "liya-ai-env-vuejs-unsupported-overlay__browsers" }, cM = {
  key: 1,
  class: "liya-ai-env-vuejs-access-loading"
}, uM = {
  key: 2,
  class: "liya-ai-env-vuejs-premium-overlay"
}, dM = { class: "liya-ai-env-vuejs-premium-overlay__content" }, hM = { class: "liya-ai-env-vuejs-premium-overlay__title" }, fM = { class: "liya-ai-env-vuejs-premium-overlay__text" }, pM = {
  href: "https://liyalabs.com/pricing",
  target: "_blank",
  rel: "noopener",
  class: "liya-ai-env-vuejs-premium-overlay__btn"
}, mM = {
  key: 0,
  class: "liya-ai-env-vuejs-subtitle"
}, gM = {
  key: 0,
  class: "liya-ai-env-vuejs-thinking-dots"
}, _M = { class: "liya-ai-env-vuejs-controls" }, vM = ["disabled", "aria-label"], yM = {
  key: 0,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "32",
  height: "32"
}, xM = {
  key: 1,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "32",
  height: "32"
}, EM = { class: "liya-ai-env-vuejs-controls__hint" }, SM = {
  key: 0,
  class: "liya-ai-env-vuejs-controls__toast"
}, MM = /* @__PURE__ */ or({
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
    } = Zd(), m = Ne(!1), { t: x, locale: v, setLocale: b } = Qa();
    function R() {
      const D = v.value === "tr" ? "en" : "tr";
      b(D);
    }
    function A(D) {
      return D && D.replace(/^http:\/\//i, "https://");
    }
    const {
      isRecording: w,
      transcript: H,
      isSupported: E,
      startRecording: T,
      stopRecording: G,
      checkMicPermission: J,
      requestMicPermission: le
    } = Qd(), L = Ne(!1);
    function P() {
      L.value = !0, setTimeout(() => {
        L.value = !1;
      }, 3e3);
    }
    const I = We(() => t.welcomeMessage || x.value.chat.emptyWelcome), te = We(() => t.assistantName || "AI Assistant"), V = Ne(t.avatarModelUrl), q = Ne(t.classroomModelUrl), Y = Ne(!0), Q = Ne(null), he = We(() => Q.value !== null), z = Ne(!0), ne = Ne(void 0), re = Ne(!1), ee = Ne(!1), { colors: ae, presets: we, currentPresetId: Ce, setPreset: ge, setColor: Ae, reset: F, init: Qe } = sh(), Le = Ne(null);
    function Ue() {
      Te(), n("loaded");
    }
    function Te() {
      var D;
      (D = Le.value) != null && D.applyOutfitColors && Le.value.applyOutfitColors({
        top: ae.value.top,
        bottom: ae.value.bottom,
        footwear: ae.value.footwear
      });
    }
    rn(ae, () => {
      Te();
    }, { deep: !0 });
    const lt = We(() => Q.value ? Q.value.code === "PREMIUM_PLUS_REQUIRED" ? x.value.premium.upgradePremiumPlus : x.value.premium.upgradePremium : "");
    async function ke() {
      Y.value = !0, Q.value = null;
      try {
        (await id()).has_avatar_access || (Q.value = {
          code: "FEATURE_NOT_AVAILABLE",
          message: x.value.premium.upgradePremium
        });
      } catch (D) {
        const k = (D == null ? void 0 : D.code) || "FEATURE_NOT_AVAILABLE", ie = (D == null ? void 0 : D.message) || "";
        k === "FEATURE_NOT_AVAILABLE" || k === "UPGRADE_REQUIRED" || k === "PREMIUM_PLUS_REQUIRED" || ie.includes("Premium") || ie.includes("upgrade") ? Q.value = {
          code: k,
          message: ie
        } : Q.value = {
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
          const D = await td();
          V.value = A(D.model_url);
        } catch {
        }
    }
    async function y() {
      if (!q.value)
        try {
          const D = await nd();
          q.value = A(D.model_url);
        } catch {
        }
    }
    async function j() {
      await le(), re.value = !1;
    }
    ja(async () => {
      const D = eh();
      if (z.value = D.supported, ne.value = D.reason, !D.supported) {
        Y.value = !1;
        return;
      }
      Qe(), E.value && await J() === "prompt" && (re.value = !0), await ke(), he.value || (await Promise.all([
        M(),
        y()
      ]), !m.value && I.value && (m.value = !0, f(I.value), setTimeout(() => {
        h(I.value);
      }, 500)));
    }), rn(w, (D, k) => {
      k && !D && H.value && de(H.value);
    }), rn(s, (D) => {
      n(D ? "speaking-started" : "speaking-ended");
    }), rn(v, () => {
      g(I.value), p(), setTimeout(() => {
        h(I.value);
      }, 300);
    });
    async function de(D) {
      n("message-sent", D), await d(D);
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
      var D;
      return o.value.length === 0 ? I.value : ((D = o.value[o.value.length - 1]) == null ? void 0 : D.content) || "";
    }
    return ar(() => {
      p();
    }), (D, k) => (De(), Fe("div", wS, [
      U("header", RS, [
        U("div", CS, [
          i.showBackButton ? (De(), Fe("button", {
            key: 0,
            class: "liya-ai-env-vuejs-header__back-btn",
            onClick: ue,
            "aria-label": se(x).controls.back
          }, [...k[7] || (k[7] = [
            U("svg", {
              viewBox: "0 0 24 24",
              fill: "currentColor",
              width: "24",
              height: "24"
            }, [
              U("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" })
            ], -1)
          ])], 8, LS)) : xt("", !0),
          U("div", PS, [
            U("div", {
              class: un(["liya-ai-env-vuejs-status-dot", { "liya-ai-env-vuejs-status-dot--speaking": se(s) }])
            }, null, 2),
            U("span", null, Ve(te.value), 1)
          ])
        ]),
        U("div", IS, [
          U("button", {
            class: "liya-ai-env-vuejs-header__lang-btn",
            onClick: R,
            title: se(v) === "tr" ? "Switch to English" : "Türkçe'ye geç"
          }, [
            U("span", US, Ve(se(v) === "tr" ? "EN" : "TR"), 1)
          ], 8, DS),
          U("button", {
            class: un(["liya-ai-env-vuejs-header__settings-btn", { "liya-ai-env-vuejs-header__settings-btn--active": ee.value }]),
            onClick: k[0] || (k[0] = (ie) => ee.value = !ee.value),
            title: se(x).settings.title
          }, [...k[8] || (k[8] = [
            U("svg", {
              viewBox: "0 0 24 24",
              fill: "currentColor",
              width: "20",
              height: "20"
            }, [
              U("path", { d: "M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" })
            ], -1)
          ])], 10, NS),
          U("div", OS, Ve(se(x).branding.environmentTitle), 1)
        ])
      ]),
      Rn(ai, { name: "liya-ai-env-vuejs-settings-panel" }, {
        default: li(() => [
          ee.value ? (De(), Fe("div", FS, [
            U("div", BS, [
              U("h3", VS, Ve(se(x).settings.outfitColors), 1),
              U("button", {
                class: "liya-ai-env-vuejs-settings-panel__close",
                onClick: k[1] || (k[1] = (ie) => ee.value = !1)
              }, [...k[9] || (k[9] = [
                U("svg", {
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  width: "18",
                  height: "18"
                }, [
                  U("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
                ], -1)
              ])])
            ]),
            U("div", kS, [
              U("label", zS, Ve(se(x).settings.presets), 1),
              U("div", HS, [
                (De(!0), Fe(Gn, null, $s(se(we), (ie) => (De(), Fe("button", {
                  key: ie.id,
                  class: un(["liya-ai-env-vuejs-settings-panel__preset", { "liya-ai-env-vuejs-settings-panel__preset--active": se(Ce) === ie.id }]),
                  style: Xa({ background: ie.top }),
                  title: ie.name,
                  onClick: (Se) => se(ge)(ie.id)
                }, null, 14, GS))), 128))
              ])
            ]),
            U("div", WS, [
              U("label", jS, Ve(se(x).settings.customColor), 1),
              U("div", XS, [
                U("div", qS, [
                  U("span", null, Ve(se(x).settings.top), 1),
                  U("input", {
                    type: "color",
                    value: se(ae).top,
                    onInput: k[2] || (k[2] = (ie) => se(Ae)("top", ie.target.value))
                  }, null, 40, YS)
                ]),
                U("div", $S, [
                  U("span", null, Ve(se(x).settings.bottom), 1),
                  U("input", {
                    type: "color",
                    value: se(ae).bottom,
                    onInput: k[3] || (k[3] = (ie) => se(Ae)("bottom", ie.target.value))
                  }, null, 40, KS)
                ]),
                U("div", JS, [
                  U("span", null, Ve(se(x).settings.footwear), 1),
                  U("input", {
                    type: "color",
                    value: se(ae).footwear,
                    onInput: k[4] || (k[4] = (ie) => se(Ae)("footwear", ie.target.value))
                  }, null, 40, ZS)
                ])
              ])
            ]),
            U("button", {
              class: "liya-ai-env-vuejs-settings-panel__reset",
              onClick: k[5] || (k[5] = //@ts-ignore
              (...ie) => se(F) && se(F)(...ie))
            }, Ve(se(x).settings.reset), 1)
          ])) : xt("", !0)
        ]),
        _: 1
      }),
      re.value ? (De(), Fe("div", QS, [
        k[10] || (k[10] = U("div", { class: "liya-ai-env-vuejs-mic-permission__icon" }, [
          U("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            width: "24",
            height: "24"
          }, [
            U("path", { d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" })
          ])
        ], -1)),
        U("div", eM, [
          U("span", tM, Ve(se(x).mic.permissionRequired), 1),
          U("span", nM, Ve(se(x).mic.permissionMessage), 1)
        ]),
        U("button", {
          class: "liya-ai-env-vuejs-mic-permission__btn",
          onClick: j
        }, Ve(se(x).mic.allowButton), 1)
      ])) : xt("", !0),
      U("div", iM, [
        z.value ? Y.value ? (De(), Fe("div", cM, [...k[12] || (k[12] = [
          U("div", { class: "liya-ai-env-vuejs-access-loading__spinner" }, null, -1)
        ])])) : he.value ? (De(), Fe("div", uM, [
          U("div", dM, [
            k[14] || (k[14] = U("div", { class: "liya-ai-env-vuejs-premium-overlay__icon" }, [
              U("svg", {
                viewBox: "0 0 24 24",
                fill: "currentColor",
                width: "48",
                height: "48"
              }, [
                U("path", { d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" })
              ])
            ], -1)),
            U("h3", hM, Ve(se(x).premium.title), 1),
            U("p", fM, Ve(lt.value), 1),
            U("a", pM, [
              k[13] || (k[13] = U("svg", {
                viewBox: "0 0 24 24",
                fill: "currentColor",
                width: "16",
                height: "16"
              }, [
                U("path", { d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" })
              ], -1)),
              Pu(" " + Ve(se(x).premium.viewPlans), 1)
            ])
          ])
        ])) : (De(), Fe(Gn, { key: 3 }, [
          Rn(Jd, {
            ref_key: "liyaAiEnvVuejsClassroomSceneRef",
            ref: Le,
            "classroom-model-url": q.value,
            "avatar-model-url": V.value,
            "avatar-position": i.avatarPosition,
            "camera-config": i.cameraConfig,
            "is-speaking": se(s),
            visemes: se(a),
            gestures: i.enableGestures ? se(l) : [],
            "current-time": se(c),
            "presentation-result": se(u),
            onLoaded: Ue,
            onError: k[6] || (k[6] = (ie) => D.$emit("error", ie))
          }, null, 8, ["classroom-model-url", "avatar-model-url", "avatar-position", "camera-config", "is-speaking", "visemes", "gestures", "current-time", "presentation-result"]),
          i.enableSubtitles ? (De(), Fe("div", mM, [
            se(r) ? (De(), Fe("div", gM, [...k[15] || (k[15] = [
              U("span", { class: "liya-ai-env-vuejs-thinking-dot" }, null, -1),
              U("span", { class: "liya-ai-env-vuejs-thinking-dot" }, null, -1),
              U("span", { class: "liya-ai-env-vuejs-thinking-dot" }, null, -1)
            ])])) : (De(), Fe("p", {
              key: 1,
              class: un(["liya-ai-env-vuejs-subtitle__text", { "liya-ai-env-vuejs-subtitle__welcome": se(o).length === 0 }])
            }, Ve(oe()), 3))
          ])) : xt("", !0),
          U("div", _M, [
            U("button", {
              class: un(["liya-ai-env-vuejs-controls__mic", {
                "liya-ai-env-vuejs-controls__mic--active": se(w),
                "liya-ai-env-vuejs-controls__mic--disabled": se(r) || se(s),
                "liya-ai-env-vuejs-controls__mic--not-supported": !se(E)
              }]),
              disabled: se(r) || se(s),
              onClick: ce,
              "aria-label": se(w) ? se(x).voice.stopRecording : se(x).voice.startRecording
            }, [
              se(w) ? (De(), Fe("svg", xM, [...k[17] || (k[17] = [
                U("path", { d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" }, null, -1),
                U("path", { d: "M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" }, null, -1)
              ])])) : (De(), Fe("svg", yM, [...k[16] || (k[16] = [
                U("path", { d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" }, null, -1)
              ])]))
            ], 10, vM),
            U("p", EM, Ve(se(w) ? se(x).voice.listening : se(r) ? se(x).voice.thinking : se(x).voice.pressToSpeak), 1),
            Rn(ai, { name: "liya-ai-env-vuejs-toast" }, {
              default: li(() => [
                L.value ? (De(), Fe("div", SM, [
                  k[18] || (k[18] = U("svg", {
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    width: "18",
                    height: "18"
                  }, [
                    U("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" })
                  ], -1)),
                  U("span", null, Ve(se(x).voice.notSupported), 1)
                ])) : xt("", !0)
              ]),
              _: 1
            })
          ])
        ], 64)) : (De(), Fe("div", sM, [
          U("div", rM, [
            k[11] || (k[11] = U("div", { class: "liya-ai-env-vuejs-unsupported-overlay__icon" }, [
              U("svg", {
                viewBox: "0 0 24 24",
                fill: "currentColor",
                width: "48",
                height: "48"
              }, [
                U("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" })
              ])
            ], -1)),
            U("h3", oM, Ve(se(x).browser.unsupportedTitle), 1),
            U("p", aM, Ve(se(x).browser.unsupportedMessage), 1),
            U("p", lM, Ve(se(x).browser.recommendedBrowsers), 1)
          ])
        ]))
      ])
    ]));
  }
}), AM = /* @__PURE__ */ bo(MM, [["__scopeId", "data-v-8ee1a533"]]), JM = /* @__PURE__ */ or({
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
    const e = i, t = We(() => e.mode === "modal_fullscreen");
    return (n, s) => (De(), Sa(hh(t.value ? bS : AM), {
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
}), qs = Ne(0), qr = Ne(!1), hs = Ne(new Uint8Array(0));
let oi = null, wn = null, Ys = null, Yr = null;
function ZM() {
  const i = We(() => qs.value), e = We(() => qr.value), t = We(() => hs.value);
  async function n() {
    try {
      const l = await navigator.mediaDevices.getUserMedia({ audio: !0 }), c = window.AudioContext || window.webkitAudioContext;
      oi = new c(), oi.state === "suspended" && await oi.resume(), wn = oi.createAnalyser(), wn.fftSize = 256, wn.smoothingTimeConstant = 0.8, Ys = oi.createMediaStreamSource(l), Ys.connect(wn);
      const u = wn.frequencyBinCount;
      return hs.value = new Uint8Array(u), qr.value = !0, s(), !0;
    } catch {
      return !1;
    }
  }
  function s() {
    if (!qr.value || !wn) return;
    wn.getByteFrequencyData(hs.value);
    let l = 0;
    for (let c = 0; c < hs.value.length; c++)
      l += hs.value[c];
    qs.value = l / hs.value.length / 255, Yr = requestAnimationFrame(s);
  }
  function r() {
    qr.value = !1, Yr && (cancelAnimationFrame(Yr), Yr = null), Ys && (Ys.disconnect(), Ys = null), wn && (wn.disconnect(), wn = null), oi && (oi.close(), oi = null), qs.value = 0;
  }
  function o() {
    const l = qs.value;
    return l < 0.1 ? 0.2 : l < 0.3 ? 0.4 : l < 0.5 ? 0.6 : l < 0.7 ? 0.8 : 1;
  }
  function a() {
    const l = qs.value;
    return l < 0.3 ? "low" : l < 0.6 ? "medium" : "high";
  }
  return ar(() => {
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
  to as LIYA_AI_ENV_VUEJS_GESTURE_DEFINITIONS,
  Jd as LiyaAiEnvVuejsClassroomScene,
  JM as LiyaAiEnvVuejsEnvironment,
  bS as LiyaAiEnvVuejsEnvironmentModal,
  AM as LiyaAiEnvVuejsEnvironmentStandalone,
  KM as LiyaAiEnvVuejsFullBodyAvatar,
  YM as LiyaAiEnvVuejsPlugin,
  YM as default,
  $f as liyaAiEnvVuejsDetectBrowserLocale,
  Xf as liyaAiEnvVuejsGenerateSpeech,
  Wf as liyaAiEnvVuejsGetClient,
  Ps as liyaAiEnvVuejsGetConfig,
  $M as liyaAiEnvVuejsGetGestureDefinition,
  qf as liyaAiEnvVuejsGetPresentations,
  qM as liyaAiEnvVuejsGetSessionHistory,
  Gf as liyaAiEnvVuejsInitializeClient,
  Vx as liyaAiEnvVuejsInterpolateKeyframes,
  XM as liyaAiEnvVuejsIsInitialized,
  Zr as liyaAiEnvVuejsIsSupportedLocale,
  jf as liyaAiEnvVuejsSendMessage,
  Yf as liyaAiEnvVuejsTranslations,
  ZM as useLiyaAiEnvVuejsAudioAnalyzer,
  Zd as useLiyaAiEnvVuejsEnvironment,
  Kd as useLiyaAiEnvVuejsGestures,
  Qa as useLiyaAiEnvVuejsI18n,
  Qd as useLiyaAiEnvVuejsVoice
};
