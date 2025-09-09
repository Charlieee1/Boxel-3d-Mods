const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./web-BUg0WibY.js","./SkeletonUtils-CqlbfaSM.js","./web-CS08YvY-.js"])))=>i.map(i=>d[i]);
import { ac as za, aW as Za, f as en, aX as tn, g as we, q as pt, aV as an, aY as St, aZ as ya, F as La, a_ as Te, a$ as nn, x as rn, y as sn, h as on, b0 as ln } from "./SkeletonUtils-CqlbfaSM.js";
let Uo, Ye, xo, ct, ka, Mo, gn, Me, Do, $o, Dt;
let __tla = (async () => {
  var be;
  (function(e) {
    e.Unimplemented = "UNIMPLEMENTED", e.Unavailable = "UNAVAILABLE";
  })(be || (be = {}));
  class it extends Error {
    constructor(t, a, n) {
      super(t), this.message = t, this.code = a, this.data = n;
    }
  }
  const cn = (e) => {
    var t, a;
    return e?.androidBridge ? "android" : !((a = (t = e?.webkit) === null || t === void 0 ? void 0 : t.messageHandlers) === null || a === void 0) && a.bridge ? "ios" : "web";
  }, un = (e) => {
    const t = e.CapacitorCustomPlatform || null, a = e.Capacitor || {}, n = a.Plugins = a.Plugins || {}, r = () => t !== null ? t.name : cn(e), s = () => r() !== "web", o = (_) => {
      const m = d.get(_);
      return !!(m?.platforms.has(r()) || i(_));
    }, i = (_) => {
      var m;
      return (m = a.PluginHeaders) === null || m === void 0 ? void 0 : m.find((k) => k.name === _);
    }, u = (_) => e.console.error(_), d = /* @__PURE__ */ new Map(), g = (_, m = {}) => {
      const k = d.get(_);
      if (k) return console.warn(`Capacitor plugin "${_}" already registered. Cannot register plugins twice.`), k.proxy;
      const P = r(), w = i(_);
      let S;
      const f = async () => (!S && P in m ? S = typeof m[P] == "function" ? S = await m[P]() : S = m[P] : t !== null && !S && "web" in m && (S = typeof m.web == "function" ? S = await m.web() : S = m.web), S), v = (N, A) => {
        var H, G;
        if (w) {
          const x = w?.methods.find((J) => A === J.name);
          if (x) return x.rtype === "promise" ? (J) => a.nativePromise(_, A.toString(), J) : (J, ie) => a.nativeCallback(_, A.toString(), J, ie);
          if (N) return (H = N[A]) === null || H === void 0 ? void 0 : H.bind(N);
        } else {
          if (N) return (G = N[A]) === null || G === void 0 ? void 0 : G.bind(N);
          throw new it(`"${_}" plugin is not implemented on ${P}`, be.Unimplemented);
        }
      }, L = (N) => {
        let A;
        const H = (...G) => {
          const x = f().then((J) => {
            const ie = v(J, N);
            if (ie) {
              const ce = ie(...G);
              return A = ce?.remove, ce;
            } else throw new it(`"${_}.${N}()" is not implemented on ${P}`, be.Unimplemented);
          });
          return N === "addListener" && (x.remove = async () => A()), x;
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
          const J = await H;
          T({
            eventName: N,
            callbackId: J
          }, A);
        }, x = new Promise((J) => H.then(() => J({
          remove: G
        })));
        return x.remove = async () => {
          console.warn("Using addListener() without 'await' is deprecated."), await G();
        }, x;
      }, E = new Proxy({}, {
        get(N, A) {
          switch (A) {
            case "$$typeof":
              return;
            case "toJSON":
              return () => ({});
            case "addListener":
              return w ? I : h;
            case "removeListener":
              return T;
            default:
              return L(A);
          }
        }
      });
      return n[_] = E, d.set(_, {
        name: _,
        proxy: E,
        platforms: /* @__PURE__ */ new Set([
          ...Object.keys(m),
          ...w ? [
            P
          ] : []
        ])
      }), E;
    };
    return a.convertFileSrc || (a.convertFileSrc = (_) => _), a.getPlatform = r, a.handleError = u, a.isNativePlatform = s, a.isPluginAvailable = o, a.registerPlugin = g, a.Exception = it, a.DEBUG = !!a.DEBUG, a.isLoggingEnabled = !!a.isLoggingEnabled, a;
  }, dn = (e) => e.Capacitor = un(e), He = dn(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), Ge = He.registerPlugin;
  ka = class {
    constructor() {
      this.listeners = {}, this.retainedEventArguments = {}, this.windowListeners = {};
    }
    addListener(t, a) {
      let n = false;
      this.listeners[t] || (this.listeners[t] = [], n = true), this.listeners[t].push(a);
      const s = this.windowListeners[t];
      s && !s.registered && this.addWindowListener(s), n && this.sendRetainedArgumentsForEvent(t);
      const o = async () => this.removeListener(t, a);
      return Promise.resolve({
        remove: o
      });
    }
    async removeAllListeners() {
      this.listeners = {};
      for (const t in this.windowListeners) this.removeWindowListener(this.windowListeners[t]);
      this.windowListeners = {};
    }
    notifyListeners(t, a, n) {
      const r = this.listeners[t];
      if (!r) {
        if (n) {
          let s = this.retainedEventArguments[t];
          s || (s = []), s.push(a), this.retainedEventArguments[t] = s;
        }
        return;
      }
      r.forEach((s) => s(a));
    }
    hasListeners(t) {
      var a;
      return !!(!((a = this.listeners[t]) === null || a === void 0) && a.length);
    }
    registerWindowListener(t, a) {
      this.windowListeners[a] = {
        registered: false,
        windowEventName: t,
        pluginEventName: a,
        handler: (n) => {
          this.notifyListeners(a, n);
        }
      };
    }
    unimplemented(t = "not implemented") {
      return new He.Exception(t, be.Unimplemented);
    }
    unavailable(t = "not available") {
      return new He.Exception(t, be.Unavailable);
    }
    async removeListener(t, a) {
      const n = this.listeners[t];
      if (!n) return;
      const r = n.indexOf(a);
      this.listeners[t].splice(r, 1), this.listeners[t].length || this.removeWindowListener(this.windowListeners[t]);
    }
    addWindowListener(t) {
      window.addEventListener(t.windowEventName, t.handler), t.registered = true;
    }
    removeWindowListener(t) {
      t && (window.removeEventListener(t.windowEventName, t.handler), t.registered = false);
    }
    sendRetainedArgumentsForEvent(t) {
      const a = this.retainedEventArguments[t];
      a && (delete this.retainedEventArguments[t], a.forEach((n) => {
        this.notifyListeners(t, n);
      }));
    }
  };
  const xt = (e) => encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape), Ut = (e) => e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  class fn extends ka {
    async getCookies() {
      const t = document.cookie, a = {};
      return t.split(";").forEach((n) => {
        if (n.length <= 0) return;
        let [r, s] = n.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
        r = Ut(r).trim(), s = Ut(s).trim(), a[r] = s;
      }), a;
    }
    async setCookie(t) {
      try {
        const a = xt(t.key), n = xt(t.value), r = `; expires=${(t.expires || "").replace("expires=", "")}`, s = (t.path || "/").replace("path=", ""), o = t.url != null && t.url.length > 0 ? `domain=${t.url}` : "";
        document.cookie = `${a}=${n || ""}${r}; path=${s}; ${o};`;
      } catch (a) {
        return Promise.reject(a);
      }
    }
    async deleteCookie(t) {
      try {
        document.cookie = `${t.key}=; Max-Age=0`;
      } catch (a) {
        return Promise.reject(a);
      }
    }
    async clearCookies() {
      try {
        const t = document.cookie.split(";") || [];
        for (const a of t) document.cookie = a.replace(/^ +/, "").replace(/=.*/, `=;expires=${(/* @__PURE__ */ new Date()).toUTCString()};path=/`);
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
  Ge("CapacitorCookies", {
    web: () => new fn()
  });
  let mn, pn, _n;
  mn = async (e) => new Promise((t, a) => {
    const n = new FileReader();
    n.onload = () => {
      const r = n.result;
      t(r.indexOf(",") >= 0 ? r.split(",")[1] : r);
    }, n.onerror = (r) => a(r), n.readAsDataURL(e);
  });
  pn = (e = {}) => {
    const t = Object.keys(e);
    return Object.keys(e).map((r) => r.toLocaleLowerCase()).reduce((r, s, o) => (r[s] = e[t[o]], r), {});
  };
  _n = (e, t = true) => e ? Object.entries(e).reduce((n, r) => {
    const [s, o] = r;
    let i, u;
    return Array.isArray(o) ? (u = "", o.forEach((d) => {
      i = t ? encodeURIComponent(d) : d, u += `${s}=${i}&`;
    }), u.slice(0, -1)) : (i = t ? encodeURIComponent(o) : o, u = `${s}=${i}`), `${n}&${u}`;
  }, "").substr(1) : null;
  gn = (e, t = {}) => {
    const a = Object.assign({
      method: e.method || "GET",
      headers: e.headers
    }, t), r = pn(e.headers)["content-type"] || "";
    if (typeof e.data == "string") a.body = e.data;
    else if (r.includes("application/x-www-form-urlencoded")) {
      const s = new URLSearchParams();
      for (const [o, i] of Object.entries(e.data || {})) s.set(o, i);
      a.body = s.toString();
    } else if (r.includes("multipart/form-data") || e.data instanceof FormData) {
      const s = new FormData();
      if (e.data instanceof FormData) e.data.forEach((i, u) => {
        s.append(u, i);
      });
      else for (const i of Object.keys(e.data)) s.append(i, e.data[i]);
      a.body = s;
      const o = new Headers(a.headers);
      o.delete("content-type"), a.headers = o;
    } else (r.includes("application/json") || typeof e.data == "object") && (a.body = JSON.stringify(e.data));
    return a;
  };
  class hn extends ka {
    async request(t) {
      const a = gn(t, t.webFetchExtra), n = _n(t.params, t.shouldEncodeUrlParams), r = n ? `${t.url}?${n}` : t.url, s = await fetch(r, a), o = s.headers.get("content-type") || "";
      let { responseType: i = "text" } = s.ok ? t : {};
      o.includes("application/json") && (i = "json");
      let u, d;
      switch (i) {
        case "arraybuffer":
        case "blob":
          d = await s.blob(), u = await mn(d);
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
  Ge("CapacitorHttp", {
    web: () => new hn()
  });
  ct = class {
    constructor() {
    }
    randomNumber(t, a) {
      return Math.random() * (a - t) + t;
    }
    getVectorFromAngle(t = 0, r = 1) {
      var n = Math.PI, r = 1e3, s = -t * (180 / n), o = Math.round(Math.cos((90 - s) * (n / 180)) * r) / r, i = Math.round(Math.sin((90 - s) * (n / 180)) * r) / r;
      return {
        x: o,
        y: i
      };
    }
    getAngleFromVector(t) {
      var a = Math.atan2(t.y, t.x), n = 180 * a / Math.PI;
      return this.degreesToRadians((360 + Math.round(n)) % 360);
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
      return He.isNativePlatform();
    }
    isFullscreen() {
      return document.fullscreenElement != null;
    }
    openLink(t, a = "_blank") {
      window.chrome?.tabs ? window.chrome.tabs.create({
        url: t
      }) : window.open(t, a);
    }
  };
  Me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  Do = function(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  };
  Mo = function(e) {
    if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
    var t = e.default;
    if (typeof t == "function") {
      var a = function n() {
        var r = false;
        try {
          r = this instanceof n;
        } catch {
        }
        return r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
      };
      a.prototype = t.prototype;
    } else a = {};
    return Object.defineProperty(a, "__esModule", {
      value: true
    }), Object.keys(e).forEach(function(n) {
      var r = Object.getOwnPropertyDescriptor(e, n);
      Object.defineProperty(a, n, r.get ? r : {
        enumerable: true,
        get: function() {
          return e[n];
        }
      });
    }), a;
  };
  var je = {
    exports: {}
  }, vn = je.exports, $t;
  function bn() {
    return $t || ($t = 1, (function(e, t) {
      (function(a, n) {
        n();
      })(vn, function() {
        function a(d, g) {
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
        function n(d, g, _) {
          var m = new XMLHttpRequest();
          m.open("GET", d), m.responseType = "blob", m.onload = function() {
            u(m.response, g, _);
          }, m.onerror = function() {
            console.error("could not download file");
          }, m.send();
        }
        function r(d) {
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
        var o = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Me == "object" && Me.global === Me ? Me : void 0, i = o.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), u = o.saveAs || (typeof window != "object" || window !== o ? function() {
        } : "download" in HTMLAnchorElement.prototype && !i ? function(d, g, _) {
          var m = o.URL || o.webkitURL, k = document.createElement("a");
          g = g || d.name || "download", k.download = g, k.rel = "noopener", typeof d == "string" ? (k.href = d, k.origin === location.origin ? s(k) : r(k.href) ? n(d, g, _) : s(k, k.target = "_blank")) : (k.href = m.createObjectURL(d), setTimeout(function() {
            m.revokeObjectURL(k.href);
          }, 4e4), setTimeout(function() {
            s(k);
          }, 0));
        } : "msSaveOrOpenBlob" in navigator ? function(d, g, _) {
          if (g = g || d.name || "download", typeof d != "string") navigator.msSaveOrOpenBlob(a(d, _), g);
          else if (r(d)) n(d, g, _);
          else {
            var m = document.createElement("a");
            m.href = d, m.target = "_blank", setTimeout(function() {
              s(m);
            });
          }
        } : function(d, g, _, m) {
          if (m = m || open("", "_blank"), m && (m.document.title = m.document.body.innerText = "downloading..."), typeof d == "string") return n(d, g, _);
          var k = d.type === "application/octet-stream", P = /constructor/i.test(o.HTMLElement) || o.safari, w = /CriOS\/[\d]+/.test(navigator.userAgent);
          if ((w || k && P || i) && typeof FileReader < "u") {
            var S = new FileReader();
            S.onloadend = function() {
              var L = S.result;
              L = w ? L : L.replace(/^data:[^;]*;/, "data:attachment/file;"), m ? m.location.href = L : location = L, m = null;
            }, S.readAsDataURL(d);
          } else {
            var f = o.URL || o.webkitURL, v = f.createObjectURL(d);
            m ? m.location = v : location.href = v, m = null, setTimeout(function() {
              f.revokeObjectURL(v);
            }, 4e4);
          }
        });
        o.saveAs = u.saveAs = u, e.exports = u;
      });
    })(je)), je.exports;
  }
  var ut = bn();
  const En = "modulepreload", yn = function(e, t) {
    return new URL(e, t).href;
  }, jt = {}, wa = function(t, a, n) {
    let r = Promise.resolve();
    if (a && a.length > 0) {
      let d = function(g) {
        return Promise.all(g.map((_) => Promise.resolve(_).then((m) => ({
          status: "fulfilled",
          value: m
        }), (m) => ({
          status: "rejected",
          reason: m
        }))));
      };
      const o = document.getElementsByTagName("link"), i = document.querySelector("meta[property=csp-nonce]"), u = i?.nonce || i?.getAttribute("nonce");
      r = d(a.map((g) => {
        if (g = yn(g, n), g in jt) return;
        jt[g] = true;
        const _ = g.endsWith(".css"), m = _ ? '[rel="stylesheet"]' : "";
        if (!!n) for (let w = o.length - 1; w >= 0; w--) {
          const S = o[w];
          if (S.href === g && (!_ || S.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${g}"]${m}`)) return;
        const P = document.createElement("link");
        if (P.rel = _ ? "stylesheet" : En, _ || (P.as = "script"), P.crossOrigin = "", P.href = g, u && P.setAttribute("nonce", u), document.head.appendChild(P), _) return new Promise((w, S) => {
          P.addEventListener("load", w), P.addEventListener("error", () => S(new Error(`Unable to preload CSS for ${g}`)));
        });
      }));
    }
    function s(o) {
      const i = new Event("vite:preloadError", {
        cancelable: true
      });
      if (i.payload = o, window.dispatchEvent(i), !i.defaultPrevented) throw o;
    }
    return r.then((o) => {
      for (const i of o || []) i.status === "rejected" && s(i.reason);
      return t().catch(s);
    });
  };
  function Ln(e) {
    e.CapacitorUtils.Synapse = new Proxy({}, {
      get(t, a) {
        return new Proxy({}, {
          get(n, r) {
            return (s, o, i) => {
              const u = e.Capacitor.Plugins[a];
              if (u === void 0) {
                i(new Error(`Capacitor plugin ${a} not found`));
                return;
              }
              if (typeof u[r] != "function") {
                i(new Error(`Method ${r} not found in Capacitor plugin ${a}`));
                return;
              }
              (async () => {
                try {
                  const d = await u[r](s);
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
  function kn(e) {
    e.CapacitorUtils.Synapse = new Proxy({}, {
      get(t, a) {
        return e.cordova.plugins[a];
      }
    });
  }
  function wn(e = false) {
    typeof window > "u" || (window.CapacitorUtils = window.CapacitorUtils || {}, window.Capacitor !== void 0 && !e ? Ln(window) : window.cordova !== void 0 && kn(window));
  }
  var Ve;
  (function(e) {
    e.Documents = "DOCUMENTS", e.Data = "DATA", e.Library = "LIBRARY", e.Cache = "CACHE", e.External = "EXTERNAL", e.ExternalStorage = "EXTERNAL_STORAGE", e.ExternalCache = "EXTERNAL_CACHE", e.LibraryNoCloud = "LIBRARY_NO_CLOUD", e.Temporary = "TEMPORARY";
  })(Ve || (Ve = {}));
  (function(e) {
    e.UTF8 = "utf8", e.ASCII = "ascii", e.UTF16 = "utf16";
  })(Ye || (Ye = {}));
  const Wt = Ge("Filesystem", {
    web: () => wa(() => import("./web-BUg0WibY.js"), __vite__mapDeps([0,1]), import.meta.url).then((e) => new e.FilesystemWeb())
  });
  wn();
  xo = class {
    constructor() {
      this.levelPrefix = "level_";
    }
    getAllLocalStorage() {
      for (var t = {}, a = 0; a < localStorage.length; a++) {
        var n = localStorage.key(a), r = localStorage.getItem(n);
        t[n] = r;
      }
      return t;
    }
    setAllLocalStorage(t) {
      localStorage.clear(), Object.keys(t).forEach(function(a) {
        localStorage.setItem(a, t[a]);
      });
    }
    getListOfLevels() {
      for (var t = [], a = localStorage.length, n = 0; n < a; n++) {
        var r = localStorage.key(n);
        r.indexOf(this.levelPrefix) >= 0 && t.push({
          key: r,
          level: JSON.parse(localStorage.getItem(r))
        });
      }
      return t.sort((s, o) => s.level.name > o.level.name ? 1 : o.level.name > s.level.name ? -1 : 0), t;
    }
    getLevelData(t) {
      return JSON.parse(localStorage.getItem(t));
    }
    setLevelData(t, a) {
      var n = 1;
      if (t == null) {
        for (; localStorage.getItem(this.levelPrefix + n) != null; ) n++;
        t = "level_" + n;
      }
      return localStorage.setItem(t, JSON.stringify(a)), t;
    }
    removeLevelData(t) {
      localStorage.removeItem(t);
    }
    updateLevelDataName(t, a) {
      var n = this.getLevelData(t);
      n.name = a, this.setLevelData(t, n);
    }
    saveScore(t, a) {
      var n = this.getScores(), r = 999999999, s = parseInt(a.replace(/[^\d]/g, "")), o = false, i = n[t];
      return i != null && (i.indexOf(":") >= 0 && (i += "0"), r = parseInt(i.replace(/[^\d]/g, ""))), s < r && (o = true, n[t] = a, localStorage.setItem("scores", JSON.stringify(n)), this.saveThumbnailAfterPopupOpened(t)), this.getThumbnail(t) == null && this.saveThumbnailAfterPopupOpened(t), o;
    }
    getScores() {
      var t = localStorage.getItem("scores");
      return t == null && (t = "{}", localStorage.setItem("scores", t)), JSON.parse(t);
    }
    saveThumbnail(t) {
      var a = app.storage.screenshot({
        width: 200,
        height: 200,
        zoom: 1
      });
      localStorage.setItem("thumbnail_" + t, a);
    }
    saveThumbnailAfterPopupOpened(t) {
      const a = () => {
        app.storage.saveThumbnail(t), window.removeEventListener("popupOpened", a);
      };
      window.addEventListener("popupOpened", a);
    }
    getThumbnail(t) {
      return localStorage.getItem("thumbnail_" + t);
    }
    setSettings(t) {
      localStorage.setItem("settings", JSON.stringify(t));
    }
    getSettings(t = app) {
      var a = new ct(), n = localStorage.getItem("settings"), r = {
        buffer: 100,
        connection: "",
        debug: false,
        controls: {
          reverse: false
        },
        language: "en",
        levelPacks: "",
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
        volume: a.isExtension() ? 0 : 0.5,
        volumeMusic: 0.5,
        volumeEffects: 1
      }, s = r;
      n != null && (s = JSON.parse(n));
      for (var o in r) s[o] == null && (s[o] = r[o]);
      return s.peer.length > 6 && (s.peer = this.generateHex("")), s;
    }
    async saveLevelToFile() {
      app.levelEditor.saveLevel();
      var t = app.level.exportToJSON(app), a = new Blob([
        JSON.stringify(t)
      ], {
        type: "application/json"
      }), n = new ct();
      if (n.isNativeApp()) try {
        const r = (/* @__PURE__ */ new Date()).getTime(), s = await Wt.writeFile({
          path: `${t.name} v${r}.json`,
          data: JSON.stringify(t),
          directory: Ve.Documents,
          encoding: Ye.UTF8
        });
        alert("Success! Saved to " + s.uri);
      } catch (r) {
        console.error(r), alert(JSON.stringify(r));
      }
      else ut.saveAs(a, t.name);
    }
    screenshot(t) {
      t = Object.assign({
        width: 640,
        height: 360,
        zoom: 1,
        save: false
      }, t);
      var a = "", n = window.innerWidth, r = window.innerHeight, s = app.graphics.camera.zoom, o = app.graphics.renderer.getPixelRatio();
      return app.graphics.camera.zoom = t.zoom, app.graphics.camera.aspect = t.width / t.height, app.graphics.camera.updateProjectionMatrix(), app.graphics.renderer.setPixelRatio(1), app.graphics.renderer.setSize(t.width, t.height), app.graphics.renderer.render(app.graphics.scene, app.graphics.camera), a = app.graphics.renderer.domElement.toDataURL("image/png"), t.save == true && app.graphics.renderer.domElement.toBlob((i) => ut.saveAs(i, "screenshot.png")), app.graphics.camera.zoom = s, app.graphics.camera.aspect = n / r, app.graphics.camera.updateProjectionMatrix(), app.graphics.renderer.setPixelRatio(o), app.graphics.renderer.setSize(n, r), app.graphics.renderer.render(app.graphics.scene, app.graphics.camera), a;
    }
    loadLevelFromFile() {
      var t = document.createElement("input");
      t.setAttribute("type", "file"), t.setAttribute("id", "theFile"), t.addEventListener("change", n, false);
      function a() {
        var r = document.createEvent("MouseEvents");
        r.initEvent("click", true, false), t.dispatchEvent(r);
      }
      function n(r) {
        var s = r.target.files, o = s[0], i = new FileReader();
        i.onload = /* @__PURE__ */ (function(u) {
          return function(d) {
            var g = u.name.split(".").slice(0, -1).join("."), _ = JSON.parse(d.target.result);
            _.name = g, app.level.clearLevel(app), app.level.importFromJSON(_, app);
          };
        })(o), i.readAsText(o);
      }
      a();
    }
    async backupToFile() {
      var t = app.storage.getAllLocalStorage(), a = new Blob([
        JSON.stringify(t)
      ], {
        type: "application/json"
      }), n = new ct();
      if (n.isNativeApp()) try {
        const r = (/* @__PURE__ */ new Date()).getTime(), s = await Wt.writeFile({
          path: `boxel_3d_backup_${r}.json`,
          data: JSON.stringify(t),
          directory: Ve.Documents,
          encoding: Ye.UTF8
        });
        alert("Success! Saved to " + s.uri);
      } catch (r) {
        console.error(r), alert(JSON.stringify(r));
      }
      else ut.saveAs(a, "boxel_3d_backup");
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
                t.setAttribute("type", "file"), t.setAttribute("id", "theFile"), t.addEventListener("change", n, false);
                function a() {
                  var r = document.createEvent("MouseEvents");
                  r.initEvent("click", true, false), t.dispatchEvent(r);
                }
                function n(r) {
                  var s = r.target.files, o = s[0], i = new FileReader();
                  i.onload = /* @__PURE__ */ (function() {
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
                  })(), i.readAsText(o);
                }
                a();
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
                var a = 0;
                t == true && window.chrome?.storage.sync.clear();
                for (var n = 0; n < localStorage.length; n++) {
                  var r = localStorage.key(n), s = localStorage.getItem(r), o = {};
                  o[r] = s, window.chrome?.storage.sync.set(o, function() {
                    a++, a == localStorage.length && window.dispatchEvent(new CustomEvent("openPopup", {
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
                chrome?.storage.sync.get(null, function(a) {
                  t == true && localStorage.clear();
                  for (var n = Object.keys(a), r = 0; r < n.length; r++) {
                    var s = n[r], o = a[s];
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
      return za.generateUUID();
    }
  };
  function Sn(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
  }
  const Be = typeof window < "u", ue = (e, t = false) => t ? Symbol.for(e) : Symbol(e), Tn = (e, t, a) => In({
    l: e,
    k: t,
    s: a
  }), In = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), q = (e) => typeof e == "number" && isFinite(e), Cn = (e) => Tt(e) === "[object Date]", Ee = (e) => Tt(e) === "[object RegExp]", qe = (e) => F(e) && Object.keys(e).length === 0, K = Object.assign, Pn = Object.create, $ = (e = null) => Pn(e);
  let Ht;
  const pe = () => Ht || (Ht = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : $());
  function Vt(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
  }
  function Yt(e) {
    return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function On(e) {
    return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (n, r, s) => `${r}="${Yt(s)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (n, r, s) => `${r}='${Yt(s)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
      /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
      /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
    ].forEach((n) => {
      e = e.replace(n, "$1javascript&#58;");
    }), e;
  }
  const Nn = Object.prototype.hasOwnProperty;
  function ee(e, t) {
    return Nn.call(e, t);
  }
  const Y = Array.isArray, W = (e) => typeof e == "function", C = (e) => typeof e == "string", D = (e) => typeof e == "boolean", M = (e) => e !== null && typeof e == "object", An = (e) => M(e) && W(e.then) && W(e.catch), Sa = Object.prototype.toString, Tt = (e) => Sa.call(e), F = (e) => Tt(e) === "[object Object]", Rn = (e) => e == null ? "" : Y(e) || F(e) && e.toString === Sa ? JSON.stringify(e, null, 2) : String(e);
  function It(e, t = "") {
    return e.reduce((a, n, r) => r === 0 ? a + n : a + t + n, "");
  }
  const xe = (e) => !M(e) || Y(e);
  function We(e, t) {
    if (xe(e) || xe(t)) throw new Error("Invalid value");
    const a = [
      {
        src: e,
        des: t
      }
    ];
    for (; a.length; ) {
      const { src: n, des: r } = a.pop();
      Object.keys(n).forEach((s) => {
        s !== "__proto__" && (M(n[s]) && !M(r[s]) && (r[s] = Array.isArray(n[s]) ? [] : $()), xe(r[s]) || xe(n[s]) ? r[s] = n[s] : a.push({
          src: n[s],
          des: r[s]
        }));
      });
    }
  }
  function Fn(e, t, a) {
    return {
      line: e,
      column: t,
      offset: a
    };
  }
  function _t(e, t, a) {
    return {
      start: e,
      end: t
    };
  }
  const U = {
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
  }, Dn = 17;
  function Ke(e, t, a = {}) {
    const { domain: n, messages: r, args: s } = a, o = e, i = new SyntaxError(String(o));
    return i.code = e, t && (i.location = t), i.domain = n, i;
  }
  function Mn(e) {
    throw e;
  }
  const te = " ", xn = "\r", X = `
`, Un = "\u2028", $n = "\u2029";
  function jn(e) {
    const t = e;
    let a = 0, n = 1, r = 1, s = 0;
    const o = (E) => t[E] === xn && t[E + 1] === X, i = (E) => t[E] === X, u = (E) => t[E] === $n, d = (E) => t[E] === Un, g = (E) => o(E) || i(E) || u(E) || d(E), _ = () => a, m = () => n, k = () => r, P = () => s, w = (E) => o(E) || u(E) || d(E) ? X : t[E], S = () => w(a), f = () => w(a + s);
    function v() {
      return s = 0, g(a) && (n++, r = 0), o(a) && a++, a++, r++, t[a];
    }
    function L() {
      return o(a + s) && s++, s++, t[a + s];
    }
    function h() {
      a = 0, n = 1, r = 1, s = 0;
    }
    function T(E = 0) {
      s = E;
    }
    function I() {
      const E = a + s;
      for (; E !== a; ) v();
      s = 0;
    }
    return {
      index: _,
      line: m,
      column: k,
      peekOffset: P,
      charAt: w,
      currentChar: S,
      currentPeek: f,
      next: v,
      peek: L,
      reset: h,
      resetPeek: T,
      skipToPeek: I
    };
  }
  const se = void 0, Wn = ".", Bt = "'", Hn = "tokenizer";
  function Vn(e, t = {}) {
    const a = t.location !== false, n = jn(e), r = () => n.index(), s = () => Fn(n.line(), n.column(), n.index()), o = s(), i = r(), u = {
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
    function _(l, c, b, ...O) {
      const V = d();
      if (c.column += b, c.offset += b, g) {
        const R = a ? _t(V.startLoc, c) : null, p = Ke(l, R, {
          domain: Hn,
          args: O
        });
        g(p);
      }
    }
    function m(l, c, b) {
      l.endLoc = s(), l.currentType = c;
      const O = {
        type: c
      };
      return a && (O.loc = _t(l.startLoc, l.endLoc)), b != null && (O.value = b), O;
    }
    const k = (l) => m(l, 13);
    function P(l, c) {
      return l.currentChar() === c ? (l.next(), c) : (_(U.EXPECTED_TOKEN, s(), 0, c), "");
    }
    function w(l) {
      let c = "";
      for (; l.currentPeek() === te || l.currentPeek() === X; ) c += l.currentPeek(), l.peek();
      return c;
    }
    function S(l) {
      const c = w(l);
      return l.skipToPeek(), c;
    }
    function f(l) {
      if (l === se) return false;
      const c = l.charCodeAt(0);
      return c >= 97 && c <= 122 || c >= 65 && c <= 90 || c === 95;
    }
    function v(l) {
      if (l === se) return false;
      const c = l.charCodeAt(0);
      return c >= 48 && c <= 57;
    }
    function L(l, c) {
      const { currentType: b } = c;
      if (b !== 2) return false;
      w(l);
      const O = f(l.currentPeek());
      return l.resetPeek(), O;
    }
    function h(l, c) {
      const { currentType: b } = c;
      if (b !== 2) return false;
      w(l);
      const O = l.currentPeek() === "-" ? l.peek() : l.currentPeek(), V = v(O);
      return l.resetPeek(), V;
    }
    function T(l, c) {
      const { currentType: b } = c;
      if (b !== 2) return false;
      w(l);
      const O = l.currentPeek() === Bt;
      return l.resetPeek(), O;
    }
    function I(l, c) {
      const { currentType: b } = c;
      if (b !== 7) return false;
      w(l);
      const O = l.currentPeek() === ".";
      return l.resetPeek(), O;
    }
    function E(l, c) {
      const { currentType: b } = c;
      if (b !== 8) return false;
      w(l);
      const O = f(l.currentPeek());
      return l.resetPeek(), O;
    }
    function N(l, c) {
      const { currentType: b } = c;
      if (!(b === 7 || b === 11)) return false;
      w(l);
      const O = l.currentPeek() === ":";
      return l.resetPeek(), O;
    }
    function A(l, c) {
      const { currentType: b } = c;
      if (b !== 9) return false;
      const O = () => {
        const R = l.currentPeek();
        return R === "{" ? f(l.peek()) : R === "@" || R === "|" || R === ":" || R === "." || R === te || !R ? false : R === X ? (l.peek(), O()) : G(l, false);
      }, V = O();
      return l.resetPeek(), V;
    }
    function H(l) {
      w(l);
      const c = l.currentPeek() === "|";
      return l.resetPeek(), c;
    }
    function G(l, c = true) {
      const b = (V = false, R = "") => {
        const p = l.currentPeek();
        return p === "{" || p === "@" || !p ? V : p === "|" ? !(R === te || R === X) : p === te ? (l.peek(), b(true, te)) : p === X ? (l.peek(), b(true, X)) : true;
      }, O = b();
      return c && l.resetPeek(), O;
    }
    function x(l, c) {
      const b = l.currentChar();
      return b === se ? se : c(b) ? (l.next(), b) : null;
    }
    function J(l) {
      const c = l.charCodeAt(0);
      return c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c === 95 || c === 36;
    }
    function ie(l) {
      return x(l, J);
    }
    function ce(l) {
      const c = l.charCodeAt(0);
      return c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c === 95 || c === 36 || c === 45;
    }
    function Xe(l) {
      return x(l, ce);
    }
    function Qe(l) {
      const c = l.charCodeAt(0);
      return c >= 48 && c <= 57;
    }
    function ze(l) {
      return x(l, Qe);
    }
    function re(l) {
      const c = l.charCodeAt(0);
      return c >= 48 && c <= 57 || c >= 65 && c <= 70 || c >= 97 && c <= 102;
    }
    function Ne(l) {
      return x(l, re);
    }
    function Ae(l) {
      let c = "", b = "";
      for (; c = ze(l); ) b += c;
      return b;
    }
    function Ze(l) {
      let c = "";
      for (; ; ) {
        const b = l.currentChar();
        if (b === "{" || b === "}" || b === "@" || b === "|" || !b) break;
        if (b === te || b === X) if (G(l)) c += b, l.next();
        else {
          if (H(l)) break;
          c += b, l.next();
        }
        else c += b, l.next();
      }
      return c;
    }
    function et(l) {
      S(l);
      let c = "", b = "";
      for (; c = Xe(l); ) b += c;
      const O = l.currentChar();
      if (O && O !== "}" && O !== se && O !== te && O !== X && O !== "\u3000") {
        const V = Fe(l);
        return _(U.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, b + V), b + V;
      }
      return l.currentChar() === se && _(U.UNTERMINATED_CLOSING_BRACE, s(), 0), b;
    }
    function tt(l) {
      S(l);
      let c = "";
      return l.currentChar() === "-" ? (l.next(), c += `-${Ae(l)}`) : c += Ae(l), l.currentChar() === se && _(U.UNTERMINATED_CLOSING_BRACE, s(), 0), c;
    }
    function Mt(l) {
      return l !== Bt && l !== X;
    }
    function at(l) {
      S(l), P(l, "'");
      let c = "", b = "";
      for (; c = x(l, Mt); ) c === "\\" ? b += nt(l) : b += c;
      const O = l.currentChar();
      return O === X || O === se ? (_(U.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), O === X && (l.next(), P(l, "'")), b) : (P(l, "'"), b);
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
          return _(U.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, c), "";
      }
    }
    function Re(l, c, b) {
      P(l, c);
      let O = "";
      for (let V = 0; V < b; V++) {
        const R = Ne(l);
        if (!R) {
          _(U.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${c}${O}${l.currentChar()}`);
          break;
        }
        O += R;
      }
      return `\\${c}${O}`;
    }
    function rt(l) {
      return l !== "{" && l !== "}" && l !== te && l !== X;
    }
    function Fe(l) {
      S(l);
      let c = "", b = "";
      for (; c = x(l, rt); ) b += c;
      return b;
    }
    function st(l) {
      let c = "", b = "";
      for (; c = ie(l); ) b += c;
      return b;
    }
    function ot(l) {
      const c = (b) => {
        const O = l.currentChar();
        return O === "{" || O === "@" || O === "|" || O === "(" || O === ")" || !O || O === te ? b : (b += O, l.next(), c(b));
      };
      return c("");
    }
    function Le(l) {
      S(l);
      const c = P(l, "|");
      return S(l), c;
    }
    function _e(l, c) {
      let b = null;
      switch (l.currentChar()) {
        case "{":
          return c.braceNest >= 1 && _(U.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), l.next(), b = m(c, 2, "{"), S(l), c.braceNest++, b;
        case "}":
          return c.braceNest > 0 && c.currentType === 2 && _(U.EMPTY_PLACEHOLDER, s(), 0), l.next(), b = m(c, 3, "}"), c.braceNest--, c.braceNest > 0 && S(l), c.inLinked && c.braceNest === 0 && (c.inLinked = false), b;
        case "@":
          return c.braceNest > 0 && _(U.UNTERMINATED_CLOSING_BRACE, s(), 0), b = ge(l, c) || k(c), c.braceNest = 0, b;
        default: {
          let V = true, R = true, p = true;
          if (H(l)) return c.braceNest > 0 && _(U.UNTERMINATED_CLOSING_BRACE, s(), 0), b = m(c, 1, Le(l)), c.braceNest = 0, c.inLinked = false, b;
          if (c.braceNest > 0 && (c.currentType === 4 || c.currentType === 5 || c.currentType === 6)) return _(U.UNTERMINATED_CLOSING_BRACE, s(), 0), c.braceNest = 0, ke(l, c);
          if (V = L(l, c)) return b = m(c, 4, et(l)), S(l), b;
          if (R = h(l, c)) return b = m(c, 5, tt(l)), S(l), b;
          if (p = T(l, c)) return b = m(c, 6, at(l)), S(l), b;
          if (!V && !R && !p) return b = m(c, 12, Fe(l)), _(U.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, b.value), S(l), b;
          break;
        }
      }
      return b;
    }
    function ge(l, c) {
      const { currentType: b } = c;
      let O = null;
      const V = l.currentChar();
      switch ((b === 7 || b === 8 || b === 11 || b === 9) && (V === X || V === te) && _(U.INVALID_LINKED_FORMAT, s(), 0), V) {
        case "@":
          return l.next(), O = m(c, 7, "@"), c.inLinked = true, O;
        case ".":
          return S(l), l.next(), m(c, 8, ".");
        case ":":
          return S(l), l.next(), m(c, 9, ":");
        default:
          return H(l) ? (O = m(c, 1, Le(l)), c.braceNest = 0, c.inLinked = false, O) : I(l, c) || N(l, c) ? (S(l), ge(l, c)) : E(l, c) ? (S(l), m(c, 11, st(l))) : A(l, c) ? (S(l), V === "{" ? _e(l, c) || O : m(c, 10, ot(l))) : (b === 7 && _(U.INVALID_LINKED_FORMAT, s(), 0), c.braceNest = 0, c.inLinked = false, ke(l, c));
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
          return _(U.UNBALANCED_CLOSING_BRACE, s(), 0), l.next(), m(c, 3, "}");
        case "@":
          return ge(l, c) || k(c);
        default: {
          if (H(l)) return b = m(c, 1, Le(l)), c.braceNest = 0, c.inLinked = false, b;
          if (G(l)) return m(c, 0, Ze(l));
          break;
        }
      }
      return b;
    }
    function lt() {
      const { currentType: l, offset: c, startLoc: b, endLoc: O } = u;
      return u.lastType = l, u.lastOffset = c, u.lastStartLoc = b, u.lastEndLoc = O, u.offset = r(), u.startLoc = s(), n.currentChar() === se ? m(u, 13) : ke(n, u);
    }
    return {
      nextToken: lt,
      currentOffset: r,
      currentPosition: s,
      context: d
    };
  }
  const Yn = "parser", Bn = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
  function Gn(e, t, a) {
    switch (e) {
      case "\\\\":
        return "\\";
      case "\\'":
        return "'";
      default: {
        const n = parseInt(t || a, 16);
        return n <= 55295 || n >= 57344 ? String.fromCodePoint(n) : "\uFFFD";
      }
    }
  }
  function qn(e = {}) {
    const t = e.location !== false, { onError: a } = e;
    function n(f, v, L, h, ...T) {
      const I = f.currentPosition();
      if (I.offset += h, I.column += h, a) {
        const E = t ? _t(L, I) : null, N = Ke(v, E, {
          domain: Yn,
          args: T
        });
        a(N);
      }
    }
    function r(f, v, L) {
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
      const L = f.context(), h = r(3, L.offset, L.startLoc);
      return h.value = v, s(h, f.currentOffset(), f.currentPosition()), h;
    }
    function i(f, v) {
      const L = f.context(), { lastOffset: h, lastStartLoc: T } = L, I = r(5, h, T);
      return I.index = parseInt(v, 10), f.nextToken(), s(I, f.currentOffset(), f.currentPosition()), I;
    }
    function u(f, v) {
      const L = f.context(), { lastOffset: h, lastStartLoc: T } = L, I = r(4, h, T);
      return I.key = v, f.nextToken(), s(I, f.currentOffset(), f.currentPosition()), I;
    }
    function d(f, v) {
      const L = f.context(), { lastOffset: h, lastStartLoc: T } = L, I = r(9, h, T);
      return I.value = v.replace(Bn, Gn), f.nextToken(), s(I, f.currentOffset(), f.currentPosition()), I;
    }
    function g(f) {
      const v = f.nextToken(), L = f.context(), { lastOffset: h, lastStartLoc: T } = L, I = r(8, h, T);
      return v.type !== 11 ? (n(f, U.UNEXPECTED_EMPTY_LINKED_MODIFIER, L.lastStartLoc, 0), I.value = "", s(I, h, T), {
        nextConsumeToken: v,
        node: I
      }) : (v.value == null && n(f, U.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, ae(v)), I.value = v.value || "", s(I, f.currentOffset(), f.currentPosition()), {
        node: I
      });
    }
    function _(f, v) {
      const L = f.context(), h = r(7, L.offset, L.startLoc);
      return h.value = v, s(h, f.currentOffset(), f.currentPosition()), h;
    }
    function m(f) {
      const v = f.context(), L = r(6, v.offset, v.startLoc);
      let h = f.nextToken();
      if (h.type === 8) {
        const T = g(f);
        L.modifier = T.node, h = T.nextConsumeToken || f.nextToken();
      }
      switch (h.type !== 9 && n(f, U.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, ae(h)), h = f.nextToken(), h.type === 2 && (h = f.nextToken()), h.type) {
        case 10:
          h.value == null && n(f, U.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, ae(h)), L.key = _(f, h.value || "");
          break;
        case 4:
          h.value == null && n(f, U.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, ae(h)), L.key = u(f, h.value || "");
          break;
        case 5:
          h.value == null && n(f, U.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, ae(h)), L.key = i(f, h.value || "");
          break;
        case 6:
          h.value == null && n(f, U.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, ae(h)), L.key = d(f, h.value || "");
          break;
        default: {
          n(f, U.UNEXPECTED_EMPTY_LINKED_KEY, v.lastStartLoc, 0);
          const T = f.context(), I = r(7, T.offset, T.startLoc);
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
      const v = f.context(), L = v.currentType === 1 ? f.currentOffset() : v.offset, h = v.currentType === 1 ? v.endLoc : v.startLoc, T = r(2, L, h);
      T.items = [];
      let I = null;
      do {
        const A = I || f.nextToken();
        switch (I = null, A.type) {
          case 0:
            A.value == null && n(f, U.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, ae(A)), T.items.push(o(f, A.value || ""));
            break;
          case 5:
            A.value == null && n(f, U.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, ae(A)), T.items.push(i(f, A.value || ""));
            break;
          case 4:
            A.value == null && n(f, U.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, ae(A)), T.items.push(u(f, A.value || ""));
            break;
          case 6:
            A.value == null && n(f, U.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, ae(A)), T.items.push(d(f, A.value || ""));
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
    function P(f, v, L, h) {
      const T = f.context();
      let I = h.items.length === 0;
      const E = r(1, v, L);
      E.cases = [], E.cases.push(h);
      do {
        const N = k(f);
        I || (I = N.items.length === 0), E.cases.push(N);
      } while (T.currentType !== 13);
      return I && n(f, U.MUST_HAVE_MESSAGES_IN_PLURAL, L, 0), s(E, f.currentOffset(), f.currentPosition()), E;
    }
    function w(f) {
      const v = f.context(), { offset: L, startLoc: h } = v, T = k(f);
      return v.currentType === 13 ? T : P(f, L, h, T);
    }
    function S(f) {
      const v = Vn(f, K({}, e)), L = v.context(), h = r(0, L.offset, L.startLoc);
      return t && h.loc && (h.loc.source = f), h.body = w(v), e.onCacheKey && (h.cacheKey = e.onCacheKey(f)), L.currentType !== 13 && n(v, U.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, f[L.offset] || ""), s(h, v.currentOffset(), v.currentPosition()), h;
    }
    return {
      parse: S
    };
  }
  function ae(e) {
    if (e.type === 13) return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "\u2026" : t;
  }
  function Kn(e, t = {}) {
    const a = {
      ast: e,
      helpers: /* @__PURE__ */ new Set()
    };
    return {
      context: () => a,
      helper: (s) => (a.helpers.add(s), s)
    };
  }
  function Gt(e, t) {
    for (let a = 0; a < e.length; a++) Ct(e[a], t);
  }
  function Ct(e, t) {
    switch (e.type) {
      case 1:
        Gt(e.cases, t), t.helper("plural");
        break;
      case 2:
        Gt(e.items, t);
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
  function Jn(e, t = {}) {
    const a = Kn(e);
    a.helper("normalize"), e.body && Ct(e.body, a);
    const n = a.context();
    e.helpers = Array.from(n.helpers);
  }
  function Xn(e) {
    const t = e.body;
    return t.type === 2 ? qt(t) : t.cases.forEach((a) => qt(a)), e;
  }
  function qt(e) {
    if (e.items.length === 1) {
      const t = e.items[0];
      (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
    } else {
      const t = [];
      for (let a = 0; a < e.items.length; a++) {
        const n = e.items[a];
        if (!(n.type === 3 || n.type === 9) || n.value == null) break;
        t.push(n.value);
      }
      if (t.length === e.items.length) {
        e.static = It(t);
        for (let a = 0; a < e.items.length; a++) {
          const n = e.items[a];
          (n.type === 3 || n.type === 9) && delete n.value;
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
        const t = e, a = t.cases;
        for (let n = 0; n < a.length; n++) ve(a[n]);
        t.c = a, delete t.cases;
        break;
      }
      case 2: {
        const t = e, a = t.items;
        for (let n = 0; n < a.length; n++) ve(a[n]);
        t.i = a, delete t.items, t.static && (t.s = t.static, delete t.static);
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
  function Qn(e, t) {
    const { filename: a, breakLineCode: n, needIndent: r } = t, s = t.location !== false, o = {
      filename: a,
      code: "",
      column: 1,
      line: 1,
      offset: 0,
      map: void 0,
      breakLineCode: n,
      needIndent: r,
      indentLevel: 0
    };
    s && e.loc && (o.source = e.loc.source);
    const i = () => o;
    function u(w, S) {
      o.code += w;
    }
    function d(w, S = true) {
      const f = S ? n : "";
      u(r ? f + "  ".repeat(w) : f);
    }
    function g(w = true) {
      const S = ++o.indentLevel;
      w && d(S);
    }
    function _(w = true) {
      const S = --o.indentLevel;
      w && d(S);
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
      helper: (w) => `_${w}`,
      needIndent: () => o.needIndent
    };
  }
  function zn(e, t) {
    const { helper: a } = e;
    e.push(`${a("linked")}(`), ye(e, t.key), t.modifier ? (e.push(", "), ye(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
  }
  function Zn(e, t) {
    const { helper: a, needIndent: n } = e;
    e.push(`${a("normalize")}([`), e.indent(n());
    const r = t.items.length;
    for (let s = 0; s < r && (ye(e, t.items[s]), s !== r - 1); s++) e.push(", ");
    e.deindent(n()), e.push("])");
  }
  function er(e, t) {
    const { helper: a, needIndent: n } = e;
    if (t.cases.length > 1) {
      e.push(`${a("plural")}([`), e.indent(n());
      const r = t.cases.length;
      for (let s = 0; s < r && (ye(e, t.cases[s]), s !== r - 1); s++) e.push(", ");
      e.deindent(n()), e.push("])");
    }
  }
  function tr(e, t) {
    t.body ? ye(e, t.body) : e.push("null");
  }
  function ye(e, t) {
    const { helper: a } = e;
    switch (t.type) {
      case 0:
        tr(e, t);
        break;
      case 1:
        er(e, t);
        break;
      case 2:
        Zn(e, t);
        break;
      case 6:
        zn(e, t);
        break;
      case 8:
        e.push(JSON.stringify(t.value), t);
        break;
      case 7:
        e.push(JSON.stringify(t.value), t);
        break;
      case 5:
        e.push(`${a("interpolate")}(${a("list")}(${t.index}))`, t);
        break;
      case 4:
        e.push(`${a("interpolate")}(${a("named")}(${JSON.stringify(t.key)}))`, t);
        break;
      case 9:
        e.push(JSON.stringify(t.value), t);
        break;
      case 3:
        e.push(JSON.stringify(t.value), t);
        break;
    }
  }
  const ar = (e, t = {}) => {
    const a = C(t.mode) ? t.mode : "normal", n = C(t.filename) ? t.filename : "message.intl";
    t.sourceMap;
    const r = t.breakLineCode != null ? t.breakLineCode : a === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : a !== "arrow", o = e.helpers || [], i = Qn(e, {
      filename: n,
      breakLineCode: r,
      needIndent: s
    });
    i.push(a === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(s), o.length > 0 && (i.push(`const { ${It(o.map((g) => `${g}: _${g}`), ", ")} } = ctx`), i.newline()), i.push("return "), ye(i, e), i.deindent(s), i.push("}"), delete e.helpers;
    const { code: u, map: d } = i.context();
    return {
      ast: e,
      code: u,
      map: d ? d.toJSON() : void 0
    };
  };
  function nr(e, t = {}) {
    const a = K({}, t), n = !!a.jit, r = !!a.minify, s = a.optimize == null ? true : a.optimize, i = qn(a).parse(e);
    return n ? (s && Xn(i), r && ve(i), {
      ast: i,
      code: ""
    }) : (Jn(i, a), ar(i, a));
  }
  function rr() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (pe().__INTLIFY_PROD_DEVTOOLS__ = false), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (pe().__INTLIFY_DROP_MESSAGE_COMPILER__ = false);
  }
  function ne(e) {
    return M(e) && Pt(e) === 0 && (ee(e, "b") || ee(e, "body"));
  }
  const Ta = [
    "b",
    "body"
  ];
  function sr(e) {
    return de(e, Ta);
  }
  const Ia = [
    "c",
    "cases"
  ];
  function or(e) {
    return de(e, Ia, []);
  }
  const Ca = [
    "s",
    "static"
  ];
  function lr(e) {
    return de(e, Ca);
  }
  const Pa = [
    "i",
    "items"
  ];
  function ir(e) {
    return de(e, Pa, []);
  }
  const Oa = [
    "t",
    "type"
  ];
  function Pt(e) {
    return de(e, Oa);
  }
  const Na = [
    "v",
    "value"
  ];
  function Ue(e, t) {
    const a = de(e, Na);
    if (a != null) return a;
    throw Ie(t);
  }
  const Aa = [
    "m",
    "modifier"
  ];
  function cr(e) {
    return de(e, Aa);
  }
  const Ra = [
    "k",
    "key"
  ];
  function ur(e) {
    const t = de(e, Ra);
    if (t) return t;
    throw Ie(6);
  }
  function de(e, t, a) {
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      if (ee(e, r) && e[r] != null) return e[r];
    }
    return a;
  }
  const Fa = [
    ...Ta,
    ...Ia,
    ...Ca,
    ...Pa,
    ...Ra,
    ...Aa,
    ...Na,
    ...Oa
  ];
  function Ie(e) {
    return new Error(`unhandled node type: ${e}`);
  }
  function dt(e) {
    return (a) => dr(a, e);
  }
  function dr(e, t) {
    const a = sr(t);
    if (a == null) throw Ie(0);
    if (Pt(a) === 1) {
      const s = or(a);
      return e.plural(s.reduce((o, i) => [
        ...o,
        Kt(e, i)
      ], []));
    } else return Kt(e, a);
  }
  function Kt(e, t) {
    const a = lr(t);
    if (a != null) return e.type === "text" ? a : e.normalize([
      a
    ]);
    {
      const n = ir(t).reduce((r, s) => [
        ...r,
        gt(e, s)
      ], []);
      return e.normalize(n);
    }
  }
  function gt(e, t) {
    const a = Pt(t);
    switch (a) {
      case 3:
        return Ue(t, a);
      case 9:
        return Ue(t, a);
      case 4: {
        const n = t;
        if (ee(n, "k") && n.k) return e.interpolate(e.named(n.k));
        if (ee(n, "key") && n.key) return e.interpolate(e.named(n.key));
        throw Ie(a);
      }
      case 5: {
        const n = t;
        if (ee(n, "i") && q(n.i)) return e.interpolate(e.list(n.i));
        if (ee(n, "index") && q(n.index)) return e.interpolate(e.list(n.index));
        throw Ie(a);
      }
      case 6: {
        const n = t, r = cr(n), s = ur(n);
        return e.linked(gt(e, s), r ? gt(e, r) : void 0, e.type);
      }
      case 7:
        return Ue(t, a);
      case 8:
        return Ue(t, a);
      default:
        throw new Error(`unhandled node on format message part: ${a}`);
    }
  }
  const fr = (e) => e;
  let $e = $();
  function mr(e, t = {}) {
    let a = false;
    const n = t.onError || Mn;
    return t.onError = (r) => {
      a = true, n(r);
    }, {
      ...nr(e, t),
      detectError: a
    };
  }
  function pr(e, t) {
    if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && C(e)) {
      D(t.warnHtmlMessage) && t.warnHtmlMessage;
      const n = (t.onCacheKey || fr)(e), r = $e[n];
      if (r) return r;
      const { ast: s, detectError: o } = mr(e, {
        ...t,
        location: false,
        jit: true
      }), i = dt(s);
      return o ? i : $e[n] = i;
    } else {
      const a = e.cacheKey;
      if (a) {
        const n = $e[a];
        return n || ($e[a] = dt(e));
      } else return dt(e);
    }
  }
  let Ce = null;
  function _r(e) {
    Ce = e;
  }
  function gr(e, t, a) {
    Ce && Ce.emit("i18n:init", {
      timestamp: Date.now(),
      i18n: e,
      version: t,
      meta: a
    });
  }
  const hr = vr("function:translate");
  function vr(e) {
    return (t) => Ce && Ce.emit(e, t);
  }
  const oe = {
    INVALID_ARGUMENT: Dn,
    INVALID_DATE_ARGUMENT: 18,
    INVALID_ISO_DATE_ARGUMENT: 19,
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
    NOT_SUPPORT_LOCALE_TYPE: 23
  }, br = 24;
  function le(e) {
    return Ke(e, null, void 0);
  }
  function Ot(e, t) {
    return t.locale != null ? Jt(t.locale) : Jt(e.locale);
  }
  let ft;
  function Jt(e) {
    if (C(e)) return e;
    if (W(e)) {
      if (e.resolvedOnce && ft != null) return ft;
      if (e.constructor.name === "Function") {
        const t = e();
        if (An(t)) throw le(oe.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
        return ft = t;
      } else throw le(oe.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
    } else throw le(oe.NOT_SUPPORT_LOCALE_TYPE);
  }
  function Er(e, t, a) {
    return [
      .../* @__PURE__ */ new Set([
        a,
        ...Y(t) ? t : M(t) ? Object.keys(t) : C(t) ? [
          t
        ] : [
          a
        ]
      ])
    ];
  }
  function Da(e, t, a) {
    const n = C(a) ? a : Pe, r = e;
    r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
    let s = r.__localeChainCache.get(n);
    if (!s) {
      s = [];
      let o = [
        a
      ];
      for (; Y(o); ) o = Xt(s, o, t);
      const i = Y(t) || !F(t) ? t : t.default ? t.default : null;
      o = C(i) ? [
        i
      ] : i, Y(o) && Xt(s, o, false), r.__localeChainCache.set(n, s);
    }
    return s;
  }
  function Xt(e, t, a) {
    let n = true;
    for (let r = 0; r < t.length && D(n); r++) {
      const s = t[r];
      C(s) && (n = yr(e, t[r], a));
    }
    return n;
  }
  function yr(e, t, a) {
    let n;
    const r = t.split("-");
    do {
      const s = r.join("-");
      n = Lr(e, s, a), r.splice(-1, 1);
    } while (r.length && n === true);
    return n;
  }
  function Lr(e, t, a) {
    let n = false;
    if (!e.includes(t) && (n = true, t)) {
      n = t[t.length - 1] !== "!";
      const r = t.replace(/!/g, "");
      e.push(r), (Y(a) || F(a)) && a[r] && (n = a[r]);
    }
    return n;
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
  const kr = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
  function wr(e) {
    return kr.test(e);
  }
  function Sr(e) {
    const t = e.charCodeAt(0), a = e.charCodeAt(e.length - 1);
    return t === a && (t === 34 || t === 39) ? e.slice(1, -1) : e;
  }
  function Tr(e) {
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
  function Ir(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? false : wr(t) ? Sr(t) : "*" + t;
  }
  function Cr(e) {
    const t = [];
    let a = -1, n = 0, r = 0, s, o, i, u, d, g, _;
    const m = [];
    m[0] = () => {
      o === void 0 ? o = i : o += i;
    }, m[1] = () => {
      o !== void 0 && (t.push(o), o = void 0);
    }, m[2] = () => {
      m[0](), r++;
    }, m[3] = () => {
      if (r > 0) r--, n = 4, m[0]();
      else {
        if (r = 0, o === void 0 || (o = Ir(o), o === false)) return false;
        m[1]();
      }
    };
    function k() {
      const P = e[a + 1];
      if (n === 5 && P === "'" || n === 6 && P === '"') return a++, i = "\\" + P, m[0](), true;
    }
    for (; n !== null; ) if (a++, s = e[a], !(s === "\\" && k())) {
      if (u = Tr(s), _ = fe[n], d = _[u] || _.l || 8, d === 8 || (n = d[0], d[1] !== void 0 && (g = m[d[1]], g && (i = s, g() === false)))) return;
      if (n === 7) return t;
    }
  }
  const Qt = /* @__PURE__ */ new Map();
  function Pr(e, t) {
    return M(e) ? e[t] : null;
  }
  function Or(e, t) {
    if (!M(e)) return null;
    let a = Qt.get(t);
    if (a || (a = Cr(t), a && Qt.set(t, a)), !a) return null;
    const n = a.length;
    let r = e, s = 0;
    for (; s < n; ) {
      const o = a[s];
      if (Fa.includes(o) && ne(r)) return null;
      const i = r[o];
      if (i === void 0 || W(r)) return null;
      r = i, s++;
    }
    return r;
  }
  const Nr = "11.1.12", Je = -1, Pe = "en-US", zt = "", Zt = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
  function Ar() {
    return {
      upper: (e, t) => t === "text" && C(e) ? e.toUpperCase() : t === "vnode" && M(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
      lower: (e, t) => t === "text" && C(e) ? e.toLowerCase() : t === "vnode" && M(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
      capitalize: (e, t) => t === "text" && C(e) ? Zt(e) : t === "vnode" && M(e) && "__v_isVNode" in e ? Zt(e.children) : e
    };
  }
  let Ma;
  function Rr(e) {
    Ma = e;
  }
  let xa;
  function Fr(e) {
    xa = e;
  }
  let Ua;
  function Dr(e) {
    Ua = e;
  }
  let $a = null;
  const Mr = (e) => {
    $a = e;
  }, xr = () => $a;
  let ja = null;
  const ea = (e) => {
    ja = e;
  }, Ur = () => ja;
  let ta = 0;
  function $r(e = {}) {
    const t = W(e.onWarn) ? e.onWarn : Sn, a = C(e.version) ? e.version : Nr, n = C(e.locale) || W(e.locale) ? e.locale : Pe, r = W(n) ? Pe : n, s = Y(e.fallbackLocale) || F(e.fallbackLocale) || C(e.fallbackLocale) || e.fallbackLocale === false ? e.fallbackLocale : r, o = F(e.messages) ? e.messages : mt(r), i = F(e.datetimeFormats) ? e.datetimeFormats : mt(r), u = F(e.numberFormats) ? e.numberFormats : mt(r), d = K($(), e.modifiers, Ar()), g = e.pluralRules || $(), _ = W(e.missing) ? e.missing : null, m = D(e.missingWarn) || Ee(e.missingWarn) ? e.missingWarn : true, k = D(e.fallbackWarn) || Ee(e.fallbackWarn) ? e.fallbackWarn : true, P = !!e.fallbackFormat, w = !!e.unresolving, S = W(e.postTranslation) ? e.postTranslation : null, f = F(e.processor) ? e.processor : null, v = D(e.warnHtmlMessage) ? e.warnHtmlMessage : true, L = !!e.escapeParameter, h = W(e.messageCompiler) ? e.messageCompiler : Ma, T = W(e.messageResolver) ? e.messageResolver : xa || Pr, I = W(e.localeFallbacker) ? e.localeFallbacker : Ua || Er, E = M(e.fallbackContext) ? e.fallbackContext : void 0, N = e, A = M(N.__datetimeFormatters) ? N.__datetimeFormatters : /* @__PURE__ */ new Map(), H = M(N.__numberFormatters) ? N.__numberFormatters : /* @__PURE__ */ new Map(), G = M(N.__meta) ? N.__meta : {};
    ta++;
    const x = {
      version: a,
      cid: ta,
      locale: n,
      fallbackLocale: s,
      messages: o,
      modifiers: d,
      pluralRules: g,
      missing: _,
      missingWarn: m,
      fallbackWarn: k,
      fallbackFormat: P,
      unresolving: w,
      postTranslation: S,
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
    return x.datetimeFormats = i, x.numberFormats = u, x.__datetimeFormatters = A, x.__numberFormatters = H, __INTLIFY_PROD_DEVTOOLS__ && gr(x, a, G), x;
  }
  const mt = (e) => ({
    [e]: $()
  });
  function Nt(e, t, a, n, r) {
    const { missing: s, onWarn: o } = e;
    if (s !== null) {
      const i = s(e, a, t, r);
      return C(i) ? i : t;
    } else return t;
  }
  function Se(e, t, a) {
    const n = e;
    n.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, a, t);
  }
  function jr(e, t) {
    return e === t ? false : e.split("-")[0] === t.split("-")[0];
  }
  function Wr(e, t) {
    const a = t.indexOf(e);
    if (a === -1) return false;
    for (let n = a + 1; n < t.length; n++) if (jr(e, t[n])) return true;
    return false;
  }
  function aa(e, ...t) {
    const { datetimeFormats: a, unresolving: n, fallbackLocale: r, onWarn: s, localeFallbacker: o } = e, { __datetimeFormatters: i } = e, [u, d, g, _] = ht(...t), m = D(g.missingWarn) ? g.missingWarn : e.missingWarn;
    D(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
    const k = !!g.part, P = Ot(e, g), w = o(e, r, P);
    if (!C(u) || u === "") return new Intl.DateTimeFormat(P, _).format(d);
    let S = {}, f, v = null;
    const L = "datetime format";
    for (let I = 0; I < w.length && (f = w[I], S = a[f] || {}, v = S[u], !F(v)); I++) Nt(e, u, f, m, L);
    if (!F(v) || !C(f)) return n ? Je : u;
    let h = `${f}__${u}`;
    qe(_) || (h = `${h}__${JSON.stringify(_)}`);
    let T = i.get(h);
    return T || (T = new Intl.DateTimeFormat(f, K({}, v, _)), i.set(h, T)), k ? T.formatToParts(d) : T.format(d);
  }
  const Wa = [
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
    const [t, a, n, r] = e, s = $();
    let o = $(), i;
    if (C(t)) {
      const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
      if (!u) throw le(oe.INVALID_ISO_DATE_ARGUMENT);
      const d = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
      i = new Date(d);
      try {
        i.toISOString();
      } catch {
        throw le(oe.INVALID_ISO_DATE_ARGUMENT);
      }
    } else if (Cn(t)) {
      if (isNaN(t.getTime())) throw le(oe.INVALID_DATE_ARGUMENT);
      i = t;
    } else if (q(t)) i = t;
    else throw le(oe.INVALID_ARGUMENT);
    return C(a) ? s.key = a : F(a) && Object.keys(a).forEach((u) => {
      Wa.includes(u) ? o[u] = a[u] : s[u] = a[u];
    }), C(n) ? s.locale = n : F(n) && (o = n), F(r) && (o = r), [
      s.key || "",
      i,
      s,
      o
    ];
  }
  function na(e, t, a) {
    const n = e;
    for (const r in a) {
      const s = `${t}__${r}`;
      n.__datetimeFormatters.has(s) && n.__datetimeFormatters.delete(s);
    }
  }
  function ra(e, ...t) {
    const { numberFormats: a, unresolving: n, fallbackLocale: r, onWarn: s, localeFallbacker: o } = e, { __numberFormatters: i } = e, [u, d, g, _] = vt(...t), m = D(g.missingWarn) ? g.missingWarn : e.missingWarn;
    D(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
    const k = !!g.part, P = Ot(e, g), w = o(e, r, P);
    if (!C(u) || u === "") return new Intl.NumberFormat(P, _).format(d);
    let S = {}, f, v = null;
    const L = "number format";
    for (let I = 0; I < w.length && (f = w[I], S = a[f] || {}, v = S[u], !F(v)); I++) Nt(e, u, f, m, L);
    if (!F(v) || !C(f)) return n ? Je : u;
    let h = `${f}__${u}`;
    qe(_) || (h = `${h}__${JSON.stringify(_)}`);
    let T = i.get(h);
    return T || (T = new Intl.NumberFormat(f, K({}, v, _)), i.set(h, T)), k ? T.formatToParts(d) : T.format(d);
  }
  const Ha = [
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
    const [t, a, n, r] = e, s = $();
    let o = $();
    if (!q(t)) throw le(oe.INVALID_ARGUMENT);
    const i = t;
    return C(a) ? s.key = a : F(a) && Object.keys(a).forEach((u) => {
      Ha.includes(u) ? o[u] = a[u] : s[u] = a[u];
    }), C(n) ? s.locale = n : F(n) && (o = n), F(r) && (o = r), [
      s.key || "",
      i,
      s,
      o
    ];
  }
  function sa(e, t, a) {
    const n = e;
    for (const r in a) {
      const s = `${t}__${r}`;
      n.__numberFormatters.has(s) && n.__numberFormatters.delete(s);
    }
  }
  const Hr = (e) => e, Vr = (e) => "", Yr = "text", Br = (e) => e.length === 0 ? "" : It(e), Gr = Rn;
  function oa(e, t) {
    return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
  }
  function qr(e) {
    const t = q(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (q(e.named.count) || q(e.named.n)) ? q(e.named.count) ? e.named.count : q(e.named.n) ? e.named.n : t : t;
  }
  function Kr(e, t) {
    t.count || (t.count = e), t.n || (t.n = e);
  }
  function Jr(e = {}) {
    const t = e.locale, a = qr(e), n = M(e.pluralRules) && C(t) && W(e.pluralRules[t]) ? e.pluralRules[t] : oa, r = M(e.pluralRules) && C(t) && W(e.pluralRules[t]) ? oa : void 0, s = (f) => f[n(a, f.length, r)], o = e.list || [], i = (f) => o[f], u = e.named || $();
    q(e.pluralIndex) && Kr(a, u);
    const d = (f) => u[f];
    function g(f, v) {
      const L = W(e.messages) ? e.messages(f, !!v) : M(e.messages) ? e.messages[f] : false;
      return L || (e.parent ? e.parent.message(f) : Vr);
    }
    const _ = (f) => e.modifiers ? e.modifiers[f] : Hr, m = F(e.processor) && W(e.processor.normalize) ? e.processor.normalize : Br, k = F(e.processor) && W(e.processor.interpolate) ? e.processor.interpolate : Gr, P = F(e.processor) && C(e.processor.type) ? e.processor.type : Yr, S = {
      list: i,
      named: d,
      plural: s,
      linked: (f, ...v) => {
        const [L, h] = v;
        let T = "text", I = "";
        v.length === 1 ? M(L) ? (I = L.modifier || I, T = L.type || T) : C(L) && (I = L || I) : v.length === 2 && (C(L) && (I = L || I), C(h) && (T = h || T));
        const E = g(f, true)(S), N = T === "vnode" && Y(E) && I ? E[0] : E;
        return I ? _(I)(N, T) : N;
      },
      message: g,
      type: P,
      interpolate: k,
      normalize: m,
      values: K($(), o, u)
    };
    return S;
  }
  const la = () => "", Z = (e) => W(e);
  function ia(e, ...t) {
    const { fallbackFormat: a, postTranslation: n, unresolving: r, messageCompiler: s, fallbackLocale: o, messages: i } = e, [u, d] = bt(...t), g = D(d.missingWarn) ? d.missingWarn : e.missingWarn, _ = D(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, m = D(d.escapeParameter) ? d.escapeParameter : e.escapeParameter, k = !!d.resolvedMessage, P = C(d.default) || D(d.default) ? D(d.default) ? s ? u : () => u : d.default : a ? s ? u : () => u : null, w = a || P != null && (C(P) || W(P)), S = Ot(e, d);
    m && Xr(d);
    let [f, v, L] = k ? [
      u,
      S,
      i[S] || $()
    ] : Va(e, u, S, o, _, g), h = f, T = u;
    if (!k && !(C(h) || ne(h) || Z(h)) && w && (h = P, T = h), !k && (!(C(h) || ne(h) || Z(h)) || !C(v))) return r ? Je : u;
    let I = false;
    const E = () => {
      I = true;
    }, N = Z(h) ? h : Ya(e, u, v, h, T, E);
    if (I) return h;
    const A = Zr(e, v, L, d), H = Jr(A), G = Qr(e, N, H);
    let x = n ? n(G, u) : G;
    if (m && C(x) && (x = On(x)), __INTLIFY_PROD_DEVTOOLS__) {
      const J = {
        timestamp: Date.now(),
        key: C(u) ? u : Z(h) ? h.key : "",
        locale: v || (Z(h) ? h.locale : ""),
        format: C(h) ? h : Z(h) ? h.source : "",
        message: x
      };
      J.meta = K({}, e.__meta, xr() || {}), hr(J);
    }
    return x;
  }
  function Xr(e) {
    Y(e.list) ? e.list = e.list.map((t) => C(t) ? Vt(t) : t) : M(e.named) && Object.keys(e.named).forEach((t) => {
      C(e.named[t]) && (e.named[t] = Vt(e.named[t]));
    });
  }
  function Va(e, t, a, n, r, s) {
    const { messages: o, onWarn: i, messageResolver: u, localeFallbacker: d } = e, g = d(e, n, a);
    let _ = $(), m, k = null;
    const P = "translate";
    for (let w = 0; w < g.length && (m = g[w], _ = o[m] || $(), (k = u(_, t)) === null && (k = _[t]), !(C(k) || ne(k) || Z(k))); w++) if (!Wr(m, g)) {
      const S = Nt(e, t, m, s, P);
      S !== t && (k = S);
    }
    return [
      k,
      m,
      _
    ];
  }
  function Ya(e, t, a, n, r, s) {
    const { messageCompiler: o, warnHtmlMessage: i } = e;
    if (Z(n)) {
      const d = n;
      return d.locale = d.locale || a, d.key = d.key || t, d;
    }
    if (o == null) {
      const d = (() => n);
      return d.locale = a, d.key = t, d;
    }
    const u = o(n, zr(e, a, r, n, i, s));
    return u.locale = a, u.key = t, u.source = n, u;
  }
  function Qr(e, t, a) {
    return t(a);
  }
  function bt(...e) {
    const [t, a, n] = e, r = $();
    if (!C(t) && !q(t) && !Z(t) && !ne(t)) throw le(oe.INVALID_ARGUMENT);
    const s = q(t) ? String(t) : (Z(t), t);
    return q(a) ? r.plural = a : C(a) ? r.default = a : F(a) && !qe(a) ? r.named = a : Y(a) && (r.list = a), q(n) ? r.plural = n : C(n) ? r.default = n : F(n) && K(r, n), [
      s,
      r
    ];
  }
  function zr(e, t, a, n, r, s) {
    return {
      locale: t,
      key: a,
      warnHtmlMessage: r,
      onError: (o) => {
        throw s && s(o), o;
      },
      onCacheKey: (o) => Tn(t, a, o)
    };
  }
  function Zr(e, t, a, n) {
    const { modifiers: r, pluralRules: s, messageResolver: o, fallbackLocale: i, fallbackWarn: u, missingWarn: d, fallbackContext: g } = e, m = {
      locale: t,
      modifiers: r,
      pluralRules: s,
      messages: (k, P) => {
        let w = o(a, k);
        if (w == null && (g || P)) {
          const [, , S] = Va(g || e, k, t, i, u, d);
          w = o(S, k);
        }
        if (C(w) || ne(w)) {
          let S = false;
          const v = Ya(e, k, t, w, k, () => {
            S = true;
          });
          return S ? la : v;
        } else return Z(w) ? w : la;
      }
    };
    return e.processor && (m.processor = e.processor), n.list && (m.list = n.list), n.named && (m.named = n.named), q(n.plural) && (m.pluralIndex = n.plural), m;
  }
  rr();
  const es = "11.1.12";
  function ts() {
    typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (pe().__VUE_I18N_FULL_INSTALL__ = true), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (pe().__VUE_I18N_LEGACY_API__ = true), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (pe().__INTLIFY_DROP_MESSAGE_COMPILER__ = false), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (pe().__INTLIFY_PROD_DEVTOOLS__ = false);
  }
  const Q = {
    UNEXPECTED_RETURN_TYPE: br,
    INVALID_ARGUMENT: 25,
    MUST_BE_CALL_SETUP_TOP: 26,
    NOT_INSTALLED: 27,
    REQUIRED_VALUE: 28,
    INVALID_VALUE: 29,
    NOT_INSTALLED_WITH_PROVIDE: 31,
    UNEXPECTED_ERROR: 32
  };
  function z(e, ...t) {
    return Ke(e, null, void 0);
  }
  const Et = ue("__translateVNode"), yt = ue("__datetimeParts"), Lt = ue("__numberParts"), Ba = ue("__setPluralRules"), Ga = ue("__injectWithOption"), kt = ue("__dispose");
  function Oe(e) {
    if (!M(e) || ne(e)) return e;
    for (const t in e) if (ee(e, t)) if (!t.includes(".")) M(e[t]) && Oe(e[t]);
    else {
      const a = t.split("."), n = a.length - 1;
      let r = e, s = false;
      for (let o = 0; o < n; o++) {
        if (a[o] === "__proto__") throw new Error(`unsafe key: ${a[o]}`);
        if (a[o] in r || (r[a[o]] = $()), !M(r[a[o]])) {
          s = true;
          break;
        }
        r = r[a[o]];
      }
      if (s || (ne(r) ? Fa.includes(a[n]) || delete e[t] : (r[a[n]] = e[t], delete e[t])), !ne(r)) {
        const o = r[a[n]];
        M(o) && Oe(o);
      }
    }
    return e;
  }
  function At(e, t) {
    const { messages: a, __i18n: n, messageResolver: r, flatJson: s } = t, o = F(a) ? a : Y(n) ? $() : {
      [e]: $()
    };
    if (Y(n) && n.forEach((i) => {
      if ("locale" in i && "resource" in i) {
        const { locale: u, resource: d } = i;
        u ? (o[u] = o[u] || $(), We(d, o[u])) : We(d, o);
      } else C(i) && We(JSON.parse(i), o);
    }), r == null && s) for (const i in o) ee(o, i) && Oe(o[i]);
    return o;
  }
  function qa(e) {
    return e.type;
  }
  function Ka(e, t, a) {
    let n = M(t.messages) ? t.messages : $();
    "__i18nGlobal" in a && (n = At(e.locale.value, {
      messages: n,
      __i18n: a.__i18nGlobal
    }));
    const r = Object.keys(n);
    r.length && r.forEach((s) => {
      e.mergeLocaleMessage(s, n[s]);
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
  function ca(e) {
    return on(ln, null, e, 0);
  }
  const ua = "__INTLIFY_META__", da = () => [], as = () => false;
  let fa = 0;
  function ma(e) {
    return ((t, a, n, r) => e(a, n, Te() || void 0, r));
  }
  const ns = () => {
    const e = Te();
    let t = null;
    return e && (t = qa(e)[ua]) ? {
      [ua]: t
    } : null;
  };
  function Rt(e = {}) {
    const { __root: t, __injectWithOption: a } = e, n = t === void 0, r = e.flatJson, s = Be ? en : tn;
    let o = D(e.inheritLocale) ? e.inheritLocale : true;
    const i = s(t && o ? t.locale.value : C(e.locale) ? e.locale : Pe), u = s(t && o ? t.fallbackLocale.value : C(e.fallbackLocale) || Y(e.fallbackLocale) || F(e.fallbackLocale) || e.fallbackLocale === false ? e.fallbackLocale : i.value), d = s(At(i.value, e)), g = s(F(e.datetimeFormats) ? e.datetimeFormats : {
      [i.value]: {}
    }), _ = s(F(e.numberFormats) ? e.numberFormats : {
      [i.value]: {}
    });
    let m = t ? t.missingWarn : D(e.missingWarn) || Ee(e.missingWarn) ? e.missingWarn : true, k = t ? t.fallbackWarn : D(e.fallbackWarn) || Ee(e.fallbackWarn) ? e.fallbackWarn : true, P = t ? t.fallbackRoot : D(e.fallbackRoot) ? e.fallbackRoot : true, w = !!e.fallbackFormat, S = W(e.missing) ? e.missing : null, f = W(e.missing) ? ma(e.missing) : null, v = W(e.postTranslation) ? e.postTranslation : null, L = t ? t.warnHtmlMessage : D(e.warnHtmlMessage) ? e.warnHtmlMessage : true, h = !!e.escapeParameter;
    const T = t ? t.modifiers : F(e.modifiers) ? e.modifiers : {};
    let I = e.pluralRules || t && t.pluralRules, E;
    E = (() => {
      n && ea(null);
      const p = {
        version: es,
        locale: i.value,
        fallbackLocale: u.value,
        messages: d.value,
        modifiers: T,
        pluralRules: I,
        missing: f === null ? void 0 : f,
        missingWarn: m,
        fallbackWarn: k,
        fallbackFormat: w,
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
      const y = $r(p);
      return n && ea(y), y;
    })(), Se(E, i.value, u.value);
    function A() {
      return [
        i.value,
        u.value,
        d.value,
        g.value,
        _.value
      ];
    }
    const H = we({
      get: () => i.value,
      set: (p) => {
        E.locale = p, i.value = p;
      }
    }), G = we({
      get: () => u.value,
      set: (p) => {
        E.fallbackLocale = p, u.value = p, Se(E, i.value, p);
      }
    }), x = we(() => d.value), J = we(() => g.value), ie = we(() => _.value);
    function ce() {
      return W(v) ? v : null;
    }
    function Xe(p) {
      v = p, E.postTranslation = p;
    }
    function Qe() {
      return S;
    }
    function ze(p) {
      p !== null && (f = ma(p)), S = p, E.missing = f;
    }
    const re = (p, y, j, B, me, De) => {
      A();
      let he;
      try {
        __INTLIFY_PROD_DEVTOOLS__, n || (E.fallbackContext = t ? Ur() : void 0), he = p(E);
      } finally {
        __INTLIFY_PROD_DEVTOOLS__, n || (E.fallbackContext = void 0);
      }
      if (j !== "translate exists" && q(he) && he === Je || j === "translate exists" && !he) {
        const [Qa, Ro] = y();
        return t && P ? B(t) : me(Qa);
      } else {
        if (De(he)) return he;
        throw z(Q.UNEXPECTED_RETURN_TYPE);
      }
    };
    function Ne(...p) {
      return re((y) => Reflect.apply(ia, null, [
        y,
        ...p
      ]), () => bt(...p), "translate", (y) => Reflect.apply(y.t, y, [
        ...p
      ]), (y) => y, (y) => C(y));
    }
    function Ae(...p) {
      const [y, j, B] = p;
      if (B && !M(B)) throw z(Q.INVALID_ARGUMENT);
      return Ne(y, j, K({
        resolvedMessage: true
      }, B || {}));
    }
    function Ze(...p) {
      return re((y) => Reflect.apply(aa, null, [
        y,
        ...p
      ]), () => ht(...p), "datetime format", (y) => Reflect.apply(y.d, y, [
        ...p
      ]), () => zt, (y) => C(y) || Y(y));
    }
    function et(...p) {
      return re((y) => Reflect.apply(ra, null, [
        y,
        ...p
      ]), () => vt(...p), "number format", (y) => Reflect.apply(y.n, y, [
        ...p
      ]), () => zt, (y) => C(y) || Y(y));
    }
    function tt(p) {
      return p.map((y) => C(y) || q(y) || D(y) ? ca(String(y)) : y);
    }
    const at = {
      normalize: tt,
      interpolate: (p) => p,
      type: "vnode"
    };
    function nt(...p) {
      return re((y) => {
        let j;
        const B = y;
        try {
          B.processor = at, j = Reflect.apply(ia, null, [
            B,
            ...p
          ]);
        } finally {
          B.processor = null;
        }
        return j;
      }, () => bt(...p), "translate", (y) => y[Et](...p), (y) => [
        ca(y)
      ], (y) => Y(y));
    }
    function Re(...p) {
      return re((y) => Reflect.apply(ra, null, [
        y,
        ...p
      ]), () => vt(...p), "number format", (y) => y[Lt](...p), da, (y) => C(y) || Y(y));
    }
    function rt(...p) {
      return re((y) => Reflect.apply(aa, null, [
        y,
        ...p
      ]), () => ht(...p), "datetime format", (y) => y[yt](...p), da, (y) => C(y) || Y(y));
    }
    function Fe(p) {
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
      ]), as, (j) => D(j));
    }
    function ot(p) {
      let y = null;
      const j = Da(E, u.value, i.value);
      for (let B = 0; B < j.length; B++) {
        const me = d.value[j[B]] || {}, De = E.messageResolver(me, p);
        if (De != null) {
          y = De;
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
      if (r) {
        const j = {
          [p]: y
        };
        for (const B in j) ee(j, B) && Oe(j[B]);
        y = j[p];
      }
      d.value[p] = y, E.messages = d.value;
    }
    function ke(p, y) {
      d.value[p] = d.value[p] || {};
      const j = {
        [p]: y
      };
      if (r) for (const B in j) ee(j, B) && Oe(j[B]);
      y = j[p], We(y, d.value[p]), E.messages = d.value;
    }
    function lt(p) {
      return g.value[p] || {};
    }
    function l(p, y) {
      g.value[p] = y, E.datetimeFormats = g.value, na(E, p, y);
    }
    function c(p, y) {
      g.value[p] = K(g.value[p] || {}, y), E.datetimeFormats = g.value, na(E, p, y);
    }
    function b(p) {
      return _.value[p] || {};
    }
    function O(p, y) {
      _.value[p] = y, E.numberFormats = _.value, sa(E, p, y);
    }
    function V(p, y) {
      _.value[p] = K(_.value[p] || {}, y), E.numberFormats = _.value, sa(E, p, y);
    }
    fa++, t && Be && (pt(t.locale, (p) => {
      o && (i.value = p, E.locale = p, Se(E, i.value, u.value));
    }), pt(t.fallbackLocale, (p) => {
      o && (u.value = p, E.fallbackLocale = p, Se(E, i.value, u.value));
    }));
    const R = {
      id: fa,
      locale: H,
      fallbackLocale: G,
      get inheritLocale() {
        return o;
      },
      set inheritLocale(p) {
        o = p, p && t && (i.value = t.locale.value, u.value = t.fallbackLocale.value, Se(E, i.value, u.value));
      },
      get availableLocales() {
        return Object.keys(d.value).sort();
      },
      messages: x,
      get modifiers() {
        return T;
      },
      get pluralRules() {
        return I || {};
      },
      get isGlobal() {
        return n;
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
        return P;
      },
      set fallbackRoot(p) {
        P = p;
      },
      get fallbackFormat() {
        return w;
      },
      set fallbackFormat(p) {
        w = p, E.fallbackFormat = w;
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
      getPostTranslationHandler: ce,
      setPostTranslationHandler: Xe,
      getMissingHandler: Qe,
      setMissingHandler: ze,
      [Ba]: Fe
    };
    return R.datetimeFormats = J, R.numberFormats = ie, R.rt = Ae, R.te = st, R.tm = Le, R.d = Ze, R.n = et, R.getDateTimeFormat = lt, R.setDateTimeFormat = l, R.mergeDateTimeFormat = c, R.getNumberFormat = b, R.setNumberFormat = O, R.mergeNumberFormat = V, R[Ga] = a, R[Et] = nt, R[yt] = rt, R[Lt] = Re, R;
  }
  function rs(e) {
    const t = C(e.locale) ? e.locale : Pe, a = C(e.fallbackLocale) || Y(e.fallbackLocale) || F(e.fallbackLocale) || e.fallbackLocale === false ? e.fallbackLocale : t, n = W(e.missing) ? e.missing : void 0, r = D(e.silentTranslationWarn) || Ee(e.silentTranslationWarn) ? !e.silentTranslationWarn : true, s = D(e.silentFallbackWarn) || Ee(e.silentFallbackWarn) ? !e.silentFallbackWarn : true, o = D(e.fallbackRoot) ? e.fallbackRoot : true, i = !!e.formatFallbackMessages, u = F(e.modifiers) ? e.modifiers : {}, d = e.pluralizationRules, g = W(e.postTranslation) ? e.postTranslation : void 0, _ = C(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : true, m = !!e.escapeParameterHtml, k = D(e.sync) ? e.sync : true;
    let P = e.messages;
    if (F(e.sharedMessages)) {
      const T = e.sharedMessages;
      P = Object.keys(T).reduce((E, N) => {
        const A = E[N] || (E[N] = {});
        return K(A, T[N]), E;
      }, P || {});
    }
    const { __i18n: w, __root: S, __injectWithOption: f } = e, v = e.datetimeFormats, L = e.numberFormats, h = e.flatJson;
    return {
      locale: t,
      fallbackLocale: a,
      messages: P,
      flatJson: h,
      datetimeFormats: v,
      numberFormats: L,
      missing: n,
      missingWarn: r,
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
      __i18n: w,
      __root: S,
      __injectWithOption: f
    };
  }
  function wt(e = {}) {
    const t = Rt(rs(e)), { __extender: a } = e, n = {
      id: t.id,
      get locale() {
        return t.locale.value;
      },
      set locale(r) {
        t.locale.value = r;
      },
      get fallbackLocale() {
        return t.fallbackLocale.value;
      },
      set fallbackLocale(r) {
        t.fallbackLocale.value = r;
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
      set missing(r) {
        t.setMissingHandler(r);
      },
      get silentTranslationWarn() {
        return D(t.missingWarn) ? !t.missingWarn : t.missingWarn;
      },
      set silentTranslationWarn(r) {
        t.missingWarn = D(r) ? !r : r;
      },
      get silentFallbackWarn() {
        return D(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn;
      },
      set silentFallbackWarn(r) {
        t.fallbackWarn = D(r) ? !r : r;
      },
      get modifiers() {
        return t.modifiers;
      },
      get formatFallbackMessages() {
        return t.fallbackFormat;
      },
      set formatFallbackMessages(r) {
        t.fallbackFormat = r;
      },
      get postTranslation() {
        return t.getPostTranslationHandler();
      },
      set postTranslation(r) {
        t.setPostTranslationHandler(r);
      },
      get sync() {
        return t.inheritLocale;
      },
      set sync(r) {
        t.inheritLocale = r;
      },
      get warnHtmlInMessage() {
        return t.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(r) {
        t.warnHtmlMessage = r !== "off";
      },
      get escapeParameterHtml() {
        return t.escapeParameter;
      },
      set escapeParameterHtml(r) {
        t.escapeParameter = r;
      },
      get pluralizationRules() {
        return t.pluralRules || {};
      },
      __composer: t,
      t(...r) {
        return Reflect.apply(t.t, t, [
          ...r
        ]);
      },
      rt(...r) {
        return Reflect.apply(t.rt, t, [
          ...r
        ]);
      },
      te(r, s) {
        return t.te(r, s);
      },
      tm(r) {
        return t.tm(r);
      },
      getLocaleMessage(r) {
        return t.getLocaleMessage(r);
      },
      setLocaleMessage(r, s) {
        t.setLocaleMessage(r, s);
      },
      mergeLocaleMessage(r, s) {
        t.mergeLocaleMessage(r, s);
      },
      d(...r) {
        return Reflect.apply(t.d, t, [
          ...r
        ]);
      },
      getDateTimeFormat(r) {
        return t.getDateTimeFormat(r);
      },
      setDateTimeFormat(r, s) {
        t.setDateTimeFormat(r, s);
      },
      mergeDateTimeFormat(r, s) {
        t.mergeDateTimeFormat(r, s);
      },
      n(...r) {
        return Reflect.apply(t.n, t, [
          ...r
        ]);
      },
      getNumberFormat(r) {
        return t.getNumberFormat(r);
      },
      setNumberFormat(r, s) {
        t.setNumberFormat(r, s);
      },
      mergeNumberFormat(r, s) {
        t.mergeNumberFormat(r, s);
      }
    };
    return n.__extender = a, n;
  }
  function ss(e, t, a) {
    return {
      beforeCreate() {
        const n = Te();
        if (!n) throw z(Q.UNEXPECTED_ERROR);
        const r = this.$options;
        if (r.i18n) {
          const s = r.i18n;
          if (r.__i18n && (s.__i18n = r.__i18n), s.__root = t, this === this.$root) this.$i18n = pa(e, s);
          else {
            s.__injectWithOption = true, s.__extender = a.__vueI18nExtend, this.$i18n = wt(s);
            const o = this.$i18n;
            o.__extender && (o.__disposer = o.__extender(this.$i18n));
          }
        } else if (r.__i18n) if (this === this.$root) this.$i18n = pa(e, r);
        else {
          this.$i18n = wt({
            __i18n: r.__i18n,
            __injectWithOption: true,
            __extender: a.__vueI18nExtend,
            __root: t
          });
          const s = this.$i18n;
          s.__extender && (s.__disposer = s.__extender(this.$i18n));
        }
        else this.$i18n = e;
        r.__i18nGlobal && Ka(t, r, r), this.$t = (...s) => this.$i18n.t(...s), this.$rt = (...s) => this.$i18n.rt(...s), this.$te = (s, o) => this.$i18n.te(s, o), this.$d = (...s) => this.$i18n.d(...s), this.$n = (...s) => this.$i18n.n(...s), this.$tm = (s) => this.$i18n.tm(s), a.__setInstance(n, this.$i18n);
      },
      mounted() {
      },
      unmounted() {
        const n = Te();
        if (!n) throw z(Q.UNEXPECTED_ERROR);
        const r = this.$i18n;
        delete this.$t, delete this.$rt, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, r.__disposer && (r.__disposer(), delete r.__disposer, delete r.__extender), a.__deleteInstance(n), delete this.$i18n;
      }
    };
  }
  function pa(e, t) {
    e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Ba](t.pluralizationRules || e.pluralizationRules);
    const a = At(e.locale, {
      messages: t.messages,
      __i18n: t.__i18n
    });
    return Object.keys(a).forEach((n) => e.mergeLocaleMessage(n, a[n])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((n) => e.mergeDateTimeFormat(n, t.datetimeFormats[n])), t.numberFormats && Object.keys(t.numberFormats).forEach((n) => e.mergeNumberFormat(n, t.numberFormats[n])), e;
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
  function os({ slots: e }, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, r) => [
      ...n,
      ...r.type === La ? r.children : [
        r
      ]
    ], []) : t.reduce((a, n) => {
      const r = e[n];
      return r && (a[n] = r()), a;
    }, $());
  }
  function Ja() {
    return La;
  }
  const ls = St({
    name: "i18n-t",
    props: K({
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
      const { slots: a, attrs: n } = t, r = e.i18n || Dt({
        useScope: e.scope,
        __useComponent: true
      });
      return () => {
        const s = Object.keys(a).filter((_) => _[0] !== "_"), o = $();
        e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = C(e.plural) ? +e.plural : e.plural);
        const i = os(t, s), u = r[Et](e.keypath, i, o), d = K($(), n), g = C(e.tag) || M(e.tag) ? e.tag : Ja();
        return ya(g, d, u);
      };
    }
  }), _a = ls;
  function is(e) {
    return Y(e) && !C(e[0]);
  }
  function Xa(e, t, a, n) {
    const { slots: r, attrs: s } = t;
    return () => {
      const o = {
        part: true
      };
      let i = $();
      e.locale && (o.locale = e.locale), C(e.format) ? o.key = e.format : M(e.format) && (C(e.format.key) && (o.key = e.format.key), i = Object.keys(e.format).reduce((m, k) => a.includes(k) ? K($(), m, {
        [k]: e.format[k]
      }) : m, $()));
      const u = n(e.value, o, i);
      let d = [
        o.key
      ];
      Y(u) ? d = u.map((m, k) => {
        const P = r[m.type], w = P ? P({
          [m.type]: m.value,
          index: k,
          parts: u
        }) : [
          m.value
        ];
        return is(w) && (w[0].key = `${m.type}-${k}`), w;
      }) : C(u) && (d = [
        u
      ]);
      const g = K($(), s), _ = C(e.tag) || M(e.tag) ? e.tag : Ja();
      return ya(_, g, d);
    };
  }
  const cs = St({
    name: "i18n-n",
    props: K({
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
      const a = e.i18n || Dt({
        useScope: e.scope,
        __useComponent: true
      });
      return Xa(e, t, Ha, (...n) => a[Lt](...n));
    }
  }), ga = cs;
  function us(e, t) {
    const a = e;
    if (e.mode === "composition") return a.__getInstance(t) || e.global;
    {
      const n = a.__getInstance(t);
      return n != null ? n.__composer : e.global.__composer;
    }
  }
  function ds(e) {
    const t = (o) => {
      const { instance: i, value: u } = o;
      if (!i || !i.$) throw z(Q.UNEXPECTED_ERROR);
      const d = us(e, i.$), g = ha(u);
      return [
        Reflect.apply(d.t, d, [
          ...va(g)
        ]),
        d
      ];
    };
    return {
      created: (o, i) => {
        const [u, d] = t(i);
        Be && e.global === d && (o.__i18nWatcher = pt(d.locale, () => {
          i.instance && i.instance.$forceUpdate();
        })), o.__composer = d, o.textContent = u;
      },
      unmounted: (o) => {
        Be && o.__i18nWatcher && (o.__i18nWatcher(), o.__i18nWatcher = void 0, delete o.__i18nWatcher), o.__composer && (o.__composer = void 0, delete o.__composer);
      },
      beforeUpdate: (o, { value: i }) => {
        if (o.__composer) {
          const u = o.__composer, d = ha(i);
          o.textContent = Reflect.apply(u.t, u, [
            ...va(d)
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
  function ha(e) {
    if (C(e)) return {
      path: e
    };
    if (F(e)) {
      if (!("path" in e)) throw z(Q.REQUIRED_VALUE, "path");
      return e;
    } else throw z(Q.INVALID_VALUE);
  }
  function va(e) {
    const { path: t, locale: a, args: n, choice: r, plural: s } = e, o = {}, i = n || {};
    return C(a) && (o.locale = a), q(r) && (o.plural = r), q(s) && (o.plural = s), [
      t,
      i,
      o
    ];
  }
  function fs(e, t, ...a) {
    const n = F(a[0]) ? a[0] : {};
    (D(n.globalInstall) ? n.globalInstall : true) && ([
      _a.name,
      "I18nT"
    ].forEach((s) => e.component(s, _a)), [
      ga.name,
      "I18nN"
    ].forEach((s) => e.component(s, ga)), [
      Ea.name,
      "I18nD"
    ].forEach((s) => e.component(s, Ea))), e.directive("t", ds(t));
  }
  const ms = ue("global-vue-i18n");
  function ps(e = {}) {
    const t = __VUE_I18N_LEGACY_API__ && D(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, a = D(e.globalInjection) ? e.globalInjection : true, n = /* @__PURE__ */ new Map(), [r, s] = _s(e, t), o = ue("");
    function i(_) {
      return n.get(_) || null;
    }
    function u(_, m) {
      n.set(_, m);
    }
    function d(_) {
      n.delete(_);
    }
    const g = {
      get mode() {
        return __VUE_I18N_LEGACY_API__ && t ? "legacy" : "composition";
      },
      async install(_, ...m) {
        if (_.__VUE_I18N_SYMBOL__ = o, _.provide(_.__VUE_I18N_SYMBOL__, g), F(m[0])) {
          const w = m[0];
          g.__composerExtend = w.__composerExtend, g.__vueI18nExtend = w.__vueI18nExtend;
        }
        let k = null;
        !t && a && (k = ks(_, g.global)), __VUE_I18N_FULL_INSTALL__ && fs(_, g, ...m), __VUE_I18N_LEGACY_API__ && t && _.mixin(ss(s, s.__composer, g));
        const P = _.unmount;
        _.unmount = () => {
          k && k(), g.dispose(), P();
        };
      },
      get global() {
        return s;
      },
      dispose() {
        r.stop();
      },
      __instances: n,
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
    const a = gs(t), n = vs(a), r = qa(t), s = hs(e, r);
    if (s === "global") return Ka(n, e, r), n;
    if (s === "parent") {
      let u = bs(a, t, e.__useComponent);
      return u == null && (u = n), u;
    }
    const o = a;
    let i = o.__getInstance(t);
    if (i == null) {
      const u = K({}, e);
      "__i18n" in r && (u.__i18n = r.__i18n), n && (u.__root = n), i = Rt(u), o.__composerExtend && (i[kt] = o.__composerExtend(i)), ys(o, t, i), o.__setInstance(t, i);
    }
    return i;
  };
  function _s(e, t) {
    const a = Za(), n = __VUE_I18N_LEGACY_API__ && t ? a.run(() => wt(e)) : a.run(() => Rt(e));
    if (n == null) throw z(Q.UNEXPECTED_ERROR);
    return [
      a,
      n
    ];
  }
  function gs(e) {
    const t = nn(e.isCE ? ms : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t) throw z(e.isCE ? Q.NOT_INSTALLED_WITH_PROVIDE : Q.UNEXPECTED_ERROR);
    return t;
  }
  function hs(e, t) {
    return qe(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
  }
  function vs(e) {
    return e.mode === "composition" ? e.global : e.global.__composer;
  }
  function bs(e, t, a = false) {
    let n = null;
    const r = t.root;
    let s = Es(t, a);
    for (; s != null; ) {
      const o = e;
      if (e.mode === "composition") n = o.__getInstance(s);
      else if (__VUE_I18N_LEGACY_API__) {
        const i = o.__getInstance(s);
        i != null && (n = i.__composer, a && n && !n[Ga] && (n = null));
      }
      if (n != null || r === s) break;
      s = s.parent;
    }
    return n;
  }
  function Es(e, t = false) {
    return e == null ? null : t && e.vnode.ctx || e.parent;
  }
  function ys(e, t, a) {
    rn(() => {
    }, t), sn(() => {
      const n = a;
      e.__deleteInstance(t);
      const r = n[kt];
      r && (r(), delete n[kt]);
    }, t);
  }
  const Ls = [
    "locale",
    "fallbackLocale",
    "availableLocales"
  ], ba = [
    "t",
    "rt",
    "d",
    "n",
    "tm",
    "te"
  ];
  function ks(e, t) {
    const a = /* @__PURE__ */ Object.create(null);
    return Ls.forEach((r) => {
      const s = Object.getOwnPropertyDescriptor(t, r);
      if (!s) throw z(Q.UNEXPECTED_ERROR);
      const o = an(s.value) ? {
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
      Object.defineProperty(a, r, o);
    }), e.config.globalProperties.$i18n = a, ba.forEach((r) => {
      const s = Object.getOwnPropertyDescriptor(t, r);
      if (!s || !s.value) throw z(Q.UNEXPECTED_ERROR);
      Object.defineProperty(e.config.globalProperties, `$${r}`, s);
    }), () => {
      delete e.config.globalProperties.$i18n, ba.forEach((r) => {
        delete e.config.globalProperties[`$${r}`];
      });
    };
  }
  const ws = St({
    name: "i18n-d",
    props: K({
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
      const a = e.i18n || Dt({
        useScope: e.scope,
        __useComponent: true
      });
      return Xa(e, t, Wa, (...n) => a[yt](...n));
    }
  }), Ea = ws;
  ts();
  Rr(pr);
  Fr(Or);
  Dr(Da);
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const e = pe();
    e.__INTLIFY__ = true, _r(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
  }
  let Ss, Ts, Is, Cs, Ps, Os, Ns, As, Rs, Fs, Ds, Ms, xs, Us, $s, js, Ws, Hs, Vs, Ys, Bs, Gs, qs, Ks, Js, Xs, Qs, zs, Zs, eo, to, ao, no, ro, so, oo, lo, io, co, uo, fo, mo, po, _o, go, ho, vo, bo, Eo, yo, Lo, ko, wo, So, To, Io, Co, Po, Oo, No, Ao;
  Uo = Ge("App", {
    web: () => wa(() => import("./web-CS08YvY-.js"), __vite__mapDeps([2,1]), import.meta.url).then((e) => new e.AppWeb())
  });
  Ss = {
    button: {
      pause: "Pause"
    }
  };
  Ts = {
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
  Is = {
    button: {
      exit: "Exit to home (ESC)",
      play: "Play"
    },
    title: "Play"
  };
  Cs = {
    campaign_level_1: "Welcome to Boxel 3D! The easiest game ever made!",
    campaign_level_3: "I meant to tell you this earlier, DO NOT TOUCH THE SPIKES!",
    campaign_level_5: "Did you know you can jump after you fall?",
    campaign_level_18: "Do not forget to jump after you touch the jump pad!",
    campaign_level_33: "Try going up!",
    campaign_level_35: "Halt! You should not be here!",
    campaign_level_39: "Use your keyboard to move left and right."
  };
  Ps = {
    en: "English",
    es: "Espa\xF1ol (Spanish)",
    fa: "\u0641\u0627\u0631\u0633\u06CC (Persian)",
    fr: "Fran\xE7ais (French)",
    ko: "\uD55C\uAD6D\uC5B4 (Korean)",
    hi: "\u0939\u093F\u0902\u0926\u0940 (Hindi)"
  };
  Os = {
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
  Ns = {
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
      reload: "Reload",
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
  As = {
    button: {
      select: "Select"
    },
    description: "Select your player skin",
    title: "Skins"
  };
  Rs = {
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
  Fs = {
    campaign: Ss,
    home: Ts,
    level_picker: Is,
    levels: Cs,
    locales: Ps,
    popup: Os,
    settings: Ns,
    skins: As,
    workshop: Rs
  };
  Ds = {
    button: {
      pause: "Pausa"
    }
  };
  Ms = {
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
  xs = {
    button: {
      exit: "Salir a la p\xE1gina de inicio (ESC)",
      play: "Jugar"
    },
    title: "Jugar"
  };
  Us = {
    campaign_level_1: "\xA1Bienvenido al Boxel 3D! El juego mas facil del mundo!",
    campaign_level_3: "Olvid\xE9 decirte esto antes: \xA1NO TOQUES LOS PICOS!",
    campaign_level_5: "\xBFSab\xEDas que puedes saltar despu\xE9s de caer?",
    campaign_level_18: "\xA1No olvides de saltar despu\xE9s de tocar la plataforma de salto!",
    campaign_level_33: "\xA1Trata ir ariba!",
    campaign_level_35: "\xA1Para! \xA1Tu no debes de estar aqu\xED!!",
    campaign_level_39: "Utilice WASD, las teclas de flecha, y la barra espaciadora para moverse hacia la izquierda y hacia la derecha."
  };
  $s = {
    en: "English",
    es: "Espa\xF1ol (Spanish)",
    fa: "\u0641\u0627\u0631\u0633\u06CC (Persian)",
    fr: "Fran\xE7ais (French)",
    ko: "\uD55C\uAD6D\uC5B4 (Korean)",
    hi: "\u0939\u093F\u0902\u0926\u0940 (Hindi)"
  };
  js = {
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
  Ws = {
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
      reload: "Recargar",
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
  Hs = {
    button: {
      select: "Selecciona"
    },
    description: "Selecciona su Apariencia",
    title: "Apariencia"
  };
  Vs = {
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
  Ys = {
    campaign: Ds,
    home: Ms,
    level_picker: xs,
    levels: Us,
    locales: $s,
    popup: js,
    settings: Ws,
    skins: Hs,
    workshop: Vs
  };
  Bs = {
    button: {
      pause: "\u062A\u0648\u0642\u0641"
    }
  };
  Gs = {
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
  qs = {
    button: {
      exit: "\u0631\u0641\u062A\u0646 \u0628\u0647 \u062E\u0627\u0646\u0647 (ESC)",
      play: "\u0628\u0627\u0632\u06CC"
    },
    title: "\u0628\u0627\u0632\u06CC"
  };
  Ks = {
    campaign_level_1: "!\u0628\u0647 \u0628\u0627\u06A9\u0633\u0644(\u062C\u0639\u0628\u0647) \u0633\u0647\u200C\u0628\u0639\u062F\u06CC \u062E\u0648\u0634 \u0622\u0645\u062F\u06CC\u062F! \u0633\u0627\u062F\u0647 \u062A\u0631\u06CC\u0646 \u0628\u0627\u0632\u06CC \u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 \u062A\u0627 \u0627\u0644\u0627\u0646",
    campaign_level_3: " \u0645\u0646 \u0645\u06CC\u200C\u062E\u0648\u0627\u0633\u062A\u0645 \u0628\u0647 \u0634\u0645\u0627 \u0632\u0648\u062F\u062A\u0631 \u0628\u06AF\u0648\u06CC\u0645 \u06A9\u0647\u060C \u0628\u0647 \u062A\u06CC\u063A\u0647\u200C\u0647\u0627 \u0628\u0631\u062E\u0648\u0631\u062F \u0646\u06A9\u0646\u06CC\u062F!",
    campaign_level_5: "\u0622\u06CC\u0627 \u0645\u06CC\u200C\u062F\u0627\u0646\u06CC\u062F \u0628\u0639\u062F \u0627\u0632 \u0633\u0642\u0648\u0637 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0628\u067E\u0631\u06CC\u062F\u061F",
    campaign_level_18: "\u0641\u0631\u0627\u0645\u0648\u0634 \u0646\u06A9\u0646\u06CC\u062F \u0628\u0639\u062F \u0627\u0632 \u067E\u0631\u06CC\u062F\u0646\u060C \u0628\u067E\u0631\u06CC\u062F!",
    campaign_level_33: "\u0628\u0627\u0644\u0627 \u0631\u0641\u062A\u0646 \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F",
    campaign_level_35: "\u0635\u0628\u0631 \u06A9\u0646! \u0634\u0645\u0627 \u0646\u0628\u0627\u06CC\u062F \u0627\u06CC\u0646\u062C\u0627 \u0628\u0627\u0634\u06CC\u062F!",
    campaign_level_39: "\u0627\u0632 \u06A9\u06CC\u0628\u0648\u0631\u062F \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u062F\u060C \u0628\u0631\u0627\u06CC \u0686\u067E \u0648 \u0631\u0627\u0633\u062A \u0631\u0641\u062A\u0646"
  };
  Js = {
    en: "English",
    es: "Espa\xF1ol (Spanish)",
    fa: "\u0641\u0627\u0631\u0633\u06CC (Persian)",
    fr: "Fran\xE7ais (French)",
    ko: "\uD55C\uAD6D\uC5B4 (Korean)",
    hi: "\u0939\u093F\u0902\u0926\u0940 (Hindi)"
  };
  Xs = {
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
  Qs = {
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
      reload: "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0645\u062C\u062F\u062F",
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
  zs = {
    button: {
      select: "\u0627\u0646\u062A\u062E\u0627\u0628"
    },
    description: "\u067E\u0648\u0633\u062A\u0647 \u0628\u0627\u0632\u06CC\u06A9\u0646 \u062E\u0648\u062F \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",
    title: "\u067E\u0648\u0633\u062A\u0647\u200C\u0647\u0627"
  };
  Zs = {
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
  eo = {
    campaign: Bs,
    home: Gs,
    level_picker: qs,
    levels: Ks,
    locales: Js,
    popup: Xs,
    settings: Qs,
    skins: zs,
    workshop: Zs
  };
  to = {
    button: {
      pause: "Pause"
    }
  };
  ao = {
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
  no = {
    button: {
      exit: "Retourner \xE0 l'accueil (\xC9CHAP)",
      play: "Jouer"
    },
    title: "Jouer"
  };
  ro = {
    campaign_level_1: "Bienvenue \xE0 Boxel 3D ! Le plus facile jeu dans le monde !",
    campaign_level_3: "J'aurais d\xFB te le dire plus t\xF4t, NE TOUCHEZ PAS AUX PIQUES !",
    campaign_level_5: "Savez-vous que vous pouvez sauter apr\xE8s avoir tomber ?",
    campaign_level_18: "N'oubliez pas de sauter apr\xE8s avoir touch\xE9 un tremplin !",
    campaign_level_33: "En haut !",
    campaign_level_35: "Halte ! Tu ne devrais pas \xEAtre ici !",
    campaign_level_39: "Utilisez votre clavier pour bouger."
  };
  so = {
    en: "English",
    es: "Espa\xF1ol (Spanish)",
    fa: "\u0641\u0627\u0631\u0633\u06CC (Persian)",
    fr: "Fran\xE7ais (French)",
    ko: "\uD55C\uAD6D\uC5B4 (Korean)",
    hi: "\u0939\u093F\u0902\u0926\u0940 (Hindi)"
  };
  oo = {
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
  lo = {
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
      reload: "Recharger",
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
  io = {
    button: {
      select: "S\xE9lectionner"
    },
    description: "S\xE9lectionner votre apparence",
    title: "Apparence"
  };
  co = {
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
  uo = {
    campaign: to,
    home: ao,
    level_picker: no,
    levels: ro,
    locales: so,
    popup: oo,
    settings: lo,
    skins: io,
    workshop: co
  };
  fo = {
    button: {
      pause: "\uC77C\uC2DC\uC911\uC9C0"
    }
  };
  mo = {
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
  po = {
    button: {
      exit: "\uD648\uC73C\uB85C \uBC14\uB85C\uAC00\uAE30 (ESC)",
      play: "\uD50C\uB808\uC774"
    },
    title: "\uD50C\uB808\uC774"
  };
  _o = {
    campaign_level_1: "Welcome to Boxel 3D! The easiest game ever made!",
    campaign_level_3: "I meant to tell you this earlier, DO NOT TOUCH THE SPIKES!",
    campaign_level_5: "Did you know you can jump after you fall?",
    campaign_level_18: "Do not forget to jump after you touch the jump pad!",
    campaign_level_33: "Try going up!",
    campaign_level_35: "Halt! You should not be here!",
    campaign_level_39: "Use your keyboard to move left and right."
  };
  go = {
    en: "English",
    es: "Espa\xF1ol (Spanish)",
    fa: "\u0641\u0627\u0631\u0633\u06CC (Persian)",
    fr: "Fran\xE7ais (French)",
    ko: "\uD55C\uAD6D\uC5B4 (Korean)",
    hi: "\u0939\u093F\u0902\u0926\u0940 (Hindi)"
  };
  ho = {
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
  vo = {
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
      backup_to: "...\uC73C\uB85C \uC800\uC7A5",
      file: "\uD30C\uC77C",
      google: "\uAD6C\uAE00",
      reload: "\uB2E4\uC2DC \uC7A5\uC804\uD558\uB2E4",
      restore_from: "...\uC5D0\uC11C \uBC31\uC5C5",
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
  bo = {
    button: {
      select: "\uACE0\uB974\uAE30"
    },
    description: "\uC2A4\uD0A8\uC744 \uACE0\uB974\uC138\uC694.",
    title: "\uC2A4\uD0A8"
  };
  Eo = {
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
  yo = {
    campaign: fo,
    home: mo,
    level_picker: po,
    levels: _o,
    locales: go,
    popup: ho,
    settings: vo,
    skins: bo,
    workshop: Eo
  };
  Lo = {
    button: {
      pause: "\u0935\u093F\u0930\u093E\u092E"
    }
  };
  ko = {
    button: {
      android: "\u090F\u0902\u0921\u094D\u0930\u0949\u0907\u0921",
      back: "\u092A\u0940\u091B\u0947",
      changelog: "\u092A\u0930\u093F\u0935\u0930\u094D\u0924\u0928 \u0938\u0942\u091A\u0940",
      fullscreen: "\u092A\u0942\u0930\u0940 \u0938\u094D\u0915\u094D\u0930\u0940\u0928 (F11)",
      level_editor: "\u0932\u0947\u0935\u0932 \u090F\u0921\u093F\u091F\u0930",
      multi_player: "\u092E\u0932\u094D\u091F\u0940\u092A\u094D\u0932\u0947\u092F\u0930",
      news: "\u0938\u092E\u093E\u091A\u093E\u0930",
      play: "\u0916\u0947\u0932\u094B",
      skins: "\u0938\u094D\u0915\u093F\u0928\u094D\u0938",
      steam: "\u0938\u094D\u091F\u0940\u092E",
      workshop: "\u0935\u0930\u094D\u0915\u0936\u0949\u092A"
    },
    messages: {
      0: "\u0938\u094D\u0935\u093E\u0917\u0924 \u0939\u0948!",
      1: "\u0915\u094D\u092F\u093E \u0905\u092D\u0940 \u0915\u094D\u0930\u093F\u0938\u092E\u0938 \u0906 \u0917\u092F\u093E?",
      2: "\u0936\u093E\u092F\u0926 \u0915\u093F\u0938\u0940 \u0926\u093F\u0928 \u092E\u0948\u0902 \u0928\u090F \u0932\u0947\u0935\u0932\u094D\u0938 \u091C\u094B\u0921\u093C\u0942\u0901\u0917\u093E\u0964",
      3: "\u0924\u0941\u092E\u094D\u0939\u0947\u0902 \u0924\u094B \u0939\u094B\u092E\u0935\u0930\u094D\u0915 \u0915\u0930\u0928\u093E \u091A\u093E\u0939\u093F\u090F, \u0939\u0948 \u0928\u093E?",
      4: "\u091F\u093F\u092A: \u0916\u0942\u092C \u0938\u093E\u0930\u093E \u092A\u093E\u0928\u0940 \u092A\u093F\u092F\u094B!",
      5: "Boxel Rebound \u092C\u0928\u093E\u0928\u0947 \u0935\u093E\u0932\u094B\u0902 \u0926\u094D\u0935\u093E\u0930\u093E \u0928\u093F\u0930\u094D\u092E\u093F\u0924\u0964",
      6: "Terraria \u090F\u0915 \u092C\u0939\u0941\u0924 \u092E\u091C\u093C\u0947\u0926\u093E\u0930 \u0917\u0947\u092E \u0939\u0948\u0964",
      7: "\u0917\u0941\u0921 \u0932\u0915!",
      8: "Kargoh \u092E\u0947\u0930\u093E \u092B\u0947\u0935\u0930\u0947\u091F \u092F\u0942\u091F\u094D\u092F\u0942\u092C\u0930 \u0939\u0948\u0964",
      9: "\u092B\u0948\u0915\u094D\u091F: \u092E\u0948\u0902 Fortnite \u092E\u0947\u0902 \u092C\u0939\u0941\u0924 \u0916\u0930\u093E\u092C \u0939\u0942\u0901\u0964",
      10: "\u092A\u0915\u0921\u093C\u0947 \u092E\u0924 \u091C\u093E\u0928\u093E!",
      11: "3D \u0917\u0947\u092E \u092C\u0928\u093E\u0928\u093E \u092E\u0941\u0936\u094D\u0915\u093F\u0932 \u0939\u094B\u0924\u093E \u0939\u0948\u0964",
      12: "\u0915\u094D\u0932\u093E\u0938 \u092E\u0947\u0902 \u092C\u0948\u0920\u0915\u0930 \u090F\u0915 \u0932\u0947\u0935\u0932 \u092C\u0928\u093E \u0932\u094B\u0964",
      13: "\u0939\u0930 \u0926\u093F\u0928 20 \u0915\u092A \u0915\u0949\u092B\u0940 \u092A\u0940\u0915\u0930 \u092C\u0928\u093E\u092F\u093E \u0917\u092F\u093E\u0964",
      14: "\u0917\u0947\u092E \u0915\u094B \u0924\u0947\u091C\u093C \u091A\u0932\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0917\u094D\u0930\u093E\u092B\u093F\u0915\u094D\u0938 \u0915\u092E \u0915\u0930\u094B\u0964",
      15: "\u0909\u092E\u094D\u092E\u0940\u0926 \u0939\u0948 \u0924\u0941\u092E\u094D\u0939\u093E\u0930\u093E \u0926\u093F\u0928 \u0905\u091A\u094D\u091B\u093E \u092C\u0940\u0924\u0947\u0964",
      16: "TikTok \u0938\u0947 \u092D\u0940 \u091C\u093C\u094D\u092F\u093E\u0926\u093E \u090F\u0921\u093F\u0915\u094D\u091F\u093F\u0935!",
      17: "\u092E\u0948\u0902\u0928\u0947 \u090F\u0915 \u092C\u093E\u0930 \u0939\u094B\u092E\u0935\u0930\u094D\u0915 \u0915\u0930\u0928\u0947 \u0915\u0940 \u0915\u094B\u0936\u093F\u0936 \u0915\u0940 \u0925\u0940, \u092A\u0938\u0902\u0926 \u0928\u0939\u0940\u0902 \u0906\u092F\u093E\u0964",
      18: "\u092E\u0948\u0902 \u0905\u092A\u0928\u0947 \u091C\u0949\u092C \u0915\u0947 \u091F\u093E\u0907\u092E \u092E\u0947\u0902 \u0932\u0947\u0935\u0932\u094D\u0938 \u092C\u0928\u093E\u0924\u093E \u0939\u0942\u0901\u0964",
      19: "\u0915\u093E\u0936 \u0907\u0938 \u0917\u0947\u092E \u092E\u0947\u0902 \u0914\u0930 \u0932\u0947\u0935\u0932\u094D\u0938 \u0939\u094B\u0924\u0947\u0964",
      20: "\u0905\u092A\u0928\u093E \u092B\u094D\u0930\u0947\u0902\u0921 \u0915\u094B\u0921 \u0905\u091C\u0928\u092C\u093F\u092F\u094B\u0902 \u0915\u0947 \u0938\u093E\u0925 \u0936\u0947\u092F\u0930 \u092E\u0924 \u0915\u0930\u0928\u093E!",
      21: "\u{1F61C}",
      22: "\u092E\u0947\u0930\u093E \u0938\u094D\u0915\u094B\u0930 \u0924\u0941\u092E\u094D\u0939\u093E\u0930\u0947 \u0938\u094D\u0915\u094B\u0930 \u0938\u0947 \u092C\u0939\u0941\u0924 \u092C\u0947\u0939\u0924\u0930 \u0939\u0948\u0964",
      23: "\u0905\u092A\u0928\u093E \u0921\u0947\u091F\u093E \u092C\u0948\u0915\u0905\u092A \u0915\u0930\u094B \u0924\u093E\u0915\u093F \u0926\u0942\u0938\u0930\u0940 \u0921\u093F\u0935\u093E\u0907\u0938\u0947\u0938 \u092A\u0930 \u092D\u0940 \u0916\u0947\u0932 \u0938\u0915\u094B\u0964",
      24: "\u0905\u0917\u0930 \u0924\u0941\u092E \u0917\u0947\u092E \u0921\u0947\u0935\u0947\u0932\u092A\u0930 \u092C\u0928\u0928\u093E \u091A\u093E\u0939\u0924\u0947 \u0939\u094B, \u0924\u094B \u0932\u0947\u0935\u0932\u094D\u0938 \u092C\u0928\u093E\u0928\u093E \u0936\u0941\u0930\u0942 \u0915\u0930\u094B\u0964",
      25: "\u0915\u094D\u092F\u093E \u092C\u093F\u0932\u094D\u0932\u093F\u092F\u093E\u0901 \u0915\u0941\u0924\u094D\u0924\u094B\u0902 \u0938\u0947 \u092C\u0947\u0939\u0924\u0930 \u0939\u094B\u0924\u0940 \u0939\u0948\u0902?",
      26: "Stack Overflow \u0915\u094B \u0938\u0948\u0932\u094D\u092F\u0942\u091F! \u0938\u093E\u0930\u093E \u0939\u0947\u0932\u094D\u092A \u0935\u0939\u0940\u0902 \u0938\u0947 \u0932\u093F\u092F\u093E\u0964",
      27: "\u0905\u092C TI-84+ \u0938\u093F\u0932\u094D\u0935\u0930 \u090F\u0921\u093F\u0936\u0928 \u092A\u0930 \u092D\u0940 \u0909\u092A\u0932\u092C\u094D\u0927\u0964",
      28: "\u092E\u0941\u091D\u0947 \u0932\u0917\u0924\u093E \u0939\u0948 \u0924\u0941\u092E \u092C\u0939\u0941\u0924 \u0905\u091A\u094D\u091B\u0947 \u0907\u0902\u0938\u093E\u0928 \u0939\u094B\u0964",
      29: "\u092E\u0948\u0902 \u0916\u0941\u0936 \u0939\u0942\u0901 \u0915\u093F \u0924\u0941\u092E \u0906\u091C \u091C\u093F\u0902\u0926\u093E \u0939\u094B!",
      30: "\u0939\u0948\u092A\u094D\u092A\u0940 \u092B\u094D\u0930\u093E\u0907\u0921\u0947! (\u092F\u093E \u091C\u094B \u092D\u0940 \u0926\u093F\u0928 \u0939\u0948)",
      31: "\u0906\u091C \u0915\u093F\u0938\u0940 \u0915\u0947 \u0938\u093E\u0925 \u0926\u092F\u093E\u0932\u0941\u0924\u093E (\u092F\u093E Boxel 3D) \u0936\u0947\u092F\u0930 \u0915\u0930\u094B\u0964",
      32: "\u0924\u0941\u092E\u094D\u0939\u0947\u0902 \u0906\u091C \u0916\u093E\u0938 \u092E\u0939\u0938\u0942\u0938 \u0928\u093E \u0939\u094B \u0930\u0939\u093E \u0939\u094B, \u092A\u0930 \u0924\u0941\u092E \u092E\u0947\u0930\u0947 \u0932\u093F\u090F \u0916\u093E\u0938 \u0939\u094B!",
      33: "01101100 01101111 01101100",
      34: "\u0915\u094D\u092F\u093E \u0924\u0941\u092E\u0928\u0947 \u0907\u0938\u0947 \u0911\u092B \u0915\u0930\u0915\u0947 \u092B\u093F\u0930 \u0911\u0928 \u0915\u093F\u092F\u093E?",
      35: "\u0938\u093E\u0930\u0947 \u092C\u0917\u094D\u0938 \u092B\u093F\u0915\u094D\u0938 \u0939\u094B \u0917\u090F \u0939\u0948\u0902 (\u0939\u093E\u0939\u093E, \u092E\u091C\u093E\u0915 \u0925\u093E)",
      36: "(\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u25A0"
    },
    title: "Boxel 3D"
  };
  wo = {
    button: {
      exit: "\u0939\u094B\u092E \u092A\u0930 \u0932\u094C\u091F\u094B (ESC)",
      play: "\u0916\u0947\u0932\u094B"
    },
    title: "\u0916\u0947\u0932\u094B"
  };
  So = {
    campaign_level_1: "Boxel 3D \u092E\u0947\u0902 \u0938\u094D\u0935\u093E\u0917\u0924 \u0939\u0948! \u0905\u092C \u0924\u0915 \u0915\u093E \u0938\u092C\u0938\u0947 \u0906\u0938\u093E\u0928 \u0917\u0947\u092E!",
    campaign_level_3: "\u092E\u0941\u091D\u0947 \u092A\u0939\u0932\u0947 \u092C\u0924\u093E\u0928\u093E \u0925\u093E, \u0915\u093E\u0901\u091F\u094B\u0902 \u0915\u094B \u092E\u0924 \u091B\u0942\u0928\u093E!",
    campaign_level_5: "\u0915\u094D\u092F\u093E \u0924\u0941\u092E\u094D\u0939\u0947\u0902 \u092A\u0924\u093E \u0939\u0948 \u0915\u093F \u0917\u093F\u0930\u0928\u0947 \u0915\u0947 \u092C\u093E\u0926 \u092D\u0940 \u0915\u0942\u0926 \u0938\u0915\u0924\u0947 \u0939\u094B?",
    campaign_level_18: "\u091C\u092E\u094D\u092A \u092A\u0948\u0921 \u092A\u0930 \u092A\u0939\u0941\u0901\u091A\u0928\u0947 \u0915\u0947 \u092C\u093E\u0926 \u0915\u0942\u0926\u0928\u093E \u092E\u0924 \u092D\u0942\u0932\u0928\u093E!",
    campaign_level_33: "\u090A\u092A\u0930 \u091C\u093E\u0928\u0947 \u0915\u0940 \u0915\u094B\u0936\u093F\u0936 \u0915\u0930\u094B!",
    campaign_level_35: "\u0930\u0941\u0915\u094B! \u0924\u0941\u092E\u094D\u0939\u0947\u0902 \u092F\u0939\u093E\u0901 \u0928\u0939\u0940\u0902 \u0939\u094B\u0928\u093E \u091A\u093E\u0939\u093F\u090F!",
    campaign_level_39: "\u092C\u093E\u090F\u0901-\u0926\u093E\u090F\u0901 \u092E\u0942\u0935 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0915\u0940\u092C\u094B\u0930\u094D\u0921 \u092F\u0942\u091C\u093C \u0915\u0930\u094B\u0964"
  };
  To = {
    en: "English",
    es: "Espa\xF1ol (Spanish)",
    fa: "\u0641\u0627\u0631\u0633\u06CC (Persian)",
    fr: "Fran\xE7ais (French)",
    ko: "\uD55C\uAD6D\uC5B4 (Korean)",
    hi: "\u0939\u093F\u0902\u0926\u0940 (Hindi)"
  };
  Io = {
    button: {
      backup: "\u092C\u0948\u0915\u0905\u092A",
      cancel: "\u0930\u0926\u094D\u0926 \u0915\u0930\u0947\u0902",
      checkpoint: "\u091A\u0947\u0915\u092A\u0949\u0907\u0902\u091F (C)",
      close: "\u092C\u0902\u0926 \u0915\u0930\u0947\u0902",
      continue: "\u091C\u093E\u0930\u0940 \u0930\u0916\u0947\u0902",
      exit: "\u092C\u093E\u0939\u0930 \u0928\u093F\u0915\u0932\u0947\u0902 (E)",
      no: "\u0928\u0939\u0940\u0902",
      play: "\u0916\u0947\u0932\u094B",
      restore: "\u0930\u0940\u0938\u094D\u091F\u094B\u0930",
      retry: "\u092B\u093F\u0930 \u0938\u0947 \u092A\u094D\u0930\u092F\u093E\u0938 \u0915\u0930\u0947\u0902 (R)",
      settings: "\u0938\u0947\u091F\u093F\u0902\u0917\u094D\u0938",
      upload: "\u0905\u092A\u0932\u094B\u0921",
      yes: "\u0939\u093E\u0901"
    },
    description: {
      new_record: "\u0928\u092F\u093E \u0930\u093F\u0915\u0949\u0930\u094D\u0921!"
    },
    text: {
      all: "\u0938\u092D\u0940",
      browse: "\u092C\u094D\u0930\u093E\u0909\u091C\u093C \u0915\u0930\u0947\u0902",
      cloud_data_restored: "\u0938\u0915\u094D\u0938\u0947\u0938! \u0906\u092A\u0915\u093E \u0921\u0947\u091F\u093E \u0915\u094D\u0932\u093E\u0909\u0921 \u0938\u0947 \u0930\u0940\u0938\u094D\u091F\u094B\u0930 \u0939\u0941\u0906\u0964",
      cloud_data_saved: "\u0938\u0915\u094D\u0938\u0947\u0938! \u0906\u092A\u0915\u093E \u0921\u0947\u091F\u093E \u0915\u094D\u0932\u093E\u0909\u0921 \u092A\u0930 \u0938\u0947\u0935 \u0939\u0941\u0906\u0964",
      custom_skin: "\u0915\u0938\u094D\u091F\u092E \u0938\u094D\u0915\u093F\u0928",
      file_data_restored: "\u092B\u093E\u0907\u0932 \u0921\u0947\u091F\u093E \u0930\u0940\u0938\u094D\u091F\u094B\u0930 \u0939\u0941\u0906!",
      info: "\u091C\u093E\u0928\u0915\u093E\u0930\u0940",
      level_packs: "\u0932\u0947\u0935\u0932 \u092A\u0948\u0915\u094D\u0938",
      paused: "\u0930\u0941\u0915\u093E \u0939\u0941\u0906",
      restore_cloud_data: "\u0915\u094D\u092F\u093E \u0915\u094D\u0932\u093E\u0909\u0921 \u0938\u0947 \u0938\u093E\u0930\u093E \u0921\u0947\u091F\u093E \u0930\u0940\u0938\u094D\u091F\u094B\u0930 \u0915\u0930\u0928\u093E \u0939\u0948?",
      restore_file_data: "\u0915\u094D\u092F\u093E \u092B\u093E\u0907\u0932 \u0938\u0947 \u0938\u093E\u0930\u093E \u0921\u0947\u091F\u093E \u0930\u0940\u0938\u094D\u091F\u094B\u0930 \u0915\u0930\u0928\u093E \u0939\u0948?",
      save_data_to_cloud: "\u0915\u094D\u092F\u093E \u0938\u093E\u0930\u093E \u0932\u094B\u0915\u0932 \u0921\u0947\u091F\u093E \u0915\u094D\u0932\u093E\u0909\u0921 \u092A\u0930 \u0938\u0947\u0935 \u0915\u0930\u0928\u093E \u0939\u0948?",
      save_level: "\u0915\u094D\u092F\u093E \u0906\u092A \u0905\u092A\u0928\u093E \u0932\u0947\u0935\u0932 \u0938\u0947\u0935 \u0915\u0930\u0928\u093E \u091A\u093E\u0939\u0947\u0902\u0917\u0947?",
      search: "\u0916\u094B\u091C\u0947\u0902",
      seconds: "\u0938\u0947\u0915\u0902\u0921\u094D\u0938"
    }
  };
  Co = {
    audio: {
      music: "\u0938\u0902\u0917\u0940\u0924",
      title: "\u0911\u0921\u093F\u092F\u094B",
      volume_effects: "\u0938\u093E\u0909\u0902\u0921 \u0907\u092B\u0947\u0915\u094D\u091F\u094D\u0938",
      volume_main: "\u092E\u0941\u0916\u094D\u092F \u0935\u0949\u0932\u094D\u092F\u0942\u092E",
      volume_music: "\u0938\u0902\u0917\u0940\u0924 \u0935\u0949\u0932\u094D\u092F\u0942\u092E"
    },
    controls: {
      buffer: "\u0907\u0928\u092A\u0941\u091F \u092C\u092B\u0930",
      controller: "\u0915\u0902\u091F\u094D\u0930\u094B\u0932\u0930",
      reverse: "\u0930\u093F\u0935\u0930\u094D\u0938",
      title: "\u0915\u0902\u091F\u094D\u0930\u094B\u0932\u094D\u0938"
    },
    data: {
      backup_to: "\u092F\u0939\u093E\u0901 \u092A\u0930 \u092C\u0948\u0915\u0905\u092A \u0932\u0947\u0902...",
      file: "\u092B\u093E\u0907\u0932",
      google: "\u0917\u0942\u0917\u0932",
      reload: "\u0930\u0940\u0932\u094B\u0921",
      restore_from: "\u092F\u0939\u093E\u0901 \u0938\u0947 \u0930\u0940\u0938\u094D\u091F\u094B\u0930 \u0915\u0930\u0947\u0902...",
      title: "\u0921\u0947\u091F\u093E"
    },
    graphics: {
      auto_rotate: "\u0911\u091F\u094B \u0930\u094B\u091F\u0947\u091F",
      camera: "\u0915\u0948\u092E\u0930\u093E",
      debug_mode: "\u0921\u093F\u092C\u0917 \u092E\u094B\u0921",
      developer_tools: "\u0921\u0947\u0935\u0932\u092A\u0930 \u091F\u0942\u0932\u094D\u0938",
      old_ui: "\u092A\u0941\u0930\u093E\u0928\u093E \u092F\u0942\u0906\u0908",
      quality: "\u0915\u094D\u0935\u093E\u0932\u093F\u091F\u0940",
      scale: "\u0938\u094D\u0915\u0947\u0932",
      show_fps: "FPS \u0926\u093F\u0916\u093E\u090F\u0901",
      title: "\u0917\u094D\u0930\u093E\u092B\u093F\u0915\u094D\u0938"
    },
    language: {
      credit: "\u0915\u094D\u0930\u0947\u0921\u093F\u091F",
      select_language: "\u092D\u093E\u0937\u093E \u091A\u0941\u0928\u0947\u0902",
      title: "\u092D\u093E\u0937\u093E"
    },
    mods: {
      clipboard: "\u0915\u094D\u0932\u093F\u092A\u092C\u094B\u0930\u094D\u0921",
      download_instructions: "\u091F\u094D\u0930\u0938\u094D\u091F\u0947\u0921 \u0935\u0947\u092C\u0938\u093E\u0907\u091F\u094D\u0938 \u0938\u0947 \u092E\u0949\u0921\u094D\u0938 \u0915\u0949\u092A\u0940 \u0915\u0930\u0915\u0947 \u0915\u094D\u0932\u093F\u092A\u092C\u094B\u0930\u094D\u0921 \u092E\u0947\u0902 \u092A\u0947\u0938\u094D\u091F \u0915\u0930\u0947\u0902\u0964",
      inspect_instructions: "\u0917\u0947\u092E \u092A\u0930 \u0930\u093E\u0907\u091F-\u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u0947\u0902 \u0914\u0930 Inspect \u091A\u0941\u0928\u0947\u0902\u0964",
      paste_instructions: "Console \u091F\u0948\u092C \u092E\u0947\u0902 \u091C\u093E\u090F\u0901, \u0915\u094D\u0932\u093F\u092A\u092C\u094B\u0930\u094D\u0921 \u0938\u0947 \u092E\u0949\u0921\u094D\u0938 \u092A\u0947\u0938\u094D\u091F \u0915\u0930\u0947\u0902 \u0914\u0930 \u090F\u0902\u091F\u0930 \u0926\u092C\u093E\u090F\u0901\u0964",
      security: "\u0906\u092A\u0915\u0940 \u0938\u0941\u0930\u0915\u094D\u0937\u093E \u0915\u0947 \u0932\u093F\u090F, \u0939\u0930 \u092C\u093E\u0930 \u0917\u0947\u092E \u091A\u093E\u0932\u0942 \u0915\u0930\u0928\u0947 \u092A\u0930 \u092E\u0949\u0921\u094D\u0938 \u092E\u0948\u0928\u094D\u092F\u0941\u0905\u0932\u0940 \u0932\u094B\u0921 \u0915\u0930\u0928\u093E \u0939\u094B\u0917\u093E\u0964",
      title: "\u092E\u0949\u0921\u094D\u0938",
      trusted_mods: "\u091F\u094D\u0930\u0938\u094D\u091F\u0947\u0921 \u092E\u0949\u0921\u094D\u0938"
    },
    multiplayer: {
      host: "\u0939\u094B\u0938\u094D\u091F \u0915\u0930\u0947\u0902",
      join: "\u091C\u0949\u0907\u0928 \u0915\u0930\u0947\u0902",
      paste_friend_code: "\u092B\u094D\u0930\u0947\u0902\u0921 \u0915\u094B\u0921 \u092A\u0947\u0938\u094D\u091F \u0915\u0930\u0947\u0902",
      share_friend_code: "\u092B\u094D\u0930\u0947\u0902\u0921 \u0915\u094B\u0921 \u0936\u0947\u092F\u0930 \u0915\u0930\u0947\u0902",
      title: "\u092E\u0932\u094D\u091F\u0940\u092A\u094D\u0932\u0947\u092F\u0930",
      your_name: "\u0906\u092A\u0915\u093E \u0928\u093E\u092E"
    }
  };
  Po = {
    button: {
      select: "\u091A\u0941\u0928\u0947\u0902"
    },
    description: "\u0905\u092A\u0928\u0947 \u092A\u094D\u0932\u0947\u092F\u0930 \u0915\u0940 \u0938\u094D\u0915\u093F\u0928 \u091A\u0941\u0928\u0947\u0902",
    title: "\u0938\u094D\u0915\u093F\u0928\u094D\u0938"
  };
  Oo = {
    text: {
      browse_items: "\u0932\u0947\u0935\u0932\u094D\u0938, \u0938\u094D\u0915\u093F\u0928\u094D\u0938 \u0914\u0930 \u092E\u0949\u0921\u094D\u0938 \u092C\u094D\u0930\u093E\u0909\u091C\u093C \u0915\u0930\u0947\u0902",
      create_item: "\u0906\u0907\u091F\u092E \u092C\u0928\u093E\u090F\u0902",
      creations: "\u0915\u094D\u0930\u093F\u090F\u0936\u0928\u094D\u0938",
      edit: "\u0938\u0902\u092A\u093E\u0926\u093F\u0924 \u0915\u0930\u0947\u0902",
      steam_version: "\u0938\u094D\u091F\u0940\u092E \u0935\u0930\u094D\u0936\u0928",
      subscriptions: "\u0938\u092C\u094D\u0938\u0915\u094D\u0930\u093F\u092A\u094D\u0936\u0928\u094D\u0938",
      workshop: "\u0935\u0930\u094D\u0915\u0936\u0949\u092A"
    }
  };
  No = {
    campaign: Lo,
    home: ko,
    level_picker: wo,
    levels: So,
    locales: To,
    popup: Io,
    settings: Co,
    skins: Po,
    workshop: Oo
  };
  Ao = JSON.parse(localStorage.getItem("settings") || "{}");
  $o = ps({
    legacy: false,
    locale: Ao.language || "en",
    fallbackLocale: "en",
    messages: {
      en: Fs,
      es: Ys,
      fa: eo,
      fr: uo,
      ko: yo,
      hi: No
    }
  });
})();
export {
  Uo as A,
  Ye as E,
  xo as S,
  ct as U,
  ka as W,
  __tla,
  Mo as a,
  gn as b,
  Me as c,
  Do as g,
  $o as i,
  Dt as u
};
