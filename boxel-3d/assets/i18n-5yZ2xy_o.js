const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./web-BAxWSqhU.js","./SkeletonUtils-ChRJV-qR.js","./web-Bf6K-1ly.js"])))=>i.map(i=>d[i]);
import { ac as zn, aW as Zn, e as er, aX as tr, f as Se, q as pt, aR as nr, aY as wt, aZ as yn, F as Ln, a_ as Te, a$ as rr, x as ar, y as sr, g as or, b0 as lr } from "./SkeletonUtils-ChRJV-qR.js";
let To, Ve, wo, ct, kn, So, _r, De, ko, Io, Dt;
let __tla = (async () => {
  var be;
  (function(e) {
    e.Unimplemented = "UNIMPLEMENTED", e.Unavailable = "UNAVAILABLE";
  })(be || (be = {}));
  class it extends Error {
    constructor(t, n, r) {
      super(t), this.message = t, this.code = n, this.data = r;
    }
  }
  const ir = (e) => {
    var t, n;
    return e?.androidBridge ? "android" : !((n = (t = e?.webkit) === null || t === void 0 ? void 0 : t.messageHandlers) === null || n === void 0) && n.bridge ? "ios" : "web";
  }, cr = (e) => {
    const t = e.CapacitorCustomPlatform || null, n = e.Capacitor || {}, r = n.Plugins = n.Plugins || {}, a = () => t !== null ? t.name : ir(e), s = () => a() !== "web", o = (_) => {
      const m = d.get(_);
      return !!(m?.platforms.has(a()) || i(_));
    }, i = (_) => {
      var m;
      return (m = n.PluginHeaders) === null || m === void 0 ? void 0 : m.find((k) => k.name === _);
    }, u = (_) => e.console.error(_), d = /* @__PURE__ */ new Map(), g = (_, m = {}) => {
      const k = d.get(_);
      if (k) return console.warn(`Capacitor plugin "${_}" already registered. Cannot register plugins twice.`), k.proxy;
      const O = a(), S = i(_);
      let w;
      const f = async () => (!w && O in m ? w = typeof m[O] == "function" ? w = await m[O]() : w = m[O] : t !== null && !w && "web" in m && (w = typeof m.web == "function" ? w = await m.web() : w = m.web), w), v = (N, A) => {
        var H, G;
        if (S) {
          const $ = S?.methods.find((K) => A === K.name);
          if ($) return $.rtype === "promise" ? (K) => n.nativePromise(_, A.toString(), K) : (K, le) => n.nativeCallback(_, A.toString(), K, le);
          if (N) return (H = N[A]) === null || H === void 0 ? void 0 : H.bind(N);
        } else {
          if (N) return (G = N[A]) === null || G === void 0 ? void 0 : G.bind(N);
          throw new it(`"${_}" plugin is not implemented on ${O}`, be.Unimplemented);
        }
      }, L = (N) => {
        let A;
        const H = (...G) => {
          const $ = f().then((K) => {
            const le = v(K, N);
            if (le) {
              const ie = le(...G);
              return A = ie?.remove, ie;
            } else throw new it(`"${_}.${N}()" is not implemented on ${O}`, be.Unimplemented);
          });
          return N === "addListener" && ($.remove = async () => A()), $;
        };
        return H.toString = () => `${N.toString()}() { [capacitor code] }`, Object.defineProperty(H, "name", {
          value: N,
          writable: false,
          configurable: false
        }), H;
      }, h = L("addListener"), T = L("removeListener"), I = (N, A) => {
        const H = h({
          eventName: N
        }, A), G = async () => {
          const K = await H;
          T({
            eventName: N,
            callbackId: K
          }, A);
        }, $ = new Promise((K) => H.then(() => K({
          remove: G
        })));
        return $.remove = async () => {
          console.warn("Using addListener() without 'await' is deprecated."), await G();
        }, $;
      }, E = new Proxy({}, {
        get(N, A) {
          switch (A) {
            case "$$typeof":
              return;
            case "toJSON":
              return () => ({});
            case "addListener":
              return S ? I : h;
            case "removeListener":
              return T;
            default:
              return L(A);
          }
        }
      });
      return r[_] = E, d.set(_, {
        name: _,
        proxy: E,
        platforms: /* @__PURE__ */ new Set([
          ...Object.keys(m),
          ...S ? [
            O
          ] : []
        ])
      }), E;
    };
    return n.convertFileSrc || (n.convertFileSrc = (_) => _), n.getPlatform = a, n.handleError = u, n.isNativePlatform = s, n.isPluginAvailable = o, n.registerPlugin = g, n.Exception = it, n.DEBUG = !!n.DEBUG, n.isLoggingEnabled = !!n.isLoggingEnabled, n;
  }, ur = (e) => e.Capacitor = cr(e), We = ur(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), Be = We.registerPlugin;
  kn = class {
    constructor() {
      this.listeners = {}, this.retainedEventArguments = {}, this.windowListeners = {};
    }
    addListener(t, n) {
      let r = false;
      this.listeners[t] || (this.listeners[t] = [], r = true), this.listeners[t].push(n);
      const s = this.windowListeners[t];
      s && !s.registered && this.addWindowListener(s), r && this.sendRetainedArgumentsForEvent(t);
      const o = async () => this.removeListener(t, n);
      return Promise.resolve({
        remove: o
      });
    }
    async removeAllListeners() {
      this.listeners = {};
      for (const t in this.windowListeners) this.removeWindowListener(this.windowListeners[t]);
      this.windowListeners = {};
    }
    notifyListeners(t, n, r) {
      const a = this.listeners[t];
      if (!a) {
        if (r) {
          let s = this.retainedEventArguments[t];
          s || (s = []), s.push(n), this.retainedEventArguments[t] = s;
        }
        return;
      }
      a.forEach((s) => s(n));
    }
    hasListeners(t) {
      var n;
      return !!(!((n = this.listeners[t]) === null || n === void 0) && n.length);
    }
    registerWindowListener(t, n) {
      this.windowListeners[n] = {
        registered: false,
        windowEventName: t,
        pluginEventName: n,
        handler: (r) => {
          this.notifyListeners(n, r);
        }
      };
    }
    unimplemented(t = "not implemented") {
      return new We.Exception(t, be.Unimplemented);
    }
    unavailable(t = "not available") {
      return new We.Exception(t, be.Unavailable);
    }
    async removeListener(t, n) {
      const r = this.listeners[t];
      if (!r) return;
      const a = r.indexOf(n);
      this.listeners[t].splice(a, 1), this.listeners[t].length || this.removeWindowListener(this.windowListeners[t]);
    }
    addWindowListener(t) {
      window.addEventListener(t.windowEventName, t.handler), t.registered = true;
    }
    removeWindowListener(t) {
      t && (window.removeEventListener(t.windowEventName, t.handler), t.registered = false);
    }
    sendRetainedArgumentsForEvent(t) {
      const n = this.retainedEventArguments[t];
      n && (delete this.retainedEventArguments[t], n.forEach((r) => {
        this.notifyListeners(t, r);
      }));
    }
  };
  const xt = (e) => encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape), Ut = (e) => e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  class dr extends kn {
    async getCookies() {
      const t = document.cookie, n = {};
      return t.split(";").forEach((r) => {
        if (r.length <= 0) return;
        let [a, s] = r.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
        a = Ut(a).trim(), s = Ut(s).trim(), n[a] = s;
      }), n;
    }
    async setCookie(t) {
      try {
        const n = xt(t.key), r = xt(t.value), a = `; expires=${(t.expires || "").replace("expires=", "")}`, s = (t.path || "/").replace("path=", ""), o = t.url != null && t.url.length > 0 ? `domain=${t.url}` : "";
        document.cookie = `${n}=${r || ""}${a}; path=${s}; ${o};`;
      } catch (n) {
        return Promise.reject(n);
      }
    }
    async deleteCookie(t) {
      try {
        document.cookie = `${t.key}=; Max-Age=0`;
      } catch (n) {
        return Promise.reject(n);
      }
    }
    async clearCookies() {
      try {
        const t = document.cookie.split(";") || [];
        for (const n of t) document.cookie = n.replace(/^ +/, "").replace(/=.*/, `=;expires=${(/* @__PURE__ */ new Date()).toUTCString()};path=/`);
      } catch (t) {
        return Promise.reject(t);
      }
    }
    async clearAllCookies() {
      try {
        await this.clearCookies();
      } catch (t) {
        return Promise.reject(t);
      }
    }
  }
  Be("CapacitorCookies", {
    web: () => new dr()
  });
  let fr, mr, pr;
  fr = async (e) => new Promise((t, n) => {
    const r = new FileReader();
    r.onload = () => {
      const a = r.result;
      t(a.indexOf(",") >= 0 ? a.split(",")[1] : a);
    }, r.onerror = (a) => n(a), r.readAsDataURL(e);
  });
  mr = (e = {}) => {
    const t = Object.keys(e);
    return Object.keys(e).map((a) => a.toLocaleLowerCase()).reduce((a, s, o) => (a[s] = e[t[o]], a), {});
  };
  pr = (e, t = true) => e ? Object.entries(e).reduce((r, a) => {
    const [s, o] = a;
    let i, u;
    return Array.isArray(o) ? (u = "", o.forEach((d) => {
      i = t ? encodeURIComponent(d) : d, u += `${s}=${i}&`;
    }), u.slice(0, -1)) : (i = t ? encodeURIComponent(o) : o, u = `${s}=${i}`), `${r}&${u}`;
  }, "").substr(1) : null;
  _r = (e, t = {}) => {
    const n = Object.assign({
      method: e.method || "GET",
      headers: e.headers
    }, t), a = mr(e.headers)["content-type"] || "";
    if (typeof e.data == "string") n.body = e.data;
    else if (a.includes("application/x-www-form-urlencoded")) {
      const s = new URLSearchParams();
      for (const [o, i] of Object.entries(e.data || {})) s.set(o, i);
      n.body = s.toString();
    } else if (a.includes("multipart/form-data") || e.data instanceof FormData) {
      const s = new FormData();
      if (e.data instanceof FormData) e.data.forEach((i, u) => {
        s.append(u, i);
      });
      else for (const i of Object.keys(e.data)) s.append(i, e.data[i]);
      n.body = s;
      const o = new Headers(n.headers);
      o.delete("content-type"), n.headers = o;
    } else (a.includes("application/json") || typeof e.data == "object") && (n.body = JSON.stringify(e.data));
    return n;
  };
  class gr extends kn {
    async request(t) {
      const n = _r(t, t.webFetchExtra), r = pr(t.params, t.shouldEncodeUrlParams), a = r ? `${t.url}?${r}` : t.url, s = await fetch(a, n), o = s.headers.get("content-type") || "";
      let { responseType: i = "text" } = s.ok ? t : {};
      o.includes("application/json") && (i = "json");
      let u, d;
      switch (i) {
        case "arraybuffer":
        case "blob":
          d = await s.blob(), u = await fr(d);
          break;
        case "json":
          u = await s.json();
          break;
        case "document":
        case "text":
        default:
          u = await s.text();
      }
      const g = {};
      return s.headers.forEach((_, m) => {
        g[m] = _;
      }), {
        data: u,
        headers: g,
        status: s.status,
        url: s.url
      };
    }
    async get(t) {
      return this.request(Object.assign(Object.assign({}, t), {
        method: "GET"
      }));
    }
    async post(t) {
      return this.request(Object.assign(Object.assign({}, t), {
        method: "POST"
      }));
    }
    async put(t) {
      return this.request(Object.assign(Object.assign({}, t), {
        method: "PUT"
      }));
    }
    async patch(t) {
      return this.request(Object.assign(Object.assign({}, t), {
        method: "PATCH"
      }));
    }
    async delete(t) {
      return this.request(Object.assign(Object.assign({}, t), {
        method: "DELETE"
      }));
    }
  }
  Be("CapacitorHttp", {
    web: () => new gr()
  });
  ct = class {
    constructor() {
    }
    randomNumber(t, n) {
      return Math.random() * (n - t) + t;
    }
    getVectorFromAngle(t = 0, a = 1) {
      var r = Math.PI, a = 1e3, s = -t * (180 / r), o = Math.round(Math.cos((90 - s) * (r / 180)) * a) / a, i = Math.round(Math.sin((90 - s) * (r / 180)) * a) / a;
      return {
        x: o,
        y: i
      };
    }
    getAngleFromVector(t) {
      var n = Math.atan2(t.y, t.x), r = 180 * n / Math.PI;
      return this.degreesToRadians((360 + Math.round(r)) % 360);
    }
    radiansToDegrees(t) {
      return t * (180 / Math.PI);
    }
    degreesToRadians(t) {
      return t * (Math.PI / 180);
    }
    isJSON(t) {
      try {
        JSON.parse(t);
      } catch {
        return false;
      }
      return true;
    }
    isExtension() {
      return window.chrome?.extension != null;
    }
    isElectronApp() {
      return window.electron != null;
    }
    isSteamEnabled() {
      return window.electron?.client != null;
    }
    isNativeApp() {
      return We.isNativePlatform();
    }
    isFullscreen() {
      return document.fullscreenElement != null;
    }
    openLink(t, n = "_blank") {
      window.chrome?.tabs ? window.chrome.tabs.create({
        url: t
      }) : window.open(t, n);
    }
  };
  De = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  ko = function(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  };
  So = function(e) {
    if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
    var t = e.default;
    if (typeof t == "function") {
      var n = function r() {
        return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
      };
      n.prototype = t.prototype;
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
      value: true
    }), Object.keys(e).forEach(function(r) {
      var a = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(n, r, a.get ? a : {
        enumerable: true,
        get: function() {
          return e[r];
        }
      });
    }), n;
  };
  var $e = {
    exports: {}
  }, hr = $e.exports, $t;
  function vr() {
    return $t || ($t = 1, function(e, t) {
      (function(n, r) {
        r();
      })(hr, function() {
        function n(d, g) {
          return typeof g > "u" ? g = {
            autoBom: false
          } : typeof g != "object" && (console.warn("Deprecated: Expected third argument to be a object"), g = {
            autoBom: !g
          }), g.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(d.type) ? new Blob([
            "\uFEFF",
            d
          ], {
            type: d.type
          }) : d;
        }
        function r(d, g, _) {
          var m = new XMLHttpRequest();
          m.open("GET", d), m.responseType = "blob", m.onload = function() {
            u(m.response, g, _);
          }, m.onerror = function() {
            console.error("could not download file");
          }, m.send();
        }
        function a(d) {
          var g = new XMLHttpRequest();
          g.open("HEAD", d, false);
          try {
            g.send();
          } catch {
          }
          return 200 <= g.status && 299 >= g.status;
        }
        function s(d) {
          try {
            d.dispatchEvent(new MouseEvent("click"));
          } catch {
            var g = document.createEvent("MouseEvents");
            g.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), d.dispatchEvent(g);
          }
        }
        var o = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof De == "object" && De.global === De ? De : void 0, i = o.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), u = o.saveAs || (typeof window != "object" || window !== o ? function() {
        } : "download" in HTMLAnchorElement.prototype && !i ? function(d, g, _) {
          var m = o.URL || o.webkitURL, k = document.createElement("a");
          g = g || d.name || "download", k.download = g, k.rel = "noopener", typeof d == "string" ? (k.href = d, k.origin === location.origin ? s(k) : a(k.href) ? r(d, g, _) : s(k, k.target = "_blank")) : (k.href = m.createObjectURL(d), setTimeout(function() {
            m.revokeObjectURL(k.href);
          }, 4e4), setTimeout(function() {
            s(k);
          }, 0));
        } : "msSaveOrOpenBlob" in navigator ? function(d, g, _) {
          if (g = g || d.name || "download", typeof d != "string") navigator.msSaveOrOpenBlob(n(d, _), g);
          else if (a(d)) r(d, g, _);
          else {
            var m = document.createElement("a");
            m.href = d, m.target = "_blank", setTimeout(function() {
              s(m);
            });
          }
        } : function(d, g, _, m) {
          if (m = m || open("", "_blank"), m && (m.document.title = m.document.body.innerText = "downloading..."), typeof d == "string") return r(d, g, _);
          var k = d.type === "application/octet-stream", O = /constructor/i.test(o.HTMLElement) || o.safari, S = /CriOS\/[\d]+/.test(navigator.userAgent);
          if ((S || k && O || i) && typeof FileReader < "u") {
            var w = new FileReader();
            w.onloadend = function() {
              var L = w.result;
              L = S ? L : L.replace(/^data:[^;]*;/, "data:attachment/file;"), m ? m.location.href = L : location = L, m = null;
            }, w.readAsDataURL(d);
          } else {
            var f = o.URL || o.webkitURL, v = f.createObjectURL(d);
            m ? m.location = v : location.href = v, m = null, setTimeout(function() {
              f.revokeObjectURL(v);
            }, 4e4);
          }
        });
        o.saveAs = u.saveAs = u, e.exports = u;
      });
    }($e)), $e.exports;
  }
  var ut = vr();
  const br = "modulepreload", Er = function(e, t) {
    return new URL(e, t).href;
  }, jt = {}, Sn = function(t, n, r) {
    let a = Promise.resolve();
    if (n && n.length > 0) {
      let o = function(g) {
        return Promise.all(g.map((_) => Promise.resolve(_).then((m) => ({
          status: "fulfilled",
          value: m
        }), (m) => ({
          status: "rejected",
          reason: m
        }))));
      };
      const i = document.getElementsByTagName("link"), u = document.querySelector("meta[property=csp-nonce]"), d = u?.nonce || u?.getAttribute("nonce");
      a = o(n.map((g) => {
        if (g = Er(g, r), g in jt) return;
        jt[g] = true;
        const _ = g.endsWith(".css"), m = _ ? '[rel="stylesheet"]' : "";
        if (!!r) for (let S = i.length - 1; S >= 0; S--) {
          const w = i[S];
          if (w.href === g && (!_ || w.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${g}"]${m}`)) return;
        const O = document.createElement("link");
        if (O.rel = _ ? "stylesheet" : br, _ || (O.as = "script"), O.crossOrigin = "", O.href = g, d && O.setAttribute("nonce", d), document.head.appendChild(O), _) return new Promise((S, w) => {
          O.addEventListener("load", S), O.addEventListener("error", () => w(new Error(`Unable to preload CSS for ${g}`)));
        });
      }));
    }
    function s(o) {
      const i = new Event("vite:preloadError", {
        cancelable: true
      });
      if (i.payload = o, window.dispatchEvent(i), !i.defaultPrevented) throw o;
    }
    return a.then((o) => {
      for (const i of o || []) i.status === "rejected" && s(i.reason);
      return t().catch(s);
    });
  };
  function yr(e) {
    e.CapacitorUtils.Synapse = new Proxy({}, {
      get(t, n) {
        return new Proxy({}, {
          get(r, a) {
            return (s, o, i) => {
              const u = e.Capacitor.Plugins[n];
              if (u === void 0) {
                i(new Error(`Capacitor plugin ${n} not found`));
                return;
              }
              if (typeof u[a] != "function") {
                i(new Error(`Method ${a} not found in Capacitor plugin ${n}`));
                return;
              }
              (async () => {
                try {
                  const d = await u[a](s);
                  o(d);
                } catch (d) {
                  i(d);
                }
              })();
            };
          }
        });
      }
    });
  }
  function Lr(e) {
    e.CapacitorUtils.Synapse = new Proxy({}, {
      get(t, n) {
        return e.cordova.plugins[n];
      }
    });
  }
  function kr(e = false) {
    window.CapacitorUtils = window.CapacitorUtils || {}, window.Capacitor !== void 0 && !e ? yr(window) : window.cordova !== void 0 && Lr(window);
  }
  var He;
  (function(e) {
    e.Documents = "DOCUMENTS", e.Data = "DATA", e.Library = "LIBRARY", e.Cache = "CACHE", e.External = "EXTERNAL", e.ExternalStorage = "EXTERNAL_STORAGE", e.ExternalCache = "EXTERNAL_CACHE", e.LibraryNoCloud = "LIBRARY_NO_CLOUD", e.Temporary = "TEMPORARY";
  })(He || (He = {}));
  (function(e) {
    e.UTF8 = "utf8", e.ASCII = "ascii", e.UTF16 = "utf16";
  })(Ve || (Ve = {}));
  const Wt = Be("Filesystem", {
    web: () => Sn(() => import("./web-BAxWSqhU.js"), __vite__mapDeps([0,1]), import.meta.url).then((e) => new e.FilesystemWeb())
  });
  kr();
  wo = class {
    constructor() {
      this.levelPrefix = "level_";
    }
    getAllLocalStorage() {
      for (var t = {}, n = 0; n < localStorage.length; n++) {
        var r = localStorage.key(n), a = localStorage.getItem(r);
        t[r] = a;
      }
      return t;
    }
    setAllLocalStorage(t) {
      localStorage.clear(), Object.keys(t).forEach(function(n) {
        localStorage.setItem(n, t[n]);
      });
    }
    getListOfLevels() {
      for (var t = [], n = localStorage.length, r = 0; r < n; r++) {
        var a = localStorage.key(r);
        a.indexOf(this.levelPrefix) >= 0 && t.push({
          key: a,
          level: JSON.parse(localStorage.getItem(a))
        });
      }
      return t.sort((s, o) => s.level.name > o.level.name ? 1 : o.level.name > s.level.name ? -1 : 0), t;
    }
    getLevelData(t) {
      return JSON.parse(localStorage.getItem(t));
    }
    setLevelData(t, n) {
      var r = 1;
      if (t == null) {
        for (; localStorage.getItem(this.levelPrefix + r) != null; ) r++;
        t = "level_" + r;
      }
      return localStorage.setItem(t, JSON.stringify(n)), t;
    }
    removeLevelData(t) {
      localStorage.removeItem(t);
    }
    updateLevelDataName(t, n) {
      var r = this.getLevelData(t);
      r.name = n, this.setLevelData(t, r);
    }
    saveScore(t, n) {
      var r = this.getScores(), a = 999999999, s = parseInt(n.replace(/[^\d]/g, "")), o = false, i = r[t];
      return i != null && (i.indexOf(":") >= 0 && (i += "0"), a = parseInt(i.replace(/[^\d]/g, ""))), s < a && (o = true, r[t] = n, localStorage.setItem("scores", JSON.stringify(r)), this.saveThumbnailAfterPopupOpened(t)), this.getThumbnail(t) == null && this.saveThumbnailAfterPopupOpened(t), o;
    }
    getScores() {
      var t = localStorage.getItem("scores");
      return t == null && (t = "{}", localStorage.setItem("scores", t)), JSON.parse(t);
    }
    saveThumbnail(t) {
      var n = app.storage.screenshot({
        width: 200,
        height: 200,
        zoom: 1
      });
      localStorage.setItem("thumbnail_" + t, n);
    }
    saveThumbnailAfterPopupOpened(t) {
      const n = () => {
        app.storage.saveThumbnail(t), window.removeEventListener("popupOpened", n);
      };
      window.addEventListener("popupOpened", n);
    }
    getThumbnail(t) {
      return localStorage.getItem("thumbnail_" + t);
    }
    setSettings(t) {
      localStorage.setItem("settings", JSON.stringify(t));
    }
    getSettings(t = app) {
      var n = new ct(), r = localStorage.getItem("settings"), a = {
        buffer: 100,
        connection: "",
        debug: false,
        controls: {
          reverse: false
        },
        language: "en",
        motion: true,
        music: "boxel-3d-pro",
        name: "Player",
        peer: this.generateHex(""),
        progress: 1,
        quality: 10,
        scale: 1,
        skin: {
          id: 466,
          title: "Smile",
          url: "../png/smile.png"
        },
        snap: 8,
        stats: false,
        theme: "bubble",
        volume: n.isExtension() ? 0 : 0.5,
        volumeMusic: 0.5,
        volumeEffects: 1
      }, s = a;
      r != null && (s = JSON.parse(r));
      for (var o in a) s[o] == null && (s[o] = a[o]);
      return s.peer.length > 6 && (s.peer = this.generateHex("")), s;
    }
    async saveLevelToFile() {
      app.levelEditor.saveLevel();
      var t = app.level.exportToJSON(app), n = new Blob([
        JSON.stringify(t)
      ], {
        type: "application/json"
      }), r = new ct();
      if (r.isNativeApp()) try {
        const a = (/* @__PURE__ */ new Date()).getTime(), s = await Wt.writeFile({
          path: `${t.name} v${a}.json`,
          data: JSON.stringify(t),
          directory: He.Documents,
          encoding: Ve.UTF8
        });
        alert("Success! Saved to " + s.uri);
      } catch (a) {
        console.error(a), alert(JSON.stringify(a));
      }
      else ut.saveAs(n, t.name);
    }
    screenshot(t) {
      t = Object.assign({
        width: 640,
        height: 360,
        zoom: 1,
        save: false
      }, t);
      var n = "", r = window.innerWidth, a = window.innerHeight, s = app.graphics.camera.zoom, o = app.graphics.renderer.getPixelRatio();
      return app.graphics.camera.zoom = t.zoom, app.graphics.camera.aspect = t.width / t.height, app.graphics.camera.updateProjectionMatrix(), app.graphics.renderer.setPixelRatio(1), app.graphics.renderer.setSize(t.width, t.height), app.graphics.renderer.render(app.graphics.scene, app.graphics.camera), n = app.graphics.renderer.domElement.toDataURL("image/png"), t.save == true && app.graphics.renderer.domElement.toBlob((i) => ut.saveAs(i, "screenshot.png")), app.graphics.camera.zoom = s, app.graphics.camera.aspect = r / a, app.graphics.camera.updateProjectionMatrix(), app.graphics.renderer.setPixelRatio(o), app.graphics.renderer.setSize(r, a), app.graphics.renderer.render(app.graphics.scene, app.graphics.camera), n;
    }
    loadLevelFromFile() {
      var t = document.createElement("input");
      t.setAttribute("type", "file"), t.setAttribute("id", "theFile"), t.addEventListener("change", r, false);
      function n() {
        var a = document.createEvent("MouseEvents");
        a.initEvent("click", true, false), t.dispatchEvent(a);
      }
      function r(a) {
        var s = a.target.files, o = s[0], i = new FileReader();
        i.onload = /* @__PURE__ */ function(u) {
          return function(d) {
            var g = u.name.split(".").slice(0, -1).join("."), _ = JSON.parse(d.target.result);
            _.name = g, app.level.clearLevel(app), app.level.importFromJSON(_, app);
          };
        }(o), i.readAsText(o);
      }
      n();
    }
    async backupToFile() {
      var t = app.storage.getAllLocalStorage(), n = new Blob([
        JSON.stringify(t)
      ], {
        type: "application/json"
      }), r = new ct();
      if (r.isNativeApp()) try {
        const a = (/* @__PURE__ */ new Date()).getTime(), s = await Wt.writeFile({
          path: `boxel_3d_backup_${a}.json`,
          data: JSON.stringify(t),
          directory: He.Documents,
          encoding: Ve.UTF8
        });
        alert("Success! Saved to " + s.uri);
      } catch (a) {
        console.error(a), alert(JSON.stringify(a));
      }
      else ut.saveAs(n, "boxel_3d_backup");
    }
    restoreFromFile() {
      window.dispatchEvent(new CustomEvent("openPopup", {
        detail: {
          text: "popup.text.restore_file_data",
          inputs: [
            {
              value: "popup.button.restore",
              type: "button",
              callback: function() {
                var t = document.createElement("input");
                t.setAttribute("type", "file"), t.setAttribute("id", "theFile"), t.addEventListener("change", r, false);
                function n() {
                  var a = document.createEvent("MouseEvents");
                  a.initEvent("click", true, false), t.dispatchEvent(a);
                }
                function r(a) {
                  var s = a.target.files, o = s[0], i = new FileReader();
                  i.onload = /* @__PURE__ */ function() {
                    return function(u) {
                      var d = JSON.parse(u.target.result);
                      app.storage.setAllLocalStorage(d), window.dispatchEvent(new CustomEvent("openPopup", {
                        detail: {
                          text: "popup.text.file_data_restored",
                          inputs: [
                            {
                              value: "popup.button.continue",
                              type: "button"
                            }
                          ]
                        }
                      }));
                    };
                  }(), i.readAsText(o);
                }
                n();
              }
            },
            {
              value: "popup.button.cancel",
              type: "button"
            }
          ]
        }
      }));
    }
    backupToChrome(t = false) {
      window.dispatchEvent(new CustomEvent("openPopup", {
        detail: {
          text: "popup.text.save_data_to_cloud",
          inputs: [
            {
              value: "popup.button.backup",
              type: "button",
              callback: function() {
                var n = 0;
                t == true && window.chrome?.storage.sync.clear();
                for (var r = 0; r < localStorage.length; r++) {
                  var a = localStorage.key(r), s = localStorage.getItem(a), o = {};
                  o[a] = s, window.chrome?.storage.sync.set(o, function() {
                    n++, n == localStorage.length && window.dispatchEvent(new CustomEvent("openPopup", {
                      detail: {
                        text: "popup.text.cloud_data_saved",
                        inputs: [
                          {
                            value: "popup.button.continue",
                            type: "button"
                          }
                        ]
                      }
                    }));
                  });
                }
              }
            },
            {
              value: "popup.button.cancel",
              type: "button"
            }
          ]
        }
      }));
    }
    restoreFromChrome(t = false) {
      window.dispatchEvent(new CustomEvent("openPopup", {
        detail: {
          text: "popup.text.restore_cloud_data",
          inputs: [
            {
              value: "popup.button.restore",
              type: "button",
              callback: function() {
                chrome?.storage.sync.get(null, function(n) {
                  t == true && localStorage.clear();
                  for (var r = Object.keys(n), a = 0; a < r.length; a++) {
                    var s = r[a], o = n[s];
                    localStorage.setItem(s, o);
                  }
                  window.dispatchEvent(new CustomEvent("openPopup", {
                    detail: {
                      text: "popup.text.cloud_data_restored",
                      inputs: [
                        {
                          value: "popup.button.continue",
                          type: "button"
                        }
                      ]
                    }
                  }));
                });
              }
            },
            {
              value: "popup.button.cancel",
              type: "button"
            }
          ]
        }
      }));
    }
    generateHex(t = "#") {
      return t + (Math.random() * 16777215 << 0).toString(16).padStart(6, "0");
    }
    generateUUID() {
      return zn.generateUUID();
    }
  };
  const Ye = typeof window < "u", ue = (e, t = false) => t ? Symbol.for(e) : Symbol(e), Sr = (e, t, n) => wr({
    l: e,
    k: t,
    s: n
  }), wr = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), q = (e) => typeof e == "number" && isFinite(e), Tr = (e) => Tt(e) === "[object Date]", Ee = (e) => Tt(e) === "[object RegExp]", Ge = (e) => F(e) && Object.keys(e).length === 0, J = Object.assign, Ir = Object.create, U = (e = null) => Ir(e);
  let Ht;
  const pe = () => Ht || (Ht = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : U());
  function Vt(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  const Cr = Object.prototype.hasOwnProperty;
  function ee(e, t) {
    return Cr.call(e, t);
  }
  const V = Array.isArray, W = (e) => typeof e == "function", C = (e) => typeof e == "string", D = (e) => typeof e == "boolean", M = (e) => e !== null && typeof e == "object", Or = (e) => M(e) && W(e.then) && W(e.catch), wn = Object.prototype.toString, Tt = (e) => wn.call(e), F = (e) => Tt(e) === "[object Object]", Pr = (e) => e == null ? "" : V(e) || F(e) && e.toString === wn ? JSON.stringify(e, null, 2) : String(e);
  function It(e, t = "") {
    return e.reduce((n, r, a) => a === 0 ? n + r : n + t + r, "");
  }
  function Nr(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
  }
  const Me = (e) => !M(e) || V(e);
  function je(e, t) {
    if (Me(e) || Me(t)) throw new Error("Invalid value");
    const n = [
      {
        src: e,
        des: t
      }
    ];
    for (; n.length; ) {
      const { src: r, des: a } = n.pop();
      Object.keys(r).forEach((s) => {
        s !== "__proto__" && (M(r[s]) && !M(a[s]) && (a[s] = Array.isArray(r[s]) ? [] : U()), Me(a[s]) || Me(r[s]) ? a[s] = r[s] : n.push({
          src: r[s],
          des: a[s]
        }));
      });
    }
  }
  function Ar(e, t, n) {
    return {
      line: e,
      column: t,
      offset: n
    };
  }
  function _t(e, t, n) {
    return {
      start: e,
      end: t
    };
  }
  const x = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14
  }, Rr = 17;
  function qe(e, t, n = {}) {
    const { domain: r, messages: a, args: s } = n, o = e, i = new SyntaxError(String(o));
    return i.code = e, t && (i.location = t), i.domain = r, i;
  }
  function Fr(e) {
    throw e;
  }
  const ae = " ", Dr = "\r", X = `
`, Mr = "\u2028", xr = "\u2029";
  function Ur(e) {
    const t = e;
    let n = 0, r = 1, a = 1, s = 0;
    const o = (E) => t[E] === Dr && t[E + 1] === X, i = (E) => t[E] === X, u = (E) => t[E] === xr, d = (E) => t[E] === Mr, g = (E) => o(E) || i(E) || u(E) || d(E), _ = () => n, m = () => r, k = () => a, O = () => s, S = (E) => o(E) || u(E) || d(E) ? X : t[E], w = () => S(n), f = () => S(n + s);
    function v() {
      return s = 0, g(n) && (r++, a = 0), o(n) && n++, n++, a++, t[n];
    }
    function L() {
      return o(n + s) && s++, s++, t[n + s];
    }
    function h() {
      n = 0, r = 1, a = 1, s = 0;
    }
    function T(E = 0) {
      s = E;
    }
    function I() {
      const E = n + s;
      for (; E !== n; ) v();
      s = 0;
    }
    return {
      index: _,
      line: m,
      column: k,
      peekOffset: O,
      charAt: S,
      currentChar: w,
      currentPeek: f,
      next: v,
      peek: L,
      reset: h,
      resetPeek: T,
      skipToPeek: I
    };
  }
  const ce = void 0, $r = ".", Yt = "'", jr = "tokenizer";
  function Wr(e, t = {}) {
    const n = t.location !== false, r = Ur(e), a = () => r.index(), s = () => Ar(r.line(), r.column(), r.index()), o = s(), i = a(), u = {
      currentType: 13,
      offset: i,
      startLoc: o,
      endLoc: o,
      lastType: 13,
      lastOffset: i,
      lastStartLoc: o,
      lastEndLoc: o,
      braceNest: 0,
      inLinked: false,
      text: ""
    }, d = () => u, { onError: g } = t;
    function _(l, c, b, ...P) {
      const Y = d();
      if (c.column += b, c.offset += b, g) {
        const R = n ? _t(Y.startLoc, c) : null, p = qe(l, R, {
          domain: jr,
          args: P
        });
        g(p);
      }
    }
    function m(l, c, b) {
      l.endLoc = s(), l.currentType = c;
      const P = {
        type: c
      };
      return n && (P.loc = _t(l.startLoc, l.endLoc)), b != null && (P.value = b), P;
    }
    const k = (l) => m(l, 13);
    function O(l, c) {
      return l.currentChar() === c ? (l.next(), c) : (_(x.EXPECTED_TOKEN, s(), 0, c), "");
    }
    function S(l) {
      let c = "";
      for (; l.currentPeek() === ae || l.currentPeek() === X; ) c += l.currentPeek(), l.peek();
      return c;
    }
    function w(l) {
      const c = S(l);
      return l.skipToPeek(), c;
    }
    function f(l) {
      if (l === ce) return false;
      const c = l.charCodeAt(0);
      return c >= 97 && c <= 122 || c >= 65 && c <= 90 || c === 95;
    }
    function v(l) {
      if (l === ce) return false;
      const c = l.charCodeAt(0);
      return c >= 48 && c <= 57;
    }
    function L(l, c) {
      const { currentType: b } = c;
      if (b !== 2) return false;
      S(l);
      const P = f(l.currentPeek());
      return l.resetPeek(), P;
    }
    function h(l, c) {
      const { currentType: b } = c;
      if (b !== 2) return false;
      S(l);
      const P = l.currentPeek() === "-" ? l.peek() : l.currentPeek(), Y = v(P);
      return l.resetPeek(), Y;
    }
    function T(l, c) {
      const { currentType: b } = c;
      if (b !== 2) return false;
      S(l);
      const P = l.currentPeek() === Yt;
      return l.resetPeek(), P;
    }
    function I(l, c) {
      const { currentType: b } = c;
      if (b !== 7) return false;
      S(l);
      const P = l.currentPeek() === ".";
      return l.resetPeek(), P;
    }
    function E(l, c) {
      const { currentType: b } = c;
      if (b !== 8) return false;
      S(l);
      const P = f(l.currentPeek());
      return l.resetPeek(), P;
    }
    function N(l, c) {
      const { currentType: b } = c;
      if (!(b === 7 || b === 11)) return false;
      S(l);
      const P = l.currentPeek() === ":";
      return l.resetPeek(), P;
    }
    function A(l, c) {
      const { currentType: b } = c;
      if (b !== 9) return false;
      const P = () => {
        const R = l.currentPeek();
        return R === "{" ? f(l.peek()) : R === "@" || R === "|" || R === ":" || R === "." || R === ae || !R ? false : R === X ? (l.peek(), P()) : G(l, false);
      }, Y = P();
      return l.resetPeek(), Y;
    }
    function H(l) {
      S(l);
      const c = l.currentPeek() === "|";
      return l.resetPeek(), c;
    }
    function G(l, c = true) {
      const b = (Y = false, R = "") => {
        const p = l.currentPeek();
        return p === "{" || p === "@" || !p ? Y : p === "|" ? !(R === ae || R === X) : p === ae ? (l.peek(), b(true, ae)) : p === X ? (l.peek(), b(true, X)) : true;
      }, P = b();
      return c && l.resetPeek(), P;
    }
    function $(l, c) {
      const b = l.currentChar();
      return b === ce ? ce : c(b) ? (l.next(), b) : null;
    }
    function K(l) {
      const c = l.charCodeAt(0);
      return c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c === 95 || c === 36;
    }
    function le(l) {
      return $(l, K);
    }
    function ie(l) {
      const c = l.charCodeAt(0);
      return c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c === 95 || c === 36 || c === 45;
    }
    function Ke(l) {
      return $(l, ie);
    }
    function Xe(l) {
      const c = l.charCodeAt(0);
      return c >= 48 && c <= 57;
    }
    function Qe(l) {
      return $(l, Xe);
    }
    function re(l) {
      const c = l.charCodeAt(0);
      return c >= 48 && c <= 57 || c >= 65 && c <= 70 || c >= 97 && c <= 102;
    }
    function Ne(l) {
      return $(l, re);
    }
    function Ae(l) {
      let c = "", b = "";
      for (; c = Qe(l); ) b += c;
      return b;
    }
    function ze(l) {
      let c = "";
      for (; ; ) {
        const b = l.currentChar();
        if (b === "{" || b === "}" || b === "@" || b === "|" || !b) break;
        if (b === ae || b === X) if (G(l)) c += b, l.next();
        else {
          if (H(l)) break;
          c += b, l.next();
        }
        else c += b, l.next();
      }
      return c;
    }
    function Ze(l) {
      w(l);
      let c = "", b = "";
      for (; c = Ke(l); ) b += c;
      return l.currentChar() === ce && _(x.UNTERMINATED_CLOSING_BRACE, s(), 0), b;
    }
    function et(l) {
      w(l);
      let c = "";
      return l.currentChar() === "-" ? (l.next(), c += `-${Ae(l)}`) : c += Ae(l), l.currentChar() === ce && _(x.UNTERMINATED_CLOSING_BRACE, s(), 0), c;
    }
    function Mt(l) {
      return l !== Yt && l !== X;
    }
    function tt(l) {
      w(l), O(l, "'");
      let c = "", b = "";
      for (; c = $(l, Mt); ) c === "\\" ? b += nt(l) : b += c;
      const P = l.currentChar();
      return P === X || P === ce ? (_(x.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), P === X && (l.next(), O(l, "'")), b) : (O(l, "'"), b);
    }
    function nt(l) {
      const c = l.currentChar();
      switch (c) {
        case "\\":
        case "'":
          return l.next(), `\\${c}`;
        case "u":
          return Re(l, c, 4);
        case "U":
          return Re(l, c, 6);
        default:
          return _(x.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, c), "";
      }
    }
    function Re(l, c, b) {
      O(l, c);
      let P = "";
      for (let Y = 0; Y < b; Y++) {
        const R = Ne(l);
        if (!R) {
          _(x.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${c}${P}${l.currentChar()}`);
          break;
        }
        P += R;
      }
      return `\\${c}${P}`;
    }
    function rt(l) {
      return l !== "{" && l !== "}" && l !== ae && l !== X;
    }
    function at(l) {
      w(l);
      let c = "", b = "";
      for (; c = $(l, rt); ) b += c;
      return b;
    }
    function st(l) {
      let c = "", b = "";
      for (; c = le(l); ) b += c;
      return b;
    }
    function ot(l) {
      const c = (b) => {
        const P = l.currentChar();
        return P === "{" || P === "@" || P === "|" || P === "(" || P === ")" || !P || P === ae ? b : (b += P, l.next(), c(b));
      };
      return c("");
    }
    function Le(l) {
      w(l);
      const c = O(l, "|");
      return w(l), c;
    }
    function _e(l, c) {
      let b = null;
      switch (l.currentChar()) {
        case "{":
          return c.braceNest >= 1 && _(x.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), l.next(), b = m(c, 2, "{"), w(l), c.braceNest++, b;
        case "}":
          return c.braceNest > 0 && c.currentType === 2 && _(x.EMPTY_PLACEHOLDER, s(), 0), l.next(), b = m(c, 3, "}"), c.braceNest--, c.braceNest > 0 && w(l), c.inLinked && c.braceNest === 0 && (c.inLinked = false), b;
        case "@":
          return c.braceNest > 0 && _(x.UNTERMINATED_CLOSING_BRACE, s(), 0), b = ge(l, c) || k(c), c.braceNest = 0, b;
        default: {
          let Y = true, R = true, p = true;
          if (H(l)) return c.braceNest > 0 && _(x.UNTERMINATED_CLOSING_BRACE, s(), 0), b = m(c, 1, Le(l)), c.braceNest = 0, c.inLinked = false, b;
          if (c.braceNest > 0 && (c.currentType === 4 || c.currentType === 5 || c.currentType === 6)) return _(x.UNTERMINATED_CLOSING_BRACE, s(), 0), c.braceNest = 0, ke(l, c);
          if (Y = L(l, c)) return b = m(c, 4, Ze(l)), w(l), b;
          if (R = h(l, c)) return b = m(c, 5, et(l)), w(l), b;
          if (p = T(l, c)) return b = m(c, 6, tt(l)), w(l), b;
          if (!Y && !R && !p) return b = m(c, 12, at(l)), _(x.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, b.value), w(l), b;
          break;
        }
      }
      return b;
    }
    function ge(l, c) {
      const { currentType: b } = c;
      let P = null;
      const Y = l.currentChar();
      switch ((b === 7 || b === 8 || b === 11 || b === 9) && (Y === X || Y === ae) && _(x.INVALID_LINKED_FORMAT, s(), 0), Y) {
        case "@":
          return l.next(), P = m(c, 7, "@"), c.inLinked = true, P;
        case ".":
          return w(l), l.next(), m(c, 8, ".");
        case ":":
          return w(l), l.next(), m(c, 9, ":");
        default:
          return H(l) ? (P = m(c, 1, Le(l)), c.braceNest = 0, c.inLinked = false, P) : I(l, c) || N(l, c) ? (w(l), ge(l, c)) : E(l, c) ? (w(l), m(c, 11, st(l))) : A(l, c) ? (w(l), Y === "{" ? _e(l, c) || P : m(c, 10, ot(l))) : (b === 7 && _(x.INVALID_LINKED_FORMAT, s(), 0), c.braceNest = 0, c.inLinked = false, ke(l, c));
      }
    }
    function ke(l, c) {
      let b = {
        type: 13
      };
      if (c.braceNest > 0) return _e(l, c) || k(c);
      if (c.inLinked) return ge(l, c) || k(c);
      switch (l.currentChar()) {
        case "{":
          return _e(l, c) || k(c);
        case "}":
          return _(x.UNBALANCED_CLOSING_BRACE, s(), 0), l.next(), m(c, 3, "}");
        case "@":
          return ge(l, c) || k(c);
        default: {
          if (H(l)) return b = m(c, 1, Le(l)), c.braceNest = 0, c.inLinked = false, b;
          if (G(l)) return m(c, 0, ze(l));
          break;
        }
      }
      return b;
    }
    function lt() {
      const { currentType: l, offset: c, startLoc: b, endLoc: P } = u;
      return u.lastType = l, u.lastOffset = c, u.lastStartLoc = b, u.lastEndLoc = P, u.offset = a(), u.startLoc = s(), r.currentChar() === ce ? m(u, 13) : ke(r, u);
    }
    return {
      nextToken: lt,
      currentOffset: a,
      currentPosition: s,
      context: d
    };
  }
  const Hr = "parser", Vr = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
  function Yr(e, t, n) {
    switch (e) {
      case "\\\\":
        return "\\";
      case "\\'":
        return "'";
      default: {
        const r = parseInt(t || n, 16);
        return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "\uFFFD";
      }
    }
  }
  function Br(e = {}) {
    const t = e.location !== false, { onError: n } = e;
    function r(f, v, L, h, ...T) {
      const I = f.currentPosition();
      if (I.offset += h, I.column += h, n) {
        const E = t ? _t(L, I) : null, N = qe(v, E, {
          domain: Hr,
          args: T
        });
        n(N);
      }
    }
    function a(f, v, L) {
      const h = {
        type: f
      };
      return t && (h.start = v, h.end = v, h.loc = {
        start: L,
        end: L
      }), h;
    }
    function s(f, v, L, h) {
      t && (f.end = v, f.loc && (f.loc.end = L));
    }
    function o(f, v) {
      const L = f.context(), h = a(3, L.offset, L.startLoc);
      return h.value = v, s(h, f.currentOffset(), f.currentPosition()), h;
    }
    function i(f, v) {
      const L = f.context(), { lastOffset: h, lastStartLoc: T } = L, I = a(5, h, T);
      return I.index = parseInt(v, 10), f.nextToken(), s(I, f.currentOffset(), f.currentPosition()), I;
    }
    function u(f, v) {
      const L = f.context(), { lastOffset: h, lastStartLoc: T } = L, I = a(4, h, T);
      return I.key = v, f.nextToken(), s(I, f.currentOffset(), f.currentPosition()), I;
    }
    function d(f, v) {
      const L = f.context(), { lastOffset: h, lastStartLoc: T } = L, I = a(9, h, T);
      return I.value = v.replace(Vr, Yr), f.nextToken(), s(I, f.currentOffset(), f.currentPosition()), I;
    }
    function g(f) {
      const v = f.nextToken(), L = f.context(), { lastOffset: h, lastStartLoc: T } = L, I = a(8, h, T);
      return v.type !== 11 ? (r(f, x.UNEXPECTED_EMPTY_LINKED_MODIFIER, L.lastStartLoc, 0), I.value = "", s(I, h, T), {
        nextConsumeToken: v,
        node: I
      }) : (v.value == null && r(f, x.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, te(v)), I.value = v.value || "", s(I, f.currentOffset(), f.currentPosition()), {
        node: I
      });
    }
    function _(f, v) {
      const L = f.context(), h = a(7, L.offset, L.startLoc);
      return h.value = v, s(h, f.currentOffset(), f.currentPosition()), h;
    }
    function m(f) {
      const v = f.context(), L = a(6, v.offset, v.startLoc);
      let h = f.nextToken();
      if (h.type === 8) {
        const T = g(f);
        L.modifier = T.node, h = T.nextConsumeToken || f.nextToken();
      }
      switch (h.type !== 9 && r(f, x.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, te(h)), h = f.nextToken(), h.type === 2 && (h = f.nextToken()), h.type) {
        case 10:
          h.value == null && r(f, x.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, te(h)), L.key = _(f, h.value || "");
          break;
        case 4:
          h.value == null && r(f, x.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, te(h)), L.key = u(f, h.value || "");
          break;
        case 5:
          h.value == null && r(f, x.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, te(h)), L.key = i(f, h.value || "");
          break;
        case 6:
          h.value == null && r(f, x.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, te(h)), L.key = d(f, h.value || "");
          break;
        default: {
          r(f, x.UNEXPECTED_EMPTY_LINKED_KEY, v.lastStartLoc, 0);
          const T = f.context(), I = a(7, T.offset, T.startLoc);
          return I.value = "", s(I, T.offset, T.startLoc), L.key = I, s(L, T.offset, T.startLoc), {
            nextConsumeToken: h,
            node: L
          };
        }
      }
      return s(L, f.currentOffset(), f.currentPosition()), {
        node: L
      };
    }
    function k(f) {
      const v = f.context(), L = v.currentType === 1 ? f.currentOffset() : v.offset, h = v.currentType === 1 ? v.endLoc : v.startLoc, T = a(2, L, h);
      T.items = [];
      let I = null;
      do {
        const A = I || f.nextToken();
        switch (I = null, A.type) {
          case 0:
            A.value == null && r(f, x.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, te(A)), T.items.push(o(f, A.value || ""));
            break;
          case 5:
            A.value == null && r(f, x.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, te(A)), T.items.push(i(f, A.value || ""));
            break;
          case 4:
            A.value == null && r(f, x.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, te(A)), T.items.push(u(f, A.value || ""));
            break;
          case 6:
            A.value == null && r(f, x.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, te(A)), T.items.push(d(f, A.value || ""));
            break;
          case 7: {
            const H = m(f);
            T.items.push(H.node), I = H.nextConsumeToken || null;
            break;
          }
        }
      } while (v.currentType !== 13 && v.currentType !== 1);
      const E = v.currentType === 1 ? v.lastOffset : f.currentOffset(), N = v.currentType === 1 ? v.lastEndLoc : f.currentPosition();
      return s(T, E, N), T;
    }
    function O(f, v, L, h) {
      const T = f.context();
      let I = h.items.length === 0;
      const E = a(1, v, L);
      E.cases = [], E.cases.push(h);
      do {
        const N = k(f);
        I || (I = N.items.length === 0), E.cases.push(N);
      } while (T.currentType !== 13);
      return I && r(f, x.MUST_HAVE_MESSAGES_IN_PLURAL, L, 0), s(E, f.currentOffset(), f.currentPosition()), E;
    }
    function S(f) {
      const v = f.context(), { offset: L, startLoc: h } = v, T = k(f);
      return v.currentType === 13 ? T : O(f, L, h, T);
    }
    function w(f) {
      const v = Wr(f, J({}, e)), L = v.context(), h = a(0, L.offset, L.startLoc);
      return t && h.loc && (h.loc.source = f), h.body = S(v), e.onCacheKey && (h.cacheKey = e.onCacheKey(f)), L.currentType !== 13 && r(v, x.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, f[L.offset] || ""), s(h, v.currentOffset(), v.currentPosition()), h;
    }
    return {
      parse: w
    };
  }
  function te(e) {
    if (e.type === 13) return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "\u2026" : t;
  }
  function Gr(e, t = {}) {
    const n = {
      ast: e,
      helpers: /* @__PURE__ */ new Set()
    };
    return {
      context: () => n,
      helper: (s) => (n.helpers.add(s), s)
    };
  }
  function Bt(e, t) {
    for (let n = 0; n < e.length; n++) Ct(e[n], t);
  }
  function Ct(e, t) {
    switch (e.type) {
      case 1:
        Bt(e.cases, t), t.helper("plural");
        break;
      case 2:
        Bt(e.items, t);
        break;
      case 6: {
        Ct(e.key, t), t.helper("linked"), t.helper("type");
        break;
      }
      case 5:
        t.helper("interpolate"), t.helper("list");
        break;
      case 4:
        t.helper("interpolate"), t.helper("named");
        break;
    }
  }
  function qr(e, t = {}) {
    const n = Gr(e);
    n.helper("normalize"), e.body && Ct(e.body, n);
    const r = n.context();
    e.helpers = Array.from(r.helpers);
  }
  function Jr(e) {
    const t = e.body;
    return t.type === 2 ? Gt(t) : t.cases.forEach((n) => Gt(n)), e;
  }
  function Gt(e) {
    if (e.items.length === 1) {
      const t = e.items[0];
      (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
    } else {
      const t = [];
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        if (!(r.type === 3 || r.type === 9) || r.value == null) break;
        t.push(r.value);
      }
      if (t.length === e.items.length) {
        e.static = It(t);
        for (let n = 0; n < e.items.length; n++) {
          const r = e.items[n];
          (r.type === 3 || r.type === 9) && delete r.value;
        }
      }
    }
  }
  function ve(e) {
    switch (e.t = e.type, e.type) {
      case 0: {
        const t = e;
        ve(t.body), t.b = t.body, delete t.body;
        break;
      }
      case 1: {
        const t = e, n = t.cases;
        for (let r = 0; r < n.length; r++) ve(n[r]);
        t.c = n, delete t.cases;
        break;
      }
      case 2: {
        const t = e, n = t.items;
        for (let r = 0; r < n.length; r++) ve(n[r]);
        t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
        break;
      }
      case 3:
      case 9:
      case 8:
      case 7: {
        const t = e;
        t.value && (t.v = t.value, delete t.value);
        break;
      }
      case 6: {
        const t = e;
        ve(t.key), t.k = t.key, delete t.key, t.modifier && (ve(t.modifier), t.m = t.modifier, delete t.modifier);
        break;
      }
      case 5: {
        const t = e;
        t.i = t.index, delete t.index;
        break;
      }
      case 4: {
        const t = e;
        t.k = t.key, delete t.key;
        break;
      }
    }
    delete e.type;
  }
  function Kr(e, t) {
    const { filename: n, breakLineCode: r, needIndent: a } = t, s = t.location !== false, o = {
      filename: n,
      code: "",
      column: 1,
      line: 1,
      offset: 0,
      map: void 0,
      breakLineCode: r,
      needIndent: a,
      indentLevel: 0
    };
    s && e.loc && (o.source = e.loc.source);
    const i = () => o;
    function u(S, w) {
      o.code += S;
    }
    function d(S, w = true) {
      const f = w ? r : "";
      u(a ? f + "  ".repeat(S) : f);
    }
    function g(S = true) {
      const w = ++o.indentLevel;
      S && d(w);
    }
    function _(S = true) {
      const w = --o.indentLevel;
      S && d(w);
    }
    function m() {
      d(o.indentLevel);
    }
    return {
      context: i,
      push: u,
      indent: g,
      deindent: _,
      newline: m,
      helper: (S) => `_${S}`,
      needIndent: () => o.needIndent
    };
  }
  function Xr(e, t) {
    const { helper: n } = e;
    e.push(`${n("linked")}(`), ye(e, t.key), t.modifier ? (e.push(", "), ye(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
  }
  function Qr(e, t) {
    const { helper: n, needIndent: r } = e;
    e.push(`${n("normalize")}([`), e.indent(r());
    const a = t.items.length;
    for (let s = 0; s < a && (ye(e, t.items[s]), s !== a - 1); s++) e.push(", ");
    e.deindent(r()), e.push("])");
  }
  function zr(e, t) {
    const { helper: n, needIndent: r } = e;
    if (t.cases.length > 1) {
      e.push(`${n("plural")}([`), e.indent(r());
      const a = t.cases.length;
      for (let s = 0; s < a && (ye(e, t.cases[s]), s !== a - 1); s++) e.push(", ");
      e.deindent(r()), e.push("])");
    }
  }
  function Zr(e, t) {
    t.body ? ye(e, t.body) : e.push("null");
  }
  function ye(e, t) {
    const { helper: n } = e;
    switch (t.type) {
      case 0:
        Zr(e, t);
        break;
      case 1:
        zr(e, t);
        break;
      case 2:
        Qr(e, t);
        break;
      case 6:
        Xr(e, t);
        break;
      case 8:
        e.push(JSON.stringify(t.value), t);
        break;
      case 7:
        e.push(JSON.stringify(t.value), t);
        break;
      case 5:
        e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
        break;
      case 4:
        e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
        break;
      case 9:
        e.push(JSON.stringify(t.value), t);
        break;
      case 3:
        e.push(JSON.stringify(t.value), t);
        break;
    }
  }
  const ea = (e, t = {}) => {
    const n = C(t.mode) ? t.mode : "normal", r = C(t.filename) ? t.filename : "message.intl";
    t.sourceMap;
    const a = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : n !== "arrow", o = e.helpers || [], i = Kr(e, {
      filename: r,
      breakLineCode: a,
      needIndent: s
    });
    i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(s), o.length > 0 && (i.push(`const { ${It(o.map((g) => `${g}: _${g}`), ", ")} } = ctx`), i.newline()), i.push("return "), ye(i, e), i.deindent(s), i.push("}"), delete e.helpers;
    const { code: u, map: d } = i.context();
    return {
      ast: e,
      code: u,
      map: d ? d.toJSON() : void 0
    };
  };
  function ta(e, t = {}) {
    const n = J({}, t), r = !!n.jit, a = !!n.minify, s = n.optimize == null ? true : n.optimize, i = Br(n).parse(e);
    return r ? (s && Jr(i), a && ve(i), {
      ast: i,
      code: ""
    }) : (qr(i, n), ea(i, n));
  }
  function na() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (pe().__INTLIFY_PROD_DEVTOOLS__ = false), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (pe().__INTLIFY_DROP_MESSAGE_COMPILER__ = false);
  }
  function ne(e) {
    return M(e) && Ot(e) === 0 && (ee(e, "b") || ee(e, "body"));
  }
  const Tn = [
    "b",
    "body"
  ];
  function ra(e) {
    return de(e, Tn);
  }
  const In = [
    "c",
    "cases"
  ];
  function aa(e) {
    return de(e, In, []);
  }
  const Cn = [
    "s",
    "static"
  ];
  function sa(e) {
    return de(e, Cn);
  }
  const On = [
    "i",
    "items"
  ];
  function oa(e) {
    return de(e, On, []);
  }
  const Pn = [
    "t",
    "type"
  ];
  function Ot(e) {
    return de(e, Pn);
  }
  const Nn = [
    "v",
    "value"
  ];
  function xe(e, t) {
    const n = de(e, Nn);
    if (n != null) return n;
    throw Ie(t);
  }
  const An = [
    "m",
    "modifier"
  ];
  function la(e) {
    return de(e, An);
  }
  const Rn = [
    "k",
    "key"
  ];
  function ia(e) {
    const t = de(e, Rn);
    if (t) return t;
    throw Ie(6);
  }
  function de(e, t, n) {
    for (let r = 0; r < t.length; r++) {
      const a = t[r];
      if (ee(e, a) && e[a] != null) return e[a];
    }
    return n;
  }
  const Fn = [
    ...Tn,
    ...In,
    ...Cn,
    ...On,
    ...Rn,
    ...An,
    ...Nn,
    ...Pn
  ];
  function Ie(e) {
    return new Error(`unhandled node type: ${e}`);
  }
  function dt(e) {
    return (n) => ca(n, e);
  }
  function ca(e, t) {
    const n = ra(t);
    if (n == null) throw Ie(0);
    if (Ot(n) === 1) {
      const s = aa(n);
      return e.plural(s.reduce((o, i) => [
        ...o,
        qt(e, i)
      ], []));
    } else return qt(e, n);
  }
  function qt(e, t) {
    const n = sa(t);
    if (n != null) return e.type === "text" ? n : e.normalize([
      n
    ]);
    {
      const r = oa(t).reduce((a, s) => [
        ...a,
        gt(e, s)
      ], []);
      return e.normalize(r);
    }
  }
  function gt(e, t) {
    const n = Ot(t);
    switch (n) {
      case 3:
        return xe(t, n);
      case 9:
        return xe(t, n);
      case 4: {
        const r = t;
        if (ee(r, "k") && r.k) return e.interpolate(e.named(r.k));
        if (ee(r, "key") && r.key) return e.interpolate(e.named(r.key));
        throw Ie(n);
      }
      case 5: {
        const r = t;
        if (ee(r, "i") && q(r.i)) return e.interpolate(e.list(r.i));
        if (ee(r, "index") && q(r.index)) return e.interpolate(e.list(r.index));
        throw Ie(n);
      }
      case 6: {
        const r = t, a = la(r), s = ia(r);
        return e.linked(gt(e, s), a ? gt(e, a) : void 0, e.type);
      }
      case 7:
        return xe(t, n);
      case 8:
        return xe(t, n);
      default:
        throw new Error(`unhandled node on format message part: ${n}`);
    }
  }
  const ua = (e) => e;
  let Ue = U();
  function da(e, t = {}) {
    let n = false;
    const r = t.onError || Fr;
    return t.onError = (a) => {
      n = true, r(a);
    }, {
      ...ta(e, t),
      detectError: n
    };
  }
  function fa(e, t) {
    if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && C(e)) {
      D(t.warnHtmlMessage) && t.warnHtmlMessage;
      const r = (t.onCacheKey || ua)(e), a = Ue[r];
      if (a) return a;
      const { ast: s, detectError: o } = da(e, {
        ...t,
        location: false,
        jit: true
      }), i = dt(s);
      return o ? i : Ue[r] = i;
    } else {
      const n = e.cacheKey;
      if (n) {
        const r = Ue[n];
        return r || (Ue[n] = dt(e));
      } else return dt(e);
    }
  }
  let Ce = null;
  function ma(e) {
    Ce = e;
  }
  function pa(e, t, n) {
    Ce && Ce.emit("i18n:init", {
      timestamp: Date.now(),
      i18n: e,
      version: t,
      meta: n
    });
  }
  const _a = ga("function:translate");
  function ga(e) {
    return (t) => Ce && Ce.emit(e, t);
  }
  const se = {
    INVALID_ARGUMENT: Rr,
    INVALID_DATE_ARGUMENT: 18,
    INVALID_ISO_DATE_ARGUMENT: 19,
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
    NOT_SUPPORT_LOCALE_TYPE: 23
  }, ha = 24;
  function oe(e) {
    return qe(e, null, void 0);
  }
  function Pt(e, t) {
    return t.locale != null ? Jt(t.locale) : Jt(e.locale);
  }
  let ft;
  function Jt(e) {
    if (C(e)) return e;
    if (W(e)) {
      if (e.resolvedOnce && ft != null) return ft;
      if (e.constructor.name === "Function") {
        const t = e();
        if (Or(t)) throw oe(se.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
        return ft = t;
      } else throw oe(se.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
    } else throw oe(se.NOT_SUPPORT_LOCALE_TYPE);
  }
  function va(e, t, n) {
    return [
      .../* @__PURE__ */ new Set([
        n,
        ...V(t) ? t : M(t) ? Object.keys(t) : C(t) ? [
          t
        ] : [
          n
        ]
      ])
    ];
  }
  function Dn(e, t, n) {
    const r = C(n) ? n : Oe, a = e;
    a.__localeChainCache || (a.__localeChainCache = /* @__PURE__ */ new Map());
    let s = a.__localeChainCache.get(r);
    if (!s) {
      s = [];
      let o = [
        n
      ];
      for (; V(o); ) o = Kt(s, o, t);
      const i = V(t) || !F(t) ? t : t.default ? t.default : null;
      o = C(i) ? [
        i
      ] : i, V(o) && Kt(s, o, false), a.__localeChainCache.set(r, s);
    }
    return s;
  }
  function Kt(e, t, n) {
    let r = true;
    for (let a = 0; a < t.length && D(r); a++) {
      const s = t[a];
      C(s) && (r = ba(e, t[a], n));
    }
    return r;
  }
  function ba(e, t, n) {
    let r;
    const a = t.split("-");
    do {
      const s = a.join("-");
      r = Ea(e, s, n), a.splice(-1, 1);
    } while (a.length && r === true);
    return r;
  }
  function Ea(e, t, n) {
    let r = false;
    if (!e.includes(t) && (r = true, t)) {
      r = t[t.length - 1] !== "!";
      const a = t.replace(/!/g, "");
      e.push(a), (V(n) || F(n)) && n[a] && (r = n[a]);
    }
    return r;
  }
  const fe = [];
  fe[0] = {
    w: [
      0
    ],
    i: [
      3,
      0
    ],
    "[": [
      4
    ],
    o: [
      7
    ]
  };
  fe[1] = {
    w: [
      1
    ],
    ".": [
      2
    ],
    "[": [
      4
    ],
    o: [
      7
    ]
  };
  fe[2] = {
    w: [
      2
    ],
    i: [
      3,
      0
    ],
    0: [
      3,
      0
    ]
  };
  fe[3] = {
    i: [
      3,
      0
    ],
    0: [
      3,
      0
    ],
    w: [
      1,
      1
    ],
    ".": [
      2,
      1
    ],
    "[": [
      4,
      1
    ],
    o: [
      7,
      1
    ]
  };
  fe[4] = {
    "'": [
      5,
      0
    ],
    '"': [
      6,
      0
    ],
    "[": [
      4,
      2
    ],
    "]": [
      1,
      3
    ],
    o: 8,
    l: [
      4,
      0
    ]
  };
  fe[5] = {
    "'": [
      4,
      0
    ],
    o: 8,
    l: [
      5,
      0
    ]
  };
  fe[6] = {
    '"': [
      4,
      0
    ],
    o: 8,
    l: [
      6,
      0
    ]
  };
  const ya = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
  function La(e) {
    return ya.test(e);
  }
  function ka(e) {
    const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
  }
  function Sa(e) {
    if (e == null) return "o";
    switch (e.charCodeAt(0)) {
      case 91:
      case 93:
      case 46:
      case 34:
      case 39:
        return e;
      case 95:
      case 36:
      case 45:
        return "i";
      case 9:
      case 10:
      case 13:
      case 160:
      case 65279:
      case 8232:
      case 8233:
        return "w";
    }
    return "i";
  }
  function wa(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? false : La(t) ? ka(t) : "*" + t;
  }
  function Ta(e) {
    const t = [];
    let n = -1, r = 0, a = 0, s, o, i, u, d, g, _;
    const m = [];
    m[0] = () => {
      o === void 0 ? o = i : o += i;
    }, m[1] = () => {
      o !== void 0 && (t.push(o), o = void 0);
    }, m[2] = () => {
      m[0](), a++;
    }, m[3] = () => {
      if (a > 0) a--, r = 4, m[0]();
      else {
        if (a = 0, o === void 0 || (o = wa(o), o === false)) return false;
        m[1]();
      }
    };
    function k() {
      const O = e[n + 1];
      if (r === 5 && O === "'" || r === 6 && O === '"') return n++, i = "\\" + O, m[0](), true;
    }
    for (; r !== null; ) if (n++, s = e[n], !(s === "\\" && k())) {
      if (u = Sa(s), _ = fe[r], d = _[u] || _.l || 8, d === 8 || (r = d[0], d[1] !== void 0 && (g = m[d[1]], g && (i = s, g() === false)))) return;
      if (r === 7) return t;
    }
  }
  const Xt = /* @__PURE__ */ new Map();
  function Ia(e, t) {
    return M(e) ? e[t] : null;
  }
  function Ca(e, t) {
    if (!M(e)) return null;
    let n = Xt.get(t);
    if (n || (n = Ta(t), n && Xt.set(t, n)), !n) return null;
    const r = n.length;
    let a = e, s = 0;
    for (; s < r; ) {
      const o = n[s];
      if (Fn.includes(o) && ne(a)) return null;
      const i = a[o];
      if (i === void 0 || W(a)) return null;
      a = i, s++;
    }
    return a;
  }
  const Oa = "11.1.5", Je = -1, Oe = "en-US", Qt = "", zt = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
  function Pa() {
    return {
      upper: (e, t) => t === "text" && C(e) ? e.toUpperCase() : t === "vnode" && M(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
      lower: (e, t) => t === "text" && C(e) ? e.toLowerCase() : t === "vnode" && M(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
      capitalize: (e, t) => t === "text" && C(e) ? zt(e) : t === "vnode" && M(e) && "__v_isVNode" in e ? zt(e.children) : e
    };
  }
  let Mn;
  function Na(e) {
    Mn = e;
  }
  let xn;
  function Aa(e) {
    xn = e;
  }
  let Un;
  function Ra(e) {
    Un = e;
  }
  let $n = null;
  const Fa = (e) => {
    $n = e;
  }, Da = () => $n;
  let jn = null;
  const Zt = (e) => {
    jn = e;
  }, Ma = () => jn;
  let en = 0;
  function xa(e = {}) {
    const t = W(e.onWarn) ? e.onWarn : Nr, n = C(e.version) ? e.version : Oa, r = C(e.locale) || W(e.locale) ? e.locale : Oe, a = W(r) ? Oe : r, s = V(e.fallbackLocale) || F(e.fallbackLocale) || C(e.fallbackLocale) || e.fallbackLocale === false ? e.fallbackLocale : a, o = F(e.messages) ? e.messages : mt(a), i = F(e.datetimeFormats) ? e.datetimeFormats : mt(a), u = F(e.numberFormats) ? e.numberFormats : mt(a), d = J(U(), e.modifiers, Pa()), g = e.pluralRules || U(), _ = W(e.missing) ? e.missing : null, m = D(e.missingWarn) || Ee(e.missingWarn) ? e.missingWarn : true, k = D(e.fallbackWarn) || Ee(e.fallbackWarn) ? e.fallbackWarn : true, O = !!e.fallbackFormat, S = !!e.unresolving, w = W(e.postTranslation) ? e.postTranslation : null, f = F(e.processor) ? e.processor : null, v = D(e.warnHtmlMessage) ? e.warnHtmlMessage : true, L = !!e.escapeParameter, h = W(e.messageCompiler) ? e.messageCompiler : Mn, T = W(e.messageResolver) ? e.messageResolver : xn || Ia, I = W(e.localeFallbacker) ? e.localeFallbacker : Un || va, E = M(e.fallbackContext) ? e.fallbackContext : void 0, N = e, A = M(N.__datetimeFormatters) ? N.__datetimeFormatters : /* @__PURE__ */ new Map(), H = M(N.__numberFormatters) ? N.__numberFormatters : /* @__PURE__ */ new Map(), G = M(N.__meta) ? N.__meta : {};
    en++;
    const $ = {
      version: n,
      cid: en,
      locale: r,
      fallbackLocale: s,
      messages: o,
      modifiers: d,
      pluralRules: g,
      missing: _,
      missingWarn: m,
      fallbackWarn: k,
      fallbackFormat: O,
      unresolving: S,
      postTranslation: w,
      processor: f,
      warnHtmlMessage: v,
      escapeParameter: L,
      messageCompiler: h,
      messageResolver: T,
      localeFallbacker: I,
      fallbackContext: E,
      onWarn: t,
      __meta: G
    };
    return $.datetimeFormats = i, $.numberFormats = u, $.__datetimeFormatters = A, $.__numberFormatters = H, __INTLIFY_PROD_DEVTOOLS__ && pa($, n, G), $;
  }
  const mt = (e) => ({
    [e]: U()
  });
  function Nt(e, t, n, r, a) {
    const { missing: s, onWarn: o } = e;
    if (s !== null) {
      const i = s(e, n, t, a);
      return C(i) ? i : t;
    } else return t;
  }
  function we(e, t, n) {
    const r = e;
    r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
  }
  function Ua(e, t) {
    return e === t ? false : e.split("-")[0] === t.split("-")[0];
  }
  function $a(e, t) {
    const n = t.indexOf(e);
    if (n === -1) return false;
    for (let r = n + 1; r < t.length; r++) if (Ua(e, t[r])) return true;
    return false;
  }
  function tn(e, ...t) {
    const { datetimeFormats: n, unresolving: r, fallbackLocale: a, onWarn: s, localeFallbacker: o } = e, { __datetimeFormatters: i } = e, [u, d, g, _] = ht(...t), m = D(g.missingWarn) ? g.missingWarn : e.missingWarn;
    D(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
    const k = !!g.part, O = Pt(e, g), S = o(e, a, O);
    if (!C(u) || u === "") return new Intl.DateTimeFormat(O, _).format(d);
    let w = {}, f, v = null;
    const L = "datetime format";
    for (let I = 0; I < S.length && (f = S[I], w = n[f] || {}, v = w[u], !F(v)); I++) Nt(e, u, f, m, L);
    if (!F(v) || !C(f)) return r ? Je : u;
    let h = `${f}__${u}`;
    Ge(_) || (h = `${h}__${JSON.stringify(_)}`);
    let T = i.get(h);
    return T || (T = new Intl.DateTimeFormat(f, J({}, v, _)), i.set(h, T)), k ? T.formatToParts(d) : T.format(d);
  }
  const Wn = [
    "localeMatcher",
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "timeZoneName",
    "formatMatcher",
    "hour12",
    "timeZone",
    "dateStyle",
    "timeStyle",
    "calendar",
    "dayPeriod",
    "numberingSystem",
    "hourCycle",
    "fractionalSecondDigits"
  ];
  function ht(...e) {
    const [t, n, r, a] = e, s = U();
    let o = U(), i;
    if (C(t)) {
      const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
      if (!u) throw oe(se.INVALID_ISO_DATE_ARGUMENT);
      const d = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
      i = new Date(d);
      try {
        i.toISOString();
      } catch {
        throw oe(se.INVALID_ISO_DATE_ARGUMENT);
      }
    } else if (Tr(t)) {
      if (isNaN(t.getTime())) throw oe(se.INVALID_DATE_ARGUMENT);
      i = t;
    } else if (q(t)) i = t;
    else throw oe(se.INVALID_ARGUMENT);
    return C(n) ? s.key = n : F(n) && Object.keys(n).forEach((u) => {
      Wn.includes(u) ? o[u] = n[u] : s[u] = n[u];
    }), C(r) ? s.locale = r : F(r) && (o = r), F(a) && (o = a), [
      s.key || "",
      i,
      s,
      o
    ];
  }
  function nn(e, t, n) {
    const r = e;
    for (const a in n) {
      const s = `${t}__${a}`;
      r.__datetimeFormatters.has(s) && r.__datetimeFormatters.delete(s);
    }
  }
  function rn(e, ...t) {
    const { numberFormats: n, unresolving: r, fallbackLocale: a, onWarn: s, localeFallbacker: o } = e, { __numberFormatters: i } = e, [u, d, g, _] = vt(...t), m = D(g.missingWarn) ? g.missingWarn : e.missingWarn;
    D(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
    const k = !!g.part, O = Pt(e, g), S = o(e, a, O);
    if (!C(u) || u === "") return new Intl.NumberFormat(O, _).format(d);
    let w = {}, f, v = null;
    const L = "number format";
    for (let I = 0; I < S.length && (f = S[I], w = n[f] || {}, v = w[u], !F(v)); I++) Nt(e, u, f, m, L);
    if (!F(v) || !C(f)) return r ? Je : u;
    let h = `${f}__${u}`;
    Ge(_) || (h = `${h}__${JSON.stringify(_)}`);
    let T = i.get(h);
    return T || (T = new Intl.NumberFormat(f, J({}, v, _)), i.set(h, T)), k ? T.formatToParts(d) : T.format(d);
  }
  const Hn = [
    "localeMatcher",
    "style",
    "currency",
    "currencyDisplay",
    "currencySign",
    "useGrouping",
    "minimumIntegerDigits",
    "minimumFractionDigits",
    "maximumFractionDigits",
    "minimumSignificantDigits",
    "maximumSignificantDigits",
    "compactDisplay",
    "notation",
    "signDisplay",
    "unit",
    "unitDisplay",
    "roundingMode",
    "roundingPriority",
    "roundingIncrement",
    "trailingZeroDisplay"
  ];
  function vt(...e) {
    const [t, n, r, a] = e, s = U();
    let o = U();
    if (!q(t)) throw oe(se.INVALID_ARGUMENT);
    const i = t;
    return C(n) ? s.key = n : F(n) && Object.keys(n).forEach((u) => {
      Hn.includes(u) ? o[u] = n[u] : s[u] = n[u];
    }), C(r) ? s.locale = r : F(r) && (o = r), F(a) && (o = a), [
      s.key || "",
      i,
      s,
      o
    ];
  }
  function an(e, t, n) {
    const r = e;
    for (const a in n) {
      const s = `${t}__${a}`;
      r.__numberFormatters.has(s) && r.__numberFormatters.delete(s);
    }
  }
  const ja = (e) => e, Wa = (e) => "", Ha = "text", Va = (e) => e.length === 0 ? "" : It(e), Ya = Pr;
  function sn(e, t) {
    return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
  }
  function Ba(e) {
    const t = q(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (q(e.named.count) || q(e.named.n)) ? q(e.named.count) ? e.named.count : q(e.named.n) ? e.named.n : t : t;
  }
  function Ga(e, t) {
    t.count || (t.count = e), t.n || (t.n = e);
  }
  function qa(e = {}) {
    const t = e.locale, n = Ba(e), r = M(e.pluralRules) && C(t) && W(e.pluralRules[t]) ? e.pluralRules[t] : sn, a = M(e.pluralRules) && C(t) && W(e.pluralRules[t]) ? sn : void 0, s = (f) => f[r(n, f.length, a)], o = e.list || [], i = (f) => o[f], u = e.named || U();
    q(e.pluralIndex) && Ga(n, u);
    const d = (f) => u[f];
    function g(f, v) {
      const L = W(e.messages) ? e.messages(f, !!v) : M(e.messages) ? e.messages[f] : false;
      return L || (e.parent ? e.parent.message(f) : Wa);
    }
    const _ = (f) => e.modifiers ? e.modifiers[f] : ja, m = F(e.processor) && W(e.processor.normalize) ? e.processor.normalize : Va, k = F(e.processor) && W(e.processor.interpolate) ? e.processor.interpolate : Ya, O = F(e.processor) && C(e.processor.type) ? e.processor.type : Ha, w = {
      list: i,
      named: d,
      plural: s,
      linked: (f, ...v) => {
        const [L, h] = v;
        let T = "text", I = "";
        v.length === 1 ? M(L) ? (I = L.modifier || I, T = L.type || T) : C(L) && (I = L || I) : v.length === 2 && (C(L) && (I = L || I), C(h) && (T = h || T));
        const E = g(f, true)(w), N = T === "vnode" && V(E) && I ? E[0] : E;
        return I ? _(I)(N, T) : N;
      },
      message: g,
      type: O,
      interpolate: k,
      normalize: m,
      values: J(U(), o, u)
    };
    return w;
  }
  const on = () => "", Z = (e) => W(e);
  function ln(e, ...t) {
    const { fallbackFormat: n, postTranslation: r, unresolving: a, messageCompiler: s, fallbackLocale: o, messages: i } = e, [u, d] = bt(...t), g = D(d.missingWarn) ? d.missingWarn : e.missingWarn, _ = D(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, m = D(d.escapeParameter) ? d.escapeParameter : e.escapeParameter, k = !!d.resolvedMessage, O = C(d.default) || D(d.default) ? D(d.default) ? s ? u : () => u : d.default : n ? s ? u : () => u : null, S = n || O != null && (C(O) || W(O)), w = Pt(e, d);
    m && Ja(d);
    let [f, v, L] = k ? [
      u,
      w,
      i[w] || U()
    ] : Vn(e, u, w, o, _, g), h = f, T = u;
    if (!k && !(C(h) || ne(h) || Z(h)) && S && (h = O, T = h), !k && (!(C(h) || ne(h) || Z(h)) || !C(v))) return a ? Je : u;
    let I = false;
    const E = () => {
      I = true;
    }, N = Z(h) ? h : Yn(e, u, v, h, T, E);
    if (I) return h;
    const A = Qa(e, v, L, d), H = qa(A), G = Ka(e, N, H), $ = r ? r(G, u) : G;
    if (__INTLIFY_PROD_DEVTOOLS__) {
      const K = {
        timestamp: Date.now(),
        key: C(u) ? u : Z(h) ? h.key : "",
        locale: v || (Z(h) ? h.locale : ""),
        format: C(h) ? h : Z(h) ? h.source : "",
        message: $
      };
      K.meta = J({}, e.__meta, Da() || {}), _a(K);
    }
    return $;
  }
  function Ja(e) {
    V(e.list) ? e.list = e.list.map((t) => C(t) ? Vt(t) : t) : M(e.named) && Object.keys(e.named).forEach((t) => {
      C(e.named[t]) && (e.named[t] = Vt(e.named[t]));
    });
  }
  function Vn(e, t, n, r, a, s) {
    const { messages: o, onWarn: i, messageResolver: u, localeFallbacker: d } = e, g = d(e, r, n);
    let _ = U(), m, k = null;
    const O = "translate";
    for (let S = 0; S < g.length && (m = g[S], _ = o[m] || U(), (k = u(_, t)) === null && (k = _[t]), !(C(k) || ne(k) || Z(k))); S++) if (!$a(m, g)) {
      const w = Nt(e, t, m, s, O);
      w !== t && (k = w);
    }
    return [
      k,
      m,
      _
    ];
  }
  function Yn(e, t, n, r, a, s) {
    const { messageCompiler: o, warnHtmlMessage: i } = e;
    if (Z(r)) {
      const d = r;
      return d.locale = d.locale || n, d.key = d.key || t, d;
    }
    if (o == null) {
      const d = () => r;
      return d.locale = n, d.key = t, d;
    }
    const u = o(r, Xa(e, n, a, r, i, s));
    return u.locale = n, u.key = t, u.source = r, u;
  }
  function Ka(e, t, n) {
    return t(n);
  }
  function bt(...e) {
    const [t, n, r] = e, a = U();
    if (!C(t) && !q(t) && !Z(t) && !ne(t)) throw oe(se.INVALID_ARGUMENT);
    const s = q(t) ? String(t) : (Z(t), t);
    return q(n) ? a.plural = n : C(n) ? a.default = n : F(n) && !Ge(n) ? a.named = n : V(n) && (a.list = n), q(r) ? a.plural = r : C(r) ? a.default = r : F(r) && J(a, r), [
      s,
      a
    ];
  }
  function Xa(e, t, n, r, a, s) {
    return {
      locale: t,
      key: n,
      warnHtmlMessage: a,
      onError: (o) => {
        throw s && s(o), o;
      },
      onCacheKey: (o) => Sr(t, n, o)
    };
  }
  function Qa(e, t, n, r) {
    const { modifiers: a, pluralRules: s, messageResolver: o, fallbackLocale: i, fallbackWarn: u, missingWarn: d, fallbackContext: g } = e, m = {
      locale: t,
      modifiers: a,
      pluralRules: s,
      messages: (k, O) => {
        let S = o(n, k);
        if (S == null && (g || O)) {
          const [, , w] = Vn(g || e, k, t, i, u, d);
          S = o(w, k);
        }
        if (C(S) || ne(S)) {
          let w = false;
          const v = Yn(e, k, t, S, k, () => {
            w = true;
          });
          return w ? on : v;
        } else return Z(S) ? S : on;
      }
    };
    return e.processor && (m.processor = e.processor), r.list && (m.list = r.list), r.named && (m.named = r.named), q(r.plural) && (m.pluralIndex = r.plural), m;
  }
  na();
  const za = "11.1.5";
  function Za() {
    typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (pe().__VUE_I18N_FULL_INSTALL__ = true), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (pe().__VUE_I18N_LEGACY_API__ = true), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (pe().__INTLIFY_DROP_MESSAGE_COMPILER__ = false), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (pe().__INTLIFY_PROD_DEVTOOLS__ = false);
  }
  const Q = {
    UNEXPECTED_RETURN_TYPE: ha,
    INVALID_ARGUMENT: 25,
    MUST_BE_CALL_SETUP_TOP: 26,
    NOT_INSTALLED: 27,
    REQUIRED_VALUE: 28,
    INVALID_VALUE: 29,
    NOT_INSTALLED_WITH_PROVIDE: 31,
    UNEXPECTED_ERROR: 32
  };
  function z(e, ...t) {
    return qe(e, null, void 0);
  }
  const Et = ue("__translateVNode"), yt = ue("__datetimeParts"), Lt = ue("__numberParts"), Bn = ue("__setPluralRules"), Gn = ue("__injectWithOption"), kt = ue("__dispose");
  function Pe(e) {
    if (!M(e) || ne(e)) return e;
    for (const t in e) if (ee(e, t)) if (!t.includes(".")) M(e[t]) && Pe(e[t]);
    else {
      const n = t.split("."), r = n.length - 1;
      let a = e, s = false;
      for (let o = 0; o < r; o++) {
        if (n[o] === "__proto__") throw new Error(`unsafe key: ${n[o]}`);
        if (n[o] in a || (a[n[o]] = U()), !M(a[n[o]])) {
          s = true;
          break;
        }
        a = a[n[o]];
      }
      if (s || (ne(a) ? Fn.includes(n[r]) || delete e[t] : (a[n[r]] = e[t], delete e[t])), !ne(a)) {
        const o = a[n[r]];
        M(o) && Pe(o);
      }
    }
    return e;
  }
  function At(e, t) {
    const { messages: n, __i18n: r, messageResolver: a, flatJson: s } = t, o = F(n) ? n : V(r) ? U() : {
      [e]: U()
    };
    if (V(r) && r.forEach((i) => {
      if ("locale" in i && "resource" in i) {
        const { locale: u, resource: d } = i;
        u ? (o[u] = o[u] || U(), je(d, o[u])) : je(d, o);
      } else C(i) && je(JSON.parse(i), o);
    }), a == null && s) for (const i in o) ee(o, i) && Pe(o[i]);
    return o;
  }
  function qn(e) {
    return e.type;
  }
  function Jn(e, t, n) {
    let r = M(t.messages) ? t.messages : U();
    "__i18nGlobal" in n && (r = At(e.locale.value, {
      messages: r,
      __i18n: n.__i18nGlobal
    }));
    const a = Object.keys(r);
    a.length && a.forEach((s) => {
      e.mergeLocaleMessage(s, r[s]);
    });
    {
      if (M(t.datetimeFormats)) {
        const s = Object.keys(t.datetimeFormats);
        s.length && s.forEach((o) => {
          e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
        });
      }
      if (M(t.numberFormats)) {
        const s = Object.keys(t.numberFormats);
        s.length && s.forEach((o) => {
          e.mergeNumberFormat(o, t.numberFormats[o]);
        });
      }
    }
  }
  function cn(e) {
    return or(lr, null, e, 0);
  }
  const un = "__INTLIFY_META__", dn = () => [], es = () => false;
  let fn = 0;
  function mn(e) {
    return (t, n, r, a) => e(n, r, Te() || void 0, a);
  }
  const ts = () => {
    const e = Te();
    let t = null;
    return e && (t = qn(e)[un]) ? {
      [un]: t
    } : null;
  };
  function Rt(e = {}) {
    const { __root: t, __injectWithOption: n } = e, r = t === void 0, a = e.flatJson, s = Ye ? er : tr;
    let o = D(e.inheritLocale) ? e.inheritLocale : true;
    const i = s(t && o ? t.locale.value : C(e.locale) ? e.locale : Oe), u = s(t && o ? t.fallbackLocale.value : C(e.fallbackLocale) || V(e.fallbackLocale) || F(e.fallbackLocale) || e.fallbackLocale === false ? e.fallbackLocale : i.value), d = s(At(i.value, e)), g = s(F(e.datetimeFormats) ? e.datetimeFormats : {
      [i.value]: {}
    }), _ = s(F(e.numberFormats) ? e.numberFormats : {
      [i.value]: {}
    });
    let m = t ? t.missingWarn : D(e.missingWarn) || Ee(e.missingWarn) ? e.missingWarn : true, k = t ? t.fallbackWarn : D(e.fallbackWarn) || Ee(e.fallbackWarn) ? e.fallbackWarn : true, O = t ? t.fallbackRoot : D(e.fallbackRoot) ? e.fallbackRoot : true, S = !!e.fallbackFormat, w = W(e.missing) ? e.missing : null, f = W(e.missing) ? mn(e.missing) : null, v = W(e.postTranslation) ? e.postTranslation : null, L = t ? t.warnHtmlMessage : D(e.warnHtmlMessage) ? e.warnHtmlMessage : true, h = !!e.escapeParameter;
    const T = t ? t.modifiers : F(e.modifiers) ? e.modifiers : {};
    let I = e.pluralRules || t && t.pluralRules, E;
    E = (() => {
      r && Zt(null);
      const p = {
        version: za,
        locale: i.value,
        fallbackLocale: u.value,
        messages: d.value,
        modifiers: T,
        pluralRules: I,
        missing: f === null ? void 0 : f,
        missingWarn: m,
        fallbackWarn: k,
        fallbackFormat: S,
        unresolving: true,
        postTranslation: v === null ? void 0 : v,
        warnHtmlMessage: L,
        escapeParameter: h,
        messageResolver: e.messageResolver,
        messageCompiler: e.messageCompiler,
        __meta: {
          framework: "vue"
        }
      };
      p.datetimeFormats = g.value, p.numberFormats = _.value, p.__datetimeFormatters = F(E) ? E.__datetimeFormatters : void 0, p.__numberFormatters = F(E) ? E.__numberFormatters : void 0;
      const y = xa(p);
      return r && Zt(y), y;
    })(), we(E, i.value, u.value);
    function A() {
      return [
        i.value,
        u.value,
        d.value,
        g.value,
        _.value
      ];
    }
    const H = Se({
      get: () => i.value,
      set: (p) => {
        E.locale = p, i.value = p;
      }
    }), G = Se({
      get: () => u.value,
      set: (p) => {
        E.fallbackLocale = p, u.value = p, we(E, i.value, p);
      }
    }), $ = Se(() => d.value), K = Se(() => g.value), le = Se(() => _.value);
    function ie() {
      return W(v) ? v : null;
    }
    function Ke(p) {
      v = p, E.postTranslation = p;
    }
    function Xe() {
      return w;
    }
    function Qe(p) {
      p !== null && (f = mn(p)), w = p, E.missing = f;
    }
    const re = (p, y, j, B, me, Fe) => {
      A();
      let he;
      try {
        __INTLIFY_PROD_DEVTOOLS__, r || (E.fallbackContext = t ? Ma() : void 0), he = p(E);
      } finally {
        __INTLIFY_PROD_DEVTOOLS__, r || (E.fallbackContext = void 0);
      }
      if (j !== "translate exists" && q(he) && he === Je || j === "translate exists" && !he) {
        const [Qn, yo] = y();
        return t && O ? B(t) : me(Qn);
      } else {
        if (Fe(he)) return he;
        throw z(Q.UNEXPECTED_RETURN_TYPE);
      }
    };
    function Ne(...p) {
      return re((y) => Reflect.apply(ln, null, [
        y,
        ...p
      ]), () => bt(...p), "translate", (y) => Reflect.apply(y.t, y, [
        ...p
      ]), (y) => y, (y) => C(y));
    }
    function Ae(...p) {
      const [y, j, B] = p;
      if (B && !M(B)) throw z(Q.INVALID_ARGUMENT);
      return Ne(y, j, J({
        resolvedMessage: true
      }, B || {}));
    }
    function ze(...p) {
      return re((y) => Reflect.apply(tn, null, [
        y,
        ...p
      ]), () => ht(...p), "datetime format", (y) => Reflect.apply(y.d, y, [
        ...p
      ]), () => Qt, (y) => C(y) || V(y));
    }
    function Ze(...p) {
      return re((y) => Reflect.apply(rn, null, [
        y,
        ...p
      ]), () => vt(...p), "number format", (y) => Reflect.apply(y.n, y, [
        ...p
      ]), () => Qt, (y) => C(y) || V(y));
    }
    function et(p) {
      return p.map((y) => C(y) || q(y) || D(y) ? cn(String(y)) : y);
    }
    const tt = {
      normalize: et,
      interpolate: (p) => p,
      type: "vnode"
    };
    function nt(...p) {
      return re((y) => {
        let j;
        const B = y;
        try {
          B.processor = tt, j = Reflect.apply(ln, null, [
            B,
            ...p
          ]);
        } finally {
          B.processor = null;
        }
        return j;
      }, () => bt(...p), "translate", (y) => y[Et](...p), (y) => [
        cn(y)
      ], (y) => V(y));
    }
    function Re(...p) {
      return re((y) => Reflect.apply(rn, null, [
        y,
        ...p
      ]), () => vt(...p), "number format", (y) => y[Lt](...p), dn, (y) => C(y) || V(y));
    }
    function rt(...p) {
      return re((y) => Reflect.apply(tn, null, [
        y,
        ...p
      ]), () => ht(...p), "datetime format", (y) => y[yt](...p), dn, (y) => C(y) || V(y));
    }
    function at(p) {
      I = p, E.pluralRules = I;
    }
    function st(p, y) {
      return re(() => {
        if (!p) return false;
        const j = C(y) ? y : i.value, B = _e(j), me = E.messageResolver(B, p);
        return ne(me) || Z(me) || C(me);
      }, () => [
        p
      ], "translate exists", (j) => Reflect.apply(j.te, j, [
        p,
        y
      ]), es, (j) => D(j));
    }
    function ot(p) {
      let y = null;
      const j = Dn(E, u.value, i.value);
      for (let B = 0; B < j.length; B++) {
        const me = d.value[j[B]] || {}, Fe = E.messageResolver(me, p);
        if (Fe != null) {
          y = Fe;
          break;
        }
      }
      return y;
    }
    function Le(p) {
      const y = ot(p);
      return y ?? (t ? t.tm(p) || {} : {});
    }
    function _e(p) {
      return d.value[p] || {};
    }
    function ge(p, y) {
      if (a) {
        const j = {
          [p]: y
        };
        for (const B in j) ee(j, B) && Pe(j[B]);
        y = j[p];
      }
      d.value[p] = y, E.messages = d.value;
    }
    function ke(p, y) {
      d.value[p] = d.value[p] || {};
      const j = {
        [p]: y
      };
      if (a) for (const B in j) ee(j, B) && Pe(j[B]);
      y = j[p], je(y, d.value[p]), E.messages = d.value;
    }
    function lt(p) {
      return g.value[p] || {};
    }
    function l(p, y) {
      g.value[p] = y, E.datetimeFormats = g.value, nn(E, p, y);
    }
    function c(p, y) {
      g.value[p] = J(g.value[p] || {}, y), E.datetimeFormats = g.value, nn(E, p, y);
    }
    function b(p) {
      return _.value[p] || {};
    }
    function P(p, y) {
      _.value[p] = y, E.numberFormats = _.value, an(E, p, y);
    }
    function Y(p, y) {
      _.value[p] = J(_.value[p] || {}, y), E.numberFormats = _.value, an(E, p, y);
    }
    fn++, t && Ye && (pt(t.locale, (p) => {
      o && (i.value = p, E.locale = p, we(E, i.value, u.value));
    }), pt(t.fallbackLocale, (p) => {
      o && (u.value = p, E.fallbackLocale = p, we(E, i.value, u.value));
    }));
    const R = {
      id: fn,
      locale: H,
      fallbackLocale: G,
      get inheritLocale() {
        return o;
      },
      set inheritLocale(p) {
        o = p, p && t && (i.value = t.locale.value, u.value = t.fallbackLocale.value, we(E, i.value, u.value));
      },
      get availableLocales() {
        return Object.keys(d.value).sort();
      },
      messages: $,
      get modifiers() {
        return T;
      },
      get pluralRules() {
        return I || {};
      },
      get isGlobal() {
        return r;
      },
      get missingWarn() {
        return m;
      },
      set missingWarn(p) {
        m = p, E.missingWarn = m;
      },
      get fallbackWarn() {
        return k;
      },
      set fallbackWarn(p) {
        k = p, E.fallbackWarn = k;
      },
      get fallbackRoot() {
        return O;
      },
      set fallbackRoot(p) {
        O = p;
      },
      get fallbackFormat() {
        return S;
      },
      set fallbackFormat(p) {
        S = p, E.fallbackFormat = S;
      },
      get warnHtmlMessage() {
        return L;
      },
      set warnHtmlMessage(p) {
        L = p, E.warnHtmlMessage = p;
      },
      get escapeParameter() {
        return h;
      },
      set escapeParameter(p) {
        h = p, E.escapeParameter = p;
      },
      t: Ne,
      getLocaleMessage: _e,
      setLocaleMessage: ge,
      mergeLocaleMessage: ke,
      getPostTranslationHandler: ie,
      setPostTranslationHandler: Ke,
      getMissingHandler: Xe,
      setMissingHandler: Qe,
      [Bn]: at
    };
    return R.datetimeFormats = K, R.numberFormats = le, R.rt = Ae, R.te = st, R.tm = Le, R.d = ze, R.n = Ze, R.getDateTimeFormat = lt, R.setDateTimeFormat = l, R.mergeDateTimeFormat = c, R.getNumberFormat = b, R.setNumberFormat = P, R.mergeNumberFormat = Y, R[Gn] = n, R[Et] = nt, R[yt] = rt, R[Lt] = Re, R;
  }
  function ns(e) {
    const t = C(e.locale) ? e.locale : Oe, n = C(e.fallbackLocale) || V(e.fallbackLocale) || F(e.fallbackLocale) || e.fallbackLocale === false ? e.fallbackLocale : t, r = W(e.missing) ? e.missing : void 0, a = D(e.silentTranslationWarn) || Ee(e.silentTranslationWarn) ? !e.silentTranslationWarn : true, s = D(e.silentFallbackWarn) || Ee(e.silentFallbackWarn) ? !e.silentFallbackWarn : true, o = D(e.fallbackRoot) ? e.fallbackRoot : true, i = !!e.formatFallbackMessages, u = F(e.modifiers) ? e.modifiers : {}, d = e.pluralizationRules, g = W(e.postTranslation) ? e.postTranslation : void 0, _ = C(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : true, m = !!e.escapeParameterHtml, k = D(e.sync) ? e.sync : true;
    let O = e.messages;
    if (F(e.sharedMessages)) {
      const T = e.sharedMessages;
      O = Object.keys(T).reduce((E, N) => {
        const A = E[N] || (E[N] = {});
        return J(A, T[N]), E;
      }, O || {});
    }
    const { __i18n: S, __root: w, __injectWithOption: f } = e, v = e.datetimeFormats, L = e.numberFormats, h = e.flatJson;
    return {
      locale: t,
      fallbackLocale: n,
      messages: O,
      flatJson: h,
      datetimeFormats: v,
      numberFormats: L,
      missing: r,
      missingWarn: a,
      fallbackWarn: s,
      fallbackRoot: o,
      fallbackFormat: i,
      modifiers: u,
      pluralRules: d,
      postTranslation: g,
      warnHtmlMessage: _,
      escapeParameter: m,
      messageResolver: e.messageResolver,
      inheritLocale: k,
      __i18n: S,
      __root: w,
      __injectWithOption: f
    };
  }
  function St(e = {}) {
    const t = Rt(ns(e)), { __extender: n } = e, r = {
      id: t.id,
      get locale() {
        return t.locale.value;
      },
      set locale(a) {
        t.locale.value = a;
      },
      get fallbackLocale() {
        return t.fallbackLocale.value;
      },
      set fallbackLocale(a) {
        t.fallbackLocale.value = a;
      },
      get messages() {
        return t.messages.value;
      },
      get datetimeFormats() {
        return t.datetimeFormats.value;
      },
      get numberFormats() {
        return t.numberFormats.value;
      },
      get availableLocales() {
        return t.availableLocales;
      },
      get missing() {
        return t.getMissingHandler();
      },
      set missing(a) {
        t.setMissingHandler(a);
      },
      get silentTranslationWarn() {
        return D(t.missingWarn) ? !t.missingWarn : t.missingWarn;
      },
      set silentTranslationWarn(a) {
        t.missingWarn = D(a) ? !a : a;
      },
      get silentFallbackWarn() {
        return D(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn;
      },
      set silentFallbackWarn(a) {
        t.fallbackWarn = D(a) ? !a : a;
      },
      get modifiers() {
        return t.modifiers;
      },
      get formatFallbackMessages() {
        return t.fallbackFormat;
      },
      set formatFallbackMessages(a) {
        t.fallbackFormat = a;
      },
      get postTranslation() {
        return t.getPostTranslationHandler();
      },
      set postTranslation(a) {
        t.setPostTranslationHandler(a);
      },
      get sync() {
        return t.inheritLocale;
      },
      set sync(a) {
        t.inheritLocale = a;
      },
      get warnHtmlInMessage() {
        return t.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(a) {
        t.warnHtmlMessage = a !== "off";
      },
      get escapeParameterHtml() {
        return t.escapeParameter;
      },
      set escapeParameterHtml(a) {
        t.escapeParameter = a;
      },
      get pluralizationRules() {
        return t.pluralRules || {};
      },
      __composer: t,
      t(...a) {
        return Reflect.apply(t.t, t, [
          ...a
        ]);
      },
      rt(...a) {
        return Reflect.apply(t.rt, t, [
          ...a
        ]);
      },
      te(a, s) {
        return t.te(a, s);
      },
      tm(a) {
        return t.tm(a);
      },
      getLocaleMessage(a) {
        return t.getLocaleMessage(a);
      },
      setLocaleMessage(a, s) {
        t.setLocaleMessage(a, s);
      },
      mergeLocaleMessage(a, s) {
        t.mergeLocaleMessage(a, s);
      },
      d(...a) {
        return Reflect.apply(t.d, t, [
          ...a
        ]);
      },
      getDateTimeFormat(a) {
        return t.getDateTimeFormat(a);
      },
      setDateTimeFormat(a, s) {
        t.setDateTimeFormat(a, s);
      },
      mergeDateTimeFormat(a, s) {
        t.mergeDateTimeFormat(a, s);
      },
      n(...a) {
        return Reflect.apply(t.n, t, [
          ...a
        ]);
      },
      getNumberFormat(a) {
        return t.getNumberFormat(a);
      },
      setNumberFormat(a, s) {
        t.setNumberFormat(a, s);
      },
      mergeNumberFormat(a, s) {
        t.mergeNumberFormat(a, s);
      }
    };
    return r.__extender = n, r;
  }
  function rs(e, t, n) {
    return {
      beforeCreate() {
        const r = Te();
        if (!r) throw z(Q.UNEXPECTED_ERROR);
        const a = this.$options;
        if (a.i18n) {
          const s = a.i18n;
          if (a.__i18n && (s.__i18n = a.__i18n), s.__root = t, this === this.$root) this.$i18n = pn(e, s);
          else {
            s.__injectWithOption = true, s.__extender = n.__vueI18nExtend, this.$i18n = St(s);
            const o = this.$i18n;
            o.__extender && (o.__disposer = o.__extender(this.$i18n));
          }
        } else if (a.__i18n) if (this === this.$root) this.$i18n = pn(e, a);
        else {
          this.$i18n = St({
            __i18n: a.__i18n,
            __injectWithOption: true,
            __extender: n.__vueI18nExtend,
            __root: t
          });
          const s = this.$i18n;
          s.__extender && (s.__disposer = s.__extender(this.$i18n));
        }
        else this.$i18n = e;
        a.__i18nGlobal && Jn(t, a, a), this.$t = (...s) => this.$i18n.t(...s), this.$rt = (...s) => this.$i18n.rt(...s), this.$te = (s, o) => this.$i18n.te(s, o), this.$d = (...s) => this.$i18n.d(...s), this.$n = (...s) => this.$i18n.n(...s), this.$tm = (s) => this.$i18n.tm(s), n.__setInstance(r, this.$i18n);
      },
      mounted() {
      },
      unmounted() {
        const r = Te();
        if (!r) throw z(Q.UNEXPECTED_ERROR);
        const a = this.$i18n;
        delete this.$t, delete this.$rt, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, a.__disposer && (a.__disposer(), delete a.__disposer, delete a.__extender), n.__deleteInstance(r), delete this.$i18n;
      }
    };
  }
  function pn(e, t) {
    e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Bn](t.pluralizationRules || e.pluralizationRules);
    const n = At(e.locale, {
      messages: t.messages,
      __i18n: t.__i18n
    });
    return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
  }
  const Ft = {
    tag: {
      type: [
        String,
        Object
      ]
    },
    locale: {
      type: String
    },
    scope: {
      type: String,
      validator: (e) => e === "parent" || e === "global",
      default: "parent"
    },
    i18n: {
      type: Object
    }
  };
  function as({ slots: e }, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, a) => [
      ...r,
      ...a.type === Ln ? a.children : [
        a
      ]
    ], []) : t.reduce((n, r) => {
      const a = e[r];
      return a && (n[r] = a()), n;
    }, U());
  }
  function Kn() {
    return Ln;
  }
  const ss = wt({
    name: "i18n-t",
    props: J({
      keypath: {
        type: String,
        required: true
      },
      plural: {
        type: [
          Number,
          String
        ],
        validator: (e) => q(e) || !isNaN(e)
      }
    }, Ft),
    setup(e, t) {
      const { slots: n, attrs: r } = t, a = e.i18n || Dt({
        useScope: e.scope,
        __useComponent: true
      });
      return () => {
        const s = Object.keys(n).filter((_) => _[0] !== "_"), o = U();
        e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = C(e.plural) ? +e.plural : e.plural);
        const i = as(t, s), u = a[Et](e.keypath, i, o), d = J(U(), r), g = C(e.tag) || M(e.tag) ? e.tag : Kn();
        return yn(g, d, u);
      };
    }
  }), _n = ss;
  function os(e) {
    return V(e) && !C(e[0]);
  }
  function Xn(e, t, n, r) {
    const { slots: a, attrs: s } = t;
    return () => {
      const o = {
        part: true
      };
      let i = U();
      e.locale && (o.locale = e.locale), C(e.format) ? o.key = e.format : M(e.format) && (C(e.format.key) && (o.key = e.format.key), i = Object.keys(e.format).reduce((m, k) => n.includes(k) ? J(U(), m, {
        [k]: e.format[k]
      }) : m, U()));
      const u = r(e.value, o, i);
      let d = [
        o.key
      ];
      V(u) ? d = u.map((m, k) => {
        const O = a[m.type], S = O ? O({
          [m.type]: m.value,
          index: k,
          parts: u
        }) : [
          m.value
        ];
        return os(S) && (S[0].key = `${m.type}-${k}`), S;
      }) : C(u) && (d = [
        u
      ]);
      const g = J(U(), s), _ = C(e.tag) || M(e.tag) ? e.tag : Kn();
      return yn(_, g, d);
    };
  }
  const ls = wt({
    name: "i18n-n",
    props: J({
      value: {
        type: Number,
        required: true
      },
      format: {
        type: [
          String,
          Object
        ]
      }
    }, Ft),
    setup(e, t) {
      const n = e.i18n || Dt({
        useScope: e.scope,
        __useComponent: true
      });
      return Xn(e, t, Hn, (...r) => n[Lt](...r));
    }
  }), gn = ls;
  function is(e, t) {
    const n = e;
    if (e.mode === "composition") return n.__getInstance(t) || e.global;
    {
      const r = n.__getInstance(t);
      return r != null ? r.__composer : e.global.__composer;
    }
  }
  function cs(e) {
    const t = (o) => {
      const { instance: i, value: u } = o;
      if (!i || !i.$) throw z(Q.UNEXPECTED_ERROR);
      const d = is(e, i.$), g = hn(u);
      return [
        Reflect.apply(d.t, d, [
          ...vn(g)
        ]),
        d
      ];
    };
    return {
      created: (o, i) => {
        const [u, d] = t(i);
        Ye && e.global === d && (o.__i18nWatcher = pt(d.locale, () => {
          i.instance && i.instance.$forceUpdate();
        })), o.__composer = d, o.textContent = u;
      },
      unmounted: (o) => {
        Ye && o.__i18nWatcher && (o.__i18nWatcher(), o.__i18nWatcher = void 0, delete o.__i18nWatcher), o.__composer && (o.__composer = void 0, delete o.__composer);
      },
      beforeUpdate: (o, { value: i }) => {
        if (o.__composer) {
          const u = o.__composer, d = hn(i);
          o.textContent = Reflect.apply(u.t, u, [
            ...vn(d)
          ]);
        }
      },
      getSSRProps: (o) => {
        const [i] = t(o);
        return {
          textContent: i
        };
      }
    };
  }
  function hn(e) {
    if (C(e)) return {
      path: e
    };
    if (F(e)) {
      if (!("path" in e)) throw z(Q.REQUIRED_VALUE, "path");
      return e;
    } else throw z(Q.INVALID_VALUE);
  }
  function vn(e) {
    const { path: t, locale: n, args: r, choice: a, plural: s } = e, o = {}, i = r || {};
    return C(n) && (o.locale = n), q(a) && (o.plural = a), q(s) && (o.plural = s), [
      t,
      i,
      o
    ];
  }
  function us(e, t, ...n) {
    const r = F(n[0]) ? n[0] : {};
    (D(r.globalInstall) ? r.globalInstall : true) && ([
      _n.name,
      "I18nT"
    ].forEach((s) => e.component(s, _n)), [
      gn.name,
      "I18nN"
    ].forEach((s) => e.component(s, gn)), [
      En.name,
      "I18nD"
    ].forEach((s) => e.component(s, En))), e.directive("t", cs(t));
  }
  const ds = ue("global-vue-i18n");
  function fs(e = {}) {
    const t = __VUE_I18N_LEGACY_API__ && D(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, n = D(e.globalInjection) ? e.globalInjection : true, r = /* @__PURE__ */ new Map(), [a, s] = ms(e, t), o = ue("");
    function i(_) {
      return r.get(_) || null;
    }
    function u(_, m) {
      r.set(_, m);
    }
    function d(_) {
      r.delete(_);
    }
    const g = {
      get mode() {
        return __VUE_I18N_LEGACY_API__ && t ? "legacy" : "composition";
      },
      async install(_, ...m) {
        if (_.__VUE_I18N_SYMBOL__ = o, _.provide(_.__VUE_I18N_SYMBOL__, g), F(m[0])) {
          const S = m[0];
          g.__composerExtend = S.__composerExtend, g.__vueI18nExtend = S.__vueI18nExtend;
        }
        let k = null;
        !t && n && (k = ys(_, g.global)), __VUE_I18N_FULL_INSTALL__ && us(_, g, ...m), __VUE_I18N_LEGACY_API__ && t && _.mixin(rs(s, s.__composer, g));
        const O = _.unmount;
        _.unmount = () => {
          k && k(), g.dispose(), O();
        };
      },
      get global() {
        return s;
      },
      dispose() {
        a.stop();
      },
      __instances: r,
      __getInstance: i,
      __setInstance: u,
      __deleteInstance: d
    };
    return g;
  }
  Dt = function(e = {}) {
    const t = Te();
    if (t == null) throw z(Q.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw z(Q.NOT_INSTALLED);
    const n = ps(t), r = gs(n), a = qn(t), s = _s(e, a);
    if (s === "global") return Jn(r, e, a), r;
    if (s === "parent") {
      let u = hs(n, t, e.__useComponent);
      return u == null && (u = r), u;
    }
    const o = n;
    let i = o.__getInstance(t);
    if (i == null) {
      const u = J({}, e);
      "__i18n" in a && (u.__i18n = a.__i18n), r && (u.__root = r), i = Rt(u), o.__composerExtend && (i[kt] = o.__composerExtend(i)), bs(o, t, i), o.__setInstance(t, i);
    }
    return i;
  };
  function ms(e, t) {
    const n = Zn(), r = __VUE_I18N_LEGACY_API__ && t ? n.run(() => St(e)) : n.run(() => Rt(e));
    if (r == null) throw z(Q.UNEXPECTED_ERROR);
    return [
      n,
      r
    ];
  }
  function ps(e) {
    const t = rr(e.isCE ? ds : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t) throw z(e.isCE ? Q.NOT_INSTALLED_WITH_PROVIDE : Q.UNEXPECTED_ERROR);
    return t;
  }
  function _s(e, t) {
    return Ge(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
  }
  function gs(e) {
    return e.mode === "composition" ? e.global : e.global.__composer;
  }
  function hs(e, t, n = false) {
    let r = null;
    const a = t.root;
    let s = vs(t, n);
    for (; s != null; ) {
      const o = e;
      if (e.mode === "composition") r = o.__getInstance(s);
      else if (__VUE_I18N_LEGACY_API__) {
        const i = o.__getInstance(s);
        i != null && (r = i.__composer, n && r && !r[Gn] && (r = null));
      }
      if (r != null || a === s) break;
      s = s.parent;
    }
    return r;
  }
  function vs(e, t = false) {
    return e == null ? null : t && e.vnode.ctx || e.parent;
  }
  function bs(e, t, n) {
    ar(() => {
    }, t), sr(() => {
      const r = n;
      e.__deleteInstance(t);
      const a = r[kt];
      a && (a(), delete r[kt]);
    }, t);
  }
  const Es = [
    "locale",
    "fallbackLocale",
    "availableLocales"
  ], bn = [
    "t",
    "rt",
    "d",
    "n",
    "tm",
    "te"
  ];
  function ys(e, t) {
    const n = /* @__PURE__ */ Object.create(null);
    return Es.forEach((a) => {
      const s = Object.getOwnPropertyDescriptor(t, a);
      if (!s) throw z(Q.UNEXPECTED_ERROR);
      const o = nr(s.value) ? {
        get() {
          return s.value.value;
        },
        set(i) {
          s.value.value = i;
        }
      } : {
        get() {
          return s.get && s.get();
        }
      };
      Object.defineProperty(n, a, o);
    }), e.config.globalProperties.$i18n = n, bn.forEach((a) => {
      const s = Object.getOwnPropertyDescriptor(t, a);
      if (!s || !s.value) throw z(Q.UNEXPECTED_ERROR);
      Object.defineProperty(e.config.globalProperties, `$${a}`, s);
    }), () => {
      delete e.config.globalProperties.$i18n, bn.forEach((a) => {
        delete e.config.globalProperties[`$${a}`];
      });
    };
  }
  const Ls = wt({
    name: "i18n-d",
    props: J({
      value: {
        type: [
          Number,
          Date
        ],
        required: true
      },
      format: {
        type: [
          String,
          Object
        ]
      }
    }, Ft),
    setup(e, t) {
      const n = e.i18n || Dt({
        useScope: e.scope,
        __useComponent: true
      });
      return Xn(e, t, Wn, (...r) => n[yt](...r));
    }
  }), En = Ls;
  Za();
  Na(fa);
  Aa(Ca);
  Ra(Dn);
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const e = pe();
    e.__INTLIFY__ = true, ma(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
  }
  let ks, Ss, ws, Ts, Is, Cs, Os, Ps, Ns, As, Rs, Fs, Ds, Ms, xs, Us, $s, js, Ws, Hs, Vs, Ys, Bs, Gs, qs, Js, Ks, Xs, Qs, zs, Zs, eo, to, no, ro, ao, so, oo, lo, io, co, uo, fo, mo, po, _o, go, ho, vo, bo, Eo;
  To = Be("App", {
    web: () => Sn(() => import("./web-Bf6K-1ly.js"), __vite__mapDeps([2,1]), import.meta.url).then((e) => new e.AppWeb())
  });
  ks = {
    button: {
      pause: "Pause"
    }
  };
  Ss = {
    button: {
      android: "Android",
      back: "Back",
      changelog: "Changelog",
      fullscreen: "Fullscreen (F11)",
      level_editor: "Level Editor",
      multi_player: "Multi-player",
      news: "News",
      play: "Play",
      skins: "Skins",
      steam: "Steam",
      workshop: "Workshop"
    },
    messages: {
      0: "Welcome!",
      1: "Is it Christmas yet?",
      2: "Maybe some day I will add new levels",
      3: "Aren't you suppose to be doing homework?",
      4: "Tip: Drink lots of water!",
      5: "Made by the creators of Boxel Rebound.",
      6: "Terraria is a pretty cool game.",
      7: "Good luck!",
      8: "Kargoh is my favorite Youtuber.",
      9: "Fact: I am bad at Fortnite.",
      10: "Do not get caught!",
      11: "3D games are hard to make.",
      12: "You should make a level during class.",
      13: "Made with 20 cups of coffee every day.",
      14: "Lower the graphics to speed up the game.",
      15: "I hope you have a great day.",
      16: "More addicting than TikTok!",
      17: "I tried doing homework once, did not like it.",
      18: "I make levels during my day job.",
      19: "I wish this game had more levels.",
      20: "Do not share your friend code with strangers!",
      21: "\u{1F61C}",
      22: "My score is way better than your score.",
      23: "Backup your data so you can play on other computers.",
      24: "If you want to make games for a living, start by making levels.",
      25: "Are cats better than dogs?",
      26: "Shoutout to Stack Overflow for all the help!",
      27: "Now available on the TI-84+ Silver Edition.",
      28: "I think you are a pretty neat person.",
      29: "I am glad you are alive today!",
      30: "Happy Friday! (or whatever day it is)",
      31: "Share kindness (or Boxel 3D) with someone today.",
      32: "You might not feel special today, but you are special to me!",
      33: "01101100 01101111 01101100",
      34: "Have you tried turning it off and on again?",
      35: "All bugs have been fixed (lol jk)",
      36: "(\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u25A0"
    },
    title: "Boxel 3D"
  };
  ws = {
    button: {
      exit: "Exit to home (ESC)",
      play: "Play"
    },
    title: "Play"
  };
  Ts = {
    campaign_level_1: "Welcome to Boxel 3D! The easiest game ever made!",
    campaign_level_3: "I meant to tell you this earlier, DO NOT TOUCH THE SPIKES!",
    campaign_level_5: "Did you know you can jump after you fall?",
    campaign_level_18: "Do not forget to jump after you touch the jump pad!",
    campaign_level_33: "Try going up!",
    campaign_level_35: "Halt! You should not be here!",
    campaign_level_39: "Use your keyboard to move left and right."
  };
  Is = {
    en: "English",
    es: "Espa\xF1ol (Spanish)",
    fa: "\u0641\u0627\u0631\u0633\u06CC (Persian)",
    fr: "Fran\xE7ais (French)",
    ko: "\uD55C\uAD6D\uC5B4 (Korean)"
  };
  Cs = {
    button: {
      backup: "Backup",
      cancel: "Cancel",
      checkpoint: "Checkpoint (C)",
      close: "Close",
      continue: "Continue",
      exit: "Exit (E)",
      no: "No",
      play: "Play",
      restore: "Restore",
      retry: "Retry (R)",
      settings: "Settings",
      upload: "Upload",
      yes: "Yes"
    },
    description: {
      new_record: "New record!"
    },
    text: {
      all: "All",
      browse: "Browse",
      cloud_data_restored: "Success! Your data was restored from your account.",
      cloud_data_saved: "Success! Your data was backed up to your account.",
      custom_skin: "Custom Skin",
      file_data_restored: "File Data Restored!",
      info: "Info",
      level_packs: "Level Packs",
      paused: "Paused",
      restore_cloud_data: "Restore all data from the cloud?",
      restore_file_data: "Restore all data from a file?",
      save_data_to_cloud: "Save all local data to the cloud?",
      save_level: "Would you like to save your level?",
      search: "Search",
      seconds: "Seconds"
    }
  };
  Os = {
    audio: {
      music: "Music",
      title: "Audio",
      volume_effects: "Sound Effects",
      volume_main: "Main Volume",
      volume_music: "Music Volume"
    },
    controls: {
      buffer: "Input Buffer",
      controller: "Controller",
      reverse: "Reverse",
      title: "Controls"
    },
    data: {
      backup_to: "Backup to...",
      file: "File",
      google: "Google",
      restore_from: "Restore from...",
      title: "Data"
    },
    graphics: {
      auto_rotate: "Auto Rotate",
      camera: "Camera",
      debug_mode: "Debug Mode",
      developer_tools: "Developer Tools",
      old_ui: "Old UI",
      quality: "Quality",
      scale: "Scale",
      show_fps: "Show FPS",
      title: "Graphics"
    },
    language: {
      credit: "Credit",
      select_language: "Select Language",
      title: "Language"
    },
    mods: {
      clipboard: "Clipboard",
      download_instructions: "Copy mods from trusted websites and paste them in the clipboard for later.",
      inspect_instructions: "Right-click this game and select Inspect.",
      paste_instructions: "Select the Console tab, paste mods from the clipboard, then press the enter key to load mods.",
      security: "For your security, mods must be manually loaded each time the game is launched.",
      title: "Mods",
      trusted_mods: "Trusted mods"
    },
    multiplayer: {
      host: "Host",
      join: "Join",
      paste_friend_code: "Paste friend code",
      share_friend_code: "Share friend code",
      title: "Multiplayer",
      your_name: "Your name"
    }
  };
  Ps = {
    button: {
      select: "Select"
    },
    description: "Select your player skin",
    title: "Skins"
  };
  Ns = {
    text: {
      browse_items: "Browse levels, skins & mods",
      create_item: "Create item",
      creations: "Creations",
      edit: "Edit",
      steam_version: "Steam version",
      subscriptions: "Subscriptions",
      workshop: "Workshop"
    }
  };
  As = {
    campaign: ks,
    home: Ss,
    level_picker: ws,
    levels: Ts,
    locales: Is,
    popup: Cs,
    settings: Os,
    skins: Ps,
    workshop: Ns
  };
  Rs = {
    button: {
      pause: "Pausa"
    }
  };
  Fs = {
    button: {
      android: "Android",
      back: "Atr\xE1s",
      changelog: "Cambios",
      fullscreen: "Pantalla Completa (F11)",
      level_editor: "Editor de Niveles",
      multi_player: "Multi-jugador",
      news: "Informacion",
      play: "Jugar",
      skins: "Apariencia",
      steam: "Steam",
      workshop: "Workshop"
    },
    messages: {
      0: "\xA1Bienvenidos!",
      1: "\xBFYa es Navidad?",
      2: "Tal vez alg\xFAn d\xEDa voy a poner nuevos niveles.",
      3: "\xBFNo se supone que deber\xEDas estar haciendo tu tarea?",
      4: "Consejo: \xA1Toma mucha agua!",
      5: "Hecho por los creadores del juego Boxel Rebound!",
      6: "Terraria es un juego bien.",
      7: "\xA1Buena suerte!",
      8: "Kargoh es mi YouTuber favorito.",
      9: "Hecho: Soy malo al juego Fortnite.",
      10: "\xA1No te dejes atrapar!",
      11: "Los juegos de 3D son dif\xEDciles de hacer.",
      12: "Deber\xEDas acer un nivel durante la clase.",
      13: "Creado con 20 tazas de caf\xE9 todos los d\xEDas.",
      14: "Baja la qualidad del juego para ser mas rapido.",
      15: "Espero que tengas un gran d\xEDa.",
      16: "\xA1M\xE1s adictivo que el TikTok!",
      17: "Yo Intent\xE9 hacer la tarea una vez, no me gust\xF3.",
      18: "Yo hago niveles durante mi trabajo del d\xEDa.",
      19: "Ojal\xE1 que este juego tuviera m\xE1s niveles.",
      20: "\xA1No compartas el c\xF3digo de amigo con los extra\xF1os!",
      21: "\u{1F61C}",
      22: "Mi puntuaci\xF3n es mucho mas mejor que la tuya.",
      23: "Haz una copia de tu informacion para que puedas jugar en otras computadoras.",
      24: "Si quieres ganarte la vida creando juegos, empieza por crear niveles del juego.",
      25: "\xBFSon los gatos mas mejores de los perros?",
      26: "\xA1Un saludo al sitio web Stack Overflow para toda la ayuda!",
      27: "Ya puedes hugar Boxel 3D en la TI-84+ Silver Edition.",
      28: "Yo creo que tu eres una persona bien.",
      29: "\xA1Me alegro de que est\xE1s vivo hoy!",
      30: "\xA1Feliz viernes! (o el d\xEDa que sea)",
      31: "Comparte amabilidad (o Boxel 3D) con alguien hoy.",
      32: "Puede ser que hoy no te sientas especial, \xA1pero tu eres muy especial a m\xED!",
      33: "01101100 01101111 01101100",
      34: "\xBFHas tratado apagarlo y prenderlo de otraves?",
      35: "Todos los errores han sido corregidos (lol jk)",
      36: "(\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u25A0"
    },
    title: "Boxel 3D"
  };
  Ds = {
    button: {
      exit: "Salir a la p\xE1gina de inicio (ESC)",
      play: "Jugar"
    },
    title: "Jugar"
  };
  Ms = {
    campaign_level_1: "\xA1Bienvenido al Boxel 3D! El juego mas facil del mundo!",
    campaign_level_3: "Olvid\xE9 decirte esto antes: \xA1NO TOQUES LOS PICOS!",
    campaign_level_5: "\xBFSab\xEDas que puedes saltar despu\xE9s de caer?",
    campaign_level_18: "\xA1No olvides de saltar despu\xE9s de tocar la plataforma de salto!",
    campaign_level_33: "\xA1Trata ir ariba!",
    campaign_level_35: "\xA1Para! \xA1Tu no debes de estar aqu\xED!!",
    campaign_level_39: "Utilice WASD, las teclas de flecha, y la barra espaciadora para moverse hacia la izquierda y hacia la derecha."
  };
  xs = {
    en: "English",
    es: "Espa\xF1ol (Spanish)",
    fa: "\u0641\u0627\u0631\u0633\u06CC (Persian)",
    fr: "Fran\xE7ais (French)",
    ko: "\uD55C\uAD6D\uC5B4 (Korean)"
  };
  Us = {
    button: {
      backup: "Progreso",
      cancel: "Cancelar",
      checkpoint: "Control (C)",
      close: "Cerrar",
      continue: "Continuar",
      exit: "Salida (E)",
      no: "No",
      play: "Jugar",
      restore: "Restore",
      retry: "Volver (R)",
      settings: "Ajuste",
      upload: "Subir",
      yes: "Si"
    },
    description: {
      new_record: "\xA1Nuevo Record!"
    },
    text: {
      all: "Todo",
      browse: "Navegar",
      cloud_data_restored: "\xA1\xC9xito! Tu informaci\xF3n fue restaurada de tu cuenta.",
      cloud_data_saved: "\xA1\xC9xito! Tu informaci\xF3n fue copiada a tu cuenta.",
      custom_skin: "Apariencia Personalizada",
      file_data_restored: "\xA1Informaci\xF3n de archivo fue restaurado!",
      info: "Informaci\xF3n",
      level_packs: "Paquetes de Niveles",
      paused: "Pausado",
      restore_cloud_data: "\xBFRestaurar todo tu informacion del cloud?",
      restore_file_data: "\xBFRestaurar todo tu informacion de un Archivo?",
      save_data_to_cloud: "\xBFCopia toda tu informaci\xF3n local al cloud?",
      save_level: "\xBFQueres mantener tu nivel?",
      search: "Buscar",
      seconds: "Segundos"
    }
  };
  $s = {
    audio: {
      music: "Musica",
      title: "Audio",
      volume_effects: "Efectos Sonoros",
      volume_main: "Volumen Principal",
      volume_music: "Volumen de Musica"
    },
    controls: {
      buffer: "B\xFAfer de Entrada",
      controller: "Controlador",
      reverse: "Inverso",
      title: "Controles"
    },
    data: {
      backup_to: "Copia progreso a...",
      file: "Archivo",
      google: "Google",
      restore_from: "Restaurar de...",
      title: "Informacion"
    },
    graphics: {
      auto_rotate: "Rotaci\xF3n de C\xE1mara Autom\xE1tica",
      camera: "C\xE1mara",
      debug_mode: "Modo de Depuraci\xF3n",
      developer_tools: "Herramientas para Desarrolladores",
      old_ui: "Interfaz de Usuario Antigua",
      quality: "Qualidad",
      scale: "Escala",
      show_fps: "Ense\xF1ar FPS",
      title: "Gr\xE1ficos"
    },
    language: {
      credit: "Cr\xE9dito",
      title: "Languaje",
      select_language: "Elija Languaje"
    },
    mods: {
      clipboard: "Portapapeles",
      download_instructions: "Copie modificaciones de juego de sitios web confiables y p\xE9guelas en el portapapeles para usarlas m\xE1s tarde.",
      inspect_instructions: "Haz clic derecho en este juego y selecciona Inspeccionar.",
      paste_instructions: "Seleccione la pantalla 'Consola', pegue modificaciones del portapapeles alli, y luego presione la tecla 'Enter' para poner los modificaciones.",
      security: "Por tu seguridad, tu necesitas poner las modificaciones manualmente cada vez que  inicias el juego.",
      title: "Modificaciones",
      trusted_mods: "Modificaciones Confiables"
    },
    multiplayer: {
      host: "Anfitri\xF3n",
      join: "Juntar",
      paste_friend_code: "Pegue c\xF3digo de tu amigo",
      share_friend_code: "Comparte su c\xF3digo de amigo",
      title: "Multijugador",
      your_name: "Su Nombre"
    }
  };
  js = {
    button: {
      select: "Selecciona"
    },
    description: "Selecciona su Apariencia",
    title: "Apariencia"
  };
  Ws = {
    text: {
      browse_items: "Explorar el contenido de Workshop",
      create_item: "Crear contenido en el Workshop",
      creations: "Creaciones",
      edit: "Editar",
      steam_version: "Versi\xF3n de Steam",
      subscriptions: "Suscripciones",
      workshop: "Workshop"
    }
  };
  Hs = {
    campaign: Rs,
    home: Fs,
    level_picker: Ds,
    levels: Ms,
    locales: xs,
    popup: Us,
    settings: $s,
    skins: js,
    workshop: Ws
  };
  Vs = {
    button: {
      pause: "\u062A\u0648\u0642\u0641"
    }
  };
  Ys = {
    button: {
      android: "Android",
      back: "\u0628\u0627\u0632\u06AF\u0634\u062A",
      changelog: "\u0641\u0647\u0631\u0633\u062A \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A",
      fullscreen: "\u062A\u0645\u0627\u0645 \u0635\u0641\u062D\u0647  (F11)",
      level_editor: "\u0648\u06CC\u0631\u0627\u06CC\u0634\u06AF\u0631 \u0645\u0631\u062D\u0644\u0647",
      multi_player: "\u0686\u0646\u062F \u0646\u0641\u0631\u0647",
      news: "\u0627\u062E\u0628\u0627\u0631",
      play: " \u0628\u0627\u0632\u06CC",
      skins: "\u067E\u0648\u0633\u062A\u0647\u200C\u0647\u0627",
      steam: "Steam",
      workshop: "Workshop"
    },
    messages: {
      0: "\u062E\u0648\u0634 \u0622\u0645\u062F\u06CC\u062F!",
      1: "\u0622\u06CC\u0627 \u0647\u0646\u0648\u0632 \u06A9\u0631\u06CC\u0633\u0645\u0633 \u0627\u0633\u062A\u061F",
      2: "\u0634\u0627\u06CC\u062F \u0631\u0648\u0632\u06CC \u0645\u0631\u062D\u0644\u0647\u200C\u0647\u0627\u06CC \u062C\u062F\u06CC\u062F\u06CC \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u0645",
      3: "\u0622\u06CC\u0627 \u0642\u0631\u0627\u0631 \u0646\u06CC\u0633\u062A \u062F\u0631 \u062D\u0627\u0644 \u0627\u0646\u062C\u0627\u0645 \u062A\u06A9\u0627\u0644\u06CC\u0641 \u0628\u0627\u0634\u06CC\u062F\u061F",
      4: "\u0646\u06A9\u062A\u0647: \u0622\u0628 \u0632\u06CC\u0627\u062F\u06CC \u0628\u0646\u0648\u0634\u06CC\u062F",
      5: "\u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 \u062A\u0648\u0633\u0637 \u0633\u0627\u0632\u0646\u062F\u0647 \u0628\u0627\u06A9\u0633\u0644 \u0631\u06CC\u0628\u0648\u06CC\u0646\u062F",
      6: "Terraria \u06CC\u06A9 \u0628\u0627\u0632\u06CC \u0628\u0633\u06CC\u0627\u0631 \u062C\u0627\u0644\u0628 \u0627\u0633\u062A",
      7: "\u0645\u0648\u0641\u0642 \u0628\u0627\u0634\u06CC\u062F!",
      8: "Kargoh \u06CC\u0648\u062A\u200C\u06CC\u0648\u0628\u0631 \u0645\u062D\u0628\u0648\u0628 \u0645\u0646 \u0627\u0633\u062A",
      9: "\u0648\u0627\u0642\u0639\u06CC\u062A: \u0645\u0646 \u062F\u0631 \u0641\u0648\u0631\u062A\u0646\u0627\u06CC\u062A \u0628\u062F \u0647\u0633\u062A\u0645",
      10: "\u06AF\u06CC\u0631 \u0646\u062F\u0647!",
      11: "\u0633\u0627\u062E\u062A \u0628\u0627\u0632\u06CC \u0647\u0627\u06CC \u0633\u0647\u200C\u0628\u0639\u062F\u06CC \u0633\u062E\u062A \u0627\u0633\u062A",
      12: "\u0634\u0645\u0627 \u0628\u0627\u06CC\u062F \u062F\u0631 \u0637\u0648\u0644 \u06A9\u0644\u0627\u0633 \u06CC\u06A9 \u0645\u0631\u062D\u0644\u0647 \u0627\u06CC\u062C\u0627\u062F \u06A9\u0646\u06CC\u062F",
      13: "\u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 \u0628\u0627 \u0647\u0631 \u0631\u0648\u0632 20 \u0641\u0646\u062C\u0627\u0646 \u0642\u0647\u0648\u0647",
      14: "\u06AF\u0631\u0627\u0641\u06CC\u06A9 \u06A9\u0645\u062A\u0631\u060C \u0628\u0631\u0627\u06CC \u0627\u0641\u0632\u0627\u06CC\u0634 \u0633\u0631\u0639\u062A \u0628\u0627\u0632\u06CC",
      15: "\u0627\u0645\u06CC\u062F\u0648\u0627\u0631\u0645 \u0631\u0648\u0632 \u062E\u0648\u0628\u06CC \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u062F",
      16: "\u0627\u0632 \u062A\u06CC\u06A9\u200C\u062A\u0627\u06A9 \u0647\u0645 \u0627\u0639\u062A\u06CC\u0627\u062F\u0622\u0648\u0631\u062A\u0631!",
      17: "\u0645\u0646 \u06CC\u06A9 \u0628\u0627\u0631 \u0633\u0639\u06CC \u06A9\u0631\u062F\u0645 \u062A\u06A9\u0627\u0644\u06CC\u0641 \u0631\u0627 \u0627\u0646\u062C\u0627\u0645 \u062F\u0647\u0645\u060C \u0622\u0646\u200C\u0647\u0627 \u0631\u0627 \u062F\u0648\u0633\u062A \u0646\u062F\u0627\u0634\u062A\u0645",
      18: "\u062F\u0631 \u0637\u0648\u0644 \u06A9\u0627\u0631 \u0631\u0648\u0632\u0627\u0646\u0647\u200C\u0627\u0645\u060C \u0645\u0631\u062D\u0644\u0647 \u0645\u06CC\u200C\u0633\u0627\u0632\u0645",
      19: "\u06A9\u0627\u0634 \u0627\u06CC\u0646 \u0628\u0627\u0632\u06CC \u0645\u0631\u0627\u062D\u0644 \u0628\u06CC\u0634\u062A\u0631\u06CC \u062F\u0627\u0634\u062A",
      20: "\u06A9\u062F \u062F\u0648\u0633\u062A \u062E\u0648\u062F \u0631\u0627 \u0628\u0627 \u0627\u0641\u0631\u0627\u062F \u063A\u0631\u06CC\u0628\u0647 \u0628\u0647 \u0627\u0634\u062A\u0631\u0627\u06A9 \u0646\u06AF\u0630\u0627\u0631\u06CC\u062F!",
      21: "\u{1F61C}",
      22: "\u0646\u0645\u0631\u0647 \u0645\u0646 \u062E\u06CC\u0644\u06CC \u0628\u0647\u062A\u0631 \u0627\u0632 \u0646\u0645\u0631\u0647 \u0634\u0645\u0627\u0633\u062A",
      23: "\u0627\u0632 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u062E\u0648\u062F \u0646\u0633\u062E\u0647 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646 \u062A\u0647\u06CC\u0647 \u06A9\u0646\u06CC\u062F \u062A\u0627 \u0628\u062A\u0648\u0627\u0646\u06CC\u062F \u062F\u0631 \u0631\u0627\u06CC\u0627\u0646\u0647 \u0647\u0627\u06CC \u062F\u06CC\u06AF\u0631 \u0628\u0627\u0632\u06CC \u06A9\u0646\u06CC\u062F",
      24: "\u0627\u06AF\u0631 \u0645\u06CC \u062E\u0648\u0627\u0647\u06CC\u062F \u0628\u0631\u0627\u06CC \u0627\u0645\u0631\u0627\u0631 \u0645\u0639\u0627\u0634 \u0628\u0627\u0632\u06CC \u0628\u0633\u0627\u0632\u06CC\u062F\u060C \u0628\u0627 \u0633\u0627\u062E\u062A\u0646 \u0645\u0631\u0627\u062D\u0644 \u0634\u0631\u0648\u0639 \u06A9\u0646\u06CC\u062F",
      25: "\u0622\u06CC\u0627 \u06AF\u0631\u0628\u0647\u200C\u0647\u0627 \u0628\u0647\u062A\u0631 \u0627\u0632 \u0633\u06AF\u200C\u0647\u0627 \u0647\u0633\u062A\u0646\u062F\u061F",
      26: "\u062A\u0634\u06A9\u0631 \u0648\u06CC\u0698\u0647 \u0627\u0632 Stack Overflow \u0628\u0631\u0627\u06CC \u062A\u0645\u0627\u0645 \u06A9\u0645\u06A9\u200C\u0647\u0627!",
      27: "\u0647\u0645\u200C\u0627\u06A9\u0646\u0648\u0646 \u062F\u0631 \u0646\u0633\u062E\u0647 \u0646\u0642\u0631\u0647\u200C\u0627\u06CC TI-84+ \u0642\u0627\u0628\u0644 \u062F\u0633\u062A\u0631\u0633\u06CC \u0627\u0633\u062A",
      28: "\u0641\u06A9\u0631 \u0645\u06CC\u200C\u06A9\u0646\u0645 \u0622\u062F\u0645 \u062E\u06CC\u0644\u06CC \u062C\u0627\u0644\u0628\u06CC \u0647\u0633\u062A\u06CC",
      29: "\u062E\u0648\u0634\u062D\u0627\u0644\u0645 \u06A9\u0647 \u0627\u0645\u0631\u0648\u0632 \u0632\u0646\u062F\u0647 \u0627\u06CC!",
      30: "\u062C\u0645\u0639\u0647 \u0645\u0628\u0627\u0631\u06A9! (\u06CC\u0627 \u0647\u0631 \u0631\u0648\u0632\u06CC \u06A9\u0647 \u0628\u0627\u0634\u062F)",
      31: "\u0647\u0645\u06CC\u0646 \u0627\u0645\u0631\u0648\u0632 \u0645\u0647\u0631\u0628\u0627\u0646\u06CC (\u06CC\u0627 \u0628\u0627\u06A9\u0633\u0644 \u0633\u0647\u200C\u0628\u0639\u062F\u06CC) \u0631\u0627 \u0628\u0627 \u06A9\u0633\u06CC \u0628\u0647 \u0627\u0634\u062A\u0631\u0627\u06A9 \u0628\u06AF\u0630\u0627\u0631\u06CC\u062F",
      32: "\u0634\u0627\u06CC\u062F \u0627\u0645\u0631\u0648\u0632 \u0627\u062D\u0635\u0627\u0635 \u062E\u0627\u0635\u06CC \u0646\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u060C \u0648\u0644\u06CC \u0628\u0631\u0627\u06CC \u0645\u0646 \u062E\u0627\u0635\u06CC!",
      33: "01101100 01101111 01101100",
      34: "\u0622\u06CC\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC \u06A9\u0647 \u062E\u0627\u0645\u0648\u0634\u0634 \u06A9\u0646\u06CC \u0648 \u062F\u0648\u0628\u0627\u0631\u0647 \u0631\u0648\u0634\u0646\u0634 \u06A9\u0646\u06CC\u061F",
      35: "\u062A\u0645\u0627\u0645 \u0628\u0627\u06AF\u200C\u0647\u0627 \u0628\u0631\u0637\u0631\u0641 \u0634\u062F\u0647\u200C\u0627\u0646\u062F (\u0647\u0627\u0647\u0627 \u0634\u0648\u062E\u06CC \u0645\u06CC\u200C\u06A9\u0646\u0645)",
      36: "(\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u25A0"
    },
    title: "\u0628\u0627\u06A9\u0633\u0644 \u0633\u0647\u200C\u0628\u0639\u062F\u06CC"
  };
  Bs = {
    button: {
      exit: "\u0631\u0641\u062A\u0646 \u0628\u0647 \u062E\u0627\u0646\u0647 (ESC)",
      play: "\u0628\u0627\u0632\u06CC"
    },
    title: "\u0628\u0627\u0632\u06CC"
  };
  Gs = {
    campaign_level_1: "!\u0628\u0647 \u0628\u0627\u06A9\u0633\u0644(\u062C\u0639\u0628\u0647) \u0633\u0647\u200C\u0628\u0639\u062F\u06CC \u062E\u0648\u0634 \u0622\u0645\u062F\u06CC\u062F! \u0633\u0627\u062F\u0647 \u062A\u0631\u06CC\u0646 \u0628\u0627\u0632\u06CC \u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 \u062A\u0627 \u0627\u0644\u0627\u0646",
    campaign_level_3: " \u0645\u0646 \u0645\u06CC\u200C\u062E\u0648\u0627\u0633\u062A\u0645 \u0628\u0647 \u0634\u0645\u0627 \u0632\u0648\u062F\u062A\u0631 \u0628\u06AF\u0648\u06CC\u0645 \u06A9\u0647\u060C \u0628\u0647 \u062A\u06CC\u063A\u0647\u200C\u0647\u0627 \u0628\u0631\u062E\u0648\u0631\u062F \u0646\u06A9\u0646\u06CC\u062F!",
    campaign_level_5: "\u0622\u06CC\u0627 \u0645\u06CC\u200C\u062F\u0627\u0646\u06CC\u062F \u0628\u0639\u062F \u0627\u0632 \u0633\u0642\u0648\u0637 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0628\u067E\u0631\u06CC\u062F\u061F",
    campaign_level_18: "\u0641\u0631\u0627\u0645\u0648\u0634 \u0646\u06A9\u0646\u06CC\u062F \u0628\u0639\u062F \u0627\u0632 \u067E\u0631\u06CC\u062F\u0646\u060C \u0628\u067E\u0631\u06CC\u062F!",
    campaign_level_33: "\u0628\u0627\u0644\u0627 \u0631\u0641\u062A\u0646 \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F",
    campaign_level_35: "\u0635\u0628\u0631 \u06A9\u0646! \u0634\u0645\u0627 \u0646\u0628\u0627\u06CC\u062F \u0627\u06CC\u0646\u062C\u0627 \u0628\u0627\u0634\u06CC\u062F!",
    campaign_level_39: "\u0627\u0632 \u06A9\u06CC\u0628\u0648\u0631\u062F \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u062F\u060C \u0628\u0631\u0627\u06CC \u0686\u067E \u0648 \u0631\u0627\u0633\u062A \u0631\u0641\u062A\u0646"
  };
  qs = {
    en: "English",
    es: "Espa\xF1ol (Spanish)",
    fa: "\u0641\u0627\u0631\u0633\u06CC (Persian)",
    fr: "Fran\xE7ais (French)",
    ko: "\uD55C\uAD6D\uC5B4 (Korean)"
  };
  Js = {
    button: {
      backup: "\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u200C\u06AF\u06CC\u0631\u06CC",
      cancel: "\u0644\u063A\u0648",
      checkpoint: "\u0627\u06CC\u0633\u062A \u0628\u0627\u0632\u0631\u0633\u06CC (C)",
      close: "\u0628\u0633\u062A\u0646",
      continue: "\u0627\u062F\u0627\u0645\u0647 \u062F\u0627\u062F\u0646",
      exit: "\u062E\u0631\u0648\u062C (E)",
      no: "\u0646\u0647",
      play: "\u0628\u0627\u0632\u06CC",
      restore: "\u0628\u0627\u0632\u06CC\u0627\u0628\u06CC",
      retry: "\u062F\u0648\u0628\u0627\u0631\u0647 (R)",
      settings: "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A",
      upload: "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC",
      yes: "\u0628\u0644\u0647"
    },
    description: {
      new_record: "\u0631\u06A9\u0648\u0631\u062F \u062C\u062F\u06CC\u062F!"
    },
    text: {
      all: "\u0647\u0645\u0647",
      browse: "\u0645\u0631\u0648\u0631 \u06A9\u0646\u06CC\u062F",
      cloud_data_restored: "\u062A\u0645\u0627\u0645! \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0634\u0645\u0627 \u0627\u0632 \u062D\u0633\u0627\u0628\u062A\u0627\u0646 \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0634\u062F",
      cloud_data_saved: "\u062A\u0645\u0627\u0645! \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0634\u0645\u0627 \u062F\u0631 \u062D\u0633\u0627\u0628\u062A\u0627\u0646 \u0630\u062E\u06CC\u0631\u0647 \u0634\u062F",
      custom_skin: "\u067E\u0648\u0633\u062A\u0647 \u0633\u0641\u0627\u0631\u0634\u06CC",
      file_data_restored: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0641\u0627\u06CC\u0644 \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0634\u062F",
      info: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A",
      level_packs: "\u062F\u0633\u062A\u0647\u200C\u0647\u0627\u06CC \u0645\u0631\u062D\u0644\u0647",
      paused: "\u0645\u062A\u0648\u0642\u0641 \u0634\u062F\u0647",
      restore_cloud_data: "\u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u062A\u0645\u0627\u0645 \u062F\u0627\u062F\u0647 \u0627\u0632 \u0641\u0636\u0627\u06CC \u0627\u0628\u0631\u06CC\u061F",
      restore_file_data: "\u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u062A\u0645\u0627\u0645 \u062F\u0627\u062F\u0647 \u0647\u0627 \u0627\u0632 \u06CC\u06A9 \u0641\u0627\u06CC\u0644\u061F",
      save_data_to_cloud: "\u0630\u062E\u06CC\u0631\u0647\u200C\u0633\u0627\u0632\u06CC \u062A\u0645\u0627\u0645 \u062F\u0627\u062F\u0647\u200C\u0647\u0627 \u062F\u0631 \u0641\u0636\u0627\u06CC \u0627\u0628\u0631\u06CC\u061F",
      save_level: "\u0622\u06CC\u0627 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u0645\u0631\u062D\u0644\u0647 \u0631\u0627 \u0630\u062E\u06CC\u0631\u0647 \u06A9\u0646\u06CC\u062F\u061F",
      search: "\u062C\u0633\u062A\u062C\u0648 \u06A9\u0646\u06CC\u062F",
      seconds: "\u062B\u0627\u0646\u06CC\u0647"
    }
  };
  Ks = {
    audio: {
      music: "\u0645\u0648\u0633\u06CC\u0642\u06CC",
      title: "\u0635\u062F\u0627",
      volume_effects: "\u0627\u0641\u06A9\u062A \u0647\u0627\u06CC \u0635\u062F\u0627",
      volume_main: "\u0635\u062F\u0627\u06CC \u067E\u0627\u06CC\u0647",
      volume_music: "\u0635\u062F\u0627\u06CC \u0645\u0648\u0633\u06CC\u0642\u06CC"
    },
    controls: {
      buffer: "\u0628\u0627\u0641\u0631 \u0648\u0631\u0648\u062F\u06CC",
      controller: "\u06A9\u0646\u062A\u0631\u0644 \u06A9\u0646\u0646\u062F\u0647",
      reverse: "\u0645\u0639\u06A9\u0648\u0633",
      title: "\u06A9\u0646\u062A\u0631\u0644 \u0647\u0627"
    },
    data: {
      backup_to: "\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u200C\u06AF\u06CC\u0631\u06CC \u062F\u0631...",
      file: "\u0641\u0627\u06CC\u0644",
      google: "\u06AF\u0648\u06AF\u0644",
      restore_from: "\u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0627\u0632...",
      title: "\u062F\u0627\u062F\u0647\u200C\u0647\u0627"
    },
    graphics: {
      auto_rotate: "\u0686\u0631\u062E\u0634 \u062E\u0648\u062F\u06A9\u0627\u0631",
      camera: "\u062F\u0648\u0631\u0628\u06CC\u0646",
      debug_mode: "\u062D\u0627\u0644\u062A \u0627\u0634\u06A9\u0627\u0644\u200C\u06AF\u06CC\u0631\u06CC",
      developer_tools: "\u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u0633\u0627\u0632\u0646\u062F\u06AF\u0627\u0646",
      old_ui: "\u0638\u0627\u0647\u0631 \u0642\u062F\u06CC\u0645\u06CC",
      quality: "\u06A9\u06CC\u0641\u06CC\u062A",
      scale: "\u0645\u0642\u06CC\u0627\u0633",
      show_fps: "\u0646\u0645\u0627\u06CC\u0634 FPS",
      title: "\u06AF\u0631\u0627\u0641\u06CC\u06A9"
    },
    language: {
      credit: "\u0627\u0639\u062A\u0628\u0627\u0631",
      title: "\u0632\u0628\u0627\u0646",
      select_language: "\u0627\u0646\u062A\u062E\u0627\u0628 \u0632\u0628\u0627\u0646"
    },
    mods: {
      clipboard: "\u06A9\u0644\u06CC\u067E\u200C\u0628\u0648\u0631\u062F",
      download_instructions: "\u0645\u0648\u062F \u0647\u0627 \u0631\u0627 \u0627\u0632 \u0648\u0628\u0633\u0627\u06CC\u062A \u0647\u0627\u06CC \u0642\u0627\u0628\u0644 \u0627\u0639\u062A\u0645\u0627\u062F \u0628\u06AF\u06CC\u0631\u06CC\u062F \u0648 \u0628\u0631\u0627\u06CC \u0628\u0639\u062F \u062F\u0631 \u06A9\u0644\u06CC\u067E\u200C\u0628\u0648\u0631\u062F \u0630\u062E\u06CC\u0631\u0647 \u06A9\u0646\u06CC\u062F",
      inspect_instructions: "\u0631\u0627\u0633\u062A \u06A9\u0644\u06CC\u06A9 \u062F\u0631 \u0628\u0627\u0632\u06CC \u06A9\u0646\u06CC\u062F \u0648 \u062F\u06A9\u0645\u0647 Inspect \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",
      paste_instructions: "\u0628\u0647 \u0628\u062E\u0634 \u06A9\u0646\u0633\u0648\u0644 \u0628\u0631\u0648\u06CC\u062F \u0648 \u0645\u0648\u062F\u0647\u0627 \u0631\u0627 \u0627\u0632 \u06A9\u0644\u06CC\u067E\u200C\u0628\u0648\u0631\u062F \u0628\u06AF\u0630\u0627\u0631\u06CC\u062F \u0648 \u0633\u067E\u0633 \u0627\u06CC\u0646\u062A\u0631 \u0631\u0627 \u0628\u0632\u0646\u06CC\u062F.",
      security: "\u0628\u0631\u0627\u06CC \u0627\u0645\u0646\u06CC\u062A \u0634\u0645\u0627\u060C \u0647\u0631 \u0628\u0627\u0631 \u06A9\u0647 \u0628\u0627\u0632\u06CC \u0631\u0627\u0647 \u0627\u0646\u062F\u0627\u0632\u06CC \u0645\u06CC \u0634\u0648\u062F\u060C \u0645\u0648\u062F\u0647\u0627 \u0628\u0627\u06CC\u062F \u062F\u0648\u0628\u0627\u0631\u0647 \u0628\u0647 \u0635\u0648\u0631\u062A \u062F\u0633\u062A\u06CC \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0634\u0648\u0646\u062F",
      title: "\u0645\u0648\u062F\u0647\u0627",
      trusted_mods: "\u0645\u0648\u062F\u0647\u0627\u06CC \u0645\u0648\u0631\u062F \u0627\u0639\u062A\u0645\u0627\u062F"
    },
    multiplayer: {
      host: "\u0645\u06CC\u0632\u0628\u0627\u0646",
      join: "\u0628\u067E\u06CC\u0648\u0646\u062F\u06CC\u062F",
      paste_friend_code: "\u062C\u0627\u06CC\u200C\u06AF\u0630\u0627\u0631\u06CC \u06A9\u062F \u062F\u0648\u0633\u062A",
      share_friend_code: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u06A9\u062F \u062F\u0648\u0633\u062A",
      title: "\u0686\u0646\u062F \u0646\u0641\u0631\u0647",
      your_name: "\u0627\u0633\u0645 \u0634\u0645\u0627"
    }
  };
  Xs = {
    button: {
      select: "\u0627\u0646\u062A\u062E\u0627\u0628"
    },
    description: "\u067E\u0648\u0633\u062A\u0647 \u0628\u0627\u0632\u06CC\u06A9\u0646 \u062E\u0648\u062F \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",
    title: "\u067E\u0648\u0633\u062A\u0647\u200C\u0647\u0627"
  };
  Qs = {
    text: {
      browse_items: "\u0645\u0648\u0627\u0631\u062F \u0631\u0627 \u0645\u0631\u0648\u0631 \u06A9\u0646\u06CC\u062F",
      create_item: "\u0645\u0648\u0631\u062F \u0627\u06CC\u062C\u0627\u062F \u06A9\u0646\u06CC\u062F",
      creations: "\u0622\u0641\u0631\u06CC\u0646\u0634 \u0647\u0627",
      edit: "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u06A9\u0646\u06CC\u062F",
      steam_version: "Steam \u0646\u0633\u062E\u0647",
      subscriptions: "\u0627\u0634\u062A\u0631\u0627\u06A9 \u0647\u0627",
      workshop: "Workshop"
    }
  };
  zs = {
    campaign: Vs,
    home: Ys,
    level_picker: Bs,
    levels: Gs,
    locales: qs,
    popup: Js,
    settings: Ks,
    skins: Xs,
    workshop: Qs
  };
  Zs = {
    button: {
      pause: "Pause"
    }
  };
  eo = {
    button: {
      android: "Android",
      back: "Retour",
      changelog: "Changelog",
      fullscreen: "Plein \xC9cran (F11)",
      level_editor: "\xC9diteur de niveaux",
      multi_player: "Multijoueur",
      news: "Nouvelles",
      play: "Jouer",
      skins: "Apparences",
      steam: "Steam",
      workshop: "Atelier"
    },
    messages: {
      0: "Bienvenue !",
      1: "Est-il No\xEBl ?",
      2: "Peut-\xEAtre qu\u2019un jour j\u2019ajouterai de nouveaux niveaux",
      3: "Ne devrais-tu pas faire tes devoirs ?",
      4: "Conseil: Buvez beaucoup d'eau !",
      5: "Cr\xE9\xE9 par les cr\xE9ateurs de Boxel Rebound.",
      6: "Terraria est un jeu vraiment sympa.",
      7: "Bonne chance !",
      8: "Kargoh est mon YouTubeur favori.",
      9: "Fait: Je suis nul \xE0 Fortnite.",
      10: "Ne vous faites pas attraper !",
      11: "Les jeux en 3D sont difficiles \xE0 cr\xE9er.",
      12: "Tu devrais cr\xE9er un niveau en classe.",
      13: "Fait avec 20 tasse de caf\xE9 par jour.",
      14: "R\xE9duisez les graphismes pour acc\xE9l\xE9rer le jeu.",
      15: "J'esp\xE8re que vous avez une bonne journ\xE9e.",
      16: "Plus addictif que TikTok !",
      17: "J'avais essay\xE9 de faire des devoirs une fois... je ne l'ai pas aim\xE9.",
      18: "Je cr\xE9e des niveaux pendant mon travail.",
      19: "J\u2019aimerais qu\u2019il y ait plus de niveaux dans ce jeu.",
      20: "Ne partagez pas votre code d\u2019ami avec des inconnus !",
      21: "\u{1F61C}",
      22: "Mon score est bien meilleur que le tien.",
      23: "Sauvegarder votre donn\xE9es pour jouer sur un autre ordinateur.",
      24: "Si vous voulez gagner votre vie en cr\xE9ant des jeux, commencez par cr\xE9er des niveaux.",
      25: "Sont les chats meilleurs que les chiens ?",
      26: "Shoutout \xE0 Stack Overflow pour toute l'aide !",
      27: "Maintenent disponible sur le TI-84+ Silver Edition.",
      28: "Je pense que t'es plut\xF4t chouette.",
      29: "Je suis ravis que vous \xEAtes vivant !",
      30: "Joyeux vendredi ! (ou quel que soit le jour)",
      31: "Partagez de l'amiti\xE9 (ou Boxel 3D) avec quelqu'un d\xE8s aujourd'hui !",
      32: "Vous ne sentez peut-\xEAtre pas sp\xE9cial, mais vous \xEAtes sp\xE9ciale pour moi !",
      33: "01101100 01101111 01101100",
      34: "As-tu essay\xE9 de l\u2019\xE9teindre et de le rallumer ?",
      35: "Tous les bugs ont \xE9t\xE9 corrig\xE9es (lol jk)",
      36: "Baguette, Fromage, Tour d'Eiffel"
    },
    title: "Boxel 3D"
  };
  to = {
    button: {
      exit: "Retourner \xE0 l'accueil (\xC9CHAP)",
      play: "Jouer"
    },
    title: "Jouer"
  };
  no = {
    campaign_level_1: "Bienvenue \xE0 Boxel 3D ! Le plus facile jeu dans le monde !",
    campaign_level_3: "J'aurais d\xFB te le dire plus t\xF4t, NE TOUCHEZ PAS AUX PIQUES !",
    campaign_level_5: "Savez-vous que vous pouvez sauter apr\xE8s avoir tomber ?",
    campaign_level_18: "N'oubliez pas de sauter apr\xE8s avoir touch\xE9 un tremplin !",
    campaign_level_33: "En haut !",
    campaign_level_35: "Halte ! Tu ne devrais pas \xEAtre ici !",
    campaign_level_39: "Utilisez votre clavier pour bouger."
  };
  ro = {
    en: "English",
    es: "Espa\xF1ol (Spanish)",
    fa: "\u0641\u0627\u0631\u0633\u06CC (Persian)",
    fr: "Fran\xE7ais (French)",
    ko: "\uD55C\uAD6D\uC5B4 (Korean)"
  };
  ao = {
    button: {
      backup: "Sauvegarder",
      cancel: "Annuler",
      checkpoint: "Point de Contr\xF4le (C)",
      close: "Fermer",
      continue: "Continuer",
      exit: "Quitter (E)",
      no: "Non",
      play: "Jouer",
      restore: "Restaurer",
      retry: "Recommencer (R)",
      settings: "Param\xE8tres",
      upload: "T\xE9l\xE9verser",
      yes: "Oui"
    },
    description: {
      new_record: "Nouveau record !"
    },
    text: {
      all: "Tout",
      browse: "Parcourir",
      cloud_data_restored: "Succ\xE8s ! Vos donn\xE9es sont restaur\xE9s de votre compte.",
      cloud_data_saved: "Succ\xE8s ! Vos donn\xE9es ont \xE9t\xE9 sauvegarder dans votre compte.",
      custom_skin: "Apparence Personnalis\xE9e",
      file_data_restored: "Donn\xE9es du fichier restaur\xE9es !",
      info: "Info",
      level_packs: "Paquet de niveaux",
      paused: "En pause",
      restore_cloud_data: "Restaurer toutes les donn\xE9es du cloud ?",
      restore_file_data: "Restaurer toutes les donn\xE9es d\u2019un fichier ?",
      save_data_to_cloud: "Sauvegarder toutes les donn\xE9es locales dans le cloud ?",
      save_level: "Voulez-vous enregistrer votre niveau ?",
      search: "Rechercher",
      seconds: "Secondes"
    }
  };
  so = {
    audio: {
      music: "Musique",
      title: "Audio",
      volume_effects: "Effets Sonores",
      volume_main: "Volume Principale",
      volume_music: "Volume de Musique"
    },
    controls: {
      buffer: "Tampon d'entr\xE9e",
      controller: "Manette",
      reverse: "Reverser",
      title: "Contr\xF4les"
    },
    data: {
      backup_to: "Sauvegarder \xE0...",
      file: "Fichier",
      google: "Google",
      restore_from: "Restaurer de...",
      title: "Donn\xE9es"
    },
    graphics: {
      auto_rotate: "Rotation Automatique",
      camera: "Cam\xE9ra",
      debug_mode: "Mode Debug",
      developer_tools: "Outils d\xE9veloppeur",
      old_ui: "Ancienne interface",
      quality: "Qualit\xE9",
      scale: "\xC9chelle",
      show_fps: "Afficher FPS",
      title: "Graphismes"
    },
    language: {
      credit: "Cr\xE9dits",
      select_language: "S\xE9lectionner la Langue",
      title: "Langue"
    },
    mods: {
      clipboard: "Clipboard",
      download_instructions: "Copier des mods de sites fiables et garder-les dans le clipboard pour plus tard.",
      inspect_instructions: "Faites un clic droit sur ce jeu et s\xE9lectionnez Inspect.",
      paste_instructions: "Ouvrer le tab de Console, coller les mods du clipboard, puis appuyer sur Enter pour charger les mods.",
      security: "Pour votre s\xE9curit\xE9, les mods doivent \xEAtre charg\xE9s manuellement \xE0 chaque lancement du jeu.",
      title: "Mods",
      trusted_mods: "Mods fiable"
    },
    multiplayer: {
      host: "H\xE9berger",
      join: "Joindre",
      paste_friend_code: "Coller le code d'ami",
      share_friend_code: "Partager le code d'ami",
      title: "Multijoueur",
      your_name: "Votre nom"
    }
  };
  oo = {
    button: {
      select: "S\xE9lectionner"
    },
    description: "S\xE9lectionner votre apparence",
    title: "Apparence"
  };
  lo = {
    text: {
      browse_items: "Parcourir les niveaux, apparences & mods",
      create_item: "Cr\xE9er un \xE9l\xE9ment",
      creations: "Cr\xE9ations",
      edit: "Modifier",
      steam_version: "Version Steam",
      subscriptions: "Abonnements",
      workshop: "Atelier"
    }
  };
  io = {
    campaign: Zs,
    home: eo,
    level_picker: to,
    levels: no,
    locales: ro,
    popup: ao,
    settings: so,
    skins: oo,
    workshop: lo
  };
  co = {
    button: {
      pause: "\uC77C\uC2DC\uC911\uC9C0"
    }
  };
  uo = {
    button: {
      android: "\uBAA8\uBC14\uC77C \uBC84\uC804",
      back: "\uB4A4\uB85C\uAC00\uAE30",
      changelog: "\uC5C5\uB370\uC774\uD2B8 \uD604\uD669",
      fullscreen: "\uD480\uC2A4\uD06C\uB9B0 (F11)",
      level_editor: "\uB808\uBCA8 \uBA54\uC774\uCEE4",
      multi_player: "\uBA40\uD2F0\uD50C\uB808\uC774\uC5B4",
      news: "\uB274\uC2A4",
      play: "\uAC8C\uC784\uD50C\uB808\uC774",
      skins: "\uC2A4\uD0A8",
      steam: "\uC2A4\uD300 \uD398\uC774\uC9C0",
      workshop: "\uC6CC\uD06C\uC0F5"
    },
    messages: {
      0: "Welcome!",
      1: "Is it Christmas yet?",
      2: "Maybe some day I will add new levels",
      3: "Aren't you suppose to be doing homework?",
      4: "Tip: Drink lots of water!",
      5: "Made by the creators of Boxel Rebound.",
      6: "Terraria is a pretty cool game.",
      7: "Good luck!",
      8: "Kargoh is my favorite Youtuber.",
      9: "Fact: I am bad at Fortnite.",
      10: "Do not get caught!",
      11: "3D games are hard to make.",
      12: "You should make a level during class.",
      13: "Made with 20 cups of coffee every day.",
      14: "Lower the graphics to speed up the game.",
      15: "I hope you have a great day.",
      16: "More addicting than TikTok!",
      17: "I tried doing homework once, did not like it.",
      18: "I make levels during my day job.",
      19: "I wish this game had more levels.",
      20: "Do not share your friend code with strangers!",
      21: "\u{1F61C}",
      22: "My score is way better than your score.",
      23: "Backup your data so you can play on other computers.",
      24: "If you want to make games for a living, start by making levels.",
      25: "Are cats better than dogs?",
      26: "Shoutout to Stack Overflow for all the help!",
      27: "Now available on the TI-84+ Silver Edition.",
      28: "I think you are a pretty neat person.",
      29: "I am glad you are alive today!",
      30: "Happy Friday! (or whatever day it is)",
      31: "Share kindness (or Boxel 3D) with someone today.",
      32: "You might not feel special today, but you are special to me!",
      33: "01101100 01101111 01101100",
      34: "Have you tried turning it off and on again?",
      35: "All bugs have been fixed (lol jk)",
      36: "(\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u25A0"
    },
    title: "Boxel 3D"
  };
  fo = {
    button: {
      exit: "\uD648\uC73C\uB85C \uBC14\uB85C\uAC00\uAE30 (ESC)",
      play: "\uD50C\uB808\uC774"
    },
    title: "\uD50C\uB808\uC774"
  };
  mo = {
    campaign_level_1: "Welcome to Boxel 3D! The easiest game ever made!",
    campaign_level_3: "I meant to tell you this earlier, DO NOT TOUCH THE SPIKES!",
    campaign_level_5: "Did you know you can jump after you fall?",
    campaign_level_18: "Do not forget to jump after you touch the jump pad!",
    campaign_level_33: "Try going up!",
    campaign_level_35: "Halt! You should not be here!",
    campaign_level_39: "Use your keyboard to move left and right."
  };
  po = {
    en: "English",
    es: "Espa\xF1ol (Spanish)",
    fa: "\u0641\u0627\u0631\u0633\u06CC (Persian)",
    fr: "Fran\xE7ais (French)",
    ko: "\uD55C\uAD6D\uC5B4 (Korean)"
  };
  _o = {
    button: {
      backup: "\uBC31\uC5C5",
      cancel: "\uCDE8\uC18C",
      close: "\uB2EB\uAE30",
      checkpoint: "\uAC80\uBB38\uC18C (C)",
      continue: "\uACC4\uC18D\uD558\uAE30",
      exit: "\uB098\uAC00\uAE30(E)",
      no: "\uCDE8\uC18C",
      play: "\uD50C\uB808\uC774",
      restore: "\uBD88\uB7EC\uC624\uAE30",
      retry: "\uB2E4\uC2DC \uD558\uAE30 (R)",
      settings: "\uC124\uC815",
      upload: "\uC5C5\uB85C\uB4DC",
      yes: "\uC218\uB77D"
    },
    description: {
      new_record: "\uCD5C\uACE0 \uAE30\uB85D \uB3CC\uD30C!"
    },
    text: {
      all: "\uBAA8\uB450",
      browse: "\uBD88\uB7EC\uC624\uAE30",
      cloud_data_restored: "\uB370\uC774\uD130 \uBD88\uB7EC\uC624\uAE30 \uC131\uACF5!",
      cloud_data_saved: "\uB370\uC774\uD130 \uBC31\uC5C5 \uC131\uACF5!",
      custom_skin: "\uCEE4\uC2A4\uD140 \uC2A4\uD0A8",
      file_data_restored: "\uD30C\uC77C \uB370\uC774\uD130 \uC800\uC7A5\uB428",
      info: "\uC0C1\uC138",
      level_packs: "\uB808\uBCA8 \uD329",
      paused: "\uC77C\uC2DC\uC815\uC9C0\uB428",
      restore_cloud_data: "\uD074\uB77C\uC6B0\uB4DC\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uBD88\uB7EC\uC624\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
      restore_file_data: "\uBAA8\uB4E0 \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
      save_data_to_cloud: "\uBAA8\uB4E0 \uB85C\uCEEC \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
      save_level: "\uC774 \uB808\uBCA8\uC744 \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
      search: "\uAC80\uC0C9",
      seconds: "\uCD08"
    }
  };
  go = {
    audio: {
      music: "\uC74C\uC545",
      title: "\uC624\uB514\uC624",
      volume_effects: "\uD6A8\uACFC\uC74C",
      volume_main: "\uBA54\uC778 \uBCFC\uB968",
      volume_music: "\uC74C\uC545 \uBCFC\uB968"
    },
    controls: {
      buffer: "\uC785\uB825 \uBC84\uD37C",
      controller: "\uCEE8\uD2B8\uB864\uB7EC",
      reverse: "\uBC84\uD2BC \uBC18\uC804",
      title: "\uCEE8\uD2B8\uB864 \uC124\uC815"
    },
    data: {
      backup_to: "...\uC73C\uB85C \uBC31\uC5C5",
      file: "\uD30C\uC77C",
      google: "\uAD6C\uAE00",
      restore_from: "...\uC5D0\uC11C \uC800\uC7A5",
      title: "\uB370\uC774\uD130"
    },
    graphics: {
      auto_rotate: "\uC790\uB3D9 \uD68C\uC804",
      camera: "\uCE74\uBA54\uB77C",
      debug_mode: "\uB514\uBC84\uADF8 \uBAA8\uB4DC",
      developer_tools: "\uAC1C\uBC1C\uC790 \uD234",
      old_ui: "\uC61B\uB0A0 UI",
      quality: "\uD004\uB9AC\uD2F0",
      scale: "\uD31D\uC5C5 \uC0AC\uC774\uC988",
      show_fps: "FPS \uBCF4\uAE30",
      title: "\uADF8\uB798\uD53D"
    },
    language: {
      credit: "\uD06C\uB808\uB527",
      select_language: "\uC5B8\uC5B4",
      title: "\uC5B8\uC5B4"
    },
    mods: {
      clipboard: "\uD074\uB9BD\uBCF4\uB4DC",
      download_instructions: "\uBAA8\uB4DC\uB97C \uBCF5\uC0AC\uD558\uACE0 \uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBD99\uC5EC\uB123\uC73C\uC138\uC694.  .",
      inspect_instructions: "\uC6B0\uD074\uB9AD\uD558\uACE0 \uAC80\uC0AC \uD0ED\uC744 \uD074\uB9AD\uD558\uC138\uC694.",
      paste_instructions: "console \uD0ED\uC744 \uD074\uB9AD\uD558\uACE0 \uD074\uB9BD\uBCF4\uB4DC \uB97C \uBD99\uC5EC\uB123\uC73C\uC138\uC694.",
      security: "\uBCF4\uC548\uC744 \uC704\uD574, \uAC8C\uC784\uC744 \uC2DC\uC791\uD560 \uB54C\uB9C8\uB2E4 \uBAA8\uB4DC\uB97C \uC218\uB3D9\uC73C\uB85C \uB85C\uB4DC\uD574\uC57C \uD569\uB2C8\uB2E4.",
      title: "\uBAA8\uB4DC",
      trusted_mods: "\uC2E0\uB8B0 \uAC00\uB2A5 \uBAA8\uB4DC"
    },
    multiplayer: {
      host: "\uB9CC\uB4E4\uAE30",
      join: "\uCC38\uAC00\uD558\uAE30",
      paste_friend_code: "\uCF54\uB4DC \uBD99\uC5EC\uB123\uAE30",
      share_friend_code: "\uCF54\uB4DC \uACF5\uC720\uD558\uAE30",
      title: "\uBA40\uD2F0\uD50C\uB808\uC774\uC5B4",
      your_name: "\uC774\uB984"
    }
  };
  ho = {
    button: {
      select: "\uACE0\uB974\uAE30"
    },
    description: "\uC2A4\uD0A8\uC744 \uACE0\uB974\uC138\uC694.",
    title: "\uC2A4\uD0A8"
  };
  vo = {
    text: {
      browse_items: "\uD56D\uBAA9 \uCC3E\uAE30",
      create_item: "\uD56D\uBAA9 \uC0DD\uC131",
      creations: "\uB9CC\uB4E0 \uAC83\uB4E4",
      edit: "\uD3B8\uC9D1\uD558\uAE30",
      steam_version: "\uC2A4\uD300 \uBC84\uC804",
      subscriptions: "\uAD6C\uB3C5",
      workshop: "\uC6CC\uD06C\uC0F5"
    }
  };
  bo = {
    campaign: co,
    home: uo,
    level_picker: fo,
    levels: mo,
    locales: po,
    popup: _o,
    settings: go,
    skins: ho,
    workshop: vo
  };
  Eo = JSON.parse(localStorage.getItem("settings") || "{}");
  Io = fs({
    legacy: false,
    locale: Eo.language || "en",
    fallbackLocale: "en",
    messages: {
      en: As,
      es: Hs,
      fa: zs,
      fr: io,
      ko: bo
    }
  });
})();
export {
  To as A,
  Ve as E,
  wo as S,
  ct as U,
  kn as W,
  __tla,
  So as a,
  _r as b,
  De as c,
  ko as g,
  Io as i,
  Dt as u
};
