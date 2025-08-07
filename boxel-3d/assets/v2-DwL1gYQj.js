import { aX as zi, aY as On, u as gt, s as hr, a$ as Zt, p as Ti, g as dt, aZ as Gn, b1 as Ye, f as Y, q as Wn, l as Vn, al as Fi, aF as ki, aH as Di, b2 as Lr, V as ht, aE as Wt, _ as qt, x as Ot, y as Sr, b as Rr, o as W, w as te, c as q, d as Vt, a as P, t as ee, F as re, i as pe, aS as Mi, aT as Li, T as Me, b3 as Bi, h as Ct, m as Ht, b4 as Ni, aN as Hi, ac as Oi, O as Br, af as Gi, b5 as Un, ah as Jn, aL as Wi, b6 as Vi, aM as Cr, a2 as Ui, b7 as Ji, b8 as qi, j as qn, z as Kn, aP as wr, aR as Ki, b9 as $i, n as Xi, e as Yi, A as Qi } from "./SkeletonUtils-CPE3ZpxV.js";
import { I as Zi, A as ts, G as es, a as rs, L as $n } from "./AssetLoader-B-yKI2c4.js";
import { G as ns, E as is, T as ss, O as as } from "./OrbitControls-BiGaBug5.js";
(async () => {
  const Yt = typeof document < "u";
  function Xn(n) {
    return typeof n == "object" || "displayName" in n || "props" in n || "__vccOpts" in n;
  }
  function os(n) {
    return n.__esModule || n[Symbol.toStringTag] === "Module" || n.default && Xn(n.default);
  }
  const O = Object.assign;
  function Qe(n, t) {
    const e = {};
    for (const r in t) {
      const i = t[r];
      e[r] = vt(i) ? i.map(n) : n(i);
    }
    return e;
  }
  const he = () => {
  }, vt = Array.isArray, Yn = /#/g, cs = /&/g, ls = /\//g, _s = /=/g, ds = /\?/g, Qn = /\+/g, hs = /%5B/g, ws = /%5D/g, Zn = /%5E/g, us = /%60/g, ti = /%7B/g, ps = /%7C/g, ei = /%7D/g, gs = /%20/g;
  function xr(n) {
    return encodeURI("" + n).replace(ps, "|").replace(hs, "[").replace(ws, "]");
  }
  function bs(n) {
    return xr(n).replace(ti, "{").replace(ei, "}").replace(Zn, "^");
  }
  function ur(n) {
    return xr(n).replace(Qn, "%2B").replace(gs, "+").replace(Yn, "%23").replace(cs, "%26").replace(us, "`").replace(ti, "{").replace(ei, "}").replace(Zn, "^");
  }
  function ms(n) {
    return ur(n).replace(_s, "%3D");
  }
  function fs(n) {
    return xr(n).replace(Yn, "%23").replace(ds, "%3F");
  }
  function ys(n) {
    return n == null ? "" : fs(n).replace(ls, "%2F");
  }
  function ge(n) {
    try {
      return decodeURIComponent("" + n);
    } catch {
    }
    return "" + n;
  }
  const vs = /\/$/, Ss = (n) => n.replace(vs, "");
  function Ze(n, t, e = "/") {
    let r, i = {}, a = "", c = "";
    const l = t.indexOf("#");
    let _ = t.indexOf("?");
    return l < _ && l >= 0 && (_ = -1), _ > -1 && (r = t.slice(0, _), a = t.slice(_ + 1, l > -1 ? l : t.length), i = n(a)), l > -1 && (r = r || t.slice(0, l), c = t.slice(l, t.length)), r = Es(r ?? t, e), {
      fullPath: r + (a && "?") + a + c,
      path: r,
      query: i,
      hash: ge(c)
    };
  }
  function Rs(n, t) {
    const e = t.query ? n(t.query) : "";
    return t.path + (e && "?") + e + (t.hash || "");
  }
  function Nr(n, t) {
    return !t || !n.toLowerCase().startsWith(t.toLowerCase()) ? n : n.slice(t.length) || "/";
  }
  function Cs(n, t, e) {
    const r = t.matched.length - 1, i = e.matched.length - 1;
    return r > -1 && r === i && ne(t.matched[r], e.matched[i]) && ri(t.params, e.params) && n(t.query) === n(e.query) && t.hash === e.hash;
  }
  function ne(n, t) {
    return (n.aliasOf || n) === (t.aliasOf || t);
  }
  function ri(n, t) {
    if (Object.keys(n).length !== Object.keys(t).length) return false;
    for (const e in n) if (!xs(n[e], t[e])) return false;
    return true;
  }
  function xs(n, t) {
    return vt(n) ? Hr(n, t) : vt(t) ? Hr(t, n) : n === t;
  }
  function Hr(n, t) {
    return vt(t) ? n.length === t.length && n.every((e, r) => e === t[r]) : n.length === 1 && n[0] === t;
  }
  function Es(n, t) {
    if (n.startsWith("/")) return n;
    if (!n) return t;
    const e = t.split("/"), r = n.split("/"), i = r[r.length - 1];
    (i === ".." || i === ".") && r.push("");
    let a = e.length - 1, c, l;
    for (c = 0; c < r.length; c++) if (l = r[c], l !== ".") if (l === "..") a > 1 && a--;
    else break;
    return e.slice(0, a).join("/") + "/" + r.slice(c).join("/");
  }
  const Lt = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  var be;
  (function(n) {
    n.pop = "pop", n.push = "push";
  })(be || (be = {}));
  var we;
  (function(n) {
    n.back = "back", n.forward = "forward", n.unknown = "";
  })(we || (we = {}));
  function Ps(n) {
    if (!n) if (Yt) {
      const t = document.querySelector("base");
      n = t && t.getAttribute("href") || "/", n = n.replace(/^\w+:\/\/[^\/]+/, "");
    } else n = "/";
    return n[0] !== "/" && n[0] !== "#" && (n = "/" + n), Ss(n);
  }
  const js = /^[^#]+#/;
  function As(n, t) {
    return n.replace(js, "#") + t;
  }
  function Is(n, t) {
    const e = document.documentElement.getBoundingClientRect(), r = n.getBoundingClientRect();
    return {
      behavior: t.behavior,
      left: r.left - e.left - (t.left || 0),
      top: r.top - e.top - (t.top || 0)
    };
  }
  const Le = () => ({
    left: window.scrollX,
    top: window.scrollY
  });
  function zs(n) {
    let t;
    if ("el" in n) {
      const e = n.el, r = typeof e == "string" && e.startsWith("#"), i = typeof e == "string" ? r ? document.getElementById(e.slice(1)) : document.querySelector(e) : e;
      if (!i) return;
      t = Is(i, n);
    } else t = n;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
  }
  function Or(n, t) {
    return (history.state ? history.state.position - t : -1) + n;
  }
  const pr = /* @__PURE__ */ new Map();
  function Ts(n, t) {
    pr.set(n, t);
  }
  function Fs(n) {
    const t = pr.get(n);
    return pr.delete(n), t;
  }
  let ks = () => location.protocol + "//" + location.host;
  function ni(n, t) {
    const { pathname: e, search: r, hash: i } = t, a = n.indexOf("#");
    if (a > -1) {
      let l = i.includes(n.slice(a)) ? n.slice(a).length : 1, _ = i.slice(l);
      return _[0] !== "/" && (_ = "/" + _), Nr(_, "");
    }
    return Nr(e, n) + r + i;
  }
  function Ds(n, t, e, r) {
    let i = [], a = [], c = null;
    const l = ({ state: b }) => {
      const f = ni(n, location), S = e.value, T = t.value;
      let j = 0;
      if (b) {
        if (e.value = f, t.value = b, c && c === S) {
          c = null;
          return;
        }
        j = T ? b.position - T.position : 0;
      } else r(f);
      i.forEach((I) => {
        I(e.value, S, {
          delta: j,
          type: be.pop,
          direction: j ? j > 0 ? we.forward : we.back : we.unknown
        });
      });
    };
    function _() {
      c = e.value;
    }
    function h(b) {
      i.push(b);
      const f = () => {
        const S = i.indexOf(b);
        S > -1 && i.splice(S, 1);
      };
      return a.push(f), f;
    }
    function u() {
      const { history: b } = window;
      b.state && b.replaceState(O({}, b.state, {
        scroll: Le()
      }), "");
    }
    function w() {
      for (const b of a) b();
      a = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", u);
    }
    return window.addEventListener("popstate", l), window.addEventListener("beforeunload", u, {
      passive: true
    }), {
      pauseListeners: _,
      listen: h,
      destroy: w
    };
  }
  function Gr(n, t, e, r = false, i = false) {
    return {
      back: n,
      current: t,
      forward: e,
      replaced: r,
      position: window.history.length,
      scroll: i ? Le() : null
    };
  }
  function Ms(n) {
    const { history: t, location: e } = window, r = {
      value: ni(n, e)
    }, i = {
      value: t.state
    };
    i.value || a(r.value, {
      back: null,
      current: r.value,
      forward: null,
      position: t.length - 1,
      replaced: true,
      scroll: null
    }, true);
    function a(_, h, u) {
      const w = n.indexOf("#"), b = w > -1 ? (e.host && document.querySelector("base") ? n : n.slice(w)) + _ : ks() + n + _;
      try {
        t[u ? "replaceState" : "pushState"](h, "", b), i.value = h;
      } catch (f) {
        console.error(f), e[u ? "replace" : "assign"](b);
      }
    }
    function c(_, h) {
      const u = O({}, t.state, Gr(i.value.back, _, i.value.forward, true), h, {
        position: i.value.position
      });
      a(_, u, true), r.value = _;
    }
    function l(_, h) {
      const u = O({}, i.value, t.state, {
        forward: _,
        scroll: Le()
      });
      a(u.current, u, true);
      const w = O({}, Gr(r.value, _, null), {
        position: u.position + 1
      }, h);
      a(_, w, false), r.value = _;
    }
    return {
      location: r,
      state: i,
      push: l,
      replace: c
    };
  }
  function Ls(n) {
    n = Ps(n);
    const t = Ms(n), e = Ds(n, t.state, t.location, t.replace);
    function r(a, c = true) {
      c || e.pauseListeners(), history.go(a);
    }
    const i = O({
      location: "",
      base: n,
      go: r,
      createHref: As.bind(null, n)
    }, t, e);
    return Object.defineProperty(i, "location", {
      enumerable: true,
      get: () => t.location.value
    }), Object.defineProperty(i, "state", {
      enumerable: true,
      get: () => t.state.value
    }), i;
  }
  function Bs(n) {
    return n = location.host ? n || location.pathname + location.search : "", n.includes("#") || (n += "#"), Ls(n);
  }
  function Ns(n) {
    return typeof n == "string" || n && typeof n == "object";
  }
  function ii(n) {
    return typeof n == "string" || typeof n == "symbol";
  }
  const si = Symbol("");
  var Wr;
  (function(n) {
    n[n.aborted = 4] = "aborted", n[n.cancelled = 8] = "cancelled", n[n.duplicated = 16] = "duplicated";
  })(Wr || (Wr = {}));
  function ie(n, t) {
    return O(new Error(), {
      type: n,
      [si]: true
    }, t);
  }
  function jt(n, t) {
    return n instanceof Error && si in n && (t == null || !!(n.type & t));
  }
  const Vr = "[^/]+?", Hs = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  }, Os = /[.+*?^${}()[\]/\\]/g;
  function Gs(n, t) {
    const e = O({}, Hs, t), r = [];
    let i = e.start ? "^" : "";
    const a = [];
    for (const h of n) {
      const u = h.length ? [] : [
        90
      ];
      e.strict && !h.length && (i += "/");
      for (let w = 0; w < h.length; w++) {
        const b = h[w];
        let f = 40 + (e.sensitive ? 0.25 : 0);
        if (b.type === 0) w || (i += "/"), i += b.value.replace(Os, "\\$&"), f += 40;
        else if (b.type === 1) {
          const { value: S, repeatable: T, optional: j, regexp: I } = b;
          a.push({
            name: S,
            repeatable: T,
            optional: j
          });
          const v = I || Vr;
          if (v !== Vr) {
            f += 10;
            try {
              new RegExp(`(${v})`);
            } catch (x) {
              throw new Error(`Invalid custom RegExp for param "${S}" (${v}): ` + x.message);
            }
          }
          let R = T ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
          w || (R = j && h.length < 2 ? `(?:/${R})` : "/" + R), j && (R += "?"), i += R, f += 20, j && (f += -8), T && (f += -20), v === ".*" && (f += -50);
        }
        u.push(f);
      }
      r.push(u);
    }
    if (e.strict && e.end) {
      const h = r.length - 1;
      r[h][r[h].length - 1] += 0.7000000000000001;
    }
    e.strict || (i += "/?"), e.end ? i += "$" : e.strict && !i.endsWith("/") && (i += "(?:/|$)");
    const c = new RegExp(i, e.sensitive ? "" : "i");
    function l(h) {
      const u = h.match(c), w = {};
      if (!u) return null;
      for (let b = 1; b < u.length; b++) {
        const f = u[b] || "", S = a[b - 1];
        w[S.name] = f && S.repeatable ? f.split("/") : f;
      }
      return w;
    }
    function _(h) {
      let u = "", w = false;
      for (const b of n) {
        (!w || !u.endsWith("/")) && (u += "/"), w = false;
        for (const f of b) if (f.type === 0) u += f.value;
        else if (f.type === 1) {
          const { value: S, repeatable: T, optional: j } = f, I = S in h ? h[S] : "";
          if (vt(I) && !T) throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);
          const v = vt(I) ? I.join("/") : I;
          if (!v) if (j) b.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : w = true);
          else throw new Error(`Missing required param "${S}"`);
          u += v;
        }
      }
      return u || "/";
    }
    return {
      re: c,
      score: r,
      keys: a,
      parse: l,
      stringify: _
    };
  }
  function Ws(n, t) {
    let e = 0;
    for (; e < n.length && e < t.length; ) {
      const r = t[e] - n[e];
      if (r) return r;
      e++;
    }
    return n.length < t.length ? n.length === 1 && n[0] === 80 ? -1 : 1 : n.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
  }
  function ai(n, t) {
    let e = 0;
    const r = n.score, i = t.score;
    for (; e < r.length && e < i.length; ) {
      const a = Ws(r[e], i[e]);
      if (a) return a;
      e++;
    }
    if (Math.abs(i.length - r.length) === 1) {
      if (Ur(r)) return 1;
      if (Ur(i)) return -1;
    }
    return i.length - r.length;
  }
  function Ur(n) {
    const t = n[n.length - 1];
    return n.length > 0 && t[t.length - 1] < 0;
  }
  const Vs = {
    type: 0,
    value: ""
  }, Us = /[a-zA-Z0-9_]/;
  function Js(n) {
    if (!n) return [
      []
    ];
    if (n === "/") return [
      [
        Vs
      ]
    ];
    if (!n.startsWith("/")) throw new Error(`Invalid path "${n}"`);
    function t(f) {
      throw new Error(`ERR (${e})/"${h}": ${f}`);
    }
    let e = 0, r = e;
    const i = [];
    let a;
    function c() {
      a && i.push(a), a = [];
    }
    let l = 0, _, h = "", u = "";
    function w() {
      h && (e === 0 ? a.push({
        type: 0,
        value: h
      }) : e === 1 || e === 2 || e === 3 ? (a.length > 1 && (_ === "*" || _ === "+") && t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`), a.push({
        type: 1,
        value: h,
        regexp: u,
        repeatable: _ === "*" || _ === "+",
        optional: _ === "*" || _ === "?"
      })) : t("Invalid state to consume buffer"), h = "");
    }
    function b() {
      h += _;
    }
    for (; l < n.length; ) {
      if (_ = n[l++], _ === "\\" && e !== 2) {
        r = e, e = 4;
        continue;
      }
      switch (e) {
        case 0:
          _ === "/" ? (h && w(), c()) : _ === ":" ? (w(), e = 1) : b();
          break;
        case 4:
          b(), e = r;
          break;
        case 1:
          _ === "(" ? e = 2 : Us.test(_) ? b() : (w(), e = 0, _ !== "*" && _ !== "?" && _ !== "+" && l--);
          break;
        case 2:
          _ === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + _ : e = 3 : u += _;
          break;
        case 3:
          w(), e = 0, _ !== "*" && _ !== "?" && _ !== "+" && l--, u = "";
          break;
        default:
          t("Unknown state");
          break;
      }
    }
    return e === 2 && t(`Unfinished custom RegExp for param "${h}"`), w(), c(), i;
  }
  function qs(n, t, e) {
    const r = Gs(Js(n.path), e), i = O(r, {
      record: n,
      parent: t,
      children: [],
      alias: []
    });
    return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
  }
  function Ks(n, t) {
    const e = [], r = /* @__PURE__ */ new Map();
    t = $r({
      strict: false,
      end: true,
      sensitive: false
    }, t);
    function i(w) {
      return r.get(w);
    }
    function a(w, b, f) {
      const S = !f, T = qr(w);
      T.aliasOf = f && f.record;
      const j = $r(t, w), I = [
        T
      ];
      if ("alias" in w) {
        const x = typeof w.alias == "string" ? [
          w.alias
        ] : w.alias;
        for (const bt of x) I.push(qr(O({}, T, {
          components: f ? f.record.components : T.components,
          path: bt,
          aliasOf: f ? f.record : T
        })));
      }
      let v, R;
      for (const x of I) {
        const { path: bt } = x;
        if (b && bt[0] !== "/") {
          const ut = b.record.path, Q = ut[ut.length - 1] === "/" ? "" : "/";
          x.path = b.record.path + (bt && Q + bt);
        }
        if (v = qs(x, b, j), f ? f.alias.push(v) : (R = R || v, R !== v && R.alias.push(v), S && w.name && !Kr(v) && c(w.name)), oi(v) && _(v), T.children) {
          const ut = T.children;
          for (let Q = 0; Q < ut.length; Q++) a(ut[Q], v, f && f.children[Q]);
        }
        f = f || v;
      }
      return R ? () => {
        c(R);
      } : he;
    }
    function c(w) {
      if (ii(w)) {
        const b = r.get(w);
        b && (r.delete(w), e.splice(e.indexOf(b), 1), b.children.forEach(c), b.alias.forEach(c));
      } else {
        const b = e.indexOf(w);
        b > -1 && (e.splice(b, 1), w.record.name && r.delete(w.record.name), w.children.forEach(c), w.alias.forEach(c));
      }
    }
    function l() {
      return e;
    }
    function _(w) {
      const b = Ys(w, e);
      e.splice(b, 0, w), w.record.name && !Kr(w) && r.set(w.record.name, w);
    }
    function h(w, b) {
      let f, S = {}, T, j;
      if ("name" in w && w.name) {
        if (f = r.get(w.name), !f) throw ie(1, {
          location: w
        });
        j = f.record.name, S = O(Jr(b.params, f.keys.filter((R) => !R.optional).concat(f.parent ? f.parent.keys.filter((R) => R.optional) : []).map((R) => R.name)), w.params && Jr(w.params, f.keys.map((R) => R.name))), T = f.stringify(S);
      } else if (w.path != null) T = w.path, f = e.find((R) => R.re.test(T)), f && (S = f.parse(T), j = f.record.name);
      else {
        if (f = b.name ? r.get(b.name) : e.find((R) => R.re.test(b.path)), !f) throw ie(1, {
          location: w,
          currentLocation: b
        });
        j = f.record.name, S = O({}, b.params, w.params), T = f.stringify(S);
      }
      const I = [];
      let v = f;
      for (; v; ) I.unshift(v.record), v = v.parent;
      return {
        name: j,
        path: T,
        params: S,
        matched: I,
        meta: Xs(I)
      };
    }
    n.forEach((w) => a(w));
    function u() {
      e.length = 0, r.clear();
    }
    return {
      addRoute: a,
      resolve: h,
      removeRoute: c,
      clearRoutes: u,
      getRoutes: l,
      getRecordMatcher: i
    };
  }
  function Jr(n, t) {
    const e = {};
    for (const r of t) r in n && (e[r] = n[r]);
    return e;
  }
  function qr(n) {
    const t = {
      path: n.path,
      redirect: n.redirect,
      name: n.name,
      meta: n.meta || {},
      aliasOf: n.aliasOf,
      beforeEnter: n.beforeEnter,
      props: $s(n),
      children: n.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      components: "components" in n ? n.components || null : n.component && {
        default: n.component
      }
    };
    return Object.defineProperty(t, "mods", {
      value: {}
    }), t;
  }
  function $s(n) {
    const t = {}, e = n.props || false;
    if ("component" in n) t.default = e;
    else for (const r in n.components) t[r] = typeof e == "object" ? e[r] : e;
    return t;
  }
  function Kr(n) {
    for (; n; ) {
      if (n.record.aliasOf) return true;
      n = n.parent;
    }
    return false;
  }
  function Xs(n) {
    return n.reduce((t, e) => O(t, e.meta), {});
  }
  function $r(n, t) {
    const e = {};
    for (const r in n) e[r] = r in t ? t[r] : n[r];
    return e;
  }
  function Ys(n, t) {
    let e = 0, r = t.length;
    for (; e !== r; ) {
      const a = e + r >> 1;
      ai(n, t[a]) < 0 ? r = a : e = a + 1;
    }
    const i = Qs(n);
    return i && (r = t.lastIndexOf(i, r - 1)), r;
  }
  function Qs(n) {
    let t = n;
    for (; t = t.parent; ) if (oi(t) && ai(n, t) === 0) return t;
  }
  function oi({ record: n }) {
    return !!(n.name || n.components && Object.keys(n.components).length || n.redirect);
  }
  function Zs(n) {
    const t = {};
    if (n === "" || n === "?") return t;
    const r = (n[0] === "?" ? n.slice(1) : n).split("&");
    for (let i = 0; i < r.length; ++i) {
      const a = r[i].replace(Qn, " "), c = a.indexOf("="), l = ge(c < 0 ? a : a.slice(0, c)), _ = c < 0 ? null : ge(a.slice(c + 1));
      if (l in t) {
        let h = t[l];
        vt(h) || (h = t[l] = [
          h
        ]), h.push(_);
      } else t[l] = _;
    }
    return t;
  }
  function Xr(n) {
    let t = "";
    for (let e in n) {
      const r = n[e];
      if (e = ms(e), r == null) {
        r !== void 0 && (t += (t.length ? "&" : "") + e);
        continue;
      }
      (vt(r) ? r.map((a) => a && ur(a)) : [
        r && ur(r)
      ]).forEach((a) => {
        a !== void 0 && (t += (t.length ? "&" : "") + e, a != null && (t += "=" + a));
      });
    }
    return t;
  }
  function ta(n) {
    const t = {};
    for (const e in n) {
      const r = n[e];
      r !== void 0 && (t[e] = vt(r) ? r.map((i) => i == null ? null : "" + i) : r == null ? r : "" + r);
    }
    return t;
  }
  const ea = Symbol(""), Yr = Symbol(""), Er = Symbol(""), Pr = Symbol(""), gr = Symbol("");
  function _e() {
    let n = [];
    function t(r) {
      return n.push(r), () => {
        const i = n.indexOf(r);
        i > -1 && n.splice(i, 1);
      };
    }
    function e() {
      n = [];
    }
    return {
      add: t,
      list: () => n.slice(),
      reset: e
    };
  }
  function Nt(n, t, e, r, i, a = (c) => c()) {
    const c = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
    return () => new Promise((l, _) => {
      const h = (b) => {
        b === false ? _(ie(4, {
          from: e,
          to: t
        })) : b instanceof Error ? _(b) : Ns(b) ? _(ie(2, {
          from: t,
          to: b
        })) : (c && r.enterCallbacks[i] === c && typeof b == "function" && c.push(b), l());
      }, u = a(() => n.call(r && r.instances[i], t, e, h));
      let w = Promise.resolve(u);
      n.length < 3 && (w = w.then(h)), w.catch((b) => _(b));
    });
  }
  function tr(n, t, e, r, i = (a) => a()) {
    const a = [];
    for (const c of n) for (const l in c.components) {
      let _ = c.components[l];
      if (!(t !== "beforeRouteEnter" && !c.instances[l])) if (Xn(_)) {
        const u = (_.__vccOpts || _)[t];
        u && a.push(Nt(u, e, r, c, l, i));
      } else {
        let h = _();
        a.push(() => h.then((u) => {
          if (!u) throw new Error(`Couldn't resolve component "${l}" at "${c.path}"`);
          const w = os(u) ? u.default : u;
          c.mods[l] = u, c.components[l] = w;
          const f = (w.__vccOpts || w)[t];
          return f && Nt(f, e, r, c, l, i)();
        }));
      }
    }
    return a;
  }
  function Qr(n) {
    const t = Zt(Er), e = Zt(Pr), r = dt(() => {
      const _ = gt(n.to);
      return t.resolve(_);
    }), i = dt(() => {
      const { matched: _ } = r.value, { length: h } = _, u = _[h - 1], w = e.matched;
      if (!u || !w.length) return -1;
      const b = w.findIndex(ne.bind(null, u));
      if (b > -1) return b;
      const f = Zr(_[h - 2]);
      return h > 1 && Zr(u) === f && w[w.length - 1].path !== f ? w.findIndex(ne.bind(null, _[h - 2])) : b;
    }), a = dt(() => i.value > -1 && aa(e.params, r.value.params)), c = dt(() => i.value > -1 && i.value === e.matched.length - 1 && ri(e.params, r.value.params));
    function l(_ = {}) {
      if (sa(_)) {
        const h = t[gt(n.replace) ? "replace" : "push"](gt(n.to)).catch(he);
        return n.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => h), h;
      }
      return Promise.resolve();
    }
    return {
      route: r,
      href: dt(() => r.value.href),
      isActive: a,
      isExactActive: c,
      navigate: l
    };
  }
  function ra(n) {
    return n.length === 1 ? n[0] : n;
  }
  const na = On({
    name: "RouterLink",
    compatConfig: {
      MODE: 3
    },
    props: {
      to: {
        type: [
          String,
          Object
        ],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      },
      viewTransition: Boolean
    },
    useLink: Qr,
    setup(n, { slots: t }) {
      const e = Ti(Qr(n)), { options: r } = Zt(Er), i = dt(() => ({
        [tn(n.activeClass, r.linkActiveClass, "router-link-active")]: e.isActive,
        [tn(n.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: e.isExactActive
      }));
      return () => {
        const a = t.default && ra(t.default(e));
        return n.custom ? a : Gn("a", {
          "aria-current": e.isExactActive ? n.ariaCurrentValue : null,
          href: e.href,
          onClick: e.navigate,
          class: i.value
        }, a);
      };
    }
  }), ia = na;
  function sa(n) {
    if (!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey) && !n.defaultPrevented && !(n.button !== void 0 && n.button !== 0)) {
      if (n.currentTarget && n.currentTarget.getAttribute) {
        const t = n.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(t)) return;
      }
      return n.preventDefault && n.preventDefault(), true;
    }
  }
  function aa(n, t) {
    for (const e in t) {
      const r = t[e], i = n[e];
      if (typeof r == "string") {
        if (r !== i) return false;
      } else if (!vt(i) || i.length !== r.length || r.some((a, c) => a !== i[c])) return false;
    }
    return true;
  }
  function Zr(n) {
    return n ? n.aliasOf ? n.aliasOf.path : n.path : "";
  }
  const tn = (n, t, e) => n ?? t ?? e, oa = On({
    name: "RouterView",
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    compatConfig: {
      MODE: 3
    },
    setup(n, { attrs: t, slots: e }) {
      const r = Zt(gr), i = dt(() => n.route || r.value), a = Zt(Yr, 0), c = dt(() => {
        let h = gt(a);
        const { matched: u } = i.value;
        let w;
        for (; (w = u[h]) && !w.components; ) h++;
        return h;
      }), l = dt(() => i.value.matched[c.value]);
      Ye(Yr, dt(() => c.value + 1)), Ye(ea, l), Ye(gr, i);
      const _ = Y();
      return Wn(() => [
        _.value,
        l.value,
        n.name
      ], ([h, u, w], [b, f, S]) => {
        u && (u.instances[w] = h, f && f !== u && h && h === b && (u.leaveGuards.size || (u.leaveGuards = f.leaveGuards), u.updateGuards.size || (u.updateGuards = f.updateGuards))), h && u && (!f || !ne(u, f) || !b) && (u.enterCallbacks[w] || []).forEach((T) => T(h));
      }, {
        flush: "post"
      }), () => {
        const h = i.value, u = n.name, w = l.value, b = w && w.components[u];
        if (!b) return en(e.default, {
          Component: b,
          route: h
        });
        const f = w.props[u], S = f ? f === true ? h.params : typeof f == "function" ? f(h) : f : null, j = Gn(b, O({}, S, t, {
          onVnodeUnmounted: (I) => {
            I.component.isUnmounted && (w.instances[u] = null);
          },
          ref: _
        }));
        return en(e.default, {
          Component: j,
          route: h
        }) || j;
      };
    }
  });
  function en(n, t) {
    if (!n) return null;
    const e = n(t);
    return e.length === 1 ? e[0] : e;
  }
  const ca = oa;
  function la(n) {
    const t = Ks(n.routes, n), e = n.parseQuery || Zs, r = n.stringifyQuery || Xr, i = n.history, a = _e(), c = _e(), l = _e(), _ = zi(Lt);
    let h = Lt;
    Yt && n.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const u = Qe.bind(null, (m) => "" + m), w = Qe.bind(null, ys), b = Qe.bind(null, ge);
    function f(m, y) {
      let C, z;
      return ii(m) ? (C = t.getRecordMatcher(m), z = y) : z = m, t.addRoute(z, C);
    }
    function S(m) {
      const y = t.getRecordMatcher(m);
      y && t.removeRoute(y);
    }
    function T() {
      return t.getRoutes().map((m) => m.record);
    }
    function j(m) {
      return !!t.getRecordMatcher(m);
    }
    function I(m, y) {
      if (y = O({}, y || _.value), typeof m == "string") {
        const B = Ze(e, m, y.path), nt = t.resolve({
          path: B.path
        }, y), le = i.createHref(B.fullPath);
        return O(B, nt, {
          params: b(nt.params),
          hash: ge(B.hash),
          redirectedFrom: void 0,
          href: le
        });
      }
      let C;
      if (m.path != null) C = O({}, m, {
        path: Ze(e, m.path, y.path).path
      });
      else {
        const B = O({}, m.params);
        for (const nt in B) B[nt] == null && delete B[nt];
        C = O({}, m, {
          params: w(B)
        }), y.params = w(y.params);
      }
      const z = t.resolve(C, y), V = m.hash || "";
      z.params = u(b(z.params));
      const $ = Rs(r, O({}, m, {
        hash: bs(V),
        path: z.path
      })), N = i.createHref($);
      return O({
        fullPath: $,
        hash: V,
        query: r === Xr ? ta(m.query) : m.query || {}
      }, z, {
        redirectedFrom: void 0,
        href: N
      });
    }
    function v(m) {
      return typeof m == "string" ? Ze(e, m, _.value.path) : O({}, m);
    }
    function R(m, y) {
      if (h !== m) return ie(8, {
        from: y,
        to: m
      });
    }
    function x(m) {
      return Q(m);
    }
    function bt(m) {
      return x(O(v(m), {
        replace: true
      }));
    }
    function ut(m) {
      const y = m.matched[m.matched.length - 1];
      if (y && y.redirect) {
        const { redirect: C } = y;
        let z = typeof C == "function" ? C(m) : C;
        return typeof z == "string" && (z = z.includes("?") || z.includes("#") ? z = v(z) : {
          path: z
        }, z.params = {}), O({
          query: m.query,
          hash: m.hash,
          params: z.path != null ? {} : m.params
        }, z);
      }
    }
    function Q(m, y) {
      const C = h = I(m), z = _.value, V = m.state, $ = m.force, N = m.replace === true, B = ut(C);
      if (B) return Q(O(v(B), {
        state: typeof B == "object" ? O({}, V, B.state) : V,
        force: $,
        replace: N
      }), y || C);
      const nt = C;
      nt.redirectedFrom = y;
      let le;
      return !$ && Cs(r, z, C) && (le = ie(16, {
        to: nt,
        from: z
      }), ce(z, z, true, false)), (le ? Promise.resolve(le) : Et(nt, z)).catch((pt) => jt(pt) ? jt(pt, 2) ? pt : mt(pt) : oe(pt, nt, z)).then((pt) => {
        if (pt) {
          if (jt(pt, 2)) return Q(O({
            replace: N
          }, v(pt.to), {
            state: typeof pt.to == "object" ? O({}, V, pt.to.state) : V,
            force: $
          }), y || nt);
        } else pt = Pt(nt, z, true, N, V);
        return Dt(nt, z, pt), pt;
      });
    }
    function kt(m, y) {
      const C = R(m, y);
      return C ? Promise.reject(C) : Promise.resolve();
    }
    function St(m) {
      const y = E.values().next().value;
      return y && typeof y.runWithContext == "function" ? y.runWithContext(m) : m();
    }
    function Et(m, y) {
      let C;
      const [z, V, $] = _a(m, y);
      C = tr(z.reverse(), "beforeRouteLeave", m, y);
      for (const B of z) B.leaveGuards.forEach((nt) => {
        C.push(Nt(nt, m, y));
      });
      const N = kt.bind(null, m, y);
      return C.push(N), A(C).then(() => {
        C = [];
        for (const B of a.list()) C.push(Nt(B, m, y));
        return C.push(N), A(C);
      }).then(() => {
        C = tr(V, "beforeRouteUpdate", m, y);
        for (const B of V) B.updateGuards.forEach((nt) => {
          C.push(Nt(nt, m, y));
        });
        return C.push(N), A(C);
      }).then(() => {
        C = [];
        for (const B of $) if (B.beforeEnter) if (vt(B.beforeEnter)) for (const nt of B.beforeEnter) C.push(Nt(nt, m, y));
        else C.push(Nt(B.beforeEnter, m, y));
        return C.push(N), A(C);
      }).then(() => (m.matched.forEach((B) => B.enterCallbacks = {}), C = tr($, "beforeRouteEnter", m, y, St), C.push(N), A(C))).then(() => {
        C = [];
        for (const B of c.list()) C.push(Nt(B, m, y));
        return C.push(N), A(C);
      }).catch((B) => jt(B, 8) ? B : Promise.reject(B));
    }
    function Dt(m, y, C) {
      l.list().forEach((z) => St(() => z(m, y, C)));
    }
    function Pt(m, y, C, z, V) {
      const $ = R(m, y);
      if ($) return $;
      const N = y === Lt, B = Yt ? history.state : {};
      C && (z || N ? i.replace(m.fullPath, O({
        scroll: N && B && B.scroll
      }, V)) : i.push(m.fullPath, V)), _.value = m, ce(m, y, C, N), mt();
    }
    let Mt;
    function Ce() {
      Mt || (Mt = i.listen((m, y, C) => {
        if (!D.listening) return;
        const z = I(m), V = ut(z);
        if (V) {
          Q(O(V, {
            replace: true,
            force: true
          }), z).catch(he);
          return;
        }
        h = z;
        const $ = _.value;
        Yt && Ts(Or($.fullPath, C.delta), Le()), Et(z, $).catch((N) => jt(N, 12) ? N : jt(N, 2) ? (Q(O(v(N.to), {
          force: true
        }), z).then((B) => {
          jt(B, 20) && !C.delta && C.type === be.pop && i.go(-1, false);
        }).catch(he), Promise.reject()) : (C.delta && i.go(-C.delta, false), oe(N, z, $))).then((N) => {
          N = N || Pt(z, $, false), N && (C.delta && !jt(N, 8) ? i.go(-C.delta, false) : C.type === be.pop && jt(N, 20) && i.go(-1, false)), Dt(z, $, N);
        }).catch(he);
      }));
    }
    let se = _e(), ae = _e(), Kt;
    function oe(m, y, C) {
      mt(m);
      const z = ae.list();
      return z.length ? z.forEach((V) => V(m, y, C)) : console.error(m), Promise.reject(m);
    }
    function Xe() {
      return Kt && _.value !== Lt ? Promise.resolve() : new Promise((m, y) => {
        se.add([
          m,
          y
        ]);
      });
    }
    function mt(m) {
      return Kt || (Kt = !m, Ce(), se.list().forEach(([y, C]) => m ? C(m) : y()), se.reset()), m;
    }
    function ce(m, y, C, z) {
      const { scrollBehavior: V } = n;
      if (!Yt || !V) return Promise.resolve();
      const $ = !C && Fs(Or(m.fullPath, 0)) || (z || !C) && history.state && history.state.scroll || null;
      return Vn().then(() => V(m, y, $)).then((N) => N && zs(N)).catch((N) => oe(N, m, y));
    }
    const $t = (m) => i.go(m);
    let Gt;
    const E = /* @__PURE__ */ new Set(), D = {
      currentRoute: _,
      listening: true,
      addRoute: f,
      removeRoute: S,
      clearRoutes: t.clearRoutes,
      hasRoute: j,
      getRoutes: T,
      resolve: I,
      options: n,
      push: x,
      replace: bt,
      go: $t,
      back: () => $t(-1),
      forward: () => $t(1),
      beforeEach: a.add,
      beforeResolve: c.add,
      afterEach: l.add,
      onError: ae.add,
      isReady: Xe,
      install(m) {
        const y = this;
        m.component("RouterLink", ia), m.component("RouterView", ca), m.config.globalProperties.$router = y, Object.defineProperty(m.config.globalProperties, "$route", {
          enumerable: true,
          get: () => gt(_)
        }), Yt && !Gt && _.value === Lt && (Gt = true, x(i.location).catch((V) => {
        }));
        const C = {};
        for (const V in Lt) Object.defineProperty(C, V, {
          get: () => _.value[V],
          enumerable: true
        });
        m.provide(Er, y), m.provide(Pr, hr(C)), m.provide(gr, _);
        const z = m.unmount;
        E.add(m), m.unmount = function() {
          E.delete(m), E.size < 1 && (h = Lt, Mt && Mt(), Mt = null, _.value = Lt, Gt = false, Kt = false), z();
        };
      }
    };
    function A(m) {
      return m.reduce((y, C) => y.then(() => St(C)), Promise.resolve());
    }
    return D;
  }
  function _a(n, t) {
    const e = [], r = [], i = [], a = Math.max(t.matched.length, n.matched.length);
    for (let c = 0; c < a; c++) {
      const l = t.matched[c];
      l && (n.matched.find((h) => ne(h, l)) ? r.push(l) : e.push(l));
      const _ = n.matched[c];
      _ && (t.matched.find((h) => ne(h, _)) || i.push(_));
    }
    return [
      e,
      r,
      i
    ];
  }
  function da(n) {
    return Zt(Pr);
  }
  const ha = "" + new URL("rapier_wasm3d_bg-CErv1ETD.wasm", import.meta.url).href, wa = async (n = {}, t) => {
    let e;
    if (t.startsWith("data:")) {
      const r = t.replace(/^data:.*?base64,/, "");
      let i;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") i = Buffer.from(r, "base64");
      else if (typeof atob == "function") {
        const a = atob(r);
        i = new Uint8Array(a.length);
        for (let c = 0; c < a.length; c++) i[c] = a.charCodeAt(c);
      } else throw new Error("Cannot decode base64-encoded data URL");
      e = await WebAssembly.instantiate(i, n);
    } else {
      const r = await fetch(t), i = r.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && i.startsWith("application/wasm")) e = await WebAssembly.instantiateStreaming(r, n);
      else {
        const a = await r.arrayBuffer();
        e = await WebAssembly.instantiate(a, n);
      }
    }
    return e.instance.exports;
  };
  let s;
  function ua(n) {
    s = n;
  }
  const H = new Array(128).fill(void 0);
  H.push(void 0, null, true, false);
  function G(n) {
    return H[n];
  }
  let ue = H.length;
  function et(n) {
    ue === H.length && H.push(H.length + 1);
    const t = ue;
    return ue = H[t], H[t] = n, t;
  }
  function jr(n, t) {
    try {
      return n.apply(this, t);
    } catch (e) {
      s.__wbindgen_export_0(et(e));
    }
  }
  function k(n) {
    return n == null;
  }
  let Xt = null;
  function at() {
    return (Xt === null || Xt.buffer.detached === true || Xt.buffer.detached === void 0 && Xt.buffer !== s.memory.buffer) && (Xt = new DataView(s.memory.buffer)), Xt;
  }
  function pa(n) {
    n < 132 || (H[n] = ue, ue = n);
  }
  function me(n) {
    const t = G(n);
    return pa(n), t;
  }
  const ga = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
  let ci = new ga("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  ci.decode();
  let xe = null;
  function ba() {
    return (xe === null || xe.byteLength === 0) && (xe = new Uint8Array(s.memory.buffer)), xe;
  }
  function ma(n, t) {
    return n = n >>> 0, ci.decode(ba().subarray(n, n + t));
  }
  function d(n, t) {
    if (!(n instanceof t)) throw new Error(`expected instance of ${t.name}`);
  }
  let U = 128;
  function K(n) {
    if (U == 1) throw new Error("out of js stack");
    return H[--U] = n, U;
  }
  let Ee = null;
  function fa() {
    return (Ee === null || Ee.byteLength === 0) && (Ee = new Int32Array(s.memory.buffer)), Ee;
  }
  function ya(n, t) {
    return n = n >>> 0, fa().subarray(n / 4, n / 4 + t);
  }
  let Pe = null;
  function li() {
    return (Pe === null || Pe.byteLength === 0) && (Pe = new Float32Array(s.memory.buffer)), Pe;
  }
  function rn(n, t) {
    return n = n >>> 0, li().subarray(n / 4, n / 4 + t);
  }
  let je = null;
  function _i() {
    return (je === null || je.byteLength === 0) && (je = new Uint32Array(s.memory.buffer)), je;
  }
  function va(n, t) {
    return n = n >>> 0, _i().subarray(n / 4, n / 4 + t);
  }
  let _t = 0;
  function de(n, t) {
    const e = t(n.length * 4, 4) >>> 0;
    return _i().set(n, e / 4), _t = n.length, e;
  }
  function Bt(n, t) {
    const e = t(n.length * 4, 4) >>> 0;
    return li().set(n, e / 4), _t = n.length, e;
  }
  const Be = Object.freeze({
    LinX: 0,
    0: "LinX",
    LinY: 1,
    1: "LinY",
    LinZ: 2,
    2: "LinZ",
    AngX: 3,
    3: "AngX",
    AngY: 4,
    4: "AngY",
    AngZ: 5,
    5: "AngZ"
  }), yt = Object.freeze({
    Revolute: 0,
    0: "Revolute",
    Fixed: 1,
    1: "Fixed",
    Prismatic: 2,
    2: "Prismatic",
    Rope: 3,
    3: "Rope",
    Spring: 4,
    4: "Spring",
    Spherical: 5,
    5: "Spherical",
    Generic: 6,
    6: "Generic"
  }), st = Object.freeze({
    Ball: 0,
    0: "Ball",
    Cuboid: 1,
    1: "Cuboid",
    Capsule: 2,
    2: "Capsule",
    Segment: 3,
    3: "Segment",
    Polyline: 4,
    4: "Polyline",
    Triangle: 5,
    5: "Triangle",
    TriMesh: 6,
    6: "TriMesh",
    HeightField: 7,
    7: "HeightField",
    Compound: 8,
    8: "Compound",
    ConvexPolyhedron: 9,
    9: "ConvexPolyhedron",
    Cylinder: 10,
    10: "Cylinder",
    Cone: 11,
    11: "Cone",
    RoundCuboid: 12,
    12: "RoundCuboid",
    RoundTriangle: 13,
    13: "RoundTriangle",
    RoundCylinder: 14,
    14: "RoundCylinder",
    RoundCone: 15,
    15: "RoundCone",
    RoundConvexPolyhedron: 16,
    16: "RoundConvexPolyhedron",
    HalfSpace: 17,
    17: "HalfSpace",
    Voxels: 18,
    18: "Voxels"
  }), er = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawbroadphase_free(n >>> 0, 1));
  class It {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(It.prototype);
      return e.__wbg_ptr = t, er.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, er.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawbroadphase_free(t, 0);
    }
    constructor() {
      const t = s.rawbroadphase_new();
      return this.__wbg_ptr = t >>> 0, er.register(this, this.__wbg_ptr, this), this;
    }
    castRay(t, e, r, i, a, c, l, _, h, u, w, b) {
      try {
        d(t, tt), d(e, J), d(r, X), d(i, p), d(a, p);
        const f = s.rawbroadphase_castRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a.__wbg_ptr, c, l, _, k(h) ? 4294967297 : h >>> 0, !k(u), k(u) ? 0 : u, !k(w), k(w) ? 0 : w, K(b));
        return f === 0 ? void 0 : Fr.__wrap(f);
      } finally {
        H[U++] = void 0;
      }
    }
    castRayAndGetNormal(t, e, r, i, a, c, l, _, h, u, w, b) {
      try {
        d(t, tt), d(e, J), d(r, X), d(i, p), d(a, p);
        const f = s.rawbroadphase_castRayAndGetNormal(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a.__wbg_ptr, c, l, _, k(h) ? 4294967297 : h >>> 0, !k(u), k(u) ? 0 : u, !k(w), k(w) ? 0 : w, K(b));
        return f === 0 ? void 0 : Oe.__wrap(f);
      } finally {
        H[U++] = void 0;
      }
    }
    intersectionsWithRay(t, e, r, i, a, c, l, _, h, u, w, b, f) {
      try {
        d(t, tt), d(e, J), d(r, X), d(i, p), d(a, p), s.rawbroadphase_intersectionsWithRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a.__wbg_ptr, c, l, K(_), h, k(u) ? 4294967297 : u >>> 0, !k(w), k(w) ? 0 : w, !k(b), k(b) ? 0 : b, K(f));
      } finally {
        H[U++] = void 0, H[U++] = void 0;
      }
    }
    intersectionWithShape(t, e, r, i, a, c, l, _, h, u, w) {
      try {
        const S = s.__wbindgen_add_to_stack_pointer(-16);
        d(t, tt), d(e, J), d(r, X), d(i, p), d(a, L), d(c, F), s.rawbroadphase_intersectionWithShape(S, this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a.__wbg_ptr, c.__wbg_ptr, l, k(_) ? 4294967297 : _ >>> 0, !k(h), k(h) ? 0 : h, !k(u), k(u) ? 0 : u, K(w));
        var b = at().getInt32(S + 4 * 0, true), f = at().getFloat64(S + 8 * 1, true);
        return b === 0 ? void 0 : f;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16), H[U++] = void 0;
      }
    }
    projectPoint(t, e, r, i, a, c, l, _, h, u) {
      try {
        d(t, tt), d(e, J), d(r, X), d(i, p);
        const w = s.rawbroadphase_projectPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a, c, k(l) ? 4294967297 : l >>> 0, !k(_), k(_) ? 0 : _, !k(h), k(h) ? 0 : h, K(u));
        return w === 0 ? void 0 : Ae.__wrap(w);
      } finally {
        H[U++] = void 0;
      }
    }
    projectPointAndGetFeature(t, e, r, i, a, c, l, _, h) {
      try {
        d(t, tt), d(e, J), d(r, X), d(i, p);
        const u = s.rawbroadphase_projectPointAndGetFeature(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a, k(c) ? 4294967297 : c >>> 0, !k(l), k(l) ? 0 : l, !k(_), k(_) ? 0 : _, K(h));
        return u === 0 ? void 0 : Ae.__wrap(u);
      } finally {
        H[U++] = void 0;
      }
    }
    intersectionsWithPoint(t, e, r, i, a, c, l, _, h, u) {
      try {
        d(t, tt), d(e, J), d(r, X), d(i, p), s.rawbroadphase_intersectionsWithPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, K(a), c, k(l) ? 4294967297 : l >>> 0, !k(_), k(_) ? 0 : _, !k(h), k(h) ? 0 : h, K(u));
      } finally {
        H[U++] = void 0, H[U++] = void 0;
      }
    }
    castShape(t, e, r, i, a, c, l, _, h, u, w, b, f, S, T) {
      try {
        d(t, tt), d(e, J), d(r, X), d(i, p), d(a, L), d(c, p), d(l, F);
        const j = s.rawbroadphase_castShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _, h, u, w, k(b) ? 4294967297 : b >>> 0, !k(f), k(f) ? 0 : f, !k(S), k(S) ? 0 : S, K(T));
        return j === 0 ? void 0 : Ne.__wrap(j);
      } finally {
        H[U++] = void 0;
      }
    }
    intersectionsWithShape(t, e, r, i, a, c, l, _, h, u, w, b) {
      try {
        d(t, tt), d(e, J), d(r, X), d(i, p), d(a, L), d(c, F), s.rawbroadphase_intersectionsWithShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a.__wbg_ptr, c.__wbg_ptr, K(l), _, k(h) ? 4294967297 : h >>> 0, !k(u), k(u) ? 0 : u, !k(w), k(w) ? 0 : w, K(b));
      } finally {
        H[U++] = void 0, H[U++] = void 0;
      }
    }
    collidersWithAabbIntersectingAabb(t, e, r, i, a, c) {
      try {
        d(t, tt), d(e, J), d(r, X), d(i, p), d(a, p), s.rawbroadphase_collidersWithAabbIntersectingAabb(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a.__wbg_ptr, K(c));
      } finally {
        H[U++] = void 0;
      }
    }
  }
  const nn = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawccdsolver_free(n >>> 0, 1));
  class br {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, nn.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawccdsolver_free(t, 0);
    }
    constructor() {
      const t = s.rawccdsolver_new();
      return this.__wbg_ptr = t >>> 0, nn.register(this, this.__wbg_ptr, this), this;
    }
  }
  const sn = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawcharactercollision_free(n >>> 0, 1));
  class di {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, sn.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawcharactercollision_free(t, 0);
    }
    constructor() {
      const t = s.rawcharactercollision_new();
      return this.__wbg_ptr = t >>> 0, sn.register(this, this.__wbg_ptr, this), this;
    }
    handle() {
      return s.rawcharactercollision_handle(this.__wbg_ptr);
    }
    translationDeltaApplied() {
      const t = s.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
      return p.__wrap(t);
    }
    translationDeltaRemaining() {
      const t = s.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);
      return p.__wrap(t);
    }
    toi() {
      return s.rawcharactercollision_toi(this.__wbg_ptr);
    }
    worldWitness1() {
      const t = s.rawcharactercollision_worldWitness1(this.__wbg_ptr);
      return p.__wrap(t);
    }
    worldWitness2() {
      const t = s.rawcharactercollision_worldWitness2(this.__wbg_ptr);
      return p.__wrap(t);
    }
    worldNormal1() {
      const t = s.rawcharactercollision_worldNormal1(this.__wbg_ptr);
      return p.__wrap(t);
    }
    worldNormal2() {
      const t = s.rawcharactercollision_worldNormal2(this.__wbg_ptr);
      return p.__wrap(t);
    }
  }
  const rr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawcolliderset_free(n >>> 0, 1));
  class X {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(X.prototype);
      return e.__wbg_ptr = t, rr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, rr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawcolliderset_free(t, 0);
    }
    coTranslation(t) {
      const e = s.rawcolliderset_coTranslation(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    coRotation(t) {
      const e = s.rawcolliderset_coRotation(this.__wbg_ptr, t);
      return L.__wrap(e);
    }
    coTranslationWrtParent(t) {
      const e = s.rawcolliderset_coTranslationWrtParent(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    coRotationWrtParent(t) {
      const e = s.rawcolliderset_coRotationWrtParent(this.__wbg_ptr, t);
      return e === 0 ? void 0 : L.__wrap(e);
    }
    coSetTranslation(t, e, r, i) {
      s.rawcolliderset_coSetTranslation(this.__wbg_ptr, t, e, r, i);
    }
    coSetTranslationWrtParent(t, e, r, i) {
      s.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr, t, e, r, i);
    }
    coSetRotation(t, e, r, i, a) {
      s.rawcolliderset_coSetRotation(this.__wbg_ptr, t, e, r, i, a);
    }
    coSetRotationWrtParent(t, e, r, i, a) {
      s.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr, t, e, r, i, a);
    }
    coIsSensor(t) {
      return s.rawcolliderset_coIsSensor(this.__wbg_ptr, t) !== 0;
    }
    coShapeType(t) {
      return s.rawcolliderset_coShapeType(this.__wbg_ptr, t);
    }
    coHalfspaceNormal(t) {
      const e = s.rawcolliderset_coHalfspaceNormal(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    coHalfExtents(t) {
      const e = s.rawcolliderset_coHalfExtents(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    coSetHalfExtents(t, e) {
      d(e, p), s.rawcolliderset_coSetHalfExtents(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    coRadius(t) {
      const e = s.rawcolliderset_coRadius(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    coSetRadius(t, e) {
      s.rawcolliderset_coSetRadius(this.__wbg_ptr, t, e);
    }
    coHalfHeight(t) {
      const e = s.rawcolliderset_coHalfHeight(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    coSetHalfHeight(t, e) {
      s.rawcolliderset_coSetHalfHeight(this.__wbg_ptr, t, e);
    }
    coRoundRadius(t) {
      const e = s.rawcolliderset_coRoundRadius(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    coSetRoundRadius(t, e) {
      s.rawcolliderset_coSetRoundRadius(this.__wbg_ptr, t, e);
    }
    coVoxelData(t) {
      try {
        const i = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawcolliderset_coVoxelData(i, this.__wbg_ptr, t);
        var e = at().getInt32(i + 4 * 0, true), r = at().getInt32(i + 4 * 1, true);
        let a;
        return e !== 0 && (a = ya(e, r).slice(), s.__wbindgen_export_1(e, r * 4, 4)), a;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coVoxelSize(t) {
      const e = s.rawcolliderset_coVoxelSize(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    coSetVoxel(t, e, r, i, a) {
      s.rawcolliderset_coSetVoxel(this.__wbg_ptr, t, e, r, i, a);
    }
    coPropagateVoxelChange(t, e, r, i, a, c, l, _) {
      s.rawcolliderset_coPropagateVoxelChange(this.__wbg_ptr, t, e, r, i, a, c, l, _);
    }
    coCombineVoxelStates(t, e, r, i, a) {
      s.rawcolliderset_coCombineVoxelStates(this.__wbg_ptr, t, e, r, i, a);
    }
    coVertices(t) {
      try {
        const i = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawcolliderset_coVertices(i, this.__wbg_ptr, t);
        var e = at().getInt32(i + 4 * 0, true), r = at().getInt32(i + 4 * 1, true);
        let a;
        return e !== 0 && (a = rn(e, r).slice(), s.__wbindgen_export_1(e, r * 4, 4)), a;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coIndices(t) {
      try {
        const i = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawcolliderset_coIndices(i, this.__wbg_ptr, t);
        var e = at().getInt32(i + 4 * 0, true), r = at().getInt32(i + 4 * 1, true);
        let a;
        return e !== 0 && (a = va(e, r).slice(), s.__wbindgen_export_1(e, r * 4, 4)), a;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coTriMeshFlags(t) {
      const e = s.rawcolliderset_coTriMeshFlags(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    coHeightFieldFlags(t) {
      const e = s.rawcolliderset_coHeightFieldFlags(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    coHeightfieldHeights(t) {
      try {
        const i = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawcolliderset_coHeightfieldHeights(i, this.__wbg_ptr, t);
        var e = at().getInt32(i + 4 * 0, true), r = at().getInt32(i + 4 * 1, true);
        let a;
        return e !== 0 && (a = rn(e, r).slice(), s.__wbindgen_export_1(e, r * 4, 4)), a;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coHeightfieldScale(t) {
      const e = s.rawcolliderset_coHeightfieldScale(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    coHeightfieldNRows(t) {
      const e = s.rawcolliderset_coHeightfieldNRows(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    coHeightfieldNCols(t) {
      const e = s.rawcolliderset_coHeightfieldNCols(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    coParent(t) {
      try {
        const i = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawcolliderset_coParent(i, this.__wbg_ptr, t);
        var e = at().getInt32(i + 4 * 0, true), r = at().getFloat64(i + 8 * 1, true);
        return e === 0 ? void 0 : r;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coSetEnabled(t, e) {
      s.rawcolliderset_coSetEnabled(this.__wbg_ptr, t, e);
    }
    coIsEnabled(t) {
      return s.rawcolliderset_coIsEnabled(this.__wbg_ptr, t) !== 0;
    }
    coSetContactSkin(t, e) {
      s.rawcolliderset_coSetContactSkin(this.__wbg_ptr, t, e);
    }
    coContactSkin(t) {
      return s.rawcolliderset_coContactSkin(this.__wbg_ptr, t);
    }
    coFriction(t) {
      return s.rawcolliderset_coFriction(this.__wbg_ptr, t);
    }
    coRestitution(t) {
      return s.rawcolliderset_coRestitution(this.__wbg_ptr, t);
    }
    coDensity(t) {
      return s.rawcolliderset_coDensity(this.__wbg_ptr, t);
    }
    coMass(t) {
      return s.rawcolliderset_coMass(this.__wbg_ptr, t);
    }
    coVolume(t) {
      return s.rawcolliderset_coVolume(this.__wbg_ptr, t);
    }
    coCollisionGroups(t) {
      return s.rawcolliderset_coCollisionGroups(this.__wbg_ptr, t) >>> 0;
    }
    coSolverGroups(t) {
      return s.rawcolliderset_coSolverGroups(this.__wbg_ptr, t) >>> 0;
    }
    coActiveHooks(t) {
      return s.rawcolliderset_coActiveHooks(this.__wbg_ptr, t) >>> 0;
    }
    coActiveCollisionTypes(t) {
      return s.rawcolliderset_coActiveCollisionTypes(this.__wbg_ptr, t);
    }
    coActiveEvents(t) {
      return s.rawcolliderset_coActiveEvents(this.__wbg_ptr, t) >>> 0;
    }
    coContactForceEventThreshold(t) {
      return s.rawcolliderset_coContactForceEventThreshold(this.__wbg_ptr, t);
    }
    coContainsPoint(t, e) {
      return d(e, p), s.rawcolliderset_coContainsPoint(this.__wbg_ptr, t, e.__wbg_ptr) !== 0;
    }
    coCastShape(t, e, r, i, a, c, l, _, h) {
      d(e, p), d(r, F), d(i, p), d(a, L), d(c, p);
      const u = s.rawcolliderset_coCastShape(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a.__wbg_ptr, c.__wbg_ptr, l, _, h);
      return u === 0 ? void 0 : We.__wrap(u);
    }
    coCastCollider(t, e, r, i, a, c, l) {
      d(e, p), d(i, p);
      const _ = s.rawcolliderset_coCastCollider(this.__wbg_ptr, t, e.__wbg_ptr, r, i.__wbg_ptr, a, c, l);
      return _ === 0 ? void 0 : Ne.__wrap(_);
    }
    coIntersectsShape(t, e, r, i) {
      return d(e, F), d(r, p), d(i, L), s.rawcolliderset_coIntersectsShape(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr) !== 0;
    }
    coContactShape(t, e, r, i, a) {
      d(e, F), d(r, p), d(i, L);
      const c = s.rawcolliderset_coContactShape(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a);
      return c === 0 ? void 0 : fe.__wrap(c);
    }
    coContactCollider(t, e, r) {
      const i = s.rawcolliderset_coContactCollider(this.__wbg_ptr, t, e, r);
      return i === 0 ? void 0 : fe.__wrap(i);
    }
    coProjectPoint(t, e, r) {
      d(e, p);
      const i = s.rawcolliderset_coProjectPoint(this.__wbg_ptr, t, e.__wbg_ptr, r);
      return He.__wrap(i);
    }
    coIntersectsRay(t, e, r, i) {
      return d(e, p), d(r, p), s.rawcolliderset_coIntersectsRay(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, i) !== 0;
    }
    coCastRay(t, e, r, i, a) {
      return d(e, p), d(r, p), s.rawcolliderset_coCastRay(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, i, a);
    }
    coCastRayAndGetNormal(t, e, r, i, a) {
      d(e, p), d(r, p);
      const c = s.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, i, a);
      return c === 0 ? void 0 : Ge.__wrap(c);
    }
    coSetSensor(t, e) {
      s.rawcolliderset_coSetSensor(this.__wbg_ptr, t, e);
    }
    coSetRestitution(t, e) {
      s.rawcolliderset_coSetRestitution(this.__wbg_ptr, t, e);
    }
    coSetFriction(t, e) {
      s.rawcolliderset_coSetFriction(this.__wbg_ptr, t, e);
    }
    coFrictionCombineRule(t) {
      return s.rawcolliderset_coFrictionCombineRule(this.__wbg_ptr, t) >>> 0;
    }
    coSetFrictionCombineRule(t, e) {
      s.rawcolliderset_coSetFrictionCombineRule(this.__wbg_ptr, t, e);
    }
    coRestitutionCombineRule(t) {
      return s.rawcolliderset_coRestitutionCombineRule(this.__wbg_ptr, t) >>> 0;
    }
    coSetRestitutionCombineRule(t, e) {
      s.rawcolliderset_coSetRestitutionCombineRule(this.__wbg_ptr, t, e);
    }
    coSetCollisionGroups(t, e) {
      s.rawcolliderset_coSetCollisionGroups(this.__wbg_ptr, t, e);
    }
    coSetSolverGroups(t, e) {
      s.rawcolliderset_coSetSolverGroups(this.__wbg_ptr, t, e);
    }
    coSetActiveHooks(t, e) {
      s.rawcolliderset_coSetActiveHooks(this.__wbg_ptr, t, e);
    }
    coSetActiveEvents(t, e) {
      s.rawcolliderset_coSetActiveEvents(this.__wbg_ptr, t, e);
    }
    coSetActiveCollisionTypes(t, e) {
      s.rawcolliderset_coSetActiveCollisionTypes(this.__wbg_ptr, t, e);
    }
    coSetShape(t, e) {
      d(e, F), s.rawcolliderset_coSetShape(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    coSetContactForceEventThreshold(t, e) {
      s.rawcolliderset_coSetContactForceEventThreshold(this.__wbg_ptr, t, e);
    }
    coSetDensity(t, e) {
      s.rawcolliderset_coSetDensity(this.__wbg_ptr, t, e);
    }
    coSetMass(t, e) {
      s.rawcolliderset_coSetMass(this.__wbg_ptr, t, e);
    }
    coSetMassProperties(t, e, r, i, a) {
      d(r, p), d(i, p), d(a, L), s.rawcolliderset_coSetMassProperties(this.__wbg_ptr, t, e, r.__wbg_ptr, i.__wbg_ptr, a.__wbg_ptr);
    }
    constructor() {
      const t = s.rawcolliderset_new();
      return this.__wbg_ptr = t >>> 0, rr.register(this, this.__wbg_ptr, this), this;
    }
    len() {
      return s.rawcolliderset_len(this.__wbg_ptr) >>> 0;
    }
    contains(t) {
      return s.rawcolliderset_contains(this.__wbg_ptr, t) !== 0;
    }
    createCollider(t, e, r, i, a, c, l, _, h, u, w, b, f, S, T, j, I, v, R, x, bt, ut, Q, kt, St) {
      try {
        const Pt = s.__wbindgen_add_to_stack_pointer(-16);
        d(e, F), d(r, p), d(i, L), d(l, p), d(_, p), d(h, L), d(St, J), s.rawcolliderset_createCollider(Pt, this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a, c, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr, u, w, b, f, S, T, j, I, v, R, x, bt, ut, Q, kt, St.__wbg_ptr);
        var Et = at().getInt32(Pt + 4 * 0, true), Dt = at().getFloat64(Pt + 8 * 1, true);
        return Et === 0 ? void 0 : Dt;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    remove(t, e, r, i) {
      d(e, Tt), d(r, J), s.rawcolliderset_remove(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, i);
    }
    isHandleValid(t) {
      return s.rawcolliderset_contains(this.__wbg_ptr, t) !== 0;
    }
    forEachColliderHandle(t) {
      try {
        s.rawcolliderset_forEachColliderHandle(this.__wbg_ptr, K(t));
      } finally {
        H[U++] = void 0;
      }
    }
  }
  const an = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawcollidershapecasthit_free(n >>> 0, 1));
  class Ne {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ne.prototype);
      return e.__wbg_ptr = t, an.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, an.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawcollidershapecasthit_free(t, 0);
    }
    colliderHandle() {
      return s.rawcharactercollision_handle(this.__wbg_ptr);
    }
    time_of_impact() {
      return s.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    witness1() {
      const t = s.rawcollidershapecasthit_witness1(this.__wbg_ptr);
      return p.__wrap(t);
    }
    witness2() {
      const t = s.rawcollidershapecasthit_witness2(this.__wbg_ptr);
      return p.__wrap(t);
    }
    normal1() {
      const t = s.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
      return p.__wrap(t);
    }
    normal2() {
      const t = s.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);
      return p.__wrap(t);
    }
  }
  const on = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawcontactforceevent_free(n >>> 0, 1));
  class Ar {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ar.prototype);
      return e.__wbg_ptr = t, on.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, on.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawcontactforceevent_free(t, 0);
    }
    collider1() {
      return s.rawcharactercollision_handle(this.__wbg_ptr);
    }
    collider2() {
      return s.rawcontactforceevent_collider2(this.__wbg_ptr);
    }
    total_force() {
      const t = s.rawcontactforceevent_total_force(this.__wbg_ptr);
      return p.__wrap(t);
    }
    total_force_magnitude() {
      return s.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr);
    }
    max_force_direction() {
      const t = s.rawcontactforceevent_max_force_direction(this.__wbg_ptr);
      return p.__wrap(t);
    }
    max_force_magnitude() {
      return s.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr);
    }
  }
  const cn = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawcontactmanifold_free(n >>> 0, 1));
  class Ir {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ir.prototype);
      return e.__wbg_ptr = t, cn.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, cn.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawcontactmanifold_free(t, 0);
    }
    normal() {
      const t = s.rawcontactmanifold_normal(this.__wbg_ptr);
      return p.__wrap(t);
    }
    local_n1() {
      const t = s.rawcontactmanifold_local_n1(this.__wbg_ptr);
      return p.__wrap(t);
    }
    local_n2() {
      const t = s.rawcontactmanifold_local_n2(this.__wbg_ptr);
      return p.__wrap(t);
    }
    subshape1() {
      return s.rawcontactmanifold_subshape1(this.__wbg_ptr) >>> 0;
    }
    subshape2() {
      return s.rawcontactmanifold_subshape2(this.__wbg_ptr) >>> 0;
    }
    num_contacts() {
      return s.rawcontactmanifold_num_contacts(this.__wbg_ptr) >>> 0;
    }
    contact_local_p1(t) {
      const e = s.rawcontactmanifold_contact_local_p1(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    contact_local_p2(t) {
      const e = s.rawcontactmanifold_contact_local_p2(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    contact_dist(t) {
      return s.rawcontactmanifold_contact_dist(this.__wbg_ptr, t);
    }
    contact_fid1(t) {
      return s.rawcontactmanifold_contact_fid1(this.__wbg_ptr, t) >>> 0;
    }
    contact_fid2(t) {
      return s.rawcontactmanifold_contact_fid2(this.__wbg_ptr, t) >>> 0;
    }
    contact_impulse(t) {
      return s.rawcontactmanifold_contact_impulse(this.__wbg_ptr, t);
    }
    contact_tangent_impulse_x(t) {
      return s.rawcontactmanifold_contact_tangent_impulse_x(this.__wbg_ptr, t);
    }
    contact_tangent_impulse_y(t) {
      return s.rawcontactmanifold_contact_tangent_impulse_y(this.__wbg_ptr, t);
    }
    num_solver_contacts() {
      return s.rawcontactmanifold_num_solver_contacts(this.__wbg_ptr) >>> 0;
    }
    solver_contact_point(t) {
      const e = s.rawcontactmanifold_solver_contact_point(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    solver_contact_dist(t) {
      return s.rawcontactmanifold_solver_contact_dist(this.__wbg_ptr, t);
    }
    solver_contact_friction(t) {
      return s.rawcontactmanifold_solver_contact_friction(this.__wbg_ptr, t);
    }
    solver_contact_restitution(t) {
      return s.rawcontactmanifold_solver_contact_restitution(this.__wbg_ptr, t);
    }
    solver_contact_tangent_velocity(t) {
      const e = s.rawcontactmanifold_solver_contact_tangent_velocity(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
  }
  const ln = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawcontactpair_free(n >>> 0, 1));
  class zr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(zr.prototype);
      return e.__wbg_ptr = t, ln.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ln.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawcontactpair_free(t, 0);
    }
    collider1() {
      return s.rawcontactpair_collider1(this.__wbg_ptr);
    }
    collider2() {
      return s.rawcontactpair_collider2(this.__wbg_ptr);
    }
    numContactManifolds() {
      return s.rawcontactpair_numContactManifolds(this.__wbg_ptr) >>> 0;
    }
    contactManifold(t) {
      const e = s.rawcontactpair_contactManifold(this.__wbg_ptr, t);
      return e === 0 ? void 0 : Ir.__wrap(e);
    }
  }
  const _n = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawdebugrenderpipeline_free(n >>> 0, 1));
  class Sa {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, _n.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawdebugrenderpipeline_free(t, 0);
    }
    constructor() {
      const t = s.rawdebugrenderpipeline_new();
      return this.__wbg_ptr = t >>> 0, _n.register(this, this.__wbg_ptr, this), this;
    }
    vertices() {
      const t = s.rawdebugrenderpipeline_vertices(this.__wbg_ptr);
      return me(t);
    }
    colors() {
      const t = s.rawdebugrenderpipeline_colors(this.__wbg_ptr);
      return me(t);
    }
    render(t, e, r, i, a, c, l) {
      try {
        d(t, J), d(e, X), d(r, zt), d(i, Ft), d(a, tt), s.rawdebugrenderpipeline_render(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a.__wbg_ptr, c, K(l));
      } finally {
        H[U++] = void 0;
      }
    }
  }
  const dn = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawdeserializedworld_free(n >>> 0, 1));
  class Tr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Tr.prototype);
      return e.__wbg_ptr = t, dn.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, dn.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawdeserializedworld_free(t, 0);
    }
    takeGravity() {
      const t = s.rawdeserializedworld_takeGravity(this.__wbg_ptr);
      return t === 0 ? void 0 : p.__wrap(t);
    }
    takeIntegrationParameters() {
      const t = s.rawdeserializedworld_takeIntegrationParameters(this.__wbg_ptr);
      return t === 0 ? void 0 : Ut.__wrap(t);
    }
    takeIslandManager() {
      const t = s.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);
      return t === 0 ? void 0 : Tt.__wrap(t);
    }
    takeBroadPhase() {
      const t = s.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);
      return t === 0 ? void 0 : It.__wrap(t);
    }
    takeNarrowPhase() {
      const t = s.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);
      return t === 0 ? void 0 : tt.__wrap(t);
    }
    takeBodies() {
      const t = s.rawdeserializedworld_takeBodies(this.__wbg_ptr);
      return t === 0 ? void 0 : J.__wrap(t);
    }
    takeColliders() {
      const t = s.rawdeserializedworld_takeColliders(this.__wbg_ptr);
      return t === 0 ? void 0 : X.__wrap(t);
    }
    takeImpulseJoints() {
      const t = s.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);
      return t === 0 ? void 0 : zt.__wrap(t);
    }
    takeMultibodyJoints() {
      const t = s.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);
      return t === 0 ? void 0 : Ft.__wrap(t);
    }
  }
  const hn = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawdynamicraycastvehiclecontroller_free(n >>> 0, 1));
  class Ra {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, hn.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawdynamicraycastvehiclecontroller_free(t, 0);
    }
    constructor(t) {
      const e = s.rawdynamicraycastvehiclecontroller_new(t);
      return this.__wbg_ptr = e >>> 0, hn.register(this, this.__wbg_ptr, this), this;
    }
    current_vehicle_speed() {
      return s.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr);
    }
    chassis() {
      return s.rawdynamicraycastvehiclecontroller_chassis(this.__wbg_ptr);
    }
    index_up_axis() {
      return s.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr) >>> 0;
    }
    set_index_up_axis(t) {
      s.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr, t);
    }
    index_forward_axis() {
      return s.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr) >>> 0;
    }
    set_index_forward_axis(t) {
      s.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr, t);
    }
    add_wheel(t, e, r, i, a) {
      d(t, p), d(e, p), d(r, p), s.rawdynamicraycastvehiclecontroller_add_wheel(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i, a);
    }
    num_wheels() {
      return s.rawdynamicraycastvehiclecontroller_num_wheels(this.__wbg_ptr) >>> 0;
    }
    update_vehicle(t, e, r, i, a, c, l, _) {
      try {
        d(e, It), d(r, tt), d(i, J), d(a, X), s.rawdynamicraycastvehiclecontroller_update_vehicle(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a.__wbg_ptr, c, k(l) ? 4294967297 : l >>> 0, K(_));
      } finally {
        H[U++] = void 0;
      }
    }
    wheel_chassis_connection_point_cs(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    set_wheel_chassis_connection_point_cs(t, e) {
      d(e, p), s.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    wheel_suspension_rest_length(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_suspension_rest_length(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length(this.__wbg_ptr, t, e);
    }
    wheel_max_suspension_travel(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_max_suspension_travel(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel(this.__wbg_ptr, t, e);
    }
    wheel_radius(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_radius(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_radius(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_radius(this.__wbg_ptr, t, e);
    }
    wheel_suspension_stiffness(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_suspension_stiffness(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness(this.__wbg_ptr, t, e);
    }
    wheel_suspension_compression(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_suspension_compression(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_suspension_compression(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression(this.__wbg_ptr, t, e);
    }
    wheel_suspension_relaxation(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_suspension_relaxation(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation(this.__wbg_ptr, t, e);
    }
    wheel_max_suspension_force(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_max_suspension_force(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force(this.__wbg_ptr, t, e);
    }
    wheel_brake(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_brake(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_brake(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_brake(this.__wbg_ptr, t, e);
    }
    wheel_steering(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_steering(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_steering(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_steering(this.__wbg_ptr, t, e);
    }
    wheel_engine_force(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_engine_force(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_engine_force(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_engine_force(this.__wbg_ptr, t, e);
    }
    wheel_direction_cs(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_direction_cs(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    set_wheel_direction_cs(t, e) {
      d(e, p), s.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    wheel_axle_cs(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_axle_cs(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    set_wheel_axle_cs(t, e) {
      d(e, p), s.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    wheel_friction_slip(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_friction_slip(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_friction_slip(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip(this.__wbg_ptr, t, e);
    }
    wheel_side_friction_stiffness(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    set_wheel_side_friction_stiffness(t, e) {
      s.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness(this.__wbg_ptr, t, e);
    }
    wheel_rotation(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_rotation(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    wheel_forward_impulse(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_forward_impulse(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    wheel_side_impulse(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_side_impulse(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    wheel_suspension_force(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_suspension_force(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    wheel_contact_normal_ws(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    wheel_contact_point_ws(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    wheel_suspension_length(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_suspension_length(this.__wbg_ptr, t);
      return e === 4294967297 ? void 0 : e;
    }
    wheel_hard_point_ws(t) {
      const e = s.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws(this.__wbg_ptr, t);
      return e === 0 ? void 0 : p.__wrap(e);
    }
    wheel_is_in_contact(t) {
      return s.rawdynamicraycastvehiclecontroller_wheel_is_in_contact(this.__wbg_ptr, t) !== 0;
    }
    wheel_ground_object(t) {
      try {
        const i = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawdynamicraycastvehiclecontroller_wheel_ground_object(i, this.__wbg_ptr, t);
        var e = at().getInt32(i + 4 * 0, true), r = at().getFloat64(i + 8 * 1, true);
        return e === 0 ? void 0 : r;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  const wn = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_raweventqueue_free(n >>> 0, 1));
  class hi {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, wn.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_raweventqueue_free(t, 0);
    }
    constructor(t) {
      const e = s.raweventqueue_new(t);
      return this.__wbg_ptr = e >>> 0, wn.register(this, this.__wbg_ptr, this), this;
    }
    drainCollisionEvents(t) {
      try {
        s.raweventqueue_drainCollisionEvents(this.__wbg_ptr, K(t));
      } finally {
        H[U++] = void 0;
      }
    }
    drainContactForceEvents(t) {
      try {
        s.raweventqueue_drainContactForceEvents(this.__wbg_ptr, K(t));
      } finally {
        H[U++] = void 0;
      }
    }
    clear() {
      s.raweventqueue_clear(this.__wbg_ptr);
    }
  }
  const un = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawgenericjoint_free(n >>> 0, 1));
  class ot {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ot.prototype);
      return e.__wbg_ptr = t, un.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, un.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawgenericjoint_free(t, 0);
    }
    static generic(t, e, r, i) {
      d(t, p), d(e, p), d(r, p);
      const a = s.rawgenericjoint_generic(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i);
      return a === 0 ? void 0 : ot.__wrap(a);
    }
    static spring(t, e, r, i, a) {
      d(i, p), d(a, p);
      const c = s.rawgenericjoint_spring(t, e, r, i.__wbg_ptr, a.__wbg_ptr);
      return ot.__wrap(c);
    }
    static rope(t, e, r) {
      d(e, p), d(r, p);
      const i = s.rawgenericjoint_rope(t, e.__wbg_ptr, r.__wbg_ptr);
      return ot.__wrap(i);
    }
    static spherical(t, e) {
      d(t, p), d(e, p);
      const r = s.rawgenericjoint_spherical(t.__wbg_ptr, e.__wbg_ptr);
      return ot.__wrap(r);
    }
    static prismatic(t, e, r, i, a, c) {
      d(t, p), d(e, p), d(r, p);
      const l = s.rawgenericjoint_prismatic(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i, a, c);
      return l === 0 ? void 0 : ot.__wrap(l);
    }
    static fixed(t, e, r, i) {
      d(t, p), d(e, L), d(r, p), d(i, L);
      const a = s.rawgenericjoint_fixed(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr);
      return ot.__wrap(a);
    }
    static revolute(t, e, r) {
      d(t, p), d(e, p), d(r, p);
      const i = s.rawgenericjoint_revolute(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr);
      return i === 0 ? void 0 : ot.__wrap(i);
    }
  }
  const nr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawimpulsejointset_free(n >>> 0, 1));
  class zt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(zt.prototype);
      return e.__wbg_ptr = t, nr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, nr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawimpulsejointset_free(t, 0);
    }
    jointType(t) {
      return s.rawimpulsejointset_jointType(this.__wbg_ptr, t);
    }
    jointBodyHandle1(t) {
      return s.rawimpulsejointset_jointBodyHandle1(this.__wbg_ptr, t);
    }
    jointBodyHandle2(t) {
      return s.rawimpulsejointset_jointBodyHandle2(this.__wbg_ptr, t);
    }
    jointFrameX1(t) {
      const e = s.rawimpulsejointset_jointFrameX1(this.__wbg_ptr, t);
      return L.__wrap(e);
    }
    jointFrameX2(t) {
      const e = s.rawimpulsejointset_jointFrameX2(this.__wbg_ptr, t);
      return L.__wrap(e);
    }
    jointAnchor1(t) {
      const e = s.rawimpulsejointset_jointAnchor1(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    jointAnchor2(t) {
      const e = s.rawimpulsejointset_jointAnchor2(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    jointSetAnchor1(t, e) {
      d(e, p), s.rawimpulsejointset_jointSetAnchor1(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    jointSetAnchor2(t, e) {
      d(e, p), s.rawimpulsejointset_jointSetAnchor2(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    jointContactsEnabled(t) {
      return s.rawimpulsejointset_jointContactsEnabled(this.__wbg_ptr, t) !== 0;
    }
    jointSetContactsEnabled(t, e) {
      s.rawimpulsejointset_jointSetContactsEnabled(this.__wbg_ptr, t, e);
    }
    jointLimitsEnabled(t, e) {
      return s.rawimpulsejointset_jointLimitsEnabled(this.__wbg_ptr, t, e) !== 0;
    }
    jointLimitsMin(t, e) {
      return s.rawimpulsejointset_jointLimitsMin(this.__wbg_ptr, t, e);
    }
    jointLimitsMax(t, e) {
      return s.rawimpulsejointset_jointLimitsMax(this.__wbg_ptr, t, e);
    }
    jointSetLimits(t, e, r, i) {
      s.rawimpulsejointset_jointSetLimits(this.__wbg_ptr, t, e, r, i);
    }
    jointConfigureMotorModel(t, e, r) {
      s.rawimpulsejointset_jointConfigureMotorModel(this.__wbg_ptr, t, e, r);
    }
    jointConfigureMotorVelocity(t, e, r, i) {
      s.rawimpulsejointset_jointConfigureMotorVelocity(this.__wbg_ptr, t, e, r, i);
    }
    jointConfigureMotorPosition(t, e, r, i, a) {
      s.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr, t, e, r, i, a);
    }
    jointConfigureMotor(t, e, r, i, a, c) {
      s.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr, t, e, r, i, a, c);
    }
    constructor() {
      const t = s.rawimpulsejointset_new();
      return this.__wbg_ptr = t >>> 0, nr.register(this, this.__wbg_ptr, this), this;
    }
    createJoint(t, e, r, i) {
      return d(t, ot), s.rawimpulsejointset_createJoint(this.__wbg_ptr, t.__wbg_ptr, e, r, i);
    }
    remove(t, e) {
      s.rawimpulsejointset_remove(this.__wbg_ptr, t, e);
    }
    len() {
      return s.rawimpulsejointset_len(this.__wbg_ptr) >>> 0;
    }
    contains(t) {
      return s.rawimpulsejointset_contains(this.__wbg_ptr, t) !== 0;
    }
    forEachJointHandle(t) {
      try {
        s.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr, K(t));
      } finally {
        H[U++] = void 0;
      }
    }
    forEachJointAttachedToRigidBody(t, e) {
      try {
        s.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, t, K(e));
      } finally {
        H[U++] = void 0;
      }
    }
  }
  const ir = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawintegrationparameters_free(n >>> 0, 1));
  class Ut {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ut.prototype);
      return e.__wbg_ptr = t, ir.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ir.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawintegrationparameters_free(t, 0);
    }
    constructor() {
      const t = s.rawintegrationparameters_new();
      return this.__wbg_ptr = t >>> 0, ir.register(this, this.__wbg_ptr, this), this;
    }
    get dt() {
      return s.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    get contact_erp() {
      return s.rawintegrationparameters_contact_erp(this.__wbg_ptr);
    }
    get normalizedAllowedLinearError() {
      return s.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr);
    }
    get normalizedPredictionDistance() {
      return s.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr);
    }
    get numSolverIterations() {
      return s.rawintegrationparameters_numSolverIterations(this.__wbg_ptr) >>> 0;
    }
    get numAdditionalFrictionIterations() {
      return s.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr) >>> 0;
    }
    get numInternalPgsIterations() {
      return s.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr) >>> 0;
    }
    get minIslandSize() {
      return s.rawintegrationparameters_minIslandSize(this.__wbg_ptr) >>> 0;
    }
    get maxCcdSubsteps() {
      return s.rawintegrationparameters_maxCcdSubsteps(this.__wbg_ptr) >>> 0;
    }
    get lengthUnit() {
      return s.rawintegrationparameters_lengthUnit(this.__wbg_ptr);
    }
    set dt(t) {
      s.rawintegrationparameters_set_dt(this.__wbg_ptr, t);
    }
    set contact_natural_frequency(t) {
      s.rawintegrationparameters_set_contact_natural_frequency(this.__wbg_ptr, t);
    }
    set normalizedAllowedLinearError(t) {
      s.rawintegrationparameters_set_normalizedAllowedLinearError(this.__wbg_ptr, t);
    }
    set normalizedPredictionDistance(t) {
      s.rawintegrationparameters_set_normalizedPredictionDistance(this.__wbg_ptr, t);
    }
    set numSolverIterations(t) {
      s.rawintegrationparameters_set_numSolverIterations(this.__wbg_ptr, t);
    }
    set numAdditionalFrictionIterations(t) {
      s.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr, t);
    }
    set numInternalPgsIterations(t) {
      s.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr, t);
    }
    set minIslandSize(t) {
      s.rawintegrationparameters_set_minIslandSize(this.__wbg_ptr, t);
    }
    set maxCcdSubsteps(t) {
      s.rawintegrationparameters_set_maxCcdSubsteps(this.__wbg_ptr, t);
    }
    set lengthUnit(t) {
      s.rawintegrationparameters_set_lengthUnit(this.__wbg_ptr, t);
    }
    switchToStandardPgsSolver() {
      s.rawintegrationparameters_switchToStandardPgsSolver(this.__wbg_ptr);
    }
    switchToSmallStepsPgsSolver() {
      s.rawintegrationparameters_switchToSmallStepsPgsSolver(this.__wbg_ptr);
    }
    switchToSmallStepsPgsSolverWithoutWarmstart() {
      s.rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart(this.__wbg_ptr);
    }
  }
  const sr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawislandmanager_free(n >>> 0, 1));
  class Tt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Tt.prototype);
      return e.__wbg_ptr = t, sr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, sr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawislandmanager_free(t, 0);
    }
    constructor() {
      const t = s.rawislandmanager_new();
      return this.__wbg_ptr = t >>> 0, sr.register(this, this.__wbg_ptr, this), this;
    }
    forEachActiveRigidBodyHandle(t) {
      try {
        s.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr, K(t));
      } finally {
        H[U++] = void 0;
      }
    }
  }
  const pn = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawkinematiccharactercontroller_free(n >>> 0, 1));
  class Ca {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, pn.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawkinematiccharactercontroller_free(t, 0);
    }
    constructor(t) {
      const e = s.rawkinematiccharactercontroller_new(t);
      return this.__wbg_ptr = e >>> 0, pn.register(this, this.__wbg_ptr, this), this;
    }
    up() {
      const t = s.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
      return p.__wrap(t);
    }
    setUp(t) {
      d(t, p), s.rawkinematiccharactercontroller_setUp(this.__wbg_ptr, t.__wbg_ptr);
    }
    normalNudgeFactor() {
      return s.rawkinematiccharactercontroller_normalNudgeFactor(this.__wbg_ptr);
    }
    setNormalNudgeFactor(t) {
      s.rawkinematiccharactercontroller_setNormalNudgeFactor(this.__wbg_ptr, t);
    }
    offset() {
      return s.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    setOffset(t) {
      s.rawkinematiccharactercontroller_setOffset(this.__wbg_ptr, t);
    }
    slideEnabled() {
      return s.rawkinematiccharactercontroller_slideEnabled(this.__wbg_ptr) !== 0;
    }
    setSlideEnabled(t) {
      s.rawkinematiccharactercontroller_setSlideEnabled(this.__wbg_ptr, t);
    }
    autostepMaxHeight() {
      const t = s.rawkinematiccharactercontroller_autostepMaxHeight(this.__wbg_ptr);
      return t === 4294967297 ? void 0 : t;
    }
    autostepMinWidth() {
      const t = s.rawkinematiccharactercontroller_autostepMinWidth(this.__wbg_ptr);
      return t === 4294967297 ? void 0 : t;
    }
    autostepIncludesDynamicBodies() {
      const t = s.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.__wbg_ptr);
      return t === 16777215 ? void 0 : t !== 0;
    }
    autostepEnabled() {
      return s.rawkinematiccharactercontroller_autostepEnabled(this.__wbg_ptr) !== 0;
    }
    enableAutostep(t, e, r) {
      s.rawkinematiccharactercontroller_enableAutostep(this.__wbg_ptr, t, e, r);
    }
    disableAutostep() {
      s.rawkinematiccharactercontroller_disableAutostep(this.__wbg_ptr);
    }
    maxSlopeClimbAngle() {
      return s.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr);
    }
    setMaxSlopeClimbAngle(t) {
      s.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.__wbg_ptr, t);
    }
    minSlopeSlideAngle() {
      return s.rawkinematiccharactercontroller_minSlopeSlideAngle(this.__wbg_ptr);
    }
    setMinSlopeSlideAngle(t) {
      s.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.__wbg_ptr, t);
    }
    snapToGroundDistance() {
      const t = s.rawkinematiccharactercontroller_snapToGroundDistance(this.__wbg_ptr);
      return t === 4294967297 ? void 0 : t;
    }
    enableSnapToGround(t) {
      s.rawkinematiccharactercontroller_enableSnapToGround(this.__wbg_ptr, t);
    }
    disableSnapToGround() {
      s.rawkinematiccharactercontroller_disableSnapToGround(this.__wbg_ptr);
    }
    snapToGroundEnabled() {
      return s.rawkinematiccharactercontroller_snapToGroundEnabled(this.__wbg_ptr) !== 0;
    }
    computeColliderMovement(t, e, r, i, a, c, l, _, h, u, w, b) {
      try {
        d(e, It), d(r, tt), d(i, J), d(a, X), d(l, p), s.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a.__wbg_ptr, c, l.__wbg_ptr, _, k(h) ? 4294967297 : Math.fround(h), u, k(w) ? 4294967297 : w >>> 0, K(b));
      } finally {
        H[U++] = void 0;
      }
    }
    computedMovement() {
      const t = s.rawkinematiccharactercontroller_computedMovement(this.__wbg_ptr);
      return p.__wrap(t);
    }
    computedGrounded() {
      return s.rawkinematiccharactercontroller_computedGrounded(this.__wbg_ptr) !== 0;
    }
    numComputedCollisions() {
      return s.rawkinematiccharactercontroller_numComputedCollisions(this.__wbg_ptr) >>> 0;
    }
    computedCollision(t, e) {
      return d(e, di), s.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr, t, e.__wbg_ptr) !== 0;
    }
  }
  const ar = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawmultibodyjointset_free(n >>> 0, 1));
  class Ft {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ft.prototype);
      return e.__wbg_ptr = t, ar.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ar.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawmultibodyjointset_free(t, 0);
    }
    jointType(t) {
      return s.rawmultibodyjointset_jointType(this.__wbg_ptr, t);
    }
    jointFrameX1(t) {
      const e = s.rawmultibodyjointset_jointFrameX1(this.__wbg_ptr, t);
      return L.__wrap(e);
    }
    jointFrameX2(t) {
      const e = s.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr, t);
      return L.__wrap(e);
    }
    jointAnchor1(t) {
      const e = s.rawmultibodyjointset_jointAnchor1(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    jointAnchor2(t) {
      const e = s.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    jointContactsEnabled(t) {
      return s.rawmultibodyjointset_jointContactsEnabled(this.__wbg_ptr, t) !== 0;
    }
    jointSetContactsEnabled(t, e) {
      s.rawmultibodyjointset_jointSetContactsEnabled(this.__wbg_ptr, t, e);
    }
    jointLimitsEnabled(t, e) {
      return s.rawmultibodyjointset_jointLimitsEnabled(this.__wbg_ptr, t, e) !== 0;
    }
    jointLimitsMin(t, e) {
      return s.rawmultibodyjointset_jointLimitsMin(this.__wbg_ptr, t, e);
    }
    jointLimitsMax(t, e) {
      return s.rawmultibodyjointset_jointLimitsMax(this.__wbg_ptr, t, e);
    }
    constructor() {
      const t = s.rawmultibodyjointset_new();
      return this.__wbg_ptr = t >>> 0, ar.register(this, this.__wbg_ptr, this), this;
    }
    createJoint(t, e, r, i) {
      return d(t, ot), s.rawmultibodyjointset_createJoint(this.__wbg_ptr, t.__wbg_ptr, e, r, i);
    }
    remove(t, e) {
      s.rawmultibodyjointset_remove(this.__wbg_ptr, t, e);
    }
    contains(t) {
      return s.rawmultibodyjointset_contains(this.__wbg_ptr, t) !== 0;
    }
    forEachJointHandle(t) {
      try {
        s.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr, K(t));
      } finally {
        H[U++] = void 0;
      }
    }
    forEachJointAttachedToRigidBody(t, e) {
      try {
        s.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, t, K(e));
      } finally {
        H[U++] = void 0;
      }
    }
  }
  const or = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawnarrowphase_free(n >>> 0, 1));
  class tt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(tt.prototype);
      return e.__wbg_ptr = t, or.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, or.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawnarrowphase_free(t, 0);
    }
    constructor() {
      const t = s.rawnarrowphase_new();
      return this.__wbg_ptr = t >>> 0, or.register(this, this.__wbg_ptr, this), this;
    }
    contact_pairs_with(t, e) {
      s.rawnarrowphase_contact_pairs_with(this.__wbg_ptr, t, et(e));
    }
    contact_pair(t, e) {
      const r = s.rawnarrowphase_contact_pair(this.__wbg_ptr, t, e);
      return r === 0 ? void 0 : zr.__wrap(r);
    }
    intersection_pairs_with(t, e) {
      s.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr, t, et(e));
    }
    intersection_pair(t, e) {
      return s.rawnarrowphase_intersection_pair(this.__wbg_ptr, t, e) !== 0;
    }
  }
  const gn = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawphysicspipeline_free(n >>> 0, 1));
  class xa {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, gn.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawphysicspipeline_free(t, 0);
    }
    constructor() {
      const t = s.rawphysicspipeline_new();
      return this.__wbg_ptr = t >>> 0, gn.register(this, this.__wbg_ptr, this), this;
    }
    step(t, e, r, i, a, c, l, _, h, u) {
      d(t, p), d(e, Ut), d(r, Tt), d(i, It), d(a, tt), d(c, J), d(l, X), d(_, zt), d(h, Ft), d(u, br), s.rawphysicspipeline_step(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr, u.__wbg_ptr);
    }
    stepWithEvents(t, e, r, i, a, c, l, _, h, u, w, b, f, S) {
      d(t, p), d(e, Ut), d(r, Tt), d(i, It), d(a, tt), d(c, J), d(l, X), d(_, zt), d(h, Ft), d(u, br), d(w, hi), s.rawphysicspipeline_stepWithEvents(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr, u.__wbg_ptr, w.__wbg_ptr, et(b), et(f), et(S));
    }
  }
  const bn = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawpidcontroller_free(n >>> 0, 1));
  class Ea {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, bn.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawpidcontroller_free(t, 0);
    }
    constructor(t, e, r, i) {
      const a = s.rawpidcontroller_new(t, e, r, i);
      return this.__wbg_ptr = a >>> 0, bn.register(this, this.__wbg_ptr, this), this;
    }
    set_kp(t, e) {
      s.rawpidcontroller_set_kp(this.__wbg_ptr, t, e);
    }
    set_ki(t, e) {
      s.rawpidcontroller_set_ki(this.__wbg_ptr, t, e);
    }
    set_kd(t, e) {
      s.rawpidcontroller_set_kd(this.__wbg_ptr, t, e);
    }
    set_axes_mask(t) {
      s.rawpidcontroller_set_axes_mask(this.__wbg_ptr, t);
    }
    reset_integrals() {
      s.rawpidcontroller_reset_integrals(this.__wbg_ptr);
    }
    apply_linear_correction(t, e, r, i, a) {
      d(e, J), d(i, p), d(a, p), s.rawpidcontroller_apply_linear_correction(this.__wbg_ptr, t, e.__wbg_ptr, r, i.__wbg_ptr, a.__wbg_ptr);
    }
    apply_angular_correction(t, e, r, i, a) {
      d(e, J), d(i, L), d(a, p), s.rawpidcontroller_apply_angular_correction(this.__wbg_ptr, t, e.__wbg_ptr, r, i.__wbg_ptr, a.__wbg_ptr);
    }
    linear_correction(t, e, r, i, a) {
      d(e, J), d(i, p), d(a, p);
      const c = s.rawpidcontroller_linear_correction(this.__wbg_ptr, t, e.__wbg_ptr, r, i.__wbg_ptr, a.__wbg_ptr);
      return p.__wrap(c);
    }
    angular_correction(t, e, r, i, a) {
      d(e, J), d(i, L), d(a, p);
      const c = s.rawpidcontroller_angular_correction(this.__wbg_ptr, t, e.__wbg_ptr, r, i.__wbg_ptr, a.__wbg_ptr);
      return p.__wrap(c);
    }
  }
  const mn = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawpointcolliderprojection_free(n >>> 0, 1));
  class Ae {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ae.prototype);
      return e.__wbg_ptr = t, mn.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, mn.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawpointcolliderprojection_free(t, 0);
    }
    colliderHandle() {
      return s.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr);
    }
    point() {
      const t = s.rawpointcolliderprojection_point(this.__wbg_ptr);
      return p.__wrap(t);
    }
    isInside() {
      return s.rawpointcolliderprojection_isInside(this.__wbg_ptr) !== 0;
    }
    featureType() {
      return s.rawpointcolliderprojection_featureType(this.__wbg_ptr);
    }
    featureId() {
      const t = s.rawpointcolliderprojection_featureId(this.__wbg_ptr);
      return t === 4294967297 ? void 0 : t;
    }
  }
  const fn = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawpointprojection_free(n >>> 0, 1));
  class He {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(He.prototype);
      return e.__wbg_ptr = t, fn.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, fn.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawpointprojection_free(t, 0);
    }
    point() {
      const t = s.rawpointprojection_point(this.__wbg_ptr);
      return p.__wrap(t);
    }
    isInside() {
      return s.rawpointprojection_isInside(this.__wbg_ptr) !== 0;
    }
  }
  const yn = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawraycolliderhit_free(n >>> 0, 1));
  class Fr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Fr.prototype);
      return e.__wbg_ptr = t, yn.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, yn.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawraycolliderhit_free(t, 0);
    }
    colliderHandle() {
      return s.rawcharactercollision_handle(this.__wbg_ptr);
    }
    timeOfImpact() {
      return s.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
  }
  const vn = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawraycolliderintersection_free(n >>> 0, 1));
  class Oe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Oe.prototype);
      return e.__wbg_ptr = t, vn.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, vn.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawraycolliderintersection_free(t, 0);
    }
    colliderHandle() {
      return s.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr);
    }
    normal() {
      const t = s.rawcollidershapecasthit_witness1(this.__wbg_ptr);
      return p.__wrap(t);
    }
    time_of_impact() {
      return s.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    featureType() {
      return s.rawpointcolliderprojection_featureType(this.__wbg_ptr);
    }
    featureId() {
      const t = s.rawpointcolliderprojection_featureId(this.__wbg_ptr);
      return t === 4294967297 ? void 0 : t;
    }
  }
  const Sn = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawrayintersection_free(n >>> 0, 1));
  class Ge {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ge.prototype);
      return e.__wbg_ptr = t, Sn.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Sn.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawrayintersection_free(t, 0);
    }
    normal() {
      const t = s.rawcollidershapecasthit_witness1(this.__wbg_ptr);
      return p.__wrap(t);
    }
    time_of_impact() {
      return s.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    featureType() {
      return s.rawpointcolliderprojection_featureType(this.__wbg_ptr);
    }
    featureId() {
      const t = s.rawpointcolliderprojection_featureId(this.__wbg_ptr);
      return t === 4294967297 ? void 0 : t;
    }
  }
  const cr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawrigidbodyset_free(n >>> 0, 1));
  class J {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(J.prototype);
      return e.__wbg_ptr = t, cr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, cr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawrigidbodyset_free(t, 0);
    }
    rbTranslation(t) {
      const e = s.rawrigidbodyset_rbTranslation(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbRotation(t) {
      const e = s.rawrigidbodyset_rbRotation(this.__wbg_ptr, t);
      return L.__wrap(e);
    }
    rbSleep(t) {
      s.rawrigidbodyset_rbSleep(this.__wbg_ptr, t);
    }
    rbIsSleeping(t) {
      return s.rawrigidbodyset_rbIsSleeping(this.__wbg_ptr, t) !== 0;
    }
    rbIsMoving(t) {
      return s.rawrigidbodyset_rbIsMoving(this.__wbg_ptr, t) !== 0;
    }
    rbNextTranslation(t) {
      const e = s.rawrigidbodyset_rbNextTranslation(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbNextRotation(t) {
      const e = s.rawrigidbodyset_rbNextRotation(this.__wbg_ptr, t);
      return L.__wrap(e);
    }
    rbSetTranslation(t, e, r, i, a) {
      s.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr, t, e, r, i, a);
    }
    rbSetRotation(t, e, r, i, a, c) {
      s.rawrigidbodyset_rbSetRotation(this.__wbg_ptr, t, e, r, i, a, c);
    }
    rbSetLinvel(t, e, r) {
      d(e, p), s.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbSetAngvel(t, e, r) {
      d(e, p), s.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbSetNextKinematicTranslation(t, e, r, i) {
      s.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr, t, e, r, i);
    }
    rbSetNextKinematicRotation(t, e, r, i, a) {
      s.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr, t, e, r, i, a);
    }
    rbRecomputeMassPropertiesFromColliders(t, e) {
      d(e, X), s.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    rbSetAdditionalMass(t, e, r) {
      s.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr, t, e, r);
    }
    rbSetAdditionalMassProperties(t, e, r, i, a, c) {
      d(r, p), d(i, p), d(a, L), s.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr, t, e, r.__wbg_ptr, i.__wbg_ptr, a.__wbg_ptr, c);
    }
    rbLinvel(t) {
      const e = s.rawrigidbodyset_rbLinvel(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbAngvel(t) {
      const e = s.rawrigidbodyset_rbAngvel(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbVelocityAtPoint(t, e) {
      d(e, p);
      const r = s.rawrigidbodyset_rbVelocityAtPoint(this.__wbg_ptr, t, e.__wbg_ptr);
      return p.__wrap(r);
    }
    rbLockTranslations(t, e, r) {
      s.rawrigidbodyset_rbLockTranslations(this.__wbg_ptr, t, e, r);
    }
    rbSetEnabledTranslations(t, e, r, i, a) {
      s.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr, t, e, r, i, a);
    }
    rbLockRotations(t, e, r) {
      s.rawrigidbodyset_rbLockRotations(this.__wbg_ptr, t, e, r);
    }
    rbSetEnabledRotations(t, e, r, i, a) {
      s.rawrigidbodyset_rbSetEnabledRotations(this.__wbg_ptr, t, e, r, i, a);
    }
    rbDominanceGroup(t) {
      return s.rawrigidbodyset_rbDominanceGroup(this.__wbg_ptr, t);
    }
    rbSetDominanceGroup(t, e) {
      s.rawrigidbodyset_rbSetDominanceGroup(this.__wbg_ptr, t, e);
    }
    rbEnableCcd(t, e) {
      s.rawrigidbodyset_rbEnableCcd(this.__wbg_ptr, t, e);
    }
    rbSetSoftCcdPrediction(t, e) {
      s.rawrigidbodyset_rbSetSoftCcdPrediction(this.__wbg_ptr, t, e);
    }
    rbMass(t) {
      return s.rawrigidbodyset_rbMass(this.__wbg_ptr, t);
    }
    rbInvMass(t) {
      return s.rawrigidbodyset_rbInvMass(this.__wbg_ptr, t);
    }
    rbEffectiveInvMass(t) {
      const e = s.rawrigidbodyset_rbEffectiveInvMass(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbLocalCom(t) {
      const e = s.rawrigidbodyset_rbLocalCom(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbWorldCom(t) {
      const e = s.rawrigidbodyset_rbWorldCom(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbInvPrincipalInertiaSqrt(t) {
      const e = s.rawrigidbodyset_rbInvPrincipalInertiaSqrt(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbPrincipalInertiaLocalFrame(t) {
      const e = s.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.__wbg_ptr, t);
      return L.__wrap(e);
    }
    rbPrincipalInertia(t) {
      const e = s.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbEffectiveWorldInvInertiaSqrt(t) {
      const e = s.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt(this.__wbg_ptr, t);
      return Ie.__wrap(e);
    }
    rbEffectiveAngularInertia(t) {
      const e = s.rawrigidbodyset_rbEffectiveAngularInertia(this.__wbg_ptr, t);
      return Ie.__wrap(e);
    }
    rbWakeUp(t) {
      s.rawrigidbodyset_rbWakeUp(this.__wbg_ptr, t);
    }
    rbIsCcdEnabled(t) {
      return s.rawrigidbodyset_rbIsCcdEnabled(this.__wbg_ptr, t) !== 0;
    }
    rbSoftCcdPrediction(t) {
      return s.rawrigidbodyset_rbSoftCcdPrediction(this.__wbg_ptr, t);
    }
    rbNumColliders(t) {
      return s.rawrigidbodyset_rbNumColliders(this.__wbg_ptr, t) >>> 0;
    }
    rbCollider(t, e) {
      return s.rawrigidbodyset_rbCollider(this.__wbg_ptr, t, e);
    }
    rbBodyType(t) {
      return s.rawrigidbodyset_rbBodyType(this.__wbg_ptr, t);
    }
    rbSetBodyType(t, e, r) {
      s.rawrigidbodyset_rbSetBodyType(this.__wbg_ptr, t, e, r);
    }
    rbIsFixed(t) {
      return s.rawrigidbodyset_rbIsFixed(this.__wbg_ptr, t) !== 0;
    }
    rbIsKinematic(t) {
      return s.rawrigidbodyset_rbIsKinematic(this.__wbg_ptr, t) !== 0;
    }
    rbIsDynamic(t) {
      return s.rawrigidbodyset_rbIsDynamic(this.__wbg_ptr, t) !== 0;
    }
    rbLinearDamping(t) {
      return s.rawrigidbodyset_rbLinearDamping(this.__wbg_ptr, t);
    }
    rbAngularDamping(t) {
      return s.rawrigidbodyset_rbAngularDamping(this.__wbg_ptr, t);
    }
    rbSetLinearDamping(t, e) {
      s.rawrigidbodyset_rbSetLinearDamping(this.__wbg_ptr, t, e);
    }
    rbSetAngularDamping(t, e) {
      s.rawrigidbodyset_rbSetAngularDamping(this.__wbg_ptr, t, e);
    }
    rbSetEnabled(t, e) {
      s.rawrigidbodyset_rbSetEnabled(this.__wbg_ptr, t, e);
    }
    rbIsEnabled(t) {
      return s.rawrigidbodyset_rbIsEnabled(this.__wbg_ptr, t) !== 0;
    }
    rbGravityScale(t) {
      return s.rawrigidbodyset_rbGravityScale(this.__wbg_ptr, t);
    }
    rbSetGravityScale(t, e, r) {
      s.rawrigidbodyset_rbSetGravityScale(this.__wbg_ptr, t, e, r);
    }
    rbResetForces(t, e) {
      s.rawrigidbodyset_rbResetForces(this.__wbg_ptr, t, e);
    }
    rbResetTorques(t, e) {
      s.rawrigidbodyset_rbResetTorques(this.__wbg_ptr, t, e);
    }
    rbAddForce(t, e, r) {
      d(e, p), s.rawrigidbodyset_rbAddForce(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbApplyImpulse(t, e, r) {
      d(e, p), s.rawrigidbodyset_rbApplyImpulse(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbAddTorque(t, e, r) {
      d(e, p), s.rawrigidbodyset_rbAddTorque(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbApplyTorqueImpulse(t, e, r) {
      d(e, p), s.rawrigidbodyset_rbApplyTorqueImpulse(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbAddForceAtPoint(t, e, r, i) {
      d(e, p), d(r, p), s.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, i);
    }
    rbApplyImpulseAtPoint(t, e, r, i) {
      d(e, p), d(r, p), s.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, i);
    }
    rbAdditionalSolverIterations(t) {
      return s.rawrigidbodyset_rbAdditionalSolverIterations(this.__wbg_ptr, t) >>> 0;
    }
    rbSetAdditionalSolverIterations(t, e) {
      s.rawrigidbodyset_rbSetAdditionalSolverIterations(this.__wbg_ptr, t, e);
    }
    rbUserData(t) {
      return s.rawrigidbodyset_rbUserData(this.__wbg_ptr, t) >>> 0;
    }
    rbSetUserData(t, e) {
      s.rawrigidbodyset_rbSetUserData(this.__wbg_ptr, t, e);
    }
    rbUserForce(t) {
      const e = s.rawrigidbodyset_rbUserForce(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    rbUserTorque(t) {
      const e = s.rawrigidbodyset_rbUserTorque(this.__wbg_ptr, t);
      return p.__wrap(e);
    }
    constructor() {
      const t = s.rawrigidbodyset_new();
      return this.__wbg_ptr = t >>> 0, cr.register(this, this.__wbg_ptr, this), this;
    }
    createRigidBody(t, e, r, i, a, c, l, _, h, u, w, b, f, S, T, j, I, v, R, x, bt, ut, Q, kt, St, Et) {
      return d(e, p), d(r, L), d(l, p), d(_, p), d(h, p), d(u, p), d(w, L), s.rawrigidbodyset_createRigidBody(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, i, a, c, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr, u.__wbg_ptr, w.__wbg_ptr, b, f, S, T, j, I, v, R, x, bt, ut, Q, kt, St, Et);
    }
    remove(t, e, r, i, a) {
      d(e, Tt), d(r, X), d(i, zt), d(a, Ft), s.rawrigidbodyset_remove(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a.__wbg_ptr);
    }
    len() {
      return s.rawcolliderset_len(this.__wbg_ptr) >>> 0;
    }
    contains(t) {
      return s.rawrigidbodyset_contains(this.__wbg_ptr, t) !== 0;
    }
    forEachRigidBodyHandle(t) {
      try {
        s.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr, K(t));
      } finally {
        H[U++] = void 0;
      }
    }
    propagateModifiedBodyPositionsToColliders(t) {
      d(t, X), s.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  const lr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawrotation_free(n >>> 0, 1));
  class L {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(L.prototype);
      return e.__wbg_ptr = t, lr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, lr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawrotation_free(t, 0);
    }
    constructor(t, e, r, i) {
      const a = s.rawrotation_new(t, e, r, i);
      return this.__wbg_ptr = a >>> 0, lr.register(this, this.__wbg_ptr, this), this;
    }
    static identity() {
      const t = s.rawrotation_identity();
      return L.__wrap(t);
    }
    get x() {
      return s.rawrotation_x(this.__wbg_ptr);
    }
    get y() {
      return s.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    get z() {
      return s.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    get w() {
      return s.rawrotation_w(this.__wbg_ptr);
    }
  }
  const Rn = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawsdpmatrix3_free(n >>> 0, 1));
  class Ie {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ie.prototype);
      return e.__wbg_ptr = t, Rn.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Rn.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawsdpmatrix3_free(t, 0);
    }
    elements() {
      const t = s.rawsdpmatrix3_elements(this.__wbg_ptr);
      return me(t);
    }
  }
  const Cn = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawserializationpipeline_free(n >>> 0, 1));
  class Pa {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Cn.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawserializationpipeline_free(t, 0);
    }
    constructor() {
      const t = s.rawserializationpipeline_new();
      return this.__wbg_ptr = t >>> 0, Cn.register(this, this.__wbg_ptr, this), this;
    }
    serializeAll(t, e, r, i, a, c, l, _, h) {
      d(t, p), d(e, Ut), d(r, Tt), d(i, It), d(a, tt), d(c, J), d(l, X), d(_, zt), d(h, Ft);
      const u = s.rawserializationpipeline_serializeAll(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr);
      return me(u);
    }
    deserializeAll(t) {
      const e = s.rawserializationpipeline_deserializeAll(this.__wbg_ptr, et(t));
      return e === 0 ? void 0 : Tr.__wrap(e);
    }
  }
  const xn = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawshape_free(n >>> 0, 1));
  class F {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(F.prototype);
      return e.__wbg_ptr = t, xn.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, xn.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawshape_free(t, 0);
    }
    static cuboid(t, e, r) {
      const i = s.rawshape_cuboid(t, e, r);
      return F.__wrap(i);
    }
    static roundCuboid(t, e, r, i) {
      const a = s.rawshape_roundCuboid(t, e, r, i);
      return F.__wrap(a);
    }
    static ball(t) {
      const e = s.rawshape_ball(t);
      return F.__wrap(e);
    }
    static halfspace(t) {
      d(t, p);
      const e = s.rawshape_halfspace(t.__wbg_ptr);
      return F.__wrap(e);
    }
    static capsule(t, e) {
      const r = s.rawshape_capsule(t, e);
      return F.__wrap(r);
    }
    static cylinder(t, e) {
      const r = s.rawshape_cylinder(t, e);
      return F.__wrap(r);
    }
    static roundCylinder(t, e, r) {
      const i = s.rawshape_roundCylinder(t, e, r);
      return F.__wrap(i);
    }
    static cone(t, e) {
      const r = s.rawshape_cone(t, e);
      return F.__wrap(r);
    }
    static roundCone(t, e, r) {
      const i = s.rawshape_roundCone(t, e, r);
      return F.__wrap(i);
    }
    static voxels(t, e) {
      d(t, p);
      const r = de(e, s.__wbindgen_export_2), i = _t, a = s.rawshape_voxels(t.__wbg_ptr, r, i);
      return F.__wrap(a);
    }
    static voxelsFromPoints(t, e) {
      d(t, p);
      const r = Bt(e, s.__wbindgen_export_2), i = _t, a = s.rawshape_voxelsFromPoints(t.__wbg_ptr, r, i);
      return F.__wrap(a);
    }
    static polyline(t, e) {
      const r = Bt(t, s.__wbindgen_export_2), i = _t, a = de(e, s.__wbindgen_export_2), c = _t, l = s.rawshape_polyline(r, i, a, c);
      return F.__wrap(l);
    }
    static trimesh(t, e, r) {
      const i = Bt(t, s.__wbindgen_export_2), a = _t, c = de(e, s.__wbindgen_export_2), l = _t, _ = s.rawshape_trimesh(i, a, c, l, r);
      return _ === 0 ? void 0 : F.__wrap(_);
    }
    static heightfield(t, e, r, i, a) {
      const c = Bt(r, s.__wbindgen_export_2), l = _t;
      d(i, p);
      const _ = s.rawshape_heightfield(t, e, c, l, i.__wbg_ptr, a);
      return F.__wrap(_);
    }
    static segment(t, e) {
      d(t, p), d(e, p);
      const r = s.rawshape_segment(t.__wbg_ptr, e.__wbg_ptr);
      return F.__wrap(r);
    }
    static triangle(t, e, r) {
      d(t, p), d(e, p), d(r, p);
      const i = s.rawshape_triangle(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr);
      return F.__wrap(i);
    }
    static roundTriangle(t, e, r, i) {
      d(t, p), d(e, p), d(r, p);
      const a = s.rawshape_roundTriangle(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i);
      return F.__wrap(a);
    }
    static convexHull(t) {
      const e = Bt(t, s.__wbindgen_export_2), r = _t, i = s.rawshape_convexHull(e, r);
      return i === 0 ? void 0 : F.__wrap(i);
    }
    static roundConvexHull(t, e) {
      const r = Bt(t, s.__wbindgen_export_2), i = _t, a = s.rawshape_roundConvexHull(r, i, e);
      return a === 0 ? void 0 : F.__wrap(a);
    }
    static convexMesh(t, e) {
      const r = Bt(t, s.__wbindgen_export_2), i = _t, a = de(e, s.__wbindgen_export_2), c = _t, l = s.rawshape_convexMesh(r, i, a, c);
      return l === 0 ? void 0 : F.__wrap(l);
    }
    static roundConvexMesh(t, e, r) {
      const i = Bt(t, s.__wbindgen_export_2), a = _t, c = de(e, s.__wbindgen_export_2), l = _t, _ = s.rawshape_roundConvexMesh(i, a, c, l, r);
      return _ === 0 ? void 0 : F.__wrap(_);
    }
    castShape(t, e, r, i, a, c, l, _, h, u) {
      d(t, p), d(e, L), d(r, p), d(i, F), d(a, p), d(c, L), d(l, p);
      const w = s.rawshape_castShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _, h, u);
      return w === 0 ? void 0 : We.__wrap(w);
    }
    intersectsShape(t, e, r, i, a) {
      return d(t, p), d(e, L), d(r, F), d(i, p), d(a, L), s.rawshape_intersectsShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a.__wbg_ptr) !== 0;
    }
    contactShape(t, e, r, i, a, c) {
      d(t, p), d(e, L), d(r, F), d(i, p), d(a, L);
      const l = s.rawshape_contactShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a.__wbg_ptr, c);
      return l === 0 ? void 0 : fe.__wrap(l);
    }
    containsPoint(t, e, r) {
      return d(t, p), d(e, L), d(r, p), s.rawshape_containsPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr) !== 0;
    }
    projectPoint(t, e, r, i) {
      d(t, p), d(e, L), d(r, p);
      const a = s.rawshape_projectPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i);
      return He.__wrap(a);
    }
    intersectsRay(t, e, r, i, a) {
      return d(t, p), d(e, L), d(r, p), d(i, p), s.rawshape_intersectsRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a) !== 0;
    }
    castRay(t, e, r, i, a, c) {
      return d(t, p), d(e, L), d(r, p), d(i, p), s.rawshape_castRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a, c);
    }
    castRayAndGetNormal(t, e, r, i, a, c) {
      d(t, p), d(e, L), d(r, p), d(i, p);
      const l = s.rawshape_castRayAndGetNormal(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, i.__wbg_ptr, a, c);
      return l === 0 ? void 0 : Ge.__wrap(l);
    }
  }
  const En = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawshapecasthit_free(n >>> 0, 1));
  class We {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(We.prototype);
      return e.__wbg_ptr = t, En.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, En.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawshapecasthit_free(t, 0);
    }
    time_of_impact() {
      return s.rawrotation_x(this.__wbg_ptr);
    }
    witness1() {
      const t = s.rawshapecasthit_witness1(this.__wbg_ptr);
      return p.__wrap(t);
    }
    witness2() {
      const t = s.rawcontactforceevent_total_force(this.__wbg_ptr);
      return p.__wrap(t);
    }
    normal1() {
      const t = s.rawshapecasthit_normal1(this.__wbg_ptr);
      return p.__wrap(t);
    }
    normal2() {
      const t = s.rawshapecasthit_normal2(this.__wbg_ptr);
      return p.__wrap(t);
    }
  }
  const Pn = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawshapecontact_free(n >>> 0, 1));
  class fe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(fe.prototype);
      return e.__wbg_ptr = t, Pn.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Pn.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawshapecontact_free(t, 0);
    }
    distance() {
      return s.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr);
    }
    point1() {
      const t = s.rawpointprojection_point(this.__wbg_ptr);
      return p.__wrap(t);
    }
    point2() {
      const t = s.rawcollidershapecasthit_witness1(this.__wbg_ptr);
      return p.__wrap(t);
    }
    normal1() {
      const t = s.rawcollidershapecasthit_witness2(this.__wbg_ptr);
      return p.__wrap(t);
    }
    normal2() {
      const t = s.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
      return p.__wrap(t);
    }
  }
  const _r = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_rawvector_free(n >>> 0, 1));
  class p {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(p.prototype);
      return e.__wbg_ptr = t, _r.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, _r.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawvector_free(t, 0);
    }
    static zero() {
      const t = s.rawvector_zero();
      return p.__wrap(t);
    }
    constructor(t, e, r) {
      const i = s.rawvector_new(t, e, r);
      return this.__wbg_ptr = i >>> 0, _r.register(this, this.__wbg_ptr, this), this;
    }
    get x() {
      return s.rawrotation_x(this.__wbg_ptr);
    }
    set x(t) {
      s.rawvector_set_x(this.__wbg_ptr, t);
    }
    get y() {
      return s.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    set y(t) {
      s.rawintegrationparameters_set_dt(this.__wbg_ptr, t);
    }
    get z() {
      return s.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    set z(t) {
      s.rawvector_set_z(this.__wbg_ptr, t);
    }
    xyz() {
      const t = s.rawvector_xyz(this.__wbg_ptr);
      return p.__wrap(t);
    }
    yxz() {
      const t = s.rawvector_yxz(this.__wbg_ptr);
      return p.__wrap(t);
    }
    zxy() {
      const t = s.rawvector_zxy(this.__wbg_ptr);
      return p.__wrap(t);
    }
    xzy() {
      const t = s.rawvector_xzy(this.__wbg_ptr);
      return p.__wrap(t);
    }
    yzx() {
      const t = s.rawvector_yzx(this.__wbg_ptr);
      return p.__wrap(t);
    }
    zyx() {
      const t = s.rawvector_zyx(this.__wbg_ptr);
      return p.__wrap(t);
    }
  }
  function ja(n, t, e, r) {
    const i = G(n).bind(G(t), G(e), G(r));
    return et(i);
  }
  function Aa(n) {
    const t = G(n).buffer;
    return et(t);
  }
  function Ia() {
    return jr(function(n, t, e) {
      const r = G(n).call(G(t), G(e));
      return et(r);
    }, arguments);
  }
  function za() {
    return jr(function(n, t, e, r) {
      const i = G(n).call(G(t), G(e), G(r));
      return et(i);
    }, arguments);
  }
  function Ta() {
    return jr(function(n, t, e, r, i) {
      const a = G(n).call(G(t), G(e), G(r), G(i));
      return et(a);
    }, arguments);
  }
  function Fa(n) {
    return G(n).length;
  }
  function ka(n) {
    return G(n).length;
  }
  function Da(n) {
    const t = new Uint8Array(G(n));
    return et(t);
  }
  function Ma(n, t, e) {
    const r = new Uint8Array(G(n), t >>> 0, e >>> 0);
    return et(r);
  }
  function La(n, t, e) {
    const r = new Float32Array(G(n), t >>> 0, e >>> 0);
    return et(r);
  }
  function Ba(n) {
    const t = new Float32Array(n >>> 0);
    return et(t);
  }
  function Na(n) {
    const t = Ar.__wrap(n);
    return et(t);
  }
  function Ha(n) {
    const t = Oe.__wrap(n);
    return et(t);
  }
  function Oa(n, t, e) {
    G(n).set(G(t), e >>> 0);
  }
  function Ga(n, t, e) {
    G(n).set(G(t), e >>> 0);
  }
  function Wa(n) {
    const t = G(n);
    return typeof t == "boolean" ? t ? 1 : 0 : 2;
  }
  function Va(n) {
    return typeof G(n) == "function";
  }
  function Ua() {
    const n = s.memory;
    return et(n);
  }
  function Ja(n, t) {
    const e = G(t), r = typeof e == "number" ? e : void 0;
    at().setFloat64(n + 8 * 1, k(r) ? 0 : r, true), at().setInt32(n + 4 * 0, !k(r), true);
  }
  function qa(n) {
    return et(n);
  }
  function Ka(n) {
    me(n);
  }
  function $a(n, t) {
    throw new Error(ma(n, t));
  }
  URL = globalThis.URL;
  const o = await wa({
    "./rapier_wasm3d_bg.js": {
      __wbindgen_number_new: qa,
      __wbindgen_boolean_get: Wa,
      __wbindgen_object_drop_ref: Ka,
      __wbindgen_number_get: Ja,
      __wbindgen_is_function: Va,
      __wbg_rawraycolliderintersection_new: Ha,
      __wbg_rawcontactforceevent_new: Na,
      __wbg_call_7cccdd69e0791ae2: Ia,
      __wbg_call_833bed5770ea2041: za,
      __wbg_call_b8adc8b1d0a0d8eb: Ta,
      __wbg_bind_c8359b1cba058168: ja,
      __wbg_buffer_609cc3eee51ed158: Aa,
      __wbg_newwithbyteoffsetandlength_d97e637ebe145a9a: Ma,
      __wbg_new_a12002a7f91c75be: Da,
      __wbg_set_65595bdd868b3009: Ga,
      __wbg_length_a446193dc22c12f8: ka,
      __wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354: La,
      __wbg_set_10bad9bee0e9c58b: Oa,
      __wbg_length_3b4f022188ae8db6: Fa,
      __wbg_newwithlength_5a5efe313cfd59f1: Ba,
      __wbindgen_throw: $a,
      __wbindgen_memory: Ua
    }
  }, ha), Xa = o.memory, Ya = o.version, Qa = o.__wbg_rawkinematiccharactercontroller_free, Za = o.rawkinematiccharactercontroller_new, to = o.rawkinematiccharactercontroller_setUp, eo = o.rawkinematiccharactercontroller_normalNudgeFactor, ro = o.rawkinematiccharactercontroller_setNormalNudgeFactor, no = o.rawkinematiccharactercontroller_setOffset, io = o.rawkinematiccharactercontroller_slideEnabled, so = o.rawkinematiccharactercontroller_setSlideEnabled, ao = o.rawkinematiccharactercontroller_autostepMaxHeight, oo = o.rawkinematiccharactercontroller_autostepMinWidth, co = o.rawkinematiccharactercontroller_autostepIncludesDynamicBodies, lo = o.rawkinematiccharactercontroller_autostepEnabled, _o = o.rawkinematiccharactercontroller_enableAutostep, ho = o.rawkinematiccharactercontroller_disableAutostep, wo = o.rawkinematiccharactercontroller_maxSlopeClimbAngle, uo = o.rawkinematiccharactercontroller_setMaxSlopeClimbAngle, po = o.rawkinematiccharactercontroller_minSlopeSlideAngle, go = o.rawkinematiccharactercontroller_setMinSlopeSlideAngle, bo = o.rawkinematiccharactercontroller_snapToGroundDistance, mo = o.rawkinematiccharactercontroller_enableSnapToGround, fo = o.rawkinematiccharactercontroller_disableSnapToGround, yo = o.rawkinematiccharactercontroller_snapToGroundEnabled, vo = o.rawkinematiccharactercontroller_computeColliderMovement, So = o.rawkinematiccharactercontroller_computedMovement, Ro = o.rawkinematiccharactercontroller_computedGrounded, Co = o.rawkinematiccharactercontroller_numComputedCollisions, xo = o.rawkinematiccharactercontroller_computedCollision, Eo = o.__wbg_rawcharactercollision_free, Po = o.rawcharactercollision_new, jo = o.rawcharactercollision_handle, Ao = o.rawcharactercollision_translationDeltaApplied, Io = o.rawcharactercollision_translationDeltaRemaining, zo = o.rawcharactercollision_toi, To = o.rawcharactercollision_worldWitness1, Fo = o.rawcharactercollision_worldWitness2, ko = o.rawcharactercollision_worldNormal1, Do = o.rawcharactercollision_worldNormal2, Mo = o.__wbg_rawpidcontroller_free, Lo = o.rawpidcontroller_new, Bo = o.rawpidcontroller_set_kp, No = o.rawpidcontroller_set_ki, Ho = o.rawpidcontroller_set_kd, Oo = o.rawpidcontroller_set_axes_mask, Go = o.rawpidcontroller_reset_integrals, Wo = o.rawpidcontroller_apply_linear_correction, Vo = o.rawpidcontroller_apply_angular_correction, Uo = o.rawpidcontroller_linear_correction, Jo = o.rawpidcontroller_angular_correction, qo = o.__wbg_rawdynamicraycastvehiclecontroller_free, Ko = o.rawdynamicraycastvehiclecontroller_new, $o = o.rawdynamicraycastvehiclecontroller_current_vehicle_speed, Xo = o.rawdynamicraycastvehiclecontroller_chassis, Yo = o.rawdynamicraycastvehiclecontroller_index_up_axis, Qo = o.rawdynamicraycastvehiclecontroller_set_index_up_axis, Zo = o.rawdynamicraycastvehiclecontroller_index_forward_axis, tc = o.rawdynamicraycastvehiclecontroller_set_index_forward_axis, ec = o.rawdynamicraycastvehiclecontroller_add_wheel, rc = o.rawdynamicraycastvehiclecontroller_num_wheels, nc = o.rawdynamicraycastvehiclecontroller_update_vehicle, ic = o.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs, sc = o.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs, ac = o.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length, oc = o.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length, cc = o.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel, lc = o.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel, _c = o.rawdynamicraycastvehiclecontroller_wheel_radius, dc = o.rawdynamicraycastvehiclecontroller_set_wheel_radius, hc = o.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness, wc = o.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness, uc = o.rawdynamicraycastvehiclecontroller_wheel_suspension_compression, pc = o.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression, gc = o.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation, bc = o.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation, mc = o.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force, fc = o.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force, yc = o.rawdynamicraycastvehiclecontroller_wheel_brake, vc = o.rawdynamicraycastvehiclecontroller_set_wheel_brake, Sc = o.rawdynamicraycastvehiclecontroller_wheel_steering, Rc = o.rawdynamicraycastvehiclecontroller_set_wheel_steering, Cc = o.rawdynamicraycastvehiclecontroller_wheel_engine_force, xc = o.rawdynamicraycastvehiclecontroller_set_wheel_engine_force, Ec = o.rawdynamicraycastvehiclecontroller_wheel_direction_cs, Pc = o.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs, jc = o.rawdynamicraycastvehiclecontroller_wheel_axle_cs, Ac = o.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs, Ic = o.rawdynamicraycastvehiclecontroller_wheel_friction_slip, zc = o.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip, Tc = o.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness, Fc = o.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness, kc = o.rawdynamicraycastvehiclecontroller_wheel_rotation, Dc = o.rawdynamicraycastvehiclecontroller_wheel_forward_impulse, Mc = o.rawdynamicraycastvehiclecontroller_wheel_side_impulse, Lc = o.rawdynamicraycastvehiclecontroller_wheel_suspension_force, Bc = o.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws, Nc = o.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws, Hc = o.rawdynamicraycastvehiclecontroller_wheel_suspension_length, Oc = o.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws, Gc = o.rawdynamicraycastvehiclecontroller_wheel_is_in_contact, Wc = o.rawdynamicraycastvehiclecontroller_wheel_ground_object, Vc = o.__wbg_rawccdsolver_free, Uc = o.rawccdsolver_new, Jc = o.rawimpulsejointset_jointType, qc = o.rawimpulsejointset_jointBodyHandle1, Kc = o.rawimpulsejointset_jointBodyHandle2, $c = o.rawimpulsejointset_jointFrameX1, Xc = o.rawimpulsejointset_jointFrameX2, Yc = o.rawimpulsejointset_jointAnchor1, Qc = o.rawimpulsejointset_jointAnchor2, Zc = o.rawimpulsejointset_jointSetAnchor1, tl = o.rawimpulsejointset_jointSetAnchor2, el = o.rawimpulsejointset_jointContactsEnabled, rl = o.rawimpulsejointset_jointSetContactsEnabled, nl = o.rawimpulsejointset_jointLimitsEnabled, il = o.rawimpulsejointset_jointLimitsMin, sl = o.rawimpulsejointset_jointLimitsMax, al = o.rawimpulsejointset_jointSetLimits, ol = o.rawimpulsejointset_jointConfigureMotorModel, cl = o.rawimpulsejointset_jointConfigureMotorVelocity, ll = o.rawimpulsejointset_jointConfigureMotorPosition, _l = o.rawimpulsejointset_jointConfigureMotor, dl = o.__wbg_rawimpulsejointset_free, hl = o.rawimpulsejointset_new, wl = o.rawimpulsejointset_createJoint, ul = o.rawimpulsejointset_remove, pl = o.rawimpulsejointset_len, gl = o.rawimpulsejointset_contains, bl = o.rawimpulsejointset_forEachJointHandle, ml = o.rawimpulsejointset_forEachJointAttachedToRigidBody, fl = o.__wbg_rawintegrationparameters_free, yl = o.rawintegrationparameters_new, vl = o.rawintegrationparameters_dt, Sl = o.rawintegrationparameters_contact_erp, Rl = o.rawintegrationparameters_numSolverIterations, Cl = o.rawintegrationparameters_minIslandSize, xl = o.rawintegrationparameters_maxCcdSubsteps, El = o.rawintegrationparameters_lengthUnit, Pl = o.rawintegrationparameters_set_dt, jl = o.rawintegrationparameters_set_contact_natural_frequency, Al = o.rawintegrationparameters_set_normalizedAllowedLinearError, Il = o.rawintegrationparameters_set_normalizedPredictionDistance, zl = o.rawintegrationparameters_set_numSolverIterations, Tl = o.rawintegrationparameters_set_minIslandSize, Fl = o.rawintegrationparameters_set_maxCcdSubsteps, kl = o.rawintegrationparameters_set_lengthUnit, Dl = o.rawintegrationparameters_switchToStandardPgsSolver, Ml = o.rawintegrationparameters_switchToSmallStepsPgsSolver, Ll = o.rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart, Bl = o.__wbg_rawislandmanager_free, Nl = o.rawislandmanager_new, Hl = o.rawislandmanager_forEachActiveRigidBodyHandle, Ol = o.__wbg_rawgenericjoint_free, Gl = o.rawgenericjoint_generic, Wl = o.rawgenericjoint_spring, Vl = o.rawgenericjoint_rope, Ul = o.rawgenericjoint_spherical, Jl = o.rawgenericjoint_prismatic, ql = o.rawgenericjoint_fixed, Kl = o.rawgenericjoint_revolute, $l = o.rawmultibodyjointset_jointType, Xl = o.rawmultibodyjointset_jointFrameX1, Yl = o.rawmultibodyjointset_jointFrameX2, Ql = o.rawmultibodyjointset_jointAnchor1, Zl = o.rawmultibodyjointset_jointAnchor2, t_ = o.rawmultibodyjointset_jointContactsEnabled, e_ = o.rawmultibodyjointset_jointSetContactsEnabled, r_ = o.rawmultibodyjointset_jointLimitsEnabled, n_ = o.rawmultibodyjointset_jointLimitsMin, i_ = o.rawmultibodyjointset_jointLimitsMax, s_ = o.__wbg_rawmultibodyjointset_free, a_ = o.rawmultibodyjointset_new, o_ = o.rawmultibodyjointset_createJoint, c_ = o.rawmultibodyjointset_remove, l_ = o.rawmultibodyjointset_contains, __ = o.rawmultibodyjointset_forEachJointHandle, d_ = o.rawmultibodyjointset_forEachJointAttachedToRigidBody, h_ = o.rawrigidbodyset_rbTranslation, w_ = o.rawrigidbodyset_rbRotation, u_ = o.rawrigidbodyset_rbSleep, p_ = o.rawrigidbodyset_rbIsSleeping, g_ = o.rawrigidbodyset_rbIsMoving, b_ = o.rawrigidbodyset_rbNextTranslation, m_ = o.rawrigidbodyset_rbNextRotation, f_ = o.rawrigidbodyset_rbSetTranslation, y_ = o.rawrigidbodyset_rbSetRotation, v_ = o.rawrigidbodyset_rbSetLinvel, S_ = o.rawrigidbodyset_rbSetAngvel, R_ = o.rawrigidbodyset_rbSetNextKinematicTranslation, C_ = o.rawrigidbodyset_rbSetNextKinematicRotation, x_ = o.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders, E_ = o.rawrigidbodyset_rbSetAdditionalMass, P_ = o.rawrigidbodyset_rbSetAdditionalMassProperties, j_ = o.rawrigidbodyset_rbLinvel, A_ = o.rawrigidbodyset_rbAngvel, I_ = o.rawrigidbodyset_rbVelocityAtPoint, z_ = o.rawrigidbodyset_rbLockTranslations, T_ = o.rawrigidbodyset_rbSetEnabledTranslations, F_ = o.rawrigidbodyset_rbLockRotations, k_ = o.rawrigidbodyset_rbSetEnabledRotations, D_ = o.rawrigidbodyset_rbDominanceGroup, M_ = o.rawrigidbodyset_rbSetDominanceGroup, L_ = o.rawrigidbodyset_rbEnableCcd, B_ = o.rawrigidbodyset_rbSetSoftCcdPrediction, N_ = o.rawrigidbodyset_rbMass, H_ = o.rawrigidbodyset_rbInvMass, O_ = o.rawrigidbodyset_rbEffectiveInvMass, G_ = o.rawrigidbodyset_rbLocalCom, W_ = o.rawrigidbodyset_rbWorldCom, V_ = o.rawrigidbodyset_rbInvPrincipalInertiaSqrt, U_ = o.rawrigidbodyset_rbPrincipalInertiaLocalFrame, J_ = o.rawrigidbodyset_rbPrincipalInertia, q_ = o.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt, K_ = o.rawrigidbodyset_rbEffectiveAngularInertia, $_ = o.rawrigidbodyset_rbWakeUp, X_ = o.rawrigidbodyset_rbIsCcdEnabled, Y_ = o.rawrigidbodyset_rbSoftCcdPrediction, Q_ = o.rawrigidbodyset_rbNumColliders, Z_ = o.rawrigidbodyset_rbCollider, td = o.rawrigidbodyset_rbBodyType, ed = o.rawrigidbodyset_rbSetBodyType, rd = o.rawrigidbodyset_rbIsFixed, nd = o.rawrigidbodyset_rbIsKinematic, id = o.rawrigidbodyset_rbIsDynamic, sd = o.rawrigidbodyset_rbLinearDamping, ad = o.rawrigidbodyset_rbAngularDamping, od = o.rawrigidbodyset_rbSetLinearDamping, cd = o.rawrigidbodyset_rbSetAngularDamping, ld = o.rawrigidbodyset_rbSetEnabled, _d = o.rawrigidbodyset_rbIsEnabled, dd = o.rawrigidbodyset_rbGravityScale, hd = o.rawrigidbodyset_rbSetGravityScale, wd = o.rawrigidbodyset_rbResetForces, ud = o.rawrigidbodyset_rbResetTorques, pd = o.rawrigidbodyset_rbAddForce, gd = o.rawrigidbodyset_rbApplyImpulse, bd = o.rawrigidbodyset_rbAddTorque, md = o.rawrigidbodyset_rbApplyTorqueImpulse, fd = o.rawrigidbodyset_rbAddForceAtPoint, yd = o.rawrigidbodyset_rbApplyImpulseAtPoint, vd = o.rawrigidbodyset_rbAdditionalSolverIterations, Sd = o.rawrigidbodyset_rbSetAdditionalSolverIterations, Rd = o.rawrigidbodyset_rbUserData, Cd = o.rawrigidbodyset_rbSetUserData, xd = o.rawrigidbodyset_rbUserForce, Ed = o.rawrigidbodyset_rbUserTorque, Pd = o.__wbg_rawrigidbodyset_free, jd = o.rawrigidbodyset_new, Ad = o.rawrigidbodyset_createRigidBody, Id = o.rawrigidbodyset_remove, zd = o.rawrigidbodyset_contains, Td = o.rawrigidbodyset_forEachRigidBodyHandle, Fd = o.rawrigidbodyset_propagateModifiedBodyPositionsToColliders, kd = o.__wbg_rawbroadphase_free, Dd = o.rawbroadphase_new, Md = o.rawbroadphase_castRay, Ld = o.rawbroadphase_castRayAndGetNormal, Bd = o.rawbroadphase_intersectionsWithRay, Nd = o.rawbroadphase_intersectionWithShape, Hd = o.rawbroadphase_projectPoint, Od = o.rawbroadphase_projectPointAndGetFeature, Gd = o.rawbroadphase_intersectionsWithPoint, Wd = o.rawbroadphase_castShape, Vd = o.rawbroadphase_intersectionsWithShape, Ud = o.rawbroadphase_collidersWithAabbIntersectingAabb, Jd = o.rawcolliderset_coTranslation, qd = o.rawcolliderset_coRotation, Kd = o.rawcolliderset_coTranslationWrtParent, $d = o.rawcolliderset_coRotationWrtParent, Xd = o.rawcolliderset_coSetTranslation, Yd = o.rawcolliderset_coSetTranslationWrtParent, Qd = o.rawcolliderset_coSetRotation, Zd = o.rawcolliderset_coSetRotationWrtParent, th = o.rawcolliderset_coIsSensor, eh = o.rawcolliderset_coShapeType, rh = o.rawcolliderset_coHalfspaceNormal, nh = o.rawcolliderset_coHalfExtents, ih = o.rawcolliderset_coSetHalfExtents, sh = o.rawcolliderset_coRadius, ah = o.rawcolliderset_coSetRadius, oh = o.rawcolliderset_coHalfHeight, ch = o.rawcolliderset_coSetHalfHeight, lh = o.rawcolliderset_coRoundRadius, _h = o.rawcolliderset_coSetRoundRadius, dh = o.rawcolliderset_coVoxelData, hh = o.rawcolliderset_coVoxelSize, wh = o.rawcolliderset_coSetVoxel, uh = o.rawcolliderset_coPropagateVoxelChange, ph = o.rawcolliderset_coCombineVoxelStates, gh = o.rawcolliderset_coVertices, bh = o.rawcolliderset_coIndices, mh = o.rawcolliderset_coTriMeshFlags, fh = o.rawcolliderset_coHeightFieldFlags, yh = o.rawcolliderset_coHeightfieldHeights, vh = o.rawcolliderset_coHeightfieldScale, Sh = o.rawcolliderset_coHeightfieldNRows, Rh = o.rawcolliderset_coHeightfieldNCols, Ch = o.rawcolliderset_coParent, xh = o.rawcolliderset_coSetEnabled, Eh = o.rawcolliderset_coIsEnabled, Ph = o.rawcolliderset_coSetContactSkin, jh = o.rawcolliderset_coContactSkin, Ah = o.rawcolliderset_coFriction, Ih = o.rawcolliderset_coRestitution, zh = o.rawcolliderset_coDensity, Th = o.rawcolliderset_coMass, Fh = o.rawcolliderset_coVolume, kh = o.rawcolliderset_coCollisionGroups, Dh = o.rawcolliderset_coSolverGroups, Mh = o.rawcolliderset_coActiveHooks, Lh = o.rawcolliderset_coActiveCollisionTypes, Bh = o.rawcolliderset_coActiveEvents, Nh = o.rawcolliderset_coContactForceEventThreshold, Hh = o.rawcolliderset_coContainsPoint, Oh = o.rawcolliderset_coCastShape, Gh = o.rawcolliderset_coCastCollider, Wh = o.rawcolliderset_coIntersectsShape, Vh = o.rawcolliderset_coContactShape, Uh = o.rawcolliderset_coContactCollider, Jh = o.rawcolliderset_coProjectPoint, qh = o.rawcolliderset_coIntersectsRay, Kh = o.rawcolliderset_coCastRay, $h = o.rawcolliderset_coCastRayAndGetNormal, Xh = o.rawcolliderset_coSetSensor, Yh = o.rawcolliderset_coSetRestitution, Qh = o.rawcolliderset_coSetFriction, Zh = o.rawcolliderset_coFrictionCombineRule, tw = o.rawcolliderset_coSetFrictionCombineRule, ew = o.rawcolliderset_coRestitutionCombineRule, rw = o.rawcolliderset_coSetRestitutionCombineRule, nw = o.rawcolliderset_coSetCollisionGroups, iw = o.rawcolliderset_coSetSolverGroups, sw = o.rawcolliderset_coSetActiveHooks, aw = o.rawcolliderset_coSetActiveEvents, ow = o.rawcolliderset_coSetActiveCollisionTypes, cw = o.rawcolliderset_coSetShape, lw = o.rawcolliderset_coSetContactForceEventThreshold, _w = o.rawcolliderset_coSetDensity, dw = o.rawcolliderset_coSetMass, hw = o.rawcolliderset_coSetMassProperties, ww = o.__wbg_rawcolliderset_free, uw = o.rawcolliderset_new, pw = o.rawcolliderset_len, gw = o.rawcolliderset_contains, bw = o.rawcolliderset_createCollider, mw = o.rawcolliderset_remove, fw = o.rawcolliderset_forEachColliderHandle, yw = o.__wbg_rawshapecontact_free, vw = o.__wbg_rawnarrowphase_free, Sw = o.rawnarrowphase_new, Rw = o.rawnarrowphase_contact_pairs_with, Cw = o.rawnarrowphase_contact_pair, xw = o.rawnarrowphase_intersection_pairs_with, Ew = o.rawnarrowphase_intersection_pair, Pw = o.__wbg_rawcontactmanifold_free, jw = o.rawcontactpair_collider1, Aw = o.rawcontactpair_collider2, Iw = o.rawcontactpair_numContactManifolds, zw = o.rawcontactpair_contactManifold, Tw = o.rawcontactmanifold_normal, Fw = o.rawcontactmanifold_local_n1, kw = o.rawcontactmanifold_local_n2, Dw = o.rawcontactmanifold_subshape1, Mw = o.rawcontactmanifold_subshape2, Lw = o.rawcontactmanifold_num_contacts, Bw = o.rawcontactmanifold_contact_local_p1, Nw = o.rawcontactmanifold_contact_local_p2, Hw = o.rawcontactmanifold_contact_dist, Ow = o.rawcontactmanifold_contact_fid1, Gw = o.rawcontactmanifold_contact_fid2, Ww = o.rawcontactmanifold_contact_impulse, Vw = o.rawcontactmanifold_contact_tangent_impulse_x, Uw = o.rawcontactmanifold_contact_tangent_impulse_y, Jw = o.rawcontactmanifold_num_solver_contacts, qw = o.rawcontactmanifold_solver_contact_point, Kw = o.rawcontactmanifold_solver_contact_dist, $w = o.rawcontactmanifold_solver_contact_friction, Xw = o.rawcontactmanifold_solver_contact_restitution, Yw = o.rawcontactmanifold_solver_contact_tangent_velocity, Qw = o.__wbg_rawpointprojection_free, Zw = o.rawpointprojection_point, tu = o.rawpointprojection_isInside, eu = o.__wbg_rawpointcolliderprojection_free, ru = o.rawpointcolliderprojection_colliderHandle, nu = o.rawpointcolliderprojection_point, iu = o.rawpointcolliderprojection_isInside, su = o.rawpointcolliderprojection_featureType, au = o.rawpointcolliderprojection_featureId, ou = o.__wbg_rawrayintersection_free, cu = o.__wbg_rawraycolliderhit_free, lu = o.__wbg_rawshape_free, _u = o.rawshape_cuboid, du = o.rawshape_roundCuboid, hu = o.rawshape_ball, wu = o.rawshape_halfspace, uu = o.rawshape_capsule, pu = o.rawshape_cylinder, gu = o.rawshape_roundCylinder, bu = o.rawshape_cone, mu = o.rawshape_roundCone, fu = o.rawshape_voxels, yu = o.rawshape_voxelsFromPoints, vu = o.rawshape_polyline, Su = o.rawshape_trimesh, Ru = o.rawshape_heightfield, Cu = o.rawshape_segment, xu = o.rawshape_triangle, Eu = o.rawshape_roundTriangle, Pu = o.rawshape_convexHull, ju = o.rawshape_roundConvexHull, Au = o.rawshape_convexMesh, Iu = o.rawshape_roundConvexMesh, zu = o.rawshape_castShape, Tu = o.rawshape_intersectsShape, Fu = o.rawshape_contactShape, ku = o.rawshape_containsPoint, Du = o.rawshape_projectPoint, Mu = o.rawshape_intersectsRay, Lu = o.rawshape_castRay, Bu = o.rawshape_castRayAndGetNormal, Nu = o.__wbg_rawshapecasthit_free, Hu = o.rawshapecasthit_witness1, Ou = o.rawshapecasthit_normal1, Gu = o.rawshapecasthit_normal2, Wu = o.__wbg_rawcollidershapecasthit_free, Vu = o.rawcollidershapecasthit_time_of_impact, Uu = o.rawcollidershapecasthit_witness1, Ju = o.rawcollidershapecasthit_witness2, qu = o.rawrotation_new, Ku = o.rawrotation_identity, $u = o.rawrotation_x, Xu = o.rawrotation_w, Yu = o.rawvector_zero, Qu = o.rawvector_new, Zu = o.rawvector_set_x, tp = o.rawvector_set_z, ep = o.rawvector_xyz, rp = o.rawvector_yxz, np = o.rawvector_zxy, ip = o.rawvector_xzy, sp = o.rawvector_yzx, ap = o.rawvector_zyx, op = o.rawsdpmatrix3_elements, cp = o.__wbg_rawdebugrenderpipeline_free, lp = o.rawdebugrenderpipeline_new, _p = o.rawdebugrenderpipeline_vertices, dp = o.rawdebugrenderpipeline_colors, hp = o.rawdebugrenderpipeline_render, wp = o.__wbg_raweventqueue_free, up = o.__wbg_rawcontactforceevent_free, pp = o.rawcontactforceevent_collider2, gp = o.rawcontactforceevent_total_force, bp = o.rawcontactforceevent_total_force_magnitude, mp = o.rawcontactforceevent_max_force_direction, fp = o.rawcontactforceevent_max_force_magnitude, yp = o.raweventqueue_new, vp = o.raweventqueue_drainCollisionEvents, Sp = o.raweventqueue_drainContactForceEvents, Rp = o.raweventqueue_clear, Cp = o.__wbg_rawphysicspipeline_free, xp = o.rawphysicspipeline_new, Ep = o.rawphysicspipeline_step, Pp = o.rawphysicspipeline_stepWithEvents, jp = o.__wbg_rawdeserializedworld_free, Ap = o.rawdeserializedworld_takeGravity, Ip = o.rawdeserializedworld_takeIntegrationParameters, zp = o.rawdeserializedworld_takeIslandManager, Tp = o.rawdeserializedworld_takeBroadPhase, Fp = o.rawdeserializedworld_takeNarrowPhase, kp = o.rawdeserializedworld_takeBodies, Dp = o.rawdeserializedworld_takeColliders, Mp = o.rawdeserializedworld_takeImpulseJoints, Lp = o.rawdeserializedworld_takeMultibodyJoints, Bp = o.__wbg_rawserializationpipeline_free, Np = o.rawserializationpipeline_new, Hp = o.rawserializationpipeline_serializeAll, Op = o.rawserializationpipeline_deserializeAll, Gp = o.rawintegrationparameters_set_numAdditionalFrictionIterations, Wp = o.rawintegrationparameters_set_numInternalPgsIterations, Vp = o.rawvector_set_y, Up = o.reserve_memory, Jp = o.rawkinematiccharactercontroller_up, qp = o.rawshapecontact_normal2, Kp = o.rawshapecontact_point1, $p = o.rawshapecontact_point2, Xp = o.rawrayintersection_normal, Yp = o.rawraycolliderintersection_normal, Qp = o.rawshapecontact_normal1, Zp = o.rawcollidershapecasthit_normal1, tg = o.rawcollidershapecasthit_normal2, eg = o.rawshapecasthit_witness2, rg = o.rawkinematiccharactercontroller_offset, ng = o.rawintegrationparameters_normalizedAllowedLinearError, ig = o.rawintegrationparameters_numAdditionalFrictionIterations, sg = o.rawintegrationparameters_numInternalPgsIterations, ag = o.rawrigidbodyset_len, og = o.rawshapecontact_distance, cg = o.rawrayintersection_featureType, lg = o.rawraycolliderintersection_colliderHandle, _g = o.rawrayintersection_time_of_impact, dg = o.rawraycolliderintersection_featureType, hg = o.rawraycolliderhit_colliderHandle, wg = o.rawraycolliderintersection_time_of_impact, ug = o.rawcollidershapecasthit_colliderHandle, pg = o.rawraycolliderhit_timeOfImpact, gg = o.rawshapecasthit_time_of_impact, bg = o.rawrotation_y, mg = o.rawrotation_z, fg = o.rawvector_x, yg = o.rawvector_y, vg = o.rawvector_z, Sg = o.rawcontactforceevent_collider1, Rg = o.rawintegrationparameters_normalizedPredictionDistance, Cg = o.rawrayintersection_featureId, xg = o.rawraycolliderintersection_featureId, Eg = o.rawcolliderset_isHandleValid, Pg = o.__wbg_rawcontactpair_free, jg = o.__wbg_rawraycolliderintersection_free, Ag = o.__wbg_rawrotation_free, Ig = o.__wbg_rawvector_free, zg = o.__wbg_rawsdpmatrix3_free, Tg = o.__wbindgen_export_0, Fg = o.__wbindgen_add_to_stack_pointer, kg = o.__wbindgen_export_1, Dg = o.__wbindgen_export_2, Mg = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wbg_rawbroadphase_free: kd,
    __wbg_rawccdsolver_free: Vc,
    __wbg_rawcharactercollision_free: Eo,
    __wbg_rawcolliderset_free: ww,
    __wbg_rawcollidershapecasthit_free: Wu,
    __wbg_rawcontactforceevent_free: up,
    __wbg_rawcontactmanifold_free: Pw,
    __wbg_rawcontactpair_free: Pg,
    __wbg_rawdebugrenderpipeline_free: cp,
    __wbg_rawdeserializedworld_free: jp,
    __wbg_rawdynamicraycastvehiclecontroller_free: qo,
    __wbg_raweventqueue_free: wp,
    __wbg_rawgenericjoint_free: Ol,
    __wbg_rawimpulsejointset_free: dl,
    __wbg_rawintegrationparameters_free: fl,
    __wbg_rawislandmanager_free: Bl,
    __wbg_rawkinematiccharactercontroller_free: Qa,
    __wbg_rawmultibodyjointset_free: s_,
    __wbg_rawnarrowphase_free: vw,
    __wbg_rawphysicspipeline_free: Cp,
    __wbg_rawpidcontroller_free: Mo,
    __wbg_rawpointcolliderprojection_free: eu,
    __wbg_rawpointprojection_free: Qw,
    __wbg_rawraycolliderhit_free: cu,
    __wbg_rawraycolliderintersection_free: jg,
    __wbg_rawrayintersection_free: ou,
    __wbg_rawrigidbodyset_free: Pd,
    __wbg_rawrotation_free: Ag,
    __wbg_rawsdpmatrix3_free: zg,
    __wbg_rawserializationpipeline_free: Bp,
    __wbg_rawshape_free: lu,
    __wbg_rawshapecasthit_free: Nu,
    __wbg_rawshapecontact_free: yw,
    __wbg_rawvector_free: Ig,
    __wbindgen_add_to_stack_pointer: Fg,
    __wbindgen_export_0: Tg,
    __wbindgen_export_1: kg,
    __wbindgen_export_2: Dg,
    memory: Xa,
    rawbroadphase_castRay: Md,
    rawbroadphase_castRayAndGetNormal: Ld,
    rawbroadphase_castShape: Wd,
    rawbroadphase_collidersWithAabbIntersectingAabb: Ud,
    rawbroadphase_intersectionWithShape: Nd,
    rawbroadphase_intersectionsWithPoint: Gd,
    rawbroadphase_intersectionsWithRay: Bd,
    rawbroadphase_intersectionsWithShape: Vd,
    rawbroadphase_new: Dd,
    rawbroadphase_projectPoint: Hd,
    rawbroadphase_projectPointAndGetFeature: Od,
    rawccdsolver_new: Uc,
    rawcharactercollision_handle: jo,
    rawcharactercollision_new: Po,
    rawcharactercollision_toi: zo,
    rawcharactercollision_translationDeltaApplied: Ao,
    rawcharactercollision_translationDeltaRemaining: Io,
    rawcharactercollision_worldNormal1: ko,
    rawcharactercollision_worldNormal2: Do,
    rawcharactercollision_worldWitness1: To,
    rawcharactercollision_worldWitness2: Fo,
    rawcolliderset_coActiveCollisionTypes: Lh,
    rawcolliderset_coActiveEvents: Bh,
    rawcolliderset_coActiveHooks: Mh,
    rawcolliderset_coCastCollider: Gh,
    rawcolliderset_coCastRay: Kh,
    rawcolliderset_coCastRayAndGetNormal: $h,
    rawcolliderset_coCastShape: Oh,
    rawcolliderset_coCollisionGroups: kh,
    rawcolliderset_coCombineVoxelStates: ph,
    rawcolliderset_coContactCollider: Uh,
    rawcolliderset_coContactForceEventThreshold: Nh,
    rawcolliderset_coContactShape: Vh,
    rawcolliderset_coContactSkin: jh,
    rawcolliderset_coContainsPoint: Hh,
    rawcolliderset_coDensity: zh,
    rawcolliderset_coFriction: Ah,
    rawcolliderset_coFrictionCombineRule: Zh,
    rawcolliderset_coHalfExtents: nh,
    rawcolliderset_coHalfHeight: oh,
    rawcolliderset_coHalfspaceNormal: rh,
    rawcolliderset_coHeightFieldFlags: fh,
    rawcolliderset_coHeightfieldHeights: yh,
    rawcolliderset_coHeightfieldNCols: Rh,
    rawcolliderset_coHeightfieldNRows: Sh,
    rawcolliderset_coHeightfieldScale: vh,
    rawcolliderset_coIndices: bh,
    rawcolliderset_coIntersectsRay: qh,
    rawcolliderset_coIntersectsShape: Wh,
    rawcolliderset_coIsEnabled: Eh,
    rawcolliderset_coIsSensor: th,
    rawcolliderset_coMass: Th,
    rawcolliderset_coParent: Ch,
    rawcolliderset_coProjectPoint: Jh,
    rawcolliderset_coPropagateVoxelChange: uh,
    rawcolliderset_coRadius: sh,
    rawcolliderset_coRestitution: Ih,
    rawcolliderset_coRestitutionCombineRule: ew,
    rawcolliderset_coRotation: qd,
    rawcolliderset_coRotationWrtParent: $d,
    rawcolliderset_coRoundRadius: lh,
    rawcolliderset_coSetActiveCollisionTypes: ow,
    rawcolliderset_coSetActiveEvents: aw,
    rawcolliderset_coSetActiveHooks: sw,
    rawcolliderset_coSetCollisionGroups: nw,
    rawcolliderset_coSetContactForceEventThreshold: lw,
    rawcolliderset_coSetContactSkin: Ph,
    rawcolliderset_coSetDensity: _w,
    rawcolliderset_coSetEnabled: xh,
    rawcolliderset_coSetFriction: Qh,
    rawcolliderset_coSetFrictionCombineRule: tw,
    rawcolliderset_coSetHalfExtents: ih,
    rawcolliderset_coSetHalfHeight: ch,
    rawcolliderset_coSetMass: dw,
    rawcolliderset_coSetMassProperties: hw,
    rawcolliderset_coSetRadius: ah,
    rawcolliderset_coSetRestitution: Yh,
    rawcolliderset_coSetRestitutionCombineRule: rw,
    rawcolliderset_coSetRotation: Qd,
    rawcolliderset_coSetRotationWrtParent: Zd,
    rawcolliderset_coSetRoundRadius: _h,
    rawcolliderset_coSetSensor: Xh,
    rawcolliderset_coSetShape: cw,
    rawcolliderset_coSetSolverGroups: iw,
    rawcolliderset_coSetTranslation: Xd,
    rawcolliderset_coSetTranslationWrtParent: Yd,
    rawcolliderset_coSetVoxel: wh,
    rawcolliderset_coShapeType: eh,
    rawcolliderset_coSolverGroups: Dh,
    rawcolliderset_coTranslation: Jd,
    rawcolliderset_coTranslationWrtParent: Kd,
    rawcolliderset_coTriMeshFlags: mh,
    rawcolliderset_coVertices: gh,
    rawcolliderset_coVolume: Fh,
    rawcolliderset_coVoxelData: dh,
    rawcolliderset_coVoxelSize: hh,
    rawcolliderset_contains: gw,
    rawcolliderset_createCollider: bw,
    rawcolliderset_forEachColliderHandle: fw,
    rawcolliderset_isHandleValid: Eg,
    rawcolliderset_len: pw,
    rawcolliderset_new: uw,
    rawcolliderset_remove: mw,
    rawcollidershapecasthit_colliderHandle: ug,
    rawcollidershapecasthit_normal1: Zp,
    rawcollidershapecasthit_normal2: tg,
    rawcollidershapecasthit_time_of_impact: Vu,
    rawcollidershapecasthit_witness1: Uu,
    rawcollidershapecasthit_witness2: Ju,
    rawcontactforceevent_collider1: Sg,
    rawcontactforceevent_collider2: pp,
    rawcontactforceevent_max_force_direction: mp,
    rawcontactforceevent_max_force_magnitude: fp,
    rawcontactforceevent_total_force: gp,
    rawcontactforceevent_total_force_magnitude: bp,
    rawcontactmanifold_contact_dist: Hw,
    rawcontactmanifold_contact_fid1: Ow,
    rawcontactmanifold_contact_fid2: Gw,
    rawcontactmanifold_contact_impulse: Ww,
    rawcontactmanifold_contact_local_p1: Bw,
    rawcontactmanifold_contact_local_p2: Nw,
    rawcontactmanifold_contact_tangent_impulse_x: Vw,
    rawcontactmanifold_contact_tangent_impulse_y: Uw,
    rawcontactmanifold_local_n1: Fw,
    rawcontactmanifold_local_n2: kw,
    rawcontactmanifold_normal: Tw,
    rawcontactmanifold_num_contacts: Lw,
    rawcontactmanifold_num_solver_contacts: Jw,
    rawcontactmanifold_solver_contact_dist: Kw,
    rawcontactmanifold_solver_contact_friction: $w,
    rawcontactmanifold_solver_contact_point: qw,
    rawcontactmanifold_solver_contact_restitution: Xw,
    rawcontactmanifold_solver_contact_tangent_velocity: Yw,
    rawcontactmanifold_subshape1: Dw,
    rawcontactmanifold_subshape2: Mw,
    rawcontactpair_collider1: jw,
    rawcontactpair_collider2: Aw,
    rawcontactpair_contactManifold: zw,
    rawcontactpair_numContactManifolds: Iw,
    rawdebugrenderpipeline_colors: dp,
    rawdebugrenderpipeline_new: lp,
    rawdebugrenderpipeline_render: hp,
    rawdebugrenderpipeline_vertices: _p,
    rawdeserializedworld_takeBodies: kp,
    rawdeserializedworld_takeBroadPhase: Tp,
    rawdeserializedworld_takeColliders: Dp,
    rawdeserializedworld_takeGravity: Ap,
    rawdeserializedworld_takeImpulseJoints: Mp,
    rawdeserializedworld_takeIntegrationParameters: Ip,
    rawdeserializedworld_takeIslandManager: zp,
    rawdeserializedworld_takeMultibodyJoints: Lp,
    rawdeserializedworld_takeNarrowPhase: Fp,
    rawdynamicraycastvehiclecontroller_add_wheel: ec,
    rawdynamicraycastvehiclecontroller_chassis: Xo,
    rawdynamicraycastvehiclecontroller_current_vehicle_speed: $o,
    rawdynamicraycastvehiclecontroller_index_forward_axis: Zo,
    rawdynamicraycastvehiclecontroller_index_up_axis: Yo,
    rawdynamicraycastvehiclecontroller_new: Ko,
    rawdynamicraycastvehiclecontroller_num_wheels: rc,
    rawdynamicraycastvehiclecontroller_set_index_forward_axis: tc,
    rawdynamicraycastvehiclecontroller_set_index_up_axis: Qo,
    rawdynamicraycastvehiclecontroller_set_wheel_axle_cs: Ac,
    rawdynamicraycastvehiclecontroller_set_wheel_brake: vc,
    rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs: sc,
    rawdynamicraycastvehiclecontroller_set_wheel_direction_cs: Pc,
    rawdynamicraycastvehiclecontroller_set_wheel_engine_force: xc,
    rawdynamicraycastvehiclecontroller_set_wheel_friction_slip: zc,
    rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force: fc,
    rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel: lc,
    rawdynamicraycastvehiclecontroller_set_wheel_radius: dc,
    rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness: Fc,
    rawdynamicraycastvehiclecontroller_set_wheel_steering: Rc,
    rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression: pc,
    rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation: bc,
    rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length: oc,
    rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness: wc,
    rawdynamicraycastvehiclecontroller_update_vehicle: nc,
    rawdynamicraycastvehiclecontroller_wheel_axle_cs: jc,
    rawdynamicraycastvehiclecontroller_wheel_brake: yc,
    rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs: ic,
    rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws: Bc,
    rawdynamicraycastvehiclecontroller_wheel_contact_point_ws: Nc,
    rawdynamicraycastvehiclecontroller_wheel_direction_cs: Ec,
    rawdynamicraycastvehiclecontroller_wheel_engine_force: Cc,
    rawdynamicraycastvehiclecontroller_wheel_forward_impulse: Dc,
    rawdynamicraycastvehiclecontroller_wheel_friction_slip: Ic,
    rawdynamicraycastvehiclecontroller_wheel_ground_object: Wc,
    rawdynamicraycastvehiclecontroller_wheel_hard_point_ws: Oc,
    rawdynamicraycastvehiclecontroller_wheel_is_in_contact: Gc,
    rawdynamicraycastvehiclecontroller_wheel_max_suspension_force: mc,
    rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel: cc,
    rawdynamicraycastvehiclecontroller_wheel_radius: _c,
    rawdynamicraycastvehiclecontroller_wheel_rotation: kc,
    rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness: Tc,
    rawdynamicraycastvehiclecontroller_wheel_side_impulse: Mc,
    rawdynamicraycastvehiclecontroller_wheel_steering: Sc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_compression: uc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_force: Lc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_length: Hc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation: gc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length: ac,
    rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness: hc,
    raweventqueue_clear: Rp,
    raweventqueue_drainCollisionEvents: vp,
    raweventqueue_drainContactForceEvents: Sp,
    raweventqueue_new: yp,
    rawgenericjoint_fixed: ql,
    rawgenericjoint_generic: Gl,
    rawgenericjoint_prismatic: Jl,
    rawgenericjoint_revolute: Kl,
    rawgenericjoint_rope: Vl,
    rawgenericjoint_spherical: Ul,
    rawgenericjoint_spring: Wl,
    rawimpulsejointset_contains: gl,
    rawimpulsejointset_createJoint: wl,
    rawimpulsejointset_forEachJointAttachedToRigidBody: ml,
    rawimpulsejointset_forEachJointHandle: bl,
    rawimpulsejointset_jointAnchor1: Yc,
    rawimpulsejointset_jointAnchor2: Qc,
    rawimpulsejointset_jointBodyHandle1: qc,
    rawimpulsejointset_jointBodyHandle2: Kc,
    rawimpulsejointset_jointConfigureMotor: _l,
    rawimpulsejointset_jointConfigureMotorModel: ol,
    rawimpulsejointset_jointConfigureMotorPosition: ll,
    rawimpulsejointset_jointConfigureMotorVelocity: cl,
    rawimpulsejointset_jointContactsEnabled: el,
    rawimpulsejointset_jointFrameX1: $c,
    rawimpulsejointset_jointFrameX2: Xc,
    rawimpulsejointset_jointLimitsEnabled: nl,
    rawimpulsejointset_jointLimitsMax: sl,
    rawimpulsejointset_jointLimitsMin: il,
    rawimpulsejointset_jointSetAnchor1: Zc,
    rawimpulsejointset_jointSetAnchor2: tl,
    rawimpulsejointset_jointSetContactsEnabled: rl,
    rawimpulsejointset_jointSetLimits: al,
    rawimpulsejointset_jointType: Jc,
    rawimpulsejointset_len: pl,
    rawimpulsejointset_new: hl,
    rawimpulsejointset_remove: ul,
    rawintegrationparameters_contact_erp: Sl,
    rawintegrationparameters_dt: vl,
    rawintegrationparameters_lengthUnit: El,
    rawintegrationparameters_maxCcdSubsteps: xl,
    rawintegrationparameters_minIslandSize: Cl,
    rawintegrationparameters_new: yl,
    rawintegrationparameters_normalizedAllowedLinearError: ng,
    rawintegrationparameters_normalizedPredictionDistance: Rg,
    rawintegrationparameters_numAdditionalFrictionIterations: ig,
    rawintegrationparameters_numInternalPgsIterations: sg,
    rawintegrationparameters_numSolverIterations: Rl,
    rawintegrationparameters_set_contact_natural_frequency: jl,
    rawintegrationparameters_set_dt: Pl,
    rawintegrationparameters_set_lengthUnit: kl,
    rawintegrationparameters_set_maxCcdSubsteps: Fl,
    rawintegrationparameters_set_minIslandSize: Tl,
    rawintegrationparameters_set_normalizedAllowedLinearError: Al,
    rawintegrationparameters_set_normalizedPredictionDistance: Il,
    rawintegrationparameters_set_numAdditionalFrictionIterations: Gp,
    rawintegrationparameters_set_numInternalPgsIterations: Wp,
    rawintegrationparameters_set_numSolverIterations: zl,
    rawintegrationparameters_switchToSmallStepsPgsSolver: Ml,
    rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart: Ll,
    rawintegrationparameters_switchToStandardPgsSolver: Dl,
    rawislandmanager_forEachActiveRigidBodyHandle: Hl,
    rawislandmanager_new: Nl,
    rawkinematiccharactercontroller_autostepEnabled: lo,
    rawkinematiccharactercontroller_autostepIncludesDynamicBodies: co,
    rawkinematiccharactercontroller_autostepMaxHeight: ao,
    rawkinematiccharactercontroller_autostepMinWidth: oo,
    rawkinematiccharactercontroller_computeColliderMovement: vo,
    rawkinematiccharactercontroller_computedCollision: xo,
    rawkinematiccharactercontroller_computedGrounded: Ro,
    rawkinematiccharactercontroller_computedMovement: So,
    rawkinematiccharactercontroller_disableAutostep: ho,
    rawkinematiccharactercontroller_disableSnapToGround: fo,
    rawkinematiccharactercontroller_enableAutostep: _o,
    rawkinematiccharactercontroller_enableSnapToGround: mo,
    rawkinematiccharactercontroller_maxSlopeClimbAngle: wo,
    rawkinematiccharactercontroller_minSlopeSlideAngle: po,
    rawkinematiccharactercontroller_new: Za,
    rawkinematiccharactercontroller_normalNudgeFactor: eo,
    rawkinematiccharactercontroller_numComputedCollisions: Co,
    rawkinematiccharactercontroller_offset: rg,
    rawkinematiccharactercontroller_setMaxSlopeClimbAngle: uo,
    rawkinematiccharactercontroller_setMinSlopeSlideAngle: go,
    rawkinematiccharactercontroller_setNormalNudgeFactor: ro,
    rawkinematiccharactercontroller_setOffset: no,
    rawkinematiccharactercontroller_setSlideEnabled: so,
    rawkinematiccharactercontroller_setUp: to,
    rawkinematiccharactercontroller_slideEnabled: io,
    rawkinematiccharactercontroller_snapToGroundDistance: bo,
    rawkinematiccharactercontroller_snapToGroundEnabled: yo,
    rawkinematiccharactercontroller_up: Jp,
    rawmultibodyjointset_contains: l_,
    rawmultibodyjointset_createJoint: o_,
    rawmultibodyjointset_forEachJointAttachedToRigidBody: d_,
    rawmultibodyjointset_forEachJointHandle: __,
    rawmultibodyjointset_jointAnchor1: Ql,
    rawmultibodyjointset_jointAnchor2: Zl,
    rawmultibodyjointset_jointContactsEnabled: t_,
    rawmultibodyjointset_jointFrameX1: Xl,
    rawmultibodyjointset_jointFrameX2: Yl,
    rawmultibodyjointset_jointLimitsEnabled: r_,
    rawmultibodyjointset_jointLimitsMax: i_,
    rawmultibodyjointset_jointLimitsMin: n_,
    rawmultibodyjointset_jointSetContactsEnabled: e_,
    rawmultibodyjointset_jointType: $l,
    rawmultibodyjointset_new: a_,
    rawmultibodyjointset_remove: c_,
    rawnarrowphase_contact_pair: Cw,
    rawnarrowphase_contact_pairs_with: Rw,
    rawnarrowphase_intersection_pair: Ew,
    rawnarrowphase_intersection_pairs_with: xw,
    rawnarrowphase_new: Sw,
    rawphysicspipeline_new: xp,
    rawphysicspipeline_step: Ep,
    rawphysicspipeline_stepWithEvents: Pp,
    rawpidcontroller_angular_correction: Jo,
    rawpidcontroller_apply_angular_correction: Vo,
    rawpidcontroller_apply_linear_correction: Wo,
    rawpidcontroller_linear_correction: Uo,
    rawpidcontroller_new: Lo,
    rawpidcontroller_reset_integrals: Go,
    rawpidcontroller_set_axes_mask: Oo,
    rawpidcontroller_set_kd: Ho,
    rawpidcontroller_set_ki: No,
    rawpidcontroller_set_kp: Bo,
    rawpointcolliderprojection_colliderHandle: ru,
    rawpointcolliderprojection_featureId: au,
    rawpointcolliderprojection_featureType: su,
    rawpointcolliderprojection_isInside: iu,
    rawpointcolliderprojection_point: nu,
    rawpointprojection_isInside: tu,
    rawpointprojection_point: Zw,
    rawraycolliderhit_colliderHandle: hg,
    rawraycolliderhit_timeOfImpact: pg,
    rawraycolliderintersection_colliderHandle: lg,
    rawraycolliderintersection_featureId: xg,
    rawraycolliderintersection_featureType: dg,
    rawraycolliderintersection_normal: Yp,
    rawraycolliderintersection_time_of_impact: wg,
    rawrayintersection_featureId: Cg,
    rawrayintersection_featureType: cg,
    rawrayintersection_normal: Xp,
    rawrayintersection_time_of_impact: _g,
    rawrigidbodyset_contains: zd,
    rawrigidbodyset_createRigidBody: Ad,
    rawrigidbodyset_forEachRigidBodyHandle: Td,
    rawrigidbodyset_len: ag,
    rawrigidbodyset_new: jd,
    rawrigidbodyset_propagateModifiedBodyPositionsToColliders: Fd,
    rawrigidbodyset_rbAddForce: pd,
    rawrigidbodyset_rbAddForceAtPoint: fd,
    rawrigidbodyset_rbAddTorque: bd,
    rawrigidbodyset_rbAdditionalSolverIterations: vd,
    rawrigidbodyset_rbAngularDamping: ad,
    rawrigidbodyset_rbAngvel: A_,
    rawrigidbodyset_rbApplyImpulse: gd,
    rawrigidbodyset_rbApplyImpulseAtPoint: yd,
    rawrigidbodyset_rbApplyTorqueImpulse: md,
    rawrigidbodyset_rbBodyType: td,
    rawrigidbodyset_rbCollider: Z_,
    rawrigidbodyset_rbDominanceGroup: D_,
    rawrigidbodyset_rbEffectiveAngularInertia: K_,
    rawrigidbodyset_rbEffectiveInvMass: O_,
    rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt: q_,
    rawrigidbodyset_rbEnableCcd: L_,
    rawrigidbodyset_rbGravityScale: dd,
    rawrigidbodyset_rbInvMass: H_,
    rawrigidbodyset_rbInvPrincipalInertiaSqrt: V_,
    rawrigidbodyset_rbIsCcdEnabled: X_,
    rawrigidbodyset_rbIsDynamic: id,
    rawrigidbodyset_rbIsEnabled: _d,
    rawrigidbodyset_rbIsFixed: rd,
    rawrigidbodyset_rbIsKinematic: nd,
    rawrigidbodyset_rbIsMoving: g_,
    rawrigidbodyset_rbIsSleeping: p_,
    rawrigidbodyset_rbLinearDamping: sd,
    rawrigidbodyset_rbLinvel: j_,
    rawrigidbodyset_rbLocalCom: G_,
    rawrigidbodyset_rbLockRotations: F_,
    rawrigidbodyset_rbLockTranslations: z_,
    rawrigidbodyset_rbMass: N_,
    rawrigidbodyset_rbNextRotation: m_,
    rawrigidbodyset_rbNextTranslation: b_,
    rawrigidbodyset_rbNumColliders: Q_,
    rawrigidbodyset_rbPrincipalInertia: J_,
    rawrigidbodyset_rbPrincipalInertiaLocalFrame: U_,
    rawrigidbodyset_rbRecomputeMassPropertiesFromColliders: x_,
    rawrigidbodyset_rbResetForces: wd,
    rawrigidbodyset_rbResetTorques: ud,
    rawrigidbodyset_rbRotation: w_,
    rawrigidbodyset_rbSetAdditionalMass: E_,
    rawrigidbodyset_rbSetAdditionalMassProperties: P_,
    rawrigidbodyset_rbSetAdditionalSolverIterations: Sd,
    rawrigidbodyset_rbSetAngularDamping: cd,
    rawrigidbodyset_rbSetAngvel: S_,
    rawrigidbodyset_rbSetBodyType: ed,
    rawrigidbodyset_rbSetDominanceGroup: M_,
    rawrigidbodyset_rbSetEnabled: ld,
    rawrigidbodyset_rbSetEnabledRotations: k_,
    rawrigidbodyset_rbSetEnabledTranslations: T_,
    rawrigidbodyset_rbSetGravityScale: hd,
    rawrigidbodyset_rbSetLinearDamping: od,
    rawrigidbodyset_rbSetLinvel: v_,
    rawrigidbodyset_rbSetNextKinematicRotation: C_,
    rawrigidbodyset_rbSetNextKinematicTranslation: R_,
    rawrigidbodyset_rbSetRotation: y_,
    rawrigidbodyset_rbSetSoftCcdPrediction: B_,
    rawrigidbodyset_rbSetTranslation: f_,
    rawrigidbodyset_rbSetUserData: Cd,
    rawrigidbodyset_rbSleep: u_,
    rawrigidbodyset_rbSoftCcdPrediction: Y_,
    rawrigidbodyset_rbTranslation: h_,
    rawrigidbodyset_rbUserData: Rd,
    rawrigidbodyset_rbUserForce: xd,
    rawrigidbodyset_rbUserTorque: Ed,
    rawrigidbodyset_rbVelocityAtPoint: I_,
    rawrigidbodyset_rbWakeUp: $_,
    rawrigidbodyset_rbWorldCom: W_,
    rawrigidbodyset_remove: Id,
    rawrotation_identity: Ku,
    rawrotation_new: qu,
    rawrotation_w: Xu,
    rawrotation_x: $u,
    rawrotation_y: bg,
    rawrotation_z: mg,
    rawsdpmatrix3_elements: op,
    rawserializationpipeline_deserializeAll: Op,
    rawserializationpipeline_new: Np,
    rawserializationpipeline_serializeAll: Hp,
    rawshape_ball: hu,
    rawshape_capsule: uu,
    rawshape_castRay: Lu,
    rawshape_castRayAndGetNormal: Bu,
    rawshape_castShape: zu,
    rawshape_cone: bu,
    rawshape_contactShape: Fu,
    rawshape_containsPoint: ku,
    rawshape_convexHull: Pu,
    rawshape_convexMesh: Au,
    rawshape_cuboid: _u,
    rawshape_cylinder: pu,
    rawshape_halfspace: wu,
    rawshape_heightfield: Ru,
    rawshape_intersectsRay: Mu,
    rawshape_intersectsShape: Tu,
    rawshape_polyline: vu,
    rawshape_projectPoint: Du,
    rawshape_roundCone: mu,
    rawshape_roundConvexHull: ju,
    rawshape_roundConvexMesh: Iu,
    rawshape_roundCuboid: du,
    rawshape_roundCylinder: gu,
    rawshape_roundTriangle: Eu,
    rawshape_segment: Cu,
    rawshape_triangle: xu,
    rawshape_trimesh: Su,
    rawshape_voxels: fu,
    rawshape_voxelsFromPoints: yu,
    rawshapecasthit_normal1: Ou,
    rawshapecasthit_normal2: Gu,
    rawshapecasthit_time_of_impact: gg,
    rawshapecasthit_witness1: Hu,
    rawshapecasthit_witness2: eg,
    rawshapecontact_distance: og,
    rawshapecontact_normal1: Qp,
    rawshapecontact_normal2: qp,
    rawshapecontact_point1: Kp,
    rawshapecontact_point2: $p,
    rawvector_new: Qu,
    rawvector_set_x: Zu,
    rawvector_set_y: Vp,
    rawvector_set_z: tp,
    rawvector_x: fg,
    rawvector_xyz: ep,
    rawvector_xzy: ip,
    rawvector_y: yg,
    rawvector_yxz: rp,
    rawvector_yzx: sp,
    rawvector_z: vg,
    rawvector_zero: Yu,
    rawvector_zxy: np,
    rawvector_zyx: ap,
    reserve_memory: Up,
    version: Ya
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  ua(Mg);
  class Lg {
    constructor(t, e, r) {
      this.x = t, this.y = e, this.z = r;
    }
  }
  class g {
    static new(t, e, r) {
      return new Lg(t, e, r);
    }
    static intoRaw(t) {
      return new p(t.x, t.y, t.z);
    }
    static zeros() {
      return g.new(0, 0, 0);
    }
    static fromRaw(t) {
      if (!t) return null;
      let e = g.new(t.x, t.y, t.z);
      return t.free(), e;
    }
    static copy(t, e) {
      t.x = e.x, t.y = e.y, t.z = e.z;
    }
  }
  class jn {
    constructor(t, e, r, i) {
      this.x = t, this.y = e, this.z = r, this.w = i;
    }
  }
  class M {
    static identity() {
      return new jn(0, 0, 0, 1);
    }
    static fromRaw(t) {
      if (!t) return null;
      let e = new jn(t.x, t.y, t.z, t.w);
      return t.free(), e;
    }
    static intoRaw(t) {
      return new L(t.x, t.y, t.z, t.w);
    }
    static copy(t, e) {
      t.x = e.x, t.y = e.y, t.z = e.z, t.w = e.w;
    }
  }
  class Bg {
    get m11() {
      return this.elements[0];
    }
    get m12() {
      return this.elements[1];
    }
    get m21() {
      return this.m12;
    }
    get m13() {
      return this.elements[2];
    }
    get m31() {
      return this.m13;
    }
    get m22() {
      return this.elements[3];
    }
    get m23() {
      return this.elements[4];
    }
    get m32() {
      return this.m23;
    }
    get m33() {
      return this.elements[5];
    }
    constructor(t) {
      this.elements = t;
    }
  }
  class An {
    static fromRaw(t) {
      const e = new Bg(t.elements());
      return t.free(), e;
    }
  }
  var ft;
  (function(n) {
    n[n.Dynamic = 0] = "Dynamic", n[n.Fixed = 1] = "Fixed", n[n.KinematicPositionBased = 2] = "KinematicPositionBased", n[n.KinematicVelocityBased = 3] = "KinematicVelocityBased";
  })(ft || (ft = {}));
  class In {
    constructor(t, e, r) {
      this.rawSet = t, this.colliderSet = e, this.handle = r;
    }
    finalizeDeserialization(t) {
      this.colliderSet = t;
    }
    isValid() {
      return this.rawSet.contains(this.handle);
    }
    lockTranslations(t, e) {
      return this.rawSet.rbLockTranslations(this.handle, t, e);
    }
    lockRotations(t, e) {
      return this.rawSet.rbLockRotations(this.handle, t, e);
    }
    setEnabledTranslations(t, e, r, i) {
      return this.rawSet.rbSetEnabledTranslations(this.handle, t, e, r, i);
    }
    restrictTranslations(t, e, r, i) {
      this.setEnabledTranslations(t, e, r, i);
    }
    setEnabledRotations(t, e, r, i) {
      return this.rawSet.rbSetEnabledRotations(this.handle, t, e, r, i);
    }
    restrictRotations(t, e, r, i) {
      this.setEnabledRotations(t, e, r, i);
    }
    dominanceGroup() {
      return this.rawSet.rbDominanceGroup(this.handle);
    }
    setDominanceGroup(t) {
      this.rawSet.rbSetDominanceGroup(this.handle, t);
    }
    additionalSolverIterations() {
      return this.rawSet.rbAdditionalSolverIterations(this.handle);
    }
    setAdditionalSolverIterations(t) {
      this.rawSet.rbSetAdditionalSolverIterations(this.handle, t);
    }
    enableCcd(t) {
      this.rawSet.rbEnableCcd(this.handle, t);
    }
    setSoftCcdPrediction(t) {
      this.rawSet.rbSetSoftCcdPrediction(this.handle, t);
    }
    softCcdPrediction() {
      return this.rawSet.rbSoftCcdPrediction(this.handle);
    }
    translation() {
      let t = this.rawSet.rbTranslation(this.handle);
      return g.fromRaw(t);
    }
    rotation() {
      let t = this.rawSet.rbRotation(this.handle);
      return M.fromRaw(t);
    }
    nextTranslation() {
      let t = this.rawSet.rbNextTranslation(this.handle);
      return g.fromRaw(t);
    }
    nextRotation() {
      let t = this.rawSet.rbNextRotation(this.handle);
      return M.fromRaw(t);
    }
    setTranslation(t, e) {
      this.rawSet.rbSetTranslation(this.handle, t.x, t.y, t.z, e);
    }
    setLinvel(t, e) {
      let r = g.intoRaw(t);
      this.rawSet.rbSetLinvel(this.handle, r, e), r.free();
    }
    gravityScale() {
      return this.rawSet.rbGravityScale(this.handle);
    }
    setGravityScale(t, e) {
      this.rawSet.rbSetGravityScale(this.handle, t, e);
    }
    setRotation(t, e) {
      this.rawSet.rbSetRotation(this.handle, t.x, t.y, t.z, t.w, e);
    }
    setAngvel(t, e) {
      let r = g.intoRaw(t);
      this.rawSet.rbSetAngvel(this.handle, r, e), r.free();
    }
    setNextKinematicTranslation(t) {
      this.rawSet.rbSetNextKinematicTranslation(this.handle, t.x, t.y, t.z);
    }
    setNextKinematicRotation(t) {
      this.rawSet.rbSetNextKinematicRotation(this.handle, t.x, t.y, t.z, t.w);
    }
    linvel() {
      return g.fromRaw(this.rawSet.rbLinvel(this.handle));
    }
    velocityAtPoint(t) {
      const e = g.intoRaw(t);
      let r = g.fromRaw(this.rawSet.rbVelocityAtPoint(this.handle, e));
      return e.free(), r;
    }
    angvel() {
      return g.fromRaw(this.rawSet.rbAngvel(this.handle));
    }
    mass() {
      return this.rawSet.rbMass(this.handle);
    }
    effectiveInvMass() {
      return g.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle));
    }
    invMass() {
      return this.rawSet.rbInvMass(this.handle);
    }
    localCom() {
      return g.fromRaw(this.rawSet.rbLocalCom(this.handle));
    }
    worldCom() {
      return g.fromRaw(this.rawSet.rbWorldCom(this.handle));
    }
    invPrincipalInertiaSqrt() {
      return g.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle));
    }
    principalInertia() {
      return g.fromRaw(this.rawSet.rbPrincipalInertia(this.handle));
    }
    principalInertiaLocalFrame() {
      return M.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle));
    }
    effectiveWorldInvInertiaSqrt() {
      return An.fromRaw(this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle));
    }
    effectiveAngularInertia() {
      return An.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle));
    }
    sleep() {
      this.rawSet.rbSleep(this.handle);
    }
    wakeUp() {
      this.rawSet.rbWakeUp(this.handle);
    }
    isCcdEnabled() {
      return this.rawSet.rbIsCcdEnabled(this.handle);
    }
    numColliders() {
      return this.rawSet.rbNumColliders(this.handle);
    }
    collider(t) {
      return this.colliderSet.get(this.rawSet.rbCollider(this.handle, t));
    }
    setEnabled(t) {
      this.rawSet.rbSetEnabled(this.handle, t);
    }
    isEnabled() {
      return this.rawSet.rbIsEnabled(this.handle);
    }
    bodyType() {
      return this.rawSet.rbBodyType(this.handle);
    }
    setBodyType(t, e) {
      return this.rawSet.rbSetBodyType(this.handle, t, e);
    }
    isSleeping() {
      return this.rawSet.rbIsSleeping(this.handle);
    }
    isMoving() {
      return this.rawSet.rbIsMoving(this.handle);
    }
    isFixed() {
      return this.rawSet.rbIsFixed(this.handle);
    }
    isKinematic() {
      return this.rawSet.rbIsKinematic(this.handle);
    }
    isDynamic() {
      return this.rawSet.rbIsDynamic(this.handle);
    }
    linearDamping() {
      return this.rawSet.rbLinearDamping(this.handle);
    }
    angularDamping() {
      return this.rawSet.rbAngularDamping(this.handle);
    }
    setLinearDamping(t) {
      this.rawSet.rbSetLinearDamping(this.handle, t);
    }
    recomputeMassPropertiesFromColliders() {
      this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle, this.colliderSet.raw);
    }
    setAdditionalMass(t, e) {
      this.rawSet.rbSetAdditionalMass(this.handle, t, e);
    }
    setAdditionalMassProperties(t, e, r, i, a) {
      let c = g.intoRaw(e), l = g.intoRaw(r), _ = M.intoRaw(i);
      this.rawSet.rbSetAdditionalMassProperties(this.handle, t, c, l, _, a), c.free(), l.free(), _.free();
    }
    setAngularDamping(t) {
      this.rawSet.rbSetAngularDamping(this.handle, t);
    }
    resetForces(t) {
      this.rawSet.rbResetForces(this.handle, t);
    }
    resetTorques(t) {
      this.rawSet.rbResetTorques(this.handle, t);
    }
    addForce(t, e) {
      const r = g.intoRaw(t);
      this.rawSet.rbAddForce(this.handle, r, e), r.free();
    }
    applyImpulse(t, e) {
      const r = g.intoRaw(t);
      this.rawSet.rbApplyImpulse(this.handle, r, e), r.free();
    }
    addTorque(t, e) {
      const r = g.intoRaw(t);
      this.rawSet.rbAddTorque(this.handle, r, e), r.free();
    }
    applyTorqueImpulse(t, e) {
      const r = g.intoRaw(t);
      this.rawSet.rbApplyTorqueImpulse(this.handle, r, e), r.free();
    }
    addForceAtPoint(t, e, r) {
      const i = g.intoRaw(t), a = g.intoRaw(e);
      this.rawSet.rbAddForceAtPoint(this.handle, i, a, r), i.free(), a.free();
    }
    applyImpulseAtPoint(t, e, r) {
      const i = g.intoRaw(t), a = g.intoRaw(e);
      this.rawSet.rbApplyImpulseAtPoint(this.handle, i, a, r), i.free(), a.free();
    }
    userForce() {
      return g.fromRaw(this.rawSet.rbUserForce(this.handle));
    }
    userTorque() {
      return g.fromRaw(this.rawSet.rbUserTorque(this.handle));
    }
  }
  class Rt {
    constructor(t) {
      this.enabled = true, this.status = t, this.translation = g.zeros(), this.rotation = M.identity(), this.gravityScale = 1, this.linvel = g.zeros(), this.mass = 0, this.massOnly = false, this.centerOfMass = g.zeros(), this.translationsEnabledX = true, this.translationsEnabledY = true, this.angvel = g.zeros(), this.principalAngularInertia = g.zeros(), this.angularInertiaLocalFrame = M.identity(), this.translationsEnabledZ = true, this.rotationsEnabledX = true, this.rotationsEnabledY = true, this.rotationsEnabledZ = true, this.linearDamping = 0, this.angularDamping = 0, this.canSleep = true, this.sleeping = false, this.ccdEnabled = false, this.softCcdPrediction = 0, this.dominanceGroup = 0, this.additionalSolverIterations = 0;
    }
    static dynamic() {
      return new Rt(ft.Dynamic);
    }
    static kinematicPositionBased() {
      return new Rt(ft.KinematicPositionBased);
    }
    static kinematicVelocityBased() {
      return new Rt(ft.KinematicVelocityBased);
    }
    static fixed() {
      return new Rt(ft.Fixed);
    }
    static newDynamic() {
      return new Rt(ft.Dynamic);
    }
    static newKinematicPositionBased() {
      return new Rt(ft.KinematicPositionBased);
    }
    static newKinematicVelocityBased() {
      return new Rt(ft.KinematicVelocityBased);
    }
    static newStatic() {
      return new Rt(ft.Fixed);
    }
    setDominanceGroup(t) {
      return this.dominanceGroup = t, this;
    }
    setAdditionalSolverIterations(t) {
      return this.additionalSolverIterations = t, this;
    }
    setEnabled(t) {
      return this.enabled = t, this;
    }
    setTranslation(t, e, r) {
      if (typeof t != "number" || typeof e != "number" || typeof r != "number") throw TypeError("The translation components must be numbers.");
      return this.translation = {
        x: t,
        y: e,
        z: r
      }, this;
    }
    setRotation(t) {
      return M.copy(this.rotation, t), this;
    }
    setGravityScale(t) {
      return this.gravityScale = t, this;
    }
    setAdditionalMass(t) {
      return this.mass = t, this.massOnly = true, this;
    }
    setLinvel(t, e, r) {
      if (typeof t != "number" || typeof e != "number" || typeof r != "number") throw TypeError("The linvel components must be numbers.");
      return this.linvel = {
        x: t,
        y: e,
        z: r
      }, this;
    }
    setAngvel(t) {
      return g.copy(this.angvel, t), this;
    }
    setAdditionalMassProperties(t, e, r, i) {
      return this.mass = t, g.copy(this.centerOfMass, e), g.copy(this.principalAngularInertia, r), M.copy(this.angularInertiaLocalFrame, i), this.massOnly = false, this;
    }
    enabledTranslations(t, e, r) {
      return this.translationsEnabledX = t, this.translationsEnabledY = e, this.translationsEnabledZ = r, this;
    }
    restrictTranslations(t, e, r) {
      return this.enabledTranslations(t, e, r);
    }
    lockTranslations() {
      return this.enabledTranslations(false, false, false);
    }
    enabledRotations(t, e, r) {
      return this.rotationsEnabledX = t, this.rotationsEnabledY = e, this.rotationsEnabledZ = r, this;
    }
    restrictRotations(t, e, r) {
      return this.enabledRotations(t, e, r);
    }
    lockRotations() {
      return this.restrictRotations(false, false, false);
    }
    setLinearDamping(t) {
      return this.linearDamping = t, this;
    }
    setAngularDamping(t) {
      return this.angularDamping = t, this;
    }
    setCanSleep(t) {
      return this.canSleep = t, this;
    }
    setSleeping(t) {
      return this.sleeping = t, this;
    }
    setCcdEnabled(t) {
      return this.ccdEnabled = t, this;
    }
    setSoftCcdPrediction(t) {
      return this.softCcdPrediction = t, this;
    }
    setUserData(t) {
      return this.userData = t, this;
    }
  }
  class Ve {
    constructor() {
      this.fconv = new Float64Array(1), this.uconv = new Uint32Array(this.fconv.buffer), this.data = new Array(), this.size = 0;
    }
    set(t, e) {
      let r = this.index(t);
      for (; this.data.length <= r; ) this.data.push(null);
      this.data[r] == null && (this.size += 1), this.data[r] = e;
    }
    len() {
      return this.size;
    }
    delete(t) {
      let e = this.index(t);
      e < this.data.length && (this.data[e] != null && (this.size -= 1), this.data[e] = null);
    }
    clear() {
      this.data = new Array();
    }
    get(t) {
      let e = this.index(t);
      return e < this.data.length ? this.data[e] : null;
    }
    forEach(t) {
      for (const e of this.data) e != null && t(e);
    }
    getAll() {
      return this.data.filter((t) => t != null);
    }
    index(t) {
      return this.fconv[0] = t, this.uconv[0];
    }
  }
  class Ng {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new J(), this.map = new Ve(), t && t.forEachRigidBodyHandle((e) => {
        this.map.set(e, new In(t, null, e));
      });
    }
    finalizeDeserialization(t) {
      this.map.forEach((e) => e.finalizeDeserialization(t));
    }
    createRigidBody(t, e) {
      let r = g.intoRaw(e.translation), i = M.intoRaw(e.rotation), a = g.intoRaw(e.linvel), c = g.intoRaw(e.centerOfMass), l = g.intoRaw(e.angvel), _ = g.intoRaw(e.principalAngularInertia), h = M.intoRaw(e.angularInertiaLocalFrame), u = this.raw.createRigidBody(e.enabled, r, i, e.gravityScale, e.mass, e.massOnly, c, a, l, _, h, e.translationsEnabledX, e.translationsEnabledY, e.translationsEnabledZ, e.rotationsEnabledX, e.rotationsEnabledY, e.rotationsEnabledZ, e.linearDamping, e.angularDamping, e.status, e.canSleep, e.sleeping, e.softCcdPrediction, e.ccdEnabled, e.dominanceGroup, e.additionalSolverIterations);
      r.free(), i.free(), a.free(), c.free(), l.free(), _.free(), h.free();
      const w = new In(this.raw, t, u);
      return w.userData = e.userData, this.map.set(u, w), w;
    }
    remove(t, e, r, i, a) {
      for (let c = 0; c < this.raw.rbNumColliders(t); c += 1) r.unmap(this.raw.rbCollider(t, c));
      i.forEachJointHandleAttachedToRigidBody(t, (c) => i.unmap(c)), a.forEachJointHandleAttachedToRigidBody(t, (c) => a.unmap(c)), this.raw.remove(t, e.raw, r.raw, i.raw, a.raw), this.map.delete(t);
    }
    len() {
      return this.map.len();
    }
    contains(t) {
      return this.get(t) != null;
    }
    get(t) {
      return this.map.get(t);
    }
    forEach(t) {
      this.map.forEach(t);
    }
    forEachActiveRigidBody(t, e) {
      t.forEachActiveRigidBodyHandle((r) => {
        e(this.get(r));
      });
    }
    getAll() {
      return this.map.getAll();
    }
  }
  class Hg {
    constructor(t) {
      this.raw = t || new Ut();
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    get dt() {
      return this.raw.dt;
    }
    get contact_erp() {
      return this.raw.contact_erp;
    }
    get lengthUnit() {
      return this.raw.lengthUnit;
    }
    get normalizedAllowedLinearError() {
      return this.raw.normalizedAllowedLinearError;
    }
    get normalizedPredictionDistance() {
      return this.raw.normalizedPredictionDistance;
    }
    get numSolverIterations() {
      return this.raw.numSolverIterations;
    }
    get numAdditionalFrictionIterations() {
      return this.raw.numAdditionalFrictionIterations;
    }
    get numInternalPgsIterations() {
      return this.raw.numInternalPgsIterations;
    }
    get minIslandSize() {
      return this.raw.minIslandSize;
    }
    get maxCcdSubsteps() {
      return this.raw.maxCcdSubsteps;
    }
    set dt(t) {
      this.raw.dt = t;
    }
    set contact_natural_frequency(t) {
      this.raw.contact_natural_frequency = t;
    }
    set lengthUnit(t) {
      this.raw.lengthUnit = t;
    }
    set normalizedAllowedLinearError(t) {
      this.raw.normalizedAllowedLinearError = t;
    }
    set normalizedPredictionDistance(t) {
      this.raw.normalizedPredictionDistance = t;
    }
    set numSolverIterations(t) {
      this.raw.numSolverIterations = t;
    }
    set numAdditionalFrictionIterations(t) {
      this.raw.numAdditionalFrictionIterations = t;
    }
    set numInternalPgsIterations(t) {
      this.raw.numInternalPgsIterations = t;
    }
    set minIslandSize(t) {
      this.raw.minIslandSize = t;
    }
    set maxCcdSubsteps(t) {
      this.raw.maxCcdSubsteps = t;
    }
    switchToStandardPgsSolver() {
      this.raw.switchToStandardPgsSolver();
    }
    switchToSmallStepsPgsSolver() {
      this.raw.switchToSmallStepsPgsSolver();
    }
    switchToSmallStepsPgsSolverWithoutWarmstart() {
      this.raw.switchToSmallStepsPgsSolverWithoutWarmstart();
    }
  }
  var ct;
  (function(n) {
    n[n.Revolute = 0] = "Revolute", n[n.Fixed = 1] = "Fixed", n[n.Prismatic = 2] = "Prismatic", n[n.Rope = 3] = "Rope", n[n.Spring = 4] = "Spring", n[n.Spherical = 5] = "Spherical", n[n.Generic = 6] = "Generic";
  })(ct || (ct = {}));
  var zn;
  (function(n) {
    n[n.AccelerationBased = 0] = "AccelerationBased", n[n.ForceBased = 1] = "ForceBased";
  })(zn || (zn = {}));
  var Tn;
  (function(n) {
    n[n.LinX = 1] = "LinX", n[n.LinY = 2] = "LinY", n[n.LinZ = 4] = "LinZ", n[n.AngX = 8] = "AngX", n[n.AngY = 16] = "AngY", n[n.AngZ = 32] = "AngZ";
  })(Tn || (Tn = {}));
  class xt {
    constructor(t, e, r) {
      this.rawSet = t, this.bodySet = e, this.handle = r;
    }
    static newTyped(t, e, r) {
      switch (t.jointType(r)) {
        case yt.Revolute:
          return new Ug(t, e, r);
        case yt.Prismatic:
          return new Vg(t, e, r);
        case yt.Fixed:
          return new Og(t, e, r);
        case yt.Spring:
          return new Wg(t, e, r);
        case yt.Rope:
          return new Gg(t, e, r);
        case yt.Spherical:
          return new qg(t, e, r);
        case yt.Generic:
          return new Jg(t, e, r);
        default:
          return new xt(t, e, r);
      }
    }
    finalizeDeserialization(t) {
      this.bodySet = t;
    }
    isValid() {
      return this.rawSet.contains(this.handle);
    }
    body1() {
      return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle));
    }
    body2() {
      return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle));
    }
    type() {
      return this.rawSet.jointType(this.handle);
    }
    frameX1() {
      return M.fromRaw(this.rawSet.jointFrameX1(this.handle));
    }
    frameX2() {
      return M.fromRaw(this.rawSet.jointFrameX2(this.handle));
    }
    anchor1() {
      return g.fromRaw(this.rawSet.jointAnchor1(this.handle));
    }
    anchor2() {
      return g.fromRaw(this.rawSet.jointAnchor2(this.handle));
    }
    setAnchor1(t) {
      const e = g.intoRaw(t);
      this.rawSet.jointSetAnchor1(this.handle, e), e.free();
    }
    setAnchor2(t) {
      const e = g.intoRaw(t);
      this.rawSet.jointSetAnchor2(this.handle, e), e.free();
    }
    setContactsEnabled(t) {
      this.rawSet.jointSetContactsEnabled(this.handle, t);
    }
    contactsEnabled() {
      return this.rawSet.jointContactsEnabled(this.handle);
    }
  }
  class wi extends xt {
    limitsEnabled() {
      return this.rawSet.jointLimitsEnabled(this.handle, this.rawAxis());
    }
    limitsMin() {
      return this.rawSet.jointLimitsMin(this.handle, this.rawAxis());
    }
    limitsMax() {
      return this.rawSet.jointLimitsMax(this.handle, this.rawAxis());
    }
    setLimits(t, e) {
      this.rawSet.jointSetLimits(this.handle, this.rawAxis(), t, e);
    }
    configureMotorModel(t) {
      this.rawSet.jointConfigureMotorModel(this.handle, this.rawAxis(), t);
    }
    configureMotorVelocity(t, e) {
      this.rawSet.jointConfigureMotorVelocity(this.handle, this.rawAxis(), t, e);
    }
    configureMotorPosition(t, e, r) {
      this.rawSet.jointConfigureMotorPosition(this.handle, this.rawAxis(), t, e, r);
    }
    configureMotor(t, e, r, i) {
      this.rawSet.jointConfigureMotor(this.handle, this.rawAxis(), t, e, r, i);
    }
  }
  class Og extends xt {
  }
  class Gg extends xt {
  }
  class Wg extends xt {
  }
  class Vg extends wi {
    rawAxis() {
      return Be.LinX;
    }
  }
  class Ug extends wi {
    rawAxis() {
      return Be.AngX;
    }
  }
  class Jg extends xt {
  }
  class qg extends xt {
  }
  class At {
    constructor() {
    }
    static fixed(t, e, r, i) {
      let a = new At();
      return a.anchor1 = t, a.anchor2 = r, a.frame1 = e, a.frame2 = i, a.jointType = ct.Fixed, a;
    }
    static spring(t, e, r, i, a) {
      let c = new At();
      return c.anchor1 = i, c.anchor2 = a, c.length = t, c.stiffness = e, c.damping = r, c.jointType = ct.Spring, c;
    }
    static rope(t, e, r) {
      let i = new At();
      return i.anchor1 = e, i.anchor2 = r, i.length = t, i.jointType = ct.Rope, i;
    }
    static generic(t, e, r, i) {
      let a = new At();
      return a.anchor1 = t, a.anchor2 = e, a.axis = r, a.axesMask = i, a.jointType = ct.Generic, a;
    }
    static spherical(t, e) {
      let r = new At();
      return r.anchor1 = t, r.anchor2 = e, r.jointType = ct.Spherical, r;
    }
    static prismatic(t, e, r) {
      let i = new At();
      return i.anchor1 = t, i.anchor2 = e, i.axis = r, i.jointType = ct.Prismatic, i;
    }
    static revolute(t, e, r) {
      let i = new At();
      return i.anchor1 = t, i.anchor2 = e, i.axis = r, i.jointType = ct.Revolute, i;
    }
    intoRaw() {
      let t = g.intoRaw(this.anchor1), e = g.intoRaw(this.anchor2), r, i, a = false, c = 0, l = 0;
      switch (this.jointType) {
        case ct.Fixed:
          let _ = M.intoRaw(this.frame1), h = M.intoRaw(this.frame2);
          i = ot.fixed(t, _, e, h), _.free(), h.free();
          break;
        case ct.Spring:
          i = ot.spring(this.length, this.stiffness, this.damping, t, e);
          break;
        case ct.Rope:
          i = ot.rope(this.length, t, e);
          break;
        case ct.Prismatic:
          r = g.intoRaw(this.axis), this.limitsEnabled && (a = true, c = this.limits[0], l = this.limits[1]), i = ot.prismatic(t, e, r, a, c, l), r.free();
          break;
        case ct.Generic:
          r = g.intoRaw(this.axis);
          let u = this.axesMask;
          i = ot.generic(t, e, r, u);
          break;
        case ct.Spherical:
          i = ot.spherical(t, e);
          break;
        case ct.Revolute:
          r = g.intoRaw(this.axis), i = ot.revolute(t, e, r), r.free();
          break;
      }
      return t.free(), e.free(), i;
    }
  }
  class Kg {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new zt(), this.map = new Ve(), t && t.forEachJointHandle((e) => {
        this.map.set(e, xt.newTyped(t, null, e));
      });
    }
    finalizeDeserialization(t) {
      this.map.forEach((e) => e.finalizeDeserialization(t));
    }
    createJoint(t, e, r, i, a) {
      const c = e.intoRaw(), l = this.raw.createJoint(c, r, i, a);
      c.free();
      let _ = xt.newTyped(this.raw, t, l);
      return this.map.set(l, _), _;
    }
    remove(t, e) {
      this.raw.remove(t, e), this.unmap(t);
    }
    forEachJointHandleAttachedToRigidBody(t, e) {
      this.raw.forEachJointAttachedToRigidBody(t, e);
    }
    unmap(t) {
      this.map.delete(t);
    }
    len() {
      return this.map.len();
    }
    contains(t) {
      return this.get(t) != null;
    }
    get(t) {
      return this.map.get(t);
    }
    forEach(t) {
      this.map.forEach(t);
    }
    getAll() {
      return this.map.getAll();
    }
  }
  class Jt {
    constructor(t, e) {
      this.rawSet = t, this.handle = e;
    }
    static newTyped(t, e) {
      switch (t.jointType(e)) {
        case yt.Revolute:
          return new Yg(t, e);
        case yt.Prismatic:
          return new Xg(t, e);
        case yt.Fixed:
          return new $g(t, e);
        case yt.Spherical:
          return new Qg(t, e);
        default:
          return new Jt(t, e);
      }
    }
    isValid() {
      return this.rawSet.contains(this.handle);
    }
    setContactsEnabled(t) {
      this.rawSet.jointSetContactsEnabled(this.handle, t);
    }
    contactsEnabled() {
      return this.rawSet.jointContactsEnabled(this.handle);
    }
  }
  class ui extends Jt {
  }
  class $g extends Jt {
  }
  class Xg extends ui {
    rawAxis() {
      return Be.LinX;
    }
  }
  class Yg extends ui {
    rawAxis() {
      return Be.AngX;
    }
  }
  class Qg extends Jt {
  }
  class Zg {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new Ft(), this.map = new Ve(), t && t.forEachJointHandle((e) => {
        this.map.set(e, Jt.newTyped(this.raw, e));
      });
    }
    createJoint(t, e, r, i) {
      const a = t.intoRaw(), c = this.raw.createJoint(a, e, r, i);
      a.free();
      let l = Jt.newTyped(this.raw, c);
      return this.map.set(c, l), l;
    }
    remove(t, e) {
      this.raw.remove(t, e), this.map.delete(t);
    }
    unmap(t) {
      this.map.delete(t);
    }
    len() {
      return this.map.len();
    }
    contains(t) {
      return this.get(t) != null;
    }
    get(t) {
      return this.map.get(t);
    }
    forEach(t) {
      this.map.forEach(t);
    }
    forEachJointHandleAttachedToRigidBody(t, e) {
      this.raw.forEachJointAttachedToRigidBody(t, e);
    }
    getAll() {
      return this.map.getAll();
    }
  }
  var ze;
  (function(n) {
    n[n.Average = 0] = "Average", n[n.Min = 1] = "Min", n[n.Multiply = 2] = "Multiply", n[n.Max = 3] = "Max";
  })(ze || (ze = {}));
  class tb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new br();
    }
  }
  class eb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new Tt();
    }
    forEachActiveRigidBodyHandle(t) {
      this.raw.forEachActiveRigidBodyHandle(t);
    }
  }
  var ye;
  (function(n) {
    n[n.Vertex = 0] = "Vertex", n[n.Edge = 1] = "Edge", n[n.Face = 2] = "Face", n[n.Unknown = 3] = "Unknown";
  })(ye || (ye = {}));
  class Ue {
    constructor(t, e, r, i) {
      this.featureType = ye.Unknown, this.featureId = void 0, this.timeOfImpact = t, this.normal = e, i !== void 0 && (this.featureId = i), r !== void 0 && (this.featureType = r);
    }
    static fromRaw(t) {
      if (!t) return null;
      const e = new Ue(t.time_of_impact(), g.fromRaw(t.normal()), t.featureType(), t.featureId());
      return t.free(), e;
    }
  }
  class Te {
    constructor(t, e, r, i, a) {
      this.featureType = ye.Unknown, this.featureId = void 0, this.collider = t, this.timeOfImpact = e, this.normal = r, a !== void 0 && (this.featureId = a), i !== void 0 && (this.featureType = i);
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new Te(t.get(e.colliderHandle()), e.time_of_impact(), g.fromRaw(e.normal()), e.featureType(), e.featureId());
      return e.free(), r;
    }
  }
  class kr {
    constructor(t, e) {
      this.collider = t, this.timeOfImpact = e;
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new kr(t.get(e.colliderHandle()), e.timeOfImpact());
      return e.free(), r;
    }
  }
  class Je {
    constructor(t, e) {
      this.point = t, this.isInside = e;
    }
    static fromRaw(t) {
      if (!t) return null;
      const e = new Je(g.fromRaw(t.point()), t.isInside());
      return t.free(), e;
    }
  }
  class Fe {
    constructor(t, e, r, i, a) {
      this.featureType = ye.Unknown, this.featureId = void 0, this.collider = t, this.point = e, this.isInside = r, a !== void 0 && (this.featureId = a), i !== void 0 && (this.featureType = i);
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new Fe(t.get(e.colliderHandle()), g.fromRaw(e.point()), e.isInside(), e.featureType(), e.featureId());
      return e.free(), r;
    }
  }
  class Se {
    constructor(t, e, r, i, a) {
      this.time_of_impact = t, this.witness1 = e, this.witness2 = r, this.normal1 = i, this.normal2 = a;
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new Se(e.time_of_impact(), g.fromRaw(e.witness1()), g.fromRaw(e.witness2()), g.fromRaw(e.normal1()), g.fromRaw(e.normal2()));
      return e.free(), r;
    }
  }
  class qe extends Se {
    constructor(t, e, r, i, a, c) {
      super(e, r, i, a, c), this.collider = t;
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new qe(t.get(e.colliderHandle()), e.time_of_impact(), g.fromRaw(e.witness1()), g.fromRaw(e.witness2()), g.fromRaw(e.normal1()), g.fromRaw(e.normal2()));
      return e.free(), r;
    }
  }
  class rb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new It();
    }
    castRay(t, e, r, i, a, c, l, _, h, u, w) {
      let b = g.intoRaw(i.origin), f = g.intoRaw(i.dir), S = kr.fromRaw(r, this.raw.castRay(t.raw, e.raw, r.raw, b, f, a, c, l, _, h, u, w));
      return b.free(), f.free(), S;
    }
    castRayAndGetNormal(t, e, r, i, a, c, l, _, h, u, w) {
      let b = g.intoRaw(i.origin), f = g.intoRaw(i.dir), S = Te.fromRaw(r, this.raw.castRayAndGetNormal(t.raw, e.raw, r.raw, b, f, a, c, l, _, h, u, w));
      return b.free(), f.free(), S;
    }
    intersectionsWithRay(t, e, r, i, a, c, l, _, h, u, w, b) {
      let f = g.intoRaw(i.origin), S = g.intoRaw(i.dir), T = (j) => l(Te.fromRaw(r, j));
      this.raw.intersectionsWithRay(t.raw, e.raw, r.raw, f, S, a, c, T, _, h, u, w, b), f.free(), S.free();
    }
    intersectionWithShape(t, e, r, i, a, c, l, _, h, u, w) {
      let b = g.intoRaw(i), f = M.intoRaw(a), S = c.intoRaw(), T = this.raw.intersectionWithShape(t.raw, e.raw, r.raw, b, f, S, l, _, h, u, w);
      return b.free(), f.free(), S.free(), T;
    }
    projectPoint(t, e, r, i, a, c, l, _, h, u) {
      let w = g.intoRaw(i), b = Fe.fromRaw(r, this.raw.projectPoint(t.raw, e.raw, r.raw, w, a, c, l, _, h, u));
      return w.free(), b;
    }
    projectPointAndGetFeature(t, e, r, i, a, c, l, _, h) {
      let u = g.intoRaw(i), w = Fe.fromRaw(r, this.raw.projectPointAndGetFeature(t.raw, e.raw, r.raw, u, a, c, l, _, h));
      return u.free(), w;
    }
    intersectionsWithPoint(t, e, r, i, a, c, l, _, h, u) {
      let w = g.intoRaw(i);
      this.raw.intersectionsWithPoint(t.raw, e.raw, r.raw, w, a, c, l, _, h, u), w.free();
    }
    castShape(t, e, r, i, a, c, l, _, h, u, w, b, f, S, T) {
      let j = g.intoRaw(i), I = M.intoRaw(a), v = g.intoRaw(c), R = l.intoRaw(), x = qe.fromRaw(r, this.raw.castShape(t.raw, e.raw, r.raw, j, I, v, R, _, h, u, w, b, f, S, T));
      return j.free(), I.free(), v.free(), R.free(), x;
    }
    intersectionsWithShape(t, e, r, i, a, c, l, _, h, u, w, b) {
      let f = g.intoRaw(i), S = M.intoRaw(a), T = c.intoRaw();
      this.raw.intersectionsWithShape(t.raw, e.raw, r.raw, f, S, T, l, _, h, u, w, b), f.free(), S.free(), T.free();
    }
    collidersWithAabbIntersectingAabb(t, e, r, i, a, c) {
      let l = g.intoRaw(i), _ = g.intoRaw(a);
      this.raw.collidersWithAabbIntersectingAabb(t.raw, e.raw, r.raw, l, _, c), l.free(), _.free();
    }
  }
  class nb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new tt(), this.tempManifold = new ib(null);
    }
    contactPairsWith(t, e) {
      this.raw.contact_pairs_with(t, e);
    }
    intersectionPairsWith(t, e) {
      this.raw.intersection_pairs_with(t, e);
    }
    contactPair(t, e, r) {
      const i = this.raw.contact_pair(t, e);
      if (i) {
        const a = i.collider1() != t;
        let c;
        for (c = 0; c < i.numContactManifolds(); ++c) this.tempManifold.raw = i.contactManifold(c), this.tempManifold.raw && r(this.tempManifold, a), this.tempManifold.free();
        i.free();
      }
    }
    intersectionPair(t, e) {
      return this.raw.intersection_pair(t, e);
    }
  }
  class ib {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t;
    }
    normal() {
      return g.fromRaw(this.raw.normal());
    }
    localNormal1() {
      return g.fromRaw(this.raw.local_n1());
    }
    localNormal2() {
      return g.fromRaw(this.raw.local_n2());
    }
    subshape1() {
      return this.raw.subshape1();
    }
    subshape2() {
      return this.raw.subshape2();
    }
    numContacts() {
      return this.raw.num_contacts();
    }
    localContactPoint1(t) {
      return g.fromRaw(this.raw.contact_local_p1(t));
    }
    localContactPoint2(t) {
      return g.fromRaw(this.raw.contact_local_p2(t));
    }
    contactDist(t) {
      return this.raw.contact_dist(t);
    }
    contactFid1(t) {
      return this.raw.contact_fid1(t);
    }
    contactFid2(t) {
      return this.raw.contact_fid2(t);
    }
    contactImpulse(t) {
      return this.raw.contact_impulse(t);
    }
    contactTangentImpulseX(t) {
      return this.raw.contact_tangent_impulse_x(t);
    }
    contactTangentImpulseY(t) {
      return this.raw.contact_tangent_impulse_y(t);
    }
    numSolverContacts() {
      return this.raw.num_solver_contacts();
    }
    solverContactPoint(t) {
      return g.fromRaw(this.raw.solver_contact_point(t));
    }
    solverContactDist(t) {
      return this.raw.solver_contact_dist(t);
    }
    solverContactFriction(t) {
      return this.raw.solver_contact_friction(t);
    }
    solverContactRestitution(t) {
      return this.raw.solver_contact_restitution(t);
    }
    solverContactTangentVelocity(t) {
      return g.fromRaw(this.raw.solver_contact_tangent_velocity(t));
    }
  }
  class ve {
    constructor(t, e, r, i, a) {
      this.distance = t, this.point1 = e, this.point2 = r, this.normal1 = i, this.normal2 = a;
    }
    static fromRaw(t) {
      if (!t) return null;
      const e = new ve(t.distance(), g.fromRaw(t.point1()), g.fromRaw(t.point2()), g.fromRaw(t.normal1()), g.fromRaw(t.normal2()));
      return t.free(), e;
    }
  }
  class it {
    static fromRaw(t, e) {
      const r = t.coShapeType(e);
      let i, a, c, l, _, h, u;
      switch (r) {
        case st.Ball:
          return new Dr(t.coRadius(e));
        case st.Cuboid:
          return i = t.coHalfExtents(e), new Re(i.x, i.y, i.z);
        case st.RoundCuboid:
          return i = t.coHalfExtents(e), a = t.coRoundRadius(e), new pi(i.x, i.y, i.z, a);
        case st.Capsule:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), new gi(_, h);
        case st.Segment:
          return c = t.coVertices(e), new bi(g.new(c[0], c[1], c[2]), g.new(c[3], c[4], c[5]));
        case st.Polyline:
          return c = t.coVertices(e), l = t.coIndices(e), new yi(c, l);
        case st.Triangle:
          return c = t.coVertices(e), new mi(g.new(c[0], c[1], c[2]), g.new(c[3], c[4], c[5]), g.new(c[6], c[7], c[8]));
        case st.RoundTriangle:
          return c = t.coVertices(e), a = t.coRoundRadius(e), new fi(g.new(c[0], c[1], c[2]), g.new(c[3], c[4], c[5]), g.new(c[6], c[7], c[8]), a);
        case st.HalfSpace:
          return u = g.fromRaw(t.coHalfspaceNormal(e)), new sb(u);
        case st.Voxels:
          const w = t.coVoxelData(e), b = t.coVoxelSize(e);
          return new vi(w, b);
        case st.TriMesh:
          c = t.coVertices(e), l = t.coIndices(e);
          const f = t.coTriMeshFlags(e);
          return new Mr(c, l, f);
        case st.HeightField:
          const S = t.coHeightfieldScale(e), T = t.coHeightfieldHeights(e), j = t.coHeightfieldNRows(e), I = t.coHeightfieldNCols(e), v = t.coHeightFieldFlags(e);
          return new Si(j, I, T, S, v);
        case st.ConvexPolyhedron:
          return c = t.coVertices(e), l = t.coIndices(e), new fr(c, l);
        case st.RoundConvexPolyhedron:
          return c = t.coVertices(e), l = t.coIndices(e), a = t.coRoundRadius(e), new yr(c, l, a);
        case st.Cylinder:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), new Ri(_, h);
        case st.RoundCylinder:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), a = t.coRoundRadius(e), new Ci(_, h, a);
        case st.Cone:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), new xi(_, h);
        case st.RoundCone:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), a = t.coRoundRadius(e), new Ei(_, h, a);
        default:
          throw new Error("unknown shape type: " + r);
      }
    }
    castShape(t, e, r, i, a, c, l, _, h, u) {
      let w = g.intoRaw(t), b = M.intoRaw(e), f = g.intoRaw(r), S = g.intoRaw(a), T = M.intoRaw(c), j = g.intoRaw(l), I = this.intoRaw(), v = i.intoRaw(), R = Se.fromRaw(null, I.castShape(w, b, f, v, S, T, j, _, h, u));
      return w.free(), b.free(), f.free(), S.free(), T.free(), j.free(), I.free(), v.free(), R;
    }
    intersectsShape(t, e, r, i, a) {
      let c = g.intoRaw(t), l = M.intoRaw(e), _ = g.intoRaw(i), h = M.intoRaw(a), u = this.intoRaw(), w = r.intoRaw(), b = u.intersectsShape(c, l, w, _, h);
      return c.free(), l.free(), _.free(), h.free(), u.free(), w.free(), b;
    }
    contactShape(t, e, r, i, a, c) {
      let l = g.intoRaw(t), _ = M.intoRaw(e), h = g.intoRaw(i), u = M.intoRaw(a), w = this.intoRaw(), b = r.intoRaw(), f = ve.fromRaw(w.contactShape(l, _, b, h, u, c));
      return l.free(), _.free(), h.free(), u.free(), w.free(), b.free(), f;
    }
    containsPoint(t, e, r) {
      let i = g.intoRaw(t), a = M.intoRaw(e), c = g.intoRaw(r), l = this.intoRaw(), _ = l.containsPoint(i, a, c);
      return i.free(), a.free(), c.free(), l.free(), _;
    }
    projectPoint(t, e, r, i) {
      let a = g.intoRaw(t), c = M.intoRaw(e), l = g.intoRaw(r), _ = this.intoRaw(), h = Je.fromRaw(_.projectPoint(a, c, l, i));
      return a.free(), c.free(), l.free(), _.free(), h;
    }
    intersectsRay(t, e, r, i) {
      let a = g.intoRaw(e), c = M.intoRaw(r), l = g.intoRaw(t.origin), _ = g.intoRaw(t.dir), h = this.intoRaw(), u = h.intersectsRay(a, c, l, _, i);
      return a.free(), c.free(), l.free(), _.free(), h.free(), u;
    }
    castRay(t, e, r, i, a) {
      let c = g.intoRaw(e), l = M.intoRaw(r), _ = g.intoRaw(t.origin), h = g.intoRaw(t.dir), u = this.intoRaw(), w = u.castRay(c, l, _, h, i, a);
      return c.free(), l.free(), _.free(), h.free(), u.free(), w;
    }
    castRayAndGetNormal(t, e, r, i, a) {
      let c = g.intoRaw(e), l = M.intoRaw(r), _ = g.intoRaw(t.origin), h = g.intoRaw(t.dir), u = this.intoRaw(), w = Ue.fromRaw(u.castRayAndGetNormal(c, l, _, h, i, a));
      return c.free(), l.free(), _.free(), h.free(), u.free(), w;
    }
  }
  var rt;
  (function(n) {
    n[n.Ball = 0] = "Ball", n[n.Cuboid = 1] = "Cuboid", n[n.Capsule = 2] = "Capsule", n[n.Segment = 3] = "Segment", n[n.Polyline = 4] = "Polyline", n[n.Triangle = 5] = "Triangle", n[n.TriMesh = 6] = "TriMesh", n[n.HeightField = 7] = "HeightField", n[n.ConvexPolyhedron = 9] = "ConvexPolyhedron", n[n.Cylinder = 10] = "Cylinder", n[n.Cone = 11] = "Cone", n[n.RoundCuboid = 12] = "RoundCuboid", n[n.RoundTriangle = 13] = "RoundTriangle", n[n.RoundCylinder = 14] = "RoundCylinder", n[n.RoundCone = 15] = "RoundCone", n[n.RoundConvexPolyhedron = 16] = "RoundConvexPolyhedron", n[n.HalfSpace = 17] = "HalfSpace", n[n.Voxels = 18] = "Voxels";
  })(rt || (rt = {}));
  var Fn;
  (function(n) {
    n[n.FIX_INTERNAL_EDGES = 1] = "FIX_INTERNAL_EDGES";
  })(Fn || (Fn = {}));
  var mr;
  (function(n) {
    n[n.DELETE_BAD_TOPOLOGY_TRIANGLES = 4] = "DELETE_BAD_TOPOLOGY_TRIANGLES", n[n.ORIENTED = 8] = "ORIENTED", n[n.MERGE_DUPLICATE_VERTICES = 16] = "MERGE_DUPLICATE_VERTICES", n[n.DELETE_DEGENERATE_TRIANGLES = 32] = "DELETE_DEGENERATE_TRIANGLES", n[n.DELETE_DUPLICATE_TRIANGLES = 64] = "DELETE_DUPLICATE_TRIANGLES", n[n.FIX_INTERNAL_EDGES = 144] = "FIX_INTERNAL_EDGES";
  })(mr || (mr = {}));
  class Dr extends it {
    constructor(t) {
      super(), this.type = rt.Ball, this.radius = t;
    }
    intoRaw() {
      return F.ball(this.radius);
    }
  }
  class sb extends it {
    constructor(t) {
      super(), this.type = rt.HalfSpace, this.normal = t;
    }
    intoRaw() {
      let t = g.intoRaw(this.normal), e = F.halfspace(t);
      return t.free(), e;
    }
  }
  class Re extends it {
    constructor(t, e, r) {
      super(), this.type = rt.Cuboid, this.halfExtents = g.new(t, e, r);
    }
    intoRaw() {
      return F.cuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z);
    }
  }
  class pi extends it {
    constructor(t, e, r, i) {
      super(), this.type = rt.RoundCuboid, this.halfExtents = g.new(t, e, r), this.borderRadius = i;
    }
    intoRaw() {
      return F.roundCuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z, this.borderRadius);
    }
  }
  class gi extends it {
    constructor(t, e) {
      super(), this.type = rt.Capsule, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return F.capsule(this.halfHeight, this.radius);
    }
  }
  class bi extends it {
    constructor(t, e) {
      super(), this.type = rt.Segment, this.a = t, this.b = e;
    }
    intoRaw() {
      let t = g.intoRaw(this.a), e = g.intoRaw(this.b), r = F.segment(t, e);
      return t.free(), e.free(), r;
    }
  }
  class mi extends it {
    constructor(t, e, r) {
      super(), this.type = rt.Triangle, this.a = t, this.b = e, this.c = r;
    }
    intoRaw() {
      let t = g.intoRaw(this.a), e = g.intoRaw(this.b), r = g.intoRaw(this.c), i = F.triangle(t, e, r);
      return t.free(), e.free(), r.free(), i;
    }
  }
  class fi extends it {
    constructor(t, e, r, i) {
      super(), this.type = rt.RoundTriangle, this.a = t, this.b = e, this.c = r, this.borderRadius = i;
    }
    intoRaw() {
      let t = g.intoRaw(this.a), e = g.intoRaw(this.b), r = g.intoRaw(this.c), i = F.roundTriangle(t, e, r, this.borderRadius);
      return t.free(), e.free(), r.free(), i;
    }
  }
  class yi extends it {
    constructor(t, e) {
      super(), this.type = rt.Polyline, this.vertices = t, this.indices = e ?? new Uint32Array(0);
    }
    intoRaw() {
      return F.polyline(this.vertices, this.indices);
    }
  }
  class vi extends it {
    constructor(t, e) {
      super(), this.type = rt.Voxels, this.data = t, this.voxelSize = e;
    }
    intoRaw() {
      let t = g.intoRaw(this.voxelSize), e;
      return this.data instanceof Int32Array ? e = F.voxels(t, this.data) : e = F.voxelsFromPoints(t, this.data), t.free(), e;
    }
  }
  let Mr = class extends it {
    constructor(t, e, r) {
      super(), this.type = rt.TriMesh, this.vertices = t, this.indices = e, this.flags = r;
    }
    intoRaw() {
      return F.trimesh(this.vertices, this.indices, this.flags);
    }
  };
  class fr extends it {
    constructor(t, e) {
      super(), this.type = rt.ConvexPolyhedron, this.vertices = t, this.indices = e;
    }
    intoRaw() {
      return this.indices ? F.convexMesh(this.vertices, this.indices) : F.convexHull(this.vertices);
    }
  }
  class yr extends it {
    constructor(t, e, r) {
      super(), this.type = rt.RoundConvexPolyhedron, this.vertices = t, this.indices = e, this.borderRadius = r;
    }
    intoRaw() {
      return this.indices ? F.roundConvexMesh(this.vertices, this.indices, this.borderRadius) : F.roundConvexHull(this.vertices, this.borderRadius);
    }
  }
  class Si extends it {
    constructor(t, e, r, i, a) {
      super(), this.type = rt.HeightField, this.nrows = t, this.ncols = e, this.heights = r, this.scale = i, this.flags = a;
    }
    intoRaw() {
      let t = g.intoRaw(this.scale), e = F.heightfield(this.nrows, this.ncols, this.heights, t, this.flags);
      return t.free(), e;
    }
  }
  class Ri extends it {
    constructor(t, e) {
      super(), this.type = rt.Cylinder, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return F.cylinder(this.halfHeight, this.radius);
    }
  }
  class Ci extends it {
    constructor(t, e, r) {
      super(), this.type = rt.RoundCylinder, this.borderRadius = r, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return F.roundCylinder(this.halfHeight, this.radius, this.borderRadius);
    }
  }
  class xi extends it {
    constructor(t, e) {
      super(), this.type = rt.Cone, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return F.cone(this.halfHeight, this.radius);
    }
  }
  class Ei extends it {
    constructor(t, e, r) {
      super(), this.type = rt.RoundCone, this.halfHeight = t, this.radius = e, this.borderRadius = r;
    }
    intoRaw() {
      return F.roundCone(this.halfHeight, this.radius, this.borderRadius);
    }
  }
  class ab {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new xa();
    }
    step(t, e, r, i, a, c, l, _, h, u, w, b) {
      let f = g.intoRaw(t);
      w ? this.raw.stepWithEvents(f, e.raw, r.raw, i.raw, a.raw, c.raw, l.raw, _.raw, h.raw, u.raw, w.raw, b, b ? b.filterContactPair : null, b ? b.filterIntersectionPair : null) : this.raw.step(f, e.raw, r.raw, i.raw, a.raw, c.raw, l.raw, _.raw, h.raw, u.raw), f.free();
    }
  }
  class kn {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new Pa();
    }
    serializeAll(t, e, r, i, a, c, l, _, h) {
      let u = g.intoRaw(t);
      const w = this.raw.serializeAll(u, e.raw, r.raw, i.raw, a.raw, c.raw, l.raw, _.raw, h.raw);
      return u.free(), w;
    }
    deserializeAll(t) {
      return Ke.fromRaw(this.raw.deserializeAll(t));
    }
  }
  class ob {
    constructor(t, e) {
      this.vertices = t, this.colors = e;
    }
  }
  class cb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.vertices = void 0, this.colors = void 0;
    }
    constructor(t) {
      this.raw = t || new Sa();
    }
    render(t, e, r, i, a, c, l) {
      this.raw.render(t.raw, e.raw, r.raw, i.raw, a.raw, c, e.castClosure(l)), this.vertices = this.raw.vertices(), this.colors = this.raw.colors();
    }
  }
  class lb {
  }
  class _b {
    constructor(t, e, r, i, a, c) {
      this.params = e, this.bodies = a, this.colliders = c, this.broadPhase = r, this.narrowPhase = i, this.raw = new Ca(t), this.rawCharacterCollision = new di(), this._applyImpulsesToDynamicBodies = false, this._characterMass = null;
    }
    free() {
      this.raw && (this.raw.free(), this.rawCharacterCollision.free()), this.raw = void 0, this.rawCharacterCollision = void 0;
    }
    up() {
      return this.raw.up();
    }
    setUp(t) {
      let e = g.intoRaw(t);
      return this.raw.setUp(e);
    }
    applyImpulsesToDynamicBodies() {
      return this._applyImpulsesToDynamicBodies;
    }
    setApplyImpulsesToDynamicBodies(t) {
      this._applyImpulsesToDynamicBodies = t;
    }
    characterMass() {
      return this._characterMass;
    }
    setCharacterMass(t) {
      this._characterMass = t;
    }
    offset() {
      return this.raw.offset();
    }
    setOffset(t) {
      this.raw.setOffset(t);
    }
    normalNudgeFactor() {
      return this.raw.normalNudgeFactor();
    }
    setNormalNudgeFactor(t) {
      this.raw.setNormalNudgeFactor(t);
    }
    slideEnabled() {
      return this.raw.slideEnabled();
    }
    setSlideEnabled(t) {
      this.raw.setSlideEnabled(t);
    }
    autostepMaxHeight() {
      return this.raw.autostepMaxHeight();
    }
    autostepMinWidth() {
      return this.raw.autostepMinWidth();
    }
    autostepIncludesDynamicBodies() {
      return this.raw.autostepIncludesDynamicBodies();
    }
    autostepEnabled() {
      return this.raw.autostepEnabled();
    }
    enableAutostep(t, e, r) {
      this.raw.enableAutostep(t, e, r);
    }
    disableAutostep() {
      return this.raw.disableAutostep();
    }
    maxSlopeClimbAngle() {
      return this.raw.maxSlopeClimbAngle();
    }
    setMaxSlopeClimbAngle(t) {
      this.raw.setMaxSlopeClimbAngle(t);
    }
    minSlopeSlideAngle() {
      return this.raw.minSlopeSlideAngle();
    }
    setMinSlopeSlideAngle(t) {
      this.raw.setMinSlopeSlideAngle(t);
    }
    snapToGroundDistance() {
      return this.raw.snapToGroundDistance();
    }
    enableSnapToGround(t) {
      this.raw.enableSnapToGround(t);
    }
    disableSnapToGround() {
      this.raw.disableSnapToGround();
    }
    snapToGroundEnabled() {
      return this.raw.snapToGroundEnabled();
    }
    computeColliderMovement(t, e, r, i, a) {
      let c = g.intoRaw(e);
      this.raw.computeColliderMovement(this.params.dt, this.broadPhase.raw, this.narrowPhase.raw, this.bodies.raw, this.colliders.raw, t.handle, c, this._applyImpulsesToDynamicBodies, this._characterMass, r, i, this.colliders.castClosure(a)), c.free();
    }
    computedMovement() {
      return g.fromRaw(this.raw.computedMovement());
    }
    computedGrounded() {
      return this.raw.computedGrounded();
    }
    numComputedCollisions() {
      return this.raw.numComputedCollisions();
    }
    computedCollision(t, e) {
      if (this.raw.computedCollision(t, this.rawCharacterCollision)) {
        let r = this.rawCharacterCollision;
        return e = e ?? new lb(), e.translationDeltaApplied = g.fromRaw(r.translationDeltaApplied()), e.translationDeltaRemaining = g.fromRaw(r.translationDeltaRemaining()), e.toi = r.toi(), e.witness1 = g.fromRaw(r.worldWitness1()), e.witness2 = g.fromRaw(r.worldWitness2()), e.normal1 = g.fromRaw(r.worldNormal1()), e.normal2 = g.fromRaw(r.worldNormal2()), e.collider = this.colliders.get(r.handle()), e;
      } else return null;
    }
  }
  var Dn;
  (function(n) {
    n[n.None = 0] = "None", n[n.LinX = 1] = "LinX", n[n.LinY = 2] = "LinY", n[n.LinZ = 4] = "LinZ", n[n.AngX = 8] = "AngX", n[n.AngY = 16] = "AngY", n[n.AngZ = 32] = "AngZ", n[n.AllLin = 7] = "AllLin", n[n.AllAng = 56] = "AllAng", n[n.All = 63] = "All";
  })(Dn || (Dn = {}));
  class db {
    constructor(t, e, r, i, a, c) {
      this.params = t, this.bodies = e, this.raw = new Ea(r, i, a, c);
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    setKp(t, e) {
      this.raw.set_kp(t, e);
    }
    setKi(t, e) {
      this.raw.set_kp(t, e);
    }
    setKd(t, e) {
      this.raw.set_kp(t, e);
    }
    setAxes(t) {
      this.raw.set_axes_mask(t);
    }
    resetIntegrals() {
      this.raw.reset_integrals();
    }
    applyLinearCorrection(t, e, r) {
      let i = g.intoRaw(e), a = g.intoRaw(r);
      this.raw.apply_linear_correction(this.params.dt, this.bodies.raw, t.handle, i, a), i.free(), a.free();
    }
    applyAngularCorrection(t, e, r) {
      let i = M.intoRaw(e), a = g.intoRaw(r);
      this.raw.apply_angular_correction(this.params.dt, this.bodies.raw, t.handle, i, a), i.free(), a.free();
    }
    linearCorrection(t, e, r) {
      let i = g.intoRaw(e), a = g.intoRaw(r), c = this.raw.linear_correction(this.params.dt, this.bodies.raw, t.handle, i, a);
      return i.free(), a.free(), g.fromRaw(c);
    }
    angularCorrection(t, e, r) {
      let i = M.intoRaw(e), a = g.intoRaw(r), c = this.raw.angular_correction(this.params.dt, this.bodies.raw, t.handle, i, a);
      return i.free(), a.free(), g.fromRaw(c);
    }
  }
  class hb {
    constructor(t, e, r, i, a) {
      this.raw = new Ra(t.handle), this.broadPhase = e, this.narrowPhase = r, this.bodies = i, this.colliders = a, this._chassis = t;
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    updateVehicle(t, e, r, i) {
      this.raw.update_vehicle(t, this.broadPhase.raw, this.narrowPhase.raw, this.bodies.raw, this.colliders.raw, e, r, this.colliders.castClosure(i));
    }
    currentVehicleSpeed() {
      return this.raw.current_vehicle_speed();
    }
    chassis() {
      return this._chassis;
    }
    get indexUpAxis() {
      return this.raw.index_up_axis();
    }
    set indexUpAxis(t) {
      this.raw.set_index_up_axis(t);
    }
    get indexForwardAxis() {
      return this.raw.index_forward_axis();
    }
    set setIndexForwardAxis(t) {
      this.raw.set_index_forward_axis(t);
    }
    addWheel(t, e, r, i, a) {
      let c = g.intoRaw(t), l = g.intoRaw(e), _ = g.intoRaw(r);
      this.raw.add_wheel(c, l, _, i, a), c.free(), l.free(), _.free();
    }
    numWheels() {
      return this.raw.num_wheels();
    }
    wheelChassisConnectionPointCs(t) {
      return g.fromRaw(this.raw.wheel_chassis_connection_point_cs(t));
    }
    setWheelChassisConnectionPointCs(t, e) {
      let r = g.intoRaw(e);
      this.raw.set_wheel_chassis_connection_point_cs(t, r), r.free();
    }
    wheelSuspensionRestLength(t) {
      return this.raw.wheel_suspension_rest_length(t);
    }
    setWheelSuspensionRestLength(t, e) {
      this.raw.set_wheel_suspension_rest_length(t, e);
    }
    wheelMaxSuspensionTravel(t) {
      return this.raw.wheel_max_suspension_travel(t);
    }
    setWheelMaxSuspensionTravel(t, e) {
      this.raw.set_wheel_max_suspension_travel(t, e);
    }
    wheelRadius(t) {
      return this.raw.wheel_radius(t);
    }
    setWheelRadius(t, e) {
      this.raw.set_wheel_radius(t, e);
    }
    wheelSuspensionStiffness(t) {
      return this.raw.wheel_suspension_stiffness(t);
    }
    setWheelSuspensionStiffness(t, e) {
      this.raw.set_wheel_suspension_stiffness(t, e);
    }
    wheelSuspensionCompression(t) {
      return this.raw.wheel_suspension_compression(t);
    }
    setWheelSuspensionCompression(t, e) {
      this.raw.set_wheel_suspension_compression(t, e);
    }
    wheelSuspensionRelaxation(t) {
      return this.raw.wheel_suspension_relaxation(t);
    }
    setWheelSuspensionRelaxation(t, e) {
      this.raw.set_wheel_suspension_relaxation(t, e);
    }
    wheelMaxSuspensionForce(t) {
      return this.raw.wheel_max_suspension_force(t);
    }
    setWheelMaxSuspensionForce(t, e) {
      this.raw.set_wheel_max_suspension_force(t, e);
    }
    wheelBrake(t) {
      return this.raw.wheel_brake(t);
    }
    setWheelBrake(t, e) {
      this.raw.set_wheel_brake(t, e);
    }
    wheelSteering(t) {
      return this.raw.wheel_steering(t);
    }
    setWheelSteering(t, e) {
      this.raw.set_wheel_steering(t, e);
    }
    wheelEngineForce(t) {
      return this.raw.wheel_engine_force(t);
    }
    setWheelEngineForce(t, e) {
      this.raw.set_wheel_engine_force(t, e);
    }
    wheelDirectionCs(t) {
      return g.fromRaw(this.raw.wheel_direction_cs(t));
    }
    setWheelDirectionCs(t, e) {
      let r = g.intoRaw(e);
      this.raw.set_wheel_direction_cs(t, r), r.free();
    }
    wheelAxleCs(t) {
      return g.fromRaw(this.raw.wheel_axle_cs(t));
    }
    setWheelAxleCs(t, e) {
      let r = g.intoRaw(e);
      this.raw.set_wheel_axle_cs(t, r), r.free();
    }
    wheelFrictionSlip(t) {
      return this.raw.wheel_friction_slip(t);
    }
    setWheelFrictionSlip(t, e) {
      this.raw.set_wheel_friction_slip(t, e);
    }
    wheelSideFrictionStiffness(t) {
      return this.raw.wheel_side_friction_stiffness(t);
    }
    setWheelSideFrictionStiffness(t, e) {
      this.raw.set_wheel_side_friction_stiffness(t, e);
    }
    wheelRotation(t) {
      return this.raw.wheel_rotation(t);
    }
    wheelForwardImpulse(t) {
      return this.raw.wheel_forward_impulse(t);
    }
    wheelSideImpulse(t) {
      return this.raw.wheel_side_impulse(t);
    }
    wheelSuspensionForce(t) {
      return this.raw.wheel_suspension_force(t);
    }
    wheelContactNormal(t) {
      return g.fromRaw(this.raw.wheel_contact_normal_ws(t));
    }
    wheelContactPoint(t) {
      return g.fromRaw(this.raw.wheel_contact_point_ws(t));
    }
    wheelSuspensionLength(t) {
      return this.raw.wheel_suspension_length(t);
    }
    wheelHardPoint(t) {
      return g.fromRaw(this.raw.wheel_hard_point_ws(t));
    }
    wheelIsInContact(t) {
      return this.raw.wheel_is_in_contact(t);
    }
    wheelGroundObject(t) {
      return this.colliders.get(this.raw.wheel_ground_object(t));
    }
  }
  class Ke {
    free() {
      this.integrationParameters.free(), this.islands.free(), this.broadPhase.free(), this.narrowPhase.free(), this.bodies.free(), this.colliders.free(), this.impulseJoints.free(), this.multibodyJoints.free(), this.ccdSolver.free(), this.physicsPipeline.free(), this.serializationPipeline.free(), this.debugRenderPipeline.free(), this.characterControllers.forEach((t) => t.free()), this.pidControllers.forEach((t) => t.free()), this.vehicleControllers.forEach((t) => t.free()), this.integrationParameters = void 0, this.islands = void 0, this.broadPhase = void 0, this.narrowPhase = void 0, this.bodies = void 0, this.colliders = void 0, this.ccdSolver = void 0, this.impulseJoints = void 0, this.multibodyJoints = void 0, this.physicsPipeline = void 0, this.serializationPipeline = void 0, this.debugRenderPipeline = void 0, this.characterControllers = void 0, this.pidControllers = void 0, this.vehicleControllers = void 0;
    }
    constructor(t, e, r, i, a, c, l, _, h, u, w, b, f) {
      this.gravity = t, this.integrationParameters = new Hg(e), this.islands = new eb(r), this.broadPhase = new rb(i), this.narrowPhase = new nb(a), this.bodies = new Ng(c), this.colliders = new pb(l), this.impulseJoints = new Kg(_), this.multibodyJoints = new Zg(h), this.ccdSolver = new tb(u), this.physicsPipeline = new ab(w), this.serializationPipeline = new kn(b), this.debugRenderPipeline = new cb(f), this.characterControllers = /* @__PURE__ */ new Set(), this.pidControllers = /* @__PURE__ */ new Set(), this.vehicleControllers = /* @__PURE__ */ new Set(), this.impulseJoints.finalizeDeserialization(this.bodies), this.bodies.finalizeDeserialization(this.colliders), this.colliders.finalizeDeserialization(this.bodies);
    }
    static fromRaw(t) {
      return t ? new Ke(g.fromRaw(t.takeGravity()), t.takeIntegrationParameters(), t.takeIslandManager(), t.takeBroadPhase(), t.takeNarrowPhase(), t.takeBodies(), t.takeColliders(), t.takeImpulseJoints(), t.takeMultibodyJoints()) : null;
    }
    takeSnapshot() {
      return this.serializationPipeline.serializeAll(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints);
    }
    static restoreSnapshot(t) {
      return new kn().deserializeAll(t);
    }
    debugRender(t, e) {
      return this.debugRenderPipeline.render(this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.narrowPhase, t, e), new ob(this.debugRenderPipeline.vertices, this.debugRenderPipeline.colors);
    }
    step(t, e) {
      this.physicsPipeline.step(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.ccdSolver, t, e);
    }
    propagateModifiedBodyPositionsToColliders() {
      this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw);
    }
    get timestep() {
      return this.integrationParameters.dt;
    }
    set timestep(t) {
      this.integrationParameters.dt = t;
    }
    get lengthUnit() {
      return this.integrationParameters.lengthUnit;
    }
    set lengthUnit(t) {
      this.integrationParameters.lengthUnit = t;
    }
    get numSolverIterations() {
      return this.integrationParameters.numSolverIterations;
    }
    set numSolverIterations(t) {
      this.integrationParameters.numSolverIterations = t;
    }
    get numAdditionalFrictionIterations() {
      return this.integrationParameters.numAdditionalFrictionIterations;
    }
    set numAdditionalFrictionIterations(t) {
      this.integrationParameters.numAdditionalFrictionIterations = t;
    }
    get numInternalPgsIterations() {
      return this.integrationParameters.numInternalPgsIterations;
    }
    set numInternalPgsIterations(t) {
      this.integrationParameters.numInternalPgsIterations = t;
    }
    switchToStandardPgsSolver() {
      this.integrationParameters.switchToStandardPgsSolver();
    }
    switchToSmallStepsPgsSolver() {
      this.integrationParameters.switchToSmallStepsPgsSolver();
    }
    switchToSmallStepsPgsSolverWithoutWarmstart() {
      this.integrationParameters.switchToSmallStepsPgsSolverWithoutWarmstart();
    }
    createRigidBody(t) {
      return this.bodies.createRigidBody(this.colliders, t);
    }
    createCharacterController(t) {
      let e = new _b(t, this.integrationParameters, this.broadPhase, this.narrowPhase, this.bodies, this.colliders);
      return this.characterControllers.add(e), e;
    }
    removeCharacterController(t) {
      this.characterControllers.delete(t), t.free();
    }
    createPidController(t, e, r, i) {
      let a = new db(this.integrationParameters, this.bodies, t, e, r, i);
      return this.pidControllers.add(a), a;
    }
    removePidController(t) {
      this.pidControllers.delete(t), t.free();
    }
    createVehicleController(t) {
      let e = new hb(t, this.broadPhase, this.narrowPhase, this.bodies, this.colliders);
      return this.vehicleControllers.add(e), e;
    }
    removeVehicleController(t) {
      this.vehicleControllers.delete(t), t.free();
    }
    createCollider(t, e) {
      let r = e ? e.handle : void 0;
      return this.colliders.createCollider(this.bodies, t, r);
    }
    createImpulseJoint(t, e, r, i) {
      return this.impulseJoints.createJoint(this.bodies, t, e.handle, r.handle, i);
    }
    createMultibodyJoint(t, e, r, i) {
      return this.multibodyJoints.createJoint(t, e.handle, r.handle, i);
    }
    getRigidBody(t) {
      return this.bodies.get(t);
    }
    getCollider(t) {
      return this.colliders.get(t);
    }
    getImpulseJoint(t) {
      return this.impulseJoints.get(t);
    }
    getMultibodyJoint(t) {
      return this.multibodyJoints.get(t);
    }
    removeRigidBody(t) {
      this.bodies && this.bodies.remove(t.handle, this.islands, this.colliders, this.impulseJoints, this.multibodyJoints);
    }
    removeCollider(t, e) {
      this.colliders && this.colliders.remove(t.handle, this.islands, this.bodies, e);
    }
    removeImpulseJoint(t, e) {
      this.impulseJoints && this.impulseJoints.remove(t.handle, e);
    }
    removeMultibodyJoint(t, e) {
      this.impulseJoints && this.multibodyJoints.remove(t.handle, e);
    }
    forEachCollider(t) {
      this.colliders.forEach(t);
    }
    forEachRigidBody(t) {
      this.bodies.forEach(t);
    }
    forEachActiveRigidBody(t) {
      this.bodies.forEachActiveRigidBody(this.islands, t);
    }
    castRay(t, e, r, i, a, c, l, _) {
      return this.broadPhase.castRay(this.narrowPhase, this.bodies, this.colliders, t, e, r, i, a, c ? c.handle : null, l ? l.handle : null, this.colliders.castClosure(_));
    }
    castRayAndGetNormal(t, e, r, i, a, c, l, _) {
      return this.broadPhase.castRayAndGetNormal(this.narrowPhase, this.bodies, this.colliders, t, e, r, i, a, c ? c.handle : null, l ? l.handle : null, this.colliders.castClosure(_));
    }
    intersectionsWithRay(t, e, r, i, a, c, l, _, h) {
      this.broadPhase.intersectionsWithRay(this.narrowPhase, this.bodies, this.colliders, t, e, r, i, a, c, l ? l.handle : null, _ ? _.handle : null, this.colliders.castClosure(h));
    }
    intersectionWithShape(t, e, r, i, a, c, l, _) {
      let h = this.broadPhase.intersectionWithShape(this.narrowPhase, this.bodies, this.colliders, t, e, r, i, a, c ? c.handle : null, l ? l.handle : null, this.colliders.castClosure(_));
      return h != null ? this.colliders.get(h) : null;
    }
    projectPoint(t, e, r, i, a, c, l) {
      return this.broadPhase.projectPoint(this.narrowPhase, this.bodies, this.colliders, t, e, r, i, a ? a.handle : null, c ? c.handle : null, this.colliders.castClosure(l));
    }
    projectPointAndGetFeature(t, e, r, i, a, c) {
      return this.broadPhase.projectPointAndGetFeature(this.narrowPhase, this.bodies, this.colliders, t, e, r, i ? i.handle : null, a ? a.handle : null, this.colliders.castClosure(c));
    }
    intersectionsWithPoint(t, e, r, i, a, c, l) {
      this.broadPhase.intersectionsWithPoint(this.narrowPhase, this.bodies, this.colliders, t, this.colliders.castClosure(e), r, i, a ? a.handle : null, c ? c.handle : null, this.colliders.castClosure(l));
    }
    castShape(t, e, r, i, a, c, l, _, h, u, w, b) {
      return this.broadPhase.castShape(this.narrowPhase, this.bodies, this.colliders, t, e, r, i, a, c, l, _, h, u ? u.handle : null, w ? w.handle : null, this.colliders.castClosure(b));
    }
    intersectionsWithShape(t, e, r, i, a, c, l, _, h) {
      this.broadPhase.intersectionsWithShape(this.narrowPhase, this.bodies, this.colliders, t, e, r, this.colliders.castClosure(i), a, c, l ? l.handle : null, _ ? _.handle : null, this.colliders.castClosure(h));
    }
    collidersWithAabbIntersectingAabb(t, e, r) {
      this.broadPhase.collidersWithAabbIntersectingAabb(this.narrowPhase, this.bodies, this.colliders, t, e, this.colliders.castClosure(r));
    }
    contactPairsWith(t, e) {
      this.narrowPhase.contactPairsWith(t.handle, this.colliders.castClosure(e));
    }
    intersectionPairsWith(t, e) {
      this.narrowPhase.intersectionPairsWith(t.handle, this.colliders.castClosure(e));
    }
    contactPair(t, e, r) {
      this.narrowPhase.contactPair(t.handle, e.handle, r);
    }
    intersectionPair(t, e) {
      return this.narrowPhase.intersectionPair(t.handle, e.handle);
    }
  }
  var ke;
  (function(n) {
    n[n.NONE = 0] = "NONE", n[n.COLLISION_EVENTS = 1] = "COLLISION_EVENTS", n[n.CONTACT_FORCE_EVENTS = 2] = "CONTACT_FORCE_EVENTS";
  })(ke || (ke = {}));
  class wb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    collider1() {
      return this.raw.collider1();
    }
    collider2() {
      return this.raw.collider2();
    }
    totalForce() {
      return g.fromRaw(this.raw.total_force());
    }
    totalForceMagnitude() {
      return this.raw.total_force_magnitude();
    }
    maxForceDirection() {
      return g.fromRaw(this.raw.max_force_direction());
    }
    maxForceMagnitude() {
      return this.raw.max_force_magnitude();
    }
  }
  class ub {
    constructor(t, e) {
      this.raw = e || new hi(t);
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    drainCollisionEvents(t) {
      this.raw.drainCollisionEvents(t);
    }
    drainContactForceEvents(t) {
      let e = new wb();
      this.raw.drainContactForceEvents((r) => {
        e.raw = r, t(e), e.free();
      });
    }
    clear() {
      this.raw.clear();
    }
  }
  var vr;
  (function(n) {
    n[n.NONE = 0] = "NONE", n[n.FILTER_CONTACT_PAIRS = 1] = "FILTER_CONTACT_PAIRS", n[n.FILTER_INTERSECTION_PAIRS = 2] = "FILTER_INTERSECTION_PAIRS";
  })(vr || (vr = {}));
  var Mn;
  (function(n) {
    n[n.EMPTY = 0] = "EMPTY", n[n.COMPUTE_IMPULSE = 1] = "COMPUTE_IMPULSE";
  })(Mn || (Mn = {}));
  var De;
  (function(n) {
    n[n.DYNAMIC_DYNAMIC = 1] = "DYNAMIC_DYNAMIC", n[n.DYNAMIC_KINEMATIC = 12] = "DYNAMIC_KINEMATIC", n[n.DYNAMIC_FIXED = 2] = "DYNAMIC_FIXED", n[n.KINEMATIC_KINEMATIC = 52224] = "KINEMATIC_KINEMATIC", n[n.KINEMATIC_FIXED = 8704] = "KINEMATIC_FIXED", n[n.FIXED_FIXED = 32] = "FIXED_FIXED", n[n.DEFAULT = 15] = "DEFAULT", n[n.ALL = 60943] = "ALL";
  })(De || (De = {}));
  class Ln {
    constructor(t, e, r, i) {
      this.colliderSet = t, this.handle = e, this._parent = r, this._shape = i;
    }
    finalizeDeserialization(t) {
      this.handle != null && (this._parent = t.get(this.colliderSet.raw.coParent(this.handle)));
    }
    ensureShapeIsCached() {
      this._shape || (this._shape = it.fromRaw(this.colliderSet.raw, this.handle));
    }
    get shape() {
      return this.ensureShapeIsCached(), this._shape;
    }
    clearShapeCache() {
      this._shape = null;
    }
    isValid() {
      return this.colliderSet.raw.contains(this.handle);
    }
    translation() {
      return g.fromRaw(this.colliderSet.raw.coTranslation(this.handle));
    }
    translationWrtParent() {
      return g.fromRaw(this.colliderSet.raw.coTranslationWrtParent(this.handle));
    }
    rotation() {
      return M.fromRaw(this.colliderSet.raw.coRotation(this.handle));
    }
    rotationWrtParent() {
      return M.fromRaw(this.colliderSet.raw.coRotationWrtParent(this.handle));
    }
    isSensor() {
      return this.colliderSet.raw.coIsSensor(this.handle);
    }
    setSensor(t) {
      this.colliderSet.raw.coSetSensor(this.handle, t);
    }
    setShape(t) {
      let e = t.intoRaw();
      this.colliderSet.raw.coSetShape(this.handle, e), e.free(), this._shape = t;
    }
    setEnabled(t) {
      this.colliderSet.raw.coSetEnabled(this.handle, t);
    }
    isEnabled() {
      return this.colliderSet.raw.coIsEnabled(this.handle);
    }
    setRestitution(t) {
      this.colliderSet.raw.coSetRestitution(this.handle, t);
    }
    setFriction(t) {
      this.colliderSet.raw.coSetFriction(this.handle, t);
    }
    frictionCombineRule() {
      return this.colliderSet.raw.coFrictionCombineRule(this.handle);
    }
    setFrictionCombineRule(t) {
      this.colliderSet.raw.coSetFrictionCombineRule(this.handle, t);
    }
    restitutionCombineRule() {
      return this.colliderSet.raw.coRestitutionCombineRule(this.handle);
    }
    setRestitutionCombineRule(t) {
      this.colliderSet.raw.coSetRestitutionCombineRule(this.handle, t);
    }
    setCollisionGroups(t) {
      this.colliderSet.raw.coSetCollisionGroups(this.handle, t);
    }
    setSolverGroups(t) {
      this.colliderSet.raw.coSetSolverGroups(this.handle, t);
    }
    contactSkin() {
      return this.colliderSet.raw.coContactSkin(this.handle);
    }
    setContactSkin(t) {
      return this.colliderSet.raw.coSetContactSkin(this.handle, t);
    }
    activeHooks() {
      return this.colliderSet.raw.coActiveHooks(this.handle);
    }
    setActiveHooks(t) {
      this.colliderSet.raw.coSetActiveHooks(this.handle, t);
    }
    activeEvents() {
      return this.colliderSet.raw.coActiveEvents(this.handle);
    }
    setActiveEvents(t) {
      this.colliderSet.raw.coSetActiveEvents(this.handle, t);
    }
    activeCollisionTypes() {
      return this.colliderSet.raw.coActiveCollisionTypes(this.handle);
    }
    setContactForceEventThreshold(t) {
      return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle, t);
    }
    contactForceEventThreshold() {
      return this.colliderSet.raw.coContactForceEventThreshold(this.handle);
    }
    setActiveCollisionTypes(t) {
      this.colliderSet.raw.coSetActiveCollisionTypes(this.handle, t);
    }
    setDensity(t) {
      this.colliderSet.raw.coSetDensity(this.handle, t);
    }
    setMass(t) {
      this.colliderSet.raw.coSetMass(this.handle, t);
    }
    setMassProperties(t, e, r, i) {
      let a = g.intoRaw(e), c = g.intoRaw(r), l = M.intoRaw(i);
      this.colliderSet.raw.coSetMassProperties(this.handle, t, a, c, l), a.free(), c.free(), l.free();
    }
    setTranslation(t) {
      this.colliderSet.raw.coSetTranslation(this.handle, t.x, t.y, t.z);
    }
    setTranslationWrtParent(t) {
      this.colliderSet.raw.coSetTranslationWrtParent(this.handle, t.x, t.y, t.z);
    }
    setRotation(t) {
      this.colliderSet.raw.coSetRotation(this.handle, t.x, t.y, t.z, t.w);
    }
    setRotationWrtParent(t) {
      this.colliderSet.raw.coSetRotationWrtParent(this.handle, t.x, t.y, t.z, t.w);
    }
    shapeType() {
      return this.colliderSet.raw.coShapeType(this.handle);
    }
    halfExtents() {
      return g.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle));
    }
    setHalfExtents(t) {
      const e = g.intoRaw(t);
      this.colliderSet.raw.coSetHalfExtents(this.handle, e);
    }
    radius() {
      return this.colliderSet.raw.coRadius(this.handle);
    }
    setRadius(t) {
      this.colliderSet.raw.coSetRadius(this.handle, t);
    }
    roundRadius() {
      return this.colliderSet.raw.coRoundRadius(this.handle);
    }
    setRoundRadius(t) {
      this.colliderSet.raw.coSetRoundRadius(this.handle, t);
    }
    halfHeight() {
      return this.colliderSet.raw.coHalfHeight(this.handle);
    }
    setHalfHeight(t) {
      this.colliderSet.raw.coSetHalfHeight(this.handle, t);
    }
    setVoxel(t, e, r, i) {
      this.colliderSet.raw.coSetVoxel(this.handle, t, e, r, i), this._shape = null;
    }
    propagateVoxelChange(t, e, r, i, a, c, l) {
      this.colliderSet.raw.coPropagateVoxelChange(this.handle, t.handle, e, r, i, a, c, l), this._shape = null;
    }
    combineVoxelStates(t, e, r, i) {
      this.colliderSet.raw.coCombineVoxelStates(this.handle, t.handle, e, r, i), this._shape = null;
    }
    vertices() {
      return this.colliderSet.raw.coVertices(this.handle);
    }
    indices() {
      return this.colliderSet.raw.coIndices(this.handle);
    }
    heightfieldHeights() {
      return this.colliderSet.raw.coHeightfieldHeights(this.handle);
    }
    heightfieldScale() {
      let t = this.colliderSet.raw.coHeightfieldScale(this.handle);
      return g.fromRaw(t);
    }
    heightfieldNRows() {
      return this.colliderSet.raw.coHeightfieldNRows(this.handle);
    }
    heightfieldNCols() {
      return this.colliderSet.raw.coHeightfieldNCols(this.handle);
    }
    parent() {
      return this._parent;
    }
    friction() {
      return this.colliderSet.raw.coFriction(this.handle);
    }
    restitution() {
      return this.colliderSet.raw.coRestitution(this.handle);
    }
    density() {
      return this.colliderSet.raw.coDensity(this.handle);
    }
    mass() {
      return this.colliderSet.raw.coMass(this.handle);
    }
    volume() {
      return this.colliderSet.raw.coVolume(this.handle);
    }
    collisionGroups() {
      return this.colliderSet.raw.coCollisionGroups(this.handle);
    }
    solverGroups() {
      return this.colliderSet.raw.coSolverGroups(this.handle);
    }
    containsPoint(t) {
      let e = g.intoRaw(t), r = this.colliderSet.raw.coContainsPoint(this.handle, e);
      return e.free(), r;
    }
    projectPoint(t, e) {
      let r = g.intoRaw(t), i = Je.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle, r, e));
      return r.free(), i;
    }
    intersectsRay(t, e) {
      let r = g.intoRaw(t.origin), i = g.intoRaw(t.dir), a = this.colliderSet.raw.coIntersectsRay(this.handle, r, i, e);
      return r.free(), i.free(), a;
    }
    castShape(t, e, r, i, a, c, l, _) {
      let h = g.intoRaw(t), u = g.intoRaw(r), w = M.intoRaw(i), b = g.intoRaw(a), f = e.intoRaw(), S = Se.fromRaw(this.colliderSet, this.colliderSet.raw.coCastShape(this.handle, h, f, u, w, b, c, l, _));
      return h.free(), u.free(), w.free(), b.free(), f.free(), S;
    }
    castCollider(t, e, r, i, a, c) {
      let l = g.intoRaw(t), _ = g.intoRaw(r), h = qe.fromRaw(this.colliderSet, this.colliderSet.raw.coCastCollider(this.handle, l, e.handle, _, i, a, c));
      return l.free(), _.free(), h;
    }
    intersectsShape(t, e, r) {
      let i = g.intoRaw(e), a = M.intoRaw(r), c = t.intoRaw(), l = this.colliderSet.raw.coIntersectsShape(this.handle, c, i, a);
      return i.free(), a.free(), c.free(), l;
    }
    contactShape(t, e, r, i) {
      let a = g.intoRaw(e), c = M.intoRaw(r), l = t.intoRaw(), _ = ve.fromRaw(this.colliderSet.raw.coContactShape(this.handle, l, a, c, i));
      return a.free(), c.free(), l.free(), _;
    }
    contactCollider(t, e) {
      return ve.fromRaw(this.colliderSet.raw.coContactCollider(this.handle, t.handle, e));
    }
    castRay(t, e, r) {
      let i = g.intoRaw(t.origin), a = g.intoRaw(t.dir), c = this.colliderSet.raw.coCastRay(this.handle, i, a, e, r);
      return i.free(), a.free(), c;
    }
    castRayAndGetNormal(t, e, r) {
      let i = g.intoRaw(t.origin), a = g.intoRaw(t.dir), c = Ue.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle, i, a, e, r));
      return i.free(), a.free(), c;
    }
  }
  var Qt;
  (function(n) {
    n[n.Density = 0] = "Density", n[n.Mass = 1] = "Mass", n[n.MassProps = 2] = "MassProps";
  })(Qt || (Qt = {}));
  class Z {
    constructor(t) {
      this.enabled = true, this.shape = t, this.massPropsMode = Qt.Density, this.density = 1, this.friction = 0.5, this.restitution = 0, this.rotation = M.identity(), this.translation = g.zeros(), this.isSensor = false, this.collisionGroups = 4294967295, this.solverGroups = 4294967295, this.frictionCombineRule = ze.Average, this.restitutionCombineRule = ze.Average, this.activeCollisionTypes = De.DEFAULT, this.activeEvents = ke.NONE, this.activeHooks = vr.NONE, this.mass = 0, this.centerOfMass = g.zeros(), this.contactForceEventThreshold = 0, this.contactSkin = 0, this.principalAngularInertia = g.zeros(), this.angularInertiaLocalFrame = M.identity();
    }
    static ball(t) {
      const e = new Dr(t);
      return new Z(e);
    }
    static capsule(t, e) {
      const r = new gi(t, e);
      return new Z(r);
    }
    static segment(t, e) {
      const r = new bi(t, e);
      return new Z(r);
    }
    static triangle(t, e, r) {
      const i = new mi(t, e, r);
      return new Z(i);
    }
    static roundTriangle(t, e, r, i) {
      const a = new fi(t, e, r, i);
      return new Z(a);
    }
    static polyline(t, e) {
      const r = new yi(t, e);
      return new Z(r);
    }
    static voxels(t, e) {
      const r = new vi(t, e);
      return new Z(r);
    }
    static trimesh(t, e, r) {
      const i = new Mr(t, e, r);
      return new Z(i);
    }
    static cuboid(t, e, r) {
      const i = new Re(t, e, r);
      return new Z(i);
    }
    static roundCuboid(t, e, r, i) {
      const a = new pi(t, e, r, i);
      return new Z(a);
    }
    static heightfield(t, e, r, i, a) {
      const c = new Si(t, e, r, i, a);
      return new Z(c);
    }
    static cylinder(t, e) {
      const r = new Ri(t, e);
      return new Z(r);
    }
    static roundCylinder(t, e, r) {
      const i = new Ci(t, e, r);
      return new Z(i);
    }
    static cone(t, e) {
      const r = new xi(t, e);
      return new Z(r);
    }
    static roundCone(t, e, r) {
      const i = new Ei(t, e, r);
      return new Z(i);
    }
    static convexHull(t) {
      const e = new fr(t, null);
      return new Z(e);
    }
    static convexMesh(t, e) {
      const r = new fr(t, e);
      return new Z(r);
    }
    static roundConvexHull(t, e) {
      const r = new yr(t, null, e);
      return new Z(r);
    }
    static roundConvexMesh(t, e, r) {
      const i = new yr(t, e, r);
      return new Z(i);
    }
    setTranslation(t, e, r) {
      if (typeof t != "number" || typeof e != "number" || typeof r != "number") throw TypeError("The translation components must be numbers.");
      return this.translation = {
        x: t,
        y: e,
        z: r
      }, this;
    }
    setRotation(t) {
      return M.copy(this.rotation, t), this;
    }
    setSensor(t) {
      return this.isSensor = t, this;
    }
    setEnabled(t) {
      return this.enabled = t, this;
    }
    setContactSkin(t) {
      return this.contactSkin = t, this;
    }
    setDensity(t) {
      return this.massPropsMode = Qt.Density, this.density = t, this;
    }
    setMass(t) {
      return this.massPropsMode = Qt.Mass, this.mass = t, this;
    }
    setMassProperties(t, e, r, i) {
      return this.massPropsMode = Qt.MassProps, this.mass = t, g.copy(this.centerOfMass, e), g.copy(this.principalAngularInertia, r), M.copy(this.angularInertiaLocalFrame, i), this;
    }
    setRestitution(t) {
      return this.restitution = t, this;
    }
    setFriction(t) {
      return this.friction = t, this;
    }
    setFrictionCombineRule(t) {
      return this.frictionCombineRule = t, this;
    }
    setRestitutionCombineRule(t) {
      return this.restitutionCombineRule = t, this;
    }
    setCollisionGroups(t) {
      return this.collisionGroups = t, this;
    }
    setSolverGroups(t) {
      return this.solverGroups = t, this;
    }
    setActiveHooks(t) {
      return this.activeHooks = t, this;
    }
    setActiveEvents(t) {
      return this.activeEvents = t, this;
    }
    setActiveCollisionTypes(t) {
      return this.activeCollisionTypes = t, this;
    }
    setContactForceEventThreshold(t) {
      return this.contactForceEventThreshold = t, this;
    }
  }
  class pb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new X(), this.map = new Ve(), t && t.forEachColliderHandle((e) => {
        this.map.set(e, new Ln(this, e, null));
      });
    }
    castClosure(t) {
      return (e) => {
        if (t) return t(this.get(e));
      };
    }
    finalizeDeserialization(t) {
      this.map.forEach((e) => e.finalizeDeserialization(t));
    }
    createCollider(t, e, r) {
      let i = r != null && r != null;
      if (i && isNaN(r)) throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");
      let a = e.shape.intoRaw(), c = g.intoRaw(e.translation), l = M.intoRaw(e.rotation), _ = g.intoRaw(e.centerOfMass), h = g.intoRaw(e.principalAngularInertia), u = M.intoRaw(e.angularInertiaLocalFrame), w = this.raw.createCollider(e.enabled, a, c, l, e.massPropsMode, e.mass, _, h, u, e.density, e.friction, e.restitution, e.frictionCombineRule, e.restitutionCombineRule, e.isSensor, e.collisionGroups, e.solverGroups, e.activeCollisionTypes, e.activeHooks, e.activeEvents, e.contactForceEventThreshold, e.contactSkin, i, i ? r : 0, t.raw);
      a.free(), c.free(), l.free(), _.free(), h.free(), u.free();
      let b = i ? t.get(r) : null, f = new Ln(this, w, b, e.shape);
      return this.map.set(w, f), f;
    }
    remove(t, e, r, i) {
      this.raw.remove(t, e.raw, r.raw, i), this.unmap(t);
    }
    unmap(t) {
      this.map.delete(t);
    }
    get(t) {
      return this.map.get(t);
    }
    len() {
      return this.map.len();
    }
    contains(t) {
      return this.get(t) != null;
    }
    forEach(t) {
      this.map.forEach(t);
    }
    getAll() {
      return this.map.getAll();
    }
  }
  class gb extends Fi {
    constructor(t) {
      super(), this.world = t, this.material = new ki({
        color: 16777215,
        vertexColors: true
      }), this.geometry = new Di(), this.frustumCulled = false;
    }
    update() {
      this.visible == true && this.parent != null && (this.buffers = this.world.debugRender(), this.geometry.setAttribute("position", new Lr(this.buffers.vertices, 3)), this.geometry.setAttribute("color", new Lr(this.buffers.colors, 4)));
    }
    enable() {
      this.visible = true;
    }
    isEnabled() {
      return this.visible == true;
    }
    disable() {
      this.visible = false;
    }
    toggle() {
      this.visible = !this.visible;
    }
  }
  class bb {
    constructor() {
      this.world = new Ke({
        x: 0,
        y: -9.81 * 8,
        z: 0
      }), this.world.numSolverIterations = 4, this.eventQueue = new ub(true), this.debugger = new gb(this.world), this.entities = /* @__PURE__ */ new Map(), this.jointQueue = [];
    }
    update(t) {
      this.world.step(this.eventQueue), this.debugger.update(), this.entities.forEach(function(e) {
        e.update(t);
      }), this.eventQueue.drainCollisionEvents(function(e, r, i) {
        const a = this.getEntityFromColliderHandle(e), c = this.getEntityFromColliderHandle(r), l = {
          handle: e,
          pair: c,
          started: i,
          type: "collision"
        }, _ = {
          handle: r,
          pair: a,
          started: i,
          type: "collision"
        };
        a.dispatchEvent(l), c.dispatchEvent(_);
      }.bind(this));
    }
    animate(t, e) {
      this.entities.forEach(function(r) {
        r.animate(t, e);
      });
    }
    setFrequency(t = 60) {
      this.world.timestep = 1 / t;
    }
    add(t) {
      if (t != null) {
        if (arguments.length > 1) for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
        this.entities.set(t.id, t), this.createObject3D(t), this.createRigidBody(t), this.createColliders(t), this.createParentJoint(t), t.dispatchEvent({
          type: "added"
        });
      }
      return t;
    }
    remove(t) {
      return this.removeJoints(t), this.removeColliders(t), this.removeRigidBody(t), t.object.removeFromParent(), this.entities.delete(t.id), t.dispatchEvent({
        type: "removed"
      }), t;
    }
    getEntityById(t) {
      return this.entities.get(t);
    }
    getChildren(t) {
      const e = [], r = [];
      this.world.impulseJoints.forEachJointHandleAttachedToRigidBody(t.rigidBody.handle, function(i) {
        e.push(i);
      });
      for (let i = e.length - 1; i >= 0; i--) {
        const a = e[i], c = this.world.impulseJoints.get(a), l = this.getEntityById(c.body2().userData.id);
        t.id != l.id && r.push(l);
      }
      return r;
    }
    duplicate(t) {
      var e = t.toJSON();
      return this.create(e);
    }
    getEntityFromColliderHandle(t) {
      const r = this.world.getCollider(t)._parent;
      return this.getEntityById(r.userData.id);
    }
    createObject3D(t) {
      const e = t.createObject3D(t.objectDesc);
      t.setObject(e);
    }
    createRigidBody(t) {
      const e = this.world.createRigidBody(t.rigidBodyDesc);
      t.setRigidBody(e);
    }
    removeRigidBody(t) {
      this.world.removeRigidBody(t.rigidBody), t.rigidBody = null;
    }
    createColliders(t) {
      t.rigidBody && t.collidersDesc.forEach(function(e) {
        const r = this.world.createCollider(e, t.rigidBody);
        r.events = e.events;
      }.bind(this));
    }
    removeColliders(t) {
      for (let e = t.rigidBody.numColliders() - 1; e >= 0; e--) {
        const r = t.rigidBody.collider(e);
        this.world.removeCollider(r);
      }
    }
    createJoint(t, e) {
      const r = new ht(), i = new ht().copy(t.rigidBodyDesc.translation).sub(e.rigidBodyDesc.translation), a = new Wt().copy(t.rigidBodyDesc.rotation), c = new Wt().copy(e.rigidBodyDesc.rotation);
      r.applyQuaternion(a.conjugate()), i.applyQuaternion(c.conjugate());
      const l = At.fixed(r, a, i, c);
      return this.world.createImpulseJoint(l, t.rigidBody, e.rigidBody, true);
    }
    removeJoint(t) {
      this.world.removeImpulseJoint(t, true);
    }
    createParentJoint(t) {
      let e = t.getParentId(), r = this.getEntityById(e);
      e && (r ? this.createJoint(r, t) : this.jointQueue.push(t.id));
      for (let i = this.jointQueue.length - 1; i >= 0; i--) {
        let a = this.getEntityById(this.jointQueue[i]);
        a && (r = this.getEntityById(a.getParentId()), r && (this.createJoint(r, a), this.jointQueue.splice(i, 1)));
      }
    }
    removeJoints(t) {
      const e = [];
      this.world.impulseJoints.forEachJointHandleAttachedToRigidBody(t.rigidBody.handle, function(r) {
        e.push(r);
      });
      for (let r = e.length - 1; r >= 0; r--) {
        const i = e[r], a = this.world.impulseJoints.get(i), c = this.getEntityById(a.body1().userData.id), l = this.getEntityById(a.body2().userData.id);
        t.id == c.id && l.rigidBodyDesc.userData.parentId != null && (this.jointQueue.push(l.id), l.setParentId(null)), this.removeJoint(a);
      }
    }
    removeParentJoint(t) {
      const e = [], r = this.getEntityById(t.getParentId());
      if (r) {
        this.world.impulseJoints.forEachJointHandleAttachedToRigidBody(r.rigidBody.handle, function(i) {
          e.push(i);
        });
        for (let i = e.length - 1; i >= 0; i--) {
          const a = e[i], c = this.world.impulseJoints.get(a), l = this.getEntityById(c.body2().userData.id);
          t.id == l.id && (this.removeJoint(c), this.jointQueue.push(l.id));
        }
      }
    }
    createController(t) {
      const e = this.world.createCharacterController(0.01);
      return t.setController(e), e.setSlideEnabled(true), e.setMaxSlopeClimbAngle(45 * Math.PI / 180), e.setMinSlopeSlideAngle(30 * Math.PI / 180), e.enableAutostep(0.5, 0.2, true), e.enableSnapToGround(0.5), e.setApplyImpulsesToDynamicBodies(true), e.setCharacterMass(1), e;
    }
    removeController(t) {
      this.world.removeCharacterController(t.controller), t.controller = null;
    }
    clear() {
      this.entities.forEach(function(t) {
        this.remove(t);
      }.bind(this)), this.jointQueue = [];
    }
    toJSON() {
      const t = [];
      return this.entities.forEach(function(e) {
        t.push(e.toJSON());
      }), t;
    }
  }
  class mb {
    constructor(t) {
      this.interval = new Zi(), this.physics = new bb(), this.graphics, this.assets = new ts(this.onLoad.bind(this, t));
    }
    init(t) {
      this.graphics = new es(t), this.graphics.scene.add(this.physics.debugger), this.physics.debugger.disable(), this.assets.load({
        models: "../json/assets-models.json",
        textures: "../json/assets-textures.json",
        audio: "../json/assets-audio.json",
        json: "../json/assets-json.json"
      });
    }
    update({ delta: t }) {
      this.physics.update(t);
    }
    render({ delta: t, alpha: e }) {
      this.physics.animate(t, e), this.graphics.render();
    }
    onLoad(t) {
      this.interval.add((e) => this.update(e), 1e3 / 60), this.interval.add((e) => this.render(e), -1), this.interval.start(), typeof t == "function" && t();
    }
  }
  const fb = {
    key: 0,
    class: "modal"
  }, yb = {
    class: "container"
  }, vb = {
    class: "content"
  }, Sb = {
    key: 0,
    class: "title"
  }, Rb = [
    "innerHTML"
  ], Cb = {
    class: "inputs"
  }, xb = [
    "id",
    "type",
    "value",
    "min",
    "max",
    "step",
    "accept"
  ], Eb = {
    __name: "Modal",
    setup(n) {
      var t = Y(""), e = Y(""), r = Y([]), i = Y(false);
      function a() {
        window.addEventListener("openModal", l), window.addEventListener("closeModal", _), window.addEventListener("keydown", w);
      }
      function c() {
        window.removeEventListener("openModal", l), window.removeEventListener("closeModal", _), window.removeEventListener("keydown", w);
      }
      function l(b) {
        i.value = true, b.detail && (b.detail.title && (t.value = b.detail.title), b.detail.text && (e.value = b.detail.text), b.detail.inputs && (r.value = b.detail.inputs, r.value.forEach(function(f) {
          f.type == "file" || f.type == "range" || f.type == "text" ? f.event = "change" : f.event = "click";
        }))), setTimeout(function() {
          window.dispatchEvent(new CustomEvent("modalOpened"));
        }, 100);
      }
      function _() {
        i.value = false, setTimeout(function() {
          window.dispatchEvent(new CustomEvent("modalClosed"));
        }, 100);
      }
      function h(b, f) {
        b == null && (b = _), b(f);
      }
      function u(b) {
        var f = r.value[r.value.length - 1];
        f && h(f.callback, b);
      }
      function w(b) {
        if (i.value == true) {
          var f = [
            "Space",
            "Enter",
            "Escape"
          ];
          f.indexOf(b.code) > -1 && (b.preventDefault(), u(b));
        }
      }
      return Ot(function() {
        a();
      }), Sr(function() {
        c();
      }), (b, f) => (W(), Rr(Me, {
        name: "fade-modal"
      }, {
        default: te(() => [
          gt(i) == true ? (W(), q("div", fb, [
            P("div", {
              class: "background",
              onClick: _
            }),
            P("div", yb, [
              P("div", vb, [
                gt(t) != "" ? (W(), q("h1", Sb, ee(gt(t)), 1)) : Vt("", true),
                P("p", {
                  class: "text",
                  innerHTML: gt(e)
                }, null, 8, Rb),
                P("div", Cb, [
                  (W(true), q(re, null, pe(gt(r), (S, T) => (W(), q("input", Mi({
                    class: S.class,
                    id: "modal-" + S.type + "-" + T,
                    type: S.type,
                    value: S.value,
                    min: S.min,
                    max: S.max,
                    step: S.step,
                    accept: S.accept,
                    style: S.style
                  }, {
                    [Li(S.event)]: (j) => h(S.callback, j)
                  }), null, 16, xb))), 256))
                ]),
                P("a", {
                  class: "close",
                  onClick: _
                }, f[0] || (f[0] = [
                  P("span", null, "x", -1)
                ]))
              ])
            ])
          ])) : Vt("", true)
        ]),
        _: 1
      }));
    }
  }, Pb = qt(Eb, [
    [
      "__scopeId",
      "data-v-7c21f54e"
    ]
  ]), jb = {
    __name: "App",
    setup(n) {
      const t = Y(false), e = Y(), r = window.game = new mb(a), i = da();
      function a() {
        t.value = true;
      }
      return Ot(function() {
        r.init(e.value);
      }), (c, l) => {
        const _ = Bi("router-view");
        return W(), q(re, null, [
          P("canvas", {
            ref_key: "canvas",
            ref: e
          }, null, 512),
          t.value ? (W(), q("div", {
            key: 0,
            class: Ht([
              "page",
              gt(i).name
            ])
          }, [
            Ct(_, null, {
              default: te(({ Component: h }) => [
                Ct(Me, {
                  name: "fade"
                }, {
                  default: te(() => [
                    (W(), Rr(Ni(h), {
                      game: gt(r)
                    }, null, 8, [
                      "game"
                    ]))
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 1
            })
          ], 2)) : Vt("", true),
          Ct(Pb),
          Ct(rs)
        ], 64);
      };
    }
  }, Ab = qt(jb, [
    [
      "__scopeId",
      "data-v-acc4bc17"
    ]
  ]), Ib = {
    __name: "PageHome",
    setup(n) {
      var t = Y("Home Page");
      return Ot(function() {
      }), (e, r) => (W(), q("h1", null, ee(gt(t)), 1));
    }
  }, zb = {
    __name: "PagePlay",
    setup(n) {
      var t = Y("Play Page");
      return Ot(function() {
      }), (e, r) => (W(), q("h1", null, ee(gt(t)), 1));
    }
  };
  class $e extends Hi {
    constructor(t) {
      super(), this.name = t.name || "", this.type = t.type || "entity", this.id = t.id || Oi.generateUUID(), this.isEntity = true, this.object, this.objectDesc, this.rigidBody, this.rigidBodyDesc, this.collidersDesc = [], this.snapshot = {
        position_1: new ht(),
        position_2: new ht(),
        rotation_1: new Wt(),
        rotation_2: new Wt()
      }, this.tweens = new ns(), this.forceDirection = new ht(), this.forceAcceleration = 1, this.forceSpeedMax = 1 / 0, this.setObjectDesc(t), this.setRigidBodyDesc(t), this.addColliderDesc(t), this.onAdded = this.onAdded.bind(this), this.addEventListener("added", this.onAdded);
    }
    update(t) {
      this.updateSnapshot(), this.updateForce(), this.dispatchEvent({
        type: "updated"
      });
    }
    animate(t, e) {
      if (this.rigidBody && this.rigidBody.isFixed()) return false;
      this.tweens.update(), this.lerp(e);
    }
    setObjectDesc(t) {
      t = Object.assign({
        ...{
          scale: {
            x: 1,
            y: 1,
            z: 1
          }
        }
      }, t), this.objectDesc = new Br(), this.objectDesc.scale.copy(t.scale);
    }
    setObject(t) {
      this.object = t;
    }
    createObject3D(t) {
      const e = new Br();
      return e.scale.copy(t.scale), e;
    }
    setRigidBodyDesc(t) {
      t = Object.assign({
        ...{
          angularDamping: 0,
          ccd: false,
          enabledRotations: {
            x: true,
            y: true,
            z: true
          },
          enabledTranslations: {
            x: true,
            y: true,
            z: true
          },
          isEnabled: true,
          linearDamping: 0,
          position: {
            x: 0,
            y: 0,
            z: 0
          },
          rotation: {
            x: 0,
            y: 0,
            z: 0,
            w: 1
          },
          sleeping: false,
          softCcdPrediction: 0,
          status: 0
        }
      }, t), this.rigidBodyDesc = new Rt(isNaN(t.status) ? ft[t.status] : t.status), this.rigidBodyDesc.enabledRotations(t.enabledRotations.x, t.enabledRotations.y, t.enabledRotations.z), this.rigidBodyDesc.enabledTranslations(t.enabledTranslations.x, t.enabledTranslations.y, t.enabledTranslations.z), this.rigidBodyDesc.setAngularDamping(t.angularDamping), this.rigidBodyDesc.setCcdEnabled(t.ccd), this.rigidBodyDesc.setEnabled(t.isEnabled), this.rigidBodyDesc.setLinearDamping(t.linearDamping), this.rigidBodyDesc.setRotation(t.rotation), this.rigidBodyDesc.setSleeping(t.sleeping), this.rigidBodyDesc.setSoftCcdPrediction(t.softCcdPrediction), this.rigidBodyDesc.setTranslation(t.position.x, t.position.y, t.position.z), this.rigidBodyDesc.setUserData({
        id: this.id,
        parentId: t.parentId
      });
    }
    setRigidBody(t) {
      this.rigidBody = t;
    }
    addColliderDesc(t) {
      if (t.shape) {
        t = Object.assign({
          ...{
            activeCollisionTypes: "DEFAULT",
            activeEvents: "NONE",
            collisionGroups: 4294967295,
            contactForceEventThreshold: 0,
            density: 1,
            events: [],
            friction: 0.5,
            isSensor: false,
            mass: 0,
            restitution: 0,
            shape: null,
            solverGroups: 4294967295,
            translation: {
              x: 0,
              y: 0,
              z: 0
            }
          }
        }, t);
        const r = new Z(t.shape);
        r.setActiveCollisionTypes(isNaN(t.activeCollisionTypes) ? De[t.activeCollisionTypes] : t.activeCollisionTypes), r.setActiveEvents(isNaN(t.activeEvents) ? ke[t.activeEvents] : t.activeEvents), r.setCollisionGroups(t.collisionGroups), r.setContactForceEventThreshold(t.contactForceEventThreshold), r.setMass(t.mass), r.setDensity(t.density), r.setFriction(t.friction), r.setRestitution(t.restitution), r.setSensor(t.isSensor), r.setSolverGroups(t.solverGroups), r.setTranslation(t.translation.x, t.translation.y, t.translation.z), r.events = t.events, this.collidersDesc.push(r);
      }
    }
    setController(t) {
      this.controller = t;
    }
    getParentId() {
      return this.rigidBodyDesc.userData.parentId;
    }
    setParentId(t) {
      this.rigidBodyDesc.userData.parentId = t;
    }
    getPosition() {
      return this.rigidBody == null ? this.rigidBodyDesc.translation : this.rigidBody.isKinematic() ? this.rigidBody.nextTranslation() : this.rigidBody.translation();
    }
    setPosition(t) {
      this.rigidBody && this.rigidBody.setTranslation(t);
    }
    resetPosition() {
      this.setPosition(this.rigidBodyDesc.translation);
    }
    getRotation() {
      return this.rigidBody == null ? this.rigidBodyDesc.rotation : this.rigidBody.isKinematic() ? this.rigidBody.nextRotation() : this.rigidBody.rotation();
    }
    setRotation(t) {
      this.rigidBody && this.rigidBody.setRotation(t);
    }
    resetRotation() {
      this.setRotation(this.rigidBodyDesc.rotation);
    }
    getScale() {
      return this.object.scale;
    }
    setScale(t) {
      this.object && this.object.scale.copy(t);
    }
    resetScale() {
      this.setScale(this.objectDesc.scale);
    }
    getLinearVelocity() {
      return this.rigidBody ? this.rigidBody.linvel() : this.rigidBodyDesc.linvel;
    }
    setLinearVelocity(t) {
      this.rigidBody && this.rigidBody.setLinvel(t);
    }
    applyVelocityAtAxisAngle(t = {
      x: 1,
      y: 1,
      z: 1
    }, e = {
      x: 0,
      y: 0,
      z: 0
    }, r = 0) {
      lt.copy(this.getLinearVelocity()), lt.applyAxisAngle(e, -r), lt.multiply(t), lt.applyAxisAngle(e, r), this.setLinearVelocity(lt, true);
    }
    applyImpulse(t = {
      x: 0,
      y: 0,
      z: 0
    }) {
      this.rigidBody.applyImpulse(t, true);
    }
    applyImpulseAtAngle(t = {
      x: 0,
      y: 0,
      z: 0
    }, e = 0) {
      t = lt.copy(t), t.applyAxisAngle({
        x: 0,
        y: 0,
        z: 1
      }, e), this.applyImpulse(t);
    }
    setForce(t = {
      x: 0,
      y: 0,
      z: 0
    }, e = 1, r = 1 / 0) {
      this.forceDirection.copy(t).normalize(), this.forceAcceleration = e, this.forceSpeedMax = r;
    }
    updateForce() {
      if (this.forceDirection.length() > 0) {
        lt.copy(this.getLinearVelocity());
        const t = lt.dot(this.forceDirection), e = t + this.forceAcceleration, i = Math.max(t, Math.min(e, this.forceSpeedMax)) - t;
        lt.x += this.forceDirection.x * i, lt.y += this.forceDirection.y * i, lt.z += this.forceDirection.z * i, this.setLinearVelocity(lt);
      }
    }
    resetLinearVelocity() {
      this.setLinearVelocity(this.rigidBodyDesc.linvel);
    }
    getAngularVelocity() {
      return this.rigidBody == null ? this.rigidBodyDesc.angvel : this.rigidBody.angvel();
    }
    setAngularVelocity(t) {
      this.rigidBody && this.rigidBody.setAngvel(t);
    }
    setAngularVelocityAtAngle(t = {
      x: 1,
      y: 1,
      z: 1
    }, e = 0) {
      const r = lt.copy(this.getLinearVelocity());
      let i = 1;
      r.applyAxisAngle({
        x: 0,
        y: 0,
        z: 1
      }, -e), i *= -Math.sign(Math.round(r.x)), t = lt.copy(t), t.multiplyScalar(i), this.setAngularVelocity(t);
    }
    resetAngularVelocity() {
      this.setAngularVelocity(this.rigidBodyDesc.angvel);
    }
    getStatus() {
      return this.rigidBody ? this.rigidBody.bodyType : this.rigidBodyDesc.status;
    }
    setStatus(t) {
      this.rigidBody && this.rigidBody.setBodyType(t);
    }
    resetStatus() {
      this.setStatus(this.rigidBodyDesc.status);
    }
    resetForces() {
      this.rigidBody && this.rigidBody.resetForces();
    }
    resetTorques() {
      this.rigidBody && this.rigidBody.resetTorques();
    }
    reset() {
      this.resetPosition(), this.resetRotation(), this.resetScale(), this.resetLinearVelocity(), this.resetAngularVelocity(), this.resetForces(), this.resetTorques(), this.resetStatus(), this.updateSnapshot(), this.lerp(1);
    }
    tween(t) {
      return typeof t.easing == "string" && (t.easing = t.easing.split(".").reduce((r, i) => r && r[i] || null, is)), new ss(t.object, this.tweens).to(t.to, t.duration).dynamic(t.dynamic).easing(t.easing).interpolation(t.interpolation).onStart(t.onStart).onUpdate(t.onUpdate).onComplete(t.onComplete);
    }
    updateSnapshot(t = false) {
      t == true ? (this.snapshot.position_1.copy(this.rigidBodyDesc.translation), this.snapshot.position_2.copy(this.rigidBodyDesc.translation), this.snapshot.rotation_1.copy(this.rigidBodyDesc.rotation), this.snapshot.rotation_2.copy(this.rigidBodyDesc.rotation)) : (this.snapshot.position_1.copy(this.snapshot.position_2), this.snapshot.rotation_1.copy(this.snapshot.rotation_2), this.rigidBody.isKinematic() ? (this.snapshot.position_2.copy(this.rigidBody.nextTranslation()), this.snapshot.rotation_2.copy(this.rigidBody.nextRotation())) : (this.snapshot.position_2.copy(this.rigidBody.translation()), this.snapshot.rotation_2.copy(this.rigidBody.rotation())));
    }
    lerp(t = 0) {
      this.object && (this.object.position.lerpVectors(this.snapshot.position_1, this.snapshot.position_2, t), this.object.quaternion.slerpQuaternions(this.snapshot.rotation_1, this.snapshot.rotation_2, t));
    }
    getCollider(t) {
      for (let e = 0; e < this.rigidBody.numColliders(); e++) {
        const r = this.rigidBody.collider(e);
        if (t == r.handle) return r;
      }
    }
    onCollision(t) {
      this.getCollider(t.handle).events.filter(function(i) {
        return i.started == null && t.started == true || i.started == t.started;
      }.bind(this)).forEach(function(i) {
        try {
          let a = i;
          a && (typeof i == "object" && (a = this[i.name]), a(Object.assign(t, i)));
        } catch (a) {
          console.error(a);
        }
      }.bind(this));
    }
    onAdded(t) {
      this.updateSnapshot(true), this.lerp(1), this.onCollision = this.onCollision.bind(this), this.onRemoved = this.onRemoved.bind(this), this.addEventListener("collision", this.onCollision), this.addEventListener("removed", this.onRemoved);
    }
    onRemoved(t) {
      this.removeEventListener("collision", this.onCollision), this.removeEventListener("removed", this.onRemoved);
    }
    getSpeed() {
      return this.rigidBody == null ? 0 : lt.copy(this.getLinearVelocity()).length();
    }
    toJSON() {
      let t = {
        id: this.id,
        name: this.name,
        type: this.type
      };
      return t = Object.assign({
        angularDamping: this.rigidBodyDesc.angularDamping,
        ccd: this.rigidBodyDesc.ccdEnabled,
        enabledRotations: {
          x: this.rigidBodyDesc.rotationsEnabledX,
          y: this.rigidBodyDesc.rotationsEnabledY,
          z: this.rigidBodyDesc.rotationsEnabledZ
        },
        enabledTranslations: {
          x: this.rigidBodyDesc.translationsEnabledX,
          y: this.rigidBodyDesc.translationsEnabledY,
          z: this.rigidBodyDesc.translationsEnabledZ
        },
        isEnabled: this.rigidBodyDesc.enabled,
        linearDamping: this.rigidBodyDesc.linearDamping,
        parentId: this.rigidBodyDesc.userData.parentId,
        position: {
          x: this.rigidBodyDesc.translation.x,
          y: this.rigidBodyDesc.translation.y,
          z: this.rigidBodyDesc.translation.z
        },
        rotation: {
          x: this.rigidBodyDesc.rotation.x,
          y: this.rigidBodyDesc.rotation.y,
          z: this.rigidBodyDesc.rotation.z,
          w: this.rigidBodyDesc.rotation.w
        },
        scale: {
          x: this.objectDesc.scale.x,
          y: this.objectDesc.scale.y,
          z: this.objectDesc.scale.z
        },
        sleeping: this.rigidBodyDesc.sleeping,
        softCcdPrediction: this.rigidBodyDesc.softCcdPrediction,
        status: this.rigidBodyDesc.status
      }, t), this.collidersDesc.length > 0 && (t = Object.assign({
        activeCollisionTypes: this.collidersDesc[0].activeCollisionTypes,
        activeEvents: this.collidersDesc[0].activeEvents,
        collisionGroups: this.collidersDesc[0].collisionGroups,
        contactForceEventThreshold: this.collidersDesc[0].contactForceEventThreshold,
        density: this.collidersDesc[0].density,
        events: this.collidersDesc[0].events,
        friction: this.collidersDesc[0].friction,
        isSensor: this.collidersDesc[0].isSensor,
        mass: this.collidersDesc[0].mass,
        restitution: this.collidersDesc[0].restitution,
        solverGroups: this.collidersDesc[0].solverGroups,
        translation: this.collidersDesc[0].translation
      }, t)), t;
    }
  }
  let lt = new ht(), wt = class extends $e {
    static model = {
      name: ""
    };
    constructor(t) {
      if (t = Object.assign({
        color: "#ffffff",
        scale: {
          x: 1,
          y: 1,
          z: 1
        }
      }, t), t.shape = new Re(t.scale.x / 2, t.scale.y / 2, t.scale.z / 2), super(t), this.isCube = true, this.type = "cube", this.model = t.model, this.model.isObject3D == null) {
        const e = this.createModel(t);
        this.setModel(e);
      }
      this.onCubeAdded = this.onCubeAdded.bind(this), this.addEventListener("added", this.onCubeAdded);
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e), this.model && this.model.mixer && this.model.mixer.update(t);
    }
    onCubeAdded(t) {
      this.onCubeRemoved = this.onCubeRemoved.bind(this), this.model.isObject3D && this.object.add(this.model), this.addEventListener("removed", this.onCubeRemoved);
    }
    onCubeRemoved(t) {
      this.model.isObject3D && this.object.remove(this.model), this.removeEventListener("removed", this.onCubeRemoved);
    }
    createModel(t) {
      var e = new Gi(1, 1, 1), r = new Un({
        color: t.color
      });
      const i = new Jn(e, r);
      return i.receiveShadow = true, i.castShadow = true, i;
    }
    setModel(t) {
      this.model = t;
    }
    setScale(t) {
      for (var e = new ht().copy(t), r = e.clone(), i = 0; i < this.rigidBody.numColliders(); i++) {
        var a = this.rigidBody.collider(i), c = this.collidersDesc[i], l = new ht().copy(c.shape.halfExtents), _ = l.clone().multiplyScalar(2), h = new ht().copy(c.translation);
        i == 0 && r.divide(_), a.setHalfExtents(l.multiply(r)), a.setTranslationWrtParent(h.multiply(r));
      }
      super.setScale(e);
    }
    toJSON() {
      const t = super.toJSON();
      return Object.assign(t, {
        type: this.type
      }), this.model.name && (t.model = {
        name: this.model.name
      }), t;
    }
  };
  class Pi extends $e {
    constructor(t) {
      t = Object.assign({
        status: 1
      }, t), super(t);
    }
  }
  class Tb extends wt {
    static model = {
      name: ""
    };
    constructor(t) {
      t = Object.assign({
        collisionGroups: 0,
        isSensor: true,
        status: 1
      }, t), super(t), this.lightType = t.lightType, this.model = $n.create(t.lightType, t), this.type = "light";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    toJSON() {
      const t = super.toJSON();
      return t.lightType = this.model.type, t.intensity = this.model.intensity, t;
    }
  }
  class Fb extends $e {
    static model = {
      name: ""
    };
    constructor(t = {}) {
      if (t = Object.assign({
        color: "#ffffff",
        heightSegments: 32,
        radius: 0.5,
        widthSegments: 32
      }, t), t.shape = new Dr(t.radius), super(t), this.isSphere = true, this.type = "sphere", this.model = t.model, this.model.isObject3D == null) {
        const e = this.createModel(t);
        this.setModel(e);
      }
      this.onSphereAdded = this.onSphereAdded.bind(this), this.addEventListener("added", this.onSphereAdded);
    }
    onSphereAdded(t) {
      this.onSphereRemoved = this.onSphereRemoved.bind(this), this.model.isObject3D && this.object.add(this.model), this.addEventListener("removed", this.onSphereRemoved);
    }
    onSphereRemoved(t) {
      this.model.isObject3D && this.object.remove(this.model), this.removeEventListener("removed", this.onSphereRemoved);
    }
    createModel(t) {
      const e = new Wi(t.radius, t.widthSegments, t.heightSegments), r = new Un({
        color: t.color
      }), i = new Jn(e, r);
      return i.receiveShadow = true, i.castShadow = true, i;
    }
    setModel(t) {
      this.model = t;
    }
    setRadius(t) {
      this.rigidBody.collider(0).setRadius(t), this.object.scale.set(t * 2, t * 2, t * 2);
    }
    setScale(t) {
      this.setRadius(t.x / 2);
    }
  }
  class kb extends $e {
    constructor(t) {
      t = Object.assign({
        indices: new Uint16Array(),
        status: 1,
        vertices: new Float32Array()
      }, t);
      let e, r = [];
      t.model ? (t.model.traverse(function(i) {
        i.isMesh && (e = i.geometry, e.rotateX(i.rotation.x), e.rotateY(i.rotation.y), e.rotateZ(i.rotation.z), e.scale(i.scale.x, i.scale.y, i.scale.z), e.translate(i.position.x, i.position.y, i.position.z), r.push(e));
      }), e = Vi(r), t.vertices = e.attributes.position.array, t.indices = e.index.array, t.shape = new Mr(t.vertices, t.indices, mr.FIX_INTERNAL_EDGES)) : console.error("Error: TriMesh missing model."), super(t), this.isTriMesh = true, this.type = "trimesh", this.model = t.model, this.onTriMeshAdded = this.onTriMeshAdded.bind(this), this.addEventListener("added", this.onTriMeshAdded);
    }
    onTriMeshAdded(t) {
      this.onTriMeshRemoved = this.onTriMeshRemoved.bind(this), this.model && this.model.isObject3D && this.object.add(this.model), this.addEventListener("removed", this.onTriMeshRemoved);
    }
    onTriMeshRemoved(t) {
      this.model && this.model.isObject3D && this.object.remove(this.model), this.removeEventListener("removed", this.onTriMeshRemoved);
    }
    toJSON() {
      const t = super.toJSON();
      return Object.assign(t, {
        type: this.type
      }), this.model.name && (t.model = {
        name: this.model.name
      }), t;
    }
  }
  let Db = class ji {
    static Cube = wt;
    static Empty = Pi;
    static Light = Tb;
    static Sphere = Fb;
    static TriMesh = kb;
    static create(t) {
      return new this[t.className](t);
    }
    static getClassNameByType(t) {
      return Object.keys({
        ...this,
        ...ji
      }).find((i) => i.toLowerCase() == t);
    }
    static getPropertyByClassName(t, e) {
      const r = this[e];
      if (r) return r[t];
    }
  };
  class Mb extends wt {
    static model = {
      name: "cube-bounce"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        scale: {
          x: 1,
          y: 1,
          z: 1
        },
        status: 1
      }, t), super(t), this.type = "bounce", this.addColliderDesc({
        activeCollisionTypes: "ALL",
        activeEvents: "COLLISION_EVENTS",
        events: [
          {
            name: "bounce"
          }
        ],
        isSensor: true,
        mass: 0,
        shape: new Re(t.scale.x * 0.4, t.scale.y * 0.125, t.scale.z * 0.4),
        translation: {
          x: 0,
          y: 0.5 * t.scale.y,
          z: 0
        }
      });
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
  }
  class Lb extends wt {
    static model = {
      name: "cube-checkpoint"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "setCheckpoint"
          }
        ],
        isSensor: true,
        status: 1
      }, t), super(t), this.type = "checkpoint";
    }
    setCheckpoint({ pair: t }) {
      console.log(t);
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
  }
  class Bb extends wt {
    static model = {
      name: "cube-control"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "setMode"
          }
        ],
        isSensor: true,
        status: 1
      }, t), super(t), this.type = "control";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    setMode({ pair: t }) {
      t.dispatchEvent({
        type: "setmode",
        value: "control"
      });
    }
  }
  class Nb extends wt {
    static model = {
      name: ""
    };
    constructor(t) {
      t = Object.assign({
        color: "#0290ff"
      }, t), super(t);
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
  }
  class Hb extends wt {
    static model = {
      name: "cube-direction"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "setDirection"
          }
        ],
        status: 1
      }, t), super(t), this.type = "direction";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    setDirection({ pair: t, target: e }) {
      var r = new ht(1, 0, 0), i = new Wt().copy(e.rigidBody.rotation()), a = new Cr().setFromQuaternion(i), c = a.z;
      r.x = Math.cos(c), r.y = Math.sin(c), t.setForce(r, 0.5, 14);
    }
  }
  class Ob extends wt {
    static model = {
      name: "cube-finish"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "finish"
          }
        ],
        status: 1
      }, t), super(t), this.type = "finish";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    finish({ pair: t }) {
      console.log(t);
    }
  }
  class Gb extends wt {
    static model = {
      name: "cube-grapple"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "setMode"
          }
        ],
        status: 1
      }, t), super(t), this.type = "grapple";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    setMode({ pair: t }) {
      t.dispatchEvent({
        type: "setmode",
        value: "grapple"
      });
    }
  }
  class Wb extends wt {
    static model = {
      name: "cube-gravity"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "setGravity"
          }
        ],
        isSensor: true,
        status: 1
      }, t), super(t), this.type = "gravity";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    setGravity({ pair: t, target: e }) {
      var r = new ht().copy(game.physics.world.gravity), i = r.length(), a = new Wt().copy(e.rigidBody.rotation()), c = new Cr().setFromQuaternion(a), l = -(Math.PI / 2 - c.z);
      game.physics.world.gravity.x = i * Math.cos(l), game.physics.world.gravity.y = i * Math.sin(l), t.dispatchEvent({
        type: "setgravity",
        gravity: r,
        value: l
      });
    }
  }
  class Ai {
    constructor() {
    }
    static create(t = "PerspectiveCamera", e) {
      var r, i, a = window.innerWidth, c = window.innerHeight, l = a / c;
      return e = Object.assign({
        far: 100,
        fov: 45,
        near: 0.05,
        zoom: 1
      }, e), t == "PerspectiveCamera" ? r = new Ui(e.fov, l, e.near, e.far) : t == "OrthographicCamera" && (r = new Ji(-l, l, 1, -1, e.near, e.far)), r.fov = e.fov, r.zoom = e.zoom, r.updateProjectionMatrix(), e.helper == true && (i = new qi(r), r.addEventListener("added", function(_) {
        r.parent.add(i);
      }), r.addEventListener("removed", function(_) {
        i.removeFromParent();
      })), r;
    }
  }
  class Vb extends wt {
    static model = {
      name: "cube-player"
    };
    constructor(t) {
      t = Object.assign({
        activeCollisionTypes: "ALL",
        activeEvents: "COLLISION_EVENTS",
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "checkCollision"
          }
        ],
        status: 0
      }, t), super(t), this.type = "player", this.keys = {}, this.pointer = {}, this.jumpCount = 0, this.mode = "jump", this.light = $n.create("PointLight", {
        color: "#dc265a",
        intensity: Math.PI * 10
      }), this.camera = Ai.create("PerspectiveCamera"), this.cameraOffset = new ht(0, 0, 20), this.onPlayerAdded = this.onPlayerAdded.bind(this), this.addEventListener("added", this.onPlayerAdded);
    }
    update(t) {
      super.update(t), this.updateControls();
    }
    animate(t, e) {
      super.animate(t, e), this.updateCameraPosition();
    }
    updateCameraPosition() {
      this.camera.position.copy(this.object.position).add(this.cameraOffset);
    }
    checkCollision({ started: t, target: e }) {
      t == true && (e.jumpCount = 1);
    }
    jump() {
      if ((this.mode == "jump" || this.mode == "control") && this.jumpCount > 0) {
        const e = this.rigidBody.mass(), r = new ht(0, 30 * e, 0), i = game.physics.world.gravity, a = Math.atan2(i.y, i.x) + Math.PI / 2;
        this.setAngularVelocityAtAngle({
          x: 0,
          y: 0,
          z: 8
        }, a), this.applyVelocityAtAxisAngle({
          x: 1,
          y: 0,
          z: 1
        }, {
          x: 0,
          y: 0,
          z: 1
        }, a), this.applyImpulseAtAngle(r, a), this.jumpCount--;
      }
    }
    updateControls() {
      if (this.mode == "control") {
        let t = 0, e = game.physics.world.gravity, r = Math.atan2(e.y, e.x) + Math.PI / 2;
        this.keys.KeyA == true ? t = -1 : this.keys.KeyD == true ? t = 1 : this.keys.ArrowLeft == true ? t = -1 : this.keys.ArrowRight == true && (t = 1), dr.copy({
          x: t,
          y: 0,
          z: 0
        }), dr.applyAxisAngle({
          x: 0,
          y: 0,
          z: 1
        }, r), this.setForce(dr, 2, 14);
      }
    }
    onPlayerAdded(t) {
      this.onPlayerRemoved = this.onPlayerRemoved.bind(this), this.keyDown = this.keyDown.bind(this), this.keyUp = this.keyUp.bind(this), this.pointerDown = this.pointerDown.bind(this), this.pointerUp = this.pointerUp.bind(this), this.onSetMode = this.onSetMode.bind(this), this.onSetGravity = this.onSetGravity.bind(this), this.object.add(this.light), this.updateCameraPosition(), this.addEventListener("removed", this.onPlayerRemoved), this.addEventListener("setmode", this.onSetMode), this.addEventListener("setgravity", this.onSetGravity), document.addEventListener("keydown", this.keyDown), document.addEventListener("keyup", this.keyUp), document.addEventListener("pointerdown", this.pointerDown), document.addEventListener("pointerup", this.pointerUp);
    }
    onPlayerRemoved(t) {
      this.removeEventListener("removed", this.onPlayerRemoved), this.removeEventListener("setmode", this.onSetMode), this.removeEventListener("setgravity", this.onSetGravity), this.object.remove(this.light), document.removeEventListener("keydown", this.keyDown), document.removeEventListener("keyup", this.keyUp), document.removeEventListener("pointerdown", this.pointerDown), document.removeEventListener("pointerup", this.pointerUp);
    }
    reset() {
      this.jumpCount = 1, super.reset();
    }
    onSetMode({ value: t }) {
      this.setMode(t);
    }
    setMode(t) {
      this.mode = t;
    }
    onSetGravity({ value: t }) {
      this.tween({
        object: {
          z: this.camera.rotation.z
        },
        to: {
          z: t + Math.PI / 2
        },
        dynamic: true,
        duration: 250,
        easing: "Quadratic.InOut",
        onUpdate: function(e) {
          this.camera.rotation.z = e.z;
        }.bind(this)
      }).start();
    }
    keyDown({ code: t, repeat: e }) {
      e || (this.keys[t] = true, (this.keys.Space == true || this.keys.ArrowUp == true) && this.jump());
    }
    keyUp({ code: t }) {
      this.keys[t] = false;
    }
    pointerDown({ target: t, which: e }) {
      t.nodeName == "CANVAS" && (this.pointer[e] = true, this.pointer[1] == true && this.jump());
    }
    pointerUp({ which: t }) {
      this.pointer[t] = false;
    }
  }
  let dr = new ht();
  class Ub extends Pi {
    static model = {
      name: ""
    };
    constructor(t) {
      t = Object.assign({
        color: "#ffffff",
        scale: {
          x: 1,
          y: 1,
          z: 1
        }
      }, t), super(t), this.isProp = true, this.type = "prop", this.model = t.model, this.onPropAdded = this.onPropAdded.bind(this), this.addEventListener("added", this.onPropAdded);
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e), this.model && this.model.mixer && this.model.mixer.update(t);
    }
    onPropAdded(t) {
      this.onPropRemoved = this.onPropRemoved.bind(this), this.model.isObject3D && this.object.add(this.model), this.addEventListener("removed", this.onPropRemoved);
    }
    onPropRemoved(t) {
      this.model.isObject3D && this.object.remove(this.model), this.removeEventListener("removed", this.onPropRemoved);
    }
    toJSON() {
      const t = super.toJSON();
      return this.model.name && (t.model = {
        name: this.model.name
      }), t;
    }
  }
  class Jb extends wt {
    static model = {
      name: "cube-reset"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "reset"
          }
        ],
        isSensor: true,
        status: 1
      }, t), super(t), this.type = "reset";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    reset({ pair: t }) {
      t.reset();
    }
  }
  class qb extends wt {
    static model = {
      name: "cube-resize"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "setPairScale"
          }
        ],
        isSensor: true,
        status: 1
      }, t), super(t), this.type = "resize";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    setPairScale({ pair: t, target: e }) {
      var r = e.rigidBody.collider(0), i = new ht().copy(r.halfExtents()).multiplyScalar(2);
      t.setScale(i);
    }
  }
  class Kb extends wt {
    static model = {
      name: "cube-spike"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        scale: {
          x: 1,
          y: 1,
          z: 1
        },
        status: 1
      }, t), super(t), this.type = "spike", this.addColliderDesc({
        activeCollisionTypes: "ALL",
        activeEvents: "COLLISION_EVENTS",
        events: [
          {
            name: "kill"
          }
        ],
        isSensor: true,
        mass: 0,
        shape: new Re(t.scale.x * 0.4, t.scale.y * 0.125, t.scale.z * 0.25),
        translation: {
          x: 0,
          y: 0.5 * t.scale.y,
          z: 0
        }
      });
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    kill({ pair: t }) {
      console.log("Spike Sensor Touched!", t);
    }
  }
  class $b extends wt {
    static model = {
      name: "cube-tip"
    };
    constructor(t) {
      t = Object.assign({
        enabledRotations: {
          x: false,
          y: false,
          z: true
        },
        enabledTranslations: {
          x: true,
          y: true,
          z: false
        },
        events: [
          {
            name: "showTip",
            value: "Say something nice!"
          }
        ],
        isSensor: true,
        status: 1
      }, t), super(t), this.type = "tip";
    }
    update(t) {
      super.update(t);
    }
    animate(t, e) {
      super.animate(t, e);
    }
    showTip({ value: t }) {
      window.dispatchEvent(new CustomEvent("openModal", {
        detail: {
          title: "Tip",
          text: t,
          inputs: [
            {
              type: "button",
              value: "Continue",
              callback: function() {
                window.dispatchEvent(new CustomEvent("closeModal"));
              }
            }
          ]
        }
      }));
    }
  }
  class Bn extends Db {
    static Bounce = Mb;
    static Checkpoint = Lb;
    static Control = Bb;
    static Cube = Nb;
    static Direction = Hb;
    static Finish = Ob;
    static Grapple = Gb;
    static Gravity = Wb;
    static Player = Vb;
    static Prop = Ub;
    static Reset = Jb;
    static Resize = qb;
    static Spike = Kb;
    static Tip = $b;
    static create(t) {
      return t.className == null && (t.className = super.getClassNameByType(t.type)), t.model == null && (t.model = super.getPropertyByClassName("model", t.className)), t.model && game.assets.get(t.model.name) && (t.model = game.assets.duplicate(t.model.name)), super.create(t);
    }
  }
  class Xb {
    constructor(t, e) {
      this.execute = t, this.undo = e;
    }
  }
  class Yb {
    constructor() {
      this.commands = [], this.current = -1;
    }
    add(t, e) {
      const r = new Xb(t, e);
      return this.commands.splice(this.current + 1), this.commands.push(r), this.current++, r;
    }
    undo() {
      this.canUndo() && (this.commands[this.current].undo(), this.current--);
    }
    redo() {
      this.canRedo() && (this.current++, this.commands[this.current].execute());
    }
    canUndo() {
      return this.current >= 0;
    }
    canRedo() {
      return this.current < this.commands.length - 1;
    }
  }
  const Qb = {
    class: "panel"
  }, Zb = {
    class: "actions"
  }, tm = {
    __name: "PanelActions",
    props: {
      game: Object,
      mode: Object
    },
    emits: [
      "setMode"
    ],
    setup(n, { emit: t }) {
      const e = t;
      function r(i) {
        e("setMode", {
          type: i
        });
      }
      return Ot(function() {
      }), (i, a) => (W(), q("div", Qb, [
        P("div", Zb, [
          P("button", {
            class: Ht([
              "action",
              {
                selected: n.mode.type == "select"
              }
            ]),
            onClick: a[0] || (a[0] = (c) => r("select")),
            title: "Select"
          }, a[3] || (a[3] = [
            P("span", {
              class: "material-symbols-rounded"
            }, "arrow_selector_tool", -1)
          ]), 2),
          P("button", {
            class: Ht([
              "action",
              {
                selected: n.mode.type == "add"
              }
            ]),
            onClick: a[1] || (a[1] = (c) => r("add")),
            title: "Add"
          }, a[4] || (a[4] = [
            P("span", {
              class: "material-symbols-rounded"
            }, "dashboard_customize", -1)
          ]), 2),
          P("button", {
            class: Ht([
              "action",
              {
                selected: n.mode.type == "move"
              }
            ]),
            onClick: a[2] || (a[2] = (c) => r("move")),
            title: "Move camera"
          }, a[5] || (a[5] = [
            P("span", {
              class: "material-symbols-rounded"
            }, "back_hand", -1)
          ]), 2)
        ])
      ]));
    }
  }, em = qt(tm, [
    [
      "__scopeId",
      "data-v-59459b72"
    ]
  ]), rm = {
    class: "panel"
  }, nm = {
    class: "prefabs"
  }, im = [
    "title",
    "onClick"
  ], sm = [
    "src"
  ], am = {
    __name: "PanelPrefabs",
    props: {
      game: Object,
      mode: Object
    },
    emits: [
      "addEntity"
    ],
    setup(n, { emit: t }) {
      const e = t, r = n, i = Y({}), a = Y(false), c = dt(() => _()), l = dt((w) => (r.mode.type == "add" ? a.value = !w : a.value = false, a.value));
      function _() {
        return Object.keys(i.value).map((w) => {
          const b = i.value[w], f = r.game.assets.get(b.model.name);
          return b.thumbnail = r.game.assets.assetModelLoader.renderThumbnail(f, b), b;
        });
      }
      function h(w, b) {
        e("addEntity", w, b);
      }
      function u() {
        a.value = false;
      }
      return Ot(async () => {
        i.value = r.game.assets.get("prefabs");
      }), (w, b) => qn((W(), q("div", rm, [
        b[0] || (b[0] = P("div", {
          class: "header"
        }, [
          P("div", {
            class: "title"
          }, "Add")
        ], -1)),
        P("div", nm, [
          (W(true), q(re, null, pe(c.value, (f) => (W(), q("button", {
            class: "prefab",
            title: f.className,
            onClick: (S) => h(S, f)
          }, [
            P("img", {
              src: f.thumbnail
            }, null, 8, sm)
          ], 8, im))), 256))
        ]),
        P("button", {
          class: "close",
          onClick: u
        }, "x")
      ], 512)), [
        [
          Kn,
          l.value
        ]
      ]);
    }
  }, om = qt(am, [
    [
      "__scopeId",
      "data-v-b0bcae3d"
    ]
  ]), cm = {
    class: "panel"
  }, lm = {
    class: "header"
  }, _m = {
    class: "actions"
  }, dm = [
    "disabled"
  ], hm = [
    "disabled"
  ], wm = [
    "onClick",
    "onContextmenu",
    "onDragstart",
    "onDragover",
    "onDragend",
    "onDrop"
  ], um = [
    "onDblclick"
  ], pm = [
    "id",
    "value",
    "onChange"
  ], gm = [
    "onClick"
  ], bm = {
    class: "row"
  }, mm = [
    "value",
    "onChange"
  ], fm = [
    "value",
    "onChange"
  ], ym = [
    "value",
    "onChange"
  ], vm = {
    class: "row"
  }, Sm = [
    "value",
    "onChange"
  ], Rm = [
    "value",
    "onChange"
  ], Cm = [
    "value",
    "onChange"
  ], xm = {
    class: "row"
  }, Em = [
    "value",
    "onChange"
  ], Pm = [
    "value",
    "onChange"
  ], jm = [
    "value",
    "onChange"
  ], Am = {
    class: "row"
  }, Im = [
    "onChange"
  ], zm = {
    class: "row"
  }, Tm = [
    "onChange"
  ], Fm = {
    __name: "PanelScene",
    props: {
      canUndo: Boolean,
      canRedo: Boolean,
      entities: Array,
      isPlaying: Boolean
    },
    emits: [
      "addEntity",
      "deleteEntity",
      "editEntity",
      "linkEntity",
      "moveEntity",
      "openContextMenu",
      "pause",
      "play",
      "renameEntity",
      "resetEntities",
      "selectEntity",
      "selectParentEntity",
      "setMode",
      "unlinkEntity",
      "redo",
      "undo"
    ],
    setup(n, { emit: t }) {
      const e = n, r = t, i = Y(true), a = Y();
      function c() {
        return i.value == true;
      }
      function l(I, v) {
        r("selectEntity", I, v);
      }
      function _(I, v) {
        r("openContextMenu", I, v);
      }
      function h(I) {
        I.target.parentNode.removeAttribute("draggable"), I.target.removeAttribute("readonly");
      }
      function u(I) {
        I.target.parentNode.setAttribute("draggable", true), I.target.setAttribute("readonly", true), I.target.blur();
      }
      function w(I, v) {
        v.isSelected != true && l(I, v);
      }
      function b(I, v) {
      }
      function f(I, v) {
        a.value.style.overflowY = "auto";
      }
      function S(I, v) {
        r("moveEntity", I, v);
      }
      function T(I, v) {
        v.isExpanded = !v.isExpanded;
      }
      function j(I, v, R) {
        r("editEntity", I, v, R);
      }
      return (I, v) => (W(), q("div", cm, [
        P("div", lm, [
          P("div", {
            class: "title",
            onClick: v[0] || (v[0] = (R) => i.value = !i.value)
          }, "Scene"),
          P("div", _m, [
            P("button", {
              class: "action button",
              onClick: v[1] || (v[1] = (R) => r("undo")),
              title: "Undo",
              disabled: e.canUndo == false
            }, v[7] || (v[7] = [
              P("span", {
                class: "material-symbols-rounded"
              }, "undo", -1)
            ]), 8, dm),
            P("button", {
              class: "action button",
              onClick: v[2] || (v[2] = (R) => r("redo")),
              title: "Redo",
              disabled: e.canRedo == false
            }, v[8] || (v[8] = [
              P("span", {
                class: "material-symbols-rounded"
              }, "redo", -1)
            ]), 8, hm),
            P("button", {
              class: "action button",
              onClick: v[3] || (v[3] = (R) => r("resetEntities")),
              title: "Restart level"
            }, v[9] || (v[9] = [
              P("span", {
                class: "material-symbols-rounded"
              }, "fast_rewind", -1)
            ])),
            n.isPlaying == true ? (W(), q("button", {
              key: 0,
              onClick: v[4] || (v[4] = (R) => r("pause")),
              class: "action button",
              title: "Pause level"
            }, v[10] || (v[10] = [
              P("span", {
                class: "material-symbols-rounded"
              }, "pause", -1)
            ]))) : (W(), q("button", {
              key: 1,
              class: "action button",
              onClick: v[5] || (v[5] = (R) => r("play")),
              title: "Play level"
            }, v[11] || (v[11] = [
              P("span", {
                class: "material-symbols-rounded"
              }, "play_arrow", -1)
            ])))
          ])
        ]),
        qn(P("div", {
          ref_key: "content",
          ref: a,
          class: "content"
        }, [
          P("ul", null, [
            Ct($i, {
              name: "list"
            }, {
              default: te(() => [
                (W(true), q(re, null, pe(e.entities, (R) => (W(), q("li", {
                  key: R.id
                }, [
                  P("div", {
                    class: Ht([
                      "entity-title",
                      {
                        selected: R.isSelected
                      }
                    ]),
                    draggable: "true",
                    onClick: (x) => l(x, R),
                    onContextmenu: wr((x) => _(x, R), [
                      "prevent"
                    ]),
                    onDragstart: (x) => w(x, R),
                    onDragover: wr((x) => void 0, [
                      "prevent"
                    ]),
                    onDragend: (x) => f(x, R),
                    onDrop: (x) => S(x, R)
                  }, [
                    P("span", {
                      onDblclick: (x) => r("selectParentEntity", x, R),
                      class: Ht([
                        {
                          hidden: R.rigidBodyDesc.userData.parentId == null
                        },
                        "link material-symbols-rounded"
                      ]),
                      title: "Double click to select parent"
                    }, " link ", 42, um),
                    P("input", {
                      type: "text",
                      readonly: "",
                      id: R.id,
                      value: R.name || R.type,
                      onChange: (x) => r("renameEntity", x, R),
                      onKeyup: Ki(u, [
                        "enter"
                      ]),
                      onFocusout: u,
                      onDblclick: h
                    }, null, 40, pm),
                    P("span", {
                      onClick: (x) => T(x, R),
                      class: Ht([
                        "toggle material-symbols-rounded",
                        {
                          isExpanded: R.isExpanded
                        }
                      ])
                    }, " keyboard_arrow_down ", 10, gm)
                  ], 42, wm),
                  Ct(Me, {
                    name: "properties"
                  }, {
                    default: te(() => [
                      R.isExpanded ? (W(), q("div", {
                        key: 0,
                        class: Ht([
                          "entity-properties",
                          {
                            expanded: R.isExpanded
                          }
                        ])
                      }, [
                        P("div", bm, [
                          v[12] || (v[12] = P("span", {
                            class: "material-symbols-rounded"
                          }, "location_on", -1)),
                          P("input", {
                            type: "text",
                            value: R.rigidBodyDesc.translation.x,
                            onChange: (x) => j(x, R, "rigidBodyDesc.translation.x")
                          }, null, 40, mm),
                          P("input", {
                            type: "text",
                            value: R.rigidBodyDesc.translation.y,
                            onChange: (x) => j(x, R, "rigidBodyDesc.translation.y")
                          }, null, 40, fm),
                          P("input", {
                            type: "text",
                            value: R.rigidBodyDesc.translation.z,
                            onChange: (x) => j(x, R, "rigidBodyDesc.translation.z")
                          }, null, 40, ym)
                        ]),
                        P("div", vm, [
                          v[13] || (v[13] = P("span", {
                            class: "material-symbols-rounded"
                          }, "orbit", -1)),
                          P("input", {
                            type: "text",
                            value: R.rigidBodyDesc.rotation.x,
                            onChange: (x) => j(x, R, "rigidBodyDesc.rotation.x")
                          }, null, 40, Sm),
                          P("input", {
                            type: "text",
                            value: R.rigidBodyDesc.rotation.y,
                            onChange: (x) => j(x, R, "rigidBodyDesc.rotation.y")
                          }, null, 40, Rm),
                          P("input", {
                            type: "text",
                            value: R.rigidBodyDesc.rotation.z,
                            onChange: (x) => j(x, R, "rigidBodyDesc.rotation.z")
                          }, null, 40, Cm)
                        ]),
                        P("div", xm, [
                          v[14] || (v[14] = P("span", {
                            class: "material-symbols-rounded"
                          }, "package_2", -1)),
                          P("input", {
                            type: "text",
                            value: R.objectDesc.scale.x,
                            onChange: (x) => j(x, R, "objectDesc.scale.x")
                          }, null, 40, Em),
                          P("input", {
                            type: "text",
                            value: R.objectDesc.scale.y,
                            onChange: (x) => j(x, R, "objectDesc.scale.y")
                          }, null, 40, Pm),
                          P("input", {
                            type: "text",
                            value: R.objectDesc.scale.z,
                            onChange: (x) => j(x, R, "objectDesc.scale.z")
                          }, null, 40, jm)
                        ]),
                        P("div", Am, [
                          v[16] || (v[16] = P("span", {
                            class: "material-symbols-rounded"
                          }, "bolt", -1)),
                          P("select", {
                            onChange: (x) => j(x, R, "collidersDesc[0].events[0].name")
                          }, [
                            v[15] || (v[15] = P("option", null, "None", -1)),
                            (W(true), q(re, null, pe(Object.getOwnPropertyNames(R).filter((x) => typeof R[x] == "function"), (x) => (W(), q("option", null, ee(x), 1))), 256))
                          ], 40, Im)
                        ]),
                        P("div", zm, [
                          v[17] || (v[17] = P("span", {
                            class: "material-symbols-rounded hidden"
                          }, "format_size", -1)),
                          P("input", {
                            type: "text",
                            value: "{x:0,y:0,z:0}",
                            onChange: (x) => j(x, R),
                            placeholder: "{x:0,y:0,z:0}"
                          }, null, 40, Tm)
                        ])
                      ], 2)) : Vt("", true)
                    ]),
                    _: 2
                  }, 1024)
                ]))), 128))
              ]),
              _: 1
            }),
            e.entities.length == 0 ? (W(), q("li", {
              key: 0,
              onClick: v[6] || (v[6] = (R) => {
                r("setMode", {
                  type: "add"
                });
              })
            }, v[18] || (v[18] = [
              P("div", {
                class: "entity-title"
              }, [
                P("span", {
                  class: "material-symbols-rounded"
                }, "add"),
                P("span", null, "Add entity")
              ], -1)
            ]))) : Vt("", true)
          ])
        ], 512), [
          [
            Kn,
            c()
          ]
        ])
      ]));
    }
  }, km = qt(Fm, [
    [
      "__scopeId",
      "data-v-68bde30e"
    ]
  ]), Dm = [
    "onClick",
    "disabled"
  ], Mm = {
    key: 0,
    class: "material-symbols-rounded"
  }, Nn = 150, Lm = {
    __name: "ContextMenu",
    props: {
      event: {
        default: {
          clientX: 0,
          clientY: 0
        },
        required: true,
        type: Object
      },
      actions: {
        default: [],
        required: true,
        type: Array
      }
    },
    setup(n) {
      const t = n, e = Y({
        animationDuration: `${Nn}ms`,
        left: "0px",
        top: "0px"
      }), r = Y(false), i = Y(false), a = Y();
      function c(u, w) {
        w.callback && w.callback(u), _();
      }
      function l(u) {
        r.value == false ? (r.value = true, h(u)) : setTimeout(() => l(u), Nn);
      }
      function _(u) {
        i.value == false && (r.value = false);
      }
      async function h(u) {
        await Vn();
        const w = window.innerWidth, b = window.innerHeight, f = a.value.offsetWidth, S = a.value.offsetHeight;
        let T = u.clientX, j = u.clientY;
        T + f > w && (T = w - f), j + S > b && (j = b - S), e.value.left = T + "px", e.value.top = j + "px";
      }
      return Wn(() => t.event, () => {
        l(t.event);
      }), Ot(function() {
        document.addEventListener("pointerup", _);
      }), Sr(function() {
        document.removeEventListener("pointerup", _);
      }), (u, w) => (W(), Rr(Me, {
        name: "fade",
        onBeforeEnter: w[0] || (w[0] = (b) => i.value = true),
        onAfterEnter: w[1] || (w[1] = (b) => i.value = false)
      }, {
        default: te(() => [
          r.value ? (W(), q("ul", {
            key: 0,
            ref_key: "menu",
            ref: a,
            style: Xi(e.value)
          }, [
            (W(true), q(re, null, pe(t.actions, (b) => (W(), q("li", null, [
              P("button", {
                onClick: wr((f) => c(f, b), [
                  "prevent"
                ]),
                disabled: b.disabled
              }, [
                b.icon ? (W(), q("span", Mm, ee(b.icon), 1)) : Vt("", true),
                Yi(" " + ee(b.text), 1)
              ], 8, Dm)
            ]))), 256))
          ], 4)) : Vt("", true)
        ]),
        _: 1
      }));
    }
  }, Bm = qt(Lm, [
    [
      "__scopeId",
      "data-v-7804f6c1"
    ]
  ]), Hn = {
    bounce({ pair: n, target: t, value: e = 30 }) {
      const r = new Wt().copy(t.rigidBody.rotation()), a = new Cr().setFromQuaternion(r).z;
      t.applyVelocityAtAxisAngle({
        x: 1,
        y: 0,
        z: 1
      }, {
        x: 0,
        y: 0,
        z: 1
      }, a), t.applyImpulseAtAngle({
        x: 0,
        y: -e * t.object.scale.y,
        z: 0
      }, a), n.applyVelocityAtAxisAngle({
        x: 1,
        y: 0,
        z: 1
      }, {
        x: 0,
        y: 0,
        z: 1
      }, a), n.applyImpulseAtAngle({
        x: 0,
        y: e * n.rigidBody.mass(),
        z: 0
      }, a);
    },
    teleport({ pair: n, value: t = {
      x: 0,
      y: 0,
      z: 0
    } }) {
      n.setPosition(t);
    },
    toggleVisibility(n) {
      n.target.object.visible = !n.target.object.visible;
    }
  }, Nm = {
    class: "panels"
  }, Hm = {
    __name: "PageLevelEditor",
    props: {
      game: Object
    },
    setup(n) {
      const t = n, e = Y({
        type: "select"
      }), r = Y([]), i = Y({}), a = [], c = hr(new Yb()), l = hr(t.game.interval), _ = dt(() => c.canUndo()), h = dt(() => c.canRedo()), u = dt(() => l.threadRunning), w = Y({}), b = Y([]), f = new as(Ai.create(), t.game.graphics.canvas);
      f.zoomToCursor = true, f.zoomSpeed = 3, f.minDistance = 1, f.maxDistance = 100, f.mouseButtons = {
        LEFT: 2,
        MIDDLE: 2,
        RIGHT: 0
      }, Gt(false);
      function S(E) {
        e.value = E;
      }
      function T(E, D, A) {
        const m = A.replace(/\[/g, ".").replace(/]/g, "").split("."), y = m[m.length - 1], C = m.reduce(($, N) => typeof $[N] == "object" ? $[N] : $, D), z = C[y], V = E.target.value;
        c.add(function() {
          C[y] = V, D.reset();
        }, function() {
          C[y] = z, D.reset();
        }).execute();
      }
      function j(E, D) {
        const A = {
          x: Math.round(t.game.graphics.camera.position.x),
          y: Math.round(t.game.graphics.camera.position.y),
          z: 0
        }, m = Bn.create({
          ...D,
          position: A
        }), y = a[a.length - 1], C = y ? r.value.indexOf(y) + 1 : 0;
        m.addEventListener("added", function(z) {
          t.game.graphics.scene.add(m.object);
        }), Object.assign(m, Hn), c.add(function() {
          t.game.physics.add(m), r.value.splice(C, 0, m), x(E, m), mt();
        }, function() {
          t.game.physics.remove(m), r.value.splice(C, 1), Q(E, m), mt();
        }).execute();
      }
      function I(E, D) {
        const A = a.map((m) => ({
          children: t.game.physics.getChildren(m),
          index: r.value.indexOf(m),
          entity: m
        })).sort((m, y) => m.index - y.index);
        A.length > 0 && c.add(function() {
          for (let m = A.length - 1; m >= 0; m--) {
            const y = A[m];
            t.game.physics.remove(y.entity), r.value.splice(y.index, 1), Q(E, y.entity, m), mt();
          }
        }, function() {
          for (let m = 0; m < A.length; m++) {
            const y = A[m];
            y.children.forEach((C) => C.setParentId(y.entity.id)), t.game.physics.add(y.entity), r.value.splice(y.index, 0, y.entity), mt();
          }
        }).execute();
      }
      function v(E, D) {
        if (D.isSelected) return;
        const A = a.map((m) => ({
          index: r.value.indexOf(m),
          entity: m
        })).sort((m, y) => m.index - y.index);
        c.add(function() {
          for (let y = A.length - 1; y >= 0; y--) r.value.splice(A[y].index, 1);
          const m = r.value.indexOf(D) + 1;
          for (let y = 0; y < A.length; y++) r.value.splice(m + y, 0, A[y].entity);
        }, function() {
          const m = r.value.indexOf(D) + 1;
          for (let y = A.length - 1; y >= 0; y--) r.value.splice(m + y, 1);
          for (let y = 0; y < A.length; y++) r.value.splice(A[y].index, 0, A[y].entity);
        }).execute();
      }
      function R(E, D) {
        const A = D.name || D.type, m = E.target.value;
        c.add(function() {
          D.name = m;
        }, function() {
          D.name = A;
        }).execute();
      }
      function x(E, D) {
        let A = r.value.indexOf(i.value), m = r.value.indexOf(D), y = m, C = m;
        if (E.shiftKey == true ? (C = Math.max(m, A), y = Math.max(0, Math.min(Math.min(m, A), C))) : i.value = D, E.ctrlKey == true) {
          if (D.isSelected) {
            Q(E, D);
            return;
          }
        } else kt(E);
        for (let z = y; z <= C; z++) r.value[z].isSelected = true, a.push(r.value[z]);
      }
      function bt(E, D) {
        const A = D.getParentId(), m = t.game.physics.getEntityById(A);
        m && x(E, m);
      }
      function ut(E) {
        let D = r.value[0], A = r.value[r.value.length - 1];
        i.value = D, x({
          shiftKey: true
        }, A);
      }
      function Q(E, D, A) {
        A == null && (A = a.indexOf(D)), D.isSelected = false, a.splice(A, 1);
      }
      function kt(E, D) {
        for (let A = a.length - 1; A >= 0; A--) Q(E, a[A], A);
      }
      function St(E) {
        r.value.forEach((D) => {
          D.reset();
        }), t.game.graphics.render();
      }
      function Et(E, D) {
        const A = a.map((m) => ({
          index: r.value.indexOf(m),
          parentId: m.getParentId(),
          entity: m
        })).sort((m, y) => m.index - y.index);
        A.length > 0 && c.add(function() {
          for (let m = A.length - 1; m >= 0; m--) {
            const y = A[m];
            y.entity.id != D.id && (t.game.physics.removeParentJoint(y.entity), y.entity.setParentId(D.id), t.game.physics.createParentJoint(y.entity), mt());
          }
        }, function() {
          for (let m = 0; m < A.length; m++) {
            const y = A[m];
            y.entity.id != D.id && (t.game.physics.removeParentJoint(y.entity), y.entity.setParentId(y.parentId), t.game.physics.createParentJoint(y.entity), mt());
          }
        }).execute();
      }
      function Dt(E, D) {
        const A = a.map((m) => ({
          entity: m,
          parentId: m.getParentId()
        }));
        A.length > 0 && c.add(function() {
          for (let m = A.length - 1; m >= 0; m--) {
            const y = A[m];
            t.game.physics.removeParentJoint(y.entity), y.entity.setParentId(null), mt();
          }
        }, function() {
          for (let m = 0; m < A.length; m++) {
            const y = A[m];
            t.game.physics.removeParentJoint(y.entity), y.entity.setParentId(y.parentId), t.game.physics.createParentJoint(y.entity), mt();
          }
        }).execute();
      }
      function Pt(E) {
        E.repeat || (E.code == "KeyA" && (E.ctrlKey || E.metaKey) ? (E.preventDefault(), ut()) : E.code == "KeyD" && (E.ctrlKey || E.metaKey) ? (E.preventDefault(), kt(E)) : E.code == "KeyX" && (E.ctrlKey || E.metaKey) ? I(E) : E.code == "KeyZ" && (E.ctrlKey || E.metaKey) && (E.shiftKey == true ? Ce() : Mt()));
      }
      function Mt() {
        c.undo();
      }
      function Ce() {
        c.redo();
      }
      function se(E) {
        t.game.physics.clear();
        const D = t.game.assets.get(E), A = [];
        return D && D.children.forEach(function(m) {
          const y = Bn.create({
            ccd: true,
            friction: D.friction || 0,
            softCcdPrediction: 0.5,
            ...m
          });
          y.addEventListener("added", function(C) {
            t.game.graphics.scene.add(y.object);
          }), Object.assign(y, Hn), y.type == "player" && (t.game.player = y, t.game.graphics.setCamera(y.camera)), t.game.physics.add(y), A.push(y);
        }), A;
      }
      function ae(E, D) {
        if (D.isSelected) {
          let A = [], m = {
            text: "Link",
            icon: "link",
            disabled: a.length <= 1,
            callback: () => Et(E, D)
          }, y = {
            text: "Unlink",
            icon: "link_off",
            disabled: Kt() == false,
            callback: () => Dt()
          }, C = {
            text: "Delete",
            icon: "delete",
            callback: () => I(E)
          };
          A.push(m, y, C), w.value = E, b.value = A;
        } else x(E, D), ae(E, D);
      }
      function Kt() {
        for (let E = a.length - 1; E >= 0; E--) if (a[E].getParentId()) return true;
        return false;
      }
      function oe() {
        l.stop(), t.game.graphics.setCamera(f.object), t.game.graphics.render(), Gt(true);
      }
      function Xe() {
        l.start(), t.game.graphics.setCamera(t.game.player.camera), Gt(false);
      }
      function mt() {
        l.threadRunning == false && (t.game.physics.debugger.update(), t.game.graphics.render());
      }
      function ce() {
      }
      function $t() {
        t.game.interval.threadRunning == false && t.game.graphics.render();
      }
      function Gt(E = true) {
        f.enablePan = E, f.enableRotate = E, f.enableZoom = E;
      }
      return Ot(async function() {
        t.game.physics.debugger.enable(), r.value = se("boxel-3d-sandbox"), document.addEventListener("keydown", Pt), f.addEventListener("start", ce), f.addEventListener("change", $t), f.object.rotation.set(0, 0, 0), f.target.copy(t.game.player.getPosition()), t.game.player.camera.getWorldPosition(f.object.position);
      }), Sr(function() {
        document.removeEventListener("keydown", Pt), f.removeEventListener("start", ce), f.removeEventListener("change", $t);
      }), (E, D) => (W(), q("div", Nm, [
        Ct(em, {
          game: n.game,
          mode: e.value,
          onSetMode: S
        }, null, 8, [
          "game",
          "mode"
        ]),
        Ct(om, {
          game: n.game,
          mode: e.value,
          onAddEntity: j
        }, null, 8, [
          "game",
          "mode"
        ]),
        Ct(km, {
          entities: r.value,
          canUndo: _.value,
          canRedo: h.value,
          isPlaying: u.value,
          onAddEntity: j,
          onDeleteEntity: I,
          onEditEntity: T,
          onLinkEntity: Et,
          onMoveEntity: v,
          onPause: oe,
          onPlay: Xe,
          onRenameEntity: R,
          onResetEntities: St,
          onSelectEntity: x,
          onSelectParentEntity: bt,
          onSetMode: S,
          onUnlinkEntity: Dt,
          onOpenContextMenu: ae,
          onRedo: Ce,
          onUndo: Mt
        }, null, 8, [
          "entities",
          "canUndo",
          "canRedo",
          "isPlaying"
        ]),
        Ct(Bm, {
          event: w.value,
          actions: b.value
        }, null, 8, [
          "event",
          "actions"
        ])
      ]));
    }
  }, Om = qt(Hm, [
    [
      "__scopeId",
      "data-v-1d86fb92"
    ]
  ]), Gm = [
    {
      name: "home",
      path: "/",
      component: Ib
    },
    {
      name: "play",
      path: "/play",
      component: zb
    },
    {
      name: "level-editor",
      path: "/level-editor",
      component: Om
    }
  ], Wm = la({
    history: Bs(),
    routes: Gm
  }), Ii = Qi(Ab);
  Ii.use(Wm);
  Ii.mount("#app");
})();
