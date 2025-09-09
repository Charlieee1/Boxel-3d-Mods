import { aX as Tn, aY as Oi, u as gt, s as wr, a$ as Zt, p as kn, g as dt, aZ as Hi, b1 as Qe, f as Q, q as Gi, l as Wi, al as Dn, aF as Fn, aH as Mn, b2 as Lr, V as ht, aE as Wt, _ as Kt, x as Ht, y as Sr, b as Cr, o as W, w as te, c as q, d as Vt, a as P, t as ee, F as re, i as pe, aS as Ln, aT as Bn, T as Me, b3 as Nn, h as Ct, m as Ot, b4 as On, aN as Hn, ac as Gn, O as Br, af as Wn, b5 as Vi, ah as Ui, aL as Vn, b6 as Un, aM as xr, a2 as Jn, b7 as Kn, b8 as qn, j as Ji, z as Ki, aP as ur, aR as $n, b9 as Xn, n as Yn, e as Qn, A as Zn } from "./SkeletonUtils-CqlbfaSM.js";
import { I as ts, A as es, G as rs, a as is, L as qi } from "./AssetLoader-C6RohocB.js";
import { G as ns, E as ss, T as as, O as os } from "./OrbitControls-B1FB_vGt.js";
(async () => {
  const Yt = typeof document < "u";
  function $i(i) {
    return typeof i == "object" || "displayName" in i || "props" in i || "__vccOpts" in i;
  }
  function cs(i) {
    return i.__esModule || i[Symbol.toStringTag] === "Module" || i.default && $i(i.default);
  }
  const G = Object.assign;
  function Ze(i, t) {
    const e = {};
    for (const r in t) {
      const n = t[r];
      e[r] = vt(n) ? n.map(i) : i(n);
    }
    return e;
  }
  const he = () => {
  }, vt = Array.isArray, Xi = /#/g, ls = /&/g, _s = /\//g, ds = /=/g, hs = /\?/g, Yi = /\+/g, ws = /%5B/g, us = /%5D/g, Qi = /%5E/g, ps = /%60/g, Zi = /%7B/g, gs = /%7C/g, tn = /%7D/g, bs = /%20/g;
  function Er(i) {
    return encodeURI("" + i).replace(gs, "|").replace(ws, "[").replace(us, "]");
  }
  function ms(i) {
    return Er(i).replace(Zi, "{").replace(tn, "}").replace(Qi, "^");
  }
  function pr(i) {
    return Er(i).replace(Yi, "%2B").replace(bs, "+").replace(Xi, "%23").replace(ls, "%26").replace(ps, "`").replace(Zi, "{").replace(tn, "}").replace(Qi, "^");
  }
  function fs(i) {
    return pr(i).replace(ds, "%3D");
  }
  function ys(i) {
    return Er(i).replace(Xi, "%23").replace(hs, "%3F");
  }
  function vs(i) {
    return i == null ? "" : ys(i).replace(_s, "%2F");
  }
  function ge(i) {
    try {
      return decodeURIComponent("" + i);
    } catch {
    }
    return "" + i;
  }
  const Rs = /\/$/, Ss = (i) => i.replace(Rs, "");
  function tr(i, t, e = "/") {
    let r, n = {}, a = "", c = "";
    const l = t.indexOf("#");
    let _ = t.indexOf("?");
    return l < _ && l >= 0 && (_ = -1), _ > -1 && (r = t.slice(0, _), a = t.slice(_ + 1, l > -1 ? l : t.length), n = i(a)), l > -1 && (r = r || t.slice(0, l), c = t.slice(l, t.length)), r = Ps(r ?? t, e), {
      fullPath: r + (a && "?") + a + c,
      path: r,
      query: n,
      hash: ge(c)
    };
  }
  function Cs(i, t) {
    const e = t.query ? i(t.query) : "";
    return t.path + (e && "?") + e + (t.hash || "");
  }
  function Nr(i, t) {
    return !t || !i.toLowerCase().startsWith(t.toLowerCase()) ? i : i.slice(t.length) || "/";
  }
  function xs(i, t, e) {
    const r = t.matched.length - 1, n = e.matched.length - 1;
    return r > -1 && r === n && ie(t.matched[r], e.matched[n]) && en(t.params, e.params) && i(t.query) === i(e.query) && t.hash === e.hash;
  }
  function ie(i, t) {
    return (i.aliasOf || i) === (t.aliasOf || t);
  }
  function en(i, t) {
    if (Object.keys(i).length !== Object.keys(t).length) return false;
    for (const e in i) if (!Es(i[e], t[e])) return false;
    return true;
  }
  function Es(i, t) {
    return vt(i) ? Or(i, t) : vt(t) ? Or(t, i) : i === t;
  }
  function Or(i, t) {
    return vt(t) ? i.length === t.length && i.every((e, r) => e === t[r]) : i.length === 1 && i[0] === t;
  }
  function Ps(i, t) {
    if (i.startsWith("/")) return i;
    if (!i) return t;
    const e = t.split("/"), r = i.split("/"), n = r[r.length - 1];
    (n === ".." || n === ".") && r.push("");
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
  (function(i) {
    i.pop = "pop", i.push = "push";
  })(be || (be = {}));
  var we;
  (function(i) {
    i.back = "back", i.forward = "forward", i.unknown = "";
  })(we || (we = {}));
  function js(i) {
    if (!i) if (Yt) {
      const t = document.querySelector("base");
      i = t && t.getAttribute("href") || "/", i = i.replace(/^\w+:\/\/[^\/]+/, "");
    } else i = "/";
    return i[0] !== "/" && i[0] !== "#" && (i = "/" + i), Ss(i);
  }
  const As = /^[^#]+#/;
  function Is(i, t) {
    return i.replace(As, "#") + t;
  }
  function zs(i, t) {
    const e = document.documentElement.getBoundingClientRect(), r = i.getBoundingClientRect();
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
  function Ts(i) {
    let t;
    if ("el" in i) {
      const e = i.el, r = typeof e == "string" && e.startsWith("#"), n = typeof e == "string" ? r ? document.getElementById(e.slice(1)) : document.querySelector(e) : e;
      if (!n) return;
      t = zs(n, i);
    } else t = i;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
  }
  function Hr(i, t) {
    return (history.state ? history.state.position - t : -1) + i;
  }
  const gr = /* @__PURE__ */ new Map();
  function ks(i, t) {
    gr.set(i, t);
  }
  function Ds(i) {
    const t = gr.get(i);
    return gr.delete(i), t;
  }
  let Fs = () => location.protocol + "//" + location.host;
  function rn(i, t) {
    const { pathname: e, search: r, hash: n } = t, a = i.indexOf("#");
    if (a > -1) {
      let l = n.includes(i.slice(a)) ? i.slice(a).length : 1, _ = n.slice(l);
      return _[0] !== "/" && (_ = "/" + _), Nr(_, "");
    }
    return Nr(e, i) + r + n;
  }
  function Ms(i, t, e, r) {
    let n = [], a = [], c = null;
    const l = ({ state: b }) => {
      const f = rn(i, location), R = e.value, T = t.value;
      let j = 0;
      if (b) {
        if (e.value = f, t.value = b, c && c === R) {
          c = null;
          return;
        }
        j = T ? b.position - T.position : 0;
      } else r(f);
      n.forEach((I) => {
        I(e.value, R, {
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
      n.push(b);
      const f = () => {
        const R = n.indexOf(b);
        R > -1 && n.splice(R, 1);
      };
      return a.push(f), f;
    }
    function u() {
      const { history: b } = window;
      b.state && b.replaceState(G({}, b.state, {
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
  function Gr(i, t, e, r = false, n = false) {
    return {
      back: i,
      current: t,
      forward: e,
      replaced: r,
      position: window.history.length,
      scroll: n ? Le() : null
    };
  }
  function Ls(i) {
    const { history: t, location: e } = window, r = {
      value: rn(i, e)
    }, n = {
      value: t.state
    };
    n.value || a(r.value, {
      back: null,
      current: r.value,
      forward: null,
      position: t.length - 1,
      replaced: true,
      scroll: null
    }, true);
    function a(_, h, u) {
      const w = i.indexOf("#"), b = w > -1 ? (e.host && document.querySelector("base") ? i : i.slice(w)) + _ : Fs() + i + _;
      try {
        t[u ? "replaceState" : "pushState"](h, "", b), n.value = h;
      } catch (f) {
        console.error(f), e[u ? "replace" : "assign"](b);
      }
    }
    function c(_, h) {
      const u = G({}, t.state, Gr(n.value.back, _, n.value.forward, true), h, {
        position: n.value.position
      });
      a(_, u, true), r.value = _;
    }
    function l(_, h) {
      const u = G({}, n.value, t.state, {
        forward: _,
        scroll: Le()
      });
      a(u.current, u, true);
      const w = G({}, Gr(r.value, _, null), {
        position: u.position + 1
      }, h);
      a(_, w, false), r.value = _;
    }
    return {
      location: r,
      state: n,
      push: l,
      replace: c
    };
  }
  function Bs(i) {
    i = js(i);
    const t = Ls(i), e = Ms(i, t.state, t.location, t.replace);
    function r(a, c = true) {
      c || e.pauseListeners(), history.go(a);
    }
    const n = G({
      location: "",
      base: i,
      go: r,
      createHref: Is.bind(null, i)
    }, t, e);
    return Object.defineProperty(n, "location", {
      enumerable: true,
      get: () => t.location.value
    }), Object.defineProperty(n, "state", {
      enumerable: true,
      get: () => t.state.value
    }), n;
  }
  function Ns(i) {
    return i = location.host ? i || location.pathname + location.search : "", i.includes("#") || (i += "#"), Bs(i);
  }
  function Os(i) {
    return typeof i == "string" || i && typeof i == "object";
  }
  function nn(i) {
    return typeof i == "string" || typeof i == "symbol";
  }
  const sn = Symbol("");
  var Wr;
  (function(i) {
    i[i.aborted = 4] = "aborted", i[i.cancelled = 8] = "cancelled", i[i.duplicated = 16] = "duplicated";
  })(Wr || (Wr = {}));
  function ne(i, t) {
    return G(new Error(), {
      type: i,
      [sn]: true
    }, t);
  }
  function jt(i, t) {
    return i instanceof Error && sn in i && (t == null || !!(i.type & t));
  }
  const Vr = "[^/]+?", Hs = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  }, Gs = /[.+*?^${}()[\]/\\]/g;
  function Ws(i, t) {
    const e = G({}, Hs, t), r = [];
    let n = e.start ? "^" : "";
    const a = [];
    for (const h of i) {
      const u = h.length ? [] : [
        90
      ];
      e.strict && !h.length && (n += "/");
      for (let w = 0; w < h.length; w++) {
        const b = h[w];
        let f = 40 + (e.sensitive ? 0.25 : 0);
        if (b.type === 0) w || (n += "/"), n += b.value.replace(Gs, "\\$&"), f += 40;
        else if (b.type === 1) {
          const { value: R, repeatable: T, optional: j, regexp: I } = b;
          a.push({
            name: R,
            repeatable: T,
            optional: j
          });
          const v = I || Vr;
          if (v !== Vr) {
            f += 10;
            try {
              new RegExp(`(${v})`);
            } catch (x) {
              throw new Error(`Invalid custom RegExp for param "${R}" (${v}): ` + x.message);
            }
          }
          let S = T ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
          w || (S = j && h.length < 2 ? `(?:/${S})` : "/" + S), j && (S += "?"), n += S, f += 20, j && (f += -8), T && (f += -20), v === ".*" && (f += -50);
        }
        u.push(f);
      }
      r.push(u);
    }
    if (e.strict && e.end) {
      const h = r.length - 1;
      r[h][r[h].length - 1] += 0.7000000000000001;
    }
    e.strict || (n += "/?"), e.end ? n += "$" : e.strict && !n.endsWith("/") && (n += "(?:/|$)");
    const c = new RegExp(n, e.sensitive ? "" : "i");
    function l(h) {
      const u = h.match(c), w = {};
      if (!u) return null;
      for (let b = 1; b < u.length; b++) {
        const f = u[b] || "", R = a[b - 1];
        w[R.name] = f && R.repeatable ? f.split("/") : f;
      }
      return w;
    }
    function _(h) {
      let u = "", w = false;
      for (const b of i) {
        (!w || !u.endsWith("/")) && (u += "/"), w = false;
        for (const f of b) if (f.type === 0) u += f.value;
        else if (f.type === 1) {
          const { value: R, repeatable: T, optional: j } = f, I = R in h ? h[R] : "";
          if (vt(I) && !T) throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);
          const v = vt(I) ? I.join("/") : I;
          if (!v) if (j) b.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : w = true);
          else throw new Error(`Missing required param "${R}"`);
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
  function Vs(i, t) {
    let e = 0;
    for (; e < i.length && e < t.length; ) {
      const r = t[e] - i[e];
      if (r) return r;
      e++;
    }
    return i.length < t.length ? i.length === 1 && i[0] === 80 ? -1 : 1 : i.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
  }
  function an(i, t) {
    let e = 0;
    const r = i.score, n = t.score;
    for (; e < r.length && e < n.length; ) {
      const a = Vs(r[e], n[e]);
      if (a) return a;
      e++;
    }
    if (Math.abs(n.length - r.length) === 1) {
      if (Ur(r)) return 1;
      if (Ur(n)) return -1;
    }
    return n.length - r.length;
  }
  function Ur(i) {
    const t = i[i.length - 1];
    return i.length > 0 && t[t.length - 1] < 0;
  }
  const Us = {
    type: 0,
    value: ""
  }, Js = /[a-zA-Z0-9_]/;
  function Ks(i) {
    if (!i) return [
      []
    ];
    if (i === "/") return [
      [
        Us
      ]
    ];
    if (!i.startsWith("/")) throw new Error(`Invalid path "${i}"`);
    function t(f) {
      throw new Error(`ERR (${e})/"${h}": ${f}`);
    }
    let e = 0, r = e;
    const n = [];
    let a;
    function c() {
      a && n.push(a), a = [];
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
    for (; l < i.length; ) {
      if (_ = i[l++], _ === "\\" && e !== 2) {
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
          _ === "(" ? e = 2 : Js.test(_) ? b() : (w(), e = 0, _ !== "*" && _ !== "?" && _ !== "+" && l--);
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
    return e === 2 && t(`Unfinished custom RegExp for param "${h}"`), w(), c(), n;
  }
  function qs(i, t, e) {
    const r = Ws(Ks(i.path), e), n = G(r, {
      record: i,
      parent: t,
      children: [],
      alias: []
    });
    return t && !n.record.aliasOf == !t.record.aliasOf && t.children.push(n), n;
  }
  function $s(i, t) {
    const e = [], r = /* @__PURE__ */ new Map();
    t = $r({
      strict: false,
      end: true,
      sensitive: false
    }, t);
    function n(w) {
      return r.get(w);
    }
    function a(w, b, f) {
      const R = !f, T = Kr(w);
      T.aliasOf = f && f.record;
      const j = $r(t, w), I = [
        T
      ];
      if ("alias" in w) {
        const x = typeof w.alias == "string" ? [
          w.alias
        ] : w.alias;
        for (const bt of x) I.push(Kr(G({}, T, {
          components: f ? f.record.components : T.components,
          path: bt,
          aliasOf: f ? f.record : T
        })));
      }
      let v, S;
      for (const x of I) {
        const { path: bt } = x;
        if (b && bt[0] !== "/") {
          const ut = b.record.path, Z = ut[ut.length - 1] === "/" ? "" : "/";
          x.path = b.record.path + (bt && Z + bt);
        }
        if (v = qs(x, b, j), f ? f.alias.push(v) : (S = S || v, S !== v && S.alias.push(v), R && w.name && !qr(v) && c(w.name)), on(v) && _(v), T.children) {
          const ut = T.children;
          for (let Z = 0; Z < ut.length; Z++) a(ut[Z], v, f && f.children[Z]);
        }
        f = f || v;
      }
      return S ? () => {
        c(S);
      } : he;
    }
    function c(w) {
      if (nn(w)) {
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
      const b = Qs(w, e);
      e.splice(b, 0, w), w.record.name && !qr(w) && r.set(w.record.name, w);
    }
    function h(w, b) {
      let f, R = {}, T, j;
      if ("name" in w && w.name) {
        if (f = r.get(w.name), !f) throw ne(1, {
          location: w
        });
        j = f.record.name, R = G(Jr(b.params, f.keys.filter((S) => !S.optional).concat(f.parent ? f.parent.keys.filter((S) => S.optional) : []).map((S) => S.name)), w.params && Jr(w.params, f.keys.map((S) => S.name))), T = f.stringify(R);
      } else if (w.path != null) T = w.path, f = e.find((S) => S.re.test(T)), f && (R = f.parse(T), j = f.record.name);
      else {
        if (f = b.name ? r.get(b.name) : e.find((S) => S.re.test(b.path)), !f) throw ne(1, {
          location: w,
          currentLocation: b
        });
        j = f.record.name, R = G({}, b.params, w.params), T = f.stringify(R);
      }
      const I = [];
      let v = f;
      for (; v; ) I.unshift(v.record), v = v.parent;
      return {
        name: j,
        path: T,
        params: R,
        matched: I,
        meta: Ys(I)
      };
    }
    i.forEach((w) => a(w));
    function u() {
      e.length = 0, r.clear();
    }
    return {
      addRoute: a,
      resolve: h,
      removeRoute: c,
      clearRoutes: u,
      getRoutes: l,
      getRecordMatcher: n
    };
  }
  function Jr(i, t) {
    const e = {};
    for (const r of t) r in i && (e[r] = i[r]);
    return e;
  }
  function Kr(i) {
    const t = {
      path: i.path,
      redirect: i.redirect,
      name: i.name,
      meta: i.meta || {},
      aliasOf: i.aliasOf,
      beforeEnter: i.beforeEnter,
      props: Xs(i),
      children: i.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      components: "components" in i ? i.components || null : i.component && {
        default: i.component
      }
    };
    return Object.defineProperty(t, "mods", {
      value: {}
    }), t;
  }
  function Xs(i) {
    const t = {}, e = i.props || false;
    if ("component" in i) t.default = e;
    else for (const r in i.components) t[r] = typeof e == "object" ? e[r] : e;
    return t;
  }
  function qr(i) {
    for (; i; ) {
      if (i.record.aliasOf) return true;
      i = i.parent;
    }
    return false;
  }
  function Ys(i) {
    return i.reduce((t, e) => G(t, e.meta), {});
  }
  function $r(i, t) {
    const e = {};
    for (const r in i) e[r] = r in t ? t[r] : i[r];
    return e;
  }
  function Qs(i, t) {
    let e = 0, r = t.length;
    for (; e !== r; ) {
      const a = e + r >> 1;
      an(i, t[a]) < 0 ? r = a : e = a + 1;
    }
    const n = Zs(i);
    return n && (r = t.lastIndexOf(n, r - 1)), r;
  }
  function Zs(i) {
    let t = i;
    for (; t = t.parent; ) if (on(t) && an(i, t) === 0) return t;
  }
  function on({ record: i }) {
    return !!(i.name || i.components && Object.keys(i.components).length || i.redirect);
  }
  function ta(i) {
    const t = {};
    if (i === "" || i === "?") return t;
    const r = (i[0] === "?" ? i.slice(1) : i).split("&");
    for (let n = 0; n < r.length; ++n) {
      const a = r[n].replace(Yi, " "), c = a.indexOf("="), l = ge(c < 0 ? a : a.slice(0, c)), _ = c < 0 ? null : ge(a.slice(c + 1));
      if (l in t) {
        let h = t[l];
        vt(h) || (h = t[l] = [
          h
        ]), h.push(_);
      } else t[l] = _;
    }
    return t;
  }
  function Xr(i) {
    let t = "";
    for (let e in i) {
      const r = i[e];
      if (e = fs(e), r == null) {
        r !== void 0 && (t += (t.length ? "&" : "") + e);
        continue;
      }
      (vt(r) ? r.map((a) => a && pr(a)) : [
        r && pr(r)
      ]).forEach((a) => {
        a !== void 0 && (t += (t.length ? "&" : "") + e, a != null && (t += "=" + a));
      });
    }
    return t;
  }
  function ea(i) {
    const t = {};
    for (const e in i) {
      const r = i[e];
      r !== void 0 && (t[e] = vt(r) ? r.map((n) => n == null ? null : "" + n) : r == null ? r : "" + r);
    }
    return t;
  }
  const ra = Symbol(""), Yr = Symbol(""), Pr = Symbol(""), jr = Symbol(""), br = Symbol("");
  function _e() {
    let i = [];
    function t(r) {
      return i.push(r), () => {
        const n = i.indexOf(r);
        n > -1 && i.splice(n, 1);
      };
    }
    function e() {
      i = [];
    }
    return {
      add: t,
      list: () => i.slice(),
      reset: e
    };
  }
  function Nt(i, t, e, r, n, a = (c) => c()) {
    const c = r && (r.enterCallbacks[n] = r.enterCallbacks[n] || []);
    return () => new Promise((l, _) => {
      const h = (b) => {
        b === false ? _(ne(4, {
          from: e,
          to: t
        })) : b instanceof Error ? _(b) : Os(b) ? _(ne(2, {
          from: t,
          to: b
        })) : (c && r.enterCallbacks[n] === c && typeof b == "function" && c.push(b), l());
      }, u = a(() => i.call(r && r.instances[n], t, e, h));
      let w = Promise.resolve(u);
      i.length < 3 && (w = w.then(h)), w.catch((b) => _(b));
    });
  }
  function er(i, t, e, r, n = (a) => a()) {
    const a = [];
    for (const c of i) for (const l in c.components) {
      let _ = c.components[l];
      if (!(t !== "beforeRouteEnter" && !c.instances[l])) if ($i(_)) {
        const u = (_.__vccOpts || _)[t];
        u && a.push(Nt(u, e, r, c, l, n));
      } else {
        let h = _();
        a.push(() => h.then((u) => {
          if (!u) throw new Error(`Couldn't resolve component "${l}" at "${c.path}"`);
          const w = cs(u) ? u.default : u;
          c.mods[l] = u, c.components[l] = w;
          const f = (w.__vccOpts || w)[t];
          return f && Nt(f, e, r, c, l, n)();
        }));
      }
    }
    return a;
  }
  function Qr(i) {
    const t = Zt(Pr), e = Zt(jr), r = dt(() => {
      const _ = gt(i.to);
      return t.resolve(_);
    }), n = dt(() => {
      const { matched: _ } = r.value, { length: h } = _, u = _[h - 1], w = e.matched;
      if (!u || !w.length) return -1;
      const b = w.findIndex(ie.bind(null, u));
      if (b > -1) return b;
      const f = Zr(_[h - 2]);
      return h > 1 && Zr(u) === f && w[w.length - 1].path !== f ? w.findIndex(ie.bind(null, _[h - 2])) : b;
    }), a = dt(() => n.value > -1 && oa(e.params, r.value.params)), c = dt(() => n.value > -1 && n.value === e.matched.length - 1 && en(e.params, r.value.params));
    function l(_ = {}) {
      if (aa(_)) {
        const h = t[gt(i.replace) ? "replace" : "push"](gt(i.to)).catch(he);
        return i.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => h), h;
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
  function ia(i) {
    return i.length === 1 ? i[0] : i;
  }
  const na = Oi({
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
    setup(i, { slots: t }) {
      const e = kn(Qr(i)), { options: r } = Zt(Pr), n = dt(() => ({
        [ti(i.activeClass, r.linkActiveClass, "router-link-active")]: e.isActive,
        [ti(i.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: e.isExactActive
      }));
      return () => {
        const a = t.default && ia(t.default(e));
        return i.custom ? a : Hi("a", {
          "aria-current": e.isExactActive ? i.ariaCurrentValue : null,
          href: e.href,
          onClick: e.navigate,
          class: n.value
        }, a);
      };
    }
  }), sa = na;
  function aa(i) {
    if (!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey) && !i.defaultPrevented && !(i.button !== void 0 && i.button !== 0)) {
      if (i.currentTarget && i.currentTarget.getAttribute) {
        const t = i.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(t)) return;
      }
      return i.preventDefault && i.preventDefault(), true;
    }
  }
  function oa(i, t) {
    for (const e in t) {
      const r = t[e], n = i[e];
      if (typeof r == "string") {
        if (r !== n) return false;
      } else if (!vt(n) || n.length !== r.length || r.some((a, c) => a !== n[c])) return false;
    }
    return true;
  }
  function Zr(i) {
    return i ? i.aliasOf ? i.aliasOf.path : i.path : "";
  }
  const ti = (i, t, e) => i ?? t ?? e, ca = Oi({
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
    setup(i, { attrs: t, slots: e }) {
      const r = Zt(br), n = dt(() => i.route || r.value), a = Zt(Yr, 0), c = dt(() => {
        let h = gt(a);
        const { matched: u } = n.value;
        let w;
        for (; (w = u[h]) && !w.components; ) h++;
        return h;
      }), l = dt(() => n.value.matched[c.value]);
      Qe(Yr, dt(() => c.value + 1)), Qe(ra, l), Qe(br, n);
      const _ = Q();
      return Gi(() => [
        _.value,
        l.value,
        i.name
      ], ([h, u, w], [b, f, R]) => {
        u && (u.instances[w] = h, f && f !== u && h && h === b && (u.leaveGuards.size || (u.leaveGuards = f.leaveGuards), u.updateGuards.size || (u.updateGuards = f.updateGuards))), h && u && (!f || !ie(u, f) || !b) && (u.enterCallbacks[w] || []).forEach((T) => T(h));
      }, {
        flush: "post"
      }), () => {
        const h = n.value, u = i.name, w = l.value, b = w && w.components[u];
        if (!b) return ei(e.default, {
          Component: b,
          route: h
        });
        const f = w.props[u], R = f ? f === true ? h.params : typeof f == "function" ? f(h) : f : null, j = Hi(b, G({}, R, t, {
          onVnodeUnmounted: (I) => {
            I.component.isUnmounted && (w.instances[u] = null);
          },
          ref: _
        }));
        return ei(e.default, {
          Component: j,
          route: h
        }) || j;
      };
    }
  });
  function ei(i, t) {
    if (!i) return null;
    const e = i(t);
    return e.length === 1 ? e[0] : e;
  }
  const la = ca;
  function _a(i) {
    const t = $s(i.routes, i), e = i.parseQuery || ta, r = i.stringifyQuery || Xr, n = i.history, a = _e(), c = _e(), l = _e(), _ = Tn(Lt);
    let h = Lt;
    Yt && i.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const u = Ze.bind(null, (m) => "" + m), w = Ze.bind(null, vs), b = Ze.bind(null, ge);
    function f(m, y) {
      let C, z;
      return nn(m) ? (C = t.getRecordMatcher(m), z = y) : z = m, t.addRoute(z, C);
    }
    function R(m) {
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
      if (y = G({}, y || _.value), typeof m == "string") {
        const B = tr(e, m, y.path), it = t.resolve({
          path: B.path
        }, y), le = n.createHref(B.fullPath);
        return G(B, it, {
          params: b(it.params),
          hash: ge(B.hash),
          redirectedFrom: void 0,
          href: le
        });
      }
      let C;
      if (m.path != null) C = G({}, m, {
        path: tr(e, m.path, y.path).path
      });
      else {
        const B = G({}, m.params);
        for (const it in B) B[it] == null && delete B[it];
        C = G({}, m, {
          params: w(B)
        }), y.params = w(y.params);
      }
      const z = t.resolve(C, y), V = m.hash || "";
      z.params = u(b(z.params));
      const X = Cs(r, G({}, m, {
        hash: ms(V),
        path: z.path
      })), N = n.createHref(X);
      return G({
        fullPath: X,
        hash: V,
        query: r === Xr ? ea(m.query) : m.query || {}
      }, z, {
        redirectedFrom: void 0,
        href: N
      });
    }
    function v(m) {
      return typeof m == "string" ? tr(e, m, _.value.path) : G({}, m);
    }
    function S(m, y) {
      if (h !== m) return ne(8, {
        from: y,
        to: m
      });
    }
    function x(m) {
      return Z(m);
    }
    function bt(m) {
      return x(G(v(m), {
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
        }, z.params = {}), G({
          query: m.query,
          hash: m.hash,
          params: z.path != null ? {} : m.params
        }, z);
      }
    }
    function Z(m, y) {
      const C = h = I(m), z = _.value, V = m.state, X = m.force, N = m.replace === true, B = ut(C);
      if (B) return Z(G(v(B), {
        state: typeof B == "object" ? G({}, V, B.state) : V,
        force: X,
        replace: N
      }), y || C);
      const it = C;
      it.redirectedFrom = y;
      let le;
      return !X && xs(r, z, C) && (le = ne(16, {
        to: it,
        from: z
      }), ce(z, z, true, false)), (le ? Promise.resolve(le) : Et(it, z)).catch((pt) => jt(pt) ? jt(pt, 2) ? pt : mt(pt) : oe(pt, it, z)).then((pt) => {
        if (pt) {
          if (jt(pt, 2)) return Z(G({
            replace: N
          }, v(pt.to), {
            state: typeof pt.to == "object" ? G({}, V, pt.to.state) : V,
            force: X
          }), y || it);
        } else pt = Pt(it, z, true, N, V);
        return Ft(it, z, pt), pt;
      });
    }
    function Dt(m, y) {
      const C = S(m, y);
      return C ? Promise.reject(C) : Promise.resolve();
    }
    function Rt(m) {
      const y = E.values().next().value;
      return y && typeof y.runWithContext == "function" ? y.runWithContext(m) : m();
    }
    function Et(m, y) {
      let C;
      const [z, V, X] = da(m, y);
      C = er(z.reverse(), "beforeRouteLeave", m, y);
      for (const B of z) B.leaveGuards.forEach((it) => {
        C.push(Nt(it, m, y));
      });
      const N = Dt.bind(null, m, y);
      return C.push(N), A(C).then(() => {
        C = [];
        for (const B of a.list()) C.push(Nt(B, m, y));
        return C.push(N), A(C);
      }).then(() => {
        C = er(V, "beforeRouteUpdate", m, y);
        for (const B of V) B.updateGuards.forEach((it) => {
          C.push(Nt(it, m, y));
        });
        return C.push(N), A(C);
      }).then(() => {
        C = [];
        for (const B of X) if (B.beforeEnter) if (vt(B.beforeEnter)) for (const it of B.beforeEnter) C.push(Nt(it, m, y));
        else C.push(Nt(B.beforeEnter, m, y));
        return C.push(N), A(C);
      }).then(() => (m.matched.forEach((B) => B.enterCallbacks = {}), C = er(X, "beforeRouteEnter", m, y, Rt), C.push(N), A(C))).then(() => {
        C = [];
        for (const B of c.list()) C.push(Nt(B, m, y));
        return C.push(N), A(C);
      }).catch((B) => jt(B, 8) ? B : Promise.reject(B));
    }
    function Ft(m, y, C) {
      l.list().forEach((z) => Rt(() => z(m, y, C)));
    }
    function Pt(m, y, C, z, V) {
      const X = S(m, y);
      if (X) return X;
      const N = y === Lt, B = Yt ? history.state : {};
      C && (z || N ? n.replace(m.fullPath, G({
        scroll: N && B && B.scroll
      }, V)) : n.push(m.fullPath, V)), _.value = m, ce(m, y, C, N), mt();
    }
    let Mt;
    function Ce() {
      Mt || (Mt = n.listen((m, y, C) => {
        if (!F.listening) return;
        const z = I(m), V = ut(z);
        if (V) {
          Z(G(V, {
            replace: true,
            force: true
          }), z).catch(he);
          return;
        }
        h = z;
        const X = _.value;
        Yt && ks(Hr(X.fullPath, C.delta), Le()), Et(z, X).catch((N) => jt(N, 12) ? N : jt(N, 2) ? (Z(G(v(N.to), {
          force: true
        }), z).then((B) => {
          jt(B, 20) && !C.delta && C.type === be.pop && n.go(-1, false);
        }).catch(he), Promise.reject()) : (C.delta && n.go(-C.delta, false), oe(N, z, X))).then((N) => {
          N = N || Pt(z, X, false), N && (C.delta && !jt(N, 8) ? n.go(-C.delta, false) : C.type === be.pop && jt(N, 20) && n.go(-1, false)), Ft(z, X, N);
        }).catch(he);
      }));
    }
    let se = _e(), ae = _e(), qt;
    function oe(m, y, C) {
      mt(m);
      const z = ae.list();
      return z.length ? z.forEach((V) => V(m, y, C)) : console.error(m), Promise.reject(m);
    }
    function Ye() {
      return qt && _.value !== Lt ? Promise.resolve() : new Promise((m, y) => {
        se.add([
          m,
          y
        ]);
      });
    }
    function mt(m) {
      return qt || (qt = !m, Ce(), se.list().forEach(([y, C]) => m ? C(m) : y()), se.reset()), m;
    }
    function ce(m, y, C, z) {
      const { scrollBehavior: V } = i;
      if (!Yt || !V) return Promise.resolve();
      const X = !C && Ds(Hr(m.fullPath, 0)) || (z || !C) && history.state && history.state.scroll || null;
      return Wi().then(() => V(m, y, X)).then((N) => N && Ts(N)).catch((N) => oe(N, m, y));
    }
    const $t = (m) => n.go(m);
    let Gt;
    const E = /* @__PURE__ */ new Set(), F = {
      currentRoute: _,
      listening: true,
      addRoute: f,
      removeRoute: R,
      clearRoutes: t.clearRoutes,
      hasRoute: j,
      getRoutes: T,
      resolve: I,
      options: i,
      push: x,
      replace: bt,
      go: $t,
      back: () => $t(-1),
      forward: () => $t(1),
      beforeEach: a.add,
      beforeResolve: c.add,
      afterEach: l.add,
      onError: ae.add,
      isReady: Ye,
      install(m) {
        const y = this;
        m.component("RouterLink", sa), m.component("RouterView", la), m.config.globalProperties.$router = y, Object.defineProperty(m.config.globalProperties, "$route", {
          enumerable: true,
          get: () => gt(_)
        }), Yt && !Gt && _.value === Lt && (Gt = true, x(n.location).catch((V) => {
        }));
        const C = {};
        for (const V in Lt) Object.defineProperty(C, V, {
          get: () => _.value[V],
          enumerable: true
        });
        m.provide(Pr, y), m.provide(jr, wr(C)), m.provide(br, _);
        const z = m.unmount;
        E.add(m), m.unmount = function() {
          E.delete(m), E.size < 1 && (h = Lt, Mt && Mt(), Mt = null, _.value = Lt, Gt = false, qt = false), z();
        };
      }
    };
    function A(m) {
      return m.reduce((y, C) => y.then(() => Rt(C)), Promise.resolve());
    }
    return F;
  }
  function da(i, t) {
    const e = [], r = [], n = [], a = Math.max(t.matched.length, i.matched.length);
    for (let c = 0; c < a; c++) {
      const l = t.matched[c];
      l && (i.matched.find((h) => ie(h, l)) ? r.push(l) : e.push(l));
      const _ = i.matched[c];
      _ && (t.matched.find((h) => ie(h, _)) || n.push(_));
    }
    return [
      e,
      r,
      n
    ];
  }
  function ha(i) {
    return Zt(jr);
  }
  const wa = "" + new URL("rapier_wasm3d_bg-B0KiaTzL.wasm", import.meta.url).href, ua = async (i = {}, t) => {
    let e;
    if (t.startsWith("data:")) {
      const r = t.replace(/^data:.*?base64,/, "");
      let n;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") n = Buffer.from(r, "base64");
      else if (typeof atob == "function") {
        const a = atob(r);
        n = new Uint8Array(a.length);
        for (let c = 0; c < a.length; c++) n[c] = a.charCodeAt(c);
      } else throw new Error("Cannot decode base64-encoded data URL");
      e = await WebAssembly.instantiate(n, i);
    } else {
      const r = await fetch(t), n = r.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && n.startsWith("application/wasm")) e = await WebAssembly.instantiateStreaming(r, i);
      else {
        const a = await r.arrayBuffer();
        e = await WebAssembly.instantiate(a, i);
      }
    }
    return e.instance.exports;
  };
  let s;
  function pa(i) {
    s = i;
  }
  const H = new Array(128).fill(void 0);
  H.push(void 0, null, true, false);
  function O(i) {
    return H[i];
  }
  let ue = H.length;
  function J(i) {
    ue === H.length && H.push(H.length + 1);
    const t = ue;
    return ue = H[t], H[t] = i, t;
  }
  function Be(i, t) {
    try {
      return i.apply(this, t);
    } catch (e) {
      s.__wbindgen_export_0(J(e));
    }
  }
  const ga = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
  let cn = new ga("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  cn.decode();
  let xe = null;
  function ba() {
    return (xe === null || xe.byteLength === 0) && (xe = new Uint8Array(s.memory.buffer)), xe;
  }
  function ln(i, t) {
    return i = i >>> 0, cn.decode(ba().subarray(i, i + t));
  }
  function D(i) {
    return i == null;
  }
  let Xt = null;
  function at() {
    return (Xt === null || Xt.buffer.detached === true || Xt.buffer.detached === void 0 && Xt.buffer !== s.memory.buffer) && (Xt = new DataView(s.memory.buffer)), Xt;
  }
  function ma(i) {
    i < 132 || (H[i] = ue, ue = i);
  }
  function me(i) {
    const t = O(i);
    return ma(i), t;
  }
  function d(i, t) {
    if (!(i instanceof t)) throw new Error(`expected instance of ${t.name}`);
  }
  let U = 128;
  function $(i) {
    if (U == 1) throw new Error("out of js stack");
    return H[--U] = i, U;
  }
  let Ee = null;
  function fa() {
    return (Ee === null || Ee.byteLength === 0) && (Ee = new Int32Array(s.memory.buffer)), Ee;
  }
  function ya(i, t) {
    return i = i >>> 0, fa().subarray(i / 4, i / 4 + t);
  }
  let Pe = null;
  function _n() {
    return (Pe === null || Pe.byteLength === 0) && (Pe = new Float32Array(s.memory.buffer)), Pe;
  }
  function ri(i, t) {
    return i = i >>> 0, _n().subarray(i / 4, i / 4 + t);
  }
  let je = null;
  function dn() {
    return (je === null || je.byteLength === 0) && (je = new Uint32Array(s.memory.buffer)), je;
  }
  function va(i, t) {
    return i = i >>> 0, dn().subarray(i / 4, i / 4 + t);
  }
  let _t = 0;
  function de(i, t) {
    const e = t(i.length * 4, 4) >>> 0;
    return dn().set(i, e / 4), _t = i.length, e;
  }
  function Bt(i, t) {
    const e = t(i.length * 4, 4) >>> 0;
    return _n().set(i, e / 4), _t = i.length, e;
  }
  const Ne = Object.freeze({
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
  }), rr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawbroadphase_free(i >>> 0, 1));
  class It {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(It.prototype);
      return e.__wbg_ptr = t, rr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, rr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawbroadphase_free(t, 0);
    }
    constructor() {
      const t = s.rawbroadphase_new();
      return this.__wbg_ptr = t >>> 0, rr.register(this, this.__wbg_ptr, this), this;
    }
    castRay(t, e, r, n, a, c, l, _, h, u, w, b) {
      try {
        d(t, et), d(e, K), d(r, Y), d(n, p), d(a, p);
        const f = s.rawbroadphase_castRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c, l, _, D(h) ? 4294967297 : h >>> 0, !D(u), D(u) ? 0 : u, !D(w), D(w) ? 0 : w, $(b));
        return f === 0 ? void 0 : kr.__wrap(f);
      } finally {
        H[U++] = void 0;
      }
    }
    castRayAndGetNormal(t, e, r, n, a, c, l, _, h, u, w, b) {
      try {
        d(t, et), d(e, K), d(r, Y), d(n, p), d(a, p);
        const f = s.rawbroadphase_castRayAndGetNormal(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c, l, _, D(h) ? 4294967297 : h >>> 0, !D(u), D(u) ? 0 : u, !D(w), D(w) ? 0 : w, $(b));
        return f === 0 ? void 0 : Ge.__wrap(f);
      } finally {
        H[U++] = void 0;
      }
    }
    intersectionsWithRay(t, e, r, n, a, c, l, _, h, u, w, b, f) {
      try {
        d(t, et), d(e, K), d(r, Y), d(n, p), d(a, p), s.rawbroadphase_intersectionsWithRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c, l, $(_), h, D(u) ? 4294967297 : u >>> 0, !D(w), D(w) ? 0 : w, !D(b), D(b) ? 0 : b, $(f));
      } finally {
        H[U++] = void 0, H[U++] = void 0;
      }
    }
    intersectionWithShape(t, e, r, n, a, c, l, _, h, u, w) {
      try {
        const R = s.__wbindgen_add_to_stack_pointer(-16);
        d(t, et), d(e, K), d(r, Y), d(n, p), d(a, L), d(c, k), s.rawbroadphase_intersectionWithShape(R, this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c.__wbg_ptr, l, D(_) ? 4294967297 : _ >>> 0, !D(h), D(h) ? 0 : h, !D(u), D(u) ? 0 : u, $(w));
        var b = at().getInt32(R + 0, true), f = at().getFloat64(R + 8, true);
        return b === 0 ? void 0 : f;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16), H[U++] = void 0;
      }
    }
    projectPoint(t, e, r, n, a, c, l, _, h, u) {
      try {
        d(t, et), d(e, K), d(r, Y), d(n, p);
        const w = s.rawbroadphase_projectPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a, c, D(l) ? 4294967297 : l >>> 0, !D(_), D(_) ? 0 : _, !D(h), D(h) ? 0 : h, $(u));
        return w === 0 ? void 0 : Ae.__wrap(w);
      } finally {
        H[U++] = void 0;
      }
    }
    projectPointAndGetFeature(t, e, r, n, a, c, l, _, h) {
      try {
        d(t, et), d(e, K), d(r, Y), d(n, p);
        const u = s.rawbroadphase_projectPointAndGetFeature(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a, D(c) ? 4294967297 : c >>> 0, !D(l), D(l) ? 0 : l, !D(_), D(_) ? 0 : _, $(h));
        return u === 0 ? void 0 : Ae.__wrap(u);
      } finally {
        H[U++] = void 0;
      }
    }
    intersectionsWithPoint(t, e, r, n, a, c, l, _, h, u) {
      try {
        d(t, et), d(e, K), d(r, Y), d(n, p), s.rawbroadphase_intersectionsWithPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, $(a), c, D(l) ? 4294967297 : l >>> 0, !D(_), D(_) ? 0 : _, !D(h), D(h) ? 0 : h, $(u));
      } finally {
        H[U++] = void 0, H[U++] = void 0;
      }
    }
    castShape(t, e, r, n, a, c, l, _, h, u, w, b, f, R, T) {
      try {
        d(t, et), d(e, K), d(r, Y), d(n, p), d(a, L), d(c, p), d(l, k);
        const j = s.rawbroadphase_castShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _, h, u, w, D(b) ? 4294967297 : b >>> 0, !D(f), D(f) ? 0 : f, !D(R), D(R) ? 0 : R, $(T));
        return j === 0 ? void 0 : Oe.__wrap(j);
      } finally {
        H[U++] = void 0;
      }
    }
    intersectionsWithShape(t, e, r, n, a, c, l, _, h, u, w, b) {
      try {
        d(t, et), d(e, K), d(r, Y), d(n, p), d(a, L), d(c, k), s.rawbroadphase_intersectionsWithShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c.__wbg_ptr, $(l), _, D(h) ? 4294967297 : h >>> 0, !D(u), D(u) ? 0 : u, !D(w), D(w) ? 0 : w, $(b));
      } finally {
        H[U++] = void 0, H[U++] = void 0;
      }
    }
    collidersWithAabbIntersectingAabb(t, e, r, n, a, c) {
      try {
        d(t, et), d(e, K), d(r, Y), d(n, p), d(a, p), s.rawbroadphase_collidersWithAabbIntersectingAabb(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, $(c));
      } finally {
        H[U++] = void 0;
      }
    }
  }
  const ii = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawccdsolver_free(i >>> 0, 1));
  class mr {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ii.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawccdsolver_free(t, 0);
    }
    constructor() {
      const t = s.rawccdsolver_new();
      return this.__wbg_ptr = t >>> 0, ii.register(this, this.__wbg_ptr, this), this;
    }
  }
  const ni = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcharactercollision_free(i >>> 0, 1));
  class hn {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ni.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawcharactercollision_free(t, 0);
    }
    constructor() {
      const t = s.rawcharactercollision_new();
      return this.__wbg_ptr = t >>> 0, ni.register(this, this.__wbg_ptr, this), this;
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
  const ir = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcolliderset_free(i >>> 0, 1));
  class Y {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Y.prototype);
      return e.__wbg_ptr = t, ir.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ir.unregister(this), t;
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
    coSetTranslation(t, e, r, n) {
      s.rawcolliderset_coSetTranslation(this.__wbg_ptr, t, e, r, n);
    }
    coSetTranslationWrtParent(t, e, r, n) {
      s.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr, t, e, r, n);
    }
    coSetRotation(t, e, r, n, a) {
      s.rawcolliderset_coSetRotation(this.__wbg_ptr, t, e, r, n, a);
    }
    coSetRotationWrtParent(t, e, r, n, a) {
      s.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr, t, e, r, n, a);
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
        const n = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawcolliderset_coVoxelData(n, this.__wbg_ptr, t);
        var e = at().getInt32(n + 0, true), r = at().getInt32(n + 4, true);
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
    coSetVoxel(t, e, r, n, a) {
      s.rawcolliderset_coSetVoxel(this.__wbg_ptr, t, e, r, n, a);
    }
    coPropagateVoxelChange(t, e, r, n, a, c, l, _) {
      s.rawcolliderset_coPropagateVoxelChange(this.__wbg_ptr, t, e, r, n, a, c, l, _);
    }
    coCombineVoxelStates(t, e, r, n, a) {
      s.rawcolliderset_coCombineVoxelStates(this.__wbg_ptr, t, e, r, n, a);
    }
    coVertices(t) {
      try {
        const n = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawcolliderset_coVertices(n, this.__wbg_ptr, t);
        var e = at().getInt32(n + 0, true), r = at().getInt32(n + 4, true);
        let a;
        return e !== 0 && (a = ri(e, r).slice(), s.__wbindgen_export_1(e, r * 4, 4)), a;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coIndices(t) {
      try {
        const n = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawcolliderset_coIndices(n, this.__wbg_ptr, t);
        var e = at().getInt32(n + 0, true), r = at().getInt32(n + 4, true);
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
        const n = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawcolliderset_coHeightfieldHeights(n, this.__wbg_ptr, t);
        var e = at().getInt32(n + 0, true), r = at().getInt32(n + 4, true);
        let a;
        return e !== 0 && (a = ri(e, r).slice(), s.__wbindgen_export_1(e, r * 4, 4)), a;
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
        const n = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawcolliderset_coParent(n, this.__wbg_ptr, t);
        var e = at().getInt32(n + 0, true), r = at().getFloat64(n + 8, true);
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
    coCastShape(t, e, r, n, a, c, l, _, h) {
      d(e, p), d(r, k), d(n, p), d(a, L), d(c, p);
      const u = s.rawcolliderset_coCastShape(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c.__wbg_ptr, l, _, h);
      return u === 0 ? void 0 : Ve.__wrap(u);
    }
    coCastCollider(t, e, r, n, a, c, l) {
      d(e, p), d(n, p);
      const _ = s.rawcolliderset_coCastCollider(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, a, c, l);
      return _ === 0 ? void 0 : Oe.__wrap(_);
    }
    coIntersectsShape(t, e, r, n) {
      return d(e, k), d(r, p), d(n, L), s.rawcolliderset_coIntersectsShape(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr) !== 0;
    }
    coContactShape(t, e, r, n, a) {
      d(e, k), d(r, p), d(n, L);
      const c = s.rawcolliderset_coContactShape(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a);
      return c === 0 ? void 0 : fe.__wrap(c);
    }
    coContactCollider(t, e, r) {
      const n = s.rawcolliderset_coContactCollider(this.__wbg_ptr, t, e, r);
      return n === 0 ? void 0 : fe.__wrap(n);
    }
    coProjectPoint(t, e, r) {
      d(e, p);
      const n = s.rawcolliderset_coProjectPoint(this.__wbg_ptr, t, e.__wbg_ptr, r);
      return He.__wrap(n);
    }
    coIntersectsRay(t, e, r, n) {
      return d(e, p), d(r, p), s.rawcolliderset_coIntersectsRay(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n) !== 0;
    }
    coCastRay(t, e, r, n, a) {
      return d(e, p), d(r, p), s.rawcolliderset_coCastRay(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n, a);
    }
    coCastRayAndGetNormal(t, e, r, n, a) {
      d(e, p), d(r, p);
      const c = s.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n, a);
      return c === 0 ? void 0 : We.__wrap(c);
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
      d(e, k), s.rawcolliderset_coSetShape(this.__wbg_ptr, t, e.__wbg_ptr);
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
    coSetMassProperties(t, e, r, n, a) {
      d(r, p), d(n, p), d(a, L), s.rawcolliderset_coSetMassProperties(this.__wbg_ptr, t, e, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr);
    }
    constructor() {
      const t = s.rawcolliderset_new();
      return this.__wbg_ptr = t >>> 0, ir.register(this, this.__wbg_ptr, this), this;
    }
    len() {
      return s.rawcolliderset_len(this.__wbg_ptr) >>> 0;
    }
    contains(t) {
      return s.rawcolliderset_contains(this.__wbg_ptr, t) !== 0;
    }
    createCollider(t, e, r, n, a, c, l, _, h, u, w, b, f, R, T, j, I, v, S, x, bt, ut, Z, Dt, Rt) {
      try {
        const Pt = s.__wbindgen_add_to_stack_pointer(-16);
        d(e, k), d(r, p), d(n, L), d(l, p), d(_, p), d(h, L), d(Rt, K), s.rawcolliderset_createCollider(Pt, this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a, c, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr, u, w, b, f, R, T, j, I, v, S, x, bt, ut, Z, Dt, Rt.__wbg_ptr);
        var Et = at().getInt32(Pt + 0, true), Ft = at().getFloat64(Pt + 8, true);
        return Et === 0 ? void 0 : Ft;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
    remove(t, e, r, n) {
      d(e, Tt), d(r, K), s.rawcolliderset_remove(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n);
    }
    isHandleValid(t) {
      return s.rawcolliderset_contains(this.__wbg_ptr, t) !== 0;
    }
    forEachColliderHandle(t) {
      try {
        s.rawcolliderset_forEachColliderHandle(this.__wbg_ptr, $(t));
      } finally {
        H[U++] = void 0;
      }
    }
  }
  const si = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcollidershapecasthit_free(i >>> 0, 1));
  class Oe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Oe.prototype);
      return e.__wbg_ptr = t, si.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, si.unregister(this), t;
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
  const ai = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcontactforceevent_free(i >>> 0, 1));
  class Ar {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ar.prototype);
      return e.__wbg_ptr = t, ai.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ai.unregister(this), t;
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
  const oi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcontactmanifold_free(i >>> 0, 1));
  class Ir {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ir.prototype);
      return e.__wbg_ptr = t, oi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, oi.unregister(this), t;
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
  const ci = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawcontactpair_free(i >>> 0, 1));
  class zr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(zr.prototype);
      return e.__wbg_ptr = t, ci.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ci.unregister(this), t;
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
  const li = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawdebugrenderpipeline_free(i >>> 0, 1));
  class Ra {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, li.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawdebugrenderpipeline_free(t, 0);
    }
    constructor() {
      const t = s.rawdebugrenderpipeline_new();
      return this.__wbg_ptr = t >>> 0, li.register(this, this.__wbg_ptr, this), this;
    }
    vertices() {
      const t = s.rawdebugrenderpipeline_vertices(this.__wbg_ptr);
      return me(t);
    }
    colors() {
      const t = s.rawdebugrenderpipeline_colors(this.__wbg_ptr);
      return me(t);
    }
    render(t, e, r, n, a, c, l) {
      try {
        d(t, K), d(e, Y), d(r, zt), d(n, kt), d(a, et), s.rawdebugrenderpipeline_render(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c, $(l));
      } finally {
        H[U++] = void 0;
      }
    }
  }
  const _i = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawdeserializedworld_free(i >>> 0, 1));
  class Tr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Tr.prototype);
      return e.__wbg_ptr = t, _i.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, _i.unregister(this), t;
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
      return t === 0 ? void 0 : et.__wrap(t);
    }
    takeBodies() {
      const t = s.rawdeserializedworld_takeBodies(this.__wbg_ptr);
      return t === 0 ? void 0 : K.__wrap(t);
    }
    takeColliders() {
      const t = s.rawdeserializedworld_takeColliders(this.__wbg_ptr);
      return t === 0 ? void 0 : Y.__wrap(t);
    }
    takeImpulseJoints() {
      const t = s.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);
      return t === 0 ? void 0 : zt.__wrap(t);
    }
    takeMultibodyJoints() {
      const t = s.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);
      return t === 0 ? void 0 : kt.__wrap(t);
    }
  }
  const di = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawdynamicraycastvehiclecontroller_free(i >>> 0, 1));
  class Sa {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, di.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawdynamicraycastvehiclecontroller_free(t, 0);
    }
    constructor(t) {
      const e = s.rawdynamicraycastvehiclecontroller_new(t);
      return this.__wbg_ptr = e >>> 0, di.register(this, this.__wbg_ptr, this), this;
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
    add_wheel(t, e, r, n, a) {
      d(t, p), d(e, p), d(r, p), s.rawdynamicraycastvehiclecontroller_add_wheel(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n, a);
    }
    num_wheels() {
      return s.rawdynamicraycastvehiclecontroller_num_wheels(this.__wbg_ptr) >>> 0;
    }
    update_vehicle(t, e, r, n, a, c, l, _) {
      try {
        d(e, It), d(r, et), d(n, K), d(a, Y), s.rawdynamicraycastvehiclecontroller_update_vehicle(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c, D(l) ? 4294967297 : l >>> 0, $(_));
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
        const n = s.__wbindgen_add_to_stack_pointer(-16);
        s.rawdynamicraycastvehiclecontroller_wheel_ground_object(n, this.__wbg_ptr, t);
        var e = at().getInt32(n + 0, true), r = at().getFloat64(n + 8, true);
        return e === 0 ? void 0 : r;
      } finally {
        s.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  const hi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_raweventqueue_free(i >>> 0, 1));
  class wn {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, hi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_raweventqueue_free(t, 0);
    }
    constructor(t) {
      const e = s.raweventqueue_new(t);
      return this.__wbg_ptr = e >>> 0, hi.register(this, this.__wbg_ptr, this), this;
    }
    drainCollisionEvents(t) {
      try {
        s.raweventqueue_drainCollisionEvents(this.__wbg_ptr, $(t));
      } finally {
        H[U++] = void 0;
      }
    }
    drainContactForceEvents(t) {
      try {
        s.raweventqueue_drainContactForceEvents(this.__wbg_ptr, $(t));
      } finally {
        H[U++] = void 0;
      }
    }
    clear() {
      s.raweventqueue_clear(this.__wbg_ptr);
    }
  }
  const wi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawgenericjoint_free(i >>> 0, 1));
  class ot {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ot.prototype);
      return e.__wbg_ptr = t, wi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, wi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawgenericjoint_free(t, 0);
    }
    static generic(t, e, r, n) {
      d(t, p), d(e, p), d(r, p);
      const a = s.rawgenericjoint_generic(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n);
      return a === 0 ? void 0 : ot.__wrap(a);
    }
    static spring(t, e, r, n, a) {
      d(n, p), d(a, p);
      const c = s.rawgenericjoint_spring(t, e, r, n.__wbg_ptr, a.__wbg_ptr);
      return ot.__wrap(c);
    }
    static rope(t, e, r) {
      d(e, p), d(r, p);
      const n = s.rawgenericjoint_rope(t, e.__wbg_ptr, r.__wbg_ptr);
      return ot.__wrap(n);
    }
    static spherical(t, e) {
      d(t, p), d(e, p);
      const r = s.rawgenericjoint_spherical(t.__wbg_ptr, e.__wbg_ptr);
      return ot.__wrap(r);
    }
    static prismatic(t, e, r, n, a, c) {
      d(t, p), d(e, p), d(r, p);
      const l = s.rawgenericjoint_prismatic(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n, a, c);
      return l === 0 ? void 0 : ot.__wrap(l);
    }
    static fixed(t, e, r, n) {
      d(t, p), d(e, L), d(r, p), d(n, L);
      const a = s.rawgenericjoint_fixed(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr);
      return ot.__wrap(a);
    }
    static revolute(t, e, r) {
      d(t, p), d(e, p), d(r, p);
      const n = s.rawgenericjoint_revolute(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr);
      return n === 0 ? void 0 : ot.__wrap(n);
    }
  }
  const nr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawimpulsejointset_free(i >>> 0, 1));
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
    jointSetLimits(t, e, r, n) {
      s.rawimpulsejointset_jointSetLimits(this.__wbg_ptr, t, e, r, n);
    }
    jointConfigureMotorModel(t, e, r) {
      s.rawimpulsejointset_jointConfigureMotorModel(this.__wbg_ptr, t, e, r);
    }
    jointConfigureMotorVelocity(t, e, r, n) {
      s.rawimpulsejointset_jointConfigureMotorVelocity(this.__wbg_ptr, t, e, r, n);
    }
    jointConfigureMotorPosition(t, e, r, n, a) {
      s.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr, t, e, r, n, a);
    }
    jointConfigureMotor(t, e, r, n, a, c) {
      s.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr, t, e, r, n, a, c);
    }
    constructor() {
      const t = s.rawimpulsejointset_new();
      return this.__wbg_ptr = t >>> 0, nr.register(this, this.__wbg_ptr, this), this;
    }
    createJoint(t, e, r, n) {
      return d(t, ot), s.rawimpulsejointset_createJoint(this.__wbg_ptr, t.__wbg_ptr, e, r, n);
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
        s.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr, $(t));
      } finally {
        H[U++] = void 0;
      }
    }
    forEachJointAttachedToRigidBody(t, e) {
      try {
        s.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, t, $(e));
      } finally {
        H[U++] = void 0;
      }
    }
  }
  const sr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawintegrationparameters_free(i >>> 0, 1));
  class Ut {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ut.prototype);
      return e.__wbg_ptr = t, sr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, sr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawintegrationparameters_free(t, 0);
    }
    constructor() {
      const t = s.rawintegrationparameters_new();
      return this.__wbg_ptr = t >>> 0, sr.register(this, this.__wbg_ptr, this), this;
    }
    get dt() {
      return s.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    get contact_erp() {
      return s.rawintegrationparameters_contact_erp(this.__wbg_ptr);
    }
    get normalizedAllowedLinearError() {
      return s.rawintegrationparameters_normalizedAllowedLinearError(this.__wbg_ptr);
    }
    get normalizedPredictionDistance() {
      return s.rawintegrationparameters_normalizedPredictionDistance(this.__wbg_ptr);
    }
    get numSolverIterations() {
      return s.rawintegrationparameters_numSolverIterations(this.__wbg_ptr) >>> 0;
    }
    get numInternalPgsIterations() {
      return s.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr) >>> 0;
    }
    get minIslandSize() {
      return s.rawintegrationparameters_minIslandSize(this.__wbg_ptr) >>> 0;
    }
    get maxCcdSubsteps() {
      return s.rawintegrationparameters_maxCcdSubsteps(this.__wbg_ptr) >>> 0;
    }
    get lengthUnit() {
      return s.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr);
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
    set numInternalPgsIterations(t) {
      s.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr, t);
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
  }
  const ar = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawislandmanager_free(i >>> 0, 1));
  class Tt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Tt.prototype);
      return e.__wbg_ptr = t, ar.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ar.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawislandmanager_free(t, 0);
    }
    constructor() {
      const t = s.rawislandmanager_new();
      return this.__wbg_ptr = t >>> 0, ar.register(this, this.__wbg_ptr, this), this;
    }
    forEachActiveRigidBodyHandle(t) {
      try {
        s.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr, $(t));
      } finally {
        H[U++] = void 0;
      }
    }
  }
  const ui = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawkinematiccharactercontroller_free(i >>> 0, 1));
  class Ca {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ui.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawkinematiccharactercontroller_free(t, 0);
    }
    constructor(t) {
      const e = s.rawkinematiccharactercontroller_new(t);
      return this.__wbg_ptr = e >>> 0, ui.register(this, this.__wbg_ptr, this), this;
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
      return s.rawkinematiccharactercontroller_offset(this.__wbg_ptr);
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
    computeColliderMovement(t, e, r, n, a, c, l, _, h, u, w, b) {
      try {
        d(e, It), d(r, et), d(n, K), d(a, Y), d(l, p), s.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c, l.__wbg_ptr, _, D(h) ? 4294967297 : Math.fround(h), u, D(w) ? 4294967297 : w >>> 0, $(b));
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
      return d(e, hn), s.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr, t, e.__wbg_ptr) !== 0;
    }
  }
  const or = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawmultibodyjointset_free(i >>> 0, 1));
  class kt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(kt.prototype);
      return e.__wbg_ptr = t, or.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, or.unregister(this), t;
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
      return this.__wbg_ptr = t >>> 0, or.register(this, this.__wbg_ptr, this), this;
    }
    createJoint(t, e, r, n) {
      return d(t, ot), s.rawmultibodyjointset_createJoint(this.__wbg_ptr, t.__wbg_ptr, e, r, n);
    }
    remove(t, e) {
      s.rawmultibodyjointset_remove(this.__wbg_ptr, t, e);
    }
    contains(t) {
      return s.rawmultibodyjointset_contains(this.__wbg_ptr, t) !== 0;
    }
    forEachJointHandle(t) {
      try {
        s.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr, $(t));
      } finally {
        H[U++] = void 0;
      }
    }
    forEachJointAttachedToRigidBody(t, e) {
      try {
        s.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, t, $(e));
      } finally {
        H[U++] = void 0;
      }
    }
  }
  const cr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawnarrowphase_free(i >>> 0, 1));
  class et {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(et.prototype);
      return e.__wbg_ptr = t, cr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, cr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawnarrowphase_free(t, 0);
    }
    constructor() {
      const t = s.rawnarrowphase_new();
      return this.__wbg_ptr = t >>> 0, cr.register(this, this.__wbg_ptr, this), this;
    }
    contact_pairs_with(t, e) {
      s.rawnarrowphase_contact_pairs_with(this.__wbg_ptr, t, J(e));
    }
    contact_pair(t, e) {
      const r = s.rawnarrowphase_contact_pair(this.__wbg_ptr, t, e);
      return r === 0 ? void 0 : zr.__wrap(r);
    }
    intersection_pairs_with(t, e) {
      s.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr, t, J(e));
    }
    intersection_pair(t, e) {
      return s.rawnarrowphase_intersection_pair(this.__wbg_ptr, t, e) !== 0;
    }
  }
  const pi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawphysicspipeline_free(i >>> 0, 1));
  class xa {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, pi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawphysicspipeline_free(t, 0);
    }
    constructor() {
      const t = s.rawphysicspipeline_new();
      return this.__wbg_ptr = t >>> 0, pi.register(this, this.__wbg_ptr, this), this;
    }
    set_profiler_enabled(t) {
      s.rawphysicspipeline_set_profiler_enabled(this.__wbg_ptr, t);
    }
    is_profiler_enabled() {
      return s.rawphysicspipeline_is_profiler_enabled(this.__wbg_ptr) !== 0;
    }
    timing_step() {
      return s.rawphysicspipeline_timing_step(this.__wbg_ptr);
    }
    timing_collision_detection() {
      return s.rawphysicspipeline_timing_collision_detection(this.__wbg_ptr);
    }
    timing_broad_phase() {
      return s.rawphysicspipeline_timing_broad_phase(this.__wbg_ptr);
    }
    timing_narrow_phase() {
      return s.rawphysicspipeline_timing_narrow_phase(this.__wbg_ptr);
    }
    timing_solver() {
      return s.rawphysicspipeline_timing_solver(this.__wbg_ptr);
    }
    timing_velocity_assembly() {
      return s.rawphysicspipeline_timing_velocity_assembly(this.__wbg_ptr);
    }
    timing_velocity_resolution() {
      return s.rawphysicspipeline_timing_velocity_resolution(this.__wbg_ptr);
    }
    timing_velocity_update() {
      return s.rawphysicspipeline_timing_velocity_update(this.__wbg_ptr);
    }
    timing_velocity_writeback() {
      return s.rawphysicspipeline_timing_velocity_writeback(this.__wbg_ptr);
    }
    timing_ccd() {
      return s.rawphysicspipeline_timing_ccd(this.__wbg_ptr);
    }
    timing_ccd_toi_computation() {
      return s.rawphysicspipeline_timing_ccd_toi_computation(this.__wbg_ptr);
    }
    timing_ccd_broad_phase() {
      return s.rawphysicspipeline_timing_ccd_broad_phase(this.__wbg_ptr);
    }
    timing_ccd_narrow_phase() {
      return s.rawphysicspipeline_timing_ccd_narrow_phase(this.__wbg_ptr);
    }
    timing_ccd_solver() {
      return s.rawphysicspipeline_timing_ccd_solver(this.__wbg_ptr);
    }
    timing_island_construction() {
      return s.rawphysicspipeline_timing_island_construction(this.__wbg_ptr);
    }
    timing_user_changes() {
      return s.rawphysicspipeline_timing_user_changes(this.__wbg_ptr);
    }
    step(t, e, r, n, a, c, l, _, h, u) {
      d(t, p), d(e, Ut), d(r, Tt), d(n, It), d(a, et), d(c, K), d(l, Y), d(_, zt), d(h, kt), d(u, mr), s.rawphysicspipeline_step(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr, u.__wbg_ptr);
    }
    stepWithEvents(t, e, r, n, a, c, l, _, h, u, w, b, f, R) {
      d(t, p), d(e, Ut), d(r, Tt), d(n, It), d(a, et), d(c, K), d(l, Y), d(_, zt), d(h, kt), d(u, mr), d(w, wn), s.rawphysicspipeline_stepWithEvents(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr, u.__wbg_ptr, w.__wbg_ptr, J(b), J(f), J(R));
    }
  }
  const gi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawpidcontroller_free(i >>> 0, 1));
  class Ea {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, gi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawpidcontroller_free(t, 0);
    }
    constructor(t, e, r, n) {
      const a = s.rawpidcontroller_new(t, e, r, n);
      return this.__wbg_ptr = a >>> 0, gi.register(this, this.__wbg_ptr, this), this;
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
    apply_linear_correction(t, e, r, n, a) {
      d(e, K), d(n, p), d(a, p), s.rawpidcontroller_apply_linear_correction(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, a.__wbg_ptr);
    }
    apply_angular_correction(t, e, r, n, a) {
      d(e, K), d(n, L), d(a, p), s.rawpidcontroller_apply_angular_correction(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, a.__wbg_ptr);
    }
    linear_correction(t, e, r, n, a) {
      d(e, K), d(n, p), d(a, p);
      const c = s.rawpidcontroller_linear_correction(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, a.__wbg_ptr);
      return p.__wrap(c);
    }
    angular_correction(t, e, r, n, a) {
      d(e, K), d(n, L), d(a, p);
      const c = s.rawpidcontroller_angular_correction(this.__wbg_ptr, t, e.__wbg_ptr, r, n.__wbg_ptr, a.__wbg_ptr);
      return p.__wrap(c);
    }
  }
  const bi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawpointcolliderprojection_free(i >>> 0, 1));
  class Ae {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ae.prototype);
      return e.__wbg_ptr = t, bi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, bi.unregister(this), t;
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
  const mi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawpointprojection_free(i >>> 0, 1));
  class He {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(He.prototype);
      return e.__wbg_ptr = t, mi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, mi.unregister(this), t;
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
  const fi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawraycolliderhit_free(i >>> 0, 1));
  class kr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(kr.prototype);
      return e.__wbg_ptr = t, fi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, fi.unregister(this), t;
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
  const yi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawraycolliderintersection_free(i >>> 0, 1));
  class Ge {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ge.prototype);
      return e.__wbg_ptr = t, yi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, yi.unregister(this), t;
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
  const vi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawrayintersection_free(i >>> 0, 1));
  class We {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(We.prototype);
      return e.__wbg_ptr = t, vi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, vi.unregister(this), t;
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
  const lr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawrigidbodyset_free(i >>> 0, 1));
  class K {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(K.prototype);
      return e.__wbg_ptr = t, lr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, lr.unregister(this), t;
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
    rbSetTranslation(t, e, r, n, a) {
      s.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr, t, e, r, n, a);
    }
    rbSetRotation(t, e, r, n, a, c) {
      s.rawrigidbodyset_rbSetRotation(this.__wbg_ptr, t, e, r, n, a, c);
    }
    rbSetLinvel(t, e, r) {
      d(e, p), s.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbSetAngvel(t, e, r) {
      d(e, p), s.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr, t, e.__wbg_ptr, r);
    }
    rbSetNextKinematicTranslation(t, e, r, n) {
      s.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr, t, e, r, n);
    }
    rbSetNextKinematicRotation(t, e, r, n, a) {
      s.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr, t, e, r, n, a);
    }
    rbRecomputeMassPropertiesFromColliders(t, e) {
      d(e, Y), s.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr, t, e.__wbg_ptr);
    }
    rbSetAdditionalMass(t, e, r) {
      s.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr, t, e, r);
    }
    rbSetAdditionalMassProperties(t, e, r, n, a, c) {
      d(r, p), d(n, p), d(a, L), s.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr, t, e, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c);
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
    rbSetEnabledTranslations(t, e, r, n, a) {
      s.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr, t, e, r, n, a);
    }
    rbLockRotations(t, e, r) {
      s.rawrigidbodyset_rbLockRotations(this.__wbg_ptr, t, e, r);
    }
    rbSetEnabledRotations(t, e, r, n, a) {
      s.rawrigidbodyset_rbSetEnabledRotations(this.__wbg_ptr, t, e, r, n, a);
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
    rbInvPrincipalInertia(t) {
      const e = s.rawrigidbodyset_rbInvPrincipalInertia(this.__wbg_ptr, t);
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
    rbEffectiveWorldInvInertia(t) {
      const e = s.rawrigidbodyset_rbEffectiveWorldInvInertia(this.__wbg_ptr, t);
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
    rbAddForceAtPoint(t, e, r, n) {
      d(e, p), d(r, p), s.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n);
    }
    rbApplyImpulseAtPoint(t, e, r, n) {
      d(e, p), d(r, p), s.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n);
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
      return this.__wbg_ptr = t >>> 0, lr.register(this, this.__wbg_ptr, this), this;
    }
    createRigidBody(t, e, r, n, a, c, l, _, h, u, w, b, f, R, T, j, I, v, S, x, bt, ut, Z, Dt, Rt, Et) {
      return d(e, p), d(r, L), d(l, p), d(_, p), d(h, p), d(u, p), d(w, L), s.rawrigidbodyset_createRigidBody(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n, a, c, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr, u.__wbg_ptr, w.__wbg_ptr, b, f, R, T, j, I, v, S, x, bt, ut, Z, Dt, Rt, Et);
    }
    remove(t, e, r, n, a) {
      d(e, Tt), d(r, Y), d(n, zt), d(a, kt), s.rawrigidbodyset_remove(this.__wbg_ptr, t, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr);
    }
    len() {
      return s.rawrigidbodyset_len(this.__wbg_ptr) >>> 0;
    }
    contains(t) {
      return s.rawrigidbodyset_contains(this.__wbg_ptr, t) !== 0;
    }
    forEachRigidBodyHandle(t) {
      try {
        s.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr, $(t));
      } finally {
        H[U++] = void 0;
      }
    }
    propagateModifiedBodyPositionsToColliders(t) {
      d(t, Y), s.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  const _r = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawrotation_free(i >>> 0, 1));
  class L {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(L.prototype);
      return e.__wbg_ptr = t, _r.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, _r.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawrotation_free(t, 0);
    }
    constructor(t, e, r, n) {
      const a = s.rawrotation_new(t, e, r, n);
      return this.__wbg_ptr = a >>> 0, _r.register(this, this.__wbg_ptr, this), this;
    }
    static identity() {
      const t = s.rawrotation_identity();
      return L.__wrap(t);
    }
    get x() {
      return s.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    get y() {
      return s.rawkinematiccharactercontroller_offset(this.__wbg_ptr);
    }
    get z() {
      return s.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    get w() {
      return s.rawrotation_w(this.__wbg_ptr);
    }
  }
  const Ri = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawsdpmatrix3_free(i >>> 0, 1));
  class Ie {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ie.prototype);
      return e.__wbg_ptr = t, Ri.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ri.unregister(this), t;
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
  const Si = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawserializationpipeline_free(i >>> 0, 1));
  class Pa {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Si.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawserializationpipeline_free(t, 0);
    }
    constructor() {
      const t = s.rawccdsolver_new();
      return this.__wbg_ptr = t >>> 0, Si.register(this, this.__wbg_ptr, this), this;
    }
    serializeAll(t, e, r, n, a, c, l, _, h) {
      d(t, p), d(e, Ut), d(r, Tt), d(n, It), d(a, et), d(c, K), d(l, Y), d(_, zt), d(h, kt);
      const u = s.rawserializationpipeline_serializeAll(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _.__wbg_ptr, h.__wbg_ptr);
      return me(u);
    }
    deserializeAll(t) {
      const e = s.rawserializationpipeline_deserializeAll(this.__wbg_ptr, J(t));
      return e === 0 ? void 0 : Tr.__wrap(e);
    }
  }
  const Ci = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawshape_free(i >>> 0, 1));
  class k {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(k.prototype);
      return e.__wbg_ptr = t, Ci.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ci.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawshape_free(t, 0);
    }
    static cuboid(t, e, r) {
      const n = s.rawshape_cuboid(t, e, r);
      return k.__wrap(n);
    }
    static roundCuboid(t, e, r, n) {
      const a = s.rawshape_roundCuboid(t, e, r, n);
      return k.__wrap(a);
    }
    static ball(t) {
      const e = s.rawshape_ball(t);
      return k.__wrap(e);
    }
    static halfspace(t) {
      d(t, p);
      const e = s.rawshape_halfspace(t.__wbg_ptr);
      return k.__wrap(e);
    }
    static capsule(t, e) {
      const r = s.rawshape_capsule(t, e);
      return k.__wrap(r);
    }
    static cylinder(t, e) {
      const r = s.rawshape_cylinder(t, e);
      return k.__wrap(r);
    }
    static roundCylinder(t, e, r) {
      const n = s.rawshape_roundCylinder(t, e, r);
      return k.__wrap(n);
    }
    static cone(t, e) {
      const r = s.rawshape_cone(t, e);
      return k.__wrap(r);
    }
    static roundCone(t, e, r) {
      const n = s.rawshape_roundCone(t, e, r);
      return k.__wrap(n);
    }
    static voxels(t, e) {
      d(t, p);
      const r = de(e, s.__wbindgen_export_2), n = _t, a = s.rawshape_voxels(t.__wbg_ptr, r, n);
      return k.__wrap(a);
    }
    static voxelsFromPoints(t, e) {
      d(t, p);
      const r = Bt(e, s.__wbindgen_export_2), n = _t, a = s.rawshape_voxelsFromPoints(t.__wbg_ptr, r, n);
      return k.__wrap(a);
    }
    static polyline(t, e) {
      const r = Bt(t, s.__wbindgen_export_2), n = _t, a = de(e, s.__wbindgen_export_2), c = _t, l = s.rawshape_polyline(r, n, a, c);
      return k.__wrap(l);
    }
    static trimesh(t, e, r) {
      const n = Bt(t, s.__wbindgen_export_2), a = _t, c = de(e, s.__wbindgen_export_2), l = _t, _ = s.rawshape_trimesh(n, a, c, l, r);
      return _ === 0 ? void 0 : k.__wrap(_);
    }
    static heightfield(t, e, r, n, a) {
      const c = Bt(r, s.__wbindgen_export_2), l = _t;
      d(n, p);
      const _ = s.rawshape_heightfield(t, e, c, l, n.__wbg_ptr, a);
      return k.__wrap(_);
    }
    static segment(t, e) {
      d(t, p), d(e, p);
      const r = s.rawshape_segment(t.__wbg_ptr, e.__wbg_ptr);
      return k.__wrap(r);
    }
    static triangle(t, e, r) {
      d(t, p), d(e, p), d(r, p);
      const n = s.rawshape_triangle(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr);
      return k.__wrap(n);
    }
    static roundTriangle(t, e, r, n) {
      d(t, p), d(e, p), d(r, p);
      const a = s.rawshape_roundTriangle(t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n);
      return k.__wrap(a);
    }
    static convexHull(t) {
      const e = Bt(t, s.__wbindgen_export_2), r = _t, n = s.rawshape_convexHull(e, r);
      return n === 0 ? void 0 : k.__wrap(n);
    }
    static roundConvexHull(t, e) {
      const r = Bt(t, s.__wbindgen_export_2), n = _t, a = s.rawshape_roundConvexHull(r, n, e);
      return a === 0 ? void 0 : k.__wrap(a);
    }
    static convexMesh(t, e) {
      const r = Bt(t, s.__wbindgen_export_2), n = _t, a = de(e, s.__wbindgen_export_2), c = _t, l = s.rawshape_convexMesh(r, n, a, c);
      return l === 0 ? void 0 : k.__wrap(l);
    }
    static roundConvexMesh(t, e, r) {
      const n = Bt(t, s.__wbindgen_export_2), a = _t, c = de(e, s.__wbindgen_export_2), l = _t, _ = s.rawshape_roundConvexMesh(n, a, c, l, r);
      return _ === 0 ? void 0 : k.__wrap(_);
    }
    castShape(t, e, r, n, a, c, l, _, h, u) {
      d(t, p), d(e, L), d(r, p), d(n, k), d(a, p), d(c, L), d(l, p);
      const w = s.rawshape_castShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, _, h, u);
      return w === 0 ? void 0 : Ve.__wrap(w);
    }
    intersectsShape(t, e, r, n, a) {
      return d(t, p), d(e, L), d(r, k), d(n, p), d(a, L), s.rawshape_intersectsShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr) !== 0;
    }
    contactShape(t, e, r, n, a, c) {
      d(t, p), d(e, L), d(r, k), d(n, p), d(a, L);
      const l = s.rawshape_contactShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a.__wbg_ptr, c);
      return l === 0 ? void 0 : fe.__wrap(l);
    }
    containsPoint(t, e, r) {
      return d(t, p), d(e, L), d(r, p), s.rawshape_containsPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr) !== 0;
    }
    projectPoint(t, e, r, n) {
      d(t, p), d(e, L), d(r, p);
      const a = s.rawshape_projectPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n);
      return He.__wrap(a);
    }
    intersectsRay(t, e, r, n, a) {
      return d(t, p), d(e, L), d(r, p), d(n, p), s.rawshape_intersectsRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a) !== 0;
    }
    castRay(t, e, r, n, a, c) {
      return d(t, p), d(e, L), d(r, p), d(n, p), s.rawshape_castRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a, c);
    }
    castRayAndGetNormal(t, e, r, n, a, c) {
      d(t, p), d(e, L), d(r, p), d(n, p);
      const l = s.rawshape_castRayAndGetNormal(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, r.__wbg_ptr, n.__wbg_ptr, a, c);
      return l === 0 ? void 0 : We.__wrap(l);
    }
  }
  const xi = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawshapecasthit_free(i >>> 0, 1));
  class Ve {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ve.prototype);
      return e.__wbg_ptr = t, xi.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, xi.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      s.__wbg_rawshapecasthit_free(t, 0);
    }
    time_of_impact() {
      return s.rawintegrationparameters_dt(this.__wbg_ptr);
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
  const Ei = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawshapecontact_free(i >>> 0, 1));
  class fe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(fe.prototype);
      return e.__wbg_ptr = t, Ei.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ei.unregister(this), t;
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
  const dr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((i) => s.__wbg_rawvector_free(i >>> 0, 1));
  class p {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(p.prototype);
      return e.__wbg_ptr = t, dr.register(e, e.__wbg_ptr, e), e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, dr.unregister(this), t;
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
      const n = s.rawvector_new(t, e, r);
      return this.__wbg_ptr = n >>> 0, dr.register(this, this.__wbg_ptr, this), this;
    }
    get x() {
      return s.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    set x(t) {
      s.rawintegrationparameters_set_dt(this.__wbg_ptr, t);
    }
    get y() {
      return s.rawkinematiccharactercontroller_offset(this.__wbg_ptr);
    }
    set y(t) {
      s.rawvector_set_y(this.__wbg_ptr, t);
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
  function ja(i, t, e, r) {
    const n = O(i).bind(O(t), O(e), O(r));
    return J(n);
  }
  function Aa(i) {
    const t = O(i).buffer;
    return J(t);
  }
  function Ia() {
    return Be(function(i, t) {
      const e = O(i).call(O(t));
      return J(e);
    }, arguments);
  }
  function za() {
    return Be(function(i, t, e) {
      const r = O(i).call(O(t), O(e));
      return J(r);
    }, arguments);
  }
  function Ta() {
    return Be(function(i, t, e, r) {
      const n = O(i).call(O(t), O(e), O(r));
      return J(n);
    }, arguments);
  }
  function ka() {
    return Be(function(i, t, e, r, n) {
      const a = O(i).call(O(t), O(e), O(r), O(n));
      return J(a);
    }, arguments);
  }
  function Da(i) {
    return O(i).length;
  }
  function Fa(i) {
    return O(i).length;
  }
  function Ma(i) {
    const t = new Uint8Array(O(i));
    return J(t);
  }
  function La(i, t) {
    const e = new Function(ln(i, t));
    return J(e);
  }
  function Ba(i, t, e) {
    const r = new Uint8Array(O(i), t >>> 0, e >>> 0);
    return J(r);
  }
  function Na(i, t, e) {
    const r = new Float32Array(O(i), t >>> 0, e >>> 0);
    return J(r);
  }
  function Oa(i) {
    const t = new Float32Array(i >>> 0);
    return J(t);
  }
  function Ha(i) {
    return O(i).now();
  }
  function Ga(i) {
    const t = O(i).performance;
    return J(t);
  }
  function Wa(i) {
    const t = Ar.__wrap(i);
    return J(t);
  }
  function Va(i) {
    const t = Ge.__wrap(i);
    return J(t);
  }
  function Ua(i, t, e) {
    O(i).set(O(t), e >>> 0);
  }
  function Ja(i, t, e) {
    O(i).set(O(t), e >>> 0);
  }
  function Ka() {
    const i = typeof global > "u" ? null : global;
    return D(i) ? 0 : J(i);
  }
  function qa() {
    const i = typeof globalThis > "u" ? null : globalThis;
    return D(i) ? 0 : J(i);
  }
  function $a() {
    const i = typeof self > "u" ? null : self;
    return D(i) ? 0 : J(i);
  }
  function Xa() {
    const i = typeof window > "u" ? null : window;
    return D(i) ? 0 : J(i);
  }
  function Ya(i) {
    const t = O(i);
    return typeof t == "boolean" ? t ? 1 : 0 : 2;
  }
  function Qa(i) {
    return typeof O(i) == "function";
  }
  function Za(i) {
    return O(i) === void 0;
  }
  function to() {
    const i = s.memory;
    return J(i);
  }
  function eo(i, t) {
    const e = O(t), r = typeof e == "number" ? e : void 0;
    at().setFloat64(i + 8, D(r) ? 0 : r, true), at().setInt32(i + 0, !D(r), true);
  }
  function ro(i) {
    return J(i);
  }
  function io(i) {
    const t = O(i);
    return J(t);
  }
  function no(i) {
    me(i);
  }
  function so(i, t) {
    throw new Error(ln(i, t));
  }
  URL = globalThis.URL;
  const o = await ua({
    "./rapier_wasm3d_bg.js": {
      __wbindgen_number_new: ro,
      __wbindgen_boolean_get: Ya,
      __wbindgen_object_drop_ref: no,
      __wbindgen_number_get: eo,
      __wbindgen_is_function: Qa,
      __wbg_rawraycolliderintersection_new: Va,
      __wbg_rawcontactforceevent_new: Wa,
      __wbg_performance_7a3ffd0b17f663ad: Ga,
      __wbindgen_is_undefined: Za,
      __wbg_now_2c95c9de01293173: Ha,
      __wbindgen_object_clone_ref: io,
      __wbg_newnoargs_105ed471475aaf50: La,
      __wbg_call_672a4d21634d4a24: Ia,
      __wbg_call_7cccdd69e0791ae2: za,
      __wbg_call_833bed5770ea2041: Ta,
      __wbg_call_b8adc8b1d0a0d8eb: ka,
      __wbg_bind_c8359b1cba058168: ja,
      __wbg_buffer_609cc3eee51ed158: Aa,
      __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0: qa,
      __wbg_static_accessor_SELF_37c5d418e4bf5819: $a,
      __wbg_static_accessor_WINDOW_5de37043a91a9c40: Xa,
      __wbg_static_accessor_GLOBAL_88a902d13a557d07: Ka,
      __wbg_newwithbyteoffsetandlength_d97e637ebe145a9a: Ba,
      __wbg_new_a12002a7f91c75be: Ma,
      __wbg_set_65595bdd868b3009: Ja,
      __wbg_length_a446193dc22c12f8: Fa,
      __wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354: Na,
      __wbg_set_10bad9bee0e9c58b: Ua,
      __wbg_length_3b4f022188ae8db6: Da,
      __wbg_newwithlength_5a5efe313cfd59f1: Oa,
      __wbindgen_throw: so,
      __wbindgen_memory: to
    }
  }, wa), ao = o.memory, oo = o.version, co = o.__wbg_rawkinematiccharactercontroller_free, lo = o.rawkinematiccharactercontroller_new, _o = o.rawkinematiccharactercontroller_setUp, ho = o.rawkinematiccharactercontroller_normalNudgeFactor, wo = o.rawkinematiccharactercontroller_setNormalNudgeFactor, uo = o.rawkinematiccharactercontroller_offset, po = o.rawkinematiccharactercontroller_setOffset, go = o.rawkinematiccharactercontroller_slideEnabled, bo = o.rawkinematiccharactercontroller_setSlideEnabled, mo = o.rawkinematiccharactercontroller_autostepMaxHeight, fo = o.rawkinematiccharactercontroller_autostepMinWidth, yo = o.rawkinematiccharactercontroller_autostepIncludesDynamicBodies, vo = o.rawkinematiccharactercontroller_autostepEnabled, Ro = o.rawkinematiccharactercontroller_enableAutostep, So = o.rawkinematiccharactercontroller_disableAutostep, Co = o.rawkinematiccharactercontroller_maxSlopeClimbAngle, xo = o.rawkinematiccharactercontroller_setMaxSlopeClimbAngle, Eo = o.rawkinematiccharactercontroller_minSlopeSlideAngle, Po = o.rawkinematiccharactercontroller_setMinSlopeSlideAngle, jo = o.rawkinematiccharactercontroller_snapToGroundDistance, Ao = o.rawkinematiccharactercontroller_enableSnapToGround, Io = o.rawkinematiccharactercontroller_disableSnapToGround, zo = o.rawkinematiccharactercontroller_snapToGroundEnabled, To = o.rawkinematiccharactercontroller_computeColliderMovement, ko = o.rawkinematiccharactercontroller_computedMovement, Do = o.rawkinematiccharactercontroller_computedGrounded, Fo = o.rawkinematiccharactercontroller_numComputedCollisions, Mo = o.rawkinematiccharactercontroller_computedCollision, Lo = o.__wbg_rawcharactercollision_free, Bo = o.rawcharactercollision_new, No = o.rawcharactercollision_handle, Oo = o.rawcharactercollision_translationDeltaApplied, Ho = o.rawcharactercollision_translationDeltaRemaining, Go = o.rawcharactercollision_toi, Wo = o.rawcharactercollision_worldWitness1, Vo = o.rawcharactercollision_worldWitness2, Uo = o.rawcharactercollision_worldNormal1, Jo = o.rawcharactercollision_worldNormal2, Ko = o.__wbg_rawpidcontroller_free, qo = o.rawpidcontroller_new, $o = o.rawpidcontroller_set_kp, Xo = o.rawpidcontroller_set_ki, Yo = o.rawpidcontroller_set_kd, Qo = o.rawpidcontroller_set_axes_mask, Zo = o.rawpidcontroller_reset_integrals, tc = o.rawpidcontroller_apply_linear_correction, ec = o.rawpidcontroller_apply_angular_correction, rc = o.rawpidcontroller_linear_correction, ic = o.rawpidcontroller_angular_correction, nc = o.__wbg_rawdynamicraycastvehiclecontroller_free, sc = o.rawdynamicraycastvehiclecontroller_new, ac = o.rawdynamicraycastvehiclecontroller_current_vehicle_speed, oc = o.rawdynamicraycastvehiclecontroller_chassis, cc = o.rawdynamicraycastvehiclecontroller_index_up_axis, lc = o.rawdynamicraycastvehiclecontroller_set_index_up_axis, _c = o.rawdynamicraycastvehiclecontroller_index_forward_axis, dc = o.rawdynamicraycastvehiclecontroller_set_index_forward_axis, hc = o.rawdynamicraycastvehiclecontroller_add_wheel, wc = o.rawdynamicraycastvehiclecontroller_num_wheels, uc = o.rawdynamicraycastvehiclecontroller_update_vehicle, pc = o.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs, gc = o.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs, bc = o.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length, mc = o.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length, fc = o.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel, yc = o.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel, vc = o.rawdynamicraycastvehiclecontroller_wheel_radius, Rc = o.rawdynamicraycastvehiclecontroller_set_wheel_radius, Sc = o.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness, Cc = o.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness, xc = o.rawdynamicraycastvehiclecontroller_wheel_suspension_compression, Ec = o.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression, Pc = o.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation, jc = o.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation, Ac = o.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force, Ic = o.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force, zc = o.rawdynamicraycastvehiclecontroller_wheel_brake, Tc = o.rawdynamicraycastvehiclecontroller_set_wheel_brake, kc = o.rawdynamicraycastvehiclecontroller_wheel_steering, Dc = o.rawdynamicraycastvehiclecontroller_set_wheel_steering, Fc = o.rawdynamicraycastvehiclecontroller_wheel_engine_force, Mc = o.rawdynamicraycastvehiclecontroller_set_wheel_engine_force, Lc = o.rawdynamicraycastvehiclecontroller_wheel_direction_cs, Bc = o.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs, Nc = o.rawdynamicraycastvehiclecontroller_wheel_axle_cs, Oc = o.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs, Hc = o.rawdynamicraycastvehiclecontroller_wheel_friction_slip, Gc = o.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip, Wc = o.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness, Vc = o.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness, Uc = o.rawdynamicraycastvehiclecontroller_wheel_rotation, Jc = o.rawdynamicraycastvehiclecontroller_wheel_forward_impulse, Kc = o.rawdynamicraycastvehiclecontroller_wheel_side_impulse, qc = o.rawdynamicraycastvehiclecontroller_wheel_suspension_force, $c = o.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws, Xc = o.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws, Yc = o.rawdynamicraycastvehiclecontroller_wheel_suspension_length, Qc = o.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws, Zc = o.rawdynamicraycastvehiclecontroller_wheel_is_in_contact, tl = o.rawdynamicraycastvehiclecontroller_wheel_ground_object, el = o.__wbg_rawccdsolver_free, rl = o.rawimpulsejointset_jointType, il = o.rawimpulsejointset_jointBodyHandle1, nl = o.rawimpulsejointset_jointBodyHandle2, sl = o.rawimpulsejointset_jointFrameX1, al = o.rawimpulsejointset_jointFrameX2, ol = o.rawimpulsejointset_jointAnchor1, cl = o.rawimpulsejointset_jointAnchor2, ll = o.rawimpulsejointset_jointSetAnchor1, _l = o.rawimpulsejointset_jointSetAnchor2, dl = o.rawimpulsejointset_jointContactsEnabled, hl = o.rawimpulsejointset_jointSetContactsEnabled, wl = o.rawimpulsejointset_jointLimitsEnabled, ul = o.rawimpulsejointset_jointLimitsMin, pl = o.rawimpulsejointset_jointLimitsMax, gl = o.rawimpulsejointset_jointSetLimits, bl = o.rawimpulsejointset_jointConfigureMotorModel, ml = o.rawimpulsejointset_jointConfigureMotorVelocity, fl = o.rawimpulsejointset_jointConfigureMotorPosition, yl = o.rawimpulsejointset_jointConfigureMotor, vl = o.__wbg_rawimpulsejointset_free, Rl = o.rawimpulsejointset_new, Sl = o.rawimpulsejointset_createJoint, Cl = o.rawimpulsejointset_remove, xl = o.rawimpulsejointset_len, El = o.rawimpulsejointset_contains, Pl = o.rawimpulsejointset_forEachJointHandle, jl = o.rawimpulsejointset_forEachJointAttachedToRigidBody, Al = o.__wbg_rawintegrationparameters_free, Il = o.rawintegrationparameters_new, zl = o.rawintegrationparameters_dt, Tl = o.rawintegrationparameters_contact_erp, kl = o.rawintegrationparameters_normalizedAllowedLinearError, Dl = o.rawintegrationparameters_normalizedPredictionDistance, Fl = o.rawintegrationparameters_numSolverIterations, Ml = o.rawintegrationparameters_minIslandSize, Ll = o.rawintegrationparameters_maxCcdSubsteps, Bl = o.rawintegrationparameters_set_dt, Nl = o.rawintegrationparameters_set_contact_natural_frequency, Ol = o.rawintegrationparameters_set_normalizedAllowedLinearError, Hl = o.rawintegrationparameters_set_normalizedPredictionDistance, Gl = o.rawintegrationparameters_set_numSolverIterations, Wl = o.rawintegrationparameters_set_minIslandSize, Vl = o.rawintegrationparameters_set_maxCcdSubsteps, Ul = o.rawintegrationparameters_set_lengthUnit, Jl = o.__wbg_rawislandmanager_free, Kl = o.rawislandmanager_new, ql = o.rawislandmanager_forEachActiveRigidBodyHandle, $l = o.__wbg_rawgenericjoint_free, Xl = o.rawgenericjoint_generic, Yl = o.rawgenericjoint_spring, Ql = o.rawgenericjoint_rope, Zl = o.rawgenericjoint_spherical, t_ = o.rawgenericjoint_prismatic, e_ = o.rawgenericjoint_fixed, r_ = o.rawgenericjoint_revolute, i_ = o.rawmultibodyjointset_jointType, n_ = o.rawmultibodyjointset_jointFrameX1, s_ = o.rawmultibodyjointset_jointFrameX2, a_ = o.rawmultibodyjointset_jointAnchor1, o_ = o.rawmultibodyjointset_jointAnchor2, c_ = o.rawmultibodyjointset_jointContactsEnabled, l_ = o.rawmultibodyjointset_jointSetContactsEnabled, __ = o.rawmultibodyjointset_jointLimitsEnabled, d_ = o.rawmultibodyjointset_jointLimitsMin, h_ = o.rawmultibodyjointset_jointLimitsMax, w_ = o.__wbg_rawmultibodyjointset_free, u_ = o.rawmultibodyjointset_new, p_ = o.rawmultibodyjointset_createJoint, g_ = o.rawmultibodyjointset_remove, b_ = o.rawmultibodyjointset_contains, m_ = o.rawmultibodyjointset_forEachJointHandle, f_ = o.rawmultibodyjointset_forEachJointAttachedToRigidBody, y_ = o.rawrigidbodyset_rbTranslation, v_ = o.rawrigidbodyset_rbRotation, R_ = o.rawrigidbodyset_rbSleep, S_ = o.rawrigidbodyset_rbIsSleeping, C_ = o.rawrigidbodyset_rbIsMoving, x_ = o.rawrigidbodyset_rbNextTranslation, E_ = o.rawrigidbodyset_rbNextRotation, P_ = o.rawrigidbodyset_rbSetTranslation, j_ = o.rawrigidbodyset_rbSetRotation, A_ = o.rawrigidbodyset_rbSetLinvel, I_ = o.rawrigidbodyset_rbSetAngvel, z_ = o.rawrigidbodyset_rbSetNextKinematicTranslation, T_ = o.rawrigidbodyset_rbSetNextKinematicRotation, k_ = o.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders, D_ = o.rawrigidbodyset_rbSetAdditionalMass, F_ = o.rawrigidbodyset_rbSetAdditionalMassProperties, M_ = o.rawrigidbodyset_rbLinvel, L_ = o.rawrigidbodyset_rbAngvel, B_ = o.rawrigidbodyset_rbVelocityAtPoint, N_ = o.rawrigidbodyset_rbLockTranslations, O_ = o.rawrigidbodyset_rbSetEnabledTranslations, H_ = o.rawrigidbodyset_rbLockRotations, G_ = o.rawrigidbodyset_rbSetEnabledRotations, W_ = o.rawrigidbodyset_rbDominanceGroup, V_ = o.rawrigidbodyset_rbSetDominanceGroup, U_ = o.rawrigidbodyset_rbEnableCcd, J_ = o.rawrigidbodyset_rbSetSoftCcdPrediction, K_ = o.rawrigidbodyset_rbMass, q_ = o.rawrigidbodyset_rbInvMass, $_ = o.rawrigidbodyset_rbEffectiveInvMass, X_ = o.rawrigidbodyset_rbLocalCom, Y_ = o.rawrigidbodyset_rbWorldCom, Q_ = o.rawrigidbodyset_rbInvPrincipalInertia, Z_ = o.rawrigidbodyset_rbPrincipalInertiaLocalFrame, td = o.rawrigidbodyset_rbPrincipalInertia, ed = o.rawrigidbodyset_rbEffectiveWorldInvInertia, rd = o.rawrigidbodyset_rbEffectiveAngularInertia, id = o.rawrigidbodyset_rbWakeUp, nd = o.rawrigidbodyset_rbIsCcdEnabled, sd = o.rawrigidbodyset_rbSoftCcdPrediction, ad = o.rawrigidbodyset_rbNumColliders, od = o.rawrigidbodyset_rbCollider, cd = o.rawrigidbodyset_rbBodyType, ld = o.rawrigidbodyset_rbSetBodyType, _d = o.rawrigidbodyset_rbIsFixed, dd = o.rawrigidbodyset_rbIsKinematic, hd = o.rawrigidbodyset_rbIsDynamic, wd = o.rawrigidbodyset_rbLinearDamping, ud = o.rawrigidbodyset_rbAngularDamping, pd = o.rawrigidbodyset_rbSetLinearDamping, gd = o.rawrigidbodyset_rbSetAngularDamping, bd = o.rawrigidbodyset_rbSetEnabled, md = o.rawrigidbodyset_rbIsEnabled, fd = o.rawrigidbodyset_rbGravityScale, yd = o.rawrigidbodyset_rbSetGravityScale, vd = o.rawrigidbodyset_rbResetForces, Rd = o.rawrigidbodyset_rbResetTorques, Sd = o.rawrigidbodyset_rbAddForce, Cd = o.rawrigidbodyset_rbApplyImpulse, xd = o.rawrigidbodyset_rbAddTorque, Ed = o.rawrigidbodyset_rbApplyTorqueImpulse, Pd = o.rawrigidbodyset_rbAddForceAtPoint, jd = o.rawrigidbodyset_rbApplyImpulseAtPoint, Ad = o.rawrigidbodyset_rbAdditionalSolverIterations, Id = o.rawrigidbodyset_rbSetAdditionalSolverIterations, zd = o.rawrigidbodyset_rbUserData, Td = o.rawrigidbodyset_rbSetUserData, kd = o.rawrigidbodyset_rbUserForce, Dd = o.rawrigidbodyset_rbUserTorque, Fd = o.__wbg_rawrigidbodyset_free, Md = o.rawrigidbodyset_new, Ld = o.rawrigidbodyset_createRigidBody, Bd = o.rawrigidbodyset_remove, Nd = o.rawrigidbodyset_len, Od = o.rawrigidbodyset_contains, Hd = o.rawrigidbodyset_forEachRigidBodyHandle, Gd = o.rawrigidbodyset_propagateModifiedBodyPositionsToColliders, Wd = o.__wbg_rawbroadphase_free, Vd = o.rawbroadphase_new, Ud = o.rawbroadphase_castRay, Jd = o.rawbroadphase_castRayAndGetNormal, Kd = o.rawbroadphase_intersectionsWithRay, qd = o.rawbroadphase_intersectionWithShape, $d = o.rawbroadphase_projectPoint, Xd = o.rawbroadphase_projectPointAndGetFeature, Yd = o.rawbroadphase_intersectionsWithPoint, Qd = o.rawbroadphase_castShape, Zd = o.rawbroadphase_intersectionsWithShape, th = o.rawbroadphase_collidersWithAabbIntersectingAabb, eh = o.rawcolliderset_coTranslation, rh = o.rawcolliderset_coRotation, ih = o.rawcolliderset_coTranslationWrtParent, nh = o.rawcolliderset_coRotationWrtParent, sh = o.rawcolliderset_coSetTranslation, ah = o.rawcolliderset_coSetTranslationWrtParent, oh = o.rawcolliderset_coSetRotation, ch = o.rawcolliderset_coSetRotationWrtParent, lh = o.rawcolliderset_coIsSensor, _h = o.rawcolliderset_coShapeType, dh = o.rawcolliderset_coHalfspaceNormal, hh = o.rawcolliderset_coHalfExtents, wh = o.rawcolliderset_coSetHalfExtents, uh = o.rawcolliderset_coRadius, ph = o.rawcolliderset_coSetRadius, gh = o.rawcolliderset_coHalfHeight, bh = o.rawcolliderset_coSetHalfHeight, mh = o.rawcolliderset_coRoundRadius, fh = o.rawcolliderset_coSetRoundRadius, yh = o.rawcolliderset_coVoxelData, vh = o.rawcolliderset_coVoxelSize, Rh = o.rawcolliderset_coSetVoxel, Sh = o.rawcolliderset_coPropagateVoxelChange, Ch = o.rawcolliderset_coCombineVoxelStates, xh = o.rawcolliderset_coVertices, Eh = o.rawcolliderset_coIndices, Ph = o.rawcolliderset_coTriMeshFlags, jh = o.rawcolliderset_coHeightFieldFlags, Ah = o.rawcolliderset_coHeightfieldHeights, Ih = o.rawcolliderset_coHeightfieldScale, zh = o.rawcolliderset_coHeightfieldNRows, Th = o.rawcolliderset_coHeightfieldNCols, kh = o.rawcolliderset_coParent, Dh = o.rawcolliderset_coSetEnabled, Fh = o.rawcolliderset_coIsEnabled, Mh = o.rawcolliderset_coSetContactSkin, Lh = o.rawcolliderset_coContactSkin, Bh = o.rawcolliderset_coFriction, Nh = o.rawcolliderset_coRestitution, Oh = o.rawcolliderset_coDensity, Hh = o.rawcolliderset_coMass, Gh = o.rawcolliderset_coVolume, Wh = o.rawcolliderset_coCollisionGroups, Vh = o.rawcolliderset_coSolverGroups, Uh = o.rawcolliderset_coActiveHooks, Jh = o.rawcolliderset_coActiveCollisionTypes, Kh = o.rawcolliderset_coActiveEvents, qh = o.rawcolliderset_coContactForceEventThreshold, $h = o.rawcolliderset_coContainsPoint, Xh = o.rawcolliderset_coCastShape, Yh = o.rawcolliderset_coCastCollider, Qh = o.rawcolliderset_coIntersectsShape, Zh = o.rawcolliderset_coContactShape, tw = o.rawcolliderset_coContactCollider, ew = o.rawcolliderset_coProjectPoint, rw = o.rawcolliderset_coIntersectsRay, iw = o.rawcolliderset_coCastRay, nw = o.rawcolliderset_coCastRayAndGetNormal, sw = o.rawcolliderset_coSetSensor, aw = o.rawcolliderset_coSetRestitution, ow = o.rawcolliderset_coSetFriction, cw = o.rawcolliderset_coFrictionCombineRule, lw = o.rawcolliderset_coSetFrictionCombineRule, _w = o.rawcolliderset_coRestitutionCombineRule, dw = o.rawcolliderset_coSetRestitutionCombineRule, hw = o.rawcolliderset_coSetCollisionGroups, ww = o.rawcolliderset_coSetSolverGroups, uw = o.rawcolliderset_coSetActiveHooks, pw = o.rawcolliderset_coSetActiveEvents, gw = o.rawcolliderset_coSetActiveCollisionTypes, bw = o.rawcolliderset_coSetShape, mw = o.rawcolliderset_coSetContactForceEventThreshold, fw = o.rawcolliderset_coSetDensity, yw = o.rawcolliderset_coSetMass, vw = o.rawcolliderset_coSetMassProperties, Rw = o.__wbg_rawcolliderset_free, Sw = o.rawcolliderset_new, Cw = o.rawcolliderset_len, xw = o.rawcolliderset_contains, Ew = o.rawcolliderset_createCollider, Pw = o.rawcolliderset_remove, jw = o.rawcolliderset_forEachColliderHandle, Aw = o.__wbg_rawshapecontact_free, Iw = o.__wbg_rawnarrowphase_free, zw = o.rawnarrowphase_new, Tw = o.rawnarrowphase_contact_pairs_with, kw = o.rawnarrowphase_contact_pair, Dw = o.rawnarrowphase_intersection_pairs_with, Fw = o.rawnarrowphase_intersection_pair, Mw = o.__wbg_rawcontactmanifold_free, Lw = o.rawcontactpair_collider1, Bw = o.rawcontactpair_collider2, Nw = o.rawcontactpair_numContactManifolds, Ow = o.rawcontactpair_contactManifold, Hw = o.rawcontactmanifold_normal, Gw = o.rawcontactmanifold_local_n1, Ww = o.rawcontactmanifold_local_n2, Vw = o.rawcontactmanifold_subshape1, Uw = o.rawcontactmanifold_subshape2, Jw = o.rawcontactmanifold_num_contacts, Kw = o.rawcontactmanifold_contact_local_p1, qw = o.rawcontactmanifold_contact_local_p2, $w = o.rawcontactmanifold_contact_dist, Xw = o.rawcontactmanifold_contact_fid1, Yw = o.rawcontactmanifold_contact_fid2, Qw = o.rawcontactmanifold_contact_impulse, Zw = o.rawcontactmanifold_contact_tangent_impulse_x, tu = o.rawcontactmanifold_contact_tangent_impulse_y, eu = o.rawcontactmanifold_num_solver_contacts, ru = o.rawcontactmanifold_solver_contact_point, iu = o.rawcontactmanifold_solver_contact_dist, nu = o.rawcontactmanifold_solver_contact_friction, su = o.rawcontactmanifold_solver_contact_restitution, au = o.rawcontactmanifold_solver_contact_tangent_velocity, ou = o.__wbg_rawpointprojection_free, cu = o.rawpointprojection_point, lu = o.rawpointprojection_isInside, _u = o.__wbg_rawpointcolliderprojection_free, du = o.rawpointcolliderprojection_colliderHandle, hu = o.rawpointcolliderprojection_point, wu = o.rawpointcolliderprojection_isInside, uu = o.rawpointcolliderprojection_featureType, pu = o.rawpointcolliderprojection_featureId, gu = o.__wbg_rawrayintersection_free, bu = o.__wbg_rawraycolliderhit_free, mu = o.__wbg_rawshape_free, fu = o.rawshape_cuboid, yu = o.rawshape_roundCuboid, vu = o.rawshape_ball, Ru = o.rawshape_halfspace, Su = o.rawshape_capsule, Cu = o.rawshape_cylinder, xu = o.rawshape_roundCylinder, Eu = o.rawshape_cone, Pu = o.rawshape_roundCone, ju = o.rawshape_voxels, Au = o.rawshape_voxelsFromPoints, Iu = o.rawshape_polyline, zu = o.rawshape_trimesh, Tu = o.rawshape_heightfield, ku = o.rawshape_segment, Du = o.rawshape_triangle, Fu = o.rawshape_roundTriangle, Mu = o.rawshape_convexHull, Lu = o.rawshape_roundConvexHull, Bu = o.rawshape_convexMesh, Nu = o.rawshape_roundConvexMesh, Ou = o.rawshape_castShape, Hu = o.rawshape_intersectsShape, Gu = o.rawshape_contactShape, Wu = o.rawshape_containsPoint, Vu = o.rawshape_projectPoint, Uu = o.rawshape_intersectsRay, Ju = o.rawshape_castRay, Ku = o.rawshape_castRayAndGetNormal, qu = o.__wbg_rawshapecasthit_free, $u = o.rawshapecasthit_witness1, Xu = o.rawshapecasthit_normal1, Yu = o.rawshapecasthit_normal2, Qu = o.__wbg_rawcollidershapecasthit_free, Zu = o.rawcollidershapecasthit_time_of_impact, tp = o.rawcollidershapecasthit_witness1, ep = o.rawcollidershapecasthit_witness2, rp = o.rawrotation_new, ip = o.rawrotation_identity, np = o.rawrotation_w, sp = o.rawvector_zero, ap = o.rawvector_new, op = o.rawvector_set_y, cp = o.rawvector_set_z, lp = o.rawvector_xyz, _p = o.rawvector_yxz, dp = o.rawvector_zxy, hp = o.rawvector_xzy, wp = o.rawvector_yzx, up = o.rawvector_zyx, pp = o.rawsdpmatrix3_elements, gp = o.__wbg_rawdebugrenderpipeline_free, bp = o.rawdebugrenderpipeline_new, mp = o.rawdebugrenderpipeline_vertices, fp = o.rawdebugrenderpipeline_colors, yp = o.rawdebugrenderpipeline_render, vp = o.__wbg_raweventqueue_free, Rp = o.__wbg_rawcontactforceevent_free, Sp = o.rawcontactforceevent_collider2, Cp = o.rawcontactforceevent_total_force, xp = o.rawcontactforceevent_total_force_magnitude, Ep = o.rawcontactforceevent_max_force_direction, Pp = o.rawcontactforceevent_max_force_magnitude, jp = o.raweventqueue_new, Ap = o.raweventqueue_drainCollisionEvents, Ip = o.raweventqueue_drainContactForceEvents, zp = o.raweventqueue_clear, Tp = o.__wbg_rawphysicspipeline_free, kp = o.rawphysicspipeline_new, Dp = o.rawphysicspipeline_set_profiler_enabled, Fp = o.rawphysicspipeline_is_profiler_enabled, Mp = o.rawphysicspipeline_timing_step, Lp = o.rawphysicspipeline_timing_collision_detection, Bp = o.rawphysicspipeline_timing_broad_phase, Np = o.rawphysicspipeline_timing_narrow_phase, Op = o.rawphysicspipeline_timing_solver, Hp = o.rawphysicspipeline_timing_velocity_assembly, Gp = o.rawphysicspipeline_timing_velocity_resolution, Wp = o.rawphysicspipeline_timing_velocity_update, Vp = o.rawphysicspipeline_timing_velocity_writeback, Up = o.rawphysicspipeline_timing_ccd, Jp = o.rawphysicspipeline_timing_ccd_toi_computation, Kp = o.rawphysicspipeline_timing_ccd_broad_phase, qp = o.rawphysicspipeline_timing_ccd_narrow_phase, $p = o.rawphysicspipeline_timing_ccd_solver, Xp = o.rawphysicspipeline_timing_island_construction, Yp = o.rawphysicspipeline_timing_user_changes, Qp = o.rawphysicspipeline_step, Zp = o.rawphysicspipeline_stepWithEvents, tg = o.__wbg_rawdeserializedworld_free, eg = o.rawdeserializedworld_takeGravity, rg = o.rawdeserializedworld_takeIntegrationParameters, ig = o.rawdeserializedworld_takeIslandManager, ng = o.rawdeserializedworld_takeBroadPhase, sg = o.rawdeserializedworld_takeNarrowPhase, ag = o.rawdeserializedworld_takeBodies, og = o.rawdeserializedworld_takeColliders, cg = o.rawdeserializedworld_takeImpulseJoints, lg = o.rawdeserializedworld_takeMultibodyJoints, _g = o.rawserializationpipeline_serializeAll, dg = o.rawserializationpipeline_deserializeAll, hg = o.rawcolliderset_isHandleValid, wg = o.rawrayintersection_featureId, ug = o.rawraycolliderintersection_featureId, pg = o.rawintegrationparameters_set_numInternalPgsIterations, gg = o.rawvector_set_x, bg = o.reserve_memory, mg = o.rawkinematiccharactercontroller_up, fg = o.rawshapecontact_normal2, yg = o.rawshapecontact_point1, vg = o.rawshapecontact_point2, Rg = o.rawrayintersection_normal, Sg = o.rawraycolliderintersection_normal, Cg = o.rawshapecontact_normal1, xg = o.rawcollidershapecasthit_normal1, Eg = o.rawcollidershapecasthit_normal2, Pg = o.rawshapecasthit_witness2, jg = o.rawintegrationparameters_numInternalPgsIterations, Ag = o.rawshapecontact_distance, Ig = o.rawrayintersection_featureType, zg = o.rawraycolliderintersection_colliderHandle, Tg = o.rawrayintersection_time_of_impact, kg = o.rawraycolliderintersection_featureType, Dg = o.rawraycolliderhit_colliderHandle, Fg = o.rawraycolliderintersection_time_of_impact, Mg = o.rawshapecasthit_time_of_impact, Lg = o.rawcollidershapecasthit_colliderHandle, Bg = o.rawraycolliderhit_timeOfImpact, Ng = o.rawrotation_x, Og = o.rawrotation_y, Hg = o.rawrotation_z, Gg = o.rawvector_x, Wg = o.rawvector_y, Vg = o.rawvector_z, Ug = o.rawcontactforceevent_collider1, Jg = o.rawintegrationparameters_lengthUnit, Kg = o.__wbg_rawcontactpair_free, qg = o.__wbg_rawraycolliderintersection_free, $g = o.__wbg_rawrotation_free, Xg = o.__wbg_rawvector_free, Yg = o.__wbg_rawsdpmatrix3_free, Qg = o.__wbg_rawserializationpipeline_free, Zg = o.rawccdsolver_new, tb = o.rawserializationpipeline_new, eb = o.__wbindgen_export_0, rb = o.__wbindgen_add_to_stack_pointer, ib = o.__wbindgen_export_1, nb = o.__wbindgen_export_2, sb = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wbg_rawbroadphase_free: Wd,
    __wbg_rawccdsolver_free: el,
    __wbg_rawcharactercollision_free: Lo,
    __wbg_rawcolliderset_free: Rw,
    __wbg_rawcollidershapecasthit_free: Qu,
    __wbg_rawcontactforceevent_free: Rp,
    __wbg_rawcontactmanifold_free: Mw,
    __wbg_rawcontactpair_free: Kg,
    __wbg_rawdebugrenderpipeline_free: gp,
    __wbg_rawdeserializedworld_free: tg,
    __wbg_rawdynamicraycastvehiclecontroller_free: nc,
    __wbg_raweventqueue_free: vp,
    __wbg_rawgenericjoint_free: $l,
    __wbg_rawimpulsejointset_free: vl,
    __wbg_rawintegrationparameters_free: Al,
    __wbg_rawislandmanager_free: Jl,
    __wbg_rawkinematiccharactercontroller_free: co,
    __wbg_rawmultibodyjointset_free: w_,
    __wbg_rawnarrowphase_free: Iw,
    __wbg_rawphysicspipeline_free: Tp,
    __wbg_rawpidcontroller_free: Ko,
    __wbg_rawpointcolliderprojection_free: _u,
    __wbg_rawpointprojection_free: ou,
    __wbg_rawraycolliderhit_free: bu,
    __wbg_rawraycolliderintersection_free: qg,
    __wbg_rawrayintersection_free: gu,
    __wbg_rawrigidbodyset_free: Fd,
    __wbg_rawrotation_free: $g,
    __wbg_rawsdpmatrix3_free: Yg,
    __wbg_rawserializationpipeline_free: Qg,
    __wbg_rawshape_free: mu,
    __wbg_rawshapecasthit_free: qu,
    __wbg_rawshapecontact_free: Aw,
    __wbg_rawvector_free: Xg,
    __wbindgen_add_to_stack_pointer: rb,
    __wbindgen_export_0: eb,
    __wbindgen_export_1: ib,
    __wbindgen_export_2: nb,
    memory: ao,
    rawbroadphase_castRay: Ud,
    rawbroadphase_castRayAndGetNormal: Jd,
    rawbroadphase_castShape: Qd,
    rawbroadphase_collidersWithAabbIntersectingAabb: th,
    rawbroadphase_intersectionWithShape: qd,
    rawbroadphase_intersectionsWithPoint: Yd,
    rawbroadphase_intersectionsWithRay: Kd,
    rawbroadphase_intersectionsWithShape: Zd,
    rawbroadphase_new: Vd,
    rawbroadphase_projectPoint: $d,
    rawbroadphase_projectPointAndGetFeature: Xd,
    rawccdsolver_new: Zg,
    rawcharactercollision_handle: No,
    rawcharactercollision_new: Bo,
    rawcharactercollision_toi: Go,
    rawcharactercollision_translationDeltaApplied: Oo,
    rawcharactercollision_translationDeltaRemaining: Ho,
    rawcharactercollision_worldNormal1: Uo,
    rawcharactercollision_worldNormal2: Jo,
    rawcharactercollision_worldWitness1: Wo,
    rawcharactercollision_worldWitness2: Vo,
    rawcolliderset_coActiveCollisionTypes: Jh,
    rawcolliderset_coActiveEvents: Kh,
    rawcolliderset_coActiveHooks: Uh,
    rawcolliderset_coCastCollider: Yh,
    rawcolliderset_coCastRay: iw,
    rawcolliderset_coCastRayAndGetNormal: nw,
    rawcolliderset_coCastShape: Xh,
    rawcolliderset_coCollisionGroups: Wh,
    rawcolliderset_coCombineVoxelStates: Ch,
    rawcolliderset_coContactCollider: tw,
    rawcolliderset_coContactForceEventThreshold: qh,
    rawcolliderset_coContactShape: Zh,
    rawcolliderset_coContactSkin: Lh,
    rawcolliderset_coContainsPoint: $h,
    rawcolliderset_coDensity: Oh,
    rawcolliderset_coFriction: Bh,
    rawcolliderset_coFrictionCombineRule: cw,
    rawcolliderset_coHalfExtents: hh,
    rawcolliderset_coHalfHeight: gh,
    rawcolliderset_coHalfspaceNormal: dh,
    rawcolliderset_coHeightFieldFlags: jh,
    rawcolliderset_coHeightfieldHeights: Ah,
    rawcolliderset_coHeightfieldNCols: Th,
    rawcolliderset_coHeightfieldNRows: zh,
    rawcolliderset_coHeightfieldScale: Ih,
    rawcolliderset_coIndices: Eh,
    rawcolliderset_coIntersectsRay: rw,
    rawcolliderset_coIntersectsShape: Qh,
    rawcolliderset_coIsEnabled: Fh,
    rawcolliderset_coIsSensor: lh,
    rawcolliderset_coMass: Hh,
    rawcolliderset_coParent: kh,
    rawcolliderset_coProjectPoint: ew,
    rawcolliderset_coPropagateVoxelChange: Sh,
    rawcolliderset_coRadius: uh,
    rawcolliderset_coRestitution: Nh,
    rawcolliderset_coRestitutionCombineRule: _w,
    rawcolliderset_coRotation: rh,
    rawcolliderset_coRotationWrtParent: nh,
    rawcolliderset_coRoundRadius: mh,
    rawcolliderset_coSetActiveCollisionTypes: gw,
    rawcolliderset_coSetActiveEvents: pw,
    rawcolliderset_coSetActiveHooks: uw,
    rawcolliderset_coSetCollisionGroups: hw,
    rawcolliderset_coSetContactForceEventThreshold: mw,
    rawcolliderset_coSetContactSkin: Mh,
    rawcolliderset_coSetDensity: fw,
    rawcolliderset_coSetEnabled: Dh,
    rawcolliderset_coSetFriction: ow,
    rawcolliderset_coSetFrictionCombineRule: lw,
    rawcolliderset_coSetHalfExtents: wh,
    rawcolliderset_coSetHalfHeight: bh,
    rawcolliderset_coSetMass: yw,
    rawcolliderset_coSetMassProperties: vw,
    rawcolliderset_coSetRadius: ph,
    rawcolliderset_coSetRestitution: aw,
    rawcolliderset_coSetRestitutionCombineRule: dw,
    rawcolliderset_coSetRotation: oh,
    rawcolliderset_coSetRotationWrtParent: ch,
    rawcolliderset_coSetRoundRadius: fh,
    rawcolliderset_coSetSensor: sw,
    rawcolliderset_coSetShape: bw,
    rawcolliderset_coSetSolverGroups: ww,
    rawcolliderset_coSetTranslation: sh,
    rawcolliderset_coSetTranslationWrtParent: ah,
    rawcolliderset_coSetVoxel: Rh,
    rawcolliderset_coShapeType: _h,
    rawcolliderset_coSolverGroups: Vh,
    rawcolliderset_coTranslation: eh,
    rawcolliderset_coTranslationWrtParent: ih,
    rawcolliderset_coTriMeshFlags: Ph,
    rawcolliderset_coVertices: xh,
    rawcolliderset_coVolume: Gh,
    rawcolliderset_coVoxelData: yh,
    rawcolliderset_coVoxelSize: vh,
    rawcolliderset_contains: xw,
    rawcolliderset_createCollider: Ew,
    rawcolliderset_forEachColliderHandle: jw,
    rawcolliderset_isHandleValid: hg,
    rawcolliderset_len: Cw,
    rawcolliderset_new: Sw,
    rawcolliderset_remove: Pw,
    rawcollidershapecasthit_colliderHandle: Lg,
    rawcollidershapecasthit_normal1: xg,
    rawcollidershapecasthit_normal2: Eg,
    rawcollidershapecasthit_time_of_impact: Zu,
    rawcollidershapecasthit_witness1: tp,
    rawcollidershapecasthit_witness2: ep,
    rawcontactforceevent_collider1: Ug,
    rawcontactforceevent_collider2: Sp,
    rawcontactforceevent_max_force_direction: Ep,
    rawcontactforceevent_max_force_magnitude: Pp,
    rawcontactforceevent_total_force: Cp,
    rawcontactforceevent_total_force_magnitude: xp,
    rawcontactmanifold_contact_dist: $w,
    rawcontactmanifold_contact_fid1: Xw,
    rawcontactmanifold_contact_fid2: Yw,
    rawcontactmanifold_contact_impulse: Qw,
    rawcontactmanifold_contact_local_p1: Kw,
    rawcontactmanifold_contact_local_p2: qw,
    rawcontactmanifold_contact_tangent_impulse_x: Zw,
    rawcontactmanifold_contact_tangent_impulse_y: tu,
    rawcontactmanifold_local_n1: Gw,
    rawcontactmanifold_local_n2: Ww,
    rawcontactmanifold_normal: Hw,
    rawcontactmanifold_num_contacts: Jw,
    rawcontactmanifold_num_solver_contacts: eu,
    rawcontactmanifold_solver_contact_dist: iu,
    rawcontactmanifold_solver_contact_friction: nu,
    rawcontactmanifold_solver_contact_point: ru,
    rawcontactmanifold_solver_contact_restitution: su,
    rawcontactmanifold_solver_contact_tangent_velocity: au,
    rawcontactmanifold_subshape1: Vw,
    rawcontactmanifold_subshape2: Uw,
    rawcontactpair_collider1: Lw,
    rawcontactpair_collider2: Bw,
    rawcontactpair_contactManifold: Ow,
    rawcontactpair_numContactManifolds: Nw,
    rawdebugrenderpipeline_colors: fp,
    rawdebugrenderpipeline_new: bp,
    rawdebugrenderpipeline_render: yp,
    rawdebugrenderpipeline_vertices: mp,
    rawdeserializedworld_takeBodies: ag,
    rawdeserializedworld_takeBroadPhase: ng,
    rawdeserializedworld_takeColliders: og,
    rawdeserializedworld_takeGravity: eg,
    rawdeserializedworld_takeImpulseJoints: cg,
    rawdeserializedworld_takeIntegrationParameters: rg,
    rawdeserializedworld_takeIslandManager: ig,
    rawdeserializedworld_takeMultibodyJoints: lg,
    rawdeserializedworld_takeNarrowPhase: sg,
    rawdynamicraycastvehiclecontroller_add_wheel: hc,
    rawdynamicraycastvehiclecontroller_chassis: oc,
    rawdynamicraycastvehiclecontroller_current_vehicle_speed: ac,
    rawdynamicraycastvehiclecontroller_index_forward_axis: _c,
    rawdynamicraycastvehiclecontroller_index_up_axis: cc,
    rawdynamicraycastvehiclecontroller_new: sc,
    rawdynamicraycastvehiclecontroller_num_wheels: wc,
    rawdynamicraycastvehiclecontroller_set_index_forward_axis: dc,
    rawdynamicraycastvehiclecontroller_set_index_up_axis: lc,
    rawdynamicraycastvehiclecontroller_set_wheel_axle_cs: Oc,
    rawdynamicraycastvehiclecontroller_set_wheel_brake: Tc,
    rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs: gc,
    rawdynamicraycastvehiclecontroller_set_wheel_direction_cs: Bc,
    rawdynamicraycastvehiclecontroller_set_wheel_engine_force: Mc,
    rawdynamicraycastvehiclecontroller_set_wheel_friction_slip: Gc,
    rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force: Ic,
    rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel: yc,
    rawdynamicraycastvehiclecontroller_set_wheel_radius: Rc,
    rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness: Vc,
    rawdynamicraycastvehiclecontroller_set_wheel_steering: Dc,
    rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression: Ec,
    rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation: jc,
    rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length: mc,
    rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness: Cc,
    rawdynamicraycastvehiclecontroller_update_vehicle: uc,
    rawdynamicraycastvehiclecontroller_wheel_axle_cs: Nc,
    rawdynamicraycastvehiclecontroller_wheel_brake: zc,
    rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs: pc,
    rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws: $c,
    rawdynamicraycastvehiclecontroller_wheel_contact_point_ws: Xc,
    rawdynamicraycastvehiclecontroller_wheel_direction_cs: Lc,
    rawdynamicraycastvehiclecontroller_wheel_engine_force: Fc,
    rawdynamicraycastvehiclecontroller_wheel_forward_impulse: Jc,
    rawdynamicraycastvehiclecontroller_wheel_friction_slip: Hc,
    rawdynamicraycastvehiclecontroller_wheel_ground_object: tl,
    rawdynamicraycastvehiclecontroller_wheel_hard_point_ws: Qc,
    rawdynamicraycastvehiclecontroller_wheel_is_in_contact: Zc,
    rawdynamicraycastvehiclecontroller_wheel_max_suspension_force: Ac,
    rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel: fc,
    rawdynamicraycastvehiclecontroller_wheel_radius: vc,
    rawdynamicraycastvehiclecontroller_wheel_rotation: Uc,
    rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness: Wc,
    rawdynamicraycastvehiclecontroller_wheel_side_impulse: Kc,
    rawdynamicraycastvehiclecontroller_wheel_steering: kc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_compression: xc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_force: qc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_length: Yc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation: Pc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length: bc,
    rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness: Sc,
    raweventqueue_clear: zp,
    raweventqueue_drainCollisionEvents: Ap,
    raweventqueue_drainContactForceEvents: Ip,
    raweventqueue_new: jp,
    rawgenericjoint_fixed: e_,
    rawgenericjoint_generic: Xl,
    rawgenericjoint_prismatic: t_,
    rawgenericjoint_revolute: r_,
    rawgenericjoint_rope: Ql,
    rawgenericjoint_spherical: Zl,
    rawgenericjoint_spring: Yl,
    rawimpulsejointset_contains: El,
    rawimpulsejointset_createJoint: Sl,
    rawimpulsejointset_forEachJointAttachedToRigidBody: jl,
    rawimpulsejointset_forEachJointHandle: Pl,
    rawimpulsejointset_jointAnchor1: ol,
    rawimpulsejointset_jointAnchor2: cl,
    rawimpulsejointset_jointBodyHandle1: il,
    rawimpulsejointset_jointBodyHandle2: nl,
    rawimpulsejointset_jointConfigureMotor: yl,
    rawimpulsejointset_jointConfigureMotorModel: bl,
    rawimpulsejointset_jointConfigureMotorPosition: fl,
    rawimpulsejointset_jointConfigureMotorVelocity: ml,
    rawimpulsejointset_jointContactsEnabled: dl,
    rawimpulsejointset_jointFrameX1: sl,
    rawimpulsejointset_jointFrameX2: al,
    rawimpulsejointset_jointLimitsEnabled: wl,
    rawimpulsejointset_jointLimitsMax: pl,
    rawimpulsejointset_jointLimitsMin: ul,
    rawimpulsejointset_jointSetAnchor1: ll,
    rawimpulsejointset_jointSetAnchor2: _l,
    rawimpulsejointset_jointSetContactsEnabled: hl,
    rawimpulsejointset_jointSetLimits: gl,
    rawimpulsejointset_jointType: rl,
    rawimpulsejointset_len: xl,
    rawimpulsejointset_new: Rl,
    rawimpulsejointset_remove: Cl,
    rawintegrationparameters_contact_erp: Tl,
    rawintegrationparameters_dt: zl,
    rawintegrationparameters_lengthUnit: Jg,
    rawintegrationparameters_maxCcdSubsteps: Ll,
    rawintegrationparameters_minIslandSize: Ml,
    rawintegrationparameters_new: Il,
    rawintegrationparameters_normalizedAllowedLinearError: kl,
    rawintegrationparameters_normalizedPredictionDistance: Dl,
    rawintegrationparameters_numInternalPgsIterations: jg,
    rawintegrationparameters_numSolverIterations: Fl,
    rawintegrationparameters_set_contact_natural_frequency: Nl,
    rawintegrationparameters_set_dt: Bl,
    rawintegrationparameters_set_lengthUnit: Ul,
    rawintegrationparameters_set_maxCcdSubsteps: Vl,
    rawintegrationparameters_set_minIslandSize: Wl,
    rawintegrationparameters_set_normalizedAllowedLinearError: Ol,
    rawintegrationparameters_set_normalizedPredictionDistance: Hl,
    rawintegrationparameters_set_numInternalPgsIterations: pg,
    rawintegrationparameters_set_numSolverIterations: Gl,
    rawislandmanager_forEachActiveRigidBodyHandle: ql,
    rawislandmanager_new: Kl,
    rawkinematiccharactercontroller_autostepEnabled: vo,
    rawkinematiccharactercontroller_autostepIncludesDynamicBodies: yo,
    rawkinematiccharactercontroller_autostepMaxHeight: mo,
    rawkinematiccharactercontroller_autostepMinWidth: fo,
    rawkinematiccharactercontroller_computeColliderMovement: To,
    rawkinematiccharactercontroller_computedCollision: Mo,
    rawkinematiccharactercontroller_computedGrounded: Do,
    rawkinematiccharactercontroller_computedMovement: ko,
    rawkinematiccharactercontroller_disableAutostep: So,
    rawkinematiccharactercontroller_disableSnapToGround: Io,
    rawkinematiccharactercontroller_enableAutostep: Ro,
    rawkinematiccharactercontroller_enableSnapToGround: Ao,
    rawkinematiccharactercontroller_maxSlopeClimbAngle: Co,
    rawkinematiccharactercontroller_minSlopeSlideAngle: Eo,
    rawkinematiccharactercontroller_new: lo,
    rawkinematiccharactercontroller_normalNudgeFactor: ho,
    rawkinematiccharactercontroller_numComputedCollisions: Fo,
    rawkinematiccharactercontroller_offset: uo,
    rawkinematiccharactercontroller_setMaxSlopeClimbAngle: xo,
    rawkinematiccharactercontroller_setMinSlopeSlideAngle: Po,
    rawkinematiccharactercontroller_setNormalNudgeFactor: wo,
    rawkinematiccharactercontroller_setOffset: po,
    rawkinematiccharactercontroller_setSlideEnabled: bo,
    rawkinematiccharactercontroller_setUp: _o,
    rawkinematiccharactercontroller_slideEnabled: go,
    rawkinematiccharactercontroller_snapToGroundDistance: jo,
    rawkinematiccharactercontroller_snapToGroundEnabled: zo,
    rawkinematiccharactercontroller_up: mg,
    rawmultibodyjointset_contains: b_,
    rawmultibodyjointset_createJoint: p_,
    rawmultibodyjointset_forEachJointAttachedToRigidBody: f_,
    rawmultibodyjointset_forEachJointHandle: m_,
    rawmultibodyjointset_jointAnchor1: a_,
    rawmultibodyjointset_jointAnchor2: o_,
    rawmultibodyjointset_jointContactsEnabled: c_,
    rawmultibodyjointset_jointFrameX1: n_,
    rawmultibodyjointset_jointFrameX2: s_,
    rawmultibodyjointset_jointLimitsEnabled: __,
    rawmultibodyjointset_jointLimitsMax: h_,
    rawmultibodyjointset_jointLimitsMin: d_,
    rawmultibodyjointset_jointSetContactsEnabled: l_,
    rawmultibodyjointset_jointType: i_,
    rawmultibodyjointset_new: u_,
    rawmultibodyjointset_remove: g_,
    rawnarrowphase_contact_pair: kw,
    rawnarrowphase_contact_pairs_with: Tw,
    rawnarrowphase_intersection_pair: Fw,
    rawnarrowphase_intersection_pairs_with: Dw,
    rawnarrowphase_new: zw,
    rawphysicspipeline_is_profiler_enabled: Fp,
    rawphysicspipeline_new: kp,
    rawphysicspipeline_set_profiler_enabled: Dp,
    rawphysicspipeline_step: Qp,
    rawphysicspipeline_stepWithEvents: Zp,
    rawphysicspipeline_timing_broad_phase: Bp,
    rawphysicspipeline_timing_ccd: Up,
    rawphysicspipeline_timing_ccd_broad_phase: Kp,
    rawphysicspipeline_timing_ccd_narrow_phase: qp,
    rawphysicspipeline_timing_ccd_solver: $p,
    rawphysicspipeline_timing_ccd_toi_computation: Jp,
    rawphysicspipeline_timing_collision_detection: Lp,
    rawphysicspipeline_timing_island_construction: Xp,
    rawphysicspipeline_timing_narrow_phase: Np,
    rawphysicspipeline_timing_solver: Op,
    rawphysicspipeline_timing_step: Mp,
    rawphysicspipeline_timing_user_changes: Yp,
    rawphysicspipeline_timing_velocity_assembly: Hp,
    rawphysicspipeline_timing_velocity_resolution: Gp,
    rawphysicspipeline_timing_velocity_update: Wp,
    rawphysicspipeline_timing_velocity_writeback: Vp,
    rawpidcontroller_angular_correction: ic,
    rawpidcontroller_apply_angular_correction: ec,
    rawpidcontroller_apply_linear_correction: tc,
    rawpidcontroller_linear_correction: rc,
    rawpidcontroller_new: qo,
    rawpidcontroller_reset_integrals: Zo,
    rawpidcontroller_set_axes_mask: Qo,
    rawpidcontroller_set_kd: Yo,
    rawpidcontroller_set_ki: Xo,
    rawpidcontroller_set_kp: $o,
    rawpointcolliderprojection_colliderHandle: du,
    rawpointcolliderprojection_featureId: pu,
    rawpointcolliderprojection_featureType: uu,
    rawpointcolliderprojection_isInside: wu,
    rawpointcolliderprojection_point: hu,
    rawpointprojection_isInside: lu,
    rawpointprojection_point: cu,
    rawraycolliderhit_colliderHandle: Dg,
    rawraycolliderhit_timeOfImpact: Bg,
    rawraycolliderintersection_colliderHandle: zg,
    rawraycolliderintersection_featureId: ug,
    rawraycolliderintersection_featureType: kg,
    rawraycolliderintersection_normal: Sg,
    rawraycolliderintersection_time_of_impact: Fg,
    rawrayintersection_featureId: wg,
    rawrayintersection_featureType: Ig,
    rawrayintersection_normal: Rg,
    rawrayintersection_time_of_impact: Tg,
    rawrigidbodyset_contains: Od,
    rawrigidbodyset_createRigidBody: Ld,
    rawrigidbodyset_forEachRigidBodyHandle: Hd,
    rawrigidbodyset_len: Nd,
    rawrigidbodyset_new: Md,
    rawrigidbodyset_propagateModifiedBodyPositionsToColliders: Gd,
    rawrigidbodyset_rbAddForce: Sd,
    rawrigidbodyset_rbAddForceAtPoint: Pd,
    rawrigidbodyset_rbAddTorque: xd,
    rawrigidbodyset_rbAdditionalSolverIterations: Ad,
    rawrigidbodyset_rbAngularDamping: ud,
    rawrigidbodyset_rbAngvel: L_,
    rawrigidbodyset_rbApplyImpulse: Cd,
    rawrigidbodyset_rbApplyImpulseAtPoint: jd,
    rawrigidbodyset_rbApplyTorqueImpulse: Ed,
    rawrigidbodyset_rbBodyType: cd,
    rawrigidbodyset_rbCollider: od,
    rawrigidbodyset_rbDominanceGroup: W_,
    rawrigidbodyset_rbEffectiveAngularInertia: rd,
    rawrigidbodyset_rbEffectiveInvMass: $_,
    rawrigidbodyset_rbEffectiveWorldInvInertia: ed,
    rawrigidbodyset_rbEnableCcd: U_,
    rawrigidbodyset_rbGravityScale: fd,
    rawrigidbodyset_rbInvMass: q_,
    rawrigidbodyset_rbInvPrincipalInertia: Q_,
    rawrigidbodyset_rbIsCcdEnabled: nd,
    rawrigidbodyset_rbIsDynamic: hd,
    rawrigidbodyset_rbIsEnabled: md,
    rawrigidbodyset_rbIsFixed: _d,
    rawrigidbodyset_rbIsKinematic: dd,
    rawrigidbodyset_rbIsMoving: C_,
    rawrigidbodyset_rbIsSleeping: S_,
    rawrigidbodyset_rbLinearDamping: wd,
    rawrigidbodyset_rbLinvel: M_,
    rawrigidbodyset_rbLocalCom: X_,
    rawrigidbodyset_rbLockRotations: H_,
    rawrigidbodyset_rbLockTranslations: N_,
    rawrigidbodyset_rbMass: K_,
    rawrigidbodyset_rbNextRotation: E_,
    rawrigidbodyset_rbNextTranslation: x_,
    rawrigidbodyset_rbNumColliders: ad,
    rawrigidbodyset_rbPrincipalInertia: td,
    rawrigidbodyset_rbPrincipalInertiaLocalFrame: Z_,
    rawrigidbodyset_rbRecomputeMassPropertiesFromColliders: k_,
    rawrigidbodyset_rbResetForces: vd,
    rawrigidbodyset_rbResetTorques: Rd,
    rawrigidbodyset_rbRotation: v_,
    rawrigidbodyset_rbSetAdditionalMass: D_,
    rawrigidbodyset_rbSetAdditionalMassProperties: F_,
    rawrigidbodyset_rbSetAdditionalSolverIterations: Id,
    rawrigidbodyset_rbSetAngularDamping: gd,
    rawrigidbodyset_rbSetAngvel: I_,
    rawrigidbodyset_rbSetBodyType: ld,
    rawrigidbodyset_rbSetDominanceGroup: V_,
    rawrigidbodyset_rbSetEnabled: bd,
    rawrigidbodyset_rbSetEnabledRotations: G_,
    rawrigidbodyset_rbSetEnabledTranslations: O_,
    rawrigidbodyset_rbSetGravityScale: yd,
    rawrigidbodyset_rbSetLinearDamping: pd,
    rawrigidbodyset_rbSetLinvel: A_,
    rawrigidbodyset_rbSetNextKinematicRotation: T_,
    rawrigidbodyset_rbSetNextKinematicTranslation: z_,
    rawrigidbodyset_rbSetRotation: j_,
    rawrigidbodyset_rbSetSoftCcdPrediction: J_,
    rawrigidbodyset_rbSetTranslation: P_,
    rawrigidbodyset_rbSetUserData: Td,
    rawrigidbodyset_rbSleep: R_,
    rawrigidbodyset_rbSoftCcdPrediction: sd,
    rawrigidbodyset_rbTranslation: y_,
    rawrigidbodyset_rbUserData: zd,
    rawrigidbodyset_rbUserForce: kd,
    rawrigidbodyset_rbUserTorque: Dd,
    rawrigidbodyset_rbVelocityAtPoint: B_,
    rawrigidbodyset_rbWakeUp: id,
    rawrigidbodyset_rbWorldCom: Y_,
    rawrigidbodyset_remove: Bd,
    rawrotation_identity: ip,
    rawrotation_new: rp,
    rawrotation_w: np,
    rawrotation_x: Ng,
    rawrotation_y: Og,
    rawrotation_z: Hg,
    rawsdpmatrix3_elements: pp,
    rawserializationpipeline_deserializeAll: dg,
    rawserializationpipeline_new: tb,
    rawserializationpipeline_serializeAll: _g,
    rawshape_ball: vu,
    rawshape_capsule: Su,
    rawshape_castRay: Ju,
    rawshape_castRayAndGetNormal: Ku,
    rawshape_castShape: Ou,
    rawshape_cone: Eu,
    rawshape_contactShape: Gu,
    rawshape_containsPoint: Wu,
    rawshape_convexHull: Mu,
    rawshape_convexMesh: Bu,
    rawshape_cuboid: fu,
    rawshape_cylinder: Cu,
    rawshape_halfspace: Ru,
    rawshape_heightfield: Tu,
    rawshape_intersectsRay: Uu,
    rawshape_intersectsShape: Hu,
    rawshape_polyline: Iu,
    rawshape_projectPoint: Vu,
    rawshape_roundCone: Pu,
    rawshape_roundConvexHull: Lu,
    rawshape_roundConvexMesh: Nu,
    rawshape_roundCuboid: yu,
    rawshape_roundCylinder: xu,
    rawshape_roundTriangle: Fu,
    rawshape_segment: ku,
    rawshape_triangle: Du,
    rawshape_trimesh: zu,
    rawshape_voxels: ju,
    rawshape_voxelsFromPoints: Au,
    rawshapecasthit_normal1: Xu,
    rawshapecasthit_normal2: Yu,
    rawshapecasthit_time_of_impact: Mg,
    rawshapecasthit_witness1: $u,
    rawshapecasthit_witness2: Pg,
    rawshapecontact_distance: Ag,
    rawshapecontact_normal1: Cg,
    rawshapecontact_normal2: fg,
    rawshapecontact_point1: yg,
    rawshapecontact_point2: vg,
    rawvector_new: ap,
    rawvector_set_x: gg,
    rawvector_set_y: op,
    rawvector_set_z: cp,
    rawvector_x: Gg,
    rawvector_xyz: lp,
    rawvector_xzy: hp,
    rawvector_y: Wg,
    rawvector_yxz: _p,
    rawvector_yzx: wp,
    rawvector_z: Vg,
    rawvector_zero: sp,
    rawvector_zxy: dp,
    rawvector_zyx: up,
    reserve_memory: bg,
    version: oo
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  pa(sb);
  class ab {
    constructor(t, e, r) {
      this.x = t, this.y = e, this.z = r;
    }
  }
  class g {
    static new(t, e, r) {
      return new ab(t, e, r);
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
  class Pi {
    constructor(t, e, r, n) {
      this.x = t, this.y = e, this.z = r, this.w = n;
    }
  }
  class M {
    static identity() {
      return new Pi(0, 0, 0, 1);
    }
    static fromRaw(t) {
      if (!t) return null;
      let e = new Pi(t.x, t.y, t.z, t.w);
      return t.free(), e;
    }
    static intoRaw(t) {
      return new L(t.x, t.y, t.z, t.w);
    }
    static copy(t, e) {
      t.x = e.x, t.y = e.y, t.z = e.z, t.w = e.w;
    }
  }
  class ob {
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
  class ji {
    static fromRaw(t) {
      const e = new ob(t.elements());
      return t.free(), e;
    }
  }
  var ft;
  (function(i) {
    i[i.Dynamic = 0] = "Dynamic", i[i.Fixed = 1] = "Fixed", i[i.KinematicPositionBased = 2] = "KinematicPositionBased", i[i.KinematicVelocityBased = 3] = "KinematicVelocityBased";
  })(ft || (ft = {}));
  class Ai {
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
    setEnabledTranslations(t, e, r, n) {
      return this.rawSet.rbSetEnabledTranslations(this.handle, t, e, r, n);
    }
    restrictTranslations(t, e, r, n) {
      this.setEnabledTranslations(t, e, r, n);
    }
    setEnabledRotations(t, e, r, n) {
      return this.rawSet.rbSetEnabledRotations(this.handle, t, e, r, n);
    }
    restrictRotations(t, e, r, n) {
      this.setEnabledRotations(t, e, r, n);
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
    invPrincipalInertia() {
      return g.fromRaw(this.rawSet.rbInvPrincipalInertia(this.handle));
    }
    principalInertia() {
      return g.fromRaw(this.rawSet.rbPrincipalInertia(this.handle));
    }
    principalInertiaLocalFrame() {
      return M.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle));
    }
    effectiveWorldInvInertia() {
      return ji.fromRaw(this.rawSet.rbEffectiveWorldInvInertia(this.handle));
    }
    effectiveAngularInertia() {
      return ji.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle));
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
    setAdditionalMassProperties(t, e, r, n, a) {
      let c = g.intoRaw(e), l = g.intoRaw(r), _ = M.intoRaw(n);
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
      const n = g.intoRaw(t), a = g.intoRaw(e);
      this.rawSet.rbAddForceAtPoint(this.handle, n, a, r), n.free(), a.free();
    }
    applyImpulseAtPoint(t, e, r) {
      const n = g.intoRaw(t), a = g.intoRaw(e);
      this.rawSet.rbApplyImpulseAtPoint(this.handle, n, a, r), n.free(), a.free();
    }
    userForce() {
      return g.fromRaw(this.rawSet.rbUserForce(this.handle));
    }
    userTorque() {
      return g.fromRaw(this.rawSet.rbUserTorque(this.handle));
    }
  }
  class St {
    constructor(t) {
      this.enabled = true, this.status = t, this.translation = g.zeros(), this.rotation = M.identity(), this.gravityScale = 1, this.linvel = g.zeros(), this.mass = 0, this.massOnly = false, this.centerOfMass = g.zeros(), this.translationsEnabledX = true, this.translationsEnabledY = true, this.angvel = g.zeros(), this.principalAngularInertia = g.zeros(), this.angularInertiaLocalFrame = M.identity(), this.translationsEnabledZ = true, this.rotationsEnabledX = true, this.rotationsEnabledY = true, this.rotationsEnabledZ = true, this.linearDamping = 0, this.angularDamping = 0, this.canSleep = true, this.sleeping = false, this.ccdEnabled = false, this.softCcdPrediction = 0, this.dominanceGroup = 0, this.additionalSolverIterations = 0;
    }
    static dynamic() {
      return new St(ft.Dynamic);
    }
    static kinematicPositionBased() {
      return new St(ft.KinematicPositionBased);
    }
    static kinematicVelocityBased() {
      return new St(ft.KinematicVelocityBased);
    }
    static fixed() {
      return new St(ft.Fixed);
    }
    static newDynamic() {
      return new St(ft.Dynamic);
    }
    static newKinematicPositionBased() {
      return new St(ft.KinematicPositionBased);
    }
    static newKinematicVelocityBased() {
      return new St(ft.KinematicVelocityBased);
    }
    static newStatic() {
      return new St(ft.Fixed);
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
    setAdditionalMassProperties(t, e, r, n) {
      return this.mass = t, g.copy(this.centerOfMass, e), g.copy(this.principalAngularInertia, r), M.copy(this.angularInertiaLocalFrame, n), this.massOnly = false, this;
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
  class Ue {
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
  class cb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new K(), this.map = new Ue(), t && t.forEachRigidBodyHandle((e) => {
        this.map.set(e, new Ai(t, null, e));
      });
    }
    finalizeDeserialization(t) {
      this.map.forEach((e) => e.finalizeDeserialization(t));
    }
    createRigidBody(t, e) {
      let r = g.intoRaw(e.translation), n = M.intoRaw(e.rotation), a = g.intoRaw(e.linvel), c = g.intoRaw(e.centerOfMass), l = g.intoRaw(e.angvel), _ = g.intoRaw(e.principalAngularInertia), h = M.intoRaw(e.angularInertiaLocalFrame), u = this.raw.createRigidBody(e.enabled, r, n, e.gravityScale, e.mass, e.massOnly, c, a, l, _, h, e.translationsEnabledX, e.translationsEnabledY, e.translationsEnabledZ, e.rotationsEnabledX, e.rotationsEnabledY, e.rotationsEnabledZ, e.linearDamping, e.angularDamping, e.status, e.canSleep, e.sleeping, e.softCcdPrediction, e.ccdEnabled, e.dominanceGroup, e.additionalSolverIterations);
      r.free(), n.free(), a.free(), c.free(), l.free(), _.free(), h.free();
      const w = new Ai(this.raw, t, u);
      return w.userData = e.userData, this.map.set(u, w), w;
    }
    remove(t, e, r, n, a) {
      for (let c = 0; c < this.raw.rbNumColliders(t); c += 1) r.unmap(this.raw.rbCollider(t, c));
      n.forEachJointHandleAttachedToRigidBody(t, (c) => n.unmap(c)), a.forEachJointHandleAttachedToRigidBody(t, (c) => a.unmap(c)), this.raw.remove(t, e.raw, r.raw, n.raw, a.raw), this.map.delete(t);
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
  class lb {
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
    set numInternalPgsIterations(t) {
      this.raw.numInternalPgsIterations = t;
    }
    set minIslandSize(t) {
      this.raw.minIslandSize = t;
    }
    set maxCcdSubsteps(t) {
      this.raw.maxCcdSubsteps = t;
    }
  }
  var ct;
  (function(i) {
    i[i.Revolute = 0] = "Revolute", i[i.Fixed = 1] = "Fixed", i[i.Prismatic = 2] = "Prismatic", i[i.Rope = 3] = "Rope", i[i.Spring = 4] = "Spring", i[i.Spherical = 5] = "Spherical", i[i.Generic = 6] = "Generic";
  })(ct || (ct = {}));
  var Ii;
  (function(i) {
    i[i.AccelerationBased = 0] = "AccelerationBased", i[i.ForceBased = 1] = "ForceBased";
  })(Ii || (Ii = {}));
  var zi;
  (function(i) {
    i[i.LinX = 1] = "LinX", i[i.LinY = 2] = "LinY", i[i.LinZ = 4] = "LinZ", i[i.AngX = 8] = "AngX", i[i.AngY = 16] = "AngY", i[i.AngZ = 32] = "AngZ";
  })(zi || (zi = {}));
  class xt {
    constructor(t, e, r) {
      this.rawSet = t, this.bodySet = e, this.handle = r;
    }
    static newTyped(t, e, r) {
      switch (t.jointType(r)) {
        case yt.Revolute:
          return new ub(t, e, r);
        case yt.Prismatic:
          return new wb(t, e, r);
        case yt.Fixed:
          return new _b(t, e, r);
        case yt.Spring:
          return new hb(t, e, r);
        case yt.Rope:
          return new db(t, e, r);
        case yt.Spherical:
          return new gb(t, e, r);
        case yt.Generic:
          return new pb(t, e, r);
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
  class un extends xt {
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
    configureMotor(t, e, r, n) {
      this.rawSet.jointConfigureMotor(this.handle, this.rawAxis(), t, e, r, n);
    }
  }
  class _b extends xt {
  }
  class db extends xt {
  }
  class hb extends xt {
  }
  class wb extends un {
    rawAxis() {
      return Ne.LinX;
    }
  }
  class ub extends un {
    rawAxis() {
      return Ne.AngX;
    }
  }
  class pb extends xt {
  }
  class gb extends xt {
  }
  class At {
    constructor() {
    }
    static fixed(t, e, r, n) {
      let a = new At();
      return a.anchor1 = t, a.anchor2 = r, a.frame1 = e, a.frame2 = n, a.jointType = ct.Fixed, a;
    }
    static spring(t, e, r, n, a) {
      let c = new At();
      return c.anchor1 = n, c.anchor2 = a, c.length = t, c.stiffness = e, c.damping = r, c.jointType = ct.Spring, c;
    }
    static rope(t, e, r) {
      let n = new At();
      return n.anchor1 = e, n.anchor2 = r, n.length = t, n.jointType = ct.Rope, n;
    }
    static generic(t, e, r, n) {
      let a = new At();
      return a.anchor1 = t, a.anchor2 = e, a.axis = r, a.axesMask = n, a.jointType = ct.Generic, a;
    }
    static spherical(t, e) {
      let r = new At();
      return r.anchor1 = t, r.anchor2 = e, r.jointType = ct.Spherical, r;
    }
    static prismatic(t, e, r) {
      let n = new At();
      return n.anchor1 = t, n.anchor2 = e, n.axis = r, n.jointType = ct.Prismatic, n;
    }
    static revolute(t, e, r) {
      let n = new At();
      return n.anchor1 = t, n.anchor2 = e, n.axis = r, n.jointType = ct.Revolute, n;
    }
    intoRaw() {
      let t = g.intoRaw(this.anchor1), e = g.intoRaw(this.anchor2), r, n, a = false, c = 0, l = 0;
      switch (this.jointType) {
        case ct.Fixed:
          let _ = M.intoRaw(this.frame1), h = M.intoRaw(this.frame2);
          n = ot.fixed(t, _, e, h), _.free(), h.free();
          break;
        case ct.Spring:
          n = ot.spring(this.length, this.stiffness, this.damping, t, e);
          break;
        case ct.Rope:
          n = ot.rope(this.length, t, e);
          break;
        case ct.Prismatic:
          r = g.intoRaw(this.axis), this.limitsEnabled && (a = true, c = this.limits[0], l = this.limits[1]), n = ot.prismatic(t, e, r, a, c, l), r.free();
          break;
        case ct.Generic:
          r = g.intoRaw(this.axis);
          let u = this.axesMask;
          n = ot.generic(t, e, r, u);
          break;
        case ct.Spherical:
          n = ot.spherical(t, e);
          break;
        case ct.Revolute:
          r = g.intoRaw(this.axis), n = ot.revolute(t, e, r), r.free();
          break;
      }
      return t.free(), e.free(), n;
    }
  }
  class bb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new zt(), this.map = new Ue(), t && t.forEachJointHandle((e) => {
        this.map.set(e, xt.newTyped(t, null, e));
      });
    }
    finalizeDeserialization(t) {
      this.map.forEach((e) => e.finalizeDeserialization(t));
    }
    createJoint(t, e, r, n, a) {
      const c = e.intoRaw(), l = this.raw.createJoint(c, r, n, a);
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
          return new yb(t, e);
        case yt.Prismatic:
          return new fb(t, e);
        case yt.Fixed:
          return new mb(t, e);
        case yt.Spherical:
          return new vb(t, e);
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
  class pn extends Jt {
  }
  class mb extends Jt {
  }
  class fb extends pn {
    rawAxis() {
      return Ne.LinX;
    }
  }
  class yb extends pn {
    rawAxis() {
      return Ne.AngX;
    }
  }
  class vb extends Jt {
  }
  class Rb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new kt(), this.map = new Ue(), t && t.forEachJointHandle((e) => {
        this.map.set(e, Jt.newTyped(this.raw, e));
      });
    }
    createJoint(t, e, r, n) {
      const a = t.intoRaw(), c = this.raw.createJoint(a, e, r, n);
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
  (function(i) {
    i[i.Average = 0] = "Average", i[i.Min = 1] = "Min", i[i.Multiply = 2] = "Multiply", i[i.Max = 3] = "Max";
  })(ze || (ze = {}));
  class Sb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new mr();
    }
  }
  class Cb {
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
  (function(i) {
    i[i.Vertex = 0] = "Vertex", i[i.Edge = 1] = "Edge", i[i.Face = 2] = "Face", i[i.Unknown = 3] = "Unknown";
  })(ye || (ye = {}));
  class Je {
    constructor(t, e, r, n) {
      this.featureType = ye.Unknown, this.featureId = void 0, this.timeOfImpact = t, this.normal = e, n !== void 0 && (this.featureId = n), r !== void 0 && (this.featureType = r);
    }
    static fromRaw(t) {
      if (!t) return null;
      const e = new Je(t.time_of_impact(), g.fromRaw(t.normal()), t.featureType(), t.featureId());
      return t.free(), e;
    }
  }
  class Te {
    constructor(t, e, r, n, a) {
      this.featureType = ye.Unknown, this.featureId = void 0, this.collider = t, this.timeOfImpact = e, this.normal = r, a !== void 0 && (this.featureId = a), n !== void 0 && (this.featureType = n);
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new Te(t.get(e.colliderHandle()), e.time_of_impact(), g.fromRaw(e.normal()), e.featureType(), e.featureId());
      return e.free(), r;
    }
  }
  class Dr {
    constructor(t, e) {
      this.collider = t, this.timeOfImpact = e;
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new Dr(t.get(e.colliderHandle()), e.timeOfImpact());
      return e.free(), r;
    }
  }
  class Ke {
    constructor(t, e) {
      this.point = t, this.isInside = e;
    }
    static fromRaw(t) {
      if (!t) return null;
      const e = new Ke(g.fromRaw(t.point()), t.isInside());
      return t.free(), e;
    }
  }
  class ke {
    constructor(t, e, r, n, a) {
      this.featureType = ye.Unknown, this.featureId = void 0, this.collider = t, this.point = e, this.isInside = r, a !== void 0 && (this.featureId = a), n !== void 0 && (this.featureType = n);
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new ke(t.get(e.colliderHandle()), g.fromRaw(e.point()), e.isInside(), e.featureType(), e.featureId());
      return e.free(), r;
    }
  }
  class Re {
    constructor(t, e, r, n, a) {
      this.time_of_impact = t, this.witness1 = e, this.witness2 = r, this.normal1 = n, this.normal2 = a;
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new Re(e.time_of_impact(), g.fromRaw(e.witness1()), g.fromRaw(e.witness2()), g.fromRaw(e.normal1()), g.fromRaw(e.normal2()));
      return e.free(), r;
    }
  }
  class qe extends Re {
    constructor(t, e, r, n, a, c) {
      super(e, r, n, a, c), this.collider = t;
    }
    static fromRaw(t, e) {
      if (!e) return null;
      const r = new qe(t.get(e.colliderHandle()), e.time_of_impact(), g.fromRaw(e.witness1()), g.fromRaw(e.witness2()), g.fromRaw(e.normal1()), g.fromRaw(e.normal2()));
      return e.free(), r;
    }
  }
  class xb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new It();
    }
    castRay(t, e, r, n, a, c, l, _, h, u, w) {
      let b = g.intoRaw(n.origin), f = g.intoRaw(n.dir), R = Dr.fromRaw(r, this.raw.castRay(t.raw, e.raw, r.raw, b, f, a, c, l, _, h, u, w));
      return b.free(), f.free(), R;
    }
    castRayAndGetNormal(t, e, r, n, a, c, l, _, h, u, w) {
      let b = g.intoRaw(n.origin), f = g.intoRaw(n.dir), R = Te.fromRaw(r, this.raw.castRayAndGetNormal(t.raw, e.raw, r.raw, b, f, a, c, l, _, h, u, w));
      return b.free(), f.free(), R;
    }
    intersectionsWithRay(t, e, r, n, a, c, l, _, h, u, w, b) {
      let f = g.intoRaw(n.origin), R = g.intoRaw(n.dir), T = (j) => l(Te.fromRaw(r, j));
      this.raw.intersectionsWithRay(t.raw, e.raw, r.raw, f, R, a, c, T, _, h, u, w, b), f.free(), R.free();
    }
    intersectionWithShape(t, e, r, n, a, c, l, _, h, u, w) {
      let b = g.intoRaw(n), f = M.intoRaw(a), R = c.intoRaw(), T = this.raw.intersectionWithShape(t.raw, e.raw, r.raw, b, f, R, l, _, h, u, w);
      return b.free(), f.free(), R.free(), T;
    }
    projectPoint(t, e, r, n, a, c, l, _, h, u) {
      let w = g.intoRaw(n), b = ke.fromRaw(r, this.raw.projectPoint(t.raw, e.raw, r.raw, w, a, c, l, _, h, u));
      return w.free(), b;
    }
    projectPointAndGetFeature(t, e, r, n, a, c, l, _, h) {
      let u = g.intoRaw(n), w = ke.fromRaw(r, this.raw.projectPointAndGetFeature(t.raw, e.raw, r.raw, u, a, c, l, _, h));
      return u.free(), w;
    }
    intersectionsWithPoint(t, e, r, n, a, c, l, _, h, u) {
      let w = g.intoRaw(n);
      this.raw.intersectionsWithPoint(t.raw, e.raw, r.raw, w, a, c, l, _, h, u), w.free();
    }
    castShape(t, e, r, n, a, c, l, _, h, u, w, b, f, R, T) {
      let j = g.intoRaw(n), I = M.intoRaw(a), v = g.intoRaw(c), S = l.intoRaw(), x = qe.fromRaw(r, this.raw.castShape(t.raw, e.raw, r.raw, j, I, v, S, _, h, u, w, b, f, R, T));
      return j.free(), I.free(), v.free(), S.free(), x;
    }
    intersectionsWithShape(t, e, r, n, a, c, l, _, h, u, w, b) {
      let f = g.intoRaw(n), R = M.intoRaw(a), T = c.intoRaw();
      this.raw.intersectionsWithShape(t.raw, e.raw, r.raw, f, R, T, l, _, h, u, w, b), f.free(), R.free(), T.free();
    }
    collidersWithAabbIntersectingAabb(t, e, r, n, a, c) {
      let l = g.intoRaw(n), _ = g.intoRaw(a);
      this.raw.collidersWithAabbIntersectingAabb(t.raw, e.raw, r.raw, l, _, c), l.free(), _.free();
    }
  }
  class Eb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new et(), this.tempManifold = new Pb(null);
    }
    contactPairsWith(t, e) {
      this.raw.contact_pairs_with(t, e);
    }
    intersectionPairsWith(t, e) {
      this.raw.intersection_pairs_with(t, e);
    }
    contactPair(t, e, r) {
      const n = this.raw.contact_pair(t, e);
      if (n) {
        const a = n.collider1() != t;
        let c;
        for (c = 0; c < n.numContactManifolds(); ++c) this.tempManifold.raw = n.contactManifold(c), this.tempManifold.raw && r(this.tempManifold, a), this.tempManifold.free();
        n.free();
      }
    }
    intersectionPair(t, e) {
      return this.raw.intersection_pair(t, e);
    }
  }
  class Pb {
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
    constructor(t, e, r, n, a) {
      this.distance = t, this.point1 = e, this.point2 = r, this.normal1 = n, this.normal2 = a;
    }
    static fromRaw(t) {
      if (!t) return null;
      const e = new ve(t.distance(), g.fromRaw(t.point1()), g.fromRaw(t.point2()), g.fromRaw(t.normal1()), g.fromRaw(t.normal2()));
      return t.free(), e;
    }
  }
  class nt {
    static fromRaw(t, e) {
      const r = t.coShapeType(e);
      let n, a, c, l, _, h, u;
      switch (r) {
        case st.Ball:
          return new Fr(t.coRadius(e));
        case st.Cuboid:
          return n = t.coHalfExtents(e), new Se(n.x, n.y, n.z);
        case st.RoundCuboid:
          return n = t.coHalfExtents(e), a = t.coRoundRadius(e), new gn(n.x, n.y, n.z, a);
        case st.Capsule:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), new bn(_, h);
        case st.Segment:
          return c = t.coVertices(e), new mn(g.new(c[0], c[1], c[2]), g.new(c[3], c[4], c[5]));
        case st.Polyline:
          return c = t.coVertices(e), l = t.coIndices(e), new vn(c, l);
        case st.Triangle:
          return c = t.coVertices(e), new fn(g.new(c[0], c[1], c[2]), g.new(c[3], c[4], c[5]), g.new(c[6], c[7], c[8]));
        case st.RoundTriangle:
          return c = t.coVertices(e), a = t.coRoundRadius(e), new yn(g.new(c[0], c[1], c[2]), g.new(c[3], c[4], c[5]), g.new(c[6], c[7], c[8]), a);
        case st.HalfSpace:
          return u = g.fromRaw(t.coHalfspaceNormal(e)), new jb(u);
        case st.Voxels:
          const w = t.coVoxelData(e), b = t.coVoxelSize(e);
          return new Rn(w, b);
        case st.TriMesh:
          c = t.coVertices(e), l = t.coIndices(e);
          const f = t.coTriMeshFlags(e);
          return new Mr(c, l, f);
        case st.HeightField:
          const R = t.coHeightfieldScale(e), T = t.coHeightfieldHeights(e), j = t.coHeightfieldNRows(e), I = t.coHeightfieldNCols(e), v = t.coHeightFieldFlags(e);
          return new Sn(j, I, T, R, v);
        case st.ConvexPolyhedron:
          return c = t.coVertices(e), l = t.coIndices(e), new yr(c, l);
        case st.RoundConvexPolyhedron:
          return c = t.coVertices(e), l = t.coIndices(e), a = t.coRoundRadius(e), new vr(c, l, a);
        case st.Cylinder:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), new Cn(_, h);
        case st.RoundCylinder:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), a = t.coRoundRadius(e), new xn(_, h, a);
        case st.Cone:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), new En(_, h);
        case st.RoundCone:
          return _ = t.coHalfHeight(e), h = t.coRadius(e), a = t.coRoundRadius(e), new Pn(_, h, a);
        default:
          throw new Error("unknown shape type: " + r);
      }
    }
    castShape(t, e, r, n, a, c, l, _, h, u) {
      let w = g.intoRaw(t), b = M.intoRaw(e), f = g.intoRaw(r), R = g.intoRaw(a), T = M.intoRaw(c), j = g.intoRaw(l), I = this.intoRaw(), v = n.intoRaw(), S = Re.fromRaw(null, I.castShape(w, b, f, v, R, T, j, _, h, u));
      return w.free(), b.free(), f.free(), R.free(), T.free(), j.free(), I.free(), v.free(), S;
    }
    intersectsShape(t, e, r, n, a) {
      let c = g.intoRaw(t), l = M.intoRaw(e), _ = g.intoRaw(n), h = M.intoRaw(a), u = this.intoRaw(), w = r.intoRaw(), b = u.intersectsShape(c, l, w, _, h);
      return c.free(), l.free(), _.free(), h.free(), u.free(), w.free(), b;
    }
    contactShape(t, e, r, n, a, c) {
      let l = g.intoRaw(t), _ = M.intoRaw(e), h = g.intoRaw(n), u = M.intoRaw(a), w = this.intoRaw(), b = r.intoRaw(), f = ve.fromRaw(w.contactShape(l, _, b, h, u, c));
      return l.free(), _.free(), h.free(), u.free(), w.free(), b.free(), f;
    }
    containsPoint(t, e, r) {
      let n = g.intoRaw(t), a = M.intoRaw(e), c = g.intoRaw(r), l = this.intoRaw(), _ = l.containsPoint(n, a, c);
      return n.free(), a.free(), c.free(), l.free(), _;
    }
    projectPoint(t, e, r, n) {
      let a = g.intoRaw(t), c = M.intoRaw(e), l = g.intoRaw(r), _ = this.intoRaw(), h = Ke.fromRaw(_.projectPoint(a, c, l, n));
      return a.free(), c.free(), l.free(), _.free(), h;
    }
    intersectsRay(t, e, r, n) {
      let a = g.intoRaw(e), c = M.intoRaw(r), l = g.intoRaw(t.origin), _ = g.intoRaw(t.dir), h = this.intoRaw(), u = h.intersectsRay(a, c, l, _, n);
      return a.free(), c.free(), l.free(), _.free(), h.free(), u;
    }
    castRay(t, e, r, n, a) {
      let c = g.intoRaw(e), l = M.intoRaw(r), _ = g.intoRaw(t.origin), h = g.intoRaw(t.dir), u = this.intoRaw(), w = u.castRay(c, l, _, h, n, a);
      return c.free(), l.free(), _.free(), h.free(), u.free(), w;
    }
    castRayAndGetNormal(t, e, r, n, a) {
      let c = g.intoRaw(e), l = M.intoRaw(r), _ = g.intoRaw(t.origin), h = g.intoRaw(t.dir), u = this.intoRaw(), w = Je.fromRaw(u.castRayAndGetNormal(c, l, _, h, n, a));
      return c.free(), l.free(), _.free(), h.free(), u.free(), w;
    }
  }
  var rt;
  (function(i) {
    i[i.Ball = 0] = "Ball", i[i.Cuboid = 1] = "Cuboid", i[i.Capsule = 2] = "Capsule", i[i.Segment = 3] = "Segment", i[i.Polyline = 4] = "Polyline", i[i.Triangle = 5] = "Triangle", i[i.TriMesh = 6] = "TriMesh", i[i.HeightField = 7] = "HeightField", i[i.ConvexPolyhedron = 9] = "ConvexPolyhedron", i[i.Cylinder = 10] = "Cylinder", i[i.Cone = 11] = "Cone", i[i.RoundCuboid = 12] = "RoundCuboid", i[i.RoundTriangle = 13] = "RoundTriangle", i[i.RoundCylinder = 14] = "RoundCylinder", i[i.RoundCone = 15] = "RoundCone", i[i.RoundConvexPolyhedron = 16] = "RoundConvexPolyhedron", i[i.HalfSpace = 17] = "HalfSpace", i[i.Voxels = 18] = "Voxels";
  })(rt || (rt = {}));
  var Ti;
  (function(i) {
    i[i.FIX_INTERNAL_EDGES = 1] = "FIX_INTERNAL_EDGES";
  })(Ti || (Ti = {}));
  var fr;
  (function(i) {
    i[i.DELETE_BAD_TOPOLOGY_TRIANGLES = 4] = "DELETE_BAD_TOPOLOGY_TRIANGLES", i[i.ORIENTED = 8] = "ORIENTED", i[i.MERGE_DUPLICATE_VERTICES = 16] = "MERGE_DUPLICATE_VERTICES", i[i.DELETE_DEGENERATE_TRIANGLES = 32] = "DELETE_DEGENERATE_TRIANGLES", i[i.DELETE_DUPLICATE_TRIANGLES = 64] = "DELETE_DUPLICATE_TRIANGLES", i[i.FIX_INTERNAL_EDGES = 144] = "FIX_INTERNAL_EDGES";
  })(fr || (fr = {}));
  class Fr extends nt {
    constructor(t) {
      super(), this.type = rt.Ball, this.radius = t;
    }
    intoRaw() {
      return k.ball(this.radius);
    }
  }
  class jb extends nt {
    constructor(t) {
      super(), this.type = rt.HalfSpace, this.normal = t;
    }
    intoRaw() {
      let t = g.intoRaw(this.normal), e = k.halfspace(t);
      return t.free(), e;
    }
  }
  class Se extends nt {
    constructor(t, e, r) {
      super(), this.type = rt.Cuboid, this.halfExtents = g.new(t, e, r);
    }
    intoRaw() {
      return k.cuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z);
    }
  }
  class gn extends nt {
    constructor(t, e, r, n) {
      super(), this.type = rt.RoundCuboid, this.halfExtents = g.new(t, e, r), this.borderRadius = n;
    }
    intoRaw() {
      return k.roundCuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z, this.borderRadius);
    }
  }
  class bn extends nt {
    constructor(t, e) {
      super(), this.type = rt.Capsule, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return k.capsule(this.halfHeight, this.radius);
    }
  }
  class mn extends nt {
    constructor(t, e) {
      super(), this.type = rt.Segment, this.a = t, this.b = e;
    }
    intoRaw() {
      let t = g.intoRaw(this.a), e = g.intoRaw(this.b), r = k.segment(t, e);
      return t.free(), e.free(), r;
    }
  }
  class fn extends nt {
    constructor(t, e, r) {
      super(), this.type = rt.Triangle, this.a = t, this.b = e, this.c = r;
    }
    intoRaw() {
      let t = g.intoRaw(this.a), e = g.intoRaw(this.b), r = g.intoRaw(this.c), n = k.triangle(t, e, r);
      return t.free(), e.free(), r.free(), n;
    }
  }
  class yn extends nt {
    constructor(t, e, r, n) {
      super(), this.type = rt.RoundTriangle, this.a = t, this.b = e, this.c = r, this.borderRadius = n;
    }
    intoRaw() {
      let t = g.intoRaw(this.a), e = g.intoRaw(this.b), r = g.intoRaw(this.c), n = k.roundTriangle(t, e, r, this.borderRadius);
      return t.free(), e.free(), r.free(), n;
    }
  }
  class vn extends nt {
    constructor(t, e) {
      super(), this.type = rt.Polyline, this.vertices = t, this.indices = e ?? new Uint32Array(0);
    }
    intoRaw() {
      return k.polyline(this.vertices, this.indices);
    }
  }
  class Rn extends nt {
    constructor(t, e) {
      super(), this.type = rt.Voxels, this.data = t, this.voxelSize = e;
    }
    intoRaw() {
      let t = g.intoRaw(this.voxelSize), e;
      return this.data instanceof Int32Array ? e = k.voxels(t, this.data) : e = k.voxelsFromPoints(t, this.data), t.free(), e;
    }
  }
  let Mr = class extends nt {
    constructor(t, e, r) {
      super(), this.type = rt.TriMesh, this.vertices = t, this.indices = e, this.flags = r;
    }
    intoRaw() {
      return k.trimesh(this.vertices, this.indices, this.flags);
    }
  };
  class yr extends nt {
    constructor(t, e) {
      super(), this.type = rt.ConvexPolyhedron, this.vertices = t, this.indices = e;
    }
    intoRaw() {
      return this.indices ? k.convexMesh(this.vertices, this.indices) : k.convexHull(this.vertices);
    }
  }
  class vr extends nt {
    constructor(t, e, r) {
      super(), this.type = rt.RoundConvexPolyhedron, this.vertices = t, this.indices = e, this.borderRadius = r;
    }
    intoRaw() {
      return this.indices ? k.roundConvexMesh(this.vertices, this.indices, this.borderRadius) : k.roundConvexHull(this.vertices, this.borderRadius);
    }
  }
  class Sn extends nt {
    constructor(t, e, r, n, a) {
      super(), this.type = rt.HeightField, this.nrows = t, this.ncols = e, this.heights = r, this.scale = n, this.flags = a;
    }
    intoRaw() {
      let t = g.intoRaw(this.scale), e = k.heightfield(this.nrows, this.ncols, this.heights, t, this.flags);
      return t.free(), e;
    }
  }
  class Cn extends nt {
    constructor(t, e) {
      super(), this.type = rt.Cylinder, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return k.cylinder(this.halfHeight, this.radius);
    }
  }
  class xn extends nt {
    constructor(t, e, r) {
      super(), this.type = rt.RoundCylinder, this.borderRadius = r, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return k.roundCylinder(this.halfHeight, this.radius, this.borderRadius);
    }
  }
  class En extends nt {
    constructor(t, e) {
      super(), this.type = rt.Cone, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return k.cone(this.halfHeight, this.radius);
    }
  }
  class Pn extends nt {
    constructor(t, e, r) {
      super(), this.type = rt.RoundCone, this.halfHeight = t, this.radius = e, this.borderRadius = r;
    }
    intoRaw() {
      return k.roundCone(this.halfHeight, this.radius, this.borderRadius);
    }
  }
  class Ab {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new xa();
    }
    step(t, e, r, n, a, c, l, _, h, u, w, b) {
      let f = g.intoRaw(t);
      w ? this.raw.stepWithEvents(f, e.raw, r.raw, n.raw, a.raw, c.raw, l.raw, _.raw, h.raw, u.raw, w.raw, b, b ? b.filterContactPair : null, b ? b.filterIntersectionPair : null) : this.raw.step(f, e.raw, r.raw, n.raw, a.raw, c.raw, l.raw, _.raw, h.raw, u.raw), f.free();
    }
  }
  class ki {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new Pa();
    }
    serializeAll(t, e, r, n, a, c, l, _, h) {
      let u = g.intoRaw(t);
      const w = this.raw.serializeAll(u, e.raw, r.raw, n.raw, a.raw, c.raw, l.raw, _.raw, h.raw);
      return u.free(), w;
    }
    deserializeAll(t) {
      return $e.fromRaw(this.raw.deserializeAll(t));
    }
  }
  class Ib {
    constructor(t, e) {
      this.vertices = t, this.colors = e;
    }
  }
  class zb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.vertices = void 0, this.colors = void 0;
    }
    constructor(t) {
      this.raw = t || new Ra();
    }
    render(t, e, r, n, a, c, l) {
      this.raw.render(t.raw, e.raw, r.raw, n.raw, a.raw, c, e.castClosure(l)), this.vertices = this.raw.vertices(), this.colors = this.raw.colors();
    }
  }
  class Tb {
  }
  class kb {
    constructor(t, e, r, n, a, c) {
      this.params = e, this.bodies = a, this.colliders = c, this.broadPhase = r, this.narrowPhase = n, this.raw = new Ca(t), this.rawCharacterCollision = new hn(), this._applyImpulsesToDynamicBodies = false, this._characterMass = null;
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
    computeColliderMovement(t, e, r, n, a) {
      let c = g.intoRaw(e);
      this.raw.computeColliderMovement(this.params.dt, this.broadPhase.raw, this.narrowPhase.raw, this.bodies.raw, this.colliders.raw, t.handle, c, this._applyImpulsesToDynamicBodies, this._characterMass, r, n, this.colliders.castClosure(a)), c.free();
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
        return e = e ?? new Tb(), e.translationDeltaApplied = g.fromRaw(r.translationDeltaApplied()), e.translationDeltaRemaining = g.fromRaw(r.translationDeltaRemaining()), e.toi = r.toi(), e.witness1 = g.fromRaw(r.worldWitness1()), e.witness2 = g.fromRaw(r.worldWitness2()), e.normal1 = g.fromRaw(r.worldNormal1()), e.normal2 = g.fromRaw(r.worldNormal2()), e.collider = this.colliders.get(r.handle()), e;
      } else return null;
    }
  }
  var Di;
  (function(i) {
    i[i.None = 0] = "None", i[i.LinX = 1] = "LinX", i[i.LinY = 2] = "LinY", i[i.LinZ = 4] = "LinZ", i[i.AngX = 8] = "AngX", i[i.AngY = 16] = "AngY", i[i.AngZ = 32] = "AngZ", i[i.AllLin = 7] = "AllLin", i[i.AllAng = 56] = "AllAng", i[i.All = 63] = "All";
  })(Di || (Di = {}));
  class Db {
    constructor(t, e, r, n, a, c) {
      this.params = t, this.bodies = e, this.raw = new Ea(r, n, a, c);
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
      let n = g.intoRaw(e), a = g.intoRaw(r);
      this.raw.apply_linear_correction(this.params.dt, this.bodies.raw, t.handle, n, a), n.free(), a.free();
    }
    applyAngularCorrection(t, e, r) {
      let n = M.intoRaw(e), a = g.intoRaw(r);
      this.raw.apply_angular_correction(this.params.dt, this.bodies.raw, t.handle, n, a), n.free(), a.free();
    }
    linearCorrection(t, e, r) {
      let n = g.intoRaw(e), a = g.intoRaw(r), c = this.raw.linear_correction(this.params.dt, this.bodies.raw, t.handle, n, a);
      return n.free(), a.free(), g.fromRaw(c);
    }
    angularCorrection(t, e, r) {
      let n = M.intoRaw(e), a = g.intoRaw(r), c = this.raw.angular_correction(this.params.dt, this.bodies.raw, t.handle, n, a);
      return n.free(), a.free(), g.fromRaw(c);
    }
  }
  class Fb {
    constructor(t, e, r, n, a) {
      this.raw = new Sa(t.handle), this.broadPhase = e, this.narrowPhase = r, this.bodies = n, this.colliders = a, this._chassis = t;
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    updateVehicle(t, e, r, n) {
      this.raw.update_vehicle(t, this.broadPhase.raw, this.narrowPhase.raw, this.bodies.raw, this.colliders.raw, e, r, this.colliders.castClosure(n));
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
    addWheel(t, e, r, n, a) {
      let c = g.intoRaw(t), l = g.intoRaw(e), _ = g.intoRaw(r);
      this.raw.add_wheel(c, l, _, n, a), c.free(), l.free(), _.free();
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
  class $e {
    free() {
      this.integrationParameters.free(), this.islands.free(), this.broadPhase.free(), this.narrowPhase.free(), this.bodies.free(), this.colliders.free(), this.impulseJoints.free(), this.multibodyJoints.free(), this.ccdSolver.free(), this.physicsPipeline.free(), this.serializationPipeline.free(), this.debugRenderPipeline.free(), this.characterControllers.forEach((t) => t.free()), this.pidControllers.forEach((t) => t.free()), this.vehicleControllers.forEach((t) => t.free()), this.integrationParameters = void 0, this.islands = void 0, this.broadPhase = void 0, this.narrowPhase = void 0, this.bodies = void 0, this.colliders = void 0, this.ccdSolver = void 0, this.impulseJoints = void 0, this.multibodyJoints = void 0, this.physicsPipeline = void 0, this.serializationPipeline = void 0, this.debugRenderPipeline = void 0, this.characterControllers = void 0, this.pidControllers = void 0, this.vehicleControllers = void 0;
    }
    constructor(t, e, r, n, a, c, l, _, h, u, w, b, f) {
      this.gravity = t, this.integrationParameters = new lb(e), this.islands = new Cb(r), this.broadPhase = new xb(n), this.narrowPhase = new Eb(a), this.bodies = new cb(c), this.colliders = new Bb(l), this.impulseJoints = new bb(_), this.multibodyJoints = new Rb(h), this.ccdSolver = new Sb(u), this.physicsPipeline = new Ab(w), this.serializationPipeline = new ki(b), this.debugRenderPipeline = new zb(f), this.characterControllers = /* @__PURE__ */ new Set(), this.pidControllers = /* @__PURE__ */ new Set(), this.vehicleControllers = /* @__PURE__ */ new Set(), this.impulseJoints.finalizeDeserialization(this.bodies), this.bodies.finalizeDeserialization(this.colliders), this.colliders.finalizeDeserialization(this.bodies);
    }
    static fromRaw(t) {
      return t ? new $e(g.fromRaw(t.takeGravity()), t.takeIntegrationParameters(), t.takeIslandManager(), t.takeBroadPhase(), t.takeNarrowPhase(), t.takeBodies(), t.takeColliders(), t.takeImpulseJoints(), t.takeMultibodyJoints()) : null;
    }
    takeSnapshot() {
      return this.serializationPipeline.serializeAll(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints);
    }
    static restoreSnapshot(t) {
      return new ki().deserializeAll(t);
    }
    debugRender(t, e) {
      return this.debugRenderPipeline.render(this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.narrowPhase, t, e), new Ib(this.debugRenderPipeline.vertices, this.debugRenderPipeline.colors);
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
    get numInternalPgsIterations() {
      return this.integrationParameters.numInternalPgsIterations;
    }
    set numInternalPgsIterations(t) {
      this.integrationParameters.numInternalPgsIterations = t;
    }
    get maxCcdSubsteps() {
      return this.integrationParameters.maxCcdSubsteps;
    }
    set maxCcdSubsteps(t) {
      this.integrationParameters.maxCcdSubsteps = t;
    }
    createRigidBody(t) {
      return this.bodies.createRigidBody(this.colliders, t);
    }
    createCharacterController(t) {
      let e = new kb(t, this.integrationParameters, this.broadPhase, this.narrowPhase, this.bodies, this.colliders);
      return this.characterControllers.add(e), e;
    }
    removeCharacterController(t) {
      this.characterControllers.delete(t), t.free();
    }
    createPidController(t, e, r, n) {
      let a = new Db(this.integrationParameters, this.bodies, t, e, r, n);
      return this.pidControllers.add(a), a;
    }
    removePidController(t) {
      this.pidControllers.delete(t), t.free();
    }
    createVehicleController(t) {
      let e = new Fb(t, this.broadPhase, this.narrowPhase, this.bodies, this.colliders);
      return this.vehicleControllers.add(e), e;
    }
    removeVehicleController(t) {
      this.vehicleControllers.delete(t), t.free();
    }
    createCollider(t, e) {
      let r = e ? e.handle : void 0;
      return this.colliders.createCollider(this.bodies, t, r);
    }
    createImpulseJoint(t, e, r, n) {
      return this.impulseJoints.createJoint(this.bodies, t, e.handle, r.handle, n);
    }
    createMultibodyJoint(t, e, r, n) {
      return this.multibodyJoints.createJoint(t, e.handle, r.handle, n);
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
    castRay(t, e, r, n, a, c, l, _) {
      return this.broadPhase.castRay(this.narrowPhase, this.bodies, this.colliders, t, e, r, n, a, c ? c.handle : null, l ? l.handle : null, this.colliders.castClosure(_));
    }
    castRayAndGetNormal(t, e, r, n, a, c, l, _) {
      return this.broadPhase.castRayAndGetNormal(this.narrowPhase, this.bodies, this.colliders, t, e, r, n, a, c ? c.handle : null, l ? l.handle : null, this.colliders.castClosure(_));
    }
    intersectionsWithRay(t, e, r, n, a, c, l, _, h) {
      this.broadPhase.intersectionsWithRay(this.narrowPhase, this.bodies, this.colliders, t, e, r, n, a, c, l ? l.handle : null, _ ? _.handle : null, this.colliders.castClosure(h));
    }
    intersectionWithShape(t, e, r, n, a, c, l, _) {
      let h = this.broadPhase.intersectionWithShape(this.narrowPhase, this.bodies, this.colliders, t, e, r, n, a, c ? c.handle : null, l ? l.handle : null, this.colliders.castClosure(_));
      return h != null ? this.colliders.get(h) : null;
    }
    projectPoint(t, e, r, n, a, c, l) {
      return this.broadPhase.projectPoint(this.narrowPhase, this.bodies, this.colliders, t, e, r, n, a ? a.handle : null, c ? c.handle : null, this.colliders.castClosure(l));
    }
    projectPointAndGetFeature(t, e, r, n, a, c) {
      return this.broadPhase.projectPointAndGetFeature(this.narrowPhase, this.bodies, this.colliders, t, e, r, n ? n.handle : null, a ? a.handle : null, this.colliders.castClosure(c));
    }
    intersectionsWithPoint(t, e, r, n, a, c, l) {
      this.broadPhase.intersectionsWithPoint(this.narrowPhase, this.bodies, this.colliders, t, this.colliders.castClosure(e), r, n, a ? a.handle : null, c ? c.handle : null, this.colliders.castClosure(l));
    }
    castShape(t, e, r, n, a, c, l, _, h, u, w, b) {
      return this.broadPhase.castShape(this.narrowPhase, this.bodies, this.colliders, t, e, r, n, a, c, l, _, h, u ? u.handle : null, w ? w.handle : null, this.colliders.castClosure(b));
    }
    intersectionsWithShape(t, e, r, n, a, c, l, _, h) {
      this.broadPhase.intersectionsWithShape(this.narrowPhase, this.bodies, this.colliders, t, e, r, this.colliders.castClosure(n), a, c, l ? l.handle : null, _ ? _.handle : null, this.colliders.castClosure(h));
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
    set profilerEnabled(t) {
      this.physicsPipeline.raw.set_profiler_enabled(t);
    }
    get profilerEnabled() {
      return this.physicsPipeline.raw.is_profiler_enabled();
    }
    timingStep() {
      return this.physicsPipeline.raw.timing_step();
    }
    timingCollisionDetection() {
      return this.physicsPipeline.raw.timing_collision_detection();
    }
    timingBroadPhase() {
      return this.physicsPipeline.raw.timing_broad_phase();
    }
    timingNarrowPhase() {
      return this.physicsPipeline.raw.timing_narrow_phase();
    }
    timingSolver() {
      return this.physicsPipeline.raw.timing_solver();
    }
    timingVelocityAssembly() {
      return this.physicsPipeline.raw.timing_velocity_assembly();
    }
    timingVelocityResolution() {
      return this.physicsPipeline.raw.timing_velocity_resolution();
    }
    timingVelocityUpdate() {
      return this.physicsPipeline.raw.timing_velocity_update();
    }
    timingVelocityWriteback() {
      return this.physicsPipeline.raw.timing_velocity_writeback();
    }
    timingCcd() {
      return this.physicsPipeline.raw.timing_ccd();
    }
    timingCcdToiComputation() {
      return this.physicsPipeline.raw.timing_ccd_toi_computation();
    }
    timingCcdBroadPhase() {
      return this.physicsPipeline.raw.timing_ccd_broad_phase();
    }
    timingCcdNarrowPhase() {
      return this.physicsPipeline.raw.timing_ccd_narrow_phase();
    }
    timingCcdSolver() {
      return this.physicsPipeline.raw.timing_ccd_solver();
    }
    timingIslandConstruction() {
      return this.physicsPipeline.raw.timing_island_construction();
    }
    timingUserChanges() {
      return this.physicsPipeline.raw.timing_user_changes();
    }
  }
  var De;
  (function(i) {
    i[i.NONE = 0] = "NONE", i[i.COLLISION_EVENTS = 1] = "COLLISION_EVENTS", i[i.CONTACT_FORCE_EVENTS = 2] = "CONTACT_FORCE_EVENTS";
  })(De || (De = {}));
  class Mb {
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
  class Lb {
    constructor(t, e) {
      this.raw = e || new wn(t);
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    drainCollisionEvents(t) {
      this.raw.drainCollisionEvents(t);
    }
    drainContactForceEvents(t) {
      let e = new Mb();
      this.raw.drainContactForceEvents((r) => {
        e.raw = r, t(e), e.free();
      });
    }
    clear() {
      this.raw.clear();
    }
  }
  var Rr;
  (function(i) {
    i[i.NONE = 0] = "NONE", i[i.FILTER_CONTACT_PAIRS = 1] = "FILTER_CONTACT_PAIRS", i[i.FILTER_INTERSECTION_PAIRS = 2] = "FILTER_INTERSECTION_PAIRS";
  })(Rr || (Rr = {}));
  var Fi;
  (function(i) {
    i[i.EMPTY = 0] = "EMPTY", i[i.COMPUTE_IMPULSE = 1] = "COMPUTE_IMPULSE";
  })(Fi || (Fi = {}));
  var Fe;
  (function(i) {
    i[i.DYNAMIC_DYNAMIC = 1] = "DYNAMIC_DYNAMIC", i[i.DYNAMIC_KINEMATIC = 12] = "DYNAMIC_KINEMATIC", i[i.DYNAMIC_FIXED = 2] = "DYNAMIC_FIXED", i[i.KINEMATIC_KINEMATIC = 52224] = "KINEMATIC_KINEMATIC", i[i.KINEMATIC_FIXED = 8704] = "KINEMATIC_FIXED", i[i.FIXED_FIXED = 32] = "FIXED_FIXED", i[i.DEFAULT = 15] = "DEFAULT", i[i.ALL = 60943] = "ALL";
  })(Fe || (Fe = {}));
  class Mi {
    constructor(t, e, r, n) {
      this.colliderSet = t, this.handle = e, this._parent = r, this._shape = n;
    }
    finalizeDeserialization(t) {
      this.handle != null && (this._parent = t.get(this.colliderSet.raw.coParent(this.handle)));
    }
    ensureShapeIsCached() {
      this._shape || (this._shape = nt.fromRaw(this.colliderSet.raw, this.handle));
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
    setMassProperties(t, e, r, n) {
      let a = g.intoRaw(e), c = g.intoRaw(r), l = M.intoRaw(n);
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
    setVoxel(t, e, r, n) {
      this.colliderSet.raw.coSetVoxel(this.handle, t, e, r, n), this._shape = null;
    }
    propagateVoxelChange(t, e, r, n, a, c, l) {
      this.colliderSet.raw.coPropagateVoxelChange(this.handle, t.handle, e, r, n, a, c, l), this._shape = null;
    }
    combineVoxelStates(t, e, r, n) {
      this.colliderSet.raw.coCombineVoxelStates(this.handle, t.handle, e, r, n), this._shape = null;
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
      let r = g.intoRaw(t), n = Ke.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle, r, e));
      return r.free(), n;
    }
    intersectsRay(t, e) {
      let r = g.intoRaw(t.origin), n = g.intoRaw(t.dir), a = this.colliderSet.raw.coIntersectsRay(this.handle, r, n, e);
      return r.free(), n.free(), a;
    }
    castShape(t, e, r, n, a, c, l, _) {
      let h = g.intoRaw(t), u = g.intoRaw(r), w = M.intoRaw(n), b = g.intoRaw(a), f = e.intoRaw(), R = Re.fromRaw(this.colliderSet, this.colliderSet.raw.coCastShape(this.handle, h, f, u, w, b, c, l, _));
      return h.free(), u.free(), w.free(), b.free(), f.free(), R;
    }
    castCollider(t, e, r, n, a, c) {
      let l = g.intoRaw(t), _ = g.intoRaw(r), h = qe.fromRaw(this.colliderSet, this.colliderSet.raw.coCastCollider(this.handle, l, e.handle, _, n, a, c));
      return l.free(), _.free(), h;
    }
    intersectsShape(t, e, r) {
      let n = g.intoRaw(e), a = M.intoRaw(r), c = t.intoRaw(), l = this.colliderSet.raw.coIntersectsShape(this.handle, c, n, a);
      return n.free(), a.free(), c.free(), l;
    }
    contactShape(t, e, r, n) {
      let a = g.intoRaw(e), c = M.intoRaw(r), l = t.intoRaw(), _ = ve.fromRaw(this.colliderSet.raw.coContactShape(this.handle, l, a, c, n));
      return a.free(), c.free(), l.free(), _;
    }
    contactCollider(t, e) {
      return ve.fromRaw(this.colliderSet.raw.coContactCollider(this.handle, t.handle, e));
    }
    castRay(t, e, r) {
      let n = g.intoRaw(t.origin), a = g.intoRaw(t.dir), c = this.colliderSet.raw.coCastRay(this.handle, n, a, e, r);
      return n.free(), a.free(), c;
    }
    castRayAndGetNormal(t, e, r) {
      let n = g.intoRaw(t.origin), a = g.intoRaw(t.dir), c = Je.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle, n, a, e, r));
      return n.free(), a.free(), c;
    }
  }
  var Qt;
  (function(i) {
    i[i.Density = 0] = "Density", i[i.Mass = 1] = "Mass", i[i.MassProps = 2] = "MassProps";
  })(Qt || (Qt = {}));
  class tt {
    constructor(t) {
      this.enabled = true, this.shape = t, this.massPropsMode = Qt.Density, this.density = 1, this.friction = 0.5, this.restitution = 0, this.rotation = M.identity(), this.translation = g.zeros(), this.isSensor = false, this.collisionGroups = 4294967295, this.solverGroups = 4294967295, this.frictionCombineRule = ze.Average, this.restitutionCombineRule = ze.Average, this.activeCollisionTypes = Fe.DEFAULT, this.activeEvents = De.NONE, this.activeHooks = Rr.NONE, this.mass = 0, this.centerOfMass = g.zeros(), this.contactForceEventThreshold = 0, this.contactSkin = 0, this.principalAngularInertia = g.zeros(), this.angularInertiaLocalFrame = M.identity();
    }
    static ball(t) {
      const e = new Fr(t);
      return new tt(e);
    }
    static capsule(t, e) {
      const r = new bn(t, e);
      return new tt(r);
    }
    static segment(t, e) {
      const r = new mn(t, e);
      return new tt(r);
    }
    static triangle(t, e, r) {
      const n = new fn(t, e, r);
      return new tt(n);
    }
    static roundTriangle(t, e, r, n) {
      const a = new yn(t, e, r, n);
      return new tt(a);
    }
    static polyline(t, e) {
      const r = new vn(t, e);
      return new tt(r);
    }
    static voxels(t, e) {
      const r = new Rn(t, e);
      return new tt(r);
    }
    static trimesh(t, e, r) {
      const n = new Mr(t, e, r);
      return new tt(n);
    }
    static cuboid(t, e, r) {
      const n = new Se(t, e, r);
      return new tt(n);
    }
    static roundCuboid(t, e, r, n) {
      const a = new gn(t, e, r, n);
      return new tt(a);
    }
    static heightfield(t, e, r, n, a) {
      const c = new Sn(t, e, r, n, a);
      return new tt(c);
    }
    static cylinder(t, e) {
      const r = new Cn(t, e);
      return new tt(r);
    }
    static roundCylinder(t, e, r) {
      const n = new xn(t, e, r);
      return new tt(n);
    }
    static cone(t, e) {
      const r = new En(t, e);
      return new tt(r);
    }
    static roundCone(t, e, r) {
      const n = new Pn(t, e, r);
      return new tt(n);
    }
    static convexHull(t) {
      const e = new yr(t, null);
      return new tt(e);
    }
    static convexMesh(t, e) {
      const r = new yr(t, e);
      return new tt(r);
    }
    static roundConvexHull(t, e) {
      const r = new vr(t, null, e);
      return new tt(r);
    }
    static roundConvexMesh(t, e, r) {
      const n = new vr(t, e, r);
      return new tt(n);
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
    setMassProperties(t, e, r, n) {
      return this.massPropsMode = Qt.MassProps, this.mass = t, g.copy(this.centerOfMass, e), g.copy(this.principalAngularInertia, r), M.copy(this.angularInertiaLocalFrame, n), this;
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
  class Bb {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new Y(), this.map = new Ue(), t && t.forEachColliderHandle((e) => {
        this.map.set(e, new Mi(this, e, null));
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
      let n = r != null && r != null;
      if (n && isNaN(r)) throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");
      let a = e.shape.intoRaw(), c = g.intoRaw(e.translation), l = M.intoRaw(e.rotation), _ = g.intoRaw(e.centerOfMass), h = g.intoRaw(e.principalAngularInertia), u = M.intoRaw(e.angularInertiaLocalFrame), w = this.raw.createCollider(e.enabled, a, c, l, e.massPropsMode, e.mass, _, h, u, e.density, e.friction, e.restitution, e.frictionCombineRule, e.restitutionCombineRule, e.isSensor, e.collisionGroups, e.solverGroups, e.activeCollisionTypes, e.activeHooks, e.activeEvents, e.contactForceEventThreshold, e.contactSkin, n, n ? r : 0, t.raw);
      a.free(), c.free(), l.free(), _.free(), h.free(), u.free();
      let b = n ? t.get(r) : null, f = new Mi(this, w, b, e.shape);
      return this.map.set(w, f), f;
    }
    remove(t, e, r, n) {
      this.raw.remove(t, e.raw, r.raw, n), this.unmap(t);
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
  class Nb extends Dn {
    constructor(t) {
      super(), this.world = t, this.material = new Fn({
        color: 16777215,
        vertexColors: true
      }), this.geometry = new Mn(), this.frustumCulled = false;
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
  class Ob {
    constructor() {
      this.world = new $e({
        x: 0,
        y: -9.81 * 8,
        z: 0
      }), this.world.numSolverIterations = 4, this.eventQueue = new Lb(true), this.debugger = new Nb(this.world), this.entities = /* @__PURE__ */ new Map(), this.jointQueue = [];
    }
    update(t) {
      this.world.step(this.eventQueue), this.debugger.update(), this.entities.forEach(function(e) {
        e.update(t);
      }), this.eventQueue.drainCollisionEvents(function(e, r, n) {
        const a = this.getEntityFromColliderHandle(e), c = this.getEntityFromColliderHandle(r), l = {
          handle: e,
          pair: c,
          started: n,
          type: "collision"
        }, _ = {
          handle: r,
          pair: a,
          started: n,
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
      this.world.impulseJoints.forEachJointHandleAttachedToRigidBody(t.rigidBody.handle, function(n) {
        e.push(n);
      });
      for (let n = e.length - 1; n >= 0; n--) {
        const a = e[n], c = this.world.impulseJoints.get(a), l = this.getEntityById(c.body2().userData.id);
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
      const r = new ht(), n = new ht().copy(t.rigidBodyDesc.translation).sub(e.rigidBodyDesc.translation), a = new Wt().copy(t.rigidBodyDesc.rotation), c = new Wt().copy(e.rigidBodyDesc.rotation);
      r.applyQuaternion(a.conjugate()), n.applyQuaternion(c.conjugate());
      const l = At.fixed(r, a, n, c);
      return this.world.createImpulseJoint(l, t.rigidBody, e.rigidBody, true);
    }
    removeJoint(t) {
      this.world.removeImpulseJoint(t, true);
    }
    createParentJoint(t) {
      let e = t.getParentId(), r = this.getEntityById(e);
      e && (r ? this.createJoint(r, t) : this.jointQueue.push(t.id));
      for (let n = this.jointQueue.length - 1; n >= 0; n--) {
        let a = this.getEntityById(this.jointQueue[n]);
        a && (r = this.getEntityById(a.getParentId()), r && (this.createJoint(r, a), this.jointQueue.splice(n, 1)));
      }
    }
    removeJoints(t) {
      const e = [];
      this.world.impulseJoints.forEachJointHandleAttachedToRigidBody(t.rigidBody.handle, function(r) {
        e.push(r);
      });
      for (let r = e.length - 1; r >= 0; r--) {
        const n = e[r], a = this.world.impulseJoints.get(n), c = this.getEntityById(a.body1().userData.id), l = this.getEntityById(a.body2().userData.id);
        t.id == c.id && l.rigidBodyDesc.userData.parentId != null && (this.jointQueue.push(l.id), l.setParentId(null)), this.removeJoint(a);
      }
    }
    removeParentJoint(t) {
      const e = [], r = this.getEntityById(t.getParentId());
      if (r) {
        this.world.impulseJoints.forEachJointHandleAttachedToRigidBody(r.rigidBody.handle, function(n) {
          e.push(n);
        });
        for (let n = e.length - 1; n >= 0; n--) {
          const a = e[n], c = this.world.impulseJoints.get(a), l = this.getEntityById(c.body2().userData.id);
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
  class Hb {
    constructor(t) {
      this.interval = new ts(), this.physics = new Ob(), this.graphics, this.assets = new es(this.onLoad.bind(this, t));
    }
    init(t) {
      this.graphics = new rs(t), this.graphics.scene.add(this.physics.debugger), this.physics.debugger.disable(), this.assets.load({
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
  const Gb = {
    key: 0,
    class: "modal"
  }, Wb = {
    class: "container"
  }, Vb = {
    class: "content"
  }, Ub = {
    key: 0,
    class: "title"
  }, Jb = [
    "innerHTML"
  ], Kb = {
    class: "inputs"
  }, qb = [
    "id",
    "type",
    "value",
    "min",
    "max",
    "step",
    "accept"
  ], $b = {
    __name: "Modal",
    setup(i) {
      var t = Q(""), e = Q(""), r = Q([]), n = Q(false);
      function a() {
        window.addEventListener("openModal", l), window.addEventListener("closeModal", _), window.addEventListener("keydown", w);
      }
      function c() {
        window.removeEventListener("openModal", l), window.removeEventListener("closeModal", _), window.removeEventListener("keydown", w);
      }
      function l(b) {
        n.value = true, b.detail && (b.detail.title && (t.value = b.detail.title), b.detail.text && (e.value = b.detail.text), b.detail.inputs && (r.value = b.detail.inputs, r.value.forEach(function(f) {
          f.type == "file" || f.type == "range" || f.type == "text" ? f.event = "change" : f.event = "click";
        }))), setTimeout(function() {
          window.dispatchEvent(new CustomEvent("modalOpened"));
        }, 100);
      }
      function _() {
        n.value = false, setTimeout(function() {
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
        if (n.value == true) {
          var f = [
            "Space",
            "Enter",
            "Escape"
          ];
          f.indexOf(b.code) > -1 && (b.preventDefault(), u(b));
        }
      }
      return Ht(function() {
        a();
      }), Sr(function() {
        c();
      }), (b, f) => (W(), Cr(Me, {
        name: "fade-modal"
      }, {
        default: te(() => [
          gt(n) == true ? (W(), q("div", Gb, [
            P("div", {
              class: "background",
              onClick: _
            }),
            P("div", Wb, [
              P("div", Vb, [
                gt(t) != "" ? (W(), q("h1", Ub, ee(gt(t)), 1)) : Vt("", true),
                P("p", {
                  class: "text",
                  innerHTML: gt(e)
                }, null, 8, Jb),
                P("div", Kb, [
                  (W(true), q(re, null, pe(gt(r), (R, T) => (W(), q("input", Ln({
                    class: R.class,
                    id: "modal-" + R.type + "-" + T,
                    type: R.type,
                    value: R.value,
                    min: R.min,
                    max: R.max,
                    step: R.step,
                    accept: R.accept,
                    style: R.style
                  }, {
                    [Bn(R.event)]: (j) => h(R.callback, j)
                  }), null, 16, qb))), 256))
                ]),
                P("a", {
                  class: "close",
                  onClick: _
                }, [
                  ...f[0] || (f[0] = [
                    P("span", null, "x", -1)
                  ])
                ])
              ])
            ])
          ])) : Vt("", true)
        ]),
        _: 1
      }));
    }
  }, Xb = Kt($b, [
    [
      "__scopeId",
      "data-v-7c21f54e"
    ]
  ]), Yb = {
    __name: "App",
    setup(i) {
      const t = Q(false), e = Q(), r = window.game = new Hb(a), n = ha();
      function a() {
        t.value = true;
      }
      return Ht(function() {
        r.init(e.value);
      }), (c, l) => {
        const _ = Nn("router-view");
        return W(), q(re, null, [
          P("canvas", {
            ref_key: "canvas",
            ref: e
          }, null, 512),
          t.value ? (W(), q("div", {
            key: 0,
            class: Ot([
              "page",
              gt(n).name
            ])
          }, [
            Ct(_, null, {
              default: te(({ Component: h }) => [
                Ct(Me, {
                  name: "fade"
                }, {
                  default: te(() => [
                    (W(), Cr(On(h), {
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
          Ct(Xb),
          Ct(is)
        ], 64);
      };
    }
  }, Qb = Kt(Yb, [
    [
      "__scopeId",
      "data-v-acc4bc17"
    ]
  ]), Zb = {
    __name: "PageHome",
    setup(i) {
      var t = Q("Home Page");
      return Ht(function() {
      }), (e, r) => (W(), q("h1", null, ee(gt(t)), 1));
    }
  }, tm = {
    __name: "PagePlay",
    setup(i) {
      var t = Q("Play Page");
      return Ht(function() {
      }), (e, r) => (W(), q("h1", null, ee(gt(t)), 1));
    }
  };
  class Xe extends Hn {
    constructor(t) {
      super(), this.name = t.name || "", this.type = t.type || "entity", this.id = t.id || Gn.generateUUID(), this.isEntity = true, this.object, this.objectDesc, this.rigidBody, this.rigidBodyDesc, this.collidersDesc = [], this.snapshot = {
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
      }, t), this.rigidBodyDesc = new St(isNaN(t.status) ? ft[t.status] : t.status), this.rigidBodyDesc.enabledRotations(t.enabledRotations.x, t.enabledRotations.y, t.enabledRotations.z), this.rigidBodyDesc.enabledTranslations(t.enabledTranslations.x, t.enabledTranslations.y, t.enabledTranslations.z), this.rigidBodyDesc.setAngularDamping(t.angularDamping), this.rigidBodyDesc.setCcdEnabled(t.ccd), this.rigidBodyDesc.setEnabled(t.isEnabled), this.rigidBodyDesc.setLinearDamping(t.linearDamping), this.rigidBodyDesc.setRotation(t.rotation), this.rigidBodyDesc.setSleeping(t.sleeping), this.rigidBodyDesc.setSoftCcdPrediction(t.softCcdPrediction), this.rigidBodyDesc.setTranslation(t.position.x, t.position.y, t.position.z), this.rigidBodyDesc.setUserData({
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
        const r = new tt(t.shape);
        r.setActiveCollisionTypes(isNaN(t.activeCollisionTypes) ? Fe[t.activeCollisionTypes] : t.activeCollisionTypes), r.setActiveEvents(isNaN(t.activeEvents) ? De[t.activeEvents] : t.activeEvents), r.setCollisionGroups(t.collisionGroups), r.setContactForceEventThreshold(t.contactForceEventThreshold), r.setMass(t.mass), r.setDensity(t.density), r.setFriction(t.friction), r.setRestitution(t.restitution), r.setSensor(t.isSensor), r.setSolverGroups(t.solverGroups), r.setTranslation(t.translation.x, t.translation.y, t.translation.z), r.events = t.events, this.collidersDesc.push(r);
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
        const t = lt.dot(this.forceDirection), e = t + this.forceAcceleration, n = Math.max(t, Math.min(e, this.forceSpeedMax)) - t;
        lt.x += this.forceDirection.x * n, lt.y += this.forceDirection.y * n, lt.z += this.forceDirection.z * n, this.setLinearVelocity(lt);
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
      let n = 1;
      r.applyAxisAngle({
        x: 0,
        y: 0,
        z: 1
      }, -e), n *= -Math.sign(Math.round(r.x)), t = lt.copy(t), t.multiplyScalar(n), this.setAngularVelocity(t);
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
      return typeof t.easing == "string" && (t.easing = t.easing.split(".").reduce((r, n) => r && r[n] || null, ss)), new as(t.object, this.tweens).to(t.to, t.duration).dynamic(t.dynamic).easing(t.easing).interpolation(t.interpolation).onStart(t.onStart).onUpdate(t.onUpdate).onComplete(t.onComplete);
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
      this.getCollider(t.handle).events.filter(function(n) {
        return n.started == null && t.started == true || n.started == t.started;
      }.bind(this)).forEach(function(n) {
        try {
          let a = n;
          a && (typeof n == "object" && (a = this[n.name]), a(Object.assign(t, n)));
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
  let lt = new ht(), wt = class extends Xe {
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
      }, t), t.shape = new Se(t.scale.x / 2, t.scale.y / 2, t.scale.z / 2), super(t), this.isCube = true, this.type = "cube", this.model = t.model, this.model.isObject3D == null) {
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
      var e = new Wn(1, 1, 1), r = new Vi({
        color: t.color
      });
      const n = new Ui(e, r);
      return n.receiveShadow = true, n.castShadow = true, n;
    }
    setModel(t) {
      this.model = t;
    }
    setScale(t) {
      for (var e = new ht().copy(t), r = e.clone(), n = 0; n < this.rigidBody.numColliders(); n++) {
        var a = this.rigidBody.collider(n), c = this.collidersDesc[n], l = new ht().copy(c.shape.halfExtents), _ = l.clone().multiplyScalar(2), h = new ht().copy(c.translation);
        n == 0 && r.divide(_), a.setHalfExtents(l.multiply(r)), a.setTranslationWrtParent(h.multiply(r));
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
  class jn extends Xe {
    constructor(t) {
      t = Object.assign({
        status: 1
      }, t), super(t);
    }
  }
  class em extends wt {
    static model = {
      name: ""
    };
    constructor(t) {
      t = Object.assign({
        collisionGroups: 0,
        isSensor: true,
        status: 1
      }, t), super(t), this.lightType = t.lightType, this.model = qi.create(t.lightType, t), this.type = "light";
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
  class rm extends Xe {
    static model = {
      name: ""
    };
    constructor(t = {}) {
      if (t = Object.assign({
        color: "#ffffff",
        heightSegments: 32,
        radius: 0.5,
        widthSegments: 32
      }, t), t.shape = new Fr(t.radius), super(t), this.isSphere = true, this.type = "sphere", this.model = t.model, this.model.isObject3D == null) {
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
      const e = new Vn(t.radius, t.widthSegments, t.heightSegments), r = new Vi({
        color: t.color
      }), n = new Ui(e, r);
      return n.receiveShadow = true, n.castShadow = true, n;
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
  class im extends Xe {
    constructor(t) {
      t = Object.assign({
        indices: new Uint16Array(),
        status: 1,
        vertices: new Float32Array()
      }, t);
      let e, r = [];
      t.model ? (t.model.traverse(function(n) {
        n.isMesh && (e = n.geometry, e.rotateX(n.rotation.x), e.rotateY(n.rotation.y), e.rotateZ(n.rotation.z), e.scale(n.scale.x, n.scale.y, n.scale.z), e.translate(n.position.x, n.position.y, n.position.z), r.push(e));
      }), e = Un(r), t.vertices = e.attributes.position.array, t.indices = e.index.array, t.shape = new Mr(t.vertices, t.indices, fr.FIX_INTERNAL_EDGES)) : console.error("Error: TriMesh missing model."), super(t), this.isTriMesh = true, this.type = "trimesh", this.model = t.model, this.onTriMeshAdded = this.onTriMeshAdded.bind(this), this.addEventListener("added", this.onTriMeshAdded);
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
  let nm = class An {
    static Cube = wt;
    static Empty = jn;
    static Light = em;
    static Sphere = rm;
    static TriMesh = im;
    static create(t) {
      return new this[t.className](t);
    }
    static getClassNameByType(t) {
      return Object.keys({
        ...this,
        ...An
      }).find((n) => n.toLowerCase() == t);
    }
    static getPropertyByClassName(t, e) {
      const r = this[e];
      if (r) return r[t];
    }
  };
  class sm extends wt {
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
        shape: new Se(t.scale.x * 0.4, t.scale.y * 0.125, t.scale.z * 0.4),
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
  class am extends wt {
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
  class om extends wt {
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
  class cm extends wt {
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
  class lm extends wt {
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
      var r = new ht(1, 0, 0), n = new Wt().copy(e.rigidBody.rotation()), a = new xr().setFromQuaternion(n), c = a.z;
      r.x = Math.cos(c), r.y = Math.sin(c), t.setForce(r, 0.5, 14);
    }
  }
  class _m extends wt {
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
  class dm extends wt {
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
  class hm extends wt {
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
      var r = new ht().copy(game.physics.world.gravity), n = r.length(), a = new Wt().copy(e.rigidBody.rotation()), c = new xr().setFromQuaternion(a), l = -(Math.PI / 2 - c.z);
      game.physics.world.gravity.x = n * Math.cos(l), game.physics.world.gravity.y = n * Math.sin(l), t.dispatchEvent({
        type: "setgravity",
        gravity: r,
        value: l
      });
    }
  }
  class In {
    constructor() {
    }
    static create(t = "PerspectiveCamera", e) {
      var r, n, a = window.innerWidth, c = window.innerHeight, l = a / c;
      return e = Object.assign({
        far: 100,
        fov: 45,
        near: 0.05,
        zoom: 1
      }, e), t == "PerspectiveCamera" ? r = new Jn(e.fov, l, e.near, e.far) : t == "OrthographicCamera" && (r = new Kn(-l, l, 1, -1, e.near, e.far)), r.fov = e.fov, r.zoom = e.zoom, r.updateProjectionMatrix(), e.helper == true && (n = new qn(r), r.addEventListener("added", function(_) {
        r.parent.add(n);
      }), r.addEventListener("removed", function(_) {
        n.removeFromParent();
      })), r;
    }
  }
  class wm extends wt {
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
      }, t), super(t), this.type = "player", this.keys = {}, this.pointer = {}, this.jumpCount = 0, this.mode = "jump", this.light = qi.create("PointLight", {
        color: "#dc265a",
        intensity: Math.PI * 10
      }), this.camera = In.create("PerspectiveCamera"), this.cameraOffset = new ht(0, 0, 20), this.onPlayerAdded = this.onPlayerAdded.bind(this), this.addEventListener("added", this.onPlayerAdded);
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
        const e = this.rigidBody.mass(), r = new ht(0, 30 * e, 0), n = game.physics.world.gravity, a = Math.atan2(n.y, n.x) + Math.PI / 2;
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
        this.keys.KeyA == true ? t = -1 : this.keys.KeyD == true ? t = 1 : this.keys.ArrowLeft == true ? t = -1 : this.keys.ArrowRight == true && (t = 1), hr.copy({
          x: t,
          y: 0,
          z: 0
        }), hr.applyAxisAngle({
          x: 0,
          y: 0,
          z: 1
        }, r), this.setForce(hr, 2, 14);
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
  let hr = new ht();
  class um extends jn {
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
  class pm extends wt {
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
  class gm extends wt {
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
      var r = e.rigidBody.collider(0), n = new ht().copy(r.halfExtents()).multiplyScalar(2);
      t.setScale(n);
    }
  }
  class bm extends wt {
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
        shape: new Se(t.scale.x * 0.4, t.scale.y * 0.125, t.scale.z * 0.25),
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
  class mm extends wt {
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
  class Li extends nm {
    static Bounce = sm;
    static Checkpoint = am;
    static Control = om;
    static Cube = cm;
    static Direction = lm;
    static Finish = _m;
    static Grapple = dm;
    static Gravity = hm;
    static Player = wm;
    static Prop = um;
    static Reset = pm;
    static Resize = gm;
    static Spike = bm;
    static Tip = mm;
    static create(t) {
      return t.className == null && (t.className = super.getClassNameByType(t.type)), t.model == null && (t.model = super.getPropertyByClassName("model", t.className)), t.model && game.assets.get(t.model.name) && (t.model = game.assets.duplicate(t.model.name)), super.create(t);
    }
  }
  class fm {
    constructor(t, e) {
      this.execute = t, this.undo = e;
    }
  }
  class ym {
    constructor() {
      this.commands = [], this.current = -1;
    }
    add(t, e) {
      const r = new fm(t, e);
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
  const vm = {
    class: "panel"
  }, Rm = {
    class: "actions"
  }, Sm = {
    __name: "PanelActions",
    props: {
      game: Object,
      mode: Object
    },
    emits: [
      "setMode"
    ],
    setup(i, { emit: t }) {
      const e = t;
      function r(n) {
        e("setMode", {
          type: n
        });
      }
      return Ht(function() {
      }), (n, a) => (W(), q("div", vm, [
        P("div", Rm, [
          P("button", {
            class: Ot([
              "action",
              {
                selected: i.mode.type == "select"
              }
            ]),
            onClick: a[0] || (a[0] = (c) => r("select")),
            title: "Select"
          }, [
            ...a[3] || (a[3] = [
              P("span", {
                class: "material-symbols-rounded"
              }, "arrow_selector_tool", -1)
            ])
          ], 2),
          P("button", {
            class: Ot([
              "action",
              {
                selected: i.mode.type == "add"
              }
            ]),
            onClick: a[1] || (a[1] = (c) => r("add")),
            title: "Add"
          }, [
            ...a[4] || (a[4] = [
              P("span", {
                class: "material-symbols-rounded"
              }, "dashboard_customize", -1)
            ])
          ], 2),
          P("button", {
            class: Ot([
              "action",
              {
                selected: i.mode.type == "move"
              }
            ]),
            onClick: a[2] || (a[2] = (c) => r("move")),
            title: "Move camera"
          }, [
            ...a[5] || (a[5] = [
              P("span", {
                class: "material-symbols-rounded"
              }, "back_hand", -1)
            ])
          ], 2)
        ])
      ]));
    }
  }, Cm = Kt(Sm, [
    [
      "__scopeId",
      "data-v-59459b72"
    ]
  ]), xm = {
    class: "panel"
  }, Em = {
    class: "prefabs"
  }, Pm = [
    "title",
    "onClick"
  ], jm = [
    "src"
  ], Am = {
    __name: "PanelPrefabs",
    props: {
      game: Object,
      mode: Object
    },
    emits: [
      "addEntity"
    ],
    setup(i, { emit: t }) {
      const e = t, r = i, n = Q({}), a = Q(false), c = dt(() => _()), l = dt((w) => (r.mode.type == "add" ? a.value = !w : a.value = false, a.value));
      function _() {
        return Object.keys(n.value).map((w) => {
          const b = n.value[w], f = r.game.assets.get(b.model.name);
          return b.thumbnail = r.game.assets.assetModelLoader.renderThumbnail(f, b), b;
        });
      }
      function h(w, b) {
        e("addEntity", w, b);
      }
      function u() {
        a.value = false;
      }
      return Ht(async () => {
        n.value = r.game.assets.get("prefabs");
      }), (w, b) => Ji((W(), q("div", xm, [
        b[0] || (b[0] = P("div", {
          class: "header"
        }, [
          P("div", {
            class: "title"
          }, "Add")
        ], -1)),
        P("div", Em, [
          (W(true), q(re, null, pe(c.value, (f) => (W(), q("button", {
            class: "prefab",
            title: f.className,
            onClick: (R) => h(R, f)
          }, [
            P("img", {
              src: f.thumbnail
            }, null, 8, jm)
          ], 8, Pm))), 256))
        ]),
        P("button", {
          class: "close",
          onClick: u
        }, "x")
      ], 512)), [
        [
          Ki,
          l.value
        ]
      ]);
    }
  }, Im = Kt(Am, [
    [
      "__scopeId",
      "data-v-b0bcae3d"
    ]
  ]), zm = {
    class: "panel"
  }, Tm = {
    class: "header"
  }, km = {
    class: "actions"
  }, Dm = [
    "disabled"
  ], Fm = [
    "disabled"
  ], Mm = [
    "onClick",
    "onContextmenu",
    "onDragstart",
    "onDragover",
    "onDragend",
    "onDrop"
  ], Lm = [
    "onDblclick"
  ], Bm = [
    "id",
    "value",
    "onChange"
  ], Nm = [
    "onClick"
  ], Om = {
    class: "row"
  }, Hm = [
    "value",
    "onChange"
  ], Gm = [
    "value",
    "onChange"
  ], Wm = [
    "value",
    "onChange"
  ], Vm = {
    class: "row"
  }, Um = [
    "value",
    "onChange"
  ], Jm = [
    "value",
    "onChange"
  ], Km = [
    "value",
    "onChange"
  ], qm = {
    class: "row"
  }, $m = [
    "value",
    "onChange"
  ], Xm = [
    "value",
    "onChange"
  ], Ym = [
    "value",
    "onChange"
  ], Qm = {
    class: "row"
  }, Zm = [
    "onChange"
  ], tf = {
    class: "row"
  }, ef = [
    "onChange"
  ], rf = {
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
    setup(i, { emit: t }) {
      const e = i, r = t, n = Q(true), a = Q();
      function c() {
        return n.value == true;
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
      function R(I, v) {
        r("moveEntity", I, v);
      }
      function T(I, v) {
        v.isExpanded = !v.isExpanded;
      }
      function j(I, v, S) {
        r("editEntity", I, v, S);
      }
      return (I, v) => (W(), q("div", zm, [
        P("div", Tm, [
          P("div", {
            class: "title",
            onClick: v[0] || (v[0] = (S) => n.value = !n.value)
          }, "Scene"),
          P("div", km, [
            P("button", {
              class: "action button",
              onClick: v[1] || (v[1] = (S) => r("undo")),
              title: "Undo",
              disabled: e.canUndo == false
            }, [
              ...v[7] || (v[7] = [
                P("span", {
                  class: "material-symbols-rounded"
                }, "undo", -1)
              ])
            ], 8, Dm),
            P("button", {
              class: "action button",
              onClick: v[2] || (v[2] = (S) => r("redo")),
              title: "Redo",
              disabled: e.canRedo == false
            }, [
              ...v[8] || (v[8] = [
                P("span", {
                  class: "material-symbols-rounded"
                }, "redo", -1)
              ])
            ], 8, Fm),
            P("button", {
              class: "action button",
              onClick: v[3] || (v[3] = (S) => r("resetEntities")),
              title: "Restart level"
            }, [
              ...v[9] || (v[9] = [
                P("span", {
                  class: "material-symbols-rounded"
                }, "fast_rewind", -1)
              ])
            ]),
            i.isPlaying == true ? (W(), q("button", {
              key: 0,
              onClick: v[4] || (v[4] = (S) => r("pause")),
              class: "action button",
              title: "Pause level"
            }, [
              ...v[10] || (v[10] = [
                P("span", {
                  class: "material-symbols-rounded"
                }, "pause", -1)
              ])
            ])) : (W(), q("button", {
              key: 1,
              class: "action button",
              onClick: v[5] || (v[5] = (S) => r("play")),
              title: "Play level"
            }, [
              ...v[11] || (v[11] = [
                P("span", {
                  class: "material-symbols-rounded"
                }, "play_arrow", -1)
              ])
            ]))
          ])
        ]),
        Ji(P("div", {
          ref_key: "content",
          ref: a,
          class: "content"
        }, [
          P("ul", null, [
            Ct(Xn, {
              name: "list"
            }, {
              default: te(() => [
                (W(true), q(re, null, pe(e.entities, (S) => (W(), q("li", {
                  key: S.id
                }, [
                  P("div", {
                    class: Ot([
                      "entity-title",
                      {
                        selected: S.isSelected
                      }
                    ]),
                    draggable: "true",
                    onClick: (x) => l(x, S),
                    onContextmenu: ur((x) => _(x, S), [
                      "prevent"
                    ]),
                    onDragstart: (x) => w(x, S),
                    onDragover: ur((x) => void 0, [
                      "prevent"
                    ]),
                    onDragend: (x) => f(x, S),
                    onDrop: (x) => R(x, S)
                  }, [
                    P("span", {
                      onDblclick: (x) => r("selectParentEntity", x, S),
                      class: Ot([
                        {
                          hidden: S.rigidBodyDesc.userData.parentId == null
                        },
                        "link material-symbols-rounded"
                      ]),
                      title: "Double click to select parent"
                    }, " link ", 42, Lm),
                    P("input", {
                      type: "text",
                      readonly: "",
                      id: S.id,
                      value: S.name || S.type,
                      onChange: (x) => r("renameEntity", x, S),
                      onKeyup: $n(u, [
                        "enter"
                      ]),
                      onFocusout: u,
                      onDblclick: h
                    }, null, 40, Bm),
                    P("span", {
                      onClick: (x) => T(x, S),
                      class: Ot([
                        "toggle material-symbols-rounded",
                        {
                          isExpanded: S.isExpanded
                        }
                      ])
                    }, " keyboard_arrow_down ", 10, Nm)
                  ], 42, Mm),
                  Ct(Me, {
                    name: "properties"
                  }, {
                    default: te(() => [
                      S.isExpanded ? (W(), q("div", {
                        key: 0,
                        class: Ot([
                          "entity-properties",
                          {
                            expanded: S.isExpanded
                          }
                        ])
                      }, [
                        P("div", Om, [
                          v[12] || (v[12] = P("span", {
                            class: "material-symbols-rounded"
                          }, "location_on", -1)),
                          P("input", {
                            type: "text",
                            value: S.rigidBodyDesc.translation.x,
                            onChange: (x) => j(x, S, "rigidBodyDesc.translation.x")
                          }, null, 40, Hm),
                          P("input", {
                            type: "text",
                            value: S.rigidBodyDesc.translation.y,
                            onChange: (x) => j(x, S, "rigidBodyDesc.translation.y")
                          }, null, 40, Gm),
                          P("input", {
                            type: "text",
                            value: S.rigidBodyDesc.translation.z,
                            onChange: (x) => j(x, S, "rigidBodyDesc.translation.z")
                          }, null, 40, Wm)
                        ]),
                        P("div", Vm, [
                          v[13] || (v[13] = P("span", {
                            class: "material-symbols-rounded"
                          }, "orbit", -1)),
                          P("input", {
                            type: "text",
                            value: S.rigidBodyDesc.rotation.x,
                            onChange: (x) => j(x, S, "rigidBodyDesc.rotation.x")
                          }, null, 40, Um),
                          P("input", {
                            type: "text",
                            value: S.rigidBodyDesc.rotation.y,
                            onChange: (x) => j(x, S, "rigidBodyDesc.rotation.y")
                          }, null, 40, Jm),
                          P("input", {
                            type: "text",
                            value: S.rigidBodyDesc.rotation.z,
                            onChange: (x) => j(x, S, "rigidBodyDesc.rotation.z")
                          }, null, 40, Km)
                        ]),
                        P("div", qm, [
                          v[14] || (v[14] = P("span", {
                            class: "material-symbols-rounded"
                          }, "package_2", -1)),
                          P("input", {
                            type: "text",
                            value: S.objectDesc.scale.x,
                            onChange: (x) => j(x, S, "objectDesc.scale.x")
                          }, null, 40, $m),
                          P("input", {
                            type: "text",
                            value: S.objectDesc.scale.y,
                            onChange: (x) => j(x, S, "objectDesc.scale.y")
                          }, null, 40, Xm),
                          P("input", {
                            type: "text",
                            value: S.objectDesc.scale.z,
                            onChange: (x) => j(x, S, "objectDesc.scale.z")
                          }, null, 40, Ym)
                        ]),
                        P("div", Qm, [
                          v[16] || (v[16] = P("span", {
                            class: "material-symbols-rounded"
                          }, "bolt", -1)),
                          P("select", {
                            onChange: (x) => j(x, S, "collidersDesc[0].events[0].name")
                          }, [
                            v[15] || (v[15] = P("option", null, "None", -1)),
                            (W(true), q(re, null, pe(Object.getOwnPropertyNames(S).filter((x) => typeof S[x] == "function"), (x) => (W(), q("option", null, ee(x), 1))), 256))
                          ], 40, Zm)
                        ]),
                        P("div", tf, [
                          v[17] || (v[17] = P("span", {
                            class: "material-symbols-rounded hidden"
                          }, "format_size", -1)),
                          P("input", {
                            type: "text",
                            value: "{x:0,y:0,z:0}",
                            onChange: (x) => j(x, S),
                            placeholder: "{x:0,y:0,z:0}"
                          }, null, 40, ef)
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
              onClick: v[6] || (v[6] = (S) => {
                r("setMode", {
                  type: "add"
                });
              })
            }, [
              ...v[18] || (v[18] = [
                P("div", {
                  class: "entity-title"
                }, [
                  P("span", {
                    class: "material-symbols-rounded"
                  }, "add"),
                  P("span", null, "Add entity")
                ], -1)
              ])
            ])) : Vt("", true)
          ])
        ], 512), [
          [
            Ki,
            c()
          ]
        ])
      ]));
    }
  }, nf = Kt(rf, [
    [
      "__scopeId",
      "data-v-68bde30e"
    ]
  ]), sf = [
    "onClick",
    "disabled"
  ], af = {
    key: 0,
    class: "material-symbols-rounded"
  }, Bi = 150, of = {
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
    setup(i) {
      const t = i, e = Q({
        animationDuration: `${Bi}ms`,
        left: "0px",
        top: "0px"
      }), r = Q(false), n = Q(false), a = Q();
      function c(u, w) {
        w.callback && w.callback(u), _();
      }
      function l(u) {
        r.value == false ? (r.value = true, h(u)) : setTimeout(() => l(u), Bi);
      }
      function _(u) {
        n.value == false && (r.value = false);
      }
      async function h(u) {
        await Wi();
        const w = window.innerWidth, b = window.innerHeight, f = a.value.offsetWidth, R = a.value.offsetHeight;
        let T = u.clientX, j = u.clientY;
        T + f > w && (T = w - f), j + R > b && (j = b - R), e.value.left = T + "px", e.value.top = j + "px";
      }
      return Gi(() => t.event, () => {
        l(t.event);
      }), Ht(function() {
        document.addEventListener("pointerup", _);
      }), Sr(function() {
        document.removeEventListener("pointerup", _);
      }), (u, w) => (W(), Cr(Me, {
        name: "fade",
        onBeforeEnter: w[0] || (w[0] = (b) => n.value = true),
        onAfterEnter: w[1] || (w[1] = (b) => n.value = false)
      }, {
        default: te(() => [
          r.value ? (W(), q("ul", {
            key: 0,
            ref_key: "menu",
            ref: a,
            style: Yn(e.value)
          }, [
            (W(true), q(re, null, pe(t.actions, (b) => (W(), q("li", null, [
              P("button", {
                onClick: ur((f) => c(f, b), [
                  "prevent"
                ]),
                disabled: b.disabled
              }, [
                b.icon ? (W(), q("span", af, ee(b.icon), 1)) : Vt("", true),
                Qn(" " + ee(b.text), 1)
              ], 8, sf)
            ]))), 256))
          ], 4)) : Vt("", true)
        ]),
        _: 1
      }));
    }
  }, cf = Kt(of, [
    [
      "__scopeId",
      "data-v-7804f6c1"
    ]
  ]), Ni = {
    bounce({ pair: i, target: t, value: e = 30 }) {
      const r = new Wt().copy(t.rigidBody.rotation()), a = new xr().setFromQuaternion(r).z;
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
      }, a), i.applyVelocityAtAxisAngle({
        x: 1,
        y: 0,
        z: 1
      }, {
        x: 0,
        y: 0,
        z: 1
      }, a), i.applyImpulseAtAngle({
        x: 0,
        y: e * i.rigidBody.mass(),
        z: 0
      }, a);
    },
    teleport({ pair: i, value: t = {
      x: 0,
      y: 0,
      z: 0
    } }) {
      i.setPosition(t);
    },
    toggleVisibility(i) {
      i.target.object.visible = !i.target.object.visible;
    }
  }, lf = {
    class: "panels"
  }, _f = {
    __name: "PageLevelEditor",
    props: {
      game: Object
    },
    setup(i) {
      const t = i, e = Q({
        type: "select"
      }), r = Q([]), n = Q({}), a = [], c = wr(new ym()), l = wr(t.game.interval), _ = dt(() => c.canUndo()), h = dt(() => c.canRedo()), u = dt(() => l.threadRunning), w = Q({}), b = Q([]), f = new os(In.create(), t.game.graphics.canvas);
      f.zoomToCursor = true, f.zoomSpeed = 3, f.minDistance = 1, f.maxDistance = 100, f.mouseButtons = {
        LEFT: 2,
        MIDDLE: 2,
        RIGHT: 0
      }, Gt(false);
      function R(E) {
        e.value = E;
      }
      function T(E, F, A) {
        const m = A.replace(/\[/g, ".").replace(/]/g, "").split("."), y = m[m.length - 1], C = m.reduce((X, N) => typeof X[N] == "object" ? X[N] : X, F), z = C[y], V = E.target.value;
        c.add(function() {
          C[y] = V, F.reset();
        }, function() {
          C[y] = z, F.reset();
        }).execute();
      }
      function j(E, F) {
        const A = {
          x: Math.round(t.game.graphics.camera.position.x),
          y: Math.round(t.game.graphics.camera.position.y),
          z: 0
        }, m = Li.create({
          ...F,
          position: A
        }), y = a[a.length - 1], C = y ? r.value.indexOf(y) + 1 : 0;
        m.addEventListener("added", function(z) {
          t.game.graphics.scene.add(m.object);
        }), Object.assign(m, Ni), c.add(function() {
          t.game.physics.add(m), r.value.splice(C, 0, m), x(E, m), mt();
        }, function() {
          t.game.physics.remove(m), r.value.splice(C, 1), Z(E, m), mt();
        }).execute();
      }
      function I(E, F) {
        const A = a.map((m) => ({
          children: t.game.physics.getChildren(m),
          index: r.value.indexOf(m),
          entity: m
        })).sort((m, y) => m.index - y.index);
        A.length > 0 && c.add(function() {
          for (let m = A.length - 1; m >= 0; m--) {
            const y = A[m];
            t.game.physics.remove(y.entity), r.value.splice(y.index, 1), Z(E, y.entity, m), mt();
          }
        }, function() {
          for (let m = 0; m < A.length; m++) {
            const y = A[m];
            y.children.forEach((C) => C.setParentId(y.entity.id)), t.game.physics.add(y.entity), r.value.splice(y.index, 0, y.entity), mt();
          }
        }).execute();
      }
      function v(E, F) {
        if (F.isSelected) return;
        const A = a.map((m) => ({
          index: r.value.indexOf(m),
          entity: m
        })).sort((m, y) => m.index - y.index);
        c.add(function() {
          for (let y = A.length - 1; y >= 0; y--) r.value.splice(A[y].index, 1);
          const m = r.value.indexOf(F) + 1;
          for (let y = 0; y < A.length; y++) r.value.splice(m + y, 0, A[y].entity);
        }, function() {
          const m = r.value.indexOf(F) + 1;
          for (let y = A.length - 1; y >= 0; y--) r.value.splice(m + y, 1);
          for (let y = 0; y < A.length; y++) r.value.splice(A[y].index, 0, A[y].entity);
        }).execute();
      }
      function S(E, F) {
        const A = F.name || F.type, m = E.target.value;
        c.add(function() {
          F.name = m;
        }, function() {
          F.name = A;
        }).execute();
      }
      function x(E, F) {
        let A = r.value.indexOf(n.value), m = r.value.indexOf(F), y = m, C = m;
        if (E.shiftKey == true ? (C = Math.max(m, A), y = Math.max(0, Math.min(Math.min(m, A), C))) : n.value = F, E.ctrlKey == true) {
          if (F.isSelected) {
            Z(E, F);
            return;
          }
        } else Dt(E);
        for (let z = y; z <= C; z++) r.value[z].isSelected = true, a.push(r.value[z]);
      }
      function bt(E, F) {
        const A = F.getParentId(), m = t.game.physics.getEntityById(A);
        m && x(E, m);
      }
      function ut(E) {
        let F = r.value[0], A = r.value[r.value.length - 1];
        n.value = F, x({
          shiftKey: true
        }, A);
      }
      function Z(E, F, A) {
        A == null && (A = a.indexOf(F)), F.isSelected = false, a.splice(A, 1);
      }
      function Dt(E, F) {
        for (let A = a.length - 1; A >= 0; A--) Z(E, a[A], A);
      }
      function Rt(E) {
        r.value.forEach((F) => {
          F.reset();
        }), t.game.graphics.render();
      }
      function Et(E, F) {
        const A = a.map((m) => ({
          index: r.value.indexOf(m),
          parentId: m.getParentId(),
          entity: m
        })).sort((m, y) => m.index - y.index);
        A.length > 0 && c.add(function() {
          for (let m = A.length - 1; m >= 0; m--) {
            const y = A[m];
            y.entity.id != F.id && (t.game.physics.removeParentJoint(y.entity), y.entity.setParentId(F.id), t.game.physics.createParentJoint(y.entity), mt());
          }
        }, function() {
          for (let m = 0; m < A.length; m++) {
            const y = A[m];
            y.entity.id != F.id && (t.game.physics.removeParentJoint(y.entity), y.entity.setParentId(y.parentId), t.game.physics.createParentJoint(y.entity), mt());
          }
        }).execute();
      }
      function Ft(E, F) {
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
        E.repeat || (E.code == "KeyA" && (E.ctrlKey || E.metaKey) ? (E.preventDefault(), ut()) : E.code == "KeyD" && (E.ctrlKey || E.metaKey) ? (E.preventDefault(), Dt(E)) : E.code == "KeyX" && (E.ctrlKey || E.metaKey) ? I(E) : E.code == "KeyZ" && (E.ctrlKey || E.metaKey) && (E.shiftKey == true ? Ce() : Mt()));
      }
      function Mt() {
        c.undo();
      }
      function Ce() {
        c.redo();
      }
      function se(E) {
        t.game.physics.clear();
        const F = t.game.assets.get(E), A = [];
        return F && F.children.forEach(function(m) {
          const y = Li.create({
            ccd: true,
            friction: F.friction || 0,
            softCcdPrediction: 0.5,
            ...m
          });
          y.addEventListener("added", function(C) {
            t.game.graphics.scene.add(y.object);
          }), Object.assign(y, Ni), y.type == "player" && (t.game.player = y, t.game.graphics.setCamera(y.camera)), t.game.physics.add(y), A.push(y);
        }), A;
      }
      function ae(E, F) {
        if (F.isSelected) {
          let A = [], m = {
            text: "Link",
            icon: "link",
            disabled: a.length <= 1,
            callback: () => Et(E, F)
          }, y = {
            text: "Unlink",
            icon: "link_off",
            disabled: qt() == false,
            callback: () => Ft()
          }, C = {
            text: "Delete",
            icon: "delete",
            callback: () => I(E)
          };
          A.push(m, y, C), w.value = E, b.value = A;
        } else x(E, F), ae(E, F);
      }
      function qt() {
        for (let E = a.length - 1; E >= 0; E--) if (a[E].getParentId()) return true;
        return false;
      }
      function oe() {
        l.stop(), t.game.graphics.setCamera(f.object), t.game.graphics.render(), Gt(true);
      }
      function Ye() {
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
      return Ht(async function() {
        t.game.physics.debugger.enable(), r.value = se("boxel-3d-sandbox"), document.addEventListener("keydown", Pt), f.addEventListener("start", ce), f.addEventListener("change", $t), f.object.rotation.set(0, 0, 0), f.target.copy(t.game.player.getPosition()), t.game.player.camera.getWorldPosition(f.object.position);
      }), Sr(function() {
        document.removeEventListener("keydown", Pt), f.removeEventListener("start", ce), f.removeEventListener("change", $t);
      }), (E, F) => (W(), q("div", lf, [
        Ct(Cm, {
          game: i.game,
          mode: e.value,
          onSetMode: R
        }, null, 8, [
          "game",
          "mode"
        ]),
        Ct(Im, {
          game: i.game,
          mode: e.value,
          onAddEntity: j
        }, null, 8, [
          "game",
          "mode"
        ]),
        Ct(nf, {
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
          onPlay: Ye,
          onRenameEntity: S,
          onResetEntities: Rt,
          onSelectEntity: x,
          onSelectParentEntity: bt,
          onSetMode: R,
          onUnlinkEntity: Ft,
          onOpenContextMenu: ae,
          onRedo: Ce,
          onUndo: Mt
        }, null, 8, [
          "entities",
          "canUndo",
          "canRedo",
          "isPlaying"
        ]),
        Ct(cf, {
          event: w.value,
          actions: b.value
        }, null, 8, [
          "event",
          "actions"
        ])
      ]));
    }
  }, df = Kt(_f, [
    [
      "__scopeId",
      "data-v-1d86fb92"
    ]
  ]), hf = [
    {
      name: "home",
      path: "/",
      component: Zb
    },
    {
      name: "play",
      path: "/play",
      component: tm
    },
    {
      name: "level-editor",
      path: "/level-editor",
      component: df
    }
  ], wf = _a({
    history: Ns(),
    routes: hf
  }), zn = Zn(Qb);
  zn.use(wf);
  zn.mount("#app");
})();
